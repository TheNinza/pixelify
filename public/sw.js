let cacheData="pixapp";

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll( [
              
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){

        event.respondWith(
            caches.match(event.request).then((result)=>{
                if(result){
                    return result
                }
                let requestUrl=event.request.clone();
                return fetch(requestUrls)
            })
        )
    }
})