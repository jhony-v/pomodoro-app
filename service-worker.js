if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let o=Promise.resolve();return e[s]||(o=new Promise((async o=>{if("document"in self){const e=document.createElement("script");e.src=s,document.head.appendChild(e),e.onload=o}else importScripts(s),o()}))),o.then((()=>{if(!e[s])throw new Error(`Module ${s} didn’t register its module`);return e[s]}))},o=(o,e)=>{Promise.all(o.map(s)).then((s=>e(1===s.length?s[0]:s)))},e={require:Promise.resolve(o)};self.define=(o,r,i)=>{e[o]||(e[o]=Promise.resolve().then((()=>{let e={};const a={uri:location.origin+o.slice(1)};return Promise.all(r.map((o=>{switch(o){case"exports":return e;case"module":return a;default:return s(o)}}))).then((s=>{const o=i(...s);return e.default||(e.default=o),e}))})))}}define("./service-worker.js",["./workbox-cbf30c32"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/pomodoro-app/9923c5fe07987d4c526c0f8b6d31c38d.mp3",revision:null},{url:"/pomodoro-app/assets/css/0a8dcf6118a0007037f1.css",revision:null},{url:"/pomodoro-app/assets/js/02649d89ef1a73e6c402.js",revision:null},{url:"/pomodoro-app/assets/js/0a79948d84cfdffc1637.js",revision:null},{url:"/pomodoro-app/assets/js/0a79948d84cfdffc1637.js.LICENSE.txt",revision:"22944df67a1e9cf588daa5255143530c"},{url:"/pomodoro-app/assets/js/1ad3b1a06652f6f4fb59.js",revision:null},{url:"/pomodoro-app/assets/js/b11ab0a2ffddea8f74c1.js",revision:null},{url:"/pomodoro-app/assets/js/e55a79dc6b8fd01aa487.js",revision:null},{url:"/pomodoro-app/assets/js/e87d07929fbc0aa1708a.js",revision:null},{url:"/pomodoro-app/index.html",revision:"be1253718d766b3741d86387a641384a"}],{})}));