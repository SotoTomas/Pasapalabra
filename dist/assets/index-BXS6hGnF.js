(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Q={},nn=[],ze=()=>{},qo=()=>!1,xs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ds=t=>t.startsWith("onUpdate:"),he=Object.assign,Vr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wl=Object.prototype.hasOwnProperty,q=(t,e)=>wl.call(t,e),D=Array.isArray,sn=t=>jn(t)==="[object Map]",Ns=t=>jn(t)==="[object Set]",Ti=t=>jn(t)==="[object Date]",$=t=>typeof t=="function",ie=t=>typeof t=="string",Re=t=>typeof t=="symbol",X=t=>t!==null&&typeof t=="object",Ko=t=>(X(t)||$(t))&&$(t.then)&&$(t.catch),zo=Object.prototype.toString,jn=t=>zo.call(t),Il=t=>jn(t).slice(8,-1),Go=t=>jn(t)==="[object Object]",Ms=t=>ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Tn=Hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ls=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Sl=/-\w/g,xe=Ls(t=>t.replace(Sl,e=>e.slice(1).toUpperCase())),El=/\B([A-Z])/g,zt=Ls(t=>t.replace(El,"-$1").toLowerCase()),Jo=Ls(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zs=Ls(t=>t?`on${Jo(t)}`:""),Ke=(t,e)=>!Object.is(t,e),as=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Yo=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},$s=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ai;const Us=()=>Ai||(Ai=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fs(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ie(s)?Pl(s):Fs(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ie(t)||X(t))return t}const Tl=/;(?![^(]*\))/g,Al=/:([^]+)/,Cl=/\/\*[^]*?\*\//g;function Pl(t){const e={};return t.replace(Cl,"").split(Tl).forEach(n=>{if(n){const s=n.split(Al);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fn(t){let e="";if(ie(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const s=fn(t[n]);s&&(e+=s+" ")}else if(X(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ol=Hr(Rl);function Qo(t){return!!t||t===""}function kl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Wn(t[s],e[s]);return n}function Wn(t,e){if(t===e)return!0;let n=Ti(t),s=Ti(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Re(t),s=Re(e),n||s)return t===e;if(n=D(t),s=D(e),n||s)return n&&s?kl(t,e):!1;if(n=X(t),s=X(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Wn(t[o],e[o]))return!1}}return String(t)===String(e)}function xl(t,e){return t.findIndex(n=>Wn(n,e))}const Xo=t=>!!(t&&t.__v_isRef===!0),ae=t=>ie(t)?t:t==null?"":D(t)||X(t)&&(t.toString===zo||!$(t.toString))?Xo(t)?ae(t.value):JSON.stringify(t,Zo,2):String(t),Zo=(t,e)=>Xo(e)?Zo(t,e.value):sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[er(s,i)+" =>"]=r,n),{})}:Ns(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>er(n))}:Re(e)?er(e):X(e)&&!D(e)&&!Go(e)?String(e):e,er=(t,e="")=>{var n;return Re(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ce;class ea{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ce&&(ce.active?(this.parent=ce,this.index=(ce.scopes||(ce.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ce;try{return ce=this,e()}finally{ce=n}}}on(){++this._on===1&&(this.prevScope=ce,ce=this)}off(){if(this._on>0&&--this._on===0){if(ce===this)ce=this.prevScope;else{let e=ce;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ta(t){return new ea(t)}function na(){return ce}function Dl(t,e=!1){ce&&ce.cleanups.push(t)}let Z;const tr=new WeakSet;class sa{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ce&&(ce.active?ce.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tr.has(this)&&(tr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ia(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ci(this),oa(this);const e=Z,n=De;Z=this,De=!0;try{return this.fn()}finally{aa(this),Z=e,De=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)qr(e);this.deps=this.depsTail=void 0,Ci(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wr(this)&&this.run()}get dirty(){return wr(this)}}let ra=0,An,Cn;function ia(t,e=!1){if(t.flags|=8,e){t.next=Cn,Cn=t;return}t.next=An,An=t}function jr(){ra++}function Wr(){if(--ra>0)return;if(Cn){let e=Cn;for(Cn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;An;){let e=An;for(An=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function oa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function aa(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),qr(s),Nl(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function wr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ca(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ca(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mn)||(t.globalVersion=Mn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!wr(t))))return;t.flags|=2;const e=t.dep,n=Z,s=De;Z=t,De=!0;try{oa(t);const r=t.fn(t._value);(e.version===0||Ke(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Z=n,De=s,aa(t),t.flags&=-3}}function qr(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)qr(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Nl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let De=!0;const la=[];function Qe(){la.push(De),De=!1}function Xe(){const t=la.pop();De=t===void 0?!0:t}function Ci(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Z;Z=void 0;try{e()}finally{Z=n}}}let Mn=0;class Ml{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Z||!De||Z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Z)n=this.activeLink=new Ml(Z,this),Z.deps?(n.prevDep=Z.depsTail,Z.depsTail.nextDep=n,Z.depsTail=n):Z.deps=Z.depsTail=n,ua(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Z.depsTail,n.nextDep=void 0,Z.depsTail.nextDep=n,Z.depsTail=n,Z.deps===n&&(Z.deps=s)}return n}trigger(e){this.version++,Mn++,this.notify(e)}notify(e){jr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wr()}}}function ua(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ua(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const hs=new WeakMap,Ft=Symbol(""),Ir=Symbol(""),Ln=Symbol("");function de(t,e,n){if(De&&Z){let s=hs.get(t);s||hs.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Kr),r.map=s,r.key=n),r.track()}}function at(t,e,n,s,r,i){const o=hs.get(t);if(!o){Mn++;return}const a=c=>{c&&c.trigger()};if(jr(),e==="clear")o.forEach(a);else{const c=D(t),l=c&&Ms(n);if(c&&n==="length"){const f=Number(s);o.forEach((h,_)=>{(_==="length"||_===Ln||!Re(_)&&_>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Ln)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Ft)),sn(t)&&a(o.get(Ir)));break;case"delete":c||(a(o.get(Ft)),sn(t)&&a(o.get(Ir)));break;case"set":sn(t)&&a(o.get(Ft));break}}Wr()}function Ll(t,e){const n=hs.get(t);return n&&n.get(e)}function Qt(t){const e=W(t);return e===t?e:(de(e,"iterate",Ln),Pe(t)?e:e.map(ht))}function zr(t){return de(t=W(t),"iterate",Ln),t}function We(t,e){return Ot(t)?$n(Ct(t)?ht(e):e):ht(e)}const $l={__proto__:null,[Symbol.iterator](){return nr(this,Symbol.iterator,t=>We(this,t))},concat(...t){return Qt(this).concat(...t.map(e=>D(e)?Qt(e):e))},entries(){return nr(this,"entries",t=>(t[1]=We(this,t[1]),t))},every(t,e){return st(this,"every",t,e,void 0,arguments)},filter(t,e){return st(this,"filter",t,e,n=>n.map(s=>We(this,s)),arguments)},find(t,e){return st(this,"find",t,e,n=>We(this,n),arguments)},findIndex(t,e){return st(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return st(this,"findLast",t,e,n=>We(this,n),arguments)},findLastIndex(t,e){return st(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return st(this,"forEach",t,e,void 0,arguments)},includes(...t){return sr(this,"includes",t)},indexOf(...t){return sr(this,"indexOf",t)},join(t){return Qt(this).join(t)},lastIndexOf(...t){return sr(this,"lastIndexOf",t)},map(t,e){return st(this,"map",t,e,void 0,arguments)},pop(){return vn(this,"pop")},push(...t){return vn(this,"push",t)},reduce(t,...e){return Pi(this,"reduce",t,e)},reduceRight(t,...e){return Pi(this,"reduceRight",t,e)},shift(){return vn(this,"shift")},some(t,e){return st(this,"some",t,e,void 0,arguments)},splice(...t){return vn(this,"splice",t)},toReversed(){return Qt(this).toReversed()},toSorted(t){return Qt(this).toSorted(t)},toSpliced(...t){return Qt(this).toSpliced(...t)},unshift(...t){return vn(this,"unshift",t)},values(){return nr(this,"values",t=>We(this,t))}};function nr(t,e,n){const s=zr(t),r=s[e]();return s!==t&&!Pe(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.done||(i.value=n(i.value)),i}),r}const Ul=Array.prototype;function st(t,e,n,s,r,i){const o=zr(t),a=o!==t&&!Pe(t),c=o[e];if(c!==Ul[e]){const h=c.apply(t,i);return a?ht(h):h}let l=n;o!==t&&(a?l=function(h,_){return n.call(this,We(t,h),_,t)}:n.length>2&&(l=function(h,_){return n.call(this,h,_,t)}));const f=c.call(o,l,s);return a&&r?r(f):f}function Pi(t,e,n,s){const r=zr(t),i=r!==t&&!Pe(t);let o=n,a=!1;r!==t&&(i?(a=s.length===0,o=function(l,f,h){return a&&(a=!1,l=We(t,l)),n.call(this,l,We(t,f),h,t)}):n.length>3&&(o=function(l,f,h){return n.call(this,l,f,h,t)}));const c=r[e](o,...s);return a?We(t,c):c}function sr(t,e,n){const s=W(t);de(s,"iterate",Ln);const r=s[e](...n);return(r===-1||r===!1)&&Bs(n[0])?(n[0]=W(n[0]),s[e](...n)):r}function vn(t,e,n=[]){Qe(),jr();const s=W(t)[e].apply(t,n);return Wr(),Xe(),s}const Fl=Hr("__proto__,__v_isRef,__isVue"),fa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Re));function Bl(t){Re(t)||(t=String(t));const e=W(this);return de(e,"has",t),e.hasOwnProperty(t)}class da{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Yl:ma:i?ga:pa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=D(e);if(!r){let c;if(o&&(c=$l[n]))return c;if(n==="hasOwnProperty")return Bl}const a=Reflect.get(e,n,se(e)?e:s);if((Re(n)?fa.has(n):Fl(n))||(r||de(e,"get",n),i))return a;if(se(a)){const c=o&&Ms(n)?a:a.value;return r&&X(c)?Er(c):c}return X(a)?r?Er(a):qn(a):a}}class ha extends da{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];const o=D(e)&&Ms(n);if(!this._isShallow){const l=Ot(i);if(!Pe(s)&&!Ot(s)&&(i=W(i),s=W(s)),!o&&se(i)&&!se(s))return l||(i.value=s),!0}const a=o?Number(n)<e.length:q(e,n),c=Reflect.set(e,n,s,se(e)?e:r);return e===W(r)&&c&&(a?Ke(s,i)&&at(e,"set",n,s):at(e,"add",n,s)),c}deleteProperty(e,n){const s=q(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&at(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Re(n)||!fa.has(n))&&de(e,"has",n),s}ownKeys(e){return de(e,"iterate",D(e)?"length":Ft),Reflect.ownKeys(e)}}class Hl extends da{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Vl=new ha,jl=new Hl,Wl=new ha(!0);const Sr=t=>t,ns=t=>Reflect.getPrototypeOf(t);function ql(t,e,n){return function(...s){const r=this.__v_raw,i=W(r),o=sn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),f=n?Sr:e?$n:ht;return!e&&de(i,"iterate",c?Ir:Ft),he(Object.create(l),{next(){const{value:h,done:_}=l.next();return _?{value:h,done:_}:{value:a?[f(h[0]),f(h[1])]:f(h),done:_}}})}}function ss(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Kl(t,e){const n={get(r){const i=this.__v_raw,o=W(i),a=W(r);t||(Ke(r,a)&&de(o,"get",r),de(o,"get",a));const{has:c}=ns(o),l=e?Sr:t?$n:ht;if(c.call(o,r))return l(i.get(r));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&de(W(r),"iterate",Ft),r.size},has(r){const i=this.__v_raw,o=W(i),a=W(r);return t||(Ke(r,a)&&de(o,"has",r),de(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=W(a),l=e?Sr:t?$n:ht;return!t&&de(c,"iterate",Ft),a.forEach((f,h)=>r.call(i,l(f),l(h),o))}};return he(n,t?{add:ss("add"),set:ss("set"),delete:ss("delete"),clear:ss("clear")}:{add(r){const i=W(this),o=ns(i),a=W(r),c=!e&&!Pe(r)&&!Ot(r)?a:r;return o.has.call(i,c)||Ke(r,c)&&o.has.call(i,r)||Ke(a,c)&&o.has.call(i,a)||(i.add(c),at(i,"add",c,c)),this},set(r,i){!e&&!Pe(i)&&!Ot(i)&&(i=W(i));const o=W(this),{has:a,get:c}=ns(o);let l=a.call(o,r);l||(r=W(r),l=a.call(o,r));const f=c.call(o,r);return o.set(r,i),l?Ke(i,f)&&at(o,"set",r,i):at(o,"add",r,i),this},delete(r){const i=W(this),{has:o,get:a}=ns(i);let c=o.call(i,r);c||(r=W(r),c=o.call(i,r)),a&&a.call(i,r);const l=i.delete(r);return c&&at(i,"delete",r,void 0),l},clear(){const r=W(this),i=r.size!==0,o=r.clear();return i&&at(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ql(r,t,e)}),n}function Gr(t,e){const n=Kl(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(q(n,r)&&r in s?n:s,r,i)}const zl={get:Gr(!1,!1)},Gl={get:Gr(!1,!0)},Jl={get:Gr(!0,!1)};const pa=new WeakMap,ga=new WeakMap,ma=new WeakMap,Yl=new WeakMap;function Ql(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qn(t){return Ot(t)?t:Jr(t,!1,Vl,zl,pa)}function Xl(t){return Jr(t,!1,Wl,Gl,ga)}function Er(t){return Jr(t,!0,jl,Jl,ma)}function Jr(t,e,n,s,r){if(!X(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=r.get(t);if(i)return i;const o=Ql(Il(t));if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ct(t){return Ot(t)?Ct(t.__v_raw):!!(t&&t.__v_isReactive)}function Ot(t){return!!(t&&t.__v_isReadonly)}function Pe(t){return!!(t&&t.__v_isShallow)}function Bs(t){return t?!!t.__v_raw:!1}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function Yr(t){return!q(t,"__v_skip")&&Object.isExtensible(t)&&Yo(t,"__v_skip",!0),t}const ht=t=>X(t)?qn(t):t,$n=t=>X(t)?Er(t):t;function se(t){return t?t.__v_isRef===!0:!1}function ee(t){return Zl(t,!1)}function Zl(t,e){return se(t)?t:new eu(t,e)}class eu{constructor(e,n){this.dep=new Kr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:W(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Pe(e)||Ot(e);e=s?e:W(e),Ke(e,n)&&(this._rawValue=e,this._value=s?e:ht(e),this.dep.trigger())}}function K(t){return se(t)?t.value:t}const tu={get:(t,e,n)=>e==="__v_raw"?t:K(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return se(r)&&!se(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function _a(t){return Ct(t)?t:new Proxy(t,tu)}function nu(t){const e=D(t)?new Array(t.length):{};for(const n in t)e[n]=ru(t,n);return e}class su{constructor(e,n,s){this._object=e,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._key=Re(n)?n:String(n),this._raw=W(e);let r=!0,i=e;if(!D(e)||Re(this._key)||!Ms(this._key))do r=!Bs(i)||Pe(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=K(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&se(this._raw[this._key])){const n=this._object[this._key];if(se(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Ll(this._raw,this._key)}}function ru(t,e,n){return new su(t,e,n)}class iu{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Kr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return ia(this,!0),!0}get value(){const e=this.dep.track();return ca(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ou(t,e,n=!1){let s,r;return $(t)?s=t:(s=t.get,r=t.set),new iu(s,r,n)}const rs={},ps=new WeakMap;let Mt;function au(t,e=!1,n=Mt){if(n){let s=ps.get(n);s||ps.set(n,s=[]),s.push(t)}}function cu(t,e,n=Q){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=P=>r?P:Pe(P)||r===!1||r===0?ct(P,1):ct(P);let f,h,_,w,O=!1,A=!1;if(se(t)?(h=()=>t.value,O=Pe(t)):Ct(t)?(h=()=>l(t),O=!0):D(t)?(A=!0,O=t.some(P=>Ct(P)||Pe(P)),h=()=>t.map(P=>{if(se(P))return P.value;if(Ct(P))return l(P);if($(P))return c?c(P,2):P()})):$(t)?e?h=c?()=>c(t,2):t:h=()=>{if(_){Qe();try{_()}finally{Xe()}}const P=Mt;Mt=f;try{return c?c(t,3,[w]):t(w)}finally{Mt=P}}:h=ze,e&&r){const P=h,B=r===!0?1/0:r;h=()=>ct(P(),B)}const M=na(),C=()=>{f.stop(),M&&M.active&&Vr(M.effects,f)};if(i&&e){const P=e;e=(...B)=>{const pe=P(...B);return C(),pe}}let U=A?new Array(t.length).fill(rs):rs;const L=P=>{if(!(!(f.flags&1)||!f.dirty&&!P))if(e){const B=f.run();if(P||r||O||(A?B.some((pe,le)=>Ke(pe,U[le])):Ke(B,U))){_&&_();const pe=Mt;Mt=f;try{const le=[B,U===rs?void 0:A&&U[0]===rs?[]:U,w];U=B,c?c(e,3,le):e(...le)}finally{Mt=pe}}}else f.run()};return a&&a(L),f=new sa(h),f.scheduler=o?()=>o(L,!1):L,w=P=>au(P,!1,f),_=f.onStop=()=>{const P=ps.get(f);if(P){if(c)c(P,4);else for(const B of P)B();ps.delete(f)}},e?s?L(!0):U=f.run():o?o(L.bind(null,!0),!0):f.run(),C.pause=f.pause.bind(f),C.resume=f.resume.bind(f),C.stop=C,C}function ct(t,e=1/0,n){if(e<=0||!X(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,se(t))ct(t.value,e,n);else if(D(t))for(let s=0;s<t.length;s++)ct(t[s],e,n);else if(Ns(t)||sn(t))t.forEach(s=>{ct(s,e,n)});else if(Go(t)){for(const s in t)ct(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ct(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kn(t,e,n,s){try{return s?t(...s):t()}catch(r){Hs(r,e,n)}}function Ne(t,e,n,s){if($(t)){const r=Kn(t,e,n,s);return r&&Ko(r)&&r.catch(i=>{Hs(i,e,n)}),r}if(D(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Ne(t[i],e,n,s));return r}}function Hs(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Q;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,c,l)===!1)return}a=a.parent}if(i){Qe(),Kn(i,null,10,[t,c,l]),Xe();return}}lu(t,n,r,s,o)}function lu(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const me=[];let je=-1;const rn=[];let It=null,Zt=0;const ya=Promise.resolve();let gs=null;function Vs(t){const e=gs||ya;return t?e.then(this?t.bind(this):t):e}function uu(t){let e=je+1,n=me.length;for(;e<n;){const s=e+n>>>1,r=me[s],i=Un(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Qr(t){if(!(t.flags&1)){const e=Un(t),n=me[me.length-1];!n||!(t.flags&2)&&e>=Un(n)?me.push(t):me.splice(uu(e),0,t),t.flags|=1,ba()}}function ba(){gs||(gs=ya.then(wa))}function fu(t){D(t)?rn.push(...t):It&&t.id===-1?It.splice(Zt+1,0,t):t.flags&1||(rn.push(t),t.flags|=1),ba()}function Ri(t,e,n=je+1){for(;n<me.length;n++){const s=me[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;me.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function va(t){if(rn.length){const e=[...new Set(rn)].sort((n,s)=>Un(n)-Un(s));if(rn.length=0,It){It.push(...e);return}for(It=e,Zt=0;Zt<It.length;Zt++){const n=It[Zt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}It=null,Zt=0}}const Un=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wa(t){try{for(je=0;je<me.length;je++){const e=me[je];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Kn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;je<me.length;je++){const e=me[je];e&&(e.flags&=-2)}je=-1,me.length=0,va(),gs=null,(me.length||rn.length)&&wa()}}let Ce=null,Ia=null;function ms(t){const e=Ce;return Ce=t,Ia=t&&t.type.__scopeId||null,e}function du(t,e=Ce,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Bi(-1);const i=ms(e);let o;try{o=t(...r)}finally{ms(i),s._d&&Bi(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function In(t,e){if(Ce===null)return t;const n=Ks(Ce),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Q]=e[r];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&ct(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Dt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Qe(),Ne(c,n,8,[t.el,a,t,e]),Xe())}}function hu(t,e){if(_e){let n=_e.provides;const s=_e.parent&&_e.parent.provides;s===n&&(n=_e.provides=Object.create(s)),n[t]=e}}function Pn(t,e,n=!1){const s=Ya();if(s||Ht){let r=Ht?Ht._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$(e)?e.call(s&&s.proxy):e}}function pu(){return!!(Ya()||Ht)}const gu=Symbol.for("v-scx"),mu=()=>Pn(gu);function _u(t,e){return Xr(t,null,e)}function Bt(t,e,n){return Xr(t,e,n)}function Xr(t,e,n=Q){const{immediate:s,deep:r,flush:i,once:o}=n,a=he({},n),c=e&&s||!e&&i!=="post";let l;if(Bn){if(i==="sync"){const w=mu();l=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=ze,w.resume=ze,w.pause=ze,w}}const f=_e;a.call=(w,O,A)=>Ne(w,f,O,A);let h=!1;i==="post"?a.scheduler=w=>{we(w,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(w,O)=>{O?w():Qr(w)}),a.augmentJob=w=>{e&&(w.flags|=4),h&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const _=cu(t,e,a);return Bn&&(l?l.push(_):c&&_()),_}function yu(t,e,n){const s=this.proxy,r=ie(t)?t.includes(".")?Sa(s,t):()=>s[t]:t.bind(s,s);let i;$(e)?i=e:(i=e.handler,n=e);const o=zn(this),a=Xr(r,i.bind(s),n);return o(),a}function Sa(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const bu=Symbol("_vte"),vu=t=>t.__isTeleport,rr=Symbol("_leaveCb");function Zr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ea(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Oi(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const _s=new WeakMap;function Rn(t,e,n,s,r=!1){if(D(t)){t.forEach((A,M)=>Rn(A,e&&(D(e)?e[M]:e),n,s,r));return}if(On(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Rn(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Ks(s.component):s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Q?a.refs={}:a.refs,h=a.setupState,_=W(h),w=h===Q?qo:A=>Oi(f,A)?!1:q(_,A),O=(A,M)=>!(M&&Oi(f,M));if(l!=null&&l!==c){if(ki(e),ie(l))f[l]=null,w(l)&&(h[l]=null);else if(se(l)){const A=e;O(l,A.k)&&(l.value=null),A.k&&(f[A.k]=null)}}if($(c)){Qe();try{Kn(c,a,12,[o,f])}finally{Xe()}}else{const A=ie(c),M=se(c);if(A||M){const C=()=>{if(t.f){const U=A?w(c)?h[c]:f[c]:O()||!t.k?c.value:f[t.k];if(r)D(U)&&Vr(U,i);else if(D(U))U.includes(i)||U.push(i);else if(A)f[c]=[i],w(c)&&(h[c]=f[c]);else{const L=[i];O(c,t.k)&&(c.value=L),t.k&&(f[t.k]=L)}}else A?(f[c]=o,w(c)&&(h[c]=o)):M&&(O(c,t.k)&&(c.value=o),t.k&&(f[t.k]=o))};if(o){const U=()=>{C(),_s.delete(t)};U.id=-1,_s.set(t,U),we(U,n)}else ki(t),C()}}}function ki(t){const e=_s.get(t);e&&(e.flags|=8,_s.delete(t))}Us().requestIdleCallback;Us().cancelIdleCallback;const On=t=>!!t.type.__asyncLoader,Ta=t=>t.type.__isKeepAlive;function wu(t,e){Aa(t,"a",e)}function Iu(t,e){Aa(t,"da",e)}function Aa(t,e,n=_e){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(js(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ta(r.parent.vnode)&&Su(s,e,n,r),r=r.parent}}function Su(t,e,n,s){const r=js(e,t,s,!0);Pa(()=>{Vr(s[e],r)},n)}function js(t,e,n=_e,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Qe();const a=zn(n),c=Ne(e,n,t,o);return a(),Xe(),c});return s?r.unshift(i):r.push(i),i}}const yt=t=>(e,n=_e)=>{(!Bn||t==="sp")&&js(t,(...s)=>e(...s),n)},Eu=yt("bm"),Ca=yt("m"),Tu=yt("bu"),Au=yt("u"),Cu=yt("bum"),Pa=yt("um"),Pu=yt("sp"),Ru=yt("rtg"),Ou=yt("rtc");function ku(t,e=_e){js("ec",t,e)}const xu=Symbol.for("v-ndc"),Tr=t=>t?Qa(t)?Ks(t):Tr(t.parent):null,kn=he(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tr(t.parent),$root:t=>Tr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Oa(t),$forceUpdate:t=>t.f||(t.f=()=>{Qr(t.update)}),$nextTick:t=>t.n||(t.n=Vs.bind(t.proxy)),$watch:t=>yu.bind(t)}),ir=(t,e)=>t!==Q&&!t.__isScriptSetup&&q(t,e),Du={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ir(s,e))return o[e]=1,s[e];if(r!==Q&&q(r,e))return o[e]=2,r[e];if(q(i,e))return o[e]=3,i[e];if(n!==Q&&q(n,e))return o[e]=4,n[e];Ar&&(o[e]=0)}}const l=kn[e];let f,h;if(l)return e==="$attrs"&&de(t.attrs,"get",""),l(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Q&&q(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,q(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ir(r,e)?(r[e]=n,!0):s!==Q&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,props:i,type:o}},a){let c;return!!(n[a]||t!==Q&&a[0]!=="$"&&q(t,a)||ir(e,a)||q(i,a)||q(s,a)||q(kn,a)||q(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xi(t){return D(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ar=!0;function Nu(t){const e=Oa(t),n=t.proxy,s=t.ctx;Ar=!1,e.beforeCreate&&Di(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:_,beforeUpdate:w,updated:O,activated:A,deactivated:M,beforeDestroy:C,beforeUnmount:U,destroyed:L,unmounted:P,render:B,renderTracked:pe,renderTriggered:le,errorCaptured:H,serverPrefetch:V,expose:ne,inheritAttrs:ve,components:Te,directives:Me,filters:nt}=e;if(l&&Mu(l,s,null),o)for(const F in o){const z=o[F];$(z)&&(s[F]=z.bind(n))}if(r){const F=r.call(n,n);X(F)&&(t.data=qn(F))}if(Ar=!0,i)for(const F in i){const z=i[F],Le=$(z)?z.bind(n,n):$(z.get)?z.get.bind(n,n):ze,$e=!$(z)&&$(z.set)?z.set.bind(n):ze,Ue=re({get:Le,set:$e});Object.defineProperty(s,F,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Ae=>Ue.value=Ae})}if(a)for(const F in a)Ra(a[F],s,n,F);if(c){const F=$(c)?c.call(n):c;Reflect.ownKeys(F).forEach(z=>{hu(z,F[z])})}f&&Di(f,t,"c");function te(F,z){D(z)?z.forEach(Le=>F(Le.bind(n))):z&&F(z.bind(n))}if(te(Eu,h),te(Ca,_),te(Tu,w),te(Au,O),te(wu,A),te(Iu,M),te(ku,H),te(Ou,pe),te(Ru,le),te(Cu,U),te(Pa,P),te(Pu,V),D(ne))if(ne.length){const F=t.exposed||(t.exposed={});ne.forEach(z=>{Object.defineProperty(F,z,{get:()=>n[z],set:Le=>n[z]=Le,enumerable:!0})})}else t.exposed||(t.exposed={});B&&t.render===ze&&(t.render=B),ve!=null&&(t.inheritAttrs=ve),Te&&(t.components=Te),Me&&(t.directives=Me),V&&Ea(t)}function Mu(t,e,n=ze){D(t)&&(t=Cr(t));for(const s in t){const r=t[s];let i;X(r)?"default"in r?i=Pn(r.from||s,r.default,!0):i=Pn(r.from||s):i=Pn(r),se(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Di(t,e,n){Ne(D(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ra(t,e,n,s){let r=s.includes(".")?Sa(n,s):()=>n[s];if(ie(t)){const i=e[t];$(i)&&Bt(r,i)}else if($(t))Bt(r,t.bind(n));else if(X(t))if(D(t))t.forEach(i=>Ra(i,e,n,s));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Bt(r,i,t)}}function Oa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>ys(c,l,o,!0)),ys(c,e,o)),X(e)&&i.set(e,c),c}function ys(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&ys(t,i,n,!0),r&&r.forEach(o=>ys(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Lu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lu={data:Ni,props:Mi,emits:Mi,methods:Sn,computed:Sn,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:Sn,directives:Sn,watch:Uu,provide:Ni,inject:$u};function Ni(t,e){return e?t?function(){return he($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function $u(t,e){return Sn(Cr(t),Cr(e))}function Cr(t){if(D(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?he(Object.create(null),t,e):e}function Mi(t,e){return t?D(t)&&D(e)?[...new Set([...t,...e])]:he(Object.create(null),xi(t),xi(e??{})):e}function Uu(t,e){if(!t)return e;if(!e)return t;const n=he(Object.create(null),t);for(const s in e)n[s]=ge(t[s],e[s]);return n}function ka(){return{app:null,config:{isNativeTag:qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fu=0;function Bu(t,e){return function(s,r=null){$(s)||(s=he({},s)),r!=null&&!X(r)&&(r=null);const i=ka(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Fu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:yf,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&$(f.install)?(o.add(f),f.install(l,...h)):$(f)&&(o.add(f),f(l,...h))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,h){return h?(i.components[f]=h,l):i.components[f]},directive(f,h){return h?(i.directives[f]=h,l):i.directives[f]},mount(f,h,_){if(!c){const w=l._ceVNode||dt(s,r);return w.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),t(w,f,_),c=!0,l._container=f,f.__vue_app__=l,Ks(w.component)}},onUnmount(f){a.push(f)},unmount(){c&&(Ne(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,h){return i.provides[f]=h,l},runWithContext(f){const h=Ht;Ht=l;try{return f()}finally{Ht=h}}};return l}}let Ht=null;const Hu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xe(e)}Modifiers`]||t[`${zt(e)}Modifiers`];function Vu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Q;let r=n;const i=e.startsWith("update:"),o=i&&Hu(s,e.slice(7));o&&(o.trim&&(r=n.map(f=>ie(f)?f.trim():f)),o.number&&(r=n.map($s)));let a,c=s[a=Zs(e)]||s[a=Zs(xe(e))];!c&&i&&(c=s[a=Zs(zt(e))]),c&&Ne(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ne(l,t,6,r)}}const ju=new WeakMap;function xa(t,e,n=!1){const s=n?ju:e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!$(t)){const c=l=>{const f=xa(l,e,!0);f&&(a=!0,he(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(X(t)&&s.set(t,null),null):(D(i)?i.forEach(c=>o[c]=null):he(o,i),X(t)&&s.set(t,o),o)}function Ws(t,e){return!t||!xs(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,zt(e))||q(t,e))}function Li(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:f,props:h,data:_,setupState:w,ctx:O,inheritAttrs:A}=t,M=ms(t);let C,U;try{if(n.shapeFlag&4){const P=r||s,B=P;C=qe(l.call(B,P,f,h,w,_,O)),U=a}else{const P=e;C=qe(P.length>1?P(h,{attrs:a,slots:o,emit:c}):P(h,null)),U=e.props?a:Wu(a)}}catch(P){xn.length=0,Hs(P,t,1),C=dt(kt)}let L=C;if(U&&A!==!1){const P=Object.keys(U),{shapeFlag:B}=L;P.length&&B&7&&(i&&P.some(Ds)&&(U=qu(U,i)),L=dn(L,U,!1,!0))}return n.dirs&&(L=dn(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&Zr(L,n.transition),C=L,ms(M),C}const Wu=t=>{let e;for(const n in t)(n==="class"||n==="style"||xs(n))&&((e||(e={}))[n]=t[n]);return e},qu=(t,e)=>{const n={};for(const s in t)(!Ds(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ku(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?$i(s,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const _=f[h];if(Da(o,s,_)&&!Ws(l,_))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?$i(s,o,l):!0:!!o;return!1}function $i(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(Da(e,t,i)&&!Ws(n,i))return!0}return!1}function Da(t,e,n){const s=t[n],r=e[n];return n==="style"&&X(s)&&X(r)?!Wn(s,r):s!==r}function zu({vnode:t,parent:e,suspense:n},s){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=s,t=r),r===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Na={},Ma=()=>Object.create(Na),La=t=>Object.getPrototypeOf(t)===Na;function Gu(t,e,n,s=!1){const r={},i=Ma();t.propsDefaults=Object.create(null),$a(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Xl(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Ju(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=W(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let _=f[h];if(Ws(t.emitsOptions,_))continue;const w=e[_];if(c)if(q(i,_))w!==i[_]&&(i[_]=w,l=!0);else{const O=xe(_);r[O]=Pr(c,a,O,w,t,!1)}else w!==i[_]&&(i[_]=w,l=!0)}}}else{$a(t,e,r,i)&&(l=!0);let f;for(const h in a)(!e||!q(e,h)&&((f=zt(h))===h||!q(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Pr(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!q(e,h))&&(delete i[h],l=!0)}l&&at(t.attrs,"set","")}function $a(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Tn(c))continue;const l=e[c];let f;r&&q(r,f=xe(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Ws(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=W(n),l=a||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Pr(r,c,h,l[h],t,!q(l,h))}}return o}function Pr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const f=zn(r);s=l[n]=c.call(null,e),f()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===zt(n))&&(s=!0))}return s}const Yu=new WeakMap;function Ua(t,e,n=!1){const s=n?Yu:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const f=h=>{c=!0;const[_,w]=Ua(h,e,!0);he(o,_),w&&a.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return X(t)&&s.set(t,nn),nn;if(D(i))for(let f=0;f<i.length;f++){const h=xe(i[f]);Ui(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=xe(f);if(Ui(h)){const _=i[f],w=o[h]=D(_)||$(_)?{type:_}:he({},_),O=w.type;let A=!1,M=!0;if(D(O))for(let C=0;C<O.length;++C){const U=O[C],L=$(U)&&U.name;if(L==="Boolean"){A=!0;break}else L==="String"&&(M=!1)}else A=$(O)&&O.name==="Boolean";w[0]=A,w[1]=M,(A||q(w,"default"))&&a.push(h)}}const l=[o,a];return X(t)&&s.set(t,l),l}function Ui(t){return t[0]!=="$"&&!Tn(t)}const ei=t=>t==="_"||t==="_ctx"||t==="$stable",ti=t=>D(t)?t.map(qe):[qe(t)],Qu=(t,e,n)=>{if(e._n)return e;const s=du((...r)=>ti(e(...r)),n);return s._c=!1,s},Fa=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ei(r))continue;const i=t[r];if($(i))e[r]=Qu(r,i,s);else if(i!=null){const o=ti(i);e[r]=()=>o}}},Ba=(t,e)=>{const n=ti(e);t.slots.default=()=>n},Ha=(t,e,n)=>{for(const s in e)(n||!ei(s))&&(t[s]=e[s])},Xu=(t,e,n)=>{const s=t.slots=Ma();if(t.vnode.shapeFlag&32){const r=e._;r?(Ha(s,e,n),n&&Yo(s,"_",r,!0)):Fa(e,s)}else e&&Ba(t,e)},Zu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Q;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ha(r,e,n):(i=!e.$stable,Fa(e,r)),o=e}else e&&(Ba(t,e),o={default:1});if(i)for(const a in r)!ei(a)&&o[a]==null&&delete r[a]},we=rf;function ef(t){return tf(t)}function tf(t,e){const n=Us();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:_,setScopeId:w=ze,insertStaticContent:O}=t,A=(u,d,p,g=null,m=null,y=null,E=void 0,S=null,I=!!d.dynamicChildren)=>{if(u===d)return;u&&!wn(u,d)&&(g=Yt(u),Ae(u,m,y,!0),u=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:k,shapeFlag:T}=d;switch(b){case qs:M(u,d,p,g);break;case kt:C(u,d,p,g);break;case ar:u==null&&U(d,p,g,E);break;case it:Te(u,d,p,g,m,y,E,S,I);break;default:T&1?B(u,d,p,g,m,y,E,S,I):T&6?Me(u,d,p,g,m,y,E,S,I):(T&64||T&128)&&b.process(u,d,p,g,m,y,E,S,I,bt)}k!=null&&m?Rn(k,u&&u.ref,y,d||u,!d):k==null&&u&&u.ref!=null&&Rn(u.ref,null,y,u,!0)},M=(u,d,p,g)=>{if(u==null)s(d.el=a(d.children),p,g);else{const m=d.el=u.el;d.children!==u.children&&l(m,d.children)}},C=(u,d,p,g)=>{u==null?s(d.el=c(d.children||""),p,g):d.el=u.el},U=(u,d,p,g)=>{[u.el,u.anchor]=O(u.children,d,p,g,u.el,u.anchor)},L=({el:u,anchor:d},p,g)=>{let m;for(;u&&u!==d;)m=_(u),s(u,p,g),u=m;s(d,p,g)},P=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=_(u),r(u),u=p;r(d)},B=(u,d,p,g,m,y,E,S,I)=>{if(d.type==="svg"?E="svg":d.type==="math"&&(E="mathml"),u==null)pe(d,p,g,m,y,E,S,I);else{const b=u.el&&u.el._isVueCE?u.el:null;try{b&&b._beginPatch(),V(u,d,m,y,E,S,I)}finally{b&&b._endPatch()}}},pe=(u,d,p,g,m,y,E,S)=>{let I,b;const{props:k,shapeFlag:T,transition:R,dirs:N}=u;if(I=u.el=o(u.type,y,k&&k.is,k),T&8?f(I,u.children):T&16&&H(u.children,I,null,g,m,or(u,y),E,S),N&&Dt(u,null,g,"created"),le(I,u,u.scopeId,E,g),k){for(const J in k)J!=="value"&&!Tn(J)&&i(I,J,null,k[J],y,g);"value"in k&&i(I,"value",null,k.value,y),(b=k.onVnodeBeforeMount)&&Ve(b,g,u)}N&&Dt(u,null,g,"beforeMount");const j=nf(m,R);j&&R.beforeEnter(I),s(I,d,p),((b=k&&k.onVnodeMounted)||j||N)&&we(()=>{try{b&&Ve(b,g,u),j&&R.enter(I),N&&Dt(u,null,g,"mounted")}finally{}},m)},le=(u,d,p,g,m)=>{if(p&&w(u,p),g)for(let y=0;y<g.length;y++)w(u,g[y]);if(m){let y=m.subTree;if(d===y||qa(y.type)&&(y.ssContent===d||y.ssFallback===d)){const E=m.vnode;le(u,E,E.scopeId,E.slotScopeIds,m.parent)}}},H=(u,d,p,g,m,y,E,S,I=0)=>{for(let b=I;b<u.length;b++){const k=u[b]=S?ot(u[b]):qe(u[b]);A(null,k,d,p,g,m,y,E,S)}},V=(u,d,p,g,m,y,E)=>{const S=d.el=u.el;let{patchFlag:I,dynamicChildren:b,dirs:k}=d;I|=u.patchFlag&16;const T=u.props||Q,R=d.props||Q;let N;if(p&&Nt(p,!1),(N=R.onVnodeBeforeUpdate)&&Ve(N,p,d,u),k&&Dt(d,u,p,"beforeUpdate"),p&&Nt(p,!0),b&&(!u.dynamicChildren||u.dynamicChildren.length!==b.length)&&(I=0,E=!1,b=null),(T.innerHTML&&R.innerHTML==null||T.textContent&&R.textContent==null)&&f(S,""),b?ne(u.dynamicChildren,b,S,p,g,or(d,m),y):E||z(u,d,S,null,p,g,or(d,m),y,!1),I>0){if(I&16)ve(S,T,R,p,m);else if(I&2&&T.class!==R.class&&i(S,"class",null,R.class,m),I&4&&i(S,"style",T.style,R.style,m),I&8){const j=d.dynamicProps;for(let J=0;J<j.length;J++){const G=j[J],oe=T[G],ue=R[G];(ue!==oe||G==="value")&&i(S,G,oe,ue,m,p)}}I&1&&u.children!==d.children&&f(S,d.children)}else!E&&b==null&&ve(S,T,R,p,m);((N=R.onVnodeUpdated)||k)&&we(()=>{N&&Ve(N,p,d,u),k&&Dt(d,u,p,"updated")},g)},ne=(u,d,p,g,m,y,E)=>{for(let S=0;S<d.length;S++){const I=u[S],b=d[S],k=I.el&&(I.type===it||!wn(I,b)||I.shapeFlag&198)?h(I.el):p;A(I,b,k,null,g,m,y,E,!0)}},ve=(u,d,p,g,m)=>{if(d!==p){if(d!==Q)for(const y in d)!Tn(y)&&!(y in p)&&i(u,y,d[y],null,m,g);for(const y in p){if(Tn(y))continue;const E=p[y],S=d[y];E!==S&&y!=="value"&&i(u,y,S,E,m,g)}"value"in p&&i(u,"value",d.value,p.value,m)}},Te=(u,d,p,g,m,y,E,S,I)=>{const b=d.el=u?u.el:a(""),k=d.anchor=u?u.anchor:a("");let{patchFlag:T,dynamicChildren:R,slotScopeIds:N}=d;N&&(S=S?S.concat(N):N),u==null?(s(b,p,g),s(k,p,g),H(d.children||[],p,k,m,y,E,S,I)):T>0&&T&64&&R&&u.dynamicChildren&&u.dynamicChildren.length===R.length?(ne(u.dynamicChildren,R,p,m,y,E,S),(d.key!=null||m&&d===m.subTree)&&Va(u,d,!0)):z(u,d,p,k,m,y,E,S,I)},Me=(u,d,p,g,m,y,E,S,I)=>{d.slotScopeIds=S,u==null?d.shapeFlag&512?m.ctx.activate(d,p,g,E,I):nt(d,p,g,m,y,E,I):Jt(u,d,I)},nt=(u,d,p,g,m,y,E)=>{const S=u.component=df(u,g,m);if(Ta(u)&&(S.ctx.renderer=bt),hf(S,!1,E),S.asyncDep){if(m&&m.registerDep(S,te,E),!u.el){const I=S.subTree=dt(kt);C(null,I,d,p),u.placeholder=I.el}}else te(S,u,d,p,m,y,E)},Jt=(u,d,p)=>{const g=d.component=u.component;if(Ku(u,d,p))if(g.asyncDep&&!g.asyncResolved){F(g,d,p);return}else g.next=d,g.update();else d.el=u.el,g.vnode=d},te=(u,d,p,g,m,y,E)=>{const S=()=>{if(u.isMounted){let{next:T,bu:R,u:N,parent:j,vnode:J}=u;{const Be=ja(u);if(Be){T&&(T.el=J.el,F(u,T,E)),Be.asyncDep.then(()=>{we(()=>{u.isUnmounted||b()},m)});return}}let G=T,oe;Nt(u,!1),T?(T.el=J.el,F(u,T,E)):T=J,R&&as(R),(oe=T.props&&T.props.onVnodeBeforeUpdate)&&Ve(oe,j,T,J),Nt(u,!0);const ue=Li(u),Fe=u.subTree;u.subTree=ue,A(Fe,ue,h(Fe.el),Yt(Fe),u,m,y),T.el=ue.el,G===null&&zu(u,ue.el),N&&we(N,m),(oe=T.props&&T.props.onVnodeUpdated)&&we(()=>Ve(oe,j,T,J),m)}else{let T;const{el:R,props:N}=d,{bm:j,m:J,parent:G,root:oe,type:ue}=u,Fe=On(d);Nt(u,!1),j&&as(j),!Fe&&(T=N&&N.onVnodeBeforeMount)&&Ve(T,G,d),Nt(u,!0);{oe.ce&&oe.ce._hasShadowRoot()&&oe.ce._injectChildStyle(ue,u.parent?u.parent.type:void 0);const Be=u.subTree=Li(u);A(null,Be,p,g,u,m,y),d.el=Be.el}if(J&&we(J,m),!Fe&&(T=N&&N.onVnodeMounted)){const Be=d;we(()=>Ve(T,G,Be),m)}(d.shapeFlag&256||G&&On(G.vnode)&&G.vnode.shapeFlag&256)&&u.a&&we(u.a,m),u.isMounted=!0,d=p=g=null}};u.scope.on();const I=u.effect=new sa(S);u.scope.off();const b=u.update=I.run.bind(I),k=u.job=I.runIfDirty.bind(I);k.i=u,k.id=u.uid,I.scheduler=()=>Qr(k),Nt(u,!0),b()},F=(u,d,p)=>{d.component=u;const g=u.vnode.props;u.vnode=d,u.next=null,Ju(u,d.props,g,p),Zu(u,d.children,p),Qe(),Ri(u),Xe()},z=(u,d,p,g,m,y,E,S,I=!1)=>{const b=u&&u.children,k=u?u.shapeFlag:0,T=d.children,{patchFlag:R,shapeFlag:N}=d;if(R>0){if(R&128){$e(b,T,p,g,m,y,E,S,I);return}else if(R&256){Le(b,T,p,g,m,y,E,S,I);return}}N&8?(k&16&&xt(b,m,y),T!==b&&f(p,T)):k&16?N&16?$e(b,T,p,g,m,y,E,S,I):xt(b,m,y,!0):(k&8&&f(p,""),N&16&&H(T,p,g,m,y,E,S,I))},Le=(u,d,p,g,m,y,E,S,I)=>{u=u||nn,d=d||nn;const b=u.length,k=d.length,T=Math.min(b,k);let R;for(R=0;R<T;R++){const N=d[R]=I?ot(d[R]):qe(d[R]);A(u[R],N,p,null,m,y,E,S,I)}b>k?xt(u,m,y,!0,!1,T):H(d,p,g,m,y,E,S,I,T)},$e=(u,d,p,g,m,y,E,S,I)=>{let b=0;const k=d.length;let T=u.length-1,R=k-1;for(;b<=T&&b<=R;){const N=u[b],j=d[b]=I?ot(d[b]):qe(d[b]);if(wn(N,j))A(N,j,p,null,m,y,E,S,I);else break;b++}for(;b<=T&&b<=R;){const N=u[T],j=d[R]=I?ot(d[R]):qe(d[R]);if(wn(N,j))A(N,j,p,null,m,y,E,S,I);else break;T--,R--}if(b>T){if(b<=R){const N=R+1,j=N<k?d[N].el:g;for(;b<=R;)A(null,d[b]=I?ot(d[b]):qe(d[b]),p,j,m,y,E,S,I),b++}}else if(b>R)for(;b<=T;)Ae(u[b],m,y,!0),b++;else{const N=b,j=b,J=new Map;for(b=j;b<=R;b++){const Ie=d[b]=I?ot(d[b]):qe(d[b]);Ie.key!=null&&J.set(Ie.key,b)}let G,oe=0;const ue=R-j+1;let Fe=!1,Be=0;const bn=new Array(ue);for(b=0;b<ue;b++)bn[b]=0;for(b=N;b<=T;b++){const Ie=u[b];if(oe>=ue){Ae(Ie,m,y,!0);continue}let He;if(Ie.key!=null)He=J.get(Ie.key);else for(G=j;G<=R;G++)if(bn[G-j]===0&&wn(Ie,d[G])){He=G;break}He===void 0?Ae(Ie,m,y,!0):(bn[He-j]=b+1,He>=Be?Be=He:Fe=!0,A(Ie,d[He],p,null,m,y,E,S,I),oe++)}const Ii=Fe?sf(bn):nn;for(G=Ii.length-1,b=ue-1;b>=0;b--){const Ie=j+b,He=d[Ie],Si=d[Ie+1],Ei=Ie+1<k?Si.el||Wa(Si):g;bn[b]===0?A(null,He,p,Ei,m,y,E,S,I):Fe&&(G<0||b!==Ii[G]?Ue(He,p,Ei,2):G--)}}},Ue=(u,d,p,g,m=null)=>{const{el:y,type:E,transition:S,children:I,shapeFlag:b}=u;if(b&6){Ue(u.component.subTree,d,p,g);return}if(b&128){u.suspense.move(d,p,g);return}if(b&64){E.move(u,d,p,bt);return}if(E===it){s(y,d,p);for(let T=0;T<I.length;T++)Ue(I[T],d,p,g);s(u.anchor,d,p);return}if(E===ar){L(u,d,p);return}if(g!==2&&b&1&&S)if(g===0)S.persisted&&!y[rr]?s(y,d,p):(S.beforeEnter(y),s(y,d,p),we(()=>S.enter(y),m));else{const{leave:T,delayLeave:R,afterLeave:N}=S,j=()=>{u.ctx.isUnmounted?r(y):s(y,d,p)},J=()=>{const G=y._isLeaving||!!y[rr];y._isLeaving&&y[rr](!0),S.persisted&&!G?j():T(y,()=>{j(),N&&N()})};R?R(y,j,J):J()}else s(y,d,p)},Ae=(u,d,p,g=!1,m=!1)=>{const{type:y,props:E,ref:S,children:I,dynamicChildren:b,shapeFlag:k,patchFlag:T,dirs:R,cacheIndex:N,memo:j}=u;if(T===-2&&(m=!1),S!=null&&(Qe(),Rn(S,null,p,u,!0),Xe()),N!=null&&(d.renderCache[N]=void 0),k&256){d.ctx.deactivate(u);return}const J=k&1&&R,G=!On(u);let oe;if(G&&(oe=E&&E.onVnodeBeforeUnmount)&&Ve(oe,d,u),k&6)Xs(u.component,p,g);else{if(k&128){u.suspense.unmount(p,g);return}J&&Dt(u,null,d,"beforeUnmount"),k&64?u.type.remove(u,d,p,bt,g):b&&!b.hasOnce&&(y!==it||T>0&&T&64)?xt(b,d,p,!1,!0):(y===it&&T&384||!m&&k&16)&&xt(I,d,p),g&&es(u)}const ue=j!=null&&N==null;(G&&(oe=E&&E.onVnodeUnmounted)||J||ue)&&we(()=>{oe&&Ve(oe,d,u),J&&Dt(u,null,d,"unmounted"),ue&&(u.el=null)},p)},es=u=>{const{type:d,el:p,anchor:g,transition:m}=u;if(d===it){_n(p,g);return}if(d===ar){P(u);return}const y=()=>{r(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:E,delayLeave:S}=m,I=()=>E(p,y);S?S(u.el,y,I):I()}else y()},_n=(u,d)=>{let p;for(;u!==d;)p=_(u),r(u),u=p;r(d)},Xs=(u,d,p)=>{const{bum:g,scope:m,job:y,subTree:E,um:S,m:I,a:b}=u;Fi(I),Fi(b),g&&as(g),m.stop(),y&&(y.flags|=8,Ae(E,u,d,p)),S&&we(S,d),we(()=>{u.isUnmounted=!0},d)},xt=(u,d,p,g=!1,m=!1,y=0)=>{for(let E=y;E<u.length;E++)Ae(u[E],d,p,g,m)},Yt=u=>{if(u.shapeFlag&6)return Yt(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=_(u.anchor||u.el),p=d&&d[bu];return p?_(p):d};let yn=!1;const ts=(u,d,p)=>{let g;u==null?d._vnode&&(Ae(d._vnode,null,null,!0),g=d._vnode.component):A(d._vnode||null,u,d,null,null,null,p),d._vnode=u,yn||(yn=!0,Ri(g),va(),yn=!1)},bt={p:A,um:Ae,m:Ue,r:es,mt:nt,mc:H,pc:z,pbc:ne,n:Yt,o:t};return{render:ts,hydrate:void 0,createApp:Bu(ts)}}function or({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function nf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Va(t,e,n=!1){const s=t.children,r=e.children;if(D(s)&&D(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ot(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Va(o,a)),a.type===qs&&(a.patchFlag===-1&&(a=r[i]=ot(a)),a.el=o.el),a.type===kt&&!a.el&&(a.el=o.el)}}function sf(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ja(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ja(e)}function Fi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Wa(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Wa(e.subTree):null}const qa=t=>t.__isSuspense;function rf(t,e){e&&e.pendingBranch?D(t)?e.effects.push(...t):e.effects.push(t):fu(t)}const it=Symbol.for("v-fgt"),qs=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),ar=Symbol.for("v-stc"),xn=[];let Se=null;function fe(t=!1){xn.push(Se=t?null:[])}function of(){xn.pop(),Se=xn[xn.length-1]||null}let Fn=1;function Bi(t,e=!1){Fn+=t,t<0&&Se&&e&&(Se.hasOnce=!0)}function Ka(t){return t.dynamicChildren=Fn>0?Se||nn:null,of(),Fn>0&&Se&&Se.push(t),t}function Oe(t,e,n,s,r,i){return Ka(v(t,e,n,s,r,i,!0))}function en(t,e,n,s,r){return Ka(dt(t,e,n,s,r,!0))}function za(t){return t?t.__v_isVNode===!0:!1}function wn(t,e){return t.type===e.type&&t.key===e.key}const Ga=({key:t})=>t??null,cs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ie(t)||se(t)||$(t)?{i:Ce,r:t,k:e,f:!!n}:t:null);function v(t,e=null,n=null,s=0,r=null,i=t===it?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ga(e),ref:e&&cs(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ce};return a?(bs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ie(n)?8:16),Fn>0&&!o&&Se&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Se.push(c),c}const dt=af;function af(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===xu)&&(t=kt),za(t)){const a=dn(t,e,!0);return n&&bs(a,n),Fn>0&&!i&&Se&&(a.shapeFlag&6?Se[Se.indexOf(t)]=a:Se.push(a)),a.patchFlag=-2,a}if(_f(t)&&(t=t.__vccOpts),e){e=cf(e);let{class:a,style:c}=e;a&&!ie(a)&&(e.class=fn(a)),X(c)&&(Bs(c)&&!D(c)&&(c=he({},c)),e.style=Fs(c))}const o=ie(t)?1:qa(t)?128:vu(t)?64:X(t)?4:$(t)?2:0;return v(t,e,n,s,r,o,i,!0)}function cf(t){return t?Bs(t)||La(t)?he({},t):t:null}function dn(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?lf(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ga(l),ref:e&&e.ref?n&&i?D(i)?i.concat(cs(e)):[i,cs(e)]:cs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dn(t.ssContent),ssFallback:t.ssFallback&&dn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Zr(f,c.clone(f)),f}function Ja(t=" ",e=0){return dt(qs,null,t,e)}function hn(t="",e=!1){return e?(fe(),en(kt,null,t)):dt(kt,null,t)}function qe(t){return t==null||typeof t=="boolean"?dt(kt):D(t)?dt(it,null,t.slice()):za(t)?ot(t):dt(qs,null,String(t))}function ot(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dn(t)}function bs(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(D(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bs(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!La(e)?e._ctx=Ce:r===3&&Ce&&(Ce.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if($(e)){if(s&65){bs(t,{default:e});return}e={default:e,_ctx:Ce},n=32}else e=String(e),s&64?(n=16,e=[Ja(e)]):n=8;t.children=e,t.shapeFlag|=n}function lf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=fn([e.class,s.class]));else if(r==="style")e.style=Fs([e.style,s.style]);else if(xs(r)){const i=e[r],o=s[r];o&&i!==o&&!(D(i)&&i.includes(o))?e[r]=i?[].concat(i,o):o:o==null&&i==null&&!Ds(r)&&(e[r]=o)}else r!==""&&(e[r]=s[r])}return e}function Ve(t,e,n,s=null){Ne(t,e,7,[n,s])}const uf=ka();let ff=0;function df(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||uf,i={uid:ff++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ea(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ua(s,r),emitsOptions:xa(s,r),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vu.bind(null,i),t.ce&&t.ce(i),i}let _e=null;const Ya=()=>_e||Ce;let vs,Rr;{const t=Us(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};vs=e("__VUE_INSTANCE_SETTERS__",n=>_e=n),Rr=e("__VUE_SSR_SETTERS__",n=>Bn=n)}const zn=t=>{const e=_e;return vs(t),t.scope.on(),()=>{t.scope.off(),vs(e)}},Hi=()=>{_e&&_e.scope.off(),vs(null)};function Qa(t){return t.vnode.shapeFlag&4}let Bn=!1;function hf(t,e=!1,n=!1){e&&Rr(e);const{props:s,children:r}=t.vnode,i=Qa(t);Gu(t,s,i,e),Xu(t,r,n||e);const o=i?pf(t,e):void 0;return e&&Rr(!1),o}function pf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Du);const{setup:s}=n;if(s){Qe();const r=t.setupContext=s.length>1?mf(t):null,i=zn(t),o=Kn(s,t,0,[t.props,r]),a=Ko(o);if(Xe(),i(),(a||t.sp)&&!On(t)&&Ea(t),a){if(o.then(Hi,Hi),e)return o.then(c=>{Vi(t,c)}).catch(c=>{Hs(c,t,0)});t.asyncDep=o}else Vi(t,o)}else Xa(t)}function Vi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:X(e)&&(t.setupState=_a(e)),Xa(t)}function Xa(t,e,n){const s=t.type;t.render||(t.render=s.render||ze);{const r=zn(t);Qe();try{Nu(t)}finally{Xe(),r()}}}const gf={get(t,e){return de(t,"get",""),t[e]}};function mf(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,gf),slots:t.slots,emit:t.emit,expose:e}}function Ks(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_a(Yr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in kn)return kn[n](t)},has(e,n){return n in e||n in kn}})):t.proxy}function _f(t){return $(t)&&"__vccOpts"in t}const re=(t,e)=>ou(t,e,Bn),yf="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Or;const ji=typeof window<"u"&&window.trustedTypes;if(ji)try{Or=ji.createPolicy("vue",{createHTML:t=>t})}catch{}const Za=Or?t=>Or.createHTML(t):t=>t,bf="http://www.w3.org/2000/svg",vf="http://www.w3.org/1998/Math/MathML",rt=typeof document<"u"?document:null,Wi=rt&&rt.createElement("template"),wf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?rt.createElementNS(bf,t):e==="mathml"?rt.createElementNS(vf,t):n?rt.createElement(t,{is:n}):rt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>rt.createTextNode(t),createComment:t=>rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Wi.innerHTML=Za(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Wi.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},If=Symbol("_vtc");function Sf(t,e,n){const s=t[If];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qi=Symbol("_vod"),Ef=Symbol("_vsh"),Tf=Symbol(""),Af=/(?:^|;)\s*display\s*:/;function Cf(t,e,n){const s=t.style,r=ie(n);let i=!1;if(n&&!r){if(e)if(ie(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&En(s,a,"")}else for(const o in e)n[o]==null&&En(s,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?Rf(t,o,!ie(e)&&e?e[o]:void 0,a)||En(s,o,a):En(s,o,"")}}else if(r){if(e!==n){const o=s[Tf];o&&(n+=";"+o),s.cssText=n,i=Af.test(n)}}else e&&t.removeAttribute("style");qi in t&&(t[qi]=i?s.display:"",t[Ef]&&(s.display="none"))}const Ki=/\s*!important$/;function En(t,e,n){if(D(n))n.forEach(s=>En(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Pf(t,e);Ki.test(n)?t.setProperty(zt(s),n.replace(Ki,""),"important"):t[s]=n}}const zi=["Webkit","Moz","ms"],cr={};function Pf(t,e){const n=cr[e];if(n)return n;let s=xe(e);if(s!=="filter"&&s in t)return cr[e]=s;s=Jo(s);for(let r=0;r<zi.length;r++){const i=zi[r]+s;if(i in t)return cr[e]=i}return e}function Rf(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ie(s)&&n===s}const Gi="http://www.w3.org/1999/xlink";function Ji(t,e,n,s,r,i=Ol(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gi,e.slice(6,e.length)):t.setAttributeNS(Gi,e,n):n==null||i&&!Qo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Re(n)?String(n):n)}function Yi(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Za(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Qo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function $t(t,e,n,s){t.addEventListener(e,n,s)}function Of(t,e,n,s){t.removeEventListener(e,n,s)}const Qi=Symbol("_vei");function kf(t,e,n,s,r=null){const i=t[Qi]||(t[Qi]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Nf(e);if(s){const l=i[e]=$f(s,r);$t(t,a,l,c)}else o&&(Of(t,a,o,c),i[e]=void 0)}}const xf=/(Once|Passive|Capture)$/,Df=/^on:?(?:Once|Passive|Capture)$/;function Nf(t){let e,n;for(;(n=t.match(xf))&&!Df.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):zt(t.slice(2)),e]}let lr=0;const Mf=Promise.resolve(),Lf=()=>lr||(Mf.then(()=>lr=0),lr=Date.now());function $f(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if(D(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const o=r.slice(),a=[s];for(let c=0;c<o.length&&!s._stopped;c++){const l=o[c];l&&Ne(l,e,5,a)}}else Ne(r,e,5,[s])};return n.value=t,n.attached=Lf(),n}const Xi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Uf=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Sf(t,s,o):e==="style"?Cf(t,n,s):xs(e)?Ds(e)||kf(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ff(t,e,s,o))?(Yi(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ji(t,e,s,o,i,e!=="value")):t._isVueCE&&(Bf(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ie(s)))?Yi(t,xe(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ji(t,e,s,o))};function Ff(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xi(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xi(e)&&ie(n)?!1:e in t}function Bf(t,e){const n=t._def.props;if(!n)return!1;const s=xe(e);return Array.isArray(n)?n.some(r=>xe(r)===s):Object.keys(n).some(r=>xe(r)===s)}const ws=t=>{const e=t.props["onUpdate:modelValue"]||!1;return D(e)?n=>as(e,n):e};function Hf(t){t.target.composing=!0}function Zi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const on=Symbol("_assign");function eo(t,e,n){return e&&(t=t.trim()),n&&(t=$s(t)),t}const Vf={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[on]=ws(r);const i=s||r.props&&r.props.type==="number";$t(t,e?"change":"input",o=>{o.target.composing||t[on](eo(t.value,n,i))}),(n||i)&&$t(t,"change",()=>{t.value=eo(t.value,n,i)}),e||($t(t,"compositionstart",Hf),$t(t,"compositionend",Zi),$t(t,"change",Zi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[on]=ws(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?$s(t.value):t.value,c=e??"";if(a===c)return;const l=t.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c)}},is={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Ns(e);$t(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$s(Is(o)):Is(o));t[on](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,Vs(()=>{t._assigning=!1})}),t[on]=ws(s)},mounted(t,{value:e}){to(t,e)},beforeUpdate(t,e,n){t[on]=ws(n)},updated(t,{value:e}){t._assigning||to(t,e)}};function to(t,e){const n=t.multiple,s=D(e);if(!(n&&!s&&!Ns(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=Is(o);if(n)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=xl(e,a)>-1}else o.selected=e.has(a);else if(Wn(Is(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Is(t){return"_value"in t?t._value:t.value}const jf=["ctrl","shift","alt","meta"],Wf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jf.some(n=>t[`${n}Key`]&&!e.includes(n))},qf=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=Wf[e[o]];if(a&&a(r,e))return}return t(r,...i)})},Kf=he({patchProp:Uf},wf);let no;function zf(){return no||(no=ef(Kf))}const Gf=(...t)=>{const e=zf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Yf(s);if(!r)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Jf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Jf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Yf(t){return ie(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ec;const zs=t=>ec=t,tc=Symbol();function kr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Dn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Dn||(Dn={}));function Qf(){const t=ta(!0),e=t.run(()=>ee({}));let n=[],s=[];const r=Yr({install(i){zs(r),r._a=i,i.provide(tc,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return this._a?n.push(i):s.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const nc=()=>{};function so(t,e,n,s=nc){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&na()&&Dl(r),r}function Xt(t,...e){t.slice().forEach(n=>{n(...e)})}const Xf=t=>t(),ro=Symbol(),ur=Symbol();function xr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];kr(r)&&kr(s)&&t.hasOwnProperty(n)&&!se(s)&&!Ct(s)?t[n]=xr(r,s):t[n]=s}return t}const Zf=Symbol();function ed(t){return!kr(t)||!t.hasOwnProperty(Zf)}const{assign:wt}=Object;function td(t){return!!(se(t)&&t.effect)}function nd(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const f=nu(n.state.value[t]);return wt(f,i,Object.keys(o||{}).reduce((h,_)=>(h[_]=Yr(re(()=>{zs(n);const w=n._s.get(t);return o[_].call(w,w)})),h),{}))}return c=sc(t,l,e,n,s,!0),c}function sc(t,e,n={},s,r,i){let o;const a=wt({actions:{}},n),c={deep:!0};let l,f,h=[],_=[],w;const O=s.state.value[t];!i&&!O&&(s.state.value[t]={});let A;function M(H){let V;l=f=!1,typeof H=="function"?(H(s.state.value[t]),V={type:Dn.patchFunction,storeId:t,events:w}):(xr(s.state.value[t],H),V={type:Dn.patchObject,payload:H,storeId:t,events:w});const ne=A=Symbol();Vs().then(()=>{A===ne&&(l=!0)}),f=!0,Xt(h,V,s.state.value[t])}const C=i?function(){const{state:V}=n,ne=V?V():{};this.$patch(ve=>{wt(ve,ne)})}:nc;function U(){o.stop(),h=[],_=[],s._s.delete(t)}const L=(H,V="")=>{if(ro in H)return H[ur]=V,H;const ne=function(){zs(s);const ve=Array.from(arguments),Te=[],Me=[];function nt(F){Te.push(F)}function Jt(F){Me.push(F)}Xt(_,{args:ve,name:ne[ur],store:B,after:nt,onError:Jt});let te;try{te=H.apply(this&&this.$id===t?this:B,ve)}catch(F){throw Xt(Me,F),F}return te instanceof Promise?te.then(F=>(Xt(Te,F),F)).catch(F=>(Xt(Me,F),Promise.reject(F))):(Xt(Te,te),te)};return ne[ro]=!0,ne[ur]=V,ne},P={_p:s,$id:t,$onAction:so.bind(null,_),$patch:M,$reset:C,$subscribe(H,V={}){const ne=so(h,H,V.detached,()=>ve()),ve=o.run(()=>Bt(()=>s.state.value[t],Te=>{(V.flush==="sync"?f:l)&&H({storeId:t,type:Dn.direct,events:w},Te)},wt({},c,V)));return ne},$dispose:U},B=qn(P);s._s.set(t,B);const le=(s._a&&s._a.runWithContext||Xf)(()=>s._e.run(()=>(o=ta()).run(()=>e({action:L}))));for(const H in le){const V=le[H];if(se(V)&&!td(V)||Ct(V))i||(O&&ed(V)&&(se(V)?V.value=O[H]:xr(V,O[H])),s.state.value[t][H]=V);else if(typeof V=="function"){const ne=L(V,H);le[H]=ne,a.actions[H]=V}}return wt(B,le),wt(W(B),le),Object.defineProperty(B,"$state",{get:()=>s.state.value[t],set:H=>{M(V=>{wt(V,H)})}}),s._p.forEach(H=>{wt(B,o.run(()=>H({store:B,app:s._a,pinia:s,options:a})))}),O&&i&&n.hydrate&&n.hydrate(B.$state,O),l=!0,f=!0,B}/*! #__NO_SIDE_EFFECTS__ */function sd(t,e,n){let s,r;const i=typeof e=="function";s=t,r=i?n:e;function o(a,c){const l=pu();return a=a||(l?Pn(tc,null):null),a&&zs(a),a=ec,a._s.has(s)||(i?sc(s,e,r,a):nd(s,r,a)),a._s.get(s)}return o.$id=s,o}const rd=["id","letra","tipo","informacionGeneral","respuesta"],id=["preguntas","questions","data","items"];async function od(t){let e;try{e=await fetch(t,{cache:"no-cache"})}catch{throw new Error(`No se pudo conectar con el archivo de preguntas (${t}). Verificá que el proyecto se esté ejecutando con "npm run dev".`)}if(!e.ok)throw new Error(`El archivo de preguntas respondió con estado ${e.status} (${t}).`);let n;try{n=await e.json()}catch{throw new Error("El archivo de preguntas no contiene JSON válido.")}const{questions:s,meta:r}=ad(n);return cd(s),{questions:s,meta:r}}function ad(t){if(Array.isArray(t))return{questions:t,meta:{}};if(t&&typeof t=="object"){const n=id.find(i=>Array.isArray(t[i]));if(n){const{[n]:i,...o}=t;return{questions:i,meta:o}}const s=Object.values(t);if(s.length>0&&s.every(i=>i&&typeof i=="object"&&!Array.isArray(i)))return{questions:s,meta:{}}}const e=Array.isArray(t)?"array vacío":t&&typeof t=="object"?`objeto con claves: ${Object.keys(t).join(", ")||"(ninguna)"}`:typeof t;throw new Error(`No reconozco la forma del JSON de preguntas (recibido: ${e}). Soporto un array [...], un objeto envoltorio como { "preguntas": [...] }, o un mapa por id como { "1": {...}, "2": {...} }.`)}function cd(t){if(!Array.isArray(t)||t.length===0)throw new Error("El JSON de preguntas debe ser un array con al menos un elemento.");t.forEach((e,n)=>{if(rd.forEach(s=>{if(!(s in e))throw new Error(`La pregunta en la posición ${n} (id: ${e.id??"??"}) no tiene el campo requerido "${s}".`)}),!e.informacionGeneral.enunciado||!e.informacionGeneral.pregunta)throw new Error(`La pregunta con id ${e.id} no tiene "enunciado" o "pregunta" en informacionGeneral.`);if(!e.respuesta.texto)throw new Error(`La pregunta con id ${e.id} no tiene "respuesta.texto".`)})}function io(t){const e=[...t];for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}function oo(t){return typeof t!="string"?"":t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[-_]/g," ").replace(/[^\w\s]|_/g,"").replace(/\s+/g," ").trim()}function ld(t,e){return oo(t)===oo(e)}const ud="/data/preguntas.json",ao={timePerQuestion:10,order:"normal",autoShowAnswer:!1,sound:!0},fd=2e3,Gn=sd("game",()=>{const t=ee([]),e=ee([]),n=ee(0),s=ee({...ao}),r=ee(0),i=ee(0),o=ee(0),a=ee(0),c=ee(0),l=ee(0),f=ee(!1),h=ee(!1),_=ee(null),w=ee(null),O=ee(null),A=ee(!0),M=ee({}),C=ee(0),U=ee(ao.timePerQuestion);let L=null,P=null;const B=re(()=>e.value[n.value]??null),pe=re(()=>e.value.length),le=re(()=>n.value===0),H=re(()=>n.value===pe.value-1),V=re(()=>a.value+c.value+l.value),ne=re(()=>e.value.filter(g=>g.status==="pending").length),ve=re(()=>V.value===0?0:Math.round(a.value/V.value*100)),Te=re(()=>{if(!_.value)return 0;const g=w.value??Date.now();return Math.round((g-_.value)/1e3)});async function Me(){A.value=!0,O.value=null;try{const{questions:g,meta:m}=await od(ud);t.value=g,e.value=nt(g),M.value=m}catch(g){O.value=g.message}finally{A.value=!1}}function nt(g){return g.map(m=>({...m,status:"pending",userAnswer:""}))}function Jt(g){s.value={...s.value,...g}}function te(){const g=s.value.order==="random"?io(t.value):t.value;e.value=nt(g),n.value=0,Le(),h.value=!1,f.value=!1,_.value=Date.now(),w.value=null,$e()}function F(){_n(),e.value=nt(e.value),n.value=0,Le(),h.value=!1,f.value=!1,_.value=Date.now(),w.value=null,$e()}function z(){e.value=io(e.value),n.value=0,!h.value&&_.value&&$e()}function Le(){r.value=0,i.value=0,o.value=0,a.value=0,c.value=0,l.value=0}function $e(){_n();const g=B.value;if(!g||g.status!=="pending"){C.value=0;return}U.value=s.value.timePerQuestion,C.value=s.value.timePerQuestion,L=setInterval(Ue,1e3)}function Ue(){C.value-=1,C.value<=0&&(clearInterval(L),L=null,xt())}function Ae(){L&&(clearInterval(L),L=null),f.value=!0}function es(){f.value=!1;const g=B.value;g&&g.status==="pending"&&C.value>0&&!L&&(L=setInterval(Ue,1e3))}function _n(){L&&(clearInterval(L),L=null),P&&(clearTimeout(P),P=null)}function Xs(g){const m=B.value;if(!m||m.status!=="pending")return;L&&(clearInterval(L),L=null);const y=ld(g,m.respuesta.texto);m.userAnswer=g,m.status=y?"correct":"incorrect",y?Yt():yn(),bt()}function xt(){const g=B.value;!g||g.status!=="pending"||(g.status="timeout",ts(),bt())}function Yt(){i.value+=1,r.value+=i.value*10,a.value+=1,o.value=Math.max(o.value,i.value)}function yn(){i.value=0,c.value+=1}function ts(){i.value=0,l.value+=1}function bt(){P=setTimeout(()=>{H.value?wi():u()},fd)}function wi(){_n(),h.value=!0,w.value=Date.now()}function u(){n.value<pe.value-1&&(n.value+=1,$e())}function d(){n.value>0&&(n.value-=1,$e())}function p(){var g,m;return((m=(g=B.value)==null?void 0:g.respuesta)==null?void 0:m.texto)??""}return{questions:e,currentIndex:n,settings:s,score:r,currentStreak:i,maxStreak:o,correctCount:a,incorrectCount:c,timeoutCount:l,isPaused:f,isFinished:h,loadError:O,isLoading:A,meta:M,secondsLeft:C,totalSeconds:U,currentQuestion:B,total:pe,isFirst:le,isLast:H,answeredCount:V,unansweredCount:ne,accuracy:ve,totalTimeSeconds:Te,init:Me,updateSettings:Jt,startGame:te,restartGame:F,shuffleQuestions:z,pauseGame:Ae,resumeGame:es,submitAnswer:Xs,goNext:u,goPrev:d,revealCurrentAnswer:p}}),dd={class:"screen"},hd={class:"start-card"},pd={key:0,class:"start-subtitle"},gd={class:"start-actions"},md=["disabled"],_d=["disabled"],yd={key:1,class:"start-error"},bd={__name:"StartScreen",emits:["play","open-settings"],setup(t,{emit:e}){const n=e,s=Gn(),r=re(()=>s.questions.length),i=re(()=>s.isLoading?"Cargando preguntas…":s.loadError?null:`${r.value} preguntas listas para jugar`);function o(){s.shuffleQuestions()}return(a,c)=>(fe(),Oe("section",dd,[v("div",hd,[c[2]||(c[2]=v("span",{class:"eyebrow"},"Trivia de historia del arte",-1)),c[3]||(c[3]=v("h1",{class:"title-display"},[Ja("Pasapalabra "),v("span",{class:"title-accent"},"del Arte")],-1)),i.value?(fe(),Oe("p",pd,ae(i.value),1)):hn("",!0),v("div",gd,[v("button",{class:"btn btn--primary btn--lg",disabled:K(s).isLoading||!!K(s).loadError||r.value===0,onClick:c[0]||(c[0]=l=>n("play"))}," Jugar ",8,md),v("button",{class:"btn btn--ghost",disabled:r.value===0,onClick:o}," 🎲 Mezclar preguntas ",8,_d),v("button",{class:"btn btn--ghost",onClick:c[1]||(c[1]=l=>n("open-settings"))},"⚙ Configuración")]),K(s).loadError?(fe(),Oe("p",yd,ae(K(s).loadError),1)):hn("",!0)])]))}},vd={class:"screen"},wd={class:"settings-card"},Id={class:"settings-row"},Sd={class:"settings-row"},Ed={class:"settings-row"},Td={class:"settings-row"},Ad={__name:"SettingsScreen",emits:["back"],setup(t,{emit:e}){const n=e,s=Gn(),r=qn({...s.settings});function i(){s.updateSettings({timePerQuestion:Number(r.timePerQuestion),order:r.order,autoShowAnswer:r.autoShowAnswer,sound:r.sound}),n("back")}return(o,a)=>(fe(),Oe("section",vd,[v("div",wd,[a[12]||(a[12]=v("h2",{class:"section-title"},"Configuración",-1)),v("div",Id,[a[5]||(a[5]=v("label",{for:"setting-time"},"Tiempo por pregunta",-1)),In(v("select",{id:"setting-time","onUpdate:modelValue":a[0]||(a[0]=c=>r.timePerQuestion=c),class:"select"},[...a[4]||(a[4]=[v("option",{value:5},"5 segundos",-1),v("option",{value:10},"10 segundos",-1),v("option",{value:15},"15 segundos",-1),v("option",{value:20},"20 segundos",-1),v("option",{value:30},"30 segundos",-1)])],512),[[is,r.timePerQuestion,void 0,{number:!0}]])]),v("div",Sd,[a[7]||(a[7]=v("label",{for:"setting-order"},"Orden",-1)),In(v("select",{id:"setting-order","onUpdate:modelValue":a[1]||(a[1]=c=>r.order=c),class:"select"},[...a[6]||(a[6]=[v("option",{value:"normal"},"Normal",-1),v("option",{value:"random"},"Aleatorio",-1)])],512),[[is,r.order]])]),v("div",Ed,[a[9]||(a[9]=v("label",{for:"setting-autoshow"},"Mostrar respuestas automáticamente",-1)),In(v("select",{id:"setting-autoshow","onUpdate:modelValue":a[2]||(a[2]=c=>r.autoShowAnswer=c),class:"select"},[...a[8]||(a[8]=[v("option",{value:!1},"No",-1),v("option",{value:!0},"Sí",-1)])],512),[[is,r.autoShowAnswer]])]),v("div",Td,[a[11]||(a[11]=v("label",{for:"setting-sound"},"Sonidos",-1)),In(v("select",{id:"setting-sound","onUpdate:modelValue":a[3]||(a[3]=c=>r.sound=c),class:"select"},[...a[10]||(a[10]=[v("option",{value:!0},"Activados",-1),v("option",{value:!1},"Desactivados",-1)])],512),[[is,r.sound]])]),v("div",{class:"settings-actions"},[v("button",{class:"btn btn--primary",onClick:i},"Guardar y volver")])])]))}};function rc(t){const e=Math.max(0,Math.round(t)),n=Math.floor(e/60),s=e%60;return n===0?`${s}s`:`${n}:${String(s).padStart(2,"0")}`}function Cd(t="?"){const n=`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#162033"/>
          <stop offset="100%" stop-color="#0a0e1a"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#g)"/>
      <circle cx="300" cy="260" r="90" fill="none" stroke="#3b82f6" stroke-width="3" opacity="0.5"/>
      <text x="300" y="285" font-family="sans-serif" font-size="64" fill="#60a5fa" text-anchor="middle" font-weight="700">${String(t).slice(0,3)}</text>
      <text x="300" y="400" font-family="sans-serif" font-size="20" fill="#475569" text-anchor="middle">imagen no disponible</text>
    </svg>`.trim();return`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(n)))}`}function Pd(t){const e=String(t).padStart(3,"0");return[`/assets/images/${t}.png`,`/assets/images/${e}.png`]}function Rd(t,e){const n=ee("");let s=[],r=0;function i(){if(r>=s.length){n.value=Cd(e.value);return}n.value=s[r],r+=1}_u(()=>{s=Pd(t.value),r=0,i()});function o(){i()}return{src:n,onError:o}}const Od={class:"question-card__image-wrap"},kd=["src","alt"],xd={class:"question-letter"},Dd={class:"question-card__body"},Nd={class:"question-enunciado"},Md={class:"question-pregunta"},Ld=["disabled"],$d=["disabled"],Ud={__name:"QuestionCard",props:{question:{type:Object,required:!0},revealedText:{type:String,default:""}},emits:["submit"],setup(t,{emit:e}){const n=t,s=e,r=ee(""),i=ee(null),o=re(()=>n.question.id),a=re(()=>n.question.letra),{src:c,onError:l}=Rd(o,a),f=re(()=>n.question.tipo==="contiene"?`Contiene la letra ${n.question.letra}`:`Comienza con la letra ${n.question.letra}`),h=re(()=>`is-${n.question.status}`),_=re(()=>n.question.status==="pending"),w=re(()=>{const{status:A,respuesta:M}=n.question;return A==="correct"?{text:"✓ ¡Correcto!",variant:"correct"}:A==="incorrect"?{text:`✗ Incorrecto. Respuesta correcta: ${M.texto}`,variant:"incorrect"}:A==="timeout"?{text:`⏱ Tiempo agotado. Respuesta correcta: ${M.texto}`,variant:"timeout"}:n.revealedText?{text:`📖 Respuesta: ${n.revealedText}`,variant:"reveal"}:null});Bt(()=>n.question,A=>{r.value=A.status==="pending"?"":A.userAnswer||"",A.status==="pending"&&Vs(()=>{var M;return(M=i.value)==null?void 0:M.focus()})},{immediate:!0});function O(){_.value&&s("submit",r.value)}return(A,M)=>(fe(),Oe("div",{class:fn(["question-card pop-in",[h.value,{shake:t.question.status==="incorrect"||t.question.status==="timeout"}]])},[v("div",Od,[v("img",{class:"question-card__image",src:K(c),alt:`Imagen de la pregunta ${t.question.id}`,onError:M[0]||(M[0]=(...C)=>K(l)&&K(l)(...C))},null,40,kd)]),v("p",xd,ae(f.value),1),v("div",Dd,[v("p",Nd,ae(t.question.informacionGeneral.enunciado),1),v("p",Md,ae(t.question.informacionGeneral.pregunta),1),v("form",{class:"answer-form",autocomplete:"off",onSubmit:qf(O,["prevent"])},[In(v("input",{ref_key:"inputRef",ref:i,"onUpdate:modelValue":M[1]||(M[1]=C=>r.value=C),class:"answer-input",type:"text",placeholder:"Escribí tu respuesta…","aria-label":"Respuesta",disabled:!_.value},null,8,Ld),[[Vf,r.value]]),v("button",{type:"submit",class:"btn btn--primary",disabled:!_.value},"Responder",8,$d)],32),w.value?(fe(),Oe("p",{key:0,class:fn(["answer-feedback",`answer-feedback--${w.value.variant}`])},ae(w.value.text),3)):hn("",!0)])],2))}},Fd={class:"screen screen--game"},Bd={class:"topbar"},Hd={class:"stat"},Vd={class:"stat__value"},jd={class:"stat"},Wd={class:"stat__value"},qd={class:"stat"},Kd={class:"stat__value"},zd={class:"stat stat--timer"},Gd={class:"stat"},Jd={class:"stat__value"},Yd={class:"progress-bar"},Qd={class:"game-main"},Xd=["disabled"],Zd=["disabled"],eh={class:"controls-bar"},th={key:0,class:"pause-overlay"},nh={__name:"GameScreen",emits:["finished"],setup(t,{emit:e}){const n=e,s=Gn(),r=ee(""),i=re(()=>s.total===0?0:(s.currentIndex+1)/s.total*100),o=re(()=>rc(s.secondsLeft)),a=re(()=>s.secondsLeft<=Math.min(3,s.totalSeconds));Bt(()=>s.currentIndex,()=>{r.value=""}),Bt(()=>s.isFinished,M=>{M&&n("finished")});function c(M){s.submitAnswer(M)}function l(){r.value="",s.goPrev()}function f(){r.value="",s.goNext()}function h(){s.pauseGame()}function _(){s.resumeGame()}function w(){r.value="",s.restartGame()}function O(){s.shuffleQuestions()}function A(){r.value=s.revealCurrentAnswer()}return(M,C)=>(fe(),Oe("section",Fd,[v("header",Bd,[v("div",Hd,[C[0]||(C[0]=v("span",{class:"stat__label"},"Puntaje",-1)),v("span",Vd,ae(K(s).score),1)]),v("div",jd,[C[1]||(C[1]=v("span",{class:"stat__label"},"Racha",-1)),v("span",Wd,ae(K(s).currentStreak),1)]),v("div",qd,[C[2]||(C[2]=v("span",{class:"stat__label"},"Mejor racha",-1)),v("span",Kd,ae(K(s).maxStreak),1)]),v("div",zd,[C[3]||(C[3]=v("span",{class:"stat__label"},"Tiempo",-1)),v("span",{class:fn(["stat__value stat__value--timer",{"stat__value--alert":a.value}])},ae(o.value),3)]),v("div",Gd,[C[4]||(C[4]=v("span",{class:"stat__label"},"Pregunta",-1)),v("span",Jd,ae(K(s).currentIndex+1)+" / "+ae(K(s).total),1)])]),v("div",Yd,[v("div",{class:"progress-bar__fill",style:Fs({width:i.value+"%"})},null,4)]),v("main",Qd,[v("button",{class:"nav-arrow nav-arrow--left","aria-label":"Pregunta anterior",disabled:K(s).isFirst,onClick:l}," ← ",8,Xd),K(s).currentQuestion?(fe(),en(Ud,{key:K(s).currentQuestion.id,question:K(s).currentQuestion,"revealed-text":r.value,onSubmit:c},null,8,["question","revealed-text"])):hn("",!0),v("button",{class:"nav-arrow nav-arrow--right","aria-label":"Pregunta siguiente",disabled:K(s).isLast,onClick:f}," → ",8,Zd)]),v("footer",eh,[K(s).isPaused?(fe(),Oe("button",{key:1,class:"btn btn--ghost",onClick:_},"▶ Reanudar")):(fe(),Oe("button",{key:0,class:"btn btn--ghost",onClick:h},"⏸ Pausar")),v("button",{class:"btn btn--ghost",onClick:w},"⏮ Reiniciar"),v("button",{class:"btn btn--ghost",onClick:O},"🎲 Mezclar"),v("button",{class:"btn btn--ghost",onClick:A},"📖 Mostrar respuesta")]),K(s).isPaused?(fe(),Oe("div",th,[v("div",{class:"pause-overlay__content"},[C[5]||(C[5]=v("p",null,"Juego en pausa",-1)),v("button",{class:"btn btn--primary",onClick:_},"▶ Reanudar")])])):hn("",!0)]))}},sh={class:"screen"},rh={class:"end-card"},ih={class:"end-stats"},oh={class:"end-stat"},ah={class:"end-stat__value"},ch={class:"end-stat"},lh={class:"end-stat__value"},uh={class:"end-stat"},fh={class:"end-stat__value"},dh={class:"end-stat"},hh={class:"end-stat__value"},ph={class:"end-stat"},gh={class:"end-stat__value"},mh={class:"end-stat"},_h={class:"end-stat__value"},yh={class:"end-stat"},bh={class:"end-stat__value"},vh={__name:"EndScreen",emits:["play-again"],setup(t,{emit:e}){const n=e,s=Gn();return(r,i)=>(fe(),Oe("section",sh,[v("div",rh,[i[8]||(i[8]=v("span",{class:"eyebrow"},"Partida finalizada",-1)),i[9]||(i[9]=v("h2",{class:"title-display"},"Resultados",-1)),v("div",ih,[v("div",oh,[v("span",ah,ae(K(s).score),1),i[1]||(i[1]=v("span",{class:"end-stat__label"},"Puntaje final",-1))]),v("div",ch,[v("span",lh,ae(K(s).accuracy)+"%",1),i[2]||(i[2]=v("span",{class:"end-stat__label"},"Efectividad",-1))]),v("div",uh,[v("span",fh,ae(K(s).correctCount),1),i[3]||(i[3]=v("span",{class:"end-stat__label"},"Aciertos",-1))]),v("div",dh,[v("span",hh,ae(K(s).incorrectCount+K(s).timeoutCount),1),i[4]||(i[4]=v("span",{class:"end-stat__label"},"Errores",-1))]),v("div",ph,[v("span",gh,ae(K(s).unansweredCount),1),i[5]||(i[5]=v("span",{class:"end-stat__label"},"Sin responder",-1))]),v("div",mh,[v("span",_h,ae(K(s).maxStreak),1),i[6]||(i[6]=v("span",{class:"end-stat__label"},"Mejor racha",-1))]),v("div",yh,[v("span",bh,ae(K(rc)(K(s).totalTimeSeconds)),1),i[7]||(i[7]=v("span",{class:"end-stat__label"},"Tiempo total",-1))])]),v("button",{class:"btn btn--primary btn--lg",onClick:i[0]||(i[0]=o=>n("play-again"))},"Volver a jugar")])]))}},wh=()=>{};var co={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ih=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let _=(a&15)<<2|l>>6,w=l&63;c||(w=64,o||(_=64)),s.push(n[f],n[h],n[_],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ic(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ih(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new Sh;const _=i<<2|a>>4;if(s.push(_),l!==64){const w=a<<4&240|l>>2;if(s.push(w),h!==64){const O=l<<6&192|h;s.push(O)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eh=function(t){const e=ic(t);return oc.encodeByteArray(e,!0)},ac=function(t){return Eh(t).replace(/\./g,"")},cc=function(t){try{return oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=()=>Th().__FIREBASE_DEFAULTS__,Ch=()=>{if(typeof process>"u"||typeof co>"u")return;const t=co.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ph=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cc(t[1]);return e&&JSON.parse(e)},ni=()=>{try{return wh()||Ah()||Ch()||Ph()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rh=t=>{var e,n;return(n=(e=ni())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},lc=()=>{var t;return(t=ni())==null?void 0:t.config},uc=t=>{var e;return(e=ni())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function xh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nh(){const t=be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dc(){try{return typeof indexedDB=="object"}catch{return!1}}function hc(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}function Mh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="FirebaseError";class et extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Lh,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gt.prototype.create)}}class Gt{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?$h(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new et(r,a,s)}}function $h(t,e){return t.replace(Uh,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Uh=/\{\$([^}]+)}/g;function Fh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(lo(i)&&lo(o)){if(!jt(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function lo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bh(t,e){const n=new Hh(t,e);return n.subscribe.bind(n)}class Hh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Vh(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=fr),r.error===void 0&&(r.error=fr),r.complete===void 0&&(r.complete=fr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=1e3,Wh=2,qh=4*60*60*1e3,Kh=.5;function uo(t,e=jh,n=Wh){const s=e*Math.pow(n,t),r=Math.round(Kh*s*(Math.random()-.5)*2);return Math.min(qh,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zh(t){return(await fetch(t,{credentials:"include"})).ok}class Ze{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Oh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yh(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jh(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jh(t){return t===Lt?void 0:t}function Yh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Xh={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Zh=Y.INFO,ep={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},tp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ep[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ri{constructor(e){this.name=e,this._logLevel=Zh,this._logHandler=tp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const np=(t,e)=>e.some(n=>t instanceof n);let fo,ho;function sp(){return fo||(fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rp(){return ho||(ho=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pc=new WeakMap,Dr=new WeakMap,gc=new WeakMap,dr=new WeakMap,ii=new WeakMap;function ip(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pc.set(n,t)}).catch(()=>{}),ii.set(e,t),e}function op(t){if(Dr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dr.set(t,e)}let Nr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ap(t){Nr=t(Nr)}function cp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(hr(this),e,...n);return gc.set(s,e.sort?e.sort():[e]),Pt(s)}:rp().includes(t)?function(...e){return t.apply(hr(this),e),Pt(pc.get(this))}:function(...e){return Pt(t.apply(hr(this),e))}}function lp(t){return typeof t=="function"?cp(t):(t instanceof IDBTransaction&&op(t),np(t,sp())?new Proxy(t,Nr):t)}function Pt(t){if(t instanceof IDBRequest)return ip(t);if(dr.has(t))return dr.get(t);const e=lp(t);return e!==t&&(dr.set(t,e),ii.set(e,t)),e}const hr=t=>ii.get(t);function mc(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const up=["get","getKey","getAll","getAllKeys","count"],fp=["put","add","delete","clear"],pr=new Map;function po(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pr.get(e))return pr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=fp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||up.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return pr.set(e,i),i}ap(t=>({...t,get:(e,n,s)=>po(e,n)||t.get(e,n,s),has:(e,n)=>!!po(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mr="@firebase/app",go="0.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=new ri("@firebase/app"),pp="@firebase/app-compat",gp="@firebase/analytics-compat",mp="@firebase/analytics",_p="@firebase/app-check-compat",yp="@firebase/app-check",bp="@firebase/auth",vp="@firebase/auth-compat",wp="@firebase/database",Ip="@firebase/data-connect",Sp="@firebase/database-compat",Ep="@firebase/functions",Tp="@firebase/functions-compat",Ap="@firebase/installations",Cp="@firebase/installations-compat",Pp="@firebase/messaging",Rp="@firebase/messaging-compat",Op="@firebase/performance",kp="@firebase/performance-compat",xp="@firebase/remote-config",Dp="@firebase/remote-config-compat",Np="@firebase/storage",Mp="@firebase/storage-compat",Lp="@firebase/firestore",$p="@firebase/ai",Up="@firebase/firestore-compat",Fp="firebase",Bp="12.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]",Hp={[Mr]:"fire-core",[pp]:"fire-core-compat",[mp]:"fire-analytics",[gp]:"fire-analytics-compat",[yp]:"fire-app-check",[_p]:"fire-app-check-compat",[bp]:"fire-auth",[vp]:"fire-auth-compat",[wp]:"fire-rtdb",[Ip]:"fire-data-connect",[Sp]:"fire-rtdb-compat",[Ep]:"fire-fn",[Tp]:"fire-fn-compat",[Ap]:"fire-iid",[Cp]:"fire-iid-compat",[Pp]:"fire-fcm",[Rp]:"fire-fcm-compat",[Op]:"fire-perf",[kp]:"fire-perf-compat",[xp]:"fire-rc",[Dp]:"fire-rc-compat",[Np]:"fire-gcs",[Mp]:"fire-gcs-compat",[Lp]:"fire-fst",[Up]:"fire-fst-compat",[$p]:"fire-vertex","fire-js":"fire-js",[Fp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Map,Vp=new Map,$r=new Map;function mo(t,e){try{t.container.addComponent(e)}catch(n){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gt(t){const e=t.name;if($r.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;$r.set(e,t);for(const n of Ss.values())mo(n,t);for(const n of Vp.values())mo(n,t);return!0}function gn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rt=new Gt("app","Firebase",jp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=Bp;function _c(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Lr,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});if(n||(n=lc()),!n)throw Rt.create("no-options");const i=Ss.get(r);if(i){if(jt(n,i.options)&&jt(s,i.config))return i;throw Rt.create("duplicate-app",{appName:r})}const o=new Qh(r);for(const c of $r.values())o.addComponent(c);const a=new Wp(n,s,o);return Ss.set(r,a),a}function yc(t=Lr){const e=Ss.get(t);if(!e&&t===Lr&&lc())return _c();if(!e)throw Rt.create("no-app",{appName:t});return e}function Ge(t,e,n){let s=Hp[t]??t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(o.join(" "));return}gt(new Ze(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="firebase-heartbeat-database",Kp=1,Hn="firebase-heartbeat-store";let gr=null;function bc(){return gr||(gr=mc(qp,Kp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),gr}async function zp(t){try{const n=(await bc()).transaction(Hn),s=await n.objectStore(Hn).get(vc(t));return await n.done,s}catch(e){if(e instanceof et)pt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(n.message)}}}async function _o(t,e){try{const s=(await bc()).transaction(Hn,"readwrite");await s.objectStore(Hn).put(e,vc(t)),await s.done}catch(n){if(n instanceof et)pt.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(s.message)}}}function vc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=1024,Jp=30;class Yp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xp(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yo();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>Jp){const o=Zp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){pt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yo(),{heartbeatsToSend:s,unsentEntries:r}=Qp(this._heartbeatsCache.heartbeats),i=ac(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return pt.warn(n),""}}}function yo(){return new Date().toISOString().substring(0,10)}function Qp(t,e=Gp){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),bo(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),bo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Xp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dc()?hc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _o(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return _o(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bo(t){return ac(JSON.stringify({version:2,heartbeats:t})).length}function Zp(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){gt(new Ze("platform-logger",e=>new dp(e),"PRIVATE")),gt(new Ze("heartbeat",e=>new Yp(e),"PRIVATE")),Ge(Mr,go,t),Ge(Mr,go,"esm2020"),Ge("fire-js","")}eg("");function wc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tg=wc,Ic=new Gt("auth","Firebase",wc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new ri("@firebase/auth");function ng(t,...e){Es.logLevel<=Y.WARN&&Es.warn(`Auth (${Yn}): ${t}`,...e)}function ls(t,...e){Es.logLevel<=Y.ERROR&&Es.error(`Auth (${Yn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,...e){throw oi(t,...e)}function Je(t,...e){return oi(t,...e)}function Sc(t,e,n){const s={...tg(),[e]:n};return new Gt("auth","Firebase",s).create(e,{appName:t.name})}function Vt(t){return Sc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oi(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ic.create(t,...e)}function x(t,e,...n){if(!t)throw oi(e,...n)}function ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ls(e),new Error(e)}function _t(t,e){t||ut(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function sg(){return vo()==="http:"||vo()==="https:"}function vo(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sg()||fc()||"connection"in navigator)?navigator.onLine:!0}function ig(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=kh()||Dh()}get(){return rg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cg=new Qn(3e4,6e4);function ci(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function mn(t,e,n,s,r={}){return Tc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Jn({...o,key:t.config.apiKey}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:c,...i};return xh()||(l.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&si(t.emulatorConfig.host)&&(l.credentials="include"),Ec.fetch()(await Ac(t,t.config.apiHost,n,a),l)})}async function Tc(t,e,n){t._canInitEmulator=!1;const s={...og,...e};try{const r=new ug(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw os(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw os(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw os(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw os(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Sc(t,f,l);mt(t,f)}}catch(r){if(r instanceof et)throw r;mt(t,"network-request-failed",{message:String(r)})}}async function lg(t,e,n,s,r={}){const i=await mn(t,e,n,s,r);return"mfaPendingCredential"in i&&mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ac(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?ai(t.config,r):`${t.config.apiScheme}://${r}`;return ag.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ug{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Je(this.auth,"network-request-failed")),cg.get())})}}function os(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Je(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fg(t,e){return mn(t,"POST","/v1/accounts:delete",e)}async function Ts(t,e){return mn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dg(t,e=!1){const n=tt(t),s=await n.getIdToken(e),r=li(s);x(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Nn(mr(r.auth_time)),issuedAtTime:Nn(mr(r.iat)),expirationTime:Nn(mr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mr(t){return Number(t)*1e3}function li(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const r=cc(n);return r?JSON.parse(r):(ls("Failed to decode base64 JWT payload"),null)}catch(r){return ls("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wo(t){const e=li(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof et&&hg(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function hg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nn(this.lastLoginAt),this.creationTime=Nn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t){var h;const e=t.auth,n=await t.getIdToken(),s=await Vn(t,Ts(e,{idToken:n}));x(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const i=(h=r.providerUserInfo)!=null&&h.length?Cc(r.providerUserInfo):[],o=mg(t.providerData,i),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(o!=null&&o.length),l=a?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Fr(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(t,f)}async function gg(t){const e=tt(t);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mg(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Cc(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(t,e){const n=await Tc(t,{},async()=>{const s=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await Ac(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&si(t.emulatorConfig.host)&&(c.credentials="include"),Ec.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yg(t,e){return mn(t,"POST","/v2/accounts:revokeToken",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=wo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await _g(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new an;return s&&(x(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(x(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ke{constructor({uid:e,auth:n,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new pg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Fr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Vn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dg(this,e)}reload(){return gg(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ke({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await As(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Vn(this,fg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,r=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,l=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:h,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:A}=n;x(h&&A,e,"internal-error");const M=an.fromJSON(this.name,A);x(typeof h=="string",e,"internal-error"),vt(s,e.name),vt(r,e.name),x(typeof _=="boolean",e,"internal-error"),x(typeof w=="boolean",e,"internal-error"),vt(i,e.name),vt(o,e.name),vt(a,e.name),vt(c,e.name),vt(l,e.name),vt(f,e.name);const C=new ke({uid:h,auth:e,email:r,emailVerified:_,displayName:s,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:M,createdAt:l,lastLoginAt:f});return O&&Array.isArray(O)&&(C.providerData=O.map(U=>({...U}))),c&&(C._redirectEventId=c),C}static async _fromIdTokenResponse(e,n,s=!1){const r=new an;r.updateFromServerResponse(n);const i=new ke({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await As(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];x(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Cc(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new an;a.updateFromIdToken(s);const c=new ke({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Fr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map;function ft(t){_t(t instanceof Function,"Expected a class definition");let e=Io.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Io.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pc.type="NONE";const So=Pc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t,e,n){return`firebase:${t}:${e}:${n}`}class cn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=us(this.userKey,r.apiKey,i),this.fullPersistenceKey=us("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ts(this.auth,{idToken:e}).catch(()=>{});return n?ke._fromGetAccountInfoResponse(this.auth,n,e):null}return ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new cn(ft(So),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ft(So);const o=us(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){let h;if(typeof f=="string"){const _=await Ts(e,{idToken:f}).catch(()=>{});if(!_)break;h=await ke._fromGetAccountInfoResponse(e,_,f)}else h=ke._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new cn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nc(e))return"Blackberry";if(Mc(e))return"Webos";if(Oc(e))return"Safari";if((e.includes("chrome/")||kc(e))&&!e.includes("edge/"))return"Chrome";if(Dc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rc(t=be()){return/firefox\//i.test(t)}function Oc(t=be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kc(t=be()){return/crios\//i.test(t)}function xc(t=be()){return/iemobile/i.test(t)}function Dc(t=be()){return/android/i.test(t)}function Nc(t=be()){return/blackberry/i.test(t)}function Mc(t=be()){return/webos/i.test(t)}function ui(t=be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bg(t=be()){var e;return ui(t)&&!!((e=window.navigator)!=null&&e.standalone)}function vg(){return Nh()&&document.documentMode===10}function Lc(t=be()){return ui(t)||Dc(t)||Mc(t)||Nc(t)||/windows phone/i.test(t)||xc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t,e=[]){let n;switch(t){case"Browser":n=Eo(be());break;case"Worker":n=`${Eo(be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(t,e={}){return mn(t,"GET","/v2/passwordPolicy",ci(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=6;class Eg{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Sg,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.beforeStateQueue=new wg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ic,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ts(this,{idToken:e}),s=await ke._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await As(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ig()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Vt(this));const n=e?tt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ig(this),n=new Eg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gt("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await yg(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ng(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fi(t){return tt(t)}class To{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bh(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ag(t){di=t}function Cg(t){return di.loadJS(t)}function Pg(){return di.gapiScript}function Rg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t,e){const n=gn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(jt(i,e??{}))return r;mt(r,"already-initialized")}return n.initialize({options:e})}function kg(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function xg(t,e,n){const s=fi(t);x(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Uc(e),{host:o,port:a}=Dg(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){x(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),x(jt(l,s.config.emulator)&&jt(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,si(o)?zh(`${i}//${o}${c}`):Ng()}function Uc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Dg(t){const e=Uc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ao(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Ao(o)}}}function Ao(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ng(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,n){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(t,e){return lg(t,"POST","/v1/accounts:signInWithIdp",ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="http://localhost";class Wt extends Fc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=n;if(!s||!r)return null;const o=new Wt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ln(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ln(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ln(e,n)}buildRequest(){const e={requestUri:Mg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Bc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Xn{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Et.credential(n,s)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Xn{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Xn{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return At.credential(n,s)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ke._fromIdTokenResponse(e,s,r),o=Co(s);return new pn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Co(s);return new pn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Co(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends et{constructor(e,n,s,r){super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Cs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Cs(e,n,s,r)}}function Hc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Cs._fromErrorAndOperation(t,i,e,s):i})}async function Lg(t,e,n=!1){const s=await Vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t,e,n=!1){const{auth:s}=t;if(lt(s.app))return Promise.reject(Vt(s));const r="reauthenticate";try{const i=await Vn(t,Hc(s,r,e,t),n);x(i.idToken,s,"internal-error");const o=li(i.idToken);x(o,s,"internal-error");const{sub:a}=o;return x(t.uid===a,s,"user-mismatch"),pn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(t,e,n=!1){if(lt(t.app))return Promise.reject(Vt(t));const s="signIn",r=await Hc(t,s,e),i=await pn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Fg(t,e,n,s){return tt(t).onIdTokenChanged(e,n,s)}function Bg(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function Hg(t,e,n,s){return tt(t).onAuthStateChanged(e,n,s)}const Ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=1e3,jg=10;class jc extends Vc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);vg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jg):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jc.type="LOCAL";const Wg=jc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends Vc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wc.type="SESSION";const qc=Wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Gs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await qg(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=hi("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const _=h;if(_.data.eventId===l)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(_.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function zg(t){Ye().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function Gg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Yg(){return Kc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="firebaseLocalStorageDb",Qg=1,Rs="firebaseLocalStorage",Gc="fbase_key";class Zn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Js(t,e){return t.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}function Xg(){const t=indexedDB.deleteDatabase(zc);return new Zn(t).toPromise()}function Jc(){const t=indexedDB.open(zc,Qg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Rs,{keyPath:Gc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Rs)?e(s):(s.close(),await Xg(),e(await Jc()))})})}async function Po(t,e,n){const s=Js(t,!0).put({[Gc]:e,value:n});return new Zn(s).toPromise()}async function Zg(t,e){const n=Js(t,!1).get(e),s=await new Zn(n).toPromise();return s===void 0?null:s.value}function Ro(t,e){const n=Js(t,!0).delete(e);return new Zn(n).toPromise()}const em=800,tm=3;class Yc{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Jc(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tm)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(Yg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await Gg(),!this.activeServiceWorker)return;this.sender=new Kg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Po(e,Ps,"1"),await Ro(e,Ps)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Po(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Zg(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Js(r,!1).getAll();return new Zn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yc.type="LOCAL";const nm=Yc;new Qn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e){return e?ft(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Fc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rm(t){return Ug(t.auth,new pi(t),t.bypassAuthState)}function im(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),$g(n,new pi(t),t.bypassAuthState)}async function om(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Lg(n,new pi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rm;case"linkViaPopup":case"linkViaRedirect":return om;case"reauthViaPopup":case"reauthViaRedirect":return im;default:mt(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new Qn(2e3,1e4);class tn extends Qc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=hi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,am.get())};e()}}tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="pendingRedirect",fs=new Map;class lm extends Qc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=fs.get(this.auth._key());if(!e){try{const s=await um(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}fs.set(this.auth._key(),e)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function um(t,e){const n=hm(e),s=dm(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function fm(t,e){fs.set(t._key(),e)}function dm(t){return ft(t._redirectPersistence)}function hm(t){return us(cm,t.config.apiKey,t.name)}async function pm(t,e,n=!1){if(lt(t.app))return Promise.reject(Vt(t));const s=fi(t),r=sm(s,e),o=await new lm(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=10*60*1e3;class mm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_m(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Xc(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oo(e))}saveEventToCache(e){this.cachedEventUids.add(Oo(e)),this.lastProcessedEventTime=Date.now()}}function Oo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _m(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ym(t,e={}){return mn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vm=/^https?/;async function wm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ym(t);for(const n of e)try{if(Im(n))return}catch{}mt(t,"unauthorized-domain")}function Im(t){const e=Ur(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!vm.test(n))return!1;if(bm.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Qn(3e4,6e4);function ko(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Em(t){return new Promise((e,n)=>{var r,i,o;function s(){ko(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ko(),n(Je(t,"network-request-failed"))},timeout:Sm.get()})}if((i=(r=Ye().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Ye().gapi)!=null&&o.load)s();else{const a=Rg("iframefcb");return Ye()[a]=()=>{gapi.load?s():n(Je(t,"network-request-failed"))},Cg(`${Pg()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ds=null,e})}let ds=null;function Tm(t){return ds=ds||Em(t),ds}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=new Qn(5e3,15e3),Cm="__/auth/iframe",Pm="emulator/auth/iframe",Rm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Om=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function km(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ai(e,Pm):`https://${t.config.authDomain}/${Cm}`,s={apiKey:e.apiKey,appName:t.name,v:Yn},r=Om.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Jn(s).slice(1)}`}async function xm(t){const e=await Tm(t),n=Ye().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:km(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rm,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},Am.get());function c(){Ye().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nm=500,Mm=600,Lm="_blank",$m="http://localhost";class xo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Um(t,e,n,s=Nm,r=Mm){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c={...Dm,width:s.toString(),height:r.toString(),top:i,left:o},l=be().toLowerCase();n&&(a=kc(l)?Lm:n),Rc(l)&&(e=e||$m,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[w,O])=>`${_}${w}=${O},`,"");if(bg(l)&&a!=="_self")return Fm(e||"",a),new xo(null);const h=window.open(e||"",a,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new xo(h)}function Fm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="__/auth/handler",Hm="emulator/auth/handler",Vm=encodeURIComponent("fac");async function Do(t,e,n,s,r,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Yn,eventId:r};if(e instanceof Bc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Xn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${Vm}=${encodeURIComponent(c)}`:"";return`${jm(t)}?${Jn(a).slice(1)}${l}`}function jm({config:t}){return t.emulator?ai(t,Hm):`https://${t.authDomain}/${Bm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="webStorageSupport";class Wm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qc,this._completeRedirectFn=pm,this._overrideRedirectResult=fm}async _openPopup(e,n,s,r){var o;_t((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Do(e,n,s,Ur(),r);return Um(e,i,hi())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Do(e,n,s,Ur(),r);return zg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(_t(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xm(e),s=new mm(e);return n.register("authEvent",r=>(x(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_r,{type:_r},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[_r];i!==void 0&&n(!!i),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Lc()||Oc()||ui()}}const qm=Wm;var No="@firebase/auth",Mo="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gm(t){gt(new Ze("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$c(t)},l=new Tg(s,r,i,c);return kg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gt(new Ze("auth-internal",e=>{const n=fi(e.getProvider("auth").getImmediate());return(s=>new Km(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(No,Mo,zm(t)),Ge(No,Mo,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=5*60,Ym=uc("authIdTokenMaxAge")||Jm;let Lo=null;const Qm=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ym)return;const r=n==null?void 0:n.token;Lo!==r&&(Lo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Xm(t=yc()){const e=gn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Og(t,{popupRedirectResolver:qm,persistence:[nm,Wg,qc]}),s=uc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Qm(i.toString());Bg(n,o,()=>o(n.currentUser)),Fg(n,a=>o(a))}}const r=Rh("auth");return r&&xg(n,`http://${r}`),n}function Zm(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ag({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Je("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Zm().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gm("Browser");var e_="firebase",t_="12.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(e_,t_,"app");const Zc="@firebase/installations",gi="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=1e4,tl=`w:${gi}`,nl="FIS_v2",n_="https://firebaseinstallations.googleapis.com/v1",s_=60*60*1e3,r_="installations",i_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qt=new Gt(r_,i_,o_);function sl(t){return t instanceof et&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl({projectId:t}){return`${n_}/projects/${t}/installations`}function il(t){return{token:t.token,requestStatus:2,expiresIn:c_(t.expiresIn),creationTime:Date.now()}}async function ol(t,e){const s=(await e.json()).error;return qt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function al({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function a_(t,{refreshToken:e}){const n=al(t);return n.append("Authorization",l_(e)),n}async function cl(t){const e=await t();return e.status>=500&&e.status<600?t():e}function c_(t){return Number(t.replace("s","000"))}function l_(t){return`${nl} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=rl(t),r=al(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:nl,appId:t.appId,sdkVersion:tl},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await cl(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:il(l.authToken)}}else throw await ol("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=/^[cdef][\w-]{21}$/,Br="";function h_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=p_(t);return d_.test(n)?n:Br}catch{return Br}}function p_(t){return f_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map;function fl(t,e){const n=Ys(t);dl(n,e),g_(n,e)}function dl(t,e){const n=ul.get(t);if(n)for(const s of n)s(e)}function g_(t,e){const n=m_();n&&n.postMessage({key:t,fid:e}),__()}let Ut=null;function m_(){return!Ut&&"BroadcastChannel"in self&&(Ut=new BroadcastChannel("[Firebase] FID Change"),Ut.onmessage=t=>{dl(t.data.key,t.data.fid)}),Ut}function __(){ul.size===0&&Ut&&(Ut.close(),Ut=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="firebase-installations-database",b_=1,Kt="firebase-installations-store";let yr=null;function mi(){return yr||(yr=mc(y_,b_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kt)}}})),yr}async function Os(t,e){const n=Ys(t),r=(await mi()).transaction(Kt,"readwrite"),i=r.objectStore(Kt),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&fl(t,e.fid),e}async function hl(t){const e=Ys(t),s=(await mi()).transaction(Kt,"readwrite");await s.objectStore(Kt).delete(e),await s.done}async function Qs(t,e){const n=Ys(t),r=(await mi()).transaction(Kt,"readwrite"),i=r.objectStore(Kt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&fl(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t){let e;const n=await Qs(t.appConfig,s=>{const r=v_(s),i=w_(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Br?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function v_(t){const e=t||{fid:h_(),registrationStatus:0};return pl(e)}function w_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(qt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=I_(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:S_(t)}:{installationEntry:e}}async function I_(t,e){try{const n=await u_(t,e);return Os(t.appConfig,n)}catch(n){throw sl(n)&&n.customData.serverCode===409?await hl(t.appConfig):await Os(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function S_(t){let e=await $o(t.appConfig);for(;e.registrationStatus===1;)await ll(100),e=await $o(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await _i(t);return s||n}return e}function $o(t){return Qs(t,e=>{if(!e)throw qt.create("installation-not-found");return pl(e)})}function pl(t){return E_(t)?{fid:t.fid,registrationStatus:0}:t}function E_(t){return t.registrationStatus===1&&t.registrationTime+el<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_({appConfig:t,heartbeatServiceProvider:e},n){const s=A_(t,n),r=a_(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:tl,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await cl(()=>fetch(s,a));if(c.ok){const l=await c.json();return il(l)}else throw await ol("Generate Auth Token",c)}function A_(t,{fid:e}){return`${rl(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e=!1){let n;const s=await Qs(t.appConfig,i=>{if(!gl(i))throw qt.create("not-registered");const o=i.authToken;if(!e&&R_(o))return i;if(o.requestStatus===1)return n=C_(t,e),i;{if(!navigator.onLine)throw qt.create("app-offline");const a=k_(i);return n=P_(t,a),a}});return n?await n:s.authToken}async function C_(t,e){let n=await Uo(t.appConfig);for(;n.authToken.requestStatus===1;)await ll(100),n=await Uo(t.appConfig);const s=n.authToken;return s.requestStatus===0?yi(t,e):s}function Uo(t){return Qs(t,e=>{if(!gl(e))throw qt.create("not-registered");const n=e.authToken;return x_(n)?{...e,authToken:{requestStatus:0}}:e})}async function P_(t,e){try{const n=await T_(t,e),s={...e,authToken:n};return await Os(t.appConfig,s),n}catch(n){if(sl(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hl(t.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Os(t.appConfig,s)}throw n}}function gl(t){return t!==void 0&&t.registrationStatus===2}function R_(t){return t.requestStatus===2&&!O_(t)}function O_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+s_}function k_(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function x_(t){return t.requestStatus===1&&t.requestTime+el<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(t){const e=t,{installationEntry:n,registrationPromise:s}=await _i(e);return s?s.catch(console.error):yi(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N_(t,e=!1){const n=t;return await M_(n),(await yi(n,e)).token}async function M_(t){const{registrationPromise:e}=await _i(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){if(!t||!t.options)throw br("App Configuration");if(!t.name)throw br("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw br(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function br(t){return qt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="installations",$_="installations-internal",U_=t=>{const e=t.getProvider("app").getImmediate(),n=L_(e),s=gn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},F_=t=>{const e=t.getProvider("app").getImmediate(),n=gn(e,ml).getImmediate();return{getId:()=>D_(n),getToken:r=>N_(n,r)}};function B_(){gt(new Ze(ml,U_,"PUBLIC")),gt(new Ze($_,F_,"PRIVATE"))}B_();Ge(Zc,gi);Ge(Zc,gi,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="analytics",H_="firebase_id",V_="origin",j_=60*1e3,W_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new ri("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ee=new Gt("analytics","Analytics",q_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){if(!t.startsWith(bi)){const e=Ee.create("invalid-gtag-resource",{gtagURL:t});return ye.warn(e.message),""}return t}function _l(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function z_(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function G_(t,e){const n=z_("firebase-js-sdk-policy",{createScriptURL:K_}),s=document.createElement("script"),r=`${bi}?l=${t}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function J_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Y_(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await _l(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){ye.error(a)}t("config",r,i)}async function Q_(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await _l(n);for(const c of o){const l=a.find(h=>h.measurementId===c),f=l&&e[l.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){ye.error(i)}}function X_(t,e,n,s){async function r(i,...o){try{if(i==="event"){const[a,c]=o;await Q_(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await Y_(t,e,n,s,a,c)}else if(i==="consent"){const[a,c]=o;t("consent",a,c)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){ye.error(a)}}return r}function Z_(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=X_(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function ey(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bi)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=30,ny=1e3;class sy{constructor(e={},n=ny){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const yl=new sy;function ry(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function iy(t){var o;const{appId:e,apiKey:n}=t,s={method:"GET",headers:ry(n)},r=W_.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let a="";try{const c=await i.json();(o=c.error)!=null&&o.message&&(a=c.error.message)}catch{}throw Ee.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function oy(t,e=yl,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Ee.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ee.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ly;return setTimeout(async()=>{a.abort()},j_),bl({appId:s,apiKey:r,measurementId:i},o,a,e)}async function bl(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=yl){var a;const{appId:i,measurementId:o}=t;try{await ay(s,e)}catch(c){if(o)return ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw c}try{const c=await iy(t);return r.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!cy(l)){if(r.deleteThrottleMetadata(i),o)return ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw c}const f=Number((a=l==null?void 0:l.customData)==null?void 0:a.httpStatus)===503?uo(n,r.intervalMillis,ty):uo(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(i,h),ye.debug(`Calling attemptFetch again in ${f} millis`),bl(t,h,s,r)}}function ay(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Ee.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function cy(t){if(!(t instanceof et)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ly{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function uy(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o={...s,send_to:i};t("event",n,o)}}async function fy(t,e,n,s){if(s&&s.global){const r={};for(const i of Object.keys(n))r[`user_properties.${i}`]=n[i];return t("set",r),Promise.resolve()}else{const r=await e;t("config",r,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(){if(dc())try{await hc()}catch(t){return ye.warn(Ee.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ye.warn(Ee.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hy(t,e,n,s,r,i,o){const a=oy(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&ye.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>ye.error(_)),e.push(a);const c=dy().then(_=>{if(_)return s.getId()}),[l,f]=await Promise.all([a,c]);ey(i)||G_(i,l.measurementId),r("js",new Date);const h=(o==null?void 0:o.config)??{};return h[V_]="firebase",h.update=!0,f!=null&&(h[H_]=f),r("config",l.measurementId,h),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.app=e}_delete(){return delete un[this.app.options.appId],Promise.resolve()}}let un={},Fo=[];const Bo={};let vr="dataLayer",gy="gtag",Ho,vi,Vo=!1;function my(){const t=[];if(fc()&&t.push("This is a browser extension environment."),Mh()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Ee.create("invalid-analytics-context",{errorInfo:e});ye.warn(n.message)}}function _y(t,e,n){my();const s=t.options.appId;if(!s)throw Ee.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ee.create("no-api-key");if(un[s]!=null)throw Ee.create("already-exists",{id:s});if(!Vo){J_(vr);const{wrappedGtag:i,gtagCore:o}=Z_(un,Fo,Bo,vr,gy);vi=i,Ho=o,Vo=!0}return un[s]=hy(t,Fo,Bo,e,Ho,vr,n),new py(t)}function yy(t=yc()){t=tt(t);const e=gn(t,ks);return e.isInitialized()?e.getImmediate():by(t)}function by(t,e={}){const n=gn(t,ks);if(n.isInitialized()){const r=n.getImmediate();if(jt(e,n.getOptions()))return r;throw Ee.create("already-initialized")}return n.initialize({options:e})}function vy(t,e,n){t=tt(t),fy(vi,un[t.app.options.appId],e,n).catch(s=>ye.error(s))}function wy(t,e,n,s){t=tt(t),uy(vi,un[t.app.options.appId],e,n,s).catch(r=>ye.error(r))}const jo="@firebase/analytics",Wo="0.10.22";function Iy(){gt(new Ze(ks,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return _y(s,r,n)},"PUBLIC")),gt(new Ze("analytics-internal",t,"PRIVATE")),Ge(jo,Wo),Ge(jo,Wo,"esm2020");function t(e){try{const n=e.getProvider(ks).getImmediate();return{logEvent:(s,r,i)=>wy(n,s,r,i),setUserProperties:(s,r)=>vy(n,s,r)}}catch(n){throw Ee.create("interop-component-reg-failed",{reason:n})}}}Iy();const Sy={apiKey:'"AIzaSyBrcoPwerFmNbzl6o4uvSw0qt1idkqGa5k",',authDomain:'"pasapalabra-arte.firebaseapp.com",',projectId:'"pasapalabra-arte",',storageBucket:'"pasapalabra-arte.firebasestorage.app",',messagingSenderId:'"505832108957",',appId:'"1:505832108957:web:7e67c679a804e86d71f574",'},vl=_c(Sy);yy(vl);const Ey=Xm(vl),Ty={__name:"App",setup(t){Hg(Ey,a=>{console.log("user:",a)});const e=Gn(),n=ee("start");Ca(()=>{e.init()});function s(a){n.value=a}function r(){e.startGame(),s("game")}function i(){s("end")}function o(){s("start")}return(a,c)=>n.value==="start"?(fe(),en(bd,{key:0,onPlay:r,onOpenSettings:c[0]||(c[0]=l=>s("settings"))})):n.value==="settings"?(fe(),en(Ad,{key:1,onBack:c[1]||(c[1]=l=>s("start"))})):n.value==="game"?(fe(),en(nh,{key:2,onFinished:i})):n.value==="end"?(fe(),en(vh,{key:3,onPlayAgain:o})):hn("",!0)}};Gf(Ty).use(Qf()).mount("#app");
