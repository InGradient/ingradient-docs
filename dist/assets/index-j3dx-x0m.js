function Jy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var hg={exports:{}},Ta={},gg={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),Zy=Symbol.for("react.portal"),e0=Symbol.for("react.fragment"),t0=Symbol.for("react.strict_mode"),n0=Symbol.for("react.profiler"),r0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),o0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),a0=Symbol.for("react.memo"),s0=Symbol.for("react.lazy"),wd=Symbol.iterator;function u0(e){return e===null||typeof e!="object"?null:(e=wd&&e[wd]||e["@@iterator"],typeof e=="function"?e:null)}var mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vg=Object.assign,yg={};function bi(e,t,n){this.props=e,this.context=t,this.refs=yg,this.updater=n||mg}bi.prototype.isReactComponent={};bi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xg(){}xg.prototype=bi.prototype;function jc(e,t,n){this.props=e,this.context=t,this.refs=yg,this.updater=n||mg}var Fc=jc.prototype=new xg;Fc.constructor=jc;vg(Fc,bi.prototype);Fc.isPureReactComponent=!0;var kd=Array.isArray,wg=Object.prototype.hasOwnProperty,Mc={current:null},kg={key:!0,ref:!0,__self:!0,__source:!0};function bg(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)wg.call(t,r)&&!kg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vo,type:e,key:o,ref:l,props:i,_owner:Mc.current}}function c0(e,t){return{$$typeof:Vo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vo}function f0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bd=/\/+/g;function ps(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f0(""+e.key):t.toString(36)}function bl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vo:case Zy:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ps(l,0):r,kd(i)?(n="",e!=null&&(n=e.replace(bd,"$&/")+"/"),bl(i,t,n,"",function(u){return u})):i!=null&&(Bc(i)&&(i=c0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(bd,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",kd(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+ps(o,a);l+=bl(o,t,n,s,i)}else if(s=u0(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+ps(o,a++),l+=bl(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Zo(e,t,n){if(e==null)return e;var r=[],i=0;return bl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function d0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},Sl={transition:null},p0={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Mc};function Sg(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Zo,forEach:function(e,t,n){Zo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zo(e,function(){t++}),t},toArray:function(e){return Zo(e,function(t){return t})||[]},only:function(e){if(!Bc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=bi;ie.Fragment=e0;ie.Profiler=n0;ie.PureComponent=jc;ie.StrictMode=t0;ie.Suspense=l0;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0;ie.act=Sg;ie.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vg({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Mc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)wg.call(t,s)&&!kg.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vo,type:e.type,key:i,ref:o,props:r,_owner:l}};ie.createContext=function(e){return e={$$typeof:i0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r0,_context:e},e.Consumer=e};ie.createElement=bg;ie.createFactory=function(e){var t=bg.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:o0,render:e}};ie.isValidElement=Bc;ie.lazy=function(e){return{$$typeof:s0,_payload:{_status:-1,_result:e},_init:d0}};ie.memo=function(e,t){return{$$typeof:a0,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Sl.transition;Sl.transition={};try{e()}finally{Sl.transition=t}};ie.unstable_act=Sg;ie.useCallback=function(e,t){return it.current.useCallback(e,t)};ie.useContext=function(e){return it.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return it.current.useDeferredValue(e)};ie.useEffect=function(e,t){return it.current.useEffect(e,t)};ie.useId=function(){return it.current.useId()};ie.useImperativeHandle=function(e,t,n){return it.current.useImperativeHandle(e,t,n)};ie.useInsertionEffect=function(e,t){return it.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return it.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return it.current.useMemo(e,t)};ie.useReducer=function(e,t,n){return it.current.useReducer(e,t,n)};ie.useRef=function(e){return it.current.useRef(e)};ie.useState=function(e){return it.current.useState(e)};ie.useSyncExternalStore=function(e,t,n){return it.current.useSyncExternalStore(e,t,n)};ie.useTransition=function(){return it.current.useTransition()};ie.version="18.3.1";gg.exports=ie;var T=gg.exports;const Oe=Dc(T),h0=Jy({__proto__:null,default:Oe},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=T,m0=Symbol.for("react.element"),v0=Symbol.for("react.fragment"),y0=Object.prototype.hasOwnProperty,x0=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w0={key:!0,ref:!0,__self:!0,__source:!0};function Cg(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)y0.call(t,r)&&!w0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:m0,type:e,key:o,ref:l,props:i,_owner:x0.current}}Ta.Fragment=v0;Ta.jsx=Cg;Ta.jsxs=Cg;hg.exports=Ta;var A=hg.exports,pu={},Eg={exports:{}},Et={},$g={exports:{}},zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,B){var x=D.length;D.push(B);e:for(;0<x;){var Q=x-1>>>1,G=D[Q];if(0<i(G,B))D[Q]=B,D[x]=G,x=Q;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var B=D[0],x=D.pop();if(x!==B){D[0]=x;e:for(var Q=0,G=D.length,S=G>>>1;Q<S;){var ge=2*(Q+1)-1,_e=D[ge],ne=ge+1,M=D[ne];if(0>i(_e,x))ne<G&&0>i(M,_e)?(D[Q]=M,D[ne]=x,Q=ne):(D[Q]=_e,D[ge]=x,Q=ge);else if(ne<G&&0>i(M,x))D[Q]=M,D[ne]=x,Q=ne;else break e}}return B}function i(D,B){var x=D.sortIndex-B.sortIndex;return x!==0?x:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,c=null,d=3,p=!1,g=!1,y=!1,$=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=D)r(u),B.sortIndex=B.expirationTime,t(s,B);else break;B=n(u)}}function w(D){if(y=!1,v(D),!g)if(n(s)!==null)g=!0,de(P);else{var B=n(u);B!==null&&se(w,B.startTime-D)}}function P(D,B){g=!1,y&&(y=!1,h(z),z=-1),p=!0;var x=d;try{for(v(B),c=n(s);c!==null&&(!(c.expirationTime>B)||D&&!I());){var Q=c.callback;if(typeof Q=="function"){c.callback=null,d=c.priorityLevel;var G=Q(c.expirationTime<=B);B=e.unstable_now(),typeof G=="function"?c.callback=G:c===n(s)&&r(s),v(B)}else r(s);c=n(s)}if(c!==null)var S=!0;else{var ge=n(u);ge!==null&&se(w,ge.startTime-B),S=!1}return S}finally{c=null,d=x,p=!1}}var k=!1,b=null,z=-1,R=5,E=-1;function I(){return!(e.unstable_now()-E<R)}function O(){if(b!==null){var D=e.unstable_now();E=D;var B=!0;try{B=b(!0,D)}finally{B?V():(k=!1,b=null)}}else k=!1}var V;if(typeof m=="function")V=function(){m(O)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,Y=H.port2;H.port1.onmessage=O,V=function(){Y.postMessage(null)}}else V=function(){$(O,0)};function de(D){b=D,k||(k=!0,V())}function se(D,B){z=$(function(){D(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){g||p||(g=!0,de(P))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(D){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var x=d;d=B;try{return D()}finally{d=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var x=d;d=D;try{return B()}finally{d=x}},e.unstable_scheduleCallback=function(D,B,x){var Q=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?Q+x:Q):x=Q,D){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=x+G,D={id:f++,callback:B,priorityLevel:D,startTime:x,expirationTime:G,sortIndex:-1},x>Q?(D.sortIndex=x,t(u,D),n(s)===null&&D===n(u)&&(y?(h(z),z=-1):y=!0,se(w,x-Q))):(D.sortIndex=G,t(s,D),g||p||(g=!0,de(P))),D},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(D){var B=d;return function(){var x=d;d=B;try{return D.apply(this,arguments)}finally{d=x}}}})(zg);$g.exports=zg;var k0=$g.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0=T,Ct=k0;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,yo={};function _r(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(yo[e]=t,e=0;e<t.length;e++)Pg.add(t[e])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=Object.prototype.hasOwnProperty,S0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sd={},Cd={};function C0(e){return hu.call(Cd,e)?!0:hu.call(Sd,e)?!1:S0.test(e)?Cd[e]=!0:(Sd[e]=!0,!1)}function E0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $0(e,t,n,r){if(t===null||typeof t>"u"||E0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ot(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ye[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ye[t]=new ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ye[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ye[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ye[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ye[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uc=/[\-:]([a-z])/g;function Hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uc,Hc);Ye[t]=new ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uc,Hc);Ye[t]=new ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uc,Hc);Ye[t]=new ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ye[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vc(e,t,n,r){var i=Ye.hasOwnProperty(t)?Ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($0(t,n,i,r)&&(n=null),r||i===null?C0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Sn=b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),_g=Symbol.for("react.context"),Gc=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),Qc=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),Ed=Symbol.iterator;function Li(e){return e===null||typeof e!="object"?null:(e=Ed&&e[Ed]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,hs;function Wi(e){if(hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hs=t&&t[1]||""}return`
`+hs+e}var gs=!1;function ms(e,t){if(!e||gs)return"";gs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{gs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wi(e):""}function z0(e){switch(e.tag){case 5:return Wi(e.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return e=ms(e.type,!1),e;case 11:return e=ms(e.type.render,!1),e;case 1:return e=ms(e.type,!0),e;default:return""}}function yu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case Mr:return"Portal";case gu:return"Profiler";case Wc:return"StrictMode";case mu:return"Suspense";case vu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _g:return(e.displayName||"Context")+".Consumer";case Ig:return(e._context.displayName||"Context")+".Provider";case Gc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qc:return t=e.displayName||null,t!==null?t:yu(e.type)||"Memo";case In:t=e._payload,e=e._init;try{return yu(e(t))}catch{}}return null}function P0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(t);case 8:return t===Wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ag(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I0(e){var t=Ag(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tl(e){e._valueTracker||(e._valueTracker=I0(e))}function Rg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ag(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ql(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xu(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $d(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lg(e,t){t=t.checked,t!=null&&Vc(e,"checked",t,!1)}function wu(e,t){Lg(e,t);var n=Yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ku(e,t.type,n):t.hasOwnProperty("defaultValue")&&ku(e,t.type,Yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ku(e,t,n){(t!=="number"||Ql(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gi=Array.isArray;function Jr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Gi(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yn(n)}}function Ng(e,t){var n=Yn(t.value),r=Yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Id(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Og(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Og(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nl,Dg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_0=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){_0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function jg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function Fg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var T0=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(e,t){if(t){if(T0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Eu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zu=null,Zr=null,ei=null;function _d(e){if(e=Qo(e)){if(typeof zu!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Oa(t),zu(e.stateNode,e.type,t))}}function Mg(e){Zr?ei?ei.push(e):ei=[e]:Zr=e}function Bg(){if(Zr){var e=Zr,t=ei;if(ei=Zr=null,_d(e),t)for(e=0;e<t.length;e++)_d(t[e])}}function Ug(e,t){return e(t)}function Hg(){}var vs=!1;function Vg(e,t,n){if(vs)return e(t,n);vs=!0;try{return Ug(e,t,n)}finally{vs=!1,(Zr!==null||ei!==null)&&(Hg(),Bg())}}function wo(e,t){var n=e.stateNode;if(n===null)return null;var r=Oa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Pu=!1;if(xn)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Pu=!1}function A0(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var to=!1,Yl=null,ql=!1,Iu=null,R0={onError:function(e){to=!0,Yl=e}};function L0(e,t,n,r,i,o,l,a,s){to=!1,Yl=null,A0.apply(R0,arguments)}function N0(e,t,n,r,i,o,l,a,s){if(L0.apply(this,arguments),to){if(to){var u=Yl;to=!1,Yl=null}else throw Error(L(198));ql||(ql=!0,Iu=u)}}function Tr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Td(e){if(Tr(e)!==e)throw Error(L(188))}function O0(e){var t=e.alternate;if(!t){if(t=Tr(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Td(i),e;if(o===r)return Td(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function Gg(e){return e=O0(e),e!==null?Qg(e):null}function Qg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qg(e);if(t!==null)return t;e=e.sibling}return null}var Yg=Ct.unstable_scheduleCallback,Ad=Ct.unstable_cancelCallback,D0=Ct.unstable_shouldYield,j0=Ct.unstable_requestPaint,Te=Ct.unstable_now,F0=Ct.unstable_getCurrentPriorityLevel,qc=Ct.unstable_ImmediatePriority,qg=Ct.unstable_UserBlockingPriority,Kl=Ct.unstable_NormalPriority,M0=Ct.unstable_LowPriority,Kg=Ct.unstable_IdlePriority,Aa=null,nn=null;function B0(e){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Aa,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:V0,U0=Math.log,H0=Math.LN2;function V0(e){return e>>>=0,e===0?32:31-(U0(e)/H0|0)|0}var rl=64,il=4194304;function Qi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Qi(a):(o&=l,o!==0&&(r=Qi(o)))}else l=n&~i,l!==0?r=Qi(l):o!==0&&(r=Qi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),i=1<<n,r|=e[n],t&=~i;return r}function W0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Gt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=W0(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function _u(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xg(){var e=rl;return rl<<=1,!(rl&4194240)&&(rl=64),e}function ys(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function Q0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Gt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Kc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var pe=0;function Jg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zg,Xc,em,tm,nm,Tu=!1,ol=[],jn=null,Fn=null,Mn=null,ko=new Map,bo=new Map,Tn=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rd(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(t.pointerId)}}function Oi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Qo(t),t!==null&&Xc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function q0(e,t,n,r,i){switch(t){case"focusin":return jn=Oi(jn,e,t,n,r,i),!0;case"dragenter":return Fn=Oi(Fn,e,t,n,r,i),!0;case"mouseover":return Mn=Oi(Mn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ko.set(o,Oi(ko.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,bo.set(o,Oi(bo.get(o)||null,e,t,n,r,i)),!0}return!1}function rm(e){var t=cr(e.target);if(t!==null){var n=Tr(t);if(n!==null){if(t=n.tag,t===13){if(t=Wg(n),t!==null){e.blockedOn=t,nm(e.priority,function(){em(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Au(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$u=r,n.target.dispatchEvent(r),$u=null}else return t=Qo(n),t!==null&&Xc(t),e.blockedOn=n,!1;t.shift()}return!0}function Ld(e,t,n){Cl(e)&&n.delete(t)}function K0(){Tu=!1,jn!==null&&Cl(jn)&&(jn=null),Fn!==null&&Cl(Fn)&&(Fn=null),Mn!==null&&Cl(Mn)&&(Mn=null),ko.forEach(Ld),bo.forEach(Ld)}function Di(e,t){e.blockedOn===t&&(e.blockedOn=null,Tu||(Tu=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,K0)))}function So(e){function t(i){return Di(i,e)}if(0<ol.length){Di(ol[0],e);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&Di(jn,e),Fn!==null&&Di(Fn,e),Mn!==null&&Di(Mn,e),ko.forEach(t),bo.forEach(t),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)rm(n),n.blockedOn===null&&Tn.shift()}var ti=Sn.ReactCurrentBatchConfig,Jl=!0;function X0(e,t,n,r){var i=pe,o=ti.transition;ti.transition=null;try{pe=1,Jc(e,t,n,r)}finally{pe=i,ti.transition=o}}function J0(e,t,n,r){var i=pe,o=ti.transition;ti.transition=null;try{pe=4,Jc(e,t,n,r)}finally{pe=i,ti.transition=o}}function Jc(e,t,n,r){if(Jl){var i=Au(e,t,n,r);if(i===null)Ps(e,t,r,Zl,n),Rd(e,r);else if(q0(i,e,t,n,r))r.stopPropagation();else if(Rd(e,r),t&4&&-1<Y0.indexOf(e)){for(;i!==null;){var o=Qo(i);if(o!==null&&Zg(o),o=Au(e,t,n,r),o===null&&Ps(e,t,r,Zl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ps(e,t,r,null,n)}}var Zl=null;function Au(e,t,n,r){if(Zl=null,e=Yc(r),e=cr(e),e!==null)if(t=Tr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zl=e,null}function im(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F0()){case qc:return 1;case qg:return 4;case Kl:case M0:return 16;case Kg:return 536870912;default:return 16}default:return 16}}var Rn=null,Zc=null,El=null;function om(){if(El)return El;var e,t=Zc,n=t.length,r,i="value"in Rn?Rn.value:Rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return El=i.slice(e,1<r?1-r:void 0)}function $l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function Nd(){return!1}function $t(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ll:Nd,this.isPropagationStopped=Nd,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),t}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=$t(Si),Go=Pe({},Si,{view:0,detail:0}),Z0=$t(Go),xs,ws,ji,Ra=Pe({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(xs=e.screenX-ji.screenX,ws=e.screenY-ji.screenY):ws=xs=0,ji=e),xs)},movementY:function(e){return"movementY"in e?e.movementY:ws}}),Od=$t(Ra),ex=Pe({},Ra,{dataTransfer:0}),tx=$t(ex),nx=Pe({},Go,{relatedTarget:0}),ks=$t(nx),rx=Pe({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=$t(rx),ox=Pe({},Si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lx=$t(ox),ax=Pe({},Si,{data:0}),Dd=$t(ax),sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cx[e])?!!t[e]:!1}function tf(){return fx}var dx=Pe({},Go,{key:function(e){if(e.key){var t=sx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),px=$t(dx),hx=Pe({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=$t(hx),gx=Pe({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),mx=$t(gx),vx=Pe({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),yx=$t(vx),xx=Pe({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wx=$t(xx),kx=[9,13,27,32],nf=xn&&"CompositionEvent"in window,no=null;xn&&"documentMode"in document&&(no=document.documentMode);var bx=xn&&"TextEvent"in window&&!no,lm=xn&&(!nf||no&&8<no&&11>=no),Fd=" ",Md=!1;function am(e,t){switch(e){case"keyup":return kx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function Sx(e,t){switch(e){case"compositionend":return sm(t);case"keypress":return t.which!==32?null:(Md=!0,Fd);case"textInput":return e=t.data,e===Fd&&Md?null:e;default:return null}}function Cx(e,t){if(Ur)return e==="compositionend"||!nf&&am(e,t)?(e=om(),El=Zc=Rn=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lm&&t.locale!=="ko"?null:t.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ex[e.type]:t==="textarea"}function um(e,t,n,r){Mg(r),t=ea(t,"onChange"),0<t.length&&(n=new ef("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ro=null,Co=null;function $x(e){wm(e,0)}function La(e){var t=Wr(e);if(Rg(t))return e}function zx(e,t){if(e==="change")return t}var cm=!1;if(xn){var bs;if(xn){var Ss="oninput"in document;if(!Ss){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),Ss=typeof Ud.oninput=="function"}bs=Ss}else bs=!1;cm=bs&&(!document.documentMode||9<document.documentMode)}function Hd(){ro&&(ro.detachEvent("onpropertychange",fm),Co=ro=null)}function fm(e){if(e.propertyName==="value"&&La(Co)){var t=[];um(t,Co,e,Yc(e)),Vg($x,t)}}function Px(e,t,n){e==="focusin"?(Hd(),ro=t,Co=n,ro.attachEvent("onpropertychange",fm)):e==="focusout"&&Hd()}function Ix(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return La(Co)}function _x(e,t){if(e==="click")return La(t)}function Tx(e,t){if(e==="input"||e==="change")return La(t)}function Ax(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xt=typeof Object.is=="function"?Object.is:Ax;function Eo(e,t){if(Xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hu.call(t,i)||!Xt(e[i],t[i]))return!1}return!0}function Vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wd(e,t){var n=Vd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vd(n)}}function dm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pm(){for(var e=window,t=Ql();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ql(e.document)}return t}function rf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rx(e){var t=pm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dm(n.ownerDocument.documentElement,n)){if(r!==null&&rf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Wd(n,o);var l=Wd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lx=xn&&"documentMode"in document&&11>=document.documentMode,Hr=null,Ru=null,io=null,Lu=!1;function Gd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lu||Hr==null||Hr!==Ql(r)||(r=Hr,"selectionStart"in r&&rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&Eo(io,r)||(io=r,r=ea(Ru,"onSelect"),0<r.length&&(t=new ef("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function al(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Cs={},hm={};xn&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function Na(e){if(Cs[e])return Cs[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hm)return Cs[e]=t[n];return e}var gm=Na("animationend"),mm=Na("animationiteration"),vm=Na("animationstart"),ym=Na("transitionend"),xm=new Map,Qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){xm.set(e,t),_r(t,[e])}for(var Es=0;Es<Qd.length;Es++){var $s=Qd[Es],Nx=$s.toLowerCase(),Ox=$s[0].toUpperCase()+$s.slice(1);Kn(Nx,"on"+Ox)}Kn(gm,"onAnimationEnd");Kn(mm,"onAnimationIteration");Kn(vm,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(ym,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));function Yd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,N0(r,t,void 0,e),e.currentTarget=null}function wm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Yd(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Yd(i,a,u),o=s}}}if(ql)throw e=Iu,ql=!1,Iu=null,e}function we(e,t){var n=t[Fu];n===void 0&&(n=t[Fu]=new Set);var r=e+"__bubble";n.has(r)||(km(t,e,2,!1),n.add(r))}function zs(e,t,n){var r=0;t&&(r|=4),km(n,e,r,t)}var sl="_reactListening"+Math.random().toString(36).slice(2);function $o(e){if(!e[sl]){e[sl]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(Dx.has(n)||zs(n,!1,e),zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sl]||(t[sl]=!0,zs("selectionchange",!1,t))}}function km(e,t,n,r){switch(im(t)){case 1:var i=X0;break;case 4:i=J0;break;default:i=Jc}n=i.bind(null,t,n,e),i=void 0,!Pu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ps(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=cr(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Vg(function(){var u=o,f=Yc(n),c=[];e:{var d=xm.get(e);if(d!==void 0){var p=ef,g=e;switch(e){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":p=px;break;case"focusin":g="focus",p=ks;break;case"focusout":g="blur",p=ks;break;case"beforeblur":case"afterblur":p=ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Od;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=mx;break;case gm:case mm:case vm:p=ix;break;case ym:p=yx;break;case"scroll":p=Z0;break;case"wheel":p=wx;break;case"copy":case"cut":case"paste":p=lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jd}var y=(t&4)!==0,$=!y&&e==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var m=u,v;m!==null;){v=m;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,h!==null&&(w=wo(m,h),w!=null&&y.push(zo(m,w,v)))),$)break;m=m.return}0<y.length&&(d=new p(d,g,null,n,f),c.push({event:d,listeners:y}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==$u&&(g=n.relatedTarget||n.fromElement)&&(cr(g)||g[wn]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?cr(g):null,g!==null&&($=Tr(g),g!==$||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Od,w="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=jd,w="onPointerLeave",h="onPointerEnter",m="pointer"),$=p==null?d:Wr(p),v=g==null?d:Wr(g),d=new y(w,m+"leave",p,n,f),d.target=$,d.relatedTarget=v,w=null,cr(f)===u&&(y=new y(h,m+"enter",g,n,f),y.target=v,y.relatedTarget=$,w=y),$=w,p&&g)t:{for(y=p,h=g,m=0,v=y;v;v=Nr(v))m++;for(v=0,w=h;w;w=Nr(w))v++;for(;0<m-v;)y=Nr(y),m--;for(;0<v-m;)h=Nr(h),v--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=Nr(y),h=Nr(h)}y=null}else y=null;p!==null&&qd(c,d,p,y,!1),g!==null&&$!==null&&qd(c,$,g,y,!0)}}e:{if(d=u?Wr(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var P=zx;else if(Bd(d))if(cm)P=Tx;else{P=Ix;var k=Px}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=_x);if(P&&(P=P(e,u))){um(c,P,n,f);break e}k&&k(e,d,u),e==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&ku(d,"number",d.value)}switch(k=u?Wr(u):window,e){case"focusin":(Bd(k)||k.contentEditable==="true")&&(Hr=k,Ru=u,io=null);break;case"focusout":io=Ru=Hr=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Gd(c,n,f);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":Gd(c,n,f)}var b;if(nf)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Ur?am(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(lm&&n.locale!=="ko"&&(Ur||z!=="onCompositionStart"?z==="onCompositionEnd"&&Ur&&(b=om()):(Rn=f,Zc="value"in Rn?Rn.value:Rn.textContent,Ur=!0)),k=ea(u,z),0<k.length&&(z=new Dd(z,e,null,n,f),c.push({event:z,listeners:k}),b?z.data=b:(b=sm(n),b!==null&&(z.data=b)))),(b=bx?Sx(e,n):Cx(e,n))&&(u=ea(u,"onBeforeInput"),0<u.length&&(f=new Dd("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=b))}wm(c,t)})}function zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wo(e,n),o!=null&&r.unshift(zo(e,o,i)),o=wo(e,t),o!=null&&r.push(zo(e,o,i))),e=e.return}return r}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=wo(n,o),s!=null&&l.unshift(zo(n,s,a))):i||(s=wo(n,o),s!=null&&l.push(zo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var jx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function Kd(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Fx,"")}function ul(e,t,n){if(t=Kd(t),Kd(e)!==t&&n)throw Error(L(425))}function ta(){}var Nu=null,Ou=null;function Du(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,Mx=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,Bx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(e){return Xd.resolve(null).then(e).catch(Ux)}:ju;function Ux(e){setTimeout(function(){throw e})}function Is(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),So(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),tn="__reactFiber$"+Ci,Po="__reactProps$"+Ci,wn="__reactContainer$"+Ci,Fu="__reactEvents$"+Ci,Hx="__reactListeners$"+Ci,Vx="__reactHandles$"+Ci;function cr(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wn]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jd(e);e!==null;){if(n=e[tn])return n;e=Jd(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){return e=e[tn]||e[wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Oa(e){return e[Po]||null}var Mu=[],Gr=-1;function Xn(e){return{current:e}}function Se(e){0>Gr||(e.current=Mu[Gr],Mu[Gr]=null,Gr--)}function xe(e,t){Gr++,Mu[Gr]=e.current,e.current=t}var qn={},Ze=Xn(qn),dt=Xn(!1),yr=qn;function ai(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pt(e){return e=e.childContextTypes,e!=null}function na(){Se(dt),Se(Ze)}function Zd(e,t,n){if(Ze.current!==qn)throw Error(L(168));xe(Ze,t),xe(dt,n)}function bm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,P0(e)||"Unknown",i));return Pe({},n,r)}function ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,yr=Ze.current,xe(Ze,e),xe(dt,dt.current),!0}function ep(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=bm(e,t,yr),r.__reactInternalMemoizedMergedChildContext=e,Se(dt),Se(Ze),xe(Ze,e)):Se(dt),xe(dt,n)}var gn=null,Da=!1,_s=!1;function Sm(e){gn===null?gn=[e]:gn.push(e)}function Wx(e){Da=!0,Sm(e)}function Jn(){if(!_s&&gn!==null){_s=!0;var e=0,t=pe;try{var n=gn;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gn=null,Da=!1}catch(i){throw gn!==null&&(gn=gn.slice(e+1)),Yg(qc,Jn),i}finally{pe=t,_s=!1}}return null}var Qr=[],Yr=0,ia=null,oa=0,Pt=[],It=0,xr=null,mn=1,vn="";function rr(e,t){Qr[Yr++]=oa,Qr[Yr++]=ia,ia=e,oa=t}function Cm(e,t,n){Pt[It++]=mn,Pt[It++]=vn,Pt[It++]=xr,xr=e;var r=mn;e=vn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var o=32-Gt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,mn=1<<32-Gt(t)+i|n<<i|r,vn=o+e}else mn=1<<o|n<<i|r,vn=e}function of(e){e.return!==null&&(rr(e,1),Cm(e,1,0))}function lf(e){for(;e===ia;)ia=Qr[--Yr],Qr[Yr]=null,oa=Qr[--Yr],Qr[Yr]=null;for(;e===xr;)xr=Pt[--It],Pt[It]=null,vn=Pt[--It],Pt[It]=null,mn=Pt[--It],Pt[It]=null}var bt=null,kt=null,Ee=!1,Vt=null;function Em(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,kt=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xr!==null?{id:mn,overflow:vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,bt=e,kt=null,!0):!1;default:return!1}}function Bu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Uu(e){if(Ee){var t=kt;if(t){var n=t;if(!tp(e,t)){if(Bu(e))throw Error(L(418));t=Bn(n.nextSibling);var r=bt;t&&tp(e,t)?Em(r,n):(e.flags=e.flags&-4097|2,Ee=!1,bt=e)}}else{if(Bu(e))throw Error(L(418));e.flags=e.flags&-4097|2,Ee=!1,bt=e}}}function np(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function cl(e){if(e!==bt)return!1;if(!Ee)return np(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Du(e.type,e.memoizedProps)),t&&(t=kt)){if(Bu(e))throw $m(),Error(L(418));for(;t;)Em(e,t),t=Bn(t.nextSibling)}if(np(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){kt=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=bt?Bn(e.stateNode.nextSibling):null;return!0}function $m(){for(var e=kt;e;)e=Bn(e.nextSibling)}function si(){kt=bt=null,Ee=!1}function af(e){Vt===null?Vt=[e]:Vt.push(e)}var Gx=Sn.ReactCurrentBatchConfig;function Fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function fl(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rp(e){var t=e._init;return t(e._payload)}function zm(e){function t(h,m){if(e){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function i(h,m){return h=Wn(h,m),h.index=0,h.sibling=null,h}function o(h,m,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,m,v,w){return m===null||m.tag!==6?(m=Ds(v,h.mode,w),m.return=h,m):(m=i(m,v),m.return=h,m)}function s(h,m,v,w){var P=v.type;return P===Br?f(h,m,v.props.children,w,v.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===In&&rp(P)===m.type)?(w=i(m,v.props),w.ref=Fi(h,m,v),w.return=h,w):(w=Rl(v.type,v.key,v.props,null,h.mode,w),w.ref=Fi(h,m,v),w.return=h,w)}function u(h,m,v,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=js(v,h.mode,w),m.return=h,m):(m=i(m,v.children||[]),m.return=h,m)}function f(h,m,v,w,P){return m===null||m.tag!==7?(m=mr(v,h.mode,w,P),m.return=h,m):(m=i(m,v),m.return=h,m)}function c(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ds(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case el:return v=Rl(m.type,m.key,m.props,null,h.mode,v),v.ref=Fi(h,null,m),v.return=h,v;case Mr:return m=js(m,h.mode,v),m.return=h,m;case In:var w=m._init;return c(h,w(m._payload),v)}if(Gi(m)||Li(m))return m=mr(m,h.mode,v,null),m.return=h,m;fl(h,m)}return null}function d(h,m,v,w){var P=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(h,m,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case el:return v.key===P?s(h,m,v,w):null;case Mr:return v.key===P?u(h,m,v,w):null;case In:return P=v._init,d(h,m,P(v._payload),w)}if(Gi(v)||Li(v))return P!==null?null:f(h,m,v,w,null);fl(h,v)}return null}function p(h,m,v,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(v)||null,a(m,h,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case el:return h=h.get(w.key===null?v:w.key)||null,s(m,h,w,P);case Mr:return h=h.get(w.key===null?v:w.key)||null,u(m,h,w,P);case In:var k=w._init;return p(h,m,v,k(w._payload),P)}if(Gi(w)||Li(w))return h=h.get(v)||null,f(m,h,w,P,null);fl(m,w)}return null}function g(h,m,v,w){for(var P=null,k=null,b=m,z=m=0,R=null;b!==null&&z<v.length;z++){b.index>z?(R=b,b=null):R=b.sibling;var E=d(h,b,v[z],w);if(E===null){b===null&&(b=R);break}e&&b&&E.alternate===null&&t(h,b),m=o(E,m,z),k===null?P=E:k.sibling=E,k=E,b=R}if(z===v.length)return n(h,b),Ee&&rr(h,z),P;if(b===null){for(;z<v.length;z++)b=c(h,v[z],w),b!==null&&(m=o(b,m,z),k===null?P=b:k.sibling=b,k=b);return Ee&&rr(h,z),P}for(b=r(h,b);z<v.length;z++)R=p(b,h,z,v[z],w),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?z:R.key),m=o(R,m,z),k===null?P=R:k.sibling=R,k=R);return e&&b.forEach(function(I){return t(h,I)}),Ee&&rr(h,z),P}function y(h,m,v,w){var P=Li(v);if(typeof P!="function")throw Error(L(150));if(v=P.call(v),v==null)throw Error(L(151));for(var k=P=null,b=m,z=m=0,R=null,E=v.next();b!==null&&!E.done;z++,E=v.next()){b.index>z?(R=b,b=null):R=b.sibling;var I=d(h,b,E.value,w);if(I===null){b===null&&(b=R);break}e&&b&&I.alternate===null&&t(h,b),m=o(I,m,z),k===null?P=I:k.sibling=I,k=I,b=R}if(E.done)return n(h,b),Ee&&rr(h,z),P;if(b===null){for(;!E.done;z++,E=v.next())E=c(h,E.value,w),E!==null&&(m=o(E,m,z),k===null?P=E:k.sibling=E,k=E);return Ee&&rr(h,z),P}for(b=r(h,b);!E.done;z++,E=v.next())E=p(b,h,z,E.value,w),E!==null&&(e&&E.alternate!==null&&b.delete(E.key===null?z:E.key),m=o(E,m,z),k===null?P=E:k.sibling=E,k=E);return e&&b.forEach(function(O){return t(h,O)}),Ee&&rr(h,z),P}function $(h,m,v,w){if(typeof v=="object"&&v!==null&&v.type===Br&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case el:e:{for(var P=v.key,k=m;k!==null;){if(k.key===P){if(P=v.type,P===Br){if(k.tag===7){n(h,k.sibling),m=i(k,v.props.children),m.return=h,h=m;break e}}else if(k.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===In&&rp(P)===k.type){n(h,k.sibling),m=i(k,v.props),m.ref=Fi(h,k,v),m.return=h,h=m;break e}n(h,k);break}else t(h,k);k=k.sibling}v.type===Br?(m=mr(v.props.children,h.mode,w,v.key),m.return=h,h=m):(w=Rl(v.type,v.key,v.props,null,h.mode,w),w.ref=Fi(h,m,v),w.return=h,h=w)}return l(h);case Mr:e:{for(k=v.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=i(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=js(v,h.mode,w),m.return=h,h=m}return l(h);case In:return k=v._init,$(h,m,k(v._payload),w)}if(Gi(v))return g(h,m,v,w);if(Li(v))return y(h,m,v,w);fl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=i(m,v),m.return=h,h=m):(n(h,m),m=Ds(v,h.mode,w),m.return=h,h=m),l(h)):n(h,m)}return $}var ui=zm(!0),Pm=zm(!1),la=Xn(null),aa=null,qr=null,sf=null;function uf(){sf=qr=aa=null}function cf(e){var t=la.current;Se(la),e._currentValue=t}function Hu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ni(e,t){aa=e,sf=qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ct=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(sf!==e)if(e={context:e,memoizedValue:t,next:null},qr===null){if(aa===null)throw Error(L(308));qr=e,aa.dependencies={lanes:0,firstContext:e}}else qr=qr.next=e;return t}var fr=null;function ff(e){fr===null?fr=[e]:fr.push(e)}function Im(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ff(t)):(n.next=i.next,i.next=n),t.interleaved=n,kn(e,r)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _n=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _m(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,kn(e,n)}return i=r.interleaved,i===null?(t.next=t,ff(r)):(t.next=i.next,i.next=t),r.interleaved=t,kn(e,n)}function zl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kc(e,n)}}function ip(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function sa(e,t,n,r){var i=e.updateQueue;_n=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,f=u=s=null,a=o;do{var d=a.lane,p=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,y=a;switch(d=t,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){c=g.call(p,c,d);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,c,d):g,d==null)break e;c=Pe({},c,d);break e;case 2:_n=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,s=c):f=f.next=p,l|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);kr|=l,e.lanes=l,e.memoizedState=c}}function op(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Yo={},rn=Xn(Yo),Io=Xn(Yo),_o=Xn(Yo);function dr(e){if(e===Yo)throw Error(L(174));return e}function pf(e,t){switch(xe(_o,t),xe(Io,e),xe(rn,Yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Su(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Su(t,e)}Se(rn),xe(rn,t)}function ci(){Se(rn),Se(Io),Se(_o)}function Tm(e){dr(_o.current);var t=dr(rn.current),n=Su(t,e.type);t!==n&&(xe(Io,e),xe(rn,n))}function hf(e){Io.current===e&&(Se(rn),Se(Io))}var $e=Xn(0);function ua(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ts=[];function gf(){for(var e=0;e<Ts.length;e++)Ts[e]._workInProgressVersionPrimary=null;Ts.length=0}var Pl=Sn.ReactCurrentDispatcher,As=Sn.ReactCurrentBatchConfig,wr=0,ze=null,je=null,Ue=null,ca=!1,oo=!1,To=0,Qx=0;function qe(){throw Error(L(321))}function mf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xt(e[n],t[n]))return!1;return!0}function vf(e,t,n,r,i,o){if(wr=o,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pl.current=e===null||e.memoizedState===null?Xx:Jx,e=n(r,i),oo){o=0;do{if(oo=!1,To=0,25<=o)throw Error(L(301));o+=1,Ue=je=null,t.updateQueue=null,Pl.current=Zx,e=n(r,i)}while(oo)}if(Pl.current=fa,t=je!==null&&je.next!==null,wr=0,Ue=je=ze=null,ca=!1,t)throw Error(L(300));return e}function yf(){var e=To!==0;return To=0,e}function Zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ze.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Lt(){if(je===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Ue===null?ze.memoizedState:Ue.next;if(t!==null)Ue=t,je=e;else{if(e===null)throw Error(L(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ue===null?ze.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ao(e,t){return typeof t=="function"?t(e):t}function Rs(e){var t=Lt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=je,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var f=u.lane;if((wr&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,ze.lanes|=f,kr|=f}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,Xt(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ze.lanes|=o,kr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ls(e){var t=Lt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Xt(o,t.memoizedState)||(ct=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Am(){}function Rm(e,t){var n=ze,r=Lt(),i=t(),o=!Xt(r.memoizedState,i);if(o&&(r.memoizedState=i,ct=!0),r=r.queue,xf(Om.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ro(9,Nm.bind(null,n,r,i,t),void 0,null),Ve===null)throw Error(L(349));wr&30||Lm(n,t,i)}return i}function Lm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nm(e,t,n,r){t.value=n,t.getSnapshot=r,Dm(t)&&jm(e)}function Om(e,t,n){return n(function(){Dm(t)&&jm(e)})}function Dm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xt(e,n)}catch{return!0}}function jm(e){var t=kn(e,1);t!==null&&Qt(t,e,1,-1)}function lp(e){var t=Zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:e},t.queue=e,e=e.dispatch=Kx.bind(null,ze,e),[t.memoizedState,e]}function Ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fm(){return Lt().memoizedState}function Il(e,t,n,r){var i=Zt();ze.flags|=e,i.memoizedState=Ro(1|t,n,void 0,r===void 0?null:r)}function ja(e,t,n,r){var i=Lt();r=r===void 0?null:r;var o=void 0;if(je!==null){var l=je.memoizedState;if(o=l.destroy,r!==null&&mf(r,l.deps)){i.memoizedState=Ro(t,n,o,r);return}}ze.flags|=e,i.memoizedState=Ro(1|t,n,o,r)}function ap(e,t){return Il(8390656,8,e,t)}function xf(e,t){return ja(2048,8,e,t)}function Mm(e,t){return ja(4,2,e,t)}function Bm(e,t){return ja(4,4,e,t)}function Um(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hm(e,t,n){return n=n!=null?n.concat([e]):null,ja(4,4,Um.bind(null,t,e),n)}function wf(){}function Vm(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wm(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gm(e,t,n){return wr&21?(Xt(n,t)||(n=Xg(),ze.lanes|=n,kr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=n)}function Yx(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=As.transition;As.transition={};try{e(!1),t()}finally{pe=n,As.transition=r}}function Qm(){return Lt().memoizedState}function qx(e,t,n){var r=Vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ym(e))qm(t,n);else if(n=Im(e,t,n,r),n!==null){var i=rt();Qt(n,e,r,i),Km(n,t,r)}}function Kx(e,t,n){var r=Vn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ym(e))qm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Xt(a,l)){var s=t.interleaved;s===null?(i.next=i,ff(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Im(e,t,i,r),n!==null&&(i=rt(),Qt(n,e,r,i),Km(n,t,r))}}function Ym(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function qm(e,t){oo=ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Km(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Kc(e,n)}}var fa={readContext:Rt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Xx={readContext:Rt,useCallback:function(e,t){return Zt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:ap,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Il(4194308,4,Um.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Il(4194308,4,e,t)},useInsertionEffect:function(e,t){return Il(4,2,e,t)},useMemo:function(e,t){var n=Zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qx.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=Zt();return e={current:e},t.memoizedState=e},useState:lp,useDebugValue:wf,useDeferredValue:function(e){return Zt().memoizedState=e},useTransition:function(){var e=lp(!1),t=e[0];return e=Yx.bind(null,e[1]),Zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ze,i=Zt();if(Ee){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ve===null)throw Error(L(349));wr&30||Lm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ap(Om.bind(null,r,o,e),[e]),r.flags|=2048,Ro(9,Nm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Zt(),t=Ve.identifierPrefix;if(Ee){var n=vn,r=mn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=To++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jx={readContext:Rt,useCallback:Vm,useContext:Rt,useEffect:xf,useImperativeHandle:Hm,useInsertionEffect:Mm,useLayoutEffect:Bm,useMemo:Wm,useReducer:Rs,useRef:Fm,useState:function(){return Rs(Ao)},useDebugValue:wf,useDeferredValue:function(e){var t=Lt();return Gm(t,je.memoizedState,e)},useTransition:function(){var e=Rs(Ao)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Am,useSyncExternalStore:Rm,useId:Qm,unstable_isNewReconciler:!1},Zx={readContext:Rt,useCallback:Vm,useContext:Rt,useEffect:xf,useImperativeHandle:Hm,useInsertionEffect:Mm,useLayoutEffect:Bm,useMemo:Wm,useReducer:Ls,useRef:Fm,useState:function(){return Ls(Ao)},useDebugValue:wf,useDeferredValue:function(e){var t=Lt();return je===null?t.memoizedState=e:Gm(t,je.memoizedState,e)},useTransition:function(){var e=Ls(Ao)[0],t=Lt().memoizedState;return[e,t]},useMutableSource:Am,useSyncExternalStore:Rm,useId:Qm,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fa={isMounted:function(e){return(e=e._reactInternals)?Tr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),i=Vn(e),o=yn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Un(e,o,i),t!==null&&(Qt(t,e,i,r),zl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),i=Vn(e),o=yn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Un(e,o,i),t!==null&&(Qt(t,e,i,r),zl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=Vn(e),i=yn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Un(e,i,r),t!==null&&(Qt(t,e,r,n),zl(t,e,r))}};function sp(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,o):!0}function Xm(e,t,n){var r=!1,i=qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Rt(o):(i=pt(t)?yr:Ze.current,r=t.contextTypes,o=(r=r!=null)?ai(e,i):qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function up(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fa.enqueueReplaceState(t,t.state,null)}function Wu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},df(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Rt(o):(o=pt(t)?yr:Ze.current,i.context=ai(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Vu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fa.enqueueReplaceState(i,i.state,null),sa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fi(e,t){try{var n="",r=t;do n+=z0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ns(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ew=typeof WeakMap=="function"?WeakMap:Map;function Jm(e,t,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,nc=r),Gu(e,t)},n}function Zm(e,t,n){n=yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Gu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Gu(e,t),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ew;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=hw.bind(null,e,t,n),t.then(e,e))}function fp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yn(-1,1),t.tag=2,Un(n,t,1))),n.lanes|=1),e)}var tw=Sn.ReactCurrentOwner,ct=!1;function tt(e,t,n,r){t.child=e===null?Pm(t,null,n,r):ui(t,e.child,n,r)}function pp(e,t,n,r,i){n=n.render;var o=t.ref;return ni(t,i),r=vf(e,t,n,r,o,i),n=yf(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Ee&&n&&of(t),t.flags|=1,tt(e,t,r,i),t.child)}function hp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Pf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ev(e,t,o,r,i)):(e=Rl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(l,r)&&e.ref===t.ref)return bn(e,t,i)}return t.flags|=1,e=Wn(o,r),e.ref=t.ref,e.return=t,t.child=e}function ev(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Eo(o,r)&&e.ref===t.ref)if(ct=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ct=!0);else return t.lanes=e.lanes,bn(e,t,i)}return Qu(e,t,n,r,i)}function tv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Xr,wt),wt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,xe(Xr,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,xe(Xr,wt),wt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,xe(Xr,wt),wt|=r;return tt(e,t,i,n),t.child}function nv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qu(e,t,n,r,i){var o=pt(n)?yr:Ze.current;return o=ai(t,o),ni(t,i),n=vf(e,t,n,r,o,i),r=yf(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,bn(e,t,i)):(Ee&&r&&of(t),t.flags|=1,tt(e,t,n,i),t.child)}function gp(e,t,n,r,i){if(pt(n)){var o=!0;ra(t)}else o=!1;if(ni(t,i),t.stateNode===null)_l(e,t),Xm(t,n,r),Wu(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=pt(n)?yr:Ze.current,u=ai(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&up(t,l,r,u),_n=!1;var d=t.memoizedState;l.state=d,sa(t,r,l,i),s=t.memoizedState,a!==r||d!==s||dt.current||_n?(typeof f=="function"&&(Vu(t,n,f,r),s=t.memoizedState),(a=_n||sp(t,n,a,r,d,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,_m(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Mt(t.type,a),l.props=u,c=t.pendingProps,d=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Rt(s):(s=pt(n)?yr:Ze.current,s=ai(t,s));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||d!==s)&&up(t,l,r,s),_n=!1,d=t.memoizedState,l.state=d,sa(t,r,l,i);var g=t.memoizedState;a!==c||d!==g||dt.current||_n?(typeof p=="function"&&(Vu(t,n,p,r),g=t.memoizedState),(u=_n||sp(t,n,u,r,d,g,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Yu(e,t,n,r,o,i)}function Yu(e,t,n,r,i,o){nv(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ep(t,n,!1),bn(e,t,o);r=t.stateNode,tw.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ui(t,e.child,null,o),t.child=ui(t,null,a,o)):tt(e,t,a,o),t.memoizedState=r.state,i&&ep(t,n,!0),t.child}function rv(e){var t=e.stateNode;t.pendingContext?Zd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zd(e,t.context,!1),pf(e,t.containerInfo)}function mp(e,t,n,r,i){return si(),af(i),t.flags|=256,tt(e,t,n,r),t.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Ku(e){return{baseLanes:e,cachePool:null,transitions:null}}function iv(e,t,n){var r=t.pendingProps,i=$e.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),xe($e,i&1),e===null)return Uu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ua(l,r,0,null),e=mr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ku(n),t.memoizedState=qu,e):kf(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return nw(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Wn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Wn(a,o):(o=mr(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ku(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=qu,r}return o=e.child,e=o.sibling,r=Wn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function kf(e,t){return t=Ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,n,r){return r!==null&&af(r),ui(t,e.child,null,n),e=kf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nw(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ns(Error(L(422))),dl(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ua({mode:"visible",children:r.children},i,0,null),o=mr(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ui(t,e.child,null,l),t.child.memoizedState=Ku(l),t.memoizedState=qu,o);if(!(t.mode&1))return dl(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=Ns(o,r,void 0),dl(e,t,l,r)}if(a=(l&e.childLanes)!==0,ct||a){if(r=Ve,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kn(e,i),Qt(r,e,i,-1))}return zf(),r=Ns(Error(L(421))),dl(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,kt=Bn(i.nextSibling),bt=t,Ee=!0,Vt=null,e!==null&&(Pt[It++]=mn,Pt[It++]=vn,Pt[It++]=xr,mn=e.id,vn=e.overflow,xr=t),t=kf(t,r.children),t.flags|=4096,t)}function vp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hu(e.return,t,n)}function Os(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function ov(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(tt(e,t,r.children,n),r=$e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vp(e,n,t);else if(e.tag===19)vp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(xe($e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ua(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Os(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ua(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Os(t,!0,n,null,o);break;case"together":Os(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _l(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rw(e,t,n){switch(t.tag){case 3:rv(t),si();break;case 5:Tm(t);break;case 1:pt(t.type)&&ra(t);break;case 4:pf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;xe(la,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(xe($e,$e.current&1),t.flags|=128,null):n&t.child.childLanes?iv(e,t,n):(xe($e,$e.current&1),e=bn(e,t,n),e!==null?e.sibling:null);xe($e,$e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ov(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe($e,$e.current),r)break;return null;case 22:case 23:return t.lanes=0,tv(e,t,n)}return bn(e,t,n)}var lv,Xu,av,sv;lv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xu=function(){};av=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dr(rn.current);var o=null;switch(n){case"input":i=xu(e,i),r=xu(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=bu(e,i),r=bu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ta)}Cu(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(yo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(yo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&we("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};sv=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mi(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function iw(e,t,n){var r=t.pendingProps;switch(lf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return pt(t.type)&&na(),Ke(t),null;case 3:return r=t.stateNode,ci(),Se(dt),Se(Ze),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(oc(Vt),Vt=null))),Xu(e,t),Ke(t),null;case 5:hf(t);var i=dr(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)av(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Ke(t),null}if(e=dr(rn.current),cl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[tn]=t,r[Po]=o,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Yi.length;i++)we(Yi[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":$d(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":Pd(r,o),we("invalid",r)}Cu(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ul(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ul(r.textContent,a,e),i=["children",""+a]):yo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&we("scroll",r)}switch(n){case"input":tl(r),zd(r,o,!0);break;case"textarea":tl(r),Id(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ta)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Og(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[tn]=t,e[Po]=r,lv(e,t,!1,!1),t.stateNode=e;e:{switch(l=Eu(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yi.length;i++)we(Yi[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":$d(e,r),i=xu(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),we("invalid",e);break;case"textarea":Pd(e,r),i=bu(e,r),we("invalid",e);break;default:i=r}Cu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Fg(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Dg(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xo(e,s):typeof s=="number"&&xo(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yo.hasOwnProperty(o)?s!=null&&o==="onScroll"&&we("scroll",e):s!=null&&Vc(e,o,s,l))}switch(n){case"input":tl(e),zd(e,r,!1);break;case"textarea":tl(e),Id(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Jr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Jr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)sv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=dr(_o.current),dr(rn.current),cl(t)){if(r=t.stateNode,n=t.memoizedProps,r[tn]=t,(o=r.nodeValue!==n)&&(e=bt,e!==null))switch(e.tag){case 3:ul(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=t,t.stateNode=r}return Ke(t),null;case 13:if(Se($e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&kt!==null&&t.mode&1&&!(t.flags&128))$m(),si(),t.flags|=98560,o=!1;else if(o=cl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[tn]=t}else si(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),o=!1}else Vt!==null&&(oc(Vt),Vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?Be===0&&(Be=3):zf())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return ci(),Xu(e,t),e===null&&$o(t.stateNode.containerInfo),Ke(t),null;case 10:return cf(t.type._context),Ke(t),null;case 17:return pt(t.type)&&na(),Ke(t),null;case 19:if(Se($e),o=t.memoizedState,o===null)return Ke(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Mi(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ua(e),l!==null){for(t.flags|=128,Mi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return xe($e,$e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>di&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304)}else{if(!r)if(e=ua(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ee)return Ke(t),null}else 2*Te()-o.renderingStartTime>di&&n!==1073741824&&(t.flags|=128,r=!0,Mi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=$e.current,xe($e,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return $f(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?wt&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function ow(e,t){switch(lf(t),t.tag){case 1:return pt(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ci(),Se(dt),Se(Ze),gf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hf(t),null;case 13:if(Se($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));si()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se($e),null;case 4:return ci(),null;case 10:return cf(t.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var pl=!1,Xe=!1,lw=typeof WeakSet=="function"?WeakSet:Set,U=null;function Kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function Ju(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var yp=!1;function aw(e,t){if(Nu=Jl,e=pm(),rf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,c=e,d=null;t:for(;;){for(var p;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(p=c.firstChild)!==null;)d=c,c=p;for(;;){if(c===e)break t;if(d===n&&++u===i&&(a=l),d===o&&++f===r&&(s=l),(p=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=p}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:e,selectionRange:n},Jl=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,$=g.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:Mt(t.type,y),$);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(w){Ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return g=yp,yp=!1,g}function lo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ju(t,n,o)}i=i.next}while(i!==r)}}function Ma(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uv(e){var t=e.alternate;t!==null&&(e.alternate=null,uv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[Po],delete t[Fu],delete t[Hx],delete t[Vx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cv(e){return e.tag===5||e.tag===3||e.tag===4}function xp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ec(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ta));else if(r!==4&&(e=e.child,e!==null))for(ec(e,t,n),e=e.sibling;e!==null;)ec(e,t,n),e=e.sibling}function tc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tc(e,t,n),e=e.sibling;e!==null;)tc(e,t,n),e=e.sibling}var Ge=null,Bt=!1;function En(e,t,n){for(n=n.child;n!==null;)fv(e,t,n),n=n.sibling}function fv(e,t,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Aa,n)}catch{}switch(n.tag){case 5:Xe||Kr(n,t);case 6:var r=Ge,i=Bt;Ge=null,En(e,t,n),Ge=r,Bt=i,Ge!==null&&(Bt?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Bt?(e=Ge,n=n.stateNode,e.nodeType===8?Is(e.parentNode,n):e.nodeType===1&&Is(e,n),So(e)):Is(Ge,n.stateNode));break;case 4:r=Ge,i=Bt,Ge=n.stateNode.containerInfo,Bt=!0,En(e,t,n),Ge=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ju(n,t,l),i=i.next}while(i!==r)}En(e,t,n);break;case 1:if(!Xe&&(Kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,t,a)}En(e,t,n);break;case 21:En(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,En(e,t,n),Xe=r):En(e,t,n);break;default:En(e,t,n)}}function wp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lw),t.forEach(function(r){var i=mw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,Bt=!1;break e;case 3:Ge=a.stateNode.containerInfo,Bt=!0;break e;case 4:Ge=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(Ge===null)throw Error(L(160));fv(o,l,i),Ge=null,Bt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dv(t,e),t=t.sibling}function dv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Jt(e),r&4){try{lo(3,e,e.return),Ma(3,e)}catch(y){Ie(e,e.return,y)}try{lo(5,e,e.return)}catch(y){Ie(e,e.return,y)}}break;case 1:Ft(t,e),Jt(e),r&512&&n!==null&&Kr(n,n.return);break;case 5:if(Ft(t,e),Jt(e),r&512&&n!==null&&Kr(n,n.return),e.flags&32){var i=e.stateNode;try{xo(i,"")}catch(y){Ie(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Lg(i,o),Eu(a,l);var u=Eu(a,o);for(l=0;l<s.length;l+=2){var f=s[l],c=s[l+1];f==="style"?Fg(i,c):f==="dangerouslySetInnerHTML"?Dg(i,c):f==="children"?xo(i,c):Vc(i,f,c,u)}switch(a){case"input":wu(i,o);break;case"textarea":Ng(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Jr(i,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?Jr(i,!!o.multiple,o.defaultValue,!0):Jr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Po]=o}catch(y){Ie(e,e.return,y)}}break;case 6:if(Ft(t,e),Jt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){Ie(e,e.return,y)}}break;case 3:if(Ft(t,e),Jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(t.containerInfo)}catch(y){Ie(e,e.return,y)}break;case 4:Ft(t,e),Jt(e);break;case 13:Ft(t,e),Jt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cf=Te())),r&4&&wp(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||f,Ft(t,e),Xe=u):Ft(t,e),Jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(U=e,f=e.child;f!==null;){for(c=U=f;U!==null;){switch(d=U,p=d.child,d.tag){case 0:case 11:case 14:case 15:lo(4,d,d.return);break;case 1:Kr(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Ie(r,n,y)}}break;case 5:Kr(d,d.return);break;case 22:if(d.memoizedState!==null){bp(c);continue}}p!==null?(p.return=d,U=p):bp(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=jg("display",l))}catch(y){Ie(e,e.return,y)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){Ie(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ft(t,e),Jt(e),r&4&&wp(e);break;case 21:break;default:Ft(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cv(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xo(i,""),r.flags&=-33);var o=xp(e);tc(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=xp(e);ec(e,a,l);break;default:throw Error(L(161))}}catch(s){Ie(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sw(e,t,n){U=e,pv(e)}function pv(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||pl;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Xe;a=pl;var u=Xe;if(pl=l,(Xe=s)&&!u)for(U=i;U!==null;)l=U,s=l.child,l.tag===22&&l.memoizedState!==null?Sp(i):s!==null?(s.return=l,U=s):Sp(i);for(;o!==null;)U=o,pv(o),o=o.sibling;U=i,pl=a,Xe=u}kp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):kp(e)}}function kp(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||Ma(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&op(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}op(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&So(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Xe||t.flags&512&&Zu(t)}catch(d){Ie(t,t.return,d)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function bp(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Sp(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ma(4,t)}catch(s){Ie(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ie(t,i,s)}}var o=t.return;try{Zu(t)}catch(s){Ie(t,o,s)}break;case 5:var l=t.return;try{Zu(t)}catch(s){Ie(t,l,s)}}}catch(s){Ie(t,t.return,s)}if(t===e){U=null;break}var a=t.sibling;if(a!==null){a.return=t.return,U=a;break}U=t.return}}var uw=Math.ceil,da=Sn.ReactCurrentDispatcher,bf=Sn.ReactCurrentOwner,At=Sn.ReactCurrentBatchConfig,ae=0,Ve=null,Ne=null,Qe=0,wt=0,Xr=Xn(0),Be=0,Lo=null,kr=0,Ba=0,Sf=0,ao=null,ut=null,Cf=0,di=1/0,cn=null,pa=!1,nc=null,Hn=null,hl=!1,Ln=null,ha=0,so=0,rc=null,Tl=-1,Al=0;function rt(){return ae&6?Te():Tl!==-1?Tl:Tl=Te()}function Vn(e){return e.mode&1?ae&2&&Qe!==0?Qe&-Qe:Gx.transition!==null?(Al===0&&(Al=Xg()),Al):(e=pe,e!==0||(e=window.event,e=e===void 0?16:im(e.type)),e):1}function Qt(e,t,n,r){if(50<so)throw so=0,rc=null,Error(L(185));Wo(e,n,r),(!(ae&2)||e!==Ve)&&(e===Ve&&(!(ae&2)&&(Ba|=n),Be===4&&An(e,Qe)),ht(e,r),n===1&&ae===0&&!(t.mode&1)&&(di=Te()+500,Da&&Jn()))}function ht(e,t){var n=e.callbackNode;G0(e,t);var r=Xl(e,e===Ve?Qe:0);if(r===0)n!==null&&Ad(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ad(n),t===1)e.tag===0?Wx(Cp.bind(null,e)):Sm(Cp.bind(null,e)),Bx(function(){!(ae&6)&&Jn()}),n=null;else{switch(Jg(r)){case 1:n=qc;break;case 4:n=qg;break;case 16:n=Kl;break;case 536870912:n=Kg;break;default:n=Kl}n=kv(n,hv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hv(e,t){if(Tl=-1,Al=0,ae&6)throw Error(L(327));var n=e.callbackNode;if(ri()&&e.callbackNode!==n)return null;var r=Xl(e,e===Ve?Qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var i=ae;ae|=2;var o=mv();(Ve!==e||Qe!==t)&&(cn=null,di=Te()+500,gr(e,t));do try{dw();break}catch(a){gv(e,a)}while(!0);uf(),da.current=o,ae=i,Ne!==null?t=0:(Ve=null,Qe=0,t=Be)}if(t!==0){if(t===2&&(i=_u(e),i!==0&&(r=i,t=ic(e,i))),t===1)throw n=Lo,gr(e,0),An(e,r),ht(e,Te()),n;if(t===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!cw(i)&&(t=ga(e,r),t===2&&(o=_u(e),o!==0&&(r=o,t=ic(e,o))),t===1))throw n=Lo,gr(e,0),An(e,r),ht(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:ir(e,ut,cn);break;case 3:if(An(e,r),(r&130023424)===r&&(t=Cf+500-Te(),10<t)){if(Xl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ju(ir.bind(null,e,ut,cn),t);break}ir(e,ut,cn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Gt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uw(r/1960))-r,10<r){e.timeoutHandle=ju(ir.bind(null,e,ut,cn),r);break}ir(e,ut,cn);break;case 5:ir(e,ut,cn);break;default:throw Error(L(329))}}}return ht(e,Te()),e.callbackNode===n?hv.bind(null,e):null}function ic(e,t){var n=ao;return e.current.memoizedState.isDehydrated&&(gr(e,t).flags|=256),e=ga(e,t),e!==2&&(t=ut,ut=n,t!==null&&oc(t)),e}function oc(e){ut===null?ut=e:ut.push.apply(ut,e)}function cw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~Sf,t&=~Ba,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function Cp(e){if(ae&6)throw Error(L(327));ri();var t=Xl(e,0);if(!(t&1))return ht(e,Te()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=_u(e);r!==0&&(t=r,n=ic(e,r))}if(n===1)throw n=Lo,gr(e,0),An(e,t),ht(e,Te()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ir(e,ut,cn),ht(e,Te()),null}function Ef(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(di=Te()+500,Da&&Jn())}}function br(e){Ln!==null&&Ln.tag===0&&!(ae&6)&&ri();var t=ae;ae|=1;var n=At.transition,r=pe;try{if(At.transition=null,pe=1,e)return e()}finally{pe=r,At.transition=n,ae=t,!(ae&6)&&Jn()}}function $f(){wt=Xr.current,Se(Xr)}function gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mx(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(lf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:ci(),Se(dt),Se(Ze),gf();break;case 5:hf(r);break;case 4:ci();break;case 13:Se($e);break;case 19:Se($e);break;case 10:cf(r.type._context);break;case 22:case 23:$f()}n=n.return}if(Ve=e,Ne=e=Wn(e.current,null),Qe=wt=t,Be=0,Lo=null,Sf=Ba=kr=0,ut=ao=null,fr!==null){for(t=0;t<fr.length;t++)if(n=fr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}fr=null}return e}function gv(e,t){do{var n=Ne;try{if(uf(),Pl.current=fa,ca){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ca=!1}if(wr=0,Ue=je=ze=null,oo=!1,To=0,bf.current=null,n===null||n.return===null){Be=1,Lo=t,Ne=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Qe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=fp(l);if(p!==null){p.flags&=-257,dp(p,l,a,o,t),p.mode&1&&cp(o,u,t),t=p,s=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(s),t.updateQueue=y}else g.add(s);break e}else{if(!(t&1)){cp(o,u,t),zf();break e}s=Error(L(426))}}else if(Ee&&a.mode&1){var $=fp(l);if($!==null){!($.flags&65536)&&($.flags|=256),dp($,l,a,o,t),af(fi(s,a));break e}}o=s=fi(s,a),Be!==4&&(Be=2),ao===null?ao=[o]:ao.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Jm(o,s,t);ip(o,h);break e;case 1:a=s;var m=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hn===null||!Hn.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Zm(o,a,t);ip(o,w);break e}}o=o.return}while(o!==null)}yv(n)}catch(P){t=P,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function mv(){var e=da.current;return da.current=fa,e===null?fa:e}function zf(){(Be===0||Be===3||Be===2)&&(Be=4),Ve===null||!(kr&268435455)&&!(Ba&268435455)||An(Ve,Qe)}function ga(e,t){var n=ae;ae|=2;var r=mv();(Ve!==e||Qe!==t)&&(cn=null,gr(e,t));do try{fw();break}catch(i){gv(e,i)}while(!0);if(uf(),ae=n,da.current=r,Ne!==null)throw Error(L(261));return Ve=null,Qe=0,Be}function fw(){for(;Ne!==null;)vv(Ne)}function dw(){for(;Ne!==null&&!D0();)vv(Ne)}function vv(e){var t=wv(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?yv(e):Ne=t,bf.current=null}function yv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ow(n,t),n!==null){n.flags&=32767,Ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ne=null;return}}else if(n=iw(n,t,wt),n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Be===0&&(Be=5)}function ir(e,t,n){var r=pe,i=At.transition;try{At.transition=null,pe=1,pw(e,t,n,r)}finally{At.transition=i,pe=r}return null}function pw(e,t,n,r){do ri();while(Ln!==null);if(ae&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Q0(e,o),e===Ve&&(Ne=Ve=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,kv(Kl,function(){return ri(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var l=pe;pe=1;var a=ae;ae|=4,bf.current=null,aw(e,n),dv(n,e),Rx(Ou),Jl=!!Nu,Ou=Nu=null,e.current=n,sw(n),j0(),ae=a,pe=l,At.transition=o}else e.current=n;if(hl&&(hl=!1,Ln=e,ha=i),o=e.pendingLanes,o===0&&(Hn=null),B0(n.stateNode),ht(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pa)throw pa=!1,e=nc,nc=null,e;return ha&1&&e.tag!==0&&ri(),o=e.pendingLanes,o&1?e===rc?so++:(so=0,rc=e):so=0,Jn(),null}function ri(){if(Ln!==null){var e=Jg(ha),t=At.transition,n=pe;try{if(At.transition=null,pe=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,ha=0,ae&6)throw Error(L(331));var i=ae;for(ae|=4,U=e.current;U!==null;){var o=U,l=o.child;if(U.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(U=u;U!==null;){var f=U;switch(f.tag){case 0:case 11:case 15:lo(8,f,o)}var c=f.child;if(c!==null)c.return=f,U=c;else for(;U!==null;){f=U;var d=f.sibling,p=f.return;if(uv(f),f===u){U=null;break}if(d!==null){d.return=p,U=d;break}U=p}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var $=y.sibling;y.sibling=null,y=$}while(y!==null)}}U=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,U=l;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:lo(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,U=h;break e}U=o.return}}var m=e.current;for(U=m;U!==null;){l=U;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,U=v;else e:for(l=m;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ma(9,a)}}catch(P){Ie(a,a.return,P)}if(a===l){U=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,U=w;break e}U=a.return}}if(ae=i,Jn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Aa,e)}catch{}r=!0}return r}finally{pe=n,At.transition=t}}return!1}function Ep(e,t,n){t=fi(n,t),t=Jm(e,t,1),e=Un(e,t,1),t=rt(),e!==null&&(Wo(e,1,t),ht(e,t))}function Ie(e,t,n){if(e.tag===3)Ep(e,e,n);else for(;t!==null;){if(t.tag===3){Ep(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){e=fi(n,e),e=Zm(t,e,1),t=Un(t,e,1),e=rt(),t!==null&&(Wo(t,1,e),ht(t,e));break}}t=t.return}}function hw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Qe&n)===n&&(Be===4||Be===3&&(Qe&130023424)===Qe&&500>Te()-Cf?gr(e,0):Sf|=n),ht(e,t)}function xv(e,t){t===0&&(e.mode&1?(t=il,il<<=1,!(il&130023424)&&(il=4194304)):t=1);var n=rt();e=kn(e,t),e!==null&&(Wo(e,t,n),ht(e,n))}function gw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xv(e,n)}function mw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),xv(e,n)}var wv;wv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ct=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ct=!1,rw(e,t,n);ct=!!(e.flags&131072)}else ct=!1,Ee&&t.flags&1048576&&Cm(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_l(e,t),e=t.pendingProps;var i=ai(t,Ze.current);ni(t,n),i=vf(null,t,r,e,i,n);var o=yf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(o=!0,ra(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,df(t),i.updater=Fa,t.stateNode=i,i._reactInternals=t,Wu(t,r,e,n),t=Yu(null,t,r,!0,o,n)):(t.tag=0,Ee&&o&&of(t),tt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_l(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yw(r),e=Mt(r,e),i){case 0:t=Qu(null,t,r,e,n);break e;case 1:t=gp(null,t,r,e,n);break e;case 11:t=pp(null,t,r,e,n);break e;case 14:t=hp(null,t,r,Mt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Qu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),gp(e,t,r,i,n);case 3:e:{if(rv(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,_m(e,t),sa(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=fi(Error(L(423)),t),t=mp(e,t,r,n,i);break e}else if(r!==i){i=fi(Error(L(424)),t),t=mp(e,t,r,n,i);break e}else for(kt=Bn(t.stateNode.containerInfo.firstChild),bt=t,Ee=!0,Vt=null,n=Pm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(si(),r===i){t=bn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return Tm(t),e===null&&Uu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Du(r,i)?l=null:o!==null&&Du(r,o)&&(t.flags|=32),nv(e,t),tt(e,t,l,n),t.child;case 6:return e===null&&Uu(t),null;case 13:return iv(e,t,n);case 4:return pf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ui(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),pp(e,t,r,i,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,xe(la,r._currentValue),r._currentValue=l,o!==null)if(Xt(o.value,l)){if(o.children===i.children&&!dt.current){t=bn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=yn(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Hu(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(L(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Hu(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ni(t,n),i=Rt(i),r=r(i),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,i=Mt(r,t.pendingProps),i=Mt(r.type,i),hp(e,t,r,i,n);case 15:return ev(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),_l(e,t),t.tag=1,pt(r)?(e=!0,ra(t)):e=!1,ni(t,n),Xm(t,r,i),Wu(t,r,i,n),Yu(null,t,r,!0,e,n);case 19:return ov(e,t,n);case 22:return tv(e,t,n)}throw Error(L(156,t.tag))};function kv(e,t){return Yg(e,t)}function vw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new vw(e,t,n,r)}function Pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yw(e){if(typeof e=="function")return Pf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gc)return 11;if(e===Qc)return 14}return 2}function Wn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rl(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Pf(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Br:return mr(n.children,i,o,t);case Wc:l=8,i|=8;break;case gu:return e=Tt(12,n,t,i|2),e.elementType=gu,e.lanes=o,e;case mu:return e=Tt(13,n,t,i),e.elementType=mu,e.lanes=o,e;case vu:return e=Tt(19,n,t,i),e.elementType=vu,e.lanes=o,e;case Tg:return Ua(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ig:l=10;break e;case _g:l=9;break e;case Gc:l=11;break e;case Qc:l=14;break e;case In:l=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=Tt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function mr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Ua(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=Tg,e.lanes=n,e.stateNode={isHidden:!1},e}function Ds(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function js(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ys(0),this.expirationTimes=ys(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function If(e,t,n,r,i,o,l,a,s){return e=new xw(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(o),e}function ww(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bv(e){if(!e)return qn;e=e._reactInternals;e:{if(Tr(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(pt(n))return bm(e,n,t)}return t}function Sv(e,t,n,r,i,o,l,a,s){return e=If(n,r,!0,e,i,o,l,a,s),e.context=bv(null),n=e.current,r=rt(),i=Vn(n),o=yn(r,i),o.callback=t??null,Un(n,o,i),e.current.lanes=i,Wo(e,i,r),ht(e,r),e}function Ha(e,t,n,r){var i=t.current,o=rt(),l=Vn(i);return n=bv(n),t.context===null?t.context=n:t.pendingContext=n,t=yn(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Un(i,t,l),e!==null&&(Qt(e,i,l,o),zl(e,i,l)),l}function ma(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $p(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _f(e,t){$p(e,t),(e=e.alternate)&&$p(e,t)}function kw(){return null}var Cv=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tf(e){this._internalRoot=e}Va.prototype.render=Tf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Ha(e,t,null,null)};Va.prototype.unmount=Tf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){Ha(null,e,null,null)}),t[wn]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var t=tm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tn.length&&t!==0&&t<Tn[n].priority;n++);Tn.splice(n,0,e),n===0&&rm(e)}};function Af(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zp(){}function bw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ma(l);o.call(u)}}var l=Sv(t,r,e,0,null,!1,!1,"",zp);return e._reactRootContainer=l,e[wn]=l.current,$o(e.nodeType===8?e.parentNode:e),br(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ma(s);a.call(u)}}var s=If(e,0,!1,null,null,!1,!1,"",zp);return e._reactRootContainer=s,e[wn]=s.current,$o(e.nodeType===8?e.parentNode:e),br(function(){Ha(t,s,n,r)}),s}function Ga(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=ma(l);a.call(s)}}Ha(t,l,e,i)}else l=bw(n,t,e,i,r);return ma(l)}Zg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qi(t.pendingLanes);n!==0&&(Kc(t,n|1),ht(t,Te()),!(ae&6)&&(di=Te()+500,Jn()))}break;case 13:br(function(){var r=kn(e,1);if(r!==null){var i=rt();Qt(r,e,1,i)}}),_f(e,1)}};Xc=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=rt();Qt(t,e,134217728,n)}_f(e,134217728)}};em=function(e){if(e.tag===13){var t=Vn(e),n=kn(e,t);if(n!==null){var r=rt();Qt(n,e,t,r)}_f(e,t)}};tm=function(){return pe};nm=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}};zu=function(e,t,n){switch(t){case"input":if(wu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Oa(r);if(!i)throw Error(L(90));Rg(r),wu(r,i)}}}break;case"textarea":Ng(e,n);break;case"select":t=n.value,t!=null&&Jr(e,!!n.multiple,t,!1)}};Ug=Ef;Hg=br;var Sw={usingClientEntryPoint:!1,Events:[Qo,Wr,Oa,Mg,Bg,Ef]},Bi={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cw={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gg(e),e===null?null:e.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Aa=gl.inject(Cw),nn=gl}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sw;Et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Af(t))throw Error(L(200));return ww(e,t,null,n)};Et.createRoot=function(e,t){if(!Af(e))throw Error(L(299));var n=!1,r="",i=Cv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=If(e,1,!1,null,null,n,!1,r,i),e[wn]=t.current,$o(e.nodeType===8?e.parentNode:e),new Tf(t)};Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Gg(t),e=e===null?null:e.stateNode,e};Et.flushSync=function(e){return br(e)};Et.hydrate=function(e,t,n){if(!Wa(t))throw Error(L(200));return Ga(null,e,t,!0,n)};Et.hydrateRoot=function(e,t,n){if(!Af(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Cv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Sv(t,null,e,1,n??null,i,!1,o,l),e[wn]=t.current,$o(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Va(t)};Et.render=function(e,t,n){if(!Wa(t))throw Error(L(200));return Ga(null,e,t,!1,n)};Et.unmountComponentAtNode=function(e){if(!Wa(e))throw Error(L(40));return e._reactRootContainer?(br(function(){Ga(null,null,e,!1,function(){e._reactRootContainer=null,e[wn]=null})}),!0):!1};Et.unstable_batchedUpdates=Ef;Et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wa(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Ga(e,t,n,!1,r)};Et.version="18.3.1-next-f1338f8080-20240426";function Ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ev)}catch(e){console.error(e)}}Ev(),Eg.exports=Et;var Ew=Eg.exports,Pp=Ew;pu.createRoot=Pp.createRoot,pu.hydrateRoot=Pp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},No.apply(this,arguments)}var Nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nn||(Nn={}));const Ip="popstate";function $w(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return lc("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:va(i)}return Pw(t,n,null,e)}function De(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zw(){return Math.random().toString(36).substr(2,8)}function _p(e,t){return{usr:e.state,key:e.key,idx:t}}function lc(e,t,n,r){return n===void 0&&(n=null),No({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ei(t):t,{state:n,key:t&&t.key||r||zw()})}function va(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ei(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Nn.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(No({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function c(){a=Nn.Pop;let $=f(),h=$==null?null:$-u;u=$,s&&s({action:a,location:y.location,delta:h})}function d($,h){a=Nn.Push;let m=lc(y.location,$,h);u=f()+1;let v=_p(m,u),w=y.createHref(m);try{l.pushState(v,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(w)}o&&s&&s({action:a,location:y.location,delta:1})}function p($,h){a=Nn.Replace;let m=lc(y.location,$,h);u=f();let v=_p(m,u),w=y.createHref(m);l.replaceState(v,"",w),o&&s&&s({action:a,location:y.location,delta:0})}function g($){let h=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof $=="string"?$:va($);return m=m.replace(/ $/,"%20"),De(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let y={get action(){return a},get location(){return e(i,l)},listen($){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Ip,c),s=$,()=>{i.removeEventListener(Ip,c),s=null}},createHref($){return t(i,$)},createURL:g,encodeLocation($){let h=g($);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go($){return l.go($)}};return y}var Tp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tp||(Tp={}));function Iw(e,t,n){return n===void 0&&(n="/"),_w(e,t,n)}function _w(e,t,n,r){let i=typeof t=="string"?Ei(t):t,o=Lf(i.pathname||"/",n);if(o==null)return null;let l=$v(e);Tw(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let u=Hw(o);a=Mw(l[s],u)}return a}function $v(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(De(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Gn([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(De(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$v(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:jw(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of zv(o.path))i(o,l,s)}),t}function zv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=zv(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Tw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Aw=/^:[\w-]+$/,Rw=3,Lw=2,Nw=1,Ow=10,Dw=-2,Ap=e=>e==="*";function jw(e,t){let n=e.split("/"),r=n.length;return n.some(Ap)&&(r+=Dw),t&&(r+=Lw),n.filter(i=>!Ap(i)).reduce((i,o)=>i+(Aw.test(o)?Rw:o===""?Nw:Ow),r)}function Fw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Mw(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",c=Bw({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),d=s.route;if(!c)return null;Object.assign(i,c.params),l.push({params:i,pathname:Gn([o,c.pathname]),pathnameBase:Yw(Gn([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=Gn([o,c.pathnameBase]))}return l}function Bw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Uw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:d,isOptional:p}=f;if(d==="*"){let y=a[c]||"";l=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const g=a[c];return p&&!g?u[d]=void 0:u[d]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Uw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Hw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Lf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Vw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ww=e=>Vw.test(e);function Gw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ei(e):e,o;if(n)if(Ww(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Rf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=Rp(n.substring(1),"/"):o=Rp(n,t)}else o=t;return{pathname:o,search:qw(r),hash:Kw(i)}}function Rp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pv(e,t){let n=Qw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Iv(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ei(e):(i=No({},e),De(!i.pathname||!i.pathname.includes("?"),Fs("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),Fs("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),Fs("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let d=l.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}a=c>=0?t[c]:"/"}let s=Gw(i,a),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Gn=e=>e.join("/").replace(/\/\/+/g,"/"),Yw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Kw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _v=["post","put","patch","delete"];new Set(_v);const Jw=["get",..._v];new Set(Jw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oo.apply(this,arguments)}const Nf=T.createContext(null),Zw=T.createContext(null),Ar=T.createContext(null),Qa=T.createContext(null),Zn=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Tv=T.createContext(null);function ek(e,t){let{relative:n}=t===void 0?{}:t;qo()||De(!1);let{basename:r,navigator:i}=T.useContext(Ar),{hash:o,pathname:l,search:a}=Lv(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Gn([r,l])),i.createHref({pathname:s,search:a,hash:o})}function qo(){return T.useContext(Qa)!=null}function Ya(){return qo()||De(!1),T.useContext(Qa).location}function Av(e){T.useContext(Ar).static||T.useLayoutEffect(e)}function Rv(){let{isDataRoute:e}=T.useContext(Zn);return e?hk():tk()}function tk(){qo()||De(!1);let e=T.useContext(Nf),{basename:t,future:n,navigator:r}=T.useContext(Ar),{matches:i}=T.useContext(Zn),{pathname:o}=Ya(),l=JSON.stringify(Pv(i,n.v7_relativeSplatPath)),a=T.useRef(!1);return Av(()=>{a.current=!0}),T.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Iv(u,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Gn([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,l,o,e])}function nk(){let{matches:e}=T.useContext(Zn),t=e[e.length-1];return t?t.params:{}}function Lv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=T.useContext(Ar),{matches:i}=T.useContext(Zn),{pathname:o}=Ya(),l=JSON.stringify(Pv(i,r.v7_relativeSplatPath));return T.useMemo(()=>Iv(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function rk(e,t){return ik(e,t)}function ik(e,t,n,r){qo()||De(!1);let{navigator:i}=T.useContext(Ar),{matches:o}=T.useContext(Zn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Ya(),f;if(t){var c;let $=typeof t=="string"?Ei(t):t;s==="/"||(c=$.pathname)!=null&&c.startsWith(s)||De(!1),f=$}else f=u;let d=f.pathname||"/",p=d;if(s!=="/"){let $=s.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice($.length).join("/")}let g=Iw(e,{pathname:p}),y=uk(g&&g.map($=>Object.assign({},$,{params:Object.assign({},a,$.params),pathname:Gn([s,i.encodeLocation?i.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?s:Gn([s,i.encodeLocation?i.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),o,n,r);return t&&y?T.createElement(Qa.Provider,{value:{location:Oo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Nn.Pop}},y):y}function ok(){let e=pk(),t=Xw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,null)}const lk=T.createElement(ok,null);class ak extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?T.createElement(Zn.Provider,{value:this.props.routeContext},T.createElement(Tv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sk(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Nf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Zn.Provider,{value:t},r)}function uk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=l.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);f>=0||De(!1),l=l.slice(0,Math.min(l.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let c=l[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:d,errors:p}=n,g=c.route.loader&&d[c.route.id]===void 0&&(!p||p[c.route.id]===void 0);if(c.route.lazy||g){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((f,c,d)=>{let p,g=!1,y=null,$=null;n&&(p=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||lk,s&&(u<0&&d===0?(gk("route-fallback"),g=!0,$=null):u===d&&(g=!0,$=c.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,d+1)),m=()=>{let v;return p?v=y:g?v=$:c.route.Component?v=T.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=f,T.createElement(sk,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?T.createElement(ak,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var Nv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Nv||{}),Ov=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ov||{});function ck(e){let t=T.useContext(Nf);return t||De(!1),t}function fk(e){let t=T.useContext(Zw);return t||De(!1),t}function dk(e){let t=T.useContext(Zn);return t||De(!1),t}function Dv(e){let t=dk(),n=t.matches[t.matches.length-1];return n.route.id||De(!1),n.route.id}function pk(){var e;let t=T.useContext(Tv),n=fk(),r=Dv();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function hk(){let{router:e}=ck(Nv.UseNavigateStable),t=Dv(Ov.UseNavigateStable),n=T.useRef(!1);return Av(()=>{n.current=!0}),T.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Oo({fromRouteId:t},o)))},[e,t])}const Lp={};function gk(e,t,n){Lp[e]||(Lp[e]=!0)}function mk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function jv(e){De(!1)}function vk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nn.Pop,navigator:o,static:l=!1,future:a}=e;qo()&&De(!1);let s=t.replace(/^\/*/,"/"),u=T.useMemo(()=>({basename:s,navigator:o,static:l,future:Oo({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=Ei(r));let{pathname:f="/",search:c="",hash:d="",state:p=null,key:g="default"}=r,y=T.useMemo(()=>{let $=Lf(f,s);return $==null?null:{location:{pathname:$,search:c,hash:d,state:p,key:g},navigationType:i}},[s,f,c,d,p,g,i]);return y==null?null:T.createElement(Ar.Provider,{value:u},T.createElement(Qa.Provider,{children:n,value:y}))}function yk(e){let{children:t,location:n}=e;return rk(ac(t),n)}new Promise(()=>{});function ac(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;let o=[...t,i];if(r.type===T.Fragment){n.push.apply(n,ac(r.props.children,o));return}r.type!==jv&&De(!1),!r.props.index||!r.props.children||De(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ac(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sc.apply(this,arguments)}function xk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kk(e,t){return e.button===0&&(!t||t==="_self")&&!wk(e)}const bk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Sk="6";try{window.__reactRouterVersion=Sk}catch{}const Ck="startTransition",Np=h0[Ck];function Ek(e){let{basename:t,children:n,future:r,window:i}=e,o=T.useRef();o.current==null&&(o.current=$w({window:i,v5Compat:!0}));let l=o.current,[a,s]=T.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=T.useCallback(c=>{u&&Np?Np(()=>s(c)):s(c)},[s,u]);return T.useLayoutEffect(()=>l.listen(f),[l,f]),T.useEffect(()=>mk(r),[r]),T.createElement(vk,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const $k=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pk=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:f,viewTransition:c}=t,d=xk(t,bk),{basename:p}=T.useContext(Ar),g,y=!1;if(typeof u=="string"&&zk.test(u)&&(g=u,$k))try{let v=new URL(window.location.href),w=u.startsWith("//")?new URL(v.protocol+u):new URL(u),P=Lf(w.pathname,p);w.origin===v.origin&&P!=null?u=P+w.search+w.hash:y=!0}catch{}let $=ek(u,{relative:i}),h=Ik(u,{replace:l,state:a,target:s,preventScrollReset:f,relative:i,viewTransition:c});function m(v){r&&r(v),v.defaultPrevented||h(v)}return T.createElement("a",sc({},d,{href:g||$,onClick:y||o?r:m,ref:n,target:s}))});var Op;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Op||(Op={}));var Dp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dp||(Dp={}));function Ik(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,s=Rv(),u=Ya(),f=Lv(e,{relative:l});return T.useCallback(c=>{if(kk(c,n)){c.preventDefault();let d=r!==void 0?r:va(u)===va(f);s(e,{replace:d,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[u,s,f,r,i,n,e,o,l,a])}var ft=function(){return ft=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ft.apply(this,arguments)};function ya(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var _k={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ke="-ms-",uo="-moz-",ce="-webkit-",Fv="comm",qa="rule",Of="decl",Tk="@import",Ak="@namespace",Mv="@keyframes",Rk="@layer",Bv=Math.abs,Df=String.fromCharCode,uc=Object.assign;function Lk(e,t){return Fe(e,0)^45?(((t<<2^Fe(e,0))<<2^Fe(e,1))<<2^Fe(e,2))<<2^Fe(e,3):0}function Uv(e){return e.trim()}function fn(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function Ll(e,t,n){return e.indexOf(t,n)}function Fe(e,t){return e.charCodeAt(t)|0}function Sr(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function Hv(e){return e.length}function qi(e,t){return t.push(e),e}function Nk(e,t){return e.map(t).join("")}function jp(e,t){return e.filter(function(n){return!fn(n,t)})}var Ka=1,pi=1,Vv=0,Nt=0,Re=0,$i="";function Xa(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ka,column:pi,length:l,return:"",siblings:a}}function zn(e,t){return uc(Xa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Or(e){for(;e.root;)e=zn(e.root,{children:[e]});qi(e,e.siblings)}function Ok(){return Re}function Dk(){return Re=Nt>0?Fe($i,--Nt):0,pi--,Re===10&&(pi=1,Ka--),Re}function Yt(){return Re=Nt<Vv?Fe($i,Nt++):0,pi++,Re===10&&(pi=1,Ka++),Re}function On(){return Fe($i,Nt)}function Nl(){return Nt}function Ja(e,t){return Sr($i,e,t)}function Do(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jk(e){return Ka=pi=1,Vv=Ut($i=e),Nt=0,[]}function Fk(e){return $i="",e}function Ms(e){return Uv(Ja(Nt-1,cc(e===91?e+2:e===40?e+1:e)))}function Mk(e){for(;(Re=On())&&Re<33;)Yt();return Do(e)>2||Do(Re)>3?"":" "}function Bk(e,t){for(;--t&&Yt()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return Ja(e,Nl()+(t<6&&On()==32&&Yt()==32))}function cc(e){for(;Yt();)switch(Re){case e:return Nt;case 34:case 39:e!==34&&e!==39&&cc(Re);break;case 40:e===41&&cc(e);break;case 92:Yt();break}return Nt}function Uk(e,t){for(;Yt()&&e+Re!==57;)if(e+Re===84&&On()===47)break;return"/*"+Ja(t,Nt-1)+"*"+Df(e===47?e:Yt())}function Hk(e){for(;!Do(On());)Yt();return Ja(e,Nt)}function Vk(e){return Fk(Ol("",null,null,null,[""],e=jk(e),0,[0],e))}function Ol(e,t,n,r,i,o,l,a,s){for(var u=0,f=0,c=l,d=0,p=0,g=0,y=1,$=1,h=1,m=0,v="",w=i,P=o,k=r,b=v;$;)switch(g=m,m=Yt()){case 40:if(g!=108&&Fe(b,c-1)==58){Ll(b+=Z(Ms(m),"&","&\f"),"&\f",Bv(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:b+=Ms(m);break;case 9:case 10:case 13:case 32:b+=Mk(g);break;case 92:b+=Bk(Nl()-1,7);continue;case 47:switch(On()){case 42:case 47:qi(Wk(Uk(Yt(),Nl()),t,n,s),s),(Do(g||1)==5||Do(On()||1)==5)&&Ut(b)&&Sr(b,-1,void 0)!==" "&&(b+=" ");break;default:b+="/"}break;case 123*y:a[u++]=Ut(b)*h;case 125*y:case 59:case 0:switch(m){case 0:case 125:$=0;case 59+f:h==-1&&(b=Z(b,/\f/g,"")),p>0&&(Ut(b)-c||y===0&&g===47)&&qi(p>32?Mp(b+";",r,n,c-1,s):Mp(Z(b," ","")+";",r,n,c-2,s),s);break;case 59:b+=";";default:if(qi(k=Fp(b,t,n,u,f,i,a,v,w=[],P=[],c,o),o),m===123)if(f===0)Ol(b,t,k,k,w,o,c,a,P);else{switch(d){case 99:if(Fe(b,3)===110)break;case 108:if(Fe(b,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Ol(e,k,k,r&&qi(Fp(e,k,k,0,0,i,a,v,i,w=[],c,P),P),i,P,c,a,r?w:P):Ol(b,k,k,k,[""],P,0,a,P)}}u=f=p=0,y=h=1,v=b="",c=l;break;case 58:c=1+Ut(b),p=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&Dk()==125)continue}switch(b+=Df(m),m*y){case 38:h=f>0?1:(b+="\f",-1);break;case 44:a[u++]=(Ut(b)-1)*h,h=1;break;case 64:On()===45&&(b+=Ms(Yt())),d=On(),f=c=Ut(v=b+=Hk(Nl())),m++;break;case 45:g===45&&Ut(b)==2&&(y=0)}}return o}function Fp(e,t,n,r,i,o,l,a,s,u,f,c){for(var d=i-1,p=i===0?o:[""],g=Hv(p),y=0,$=0,h=0;y<r;++y)for(var m=0,v=Sr(e,d+1,d=Bv($=l[y])),w=e;m<g;++m)(w=Uv($>0?p[m]+" "+v:Z(v,/&\f/g,p[m])))&&(s[h++]=w);return Xa(e,t,n,i===0?qa:a,s,u,f,c)}function Wk(e,t,n,r){return Xa(e,t,n,Fv,Df(Ok()),Sr(e,2,-2),0,r)}function Mp(e,t,n,r,i){return Xa(e,t,n,Of,Sr(e,0,r),Sr(e,r+1,-1),r,i)}function Wv(e,t,n){switch(Lk(e,t)){case 5103:return ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ce+e+e;case 4855:return ce+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return uo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+e+uo+e+ke+e+e;case 5936:switch(Fe(e,t+11)){case 114:return ce+e+ke+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ce+e+ke+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ce+e+ke+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ce+e+ke+e+e;case 6165:return ce+e+ke+"flex-"+e+e;case 5187:return ce+e+Z(e,/(\w+).+(:[^]+)/,ce+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return ce+e+ke+"flex-item-"+Z(e,/flex-|-self/g,"")+(fn(e,/flex-|baseline/)?"":ke+"grid-row-"+Z(e,/flex-|-self/g,""))+e;case 4675:return ce+e+ke+"flex-line-pack"+Z(e,/align-content|flex-|-self/g,"")+e;case 5548:return ce+e+ke+Z(e,"shrink","negative")+e;case 5292:return ce+e+ke+Z(e,"basis","preferred-size")+e;case 6060:return ce+"box-"+Z(e,"-grow","")+ce+e+ke+Z(e,"grow","positive")+e;case 4554:return ce+Z(e,/([^-])(transform)/g,"$1"+ce+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+ce+e+e;case 4200:if(!fn(e,/flex-|baseline/))return ke+"grid-column-align"+Sr(e,t)+e;break;case 2592:case 3360:return ke+Z(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,fn(r.props,/grid-\w+-end/)})?~Ll(e+(n=n[t].value),"span",0)?e:ke+Z(e,"-start","")+e+ke+"grid-row-span:"+(~Ll(n,"span",0)?fn(n,/\d+/):+fn(n,/\d+/)-+fn(e,/\d+/))+";":ke+Z(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return fn(r.props,/grid-\w+-start/)})?e:ke+Z(Z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Fe(e,t+1)){case 109:if(Fe(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+uo+(Fe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ll(e,"stretch",0)?Wv(Z(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return ke+i+":"+o+u+(l?ke+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(Fe(e,t+6)===121)return Z(e,":",":"+ce)+e;break;case 6444:switch(Fe(e,Fe(e,14)===45?18:11)){case 120:return Z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(Fe(e,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+ke+"$2box$3")+e;case 100:return Z(e,":",":"+ke)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(e,"scroll-","scroll-snap-")+e}return e}function xa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Gk(e,t,n,r){switch(e.type){case Rk:if(e.children.length)break;case Tk:case Ak:case Of:return e.return=e.return||e.value;case Fv:return"";case Mv:return e.return=e.value+"{"+xa(e.children,r)+"}";case qa:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=xa(e.children,r))?e.return=e.value+"{"+n+"}":""}function Qk(e){var t=Hv(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Yk(e){return function(t){t.root||(t=t.return)&&e(t)}}function qk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Of:e.return=Wv(e.value,e.length,n);return;case Mv:return xa([zn(e,{value:Z(e.value,"@","@"+ce)})],r);case qa:if(e.length)return Nk(n=e.props,function(i){switch(fn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Or(zn(e,{props:[Z(i,/:(read-\w+)/,":"+uo+"$1")]})),Or(zn(e,{props:[i]})),uc(e,{props:jp(n,r)});break;case"::placeholder":Or(zn(e,{props:[Z(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Or(zn(e,{props:[Z(i,/:(plac\w+)/,":"+uo+"$1")]})),Or(zn(e,{props:[Z(i,/:(plac\w+)/,ke+"input-$1")]})),Or(zn(e,{props:[i]})),uc(e,{props:jp(n,r)});break}return""})}}var yt={},hi=typeof process<"u"&&yt!==void 0&&(yt.REACT_APP_SC_ATTR||yt.SC_ATTR)||"data-styled",Gv="active",Qv="data-styled-version",Za="6.3.12",jf=`/*!sc*/
`,co=typeof window<"u"&&typeof document<"u",Kk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&yt.REACT_APP_SC_DISABLE_SPEEDY!==""?yt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&yt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&yt!==void 0&&yt.SC_DISABLE_SPEEDY!==void 0&&yt.SC_DISABLE_SPEEDY!==""&&yt.SC_DISABLE_SPEEDY!=="false"&&yt.SC_DISABLE_SPEEDY);function es(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Dl=new Map,wa=new Map,jl=1,Ki=function(e){if(Dl.has(e))return Dl.get(e);for(;wa.has(jl);)jl++;var t=jl++;return Dl.set(e,t),wa.set(t,e),t},Xk=function(e,t){jl=t+1,Dl.set(e,t),wa.set(t,e)},Ff=Object.freeze([]),gi=Object.freeze({});function Jk(e,t,n){return n===void 0&&(n=gi),e.theme!==n.theme&&e.theme||t||n.theme}var Yv=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Zk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eb=/(^-|-$)/g;function Bp(e){return e.replace(Zk,"-").replace(eb,"")}var tb=/(a)(d)/gi,Up=function(e){return String.fromCharCode(e+(e>25?39:97))};function fc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Up(t%52)+n;return(Up(t%52)+n).replace(tb,"$1-$2")}var Bs,or=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},qv=function(e){return or(5381,e)};function nb(e){return fc(qv(e)>>>0)}function rb(e){return e.displayName||e.name||"Component"}function Us(e){return typeof e=="string"&&!0}var Kv=typeof Symbol=="function"&&Symbol.for,Xv=Kv?Symbol.for("react.memo"):60115,ib=Kv?Symbol.for("react.forward_ref"):60112,ob={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ab=((Bs={})[ib]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bs[Xv]=Jv,Bs);function Hp(e){return("type"in(t=e)&&t.type.$$typeof)===Xv?Jv:"$$typeof"in e?ab[e.$$typeof]:ob;var t}var sb=Object.defineProperty,ub=Object.getOwnPropertyNames,Vp=Object.getOwnPropertySymbols,cb=Object.getOwnPropertyDescriptor,fb=Object.getPrototypeOf,Wp=Object.prototype;function Zv(e,t,n){if(typeof t!="string"){if(Wp){var r=fb(t);r&&r!==Wp&&Zv(e,r,n)}var i=ub(t);Vp&&(i=i.concat(Vp(t)));for(var o=Hp(e),l=Hp(t),a=0;a<i.length;++a){var s=i[a];if(!(s in lb||n&&n[s]||l&&s in l||o&&s in o)){var u=cb(t,s);try{sb(e,s,u)}catch{}}}}return e}function mi(e){return typeof e=="function"}function Mf(e){return typeof e=="object"&&"styledComponentId"in e}function pr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Gp(e,t){return e.join("")}function jo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function dc(e,t,n){if(n===void 0&&(n=!1),!n&&!jo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=dc(e[r],t[r]);else if(jo(t))for(var r in t)e[r]=dc(e[r],t[r]);return e}function e1(e,t){Object.defineProperty(e,"toString",{value:t})}var db=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw es(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=0,u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+=this.tag.getRule(l)+jf;return n},e}(),pb="style[".concat(hi,"][").concat(Qv,'="').concat(Za,'"]'),hb=new RegExp("^".concat(hi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qp=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},pc=function(e){if(!e)return document;if(Qp(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(Qp(t))return t}return document},gb=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},mb=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(jf),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(hb);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(Xk(f,u),gb(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Hs=function(e){for(var t=pc(e.options.target).querySelectorAll(pb),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(hi)!==Gv&&(mb(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function vb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var t1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(hi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(hi,Gv),r.setAttribute(Qv,Za);var l=vb();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},yb=function(){function e(t){this.element=t1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,l=i.length;o<l;o++){var a=i[o];if(a.ownerNode===n)return a}throw es(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),xb=function(){function e(t){this.element=t1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wb=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Yp=co,kb={isServer:!co,useCSSOMInjection:!Kk},n1=function(){function e(t,n,r){t===void 0&&(t=gi),n===void 0&&(n={});var i=this;this.options=ft(ft({},kb),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&co&&Yp&&(Yp=!1,Hs(this)),e1(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(c){var d=function(h){return wa.get(h)}(c);if(d===void 0)return"continue";var p=o.names.get(d);if(p===void 0||!p.size)return"continue";var g=l.getGroup(c);if(g.length===0)return"continue";var y=hi+".g"+c+'[id="'+d+'"]',$="";p.forEach(function(h){h.length>0&&($+=h+",")}),s+=g+y+'{content:"'+$+'"}'+jf},f=0;f<a;f++)u(f);return s}(i)})}return e.registerId=function(t){return Ki(t)},e.prototype.rehydrate=function(){!this.server&&co&&Hs(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(ft(ft({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&co&&t.target!==this.options.target&&pc(this.options.target)!==pc(t.target)&&Hs(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new wb(i):r?new yb(i):new xb(i)}(this.options),new db(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ki(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ki(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ki(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}();function bb(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in _k||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Sb=function(e){return e>="A"&&e<="Z"};function qp(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Sb(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cb=Symbol.for("sc-keyframes");function Eb(e){return typeof e=="object"&&e!==null&&Cb in e}var r1=function(e){return e==null||e===!1||e===""},i1=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!r1(r)&&(Array.isArray(r)&&r.isCss||mi(r)?t.push("".concat(qp(n),":"),r,";"):jo(r)?t.push.apply(t,ya(ya(["".concat(n," {")],i1(r),!1),["}"],!1)):t.push("".concat(qp(n),": ").concat(bb(n,r),";")))}return t};function vr(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(r1(e))return i;if(Mf(e))return i.push(".".concat(e.styledComponentId)),i;if(mi(e)){if(!mi(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return vr(o,t,n,r,i)}var l;if(Eb(e))return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(jo(e)){for(var a=i1(e),s=0;s<a.length;s++)i.push(a[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)vr(e[s],t,n,r,i);return i}function $b(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(mi(n)&&!Mf(n))return!1}return!0}var zb=qv(Za),Pb=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$b(t),this.componentId=n,this.baseHash=or(zb,n),this.baseStyle=r,n1.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=pr(i,this.staticRulesId);else{var o=Gp(vr(this.rules,t,n,r)),l=fc(or(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=pr(i,l),this.staticRulesId=l}else{for(var s=or(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")u+=c;else if(c){var d=Gp(vr(c,t,n,r));s=or(or(s,String(f)),d),u+=d}}if(u){var p=fc(s>>>0);if(!n.hasNameForId(this.componentId,p)){var g=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,g)}i=pr(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ki(this.componentId)):""}},e}(),Ib=/&/g,dn=47,lr=42;function Kp(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(r!==0||i||l!==dn||e.charCodeAt(o+1)!==lr)if(i)l===lr&&e.charCodeAt(o+1)===dn&&(i=!1,o++);else if(l!==34&&l!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,o++}return n!==0||r!==0}function o1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=o1(n.children,t)),n})}function _b(e){var t,n,r,i=gi,o=i.options,l=o===void 0?gi:o,a=i.plugins,s=a===void 0?Ff:a,u=function(g,y,$){return $.startsWith(n)&&$.endsWith(n)&&$.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===qa&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(Ib,n).replace(r,u))}),l.prefix&&f.push(qk),f.push(Gk);var c=[],d=Qk(f.concat(Yk(function(g){return c.push(g)}))),p=function(g,y,$,h){y===void 0&&(y=""),$===void 0&&($=""),h===void 0&&(h="&"),t=h,n=y,r=void 0;var m=function(w){if(!Kp(w))return w;for(var P=w.length,k="",b=0,z=0,R=0,E=!1,I=0;I<P;I++){var O=w.charCodeAt(I);if(R!==0||E||O!==dn||w.charCodeAt(I+1)!==lr)if(E)O===lr&&w.charCodeAt(I+1)===dn&&(E=!1,I++);else if(O!==34&&O!==39||I!==0&&w.charCodeAt(I-1)===92){if(R===0)if(O===123)z++;else if(O===125){if(--z<0){for(var V=I+1;V<P;){var H=w.charCodeAt(V);if(H===59||H===10)break;V++}V<P&&w.charCodeAt(V)===59&&V++,z=0,I=V-1,b=V;continue}z===0&&(k+=w.substring(b,I+1),b=I+1)}else O===59&&z===0&&(k+=w.substring(b,I+1),b=I+1)}else R===0?R=O:R===O&&(R=0);else E=!0,I++}if(b<P){var Y=w.substring(b);Kp(Y)||(k+=Y)}return k}(function(w){if(w.indexOf("//")===-1)return w;for(var P=w.length,k=[],b=0,z=0,R=0,E=0;z<P;){var I=w.charCodeAt(z);if(I!==34&&I!==39||z!==0&&w.charCodeAt(z-1)===92)if(R===0)if(I===dn&&z+1<P&&w.charCodeAt(z+1)===lr){for(z+=2;z+1<P&&(w.charCodeAt(z)!==lr||w.charCodeAt(z+1)!==dn);)z++;z+=2}else if(I===40&&z>=3&&(32|w.charCodeAt(z-1))==108&&(32|w.charCodeAt(z-2))==114&&(32|w.charCodeAt(z-3))==117)E=1,z++;else if(E>0)I===41?E--:I===40&&E++,z++;else if(I===lr&&z+1<P&&w.charCodeAt(z+1)===dn)z>b&&k.push(w.substring(b,z)),b=z+=2;else if(I===dn&&z+1<P&&w.charCodeAt(z+1)===dn){for(z>b&&k.push(w.substring(b,z));z<P&&w.charCodeAt(z)!==10;)z++;b=z}else z++;else z++;else R===0?R=I:R===I&&(R=0),z++}return b===0?w:(b<P&&k.push(w.substring(b)),k.join(""))}(g)),v=Vk($||y?"".concat($," ").concat(y," { ").concat(m," }"):m);return l.namespace&&(v=o1(v,l.namespace)),c=[],xa(v,d),c};return p.hash=s.length?s.reduce(function(g,y){return y.name||es(15),or(g,y.name)},5381).toString():"",p}var Tb=new n1,Ab=_b(),l1=Oe.createContext({shouldForwardProp:void 0,styleSheet:Tb,stylis:Ab});l1.Consumer;Oe.createContext(void 0);function Xp(){return Oe.useContext(l1)}var a1=Oe.createContext(void 0);a1.Consumer;var Vs={};function Rb(e,t,n){var r=Mf(e),i=e,o=!Us(e),l=t.attrs,a=l===void 0?Ff:l,s=t.componentId,u=s===void 0?function(w,P){var k=typeof w!="string"?"sc":Bp(w);Vs[k]=(Vs[k]||0)+1;var b="".concat(k,"-").concat(nb(Za+k+Vs[k]));return P?"".concat(P,"-").concat(b):b}(t.displayName,t.parentComponentId):s,f=t.displayName,c=f===void 0?function(w){return Us(w)?"styled.".concat(w):"Styled(".concat(rb(w),")")}(e):f,d=t.displayName&&t.componentId?"".concat(Bp(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;g=function(w,P){return y(w,P)&&$(w,P)}}else g=y}var h=new Pb(n,d,r?i.componentStyle:void 0);function m(w,P){return function(k,b,z){var R=k.attrs,E=k.componentStyle,I=k.defaultProps,O=k.foldedComponentIds,V=k.styledComponentId,H=k.target,Y=Oe.useContext(a1),de=Xp(),se=k.shouldForwardProp||de.shouldForwardProp,D=Jk(b,Y,I)||gi,B=function(ne,M,q){for(var te,he=ft(ft({},M),{className:void 0,theme:q}),lt=0;lt<ne.length;lt+=1){var Dt=mi(te=ne[lt])?te(he):te;for(var We in Dt)We==="className"?he.className=pr(he.className,Dt[We]):We==="style"?he.style=ft(ft({},he.style),Dt[We]):We in M&&M[We]===void 0||(he[We]=Dt[We])}return"className"in M&&typeof M.className=="string"&&(he.className=pr(he.className,M.className)),he}(R,b,D),x=B.as||H,Q={};for(var G in B)B[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&B.theme===D||(G==="forwardedAs"?Q.as=B.forwardedAs:se&&!se(G,x)||(Q[G]=B[G]));var S=function(ne,M){var q=Xp(),te=ne.generateAndInjectStyles(M,q.styleSheet,q.stylis);return te}(E,B),ge=S.className,_e=pr(O,V);return ge&&(_e+=" "+ge),B.className&&(_e+=" "+B.className),Q[Us(x)&&!Yv.has(x)?"class":"className"]=_e,z&&(Q.ref=z),T.createElement(x,Q)}(v,w,P)}m.displayName=c;var v=Oe.forwardRef(m);return v.attrs=p,v.componentStyle=h,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?pr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];for(var z=0,R=k;z<R.length;z++)dc(P,R[z],!0);return P}({},i.defaultProps,w):w}}),e1(v,function(){return".".concat(v.styledComponentId)}),o&&Zv(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Jp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Zp=function(e){return Object.assign(e,{isCss:!0})};function Lb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(mi(e)||jo(e))return Zp(vr(Jp(Ff,ya([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?vr(r):Zp(vr(Jp(r,t)))}function hc(e,t,n){if(n===void 0&&(n=gi),!t)throw es(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Lb.apply(void 0,ya([i],o,!1)))};return r.attrs=function(i){return hc(e,t,ft(ft({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return hc(e,t,ft(ft({},n),i))},r}var s1=function(e){return hc(Rb,e)},Ce=s1;Yv.forEach(function(e){Ce[e]=s1(e)});function Nb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Ob=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Db=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,jb={};function eh(e,t){return(jb.jsx?Db:Ob).test(e)}const Fb=/[ \t\n\f\r]/g;function Mb(e){return typeof e=="object"?e.type==="text"?th(e.value):!1:th(e)}function th(e){return e.replace(Fb,"")===""}class Ko{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ko.prototype.normal={};Ko.prototype.property={};Ko.prototype.space=void 0;function u1(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ko(n,r,t)}function gc(e){return e.toLowerCase()}class gt{constructor(t,n){this.attribute=n,this.property=t}}gt.prototype.attribute="";gt.prototype.booleanish=!1;gt.prototype.boolean=!1;gt.prototype.commaOrSpaceSeparated=!1;gt.prototype.commaSeparated=!1;gt.prototype.defined=!1;gt.prototype.mustUseProperty=!1;gt.prototype.number=!1;gt.prototype.overloadedBoolean=!1;gt.prototype.property="";gt.prototype.spaceSeparated=!1;gt.prototype.space=void 0;let Bb=0;const J=Rr(),Ae=Rr(),mc=Rr(),N=Rr(),ye=Rr(),ii=Rr(),vt=Rr();function Rr(){return 2**++Bb}const vc=Object.freeze(Object.defineProperty({__proto__:null,boolean:J,booleanish:Ae,commaOrSpaceSeparated:vt,commaSeparated:ii,number:N,overloadedBoolean:mc,spaceSeparated:ye},Symbol.toStringTag,{value:"Module"})),Ws=Object.keys(vc);class Bf extends gt{constructor(t,n,r,i){let o=-1;if(super(t,n),nh(this,"space",i),typeof r=="number")for(;++o<Ws.length;){const l=Ws[o];nh(this,Ws[o],(r&vc[l])===vc[l])}}}Bf.prototype.defined=!0;function nh(e,t,n){n&&(e[t]=n)}function zi(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Bf(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[gc(r)]=r,n[gc(o.attribute)]=r}return new Ko(t,n,e.space)}const c1=zi({properties:{ariaActiveDescendant:null,ariaAtomic:Ae,ariaAutoComplete:null,ariaBusy:Ae,ariaChecked:Ae,ariaColCount:N,ariaColIndex:N,ariaColSpan:N,ariaControls:ye,ariaCurrent:null,ariaDescribedBy:ye,ariaDetails:null,ariaDisabled:Ae,ariaDropEffect:ye,ariaErrorMessage:null,ariaExpanded:Ae,ariaFlowTo:ye,ariaGrabbed:Ae,ariaHasPopup:null,ariaHidden:Ae,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ye,ariaLevel:N,ariaLive:null,ariaModal:Ae,ariaMultiLine:Ae,ariaMultiSelectable:Ae,ariaOrientation:null,ariaOwns:ye,ariaPlaceholder:null,ariaPosInSet:N,ariaPressed:Ae,ariaReadOnly:Ae,ariaRelevant:null,ariaRequired:Ae,ariaRoleDescription:ye,ariaRowCount:N,ariaRowIndex:N,ariaRowSpan:N,ariaSelected:Ae,ariaSetSize:N,ariaSort:null,ariaValueMax:N,ariaValueMin:N,ariaValueNow:N,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function f1(e,t){return t in e?e[t]:t}function d1(e,t){return f1(e,t.toLowerCase())}const Ub=zi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ii,acceptCharset:ye,accessKey:ye,action:null,allow:null,allowFullScreen:J,allowPaymentRequest:J,allowUserMedia:J,alt:null,as:null,async:J,autoCapitalize:null,autoComplete:ye,autoFocus:J,autoPlay:J,blocking:ye,capture:null,charSet:null,checked:J,cite:null,className:ye,cols:N,colSpan:null,content:null,contentEditable:Ae,controls:J,controlsList:ye,coords:N|ii,crossOrigin:null,data:null,dateTime:null,decoding:null,default:J,defer:J,dir:null,dirName:null,disabled:J,download:mc,draggable:Ae,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:J,formTarget:null,headers:ye,height:N,hidden:mc,high:N,href:null,hrefLang:null,htmlFor:ye,httpEquiv:ye,id:null,imageSizes:null,imageSrcSet:null,inert:J,inputMode:null,integrity:null,is:null,isMap:J,itemId:null,itemProp:ye,itemRef:ye,itemScope:J,itemType:ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:J,low:N,manifest:null,max:null,maxLength:N,media:null,method:null,min:null,minLength:N,multiple:J,muted:J,name:null,nonce:null,noModule:J,noValidate:J,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:J,optimum:N,pattern:null,ping:ye,placeholder:null,playsInline:J,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:J,referrerPolicy:null,rel:ye,required:J,reversed:J,rows:N,rowSpan:N,sandbox:ye,scope:null,scoped:J,seamless:J,selected:J,shadowRootClonable:J,shadowRootDelegatesFocus:J,shadowRootMode:null,shape:null,size:N,sizes:null,slot:null,span:N,spellCheck:Ae,src:null,srcDoc:null,srcLang:null,srcSet:null,start:N,step:null,style:null,tabIndex:N,target:null,title:null,translate:null,type:null,typeMustMatch:J,useMap:null,value:Ae,width:N,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ye,axis:null,background:null,bgColor:null,border:N,borderColor:null,bottomMargin:N,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:J,declare:J,event:null,face:null,frame:null,frameBorder:null,hSpace:N,leftMargin:N,link:null,longDesc:null,lowSrc:null,marginHeight:N,marginWidth:N,noResize:J,noHref:J,noShade:J,noWrap:J,object:null,profile:null,prompt:null,rev:null,rightMargin:N,rules:null,scheme:null,scrolling:Ae,standby:null,summary:null,text:null,topMargin:N,valueType:null,version:null,vAlign:null,vLink:null,vSpace:N,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:J,disableRemotePlayback:J,prefix:null,property:null,results:N,security:null,unselectable:null},space:"html",transform:d1}),Hb=zi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:vt,accentHeight:N,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:N,amplitude:N,arabicForm:null,ascent:N,attributeName:null,attributeType:null,azimuth:N,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:N,by:null,calcMode:null,capHeight:N,className:ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:N,diffuseConstant:N,direction:null,display:null,dur:null,divisor:N,dominantBaseline:null,download:J,dx:null,dy:null,edgeMode:null,editable:null,elevation:N,enableBackground:null,end:null,event:null,exponent:N,externalResourcesRequired:null,fill:null,fillOpacity:N,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ii,g2:ii,glyphName:ii,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:N,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:N,horizOriginX:N,horizOriginY:N,id:null,ideographic:N,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:N,k:N,k1:N,k2:N,k3:N,k4:N,kernelMatrix:vt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:N,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:N,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:N,overlineThickness:N,paintOrder:null,panose1:null,path:null,pathLength:N,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:N,pointsAtY:N,pointsAtZ:N,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:vt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:vt,rev:vt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:vt,requiredFeatures:vt,requiredFonts:vt,requiredFormats:vt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:N,specularExponent:N,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:N,strikethroughThickness:N,string:null,stroke:null,strokeDashArray:vt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:N,strokeOpacity:N,strokeWidth:null,style:null,surfaceScale:N,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:vt,tabIndex:N,tableValues:null,target:null,targetX:N,targetY:N,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:vt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:N,underlineThickness:N,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:N,values:null,vAlphabetic:N,vMathematical:N,vectorEffect:null,vHanging:N,vIdeographic:N,version:null,vertAdvY:N,vertOriginX:N,vertOriginY:N,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:N,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:f1}),p1=zi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),h1=zi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:d1}),g1=zi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Vb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Wb=/[A-Z]/g,rh=/-[a-z]/g,Gb=/^data[-\w.:]+$/i;function Qb(e,t){const n=gc(t);let r=t,i=gt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Gb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(rh,qb);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!rh.test(o)){let l=o.replace(Wb,Yb);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=Bf}return new i(r,t)}function Yb(e){return"-"+e.toLowerCase()}function qb(e){return e.charAt(1).toUpperCase()}const Kb=u1([c1,Ub,p1,h1,g1],"html"),Uf=u1([c1,Hb,p1,h1,g1],"svg");function Xb(e){return e.join(" ").trim()}var Hf={},ih=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Jb=/\n/g,Zb=/^\s*/,eS=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,tS=/^:\s*/,nS=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,rS=/^[;\s]*/,iS=/^\s+|\s+$/g,oS=`
`,oh="/",lh="*",ar="",lS="comment",aS="declaration";function sS(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var y=g.match(Jb);y&&(n+=y.length);var $=g.lastIndexOf(oS);r=~$?g.length-$:r+g.length}function o(){var g={line:n,column:r};return function(y){return y.position=new l(g),u(),y}}function l(g){this.start=g,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(g){var y=new Error(t.source+":"+n+":"+r+": "+g);if(y.reason=g,y.filename=t.source,y.line=n,y.column=r,y.source=e,!t.silent)throw y}function s(g){var y=g.exec(e);if(y){var $=y[0];return i($),e=e.slice($.length),y}}function u(){s(Zb)}function f(g){var y;for(g=g||[];y=c();)y!==!1&&g.push(y);return g}function c(){var g=o();if(!(oh!=e.charAt(0)||lh!=e.charAt(1))){for(var y=2;ar!=e.charAt(y)&&(lh!=e.charAt(y)||oh!=e.charAt(y+1));)++y;if(y+=2,ar===e.charAt(y-1))return a("End of comment missing");var $=e.slice(2,y-2);return r+=2,i($),e=e.slice(y),r+=2,g({type:lS,comment:$})}}function d(){var g=o(),y=s(eS);if(y){if(c(),!s(tS))return a("property missing ':'");var $=s(nS),h=g({type:aS,property:ah(y[0].replace(ih,ar)),value:$?ah($[0].replace(ih,ar)):ar});return s(rS),h}}function p(){var g=[];f(g);for(var y;y=d();)y!==!1&&(g.push(y),f(g));return g}return u(),p()}function ah(e){return e?e.replace(iS,ar):ar}var uS=sS,cS=Gl&&Gl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hf,"__esModule",{value:!0});Hf.default=dS;const fS=cS(uS);function dS(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,fS.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:l,value:a}=o;i?t(l,a,o):a&&(n=n||{},n[l]=a)}),n}var ts={};Object.defineProperty(ts,"__esModule",{value:!0});ts.camelCase=void 0;var pS=/^--[a-zA-Z0-9_-]+$/,hS=/-([a-z])/g,gS=/^[^-]+$/,mS=/^-(webkit|moz|ms|o|khtml)-/,vS=/^-(ms)-/,yS=function(e){return!e||gS.test(e)||pS.test(e)},xS=function(e,t){return t.toUpperCase()},sh=function(e,t){return"".concat(t,"-")},wS=function(e,t){return t===void 0&&(t={}),yS(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(vS,sh):e=e.replace(mS,sh),e.replace(hS,xS))};ts.camelCase=wS;var kS=Gl&&Gl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},bS=kS(Hf),SS=ts;function yc(e,t){var n={};return!e||typeof e!="string"||(0,bS.default)(e,function(r,i){r&&i&&(n[(0,SS.camelCase)(r,t)]=i)}),n}yc.default=yc;var CS=yc;const ES=Dc(CS),m1=v1("end"),Vf=v1("start");function v1(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function $S(e){const t=Vf(e),n=m1(e);if(t&&n)return{start:t,end:n}}function fo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?uh(e.position):"start"in e||"end"in e?uh(e):"line"in e||"column"in e?xc(e):""}function xc(e){return ch(e&&e.line)+":"+ch(e&&e.column)}function uh(e){return xc(e&&e.start)+"-"+xc(e&&e.end)}function ch(e){return e&&typeof e=="number"?e:1}class et extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?o.ruleId=r:(o.source=r.slice(0,s),o.ruleId=r.slice(s+1))}if(!o.place&&o.ancestors&&o.ancestors){const s=o.ancestors[o.ancestors.length-1];s&&(o.place=s.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=fo(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}et.prototype.file="";et.prototype.name="";et.prototype.reason="";et.prototype.message="";et.prototype.stack="";et.prototype.column=void 0;et.prototype.line=void 0;et.prototype.ancestors=void 0;et.prototype.cause=void 0;et.prototype.fatal=void 0;et.prototype.place=void 0;et.prototype.ruleId=void 0;et.prototype.source=void 0;const Wf={}.hasOwnProperty,zS=new Map,PS=/[A-Z]/g,IS=new Set(["table","tbody","thead","tfoot","tr"]),_S=new Set(["td","th"]),y1="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function TS(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=FS(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=jS(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Uf:Kb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=x1(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function x1(e,t,n){if(t.type==="element")return AS(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return RS(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return NS(e,t,n);if(t.type==="mdxjsEsm")return LS(e,t);if(t.type==="root")return OS(e,t,n);if(t.type==="text")return DS(e,t)}function AS(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Uf,e.schema=i),e.ancestors.push(t);const o=k1(e,t.tagName,!1),l=MS(e,t);let a=Qf(e,t);return IS.has(t.tagName)&&(a=a.filter(function(s){return typeof s=="string"?!Mb(s):!0})),w1(e,l,o,t),Gf(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function RS(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Fo(e,t.position)}function LS(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Fo(e,t.position)}function NS(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Uf,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:k1(e,t.name,!0),l=BS(e,t),a=Qf(e,t);return w1(e,l,o,t),Gf(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function OS(e,t,n){const r={};return Gf(r,Qf(e,t)),e.create(t,e.Fragment,r,n)}function DS(e,t){return t.value}function w1(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Gf(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function jS(e,t,n){return r;function r(i,o,l,a){const u=Array.isArray(l.children)?n:t;return a?u(o,l,a):u(o,l)}}function FS(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),s=Vf(r);return t(i,o,l,a,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function MS(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Wf.call(t.properties,i)){const o=US(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&_S.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function BS(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Fo(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else Fo(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Qf(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:zS;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const s=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(s){const u=i.get(s)||0;l=s+"-"+u,i.set(s,u+1)}}const a=x1(e,o,l);a!==void 0&&n.push(a)}return n}function US(e,t,n){const r=Qb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Nb(n):Xb(n)),r.property==="style"){let i=typeof n=="object"?n:HS(e,String(n));return e.stylePropertyNameCase==="css"&&(i=VS(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Vb[r.property]||r.property:r.attribute,n]}}function HS(e,t){try{return ES(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new et("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=y1+"#cannot-parse-style-attribute",i}}function k1(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=eh(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=eh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Wf.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Fo(e)}function Fo(e,t){const n=new et("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=y1+"#cannot-handle-mdx-estrees-without-createevaluater",n}function VS(e){const t={};let n;for(n in e)Wf.call(e,n)&&(t[WS(n)]=e[n]);return t}function WS(e){let t=e.replace(PS,GS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function GS(e){return"-"+e.toLowerCase()}const Gs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},QS={};function Yf(e,t){const n=QS,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return b1(e,r,i)}function b1(e,t,n){if(YS(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return fh(e.children,t,n)}return Array.isArray(e)?fh(e,t,n):""}function fh(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=b1(e[i],t,n);return r.join("")}function YS(e){return!!(e&&typeof e=="object")}const dh=document.createElement("i");function qf(e){const t="&"+e+";";dh.innerHTML=t;const n=dh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function St(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function _t(e,t){return e.length>0?(St(e,e.length,0,t),e):t}const ph={}.hasOwnProperty;function S1(e){const t={};let n=-1;for(;++n<e.length;)qS(t,e[n]);return t}function qS(e,t){let n;for(n in t){const i=(ph.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){ph.call(i,l)||(i[l]=[]);const a=o[l];KS(i[l],Array.isArray(a)?a:a?[a]:[])}}}function KS(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);St(e,0,0,r)}function C1(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function qt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const nt=er(/[A-Za-z]/),Je=er(/[\dA-Za-z]/),XS=er(/[#-'*+\--9=?A-Z^-~]/);function ka(e){return e!==null&&(e<32||e===127)}const wc=er(/\d/),JS=er(/[\dA-Fa-f]/),ZS=er(/[!-/:-@[-`{-~]/);function W(e){return e!==null&&e<-2}function ve(e){return e!==null&&(e<0||e===32)}function re(e){return e===-2||e===-1||e===32}const ns=er(new RegExp("\\p{P}|\\p{S}","u")),Cr=er(/\s/);function er(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Pi(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&Je(e.charCodeAt(n+1))&&Je(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function le(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(s){return re(s)?(e.enter(n),a(s)):t(s)}function a(s){return re(s)&&o++<i?(e.consume(s),a):(e.exit(n),t(s))}}const eC={tokenize:tC};function tC(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),le(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return W(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const nC={tokenize:rC},hh={tokenize:iC};function rC(e){const t=this,n=[];let r=0,i,o,l;return a;function a(v){if(r<n.length){const w=n[r];return t.containerState=w[1],e.attempt(w[0].continuation,s,u)(v)}return u(v)}function s(v){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const w=t.events.length;let P=w,k;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){k=t.events[P][1].end;break}h(r);let b=w;for(;b<t.events.length;)t.events[b][1].end={...k},b++;return St(t.events,P+1,0,t.events.slice(w)),t.events.length=b,u(v)}return a(v)}function u(v){if(r===n.length){if(!i)return d(v);if(i.currentConstruct&&i.currentConstruct.concrete)return g(v);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(hh,f,c)(v)}function f(v){return i&&m(),h(r),d(v)}function c(v){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,g(v)}function d(v){return t.containerState={},e.attempt(hh,p,g)(v)}function p(v){return r++,n.push([t.currentConstruct,t.containerState]),d(v)}function g(v){if(v===null){i&&m(),h(0),e.consume(v);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),y(v)}function y(v){if(v===null){$(e.exit("chunkFlow"),!0),h(0),e.consume(v);return}return W(v)?(e.consume(v),$(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(v),y)}function $(v,w){const P=t.sliceStream(v);if(w&&P.push(null),v.previous=o,o&&(o.next=v),o=v,i.defineSkip(v.start),i.write(P),t.parser.lazy[v.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<l&&(!i.events[k][1].end||i.events[k][1].end.offset>l))return;const b=t.events.length;let z=b,R,E;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){if(R){E=t.events[z][1].end;break}R=!0}for(h(r),k=b;k<t.events.length;)t.events[k][1].end={...E},k++;St(t.events,z+1,0,t.events.slice(b)),t.events.length=k}}function h(v){let w=n.length;for(;w-- >v;){const P=n[w];t.containerState=P[1],P[0].exit.call(t,e)}n.length=v}function m(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function iC(e,t,n){return le(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function vi(e){if(e===null||ve(e)||Cr(e))return 1;if(ns(e))return 2}function rs(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const kc={name:"attention",resolveAll:oC,tokenize:lC};function oC(e,t){let n=-1,r,i,o,l,a,s,u,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},d={...e[n][1].start};gh(c,-s),gh(d,s),l={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:d},o={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=_t(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=_t(u,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),u=_t(u,rs(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=_t(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,u=_t(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,St(e,r-1,n-r+3,u),n=r+u.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function lC(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=vi(r);let o;return l;function l(s){return o=s,e.enter("attentionSequence"),a(s)}function a(s){if(s===o)return e.consume(s),a;const u=e.exit("attentionSequence"),f=vi(s),c=!f||f===2&&i||n.includes(s),d=!i||i===2&&f||n.includes(r);return u._open=!!(o===42?c:c&&(i||!d)),u._close=!!(o===42?d:d&&(f||!c)),t(s)}}function gh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const aC={name:"autolink",tokenize:sC};function sC(e,t,n){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(p){return nt(p)?(e.consume(p),l):p===64?n(p):u(p)}function l(p){return p===43||p===45||p===46||Je(p)?(r=1,a(p)):u(p)}function a(p){return p===58?(e.consume(p),r=0,s):(p===43||p===45||p===46||Je(p))&&r++<32?(e.consume(p),a):(r=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||ka(p)?n(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),f):XS(p)?(e.consume(p),u):n(p)}function f(p){return Je(p)?c(p):n(p)}function c(p){return p===46?(e.consume(p),r=0,f):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):d(p)}function d(p){if((p===45||Je(p))&&r++<63){const g=p===45?d:c;return e.consume(p),g}return n(p)}}const Xo={partial:!0,tokenize:uC};function uC(e,t,n){return r;function r(o){return re(o)?le(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||W(o)?t(o):n(o)}}const E1={continuation:{tokenize:fC},exit:dC,name:"blockQuote",tokenize:cC};function cC(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return re(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function fC(e,t,n){const r=this;return i;function i(l){return re(l)?le(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(E1,t,n)(l)}}function dC(e){e.exit("blockQuote")}const $1={name:"characterEscape",tokenize:pC};function pC(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return ZS(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const z1={name:"characterReference",tokenize:hC};function hC(e,t,n){const r=this;let i=0,o,l;return a;function a(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),s}function s(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,l=Je,f(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=JS,f):(e.enter("characterReferenceValue"),o=7,l=wc,f(c))}function f(c){if(c===59&&i){const d=e.exit("characterReferenceValue");return l===Je&&!qf(r.sliceSerialize(d))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(c)&&i++<o?(e.consume(c),f):n(c)}}const mh={partial:!0,tokenize:mC},vh={concrete:!0,name:"codeFenced",tokenize:gC};function gC(e,t,n){const r=this,i={partial:!0,tokenize:P};let o=0,l=0,a;return s;function s(k){return u(k)}function u(k){const b=r.events[r.events.length-1];return o=b&&b[1].type==="linePrefix"?b[2].sliceSerialize(b[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(k)}function f(k){return k===a?(l++,e.consume(k),f):l<3?n(k):(e.exit("codeFencedFenceSequence"),re(k)?le(e,c,"whitespace")(k):c(k))}function c(k){return k===null||W(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(mh,y,w)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(k))}function d(k){return k===null||W(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(k)):re(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),le(e,p,"whitespace")(k)):k===96&&k===a?n(k):(e.consume(k),d)}function p(k){return k===null||W(k)?c(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(k))}function g(k){return k===null||W(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(k)):k===96&&k===a?n(k):(e.consume(k),g)}function y(k){return e.attempt(i,w,$)(k)}function $(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),h}function h(k){return o>0&&re(k)?le(e,m,"linePrefix",o+1)(k):m(k)}function m(k){return k===null||W(k)?e.check(mh,y,w)(k):(e.enter("codeFlowValue"),v(k))}function v(k){return k===null||W(k)?(e.exit("codeFlowValue"),m(k)):(e.consume(k),v)}function w(k){return e.exit("codeFenced"),t(k)}function P(k,b,z){let R=0;return E;function E(Y){return k.enter("lineEnding"),k.consume(Y),k.exit("lineEnding"),I}function I(Y){return k.enter("codeFencedFence"),re(Y)?le(k,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Y):O(Y)}function O(Y){return Y===a?(k.enter("codeFencedFenceSequence"),V(Y)):z(Y)}function V(Y){return Y===a?(R++,k.consume(Y),V):R>=l?(k.exit("codeFencedFenceSequence"),re(Y)?le(k,H,"whitespace")(Y):H(Y)):z(Y)}function H(Y){return Y===null||W(Y)?(k.exit("codeFencedFence"),b(Y)):z(Y)}}}function mC(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const Qs={name:"codeIndented",tokenize:yC},vC={partial:!0,tokenize:xC};function yC(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),le(e,o,"linePrefix",5)(u)}function o(u){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?s(u):W(u)?e.attempt(vC,l,s)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||W(u)?(e.exit("codeFlowValue"),l(u)):(e.consume(u),a)}function s(u){return e.exit("codeIndented"),t(u)}}function xC(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):W(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):le(e,o,"linePrefix",5)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):W(l)?i(l):n(l)}}const wC={name:"codeText",previous:bC,resolve:kC,tokenize:SC};function kC(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function bC(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function SC(e,t,n){let r=0,i,o;return l;function l(c){return e.enter("codeText"),e.enter("codeTextSequence"),a(c)}function a(c){return c===96?(e.consume(c),r++,a):(e.exit("codeTextSequence"),s(c))}function s(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),s):c===96?(o=e.enter("codeTextSequence"),i=0,f(c)):W(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||W(c)?(e.exit("codeTextData"),s(c)):(e.consume(c),u)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(o.type="codeTextData",u(c))}}class CC{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ui(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ui(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ui(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ui(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ui(this.left,n.reverse())}}}function Ui(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function P1(e){const t={};let n=-1,r,i,o,l,a,s,u;const f=new CC(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,o=0,o<s.length&&s[o][1].type==="lineEndingBlank"&&(o+=2),o<s.length&&s[o][1].type==="content"))for(;++o<s.length&&s[o][1].type!=="content";)s[o][1].type==="chunkText"&&(s[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,EC(f,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(l=f.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},a=f.slice(i,n),a.unshift(r),f.splice(i,n-i+1,a))}}return St(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!u}function EC(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,s=[],u={};let f,c,d=-1,p=n,g=0,y=0;const $=[y];for(;p;){for(;e.get(++i)[1]!==p;);o.push(i),p._tokenizer||(f=r.sliceStream(p),p.next||f.push(null),c&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(f),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),c=p,p=p.next}for(p=n;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(y=d+1,$.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):$.pop(),d=$.length;d--;){const h=a.slice($[d],$[d+1]),m=o.pop();s.push([m,m+h.length-1]),e.splice(m,2,h)}for(s.reverse(),d=-1;++d<s.length;)u[g+s[d][0]]=g+s[d][1],g+=s[d][1]-s[d][0]-1;return u}const $C={resolve:PC,tokenize:IC},zC={partial:!0,tokenize:_C};function PC(e){return P1(e),e}function IC(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):W(a)?e.check(zC,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function _C(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),le(e,o,"linePrefix")}function o(l){if(l===null||W(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function I1(e,t,n,r,i,o,l,a,s){const u=s||Number.POSITIVE_INFINITY;let f=0;return c;function c(h){return h===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(h),e.exit(o),d):h===null||h===32||h===41||ka(h)?n(h):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),y(h))}function d(h){return h===62?(e.enter(o),e.consume(h),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===62?(e.exit("chunkString"),e.exit(a),d(h)):h===null||h===60||W(h)?n(h):(e.consume(h),h===92?g:p)}function g(h){return h===60||h===62||h===92?(e.consume(h),p):p(h)}function y(h){return!f&&(h===null||h===41||ve(h))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(h)):f<u&&h===40?(e.consume(h),f++,y):h===41?(e.consume(h),f--,y):h===null||h===32||h===40||ka(h)?n(h):(e.consume(h),h===92?$:y)}function $(h){return h===40||h===41||h===92?(e.consume(h),y):y(h)}}function _1(e,t,n,r,i,o){const l=this;let a=0,s;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(o),f}function f(p){return a>999||p===null||p===91||p===93&&!s||p===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(p):p===93?(e.exit(o),e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):W(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(p))}function c(p){return p===null||p===91||p===93||W(p)||a++>999?(e.exit("chunkString"),f(p)):(e.consume(p),s||(s=!re(p)),p===92?d:c)}function d(p){return p===91||p===92||p===93?(e.consume(p),a++,c):c(p)}}function T1(e,t,n,r,i,o){let l;return a;function a(d){return d===34||d===39||d===40?(e.enter(r),e.enter(i),e.consume(d),e.exit(i),l=d===40?41:d,s):n(d)}function s(d){return d===l?(e.enter(i),e.consume(d),e.exit(i),e.exit(r),t):(e.enter(o),u(d))}function u(d){return d===l?(e.exit(o),s(l)):d===null?n(d):W(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),le(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(d))}function f(d){return d===l||d===null||W(d)?(e.exit("chunkString"),u(d)):(e.consume(d),d===92?c:f)}function c(d){return d===l||d===92?(e.consume(d),f):f(d)}}function po(e,t){let n;return r;function r(i){return W(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):re(i)?le(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const TC={name:"definition",tokenize:RC},AC={partial:!0,tokenize:LC};function RC(e,t,n){const r=this;let i;return o;function o(p){return e.enter("definition"),l(p)}function l(p){return _1.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return i=qt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):n(p)}function s(p){return ve(p)?po(e,u)(p):u(p)}function u(p){return I1(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function f(p){return e.attempt(AC,c,c)(p)}function c(p){return re(p)?le(e,d,"whitespace")(p):d(p)}function d(p){return p===null||W(p)?(e.exit("definition"),r.parser.defined.push(i),t(p)):n(p)}}function LC(e,t,n){return r;function r(a){return ve(a)?po(e,i)(a):n(a)}function i(a){return T1(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return re(a)?le(e,l,"whitespace")(a):l(a)}function l(a){return a===null||W(a)?t(a):n(a)}}const NC={name:"hardBreakEscape",tokenize:OC};function OC(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return W(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const DC={name:"headingAtx",resolve:jC,tokenize:FC};function jC(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},St(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function FC(e,t,n){let r=0;return i;function i(f){return e.enter("atxHeading"),o(f)}function o(f){return e.enter("atxHeadingSequence"),l(f)}function l(f){return f===35&&r++<6?(e.consume(f),l):f===null||ve(f)?(e.exit("atxHeadingSequence"),a(f)):n(f)}function a(f){return f===35?(e.enter("atxHeadingSequence"),s(f)):f===null||W(f)?(e.exit("atxHeading"),t(f)):re(f)?le(e,a,"whitespace")(f):(e.enter("atxHeadingText"),u(f))}function s(f){return f===35?(e.consume(f),s):(e.exit("atxHeadingSequence"),a(f))}function u(f){return f===null||f===35||ve(f)?(e.exit("atxHeadingText"),a(f)):(e.consume(f),u)}}const MC=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],yh=["pre","script","style","textarea"],BC={concrete:!0,name:"htmlFlow",resolveTo:VC,tokenize:WC},UC={partial:!0,tokenize:QC},HC={partial:!0,tokenize:GC};function VC(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function WC(e,t,n){const r=this;let i,o,l,a,s;return u;function u(S){return f(S)}function f(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),c}function c(S){return S===33?(e.consume(S),d):S===47?(e.consume(S),o=!0,y):S===63?(e.consume(S),i=3,r.interrupt?t:x):nt(S)?(e.consume(S),l=String.fromCharCode(S),$):n(S)}function d(S){return S===45?(e.consume(S),i=2,p):S===91?(e.consume(S),i=5,a=0,g):nt(S)?(e.consume(S),i=4,r.interrupt?t:x):n(S)}function p(S){return S===45?(e.consume(S),r.interrupt?t:x):n(S)}function g(S){const ge="CDATA[";return S===ge.charCodeAt(a++)?(e.consume(S),a===ge.length?r.interrupt?t:O:g):n(S)}function y(S){return nt(S)?(e.consume(S),l=String.fromCharCode(S),$):n(S)}function $(S){if(S===null||S===47||S===62||ve(S)){const ge=S===47,_e=l.toLowerCase();return!ge&&!o&&yh.includes(_e)?(i=1,r.interrupt?t(S):O(S)):MC.includes(l.toLowerCase())?(i=6,ge?(e.consume(S),h):r.interrupt?t(S):O(S)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(S):o?m(S):v(S))}return S===45||Je(S)?(e.consume(S),l+=String.fromCharCode(S),$):n(S)}function h(S){return S===62?(e.consume(S),r.interrupt?t:O):n(S)}function m(S){return re(S)?(e.consume(S),m):E(S)}function v(S){return S===47?(e.consume(S),E):S===58||S===95||nt(S)?(e.consume(S),w):re(S)?(e.consume(S),v):E(S)}function w(S){return S===45||S===46||S===58||S===95||Je(S)?(e.consume(S),w):P(S)}function P(S){return S===61?(e.consume(S),k):re(S)?(e.consume(S),P):v(S)}function k(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),s=S,b):re(S)?(e.consume(S),k):z(S)}function b(S){return S===s?(e.consume(S),s=null,R):S===null||W(S)?n(S):(e.consume(S),b)}function z(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||ve(S)?P(S):(e.consume(S),z)}function R(S){return S===47||S===62||re(S)?v(S):n(S)}function E(S){return S===62?(e.consume(S),I):n(S)}function I(S){return S===null||W(S)?O(S):re(S)?(e.consume(S),I):n(S)}function O(S){return S===45&&i===2?(e.consume(S),de):S===60&&i===1?(e.consume(S),se):S===62&&i===4?(e.consume(S),Q):S===63&&i===3?(e.consume(S),x):S===93&&i===5?(e.consume(S),B):W(S)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(UC,G,V)(S)):S===null||W(S)?(e.exit("htmlFlowData"),V(S)):(e.consume(S),O)}function V(S){return e.check(HC,H,G)(S)}function H(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),Y}function Y(S){return S===null||W(S)?V(S):(e.enter("htmlFlowData"),O(S))}function de(S){return S===45?(e.consume(S),x):O(S)}function se(S){return S===47?(e.consume(S),l="",D):O(S)}function D(S){if(S===62){const ge=l.toLowerCase();return yh.includes(ge)?(e.consume(S),Q):O(S)}return nt(S)&&l.length<8?(e.consume(S),l+=String.fromCharCode(S),D):O(S)}function B(S){return S===93?(e.consume(S),x):O(S)}function x(S){return S===62?(e.consume(S),Q):S===45&&i===2?(e.consume(S),x):O(S)}function Q(S){return S===null||W(S)?(e.exit("htmlFlowData"),G(S)):(e.consume(S),Q)}function G(S){return e.exit("htmlFlow"),t(S)}}function GC(e,t,n){const r=this;return i;function i(l){return W(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function QC(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Xo,t,n)}}const YC={name:"htmlText",tokenize:qC};function qC(e,t,n){const r=this;let i,o,l;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),s}function s(x){return x===33?(e.consume(x),u):x===47?(e.consume(x),P):x===63?(e.consume(x),v):nt(x)?(e.consume(x),z):n(x)}function u(x){return x===45?(e.consume(x),f):x===91?(e.consume(x),o=0,g):nt(x)?(e.consume(x),m):n(x)}function f(x){return x===45?(e.consume(x),p):n(x)}function c(x){return x===null?n(x):x===45?(e.consume(x),d):W(x)?(l=c,se(x)):(e.consume(x),c)}function d(x){return x===45?(e.consume(x),p):c(x)}function p(x){return x===62?de(x):x===45?d(x):c(x)}function g(x){const Q="CDATA[";return x===Q.charCodeAt(o++)?(e.consume(x),o===Q.length?y:g):n(x)}function y(x){return x===null?n(x):x===93?(e.consume(x),$):W(x)?(l=y,se(x)):(e.consume(x),y)}function $(x){return x===93?(e.consume(x),h):y(x)}function h(x){return x===62?de(x):x===93?(e.consume(x),h):y(x)}function m(x){return x===null||x===62?de(x):W(x)?(l=m,se(x)):(e.consume(x),m)}function v(x){return x===null?n(x):x===63?(e.consume(x),w):W(x)?(l=v,se(x)):(e.consume(x),v)}function w(x){return x===62?de(x):v(x)}function P(x){return nt(x)?(e.consume(x),k):n(x)}function k(x){return x===45||Je(x)?(e.consume(x),k):b(x)}function b(x){return W(x)?(l=b,se(x)):re(x)?(e.consume(x),b):de(x)}function z(x){return x===45||Je(x)?(e.consume(x),z):x===47||x===62||ve(x)?R(x):n(x)}function R(x){return x===47?(e.consume(x),de):x===58||x===95||nt(x)?(e.consume(x),E):W(x)?(l=R,se(x)):re(x)?(e.consume(x),R):de(x)}function E(x){return x===45||x===46||x===58||x===95||Je(x)?(e.consume(x),E):I(x)}function I(x){return x===61?(e.consume(x),O):W(x)?(l=I,se(x)):re(x)?(e.consume(x),I):R(x)}function O(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),i=x,V):W(x)?(l=O,se(x)):re(x)?(e.consume(x),O):(e.consume(x),H)}function V(x){return x===i?(e.consume(x),i=void 0,Y):x===null?n(x):W(x)?(l=V,se(x)):(e.consume(x),V)}function H(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||ve(x)?R(x):(e.consume(x),H)}function Y(x){return x===47||x===62||ve(x)?R(x):n(x)}function de(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):n(x)}function se(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),D}function D(x){return re(x)?le(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):B(x)}function B(x){return e.enter("htmlTextData"),l(x)}}const Kf={name:"labelEnd",resolveAll:ZC,resolveTo:eE,tokenize:tE},KC={tokenize:nE},XC={tokenize:rE},JC={tokenize:iE};function ZC(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&St(e,0,e.length,n),e}function eE(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const s={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[l][1].end}},f={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",s,t],["enter",u,t]],a=_t(a,e.slice(o+1,o+r+3)),a=_t(a,[["enter",f,t]]),a=_t(a,rs(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=_t(a,[["exit",f,t],e[l-2],e[l-1],["exit",u,t]]),a=_t(a,e.slice(l+1)),a=_t(a,[["exit",s,t]]),St(e,o,e.length,a),e}function tE(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(d){return o?o._inactive?c(d):(l=r.parser.defined.includes(qt(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),s):n(d)}function s(d){return d===40?e.attempt(KC,f,l?f:c)(d):d===91?e.attempt(XC,f,l?u:c)(d):l?f(d):c(d)}function u(d){return e.attempt(JC,f,c)(d)}function f(d){return t(d)}function c(d){return o._balanced=!0,n(d)}}function nE(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return ve(c)?po(e,o)(c):o(c)}function o(c){return c===41?f(c):I1(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function l(c){return ve(c)?po(e,s)(c):f(c)}function a(c){return n(c)}function s(c){return c===34||c===39||c===40?T1(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function u(c){return ve(c)?po(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function rE(e,t,n){const r=this;return i;function i(a){return _1.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(qt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function iE(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const oE={name:"labelStartImage",resolveAll:Kf.resolveAll,tokenize:lE};function lE(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const aE={name:"labelStartLink",resolveAll:Kf.resolveAll,tokenize:sE};function sE(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const Ys={name:"lineEnding",tokenize:uE};function uE(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),le(e,t,"linePrefix")}}const Fl={name:"thematicBreak",tokenize:cE};function cE(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),l(u)}function l(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||W(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),re(u)?le(e,a,"whitespace")(u):a(u))}}const st={continuation:{tokenize:hE},exit:mE,name:"list",tokenize:pE},fE={partial:!0,tokenize:vE},dE={partial:!0,tokenize:gE};function pE(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(p){const g=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:wc(p)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Fl,n,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return n(p)}function s(p){return wc(p)&&++l<10?(e.consume(p),s):(!r.interrupt||l<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):n(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Xo,r.interrupt?n:f,e.attempt(fE,d,c))}function f(p){return r.containerState.initialBlankLine=!0,o++,d(p)}function c(p){return re(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),d):n(p)}function d(p){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function hE(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Xo,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,le(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!re(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(dE,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,le(e,e.attempt(st,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function gE(e,t,n){const r=this;return le(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function mE(e){e.exit(this.containerState.type)}function vE(e,t,n){const r=this;return le(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const l=r.events[r.events.length-1];return!re(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const xh={name:"setextUnderline",resolveTo:yE,tokenize:xE};function yE(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function xE(e,t,n){const r=this;let i;return o;function o(u){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,l(u)):n(u)}function l(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),re(u)?le(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||W(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const wE={tokenize:kE};function kE(e){const t=this,n=e.attempt(Xo,r,e.attempt(this.parser.constructs.flowInitial,i,le(e,e.attempt(this.parser.constructs.flow,i,e.attempt($C,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const bE={resolveAll:R1()},SE=A1("string"),CE=A1("text");function A1(e){return{resolveAll:R1(e==="text"?EE:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(f){return u(f)?o(f):a(f)}function a(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),s}function s(f){return u(f)?(n.exit("data"),o(f)):(n.consume(f),s)}function u(f){if(f===null)return!0;const c=i[f];let d=-1;if(c)for(;++d<c.length;){const p=c[d];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function R1(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function EE(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,s;for(;o--;){const u=i[o];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(u===-2)s=!0,a++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:r.start._bufferIndex+l,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const $E={42:st,43:st,45:st,48:st,49:st,50:st,51:st,52:st,53:st,54:st,55:st,56:st,57:st,62:E1},zE={91:TC},PE={[-2]:Qs,[-1]:Qs,32:Qs},IE={35:DC,42:Fl,45:[xh,Fl],60:BC,61:xh,95:Fl,96:vh,126:vh},_E={38:z1,92:$1},TE={[-5]:Ys,[-4]:Ys,[-3]:Ys,33:oE,38:z1,42:kc,60:[aC,YC],91:aE,92:[NC,$1],93:Kf,95:kc,96:wC},AE={null:[kc,bE]},RE={null:[42,95]},LE={null:[]},NE=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:RE,contentInitial:zE,disable:LE,document:$E,flow:IE,flowInitial:PE,insideSpan:AE,string:_E,text:TE},Symbol.toStringTag,{value:"Module"}));function OE(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let l=[],a=[];const s={attempt:b(P),check:b(k),consume:m,enter:v,exit:w,interrupt:b(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:y,events:[],now:g,parser:e,previous:null,sliceSerialize:d,sliceStream:p,write:c};let f=t.tokenize.call(u,s);return t.resolveAll&&o.push(t),u;function c(I){return l=_t(l,I),$(),l[l.length-1]!==null?[]:(z(t,0),u.events=rs(o,u.events,u),u.events)}function d(I,O){return jE(p(I),O)}function p(I){return DE(l,I)}function g(){const{_bufferIndex:I,_index:O,line:V,column:H,offset:Y}=r;return{_bufferIndex:I,_index:O,line:V,column:H,offset:Y}}function y(I){i[I.line]=I.column,E()}function $(){let I;for(;r._index<l.length;){const O=l[r._index];if(typeof O=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<O.length;)h(O.charCodeAt(r._bufferIndex));else h(O)}}function h(I){f=f(I)}function m(I){W(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,E()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=I}function v(I,O){const V=O||{};return V.type=I,V.start=g(),u.events.push(["enter",V,u]),a.push(V),V}function w(I){const O=a.pop();return O.end=g(),u.events.push(["exit",O,u]),O}function P(I,O){z(I,O.from)}function k(I,O){O.restore()}function b(I,O){return V;function V(H,Y,de){let se,D,B,x;return Array.isArray(H)?G(H):"tokenize"in H?G([H]):Q(H);function Q(ne){return M;function M(q){const te=q!==null&&ne[q],he=q!==null&&ne.null,lt=[...Array.isArray(te)?te:te?[te]:[],...Array.isArray(he)?he:he?[he]:[]];return G(lt)(q)}}function G(ne){return se=ne,D=0,ne.length===0?de:S(ne[D])}function S(ne){return M;function M(q){return x=R(),B=ne,ne.partial||(u.currentConstruct=ne),ne.name&&u.parser.constructs.disable.null.includes(ne.name)?_e():ne.tokenize.call(O?Object.assign(Object.create(u),O):u,s,ge,_e)(q)}}function ge(ne){return I(B,x),Y}function _e(ne){return x.restore(),++D<se.length?S(se[D]):de}}}function z(I,O){I.resolveAll&&!o.includes(I)&&o.push(I),I.resolve&&St(u.events,O,u.events.length-O,I.resolve(u.events.slice(O),u)),I.resolveTo&&(u.events=I.resolveTo(u.events,u))}function R(){const I=g(),O=u.previous,V=u.currentConstruct,H=u.events.length,Y=Array.from(a);return{from:H,restore:de};function de(){r=I,u.previous=O,u.currentConstruct=V,u.events.length=H,a=Y,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function DE(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function jE(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}function FE(e){const r={constructs:S1([NE,...(e||{}).extensions||[]]),content:i(eC),defined:[],document:i(nC),flow:i(wE),lazy:{},string:i(SE),text:i(CE)};return r;function i(o){return l;function l(a){return OE(r,o,a)}}}function ME(e){for(;!P1(e););return e}const wh=/[\0\t\n\r]/g;function BE(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const s=[];let u,f,c,d,p;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),c=0,t="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(wh.lastIndex=c,u=wh.exec(o),d=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(d),!u){t=o.slice(c);break}if(p===10&&c===d&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),c<d&&(s.push(o.slice(c,d)),e+=d-c),p){case 0:{s.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,s.push(-2);e++<f;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}c=d+1}return a&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}const UE=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function HE(e){return e.replace(UE,VE)}function VE(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return C1(n.slice(o?2:1),o?16:10)}return qf(n)||e}const L1={}.hasOwnProperty;function WE(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),GE(n)(ME(FE(n).document().write(BE()(e,t,!0))))}function GE(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(yd),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(gd),blockQuote:o(he),characterEscape:R,characterReference:R,codeFenced:o(lt),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(lt,l),codeText:o(Dt,l),codeTextData:R,data:R,codeFlowValue:R,definition:o(We),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(Wy),hardBreakEscape:o(md),hardBreakTrailing:o(md),htmlFlow:o(vd,l),htmlFlowData:R,htmlText:o(vd,l),htmlTextData:R,image:o(Gy),label:l,link:o(yd),listItem:o(Qy),listItemValue:d,listOrdered:o(xd,c),listUnordered:o(xd),paragraph:o(Yy),reference:S,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(gd),strong:o(qy),thematicBreak:o(Xy)},exit:{atxHeading:s(),atxHeadingSequence:P,autolink:s(),autolinkEmail:te,autolinkProtocol:q,blockQuote:s(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:_e,characterReferenceMarkerNumeric:_e,characterReferenceValue:ne,characterReference:M,codeFenced:s($),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:E,codeIndented:s(h),codeText:s(Y),codeTextData:E,data:E,definition:s(),definitionDestinationString:w,definitionLabelString:m,definitionTitleString:v,emphasis:s(),hardBreakEscape:s(O),hardBreakTrailing:s(O),htmlFlow:s(V),htmlFlowData:E,htmlText:s(H),htmlTextData:E,image:s(se),label:B,labelText:D,lineEnding:I,link:s(de),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ge,resourceDestinationString:x,resourceTitleString:Q,resource:G,setextHeading:s(z),setextHeadingLineSequence:b,setextHeadingText:k,strong:s(),thematicBreak:s()}};N1(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(_){let j={type:"root",children:[]};const X={stack:[j],tokenStack:[],config:t,enter:a,exit:u,buffer:l,resume:f,data:n},oe=[];let me=-1;for(;++me<_.length;)if(_[me][1].type==="listOrdered"||_[me][1].type==="listUnordered")if(_[me][0]==="enter")oe.push(me);else{const jt=oe.pop();me=i(_,jt,me)}for(me=-1;++me<_.length;){const jt=t[_[me][0]];L1.call(jt,_[me][1].type)&&jt[_[me][1].type].call(Object.assign({sliceSerialize:_[me][2].sliceSerialize},X),_[me][1])}if(X.tokenStack.length>0){const jt=X.tokenStack[X.tokenStack.length-1];(jt[1]||kh).call(X,void 0,jt[0])}for(j.position={start:$n(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:$n(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},me=-1;++me<t.transforms.length;)j=t.transforms[me](j)||j;return j}function i(_,j,X){let oe=j-1,me=-1,jt=!1,tr,sn,Ai,Ri;for(;++oe<=X;){const mt=_[oe];switch(mt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{mt[0]==="enter"?me++:me--,Ri=void 0;break}case"lineEndingBlank":{mt[0]==="enter"&&(tr&&!Ri&&!me&&!Ai&&(Ai=oe),Ri=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ri=void 0}if(!me&&mt[0]==="enter"&&mt[1].type==="listItemPrefix"||me===-1&&mt[0]==="exit"&&(mt[1].type==="listUnordered"||mt[1].type==="listOrdered")){if(tr){let Lr=oe;for(sn=void 0;Lr--;){const un=_[Lr];if(un[1].type==="lineEnding"||un[1].type==="lineEndingBlank"){if(un[0]==="exit")continue;sn&&(_[sn][1].type="lineEndingBlank",jt=!0),un[1].type="lineEnding",sn=Lr}else if(!(un[1].type==="linePrefix"||un[1].type==="blockQuotePrefix"||un[1].type==="blockQuotePrefixWhitespace"||un[1].type==="blockQuoteMarker"||un[1].type==="listItemIndent"))break}Ai&&(!sn||Ai<sn)&&(tr._spread=!0),tr.end=Object.assign({},sn?_[sn][1].start:mt[1].end),_.splice(sn||oe,0,["exit",tr,mt[2]]),oe++,X++}if(mt[1].type==="listItemPrefix"){const Lr={type:"listItem",_spread:!1,start:Object.assign({},mt[1].start),end:void 0};tr=Lr,_.splice(oe,0,["enter",Lr,mt[2]]),oe++,X++,Ai=void 0,Ri=!0}}}return _[j][1]._spread=jt,X}function o(_,j){return X;function X(oe){a.call(this,_(oe),oe),j&&j.call(this,oe)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(_,j,X){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([j,X||void 0]),_.position={start:$n(j.start),end:void 0}}function s(_){return j;function j(X){_&&_.call(this,X),u.call(this,X)}}function u(_,j){const X=this.stack.pop(),oe=this.tokenStack.pop();if(oe)oe[0].type!==_.type&&(j?j.call(this,_,oe[0]):(oe[1]||kh).call(this,_,oe[0]));else throw new Error("Cannot close `"+_.type+"` ("+fo({start:_.start,end:_.end})+"): it’s not open");X.position.end=$n(_.end)}function f(){return Yf(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(_){if(this.data.expectingFirstListItemValue){const j=this.stack[this.stack.length-2];j.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0}}function p(){const _=this.resume(),j=this.stack[this.stack.length-1];j.lang=_}function g(){const _=this.resume(),j=this.stack[this.stack.length-1];j.meta=_}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function $(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_.replace(/(\r?\n|\r)$/g,"")}function m(_){const j=this.resume(),X=this.stack[this.stack.length-1];X.label=j,X.identifier=qt(this.sliceSerialize(_)).toLowerCase()}function v(){const _=this.resume(),j=this.stack[this.stack.length-1];j.title=_}function w(){const _=this.resume(),j=this.stack[this.stack.length-1];j.url=_}function P(_){const j=this.stack[this.stack.length-1];if(!j.depth){const X=this.sliceSerialize(_).length;j.depth=X}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function b(_){const j=this.stack[this.stack.length-1];j.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2}function z(){this.data.setextHeadingSlurpLineEnding=void 0}function R(_){const X=this.stack[this.stack.length-1].children;let oe=X[X.length-1];(!oe||oe.type!=="text")&&(oe=Ky(),oe.position={start:$n(_.start),end:void 0},X.push(oe)),this.stack.push(oe)}function E(_){const j=this.stack.pop();j.value+=this.sliceSerialize(_),j.position.end=$n(_.end)}function I(_){const j=this.stack[this.stack.length-1];if(this.data.atHardBreak){const X=j.children[j.children.length-1];X.position.end=$n(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(j.type)&&(R.call(this,_),E.call(this,_))}function O(){this.data.atHardBreak=!0}function V(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_}function H(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_}function Y(){const _=this.resume(),j=this.stack[this.stack.length-1];j.value=_}function de(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=j,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function se(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=j,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function D(_){const j=this.sliceSerialize(_),X=this.stack[this.stack.length-2];X.label=HE(j),X.identifier=qt(j).toLowerCase()}function B(){const _=this.stack[this.stack.length-1],j=this.resume(),X=this.stack[this.stack.length-1];if(this.data.inReference=!0,X.type==="link"){const oe=_.children;X.children=oe}else X.alt=j}function x(){const _=this.resume(),j=this.stack[this.stack.length-1];j.url=_}function Q(){const _=this.resume(),j=this.stack[this.stack.length-1];j.title=_}function G(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function ge(_){const j=this.resume(),X=this.stack[this.stack.length-1];X.label=j,X.identifier=qt(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full"}function _e(_){this.data.characterReferenceType=_.type}function ne(_){const j=this.sliceSerialize(_),X=this.data.characterReferenceType;let oe;X?(oe=C1(j,X==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):oe=qf(j);const me=this.stack[this.stack.length-1];me.value+=oe}function M(_){const j=this.stack.pop();j.position.end=$n(_.end)}function q(_){E.call(this,_);const j=this.stack[this.stack.length-1];j.url=this.sliceSerialize(_)}function te(_){E.call(this,_);const j=this.stack[this.stack.length-1];j.url="mailto:"+this.sliceSerialize(_)}function he(){return{type:"blockquote",children:[]}}function lt(){return{type:"code",lang:null,meta:null,value:""}}function Dt(){return{type:"inlineCode",value:""}}function We(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Wy(){return{type:"emphasis",children:[]}}function gd(){return{type:"heading",depth:0,children:[]}}function md(){return{type:"break"}}function vd(){return{type:"html",value:""}}function Gy(){return{type:"image",title:null,url:"",alt:null}}function yd(){return{type:"link",title:null,url:"",children:[]}}function xd(_){return{type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function Qy(_){return{type:"listItem",spread:_._spread,checked:null,children:[]}}function Yy(){return{type:"paragraph",children:[]}}function qy(){return{type:"strong",children:[]}}function Ky(){return{type:"text",value:""}}function Xy(){return{type:"thematicBreak"}}}function $n(e){return{line:e.line,column:e.column,offset:e.offset}}function N1(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?N1(e,r):QE(e,r)}}function QE(e,t){let n;for(n in t)if(L1.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function kh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+fo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+fo({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+fo({start:t.start,end:t.end})+") is still open")}function YE(e){const t=this;t.parser=n;function n(r){return WE(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function qE(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function KE(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function XE(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function JE(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ZE(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function e$(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Pi(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function t$(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function n$(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function O1(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function r$(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return O1(e,t);const i={src:Pi(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function i$(e,t){const n={src:Pi(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function o$(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function l$(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return O1(e,t);const i={href:Pi(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function a$(e,t){const n={href:Pi(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function s$(e,t,n){const r=e.all(t),i=n?u$(n):D1(t),o={},l=[];if(typeof t.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const f=r[a];(i||a!==0||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?l.push(...f.children):l.push(f)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&l.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,u),e.applyData(t,u)}function u$(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=D1(n[r])}return t}function D1(e){const t=e.spread;return t??e.children.length>1}function c$(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function f$(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function d$(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function p$(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function h$(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Vf(t.children[1]),s=m1(t.children[t.children.length-1]);a&&s&&(l.position={start:a,end:s}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function g$(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let s=-1;const u=[];for(;++s<a;){const c=t.children[s],d={},p=l?l[s]:void 0;p&&(d.align=p);let g={type:"element",tagName:o,properties:d,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),u.push(g)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,f),e.applyData(t,f)}function m$(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const bh=9,Sh=32;function v$(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Ch(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Ch(t.slice(i),i>0,!1)),o.join("")}function Ch(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===bh||o===Sh;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===bh||o===Sh;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function y$(e,t){const n={type:"text",value:v$(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function x$(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const w$={blockquote:qE,break:KE,code:XE,delete:JE,emphasis:ZE,footnoteReference:e$,heading:t$,html:n$,imageReference:r$,image:i$,inlineCode:o$,linkReference:l$,link:a$,listItem:s$,list:c$,paragraph:f$,root:d$,strong:p$,table:h$,tableCell:m$,tableRow:g$,text:y$,thematicBreak:x$,toml:ml,yaml:ml,definition:ml,footnoteDefinition:ml};function ml(){}const j1=-1,is=0,ho=1,ba=2,Xf=3,Jf=4,Zf=5,ed=6,F1=7,M1=8,Eh=typeof self=="object"?self:globalThis,k$=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case is:case j1:return n(l,i);case ho:{const a=n([],i);for(const s of l)a.push(r(s));return a}case ba:{const a=n({},i);for(const[s,u]of l)a[r(s)]=r(u);return a}case Xf:return n(new Date(l),i);case Jf:{const{source:a,flags:s}=l;return n(new RegExp(a,s),i)}case Zf:{const a=n(new Map,i);for(const[s,u]of l)a.set(r(s),r(u));return a}case ed:{const a=n(new Set,i);for(const s of l)a.add(r(s));return a}case F1:{const{name:a,message:s}=l;return n(new Eh[a](s),i)}case M1:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}}return n(new Eh[o](l),i)};return r},$h=e=>k$(new Map,e)(0),Dr="",{toString:b$}={},{keys:S$}=Object,Hi=e=>{const t=typeof e;if(t!=="object"||!e)return[is,t];const n=b$.call(e).slice(8,-1);switch(n){case"Array":return[ho,Dr];case"Object":return[ba,Dr];case"Date":return[Xf,Dr];case"RegExp":return[Jf,Dr];case"Map":return[Zf,Dr];case"Set":return[ed,Dr];case"DataView":return[ho,n]}return n.includes("Array")?[ho,n]:n.includes("Error")?[F1,n]:[ba,n]},vl=([e,t])=>e===is&&(t==="function"||t==="symbol"),C$=(e,t,n,r)=>{const i=(l,a)=>{const s=r.push(l)-1;return n.set(a,s),s},o=l=>{if(n.has(l))return n.get(l);let[a,s]=Hi(l);switch(a){case is:{let f=l;switch(s){case"bigint":a=M1,f=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);f=null;break;case"undefined":return i([j1],l)}return i([a,f],l)}case ho:{if(s){let d=l;return s==="DataView"?d=new Uint8Array(l.buffer):s==="ArrayBuffer"&&(d=new Uint8Array(l)),i([s,[...d]],l)}const f=[],c=i([a,f],l);for(const d of l)f.push(o(d));return c}case ba:{if(s)switch(s){case"BigInt":return i([s,l.toString()],l);case"Boolean":case"Number":case"String":return i([s,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const f=[],c=i([a,f],l);for(const d of S$(l))(e||!vl(Hi(l[d])))&&f.push([o(d),o(l[d])]);return c}case Xf:return i([a,l.toISOString()],l);case Jf:{const{source:f,flags:c}=l;return i([a,{source:f,flags:c}],l)}case Zf:{const f=[],c=i([a,f],l);for(const[d,p]of l)(e||!(vl(Hi(d))||vl(Hi(p))))&&f.push([o(d),o(p)]);return c}case ed:{const f=[],c=i([a,f],l);for(const d of l)(e||!vl(Hi(d)))&&f.push(o(d));return c}}const{message:u}=l;return i([a,{name:s,message:u}],l)};return o},zh=(e,{json:t,lossy:n}={})=>{const r=[];return C$(!(t||n),!!t,new Map,r)(e),r},Sa=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?$h(zh(e,t)):structuredClone(e):(e,t)=>$h(zh(e,t));function E$(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function $$(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function z$(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||E$,r=e.options.footnoteBackLabel||$$,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const f=e.all(u),c=String(u.identifier).toUpperCase(),d=Pi(c.toLowerCase());let p=0;const g=[],y=e.footnoteCounts.get(c);for(;y!==void 0&&++p<=y;){g.length>0&&g.push({type:"text",value:" "});let m=typeof n=="string"?n:n(s,p);typeof m=="string"&&(m={type:"text",value:m}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+d+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,p),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const $=f[f.length-1];if($&&$.type==="element"&&$.tagName==="p"){const m=$.children[$.children.length-1];m&&m.type==="text"?m.value+=" ":$.children.push({type:"text",value:" "}),$.children.push(...g)}else f.push(...g);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+d},children:e.wrap(f,!0)};e.patch(u,h),a.push(h)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Sa(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const os=function(e){if(e==null)return T$;if(typeof e=="function")return ls(e);if(typeof e=="object")return Array.isArray(e)?P$(e):I$(e);if(typeof e=="string")return _$(e);throw new Error("Expected function, string, or object as test")};function P$(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=os(e[n]);return ls(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function I$(e){const t=e;return ls(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function _$(e){return ls(t);function t(n){return n&&n.type===e}}function ls(e){return t;function t(n,r,i){return!!(A$(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function T$(){return!0}function A$(e){return e!==null&&typeof e=="object"&&"type"in e}const B1=[],R$=!0,bc=!1,L$="skip";function U1(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=os(i),l=r?-1:1;a(e,void 0,[])();function a(s,u,f){const c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){const p=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return d;function d(){let p=B1,g,y,$;if((!t||o(s,u,f[f.length-1]||void 0))&&(p=N$(n(s,f)),p[0]===bc))return p;if("children"in s&&s.children){const h=s;if(h.children&&p[0]!==L$)for(y=(r?h.children.length:-1)+l,$=f.concat(h);y>-1&&y<h.children.length;){const m=h.children[y];if(g=a(m,y,$)(),g[0]===bc)return g;y=typeof g[1]=="number"?g[1]:y+l}}return p}}}function N$(e){return Array.isArray(e)?e:typeof e=="number"?[R$,e]:e==null?B1:[e]}function td(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),U1(e,o,a,i);function a(s,u){const f=u[u.length-1],c=f?f.children.indexOf(s):void 0;return l(s,c,f)}}const Sc={}.hasOwnProperty,O$={};function D$(e,t){const n=t||O$,r=new Map,i=new Map,o=new Map,l={...w$,...n.handlers},a={all:u,applyData:F$,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:s,options:n,patch:j$,wrap:B$};return td(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,d=String(f.identifier).toUpperCase();c.has(d)||c.set(d,f)}}),a;function s(f,c){const d=f.type,p=a.handlers[d];if(Sc.call(a.handlers,d)&&p)return p(a,f,c);if(a.options.passThrough&&a.options.passThrough.includes(d)){if("children"in f){const{children:y,...$}=f,h=Sa($);return h.children=a.all(f),h}return Sa(f)}return(a.options.unknownHandler||M$)(a,f,c)}function u(f){const c=[];if("children"in f){const d=f.children;let p=-1;for(;++p<d.length;){const g=a.one(d[p],f);if(g){if(p&&d[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Ph(g.value)),!Array.isArray(g)&&g.type==="element")){const y=g.children[0];y&&y.type==="text"&&(y.value=Ph(y.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function j$(e,t){e.position&&(t.position=$S(e))}function F$(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,Sa(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function M$(e,t){const n=t.data||{},r="value"in t&&!(Sc.call(n,"hProperties")||Sc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function B$(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Ph(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ih(e,t){const n=D$(e,t),r=n.one(e,void 0),i=z$(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function U$(e,t){return e&&"run"in e?async function(n,r){const i=Ih(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ih(n,{file:r,...e||t})}}function _h(e){if(e)throw e}var Ml=Object.prototype.hasOwnProperty,H1=Object.prototype.toString,Th=Object.defineProperty,Ah=Object.getOwnPropertyDescriptor,Rh=function(t){return typeof Array.isArray=="function"?Array.isArray(t):H1.call(t)==="[object Array]"},Lh=function(t){if(!t||H1.call(t)!=="[object Object]")return!1;var n=Ml.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Ml.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Ml.call(t,i)},Nh=function(t,n){Th&&n.name==="__proto__"?Th(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Oh=function(t,n){if(n==="__proto__")if(Ml.call(t,n)){if(Ah)return Ah(t,n).value}else return;return t[n]},H$=function e(){var t,n,r,i,o,l,a=arguments[0],s=1,u=arguments.length,f=!1;for(typeof a=="boolean"&&(f=a,a=arguments[1]||{},s=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=Oh(a,n),i=Oh(t,n),a!==i&&(f&&i&&(Lh(i)||(o=Rh(i)))?(o?(o=!1,l=r&&Rh(r)?r:[]):l=r&&Lh(r)?r:{},Nh(a,{name:n,newValue:e(f,l,i)})):typeof i<"u"&&Nh(a,{name:n,newValue:i}));return a};const qs=Dc(H$);function Cc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function V$(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(s,...u){const f=e[++o];let c=-1;if(s){l(s);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,f?W$(f,a)(...u):l(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function W$(e,t){let n;return r;function r(...l){const a=e.length>l.length;let s;a&&l.push(i);try{s=e.apply(this,l)}catch(u){const f=u;if(a&&n)throw f;return i(f)}a||(s&&s.then&&typeof s.then=="function"?s.then(o,i):s instanceof Error?i(s):o(s))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const en={basename:G$,dirname:Q$,extname:Y$,join:q$,sep:"/"};function G$(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Jo(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function Q$(e){if(Jo(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Y$(e){Jo(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function q$(...e){let t=-1,n;for(;++t<e.length;)Jo(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":K$(n)}function K$(e){Jo(e);const t=e.codePointAt(0)===47;let n=X$(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function X$(e,t){let n="",r=0,i=-1,o=0,l=-1,a,s;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Jo(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const J$={cwd:Z$};function Z$(){return"/"}function Ec(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function ez(e){if(typeof e=="string")e=new URL(e);else if(!Ec(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return tz(e)}function tz(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Ks=["history","path","basename","stem","extname","dirname"];class V1{constructor(t){let n;t?Ec(t)?n={path:t}:typeof t=="string"||nz(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":J$.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ks.length;){const o=Ks[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Ks.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?en.basename(this.path):void 0}set basename(t){Js(t,"basename"),Xs(t,"basename"),this.path=en.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?en.dirname(this.path):void 0}set dirname(t){Dh(this.basename,"dirname"),this.path=en.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?en.extname(this.path):void 0}set extname(t){if(Xs(t,"extname"),Dh(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=en.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Ec(t)&&(t=ez(t)),Js(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?en.basename(this.path,this.extname):void 0}set stem(t){Js(t,"stem"),Xs(t,"stem"),this.path=en.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new et(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Xs(e,t){if(e&&e.includes(en.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+en.sep+"`")}function Js(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Dh(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function nz(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const rz=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},iz={}.hasOwnProperty;class nd extends rz{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=V$()}copy(){const t=new nd;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(qs(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(tu("data",this.frozen),this.namespace[t]=n,this):iz.call(this.namespace,t)&&this.namespace[t]||void 0:t?(tu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=yl(t),r=this.parser||this.Parser;return Zs("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Zs("process",this.parser||this.Parser),eu("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=yl(t),s=r.parse(a);r.run(s,a,function(f,c,d){if(f||!c||!d)return u(f);const p=c,g=r.stringify(p,d);az(g)?d.value=g:d.result=g,u(f,d)});function u(f,c){f||!c?l(f):o?o(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),Zs("processSync",this.parser||this.Parser),eu("processSync",this.compiler||this.Compiler),this.process(t,i),Fh("processSync","process",n),r;function i(o,l){n=!0,_h(o),r=l}}run(t,n,r){jh(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const s=yl(n);i.run(t,s,u);function u(f,c,d){const p=c||t;f?a(f):l?l(p):r(void 0,p,d)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Fh("runSync","run",r),i;function o(l,a){_h(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=yl(n),i=this.compiler||this.Compiler;return eu("stringify",i),jh(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(tu("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[f,...c]=u;s(f,c)}else l(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function l(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=qs(!0,i.settings,u.settings))}function a(u){let f=-1;if(u!=null)if(Array.isArray(u))for(;++f<u.length;){const c=u[f];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,f){let c=-1,d=-1;for(;++c<r.length;)if(r[c][0]===u){d=c;break}if(d===-1)r.push([u,...f]);else if(f.length>0){let[p,...g]=f;const y=r[d][1];Cc(y)&&Cc(p)&&(p=qs(!0,y,p)),r[d]=[u,p,...g]}}}}const oz=new nd().freeze();function Zs(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function eu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function tu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function jh(e){if(!Cc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Fh(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function yl(e){return lz(e)?e:new V1(e)}function lz(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function az(e){return typeof e=="string"||sz(e)}function sz(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const uz="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Mh=[],Bh={allowDangerousHtml:!0},cz=/^(https?|ircs?|mailto|xmpp)$/i,fz=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function dz(e){const t=pz(e),n=hz(e);return gz(t.runSync(t.parse(n),n),e)}function pz(e){const t=e.rehypePlugins||Mh,n=e.remarkPlugins||Mh,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Bh}:Bh;return oz().use(YE).use(n).use(U$,r).use(t)}function hz(e){const t=e.children||"",n=new V1;return typeof t=="string"&&(n.value=t),n}function gz(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,s=t.urlTransform||mz;for(const f of fz)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+uz+f.id,void 0);return td(e,u),TS(e,{Fragment:A.Fragment,components:i,ignoreInvalidStyle:!0,jsx:A.jsx,jsxs:A.jsxs,passKeys:!0,passNode:!0});function u(f,c,d){if(f.type==="raw"&&d&&typeof c=="number")return l?d.children.splice(c,1):d.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let p;for(p in Gs)if(Object.hasOwn(Gs,p)&&Object.hasOwn(f.properties,p)){const g=f.properties[p],y=Gs[p];(y===null||y.includes(f.tagName))&&(f.properties[p]=s(String(g||""),p,f))}}if(f.type==="element"){let p=n?!n.includes(f.tagName):o?o.includes(f.tagName):!1;if(!p&&r&&typeof c=="number"&&(p=!r(f,c,d)),p&&d&&typeof c=="number")return a&&f.children?d.children.splice(c,1,...f.children):d.children.splice(c,1),c}}}function mz(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||cz.test(e.slice(0,t))?e:""}function Uh(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function vz(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function yz(e,t,n){const i=os((n||{}).ignore||[]),o=xz(t);let l=-1;for(;++l<o.length;)U1(e,"text",a);function a(u,f){let c=-1,d;for(;++c<f.length;){const p=f[c],g=d?d.children:void 0;if(i(p,g?g.indexOf(p):void 0,d))return;d=p}if(d)return s(u,f)}function s(u,f){const c=f[f.length-1],d=o[l][0],p=o[l][1];let g=0;const $=c.children.indexOf(u);let h=!1,m=[];d.lastIndex=0;let v=d.exec(u.value);for(;v;){const w=v.index,P={index:v.index,input:v.input,stack:[...f,u]};let k=p(...v,P);if(typeof k=="string"&&(k=k.length>0?{type:"text",value:k}:void 0),k===!1?d.lastIndex=w+1:(g!==w&&m.push({type:"text",value:u.value.slice(g,w)}),Array.isArray(k)?m.push(...k):k&&m.push(k),g=w+v[0].length,h=!0),!d.global)break;v=d.exec(u.value)}return h?(g<u.value.length&&m.push({type:"text",value:u.value.slice(g)}),c.children.splice($,1,...m)):m=[u],$+m.length}}function xz(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([wz(i[0]),kz(i[1])])}return t}function wz(e){return typeof e=="string"?new RegExp(vz(e),"g"):e}function kz(e){return typeof e=="function"?e:function(){return e}}const nu="phrasing",ru=["autolink","link","image","label"];function bz(){return{transforms:[Iz],enter:{literalAutolink:Cz,literalAutolinkEmail:iu,literalAutolinkHttp:iu,literalAutolinkWww:iu},exit:{literalAutolink:Pz,literalAutolinkEmail:zz,literalAutolinkHttp:Ez,literalAutolinkWww:$z}}}function Sz(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:nu,notInConstruct:ru},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:nu,notInConstruct:ru},{character:":",before:"[ps]",after:"\\/",inConstruct:nu,notInConstruct:ru}]}}function Cz(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function iu(e){this.config.enter.autolinkProtocol.call(this,e)}function Ez(e){this.config.exit.autolinkProtocol.call(this,e)}function $z(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function zz(e){this.config.exit.autolinkEmail.call(this,e)}function Pz(e){this.exit(e)}function Iz(e){yz(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,_z],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Tz]],{ignore:["link","linkReference"]})}function _z(e,t,n,r,i){let o="";if(!W1(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!Az(n)))return!1;const l=Rz(n+r);if(!l[0])return!1;const a={type:"link",title:null,url:o+t+l[0],children:[{type:"text",value:t+l[0]}]};return l[1]?[a,{type:"text",value:l[1]}]:a}function Tz(e,t,n,r){return!W1(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function Az(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Rz(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=Uh(e,"(");let o=Uh(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return[e,n]}function W1(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Cr(n)||ns(n))&&(!t||n!==47)}G1.peek=Uz;function Lz(){this.buffer()}function Nz(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Oz(){this.buffer()}function Dz(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function jz(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=qt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Fz(e){this.exit(e)}function Mz(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=qt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Bz(e){this.exit(e)}function Uz(){return"["}function G1(e,t,n,r){const i=n.createTracker(r);let o=i.move("[^");const l=n.enter("footnoteReference"),a=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),a(),l(),o+=i.move("]"),o}function Hz(){return{enter:{gfmFootnoteCallString:Lz,gfmFootnoteCall:Nz,gfmFootnoteDefinitionLabelString:Oz,gfmFootnoteDefinition:Dz},exit:{gfmFootnoteCallString:jz,gfmFootnoteCall:Fz,gfmFootnoteDefinitionLabelString:Mz,gfmFootnoteDefinition:Bz}}}function Vz(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:G1},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,l){const a=o.createTracker(l);let s=a.move("[^");const u=o.enter("footnoteDefinition"),f=o.enter("label");return s+=a.move(o.safe(o.associationId(r),{before:s,after:"]"})),f(),s+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),s+=a.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,a.current()),t?Q1:Wz))),u(),s}}function Wz(e,t,n){return t===0?e:Q1(e,t,n)}function Q1(e,t,n){return(n?"":"    ")+e}const Gz=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Y1.peek=Xz;function Qz(){return{canContainEols:["delete"],enter:{strikethrough:qz},exit:{strikethrough:Kz}}}function Yz(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Gz}],handlers:{delete:Y1}}}function qz(e){this.enter({type:"delete",children:[]},e)}function Kz(e){this.exit(e)}function Y1(e,t,n,r){const i=n.createTracker(r),o=n.enter("strikethrough");let l=i.move("~~");return l+=n.containerPhrasing(e,{...i.current(),before:l,after:"~"}),l+=i.move("~~"),o(),l}function Xz(){return"~"}function Jz(e){return e.length}function Zz(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||Jz,o=[],l=[],a=[],s=[];let u=0,f=-1;for(;++f<e.length;){const y=[],$=[];let h=-1;for(e[f].length>u&&(u=e[f].length);++h<e[f].length;){const m=eP(e[f][h]);if(n.alignDelimiters!==!1){const v=i(m);$[h]=v,(s[h]===void 0||v>s[h])&&(s[h]=v)}y.push(m)}l[f]=y,a[f]=$}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=Hh(r[c]);else{const y=Hh(r);for(;++c<u;)o[c]=y}c=-1;const d=[],p=[];for(;++c<u;){const y=o[c];let $="",h="";y===99?($=":",h=":"):y===108?$=":":y===114&&(h=":");let m=n.alignDelimiters===!1?1:Math.max(1,s[c]-$.length-h.length);const v=$+"-".repeat(m)+h;n.alignDelimiters!==!1&&(m=$.length+m+h.length,m>s[c]&&(s[c]=m),p[c]=m),d[c]=v}l.splice(1,0,d),a.splice(1,0,p),f=-1;const g=[];for(;++f<l.length;){const y=l[f],$=a[f];c=-1;const h=[];for(;++c<u;){const m=y[c]||"";let v="",w="";if(n.alignDelimiters!==!1){const P=s[c]-($[c]||0),k=o[c];k===114?v=" ".repeat(P):k===99?P%2?(v=" ".repeat(P/2+.5),w=" ".repeat(P/2-.5)):(v=" ".repeat(P/2),w=v):w=" ".repeat(P)}n.delimiterStart!==!1&&!c&&h.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&m==="")&&(n.delimiterStart!==!1||c)&&h.push(" "),n.alignDelimiters!==!1&&h.push(v),h.push(m),n.alignDelimiters!==!1&&h.push(w),n.padding!==!1&&h.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&h.push("|")}g.push(n.delimiterEnd===!1?h.join("").replace(/ +$/,""):h.join(""))}return g.join(`
`)}function eP(e){return e==null?"":String(e)}function Hh(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function tP(e,t,n,r){const i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);const l=n.indentLines(n.containerFlow(e,o.current()),nP);return i(),l}function nP(e,t,n){return">"+(n?"":" ")+e}function rP(e,t){return Vh(e,t.inConstruct,!0)&&!Vh(e,t.notInConstruct,!1)}function Vh(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Wh(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&rP(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function iP(e,t){const n=String(e);let r=n.indexOf(t),i=r,o=0,l=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>l&&(l=o):o=1,i=r+t.length,r=n.indexOf(t,i);return l}function oP(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function lP(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function aP(e,t,n,r){const i=lP(n),o=e.value||"",l=i==="`"?"GraveAccent":"Tilde";if(oP(e,n)){const c=n.enter("codeIndented"),d=n.indentLines(o,sP);return c(),d}const a=n.createTracker(r),s=i.repeat(Math.max(iP(o,i)+1,3)),u=n.enter("codeFenced");let f=a.move(s);if(e.lang){const c=n.enter(`codeFencedLang${l}`);f+=a.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${l}`);f+=a.move(" "),f+=a.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...a.current()})),c()}return f+=a.move(`
`),o&&(f+=a.move(o+`
`)),f+=a.move(s),u(),f}function sP(e,t,n){return(n?"":"    ")+e}function rd(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function uP(e,t,n,r){const i=rd(n),o=i==='"'?"Quote":"Apostrophe",l=n.enter("definition");let a=n.enter("label");const s=n.createTracker(r);let u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(a=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),a()),l(),u}function cP(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Mo(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Ca(e,t,n){const r=vi(e),i=vi(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}q1.peek=fP;function q1(e,t,n,r){const i=cP(n),o=n.enter("emphasis"),l=n.createTracker(r),a=l.move(i);let s=l.move(n.containerPhrasing(e,{after:i,before:a,...l.current()}));const u=s.charCodeAt(0),f=Ca(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(s=Mo(u)+s.slice(1));const c=s.charCodeAt(s.length-1),d=Ca(r.after.charCodeAt(0),c,i);d.inside&&(s=s.slice(0,-1)+Mo(c));const p=l.move(i);return o(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+s+p}function fP(e,t,n){return n.options.emphasis||"*"}function dP(e,t){let n=!1;return td(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,bc}),!!((!e.depth||e.depth<3)&&Yf(e)&&(t.options.setext||n))}function pP(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(dP(e,n)){const f=n.enter("headingSetext"),c=n.enter("phrasing"),d=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),f(),d+`
`+(i===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const l="#".repeat(i),a=n.enter("headingAtx"),s=n.enter("phrasing");o.move(l+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(u)&&(u=Mo(u.charCodeAt(0))+u.slice(1)),u=u?l+" "+u:l,n.options.closeAtx&&(u+=" "+l),s(),a(),u}K1.peek=hP;function K1(e){return e.value||""}function hP(){return"<"}X1.peek=gP;function X1(e,t,n,r){const i=rd(n),o=i==='"'?"Quote":"Apostrophe",l=n.enter("image");let a=n.enter("label");const s=n.createTracker(r);let u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(a=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),a()),u+=s.move(")"),l(),u}function gP(){return"!"}J1.peek=mP;function J1(e,t,n,r){const i=e.referenceType,o=n.enter("imageReference");let l=n.enter("label");const a=n.createTracker(r);let s=a.move("![");const u=n.safe(e.alt,{before:s,after:"]",...a.current()});s+=a.move(u+"]["),l();const f=n.stack;n.stack=[],l=n.enter("reference");const c=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return l(),n.stack=f,o(),i==="full"||!u||u!==c?s+=a.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function mP(){return"!"}Z1.peek=vP;function Z1(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const l=n.unsafe[o],a=n.compilePattern(l);let s;if(l.atBreak)for(;s=a.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1)}}return i+r+i}function vP(){return"`"}function ey(e,t){const n=Yf(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}ty.peek=yP;function ty(e,t,n,r){const i=rd(n),o=i==='"'?"Quote":"Apostrophe",l=n.createTracker(r);let a,s;if(ey(e,n)){const f=n.stack;n.stack=[],a=n.enter("autolink");let c=l.move("<");return c+=l.move(n.containerPhrasing(e,{before:c,after:">",...l.current()})),c+=l.move(">"),a(),n.stack=f,c}a=n.enter("link"),s=n.enter("label");let u=l.move("[");return u+=l.move(n.containerPhrasing(e,{before:u,after:"](",...l.current()})),u+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),s()),u+=l.move(")"),a(),u}function yP(e,t,n){return ey(e,n)?"<":"["}ny.peek=xP;function ny(e,t,n,r){const i=e.referenceType,o=n.enter("linkReference");let l=n.enter("label");const a=n.createTracker(r);let s=a.move("[");const u=n.containerPhrasing(e,{before:s,after:"]",...a.current()});s+=a.move(u+"]["),l();const f=n.stack;n.stack=[],l=n.enter("reference");const c=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return l(),n.stack=f,o(),i==="full"||!u||u!==c?s+=a.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function xP(){return"["}function id(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function wP(e){const t=id(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function kP(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function ry(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function bP(e,t,n,r){const i=n.enter("list"),o=n.bulletCurrent;let l=e.ordered?kP(n):id(n);const a=e.ordered?l==="."?")":".":wP(n);let s=t&&n.bulletLastUsed?l===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((l==="*"||l==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=!0),ry(n)===l&&f){let c=-1;for(;++c<e.children.length;){const d=e.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(l=a),n.bulletCurrent=l;const u=n.containerFlow(e,r);return n.bulletLastUsed=l,n.bulletCurrent=o,i(),u}function SP(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function CP(e,t,n,r){const i=SP(n);let o=n.bulletCurrent||id(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let l=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(l=Math.ceil(l/4)*4);const a=n.createTracker(r);a.move(o+" ".repeat(l-o.length)),a.shift(l);const s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,a.current()),f);return s(),u;function f(c,d,p){return d?(p?"":" ".repeat(l))+c:(p?o:o+" ".repeat(l-o.length))+c}}function EP(e,t,n,r){const i=n.enter("paragraph"),o=n.enter("phrasing"),l=n.containerPhrasing(e,r);return o(),i(),l}const $P=os(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function zP(e,t,n,r){return(e.children.some(function(l){return $P(l)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function PP(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}iy.peek=IP;function iy(e,t,n,r){const i=PP(n),o=n.enter("strong"),l=n.createTracker(r),a=l.move(i+i);let s=l.move(n.containerPhrasing(e,{after:i,before:a,...l.current()}));const u=s.charCodeAt(0),f=Ca(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(s=Mo(u)+s.slice(1));const c=s.charCodeAt(s.length-1),d=Ca(r.after.charCodeAt(0),c,i);d.inside&&(s=s.slice(0,-1)+Mo(c));const p=l.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+s+p}function IP(e,t,n){return n.options.strong||"*"}function _P(e,t,n,r){return n.safe(e.value,r)}function TP(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function AP(e,t,n){const r=(ry(n)+(n.options.ruleSpaces?" ":"")).repeat(TP(n));return n.options.ruleSpaces?r.slice(0,-1):r}const oy={blockquote:tP,break:Wh,code:aP,definition:uP,emphasis:q1,hardBreak:Wh,heading:pP,html:K1,image:X1,imageReference:J1,inlineCode:Z1,link:ty,linkReference:ny,list:bP,listItem:CP,paragraph:EP,root:zP,strong:iy,text:_P,thematicBreak:AP};function RP(){return{enter:{table:LP,tableData:Gh,tableHeader:Gh,tableRow:OP},exit:{codeText:DP,table:NP,tableData:ou,tableHeader:ou,tableRow:ou}}}function LP(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function NP(e){this.exit(e),this.data.inTable=void 0}function OP(e){this.enter({type:"tableRow",children:[]},e)}function ou(e){this.exit(e)}function Gh(e){this.enter({type:"tableCell",children:[]},e)}function DP(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,jP));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function jP(e,t){return t==="|"?t:e}function FP(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:l,tableCell:s,tableRow:a}};function l(p,g,y,$){return u(f(p,y,$),p.align)}function a(p,g,y,$){const h=c(p,y,$),m=u([h]);return m.slice(0,m.indexOf(`
`))}function s(p,g,y,$){const h=y.enter("tableCell"),m=y.enter("phrasing"),v=y.containerPhrasing(p,{...$,before:o,after:o});return m(),h(),v}function u(p,g){return Zz(p,{align:g,alignDelimiters:r,padding:n,stringLength:i})}function f(p,g,y){const $=p.children;let h=-1;const m=[],v=g.enter("table");for(;++h<$.length;)m[h]=c($[h],g,y);return v(),m}function c(p,g,y){const $=p.children;let h=-1;const m=[],v=g.enter("tableRow");for(;++h<$.length;)m[h]=s($[h],p,g,y);return v(),m}function d(p,g,y){let $=oy.inlineCode(p,g,y);return y.stack.includes("tableCell")&&($=$.replace(/\|/g,"\\$&")),$}}function MP(){return{exit:{taskListCheckValueChecked:Qh,taskListCheckValueUnchecked:Qh,paragraph:UP}}}function BP(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:HP}}}function Qh(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function UP(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let o=-1,l;for(;++o<i.length;){const a=i[o];if(a.type==="paragraph"){l=a;break}}l===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function HP(e,t,n,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",l="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);o&&a.move(l);let s=oy.listItem(e,t,n,{...r,...a.current()});return o&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(f){return f+l}}function VP(){return[bz(),Hz(),Qz(),RP(),MP()]}function WP(e){return{extensions:[Sz(),Vz(e),Yz(),FP(e),BP()]}}const GP={tokenize:JP,partial:!0},ly={tokenize:ZP,partial:!0},ay={tokenize:e5,partial:!0},sy={tokenize:t5,partial:!0},QP={tokenize:n5,partial:!0},uy={name:"wwwAutolink",tokenize:KP,previous:fy},cy={name:"protocolAutolink",tokenize:XP,previous:dy},Cn={name:"emailAutolink",tokenize:qP,previous:py},on={};function YP(){return{text:on}}let nr=48;for(;nr<123;)on[nr]=Cn,nr++,nr===58?nr=65:nr===91&&(nr=97);on[43]=Cn;on[45]=Cn;on[46]=Cn;on[95]=Cn;on[72]=[Cn,cy];on[104]=[Cn,cy];on[87]=[Cn,uy];on[119]=[Cn,uy];function qP(e,t,n){const r=this;let i,o;return l;function l(c){return!$c(c)||!py.call(r,r.previous)||od(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(c))}function a(c){return $c(c)?(e.consume(c),a):c===64?(e.consume(c),s):n(c)}function s(c){return c===46?e.check(QP,f,u)(c):c===45||c===95||Je(c)?(o=!0,e.consume(c),s):f(c)}function u(c){return e.consume(c),i=!0,s}function f(c){return o&&i&&nt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function KP(e,t,n){const r=this;return i;function i(l){return l!==87&&l!==119||!fy.call(r,r.previous)||od(r.events)?n(l):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(GP,e.attempt(ly,e.attempt(ay,o),n),n)(l))}function o(l){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(l)}}function XP(e,t,n){const r=this;let i="",o=!1;return l;function l(c){return(c===72||c===104)&&dy.call(r,r.previous)&&!od(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),a):n(c)}function a(c){if(nt(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),a;if(c===58){const d=i.toLowerCase();if(d==="http"||d==="https")return e.consume(c),s}return n(c)}function s(c){return c===47?(e.consume(c),o?u:(o=!0,s)):n(c)}function u(c){return c===null||ka(c)||ve(c)||Cr(c)||ns(c)?n(c):e.attempt(ly,e.attempt(ay,f),n)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function JP(e,t,n){let r=0;return i;function i(l){return(l===87||l===119)&&r<3?(r++,e.consume(l),i):l===46&&r===3?(e.consume(l),o):n(l)}function o(l){return l===null?n(l):t(l)}}function ZP(e,t,n){let r,i,o;return l;function l(u){return u===46||u===95?e.check(sy,s,a)(u):u===null||ve(u)||Cr(u)||u!==45&&ns(u)?s(u):(o=!0,e.consume(u),l)}function a(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),l}function s(u){return i||r||!o?n(u):t(u)}}function e5(e,t){let n=0,r=0;return i;function i(l){return l===40?(n++,e.consume(l),i):l===41&&r<n?o(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?e.check(sy,t,o)(l):l===null||ve(l)||Cr(l)?t(l):(e.consume(l),i)}function o(l){return l===41&&r++,e.consume(l),i}}function t5(e,t,n){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),o):a===93?(e.consume(a),i):a===60||a===null||ve(a)||Cr(a)?t(a):n(a)}function i(a){return a===null||a===40||a===91||ve(a)||Cr(a)?t(a):r(a)}function o(a){return nt(a)?l(a):n(a)}function l(a){return a===59?(e.consume(a),r):nt(a)?(e.consume(a),l):n(a)}}function n5(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return Je(o)?n(o):t(o)}}function fy(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ve(e)}function dy(e){return!nt(e)}function py(e){return!(e===47||$c(e))}function $c(e){return e===43||e===45||e===46||e===95||Je(e)}function od(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const r5={tokenize:f5,partial:!0};function i5(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:s5,continuation:{tokenize:u5},exit:c5}},text:{91:{name:"gfmFootnoteCall",tokenize:a5},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:o5,resolveTo:l5}}}}function o5(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l;for(;i--;){const s=r.events[i][1];if(s.type==="labelImage"){l=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return a;function a(s){if(!l||!l._balanced)return n(s);const u=qt(r.sliceSerialize({start:l.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function l5(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function a5(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,l;return a;function a(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!l||c===null||c===91||ve(c))return n(c);if(c===93){e.exit("chunkString");const d=e.exit("gfmFootnoteCallString");return i.includes(qt(r.sliceSerialize(d)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return ve(c)||(l=!0),o++,e.consume(c),c===92?f:u}function f(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function s5(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,l=0,a;return s;function s(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(g)}function f(g){if(l>999||g===93&&!a||g===null||g===91||ve(g))return n(g);if(g===93){e.exit("chunkString");const y=e.exit("gfmFootnoteDefinitionLabelString");return o=qt(r.sliceSerialize(y)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),d}return ve(g)||(a=!0),l++,e.consume(g),g===92?c:f}function c(g){return g===91||g===92||g===93?(e.consume(g),l++,f):f(g)}function d(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(o)||i.push(o),le(e,p,"gfmFootnoteDefinitionWhitespace")):n(g)}function p(g){return t(g)}}function u5(e,t,n){return e.check(Xo,t,e.attempt(r5,t,n))}function c5(e){e.exit("gfmFootnoteDefinition")}function f5(e,t,n){const r=this;return le(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?t(o):n(o)}}function d5(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(l,a){let s=-1;for(;++s<l.length;)if(l[s][0]==="enter"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._close){let u=s;for(;u--;)if(l[u][0]==="exit"&&l[u][1].type==="strikethroughSequenceTemporary"&&l[u][1]._open&&l[s][1].end.offset-l[s][1].start.offset===l[u][1].end.offset-l[u][1].start.offset){l[s][1].type="strikethroughSequence",l[u][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},l[u][1].start),end:Object.assign({},l[s][1].end)},c={type:"strikethroughText",start:Object.assign({},l[u][1].end),end:Object.assign({},l[s][1].start)},d=[["enter",f,a],["enter",l[u][1],a],["exit",l[u][1],a],["enter",c,a]],p=a.parser.constructs.insideSpan.null;p&&St(d,d.length,0,rs(p,l.slice(u+1,s),a)),St(d,d.length,0,[["exit",c,a],["enter",l[s][1],a],["exit",l[s][1],a],["exit",f,a]]),St(l,u-1,s-u+3,d),s=u+d.length-2;break}}for(s=-1;++s<l.length;)l[s][1].type==="strikethroughSequenceTemporary"&&(l[s][1].type="data");return l}function o(l,a,s){const u=this.previous,f=this.events;let c=0;return d;function d(g){return u===126&&f[f.length-1][1].type!=="characterEscape"?s(g):(l.enter("strikethroughSequenceTemporary"),p(g))}function p(g){const y=vi(u);if(g===126)return c>1?s(g):(l.consume(g),c++,p);if(c<2&&!n)return s(g);const $=l.exit("strikethroughSequenceTemporary"),h=vi(g);return $._open=!h||h===2&&!!y,$._close=!y||y===2&&!!h,a(g)}}}class p5{constructor(){this.map=[]}add(t,n,r){h5(this,t,n,r)}consume(t){if(this.map.sort(function(o,l){return o[0]-l[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const o of i)t.push(o);i=r.pop()}this.map.length=0}}function h5(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function g5(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function m5(){return{flow:{null:{name:"table",tokenize:v5,resolveAll:y5}}}}function v5(e,t,n){const r=this;let i=0,o=0,l;return a;function a(E){let I=r.events.length-1;for(;I>-1;){const H=r.events[I][1].type;if(H==="lineEnding"||H==="linePrefix")I--;else break}const O=I>-1?r.events[I][1].type:null,V=O==="tableHead"||O==="tableRow"?k:s;return V===k&&r.parser.lazy[r.now().line]?n(E):V(E)}function s(E){return e.enter("tableHead"),e.enter("tableRow"),u(E)}function u(E){return E===124||(l=!0,o+=1),f(E)}function f(E){return E===null?n(E):W(E)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),p):n(E):re(E)?le(e,f,"whitespace")(E):(o+=1,l&&(l=!1,i+=1),E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),l=!0,f):(e.enter("data"),c(E)))}function c(E){return E===null||E===124||ve(E)?(e.exit("data"),f(E)):(e.consume(E),E===92?d:c)}function d(E){return E===92||E===124?(e.consume(E),c):c(E)}function p(E){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(E):(e.enter("tableDelimiterRow"),l=!1,re(E)?le(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):g(E))}function g(E){return E===45||E===58?$(E):E===124?(l=!0,e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),y):P(E)}function y(E){return re(E)?le(e,$,"whitespace")(E):$(E)}function $(E){return E===58?(o+=1,l=!0,e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),h):E===45?(o+=1,h(E)):E===null||W(E)?w(E):P(E)}function h(E){return E===45?(e.enter("tableDelimiterFiller"),m(E)):P(E)}function m(E){return E===45?(e.consume(E),m):E===58?(l=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(E),e.exit("tableDelimiterMarker"),v):(e.exit("tableDelimiterFiller"),v(E))}function v(E){return re(E)?le(e,w,"whitespace")(E):w(E)}function w(E){return E===124?g(E):E===null||W(E)?!l||i!==o?P(E):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(E)):P(E)}function P(E){return n(E)}function k(E){return e.enter("tableRow"),b(E)}function b(E){return E===124?(e.enter("tableCellDivider"),e.consume(E),e.exit("tableCellDivider"),b):E===null||W(E)?(e.exit("tableRow"),t(E)):re(E)?le(e,b,"whitespace")(E):(e.enter("data"),z(E))}function z(E){return E===null||E===124||ve(E)?(e.exit("data"),b(E)):(e.consume(E),E===92?R:z)}function R(E){return E===92||E===124?(e.consume(E),z):z(E)}}function y5(e,t){let n=-1,r=!0,i=0,o=[0,0,0,0],l=[0,0,0,0],a=!1,s=0,u,f,c;const d=new p5;for(;++n<e.length;){const p=e[n],g=p[1];p[0]==="enter"?g.type==="tableHead"?(a=!1,s!==0&&(Yh(d,t,s,u,f),f=void 0,s=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",u,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],l=[0,n+1,0,0],a&&(a=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",f,t]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,l[2]===0&&(o[1]!==0&&(l[0]=l[1],c=xl(d,t,o,i,void 0,c),o=[0,0,0,0]),l[2]=n)):g.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(l[0]=l[1],c=xl(d,t,o,i,void 0,c)),o=l,l=[o[1],n,0,0])):g.type==="tableHead"?(a=!0,s=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(s=n,o[1]!==0?(l[0]=l[1],c=xl(d,t,o,i,n,c)):l[1]!==0&&(c=xl(d,t,l,i,n,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(l[3]=n)}for(s!==0&&Yh(d,t,s,u,f),d.consume(t.events),n=-1;++n<t.events.length;){const p=t.events[n];p[0]==="enter"&&p[1].type==="table"&&(p[1]._align=g5(t.events,n))}return e}function xl(e,t,n,r,i,o){const l=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(o.end=Object.assign({},Fr(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const s=Fr(t.events,n[1]);if(o={type:l,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){const u=Fr(t.events,n[2]),f=Fr(t.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const d=t.events[n[2]],p=t.events[n[3]];if(d[1].end=Object.assign({},p[1].end),d[1].type="chunkText",d[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,y=n[3]-n[2]-1;e.add(g,y,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(o.end=Object.assign({},Fr(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function Yh(e,t,n,r,i){const o=[],l=Fr(t.events,n);i&&(i.end=Object.assign({},l),o.push(["exit",i,t])),r.end=Object.assign({},l),o.push(["exit",r,t]),e.add(n+1,0,o)}function Fr(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const x5={name:"tasklistCheck",tokenize:k5};function w5(){return{text:{91:x5}}}function k5(e,t,n){const r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),o)}function o(s){return ve(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),l):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),l):n(s)}function l(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(s)}function a(s){return W(s)?t(s):re(s)?e.check({tokenize:b5},t,n)(s):n(s)}}function b5(e,t,n){return le(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function S5(e){return S1([YP(),i5(),d5(e),m5(),w5()])}const C5={};function E5(e){const t=this,n=e||C5,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),l=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(S5(n)),o.push(VP()),l.push(WP(n))}var He=function(){return He=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},He.apply(this,arguments)};function yi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var be="-ms-",go="-moz-",fe="-webkit-",hy="comm",as="rule",ld="decl",$5="@import",z5="@namespace",gy="@keyframes",P5="@layer",my=Math.abs,ad=String.fromCharCode,zc=Object.assign;function I5(e,t){return Me(e,0)^45?(((t<<2^Me(e,0))<<2^Me(e,1))<<2^Me(e,2))<<2^Me(e,3):0}function vy(e){return e.trim()}function pn(e,t){return(e=t.exec(e))?e[0]:e}function ee(e,t,n){return e.replace(t,n)}function Bl(e,t,n){return e.indexOf(t,n)}function Me(e,t){return e.charCodeAt(t)|0}function Er(e,t,n){return e.slice(t,n)}function Ht(e){return e.length}function yy(e){return e.length}function Xi(e,t){return t.push(e),e}function _5(e,t){return e.map(t).join("")}function qh(e,t){return e.filter(function(n){return!pn(n,t)})}var ss=1,xi=1,xy=0,Ot=0,Le=0,Ii="";function us(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ss,column:xi,length:l,return:"",siblings:a}}function Pn(e,t){return zc(us("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function jr(e){for(;e.root;)e=Pn(e.root,{children:[e]});Xi(e,e.siblings)}function T5(){return Le}function A5(){return Le=Ot>0?Me(Ii,--Ot):0,xi--,Le===10&&(xi=1,ss--),Le}function Kt(){return Le=Ot<xy?Me(Ii,Ot++):0,xi++,Le===10&&(xi=1,ss++),Le}function Dn(){return Me(Ii,Ot)}function Ul(){return Ot}function cs(e,t){return Er(Ii,e,t)}function Bo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R5(e){return ss=xi=1,xy=Ht(Ii=e),Ot=0,[]}function L5(e){return Ii="",e}function lu(e){return vy(cs(Ot-1,Pc(e===91?e+2:e===40?e+1:e)))}function N5(e){for(;(Le=Dn())&&Le<33;)Kt();return Bo(e)>2||Bo(Le)>3?"":" "}function O5(e,t){for(;--t&&Kt()&&!(Le<48||Le>102||Le>57&&Le<65||Le>70&&Le<97););return cs(e,Ul()+(t<6&&Dn()==32&&Kt()==32))}function Pc(e){for(;Kt();)switch(Le){case e:return Ot;case 34:case 39:e!==34&&e!==39&&Pc(Le);break;case 40:e===41&&Pc(e);break;case 92:Kt();break}return Ot}function D5(e,t){for(;Kt()&&e+Le!==57;)if(e+Le===84&&Dn()===47)break;return"/*"+cs(t,Ot-1)+"*"+ad(e===47?e:Kt())}function j5(e){for(;!Bo(Dn());)Kt();return cs(e,Ot)}function F5(e){return L5(Hl("",null,null,null,[""],e=R5(e),0,[0],e))}function Hl(e,t,n,r,i,o,l,a,s){for(var u=0,f=0,c=l,d=0,p=0,g=0,y=1,$=1,h=1,m=0,v="",w=i,P=o,k=r,b=v;$;)switch(g=m,m=Kt()){case 40:if(g!=108&&Me(b,c-1)==58){Bl(b+=ee(lu(m),"&","&\f"),"&\f",my(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:b+=lu(m);break;case 9:case 10:case 13:case 32:b+=N5(g);break;case 92:b+=O5(Ul()-1,7);continue;case 47:switch(Dn()){case 42:case 47:Xi(M5(D5(Kt(),Ul()),t,n,s),s),(Bo(g||1)==5||Bo(Dn()||1)==5)&&Ht(b)&&Er(b,-1,void 0)!==" "&&(b+=" ");break;default:b+="/"}break;case 123*y:a[u++]=Ht(b)*h;case 125*y:case 59:case 0:switch(m){case 0:case 125:$=0;case 59+f:h==-1&&(b=ee(b,/\f/g,"")),p>0&&(Ht(b)-c||y===0&&g===47)&&Xi(p>32?Xh(b+";",r,n,c-1,s):Xh(ee(b," ","")+";",r,n,c-2,s),s);break;case 59:b+=";";default:if(Xi(k=Kh(b,t,n,u,f,i,a,v,w=[],P=[],c,o),o),m===123)if(f===0)Hl(b,t,k,k,w,o,c,a,P);else{switch(d){case 99:if(Me(b,3)===110)break;case 108:if(Me(b,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Hl(e,k,k,r&&Xi(Kh(e,k,k,0,0,i,a,v,i,w=[],c,P),P),i,P,c,a,r?w:P):Hl(b,k,k,k,[""],P,0,a,P)}}u=f=p=0,y=h=1,v=b="",c=l;break;case 58:c=1+Ht(b),p=g;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&A5()==125)continue}switch(b+=ad(m),m*y){case 38:h=f>0?1:(b+="\f",-1);break;case 44:a[u++]=(Ht(b)-1)*h,h=1;break;case 64:Dn()===45&&(b+=lu(Kt())),d=Dn(),f=c=Ht(v=b+=j5(Ul())),m++;break;case 45:g===45&&Ht(b)==2&&(y=0)}}return o}function Kh(e,t,n,r,i,o,l,a,s,u,f,c){for(var d=i-1,p=i===0?o:[""],g=yy(p),y=0,$=0,h=0;y<r;++y)for(var m=0,v=Er(e,d+1,d=my($=l[y])),w=e;m<g;++m)(w=vy($>0?p[m]+" "+v:ee(v,/&\f/g,p[m])))&&(s[h++]=w);return us(e,t,n,i===0?as:a,s,u,f,c)}function M5(e,t,n,r){return us(e,t,n,hy,ad(T5()),Er(e,2,-2),0,r)}function Xh(e,t,n,r,i){return us(e,t,n,ld,Er(e,0,r),Er(e,r+1,-1),r,i)}function wy(e,t,n){switch(I5(e,t)){case 5103:return fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+e+e;case 4855:return fe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return go+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+e+go+e+be+e+e;case 5936:switch(Me(e,t+11)){case 114:return fe+e+be+ee(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return fe+e+be+ee(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return fe+e+be+ee(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return fe+e+be+e+e;case 6165:return fe+e+be+"flex-"+e+e;case 5187:return fe+e+ee(e,/(\w+).+(:[^]+)/,fe+"box-$1$2"+be+"flex-$1$2")+e;case 5443:return fe+e+be+"flex-item-"+ee(e,/flex-|-self/g,"")+(pn(e,/flex-|baseline/)?"":be+"grid-row-"+ee(e,/flex-|-self/g,""))+e;case 4675:return fe+e+be+"flex-line-pack"+ee(e,/align-content|flex-|-self/g,"")+e;case 5548:return fe+e+be+ee(e,"shrink","negative")+e;case 5292:return fe+e+be+ee(e,"basis","preferred-size")+e;case 6060:return fe+"box-"+ee(e,"-grow","")+fe+e+be+ee(e,"grow","positive")+e;case 4554:return fe+ee(e,/([^-])(transform)/g,"$1"+fe+"$2")+e;case 6187:return ee(ee(ee(e,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),e,"")+e;case 5495:case 3959:return ee(e,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return ee(ee(e,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+be+"flex-pack:$3"),/space-between/,"justify")+fe+e+e;case 4200:if(!pn(e,/flex-|baseline/))return be+"grid-column-align"+Er(e,t)+e;break;case 2592:case 3360:return be+ee(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pn(r.props,/grid-\w+-end/)})?~Bl(e+(n=n[t].value),"span",0)?e:be+ee(e,"-start","")+e+be+"grid-row-span:"+(~Bl(n,"span",0)?pn(n,/\d+/):+pn(n,/\d+/)-+pn(e,/\d+/))+";":be+ee(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pn(r.props,/grid-\w+-start/)})?e:be+ee(ee(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ee(e,/(.+)-inline(.+)/,fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ht(e)-1-t>6)switch(Me(e,t+1)){case 109:if(Me(e,t+4)!==45)break;case 102:return ee(e,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+go+(Me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Bl(e,"stretch",0)?wy(ee(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ee(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,u){return be+i+":"+o+u+(l?be+i+"-span:"+(a?s:+s-+o)+u:"")+e});case 4949:if(Me(e,t+6)===121)return ee(e,":",":"+fe)+e;break;case 6444:switch(Me(e,Me(e,14)===45?18:11)){case 120:return ee(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Me(e,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+be+"$2box$3")+e;case 100:return ee(e,":",":"+be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(e,"scroll-","scroll-snap-")+e}return e}function Ea(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function B5(e,t,n,r){switch(e.type){case P5:if(e.children.length)break;case $5:case z5:case ld:return e.return=e.return||e.value;case hy:return"";case gy:return e.return=e.value+"{"+Ea(e.children,r)+"}";case as:if(!Ht(e.value=e.props.join(",")))return""}return Ht(n=Ea(e.children,r))?e.return=e.value+"{"+n+"}":""}function U5(e){var t=yy(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function H5(e){return function(t){t.root||(t=t.return)&&e(t)}}function V5(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ld:e.return=wy(e.value,e.length,n);return;case gy:return Ea([Pn(e,{value:ee(e.value,"@","@"+fe)})],r);case as:if(e.length)return _5(n=e.props,function(i){switch(pn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":jr(Pn(e,{props:[ee(i,/:(read-\w+)/,":"+go+"$1")]})),jr(Pn(e,{props:[i]})),zc(e,{props:qh(n,r)});break;case"::placeholder":jr(Pn(e,{props:[ee(i,/:(plac\w+)/,":"+fe+"input-$1")]})),jr(Pn(e,{props:[ee(i,/:(plac\w+)/,":"+go+"$1")]})),jr(Pn(e,{props:[ee(i,/:(plac\w+)/,be+"input-$1")]})),jr(Pn(e,{props:[i]})),zc(e,{props:qh(n,r)});break}return""})}}var W5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xt={},wi=typeof process<"u"&&xt!==void 0&&(xt.REACT_APP_SC_ATTR||xt.SC_ATTR)||"data-styled",ky="active",by="data-styled-version",fs="6.3.11",sd=`/*!sc*/
`,mo=typeof window<"u"&&typeof document<"u",G5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xt.REACT_APP_SC_DISABLE_SPEEDY!==""?xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xt!==void 0&&xt.SC_DISABLE_SPEEDY!==void 0&&xt.SC_DISABLE_SPEEDY!==""&&xt.SC_DISABLE_SPEEDY!=="false"&&xt.SC_DISABLE_SPEEDY),Q5={};function $r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Vl=new Map,$a=new Map,Wl=1,Ji=function(e){if(Vl.has(e))return Vl.get(e);for(;$a.has(Wl);)Wl++;var t=Wl++;return Vl.set(e,t),$a.set(t,e),t},Y5=function(e,t){Wl=t+1,Vl.set(e,t),$a.set(t,e)},ud=Object.freeze([]),ki=Object.freeze({});function Sy(e,t,n){return n===void 0&&(n=ki),e.theme!==n.theme&&e.theme||t||n.theme}var Cy=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),q5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,K5=/(^-|-$)/g;function Jh(e){return e.replace(q5,"-").replace(K5,"")}var X5=/(a)(d)/gi,Zh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ic(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Zh(t%52)+n;return(Zh(t%52)+n).replace(X5,"$1-$2")}var au,sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ey=function(e){return sr(5381,e)};function cd(e){return Ic(Ey(e)>>>0)}function J5(e){return e.displayName||e.name||"Component"}function su(e){return typeof e=="string"&&!0}var $y=typeof Symbol=="function"&&Symbol.for,zy=$y?Symbol.for("react.memo"):60115,Z5=$y?Symbol.for("react.forward_ref"):60112,eI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Py={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nI=((au={})[Z5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},au[zy]=Py,au);function eg(e){return("type"in(t=e)&&t.type.$$typeof)===zy?Py:"$$typeof"in e?nI[e.$$typeof]:eI;var t}var rI=Object.defineProperty,iI=Object.getOwnPropertyNames,tg=Object.getOwnPropertySymbols,oI=Object.getOwnPropertyDescriptor,lI=Object.getPrototypeOf,ng=Object.prototype;function Iy(e,t,n){if(typeof t!="string"){if(ng){var r=lI(t);r&&r!==ng&&Iy(e,r,n)}var i=iI(t);tg&&(i=i.concat(tg(t)));for(var o=eg(e),l=eg(t),a=0;a<i.length;++a){var s=i[a];if(!(s in tI||n&&n[s]||l&&s in l||o&&s in o)){var u=oI(t,s);try{rI(e,s,u)}catch{}}}}return e}function zr(e){return typeof e=="function"}function fd(e){return typeof e=="object"&&"styledComponentId"in e}function hr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function za(e,t){return e.join("")}function Uo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _c(e,t,n){if(n===void 0&&(n=!1),!n&&!Uo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=_c(e[r],t[r]);else if(Uo(t))for(var r in t)e[r]=_c(e[r],t[r]);return e}function dd(e,t){Object.defineProperty(e,"toString",{value:t})}var aI=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(t){if(t===this._cGroup)return this._cIndex;var n=this._cIndex;if(t>this._cGroup)for(var r=this._cGroup;r<t;r++)n+=this.groupSizes[r];else for(r=this._cGroup-1;r>=t;r--)n-=this.groupSizes[r];return this._cGroup=t,this._cIndex=n,n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw $r(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=0,u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r);n>0&&this._cGroup>t&&(this._cIndex-=n)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+=this.tag.getRule(l)+sd;return n},e}(),sI="style[".concat(wi,"][").concat(by,'="').concat(fs,'"]'),uI=new RegExp("^".concat(wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rg=function(e){return typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11},Tc=function(e){if(!e)return document;if(rg(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(rg(t))return t}return document},cI=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},fI=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(sd),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(uI);if(s){var u=0|parseInt(s[1],10),f=s[2];u!==0&&(Y5(f,u),cI(e,f,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},uu=function(e){for(var t=Tc(e.options.target).querySelectorAll(sI),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(wi)!==ky&&(fI(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function dI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _y=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(wi,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(wi,ky),r.setAttribute(by,fs);var l=dI();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},pI=function(){function e(t){this.element=_y(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){var r;if(n.sheet)return n.sheet;for(var i=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets,o=0,l=i.length;o<l;o++){var a=i[o];if(a.ownerNode===n)return a}throw $r(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),hI=function(){function e(t){this.element=_y(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),gI=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(t===this.length?this.rules.push(n):this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ig=mo,mI={isServer:!mo,useCSSOMInjection:!G5},Pa=function(){function e(t,n,r){t===void 0&&(t=ki),n===void 0&&(n={});var i=this;this.options=He(He({},mI),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&mo&&ig&&(ig=!1,uu(this)),dd(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",u=function(c){var d=function(h){return $a.get(h)}(c);if(d===void 0)return"continue";var p=o.names.get(d);if(p===void 0||!p.size)return"continue";var g=l.getGroup(c);if(g.length===0)return"continue";var y=wi+".g"+c+'[id="'+d+'"]',$="";p.forEach(function(h){h.length>0&&($+=h+",")}),s+=g+y+'{content:"'+$+'"}'+sd},f=0;f<a;f++)u(f);return s}(i)})}return e.registerId=function(t){return Ji(t)},e.prototype.rehydrate=function(){!this.server&&mo&&uu(this)},e.prototype.reconstructWithOptions=function(t,n){n===void 0&&(n=!0);var r=new e(He(He({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&mo&&t.target!==this.options.target&&Tc(this.options.target)!==Tc(t.target)&&uu(r),r},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new gI(i):r?new pI(i):new hI(i)}(this.options),new aI(t)));var t},e.prototype.hasNameForId=function(t,n){var r,i;return(i=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&i!==void 0&&i},e.prototype.registerName=function(t,n){Ji(t);var r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ji(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ji(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vI=/&/g,hn=47,ur=42;function og(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(r!==0||i||l!==hn||e.charCodeAt(o+1)!==ur)if(i)l===ur&&e.charCodeAt(o+1)===hn&&(i=!1,o++);else if(l!==34&&l!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,o++}return n!==0||r!==0}function Ty(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ty(n.children,t)),n})}function yI(e){var t,n,r,i=ki,o=i.options,l=o===void 0?ki:o,a=i.plugins,s=a===void 0?ud:a,u=function(g,y,$){return $.startsWith(n)&&$.endsWith(n)&&$.replaceAll(n,"").length>0?".".concat(t):g},f=s.slice();f.push(function(g){g.type===as&&g.value.includes("&")&&(r||(r=new RegExp("\\".concat(n,"\\b"),"g")),g.props[0]=g.props[0].replace(vI,n).replace(r,u))}),l.prefix&&f.push(V5),f.push(B5);var c=[],d=U5(f.concat(H5(function(g){return c.push(g)}))),p=function(g,y,$,h){y===void 0&&(y=""),$===void 0&&($=""),h===void 0&&(h="&"),t=h,n=y,r=void 0;var m=function(w){if(!og(w))return w;for(var P=w.length,k="",b=0,z=0,R=0,E=!1,I=0;I<P;I++){var O=w.charCodeAt(I);if(R!==0||E||O!==hn||w.charCodeAt(I+1)!==ur)if(E)O===ur&&w.charCodeAt(I+1)===hn&&(E=!1,I++);else if(O!==34&&O!==39||I!==0&&w.charCodeAt(I-1)===92){if(R===0)if(O===123)z++;else if(O===125){if(--z<0){for(var V=I+1;V<P;){var H=w.charCodeAt(V);if(H===59||H===10)break;V++}V<P&&w.charCodeAt(V)===59&&V++,z=0,I=V-1,b=V;continue}z===0&&(k+=w.substring(b,I+1),b=I+1)}else O===59&&z===0&&(k+=w.substring(b,I+1),b=I+1)}else R===0?R=O:R===O&&(R=0);else E=!0,I++}if(b<P){var Y=w.substring(b);og(Y)||(k+=Y)}return k}(function(w){if(w.indexOf("//")===-1)return w;for(var P=w.length,k=[],b=0,z=0,R=0,E=0;z<P;){var I=w.charCodeAt(z);if(I!==34&&I!==39||z!==0&&w.charCodeAt(z-1)===92)if(R===0)if(I===hn&&z+1<P&&w.charCodeAt(z+1)===ur){for(z+=2;z+1<P&&(w.charCodeAt(z)!==ur||w.charCodeAt(z+1)!==hn);)z++;z+=2}else if(I===40&&z>=3&&(32|w.charCodeAt(z-1))==108&&(32|w.charCodeAt(z-2))==114&&(32|w.charCodeAt(z-3))==117)E=1,z++;else if(E>0)I===41?E--:I===40&&E++,z++;else if(I===ur&&z+1<P&&w.charCodeAt(z+1)===hn)z>b&&k.push(w.substring(b,z)),b=z+=2;else if(I===hn&&z+1<P&&w.charCodeAt(z+1)===hn){for(z>b&&k.push(w.substring(b,z));z<P&&w.charCodeAt(z)!==10;)z++;b=z}else z++;else z++;else R===0?R=I:R===I&&(R=0),z++}return b===0?w:(b<P&&k.push(w.substring(b)),k.join(""))}(g)),v=F5($||y?"".concat($," ").concat(y," { ").concat(m," }"):m);return l.namespace&&(v=Ty(v,l.namespace)),c=[],Ea(v,d),c};return p.hash=s.length?s.reduce(function(g,y){return y.name||$r(15),sr(g,y.name)},5381).toString():"",p}var xI=new Pa,Ac=yI(),Ay=Oe.createContext({shouldForwardProp:void 0,styleSheet:xI,stylis:Ac});Ay.Consumer;Oe.createContext(void 0);function Rc(){return Oe.useContext(Ay)}var Ry=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ac);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,dd(this,function(){throw $r(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ac),this.name+t.hash},e}();function wI(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in W5||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var kI=function(e){return e>="A"&&e<="Z"};function lg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;kI(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ly=function(e){return e==null||e===!1||e===""},Ny=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Ly(r)&&(Array.isArray(r)&&r.isCss||zr(r)?t.push("".concat(lg(n),":"),r,";"):Uo(r)?t.push.apply(t,yi(yi(["".concat(n," {")],Ny(r),!1),["}"],!1)):t.push("".concat(lg(n),": ").concat(wI(n,r),";")))}return t};function Qn(e,t,n,r,i){if(i===void 0&&(i=[]),typeof e=="string")return e&&i.push(e),i;if(Ly(e))return i;if(fd(e))return i.push(".".concat(e.styledComponentId)),i;if(zr(e)){if(!zr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return i.push(e),i;var o=e(t);return Qn(o,t,n,r,i)}var l;if(e instanceof Ry)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(Uo(e)){for(var a=Ny(e),s=0;s<a.length;s++)i.push(a[s]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(s=0;s<e.length;s++)Qn(e[s],t,n,r,i);return i}function Oy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zr(n)&&!fd(n))return!1}return!0}var bI=Ey(fs),SI=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Oy(t),this.componentId=n,this.baseHash=sr(bI,n),this.baseStyle=r,Pa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=hr(i,this.staticRulesId);else{var o=za(Qn(this.rules,t,n,r)),l=Ic(sr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=hr(i,l),this.staticRulesId=l}else{for(var s=sr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")u+=c;else if(c){var d=za(Qn(c,t,n,r));s=sr(sr(s,String(f)),d),u+=d}}if(u){var p=Ic(s>>>0);if(!n.hasNameForId(this.componentId,p)){var g=r(u,".".concat(p),void 0,this.componentId);n.insertRules(this.componentId,p,g)}i=hr(i,p)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Ji(this.componentId)):""}},e}(),Ho=Oe.createContext(void 0);Ho.Consumer;function CI(e){var t=Oe.useContext(Ho),n=Oe.useMemo(function(){return function(r,i){if(!r)throw $r(14);if(zr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw $r(8);return i?He(He({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Oe.createElement(Ho.Provider,{value:n},e.children):null}var cu={};function EI(e,t,n){var r=fd(e),i=e,o=!su(e),l=t.attrs,a=l===void 0?ud:l,s=t.componentId,u=s===void 0?function(w,P){var k=typeof w!="string"?"sc":Jh(w);cu[k]=(cu[k]||0)+1;var b="".concat(k,"-").concat(cd(fs+k+cu[k]));return P?"".concat(P,"-").concat(b):b}(t.displayName,t.parentComponentId):s,f=t.displayName,c=f===void 0?function(w){return su(w)?"styled.".concat(w):"Styled(".concat(J5(w),")")}(e):f,d=t.displayName&&t.componentId?"".concat(Jh(t.displayName),"-").concat(t.componentId):t.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;g=function(w,P){return y(w,P)&&$(w,P)}}else g=y}var h=new SI(n,d,r?i.componentStyle:void 0);function m(w,P){return function(k,b,z){var R=k.attrs,E=k.componentStyle,I=k.defaultProps,O=k.foldedComponentIds,V=k.styledComponentId,H=k.target,Y=Oe.useContext(Ho),de=Rc(),se=k.shouldForwardProp||de.shouldForwardProp,D=Sy(b,Y,I)||ki,B=function(ne,M,q){for(var te,he=He(He({},M),{className:void 0,theme:q}),lt=0;lt<ne.length;lt+=1){var Dt=zr(te=ne[lt])?te(he):te;for(var We in Dt)We==="className"?he.className=hr(he.className,Dt[We]):We==="style"?he.style=He(He({},he.style),Dt[We]):he[We]=Dt[We]}return"className"in M&&typeof M.className=="string"&&(he.className=hr(he.className,M.className)),he}(R,b,D),x=B.as||H,Q={};for(var G in B)B[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&B.theme===D||(G==="forwardedAs"?Q.as=B.forwardedAs:se&&!se(G,x)||(Q[G]=B[G]));var S=function(ne,M){var q=Rc(),te=ne.generateAndInjectStyles(M,q.styleSheet,q.stylis);return te}(E,B),ge=S.className,_e=hr(O,V);return ge&&(_e+=" "+ge),B.className&&(_e+=" "+B.className),Q[su(x)&&!Cy.has(x)?"class":"className"]=_e,z&&(Q.ref=z),T.createElement(x,Q)}(v,w,P)}m.displayName=c;var v=Oe.forwardRef(m);return v.attrs=p,v.componentStyle=h,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?hr(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(P){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];for(var z=0,R=k;z<R.length;z++)_c(P,R[z],!0);return P}({},i.defaultProps,w):w}}),dd(v,function(){return".".concat(v.styledComponentId)}),o&&Iy(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function ag(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var sg=function(e){return Object.assign(e,{isCss:!0})};function K(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zr(e)||Uo(e))return sg(Qn(ag(ud,yi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Qn(r):sg(Qn(ag(r,t)))}function Lc(e,t,n){if(n===void 0&&(n=ki),!t)throw $r(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,K.apply(void 0,yi([i],o,!1)))};return r.attrs=function(i){return Lc(e,t,He(He({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Lc(e,t,He(He({},n),i))},r}var Dy=function(e){return Lc(EI,e)},C=Dy;Cy.forEach(function(e){C[e]=Dy(e)});var $I=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Oy(t),Pa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(za(Qn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Pa.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function zI(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=K.apply(void 0,yi([e],t,!1)),i="sc-global-".concat(cd(JSON.stringify(r))),o=new $I(r,i),l=new WeakMap,a=function(u){var f=Rc(),c=Oe.useContext(Ho),d=l.get(f.styleSheet);return d===void 0&&(d=f.styleSheet.allocateGSInstance(i),l.set(f.styleSheet,d)),(typeof window>"u"||!f.styleSheet.server)&&s(d,u,f.styleSheet,c,f.stylis),Oe.useLayoutEffect(function(){return f.styleSheet.server||s(d,u,f.styleSheet,c,f.stylis),function(){var p;o.removeStyles(d,f.styleSheet),p=f.styleSheet.options.target,typeof document<"u"&&(p??document).querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(g){return g.remove()})}},[d,u,f.styleSheet,c,f.stylis]),null};function s(u,f,c,d,p){if(o.isStatic)o.renderStyles(u,Q5,c,p);else{var g=He(He({},f),{theme:Sy(f,d,a.defaultProps)});o.renderStyles(u,g,c,p)}}return Oe.memo(a)}function pd(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=za(K.apply(void 0,yi([e],t,!1))),i=cd(r);return new Ry(i,r)}var F={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white12:"rgba(255, 255, 255, 0.12)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderMuted:"rgba(148, 163, 184, 0.14)",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#708196",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74"},at={0:"0px",1:"4px",2:"6px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},Wt={xs:"10px",sm:"12px",md:"14px",lg:"16px","2xl":"20px","3xl":"22px","4xl":"24px",pill:"999px"},zt={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size4xl:"24px",size5xl:"28px"},vo={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px rgba(0, 0, 0, 0.45)",popover:"0 24px 60px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",hoverLift:"0 12px 24px rgba(41, 98, 217, 0.24)",focusRing:"0 0 0 3px rgba(77, 136, 255, 0.16)"},PI={fast:"0.16s ease",normal:"0.24s ease"},II={sm:640,md:768,lg:1024,xl:1280},fu={popover:500,drawer:1100,modal:1200},ue={name:"portalDark",colors:{bgCanvas:F.slate950,bgCanvasAlt:F.slate925,bgRadialA:F.radialA,bgRadialB:F.radialB,surfaceHeader:F.slate880,surfacePanel:F.slate860,surfaceRaised:F.slate925,surfaceMuted:F.slate840,surfaceInteractive:F.white04,surfaceActive:F.blueTint16,borderSubtle:F.white08,borderStrong:F.borderStrong,textPrimary:F.textPrimary,textSecondary:F.textSecondary,textMuted:F.textMuted,textSoft:F.textSoft,accent:F.blue500,accentStrong:F.blue600,accentSoft:F.blue300,success:F.green500,warning:F.amber500,danger:F.red300},radius:{sm:Wt.xs,md:Wt.md,lg:Wt["2xl"],xl:Wt["4xl"],pill:Wt.pill},shadows:{panel:vo.panel,floating:vo.floating},breakpoints:II,motion:PI,typography:{fontSans:zt.fontSans,fontMono:zt.fontMono}},_I=K`
  background: var(--ig-color-surface-panel);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`;K`
  background: var(--ig-color-surface-raised);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`;K`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`;K`
  ${_I}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`;K`
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
`;K`
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
`;K`
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
`;K`
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
`;K`
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
`;K`
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
`;K`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background:
    radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
    radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
    var(--ig-color-bg-canvas);
  color: var(--ig-color-text-primary);
`;var TI=K`
  background: var(--ig-color-surface-header);
  border-bottom: 1px solid var(--ig-color-border-subtle);
  backdrop-filter: blur(14px);
`;K`
  ${TI}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`;K`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`;var AI={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"},RI={"--ig-color-bg-canvas":ue.colors.bgCanvas,"--ig-color-bg-canvas-alt":ue.colors.bgCanvasAlt,"--ig-color-bg-radial-a":ue.colors.bgRadialA,"--ig-color-bg-radial-b":ue.colors.bgRadialB,"--ig-color-surface-header":ue.colors.surfaceHeader,"--ig-color-surface-panel":ue.colors.surfacePanel,"--ig-color-surface-raised":ue.colors.surfaceRaised,"--ig-color-surface-muted":ue.colors.surfaceMuted,"--ig-color-surface-interactive":ue.colors.surfaceInteractive,"--ig-color-surface-active":ue.colors.surfaceActive,"--ig-color-border-subtle":ue.colors.borderSubtle,"--ig-color-border-strong":ue.colors.borderStrong,"--ig-color-text-primary":ue.colors.textPrimary,"--ig-color-text-secondary":ue.colors.textSecondary,"--ig-color-text-muted":ue.colors.textMuted,"--ig-color-text-soft":ue.colors.textSoft,"--ig-color-accent":ue.colors.accent,"--ig-color-accent-strong":ue.colors.accentStrong,"--ig-color-accent-soft":ue.colors.accentSoft,"--ig-color-success":ue.colors.success,"--ig-color-warning":ue.colors.warning,"--ig-color-danger":ue.colors.danger,"--ig-color-surface-card-a":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":F.white07,"--ig-color-surface-focus":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":F.blueTint38,"--ig-color-accent-soft-surface":F.blueTint12,"--ig-color-accent-soft-surface-hover":F.blueTint18,"--ig-color-inset-highlight":"rgba(255, 255, 255, 0.04)","--ig-radius-sm":ue.radius.sm,"--ig-radius-md":ue.radius.md,"--ig-radius-lg":ue.radius.lg,"--ig-radius-xl":ue.radius.xl,"--ig-radius-pill":ue.radius.pill,"--ig-radius-xs":Wt.xs,"--ig-radius-sm-alt":Wt.sm,"--ig-radius-lg-alt":Wt.lg,"--ig-radius-2xl":Wt["2xl"],"--ig-radius-3xl":Wt["3xl"],"--ig-radius-4xl":Wt["4xl"],"--ig-shadow-panel":ue.shadows.panel,"--ig-shadow-floating":ue.shadows.floating,"--ig-shadow-popover":vo.popover,"--ig-shadow-hover-lift":vo.hoverLift,"--ig-shadow-focus-ring":vo.focusRing,"--ig-font-sans":ue.typography.fontSans,"--ig-font-mono":ue.typography.fontMono,"--ig-font-size-2xs":zt.size2xs,"--ig-font-size-xs":zt.sizeXs,"--ig-font-size-sm":zt.sizeSm,"--ig-font-size-md":zt.sizeMd,"--ig-font-size-lg":zt.sizeLg,"--ig-font-size-xl":zt.sizeXl,"--ig-font-size-2xl":zt.size2xl,"--ig-font-size-3xl":zt.size3xl,"--ig-font-size-4xl":zt.size4xl,"--ig-font-size-5xl":zt.size5xl,"--ig-space-0":at[0],"--ig-space-1":at[1],"--ig-space-2":at[2],"--ig-space-3":at[3],"--ig-space-4":at[4],"--ig-space-5":at[5],"--ig-space-6":at[6],"--ig-space-7":at[7],"--ig-space-8":at[8],"--ig-space-9":at[9],"--ig-space-10":at[10],"--ig-space-11":at[11],"--ig-space-12":at[12],"--ig-space-13":at[13],"--ig-z-popover":String(fu.popover),"--ig-z-drawer":String(fu.drawer),"--ig-z-modal":String(fu.modal),"--ig-scrollbar-thumb":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":F.greenTint18,"--ig-color-status-running-text":F.textSuccess,"--ig-color-status-completed-bg":F.cyanTint18,"--ig-color-status-completed-text":F.textCyan,"--ig-color-status-queued-bg":F.blueTint18,"--ig-color-status-queued-text":F.textBlue,"--ig-color-status-draft-bg":F.amberTint20,"--ig-color-status-draft-text":F.textWarning,"--ig-color-status-failed-bg":F.redTint18,"--ig-color-status-failed-text":F.textDanger,"--ig-color-status-stopped-bg":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":F.textSlateSoft,"--ig-color-status-interrupted-bg":F.amberTint18,"--ig-color-status-interrupted-text":F.textOrange,"--ig-color-status-warning-bg":F.amberTint18,"--ig-color-status-warning-text":F.textOrange,"--ig-color-status-idle-bg":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":F.textSlate,"--ig-color-alert-info-bg":F.blueTint12,"--ig-color-alert-info-border":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":F.textInfo,"--ig-color-alert-success-bg":F.greenTint12,"--ig-color-alert-success-border":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":F.textSuccessSoft,"--ig-color-alert-warning-bg":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":F.textWarningSoft,"--ig-color-alert-danger-bg":F.redTint12,"--ig-color-alert-danger-border":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":F.textDangerSoft,"--ig-color-chart-1":F.blue500,"--ig-color-chart-2":F.green500,"--ig-color-chart-3":F.amber500,"--ig-color-chart-4":F.red300,"--ig-color-chart-5":F.blue300,"--ig-color-chart-6":F.violet300,"--ig-color-chart-grid":"rgba(255, 255, 255, 0.08)","--ig-color-badge-neutral":F.white08,"--ig-color-badge-accent":F.blueTint18,"--ig-color-badge-success":F.greenTint18,"--ig-color-badge-warning":F.amberTint18,"--ig-color-badge-danger":F.redTint18,"--ig-color-progress-track":F.white08,"--ig-color-skeleton-start":F.white06,"--ig-color-skeleton-mid":F.white12,"--ig-color-image-card-hover-border":F.blueTint28,"--ig-color-image-card-selected-border":F.blueTint42,"--ig-color-image-card-selected-ring":F.blueTint18,"--ig-color-image-card-gradient-a":F.blueTint14,"--ig-color-image-card-gradient-b":F.greenTint12,"--ig-color-avatar-bg":F.blueTint18,"--ig-color-dropdown-trigger-shadow":"inset 0 1px 0 var(--ig-color-inset-highlight), 0 10px 24px rgba(0, 0, 0, 0.12)","--ig-color-dropdown-open-shadow":"0 0 0 3px rgba(77, 136, 255, 0.16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-chevron-bg":F.white04,"--ig-color-dropdown-chevron-border":F.borderMuted,"--ig-color-dropdown-menu-a":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":F.white06,"--ig-color-toggle-on-bg":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":F.white12,"--ig-color-toggle-off-border":F.borderStrong,"--ig-color-tab-surface":F.white04,"--ig-color-tab-highlight":F.blueTint18,"--ig-color-toolbar-surface":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":F.overlayBackdrop};function ug(e,t){const n=Object.entries(t).map(([r,i])=>`  ${r}: ${i};`);return`${e} {
${n.join(`
`)}
}`}function LI(){return`${ug(":root",RI)}

${ug(":root",AI)}
`}function NI({children:e,theme:t=ue}){return A.jsx(CI,{theme:t,children:e})}var OI=zI`
  ${LI()}

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
`,DI={sm:"8px 12px",md:"10px 14px",lg:"12px 18px"};function jI(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}function Pr(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function Ia(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var ln=K`
  background: var(--ig-color-surface-panel);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,an=K`
  background: var(--ig-color-surface-raised);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,ds=K`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`;K`
  ${ln}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`;var _i=K`
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
`,FI=K`
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
`,MI=K`
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
`,BI=K`
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
`,UI=K`
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
`,HI=K`
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
`;var VI={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"};C.span`
  color: ${e=>VI[e.$tone??"default"]};
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
  ${e=>e.$elevation==="raised"?an:e.$elevation==="card"?ds:ln}
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
`;var WI=C.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 0;
  padding: ${e=>e.$iconOnly?"10px":DI[e.$size]};
  font-size: ${e=>e.$size==="sm"?"13px":e.$size==="lg"?"15px":"14px"};
  font-weight: 600;
  line-height: 1;
  ${e=>e.$tone==="danger"?e.$variant==="secondary"?HI:UI:e.$variant==="secondary"?MI:e.$variant==="accent"?BI:FI}
`;function Nc({variant:e,$variant:t,size:n="md",tone:r="default",children:i,...o}){return A.jsx(WI,{type:"button",$variant:jI(e,t),$size:n,$tone:r,$iconOnly:!0,"aria-label":o["aria-label"]??"Action",...o,children:i})}C.input`
  ${_i}
`;var GI=C.textarea`
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

  ${e=>e.$open&&K`
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
`;var QI={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},oi={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};C.span`
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
  ${({$tone:e,tone:t})=>{const n=QI[e??t??"idle"];return K`
      background: ${n.background};
      color: ${n.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;var YI={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},qI=C.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: 600;
  color: var(--ig-color-text-primary);
  background: ${e=>YI[e.$tone??"neutral"]};
`;C(qI)`
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
`;var KI=K`
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
  ${KI}
  width: 100%;
  height: ${e=>e.$height??"16px"};
  border-radius: var(--ig-radius-sm);
`;var Zi=C.div`
  ${({$tone:e="info"})=>K`
    background: ${oi[e].background};
    border-color: ${oi[e].border};
    color: ${oi[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: 1px solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`;C(Zi)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`;var XI=pd`
  to { transform: rotate(360deg); }
`,JI={sm:14,md:18,lg:24},ZI={accent:"var(--ig-color-accent)",white:"var(--ig-color-text-primary)",muted:"var(--ig-color-text-soft)"},e2=C.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: 2px solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${XI} 0.7s linear infinite;
  vertical-align: middle;
`;function cg({size:e="md",tone:t="accent","aria-label":n,...r}){return A.jsx(e2,{...r,$px:JI[e],$color:ZI[t],role:"status","aria-label":n??"Loading"})}var t2=pd`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,n2=pd`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(12px); }
`;C.div`
  ${({$tone:e})=>K`
    background: ${oi[e].background};
    border-color: ${oi[e].border};
    color: ${oi[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: 1px solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating, 0 4px 16px rgba(0,0,0,.12));
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?n2:t2} 200ms ease forwards;
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
`;var r2=C.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`;C(r2)``;C.div`
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
`;var Fy=K`
  display: inline-flex;
  position: relative;
  padding: var(--ig-space-1);
  border-radius: var(--ig-radius-lg);
  border: 1px solid var(--ig-color-border-subtle);
  background: var(--ig-color-tab-surface);
  gap: var(--ig-space-1);
`;C.div`
  ${e=>e.$variant==="underline"?K`
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
  ${({$variant:e})=>e==="underline"?K`
          bottom: -1px;
          height: 2px;
          border-radius: var(--ig-radius-pill);
          background: var(--ig-color-accent-soft);
        `:K`
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
`;var hd={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}};C.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border: 1px solid var(--ig-color-border-subtle);
  border-radius: ${e=>hd[e.$radius].root};
  background: var(--ig-color-surface-panel);
`;C.div`
  position: absolute;
  left: var(--ig-space-2);
  right: var(--ig-space-2);
  top: ${e=>`${e.$top}px`};
  height: ${e=>`${e.$height}px`};
  border-left: 3px solid var(--ig-color-accent-soft);
  border-radius: ${e=>hd[e.$radius].item};
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
  border-radius: ${e=>hd[e.$radius].item};
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
`;var i2=C.div`
  ${an}
  width: min(920px, 100%);
  max-height: calc(100vh - 48px);
  overflow: auto;
  border-radius: var(--ig-radius-4xl);
`;C(i2)`
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
`;var o2=C.div`
  ${an}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,l2=C.div`
  ${an}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: 180px;
`;C(l2)`
  padding: var(--ig-space-4);
  min-width: 220px;
  box-shadow: var(--ig-shadow-popover);
`;C.div`
  ${an}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: 240px;
`;C(o2)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: 220px;
  max-width: 320px;
  box-shadow: var(--ig-shadow-popover);
`;C(Nc)`
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
  ${ds}
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
`;var fg={xs:"8px",sm:"12px",md:"16px"};C.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>fg[e.$size??"sm"]};
  height: ${e=>fg[e.$size??"sm"]};
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
  ${ds}
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
  ${ds}
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
`;function Ir(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function _a(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var My=K`
  background: var(--ig-color-surface-panel);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,a2=K`
  background: var(--ig-color-surface-raised);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,s2=K`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: 1px solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`;K`
  ${My}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`;K`
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
`;K`
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
`;K`
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
`;K`
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
`;K`
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
`;K`
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
`;var u2=C.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>Ir(e.$gap)??"16px"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function Vi({gap:e,align:t,justify:n,...r}){return A.jsx(u2,{$gap:e,$align:t,$justify:n,...r})}C.div`
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
`;var c2={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},f2=C.span`
  color: ${e=>c2[e.$tone??"default"]};
  font-size: ${e=>e.$size??"14px"};
  font-weight: ${e=>e.$weight??400};
  line-height: 1.45;
  word-break: break-word;
`;function du({tone:e,size:t,weight:n,...r}){return A.jsx(f2,{$tone:e,$size:t,$weight:n,...r})}var d2=C.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: -0.02em;
  font-size: ${e=>e.$level===1?"32px":e.$level===2?"24px":e.$level===3?"18px":"16px"};
  font-weight: ${e=>e.$level===1?800:e.$level===2?700:600};
`;function p2({level:e=2,...t}){const n=`h${Math.min(e+1,6)}`;return A.jsx(d2,{as:n,$level:e,...t})}var h2=C.div`
  ${e=>e.$elevation==="raised"?a2:e.$elevation==="card"?s2:My}
  border-radius: ${e=>Ir(e.$radius)??"20px"};
`;function By({elevation:e="panel",radius:t,...n}){return A.jsx(h2,{$elevation:e,$radius:t,...n})}C.hr`
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
`;const Ti=760,g2=Ce.div`
  min-height: 100vh;
  background: #0b1016;
`,m2=Ce.div`
  padding: 22px;

  @media (max-width: ${Ti}px) {
    padding: 12px;
  }
`,v2=Ce.div`
  width: 100%;
  max-width: ${e=>e.$wide?"100%":"1320px"};
  margin: 0 auto;
`,y2=Ce(By)`
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
`,x2=Ce.div`
  display: grid;
`,w2=Ce.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 10px;
  align-items: center;
`,k2=Ce.nav`
  min-width: 0;
`,b2=Ce.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  color: var(--ig-color-text-muted);
  font-size: 13px;
`,S2=Ce.button`
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
`,C2=Ce.div`
  margin-top: 16px;
  display: grid;
  gap: 10px;
  grid-template-columns: minmax(0, 1fr);
`,E2=Ce.div`
  width: 100%;
`,wl=Ce(By)`
  min-height: calc(100vh - 176px);
  border: 0;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;

  @media (max-width: ${Ti}px) {
    min-height: calc(100vh - 152px);
  }
`,kl=Ce.div`
  height: 100%;
  overflow: auto;
  padding: 18px;

  @media (max-width: ${Ti}px) {
    padding: 14px 12px 18px;
  }
`,$2=Ce.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;

  @media (max-width: ${Ti}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,z2=Ce.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,P2=Ce.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,I2=Ce.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 7px 6px;
  padding-left: ${e=>14+e.$depth*18}px;
  border: 0;
  border-radius: 12px;
  background: ${e=>e.$active?"rgba(255, 255, 255, 0.06)":"transparent"};
`,_2=Ce.button`
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
`,T2=Ce.button`
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
`,A2=Ce.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--ig-color-text-primary);
  font-weight: 600;
`,dg=Ce.span`
  font-size: 12px;
  color: var(--ig-color-text-muted);
`,R2=Ce.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,L2=Ce.article`
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
`,N2=Ce(GI)`
  width: 100%;
  min-height: 420px;
  resize: none;
  overflow: hidden;
  padding: 20px 22px;
  line-height: 1.7;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 14px;
  white-space: pre;
`;function Oc(e){return(e??"").replace(/^\/+|\/+$/g,"")}function pg(e){return e.split("/").filter(Boolean).map(t=>encodeURIComponent(t)).join("/")}function O2(e){const t=Oc(e);if(!t)return new Set([""]);const n=t.split("/"),r=new Set([""]),o=t.endsWith(".md")?n.slice(0,-1):n;return o.forEach((l,a)=>{r.add(o.slice(0,a+1).join("/"))}),r}function Uy(e,t){if(!e)return null;if(e.path===t)return e;for(const n of e.children??[]){const r=Uy(n,t);if(r)return r}return null}function Hy(e){return/^(https?:)?\/\//.test(e)||e.startsWith("mailto:")}function D2(e,t){if(!t||t.startsWith("#")||Hy(t))return null;const[n]=t.split("#"),r=e.endsWith(".md")?e.split("/").slice(0,-1).join("/"):e,i=new URL(`https://docs.local/${r?`${r}/`:""}`);return new URL(n,i).pathname.replace(/^\/+/,"")}function j2(e){const t=e.split(`
`);let n=!1;return t.map(r=>/^\s*```/.test(r)?(n=!n,r):n?r:r.replace(/`([^`\n]+?\.md(?:#[^`\s]+)?)`/g,"[`$1`]($1)")).join(`
`)}function F2({open:e}){return A.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:A.jsx("path",{d:e?"M6 9l6 6 6-6":"M9 6l6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function M2(){return A.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:A.jsx("path",{d:"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}function B2(){return A.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[A.jsx("path",{d:"M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),A.jsx("path",{d:"M14 3v6h6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}function U2(){return A.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[A.jsx("path",{d:"M12 20h9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),A.jsx("path",{d:"M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function H2(){return A.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:A.jsx("path",{d:"M20 6L9 17l-5-5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function V2(){return A.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:A.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Vy({nodes:e,currentPath:t,ancestorPaths:n,expandedFolders:r,onNavigate:i,onToggleFolder:o,depth:l=0}){return A.jsx(R2,{children:e.map(a=>A.jsx(W2,{node:a,currentPath:t,ancestorPaths:n,expandedFolders:r,onNavigate:i,onToggleFolder:o,depth:l},a.path||"__root__"))})}function W2({node:e,currentPath:t,ancestorPaths:n,expandedFolders:r,onNavigate:i,onToggleFolder:o,depth:l}){var u,f;const a=e.kind==="folder"&&(((u=e.children)==null?void 0:u.length)??0)>0,s=n.has(e.path)||r.has(e.path);return A.jsxs(P2,{children:[A.jsxs(I2,{$active:t===e.path,$depth:l,children:[e.kind==="folder"?A.jsx(_2,{type:"button","aria-label":s?`${e.name} 접기`:`${e.name} 펼치기`,onClick:()=>o(e.path),children:A.jsx(F2,{open:s})}):A.jsx("div",{style:{width:28}}),A.jsxs(T2,{type:"button",onClick:()=>i(e.path),children:[e.kind==="folder"?A.jsx(M2,{}):A.jsx(B2,{}),A.jsx(A2,{children:e.name})]}),e.kind==="folder"?A.jsx(dg,{children:((f=e.children)==null?void 0:f.length)??0}):A.jsx(dg,{children:".md"})]}),a&&s?A.jsx(Vy,{nodes:e.children??[],currentPath:t,ancestorPaths:n,expandedFolders:r,onNavigate:i,onToggleFolder:o,depth:l+1}):null]})}async function G2(){const e=await fetch("/api/docs/tree");if(!e.ok)throw new Error("문서 트리를 불러오지 못했습니다.");return e.json()}async function Q2(e){const t=await fetch(`/api/docs/content?path=${encodeURIComponent(e)}`);if(!t.ok){const n=await t.json().catch(()=>null);throw new Error((n==null?void 0:n.error)||"문서를 불러오지 못했습니다.")}return t.json()}async function Y2(e,t){const n=await fetch(`/api/docs/content?path=${encodeURIComponent(e)}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:t})});if(!n.ok){const r=await n.json().catch(()=>null);throw new Error((r==null?void 0:r.error)||"문서를 저장하지 못했습니다.")}return n.json()}function q2(){const e=nk(),t=Rv(),n=Oc(e["*"]),[r,i]=T.useState(null),[o,l]=T.useState(null),[a,s]=T.useState(!0),[u,f]=T.useState(""),[c,d]=T.useState(""),[p,g]=T.useState(null),[y,$]=T.useState(!1),[h,m]=T.useState(!1),[v,w]=T.useState(!1),[P,k]=T.useState(null),[b,z]=T.useState(new Set),R=T.useRef(null),E=T.useRef(null),I=T.useRef(null),O=T.useRef(null),V=T.useRef(!1);T.useEffect(()=>{let M=!0;return s(!0),l(null),G2().then(q=>{M&&i(q.root)}).catch(q=>{M&&l(q instanceof Error?q.message:"문서 트리를 불러오지 못했습니다.")}).finally(()=>{M&&s(!1)}),()=>{M=!1}},[]);const H=T.useMemo(()=>Uy(r,n),[r,n]),Y=T.useMemo(()=>O2(n),[n]),de=(H==null?void 0:H.kind)==="folder"?H.children??[]:[],se=T.useMemo(()=>{const M=Oc(n),q=[{label:"docs",path:""}];if(!M)return q;const te=M.split("/");return te.forEach((he,lt)=>{q.push({label:he,path:te.slice(0,lt+1).join("/")})}),q},[n]),D=T.useCallback(M=>{t(M?`/${pg(M)}`:"/")},[t]);T.useEffect(()=>{z(M=>{const q=new Set(M);return Y.forEach(te=>{te&&q.add(te)}),q})},[Y]);const B=T.useCallback(M=>{z(q=>{const te=new Set(q);return te.has(M)?te.delete(M):te.add(M),te})},[]);T.useEffect(()=>{if((H==null?void 0:H.kind)!=="file"){f(""),d(""),g(null),$(!1),k(null),m(!1);return}let M=!0;return $(!0),g(null),m(!1),Q2(H.path).then(q=>{M&&(f(q.content),d(q.content),k(q.updatedAt))}).catch(q=>{M&&g(q instanceof Error?q.message:"문서를 불러오지 못했습니다.")}).finally(()=>{M&&$(!1)}),()=>{M=!1}},[H]),T.useLayoutEffect(()=>{!h||!E.current||(E.current.style.height="auto",E.current.style.height=`${E.current.scrollHeight}px`)},[c,h]);const x=T.useCallback(()=>{if(I.current!=null&&R.current&&(R.current.scrollTop=I.current),O.current!=null){const M=O.current;window.scrollTo({top:M,left:0,behavior:"auto"}),window.requestAnimationFrame(()=>{window.scrollTo({top:M,left:0,behavior:"auto"})})}},[]),Q=T.useCallback(()=>{V.current=!0},[]);T.useLayoutEffect(()=>{if(!V.current||y)return;V.current=!1;let M=0,q=0;const te=window.setTimeout(()=>{x()},120);return x(),M=window.requestAnimationFrame(()=>{x(),q=window.requestAnimationFrame(()=>{x()})}),()=>{window.cancelAnimationFrame(M),window.cancelAnimationFrame(q),window.clearTimeout(te)}},[h,u,n,y,x]),T.useEffect(()=>{!h||!E.current||(E.current.focus({preventScroll:!0}),x())},[h,x]);const G=T.useCallback(()=>{var M;I.current=((M=R.current)==null?void 0:M.scrollTop)??0,O.current=window.scrollY},[]),S=T.useCallback(()=>{G(),Q(),d(u),m(!0)},[u,G,Q]),ge=T.useCallback(async()=>{if((H==null?void 0:H.kind)==="file"){G(),Q(),w(!0),g(null);try{const M=await Y2(H.path,c);f(c),k(M.updatedAt),m(!1)}catch(M){g(M instanceof Error?M.message:"문서를 저장하지 못했습니다.")}finally{w(!1)}}},[H,c,G,Q]);de.filter(M=>M.kind==="folder").length,de.filter(M=>M.kind==="file").length;const _e=T.useMemo(()=>j2(u),[u]),ne=(H==null?void 0:H.kind)==="folder";return A.jsx(g2,{children:A.jsx(m2,{children:A.jsxs(v2,{$wide:ne,children:[A.jsx(y2,{elevation:"panel",children:A.jsx(x2,{children:A.jsxs(w2,{children:[A.jsx(Nc,{variant:"secondary","aria-label":"이전 화면으로 이동",onClick:()=>t(-1),children:A.jsx(V2,{})}),A.jsx(k2,{"aria-label":"Breadcrumb",children:A.jsx(b2,{children:se.map((M,q)=>{const te=q===se.length-1;return A.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8,minWidth:0},children:[A.jsx(S2,{type:"button",$active:te,onClick:()=>D(M.path),children:M.label}),te?null:A.jsx("span",{children:"/"})]},`${M.path}-${M.label}`)})})}),(H==null?void 0:H.kind)==="file"&&!y?A.jsx(Nc,{variant:h?"accent":"secondary","aria-label":h?"저장하고 읽기 모드로 전환":"편집 모드로 전환",onClick:h?ge:S,disabled:v,children:h?A.jsx(H2,{}):A.jsx(U2,{})}):A.jsx("div",{style:{width:36,height:36}})]})})}),A.jsx(C2,{children:a?A.jsx(wl,{elevation:"panel",children:A.jsx(kl,{ref:R,children:A.jsxs(Vi,{gap:16,align:"center",justify:"center",style:{minHeight:420},children:[A.jsx(cg,{}),A.jsx(du,{tone:"secondary",children:"문서 트리를 불러오는 중입니다."})]})})}):o?A.jsx(wl,{elevation:"panel",children:A.jsx(kl,{ref:R,children:A.jsx(Zi,{$tone:"danger",children:o})})}):H?H.kind==="folder"?A.jsx(E2,{children:A.jsxs(Vi,{gap:18,children:[A.jsxs($2,{children:[A.jsx(Vi,{gap:6,children:A.jsx(p2,{level:2,children:H.path?H.name:"docs"})}),A.jsxs(du,{tone:"secondary",children:[de.length," items"]})]}),de.length>0?A.jsx(z2,{children:A.jsx(Vy,{nodes:de,currentPath:n,ancestorPaths:Y,expandedFolders:b,onNavigate:D,onToggleFolder:B})}):A.jsx(Zi,{$tone:"info",children:"이 폴더에는 아직 표시할 Markdown 문서가 없습니다."})]})}):A.jsx(wl,{elevation:"panel",children:A.jsx(kl,{ref:R,children:y?A.jsxs(Vi,{gap:16,align:"center",justify:"center",style:{minHeight:420},children:[A.jsx(cg,{}),A.jsx(du,{tone:"secondary",children:"문서를 불러오는 중입니다."})]}):A.jsxs(Vi,{gap:16,children:[p?A.jsx(Zi,{$tone:"danger",children:p}):null,h?A.jsx(N2,{ref:E,value:c,onChange:M=>d(M.target.value),spellCheck:!1}):A.jsx(L2,{children:A.jsx(dz,{remarkPlugins:[E5],components:{a:({href:M="",children:q})=>{const te=D2(n,M);return te?A.jsx(Pk,{to:te?`/${pg(te)}`:"/",children:q}):A.jsx("a",{href:M,target:Hy(M)?"_blank":void 0,rel:"noreferrer",children:q})}},children:_e})})]})})}):A.jsx(wl,{elevation:"panel",children:A.jsx(kl,{ref:R,children:A.jsx(Zi,{$tone:"danger",children:"요청한 경로를 찾을 수 없습니다."})})})})]})})})}function K2(){return A.jsxs(NI,{children:[A.jsx(OI,{}),A.jsx(Ek,{children:A.jsx(yk,{children:A.jsx(jv,{path:"/*",element:A.jsx(q2,{})})})})]})}pu.createRoot(document.getElementById("root")).render(A.jsx(Oe.StrictMode,{children:A.jsx(K2,{})}));
