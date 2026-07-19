const CACHE='omc-v2-1';
const ASSETS=['./','index.html','styles.css?v=2.1.0','app.js?v=2.1.0','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-180.png'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys()){if(key!==CACHE)await caches.delete(key)}await self.clients.claim()})())});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request,{cache:'no-store'});
      const cache=await caches.open(CACHE);
      cache.put(event.request,response.clone());
      return response;
    }catch(error){
      return (await caches.match(event.request)) || (event.request.mode==='navigate' ? await caches.match('./') : Response.error());
    }
  })());
});
