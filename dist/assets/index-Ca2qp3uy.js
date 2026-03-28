function Zy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pg={exports:{}},Ta={},hg={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),e0=Symbol.for("react.portal"),t0=Symbol.for("react.fragment"),n0=Symbol.for("react.strict_mode"),r0=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),l0=Symbol.for("react.forward_ref"),a0=Symbol.for("react.suspense"),s0=Symbol.for("react.memo"),u0=Symbol.for("react.lazy"),xd=Symbol.iterator;function c0(e){return e===null||typeof e!="object"?null:(e=xd&&e[xd]||e["@@iterator"],typeof e=="function"?e:null)}var gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mg=Object.assign,vg={};function Si(e,t,n){this.props=e,this.context=t,this.refs=vg,this.updater=n||gg}Si.prototype.isReactComponent={};Si.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Si.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yg(){}yg.prototype=Si.prototype;function jc(e,t,n){this.props=e,this.context=t,this.refs=vg,this.updater=n||gg}var Fc=jc.prototype=new yg;Fc.constructor=jc;mg(Fc,Si.prototype);Fc.isPureReactComponent=!0;var wd=Array.isArray,xg=Object.prototype.hasOwnProperty,Mc={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function kg(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)xg.call(t,r)&&!wg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vo,type:e,key:o,ref:l,props:i,_owner:Mc.current}}function f0(e,t){return{$$typeof:Vo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vo}function d0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kd=/\/+/g;function hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d0(""+e.key):t.toString(36)}function bl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vo:case e0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+hs(l,0):r,wd(i)?(n="",e!=null&&(n=e.replace(kd,"$&/")+"/"),bl(i,t,n,"",function(u){return u})):i!=null&&(Bc(i)&&(i=f0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(kd,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",wd(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+hs(o,a);l+=bl(o,t,n,s,i)}else if(s=c0(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+hs(o,a++),l+=bl(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Zo(e,t,n){if(e==null)return e;var r=[],i=0;return bl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function p0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},Sl={transition:null},h0={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Mc};function bg(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Zo,forEach:function(e,t,n){Zo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zo(e,function(){t++}),t},toArray:function(e){return Zo(e,function(t){return t})||[]},only:function(e){if(!Bc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Si;re.Fragment=t0;re.Profiler=r0;re.PureComponent=jc;re.StrictMode=n0;re.Suspense=a0;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0;re.act=bg;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mg({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Mc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)xg.call(t,s)&&!wg.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vo,type:e.type,key:i,ref:o,props:r,_owner:l}};re.createContext=function(e){return e={$$typeof:o0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i0,_context:e},e.Consumer=e};re.createElement=kg;re.createFactory=function(e){var t=kg.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:l0,render:e}};re.isValidElement=Bc;re.lazy=function(e){return{$$typeof:u0,_payload:{_status:-1,_result:e},_init:p0}};re.memo=function(e,t){return{$$typeof:s0,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Sl.transition;Sl.transition={};try{e()}finally{Sl.transition=t}};re.unstable_act=bg;re.useCallback=function(e,t){return it.current.useCallback(e,t)};re.useContext=function(e){return it.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return it.current.useDeferredValue(e)};re.useEffect=function(e,t){return it.current.useEffect(e,t)};re.useId=function(){return it.current.useId()};re.useImperativeHandle=function(e,t,n){return it.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return it.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return it.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return it.current.useMemo(e,t)};re.useReducer=function(e,t,n){return it.current.useReducer(e,t,n)};re.useRef=function(e){return it.current.useRef(e)};re.useState=function(e){return it.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return it.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return it.current.useTransition()};re.version="18.3.1";hg.exports=re;var T=hg.exports;const Oe=Dc(T),g0=Zy({__proto__:null,default:Oe},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0=T,v0=Symbol.for("react.element"),y0=Symbol.for("react.fragment"),x0=Object.prototype.hasOwnProperty,w0=m0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k0={key:!0,ref:!0,__self:!0,__source:!0};function Sg(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)x0.call(t,r)&&!k0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:v0,type:e,key:o,ref:l,props:i,_owner:w0.current}}Ta.Fragment=y0;Ta.jsx=Sg;Ta.jsxs=Sg;pg.exports=Ta;var O=pg.exports,hu={},Cg={exports:{}},Ct={},Eg={exports:{}},$g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,M){var x=D.length;D.push(M);e:for(;0<x;){var Y=x-1>>>1,Q=D[Y];if(0<i(Q,M))D[Y]=M,D[x]=Q,x=Y;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var M=D[0],x=D.pop();if(x!==M){D[0]=x;e:for(var Y=0,Q=D.length,S=Q>>>1;Y<S;){var pe=2*(Y+1)-1,B=D[pe],H=pe+1,K=D[H];if(0>i(B,x))H<Q&&0>i(K,B)?(D[Y]=K,D[H]=x,Y=H):(D[Y]=B,D[pe]=x,Y=pe);else if(H<Q&&0>i(K,x))D[Y]=K,D[H]=x,Y=H;else break e}}return M}function i(D,M){var x=D.sortIndex-M.sortIndex;return x!==0?x:D.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,c=null,d=3,p=!1,g=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=D)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function w(D){if(y=!1,v(D),!g)if(n(s)!==null)g=!0,fe(P);else{var M=n(u);M!==null&&ae(w,M.startTime-D)}}function P(D,M){g=!1,y&&(y=!1,h(z),z=-1),p=!0;var x=d;try{for(v(M),c=n(s);c!==null&&(!(c.expirationTime>M)||D&&!I());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,d=c.priorityLevel;var Q=Y(c.expirationTime<=M);M=e.unstable_now(),typeof Q=="function"?c.callback=Q:c===n(s)&&r(s),v(M)}else r(s);c=n(s)}if(c!==null)var S=!0;else{var pe=n(u);pe!==null&&ae(w,pe.startTime-M),S=!1}return S}finally{c=null,d=x,p=!1}}var k=!1,b=null,z=-1,A=5,$=-1;function I(){return!(e.unstable_now()-$<A)}function N(){if(b!==null){var D=e.unstable_now();$=D;var M=!0;try{M=b(!0,D)}finally{M?V():(k=!1,b=null)}}else k=!1}var V;if(typeof m=="function")V=function(){m(N)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=N,V=function(){q.postMessage(null)}}else V=function(){E(N,0)};function fe(D){b=D,k||(k=!0,V())}function ae(D,M){z=E(function(){D(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,fe(P))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(D){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var x=d;d=M;try{return D()}finally{d=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,M){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var x=d;d=D;try{return M()}finally{d=x}},e.unstable_scheduleCallback=function(D,M,x){var Y=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?Y+x:Y):x=Y,D){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=x+Q,D={id:f++,callback:M,priorityLevel:D,startTime:x,expirationTime:Q,sortIndex:-1},x>Y?(D.sortIndex=x,t(u,D),n(s)===null&&D===n(u)&&(y?(h(z),z=-1):y=!0,ae(w,x-Y))):(D.sortIndex=Q,t(s,D),g||p||(g=!0,fe(P))),D},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(D){var M=d;return function(){var x=d;d=M;try{return D.apply(this,arguments)}finally{d=x}}}})($g);Eg.exports=$g;var b0=Eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=T,St=b0;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zg=new Set,yo={};function _r(e,t){ai(e,t),ai(e+"Capture",t)}function ai(e,t){for(yo[e]=t,e=0;e<t.length;e++)zg.add(t[e])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bd={},Sd={};function E0(e){return gu.call(Sd,e)?!0:gu.call(bd,e)?!1:C0.test(e)?Sd[e]=!0:(bd[e]=!0,!1)}function $0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function z0(e,t,n,r){if(t===null||typeof t>"u"||$0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ot(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uc=/[\-:]([a-z])/g;function Hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uc,Hc);Ye[t]=new ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uc,Hc);Ye[t]=new ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uc,Hc);Ye[t]=new ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vc(e,t,n,r){var i=Ye.hasOwnProperty(t)?Ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(z0(t,n,i,r)&&(n=null),r||i===null?E0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Sn=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Ig=Symbol.for("react.context"),Gc=Symbol.for("react.forward_ref"),vu=Symbol.for("react.suspense"),yu=Symbol.for("react.suspense_list"),Qc=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),_g=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function Li(e){return e===null||typeof e!="object"?null:(e=Cd&&e[Cd]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Object.assign,gs;function Wi(e){if(gs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);gs=t&&t[1]||""}return`
`+gs+e}var ms=!1;function vs(e,t){if(!e||ms)return"";ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ms=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wi(e):""}function P0(e){switch(e.tag){case 5:return Wi(e.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return e=vs(e.type,!1),e;case 11:return e=vs(e.type.render,!1),e;case 1:return e=vs(e.type,!0),e;default:return""}}function xu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ur:return"Fragment";case Br:return"Portal";case mu:return"Profiler";case Wc:return"StrictMode";case vu:return"Suspense";case yu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ig:return(e.displayName||"Context")+".Consumer";case Pg:return(e._context.displayName||"Context")+".Provider";case Gc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qc:return t=e.displayName||null,t!==null?t:xu(e.type)||"Memo";case In:t=e._payload,e=e._init;try{return xu(e(t))}catch{}}return null}function I0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xu(t);case 8:return t===Wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _0(e){var t=Tg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tl(e){e._valueTracker||(e._valueTracker=_0(e))}function Ag(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Tg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wu(e,t){var n=t.checked;return ze({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ed(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rg(e,t){t=t.checked,t!=null&&Vc(e,"checked",t,!1)}function ku(e,t){Rg(e,t);var n=Yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bu(e,t.type,n):t.hasOwnProperty("defaultValue")&&bu(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $d(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bu(e,t,n){(t!=="number"||Ql(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gi=Array.isArray;function Zr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Su(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ze({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Gi(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yn(n)}}function Lg(e,t){var n=Yn(t.value),r=Yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ng(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ng(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nl,Og=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T0=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){T0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function Dg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function jg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var A0=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function $u(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pu=null,ei=null,ti=null;function Id(e){if(e=Qo(e)){if(typeof Pu!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Oa(t),Pu(e.stateNode,e.type,t))}}function Fg(e){ei?ti?ti.push(e):ti=[e]:ei=e}function Mg(){if(ei){var e=ei,t=ti;if(ti=ei=null,Id(e),t)for(e=0;e<t.length;e++)Id(t[e])}}function Bg(e,t){return e(t)}function Ug(){}var ys=!1;function Hg(e,t,n){if(ys)return e(t,n);ys=!0;try{return Bg(e,t,n)}finally{ys=!1,(ei!==null||ti!==null)&&(Ug(),Mg())}}function wo(e,t){var n=e.stateNode;if(n===null)return null;var r=Oa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Iu=!1;if(xn)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Iu=!1}function R0(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var to=!1,Yl=null,ql=!1,_u=null,L0={onError:function(e){to=!0,Yl=e}};function N0(e,t,n,r,i,o,l,a,s){to=!1,Yl=null,R0.apply(L0,arguments)}function O0(e,t,n,r,i,o,l,a,s){if(N0.apply(this,arguments),to){if(to){var u=Yl;to=!1,Yl=null}else throw Error(R(198));ql||(ql=!0,_u=u)}}function Tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _d(e){if(Tr(e)!==e)throw Error(R(188))}function D0(e){var t=e.alternate;if(!t){if(t=Tr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _d(i),e;if(o===r)return _d(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Wg(e){return e=D0(e),e!==null?Gg(e):null}function Gg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gg(e);if(t!==null)return t;e=e.sibling}return null}var Qg=St.unstable_scheduleCallback,Td=St.unstable_cancelCallback,j0=St.unstable_shouldYield,F0=St.unstable_requestPaint,Ie=St.unstable_now,M0=St.unstable_getCurrentPriorityLevel,qc=St.unstable_ImmediatePriority,Yg=St.unstable_UserBlockingPriority,Kl=St.unstable_NormalPriority,B0=St.unstable_LowPriority,qg=St.unstable_IdlePriority,Aa=null,nn=null;function U0(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Aa,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:W0,H0=Math.log,V0=Math.LN2;function W0(e){return e>>>=0,e===0?32:31-(H0(e)/V0|0)|0}var rl=64,il=4194304;function Qi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Qi(a):(o&=l,o!==0&&(r=Qi(o)))}else l=n&~i,l!==0?r=Qi(l):o!==0&&(r=Qi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),i=1<<n,r|=e[n],t&=~i;return r}function G0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Gt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=G0(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Tu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kg(){var e=rl;return rl<<=1,!(rl&4194240)&&(rl=64),e}function xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function Y0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Gt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Kc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var de=0;function Xg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jg,Xc,Zg,em,tm,Au=!1,ol=[],jn=null,Fn=null,Mn=null,ko=new Map,bo=new Map,Tn=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(t.pointerId)}}function Oi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Qo(t),t!==null&&Xc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function K0(e,t,n,r,i){switch(t){case"focusin":return jn=Oi(jn,e,t,n,r,i),!0;case"dragenter":return Fn=Oi(Fn,e,t,n,r,i),!0;case"mouseover":return Mn=Oi(Mn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ko.set(o,Oi(ko.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bo.set(o,Oi(bo.get(o)||null,e,t,n,r,i)),!0}return!1}function nm(e){var t=cr(e.target);if(t!==null){var n=Tr(t);if(n!==null){if(t=n.tag,t===13){if(t=Vg(n),t!==null){e.blockedOn=t,tm(e.priority,function(){Zg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ru(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zu=r,n.target.dispatchEvent(r),zu=null}else return t=Qo(n),t!==null&&Xc(t),e.blockedOn=n,!1;t.shift()}return!0}function Rd(e,t,n){Cl(e)&&n.delete(t)}function X0(){Au=!1,jn!==null&&Cl(jn)&&(jn=null),Fn!==null&&Cl(Fn)&&(Fn=null),Mn!==null&&Cl(Mn)&&(Mn=null),ko.forEach(Rd),bo.forEach(Rd)}function Di(e,t){e.blockedOn===t&&(e.blockedOn=null,Au||(Au=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,X0)))}function So(e){function t(i){return Di(i,e)}if(0<ol.length){Di(ol[0],e);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&Di(jn,e),Fn!==null&&Di(Fn,e),Mn!==null&&Di(Mn,e),ko.forEach(t),bo.forEach(t),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)nm(n),n.blockedOn===null&&Tn.shift()}var ni=Sn.ReactCurrentBatchConfig,Jl=!0;function J0(e,t,n,r){var i=de,o=ni.transition;ni.transition=null;try{de=1,Jc(e,t,n,r)}finally{de=i,ni.transition=o}}function Z0(e,t,n,r){var i=de,o=ni.transition;ni.transition=null;try{de=4,Jc(e,t,n,r)}finally{de=i,ni.transition=o}}function Jc(e,t,n,r){if(Jl){var i=Ru(e,t,n,r);if(i===null)Is(e,t,r,Zl,n),Ad(e,r);else if(K0(i,e,t,n,r))r.stopPropagation();else if(Ad(e,r),t&4&&-1<q0.indexOf(e)){for(;i!==null;){var o=Qo(i);if(o!==null&&Jg(o),o=Ru(e,t,n,r),o===null&&Is(e,t,r,Zl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Is(e,t,r,null,n)}}var Zl=null;function Ru(e,t,n,r){if(Zl=null,e=Yc(r),e=cr(e),e!==null)if(t=Tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zl=e,null}function rm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M0()){case qc:return 1;case Yg:return 4;case Kl:case B0:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Rn=null,Zc=null,El=null;function im(){if(El)return El;var e,t=Zc,n=t.length,r,i="value"in Rn?Rn.value:Rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return El=i.slice(e,1<r?1-r:void 0)}function $l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function Ld(){return!1}function Et(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ll:Ld,this.isPropagationStopped=Ld,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),t}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Et(Ci),Go=ze({},Ci,{view:0,detail:0}),ex=Et(Go),ws,ks,ji,Ra=ze({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(ws=e.screenX-ji.screenX,ks=e.screenY-ji.screenY):ks=ws=0,ji=e),ws)},movementY:function(e){return"movementY"in e?e.movementY:ks}}),Nd=Et(Ra),tx=ze({},Ra,{dataTransfer:0}),nx=Et(tx),rx=ze({},Go,{relatedTarget:0}),bs=Et(rx),ix=ze({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=Et(ix),lx=ze({},Ci,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ax=Et(lx),sx=ze({},Ci,{data:0}),Od=Et(sx),ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fx[e])?!!t[e]:!1}function tf(){return dx}var px=ze({},Go,{key:function(e){if(e.key){var t=ux[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hx=Et(px),gx=ze({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=Et(gx),mx=ze({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),vx=Et(mx),yx=ze({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),xx=Et(yx),wx=ze({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=Et(wx),bx=[9,13,27,32],nf=xn&&"CompositionEvent"in window,no=null;xn&&"documentMode"in document&&(no=document.documentMode);var Sx=xn&&"TextEvent"in window&&!no,om=xn&&(!nf||no&&8<no&&11>=no),jd=" ",Fd=!1;function lm(e,t){switch(e){case"keyup":return bx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function Cx(e,t){switch(e){case"compositionend":return am(t);case"keypress":return t.which!==32?null:(Fd=!0,jd);case"textInput":return e=t.data,e===jd&&Fd?null:e;default:return null}}function Ex(e,t){if(Hr)return e==="compositionend"||!nf&&lm(e,t)?(e=im(),El=Zc=Rn=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return om&&t.locale!=="ko"?null:t.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$x[e.type]:t==="textarea"}function sm(e,t,n,r){Fg(r),t=ea(t,"onChange"),0<t.length&&(n=new ef("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ro=null,Co=null;function zx(e){xm(e,0)}function La(e){var t=Gr(e);if(Ag(t))return e}function Px(e,t){if(e==="change")return t}var um=!1;if(xn){var Ss;if(xn){var Cs="oninput"in document;if(!Cs){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),Cs=typeof Bd.oninput=="function"}Ss=Cs}else Ss=!1;um=Ss&&(!document.documentMode||9<document.documentMode)}function Ud(){ro&&(ro.detachEvent("onpropertychange",cm),Co=ro=null)}function cm(e){if(e.propertyName==="value"&&La(Co)){var t=[];sm(t,Co,e,Yc(e)),Hg(zx,t)}}function Ix(e,t,n){e==="focusin"?(Ud(),ro=t,Co=n,ro.attachEvent("onpropertychange",cm)):e==="focusout"&&Ud()}function _x(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return La(Co)}function Tx(e,t){if(e==="click")return La(t)}function Ax(e,t){if(e==="input"||e==="change")return La(t)}function Rx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:Rx;function Eo(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gu.call(t,i)||!Xt(e[i],t[i]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,t){var n=Hd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hd(n)}}function fm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dm(){for(var e=window,t=Ql();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ql(e.document)}return t}function rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Lx(e){var t=dm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fm(n.ownerDocument.documentElement,n)){if(r!==null&&rf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Vd(n,o);var l=Vd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nx=xn&&"documentMode"in document&&11>=document.documentMode,Vr=null,Lu=null,io=null,Nu=!1;function Wd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nu||Vr==null||Vr!==Ql(r)||(r=Vr,"selectionStart"in r&&rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&Eo(io,r)||(io=r,r=ea(Lu,"onSelect"),0<r.length&&(t=new ef("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function al(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wr={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Es={},pm={};xn&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Na(e){if(Es[e])return Es[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pm)return Es[e]=t[n];return e}var hm=Na("animationend"),gm=Na("animationiteration"),mm=Na("animationstart"),vm=Na("transitionend"),ym=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){ym.set(e,t),_r(t,[e])}for(var $s=0;$s<Gd.length;$s++){var zs=Gd[$s],Ox=zs.toLowerCase(),Dx=zs[0].toUpperCase()+zs.slice(1);Kn(Ox,"on"+Dx)}Kn(hm,"onAnimationEnd");Kn(gm,"onAnimationIteration");Kn(mm,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(vm,"onTransitionEnd");ai("onMouseEnter",["mouseout","mouseover"]);ai("onMouseLeave",["mouseout","mouseover"]);ai("onPointerEnter",["pointerout","pointerover"]);ai("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));function Qd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,O0(r,t,void 0,e),e.currentTarget=null}function xm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Qd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Qd(i,a,u),o=s}}}if(ql)throw e=_u,ql=!1,_u=null,e}function xe(e,t){var n=t[Mu];n===void 0&&(n=t[Mu]=new Set);var r=e+"__bubble";n.has(r)||(wm(t,e,2,!1),n.add(r))}function Ps(e,t,n){var r=0;t&&(r|=4),wm(n,e,r,t)}var sl="_reactListening"+Math.random().toString(36).slice(2);function $o(e){if(!e[sl]){e[sl]=!0,zg.forEach(function(n){n!=="selectionchange"&&(jx.has(n)||Ps(n,!1,e),Ps(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sl]||(t[sl]=!0,Ps("selectionchange",!1,t))}}function wm(e,t,n,r){switch(rm(t)){case 1:var i=J0;break;case 4:i=Z0;break;default:i=Jc}n=i.bind(null,t,n,e),i=void 0,!Iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Is(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=cr(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Hg(function(){var u=o,f=Yc(n),c=[];e:{var d=ym.get(e);if(d!==void 0){var p=ef,g=e;switch(e){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":p=hx;break;case"focusin":g="focus",p=bs;break;case"focusout":g="blur",p=bs;break;case"beforeblur":case"afterblur":p=bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=vx;break;case hm:case gm:case mm:p=ox;break;case vm:p=xx;break;case"scroll":p=ex;break;case"wheel":p=kx;break;case"copy":case"cut":case"paste":p=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dd}var y=(t&4)!==0,E=!y&&e==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var m=u,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=wo(m,h),w!=null&&y.push(zo(m,w,v)))),E)break;m=m.return}0<y.length&&(d=new p(d,g,null,n,f),c.push({event:d,listeners:y}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==zu&&(g=n.relatedTarget||n.fromElement)&&(cr(g)||g[wn]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?cr(g):null,g!==null&&(E=Tr(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Nd,w="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Dd,w="onPointerLeave",h="onPointerEnter",m="pointer"),E=p==null?d:Gr(p),v=g==null?d:Gr(g),d=new y(w,m+"leave",p,n,f),d.target=E,d.relatedTarget=v,w=null,cr(f)===u&&(y=new y(h,m+"enter",g,n,f),y.target=v,y.relatedTarget=E,w=y),E=w,p&&g)t:{for(y=p,h=g,m=0,v=y;v;v=Or(v))m++;for(v=0,w=h;w;w=Or(w))v++;for(;0<m-v;)y=Or(y),m--;for(;0<v-m;)h=Or(h),v--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=Or(y),h=Or(h)}y=null}else y=null;p!==null&&Yd(c,d,p,y,!1),g!==null&&E!==null&&Yd(c,E,g,y,!0)}}e:{if(d=u?Gr(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=Px;else if(Md(d))if(um)P=Ax;else{P=_x;var k=Ix}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=Tx);if(P&&(P=P(e,u))){sm(c,P,n,f);break e}k&&k(e,d,u),e==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&bu(d,"number",d.value)}switch(k=u?Gr(u):window,e){case"focusin":(Md(k)||k.contentEditable==="true")&&(Vr=k,Lu=u,io=null);break;case"focusout":io=Lu=Vr=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Wd(c,n,f);break;case"selectionchange":if(Nx)break;case"keydown":case"keyup":Wd(c,n,f)}var b;if(nf)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Hr?lm(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(om&&n.locale!=="ko"&&(Hr||z!=="onCompositionStart"?z==="onCompositionEnd"&&Hr&&(b=im()):(Rn=f,Zc="value"in Rn?Rn.value:Rn.textContent,Hr=!0)),k=ea(u,z),0<k.length&&(z=new Od(z,e,null,n,f),c.push({event:z,listeners:k}),b?z.data=b:(b=am(n),b!==null&&(z.data=b)))),(b=Sx?Cx(e,n):Ex(e,n))&&(u=ea(u,"onBeforeInput"),0<u.length&&(f=new Od("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=b))}xm(c,t)})}function zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wo(e,n),o!=null&&r.unshift(zo(e,o,i)),o=wo(e,t),o!=null&&r.push(zo(e,o,i))),e=e.return}return r}function Or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=wo(n,o),s!=null&&l.unshift(zo(n,s,a))):i||(s=wo(n,o),s!=null&&l.push(zo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Fx=/\r\n?/g,Mx=/\u0000|\uFFFD/g;function qd(e){return(typeof e=="string"?e:""+e).replace(Fx,`
`).replace(Mx,"")}function ul(e,t,n){if(t=qd(t),qd(e)!==t&&n)throw Error(R(425))}function ta(){}var Ou=null,Du=null;function ju(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,Ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(e){return Kd.resolve(null).then(e).catch(Hx)}:Fu;function Hx(e){setTimeout(function(){throw e})}function _s(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),So(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),tn="__reactFiber$"+Ei,Po="__reactProps$"+Ei,wn="__reactContainer$"+Ei,Mu="__reactEvents$"+Ei,Vx="__reactListeners$"+Ei,Wx="__reactHandles$"+Ei;function cr(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wn]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xd(e);e!==null;){if(n=e[tn])return n;e=Xd(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){return e=e[tn]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Oa(e){return e[Po]||null}var Bu=[],Qr=-1;function Xn(e){return{current:e}}function be(e){0>Qr||(e.current=Bu[Qr],Bu[Qr]=null,Qr--)}function ye(e,t){Qr++,Bu[Qr]=e.current,e.current=t}var qn={},Ze=Xn(qn),ft=Xn(!1),yr=qn;function si(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function dt(e){return e=e.childContextTypes,e!=null}function na(){be(ft),be(Ze)}function Jd(e,t,n){if(Ze.current!==qn)throw Error(R(168));ye(Ze,t),ye(ft,n)}function km(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,I0(e)||"Unknown",i));return ze({},n,r)}function ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,yr=Ze.current,ye(Ze,e),ye(ft,ft.current),!0}function Zd(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=km(e,t,yr),r.__reactInternalMemoizedMergedChildContext=e,be(ft),be(Ze),ye(Ze,e)):be(ft),ye(ft,n)}var gn=null,Da=!1,Ts=!1;function bm(e){gn===null?gn=[e]:gn.push(e)}function Gx(e){Da=!0,bm(e)}function Jn(){if(!Ts&&gn!==null){Ts=!0;var e=0,t=de;try{var n=gn;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gn=null,Da=!1}catch(i){throw gn!==null&&(gn=gn.slice(e+1)),Qg(qc,Jn),i}finally{de=t,Ts=!1}}return null}var Yr=[],qr=0,ia=null,oa=0,Pt=[],It=0,xr=null,mn=1,vn="";function rr(e,t){Yr[qr++]=oa,Yr[qr++]=ia,ia=e,oa=t}function Sm(e,t,n){Pt[It++]=mn,Pt[It++]=vn,Pt[It++]=xr,xr=e;var r=mn;e=vn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var o=32-Gt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,mn=1<<32-Gt(t)+i|n<<i|r,vn=o+e}else mn=1<<o|n<<i|r,vn=e}function of(e){e.return!==null&&(rr(e,1),Sm(e,1,0))}function lf(e){for(;e===ia;)ia=Yr[--qr],Yr[qr]=null,oa=Yr[--qr],Yr[qr]=null;for(;e===xr;)xr=Pt[--It],Pt[It]=null,vn=Pt[--It],Pt[It]=null,mn=Pt[--It],Pt[It]=null}var kt=null,wt=null,Ce=!1,Vt=null;function Cm(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ep(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,wt=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:mn,overflow:vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,wt=null,!0):!1;default:return!1}}function Uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hu(e){if(Ce){var t=wt;if(t){var n=t;if(!ep(e,t)){if(Uu(e))throw Error(R(418));t=Bn(n.nextSibling);var r=kt;t&&ep(e,t)?Cm(r,n):(e.flags=e.flags&-4097|2,Ce=!1,kt=e)}}else{if(Uu(e))throw Error(R(418));e.flags=e.flags&-4097|2,Ce=!1,kt=e}}}function tp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function cl(e){if(e!==kt)return!1;if(!Ce)return tp(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ju(e.type,e.memoizedProps)),t&&(t=wt)){if(Uu(e))throw Em(),Error(R(418));for(;t;)Cm(e,t),t=Bn(t.nextSibling)}if(tp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=kt?Bn(e.stateNode.nextSibling):null;return!0}function Em(){for(var e=wt;e;)e=Bn(e.nextSibling)}function ui(){wt=kt=null,Ce=!1}function af(e){Vt===null?Vt=[e]:Vt.push(e)}var Qx=Sn.ReactCurrentBatchConfig;function Fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function fl(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function np(e){var t=e._init;return t(e._payload)}function $m(e){function t(h,m){if(e){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=Wn(h,m),h.index=0,h.sibling=null,h}function o(h,m,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,m,v,w){return m===null||m.tag!==6?(m=js(v,h.mode,w),m.return=h,m):(m=i(m,v),m.return=h,m)}function s(h,m,v,w){var P=v.type;return P===Ur?f(h,m,v.props.children,w,v.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===In&&np(P)===m.type)?(w=i(m,v.props),w.ref=Fi(h,m,v),w.return=h,w):(w=Rl(v.type,v.key,v.props,null,h.mode,w),w.ref=Fi(h,m,v),w.return=h,w)}function u(h,m,v,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Fs(v,h.mode,w),m.return=h,m):(m=i(m,v.children||[]),m.return=h,m)}function f(h,m,v,w,P){return m===null||m.tag!==7?(m=mr(v,h.mode,w,P),m.return=h,m):(m=i(m,v),m.return=h,m)}function c(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=js(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case el:return v=Rl(m.type,m.key,m.props,null,h.mode,v),v.ref=Fi(h,null,m),v.return=h,v;case Br:return m=Fs(m,h.mode,v),m.return=h,m;case In:var w=m._init;return c(h,w(m._payload),v)}if(Gi(m)||Li(m))return m=mr(m,h.mode,v,null),m.return=h,m;fl(h,m)}return null}function d(h,m,v,w){var P=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(h,m,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case el:return v.key===P?s(h,m,v,w):null;case Br:return v.key===P?u(h,m,v,w):null;case In:return P=v._init,d(h,m,P(v._payload),w)}if(Gi(v)||Li(v))return P!==null?null:f(h,m,v,w,null);fl(h,v)}return null}function p(h,m,v,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,a(m,h,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case el:return h=h.get(w.key===null?v:w.key)||null,s(m,h,w,P);case Br:return h=h.get(w.key===null?v:w.key)||null,u(m,h,w,P);case In:var k=w._init;return p(h,m,v,k(w._payload),P)}if(Gi(w)||Li(w))return h=h.get(v)||null,f(m,h,w,P,null);fl(m,w)}return null}function g(h,m,v,w){for(var P=null,k=null,b=m,z=m=0,A=null;b!==null&&z<v.length;z++){b.index>z?(A=b,b=null):A=b.sibling;var $=d(h,b,v[z],w);if($===null){b===null&&(b=A);break}e&&b&&$.alternate===null&&t(h,b),m=o($,m,z),k===null?P=$:k.sibling=$,k=$,b=A}if(z===v.length)return n(h,b),Ce&&rr(h,z),P;if(b===null){for(;z<v.length;z++)b=c(h,v[z],w),b!==null&&(m=o(b,m,z),k===null?P=b:k.sibling=b,k=b);return Ce&&rr(h,z),P}for(b=r(h,b);z<v.length;z++)A=p(b,h,z,v[z],w),A!==null&&(e&&A.alternate!==null&&b.delete(A.key===null?z:A.key),m=o(A,m,z),k===null?P=A:k.sibling=A,k=A);return e&&b.forEach(function(I){return t(h,I)}),Ce&&rr(h,z),P}function y(h,m,v,w){var P=Li(v);if(typeof P!="function")throw Error(R(150));if(v=P.call(v),v==null)throw Error(R(151));for(var k=P=null,b=m,z=m=0,A=null,$=v.next();b!==null&&!$.done;z++,$=v.next()){b.index>z?(A=b,b=null):A=b.sibling;var I=d(h,b,$.value,w);if(I===null){b===null&&(b=A);break}e&&b&&I.alternate===null&&t(h,b),m=o(I,m,z),k===null?P=I:k.sibling=I,k=I,b=A}if($.done)return n(h,b),Ce&&rr(h,z),P;if(b===null){for(;!$.done;z++,$=v.next())$=c(h,$.value,w),$!==null&&(m=o($,m,z),k===null?P=$:k.sibling=$,k=$);return Ce&&rr(h,z),P}for(b=r(h,b);!$.done;z++,$=v.next())$=p(b,h,z,$.value,w),$!==null&&(e&&$.alternate!==null&&b.delete($.key===null?z:$.key),m=o($,m,z),k===null?P=$:k.sibling=$,k=$);return e&&b.forEach(function(N){return t(h,N)}),Ce&&rr(h,z),P}function E(h,m,v,w){if(typeof v=="object"&&v!==null&&v.type===Ur&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case el:e:{for(var P=v.key,k=m;k!==null;){if(k.key===P){if(P=v.type,P===Ur){if(k.tag===7){n(h,k.sibling),m=i(k,v.props.children),m.return=h,h=m;break e}}else if(k.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===In&&np(P)===k.type){n(h,k.sibling),m=i(k,v.props),m.ref=Fi(h,k,v),m.return=h,h=m;break e}n(h,k);break}else t(h,k);k=k.sibling}v.type===Ur?(m=mr(v.props.children,h.mode,w,v.key),m.return=h,h=m):(w=Rl(v.type,v.key,v.props,null,h.mode,w),w.ref=Fi(h,m,v),w.return=h,h=w)}return l(h);case Br:e:{for(k=v.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=i(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=Fs(v,h.mode,w),m.return=h,h=m}return l(h);case In:return k=v._init,E(h,m,k(v._payload),w)}if(Gi(v))return g(h,m,v,w);if(Li(v))return y(h,m,v,w);fl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=i(m,v),m.return=h,h=m):(n(h,m),m=js(v,h.mode,w),m.return=h,h=m),l(h)):n(h,m)}return E}var ci=$m(!0),zm=$m(!1),la=Xn(null),aa=null,Kr=null,sf=null;function uf(){sf=Kr=aa=null}function cf(e){var t=la.current;be(la),e._currentValue=t}function Vu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ri(e,t){aa=e,sf=Kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(sf!==e)if(e={context:e,memoizedValue:t,next:null},Kr===null){if(aa===null)throw Error(R(308));Kr=e,aa.dependencies={lanes:0,firstContext:e}}else Kr=Kr.next=e;return t}var fr=null;function ff(e){fr===null?fr=[e]:fr.push(e)}function Pm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ff(t)):(n.next=i.next,i.next=n),t.interleaved=n,kn(e,r)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _n=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Im(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kn(e,n)}return i=r.interleaved,i===null?(t.next=t,ff(r)):(t.next=i.next,i.next=t),r.interleaved=t,kn(e,n)}function zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kc(e,n)}}function rp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sa(e,t,n,r){var i=e.updateQueue;_n=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,f=u=s=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(d=t,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){c=g.call(p,c,d);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,c,d):g,d==null)break e;c=ze({},c,d);break e;case 2:_n=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,s=c):f=f.next=p,l|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);kr|=l,e.lanes=l,e.memoizedState=c}}function ip(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Yo={},rn=Xn(Yo),Io=Xn(Yo),_o=Xn(Yo);function dr(e){if(e===Yo)throw Error(R(174));return e}function pf(e,t){switch(ye(_o,t),ye(Io,e),ye(rn,Yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cu(t,e)}be(rn),ye(rn,t)}function fi(){be(rn),be(Io),be(_o)}function _m(e){dr(_o.current);var t=dr(rn.current),n=Cu(t,e.type);t!==n&&(ye(Io,e),ye(rn,n))}function hf(e){Io.current===e&&(be(rn),be(Io))}var Ee=Xn(0);function ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var As=[];function gf(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var Pl=Sn.ReactCurrentDispatcher,Rs=Sn.ReactCurrentBatchConfig,wr=0,$e=null,je=null,Ue=null,ca=!1,oo=!1,To=0,Yx=0;function qe(){throw Error(R(321))}function mf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}function vf(e,t,n,r,i,o){if(wr=o,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pl.current=e===null||e.memoizedState===null?Jx:Zx,e=n(r,i),oo){o=0;do{if(oo=!1,To=0,25<=o)throw Error(R(301));o+=1,Ue=je=null,t.updateQueue=null,Pl.current=ew,e=n(r,i)}while(oo)}if(Pl.current=fa,t=je!==null&&je.next!==null,wr=0,Ue=je=$e=null,ca=!1,t)throw Error(R(300));return e}function yf(){var e=To!==0;return To=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?$e.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Lt(){if(je===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ue===null?$e.memoizedState:Ue.next;if(t!==null)Ue=t,je=e;else{if(e===null)throw Error(R(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ue===null?$e.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ao(e,t){return typeof t=="function"?t(e):t}function Ls(e){var t=Lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var f=u.lane;if((wr&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,$e.lanes|=f,kr|=f}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Xt(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,$e.lanes|=o,kr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ns(e){var t=Lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Xt(o,t.memoizedState)||(ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Tm(){}function Am(e,t){var n=$e,r=Lt(),i=t(),o=!Xt(r.memoizedState,i);if(o&&(r.memoizedState=i,ut=!0),r=r.queue,xf(Nm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ro(9,Lm.bind(null,n,r,i,t),void 0,null),Ve===null)throw Error(R(349));wr&30||Rm(n,t,i)}return i}function Rm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lm(e,t,n,r){t.value=n,t.getSnapshot=r,Om(t)&&Dm(e)}function Nm(e,t,n){return n(function(){Om(t)&&Dm(e)})}function Om(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xt(e,n)}catch{return!0}}function Dm(e){var t=kn(e,1);t!==null&&Qt(t,e,1,-1)}function op(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:e},t.queue=e,e=e.dispatch=Xx.bind(null,$e,e),[t.memoizedState,e]}function Ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jm(){return Lt().memoizedState}function Il(e,t,n,r){var i=Zt();$e.flags|=e,i.memoizedState=Ro(1|t,n,void 0,r===void 0?null:r)}function ja(e,t,n,r){var i=Lt();r=r===void 0?null:r;var o=void 0;if(je!==null){var l=je.memoizedState;if(o=l.destroy,r!==null&&mf(r,l.deps)){i.memoizedState=Ro(t,n,o,r);return}}$e.flags|=e,i.memoizedState=Ro(1|t,n,o,r)}function lp(e,t){return Il(8390656,8,e,t)}function xf(e,t){return ja(2048,8,e,t)}function Fm(e,t){return ja(4,2,e,t)}function Mm(e,t){return ja(4,4,e,t)}function Bm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Um(e,t,n){return n=n!=null?n.concat([e]):null,ja(4,4,Bm.bind(null,t,e),n)}function wf(){}function Hm(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vm(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wm(e,t,n){return wr&21?(Xt(n,t)||(n=Kg(),$e.lanes|=n,kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function qx(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=Rs.transition;Rs.transition={};try{e(!1),t()}finally{de=n,Rs.transition=r}}function Gm(){return Lt().memoizedState}function Kx(e,t,n){var r=Vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qm(e))Ym(t,n);else if(n=Pm(e,t,n,r),n!==null){var i=rt();Qt(n,e,r,i),qm(n,t,r)}}function Xx(e,t,n){var r=Vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qm(e))Ym(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Xt(a,l)){var s=t.interleaved;s===null?(i.next=i,ff(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Pm(e,t,i,r),n!==null&&(i=rt(),Qt(n,e,r,i),qm(n,t,r))}}function Qm(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function Ym(e,t){oo=ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kc(e,n)}}var fa={readContext:Rt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Jx={readContext:Rt,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:lp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Il(4194308,4,Bm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Il(4194308,4,e,t)},useInsertionEffect:function(e,t){return Il(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kx.bind(null,$e,e),[r.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:op,useDebugValue:wf,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=op(!1),t=e[0];return e=qx.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$e,i=Zt();if(Ce){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ve===null)throw Error(R(349));wr&30||Rm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,lp(Nm.bind(null,r,o,e),[e]),r.flags|=2048,Ro(9,Lm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Zt(),t=Ve.identifierPrefix;if(Ce){var n=vn,r=mn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=To++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zx={readContext:Rt,useCallback:Hm,useContext:Rt,useEffect:xf,useImperativeHandle:Um,useInsertionEffect:Fm,useLayoutEffect:Mm,useMemo:Vm,useReducer:Ls,useRef:jm,useState:function(){return Ls(Ao)},useDebugValue:wf,useDeferredValue:function(e){var t=Lt();return Wm(t,je.memoizedState,e)},useTransition:function(){var e=Ls(Ao)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Tm,useSyncExternalStore:Am,useId:Gm,unstable_isNewReconciler:!1},ew={readContext:Rt,useCallback:Hm,useContext:Rt,useEffect:xf,useImperativeHandle:Um,useInsertionEffect:Fm,useLayoutEffect:Mm,useMemo:Vm,useReducer:Ns,useRef:jm,useState:function(){return Ns(Ao)},useDebugValue:wf,useDeferredValue:function(e){var t=Lt();return je===null?t.memoizedState=e:Wm(t,je.memoizedState,e)},useTransition:function(){var e=Ns(Ao)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Tm,useSyncExternalStore:Am,useId:Gm,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=ze({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Wu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fa={isMounted:function(e){return(e=e._reactInternals)?Tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),i=Vn(e),o=yn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Un(e,o,i),t!==null&&(Qt(t,e,i,r),zl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),i=Vn(e),o=yn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Un(e,o,i),t!==null&&(Qt(t,e,i,r),zl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=Vn(e),i=yn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Un(e,i,r),t!==null&&(Qt(t,e,r,n),zl(t,e,r))}};function ap(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,o):!0}function Km(e,t,n){var r=!1,i=qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Rt(o):(i=dt(t)?yr:Ze.current,r=t.contextTypes,o=(r=r!=null)?si(e,i):qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function sp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fa.enqueueReplaceState(t,t.state,null)}function Gu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},df(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Rt(o):(o=dt(t)?yr:Ze.current,i.context=si(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Wu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fa.enqueueReplaceState(i,i.state,null),sa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function di(e,t){try{var n="",r=t;do n+=P0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tw=typeof WeakMap=="function"?WeakMap:Map;function Xm(e,t,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,rc=r),Qu(e,t)},n}function Jm(e,t,n){n=yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Qu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Qu(e,t),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function up(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gw.bind(null,e,t,n),t.then(e,e))}function cp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yn(-1,1),t.tag=2,Un(n,t,1))),n.lanes|=1),e)}var nw=Sn.ReactCurrentOwner,ut=!1;function tt(e,t,n,r){t.child=e===null?zm(t,null,n,r):ci(t,e.child,n,r)}function dp(e,t,n,r,i){n=n.render;var o=t.ref;return ri(t,i),r=vf(e,t,n,r,o,i),n=yf(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Ce&&n&&of(t),t.flags|=1,tt(e,t,r,i),t.child)}function pp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Pf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Zm(e,t,o,r,i)):(e=Rl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(l,r)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=Wn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Zm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Eo(o,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,bn(e,t,i)}return Yu(e,t,n,r,i)}function ev(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Jr,xt),xt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(Jr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ye(Jr,xt),xt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ye(Jr,xt),xt|=r;return tt(e,t,i,n),t.child}function tv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yu(e,t,n,r,i){var o=dt(n)?yr:Ze.current;return o=si(t,o),ri(t,i),n=vf(e,t,n,r,o,i),r=yf(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Ce&&r&&of(t),t.flags|=1,tt(e,t,n,i),t.child)}function hp(e,t,n,r,i){if(dt(n)){var o=!0;ra(t)}else o=!1;if(ri(t,i),t.stateNode===null)_l(e,t),Km(t,n,r),Gu(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=dt(n)?yr:Ze.current,u=si(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&sp(t,l,r,u),_n=!1;var d=t.memoizedState;l.state=d,sa(t,r,l,i),s=t.memoizedState,a!==r||d!==s||ft.current||_n?(typeof f=="function"&&(Wu(t,n,f,r),s=t.memoizedState),(a=_n||ap(t,n,a,r,d,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Im(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Mt(t.type,a),l.props=u,c=t.pendingProps,d=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Rt(s):(s=dt(n)?yr:Ze.current,s=si(t,s));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||d!==s)&&sp(t,l,r,s),_n=!1,d=t.memoizedState,l.state=d,sa(t,r,l,i);var g=t.memoizedState;a!==c||d!==g||ft.current||_n?(typeof p=="function"&&(Wu(t,n,p,r),g=t.memoizedState),(u=_n||ap(t,n,u,r,d,g,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return qu(e,t,n,r,o,i)}function qu(e,t,n,r,i,o){tv(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Zd(t,n,!1),bn(e,t,o);r=t.stateNode,nw.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ci(t,e.child,null,o),t.child=ci(t,null,a,o)):tt(e,t,a,o),t.memoizedState=r.state,i&&Zd(t,n,!0),t.child}function nv(e){var t=e.stateNode;t.pendingContext?Jd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jd(e,t.context,!1),pf(e,t.containerInfo)}function gp(e,t,n,r,i){return ui(),af(i),t.flags|=256,tt(e,t,n,r),t.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function rv(e,t,n){var r=t.pendingProps,i=Ee.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ye(Ee,i&1),e===null)return Hu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ua(l,r,0,null),e=mr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Xu(n),t.memoizedState=Ku,e):kf(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rw(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Wn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wn(a,o):(o=mr(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Xu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ku,r}return o=e.child,e=o.sibling,r=Wn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kf(e,t){return t=Ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,n,r){return r!==null&&af(r),ci(t,e.child,null,n),e=kf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rw(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Os(Error(R(422))),dl(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ua({mode:"visible",children:r.children},i,0,null),o=mr(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ci(t,e.child,null,l),t.child.memoizedState=Xu(l),t.memoizedState=Ku,o);if(!(t.mode&1))return dl(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(R(419)),r=Os(o,r,void 0),dl(e,t,l,r)}if(a=(l&e.childLanes)!==0,ut||a){if(r=Ve,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kn(e,i),Qt(r,e,i,-1))}return zf(),r=Os(Error(R(421))),dl(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=mw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,wt=Bn(i.nextSibling),kt=t,Ce=!0,Vt=null,e!==null&&(Pt[It++]=mn,Pt[It++]=vn,Pt[It++]=xr,mn=e.id,vn=e.overflow,xr=t),t=kf(t,r.children),t.flags|=4096,t)}function mp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vu(e.return,t,n)}function Ds(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function iv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(tt(e,t,r.children,n),r=Ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mp(e,n,t);else if(e.tag===19)mp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye(Ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ds(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ds(t,!0,n,null,o);break;case"together":Ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _l(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iw(e,t,n){switch(t.tag){case 3:nv(t),ui();break;case 5:_m(t);break;case 1:dt(t.type)&&ra(t);break;case 4:pf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ye(la,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ee,Ee.current&1),t.flags|=128,null):n&t.child.childLanes?rv(e,t,n):(ye(Ee,Ee.current&1),e=bn(e,t,n),e!==null?e.sibling:null);ye(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return iv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,ev(e,t,n)}return bn(e,t,n)}var ov,Ju,lv,av;ov=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ju=function(){};lv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dr(rn.current);var o=null;switch(n){case"input":i=wu(e,i),r=wu(e,r),o=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),o=[];break;case"textarea":i=Su(e,i),r=Su(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ta)}Eu(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&xe("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};av=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mi(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ow(e,t,n){var r=t.pendingProps;switch(lf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return dt(t.type)&&na(),Ke(t),null;case 3:return r=t.stateNode,fi(),be(ft),be(Ze),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(lc(Vt),Vt=null))),Ju(e,t),Ke(t),null;case 5:hf(t);var i=dr(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)lv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ke(t),null}if(e=dr(rn.current),cl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tn]=t,r[Po]=o,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Yi.length;i++)xe(Yi[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Ed(r,o),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},xe("invalid",r);break;case"textarea":zd(r,o),xe("invalid",r)}Eu(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ul(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ul(r.textContent,a,e),i=["children",""+a]):yo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&xe("scroll",r)}switch(n){case"input":tl(r),$d(r,o,!0);break;case"textarea":tl(r),Pd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ta)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ng(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[tn]=t,e[Po]=r,ov(e,t,!1,!1),t.stateNode=e;e:{switch(l=$u(n,r),n){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yi.length;i++)xe(Yi[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":Ed(e,r),i=wu(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),xe("invalid",e);break;case"textarea":zd(e,r),i=Su(e,r),xe("invalid",e);break;default:i=r}Eu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?jg(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Og(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xo(e,s):typeof s=="number"&&xo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&xe("scroll",e):s!=null&&Vc(e,o,s,l))}switch(n){case"input":tl(e),$d(e,r,!1);break;case"textarea":tl(e),Pd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Zr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)av(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=dr(_o.current),dr(rn.current),cl(t)){if(r=t.stateNode,n=t.memoizedProps,r[tn]=t,(o=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:ul(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=t,t.stateNode=r}return Ke(t),null;case 13:if(be(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&wt!==null&&t.mode&1&&!(t.flags&128))Em(),ui(),t.flags|=98560,o=!1;else if(o=cl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[tn]=t}else ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else Vt!==null&&(lc(Vt),Vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ee.current&1?Be===0&&(Be=3):zf())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return fi(),Ju(e,t),e===null&&$o(t.stateNode.containerInfo),Ke(t),null;case 10:return cf(t.type._context),Ke(t),null;case 17:return dt(t.type)&&na(),Ke(t),null;case 19:if(be(Ee),o=t.memoizedState,o===null)return Ke(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Mi(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ua(e),l!==null){for(t.flags|=128,Mi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>pi&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304)}else{if(!r)if(e=ua(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ce)return Ke(t),null}else 2*Ie()-o.renderingStartTime>pi&&n!==1073741824&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=Ee.current,ye(Ee,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return $f(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function lw(e,t){switch(lf(t),t.tag){case 1:return dt(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(),be(ft),be(Ze),gf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hf(t),null;case 13:if(be(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Ee),null;case 4:return fi(),null;case 10:return cf(t.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var pl=!1,Xe=!1,aw=typeof WeakSet=="function"?WeakSet:Set,U=null;function Xr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Zu(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var vp=!1;function sw(e,t){if(Ou=Jl,e=dm(),rf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,c=e,d=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(p=c.firstChild)!==null;)d=c,c=p;for(;;){if(c===e)break t;if(d===n&&++u===i&&(a=l),d===o&&++f===r&&(s=l),(p=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=p}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:e,selectionRange:n},Jl=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,E=g.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Mt(t.type,y),E);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){Pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=vp,vp=!1,g}function lo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zu(t,n,o)}i=i.next}while(i!==r)}}function Ma(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ec(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sv(e){var t=e.alternate;t!==null&&(e.alternate=null,sv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[Po],delete t[Mu],delete t[Vx],delete t[Wx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uv(e){return e.tag===5||e.tag===3||e.tag===4}function yp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ta));else if(r!==4&&(e=e.child,e!==null))for(tc(e,t,n),e=e.sibling;e!==null;)tc(e,t,n),e=e.sibling}function nc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nc(e,t,n),e=e.sibling;e!==null;)nc(e,t,n),e=e.sibling}var Ge=null,Bt=!1;function En(e,t,n){for(n=n.child;n!==null;)cv(e,t,n),n=n.sibling}function cv(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Aa,n)}catch{}switch(n.tag){case 5:Xe||Xr(n,t);case 6:var r=Ge,i=Bt;Ge=null,En(e,t,n),Ge=r,Bt=i,Ge!==null&&(Bt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Bt?(e=Ge,n=n.stateNode,e.nodeType===8?_s(e.parentNode,n):e.nodeType===1&&_s(e,n),So(e)):_s(Ge,n.stateNode));break;case 4:r=Ge,i=Bt,Ge=n.stateNode.containerInfo,Bt=!0,En(e,t,n),Ge=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Zu(n,t,l),i=i.next}while(i!==r)}En(e,t,n);break;case 1:if(!Xe&&(Xr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,t,a)}En(e,t,n);break;case 21:En(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,En(e,t,n),Xe=r):En(e,t,n);break;default:En(e,t,n)}}function xp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new aw),t.forEach(function(r){var i=vw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,Bt=!1;break e;case 3:Ge=a.stateNode.containerInfo,Bt=!0;break e;case 4:Ge=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(Ge===null)throw Error(R(160));cv(o,l,i),Ge=null,Bt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fv(t,e),t=t.sibling}function fv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Jt(e),r&4){try{lo(3,e,e.return),Ma(3,e)}catch(y){Pe(e,e.return,y)}try{lo(5,e,e.return)}catch(y){Pe(e,e.return,y)}}break;case 1:Ft(t,e),Jt(e),r&512&&n!==null&&Xr(n,n.return);break;case 5:if(Ft(t,e),Jt(e),r&512&&n!==null&&Xr(n,n.return),e.flags&32){var i=e.stateNode;try{xo(i,"")}catch(y){Pe(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Rg(i,o),$u(a,l);var u=$u(a,o);for(l=0;l<s.length;l+=2){var f=s[l],c=s[l+1];f==="style"?jg(i,c):f==="dangerouslySetInnerHTML"?Og(i,c):f==="children"?xo(i,c):Vc(i,f,c,u)}switch(a){case"input":ku(i,o);break;case"textarea":Lg(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Zr(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Zr(i,!!o.multiple,o.defaultValue,!0):Zr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Po]=o}catch(y){Pe(e,e.return,y)}}break;case 6:if(Ft(t,e),Jt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Pe(e,e.return,y)}}break;case 3:if(Ft(t,e),Jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(t.containerInfo)}catch(y){Pe(e,e.return,y)}break;case 4:Ft(t,e),Jt(e);break;case 13:Ft(t,e),Jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cf=Ie())),r&4&&xp(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||f,Ft(t,e),Xe=u):Ft(t,e),Jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(U=e,f=e.child;f!==null;){for(c=U=f;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:lo(4,d,d.return);break;case 1:Xr(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Pe(r,n,y)}}break;case 5:Xr(d,d.return);break;case 22:if(d.memoizedState!==null){kp(c);continue}}p!==null?(p.return=d,U=p):kp(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Dg("display",l))}catch(y){Pe(e,e.return,y)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){Pe(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ft(t,e),Jt(e),r&4&&xp(e);break;case 21:break;default:Ft(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uv(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xo(i,""),r.flags&=-33);var o=yp(e);nc(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=yp(e);tc(e,a,l);break;default:throw Error(R(161))}}catch(s){Pe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uw(e,t,n){U=e,dv(e)}function dv(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||pl;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Xe;a=pl;var u=Xe;if(pl=l,(Xe=s)&&!u)for(U=i;U!==null;)l=U,s=l.child,l.tag===22&&l.memoizedState!==null?bp(i):s!==null?(s.return=l,U=s):bp(i);for(;o!==null;)U=o,dv(o),o=o.sibling;U=i,pl=a,Xe=u}wp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):wp(e)}}function wp(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||Ma(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ip(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ip(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&So(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Xe||t.flags&512&&ec(t)}catch(d){Pe(t,t.return,d)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function kp(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function bp(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ma(4,t)}catch(s){Pe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Pe(t,i,s)}}var o=t.return;try{ec(t)}catch(s){Pe(t,o,s)}break;case 5:var l=t.return;try{ec(t)}catch(s){Pe(t,l,s)}}}catch(s){Pe(t,t.return,s)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var cw=Math.ceil,da=Sn.ReactCurrentDispatcher,bf=Sn.ReactCurrentOwner,At=Sn.ReactCurrentBatchConfig,le=0,Ve=null,Ne=null,Qe=0,xt=0,Jr=Xn(0),Be=0,Lo=null,kr=0,Ba=0,Sf=0,ao=null,st=null,Cf=0,pi=1/0,cn=null,pa=!1,rc=null,Hn=null,hl=!1,Ln=null,ha=0,so=0,ic=null,Tl=-1,Al=0;function rt(){return le&6?Ie():Tl!==-1?Tl:Tl=Ie()}function Vn(e){return e.mode&1?le&2&&Qe!==0?Qe&-Qe:Qx.transition!==null?(Al===0&&(Al=Kg()),Al):(e=de,e!==0||(e=window.event,e=e===void 0?16:rm(e.type)),e):1}function Qt(e,t,n,r){if(50<so)throw so=0,ic=null,Error(R(185));Wo(e,n,r),(!(le&2)||e!==Ve)&&(e===Ve&&(!(le&2)&&(Ba|=n),Be===4&&An(e,Qe)),pt(e,r),n===1&&le===0&&!(t.mode&1)&&(pi=Ie()+500,Da&&Jn()))}function pt(e,t){var n=e.callbackNode;Q0(e,t);var r=Xl(e,e===Ve?Qe:0);if(r===0)n!==null&&Td(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Td(n),t===1)e.tag===0?Gx(Sp.bind(null,e)):bm(Sp.bind(null,e)),Ux(function(){!(le&6)&&Jn()}),n=null;else{switch(Xg(r)){case 1:n=qc;break;case 4:n=Yg;break;case 16:n=Kl;break;case 536870912:n=qg;break;default:n=Kl}n=wv(n,pv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pv(e,t){if(Tl=-1,Al=0,le&6)throw Error(R(327));var n=e.callbackNode;if(ii()&&e.callbackNode!==n)return null;var r=Xl(e,e===Ve?Qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var i=le;le|=2;var o=gv();(Ve!==e||Qe!==t)&&(cn=null,pi=Ie()+500,gr(e,t));do try{pw();break}catch(a){hv(e,a)}while(!0);uf(),da.current=o,le=i,Ne!==null?t=0:(Ve=null,Qe=0,t=Be)}if(t!==0){if(t===2&&(i=Tu(e),i!==0&&(r=i,t=oc(e,i))),t===1)throw n=Lo,gr(e,0),An(e,r),pt(e,Ie()),n;if(t===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!fw(i)&&(t=ga(e,r),t===2&&(o=Tu(e),o!==0&&(r=o,t=oc(e,o))),t===1))throw n=Lo,gr(e,0),An(e,r),pt(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:ir(e,st,cn);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Cf+500-Ie(),10<t)){if(Xl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fu(ir.bind(null,e,st,cn),t);break}ir(e,st,cn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Gt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cw(r/1960))-r,10<r){e.timeoutHandle=Fu(ir.bind(null,e,st,cn),r);break}ir(e,st,cn);break;case 5:ir(e,st,cn);break;default:throw Error(R(329))}}}return pt(e,Ie()),e.callbackNode===n?pv.bind(null,e):null}function oc(e,t){var n=ao;return e.current.memoizedState.isDehydrated&&(gr(e,t).flags|=256),e=ga(e,t),e!==2&&(t=st,st=n,t!==null&&lc(t)),e}function lc(e){st===null?st=e:st.push.apply(st,e)}function fw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Sf,t&=~Ba,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function Sp(e){if(le&6)throw Error(R(327));ii();var t=Xl(e,0);if(!(t&1))return pt(e,Ie()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=Tu(e);r!==0&&(t=r,n=oc(e,r))}if(n===1)throw n=Lo,gr(e,0),An(e,t),pt(e,Ie()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ir(e,st,cn),pt(e,Ie()),null}function Ef(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(pi=Ie()+500,Da&&Jn())}}function br(e){Ln!==null&&Ln.tag===0&&!(le&6)&&ii();var t=le;le|=1;var n=At.transition,r=de;try{if(At.transition=null,de=1,e)return e()}finally{de=r,At.transition=n,le=t,!(le&6)&&Jn()}}function $f(){xt=Jr.current,be(Jr)}function gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bx(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:fi(),be(ft),be(Ze),gf();break;case 5:hf(r);break;case 4:fi();break;case 13:be(Ee);break;case 19:be(Ee);break;case 10:cf(r.type._context);break;case 22:case 23:$f()}n=n.return}if(Ve=e,Ne=e=Wn(e.current,null),Qe=xt=t,Be=0,Lo=null,Sf=Ba=kr=0,st=ao=null,fr!==null){for(t=0;t<fr.length;t++)if(n=fr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}fr=null}return e}function hv(e,t){do{var n=Ne;try{if(uf(),Pl.current=fa,ca){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ca=!1}if(wr=0,Ue=je=$e=null,oo=!1,To=0,bf.current=null,n===null||n.return===null){Be=1,Lo=t,Ne=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Qe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=cp(l);if(p!==null){p.flags&=-257,fp(p,l,a,o,t),p.mode&1&&up(o,u,t),t=p,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if(!(t&1)){up(o,u,t),zf();break e}s=Error(R(426))}}else if(Ce&&a.mode&1){var E=cp(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),fp(E,l,a,o,t),af(di(s,a));break e}}o=s=di(s,a),Be!==4&&(Be=2),ao===null?ao=[o]:ao.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Xm(o,s,t);rp(o,h);break e;case 1:a=s;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hn===null||!Hn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Jm(o,a,t);rp(o,w);break e}}o=o.return}while(o!==null)}vv(n)}catch(P){t=P,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function gv(){var e=da.current;return da.current=fa,e===null?fa:e}function zf(){(Be===0||Be===3||Be===2)&&(Be=4),Ve===null||!(kr&268435455)&&!(Ba&268435455)||An(Ve,Qe)}function ga(e,t){var n=le;le|=2;var r=gv();(Ve!==e||Qe!==t)&&(cn=null,gr(e,t));do try{dw();break}catch(i){hv(e,i)}while(!0);if(uf(),le=n,da.current=r,Ne!==null)throw Error(R(261));return Ve=null,Qe=0,Be}function dw(){for(;Ne!==null;)mv(Ne)}function pw(){for(;Ne!==null&&!j0();)mv(Ne)}function mv(e){var t=xv(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?vv(e):Ne=t,bf.current=null}function vv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lw(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ne=null;return}}else if(n=ow(n,t,xt),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Be===0&&(Be=5)}function ir(e,t,n){var r=de,i=At.transition;try{At.transition=null,de=1,hw(e,t,n,r)}finally{At.transition=i,de=r}return null}function hw(e,t,n,r){do ii();while(Ln!==null);if(le&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Y0(e,o),e===Ve&&(Ne=Ve=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,wv(Kl,function(){return ii(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var l=de;de=1;var a=le;le|=4,bf.current=null,sw(e,n),fv(n,e),Lx(Du),Jl=!!Ou,Du=Ou=null,e.current=n,uw(n),F0(),le=a,de=l,At.transition=o}else e.current=n;if(hl&&(hl=!1,Ln=e,ha=i),o=e.pendingLanes,o===0&&(Hn=null),U0(n.stateNode),pt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pa)throw pa=!1,e=rc,rc=null,e;return ha&1&&e.tag!==0&&ii(),o=e.pendingLanes,o&1?e===ic?so++:(so=0,ic=e):so=0,Jn(),null}function ii(){if(Ln!==null){var e=Xg(ha),t=At.transition,n=de;try{if(At.transition=null,de=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,ha=0,le&6)throw Error(R(331));var i=le;for(le|=4,U=e.current;U!==null;){var o=U,l=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(U=u;U!==null;){var f=U;switch(f.tag){case 0:case 11:case 15:lo(8,f,o)}var c=f.child;if(c!==null)c.return=f,U=c;else for(;U!==null;){f=U;var d=f.sibling,p=f.return;if(sv(f),f===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}U=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,U=l;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:lo(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,U=h;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){l=U;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,U=v;else e:for(l=m;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ma(9,a)}}catch(P){Pe(a,a.return,P)}if(a===l){U=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,U=w;break e}U=a.return}}if(le=i,Jn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Aa,e)}catch{}r=!0}return r}finally{de=n,At.transition=t}}return!1}function Cp(e,t,n){t=di(n,t),t=Xm(e,t,1),e=Un(e,t,1),t=rt(),e!==null&&(Wo(e,1,t),pt(e,t))}function Pe(e,t,n){if(e.tag===3)Cp(e,e,n);else for(;t!==null;){if(t.tag===3){Cp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){e=di(n,e),e=Jm(t,e,1),t=Un(t,e,1),e=rt(),t!==null&&(Wo(t,1,e),pt(t,e));break}}t=t.return}}function gw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Qe&n)===n&&(Be===4||Be===3&&(Qe&130023424)===Qe&&500>Ie()-Cf?gr(e,0):Sf|=n),pt(e,t)}function yv(e,t){t===0&&(e.mode&1?(t=il,il<<=1,!(il&130023424)&&(il=4194304)):t=1);var n=rt();e=kn(e,t),e!==null&&(Wo(e,t,n),pt(e,n))}function mw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yv(e,n)}function vw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),yv(e,n)}var xv;xv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,iw(e,t,n);ut=!!(e.flags&131072)}else ut=!1,Ce&&t.flags&1048576&&Sm(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_l(e,t),e=t.pendingProps;var i=si(t,Ze.current);ri(t,n),i=vf(null,t,r,e,i,n);var o=yf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)?(o=!0,ra(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,df(t),i.updater=Fa,t.stateNode=i,i._reactInternals=t,Gu(t,r,e,n),t=qu(null,t,r,!0,o,n)):(t.tag=0,Ce&&o&&of(t),tt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_l(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xw(r),e=Mt(r,e),i){case 0:t=Yu(null,t,r,e,n);break e;case 1:t=hp(null,t,r,e,n);break e;case 11:t=dp(null,t,r,e,n);break e;case 14:t=pp(null,t,r,Mt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Yu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),hp(e,t,r,i,n);case 3:e:{if(nv(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Im(e,t),sa(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=di(Error(R(423)),t),t=gp(e,t,r,n,i);break e}else if(r!==i){i=di(Error(R(424)),t),t=gp(e,t,r,n,i);break e}else for(wt=Bn(t.stateNode.containerInfo.firstChild),kt=t,Ce=!0,Vt=null,n=zm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===i){t=bn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return _m(t),e===null&&Hu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ju(r,i)?l=null:o!==null&&ju(r,o)&&(t.flags|=32),tv(e,t),tt(e,t,l,n),t.child;case 6:return e===null&&Hu(t),null;case 13:return rv(e,t,n);case 4:return pf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ci(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),dp(e,t,r,i,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ye(la,r._currentValue),r._currentValue=l,o!==null)if(Xt(o.value,l)){if(o.children===i.children&&!ft.current){t=bn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=yn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Vu(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(R(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Vu(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ri(t,n),i=Rt(i),r=r(i),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,i=Mt(r,t.pendingProps),i=Mt(r.type,i),pp(e,t,r,i,n);case 15:return Zm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),_l(e,t),t.tag=1,dt(r)?(e=!0,ra(t)):e=!1,ri(t,n),Km(t,r,i),Gu(t,r,i,n),qu(null,t,r,!0,e,n);case 19:return iv(e,t,n);case 22:return ev(e,t,n)}throw Error(R(156,t.tag))};function wv(e,t){return Qg(e,t)}function yw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new yw(e,t,n,r)}function Pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xw(e){if(typeof e=="function")return Pf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gc)return 11;if(e===Qc)return 14}return 2}function Wn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rl(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Pf(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ur:return mr(n.children,i,o,t);case Wc:l=8,i|=8;break;case mu:return e=Tt(12,n,t,i|2),e.elementType=mu,e.lanes=o,e;case vu:return e=Tt(13,n,t,i),e.elementType=vu,e.lanes=o,e;case yu:return e=Tt(19,n,t,i),e.elementType=yu,e.lanes=o,e;case _g:return Ua(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pg:l=10;break e;case Ig:l=9;break e;case Gc:l=11;break e;case Qc:l=14;break e;case In:l=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Tt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function mr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Ua(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=_g,e.lanes=n,e.stateNode={isHidden:!1},e}function js(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function Fs(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ww(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function If(e,t,n,r,i,o,l,a,s){return e=new ww(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(o),e}function kw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kv(e){if(!e)return qn;e=e._reactInternals;e:{if(Tr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(dt(n))return km(e,n,t)}return t}function bv(e,t,n,r,i,o,l,a,s){return e=If(n,r,!0,e,i,o,l,a,s),e.context=kv(null),n=e.current,r=rt(),i=Vn(n),o=yn(r,i),o.callback=t??null,Un(n,o,i),e.current.lanes=i,Wo(e,i,r),pt(e,r),e}function Ha(e,t,n,r){var i=t.current,o=rt(),l=Vn(i);return n=kv(n),t.context===null?t.context=n:t.pendingContext=n,t=yn(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Un(i,t,l),e!==null&&(Qt(e,i,l,o),zl(e,i,l)),l}function ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _f(e,t){Ep(e,t),(e=e.alternate)&&Ep(e,t)}function bw(){return null}var Sv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tf(e){this._internalRoot=e}Va.prototype.render=Tf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Ha(e,t,null,null)};Va.prototype.unmount=Tf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){Ha(null,e,null,null)}),t[wn]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var t=em();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tn.length&&t!==0&&t<Tn[n].priority;n++);Tn.splice(n,0,e),n===0&&nm(e)}};function Af(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $p(){}function Sw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ma(l);o.call(u)}}var l=bv(t,r,e,0,null,!1,!1,"",$p);return e._reactRootContainer=l,e[wn]=l.current,$o(e.nodeType===8?e.parentNode:e),br(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ma(s);a.call(u)}}var s=If(e,0,!1,null,null,!1,!1,"",$p);return e._reactRootContainer=s,e[wn]=s.current,$o(e.nodeType===8?e.parentNode:e),br(function(){Ha(t,s,n,r)}),s}function Ga(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=ma(l);a.call(s)}}Ha(t,l,e,i)}else l=Sw(n,t,e,i,r);return ma(l)}Jg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qi(t.pendingLanes);n!==0&&(Kc(t,n|1),pt(t,Ie()),!(le&6)&&(pi=Ie()+500,Jn()))}break;case 13:br(function(){var r=kn(e,1);if(r!==null){var i=rt();Qt(r,e,1,i)}}),_f(e,1)}};Xc=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=rt();Qt(t,e,134217728,n)}_f(e,134217728)}};Zg=function(e){if(e.tag===13){var t=Vn(e),n=kn(e,t);if(n!==null){var r=rt();Qt(n,e,t,r)}_f(e,t)}};em=function(){return de};tm=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};Pu=function(e,t,n){switch(t){case"input":if(ku(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Oa(r);if(!i)throw Error(R(90));Ag(r),ku(r,i)}}}break;case"textarea":Lg(e,n);break;case"select":t=n.value,t!=null&&Zr(e,!!n.multiple,t,!1)}};Bg=Ef;Ug=br;var Cw={usingClientEntryPoint:!1,Events:[Qo,Gr,Oa,Fg,Mg,Ef]},Bi={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ew={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wg(e),e===null?null:e.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Aa=gl.inject(Ew),nn=gl}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cw;Ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Af(t))throw Error(R(200));return kw(e,t,null,n)};Ct.createRoot=function(e,t){if(!Af(e))throw Error(R(299));var n=!1,r="",i=Sv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=If(e,1,!1,null,null,n,!1,r,i),e[wn]=t.current,$o(e.nodeType===8?e.parentNode:e),new Tf(t)};Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Wg(t),e=e===null?null:e.stateNode,e};Ct.flushSync=function(e){return br(e)};Ct.hydrate=function(e,t,n){if(!Wa(t))throw Error(R(200));return Ga(null,e,t,!0,n)};Ct.hydrateRoot=function(e,t,n){if(!Af(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Sv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=bv(t,null,e,1,n??null,i,!1,o,l),e[wn]=t.current,$o(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Va(t)};Ct.render=function(e,t,n){if(!Wa(t))throw Error(R(200));return Ga(null,e,t,!1,n)};Ct.unmountComponentAtNode=function(e){if(!Wa(e))throw Error(R(40));return e._reactRootContainer?(br(function(){Ga(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Ef;Ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wa(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Ga(e,t,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function Cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cv)}catch(e){console.error(e)}}Cv(),Cg.exports=Ct;var $w=Cg.exports,zp=$w;hu.createRoot=zp.createRoot,hu.hydrateRoot=zp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},No.apply(this,arguments)}var Nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nn||(Nn={}));const Pp="popstate";function zw(e){e===void 0&&(e={});function t(i,o){let{pathname:l="/",search:a="",hash:s=""}=Ar(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ac("",{pathname:l,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let l=i.document.querySelector("base"),a="";if(l&&l.getAttribute("href")){let s=i.location.href,u=s.indexOf("#");a=u===-1?s:s.slice(0,u)}return a+"#"+(typeof o=="string"?o:va(o))}function r(i,o){Qa(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Iw(t,n,r,e)}function De(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Pw(){return Math.random().toString(36).substr(2,8)}function Ip(e,t){return{usr:e.state,key:e.key,idx:t}}function ac(e,t,n,r){return n===void 0&&(n=null),No({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ar(t):t,{state:n,key:t&&t.key||r||Pw()})}function va(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Iw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Nn.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(No({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function c(){a=Nn.Pop;let E=f(),h=E==null?null:E-u;u=E,s&&s({action:a,location:y.location,delta:h})}function d(E,h){a=Nn.Push;let m=ac(y.location,E,h);n&&n(m,E),u=f()+1;let v=Ip(m,u),w=y.createHref(m);try{l.pushState(v,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(w)}o&&s&&s({action:a,location:y.location,delta:1})}function p(E,h){a=Nn.Replace;let m=ac(y.location,E,h);n&&n(m,E),u=f();let v=Ip(m,u),w=y.createHref(m);l.replaceState(v,"",w),o&&s&&s({action:a,location:y.location,delta:0})}function g(E){let h=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof E=="string"?E:va(E);return m=m.replace(/ $/,"%20"),De(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let y={get action(){return a},get location(){return e(i,l)},listen(E){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Pp,c),s=E,()=>{i.removeEventListener(Pp,c),s=null}},createHref(E){return t(i,E)},createURL:g,encodeLocation(E){let h=g(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(E){return l.go(E)}};return y}var _p;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_p||(_p={}));function _w(e,t,n){return n===void 0&&(n="/"),Tw(e,t,n)}function Tw(e,t,n,r){let i=typeof t=="string"?Ar(t):t,o=Rf(i.pathname||"/",n);if(o==null)return null;let l=Ev(e);Aw(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let u=Vw(o);a=Bw(l[s],u)}return a}function Ev(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(De(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Gn([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(De(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ev(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Fw(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of $v(o.path))i(o,l,s)}),t}function $v(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=$v(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Aw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Mw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Rw=/^:[\w-]+$/,Lw=3,Nw=2,Ow=1,Dw=10,jw=-2,Tp=e=>e==="*";function Fw(e,t){let n=e.split("/"),r=n.length;return n.some(Tp)&&(r+=jw),t&&(r+=Nw),n.filter(i=>!Tp(i)).reduce((i,o)=>i+(Rw.test(o)?Lw:o===""?Ow:Dw),r)}function Mw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Bw(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",c=Uw({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),d=s.route;if(!c)return null;Object.assign(i,c.params),l.push({params:i,pathname:Gn([o,c.pathname]),pathnameBase:qw(Gn([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=Gn([o,c.pathnameBase]))}return l}function Uw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Hw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:d,isOptional:p}=f;if(d==="*"){let y=a[c]||"";l=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const g=a[c];return p&&!g?u[d]=void 0:u[d]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Hw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Vw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Rf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Ww=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gw=e=>Ww.test(e);function Qw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ar(e):e,o;if(n)if(Gw(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Qa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=Ap(n.substring(1),"/"):o=Ap(n,t)}else o=t;return{pathname:o,search:Kw(r),hash:Xw(i)}}function Ap(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ms(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zv(e,t){let n=Yw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Pv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ar(e):(i=No({},e),De(!i.pathname||!i.pathname.includes("?"),Ms("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),Ms("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),Ms("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let d=l.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}a=c>=0?t[c]:"/"}let s=Qw(i,a),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Gn=e=>e.join("/").replace(/\/\/+/g,"/"),qw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Iv=["post","put","patch","delete"];new Set(Iv);const Zw=["get",...Iv];new Set(Zw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oo.apply(this,arguments)}const Lf=T.createContext(null),ek=T.createContext(null),Rr=T.createContext(null),Ya=T.createContext(null),Zn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),_v=T.createContext(null);function tk(e,t){let{relative:n}=t===void 0?{}:t;qo()||De(!1);let{basename:r,navigator:i}=T.useContext(Rr),{hash:o,pathname:l,search:a}=Rv(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Gn([r,l])),i.createHref({pathname:s,search:a,hash:o})}function qo(){return T.useContext(Ya)!=null}function qa(){return qo()||De(!1),T.useContext(Ya).location}function Tv(e){T.useContext(Rr).static||T.useLayoutEffect(e)}function Av(){let{isDataRoute:e}=T.useContext(Zn);return e?gk():nk()}function nk(){qo()||De(!1);let e=T.useContext(Lf),{basename:t,future:n,navigator:r}=T.useContext(Rr),{matches:i}=T.useContext(Zn),{pathname:o}=qa(),l=JSON.stringify(zv(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return Tv(()=>{a.current=!0}),T.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Pv(u,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Gn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,l,o,e])}function rk(){let{matches:e}=T.useContext(Zn),t=e[e.length-1];return t?t.params:{}}function Rv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(Rr),{matches:i}=T.useContext(Zn),{pathname:o}=qa(),l=JSON.stringify(zv(i,r.v7_relativeSplatPath));return T.useMemo(()=>Pv(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function ik(e,t){return ok(e,t)}function ok(e,t,n,r){qo()||De(!1);let{navigator:i}=T.useContext(Rr),{matches:o}=T.useContext(Zn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=qa(),f;if(t){var c;let E=typeof t=="string"?Ar(t):t;s==="/"||(c=E.pathname)!=null&&c.startsWith(s)||De(!1),f=E}else f=u;let d=f.pathname||"/",p=d;if(s!=="/"){let E=s.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(E.length).join("/")}let g=_w(e,{pathname:p}),y=ck(g&&g.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Gn([s,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?s:Gn([s,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&y?T.createElement(Ya.Provider,{value:{location:Oo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Nn.Pop}},y):y}function lk(){let e=hk(),t=Jw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const ak=T.createElement(lk,null);class sk extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(Zn.Provider,{value:this.props.routeContext},T.createElement(_v.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uk(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Lf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Zn.Provider,{value:t},r)}function ck(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=l.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);f>=0||De(!1),l=l.slice(0,Math.min(l.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let c=l[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:d,errors:p}=n,g=c.route.loader&&d[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||g){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((f,c,d)=>{let p,g=!1,y=null,E=null;n&&(p=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||ak,s&&(u<0&&d===0?(mk("route-fallback"),g=!0,E=null):u===d&&(g=!0,E=c.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,d+1)),m=()=>{let v;return p?v=y:g?v=E:c.route.Component?v=T.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=f,T.createElement(uk,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?T.createElement(sk,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var Lv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Lv||{}),Nv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Nv||{});function fk(e){let t=T.useContext(Lf);return t||De(!1),t}function dk(e){let t=T.useContext(ek);return t||De(!1),t}function pk(e){let t=T.useContext(Zn);return t||De(!1),t}function Ov(e){let t=pk(),n=t.matches[t.matches.length-1];return n.route.id||De(!1),n.route.id}function hk(){var e;let t=T.useContext(_v),n=dk(),r=Ov();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function gk(){let{router:e}=fk(Lv.UseNavigateStable),t=Ov(Nv.UseNavigateStable),n=T.useRef(!1);return Tv(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Oo({fromRouteId:t},o)))},[e,t])}const Rp={};function mk(e,t,n){Rp[e]||(Rp[e]=!0)}function vk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Dv(e){De(!1)}function yk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nn.Pop,navigator:o,static:l=!1,future:a}=e;qo()&&De(!1);let s=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:s,navigator:o,static:l,future:Oo({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=Ar(r));let{pathname:f="/",search:c="",hash:d="",state:p=null,key:g="default"}=r,y=T.useMemo(()=>{let E=Rf(f,s);return E==null?null:{location:{pathname:E,search:c,hash:d,state:p,key:g},navigationType:i}},[s,f,c,d,p,g,i]);return y==null?null:T.createElement(Rr.Provider,{value:u},T.createElement(Ya.Provider,{children:n,value:y}))}function xk(e){let{children:t,location:n}=e;return ik(sc(t),n)}new Promise(()=>{});function sc(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,sc(r.props.children,o));return}r.type!==Dv&&De(!1),!r.props.index||!r.props.children||De(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=sc(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uc(){return uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uc.apply(this,arguments)}function wk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function kk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bk(e,t){return e.button===0&&(!t||t==="_self")&&!kk(e)}const Sk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ck="6";try{window.__reactRouterVersion=Ck}catch{}const Ek="startTransition",Lp=g0[Ek];function $k(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=zw({window:i,v5Compat:!0}));let l=o.current,[a,s]=T.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=T.useCallback(c=>{u&&Lp?Lp(()=>s(c)):s(c)},[s,u]);return T.useLayoutEffect(()=>l.listen(f),[l,f]),T.useEffect(()=>vk(r),[r]),T.createElement(yk,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const zk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ik=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:f,viewTransition:c}=t,d=wk(t,Sk),{basename:p}=T.useContext(Rr),g,y=!1;if(typeof u=="string"&&Pk.test(u)&&(g=u,zk))try{let v=new URL(window.location.href),w=u.startsWith("//")?new URL(v.protocol+u):new URL(u),P=Rf(w.pathname,p);w.origin===v.origin&&P!=null?u=P+w.search+w.hash:y=!0}catch{}let E=tk(u,{relative:i}),h=_k(u,{replace:l,state:a,target:s,preventScrollReset:f,relative:i,viewTransition:c});function m(v){r&&r(v),v.defaultPrevented||h(v)}return T.createElement("a",uc({},d,{href:g||E,onClick:y||o?r:m,ref:n,target:s}))});var Np;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Np||(Np={}));var Op;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Op||(Op={}));function _k(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,s=Av(),u=qa(),f=Rv(e,{relative:l});return T.useCallback(c=>{if(bk(c,n)){c.preventDefault();let d=r!==void 0?r:va(u)===va(f);s(e,{replace:d,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[u,s,f,r,i,n,e,o,l,a])}var ct=function(){return ct=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ct.apply(this,arguments)};function ya(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Tk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},we="-ms-",uo="-moz-",ue="-webkit-",jv="comm",Ka="rule",Nf="decl",Ak="@import",Rk="@namespace",Fv="@keyframes",Lk="@layer",Mv=Math.abs,Of=String.fromCharCode,cc=Object.assign;function Nk(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function Bv(e){return e.trim()}function fn(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Ll(e,t,n){return e.indexOf(t,n)}function Fe(e,t){return e.charCodeAt(t)|0}function Sr(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function Uv(e){return e.length}function qi(e,t){return t.push(e),e}function Ok(e,t){return e.map(t).join("")}function Dp(e,t){return e.filter(function(n){return!fn(n,t)})}var Xa=1,hi=1,Hv=0,Nt=0,Re=0,$i="";function Ja(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Xa,column:hi,length:l,return:"",siblings:a}}function zn(e,t){return cc(Ja("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Dr(e){for(;e.root;)e=zn(e.root,{children:[e]});qi(e,e.siblings)}function Dk(){return Re}function jk(){return Re=Nt>0?Fe($i,--Nt):0,hi--,Re===10&&(hi=1,Xa--),Re}function Yt(){return Re=Nt<Hv?Fe($i,Nt++):0,hi++,Re===10&&(hi=1,Xa++),Re}function On(){return Fe($i,Nt)}function Nl(){return Nt}function Za(e,t){return Sr($i,e,t)}function Do(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fk(e){return Xa=hi=1,Hv=Ut($i=e),Nt=0,[]}function Mk(e){return $i="",e}function Bs(e){return Bv(Za(Nt-1,fc(e===91?e+2:e===40?e+1:e)))}function Bk(e){for(;(Re=On())&&Re<33;)Yt();return Do(e)>2||Do(Re)>3?"":" "}function Uk(e,t){for(;--t&&Yt()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Za(e,Nl()+(t<6&&On()==32&&Yt()==32))}function fc(e){for(;Yt();)switch(Re){case e:return Nt;case 34:case 39:e!==34&&e!==39&&fc(Re);break;case 40:e===41&&fc(e);break;case 92:Yt();break}return Nt}function Hk(e,t){for(;Yt()&&e+Re!==57;)if(e+Re===84&&On()===47)break;return"/*"+Za(t,Nt-1)+"*"+Of(e===47?e:Yt())}function Vk(e){for(;!Do(On());)Yt();return Za(e,Nt)}function Wk(e){return Mk(Ol("",null,null,null,[""],e=Fk(e),0,[0],e))}function Ol(e,t,n,r,i,o,l,a,s){for(var u=0,f=0,c=l,d=0,p=0,g=0,y=1,E=1,h=1,m=0,v="",w=i,P=o,k=r,b=v;E;)switch(g=m,m=Yt()){case 40:if(g!=108&&Fe(b,c-1)==58){Ll(b+=ee(Bs(m),"&","&\f"),"&\f",Mv(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:b+=Bs(m);break;case 9:case 10:case 13:case 32:b+=Bk(g);break;case 92:b+=Uk(Nl()-1,7);continue;case 47:switch(On()){case 42:case 47:qi(Gk(Hk(Yt(),Nl()),t,n,s),s),(Do(g||1)==5||Do(On()||1)==5)&&Ut(b)&&Sr(b,-1,void 0)!==" "&&(b+=" ");break;default:b+="/"}break;case 123*y:a[u++]=Ut(b)*h;case 125*y:case 59:case 0:switch(m){case 0:case 125:E=0;case 59+f:h==-1&&(b=ee(b,/\f/g,"")),p>0&&(Ut(b)-c||y===0&&g===47)&&qi(p>32?Fp(b+";",r,n,c-1,s):Fp(ee(b," ","")+";",r,n,c-2,s),s);break;case 59:b+=";";default:if(qi(k=jp(b,t,n,u,f,i,a,v,w=[],P=[],c,o),o),m===123)if(f===0)Ol(b,t,k,k,w,o,c,a,P);else{switch(d){case 99:if(Fe(b,3)===110)break;case 108:if(Fe(b,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Ol(e,k,k,r&&qi(jp(e,k,k,0,0,i,a,v,i,w=[],c,P),P),i,P,c,a,r?w:P):Ol(b,k,k,k,[""],P,0,a,P)}}u=f=p=0,y=h=1,v=b="",c=l;break;case 58:c=1+Ut(b),p=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&jk()==125)continue}switch(b+=Of(m),m*y){case 38:h=f>0?1:(b+="\f",-1);break;case 44:a[u++]=(Ut(b)-1)*h,h=1;break;case 64:On()===45&&(b+=Bs(Yt())),d=On(),f=c=Ut(v=b+=Vk(Nl())),m++;break;case 45:g===45&&Ut(b)==2&&(y=0)}}return o}function jp(e,t,n,r,i,o,l,a,s,u,f,c){for(var d=i-1,p=i===0?o:[""],g=Uv(p),y=0,E=0,h=0;y<r;++y)for(var m=0,v=Sr(e,d+1,d=Mv(E=l[y])),w=e;m<g;++m)(w=Bv(E>0?p[m]+" "+v:ee(v,/&\f/g,p[m])))&&(s[h++]=w);return Ja(e,t,n,i===0?Ka:a,s,u,f,c)}function Gk(e,t,n,r){return Ja(e,t,n,jv,Of(Dk()),Sr(e,2,-2),0,r)}function Fp(e,t,n,r,i){return Ja(e,t,n,Nf,Sr(e,0,r),Sr(e,r+1,-1),r,i)}function Vv(e,t,n){switch(Nk(e,t)){case 5103:return ue+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ue+e+e;case 4855:return ue+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return uo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ue+e+uo+e+we+e+e;case 5936:switch(Fe(e,t+11)){case 114:return ue+e+we+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ue+e+we+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ue+e+we+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ue+e+we+e+e;case 6165:return ue+e+we+"flex-"+e+e;case 5187:return ue+e+ee(e,/(\w+).+(:[^]+)/,ue+"box-$1$2"+we+"flex-$1$2")+e;case 5443:return ue+e+we+"flex-item-"+ee(e,/flex-|-self/g,"")+(fn(e,/flex-|baseline/)?"":we+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return ue+e+we+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return ue+e+we+ee(e,"shrink","negative")+e;case 5292:return ue+e+we+ee(e,"basis","preferred-size")+e;case 6060:return ue+"box-"+ee(e,"-grow","")+ue+e+we+ee(e,"grow","positive")+e;case 4554:return ue+ee(e,/([^-])(transform)/g,"$1"+ue+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,ue+"$1"),/(image-set)/,ue+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,ue+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,ue+"box-pack:$3"+we+"flex-pack:$3"),/space-between/,"justify")+ue+e+e;case 4200:if(!fn(e,/flex-|baseline/))return we+"grid-column-align"+Sr(e,t)+e;break;case 2592:case 3360:return we+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,fn(r.props,/grid-\w+-end/)})?~Ll(e+(n=n[t].value),"span",0)?e:we+ee(e,"-start","")+e+we+"grid-row-span:"+(~Ll(n,"span",0)?fn(n,/\d+/):+fn(n,/\d+/)-+fn(e,/\d+/))+";":we+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return fn(r.props,/grid-\w+-start/)})?e:we+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,ue+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+ue+"$2-$3$1"+uo+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ll(e,"stretch",0)?Vv(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return we+i+":"+o+u+(l?we+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(Fe(e,t+6)===121)return ee(e,":",":"+ue)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ue+(Fe(e,14)===45?"inline-":"")+"box$3$1"+ue+"$2$3$1"+we+"$2box$3")+e;case 100:return ee(e,":",":"+we)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function xa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Qk(e,t,n,r){switch(e.type){case Lk:if(e.children.length)break;case Ak:case Rk:case Nf:return e.return=e.return||e.value;case jv:return"";case Fv:return e.return=e.value+"{"+xa(e.children,r)+"}";case Ka:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=xa(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yk(e){var t=Uv(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function qk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Kk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Nf:e.return=Vv(e.value,e.length,n);return;case Fv:return xa([zn(e,{value:ee(e.value,"@","@"+ue)})],r);case Ka:if(e.length)return Ok(n=e.props,function(i){switch(fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Dr(zn(e,{props:[ee(i,/:(read-\w+)/,":"+uo+"$1")]})),Dr(zn(e,{props:[i]})),cc(e,{props:Dp(n,r)});break;case"::placeholder":Dr(zn(e,{props:[ee(i,/:(plac\w+)/,":"+ue+"input-$1")]})),Dr(zn(e,{props:[ee(i,/:(plac\w+)/,":"+uo+"$1")]})),Dr(zn(e,{props:[ee(i,/:(plac\w+)/,we+"input-$1")]})),Dr(zn(e,{props:[i]})),cc(e,{props:Dp(n,r)});break}return""})}}var vt={},gi=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",Wv="active",Gv="data-styled-version",es="6.3.12",Df=`/*!sc*/
`,co=typeof window<"u"&&typeof document<"u",Xk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY);function ts(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Dl=new Map,wa=new Map,jl=1,Ki=function(e){if(Dl.has(e))return Dl.get(e);for(;wa.has(jl);)jl++;var t=jl++;return Dl.set(e,t),wa.set(t,e),t},Jk=function(e,t){jl=t+1,Dl.set(e,t),wa.set(t,e)},jf=Object.freeze([]),mi=Object.freeze({});function Zk(e,t,n){return n===void 0&&(n=mi),e.theme!==n.theme&&e.theme||t||n.theme}var Qv=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),eb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tb=/(^-|-$)/g;function Mp(e){return e.replace(eb,"-").replace(tb,"")}var nb=/(a)(d)/gi,Bp=function(e){return String.fromCharCode(e+(e>25?39:97))};function dc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Bp(t%52)+n;return(Bp(t%52)+n).replace(nb,"$1-$2")}var Us,or=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Yv=function(e){return or(5381,e)};function rb(e){return dc(Yv(e)>>>0)}function ib(e){return e.displayName||e.name||"Component"}function Hs(e){return typeof e=="string"&&!0}var qv=typeof Symbol=="function"&&Symbol.for,Kv=qv?Symbol.for("react.memo"):60115,ob=qv?Symbol.for("react.forward_ref"):60112,lb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ab={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sb=((Us={})[ob]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Us[Kv]=Xv,Us);function Up(e){return("type"in(t=e)&&t.type.$$typeof)===Kv?Xv:"$$typeof"in e?sb[e.$$typeof]:lb;var t}var ub=Object.defineProperty,cb=Object.getOwnPropertyNames,Hp=Object.getOwnPropertySymbols,fb=Object.getOwnPropertyDescriptor,db=Object.getPrototypeOf,Vp=Object.prototype;function Jv(e,t,n){if(typeof t!="string"){if(Vp){var r=db(t);r&&r!==Vp&&Jv(e,r,n)}var i=cb(t);Hp&&(i=i.concat(Hp(t)));for(var o=Up(e),l=Up(t),a=0;a<i.length;++a){var s=i[a];if(!(s in ab||n&&n[s]||l&&s in l||o&&s in o)){var u=fb(t,s);try{ub(e,s,u)}catch{}}}}return e}function vi(e){return typeof e=="function"}function Ff(e){return typeof e=="object"&&"styledComponentId"in e}function pr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Wp(e,t){return e.join("")}function jo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function pc(e,t,n){if(n===void 0&&(n=!1),!n&&!jo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=pc(e[r],t[r]);else if(jo(t))for(var r in t)e[r]=pc(e[r],t[r]);return e}function Zv(e,t){Object.defineProperty(e,"toString",{value:t})}var pb=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ts(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=0,u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+=this.tag.getRule(l)+Df;return n},e}(),hb="style[".concat(gi,"][").concat(Gv,'="').concat(es,'"]'),gb=new RegExp("^".concat(gi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Gp=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},hc=function(e){if(!e)return document;if(Gp(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Gp(t))return t}return document},mb=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},vb=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Df),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(gb);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(Jk(f,u),mb(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Vs=function(e){for(var t=hc(e.options.target).querySelectorAll(hb),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(gi)!==Wv&&(vb(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function yb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(gi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gi,Wv),r.setAttribute(Gv,es);var l=yb();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},xb=function(){function e(t){this.element=e1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,l=i.length;o<l;o++){var a=i[o];if(a.ownerNode===n)return a}throw ts(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),wb=function(){function e(t){this.element=e1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),kb=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qp=co,bb={isServer:!co,useCSSOMInjection:!Xk},t1=function(){function e(t,n,r){t===void 0&&(t=mi),n===void 0&&(n={});var i=this;this.options=ct(ct({},bb),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&co&&Qp&&(Qp=!1,Vs(this)),Zv(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(c){var d=function(h){return wa.get(h)}(c);if(d===void 0)return"continue";var p=o.names.get(d);if(p===void 0||!p.size)return"continue";var g=l.getGroup(c);if(g.length===0)return"continue";var y=gi+".g"+c+'[id="'+d+'"]',E="";p.forEach(function(h){h.length>0&&(E+=h+",")}),s+=g+y+'{content:"'+E+'"}'+Df},f=0;f<a;f++)u(f);return s}(i)})}return e.registerId=function(t){return Ki(t)},e.prototype.rehydrate=function(){!this.server&&co&&Vs(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&co&&t.target!==this.options.target&&hc(this.options.target)!==hc(t.target)&&Vs(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new kb(i):r?new xb(i):new wb(i)}(this.options),new pb(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ki(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ki(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ki(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}();function Sb(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Tk||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Cb=function(e){return e>="A"&&e<="Z"};function Yp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Cb(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Eb=Symbol.for("sc-keyframes");function $b(e){return typeof e=="object"&&e!==null&&Eb in e}var n1=function(e){return e==null||e===!1||e===""},r1=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!n1(r)&&(Array.isArray(r)&&r.isCss||vi(r)?t.push("".concat(Yp(n),":"),r,";"):jo(r)?t.push.apply(t,ya(ya(["".concat(n," {")],r1(r),!1),["}"],!1)):t.push("".concat(Yp(n),": ").concat(Sb(n,r),";")))}return t};function vr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(n1(e))return i;if(Ff(e))return i.push(".".concat(e.styledComponentId)),i;if(vi(e)){if(!vi(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return vr(o,t,n,r,i)}var l;if($b(e))return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(jo(e)){for(var a=r1(e),s=0;s<a.length;s++)i.push(a[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)vr(e[s],t,n,r,i);return i}function zb(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(vi(n)&&!Ff(n))return!1}return!0}var Pb=Yv(es),Ib=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zb(t),this.componentId=n,this.baseHash=or(Pb,n),this.baseStyle=r,t1.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=pr(i,this.staticRulesId);else{var o=Wp(vr(this.rules,t,n,r)),l=dc(or(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=pr(i,l),this.staticRulesId=l}else{for(var s=or(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")u+=c;else if(c){var d=Wp(vr(c,t,n,r));s=or(or(s,String(f)),d),u+=d}}if(u){var p=dc(s>>>0);if(!n.hasNameForId(this.componentId,p)){var g=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,g)}i=pr(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ki(this.componentId)):""}},e}(),_b=/&/g,dn=47,lr=42;function qp(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(r!==0||i||l!==dn||e.charCodeAt(o+1)!==lr)if(i)l===lr&&e.charCodeAt(o+1)===dn&&(i=!1,o++);else if(l!==34&&l!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,o++}return n!==0||r!==0}function i1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=i1(n.children,t)),n})}function Tb(e){var t,n,r,i=mi,o=i.options,l=o===void 0?mi:o,a=i.plugins,s=a===void 0?jf:a,u=function(g,y,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===Ka&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(_b,n).replace(r,u))}),l.prefix&&f.push(Kk),f.push(Qk);var c=[],d=Yk(f.concat(qk(function(g){return c.push(g)}))),p=function(g,y,E,h){y===void 0&&(y=""),E===void 0&&(E=""),h===void 0&&(h="&"),t=h,n=y,r=void 0;var m=function(w){if(!qp(w))return w;for(var P=w.length,k="",b=0,z=0,A=0,$=!1,I=0;I<P;I++){var N=w.charCodeAt(I);if(A!==0||$||N!==dn||w.charCodeAt(I+1)!==lr)if($)N===lr&&w.charCodeAt(I+1)===dn&&($=!1,I++);else if(N!==34&&N!==39||I!==0&&w.charCodeAt(I-1)===92){if(A===0)if(N===123)z++;else if(N===125){if(--z<0){for(var V=I+1;V<P;){var W=w.charCodeAt(V);if(W===59||W===10)break;V++}V<P&&w.charCodeAt(V)===59&&V++,z=0,I=V-1,b=V;continue}z===0&&(k+=w.substring(b,I+1),b=I+1)}else N===59&&z===0&&(k+=w.substring(b,I+1),b=I+1)}else A===0?A=N:A===N&&(A=0);else $=!0,I++}if(b<P){var q=w.substring(b);qp(q)||(k+=q)}return k}(function(w){if(w.indexOf("//")===-1)return w;for(var P=w.length,k=[],b=0,z=0,A=0,$=0;z<P;){var I=w.charCodeAt(z);if(I!==34&&I!==39||z!==0&&w.charCodeAt(z-1)===92)if(A===0)if(I===dn&&z+1<P&&w.charCodeAt(z+1)===lr){for(z+=2;z+1<P&&(w.charCodeAt(z)!==lr||w.charCodeAt(z+1)!==dn);)z++;z+=2}else if(I===40&&z>=3&&(32|w.charCodeAt(z-1))==108&&(32|w.charCodeAt(z-2))==114&&(32|w.charCodeAt(z-3))==117)$=1,z++;else if($>0)I===41?$--:I===40&&$++,z++;else if(I===lr&&z+1<P&&w.charCodeAt(z+1)===dn)z>b&&k.push(w.substring(b,z)),b=z+=2;else if(I===dn&&z+1<P&&w.charCodeAt(z+1)===dn){for(z>b&&k.push(w.substring(b,z));z<P&&w.charCodeAt(z)!==10;)z++;b=z}else z++;else z++;else A===0?A=I:A===I&&(A=0),z++}return b===0?w:(b<P&&k.push(w.substring(b)),k.join(""))}(g)),v=Wk(E||y?"".concat(E," ").concat(y," { ").concat(m," }"):m);return l.namespace&&(v=i1(v,l.namespace)),c=[],xa(v,d),c};return p.hash=s.length?s.reduce(function(g,y){return y.name||ts(15),or(g,y.name)},5381).toString():"",p}var Ab=new t1,Rb=Tb(),o1=Oe.createContext({shouldForwardProp:void 0,styleSheet:Ab,stylis:Rb});o1.Consumer;Oe.createContext(void 0);function Kp(){return Oe.useContext(o1)}var l1=Oe.createContext(void 0);l1.Consumer;var Ws={};function Lb(e,t,n){var r=Ff(e),i=e,o=!Hs(e),l=t.attrs,a=l===void 0?jf:l,s=t.componentId,u=s===void 0?function(w,P){var k=typeof w!="string"?"sc":Mp(w);Ws[k]=(Ws[k]||0)+1;var b="".concat(k,"-").concat(rb(es+k+Ws[k]));return P?"".concat(P,"-").concat(b):b}(t.displayName,t.parentComponentId):s,f=t.displayName,c=f===void 0?function(w){return Hs(w)?"styled.".concat(w):"Styled(".concat(ib(w),")")}(e):f,d=t.displayName&&t.componentId?"".concat(Mp(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;g=function(w,P){return y(w,P)&&E(w,P)}}else g=y}var h=new Ib(n,d,r?i.componentStyle:void 0);function m(w,P){return function(k,b,z){var A=k.attrs,$=k.componentStyle,I=k.defaultProps,N=k.foldedComponentIds,V=k.styledComponentId,W=k.target,q=Oe.useContext(l1),fe=Kp(),ae=k.shouldForwardProp||fe.shouldForwardProp,D=Zk(b,q,I)||mi,M=function(H,K,_e){for(var Te,me=ct(ct({},K),{className:void 0,theme:_e}),$t=0;$t<H.length;$t+=1){var Dt=vi(Te=H[$t])?Te(me):Te;for(var We in Dt)We==="className"?me.className=pr(me.className,Dt[We]):We==="style"?me.style=ct(ct({},me.style),Dt[We]):We in K&&K[We]===void 0||(me[We]=Dt[We])}return"className"in K&&typeof K.className=="string"&&(me.className=pr(me.className,K.className)),me}(A,b,D),x=M.as||W,Y={};for(var Q in M)M[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&M.theme===D||(Q==="forwardedAs"?Y.as=M.forwardedAs:ae&&!ae(Q,x)||(Y[Q]=M[Q]));var S=function(H,K){var _e=Kp(),Te=H.generateAndInjectStyles(K,_e.styleSheet,_e.stylis);return Te}($,M),pe=S.className,B=pr(N,V);return pe&&(B+=" "+pe),M.className&&(B+=" "+M.className),Y[Hs(x)&&!Qv.has(x)?"class":"className"]=B,z&&(Y.ref=z),T.createElement(x,Y)}(v,w,P)}m.displayName=c;var v=Oe.forwardRef(m);return v.attrs=p,v.componentStyle=h,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?pr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];for(var z=0,A=k;z<A.length;z++)pc(P,A[z],!0);return P}({},i.defaultProps,w):w}}),Zv(v,function(){return".".concat(v.styledComponentId)}),o&&Jv(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Xp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Jp=function(e){return Object.assign(e,{isCss:!0})};function Nb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(vi(e)||jo(e))return Jp(vr(Xp(jf,ya([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?vr(r):Jp(vr(Xp(r,t)))}function gc(e,t,n){if(n===void 0&&(n=mi),!t)throw ts(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Nb.apply(void 0,ya([i],o,!1)))};return r.attrs=function(i){return gc(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return gc(e,t,ct(ct({},n),i))},r}var a1=function(e){return gc(Lb,e)},Se=a1;Qv.forEach(function(e){Se[e]=a1(e)});function Ob(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Db=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,jb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Fb={};function Zp(e,t){return(Fb.jsx?jb:Db).test(e)}const Mb=/[ \t\n\f\r]/g;function Bb(e){return typeof e=="object"?e.type==="text"?eh(e.value):!1:eh(e)}function eh(e){return e.replace(Mb,"")===""}class Ko{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ko.prototype.normal={};Ko.prototype.property={};Ko.prototype.space=void 0;function s1(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ko(n,r,t)}function mc(e){return e.toLowerCase()}class ht{constructor(t,n){this.attribute=n,this.property=t}}ht.prototype.attribute="";ht.prototype.booleanish=!1;ht.prototype.boolean=!1;ht.prototype.commaOrSpaceSeparated=!1;ht.prototype.commaSeparated=!1;ht.prototype.defined=!1;ht.prototype.mustUseProperty=!1;ht.prototype.number=!1;ht.prototype.overloadedBoolean=!1;ht.prototype.property="";ht.prototype.spaceSeparated=!1;ht.prototype.space=void 0;let Ub=0;const Z=Lr(),Ae=Lr(),vc=Lr(),L=Lr(),ve=Lr(),oi=Lr(),mt=Lr();function Lr(){return 2**++Ub}const yc=Object.freeze(Object.defineProperty({__proto__:null,boolean:Z,booleanish:Ae,commaOrSpaceSeparated:mt,commaSeparated:oi,number:L,overloadedBoolean:vc,spaceSeparated:ve},Symbol.toStringTag,{value:"Module"})),Gs=Object.keys(yc);class Mf extends ht{constructor(t,n,r,i){let o=-1;if(super(t,n),th(this,"space",i),typeof r=="number")for(;++o<Gs.length;){const l=Gs[o];th(this,Gs[o],(r&yc[l])===yc[l])}}}Mf.prototype.defined=!0;function th(e,t,n){n&&(e[t]=n)}function zi(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Mf(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[mc(r)]=r,n[mc(o.attribute)]=r}return new Ko(t,n,e.space)}const u1=zi({properties:{ariaActiveDescendant:null,ariaAtomic:Ae,ariaAutoComplete:null,ariaBusy:Ae,ariaChecked:Ae,ariaColCount:L,ariaColIndex:L,ariaColSpan:L,ariaControls:ve,ariaCurrent:null,ariaDescribedBy:ve,ariaDetails:null,ariaDisabled:Ae,ariaDropEffect:ve,ariaErrorMessage:null,ariaExpanded:Ae,ariaFlowTo:ve,ariaGrabbed:Ae,ariaHasPopup:null,ariaHidden:Ae,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ve,ariaLevel:L,ariaLive:null,ariaModal:Ae,ariaMultiLine:Ae,ariaMultiSelectable:Ae,ariaOrientation:null,ariaOwns:ve,ariaPlaceholder:null,ariaPosInSet:L,ariaPressed:Ae,ariaReadOnly:Ae,ariaRelevant:null,ariaRequired:Ae,ariaRoleDescription:ve,ariaRowCount:L,ariaRowIndex:L,ariaRowSpan:L,ariaSelected:Ae,ariaSetSize:L,ariaSort:null,ariaValueMax:L,ariaValueMin:L,ariaValueNow:L,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function c1(e,t){return t in e?e[t]:t}function f1(e,t){return c1(e,t.toLowerCase())}const Hb=zi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:oi,acceptCharset:ve,accessKey:ve,action:null,allow:null,allowFullScreen:Z,allowPaymentRequest:Z,allowUserMedia:Z,alt:null,as:null,async:Z,autoCapitalize:null,autoComplete:ve,autoFocus:Z,autoPlay:Z,blocking:ve,capture:null,charSet:null,checked:Z,cite:null,className:ve,cols:L,colSpan:null,content:null,contentEditable:Ae,controls:Z,controlsList:ve,coords:L|oi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Z,defer:Z,dir:null,dirName:null,disabled:Z,download:vc,draggable:Ae,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Z,formTarget:null,headers:ve,height:L,hidden:vc,high:L,href:null,hrefLang:null,htmlFor:ve,httpEquiv:ve,id:null,imageSizes:null,imageSrcSet:null,inert:Z,inputMode:null,integrity:null,is:null,isMap:Z,itemId:null,itemProp:ve,itemRef:ve,itemScope:Z,itemType:ve,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Z,low:L,manifest:null,max:null,maxLength:L,media:null,method:null,min:null,minLength:L,multiple:Z,muted:Z,name:null,nonce:null,noModule:Z,noValidate:Z,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Z,optimum:L,pattern:null,ping:ve,placeholder:null,playsInline:Z,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Z,referrerPolicy:null,rel:ve,required:Z,reversed:Z,rows:L,rowSpan:L,sandbox:ve,scope:null,scoped:Z,seamless:Z,selected:Z,shadowRootClonable:Z,shadowRootDelegatesFocus:Z,shadowRootMode:null,shape:null,size:L,sizes:null,slot:null,span:L,spellCheck:Ae,src:null,srcDoc:null,srcLang:null,srcSet:null,start:L,step:null,style:null,tabIndex:L,target:null,title:null,translate:null,type:null,typeMustMatch:Z,useMap:null,value:Ae,width:L,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ve,axis:null,background:null,bgColor:null,border:L,borderColor:null,bottomMargin:L,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Z,declare:Z,event:null,face:null,frame:null,frameBorder:null,hSpace:L,leftMargin:L,link:null,longDesc:null,lowSrc:null,marginHeight:L,marginWidth:L,noResize:Z,noHref:Z,noShade:Z,noWrap:Z,object:null,profile:null,prompt:null,rev:null,rightMargin:L,rules:null,scheme:null,scrolling:Ae,standby:null,summary:null,text:null,topMargin:L,valueType:null,version:null,vAlign:null,vLink:null,vSpace:L,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Z,disableRemotePlayback:Z,prefix:null,property:null,results:L,security:null,unselectable:null},space:"html",transform:f1}),Vb=zi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:mt,accentHeight:L,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:L,amplitude:L,arabicForm:null,ascent:L,attributeName:null,attributeType:null,azimuth:L,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:L,by:null,calcMode:null,capHeight:L,className:ve,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:L,diffuseConstant:L,direction:null,display:null,dur:null,divisor:L,dominantBaseline:null,download:Z,dx:null,dy:null,edgeMode:null,editable:null,elevation:L,enableBackground:null,end:null,event:null,exponent:L,externalResourcesRequired:null,fill:null,fillOpacity:L,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:oi,g2:oi,glyphName:oi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:L,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:L,horizOriginX:L,horizOriginY:L,id:null,ideographic:L,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:L,k:L,k1:L,k2:L,k3:L,k4:L,kernelMatrix:mt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:L,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:L,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:L,overlineThickness:L,paintOrder:null,panose1:null,path:null,pathLength:L,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ve,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:L,pointsAtY:L,pointsAtZ:L,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:mt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:mt,rev:mt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:mt,requiredFeatures:mt,requiredFonts:mt,requiredFormats:mt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:L,specularExponent:L,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:L,strikethroughThickness:L,string:null,stroke:null,strokeDashArray:mt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:L,strokeOpacity:L,strokeWidth:null,style:null,surfaceScale:L,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:mt,tabIndex:L,tableValues:null,target:null,targetX:L,targetY:L,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:mt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:L,underlineThickness:L,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:L,values:null,vAlphabetic:L,vMathematical:L,vectorEffect:null,vHanging:L,vIdeographic:L,version:null,vertAdvY:L,vertOriginX:L,vertOriginY:L,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:L,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:c1}),d1=zi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),p1=zi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:f1}),h1=zi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Wb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Gb=/[A-Z]/g,nh=/-[a-z]/g,Qb=/^data[-\w.:]+$/i;function Yb(e,t){const n=mc(t);let r=t,i=ht;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Qb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(nh,Kb);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!nh.test(o)){let l=o.replace(Gb,qb);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=Mf}return new i(r,t)}function qb(e){return"-"+e.toLowerCase()}function Kb(e){return e.charAt(1).toUpperCase()}const Xb=s1([u1,Hb,d1,p1,h1],"html"),Bf=s1([u1,Vb,d1,p1,h1],"svg");function Jb(e){return e.join(" ").trim()}var Uf={},rh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Zb=/\n/g,eS=/^\s*/,tS=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,nS=/^:\s*/,rS=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,iS=/^[;\s]*/,oS=/^\s+|\s+$/g,lS=`
`,ih="/",oh="*",ar="",aS="comment",sS="declaration";function uS(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var y=g.match(Zb);y&&(n+=y.length);var E=g.lastIndexOf(lS);r=~E?g.length-E:r+g.length}function o(){var g={line:n,column:r};return function(y){return y.position=new l(g),u(),y}}function l(g){this.start=g,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(g){var y=new Error(t.source+":"+n+":"+r+": "+g);if(y.reason=g,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function s(g){var y=g.exec(e);if(y){var E=y[0];return i(E),e=e.slice(E.length),y}}function u(){s(eS)}function f(g){var y;for(g=g||[];y=c();)y!==!1&&g.push(y);return g}function c(){var g=o();if(!(ih!=e.charAt(0)||oh!=e.charAt(1))){for(var y=2;ar!=e.charAt(y)&&(oh!=e.charAt(y)||ih!=e.charAt(y+1));)++y;if(y+=2,ar===e.charAt(y-1))return a("End of comment missing");var E=e.slice(2,y-2);return r+=2,i(E),e=e.slice(y),r+=2,g({type:aS,comment:E})}}function d(){var g=o(),y=s(tS);if(y){if(c(),!s(nS))return a("property missing ':'");var E=s(rS),h=g({type:sS,property:lh(y[0].replace(rh,ar)),value:E?lh(E[0].replace(rh,ar)):ar});return s(iS),h}}function p(){var g=[];f(g);for(var y;y=d();)y!==!1&&(g.push(y),f(g));return g}return u(),p()}function lh(e){return e?e.replace(oS,ar):ar}var cS=uS,fS=Gl&&Gl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Uf,"__esModule",{value:!0});Uf.default=pS;const dS=fS(cS);function pS(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,dS.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:l,value:a}=o;i?t(l,a,o):a&&(n=n||{},n[l]=a)}),n}var ns={};Object.defineProperty(ns,"__esModule",{value:!0});ns.camelCase=void 0;var hS=/^--[a-zA-Z0-9_-]+$/,gS=/-([a-z])/g,mS=/^[^-]+$/,vS=/^-(webkit|moz|ms|o|khtml)-/,yS=/^-(ms)-/,xS=function(e){return!e||mS.test(e)||hS.test(e)},wS=function(e,t){return t.toUpperCase()},ah=function(e,t){return"".concat(t,"-")},kS=function(e,t){return t===void 0&&(t={}),xS(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(yS,ah):e=e.replace(vS,ah),e.replace(gS,wS))};ns.camelCase=kS;var bS=Gl&&Gl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},SS=bS(Uf),CS=ns;function xc(e,t){var n={};return!e||typeof e!="string"||(0,SS.default)(e,function(r,i){r&&i&&(n[(0,CS.camelCase)(r,t)]=i)}),n}xc.default=xc;var ES=xc;const $S=Dc(ES),g1=m1("end"),Hf=m1("start");function m1(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function zS(e){const t=Hf(e),n=g1(e);if(t&&n)return{start:t,end:n}}function fo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?sh(e.position):"start"in e||"end"in e?sh(e):"line"in e||"column"in e?wc(e):""}function wc(e){return uh(e&&e.line)+":"+uh(e&&e.column)}function sh(e){return wc(e&&e.start)+"-"+wc(e&&e.end)}function uh(e){return e&&typeof e=="number"?e:1}class et extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?o.ruleId=r:(o.source=r.slice(0,s),o.ruleId=r.slice(s+1))}if(!o.place&&o.ancestors&&o.ancestors){const s=o.ancestors[o.ancestors.length-1];s&&(o.place=s.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=fo(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}et.prototype.file="";et.prototype.name="";et.prototype.reason="";et.prototype.message="";et.prototype.stack="";et.prototype.column=void 0;et.prototype.line=void 0;et.prototype.ancestors=void 0;et.prototype.cause=void 0;et.prototype.fatal=void 0;et.prototype.place=void 0;et.prototype.ruleId=void 0;et.prototype.source=void 0;const Vf={}.hasOwnProperty,PS=new Map,IS=/[A-Z]/g,_S=new Set(["table","tbody","thead","tfoot","tr"]),TS=new Set(["td","th"]),v1="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function AS(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=MS(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=FS(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Bf:Xb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=y1(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function y1(e,t,n){if(t.type==="element")return RS(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return LS(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return OS(e,t,n);if(t.type==="mdxjsEsm")return NS(e,t);if(t.type==="root")return DS(e,t,n);if(t.type==="text")return jS(e,t)}function RS(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Bf,e.schema=i),e.ancestors.push(t);const o=w1(e,t.tagName,!1),l=BS(e,t);let a=Gf(e,t);return _S.has(t.tagName)&&(a=a.filter(function(s){return typeof s=="string"?!Bb(s):!0})),x1(e,l,o,t),Wf(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function LS(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Fo(e,t.position)}function NS(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Fo(e,t.position)}function OS(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Bf,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:w1(e,t.name,!0),l=US(e,t),a=Gf(e,t);return x1(e,l,o,t),Wf(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function DS(e,t,n){const r={};return Wf(r,Gf(e,t)),e.create(t,e.Fragment,r,n)}function jS(e,t){return t.value}function x1(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Wf(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function FS(e,t,n){return r;function r(i,o,l,a){const u=Array.isArray(l.children)?n:t;return a?u(o,l,a):u(o,l)}}function MS(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),s=Hf(r);return t(i,o,l,a,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function BS(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Vf.call(t.properties,i)){const o=HS(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&TS.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function US(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Fo(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else Fo(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Gf(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:PS;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const s=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(s){const u=i.get(s)||0;l=s+"-"+u,i.set(s,u+1)}}const a=y1(e,o,l);a!==void 0&&n.push(a)}return n}function HS(e,t,n){const r=Yb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ob(n):Jb(n)),r.property==="style"){let i=typeof n=="object"?n:VS(e,String(n));return e.stylePropertyNameCase==="css"&&(i=WS(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Wb[r.property]||r.property:r.attribute,n]}}function VS(e,t){try{return $S(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new et("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=v1+"#cannot-parse-style-attribute",i}}function w1(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=Zp(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=Zp(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Vf.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Fo(e)}function Fo(e,t){const n=new et("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=v1+"#cannot-handle-mdx-estrees-without-createevaluater",n}function WS(e){const t={};let n;for(n in e)Vf.call(e,n)&&(t[GS(n)]=e[n]);return t}function GS(e){let t=e.replace(IS,QS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function QS(e){return"-"+e.toLowerCase()}const Qs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},YS={};function Qf(e,t){const n=YS,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return k1(e,r,i)}function k1(e,t,n){if(qS(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ch(e.children,t,n)}return Array.isArray(e)?ch(e,t,n):""}function ch(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=k1(e[i],t,n);return r.join("")}function qS(e){return!!(e&&typeof e=="object")}const fh=document.createElement("i");function Yf(e){const t="&"+e+";";fh.innerHTML=t;const n=fh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function bt(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function _t(e,t){return e.length>0?(bt(e,e.length,0,t),e):t}const dh={}.hasOwnProperty;function b1(e){const t={};let n=-1;for(;++n<e.length;)KS(t,e[n]);return t}function KS(e,t){let n;for(n in t){const i=(dh.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){dh.call(i,l)||(i[l]=[]);const a=o[l];XS(i[l],Array.isArray(a)?a:a?[a]:[])}}}function XS(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);bt(e,0,0,r)}function S1(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function qt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const nt=er(/[A-Za-z]/),Je=er(/[\dA-Za-z]/),JS=er(/[#-'*+\--9=?A-Z^-~]/);function ka(e){return e!==null&&(e<32||e===127)}const kc=er(/\d/),ZS=er(/[\dA-Fa-f]/),eC=er(/[!-/:-@[-`{-~]/);function G(e){return e!==null&&e<-2}function ge(e){return e!==null&&(e<0||e===32)}function ne(e){return e===-2||e===-1||e===32}const rs=er(new RegExp("\\p{P}|\\p{S}","u")),Cr=er(/\s/);function er(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Pi(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&Je(e.charCodeAt(n+1))&&Je(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function oe(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(s){return ne(s)?(e.enter(n),a(s)):t(s)}function a(s){return ne(s)&&o++<i?(e.consume(s),a):(e.exit(n),t(s))}}const tC={tokenize:nC};function nC(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),oe(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return G(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const rC={tokenize:iC},ph={tokenize:oC};function iC(e){const t=this,n=[];let r=0,i,o,l;return a;function a(v){if(r<n.length){const w=n[r];return t.containerState=w[1],e.attempt(w[0].continuation,s,u)(v)}return u(v)}function s(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const w=t.events.length;let P=w,k;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){k=t.events[P][1].end;break}h(r);let b=w;for(;b<t.events.length;)t.events[b][1].end={...k},b++;return bt(t.events,P+1,0,t.events.slice(w)),t.events.length=b,u(v)}return a(v)}function u(v){if(r===n.length){if(!i)return d(v);if(i.currentConstruct&&i.currentConstruct.concrete)return g(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(ph,f,c)(v)}function f(v){return i&&m(),h(r),d(v)}function c(v){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,g(v)}function d(v){return t.containerState={},e.attempt(ph,p,g)(v)}function p(v){return r++,n.push([t.currentConstruct,t.containerState]),d(v)}function g(v){if(v===null){i&&m(),h(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),y(v)}function y(v){if(v===null){E(e.exit("chunkFlow"),!0),h(0),e.consume(v);return}return G(v)?(e.consume(v),E(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(v),y)}function E(v,w){const P=t.sliceStream(v);if(w&&P.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(P),t.parser.lazy[v.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<l&&(!i.events[k][1].end||i.events[k][1].end.offset>l))return;const b=t.events.length;let z=b,A,$;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){if(A){$=t.events[z][1].end;break}A=!0}for(h(r),k=b;k<t.events.length;)t.events[k][1].end={...$},k++;bt(t.events,z+1,0,t.events.slice(b)),t.events.length=k}}function h(v){let w=n.length;for(;w-- >v;){const P=n[w];t.containerState=P[1],P[0].exit.call(t,e)}n.length=v}function m(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function oC(e,t,n){return oe(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function yi(e){if(e===null||ge(e)||Cr(e))return 1;if(rs(e))return 2}function is(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const bc={name:"attention",resolveAll:lC,tokenize:aC};function lC(e,t){let n=-1,r,i,o,l,a,s,u,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},d={...e[n][1].start};hh(c,-s),hh(d,s),l={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:d},o={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=_t(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=_t(u,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),u=_t(u,is(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=_t(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,u=_t(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,bt(e,r-1,n-r+3,u),n=r+u.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function aC(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=yi(r);let o;return l;function l(s){return o=s,e.enter("attentionSequence"),a(s)}function a(s){if(s===o)return e.consume(s),a;const u=e.exit("attentionSequence"),f=yi(s),c=!f||f===2&&i||n.includes(s),d=!i||i===2&&f||n.includes(r);return u._open=!!(o===42?c:c&&(i||!d)),u._close=!!(o===42?d:d&&(f||!c)),t(s)}}function hh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const sC={name:"autolink",tokenize:uC};function uC(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return nt(p)?(e.consume(p),l):p===64?n(p):u(p)}function l(p){return p===43||p===45||p===46||Je(p)?(r=1,a(p)):u(p)}function a(p){return p===58?(e.consume(p),r=0,s):(p===43||p===45||p===46||Je(p))&&r++<32?(e.consume(p),a):(r=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||ka(p)?n(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),f):JS(p)?(e.consume(p),u):n(p)}function f(p){return Je(p)?c(p):n(p)}function c(p){return p===46?(e.consume(p),r=0,f):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):d(p)}function d(p){if((p===45||Je(p))&&r++<63){const g=p===45?d:c;return e.consume(p),g}return n(p)}}const Xo={partial:!0,tokenize:cC};function cC(e,t,n){return r;function r(o){return ne(o)?oe(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||G(o)?t(o):n(o)}}const C1={continuation:{tokenize:dC},exit:pC,name:"blockQuote",tokenize:fC};function fC(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return ne(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function dC(e,t,n){const r=this;return i;function i(l){return ne(l)?oe(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(C1,t,n)(l)}}function pC(e){e.exit("blockQuote")}const E1={name:"characterEscape",tokenize:hC};function hC(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return eC(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const $1={name:"characterReference",tokenize:gC};function gC(e,t,n){const r=this;let i=0,o,l;return a;function a(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),s}function s(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,l=Je,f(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=ZS,f):(e.enter("characterReferenceValue"),o=7,l=kc,f(c))}function f(c){if(c===59&&i){const d=e.exit("characterReferenceValue");return l===Je&&!Yf(r.sliceSerialize(d))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(c)&&i++<o?(e.consume(c),f):n(c)}}const gh={partial:!0,tokenize:vC},mh={concrete:!0,name:"codeFenced",tokenize:mC};function mC(e,t,n){const r=this,i={partial:!0,tokenize:P};let o=0,l=0,a;return s;function s(k){return u(k)}function u(k){const b=r.events[r.events.length-1];return o=b&&b[1].type==="linePrefix"?b[2].sliceSerialize(b[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(k)}function f(k){return k===a?(l++,e.consume(k),f):l<3?n(k):(e.exit("codeFencedFenceSequence"),ne(k)?oe(e,c,"whitespace")(k):c(k))}function c(k){return k===null||G(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(gh,y,w)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(k))}function d(k){return k===null||G(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(k)):ne(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),oe(e,p,"whitespace")(k)):k===96&&k===a?n(k):(e.consume(k),d)}function p(k){return k===null||G(k)?c(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(k))}function g(k){return k===null||G(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(k)):k===96&&k===a?n(k):(e.consume(k),g)}function y(k){return e.attempt(i,w,E)(k)}function E(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),h}function h(k){return o>0&&ne(k)?oe(e,m,"linePrefix",o+1)(k):m(k)}function m(k){return k===null||G(k)?e.check(gh,y,w)(k):(e.enter("codeFlowValue"),v(k))}function v(k){return k===null||G(k)?(e.exit("codeFlowValue"),m(k)):(e.consume(k),v)}function w(k){return e.exit("codeFenced"),t(k)}function P(k,b,z){let A=0;return $;function $(q){return k.enter("lineEnding"),k.consume(q),k.exit("lineEnding"),I}function I(q){return k.enter("codeFencedFence"),ne(q)?oe(k,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(q):N(q)}function N(q){return q===a?(k.enter("codeFencedFenceSequence"),V(q)):z(q)}function V(q){return q===a?(A++,k.consume(q),V):A>=l?(k.exit("codeFencedFenceSequence"),ne(q)?oe(k,W,"whitespace")(q):W(q)):z(q)}function W(q){return q===null||G(q)?(k.exit("codeFencedFence"),b(q)):z(q)}}}function vC(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const Ys={name:"codeIndented",tokenize:xC},yC={partial:!0,tokenize:wC};function xC(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),oe(e,o,"linePrefix",5)(u)}function o(u){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?s(u):G(u)?e.attempt(yC,l,s)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||G(u)?(e.exit("codeFlowValue"),l(u)):(e.consume(u),a)}function s(u){return e.exit("codeIndented"),t(u)}}function wC(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):G(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):oe(e,o,"linePrefix",5)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):G(l)?i(l):n(l)}}const kC={name:"codeText",previous:SC,resolve:bC,tokenize:CC};function bC(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function SC(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function CC(e,t,n){let r=0,i,o;return l;function l(c){return e.enter("codeText"),e.enter("codeTextSequence"),a(c)}function a(c){return c===96?(e.consume(c),r++,a):(e.exit("codeTextSequence"),s(c))}function s(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),s):c===96?(o=e.enter("codeTextSequence"),i=0,f(c)):G(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||G(c)?(e.exit("codeTextData"),s(c)):(e.consume(c),u)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(o.type="codeTextData",u(c))}}class EC{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ui(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ui(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ui(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ui(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ui(this.left,n.reverse())}}}function Ui(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function z1(e){const t={};let n=-1,r,i,o,l,a,s,u;const f=new EC(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,o=0,o<s.length&&s[o][1].type==="lineEndingBlank"&&(o+=2),o<s.length&&s[o][1].type==="content"))for(;++o<s.length&&s[o][1].type!=="content";)s[o][1].type==="chunkText"&&(s[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,$C(f,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(l=f.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},a=f.slice(i,n),a.unshift(r),f.splice(i,n-i+1,a))}}return bt(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!u}function $C(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,s=[],u={};let f,c,d=-1,p=n,g=0,y=0;const E=[y];for(;p;){for(;e.get(++i)[1]!==p;);o.push(i),p._tokenizer||(f=r.sliceStream(p),p.next||f.push(null),c&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(f),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=n;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(y=d+1,E.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):E.pop(),d=E.length;d--;){const h=a.slice(E[d],E[d+1]),m=o.pop();s.push([m,m+h.length-1]),e.splice(m,2,h)}for(s.reverse(),d=-1;++d<s.length;)u[g+s[d][0]]=g+s[d][1],g+=s[d][1]-s[d][0]-1;return u}const zC={resolve:IC,tokenize:_C},PC={partial:!0,tokenize:TC};function IC(e){return z1(e),e}function _C(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):G(a)?e.check(PC,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function TC(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),oe(e,o,"linePrefix")}function o(l){if(l===null||G(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function P1(e,t,n,r,i,o,l,a,s){const u=s||Number.POSITIVE_INFINITY;let f=0;return c;function c(h){return h===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(h),e.exit(o),d):h===null||h===32||h===41||ka(h)?n(h):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),y(h))}function d(h){return h===62?(e.enter(o),e.consume(h),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===62?(e.exit("chunkString"),e.exit(a),d(h)):h===null||h===60||G(h)?n(h):(e.consume(h),h===92?g:p)}function g(h){return h===60||h===62||h===92?(e.consume(h),p):p(h)}function y(h){return!f&&(h===null||h===41||ge(h))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(h)):f<u&&h===40?(e.consume(h),f++,y):h===41?(e.consume(h),f--,y):h===null||h===32||h===40||ka(h)?n(h):(e.consume(h),h===92?E:y)}function E(h){return h===40||h===41||h===92?(e.consume(h),y):y(h)}}function I1(e,t,n,r,i,o){const l=this;let a=0,s;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),f}function f(p){return a>999||p===null||p===91||p===93&&!s||p===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):G(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||G(p)||a++>999?(e.exit("chunkString"),f(p)):(e.consume(p),s||(s=!ne(p)),p===92?d:c)}function d(p){return p===91||p===92||p===93?(e.consume(p),a++,c):c(p)}}function _1(e,t,n,r,i,o){let l;return a;function a(d){return d===34||d===39||d===40?(e.enter(r),e.enter(i),e.consume(d),e.exit(i),l=d===40?41:d,s):n(d)}function s(d){return d===l?(e.enter(i),e.consume(d),e.exit(i),e.exit(r),t):(e.enter(o),u(d))}function u(d){return d===l?(e.exit(o),s(l)):d===null?n(d):G(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),oe(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(d))}function f(d){return d===l||d===null||G(d)?(e.exit("chunkString"),u(d)):(e.consume(d),d===92?c:f)}function c(d){return d===l||d===92?(e.consume(d),f):f(d)}}function po(e,t){let n;return r;function r(i){return G(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ne(i)?oe(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const AC={name:"definition",tokenize:LC},RC={partial:!0,tokenize:NC};function LC(e,t,n){const r=this;let i;return o;function o(p){return e.enter("definition"),l(p)}function l(p){return I1.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=qt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):n(p)}function s(p){return ge(p)?po(e,u)(p):u(p)}function u(p){return P1(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function f(p){return e.attempt(RC,c,c)(p)}function c(p){return ne(p)?oe(e,d,"whitespace")(p):d(p)}function d(p){return p===null||G(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function NC(e,t,n){return r;function r(a){return ge(a)?po(e,i)(a):n(a)}function i(a){return _1(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return ne(a)?oe(e,l,"whitespace")(a):l(a)}function l(a){return a===null||G(a)?t(a):n(a)}}const OC={name:"hardBreakEscape",tokenize:DC};function DC(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return G(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const jC={name:"headingAtx",resolve:FC,tokenize:MC};function FC(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},bt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function MC(e,t,n){let r=0;return i;function i(f){return e.enter("atxHeading"),o(f)}function o(f){return e.enter("atxHeadingSequence"),l(f)}function l(f){return f===35&&r++<6?(e.consume(f),l):f===null||ge(f)?(e.exit("atxHeadingSequence"),a(f)):n(f)}function a(f){return f===35?(e.enter("atxHeadingSequence"),s(f)):f===null||G(f)?(e.exit("atxHeading"),t(f)):ne(f)?oe(e,a,"whitespace")(f):(e.enter("atxHeadingText"),u(f))}function s(f){return f===35?(e.consume(f),s):(e.exit("atxHeadingSequence"),a(f))}function u(f){return f===null||f===35||ge(f)?(e.exit("atxHeadingText"),a(f)):(e.consume(f),u)}}const BC=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],vh=["pre","script","style","textarea"],UC={concrete:!0,name:"htmlFlow",resolveTo:WC,tokenize:GC},HC={partial:!0,tokenize:YC},VC={partial:!0,tokenize:QC};function WC(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function GC(e,t,n){const r=this;let i,o,l,a,s;return u;function u(S){return f(S)}function f(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),c}function c(S){return S===33?(e.consume(S),d):S===47?(e.consume(S),o=!0,y):S===63?(e.consume(S),i=3,r.interrupt?t:x):nt(S)?(e.consume(S),l=String.fromCharCode(S),E):n(S)}function d(S){return S===45?(e.consume(S),i=2,p):S===91?(e.consume(S),i=5,a=0,g):nt(S)?(e.consume(S),i=4,r.interrupt?t:x):n(S)}function p(S){return S===45?(e.consume(S),r.interrupt?t:x):n(S)}function g(S){const pe="CDATA[";return S===pe.charCodeAt(a++)?(e.consume(S),a===pe.length?r.interrupt?t:N:g):n(S)}function y(S){return nt(S)?(e.consume(S),l=String.fromCharCode(S),E):n(S)}function E(S){if(S===null||S===47||S===62||ge(S)){const pe=S===47,B=l.toLowerCase();return!pe&&!o&&vh.includes(B)?(i=1,r.interrupt?t(S):N(S)):BC.includes(l.toLowerCase())?(i=6,pe?(e.consume(S),h):r.interrupt?t(S):N(S)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(S):o?m(S):v(S))}return S===45||Je(S)?(e.consume(S),l+=String.fromCharCode(S),E):n(S)}function h(S){return S===62?(e.consume(S),r.interrupt?t:N):n(S)}function m(S){return ne(S)?(e.consume(S),m):$(S)}function v(S){return S===47?(e.consume(S),$):S===58||S===95||nt(S)?(e.consume(S),w):ne(S)?(e.consume(S),v):$(S)}function w(S){return S===45||S===46||S===58||S===95||Je(S)?(e.consume(S),w):P(S)}function P(S){return S===61?(e.consume(S),k):ne(S)?(e.consume(S),P):v(S)}function k(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),s=S,b):ne(S)?(e.consume(S),k):z(S)}function b(S){return S===s?(e.consume(S),s=null,A):S===null||G(S)?n(S):(e.consume(S),b)}function z(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||ge(S)?P(S):(e.consume(S),z)}function A(S){return S===47||S===62||ne(S)?v(S):n(S)}function $(S){return S===62?(e.consume(S),I):n(S)}function I(S){return S===null||G(S)?N(S):ne(S)?(e.consume(S),I):n(S)}function N(S){return S===45&&i===2?(e.consume(S),fe):S===60&&i===1?(e.consume(S),ae):S===62&&i===4?(e.consume(S),Y):S===63&&i===3?(e.consume(S),x):S===93&&i===5?(e.consume(S),M):G(S)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(HC,Q,V)(S)):S===null||G(S)?(e.exit("htmlFlowData"),V(S)):(e.consume(S),N)}function V(S){return e.check(VC,W,Q)(S)}function W(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),q}function q(S){return S===null||G(S)?V(S):(e.enter("htmlFlowData"),N(S))}function fe(S){return S===45?(e.consume(S),x):N(S)}function ae(S){return S===47?(e.consume(S),l="",D):N(S)}function D(S){if(S===62){const pe=l.toLowerCase();return vh.includes(pe)?(e.consume(S),Y):N(S)}return nt(S)&&l.length<8?(e.consume(S),l+=String.fromCharCode(S),D):N(S)}function M(S){return S===93?(e.consume(S),x):N(S)}function x(S){return S===62?(e.consume(S),Y):S===45&&i===2?(e.consume(S),x):N(S)}function Y(S){return S===null||G(S)?(e.exit("htmlFlowData"),Q(S)):(e.consume(S),Y)}function Q(S){return e.exit("htmlFlow"),t(S)}}function QC(e,t,n){const r=this;return i;function i(l){return G(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function YC(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Xo,t,n)}}const qC={name:"htmlText",tokenize:KC};function KC(e,t,n){const r=this;let i,o,l;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),s}function s(x){return x===33?(e.consume(x),u):x===47?(e.consume(x),P):x===63?(e.consume(x),v):nt(x)?(e.consume(x),z):n(x)}function u(x){return x===45?(e.consume(x),f):x===91?(e.consume(x),o=0,g):nt(x)?(e.consume(x),m):n(x)}function f(x){return x===45?(e.consume(x),p):n(x)}function c(x){return x===null?n(x):x===45?(e.consume(x),d):G(x)?(l=c,ae(x)):(e.consume(x),c)}function d(x){return x===45?(e.consume(x),p):c(x)}function p(x){return x===62?fe(x):x===45?d(x):c(x)}function g(x){const Y="CDATA[";return x===Y.charCodeAt(o++)?(e.consume(x),o===Y.length?y:g):n(x)}function y(x){return x===null?n(x):x===93?(e.consume(x),E):G(x)?(l=y,ae(x)):(e.consume(x),y)}function E(x){return x===93?(e.consume(x),h):y(x)}function h(x){return x===62?fe(x):x===93?(e.consume(x),h):y(x)}function m(x){return x===null||x===62?fe(x):G(x)?(l=m,ae(x)):(e.consume(x),m)}function v(x){return x===null?n(x):x===63?(e.consume(x),w):G(x)?(l=v,ae(x)):(e.consume(x),v)}function w(x){return x===62?fe(x):v(x)}function P(x){return nt(x)?(e.consume(x),k):n(x)}function k(x){return x===45||Je(x)?(e.consume(x),k):b(x)}function b(x){return G(x)?(l=b,ae(x)):ne(x)?(e.consume(x),b):fe(x)}function z(x){return x===45||Je(x)?(e.consume(x),z):x===47||x===62||ge(x)?A(x):n(x)}function A(x){return x===47?(e.consume(x),fe):x===58||x===95||nt(x)?(e.consume(x),$):G(x)?(l=A,ae(x)):ne(x)?(e.consume(x),A):fe(x)}function $(x){return x===45||x===46||x===58||x===95||Je(x)?(e.consume(x),$):I(x)}function I(x){return x===61?(e.consume(x),N):G(x)?(l=I,ae(x)):ne(x)?(e.consume(x),I):A(x)}function N(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),i=x,V):G(x)?(l=N,ae(x)):ne(x)?(e.consume(x),N):(e.consume(x),W)}function V(x){return x===i?(e.consume(x),i=void 0,q):x===null?n(x):G(x)?(l=V,ae(x)):(e.consume(x),V)}function W(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||ge(x)?A(x):(e.consume(x),W)}function q(x){return x===47||x===62||ge(x)?A(x):n(x)}function fe(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):n(x)}function ae(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),D}function D(x){return ne(x)?oe(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):M(x)}function M(x){return e.enter("htmlTextData"),l(x)}}const qf={name:"labelEnd",resolveAll:eE,resolveTo:tE,tokenize:nE},XC={tokenize:rE},JC={tokenize:iE},ZC={tokenize:oE};function eE(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&bt(e,0,e.length,n),e}function tE(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const s={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[l][1].end}},f={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",s,t],["enter",u,t]],a=_t(a,e.slice(o+1,o+r+3)),a=_t(a,[["enter",f,t]]),a=_t(a,is(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=_t(a,[["exit",f,t],e[l-2],e[l-1],["exit",u,t]]),a=_t(a,e.slice(l+1)),a=_t(a,[["exit",s,t]]),bt(e,o,e.length,a),e}function nE(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(d){return o?o._inactive?c(d):(l=r.parser.defined.includes(qt(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),s):n(d)}function s(d){return d===40?e.attempt(XC,f,l?f:c)(d):d===91?e.attempt(JC,f,l?u:c)(d):l?f(d):c(d)}function u(d){return e.attempt(ZC,f,c)(d)}function f(d){return t(d)}function c(d){return o._balanced=!0,n(d)}}function rE(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return ge(c)?po(e,o)(c):o(c)}function o(c){return c===41?f(c):P1(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function l(c){return ge(c)?po(e,s)(c):f(c)}function a(c){return n(c)}function s(c){return c===34||c===39||c===40?_1(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function u(c){return ge(c)?po(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function iE(e,t,n){const r=this;return i;function i(a){return I1.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(qt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function oE(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const lE={name:"labelStartImage",resolveAll:qf.resolveAll,tokenize:aE};function aE(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const sE={name:"labelStartLink",resolveAll:qf.resolveAll,tokenize:uE};function uE(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const qs={name:"lineEnding",tokenize:cE};function cE(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),oe(e,t,"linePrefix")}}const Fl={name:"thematicBreak",tokenize:fE};function fE(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),l(u)}function l(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||G(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),ne(u)?oe(e,a,"whitespace")(u):a(u))}}const at={continuation:{tokenize:gE},exit:vE,name:"list",tokenize:hE},dE={partial:!0,tokenize:yE},pE={partial:!0,tokenize:mE};function hE(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(p){const g=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:kc(p)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Fl,n,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return n(p)}function s(p){return kc(p)&&++l<10?(e.consume(p),s):(!r.interrupt||l<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Xo,r.interrupt?n:f,e.attempt(dE,d,c))}function f(p){return r.containerState.initialBlankLine=!0,o++,d(p)}function c(p){return ne(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),d):n(p)}function d(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function gE(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Xo,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,oe(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!ne(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(pE,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,oe(e,e.attempt(at,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function mE(e,t,n){const r=this;return oe(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function vE(e){e.exit(this.containerState.type)}function yE(e,t,n){const r=this;return oe(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const l=r.events[r.events.length-1];return!ne(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const yh={name:"setextUnderline",resolveTo:xE,tokenize:wE};function xE(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function wE(e,t,n){const r=this;let i;return o;function o(u){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,l(u)):n(u)}function l(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),ne(u)?oe(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||G(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const kE={tokenize:bE};function bE(e){const t=this,n=e.attempt(Xo,r,e.attempt(this.parser.constructs.flowInitial,i,oe(e,e.attempt(this.parser.constructs.flow,i,e.attempt(zC,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const SE={resolveAll:A1()},CE=T1("string"),EE=T1("text");function T1(e){return{resolveAll:A1(e==="text"?$E:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(f){return u(f)?o(f):a(f)}function a(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),s}function s(f){return u(f)?(n.exit("data"),o(f)):(n.consume(f),s)}function u(f){if(f===null)return!0;const c=i[f];let d=-1;if(c)for(;++d<c.length;){const p=c[d];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function A1(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function $E(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,s;for(;o--;){const u=i[o];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(u===-2)s=!0,a++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:r.start._bufferIndex+l,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const zE={42:at,43:at,45:at,48:at,49:at,50:at,51:at,52:at,53:at,54:at,55:at,56:at,57:at,62:C1},PE={91:AC},IE={[-2]:Ys,[-1]:Ys,32:Ys},_E={35:jC,42:Fl,45:[yh,Fl],60:UC,61:yh,95:Fl,96:mh,126:mh},TE={38:$1,92:E1},AE={[-5]:qs,[-4]:qs,[-3]:qs,33:lE,38:$1,42:bc,60:[sC,qC],91:sE,92:[OC,E1],93:qf,95:bc,96:kC},RE={null:[bc,SE]},LE={null:[42,95]},NE={null:[]},OE=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:LE,contentInitial:PE,disable:NE,document:zE,flow:_E,flowInitial:IE,insideSpan:RE,string:TE,text:AE},Symbol.toStringTag,{value:"Module"}));function DE(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let l=[],a=[];const s={attempt:b(P),check:b(k),consume:m,enter:v,exit:w,interrupt:b(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:y,events:[],now:g,parser:e,previous:null,sliceSerialize:d,sliceStream:p,write:c};let f=t.tokenize.call(u,s);return t.resolveAll&&o.push(t),u;function c(I){return l=_t(l,I),E(),l[l.length-1]!==null?[]:(z(t,0),u.events=is(o,u.events,u),u.events)}function d(I,N){return FE(p(I),N)}function p(I){return jE(l,I)}function g(){const{_bufferIndex:I,_index:N,line:V,column:W,offset:q}=r;return{_bufferIndex:I,_index:N,line:V,column:W,offset:q}}function y(I){i[I.line]=I.column,$()}function E(){let I;for(;r._index<l.length;){const N=l[r._index];if(typeof N=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<N.length;)h(N.charCodeAt(r._bufferIndex));else h(N)}}function h(I){f=f(I)}function m(I){G(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,$()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=I}function v(I,N){const V=N||{};return V.type=I,V.start=g(),u.events.push(["enter",V,u]),a.push(V),V}function w(I){const N=a.pop();return N.end=g(),u.events.push(["exit",N,u]),N}function P(I,N){z(I,N.from)}function k(I,N){N.restore()}function b(I,N){return V;function V(W,q,fe){let ae,D,M,x;return Array.isArray(W)?Q(W):"tokenize"in W?Q([W]):Y(W);function Y(H){return K;function K(_e){const Te=_e!==null&&H[_e],me=_e!==null&&H.null,$t=[...Array.isArray(Te)?Te:Te?[Te]:[],...Array.isArray(me)?me:me?[me]:[]];return Q($t)(_e)}}function Q(H){return ae=H,D=0,H.length===0?fe:S(H[D])}function S(H){return K;function K(_e){return x=A(),M=H,H.partial||(u.currentConstruct=H),H.name&&u.parser.constructs.disable.null.includes(H.name)?B():H.tokenize.call(N?Object.assign(Object.create(u),N):u,s,pe,B)(_e)}}function pe(H){return I(M,x),q}function B(H){return x.restore(),++D<ae.length?S(ae[D]):fe}}}function z(I,N){I.resolveAll&&!o.includes(I)&&o.push(I),I.resolve&&bt(u.events,N,u.events.length-N,I.resolve(u.events.slice(N),u)),I.resolveTo&&(u.events=I.resolveTo(u.events,u))}function A(){const I=g(),N=u.previous,V=u.currentConstruct,W=u.events.length,q=Array.from(a);return{from:W,restore:fe};function fe(){r=I,u.previous=N,u.currentConstruct=V,u.events.length=W,a=q,$()}}function $(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function jE(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function FE(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}function ME(e){const r={constructs:b1([OE,...(e||{}).extensions||[]]),content:i(tC),defined:[],document:i(rC),flow:i(kE),lazy:{},string:i(CE),text:i(EE)};return r;function i(o){return l;function l(a){return DE(r,o,a)}}}function BE(e){for(;!z1(e););return e}const xh=/[\0\t\n\r]/g;function UE(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const s=[];let u,f,c,d,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),c=0,t="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(xh.lastIndex=c,u=xh.exec(o),d=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(d),!u){t=o.slice(c);break}if(p===10&&c===d&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),c<d&&(s.push(o.slice(c,d)),e+=d-c),p){case 0:{s.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,s.push(-2);e++<f;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}c=d+1}return a&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}const HE=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function VE(e){return e.replace(HE,WE)}function WE(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return S1(n.slice(o?2:1),o?16:10)}return Yf(n)||e}const R1={}.hasOwnProperty;function GE(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),QE(n)(BE(ME(n).document().write(UE()(e,t,!0))))}function QE(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(vd),autolinkProtocol:A,autolinkEmail:A,atxHeading:o(hd),blockQuote:o(me),characterEscape:A,characterReference:A,codeFenced:o($t),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o($t,l),codeText:o(Dt,l),codeTextData:A,data:A,codeFlowValue:A,definition:o(We),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(Gy),hardBreakEscape:o(gd),hardBreakTrailing:o(gd),htmlFlow:o(md,l),htmlFlowData:A,htmlText:o(md,l),htmlTextData:A,image:o(Qy),label:l,link:o(vd),listItem:o(Yy),listItemValue:d,listOrdered:o(yd,c),listUnordered:o(yd),paragraph:o(qy),reference:S,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(hd),strong:o(Ky),thematicBreak:o(Jy)},exit:{atxHeading:s(),atxHeadingSequence:P,autolink:s(),autolinkEmail:Te,autolinkProtocol:_e,blockQuote:s(),characterEscapeValue:$,characterReferenceMarkerHexadecimal:B,characterReferenceMarkerNumeric:B,characterReferenceValue:H,characterReference:K,codeFenced:s(E),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:$,codeIndented:s(h),codeText:s(q),codeTextData:$,data:$,definition:s(),definitionDestinationString:w,definitionLabelString:m,definitionTitleString:v,emphasis:s(),hardBreakEscape:s(N),hardBreakTrailing:s(N),htmlFlow:s(V),htmlFlowData:$,htmlText:s(W),htmlTextData:$,image:s(ae),label:M,labelText:D,lineEnding:I,link:s(fe),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:pe,resourceDestinationString:x,resourceTitleString:Y,resource:Q,setextHeading:s(z),setextHeadingLineSequence:b,setextHeadingText:k,strong:s(),thematicBreak:s()}};L1(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(_){let j={type:"root",children:[]};const J={stack:[j],tokenStack:[],config:t,enter:a,exit:u,buffer:l,resume:f,data:n},ie=[];let he=-1;for(;++he<_.length;)if(_[he][1].type==="listOrdered"||_[he][1].type==="listUnordered")if(_[he][0]==="enter")ie.push(he);else{const jt=ie.pop();he=i(_,jt,he)}for(he=-1;++he<_.length;){const jt=t[_[he][0]];R1.call(jt,_[he][1].type)&&jt[_[he][1].type].call(Object.assign({sliceSerialize:_[he][2].sliceSerialize},J),_[he][1])}if(J.tokenStack.length>0){const jt=J.tokenStack[J.tokenStack.length-1];(jt[1]||wh).call(J,void 0,jt[0])}for(j.position={start:$n(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:$n(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},he=-1;++he<t.transforms.length;)j=t.transforms[he](j)||j;return j}function i(_,j,J){let ie=j-1,he=-1,jt=!1,tr,sn,Ai,Ri;for(;++ie<=J;){const gt=_[ie];switch(gt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{gt[0]==="enter"?he++:he--,Ri=void 0;break}case"lineEndingBlank":{gt[0]==="enter"&&(tr&&!Ri&&!he&&!Ai&&(Ai=ie),Ri=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ri=void 0}if(!he&&gt[0]==="enter"&&gt[1].type==="listItemPrefix"||he===-1&&gt[0]==="exit"&&(gt[1].type==="listUnordered"||gt[1].type==="listOrdered")){if(tr){let Nr=ie;for(sn=void 0;Nr--;){const un=_[Nr];if(un[1].type==="lineEnding"||un[1].type==="lineEndingBlank"){if(un[0]==="exit")continue;sn&&(_[sn][1].type="lineEndingBlank",jt=!0),un[1].type="lineEnding",sn=Nr}else if(!(un[1].type==="linePrefix"||un[1].type==="blockQuotePrefix"||un[1].type==="blockQuotePrefixWhitespace"||un[1].type==="blockQuoteMarker"||un[1].type==="listItemIndent"))break}Ai&&(!sn||Ai<sn)&&(tr._spread=!0),tr.end=Object.assign({},sn?_[sn][1].start:gt[1].end),_.splice(sn||ie,0,["exit",tr,gt[2]]),ie++,J++}if(gt[1].type==="listItemPrefix"){const Nr={type:"listItem",_spread:!1,start:Object.assign({},gt[1].start),end:void 0};tr=Nr,_.splice(ie,0,["enter",Nr,gt[2]]),ie++,J++,Ai=void 0,Ri=!0}}}return _[j][1]._spread=jt,J}function o(_,j){return J;function J(ie){a.call(this,_(ie),ie),j&&j.call(this,ie)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(_,j,J){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([j,J||void 0]),_.position={start:$n(j.start),end:void 0}}function s(_){return j;function j(J){_&&_.call(this,J),u.call(this,J)}}function u(_,j){const J=this.stack.pop(),ie=this.tokenStack.pop();if(ie)ie[0].type!==_.type&&(j?j.call(this,_,ie[0]):(ie[1]||wh).call(this,_,ie[0]));else throw new Error("Cannot close `"+_.type+"` ("+fo({start:_.start,end:_.end})+"): it’s not open");J.position.end=$n(_.end)}function f(){return Qf(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(_){if(this.data.expectingFirstListItemValue){const j=this.stack[this.stack.length-2];j.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0}}function p(){const _=this.resume(),j=this.stack[this.stack.length-1];j.lang=_}function g(){const _=this.resume(),j=this.stack[this.stack.length-1];j.meta=_}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_.replace(/(\r?\n|\r)$/g,"")}function m(_){const j=this.resume(),J=this.stack[this.stack.length-1];J.label=j,J.identifier=qt(this.sliceSerialize(_)).toLowerCase()}function v(){const _=this.resume(),j=this.stack[this.stack.length-1];j.title=_}function w(){const _=this.resume(),j=this.stack[this.stack.length-1];j.url=_}function P(_){const j=this.stack[this.stack.length-1];if(!j.depth){const J=this.sliceSerialize(_).length;j.depth=J}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function b(_){const j=this.stack[this.stack.length-1];j.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2}function z(){this.data.setextHeadingSlurpLineEnding=void 0}function A(_){const J=this.stack[this.stack.length-1].children;let ie=J[J.length-1];(!ie||ie.type!=="text")&&(ie=Xy(),ie.position={start:$n(_.start),end:void 0},J.push(ie)),this.stack.push(ie)}function $(_){const j=this.stack.pop();j.value+=this.sliceSerialize(_),j.position.end=$n(_.end)}function I(_){const j=this.stack[this.stack.length-1];if(this.data.atHardBreak){const J=j.children[j.children.length-1];J.position.end=$n(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(j.type)&&(A.call(this,_),$.call(this,_))}function N(){this.data.atHardBreak=!0}function V(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_}function W(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_}function q(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_}function fe(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=j,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function ae(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=j,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function D(_){const j=this.sliceSerialize(_),J=this.stack[this.stack.length-2];J.label=VE(j),J.identifier=qt(j).toLowerCase()}function M(){const _=this.stack[this.stack.length-1],j=this.resume(),J=this.stack[this.stack.length-1];if(this.data.inReference=!0,J.type==="link"){const ie=_.children;J.children=ie}else J.alt=j}function x(){const _=this.resume(),j=this.stack[this.stack.length-1];j.url=_}function Y(){const _=this.resume(),j=this.stack[this.stack.length-1];j.title=_}function Q(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function pe(_){const j=this.resume(),J=this.stack[this.stack.length-1];J.label=j,J.identifier=qt(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full"}function B(_){this.data.characterReferenceType=_.type}function H(_){const j=this.sliceSerialize(_),J=this.data.characterReferenceType;let ie;J?(ie=S1(j,J==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ie=Yf(j);const he=this.stack[this.stack.length-1];he.value+=ie}function K(_){const j=this.stack.pop();j.position.end=$n(_.end)}function _e(_){$.call(this,_);const j=this.stack[this.stack.length-1];j.url=this.sliceSerialize(_)}function Te(_){$.call(this,_);const j=this.stack[this.stack.length-1];j.url="mailto:"+this.sliceSerialize(_)}function me(){return{type:"blockquote",children:[]}}function $t(){return{type:"code",lang:null,meta:null,value:""}}function Dt(){return{type:"inlineCode",value:""}}function We(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Gy(){return{type:"emphasis",children:[]}}function hd(){return{type:"heading",depth:0,children:[]}}function gd(){return{type:"break"}}function md(){return{type:"html",value:""}}function Qy(){return{type:"image",title:null,url:"",alt:null}}function vd(){return{type:"link",title:null,url:"",children:[]}}function yd(_){return{type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function Yy(_){return{type:"listItem",spread:_._spread,checked:null,children:[]}}function qy(){return{type:"paragraph",children:[]}}function Ky(){return{type:"strong",children:[]}}function Xy(){return{type:"text",value:""}}function Jy(){return{type:"thematicBreak"}}}function $n(e){return{line:e.line,column:e.column,offset:e.offset}}function L1(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?L1(e,r):YE(e,r)}}function YE(e,t){let n;for(n in t)if(R1.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function wh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+fo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+fo({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+fo({start:t.start,end:t.end})+") is still open")}function qE(e){const t=this;t.parser=n;function n(r){return GE(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function KE(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function XE(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function JE(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function ZE(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function e$(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function t$(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Pi(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function n$(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function r$(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function N1(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function i$(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return N1(e,t);const i={src:Pi(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function o$(e,t){const n={src:Pi(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function l$(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function a$(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return N1(e,t);const i={href:Pi(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function s$(e,t){const n={href:Pi(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function u$(e,t,n){const r=e.all(t),i=n?c$(n):O1(t),o={},l=[];if(typeof t.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const f=r[a];(i||a!==0||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?l.push(...f.children):l.push(f)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&l.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,u),e.applyData(t,u)}function c$(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=O1(n[r])}return t}function O1(e){const t=e.spread;return t??e.children.length>1}function f$(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function d$(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function p$(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function h$(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function g$(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Hf(t.children[1]),s=g1(t.children[t.children.length-1]);a&&s&&(l.position={start:a,end:s}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function m$(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let s=-1;const u=[];for(;++s<a;){const c=t.children[s],d={},p=l?l[s]:void 0;p&&(d.align=p);let g={type:"element",tagName:o,properties:d,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),u.push(g)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,f),e.applyData(t,f)}function v$(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const kh=9,bh=32;function y$(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Sh(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Sh(t.slice(i),i>0,!1)),o.join("")}function Sh(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===kh||o===bh;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===kh||o===bh;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function x$(e,t){const n={type:"text",value:y$(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function w$(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const k$={blockquote:KE,break:XE,code:JE,delete:ZE,emphasis:e$,footnoteReference:t$,heading:n$,html:r$,imageReference:i$,image:o$,inlineCode:l$,linkReference:a$,link:s$,listItem:u$,list:f$,paragraph:d$,root:p$,strong:h$,table:g$,tableCell:v$,tableRow:m$,text:x$,thematicBreak:w$,toml:ml,yaml:ml,definition:ml,footnoteDefinition:ml};function ml(){}const D1=-1,os=0,ho=1,ba=2,Kf=3,Xf=4,Jf=5,Zf=6,j1=7,F1=8,Ch=typeof self=="object"?self:globalThis,b$=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case os:case D1:return n(l,i);case ho:{const a=n([],i);for(const s of l)a.push(r(s));return a}case ba:{const a=n({},i);for(const[s,u]of l)a[r(s)]=r(u);return a}case Kf:return n(new Date(l),i);case Xf:{const{source:a,flags:s}=l;return n(new RegExp(a,s),i)}case Jf:{const a=n(new Map,i);for(const[s,u]of l)a.set(r(s),r(u));return a}case Zf:{const a=n(new Set,i);for(const s of l)a.add(r(s));return a}case j1:{const{name:a,message:s}=l;return n(new Ch[a](s),i)}case F1:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}}return n(new Ch[o](l),i)};return r},Eh=e=>b$(new Map,e)(0),jr="",{toString:S$}={},{keys:C$}=Object,Hi=e=>{const t=typeof e;if(t!=="object"||!e)return[os,t];const n=S$.call(e).slice(8,-1);switch(n){case"Array":return[ho,jr];case"Object":return[ba,jr];case"Date":return[Kf,jr];case"RegExp":return[Xf,jr];case"Map":return[Jf,jr];case"Set":return[Zf,jr];case"DataView":return[ho,n]}return n.includes("Array")?[ho,n]:n.includes("Error")?[j1,n]:[ba,n]},vl=([e,t])=>e===os&&(t==="function"||t==="symbol"),E$=(e,t,n,r)=>{const i=(l,a)=>{const s=r.push(l)-1;return n.set(a,s),s},o=l=>{if(n.has(l))return n.get(l);let[a,s]=Hi(l);switch(a){case os:{let f=l;switch(s){case"bigint":a=F1,f=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);f=null;break;case"undefined":return i([D1],l)}return i([a,f],l)}case ho:{if(s){let d=l;return s==="DataView"?d=new Uint8Array(l.buffer):s==="ArrayBuffer"&&(d=new Uint8Array(l)),i([s,[...d]],l)}const f=[],c=i([a,f],l);for(const d of l)f.push(o(d));return c}case ba:{if(s)switch(s){case"BigInt":return i([s,l.toString()],l);case"Boolean":case"Number":case"String":return i([s,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const f=[],c=i([a,f],l);for(const d of C$(l))(e||!vl(Hi(l[d])))&&f.push([o(d),o(l[d])]);return c}case Kf:return i([a,l.toISOString()],l);case Xf:{const{source:f,flags:c}=l;return i([a,{source:f,flags:c}],l)}case Jf:{const f=[],c=i([a,f],l);for(const[d,p]of l)(e||!(vl(Hi(d))||vl(Hi(p))))&&f.push([o(d),o(p)]);return c}case Zf:{const f=[],c=i([a,f],l);for(const d of l)(e||!vl(Hi(d)))&&f.push(o(d));return c}}const{message:u}=l;return i([a,{name:s,message:u}],l)};return o},$h=(e,{json:t,lossy:n}={})=>{const r=[];return E$(!(t||n),!!t,new Map,r)(e),r},Sa=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Eh($h(e,t)):structuredClone(e):(e,t)=>Eh($h(e,t));function $$(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function z$(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function P$(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||$$,r=e.options.footnoteBackLabel||z$,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const f=e.all(u),c=String(u.identifier).toUpperCase(),d=Pi(c.toLowerCase());let p=0;const g=[],y=e.footnoteCounts.get(c);for(;y!==void 0&&++p<=y;){g.length>0&&g.push({type:"text",value:" "});let m=typeof n=="string"?n:n(s,p);typeof m=="string"&&(m={type:"text",value:m}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+d+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,p),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const E=f[f.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const m=E.children[E.children.length-1];m&&m.type==="text"?m.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...g)}else f.push(...g);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+d},children:e.wrap(f,!0)};e.patch(u,h),a.push(h)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Sa(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const ls=function(e){if(e==null)return A$;if(typeof e=="function")return as(e);if(typeof e=="object")return Array.isArray(e)?I$(e):_$(e);if(typeof e=="string")return T$(e);throw new Error("Expected function, string, or object as test")};function I$(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=ls(e[n]);return as(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function _$(e){const t=e;return as(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function T$(e){return as(t);function t(n){return n&&n.type===e}}function as(e){return t;function t(n,r,i){return!!(R$(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function A$(){return!0}function R$(e){return e!==null&&typeof e=="object"&&"type"in e}const M1=[],L$=!0,Sc=!1,N$="skip";function B1(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=ls(i),l=r?-1:1;a(e,void 0,[])();function a(s,u,f){const c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return d;function d(){let p=M1,g,y,E;if((!t||o(s,u,f[f.length-1]||void 0))&&(p=O$(n(s,f)),p[0]===Sc))return p;if("children"in s&&s.children){const h=s;if(h.children&&p[0]!==N$)for(y=(r?h.children.length:-1)+l,E=f.concat(h);y>-1&&y<h.children.length;){const m=h.children[y];if(g=a(m,y,E)(),g[0]===Sc)return g;y=typeof g[1]=="number"?g[1]:y+l}}return p}}}function O$(e){return Array.isArray(e)?e:typeof e=="number"?[L$,e]:e==null?M1:[e]}function ed(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),B1(e,o,a,i);function a(s,u){const f=u[u.length-1],c=f?f.children.indexOf(s):void 0;return l(s,c,f)}}const Cc={}.hasOwnProperty,D$={};function j$(e,t){const n=t||D$,r=new Map,i=new Map,o=new Map,l={...k$,...n.handlers},a={all:u,applyData:M$,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:s,options:n,patch:F$,wrap:U$};return ed(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,d=String(f.identifier).toUpperCase();c.has(d)||c.set(d,f)}}),a;function s(f,c){const d=f.type,p=a.handlers[d];if(Cc.call(a.handlers,d)&&p)return p(a,f,c);if(a.options.passThrough&&a.options.passThrough.includes(d)){if("children"in f){const{children:y,...E}=f,h=Sa(E);return h.children=a.all(f),h}return Sa(f)}return(a.options.unknownHandler||B$)(a,f,c)}function u(f){const c=[];if("children"in f){const d=f.children;let p=-1;for(;++p<d.length;){const g=a.one(d[p],f);if(g){if(p&&d[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=zh(g.value)),!Array.isArray(g)&&g.type==="element")){const y=g.children[0];y&&y.type==="text"&&(y.value=zh(y.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function F$(e,t){e.position&&(t.position=zS(e))}function M$(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,Sa(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function B$(e,t){const n=t.data||{},r="value"in t&&!(Cc.call(n,"hProperties")||Cc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function U$(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function zh(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ph(e,t){const n=j$(e,t),r=n.one(e,void 0),i=P$(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function H$(e,t){return e&&"run"in e?async function(n,r){const i=Ph(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ph(n,{file:r,...e||t})}}function Ih(e){if(e)throw e}var Ml=Object.prototype.hasOwnProperty,U1=Object.prototype.toString,_h=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Ah=function(t){return typeof Array.isArray=="function"?Array.isArray(t):U1.call(t)==="[object Array]"},Rh=function(t){if(!t||U1.call(t)!=="[object Object]")return!1;var n=Ml.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Ml.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Ml.call(t,i)},Lh=function(t,n){_h&&n.name==="__proto__"?_h(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Nh=function(t,n){if(n==="__proto__")if(Ml.call(t,n)){if(Th)return Th(t,n).value}else return;return t[n]},V$=function e(){var t,n,r,i,o,l,a=arguments[0],s=1,u=arguments.length,f=!1;for(typeof a=="boolean"&&(f=a,a=arguments[1]||{},s=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=Nh(a,n),i=Nh(t,n),a!==i&&(f&&i&&(Rh(i)||(o=Ah(i)))?(o?(o=!1,l=r&&Ah(r)?r:[]):l=r&&Rh(r)?r:{},Lh(a,{name:n,newValue:e(f,l,i)})):typeof i<"u"&&Lh(a,{name:n,newValue:i}));return a};const Ks=Dc(V$);function Ec(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function W$(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(s,...u){const f=e[++o];let c=-1;if(s){l(s);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,f?G$(f,a)(...u):l(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function G$(e,t){let n;return r;function r(...l){const a=e.length>l.length;let s;a&&l.push(i);try{s=e.apply(this,l)}catch(u){const f=u;if(a&&n)throw f;return i(f)}a||(s&&s.then&&typeof s.then=="function"?s.then(o,i):s instanceof Error?i(s):o(s))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const en={basename:Q$,dirname:Y$,extname:q$,join:K$,sep:"/"};function Q$(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Jo(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function Y$(e){if(Jo(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function q$(e){Jo(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function K$(...e){let t=-1,n;for(;++t<e.length;)Jo(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":X$(n)}function X$(e){Jo(e);const t=e.codePointAt(0)===47;let n=J$(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function J$(e,t){let n="",r=0,i=-1,o=0,l=-1,a,s;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Jo(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Z$={cwd:ez};function ez(){return"/"}function $c(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function tz(e){if(typeof e=="string")e=new URL(e);else if(!$c(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return nz(e)}function nz(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Xs=["history","path","basename","stem","extname","dirname"];class H1{constructor(t){let n;t?$c(t)?n={path:t}:typeof t=="string"||rz(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Z$.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Xs.length;){const o=Xs[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Xs.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?en.basename(this.path):void 0}set basename(t){Zs(t,"basename"),Js(t,"basename"),this.path=en.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?en.dirname(this.path):void 0}set dirname(t){Oh(this.basename,"dirname"),this.path=en.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?en.extname(this.path):void 0}set extname(t){if(Js(t,"extname"),Oh(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=en.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){$c(t)&&(t=tz(t)),Zs(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?en.basename(this.path,this.extname):void 0}set stem(t){Zs(t,"stem"),Js(t,"stem"),this.path=en.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new et(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Js(e,t){if(e&&e.includes(en.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+en.sep+"`")}function Zs(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Oh(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function rz(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const iz=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},oz={}.hasOwnProperty;class td extends iz{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=W$()}copy(){const t=new td;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ks(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(nu("data",this.frozen),this.namespace[t]=n,this):oz.call(this.namespace,t)&&this.namespace[t]||void 0:t?(nu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=yl(t),r=this.parser||this.Parser;return eu("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),eu("process",this.parser||this.Parser),tu("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=yl(t),s=r.parse(a);r.run(s,a,function(f,c,d){if(f||!c||!d)return u(f);const p=c,g=r.stringify(p,d);sz(g)?d.value=g:d.result=g,u(f,d)});function u(f,c){f||!c?l(f):o?o(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),eu("processSync",this.parser||this.Parser),tu("processSync",this.compiler||this.Compiler),this.process(t,i),jh("processSync","process",n),r;function i(o,l){n=!0,Ih(o),r=l}}run(t,n,r){Dh(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const s=yl(n);i.run(t,s,u);function u(f,c,d){const p=c||t;f?a(f):l?l(p):r(void 0,p,d)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),jh("runSync","run",r),i;function o(l,a){Ih(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=yl(n),i=this.compiler||this.Compiler;return tu("stringify",i),Dh(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(nu("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[f,...c]=u;s(f,c)}else l(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function l(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Ks(!0,i.settings,u.settings))}function a(u){let f=-1;if(u!=null)if(Array.isArray(u))for(;++f<u.length;){const c=u[f];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,f){let c=-1,d=-1;for(;++c<r.length;)if(r[c][0]===u){d=c;break}if(d===-1)r.push([u,...f]);else if(f.length>0){let[p,...g]=f;const y=r[d][1];Ec(y)&&Ec(p)&&(p=Ks(!0,y,p)),r[d]=[u,p,...g]}}}}const lz=new td().freeze();function eu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function tu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function nu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Dh(e){if(!Ec(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function jh(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function yl(e){return az(e)?e:new H1(e)}function az(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function sz(e){return typeof e=="string"||uz(e)}function uz(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const cz="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Fh=[],Mh={allowDangerousHtml:!0},fz=/^(https?|ircs?|mailto|xmpp)$/i,dz=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function pz(e){const t=hz(e),n=gz(e);return mz(t.runSync(t.parse(n),n),e)}function hz(e){const t=e.rehypePlugins||Fh,n=e.remarkPlugins||Fh,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Mh}:Mh;return lz().use(qE).use(n).use(H$,r).use(t)}function gz(e){const t=e.children||"",n=new H1;return typeof t=="string"&&(n.value=t),n}function mz(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,s=t.urlTransform||vz;for(const f of dz)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+cz+f.id,void 0);return ed(e,u),AS(e,{Fragment:O.Fragment,components:i,ignoreInvalidStyle:!0,jsx:O.jsx,jsxs:O.jsxs,passKeys:!0,passNode:!0});function u(f,c,d){if(f.type==="raw"&&d&&typeof c=="number")return l?d.children.splice(c,1):d.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let p;for(p in Qs)if(Object.hasOwn(Qs,p)&&Object.hasOwn(f.properties,p)){const g=f.properties[p],y=Qs[p];(y===null||y.includes(f.tagName))&&(f.properties[p]=s(String(g||""),p,f))}}if(f.type==="element"){let p=n?!n.includes(f.tagName):o?o.includes(f.tagName):!1;if(!p&&r&&typeof c=="number"&&(p=!r(f,c,d)),p&&d&&typeof c=="number")return a&&f.children?d.children.splice(c,1,...f.children):d.children.splice(c,1),c}}}function vz(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||fz.test(e.slice(0,t))?e:""}function Bh(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function yz(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function xz(e,t,n){const i=ls((n||{}).ignore||[]),o=wz(t);let l=-1;for(;++l<o.length;)B1(e,"text",a);function a(u,f){let c=-1,d;for(;++c<f.length;){const p=f[c],g=d?d.children:void 0;if(i(p,g?g.indexOf(p):void 0,d))return;d=p}if(d)return s(u,f)}function s(u,f){const c=f[f.length-1],d=o[l][0],p=o[l][1];let g=0;const E=c.children.indexOf(u);let h=!1,m=[];d.lastIndex=0;let v=d.exec(u.value);for(;v;){const w=v.index,P={index:v.index,input:v.input,stack:[...f,u]};let k=p(...v,P);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===!1?d.lastIndex=w+1:(g!==w&&m.push({type:"text",value:u.value.slice(g,w)}),Array.isArray(k)?m.push(...k):k&&m.push(k),g=w+v[0].length,h=!0),!d.global)break;v=d.exec(u.value)}return h?(g<u.value.length&&m.push({type:"text",value:u.value.slice(g)}),c.children.splice(E,1,...m)):m=[u],E+m.length}}function wz(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([kz(i[0]),bz(i[1])])}return t}function kz(e){return typeof e=="string"?new RegExp(yz(e),"g"):e}function bz(e){return typeof e=="function"?e:function(){return e}}const ru="phrasing",iu=["autolink","link","image","label"];function Sz(){return{transforms:[_z],enter:{literalAutolink:Ez,literalAutolinkEmail:ou,literalAutolinkHttp:ou,literalAutolinkWww:ou},exit:{literalAutolink:Iz,literalAutolinkEmail:Pz,literalAutolinkHttp:$z,literalAutolinkWww:zz}}}function Cz(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:ru,notInConstruct:iu},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:ru,notInConstruct:iu},{character:":",before:"[ps]",after:"\\/",inConstruct:ru,notInConstruct:iu}]}}function Ez(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function ou(e){this.config.enter.autolinkProtocol.call(this,e)}function $z(e){this.config.exit.autolinkProtocol.call(this,e)}function zz(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function Pz(e){this.config.exit.autolinkEmail.call(this,e)}function Iz(e){this.exit(e)}function _z(e){xz(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Tz],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Az]],{ignore:["link","linkReference"]})}function Tz(e,t,n,r,i){let o="";if(!V1(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!Rz(n)))return!1;const l=Lz(n+r);if(!l[0])return!1;const a={type:"link",title:null,url:o+t+l[0],children:[{type:"text",value:t+l[0]}]};return l[1]?[a,{type:"text",value:l[1]}]:a}function Az(e,t,n,r){return!V1(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Rz(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Lz(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=Bh(e,"(");let o=Bh(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return[e,n]}function V1(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Cr(n)||rs(n))&&(!t||n!==47)}W1.peek=Hz;function Nz(){this.buffer()}function Oz(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Dz(){this.buffer()}function jz(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Fz(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=qt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Mz(e){this.exit(e)}function Bz(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=qt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Uz(e){this.exit(e)}function Hz(){return"["}function W1(e,t,n,r){const i=n.createTracker(r);let o=i.move("[^");const l=n.enter("footnoteReference"),a=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),a(),l(),o+=i.move("]"),o}function Vz(){return{enter:{gfmFootnoteCallString:Nz,gfmFootnoteCall:Oz,gfmFootnoteDefinitionLabelString:Dz,gfmFootnoteDefinition:jz},exit:{gfmFootnoteCallString:Fz,gfmFootnoteCall:Mz,gfmFootnoteDefinitionLabelString:Bz,gfmFootnoteDefinition:Uz}}}function Wz(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:W1},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,l){const a=o.createTracker(l);let s=a.move("[^");const u=o.enter("footnoteDefinition"),f=o.enter("label");return s+=a.move(o.safe(o.associationId(r),{before:s,after:"]"})),f(),s+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),s+=a.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,a.current()),t?G1:Gz))),u(),s}}function Gz(e,t,n){return t===0?e:G1(e,t,n)}function G1(e,t,n){return(n?"":"    ")+e}const Qz=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Q1.peek=Jz;function Yz(){return{canContainEols:["delete"],enter:{strikethrough:Kz},exit:{strikethrough:Xz}}}function qz(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Qz}],handlers:{delete:Q1}}}function Kz(e){this.enter({type:"delete",children:[]},e)}function Xz(e){this.exit(e)}function Q1(e,t,n,r){const i=n.createTracker(r),o=n.enter("strikethrough");let l=i.move("~~");return l+=n.containerPhrasing(e,{...i.current(),before:l,after:"~"}),l+=i.move("~~"),o(),l}function Jz(){return"~"}function Zz(e){return e.length}function eP(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Zz,o=[],l=[],a=[],s=[];let u=0,f=-1;for(;++f<e.length;){const y=[],E=[];let h=-1;for(e[f].length>u&&(u=e[f].length);++h<e[f].length;){const m=tP(e[f][h]);if(n.alignDelimiters!==!1){const v=i(m);E[h]=v,(s[h]===void 0||v>s[h])&&(s[h]=v)}y.push(m)}l[f]=y,a[f]=E}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=Uh(r[c]);else{const y=Uh(r);for(;++c<u;)o[c]=y}c=-1;const d=[],p=[];for(;++c<u;){const y=o[c];let E="",h="";y===99?(E=":",h=":"):y===108?E=":":y===114&&(h=":");let m=n.alignDelimiters===!1?1:Math.max(1,s[c]-E.length-h.length);const v=E+"-".repeat(m)+h;n.alignDelimiters!==!1&&(m=E.length+m+h.length,m>s[c]&&(s[c]=m),p[c]=m),d[c]=v}l.splice(1,0,d),a.splice(1,0,p),f=-1;const g=[];for(;++f<l.length;){const y=l[f],E=a[f];c=-1;const h=[];for(;++c<u;){const m=y[c]||"";let v="",w="";if(n.alignDelimiters!==!1){const P=s[c]-(E[c]||0),k=o[c];k===114?v=" ".repeat(P):k===99?P%2?(v=" ".repeat(P/2+.5),w=" ".repeat(P/2-.5)):(v=" ".repeat(P/2),w=v):w=" ".repeat(P)}n.delimiterStart!==!1&&!c&&h.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&m==="")&&(n.delimiterStart!==!1||c)&&h.push(" "),n.alignDelimiters!==!1&&h.push(v),h.push(m),n.alignDelimiters!==!1&&h.push(w),n.padding!==!1&&h.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&h.push("|")}g.push(n.delimiterEnd===!1?h.join("").replace(/ +$/,""):h.join(""))}return g.join(`
`)}function tP(e){return e==null?"":String(e)}function Uh(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function nP(e,t,n,r){const i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);const l=n.indentLines(n.containerFlow(e,o.current()),rP);return i(),l}function rP(e,t,n){return">"+(n?"":" ")+e}function iP(e,t){return Hh(e,t.inConstruct,!0)&&!Hh(e,t.notInConstruct,!1)}function Hh(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Vh(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&iP(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function oP(e,t){const n=String(e);let r=n.indexOf(t),i=r,o=0,l=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>l&&(l=o):o=1,i=r+t.length,r=n.indexOf(t,i);return l}function lP(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function aP(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function sP(e,t,n,r){const i=aP(n),o=e.value||"",l=i==="`"?"GraveAccent":"Tilde";if(lP(e,n)){const c=n.enter("codeIndented"),d=n.indentLines(o,uP);return c(),d}const a=n.createTracker(r),s=i.repeat(Math.max(oP(o,i)+1,3)),u=n.enter("codeFenced");let f=a.move(s);if(e.lang){const c=n.enter(`codeFencedLang${l}`);f+=a.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${l}`);f+=a.move(" "),f+=a.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...a.current()})),c()}return f+=a.move(`
`),o&&(f+=a.move(o+`
`)),f+=a.move(s),u(),f}function uP(e,t,n){return(n?"":"    ")+e}function nd(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function cP(e,t,n,r){const i=nd(n),o=i==='"'?"Quote":"Apostrophe",l=n.enter("definition");let a=n.enter("label");const s=n.createTracker(r);let u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(a=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),a()),l(),u}function fP(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Mo(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Ca(e,t,n){const r=yi(e),i=yi(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Y1.peek=dP;function Y1(e,t,n,r){const i=fP(n),o=n.enter("emphasis"),l=n.createTracker(r),a=l.move(i);let s=l.move(n.containerPhrasing(e,{after:i,before:a,...l.current()}));const u=s.charCodeAt(0),f=Ca(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(s=Mo(u)+s.slice(1));const c=s.charCodeAt(s.length-1),d=Ca(r.after.charCodeAt(0),c,i);d.inside&&(s=s.slice(0,-1)+Mo(c));const p=l.move(i);return o(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+s+p}function dP(e,t,n){return n.options.emphasis||"*"}function pP(e,t){let n=!1;return ed(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,Sc}),!!((!e.depth||e.depth<3)&&Qf(e)&&(t.options.setext||n))}function hP(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(pP(e,n)){const f=n.enter("headingSetext"),c=n.enter("phrasing"),d=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),f(),d+`
`+(i===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const l="#".repeat(i),a=n.enter("headingAtx"),s=n.enter("phrasing");o.move(l+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(u)&&(u=Mo(u.charCodeAt(0))+u.slice(1)),u=u?l+" "+u:l,n.options.closeAtx&&(u+=" "+l),s(),a(),u}q1.peek=gP;function q1(e){return e.value||""}function gP(){return"<"}K1.peek=mP;function K1(e,t,n,r){const i=nd(n),o=i==='"'?"Quote":"Apostrophe",l=n.enter("image");let a=n.enter("label");const s=n.createTracker(r);let u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(a=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),a()),u+=s.move(")"),l(),u}function mP(){return"!"}X1.peek=vP;function X1(e,t,n,r){const i=e.referenceType,o=n.enter("imageReference");let l=n.enter("label");const a=n.createTracker(r);let s=a.move("![");const u=n.safe(e.alt,{before:s,after:"]",...a.current()});s+=a.move(u+"]["),l();const f=n.stack;n.stack=[],l=n.enter("reference");const c=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return l(),n.stack=f,o(),i==="full"||!u||u!==c?s+=a.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function vP(){return"!"}J1.peek=yP;function J1(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const l=n.unsafe[o],a=n.compilePattern(l);let s;if(l.atBreak)for(;s=a.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1)}}return i+r+i}function yP(){return"`"}function Z1(e,t){const n=Qf(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ey.peek=xP;function ey(e,t,n,r){const i=nd(n),o=i==='"'?"Quote":"Apostrophe",l=n.createTracker(r);let a,s;if(Z1(e,n)){const f=n.stack;n.stack=[],a=n.enter("autolink");let c=l.move("<");return c+=l.move(n.containerPhrasing(e,{before:c,after:">",...l.current()})),c+=l.move(">"),a(),n.stack=f,c}a=n.enter("link"),s=n.enter("label");let u=l.move("[");return u+=l.move(n.containerPhrasing(e,{before:u,after:"](",...l.current()})),u+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),s()),u+=l.move(")"),a(),u}function xP(e,t,n){return Z1(e,n)?"<":"["}ty.peek=wP;function ty(e,t,n,r){const i=e.referenceType,o=n.enter("linkReference");let l=n.enter("label");const a=n.createTracker(r);let s=a.move("[");const u=n.containerPhrasing(e,{before:s,after:"]",...a.current()});s+=a.move(u+"]["),l();const f=n.stack;n.stack=[],l=n.enter("reference");const c=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return l(),n.stack=f,o(),i==="full"||!u||u!==c?s+=a.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function wP(){return"["}function rd(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function kP(e){const t=rd(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function bP(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function ny(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function SP(e,t,n,r){const i=n.enter("list"),o=n.bulletCurrent;let l=e.ordered?bP(n):rd(n);const a=e.ordered?l==="."?")":".":kP(n);let s=t&&n.bulletLastUsed?l===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((l==="*"||l==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=!0),ny(n)===l&&f){let c=-1;for(;++c<e.children.length;){const d=e.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(l=a),n.bulletCurrent=l;const u=n.containerFlow(e,r);return n.bulletLastUsed=l,n.bulletCurrent=o,i(),u}function CP(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function EP(e,t,n,r){const i=CP(n);let o=n.bulletCurrent||rd(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let l=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(l=Math.ceil(l/4)*4);const a=n.createTracker(r);a.move(o+" ".repeat(l-o.length)),a.shift(l);const s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,a.current()),f);return s(),u;function f(c,d,p){return d?(p?"":" ".repeat(l))+c:(p?o:o+" ".repeat(l-o.length))+c}}function $P(e,t,n,r){const i=n.enter("paragraph"),o=n.enter("phrasing"),l=n.containerPhrasing(e,r);return o(),i(),l}const zP=ls(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function PP(e,t,n,r){return(e.children.some(function(l){return zP(l)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function IP(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}ry.peek=_P;function ry(e,t,n,r){const i=IP(n),o=n.enter("strong"),l=n.createTracker(r),a=l.move(i+i);let s=l.move(n.containerPhrasing(e,{after:i,before:a,...l.current()}));const u=s.charCodeAt(0),f=Ca(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(s=Mo(u)+s.slice(1));const c=s.charCodeAt(s.length-1),d=Ca(r.after.charCodeAt(0),c,i);d.inside&&(s=s.slice(0,-1)+Mo(c));const p=l.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+s+p}function _P(e,t,n){return n.options.strong||"*"}function TP(e,t,n,r){return n.safe(e.value,r)}function AP(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function RP(e,t,n){const r=(ny(n)+(n.options.ruleSpaces?" ":"")).repeat(AP(n));return n.options.ruleSpaces?r.slice(0,-1):r}const iy={blockquote:nP,break:Vh,code:sP,definition:cP,emphasis:Y1,hardBreak:Vh,heading:hP,html:q1,image:K1,imageReference:X1,inlineCode:J1,link:ey,linkReference:ty,list:SP,listItem:EP,paragraph:$P,root:PP,strong:ry,text:TP,thematicBreak:RP};function LP(){return{enter:{table:NP,tableData:Wh,tableHeader:Wh,tableRow:DP},exit:{codeText:jP,table:OP,tableData:lu,tableHeader:lu,tableRow:lu}}}function NP(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function OP(e){this.exit(e),this.data.inTable=void 0}function DP(e){this.enter({type:"tableRow",children:[]},e)}function lu(e){this.exit(e)}function Wh(e){this.enter({type:"tableCell",children:[]},e)}function jP(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,FP));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function FP(e,t){return t==="|"?t:e}function MP(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:l,tableCell:s,tableRow:a}};function l(p,g,y,E){return u(f(p,y,E),p.align)}function a(p,g,y,E){const h=c(p,y,E),m=u([h]);return m.slice(0,m.indexOf(`
`))}function s(p,g,y,E){const h=y.enter("tableCell"),m=y.enter("phrasing"),v=y.containerPhrasing(p,{...E,before:o,after:o});return m(),h(),v}function u(p,g){return eP(p,{align:g,alignDelimiters:r,padding:n,stringLength:i})}function f(p,g,y){const E=p.children;let h=-1;const m=[],v=g.enter("table");for(;++h<E.length;)m[h]=c(E[h],g,y);return v(),m}function c(p,g,y){const E=p.children;let h=-1;const m=[],v=g.enter("tableRow");for(;++h<E.length;)m[h]=s(E[h],p,g,y);return v(),m}function d(p,g,y){let E=iy.inlineCode(p,g,y);return y.stack.includes("tableCell")&&(E=E.replace(/\|/g,"\\$&")),E}}function BP(){return{exit:{taskListCheckValueChecked:Gh,taskListCheckValueUnchecked:Gh,paragraph:HP}}}function UP(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:VP}}}function Gh(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function HP(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let o=-1,l;for(;++o<i.length;){const a=i[o];if(a.type==="paragraph"){l=a;break}}l===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function VP(e,t,n,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",l="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);o&&a.move(l);let s=iy.listItem(e,t,n,{...r,...a.current()});return o&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(f){return f+l}}function WP(){return[Sz(),Vz(),Yz(),LP(),BP()]}function GP(e){return{extensions:[Cz(),Wz(e),qz(),MP(e),UP()]}}const QP={tokenize:ZP,partial:!0},oy={tokenize:e5,partial:!0},ly={tokenize:t5,partial:!0},ay={tokenize:n5,partial:!0},YP={tokenize:r5,partial:!0},sy={name:"wwwAutolink",tokenize:XP,previous:cy},uy={name:"protocolAutolink",tokenize:JP,previous:fy},Cn={name:"emailAutolink",tokenize:KP,previous:dy},on={};function qP(){return{text:on}}let nr=48;for(;nr<123;)on[nr]=Cn,nr++,nr===58?nr=65:nr===91&&(nr=97);on[43]=Cn;on[45]=Cn;on[46]=Cn;on[95]=Cn;on[72]=[Cn,uy];on[104]=[Cn,uy];on[87]=[Cn,sy];on[119]=[Cn,sy];function KP(e,t,n){const r=this;let i,o;return l;function l(c){return!zc(c)||!dy.call(r,r.previous)||id(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(c))}function a(c){return zc(c)?(e.consume(c),a):c===64?(e.consume(c),s):n(c)}function s(c){return c===46?e.check(YP,f,u)(c):c===45||c===95||Je(c)?(o=!0,e.consume(c),s):f(c)}function u(c){return e.consume(c),i=!0,s}function f(c){return o&&i&&nt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function XP(e,t,n){const r=this;return i;function i(l){return l!==87&&l!==119||!cy.call(r,r.previous)||id(r.events)?n(l):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(QP,e.attempt(oy,e.attempt(ly,o),n),n)(l))}function o(l){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(l)}}function JP(e,t,n){const r=this;let i="",o=!1;return l;function l(c){return(c===72||c===104)&&fy.call(r,r.previous)&&!id(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),a):n(c)}function a(c){if(nt(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),a;if(c===58){const d=i.toLowerCase();if(d==="http"||d==="https")return e.consume(c),s}return n(c)}function s(c){return c===47?(e.consume(c),o?u:(o=!0,s)):n(c)}function u(c){return c===null||ka(c)||ge(c)||Cr(c)||rs(c)?n(c):e.attempt(oy,e.attempt(ly,f),n)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function ZP(e,t,n){let r=0;return i;function i(l){return(l===87||l===119)&&r<3?(r++,e.consume(l),i):l===46&&r===3?(e.consume(l),o):n(l)}function o(l){return l===null?n(l):t(l)}}function e5(e,t,n){let r,i,o;return l;function l(u){return u===46||u===95?e.check(ay,s,a)(u):u===null||ge(u)||Cr(u)||u!==45&&rs(u)?s(u):(o=!0,e.consume(u),l)}function a(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),l}function s(u){return i||r||!o?n(u):t(u)}}function t5(e,t){let n=0,r=0;return i;function i(l){return l===40?(n++,e.consume(l),i):l===41&&r<n?o(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?e.check(ay,t,o)(l):l===null||ge(l)||Cr(l)?t(l):(e.consume(l),i)}function o(l){return l===41&&r++,e.consume(l),i}}function n5(e,t,n){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),o):a===93?(e.consume(a),i):a===60||a===null||ge(a)||Cr(a)?t(a):n(a)}function i(a){return a===null||a===40||a===91||ge(a)||Cr(a)?t(a):r(a)}function o(a){return nt(a)?l(a):n(a)}function l(a){return a===59?(e.consume(a),r):nt(a)?(e.consume(a),l):n(a)}}function r5(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return Je(o)?n(o):t(o)}}function cy(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ge(e)}function fy(e){return!nt(e)}function dy(e){return!(e===47||zc(e))}function zc(e){return e===43||e===45||e===46||e===95||Je(e)}function id(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const i5={tokenize:d5,partial:!0};function o5(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:u5,continuation:{tokenize:c5},exit:f5}},text:{91:{name:"gfmFootnoteCall",tokenize:s5},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:l5,resolveTo:a5}}}}function l5(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l;for(;i--;){const s=r.events[i][1];if(s.type==="labelImage"){l=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return a;function a(s){if(!l||!l._balanced)return n(s);const u=qt(r.sliceSerialize({start:l.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function a5(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function s5(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,l;return a;function a(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!l||c===null||c===91||ge(c))return n(c);if(c===93){e.exit("chunkString");const d=e.exit("gfmFootnoteCallString");return i.includes(qt(r.sliceSerialize(d)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return ge(c)||(l=!0),o++,e.consume(c),c===92?f:u}function f(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function u5(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,l=0,a;return s;function s(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(g)}function f(g){if(l>999||g===93&&!a||g===null||g===91||ge(g))return n(g);if(g===93){e.exit("chunkString");const y=e.exit("gfmFootnoteDefinitionLabelString");return o=qt(r.sliceSerialize(y)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),d}return ge(g)||(a=!0),l++,e.consume(g),g===92?c:f}function c(g){return g===91||g===92||g===93?(e.consume(g),l++,f):f(g)}function d(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(o)||i.push(o),oe(e,p,"gfmFootnoteDefinitionWhitespace")):n(g)}function p(g){return t(g)}}function c5(e,t,n){return e.check(Xo,t,e.attempt(i5,t,n))}function f5(e){e.exit("gfmFootnoteDefinition")}function d5(e,t,n){const r=this;return oe(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?t(o):n(o)}}function p5(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(l,a){let s=-1;for(;++s<l.length;)if(l[s][0]==="enter"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._close){let u=s;for(;u--;)if(l[u][0]==="exit"&&l[u][1].type==="strikethroughSequenceTemporary"&&l[u][1]._open&&l[s][1].end.offset-l[s][1].start.offset===l[u][1].end.offset-l[u][1].start.offset){l[s][1].type="strikethroughSequence",l[u][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},l[u][1].start),end:Object.assign({},l[s][1].end)},c={type:"strikethroughText",start:Object.assign({},l[u][1].end),end:Object.assign({},l[s][1].start)},d=[["enter",f,a],["enter",l[u][1],a],["exit",l[u][1],a],["enter",c,a]],p=a.parser.constructs.insideSpan.null;p&&bt(d,d.length,0,is(p,l.slice(u+1,s),a)),bt(d,d.length,0,[["exit",c,a],["enter",l[s][1],a],["exit",l[s][1],a],["exit",f,a]]),bt(l,u-1,s-u+3,d),s=u+d.length-2;break}}for(s=-1;++s<l.length;)l[s][1].type==="strikethroughSequenceTemporary"&&(l[s][1].type="data");return l}function o(l,a,s){const u=this.previous,f=this.events;let c=0;return d;function d(g){return u===126&&f[f.length-1][1].type!=="characterEscape"?s(g):(l.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const y=yi(u);if(g===126)return c>1?s(g):(l.consume(g),c++,p);if(c<2&&!n)return s(g);const E=l.exit("strikethroughSequenceTemporary"),h=yi(g);return E._open=!h||h===2&&!!y,E._close=!y||y===2&&!!h,a(g)}}}class h5{constructor(){this.map=[]}add(t,n,r){g5(this,t,n,r)}consume(t){if(this.map.sort(function(o,l){return o[0]-l[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const o of i)t.push(o);i=r.pop()}this.map.length=0}}function g5(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function m5(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function v5(){return{flow:{null:{name:"table",tokenize:y5,resolveAll:x5}}}}function y5(e,t,n){const r=this;let i=0,o=0,l;return a;function a($){let I=r.events.length-1;for(;I>-1;){const W=r.events[I][1].type;if(W==="lineEnding"||W==="linePrefix")I--;else break}const N=I>-1?r.events[I][1].type:null,V=N==="tableHead"||N==="tableRow"?k:s;return V===k&&r.parser.lazy[r.now().line]?n($):V($)}function s($){return e.enter("tableHead"),e.enter("tableRow"),u($)}function u($){return $===124||(l=!0,o+=1),f($)}function f($){return $===null?n($):G($)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume($),e.exit("lineEnding"),p):n($):ne($)?oe(e,f,"whitespace")($):(o+=1,l&&(l=!1,i+=1),$===124?(e.enter("tableCellDivider"),e.consume($),e.exit("tableCellDivider"),l=!0,f):(e.enter("data"),c($)))}function c($){return $===null||$===124||ge($)?(e.exit("data"),f($)):(e.consume($),$===92?d:c)}function d($){return $===92||$===124?(e.consume($),c):c($)}function p($){return r.interrupt=!1,r.parser.lazy[r.now().line]?n($):(e.enter("tableDelimiterRow"),l=!1,ne($)?oe(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):g($))}function g($){return $===45||$===58?E($):$===124?(l=!0,e.enter("tableCellDivider"),e.consume($),e.exit("tableCellDivider"),y):P($)}function y($){return ne($)?oe(e,E,"whitespace")($):E($)}function E($){return $===58?(o+=1,l=!0,e.enter("tableDelimiterMarker"),e.consume($),e.exit("tableDelimiterMarker"),h):$===45?(o+=1,h($)):$===null||G($)?w($):P($)}function h($){return $===45?(e.enter("tableDelimiterFiller"),m($)):P($)}function m($){return $===45?(e.consume($),m):$===58?(l=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume($),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v($))}function v($){return ne($)?oe(e,w,"whitespace")($):w($)}function w($){return $===124?g($):$===null||G($)?!l||i!==o?P($):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t($)):P($)}function P($){return n($)}function k($){return e.enter("tableRow"),b($)}function b($){return $===124?(e.enter("tableCellDivider"),e.consume($),e.exit("tableCellDivider"),b):$===null||G($)?(e.exit("tableRow"),t($)):ne($)?oe(e,b,"whitespace")($):(e.enter("data"),z($))}function z($){return $===null||$===124||ge($)?(e.exit("data"),b($)):(e.consume($),$===92?A:z)}function A($){return $===92||$===124?(e.consume($),z):z($)}}function x5(e,t){let n=-1,r=!0,i=0,o=[0,0,0,0],l=[0,0,0,0],a=!1,s=0,u,f,c;const d=new h5;for(;++n<e.length;){const p=e[n],g=p[1];p[0]==="enter"?g.type==="tableHead"?(a=!1,s!==0&&(Qh(d,t,s,u,f),f=void 0,s=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",u,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],l=[0,n+1,0,0],a&&(a=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",f,t]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,l[2]===0&&(o[1]!==0&&(l[0]=l[1],c=xl(d,t,o,i,void 0,c),o=[0,0,0,0]),l[2]=n)):g.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(l[0]=l[1],c=xl(d,t,o,i,void 0,c)),o=l,l=[o[1],n,0,0])):g.type==="tableHead"?(a=!0,s=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(s=n,o[1]!==0?(l[0]=l[1],c=xl(d,t,o,i,n,c)):l[1]!==0&&(c=xl(d,t,l,i,n,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(l[3]=n)}for(s!==0&&Qh(d,t,s,u,f),d.consume(t.events),n=-1;++n<t.events.length;){const p=t.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=m5(t.events,n))}return e}function xl(e,t,n,r,i,o){const l=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(o.end=Object.assign({},Mr(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const s=Mr(t.events,n[1]);if(o={type:l,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){const u=Mr(t.events,n[2]),f=Mr(t.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const d=t.events[n[2]],p=t.events[n[3]];if(d[1].end=Object.assign({},p[1].end),d[1].type="chunkText",d[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,y=n[3]-n[2]-1;e.add(g,y,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(o.end=Object.assign({},Mr(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function Qh(e,t,n,r,i){const o=[],l=Mr(t.events,n);i&&(i.end=Object.assign({},l),o.push(["exit",i,t])),r.end=Object.assign({},l),o.push(["exit",r,t]),e.add(n+1,0,o)}function Mr(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const w5={name:"tasklistCheck",tokenize:b5};function k5(){return{text:{91:w5}}}function b5(e,t,n){const r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),o)}function o(s){return ge(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),l):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),l):n(s)}function l(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(s)}function a(s){return G(s)?t(s):ne(s)?e.check({tokenize:S5},t,n)(s):n(s)}}function S5(e,t,n){return oe(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function C5(e){return b1([qP(),o5(),p5(e),v5(),k5()])}const E5={};function $5(e){const t=this,n=e||E5,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),l=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(C5(n)),o.push(WP()),l.push(GP(n))}var He=function(){return He=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},He.apply(this,arguments)};function xi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ke="-ms-",go="-moz-",ce="-webkit-",py="comm",ss="rule",od="decl",z5="@import",P5="@namespace",hy="@keyframes",I5="@layer",gy=Math.abs,ld=String.fromCharCode,Pc=Object.assign;function _5(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function my(e){return e.trim()}function pn(e,t){return(e=t.exec(e))?e[0]:e}function te(e,t,n){return e.replace(t,n)}function Bl(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function Er(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function vy(e){return e.length}function Xi(e,t){return t.push(e),e}function T5(e,t){return e.map(t).join("")}function Yh(e,t){return e.filter(function(n){return!pn(n,t)})}var us=1,wi=1,yy=0,Ot=0,Le=0,Ii="";function cs(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:us,column:wi,length:l,return:"",siblings:a}}function Pn(e,t){return Pc(cs("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fr(e){for(;e.root;)e=Pn(e.root,{children:[e]});Xi(e,e.siblings)}function A5(){return Le}function R5(){return Le=Ot>0?Me(Ii,--Ot):0,wi--,Le===10&&(wi=1,us--),Le}function Kt(){return Le=Ot<yy?Me(Ii,Ot++):0,wi++,Le===10&&(wi=1,us++),Le}function Dn(){return Me(Ii,Ot)}function Ul(){return Ot}function fs(e,t){return Er(Ii,e,t)}function Bo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L5(e){return us=wi=1,yy=Ht(Ii=e),Ot=0,[]}function N5(e){return Ii="",e}function au(e){return my(fs(Ot-1,Ic(e===91?e+2:e===40?e+1:e)))}function O5(e){for(;(Le=Dn())&&Le<33;)Kt();return Bo(e)>2||Bo(Le)>3?"":" "}function D5(e,t){for(;--t&&Kt()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return fs(e,Ul()+(t<6&&Dn()==32&&Kt()==32))}function Ic(e){for(;Kt();)switch(Le){case e:return Ot;case 34:case 39:e!==34&&e!==39&&Ic(Le);break;case 40:e===41&&Ic(e);break;case 92:Kt();break}return Ot}function j5(e,t){for(;Kt()&&e+Le!==57;)if(e+Le===84&&Dn()===47)break;return"/*"+fs(t,Ot-1)+"*"+ld(e===47?e:Kt())}function F5(e){for(;!Bo(Dn());)Kt();return fs(e,Ot)}function M5(e){return N5(Hl("",null,null,null,[""],e=L5(e),0,[0],e))}function Hl(e,t,n,r,i,o,l,a,s){for(var u=0,f=0,c=l,d=0,p=0,g=0,y=1,E=1,h=1,m=0,v="",w=i,P=o,k=r,b=v;E;)switch(g=m,m=Kt()){case 40:if(g!=108&&Me(b,c-1)==58){Bl(b+=te(au(m),"&","&\f"),"&\f",gy(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:b+=au(m);break;case 9:case 10:case 13:case 32:b+=O5(g);break;case 92:b+=D5(Ul()-1,7);continue;case 47:switch(Dn()){case 42:case 47:Xi(B5(j5(Kt(),Ul()),t,n,s),s),(Bo(g||1)==5||Bo(Dn()||1)==5)&&Ht(b)&&Er(b,-1,void 0)!==" "&&(b+=" ");break;default:b+="/"}break;case 123*y:a[u++]=Ht(b)*h;case 125*y:case 59:case 0:switch(m){case 0:case 125:E=0;case 59+f:h==-1&&(b=te(b,/\f/g,"")),p>0&&(Ht(b)-c||y===0&&g===47)&&Xi(p>32?Kh(b+";",r,n,c-1,s):Kh(te(b," ","")+";",r,n,c-2,s),s);break;case 59:b+=";";default:if(Xi(k=qh(b,t,n,u,f,i,a,v,w=[],P=[],c,o),o),m===123)if(f===0)Hl(b,t,k,k,w,o,c,a,P);else{switch(d){case 99:if(Me(b,3)===110)break;case 108:if(Me(b,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Hl(e,k,k,r&&Xi(qh(e,k,k,0,0,i,a,v,i,w=[],c,P),P),i,P,c,a,r?w:P):Hl(b,k,k,k,[""],P,0,a,P)}}u=f=p=0,y=h=1,v=b="",c=l;break;case 58:c=1+Ht(b),p=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&R5()==125)continue}switch(b+=ld(m),m*y){case 38:h=f>0?1:(b+="\f",-1);break;case 44:a[u++]=(Ht(b)-1)*h,h=1;break;case 64:Dn()===45&&(b+=au(Kt())),d=Dn(),f=c=Ht(v=b+=F5(Ul())),m++;break;case 45:g===45&&Ht(b)==2&&(y=0)}}return o}function qh(e,t,n,r,i,o,l,a,s,u,f,c){for(var d=i-1,p=i===0?o:[""],g=vy(p),y=0,E=0,h=0;y<r;++y)for(var m=0,v=Er(e,d+1,d=gy(E=l[y])),w=e;m<g;++m)(w=my(E>0?p[m]+" "+v:te(v,/&\f/g,p[m])))&&(s[h++]=w);return cs(e,t,n,i===0?ss:a,s,u,f,c)}function B5(e,t,n,r){return cs(e,t,n,py,ld(A5()),Er(e,2,-2),0,r)}function Kh(e,t,n,r,i){return cs(e,t,n,od,Er(e,0,r),Er(e,r+1,-1),r,i)}function xy(e,t,n){switch(_5(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ce+e+e;case 4855:return ce+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return go+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+go+e+ke+e+e;case 5936:switch(Me(e,t+11)){case 114:return ce+e+ke+te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+ke+te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+ke+te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+ke+e+e;case 6165:return ce+e+ke+"flex-"+e+e;case 5187:return ce+e+te(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return ce+e+ke+"flex-item-"+te(e,/flex-|-self/g,"")+(pn(e,/flex-|baseline/)?"":ke+"grid-row-"+te(e,/flex-|-self/g,""))+e;case 4675:return ce+e+ke+"flex-line-pack"+te(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+ke+te(e,"shrink","negative")+e;case 5292:return ce+e+ke+te(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+te(e,"-grow","")+ce+e+ke+te(e,"grow","positive")+e;case 4554:return ce+te(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return te(te(te(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return te(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return te(te(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+ce+e+e;case 4200:if(!pn(e,/flex-|baseline/))return ke+"grid-column-align"+Er(e,t)+e;break;case 2592:case 3360:return ke+te(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pn(r.props,/grid-\w+-end/)})?~Bl(e+(n=n[t].value),"span",0)?e:ke+te(e,"-start","")+e+ke+"grid-row-span:"+(~Bl(n,"span",0)?pn(n,/\d+/):+pn(n,/\d+/)-+pn(e,/\d+/))+";":ke+te(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pn(r.props,/grid-\w+-start/)})?e:ke+te(te(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return te(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return te(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+go+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bl(e,"stretch",0)?xy(te(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return te(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return ke+i+":"+o+u+(l?ke+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(Me(e,t+6)===121)return te(e,":",":"+ce)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return te(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Me(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ke+"$2box$3")+e;case 100:return te(e,":",":"+ke)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(e,"scroll-","scroll-snap-")+e}return e}function Ea(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function U5(e,t,n,r){switch(e.type){case I5:if(e.children.length)break;case z5:case P5:case od:return e.return=e.return||e.value;case py:return"";case hy:return e.return=e.value+"{"+Ea(e.children,r)+"}";case ss:if(!Ht(e.value=e.props.join(",")))return""}return Ht(n=Ea(e.children,r))?e.return=e.value+"{"+n+"}":""}function H5(e){var t=vy(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function V5(e){return function(t){t.root||(t=t.return)&&e(t)}}function W5(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case od:e.return=xy(e.value,e.length,n);return;case hy:return Ea([Pn(e,{value:te(e.value,"@","@"+ce)})],r);case ss:if(e.length)return T5(n=e.props,function(i){switch(pn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fr(Pn(e,{props:[te(i,/:(read-\w+)/,":"+go+"$1")]})),Fr(Pn(e,{props:[i]})),Pc(e,{props:Yh(n,r)});break;case"::placeholder":Fr(Pn(e,{props:[te(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Fr(Pn(e,{props:[te(i,/:(plac\w+)/,":"+go+"$1")]})),Fr(Pn(e,{props:[te(i,/:(plac\w+)/,ke+"input-$1")]})),Fr(Pn(e,{props:[i]})),Pc(e,{props:Yh(n,r)});break}return""})}}var G5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},yt={},ki=typeof process<"u"&&yt!==void 0&&(yt.REACT_APP_SC_ATTR||yt.SC_ATTR)||"data-styled",wy="active",ky="data-styled-version",ds="6.3.11",ad=`/*!sc*/
`,mo=typeof window<"u"&&typeof document<"u",Q5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==""?yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.SC_DISABLE_SPEEDY!==void 0&&yt.SC_DISABLE_SPEEDY!==""&&yt.SC_DISABLE_SPEEDY!=="false"&&yt.SC_DISABLE_SPEEDY),Y5={};function $r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vl=new Map,$a=new Map,Wl=1,Ji=function(e){if(Vl.has(e))return Vl.get(e);for(;$a.has(Wl);)Wl++;var t=Wl++;return Vl.set(e,t),$a.set(t,e),t},q5=function(e,t){Wl=t+1,Vl.set(e,t),$a.set(t,e)},sd=Object.freeze([]),bi=Object.freeze({});function by(e,t,n){return n===void 0&&(n=bi),e.theme!==n.theme&&e.theme||t||n.theme}var Sy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),K5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X5=/(^-|-$)/g;function Xh(e){return e.replace(K5,"-").replace(X5,"")}var J5=/(a)(d)/gi,Jh=function(e){return String.fromCharCode(e+(e>25?39:97))};function _c(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Jh(t%52)+n;return(Jh(t%52)+n).replace(J5,"$1-$2")}var su,sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Cy=function(e){return sr(5381,e)};function ud(e){return _c(Cy(e)>>>0)}function Z5(e){return e.displayName||e.name||"Component"}function uu(e){return typeof e=="string"&&!0}var Ey=typeof Symbol=="function"&&Symbol.for,$y=Ey?Symbol.for("react.memo"):60115,eI=Ey?Symbol.for("react.forward_ref"):60112,tI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rI=((su={})[eI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},su[$y]=zy,su);function Zh(e){return("type"in(t=e)&&t.type.$$typeof)===$y?zy:"$$typeof"in e?rI[e.$$typeof]:tI;var t}var iI=Object.defineProperty,oI=Object.getOwnPropertyNames,eg=Object.getOwnPropertySymbols,lI=Object.getOwnPropertyDescriptor,aI=Object.getPrototypeOf,tg=Object.prototype;function Py(e,t,n){if(typeof t!="string"){if(tg){var r=aI(t);r&&r!==tg&&Py(e,r,n)}var i=oI(t);eg&&(i=i.concat(eg(t)));for(var o=Zh(e),l=Zh(t),a=0;a<i.length;++a){var s=i[a];if(!(s in nI||n&&n[s]||l&&s in l||o&&s in o)){var u=lI(t,s);try{iI(e,s,u)}catch{}}}}return e}function zr(e){return typeof e=="function"}function cd(e){return typeof e=="object"&&"styledComponentId"in e}function hr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function za(e,t){return e.join("")}function Uo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Tc(e,t,n){if(n===void 0&&(n=!1),!n&&!Uo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Tc(e[r],t[r]);else if(Uo(t))for(var r in t)e[r]=Tc(e[r],t[r]);return e}function fd(e,t){Object.defineProperty(e,"toString",{value:t})}var sI=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw $r(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=0,u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+=this.tag.getRule(l)+ad;return n},e}(),uI="style[".concat(ki,"][").concat(ky,'="').concat(ds,'"]'),cI=new RegExp("^".concat(ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ng=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Ac=function(e){if(!e)return document;if(ng(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(ng(t))return t}return document},fI=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},dI=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(ad),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(cI);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(q5(f,u),fI(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},cu=function(e){for(var t=Ac(e.options.target).querySelectorAll(uI),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ki)!==wy&&(dI(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function pI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Iy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(ki,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ki,wy),r.setAttribute(ky,ds);var l=pI();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},hI=function(){function e(t){this.element=Iy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,l=i.length;o<l;o++){var a=i[o];if(a.ownerNode===n)return a}throw $r(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),gI=function(){function e(t){this.element=Iy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),mI=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rg=mo,vI={isServer:!mo,useCSSOMInjection:!Q5},Pa=function(){function e(t,n,r){t===void 0&&(t=bi),n===void 0&&(n={});var i=this;this.options=He(He({},vI),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&mo&&rg&&(rg=!1,cu(this)),fd(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(c){var d=function(h){return $a.get(h)}(c);if(d===void 0)return"continue";var p=o.names.get(d);if(p===void 0||!p.size)return"continue";var g=l.getGroup(c);if(g.length===0)return"continue";var y=ki+".g"+c+'[id="'+d+'"]',E="";p.forEach(function(h){h.length>0&&(E+=h+",")}),s+=g+y+'{content:"'+E+'"}'+ad},f=0;f<a;f++)u(f);return s}(i)})}return e.registerId=function(t){return Ji(t)},e.prototype.rehydrate=function(){!this.server&&mo&&cu(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(He(He({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&mo&&t.target!==this.options.target&&Ac(this.options.target)!==Ac(t.target)&&cu(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new mI(i):r?new hI(i):new gI(i)}(this.options),new sI(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ji(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ji(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ji(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yI=/&/g,hn=47,ur=42;function ig(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(r!==0||i||l!==hn||e.charCodeAt(o+1)!==ur)if(i)l===ur&&e.charCodeAt(o+1)===hn&&(i=!1,o++);else if(l!==34&&l!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,o++}return n!==0||r!==0}function _y(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_y(n.children,t)),n})}function xI(e){var t,n,r,i=bi,o=i.options,l=o===void 0?bi:o,a=i.plugins,s=a===void 0?sd:a,u=function(g,y,E){return E.startsWith(n)&&E.endsWith(n)&&E.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===ss&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(yI,n).replace(r,u))}),l.prefix&&f.push(W5),f.push(U5);var c=[],d=H5(f.concat(V5(function(g){return c.push(g)}))),p=function(g,y,E,h){y===void 0&&(y=""),E===void 0&&(E=""),h===void 0&&(h="&"),t=h,n=y,r=void 0;var m=function(w){if(!ig(w))return w;for(var P=w.length,k="",b=0,z=0,A=0,$=!1,I=0;I<P;I++){var N=w.charCodeAt(I);if(A!==0||$||N!==hn||w.charCodeAt(I+1)!==ur)if($)N===ur&&w.charCodeAt(I+1)===hn&&($=!1,I++);else if(N!==34&&N!==39||I!==0&&w.charCodeAt(I-1)===92){if(A===0)if(N===123)z++;else if(N===125){if(--z<0){for(var V=I+1;V<P;){var W=w.charCodeAt(V);if(W===59||W===10)break;V++}V<P&&w.charCodeAt(V)===59&&V++,z=0,I=V-1,b=V;continue}z===0&&(k+=w.substring(b,I+1),b=I+1)}else N===59&&z===0&&(k+=w.substring(b,I+1),b=I+1)}else A===0?A=N:A===N&&(A=0);else $=!0,I++}if(b<P){var q=w.substring(b);ig(q)||(k+=q)}return k}(function(w){if(w.indexOf("//")===-1)return w;for(var P=w.length,k=[],b=0,z=0,A=0,$=0;z<P;){var I=w.charCodeAt(z);if(I!==34&&I!==39||z!==0&&w.charCodeAt(z-1)===92)if(A===0)if(I===hn&&z+1<P&&w.charCodeAt(z+1)===ur){for(z+=2;z+1<P&&(w.charCodeAt(z)!==ur||w.charCodeAt(z+1)!==hn);)z++;z+=2}else if(I===40&&z>=3&&(32|w.charCodeAt(z-1))==108&&(32|w.charCodeAt(z-2))==114&&(32|w.charCodeAt(z-3))==117)$=1,z++;else if($>0)I===41?$--:I===40&&$++,z++;else if(I===ur&&z+1<P&&w.charCodeAt(z+1)===hn)z>b&&k.push(w.substring(b,z)),b=z+=2;else if(I===hn&&z+1<P&&w.charCodeAt(z+1)===hn){for(z>b&&k.push(w.substring(b,z));z<P&&w.charCodeAt(z)!==10;)z++;b=z}else z++;else z++;else A===0?A=I:A===I&&(A=0),z++}return b===0?w:(b<P&&k.push(w.substring(b)),k.join(""))}(g)),v=M5(E||y?"".concat(E," ").concat(y," { ").concat(m," }"):m);return l.namespace&&(v=_y(v,l.namespace)),c=[],Ea(v,d),c};return p.hash=s.length?s.reduce(function(g,y){return y.name||$r(15),sr(g,y.name)},5381).toString():"",p}var wI=new Pa,Rc=xI(),Ty=Oe.createContext({shouldForwardProp:void 0,styleSheet:wI,stylis:Rc});Ty.Consumer;Oe.createContext(void 0);function Lc(){return Oe.useContext(Ty)}var Ay=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Rc);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,fd(this,function(){throw $r(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Rc),this.name+t.hash},e}();function kI(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in G5||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var bI=function(e){return e>="A"&&e<="Z"};function og(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;bI(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ry=function(e){return e==null||e===!1||e===""},Ly=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Ry(r)&&(Array.isArray(r)&&r.isCss||zr(r)?t.push("".concat(og(n),":"),r,";"):Uo(r)?t.push.apply(t,xi(xi(["".concat(n," {")],Ly(r),!1),["}"],!1)):t.push("".concat(og(n),": ").concat(kI(n,r),";")))}return t};function Qn(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(Ry(e))return i;if(cd(e))return i.push(".".concat(e.styledComponentId)),i;if(zr(e)){if(!zr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Qn(o,t,n,r,i)}var l;if(e instanceof Ay)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Uo(e)){for(var a=Ly(e),s=0;s<a.length;s++)i.push(a[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Qn(e[s],t,n,r,i);return i}function Ny(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zr(n)&&!cd(n))return!1}return!0}var SI=Cy(ds),CI=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ny(t),this.componentId=n,this.baseHash=sr(SI,n),this.baseStyle=r,Pa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=hr(i,this.staticRulesId);else{var o=za(Qn(this.rules,t,n,r)),l=_c(sr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=hr(i,l),this.staticRulesId=l}else{for(var s=sr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")u+=c;else if(c){var d=za(Qn(c,t,n,r));s=sr(sr(s,String(f)),d),u+=d}}if(u){var p=_c(s>>>0);if(!n.hasNameForId(this.componentId,p)){var g=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,g)}i=hr(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ji(this.componentId)):""}},e}(),Ho=Oe.createContext(void 0);Ho.Consumer;function EI(e){var t=Oe.useContext(Ho),n=Oe.useMemo(function(){return function(r,i){if(!r)throw $r(14);if(zr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw $r(8);return i?He(He({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Oe.createElement(Ho.Provider,{value:n},e.children):null}var fu={};function $I(e,t,n){var r=cd(e),i=e,o=!uu(e),l=t.attrs,a=l===void 0?sd:l,s=t.componentId,u=s===void 0?function(w,P){var k=typeof w!="string"?"sc":Xh(w);fu[k]=(fu[k]||0)+1;var b="".concat(k,"-").concat(ud(ds+k+fu[k]));return P?"".concat(P,"-").concat(b):b}(t.displayName,t.parentComponentId):s,f=t.displayName,c=f===void 0?function(w){return uu(w)?"styled.".concat(w):"Styled(".concat(Z5(w),")")}(e):f,d=t.displayName&&t.componentId?"".concat(Xh(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;g=function(w,P){return y(w,P)&&E(w,P)}}else g=y}var h=new CI(n,d,r?i.componentStyle:void 0);function m(w,P){return function(k,b,z){var A=k.attrs,$=k.componentStyle,I=k.defaultProps,N=k.foldedComponentIds,V=k.styledComponentId,W=k.target,q=Oe.useContext(Ho),fe=Lc(),ae=k.shouldForwardProp||fe.shouldForwardProp,D=by(b,q,I)||bi,M=function(H,K,_e){for(var Te,me=He(He({},K),{className:void 0,theme:_e}),$t=0;$t<H.length;$t+=1){var Dt=zr(Te=H[$t])?Te(me):Te;for(var We in Dt)We==="className"?me.className=hr(me.className,Dt[We]):We==="style"?me.style=He(He({},me.style),Dt[We]):me[We]=Dt[We]}return"className"in K&&typeof K.className=="string"&&(me.className=hr(me.className,K.className)),me}(A,b,D),x=M.as||W,Y={};for(var Q in M)M[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&M.theme===D||(Q==="forwardedAs"?Y.as=M.forwardedAs:ae&&!ae(Q,x)||(Y[Q]=M[Q]));var S=function(H,K){var _e=Lc(),Te=H.generateAndInjectStyles(K,_e.styleSheet,_e.stylis);return Te}($,M),pe=S.className,B=hr(N,V);return pe&&(B+=" "+pe),M.className&&(B+=" "+M.className),Y[uu(x)&&!Sy.has(x)?"class":"className"]=B,z&&(Y.ref=z),T.createElement(x,Y)}(v,w,P)}m.displayName=c;var v=Oe.forwardRef(m);return v.attrs=p,v.componentStyle=h,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?hr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];for(var z=0,A=k;z<A.length;z++)Tc(P,A[z],!0);return P}({},i.defaultProps,w):w}}),fd(v,function(){return".".concat(v.styledComponentId)}),o&&Py(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function lg(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ag=function(e){return Object.assign(e,{isCss:!0})};function X(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zr(e)||Uo(e))return ag(Qn(lg(sd,xi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Qn(r):ag(Qn(lg(r,t)))}function Nc(e,t,n){if(n===void 0&&(n=bi),!t)throw $r(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,X.apply(void 0,xi([i],o,!1)))};return r.attrs=function(i){return Nc(e,t,He(He({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Nc(e,t,He(He({},n),i))},r}var Oy=function(e){return Nc($I,e)},C=Oy;Sy.forEach(function(e){C[e]=Oy(e)});var zI=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ny(t),Pa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(za(Qn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Pa.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function PI(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=X.apply(void 0,xi([e],t,!1)),i="sc-global-".concat(ud(JSON.stringify(r))),o=new zI(r,i),l=new WeakMap,a=function(u){var f=Lc(),c=Oe.useContext(Ho),d=l.get(f.styleSheet);return d===void 0&&(d=f.styleSheet.allocateGSInstance(i),l.set(f.styleSheet,d)),(typeof window>"u"||!f.styleSheet.server)&&s(d,u,f.styleSheet,c,f.stylis),Oe.useLayoutEffect(function(){return f.styleSheet.server||s(d,u,f.styleSheet,c,f.stylis),function(){var p;o.removeStyles(d,f.styleSheet),p=f.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[d,u,f.styleSheet,c,f.stylis]),null};function s(u,f,c,d,p){if(o.isStatic)o.renderStyles(u,Y5,c,p);else{var g=He(He({},f),{theme:by(f,d,a.defaultProps)});o.renderStyles(u,g,c,p)}}return Oe.memo(a)}function dd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=za(X.apply(void 0,xi([e],t,!1))),i=ud(r);return new Ay(i,r)}var F={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white12:"rgba(255, 255, 255, 0.12)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderMuted:"rgba(148, 163, 184, 0.14)",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#708196",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74"},lt={0:"0px",1:"4px",2:"6px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},Wt={xs:"10px",sm:"12px",md:"14px",lg:"16px","2xl":"20px","3xl":"22px","4xl":"24px",pill:"999px"},zt={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size4xl:"24px",size5xl:"28px"},vo={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px rgba(0, 0, 0, 0.45)",popover:"0 24px 60px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",hoverLift:"0 12px 24px rgba(41, 98, 217, 0.24)",focusRing:"0 0 0 3px rgba(77, 136, 255, 0.16)"},II={fast:"0.16s ease",normal:"0.24s ease"},_I={sm:640,md:768,lg:1024,xl:1280},du={popover:500,drawer:1100,modal:1200},se={name:"portalDark",colors:{bgCanvas:F.slate950,bgCanvasAlt:F.slate925,bgRadialA:F.radialA,bgRadialB:F.radialB,surfaceHeader:F.slate880,surfacePanel:F.slate860,surfaceRaised:F.slate925,surfaceMuted:F.slate840,surfaceInteractive:F.white04,surfaceActive:F.blueTint16,borderSubtle:F.white08,borderStrong:F.borderStrong,textPrimary:F.textPrimary,textSecondary:F.textSecondary,textMuted:F.textMuted,textSoft:F.textSoft,accent:F.blue500,accentStrong:F.blue600,accentSoft:F.blue300,success:F.green500,warning:F.amber500,danger:F.red300},radius:{sm:Wt.xs,md:Wt.md,lg:Wt["2xl"],xl:Wt["4xl"],pill:Wt.pill},shadows:{panel:vo.panel,floating:vo.floating},breakpoints:_I,motion:II,typography:{fontSans:zt.fontSans,fontMono:zt.fontMono}},TI=X`
  background: var(--ig-color-surface-panel);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`;X`
  background: var(--ig-color-surface-raised);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`;X`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`;X`
  ${TI}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`;X`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: var(--ig-space-6) var(--ig-space-5);
  border-radius: var(--ig-radius-md);
  border: 1px solid var(--ig-color-border-strong);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  line-height: 1.4;
  transition:
    border-color var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &::placeholder {
    color: var(--ig-color-text-soft);
  }

  &:focus {
    outline: none;
    border-color: var(--ig-color-accent-ring);
    box-shadow: var(--ig-shadow-focus-ring);
    background: var(--ig-color-surface-focus);
  }

  &:where(select) {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: calc(var(--ig-space-7) * 2.5);
    border-radius: var(--ig-radius-md);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2398A2B3' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - var(--ig-space-7)) center;
    background-size: 10px 6px;
    box-shadow:
      inset 0 1px 0 var(--ig-color-inset-highlight),
      0 10px 24px rgba(0, 0, 0, 0.12);
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid var(--ig-color-accent-strong);
  background: linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%);
  color: white;
  cursor: pointer;
  transition:
    transform var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: var(--ig-shadow-hover-lift);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
  color: var(--ig-color-text-secondary);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--ig-color-accent-border-strong);
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid var(--ig-color-accent);
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    background: var(--ig-color-accent-soft-surface-hover);
    color: var(--ig-color-text-primary);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid color-mix(in srgb, var(--ig-color-alert-danger-border) 90%, transparent);
  background: linear-gradient(135deg, color-mix(in srgb, var(--ig-color-danger) 88%, #7f1d1d) 0%, #8f2f2f 100%);
  color: #fff4f4;
  cursor: pointer;
  transition:
    transform var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    opacity var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 28px rgba(127, 29, 29, 0.32);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid color-mix(in srgb, var(--ig-color-alert-danger-border) 78%, transparent);
  background: color-mix(in srgb, var(--ig-color-alert-danger-bg) 82%, transparent);
  color: var(--ig-color-alert-danger-text);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--ig-color-alert-danger-border);
    background: color-mix(in srgb, var(--ig-color-alert-danger-bg) 96%, transparent);
    color: #ffe1e1;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;X`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background:
    radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
    radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
    var(--ig-color-bg-canvas);
  color: var(--ig-color-text-primary);
`;var AI=X`
  background: var(--ig-color-surface-header);
  border-bottom: 1px solid var(--ig-color-border-subtle);
  backdrop-filter: blur(14px);
`;X`
  ${AI}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`;X`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`;var RI={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"},LI={"--ig-color-bg-canvas":se.colors.bgCanvas,"--ig-color-bg-canvas-alt":se.colors.bgCanvasAlt,"--ig-color-bg-radial-a":se.colors.bgRadialA,"--ig-color-bg-radial-b":se.colors.bgRadialB,"--ig-color-surface-header":se.colors.surfaceHeader,"--ig-color-surface-panel":se.colors.surfacePanel,"--ig-color-surface-raised":se.colors.surfaceRaised,"--ig-color-surface-muted":se.colors.surfaceMuted,"--ig-color-surface-interactive":se.colors.surfaceInteractive,"--ig-color-surface-active":se.colors.surfaceActive,"--ig-color-border-subtle":se.colors.borderSubtle,"--ig-color-border-strong":se.colors.borderStrong,"--ig-color-text-primary":se.colors.textPrimary,"--ig-color-text-secondary":se.colors.textSecondary,"--ig-color-text-muted":se.colors.textMuted,"--ig-color-text-soft":se.colors.textSoft,"--ig-color-accent":se.colors.accent,"--ig-color-accent-strong":se.colors.accentStrong,"--ig-color-accent-soft":se.colors.accentSoft,"--ig-color-success":se.colors.success,"--ig-color-warning":se.colors.warning,"--ig-color-danger":se.colors.danger,"--ig-color-surface-card-a":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":F.white07,"--ig-color-surface-focus":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":F.blueTint38,"--ig-color-accent-soft-surface":F.blueTint12,"--ig-color-accent-soft-surface-hover":F.blueTint18,"--ig-color-inset-highlight":"rgba(255, 255, 255, 0.04)","--ig-radius-sm":se.radius.sm,"--ig-radius-md":se.radius.md,"--ig-radius-lg":se.radius.lg,"--ig-radius-xl":se.radius.xl,"--ig-radius-pill":se.radius.pill,"--ig-radius-xs":Wt.xs,"--ig-radius-sm-alt":Wt.sm,"--ig-radius-lg-alt":Wt.lg,"--ig-radius-2xl":Wt["2xl"],"--ig-radius-3xl":Wt["3xl"],"--ig-radius-4xl":Wt["4xl"],"--ig-shadow-panel":se.shadows.panel,"--ig-shadow-floating":se.shadows.floating,"--ig-shadow-popover":vo.popover,"--ig-shadow-hover-lift":vo.hoverLift,"--ig-shadow-focus-ring":vo.focusRing,"--ig-font-sans":se.typography.fontSans,"--ig-font-mono":se.typography.fontMono,"--ig-font-size-2xs":zt.size2xs,"--ig-font-size-xs":zt.sizeXs,"--ig-font-size-sm":zt.sizeSm,"--ig-font-size-md":zt.sizeMd,"--ig-font-size-lg":zt.sizeLg,"--ig-font-size-xl":zt.sizeXl,"--ig-font-size-2xl":zt.size2xl,"--ig-font-size-3xl":zt.size3xl,"--ig-font-size-4xl":zt.size4xl,"--ig-font-size-5xl":zt.size5xl,"--ig-space-0":lt[0],"--ig-space-1":lt[1],"--ig-space-2":lt[2],"--ig-space-3":lt[3],"--ig-space-4":lt[4],"--ig-space-5":lt[5],"--ig-space-6":lt[6],"--ig-space-7":lt[7],"--ig-space-8":lt[8],"--ig-space-9":lt[9],"--ig-space-10":lt[10],"--ig-space-11":lt[11],"--ig-space-12":lt[12],"--ig-space-13":lt[13],"--ig-z-popover":String(du.popover),"--ig-z-drawer":String(du.drawer),"--ig-z-modal":String(du.modal),"--ig-scrollbar-thumb":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":F.greenTint18,"--ig-color-status-running-text":F.textSuccess,"--ig-color-status-completed-bg":F.cyanTint18,"--ig-color-status-completed-text":F.textCyan,"--ig-color-status-queued-bg":F.blueTint18,"--ig-color-status-queued-text":F.textBlue,"--ig-color-status-draft-bg":F.amberTint20,"--ig-color-status-draft-text":F.textWarning,"--ig-color-status-failed-bg":F.redTint18,"--ig-color-status-failed-text":F.textDanger,"--ig-color-status-stopped-bg":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":F.textSlateSoft,"--ig-color-status-interrupted-bg":F.amberTint18,"--ig-color-status-interrupted-text":F.textOrange,"--ig-color-status-warning-bg":F.amberTint18,"--ig-color-status-warning-text":F.textOrange,"--ig-color-status-idle-bg":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":F.textSlate,"--ig-color-alert-info-bg":F.blueTint12,"--ig-color-alert-info-border":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":F.textInfo,"--ig-color-alert-success-bg":F.greenTint12,"--ig-color-alert-success-border":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":F.textSuccessSoft,"--ig-color-alert-warning-bg":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":F.textWarningSoft,"--ig-color-alert-danger-bg":F.redTint12,"--ig-color-alert-danger-border":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":F.textDangerSoft,"--ig-color-chart-1":F.blue500,"--ig-color-chart-2":F.green500,"--ig-color-chart-3":F.amber500,"--ig-color-chart-4":F.red300,"--ig-color-chart-5":F.blue300,"--ig-color-chart-6":F.violet300,"--ig-color-chart-grid":"rgba(255, 255, 255, 0.08)","--ig-color-badge-neutral":F.white08,"--ig-color-badge-accent":F.blueTint18,"--ig-color-badge-success":F.greenTint18,"--ig-color-badge-warning":F.amberTint18,"--ig-color-badge-danger":F.redTint18,"--ig-color-progress-track":F.white08,"--ig-color-skeleton-start":F.white06,"--ig-color-skeleton-mid":F.white12,"--ig-color-image-card-hover-border":F.blueTint28,"--ig-color-image-card-selected-border":F.blueTint42,"--ig-color-image-card-selected-ring":F.blueTint18,"--ig-color-image-card-gradient-a":F.blueTint14,"--ig-color-image-card-gradient-b":F.greenTint12,"--ig-color-avatar-bg":F.blueTint18,"--ig-color-dropdown-trigger-shadow":"inset 0 1px 0 var(--ig-color-inset-highlight), 0 10px 24px rgba(0, 0, 0, 0.12)","--ig-color-dropdown-open-shadow":"0 0 0 3px rgba(77, 136, 255, 0.16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-chevron-bg":F.white04,"--ig-color-dropdown-chevron-border":F.borderMuted,"--ig-color-dropdown-menu-a":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":F.white06,"--ig-color-toggle-on-bg":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":F.white12,"--ig-color-toggle-off-border":F.borderStrong,"--ig-color-tab-surface":F.white04,"--ig-color-tab-highlight":F.blueTint18,"--ig-color-toolbar-surface":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":F.overlayBackdrop};function sg(e,t){const n=Object.entries(t).map(([r,i])=>`  ${r}: ${i};`);return`${e} {
${n.join(`
`)}
}`}function NI(){return`${sg(":root",LI)}

${sg(":root",RI)}
`}function OI({children:e,theme:t=se}){return O.jsx(EI,{theme:t,children:e})}var DI=PI`
  ${NI()}

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    background:
      radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
      radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
      var(--ig-color-bg-canvas);
    color: var(--ig-color-text-primary);
  }

  body {
    font-family: var(--ig-font-sans);
    line-height: 1.4;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--ig-scrollbar-thumb) transparent;
  }

  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    border: 2px solid transparent;
    border-radius: 999px;
    background: var(--ig-scrollbar-thumb);
    background-clip: padding-box;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: var(--ig-scrollbar-thumb-hover);
    background-clip: padding-box;
  }

  *::-webkit-scrollbar-thumb:active {
    background: var(--ig-scrollbar-thumb-active);
    background-clip: padding-box;
  }

  *::-webkit-scrollbar-corner {
    background: transparent;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  input:not([type='checkbox']):not([type='radio']),
  select,
  textarea {
    color: var(--ig-color-text-primary);
  }

  select option {
    background: ${F.slate900};
    color: var(--ig-color-text-primary);
  }

  a {
    color: inherit;
  }
`,jI={sm:"8px 12px",md:"10px 14px",lg:"12px 18px"};function FI(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}function Pr(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function Ia(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var ln=X`
  background: var(--ig-color-surface-panel);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,an=X`
  background: var(--ig-color-surface-raised);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,ps=X`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`;X`
  ${ln}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`;var _i=X`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: var(--ig-space-6) var(--ig-space-5);
  border-radius: var(--ig-radius-md);
  border: 1px solid var(--ig-color-border-strong);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  line-height: 1.4;
  transition:
    border-color var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &::placeholder {
    color: var(--ig-color-text-soft);
  }

  &:focus {
    outline: none;
    border-color: var(--ig-color-accent-ring);
    box-shadow: var(--ig-shadow-focus-ring);
    background: var(--ig-color-surface-focus);
  }

  &:where(select) {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: calc(var(--ig-space-7) * 2.5);
    border-radius: var(--ig-radius-md);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2398A2B3' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - var(--ig-space-7)) center;
    background-size: 10px 6px;
    box-shadow:
      inset 0 1px 0 var(--ig-color-inset-highlight),
      0 10px 24px rgba(0, 0, 0, 0.12);
  }
`,MI=X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid var(--ig-color-accent-strong);
  background: linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%);
  color: white;
  cursor: pointer;
  transition:
    transform var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: var(--ig-shadow-hover-lift);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,BI=X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
  color: var(--ig-color-text-secondary);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--ig-color-accent-border-strong);
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,UI=X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid var(--ig-color-accent);
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    background: var(--ig-color-accent-soft-surface-hover);
    color: var(--ig-color-text-primary);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,HI=X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid color-mix(in srgb, var(--ig-color-alert-danger-border) 90%, transparent);
  background: linear-gradient(135deg, color-mix(in srgb, var(--ig-color-danger) 88%, #7f1d1d) 0%, #8f2f2f 100%);
  color: #fff4f4;
  cursor: pointer;
  transition:
    transform var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    opacity var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 28px rgba(127, 29, 29, 0.32);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,VI=X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid color-mix(in srgb, var(--ig-color-alert-danger-border) 78%, transparent);
  background: color-mix(in srgb, var(--ig-color-alert-danger-bg) 82%, transparent);
  color: var(--ig-color-alert-danger-text);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--ig-color-alert-danger-border);
    background: color-mix(in srgb, var(--ig-color-alert-danger-bg) 96%, transparent);
    color: #ffe1e1;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;C.div`
  display: ${e=>e.$display??"block"};
  min-width: 0;
  ${e=>e.$padding!=null?`padding: ${Pr(e.$padding)};`:""}
  ${e=>e.$gap!=null?`gap: ${Pr(e.$gap)};`:""}
  ${e=>e.$width!=null?`width: ${Ia(e.$width)};`:""}
  ${e=>e.$height!=null?`height: ${Ia(e.$height)};`:""}
  ${e=>e.$align?`align-items: ${e.$align};`:""}
  ${e=>e.$justify?`justify-content: ${e.$justify};`:""}
  ${e=>e.$direction?`flex-direction: ${e.$direction};`:""}
  ${e=>e.$wrap?`flex-wrap: ${e.$wrap};`:""}
`;C.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>Pr(e.$gap)??"16px"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;C.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>Pr(e.$gap)??"12px"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;C.div`
  display: grid;
  min-width: 0;
  gap: ${e=>Pr(e.$gap)??"16px"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(${Ia(e.$minItemWidth)??"220px"}, 1fr))`};
`;C.div`
  width: 100%;
  max-width: ${e=>Ia(e.$maxWidth)??"1280px"};
  margin: 0 auto;
  padding-inline: ${e=>Pr(e.$padding)??"24px"};
`;var WI={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"};C.span`
  color: ${e=>WI[e.$tone??"default"]};
  font-size: ${e=>e.$size??"14px"};
  font-weight: ${e=>e.$weight??400};
  line-height: 1.45;
  word-break: break-word;
`;C.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: -0.02em;
  font-size: ${e=>e.$level===1?"32px":e.$level===2?"24px":e.$level===3?"18px":"16px"};
  font-weight: ${e=>e.$level===1?800:e.$level===2?700:600};
`;C.div`
  ${e=>e.$elevation==="raised"?an:e.$elevation==="card"?ps:ln}
  border-radius: ${e=>Pr(e.$radius)??"20px"};
`;C.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`;C.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`;C.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${e.$size??18}px`};
  height: ${e=>`${e.$size??18}px`};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;var GI=C.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 0;
  padding: ${e=>e.$iconOnly?"10px":jI[e.$size]};
  font-size: ${e=>e.$size==="sm"?"13px":e.$size==="lg"?"15px":"14px"};
  font-weight: 600;
  line-height: 1;
  ${e=>e.$tone==="danger"?e.$variant==="secondary"?VI:HI:e.$variant==="secondary"?BI:e.$variant==="accent"?UI:MI}
`;function Dy({variant:e,$variant:t,size:n="md",tone:r="default",children:i,...o}){return O.jsx(GI,{type:"button",$variant:FI(e,t),$size:n,$tone:r,$iconOnly:!0,"aria-label":o["aria-label"]??"Action",...o,children:i})}C.input`
  ${_i}
`;var QI=C.textarea`
  ${_i}
`;C.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;C.input`
  ${_i}
  padding-left: calc(var(--ig-space-5) + 20px);
  padding-right: calc(var(--ig-space-5) + 20px);
  ${e=>e.$size==="sm"&&"padding-top: var(--ig-space-3); padding-bottom: var(--ig-space-3); font-size: var(--ig-font-size-sm);"}
`;C.span`
  position: absolute;
  left: var(--ig-space-4);
  display: flex;
  pointer-events: none;
  color: var(--ig-color-text-soft);
`;C.button`
  position: absolute;
  right: var(--ig-space-3);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: var(--ig-radius-xs);
  background: transparent;
  color: var(--ig-color-text-soft);
  cursor: pointer;
  &:hover { color: var(--ig-color-text-primary); }
`;C.input`
  ${_i}
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
`;C.div`
  position: relative;
  width: 100%;
`;C.textarea`
  ${_i}
  resize: vertical;
  min-height: 60px;
`;C.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  max-height: 160px;
  overflow-y: auto;
  background: var(--ig-color-surface-elevated, #1e1e2e);
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-md);
  z-index: 10;
`;C.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: none;
  background: ${e=>e.$active?"var(--ig-color-surface-interactive)":"transparent"};
  color: var(--ig-color-text-primary);
  text-align: left;
  cursor: pointer;
  &:hover { background: var(--ig-color-surface-interactive); }
`;C.span`
  font-size: var(--ig-font-size-sm);
  font-weight: 500;
`;C.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`;C.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-sm);
  cursor: pointer;
  user-select: none;
`;C.span`
  width: 40px;
  height: 24px;
  border-radius: var(--ig-radius-pill);
  background: ${e=>e.$checked?"var(--ig-color-toggle-on-bg)":"var(--ig-color-toggle-off-bg)"};
  border: 1px solid ${e=>e.$checked?"var(--ig-color-toggle-on-border)":"var(--ig-color-toggle-off-border)"};
  position: relative;
  transition: background-color var(--ig-motion-fast);

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${e=>e.$checked?"18px":"2px"};
    width: 18px;
    height: 18px;
    border-radius: var(--ig-radius-pill);
    background: white;
    transition: left var(--ig-motion-fast);
  }
`;C.div`
  position: relative;
  min-width: 0;
`;C.button`
  ${_i}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  text-align: left;
  cursor: pointer;
  padding-right: var(--ig-space-6);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-color-dropdown-trigger-shadow);

  ${e=>e.$open&&X`
      border-color: var(--ig-color-accent-ring);
      box-shadow: var(--ig-color-dropdown-open-shadow);
      background: var(--ig-color-surface-focus);
    `}
`;C.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;C.span`
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-dropdown-chevron-bg);
  border: 1px solid var(--ig-color-dropdown-chevron-border);
  color: var(--ig-color-text-soft);
  transform: ${e=>e.$open?"rotate(180deg)":"rotate(0deg)"};
  transition: transform var(--ig-motion-fast), background-color var(--ig-motion-fast), color var(--ig-motion-fast);
`;C.div.attrs(({$layout:e})=>({style:{left:`${e.left}px`,width:`${e.width}px`,maxHeight:`${e.maxHeight}px`,...typeof e.top=="number"?{top:`${e.top}px`}:{},...typeof e.bottom=="number"?{bottom:`${e.bottom}px`}:{}}}))`
  position: fixed;
  z-index: var(--ig-z-popover);
  padding: var(--ig-space-4);
  border-radius: var(--ig-radius-2xl);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: 1px solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: blur(16px);
  overflow-y: auto;
`;C.button`
  width: 100%;
  padding: var(--ig-space-5) var(--ig-space-6);
  border: 1px solid ${e=>e.$active?"var(--ig-color-accent-border-strong)":"transparent"};
  border-radius: var(--ig-radius-md);
  background: ${e=>e.$active?"var(--ig-color-image-card-gradient-a)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: left;
  cursor: pointer;

  &:hover {
    border-color: var(--ig-color-image-card-hover-border);
    background: var(--ig-color-dropdown-option-hover);
    color: var(--ig-color-text-primary);
  }

  &:not(:last-child) {
    margin-bottom: var(--ig-space-2);
  }
`;C.div`
  font-size: var(--ig-font-size-sm);
  font-weight: 600;
`;C.div`
  margin-top: var(--ig-space-1);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`;C.select`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  white-space: nowrap;
`;C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  border: 2px dashed ${e=>e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-border-subtle)"};
  border-radius: var(--ig-radius-lg);
  background: ${e=>e.$active?"rgba(74,158,255,0.06)":"transparent"};
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-sm);
  text-align: center;
  cursor: ${e=>e.$disabled?"default":"pointer"};
  opacity: ${e=>e.$disabled?.5:1};
  transition: border-color var(--ig-motion-fast), background var(--ig-motion-fast);
`;C.input`
  display: none;
`;C.button`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: ${e=>e.$size==="sm"?"var(--ig-space-1) var(--ig-space-3)":"var(--ig-space-2) var(--ig-space-4)"};
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-muted);
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-2xs)":"var(--ig-font-size-xs)"};
  cursor: pointer;
  transition: color var(--ig-motion-fast), border-color var(--ig-motion-fast);
  &:hover { color: var(--ig-color-text-primary); border-color: var(--ig-color-border-strong); }
`;C.div`
  display: inline-flex;
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  overflow: hidden;
  background: var(--ig-color-surface-muted);
`;C.button`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: ${e=>e.$size==="sm"?"var(--ig-space-1) var(--ig-space-3)":"var(--ig-space-2) var(--ig-space-4)"};
  border: none;
  background: ${e=>e.$active?"var(--ig-color-accent-soft)":"transparent"};
  color: ${e=>e.$active?"#fff":"var(--ig-color-text-muted)"};
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-2xs)":"var(--ig-font-size-xs)"};
  font-weight: ${e=>e.$active?600:400};
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--ig-motion-fast), color var(--ig-motion-fast);
  &:hover:not(:disabled) {
    background: ${e=>e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-surface-interactive)"};
  }
`;C.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`;C.div`
  font-size: var(--ig-font-size-sm);
  font-weight: 700;
  color: var(--ig-color-text-primary);
`;C.div`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  margin-top: calc(-1 * var(--ig-space-2));
`;C.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: var(--ig-space-3);
  align-items: start;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;C.label`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
  padding-top: var(--ig-space-3);
`;C.div`
  min-width: 0;
`;C.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
  margin-top: var(--ig-space-1);
`;C.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  flex-wrap: wrap;
`;C.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  &:hover { color: var(--ig-color-text-primary); }
`;var YI={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},li={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};C.span`
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  word-break: break-word;
`;var jy=C.div`
  padding: var(--ig-space-12);
  text-align: center;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-md);
`;C(jy)`
  text-align: left;
`;C(jy)`
  color: var(--ig-color-alert-danger-text);
`;C.span`
  ${({$tone:e,tone:t})=>{const n=YI[e??t??"idle"];return X`
      background: ${n.background};
      color: ${n.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;var qI={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},KI=C.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: 600;
  color: var(--ig-color-text-primary);
  background: ${e=>qI[e.$tone??"neutral"]};
`;C(KI)`
  border: 1px solid var(--ig-color-border-subtle);
`;C.div`
  width: ${e=>`${e.$size}px`};
  height: ${e=>`${e.$size}px`};
  border-radius: var(--ig-radius-pill);
  overflow: hidden;
  background: var(--ig-color-avatar-bg);
  color: var(--ig-color-accent-soft);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;C.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;C.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(42%, -42%);
  min-width: 18px;
  height: 18px;
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  background: ${e=>e.$tone==="accent"?"var(--ig-color-accent)":"var(--ig-color-danger)"};
  color: var(--ig-color-text-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  box-shadow: 0 0 0 2px var(--ig-color-bg-canvas);
  pointer-events: none;
`;C.div`
  width: 100%;
  height: 8px;
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-progress-track);
  overflow: hidden;
`;C.div`
  width: ${e=>`${Math.max(0,Math.min(100,e.$value))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%);
`;var XI=X`
  background:
    linear-gradient(
      90deg,
      var(--ig-color-skeleton-start) 0%,
      var(--ig-color-skeleton-mid) 50%,
      var(--ig-color-skeleton-start) 100%
    )
    0 0 / 200% 100%;
  animation: skeletonShift 1.3s linear infinite;

  @keyframes skeletonShift {
    to {
      background-position: -200% 0;
    }
  }
`;C.div`
  ${XI}
  width: 100%;
  height: ${e=>e.$height??"16px"};
  border-radius: var(--ig-radius-sm);
`;var Zi=C.div`
  ${({$tone:e="info"})=>X`
    background: ${li[e].background};
    border-color: ${li[e].border};
    color: ${li[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: 1px solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`;C(Zi)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`;var JI=dd`
  to { transform: rotate(360deg); }
`,ZI={sm:14,md:18,lg:24},e_={accent:"var(--ig-color-accent)",white:"var(--ig-color-text-primary)",muted:"var(--ig-color-text-soft)"},t_=C.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: 2px solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${JI} 0.7s linear infinite;
  vertical-align: middle;
`;function ug({size:e="md",tone:t="accent","aria-label":n,...r}){return O.jsx(t_,{...r,$px:ZI[e],$color:e_[t],role:"status","aria-label":n??"Loading"})}var n_=dd`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,r_=dd`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(12px); }
`;C.div`
  ${({$tone:e})=>X`
    background: ${li[e].background};
    border-color: ${li[e].border};
    color: ${li[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: 1px solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating, 0 4px 16px rgba(0,0,0,.12));
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?r_:n_} 200ms ease forwards;
  max-width: 420px;
  word-break: break-word;
`;C.div`
  position: fixed;
  bottom: var(--ig-space-6, 24px);
  right: var(--ig-space-6, 24px);
  z-index: var(--ig-z-toast, 9000);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--ig-space-3, 8px);
  pointer-events: none;
`;T.createContext(()=>{});C.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  background: var(--ig-color-surface-elevated);
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`;C.span`
  font-weight: 600;
  white-space: nowrap;
`;var i_=C.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`;C(i_)``;C.div`
  flex: 1;
`;C.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`;C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  text-align: center;
  color: var(--ig-color-text-muted);
`;C.div`
  color: var(--ig-color-text-soft);
  opacity: 0.6;
`;C.div`
  font-size: var(--ig-font-size-sm);
  font-weight: 600;
  color: var(--ig-color-text-primary);
`;C.div`
  font-size: var(--ig-font-size-xs);
  line-height: 1.5;
  max-width: 320px;
`;C.button`
  border: 1px solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-5);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;var Fy=X`
  display: inline-flex;
  position: relative;
  padding: var(--ig-space-1);
  border-radius: var(--ig-radius-lg);
  border: 1px solid var(--ig-color-border-subtle);
  background: var(--ig-color-tab-surface);
  gap: var(--ig-space-1);
`;C.div`
  ${e=>e.$variant==="underline"?X`
          display: inline-flex;
          position: relative;
          align-items: stretch;
          gap: 0;
          width: 100%;
          border-bottom: 1px solid var(--ig-color-border-subtle);
        `:Fy}
`;C.div`
  position: absolute;
  left: ${e=>`${e.$left}px`};
  width: ${e=>`${e.$width}px`};
  ${({$variant:e})=>e==="underline"?X`
          bottom: -1px;
          height: 2px;
          border-radius: var(--ig-radius-pill);
          background: var(--ig-color-accent-soft);
        `:X`
          top: var(--ig-space-1);
          height: calc(100% - calc(var(--ig-space-1) * 2));
          border-radius: var(--ig-radius-sm);
          background: var(--ig-color-tab-highlight);
        `}
  opacity: ${e=>e.$visible?1:0};
  pointer-events: none;
  transition: left 0.22s ease, width 0.22s ease, opacity 0.16s ease;
`;C.button`
  position: relative;
  z-index: 1;
  border: 0;
  border-radius: ${e=>e.$variant==="underline"?"0":"var(--ig-radius-sm)"};
  background: transparent;
  padding: ${e=>e.$variant==="underline"?"var(--ig-space-4) var(--ig-space-9)":"var(--ig-space-4) var(--ig-space-6)"};
  color: ${e=>e.$variant==="underline"?e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-text-muted)":e.$active?"var(--ig-color-text-primary)":"var(--ig-color-text-muted)"};
  cursor: pointer;
  font-weight: ${e=>e.$variant==="underline"?e.$active?600:500:600};
  transition: color var(--ig-motion-fast);
`;C.div`
  ${Fy}
`;var pd={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}};C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: ${e=>pd[e.$radius].root};
  background: var(--ig-color-surface-panel);
`;C.div`
  position: absolute;
  left: var(--ig-space-2);
  right: var(--ig-space-2);
  top: ${e=>`${e.$top}px`};
  height: ${e=>`${e.$height}px`};
  border-left: 3px solid var(--ig-color-accent-soft);
  border-radius: ${e=>pd[e.$radius].item};
  background: var(--ig-color-tab-highlight);
  opacity: ${e=>e.$visible?1:0};
  pointer-events: none;
  transition:
    top 0.22s ease,
    height 0.22s ease,
    opacity 0.16s ease;
`;C.button`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  width: 100%;
  min-height: 44px;
  padding: var(--ig-space-4) var(--ig-space-4) var(--ig-space-4) var(--ig-space-5);
  border: 0;
  border-radius: ${e=>pd[e.$radius].item};
  background: transparent;
  color: ${e=>e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-text-muted)"};
  font-size: var(--ig-font-size-sm);
  font-weight: ${e=>e.$active?600:500};
  text-align: left;
  cursor: pointer;
  transition:
    color var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    color: ${e=>e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-text-primary)"};
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--ig-shadow-focus-ring);
  }

  &:disabled {
    opacity: 0.48;
    cursor: not-allowed;
  }
`;C.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  min-width: 0;
`;C.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;C.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-badge-accent);
  color: var(--ig-color-text-primary);
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
`;C.div`
  position: fixed;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ig-z-modal);
  padding: var(--ig-space-11);
`;var o_=C.div`
  ${an}
  width: min(920px, 100%);
  max-height: calc(100vh - 48px);
  overflow: auto;
  border-radius: var(--ig-radius-4xl);
`;C(o_)`
  width: auto;
  min-width: 320px;
  max-width: min(560px, calc(100vw - 48px));
  padding: var(--ig-space-9);
  border-radius: var(--ig-radius-lg);
`;C.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-7);
  border-bottom: 1px solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
`;C.h2`
  margin: 0;
  font-size: var(--ig-font-size-3xl);
  font-weight: 700;
`;C.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--ig-space-3);
`;C.aside`
  ${an}
  position: fixed;
  top: 0;
  bottom: 0;
  ${e=>e.$side==="left"?"left: 0;":"right: 0;"}
  width: min(420px, 100vw);
  z-index: var(--ig-z-drawer);
  padding: var(--ig-space-9);
  border-radius: 0;
`;var l_=C.div`
  ${an}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,a_=C.div`
  ${an}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: 180px;
`;C(a_)`
  padding: var(--ig-space-4);
  min-width: 220px;
  box-shadow: var(--ig-shadow-popover);
`;C.div`
  ${an}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: 240px;
`;C(l_)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: 220px;
  max-width: 320px;
  box-shadow: var(--ig-shadow-popover);
`;C(Dy)`
  border-color: transparent;
  background: transparent;
  color: var(--ig-color-text-muted);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    border-color: var(--ig-color-border-subtle);
    color: var(--ig-color-text-primary);
  }
`;C.div`
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;C.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--ig-color-text-muted);
`;C.div`
  position: fixed;
  inset: 0;
  z-index: 100;
`;C.div.attrs(e=>({style:{left:e.$x,top:e.$y}}))`
  position: fixed;
  z-index: 101;
  min-width: 120px;
  padding: var(--ig-space-1) 0;
  ${an}
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-popover);
`;C.div`
  position: relative;
  display: block;
  width: 100%;
`;C.button`
  display: block;
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-6);
  border: none;
  background: none;
  color: ${e=>e.$danger?"var(--ig-color-danger)":"var(--ig-color-text-primary)"};
  font-size: var(--ig-font-size-sm);
  text-align: left;
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;C.div.attrs(e=>({style:{left:e.$left,top:e.$top}}))`
  position: fixed;
  z-index: 102;
  min-width: 140px;
  padding: var(--ig-space-1) 0;
  ${an}
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-popover);
`;C.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  padding: var(--ig-space-2) var(--ig-space-6);
  border: none;
  background: none;
  color: ${e=>e.$color??"var(--ig-color-text-primary)"};
  font-size: var(--ig-font-size-sm);
  text-align: left;
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;C.div`
  ${an}
  position: fixed;
  z-index: 9999;
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: 260px;
  min-width: 160px;
  line-height: 1.4;
  white-space: normal;
  box-shadow: var(--ig-shadow-popover);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
`;C.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;C.div`
  overflow-x: auto;
`;C.table`
  width: 100%;
  border-collapse: collapse;
`;C.th`
  text-align: left;
  padding: var(--ig-space-4) var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  font-weight: 500;
  border-bottom: 1px solid var(--ig-color-border-subtle);
`;C.td`
  padding: var(--ig-space-5);
  color: var(--ig-color-text-secondary);
  border-bottom: 1px solid var(--ig-color-border-subtle);
`;C.section`
  ${ln}
  border-radius: 20px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${e=>`${e.$minItemWidth}px`}, 1fr));
  gap: var(--ig-space-6);
`;C.button`
  ${ln}
  width: 100%;
  padding: 0;
  border-radius: var(--ig-radius-2xl);
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  border-color: ${e=>e.$selected?"var(--ig-color-image-card-selected-border)":"var(--ig-color-border-subtle)"};
  box-shadow: ${e=>e.$selected?"0 0 0 2px var(--ig-color-image-card-selected-ring), var(--ig-shadow-panel)":"var(--ig-shadow-panel)"};
  transition: transform var(--ig-motion-fast), border-color var(--ig-motion-fast), box-shadow var(--ig-motion-fast), background-color var(--ig-motion-fast);

  &:hover {
    transform: translateY(-1px);
    border-color: var(--ig-color-image-card-hover-border);
  }
`;C.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, var(--ig-color-image-card-gradient-a) 0%, var(--ig-color-image-card-gradient-b) 100%), var(--ig-color-surface-interactive);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;C.div`
  padding: var(--ig-space-6);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`;C.div`
  font-size: var(--ig-font-size-md);
  font-weight: 700;
  color: var(--ig-color-text-primary);
`;C.div`
  font-size: var(--ig-font-size-xs);
  line-height: 1.5;
  color: var(--ig-color-text-muted);
`;C.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--ig-space-3);
`;C.div`
  ${ps}
  border-radius: 20px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;C.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ig-color-text-soft);
`;C.span`
  font-size: 28px;
  line-height: 1;
  font-weight: 800;
  color: var(--ig-color-text-primary);
`;C.span`
  font-size: 13px;
  color: var(--ig-color-text-muted);
`;C.div`
  ${ln}
  border-radius: 18px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;C.div`
  ${ln}
  border-radius: var(--ig-radius-2xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;C.div`
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, var(--ig-color-image-card-gradient-a) 0%, var(--ig-color-image-card-gradient-b) 100%), var(--ig-color-surface-interactive);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;C.div`
  padding: var(--ig-space-6) var(--ig-space-7) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`;C.div`
  ${ln}
  border-radius: 18px;
  padding: 14px 16px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
`;C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;var cg={xs:"8px",sm:"12px",md:"16px"};C.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>cg[e.$size??"sm"]};
  height: ${e=>cg[e.$size??"sm"]};
  border-radius: ${e=>e.$shape==="square"?"var(--ig-radius-xs)":"50%"};
  background: ${e=>e.$color};
`;C.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`;C.div`
  padding: var(--ig-space-3) var(--ig-space-4);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
`;C.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;C.span`
  font-weight: 600;
  color: var(--ig-color-text-primary);
`;C.div`
  font-size: var(--ig-font-size-sm);
  line-height: 1.5;
  white-space: pre-wrap;
  color: var(--ig-color-text-primary);
`;C.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`;C.textarea`
  width: 100%;
  min-height: 56px;
  resize: vertical;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus { outline: none; border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`;C.div`
  display: flex;
  justify-content: flex-end;
`;C.button`
  padding: var(--ig-space-2) var(--ig-space-5);
  border: none;
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-accent-soft);
  color: #fff;
  font-size: var(--ig-font-size-xs);
  font-weight: 600;
  cursor: pointer;
  &:disabled { opacity: 0.4; cursor: default; }
  &:hover:not(:disabled) { opacity: 0.85; }
`;C.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  overflow-y: auto;
`;C.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  padding: var(--ig-space-2) var(--ig-space-3);
  border: none;
  border-radius: var(--ig-radius-xs);
  background: ${e=>e.$active?"var(--ig-color-surface-interactive)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-text-primary)":"var(--ig-color-text-muted)"};
  font-size: var(--ig-font-size-sm);
  text-align: left;
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;C.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;C.span`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
`;C.div`
  position: relative;
  width: 100%;
`;C.input`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus { outline: none; border-color: var(--ig-color-accent-ring); }
`;C.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
  background: var(--ig-color-surface-elevated, #1e1e2e);
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-md);
  margin-top: var(--ig-space-1);
`;C.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: none;
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  text-align: left;
  cursor: pointer;
  &:hover { background: var(--ig-color-surface-interactive); }
`;C.div`
  padding: var(--ig-space-4);
  text-align: center;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`;C.button`
  display: block;
  margin: var(--ig-space-2) auto var(--ig-space-3);
  border: 1px solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-accent-soft);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-4);
  cursor: pointer;
  &:hover { background: var(--ig-color-surface-interactive); }
`;C.div`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;C.div`
  transform: translate(${e=>e.$panX}px, ${e=>e.$panY}px) scale(${e=>e.$zoom});
  transform-origin: center center;
  transition: ${e=>(e.$zoom===1,"none")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;C.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`;C.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`;C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover:not(:disabled) { background: var(--ig-color-surface-interactive); }
  &:disabled { opacity: 0.4; cursor: default; }
`;C.span`
  min-width: 48px;
  text-align: center;
  font-size: var(--ig-font-size-xs);
  font-weight: 600;
  color: var(--ig-color-text-muted);
`;C.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  flex: 1;
  min-width: 0;
  min-height: 0;
`;C.div`
  overflow: auto;
  min-width: 0;
  min-height: 0;
`;C.div`
  flex-shrink: 0;
  ${e=>e.$direction==="horizontal"?"width: 4px; cursor: col-resize;":"height: 4px; cursor: row-resize;"}
  background: transparent;
  transition: background var(--ig-motion-fast);
  &:hover, &:active {
    background: var(--ig-color-accent-soft);
  }
`;C.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--ig-space-2);
  align-items: center;
`;C.button`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-3);
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-2xs);
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;C.span`
  display: inline-flex;
  align-items: center;
  padding: var(--ig-space-1) var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-surface-interactive);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-2xs);
  font-weight: 600;
`;C.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
`;C.kbd`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${e=>e.$size==="sm"?"16px":"20px"};
  height: ${e=>e.$size==="sm"?"16px":"20px"};
  padding: 0 ${e=>e.$size==="sm"?"3px":"4px"};
  border-radius: var(--ig-radius-xs);
  background: var(--ig-color-surface-interactive);
  color: var(--ig-color-text-soft);
  font-family: inherit;
  font-size: ${e=>e.$size==="sm"?"10px":"11px"};
  font-weight: 500;
  line-height: 1;
`;C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
`;C.div`
  ${ln}
  border-radius: 16px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--ig-color-text-secondary);
`;C.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
`;C.div`
  font-size: 12px;
  color: var(--ig-color-text-muted);
  text-align: center;
  word-break: break-word;
`;C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
`;C.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--ig-color-text-secondary);
  font-size: 12px;
`;C.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: ${e=>e.$color};
`;C.div`
  ${an}
  border-radius: 14px;
  padding: 10px 12px;
  min-width: 140px;
`;C.div`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  color: var(--ig-color-text-primary);
`;C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 12px;
  color: var(--ig-color-text-secondary);

  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;C.div`
  ${ps}
  border-radius: 22px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;C.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;C.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--ig-color-text-primary);
`;C.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--ig-color-text-muted);
`;C.div`
  width: 100%;
  height: ${e=>`${e.$height}px`};
  min-height: 0;
`;C.div`
  ${ln}
  border-radius: 20px;
`;C.div`
  ${ps}
  border-radius: 20px;
`;C.details`
  ${ln}
  border-radius: 18px;
  overflow: hidden;

  summary {
    cursor: pointer;
    padding: 14px 16px;
    list-style: none;
    font-weight: 600;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  > div {
    padding: 0 16px 16px;
    color: var(--ig-color-text-muted);
  }
`;function Ir(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function _a(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var My=X`
  background: var(--ig-color-surface-panel);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,s_=X`
  background: var(--ig-color-surface-raised);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,u_=X`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`;X`
  ${My}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`;X`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: var(--ig-space-6) var(--ig-space-5);
  border-radius: var(--ig-radius-md);
  border: 1px solid var(--ig-color-border-strong);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  line-height: 1.4;
  transition:
    border-color var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &::placeholder {
    color: var(--ig-color-text-soft);
  }

  &:focus {
    outline: none;
    border-color: var(--ig-color-accent-ring);
    box-shadow: var(--ig-shadow-focus-ring);
    background: var(--ig-color-surface-focus);
  }

  &:where(select) {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: calc(var(--ig-space-7) * 2.5);
    border-radius: var(--ig-radius-md);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2398A2B3' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - var(--ig-space-7)) center;
    background-size: 10px 6px;
    box-shadow:
      inset 0 1px 0 var(--ig-color-inset-highlight),
      0 10px 24px rgba(0, 0, 0, 0.12);
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid var(--ig-color-accent-strong);
  background: linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%);
  color: white;
  cursor: pointer;
  transition:
    transform var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: var(--ig-shadow-hover-lift);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
  color: var(--ig-color-text-secondary);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--ig-color-accent-border-strong);
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid var(--ig-color-accent);
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    background: var(--ig-color-accent-soft-surface-hover);
    color: var(--ig-color-text-primary);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid color-mix(in srgb, var(--ig-color-alert-danger-border) 90%, transparent);
  background: linear-gradient(135deg, color-mix(in srgb, var(--ig-color-danger) 88%, #7f1d1d) 0%, #8f2f2f 100%);
  color: #fff4f4;
  cursor: pointer;
  transition:
    transform var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    opacity var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 28px rgba(127, 29, 29, 0.32);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;X`
  border-radius: var(--ig-radius-sm);
  border: 1px solid color-mix(in srgb, var(--ig-color-alert-danger-border) 78%, transparent);
  background: color-mix(in srgb, var(--ig-color-alert-danger-bg) 82%, transparent);
  color: var(--ig-color-alert-danger-text);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--ig-color-alert-danger-border);
    background: color-mix(in srgb, var(--ig-color-alert-danger-bg) 96%, transparent);
    color: #ffe1e1;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;C.div`
  display: ${e=>e.$display??"block"};
  min-width: 0;
  ${e=>e.$padding!=null?`padding: ${Ir(e.$padding)};`:""}
  ${e=>e.$gap!=null?`gap: ${Ir(e.$gap)};`:""}
  ${e=>e.$width!=null?`width: ${_a(e.$width)};`:""}
  ${e=>e.$height!=null?`height: ${_a(e.$height)};`:""}
  ${e=>e.$align?`align-items: ${e.$align};`:""}
  ${e=>e.$justify?`justify-content: ${e.$justify};`:""}
  ${e=>e.$direction?`flex-direction: ${e.$direction};`:""}
  ${e=>e.$wrap?`flex-wrap: ${e.$wrap};`:""}
`;var c_=C.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>Ir(e.$gap)??"16px"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function Vi({gap:e,align:t,justify:n,...r}){return O.jsx(c_,{$gap:e,$align:t,$justify:n,...r})}C.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>Ir(e.$gap)??"12px"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;C.div`
  display: grid;
  min-width: 0;
  gap: ${e=>Ir(e.$gap)??"16px"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(${_a(e.$minItemWidth)??"220px"}, 1fr))`};
`;C.div`
  width: 100%;
  max-width: ${e=>_a(e.$maxWidth)??"1280px"};
  margin: 0 auto;
  padding-inline: ${e=>Ir(e.$padding)??"24px"};
`;var f_={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},d_=C.span`
  color: ${e=>f_[e.$tone??"default"]};
  font-size: ${e=>e.$size??"14px"};
  font-weight: ${e=>e.$weight??400};
  line-height: 1.45;
  word-break: break-word;
`;function pu({tone:e,size:t,weight:n,...r}){return O.jsx(d_,{$tone:e,$size:t,$weight:n,...r})}var p_=C.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: -0.02em;
  font-size: ${e=>e.$level===1?"32px":e.$level===2?"24px":e.$level===3?"18px":"16px"};
  font-weight: ${e=>e.$level===1?800:e.$level===2?700:600};
`;function h_({level:e=2,...t}){const n=`h${Math.min(e+1,6)}`;return O.jsx(p_,{as:n,$level:e,...t})}var g_=C.div`
  ${e=>e.$elevation==="raised"?s_:e.$elevation==="card"?u_:My}
  border-radius: ${e=>Ir(e.$radius)??"20px"};
`;function By({elevation:e="panel",radius:t,...n}){return O.jsx(g_,{$elevation:e,$radius:t,...n})}C.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`;C.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`;C.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${e.$size??18}px`};
  height: ${e=>`${e.$size??18}px`};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;const Ti=760,m_=Se.div`
  min-height: 100vh;
  background: #0b1016;
`,v_=Se.div`
  padding: 22px;

  @media (max-width: ${Ti}px) {
    padding: 12px;
  }
`,y_=Se.div`
  width: 100%;
  max-width: ${e=>e.$wide?"100%":"1320px"};
  margin: 0 auto;
`,x_=Se(By)`
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 10px 0 12px;
  background: #0b1016;
  border-radius: 0;
  border: 0;
  backdrop-filter: none;
  box-shadow: none;

  @media (max-width: ${Ti}px) {
    padding: 8px 0 10px;
  }
`,w_=Se.div`
  display: grid;
`,k_=Se.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
`,b_=Se.nav`
  min-width: 0;
`,S_=Se.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  color: var(--ig-color-text-muted);
  font-size: 13px;
`,C_=Se.button`
  appearance: none;
  border: 0;
  background: none;
  padding: 0;
  color: ${e=>e.$active?"var(--ig-color-text-primary)":"var(--ig-color-text-muted)"};
  font: inherit;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: var(--ig-color-text-primary);
  }
`,E_=Se.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
  grid-template-columns: minmax(0, 1fr);
`,$_=Se.div`
  width: 100%;
`,wl=Se(By)`
  min-height: calc(100vh - 176px);
  border: 0;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;

  @media (max-width: ${Ti}px) {
    min-height: calc(100vh - 152px);
  }
`,kl=Se.div`
  height: 100%;
  overflow: auto;
  padding: 18px;

  @media (max-width: ${Ti}px) {
    padding: 14px 12px 18px;
  }
`,z_=Se.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;

  @media (max-width: ${Ti}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,P_=Se.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,I_=Se.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,__=Se.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 7px 6px;
  padding-left: ${e=>14+e.$depth*18}px;
  border: 0;
  border-radius: 12px;
  background: ${e=>e.$active?"rgba(255, 255, 255, 0.06)":"transparent"};
`,T_=Se.button`
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--ig-color-text-muted);
  width: 28px;
  height: 28px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: var(--ig-color-text-primary);
    background: rgba(255, 255, 255, 0.08);
  }
`,A_=Se.button`
  appearance: none;
  border: 0;
  background: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
`,R_=Se.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--ig-color-text-primary);
  font-weight: 600;
`,fg=Se.span`
  font-size: 12px;
  color: var(--ig-color-text-muted);
`,L_=Se.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,N_=Se.article`
  max-width: 980px;
  color: var(--ig-color-text-secondary);
  line-height: 1.7;

  h1,
  h2,
  h3,
  h4 {
    color: var(--ig-color-text-primary);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 34px;
    margin: 0 0 22px;
  }

  h2 {
    font-size: 24px;
    margin: 30px 0 14px;
  }

  h3 {
    font-size: 20px;
    margin: 24px 0 12px;
  }

  p,
  li,
  blockquote {
    font-size: 15px;
  }

  ul,
  ol {
    padding-left: 22px;
  }

  a {
    color: var(--ig-color-text-accent);
  }

  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  }

  pre {
    margin: 16px 0;
    padding: 16px 18px;
    border-radius: 18px;
    overflow: auto;
    border: 1px solid var(--ig-color-border-subtle);
    background: rgba(3, 6, 10, 0.56);
    color: var(--ig-color-text-primary);
  }

  pre code {
    background: transparent;
    padding: 0;
  }

  :not(pre) > code {
    padding: 2px 6px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 18px 0;
    display: block;
    overflow-x: auto;
  }

  th,
  td {
    padding: 10px 12px;
    border: 1px solid var(--ig-color-border-subtle);
    text-align: left;
    vertical-align: top;
    white-space: nowrap;
  }

  blockquote {
    margin: 16px 0;
    padding: 4px 0 4px 16px;
    border-left: 3px solid rgba(77, 136, 255, 0.4);
    color: var(--ig-color-text-muted);
  }

  hr {
    border: 0;
    border-top: 1px solid var(--ig-color-border-subtle);
    margin: 22px 0;
  }

  img {
    max-width: 100%;
    border-radius: 18px;
  }

  @media (max-width: ${Ti}px) {
    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 18px;
    }
  }
`,O_=Se(QI)`
  width: 100%;
  min-height: 420px;
  resize: none;
  overflow: hidden;
  padding: 20px 22px;
  line-height: 1.7;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 14px;
  white-space: pre;
`;function Oc(e){return(e??"").replace(/^\/+|\/+$/g,"")}function dg(e){return e.split("/").filter(Boolean).map(t=>encodeURIComponent(t)).join("/")}function D_(e){const t=Oc(e);if(!t)return new Set([""]);const n=t.split("/"),r=new Set([""]),o=t.endsWith(".md")?n.slice(0,-1):n;return o.forEach((l,a)=>{r.add(o.slice(0,a+1).join("/"))}),r}function Uy(e,t){if(!e)return null;if(e.path===t)return e;for(const n of e.children??[]){const r=Uy(n,t);if(r)return r}return null}function Hy(e){return/^(https?:)?\/\//.test(e)||e.startsWith("mailto:")}function j_(e,t){if(!t||t.startsWith("#")||Hy(t))return null;const[n]=t.split("#"),r=e.endsWith(".md")?e.split("/").slice(0,-1).join("/"):e,i=new URL(`https://docs.local/${r?`${r}/`:""}`);return new URL(n,i).pathname.replace(/^\/+/,"")}function F_(e){const t=e.split(`
`);let n=!1;return t.map(r=>/^\s*```/.test(r)?(n=!n,r):n?r:r.replace(/`([^`\n]+?\.md(?:#[^`\s]+)?)`/g,"[`$1`]($1)")).join(`
`)}function M_({open:e}){return O.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:O.jsx("path",{d:e?"M6 9l6 6 6-6":"M9 6l6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function B_(){return O.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:O.jsx("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}function U_(){return O.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[O.jsx("path",{d:"M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),O.jsx("path",{d:"M14 3v6h6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}function H_(){return O.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:O.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Vy({nodes:e,currentPath:t,ancestorPaths:n,expandedFolders:r,onNavigate:i,onToggleFolder:o,depth:l=0}){return O.jsx(L_,{children:e.map(a=>O.jsx(V_,{node:a,currentPath:t,ancestorPaths:n,expandedFolders:r,onNavigate:i,onToggleFolder:o,depth:l},a.path||"__root__"))})}function V_({node:e,currentPath:t,ancestorPaths:n,expandedFolders:r,onNavigate:i,onToggleFolder:o,depth:l}){var u,f;const a=e.kind==="folder"&&(((u=e.children)==null?void 0:u.length)??0)>0,s=n.has(e.path)||r.has(e.path);return O.jsxs(I_,{children:[O.jsxs(__,{$active:t===e.path,$depth:l,children:[e.kind==="folder"?O.jsx(T_,{type:"button","aria-label":s?`${e.name} 접기`:`${e.name} 펼치기`,onClick:()=>o(e.path),children:O.jsx(M_,{open:s})}):O.jsx("div",{style:{width:28}}),O.jsxs(A_,{type:"button",onClick:()=>i(e.path),children:[e.kind==="folder"?O.jsx(B_,{}):O.jsx(U_,{}),O.jsx(R_,{children:e.name})]}),e.kind==="folder"?O.jsx(fg,{children:((f=e.children)==null?void 0:f.length)??0}):O.jsx(fg,{children:".md"})]}),a&&s?O.jsx(Vy,{nodes:e.children??[],currentPath:t,ancestorPaths:n,expandedFolders:r,onNavigate:i,onToggleFolder:o,depth:l+1}):null]})}const Wy="/ingradient-docs/";async function W_(){const e=`${Wy}docs-data/tree.json`,t=await fetch(e);if(!t.ok)throw new Error("문서 트리를 불러오지 못했습니다.");return t.json()}async function G_(e){const t=await fetch(`${Wy}docs-data/content/${e}.json`);if(!t.ok)throw new Error("문서를 불러오지 못했습니다.");return t.json()}async function Q_(e,t){const n=await fetch(`/api/docs/content?path=${encodeURIComponent(e)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:t})});if(!n.ok){const r=await n.json().catch(()=>null);throw new Error((r==null?void 0:r.error)||"문서를 저장하지 못했습니다.")}return n.json()}function Y_(){const e=rk(),t=Av(),n=Oc(e["*"]),[r,i]=T.useState(null),[o,l]=T.useState(null),[a,s]=T.useState(!0),[u,f]=T.useState(""),[c,d]=T.useState(""),[p,g]=T.useState(null),[y,E]=T.useState(!1),[h,m]=T.useState(!1),[v,w]=T.useState(!1),[P,k]=T.useState(null),[b,z]=T.useState(new Set),A=T.useRef(null),$=T.useRef(null),I=T.useRef(null),N=T.useRef(null),V=T.useRef(!1);T.useEffect(()=>{let B=!0;return s(!0),l(null),W_().then(H=>{B&&i(H.root)}).catch(H=>{B&&l(H instanceof Error?H.message:"문서 트리를 불러오지 못했습니다.")}).finally(()=>{B&&s(!1)}),()=>{B=!1}},[]);const W=T.useMemo(()=>Uy(r,n),[r,n]),q=T.useMemo(()=>D_(n),[n]),fe=(W==null?void 0:W.kind)==="folder"?W.children??[]:[],ae=T.useMemo(()=>{const B=Oc(n),H=[{label:"docs",path:""}];if(!B)return H;const K=B.split("/");return K.forEach((_e,Te)=>{H.push({label:_e,path:K.slice(0,Te+1).join("/")})}),H},[n]),D=T.useCallback(B=>{t(B?`/${dg(B)}`:"/")},[t]);T.useEffect(()=>{z(B=>{const H=new Set(B);return q.forEach(K=>{K&&H.add(K)}),H})},[q]);const M=T.useCallback(B=>{z(H=>{const K=new Set(H);return K.has(B)?K.delete(B):K.add(B),K})},[]);T.useEffect(()=>{if((W==null?void 0:W.kind)!=="file"){f(""),d(""),g(null),E(!1),k(null),m(!1);return}let B=!0;return E(!0),g(null),m(!1),G_(W.path).then(H=>{B&&(f(H.content),d(H.content),k(H.updatedAt))}).catch(H=>{B&&g(H instanceof Error?H.message:"문서를 불러오지 못했습니다.")}).finally(()=>{B&&E(!1)}),()=>{B=!1}},[W]),T.useLayoutEffect(()=>{!h||!$.current||($.current.style.height="auto",$.current.style.height=`${$.current.scrollHeight}px`)},[c,h]);const x=T.useCallback(()=>{if(I.current!=null&&A.current&&(A.current.scrollTop=I.current),N.current!=null){const B=N.current;window.scrollTo({top:B,left:0,behavior:"auto"}),window.requestAnimationFrame(()=>{window.scrollTo({top:B,left:0,behavior:"auto"})})}},[]),Y=T.useCallback(()=>{V.current=!0},[]);T.useLayoutEffect(()=>{if(!V.current||y)return;V.current=!1;let B=0,H=0;const K=window.setTimeout(()=>{x()},120);return x(),B=window.requestAnimationFrame(()=>{x(),H=window.requestAnimationFrame(()=>{x()})}),()=>{window.cancelAnimationFrame(B),window.cancelAnimationFrame(H),window.clearTimeout(K)}},[h,u,n,y,x]),T.useEffect(()=>{!h||!$.current||($.current.focus({preventScroll:!0}),x())},[h,x]);const Q=T.useCallback(()=>{var B;I.current=((B=A.current)==null?void 0:B.scrollTop)??0,N.current=window.scrollY},[]);T.useCallback(()=>{Q(),Y(),d(u),m(!0)},[u,Q,Y]),T.useCallback(async()=>{if((W==null?void 0:W.kind)==="file"){Q(),Y(),w(!0),g(null);try{const B=await Q_(W.path,c);f(c),k(B.updatedAt),m(!1)}catch(B){g(B instanceof Error?B.message:"문서를 저장하지 못했습니다.")}finally{w(!1)}}},[W,c,Q,Y]),fe.filter(B=>B.kind==="folder").length,fe.filter(B=>B.kind==="file").length;const S=T.useMemo(()=>F_(u),[u]),pe=(W==null?void 0:W.kind)==="folder";return O.jsx(m_,{children:O.jsx(v_,{children:O.jsxs(y_,{$wide:pe,children:[O.jsx(x_,{elevation:"panel",children:O.jsx(w_,{children:O.jsxs(k_,{children:[O.jsx(Dy,{variant:"secondary","aria-label":"이전 화면으로 이동",onClick:()=>t(-1),children:O.jsx(H_,{})}),O.jsx(b_,{"aria-label":"Breadcrumb",children:O.jsx(S_,{children:ae.map((B,H)=>{const K=H===ae.length-1;return O.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8,minWidth:0},children:[O.jsx(C_,{type:"button",$active:K,onClick:()=>D(B.path),children:B.label}),K?null:O.jsx("span",{children:"/"})]},`${B.path}-${B.label}`)})})}),O.jsx("div",{style:{width:36,height:36}})]})})}),O.jsx(E_,{children:a?O.jsx(wl,{elevation:"panel",children:O.jsx(kl,{ref:A,children:O.jsxs(Vi,{gap:16,align:"center",justify:"center",style:{minHeight:420},children:[O.jsx(ug,{}),O.jsx(pu,{tone:"secondary",children:"문서 트리를 불러오는 중입니다."})]})})}):o?O.jsx(wl,{elevation:"panel",children:O.jsx(kl,{ref:A,children:O.jsx(Zi,{$tone:"danger",children:o})})}):W?W.kind==="folder"?O.jsx($_,{children:O.jsxs(Vi,{gap:18,children:[O.jsxs(z_,{children:[O.jsx(Vi,{gap:6,children:O.jsx(h_,{level:2,children:W.path?W.name:"docs"})}),O.jsxs(pu,{tone:"secondary",children:[fe.length," items"]})]}),fe.length>0?O.jsx(P_,{children:O.jsx(Vy,{nodes:fe,currentPath:n,ancestorPaths:q,expandedFolders:b,onNavigate:D,onToggleFolder:M})}):O.jsx(Zi,{$tone:"info",children:"이 폴더에는 아직 표시할 Markdown 문서가 없습니다."})]})}):O.jsx(wl,{elevation:"panel",children:O.jsx(kl,{ref:A,children:y?O.jsxs(Vi,{gap:16,align:"center",justify:"center",style:{minHeight:420},children:[O.jsx(ug,{}),O.jsx(pu,{tone:"secondary",children:"문서를 불러오는 중입니다."})]}):O.jsxs(Vi,{gap:16,children:[p?O.jsx(Zi,{$tone:"danger",children:p}):null,h?O.jsx(O_,{ref:$,value:c,onChange:B=>d(B.target.value),spellCheck:!1}):O.jsx(N_,{children:O.jsx(pz,{remarkPlugins:[$5],components:{a:({href:B="",children:H})=>{const K=j_(n,B);return K?O.jsx(Ik,{to:K?`/${dg(K)}`:"/",children:H}):O.jsx("a",{href:B,target:Hy(B)?"_blank":void 0,rel:"noreferrer",children:H})}},children:S})})]})})}):O.jsx(wl,{elevation:"panel",children:O.jsx(kl,{ref:A,children:O.jsx(Zi,{$tone:"danger",children:"요청한 경로를 찾을 수 없습니다."})})})})]})})})}function q_(){const e=$k;return O.jsxs(OI,{children:[O.jsx(DI,{}),O.jsx(e,{children:O.jsx(xk,{children:O.jsx(Dv,{path:"/*",element:O.jsx(Y_,{})})})})]})}hu.createRoot(document.getElementById("root")).render(O.jsx(Oe.StrictMode,{children:O.jsx(q_,{})}));
