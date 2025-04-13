const cacheName = "MyCache1";

const urlList = ["index.html", "/img1.jpg", "/img2.jpg", "/img3.jpg"];
self.addEventListener("install", (event) => {
  event.waitUntill(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(urlList);
    })
  );
});
