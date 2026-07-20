import{_ as qa}from"./Badge-C0poPfcI.js";import{w as ce,s as Pa}from"./story-renders-DjeoaiCa.js";import{k as ja,l as Ua,a as Ka,aQ as Za,x as Qa,a4 as Da,aF as We,aR as Ja,c as Ae,d as Pt,r as Aa,f as Re,p as Dt,s as es,ab as ts,i as Te,g as se,o as Le,aw as as,af as ss,ax as ns,X as is,q as ls,aS as rs}from"./iframe-CAswI7Qe.js";import{_ as os}from"./Card-BLbeiOTl.js";import{_ as ds}from"./CardBody-CJBLPEWW.js";import{_ as us}from"./CardFooter-DBgNHwIH.js";import{_ as cs}from"./CardHeader-CxyaXSBf.js";import{_ as fs}from"./Tag-CUdCnuDd.js";import{h as ms,a as ps}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";function At(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function xt(e={},s={}){const t=["__proto__","constructor","prototype"];Object.keys(s).filter(a=>t.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=s[a]:At(s[a])&&At(e[a])&&Object.keys(s[a]).length>0&&xt(e[a],s[a])})}const La={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Q(){const e=typeof document<"u"?document:{};return xt(e,La),e}const hs={document:La,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function q(){const e=typeof window<"u"?window:{};return xt(e,hs),e}function xe(e=""){return e.trim().split(" ").filter(s=>!!s.trim())}function gs(e){const s=e;Object.keys(s).forEach(t=>{try{s[t]=null}catch{}try{delete s[t]}catch{}})}function Oe(e,s=0){return setTimeout(e,s)}function pe(){return Date.now()}function vs(e){const s=q();let t;return s.getComputedStyle&&(t=s.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}function St(e,s="x"){const t=q();let a,i,n;const u=vs(e);return t.WebKitCSSMatrix?(i=u.transform||u.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(d=>d.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(i==="none"?"":i)):(n=u.MozTransform||u.OTransform||u.MsTransform||u.msTransform||u.transform||u.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),s==="x"&&(t.WebKitCSSMatrix?i=n.m41:a.length===16?i=parseFloat(a[12]):i=parseFloat(a[4])),s==="y"&&(t.WebKitCSSMatrix?i=n.m42:a.length===16?i=parseFloat(a[13]):i=parseFloat(a[5])),i||0}function Ve(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Cs(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function de(...e){const s=Object(e[0]);for(let t=1;t<e.length;t+=1){const a=e[t];if(a!=null&&!Cs(a)){const i=Object.keys(Object(a)).filter(n=>n!=="__proto__"&&n!=="constructor"&&n!=="prototype");for(let n=0,u=i.length;n<u;n+=1){const d=i[n],r=Object.getOwnPropertyDescriptor(a,d);r!==void 0&&r.enumerable&&(Ve(s[d])&&Ve(a[d])?a[d].__swiper__?s[d]=a[d]:de(s[d],a[d]):!Ve(s[d])&&Ve(a[d])?(s[d]={},a[d].__swiper__?s[d]=a[d]:de(s[d],a[d])):s[d]=a[d])}}}return s}function we(e,s,t){e.style.setProperty(s,t)}function wa({swiper:e,targetPosition:s,side:t}){const a=q(),i=-e.translate;let n=null,u;const d=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const r=s>i?"next":"prev",f=(c,g)=>r==="next"&&c>=g||r==="prev"&&c<=g,h=()=>{u=new Date().getTime(),n===null&&(n=u);const c=Math.max(Math.min((u-n)/d,1),0),g=.5-Math.cos(c*Math.PI)/2;let l=i+g*(s-i);if(f(l,s)&&(l=s),e.wrapperEl.scrollTo({[t]:l}),f(l,s)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[t]:l})}),a.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=a.requestAnimationFrame(h)};h()}function $e(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function ae(e,s=""){const t=q(),a=[...e.children];return t.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),s?a.filter(i=>i.matches(s)):a}function bs(e,s){const t=[s];for(;t.length>0;){const a=t.shift();if(e===a)return!0;t.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function ys(e,s){const t=q();let a=s.contains(e);return!a&&t.HTMLSlotElement&&s instanceof HTMLSlotElement&&(a=[...s.assignedElements()].includes(e),a||(a=bs(e,s))),a}function dt(e){try{console.warn(e);return}catch{}}function ue(e,s=[]){const t=document.createElement(e);return t.classList.add(...Array.isArray(s)?s:xe(s)),t}function ut(e){const s=q(),t=Q(),a=e.getBoundingClientRect(),i=t.body,n=e.clientTop||i.clientTop||0,u=e.clientLeft||i.clientLeft||0,d=e===s?s.scrollY:e.scrollTop,r=e===s?s.scrollX:e.scrollLeft;return{top:a.top+d-n,left:a.left+r-u}}function Ss(e,s){const t=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;s?a.matches(s)&&t.push(a):t.push(a),e=a}return t}function Es(e,s){const t=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;s?a.matches(s)&&t.push(a):t.push(a),e=a}return t}function Me(e,s){return q().getComputedStyle(e,null).getPropertyValue(s)}function Ne(e){let s=e,t;if(s){for(t=0;(s=s.previousSibling)!==null;)s.nodeType===1&&(t+=1);return t}}function ke(e,s){const t=[];let a=e.parentElement;for(;a;)s?a.matches(s)&&t.push(a):t.push(a),a=a.parentElement;return t}function Xe(e,s){function t(a){a.target===e&&(s.call(e,a),e.removeEventListener("transitionend",t))}s&&e.addEventListener("transitionend",t)}function Et(e,s,t){const a=q();return e[s==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(s==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(s==="width"?"margin-left":"margin-bottom"))}function N(e){return(Array.isArray(e)?e:[e]).filter(s=>!!s)}function ct(e){return s=>Math.abs(s)>0&&e.browser&&e.browser.need3dFix&&Math.abs(s)%90===0?s+.001:s}function Ce(e,s=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(s):e.innerHTML=s}let pt;function Ts(){const e=q(),s=Q();return{smoothScroll:s.documentElement&&s.documentElement.style&&"scrollBehavior"in s.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&s instanceof e.DocumentTouch)}}function ka(){return pt||(pt=Ts()),pt}let ht;function xs({userAgent:e}={}){const s=ka(),t=q(),a=t.navigator.platform,i=e||t.navigator.userAgent,n={ios:!1,android:!1},u=t.screen.width,d=t.screen.height,r=i.match(/(Android);?[\s\/]+([\d.]+)?/);let f=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const h=i.match(/(iPod)(.*OS\s([\d_]+))?/),c=!f&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=a==="Win32";let l=a==="MacIntel";const o=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&l&&s.touch&&o.indexOf(`${u}x${d}`)>=0&&(f=i.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),l=!1),r&&!g&&(n.os="android",n.android=!0),(f||c||h)&&(n.os="ios",n.ios=!0),n}function $a(e={}){return ht||(ht=xs(e)),ht}let gt;function Ms(){const e=q(),s=$a();let t=!1;function a(){const d=e.navigator.userAgent.toLowerCase();return d.indexOf("safari")>=0&&d.indexOf("chrome")<0&&d.indexOf("android")<0}if(a()){const d=String(e.navigator.userAgent);if(d.includes("Version/")){const[r,f]=d.split("Version/")[1].split(" ")[0].split(".").map(h=>Number(h));t=r<16||r===16&&f<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),n=a(),u=n||i&&s.ios;return{isSafari:t||n,needPerspectiveFix:t,need3dFix:u,isWebView:i}}function Ia(){return gt||(gt=Ms()),gt}function Bs({swiper:e,on:s,emit:t}){const a=q();let i=null,n=null;const u=()=>{!e||e.destroyed||!e.initialized||(t("beforeResize"),t("resize"))},d=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(h=>{n=a.requestAnimationFrame(()=>{const{width:c,height:g}=e;let l=c,o=g;h.forEach(({contentBoxSize:p,contentRect:b,target:m})=>{m&&m!==e.el||(l=b?b.width:(p[0]||p).inlineSize,o=b?b.height:(p[0]||p).blockSize)}),(l!==c||o!==g)&&u()})}),i.observe(e.el))},r=()=>{n&&a.cancelAnimationFrame(n),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},f=()=>{!e||e.destroyed||!e.initialized||t("orientationchange")};s("init",()=>{if(e.params.resizeObserver&&typeof a.ResizeObserver<"u"){d();return}a.addEventListener("resize",u),a.addEventListener("orientationchange",f)}),s("destroy",()=>{r(),a.removeEventListener("resize",u),a.removeEventListener("orientationchange",f)})}function Ps({swiper:e,extendParams:s,on:t,emit:a}){const i=[],n=q(),u=(f,h={})=>{const c=n.MutationObserver||n.WebkitMutationObserver,g=new c(l=>{if(e.__preventObserver__)return;if(l.length===1){a("observerUpdate",l[0]);return}const o=function(){a("observerUpdate",l[0])};n.requestAnimationFrame?n.requestAnimationFrame(o):n.setTimeout(o,0)});g.observe(f,{attributes:typeof h.attributes>"u"?!0:h.attributes,childList:e.isElement||(typeof h.childList>"u"?!0:h).childList,characterData:typeof h.characterData>"u"?!0:h.characterData}),i.push(g)},d=()=>{if(e.params.observer){if(e.params.observeParents){const f=ke(e.hostEl);for(let h=0;h<f.length;h+=1)u(f[h])}u(e.hostEl,{childList:e.params.observeSlideChildren}),u(e.wrapperEl,{attributes:!1})}},r=()=>{i.forEach(f=>{f.disconnect()}),i.splice(0,i.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",d),t("destroy",r)}var Ds={on(e,s,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof s!="function")return a;const i=t?"unshift":"push";return e.split(" ").forEach(n=>{a.eventsListeners[n]||(a.eventsListeners[n]=[]),a.eventsListeners[n][i](s)}),a},once(e,s,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof s!="function")return a;function i(...n){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,s.apply(a,n)}return i.__emitterProxy=s,a.on(e,i,t)},onAny(e,s){const t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;const a=s?"unshift":"push";return t.eventsAnyListeners.indexOf(e)<0&&t.eventsAnyListeners[a](e),t},offAny(e){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsAnyListeners)return s;const t=s.eventsAnyListeners.indexOf(e);return t>=0&&s.eventsAnyListeners.splice(t,1),s},off(e,s){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||e.split(" ").forEach(a=>{typeof s>"u"?t.eventsListeners[a]=[]:t.eventsListeners[a]&&t.eventsListeners[a].forEach((i,n)=>{(i===s||i.__emitterProxy&&i.__emitterProxy===s)&&t.eventsListeners[a].splice(n,1)})}),t},emit(...e){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let t,a,i;return typeof e[0]=="string"||Array.isArray(e[0])?(t=e[0],a=e.slice(1,e.length),i=s):(t=e[0].events,a=e[0].data,i=e[0].context||s),a.unshift(i),(Array.isArray(t)?t:t.split(" ")).forEach(u=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(d=>{d.apply(i,[u,...a])}),s.eventsListeners&&s.eventsListeners[u]&&s.eventsListeners[u].forEach(d=>{d.apply(i,a)})}),s}};function As(){const e=this;let s,t;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?s=e.params.width:s=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?t=e.params.height:t=a.clientHeight,!(s===0&&e.isHorizontal()||t===0&&e.isVertical())&&(s=s-parseInt(Me(a,"padding-left")||0,10)-parseInt(Me(a,"padding-right")||0,10),t=t-parseInt(Me(a,"padding-top")||0,10)-parseInt(Me(a,"padding-bottom")||0,10),Number.isNaN(s)&&(s=0),Number.isNaN(t)&&(t=0),Object.assign(e,{width:s,height:t,size:e.isHorizontal()?s:t}))}function Ls(){const e=this;function s(P,S){return parseFloat(P.getPropertyValue(e.getDirectionLabel(S))||0)}const t=e.params,{wrapperEl:a,slidesEl:i,rtlTranslate:n,wrongRTL:u}=e,d=e.virtual&&t.virtual.enabled,r=d?e.virtual.slides.length:e.slides.length,f=ae(i,`.${e.params.slideClass}, swiper-slide`),h=d?e.virtual.slides.length:f.length;let c=[];const g=[],l=[];let o=t.slidesOffsetBefore;typeof o=="function"&&(o=t.slidesOffsetBefore.call(e));let p=t.slidesOffsetAfter;typeof p=="function"&&(p=t.slidesOffsetAfter.call(e));const b=e.snapGrid.length,m=e.slidesGrid.length,v=e.size-o-p;let C=t.spaceBetween,T=-o,M=0,D=0;if(typeof v>"u")return;typeof C=="string"&&C.indexOf("%")>=0?C=parseFloat(C.replace("%",""))/100*v:typeof C=="string"&&(C=parseFloat(C)),e.virtualSize=-C-o-p,f.forEach(P=>{n?P.style.marginLeft="":P.style.marginRight="",P.style.marginBottom="",P.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(we(a,"--swiper-centered-offset-before",""),we(a,"--swiper-centered-offset-after","")),t.cssMode&&(we(a,"--swiper-slides-offset-before",`${o}px`),we(a,"--swiper-slides-offset-after",`${p}px`));const L=t.grid&&t.grid.rows>1&&e.grid;L?e.grid.initSlides(f):e.grid&&e.grid.unsetSlides();let E;const z=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(P=>typeof t.breakpoints[P].slidesPerView<"u").length>0;for(let P=0;P<h;P+=1){E=0;const S=f[P];if(!(S&&(L&&e.grid.updateSlide(P,S,f),Me(S,"display")==="none"))){if(d&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(E=t.virtual.slidesPerViewAutoSlideSize),E&&S&&(t.roundLengths&&(E=Math.floor(E)),S.style[e.getDirectionLabel("width")]=`${E}px`);else if(t.slidesPerView==="auto"){z&&(S.style[e.getDirectionLabel("width")]="");const x=getComputedStyle(S),B=S.style.transform,w=S.style.webkitTransform;if(B&&(S.style.transform="none"),w&&(S.style.webkitTransform="none"),t.roundLengths)E=e.isHorizontal()?Et(S,"width"):Et(S,"height");else{const y=s(x,"width"),$=s(x,"padding-left"),I=s(x,"padding-right"),k=s(x,"margin-left"),H=s(x,"margin-right"),X=x.getPropertyValue("box-sizing");if(X&&X==="border-box")E=y+k+H;else{const{clientWidth:J,offsetWidth:j}=S;E=y+$+I+k+H+(j-J)}}B&&(S.style.transform=B),w&&(S.style.webkitTransform=w),t.roundLengths&&(E=Math.floor(E))}else E=(v-(t.slidesPerView-1)*C)/t.slidesPerView,t.roundLengths&&(E=Math.floor(E)),S&&(S.style[e.getDirectionLabel("width")]=`${E}px`);S&&(S.swiperSlideSize=E),l.push(E),t.centeredSlides?(T=T+E/2+M/2+C,M===0&&P!==0&&(T=T-v/2-C),P===0&&(T=T-v/2-C),Math.abs(T)<1/1e3&&(T=0),t.roundLengths&&(T=Math.floor(T)),D%t.slidesPerGroup===0&&c.push(T),g.push(T)):(t.roundLengths&&(T=Math.floor(T)),(D-Math.min(e.params.slidesPerGroupSkip,D))%e.params.slidesPerGroup===0&&c.push(T),g.push(T),T=T+E+C),e.virtualSize+=E+C,M=E,D+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+p,n&&u&&(t.effect==="slide"||t.effect==="coverflow")&&(a.style.width=`${e.virtualSize+C}px`),t.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+C}px`),L&&e.grid.updateWrapperSize(E,c),!t.centeredSlides){const P=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,S=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||P);let x=c.length;if(S){let w;if(t.slidesPerView==="auto"){w=1;let y=0;for(let $=l.length-1;$>=0&&(y+=l[$]+($<l.length-1?C:0),y<=v);$-=1)w=l.length-$}else w=Math.floor(t.slidesPerView);x=Math.max(h-w,0)}const B=[];for(let w=0;w<c.length;w+=1){let y=c[w];t.roundLengths&&(y=Math.floor(y)),S?w<=x&&B.push(y):c[w]<=e.virtualSize-v&&B.push(y)}c=B,Math.floor(e.virtualSize-v)-Math.floor(c[c.length-1])>1&&(S||c.push(e.virtualSize-v))}if(d&&t.loop){const P=l[0]+C;if(t.slidesPerGroup>1){const S=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/t.slidesPerGroup),x=P*t.slidesPerGroup;for(let B=0;B<S;B+=1)c.push(c[c.length-1]+x)}for(let S=0;S<e.virtual.slidesBefore+e.virtual.slidesAfter;S+=1)t.slidesPerGroup===1&&c.push(c[c.length-1]+P),g.push(g[g.length-1]+P),e.virtualSize+=P}if(c.length===0&&(c=[0]),C!==0){const P=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");f.filter((S,x)=>!t.cssMode||t.loop?!0:x!==f.length-1).forEach(S=>{S.style[P]=`${C}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let P=0;l.forEach(x=>{P+=x+(C||0)}),P-=C;const S=P>v?P-v:0;c=c.map(x=>x<=0?-o:x>S?S+p:x)}if(t.centerInsufficientSlides){let P=0;if(l.forEach(S=>{P+=S+(C||0)}),P-=C,P<v){const S=(v-P)/2;c.forEach((x,B)=>{c[B]=x-S}),g.forEach((x,B)=>{g[B]=x+S})}}if(Object.assign(e,{slides:f,snapGrid:c,slidesGrid:g,slidesSizesGrid:l}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){we(a,"--swiper-centered-offset-before",`${-c[0]}px`),we(a,"--swiper-centered-offset-after",`${e.size/2-l[l.length-1]/2}px`);const P=-e.snapGrid[0],S=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(x=>x+P),e.slidesGrid=e.slidesGrid.map(x=>x+S)}if(h!==r&&e.emit("slidesLengthChange"),c.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==m&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!d&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const P=`${t.containerModifierClass}backface-hidden`,S=e.el.classList.contains(P);h<=t.maxBackfaceHiddenSlides?S||e.el.classList.add(P):S&&e.el.classList.remove(P)}}function ws(e){const s=this,t=[],a=s.virtual&&s.params.virtual.enabled;let i=0,n;typeof e=="number"?s.setTransition(e):e===!0&&s.setTransition(s.params.speed);const u=d=>a?s.slides[s.getSlideIndexByData(d)]:s.slides[d];if(s.params.slidesPerView!=="auto"&&s.params.slidesPerView>1)if(s.params.centeredSlides)(s.visibleSlides||[]).forEach(d=>{t.push(d)});else for(n=0;n<Math.ceil(s.params.slidesPerView);n+=1){const d=s.activeIndex+n;if(d>s.slides.length&&!a)break;t.push(u(d))}else t.push(u(s.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]<"u"){const d=t[n].offsetHeight;i=d>i?d:i}(i||i===0)&&(s.wrapperEl.style.height=`${i}px`)}function ks(){const e=this,s=e.slides,t=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<s.length;a+=1)s[a].swiperSlideOffset=(e.isHorizontal()?s[a].offsetLeft:s[a].offsetTop)-t-e.cssOverflowAdjustment()}const Lt=(e,s,t)=>{s&&!e.classList.contains(t)?e.classList.add(t):!s&&e.classList.contains(t)&&e.classList.remove(t)};function $s(e=this&&this.translate||0){const s=this,t=s.params,{slides:a,rtlTranslate:i,snapGrid:n}=s;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&s.updateSlidesOffset();let u=-e;i&&(u=e),s.visibleSlidesIndexes=[],s.visibleSlides=[];let d=t.spaceBetween;typeof d=="string"&&d.indexOf("%")>=0?d=parseFloat(d.replace("%",""))/100*s.size:typeof d=="string"&&(d=parseFloat(d));for(let r=0;r<a.length;r+=1){const f=a[r];let h=f.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(h-=a[0].swiperSlideOffset);const c=(u+(t.centeredSlides?s.minTranslate():0)-h)/(f.swiperSlideSize+d),g=(u-n[0]+(t.centeredSlides?s.minTranslate():0)-h)/(f.swiperSlideSize+d),l=-(u-h),o=l+s.slidesSizesGrid[r],p=l>=0&&l<=s.size-s.slidesSizesGrid[r],b=l>=0&&l<s.size-1||o>1&&o<=s.size||l<=0&&o>=s.size;b&&(s.visibleSlides.push(f),s.visibleSlidesIndexes.push(r)),Lt(f,b,t.slideVisibleClass),Lt(f,p,t.slideFullyVisibleClass),f.progress=i?-c:c,f.originalProgress=i?-g:g}}function Is(e){const s=this;if(typeof e>"u"){const h=s.rtlTranslate?-1:1;e=s&&s.translate&&s.translate*h||0}const t=s.params,a=s.maxTranslate()-s.minTranslate();let{progress:i,isBeginning:n,isEnd:u,progressLoop:d}=s;const r=n,f=u;if(a===0)i=0,n=!0,u=!0;else{i=(e-s.minTranslate())/a;const h=Math.abs(e-s.minTranslate())<1,c=Math.abs(e-s.maxTranslate())<1;n=h||i<=0,u=c||i>=1,h&&(i=0),c&&(i=1)}if(t.loop){const h=s.getSlideIndexByData(0),c=s.getSlideIndexByData(s.slides.length-1),g=s.slidesGrid[h],l=s.slidesGrid[c],o=s.slidesGrid[s.slidesGrid.length-1],p=Math.abs(e);p>=g?d=(p-g)/o:d=(p+o-l)/o,d>1&&(d-=1)}Object.assign(s,{progress:i,progressLoop:d,isBeginning:n,isEnd:u}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&s.updateSlidesProgress(e),n&&!r&&s.emit("reachBeginning toEdge"),u&&!f&&s.emit("reachEnd toEdge"),(r&&!n||f&&!u)&&s.emit("fromEdge"),s.emit("progress",i)}const vt=(e,s,t)=>{s&&!e.classList.contains(t)?e.classList.add(t):!s&&e.classList.contains(t)&&e.classList.remove(t)};function zs(){const e=this,{slides:s,params:t,slidesEl:a,activeIndex:i}=e,n=e.virtual&&t.virtual.enabled,u=e.grid&&t.grid&&t.grid.rows>1,d=c=>ae(a,`.${t.slideClass}${c}, swiper-slide${c}`)[0];let r,f,h;if(n)if(t.loop){let c=i-e.virtual.slidesBefore;c<0&&(c=e.virtual.slides.length+c),c>=e.virtual.slides.length&&(c-=e.virtual.slides.length),r=d(`[data-swiper-slide-index="${c}"]`)}else r=d(`[data-swiper-slide-index="${i}"]`);else u?(r=s.find(c=>c.column===i),h=s.find(c=>c.column===i+1),f=s.find(c=>c.column===i-1)):r=s[i];r&&(u||(h=Es(r,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!h&&(h=s[0]),f=Ss(r,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f===0&&(f=s[s.length-1]))),s.forEach(c=>{vt(c,c===r,t.slideActiveClass),vt(c,c===h,t.slideNextClass),vt(c,c===f,t.slidePrevClass)}),e.emitSlidesClasses()}const ot=(e,s)=>{if(!e||e.destroyed||!e.params)return;const t=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=s.closest(t());if(a){let i=a.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(a.shadowRoot?i=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(i=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&!i.lazyPreloaderManaged&&i.remove())})),i&&!i.lazyPreloaderManaged&&i.remove()}},Ct=(e,s)=>{if(!e.slides[s])return;const t=e.slides[s].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Tt=e=>{if(!e||e.destroyed||!e.params)return;let s=e.params.lazyPreloadPrevNext;const t=e.slides.length;if(!t||!s||s<0)return;s=Math.min(s,t);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const u=i,d=[u-s];d.push(...Array.from({length:s}).map((r,f)=>u+a+f)),e.slides.forEach((r,f)=>{d.includes(r.column)&&Ct(e,f)});return}const n=i+a-1;if(e.params.rewind||e.params.loop)for(let u=i-s;u<=n+s;u+=1){const d=(u%t+t)%t;(d<i||d>n)&&Ct(e,d)}else for(let u=Math.max(i-s,0);u<=Math.min(n+s,t-1);u+=1)u!==i&&(u>n||u<i)&&Ct(e,u)};function _s(e){const{slidesGrid:s,params:t}=e,a=e.rtlTranslate?e.translate:-e.translate;let i;for(let n=0;n<s.length;n+=1)typeof s[n+1]<"u"?a>=s[n]&&a<s[n+1]-(s[n+1]-s[n])/2?i=n:a>=s[n]&&a<s[n+1]&&(i=n+1):a>=s[n]&&(i=n);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Os(e){const s=this,t=s.rtlTranslate?s.translate:-s.translate,{snapGrid:a,params:i,activeIndex:n,realIndex:u,snapIndex:d}=s;let r=e,f;const h=l=>{let o=l-s.virtual.slidesBefore;return o<0&&(o=s.virtual.slides.length+o),o>=s.virtual.slides.length&&(o-=s.virtual.slides.length),o};if(typeof r>"u"&&(r=_s(s)),a.indexOf(t)>=0)f=a.indexOf(t);else{const l=Math.min(i.slidesPerGroupSkip,r);f=l+Math.floor((r-l)/i.slidesPerGroup)}if(f>=a.length&&(f=a.length-1),r===n&&!s.params.loop){f!==d&&(s.snapIndex=f,s.emit("snapIndexChange"));return}if(r===n&&s.params.loop&&s.virtual&&s.params.virtual.enabled){s.realIndex=h(r);return}const c=s.grid&&i.grid&&i.grid.rows>1;let g;if(s.virtual&&i.virtual.enabled)i.loop?g=h(r):g=r;else if(c){const l=s.slides.find(p=>p.column===r);let o=parseInt(l.getAttribute("data-swiper-slide-index"),10);Number.isNaN(o)&&(o=Math.max(s.slides.indexOf(l),0)),g=Math.floor(o/i.grid.rows)}else if(s.slides[r]){const l=s.slides[r].getAttribute("data-swiper-slide-index");l?g=parseInt(l,10):g=r}else g=r;Object.assign(s,{previousSnapIndex:d,snapIndex:f,previousRealIndex:u,realIndex:g,previousIndex:n,activeIndex:r}),s.initialized&&Tt(s),s.emit("activeIndexChange"),s.emit("snapIndexChange"),(s.initialized||s.params.runCallbacksOnInit)&&(u!==g&&s.emit("realIndexChange"),s.emit("slideChange"))}function Fs(e,s){const t=this,a=t.params;let i=e.closest(`.${a.slideClass}, swiper-slide`);!i&&t.isElement&&s&&s.length>1&&s.includes(e)&&[...s.slice(s.indexOf(e)+1,s.length)].forEach(d=>{!i&&d.matches&&d.matches(`.${a.slideClass}, swiper-slide`)&&(i=d)});let n=!1,u;if(i){for(let d=0;d<t.slides.length;d+=1)if(t.slides[d]===i){n=!0,u=d;break}}if(i&&n)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=u;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}a.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Gs={updateSize:As,updateSlides:Ls,updateAutoHeight:ws,updateSlidesOffset:ks,updateSlidesProgress:$s,updateProgress:Is,updateSlidesClasses:zs,updateActiveIndex:Os,updateClickedSlide:Fs};function Hs(e=this.isHorizontal()?"x":"y"){const s=this,{params:t,rtlTranslate:a,translate:i,wrapperEl:n}=s;if(t.virtualTranslate)return a?-i:i;if(t.cssMode)return i;let u=St(n,e);return u+=s.cssOverflowAdjustment(),a&&(u=-u),u||0}function Rs(e,s){const t=this,{rtlTranslate:a,params:i,wrapperEl:n,progress:u}=t;let d=0,r=0;const f=0;t.isHorizontal()?d=a?-e:e:r=e,i.roundLengths&&(d=Math.floor(d),r=Math.floor(r)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?d:r,i.cssMode?n[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-d:-r:i.virtualTranslate||(t.isHorizontal()?d-=t.cssOverflowAdjustment():r-=t.cssOverflowAdjustment(),n.style.transform=`translate3d(${d}px, ${r}px, ${f}px)`);let h;const c=t.maxTranslate()-t.minTranslate();c===0?h=0:h=(e-t.minTranslate())/c,h!==u&&t.updateProgress(e),t.emit("setTranslate",t.translate,s)}function Vs(){return-this.snapGrid[0]}function Xs(){return-this.snapGrid[this.snapGrid.length-1]}function Ns(e=0,s=this.params.speed,t=!0,a=!0,i){const n=this,{params:u,wrapperEl:d}=n;if(n.animating&&u.preventInteractionOnTransition)return!1;const r=n.minTranslate(),f=n.maxTranslate();let h;if(a&&e>r?h=r:a&&e<f?h=f:h=e,n.updateProgress(h),u.cssMode){const c=n.isHorizontal();if(s===0)d[c?"scrollLeft":"scrollTop"]=-h;else{if(!n.support.smoothScroll)return wa({swiper:n,targetPosition:-h,side:c?"left":"top"}),!0;d.scrollTo({[c?"left":"top"]:-h,behavior:"smooth"})}return!0}return s===0?(n.setTransition(0),n.setTranslate(h),t&&(n.emit("beforeTransitionStart",s,i),n.emit("transitionEnd"))):(n.setTransition(s),n.setTranslate(h),t&&(n.emit("beforeTransitionStart",s,i),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(g){!n||n.destroyed||g.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,t&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Ys={getTranslate:Hs,setTranslate:Rs,minTranslate:Vs,maxTranslate:Xs,translateTo:Ns};function Ws(e,s){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${e}ms`,t.wrapperEl.style.transitionDelay=e===0?"0ms":""),t.emit("setTransition",e,s)}function za({swiper:e,runCallbacks:s,direction:t,step:a}){const{activeIndex:i,previousIndex:n}=e;let u=t;u||(i>n?u="next":i<n?u="prev":u="reset"),e.emit(`transition${a}`),s&&u==="reset"?e.emit(`slideResetTransition${a}`):s&&i!==n&&(e.emit(`slideChangeTransition${a}`),u==="next"?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`))}function qs(e=!0,s){const t=this,{params:a}=t;a.cssMode||(a.autoHeight&&t.updateAutoHeight(),za({swiper:t,runCallbacks:e,direction:s,step:"Start"}))}function js(e=!0,s){const t=this,{params:a}=t;t.animating=!1,!a.cssMode&&(t.setTransition(0),za({swiper:t,runCallbacks:e,direction:s,step:"End"}))}var Us={setTransition:Ws,transitionStart:qs,transitionEnd:js};function Ks(e=0,s,t=!0,a,i){typeof e=="string"&&(e=parseInt(e,10));const n=this;let u=e;u<0&&(u=0);const{params:d,snapGrid:r,slidesGrid:f,previousIndex:h,activeIndex:c,rtlTranslate:g,wrapperEl:l,enabled:o}=n;if(!o&&!a&&!i||n.destroyed||n.animating&&d.preventInteractionOnTransition)return!1;typeof s>"u"&&(s=n.params.speed);const p=Math.min(n.params.slidesPerGroupSkip,u);let b=p+Math.floor((u-p)/n.params.slidesPerGroup);b>=r.length&&(b=r.length-1);const m=-r[b];if(d.normalizeSlideIndex)for(let L=0;L<f.length;L+=1){const E=-Math.floor(m*100),z=Math.floor(f[L]*100),P=Math.floor(f[L+1]*100);typeof f[L+1]<"u"?E>=z&&E<P-(P-z)/2?u=L:E>=z&&E<P&&(u=L+1):E>=z&&(u=L)}if(n.initialized&&u!==c&&(!n.allowSlideNext&&(g?m>n.translate&&m>n.minTranslate():m<n.translate&&m<n.minTranslate())||!n.allowSlidePrev&&m>n.translate&&m>n.maxTranslate()&&(c||0)!==u))return!1;u!==(h||0)&&t&&n.emit("beforeSlideChangeStart"),n.updateProgress(m);let v;u>c?v="next":u<c?v="prev":v="reset";const C=n.virtual&&n.params.virtual.enabled;if(!(C&&i)&&(g&&-m===n.translate||!g&&m===n.translate))return n.updateActiveIndex(u),d.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),d.effect!=="slide"&&n.setTranslate(m),v!=="reset"&&(n.transitionStart(t,v),n.transitionEnd(t,v)),!1;if(d.cssMode){const L=n.isHorizontal(),E=g?m:-m;if(s===0)C&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),C&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{l[L?"scrollLeft":"scrollTop"]=E})):l[L?"scrollLeft":"scrollTop"]=E,C&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1});else{if(!n.support.smoothScroll)return wa({swiper:n,targetPosition:E,side:L?"left":"top"}),!0;l.scrollTo({[L?"left":"top"]:E,behavior:"smooth"})}return!0}const D=Ia().isSafari;return C&&!i&&D&&n.isElement&&n.virtual.update(!1,!1,u),n.setTransition(s),n.setTranslate(m),n.updateActiveIndex(u),n.updateSlidesClasses(),n.emit("beforeTransitionStart",s,a),n.transitionStart(t,v),s===0?n.transitionEnd(t,v):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(E){!n||n.destroyed||E.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,v))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function Zs(e=0,s,t=!0,a){typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof s>"u"&&(s=i.params.speed);const n=i.grid&&i.params.grid&&i.params.grid.rows>1;let u=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)u=u+i.virtual.slidesBefore;else{let d;if(n){const p=u*i.params.grid.rows;d=i.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===p).column}else d=i.getSlideIndexByData(u);const r=n?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:f,slidesOffsetBefore:h,slidesOffsetAfter:c}=i.params,g=f||!!h||!!c;let l=i.params.slidesPerView;l==="auto"?l=i.slidesPerViewDynamic():(l=Math.ceil(parseFloat(i.params.slidesPerView,10)),g&&l%2===0&&(l=l+1));let o=r-d<l;if(g&&(o=o||d<Math.ceil(l/2)),a&&g&&i.params.slidesPerView!=="auto"&&!n&&(o=!1),o){const p=g?d<i.activeIndex?"prev":"next":d-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?d+1:d-r+1,slideRealIndex:p==="next"?i.realIndex:void 0})}if(n){const p=u*i.params.grid.rows;u=i.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===p).column}else u=i.getSlideIndexByData(u)}return requestAnimationFrame(()=>{i.slideTo(u,s,t,a)}),i}function Qs(e,s=!0,t){const a=this,{enabled:i,params:n,animating:u}=a;if(!i||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let d=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(d=Math.max(a.slidesPerViewDynamic("current",!0),1));const r=a.activeIndex<n.slidesPerGroupSkip?1:d,f=a.virtual&&n.virtual.enabled;if(n.loop){if(u&&!f&&n.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+r,e,s,t)}),!0}return n.rewind&&a.isEnd?a.slideTo(0,e,s,t):a.slideTo(a.activeIndex+r,e,s,t)}function Js(e,s=!0,t){const a=this,{params:i,snapGrid:n,slidesGrid:u,rtlTranslate:d,enabled:r,animating:f}=a;if(!r||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const h=a.virtual&&i.virtual.enabled;if(i.loop){if(f&&!h&&i.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const c=d?a.translate:-a.translate;function g(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const l=g(c),o=n.map(v=>g(v)),p=i.freeMode&&i.freeMode.enabled;let b=n[o.indexOf(l)-1];if(typeof b>"u"&&(i.cssMode||p)){let v;n.forEach((C,T)=>{l>=C&&(v=T)}),typeof v<"u"&&(b=p?n[v]:n[v>0?v-1:v])}let m=0;if(typeof b<"u"&&(m=u.indexOf(b),m<0&&(m=a.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const v=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(v,e,s,t)}else if(i.loop&&a.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{a.slideTo(m,e,s,t)}),!0;return a.slideTo(m,e,s,t)}function en(e,s=!0,t){const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,s,t)}function tn(e,s=!0,t,a=.5){const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let n=i.activeIndex;const u=Math.min(i.params.slidesPerGroupSkip,n),d=u+Math.floor((n-u)/i.params.slidesPerGroup),r=i.rtlTranslate?i.translate:-i.translate;if(r>=i.snapGrid[d]){const f=i.snapGrid[d],h=i.snapGrid[d+1];r-f>(h-f)*a&&(n+=i.params.slidesPerGroup)}else{const f=i.snapGrid[d-1],h=i.snapGrid[d];r-f<=(h-f)*a&&(n-=i.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,i.slidesGrid.length-1),i.slideTo(n,e,s,t)}function an(){const e=this;if(e.destroyed)return;const{params:s,slidesEl:t}=e,a=s.slidesPerView==="auto"?e.slidesPerViewDynamic():s.slidesPerView;let i=e.getSlideIndexWhenGrid(e.clickedIndex),n;const u=e.isElement?"swiper-slide":`.${s.slideClass}`,d=e.grid&&e.params.grid&&e.params.grid.rows>1;if(s.loop){if(e.animating)return;n=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),s.centeredSlides?e.slideToLoop(n):i>(d?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),i=e.getSlideIndex(ae(t,`${u}[data-swiper-slide-index="${n}"]`)[0]),Oe(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var sn={slideTo:Ks,slideToLoop:Zs,slideNext:Qs,slidePrev:Js,slideReset:en,slideToClosest:tn,slideToClickedSlide:an};function nn(e,s){const t=this,{params:a,slidesEl:i}=t;if(!a.loop||t.virtual&&t.params.virtual.enabled)return;const n=()=>{ae(i,`.${a.slideClass}, swiper-slide`).forEach((o,p)=>{o.setAttribute("data-swiper-slide-index",p)})},u=()=>{const l=ae(i,`.${a.slideBlankClass}`);l.forEach(o=>{o.remove()}),l.length>0&&(t.recalcSlides(),t.updateSlides())},d=t.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||d)&&u();const r=a.slidesPerGroup*(d?a.grid.rows:1),f=t.slides.length%r!==0,h=d&&t.slides.length%a.grid.rows!==0,c=l=>{for(let o=0;o<l;o+=1){const p=t.isElement?ue("swiper-slide",[a.slideBlankClass]):ue("div",[a.slideClass,a.slideBlankClass]);t.slidesEl.append(p)}};if(f){if(a.loopAddBlankSlides){const l=r-t.slides.length%r;c(l),t.recalcSlides(),t.updateSlides()}else dt("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(h){if(a.loopAddBlankSlides){const l=a.grid.rows-t.slides.length%a.grid.rows;c(l),t.recalcSlides(),t.updateSlides()}else dt("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();const g=a.centeredSlides||!!a.slidesOffsetBefore||!!a.slidesOffsetAfter;t.loopFix({slideRealIndex:e,direction:g?void 0:"next",initial:s})}function ln({slideRealIndex:e,slideTo:s=!0,direction:t,setTranslate:a,activeSlideIndex:i,initial:n,byController:u,byMousewheel:d}={}){const r=this;if(!r.params.loop)return;r.emit("beforeLoopFix");const{slides:f,allowSlidePrev:h,allowSlideNext:c,slidesEl:g,params:l}=r,{centeredSlides:o,slidesOffsetBefore:p,slidesOffsetAfter:b,initialSlide:m}=l,v=o||!!p||!!b;if(r.allowSlidePrev=!0,r.allowSlideNext=!0,r.virtual&&l.virtual.enabled){s&&(!v&&r.snapIndex===0?r.slideTo(r.virtual.slides.length,0,!1,!0):v&&r.snapIndex<l.slidesPerView?r.slideTo(r.virtual.slides.length+r.snapIndex,0,!1,!0):r.snapIndex===r.snapGrid.length-1&&r.slideTo(r.virtual.slidesBefore,0,!1,!0)),r.allowSlidePrev=h,r.allowSlideNext=c,r.emit("loopFix");return}let C=l.slidesPerView;C==="auto"?C=r.slidesPerViewDynamic():(C=Math.ceil(parseFloat(l.slidesPerView,10)),v&&C%2===0&&(C=C+1));const T=l.slidesPerGroupAuto?C:l.slidesPerGroup;let M=v?Math.max(T,Math.ceil(C/2)):T;M%T!==0&&(M+=T-M%T),M+=l.loopAdditionalSlides,r.loopedSlides=M;const D=r.grid&&l.grid&&l.grid.rows>1;f.length<C+M||r.params.effect==="cards"&&f.length<C+M*2?dt("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):D&&l.grid.fill==="row"&&dt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const L=[],E=[],z=D?Math.ceil(f.length/l.grid.rows):f.length,P=n&&z-m<C&&!v;let S=P?m:r.activeIndex;typeof i>"u"?i=r.getSlideIndex(f.find(k=>k.classList.contains(l.slideActiveClass))):S=i;const x=t==="next"||!t,B=t==="prev"||!t;let w=0,y=0;const I=(D?f[i].column:i)+(v&&typeof a>"u"?-C/2+.5:0);if(I<M){w=Math.max(M-I,T);for(let k=0;k<M-I;k+=1){const H=k-Math.floor(k/z)*z;if(D){const X=z-H-1;for(let J=f.length-1;J>=0;J-=1)f[J].column===X&&L.push(J)}else L.push(z-H-1)}}else if(I+C>z-M){y=Math.max(I-(z-M*2),T),P&&(y=Math.max(y,C-z+m+1));for(let k=0;k<y;k+=1){const H=k-Math.floor(k/z)*z;D?f.forEach((X,J)=>{X.column===H&&E.push(J)}):E.push(H)}}if(r.__preventObserver__=!0,requestAnimationFrame(()=>{r.__preventObserver__=!1}),r.params.effect==="cards"&&f.length<C+M*2&&(E.includes(i)&&E.splice(E.indexOf(i),1),L.includes(i)&&L.splice(L.indexOf(i),1)),B&&L.forEach(k=>{f[k].swiperLoopMoveDOM=!0,g.prepend(f[k]),f[k].swiperLoopMoveDOM=!1}),x&&E.forEach(k=>{f[k].swiperLoopMoveDOM=!0,g.append(f[k]),f[k].swiperLoopMoveDOM=!1}),r.recalcSlides(),l.slidesPerView==="auto"?r.updateSlides():D&&(L.length>0&&B||E.length>0&&x)&&r.slides.forEach((k,H)=>{r.grid.updateSlide(H,k,r.slides)}),l.watchSlidesProgress&&r.updateSlidesOffset(),s){if(L.length>0&&B){if(typeof e>"u"){const k=r.slidesGrid[S],X=r.slidesGrid[S+w]-k;d?r.setTranslate(r.translate-X):(r.slideTo(S+Math.ceil(w),0,!1,!0),a&&(r.touchEventsData.startTranslate=r.touchEventsData.startTranslate-X,r.touchEventsData.currentTranslate=r.touchEventsData.currentTranslate-X))}else if(a){const k=D?L.length/l.grid.rows:L.length;r.slideTo(r.activeIndex+k,0,!1,!0),r.touchEventsData.currentTranslate=r.translate}}else if(E.length>0&&x)if(typeof e>"u"){const k=r.slidesGrid[S],X=r.slidesGrid[S-y]-k;d?r.setTranslate(r.translate-X):(r.slideTo(S-y,0,!1,!0),a&&(r.touchEventsData.startTranslate=r.touchEventsData.startTranslate-X,r.touchEventsData.currentTranslate=r.touchEventsData.currentTranslate-X))}else{const k=D?E.length/l.grid.rows:E.length;r.slideTo(r.activeIndex-k,0,!1,!0)}}if(r.allowSlidePrev=h,r.allowSlideNext=c,r.controller&&r.controller.control&&!u){const k={slideRealIndex:e,direction:t,setTranslate:a,activeSlideIndex:i,byController:!0};Array.isArray(r.controller.control)?r.controller.control.forEach(H=>{!H.destroyed&&H.params.loop&&H.loopFix({...k,slideTo:H.params.slidesPerView===l.slidesPerView?s:!1})}):r.controller.control instanceof r.constructor&&r.controller.control.params.loop&&r.controller.control.loopFix({...k,slideTo:r.controller.control.params.slidesPerView===l.slidesPerView?s:!1})}r.emit("loopFix")}function rn(){const e=this,{params:s,slidesEl:t}=e;if(!s.loop||!t||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(i=>{const n=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;a[n]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),a.forEach(i=>{t.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var on={loopCreate:nn,loopFix:ln,loopDestroy:rn};function dn(e){const s=this;if(!s.params.simulateTouch||s.params.watchOverflow&&s.isLocked||s.params.cssMode)return;const t=s.params.touchEventsTarget==="container"?s.el:s.wrapperEl;s.isElement&&(s.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=e?"grabbing":"grab",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1})}function un(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var cn={setGrabCursor:dn,unsetGrabCursor:un};function fn(e,s=this){function t(a){if(!a||a===Q()||a===q())return null;a.assignedSlot&&(a=a.assignedSlot);const i=a.closest(e);return!i&&!a.getRootNode?null:i||t(a.getRootNode().host)}return t(s)}function wt(e,s,t){const a=q(),{params:i}=e,n=i.edgeSwipeDetection,u=i.edgeSwipeThreshold;return n&&(t<=u||t>=a.innerWidth-u)?n==="prevent"?(s.preventDefault(),!0):!1:!0}function mn(e){const s=this;if(s.destroyed)return;const t=Q();let a=e;a.originalEvent&&(a=a.originalEvent);const i=s.touchEventsData;if(a.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==a.pointerId)return;i.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(i.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){wt(s,a,a.targetTouches[0].pageX);return}const{params:n,touches:u,enabled:d}=s;if(!d||!n.simulateTouch&&a.pointerType==="mouse"||s.animating&&n.preventInteractionOnTransition)return;!s.animating&&n.cssMode&&n.loop&&s.loopFix();let r=a.target;if(n.touchEventsTarget==="wrapper"&&!ys(r,s.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||i.isTouched&&i.isMoved)return;const f=!!n.noSwipingClass&&n.noSwipingClass!=="",h=a.composedPath?a.composedPath():a.path;f&&a.target&&a.target.shadowRoot&&h&&(r=h[0]);const c=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,g=!!(a.target&&a.target.shadowRoot);if(n.noSwiping&&(g?fn(c,r):r.closest(c))){s.allowClick=!0;return}if(n.swipeHandler&&!r.closest(n.swipeHandler))return;u.currentX=a.pageX,u.currentY=a.pageY;const l=u.currentX,o=u.currentY;if(!wt(s,a,l))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),u.startX=l,u.startY=o,i.touchStartTime=pe(),s.allowClick=!0,s.updateSize(),s.swipeDirection=void 0,n.threshold>0&&(i.allowThresholdMove=!1);let p=!0;r.matches(i.focusableElements)&&(p=!1,r.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==r&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!r.matches(i.focusableElements))&&t.activeElement.blur();const b=p&&s.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||b)&&!r.isContentEditable&&a.preventDefault(),n.freeMode&&n.freeMode.enabled&&s.freeMode&&s.animating&&!n.cssMode&&s.freeMode.onTouchStart(),s.emit("touchStart",a)}function pn(e){const s=Q(),t=this;if(t.destroyed)return;const a=t.touchEventsData,{params:i,touches:n,rtlTranslate:u,enabled:d}=t;if(!d||!i.simulateTouch&&e.pointerType==="mouse")return;let r=e;if(r.originalEvent&&(r=r.originalEvent),r.type==="pointermove"&&(a.touchId!==null||r.pointerId!==a.pointerId))return;let f;if(r.type==="touchmove"){if(f=[...r.changedTouches].find(M=>M.identifier===a.touchId),!f||f.identifier!==a.touchId)return}else f=r;if(!a.isTouched){a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",r);return}const h=f.pageX,c=f.pageY;if(r.preventedByNestedSwiper){n.startX=h,n.startY=c;return}if(!t.allowTouchMove){r.target.matches(a.focusableElements)||(t.allowClick=!1),a.isTouched&&(Object.assign(n,{startX:h,startY:c,currentX:h,currentY:c}),a.touchStartTime=pe());return}if(i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(c<n.startY&&t.translate<=t.maxTranslate()||c>n.startY&&t.translate>=t.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(u&&(h>n.startX&&-t.translate<=t.maxTranslate()||h<n.startX&&-t.translate>=t.minTranslate()))return;if(!u&&(h<n.startX&&t.translate<=t.maxTranslate()||h>n.startX&&t.translate>=t.minTranslate()))return}if(s.activeElement&&s.activeElement.matches(a.focusableElements)&&s.activeElement!==r.target&&r.pointerType!=="mouse"&&s.activeElement.blur(),s.activeElement&&r.target===s.activeElement&&r.target.matches(a.focusableElements)){a.isMoved=!0,t.allowClick=!1;return}a.allowTouchCallbacks&&t.emit("touchMove",r),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=h,n.currentY=c;const g=n.currentX-n.startX,l=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(g**2+l**2)<t.params.threshold)return;if(typeof a.isScrolling>"u"){let M;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?a.isScrolling=!1:g*g+l*l>=25&&(M=Math.atan2(Math.abs(l),Math.abs(g))*180/Math.PI,a.isScrolling=t.isHorizontal()?M>i.touchAngle:90-M>i.touchAngle)}if(a.isScrolling&&t.emit("touchMoveOpposite",r),typeof a.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(a.startMoving=!0),a.isScrolling||r.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;t.allowClick=!1,!i.cssMode&&r.cancelable&&r.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&r.stopPropagation();let o=t.isHorizontal()?g:l,p=t.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;i.oneWayMovement&&(o=Math.abs(o)*(u?1:-1),p=Math.abs(p)*(u?1:-1)),n.diff=o,o*=i.touchRatio,u&&(o=-o,p=-p);const b=t.touchesDirection;t.swipeDirection=o>0?"prev":"next",t.touchesDirection=p>0?"prev":"next";const m=t.params.loop&&!i.cssMode,v=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!a.isMoved){if(m&&v&&t.loopFix({direction:t.swipeDirection}),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(M)}a.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",r)}if(new Date().getTime(),i._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&b!==t.touchesDirection&&m&&v&&Math.abs(o)>=1){Object.assign(n,{startX:h,startY:c,currentX:h,currentY:c,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}t.emit("sliderMove",r),a.isMoved=!0,a.currentTranslate=o+a.startTranslate;let C=!0,T=i.resistanceRatio;if(i.touchReleaseOnEdges&&(T=0),o>0?(m&&v&&a.allowThresholdMove&&a.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>t.minTranslate()&&(C=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+a.startTranslate+o)**T))):o<0&&(m&&v&&a.allowThresholdMove&&a.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),a.currentTranslate<t.maxTranslate()&&(C=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-a.startTranslate-o)**T))),C&&(r.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(a.currentTranslate=a.startTranslate),i.threshold>0)if(Math.abs(o)>i.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,a.currentTranslate=a.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{a.currentTranslate=a.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}function hn(e){const s=this;if(s.destroyed)return;const t=s.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let i;if(a.type==="touchend"||a.type==="touchcancel"){if(i=[...a.changedTouches].find(M=>M.identifier===t.touchId),!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||a.pointerId!==t.pointerId)return;i=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(s.browser.isSafari||s.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:u,touches:d,rtlTranslate:r,slidesGrid:f,enabled:h}=s;if(!h||!u.simulateTouch&&a.pointerType==="mouse")return;if(t.allowTouchCallbacks&&s.emit("touchEnd",a),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&u.grabCursor&&s.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}u.grabCursor&&t.isMoved&&t.isTouched&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!1);const c=pe(),g=c-t.touchStartTime;if(s.allowClick){const M=a.path||a.composedPath&&a.composedPath();s.updateClickedSlide(M&&M[0]||a.target,M),s.emit("tap click",a),g<300&&c-t.lastClickTime<300&&s.emit("doubleTap doubleClick",a)}if(t.lastClickTime=pe(),Oe(()=>{s.destroyed||(s.allowClick=!0)}),!t.isTouched||!t.isMoved||!s.swipeDirection||d.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let l;if(u.followFinger?l=r?s.translate:-s.translate:l=-t.currentTranslate,u.cssMode)return;if(u.freeMode&&u.freeMode.enabled){s.freeMode.onTouchEnd({currentPos:l});return}const o=l>=-s.maxTranslate()&&!s.params.loop;let p=0,b=s.slidesSizesGrid[0];for(let M=0;M<f.length;M+=M<u.slidesPerGroupSkip?1:u.slidesPerGroup){const D=M<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;typeof f[M+D]<"u"?(o||l>=f[M]&&l<f[M+D])&&(p=M,b=f[M+D]-f[M]):(o||l>=f[M])&&(p=M,b=f[f.length-1]-f[f.length-2])}let m=null,v=null;u.rewind&&(s.isBeginning?v=u.virtual&&u.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1:s.isEnd&&(m=0));const C=(l-f[p])/b,T=p<u.slidesPerGroupSkip-1?1:u.slidesPerGroup;if(g>u.longSwipesMs){if(!u.longSwipes){s.slideTo(s.activeIndex);return}s.swipeDirection==="next"&&(C>=u.longSwipesRatio?s.slideTo(u.rewind&&s.isEnd?m:p+T):s.slideTo(p)),s.swipeDirection==="prev"&&(C>1-u.longSwipesRatio?s.slideTo(p+T):v!==null&&C<0&&Math.abs(C)>u.longSwipesRatio?s.slideTo(v):s.slideTo(p))}else{if(!u.shortSwipes){s.slideTo(s.activeIndex);return}s.navigation&&(a.target===s.navigation.nextEl||a.target===s.navigation.prevEl)?a.target===s.navigation.nextEl?s.slideTo(p+T):s.slideTo(p):(s.swipeDirection==="next"&&s.slideTo(m!==null?m:p+T),s.swipeDirection==="prev"&&s.slideTo(v!==null?v:p))}}function kt(){const e=this,{params:s,el:t}=e;if(t&&t.offsetWidth===0)return;s.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:n}=e,u=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const d=u&&s.loop;if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!d){const r=u?e.virtual.slides:e.slides;e.slideTo(r.length-1,0,!1,!0)}else e.params.loop&&!u?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&n!==e.snapGrid&&e.checkOverflow()}function gn(e){const s=this;s.destroyed||s.enabled&&(s.allowClick||(s.params.preventClicks&&e.preventDefault(),s.params.preventClicksPropagation&&s.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function vn(){const e=this;if(e.destroyed)return;const{wrapperEl:s,rtlTranslate:t,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-s.scrollLeft:e.translate=-s.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const n=e.maxTranslate()-e.minTranslate();n===0?i=0:i=(e.translate-e.minTranslate())/n,i!==e.progress&&e.updateProgress(t?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Cn(e){const s=this;s.destroyed||(ot(s,e.target),!(s.params.cssMode||s.params.slidesPerView!=="auto"&&!s.params.autoHeight)&&s.update())}function bn(){const e=this;e.destroyed||e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const _a=(e,s)=>{const t=Q(),{params:a,el:i,wrapperEl:n,device:u}=e,d=!!a.nested,r=s==="on"?"addEventListener":"removeEventListener",f=s;!i||typeof i=="string"||(t[r]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:d}),i[r]("touchstart",e.onTouchStart,{passive:!1}),i[r]("pointerdown",e.onTouchStart,{passive:!1}),t[r]("touchmove",e.onTouchMove,{passive:!1,capture:d}),t[r]("pointermove",e.onTouchMove,{passive:!1,capture:d}),t[r]("touchend",e.onTouchEnd,{passive:!0}),t[r]("pointerup",e.onTouchEnd,{passive:!0}),t[r]("pointercancel",e.onTouchEnd,{passive:!0}),t[r]("touchcancel",e.onTouchEnd,{passive:!0}),t[r]("pointerout",e.onTouchEnd,{passive:!0}),t[r]("pointerleave",e.onTouchEnd,{passive:!0}),t[r]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&i[r]("click",e.onClick,!0),a.cssMode&&n[r]("scroll",e.onScroll),a.updateOnWindowResize?e[f](u.ios||u.android?"resize orientationchange observerUpdate":"resize observerUpdate",kt,!0):e[f]("observerUpdate",kt,!0),i[r]("load",e.onLoad,{capture:!0}))};function yn(){const e=this,{params:s}=e;e.onTouchStart=mn.bind(e),e.onTouchMove=pn.bind(e),e.onTouchEnd=hn.bind(e),e.onDocumentTouchStart=bn.bind(e),s.cssMode&&(e.onScroll=vn.bind(e)),e.onClick=gn.bind(e),e.onLoad=Cn.bind(e),_a(e,"on")}function Sn(){_a(this,"off")}var En={attachEvents:yn,detachEvents:Sn};const $t=(e,s)=>e.grid&&s.grid&&s.grid.rows>1;function Tn(){const e=this,{realIndex:s,initialized:t,params:a,el:i}=e,n=a.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const u=Q(),d=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",r=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:u.querySelector(a.breakpointsBase),f=e.getBreakpoint(n,d,r);if(!f||e.currentBreakpoint===f)return;const c=(f in n?n[f]:void 0)||e.originalParams,g=$t(e,a),l=$t(e,c),o=e.params.grabCursor,p=c.grabCursor,b=a.enabled;g&&!l?(i.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!g&&l&&(i.classList.add(`${a.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&a.grid.fill==="column")&&i.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),o&&!p?e.unsetGrabCursor():!o&&p&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(D=>{if(typeof c[D]>"u")return;const L=a[D]&&a[D].enabled,E=c[D]&&c[D].enabled;L&&!E&&e[D].disable(),!L&&E&&e[D].enable()});const m=c.direction&&c.direction!==a.direction,v=a.loop&&(c.slidesPerView!==a.slidesPerView||m),C=a.loop;m&&t&&e.changeDirection(),de(e.params,c);const T=e.params.enabled,M=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),b&&!T?e.disable():!b&&T&&e.enable(),e.currentBreakpoint=f,e.emit("_beforeBreakpoint",c),t&&(v?(e.loopDestroy(),e.loopCreate(s),e.updateSlides()):!C&&M?(e.loopCreate(s),e.updateSlides()):C&&!M&&e.loopDestroy()),e.emit("breakpoint",c)}function xn(e,s="window",t){if(!e||s==="container"&&!t)return;let a=!1;const i=q(),n=s==="window"?i.innerHeight:t.clientHeight,u=Object.keys(e).map(d=>{if(typeof d=="string"&&d.indexOf("@")===0){const r=parseFloat(d.substr(1));return{value:n*r,point:d}}return{value:d,point:d}});u.sort((d,r)=>parseInt(d.value,10)-parseInt(r.value,10));for(let d=0;d<u.length;d+=1){const{point:r,value:f}=u[d];s==="window"?i.matchMedia(`(min-width: ${f}px)`).matches&&(a=r):f<=t.clientWidth&&(a=r)}return a||"max"}var Mn={setBreakpoint:Tn,getBreakpoint:xn};function Bn(e,s){const t=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(i=>{a[i]&&t.push(s+i)}):typeof a=="string"&&t.push(s+a)}),t}function Pn(){const e=this,{classNames:s,params:t,rtl:a,el:i,device:n}=e,u=Bn(["initialized",t.direction,{"free-mode":e.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:a},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);s.push(...u),i.classList.add(...s),e.emitContainerClasses()}function Dn(){const e=this,{el:s,classNames:t}=e;!s||typeof s=="string"||(s.classList.remove(...t),e.emitContainerClasses())}var An={addClasses:Pn,removeClasses:Dn};function Ln(){const e=this,{isLocked:s,params:t}=e,{slidesOffsetBefore:a}=t;if(a){const i=e.slides.length-1,n=e.slidesGrid[i]+e.slidesSizesGrid[i]+a*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;t.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),t.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),s&&s!==e.isLocked&&(e.isEnd=!1),s!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var wn={checkOverflow:Ln},It={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function kn(e,s){return function(a={}){const i=Object.keys(a)[0],n=a[i];if(typeof n!="object"||n===null){de(s,a);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in n)){de(s,a);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),de(s,a)}}const bt={eventsEmitter:Ds,update:Gs,translate:Ys,transition:Us,slide:sn,loop:on,grabCursor:cn,events:En,breakpoints:Mn,checkOverflow:wn,classes:An},yt={};class oe{constructor(...s){let t,a;s.length===1&&s[0].constructor&&Object.prototype.toString.call(s[0]).slice(8,-1)==="Object"?a=s[0]:[t,a]=s,a||(a={}),a=de({},a),t&&!a.el&&(a.el=t);const i=Q();if(a.el&&typeof a.el=="string"&&i.querySelectorAll(a.el).length>1){const r=[];return i.querySelectorAll(a.el).forEach(f=>{const h=de({},a,{el:f});r.push(new oe(h))}),r}const n=this;n.__swiper__=!0,n.support=ka(),n.device=$a({userAgent:a.userAgent}),n.browser=Ia(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],a.modules&&Array.isArray(a.modules)&&a.modules.forEach(r=>{typeof r=="function"&&n.modules.indexOf(r)<0&&n.modules.push(r)});const u={};n.modules.forEach(r=>{r({params:a,swiper:n,extendParams:kn(a,u),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const d=de({},It,u);return n.params=de({},d,yt,a),n.originalParams=de({},n.params),n.passedParams=de({},a),n.params&&n.params.on&&Object.keys(n.params.on).forEach(r=>{n.on(r,n.params.on[r])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),Object.assign(n,{enabled:n.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}getDirectionLabel(s){return this.isHorizontal()?s:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[s]}getSlideIndex(s){const{slidesEl:t,params:a}=this,i=ae(t,`.${a.slideClass}, swiper-slide`),n=Ne(i[0]);return Ne(s)-n}getSlideIndexByData(s){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===s))}getSlideIndexWhenGrid(s){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?s=Math.floor(s/this.params.grid.rows):this.params.grid.fill==="row"&&(s=s%Math.ceil(this.slides.length/this.params.grid.rows))),s}recalcSlides(){const s=this,{slidesEl:t,params:a}=s;s.slides=ae(t,`.${a.slideClass}, swiper-slide`)}enable(){const s=this;s.enabled||(s.enabled=!0,s.params.grabCursor&&s.setGrabCursor(),s.emit("enable"))}disable(){const s=this;s.enabled&&(s.enabled=!1,s.params.grabCursor&&s.unsetGrabCursor(),s.emit("disable"))}setProgress(s,t){const a=this;s=Math.min(Math.max(s,0),1);const i=a.minTranslate(),u=(a.maxTranslate()-i)*s+i;a.translateTo(u,typeof t>"u"?0:t),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const s=this;if(!s.params._emitClasses||!s.el)return;const t=s.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(s.params.containerModifierClass)===0);s.emit("_containerClasses",t.join(" "))}getSlideClasses(s){const t=this;return t.destroyed?"":s.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const s=this;if(!s.params._emitClasses||!s.el)return;const t=[];s.slides.forEach(a=>{const i=s.getSlideClasses(a);t.push({slideEl:a,classNames:i}),s.emit("_slideClass",a,i)}),s.emit("_slideClasses",t)}slidesPerViewDynamic(s="current",t=!1){const a=this,{params:i,slides:n,slidesGrid:u,slidesSizesGrid:d,size:r,activeIndex:f}=a;let h=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let c=n[f]?Math.ceil(n[f].swiperSlideSize):0,g;for(let l=f+1;l<n.length;l+=1)n[l]&&!g&&(c+=Math.ceil(n[l].swiperSlideSize),h+=1,c>r&&(g=!0));for(let l=f-1;l>=0;l-=1)n[l]&&!g&&(c+=n[l].swiperSlideSize,h+=1,c>r&&(g=!0))}else if(s==="current")for(let c=f+1;c<n.length;c+=1)(t?u[c]+d[c]-u[f]<r:u[c]-u[f]<r)&&(h+=1);else for(let c=f-1;c>=0;c-=1)u[f]-u[c]<r&&(h+=1);return h}update(){const s=this;if(!s||s.destroyed)return;const{snapGrid:t,params:a}=s;a.breakpoints&&s.setBreakpoint(),[...s.el.querySelectorAll('[loading="lazy"]')].forEach(u=>{u.complete&&ot(s,u)}),s.updateSize(),s.updateSlides(),s.updateProgress(),s.updateSlidesClasses();function i(){const u=s.rtlTranslate?s.translate*-1:s.translate,d=Math.min(Math.max(u,s.maxTranslate()),s.minTranslate());s.setTranslate(d),s.updateActiveIndex(),s.updateSlidesClasses()}let n;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)i(),a.autoHeight&&s.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&s.isEnd&&!a.centeredSlides){const u=s.virtual&&a.virtual.enabled?s.virtual.slides:s.slides;n=s.slideTo(u.length-1,0,!1,!0)}else n=s.slideTo(s.activeIndex,0,!1,!0);n||i()}a.watchOverflow&&t!==s.snapGrid&&s.checkOverflow(),s.emit("update")}changeDirection(s,t=!0){const a=this,i=a.params.direction;return s||(s=i==="horizontal"?"vertical":"horizontal"),s===i||s!=="horizontal"&&s!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${i}`),a.el.classList.add(`${a.params.containerModifierClass}${s}`),a.emitContainerClasses(),a.params.direction=s,a.slides.forEach(n=>{s==="vertical"?n.style.width="":n.style.height=""}),a.emit("changeDirection"),t&&a.update()),a}changeLanguageDirection(s){const t=this;t.rtl&&s==="rtl"||!t.rtl&&s==="ltr"||(t.rtl=s==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(s){const t=this;if(t.mounted)return!0;let a=s||t.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=t,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let u=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(i()):ae(a,i())[0];return!u&&t.params.createElements&&(u=ue("div",t.params.wrapperClass),a.append(u),ae(a,`.${t.params.slideClass}`).forEach(d=>{u.append(d)})),Object.assign(t,{el:a,wrapperEl:u,slidesEl:t.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:u,hostEl:t.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||Me(a,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||Me(a,"direction")==="rtl"),wrongRTL:Me(u,"display")==="-webkit-box"}),!0}init(s){const t=this;if(t.initialized||t.mount(s)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(n=>{n.complete?ot(t,n):n.addEventListener("load",u=>{ot(t,u.target)})}),Tt(t),t.initialized=!0,Tt(t),t.emit("init"),t.emit("afterInit"),t}destroy(s=!0,t=!0){const a=this,{params:i,el:n,wrapperEl:u,slides:d}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),u&&u.removeAttribute("style"),d&&d.length&&d.forEach(r=>{r.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),r.removeAttribute("style"),r.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(r=>{a.off(r)}),s!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),gs(a)),a.destroyed=!0),null}static extendDefaults(s){de(yt,s)}static get extendedDefaults(){return yt}static get defaults(){return It}static installModule(s){oe.prototype.__modules__||(oe.prototype.__modules__=[]);const t=oe.prototype.__modules__;typeof s=="function"&&t.indexOf(s)<0&&t.push(s)}static use(s){return Array.isArray(s)?(s.forEach(t=>oe.installModule(t)),oe):(oe.installModule(s),oe)}}Object.keys(bt).forEach(e=>{Object.keys(bt[e]).forEach(s=>{oe.prototype[s]=bt[e][s]})});oe.use([Bs,Ps]);function $n({swiper:e,extendParams:s,on:t,emit:a}){s({virtual:{enabled:!1,slides:[],cache:!0,slidesPerViewAutoSlideSize:320,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let i;const n=Q();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const u=n.createElement("div");function d(l,o){const p=e.params.virtual;if(p.cache&&e.virtual.cache[o])return e.virtual.cache[o];let b;return p.renderSlide?(b=p.renderSlide.call(e,l,o),typeof b=="string"&&(Ce(u,b),b=u.children[0])):e.isElement?b=ue("swiper-slide"):b=ue("div",e.params.slideClass),b.setAttribute("data-swiper-slide-index",o),p.renderSlide||Ce(b,l),p.cache&&(e.virtual.cache[o]=b),b}function r(l,o,p){const{slidesPerGroup:b,centeredSlides:m,slidesPerView:v,loop:C,initialSlide:T}=e.params;if(o&&!C&&T>0)return;const{addSlidesBefore:M,addSlidesAfter:D,slidesPerViewAutoSlideSize:L}=e.params.virtual,{from:E,to:z,slides:P,slidesGrid:S,offset:x}=e.virtual;e.params.cssMode||e.updateActiveIndex();const B=typeof p>"u"?e.activeIndex||0:p;let w;e.rtlTranslate?w="right":w=e.isHorizontal()?"left":"top";let y;if(v==="auto")if(L){let O=e.size;O||(O=e.isHorizontal()?e.el.getBoundingClientRect().width:e.el.getBoundingClientRect().height),y=Math.max(1,Math.ceil(O/L))}else y=1;else y=v;let $,I;m?($=Math.floor(y/2)+b+D,I=Math.floor(y/2)+b+M):($=y+(b-1)+D,I=(C?y:b)+M);let k=B-I,H=B+$;C||(k=Math.max(k,0),H=Math.min(H,P.length-1));let X=(e.slidesGrid[k]||0)-(e.slidesGrid[0]||0);C&&B>=I?(k-=I,m||(X+=e.slidesGrid[0])):C&&B<I&&(k=-I,m&&(X+=e.slidesGrid[0])),Object.assign(e.virtual,{from:k,to:H,offset:X,slidesGrid:e.slidesGrid,slidesBefore:I,slidesAfter:$});function J(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),a("virtualUpdate")}if(E===k&&z===H&&!l){e.slidesGrid!==S&&X!==x&&e.slides.forEach(O=>{O.style[w]=`${X-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),a("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:X,from:k,to:H,slides:(function(){const V=[];for(let K=k;K<=H;K+=1)V.push(P[K]);return V})()}),e.params.virtual.renderExternalUpdate?J():a("virtualUpdate");return}const j=[],ge=[],_=O=>{let V=O;return O<0?V=P.length+O:V>=P.length&&(V=V-P.length),V};if(l)e.slides.filter(O=>O.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(O=>{O.remove()});else for(let O=E;O<=z;O+=1)if(O<k||O>H){const V=_(O);e.slides.filter(K=>K.matches(`.${e.params.slideClass}[data-swiper-slide-index="${V}"], swiper-slide[data-swiper-slide-index="${V}"]`)).forEach(K=>{K.remove()})}const F=C?-P.length:0,G=C?P.length*2:P.length;for(let O=F;O<G;O+=1)if(O>=k&&O<=H){const V=_(O);typeof z>"u"||l?ge.push(V):(O>z&&ge.push(V),O<E&&j.push(V))}if(ge.forEach(O=>{e.slidesEl.append(d(P[O],O))}),C)for(let O=j.length-1;O>=0;O-=1){const V=j[O];e.slidesEl.prepend(d(P[V],V))}else j.sort((O,V)=>V-O),j.forEach(O=>{e.slidesEl.prepend(d(P[O],O))});ae(e.slidesEl,".swiper-slide, swiper-slide").forEach(O=>{O.style[w]=`${X-Math.abs(e.cssOverflowAdjustment())}px`}),J()}function f(l){if(typeof l=="object"&&"length"in l)for(let o=0;o<l.length;o+=1)l[o]&&e.virtual.slides.push(l[o]);else e.virtual.slides.push(l);r(!0)}function h(l){const o=e.activeIndex;let p=o+1,b=1;if(Array.isArray(l)){for(let m=0;m<l.length;m+=1)l[m]&&e.virtual.slides.unshift(l[m]);p=o+l.length,b=l.length}else e.virtual.slides.unshift(l);if(e.params.virtual.cache){const m=e.virtual.cache,v={};Object.keys(m).forEach(C=>{const T=m[C],M=T.getAttribute("data-swiper-slide-index");M&&T.setAttribute("data-swiper-slide-index",parseInt(M,10)+b),v[parseInt(C,10)+b]=T}),e.virtual.cache=v}r(!0),e.slideTo(p,0)}function c(l){if(typeof l>"u"||l===null)return;let o=e.activeIndex;if(Array.isArray(l))for(let p=l.length-1;p>=0;p-=1)e.params.virtual.cache&&(delete e.virtual.cache[l[p]],Object.keys(e.virtual.cache).forEach(b=>{b>l&&(e.virtual.cache[b-1]=e.virtual.cache[b],e.virtual.cache[b-1].setAttribute("data-swiper-slide-index",b-1),delete e.virtual.cache[b])})),e.virtual.slides.splice(l[p],1),l[p]<o&&(o-=1),o=Math.max(o,0);else e.params.virtual.cache&&(delete e.virtual.cache[l],Object.keys(e.virtual.cache).forEach(p=>{p>l&&(e.virtual.cache[p-1]=e.virtual.cache[p],e.virtual.cache[p-1].setAttribute("data-swiper-slide-index",p-1),delete e.virtual.cache[p])})),e.virtual.slides.splice(l,1),l<o&&(o-=1),o=Math.max(o,0);r(!0),e.slideTo(o,0)}function g(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),r(!0),e.slideTo(0,0)}t("beforeInit",()=>{if(!e.params.virtual.enabled)return;let l;if(typeof e.passedParams.virtual.slides>"u"){const o=[...e.slidesEl.children].filter(p=>p.matches(`.${e.params.slideClass}, swiper-slide`));o&&o.length&&(e.virtual.slides=[...o],l=!0,o.forEach((p,b)=>{p.setAttribute("data-swiper-slide-index",b),e.virtual.cache[b]=p,p.remove()}))}l||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,r(!1,!0)}),t("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(i),i=setTimeout(()=>{r()},100)):r())}),t("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&we(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:f,prependSlide:h,removeSlide:c,removeAllSlides:g,update:r})}function In({swiper:e,extendParams:s,on:t,emit:a}){const i=Q(),n=q();e.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0,speed:void 0}});function u(f){if(!e.enabled)return;const{rtlTranslate:h}=e;let c=f;c.originalEvent&&(c=c.originalEvent);const g=c.keyCode||c.charCode,l=e.params.keyboard.pageUpDown,o=l&&g===33,p=l&&g===34,b=g===37,m=g===39,v=g===38,C=g===40;if(!e.allowSlideNext&&(e.isHorizontal()&&m||e.isVertical()&&C||p)||!e.allowSlidePrev&&(e.isHorizontal()&&b||e.isVertical()&&v||o))return!1;if(c.shiftKey||c.altKey||c.ctrlKey||c.metaKey||i.activeElement&&(i.activeElement.isContentEditable||i.activeElement.nodeName&&(i.activeElement.nodeName.toLowerCase()==="input"||i.activeElement.nodeName.toLowerCase()==="textarea")))return;if(e.params.keyboard.onlyInViewport&&(o||p||b||m||v||C)){let M=!1;if(ke(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&ke(e.el,`.${e.params.slideActiveClass}`).length===0)return;const D=e.el,L=D.clientWidth,E=D.clientHeight,z=n.innerWidth,P=n.innerHeight,S=ut(D);h&&(S.left-=D.scrollLeft);const x=[[S.left,S.top],[S.left+L,S.top],[S.left,S.top+E],[S.left+L,S.top+E]];for(let B=0;B<x.length;B+=1){const w=x[B];if(w[0]>=0&&w[0]<=z&&w[1]>=0&&w[1]<=P){if(w[0]===0&&w[1]===0)continue;M=!0}}if(!M)return}const T=e.params.keyboard.speed;e.isHorizontal()?((o||p||b||m)&&(c.preventDefault?c.preventDefault():c.returnValue=!1),((p||m)&&!h||(o||b)&&h)&&e.slideNext(T),((o||b)&&!h||(p||m)&&h)&&e.slidePrev(T)):((o||p||v||C)&&(c.preventDefault?c.preventDefault():c.returnValue=!1),(p||C)&&e.slideNext(T),(o||v)&&e.slidePrev(T)),a("keyPress",g)}function d(){e.keyboard.enabled||(i.addEventListener("keydown",u),e.keyboard.enabled=!0)}function r(){e.keyboard.enabled&&(i.removeEventListener("keydown",u),e.keyboard.enabled=!1)}t("init",()=>{e.params.keyboard.enabled&&d()}),t("destroy",()=>{e.keyboard.enabled&&r()}),Object.assign(e.keyboard,{enable:d,disable:r})}function zn({swiper:e,extendParams:s,on:t,emit:a}){const i=q();s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),e.mousewheel={enabled:!1};let n,u=pe(),d;const r=[];function f(v){let D=0,L=0,E=0,z=0;return"detail"in v&&(L=v.detail),"wheelDelta"in v&&(L=-v.wheelDelta/120),"wheelDeltaY"in v&&(L=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(D=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(D=L,L=0),E=D*10,z=L*10,"deltaY"in v&&(z=v.deltaY),"deltaX"in v&&(E=v.deltaX),v.shiftKey&&!E&&(E=z,z=0),(E||z)&&v.deltaMode&&(v.deltaMode===1?(E*=40,z*=40):(E*=800,z*=800)),E&&!D&&(D=E<1?-1:1),z&&!L&&(L=z<1?-1:1),{spinX:D,spinY:L,pixelX:E,pixelY:z}}function h(){e.enabled&&(e.mouseEntered=!0)}function c(){e.enabled&&(e.mouseEntered=!1)}function g(v){return e.params.mousewheel.thresholdDelta&&v.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&pe()-u<e.params.mousewheel.thresholdTime?!1:v.delta>=6&&pe()-u<60?!0:(v.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),a("scroll",v.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),a("scroll",v.raw)),u=new i.Date().getTime(),!1)}function l(v){const C=e.params.mousewheel;if(v.direction<0){if(e.isEnd&&!e.params.loop&&C.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&C.releaseOnEdges)return!0;return!1}function o(v){let C=v,T=!0;if(!e.enabled||v.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))return;const M=e.params.mousewheel;e.params.cssMode&&C.preventDefault();let D=e.el;e.params.mousewheel.eventsTarget!=="container"&&(D=document.querySelector(e.params.mousewheel.eventsTarget));const L=D&&D.contains(C.target);if(!e.mouseEntered&&!L&&!M.releaseOnEdges)return!0;C.originalEvent&&(C=C.originalEvent);let E=0;const z=e.rtlTranslate?-1:1,P=f(C);if(M.forceToAxis)if(e.isHorizontal())if(Math.abs(P.pixelX)>Math.abs(P.pixelY))E=-P.pixelX*z;else return!0;else if(Math.abs(P.pixelY)>Math.abs(P.pixelX))E=-P.pixelY;else return!0;else E=Math.abs(P.pixelX)>Math.abs(P.pixelY)?-P.pixelX*z:-P.pixelY;if(E===0)return!0;M.invert&&(E=-E);let S=e.getTranslate()+E*M.sensitivity;if(S>=e.minTranslate()&&(S=e.minTranslate()),S<=e.maxTranslate()&&(S=e.maxTranslate()),T=e.params.loop?!0:!(S===e.minTranslate()||S===e.maxTranslate()),T&&e.params.nested&&C.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const x={time:pe(),delta:Math.abs(E),direction:Math.sign(E),raw:v};r.length>=2&&r.shift();const B=r.length?r[r.length-1]:void 0;if(r.push(x),B?(x.direction!==B.direction||x.delta>B.delta||x.time>B.time+150)&&g(x):g(x),l(x))return!0}else{const x={time:pe(),delta:Math.abs(E),direction:Math.sign(E)},B=d&&x.time<d.time+500&&x.delta<=d.delta&&x.direction===d.direction;if(!B){d=void 0;let w=e.getTranslate()+E*M.sensitivity;const y=e.isBeginning,$=e.isEnd;if(w>=e.minTranslate()&&(w=e.minTranslate()),w<=e.maxTranslate()&&(w=e.maxTranslate()),e.setTransition(0),e.setTranslate(w),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!y&&e.isBeginning||!$&&e.isEnd)&&e.updateSlidesClasses(),e.params.loop&&e.loopFix({direction:x.direction<0?"next":"prev",byMousewheel:!0}),e.params.freeMode.sticky){clearTimeout(n),n=void 0,r.length>=15&&r.shift();const I=r.length?r[r.length-1]:void 0,k=r[0];if(r.push(x),I&&(x.delta>I.delta||x.direction!==I.direction))r.splice(0);else if(r.length>=15&&x.time-k.time<500&&k.delta-x.delta>=1&&x.delta<=6){const H=E>0?.8:.2;d=x,r.splice(0),n=Oe(()=>{e.destroyed||!e.params||e.slideToClosest(e.params.speed,!0,void 0,H)},0)}n||(n=Oe(()=>{if(e.destroyed||!e.params)return;const H=.5;d=x,r.splice(0),e.slideToClosest(e.params.speed,!0,void 0,H)},500))}if(B||a("scroll",C),e.params.autoplay&&e.params.autoplay.disableOnInteraction&&e.autoplay.stop(),M.releaseOnEdges&&(w===e.minTranslate()||w===e.maxTranslate()))return!0}}return C.preventDefault?C.preventDefault():C.returnValue=!1,!1}function p(v){let C=e.el;e.params.mousewheel.eventsTarget!=="container"&&(C=document.querySelector(e.params.mousewheel.eventsTarget)),C[v]("mouseenter",h),C[v]("mouseleave",c),C[v]("wheel",o)}function b(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",o),!0):e.mousewheel.enabled?!1:(p("addEventListener"),e.mousewheel.enabled=!0,!0)}function m(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,o),!0):e.mousewheel.enabled?(p("removeEventListener"),e.mousewheel.enabled=!1,!0):!1}t("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&m(),e.params.mousewheel.enabled&&b()}),t("destroy",()=>{e.params.cssMode&&b(),e.mousewheel.enabled&&m()}),Object.assign(e.mousewheel,{enable:b,disable:m})}function Mt(e,s,t,a){return e.params.createElements&&Object.keys(a).forEach(i=>{if(!t[i]&&t.auto===!0){let n=ae(e.el,`.${a[i]}`)[0];n||(n=ue("div",a[i]),n.className=a[i],e.el.append(n)),t[i]=n,s[i]=n}}),t}const zt='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function _n({swiper:e,extendParams:s,on:t,emit:a}){s({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:zt};function i(l){let o;return l&&typeof l=="string"&&e.isElement&&(o=e.el.querySelector(l)||e.hostEl.querySelector(l),o)?o:(l&&(typeof l=="string"&&(o=[...document.querySelectorAll(l)]),e.params.uniqueNavElements&&typeof l=="string"&&o&&o.length>1&&e.el.querySelectorAll(l).length===1?o=e.el.querySelector(l):o&&o.length===1&&(o=o[0])),l&&!o?l:o)}function n(l,o){const p=e.params.navigation;l=N(l),l.forEach(b=>{b&&(b.classList[o?"add":"remove"](...p.disabledClass.split(" ")),b.tagName==="BUTTON"&&(b.disabled=o),e.params.watchOverflow&&e.enabled&&b.classList[e.isLocked?"add":"remove"](p.lockClass))})}function u(){const{nextEl:l,prevEl:o}=e.navigation;if(e.params.loop){n(o,!1),n(l,!1);return}n(o,e.isBeginning&&!e.params.rewind),n(l,e.isEnd&&!e.params.rewind)}function d(l){l.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),a("navigationPrev"))}function r(l){l.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),a("navigationNext"))}function f(){const l=e.params.navigation;if(e.params.navigation=Mt(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(l.nextEl||l.prevEl))return;let o=i(l.nextEl),p=i(l.prevEl);Object.assign(e.navigation,{nextEl:o,prevEl:p}),o=N(o),p=N(p);const b=(m,v)=>{if(m){if(l.addIcons&&m.matches(".swiper-button-next,.swiper-button-prev")&&!m.querySelector("svg")){const C=document.createElement("div");Ce(C,zt),m.appendChild(C.querySelector("svg")),C.remove()}m.addEventListener("click",v==="next"?r:d)}!e.enabled&&m&&m.classList.add(...l.lockClass.split(" "))};o.forEach(m=>b(m,"next")),p.forEach(m=>b(m,"prev"))}function h(){let{nextEl:l,prevEl:o}=e.navigation;l=N(l),o=N(o);const p=(b,m)=>{b.removeEventListener("click",m==="next"?r:d),b.classList.remove(...e.params.navigation.disabledClass.split(" "))};l.forEach(b=>p(b,"next")),o.forEach(b=>p(b,"prev"))}t("init",()=>{e.params.navigation.enabled===!1?g():(f(),u())}),t("toEdge fromEdge lock unlock",()=>{u()}),t("destroy",()=>{h()}),t("enable disable",()=>{let{nextEl:l,prevEl:o}=e.navigation;if(l=N(l),o=N(o),e.enabled){u();return}[...l,...o].filter(p=>!!p).forEach(p=>p.classList.add(e.params.navigation.lockClass))}),t("click",(l,o)=>{let{nextEl:p,prevEl:b}=e.navigation;p=N(p),b=N(b);const m=o.target;let v=b.includes(m)||p.includes(m);if(e.isElement&&!v){const C=o.path||o.composedPath&&o.composedPath();C&&(v=C.find(T=>p.includes(T)||b.includes(T)))}if(e.params.navigation.hideOnClick&&!v){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===m||e.pagination.el.contains(m)))return;let C;p.length?C=p[0].classList.contains(e.params.navigation.hiddenClass):b.length&&(C=b[0].classList.contains(e.params.navigation.hiddenClass)),a(C===!0?"navigationShow":"navigationHide"),[...p,...b].filter(T=>!!T).forEach(T=>T.classList.toggle(e.params.navigation.hiddenClass))}});const c=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),u()},g=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:c,disable:g,update:u,init:f,destroy:h})}function Se(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function On({swiper:e,extendParams:s,on:t,emit:a}){const i="swiper-pagination";s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let n,u=0;function d(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function r(m,v){const{bulletActiveClass:C}=e.params.pagination;m&&(m=m[`${v==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${C}-${v}`),m=m[`${v==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${C}-${v}-${v}`)))}function f(m,v,C){if(m=m%C,v=v%C,v===m+1)return"next";if(v===m-1)return"previous"}function h(m){const v=m.target.closest(Se(e.params.pagination.bulletClass));if(!v)return;m.preventDefault();const C=Ne(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===C)return;const T=f(e.realIndex,C,e.slides.length);T==="next"?e.slideNext():T==="previous"?e.slidePrev():e.slideToLoop(C)}else e.slideTo(C)}function c(){const m=e.rtl,v=e.params.pagination;if(d())return;let C=e.pagination.el;C=N(C);let T,M;const D=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,L=e.params.loop?Math.ceil(D/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(M=e.previousRealIndex||0,T=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(T=e.snapIndex,M=e.previousSnapIndex):(M=e.previousIndex||0,T=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let z,P,S;if(v.dynamicBullets&&(n=Et(E[0],e.isHorizontal()?"width":"height"),C.forEach(x=>{x.style[e.isHorizontal()?"width":"height"]=`${n*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&M!==void 0&&(u+=T-(M||0),u>v.dynamicMainBullets-1?u=v.dynamicMainBullets-1:u<0&&(u=0)),z=Math.max(T-u,0),P=z+(Math.min(E.length,v.dynamicMainBullets)-1),S=(P+z)/2),E.forEach(x=>{const B=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(w=>`${v.bulletActiveClass}${w}`)].map(w=>typeof w=="string"&&w.includes(" ")?w.split(" "):w).flat();x.classList.remove(...B)}),C.length>1)E.forEach(x=>{const B=Ne(x);B===T?x.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&x.setAttribute("part","bullet"),v.dynamicBullets&&(B>=z&&B<=P&&x.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),B===z&&r(x,"prev"),B===P&&r(x,"next"))});else{const x=E[T];if(x&&x.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&E.forEach((B,w)=>{B.setAttribute("part",w===T?"bullet-active":"bullet")}),v.dynamicBullets){const B=E[z],w=E[P];for(let y=z;y<=P;y+=1)E[y]&&E[y].classList.add(...`${v.bulletActiveClass}-main`.split(" "));r(B,"prev"),r(w,"next")}}if(v.dynamicBullets){const x=Math.min(E.length,v.dynamicMainBullets+4),B=(n*x-n)/2-S*n,w=m?"right":"left";E.forEach(y=>{y.style[e.isHorizontal()?w:"top"]=`${B}px`})}}C.forEach((E,z)=>{if(v.type==="fraction"&&(E.querySelectorAll(Se(v.currentClass)).forEach(P=>{P.textContent=v.formatFractionCurrent(T+1)}),E.querySelectorAll(Se(v.totalClass)).forEach(P=>{P.textContent=v.formatFractionTotal(L)})),v.type==="progressbar"){let P;v.progressbarOpposite?P=e.isHorizontal()?"vertical":"horizontal":P=e.isHorizontal()?"horizontal":"vertical";const S=(T+1)/L;let x=1,B=1;P==="horizontal"?x=S:B=S,E.querySelectorAll(Se(v.progressbarFillClass)).forEach(w=>{w.style.transform=`translate3d(0,0,0) scaleX(${x}) scaleY(${B})`,w.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(Ce(E,v.renderCustom(e,T+1,L)),z===0&&a("paginationRender",E)):(z===0&&a("paginationRender",E),a("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](v.lockClass)})}function g(){const m=e.params.pagination;if(d())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let C=e.pagination.el;C=N(C);let T="";if(m.type==="bullets"){let M=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&M>v&&(M=v);for(let D=0;D<M;D+=1)m.renderBullet?T+=m.renderBullet.call(e,D,m.bulletClass):T+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?T=m.renderFraction.call(e,m.currentClass,m.totalClass):T=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?T=m.renderProgressbar.call(e,m.progressbarFillClass):T=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],C.forEach(M=>{m.type!=="custom"&&Ce(M,T||""),m.type==="bullets"&&e.pagination.bullets.push(...M.querySelectorAll(Se(m.bulletClass)))}),m.type!=="custom"&&a("paginationRender",C[0])}function l(){e.params.pagination=Mt(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let v;typeof m.el=="string"&&e.isElement&&(v=e.el.querySelector(m.el)),!v&&typeof m.el=="string"&&(v=[...document.querySelectorAll(m.el)]),v||(v=m.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(m.el)],v.length>1&&(v=v.find(C=>ke(C,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=N(v),v.forEach(C=>{m.type==="bullets"&&m.clickable&&C.classList.add(...(m.clickableClass||"").split(" ")),C.classList.add(m.modifierClass+m.type),C.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(C.classList.add(`${m.modifierClass}${m.type}-dynamic`),u=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&C.classList.add(m.progressbarOppositeClass),m.clickable&&C.addEventListener("click",h),e.enabled||C.classList.add(m.lockClass)}))}function o(){const m=e.params.pagination;if(d())return;let v=e.pagination.el;v&&(v=N(v),v.forEach(C=>{C.classList.remove(m.hiddenClass),C.classList.remove(m.modifierClass+m.type),C.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(C.classList.remove(...(m.clickableClass||"").split(" ")),C.removeEventListener("click",h))})),e.pagination.bullets&&e.pagination.bullets.forEach(C=>C.classList.remove(...m.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:v}=e.pagination;v=N(v),v.forEach(C=>{C.classList.remove(m.horizontalClass,m.verticalClass),C.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),t("init",()=>{e.params.pagination.enabled===!1?b():(l(),g(),c())}),t("activeIndexChange",()=>{typeof e.snapIndex>"u"&&c()}),t("snapIndexChange",()=>{c()}),t("snapGridLengthChange",()=>{g(),c()}),t("destroy",()=>{o()}),t("enable disable",()=>{let{el:m}=e.pagination;m&&(m=N(m),m.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),t("lock unlock",()=>{c()}),t("click",(m,v)=>{const C=v.target,T=N(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&T&&T.length>0&&!C.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&C===e.navigation.nextEl||e.navigation.prevEl&&C===e.navigation.prevEl))return;const M=T[0].classList.contains(e.params.pagination.hiddenClass);a(M===!0?"paginationShow":"paginationHide"),T.forEach(D=>D.classList.toggle(e.params.pagination.hiddenClass))}});const p=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=N(m),m.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),l(),g(),c()},b=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=N(m),m.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),o()};Object.assign(e.pagination,{enable:p,disable:b,render:g,update:c,init:l,destroy:o})}function Fn({swiper:e,extendParams:s,on:t,emit:a}){const i=Q();let n=!1,u=null,d=null,r,f,h,c;s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function g(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:S,rtlTranslate:x}=e,{dragEl:B,el:w}=S,y=e.params.scrollbar,$=e.params.loop?e.progressLoop:e.progress;let I=f,k=(h-f)*$;x?(k=-k,k>0?(I=f-k,k=0):-k+f>h&&(I=h+k)):k<0?(I=f+k,k=0):k+f>h&&(I=h-k),e.isHorizontal()?(B.style.transform=`translate3d(${k}px, 0, 0)`,B.style.width=`${I}px`):(B.style.transform=`translate3d(0px, ${k}px, 0)`,B.style.height=`${I}px`),y.hide&&(clearTimeout(u),w.style.opacity=1,u=setTimeout(()=>{w.style.opacity=0,w.style.transitionDuration="400ms"},1e3))}function l(S){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${S}ms`)}function o(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:S}=e,{dragEl:x,el:B}=S;x.style.width="",x.style.height="",h=e.isHorizontal()?B.offsetWidth:B.offsetHeight,c=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?f=h*c:f=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?x.style.width=`${f}px`:x.style.height=`${f}px`,c>=1?B.style.display="none":B.style.display="",e.params.scrollbar.hide&&(B.style.opacity=0),e.params.watchOverflow&&e.enabled&&S.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function p(S){return e.isHorizontal()?S.clientX:S.clientY}function b(S){const{scrollbar:x,rtlTranslate:B}=e,{el:w}=x;let y;y=(p(S)-ut(w)[e.isHorizontal()?"left":"top"]-(r!==null?r:f/2))/(h-f),y=Math.max(Math.min(y,1),0),B&&(y=1-y);const $=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*y;e.updateProgress($),e.setTranslate($),e.updateActiveIndex(),e.updateSlidesClasses()}function m(S){const x=e.params.scrollbar,{scrollbar:B,wrapperEl:w}=e,{el:y,dragEl:$}=B;n=!0,r=S.target===$?p(S)-S.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,S.preventDefault(),S.stopPropagation(),w.style.transitionDuration="100ms",$.style.transitionDuration="100ms",b(S),clearTimeout(d),y.style.transitionDuration="0ms",x.hide&&(y.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),a("scrollbarDragStart",S)}function v(S){const{scrollbar:x,wrapperEl:B}=e,{el:w,dragEl:y}=x;n&&(S.preventDefault&&S.cancelable?S.preventDefault():S.returnValue=!1,b(S),B.style.transitionDuration="0ms",w.style.transitionDuration="0ms",y.style.transitionDuration="0ms",a("scrollbarDragMove",S))}function C(S){const x=e.params.scrollbar,{scrollbar:B,wrapperEl:w}=e,{el:y}=B;n&&(n=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",w.style.transitionDuration=""),x.hide&&(clearTimeout(d),d=Oe(()=>{y.style.opacity=0,y.style.transitionDuration="400ms"},1e3)),a("scrollbarDragEnd",S),x.snapOnRelease&&e.slideToClosest())}function T(S){const{scrollbar:x,params:B}=e,w=x.el;if(!w)return;const y=w,$=B.passiveListeners?{passive:!1,capture:!1}:!1,I=B.passiveListeners?{passive:!0,capture:!1}:!1;if(!y)return;const k=S==="on"?"addEventListener":"removeEventListener";y[k]("pointerdown",m,$),i[k]("pointermove",v,$),i[k]("pointerup",C,I)}function M(){!e.params.scrollbar.el||!e.scrollbar.el||T("on")}function D(){!e.params.scrollbar.el||!e.scrollbar.el||T("off")}function L(){const{scrollbar:S,el:x}=e;e.params.scrollbar=Mt(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const B=e.params.scrollbar;if(!B.el)return;let w;if(typeof B.el=="string"&&e.isElement&&(w=e.el.querySelector(B.el)),!w&&typeof B.el=="string"){if(w=i.querySelectorAll(B.el),!w.length)return}else w||(w=B.el);e.params.uniqueNavElements&&typeof B.el=="string"&&w.length>1&&x.querySelectorAll(B.el).length===1&&(w=x.querySelector(B.el)),w.length>0&&(w=w[0]),w.classList.add(e.isHorizontal()?B.horizontalClass:B.verticalClass);let y;w&&(y=w.querySelector(Se(e.params.scrollbar.dragClass)),y||(y=ue("div",e.params.scrollbar.dragClass),w.append(y))),Object.assign(S,{el:w,dragEl:y}),B.draggable&&M(),w&&w.classList[e.enabled?"remove":"add"](...xe(e.params.scrollbar.lockClass))}function E(){const S=e.params.scrollbar,x=e.scrollbar.el;x&&x.classList.remove(...xe(e.isHorizontal()?S.horizontalClass:S.verticalClass)),D()}t("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const S=e.params.scrollbar;let{el:x}=e.scrollbar;x=N(x),x.forEach(B=>{B.classList.remove(S.horizontalClass,S.verticalClass),B.classList.add(e.isHorizontal()?S.horizontalClass:S.verticalClass)})}),t("init",()=>{e.params.scrollbar.enabled===!1?P():(L(),o(),g())}),t("update resize observerUpdate lock unlock changeDirection",()=>{o()}),t("setTranslate",()=>{g()}),t("setTransition",(S,x)=>{l(x)}),t("enable disable",()=>{const{el:S}=e.scrollbar;S&&S.classList[e.enabled?"remove":"add"](...xe(e.params.scrollbar.lockClass))}),t("destroy",()=>{E()});const z=()=>{e.el.classList.remove(...xe(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...xe(e.params.scrollbar.scrollbarDisabledClass)),L(),o(),g()},P=()=>{e.el.classList.add(...xe(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...xe(e.params.scrollbar.scrollbarDisabledClass)),E()};Object.assign(e.scrollbar,{enable:z,disable:P,updateSize:o,setTranslate:g,init:L,destroy:E})}function Gn({swiper:e,extendParams:s,on:t}){s({parallax:{enabled:!1}});const a="[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",i=(d,r)=>{const{rtl:f}=e,h=f?-1:1,c=d.getAttribute("data-swiper-parallax")||"0";let g=d.getAttribute("data-swiper-parallax-x"),l=d.getAttribute("data-swiper-parallax-y");const o=d.getAttribute("data-swiper-parallax-scale"),p=d.getAttribute("data-swiper-parallax-opacity"),b=d.getAttribute("data-swiper-parallax-rotate");if(g||l?(g=g||"0",l=l||"0"):e.isHorizontal()?(g=c,l="0"):(l=c,g="0"),g.indexOf("%")>=0?g=`${parseInt(g,10)*r*h}%`:g=`${g*r*h}px`,l.indexOf("%")>=0?l=`${parseInt(l,10)*r}%`:l=`${l*r}px`,typeof p<"u"&&p!==null){const v=p-(p-1)*(1-Math.abs(r));d.style.opacity=v}let m=`translate3d(${g}, ${l}, 0px)`;if(typeof o<"u"&&o!==null){const v=o-(o-1)*(1-Math.abs(r));m+=` scale(${v})`}if(b&&typeof b<"u"&&b!==null){const v=b*r*-1;m+=` rotate(${v}deg)`}d.style.transform=m},n=()=>{const{el:d,slides:r,progress:f,snapGrid:h,isElement:c}=e,g=ae(d,a);e.isElement&&g.push(...ae(e.hostEl,a)),g.forEach(l=>{i(l,f)}),r.forEach((l,o)=>{let p=l.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(p+=Math.ceil(o/2)-f*(h.length-1)),p=Math.min(Math.max(p,-1),1),l.querySelectorAll(`${a}, [data-swiper-parallax-rotate]`).forEach(b=>{i(b,p)})})},u=(d=e.params.speed)=>{const{el:r,hostEl:f}=e,h=[...r.querySelectorAll(a)];e.isElement&&h.push(...f.querySelectorAll(a)),h.forEach(c=>{let g=parseInt(c.getAttribute("data-swiper-parallax-duration"),10)||d;d===0&&(g=0),c.style.transitionDuration=`${g}ms`})};t("beforeInit",()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),t("init",()=>{e.params.parallax.enabled&&n()}),t("setTranslate",()=>{e.params.parallax.enabled&&n()}),t("setTransition",(d,r)=>{e.params.parallax.enabled&&u(r)})}function Hn({swiper:e,extendParams:s,on:t,emit:a}){const i=q();s({zoom:{enabled:!1,limitToOriginalSize:!1,maxRatio:3,minRatio:1,panOnMouseMove:!1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let n=1,u=!1,d=!1,r={x:0,y:0};const f=-3;let h,c;const g=[],l={originX:0,originY:0,slideEl:void 0,slideWidth:void 0,slideHeight:void 0,imageEl:void 0,imageWrapEl:void 0,maxRatio:3},o={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},p={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let b=1;Object.defineProperty(e.zoom,"scale",{get(){return b},set(_){if(b!==_){const F=l.imageEl,G=l.slideEl;a("zoomChange",_,F,G)}b=_}});function m(){if(g.length<2)return 1;const _=g[0].pageX,F=g[0].pageY,G=g[1].pageX,O=g[1].pageY;return Math.sqrt((G-_)**2+(O-F)**2)}function v(){const _=e.params.zoom,F=l.imageWrapEl.getAttribute("data-swiper-zoom")||_.maxRatio;if(_.limitToOriginalSize&&l.imageEl&&l.imageEl.naturalWidth){const G=l.imageEl.naturalWidth/l.imageEl.offsetWidth;return Math.min(G,F)}return F}function C(){if(g.length<2)return{x:null,y:null};const _=l.imageEl.getBoundingClientRect();return[(g[0].pageX+(g[1].pageX-g[0].pageX)/2-_.x-i.scrollX)/n,(g[0].pageY+(g[1].pageY-g[0].pageY)/2-_.y-i.scrollY)/n]}function T(){return e.isElement?"swiper-slide":`.${e.params.slideClass}`}function M(_){const F=T();return!!(_.target.matches(F)||e.slides.filter(G=>G.contains(_.target)).length>0)}function D(_){const F=`.${e.params.zoom.containerClass}`;return!!(_.target.matches(F)||[...e.hostEl.querySelectorAll(F)].filter(G=>G.contains(_.target)).length>0)}function L(_){if(_.pointerType==="mouse"&&g.splice(0,g.length),!M(_))return;const F=e.params.zoom;if(h=!1,c=!1,g.push(_),!(g.length<2)){if(h=!0,l.scaleStart=m(),!l.slideEl){l.slideEl=_.target.closest(`.${e.params.slideClass}, swiper-slide`),l.slideEl||(l.slideEl=e.slides[e.activeIndex]);let G=l.slideEl.querySelector(`.${F.containerClass}`);if(G&&(G=G.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),l.imageEl=G,G?l.imageWrapEl=ke(l.imageEl,`.${F.containerClass}`)[0]:l.imageWrapEl=void 0,!l.imageWrapEl){l.imageEl=void 0;return}l.maxRatio=v()}if(l.imageEl){const[G,O]=C();l.originX=G,l.originY=O,l.imageEl.style.transitionDuration="0ms"}u=!0}}function E(_){if(!M(_))return;const F=e.params.zoom,G=e.zoom,O=g.findIndex(V=>V.pointerId===_.pointerId);O>=0&&(g[O]=_),!(g.length<2)&&(c=!0,l.scaleMove=m(),l.imageEl&&(G.scale=l.scaleMove/l.scaleStart*n,G.scale>l.maxRatio&&(G.scale=l.maxRatio-1+(G.scale-l.maxRatio+1)**.5),G.scale<F.minRatio&&(G.scale=F.minRatio+1-(F.minRatio-G.scale+1)**.5),l.imageEl.style.transform=`translate3d(0,0,0) scale(${G.scale})`))}function z(_){if(!M(_)||_.pointerType==="mouse"&&_.type==="pointerout")return;const F=e.params.zoom,G=e.zoom,O=g.findIndex(V=>V.pointerId===_.pointerId);O>=0&&g.splice(O,1),!(!h||!c)&&(h=!1,c=!1,l.imageEl&&(G.scale=Math.max(Math.min(G.scale,l.maxRatio),F.minRatio),l.imageEl.style.transitionDuration=`${e.params.speed}ms`,l.imageEl.style.transform=`translate3d(0,0,0) scale(${G.scale})`,n=G.scale,u=!1,G.scale>1&&l.slideEl?l.slideEl.classList.add(`${F.zoomedSlideClass}`):G.scale<=1&&l.slideEl&&l.slideEl.classList.remove(`${F.zoomedSlideClass}`),G.scale===1&&(l.originX=0,l.originY=0,l.slideEl=void 0)))}let P;function S(){e.touchEventsData.preventTouchMoveFromPointerMove=!1}function x(){clearTimeout(P),e.touchEventsData.preventTouchMoveFromPointerMove=!0,P=setTimeout(()=>{e.destroyed||S()})}function B(_){const F=e.device;if(!l.imageEl||o.isTouched)return;F.android&&_.cancelable&&_.preventDefault(),o.isTouched=!0;const G=g.length>0?g[0]:_;o.touchesStart.x=G.pageX,o.touchesStart.y=G.pageY}function w(_){const G=_.pointerType==="mouse"&&e.params.zoom.panOnMouseMove;if(!M(_)||!D(_))return;const O=e.zoom;if(!l.imageEl)return;if(!o.isTouched||!l.slideEl){G&&I(_);return}if(G){I(_);return}o.isMoved||(o.width=l.imageEl.offsetWidth||l.imageEl.clientWidth,o.height=l.imageEl.offsetHeight||l.imageEl.clientHeight,o.startX=St(l.imageWrapEl,"x")||0,o.startY=St(l.imageWrapEl,"y")||0,l.slideWidth=l.slideEl.offsetWidth,l.slideHeight=l.slideEl.offsetHeight,l.imageWrapEl.style.transitionDuration="0ms");const V=o.width*O.scale,K=o.height*O.scale;if(o.minX=Math.min(l.slideWidth/2-V/2,0),o.maxX=-o.minX,o.minY=Math.min(l.slideHeight/2-K/2,0),o.maxY=-o.minY,o.touchesCurrent.x=g.length>0?g[0].pageX:_.pageX,o.touchesCurrent.y=g.length>0?g[0].pageY:_.pageY,Math.max(Math.abs(o.touchesCurrent.x-o.touchesStart.x),Math.abs(o.touchesCurrent.y-o.touchesStart.y))>5&&(e.allowClick=!1),!o.isMoved&&!u){if(e.isHorizontal()&&(Math.floor(o.minX)===Math.floor(o.startX)&&o.touchesCurrent.x<o.touchesStart.x||Math.floor(o.maxX)===Math.floor(o.startX)&&o.touchesCurrent.x>o.touchesStart.x)){o.isTouched=!1,S();return}if(!e.isHorizontal()&&(Math.floor(o.minY)===Math.floor(o.startY)&&o.touchesCurrent.y<o.touchesStart.y||Math.floor(o.maxY)===Math.floor(o.startY)&&o.touchesCurrent.y>o.touchesStart.y)){o.isTouched=!1,S();return}}_.cancelable&&_.preventDefault(),_.stopPropagation(),x(),o.isMoved=!0;const me=(O.scale-n)/(l.maxRatio-e.params.zoom.minRatio),{originX:A,originY:R}=l;o.currentX=o.touchesCurrent.x-o.touchesStart.x+o.startX+me*(o.width-A*2),o.currentY=o.touchesCurrent.y-o.touchesStart.y+o.startY+me*(o.height-R*2),o.currentX<o.minX&&(o.currentX=o.minX+1-(o.minX-o.currentX+1)**.8),o.currentX>o.maxX&&(o.currentX=o.maxX-1+(o.currentX-o.maxX+1)**.8),o.currentY<o.minY&&(o.currentY=o.minY+1-(o.minY-o.currentY+1)**.8),o.currentY>o.maxY&&(o.currentY=o.maxY-1+(o.currentY-o.maxY+1)**.8),p.prevPositionX||(p.prevPositionX=o.touchesCurrent.x),p.prevPositionY||(p.prevPositionY=o.touchesCurrent.y),p.prevTime||(p.prevTime=Date.now()),p.x=(o.touchesCurrent.x-p.prevPositionX)/(Date.now()-p.prevTime)/2,p.y=(o.touchesCurrent.y-p.prevPositionY)/(Date.now()-p.prevTime)/2,Math.abs(o.touchesCurrent.x-p.prevPositionX)<2&&(p.x=0),Math.abs(o.touchesCurrent.y-p.prevPositionY)<2&&(p.y=0),p.prevPositionX=o.touchesCurrent.x,p.prevPositionY=o.touchesCurrent.y,p.prevTime=Date.now(),l.imageWrapEl.style.transform=`translate3d(${o.currentX}px, ${o.currentY}px,0)`}function y(){const _=e.zoom;if(g.length=0,!l.imageEl)return;if(!o.isTouched||!o.isMoved){o.isTouched=!1,o.isMoved=!1;return}o.isTouched=!1,o.isMoved=!1;let F=300,G=300;const O=p.x*F,V=o.currentX+O,K=p.y*G,ve=o.currentY+K;p.x!==0&&(F=Math.abs((V-o.currentX)/p.x)),p.y!==0&&(G=Math.abs((ve-o.currentY)/p.y));const me=Math.max(F,G);o.currentX=V,o.currentY=ve;const A=o.width*_.scale,R=o.height*_.scale;o.minX=Math.min(l.slideWidth/2-A/2,0),o.maxX=-o.minX,o.minY=Math.min(l.slideHeight/2-R/2,0),o.maxY=-o.minY,o.currentX=Math.max(Math.min(o.currentX,o.maxX),o.minX),o.currentY=Math.max(Math.min(o.currentY,o.maxY),o.minY),l.imageWrapEl.style.transitionDuration=`${me}ms`,l.imageWrapEl.style.transform=`translate3d(${o.currentX}px, ${o.currentY}px,0)`}function $(){const _=e.zoom;l.slideEl&&e.activeIndex!==e.slides.indexOf(l.slideEl)&&(l.imageEl&&(l.imageEl.style.transform="translate3d(0,0,0) scale(1)"),l.imageWrapEl&&(l.imageWrapEl.style.transform="translate3d(0,0,0)"),l.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),_.scale=1,n=1,l.slideEl=void 0,l.imageEl=void 0,l.imageWrapEl=void 0,l.originX=0,l.originY=0)}function I(_){if(n<=1||!l.imageWrapEl||!M(_)||!D(_))return;const F=i.getComputedStyle(l.imageWrapEl).transform,G=new i.DOMMatrix(F);if(!d){d=!0,r.x=_.clientX,r.y=_.clientY,o.startX=G.e,o.startY=G.f,o.width=l.imageEl.offsetWidth||l.imageEl.clientWidth,o.height=l.imageEl.offsetHeight||l.imageEl.clientHeight,l.slideWidth=l.slideEl.offsetWidth,l.slideHeight=l.slideEl.offsetHeight;return}const O=(_.clientX-r.x)*f,V=(_.clientY-r.y)*f,K=o.width*n,ve=o.height*n,me=l.slideWidth,A=l.slideHeight,R=Math.min(me/2-K/2,0),W=-R,Y=Math.min(A/2-ve/2,0),ee=-Y,Z=Math.max(Math.min(o.startX+O,W),R),te=Math.max(Math.min(o.startY+V,ee),Y);l.imageWrapEl.style.transitionDuration="0ms",l.imageWrapEl.style.transform=`translate3d(${Z}px, ${te}px, 0)`,r.x=_.clientX,r.y=_.clientY,o.startX=Z,o.startY=te,o.currentX=Z,o.currentY=te}function k(_){const F=e.zoom,G=e.params.zoom;if(!l.slideEl){_&&_.target&&(l.slideEl=_.target.closest(`.${e.params.slideClass}, swiper-slide`)),l.slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?l.slideEl=ae(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:l.slideEl=e.slides[e.activeIndex]);let Ee=l.slideEl.querySelector(`.${G.containerClass}`);Ee&&(Ee=Ee.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),l.imageEl=Ee,Ee?l.imageWrapEl=ke(l.imageEl,`.${G.containerClass}`)[0]:l.imageWrapEl=void 0}if(!l.imageEl||!l.imageWrapEl)return;l.maxRatio=v(),e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),l.slideEl.classList.add(`${G.zoomedSlideClass}`);let O,V,K,ve,me,A,R,W,Y,ee,Z,te,re,be,Pe,De,Ie,ze;typeof o.touchesStart.x>"u"&&_?(O=_.pageX,V=_.pageY):(O=o.touchesStart.x,V=o.touchesStart.y);const _e=n,ye=typeof _=="number"?_:null;n===1&&ye&&(O=void 0,V=void 0,o.touchesStart.x=void 0,o.touchesStart.y=void 0);const He=v();F.scale=ye||He,n=ye||He,_&&!(n===1&&ye)?(Ie=l.slideEl.offsetWidth,ze=l.slideEl.offsetHeight,K=ut(l.slideEl).left+i.scrollX,ve=ut(l.slideEl).top+i.scrollY,me=K+Ie/2-O,A=ve+ze/2-V,Y=l.imageEl.offsetWidth||l.imageEl.clientWidth,ee=l.imageEl.offsetHeight||l.imageEl.clientHeight,Z=Y*F.scale,te=ee*F.scale,re=Math.min(Ie/2-Z/2,0),be=Math.min(ze/2-te/2,0),Pe=-re,De=-be,_e>0&&ye&&typeof o.currentX=="number"&&typeof o.currentY=="number"?(R=o.currentX*F.scale/_e,W=o.currentY*F.scale/_e):(R=me*F.scale,W=A*F.scale),R<re&&(R=re),R>Pe&&(R=Pe),W<be&&(W=be),W>De&&(W=De)):(R=0,W=0),ye&&F.scale===1&&(l.originX=0,l.originY=0),o.currentX=R,o.currentY=W,l.imageWrapEl.style.transitionDuration="300ms",l.imageWrapEl.style.transform=`translate3d(${R}px, ${W}px,0)`,l.imageEl.style.transitionDuration="300ms",l.imageEl.style.transform=`translate3d(0,0,0) scale(${F.scale})`}function H(){const _=e.zoom,F=e.params.zoom;if(!l.slideEl){e.params.virtual&&e.params.virtual.enabled&&e.virtual?l.slideEl=ae(e.slidesEl,`.${e.params.slideActiveClass}`)[0]:l.slideEl=e.slides[e.activeIndex];let G=l.slideEl.querySelector(`.${F.containerClass}`);G&&(G=G.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),l.imageEl=G,G?l.imageWrapEl=ke(l.imageEl,`.${F.containerClass}`)[0]:l.imageWrapEl=void 0}!l.imageEl||!l.imageWrapEl||(l.maxRatio=v(),e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),_.scale=1,n=1,o.currentX=void 0,o.currentY=void 0,o.touchesStart.x=void 0,o.touchesStart.y=void 0,l.imageWrapEl.style.transitionDuration="300ms",l.imageWrapEl.style.transform="translate3d(0,0,0)",l.imageEl.style.transitionDuration="300ms",l.imageEl.style.transform="translate3d(0,0,0) scale(1)",l.slideEl.classList.remove(`${F.zoomedSlideClass}`),l.slideEl=void 0,l.originX=0,l.originY=0,e.params.zoom.panOnMouseMove&&(r={x:0,y:0},d&&(d=!1,o.startX=0,o.startY=0)))}function X(_){const F=e.zoom;F.scale&&F.scale!==1?H():k(_)}function J(){const _=e.params.passiveListeners?{passive:!0,capture:!1}:!1,F=e.params.passiveListeners?{passive:!1,capture:!0}:!0;return{passiveListener:_,activeListenerWithCapture:F}}function j(){const _=e.zoom;if(_.enabled)return;_.enabled=!0;const{passiveListener:F,activeListenerWithCapture:G}=J();e.wrapperEl.addEventListener("pointerdown",L,F),e.wrapperEl.addEventListener("pointermove",E,G),["pointerup","pointercancel","pointerout"].forEach(O=>{e.wrapperEl.addEventListener(O,z,F)}),e.wrapperEl.addEventListener("pointermove",w,G)}function ge(){const _=e.zoom;if(!_.enabled)return;_.enabled=!1;const{passiveListener:F,activeListenerWithCapture:G}=J();e.wrapperEl.removeEventListener("pointerdown",L,F),e.wrapperEl.removeEventListener("pointermove",E,G),["pointerup","pointercancel","pointerout"].forEach(O=>{e.wrapperEl.removeEventListener(O,z,F)}),e.wrapperEl.removeEventListener("pointermove",w,G)}t("init",()=>{e.params.zoom.enabled&&j()}),t("destroy",()=>{ge()}),t("touchStart",(_,F)=>{e.zoom.enabled&&B(F)}),t("touchEnd",(_,F)=>{e.zoom.enabled&&y()}),t("doubleTap",(_,F)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&X(F)}),t("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&$()}),t("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&$()}),Object.assign(e.zoom,{enable:j,disable:ge,in:k,out:H,toggle:X})}function Rn({swiper:e,extendParams:s,on:t}){s({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function a(r,f){const h=(function(){let o,p,b;return(m,v)=>{for(p=-1,o=m.length;o-p>1;)b=o+p>>1,m[b]<=v?p=b:o=b;return o}})();this.x=r,this.y=f,this.lastIndex=r.length-1;let c,g;return this.interpolate=function(o){return o?(g=h(this.x,o),c=g-1,(o-this.x[c])*(this.y[g]-this.y[c])/(this.x[g]-this.x[c])+this.y[c]):0},this}function i(r){e.controller.spline=e.params.loop?new a(e.slidesGrid,r.slidesGrid):new a(e.snapGrid,r.snapGrid)}function n(r,f){const h=e.controller.control;let c,g;const l=e.constructor;function o(p){if(p.destroyed)return;const b=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(i(p),g=-e.controller.spline.interpolate(-b)),(!g||e.params.controller.by==="container")&&(c=(p.maxTranslate()-p.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(c)||!Number.isFinite(c))&&(c=1),g=(b-e.minTranslate())*c+p.minTranslate()),e.params.controller.inverse&&(g=p.maxTranslate()-g),p.updateProgress(g),p.setTranslate(g,e),p.updateActiveIndex(),p.updateSlidesClasses()}if(Array.isArray(h))for(let p=0;p<h.length;p+=1)h[p]!==f&&h[p]instanceof l&&o(h[p]);else h instanceof l&&f!==h&&o(h)}function u(r,f){const h=e.constructor,c=e.controller.control;let g;function l(o){o.destroyed||(o.setTransition(r,e),r!==0&&(o.transitionStart(),o.params.autoHeight&&Oe(()=>{o.updateAutoHeight()}),Xe(o.wrapperEl,()=>{c&&o.transitionEnd()})))}if(Array.isArray(c))for(g=0;g<c.length;g+=1)c[g]!==f&&c[g]instanceof h&&l(c[g]);else c instanceof h&&f!==c&&l(c)}function d(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}t("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){(typeof e.params.controller.control=="string"?[...document.querySelectorAll(e.params.controller.control)]:[e.params.controller.control]).forEach(f=>{if(e.controller.control||(e.controller.control=[]),f&&f.swiper)e.controller.control.push(f.swiper);else if(f){const h=`${e.params.eventsPrefix}init`,c=g=>{e.controller.control.push(g.detail[0]),e.update(),f.removeEventListener(h,c)};f.addEventListener(h,c)}});return}e.controller.control=e.params.controller.control}),t("update",()=>{d()}),t("resize",()=>{d()}),t("observerUpdate",()=>{d()}),t("setTranslate",(r,f,h)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(f,h)}),t("setTransition",(r,f,h)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(f,h)}),Object.assign(e.controller,{setTranslate:n,setTransition:u})}function Vn({swiper:e,extendParams:s,on:t}){s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,containerRole:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null,scrollOnFocus:!0,wrapperLiveRegion:!0}}),e.a11y={clicked:!1};let a=null,i,n,u=new Date().getTime();function d(y){const $=a;$.length!==0&&Ce($,y)}function r(y=16){const $=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(y).replace(/x/g,$)}function f(y){y=N(y),y.forEach($=>{$.setAttribute("tabIndex","0")})}function h(y){y=N(y),y.forEach($=>{$.setAttribute("tabIndex","-1")})}function c(y,$){y=N(y),y.forEach(I=>{I.setAttribute("role",$)})}function g(y,$){y=N(y),y.forEach(I=>{I.setAttribute("aria-roledescription",$)})}function l(y,$){y=N(y),y.forEach(I=>{I.setAttribute("aria-label",$)})}function o(y,$){y=N(y),y.forEach(I=>{I.setAttribute("id",$)})}function p(y,$){y=N(y),y.forEach(I=>{I.setAttribute("aria-live",$)})}function b(y){y=N(y),y.forEach($=>{$.setAttribute("aria-disabled",!0)})}function m(y){y=N(y),y.forEach($=>{$.removeAttribute("aria-disabled")})}function v(y){if(y.keyCode!==13&&y.keyCode!==32)return;const $=e.params.a11y,I=y.target;if(!(e.pagination&&e.pagination.el&&(I===e.pagination.el||e.pagination.el.contains(y.target))&&!y.target.matches(Se(e.params.pagination.bulletClass)))){if(e.navigation&&e.navigation.prevEl&&e.navigation.nextEl){const k=N(e.navigation.prevEl);N(e.navigation.nextEl).includes(I)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?d($.lastSlideMessage):d($.nextSlideMessage)),k.includes(I)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?d($.firstSlideMessage):d($.prevSlideMessage))}e.pagination&&I.matches(Se(e.params.pagination.bulletClass))&&I.click()}}function C(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:y,prevEl:$}=e.navigation;$&&(e.isBeginning?(b($),h($)):(m($),f($))),y&&(e.isEnd?(b(y),h(y)):(m(y),f(y)))}function T(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function M(){return T()&&e.params.pagination.clickable}function D(){const y=e.params.a11y;T()&&e.pagination.bullets.forEach($=>{e.params.pagination.clickable&&(f($),e.params.pagination.renderBullet||(c($,"button"),l($,y.paginationBulletMessage.replace(/\{\{index\}\}/,Ne($)+1)))),$.matches(Se(e.params.pagination.bulletActiveClass))?$.setAttribute("aria-current","true"):$.removeAttribute("aria-current")})}const L=(y,$,I)=>{f(y),y.tagName!=="BUTTON"&&(c(y,"button"),y.addEventListener("keydown",v)),l(y,I)},E=y=>{n&&n!==y.target&&!n.contains(y.target)&&(i=!0),e.a11y.clicked=!0},z=()=>{i=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},P=y=>{u=new Date().getTime()},S=y=>{if(e.a11y.clicked||!e.params.a11y.scrollOnFocus||new Date().getTime()-u<100)return;const $=y.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!$||!e.slides.includes($))return;n=$;const I=e.virtual&&e.params.virtual.enabled,k=(I?parseInt($.getAttribute("data-swiper-slide-index"),10):e.slides.indexOf($))===e.activeIndex,H=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes($);k||H||y.sourceCapabilities&&y.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,requestAnimationFrame(()=>{i||(e.params.loop?e.slideToLoop(e.getSlideIndexWhenGrid(parseInt($.getAttribute("data-swiper-slide-index"))),0):I?e.slideTo(e.getSlideIndexWhenGrid(parseInt($.getAttribute("data-swiper-slide-index"),10)),0):e.slideTo(e.getSlideIndexWhenGrid(e.slides.indexOf($)),0),i=!1)}))},x=()=>{const y=e.params.a11y;y.itemRoleDescriptionMessage&&g(e.slides,y.itemRoleDescriptionMessage),y.slideRole&&c(e.slides,y.slideRole);const $=e.slides.length;y.slideLabelMessage&&e.slides.forEach((I,k)=>{const H=e.params.loop?parseInt(I.getAttribute("data-swiper-slide-index"),10):k,X=y.slideLabelMessage.replace(/\{\{index\}\}/,H+1).replace(/\{\{slidesLength\}\}/,$);l(I,X)})},B=()=>{const y=e.params.a11y;e.el.append(a);const $=e.el;y.containerRoleDescriptionMessage&&g($,y.containerRoleDescriptionMessage),y.containerMessage&&l($,y.containerMessage),y.containerRole&&c($,y.containerRole);const I=e.wrapperEl,k=y.id||I.getAttribute("id")||`swiper-wrapper-${r(16)}`;if(o(I,k),y.wrapperLiveRegion){const j=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";p(I,j)}x();let{nextEl:H,prevEl:X}=e.navigation?e.navigation:{};H=N(H),X=N(X),H&&H.forEach(j=>L(j,k,y.nextSlideMessage)),X&&X.forEach(j=>L(j,k,y.prevSlideMessage)),M()&&N(e.pagination.el).forEach(ge=>{ge.addEventListener("keydown",v)}),Q().addEventListener("visibilitychange",P),e.el.addEventListener("focus",S,!0),e.el.addEventListener("pointerdown",E,!0),e.el.addEventListener("pointerup",z,!0)};function w(){a&&a.remove();let{nextEl:y,prevEl:$}=e.navigation?e.navigation:{};y=N(y),$=N($),y&&y.forEach(k=>k.removeEventListener("keydown",v)),$&&$.forEach(k=>k.removeEventListener("keydown",v)),M()&&N(e.pagination.el).forEach(H=>{H.removeEventListener("keydown",v)}),Q().removeEventListener("visibilitychange",P),e.el&&typeof e.el!="string"&&(e.el.removeEventListener("focus",S,!0),e.el.removeEventListener("pointerdown",E,!0),e.el.removeEventListener("pointerup",z,!0))}t("beforeInit",()=>{a=ue("span",e.params.a11y.notificationClass),a.setAttribute("aria-live","assertive"),a.setAttribute("aria-atomic","true")}),t("afterInit",()=>{e.params.a11y.enabled&&B()}),t("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&x()}),t("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&C()}),t("paginationUpdate",()=>{e.params.a11y.enabled&&D()}),t("destroy",()=>{e.params.a11y.enabled&&w()})}function Xn({swiper:e,extendParams:s,on:t}){s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let a=!1,i={};const n=g=>g.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),u=g=>{const l=q();let o;g?o=new URL(g):o=l.location;const p=o.pathname.slice(1).split("/").filter(C=>C!==""),b=p.length,m=p[b-2],v=p[b-1];return{key:m,value:v}},d=(g,l)=>{const o=q();if(!a||!e.params.history.enabled)return;let p;e.params.url?p=new URL(e.params.url):p=o.location;const b=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${l}"]`):e.slides[l];let m=n(b.getAttribute("data-history"));if(e.params.history.root.length>0){let C=e.params.history.root;C[C.length-1]==="/"&&(C=C.slice(0,C.length-1)),m=`${C}/${g?`${g}/`:""}${m}`}else p.pathname.includes(g)||(m=`${g?`${g}/`:""}${m}`);e.params.history.keepQuery&&(m+=p.search);const v=o.history.state;v&&v.value===m||(e.params.history.replaceState?o.history.replaceState({value:m},null,m):o.history.pushState({value:m},null,m))},r=(g,l,o)=>{if(l)for(let p=0,b=e.slides.length;p<b;p+=1){const m=e.slides[p];if(n(m.getAttribute("data-history"))===l){const C=e.getSlideIndex(m);e.slideTo(C,g,o)}}else e.slideTo(0,g,o)},f=()=>{i=u(e.params.url),r(e.params.speed,i.value,!1)},h=()=>{const g=q();if(e.params.history){if(!g.history||!g.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}if(a=!0,i=u(e.params.url),!i.key&&!i.value){e.params.history.replaceState||g.addEventListener("popstate",f);return}r(0,i.value,e.params.runCallbacksOnInit),e.params.history.replaceState||g.addEventListener("popstate",f)}},c=()=>{const g=q();e.params.history.replaceState||g.removeEventListener("popstate",f)};t("init",()=>{e.params.history.enabled&&h()}),t("destroy",()=>{e.params.history.enabled&&c()}),t("transitionEnd _freeModeNoMomentumRelease",()=>{a&&d(e.params.history.key,e.activeIndex)}),t("slideChange",()=>{a&&e.params.cssMode&&d(e.params.history.key,e.activeIndex)})}function Nn({swiper:e,extendParams:s,emit:t,on:a}){let i=!1;const n=Q(),u=q();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1,getSlideIndex(c,g){if(e.virtual&&e.params.virtual.enabled){const l=e.slides.find(p=>p.getAttribute("data-hash")===g);return l?parseInt(l.getAttribute("data-swiper-slide-index"),10):0}return e.getSlideIndex(ae(e.slidesEl,`.${e.params.slideClass}[data-hash="${g}"], swiper-slide[data-hash="${g}"]`)[0])}}});const d=()=>{t("hashChange");const c=n.location.hash.replace("#",""),g=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],l=g?g.getAttribute("data-hash"):"";if(c!==l){const o=e.params.hashNavigation.getSlideIndex(e,c);if(typeof o>"u"||Number.isNaN(o))return;e.slideTo(o)}},r=()=>{if(!i||!e.params.hashNavigation.enabled)return;const c=e.virtual&&e.params.virtual.enabled?e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`):e.slides[e.activeIndex],g=c?c.getAttribute("data-hash")||c.getAttribute("data-history"):"";e.params.hashNavigation.replaceState&&u.history&&u.history.replaceState?(u.history.replaceState(null,null,`#${g}`||""),t("hashSet")):(n.location.hash=g||"",t("hashSet"))},f=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;i=!0;const c=n.location.hash.replace("#","");if(c){const l=e.params.hashNavigation.getSlideIndex(e,c);e.slideTo(l||0,0,e.params.runCallbacksOnInit,!0)}e.params.hashNavigation.watchState&&u.addEventListener("hashchange",d)},h=()=>{e.params.hashNavigation.watchState&&u.removeEventListener("hashchange",d)};a("init",()=>{e.params.hashNavigation.enabled&&f()}),a("destroy",()=>{e.params.hashNavigation.enabled&&h()}),a("transitionEnd _freeModeNoMomentumRelease",()=>{i&&r()}),a("slideChange",()=>{i&&e.params.cssMode&&r()})}function Yn({swiper:e,extendParams:s,on:t,emit:a,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,u,d=i&&i.autoplay?i.autoplay.delay:3e3,r=i&&i.autoplay?i.autoplay.delay:3e3,f,h=new Date().getTime(),c,g,l,o,p,b;function m(I){!e||e.destroyed||!e.wrapperEl||I.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(b||I.detail&&I.detail.bySwiperTouchMove)&&z())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(r=f,c=!1);const I=e.autoplay.paused?f:h+r-new Date().getTime();e.autoplay.timeLeft=I,a("autoplayTimeLeft",I,I/d),u=requestAnimationFrame(()=>{v()})},C=()=>{let I;return e.virtual&&e.params.virtual.enabled?I=e.slides.find(H=>H.classList.contains("swiper-slide-active")):I=e.slides[e.activeIndex],I?parseInt(I.getAttribute("data-swiper-autoplay"),10):void 0},T=()=>{let I=e.params.autoplay.delay;const k=C();return!Number.isNaN(k)&&k>0&&(I=k),I},M=I=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(u),v();let k=I;typeof k>"u"&&(k=T(),d=k,r=k),f=k;const H=e.params.speed,X=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(H,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,H,!0,!0),a("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(H,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,H,!0,!0),a("autoplay")),e.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{M()})))};return k>0?(clearTimeout(n),n=setTimeout(()=>{X()},k)):requestAnimationFrame(()=>{X()}),k},D=()=>{h=new Date().getTime(),e.autoplay.running=!0,M(),a("autoplayStart")},L=()=>{e.autoplay.running=!1,clearTimeout(n),cancelAnimationFrame(u),a("autoplayStop")},E=(I,k)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(n),I||(p=!0);const H=()=>{a("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):z()};if(e.autoplay.paused=!0,k){H();return}f=(f||e.params.autoplay.delay)-(new Date().getTime()-h),!(e.isEnd&&f<0&&!e.params.loop)&&(f<0&&(f=0),H())},z=()=>{e.isEnd&&f<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(h=new Date().getTime(),p?(p=!1,M(f)):M(),e.autoplay.paused=!1,a("autoplayResume"))},P=()=>{if(e.destroyed||!e.autoplay.running)return;const I=Q();I.visibilityState==="hidden"&&(p=!0,E(!0)),I.visibilityState==="visible"&&z()},S=I=>{I.pointerType==="mouse"&&(p=!0,b=!0,!(e.animating||e.autoplay.paused)&&E(!0))},x=I=>{I.pointerType==="mouse"&&(b=!1,e.autoplay.paused&&z())},B=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",S),e.el.addEventListener("pointerleave",x))},w=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",S),e.el.removeEventListener("pointerleave",x))},y=()=>{Q().addEventListener("visibilitychange",P)},$=()=>{Q().removeEventListener("visibilitychange",P)};t("init",()=>{e.params.autoplay.enabled&&(B(),y(),D())}),t("destroy",()=>{w(),$(),e.autoplay.running&&L()}),t("_freeModeStaticRelease",()=>{(l||p)&&z()}),t("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?L():E(!0,!0)}),t("beforeTransitionStart",(I,k,H)=>{e.destroyed||!e.autoplay.running||(H||!e.params.autoplay.disableOnInteraction?E(!0,!0):L())}),t("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){L();return}g=!0,l=!1,p=!1,o=setTimeout(()=>{p=!0,l=!0,E(!0)},200)}}),t("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!g)){if(clearTimeout(o),clearTimeout(n),e.params.autoplay.disableOnInteraction){l=!1,g=!1;return}l&&e.params.cssMode&&z(),l=!1,g=!1}}),t("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(f=T(),d=T())}),Object.assign(e.autoplay,{start:D,stop:L,pause:E,resume:z})}function Wn({swiper:e,extendParams:s,on:t}){s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,i=!1;e.thumbs={swiper:null};function n(){const h=e.thumbs.swiper;return!h||h.destroyed?!1:h.params.virtual&&h.params.virtual.enabled}function u(){const h=e.thumbs.swiper;if(!h||h.destroyed)return;const c=h.clickedIndex,g=h.clickedSlide;if(g&&g.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof c>"u"||c===null)return;let l;h.params.loop?l=parseInt(h.clickedSlide.getAttribute("data-swiper-slide-index"),10):l=c,e.params.loop?e.slideToLoop(l):e.slideTo(l)}function d(){const{thumbs:h}=e.params;if(a)return!1;a=!0;const c=e.constructor;if(h.swiper instanceof c){if(h.swiper.destroyed)return a=!1,!1;e.thumbs.swiper=h.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(Ve(h.swiper)){const g=Object.assign({},h.swiper);Object.assign(g,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new c(g),i=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",u),n()&&e.thumbs.swiper.on("virtualUpdate",()=>{r(!1,{autoScroll:!1})}),!0}function r(h,c){const g=e.thumbs.swiper;if(!g||g.destroyed)return;let l=1;const o=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(l=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(l=1),l=Math.floor(l),g.slides.forEach(p=>p.classList.remove(o)),g.params.loop||n())for(let p=0;p<l;p+=1)ae(g.slidesEl,`[data-swiper-slide-index="${e.realIndex+p}"]`).forEach(b=>{b.classList.add(o)});else for(let p=0;p<l;p+=1)g.slides[e.realIndex+p]&&g.slides[e.realIndex+p].classList.add(o);((c==null?void 0:c.autoScroll)??!0)&&f(h?0:void 0)}function f(h){const c=e.thumbs.swiper;if(!c||c.destroyed)return;const g=c.params.slidesPerView==="auto"?c.slidesPerViewDynamic():c.params.slidesPerView,l=e.params.thumbs.autoScrollOffset,o=l&&!c.params.loop;if(e.realIndex!==c.realIndex||o){const p=c.activeIndex;let b,m;if(c.params.loop){const v=c.slides.find(C=>C.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);b=c.slides.indexOf(v),m=e.activeIndex>e.previousIndex?"next":"prev"}else b=e.realIndex,m=b>e.previousIndex?"next":"prev";o&&(b+=m==="next"?l:-1*l),c.visibleSlidesIndexes&&c.visibleSlidesIndexes.indexOf(b)<0&&(c.params.centeredSlides?b>p?b=b-Math.floor(g/2)+1:b=b+Math.floor(g/2)-1:b>p&&c.params.slidesPerGroup,c.slideTo(b,h))}}t("beforeInit",()=>{const{thumbs:h}=e.params;if(!(!h||!h.swiper))if(typeof h.swiper=="string"||h.swiper instanceof HTMLElement){const c=Q(),g=()=>{const o=typeof h.swiper=="string"?c.querySelector(h.swiper):h.swiper;if(o&&o.swiper)h.swiper=o.swiper,d(),r(!0);else if(o){const p=`${e.params.eventsPrefix}init`,b=m=>{h.swiper=m.detail[0],o.removeEventListener(p,b),d(),r(!0),h.swiper.update(),e.update()};o.addEventListener(p,b)}return o},l=()=>{if(e.destroyed)return;g()||requestAnimationFrame(l)};requestAnimationFrame(l)}else d(),r(!0)}),t("slideChange update resize observerUpdate",()=>{r()}),t("setTransition",(h,c)=>{const g=e.thumbs.swiper;!g||g.destroyed||g.setTransition(c)}),t("beforeDestroy",()=>{const h=e.thumbs.swiper;!h||h.destroyed||i&&h.destroy()}),Object.assign(e.thumbs,{init:d,update:r})}function qn({swiper:e,extendParams:s,emit:t,once:a}){s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function i(){if(e.params.cssMode)return;const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function n(){if(e.params.cssMode)return;const{touchEventsData:d,touches:r}=e;d.velocities.length===0&&d.velocities.push({position:r[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:r[e.isHorizontal()?"currentX":"currentY"],time:pe()})}function u({currentPos:d}){if(e.params.cssMode)return;const{params:r,wrapperEl:f,rtlTranslate:h,snapGrid:c,touchEventsData:g}=e,o=pe()-g.touchStartTime;if(d<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(d>-e.maxTranslate()){e.slides.length<c.length?e.slideTo(c.length-1):e.slideTo(e.slides.length-1);return}if(r.freeMode.momentum){if(g.velocities.length>1){const D=g.velocities.pop(),L=g.velocities.pop(),E=D.position-L.position,z=D.time-L.time;e.velocity=E/z,e.velocity/=2,Math.abs(e.velocity)<r.freeMode.minimumVelocity&&(e.velocity=0),(z>150||pe()-D.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=r.freeMode.momentumVelocityRatio,g.velocities.length=0;let p=1e3*r.freeMode.momentumRatio;const b=e.velocity*p;let m=e.translate+b;h&&(m=-m);let v=!1,C;const T=Math.abs(e.velocity)*20*r.freeMode.momentumBounceRatio;let M;if(m<e.maxTranslate())r.freeMode.momentumBounce?(m+e.maxTranslate()<-T&&(m=e.maxTranslate()-T),C=e.maxTranslate(),v=!0,g.allowMomentumBounce=!0):m=e.maxTranslate(),r.loop&&r.centeredSlides&&(M=!0);else if(m>e.minTranslate())r.freeMode.momentumBounce?(m-e.minTranslate()>T&&(m=e.minTranslate()+T),C=e.minTranslate(),v=!0,g.allowMomentumBounce=!0):m=e.minTranslate(),r.loop&&r.centeredSlides&&(M=!0);else if(r.freeMode.sticky){let D;for(let L=0;L<c.length;L+=1)if(c[L]>-m){D=L;break}Math.abs(c[D]-m)<Math.abs(c[D-1]-m)||e.swipeDirection==="next"?m=c[D]:m=c[D-1],m=-m}if(M&&a("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(h?p=Math.abs((-m-e.translate)/e.velocity):p=Math.abs((m-e.translate)/e.velocity),r.freeMode.sticky){const D=Math.abs((h?-m:m)-e.translate),L=e.slidesSizesGrid[e.activeIndex];D<L?p=r.speed:D<2*L?p=r.speed*1.5:p=r.speed*2.5}}else if(r.freeMode.sticky){e.slideToClosest();return}r.freeMode.momentumBounce&&v?(e.updateProgress(C),e.setTransition(p),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Xe(f,()=>{!e||e.destroyed||!g.allowMomentumBounce||(t("momentumBounce"),e.setTransition(r.speed),setTimeout(()=>{e.setTranslate(C),Xe(f,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(t("_freeModeNoMomentumRelease"),e.updateProgress(m),e.setTransition(p),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Xe(f,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(m),e.updateActiveIndex(),e.updateSlidesClasses()}else if(r.freeMode.sticky){e.slideToClosest();return}else r.freeMode&&t("_freeModeNoMomentumRelease");(!r.freeMode.momentum||o>=r.longSwipesMs)&&(t("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:i,onTouchMove:n,onTouchEnd:u}})}function jn({swiper:e,extendParams:s,on:t}){s({grid:{rows:1,fill:"column"}});let a,i,n,u;const d=()=>{let o=e.params.spaceBetween;return typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o)),o},r=o=>{const{slidesPerView:p}=e.params,{rows:b,fill:m}=e.params.grid,v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:o.length;n=Math.floor(v/b),Math.floor(v/b)===v/b?a=v:a=Math.ceil(v/b)*b,p!=="auto"&&m==="row"&&(a=Math.max(a,Math.floor(p)*b)),i=a/b},f=()=>{e.slides&&e.slides.forEach(o=>{o.swiperSlideGridSet&&(o.style.height="",o.style[e.getDirectionLabel("margin-top")]="")})},h=(o,p,b)=>{const{slidesPerGroup:m}=e.params,v=d(),{rows:C,fill:T}=e.params.grid,M=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:b.length;let D,L,E;if(T==="row"&&m>1){const z=Math.floor(o/(m*C)),P=o-C*m*z,S=z===0?m:Math.min(Math.ceil((M-z*C*m)/C),m);E=Math.floor(P/S),L=P-E*S+z*m,D=L+E*a/C,p.style.order=D}else T==="column"?(L=Math.floor(o/C),E=o-L*C,(L>n||L===n&&E===C-1)&&(E+=1,E>=C&&(E=0,L+=1))):(E=Math.floor(o/i),L=o-E*i);p.row=E,p.column=L,p.style.height=`calc((100% - ${(C-1)*v}px) / ${C})`,p.style[e.getDirectionLabel("margin-top")]=E!==0?v&&`${v}px`:"",p.swiperSlideGridSet=!0},c=(o,p)=>{const{centeredSlides:b,roundLengths:m}=e.params,v=d(),{rows:C}=e.params.grid;if(e.virtualSize=(o+v)*a,e.virtualSize=Math.ceil(e.virtualSize/C)-v,e.params.cssMode||(e.wrapperEl.style[e.getDirectionLabel("width")]=`${e.virtualSize+v}px`),b){const T=[];for(let M=0;M<p.length;M+=1){let D=p[M];m&&(D=Math.floor(D)),p[M]<e.virtualSize+p[0]&&T.push(D)}p.splice(0,p.length),p.push(...T)}},g=()=>{u=e.params.grid&&e.params.grid.rows>1},l=()=>{const{params:o,el:p}=e,b=o.grid&&o.grid.rows>1;u&&!b?(p.classList.remove(`${o.containerModifierClass}grid`,`${o.containerModifierClass}grid-column`),n=1,e.emitContainerClasses()):!u&&b&&(p.classList.add(`${o.containerModifierClass}grid`),o.grid.fill==="column"&&p.classList.add(`${o.containerModifierClass}grid-column`),e.emitContainerClasses()),u=b};t("init",g),t("update",l),e.grid={initSlides:r,unsetSlides:f,updateSlide:h,updateWrapperSize:c}}function Un(e){const s=this,{params:t,slidesEl:a}=s;t.loop&&s.loopDestroy();const i=n=>{if(typeof n=="string"){const u=document.createElement("div");Ce(u,n),a.append(u.children[0]),Ce(u,"")}else a.append(n)};if(typeof e=="object"&&"length"in e)for(let n=0;n<e.length;n+=1)e[n]&&i(e[n]);else i(e);s.recalcSlides(),t.loop&&s.loopCreate(),(!t.observer||s.isElement)&&s.update()}function Kn(e){const s=this,{params:t,activeIndex:a,slidesEl:i}=s;t.loop&&s.loopDestroy();let n=a+1;const u=d=>{if(typeof d=="string"){const r=document.createElement("div");Ce(r,d),i.prepend(r.children[0]),Ce(r,"")}else i.prepend(d)};if(typeof e=="object"&&"length"in e){for(let d=0;d<e.length;d+=1)e[d]&&u(e[d]);n=a+e.length}else u(e);s.recalcSlides(),t.loop&&s.loopCreate(),(!t.observer||s.isElement)&&s.update(),s.slideTo(n,0,!1)}function Zn(e,s){const t=this,{params:a,activeIndex:i,slidesEl:n}=t;let u=i;a.loop&&(u-=t.loopedSlides,t.loopDestroy(),t.recalcSlides());const d=t.slides.length;if(e<=0){t.prependSlide(s);return}if(e>=d){t.appendSlide(s);return}let r=u>e?u+1:u;const f=[];for(let h=d-1;h>=e;h-=1){const c=t.slides[h];c.remove(),f.unshift(c)}if(typeof s=="object"&&"length"in s){for(let h=0;h<s.length;h+=1)s[h]&&n.append(s[h]);r=u>e?u+s.length:u}else n.append(s);for(let h=0;h<f.length;h+=1)n.append(f[h]);t.recalcSlides(),a.loop&&t.loopCreate(),(!a.observer||t.isElement)&&t.update(),a.loop?t.slideTo(r+t.loopedSlides,0,!1):t.slideTo(r,0,!1)}function Qn(e){const s=this,{params:t,activeIndex:a}=s;let i=a;t.loop&&(i-=s.loopedSlides,s.loopDestroy());let n=i,u;if(typeof e=="object"&&"length"in e){for(let d=0;d<e.length;d+=1)u=e[d],s.slides[u]&&s.slides[u].remove(),u<n&&(n-=1);n=Math.max(n,0)}else u=e,s.slides[u]&&s.slides[u].remove(),u<n&&(n-=1),n=Math.max(n,0);s.recalcSlides(),t.loop&&s.loopCreate(),(!t.observer||s.isElement)&&s.update(),t.loop?s.slideTo(n+s.loopedSlides,0,!1):s.slideTo(n,0,!1)}function Jn(){const e=this,s=[];for(let t=0;t<e.slides.length;t+=1)s.push(t);e.removeSlide(s)}function ei({swiper:e}){Object.assign(e,{appendSlide:Un.bind(e),prependSlide:Kn.bind(e),addSlide:Zn.bind(e),removeSlide:Qn.bind(e),removeAllSlides:Jn.bind(e)})}function Ge(e){const{effect:s,swiper:t,on:a,setTranslate:i,setTransition:n,overwriteParams:u,perspective:d,recreateShadows:r,getEffectParams:f}=e;a("beforeInit",()=>{if(t.params.effect!==s)return;t.classNames.push(`${t.params.containerModifierClass}${s}`),d&&d()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const c=u?u():{};Object.assign(t.params,c),Object.assign(t.originalParams,c)}),a("setTranslate _virtualUpdated",()=>{t.params.effect===s&&i()}),a("setTransition",(c,g)=>{t.params.effect===s&&n(g)}),a("transitionEnd",()=>{if(t.params.effect===s&&r){if(!f||!f().slideShadows)return;t.slides.forEach(c=>{c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(g=>g.remove())}),r()}});let h;a("virtualUpdate",()=>{t.params.effect===s&&(t.slides.length||(h=!0),requestAnimationFrame(()=>{h&&t.slides&&t.slides.length&&(i(),h=!1)}))})}function Ye(e,s){const t=$e(s);return t!==s&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function ft({swiper:e,duration:s,transformElements:t,allSlides:a}){const{activeIndex:i}=e,n=u=>u.parentElement?u.parentElement:e.slides.find(r=>r.shadowRoot&&r.shadowRoot===u.parentNode);if(e.params.virtualTranslate&&s!==0){let u=!1,d;a?d=t:d=t.filter(r=>{const f=r.classList.contains("swiper-slide-transform")?n(r):r;return e.getSlideIndex(f)===i}),d.forEach(r=>{Xe(r,()=>{if(u||!e||e.destroyed)return;u=!0,e.animating=!1;const f=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(f)})})}}function ti({swiper:e,extendParams:s,on:t}){s({fadeEffect:{crossFade:!1}}),Ge({effect:"fade",swiper:e,on:t,setTranslate:()=>{const{slides:n}=e,u=e.params.fadeEffect;for(let d=0;d<n.length;d+=1){const r=e.slides[d];let h=-r.swiperSlideOffset;e.params.virtualTranslate||(h-=e.translate);let c=0;e.isHorizontal()||(c=h,h=0);const g=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(r.progress),0):1+Math.min(Math.max(r.progress,-1),0),l=Ye(u,r);l.style.opacity=g,l.style.transform=`translate3d(${h}px, ${c}px, 0px)`}},setTransition:n=>{const u=e.slides.map(d=>$e(d));u.forEach(d=>{d.style.transitionDuration=`${n}ms`}),ft({swiper:e,duration:n,transformElements:u,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ai({swiper:e,extendParams:s,on:t}){s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const a=(d,r,f)=>{let h=f?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),c=f?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");h||(h=ue("div",`swiper-slide-shadow-cube swiper-slide-shadow-${f?"left":"top"}`.split(" ")),d.append(h)),c||(c=ue("div",`swiper-slide-shadow-cube swiper-slide-shadow-${f?"right":"bottom"}`.split(" ")),d.append(c)),h&&(h.style.opacity=Math.max(-r,0)),c&&(c.style.opacity=Math.max(r,0))};Ge({effect:"cube",swiper:e,on:t,setTranslate:()=>{const{el:d,wrapperEl:r,slides:f,width:h,height:c,rtlTranslate:g,size:l,browser:o}=e,p=ct(e),b=e.params.cubeEffect,m=e.isHorizontal(),v=e.virtual&&e.params.virtual.enabled;let C=0,T;b.shadow&&(m?(T=e.wrapperEl.querySelector(".swiper-cube-shadow"),T||(T=ue("div","swiper-cube-shadow"),e.wrapperEl.append(T)),T.style.height=`${h}px`):(T=d.querySelector(".swiper-cube-shadow"),T||(T=ue("div","swiper-cube-shadow"),d.append(T))));for(let D=0;D<f.length;D+=1){const L=f[D];let E=D;v&&(E=parseInt(L.getAttribute("data-swiper-slide-index"),10));let z=E*90,P=Math.floor(z/360);g&&(z=-z,P=Math.floor(-z/360));const S=Math.max(Math.min(L.progress,1),-1);let x=0,B=0,w=0;E%4===0?(x=-P*4*l,w=0):(E-1)%4===0?(x=0,w=-P*4*l):(E-2)%4===0?(x=l+P*4*l,w=l):(E-3)%4===0&&(x=-l,w=3*l+l*4*P),g&&(x=-x),m||(B=x,x=0);const y=`rotateX(${p(m?0:-z)}deg) rotateY(${p(m?z:0)}deg) translate3d(${x}px, ${B}px, ${w}px)`;S<=1&&S>-1&&(C=E*90+S*90,g&&(C=-E*90-S*90)),L.style.transform=y,b.slideShadows&&a(L,S,m)}if(r.style.transformOrigin=`50% 50% -${l/2}px`,r.style["-webkit-transform-origin"]=`50% 50% -${l/2}px`,b.shadow)if(m)T.style.transform=`translate3d(0px, ${h/2+b.shadowOffset}px, ${-h/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${b.shadowScale})`;else{const D=Math.abs(C)-Math.floor(Math.abs(C)/90)*90,L=1.5-(Math.sin(D*2*Math.PI/360)/2+Math.cos(D*2*Math.PI/360)/2),E=b.shadowScale,z=b.shadowScale/L,P=b.shadowOffset;T.style.transform=`scale3d(${E}, 1, ${z}) translate3d(0px, ${c/2+P}px, ${-c/2/z}px) rotateX(-89.99deg)`}const M=(o.isSafari||o.isWebView)&&o.needPerspectiveFix?-l/2:0;r.style.transform=`translate3d(0px,0,${M}px) rotateX(${p(e.isHorizontal()?0:C)}deg) rotateY(${p(e.isHorizontal()?-C:0)}deg)`,r.style.setProperty("--swiper-cube-translate-z",`${M}px`)},setTransition:d=>{const{el:r,slides:f}=e;if(f.forEach(h=>{h.style.transitionDuration=`${d}ms`,h.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${d}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const h=r.querySelector(".swiper-cube-shadow");h&&(h.style.transitionDuration=`${d}ms`)}},recreateShadows:()=>{const d=e.isHorizontal();e.slides.forEach(r=>{const f=Math.max(Math.min(r.progress,1),-1);a(r,f,d)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}function Fe(e,s,t){const a=`swiper-slide-shadow${t?`-${t}`:""}${e?` swiper-slide-shadow-${e}`:""}`,i=$e(s);let n=i.querySelector(`.${a.split(" ").join(".")}`);return n||(n=ue("div",a.split(" ")),i.append(n)),n}function si({swiper:e,extendParams:s,on:t}){s({flipEffect:{slideShadows:!0,limitRotation:!0}});const a=(d,r)=>{let f=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),h=e.isHorizontal()?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");f||(f=Fe("flip",d,e.isHorizontal()?"left":"top")),h||(h=Fe("flip",d,e.isHorizontal()?"right":"bottom")),f&&(f.style.opacity=Math.max(-r,0)),h&&(h.style.opacity=Math.max(r,0))};Ge({effect:"flip",swiper:e,on:t,setTranslate:()=>{const{slides:d,rtlTranslate:r}=e,f=e.params.flipEffect,h=ct(e);for(let c=0;c<d.length;c+=1){const g=d[c];let l=g.progress;e.params.flipEffect.limitRotation&&(l=Math.max(Math.min(g.progress,1),-1));const o=g.swiperSlideOffset;let b=-180*l,m=0,v=e.params.cssMode?-o-e.translate:-o,C=0;e.isHorizontal()?r&&(b=-b):(C=v,v=0,m=-b,b=0),g.style.zIndex=-Math.abs(Math.round(l))+d.length,f.slideShadows&&a(g,l);const T=`translate3d(${v}px, ${C}px, 0px) rotateX(${h(m)}deg) rotateY(${h(b)}deg)`,M=Ye(f,g);M.style.transform=T}},setTransition:d=>{const r=e.slides.map(f=>$e(f));r.forEach(f=>{f.style.transitionDuration=`${d}ms`,f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>{h.style.transitionDuration=`${d}ms`})}),ft({swiper:e,duration:d,transformElements:r})},recreateShadows:()=>{e.params.flipEffect,e.slides.forEach(d=>{let r=d.progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(d.progress,1),-1)),a(d,r)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ni({swiper:e,extendParams:s,on:t}){s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Ge({effect:"coverflow",swiper:e,on:t,setTranslate:()=>{const{width:n,height:u,slides:d,slidesSizesGrid:r}=e,f=e.params.coverflowEffect,h=e.isHorizontal(),c=e.translate,g=h?-c+n/2:-c+u/2,l=h?f.rotate:-f.rotate,o=f.depth,p=ct(e);for(let b=0,m=d.length;b<m;b+=1){const v=d[b],C=r[b],T=v.swiperSlideOffset,M=(g-T-C/2)/C,D=typeof f.modifier=="function"?f.modifier(M):M*f.modifier;let L=h?l*D:0,E=h?0:l*D,z=-o*Math.abs(D),P=f.stretch;typeof P=="string"&&P.indexOf("%")!==-1&&(P=parseFloat(f.stretch)/100*C);let S=h?0:P*D,x=h?P*D:0,B=1-(1-f.scale)*Math.abs(D);Math.abs(x)<.001&&(x=0),Math.abs(S)<.001&&(S=0),Math.abs(z)<.001&&(z=0),Math.abs(L)<.001&&(L=0),Math.abs(E)<.001&&(E=0),Math.abs(B)<.001&&(B=0);const w=`translate3d(${x}px,${S}px,${z}px)  rotateX(${p(E)}deg) rotateY(${p(L)}deg) scale(${B})`,y=Ye(f,v);if(y.style.transform=w,v.style.zIndex=-Math.abs(Math.round(D))+1,f.slideShadows){let $=h?v.querySelector(".swiper-slide-shadow-left"):v.querySelector(".swiper-slide-shadow-top"),I=h?v.querySelector(".swiper-slide-shadow-right"):v.querySelector(".swiper-slide-shadow-bottom");$||($=Fe("coverflow",v,h?"left":"top")),I||(I=Fe("coverflow",v,h?"right":"bottom")),$&&($.style.opacity=D>0?D:0),I&&(I.style.opacity=-D>0?-D:0)}}},setTransition:n=>{e.slides.map(d=>$e(d)).forEach(d=>{d.style.transitionDuration=`${n}ms`,d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(r=>{r.style.transitionDuration=`${n}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function ii({swiper:e,extendParams:s,on:t}){s({creativeEffect:{limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=u=>typeof u=="string"?u:`${u}px`;Ge({effect:"creative",swiper:e,on:t,setTranslate:()=>{const{slides:u,wrapperEl:d,slidesSizesGrid:r}=e,f=e.params.creativeEffect,{progressMultiplier:h}=f,c=e.params.centeredSlides,g=ct(e);if(c){const l=r[0]/2-e.params.slidesOffsetBefore||0;d.style.transform=`translateX(calc(50% - ${l}px))`}for(let l=0;l<u.length;l+=1){const o=u[l],p=o.progress,b=Math.min(Math.max(o.progress,-f.limitProgress),f.limitProgress);let m=b;c||(m=Math.min(Math.max(o.originalProgress,-f.limitProgress),f.limitProgress));const v=o.swiperSlideOffset,C=[e.params.cssMode?-v-e.translate:-v,0,0],T=[0,0,0];let M=!1;e.isHorizontal()||(C[1]=C[0],C[0]=0);let D={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};b<0?(D=f.next,M=!0):b>0&&(D=f.prev,M=!0),C.forEach((B,w)=>{C[w]=`calc(${B}px + (${a(D.translate[w])} * ${Math.abs(b*h)}))`}),T.forEach((B,w)=>{let y=D.rotate[w]*Math.abs(b*h);T[w]=y}),o.style.zIndex=-Math.abs(Math.round(p))+u.length;const L=C.join(", "),E=`rotateX(${g(T[0])}deg) rotateY(${g(T[1])}deg) rotateZ(${g(T[2])}deg)`,z=m<0?`scale(${1+(1-D.scale)*m*h})`:`scale(${1-(1-D.scale)*m*h})`,P=m<0?1+(1-D.opacity)*m*h:1-(1-D.opacity)*m*h,S=`translate3d(${L}) ${E} ${z}`;if(M&&D.shadow||!M){let B=o.querySelector(".swiper-slide-shadow");if(!B&&D.shadow&&(B=Fe("creative",o)),B){const w=f.shadowPerProgress?b*(1/f.limitProgress):b;B.style.opacity=Math.min(Math.max(Math.abs(w),0),1)}}const x=Ye(f,o);x.style.transform=S,x.style.opacity=P,D.origin&&(x.style.transformOrigin=D.origin)}},setTransition:u=>{const d=e.slides.map(r=>$e(r));d.forEach(r=>{r.style.transitionDuration=`${u}ms`,r.querySelectorAll(".swiper-slide-shadow").forEach(f=>{f.style.transitionDuration=`${u}ms`})}),ft({swiper:e,duration:u,transformElements:d,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function li({swiper:e,extendParams:s,on:t}){s({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),Ge({effect:"cards",swiper:e,on:t,setTranslate:()=>{const{slides:n,activeIndex:u,rtlTranslate:d}=e,r=e.params.cardsEffect,{startTranslate:f,isTouched:h}=e.touchEventsData,c=d?-e.translate:e.translate;for(let g=0;g<n.length;g+=1){const l=n[g],o=l.progress,p=Math.min(Math.max(o,-4),4);let b=l.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(b-=n[0].swiperSlideOffset);let m=e.params.cssMode?-b-e.translate:-b,v=0;const C=-100*Math.abs(p);let T=1,M=-r.perSlideRotate*p,D=r.perSlideOffset-Math.abs(p)*.75;const L=e.virtual&&e.params.virtual.enabled?e.virtual.from+g:g,E=(L===u||L===u-1)&&p>0&&p<1&&(h||e.params.cssMode)&&c<f,z=(L===u||L===u+1)&&p<0&&p>-1&&(h||e.params.cssMode)&&c>f;if(E||z){const B=(1-Math.abs((Math.abs(p)-.5)/.5))**.5;M+=-28*p*B,T+=-.5*B,D+=96*B,v=`${(r.rotate||e.isHorizontal()?-25:0)*B*Math.abs(p)}%`}if(p<0?m=`calc(${m}px ${d?"-":"+"} (${D*Math.abs(p)}%))`:p>0?m=`calc(${m}px ${d?"-":"+"} (-${D*Math.abs(p)}%))`:m=`${m}px`,!e.isHorizontal()){const B=v;v=m,m=B}const P=p<0?`${1+(1-T)*p}`:`${1-(1-T)*p}`,S=`
        translate3d(${m}, ${v}, ${C}px)
        rotateZ(${r.rotate?d?-M:M:0}deg)
        scale(${P})
      `;if(r.slideShadows){let B=l.querySelector(".swiper-slide-shadow");B||(B=Fe("cards",l)),B&&(B.style.opacity=Math.min(Math.max((Math.abs(p)-.5)/.5,0),1))}l.style.zIndex=-Math.abs(Math.round(o))+n.length;const x=Ye(r,l);x.style.transform=S}},setTransition:n=>{const u=e.slides.map(d=>$e(d));u.forEach(d=>{d.style.transitionDuration=`${n}ms`,d.querySelectorAll(".swiper-slide-shadow").forEach(r=>{r.style.transitionDuration=`${n}ms`})}),ft({swiper:e,duration:n,transformElements:u})},perspective:()=>!0,overwriteParams:()=>({_loopSwapReset:!1,watchSlidesProgress:!0,loopAdditionalSlides:e.params.cardsEffect.rotate?3:2,centeredSlides:!0,virtualTranslate:!e.params.cssMode})})}const ri=[$n,In,zn,_n,On,Fn,Gn,Hn,Rn,Vn,Xn,Nn,Yn,Wn,qn,jn,ei,ti,ai,si,ni,ii,li];oe.use(ri);const oi=["aria-label","data-swiper-space-between","data-swiper-effect","data-swiper-coverflow-style","data-swiper-coverflow-sides","data-swiper-pagination","data-swiper-grid-rows","data-swiper-slides-per-group","data-swiper-initial-slide"],di={class:"swiper-wrapper"},ui={key:0,class:"swiper-button-prev","aria-label":"이전 슬라이드"},ci={key:1,class:"swiper-button-next","aria-label":"다음 슬라이드"},fi={key:2,class:"swiper-pagination"},mi={key:0,class:"swiper-pagination"},pi=["aria-label","aria-pressed"],Oa=Object.assign({inheritAttrs:!1},{__name:"Carousel",props:{ripple:ja,ariaLabel:{type:String,required:!0},demo:{type:Boolean,default:!0},multi:Boolean,dotsOutside:Boolean,autoplayToggle:Boolean,effect:String,autoplay:Boolean,delay:{type:Number,default:4e3},loop:Boolean,initialSlide:{type:Number,default:0},slidesPerView:{type:[Number,String],default:1},slidesPerGroup:{type:Number,default:1},spaceBetween:{type:Number,default:0},centered:Boolean,pagination:{type:[Boolean,String],default:!0},navigation:{type:Boolean,default:!0},gridRows:{type:Number,default:1},gridFill:{type:String,default:"row"},coverflowStyle:{type:String,default:"tilt"},coverflowSides:{type:[Number,String],default:1.5},coverflowEffect:{type:Object,default:null},thumbs:{type:Object,default:null},thumbsControl:Boolean,watchSlidesProgress:Boolean,freeMode:Boolean},emits:["swiper"],setup(e,{expose:s,emit:t}){const a=e,i=t,{rippleAttrs:n,childRippleAttrs:u}=Ua(a,{mode:"container"}),d=Ka(),r=Te(null),f=Te(null),h=Te(null),c=Te(!0),g=Te(0);let l=null;const o=se(()=>[a.loop,a.initialSlide,g.value,a.multi,a.dotsOutside,a.slidesPerView,a.slidesPerGroup,a.spaceBetween,a.centered,a.effect,a.autoplay,a.delay,a.pagination,a.navigation,a.gridRows,a.gridFill,a.coverflowStyle,a.coverflowSides,a.coverflowEffect,a.thumbs,a.thumbsControl,a.watchSlidesProgress,a.freeMode]),p=se(()=>a.navigation!==!1),b=se(()=>a.pagination!==!1),m=se(()=>a.autoplay||a.autoplayToggle),v=se(()=>a.effect==="coverflow"),C=se(()=>v.value&&a.coverflowStyle==="rise"),T=se(()=>a.gridRows>1),M=se(()=>a.pagination==="custom"),D=se(()=>a.pagination==="progressbar"),L=se(()=>{const A=a.coverflowSides;return A==="1"||Number(A)===1?1:A==="2"||Number(A)===2?2:A==="auto"||A==="1.5"||Number(A)===1.5?1.5:A==="2.5"||Number(A)===2.5?2:1.5}),E=se(()=>v.value||a.multi||a.slidesPerView==="auto"?"auto":a.slidesPerView),z=se(()=>{if(!v.value)return null;const A=L.value;return A===1?"carousel_coverflow-sides-1":A===2?"carousel_coverflow-sides-2":"carousel_coverflow-sides-15"}),P=Te(""),S=Te(null),x=se(()=>{if(!v.value)return;const A={"--carousel-coverflow-gap":`${a.spaceBetween}px`};return P.value&&(A["--carousel-coverflow-slide-width"]=P.value),A});function B(){if(!v.value||!r.value){P.value="",S.value=null;return}const R=(f.value||r.value).clientWidth;if(!R)return;const W=L.value,Y=Number(a.spaceBetween)||0,ee=(R-Y*2)/3,Z=(R-ee)/(2*W)-ee;P.value=`${Math.round(ee*100)/100}px`,S.value=Math.round(Z*100)/100;const te=h.value;te&&!te.destroyed&&(te.params.spaceBetween=S.value)}const w=se(()=>["carousel",a.demo?"carousel_demo":null,a.multi?"carousel_multi":null,a.dotsOutside?"carousel_dots-outside":null,v.value?"carousel_coverflow":null,C.value?"carousel_coverflow-rise":null,z.value,T.value?"carousel_grid":null,M.value?"carousel_pagination-custom":null,D.value?"carousel_pagination-progress":null,a.thumbsControl?"carousel_thumbs":null,m.value&&!c.value?"is-autoplay-paused":null,d.class]),y=se(()=>{const{class:A,...R}=d;return{...R,...n.value}}),$=se(()=>a.pagination==="fraction"?"fraction":a.pagination==="progressbar"?"progressbar":"bullets"),I={rotate:24,stretch:0,depth:140,modifier:1,slideShadows:!0},k={rotate:0,stretch:0,depth:28,scale:.92,modifier:1,slideShadows:!1};function H(){g.value+=1}function X(){g.value=Math.max(0,g.value-1)}function J(){const A=h.value;A!=null&&A.autoplay&&(A.autoplay.running?(A.autoplay.stop(),c.value=!1):(A.autoplay.start(),c.value=!0))}function j(){var A;(A=h.value)==null||A.destroy(!0,!0),h.value=null}function ge(){const A=L.value;return A===1?6:A===1.5?8:10}function _(){if(!a.loop||g.value<2||T.value)return!1;const A=E.value;if(v.value)return g.value>=ge();if(A==="auto"||a.multi||a.slidesPerView==="auto")return g.value>=4;const W=(typeof A=="number"?A:1)+1+(a.centered?1:0);return g.value>=W}function F(){const A=a.thumbs;return!A||A.destroyed?null:A}function G(){var Z,te,re;const A=(Z=r.value)==null?void 0:Z.querySelector(".swiper-pagination"),R=(te=r.value)==null?void 0:te.querySelector(".swiper-button-next"),W=(re=r.value)==null?void 0:re.querySelector(".swiper-button-prev"),Y={loop:_(),initialSlide:a.initialSlide,slidesPerView:E.value,spaceBetween:v.value&&S.value!=null?S.value:a.spaceBetween,centeredSlides:a.centered||v.value,grabCursor:!0,keyboard:{enabled:!0},observer:!0,observeParents:!0,watchOverflow:!v.value,watchSlidesProgress:a.watchSlidesProgress||a.thumbsControl||v.value};if(v.value&&(Y.centeredSlides=!0,Y.loop&&(Y.loopAdditionalSlides=0,Y.loopAddBlankSlides=!1)),a.slidesPerGroup>1&&(Y.slidesPerGroup=a.slidesPerGroup),a.freeMode&&(Y.freeMode=!0),a.thumbsControl&&(Y.slideToClickedSlide=!0),a.effect==="fade"&&(Y.effect="fade",Y.fadeEffect={crossFade:!0}),v.value&&(Y.effect="coverflow",Y.coverflowEffect=C.value?{...k,...a.coverflowEffect||{}}:{...I,...a.coverflowEffect||{}}),T.value&&(Y.grid={rows:a.gridRows,fill:a.gridFill==="column"?"column":"row"}),a.autoplay&&(Y.autoplay={delay:a.delay,disableOnInteraction:!1}),b.value&&A){const be={el:A,clickable:!0,type:$.value};M.value&&(be.renderBullet=(Pe,De)=>`<span class="${De}">${Pe+1}</span>`),Y.pagination=be}p.value&&R&&W&&(Y.navigation={nextEl:R,prevEl:W});const ee=F();return ee&&(Y.thumbs={swiper:ee,autoScrollOffset:0}),Y}function O(A,R){var Ie,ze,_e,ye,He,Ee,Bt;if(!A||A.destroyed)return;(Ie=A.updateSize)==null||Ie.call(A),(ze=A.updateSlides)==null||ze.call(A);const W=((_e=A.slides)==null?void 0:_e.length)??0;if(!W||!A.size)return;const Y=Math.max(0,Math.min(R,W-1)),ee=A.slides[Y];if(!ee)return;let Z=(ye=A.slidesGrid)==null?void 0:ye[Y],te=(He=A.slidesSizesGrid)==null?void 0:He[Y];(Z==null||te==null)&&(Z=ee.offsetLeft??0,te=ee.offsetWidth??0);let re=-(Z-A.size/2+te/2);const be=A.minTranslate(),Pe=A.maxTranslate();re=Math.min(be,Math.max(Pe,re));const De=typeof A.getTranslate=="function"?A.getTranslate():0;Math.abs(De-re)<.5||(A.setTransition(A.params.speed??300),A.setTranslate(re),A.updateProgress(re),(Ee=A.updateActiveIndex)==null||Ee.call(A),(Bt=A.updateSlidesClasses)==null||Bt.call(A))}function V(A,R){!A||A.destroyed||requestAnimationFrame(()=>{requestAnimationFrame(()=>{O(A,R)})})}function K(A){if(!A||A.destroyed)return;const R=()=>{const Y=Array.from(A.slides).find(ee=>{var Z;return(Z=ee.classList)==null?void 0:Z.contains("swiper-slide-thumb-active")});return Y?A.slides.indexOf(Y):A.clickedIndex??A.activeIndex},W=()=>{V(A,R())};A.on("click",()=>{A.clickedIndex!=null&&V(A,A.clickedIndex)}),A.on("slideChange",W),A.on("slideChangeTransitionEnd",W),requestAnimationFrame(()=>{A.destroyed||(A.setTransition(0),A.setTranslate(0),A.updateProgress(0))})}function ve(A){if(!A||A.destroyed)return;const R=F();if(!R||R.destroyed)return;const W=()=>{const Y=A.realIndex??A.activeIndex??0;V(R,Y)};A.on("slideChange",W),A.on("slideChangeTransitionStart",W),A.on("slideChangeTransitionEnd",W)}async function me(){!f.value||g.value===0||(B(),await We(),j(),h.value=new oe(f.value,G()),c.value=!!a.autoplay,i("swiper",h.value),a.thumbsControl?K(h.value):F()&&ve(h.value),await We(),requestAnimationFrame(()=>{const A=h.value;if(!(!A||A.destroyed)){if(B(),A.update(),v.value&&A.params.loop){const R=a.initialSlide||0;typeof A.slideToLoop=="function"&&A.slideToLoop(R,0,!1)}if(!a.thumbsControl&&F()){const R=A.realIndex??0;V(F(),R)}}}))}return as("carousel",{registerSlide:H,unregisterSlide:X}),s({swiper:h}),Za(a,g,r,d),Qa(o,async()=>{g.value!==0&&(await We(),me())},{flush:"post"}),Da(async()=>{await We(),B(),me(),r.value&&typeof ResizeObserver<"u"&&(l=new ResizeObserver(()=>{var A;B(),(A=h.value)==null||A.update()}),l.observe(r.value))}),Ja(()=>{l==null||l.disconnect(),l=null,j()}),(A,R)=>(Le(),Ae("div",Dt({ref_key:"rootRef",ref:r,class:w.value,style:x.value},y.value),[Pt("div",{ref_key:"swiperEl",ref:f,class:"swiper",role:"region","aria-roledescription":"carousel","aria-label":e.ariaLabel,"data-swiper-space-between":e.spaceBetween>0?String(e.spaceBetween):void 0,"data-swiper-effect":e.effect||void 0,"data-swiper-coverflow-style":v.value&&e.coverflowStyle!=="tilt"?e.coverflowStyle:void 0,"data-swiper-coverflow-sides":v.value?String(L.value):void 0,"data-swiper-pagination":typeof e.pagination=="string"?e.pagination:void 0,"data-swiper-grid-rows":e.gridRows>1?String(e.gridRows):void 0,"data-swiper-slides-per-group":e.slidesPerGroup>1?String(e.slidesPerGroup):void 0,"data-swiper-initial-slide":e.initialSlide>0?String(e.initialSlide):void 0},[Pt("div",di,[Aa(A.$slots,"default")]),p.value?(Le(),Ae("div",ui)):Re("",!0),p.value?(Le(),Ae("div",ci)):Re("",!0),b.value&&!e.dotsOutside?(Le(),Ae("div",fi)):Re("",!0)],8,oi),b.value&&e.dotsOutside?(Le(),Ae("div",mi)):Re("",!0),m.value?(Le(),Ae("button",Dt({key:1},es(u),{type:"button",class:"carousel_toggle","data-carousel-autoplay-toggle":"","aria-label":c.value?"슬라이드 정지":"슬라이드 재생","aria-pressed":String(c.value),onClick:J}),[...R[0]||(R[0]=[ts('<svg class="carousel_toggle-icon carousel_toggle-icon-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg><svg class="carousel_toggle-icon carousel_toggle-icon-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg>',2)])],16,pi)):Re("",!0)],16))}}),hi={class:"swiper-slide"},gi={__name:"CarouselSlide",setup(e){const s=ns("carousel",null);return Da(()=>{var t;(t=s==null?void 0:s.registerSlide)==null||t.call(s)}),ss(()=>{var t;(t=s==null?void 0:s.unregisterSlide)==null||t.call(s)}),(t,a)=>(Le(),Ae("div",hi,[Aa(t.$slots,"default")]))}},vi=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],Ci=[{name:"aria-label",type:"string",default:"—",description:"캐러셀 접근성 라벨 (필수)"},{name:"demo",type:"boolean",default:"true",description:"carousel_demo 클래스 적용"},{name:"multi",type:"boolean",default:"false",description:"carousel_multi — slides per view auto 레이아웃"},{name:"dots-outside",type:"boolean",default:"false",description:"carousel_dots-outside — 페이지네이션을 뷰포트 밖에 배치"},{name:"autoplay-toggle",type:"boolean",default:"false",description:"재생·정지 버튼 표시. autoplay가 활성이면 기본으로 함께 표시됩니다."},{name:"effect",type:"'fade' | 'coverflow'",default:"—",description:"전환 효과. 생략 시 슬라이드"},{name:"autoplay",type:"boolean",default:"false",description:"자동 재생. 재생·정지 버튼이 함께 표시됩니다."},{name:"delay",type:"number",default:"4000",description:"자동 재생 간격(ms)"},{name:"loop",type:"boolean",default:"false",description:"무한 루프"},{name:"initial-slide",type:"number",default:"0",description:'시작 슬라이드 인덱스 (0부터). 커버플로우·축소 기본은 첫 슬라이드(0), 예: :initial-slide="2"'},{name:"slides-per-view",type:"number | 'auto'",default:"1",description:"동시 표시 슬라이드 수"},{name:"slides-per-group",type:"number",default:"1",description:"한 번에 이동하는 슬라이드 수. 그리드에서는 slides-per-view × grid-rows(예: 3×2=6)로 페이지 단위 이동"},{name:"space-between",type:"number",default:"0",description:"슬라이드 간격(px). Swiper spaceBetween에 전달. multi·grid·coverflow와 함께 사용"},{name:"centered",type:"boolean",default:"false",description:"활성 슬라이드 중앙 정렬. coverflow일 때 자동 적용"},{name:"pagination",type:"boolean | 'fraction' | 'progressbar' | 'custom'",default:"true",description:"페이지네이션 표시. fraction·progressbar·custom(번호) 지원"},{name:"navigation",type:"boolean",default:"true",description:"이전·다음 화살표 표시"},{name:"grid-rows",type:"number",default:"1",description:"Grid 행 수. 2 이상이면 Grid 레이아웃"},{name:"grid-fill",type:"'row' | 'column'",default:"'row'",description:"Grid 채움 방향"},{name:"coverflow-style",type:"'tilt' | 'rise'",default:"'tilt'",description:"coverflow 스타일. tilt는 좌우 기울임, rise는 기울임 없이 측면 슬라이드만 축소"},{name:"coverflow-sides",type:"1 | 1.5 | 2 | 'auto'",default:"1.5",description:"활성 기준 좌·우 노출 수. 슬라이드 크기는 항상 1 기준(동일). 1.5·2는 간격을 좁혀 peek만 늘림"},{name:"coverflow-effect",type:"object",default:"—",description:"coverflow/rise 효과 세부 옵션. 지정 시 스타일 프리셋에 병합"},{name:"thumbs",type:"Swiper",default:"—",description:"Thumbs로 연결할 썸네일 Swiper 인스턴스"},{name:"thumbs-control",type:"boolean",default:"false",description:"썸네일 컨트롤 캐러셀. 탭 네비처럼 시작 좌측 정렬, 중간은 활성 가운데, 끝은 우측(잘림 없이 클램프)"},{name:"watch-slides-progress",type:"boolean",default:"false",description:"슬라이드 진행 상태 감시 (Thumbs 연동용)"},{name:"free-mode",type:"boolean",default:"false",description:"Free mode. thumbs-control과 함께 쓰면 가운데 스냅이 약해질 수 있음"},ms],bi=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],yi=[{name:"default",description:"CarouselSlide 자식 슬라이드"}],Si=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Ei=[{name:"carousel",description:"루트 래퍼 (디자인 토큰·레이아웃)"},{name:"carousel_demo",description:"데모 영역 전체 너비"},{name:"carousel_multi",description:"slides per view auto 레이아웃"},{name:"carousel_toggle",description:"자동 재생 재생·정지 버튼"},{name:"carousel_dots-outside",description:"페이지네이션을 뷰포트 밖에 배치"},{name:"carousel_coverflow",description:"coverflow 효과 레이아웃"},{name:"carousel_coverflow-rise",description:"coverflow rise — 기울임 없이 측면 슬라이드 축소"},{name:"carousel_coverflow-sides-1 · sides-15 · sides-2",description:"coverflow 좌·우 노출 개수 (1 / 1.5 / 2)"},{name:"carousel_grid",description:"Grid 다행 레이아웃"},{name:"carousel_gallery",description:"메인+썸네일 갤러리 래퍼"},{name:"carousel_thumbs",description:"썸네일 컨트롤 캐러셀"},{name:"carousel_pagination-progress",description:"progressbar 페이지네이션"},{name:"carousel_pagination-custom",description:"번호 커스텀 페이지네이션"},{name:"swiper · swiper-wrapper · swiper-slide",description:"Swiper 표준 구조"},{name:"data-swiper",description:"HTML 마크업 Swiper 초기화 대상"},{name:"data-swiper-effect",description:"HTML 전환 효과 (fade · coverflow)"},{name:"data-swiper-coverflow-style",description:"HTML coverflow 스타일 (tilt · rise)"},{name:"data-swiper-coverflow-sides",description:"HTML coverflow 좌·우 노출 수 (1 · 1.5 · 2)"},{name:"data-swiper-autoplay · data-swiper-delay",description:"HTML 자동 재생"},{name:"data-swiper-loop",description:"HTML 무한 루프"},{name:"data-swiper-initial-slide",description:"HTML 시작 슬라이드 인덱스"},{name:"data-swiper-slides-per-view · data-swiper-space-between",description:"HTML 슬라이드 레이아웃"},{name:"data-swiper-slides-per-group",description:"HTML 한 번에 이동하는 슬라이드 수 (그룹 이동)"},{name:"data-swiper-centered",description:"HTML 중앙 정렬"},{name:"data-swiper-pagination",description:"HTML 페이지네이션 유형 (fraction · progressbar · custom)"},{name:"data-swiper-grid-rows · data-swiper-grid-fill",description:"HTML Grid 행·채움 방향"},{name:"data-swiper-thumbs",description:"HTML Thumbs 대상 셀렉터"},{name:"is-autoplay-paused",description:"사용자가 정지한 자동 재생 상태"},...ps],Ti=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],xi=[{name:"--carousel-height · --carousel-radius · --carousel-bg",default:"16rem · var(--radius-lg) · var(--color-surface-raised)",description:"슬라이드 영역(md)"},{name:"--carousel-font-size · --carousel-transition",default:"var(--text-size-sm) · 0.35s ease",description:"타이포·전환"},{name:"--carousel-nav-size · --carousel-nav-icon-size · --carousel-nav-offset",default:"2.25rem · 0.875rem · var(--space-md)",description:"이전/다음 버튼(md)"},{name:"--carousel-nav-bg · --carousel-nav-color",default:"var(--color-surface) · var(--color-text)",description:"네비게이션 색"},{name:"--carousel-dot-gap · --carousel-dot-size · --carousel-dot-size-active",default:"0.375rem · 0.5rem · 1.25rem",description:"인디케이터 점"},{name:"--carousel-dot-bg · --carousel-dot-bg-active",default:"var(--color-border) · var(--color-accent)",description:"점 색상"},{name:"--carousel-dots-padding-y · --carousel-dots-padding-x",default:"var(--space-md) · var(--space-md)",description:"인디케이터 영역 패딩"},{name:"--carousel-toggle-size · --carousel-toggle-icon-size",default:"2rem · 1rem",description:"재생/일시정지 토글"},{name:"--carousel-height-sm · --carousel-nav-size-sm",default:"11rem · 1.875rem",description:"sm 크기"},{name:"--carousel-height-lg · --carousel-nav-size-lg",default:"20rem · 2.75rem",description:"lg 크기"}],Mi=[{title:"신규 가입 혜택",mediaLabel:"신규 가입 혜택",iconParts:[{el:"path",attrs:{d:"M20 12v10H4V12"}},{el:"path",attrs:{d:"M2 7h20v5H2z"}},{el:"path",attrs:{d:"M12 22V7"}}],tag:{variant:"solid",color:"primary",label:"이벤트"},body:"지금 가입하면 첫 주문 20% 할인 쿠폰을 드립니다.",footer:{type:"button",label:"혜택 받기"}},{title:"무료 배송",mediaLabel:"무료 배송",iconParts:[{el:"rect",attrs:{x:1,y:3,width:15,height:13}},{el:"polygon",attrs:{points:"16 8 20 8 23 11 23 16 16 16 16 8"}}],tag:{variant:"solid",color:"success",label:"혜택"},body:"3만 원 이상 구매 시 전 상품 무료 배송이 적용됩니다."},{title:"시즌 세일",mediaLabel:"시즌 세일",iconParts:[{el:"path",attrs:{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}}],tag:{variant:"solid",color:"warning",label:"세일"},body:"베스트셀러 상품 최대 50% 할인. 이번 주말까지 진행됩니다."}],Bi=[{overline:"업데이트",title:"디자인 시스템 v2",lead:"새로운 토큰과 컴포넌트로 일관된 UI를 구축하세요.",accentClass:"card_accent color_primary card_elevated",footer:{type:"between",link:{href:"#",label:"자세히 보기"},button:{label:"시작하기",variant:"filled"}}},{overline:"테마",title:"다크 모드 지원",lead:"라이트·다크 테마를 자동으로 전환합니다.",accentClass:"card_accent color_info card_elevated",footer:{type:"button",label:"미리보기",variant:"outline"}},{overline:"접근성",title:"접근성 우선",lead:"키보드·스와이프·ARIA 속성을 기본 제공합니다.",accentClass:"card_accent color_success card_elevated"}],Pi=[{title:"오늘의 추천",badge:{color:"primary",dot:!0,label:"HOT"},body:"인기 상품을 슬라이드 전환으로 자동 재생합니다.",footer:{type:"button",label:"보러 가기"}},{title:"타임 세일",tag:{size:"sm",color:"warning",label:"24h"},body:"한정 수량 특가. 슬라이드로 넘기며 확인하세요."},{title:"신규 입고",tag:{size:"sm",color:"success",label:"NEW"},body:"이번 주 새로 들어온 상품을 만나보세요."}],Di=[{title:"무선 이어폰 Pro",body:"노이즈 캔슬링과 30시간 배터리.",price:"₩189,000",tag:{size:"sm",color:"primary",label:"신상품"}},{title:"스마트 워치 S3",body:"건강 모니터링과 GPS 추적.",price:"₩329,000",tag:{size:"sm",color:"success",label:"베스트"}},{title:"휴대용 스피커 Mini",body:"방수 IPX7 · 12시간 재생.",price:"₩79,000",tag:{size:"sm",color:"warning",label:"할인"}}],Ai=[{title:"프론트엔드",subtitle:"컴포넌트 기반 UI",tag:{size:"sm",color:"primary",label:"React"}},{title:"백엔드",subtitle:"REST · GraphQL",tag:{size:"sm",color:"success",label:"API"}},{title:"디자인",subtitle:"토큰 · 시스템",tag:{size:"sm",color:"warning",label:"Design"}},{title:"접근성",subtitle:"WCAG 2.2",tag:{size:"sm",color:"info",label:"A11y"}}],Li=[{title:"슬라이드 A",subtitle:"12px 간격"},{title:"슬라이드 B",subtitle:"카드 조합"},{title:"슬라이드 C",subtitle:"스와이프 지원"}],wi=[{title:"슬라이드 1",subtitle:"터치·스와이프로 전환합니다."},{title:"슬라이드 2",subtitle:"도트를 클릭해 이동할 수 있습니다."},{title:"슬라이드 3",subtitle:"grab cursor가 적용됩니다."}],ki=[{title:"1 / 3",lead:"분수 형식으로 진행 상태를 표시합니다.",accentClass:"card_accent color_primary card_elevated"},{title:"2 / 3",lead:"내비게이션 화살표와 함께 사용할 수 있습니다.",accentClass:"card_accent color_info card_elevated"},{title:"3 / 3",lead:"Swiper 공식 API를 그대로 따릅니다.",accentClass:"card_accent color_success card_elevated"}],$i=[{title:"프로그레스 바",lead:'pagination="progressbar"로 진행률을 표시합니다.',accentClass:"card_accent color_primary card_elevated"},{title:"하단 인디케이터",lead:"슬라이드 하단에 진행 바가 채워집니다.",accentClass:"card_accent color_info card_elevated"},{title:"터치·스와이프",lead:"스와이프와 함께 진행 상태가 갱신됩니다.",accentClass:"card_accent color_success card_elevated"}],Ii=[{title:"슬라이드 1",subtitle:"번호 불릿으로 이동합니다."},{title:"슬라이드 2",subtitle:"커스텀 renderBullet을 사용합니다."},{title:"슬라이드 3",subtitle:"활성 번호가 강조됩니다."},{title:"슬라이드 4",subtitle:"접근성 라벨과 함께 사용하세요."}],zi=[{title:"그리드 A",subtitle:"페이지 1 · 상품 목록"},{title:"그리드 B",subtitle:"페이지 1 · 카탈로그"},{title:"그리드 C",subtitle:"페이지 1 · 갤러리"},{title:"그리드 D",subtitle:"페이지 1 · 포트폴리오"},{title:"그리드 E",subtitle:"페이지 1 · 추천"},{title:"그리드 F",subtitle:"페이지 1 · 신상품"},{title:"그리드 G",subtitle:"페이지 2 · 베스트"},{title:"그리드 H",subtitle:"페이지 2 · 특가"},{title:"그리드 I",subtitle:"페이지 2 · 이벤트"},{title:"그리드 J",subtitle:"페이지 2 · 컬렉션"},{title:"그리드 K",subtitle:"페이지 2 · 시즌"},{title:"그리드 L",subtitle:"페이지 2 · 인기"},{title:"그리드 M",subtitle:"페이지 3 · 디지털"},{title:"그리드 N",subtitle:"페이지 3 · 리빙"},{title:"그리드 O",subtitle:"페이지 3 · 패션"},{title:"그리드 P",subtitle:"페이지 3 · 뷰티"},{title:"그리드 Q",subtitle:"페이지 3 · 스포츠"},{title:"그리드 R",subtitle:"페이지 3 · 키즈"}],Fa=[{title:"커버플로우 1",mediaLabel:"커버플로우 1",tag:{size:"sm",color:"primary",label:"Featured"},body:"중앙 슬라이드가 돋보이는 3D 효과입니다."},{title:"커버플로우 2",mediaLabel:"커버플로우 2",tag:{size:"sm",color:"success",label:"Popular"},body:"좌우 슬라이드가 회전·깊이감으로 배치됩니다."},{title:"커버플로우 3",mediaLabel:"커버플로우 3",tag:{size:"sm",color:"warning",label:"New"},body:'effect="coverflow"·loop로 끝단에서도 좌우가 균형 있게 보입니다.'},{title:"커버플로우 4",mediaLabel:"커버플로우 4",tag:{size:"sm",color:"info",label:"Pick"},body:"coverflow-sides로 좌·우 노출 개수를 조절합니다."},{title:"커버플로우 5",mediaLabel:"커버플로우 5",tag:{size:"sm",color:"primary",label:"Best"},body:"상품·앨범 갤러리 UI에 적합합니다."},{title:"커버플로우 6",mediaLabel:"커버플로우 6",tag:{size:"sm",color:"success",label:"Sale"},body:"loop 시 첫·끝 슬라이드에서도 이전·다음이 함께 보입니다."},{title:"커버플로우 7",mediaLabel:"커버플로우 7",tag:{size:"sm",color:"warning",label:"Hot"},body:"활성 슬라이드는 항상 가운데에 정렬됩니다."},{title:"커버플로우 8",mediaLabel:"커버플로우 8",tag:{size:"sm",color:"info",label:"More"},body:"슬라이드를 충분히 두어 loop·peek가 안정적으로 동작합니다."},{title:"커버플로우 9",mediaLabel:"커버플로우 9",tag:{size:"sm",color:"primary",label:"Extra"},body:"coverflow-sides는 크기를 유지한 채 간격으로 peek만 조절합니다."},{title:"커버플로우 10",mediaLabel:"커버플로우 10",tag:{size:"sm",color:"success",label:"Extra"},body:"여유 슬라이드로 첫·끝 로드에서도 좌우 peek가 유지됩니다."},{title:"커버플로우 11",mediaLabel:"커버플로우 11",tag:{size:"sm",color:"warning",label:"Extra"},body:"sides=2 loop에 필요한 최소 장수를 맞춥니다."},{title:"커버플로우 12",mediaLabel:"커버플로우 12",tag:{size:"sm",color:"info",label:"Extra"},body:"시작 슬라이드는 항상 1번(가운데)부터 보입니다."}],_i=[{title:"갤러리 1",mediaLabel:"갤러리 메인 1",thumbLabel:"썸네일 1",body:"메인 슬라이드와 하단 썸네일이 양방향 연동됩니다.",accentClass:"card_accent color_primary card_elevated"},{title:"갤러리 2",mediaLabel:"갤러리 메인 2",thumbLabel:"썸네일 2",body:"썸네일을 클릭하면 메인 슬라이드가 이동합니다.",accentClass:"card_accent color_info card_elevated"},{title:"갤러리 3",mediaLabel:"갤러리 메인 3",thumbLabel:"썸네일 3",body:"thumbs prop과 @swiper 이벤트로 연결합니다.",accentClass:"card_accent color_success card_elevated"},{title:"갤러리 4",mediaLabel:"갤러리 메인 4",thumbLabel:"썸네일 4",body:"thumbs-control로 썸네일 캐러셀을 구성합니다.",accentClass:"card_accent color_warning card_elevated"},{title:"갤러리 5",mediaLabel:"갤러리 메인 5",thumbLabel:"썸네일 5",body:"한 화면에 4개만 보이므로 스와이프로 추가 썸네일을 확인할 수 있습니다.",accentClass:"card_accent color_danger card_elevated"},{title:"갤러리 6",mediaLabel:"갤러리 메인 6",thumbLabel:"썸네일 6",body:"메인 전환 시 활성 썸네일이 따라 이동합니다.",accentClass:"card_accent color_primary card_elevated"},{title:"갤러리 7",mediaLabel:"갤러리 메인 7",thumbLabel:"썸네일 7",body:"썸네일 영역을 스와이프해 이동을 확인해 보세요.",accentClass:"card_accent color_info card_elevated"},{title:"갤러리 8",mediaLabel:"갤러리 메인 8",thumbLabel:"썸네일 8",body:"slides-per-view보다 많은 썸네일로 가로 스크롤이 생깁니다.",accentClass:"card_accent color_success card_elevated"}],Oi=[{title:"슬라이드 1",subtitle:"Controls로 속성을 조절해 보세요."},{title:"슬라이드 2",subtitle:"두 번째 슬라이드"},{title:"슬라이드 3",subtitle:"세 번째 슬라이드"}],Fi=`import {
  carouselAutoplaySlides,
  carouselCoverflowSlides,
  carouselCustomPaginationSlides,
  carouselDefaultSlides,
  carouselFadeSlides,
  carouselFractionSlides,
  carouselGridSlides,
  carouselLoopSlides,
  carouselMultiSlides,
  carouselPaginationSlides,
  carouselPlaygroundSlides,
  carouselProgressSlides,
  carouselSpaceSlides,
  carouselThumbsSlides,
} from '@/doc/data/carousel-demos';`,Ga=`import Badge from '@uxkm/ui/components/Badge.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Card from '@uxkm/ui/components/Card.vue';
import CardBody from '@uxkm/ui/components/CardBody.vue';
import CardFooter from '@uxkm/ui/components/CardFooter.vue';
import CardHeader from '@uxkm/ui/components/CardHeader.vue';
import Link from '@uxkm/ui/components/Link.vue';
import Tag from '@uxkm/ui/components/Tag.vue';`,le=`<script setup>
import Carousel from '@uxkm/ui/components/Carousel.vue';
import CarouselSlide from '@uxkm/ui/components/CarouselSlide.vue';
${Ga}
${Fi}
<\/script>

`,Ha=`<Card class="card_borderless card_elevated">
  <template #media>
    <div class="card_media card_media-placeholder" role="img" :aria-label="slide.mediaLabel">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <component
          v-for="(part, index) in slide.iconParts"
          :key="index"
          :is="part.el"
          v-bind="part.attrs"
        />
      </svg>
    </div>
  </template>
  <CardHeader>
    <div class="card_header-row">
      <h3 class="card_title">{{ slide.title }}</h3>
      <Tag v-bind="slide.tag" />
    </div>
  </CardHeader>
  <CardBody>{{ slide.body }}</CardBody>
  <CardFooter v-if="slide.footer">
    <Button variant="filled" color="primary" size="sm" :label="slide.footer.label" />
  </CardFooter>
</Card>`,Ra=`<Card :class="slide.accentClass">
  <CardBody>
    <p class="typo_overline">{{ slide.overline }}</p>
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="typo_lead">{{ slide.lead }}</p>
  </CardBody>
  <CardFooter v-if="slide.footer" :between="slide.footer.type === 'between'">
    <Link
      v-if="slide.footer.link"
      :href="slide.footer.link.href"
      color="primary"
      size="sm"
      :label="slide.footer.link.label"
    />
    <Button
      v-if="slide.footer.button"
      :variant="slide.footer.button.variant"
      color="primary"
      size="sm"
      :label="slide.footer.button.label"
    />
  </CardFooter>
</Card>`,Va=`<Card class="card_borderless card_elevated">
  <CardHeader>
    <div class="card_header-row">
      <h3 class="card_title">{{ slide.title }}</h3>
      <Badge v-if="slide.badge" v-bind="slide.badge" />
      <Tag v-else-if="slide.tag" v-bind="slide.tag" />
    </div>
  </CardHeader>
  <CardBody>{{ slide.body }}</CardBody>
  <CardFooter v-if="slide.footer">
    <Button
      v-if="slide.footer.type === 'button'"
      variant="filled"
      color="primary"
      size="sm"
      :label="slide.footer.label"
    />
    <Link
      v-else-if="slide.footer.type === 'link'"
      :href="slide.footer.href"
      color="primary"
      size="sm"
      :label="slide.footer.label"
    />
  </CardFooter>
</Card>`,Xa=`<Card variant="shadow">
  <CardHeader :title="slide.title" />
  <CardBody>{{ slide.body }}</CardBody>
  <CardFooter between>
    <strong>{{ slide.price }}</strong>
    <Tag v-bind="slide.tag" />
  </CardFooter>
</Card>`,Na=`<Card variant="shadow">
  <CardBody>
    <Tag v-bind="slide.tag" />
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="card_subtitle">{{ slide.subtitle }}</p>
  </CardBody>
</Card>`,he=`<Card variant="shadow">
  <CardHeader :title="slide.title" :subtitle="slide.subtitle" />
</Card>`,mt=`<Card :class="slide.accentClass">
  <CardBody>
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="typo_lead">{{ slide.lead }}</p>
  </CardBody>
</Card>`,Be=`<Card class="card_borderless card_elevated">
  <template #media>
    <div class="card_media card_media-placeholder" role="img" :aria-label="slide.mediaLabel">
      <span class="typo_overline">{{ slide.title }}</span>
    </div>
  </template>
  <CardHeader>
    <div class="card_header-row">
      <h3 class="card_title">{{ slide.title }}</h3>
      <Tag v-bind="slide.tag" />
    </div>
  </CardHeader>
  <CardBody>{{ slide.body }}</CardBody>
</Card>`,Ya=`<Card :class="slide.accentClass">
  <CardBody>
    <p class="typo_overline">{{ slide.mediaLabel }}</p>
    <h3 class="card_title">{{ slide.title }}</h3>
    <p class="typo_lead">{{ slide.body }}</p>
  </CardBody>
</Card>`,Wa=`<Card variant="shadow">
  <CardHeader :title="slide.thumbLabel" />
</Card>`;function U(e,s){return`<CarouselSlide v-for="slide in ${e}" :key="slide.title">
      ${s}
    </CarouselSlide>`}const Gi=`${le}<template>
  <Carousel aria-label="프로모션 슬라이드">
    ${U("carouselDefaultSlides",Ha)}
  </Carousel>
</template>`,Hi=`${le}<template>
  <Carousel aria-label="페이드 슬라이드" effect="fade">
    ${U("carouselFadeSlides",Ra)}
  </Carousel>
</template>`,Ri=`${le}<template>
  <Carousel
    aria-label="슬라이드 자동 재생"
    autoplay
    :delay="4000"
    loop
    dots-outside
  >
    ${U("carouselAutoplaySlides",Va)}
  </Carousel>
</template>`,Vi=`${le}<template>
  <Carousel aria-label="루프 슬라이드" loop>
    ${U("carouselLoopSlides",Xa)}
  </Carousel>
</template>`,Xi=`${le}<template>
  <Carousel
    aria-label="다중 슬라이드"
    multi
    slides-per-view="auto"
    :space-between="16"
    centered
    :navigation="false"
  >
    ${U("carouselMultiSlides",Na)}
  </Carousel>
</template>`,Ni=`${le}<template>
  <Carousel aria-label="기본 간격" :space-between="12" loop>
    ${U("carouselSpaceSlides",he)}
  </Carousel>
</template>`,Yi=`${le}<template>
  <Carousel aria-label="페이지네이션 슬라이드" loop :navigation="false">
    ${U("carouselPaginationSlides",he)}
  </Carousel>
</template>`,Wi=`${le}<template>
  <Carousel aria-label="분수 페이지네이션 슬라이드" pagination="fraction">
    ${U("carouselFractionSlides",mt)}
  </Carousel>
</template>`,qi=`${le}<template>
  <Carousel aria-label="프로그레스 페이지네이션" pagination="progressbar" loop>
    ${U("carouselProgressSlides",mt)}
  </Carousel>
</template>`,ji=`${le}<template>
  <Carousel
    aria-label="커스텀 페이지네이션"
    pagination="custom"
    loop
    :navigation="false"
  >
    ${U("carouselCustomPaginationSlides",he)}
  </Carousel>
</template>`,Ui=`${le}<template>
  <div class="demo_preview-block">
    <h3 class="typo_overline">1장씩 이동</h3>
    <p class="typo_caption">slides-per-group 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.</p>
    <Carousel
      aria-label="그리드 1장씩"
      :slides-per-view="3"
      :grid-rows="2"
      :space-between="16"
    >
      ${U("carouselGridSlides",he)}
    </Carousel>
  </div>

  <div class="demo_preview-block">
    <h3 class="typo_overline">그룹 이동</h3>
    <p class="typo_caption">:slides-per-group="6" — 한 화면(2행 × 3열) 단위로 페이지처럼 이동합니다.</p>
    <Carousel
      aria-label="그리드 그룹 이동"
      :slides-per-view="3"
      :grid-rows="2"
      :slides-per-group="6"
      :space-between="16"
    >
      ${U("carouselGridSlides",he)}
    </Carousel>
  </div>
</template>`,Ki=`${le}<template>
  <Carousel
    aria-label="커버플로우 슬라이드"
    effect="coverflow"
    :coverflow-sides="1"
    :space-between="16"
    loop
    :pagination="false"
  >
    ${U("carouselCoverflowSlides",Be)}
  </Carousel>
</template>`,Zi=`${le}<template>
  <div class="demo_preview-block">
    <h3 class="typo_overline">좌우 1개씩</h3>
    <p class="typo_caption">:coverflow-sides="1" — 슬라이드 크기 기준. 좌·우에 1개씩.</p>
    <Carousel
      aria-label="커버플로우 축소 좌우 1"
      effect="coverflow"
      coverflow-style="rise"
      :coverflow-sides="1"
      :space-between="16"
      loop
      :pagination="false"
    >
      ${U("carouselCoverflowSlides",Be)}
    </Carousel>
  </div>

  <div class="demo_preview-block">
    <h3 class="typo_overline">좌우 약 1.5개 (기본)</h3>
    <p class="typo_caption">:coverflow-sides="1.5" — 크기는 1과 동일, 간격으로 좌·우 약 1.5개 peek.</p>
    <Carousel
      aria-label="커버플로우 축소 좌우 1.5"
      effect="coverflow"
      coverflow-style="rise"
      :coverflow-sides="1.5"
      :space-between="16"
      loop
      :pagination="false"
    >
      ${U("carouselCoverflowSlides",Be)}
    </Carousel>
  </div>

  <div class="demo_preview-block">
    <h3 class="typo_overline">좌우 2개씩</h3>
    <p class="typo_caption">:coverflow-sides="2" — 크기는 1과 동일, 간격으로 좌·우 2개씩 peek.</p>
    <Carousel
      aria-label="커버플로우 축소 좌우 2"
      effect="coverflow"
      coverflow-style="rise"
      :coverflow-sides="2"
      :space-between="16"
      loop
      :pagination="false"
    >
      ${U("carouselCoverflowSlides",Be)}
    </Carousel>
  </div>
</template>`,Qi=`<script setup>
import { ref } from 'vue';
import Carousel from '@uxkm/ui/components/Carousel.vue';
import CarouselSlide from '@uxkm/ui/components/CarouselSlide.vue';
${Ga}
import { carouselThumbsSlides } from '@/doc/data/carousel-demos';

const thumbsSwiper = ref(null);
<\/script>

`,Ji=`${Qi}<template>
  <div class="carousel_gallery">
    <Carousel
      aria-label="갤러리 메인"
      :thumbs="thumbsSwiper"
      :pagination="false"
    >
      ${U("carouselThumbsSlides",Ya)}
    </Carousel>
    <Carousel
      aria-label="갤러리 썸네일"
      thumbs-control
      :slides-per-view="4"
      :space-between="8"
      :navigation="false"
      :pagination="false"
      @swiper="(swiper) => (thumbsSwiper = swiper)"
    >
      ${U("carouselThumbsSlides",Wa)}
    </Carousel>
  </div>
</template>`,el=`${le}<template>
  <Carousel aria-label="프로모션 슬라이드">
    ${U("carouselPlaygroundSlides",he)}
  </Carousel>
</template>`,ne={Badge:qa,Button:ls,Card:os,CardBody:ds,CardFooter:us,CardHeader:cs,Carousel:Oa,CarouselSlide:gi,Link:is,Tag:fs};function ie(e){return{code:rs(e),language:"vue"}}const fe={ariaLabel:"프로모션 슬라이드",demo:!0,multi:!1,dotsOutside:!1,autoplayToggle:!1,effect:"",autoplay:!1,delay:4e3,loop:!1,initialSlide:0,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,centered:!1,pagination:!0,navigation:!0,gridRows:1,gridFill:"row",coverflowStyle:"tilt",coverflowSides:1.5,thumbsControl:!1,watchSlidesProgress:!1,freeMode:!1},tl=[{title:"API · Props",tables:[{columns:vi,rows:Ci,codeColumn:"name"}]},{title:"API · Slots",tables:[{columns:bi,rows:yi,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Si,rows:Ei,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:Ti,rows:xi,codeColumn:"name"}]}],fl={title:"Components/기타/Carousel",id:"components-carousel",component:Oa,tags:["autodocs"],argTypes:{ariaLabel:{control:"text",type:{name:"string",summary:"string"}},demo:{control:"boolean",type:{name:"boolean",summary:"boolean"}},multi:{control:"boolean",type:{name:"boolean",summary:"boolean"}},dotsOutside:{control:"boolean",type:{name:"boolean",summary:"boolean"}},autoplayToggle:{control:"boolean",type:{name:"boolean",summary:"boolean"}},effect:{control:"select",options:["","fade","coverflow"],type:{name:"enum",summary:"'' | 'fade' | 'coverflow'"}},coverflowStyle:{control:"select",options:["tilt","rise"],type:{name:"enum",summary:"'tilt' | 'rise'"}},coverflowSides:{control:"select",options:[1,1.5,2],type:{name:"union",summary:"1 | 1.5 | 2 | 'auto'"}},autoplay:{control:"boolean",type:{name:"boolean",summary:"boolean"}},delay:{control:"number",type:{name:"number",summary:"number"}},loop:{control:"boolean",type:{name:"boolean",summary:"boolean"}},initialSlide:{control:"number",type:{name:"number",summary:"number"}},slidesPerView:{control:"select",options:[1,2,3,"auto"],type:{name:"union",summary:"number | 'auto'"}},slidesPerGroup:{control:"number",type:{name:"number",summary:"number"}},spaceBetween:{control:"number",type:{name:"number",summary:"number"}},centered:{control:"boolean",type:{name:"boolean",summary:"boolean"}},pagination:{control:"select",options:[!0,!1,"fraction","progressbar","custom"],type:{name:"union",summary:"boolean | 'fraction' | 'progressbar' | 'custom'"}},navigation:{control:"boolean",type:{name:"boolean",summary:"boolean"}},gridRows:{control:"number",type:{name:"number",summary:"number"}},gridFill:{control:"select",options:["row","column"],type:{name:"enum",summary:"'row' | 'column'"}},thumbsControl:{control:"boolean",type:{name:"boolean",summary:"boolean"}},watchSlidesProgress:{control:"boolean",type:{name:"boolean",summary:"boolean"}},freeMode:{control:"boolean",type:{name:"boolean",summary:"boolean"}}},args:{ariaLabel:"프로모션 슬라이드",demo:!0,multi:!1,dotsOutside:!1,autoplayToggle:!1,effect:"",coverflowStyle:"tilt",coverflowSides:1.5,autoplay:!1,delay:4e3,loop:!1,initialSlide:0,slidesPerView:1,slidesPerGroup:1,spaceBetween:0,centered:!1,pagination:!0,navigation:!0,gridRows:1,gridFill:"row",thumbsControl:!1,watchSlidesProgress:!1,freeMode:!1},parameters:{controls:{disable:!1},layout:"padded",apiSections:tl}},qe={name:"기본",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"Swiper Default 데모와 동일한 내비게이션·페이지네이션 구성입니다. 터치·스와이프·키보드·grab cursor를 기본 지원합니다."},source:ie(Gi)}},render:(e,s)=>({components:ne,setup(){return{args:Pa(s),carouselDefaultSlides:Mi}},template:`<Carousel v-bind="args">
      <CarouselSlide v-for="slide in carouselDefaultSlides" :key="slide.title">
        ${Ha}
      </CarouselSlide>
    </Carousel>`})},je={name:"페이드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{source:ie(Hi)}},args:{...fe,effect:"fade",ariaLabel:"페이드 슬라이드"},render:ce(()=>({components:ne,setup(){return{carouselFadeSlides:Bi}},template:`<Carousel aria-label="페이드 슬라이드" effect="fade">
      <CarouselSlide v-for="slide in carouselFadeSlides" :key="slide.title">
        ${Ra}
      </CarouselSlide>
    </Carousel>`}))},Ue={name:"자동 재생",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"autoplay prop으로 자동 재생과 재생·정지 버튼을 제공합니다. 페이드 전환은 페이드 섹션을 참고하세요."},source:ie(Ri)}},args:{...fe,autoplay:!0,loop:!0,dotsOutside:!0,ariaLabel:"슬라이드 자동 재생"},render:ce(()=>({components:ne,setup(){return{carouselAutoplaySlides:Pi}},template:`<Carousel
      aria-label="슬라이드 자동 재생"
      autoplay
      :delay="4000"
      loop
      dots-outside
    >
      <CarouselSlide v-for="slide in carouselAutoplaySlides" :key="slide.title">
        ${Va}
      </CarouselSlide>
    </Carousel>`}))},Ke={name:"무한 루프",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"loop prop으로 슬라이드를 순환합니다."},source:ie(Vi)}},args:{...fe,loop:!0,ariaLabel:"루프 슬라이드"},render:ce(()=>({components:ne,setup(){return{carouselLoopSlides:Di}},template:`<Carousel aria-label="루프 슬라이드" loop>
      <CarouselSlide v-for="slide in carouselLoopSlides" :key="slide.title">
        ${Xa}
      </CarouselSlide>
    </Carousel>`}))},Ze={name:"슬라이드 per view",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"slides-per-view=&quot;auto&quot;로 여러 카드가 동시에 보입니다."},source:ie(Xi)}},args:{...fe,multi:!0,slidesPerView:"auto",spaceBetween:16,centered:!0,navigation:!1,ariaLabel:"다중 슬라이드"},render:ce(()=>({components:ne,setup(){return{carouselMultiSlides:Ai}},template:`<Carousel aria-label="다중 슬라이드" multi slides-per-view="auto" :space-between="16" centered :navigation="false">
      <CarouselSlide v-for="slide in carouselMultiSlides" :key="slide.title">
        ${Na}
      </CarouselSlide>
    </Carousel>`}))},Qe={name:"슬라이드 간격",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"space-between prop으로 슬라이드 사이 간격(px)을 지정합니다. 다중·그리드·커버플로우에서의 간격은 각 전용 섹션을 참고하세요."},source:ie(Ni)}},args:{...fe,spaceBetween:12,loop:!0,ariaLabel:"기본 간격"},render:ce(()=>({components:ne,setup(){return{carouselSpaceSlides:Li}},template:`<Carousel aria-label="기본 간격" :space-between="12" loop>
      <CarouselSlide v-for="slide in carouselSpaceSlides" :key="slide.title">
        ${he}
      </CarouselSlide>
    </Carousel>`}))},Je={name:"페이지네이션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"화살표 없이 도트만 사용합니다."},source:ie(Yi)}},args:{...fe,loop:!0,navigation:!1,ariaLabel:"페이지네이션 슬라이드"},render:ce(()=>({components:ne,setup(){return{carouselPaginationSlides:wi}},template:`<Carousel aria-label="페이지네이션 슬라이드" loop :navigation="false">
      <CarouselSlide v-for="slide in carouselPaginationSlides" :key="slide.title">
        ${he}
      </CarouselSlide>
    </Carousel>`}))},et={name:"분수 페이지네이션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{source:ie(Wi)}},args:{...fe,pagination:"fraction",ariaLabel:"분수 페이지네이션 슬라이드"},render:ce(()=>({components:ne,setup(){return{carouselFractionSlides:ki}},template:`<Carousel aria-label="분수 페이지네이션 슬라이드" pagination="fraction">
      <CarouselSlide v-for="slide in carouselFractionSlides" :key="slide.title">
        ${mt}
      </CarouselSlide>
    </Carousel>`}))},tt={name:"프로그레스 페이지네이션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'pagination="progressbar" prop으로 진행률 바를 표시합니다.'},source:ie(qi)}},args:{...fe,pagination:"progressbar",loop:!0,ariaLabel:"프로그레스 페이지네이션"},render:ce(()=>({components:ne,setup(){return{carouselProgressSlides:$i}},template:`<Carousel aria-label="프로그레스 페이지네이션" pagination="progressbar" loop>
      <CarouselSlide v-for="slide in carouselProgressSlides" :key="slide.title">
        ${mt}
      </CarouselSlide>
    </Carousel>`}))},at={name:"커스텀 페이지네이션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'pagination="custom" prop으로 번호 불릿을 표시합니다.'},source:ie(ji)}},args:{...fe,pagination:"custom",loop:!0,navigation:!1,ariaLabel:"커스텀 페이지네이션"},render:ce(()=>({components:ne,setup(){return{carouselCustomPaginationSlides:Ii}},template:`<Carousel
      aria-label="커스텀 페이지네이션"
      pagination="custom"
      loop
      :navigation="false"
    >
      <CarouselSlide v-for="slide in carouselCustomPaginationSlides" :key="slide.title">
        ${he}
      </CarouselSlide>
    </Carousel>`}))},st={name:"그리드",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'grid-rows prop으로 다행 그리드 레이아웃을 구성합니다. slides-per-group으로 1장씩 또는 한 화면(그룹) 단위 이동을 선택할 수 있습니다. 2행 × 3열이면 :slides-per-group="6"이 페이지 이동입니다.'},source:ie(Ui)}},args:{...fe,slidesPerView:3,gridRows:2,slidesPerGroup:6,spaceBetween:16,ariaLabel:"그리드 그룹 이동"},render:ce(()=>({components:ne,setup(){return{carouselGridSlides:zi}},template:`<div class="demo_preview-block">
      <h3 class="typo_overline">1장씩 이동</h3>
      <p class="typo_caption">slides-per-group 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.</p>
      <Carousel
        aria-label="그리드 1장씩"
        :slides-per-view="3"
        :grid-rows="2"
        :space-between="16"
      >
        <CarouselSlide v-for="slide in carouselGridSlides" :key="slide.title">
          ${he}
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">그룹 이동</h3>
      <p class="typo_caption">:slides-per-group="6" — 한 화면(2행 × 3열) 단위로 페이지처럼 이동합니다.</p>
      <Carousel
        aria-label="그리드 그룹 이동"
        :slides-per-view="3"
        :grid-rows="2"
        :slides-per-group="6"
        :space-between="16"
      >
        <CarouselSlide v-for="slide in carouselGridSlides" :key="'group-' + slide.title">
          ${he}
        </CarouselSlide>
      </Carousel>
    </div>`}))},nt={name:"커버플로우",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'effect="coverflow" prop으로 3D 커버플로우 효과를 적용합니다. 활성 슬라이드는 가운데 정렬되며, coverflow-sides="1"로 좌·우 1개씩 peek합니다.'},source:ie(Ki)}},args:{...fe,effect:"coverflow",coverflowStyle:"tilt",coverflowSides:1,spaceBetween:16,initialSlide:0,loop:!0,pagination:!1,ariaLabel:"커버플로우 슬라이드"},render:ce(()=>({components:ne,setup(){return{carouselCoverflowSlides:Fa}},template:`<Carousel
      aria-label="커버플로우 슬라이드"
      effect="coverflow"
      :coverflow-sides="1"
      :space-between="16"
      loop
      :pagination="false"
    >
      <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="slide.title">
        ${Be}
      </CarouselSlide>
    </Carousel>`}))},it={name:"커버플로우 · 축소",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'coverflow-style="rise"로 측면만 축소합니다. 슬라이드 크기는 coverflow-sides와 관계없이 동일하며, 좌·우 노출(1 · 1.5 · 2)은 간격으로 조절합니다.'},source:ie(Zi)}},args:{...fe,effect:"coverflow",coverflowStyle:"rise",coverflowSides:1.5,spaceBetween:16,initialSlide:0,loop:!0,pagination:!1,ariaLabel:"커버플로우 축소 좌우 1.5"},argTypes:{coverflowSides:{control:"select",options:[1,1.5,2],type:{name:"union",summary:"1 | 1.5 | 2 | 'auto'"}}},render:ce(()=>({components:ne,setup(){return{carouselCoverflowSlides:Fa}},template:`<div class="demo_preview-block">
      <h3 class="typo_overline">좌우 1개씩</h3>
      <p class="typo_caption">:coverflow-sides="1" — 슬라이드 크기 기준. 좌·우에 1개씩.</p>
      <Carousel
        aria-label="커버플로우 축소 좌우 1"
        effect="coverflow"
        coverflow-style="rise"
        :coverflow-sides="1"
        :space-between="16"
        loop
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="slide.title">
          ${Be}
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">좌우 약 1.5개 (기본)</h3>
      <p class="typo_caption">:coverflow-sides="1.5" — 크기는 1과 동일, 간격으로 좌·우 약 1.5개 peek.</p>
      <Carousel
        aria-label="커버플로우 축소 좌우 1.5"
        effect="coverflow"
        coverflow-style="rise"
        :coverflow-sides="1.5"
        :space-between="16"
        loop
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="'sides15-' + slide.title">
          ${Be}
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">좌우 2개씩</h3>
      <p class="typo_caption">:coverflow-sides="2" — 크기는 1과 동일, 간격으로 좌·우 2개씩 peek.</p>
      <Carousel
        aria-label="커버플로우 축소 좌우 2"
        effect="coverflow"
        coverflow-style="rise"
        :coverflow-sides="2"
        :space-between="16"
        loop
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="'sides2-' + slide.title">
          ${Be}
        </CarouselSlide>
      </Carousel>
    </div>`}))},lt={name:"썸네일 갤러리",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"메인 캐러셀과 썸네일 캐러셀을 thumbs · @swiper로 양방향 연동합니다. 하단 썸네일은 탭 네비처럼 동작합니다 — 시작은 좌측 정렬, 중간은 활성 항목 가운데, 끝에서는 우측으로 활성화됩니다."},source:ie(Ji)}},args:{...fe,pagination:!1,ariaLabel:"갤러리 메인"},render:ce(()=>({components:ne,setup(){const e=Te(null);return{carouselThumbsSlides:_i,thumbsSwiper:e}},template:`<div class="carousel_gallery">
      <Carousel
        aria-label="갤러리 메인"
        :thumbs="thumbsSwiper"
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselThumbsSlides" :key="slide.title">
          ${Ya}
        </CarouselSlide>
      </Carousel>
      <Carousel
        aria-label="갤러리 썸네일"
        thumbs-control
        :slides-per-view="4"
        :space-between="8"
        :navigation="false"
        :pagination="false"
        @swiper="(swiper) => (thumbsSwiper = swiper)"
      >
        <CarouselSlide v-for="slide in carouselThumbsSlides" :key="slide.title">
          ${Wa}
        </CarouselSlide>
      </Carousel>
    </div>`}))},rt={parameters:{controls:{disable:!1},docs:{source:ie(el)}},render:(e,s)=>({components:ne,setup(){return{args:Pa(s),carouselPlaygroundSlides:Oi}},template:`<Carousel v-bind="args">
      <CarouselSlide v-for="slide in carouselPlaygroundSlides" :key="slide.title">
        ${he}
      </CarouselSlide>
    </Carousel>`})};var _t,Ot,Ft;qe.parameters={...qe.parameters,docs:{...(_t=qe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  name: "기본",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "Swiper Default 데모와 동일한 내비게이션·페이지네이션 구성입니다. 터치·스와이프·키보드·grab cursor를 기본 지원합니다."
      },
      source: vueSource(carouselDefaultSourceCode)
    }
  },
  render: (_args, context) => ({
    components: slideComponents,
    setup() {
      return {
        args: storyArgsRef(context),
        carouselDefaultSlides
      };
    },
    template: \`<Carousel v-bind="args">
      <CarouselSlide v-for="slide in carouselDefaultSlides" :key="slide.title">
        \${carouselDefaultSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  })
}`,...(Ft=(Ot=qe.parameters)==null?void 0:Ot.docs)==null?void 0:Ft.source}}};var Gt,Ht,Rt;je.parameters={...je.parameters,docs:{...(Gt=je.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  name: "페이드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      source: vueSource(carouselFadeSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    effect: 'fade',
    ariaLabel: '페이드 슬라이드'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselFadeSlides
      };
    },
    template: \`<Carousel aria-label="페이드 슬라이드" effect="fade">
      <CarouselSlide v-for="slide in carouselFadeSlides" :key="slide.title">
        \${carouselFadeSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(Rt=(Ht=je.parameters)==null?void 0:Ht.docs)==null?void 0:Rt.source}}};var Vt,Xt,Nt;Ue.parameters={...Ue.parameters,docs:{...(Vt=Ue.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  name: "자동 재생",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "autoplay prop으로 자동 재생과 재생·정지 버튼을 제공합니다. 페이드 전환은 페이드 섹션을 참고하세요."
      },
      source: vueSource(carouselAutoplaySourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    autoplay: true,
    loop: true,
    dotsOutside: true,
    ariaLabel: '슬라이드 자동 재생'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselAutoplaySlides
      };
    },
    template: \`<Carousel
      aria-label="슬라이드 자동 재생"
      autoplay
      :delay="4000"
      loop
      dots-outside
    >
      <CarouselSlide v-for="slide in carouselAutoplaySlides" :key="slide.title">
        \${carouselAutoplaySlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(Nt=(Xt=Ue.parameters)==null?void 0:Xt.docs)==null?void 0:Nt.source}}};var Yt,Wt,qt;Ke.parameters={...Ke.parameters,docs:{...(Yt=Ke.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  name: "무한 루프",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "loop prop으로 슬라이드를 순환합니다."
      },
      source: vueSource(carouselLoopSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    loop: true,
    ariaLabel: '루프 슬라이드'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselLoopSlides
      };
    },
    template: \`<Carousel aria-label="루프 슬라이드" loop>
      <CarouselSlide v-for="slide in carouselLoopSlides" :key="slide.title">
        \${carouselLoopSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(qt=(Wt=Ke.parameters)==null?void 0:Wt.docs)==null?void 0:qt.source}}};var jt,Ut,Kt;Ze.parameters={...Ze.parameters,docs:{...(jt=Ze.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  name: "슬라이드 per view",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "slides-per-view=&quot;auto&quot;로 여러 카드가 동시에 보입니다."
      },
      source: vueSource(carouselMultiSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    multi: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    centered: true,
    navigation: false,
    ariaLabel: '다중 슬라이드'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselMultiSlides
      };
    },
    template: \`<Carousel aria-label="다중 슬라이드" multi slides-per-view="auto" :space-between="16" centered :navigation="false">
      <CarouselSlide v-for="slide in carouselMultiSlides" :key="slide.title">
        \${carouselMultiSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(Kt=(Ut=Ze.parameters)==null?void 0:Ut.docs)==null?void 0:Kt.source}}};var Zt,Qt,Jt;Qe.parameters={...Qe.parameters,docs:{...(Zt=Qe.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  name: "슬라이드 간격",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "space-between prop으로 슬라이드 사이 간격(px)을 지정합니다. 다중·그리드·커버플로우에서의 간격은 각 전용 섹션을 참고하세요."
      },
      source: vueSource(carouselSpacingSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    spaceBetween: 12,
    loop: true,
    ariaLabel: '기본 간격'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselSpaceSlides
      };
    },
    template: \`<Carousel aria-label="기본 간격" :space-between="12" loop>
      <CarouselSlide v-for="slide in carouselSpaceSlides" :key="slide.title">
        \${carouselSimpleSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(Jt=(Qt=Qe.parameters)==null?void 0:Qt.docs)==null?void 0:Jt.source}}};var ea,ta,aa;Je.parameters={...Je.parameters,docs:{...(ea=Je.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: "페이지네이션",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "화살표 없이 도트만 사용합니다."
      },
      source: vueSource(carouselPaginationSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    loop: true,
    navigation: false,
    ariaLabel: '페이지네이션 슬라이드'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselPaginationSlides
      };
    },
    template: \`<Carousel aria-label="페이지네이션 슬라이드" loop :navigation="false">
      <CarouselSlide v-for="slide in carouselPaginationSlides" :key="slide.title">
        \${carouselSimpleSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(aa=(ta=Je.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};var sa,na,ia;et.parameters={...et.parameters,docs:{...(sa=et.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: "분수 페이지네이션",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      source: vueSource(carouselFractionSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    pagination: 'fraction',
    ariaLabel: '분수 페이지네이션 슬라이드'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselFractionSlides
      };
    },
    template: \`<Carousel aria-label="분수 페이지네이션 슬라이드" pagination="fraction">
      <CarouselSlide v-for="slide in carouselFractionSlides" :key="slide.title">
        \${carouselFractionSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(ia=(na=et.parameters)==null?void 0:na.docs)==null?void 0:ia.source}}};var la,ra,oa;tt.parameters={...tt.parameters,docs:{...(la=tt.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: "프로그레스 페이지네이션",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'pagination="progressbar" prop으로 진행률 바를 표시합니다.'
      },
      source: vueSource(carouselProgressSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    pagination: 'progressbar',
    loop: true,
    ariaLabel: '프로그레스 페이지네이션'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselProgressSlides
      };
    },
    template: \`<Carousel aria-label="프로그레스 페이지네이션" pagination="progressbar" loop>
      <CarouselSlide v-for="slide in carouselProgressSlides" :key="slide.title">
        \${carouselFractionSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(oa=(ra=tt.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var da,ua,ca;at.parameters={...at.parameters,docs:{...(da=at.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: "커스텀 페이지네이션",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'pagination="custom" prop으로 번호 불릿을 표시합니다.'
      },
      source: vueSource(carouselCustomPaginationSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    pagination: 'custom',
    loop: true,
    navigation: false,
    ariaLabel: '커스텀 페이지네이션'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselCustomPaginationSlides
      };
    },
    template: \`<Carousel
      aria-label="커스텀 페이지네이션"
      pagination="custom"
      loop
      :navigation="false"
    >
      <CarouselSlide v-for="slide in carouselCustomPaginationSlides" :key="slide.title">
        \${carouselSimpleSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(ca=(ua=at.parameters)==null?void 0:ua.docs)==null?void 0:ca.source}}};var fa,ma,pa;st.parameters={...st.parameters,docs:{...(fa=st.parameters)==null?void 0:fa.docs,source:{originalSource:`{
  name: "그리드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "grid-rows prop으로 다행 그리드 레이아웃을 구성합니다. slides-per-group으로 1장씩 또는 한 화면(그룹) 단위 이동을 선택할 수 있습니다. 2행 × 3열이면 :slides-per-group=\\"6\\"이 페이지 이동입니다."
      },
      source: vueSource(carouselGridSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    slidesPerView: 3,
    gridRows: 2,
    slidesPerGroup: 6,
    spaceBetween: 16,
    ariaLabel: '그리드 그룹 이동'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselGridSlides
      };
    },
    template: \`<div class="demo_preview-block">
      <h3 class="typo_overline">1장씩 이동</h3>
      <p class="typo_caption">slides-per-group 생략(기본 1) — 화살표·스와이프 시 한 칸씩 이동합니다.</p>
      <Carousel
        aria-label="그리드 1장씩"
        :slides-per-view="3"
        :grid-rows="2"
        :space-between="16"
      >
        <CarouselSlide v-for="slide in carouselGridSlides" :key="slide.title">
          \${carouselSimpleSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">그룹 이동</h3>
      <p class="typo_caption">:slides-per-group="6" — 한 화면(2행 × 3열) 단위로 페이지처럼 이동합니다.</p>
      <Carousel
        aria-label="그리드 그룹 이동"
        :slides-per-view="3"
        :grid-rows="2"
        :slides-per-group="6"
        :space-between="16"
      >
        <CarouselSlide v-for="slide in carouselGridSlides" :key="'group-' + slide.title">
          \${carouselSimpleSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>\`
  }))
}`,...(pa=(ma=st.parameters)==null?void 0:ma.docs)==null?void 0:pa.source}}};var ha,ga,va;nt.parameters={...nt.parameters,docs:{...(ha=nt.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  name: "커버플로우",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'effect="coverflow" prop으로 3D 커버플로우 효과를 적용합니다. 활성 슬라이드는 가운데 정렬되며, coverflow-sides="1"로 좌·우 1개씩 peek합니다.'
      },
      source: vueSource(carouselCoverflowSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    effect: 'coverflow',
    coverflowStyle: 'tilt',
    coverflowSides: 1,
    spaceBetween: 16,
    initialSlide: 0,
    loop: true,
    pagination: false,
    ariaLabel: '커버플로우 슬라이드'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselCoverflowSlides
      };
    },
    template: \`<Carousel
      aria-label="커버플로우 슬라이드"
      effect="coverflow"
      :coverflow-sides="1"
      :space-between="16"
      loop
      :pagination="false"
    >
      <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="slide.title">
        \${carouselCoverflowSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  }))
}`,...(va=(ga=nt.parameters)==null?void 0:ga.docs)==null?void 0:va.source}}};var Ca,ba,ya;it.parameters={...it.parameters,docs:{...(Ca=it.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  name: "커버플로우 · 축소",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'coverflow-style="rise"로 측면만 축소합니다. 슬라이드 크기는 coverflow-sides와 관계없이 동일하며, 좌·우 노출(1 · 1.5 · 2)은 간격으로 조절합니다.'
      },
      source: vueSource(carouselCoverflowRiseSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    effect: 'coverflow',
    coverflowStyle: 'rise',
    coverflowSides: 1.5,
    spaceBetween: 16,
    initialSlide: 0,
    loop: true,
    pagination: false,
    ariaLabel: '커버플로우 축소 좌우 1.5'
  },
  argTypes: {
    coverflowSides: {
      control: 'select',
      options: [1, 1.5, 2],
      type: {
        name: 'union',
        summary: "1 | 1.5 | 2 | 'auto'"
      }
    }
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      return {
        carouselCoverflowSlides
      };
    },
    template: \`<div class="demo_preview-block">
      <h3 class="typo_overline">좌우 1개씩</h3>
      <p class="typo_caption">:coverflow-sides="1" — 슬라이드 크기 기준. 좌·우에 1개씩.</p>
      <Carousel
        aria-label="커버플로우 축소 좌우 1"
        effect="coverflow"
        coverflow-style="rise"
        :coverflow-sides="1"
        :space-between="16"
        loop
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="slide.title">
          \${carouselCoverflowSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">좌우 약 1.5개 (기본)</h3>
      <p class="typo_caption">:coverflow-sides="1.5" — 크기는 1과 동일, 간격으로 좌·우 약 1.5개 peek.</p>
      <Carousel
        aria-label="커버플로우 축소 좌우 1.5"
        effect="coverflow"
        coverflow-style="rise"
        :coverflow-sides="1.5"
        :space-between="16"
        loop
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="'sides15-' + slide.title">
          \${carouselCoverflowSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>

    <div class="demo_preview-block">
      <h3 class="typo_overline">좌우 2개씩</h3>
      <p class="typo_caption">:coverflow-sides="2" — 크기는 1과 동일, 간격으로 좌·우 2개씩 peek.</p>
      <Carousel
        aria-label="커버플로우 축소 좌우 2"
        effect="coverflow"
        coverflow-style="rise"
        :coverflow-sides="2"
        :space-between="16"
        loop
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselCoverflowSlides" :key="'sides2-' + slide.title">
          \${carouselCoverflowSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>\`
  }))
}`,...(ya=(ba=it.parameters)==null?void 0:ba.docs)==null?void 0:ya.source}}};var Sa,Ea,Ta;lt.parameters={...lt.parameters,docs:{...(Sa=lt.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  name: "썸네일 갤러리",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "메인 캐러셀과 썸네일 캐러셀을 thumbs · @swiper로 양방향 연동합니다. 하단 썸네일은 탭 네비처럼 동작합니다 — 시작은 좌측 정렬, 중간은 활성 항목 가운데, 끝에서는 우측으로 활성화됩니다."
      },
      source: vueSource(carouselThumbsSourceCode)
    }
  },
  args: {
    ...carouselDefaultArgs,
    pagination: false,
    ariaLabel: '갤러리 메인'
  },
  render: withDocsCanvasRender(() => ({
    components: slideComponents,
    setup() {
      const thumbsSwiper = ref(null);
      return {
        carouselThumbsSlides,
        thumbsSwiper
      };
    },
    template: \`<div class="carousel_gallery">
      <Carousel
        aria-label="갤러리 메인"
        :thumbs="thumbsSwiper"
        :pagination="false"
      >
        <CarouselSlide v-for="slide in carouselThumbsSlides" :key="slide.title">
          \${carouselThumbsMainSlideTemplate}
        </CarouselSlide>
      </Carousel>
      <Carousel
        aria-label="갤러리 썸네일"
        thumbs-control
        :slides-per-view="4"
        :space-between="8"
        :navigation="false"
        :pagination="false"
        @swiper="(swiper) => (thumbsSwiper = swiper)"
      >
        <CarouselSlide v-for="slide in carouselThumbsSlides" :key="slide.title">
          \${carouselThumbsControlSlideTemplate}
        </CarouselSlide>
      </Carousel>
    </div>\`
  }))
}`,...(Ta=(Ea=lt.parameters)==null?void 0:Ea.docs)==null?void 0:Ta.source}}};var xa,Ma,Ba;rt.parameters={...rt.parameters,docs:{...(xa=rt.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      source: vueSource(carouselPlaygroundSourceCode)
    }
  },
  render: (_args, context) => ({
    components: slideComponents,
    setup() {
      return {
        args: storyArgsRef(context),
        carouselPlaygroundSlides
      };
    },
    template: \`<Carousel v-bind="args">
      <CarouselSlide v-for="slide in carouselPlaygroundSlides" :key="slide.title">
        \${carouselSimpleSlideTemplate}
      </CarouselSlide>
    </Carousel>\`
  })
}`,...(Ba=(Ma=rt.parameters)==null?void 0:Ma.docs)==null?void 0:Ba.source}}};const ml=["Default","Fade","Autoplay","Loop","Multi","Space","Pagination","Fraction","Progress","CustomPagination","Grid","Coverflow","CoverflowRise","ThumbsGallery","Playground"];export{Ue as Autoplay,nt as Coverflow,it as CoverflowRise,at as CustomPagination,qe as Default,je as Fade,et as Fraction,st as Grid,Ke as Loop,Ze as Multi,Je as Pagination,rt as Playground,tt as Progress,Qe as Space,lt as ThumbsGallery,ml as __namedExportsOrder,fl as default};
