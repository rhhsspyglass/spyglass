import{g as ue,_ as me,a as he,b as ge,c as be,d as we,e as ye,f as xe,h as $e,i as ke,j as Fe,k as Te,l as Ae,m as Se,n as Ee,o as Ce,p as Pe,q as Me,r as Re,s as Ie,t as Le}from"../chunks/getMostRecentArticle.B-LBpPFt.js";import{p as _e,a as u,t as g}from"../chunks/disclose-version.CWOomf5-.js";import{E as Ne,aF as Oe,aG as ze,aB as We,X as je,B as ae,aH as qe,A as He,n as j,aI as Ue,a3 as re,a4 as ie,O as Be,p as Y,e as m,r as h,t as G,i as Z,j as E,ac as J,k as ee,l as Q,s as c,f as K,$ as De}from"../chunks/runtime.BLnCADGB.js";import{l as Ge,w as Xe,e as ce,i as H,p as Ke,h as Je}from"../chunks/props.Do6LV73C.js";import{e as se,i as ne}from"../chunks/each.B4xTXa4H.js";import{s as L,t as Qe}from"../chunks/class.CCGXRkxM.js";import{a as Ve,s as te}from"../chunks/render.B9CdqCC6.js";import{S as Ye,d as Ze}from"../chunks/SiteNavigation.D1Fiq4Pq.js";import{b as I}from"../chunks/paths.DoLYyLph.js";import{s as et}from"../chunks/snippet.q-qz_dDu.js";import{r as de}from"../chunks/reducedMotion.svelte.Cc_3KY02.js";import{S as tt}from"../chunks/SpyglassLogo.JjpDHd5p.js";const at=()=>performance.now(),O={tick:t=>requestAnimationFrame(t),now:()=>at(),tasks:new Set};function fe(t){O.tasks.forEach(e=>{e.c(t)||(O.tasks.delete(e),e.f())}),O.tasks.size!==0&&O.tick(fe)}function rt(t){let e;return O.tasks.size===0&&O.tick(fe),{promise:new Promise(a=>{O.tasks.add(e={c:t,f:a})}),abort(){O.tasks.delete(e)}}}function B(t,e){t.dispatchEvent(new CustomEvent(e))}function it(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function oe(t){const e={},a=t.split(";");for(const r of a){const[i,o]=r.split(":");if(!i||o===void 0)break;const d=it(i.trim());e[d]=o.trim()}return e}const st=t=>t;function ve(t,e,a,r){var i=(t&Ue)!==0,o="both",d,F=e.inert,l,s;function n(){var _=Be,A=ae;re(null),ie(null);try{return d??(d=a()(e,(r==null?void 0:r())??{},{direction:o}))}finally{re(_),ie(A)}}var C={is_global:i,in(){e.inert=F,B(e,"introstart"),l=V(e,n(),s,1,()=>{B(e,"introend"),l==null||l.abort(),l=d=void 0})},out(_){e.inert=!0,B(e,"outrostart"),s=V(e,n(),l,0,()=>{B(e,"outroend"),_==null||_()})},stop:()=>{l==null||l.abort(),s==null||s.abort()}},$=ae;if(($.transitions??($.transitions=[])).push(C),Ve){var T=i;if(!T){for(var f=$.parent;f&&f.f&Ne;)for(;(f=f.parent)&&!(f.f&Oe););T=!f||(f.f&ze)!==0}T&&We(()=>{je(()=>C.in())})}}function V(t,e,a,r,i){var o=r===1;if(qe(e)){var d,F=!1;return He(()=>{if(!F){var A=e({direction:o?"in":"out"});d=V(t,A,a,r,i)}}),{abort:()=>{F=!0,d==null||d.abort()},deactivate:()=>d.deactivate(),reset:()=>d.reset(),t:()=>d.t()}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return i(),{abort:j,deactivate:j,reset:j,t:()=>r};const{delay:l=0,css:s,tick:n,easing:C=st}=e;var $=[];if(o&&a===void 0&&(n&&n(0,1),s)){var T=oe(s(0,1));$.push(T,T)}var f=()=>1-r,_=t.animate($,{duration:l});return _.onfinish=()=>{var A=(a==null?void 0:a.t())??1-r;a==null||a.abort();var v=r-A,p=e.duration*Math.abs(v),b=[];if(p>0){if(s)for(var P=Math.ceil(p/16.666666666666668),S=0;S<=P;S+=1){var w=A+v*C(S/P),M=s(w,1-w);b.push(oe(M))}f=()=>{var k=_.currentTime;return A+v*C(k/p)},n&&rt(()=>{if(_.playState!=="running")return!1;var k=f();return n(k,1-k),!0})}_=t.animate(b,{duration:p,fill:"forwards"}),_.onfinish=()=>{f=()=>r,n==null||n(r,1-r),i()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=j)},deactivate:()=>{i=j},reset:()=>{r===0&&(n==null||n(1,0))},t:()=>f()}}function nt(t,e){Ge(window,["resize"],()=>Xe(()=>e(window[t])))}var ot=g('<a target="_blank" rel="noopener noreferrer" class="article-header"> </a>');function le(t,e){Y(e,!0);let a=_e(e.article.articleUrl),r=J(()=>a.startsWith("/")?I+a:a);var i=ot(),o=m(i,!0);h(i),G(()=>{L(i,"href",E(r)),te(o,e.article.shortTitle)}),u(t,i),Z()}function lt(t){const e=t-1;return e*e*e+1}function pe(t,{delay:e=0,duration:a=400,easing:r=lt,axis:i="y"}={}){const o=getComputedStyle(t),d=+o.opacity,F=i==="y"?"height":"width",l=parseFloat(o[F]),s=i==="y"?["top","bottom"]:["left","right"],n=s.map(v=>`${v[0].toUpperCase()}${v.slice(1)}`),C=parseFloat(o[`padding${n[0]}`]),$=parseFloat(o[`padding${n[1]}`]),T=parseFloat(o[`margin${n[0]}`]),f=parseFloat(o[`margin${n[1]}`]),_=parseFloat(o[`border${n[0]}Width`]),A=parseFloat(o[`border${n[1]}Width`]);return{delay:e,duration:a,easing:r,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*d};${F}: ${v*l}px;padding-${s[0]}: ${v*C}px;padding-${s[1]}: ${v*$}px;margin-${s[0]}: ${v*T}px;margin-${s[1]}: ${v*f}px;border-${s[0]}-width: ${v*_}px;border-${s[1]}-width: ${v*A}px;`}}var _t=(t,e)=>ee(e,!E(e)),ct=g('<div class="mt-1"><!></div>'),dt=g('<div class="w-full"><button class="header block w-full text-center md:text-end"> </button> <!></div>');function D(t,e){Y(e,!0);let a=Q(!1);var r=dt(),i=m(r);i.__click=[_t,a];var o=m(i,!0);h(i);var d=c(i,2);H(d,()=>E(a),F=>{var l=ct(),s=m(l);et(s,()=>e.children??j),h(l),ve(3,l,()=>pe,()=>({duration:de.value?0:void 0})),u(F,l)}),h(r),G(()=>{Qe(i,"font-bold",E(a)),te(o,e.title)}),u(t,r),Z()}ce(["click"]);var ft=g('<a class="header"> </a>');function W(t,e){let a=Ke(e,"href",3,"");var r=ft(),i=m(r,!0);h(r),G(()=>{L(r,"href",a()),te(i,e.title)}),u(t,r)}var vt=g('<meta property="og:image"> <meta property="thumbnail">',1),pt=g('<meta property="og:url" content="https://rhhspyglass.com">'),ut=g('<meta name="description"> <meta property="og:title"> <meta property="og:description"> <meta property="og:type" content="website"> <!> <!>',1),mt=g('<div class="flex flex-col items-end gap-1"><!> <a class="article-header hover:font-bold">view all</a></div>'),ht=g('<div class="flex flex-col items-end gap-1"><!> <a class="article-header hover:font-bold">view all</a></div>'),gt=g('<div class="flex flex-col items-end gap-1"><a target="_blank" rel="noopener noreferrer" class="article-header" href="mailto:rhhsspyglass@gmail.com">email</a> <a target="_blank" rel="noopener noreferrer" class="article-header" href="https://www.instagram.com/rhhspyglass" referrerpolicy="no-referrer">instagram</a> <p>DM for inquiries</p></div>'),bt=g('<nav class="absolute bottom-0 right-0 w-fit p-10"><div class="flex max-h-screen w-full flex-col items-end gap-2 overflow-y-auto"><!> <!> <!> <!> <!></div></nav>'),wt=(t,e)=>ee(e,!E(e)),yt=t=>t.stopPropagation(),xt=g('<div class="flex flex-col items-center gap-1"><a target="_blank" rel="noopener noreferrer" class="article-header" href="mailto:rhhsspyglass@gmail.com">email</a> <a target="_blank" rel="noopener noreferrer" class="article-header" href="https://www.instagram.com/rhhspyglass" referrerpolicy="no-referrer">instagram</a> <p>DM for inquiries</p></div>'),$t=g('<div class="flex flex-col items-center gap-1"><!> <!> <!> <!> <button><!></button></div>'),kt=g('<nav class="absolute bottom-0 left-0 flex w-full flex-col items-center gap-2 bg-neutral-200 py-2 transition-colors duration-300 hover:cursor-pointer motion-reduce:transition-none dark:bg-neutral-800"><i class="ri-menu-line text-[1.6rem]"></i> <!></nav>'),Ft=g('<!> <main class="large:h-screen flex h-svh w-screen select-none items-center justify-center overflow-hidden font-serif"><header class="flex cursor-pointer flex-col items-center"><div><h2 class="text-2xl italic" style="line-height: 0.6">the</h2> <h1 class="text-5xl">spyglass</h1></div> <div class="hover:boop"><!></div></header> <!></main>',1);function zt(t,e){Y(e,!0);const a=12;let r=Q(!1),i=Q(0),o=J(()=>e.data.articles.filter(p=>p.archived===!1)),d=J(()=>e.data.articles.filter(p=>p.archived===!0||p.archived===void 0));const F=Object.assign({"../lib/thumbnails/fall_2018.pdf.1.png":me,"../lib/thumbnails/fall_2019.pdf.1.png":he,"../lib/thumbnails/fall_2020.pdf.1.png":ge,"../lib/thumbnails/fall_2022.pdf.1.png":be,"../lib/thumbnails/fall_2023.pdf.1.png":we,"../lib/thumbnails/fall_2024.pdf.1.png":ye,"../lib/thumbnails/spring_2020.pdf.1.png":xe,"../lib/thumbnails/spring_2021.pdf.1.png":$e,"../lib/thumbnails/spring_2023.pdf.1.png":ke,"../lib/thumbnails/spring_2024.pdf.1.png":Fe,"../lib/thumbnails/summer_2018.pdf.1.png":Te,"../lib/thumbnails/summer_2019.pdf.1.png":Ae,"../lib/thumbnails/summer_2020.pdf.1.png":Se,"../lib/thumbnails/summer_2024.pdf.1.png":Ee,"../lib/thumbnails/winter_2017.pdf.1.png":Ce,"../lib/thumbnails/winter_2019.pdf.1.png":Pe,"../lib/thumbnails/winter_2020.pdf.1.png":Me,"../lib/thumbnails/winter_2021.pdf.1.png":Re,"../lib/thumbnails/winter_2023.pdf.1.png":Ie,"../lib/thumbnails/winter_2024.pdf.1.png":Le}),l=ue(e.data.articles,F,"../lib"),s="The Spyglass",n="The Spyglass is Richmond Hill High School's official school magazine.";var C=Ft();Je(p=>{var b=ut();De.title=s;var P=K(b);L(P,"content",n);var S=c(P,2);L(S,"content",s);var w=c(S,2);L(w,"content",n);var M=c(w,4);H(M,()=>l,N=>{var y=vt(),R=K(y),x=c(R,2);G(()=>{L(R,"content",l.img.src),L(x,"content",l.img.src)}),u(N,y)});var k=c(M,2);H(k,()=>!Ze,N=>{var y=pt();u(N,y)}),u(p,b)});var $=K(C);Ye($,{});var T=c($,2),f=m(T),_=c(m(f),2),A=m(_);tt(A,{class:"mx-auto mt-3 w-2/5"}),h(_),h(f);var v=c(f,2);H(v,()=>E(i)>768,p=>{var b=bt(),P=m(b),S=m(P);W(S,{href:`${I??""}/about`,title:"about"});var w=c(S,2);D(w,{title:"recent issues",children:(y,R)=>{var x=mt(),z=m(x);se(z,17,()=>E(o),ne,(q,X)=>{le(q,{get article(){return E(X)}})});var U=c(z,2);L(U,"href",`${I??""}/issues`),h(x),u(y,x)},$$slots:{default:!0}});var M=c(w,2);D(M,{title:"past issues",children:(y,R)=>{var x=ht(),z=m(x);se(z,17,()=>E(d).slice(0,a),ne,(q,X)=>{le(q,{get article(){return E(X)}})});var U=c(z,2);L(U,"href",`${I??""}/past-issues`),h(x),u(y,x)},$$slots:{default:!0}});var k=c(M,2);W(k,{href:`${I??""}/team`,title:"team"});var N=c(k,2);D(N,{title:"contact",children:(y,R)=>{var x=gt();u(y,x)},$$slots:{default:!0}}),h(P),h(b),u(p,b)},p=>{var b=kt();b.__click=[wt,r];var P=c(m(b),2);H(P,()=>E(r),S=>{var w=$t(),M=m(w);W(M,{href:`${I??""}/about`,title:"about"});var k=c(M,2);W(k,{href:`${I??""}/issues`,title:"recent issues"});var N=c(k,2);W(N,{href:`${I??""}/past-issues`,title:"past issues"});var y=c(N,2);W(y,{href:`${I??""}/team`,title:"team"});var R=c(y,2);R.__click=[yt];var x=m(R);D(x,{title:"contact",children:(z,U)=>{var q=xt();u(z,q)},$$slots:{default:!0}}),h(R),h(w),ve(3,w,()=>pe,()=>({duration:de.value?0:void 0})),u(S,w)}),h(b),u(p,b)}),h(T),nt("innerWidth",p=>ee(i,_e(p))),u(t,C),Z()}ce(["click"]);export{zt as component};