// Guarda la app en el celular para que abra sin internet.
// Con internet siempre trae la versión nueva; sin internet usa la guardada.
const CACHE='rutina-am-v1';

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html'])).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);

  // letra Josefin Sans: la guardada primero (no cambia)
  if(url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open(CACHE).then(c=>c.match(req).then(r=>r||fetch(req).then(res=>{
      c.put(req,res.clone()); return res;
    }))));
    return;
  }

  // la app: primero internet, si no hay, la guardada
  if(url.origin===location.origin){
    e.respondWith(fetch(req).then(res=>{
      if(res.ok){ const copia=res.clone(); caches.open(CACHE).then(c=>c.put(req,copia)); }
      return res;
    }).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||caches.match('./index.html'))));
  }
});
