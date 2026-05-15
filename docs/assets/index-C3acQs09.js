var mm=Object.defineProperty;var _m=(r,t,e)=>t in r?mm(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Pt=(r,t,e)=>_m(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();var sh="1.3.23";function $f(r,t,e){return Math.max(r,Math.min(t,e))}function gm(r,t,e){return(1-e)*r+e*t}function vm(r,t,e,n){return gm(r,t,1-Math.exp(-e*n))}function xm(r,t){return(r%t+t)%t}var Sm=class{constructor(){Pt(this,"isRunning",!1);Pt(this,"value",0);Pt(this,"from",0);Pt(this,"to",0);Pt(this,"currentTime",0);Pt(this,"lerp");Pt(this,"duration");Pt(this,"easing");Pt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=$f(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=vm(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Mm(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var ym=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Pt(this,"width",0);Pt(this,"height",0);Pt(this,"scrollHeight",0);Pt(this,"scrollWidth",0);Pt(this,"debouncedResize");Pt(this,"wrapperResizeObserver");Pt(this,"contentResizeObserver");Pt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Pt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Pt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Mm(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Kf=class{constructor(){Pt(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const Em=100/6,Hi={passive:!1};function oh(r,t){return r===1?Em:r===2?t:1}var Tm=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Pt(this,"touchStart",{x:0,y:0});Pt(this,"lastDelta",{x:0,y:0});Pt(this,"window",{width:0,height:0});Pt(this,"emitter",new Kf);Pt(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Pt(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Pt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Pt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=oh(n,this.window.width),s=oh(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Pt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Hi),this.element.addEventListener("touchstart",this.onTouchStart,Hi),this.element.addEventListener("touchmove",this.onTouchMove,Hi),this.element.addEventListener("touchend",this.onTouchEnd,Hi)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Hi),this.element.removeEventListener("touchstart",this.onTouchStart,Hi),this.element.removeEventListener("touchmove",this.onTouchMove,Hi),this.element.removeEventListener("touchend",this.onTouchEnd,Hi)}};const ah=r=>Math.min(1,1.001-2**(-10*r));var bm=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:E=!0,autoRaf:x=!1,anchors:S=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:b=!1,naiveDimensions:P=b,stopInertiaOnNavigate:y=!1}={}){Pt(this,"_isScrolling",!1);Pt(this,"_isStopped",!1);Pt(this,"_isLocked",!1);Pt(this,"_preventNextNativeScrollEvent",!1);Pt(this,"_resetVelocityTimeout",null);Pt(this,"_rafId",null);Pt(this,"isTouching");Pt(this,"time",0);Pt(this,"userData",{});Pt(this,"lastVelocity",0);Pt(this,"velocity",0);Pt(this,"direction",0);Pt(this,"options");Pt(this,"targetScroll");Pt(this,"animatedScroll");Pt(this,"animate",new Sm);Pt(this,"emitter",new Kf);Pt(this,"dimensions");Pt(this,"virtualScroll");Pt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Pt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Pt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Pt(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Pt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Pt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>{var _,p,m,E,x;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-horizontal"))||i&&((E=g.hasAttribute)==null?void 0:E.call(g,"data-lenis-prevent-touch"))||s&&((x=g.hasAttribute)==null?void 0:x.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Pt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Pt(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=sh,window.lenis||(window.lenis={}),window.lenis.version=sh,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=ah:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:E,autoRaf:x,anchors:S,autoToggle:A,allowNestedScroll:w,naiveDimensions:P,stopInertiaOnNavigate:y},this.dimensions=new ym(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Tm(e,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=r,f=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(g=h),g){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?S.left:S.top}const _=g.getBoundingClientRect(),p=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),E=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(x)?0:x)}}if(typeof h=="number"){if(h+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=$f(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=ah:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,d,h,f,g;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,a=d>f,l=h>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,E,x,S,A;if(_==="horizontal")p=Math.round(r.scrollLeft),m=d-f,E=t,x=s,S=a,A=c;else if(_==="vertical")p=Math.round(r.scrollTop),m=h-g,E=e,x=o,S=l,A=u;else return!1;return!A&&(p>=m||p<=0)?!0:(E>0?p<m:p>0)&&x&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?xm(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},To={duration:.5,overwrite:!1,delay:0},xu,Je,we,Kn=1e8,Me=1/Kn,cc=Math.PI*2,wm=cc/4,Am=0,jf=Math.sqrt,Cm=Math.cos,Rm=Math.sin,Ke=function(t){return typeof t=="string"},De=function(t){return typeof t=="function"},Ni=function(t){return typeof t=="number"},Su=function(t){return typeof t>"u"},gi=function(t){return typeof t=="object"},Sn=function(t){return t!==!1},Mu=function(){return typeof window<"u"},Go=function(t){return De(t)||Ke(t)},Jf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,Pm=/random\([^)]+\)/g,Dm=/,\s*/g,lh=/(?:-?\.?\d|\.)+/gi,Qf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,td=/[+-]=-?[.\d]+/,Lm=/[^,'"\[\]\s]+/gi,Im=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,ai,uc,yu,Hn={},Ga={},ed,nd=function(t){return(Ga=Us(t,Hn))&&An},Eu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},bo=function(t,e){return!e&&console.warn(t)},id=function(t,e){return t&&(Hn[t]=e)&&Ga&&(Ga[t]=e)||Hn},wo=function(){return 0},Um={suppressEvents:!0,isStart:!0,kill:!1},Ca={suppressEvents:!0,kill:!1},Nm={suppressEvents:!0},Tu={},er=[],hc={},rd,Un={},Ml={},ch=30,Ra=[],bu="",wu=function(t){var e=t[0],n,i;if(gi(e)||De(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ra.length;i--&&!Ra[i].targetTest(e););n=Ra[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new wd(t[i],n)))||t.splice(i,1);return t},Ur=function(t){return t._gsap||wu(Zn(t))[0]._gsap},sd=function(t,e,n){return(n=t[e])&&De(n)?t[e]():Su(n)&&t.getAttribute&&t.getAttribute(e)||n},Mn=function(t,e){return(t=t.split(",")).forEach(e)||t},Le=function(t){return Math.round(t*1e5)/1e5||0},Ce=function(t){return Math.round(t*1e7)/1e7||0},Ts=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Om=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Wa=function(){var t=er.length,e=er.slice(0),n,i;for(hc={},er.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Au=function(t){return!!(t._initted||t._startAt||t.add)},od=function(t,e,n,i){er.length&&!Je&&Wa(),t.render(e,n,!!(Je&&e<0&&Au(t))),er.length&&!Je&&Wa()},ad=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Lm).length<2?e:Ke(t)?t.trim():t},ld=function(t){return t},Vn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Fm=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Us=function(t,e){for(var n in e)t[n]=e[n];return t},uh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=gi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Xa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},uo=function(t){var e=t.parent||Re,n=t.keyframes?Fm(on(t.keyframes)):Vn;if(Sn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Bm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},cd=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},al=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},or=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Nr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},zm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},fc=function(t,e,n,i){return t._startAt&&(Je?t._startAt.revert(Ca):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},km=function r(t){return!t||t._ts&&r(t.parent)},hh=function(t){return t._repeat?Ns(t._tTime,t=t.duration()+t._rDelay)*t:0},Ns=function(t,e){var n=Math.floor(t=Ce(t/e));return t&&n===t?n-1:n},Ya=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ll=function(t){return t._end=Ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},cl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ll(t),n._dirty||Nr(n,t)),t},ud=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ya(t.rawTime(),e),(!e._dur||No(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),Nr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},hi=function(t,e,n,i){return e.parent&&or(e),e._start=Ce((Ni(n)?n:n||t!==Re?Xn(t,n,e):t._time)+e._delay),e._end=Ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),cd(t,e,"_first","_last",t._sort?"_start":0),dc(e)||(t._recent=e),i||ud(t,e),t._ts<0&&cl(t,t._tTime),t},hd=function(t,e){return(Hn.ScrollTrigger||Eu("scrollTrigger",e))&&Hn.ScrollTrigger.create(e,t)},fd=function(t,e,n,i,s){if(Ru(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&rd!==On.frame)return er.push(t),t._lazy=[s,i],1},Hm=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},dc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Vm=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Hm(t)&&!(!t._initted&&dc(t))||(t._ts<0||t._dp._ts<0)&&!dc(t))?0:1,a=t._rDelay,l=0,c,u,d;if(a&&t._repeat&&(l=No(0,t._tDur,e),u=Ns(l,a),t._yoyo&&u&1&&(o=1-o),u!==Ns(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Je||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&fd(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&fc(t,e,n,!0),t._onUpdate&&!n&&Bn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&or(t,1),!n&&!Je&&(Bn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Gm=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Os=function(t,e,n,i){var s=t._repeat,o=Ce(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ce(o*(s+1)+t._rDelay*s):o,a>0&&!i&&cl(t,t._tTime=t._tDur*a),t.parent&&ll(t),n||Nr(t.parent,t),t},fh=function(t){return t instanceof xn?Nr(t):Os(t,t._dur)},Wm={_start:0,endTime:wo,totalDuration:wo},Xn=function r(t,e,n){var i=t.labels,s=t._recent||Wm,o=t.duration()>=Kn?s.endTime(!1):t._dur,a,l,c;return Ke(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ho=function(t,e,n){var i=Ni(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;o.immediateRender=Sn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Fe(e[0],o,e[s+1])},hr=function(t,e){return t||t===0?e(t):e},No=function(t,e,n){return n<t?t:n>e?e:n},rn=function(t,e){return!Ke(t)||!(e=Im.exec(t))?"":e[1]},Xm=function(t,e,n){return hr(n,function(i){return No(t,e,i)})},pc=[].slice,dd=function(t,e){return t&&gi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gi(t[0]))&&!t.nodeType&&t!==ai},Ym=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ke(i)&&!e||dd(i,1)?(s=n).push.apply(s,Zn(i)):n.push(i)})||n},Zn=function(t,e,n){return we&&!e&&we.selector?we.selector(t):Ke(t)&&!n&&(uc||!Fs())?pc.call((e||yu).querySelectorAll(t),0):on(t)?Ym(t,n):dd(t)?pc.call(t,0):t?[t]:[]},mc=function(t){return t=Zn(t)[0]||bo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Zn(e,n.querySelectorAll?n:n===t?bo("Invalid scope")||yu.createElement("div"):t)}},pd=function(t){return t.sort(function(){return .5-Math.random()})},md=function(t){if(De(t))return t;var e=gi(t)?t:{each:t},n=Or(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,d=i;return Ke(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||e).length,p=o[_],m,E,x,S,A,w,b,P,y;if(!p){if(y=e.grid==="auto"?0:(e.grid||[1,Kn])[1],!y){for(b=-Kn;b<(b=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(p=o[_]=[],m=l?Math.min(y,_)*u-.5:i%y,E=y===Kn?0:l?_*d/y-.5:i/y|0,b=0,P=Kn,w=0;w<_;w++)x=w%y-m,S=E-(w/y|0),p[w]=A=c?Math.abs(c==="y"?S:x):jf(x*x+S*S),A>b&&(b=A),A<P&&(P=A);i==="random"&&pd(p),p.max=b-P,p.min=P,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=rn(e.amount||e.each)||0,n=n&&_<0?s_(n):n}return _=(p[h]-p.min)/p.max||0,Ce(p.b+(n?n(_):_)*p.v)+p.u}},_c=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ni(n)?0:rn(n))}},_d=function(t,e){var n=on(t),i,s;return!n&&gi(t)&&(i=n=t.radius||Kn,t.values?(t=Zn(t.values),(s=!Ni(t[0]))&&(i*=i)):t=_c(t.increment)),hr(e,n?De(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Kn,u=0,d=t.length,h,f;d--;)s?(h=t[d].x-a,f=t[d].y-l,h=h*h+f*f):h=Math.abs(t[d]-a),h<c&&(c=h,u=d);return u=!i||c<=i?t[u]:o,s||u===o||Ni(o)?u:u+rn(o)}:_c(t))},gd=function(t,e,n,i){return hr(on(t)?!e:n===!0?!!(n=0):!i,function(){return on(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},qm=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},$m=function(t,e){return function(n){return t(parseFloat(n))+(e||rn(n))}},Km=function(t,e,n){return xd(t,e,0,1,n)},vd=function(t,e,n){return hr(n,function(i){return t[~~e(i)]})},Zm=function r(t,e,n){var i=e-t;return on(t)?vd(t,r(0,t.length),e):hr(n,function(s){return(i+(s-t)%i)%i+t})},jm=function r(t,e,n){var i=e-t,s=i*2;return on(t)?vd(t,r(0,t.length-1),e):hr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ao=function(t){return t.replace(Pm,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Dm);return gd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},xd=function(t,e,n,i,s){var o=e-t,a=i-n;return hr(s,function(l){return n+((l-t)/o*a||0)})},Jm=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Ke(t),a={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(on(t)&&!on(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else i||(t=Us(on(t)?[]:{},t));if(!u){for(l in e)Cu.call(a,t,l,"get",e[l]);s=function(g){return Lu(g,a)||(o?t.p:t)}}}return hr(n,s)},dh=function(t,e,n){var i=t.labels,s=Kn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Bn=function(t,e,n){var i=t.vars,s=i[e],o=we,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&er.length&&Wa(),a&&(we=a),u=l?s.apply(c,l):s.call(c),we=o,u},no=function(t){return or(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Je),t.progress()<1&&Bn(t,"onInterrupt"),t},Ms,Sd=[],Md=function(t){if(t)if(t=!t.name&&t.default||t,Mu()||t.headless){var e=t.name,n=De(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:wo,render:Lu,add:Cu,kill:m_,modifier:p_,rawVars:0},o={targetTest:0,get:0,getSetter:Du,aliases:{},register:0};if(Fs(),t!==i){if(Un[e])return;Vn(i,Vn(Xa(t,s),o)),Us(i.prototype,Us(s,Xa(t,o))),Un[i.prop=e]=i,t.targetTest&&(Ra.push(i),Tu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}id(e,i),t.register&&t.register(An,i,yn)}else Sd.push(t)},Se=255,io={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},yl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},yd=function(t,e,n){var i=t?Ni(t)?[t>>16,t>>8&Se,t&Se]:0:io.black,s,o,a,l,c,u,d,h,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),io[t])i=io[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Se,i&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(lh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=yl(l+1/3,s,o),i[1]=yl(l,s,o),i[2]=yl(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Qf),n&&i.length<4&&(i[3]=1),i}else i=t.match(lh)||io.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Se,o=i[1]/Se,a=i[2]/Se,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ed=function(t){var e=[],n=[],i=-1;return t.split(nr).forEach(function(s){var o=s.match(Ss)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},ph=function(t,e,n){var i="",s=(t+i).match(nr),o=e?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=yd(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Ed(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(nr,"1").split(Ss),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(nr),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},nr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in io)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Qm=/hsl[a]?\(/,Td=function(t){var e=t.join(" "),n;if(nr.lastIndex=0,nr.test(e))return n=Qm.test(e),t[1]=ph(t[1],n),t[0]=ph(t[0],n,Ed(t[1])),!0},Co,On=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,d,h,f,g=function _(p){var m=r()-i,E=p===!0,x,S,A,w;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,x=A-o,(x>0||E)&&(w=++d.frame,h=A-d.time*1e3,d.time=A=A/1e3,o+=x+(x>=s?4:s-x),S=1),E||(l=c(_)),S)for(f=0;f<a.length;f++)a[f](A,h,w,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){ed&&(!uc&&Mu()&&(ai=uc=window,yu=ai.document||{},Hn.gsap=An,(ai.gsapVersions||(ai.gsapVersions=[])).push(An.version),nd(Ga||ai.GreenSockGlobals||!ai.gsap&&ai||{}),Sd.forEach(Md)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Co=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Co=0,c=wo},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,m,E){var x=m?function(S,A,w,b){p(S,A,w,b),d.remove(x)}:p;return d.remove(p),a[E?"unshift":"push"](x),Fs(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d}(),Fs=function(){return!Co&&On.wake()},re={},t_=/^[\d.\-M][\d.\-,\s]/,e_=/["']/g,n_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(e_,"").trim():+c,i=l.substr(a+1).trim();return e},i_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},r_=function(t){var e=(t+"").split("("),n=re[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[n_(e[1])]:i_(t).split(",").map(ad)):re._CE&&t_.test(t)?re._CE("",t):n},s_=function(t){return function(e){return 1-t(1-e)}},Or=function(t,e){return t&&(De(t)?t:re[t]||r_(t))||e},$r=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Mn(t,function(a){re[a]=Hn[a]=s,re[o=a.toLowerCase()]=n;for(var l in s)re[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[a+"."+l]=s[l]}),s},bd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},El=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/cc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Rm((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:bd(a);return s=cc/s,l.config=function(c,u){return r(t,c,u)},l},Tl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:bd(n);return i.config=function(s){return r(t,s)},i};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;$r(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;$r("Elastic",El("in"),El("out"),El());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};$r("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);$r("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});$r("Circ",function(r){return-(jf(1-r*r)-1)});$r("Sine",function(r){return r===1?1:-Cm(r*wm)+1});$r("Back",Tl("in"),Tl("out"),Tl());re.SteppedEase=re.steps=Hn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Me;return function(a){return((i*No(0,o,a)|0)+s)*n}}};To.ease=re["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return bu+=r+","+r+"Params,"});var wd=function(t,e){this.id=Am++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:sd,this.set=e?e.getSetter:Du},Ro=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Os(this,+e.duration,1,1),this.data=e.data,we&&(this._ctx=we,we.data.push(this)),Co||On.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Os(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(cl(this,n),!s._dp||s.parent||ud(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),od(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ns(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ya(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts,this.totalTime(No(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ll(this),zm(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Me&&(this._tTime-=Me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ya(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Nm);var i=Je;return Je=n,Au(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Je=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,fh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,fh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Xn(this,n),Sn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Sn(i)),this._dur||(this._zTime=-Me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Me)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=De(n)?n:ld,l=function(){var u=i.then;i.then=null,s&&s(),De(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){no(this)},r}();Vn(Ro.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var xn=function(r){Zf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Sn(n.sortChildren),Re&&hi(n.parent||Re,wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hd(wi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ho(0,arguments,this),this},e.from=function(i,s,o){return ho(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ho(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,uo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Fe(i,s,Xn(this,o),1),this},e.call=function(i,s,o){return hi(this,Fe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Fe(i,o,Xn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,uo(o).immediateRender=Sn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,d){return a.startAt=o,uo(a).immediateRender=Sn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ce(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,p,m,E,x,S,A,w,b;if(this!==Re&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,S=this._start,x=this._ts,m=!x,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Ce(u%p),u===l?(_=this._repeat,h=c):(A=Ce(u/p),_=~~A,_&&_===A&&(h=c,_--),h>c&&(h=c)),A=Ns(this._tTime,p),!a&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),w&&_&1&&(h=c-h,b=1),_!==A&&!this._lock){var P=w&&A&1,y=P===(w&&_&1);if(_<A&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Ce(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=Gm(this,Ce(a),Ce(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(Bn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=-Me);break}}f=g}else{f=this._last;for(var v=i<0?i:h;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&E!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,o||Je&&Au(f)),h!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=v?-Me:Me);break}}f=g}}if(E&&!s&&(this.pause(),E.render(h>=a?0:-Me)._zTime=h>=a?1:-1,this._ts))return this._start=S,ll(this),this.render(i,s,o);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&or(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Bn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ni(s)||(s=Xn(this,s,i)),!(i instanceof Ro)){if(on(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ke(i))return this.addLabel(i,s);if(De(i))i=Fe.delayedCall(0,i);else return this}return this!==i?hi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Kn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Fe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ke(i)?this.removeLabel(i):De(i)?this.killTweensOf(i):(i.parent===this&&al(this,i),i===this._recent&&(this._recent=this._last),Nr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ce(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Xn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Fe.delayedCall(0,s||wo,o);return a.data="isPause",this._hasPause=1,hi(this,a,Xn(this,i))},e.removePause=function(i){var s=this._first;for(i=Xn(this,i);s;)s._start===i&&s.data==="isPause"&&or(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Zi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Zn(i),l=this._first,c=Ni(s),u;l;)l instanceof Fe?Om(l._targets,a)&&(c?(!Zi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Xn(o,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Fe.to(o,Vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Os(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Vn({startAt:{time:Xn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),dh(this,Xn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),dh(this,Xn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ce(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Nr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Nr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Kn,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ce(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Os(o,o===Re&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Re._ts&&(od(Re,Ya(i,Re)),rd=On.frame),On.frame>=ch){ch+=kn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&kn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},t}(Ro);Vn(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var o_=function(t,e,n,i,s,o,a){var l=new yn(this._pt,t,e,0,1,Ld,null,s),c=0,u=0,d,h,f,g,_,p,m,E;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ao(i)),o&&(E=[n,i],o(E,t,e),n=E[0],i=E[1]),h=n.match(Sl)||[];d=Sl.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Ts(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Sl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(td.test(i)||m)&&(l.e=0),this._pt=l,l},Cu=function(t,e,n,i,s,o,a,l,c,u){De(i)&&(i=i(s||0,t,o));var d=t[e],h=n!=="get"?n:De(d)?c?t[e.indexOf("set")||!De(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=De(d)?c?h_:Pd:Pu,g;if(Ke(i)&&(~i.indexOf("random(")&&(i=Ao(i)),i.charAt(1)==="="&&(g=Ts(h,i)+(rn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||gc)return!isNaN(h*i)&&i!==""?(g=new yn(this._pt,t,e,+h||0,i-(h||0),typeof d=="boolean"?d_:Dd,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!d&&!(e in t)&&Eu(e,i),o_.call(this,t,e,h,i,f,l||kn.stringFilter,c))},a_=function(t,e,n,i,s){if(De(t)&&(t=fo(t,s,e,n,i)),!gi(t)||t.style&&t.nodeType||on(t)||Jf(t))return Ke(t)?fo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=fo(t[a],s,e,n,i);return o},Ad=function(t,e,n,i,s,o){var a,l,c,u;if(Un[t]&&(a=new Un[t]).init(s,a.rawVars?e[t]:a_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new yn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ms))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Zi,gc,Ru=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,E=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!xu,S=t.timeline,A=i.easeReverse||d,w,b,P,y,v,D,O,F,W,q,X,V,k;if(S&&(!h||!s)&&(s="none"),t._ease=Or(s,To.ease),t._rEase=A&&(Or(A)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||h&&!i.stagger){if(F=p[0]?Ur(p[0]).harness:0,V=F&&i[F.prop],w=Xa(i,Tu),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Ca:Um),_._lazy=0),o){if(or(t._startAt=Fe.set(p,Vn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Sn(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je||!a&&!f)&&t._startAt.revert(Ca),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),P=Vn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Sn(l),immediateRender:a,stagger:0,parent:m},w),V&&(P[F.prop]=V),or(t._startAt=Fe.set(p,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Je?t._startAt.revert(Ca):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Sn(l)||l&&!g,b=0;b<p.length;b++){if(v=p[b],O=v._gsap||wu(p)[b]._gsap,t._ptLookup[b]=q={},hc[O.id]&&er.length&&Wa(),X=E===p?b:E.indexOf(v),F&&(W=new F).init(v,V||w,t,X,E)!==!1&&(t._pt=y=new yn(t._pt,v,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(it){q[it]=y}),W.priority&&(D=1)),!F||V)for(P in w)Un[P]&&(W=Ad(P,w,t,X,v,E))?W.priority&&(D=1):q[P]=y=Cu.call(t,v,P,"get",w[P],X,E,0,i.stringFilter);t._op&&t._op[b]&&t.kill(v,t._op[b]),x&&t._pt&&(Zi=t,Re.killTweensOf(v,q,t.globalTime(e)),k=!t.parent,Zi=0),t._pt&&l&&(hc[O.id]=1)}D&&Id(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!k,h&&e<=0&&S.render(Kn,!0,!0)},l_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return gc=1,t.vars[e]="+=0",Ru(t,a),gc=0,l?bo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=Le(n)+rn(d.e)),d.b&&(d.b=u.s+rn(d.b))},c_=function(t,e){var n=t[0]?Ur(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Us({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},u_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(on(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},fo=function(t,e,n,i,s){return De(t)?t.call(e,n,i,s):Ke(t)&&~t.indexOf("random(")?Ao(t):t},Cd=bu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Rd={};Mn(Cd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Rd[r]=1});var Fe=function(r){Zf(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:uo(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Re,E=(on(n)||Jf(n)?Ni(n[0]):"length"in i)?[n]:Zn(n),x,S,A,w,b,P,y,v;if(a._targets=E.length?wu(E):bo("GSAP target "+n+" not found. https://gsap.com",!kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||h||Go(c)||Go(u)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(x=a.timeline=new xn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:E}),x.kill(),x.parent=x._dp=wi(a),x._start=0,h||Go(c)||Go(u)){if(w=E.length,y=h&&md(h),gi(h))for(b in h)~Cd.indexOf(b)&&(v||(v={}),v[b]=h[b]);for(S=0;S<w;S++)A=Xa(i,Rd),A.stagger=0,D&&(A.easeReverse=D),v&&Us(A,v),P=E[S],A.duration=+fo(c,wi(a),S,P,E),A.delay=(+fo(u,wi(a),S,P,E)||0)-a._delay,!h&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(P,A,y?y(S,P,E):0),x._ease=re.none;x.duration()?c=u=0:a.timeline=0}else if(g){uo(Vn(x.vars.defaults,{ease:"none"})),x._ease=Or(g.ease||i.ease||"none");var O=0,F,W,q;if(on(g))g.forEach(function(X){return x.to(E,X,">")}),x.duration();else{A={};for(b in g)b==="ease"||b==="easeEach"||u_(b,g[b],A,g.easeEach);for(b in A)for(F=A[b].sort(function(X,V){return X.t-V.t}),O=0,S=0;S<F.length;S++)W=F[S],q={ease:W.e,duration:(W.t-(S?F[S-1].t:0))/100*c},q[b]=W.v,x.to(E,q,O),O+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!xu&&(Zi=wi(a),Re.killTweensOf(E),Zi=0),hi(m,wi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===Ce(m._time)&&Sn(d)&&km(wi(a))&&m.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-u)||0)),p&&hd(wi(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Me&&!u?l:i<Me?0:i,h,f,g,_,p,m,E,x;if(!c)Vm(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(h=Ce(d%_),d===l?(g=this._repeat,h=c):(p=Ce(d/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(h=c-h),p=Ns(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Ce(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(fd(this,u?i:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=h<a;if(S!==this._inv){var A=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(h/c);if(this._from&&(this.ratio=E=1-E),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(Bn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(E,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&fc(this,i,s,o),Bn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&fc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&or(this,1),!s&&!(u&&!a)&&(d||a||m)&&(Bn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Co||On.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ru(this,c),u=this._ease(c/this._dur),l_(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(cl(this,0),this.parent||cd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?no(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Je),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Zi&&Zi.vars.overwrite!==!0)._first||no(this),this.parent&&o!==this.timeline.totalDuration()&&Os(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Zn(i):a,c=this._ptLookup,u=this._pt,d,h,f,g,_,p,m;if((!s||s==="all")&&Bm(a,l))return s==="all"&&(this._pt=0),no(this);for(d=this._op=this._op||[],s!=="all"&&(Ke(s)&&(_={},Mn(s,function(E){return _[E]=1}),s=_),s=c_(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(d[m]=s,g=h,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&al(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&no(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ho(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ho(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Re.killTweensOf(i,s,o)},t}(Ro);Vn(Fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(r){Fe[r]=function(){var t=new xn,e=pc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Pu=function(t,e,n){return t[e]=n},Pd=function(t,e,n){return t[e](n)},h_=function(t,e,n,i){return t[e](i.fp,n)},f_=function(t,e,n){return t.setAttribute(e,n)},Du=function(t,e){return De(t[e])?Pd:Su(t[e])&&t.setAttribute?f_:Pu},Dd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},d_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ld=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Lu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},p_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},m_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?al(this,e,"_pt"):e.dep||(n=1),e=i;return!n},__=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Id=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},yn=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Dd,this.d=l||this,this.set=c||Pu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=__,this.m=n,this.mt=s,this.tween=i},r}();Mn(bu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Tu[r]=1});Hn.TweenMax=Hn.TweenLite=Fe;Hn.TimelineLite=Hn.TimelineMax=xn;Re=new xn({sortChildren:!1,defaults:To,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=Td;var Fr=[],Pa={},g_=[],mh=0,v_=0,bl=function(t){return(Pa[t]||g_).map(function(e){return e()})},vc=function(){var t=Date.now(),e=[];t-mh>2&&(bl("matchMediaInit"),Fr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ai.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),bl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),mh=t,bl("matchMedia"))},Ud=function(){function r(e,n){this.selector=n&&mc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=v_++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){De(n)&&(s=i,i=n,n=De);var o=this,a=function(){var c=we,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=mc(s)),we=o,d=i.apply(o,arguments),De(d)&&o._r.push(d),we=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===De?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=we;we=null,n(this),we=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Fe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Fe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Fr.length;o--;)Fr[o].id===this.id&&Fr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),x_=function(){function r(e){this.contexts=[],this.scope=e,we&&we.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){gi(n)||(n={matches:n});var o=new Ud(0,s||this.scope),a=o.conditions={},l,c,u;we&&!o.selector&&(o.selector=we.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ai.matchMedia(n[c]),l&&(Fr.indexOf(o)<0&&Fr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(vc):l.addEventListener("change",vc)));return u&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),qa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Md(i)})},timeline:function(t){return new xn(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ke(t)&&(t=Zn(t)[0]);var s=Ur(t||{}).get,o=n?ld:ad;return n==="native"&&(n=""),t&&(e?o((Un[e]&&Un[e].get||s)(t,e,n,i)):function(a,l,c){return o((Un[a]&&Un[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Zn(t),t.length>1){var i=t.map(function(u){return An.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var o=Un[e],a=Ur(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var d=new o;Ms._pt=0,d.init(t,n?u+n:u,Ms,0,[t]),d.render(1,d),Ms._pt&&Lu(1,Ms)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=An.to(t,Vn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Or(t.ease,To.ease)),uh(To,t||{})},config:function(t){return uh(kn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Un[a]&&!Hn[a]&&bo(e+" effect requires "+a+" plugin.")}),Ml[e]=function(a,l,c){return n(Zn(a),Vn(l||{},s),c)},o&&(xn.prototype[e]=function(a,l,c){return this.add(Ml[e](a,gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){re[t]=Or(e)},parseEase:function(t,e){return arguments.length?Or(t,e):re},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new xn(t),i,s;for(n.smoothChildTiming=Sn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Fe&&i.vars.onComplete===i._targets[0]))&&hi(n,i,i._start-i._delay),i=s;return hi(Re,n,0),n},context:function(t,e){return t?new Ud(t,e):we},matchMedia:function(t){return new x_(t)},matchMediaRefresh:function(){return Fr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||vc()},addEventListener:function(t,e){var n=Pa[t]||(Pa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Pa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Zm,wrapYoyo:jm,distribute:md,random:gd,snap:_d,normalize:Km,getUnit:rn,clamp:Xm,splitColor:yd,toArray:Zn,selector:mc,mapRange:xd,pipe:qm,unitize:$m,interpolate:Jm,shuffle:pd},install:nd,effects:Ml,ticker:On,updateRoot:xn.updateRoot,plugins:Un,globalTimeline:Re,core:{PropTween:yn,globals:id,Tween:Fe,Timeline:xn,Animation:Ro,getCache:Ur,_removeLinkedListItem:al,reverting:function(){return Je},context:function(t){return t&&we&&(we.data.push(t),t._ctx=we),we},suppressOverwrites:function(t){return xu=t}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return qa[r]=Fe[r]});On.add(xn.updateRoot);Ms=qa.to({},{duration:0});var S_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},M_=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=S_(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},wl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ke(s)&&(l={},Mn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}M_(a,s)}}}},An=qa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Je?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},wl("roundProps",_c),wl("modifiers"),wl("snap",_d))||qa;Fe.version=xn.version=An.version="3.15.0";ed=1;Mu()&&Fs();re.Power0;re.Power1;re.Power2;re.Power3;re.Power4;re.Linear;re.Quad;re.Cubic;re.Quart;re.Quint;re.Strong;re.Elastic;re.Back;re.SteppedEase;re.Bounce;re.Sine;re.Expo;re.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _h,ji,bs,Iu,Cr,gh,Uu,y_=function(){return typeof window<"u"},Oi={},Mr=180/Math.PI,ws=Math.PI/180,Zr=Math.atan2,vh=1e8,Nu=/([A-Z])/g,E_=/(left|right|width|margin|padding|x)/i,T_=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},b_=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},w_=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},A_=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},C_=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Nd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Od=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},R_=function(t,e,n){return t.style[e]=n},P_=function(t,e,n){return t.style.setProperty(e,n)},D_=function(t,e,n){return t._gsap[e]=n},L_=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},I_=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},U_=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Pe="transform",En=Pe+"Origin",N_=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Oi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=di[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ai(i,a)}):this.tfm[t]=o.x?o[t]:Ai(i,t),t===En&&(this.tfm.zOrigin=o.zOrigin);else return di.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Pe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,e,"")),t=Pe}(s||e)&&this.props.push(t,e,s[t])},Fd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},O_=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Nu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Uu(),(!s||!s.isStart)&&!n[Pe]&&(Fd(n),i.zOrigin&&n[En]&&(n[En]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bd=function(t,e){var n={target:t,props:[],revert:O_,save:N_};return t._gsap||An.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},zd,Sc=function(t,e){var n=ji.createElementNS?ji.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ji.createElement(t);return n&&n.style?n:ji.createElement(t)},zn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Nu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Bs(e)||e,1)||""},xh="O,Moz,ms,Ms,Webkit".split(","),Bs=function(t,e,n){var i=e||Cr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(xh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?xh[o]:"")+t},Mc=function(){y_()&&window.document&&(_h=window,ji=_h.document,bs=ji.documentElement,Cr=Sc("div")||{style:{}},Sc("div"),Pe=Bs(Pe),En=Pe+"Origin",Cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zd=!!Bs("perspective"),Uu=An.core.reverting,Iu=1)},Sh=function(t){var e=t.ownerSVGElement,n=Sc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),bs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),bs.removeChild(n),s},Mh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},kd=function(t){var e,n;try{e=t.getBBox()}catch{e=Sh(t),n=1}return e&&(e.width||e.height)||n||(e=Sh(t)),e&&!e.width&&!e.x&&!e.y?{x:+Mh(t,["x","cx","x1"])||0,y:+Mh(t,["y","cy","y1"])||0,width:0,height:0}:e},Hd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&kd(t))},ar=function(t,e){if(e){var n=t.style,i;e in Oi&&e!==En&&(e=Pe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Nu,"-$1").toLowerCase())):n.removeAttribute(e)}},Ji=function(t,e,n,i,s,o){var a=new yn(t._pt,e,n,0,1,o?Od:Nd);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},yh={deg:1,rad:1,turn:1},F_={grid:1,flex:1},lr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Cr.style,l=E_.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,p,m;if(i===o||!s||yh[i]||yh[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&Hd(t),(f||o==="%")&&(Oi[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],Le(f?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(h?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ji||!_.appendChild)&&(_=ji.body),p=_._gsap,p&&f&&p.width&&l&&p.time===On.time&&!p.uncache)return Le(s/p.width*d);if(f&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=d+i,g=t[u],E?t.style[e]=E:ar(t,e)}else(f||o==="%")&&!F_[zn(_,"display")]&&(a.position=zn(t,"position")),_===t&&(a.position="static"),_.appendChild(Cr),g=Cr[u],_.removeChild(Cr),a.position="absolute";return l&&f&&(p=Ur(_),p.time=On.time,p.width=_[u]),Le(h?g*s/d:g&&s?d/g*s:0)},Ai=function(t,e,n,i){var s;return Iu||Mc(),e in di&&e!=="transform"&&(e=di[e],~e.indexOf(",")&&(e=e.split(",")[0])),Oi[e]&&e!=="transform"?(s=Do(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ka(zn(t,En))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=$a[e]&&$a[e](t,e,n)||zn(t,e)||sd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?lr(t,e,s,n)+n:s},B_=function(t,e,n,i){if(!n||n==="none"){var s=Bs(e,t,1),o=s&&zn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=zn(t,"borderTopColor"))}var a=new yn(this._pt,t.style,e,0,1,Ld),l=0,c=0,u,d,h,f,g,_,p,m,E,x,S,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=zn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=zn(t,e)||i,_?t.style[e]=_:ar(t,e)),u=[n,i],Td(u),n=u[0],i=u[1],h=n.match(Ss)||[],A=i.match(Ss)||[],A.length){for(;d=Ss.exec(i);)p=d[0],E=i.substring(l,d.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(f=parseFloat(_)||0,S=_.substr((f+"").length),p.charAt(1)==="="&&(p=Ts(f,p)+S),m=parseFloat(p),x=p.substr((m+"").length),l=Ss.lastIndex-x.length,x||(x=x||kn.units[e]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(f=lr(t,e,_,x)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Od:Nd;return td.test(i)&&(a.e=0),this._pt=a,a},Eh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},z_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Eh[n]||n,e[1]=Eh[i]||i,e.join(" ")},k_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Oi[a]&&(l=1,a=a==="transformOrigin"?En:Pe),ar(n,a);l&&(ar(n,Pe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Do(n,1),o.uncache=1,Fd(i)))}},$a={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new yn(t._pt,e,n,0,0,k_);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Po=[1,0,0,1,0,0],Vd={},Gd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Th=function(t){var e=zn(t,Pe);return Gd(e)?Po:e.substr(7).match(Qf).map(Le)},Ou=function(t,e){var n=t._gsap||Ur(t),i=t.style,s=Th(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Po:s):(s===Po&&!t.offsetParent&&t!==bs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,bs.appendChild(t)),s=Th(t),l?i.display=l:ar(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):bs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},yc=function(t,e,n,i,s,o){var a=t._gsap,l=s||Ou(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],E=l[5],x=e.split(" "),S=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,b,P,y;n?l!==Po&&(b=f*p-g*_)&&(P=S*(p/b)+A*(-_/b)+(_*E-p*m)/b,y=S*(-g/b)+A*(f/b)-(f*E-g*m)/b,S=P,A=y):(w=kd(t),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(m=S-c,E=A-u,a.xOffset=d+(m*f+E*_)-m,a.yOffset=h+(m*g+E*p)-E):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[En]="0px 0px",o&&(Ji(o,a,"xOrigin",c,S),Ji(o,a,"yOrigin",u,A),Ji(o,a,"xOffset",d,a.xOffset),Ji(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+A)},Do=function(t,e){var n=t._gsap||new wd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=zn(t,En)||"0",u,d,h,f,g,_,p,m,E,x,S,A,w,b,P,y,v,D,O,F,W,q,X,V,k,it,R,lt,Bt,$t,$,et;return u=d=h=_=p=m=E=x=S=0,f=g=1,n.svg=!!(t.getCTM&&Hd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pe]!=="none"?l[Pe]:"")),i.scale=i.rotate=i.translate="none"),b=Ou(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),yc(t,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==Po&&(D=b[0],O=b[1],F=b[2],W=b[3],u=q=b[4],d=X=b[5],b.length===6?(f=Math.sqrt(D*D+O*O),g=Math.sqrt(W*W+F*F),_=D||O?Zr(O,D)*Mr:0,E=F||W?Zr(F,W)*Mr+_:0,E&&(g*=Math.abs(Math.cos(E*ws))),n.svg&&(u-=A-(A*D+w*F),d-=w-(A*O+w*W))):(et=b[6],$t=b[7],R=b[8],lt=b[9],Bt=b[10],$=b[11],u=b[12],d=b[13],h=b[14],P=Zr(et,Bt),p=P*Mr,P&&(y=Math.cos(-P),v=Math.sin(-P),V=q*y+R*v,k=X*y+lt*v,it=et*y+Bt*v,R=q*-v+R*y,lt=X*-v+lt*y,Bt=et*-v+Bt*y,$=$t*-v+$*y,q=V,X=k,et=it),P=Zr(-F,Bt),m=P*Mr,P&&(y=Math.cos(-P),v=Math.sin(-P),V=D*y-R*v,k=O*y-lt*v,it=F*y-Bt*v,$=W*v+$*y,D=V,O=k,F=it),P=Zr(O,D),_=P*Mr,P&&(y=Math.cos(P),v=Math.sin(P),V=D*y+O*v,k=q*y+X*v,O=O*y-D*v,X=X*y-q*v,D=V,q=k),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Le(Math.sqrt(D*D+O*O+F*F)),g=Le(Math.sqrt(X*X+et*et)),P=Zr(q,X),E=Math.abs(P)>2e-4?P*Mr:0,S=$?1/($<0?-$:$):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Gd(zn(t,Pe)),V&&t.setAttribute("transform",V))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(f*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Le(f),n.scaleY=Le(g),n.rotation=Le(_)+a,n.rotationX=Le(p)+a,n.rotationY=Le(m)+a,n.skewX=E+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[En]=Ka(c)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?V_:zd?Wd:H_,n.uncache=0,n},Ka=function(t){return(t=t.split(" "))[0]+" "+t[1]},Al=function(t,e,n){var i=rn(e);return Le(parseFloat(e)+parseFloat(lr(t,"x",n+"px",i)))+i},H_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Wd(t,e)},dr="0deg",qs="0px",pr=") ",Wd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,E=n.target,x=n.zOrigin,S="",A=m==="auto"&&t&&t!==1||m===!0;if(x&&(d!==dr||u!==dr)){var w=parseFloat(u)*ws,b=Math.sin(w),P=Math.cos(w),y;w=parseFloat(d)*ws,y=Math.cos(w),o=Al(E,o,b*y*-x),a=Al(E,a,-Math.sin(w)*-x),l=Al(E,l,P*y*-x+x)}p!==qs&&(S+="perspective("+p+pr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(A||o!==qs||a!==qs||l!==qs)&&(S+=l!==qs||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+pr),c!==dr&&(S+="rotate("+c+pr),u!==dr&&(S+="rotateY("+u+pr),d!==dr&&(S+="rotateX("+d+pr),(h!==dr||f!==dr)&&(S+="skew("+h+", "+f+pr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+pr),E.style[Pe]=S||"translate(0, 0)"},V_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,E=n.forceCSS,x=parseFloat(o),S=parseFloat(a),A,w,b,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ws,c*=ws,A=Math.cos(l)*d,w=Math.sin(l)*d,b=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=ws,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,w*=y)),A=Le(A),w=Le(w),b=Le(b),P=Le(P)):(A=d,P=h,w=b=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=lr(f,"x",o,"px"),S=lr(f,"y",a,"px")),(g||_||p||m)&&(x=Le(x+g-(g*A+_*b)+p),S=Le(S+_-(g*w+_*P)+m)),(i||s)&&(y=f.getBBox(),x=Le(x+i/100*y.width),S=Le(S+s/100*y.height)),y="matrix("+A+","+w+","+b+","+P+","+x+","+S+")",f.setAttribute("transform",y),E&&(f.style[Pe]=y)},G_=function(t,e,n,i,s){var o=360,a=Ke(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Mr:1),c=l-i,u=i+c+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*vh)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*vh)%o-~~(c/o)*o)),t._pt=h=new yn(t._pt,e,n,i,c,b_),h.e=u,h.u="deg",t._props.push(n),h},bh=function(t,e){for(var n in e)t[n]=e[n];return t},W_=function(t,e,n){var i=bh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pe]=e,a=Do(n,1),ar(n,Pe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pe],o[Pe]=e,a=Do(n,1),o[Pe]=c);for(l in Oi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=rn(c),g=rn(u),d=f!==g?lr(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new yn(t._pt,a,l,d,h-d,xc),t._pt.u=g||0,t._props.push(l));bh(a,i)};Mn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});$a[t>1?"border"+r:r]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=o.map(function(g){return Ai(a,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,f,d)}});var Xd={name:"css",register:Mc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,d,h,f,g,_,p,m,E,x,S,A,w,b,P,y;Iu||Mc(),this.styles=this.styles||Bd(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Un[_]&&Ad(_,e,n,i,t,s)))){if(f=typeof u,g=$a[_],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ao(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",nr.lastIndex=0,nr.test(c)||(p=rn(c),m=rn(u),m?p!==m&&(c=lr(t,_,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Ke(c)&&~c.indexOf("random(")&&(c=Ao(c)),rn(c+"")||c==="auto"||(c+=kn.units[_]||rn(Ai(t,_))||""),(c+"").charAt(1)==="="&&(c=Ai(t,_))):c=Ai(t,_),h=parseFloat(c),E=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),d=parseFloat(u),_ in di&&(_==="autoAlpha"&&(h===1&&Ai(t,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),Ji(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Oi,x){if(this.styles.save(_),y=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=zn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=zn(t,"perspective"),v?t.style.perspective=v:ar(t,"perspective")}d=parseFloat(u)}if(S||(A=t._gsap,A.renderTransform&&!e.parseTransform||Do(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,S=this._pt=new yn(this._pt,a,Pe,0,1,A.renderTransform,A,0,-1),S.dep=1),_==="scale")this._pt=new yn(this._pt,A,"scaleY",A.scaleY,(E?Ts(A.scaleY,E+d):d)-A.scaleY||0,xc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(En,0,a[En]),u=z_(u),A.svg?yc(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Ji(this,A,"zOrigin",A.zOrigin,m),Ji(this,a,_,Ka(c),Ka(u)));continue}else if(_==="svgOrigin"){yc(t,u,1,w,0,this);continue}else if(_ in Vd){G_(this,A,_,h,E?Ts(h,E+u):u);continue}else if(_==="smoothOrigin"){Ji(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){W_(this,u,t);continue}}else _ in a||(_=Bs(_)||_);if(x||(d||d===0)&&(h||h===0)&&!T_.test(u)&&_ in a)p=(c+"").substr((h+"").length),d||(d=0),m=rn(u)||(_ in kn.units?kn.units[_]:p),p!==m&&(h=lr(t,_,c,m)),this._pt=new yn(this._pt,x?A:a,_,h,(E?Ts(h,E+d):d)-h,!x&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?C_:xc),this._pt.u=m||0,x&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=A_):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=w_);else if(_ in a)B_.call(this,t,_,c,E?E+u:u);else if(_ in t)this.add(t,_,c||t[_],E?E+u:u,i,s);else if(_!=="parseTransform"){Eu(_,u);continue}x||(_ in a?P.push(_,0,a[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),o.push(_)}}b&&Id(this)},render:function(t,e){if(e.tween._time||!Uu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ai,aliases:di,getSetter:function(t,e,n){var i=di[e];return i&&i.indexOf(",")<0&&(e=i),e in Oi&&e!==En&&(t._gsap.x||Ai(t,"x"))?n&&gh===n?e==="scale"?L_:D_:(gh=n||{})&&(e==="scale"?I_:U_):t.style&&!Su(t.style[e])?R_:~e.indexOf("-")?P_:Du(t,e)},core:{_removeProperty:ar,_getMatrix:Ou}};An.utils.checkPrefix=Bs;An.core.getStyleSaver=Bd;(function(r,t,e,n){var i=Mn(r+","+t+","+e,function(s){Oi[s]=1});Mn(t,function(s){kn.units[s]="deg",Vd[s]=1}),di[i[13]]=r+","+t,Mn(n,function(s){var o=s.split(":");di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){kn.units[r]="px"});An.registerPlugin(Xd);var xe=An.registerPlugin(Xd)||An;xe.core.Tween;function X_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Y_(r,t,e){return t&&X_(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var je,Da,Fn,Qi,tr,As,Yd,yr,Cs,qd,Pi,ii,$d,Kd=function(){return je||typeof window<"u"&&(je=window.gsap)&&je.registerPlugin&&je},Zd=1,ys=[],ee=[],_i=[],po=Date.now,Ec=function(t,e){return e},q_=function(){var t=Cs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,_i),ee=n,_i=i,Ec=function(o,a){return e[o](a)}},ir=function(t,e){return~_i.indexOf(t)&&_i[_i.indexOf(t)+1][e]},mo=function(t){return!!~qd.indexOf(t)},ln=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},an=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Wo="scrollLeft",Xo="scrollTop",Tc=function(){return Pi&&Pi.isPressed||ee.cache++},Za=function(t,e){var n=function i(s){if(s||s===0){Zd&&(Fn.history.scrollRestoration="manual");var o=Pi&&Pi.isPressed;s=i.v=Math.round(s)||(Pi&&Pi.iOS?1:0),t(s),i.cacheID=ee.cache,o&&Ec("ss",s)}else(e||ee.cache!==i.cacheID||Ec("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},pn={s:Wo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Za(function(r){return arguments.length?Fn.scrollTo(r,Ve.sc()):Fn.pageXOffset||Qi[Wo]||tr[Wo]||As[Wo]||0})},Ve={s:Xo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:Za(function(r){return arguments.length?Fn.scrollTo(pn.sc(),r):Fn.pageYOffset||Qi[Xo]||tr[Xo]||As[Xo]||0})},gn=function(t,e){return(e&&e._ctx&&e._ctx.selector||je.utils.toArray)(t)[0]||(typeof t=="string"&&je.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},$_=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},cr=function(t,e){var n=e.s,i=e.sc;mo(t)&&(t=Qi.scrollingElement||tr);var s=ee.indexOf(t),o=i===Ve.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+o]||ln(t,"scroll",Tc);var a=ee[s+o],l=a||(ee[s+o]=Za(ir(t,n),!0)||(mo(t)?i:Za(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=je.getProperty(t,"scrollBehavior")==="smooth"),l},bc=function(t,e,n){var i=t,s=t,o=po(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var p=po();_||p-o>l?(s=i,i=g,a=o,o=p):n?i+=g:i=s+(g-s)/(p-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},h=function(g){var _=a,p=s,m=po();return(g||g===0)&&g!==i&&u(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:d,getVelocity:h}},$s=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},wh=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},jd=function(){Cs=je.core.globals().ScrollTrigger,Cs&&Cs.core&&q_()},Jd=function(t){return je=t||Kd(),!Da&&je&&typeof document<"u"&&document.body&&(Fn=window,Qi=document,tr=Qi.documentElement,As=Qi.body,qd=[Fn,Qi,tr,As],je.utils.clamp,$d=je.core.context||function(){},yr="onpointerenter"in As?"pointer":"mouse",Yd=Ie.isTouch=Fn.matchMedia&&Fn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Ie.eventTypes=("ontouchstart"in tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zd=0},500),Da=1),Cs||jd(),Da};pn.op=Ve;ee.cache=0;var Ie=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Da||Jd(je)||console.warn("Please gsap.registerPlugin(Observer)"),Cs||jd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,E=n.onDrag,x=n.onPress,S=n.onRelease,A=n.onRight,w=n.onLeft,b=n.onUp,P=n.onDown,y=n.onChangeX,v=n.onChangeY,D=n.onChange,O=n.onToggleX,F=n.onToggleY,W=n.onHover,q=n.onHoverEnd,X=n.onMove,V=n.ignoreCheck,k=n.isNormalizer,it=n.onGestureStart,R=n.onGestureEnd,lt=n.onWheel,Bt=n.onEnable,$t=n.onDisable,$=n.onClick,et=n.scrollSpeed,ht=n.capture,at=n.allowClicks,yt=n.lockAxis,bt=n.onLockAxis;this.target=a=gn(a)||tr,this.vars=n,f&&(f=je.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Fn.getComputedStyle(As).lineHeight)||22);var Gt,Jt,L,It,Ft,Xt,gt,H=this,Ct=0,Nt=0,C=n.passive||!u&&n.passive!==!1,M=cr(a,pn),G=cr(a,Ve),Q=M(),tt=G(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ii[0]==="pointerdown",wt=mo(a),rt=a.ownerDocument||Qi,dt=[0,0,0],Ut=[0,0,0],st=0,_t=function(){return st=po()},Dt=function(Et,se){return(H.event=Et)&&f&&$_(Et.target,f)||se&&Z&&Et.pointerType!=="touch"||V&&V(Et,se)},zt=function(){H._vx.reset(),H._vy.reset(),Jt.pause(),d&&d(H)},mt=function(){var Et=H.deltaX=wh(dt),se=H.deltaY=wh(Ut),ct=Math.abs(Et)>=i,Ht=Math.abs(se)>=i;D&&(ct||Ht)&&D(H,Et,se,dt,Ut),ct&&(A&&H.deltaX>0&&A(H),w&&H.deltaX<0&&w(H),y&&y(H),O&&H.deltaX<0!=Ct<0&&O(H),Ct=H.deltaX,dt[0]=dt[1]=dt[2]=0),Ht&&(P&&H.deltaY>0&&P(H),b&&H.deltaY<0&&b(H),v&&v(H),F&&H.deltaY<0!=Nt<0&&F(H),Nt=H.deltaY,Ut[0]=Ut[1]=Ut[2]=0),(It||L)&&(X&&X(H),L&&(p&&L===1&&p(H),E&&E(H),L=0),It=!1),Xt&&!(Xt=!1)&&bt&&bt(H),Ft&&(lt(H),Ft=!1),Gt=0},kt=function(Et,se,ct){dt[ct]+=Et,Ut[ct]+=se,H._vx.update(Et),H._vy.update(se),c?Gt||(Gt=requestAnimationFrame(mt)):mt()},Wt=function(Et,se){yt&&!gt&&(H.axis=gt=Math.abs(Et)>Math.abs(se)?"x":"y",Xt=!0),gt!=="y"&&(dt[2]+=Et,H._vx.update(Et,!0)),gt!=="x"&&(Ut[2]+=se,H._vy.update(se,!0)),c?Gt||(Gt=requestAnimationFrame(mt)):mt()},le=function(Et){if(!Dt(Et,1)){Et=$s(Et,u);var se=Et.clientX,ct=Et.clientY,Ht=se-H.x,Lt=ct-H.y,Vt=H.isDragging;H.x=se,H.y=ct,(Vt||(Ht||Lt)&&(Math.abs(H.startX-se)>=s||Math.abs(H.startY-ct)>=s))&&(L||(L=Vt?2:1),Vt||(H.isDragging=!0),Wt(Ht,Lt))}},U=H.onPress=function(Ot){Dt(Ot,1)||Ot&&Ot.button||(H.axis=gt=null,Jt.pause(),H.isPressed=!0,Ot=$s(Ot),Ct=Nt=0,H.startX=H.x=Ot.clientX,H.startY=H.y=Ot.clientY,H._vx.reset(),H._vy.reset(),ln(k?a:rt,ii[1],le,C,!0),H.deltaX=H.deltaY=0,x&&x(H))},K=H.onRelease=function(Ot){if(!Dt(Ot,1)){an(k?a:rt,ii[1],le,!0);var Et=!isNaN(H.y-H.startY),se=H.isDragging,ct=se&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Ht=$s(Ot);!ct&&Et&&(H._vx.reset(),H._vy.reset(),u&&at&&je.delayedCall(.08,function(){if(po()-st>300&&!Ot.defaultPrevented){if(Ot.target.click)Ot.target.click();else if(rt.createEvent){var Lt=rt.createEvent("MouseEvents");Lt.initMouseEvent("click",!0,!0,Fn,1,Ht.screenX,Ht.screenY,Ht.clientX,Ht.clientY,!1,!1,!1,!1,0,null),Ot.target.dispatchEvent(Lt)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,d&&se&&!k&&Jt.restart(!0),L&&mt(),m&&se&&m(H),S&&S(H,ct)}},j=function(Et){return Et.touches&&Et.touches.length>1&&(H.isGesturing=!0)&&it(Et,H.isDragging)},J=function(){return(H.isGesturing=!1)||R(H)},ot=function(Et){if(!Dt(Et)){var se=M(),ct=G();kt((se-Q)*et,(ct-tt)*et,1),Q=se,tt=ct,d&&Jt.restart(!0)}},At=function(Et){if(!Dt(Et)){Et=$s(Et,u),lt&&(Ft=!0);var se=(Et.deltaMode===1?l:Et.deltaMode===2?Fn.innerHeight:1)*g;kt(Et.deltaX*se,Et.deltaY*se,0),d&&!k&&Jt.restart(!0)}},qt=function(Et){if(!Dt(Et)){var se=Et.clientX,ct=Et.clientY,Ht=se-H.x,Lt=ct-H.y;H.x=se,H.y=ct,It=!0,d&&Jt.restart(!0),(Ht||Lt)&&Wt(Ht,Lt)}},ge=function(Et){H.event=Et,W(H)},ve=function(Et){H.event=Et,q(H)},ne=function(Et){return Dt(Et)||$s(Et,u)&&$(H)};Jt=H._dc=je.delayedCall(h||.25,zt).pause(),H.deltaX=H.deltaY=0,H._vx=bc(0,50,!0),H._vy=bc(0,50,!0),H.scrollX=M,H.scrollY=G,H.isDragging=H.isGesturing=H.isPressed=!1,$d(this),H.enable=function(Ot){return H.isEnabled||(ln(wt?rt:a,"scroll",Tc),o.indexOf("scroll")>=0&&ln(wt?rt:a,"scroll",ot,C,ht),o.indexOf("wheel")>=0&&ln(a,"wheel",At,C,ht),(o.indexOf("touch")>=0&&Yd||o.indexOf("pointer")>=0)&&(ln(a,ii[0],U,C,ht),ln(rt,ii[2],K),ln(rt,ii[3],K),at&&ln(a,"click",_t,!0,!0),$&&ln(a,"click",ne),it&&ln(rt,"gesturestart",j),R&&ln(rt,"gestureend",J),W&&ln(a,yr+"enter",ge),q&&ln(a,yr+"leave",ve),X&&ln(a,yr+"move",qt)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=It=L=!1,H._vx.reset(),H._vy.reset(),Q=M(),tt=G(),Ot&&Ot.type&&U(Ot),Bt&&Bt(H)),H},H.disable=function(){H.isEnabled&&(ys.filter(function(Ot){return Ot!==H&&mo(Ot.target)}).length||an(wt?rt:a,"scroll",Tc),H.isPressed&&(H._vx.reset(),H._vy.reset(),an(k?a:rt,ii[1],le,!0)),an(wt?rt:a,"scroll",ot,ht),an(a,"wheel",At,ht),an(a,ii[0],U,ht),an(rt,ii[2],K),an(rt,ii[3],K),an(a,"click",_t,!0),an(a,"click",ne),an(rt,"gesturestart",j),an(rt,"gestureend",J),an(a,yr+"enter",ge),an(a,yr+"leave",ve),an(a,yr+"move",qt),H.isEnabled=H.isPressed=H.isDragging=!1,$t&&$t(H))},H.kill=H.revert=function(){H.disable();var Ot=ys.indexOf(H);Ot>=0&&ys.splice(Ot,1),Pi===H&&(Pi=0)},ys.push(H),k&&mo(a)&&(Pi=H),H.enable(_)},Y_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ie.version="3.15.0";Ie.create=function(r){return new Ie(r)};Ie.register=Jd;Ie.getAll=function(){return ys.slice()};Ie.getById=function(r){return ys.filter(function(t){return t.vars.id===r})[0]};Kd()&&je.registerPlugin(Ie);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var St,vs,te,me,Nn,ue,Fu,ja,Lo,_o,ro,Yo,en,ul,wc,hn,Ah,Ch,xs,Qd,Cl,tp,un,Ac,ep,np,$i,Cc,Bu,Rs,zu,go,Rc,Rl,qo=1,nn=Date.now,Pl=nn(),Jn=0,so=0,Rh=function(t,e,n){var i=In(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Ph=function(t,e){return e&&(!In(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},K_=function r(){return so&&requestAnimationFrame(r)},Dh=function(){return ul=1},Lh=function(){return ul=0},li=function(t){return t},oo=function(t){return Math.round(t*1e5)/1e5||0},ip=function(){return typeof window<"u"},rp=function(){return St||ip()&&(St=window.gsap)&&St.registerPlugin&&St},Vr=function(t){return!!~Fu.indexOf(t)},sp=function(t){return(t==="Height"?zu:te["inner"+t])||Nn["client"+t]||ue["client"+t]},op=function(t){return ir(t,"getBoundingClientRect")||(Vr(t)?function(){return Oa.width=te.innerWidth,Oa.height=zu,Oa}:function(){return Ci(t)})},Z_=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=ir(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?sp(s):t["client"+s])||0}},j_=function(t,e){return!e||~_i.indexOf(t)?op(t):function(){return Oa}},pi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=ir(t,n))?o()-op(t)()[s]:Vr(t)?(Nn[n]||ue[n])-sp(i):t[n]-t["offset"+i])},$o=function(t,e){for(var n=0;n<xs.length;n+=3)(!e||~e.indexOf(xs[n+1]))&&t(xs[n],xs[n+1],xs[n+2])},In=function(t){return typeof t=="string"},sn=function(t){return typeof t=="function"},ao=function(t){return typeof t=="number"},Er=function(t){return typeof t=="object"},Ks=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},jr=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Jr=Math.abs,ap="left",lp="top",ku="right",Hu="bottom",Br="width",zr="height",vo="Right",xo="Left",So="Top",Mo="Bottom",Oe="padding",Yn="margin",zs="Width",Vu="Height",He="px",qn=function(t){return te.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},J_=function(t){var e=qn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ih=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ci=function(t,e){var n=e&&qn(t)[wc]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ja=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},cp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Q_=function(t){return function(e){return St.utils.snap(cp(t),e)}},Gu=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},tg=function(t){return function(e,n){return Gu(cp(t))(e,n.direction)}},Ko=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ye=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Zo=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Uh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jo={toggleActions:"play",anticipatePin:0},Qa={top:0,left:0,center:.5,bottom:1,right:1},La=function(t,e){if(In(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Qa?Qa[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Jo=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=me.createElement("div"),_=Vr(n)||ir(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?ue:n.tagName==="IFRAME"?n.contentDocument.body:n,E=t.indexOf("start")!==-1,x=E?c:u,S="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(i===Ve?ku:Hu)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=E,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=S,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Ia(g,0,i,E),g},Ia=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+zs]=1,s["border"+a+zs]=0,s[n.p]=e+"px",St.set(t,s)},jt=[],Pc={},Io,Nh=function(){return nn()-Jn>34&&(Io||(Io=requestAnimationFrame(Ui)))},Qr=function(){(!un||!un.isPressed||un.startX>ue.clientWidth)&&(ee.cache++,un?Io||(Io=requestAnimationFrame(Ui)):Ui(),Jn||Wr("scrollStart"),Jn=nn())},Dl=function(){np=te.innerWidth,ep=te.innerHeight},lo=function(t){ee.cache++,(t===!0||!en&&!tp&&!me.fullscreenElement&&!me.webkitFullscreenElement&&(!Ac||np!==te.innerWidth||Math.abs(te.innerHeight-ep)>te.innerHeight*.25))&&ja.restart(!0)},Gr={},eg=[],up=function r(){return Ye(Yt,"scrollEnd",r)||Rr(!0)},Wr=function(t){return Gr[t]&&Gr[t].map(function(e){return e()})||eg},Ln=[],hp=function(t){for(var e=0;e<Ln.length;e+=5)(!t||Ln[e+4]&&Ln[e+4].query===t)&&(Ln[e].style.cssText=Ln[e+1],Ln[e].getBBox&&Ln[e].setAttribute("transform",Ln[e+2]||""),Ln[e+3].uncache=1)},fp=function(){return ee.forEach(function(t){return sn(t)&&++t.cacheID&&(t.rec=t())})},Wu=function(t,e){var n;for(hn=0;hn<jt.length;hn++)n=jt[hn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));go=!0,e&&hp(e),e||Wr("revert")},dp=function(t,e){ee.cache++,(e||!fn)&&ee.forEach(function(n){return sn(n)&&n.cacheID++&&(n.rec=0)}),In(t)&&(te.history.scrollRestoration=Bu=t)},fn,kr=0,Oh,ng=function(){if(Oh!==kr){var t=Oh=kr;requestAnimationFrame(function(){return t===kr&&Rr(!0)})}},pp=function(){ue.appendChild(Rs),zu=!un&&Rs.offsetHeight||te.innerHeight,ue.removeChild(Rs)},Fh=function(t){return Lo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Rr=function(t,e){if(Nn=me.documentElement,ue=me.body,Fu=[te,me,Nn,ue],Jn&&!t&&!go){qe(Yt,"scrollEnd",up);return}pp(),fn=Yt.isRefreshing=!0,go||fp();var n=Wr("refreshInit");Qd&&Yt.sort(),e||Wu(),ee.forEach(function(i){sn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),jt.slice(0).forEach(function(i){return i.refresh()}),go=!1,jt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Rc=1,Fh(!0),jt.forEach(function(i){var s=pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Fh(!1),Rc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){sn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),dp(Bu,1),ja.pause(),kr++,fn=2,Ui(2),jt.forEach(function(i){return sn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),fn=Yt.isRefreshing=!1,Wr("refresh")},Dc=0,Ua=1,yo,Ui=function(t){if(t===2||!fn&&!go){Yt.isUpdating=!0,yo&&yo.update(0);var e=jt.length,n=nn(),i=n-Pl>=50,s=e&&jt[0].scroll();if(Ua=Dc>s?-1:1,fn||(Dc=s),i&&(Jn&&!ul&&n-Jn>200&&(Jn=0,Wr("scrollEnd")),ro=Pl,Pl=n),Ua<0){for(hn=e;hn-- >0;)jt[hn]&&jt[hn].update(0,i);Ua=1}else for(hn=0;hn<e;hn++)jt[hn]&&jt[hn].update(0,i);Yt.isUpdating=!1}Io=0},Lc=[ap,lp,Hu,ku,Yn+Mo,Yn+vo,Yn+So,Yn+xo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Na=Lc.concat([Br,zr,"boxSizing","max"+zs,"max"+Vu,"position",Yn,Oe,Oe+So,Oe+vo,Oe+Mo,Oe+xo]),ig=function(t,e,n){Ps(n);var i=t._gsap;if(i.spacerIsNative)Ps(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Ll=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Lc.length,o=e.style,a=t.style,l;s--;)l=Lc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Hu]=a[ku]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Br]=Ja(t,pn)+He,o[zr]=Ja(t,Ve)+He,o[Oe]=a[Yn]=a[lp]=a[ap]="0",Ps(i),a[Br]=a["max"+zs]=n[Br],a[zr]=a["max"+Vu]=n[zr],a[Oe]=n[Oe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},rg=/([A-Z])/g,Ps=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(rg,"-$1").toLowerCase())}},Qo=function(t){for(var e=Na.length,n=t.style,i=[],s=0;s<e;s++)i.push(Na[s],n[Na[s]]);return i.t=t,i},sg=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Oa={left:0,top:0},Bh=function(t,e,n,i,s,o,a,l,c,u,d,h,f,g){sn(t)&&(t=t(l)),In(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?La("0"+t.substr(3),n):0));var _=f?f.time():0,p,m,E;if(f&&f.seek(0),isNaN(t)||(t=+t),ao(t))f&&(t=St.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,t)),a&&Ia(a,n,i,!0);else{sn(e)&&(e=e(l));var x=(t||"0").split(" "),S,A,w,b;E=gn(e,l)||ue,S=Ci(E)||{},(!S||!S.left&&!S.top)&&qn(E).display==="none"&&(b=E.style.display,E.style.display="block",S=Ci(E),b?E.style.display=b:E.style.removeProperty("display")),A=La(x[0],S[i.d]),w=La(x[1]||"0",n),t=S[i.p]-c[i.p]-u+A+s-w,a&&Ia(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var P=t+n,y=o._isStart;p="scroll"+i.d2,Ia(o,P,i,y&&P>20||!y&&(d?Math.max(ue[p],Nn[p]):o.parentNode[p])<=P+1),d&&(c=Ci(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+He))}return f&&E&&(p=Ci(E),f.seek(h),m=Ci(E),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*h),f&&f.seek(_),f?t:Math.round(t)},og=/(webkit|moz|length|cssText|inset)/i,zh=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ue){t._stOrig=s.cssText,a=qn(t);for(o in a)!+o&&!og.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},mp=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ta=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},kh=function(t,e){var n=cr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,d){var h=o.tween,f=l.onComplete,g={};c=c||n();var _=mp(n,c,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&Ui()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=St.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},qe(t,"wheel",n.wheelHandler),Yt.isTouch&&qe(t,"touchmove",n.wheelHandler),s},Yt=function(){function r(e,n){vs||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Cc(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!so){this.update=this.refresh=this.kill=li;return}n=Ih(In(n)||ao(n)||n.nodeType?{trigger:n}:n,jo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,E=s.onSnapComplete,x=s.once,S=s.snap,A=s.pinReparent,w=s.pinSpacer,b=s.containerAnimation,P=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:Ve,D=!d&&d!==0,O=gn(n.scroller||te),F=St.core.getCache(O),W=Vr(O),q=("pinType"in n?n.pinType:ir(O,"pinType")||W&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=D&&n.toggleActions.split(" "),k="markers"in n?n.markers:jo.markers,it=W?0:parseFloat(qn(O)["border"+v.p2+zs])||0,R=this,lt=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Bt=Z_(O,W,v),$t=j_(O,W),$=0,et=0,ht=0,at=cr(O,v),yt,bt,Gt,Jt,L,It,Ft,Xt,gt,H,Ct,Nt,C,M,G,Q,tt,Z,wt,rt,dt,Ut,st,_t,Dt,zt,mt,kt,Wt,le,U,K,j,J,ot,At,qt,ge,ve;if(R._startClamp=R._endClamp=!1,R._dir=v,p*=45,R.scroller=O,R.scroll=b?b.time.bind(b):at,Jt=at(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Qd=1,n.refreshPriority===-9999&&(yo=R)),F.tweenScroll=F.tweenScroll||{top:kh(O,Ve),left:kh(O,pn)},R.tweenTo=yt=F.tweenScroll[v.p],R.scrubDuration=function(ct){j=ao(ct)&&ct,j?K?K.duration(ct):K=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return m&&m(R)}}):(K&&K.progress(1).kill(),K=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),le=0,l||(l=i.vars.id)),S&&((!Er(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in ue.style&&St.set(W?[ue,Nn]:O,{scrollBehavior:"auto"}),ee.forEach(function(ct){return sn(ct)&&ct.target===(W?me.scrollingElement||Nn:O)&&(ct.smooth=!1)}),Gt=sn(S.snapTo)?S.snapTo:S.snapTo==="labels"?Q_(i):S.snapTo==="labelsDirectional"?tg(i):S.directional!==!1?function(ct,Ht){return Gu(S.snapTo)(ct,nn()-et<500?0:Ht.direction)}:St.utils.snap(S.snapTo),J=S.duration||{min:.1,max:2},J=Er(J)?_o(J.min,J.max):_o(J,J),ot=St.delayedCall(S.delay||j/2||.1,function(){var ct=at(),Ht=nn()-et<500,Lt=yt.tween;if((Ht||Math.abs(R.getVelocity())<10)&&!Lt&&!ul&&$!==ct){var Vt=(ct-It)/M,Ae=i&&!D?i.totalProgress():Vt,Qt=Ht?0:(Ae-U)/(nn()-ro)*1e3||0,ye=St.utils.clamp(-Vt,1-Vt,Jr(Qt/2)*Qt/.185),ze=Vt+(S.inertia===!1?0:ye),Te,Ee,pe=S,Cn=pe.onStart,T=pe.onInterrupt,I=pe.onComplete;if(Te=Gt(ze,R),ao(Te)||(Te=ze),Ee=Math.max(0,Math.round(It+Te*M)),ct<=Ft&&ct>=It&&Ee!==ct){if(Lt&&!Lt._initted&&Lt.data<=Jr(Ee-ct))return;S.inertia===!1&&(ye=Te-Vt),yt(Ee,{duration:J(Jr(Math.max(Jr(ze-Ae),Jr(Te-Ae))*.185/Qt/.05||0)),ease:S.ease||"power3",data:Jr(Ee-ct),onInterrupt:function(){return ot.restart(!0)&&T&&jr(R,T)},onComplete:function(){R.update(),$=at(),i&&!D&&(K?K.resetTo("totalProgress",Te,i._tTime/i._tDur):i.progress(Te)),le=U=i&&!D?i.totalProgress():R.progress,E&&E(R),I&&jr(R,I)}},ct,ye*M,Ee-ct-ye*M),Cn&&jr(R,Cn,yt.tween)}}else R.isActive&&$!==ct&&ot.restart(!0)}).pause()),l&&(Pc[l]=R),h=R.trigger=gn(h||f!==!0&&f),ve=h&&h._gsap&&h._gsap.stRevert,ve&&(ve=ve(R)),f=f===!0?h:gn(f),In(a)&&(a={targets:h,className:a}),f&&(g===!1||g===Yn||(g=!g&&f.parentNode&&f.parentNode.style&&qn(f.parentNode).display==="flex"?!1:Oe),R.pin=f,bt=St.core.getCache(f),bt.spacer?G=bt.pinState:(w&&(w=gn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),bt.spacerIsNative=!!w,w&&(bt.spacerState=Qo(w))),bt.spacer=Z=w||me.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),bt.pinState=G=Qo(f)),n.force3D!==!1&&St.set(f,{force3D:!0}),R.spacer=Z=bt.spacer,Wt=qn(f),_t=Wt[g+v.os2],rt=St.getProperty(f),dt=St.quickSetter(f,v.a,He),Ll(f,Z,Wt),tt=Qo(f)),k){Nt=Er(k)?Ih(k,Uh):Uh,H=Jo("scroller-start",l,O,v,Nt,0),Ct=Jo("scroller-end",l,O,v,Nt,0,H),wt=H["offset"+v.op.d2];var ne=gn(ir(O,"content")||O);Xt=this.markerStart=Jo("start",l,ne,v,Nt,wt,0,b),gt=this.markerEnd=Jo("end",l,ne,v,Nt,wt,0,b),b&&(ge=St.quickSetter([Xt,gt],v.a,He)),!q&&!(_i.length&&ir(O,"fixedMarkers")===!0)&&(J_(W?ue:O),St.set([H,Ct],{force3D:!0}),zt=St.quickSetter(H,v.a,He),kt=St.quickSetter(Ct,v.a,He))}if(b){var Ot=b.vars.onUpdate,Et=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){R.update(0,0,1),Ot&&Ot.apply(b,Et||[])})}if(R.previous=function(){return jt[jt.indexOf(R)-1]},R.next=function(){return jt[jt.indexOf(R)+1]},R.revert=function(ct,Ht){if(!Ht)return R.kill(!0);var Lt=ct!==!1||!R.enabled,Vt=en;Lt!==R.isReverted&&(Lt&&(At=Math.max(at(),R.scroll.rec||0),ht=R.progress,qt=i&&i.progress()),Xt&&[Xt,gt,H,Ct].forEach(function(Ae){return Ae.style.display=Lt?"none":"block"}),Lt&&(en=R,R.update(Lt)),f&&(!A||!R.isActive)&&(Lt?ig(f,Z,G):Ll(f,Z,qn(f),Dt)),Lt||R.update(Lt),en=Vt,R.isReverted=Lt)},R.refresh=function(ct,Ht,Lt,Vt){if(!((en||!R.enabled)&&!Ht)){if(f&&ct&&Jn){qe(r,"scrollEnd",up);return}!fn&&lt&&lt(R),en=R,yt.tween&&!Lt&&(yt.tween.kill(),yt.tween=0),K&&K.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Mt){return Mt.vars.immediateRender&&Mt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ae=Bt(),Qt=$t(),ye=b?b.duration():pi(O,v),ze=M<=.01||!M,Te=0,Ee=Vt||0,pe=Er(Lt)?Lt.end:n.end,Cn=n.endTrigger||h,T=Er(Lt)?Lt.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),I=R.pinnedContainer=n.pinnedContainer&&gn(n.pinnedContainer,R),z=h&&Math.max(0,jt.indexOf(R))||0,B=z,N,nt,ft,xt,ut,vt,Rt,Tt,oe,_e,ae,ke,ie;for(k&&Er(Lt)&&(ke=St.getProperty(H,v.p),ie=St.getProperty(Ct,v.p));B-- >0;)vt=jt[B],vt.end||vt.refresh(0,1)||(en=R),Rt=vt.pin,Rt&&(Rt===h||Rt===f||Rt===I)&&!vt.isReverted&&(_e||(_e=[]),_e.unshift(vt),vt.revert(!0,!0)),vt!==jt[B]&&(z--,B--);for(sn(T)&&(T=T(R)),T=Rh(T,"start",R),It=Bh(T,h,Ae,v,at(),Xt,H,R,Qt,it,q,ye,b,R._startClamp&&"_startClamp")||(f?-.001:0),sn(pe)&&(pe=pe(R)),In(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(In(T)?T.split(" ")[0]:"")+pe:(Te=La(pe.substr(2),Ae),pe=In(T)?T:(b?St.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,It):It)+Te,Cn=h)),pe=Rh(pe,"end",R),Ft=Math.max(It,Bh(pe||(Cn?"100% 0":ye),Cn,Ae,v,at()+Te,gt,Ct,R,Qt,it,q,ye,b,R._endClamp&&"_endClamp"))||-.001,Te=0,B=z;B--;)vt=jt[B]||{},Rt=vt.pin,Rt&&vt.start-vt._pinPush<=It&&!b&&vt.end>0&&(N=vt.end-(R._startClamp?Math.max(0,vt.start):vt.start),(Rt===h&&vt.start-vt._pinPush<It||Rt===I)&&isNaN(T)&&(Te+=N*(1-vt.progress)),Rt===f&&(Ee+=N));if(It+=Te,Ft+=Te,R._startClamp&&(R._startClamp+=Te),R._endClamp&&!fn&&(R._endClamp=Ft||-.001,Ft=Math.min(Ft,pi(O,v))),M=Ft-It||(It-=.01)&&.001,ze&&(ht=St.utils.clamp(0,1,St.utils.normalize(It,Ft,At))),R._pinPush=Ee,Xt&&Te&&(N={},N[v.a]="+="+Te,I&&(N[v.p]="-="+at()),St.set([Xt,gt],N)),f&&!(Rc&&R.end>=pi(O,v)))N=qn(f),xt=v===Ve,ft=at(),Ut=parseFloat(rt(v.a))+Ee,!ye&&Ft>1&&(ae=(W?me.scrollingElement||Nn:O).style,ae={style:ae,value:ae["overflow"+v.a.toUpperCase()]},W&&qn(ue)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+v.a.toUpperCase()]="scroll")),Ll(f,Z,N),tt=Qo(f),nt=Ci(f,!0),Tt=q&&cr(O,xt?pn:Ve)(),g?(Dt=[g+v.os2,M+Ee+He],Dt.t=Z,B=g===Oe?Ja(f,v)+M+Ee:0,B&&(Dt.push(v.d,B+He),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+He)),Ps(Dt),I&&jt.forEach(function(Mt){Mt.pin===I&&Mt.vars.pinSpacing!==!1&&(Mt._subPinOffset=!0)}),q&&at(At)):(B=Ja(f,v),B&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=B+He)),q&&(ut={top:nt.top+(xt?ft-It:Tt)+He,left:nt.left+(xt?Tt:ft-It)+He,boxSizing:"border-box",position:"fixed"},ut[Br]=ut["max"+zs]=Math.ceil(nt.width)+He,ut[zr]=ut["max"+Vu]=Math.ceil(nt.height)+He,ut[Yn]=ut[Yn+So]=ut[Yn+vo]=ut[Yn+Mo]=ut[Yn+xo]="0",ut[Oe]=N[Oe],ut[Oe+So]=N[Oe+So],ut[Oe+vo]=N[Oe+vo],ut[Oe+Mo]=N[Oe+Mo],ut[Oe+xo]=N[Oe+xo],Q=sg(G,ut,A),fn&&at(0)),i?(oe=i._initted,Cl(1),i.render(i.duration(),!0,!0),st=rt(v.a)-Ut+M+Ee,mt=Math.abs(M-st)>1,q&&mt&&Q.splice(Q.length-2,2),i.render(0,!0,!0),oe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Cl(0)):st=M,ae&&(ae.value?ae.style["overflow"+v.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+v.a));else if(h&&at()&&!b)for(nt=h.parentNode;nt&&nt!==ue;)nt._pinOffset&&(It-=nt._pinOffset,Ft-=nt._pinOffset),nt=nt.parentNode;_e&&_e.forEach(function(Mt){return Mt.revert(!1,!0)}),R.start=It,R.end=Ft,Jt=L=fn?At:at(),!b&&!fn&&(Jt<At&&at(At),R.scroll.rec=0),R.revert(!1,!0),et=nn(),ot&&($=-1,ot.restart(!0)),en=0,i&&D&&(i._initted||qt)&&i.progress()!==qt&&i.progress(qt||0,!0).render(i.time(),!0,!0),(ze||ht!==R.progress||b||_||i&&!i._initted)&&(i&&!D&&(i._initted||ht||i.vars.immediateRender!==!1)&&i.totalProgress(b&&It<-.001&&!ht?St.utils.normalize(It,Ft,0):ht,!0),R.progress=ze||(Jt-It)/M===ht?0:ht),f&&g&&(Z._pinOffset=Math.round(R.progress*st)),K&&K.invalidate(),isNaN(ke)||(ke-=St.getProperty(H,v.p),ie-=St.getProperty(Ct,v.p),ta(H,v,ke),ta(Xt,v,ke-(Vt||0)),ta(Ct,v,ie),ta(gt,v,ie-(Vt||0))),ze&&!fn&&R.update(),u&&!fn&&!C&&(C=!0,u(R),C=!1)}},R.getVelocity=function(){return(at()-L)/(nn()-ro)*1e3||0},R.endAnimation=function(){Ks(R.callbackAnimation),i&&(K?K.progress(1):i.paused()?D||Ks(i,R.direction<0,1):Ks(i,i.reversed()))},R.labelToScroll=function(ct){return i&&i.labels&&(It||R.refresh()||It)+i.labels[ct]/i.duration()*M||0},R.getTrailing=function(ct){var Ht=jt.indexOf(R),Lt=R.direction>0?jt.slice(0,Ht).reverse():jt.slice(Ht+1);return(In(ct)?Lt.filter(function(Vt){return Vt.vars.preventOverlaps===ct}):Lt).filter(function(Vt){return R.direction>0?Vt.end<=It:Vt.start>=Ft})},R.update=function(ct,Ht,Lt){if(!(b&&!Lt&&!ct)){var Vt=fn===!0?At:R.scroll(),Ae=ct?0:(Vt-It)/M,Qt=Ae<0?0:Ae>1?1:Ae||0,ye=R.progress,ze,Te,Ee,pe,Cn,T,I,z;if(Ht&&(L=Jt,Jt=b?at():Vt,S&&(U=le,le=i&&!D?i.totalProgress():Qt)),p&&f&&!en&&!qo&&Jn&&(!Qt&&It<Vt+(Vt-L)/(nn()-ro)*p?Qt=1e-4:Qt===1&&Ft>Vt+(Vt-L)/(nn()-ro)*p&&(Qt=.9999)),Qt!==ye&&R.enabled){if(ze=R.isActive=!!Qt&&Qt<1,Te=!!ye&&ye<1,T=ze!==Te,Cn=T||!!Qt!=!!ye,R.direction=Qt>ye?1:-1,R.progress=Qt,Cn&&!en&&(Ee=Qt&&!ye?0:Qt===1?1:ye===1?2:3,D&&(pe=!T&&V[Ee+1]!=="none"&&V[Ee+1]||V[Ee],z=i&&(pe==="complete"||pe==="reset"||pe in i))),y&&(T||z)&&(z||d||!i)&&(sn(y)?y(R):R.getTrailing(y).forEach(function(ft){return ft.endAnimation()})),D||(K&&!en&&!qo?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",Qt,i._tTime/i._tDur):(K.vars.totalProgress=Qt,K.invalidate().restart())):i&&i.totalProgress(Qt,!!(en&&(et||ct)))),f){if(ct&&g&&(Z.style[g+v.os2]=_t),!q)dt(oo(Ut+st*Qt));else if(Cn){if(I=!ct&&Qt>ye&&Ft+1>Vt&&Vt+1>=pi(O,v),A)if(!ct&&(ze||I)){var B=Ci(f,!0),N=Vt-It;zh(f,ue,B.top+(v===Ve?N:0)+He,B.left+(v===Ve?0:N)+He)}else zh(f,Z);Ps(ze||I?Q:tt),mt&&Qt<1&&ze||dt(Ut+(Qt===1&&!I?st:0))}}S&&!yt.tween&&!en&&!qo&&ot.restart(!0),a&&(T||x&&Qt&&(Qt<1||!Rl))&&Lo(a.targets).forEach(function(ft){return ft.classList[ze||x?"add":"remove"](a.className)}),o&&!D&&!ct&&o(R),Cn&&!en?(D&&(z&&(pe==="complete"?i.pause().totalProgress(1):pe==="reset"?i.restart(!0).pause():pe==="restart"?i.restart(!0):i[pe]()),o&&o(R)),(T||!Rl)&&(c&&T&&jr(R,c),X[Ee]&&jr(R,X[Ee]),x&&(Qt===1?R.kill(!1,1):X[Ee]=0),T||(Ee=Qt===1?1:3,X[Ee]&&jr(R,X[Ee]))),P&&!ze&&Math.abs(R.getVelocity())>(ao(P)?P:2500)&&(Ks(R.callbackAnimation),K?K.progress(1):Ks(i,pe==="reverse"?1:!Qt,1))):D&&o&&!en&&o(R)}if(kt){var nt=b?Vt/b.duration()*(b._caScrollDist||0):Vt;zt(nt+(H._isFlipped?1:0)),kt(nt)}ge&&ge(-Vt/b.duration()*(b._caScrollDist||0))}},R.enable=function(ct,Ht){R.enabled||(R.enabled=!0,qe(O,"resize",lo),W||qe(O,"scroll",Qr),lt&&qe(r,"refreshInit",lt),ct!==!1&&(R.progress=ht=0,Jt=L=$=at()),Ht!==!1&&R.refresh())},R.getTween=function(ct){return ct&&yt?yt.tween:K},R.setPositions=function(ct,Ht,Lt,Vt){if(b){var Ae=b.scrollTrigger,Qt=b.duration(),ye=Ae.end-Ae.start;ct=Ae.start+ye*ct/Qt,Ht=Ae.start+ye*Ht/Qt}R.refresh(!1,!1,{start:Ph(ct,Lt&&!!R._startClamp),end:Ph(Ht,Lt&&!!R._endClamp)},Vt),R.update()},R.adjustPinSpacing=function(ct){if(Dt&&ct){var Ht=Dt.indexOf(v.d)+1;Dt[Ht]=parseFloat(Dt[Ht])+ct+He,Dt[1]=parseFloat(Dt[1])+ct+He,Ps(Dt)}},R.disable=function(ct,Ht){if(ct!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Ht||K&&K.pause(),At=0,bt&&(bt.uncache=1),lt&&Ye(r,"refreshInit",lt),ot&&(ot.pause(),yt.tween&&yt.tween.kill()&&(yt.tween=0)),!W)){for(var Lt=jt.length;Lt--;)if(jt[Lt].scroller===O&&jt[Lt]!==R)return;Ye(O,"resize",lo),W||Ye(O,"scroll",Qr)}},R.kill=function(ct,Ht){R.disable(ct,Ht),K&&!Ht&&K.kill(),l&&delete Pc[l];var Lt=jt.indexOf(R);Lt>=0&&jt.splice(Lt,1),Lt===hn&&Ua>0&&hn--,Lt=0,jt.forEach(function(Vt){return Vt.scroller===R.scroller&&(Lt=1)}),Lt||fn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ct&&i.revert({kill:!1}),Ht||i.kill()),Xt&&[Xt,gt,H,Ct].forEach(function(Vt){return Vt.parentNode&&Vt.parentNode.removeChild(Vt)}),yo===R&&(yo=0),f&&(bt&&(bt.uncache=1),Lt=0,jt.forEach(function(Vt){return Vt.pin===f&&Lt++}),Lt||(bt.spacer=0)),n.onKill&&n.onKill(R)},jt.push(R),R.enable(!1,!1),ve&&ve(R),i&&i.add&&!M){var se=R.update;R.update=function(){R.update=se,ee.cache++,It||Ft||R.refresh()},St.delayedCall(.01,R.update),M=.01,It=Ft=0}else R.refresh();f&&ng()},r.register=function(n){return vs||(St=n||rp(),ip()&&window.document&&r.enable(),vs=so),vs},r.defaults=function(n){if(n)for(var i in n)jo[i]=n[i];return jo},r.disable=function(n,i){so=0,jt.forEach(function(o){return o[i?"kill":"disable"](n)}),Ye(te,"wheel",Qr),Ye(me,"scroll",Qr),clearInterval(Yo),Ye(me,"touchcancel",li),Ye(ue,"touchstart",li),Ko(Ye,me,"pointerdown,touchstart,mousedown",Dh),Ko(Ye,me,"pointerup,touchend,mouseup",Lh),ja.kill(),$o(Ye);for(var s=0;s<ee.length;s+=3)Zo(Ye,ee[s],ee[s+1]),Zo(Ye,ee[s],ee[s+2])},r.enable=function(){if(te=window,me=document,Nn=me.documentElement,ue=me.body,St){if(Lo=St.utils.toArray,_o=St.utils.clamp,Cc=St.core.context||li,Cl=St.core.suppressOverwrites||li,Bu=te.history.scrollRestoration||"auto",Dc=te.pageYOffset||0,St.core.globals("ScrollTrigger",r),ue){so=1,Rs=document.createElement("div"),Rs.style.height="100vh",Rs.style.position="absolute",pp(),K_(),Ie.register(St),r.isTouch=Ie.isTouch,$i=Ie.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ac=Ie.isTouch===1,qe(te,"wheel",Qr),Fu=[te,me,Nn,ue],St.matchMedia?(r.matchMedia=function(u){var d=St.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},St.addEventListener("matchMediaInit",function(){fp(),Wu()}),St.addEventListener("matchMediaRevert",function(){return hp()}),St.addEventListener("matchMedia",function(){Rr(0,1),Wr("matchMedia")}),St.matchMedia().add("(orientation: portrait)",function(){return Dl(),Dl})):console.warn("Requires GSAP 3.11.0 or later"),Dl(),qe(me,"scroll",Qr);var n=ue.hasAttribute("style"),i=ue.style,s=i.borderTopStyle,o=St.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ci(ue),Ve.m=Math.round(a.top+Ve.sc())||0,pn.m=Math.round(a.left+pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ue.setAttribute("style",""),ue.removeAttribute("style")),Yo=setInterval(Nh,250),St.delayedCall(.5,function(){return qo=0}),qe(me,"touchcancel",li),qe(ue,"touchstart",li),Ko(qe,me,"pointerdown,touchstart,mousedown",Dh),Ko(qe,me,"pointerup,touchend,mouseup",Lh),wc=St.utils.checkPrefix("transform"),Na.push(wc),vs=nn(),ja=St.delayedCall(.2,Rr).pause(),xs=[me,"visibilitychange",function(){var u=te.innerWidth,d=te.innerHeight;me.hidden?(Ah=u,Ch=d):(Ah!==u||Ch!==d)&&lo()},me,"DOMContentLoaded",Rr,te,"load",Rr,te,"resize",lo],$o(qe),jt.forEach(function(u){return u.enable(0,1)}),l=0;l<ee.length;l+=3)Zo(Ye,ee[l],ee[l+1]),Zo(Ye,ee[l],ee[l+2])}else if(me){var c=function u(){r.enable(),me.removeEventListener("DOMContentLoaded",u)};me.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Rl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Yo)||(Yo=i)&&setInterval(Nh,i),"ignoreMobileResize"in n&&(Ac=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($o(Ye)||$o(qe,n.autoRefreshEvents||"none"),tp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=gn(n),o=ee.indexOf(s),a=Vr(s);~o&&ee.splice(o,a?6:2),i&&(a?_i.unshift(te,i,ue,i,Nn,i):_i.unshift(s,i))},r.clearMatchMedia=function(n){jt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(In(n)?gn(n):n).getBoundingClientRect(),a=o[s?Br:zr]*i||0;return s?o.right-a>0&&o.left+a<te.innerWidth:o.bottom-a>0&&o.top+a<te.innerHeight},r.positionInViewport=function(n,i,s){In(n)&&(n=gn(n));var o=n.getBoundingClientRect(),a=o[s?Br:zr],l=i==null?a/2:i in Qa?Qa[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/te.innerWidth:(o.top+l)/te.innerHeight},r.killAll=function(n){if(jt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Gr.killAll||[];Gr={},i.forEach(function(s){return s()})}},r}();Yt.version="3.15.0";Yt.saveStyles=function(r){return r?Lo(r).forEach(function(t){if(t&&t.style){var e=Ln.indexOf(t);e>=0&&Ln.splice(e,5),Ln.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),Cc())}}):Ln};Yt.revert=function(r,t){return Wu(!r,t)};Yt.create=function(r,t){return new Yt(r,t)};Yt.refresh=function(r){return r?lo(!0):(vs||Yt.register())&&Rr(!0)};Yt.update=function(r){return++ee.cache&&Ui(r===!0?2:0)};Yt.clearScrollMemory=dp;Yt.maxScroll=function(r,t){return pi(r,t?pn:Ve)};Yt.getScrollFunc=function(r,t){return cr(gn(r),t?pn:Ve)};Yt.getById=function(r){return Pc[r]};Yt.getAll=function(){return jt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Yt.isScrolling=function(){return!!Jn};Yt.snapDirectional=Gu;Yt.addEventListener=function(r,t){var e=Gr[r]||(Gr[r]=[]);~e.indexOf(t)||e.push(t)};Yt.removeEventListener=function(r,t){var e=Gr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Yt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var d=[],h=[],f=St.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&sn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return sn(s)&&(s=s(),qe(Yt,"refresh",function(){return s=t.batchMax()})),Lo(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Yt.create(c))}),e};var Hh=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Il=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ie.isTouch?" pinch-zoom":""):"none",t===Nn&&r(ue,e)},ea={auto:1,scroll:1},ag=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ue&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ea[(l=qn(s)).overflowY]||ea[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Vr(s)&&(ea[(l=qn(s)).overflowY]||ea[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},_p=function(t,e,n,i){return Ie.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&ag,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&qe(me,Ie.eventTypes[0],Gh,!1,!0)},onDisable:function(){return Ye(me,Ie.eventTypes[0],Gh,!0)}})},lg=/(input|label|select|textarea)/i,Vh,Gh=function(t){var e=lg.test(t.target.tagName);(e||Vh)&&(t._gsapAllow=!0,Vh=e)},cg=function(t){Er(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=gn(t.target)||Nn,u=St.core.globals().ScrollSmoother,d=u&&u.get(),h=$i&&(t.content&&gn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=cr(c,Ve),g=cr(c,pn),_=1,p=(Ie.isTouch&&te.visualViewport?te.visualViewport.scale*te.visualViewport.width:te.outerWidth)/te.innerWidth,m=0,E=sn(i)?function(){return i(a)}:function(){return i||2.8},x,S,A=_p(c,t.type,!0,s),w=function(){return S=!1},b=li,P=li,y=function(){l=pi(c,Ve),P=_o($i?1:0,l),n&&(b=_o(0,pi(c,pn))),x=kr},v=function(){h._gsap.y=oo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(S){requestAnimationFrame(w);var k=oo(a.deltaY/2),it=P(f.v-k);if(h&&it!==f.v+f.offset){f.offset=it-f.v;var R=oo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",f.cacheID=ee.cache,Ui()}return!0}f.offset&&v(),S=!0},O,F,W,q,X=function(){y(),O.isActive()&&O.vars.scrollY>l&&(f()>l?O.progress(1)&&f(l):O.resetTo("scrollY",l))};return h&&St.set(h,{y:"+=0"}),t.ignoreCheck=function(V){return $i&&V.type==="touchmove"&&D()||_>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},t.onPress=function(){S=!1;var V=_;_=oo((te.visualViewport&&te.visualViewport.scale||1)/p),O.pause(),V!==_&&Il(c,_>1.01?!0:n?!1:"x"),F=g(),W=f(),y(),x=kr},t.onRelease=t.onGestureStart=function(V,k){if(f.offset&&v(),!k)q.restart(!0);else{ee.cache++;var it=E(),R,lt;n&&(R=g(),lt=R+it*.05*-V.velocityX/.227,it*=Hh(g,R,lt,pi(c,pn)),O.vars.scrollX=b(lt)),R=f(),lt=R+it*.05*-V.velocityY/.227,it*=Hh(f,R,lt,pi(c,Ve)),O.vars.scrollY=P(lt),O.invalidate().duration(it).play(.01),($i&&O.vars.scrollY>=l||R>=l-1)&&St.to({},{onUpdate:X,duration:it})}o&&o(V)},t.onWheel=function(){O._ts&&O.pause(),nn()-m>1e3&&(x=0,m=nn())},t.onChange=function(V,k,it,R,lt){if(kr!==x&&y(),k&&n&&g(b(R[2]===k?F+(V.startX-V.x):g()+k-R[1])),it){f.offset&&v();var Bt=lt[2]===it,$t=Bt?W+V.startY-V.y:f()+it-lt[1],$=P($t);Bt&&$t!==$&&(W+=$-$t),f($)}(it||k)&&Ui()},t.onEnable=function(){Il(c,n?!1:"x"),Yt.addEventListener("refresh",X),qe(te,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),A.enable()},t.onDisable=function(){Il(c,!0),Ye(te,"resize",X),Yt.removeEventListener("refresh",X),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ie(t),a.iOS=$i,$i&&!f()&&f(1),$i&&St.ticker.add(li),q=a._dc,O=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:mp(f,f(),function(){return O.pause()})},onUpdate:Ui,onComplete:q.vars.onComplete}),a};Yt.sort=function(r){if(sn(r))return jt.sort(r);var t=te.pageYOffset||0;return Yt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+te.innerHeight}),jt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Yt.observe=function(r){return new Ie(r)};Yt.normalizeScroll=function(r){if(typeof r>"u")return un;if(r===!0&&un)return un.enable();if(r===!1){un&&un.kill(),un=r;return}var t=r instanceof Ie?r:cg(r);return un&&un.target===t.target&&un.kill(),Vr(t.target)&&(un=t),t};Yt.core={_getVelocityProp:bc,_inputObserver:_p,_scrollers:ee,_proxies:_i,bridge:{ss:function(){Jn||Wr("scrollStart"),Jn=nn()},ref:function(){return en}}};rp()&&St.registerPlugin(Yt);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xu="168",ug=0,Wh=1,hg=2,gp=1,fg=2,bi=3,ur=0,Tn=1,Ri=2,rr=0,Ds=1,Ic=2,Xh=3,Yh=4,dg=5,wr=100,pg=101,mg=102,_g=103,gg=104,vg=200,xg=201,Sg=202,Mg=203,Uc=204,Nc=205,yg=206,Eg=207,Tg=208,bg=209,wg=210,Ag=211,Cg=212,Rg=213,Pg=214,Dg=0,Lg=1,Ig=2,tl=3,Ug=4,Ng=5,Og=6,Fg=7,vp=0,Bg=1,zg=2,sr=0,kg=1,Hg=2,Vg=3,Gg=4,Wg=5,Xg=6,Yg=7,xp=300,ks=301,Hs=302,Oc=303,Fc=304,hl=306,Bc=1e3,Pr=1001,zc=1002,jn=1003,qg=1004,na=1005,ri=1006,Ul=1007,Dr=1008,Fi=1009,Sp=1010,Mp=1011,Uo=1012,Yu=1013,Xr=1014,Di=1015,Oo=1016,qu=1017,$u=1018,Vs=1020,yp=35902,Ep=1021,Tp=1022,si=1023,bp=1024,wp=1025,Ls=1026,Gs=1027,Ap=1028,Ku=1029,Cp=1030,Zu=1031,ju=1033,Fa=33776,Ba=33777,za=33778,ka=33779,kc=35840,Hc=35841,Vc=35842,Gc=35843,Wc=36196,Xc=37492,Yc=37496,qc=37808,$c=37809,Kc=37810,Zc=37811,jc=37812,Jc=37813,Qc=37814,tu=37815,eu=37816,nu=37817,iu=37818,ru=37819,su=37820,ou=37821,Ha=36492,au=36494,lu=36495,Rp=36283,cu=36284,uu=36285,hu=36286,$g=3200,Kg=3201,Zg=0,jg=1,Ki="",ci="srgb",fr="srgb-linear",Ju="display-p3",fl="display-p3-linear",el="linear",be="srgb",nl="rec709",il="p3",ts=7680,qh=519,Jg=512,Qg=513,t0=514,Pp=515,e0=516,n0=517,i0=518,r0=519,$h=35044,Kh="300 es",Li=2e3,rl=2001;class Xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nl=Math.PI/180,fu=180/Math.PI;function Fo(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function vn(r,t,e){return Math.max(t,Math.min(e,r))}function s0(r,t){return(r%t+t)%t}function Ol(r,t,e){return(1-e)*r+e*t}function Zs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class de{constructor(t=0,e=0){de.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,s,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],E=i[1],x=i[4],S=i[7],A=i[2],w=i[5],b=i[8];return s[0]=o*_+a*E+l*A,s[3]=o*p+a*x+l*w,s[6]=o*m+a*S+l*b,s[1]=c*_+u*E+d*A,s[4]=c*p+u*x+d*w,s[7]=c*m+u*S+d*b,s[2]=h*_+f*E+g*A,s[5]=h*p+f*x+g*w,s[8]=h*m+f*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,g=e*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fl.makeScale(t,e)),this}rotate(t){return this.premultiply(Fl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fl=new Zt;function Dp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function sl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function o0(){const r=sl("canvas");return r.style.display="block",r}const Zh={};function Eo(r){r in Zh||(Zh[r]=!0,console.warn(r))}function a0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const jh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[fr]:{transfer:el,primaries:nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ci]:{transfer:be,primaries:nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[fl]:{transfer:el,primaries:il,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Jh),fromReference:r=>r.applyMatrix3(jh)},[Ju]:{transfer:be,primaries:il,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Jh),fromReference:r=>r.applyMatrix3(jh).convertLinearToSRGB()}},l0=new Set([fr,fl]),he={enabled:!0,_workingColorSpace:fr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!l0.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=js[t].toReference,i=js[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return js[r].primaries},getTransfer:function(r){return r===Ki?el:js[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(js[t].luminanceCoefficients)}};function Is(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let es;class c0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=sl("canvas")),es.width=t.width,es.height=t.height;const n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Is(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Is(e[n]/255)*255):e[n]=Is(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let u0=0;class Lp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(zl(i[o].image)):s.push(zl(i[o]))}else s=zl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function zl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?c0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let h0=0;class bn extends Xs{constructor(t=bn.DEFAULT_IMAGE,e=bn.DEFAULT_MAPPING,n=Pr,i=Pr,s=ri,o=Dr,a=si,l=Fi,c=bn.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Fo(),this.name="",this.source=new Lp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bc:t.x=t.x-Math.floor(t.x);break;case Pr:t.x=t.x<0?0:1;break;case zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bc:t.y=t.y-Math.floor(t.y);break;case Pr:t.y=t.y<0?0:1;break;case zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=xp;bn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,e=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(f+1)/2,A=(m+1)/2,w=(u+h)/4,b=(d+_)/4,P=(g+p)/4;return x>S&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=b/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=P/s),this.set(n,i,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f0 extends Xs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $e(0,0,t,e),this.scissorTest=!1,this.viewport=new $e(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new bn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends f0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ip extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class d0 extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let p=1-a;const m=l*h+c*f+u*g+d*_,E=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,m*E);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const S=a*E;if(l=l*p+h*S,c=c*p+f*S,u=u*p+g*S,d=d*p+_*S,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-a*f,t[e+2]=c*g+u*f+a*h-l*d,t[e+3]=u*g-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(vn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kl.copy(this).projectOnVector(t),this.sub(kl)}reflect(t){return this.sub(kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(vn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new Y,Qh=new Bo;class zo{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(s,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),ra.subVectors(this.max,Js),ns.subVectors(t.a,Js),is.subVectors(t.b,Js),rs.subVectors(t.c,Js),Vi.subVectors(is,ns),Gi.subVectors(rs,is),mr.subVectors(ns,rs);let e=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-mr.z,mr.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,mr.z,0,-mr.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-mr.y,mr.x,0];return!Hl(e,ns,is,rs,ra)||(e=[1,0,0,0,1,0,0,0,1],!Hl(e,ns,is,rs,ra))?!1:(sa.crossVectors(Vi,Gi),e=[sa.x,sa.y,sa.z],Hl(e,ns,is,rs,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ti=new Y,ia=new zo,ns=new Y,is=new Y,rs=new Y,Vi=new Y,Gi=new Y,mr=new Y,Js=new Y,ra=new Y,sa=new Y,_r=new Y;function Hl(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_r.fromArray(r,s);const a=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),l=t.dot(_r),c=e.dot(_r),u=n.dot(_r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const p0=new zo,Qs=new Y,Vl=new Y;class dl{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):p0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Vl)),this.expandByPoint(Qs.copy(t.center).sub(Vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new Y,Gl=new Y,oa=new Y,Wi=new Y,Wl=new Y,aa=new Y,Xl=new Y;class Up{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Gl.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),Wi.copy(this.origin).sub(Gl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(oa),a=Wi.dot(this.direction),l=-Wi.dot(oa),c=Wi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Gl).addScaledVector(oa,h),f}intersectSphere(t,e){Si.subVectors(t.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,i,s){Wl.subVectors(e,t),aa.subVectors(n,t),Xl.crossVectors(Wl,aa);let o=this.direction.dot(Xl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,t);const l=a*this.direction.dot(aa.crossVectors(Wi,aa));if(l<0)return null;const c=a*this.direction.dot(Wl.cross(Wi));if(c<0||l+c>o)return null;const u=-a*Wi.dot(Xl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(t,e,n,i,s,o,a,l,c,u,d,h,f,g,_,p){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,d,h,f,g,_,p)}set(t,e,n,i,s,o,a,l,c,u,d,h,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ss.setFromMatrixColumn(t,0).length(),s=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(m0,t,_0)}lookAt(t,e,n){const i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Xi.crossVectors(n,Pn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Xi.crossVectors(n,Pn)),Xi.normalize(),la.crossVectors(Pn,Xi),i[0]=Xi.x,i[4]=la.x,i[8]=Pn.x,i[1]=Xi.y,i[5]=la.y,i[9]=Pn.y,i[2]=Xi.z,i[6]=la.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],x=n[7],S=n[11],A=n[15],w=i[0],b=i[4],P=i[8],y=i[12],v=i[1],D=i[5],O=i[9],F=i[13],W=i[2],q=i[6],X=i[10],V=i[14],k=i[3],it=i[7],R=i[11],lt=i[15];return s[0]=o*w+a*v+l*W+c*k,s[4]=o*b+a*D+l*q+c*it,s[8]=o*P+a*O+l*X+c*R,s[12]=o*y+a*F+l*V+c*lt,s[1]=u*w+d*v+h*W+f*k,s[5]=u*b+d*D+h*q+f*it,s[9]=u*P+d*O+h*X+f*R,s[13]=u*y+d*F+h*V+f*lt,s[2]=g*w+_*v+p*W+m*k,s[6]=g*b+_*D+p*q+m*it,s[10]=g*P+_*O+p*X+m*R,s[14]=g*y+_*F+p*V+m*lt,s[3]=E*w+x*v+S*W+A*k,s[7]=E*b+x*D+S*q+A*it,s[11]=E*P+x*O+S*X+A*R,s[15]=E*y+x*F+S*V+A*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*f-n*l*f)+_*(+e*l*f-e*c*h+s*o*h-i*o*f+i*c*u-s*l*u)+p*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-e*l*d+e*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],E=d*p*c-_*h*c+_*l*f-a*p*f-d*l*m+a*h*m,x=g*h*c-u*p*c-g*l*f+o*p*f+u*l*m-o*h*m,S=u*_*c-g*d*c+g*a*f-o*_*f-u*a*m+o*d*m,A=g*d*l-u*_*l-g*a*h+o*_*h+u*a*p-o*d*p,w=e*E+n*x+i*S+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=E*b,t[1]=(_*h*s-d*p*s-_*i*f+n*p*f+d*i*m-n*h*m)*b,t[2]=(a*p*s-_*l*s+_*i*c-n*p*c-a*i*m+n*l*m)*b,t[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*f-n*l*f)*b,t[4]=x*b,t[5]=(u*p*s-g*h*s+g*i*f-e*p*f-u*i*m+e*h*m)*b,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*m-e*l*m)*b,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*f+e*l*f)*b,t[8]=S*b,t[9]=(g*d*s-u*_*s-g*n*f+e*_*f+u*n*m-e*d*m)*b,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*m+e*a*m)*b,t[11]=(u*a*s-o*d*s-u*n*c+e*d*c+o*n*f-e*a*f)*b,t[12]=A*b,t[13]=(u*_*i-g*d*i+g*n*h-e*_*h-u*n*p+e*d*p)*b,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*b,t[15]=(o*d*i-u*a*i+u*n*l-e*d*l-o*n*h+e*a*h)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,g=s*d,_=o*u,p=o*d,m=a*d,E=l*c,x=l*u,S=l*d,A=n.x,w=n.y,b=n.z;return i[0]=(1-(_+m))*A,i[1]=(f+S)*A,i[2]=(g-x)*A,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(h+m))*w,i[6]=(p+E)*w,i[7]=0,i[8]=(g+x)*b,i[9]=(p-E)*b,i[10]=(1-(h+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ss.set(i[0],i[1],i[2]).length();const o=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ei.copy(this);const c=1/s,u=1/o,d=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,e.setFromRotationMatrix(ei),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Li){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let f,g;if(a===Li)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===rl)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Li){const l=this.elements,c=1/(e-t),u=1/(n-i),d=1/(o-s),h=(e+t)*c,f=(n+i)*u;let g,_;if(a===Li)g=(o+s)*d,_=-2*d;else if(a===rl)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new Y,ei=new Be,m0=new Y(0,0,0),_0=new Y(1,1,1),Xi=new Y,la=new Y,Pn=new Y,tf=new Be,ef=new Bo;class Bi{constructor(t=0,e=0,n=0,i=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(vn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(vn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(vn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-vn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ef.setFromEuler(this),this.setFromQuaternion(ef,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Np{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let g0=0;const nf=new Y,os=new Bo,Mi=new Be,ca=new Y,to=new Y,v0=new Y,x0=new Bo,rf=new Y(1,0,0),sf=new Y(0,1,0),of=new Y(0,0,1),af={type:"added"},S0={type:"removed"},as={type:"childadded",child:null},Yl={type:"childremoved",child:null};class wn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Y,e=new Bi,n=new Bo,i=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new Zt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(rf,t)}rotateY(t){return this.rotateOnAxis(sf,t)}rotateZ(t){return this.rotateOnAxis(of,t)}translateOnAxis(t,e){return nf.copy(t).applyQuaternion(this.quaternion),this.position.add(nf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rf,t)}translateY(t){return this.translateOnAxis(sf,t)}translateZ(t){return this.translateOnAxis(of,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ca.copy(t):ca.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(to,ca,this.up):Mi.lookAt(ca,to,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Mi),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(af),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(S0),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(af),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,v0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,x0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}wn.DEFAULT_UP=new Y(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new Y,yi=new Y,ql=new Y,Ei=new Y,ls=new Y,cs=new Y,lf=new Y,$l=new Y,Kl=new Y,Zl=new Y;class fi{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ni.subVectors(t,e),i.cross(ni);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ni.subVectors(i,e),yi.subVectors(n,e),ql.subVectors(t,e);const o=ni.dot(ni),a=ni.dot(yi),l=ni.dot(ql),c=yi.dot(yi),u=yi.dot(ql),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(t,e,n,i){return ni.subVectors(n,e),yi.subVectors(t,e),ni.cross(yi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),ni.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return fi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ls.subVectors(i,n),cs.subVectors(s,n),$l.subVectors(t,n);const l=ls.dot($l),c=cs.dot($l);if(l<=0&&c<=0)return e.copy(n);Kl.subVectors(t,i);const u=ls.dot(Kl),d=cs.dot(Kl);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ls,o);Zl.subVectors(t,s);const f=ls.dot(Zl),g=cs.dot(Zl);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(cs,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return lf.subVectors(s,i),a=(d-u)/(d-u+(f-g)),e.copy(i).addScaledVector(lf,a);const m=1/(p+_+h);return o=_*m,a=h*m,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function jl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class fe{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=s0(t,1),e=vn(e,0,1),n=vn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=jl(o,s,t+1/3),this.g=jl(o,s,t),this.b=jl(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=ci){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){const n=Op[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}copyLinearToSRGB(t){return this.r=Bl(t.r),this.g=Bl(t.g),this.b=Bl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return he.fromWorkingColorSpace(tn.copy(this),t),Math.round(vn(tn.r*255,0,255))*65536+Math.round(vn(tn.g*255,0,255))*256+Math.round(vn(tn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,s=tn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=ci){he.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,i=tn.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(ua);const n=Ol(Yi.h,ua.h,e),i=Ol(Yi.s,ua.s,e),s=Ol(Yi.l,ua.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new fe;fe.NAMES=Op;let M0=0;class ko extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Ds,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Nc,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(n.blending=this.blending),this.side!==ur&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nc&&(n.blendDst=this.blendDst),this.blendEquation!==wr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fp extends ko{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new Y,ha=new de;class mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Eo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$h&&(t.usage=this.usage),t}}class Bp extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zp extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Hr extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let y0=0;const Wn=new Be,Jl=new wn,us=new Y,Dn=new zo,eo=new zo,Xe=new Y;class vi extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dp(t)?zp:Bp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Hr(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Dn.min,eo.min),Dn.expandByPoint(Xe),Xe.addVectors(Dn.max,eo.max),Dn.expandByPoint(Xe)):(Dn.expandByPoint(eo.min),Dn.expandByPoint(eo.max))}Dn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xe.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),Xe.add(us)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new Y,l[P]=new Y;const c=new Y,u=new Y,d=new Y,h=new de,f=new de,g=new de,_=new Y,p=new Y;function m(P,y,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),h.fromBufferAttribute(s,P),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(_),a[y].add(_),a[v].add(_),l[P].add(p),l[y].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,y=E.length;P<y;++P){const v=E[P],D=v.start,O=v.count;for(let F=D,W=D+O;F<W;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new Y,S=new Y,A=new Y,w=new Y;function b(P){A.fromBufferAttribute(i,P),w.copy(A);const y=a[P];x.copy(y),x.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(w,y);const D=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,D)}for(let P=0,y=E.length;P<y;++P){const v=E[P],D=v.start,O=v.count;for(let F=D,W=D+O;F<W;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new mn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cf=new Be,gr=new Up,fa=new dl,uf=new Y,hs=new Y,fs=new Y,ds=new Y,Ql=new Y,da=new Y,pa=new de,ma=new de,_a=new de,hf=new Y,ff=new Y,df=new Y,ga=new Y,va=new Y;class Ii extends wn{constructor(t=new vi,e=new Fp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ql.fromBufferAttribute(d,t),o?da.addScaledVector(Ql,u):da.addScaledVector(Ql.sub(e),u))}e.add(da)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),gr.copy(t.ray).recast(t.near),!(fa.containsPoint(gr.origin)===!1&&(gr.intersectSphere(fa,uf)===null||gr.origin.distanceToSquared(uf)>(t.far-t.near)**2))&&(cf.copy(s).invert(),gr.copy(t.ray).applyMatrix4(cf),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],E=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=E,A=x;S<A;S+=3){const w=a.getX(S),b=a.getX(S+1),P=a.getX(S+2);i=xa(this,m,t,n,c,u,d,w,b,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);i=xa(this,o,t,n,c,u,d,E,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],E=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=E,A=x;S<A;S+=3){const w=S,b=S+1,P=S+2;i=xa(this,m,t,n,c,u,d,w,b,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=p,x=p+1,S=p+2;i=xa(this,o,t,n,c,u,d,E,x,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function E0(r,t,e,n,i,s,o,a){let l;if(t.side===Tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ur,a),l===null)return null;va.copy(a),va.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(va);return c<e.near||c>e.far?null:{distance:c,point:va.clone(),object:r}}function xa(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,hs),r.getVertexPosition(l,fs),r.getVertexPosition(c,ds);const u=E0(r,t,e,n,hs,fs,ds,ga);if(u){i&&(pa.fromBufferAttribute(i,a),ma.fromBufferAttribute(i,l),_a.fromBufferAttribute(i,c),u.uv=fi.getInterpolation(ga,hs,fs,ds,pa,ma,_a,new de)),s&&(pa.fromBufferAttribute(s,a),ma.fromBufferAttribute(s,l),_a.fromBufferAttribute(s,c),u.uv1=fi.getInterpolation(ga,hs,fs,ds,pa,ma,_a,new de)),o&&(hf.fromBufferAttribute(o,a),ff.fromBufferAttribute(o,l),df.fromBufferAttribute(o,c),u.normal=fi.getInterpolation(ga,hs,fs,ds,hf,ff,df,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};fi.getNormal(hs,fs,ds,d.normal),u.face=d}return u}class Ho extends vi{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Hr(c,3)),this.setAttribute("normal",new Hr(u,3)),this.setAttribute("uv",new Hr(d,2));function g(_,p,m,E,x,S,A,w,b,P,y){const v=S/b,D=A/P,O=S/2,F=A/2,W=w/2,q=b+1,X=P+1;let V=0,k=0;const it=new Y;for(let R=0;R<X;R++){const lt=R*D-F;for(let Bt=0;Bt<q;Bt++){const $t=Bt*v-O;it[_]=$t*E,it[p]=lt*x,it[m]=W,c.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[m]=w>0?1:-1,u.push(it.x,it.y,it.z),d.push(Bt/b),d.push(1-R/P),V+=1}}for(let R=0;R<P;R++)for(let lt=0;lt<b;lt++){const Bt=h+lt+q*R,$t=h+lt+q*(R+1),$=h+(lt+1)+q*(R+1),et=h+(lt+1)+q*R;l.push(Bt,$t,et),l.push($t,$,et),k+=6}a.addGroup(f,k,y),f+=k,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function cn(r){const t={};for(let e=0;e<r.length;e++){const n=Ws(r[e]);for(const i in n)t[i]=n[i]}return t}function T0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function kp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const b0={clone:Ws,merge:cn};var w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends ko{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=T0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hp extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new Y,pf=new de,mf=new de;class $n extends Hp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fu*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,pf,mf),e.subVectors(mf,pf)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Nl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class C0 extends wn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $n(ps,ms,t,e);i.layers=this.layers,this.add(i);const s=new $n(ps,ms,t,e);s.layers=this.layers,this.add(s);const o=new $n(ps,ms,t,e);o.layers=this.layers,this.add(o);const a=new $n(ps,ms,t,e);a.layers=this.layers,this.add(a);const l=new $n(ps,ms,t,e);l.layers=this.layers,this.add(l);const c=new $n(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vp extends bn{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class R0 extends Yr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Vp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ri}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ho(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:rr});s.uniforms.tEquirect.value=e;const o=new Ii(i,s),a=e.minFilter;return e.minFilter===Dr&&(e.minFilter=ri),new C0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const tc=new Y,P0=new Y,D0=new Zt;class Tr{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=tc.subVectors(n,e).cross(P0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||D0.getNormalMatrix(t),i=this.coplanarPoint(tc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new dl,Sa=new Y;class Gp{constructor(t=new Tr,e=new Tr,n=new Tr,i=new Tr,s=new Tr,o=new Tr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],E=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,h-c,p-f,S-m).normalize(),n[1].setComponents(l+s,h+c,p+f,S+m).normalize(),n[2].setComponents(l+o,h+u,p+g,S+E).normalize(),n[3].setComponents(l-o,h-u,p-g,S-E).normalize(),n[4].setComponents(l-a,h-d,p-_,S-x).normalize(),e===Li)n[5].setComponents(l+a,h+d,p+_,S+x).normalize();else if(e===rl)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Sa.x=i.normal.x>0?t.max.x:t.min.x,Sa.y=i.normal.y>0?t.max.y:t.min.y,Sa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wp(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function L0(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(r.bindBuffer(c,a),d.count===-1&&h.length===0&&r.bufferSubData(c,0,u),h.length!==0){for(let f=0,g=h.length;f<g;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(r.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class pl extends vi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const E=m*h-o;for(let x=0;x<c;x++){const S=x*d-s;g.push(S,-E,0),_.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){const x=E+c*m,S=E+c*(m+1),A=E+1+c*(m+1),w=E+1+c*m;f.push(x,S,w),f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new Hr(g,3)),this.setAttribute("normal",new Hr(_,3)),this.setAttribute("uv",new Hr(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.widthSegments,t.heightSegments)}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,q0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",uv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Av=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ov=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$v=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ex=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ax=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:I0,alphahash_pars_fragment:U0,alphamap_fragment:N0,alphamap_pars_fragment:O0,alphatest_fragment:F0,alphatest_pars_fragment:B0,aomap_fragment:z0,aomap_pars_fragment:k0,batching_pars_vertex:H0,batching_vertex:V0,begin_vertex:G0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:Y0,bumpmap_pars_fragment:q0,clipping_planes_fragment:$0,clipping_planes_pars_fragment:K0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:j0,color_fragment:J0,color_pars_fragment:Q0,color_pars_vertex:tv,color_vertex:ev,common:nv,cube_uv_reflection_fragment:iv,defaultnormal_vertex:rv,displacementmap_pars_vertex:sv,displacementmap_vertex:ov,emissivemap_fragment:av,emissivemap_pars_fragment:lv,colorspace_fragment:cv,colorspace_pars_fragment:uv,envmap_fragment:hv,envmap_common_pars_fragment:fv,envmap_pars_fragment:dv,envmap_pars_vertex:pv,envmap_physical_pars_fragment:bv,envmap_vertex:mv,fog_vertex:_v,fog_pars_vertex:gv,fog_fragment:vv,fog_pars_fragment:xv,gradientmap_pars_fragment:Sv,lightmap_pars_fragment:Mv,lights_lambert_fragment:yv,lights_lambert_pars_fragment:Ev,lights_pars_begin:Tv,lights_toon_fragment:wv,lights_toon_pars_fragment:Av,lights_phong_fragment:Cv,lights_phong_pars_fragment:Rv,lights_physical_fragment:Pv,lights_physical_pars_fragment:Dv,lights_fragment_begin:Lv,lights_fragment_maps:Iv,lights_fragment_end:Uv,logdepthbuf_fragment:Nv,logdepthbuf_pars_fragment:Ov,logdepthbuf_pars_vertex:Fv,logdepthbuf_vertex:Bv,map_fragment:zv,map_pars_fragment:kv,map_particle_fragment:Hv,map_particle_pars_fragment:Vv,metalnessmap_fragment:Gv,metalnessmap_pars_fragment:Wv,morphinstance_vertex:Xv,morphcolor_vertex:Yv,morphnormal_vertex:qv,morphtarget_pars_vertex:$v,morphtarget_vertex:Kv,normal_fragment_begin:Zv,normal_fragment_maps:jv,normal_pars_fragment:Jv,normal_pars_vertex:Qv,normal_vertex:tx,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:rx,iridescence_pars_fragment:sx,opaque_fragment:ox,packing:ax,premultiplied_alpha_fragment:lx,project_vertex:cx,dithering_fragment:ux,dithering_pars_fragment:hx,roughnessmap_fragment:fx,roughnessmap_pars_fragment:dx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:_x,shadowmask_pars_fragment:gx,skinbase_vertex:vx,skinning_pars_vertex:xx,skinning_vertex:Sx,skinnormal_vertex:Mx,specularmap_fragment:yx,specularmap_pars_fragment:Ex,tonemapping_fragment:Tx,tonemapping_pars_fragment:bx,transmission_fragment:wx,transmission_pars_fragment:Ax,uv_pars_fragment:Cx,uv_pars_vertex:Rx,uv_vertex:Px,worldpos_vertex:Dx,background_vert:Lx,background_frag:Ix,backgroundCube_vert:Ux,backgroundCube_frag:Nx,cube_vert:Ox,cube_frag:Fx,depth_vert:Bx,depth_frag:zx,distanceRGBA_vert:kx,distanceRGBA_frag:Hx,equirect_vert:Vx,equirect_frag:Gx,linedashed_vert:Wx,linedashed_frag:Xx,meshbasic_vert:Yx,meshbasic_frag:qx,meshlambert_vert:$x,meshlambert_frag:Kx,meshmatcap_vert:Zx,meshmatcap_frag:jx,meshnormal_vert:Jx,meshnormal_frag:Qx,meshphong_vert:tS,meshphong_frag:eS,meshphysical_vert:nS,meshphysical_frag:iS,meshtoon_vert:rS,meshtoon_frag:sS,points_vert:oS,points_frag:aS,shadow_vert:lS,shadow_frag:cS,sprite_vert:uS,sprite_frag:hS},pt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ui={basic:{uniforms:cn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:cn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:cn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:cn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:cn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new fe(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:cn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:cn([pt.points,pt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:cn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:cn([pt.common,pt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:cn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:cn([pt.sprite,pt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:cn([pt.common,pt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:cn([pt.lights,pt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};ui.physical={uniforms:cn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Ma={r:0,b:0,g:0},xr=new Bi,fS=new Be;function dS(r,t,e,n,i,s,o){const a=new fe(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const S=g(E);S===null?m(a,l):S&&S.isColor&&(m(S,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(E,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===hl)?(u===void 0&&(u=new Ii(new Ho(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Ws(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),xr.copy(x.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fS.makeRotationFromEuler(xr)),u.material.toneMapped=he.getTransfer(S.colorSpace)!==be,(d!==S||h!==S.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,f=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ii(new pl(2,2),new zi({name:"BackgroundMaterial",uniforms:Ws(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=he.getTransfer(S.colorSpace)!==be,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,f=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,x){E.getRGB(Ma,kp(r)),n.buffers.color.setClear(Ma.r,Ma.g,Ma.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:_,addToRenderList:p}}function pS(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(v,D,O,F,W){let q=!1;const X=d(F,O,D);s!==X&&(s=X,c(s.object)),q=f(v,F,O,W),q&&g(v,F,O,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(v,D,O,F),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function d(v,D,O){const F=O.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let q=W[D.id];q===void 0&&(q={},W[D.id]=q);let X=q[F];return X===void 0&&(X=h(l()),q[F]=X),X}function h(v){const D=[],O=[],F=[];for(let W=0;W<e;W++)D[W]=0,O[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,D,O,F){const W=s.attributes,q=D.attributes;let X=0;const V=O.getAttributes();for(const k in V)if(V[k].location>=0){const R=W[k];let lt=q[k];if(lt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),R===void 0||R.attribute!==lt||lt&&R.data!==lt.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function g(v,D,O,F){const W={},q=D.attributes;let X=0;const V=O.getAttributes();for(const k in V)if(V[k].location>=0){let R=q[k];R===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(R=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(R=v.instanceColor));const lt={};lt.attribute=R,R&&R.data&&(lt.data=R.data),W[k]=lt,X++}s.attributes=W,s.attributesNum=X,s.index=F}function _(){const v=s.newAttributes;for(let D=0,O=v.length;D<O;D++)v[D]=0}function p(v){m(v,0)}function m(v,D){const O=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;O[v]=1,F[v]===0&&(r.enableVertexAttribArray(v),F[v]=1),W[v]!==D&&(r.vertexAttribDivisor(v,D),W[v]=D)}function E(){const v=s.newAttributes,D=s.enabledAttributes;for(let O=0,F=D.length;O<F;O++)D[O]!==v[O]&&(r.disableVertexAttribArray(O),D[O]=0)}function x(v,D,O,F,W,q,X){X===!0?r.vertexAttribIPointer(v,D,O,W,q):r.vertexAttribPointer(v,D,O,F,W,q)}function S(v,D,O,F){_();const W=F.attributes,q=O.getAttributes(),X=D.defaultAttributeValues;for(const V in q){const k=q[V];if(k.location>=0){let it=W[V];if(it===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const R=it.normalized,lt=it.itemSize,Bt=t.get(it);if(Bt===void 0)continue;const $t=Bt.buffer,$=Bt.type,et=Bt.bytesPerElement,ht=$===r.INT||$===r.UNSIGNED_INT||it.gpuType===Yu;if(it.isInterleavedBufferAttribute){const at=it.data,yt=at.stride,bt=it.offset;if(at.isInstancedInterleavedBuffer){for(let Gt=0;Gt<k.locationSize;Gt++)m(k.location+Gt,at.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Gt=0;Gt<k.locationSize;Gt++)p(k.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let Gt=0;Gt<k.locationSize;Gt++)x(k.location+Gt,lt/k.locationSize,$,R,yt*et,(bt+lt/k.locationSize*Gt)*et,ht)}else{if(it.isInstancedBufferAttribute){for(let at=0;at<k.locationSize;at++)m(k.location+at,it.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let at=0;at<k.locationSize;at++)p(k.location+at);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let at=0;at<k.locationSize;at++)x(k.location+at,lt/k.locationSize,$,R,lt*et,lt/k.locationSize*at*et,ht)}}else if(X!==void 0){const R=X[V];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(k.location,R);break;case 3:r.vertexAttrib3fv(k.location,R);break;case 4:r.vertexAttrib4fv(k.location,R);break;default:r.vertexAttrib1fv(k.location,R)}}}}E()}function A(){P();for(const v in n){const D=n[v];for(const O in D){const F=D[O];for(const W in F)u(F[W].object),delete F[W];delete D[O]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const O in D){const F=D[O];for(const W in F)u(F[W].object),delete F[W];delete D[O]}delete n[v.id]}function b(v){for(const D in n){const O=n[D];if(O[v.id]===void 0)continue;const F=O[v.id];for(const W in F)u(F[W].object),delete F[W];delete O[v.id]}}function P(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function mS(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)e.update(g,n,h[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _S(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==si&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===Oo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Fi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Di&&!b)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:S,maxSamples:A}}function gS(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Tr,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,x=E*4;let S=m.clippingState||null;l.value=S,S=u(g,h,x,f);for(let A=0;A!==x;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=f;x!==_;++x,S+=4)o.copy(d[x]).applyMatrix4(E,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function vS(r){let t=new WeakMap;function e(o,a){return a===Oc?o.mapping=ks:a===Fc&&(o.mapping=Hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oc||a===Fc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new R0(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class xS extends Hp{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Es=4,_f=[.125,.215,.35,.446,.526,.582],Ar=20,ec=new xS,gf=new fe;let nc=null,ic=0,rc=0,sc=!1;const br=(1+Math.sqrt(5))/2,_s=1/br,vf=[new Y(-br,_s,0),new Y(br,_s,0),new Y(-_s,0,br),new Y(_s,0,br),new Y(0,br,-_s),new Y(0,br,_s),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class xf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nc,ic,rc),this._renderer.xr.enabled=sc,t.scissorTest=!1,ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Oo,format:si,colorSpace:fr,depthBuffer:!1},i=Sf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SS(s)),this._blurMaterial=MS(s,t,e)}return i}_compileMaterial(t){const e=new Ii(this._lodPlanes[0],t);this._renderer.compile(e,ec)}_sceneToCubeUV(t,e,n,i){const a=new $n(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(gf),u.toneMapping=sr,u.autoClear=!1;const f=new Fp({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Ii(new Ho,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(gf),_=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):E===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;ya(i,E*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ks||t.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ii(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ya(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ec)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vf[(i-s-1)%vf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ii(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ar-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ar;p>Ar&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ar}`);const m=[];let E=0;for(let b=0;b<Ar;++b){const P=b/_,y=Math.exp(-P*P/2);m.push(y),b===0?E+=y:b<p&&(E+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/E;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const S=this._sizeLods[i],A=3*S*(i>x-Es?i-x+Es:0),w=4*(this._cubeSize-S);ya(e,A,w,3*S,2*S),l.setRenderTarget(e),l.render(d,ec)}}function SS(r){const t=[],e=[],n=[];let i=r;const s=r-Es+1+_f.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Es?l=_f[o-r+Es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,E=new Float32Array(_*g*f),x=new Float32Array(p*g*f),S=new Float32Array(m*g*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,P=w>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];E.set(y,_*g*w),x.set(h,p*g*w);const v=[w,w,w,w,w,w];S.set(v,m*g*w)}const A=new vi;A.setAttribute("position",new mn(E,_)),A.setAttribute("uv",new mn(x,p)),A.setAttribute("faceIndex",new mn(S,m)),t.push(A),i>Es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sf(r,t,e){const n=new Yr(r,t,e);return n.texture.mapping=hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ya(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function MS(r,t,e){const n=new Float32Array(Ar),i=new Y(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Mf(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function yf(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oc||l===Fc,u=l===ks||l===Hs;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new xf(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new xf(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ES(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Eo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function TS(r,t,e,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],r.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let x=0,S=E.length;x<S;x+=3){const A=E[x+0],w=E[x+1],b=E[x+2];h.push(A,w,w,b,b,A)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const A=x+0,w=x+1,b=x+2;h.push(A,w,w,b,b,A)}}else return;const p=new(Dp(h)?zp:Bp)(h,1);p.version=_;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function bS(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(h,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,_,0,g);let m=0;for(let E=0;E<g;E++)m+=f[E];for(let E=0;E<_.length;E++)e.update(m,n,_[E])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function wS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function AS(r,t,e){const n=new WeakMap,i=new $e;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let A=a.attributes.position.count*S,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*w*4*d),P=new Ip(b,A,w,d);P.type=Di,P.needsUpdate=!0;const y=S*4;for(let D=0;D<d;D++){const O=m[D],F=E[D],W=x[D],q=A*w*4*D;for(let X=0;X<O.count;X++){const V=X*y;g===!0&&(i.fromBufferAttribute(O,X),b[q+V+0]=i.x,b[q+V+1]=i.y,b[q+V+2]=i.z,b[q+V+3]=0),_===!0&&(i.fromBufferAttribute(F,X),b[q+V+4]=i.x,b[q+V+5]=i.y,b[q+V+6]=i.z,b[q+V+7]=0),p===!0&&(i.fromBufferAttribute(W,X),b[q+V+8]=i.x,b[q+V+9]=i.y,b[q+V+10]=i.z,b[q+V+11]=W.itemSize===4?i.w:1)}}h={count:d,texture:P,size:new de(A,w)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function CS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Xp extends bn{constructor(t,e,n,i,s,o,a,l,c,u=Ls){if(u!==Ls&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ls&&(n=Xr),n===void 0&&u===Gs&&(n=Vs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yp=new bn,Ef=new Xp(1,1),qp=new Ip,$p=new d0,Kp=new Vp,Tf=[],bf=[],wf=new Float32Array(16),Af=new Float32Array(9),Cf=new Float32Array(4);function Ys(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Tf[i];if(s===void 0&&(s=new Float32Array(i),Tf[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ge(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function We(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ml(r,t){let e=bf[t];e===void 0&&(e=new Int32Array(t),bf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function RS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function PS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2fv(this.addr,t),We(e,t)}}function DS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;r.uniform3fv(this.addr,t),We(e,t)}}function LS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4fv(this.addr,t),We(e,t)}}function IS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Cf.set(n),r.uniformMatrix2fv(this.addr,!1,Cf),We(e,n)}}function US(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Af.set(n),r.uniformMatrix3fv(this.addr,!1,Af),We(e,n)}}function NS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;wf.set(n),r.uniformMatrix4fv(this.addr,!1,wf),We(e,n)}}function OS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function FS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2iv(this.addr,t),We(e,t)}}function BS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;r.uniform3iv(this.addr,t),We(e,t)}}function zS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4iv(this.addr,t),We(e,t)}}function kS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function HS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2uiv(this.addr,t),We(e,t)}}function VS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;r.uniform3uiv(this.addr,t),We(e,t)}}function GS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4uiv(this.addr,t),We(e,t)}}function WS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ef.compareFunction=Pp,s=Ef):s=Yp,e.setTexture2D(t||s,i)}function XS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||$p,i)}function YS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Kp,i)}function qS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qp,i)}function $S(r){switch(r){case 5126:return RS;case 35664:return PS;case 35665:return DS;case 35666:return LS;case 35674:return IS;case 35675:return US;case 35676:return NS;case 5124:case 35670:return OS;case 35667:case 35671:return FS;case 35668:case 35672:return BS;case 35669:case 35673:return zS;case 5125:return kS;case 36294:return HS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return qS}}function KS(r,t){r.uniform1fv(this.addr,t)}function ZS(r,t){const e=Ys(t,this.size,2);r.uniform2fv(this.addr,e)}function jS(r,t){const e=Ys(t,this.size,3);r.uniform3fv(this.addr,e)}function JS(r,t){const e=Ys(t,this.size,4);r.uniform4fv(this.addr,e)}function QS(r,t){const e=Ys(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function tM(r,t){const e=Ys(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function eM(r,t){const e=Ys(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function nM(r,t){r.uniform1iv(this.addr,t)}function iM(r,t){r.uniform2iv(this.addr,t)}function rM(r,t){r.uniform3iv(this.addr,t)}function sM(r,t){r.uniform4iv(this.addr,t)}function oM(r,t){r.uniform1uiv(this.addr,t)}function aM(r,t){r.uniform2uiv(this.addr,t)}function lM(r,t){r.uniform3uiv(this.addr,t)}function cM(r,t){r.uniform4uiv(this.addr,t)}function uM(r,t,e){const n=this.cache,i=t.length,s=ml(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Yp,s[o])}function hM(r,t,e){const n=this.cache,i=t.length,s=ml(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||$p,s[o])}function fM(r,t,e){const n=this.cache,i=t.length,s=ml(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Kp,s[o])}function dM(r,t,e){const n=this.cache,i=t.length,s=ml(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||qp,s[o])}function pM(r){switch(r){case 5126:return KS;case 35664:return ZS;case 35665:return jS;case 35666:return JS;case 35674:return QS;case 35675:return tM;case 35676:return eM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return fM;case 36289:case 36303:case 36311:case 36292:return dM}}class mM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$S(e.type)}}class _M{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pM(e.type)}}class gM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function Rf(r,t){r.seq.push(t),r.map[t.id]=t}function vM(r,t,e){const n=r.name,i=n.length;for(oc.lastIndex=0;;){const s=oc.exec(n),o=oc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Rf(e,c===void 0?new mM(a,r,t):new _M(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new gM(a),Rf(e,d)),e=d}}}class Va{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);vM(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Pf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const xM=37297;let SM=0;function MM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function yM(r){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(r);let n;switch(t===e?n="":t===il&&e===nl?n="LinearDisplayP3ToLinearSRGB":t===nl&&e===il&&(n="LinearSRGBToLinearDisplayP3"),r){case fr:case fl:return[n,"LinearTransferOETF"];case ci:case Ju:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Df(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+MM(r.getShaderSource(t),o)}else return i}function EM(r,t){const e=yM(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function TM(r,t){let e;switch(t){case kg:e="Linear";break;case Hg:e="Reinhard";break;case Vg:e="Cineon";break;case Gg:e="ACESFilmic";break;case Xg:e="AgX";break;case Yg:e="Neutral";break;case Wg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ea=new Y;function bM(){he.getLuminanceCoefficients(Ea);const r=Ea.x.toFixed(4),t=Ea.y.toFixed(4),e=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function AM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function CM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function co(r){return r!==""}function Lf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function If(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const RM=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(r){return r.replace(RM,DM)}const PM=new Map;function DM(r,t){let e=Kt[t];if(e===void 0){const n=PM.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return du(e)}const LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(r){return r.replace(LM,IM)}function IM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function UM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===gp?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===fg?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function NM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ks:case Hs:t="ENVMAP_TYPE_CUBE";break;case hl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function OM(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function FM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vp:t="ENVMAP_BLENDING_MULTIPLY";break;case Bg:t="ENVMAP_BLENDING_MIX";break;case zg:t="ENVMAP_BLENDING_ADD";break}return t}function BM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zM(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=UM(e),c=NM(e),u=OM(e),d=FM(e),h=BM(e),f=wM(e),g=AM(s),_=i.createProgram();let p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(co).join(`
`),m.length>0&&(m+=`
`)):(p=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),m=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==sr?"#define TONE_MAPPING":"",e.toneMapping!==sr?Kt.tonemapping_pars_fragment:"",e.toneMapping!==sr?TM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,EM("linearToOutputTexel",e.outputColorSpace),bM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(co).join(`
`)),o=du(o),o=Lf(o,e),o=If(o,e),a=du(a),a=Lf(a,e),a=If(a,e),o=Uf(o),a=Uf(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=E+p+o,S=E+m+a,A=Pf(i,i.VERTEX_SHADER,x),w=Pf(i,i.FRAGMENT_SHADER,S);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(D){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),W=i.getShaderInfoLog(w).trim();let q=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const V=Df(i,A,"vertex"),k=Df(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+V+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:q,programLog:O,vertexShader:{log:F,prefix:p},fragmentShader:{log:W,prefix:m}})}i.deleteShader(A),i.deleteShader(w),P=new Va(i,_),y=CM(i,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,xM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let kM=0;class HM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new VM(t),e.set(t,n)),n}}class VM{constructor(t){this.id=kM++,this.code=t,this.usedTimes=0}}function GM(r,t,e,n,i,s,o){const a=new Np,l=new HM,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,v,D,O,F){const W=O.fog,q=F.geometry,X=y.isMeshStandardMaterial?O.environment:null,V=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),k=V&&V.mapping===hl?V.image.height:null,it=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const R=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=R!==void 0?R.length:0;let Bt=0;q.morphAttributes.position!==void 0&&(Bt=1),q.morphAttributes.normal!==void 0&&(Bt=2),q.morphAttributes.color!==void 0&&(Bt=3);let $t,$,et,ht;if(it){const ne=ui[it];$t=ne.vertexShader,$=ne.fragmentShader}else $t=y.vertexShader,$=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),ht=l.getFragmentShaderID(y);const at=r.getRenderTarget(),yt=F.isInstancedMesh===!0,bt=F.isBatchedMesh===!0,Gt=!!y.map,Jt=!!y.matcap,L=!!V,It=!!y.aoMap,Ft=!!y.lightMap,Xt=!!y.bumpMap,gt=!!y.normalMap,H=!!y.displacementMap,Ct=!!y.emissiveMap,Nt=!!y.metalnessMap,C=!!y.roughnessMap,M=y.anisotropy>0,G=y.clearcoat>0,Q=y.dispersion>0,tt=y.iridescence>0,Z=y.sheen>0,wt=y.transmission>0,rt=M&&!!y.anisotropyMap,dt=G&&!!y.clearcoatMap,Ut=G&&!!y.clearcoatNormalMap,st=G&&!!y.clearcoatRoughnessMap,_t=tt&&!!y.iridescenceMap,Dt=tt&&!!y.iridescenceThicknessMap,zt=Z&&!!y.sheenColorMap,mt=Z&&!!y.sheenRoughnessMap,kt=!!y.specularMap,Wt=!!y.specularColorMap,le=!!y.specularIntensityMap,U=wt&&!!y.transmissionMap,K=wt&&!!y.thicknessMap,j=!!y.gradientMap,J=!!y.alphaMap,ot=y.alphaTest>0,At=!!y.alphaHash,qt=!!y.extensions;let ge=sr;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ge=r.toneMapping);const ve={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:$,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:ht,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:bt,batchingColor:bt&&F._colorsTexture!==null,instancing:yt,instancingColor:yt&&F.instanceColor!==null,instancingMorph:yt&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:fr,alphaToCoverage:!!y.alphaToCoverage,map:Gt,matcap:Jt,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:k,aoMap:It,lightMap:Ft,bumpMap:Xt,normalMap:gt,displacementMap:h&&H,emissiveMap:Ct,normalMapObjectSpace:gt&&y.normalMapType===jg,normalMapTangentSpace:gt&&y.normalMapType===Zg,metalnessMap:Nt,roughnessMap:C,anisotropy:M,anisotropyMap:rt,clearcoat:G,clearcoatMap:dt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:st,dispersion:Q,iridescence:tt,iridescenceMap:_t,iridescenceThicknessMap:Dt,sheen:Z,sheenColorMap:zt,sheenRoughnessMap:mt,specularMap:kt,specularColorMap:Wt,specularIntensityMap:le,transmission:wt,transmissionMap:U,thicknessMap:K,gradientMap:j,opaque:y.transparent===!1&&y.blending===Ds&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:ot,alphaHash:At,combine:y.combine,mapUv:Gt&&_(y.map.channel),aoMapUv:It&&_(y.aoMap.channel),lightMapUv:Ft&&_(y.lightMap.channel),bumpMapUv:Xt&&_(y.bumpMap.channel),normalMapUv:gt&&_(y.normalMap.channel),displacementMapUv:H&&_(y.displacementMap.channel),emissiveMapUv:Ct&&_(y.emissiveMap.channel),metalnessMapUv:Nt&&_(y.metalnessMap.channel),roughnessMapUv:C&&_(y.roughnessMap.channel),anisotropyMapUv:rt&&_(y.anisotropyMap.channel),clearcoatMapUv:dt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(y.sheenRoughnessMap.channel),specularMapUv:kt&&_(y.specularMap.channel),specularColorMapUv:Wt&&_(y.specularColorMap.channel),specularIntensityMapUv:le&&_(y.specularIntensityMap.channel),transmissionMapUv:U&&_(y.transmissionMap.channel),thicknessMapUv:K&&_(y.thicknessMap.channel),alphaMapUv:J&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(gt||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(Gt||J),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Bt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,decodeVideoTexture:Gt&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===be,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ri,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&y.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function m(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)v.push(D),v.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(E(v,y),x(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function E(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function x(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.doubleSided&&a.enable(10),v.flipSided&&a.enable(11),v.useDepthPacking&&a.enable(12),v.dithering&&a.enable(13),v.transmission&&a.enable(14),v.sheen&&a.enable(15),v.opaque&&a.enable(16),v.pointsUvs&&a.enable(17),v.decodeVideoTexture&&a.enable(18),v.alphaToCoverage&&a.enable(19),y.push(a.mask)}function S(y){const v=g[y.type];let D;if(v){const O=ui[v];D=b0.clone(O.uniforms)}else D=y.uniforms;return D}function A(y,v){let D;for(let O=0,F=u.length;O<F;O++){const W=u[O];if(W.cacheKey===v){D=W,++D.usedTimes;break}}return D===void 0&&(D=new zM(r,v,y,s),u.push(D)),D}function w(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:P}}function WM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function XM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Of(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ff(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,h,f,g,_,p){let m=r[t];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},r[t]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),t++,m}function a(d,h,f,g,_,p){const m=o(d,h,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(d,h,f,g,_,p){const m=o(d,h,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,h){e.length>1&&e.sort(d||XM),n.length>1&&n.sort(h||Of),i.length>1&&i.sort(h||Of)}function u(){for(let d=t,h=r.length;d<h;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function YM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ff,r.set(n,[o])):i>=s.length?(o=new Ff,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function qM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new fe};break;case"SpotLight":e={position:new Y,direction:new Y,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=e,e}}}function $M(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let KM=0;function ZM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function jM(r){const t=new qM,e=$M(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);const i=new Y,s=new Be,o=new Be;function a(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,E=0,x=0,S=0,A=0,w=0,b=0;c.sort(ZM);for(let y=0,v=c.length;y<v;y++){const D=c[y],O=D.color,F=D.intensity,W=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*F,d+=O.g*F,h+=O.b*F;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],F);b++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,k=e.get(D);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=D.shadow.matrix,E++}n.directional[f]=X,f++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(O).multiplyScalar(F),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[_]=X;const V=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,V.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=V.matrix,D.castShadow){const k=e.get(D);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=q,S++}_++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(O).multiplyScalar(F),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=X,p++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const V=D.shadow,k=e.get(D);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(F),X.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[m]=X,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==E||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==A||P.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=E,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=A,P.numLightProbes=b,n.version=KM++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const x=c[m];if(x.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Bf(r){const t=new jM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JM(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Bf(r),t.set(i,[a])):s>=o.length?(a=new Bf(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class QM extends ko{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ty extends ko{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iy(r,t,e){let n=new Gp;const i=new de,s=new de,o=new $e,a=new QM({depthPacking:Kg}),l=new ty,c={},u=e.maxTextureSize,d={[ur]:Tn,[Tn]:ur,[Ri]:Ri},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:ey,fragmentShader:ny}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new vi;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ii(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gp;let m=this.type;this.render=function(w,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),v=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),O=r.state;O.setBlending(rr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=m!==bi&&this.type===bi,W=m===bi&&this.type!==bi;for(let q=0,X=w.length;q<X;q++){const V=w[q],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const it=k.getFrameExtents();if(i.multiply(it),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/it.x),i.x=s.x*it.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/it.y),i.y=s.y*it.y,k.mapSize.y=s.y)),k.map===null||F===!0||W===!0){const lt=this.type!==bi?{minFilter:jn,magFilter:jn}:{};k.map!==null&&k.map.dispose(),k.map=new Yr(i.x,i.y,lt),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const R=k.getViewportCount();for(let lt=0;lt<R;lt++){const Bt=k.getViewport(lt);o.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),O.viewport(o),k.updateMatrices(V,lt),n=k.getFrustum(),S(b,P,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===bi&&E(k,P),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(y,v,D)};function E(w,b){const P=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Yr(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,P,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,P,f,_,null)}function x(w,b,P,y){let v=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)v=D;else if(v=P.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const O=v.uuid,F=b.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let q=W[F];q===void 0&&(q=v.clone(),W[F]=q,b.addEventListener("dispose",A)),v=q}if(v.visible=b.visible,v.wireframe=b.wireframe,y===bi?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:d[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=r.properties.get(v);O.light=P}return v}function S(w,b,P,y,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===bi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const F=t.update(w),W=w.material;if(Array.isArray(W)){const q=F.groups;for(let X=0,V=q.length;X<V;X++){const k=q[X],it=W[k.materialIndex];if(it&&it.visible){const R=x(w,it,y,v);w.onBeforeShadow(r,w,b,P,F,R,k),r.renderBufferDirect(P,null,F,R,w,k),w.onAfterShadow(r,w,b,P,F,R,k)}}}else if(W.visible){const q=x(w,W,y,v);w.onBeforeShadow(r,w,b,P,F,q,null),r.renderBufferDirect(P,null,F,q,w,null),w.onAfterShadow(r,w,b,P,F,q,null)}}const O=w.children;for(let F=0,W=O.length;F<W;F++)S(O[F],b,P,y,v)}function A(w){w.target.removeEventListener("dispose",A);for(const P in c){const y=c[P],v=w.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function ry(r){function t(){let U=!1;const K=new $e;let j=null;const J=new $e(0,0,0,0);return{setMask:function(ot){j!==ot&&!U&&(r.colorMask(ot,ot,ot,ot),j=ot)},setLocked:function(ot){U=ot},setClear:function(ot,At,qt,ge,ve){ve===!0&&(ot*=ge,At*=ge,qt*=ge),K.set(ot,At,qt,ge),J.equals(K)===!1&&(r.clearColor(ot,At,qt,ge),J.copy(K))},reset:function(){U=!1,j=null,J.set(-1,0,0,0)}}}function e(){let U=!1,K=null,j=null,J=null;return{setTest:function(ot){ot?ht(r.DEPTH_TEST):at(r.DEPTH_TEST)},setMask:function(ot){K!==ot&&!U&&(r.depthMask(ot),K=ot)},setFunc:function(ot){if(j!==ot){switch(ot){case Dg:r.depthFunc(r.NEVER);break;case Lg:r.depthFunc(r.ALWAYS);break;case Ig:r.depthFunc(r.LESS);break;case tl:r.depthFunc(r.LEQUAL);break;case Ug:r.depthFunc(r.EQUAL);break;case Ng:r.depthFunc(r.GEQUAL);break;case Og:r.depthFunc(r.GREATER);break;case Fg:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=ot}},setLocked:function(ot){U=ot},setClear:function(ot){J!==ot&&(r.clearDepth(ot),J=ot)},reset:function(){U=!1,K=null,j=null,J=null}}}function n(){let U=!1,K=null,j=null,J=null,ot=null,At=null,qt=null,ge=null,ve=null;return{setTest:function(ne){U||(ne?ht(r.STENCIL_TEST):at(r.STENCIL_TEST))},setMask:function(ne){K!==ne&&!U&&(r.stencilMask(ne),K=ne)},setFunc:function(ne,Ot,Et){(j!==ne||J!==Ot||ot!==Et)&&(r.stencilFunc(ne,Ot,Et),j=ne,J=Ot,ot=Et)},setOp:function(ne,Ot,Et){(At!==ne||qt!==Ot||ge!==Et)&&(r.stencilOp(ne,Ot,Et),At=ne,qt=Ot,ge=Et)},setLocked:function(ne){U=ne},setClear:function(ne){ve!==ne&&(r.clearStencil(ne),ve=ne)},reset:function(){U=!1,K=null,j=null,J=null,ot=null,At=null,qt=null,ge=null,ve=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,E=null,x=null,S=null,A=null,w=new fe(0,0,0),b=0,P=!1,y=null,v=null,D=null,O=null,F=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=X>=2);let k=null,it={};const R=r.getParameter(r.SCISSOR_BOX),lt=r.getParameter(r.VIEWPORT),Bt=new $e().fromArray(R),$t=new $e().fromArray(lt);function $(U,K,j,J){const ot=new Uint8Array(4),At=r.createTexture();r.bindTexture(U,At),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<j;qt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(K,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,ot):r.texImage2D(K+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ot);return At}const et={};et[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ht(r.DEPTH_TEST),s.setFunc(tl),Xt(!1),gt(Wh),ht(r.CULL_FACE),It(rr);function ht(U){c[U]!==!0&&(r.enable(U),c[U]=!0)}function at(U){c[U]!==!1&&(r.disable(U),c[U]=!1)}function yt(U,K){return u[U]!==K?(r.bindFramebuffer(U,K),u[U]=K,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=K),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=K),!0):!1}function bt(U,K){let j=h,J=!1;if(U){j=d.get(K),j===void 0&&(j=[],d.set(K,j));const ot=U.textures;if(j.length!==ot.length||j[0]!==r.COLOR_ATTACHMENT0){for(let At=0,qt=ot.length;At<qt;At++)j[At]=r.COLOR_ATTACHMENT0+At;j.length=ot.length,J=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,J=!0);J&&r.drawBuffers(j)}function Gt(U){return f!==U?(r.useProgram(U),f=U,!0):!1}const Jt={[wr]:r.FUNC_ADD,[pg]:r.FUNC_SUBTRACT,[mg]:r.FUNC_REVERSE_SUBTRACT};Jt[_g]=r.MIN,Jt[gg]=r.MAX;const L={[vg]:r.ZERO,[xg]:r.ONE,[Sg]:r.SRC_COLOR,[Uc]:r.SRC_ALPHA,[wg]:r.SRC_ALPHA_SATURATE,[Tg]:r.DST_COLOR,[yg]:r.DST_ALPHA,[Mg]:r.ONE_MINUS_SRC_COLOR,[Nc]:r.ONE_MINUS_SRC_ALPHA,[bg]:r.ONE_MINUS_DST_COLOR,[Eg]:r.ONE_MINUS_DST_ALPHA,[Ag]:r.CONSTANT_COLOR,[Cg]:r.ONE_MINUS_CONSTANT_COLOR,[Rg]:r.CONSTANT_ALPHA,[Pg]:r.ONE_MINUS_CONSTANT_ALPHA};function It(U,K,j,J,ot,At,qt,ge,ve,ne){if(U===rr){g===!0&&(at(r.BLEND),g=!1);return}if(g===!1&&(ht(r.BLEND),g=!0),U!==dg){if(U!==_||ne!==P){if((p!==wr||x!==wr)&&(r.blendEquation(r.FUNC_ADD),p=wr,x=wr),ne)switch(U){case Ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ic:r.blendFunc(r.ONE,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ic:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,E=null,S=null,A=null,w.set(0,0,0),b=0,_=U,P=ne}return}ot=ot||K,At=At||j,qt=qt||J,(K!==p||ot!==x)&&(r.blendEquationSeparate(Jt[K],Jt[ot]),p=K,x=ot),(j!==m||J!==E||At!==S||qt!==A)&&(r.blendFuncSeparate(L[j],L[J],L[At],L[qt]),m=j,E=J,S=At,A=qt),(ge.equals(w)===!1||ve!==b)&&(r.blendColor(ge.r,ge.g,ge.b,ve),w.copy(ge),b=ve),_=U,P=!1}function Ft(U,K){U.side===Ri?at(r.CULL_FACE):ht(r.CULL_FACE);let j=U.side===Tn;K&&(j=!j),Xt(j),U.blending===Ds&&U.transparent===!1?It(rr):It(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),i.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):at(r.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(U){y!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),y=U)}function gt(U){U!==ug?(ht(r.CULL_FACE),U!==v&&(U===Wh?r.cullFace(r.BACK):U===hg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):at(r.CULL_FACE),v=U}function H(U){U!==D&&(q&&r.lineWidth(U),D=U)}function Ct(U,K,j){U?(ht(r.POLYGON_OFFSET_FILL),(O!==K||F!==j)&&(r.polygonOffset(K,j),O=K,F=j)):at(r.POLYGON_OFFSET_FILL)}function Nt(U){U?ht(r.SCISSOR_TEST):at(r.SCISSOR_TEST)}function C(U){U===void 0&&(U=r.TEXTURE0+W-1),k!==U&&(r.activeTexture(U),k=U)}function M(U,K,j){j===void 0&&(k===null?j=r.TEXTURE0+W-1:j=k);let J=it[j];J===void 0&&(J={type:void 0,texture:void 0},it[j]=J),(J.type!==U||J.texture!==K)&&(k!==j&&(r.activeTexture(j),k=j),r.bindTexture(U,K||et[U]),J.type=U,J.texture=K)}function G(){const U=it[k];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(U){Bt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Bt.copy(U))}function mt(U){$t.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),$t.copy(U))}function kt(U,K){let j=l.get(K);j===void 0&&(j=new WeakMap,l.set(K,j));let J=j.get(U);J===void 0&&(J=r.getUniformBlockIndex(K,U.name),j.set(U,J))}function Wt(U,K){const J=l.get(K).get(U);a.get(K)!==J&&(r.uniformBlockBinding(K,J,U.__bindingPointIndex),a.set(K,J))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},k=null,it={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,E=null,x=null,S=null,A=null,w=new fe(0,0,0),b=0,P=!1,y=null,v=null,D=null,O=null,F=null,Bt.set(0,0,r.canvas.width,r.canvas.height),$t.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ht,disable:at,bindFramebuffer:yt,drawBuffers:bt,useProgram:Gt,setBlending:It,setMaterial:Ft,setFlipSided:Xt,setCullFace:gt,setLineWidth:H,setPolygonOffset:Ct,setScissorTest:Nt,activeTexture:C,bindTexture:M,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:tt,texImage2D:_t,texImage3D:Dt,updateUBOMapping:kt,uniformBlockBinding:Wt,texStorage2D:Ut,texStorage3D:st,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:zt,viewport:mt,reset:le}}function zf(r,t,e,n){const i=sy(n);switch(e){case Ep:return r*t;case bp:return r*t;case wp:return r*t*2;case Ap:return r*t/i.components*i.byteLength;case Ku:return r*t/i.components*i.byteLength;case Cp:return r*t*2/i.components*i.byteLength;case Zu:return r*t*2/i.components*i.byteLength;case Tp:return r*t*3/i.components*i.byteLength;case si:return r*t*4/i.components*i.byteLength;case ju:return r*t*4/i.components*i.byteLength;case Fa:case Ba:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case za:case ka:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hc:case Gc:return Math.max(r,16)*Math.max(t,8)/4;case kc:case Vc:return Math.max(r,8)*Math.max(t,8)/2;case Wc:case Xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case jc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case eu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case nu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case iu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ru:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case su:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ou:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ha:case au:case lu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Rp:case cu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case uu:case hu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sy(r){switch(r){case Fi:case Sp:return{byteLength:1,components:1};case Uo:case Mp:case Oo:return{byteLength:2,components:1};case qu:case $u:return{byteLength:2,components:4};case Xr:case Yu:case Di:return{byteLength:4,components:1};case yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function oy(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):sl("canvas")}function _(C,M,G){let Q=1;const tt=Nt(C);if((tt.width>G||tt.height>G)&&(Q=G/Math.max(tt.width,tt.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(Q*tt.width),wt=Math.floor(Q*tt.height);d===void 0&&(d=g(Z,wt));const rt=M?g(Z,wt):d;return rt.width=Z,rt.height=wt,rt.getContext("2d").drawImage(C,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+wt+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==jn&&C.minFilter!==ri}function m(C){r.generateMipmap(C)}function E(C,M,G,Q,tt=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=M;if(M===r.RED&&(G===r.FLOAT&&(Z=r.R32F),G===r.HALF_FLOAT&&(Z=r.R16F),G===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.R8UI),G===r.UNSIGNED_SHORT&&(Z=r.R16UI),G===r.UNSIGNED_INT&&(Z=r.R32UI),G===r.BYTE&&(Z=r.R8I),G===r.SHORT&&(Z=r.R16I),G===r.INT&&(Z=r.R32I)),M===r.RG&&(G===r.FLOAT&&(Z=r.RG32F),G===r.HALF_FLOAT&&(Z=r.RG16F),G===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RG8UI),G===r.UNSIGNED_SHORT&&(Z=r.RG16UI),G===r.UNSIGNED_INT&&(Z=r.RG32UI),G===r.BYTE&&(Z=r.RG8I),G===r.SHORT&&(Z=r.RG16I),G===r.INT&&(Z=r.RG32I)),M===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),M===r.RGBA){const wt=tt?el:he.getTransfer(Q);G===r.FLOAT&&(Z=r.RGBA32F),G===r.HALF_FLOAT&&(Z=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Z=wt===be?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(C,M){let G;return C?M===null||M===Xr||M===Vs?G=r.DEPTH24_STENCIL8:M===Di?G=r.DEPTH32F_STENCIL8:M===Uo&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xr||M===Vs?G=r.DEPTH_COMPONENT24:M===Di?G=r.DEPTH_COMPONENT32F:M===Uo&&(G=r.DEPTH_COMPONENT16),G}function S(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==jn&&C.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),b(M),M.isVideoTexture&&u.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),y(M)}function b(C){const M=n.get(C);if(M.__webglInit===void 0)return;const G=C.source,Q=h.get(G);if(Q){const tt=Q[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&P(C),Object.keys(Q).length===0&&h.delete(G)}n.remove(C)}function P(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const G=C.source,Q=h.get(G);delete Q[M.__cacheKey],o.memory.textures--}function y(C){const M=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let tt=0;tt<M.__webglFramebuffer[Q].length;tt++)r.deleteFramebuffer(M.__webglFramebuffer[Q][tt]);else r.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[Q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let Q=0,tt=G.length;Q<tt;Q++){const Z=n.get(G[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(C)}let v=0;function D(){v=0}function O(){const C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function F(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function W(C,M){const G=n.get(C);if(C.isVideoTexture&&H(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(G,C,M);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function q(C,M){const G=n.get(C);if(C.version>0&&G.__version!==C.version){$t(G,C,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function X(C,M){const G=n.get(C);if(C.version>0&&G.__version!==C.version){$t(G,C,M);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function V(C,M){const G=n.get(C);if(C.version>0&&G.__version!==C.version){$(G,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}const k={[Bc]:r.REPEAT,[Pr]:r.CLAMP_TO_EDGE,[zc]:r.MIRRORED_REPEAT},it={[jn]:r.NEAREST,[qg]:r.NEAREST_MIPMAP_NEAREST,[na]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[Ul]:r.LINEAR_MIPMAP_NEAREST,[Dr]:r.LINEAR_MIPMAP_LINEAR},R={[Jg]:r.NEVER,[r0]:r.ALWAYS,[Qg]:r.LESS,[Pp]:r.LEQUAL,[t0]:r.EQUAL,[i0]:r.GEQUAL,[e0]:r.GREATER,[n0]:r.NOTEQUAL};function lt(C,M){if(M.type===Di&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===Ul||M.magFilter===na||M.magFilter===Dr||M.minFilter===ri||M.minFilter===Ul||M.minFilter===na||M.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,k[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,k[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,k[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,it[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,R[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jn||M.minFilter!==na&&M.minFilter!==Dr||M.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Bt(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const Q=M.source;let tt=h.get(Q);tt===void 0&&(tt={},h.set(Q,tt));const Z=F(M);if(Z!==C.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[Z].usedTimes++;const wt=tt[C.__cacheKey];wt!==void 0&&(tt[C.__cacheKey].usedTimes--,wt.usedTimes===0&&P(M)),C.__cacheKey=Z,C.__webglTexture=tt[Z].texture}return G}function $t(C,M,G){let Q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=r.TEXTURE_3D);const tt=Bt(C,M),Z=M.source;e.bindTexture(Q,C.__webglTexture,r.TEXTURE0+G);const wt=n.get(Z);if(Z.version!==wt.__version||tt===!0){e.activeTexture(r.TEXTURE0+G);const rt=he.getPrimaries(he.workingColorSpace),dt=M.colorSpace===Ki?null:he.getPrimaries(M.colorSpace),Ut=M.colorSpace===Ki||rt===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let st=_(M.image,!1,i.maxTextureSize);st=Ct(M,st);const _t=s.convert(M.format,M.colorSpace),Dt=s.convert(M.type);let zt=E(M.internalFormat,_t,Dt,M.colorSpace,M.isVideoTexture);lt(Q,M);let mt;const kt=M.mipmaps,Wt=M.isVideoTexture!==!0,le=wt.__version===void 0||tt===!0,U=Z.dataReady,K=S(M,st);if(M.isDepthTexture)zt=x(M.format===Gs,M.type),le&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,zt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,zt,st.width,st.height,0,_t,Dt,null));else if(M.isDataTexture)if(kt.length>0){Wt&&le&&e.texStorage2D(r.TEXTURE_2D,K,zt,kt[0].width,kt[0].height);for(let j=0,J=kt.length;j<J;j++)mt=kt[j],Wt?U&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,mt.width,mt.height,_t,Dt,mt.data):e.texImage2D(r.TEXTURE_2D,j,zt,mt.width,mt.height,0,_t,Dt,mt.data);M.generateMipmaps=!1}else Wt?(le&&e.texStorage2D(r.TEXTURE_2D,K,zt,st.width,st.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,_t,Dt,st.data)):e.texImage2D(r.TEXTURE_2D,0,zt,st.width,st.height,0,_t,Dt,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Wt&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,K,zt,kt[0].width,kt[0].height,st.depth);for(let j=0,J=kt.length;j<J;j++)if(mt=kt[j],M.format!==si)if(_t!==null)if(Wt){if(U)if(M.layerUpdates.size>0){const ot=zf(mt.width,mt.height,M.format,M.type);for(const At of M.layerUpdates){const qt=mt.data.subarray(At*ot/mt.data.BYTES_PER_ELEMENT,(At+1)*ot/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,At,mt.width,mt.height,1,_t,qt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,st.depth,_t,mt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,zt,mt.width,mt.height,st.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,st.depth,_t,Dt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,zt,mt.width,mt.height,st.depth,0,_t,Dt,mt.data)}else{Wt&&le&&e.texStorage2D(r.TEXTURE_2D,K,zt,kt[0].width,kt[0].height);for(let j=0,J=kt.length;j<J;j++)mt=kt[j],M.format!==si?_t!==null?Wt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,mt.width,mt.height,_t,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,j,zt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?U&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,mt.width,mt.height,_t,Dt,mt.data):e.texImage2D(r.TEXTURE_2D,j,zt,mt.width,mt.height,0,_t,Dt,mt.data)}else if(M.isDataArrayTexture)if(Wt){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,K,zt,st.width,st.height,st.depth),U)if(M.layerUpdates.size>0){const j=zf(st.width,st.height,M.format,M.type);for(const J of M.layerUpdates){const ot=st.data.subarray(J*j/st.data.BYTES_PER_ELEMENT,(J+1)*j/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,st.width,st.height,1,_t,Dt,ot)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Dt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,st.width,st.height,st.depth,0,_t,Dt,st.data);else if(M.isData3DTexture)Wt?(le&&e.texStorage3D(r.TEXTURE_3D,K,zt,st.width,st.height,st.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Dt,st.data)):e.texImage3D(r.TEXTURE_3D,0,zt,st.width,st.height,st.depth,0,_t,Dt,st.data);else if(M.isFramebufferTexture){if(le)if(Wt)e.texStorage2D(r.TEXTURE_2D,K,zt,st.width,st.height);else{let j=st.width,J=st.height;for(let ot=0;ot<K;ot++)e.texImage2D(r.TEXTURE_2D,ot,zt,j,J,0,_t,Dt,null),j>>=1,J>>=1}}else if(kt.length>0){if(Wt&&le){const j=Nt(kt[0]);e.texStorage2D(r.TEXTURE_2D,K,zt,j.width,j.height)}for(let j=0,J=kt.length;j<J;j++)mt=kt[j],Wt?U&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,_t,Dt,mt):e.texImage2D(r.TEXTURE_2D,j,zt,_t,Dt,mt);M.generateMipmaps=!1}else if(Wt){if(le){const j=Nt(st);e.texStorage2D(r.TEXTURE_2D,K,zt,j.width,j.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,Dt,st)}else e.texImage2D(r.TEXTURE_2D,0,zt,_t,Dt,st);p(M)&&m(Q),wt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $(C,M,G){if(M.image.length!==6)return;const Q=Bt(C,M),tt=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);const Z=n.get(tt);if(tt.version!==Z.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);const wt=he.getPrimaries(he.workingColorSpace),rt=M.colorSpace===Ki?null:he.getPrimaries(M.colorSpace),dt=M.colorSpace===Ki||wt===rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ut=M.isCompressedTexture||M.image[0].isCompressedTexture,st=M.image[0]&&M.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!Ut&&!st?_t[J]=_(M.image[J],!0,i.maxCubemapSize):_t[J]=st?M.image[J].image:M.image[J],_t[J]=Ct(M,_t[J]);const Dt=_t[0],zt=s.convert(M.format,M.colorSpace),mt=s.convert(M.type),kt=E(M.internalFormat,zt,mt,M.colorSpace),Wt=M.isVideoTexture!==!0,le=Z.__version===void 0||Q===!0,U=tt.dataReady;let K=S(M,Dt);lt(r.TEXTURE_CUBE_MAP,M);let j;if(Ut){Wt&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,K,kt,Dt.width,Dt.height);for(let J=0;J<6;J++){j=_t[J].mipmaps;for(let ot=0;ot<j.length;ot++){const At=j[ot];M.format!==si?zt!==null?Wt?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,0,0,At.width,At.height,zt,At.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,kt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,0,0,At.width,At.height,zt,mt,At.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot,kt,At.width,At.height,0,zt,mt,At.data)}}}else{if(j=M.mipmaps,Wt&&le){j.length>0&&K++;const J=Nt(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,K,kt,J.width,J.height)}for(let J=0;J<6;J++)if(st){Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,zt,mt,_t[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,_t[J].width,_t[J].height,0,zt,mt,_t[J].data);for(let ot=0;ot<j.length;ot++){const qt=j[ot].image[J].image;Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,0,0,qt.width,qt.height,zt,mt,qt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,kt,qt.width,qt.height,0,zt,mt,qt.data)}}else{Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,zt,mt,_t[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,zt,mt,_t[J]);for(let ot=0;ot<j.length;ot++){const At=j[ot];Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,0,0,zt,mt,At.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ot+1,kt,zt,mt,At.image[J])}}}p(M)&&m(r.TEXTURE_CUBE_MAP),Z.__version=tt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function et(C,M,G,Q,tt,Z){const wt=s.convert(G.format,G.colorSpace),rt=s.convert(G.type),dt=E(G.internalFormat,wt,rt,G.colorSpace);if(!n.get(M).__hasExternalTextures){const st=Math.max(1,M.width>>Z),_t=Math.max(1,M.height>>Z);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,dt,st,_t,M.depth,0,wt,rt,null):e.texImage2D(tt,Z,dt,st,_t,0,wt,rt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),gt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,tt,n.get(G).__webglTexture,0,Xt(M)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,tt,n.get(G).__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(C,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const Q=M.depthTexture,tt=Q&&Q.isDepthTexture?Q.type:null,Z=x(M.stencilBuffer,tt),wt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=Xt(M);gt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt,Z,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Z,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,wt,r.RENDERBUFFER,C)}else{const Q=M.textures;for(let tt=0;tt<Q.length;tt++){const Z=Q[tt],wt=s.convert(Z.format,Z.colorSpace),rt=s.convert(Z.type),dt=E(Z.internalFormat,wt,rt,Z.colorSpace),Ut=Xt(M);G&&gt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,dt,M.width,M.height):gt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut,dt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,dt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Q=n.get(M.depthTexture).__webglTexture,tt=Xt(M);if(M.depthTexture.format===Ls)gt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Gs)gt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function yt(C){const M=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",tt)};Q.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=Q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");at(M.__webglFramebuffer,C)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=r.createRenderbuffer(),ht(M.__webglDepthbuffer[Q],C,!1);else{const tt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ht(M.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,tt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(C,M,G){const Q=n.get(C);M!==void 0&&et(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&yt(C)}function Gt(C){const M=C.texture,G=n.get(C),Q=n.get(M);C.addEventListener("dispose",w);const tt=C.textures,Z=C.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=M.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[rt]=[];for(let dt=0;dt<M.mipmaps.length;dt++)G.__webglFramebuffer[rt][dt]=r.createFramebuffer()}else G.__webglFramebuffer[rt]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)G.__webglFramebuffer[rt]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(wt)for(let rt=0,dt=tt.length;rt<dt;rt++){const Ut=n.get(tt[rt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&gt(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let rt=0;rt<tt.length;rt++){const dt=tt[rt];G.__webglColorRenderbuffer[rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[rt]);const Ut=s.convert(dt.format,dt.colorSpace),st=s.convert(dt.type),_t=E(dt.internalFormat,Ut,st,dt.colorSpace,C.isXRRenderTarget===!0),Dt=Xt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,_t,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+rt,r.RENDERBUFFER,G.__webglColorRenderbuffer[rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),lt(r.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)et(G.__webglFramebuffer[rt][dt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else et(G.__webglFramebuffer[rt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(M)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let rt=0,dt=tt.length;rt<dt;rt++){const Ut=tt[rt],st=n.get(Ut);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),lt(r.TEXTURE_2D,Ut),et(G.__webglFramebuffer,C,Ut,r.COLOR_ATTACHMENT0+rt,r.TEXTURE_2D,0),p(Ut)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let rt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(rt,Q.__webglTexture),lt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)et(G.__webglFramebuffer[dt],C,M,r.COLOR_ATTACHMENT0,rt,dt);else et(G.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,rt,0);p(M)&&m(rt),e.unbindTexture()}C.depthBuffer&&yt(C)}function Jt(C){const M=C.textures;for(let G=0,Q=M.length;G<Q;G++){const tt=M[G];if(p(tt)){const Z=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,wt=n.get(tt).__webglTexture;e.bindTexture(Z,wt),m(Z),e.unbindTexture()}}}const L=[],It=[];function Ft(C){if(C.samples>0){if(gt(C)===!1){const M=C.textures,G=C.width,Q=C.height;let tt=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=n.get(C),rt=M.length>1;if(rt)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,wt.__webglColorRenderbuffer[dt]);const Ut=n.get(M[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ut,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,tt,r.NEAREST),l===!0&&(L.length=0,It.length=0,L.push(r.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(L.push(Z),It.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,It)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),rt)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,wt.__webglColorRenderbuffer[dt]);const Ut=n.get(M[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Ut,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Xt(C){return Math.min(i.maxSamples,C.samples)}function gt(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function H(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Ct(C,M){const G=C.colorSpace,Q=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==fr&&G!==Ki&&(he.getTransfer(G)===be?(Q!==si||tt!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Nt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=bt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=gt}function ay(r,t){function e(n,i=Ki){let s;const o=he.getTransfer(i);if(n===Fi)return r.UNSIGNED_BYTE;if(n===qu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$u)return r.UNSIGNED_SHORT_5_5_5_1;if(n===yp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sp)return r.BYTE;if(n===Mp)return r.SHORT;if(n===Uo)return r.UNSIGNED_SHORT;if(n===Yu)return r.INT;if(n===Xr)return r.UNSIGNED_INT;if(n===Di)return r.FLOAT;if(n===Oo)return r.HALF_FLOAT;if(n===Ep)return r.ALPHA;if(n===Tp)return r.RGB;if(n===si)return r.RGBA;if(n===bp)return r.LUMINANCE;if(n===wp)return r.LUMINANCE_ALPHA;if(n===Ls)return r.DEPTH_COMPONENT;if(n===Gs)return r.DEPTH_STENCIL;if(n===Ap)return r.RED;if(n===Ku)return r.RED_INTEGER;if(n===Cp)return r.RG;if(n===Zu)return r.RG_INTEGER;if(n===ju)return r.RGBA_INTEGER;if(n===Fa||n===Ba||n===za||n===ka)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kc||n===Hc||n===Vc||n===Gc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===kc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wc||n===Xc||n===Yc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Wc||n===Xc)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qc||n===$c||n===Kc||n===Zc||n===jc||n===Jc||n===Qc||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===ou)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===su)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===au||n===lu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ha)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rp||n===cu||n===uu||n===hu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ha)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class ly extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ta extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cy={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ta;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new bn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zi({vertexShader:uy,fragmentShader:hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ii(new pl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dy extends Xs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new fy,p=e.getContextAttributes();let m=null,E=null;const x=[],S=[],A=new de;let w=null;const b=new $n;b.layers.enable(1),b.viewport=new $e;const P=new $n;P.layers.enable(2),P.viewport=new $e;const y=[b,P],v=new ly;v.layers.enable(1),v.layers.enable(2);let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=x[$];return et===void 0&&(et=new ac,x[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=x[$];return et===void 0&&(et=new ac,x[$]=et),et.getGripSpace()},this.getHand=function($){let et=x[$];return et===void 0&&(et=new ac,x[$]=et),et.getHandSpace()};function F($){const et=S.indexOf($.inputSource);if(et===-1)return;const ht=x[et];ht!==void 0&&(ht.update($.inputSource,$.frame,c||o),ht.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let $=0;$<x.length;$++){const et=S[$];et!==null&&(S[$]=null,x[$].disconnect(et))}D=null,O=null,_.reset(),t.setRenderTarget(m),f=null,h=null,d=null,i=null,E=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Yr(f.framebufferWidth,f.framebufferHeight,{format:si,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,ht=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?Gs:Ls,ht=p.stencil?Vs:Xr);const yt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(yt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new Yr(h.textureWidth,h.textureHeight,{format:si,type:Fi,depthTexture:new Xp(h.textureWidth,h.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q($){for(let et=0;et<$.removed.length;et++){const ht=$.removed[et],at=S.indexOf(ht);at>=0&&(S[at]=null,x[at].disconnect(ht))}for(let et=0;et<$.added.length;et++){const ht=$.added[et];let at=S.indexOf(ht);if(at===-1){for(let bt=0;bt<x.length;bt++)if(bt>=S.length){S.push(ht),at=bt;break}else if(S[bt]===null){S[bt]=ht,at=bt;break}if(at===-1)break}const yt=x[at];yt&&yt.connect(ht)}}const X=new Y,V=new Y;function k($,et,ht){X.setFromMatrixPosition(et.matrixWorld),V.setFromMatrixPosition(ht.matrixWorld);const at=X.distanceTo(V),yt=et.projectionMatrix.elements,bt=ht.projectionMatrix.elements,Gt=yt[14]/(yt[10]-1),Jt=yt[14]/(yt[10]+1),L=(yt[9]+1)/yt[5],It=(yt[9]-1)/yt[5],Ft=(yt[8]-1)/yt[0],Xt=(bt[8]+1)/bt[0],gt=Gt*Ft,H=Gt*Xt,Ct=at/(-Ft+Xt),Nt=Ct*-Ft;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Nt),$.translateZ(Ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),yt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const C=Gt+Ct,M=Jt+Ct,G=gt-Nt,Q=H+(at-Nt),tt=L*Jt/M*C,Z=It*Jt/M*C;$.projectionMatrix.makePerspective(G,Q,tt,Z,C,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,ht=$.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),v.near=P.near=b.near=et,v.far=P.far=b.far=ht,(D!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,O=v.far);const at=$.parent,yt=v.cameras;it(v,at);for(let bt=0;bt<yt.length;bt++)it(yt[bt],at);yt.length===2?k(v,b,P):v.projectionMatrix.copy(b.projectionMatrix),R($,v,at)};function R($,et,ht){ht===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(ht.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=fu*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let lt=null;function Bt($,et){if(u=et.getViewerPose(c||o),g=et,u!==null){const ht=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let at=!1;ht.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let bt=0;bt<ht.length;bt++){const Gt=ht[bt];let Jt=null;if(f!==null)Jt=f.getViewport(Gt);else{const It=d.getViewSubImage(h,Gt);Jt=It.viewport,bt===0&&(t.setRenderTargetTextures(E,It.colorTexture,h.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(E))}let L=y[bt];L===void 0&&(L=new $n,L.layers.enable(bt),L.viewport=new $e,y[bt]=L),L.matrix.fromArray(Gt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Gt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),bt===0&&(v.matrix.copy(L.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(L)}const yt=i.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const bt=d.getDepthInformation(ht[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,i.renderState)}}for(let ht=0;ht<x.length;ht++){const at=S[ht],yt=x[ht];at!==null&&yt!==void 0&&yt.update(at,et,c||o)}lt&&lt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const $t=new Wp;$t.setAnimationLoop(Bt),this.setAnimationLoop=function($){lt=$},this.dispose=function(){}}}const Sr=new Bi,py=new Be;function my(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,kp(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,E,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,E,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Tn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Tn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=t.get(m),x=E.envMap,S=E.envMapRotation;x&&(p.envMap.value=x,Sr.copy(S),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),p.envMapRotation.value.setFromMatrix4(py.makeRotationFromEuler(Sr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _y(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const S=x.program;n.uniformBlockBinding(E,S)}function c(E,x){let S=i[E.id];S===void 0&&(g(E),S=u(E),i[E.id]=S,E.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(E,A);const w=t.render.frame;s[E.id]!==w&&(h(E),s[E.id]=w)}function u(E){const x=d();E.__bindingPointIndex=x;const S=r.createBuffer(),A=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=i[E.id],S=E.uniforms,A=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,b=S.length;w<b;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,v=P.length;y<v;y++){const D=P[y];if(f(D,w,y,A)===!0){const O=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let q=0;q<F.length;q++){const X=F[q],V=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,O+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(E,x,S,A){const w=E.value,b=x+"_"+S;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const P=A[b];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[b]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(E){const x=E.uniforms;let S=0;const A=16;for(let b=0,P=x.length;b<P;b++){const y=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,D=y.length;v<D;v++){const O=y[v],F=Array.isArray(O.value)?O.value:[O.value];for(let W=0,q=F.length;W<q;W++){const X=F[W],V=_(X),k=S%A,it=k%V.boundary,R=k+it;S+=it,R!==0&&A-R<V.storage&&(S+=A-R),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=V.storage}}}const w=S%A;return w>0&&(S+=A-w),E.__size=S,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class gy{constructor(t={}){const{canvas:e=o0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=sr,this.toneMappingExposure=1;const x=this;let S=!1,A=0,w=0,b=null,P=-1,y=null;const v=new $e,D=new $e;let O=null;const F=new fe(0);let W=0,q=e.width,X=e.height,V=1,k=null,it=null;const R=new $e(0,0,q,X),lt=new $e(0,0,q,X);let Bt=!1;const $t=new Gp;let $=!1,et=!1;const ht=new Be,at=new Y,yt=new $e,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Jt(){return b===null?V:1}let L=n;function It(T,I){return e.getContext(T,I)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xu}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",ot,!1),L===null){const I="webgl2";if(L=It(I,T),L===null)throw It(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ft,Xt,gt,H,Ct,Nt,C,M,G,Q,tt,Z,wt,rt,dt,Ut,st,_t,Dt,zt,mt,kt,Wt,le;function U(){Ft=new ES(L),Ft.init(),kt=new ay(L,Ft),Xt=new _S(L,Ft,t,kt),gt=new ry(L),H=new wS(L),Ct=new WM,Nt=new oy(L,Ft,gt,Ct,Xt,kt,H),C=new vS(x),M=new yS(x),G=new L0(L),Wt=new pS(L,G),Q=new TS(L,G,H,Wt),tt=new CS(L,Q,G,H),Dt=new AS(L,Xt,Nt),Ut=new gS(Ct),Z=new GM(x,C,M,Ft,Xt,Wt,Ut),wt=new my(x,Ct),rt=new YM,dt=new JM(Ft),_t=new dS(x,C,M,gt,tt,h,l),st=new iy(x,tt,Xt),le=new _y(L,H,Xt,gt),zt=new mS(L,Ft,H),mt=new bS(L,Ft,H),H.programs=Z.programs,x.capabilities=Xt,x.extensions=Ft,x.properties=Ct,x.renderLists=rt,x.shadowMap=st,x.state=gt,x.info=H}U();const K=new dy(x,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(q,X,!1))},this.getSize=function(T){return T.set(q,X)},this.setSize=function(T,I,z=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,X=I,e.width=Math.floor(T*V),e.height=Math.floor(I*V),z===!0&&(e.style.width=T+"px",e.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(q*V,X*V).floor()},this.setDrawingBufferSize=function(T,I,z){q=T,X=I,V=z,e.width=Math.floor(T*z),e.height=Math.floor(I*z),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,I,z,B){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,I,z,B),gt.viewport(v.copy(R).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(lt)},this.setScissor=function(T,I,z,B){T.isVector4?lt.set(T.x,T.y,T.z,T.w):lt.set(T,I,z,B),gt.scissor(D.copy(lt).multiplyScalar(V).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(T){gt.setScissorTest(Bt=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(T=!0,I=!0,z=!0){let B=0;if(T){let N=!1;if(b!==null){const nt=b.texture.format;N=nt===ju||nt===Zu||nt===Ku}if(N){const nt=b.texture.type,ft=nt===Fi||nt===Xr||nt===Uo||nt===Vs||nt===qu||nt===$u,xt=_t.getClearColor(),ut=_t.getClearAlpha(),vt=xt.r,Rt=xt.g,Tt=xt.b;ft?(f[0]=vt,f[1]=Rt,f[2]=Tt,f[3]=ut,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=vt,g[1]=Rt,g[2]=Tt,g[3]=ut,L.clearBufferiv(L.COLOR,0,g))}else B|=L.COLOR_BUFFER_BIT}I&&(B|=L.DEPTH_BUFFER_BIT),z&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),rt.dispose(),dt.dispose(),Ct.dispose(),C.dispose(),M.dispose(),tt.dispose(),Wt.dispose(),le.dispose(),Z.dispose(),K.dispose(),K.removeEventListener("sessionstart",Et),K.removeEventListener("sessionend",se),ct.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=H.autoReset,I=st.enabled,z=st.autoUpdate,B=st.needsUpdate,N=st.type;U(),H.autoReset=T,st.enabled=I,st.autoUpdate=z,st.needsUpdate=B,st.type=N}function ot(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function At(T){const I=T.target;I.removeEventListener("dispose",At),qt(I)}function qt(T){ge(T),Ct.remove(T)}function ge(T){const I=Ct.get(T).programs;I!==void 0&&(I.forEach(function(z){Z.releaseProgram(z)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,z,B,N,nt){I===null&&(I=bt);const ft=N.isMesh&&N.matrixWorld.determinant()<0,xt=Ee(T,I,z,B,N);gt.setMaterial(B,ft);let ut=z.index,vt=1;if(B.wireframe===!0){if(ut=Q.getWireframeAttribute(z),ut===void 0)return;vt=2}const Rt=z.drawRange,Tt=z.attributes.position;let oe=Rt.start*vt,_e=(Rt.start+Rt.count)*vt;nt!==null&&(oe=Math.max(oe,nt.start*vt),_e=Math.min(_e,(nt.start+nt.count)*vt)),ut!==null?(oe=Math.max(oe,0),_e=Math.min(_e,ut.count)):Tt!=null&&(oe=Math.max(oe,0),_e=Math.min(_e,Tt.count));const ae=_e-oe;if(ae<0||ae===1/0)return;Wt.setup(N,B,xt,z,ut);let ke,ie=zt;if(ut!==null&&(ke=G.get(ut),ie=mt,ie.setIndex(ke)),N.isMesh)B.wireframe===!0?(gt.setLineWidth(B.wireframeLinewidth*Jt()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(N.isLine){let Mt=B.linewidth;Mt===void 0&&(Mt=1),gt.setLineWidth(Mt*Jt()),N.isLineSegments?ie.setMode(L.LINES):N.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else N.isPoints?ie.setMode(L.POINTS):N.isSprite&&ie.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ie.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))ie.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Mt=N._multiDrawStarts,Ze=N._multiDrawCounts,ce=N._multiDrawCount,Qn=ut?G.get(ut).bytesPerElement:1,Kr=Ct.get(B).currentProgram.getUniforms();for(let Rn=0;Rn<ce;Rn++)Kr.setValue(L,"_gl_DrawID",Rn),ie.render(Mt[Rn]/Qn,Ze[Rn])}else if(N.isInstancedMesh)ie.renderInstances(oe,ae,N.count);else if(z.isInstancedBufferGeometry){const Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ze=Math.min(z.instanceCount,Mt);ie.renderInstances(oe,ae,Ze)}else ie.render(oe,ae)};function ve(T,I,z){T.transparent===!0&&T.side===Ri&&T.forceSinglePass===!1?(T.side=Tn,T.needsUpdate=!0,ye(T,I,z),T.side=ur,T.needsUpdate=!0,ye(T,I,z),T.side=Ri):ye(T,I,z)}this.compile=function(T,I,z=null){z===null&&(z=T),p=dt.get(z),p.init(I),E.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==z&&T.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return T.traverse(function(N){const nt=N.material;if(nt)if(Array.isArray(nt))for(let ft=0;ft<nt.length;ft++){const xt=nt[ft];ve(xt,z,N),B.add(xt)}else ve(nt,z,N),B.add(nt)}),E.pop(),p=null,B},this.compileAsync=function(T,I,z=null){const B=this.compile(T,I,z);return new Promise(N=>{function nt(){if(B.forEach(function(ft){Ct.get(ft).currentProgram.isReady()&&B.delete(ft)}),B.size===0){N(T);return}setTimeout(nt,10)}Ft.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ne=null;function Ot(T){ne&&ne(T)}function Et(){ct.stop()}function se(){ct.start()}const ct=new Wp;ct.setAnimationLoop(Ot),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(T){ne=T,K.setAnimationLoop(T),T===null?ct.stop():ct.start()},K.addEventListener("sessionstart",Et),K.addEventListener("sessionend",se),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(I),I=K.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,I,b),p=dt.get(T,E.length),p.init(I),E.push(p),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$t.setFromProjectionMatrix(ht),et=this.localClippingEnabled,$=Ut.init(this.clippingPlanes,et),_=rt.get(T,m.length),_.init(),m.push(_),K.enabled===!0&&K.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&Ht(nt,I,-1/0,x.sortObjects)}Ht(T,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,it),Gt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Gt&&_t.addToRenderList(_,T),this.info.render.frame++,$===!0&&Ut.beginShadows();const z=p.state.shadowsArray;st.render(z,T,I),$===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,N=_.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(N.length>0)for(let ft=0,xt=nt.length;ft<xt;ft++){const ut=nt[ft];Vt(B,N,T,ut)}Gt&&_t.render(T);for(let ft=0,xt=nt.length;ft<xt;ft++){const ut=nt[ft];Lt(_,T,ut,ut.viewport)}}else N.length>0&&Vt(B,N,T,I),Gt&&_t.render(T),Lt(_,T,I);b!==null&&(Nt.updateMultisampleRenderTarget(b),Nt.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(x,T,I),Wt.resetDefaultState(),P=-1,y=null,E.pop(),E.length>0?(p=E[E.length-1],$===!0&&Ut.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ht(T,I,z,B){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$t.intersectsSprite(T)){B&&yt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);const ft=tt.update(T),xt=T.material;xt.visible&&_.push(T,ft,xt,z,yt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$t.intersectsObject(T))){const ft=tt.update(T),xt=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),yt.copy(T.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),yt.copy(ft.boundingSphere.center)),yt.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(xt)){const ut=ft.groups;for(let vt=0,Rt=ut.length;vt<Rt;vt++){const Tt=ut[vt],oe=xt[Tt.materialIndex];oe&&oe.visible&&_.push(T,ft,oe,z,yt.z,Tt)}}else xt.visible&&_.push(T,ft,xt,z,yt.z,null)}}const nt=T.children;for(let ft=0,xt=nt.length;ft<xt;ft++)Ht(nt[ft],I,z,B)}function Lt(T,I,z,B){const N=T.opaque,nt=T.transmissive,ft=T.transparent;p.setupLightsView(z),$===!0&&Ut.setGlobalState(x.clippingPlanes,z),B&&gt.viewport(v.copy(B)),N.length>0&&Ae(N,I,z),nt.length>0&&Ae(nt,I,z),ft.length>0&&Ae(ft,I,z),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Vt(T,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Yr(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Oo:Fi,minFilter:Dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const nt=p.state.transmissionRenderTarget[B.id],ft=B.viewport||v;nt.setSize(ft.z,ft.w);const xt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(F),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Gt&&_t.render(z);const ut=x.toneMapping;x.toneMapping=sr;const vt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),$===!0&&Ut.setGlobalState(x.clippingPlanes,B),Ae(T,z,B),Nt.updateMultisampleRenderTarget(nt),Nt.updateRenderTargetMipmap(nt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Tt=0,oe=I.length;Tt<oe;Tt++){const _e=I[Tt],ae=_e.object,ke=_e.geometry,ie=_e.material,Mt=_e.group;if(ie.side===Ri&&ae.layers.test(B.layers)){const Ze=ie.side;ie.side=Tn,ie.needsUpdate=!0,Qt(ae,z,B,ke,ie,Mt),ie.side=Ze,ie.needsUpdate=!0,Rt=!0}}Rt===!0&&(Nt.updateMultisampleRenderTarget(nt),Nt.updateRenderTargetMipmap(nt))}x.setRenderTarget(xt),x.setClearColor(F,W),vt!==void 0&&(B.viewport=vt),x.toneMapping=ut}function Ae(T,I,z){const B=I.isScene===!0?I.overrideMaterial:null;for(let N=0,nt=T.length;N<nt;N++){const ft=T[N],xt=ft.object,ut=ft.geometry,vt=B===null?ft.material:B,Rt=ft.group;xt.layers.test(z.layers)&&Qt(xt,I,z,ut,vt,Rt)}}function Qt(T,I,z,B,N,nt){T.onBeforeRender(x,I,z,B,N,nt),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(x,I,z,B,T,nt),N.transparent===!0&&N.side===Ri&&N.forceSinglePass===!1?(N.side=Tn,N.needsUpdate=!0,x.renderBufferDirect(z,I,B,N,T,nt),N.side=ur,N.needsUpdate=!0,x.renderBufferDirect(z,I,B,N,T,nt),N.side=Ri):x.renderBufferDirect(z,I,B,N,T,nt),T.onAfterRender(x,I,z,B,N,nt)}function ye(T,I,z){I.isScene!==!0&&(I=bt);const B=Ct.get(T),N=p.state.lights,nt=p.state.shadowsArray,ft=N.state.version,xt=Z.getParameters(T,N.state,nt,I,z),ut=Z.getProgramCacheKey(xt);let vt=B.programs;B.environment=T.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(T.isMeshStandardMaterial?M:C).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,vt===void 0&&(T.addEventListener("dispose",At),vt=new Map,B.programs=vt);let Rt=vt.get(ut);if(Rt!==void 0){if(B.currentProgram===Rt&&B.lightsStateVersion===ft)return Te(T,xt),Rt}else xt.uniforms=Z.getUniforms(T),T.onBeforeCompile(xt,x),Rt=Z.acquireProgram(xt,ut),vt.set(ut,Rt),B.uniforms=xt.uniforms;const Tt=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Tt.clippingPlanes=Ut.uniform),Te(T,xt),B.needsLights=Cn(T),B.lightsStateVersion=ft,B.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Rt,B.uniformsList=null,Rt}function ze(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Va.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Te(T,I){const z=Ct.get(T);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Ee(T,I,z,B,N){I.isScene!==!0&&(I=bt),Nt.resetTextureUnits();const nt=I.fog,ft=B.isMeshStandardMaterial?I.environment:null,xt=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:fr,ut=(B.isMeshStandardMaterial?M:C).get(B.envMap||ft),vt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Rt=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!z.morphAttributes.position,oe=!!z.morphAttributes.normal,_e=!!z.morphAttributes.color;let ae=sr;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ae=x.toneMapping);const ke=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=ke!==void 0?ke.length:0,Mt=Ct.get(B),Ze=p.state.lights;if($===!0&&(et===!0||T!==y)){const Gn=T===y&&B.id===P;Ut.setState(B,T,Gn)}let ce=!1;B.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Ze.state.version||Mt.outputColorSpace!==xt||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==ut||B.fog===!0&&Mt.fog!==nt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Ut.numPlanes||Mt.numIntersection!==Ut.numIntersection)||Mt.vertexAlphas!==vt||Mt.vertexTangents!==Rt||Mt.morphTargets!==Tt||Mt.morphNormals!==oe||Mt.morphColors!==_e||Mt.toneMapping!==ae||Mt.morphTargetsCount!==ie)&&(ce=!0):(ce=!0,Mt.__version=B.version);let Qn=Mt.currentProgram;ce===!0&&(Qn=ye(B,I,N));let Kr=!1,Rn=!1,gl=!1;const Ue=Qn.getUniforms(),ki=Mt.uniforms;if(gt.useProgram(Qn.program)&&(Kr=!0,Rn=!0,gl=!0),B.id!==P&&(P=B.id,Rn=!0),Kr||y!==T){Ue.setValue(L,"projectionMatrix",T.projectionMatrix),Ue.setValue(L,"viewMatrix",T.matrixWorldInverse);const Gn=Ue.map.cameraPosition;Gn!==void 0&&Gn.setValue(L,at.setFromMatrixPosition(T.matrixWorld)),Xt.logarithmicDepthBuffer&&Ue.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ue.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Rn=!0,gl=!0)}if(N.isSkinnedMesh){Ue.setOptional(L,N,"bindMatrix"),Ue.setOptional(L,N,"bindMatrixInverse");const Gn=N.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Ue.setValue(L,"boneTexture",Gn.boneTexture,Nt))}N.isBatchedMesh&&(Ue.setOptional(L,N,"batchingTexture"),Ue.setValue(L,"batchingTexture",N._matricesTexture,Nt),Ue.setOptional(L,N,"batchingIdTexture"),Ue.setValue(L,"batchingIdTexture",N._indirectTexture,Nt),Ue.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&Ue.setValue(L,"batchingColorTexture",N._colorsTexture,Nt));const vl=z.morphAttributes;if((vl.position!==void 0||vl.normal!==void 0||vl.color!==void 0)&&Dt.update(N,z,Qn),(Rn||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,Ue.setValue(L,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ki.envMap.value=ut,ki.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(ki.envMapIntensity.value=I.environmentIntensity),Rn&&(Ue.setValue(L,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&pe(ki,gl),nt&&B.fog===!0&&wt.refreshFogUniforms(ki,nt),wt.refreshMaterialUniforms(ki,B,V,X,p.state.transmissionRenderTarget[T.id]),Va.upload(L,ze(Mt),ki,Nt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Va.upload(L,ze(Mt),ki,Nt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ue.setValue(L,"center",N.center),Ue.setValue(L,"modelViewMatrix",N.modelViewMatrix),Ue.setValue(L,"normalMatrix",N.normalMatrix),Ue.setValue(L,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Gn=B.uniformsGroups;for(let xl=0,pm=Gn.length;xl<pm;xl++){const rh=Gn[xl];le.update(rh,Qn),le.bind(rh,Qn)}}return Qn}function pe(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Cn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,I,z){Ct.get(T.texture).__webglTexture=I,Ct.get(T.depthTexture).__webglTexture=z;const B=Ct.get(T);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const z=Ct.get(T);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,z=0){b=T,A=I,w=z;let B=!0,N=null,nt=!1,ft=!1;if(T){const ut=Ct.get(T);if(ut.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(L.FRAMEBUFFER,null),B=!1;else if(ut.__webglFramebuffer===void 0)Nt.setupRenderTarget(T);else if(ut.__hasExternalTextures)Nt.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Tt=T.depthTexture;if(ut.__boundDepthTexture!==Tt){if(Tt!==null&&Ct.has(Tt)&&(T.width!==Tt.image.width||T.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(T)}}const vt=T.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);const Rt=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?N=Rt[I][z]:N=Rt[I],nt=!0):T.samples>0&&Nt.useMultisampledRTT(T)===!1?N=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(Rt)?N=Rt[z]:N=Rt,v.copy(T.viewport),D.copy(T.scissor),O=T.scissorTest}else v.copy(R).multiplyScalar(V).floor(),D.copy(lt).multiplyScalar(V).floor(),O=Bt;if(gt.bindFramebuffer(L.FRAMEBUFFER,N)&&B&&gt.drawBuffers(T,N),gt.viewport(v),gt.scissor(D),gt.setScissorTest(O),nt){const ut=Ct.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ut.__webglTexture,z)}else if(ft){const ut=Ct.get(T.texture),vt=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ut.__webglTexture,z||0,vt)}P=-1},this.readRenderTargetPixels=function(T,I,z,B,N,nt,ft){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){gt.bindFramebuffer(L.FRAMEBUFFER,xt);try{const ut=T.texture,vt=ut.format,Rt=ut.type;if(!Xt.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-B&&z>=0&&z<=T.height-N&&L.readPixels(I,z,B,N,kt.convert(vt),kt.convert(Rt),nt)}finally{const ut=b!==null?Ct.get(b).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(T,I,z,B,N,nt,ft){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){gt.bindFramebuffer(L.FRAMEBUFFER,xt);try{const ut=T.texture,vt=ut.format,Rt=ut.type;if(!Xt.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-B&&z>=0&&z<=T.height-N){const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,nt.byteLength,L.STREAM_READ),L.readPixels(I,z,B,N,kt.convert(vt),kt.convert(Rt),0),L.flush();const oe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await a0(L,oe,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,nt)}finally{L.deleteBuffer(Tt),L.deleteSync(oe)}return nt}}finally{const ut=b!==null?Ct.get(b).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,ut)}}},this.copyFramebufferToTexture=function(T,I=null,z=0){T.isTexture!==!0&&(Eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const B=Math.pow(2,-z),N=Math.floor(T.image.width*B),nt=Math.floor(T.image.height*B),ft=I!==null?I.x:0,xt=I!==null?I.y:0;Nt.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ft,xt,N,nt),gt.unbindTexture()},this.copyTextureToTexture=function(T,I,z=null,B=null,N=0){T.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1],I=arguments[2],N=arguments[3]||0,z=null);let nt,ft,xt,ut,vt,Rt;z!==null?(nt=z.max.x-z.min.x,ft=z.max.y-z.min.y,xt=z.min.x,ut=z.min.y):(nt=T.image.width,ft=T.image.height,xt=0,ut=0),B!==null?(vt=B.x,Rt=B.y):(vt=0,Rt=0);const Tt=kt.convert(I.format),oe=kt.convert(I.type);Nt.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const _e=L.getParameter(L.UNPACK_ROW_LENGTH),ae=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ke=L.getParameter(L.UNPACK_SKIP_PIXELS),ie=L.getParameter(L.UNPACK_SKIP_ROWS),Mt=L.getParameter(L.UNPACK_SKIP_IMAGES),Ze=T.isCompressedTexture?T.mipmaps[N]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ut),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,vt,Rt,nt,ft,Tt,oe,Ze.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,vt,Rt,Ze.width,Ze.height,Tt,Ze.data):L.texSubImage2D(L.TEXTURE_2D,N,vt,Rt,nt,ft,Tt,oe,Ze),L.pixelStorei(L.UNPACK_ROW_LENGTH,_e),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ae),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Mt),N===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(T,I,z=null,B=null,N=0){T.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,T=arguments[2],I=arguments[3],N=arguments[4]||0);let nt,ft,xt,ut,vt,Rt,Tt,oe,_e;const ae=T.isCompressedTexture?T.mipmaps[N]:T.image;z!==null?(nt=z.max.x-z.min.x,ft=z.max.y-z.min.y,xt=z.max.z-z.min.z,ut=z.min.x,vt=z.min.y,Rt=z.min.z):(nt=ae.width,ft=ae.height,xt=ae.depth,ut=0,vt=0,Rt=0),B!==null?(Tt=B.x,oe=B.y,_e=B.z):(Tt=0,oe=0,_e=0);const ke=kt.convert(I.format),ie=kt.convert(I.type);let Mt;if(I.isData3DTexture)Nt.setTexture3D(I,0),Mt=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Nt.setTexture2DArray(I,0),Mt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),ce=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=L.getParameter(L.UNPACK_SKIP_PIXELS),Kr=L.getParameter(L.UNPACK_SKIP_ROWS),Rn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ae.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ae.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ut),L.pixelStorei(L.UNPACK_SKIP_ROWS,vt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rt),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Mt,N,Tt,oe,_e,nt,ft,xt,ke,ie,ae.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Mt,N,Tt,oe,_e,nt,ft,xt,ke,ae.data):L.texSubImage3D(Mt,N,Tt,oe,_e,nt,ft,xt,ke,ie,ae),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rn),N===0&&I.generateMipmaps&&L.generateMipmap(Mt),gt.unbindTexture()},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&Nt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Nt.setTextureCube(T,0):T.isData3DTexture?Nt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Nt.setTexture2DArray(T,0):Nt.setTexture2D(T,0),gt.unbindTexture()},this.resetState=function(){A=0,w=0,b=null,gt.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ju?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===fl?"display-p3":"srgb"}}class vy extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zp extends ko{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kf=new Be,pu=new Up,ba=new dl,wa=new Y;class jp extends wn{constructor(t=new vi,e=new Zp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=s,t.ray.intersectsSphere(ba)===!1)return;kf.copy(i).invert(),pu.copy(t.ray).applyMatrix4(kf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const p=c.getX(g);wa.fromBufferAttribute(d,p),Hf(wa,p,l,i,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)wa.fromBufferAttribute(d,g),Hf(wa,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hf(r,t,e,n,i,s,o){const a=pu.distanceSqToPoint(r);if(a<e){const l=new Y;pu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class xy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vf(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xu);const Sy=`
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;

  attribute float aScale;
  attribute float aSpeed;
  attribute float aPhase;

  varying float vOpacity;

  void main() {
    // Pulsing opacity
    vOpacity = clamp((sin(uTime * aSpeed + aPhase) * 0.45 + 0.55) * 0.95, 0.05, 1.0);

    // Organic drift in x, y, z
    vec3 pos = position;
    pos.x += sin(uTime * aSpeed * 0.35 + aPhase)        * 1.05;
    pos.y += cos(uTime * aSpeed * 0.25 + aPhase * 1.4)  * 0.60;
    pos.z += sin(uTime * aSpeed * 0.20 + aPhase * 0.7)  * 0.40;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * aScale * uPixelRatio * (250.0 / -mv.z);
    gl_Position  = projectionMatrix * mv;
  }
`,My=`
  uniform vec3 uColor;
  varying float vOpacity;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float s = pow(1.0 - smoothstep(0.0, 0.5, d), 2.0);
    if (s < 0.01) discard;
    gl_FragColor = vec4(uColor, s * vOpacity);
  }
`;function lc(r,t,e,n,i){const s=new vi,o=new Float32Array(r*3),a=new Float32Array(r),l=new Float32Array(r),c=new Float32Array(r);for(let d=0;d<r;d++)o[d*3]=(Math.random()-.5)*t[0],o[d*3+1]=(Math.random()-.5)*t[1]+e,o[d*3+2]=(Math.random()-.5)*t[2],a[d]=Math.random()*2.5+.5,l[d]=Math.random()*.8+.3,c[d]=Math.random()*Math.PI*2;s.setAttribute("position",new mn(o,3)),s.setAttribute("aScale",new mn(a,1)),s.setAttribute("aSpeed",new mn(l,1)),s.setAttribute("aPhase",new mn(c,1));const u=new zi({vertexShader:Sy,fragmentShader:My,uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:i},uColor:{value:new fe(n)}},transparent:!0,blending:Ic,depthWrite:!1});return{mesh:new jp(s,u),mat:u}}function yy(){const r=document.getElementById("hero-canvas"),t=new gy({canvas:r,antialias:!0,alpha:!0});t.setClearColor(0,0),t.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new vy,n=new $n(75,1,.1,500);n.position.z=5;const i=()=>{const A=r.parentElement,w=A.offsetWidth,b=A.offsetHeight;t.setSize(w,b),n.aspect=w/b,n.updateProjectionMatrix()};i();const s=new ResizeObserver(i);s.observe(r.parentElement);const o=4e3,a=new vi,l=new Float32Array(o*3);for(let A=0;A<o;A++)l[A*3]=(Math.random()-.5)*80,l[A*3+1]=Math.random()*42,l[A*3+2]=(Math.random()-.5)*80;a.setAttribute("position",new mn(l,3));const c=new Zp({color:16777215,size:.1,sizeAttenuation:!0,transparent:!0,opacity:.82}),u=new jp(a,c);e.add(u);const{mesh:d,mat:h}=lc(140,[16,5,6],-1,"#ffe066",45),{mesh:f,mat:g}=lc(90,[18,4,7],-.5,"#a8ffb8",30),{mesh:_,mat:p}=lc(70,[12,3,5],-1.5,"#ffb347",28);e.add(d,f,_);const m={rotSpeed:1,ffScale:1,camZ:5},E=new xy;let x;const S=()=>{x=requestAnimationFrame(S);const A=E.getElapsedTime();[h,g,p].forEach(w=>{w.uniforms.uTime.value=A}),h.uniforms.uSize.value=45*m.ffScale,g.uniforms.uSize.value=30*m.ffScale,p.uniforms.uSize.value=28*m.ffScale,u.rotation.y=A*.008*m.rotSpeed,u.rotation.x=A*.004*m.rotSpeed,d.rotation.y=A*.012,f.rotation.y=-A*.009,_.rotation.y=A*.006,n.position.x=Math.sin(A*.12)*.35,n.position.y=Math.cos(A*.09)*.22,n.position.z=m.camZ,n.lookAt(0,0,0),t.render(e,n)};return S(),{state:m,destroy(){cancelAnimationFrame(x),s.disconnect(),t.dispose()}}}(function(){function r(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function t(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function e(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];var a=s.length;if(n)for(a||n.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=r,DocumentFragment.prototype.append=r),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=t,DocumentFragment.prototype.replaceChildren=t),Element.prototype.replaceWith||(Element.prototype.replaceWith=e,DocumentFragment.prototype.replaceWith=e))})();function Ey(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Gf(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Wf(r,t,e){return t&&Gf(r.prototype,t),e&&Gf(r,e),r}function Ty(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function Xf(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),e.push.apply(e,n)}return e}function Yf(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Xf(Object(e),!0).forEach(function(n){Ty(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):Xf(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function Jp(r,t){return wy(r)||Cy(r,t)||Qp(r,t)||Py()}function dn(r){return by(r)||Ay(r)||Qp(r)||Ry()}function by(r){if(Array.isArray(r))return mu(r)}function wy(r){if(Array.isArray(r))return r}function Ay(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function Cy(r,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var e=[],n=!0,i=!1,s=void 0;try{for(var o=r[Symbol.iterator](),a;!(n=(a=o.next()).done)&&(e.push(a.value),!(t&&e.length===t));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw s}}return e}}function Qp(r,t){if(r){if(typeof r=="string")return mu(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return mu(r,t)}}function mu(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Ry(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Py(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lr(r,t){return Object.getOwnPropertyNames(Object(r)).reduce(function(e,n){var i=Object.getOwnPropertyDescriptor(Object(r),n),s=Object.getOwnPropertyDescriptor(Object(t),n);return Object.defineProperty(e,n,s||i)},{})}function Vo(r){return typeof r=="string"}function th(r){return Array.isArray(r)}function Aa(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Lr(r),e;return t.types!==void 0?e=t.types:t.split!==void 0&&(e=t.split),e!==void 0&&(t.types=(Vo(e)||th(e)?String(e):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(t.absolute||t.position)&&(t.absolute=t.absolute||/absolute/.test(r.position)),t}function eh(r){var t=Vo(r)||th(r)?String(r):"";return{none:!t,lines:/line/i.test(t),words:/word/i.test(t),chars:/char/i.test(t)}}function _l(r){return r!==null&&typeof r=="object"}function Dy(r){return _l(r)&&/^(1|3|11)$/.test(r.nodeType)}function Ly(r){return typeof r=="number"&&r>-1&&r%1===0}function Iy(r){return _l(r)&&Ly(r.length)}function qr(r){return th(r)?r:r==null?[]:Iy(r)?Array.prototype.slice.call(r):[r]}function qf(r){var t=r;return Vo(r)&&(/^(#[a-z]\w+)$/.test(r.trim())?t=document.getElementById(r.trim().slice(1)):t=document.querySelectorAll(r)),qr(t).reduce(function(e,n){return[].concat(dn(e),dn(qr(n).filter(Dy)))},[])}var Uy=Object.entries,ol="_splittype",oi={},Ny=0;function mi(r,t,e){if(!_l(r))return console.warn("[data.set] owner is not an object"),null;var n=r[ol]||(r[ol]=++Ny),i=oi[n]||(oi[n]={});return e===void 0?t&&Object.getPrototypeOf(t)===Object.prototype&&(oi[n]=Yf(Yf({},i),t)):t!==void 0&&(i[t]=e),e}function Ir(r,t){var e=_l(r)?r[ol]:null,n=e&&oi[e]||{};return n}function tm(r){var t=r&&r[ol];t&&(delete r[t],delete oi[t])}function Oy(){Object.keys(oi).forEach(function(r){delete oi[r]})}function Fy(){Uy(oi).forEach(function(r){var t=Jp(r,2),e=t[0],n=t[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(oi[e]=null,delete oi[e])})}function By(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",e=r?String(r):"";return e.trim().replace(/\s+/g," ").split(t)}var nh="\\ud800-\\udfff",em="\\u0300-\\u036f\\ufe20-\\ufe23",nm="\\u20d0-\\u20f0",im="\\ufe0e\\ufe0f",zy="[".concat(nh,"]"),_u="[".concat(em).concat(nm,"]"),gu="\\ud83c[\\udffb-\\udfff]",ky="(?:".concat(_u,"|").concat(gu,")"),rm="[^".concat(nh,"]"),sm="(?:\\ud83c[\\udde6-\\uddff]){2}",om="[\\ud800-\\udbff][\\udc00-\\udfff]",am="\\u200d",lm="".concat(ky,"?"),cm="[".concat(im,"]?"),Hy="(?:"+am+"(?:"+[rm,sm,om].join("|")+")"+cm+lm+")*",Vy=cm+lm+Hy,Gy="(?:".concat(["".concat(rm).concat(_u,"?"),_u,sm,om,zy].join("|"),`
)`),Wy=RegExp("".concat(gu,"(?=").concat(gu,")|").concat(Gy).concat(Vy),"g"),Xy=[am,nh,em,nm,im],Yy=RegExp("[".concat(Xy.join(""),"]"));function qy(r){return r.split("")}function um(r){return Yy.test(r)}function $y(r){return r.match(Wy)||[]}function Ky(r){return um(r)?$y(r):qy(r)}function Zy(r){return r==null?"":String(r)}function jy(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r=Zy(r),r&&Vo(r)&&!t&&um(r)?Ky(r):r.split(t)}function vu(r,t){var e=document.createElement(r);return t&&Object.keys(t).forEach(function(n){var i=t[n],s=Vo(i)?i.trim():i;s===null||s===""||(n==="children"?e.append.apply(e,dn(qr(s))):e.setAttribute(n,s))}),e}var ih={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Jy(r,t){t=Lr(ih,t);var e=eh(t.types),n=t.tagName,i=r.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(i)&&s.append(" "),o=By(i).reduce(function(l,c,u,d){var h,f;return e.chars&&(f=jy(c).map(function(g){var _=vu(n,{class:"".concat(t.splitClass," ").concat(t.charClass),style:"display: inline-block;",children:g});return mi(_,"isChar",!0),a=[].concat(dn(a),[_]),_})),e.words||e.lines?(h=vu(n,{class:"".concat(t.wordClass," ").concat(t.splitClass),style:"display: inline-block; ".concat(e.words&&t.absolute?"position: relative;":""),children:e.chars?f:c}),mi(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):f.forEach(function(g){s.appendChild(g)}),u<d.length-1&&s.append(" "),e.words?l.concat(h):l},[]),/\s$/.test(i)&&s.append(" "),r.replaceWith(s),{words:o,chars:a}}function hm(r,t){var e=r.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(e))return n;if(e===3&&/\S/.test(r.nodeValue))return Jy(r,t);var i=qr(r.childNodes);if(i.length&&(mi(r,"isSplit",!0),!Ir(r).isRoot)){r.style.display="inline-block",r.style.position="relative";var s=r.nextSibling,o=r.previousSibling,a=r.textContent||"",l=s?s.textContent:" ",c=o?o.textContent:" ";mi(r,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(c)})}return i.reduce(function(u,d){var h=hm(d,t),f=h.words,g=h.chars;return{words:[].concat(dn(u.words),dn(f)),chars:[].concat(dn(u.chars),dn(g))}},n)}function Qy(r,t,e,n){if(!e.absolute)return{top:t?r.offsetTop:null};var i=r.offsetParent,s=Jp(n,2),o=s[0],a=s[1],l=0,c=0;if(i&&i!==document.body){var u=i.getBoundingClientRect();l=u.x+o,c=u.y+a}var d=r.getBoundingClientRect(),h=d.width,f=d.height,g=d.x,_=d.y,p=_+a-c,m=g+o-l;return{width:h,height:f,top:p,left:m}}function fm(r){Ir(r).isWord?(tm(r),r.replaceWith.apply(r,dn(r.childNodes))):qr(r.children).forEach(function(t){return fm(t)})}var tE=function(){return document.createDocumentFragment()};function eE(r,t,e){var n=eh(t.types),i=t.tagName,s=r.getElementsByTagName("*"),o=[],a=[],l=null,c,u,d,h=[],f=r.parentElement,g=r.nextElementSibling,_=tE(),p=window.getComputedStyle(r),m=p.textAlign,E=parseFloat(p.fontSize),x=E*.2;return t.absolute&&(d={left:r.offsetLeft,top:r.offsetTop,width:r.offsetWidth},u=r.offsetWidth,c=r.offsetHeight,mi(r,{cssWidth:r.style.width,cssHeight:r.style.height})),qr(s).forEach(function(S){var A=S.parentElement===r,w=Qy(S,A,t,e),b=w.width,P=w.height,y=w.top,v=w.left;/^br$/i.test(S.nodeName)||(n.lines&&A&&((l===null||y-l>=x)&&(l=y,o.push(a=[])),a.push(S)),t.absolute&&mi(S,{top:y,left:v,width:b,height:P}))}),f&&f.removeChild(r),n.lines&&(h=o.map(function(S){var A=vu(i,{class:"".concat(t.splitClass," ").concat(t.lineClass),style:"display: block; text-align: ".concat(m,"; width: 100%;")});mi(A,"isLine",!0);var w={height:0,top:1e4};return _.appendChild(A),S.forEach(function(b,P,y){var v=Ir(b),D=v.isWordEnd,O=v.top,F=v.height,W=y[P+1];w.height=Math.max(w.height,F),w.top=Math.min(w.top,O),A.appendChild(b),D&&Ir(W).isWordStart&&A.append(" ")}),t.absolute&&mi(A,{height:w.height,top:w.top}),A}),n.words||fm(_),r.replaceChildren(_)),t.absolute&&(r.style.width="".concat(r.style.width||u,"px"),r.style.height="".concat(c,"px"),qr(s).forEach(function(S){var A=Ir(S),w=A.isLine,b=A.top,P=A.left,y=A.width,v=A.height,D=Ir(S.parentElement),O=!w&&D.isLine;S.style.top="".concat(O?b-D.top:b,"px"),S.style.left=w?"".concat(d.left,"px"):"".concat(P-(O?d.left:0),"px"),S.style.height="".concat(v,"px"),S.style.width=w?"".concat(d.width,"px"):"".concat(y,"px"),S.style.position="absolute"})),f&&(g?f.insertBefore(r,g):f.appendChild(r)),h}var gs=Lr(ih,{}),Ti=function(){Wf(r,null,[{key:"clearData",value:function(){Oy()}},{key:"setDefaults",value:function(e){return gs=Lr(gs,Aa(e)),ih}},{key:"revert",value:function(e){qf(e).forEach(function(n){var i=Ir(n),s=i.isSplit,o=i.html,a=i.cssWidth,l=i.cssHeight;s&&(n.innerHTML=o,n.style.width=a||"",n.style.height=l||"",tm(n))})}},{key:"create",value:function(e,n){return new r(e,n)}},{key:"data",get:function(){return oi}},{key:"defaults",get:function(){return gs},set:function(e){gs=Lr(gs,Aa(e))}}]);function r(t,e){Ey(this,r),this.isSplit=!1,this.settings=Lr(gs,Aa(e)),this.elements=qf(t),this.split()}return Wf(r,[{key:"split",value:function(e){var n=this;this.revert(),this.elements.forEach(function(o){mi(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];e!==void 0&&(this.settings=Lr(this.settings,Aa(e)));var s=eh(this.settings.types);s.none||(this.elements.forEach(function(o){mi(o,"isRoot",!0);var a=hm(o,n.settings),l=a.words,c=a.chars;n.words=[].concat(dn(n.words),dn(l)),n.chars=[].concat(dn(n.chars),dn(c))}),this.elements.forEach(function(o){if(s.lines||n.settings.absolute){var a=eE(o,n.settings,i);n.lines=[].concat(dn(n.lines),dn(a))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),Fy())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),r.revert(this.elements)}}]),r}();xe.registerPlugin(Yt);function nE(r){const t=document.getElementById("loader"),e=document.getElementById("loader-fill"),n=()=>{xe.to(t,{opacity:0,duration:1.1,ease:"power2.inOut",onComplete(){t.style.display="none"}}),i()};xe.to(e,{width:"100%",duration:1.4,ease:"power2.inOut",onComplete(){document.readyState==="complete"?setTimeout(n,200):window.addEventListener("load",()=>setTimeout(n,200),{once:!0})}});function i(){const s=document.querySelector(".pre-title"),o=document.querySelector(".title-divider");document.querySelector(".hero-sub");const a=document.querySelector(".scroll-hint");xe.set(".title-line-1, .title-line-2",{perspective:600});const l=new Ti(".title-line-1",{types:"chars"}).chars,c=new Ti(".title-line-2",{types:"chars"}).chars,u=new Ti(".hero-sub",{types:"words"}).words;xe.timeline({defaults:{ease:"power3.out"}}).from(s,{opacity:0,y:28,duration:1}).from(l,{opacity:0,y:55,rotateX:-90,transformOrigin:"50% 50% -30px",stagger:{each:.038},duration:.72,ease:"back.out(1.6)"},"-=0.5").from(c,{opacity:0,y:90,scale:.3,filter:"blur(14px)",transformOrigin:"50% 100%",stagger:{each:.07,from:"center"},duration:1.1,ease:"back.out(2.2)"},"-=0.35").from(o,{scaleX:0,opacity:0,duration:.7,ease:"power2.inOut"},"-=0.3").from(u,{opacity:0,y:18,stagger:.06,duration:.65},"-=0.4").from(a,{opacity:0,y:14,duration:.6},"+=0.5")}Yt.create({trigger:".section-header",start:"top 82%",once:!0,onEnter(){const s=new Ti(".eyebrow",{types:"chars"}).chars,o=new Ti(".section-heading",{types:"chars"}).chars;xe.set([s,o],{opacity:0,y:30}),xe.to(s,{opacity:1,y:0,stagger:.028,duration:.5,ease:"power2.out"}),xe.to(o,{opacity:1,y:0,stagger:.038,duration:.6,ease:"power2.out",delay:.25})}}),xe.utils.toArray(".message-card").forEach(s=>{const o=s.querySelector(".card-icon"),a=s.querySelector(".card-text");s.querySelector(".card-deco");const l=new Ti(a,{types:"words"}).words;xe.set(s,{opacity:0,y:75,scale:.96}),xe.set(o,{scale:0,opacity:0}),xe.set(l,{opacity:0,y:24}),Yt.create({trigger:s,start:"top 88%",once:!0,onEnter(){xe.timeline().to(s,{opacity:1,y:0,scale:1,duration:.9,ease:"power3.out"}).to(o,{scale:1,opacity:1,duration:.5,ease:"back.out(3)"},"-=0.5").to(l,{opacity:1,y:0,stagger:{each:.022},duration:.55,ease:"power2.out"},"-=0.35")}})}),Yt.create({trigger:"#finale",start:"top 80%",once:!0,onEnter(){xe.to(r,{rotSpeed:3.5,camZ:2.5,duration:4,ease:"power2.inOut"}),xe.to(r,{ffScale:0,duration:2,ease:"power2.in"}),xe.set(".finale-name",{perspective:800});const s=new Ti(".finale-name",{types:"chars"}).chars;xe.set(s,{opacity:0,y:120,rotateY:90,scale:.4});const o=new Ti(".finale-subtitle",{types:"words"}).words,a=new Ti(".finale-message",{types:"lines"}).lines;xe.set([o,a],{opacity:0,y:32}),xe.set(".finale-heart",{scale:0,opacity:0}),xe.timeline({delay:.3}).to(s,{opacity:1,y:0,rotateY:0,scale:1,stagger:{each:.08,from:"random"},duration:1.3,ease:"back.out(1.8)"}).to(o,{opacity:1,y:0,stagger:.07,duration:.7,ease:"power2.out"},"-=0.5").to(a,{opacity:1,y:0,stagger:.11,duration:.8,ease:"power2.out"},"-=0.3").to(".finale-heart",{scale:1,opacity:1,duration:.9,ease:"elastic.out(1, 0.45)"},"-=0.2")}})}function iE(){const r=document.getElementById("bg-music"),t=document.getElementById("music-btn"),e=document.getElementById("music-icon");r.volume=0;let n=!1,i=!1;const s=()=>{n=!0,i=!0,xe.to(r,{volume:.55,duration:3.5,ease:"power1.inOut"}),e.textContent="♫",t.classList.remove("muted")},o=()=>r.play().then(s).catch(()=>{});o();const a=()=>{i||o(),["pointerdown","keydown","scroll","touchstart"].forEach(l=>document.removeEventListener(l,a))};["pointerdown","keydown","scroll","touchstart"].forEach(l=>document.addEventListener(l,a,{once:!0,passive:!0})),t.addEventListener("click",l=>{l.stopPropagation(),n?(xe.to(r,{volume:0,duration:.9,onComplete:()=>r.pause()}),e.textContent="♪",t.classList.add("muted"),n=!1):(r.play().catch(()=>{}),xe.to(r,{volume:.55,duration:1.2}),e.textContent="♫",t.classList.remove("muted"),n=!0,i=!0)})}function rE(){const r=document.getElementById("finale-canvas");if(!r)return;const t=r.getContext("2d"),e=380,n=420;let i,s,o=[];const a={v:1.5},l=()=>{i=r.width=r.offsetWidth,s=r.height=r.offsetHeight,o.length===0&&u()};new ResizeObserver(l).observe(r.parentElement);function u(){o=Array.from({length:e},()=>{const h={x:(Math.random()-.5)*i*3,y:(Math.random()-.5)*s*3,z:Math.random()*i,pz:0};return h.pz=h.z,h})}const d=()=>{requestAnimationFrame(d);const h=Math.min(.22,.05+a.v*.008);t.fillStyle=`rgba(2, 3, 16, ${h})`,t.fillRect(0,0,i,s);for(const f of o){f.z-=a.v*2.8,f.z<=1&&(f.x=(Math.random()-.5)*i*3,f.y=(Math.random()-.5)*s*3,f.z=i,f.pz=i);const g=i/2,_=s/2,p=f.x/f.z*n+g,m=f.y/f.z*n+_,E=f.x/f.pz*n+g,x=f.y/f.pz*n+_,S=Math.min(1,1-f.z/i),A=S*2.8+.3;t.strokeStyle=`rgba(255,255,255,${S.toFixed(2)})`,t.lineWidth=A,t.beginPath(),t.moveTo(E,x),t.lineTo(p,m),t.stroke(),f.pz=f.z}};Yt.create({trigger:"#finale",start:"top 90%",end:"top 20%",scrub:2,onUpdate(h){a.v=1.5+h.progress*22},onLeaveBack(){a.v=1.5}}),l(),d()}xe.registerPlugin(Yt);const dm=new bm({autoRaf:!1,duration:1.25,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r))});dm.on("scroll",Yt.update);xe.ticker.add(r=>dm.raf(r*1e3));xe.ticker.lagSmoothing(0);const{state:sE}=yy();nE(sE);iE();rE();
