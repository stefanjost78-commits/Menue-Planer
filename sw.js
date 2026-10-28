const CACHE = 'menue-planer-v1.6.0';
const ASSETS = ['./','./index.html','./manifest.json','./icon.svg'];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())); });
self.addEventListener('activate', e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('message', m=>{ if(m.data && m.data.type==='SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', e=>{ if(e.request.method!=='GET') return; e.respondWith(
  fetch(e.request).then(r=>{ const cp = r.clone(); caches.open(CACHE).then(c=>c.put(e.request, cp)); return r; })
  .catch(()=>caches.match(e.request).then(m=>m || caches.match('./index.html')))
); });
