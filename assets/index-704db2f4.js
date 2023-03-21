(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function b(){}function W(e){return e()}function V(){return Object.create(null)}function S(e){e.forEach(W)}function X(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function le(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function Y(e){return document.createTextNode(e)}function $(){return Y(" ")}function j(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function se(e){return function(t){return t.preventDefault(),e.call(this,t)}}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function F(e,t){e.value=t??""}function A(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let M;function U(e){M=e}const L=[],z=[];let q=[];const B=[],fe=Promise.resolve();let P=!1;function ae(){P||(P=!0,fe.then(Z))}function N(e){q.push(e)}const D=new Set;let w=0;function Z(){if(w!==0)return;const e=M;do{try{for(;w<L.length;){const t=L[w];w++,U(t),de(t.$$)}}catch(t){throw L.length=0,w=0,t}for(U(null),L.length=0,w=0;z.length;)z.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];D.has(n)||(D.add(n),n())}q.length=0}while(L.length);for(;B.length;)B.pop()();P=!1,D.clear(),U(e)}function de(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function pe(e){const t=[],n=[];q.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),q=t}const O=new Set;let he;function ee(e,t){e&&e.i&&(O.delete(e),e.i(t))}function _e(e,t,n,r){if(e&&e.o){if(O.has(e))return;O.add(e),he.c.push(()=>{O.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ge(e){e&&e.c()}function te(e,t,n,r){const{fragment:o,after_update:c}=e.$$;o&&o.m(t,n),r||N(()=>{const s=e.$$.on_mount.map(W).filter(X);e.$$.on_destroy?e.$$.on_destroy.push(...s):S(s),e.$$.on_mount=[]}),c.forEach(N)}function ne(e,t){const n=e.$$;n.fragment!==null&&(pe(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){e.$$.dirty[0]===-1&&(L.push(e),ae(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,r,o,c,s,u=[-1]){const l=M;U(e);const i=e.$$={fragment:null,ctx:[],props:c,update:b,not_equal:o,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:V(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};s&&s(i.root);let f=!1;if(i.ctx=n?n(e,t.props||{},(a,_,...m)=>{const d=m.length?m[0]:_;return i.ctx&&o(i.ctx[a],i.ctx[a]=d)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](d),f&&me(e,a)),_}):[],i.update(),f=!0,S(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const a=ue(t.target);i.fragment&&i.fragment.l(a),a.forEach(C)}else i.fragment&&i.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),Z()}U(l)}class oe{$destroy(){ne(this,1),this.$destroy=b}$on(t,n){if(!X(n))return b;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!le(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const x=[];function ye(e,t=b){let n;const r=new Set;function o(u){if(H(e,u)&&(e=u,n)){const l=!x.length;for(const i of r)i[1](),x.push(i,e);if(l){for(let i=0;i<x.length;i+=2)x[i][0](x[i+1]);x.length=0}}}function c(u){o(u(e))}function s(u,l=b){const i=[u,l];return r.add(i),r.size===1&&(n=t(o)||b),u(e),()=>{r.delete(i),r.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:s}}let T;const ve=new Uint8Array(16);function be(){if(!T&&(T=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(ve)}const p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).slice(1));function $e(e,t=0){return(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase()}const we=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),K={randomUUID:we};function xe(e,t,n){if(K.randomUUID&&!t&&!e)return K.randomUUID();e=e||{};const r=e.random||(e.rng||be)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let o=0;o<16;++o)t[n+o]=r[o];return t}return $e(r)}function Le(){return xe()}function Ce(e,t){if(e.value.length>255||e.value.trim().length<=0)return!1;const n=e.value.toLowerCase();for(const r of t)if(r.value.toLowerCase()==n)return!1;return!0}function qe(e){return{...e,value:e.value[0].toUpperCase()+e.value.slice(1)}}function I(){return Math.floor(Math.random()*(150-50+1)+50).toString()}function Ee(){return"rgb("+I()+","+I()+","+I()+")"}const k=ye([]);function G(e,t,n){const r=e.slice();return r[8]=t[n],r}function J(e){let t,n,r,o,c=e[8].value+"",s,u,l,i,f,a;function _(){return e[6](e[8])}function m(){return e[7](e[8])}return{c(){t=v("div"),n=v("button"),n.textContent="✔️",r=$(),o=v("span"),s=Y(c),u=$(),l=v("button"),l.textContent="🗑️",i=$(),h(n,"type","button"),h(n,"class","svelte-q8s35p"),A(o,"text-decoration",e[8].done?"line-through":""),h(o,"class","svelte-q8s35p"),h(l,"type","button"),h(l,"class","svelte-q8s35p"),A(t,"background-color",Ee()),h(t,"class","item svelte-q8s35p")},m(d,y){E(d,t,y),g(t,n),g(t,r),g(t,o),g(o,s),g(t,u),g(t,l),g(t,i),f||(a=[j(n,"click",_),j(l,"click",m)],f=!0)},p(d,y){e=d,y&2&&c!==(c=e[8].value+"")&&ce(s,c),y&2&&A(o,"text-decoration",e[8].done?"line-through":"")},d(d){d&&C(t),f=!1,S(a)}}}function Ue(e){let t,n,r,o,c,s=e[1],u=[];for(let l=0;l<s.length;l+=1)u[l]=J(G(e,s,l));return{c(){t=v("input"),n=$(),r=v("div");for(let l=0;l<u.length;l+=1)u[l].c();h(t,"type","text"),h(t,"placeholder","🔍"),h(t,"class","svelte-q8s35p"),h(r,"class","list svelte-q8s35p")},m(l,i){E(l,t,i),F(t,e[0]),E(l,n,i),E(l,r,i);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(r,null);o||(c=j(t,"input",e[5]),o=!0)},p(l,[i]){if(i&1&&t.value!==l[0]&&F(t,l[0]),i&14){s=l[1];let f;for(f=0;f<s.length;f+=1){const a=G(l,s,f);u[f]?u[f].p(a,i):(u[f]=J(a),u[f].c(),u[f].m(r,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=s.length}},i:b,o:b,d(l){l&&C(t),l&&C(n),l&&C(r),ie(u,l),o=!1,c()}}}function Se(e,t){return e.filter(n=>n.value.toLowerCase().includes(t))}function Te(e,t,n){let{todos:r}=t,o,c="";function s(a){k.update(_=>_.filter(m=>m.id!==a))}function u(a){k.update(_=>{for(let m of _)m.id===a&&(m.done=!0);return _})}function l(){c=this.value,n(0,c)}const i=a=>u(a.id),f=a=>s(a.id);return e.$$set=a=>{"todos"in a&&n(4,r=a.todos)},e.$$.update=()=>{e.$$.dirty&17&&n(1,o=Se(r,c.toLowerCase()))},[c,o,s,u,r,l,i,f]}class Oe extends oe{constructor(t){super(),re(this,t,Te,Ue,H,{todos:4})}}function je(e){let t,n,r,o,c,s,u,l,i,f,a,_,m;return o=new Oe({props:{todos:e[0]}}),{c(){t=v("main"),n=v("h1"),n.textContent="Todos:",r=$(),ge(o.$$.fragment),c=$(),s=v("progress"),i=$(),f=v("form"),f.innerHTML='<input type="text" placeholder="Add new todo" name="todo" id="todo" class="svelte-j63d8q"/>',h(s,"max",u=e[0].length),s.value=l=e[0].filter(Q).length,h(s,"class","svelte-j63d8q"),h(f,"class","svelte-j63d8q"),h(t,"class","svelte-j63d8q")},m(d,y){E(d,t,y),g(t,n),g(t,r),te(o,t,null),g(t,c),g(t,s),g(t,i),g(t,f),a=!0,_||(m=j(f,"submit",se(e[1])),_=!0)},p(d,[y]){const R={};y&1&&(R.todos=d[0]),o.$set(R),(!a||y&1&&u!==(u=d[0].length))&&h(s,"max",u),(!a||y&1&&l!==(l=d[0].filter(Q).length))&&(s.value=l)},i(d){a||(ee(o.$$.fragment,d),a=!0)},o(d){_e(o.$$.fragment,d),a=!1},d(d){d&&C(t),ne(o),_=!1,m()}}}const Q=e=>e.done===!0;function Ae(e,t,n){let r;k.subscribe(s=>{n(0,r=s)});function o(s){const u=new FormData(s.target);for(let l of u){const[,i]=l;c({id:Le(),value:i.toString(),done:!1}),s.target[0].value="";return}}function c(s){Ce(s,r)&&(r.push(qe(s)),n(0,r))}return[r,o]}class De extends oe{constructor(t){super(),re(this,t,Ae,je,H,{})}}new De({target:document.getElementById("app")});
