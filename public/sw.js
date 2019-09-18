/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.css",
    "revision": "8516198bec7168e0283dc72bd77197bf"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "439fa6cc1212d09ef64b05000a06c840"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "a81d3575aeaecfd9f8241240f01b5b35"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "ed305e766fe88fc4b943c8a8a803a994"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "21cd5595fc241e337027bfe6a7061e01"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "20013d134aa7f25dfdac7dd443475992"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "e915d26bbcf9f6a059909a6ea0501adf"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "5b404fcd46ae389b5ea3a5dfb4df4f7c"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "b9062b8e106de5d25a3d858feac67826"
  },
  {
    "url": "index.html",
    "revision": "5816813d1bdbb0445e9966a3a4d1ab90"
  },
  {
    "url": "js/script.js",
    "revision": "295abe0a8d10502f26961d016f5aba40"
  },
  {
    "url": "manifest.json",
    "revision": "5c8a009410e0535f53d80b0de14b1b31"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
