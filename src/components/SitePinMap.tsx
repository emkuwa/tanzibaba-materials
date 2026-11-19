'use client';
import { useEffect, useRef, useState } from 'react';
import type { Map, Marker, LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { inDeliveryRegion, type SitePoint } from '@/lib/site-coordinates';
export default function SitePinMap({point,onChange,lang}:{point:SitePoint|null;onChange:(point:SitePoint)=>void;lang:'en'|'sw'}) {
  const host=useRef<HTMLDivElement>(null),map=useRef<Map|null>(null),marker=useRef<Marker|null>(null);
  const change=useRef(onChange);change.current=onChange;
  const [failed,setFailed]=useState(false);
  const [ready,setReady]=useState(false);
  useEffect(()=>{
    let cancelled=false;
    import('leaflet').then(L=>{
      if(cancelled||!host.current)return;
      const m=L.map(host.current,{scrollWheelZoom:false,maxBounds:[[-7.3,38.7],[-6.3,39.7]],maxBoundsViscosity:1}).setView([-6.83,39.28],11);
      map.current=m;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(m);
      m.on('click',(e:LeafletMouseEvent)=>{if(inDeliveryRegion({lat:e.latlng.lat,lon:e.latlng.lng}))change.current({lat:e.latlng.lat,lon:e.latlng.lng})});
      setReady(true);
    }).catch(()=>setFailed(true));
    return()=>{cancelled=true;map.current?.remove();map.current=null;marker.current=null};
  },[]);
  useEffect(()=>{
    if(!ready||!point||!map.current)return;
    let cancelled=false;
    import('leaflet').then(L=>{
      if(cancelled||!map.current)return;
      if(!marker.current){
        const icon=L.divIcon({className:'',html:'<span style="display:block;width:26px;height:26px;background:#15803d;border:4px solid white;border-radius:50%;box-shadow:0 1px 6px #0008"></span>',iconSize:[26,26],iconAnchor:[13,13]});
        marker.current=L.marker([point.lat,point.lon],{icon,draggable:true,title:lang==='en'?'Site pin':'Pin ya site'}).addTo(map.current);
        marker.current.on('dragend',()=>{const p=marker.current!.getLatLng();if(inDeliveryRegion({lat:p.lat,lon:p.lng}))change.current({lat:p.lat,lon:p.lng});else marker.current?.setLatLng([point.lat,point.lon])});
      }else marker.current.setLatLng([point.lat,point.lon]);
      map.current.setView([point.lat,point.lon],Math.max(map.current.getZoom(),14));
    });
    return()=>{cancelled=true};
  },[point,ready,lang]);
  return <div><div ref={host} role="region" aria-label={lang==='en'?'Map: tap to place your site pin':'Ramani: gusa kuweka pin ya site'} className="h-72 w-full rounded-xl border relative z-0"/>{failed&&<p role="alert">{lang==='en'?'The map could not load. Enter GPS coordinates below.':'Ramani haikufunguka. Weka GPS coordinates hapa chini.'}</p>}</div>;
}
