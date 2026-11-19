'use client';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { inDeliveryRegion, parseSiteCoordinates, type SitePoint } from '@/lib/site-coordinates';
const PinMap=dynamic(()=>import('./SitePinMap'),{ssr:false,loading:()=> <div className="h-72 flex items-center justify-center bg-gray-100 rounded-xl">Loading map / Inafungua ramani…</div>});
type PickedSite=SitePoint&{label:string};
export default function SiteLocationPicker({lang,selected,onSelect}:{lang:'en'|'sw';selected:SitePoint|null;onSelect:(site:PickedSite)=>void}){
  const [mapOpen,setMapOpen]=useState(false),[draft,setDraft]=useState<SitePoint|null>(null),[gps,setGps]=useState(''),[error,setError]=useState(''),[locating,setLocating]=useState(false),[accuracy,setAccuracy]=useState<number|null>(null);
  const request=useRef(0);
  const text=(en:string,sw:string)=>lang==='en'?en:sw;
  function chooseDraft(p:SitePoint){request.current++;setLocating(false);setDraft(p);setGps(`${p.lat.toFixed(6)}, ${p.lon.toFixed(6)}`);setAccuracy(null);setError('')}
  function locate(){
    if(!navigator.geolocation){setError('unsupported');return}
    const id=++request.current;setError('');setLocating(true);
    navigator.geolocation.getCurrentPosition(pos=>{
      if(id!==request.current)return;
      setLocating(false);const p={lat:pos.coords.latitude,lon:pos.coords.longitude};
      if(!inDeliveryRegion(p)){setError('region');return}
      setDraft(p);setGps(`${p.lat.toFixed(6)}, ${p.lon.toFixed(6)}`);setAccuracy(Math.round(pos.coords.accuracy));setMapOpen(true);
    },e=>{if(id===request.current){setLocating(false);setError(e.code===1?'denied':'unavailable')}},{enableHighAccuracy:true,timeout:15000,maximumAge:0});
  }
  function useCoordinates(){const p=parseSiteCoordinates(gps);if(!p){setError('coordinates');return}chooseDraft(p);setMapOpen(true)}
  const errors:Record<string,string>={
    unsupported:text('Location is not supported on this device. Use the map or GPS coordinates.','Kifaa hakitoi current location. Tumia ramani au GPS coordinates.'),
    region:text('Choose a site in or near Dar es Salaam. Contact us for other areas.','Chagua site iliyo Dar es Salaam au karibu. Kwa maeneo mengine wasiliana nasi.'),
    denied:text('Location permission was declined. You can still drop a pin or enter coordinates.','Ruhusa ya location haikutolewa. Unaweza kuweka pin au kuandika coordinates.'),
    unavailable:text('Could not get your location. Try again, drop a pin or enter coordinates.','Current location haikupatikana. Jaribu tena, weka pin au andika coordinates.'),
    coordinates:text('Enter latitude, longitude for Dar es Salaam, for example: -6.891960, 39.339165.','Weka latitude, longitude za Dar es Salaam, mfano: -6.891960, 39.339165.'),
  };
  return <details className="mt-4 rounded-xl border border-brand-200 bg-brand-50 p-4"><summary className="cursor-pointer font-semibold text-brand-800 py-1">{text('Can’t find your location? Use a pin or GPS','Eneo halipo? Tumia pin au GPS')}</summary>
    <p className="text-sm text-gray-600 mt-3">{text('Choose the actual construction site. Use current location only if you are at the site.','Chagua sehemu halisi ya ujenzi. Tumia current location ukiwa site pekee.')}</p>
    <div className="flex flex-wrap gap-2 mt-3"><button type="button" className="px-4 py-3 rounded-xl bg-white border font-semibold" onClick={()=>{setMapOpen(!mapOpen);if(!draft&&selected)chooseDraft(selected)}}>{mapOpen?text('Hide map','Ficha ramani'):text('Drop a pin on map','Weka pin kwenye ramani')}</button><button type="button" className="px-4 py-3 rounded-xl bg-white border font-semibold disabled:opacity-50" disabled={locating} onClick={locate}>{locating?text('Finding location…','Inatafuta location…'):text('Use my current location','Tumia current location')}</button></div>
    {mapOpen&&<div className="mt-4"><p className="text-sm mb-2">{text('Zoom in, then tap the site or drag the pin. Confirm below.','Zoom ramani, kisha gusa site au buruta pin. Thibitisha hapa chini.')}</p><PinMap point={draft} lang={lang} onChange={chooseDraft}/></div>}
    <label className="block font-medium mt-4" htmlFor="site-gps">{text('Paste GPS: latitude, longitude','Bandika GPS: latitude, longitude')}</label><input id="site-gps" className="w-full p-3 mt-1 rounded-xl border border-gray-300 text-base" value={gps} placeholder="-6.891960, 39.339165" onChange={e=>{request.current++;setLocating(false);setGps(e.target.value);setDraft(null);setAccuracy(null);setError('')}}/><button type="button" className="underline font-semibold py-3" onClick={useCoordinates}>{text('Preview coordinates','Angalia coordinates')}</button>
    <div aria-live="polite">{error&&<p role="alert" className="text-amber-900 bg-amber-50 rounded-lg p-3">{errors[error]}</p>}{draft&&<div className="bg-white border rounded-xl p-3"><p>{text('Selected point','Point iliyochaguliwa')}: {draft.lat.toFixed(6)}, {draft.lon.toFixed(6)}</p>{accuracy!==null&&<p className="text-sm mt-1">{text('Device accuracy: approximately','Usahihi wa kifaa: takriban')} {accuracy} m. {text('Check the pin before confirming.','Hakiki pin kabla ya kuthibitisha.')}</p>}<button type="button" className="w-full bg-brand-600 text-white font-semibold rounded-xl p-3 mt-3" onClick={()=>onSelect({...draft,label:`GPS: ${draft.lat.toFixed(6)}, ${draft.lon.toFixed(6)}`})}>{text('Use this site location','Tumia location hii ya site')}</button></div>}</div>
    <p className="text-sm text-gray-600 mt-3">{text('After confirming, select “Show my price”. The site pin will be included in your WhatsApp request.','Baada ya kuthibitisha, bonyeza “Onyesha bei yangu”. Pin ya site itaambatanishwa kwenye ujumbe wa WhatsApp.')}</p>
  </details>;
}
