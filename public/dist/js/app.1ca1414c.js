(function(){"use strict";var n={7104:function(n,t,e){var o=e(9242),r=e(3396);const u={class:"menu"},i={class:"menu-ul"},a={class:"menu-li"},c={class:"menu-li"},l={class:"menu-li"},f={class:"menu-li"},s={class:"menu-li"};function d(n,t){const e=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",u,[(0,r._)("ul",i,[(0,r._)("li",a,[(0,r.Wm)(e,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Главная")])),_:1})]),(0,r._)("li",c,[(0,r.Wm)(e,{to:"/speciality"},{default:(0,r.w5)((()=>[(0,r.Uk)("Специальности")])),_:1})]),(0,r._)("li",l,[(0,r.Wm)(e,{to:"/contact"},{default:(0,r.w5)((()=>[(0,r.Uk)("Контакты")])),_:1})]),(0,r._)("li",f,[(0,r.Wm)(e,{to:"/studs"},{default:(0,r.w5)((()=>[(0,r.Uk)("Студенты")])),_:1})]),(0,r._)("li",s,[(0,r.Wm)(e,{to:"/prepod"},{default:(0,r.w5)((()=>[(0,r.Uk)("Учителя")])),_:1})])])]),(0,r.Wm)(o)],64)}var p=e(89);const m={},v=(0,p.Z)(m,[["render",d]]);var b=v,h=e(2483);const g=[{path:"/",name:"home",component:()=>e.e(762).then(e.bind(e,2762))},{path:"/contact",name:"contact",component:()=>e.e(607).then(e.bind(e,2607))},{path:"/speciality",name:"abospecialityut",component:()=>e.e(171).then(e.bind(e,171))},{path:"/studs",name:"studs",component:()=>e.e(963).then(e.bind(e,6963))}],y=(0,h.p7)({history:(0,h.PO)("/"),routes:g});var w=y,k=e(65),_=(0,k.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(b).use(_).use(w).mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return n[o](u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,u){if(!o){var i=1/0;for(f=0;f<n.length;f++){o=n[f][0],r=n[f][1],u=n[f][2];for(var a=!0,c=0;c<o.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](o[c])}))?o.splice(c--,1):(a=!1,u<i&&(i=u));if(a){n.splice(f--,1);var l=r();void 0!==l&&(t=l)}}return t}u=u||0;for(var f=n.length;f>0&&n[f-1][2]>u;f--)n[f]=n[f-1];n[f]=[o,r,u]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,o){return e.f[o](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+"."+{171:"ccc24baa",607:"bca03f11",762:"1d08e5d2",963:"0273b0a0"}[n]+".js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="vue:";e.l=function(o,r,u,i){if(n[o])n[o].push(r);else{var a,c;if(void 0!==u)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==t+u){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",t+u),a.src=o),n[o]=[r];var d=function(t,e){a.onerror=a.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(n){return n(e)})),t)return t(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var n={143:0};e.f.j=function(t,o){var r=e.o(n,t)?n[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(e,o){r=n[t]=[e,o]}));o.push(r[2]=u);var i=e.p+e.u(t),a=new Error,c=function(o){if(e.o(n,t)&&(r=n[t],0!==r&&(n[t]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,r[1](a)}};e.l(i,c,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,u,i=o[0],a=o[1],c=o[2],l=0;if(i.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(c)var f=c(e)}for(t&&t(o);l<i.length;l++)u=i[l],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(f)},o=self["webpackChunkvue"]=self["webpackChunkvue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(7104)}));o=e.O(o)})();
//# sourceMappingURL=app.1ca1414c.js.map