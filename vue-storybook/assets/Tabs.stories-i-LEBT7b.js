import{a4 as ra,af as ba,x as $,aF as ta,i as h,m as z,av as Re,w as V,p as Da,q as sa,o as g,d as w,y as wa,t as Fe,k as Ne,l as Oe,u as Aa,a as fa,a5 as ia,aJ as We,aK as Ke,c as S,s as k,f as W,n as va,aL as je,aM as Ue,ak as Je,F as Ba,a7 as La,r as q,g as f,aN as Ia,h as qa,_ as Pa,aO as Ge,aw as He,b as _e,ax as he,aP as oa}from"./iframe-CAswI7Qe.js";import{w as F,s as Qe}from"./story-renders-DjeoaiCa.js";import{_ as Xe}from"./Badge-C0poPfcI.js";import{h as Ye,a as Ze}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";function an({listRef:n,enabled:p,vertical:e,variant:d,onTabsChange:A}){const B=h(null);let C=null;function _(){if(!p.value||!n.value){B.value=null;return}const o=n.value,s=o.querySelector('.tabs_tab[aria-selected="true"]');if(!s){B.value=null;return}const r=o.getBoundingClientRect(),m=s.getBoundingClientRect(),D=m.left-r.left+o.scrollLeft,E=m.top-r.top+o.scrollTop,t=m.width,b=m.height,v=2;if(e.value){B.value={width:`${v}px`,height:`${b}px`,transform:`translate3d(${D+t-v}px, ${E}px, 0)`};return}if(d.value==="pill"){B.value={width:`${t}px`,height:`${b}px`,transform:`translate3d(${D}px, ${E}px, 0)`};return}B.value={width:`${t}px`,height:`${v}px`,transform:`translate3d(${D}px, ${E+b-v}px, 0)`}}function c(){ta(()=>{requestAnimationFrame(_)})}function T(){C==null||C.disconnect(),n.value&&(C=new ResizeObserver(c),C.observe(n.value),n.value.querySelectorAll(".tabs_tab").forEach(o=>C.observe(o)))}function u(){c()}return ra(()=>{c(),T();const o=n.value;o&&(o.addEventListener("click",u),o.addEventListener("keydown",u),o.addEventListener("scroll",u,{passive:!0}))}),ba(()=>{const o=n.value;o&&(o.removeEventListener("click",u),o.removeEventListener("keydown",u),o.removeEventListener("scroll",u)),C==null||C.disconnect()}),$([p,e,d],c),A&&$(A,()=>{c(),T()}),{indicatorStyle:B,updateIndicator:c}}const Ta=1;function en({listRef:n,enabled:p,onTabsChange:e}){const d=h(!1),A=h(!1),B=h(!1);let C=null;function _(){const t=n.value;if(!p.value||!t){d.value=!1,A.value=!1,B.value=!1;return}const{scrollLeft:b,scrollWidth:v,clientWidth:I}=t,M=v-I;B.value=M>Ta,d.value=b>Ta,A.value=b<M-Ta}function c(){ta(()=>{requestAnimationFrame(_)})}function T(t){const b=n.value;if(!b)return;const v=Math.max(b.clientWidth*.75,120);b.scrollBy({left:t*v,behavior:"smooth"})}function u(){T(-1)}function o(){T(1)}function s(t){const b=n.value;if(!p.value||!b||!t)return;const v=b.getBoundingClientRect(),I=t.getBoundingClientRect(),R=I.left-v.left+b.scrollLeft+I.width/2,N=b.clientWidth/2,Ca=b.scrollWidth-b.clientWidth,ca=R-N;b.scrollTo({left:Math.max(0,Math.min(ca,Ca)),behavior:"smooth"})}function r(){const t=n.value;if(!p.value||!t)return;const b=t.querySelector('.tabs_tab[aria-selected="true"]');s(b)}function m(t){var v;const b=t.target.closest('[role="tab"]');!b||!((v=n.value)!=null&&v.contains(b))||(c(),ta(()=>{requestAnimationFrame(()=>s(b))}))}function D(){c(),ta(()=>{requestAnimationFrame(r)})}function E(){C==null||C.disconnect();const t=n.value;t&&(C=new ResizeObserver(c),C.observe(t),t.querySelectorAll(".tabs_tab").forEach(b=>C.observe(b)))}return ra(()=>{c(),E();const t=n.value;t&&(t.addEventListener("scroll",_,{passive:!0}),t.addEventListener("click",m),t.addEventListener("keydown",D))}),ba(()=>{const t=n.value;t&&(t.removeEventListener("scroll",_),t.removeEventListener("click",m),t.removeEventListener("keydown",D)),C==null||C.disconnect()}),$(p,c),e&&$(e,()=>{c(),E()}),{canScrollPrev:d,canScrollNext:A,hasOverflow:B,scrollPrev:u,scrollNext:o,scrollTabToCenter:s,scrollActiveTabIntoView:r,updateScrollState:c}}const nn={class:"tabs_icon"},ln={class:"tabs_label"},Se=Object.assign({inheritAttrs:!1},{__name:"TabsTab",props:{id:{type:String,required:!0},panelId:{type:String,required:!0},label:{type:String,required:!0},active:Boolean,disabled:Boolean,tabindex:{type:Number,default:-1},iconSlot:Function,badgeSlot:Function},emits:["click"],setup(n,{emit:p}){const e=p;return(d,A)=>(g(),z(sa,Da({tag:"button",role:"tab",type:"button",variant:"text",fit:"",class:["tabs_tab",{"is-active":n.active,"is-disabled":n.disabled}],id:n.id,"aria-selected":n.active?"true":"false","aria-controls":n.panelId,tabindex:n.tabindex,disabled:n.disabled,"aria-disabled":n.disabled||void 0},d.$attrs,{onClick:A[0]||(A[0]=B=>e("click",B))}),Re({default:V(()=>[w("span",ln,Fe(n.label),1)]),_:2},[n.iconSlot?{name:"icon-before",fn:V(()=>[w("span",nn,[(g(),z(wa({render:n.iconSlot})))])]),key:"0"}:void 0,n.badgeSlot?{name:"icon-after",fn:V(()=>[(g(),z(wa({render:n.badgeSlot})))]),key:"1"}:void 0]),1040,["class","id","aria-selected","aria-controls","tabindex","disabled","aria-disabled"]))}}),un={class:"tabs_bar"},tn=["aria-label"],sn={key:2,class:"tabs_extra","data-demo-slot":"extra"},on={class:"tabs_panels","data-demo-slot":"default"},rn=["id","aria-labelledby"],bn=["id","aria-labelledby","hidden"],P=Object.assign({inheritAttrs:!1},{__name:"Tabs",props:{ripple:Ne,mode:{type:String,default:"panels",validator:n=>["panels","dynamic"].includes(n)},modelValue:{type:[String,Number],default:void 0},variant:{type:String,default:"line",validator:n=>["line","card","pill"].includes(n)},size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},layout:{type:String,default:"auto",validator:n=>["auto","equal","scroll"].includes(n)},vertical:Boolean,scrollable:Boolean,ariaLabel:String,items:Array,indicator:{type:String,default:"static",validator:n=>["static","slide"].includes(n)}},emits:["update:modelValue"],setup(n,{emit:p}){const e=n,d=p,{rippleAttrs:A,childRippleAttrs:B}=Oe(e,{mode:"container"});Aa();const C=fa(),_=h(null),c=h(null),T=new Map,u=h([]),o=ia().replace(/:/g,""),s=h(null);We(e,_,C);const r=f(()=>e.mode==="dynamic"),m=f(()=>e.layout==="scroll"&&!e.vertical),D=f(()=>e.layout==="equal"),E=f(()=>e.scrollable&&e.layout==="auto"),t=f(()=>{var a;return!!((a=e.items)!=null&&a.length)}),b=f(()=>t.value&&!r.value),v=f(()=>t.value?e.items.length:u.value.length),I=f(()=>{const a=["tabs",`tabs_${e.variant}`];return e.size==="sm"&&a.push("tabs_sm"),e.size==="lg"&&a.push("tabs_lg"),e.vertical&&a.push("tabs_vertical"),D.value&&a.push("tabs_equal"),m.value&&a.push("tabs_scroll-nav"),E.value&&a.push("tabs_scrollable"),r.value&&a.push("tabs_dynamic"),e.indicator==="slide"&&a.push("tabs_indicator-slide"),C.class&&a.push(C.class),a}),M=f(()=>e.indicator==="slide"),{indicatorStyle:R,updateIndicator:N}=an({listRef:c,enabled:M,vertical:Ia(e,"vertical"),variant:Ia(e,"variant"),onTabsChange:()=>v.value}),{canScrollPrev:Ca,canScrollNext:ca,hasOverflow:Ea,scrollPrev:we,scrollNext:Le,updateScrollState:ka}=en({listRef:c,enabled:m,onTabsChange:()=>v.value}),Ie=f(()=>{const{class:a,...i}=C;return i});function ma(a,i){return a.key??a.value??i}function qe(a){(r.value||a.menuOnly)&&(a.panelId=o),T.set(a.id,a),u.value=[...T.values()]}function ze(a){T.delete(a),u.value=[...T.values()]}function Fa(a){return r.value?(a.value??a.id)===s.value:k(a.isActive)}function _a(a,i){if(Ge(a.isActive)){a.isActive.value=i;return}a.isActive=i}function ha(a){s.value=a,d("update:modelValue",a),N(),ka()}function Sa(a){if(r.value){if(t.value){const l=O.value.find(x=>x.id===a);l&&!l.disabled&&ha(l.key);return}const i=u.value.find(l=>l.id===a);i&&!i.disabled&&ha(i.value??i.id);return}u.value.forEach(i=>{i.disabled||_a(i,i.id===a)}),N(),ka()}He("tabs",{registerTab:qe,unregisterTab:ze,selectTab:Sa}),$(()=>e.modelValue,a=>{r.value&&a!=null&&a!==""&&(s.value=a)}),Ke(()=>{if(r.value){if(e.modelValue!=null&&e.modelValue!==""){s.value=e.modelValue;return}if(t.value){const L=e.items.find((da,Fn)=>da.active);if(L){s.value=ma(L,e.items.indexOf(L));return}const pa=e.items.find(da=>!da.disabled);pa&&(s.value=ma(pa,e.items.indexOf(pa)));return}if(!u.value.length)return;const i=u.value.find(L=>L.active),l=u.value.find(L=>!L.disabled),x=i||l;x&&(s.value=x.value??x.id);return}if(b.value){const i=e.items.some(l=>l.active);e.items.forEach((l,x)=>{!i&&x===0&&(l.active=!0)});return}if(!u.value.length)return;if(!u.value.some(i=>Fa(i))){const i=u.value.find(l=>!l.disabled);i&&_a(i,!0)}});const O=f(()=>!r.value||!t.value?[]:e.items.map((a,i)=>{const l=ma(a,i);return{id:`item-tab-${i}`,key:l,panelId:o,label:a.label,disabled:a.disabled,isActive:s.value===l,raw:a}})),Me=f(()=>{var i;if(!r.value)return null;if(t.value)return((i=O.value.find(l=>l.isActive))==null?void 0:i.raw)??null;const a=u.value.find(l=>(l.value??l.id)===s.value);return a?{key:a.value??a.id,label:a.label}:null}),Ve=f(()=>{var a,i;return r.value?t.value?((a=O.value.find(l=>l.isActive))==null?void 0:a.id)??"":((i=u.value.find(l=>(l.value??l.id)===s.value))==null?void 0:i.id)??"":""}),xa=f(()=>{if(!b.value)return[];const a=e.items.some(i=>i.active);return e.items.map((i,l)=>({id:`item-tab-${l}`,panelId:`item-panel-${l}`,label:i.label,content:i.content,disabled:i.disabled,isActive:i.active||!a&&l===0}))}),$e=f(()=>r.value&&t.value?O.value.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:a.isActive,iconSlot:null,badgeSlot:null})):b.value?xa.value.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:a.isActive,iconSlot:null,badgeSlot:null})):u.value.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:Fa(a),iconSlot:a.iconSlot??null,badgeSlot:a.badgeSlot??null})));return(a,i)=>(g(),S("div",Da({ref_key:"rootRef",ref:_,class:I.value,"data-tabs":""},{...Ie.value,...k(A)}),[w("div",un,[m.value&&k(Ea)?(g(),z(sa,{key:0,class:"tabs_nav tabs_nav_prev",variant:"outline",color:"default",size:"sm","icon-only":"",ripple:!1,"aria-label":"이전 탭",disabled:!k(Ca),onClick:k(we)},{"icon-before":V(()=>[qa(Pa,{name:"chevron-left",size:"sm"})]),_:1},8,["disabled","onClick"])):W("",!0),w("div",{class:va(["tabs_list-wrap",{"tabs_scroll-viewport":m.value}])},[w("div",{ref_key:"listRef",ref:c,class:"tabs_list",role:"tablist","aria-label":n.ariaLabel},[n.indicator==="slide"?je((g(),S("span",{key:0,class:"tabs_indicator","aria-hidden":"true",style:Je(k(R))},null,4)),[[Ue,k(R)]]):W("",!0),(g(!0),S(Ba,null,La($e.value,l=>(g(),z(Se,Da({key:l.id},{ref_for:!0},k(B),{id:l.id,"panel-id":l.panelId,label:l.label,active:l.active,disabled:l.disabled,tabindex:l.active?0:-1,"icon-slot":l.iconSlot,"badge-slot":l.badgeSlot,onClick:x=>Sa(l.id)}),null,16,["id","panel-id","label","active","disabled","tabindex","icon-slot","badge-slot","onClick"]))),128)),q(a.$slots,"tabs")],8,tn)],2),m.value&&k(Ea)?(g(),z(sa,{key:1,class:"tabs_nav tabs_nav_next",variant:"outline",color:"default",size:"sm","icon-only":"",ripple:!1,"aria-label":"다음 탭",disabled:!k(ca),onClick:k(Le)},{"icon-before":V(()=>[qa(Pa,{name:"chevron-right",size:"sm"})]),_:1},8,["disabled","onClick"])):W("",!0),a.$slots.extra?(g(),S("div",sn,[q(a.$slots,"extra")])):W("",!0)]),w("div",on,[r.value?(g(),S(Ba,{key:0},[w("div",{id:k(o),class:"tabs_panel is-active",role:"tabpanel","aria-labelledby":Ve.value},[q(a.$slots,"panel",{item:Me.value,value:s.value,active:!0})],8,rn),q(a.$slots,"default")],64)):b.value?(g(!0),S(Ba,{key:1},La(xa.value,l=>(g(),S("div",{key:l.panelId,id:l.panelId,class:va(["tabs_panel",{"is-active":l.isActive}]),role:"tabpanel","aria-labelledby":l.id,hidden:!l.isActive||void 0},[w("p",null,Fe(l.content),1)],10,bn))),128)):q(a.$slots,"default",{key:2})])],16))}}),xe={__name:"TabMenu",props:{label:{type:String,required:!0},value:String,active:Boolean,disabled:Boolean},setup(n){const p=n,e=he("tabs",null),d=Aa(),A=fa(),B=h(null);function C(T){var r,m,D;const u=T==null?void 0:T();if(!(u!=null&&u.length))return"";const o=u[0],s=((r=o.type)==null?void 0:r.name)||((m=o.type)==null?void 0:m.__name);return s==="Icon"&&((D=o.props)!=null&&D.name)?`<Icon name="${o.props.name}" />`:s==="Badge"?oa("Badge",o.props??{},{},o.props??{},{defaults:{color:"primary",variant:"filled",size:"md"},booleanProps:new Set(["round","checkable","add","closable","selected","disabled","count"]),selfClosing:!1}):"..."}function _(T,u,o){var r,m;const s={};return(r=u.icon)!=null&&r.call(u)&&(s.icon=C(u.icon)),(m=u.badge)!=null&&m.call(u)&&(s.badge=C(u.badge)),oa("TabMenu",T,u,o,{booleanProps:new Set(["active","disabled"]),labelProp:"label",selfClosing:!0,slotContent:s})}_e(_,p,d,B,A);const c=ia().replace(/:/g,"");return ra(()=>{e==null||e.registerTab({id:c,value:p.value??c,label:p.label,active:p.active,disabled:p.disabled,menuOnly:!0,iconSlot:d.icon?()=>d.icon():null,badgeSlot:d.badge?()=>d.badge():null})}),ba(()=>{e==null||e.unregisterTab(c)}),(T,u)=>(g(),S("span",{ref_key:"rootRef",ref:B,hidden:"","aria-hidden":"true"},null,512))}},Cn=["id","aria-labelledby","hidden"],y={__name:"TabPanel",props:{label:{type:String,required:!0},active:Boolean,disabled:Boolean},setup(n){const p=n,e=he("tabs",null),d=Aa(),A=fa(),B=h(null);function C(o){var D,E,t;const s=o==null?void 0:o();if(!(s!=null&&s.length))return"";const r=s[0],m=((D=r.type)==null?void 0:D.name)||((E=r.type)==null?void 0:E.__name);return m==="Icon"&&((t=r.props)!=null&&t.name)?`<Icon name="${r.props.name}" />`:m==="Badge"?oa("Badge",r.props??{},{},r.props??{},{defaults:{color:"primary",variant:"filled",size:"md"},booleanProps:new Set(["round","checkable","add","closable","selected","disabled","count"]),selfClosing:!1}):"..."}function _(o,s,r){var D,E;const m={};return(D=s.icon)!=null&&D.call(s)&&(m.icon=C(s.icon)),(E=s.badge)!=null&&E.call(s)&&(m.badge=C(s.badge)),oa("TabPanel",o,s,r,{booleanProps:new Set(["active","disabled"]),labelProp:"label",selfClosing:!1,slotContent:m})}_e(_,p,d,B,A);const c=ia().replace(/:/g,""),T=ia().replace(/:/g,""),u=h(p.active);return ra(()=>{e==null||e.registerTab({id:c,panelId:T,label:p.label,active:p.active,disabled:p.disabled,isActive:u,iconSlot:d.icon?()=>d.icon():null,badgeSlot:d.badge?()=>d.badge():null})}),ba(()=>{e==null||e.unregisterTab(c)}),(o,s)=>(g(),S("div",{ref_key:"rootRef",ref:B,id:k(T),class:va(["tabs_panel",{"is-active":u.value}]),role:"tabpanel","aria-labelledby":k(c),hidden:!u.value||void 0},[q(o.$slots,"default")],10,Cn))}},ga=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],cn=[{name:"mode",type:"'panels' | 'dynamic'",default:"panels",description:"panels: 탭별 패널 · dynamic: 단일 패널 콘텐츠 전환"},{name:"v-model / model-value",type:"string | number",default:"—",description:"mode=dynamic 선택 탭 key"},{name:"variant",type:"'line' | 'card' | 'pill'",default:"line",description:"tabs_line · tabs_card · tabs_pill"},{name:"indicator",type:"'static' | 'slide'",default:"static",description:"line·pill 인디케이터. slide는 선택 탭으로 이동 애니메이션"},{name:"layout",type:"'auto' | 'equal' | 'scroll'",default:"auto",description:"auto: 콘텐츠 너비 · equal: 100% 균등 분할 · scroll: 좌우 네비 스크롤"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tabs_sm · tabs_lg"},{name:"vertical",type:"boolean",default:"false",description:"tabs_vertical"},{name:"scrollable",type:"boolean",default:"false",description:"layout=auto일 때 가로 스크롤바 표시 (tabs_scrollable)"},{name:"aria-label",type:"string",default:"—",description:"tablist aria-label"},{name:"items",type:"Array<{ key?, label, content?, active?, disabled? }>",default:"—",description:"선언적 탭. panels: content로 패널 생성 · dynamic: label만 사용"},Ye],mn=ga,pn=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"}],dn=ga,Bn=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"value",type:"string",default:"—",description:"mode=dynamic v-model key"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"}],ya=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Tn=[{name:"tabs",description:"탭 바 추가 콘텐츠"},{name:"extra",description:"탭 바 우측 영역 (tabs_extra)"},{name:"panel",description:"mode=dynamic 단일 패널 본문 ({ item, value, active })"},{name:"default",description:"TabPanel·TabMenu 나열 (items prop 대체)"}],Dn=ya,vn=[{name:"default",description:"패널 본문 (tabs_panel)"},{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],Pn=ya,An=[{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],fn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],gn=[{name:"tabs · tabs_bar · tabs_list · tabs_tab",description:"루트·탭 바·목록·탭 버튼"},{name:"tabs_label · tabs_extra · tabs_panels · tabs_panel",description:"라벨·추가·패널 영역"},{name:"tabs_line · tabs_card · tabs_pill",description:"스타일 변형"},{name:"tabs_indicator-slide",description:'슬라이드 인디케이터 (indicator="slide")'},{name:"tabs_indicator",description:"이동하는 인디케이터 요소"},{name:"tabs_equal · tabs_scroll-nav · tabs_dynamic",description:"균등 분할·네비 스크롤·동적 패널"},{name:"tabs_list-wrap · tabs_scroll-viewport · tabs_nav",description:"목록 래퍼·스크롤 뷰포트·좌우 네비 버튼"},{name:"tabs_sm · tabs_lg · tabs_vertical · tabs_scrollable",description:"크기·레이아웃"},{name:"is-active · is-disabled",description:"탭·패널 상태"},{name:"data-tabs",description:"키보드·포커스 JS"},{name:'role="tablist" · role="tab" · role="tabpanel"',description:"접근성"},...Ze],yn=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],En=[{name:"--tabs-gap · --tabs-padding",default:"—",description:"탭 간격·패딩"},{name:"--tabs-nav-size",default:"—",description:"네비 스크롤 버튼 크기"},{name:"--tabs-indicator-height · --tabs-indicator-transition",default:"—",description:"line 변형 인디케이터·슬라이드 전환"},{name:"--tabs-panel-padding",default:"—",description:"패널 패딩"}],kn=[{title:"API · Tabs Props",tables:[{columns:ga,rows:cn,codeColumn:"name"}]},{title:"API · TabPanel Props",tables:[{columns:mn,rows:pn,codeColumn:"name"}]},{title:"API · TabMenu Props",tables:[{columns:dn,rows:Bn,codeColumn:"name"}]},{title:"API · Tabs Slots",tables:[{columns:ya,rows:Tn,codeColumn:"name"}]},{title:"API · TabPanel Slots",tables:[{columns:Dn,rows:vn,codeColumn:"name"}]},{title:"API · TabMenu Slots",tables:[{columns:Pn,rows:An,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:fn,rows:gn,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:yn,rows:En,codeColumn:"name"}]}],Ln={title:"Components/네비게이션/Tabs",id:"components-tabs",component:P,subcomponents:{TabsTab:Se,TabPanel:y,TabMenu:xe},tags:["autodocs"],argTypes:{mode:{control:"select",options:["panels","dynamic"],type:{name:"enum",summary:"'panels' | 'dynamic'"}},variant:{control:"select",options:["line","card","pill"],type:{name:"enum",summary:"'line' | 'card' | 'pill'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},layout:{control:"select",options:["auto","equal","scroll"],type:{name:"enum",summary:"'auto' | 'equal' | 'scroll'"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},scrollable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},indicator:{control:"select",options:["static","slide"],type:{name:"enum",summary:"'static' | 'slide'"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:kn}},K={parameters:{controls:{disable:!1}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:(n,p)=>({components:{Tabs:P,TabPanel:y},setup(){return{args:Qe(p)}},template:`<Tabs v-bind="args">
      <TabPanel label="탭 1" active>첫 번째 탭</TabPanel>
      <TabPanel label="탭 2">두 번째 탭</TabPanel>
    </Tabs>`})},j={name:"기본 (라인)",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_line이 기본 스킨입니다. role=&quot;tablist&quot; · role=&quot;tab&quot; · role=&quot;tabpanel&quot;과 aria-selected, aria-controls로 접근성을 보장합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="프로젝트 정보">
    <TabPanel label="개요" active>
      <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
    </TabPanel>
    <TabPanel label="팀">
      <p>팀 구성원과 역할을 표시합니다.</p>
    </TabPanel>
    <TabPanel label="활동">
      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs aria-label="프로젝트 정보">
        <TabPanel label="개요" active>
          <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
        </TabPanel>
        <TabPanel label="팀">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
      </Tabs>`}))},U={name:"동적 패널",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"mode=&quot;dynamic&quot;은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 #panel 슬롯 내용이 전환됩니다."},source:{code:`<script setup>
import TabMenu from '@uxkm/ui/components/TabMenu.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
const dynamicItems = [
  { key: 'overview', label: '개요', active: true },
  { key: 'team', label: '팀' },
  { key: 'activity', label: '활동' },
];
<\/script>

<template>
  <Tabs
  mode="dynamic"
  :items="dynamicItems"
  aria-label="동적 탭 (items)"
  >
  <template #panel="{ item }">
    <p v-if="item?.key === 'overview'">프로젝트 개요와 목표를 설명하는 영역입니다.</p>
    <p v-else-if="item?.key === 'team'">팀 구성원과 역할을 표시합니다.</p>
    <p v-else-if="item?.key === 'activity'">최근 활동 로그와 타임라인을 보여줍니다.</p>
  </template>
  </Tabs>
  <Tabs mode="dynamic" aria-label="동적 탭 (TabMenu)">
    <TabMenu label="개요" value="overview" active />
    <TabMenu label="팀" value="team" />
    <TabMenu label="활동" value="activity" />
    <template #panel="{ value }">
      <p v-if="value === 'overview'">TabMenu로 선언한 동적 패널 — 개요</p>
      <p v-else-if="value === 'team'">TabMenu로 선언한 동적 패널 — 팀</p>
      <p v-else>TabMenu로 선언한 동적 패널 — 활동</p>
    </template>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabMenu:xe,Tabs:P},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`        <Tabs
        mode="dynamic"
        :items="dynamicItems"
        aria-label="동적 탭 (items)"
        >
        <template #panel="{ item }">
        <p v-if="item?.key === 'overview'">프로젝트 개요와 목표를 설명하는 영역입니다.</p>
        <p v-else-if="item?.key === 'team'">팀 구성원과 역할을 표시합니다.</p>
        <p v-else-if="item?.key === 'activity'">최근 활동 로그와 타임라인을 보여줍니다.</p>
        </template>
        </Tabs>
        <Tabs mode="dynamic" aria-label="동적 탭 (TabMenu)">
        <TabMenu label="개요" value="overview" active />
        <TabMenu label="팀" value="team" />
        <TabMenu label="활동" value="activity" />
        <template #panel="{ value }">
        <p v-if="value === 'overview'">TabMenu로 선언한 동적 패널 — 개요</p>
        <p v-else-if="value === 'team'">TabMenu로 선언한 동적 패널 — 팀</p>
        <p v-else>TabMenu로 선언한 동적 패널 — 활동</p>
        </template>
        </Tabs>`}))},J={name:"슬라이드 인디케이터",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"indicator=&quot;slide&quot;로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs indicator="slide" aria-label="슬라이드 라인 탭">
    <TabPanel label="개요" active>
      <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>
    </TabPanel>
    <TabPanel label="팀">
      <p>팀 구성원과 역할을 표시합니다.</p>
    </TabPanel>
    <TabPanel label="활동">
      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
    </TabPanel>
  </Tabs>
  <Tabs variant="pill" indicator="slide" aria-label="슬라이드 필 탭">
    <TabPanel label="목록" active>
      <p class="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p>
    </TabPanel>
    <TabPanel label="그리드">
      <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
    </TabPanel>
    <TabPanel label="보드">
      <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs indicator="slide" aria-label="슬라이드 라인 탭">
        <TabPanel label="개요" active>
          <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>
        </TabPanel>
        <TabPanel label="팀">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
      </Tabs>
      <Tabs variant="pill" indicator="slide" aria-label="슬라이드 필 탭">
        <TabPanel label="목록" active>
          <p class="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p>
        </TabPanel>
        <TabPanel label="그리드">
          <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="보드">
          <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
        </TabPanel>
      </Tabs>`}))},G={name:"균등 분할",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"layout=&quot;equal&quot;로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs layout="equal" aria-label="균등 분할 탭">
    <TabPanel label="개요" active>
      <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>
    </TabPanel>
    <TabPanel label="팀 구성">
      <p>팀 구성원과 역할을 표시합니다.</p>
    </TabPanel>
    <TabPanel label="활동 로그">
      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
    </TabPanel>
    <TabPanel label="설정">
      <p>프로젝트 설정을 관리합니다.</p>
    </TabPanel>
  </Tabs>
  <Tabs layout="equal" variant="pill" indicator="slide" aria-label="균등 분할 필 탭">
    <TabPanel label="일간" active>일간 통계</TabPanel>
    <TabPanel label="주간">주간 통계</TabPanel>
    <TabPanel label="월간">월간 통계</TabPanel>
    <TabPanel label="연간">연간 통계</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs layout="equal" aria-label="균등 분할 탭">
        <TabPanel label="개요" active>
          <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>
        </TabPanel>
        <TabPanel label="팀 구성">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동 로그">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
        <TabPanel label="설정">
          <p>프로젝트 설정을 관리합니다.</p>
        </TabPanel>
      </Tabs>
      <Tabs layout="equal" variant="pill" indicator="slide" aria-label="균등 분할 필 탭">
        <TabPanel label="일간" active>일간 통계</TabPanel>
        <TabPanel label="주간">주간 통계</TabPanel>
        <TabPanel label="월간">월간 통계</TabPanel>
        <TabPanel label="연간">연간 통계</TabPanel>
      </Tabs>`}))},H={name:"네비 스크롤",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"layout=&quot;scroll&quot;은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs layout="scroll" class="tabs_demo-narrow" aria-label="네비 스크롤 탭">
    <TabPanel label="홈" active>홈 패널</TabPanel>
    <TabPanel label="제품 소개">제품 패널</TabPanel>
    <TabPanel label="솔루션">솔루션 패널</TabPanel>
    <TabPanel label="가격 정책">가격 패널</TabPanel>
    <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
    <TabPanel label="리소스 센터">리소스 패널</TabPanel>
    <TabPanel label="기술 지원">지원 패널</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs layout="scroll" class="tabs_demo-narrow" aria-label="네비 스크롤 탭">
        <TabPanel label="홈" active>홈 패널</TabPanel>
        <TabPanel label="제품 소개">제품 패널</TabPanel>
        <TabPanel label="솔루션">솔루션 패널</TabPanel>
        <TabPanel label="가격 정책">가격 패널</TabPanel>
        <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
        <TabPanel label="리소스 센터">리소스 패널</TabPanel>
        <TabPanel label="기술 지원">지원 패널</TabPanel>
      </Tabs>`}))},Q={name:"카드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs variant="card" aria-label="계정 설정">
    <TabPanel label="프로필" active>
      <p>이름, 아바타, 소개 문구를 수정합니다.</p>
    </TabPanel>
    <TabPanel label="보안">
      <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
    </TabPanel>
    <TabPanel label="알림">
      <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs variant="card" aria-label="계정 설정">
        <TabPanel label="프로필" active>
          <p>이름, 아바타, 소개 문구를 수정합니다.</p>
        </TabPanel>
        <TabPanel label="보안">
          <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
        </TabPanel>
        <TabPanel label="알림">
          <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
        </TabPanel>
      </Tabs>`}))},X={name:"필",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs variant="pill" aria-label="보기 모드">
    <TabPanel label="목록" active>
      <p class="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
    </TabPanel>
    <TabPanel label="그리드">
      <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
    </TabPanel>
    <TabPanel label="보드">
      <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs variant="pill" aria-label="보기 모드">
        <TabPanel label="목록" active>
          <p class="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="그리드">
          <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="보드">
          <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
        </TabPanel>
      </Tabs>`}))},Y={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs size="sm" aria-label="Small 탭">
    <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
    <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
  </Tabs>
  <Tabs size="lg" aria-label="Large 탭">
    <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
    <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs size="sm" aria-label="Small 탭">
        <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
        <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
      </Tabs>
      <Tabs size="lg" aria-label="Large 탭">
        <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
        <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
      </Tabs>`}))},Z={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_icon으로 탭 앞에 아이콘을 배치합니다."},source:{code:`<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="대시보드 섹션">
    <TabPanel label="대시보드" active>
      <template #icon>
        <Icon name="grid" />
      </template>
      대시보드 요약 패널
    </TabPanel>
    <TabPanel label="사용자">
      <template #icon>
        <Icon name="user" />
      </template>
      사용자 목록 패널
    </TabPanel>
    <TabPanel label="문서">
      <template #icon>
        <Icon name="book" />
      </template>
      문서 목록 패널
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{Icon:Pa,TabPanel:y,Tabs:P},template:`        <Tabs aria-label="대시보드 섹션">
        <TabPanel label="대시보드" active>
        <template #icon>
        <Icon name="grid" />
        </template>
        대시보드 요약 패널
        </TabPanel>
        <TabPanel label="사용자">
        <template #icon>
        <Icon name="user" />
        </template>
        사용자 목록 패널
        </TabPanel>
        <TabPanel label="문서">
        <template #icon>
        <Icon name="book" />
        </template>
        문서 목록 패널
        </TabPanel>
        </Tabs>`}))},aa={name:"배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_badge에 badge 컴포넌트를 넣어 알림 수·상태를 표시합니다."},source:{code:`<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="알림 센터">
    <TabPanel label="전체" active>전체 알림 목록</TabPanel>
    <TabPanel label="읽지 않음">
      <template #badge>
        <Badge class="tabs_badge" count size="sm" color="danger" aria-label="읽지 않은 알림 12건">12</Badge>
      </template>
      읽지 않은 알림 12건
    </TabPanel>
    <TabPanel label="멘션">
      <template #badge>
        <Badge class="tabs_badge" count size="sm" color="primary">3</Badge>
      </template>
      멘션 알림 3건
    </TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{Badge:Xe,TabPanel:y,Tabs:P},template:`        <Tabs aria-label="알림 센터">
        <TabPanel label="전체" active>전체 알림 목록</TabPanel>
        <TabPanel label="읽지 않음">
        <template #badge>
        <Badge class="tabs_badge" count size="sm" color="danger" aria-label="읽지 않은 알림 12건">12</Badge>
        </template>
        읽지 않은 알림 12건
        </TabPanel>
        <TabPanel label="멘션">
        <template #badge>
        <Badge class="tabs_badge" count size="sm" color="primary">3</Badge>
        </template>
        멘션 알림 3건
        </TabPanel>
        </Tabs>`}))},ea={name:"추가 액션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다."},source:{code:`<script setup>
import Button from '@uxkm/ui/components/Button.vue';
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="파일 관리">
    <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
    <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
    <TabPanel label="최근">최근 파일 목록</TabPanel>
    <template #extra>
      <Button variant="filled" color="primary" size="sm" label="업로드" />
    </template>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{Button:sa,TabPanel:y,Tabs:P},template:`        <Tabs aria-label="파일 관리">
        <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
        <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
        <TabPanel label="최근">최근 파일 목록</TabPanel>
        <template #extra>
        <Button variant="filled" color="primary" size="sm" label="업로드" />
        </template>
        </Tabs>`}))},na={name:"스크롤바",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"scrollable과 layout=&quot;auto&quot;를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout=&quot;scroll&quot;을 사용하세요."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs scrollable class="tabs_demo-narrow" aria-label="긴 탭 목록">
    <TabPanel label="홈" active>홈 패널</TabPanel>
    <TabPanel label="제품">제품 패널</TabPanel>
    <TabPanel label="솔루션">솔루션 패널</TabPanel>
    <TabPanel label="가격">가격 패널</TabPanel>
    <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
    <TabPanel label="리소스">리소스 패널</TabPanel>
    <TabPanel label="지원">지원 패널</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs scrollable class="tabs_demo-narrow" aria-label="긴 탭 목록">
        <TabPanel label="홈" active>홈 패널</TabPanel>
        <TabPanel label="제품">제품 패널</TabPanel>
        <TabPanel label="솔루션">솔루션 패널</TabPanel>
        <TabPanel label="가격">가격 패널</TabPanel>
        <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
        <TabPanel label="리소스">리소스 패널</TabPanel>
        <TabPanel label="지원">지원 패널</TabPanel>
      </Tabs>`}))},la={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="권한별 탭">
    <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
    <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
    <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs aria-label="권한별 탭">
        <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
        <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
        <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
      </Tabs>`}))},ua={name:"수직",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs vertical aria-label="수직 라인 탭">
    <TabPanel label="일반" active>
      <p>일반 설정 패널입니다.</p>
    </TabPanel>
    <TabPanel label="보안">
      <p>보안 설정 패널입니다.</p>
    </TabPanel>
    <TabPanel label="결제">
      <p>결제 설정 패널입니다.</p>
    </TabPanel>
  </Tabs>
  <Tabs vertical variant="card" aria-label="수직 카드 탭">
    <TabPanel label="문서" active>문서 관리 패널</TabPanel>
    <TabPanel label="미디어">미디어 관리 패널</TabPanel>
    <TabPanel label="아카이브">아카이브 패널</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:y,Tabs:P},template:`<Tabs vertical aria-label="수직 라인 탭">
        <TabPanel label="일반" active>
          <p>일반 설정 패널입니다.</p>
        </TabPanel>
        <TabPanel label="보안">
          <p>보안 설정 패널입니다.</p>
        </TabPanel>
        <TabPanel label="결제">
          <p>결제 설정 패널입니다.</p>
        </TabPanel>
      </Tabs>
      <Tabs vertical variant="card" aria-label="수직 카드 탭">
        <TabPanel label="문서" active>문서 관리 패널</TabPanel>
        <TabPanel label="미디어">미디어 관리 패널</TabPanel>
        <TabPanel label="아카이브">아카이브 패널</TabPanel>
      </Tabs>`}))};var za,Ma,Va;K.parameters={...K.parameters,docs:{...(za=K.parameters)==null?void 0:za.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: (_args, context) => ({
    components: {
      Tabs,
      TabPanel
    },
    setup() {
      return {
        args: storyArgsRef(context)
      };
    },
    template: \`<Tabs v-bind="args">
      <TabPanel label="탭 1" active>첫 번째 탭</TabPanel>
      <TabPanel label="탭 2">두 번째 탭</TabPanel>
    </Tabs>\`
  })
}`,...(Va=(Ma=K.parameters)==null?void 0:Ma.docs)==null?void 0:Va.source}}};var $a,Ra,Na;j.parameters={...j.parameters,docs:{...($a=j.parameters)==null?void 0:$a.docs,source:{originalSource:`{
  name: "기본 (라인)",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_line이 기본 스킨입니다. role=&quot;tablist&quot; · role=&quot;tab&quot; · role=&quot;tabpanel&quot;과 aria-selected, aria-controls로 접근성을 보장합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"프로젝트 정보\\">\\n    <TabPanel label=\\"개요\\" active>\\n      <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"팀\\">\\n      <p>팀 구성원과 역할을 표시합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"활동\\">\\n      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs aria-label="프로젝트 정보">
        <TabPanel label="개요" active>
          <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
        </TabPanel>
        <TabPanel label="팀">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
      </Tabs>\`
  }))
}`,...(Na=(Ra=j.parameters)==null?void 0:Ra.docs)==null?void 0:Na.source}}};var Oa,Wa,Ka;U.parameters={...U.parameters,docs:{...(Oa=U.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  name: "동적 패널",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "mode=&quot;dynamic&quot;은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 #panel 슬롯 내용이 전환됩니다."
      },
      source: {
        code: "<script setup>\\nimport TabMenu from '@uxkm/ui/components/TabMenu.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\nconst dynamicItems = [\\n  { key: 'overview', label: '개요', active: true },\\n  { key: 'team', label: '팀' },\\n  { key: 'activity', label: '활동' },\\n];\\n<\/script>\\n\\n<template>\\n  <Tabs\\n  mode=\\"dynamic\\"\\n  :items=\\"dynamicItems\\"\\n  aria-label=\\"동적 탭 (items)\\"\\n  >\\n  <template #panel=\\"{ item }\\">\\n    <p v-if=\\"item?.key === 'overview'\\">프로젝트 개요와 목표를 설명하는 영역입니다.</p>\\n    <p v-else-if=\\"item?.key === 'team'\\">팀 구성원과 역할을 표시합니다.</p>\\n    <p v-else-if=\\"item?.key === 'activity'\\">최근 활동 로그와 타임라인을 보여줍니다.</p>\\n  </template>\\n  </Tabs>\\n  <Tabs mode=\\"dynamic\\" aria-label=\\"동적 탭 (TabMenu)\\">\\n    <TabMenu label=\\"개요\\" value=\\"overview\\" active />\\n    <TabMenu label=\\"팀\\" value=\\"team\\" />\\n    <TabMenu label=\\"활동\\" value=\\"activity\\" />\\n    <template #panel=\\"{ value }\\">\\n      <p v-if=\\"value === 'overview'\\">TabMenu로 선언한 동적 패널 — 개요</p>\\n      <p v-else-if=\\"value === 'team'\\">TabMenu로 선언한 동적 패널 — 팀</p>\\n      <p v-else>TabMenu로 선언한 동적 패널 — 활동</p>\\n    </template>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabMenu,
      Tabs
    },
    setup() {
      const dynamicItems = [{
        key: 'overview',
        label: '개요',
        active: true
      }, {
        key: 'team',
        label: '팀'
      }, {
        key: 'activity',
        label: '활동'
      }];
      return {
        dynamicItems
      };
    },
    template: \`        <Tabs
        mode="dynamic"
        :items="dynamicItems"
        aria-label="동적 탭 (items)"
        >
        <template #panel="{ item }">
        <p v-if="item?.key === 'overview'">프로젝트 개요와 목표를 설명하는 영역입니다.</p>
        <p v-else-if="item?.key === 'team'">팀 구성원과 역할을 표시합니다.</p>
        <p v-else-if="item?.key === 'activity'">최근 활동 로그와 타임라인을 보여줍니다.</p>
        </template>
        </Tabs>
        <Tabs mode="dynamic" aria-label="동적 탭 (TabMenu)">
        <TabMenu label="개요" value="overview" active />
        <TabMenu label="팀" value="team" />
        <TabMenu label="활동" value="activity" />
        <template #panel="{ value }">
        <p v-if="value === 'overview'">TabMenu로 선언한 동적 패널 — 개요</p>
        <p v-else-if="value === 'team'">TabMenu로 선언한 동적 패널 — 팀</p>
        <p v-else>TabMenu로 선언한 동적 패널 — 활동</p>
        </template>
        </Tabs>\`
  }))
}`,...(Ka=(Wa=U.parameters)==null?void 0:Wa.docs)==null?void 0:Ka.source}}};var ja,Ua,Ja;J.parameters={...J.parameters,docs:{...(ja=J.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  name: "슬라이드 인디케이터",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "indicator=&quot;slide&quot;로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs indicator=\\"slide\\" aria-label=\\"슬라이드 라인 탭\\">\\n    <TabPanel label=\\"개요\\" active>\\n      <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"팀\\">\\n      <p>팀 구성원과 역할을 표시합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"활동\\">\\n      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n  <Tabs variant=\\"pill\\" indicator=\\"slide\\" aria-label=\\"슬라이드 필 탭\\">\\n    <TabPanel label=\\"목록\\" active>\\n      <p class=\\"tabs_panel-placeholder\\">필 스킨에서 배경 인디케이터가 이동합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"그리드\\">\\n      <p class=\\"tabs_panel-placeholder\\">그리드 뷰 콘텐츠</p>\\n    </TabPanel>\\n    <TabPanel label=\\"보드\\">\\n      <p class=\\"tabs_panel-placeholder\\">보드 뷰 콘텐츠</p>\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs indicator="slide" aria-label="슬라이드 라인 탭">
        <TabPanel label="개요" active>
          <p>라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.</p>
        </TabPanel>
        <TabPanel label="팀">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
      </Tabs>
      <Tabs variant="pill" indicator="slide" aria-label="슬라이드 필 탭">
        <TabPanel label="목록" active>
          <p class="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p>
        </TabPanel>
        <TabPanel label="그리드">
          <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="보드">
          <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
        </TabPanel>
      </Tabs>\`
  }))
}`,...(Ja=(Ua=J.parameters)==null?void 0:Ua.docs)==null?void 0:Ja.source}}};var Ga,Ha,Qa;G.parameters={...G.parameters,docs:{...(Ga=G.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
  name: "균등 분할",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "layout=&quot;equal&quot;로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs layout=\\"equal\\" aria-label=\\"균등 분할 탭\\">\\n    <TabPanel label=\\"개요\\" active>\\n      <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"팀 구성\\">\\n      <p>팀 구성원과 역할을 표시합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"활동 로그\\">\\n      <p>최근 활동 로그와 타임라인을 보여줍니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"설정\\">\\n      <p>프로젝트 설정을 관리합니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n  <Tabs layout=\\"equal\\" variant=\\"pill\\" indicator=\\"slide\\" aria-label=\\"균등 분할 필 탭\\">\\n    <TabPanel label=\\"일간\\" active>일간 통계</TabPanel>\\n    <TabPanel label=\\"주간\\">주간 통계</TabPanel>\\n    <TabPanel label=\\"월간\\">월간 통계</TabPanel>\\n    <TabPanel label=\\"연간\\">연간 통계</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs layout="equal" aria-label="균등 분할 탭">
        <TabPanel label="개요" active>
          <p>탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.</p>
        </TabPanel>
        <TabPanel label="팀 구성">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동 로그">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
        <TabPanel label="설정">
          <p>프로젝트 설정을 관리합니다.</p>
        </TabPanel>
      </Tabs>
      <Tabs layout="equal" variant="pill" indicator="slide" aria-label="균등 분할 필 탭">
        <TabPanel label="일간" active>일간 통계</TabPanel>
        <TabPanel label="주간">주간 통계</TabPanel>
        <TabPanel label="월간">월간 통계</TabPanel>
        <TabPanel label="연간">연간 통계</TabPanel>
      </Tabs>\`
  }))
}`,...(Qa=(Ha=G.parameters)==null?void 0:Ha.docs)==null?void 0:Qa.source}}};var Xa,Ya,Za;H.parameters={...H.parameters,docs:{...(Xa=H.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
  name: "네비 스크롤",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "layout=&quot;scroll&quot;은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs layout=\\"scroll\\" class=\\"tabs_demo-narrow\\" aria-label=\\"네비 스크롤 탭\\">\\n    <TabPanel label=\\"홈\\" active>홈 패널</TabPanel>\\n    <TabPanel label=\\"제품 소개\\">제품 패널</TabPanel>\\n    <TabPanel label=\\"솔루션\\">솔루션 패널</TabPanel>\\n    <TabPanel label=\\"가격 정책\\">가격 패널</TabPanel>\\n    <TabPanel label=\\"고객 사례\\">고객 사례 패널</TabPanel>\\n    <TabPanel label=\\"리소스 센터\\">리소스 패널</TabPanel>\\n    <TabPanel label=\\"기술 지원\\">지원 패널</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs layout="scroll" class="tabs_demo-narrow" aria-label="네비 스크롤 탭">
        <TabPanel label="홈" active>홈 패널</TabPanel>
        <TabPanel label="제품 소개">제품 패널</TabPanel>
        <TabPanel label="솔루션">솔루션 패널</TabPanel>
        <TabPanel label="가격 정책">가격 패널</TabPanel>
        <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
        <TabPanel label="리소스 센터">리소스 패널</TabPanel>
        <TabPanel label="기술 지원">지원 패널</TabPanel>
      </Tabs>\`
  }))
}`,...(Za=(Ya=H.parameters)==null?void 0:Ya.docs)==null?void 0:Za.source}}};var ae,ee,ne;Q.parameters={...Q.parameters,docs:{...(ae=Q.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "카드",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs variant=\\"card\\" aria-label=\\"계정 설정\\">\\n    <TabPanel label=\\"프로필\\" active>\\n      <p>이름, 아바타, 소개 문구를 수정합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"보안\\">\\n      <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"알림\\">\\n      <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs variant="card" aria-label="계정 설정">
        <TabPanel label="프로필" active>
          <p>이름, 아바타, 소개 문구를 수정합니다.</p>
        </TabPanel>
        <TabPanel label="보안">
          <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
        </TabPanel>
        <TabPanel label="알림">
          <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
        </TabPanel>
      </Tabs>\`
  }))
}`,...(ne=(ee=Q.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var le,ue,te;X.parameters={...X.parameters,docs:{...(le=X.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: "필",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs variant=\\"pill\\" aria-label=\\"보기 모드\\">\\n    <TabPanel label=\\"목록\\" active>\\n      <p class=\\"tabs_panel-placeholder\\">목록 뷰 콘텐츠</p>\\n    </TabPanel>\\n    <TabPanel label=\\"그리드\\">\\n      <p class=\\"tabs_panel-placeholder\\">그리드 뷰 콘텐츠</p>\\n    </TabPanel>\\n    <TabPanel label=\\"보드\\">\\n      <p class=\\"tabs_panel-placeholder\\">보드 뷰 콘텐츠</p>\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs variant="pill" aria-label="보기 모드">
        <TabPanel label="목록" active>
          <p class="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="그리드">
          <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="보드">
          <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
        </TabPanel>
      </Tabs>\`
  }))
}`,...(te=(ue=X.parameters)==null?void 0:ue.docs)==null?void 0:te.source}}};var se,ie,oe;Y.parameters={...Y.parameters,docs:{...(se=Y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "크기",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs size=\\"sm\\" aria-label=\\"Small 탭\\">\\n    <TabPanel label=\\"Small A\\" active>Small 탭 패널</TabPanel>\\n    <TabPanel label=\\"Small B\\">Small 탭 패널 B</TabPanel>\\n  </Tabs>\\n  <Tabs size=\\"lg\\" aria-label=\\"Large 탭\\">\\n    <TabPanel label=\\"Large A\\" active>Large 탭 패널</TabPanel>\\n    <TabPanel label=\\"Large B\\">Large 탭 패널 B</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs size="sm" aria-label="Small 탭">
        <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
        <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
      </Tabs>
      <Tabs size="lg" aria-label="Large 탭">
        <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
        <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
      </Tabs>\`
  }))
}`,...(oe=(ie=Y.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var re,be,Ce;Z.parameters={...Z.parameters,docs:{...(re=Z.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "아이콘",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_icon으로 탭 앞에 아이콘을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Icon from '@uxkm/ui/components/Icon.vue';\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"대시보드 섹션\\">\\n    <TabPanel label=\\"대시보드\\" active>\\n      <template #icon>\\n        <Icon name=\\"grid\\" />\\n      </template>\\n      대시보드 요약 패널\\n    </TabPanel>\\n    <TabPanel label=\\"사용자\\">\\n      <template #icon>\\n        <Icon name=\\"user\\" />\\n      </template>\\n      사용자 목록 패널\\n    </TabPanel>\\n    <TabPanel label=\\"문서\\">\\n      <template #icon>\\n        <Icon name=\\"book\\" />\\n      </template>\\n      문서 목록 패널\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Icon,
      TabPanel,
      Tabs
    },
    template: \`        <Tabs aria-label="대시보드 섹션">
        <TabPanel label="대시보드" active>
        <template #icon>
        <Icon name="grid" />
        </template>
        대시보드 요약 패널
        </TabPanel>
        <TabPanel label="사용자">
        <template #icon>
        <Icon name="user" />
        </template>
        사용자 목록 패널
        </TabPanel>
        <TabPanel label="문서">
        <template #icon>
        <Icon name="book" />
        </template>
        문서 목록 패널
        </TabPanel>
        </Tabs>\`
  }))
}`,...(Ce=(be=Z.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var ce,me,pe;aa.parameters={...aa.parameters,docs:{...(ce=aa.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: "배지",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_badge에 badge 컴포넌트를 넣어 알림 수·상태를 표시합니다."
      },
      source: {
        code: "<script setup>\\nimport Badge from '@uxkm/ui/components/Badge.vue';\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"알림 센터\\">\\n    <TabPanel label=\\"전체\\" active>전체 알림 목록</TabPanel>\\n    <TabPanel label=\\"읽지 않음\\">\\n      <template #badge>\\n        <Badge class=\\"tabs_badge\\" count size=\\"sm\\" color=\\"danger\\" aria-label=\\"읽지 않은 알림 12건\\">12</Badge>\\n      </template>\\n      읽지 않은 알림 12건\\n    </TabPanel>\\n    <TabPanel label=\\"멘션\\">\\n      <template #badge>\\n        <Badge class=\\"tabs_badge\\" count size=\\"sm\\" color=\\"primary\\">3</Badge>\\n      </template>\\n      멘션 알림 3건\\n    </TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Badge,
      TabPanel,
      Tabs
    },
    template: \`        <Tabs aria-label="알림 센터">
        <TabPanel label="전체" active>전체 알림 목록</TabPanel>
        <TabPanel label="읽지 않음">
        <template #badge>
        <Badge class="tabs_badge" count size="sm" color="danger" aria-label="읽지 않은 알림 12건">12</Badge>
        </template>
        읽지 않은 알림 12건
        </TabPanel>
        <TabPanel label="멘션">
        <template #badge>
        <Badge class="tabs_badge" count size="sm" color="primary">3</Badge>
        </template>
        멘션 알림 3건
        </TabPanel>
        </Tabs>\`
  }))
}`,...(pe=(me=aa.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var de,Be,Te;ea.parameters={...ea.parameters,docs:{...(de=ea.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: "추가 액션",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다."
      },
      source: {
        code: "<script setup>\\nimport Button from '@uxkm/ui/components/Button.vue';\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"파일 관리\\">\\n    <TabPanel label=\\"내 파일\\" active>내 파일 목록</TabPanel>\\n    <TabPanel label=\\"공유됨\\">공유된 파일 목록</TabPanel>\\n    <TabPanel label=\\"최근\\">최근 파일 목록</TabPanel>\\n    <template #extra>\\n      <Button variant=\\"filled\\" color=\\"primary\\" size=\\"sm\\" label=\\"업로드\\" />\\n    </template>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      Button,
      TabPanel,
      Tabs
    },
    template: \`        <Tabs aria-label="파일 관리">
        <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
        <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
        <TabPanel label="최근">최근 파일 목록</TabPanel>
        <template #extra>
        <Button variant="filled" color="primary" size="sm" label="업로드" />
        </template>
        </Tabs>\`
  }))
}`,...(Te=(Be=ea.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var De,ve,Pe;na.parameters={...na.parameters,docs:{...(De=na.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: "스크롤바",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "scrollable과 layout=&quot;auto&quot;를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout=&quot;scroll&quot;을 사용하세요."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs scrollable class=\\"tabs_demo-narrow\\" aria-label=\\"긴 탭 목록\\">\\n    <TabPanel label=\\"홈\\" active>홈 패널</TabPanel>\\n    <TabPanel label=\\"제품\\">제품 패널</TabPanel>\\n    <TabPanel label=\\"솔루션\\">솔루션 패널</TabPanel>\\n    <TabPanel label=\\"가격\\">가격 패널</TabPanel>\\n    <TabPanel label=\\"고객 사례\\">고객 사례 패널</TabPanel>\\n    <TabPanel label=\\"리소스\\">리소스 패널</TabPanel>\\n    <TabPanel label=\\"지원\\">지원 패널</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs scrollable class="tabs_demo-narrow" aria-label="긴 탭 목록">
        <TabPanel label="홈" active>홈 패널</TabPanel>
        <TabPanel label="제품">제품 패널</TabPanel>
        <TabPanel label="솔루션">솔루션 패널</TabPanel>
        <TabPanel label="가격">가격 패널</TabPanel>
        <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
        <TabPanel label="리소스">리소스 패널</TabPanel>
        <TabPanel label="지원">지원 패널</TabPanel>
      </Tabs>\`
  }))
}`,...(Pe=(ve=na.parameters)==null?void 0:ve.docs)==null?void 0:Pe.source}}};var Ae,fe,ge;la.parameters={...la.parameters,docs:{...(Ae=la.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: "비활성",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: "disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs aria-label=\\"권한별 탭\\">\\n    <TabPanel label=\\"공개\\" active>공개 콘텐츠</TabPanel>\\n    <TabPanel label=\\"팀\\">팀 전용 콘텐츠</TabPanel>\\n    <TabPanel label=\\"관리자\\" disabled>관리자 전용 콘텐츠</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs aria-label="권한별 탭">
        <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
        <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
        <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
      </Tabs>\`
  }))
}`,...(ge=(fe=la.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ye,Ee,ke;ua.parameters={...ua.parameters,docs:{...(ye=ua.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: "수직",
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: "tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다."
      },
      source: {
        code: "<script setup>\\nimport TabPanel from '@uxkm/ui/components/TabPanel.vue';\\nimport Tabs from '@uxkm/ui/components/Tabs.vue';\\n<\/script>\\n\\n<template>\\n  <Tabs vertical aria-label=\\"수직 라인 탭\\">\\n    <TabPanel label=\\"일반\\" active>\\n      <p>일반 설정 패널입니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"보안\\">\\n      <p>보안 설정 패널입니다.</p>\\n    </TabPanel>\\n    <TabPanel label=\\"결제\\">\\n      <p>결제 설정 패널입니다.</p>\\n    </TabPanel>\\n  </Tabs>\\n  <Tabs vertical variant=\\"card\\" aria-label=\\"수직 카드 탭\\">\\n    <TabPanel label=\\"문서\\" active>문서 관리 패널</TabPanel>\\n    <TabPanel label=\\"미디어\\">미디어 관리 패널</TabPanel>\\n    <TabPanel label=\\"아카이브\\">아카이브 패널</TabPanel>\\n  </Tabs>\\n</template>",
        language: 'vue'
      }
    }
  },
  args: {
    mode: "panels",
    modelValue: "",
    variant: "line",
    size: "md",
    layout: "auto",
    vertical: false,
    scrollable: false,
    ariaLabel: "접근성 라벨",
    items: [],
    indicator: "static"
  },
  render: withDocsCanvasRender(() => ({
    components: {
      TabPanel,
      Tabs
    },
    template: \`<Tabs vertical aria-label="수직 라인 탭">
        <TabPanel label="일반" active>
          <p>일반 설정 패널입니다.</p>
        </TabPanel>
        <TabPanel label="보안">
          <p>보안 설정 패널입니다.</p>
        </TabPanel>
        <TabPanel label="결제">
          <p>결제 설정 패널입니다.</p>
        </TabPanel>
      </Tabs>
      <Tabs vertical variant="card" aria-label="수직 카드 탭">
        <TabPanel label="문서" active>문서 관리 패널</TabPanel>
        <TabPanel label="미디어">미디어 관리 패널</TabPanel>
        <TabPanel label="아카이브">아카이브 패널</TabPanel>
      </Tabs>\`
  }))
}`,...(ke=(Ee=ua.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};const In=["Playground","Basic","Dynamic","IndicatorSlide","LayoutEqual","LayoutScroll","Card","Pill","Size","IconDemo","BadgeDemo","Extra","Scroll","Disabled","Vertical"];export{aa as BadgeDemo,j as Basic,Q as Card,la as Disabled,U as Dynamic,ea as Extra,Z as IconDemo,J as IndicatorSlide,G as LayoutEqual,H as LayoutScroll,X as Pill,K as Playground,na as Scroll,Y as Size,ua as Vertical,In as __namedExportsOrder,Ln as default};
