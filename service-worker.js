if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,o,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(o.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-cbf30c32"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/pomodoro-app/9923c5fe07987d4c526c0f8b6d31c38d.mp3",revision:null},{url:"/pomodoro-app/assets/css/0a8dcf6118a0007037f1.css",revision:null},{url:"/pomodoro-app/assets/js/13f43bc7ef0118d1cf50.js",revision:null},{url:"/pomodoro-app/assets/js/1a1ea00a1189a4d5e4b5.js",revision:null},{url:"/pomodoro-app/assets/js/2f1a33a96e776f0d27d5.js",revision:null},{url:"/pomodoro-app/index.html",revision:"dfc1e37c16c4a3f11ab1f2d2be576866"}],{})}));