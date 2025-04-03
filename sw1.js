const urlList = ["index.html", "/img1.png"];

self.addEventListener("install", (event) => {
  console.log("Service worker 1 installed properly");
  event.waitUntil(
    caches.open("mycache1").then((cache) => {
      return cache.addAll(urlList);
    })
  );
});
