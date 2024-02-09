import{S as B,i as G,s as V,C as Q,D as w,E as _e,e as K,F as ge,m as k,h as _,G as O,b as T,H as d,I as R,J as U,K as X,L as Y,g as A,d as I,M as be,N as fe,O as M,y as L,z as q,A as P,P as ve,B as j,k as b,a as D,q as se,l as N,c as C,r as le,n as g,p as H,Q as Ne,R as pe}from"../chunks/index.e6e95080.js";import{b as J}from"../chunks/paths.66035498.js";/**
 * @license lucide-svelte v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},he=we;function de(a,e,n){const s=a.slice();return s[10]=e[n][0],s[11]=e[n][1],s}function ne(a){let e,n=[a[11]],s={};for(let t=0;t<n.length;t+=1)s=w(s,n[t]);return{c(){e=_e(a[10]),this.h()},l(t){e=ge(t,a[10],{}),k(e).forEach(_),this.h()},h(){O(e,s)},m(t,l){T(t,e,l)},p(t,l){O(e,s=Y(n,[l&32&&t[11]]))},d(t){t&&_(e)}}}function me(a){let e=a[10],n,s=a[10]&&ne(a);return{c(){s&&s.c(),n=K()},l(t){s&&s.l(t),n=K()},m(t,l){s&&s.m(t,l),T(t,n,l)},p(t,l){t[10]?e?V(e,t[10])?(s.d(1),s=ne(t),e=t[10],s.c(),s.m(n.parentNode,n)):s.p(t,l):(s=ne(t),e=t[10],s.c(),s.m(n.parentNode,n)):e&&(s.d(1),s=null,e=t[10])},d(t){t&&_(n),s&&s.d(t)}}}function Ee(a){let e,n,s,t,l,c=a[5],o=[];for(let r=0;r<c.length;r+=1)o[r]=me(de(a,c,r));const u=a[9].default,h=Q(u,a,a[8],null);let m=[he,a[6],{width:a[2]},{height:a[2]},{stroke:a[1]},{"stroke-width":s=a[4]?Number(a[3])*24/Number(a[2]):a[3]},{class:t=`lucide-icon lucide lucide-${a[0]} ${a[7].class??""}`}],v={};for(let r=0;r<m.length;r+=1)v=w(v,m[r]);return{c(){e=_e("svg");for(let r=0;r<o.length;r+=1)o[r].c();n=K(),h&&h.c(),this.h()},l(r){e=ge(r,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var i=k(e);for(let f=0;f<o.length;f+=1)o[f].l(i);n=K(),h&&h.l(i),i.forEach(_),this.h()},h(){O(e,v)},m(r,i){T(r,e,i);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(e,null);d(e,n),h&&h.m(e,null),l=!0},p(r,[i]){if(i&32){c=r[5];let f;for(f=0;f<c.length;f+=1){const z=de(r,c,f);o[f]?o[f].p(z,i):(o[f]=me(z),o[f].c(),o[f].m(e,n))}for(;f<o.length;f+=1)o[f].d(1);o.length=c.length}h&&h.p&&(!l||i&256)&&R(h,u,r,r[8],l?X(u,r[8],i,null):U(r[8]),null),O(e,v=Y(m,[he,i&64&&r[6],(!l||i&4)&&{width:r[2]},(!l||i&4)&&{height:r[2]},(!l||i&2)&&{stroke:r[1]},(!l||i&28&&s!==(s=r[4]?Number(r[3])*24/Number(r[2]):r[3]))&&{"stroke-width":s},(!l||i&129&&t!==(t=`lucide-icon lucide lucide-${r[0]} ${r[7].class??""}`))&&{class:t}]))},i(r){l||(A(h,r),l=!0)},o(r){I(h,r),l=!1},d(r){r&&_(e),be(o,r),h&&h.d(r)}}}function Ae(a,e,n){const s=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let t=fe(e,s),{$$slots:l={},$$scope:c}=e,{name:o}=e,{color:u="currentColor"}=e,{size:h=24}=e,{strokeWidth:m=2}=e,{absoluteStrokeWidth:v=!1}=e,{iconNode:r}=e;return a.$$set=i=>{n(7,e=w(w({},e),M(i))),n(6,t=fe(e,s)),"name"in i&&n(0,o=i.name),"color"in i&&n(1,u=i.color),"size"in i&&n(2,h=i.size),"strokeWidth"in i&&n(3,m=i.strokeWidth),"absoluteStrokeWidth"in i&&n(4,v=i.absoluteStrokeWidth),"iconNode"in i&&n(5,r=i.iconNode),"$$scope"in i&&n(8,c=i.$$scope)},e=M(e),[o,u,h,m,v,r,t,e,c,l]}class Ie extends B{constructor(e){super(),G(this,e,Ae,Ee,V,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const ke=Ie;function Se(a){let e;const n=a[2].default,s=Q(n,a,a[3],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&8)&&R(s,n,t,t[3],e?X(n,t[3],l,null):U(t[3]),null)},i(t){e||(A(s,t),e=!0)},o(t){I(s,t),e=!1},d(t){s&&s.d(t)}}}function ze(a){let e,n;const s=[{name:"instagram"},a[1],{iconNode:a[0]}];let t={$$slots:{default:[Se]},$$scope:{ctx:a}};for(let l=0;l<s.length;l+=1)t=w(t,s[l]);return e=new ke({props:t}),{c(){L(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,c){P(e,l,c),n=!0},p(l,[c]){const o=c&3?Y(s,[s[0],c&2&&ve(l[1]),c&1&&{iconNode:l[0]}]):{};c&8&&(o.$$scope={dirty:c,ctx:l}),e.$set(o)},i(l){n||(A(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){j(e,l)}}}function We(a,e,n){let{$$slots:s={},$$scope:t}=e;const l=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]];return a.$$set=c=>{n(1,e=w(w({},e),M(c))),"$$scope"in c&&n(3,t=c.$$scope)},e=M(e),[l,e,s,t]}class ye extends B{constructor(e){super(),G(this,e,We,ze,V,{})}}const $e=ye;function De(a){let e;const n=a[2].default,s=Q(n,a,a[3],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,l){s&&s.m(t,l),e=!0},p(t,l){s&&s.p&&(!e||l&8)&&R(s,n,t,t[3],e?X(n,t[3],l,null):U(t[3]),null)},i(t){e||(A(s,t),e=!0)},o(t){I(s,t),e=!1},d(t){s&&s.d(t)}}}function Ce(a){let e,n;const s=[{name:"linkedin"},a[1],{iconNode:a[0]}];let t={$$slots:{default:[De]},$$scope:{ctx:a}};for(let l=0;l<s.length;l+=1)t=w(t,s[l]);return e=new ke({props:t}),{c(){L(e.$$.fragment)},l(l){q(e.$$.fragment,l)},m(l,c){P(e,l,c),n=!0},p(l,[c]){const o=c&3?Y(s,[s[0],c&2&&ve(l[1]),c&1&&{iconNode:l[0]}]):{};c&8&&(o.$$scope={dirty:c,ctx:l}),e.$set(o)},i(l){n||(A(e.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),n=!1},d(l){j(e,l)}}}function Me(a,e,n){let{$$slots:s={},$$scope:t}=e;const l=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];return a.$$set=c=>{n(1,e=w(w({},e),M(c))),"$$scope"in c&&n(3,t=c.$$scope)},e=M(e),[l,e,s,t]}class Ve extends B{constructor(e){super(),G(this,e,Me,Ce,V,{})}}const Le=Ve;function qe(a){let e,n,s,t,l,c,o,u,h,m,v,r,i,f,z,Z,S,x,ee,E,te,F;return u=new $e({props:{size:"24"}}),v=new Le({props:{size:"24"}}),{c(){e=b("div"),n=b("div"),s=b("div"),t=b("img"),c=D(),o=b("a"),L(u.$$.fragment),h=D(),m=b("a"),L(v.$$.fragment),r=D(),i=b("div"),f=b("a"),z=se("About"),Z=D(),S=b("a"),x=se("Service"),ee=D(),E=b("a"),te=se("Shop"),this.h()},l(p){e=N(p,"DIV",{class:!0});var W=k(e);n=N(W,"DIV",{class:!0});var y=k(n);s=N(y,"DIV",{});var ae=k(s);t=N(ae,"IMG",{alt:!0,style:!0,src:!0}),ae.forEach(_),c=C(y),o=N(y,"A",{class:!0,href:!0});var oe=k(o);q(u.$$.fragment,oe),oe.forEach(_),h=C(y),m=N(y,"A",{class:!0,href:!0});var re=k(m);q(v.$$.fragment,re),re.forEach(_),y.forEach(_),r=C(W),i=N(W,"DIV",{class:!0});var $=k(i);f=N($,"A",{class:!0,href:!0});var ie=k(f);z=le(ie,"About"),ie.forEach(_),Z=C($),S=N($,"A",{class:!0,href:!0});var ce=k(S);x=le(ce,"Service"),ce.forEach(_),ee=C($),E=N($,"A",{class:!0,style:!0,href:!0});var ue=k(E);te=le(ue,"Shop"),ue.forEach(_),$.forEach(_),W.forEach(_),this.h()},h(){g(t,"alt","Professional young women with ivy covered bricks in the background."),H(t,"width","50px"),H(t,"height","50px"),Ne(t.src,l=J+"/eCm.png")||g(t,"src",l),g(o,"class","nav-link svelte-159e81s"),g(o,"href","https://www.instagram.com/lensofemc"),g(m,"class","nav-link svelte-159e81s"),g(m,"href","https://www.linkedin.com/in/emilymwebb/"),g(n,"class","socials svelte-159e81s"),g(f,"class","nav-link svelte-159e81s"),g(f,"href",J+"/about"),g(S,"class","nav-link svelte-159e81s"),g(S,"href",J+"/service"),g(E,"class","nav-link svelte-159e81s"),H(E,"color","lightgrey"),H(E,"cursor","not-allowed"),g(E,"href",J+"/"),g(i,"class","nav-links svelte-159e81s"),g(e,"class","top-nav svelte-159e81s")},m(p,W){T(p,e,W),d(e,n),d(n,s),d(s,t),d(n,c),d(n,o),P(u,o,null),d(n,h),d(n,m),P(v,m,null),d(e,r),d(e,i),d(i,f),d(f,z),d(i,Z),d(i,S),d(S,x),d(i,ee),d(i,E),d(E,te),F=!0},p:pe,i(p){F||(A(u.$$.fragment,p),A(v.$$.fragment,p),F=!0)},o(p){I(u.$$.fragment,p),I(v.$$.fragment,p),F=!1},d(p){p&&_(e),j(u),j(v)}}}class Pe extends B{constructor(e){super(),G(this,e,null,qe,V,{})}}function je(a){let e,n,s,t,l;s=new Pe({});const c=a[1].default,o=Q(c,a,a[0],null);return{c(){e=b("main"),n=b("div"),L(s.$$.fragment),t=D(),o&&o.c(),this.h()},l(u){e=N(u,"MAIN",{});var h=k(e);n=N(h,"DIV",{id:!0,class:!0});var m=k(n);q(s.$$.fragment,m),t=C(m),o&&o.l(m),m.forEach(_),h.forEach(_),this.h()},h(){g(n,"id","layout-root"),g(n,"class","svelte-1vdx6x")},m(u,h){T(u,e,h),d(e,n),P(s,n,null),d(n,t),o&&o.m(n,null),l=!0},p(u,[h]){o&&o.p&&(!l||h&1)&&R(o,c,u,u[0],l?X(c,u[0],h,null):U(u[0]),null)},i(u){l||(A(s.$$.fragment,u),A(o,u),l=!0)},o(u){I(s.$$.fragment,u),I(o,u),l=!1},d(u){u&&_(e),j(s),o&&o.d(u)}}}function Be(a,e,n){let{$$slots:s={},$$scope:t}=e;return a.$$set=l=>{"$$scope"in l&&n(0,t=l.$$scope)},[t,s]}class Fe extends B{constructor(e){super(),G(this,e,Be,je,V,{})}}export{Fe as default};