import{s as G,e as E,t as Ie,c as j,b as F,p as Se,f as y,h as x,i as O,j as C,q as Ce,n as q,z as U,B as Ct,X as Tt,Y as ce,Z as Pe,_ as De,k as Et,$ as jt,l as Mt,a0 as Ot,a1 as Le,a2 as Ft,a3 as se,H as Pt,o as Dt,a as B,d as z,v as Ae,r as Lt,w as At,x as Nt,y as Vt,J as Ht,g as ae,m as Bt,a4 as lt}from"../chunks/scheduler.DDq22qTb.js";import{S as K,i as W,g as J,b as v,e as X,t as b,c as L,a as A,m as N,d as V,f as Ne}from"../chunks/index.D28pJ90Y.js";import{b as te}from"../chunks/paths.BvND-AZi.js";import{i as ct}from"../chunks/themeStore.CqTvOZk-.js";import{S as zt}from"../chunks/SpyglassLogo.DGWDPQ_8.js";function fe(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function at(t,e){const o={},n={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],l=e[s];if(l){for(const c in i)c in l||(n[c]=1);for(const c in l)r[c]||(o[c]=l[c],r[c]=1);t[s]=l}else for(const c in i)r[c]=1}for(const i in n)i in o||(o[i]=void 0);return o}function Rt(t){let e,o=t[0].shortTitle+"",n,r;return{c(){e=E("a"),n=Ie(o),this.h()},l(s){e=j(s,"A",{href:!0,target:!0,class:!0});var i=F(e);n=Se(i,o),i.forEach(y),this.h()},h(){x(e,"href",r=te+"/"+t[0].articleUrl),x(e,"target","_blank"),x(e,"class","article-header")},m(s,i){O(s,e,i),C(e,n)},p(s,[i]){i&1&&o!==(o=s[0].shortTitle+"")&&Ce(n,o),i&1&&r!==(r=te+"/"+s[0].articleUrl)&&x(e,"href",r)},i:q,o:q,d(s){s&&y(e)}}}function Ut(t,e,o){let{article:n}=e;return t.$$set=r=>{"article"in r&&o(0,n=r.article)},[n]}class ft extends K{constructor(e){super(),W(this,e,Ut,Rt,G,{article:0})}}const ee=/^[a-z0-9]+(-[a-z0-9]+)*$/,de=(t,e,o,n="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;n=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const l=r.pop(),c=r.pop(),a={provider:r.length>0?r[0]:n,prefix:c,name:l};return e&&!ie(a)?null:a}const s=r[0],i=s.split("-");if(i.length>1){const l={provider:n,prefix:i.shift(),name:i.join("-")};return e&&!ie(l)?null:l}if(o&&n===""){const l={provider:n,prefix:"",name:s};return e&&!ie(l,o)?null:l}return null},ie=(t,e)=>t?!!((t.provider===""||t.provider.match(ee))&&(e&&t.prefix===""||t.prefix.match(ee))&&t.name.match(ee)):!1,ut=Object.freeze({left:0,top:0,width:16,height:16}),ue=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),he=Object.freeze({...ut,...ue}),be=Object.freeze({...he,body:"",hidden:!1});function qt(t,e){const o={};!t.hFlip!=!e.hFlip&&(o.hFlip=!0),!t.vFlip!=!e.vFlip&&(o.vFlip=!0);const n=((t.rotate||0)+(e.rotate||0))%4;return n&&(o.rotate=n),o}function Ve(t,e){const o=qt(t,e);for(const n in be)n in ue?n in t&&!(n in o)&&(o[n]=ue[n]):n in e?o[n]=e[n]:n in t&&(o[n]=t[n]);return o}function Qt(t,e){const o=t.icons,n=t.aliases||Object.create(null),r=Object.create(null);function s(i){if(o[i])return r[i]=[];if(!(i in r)){r[i]=null;const l=n[i]&&n[i].parent,c=l&&s(l);c&&(r[i]=[l].concat(c))}return r[i]}return Object.keys(o).concat(Object.keys(n)).forEach(s),r}function Gt(t,e,o){const n=t.icons,r=t.aliases||Object.create(null);let s={};function i(l){s=Ve(n[l]||r[l],s)}return i(e),o.forEach(i),Ve(t,s)}function dt(t,e){const o=[];if(typeof t!="object"||typeof t.icons!="object")return o;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),o.push(r)});const n=Qt(t);for(const r in n){const s=n[r];s&&(e(r,Gt(t,r,s)),o.push(r))}return o}const Kt={provider:"",aliases:{},not_found:{},...ut};function ge(t,e){for(const o in e)if(o in t&&typeof t[o]!=typeof e[o])return!1;return!0}function ht(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!ge(t,Kt))return null;const o=e.icons;for(const r in o){const s=o[r];if(!r.match(ee)||typeof s.body!="string"||!ge(s,be))return null}const n=e.aliases||Object.create(null);for(const r in n){const s=n[r],i=s.parent;if(!r.match(ee)||typeof i!="string"||!o[i]&&!n[i]||!ge(s,be))return null}return e}const He=Object.create(null);function Wt(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Q(t,e){const o=He[t]||(He[t]=Object.create(null));return o[e]||(o[e]=Wt(t,e))}function Te(t,e){return ht(e)?dt(e,(o,n)=>{n?t.icons[o]=n:t.missing.add(o)}):[]}function Jt(t,e,o){try{if(typeof o.body=="string")return t.icons[e]={...o},!0}catch{}return!1}let ne=!1;function pt(t){return typeof t=="boolean"&&(ne=t),ne}function Xt(t){const e=typeof t=="string"?de(t,!0,ne):t;if(e){const o=Q(e.provider,e.prefix),n=e.name;return o.icons[n]||(o.missing.has(n)?null:void 0)}}function Yt(t,e){const o=de(t,!0,ne);if(!o)return!1;const n=Q(o.provider,o.prefix);return Jt(n,o.name,e)}function Zt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),ne&&!e&&!t.prefix){let r=!1;return ht(t)&&(t.prefix="",dt(t,(s,i)=>{i&&Yt(s,i)&&(r=!0)})),r}const o=t.prefix;if(!ie({provider:e,prefix:o,name:"a"}))return!1;const n=Q(e,o);return!!Te(n,t)}const gt=Object.freeze({width:null,height:null}),mt=Object.freeze({...gt,...ue}),en=/(-?[0-9.]*[0-9]+[0-9.]*)/g,tn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Be(t,e,o){if(e===1)return t;if(o=o||100,typeof t=="number")return Math.ceil(t*e*o)/o;if(typeof t!="string")return t;const n=t.split(en);if(n===null||!n.length)return t;const r=[];let s=n.shift(),i=tn.test(s);for(;;){if(i){const l=parseFloat(s);isNaN(l)?r.push(s):r.push(Math.ceil(l*e*o)/o)}else r.push(s);if(s=n.shift(),s===void 0)return r.join("");i=!i}}function nn(t,e="defs"){let o="";const n=t.indexOf("<"+e);for(;n>=0;){const r=t.indexOf(">",n),s=t.indexOf("</"+e);if(r===-1||s===-1)break;const i=t.indexOf(">",s);if(i===-1)break;o+=t.slice(r+1,s).trim(),t=t.slice(0,n).trim()+t.slice(i+1)}return{defs:o,content:t}}function rn(t,e){return t?"<defs>"+t+"</defs>"+e:e}function on(t,e,o){const n=nn(t);return rn(n.defs,e+n.content+o)}const sn=t=>t==="unset"||t==="undefined"||t==="none";function ln(t,e){const o={...he,...t},n={...mt,...e},r={left:o.left,top:o.top,width:o.width,height:o.height};let s=o.body;[o,n].forEach(I=>{const w=[],d=I.hFlip,p=I.vFlip;let S=I.rotate;d?p?S+=2:(w.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),w.push("scale(-1 1)"),r.top=r.left=0):p&&(w.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),w.push("scale(1 -1)"),r.top=r.left=0);let M;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:M=r.height/2+r.top,w.unshift("rotate(90 "+M.toString()+" "+M.toString()+")");break;case 2:w.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:M=r.width/2+r.left,w.unshift("rotate(-90 "+M.toString()+" "+M.toString()+")");break}S%2===1&&(r.left!==r.top&&(M=r.left,r.left=r.top,r.top=M),r.width!==r.height&&(M=r.width,r.width=r.height,r.height=M)),w.length&&(s=on(s,'<g transform="'+w.join(" ")+'">',"</g>"))});const i=n.width,l=n.height,c=r.width,a=r.height;let f,u;i===null?(u=l===null?"1em":l==="auto"?a:l,f=Be(u,c/a)):(f=i==="auto"?c:i,u=l===null?Be(f,a/c):l==="auto"?a:l);const h={},T=(I,w)=>{sn(w)||(h[I]=w.toString())};T("width",f),T("height",u);const m=[r.left,r.top,c,a];return h.viewBox=m.join(" "),{attributes:h,viewBox:m,body:s}}const cn=/\sid="(\S+)"/g,an="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let fn=0;function un(t,e=an){const o=[];let n;for(;n=cn.exec(t);)o.push(n[1]);if(!o.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(s=>{const i=typeof e=="function"?e(s):e+(fn++).toString(),l=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+i+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const ye=Object.create(null);function dn(t,e){ye[t]=e}function ve(t){return ye[t]||ye[""]}function Ee(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const je=Object.create(null),Z=["https://api.simplesvg.com","https://api.unisvg.com"],le=[];for(;Z.length>0;)Z.length===1||Math.random()>.5?le.push(Z.shift()):le.push(Z.pop());je[""]=Ee({resources:["https://api.iconify.design"].concat(le)});function hn(t,e){const o=Ee(e);return o===null?!1:(je[t]=o,!0)}function Me(t){return je[t]}const pn=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let ze=pn();function gn(t,e){const o=Me(t);if(!o)return 0;let n;if(!o.maxURL)n=0;else{let r=0;o.resources.forEach(i=>{r=Math.max(r,i.length)});const s=e+".json?icons=";n=o.maxURL-r-o.path.length-s.length}return n}function mn(t){return t===404}const _n=(t,e,o)=>{const n=[],r=gn(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},l=0;return o.forEach((c,a)=>{l+=c.length+1,l>=r&&a>0&&(n.push(i),i={type:s,provider:t,prefix:e,icons:[]},l=c.length),i.icons.push(c)}),n.push(i),n};function bn(t){if(typeof t=="string"){const e=Me(t);if(e)return e.path}return"/"}const yn=(t,e,o)=>{if(!ze){o("abort",424);return}let n=bn(e.provider);switch(e.type){case"icons":{const s=e.prefix,l=e.icons.join(","),c=new URLSearchParams({icons:l});n+=s+".json?"+c.toString();break}case"custom":{const s=e.uri;n+=s.slice(0,1)==="/"?s.slice(1):s;break}default:o("abort",400);return}let r=503;ze(t+n).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{o(mn(i)?"abort":"next",i)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?o("abort",s):o("next",r)});return}setTimeout(()=>{o("success",s)})}).catch(()=>{o("next",r)})},vn={prepare:_n,send:yn};function wn(t){const e={loaded:[],missing:[],pending:[]},o=Object.create(null);t.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let n={provider:"",prefix:"",name:""};return t.forEach(r=>{if(n.name===r.name&&n.prefix===r.prefix&&n.provider===r.provider)return;n=r;const s=r.provider,i=r.prefix,l=r.name,c=o[s]||(o[s]=Object.create(null)),a=c[i]||(c[i]=Q(s,i));let f;l in a.icons?f=e.loaded:i===""||a.missing.has(l)?f=e.missing:f=e.pending;const u={provider:s,prefix:i,name:l};f.push(u)}),e}function _t(t,e){t.forEach(o=>{const n=o.loaderCallbacks;n&&(o.loaderCallbacks=n.filter(r=>r.id!==e))})}function $n(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let o=!1;const n=t.provider,r=t.prefix;e.forEach(s=>{const i=s.icons,l=i.pending.length;i.pending=i.pending.filter(c=>{if(c.prefix!==r)return!0;const a=c.name;if(t.icons[a])i.loaded.push({provider:n,prefix:r,name:a});else if(t.missing.has(a))i.missing.push({provider:n,prefix:r,name:a});else return o=!0,!0;return!1}),i.pending.length!==l&&(o||_t([t],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let xn=0;function kn(t,e,o){const n=xn++,r=_t.bind(null,o,n);if(!e.pending.length)return r;const s={id:n,icons:e,callback:t,abort:r};return o.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),r}function In(t,e=!0,o=!1){const n=[];return t.forEach(r=>{const s=typeof r=="string"?de(r,e,o):r;s&&n.push(s)}),n}var Sn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Cn(t,e,o,n){const r=t.resources.length,s=t.random?Math.floor(Math.random()*r):t.index;let i;if(t.random){let _=t.resources.slice(0);for(i=[];_.length>1;){const k=Math.floor(Math.random()*_.length);i.push(_[k]),_=_.slice(0,k).concat(_.slice(k+1))}i=i.concat(_)}else i=t.resources.slice(s).concat(t.resources.slice(0,s));const l=Date.now();let c="pending",a=0,f,u=null,h=[],T=[];typeof n=="function"&&T.push(n);function m(){u&&(clearTimeout(u),u=null)}function I(){c==="pending"&&(c="aborted"),m(),h.forEach(_=>{_.status==="pending"&&(_.status="aborted")}),h=[]}function w(_,k){k&&(T=[]),typeof _=="function"&&T.push(_)}function d(){return{startTime:l,payload:e,status:c,queriesSent:a,queriesPending:h.length,subscribe:w,abort:I}}function p(){c="failed",T.forEach(_=>{_(void 0,f)})}function S(){h.forEach(_=>{_.status==="pending"&&(_.status="aborted")}),h=[]}function M(_,k,H){const g=k!=="success";switch(h=h.filter($=>$!==_),c){case"pending":break;case"failed":if(g||!t.dataAfterTimeout)return;break;default:return}if(k==="abort"){f=H,p();return}if(g){f=H,h.length||(i.length?D():p());return}if(m(),S(),!t.random){const $=t.resources.indexOf(_.resource);$!==-1&&$!==t.index&&(t.index=$)}c="completed",T.forEach($=>{$(H)})}function D(){if(c!=="pending")return;m();const _=i.shift();if(_===void 0){if(h.length){u=setTimeout(()=>{m(),c==="pending"&&(S(),p())},t.timeout);return}p();return}const k={status:"pending",resource:_,callback:(H,g)=>{M(k,H,g)}};h.push(k),a++,u=setTimeout(D,t.rotate),o(_,e,k.callback)}return setTimeout(D),d}function bt(t){const e={...Sn,...t};let o=[];function n(){o=o.filter(l=>l().status==="pending")}function r(l,c,a){const f=Cn(e,l,c,(u,h)=>{n(),a&&a(u,h)});return o.push(f),f}function s(l){return o.find(c=>l(c))||null}return{query:r,find:s,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:n}}function Re(){}const me=Object.create(null);function Tn(t){if(!me[t]){const e=Me(t);if(!e)return;const o=bt(e),n={config:e,redundancy:o};me[t]=n}return me[t]}function En(t,e,o){let n,r;if(typeof t=="string"){const s=ve(t);if(!s)return o(void 0,424),Re;r=s.send;const i=Tn(t);i&&(n=i.redundancy)}else{const s=Ee(t);if(s){n=bt(s);const i=t.resources?t.resources[0]:"",l=ve(i);l&&(r=l.send)}}return!n||!r?(o(void 0,424),Re):n.query(e,r,o)().abort}const Ue="iconify2",re="iconify",yt=re+"-count",qe=re+"-version",vt=36e5,jn=168,Mn=50;function we(t,e){try{return t.getItem(e)}catch{}}function Oe(t,e,o){try{return t.setItem(e,o),!0}catch{}}function Qe(t,e){try{t.removeItem(e)}catch{}}function $e(t,e){return Oe(t,yt,e.toString())}function xe(t){return parseInt(we(t,yt))||0}const pe={local:!0,session:!0},wt={local:new Set,session:new Set};let Fe=!1;function On(t){Fe=t}let oe=typeof window>"u"?{}:window;function $t(t){const e=t+"Storage";try{if(oe&&oe[e]&&typeof oe[e].length=="number")return oe[e]}catch{}pe[t]=!1}function xt(t,e){const o=$t(t);if(!o)return;const n=we(o,qe);if(n!==Ue){if(n){const l=xe(o);for(let c=0;c<l;c++)Qe(o,re+c.toString())}Oe(o,qe,Ue),$e(o,0);return}const r=Math.floor(Date.now()/vt)-jn,s=l=>{const c=re+l.toString(),a=we(o,c);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>r&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&e(f,l))return!0}catch{}Qe(o,c)}};let i=xe(o);for(let l=i-1;l>=0;l--)s(l)||(l===i-1?(i--,$e(o,i)):wt[t].add(l))}function kt(){if(!Fe){On(!0);for(const t in pe)xt(t,e=>{const o=e.data,n=e.provider,r=o.prefix,s=Q(n,r);if(!Te(s,o).length)return!1;const i=o.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Fn(t,e){const o=t.lastModifiedCached;if(o&&o>=e)return o===e;if(t.lastModifiedCached=e,o)for(const n in pe)xt(n,r=>{const s=r.data;return r.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Pn(t,e){Fe||kt();function o(n){let r;if(!pe[n]||!(r=$t(n)))return;const s=wt[n];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=xe(r),i>=Mn||!$e(r,i+1))return;const l={cached:Math.floor(Date.now()/vt),provider:t.provider,data:e};return Oe(r,re+i.toString(),JSON.stringify(l))}e.lastModified&&!Fn(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),o("local")||o("session"))}function Ge(){}function Dn(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,$n(t)}))}function Ln(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:o,prefix:n}=t,r=t.iconsToLoad;delete t.iconsToLoad;let s;if(!r||!(s=ve(o)))return;s.prepare(o,n,r).forEach(l=>{En(o,l,c=>{if(typeof c!="object")l.icons.forEach(a=>{t.missing.add(a)});else try{const a=Te(t,c);if(!a.length)return;const f=t.pendingIcons;f&&a.forEach(u=>{f.delete(u)}),Pn(t,c)}catch(a){console.error(a)}Dn(t)})})}))}const An=(t,e)=>{const o=In(t,!0,pt()),n=wn(o);if(!n.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(n.loaded,n.missing,n.pending,Ge)}),()=>{c=!1}}const r=Object.create(null),s=[];let i,l;return n.pending.forEach(c=>{const{provider:a,prefix:f}=c;if(f===l&&a===i)return;i=a,l=f,s.push(Q(a,f));const u=r[a]||(r[a]=Object.create(null));u[f]||(u[f]=[])}),n.pending.forEach(c=>{const{provider:a,prefix:f,name:u}=c,h=Q(a,f),T=h.pendingIcons||(h.pendingIcons=new Set);T.has(u)||(T.add(u),r[a][f].push(u))}),s.forEach(c=>{const{provider:a,prefix:f}=c;r[a][f].length&&Ln(c,r[a][f])}),e?kn(e,n,s):Ge};function Nn(t,e){const o={...t};for(const n in e){const r=e[n],s=typeof r;n in gt?(r===null||r&&(s==="string"||s==="number"))&&(o[n]=r):s===typeof o[n]&&(o[n]=n==="rotate"?r%4:r)}return o}const Vn=/[\s,]+/;function Hn(t,e){e.split(Vn).forEach(o=>{switch(o.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Bn(t,e=0){const o=t.replace(/^-?[0-9.]*/,"");function n(r){for(;r<0;)r+=4;return r%4}if(o===""){const r=parseInt(t);return isNaN(r)?0:n(r)}else if(o!==t){let r=0;switch(o){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(t.slice(0,t.length-o.length));return isNaN(s)?0:(s=s/r,s%1===0?n(s):0)}}return e}function zn(t,e){let o=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in e)o+=" "+n+'="'+e[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+t+"</svg>"}function Rn(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Un(t){return"data:image/svg+xml,"+Rn(t)}function qn(t){return'url("'+Un(t)+'")'}const Ke={...mt,inline:!1},Qn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Gn={display:"inline-block"},ke={"background-color":"currentColor"},It={"background-color":"transparent"},We={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Je={"-webkit-mask":ke,mask:ke,background:It};for(const t in Je){const e=Je[t];for(const o in We)e[t+"-"+o]=We[o]}function Kn(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function Wn(t,e){const o=Nn(Ke,e),n=e.mode||"svg",r=n==="svg"?{...Qn}:{};t.body.indexOf("xlink:")===-1&&delete r["xmlns:xlink"];let s=typeof e.style=="string"?e.style:"";for(let d in e){const p=e[d];if(p!==void 0)switch(d){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":o[d]=p===!0||p==="true"||p===1;break;case"flip":typeof p=="string"&&Hn(o,p);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+p+"; ";break;case"rotate":typeof p=="string"?o[d]=Bn(p):typeof p=="number"&&(o[d]=p);break;case"ariaHidden":case"aria-hidden":p!==!0&&p!=="true"&&delete r["aria-hidden"];break;default:if(d.slice(0,3)==="on:")break;Ke[d]===void 0&&(r[d]=p)}}const i=ln(t,o),l=i.attributes;if(o.inline&&(s="vertical-align: -0.125em; "+s),n==="svg"){Object.assign(r,l),s!==""&&(r.style=s);let d=0,p=e.id;return typeof p=="string"&&(p=p.replace(/-/g,"_")),{svg:!0,attributes:r,body:un(i.body,p?()=>p+"ID"+d++:"iconifySvelte")}}const{body:c,width:a,height:f}=t,u=n==="mask"||(n==="bg"?!1:c.indexOf("currentColor")!==-1),h=zn(c,{...l,width:a+"",height:f+""}),m={"--svg":qn(h)},I=d=>{const p=l[d];p&&(m[d]=Kn(p))};I("width"),I("height"),Object.assign(m,Gn,u?ke:It);let w="";for(const d in m)w+=d+": "+m[d]+";";return r.style=w+s,{svg:!1,attributes:r}}pt(!0);dn("",vn);if(typeof document<"u"&&typeof window<"u"){kt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Zt(n))&&console.error(o)}catch{console.error(o)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let o in e){const n="IconifyProviders["+o+"] is invalid.";try{const r=e[o];if(typeof r!="object"||!r||r.resources===void 0)continue;hn(o,r)||console.error(n)}catch{console.error(n)}}}}function Jn(t,e,o,n,r){function s(){e.loading&&(e.loading.abort(),e.loading=null)}if(typeof t=="object"&&t!==null&&typeof t.body=="string")return e.name="",s(),{data:{...he,...t}};let i;if(typeof t!="string"||(i=de(t,!1,!0))===null)return s(),null;const l=Xt(i);if(!l)return o&&(!e.loading||e.loading.name!==t)&&(s(),e.name="",e.loading={name:t,abort:An([i],n)}),null;s(),e.name!==t&&(e.name=t,r&&!e.destroyed&&r(t));const c=["iconify"];return i.prefix!==""&&c.push("iconify--"+i.prefix),i.provider!==""&&c.push("iconify--"+i.provider),{data:l,classes:c}}function Xn(t,e){return t?Wn({...he,...t},e):null}function Xe(t){let e;function o(s,i){return s[0].svg?Zn:Yn}let n=o(t),r=n(t);return{c(){r.c(),e=U()},l(s){r.l(s),e=U()},m(s,i){r.m(s,i),O(s,e,i)},p(s,i){n===(n=o(s))&&r?r.p(s,i):(r.d(1),r=n(s),r&&(r.c(),r.m(e.parentNode,e)))},d(s){s&&y(e),r.d(s)}}}function Yn(t){let e,o=[t[0].attributes],n={};for(let r=0;r<o.length;r+=1)n=ce(n,o[r]);return{c(){e=E("span"),this.h()},l(r){e=j(r,"SPAN",{}),F(e).forEach(y),this.h()},h(){De(e,n)},m(r,s){O(r,e,s)},p(r,s){De(e,n=at(o,[s&1&&r[0].attributes]))},d(r){r&&y(e)}}}function Zn(t){let e,o,n=t[0].body+"",r=[t[0].attributes],s={};for(let i=0;i<r.length;i+=1)s=ce(s,r[i]);return{c(){e=Et("svg"),o=new jt(!0),this.h()},l(i){e=Mt(i,"svg",{});var l=F(e);o=Ot(l,!0),l.forEach(y),this.h()},h(){o.a=null,Le(e,s)},m(i,l){O(i,e,l),o.m(n,e)},p(i,l){l&1&&n!==(n=i[0].body+"")&&o.p(n),Le(e,s=at(r,[l&1&&i[0].attributes]))},d(i){i&&y(e)}}}function er(t){let e,o=t[0]&&Xe(t);return{c(){o&&o.c(),e=U()},l(n){o&&o.l(n),e=U()},m(n,r){o&&o.m(n,r),O(n,e,r)},p(n,[r]){n[0]?o?o.p(n,r):(o=Xe(n),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:q,o:q,d(n){n&&y(e),o&&o.d(n)}}}function tr(t,e,o){const n={name:"",loading:null,destroyed:!1};let r=!1,s=0,i;const l=a=>{typeof e.onLoad=="function"&&e.onLoad(a),Ft()("load",{icon:a})};function c(){o(3,s++,s)}return Ct(()=>{o(2,r=!0)}),Tt(()=>{o(1,n.destroyed=!0,n),n.loading&&(n.loading.abort(),o(1,n.loading=null,n))}),t.$$set=a=>{o(6,e=ce(ce({},e),Pe(a)))},t.$$.update=()=>{{const a=Jn(e.icon,n,r,c,l);o(0,i=a?Xn(a.data,e):null),i&&a.classes&&o(0,i.attributes.class=(typeof e.class=="string"?e.class+" ":"")+a.classes.join(" "),i)}},e=Pe(e),[i,n,r,s]}class St extends K{constructor(e){super(),W(this,e,tr,er,G,{})}}function nr(t){let e,o;return e=new St({props:{icon:t[0]?"ph:moon-fill":"ph:moon",class:"w-full h-full"}}),{c(){L(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,r){N(e,n,r),o=!0},p(n,r){const s={};r&1&&(s.icon=n[0]?"ph:moon-fill":"ph:moon"),e.$set(s)},i(n){o||(b(e.$$.fragment,n),o=!0)},o(n){v(e.$$.fragment,n),o=!1},d(n){V(e,n)}}}function rr(t){let e,o;return e=new St({props:{icon:t[0]?"ph:sun-fill":"ph:sun",class:"w-full h-full"}}),{c(){L(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,r){N(e,n,r),o=!0},p(n,r){const s={};r&1&&(s.icon=n[0]?"ph:sun-fill":"ph:sun"),e.$set(s)},i(n){o||(b(e.$$.fragment,n),o=!0)},o(n){v(e.$$.fragment,n),o=!1},d(n){V(e,n)}}}function or(t){let e,o,n,r,s,i;const l=[rr,nr],c=[];function a(f,u){return f[1]?0:1}return o=a(t),n=c[o]=l[o](t),{c(){e=E("button"),n.c(),this.h()},l(f){e=j(f,"BUTTON",{class:!0,"aria-label":!0});var u=F(e);n.l(u),u.forEach(y),this.h()},h(){x(e,"class","absolute top-10 left-10 w-9 aspect-square rounded-full p-1"),x(e,"aria-label","Toggle Dark Mode")},m(f,u){O(f,e,u),c[o].m(e,null),r=!0,s||(i=[se(e,"click",ct.toggle),se(e,"mouseenter",t[2]),se(e,"mouseleave",t[3])],s=!0)},p(f,[u]){let h=o;o=a(f),o===h?c[o].p(f,u):(J(),v(c[h],1,1,()=>{c[h]=null}),X(),n=c[o],n?n.p(f,u):(n=c[o]=l[o](f),n.c()),b(n,1),n.m(e,null))},i(f){r||(b(n),r=!0)},o(f){v(n),r=!1},d(f){f&&y(e),c[o].d(),s=!1,Pt(i)}}}function sr(t,e,o){let n;Dt(t,ct,l=>o(1,n=l));let r=!1;return[r,n,()=>o(0,r=!0),()=>o(0,r=!1)]}class ir extends K{constructor(e){super(),W(this,e,sr,or,G,{})}}function lr(t){const e=t-1;return e*e*e+1}function Ye(t,{delay:e=0,duration:o=400,easing:n=lr,axis:r="y"}={}){const s=getComputedStyle(t),i=+s.opacity,l=r==="y"?"height":"width",c=parseFloat(s[l]),a=r==="y"?["top","bottom"]:["left","right"],f=a.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),u=parseFloat(s[`padding${f[0]}`]),h=parseFloat(s[`padding${f[1]}`]),T=parseFloat(s[`margin${f[0]}`]),m=parseFloat(s[`margin${f[1]}`]),I=parseFloat(s[`border${f[0]}Width`]),w=parseFloat(s[`border${f[1]}Width`]);return{delay:e,duration:o,easing:n,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*i};${l}: ${d*c}px;padding-${a[0]}: ${d*u}px;padding-${a[1]}: ${d*h}px;margin-${a[0]}: ${d*T}px;margin-${a[1]}: ${d*m}px;border-${a[0]}-width: ${d*I}px;border-${a[1]}-width: ${d*w}px;`}}function Ze(t){let e,o,n;const r=t[3].default,s=Lt(r,t,t[2],null);return{c(){e=E("div"),s&&s.c(),this.h()},l(i){e=j(i,"DIV",{class:!0});var l=F(e);s&&s.l(l),l.forEach(y),this.h()},h(){x(e,"class","mt-1")},m(i,l){O(i,e,l),s&&s.m(e,null),n=!0},p(i,l){s&&s.p&&(!n||l&4)&&At(s,r,i,i[2],n?Vt(r,i[2],l,null):Nt(i[2]),null)},i(i){n||(b(s,i),i&&Ht(()=>{n&&(o||(o=Ne(e,Ye,{},!0)),o.run(1))}),n=!0)},o(i){v(s,i),i&&(o||(o=Ne(e,Ye,{},!1)),o.run(0)),n=!1},d(i){i&&y(e),s&&s.d(i),i&&o&&o.end()}}}function cr(t){let e,o,n,r,s,i,l,c=t[1]&&Ze(t);return{c(){e=E("div"),o=E("button"),n=Ie(t[0]),r=B(),c&&c.c(),this.h()},l(a){e=j(a,"DIV",{class:!0});var f=F(e);o=j(f,"BUTTON",{class:!0});var u=F(o);n=Se(u,t[0]),u.forEach(y),r=z(f),c&&c.l(f),f.forEach(y),this.h()},h(){x(o,"class","header block text-end w-full"),Ae(o,"font-bold",t[1]),x(e,"class","w-full")},m(a,f){O(a,e,f),C(e,o),C(o,n),C(e,r),c&&c.m(e,null),s=!0,i||(l=se(o,"click",t[4]),i=!0)},p(a,[f]){(!s||f&1)&&Ce(n,a[0]),(!s||f&2)&&Ae(o,"font-bold",a[1]),a[1]?c?(c.p(a,f),f&2&&b(c,1)):(c=Ze(a),c.c(),b(c,1),c.m(e,null)):c&&(J(),v(c,1,1,()=>{c=null}),X())},i(a){s||(b(c),s=!0)},o(a){v(c),s=!1},d(a){a&&y(e),c&&c.d(),i=!1,l()}}}function ar(t,e,o){let{$$slots:n={},$$scope:r}=e,{title:s}=e,i=!1;const l=()=>o(1,i=!i);return t.$$set=c=>{"title"in c&&o(0,s=c.title),"$$scope"in c&&o(2,r=c.$$scope)},[s,i,r,n,l]}class _e extends K{constructor(e){super(),W(this,e,ar,cr,G,{title:0})}}function fr(t){let e,o;return{c(){e=E("a"),o=Ie(t[1]),this.h()},l(n){e=j(n,"A",{href:!0,class:!0});var r=F(e);o=Se(r,t[1]),r.forEach(y),this.h()},h(){x(e,"href",t[0]),x(e,"class","header")},m(n,r){O(n,e,r),C(e,o)},p(n,[r]){r&2&&Ce(o,n[1]),r&1&&x(e,"href",n[0])},i:q,o:q,d(n){n&&y(e)}}}function ur(t,e,o){let{href:n=""}=e,{title:r}=e;return t.$$set=s=>{"href"in s&&o(0,n=s.href),"title"in s&&o(1,r=s.title)},[n,r]}class et extends K{constructor(e){super(),W(this,e,ur,fr,G,{href:0,title:1})}}function tt(t,e,o){const n=t.slice();return n[1]=e[o],n}function nt(t,e,o){const n=t.slice();return n[1]=e[o],n}function rt(t){let e,o;return e=new ft({props:{article:t[1]}}),{c(){L(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,r){N(e,n,r),o=!0},p(n,r){const s={};r&1&&(s.article=n[1]),e.$set(s)},i(n){o||(b(e.$$.fragment,n),o=!0)},o(n){v(e.$$.fragment,n),o=!1},d(n){V(e,n)}}}function ot(t){let e,o,n=t[1].archived===!1&&rt(t);return{c(){n&&n.c(),e=U()},l(r){n&&n.l(r),e=U()},m(r,s){n&&n.m(r,s),O(r,e,s),o=!0},p(r,s){r[1].archived===!1?n?(n.p(r,s),s&1&&b(n,1)):(n=rt(r),n.c(),b(n,1),n.m(e.parentNode,e)):n&&(J(),v(n,1,1,()=>{n=null}),X())},i(r){o||(b(n),o=!0)},o(r){v(n),o=!1},d(r){r&&y(e),n&&n.d(r)}}}function dr(t){let e,o,n,r="view all",s,i=fe(t[0].articles),l=[];for(let a=0;a<i.length;a+=1)l[a]=ot(nt(t,i,a));const c=a=>v(l[a],1,1,()=>{l[a]=null});return{c(){e=E("div");for(let a=0;a<l.length;a+=1)l[a].c();o=B(),n=E("a"),n.textContent=r,this.h()},l(a){e=j(a,"DIV",{class:!0});var f=F(e);for(let u=0;u<l.length;u+=1)l[u].l(f);o=z(f),n=j(f,"A",{href:!0,class:!0,"data-svelte-h":!0}),ae(n)!=="svelte-ouk6ny"&&(n.textContent=r),f.forEach(y),this.h()},h(){x(n,"href",te+"/issues"),x(n,"class","hover:font-bold article-header"),x(e,"class","flex flex-col items-end gap-1")},m(a,f){O(a,e,f);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(e,null);C(e,o),C(e,n),s=!0},p(a,f){if(f&1){i=fe(a[0].articles);let u;for(u=0;u<i.length;u+=1){const h=nt(a,i,u);l[u]?(l[u].p(h,f),b(l[u],1)):(l[u]=ot(h),l[u].c(),b(l[u],1),l[u].m(e,o))}for(J(),u=i.length;u<l.length;u+=1)c(u);X()}},i(a){if(!s){for(let f=0;f<i.length;f+=1)b(l[f]);s=!0}},o(a){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)v(l[f]);s=!1},d(a){a&&y(e),lt(l,a)}}}function st(t){let e,o;return e=new ft({props:{article:t[1]}}),{c(){L(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,r){N(e,n,r),o=!0},p(n,r){const s={};r&1&&(s.article=n[1]),e.$set(s)},i(n){o||(b(e.$$.fragment,n),o=!0)},o(n){v(e.$$.fragment,n),o=!1},d(n){V(e,n)}}}function it(t){let e,o,n=(t[1].archived===!0||t[1].archived===void 0)&&st(t);return{c(){n&&n.c(),e=U()},l(r){n&&n.l(r),e=U()},m(r,s){n&&n.m(r,s),O(r,e,s),o=!0},p(r,s){r[1].archived===!0||r[1].archived===void 0?n?(n.p(r,s),s&1&&b(n,1)):(n=st(r),n.c(),b(n,1),n.m(e.parentNode,e)):n&&(J(),v(n,1,1,()=>{n=null}),X())},i(r){o||(b(n),o=!0)},o(r){v(n),o=!1},d(r){r&&y(e),n&&n.d(r)}}}function hr(t){let e,o,n=fe(t[0].articles),r=[];for(let i=0;i<n.length;i+=1)r[i]=it(tt(t,n,i));const s=i=>v(r[i],1,1,()=>{r[i]=null});return{c(){e=E("div");for(let i=0;i<r.length;i+=1)r[i].c();this.h()},l(i){e=j(i,"DIV",{class:!0});var l=F(e);for(let c=0;c<r.length;c+=1)r[c].l(l);l.forEach(y),this.h()},h(){x(e,"class","flex flex-col items-end gap-1")},m(i,l){O(i,e,l);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);o=!0},p(i,l){if(l&1){n=fe(i[0].articles);let c;for(c=0;c<n.length;c+=1){const a=tt(i,n,c);r[c]?(r[c].p(a,l),b(r[c],1)):(r[c]=it(a),r[c].c(),b(r[c],1),r[c].m(e,null))}for(J(),c=n.length;c<r.length;c+=1)s(c);X()}},i(i){if(!o){for(let l=0;l<n.length;l+=1)b(r[l]);o=!0}},o(i){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)v(r[l]);o=!1},d(i){i&&y(e),lt(r,i)}}}function pr(t){let e,o='<a target="_blank" class="article-header" href="mailto:rhhsspyglass@gmail.com">email</a> <a target="_blank" class="article-header" href="https://www.instagram.com/rhhspyglass" referrerpolicy="no-referrer">instagram</a> <p>DM for inquires.</p>';return{c(){e=E("div"),e.innerHTML=o,this.h()},l(n){e=j(n,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1phkjuz"&&(e.innerHTML=o),this.h()},h(){x(e,"class","flex flex-col items-end gap-1")},m(n,r){O(n,e,r)},p:q,d(n){n&&y(e)}}}function gr(t){let e,o,n,r,s,i="the",l,c,a="spyglass",f,u,h,T,m,I,w,d,p,S,M,D,_,k,H;return o=new ir({}),h=new zt({props:{class:"mt-3 mx-auto w-3/5"}}),I=new et({props:{href:te+"/about",title:"about"}}),d=new _e({props:{title:"recent issues",$$slots:{default:[dr]},$$scope:{ctx:t}}}),S=new _e({props:{title:"past issues",$$slots:{default:[hr]},$$scope:{ctx:t}}}),D=new et({props:{href:te+"/team",title:"team"}}),k=new _e({props:{title:"contact",$$slots:{default:[pr]},$$scope:{ctx:t}}}),{c(){e=E("div"),L(o.$$.fragment),n=B(),r=E("div"),s=E("h2"),s.textContent=i,l=B(),c=E("h1"),c.textContent=a,f=B(),u=E("div"),L(h.$$.fragment),T=B(),m=E("nav"),L(I.$$.fragment),w=B(),L(d.$$.fragment),p=B(),L(S.$$.fragment),M=B(),L(D.$$.fragment),_=B(),L(k.$$.fragment),this.h()},l(g){e=j(g,"DIV",{class:!0});var $=F(e);A(o.$$.fragment,$),n=z($),r=j($,"DIV",{class:!0});var R=F(r);s=j(R,"H2",{class:!0,style:!0,"data-svelte-h":!0}),ae(s)!=="svelte-12ka1i2"&&(s.textContent=i),l=z(R),c=j(R,"H1",{class:!0,"data-svelte-h":!0}),ae(c)!=="svelte-hmelu8"&&(c.textContent=a),f=z(R),u=j(R,"DIV",{class:!0});var Y=F(u);A(h.$$.fragment,Y),Y.forEach(y),R.forEach(y),T=z($),m=j($,"NAV",{class:!0});var P=F(m);A(I.$$.fragment,P),w=z(P),A(d.$$.fragment,P),p=z(P),A(S.$$.fragment,P),M=z(P),A(D.$$.fragment,P),_=z(P),A(k.$$.fragment,P),P.forEach(y),$.forEach(y),this.h()},h(){x(s,"class","italic text-2xl"),Bt(s,"line-height","0.6"),x(c,"class","text-5xl"),x(u,"class","hover:boop"),x(r,"class","cursor-pointer content-center place-center justify-self-center"),x(m,"class","absolute right-0 bottom-0 p-10 flex flex-col gap-4 items-end max-h-screen overflow-y-auto"),x(e,"class","flex justify-center items-center w-screen h-screen overflow-hidden select-none font-serif")},m(g,$){O(g,e,$),N(o,e,null),C(e,n),C(e,r),C(r,s),C(r,l),C(r,c),C(r,f),C(r,u),N(h,u,null),C(e,T),C(e,m),N(I,m,null),C(m,w),N(d,m,null),C(m,p),N(S,m,null),C(m,M),N(D,m,null),C(m,_),N(k,m,null),H=!0},p(g,[$]){const R={};$&65&&(R.$$scope={dirty:$,ctx:g}),d.$set(R);const Y={};$&65&&(Y.$$scope={dirty:$,ctx:g}),S.$set(Y);const P={};$&64&&(P.$$scope={dirty:$,ctx:g}),k.$set(P)},i(g){H||(b(o.$$.fragment,g),b(h.$$.fragment,g),b(I.$$.fragment,g),b(d.$$.fragment,g),b(S.$$.fragment,g),b(D.$$.fragment,g),b(k.$$.fragment,g),H=!0)},o(g){v(o.$$.fragment,g),v(h.$$.fragment,g),v(I.$$.fragment,g),v(d.$$.fragment,g),v(S.$$.fragment,g),v(D.$$.fragment,g),v(k.$$.fragment,g),H=!1},d(g){g&&y(e),V(o),V(h),V(I),V(d),V(S),V(D),V(k)}}}function mr(t,e,o){let{data:n}=e;return t.$$set=r=>{"data"in r&&o(0,n=r.data)},[n]}class $r extends K{constructor(e){super(),W(this,e,mr,gr,G,{data:0})}}export{$r as component};