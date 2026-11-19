'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { concreteScopes } from '@/data/concrete-scopes';
import { calculatorEnglish } from '@/data/concrete-calculator-i18n';
import { Calculator, MapPin, MessageCircle } from 'lucide-react';

type Place = { label: string; lat: number; lon: number };
type Quote = { unitPrice?: number; total: number | null; bandKm?: number; customQuote: boolean; plant: string; distanceKm: number; quantity: number; grade: string; distanceSource: string };
const areas = ['Kibada, Kigamboni','Kigamboni','Vijibweni','Tungi','Mjimwema','Kibugumo','Gezaulole','Somangila','Kisarawe II','Temeke','Kurasini','Mtoni','Tandika','Mbagala','Charambe','Chamazi','Kijichi','Toangoma','Ilala','Kariakoo','Upanga','Buguruni','Tabata','Kipawa','Ukonga','Pugu','Gongo la Mboto','Kivule','Chanika','Kinondoni','Mikocheni','Kijitonyama','Sinza','Mwenge','Kawe','Mbezi Beach','Kunduchi','Tegeta','Bunju','Mbweni','Magomeni','Manzese','Ubungo','Kimara','Mbezi Luis','Mbezi Juu','Goba','Makongo','Saranga','Kwembe','Kibaha'];
const help: Record<string,string> = {
  blinding: 'C15 inaweza kuwa chaguo la kuanzia kwa kazi nyepesi zisizobeba jengo. Fuata specification ya mradi; calculator haitoi design.',
  ground: 'Kwa sakafu ya ardhini na njia za magari, C20–C30 zinaweza kujadiliwa na fundi/mhandisi. Mizigo, udongo, unene, reinforcement na joints vinaamua design sahihi.',
  structure: 'Kwa msingi, nguzo, beams na slab ya juu: tumia grade iliyo kwenye michoro ya structural engineer. Idadi ya ghorofa pekee haiamui grade.',
  marine: 'Kwa mazingira ya baharini, tanki au maji yenye kemikali: strength pekee haitoshi. Engineer aainishe exposure, mix, cover na curing zinazofaa.',
};
const money = (n: number) => new Intl.NumberFormat('en-TZ', { maximumFractionDigits: 0 }).format(n);
const input = 'w-full rounded-xl border border-gray-300 bg-white p-3 text-base text-gray-900 focus:ring-2 focus:ring-brand-500';
export default function ConcreteCalculator() {
  const [lang,setLang] = useState<'sw'|'en'>('sw');
  useEffect(()=>{try{const saved=localStorage.getItem('concrete-calculator-language');if(saved==='en'||saved==='sw')setLang(saved)}catch{}},[]);
  const changeLanguage=(next:'sw'|'en')=>{setLang(next);try{localStorage.setItem('concrete-calculator-language',next)}catch{}};
  const t=(text:string)=>lang==='en'?(calculatorEnglish[text]||text):text;
  const plantName=(text:string)=>t(text);

  const [length,setLength]=useState(''),[width,setWidth]=useState(''),[depth,setDepth]=useState(''),[unit,setUnit]=useState('cm'),[waste,setWaste]=useState('5'),[count,setCount]=useState('1');
  const [scope,setScope]=useState(''),[thicknessMode,setThicknessMode]=useState<'suggested'|'manual'>('manual'),[qtyFromDimensions,setQtyFromDimensions]=useState(false);
  const [qty,setQty]=useState(''),[grade,setGrade]=useState('C25'),[use,setUse]=useState('structure');
  const [query,setQuery]=useState(''),[places,setPlaces]=useState<Place[]>([]),[place,setPlace]=useState<Place|null>(null),[plant,setPlant]=useState('auto');
  const [manual,setManual]=useState(false),[km,setKm]=useState(''),[quote,setQuote]=useState<Quote|null>(null),[error,setError]=useState(''),[busy,setBusy]=useState(false),[searching,setSearching]=useState(false);
  const version=useRef(0), searchVersion=useRef(0);
  const invalidate=()=>{version.current++;setQuote(null);setError('');setBusy(false)};
  const l=Number(length),w=Number(width),d=Number(depth)/(unit==='mm'?1000:unit==='cm'?100:1),n=Number(count),a=Number(waste);
  const valid=[l,w,d,n].every(v=>Number.isFinite(v)&&v>0)&&Number.isInteger(n)&&Number.isFinite(a)&&a>=0&&a<=30;
  const area=valid?l*w*n:0, volume=valid?area*d:0, order=valid?Math.ceil(volume*(1+a/100)*100)/100:0;
  const selectedScope=concreteScopes.find(s=>s.id===scope);
  function applyScope(id:string){
    const chosen=concreteScopes.find(s=>s.id===id);
    setScope(id);if(chosen)setUse(chosen.gradeHelp);
    setDepth(chosen?.mm!=null?String(chosen.mm/(unit==='mm'?1:unit==='cm'?10:1000)):'');
    setThicknessMode(chosen?.mm!=null?'suggested':'manual');invalidate();
  }
  function changeUnit(next:string){
    if(depth!==''&&Number.isFinite(Number(depth)))setDepth(String(Number((Number(depth)*(unit==='mm'?1:unit==='cm'?10:1000)/(next==='mm'?1:next==='cm'?10:1000)).toFixed(6))));
    setUnit(next);
  }
  useEffect(()=>{if(qtyFromDimensions){setQty(valid?String(order):'');version.current++;setQuote(null);setError('');setBusy(false);}},[order,valid,qtyFromDimensions]);
  async function search(): Promise<Place[] | null> {
    const id=++searchVersion.current;
    setSearching(true);setError('');setPlaces([]);
    try {
      const r=await fetch('/api/concrete-locations?q='+encodeURIComponent(query));
      const data=await r.json();
      if(id!==searchVersion.current)return null;
      if(!r.ok)throw Error(data.error);
      setPlaces(data.locations);
      if(!data.locations.length)setError('Eneo halijapatikana. Ongeza kata/barabara au weka umbali unaoujua.');
      return data.locations;
    } catch(e) {
      if(id===searchVersion.current)setError(e instanceof Error?e.message:'Jaribu tena.');
      return null;
    } finally {if(id===searchVersion.current)setSearching(false)}
  }
  async function price(selected: Place | null = place) {
    const id=++version.current;
    setBusy(true);setError('');setQuote(null);
    try {
      if(!Number.isFinite(Number(qty))||Number(qty)<=0)throw Error('Weka kiasi cha zege au tumia calculator ya vipimo kwanza.');
      if(!query.trim())throw Error('Andika eneo la site.');
      let resolved=selected;
      if(!manual&&!resolved){
        const matches=await search();
        if(id!==version.current||!matches?.length)return;
        if(matches.length>1){setError('Chagua location sahihi kwenye matokeo hapo juu; bei itajikokotoa.');return;}
        resolved=matches[0];setPlace(resolved);setPlaces([]);
      }
      const r=await fetch('/api/concrete-price',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({grade,quantity:Number(qty),plant,...(manual?{distanceKm:Number(km)}:{lat:resolved?.lat,lon:resolved?.lon})})});
      const data=await r.json();
      if(id!==version.current)return;
      if(!r.ok)throw Error(data.error);
      setQuote(data);
    }catch(e){if(id===version.current)setError(e instanceof Error?e.message:'Jaribu tena.')}
    finally{if(id===version.current)setBusy(false)}
  }
  const message=lang==='en' ? ['Hello Tanzibaba, I would like a concrete quotation.',`Site: ${place?.label||query||'I will send the location'}`,`Grade: ${grade}`,`Volume: ${qty||'Please help me calculate'} m³`,...(quote?[`Plant: ${plantName(quote.plant)}`,`Distance: ${quote.distanceKm} km (${quote.distanceSource==='manual'?'entered manually':'map estimate'})`,quote.customQuote?'Please provide a custom price.':`Estimate: TZS ${money(quote.unitPrice!)} / m³; total TZS ${money(quote.total!)}.`]:[]),'Please confirm site access, VAT, pump charges and delivery schedule.'].join('\n') : ['Habari Tanzibaba, naomba quotation ya zege.',`Eneo: ${place?.label||query||'Nitatuma location'}`,`Grade: ${grade}`,`Kiasi: ${qty||'Nahitaji msaada'} m³`,...(quote?[`Plant: ${quote.plant}`,`Umbali: ${quote.distanceKm} km (${quote.distanceSource==='manual'?'nimeweka mwenyewe':'makadirio ya ramani'})`,quote.customQuote?'Naomba bei maalumu.':`Makadirio: TZS ${money(quote.unitPrice!)} / m³; jumla TZS ${money(quote.total!)}.`]:[]),'Naomba kuthibitisha location, VAT, pump na ratiba ya delivery.'].join('\n');
  const scopeDetails=selectedScope?`\n${lang==='en'?'Use':'Kazi'}: ${lang==='en'?selectedScope.en:selectedScope.sw}`:'';
  const thicknessDetails=qtyFromDimensions&&depth?`\n${lang==='en'?'Thickness':'Unene'}: ${depth} ${unit} (${thicknessMode==='suggested'?(lang==='en'?'planning suggestion':'pendekezo la kupanga'):(lang==='en'?'entered manually':'nimeweka mwenyewe')})`:'';
  const whatsapp='https://wa.me/255716002790?text='+encodeURIComponent(message+scopeDetails+thicknessDetails);
  return <div lang={lang} className="bg-gray-50 min-h-screen pb-20">
    <header className="bg-gray-950 text-white px-4 pt-12 pb-20"><div className="max-w-6xl mx-auto"><div className="flex flex-wrap items-center justify-between gap-4"><Link href="/tools" className="text-brand-300">{t("Zana za ujenzi / Tools")}</Link><div role="group" aria-label="Language / Lugha" className="inline-flex rounded-xl border border-gray-600 p-1">{([['sw','Kiswahili'],['en','English']] as const).map(([code,name])=><button key={code} type="button" aria-pressed={lang===code} onClick={()=>changeLanguage(code)} className={'px-4 py-2 rounded-lg text-base font-semibold '+(lang===code?'bg-white text-gray-950':'text-gray-200 hover:bg-gray-800')}>{name}</button>)}</div></div><div className="flex items-center gap-3 mt-5"><Calculator className="text-brand-400"/><span className="text-brand-300">DAR ES SALAAM</span></div><h1 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4">{t("Kokotoa zege na bei ya site yako")}</h1><p className="text-gray-300 text-lg max-w-2xl">{t("Concrete volume & price calculator. Weka vipimo au kiasi unachohitaji, chagua eneo lako na uone makadirio ya bei.")}</p></div></header>
    <main className="max-w-6xl mx-auto px-4 -mt-8 grid lg:grid-cols-2 gap-6 items-start">
      <section className="bg-white rounded-2xl p-6 border shadow-sm"><h2 className="text-2xl font-bold mb-2">{t("Ukubwa wa eneo")}</h2><p className="text-gray-600 mb-5">{t("Kwa slab au sehemu za mstatili. Kwa beam/nguzo, tumia vipimo vya sehemu hiyo na idadi yake. Usijumuishe sehemu zinazopishana mara mbili.")}</p><div className="rounded-xl bg-brand-50 border border-brand-100 p-4 mb-5">
        <label htmlFor="concrete-scope" className="font-semibold">{lang==='en'?'What will the concrete be used for?':'Zege litatumika kwa kazi gani?'}</label>
        <select id="concrete-scope" className={input+' mt-2'} value={scope} onChange={e=>applyScope(e.target.value)}><option value="">{lang==='en'?'Choose the work scope':'Chagua aina ya kazi'}</option>{concreteScopes.map(item=><option key={item.id} value={item.id}>{lang==='en'?item.en:item.sw}</option>)}</select>
        {selectedScope&&<div aria-live="polite"><p className="mt-3">{lang==='en'?selectedScope.helpEn:selectedScope.helpSw}</p><p className="text-sm font-semibold mt-2">{thicknessMode==='suggested'?(lang==='en'?'Suggested thickness filled in — you can edit it below.':'Unene wa pendekezo umejazwa — unaweza kuubadilisha hapa chini.'):(lang==='en'?'Manual thickness — enter your confirmed project value.':'Unene wa kuingiza mwenyewe — tumia kipimo cha mradi wako.')}</p>{selectedScope.mm!==null&&<button type="button" className="underline text-brand-800 font-semibold mt-2 py-2" onClick={()=>applyScope(scope)}>{lang==='en'?'Restore suggested thickness':'Rudisha unene wa pendekezo'}</button>}</div>}
        <p className="text-sm text-gray-600 mt-3">{lang==='en'?'Planning guidance, not a structural design or a Tanzania standard. Soil, loads, base preparation, joints and exposure must be checked for your site.':'Mwongozo wa kupanga kiasi, si structural design au kiwango rasmi cha Tanzania. Udongo, mizigo, maandalizi ya msingi wa ardhini, joints na mazingira lazima vikaguliwe.'} <a className="underline text-brand-700" href="https://www.ccaa.com.au/wp-content/uploads/2026/09/CCAA_DS_Residential-Concrete-Driveways-and-Paths.pdf" target="_blank" rel="noopener noreferrer">CCAA: Residential Concrete Driveways and Paths</a></p>
      </div><div className="grid grid-cols-2 gap-4">
        {[["Urefu / Length (m)",length,setLength],["Upana / Width (m)",width,setWidth],["Unene / Depth",depth,(v:string)=>{setDepth(v);setThicknessMode('manual')}],["Idadi ya sehemu sawa",count,setCount]].map(([label,value,setter],i)=><label className="text-base font-medium" key={i}>{t(label as string)}<input className={input+' mt-1'} type="number" min="0.001" step={i===3?'1':'any'} value={value as string} onChange={e=>(setter as (s:string)=>void)(e.target.value)}/></label>)}
        <label>{t("Kipimo cha unene")}<select className={input+' mt-1'} value={unit} onChange={e=>changeUnit(e.target.value)}><option value="cm">{t("Sentimita (cm)")}</option><option value="mm">{t("Milimita (mm)")}</option><option value="m">{t("Mita (m)")}</option></select></label><label>{t("Ziada ya kupanga (%)")}<input className={input+' mt-1'} type="number" min="0" max="30" value={waste} onChange={e=>setWaste(e.target.value)}/></label>
      </div><p className="text-sm text-gray-500 mt-3">{t("Volume = urefu × upana × unene × idadi. Ziada ya 5% ni chaguo la kupanga; ibadilishe kulingana na site.")}</p><div className="bg-brand-50 rounded-xl p-5 mt-5" aria-live="polite"><p>{t("Eneo:")} <strong>{area.toFixed(2)} m²</strong> · {t("Zege halisi:")} <strong>{volume.toFixed(2)} m³</strong></p><p className="text-3xl font-bold text-brand-700 mt-2">{order.toFixed(2)} m³</p><p className="text-sm mt-1">{t("Kiasi pamoja na ziada, kimepandishwa hadi 0.01 m³.")}</p><button disabled={!valid} className="mt-4 bg-brand-600 text-white font-semibold p-3 rounded-xl w-full disabled:opacity-40" onClick={()=>{setQty(String(order));setQtyFromDimensions(true);invalidate()}}>{t("Tumia kiasi hiki kupata bei")}</button></div></section>
      <section className="bg-white rounded-2xl p-6 border shadow-sm"><h2 className="text-2xl font-bold mb-2">{t("Bei ya zege / Price estimate")}</h2><p className="text-gray-600 mb-5">{t("Chagua eneo kwenye suggestions au andika lako.")}</p><label htmlFor="area" className="font-medium">{t("Eneo la site")}</label><div className="flex gap-2 mt-1"><input id="area" list="dar-areas" className={input} value={query} placeholder={t("Mfano: Kibada, Kigamboni")} onChange={e=>{setQuery(e.target.value);setPlace(null);setPlaces([]);searchVersion.current++;setSearching(false);invalidate()}}/><button type="button" disabled={searching||query.trim().length<2} className="rounded-xl bg-gray-900 text-white px-4 disabled:opacity-40" onClick={search}>{searching?'…':t('Tafuta')}</button></div><datalist id="dar-areas">{areas.map(x=><option key={x} value={x}/>)}</datalist>
      <div className="flex flex-wrap gap-2 mt-3">{['Kibada, Kigamboni','Mbagala','Mikocheni','Tegeta','Kimara','Tabata'].map(x=><button key={x} className="px-3 py-2 rounded-full border text-sm hover:bg-brand-50" onClick={()=>{setQuery(x);setPlace(null);setPlaces([]);searchVersion.current++;setSearching(false);invalidate()}}>{x}</button>)}</div>
      {!!places.length&&<div className="mt-3 border rounded-xl divide-y" aria-label={t("Matokeo ya maeneo")}>{places.map((p,i)=><button key={i} className="w-full text-left p-3 hover:bg-brand-50 flex items-start gap-2" onClick={()=>{setPlace(p);setPlaces([]);invalidate();if(Number(qty)>0)void price(p)}}><MapPin className="w-5 h-5 shrink-0"/>{p.label}</button>)}</div>}
      {place&&<p className="p-3 rounded-lg bg-green-50 text-green-900 mt-3">{lang==='en'?'Location:':'Eneo:'} {place.label}</p>}
      <p className="text-sm text-gray-500 mt-3">{t("Tafuta kisha chagua location sahihi. Makadirio hutumia eneo/landmark; tuma pin halisi kuthibitisha njia ya lori. © OpenStreetMap contributors · Photon · OSRM.")}</p>
      <div className="grid grid-cols-2 gap-4 mt-5"><label>{t("Kiasi cha zege (m³)")}<input className={input+' mt-1'} type="number" min="0.01" step="any" value={qty} onChange={e=>{setQty(e.target.value);setQtyFromDimensions(false);invalidate()}}/></label><label>Grade<select className={input+' mt-1'} value={grade} onChange={e=>{setGrade(e.target.value);invalidate()}}>{['C15','C20','C25','C30','C35','C40'].map(x=><option key={x}>{x}</option>)}</select></label></div>
      <label className="block mt-4">Plant<select className={input+' mt-1'} value={plant} onChange={e=>{setPlant(e.target.value);invalidate()}}><option value="auto" disabled={manual}>{t("Pendekeza plant ya karibu")}</option><option value="temeke">{t("Uwanja wa Taifa, Temeke")}</option><option value="mikocheni">ITV, Mikocheni</option></select></label>
      <label className="flex items-center gap-3 mt-4"><input type="checkbox" checked={manual} onChange={e=>{setManual(e.target.checked);if(e.target.checked&&plant==='auto')setPlant('temeke');invalidate()}}/>{t("Ninajua umbali wa barabara kutoka plant")}</label>{manual&&<label className="block mt-3">{t("Umbali (km)")}<input className={input+' mt-1'} type="number" min="0.1" max="500" step="0.1" value={km} onChange={e=>{setKm(e.target.value);invalidate()}}/></label>}
      <button disabled={busy} onClick={()=>price()} className="w-full rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold p-4 mt-5 disabled:opacity-50">{busy?t('Inakokotoa…'):t('Onyesha bei yangu')}</button><div aria-live="polite">{error&&<p role="alert" className="bg-amber-50 text-amber-900 p-3 rounded-xl mt-3">{t(error)}</p>}{quote&&<div className="bg-gray-950 text-white rounded-xl p-5 mt-4"><p>{plantName(quote.plant)} · {quote.distanceKm} km</p>{quote.customQuote?<h3 className="text-2xl font-bold mt-3">{t("Zaidi ya km 40: omba bei maalumu")}</h3>:<><h3 className="text-3xl font-bold mt-3">TZS {money(quote.unitPrice!)} <span className="text-base font-normal">/ m³</span></h3><p className="text-xl mt-2">{lang==='en'?'Total: TZS':'Jumla: TZS'} {money(quote.total!)} {lang==='en'?'for':'kwa'} {quote.quantity} m³</p><p className="text-sm text-gray-300 mt-3">{lang==='en'?`Distance band: up to ${quote.bandKm} km. Rates effective 1 Nov 2026; delivery depends on access and availability.`:`Kiwango cha umbali: hadi ${quote.bandKm} km. Bei za kuanzia 1 Nov 2026; delivery inategemea njia na upatikanaji.`}</p></>}<p className="text-sm text-amber-200 mt-3">{t("Hali ya VAT itathibitishwa kwenye quotation. Pump haijajumuishwa. Haya ni makadirio, si uthibitisho wa oda.")}</p></div>}</div>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-700 text-white rounded-xl p-4 font-semibold mt-4"><MessageCircle className="w-5 h-5"/>{t("Tuma mahitaji WhatsApp")}</a><p className="text-sm text-gray-500 mt-2">{t("Eneo, kiasi na makadirio vitaambatanishwa kwenye ujumbe.")}</p></section>
      <section className="bg-white rounded-2xl p-6 border lg:col-span-2"><h2 className="text-2xl font-bold mb-3">{t("Nichague grade gani?")}</h2><label htmlFor="use">{t("Aina ya kazi")}</label><select id="use" className={input+' mt-2'} value={use} onChange={e=>setUse(e.target.value)}><option value="blinding">{t("Blinding / kazi nyepesi zisizobeba jengo")}</option><option value="ground">{t("Sakafu ya ardhini / njia ya magari")}</option><option value="structure">{t("Msingi, nguzo, beams au slab ya juu")}</option><option value="marine">{t("Baharini / tanki / mazingira maalumu")}</option></select><p className="bg-brand-50 p-4 rounded-xl mt-4 text-lg">{t(help[use])}</p><p className="mt-3 text-gray-600">{t("Huu ni mwongozo wa kuzungumza na mtaalamu. Tool haichagui grade au unene salama kwa jengo lako.")}</p></section>
      <section className="bg-white rounded-2xl p-6 border lg:col-span-2"><h2 className="text-2xl font-bold mb-5">{t("Elimu fupi ya zege")}</h2><div className="grid sm:grid-cols-2 gap-6">{[
      ['Grade ni nini?','C25/C30/C35 ni majina ya strength yanayotumiwa kwenye biashara. Thibitisha strength, umri wa test na kama specification ni cube au cylinder; C25 si maelezo kamili ya mix.'],
      ['Slump si strength','Slump hupima consistency ya zege bichi. Slump inayofaa hutegemea njia ya kumwaga, pump na reinforcement. Kubaliana na supplier kabla ya delivery.'],
      ['Maji ya ziada','Usiongeze maji kiholela. Maji yanayozidi mix design yanaweza kupunguza strength na durability. Mabadiliko ya site yafanywe kwa udhibiti wa supplier na yarekodiwe.'],
      ['Curing na maandalizi','Linda zege jipya lisikauke haraka. Panga curing kulingana na specification. Kabla ya lori, hakiki formwork, reinforcement, njia ya kuingia, watu, vibrator na pump inapohitajika.'],
      ].map(([title,body])=><article key={title}><h3 className="font-bold text-lg mb-2">{t(title)}</h3><p className="text-gray-600">{t(body)}</p></article>)}</div><p className="text-sm mt-6 text-gray-500">{t("Soma zaidi:")} <a className="text-brand-700 underline" href="https://www.nrmca.org/association-resources/research-and-engineering/cip/" target="_blank" rel="noopener noreferrer">NRMCA Concrete in Practice</a> · <a className="text-brand-700 underline" href="https://www.concretecentre.com/Specification.aspx" target="_blank" rel="noopener noreferrer">The Concrete Centre: Specification</a></p><Link href="/learn" className="inline-block text-brand-700 font-semibold mt-4">{t("Tembelea Education Hub")}</Link></section>
    </main>
  </div>;
}
