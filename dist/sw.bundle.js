if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const r=e=>n(e,s),a={module:{uri:s},exports:o,require:r};i[s]=Promise.all(d.map((e=>a[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-e93575ef"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"f7e4a053e40963c53470786c9c9f1ccc"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"c1970de9156a5fbdb33fc6ca1304fa30"},{url:"favicon.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"index.html",revision:"cea19918a20a566fd4cb3e040dc6c3ea"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/list")),new e.StaleWhileRevalidate({cacheName:"therestodb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"therestodb-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/detail")),new e.StaleWhileRevalidate({cacheName:"therestodb-detail-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
