import{s as w,b as y,e as v,h as A,d as h,f as C,c as x,g as E,i as j,j as _,l as $,k as b,p as I,t as S,m as q,n as T,q as L}from"../chunks/scheduler.S3hgbHLv.js";import{S as D,i as M,c as N,a as V,m as z,t as B,b as F,d as G}from"../chunks/index.DJJTUA_d.js";import{b as J}from"../chunks/paths.DQhzFdfY.js";import{s as K}from"../chunks/entry.CHLnIQdh.js";import{L as O}from"../chunks/LookingTube.DXOTO9N8.js";const P=()=>{const a=K;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},Q={subscribe(a){return P().page.subscribe(a)}};function R(a){var k,p;let t,c,e=a[0].status+"",i,f,n,m=((p=(k=a[0])==null?void 0:k.error)==null?void 0:p.message)+"",u;return{c(){t=v("h1"),c=S("error "),i=S(e),f=y(),n=v("h2"),u=S(m),this.h()},l(o){t=x(o,"H1",{class:!0});var l=E(t);c=q(l,"error "),i=q(l,e),l.forEach(h),f=C(o),n=x(o,"H2",{class:!0});var r=E(n);u=q(r,m),r.forEach(h),this.h()},h(){_(t,"class","text-center font-serif text-4xl"),_(n,"class","text-center font-serif text-lg")},m(o,l){$(o,t,l),b(t,c),b(t,i),$(o,f,l),$(o,n,l),b(n,u)},p(o,l){var r,s;l&1&&e!==(e=o[0].status+"")&&T(i,e),l&1&&m!==(m=((s=(r=o[0])==null?void 0:r.error)==null?void 0:s.message)+"")&&T(u,m)},d(o){o&&(h(t),h(f),h(n))}}}function U(a){let t,c="page not found.";return{c(){t=v("h1"),t.textContent=c,this.h()},l(e){t=x(e,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-1u091cv"&&(t.textContent=c),this.h()},h(){_(t,"class","text-center font-serif text-4xl")},m(e,i){$(e,t,i)},p:L,d(e){e&&h(t)}}}function W(a){let t,c,e,i,f,n,m,u,k="go home.",p;document.title=t="The Spyglass | "+(a[0].status===404?"page not found":"error");function o(s,d){return s[0].status===404?U:R}let l=o(a),r=l(a);return n=new O({props:{class:"mx-auto my-4 h-8"}}),{c(){c=y(),e=v("main"),r.c(),i=y(),f=v("div"),N(n.$$.fragment),m=y(),u=v("a"),u.textContent=k,this.h()},l(s){A("svelte-qkei0o",document.head).forEach(h),c=C(s),e=x(s,"MAIN",{class:!0});var g=E(e);r.l(g),i=C(g),f=x(g,"DIV",{class:!0});var H=E(f);V(n.$$.fragment,H),H.forEach(h),m=C(g),u=x(g,"A",{href:!0,class:!0,"data-svelte-h":!0}),j(u)!=="svelte-3k6hal"&&(u.textContent=k),g.forEach(h),this.h()},h(){_(f,"class","hover:boop"),_(u,"href",J+"/"),_(u,"class","block text-center font-serif hover:font-bold hover:underline"),_(e,"class","flex h-screen w-screen flex-col items-center justify-center")},m(s,d){$(s,c,d),$(s,e,d),r.m(e,null),b(e,i),b(e,f),z(n,f,null),b(e,m),b(e,u),p=!0},p(s,[d]){(!p||d&1)&&t!==(t="The Spyglass | "+(s[0].status===404?"page not found":"error"))&&(document.title=t),l===(l=o(s))&&r?r.p(s,d):(r.d(1),r=l(s),r&&(r.c(),r.m(e,i)))},i(s){p||(B(n.$$.fragment,s),p=!0)},o(s){F(n.$$.fragment,s),p=!1},d(s){s&&(h(c),h(e)),r.d(),G(n)}}}function X(a,t,c){let e;return I(a,Q,i=>c(0,e=i)),[e]}let re=class extends D{constructor(t){super(),M(this,t,X,W,w,{})}};export{re as component};