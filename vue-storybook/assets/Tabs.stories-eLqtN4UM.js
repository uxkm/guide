import{a4 as Ca,ae as ca,x as N,av as ia,h,o as g,m as z,az as Re,w as V,d as w,y as Ia,t as he,p as Pa,q as oa,k as Ne,l as Oe,u as ya,a as ga,a3 as ra,aK as je,aL as Ue,c as x,s as k,e as qa,_ as Aa,g as W,n as fa,aM as We,aN as Ke,aj as Ge,F as Da,a6 as za,r as q,j as y,aB as Ma,aO as He,ay as Je,au as xe,b as Se,aP as ba}from"./iframe-BHuoLYUS.js";import{w as F,s as Qe}from"./story-renders-C_n8_MI3.js";import{_ as Xe}from"./Badge-CW9FgWru.js";import{h as Ye,a as Ze}from"./ripple-api-Dpyr2TOk.js";import"./preload-helper-PMqzWbAN.js";function an({listRef:n,enabled:p,vertical:e,variant:d,onTabsChange:f}){const T=h(null);let C=null;function _(){if(!p.value||!n.value){T.value=null;return}const o=n.value,s=o.querySelector('.tabs_tab[aria-selected="true"]');if(!s){T.value=null;return}const r=o.getBoundingClientRect(),m=s.getBoundingClientRect(),P=m.left-r.left+o.scrollLeft,E=m.top-r.top+o.scrollTop,t=m.width,b=m.height,A=2;if(e.value){T.value={width:`${A}px`,height:`${b}px`,transform:`translate3d(${P+t-A}px, ${E}px, 0)`};return}if(d.value==="pill"){T.value={width:`${t}px`,height:`${b}px`,transform:`translate3d(${P}px, ${E}px, 0)`};return}T.value={width:`${t}px`,height:`${A}px`,transform:`translate3d(${P}px, ${E+b-A}px, 0)`}}function c(){ia(()=>{requestAnimationFrame(_)})}function B(){C==null||C.disconnect(),n.value&&(C=new ResizeObserver(c),C.observe(n.value),n.value.querySelectorAll(".tabs_tab").forEach(o=>C.observe(o)))}function u(){c()}return Ca(()=>{c(),B();const o=n.value;o&&(o.addEventListener("click",u),o.addEventListener("keydown",u),o.addEventListener("scroll",u,{passive:!0}))}),ca(()=>{const o=n.value;o&&(o.removeEventListener("click",u),o.removeEventListener("keydown",u),o.removeEventListener("scroll",u)),C==null||C.disconnect()}),N([p,e,d],c),f&&N(f,()=>{c(),B()}),{indicatorStyle:T,updateIndicator:c}}const va=1;function en({listRef:n,enabled:p,onTabsChange:e}){const d=h(!1),f=h(!1),T=h(!1);let C=null;function _(){const t=n.value;if(!p.value||!t){d.value=!1,f.value=!1,T.value=!1;return}const{scrollLeft:b,scrollWidth:A,clientWidth:I}=t,M=A-I;T.value=M>va,d.value=b>va,f.value=b<M-va}function c(){ia(()=>{requestAnimationFrame(_)})}function B(t){const b=n.value;if(!b)return;const A=Math.max(b.clientWidth*.75,120);b.scrollBy({left:t*A,behavior:"smooth"})}function u(){B(-1)}function o(){B(1)}function s(t){const b=n.value;if(!p.value||!b||!t)return;const A=b.getBoundingClientRect(),I=t.getBoundingClientRect(),O=I.left-A.left+b.scrollLeft+I.width/2,j=b.clientWidth/2,ma=b.scrollWidth-b.clientWidth,pa=O-j;b.scrollTo({left:Math.max(0,Math.min(pa,ma)),behavior:"smooth"})}function r(){const t=n.value;if(!p.value||!t)return;const b=t.querySelector('.tabs_tab[aria-selected="true"]');s(b)}function m(t){var A;const b=t.target.closest('[role="tab"]');!b||!((A=n.value)!=null&&A.contains(b))||(c(),ia(()=>{requestAnimationFrame(()=>s(b))}))}function P(){c(),ia(()=>{requestAnimationFrame(r)})}function E(){C==null||C.disconnect();const t=n.value;t&&(C=new ResizeObserver(c),C.observe(t),t.querySelectorAll(".tabs_tab").forEach(b=>C.observe(b)))}return Ca(()=>{c(),E();const t=n.value;t&&(t.addEventListener("scroll",_,{passive:!0}),t.addEventListener("click",m),t.addEventListener("keydown",P))}),ca(()=>{const t=n.value;t&&(t.removeEventListener("scroll",_),t.removeEventListener("click",m),t.removeEventListener("keydown",P)),C==null||C.disconnect()}),N(p,c),e&&N(e,()=>{c(),E()}),{canScrollPrev:d,canScrollNext:f,hasOverflow:T,scrollPrev:u,scrollNext:o,scrollTabToCenter:s,scrollActiveTabIntoView:r,updateScrollState:c}}const nn={class:"tabs_icon"},ln={class:"tabs_label"},$=Object.assign({inheritAttrs:!1},{__name:"TabsTab",props:{id:{type:String,required:!0},panelId:{type:String,required:!0},label:{type:String,required:!0},active:Boolean,disabled:Boolean,tabindex:{type:Number,default:-1},iconSlot:Function,badgeSlot:Function},emits:["click"],setup(n,{emit:p}){const e=p;return(d,f)=>(g(),z(oa,Pa({tag:"button",role:"tab",type:"button",variant:"text",fit:"",class:["tabs_tab",{"is-active":n.active,"is-disabled":n.disabled}],id:n.id,"aria-selected":n.active?"true":"false","aria-controls":n.panelId,tabindex:n.tabindex,disabled:n.disabled,"aria-disabled":n.disabled||void 0},d.$attrs,{onClick:f[0]||(f[0]=T=>e("click",T))}),Re({default:V(()=>[w("span",ln,he(n.label),1)]),_:2},[n.iconSlot?{name:"icon-before",fn:V(()=>[w("span",nn,[(g(),z(Ia({render:n.iconSlot})))])]),key:"0"}:void 0,n.badgeSlot?{name:"icon-after",fn:V(()=>[(g(),z(Ia({render:n.badgeSlot})))]),key:"1"}:void 0]),1040,["class","id","aria-selected","aria-controls","tabindex","disabled","aria-disabled"]))}});$.__docgenInfo=Object.assign({displayName:$.name??$.__name},{exportName:"default",displayName:"TabsTab",description:"",tags:{},props:[{name:"id",type:{name:"string"},required:!0},{name:"panelId",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"active",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}},{name:"tabindex",type:{name:"number"},defaultValue:{func:!1,value:"-1"}},{name:"iconSlot",type:{name:"func"}},{name:"badgeSlot",type:{name:"func"}}],events:[{name:"click"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/TabsTab.vue"]});const un={class:"tabs_bar"},tn=["aria-label"],sn={key:2,class:"tabs_extra","data-demo-slot":"extra"},on={class:"tabs_panels","data-demo-slot":"default"},rn=["id","aria-labelledby"],bn=["id","aria-labelledby","hidden"],D=Object.assign({inheritAttrs:!1},{__name:"Tabs",props:{ripple:Ne,mode:{type:String,default:"panels",validator:n=>["panels","dynamic"].includes(n)},modelValue:{type:[String,Number],default:void 0},variant:{type:String,default:"line",validator:n=>["line","card","pill"].includes(n)},size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},layout:{type:String,default:"auto",validator:n=>["auto","equal","scroll"].includes(n)},vertical:Boolean,scrollable:Boolean,ariaLabel:String,items:Array,indicator:{type:String,default:"static",validator:n=>["static","slide"].includes(n)}},emits:["update:modelValue"],setup(n,{emit:p}){const e=n,d=p,{rippleAttrs:f,childRippleAttrs:T}=Oe(e,{mode:"container"});ya();const C=ga(),_=h(null),c=h(null),B=new Map,u=h([]),o=ra().replace(/:/g,""),s=h(null);je(e,_,C);const r=y(()=>e.mode==="dynamic"),m=y(()=>e.layout==="scroll"&&!e.vertical),P=y(()=>e.layout==="equal"),E=y(()=>e.scrollable&&e.layout==="auto"),t=y(()=>{var a;return!!((a=e.items)!=null&&a.length)}),b=y(()=>t.value&&!r.value),A=y(()=>t.value?e.items.length:u.value.length),I=y(()=>{const a=["tabs",`tabs_${e.variant}`];return e.size==="sm"&&a.push("tabs_sm"),e.size==="lg"&&a.push("tabs_lg"),e.vertical&&a.push("tabs_vertical"),P.value&&a.push("tabs_equal"),m.value&&a.push("tabs_scroll-nav"),E.value&&a.push("tabs_scrollable"),r.value&&a.push("tabs_dynamic"),e.indicator==="slide"&&a.push("tabs_indicator-slide"),C.class&&a.push(C.class),a}),M=y(()=>e.indicator==="slide"),{indicatorStyle:O,updateIndicator:j}=an({listRef:c,enabled:M,vertical:Ma(e,"vertical"),variant:Ma(e,"variant"),onTabsChange:()=>A.value}),{canScrollPrev:ma,canScrollNext:pa,hasOverflow:Fa,scrollPrev:we,scrollNext:Le,updateScrollState:_a}=en({listRef:c,enabled:m,onTabsChange:()=>A.value}),Ie=y(()=>{const{class:a,...i}=C;return i});function da(a,i){return a.key??a.value??i}function qe(a){(r.value||a.menuOnly)&&(a.panelId=o),B.set(a.id,a),u.value=[...B.values()]}function ze(a){B.delete(a),u.value=[...B.values()]}function ha(a){return r.value?(a.value??a.id)===s.value:k(a.isActive)}function xa(a,i){if(He(a.isActive)){a.isActive.value=i;return}a.isActive=i}function Sa(a){s.value=a,d("update:modelValue",a),j(),_a()}function wa(a){if(r.value){if(t.value){const l=U.value.find(S=>S.id===a);l&&!l.disabled&&Sa(l.key);return}const i=u.value.find(l=>l.id===a);i&&!i.disabled&&Sa(i.value??i.id);return}u.value.forEach(i=>{i.disabled||xa(i,i.id===a)}),j(),_a()}Je("tabs",{registerTab:qe,unregisterTab:ze,selectTab:wa}),N(()=>e.modelValue,a=>{r.value&&a!=null&&a!==""&&(s.value=a)}),Ue(()=>{if(r.value){if(e.modelValue!=null&&e.modelValue!==""){s.value=e.modelValue;return}if(t.value){const L=e.items.find((Ba,Fn)=>Ba.active);if(L){s.value=da(L,e.items.indexOf(L));return}const Ta=e.items.find(Ba=>!Ba.disabled);Ta&&(s.value=da(Ta,e.items.indexOf(Ta)));return}if(!u.value.length)return;const i=u.value.find(L=>L.active),l=u.value.find(L=>!L.disabled),S=i||l;S&&(s.value=S.value??S.id);return}if(b.value){const i=e.items.some(l=>l.active);e.items.forEach((l,S)=>{!i&&S===0&&(l.active=!0)});return}if(!u.value.length)return;if(!u.value.some(i=>ha(i))){const i=u.value.find(l=>!l.disabled);i&&xa(i,!0)}});const U=y(()=>!r.value||!t.value?[]:e.items.map((a,i)=>{const l=da(a,i);return{id:`item-tab-${i}`,key:l,panelId:o,label:a.label,disabled:a.disabled,isActive:s.value===l,raw:a}})),Me=y(()=>{var i;if(!r.value)return null;if(t.value)return((i=U.value.find(l=>l.isActive))==null?void 0:i.raw)??null;const a=u.value.find(l=>(l.value??l.id)===s.value);return a?{key:a.value??a.id,label:a.label}:null}),Ve=y(()=>{var a,i;return r.value?t.value?((a=U.value.find(l=>l.isActive))==null?void 0:a.id)??"":((i=u.value.find(l=>(l.value??l.id)===s.value))==null?void 0:i.id)??"":""}),La=y(()=>{if(!b.value)return[];const a=e.items.some(i=>i.active);return e.items.map((i,l)=>({id:`item-tab-${l}`,panelId:`item-panel-${l}`,label:i.label,content:i.content,disabled:i.disabled,isActive:i.active||!a&&l===0}))}),$e=y(()=>r.value&&t.value?U.value.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:a.isActive,iconSlot:null,badgeSlot:null})):b.value?La.value.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:a.isActive,iconSlot:null,badgeSlot:null})):u.value.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:ha(a),iconSlot:a.iconSlot??null,badgeSlot:a.badgeSlot??null})));return(a,i)=>(g(),x("div",Pa({ref_key:"rootRef",ref:_,class:I.value,"data-tabs":""},{...Ie.value,...k(f)}),[w("div",un,[m.value&&k(Fa)?(g(),z(oa,{key:0,class:"tabs_nav tabs_nav_prev",variant:"outline",color:"default",size:"sm","icon-only":"",ripple:!1,"aria-label":"이전 탭",disabled:!k(ma),onClick:k(we)},{"icon-before":V(()=>[qa(Aa,{name:"chevron-left",size:"sm"})]),_:1},8,["disabled","onClick"])):W("",!0),w("div",{class:fa(["tabs_list-wrap",{"tabs_scroll-viewport":m.value}])},[w("div",{ref_key:"listRef",ref:c,class:"tabs_list",role:"tablist","aria-label":n.ariaLabel},[n.indicator==="slide"?We((g(),x("span",{key:0,class:"tabs_indicator","aria-hidden":"true",style:Ge(k(O))},null,4)),[[Ke,k(O)]]):W("",!0),(g(!0),x(Da,null,za($e.value,l=>(g(),z($,Pa({key:l.id},{ref_for:!0},k(T),{id:l.id,"panel-id":l.panelId,label:l.label,active:l.active,disabled:l.disabled,tabindex:l.active?0:-1,"icon-slot":l.iconSlot,"badge-slot":l.badgeSlot,onClick:S=>wa(l.id)}),null,16,["id","panel-id","label","active","disabled","tabindex","icon-slot","badge-slot","onClick"]))),128)),q(a.$slots,"tabs")],8,tn)],2),m.value&&k(Fa)?(g(),z(oa,{key:1,class:"tabs_nav tabs_nav_next",variant:"outline",color:"default",size:"sm","icon-only":"",ripple:!1,"aria-label":"다음 탭",disabled:!k(pa),onClick:k(Le)},{"icon-before":V(()=>[qa(Aa,{name:"chevron-right",size:"sm"})]),_:1},8,["disabled","onClick"])):W("",!0),a.$slots.extra?(g(),x("div",sn,[q(a.$slots,"extra")])):W("",!0)]),w("div",on,[r.value?(g(),x(Da,{key:0},[w("div",{id:k(o),class:"tabs_panel is-active",role:"tabpanel","aria-labelledby":Ve.value},[q(a.$slots,"panel",{item:Me.value,value:s.value,active:!0})],8,rn),q(a.$slots,"default")],64)):b.value?(g(!0),x(Da,{key:1},za(La.value,l=>(g(),x("div",{key:l.panelId,id:l.panelId,class:fa(["tabs_panel",{"is-active":l.isActive}]),role:"tabpanel","aria-labelledby":l.id,hidden:!l.isActive||void 0},[w("p",null,he(l.content),1)],10,bn))),128)):q(a.$slots,"default",{},void 0,void 0,2)])],16))}});D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"ripple",description:"클릭 파장(ripple). true 활성 · false 비활성 · 미지정 시 컴포넌트 기본",type:{name:"rippleProp"}},{name:"mode",description:"panels: 탭마다 패널 · dynamic: 단일 패널에 콘텐츠 전환",type:{name:"string"},defaultValue:{func:!1,value:"'panels'"},values:["panels","dynamic"]},{name:"modelValue",description:'mode="dynamic"일 때 선택된 탭 key (v-model)',type:{name:"string|number"},defaultValue:{func:!1,value:"undefined"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'line'"},values:["line","card","pill"]},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"layout",description:"auto: 콘텐츠 너비 · equal: 100% 균등 분할 · scroll: 넘침 시 좌우 네비 스크롤",type:{name:"string"},defaultValue:{func:!1,value:"'auto'"},values:["auto","equal","scroll"]},{name:"vertical",type:{name:"boolean"}},{name:"scrollable",type:{name:"boolean"}},{name:"ariaLabel",type:{name:"string"}},{name:"items",type:{name:"array"}},{name:"indicator",type:{name:"string"},defaultValue:{func:!1,value:"'static'"},values:["static","slide"]}],events:[{name:"update:modelValue"}],slots:[{name:"tabs"},{name:"extra"},{name:"panel",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"value",title:"binding"},{name:"active",title:"binding"}]},{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/Tabs.vue"]});const R={__name:"TabMenu",props:{label:{type:String,required:!0},value:String,active:Boolean,disabled:Boolean},setup(n){const p=n,e=xe("tabs",null),d=ya(),f=ga(),T=h(null);function C(B){var r,m,P;const u=B==null?void 0:B();if(!(u!=null&&u.length))return"";const o=u[0],s=((r=o.type)==null?void 0:r.name)||((m=o.type)==null?void 0:m.__name);return s==="Icon"&&((P=o.props)!=null&&P.name)?`<Icon name="${o.props.name}" />`:s==="Badge"?ba("Badge",o.props??{},{},o.props??{},{defaults:{color:"primary",variant:"filled",size:"md"},booleanProps:new Set(["round","checkable","add","closable","selected","disabled","count"]),selfClosing:!1}):"..."}function _(B,u,o){var r,m;const s={};return(r=u.icon)!=null&&r.call(u)&&(s.icon=C(u.icon)),(m=u.badge)!=null&&m.call(u)&&(s.badge=C(u.badge)),ba("TabMenu",B,u,o,{booleanProps:new Set(["active","disabled"]),labelProp:"label",selfClosing:!0,slotContent:s})}Se(_,p,d,T,f);const c=ra().replace(/:/g,"");return Ca(()=>{e==null||e.registerTab({id:c,value:p.value??c,label:p.label,active:p.active,disabled:p.disabled,menuOnly:!0,iconSlot:d.icon?()=>d.icon():null,badgeSlot:d.badge?()=>d.badge():null})}),ca(()=>{e==null||e.unregisterTab(c)}),(B,u)=>(g(),x("span",{ref_key:"rootRef",ref:T,hidden:"","aria-hidden":"true"},null,512))}};R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:"default",displayName:"TabMenu",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"value",description:'mode="dynamic"에서 v-model과 매칭되는 값',type:{name:"string"}},{name:"active",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/TabMenu.vue"]});const Cn=["id","aria-labelledby","hidden"],v={__name:"TabPanel",props:{label:{type:String,required:!0},active:Boolean,disabled:Boolean},setup(n){const p=n,e=xe("tabs",null),d=ya(),f=ga(),T=h(null);function C(o){var P,E,t;const s=o==null?void 0:o();if(!(s!=null&&s.length))return"";const r=s[0],m=((P=r.type)==null?void 0:P.name)||((E=r.type)==null?void 0:E.__name);return m==="Icon"&&((t=r.props)!=null&&t.name)?`<Icon name="${r.props.name}" />`:m==="Badge"?ba("Badge",r.props??{},{},r.props??{},{defaults:{color:"primary",variant:"filled",size:"md"},booleanProps:new Set(["round","checkable","add","closable","selected","disabled","count"]),selfClosing:!1}):"..."}function _(o,s,r){var P,E;const m={};return(P=s.icon)!=null&&P.call(s)&&(m.icon=C(s.icon)),(E=s.badge)!=null&&E.call(s)&&(m.badge=C(s.badge)),ba("TabPanel",o,s,r,{booleanProps:new Set(["active","disabled"]),labelProp:"label",selfClosing:!1,slotContent:m})}Se(_,p,d,T,f);const c=ra().replace(/:/g,""),B=ra().replace(/:/g,""),u=h(p.active);return Ca(()=>{e==null||e.registerTab({id:c,panelId:B,label:p.label,active:p.active,disabled:p.disabled,isActive:u,iconSlot:d.icon?()=>d.icon():null,badgeSlot:d.badge?()=>d.badge():null})}),ca(()=>{e==null||e.unregisterTab(c)}),(o,s)=>(g(),x("div",{ref_key:"rootRef",ref:T,id:k(B),class:fa(["tabs_panel",{"is-active":u.value}]),role:"tabpanel","aria-labelledby":k(c),hidden:!u.value||void 0},[q(o.$slots,"default")],10,Cn))}};v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"TabPanel",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"active",type:{name:"boolean"}},{name:"disabled",type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/dyuel/uxkm/guide/packages/ui/src/components/TabPanel.vue"]});const Ea=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],cn=[{name:"mode",type:"'panels' | 'dynamic'",default:"panels",description:"panels: 탭별 패널 · dynamic: 단일 패널 콘텐츠 전환"},{name:"v-model / model-value",type:"string | number",default:"—",description:"mode=dynamic 선택 탭 key"},{name:"variant",type:"'line' | 'card' | 'pill'",default:"line",description:"tabs_line · tabs_card · tabs_pill"},{name:"indicator",type:"'static' | 'slide'",default:"static",description:"line·pill 인디케이터. slide는 선택 탭으로 이동 애니메이션"},{name:"layout",type:"'auto' | 'equal' | 'scroll'",default:"auto",description:"auto: 콘텐츠 너비 · equal: 100% 균등 분할 · scroll: 좌우 네비 스크롤"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tabs_sm · tabs_lg"},{name:"vertical",type:"boolean",default:"false",description:"tabs_vertical"},{name:"scrollable",type:"boolean",default:"false",description:"layout=auto일 때 가로 스크롤바 표시 (tabs_scrollable)"},{name:"aria-label",type:"string",default:"—",description:"tablist aria-label"},{name:"items",type:"Array<{ key?, label, content?, active?, disabled? }>",default:"—",description:"선언적 탭. panels: content로 패널 생성 · dynamic: label만 사용"},Ye],mn=Ea,pn=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"}],dn=Ea,Tn=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"value",type:"string",default:"—",description:"mode=dynamic v-model key"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"}],ka=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],Bn=[{name:"tabs",description:"탭 바 추가 콘텐츠"},{name:"extra",description:"탭 바 우측 영역 (tabs_extra)"},{name:"panel",description:"mode=dynamic 단일 패널 본문 ({ item, value, active })"},{name:"default",description:"TabPanel·TabMenu 나열 (items prop 대체)"}],Dn=ka,vn=[{name:"default",description:"패널 본문 (tabs_panel)"},{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],Pn=ka,An=[{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],fn=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],yn=[{name:"tabs · tabs_bar · tabs_list · tabs_tab",description:"루트·탭 바·목록·탭 버튼"},{name:"tabs_label · tabs_extra · tabs_panels · tabs_panel",description:"라벨·추가·패널 영역"},{name:"tabs_line · tabs_card · tabs_pill",description:"스타일 변형"},{name:"tabs_indicator-slide",description:'슬라이드 인디케이터 (indicator="slide")'},{name:"tabs_indicator",description:"이동하는 인디케이터 요소"},{name:"tabs_equal · tabs_scroll-nav · tabs_dynamic",description:"균등 분할·네비 스크롤·동적 패널"},{name:"tabs_list-wrap · tabs_scroll-viewport · tabs_nav",description:"목록 래퍼·스크롤 뷰포트·좌우 네비 버튼"},{name:"tabs_sm · tabs_lg · tabs_vertical · tabs_scrollable",description:"크기·레이아웃"},{name:"is-active · is-disabled",description:"탭·패널 상태"},{name:"data-tabs",description:"키보드·포커스 JS"},{name:'role="tablist" · role="tab" · role="tabpanel"',description:"접근성"},...Ze],gn=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],En=[{name:"--tabs-gap · --tabs-padding",default:"—",description:"탭 간격·패딩"},{name:"--tabs-nav-size",default:"—",description:"네비 스크롤 버튼 크기"},{name:"--tabs-indicator-height · --tabs-indicator-transition",default:"—",description:"line 변형 인디케이터·슬라이드 전환"},{name:"--tabs-panel-padding",default:"—",description:"패널 패딩"}],kn=[{title:"API · Tabs Props",tables:[{columns:Ea,rows:cn,codeColumn:"name"}]},{title:"API · TabPanel Props",tables:[{columns:mn,rows:pn,codeColumn:"name"}]},{title:"API · TabMenu Props",tables:[{columns:dn,rows:Tn,codeColumn:"name"}]},{title:"API · Tabs Slots",tables:[{columns:ka,rows:Bn,codeColumn:"name"}]},{title:"API · TabPanel Slots",tables:[{columns:Dn,rows:vn,codeColumn:"name"}]},{title:"API · TabMenu Slots",tables:[{columns:Pn,rows:An,codeColumn:"name"}]},{title:"클래스 · 속성",description:"Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:fn,rows:yn,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:gn,rows:En,codeColumn:"name"}]}],Ln={title:"Components/네비게이션/Tabs",id:"components-tabs",component:D,subcomponents:{TabsTab:$,TabPanel:v,TabMenu:R},tags:["autodocs"],argTypes:{mode:{control:"select",options:["panels","dynamic"],type:{name:"enum",summary:"'panels' | 'dynamic'"}},variant:{control:"select",options:["line","card","pill"],type:{name:"enum",summary:"'line' | 'card' | 'pill'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},layout:{control:"select",options:["auto","equal","scroll"],type:{name:"enum",summary:"'auto' | 'equal' | 'scroll'"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},scrollable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},indicator:{control:"select",options:["static","slide"],type:{name:"enum",summary:"'static' | 'slide'"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:kn}},K={parameters:{controls:{disable:!1}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:(n,p)=>({components:{Tabs:D,TabPanel:v},setup(){return{args:Qe(p)}},template:`<Tabs v-bind="args">
      <TabPanel label="탭 1" active>첫 번째 탭</TabPanel>
      <TabPanel label="탭 2">두 번째 탭</TabPanel>
    </Tabs>`})},G={name:"기본 (라인)",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_line이 기본 스킨입니다. role=&quot;tablist&quot; · role=&quot;tab&quot; · role=&quot;tabpanel&quot;과 aria-selected, aria-controls로 접근성을 보장합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs aria-label="프로젝트 정보">
        <TabPanel label="개요" active>
          <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
        </TabPanel>
        <TabPanel label="팀">
          <p>팀 구성원과 역할을 표시합니다.</p>
        </TabPanel>
        <TabPanel label="활동">
          <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
        </TabPanel>
      </Tabs>`}))},H={name:"동적 패널",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"mode=&quot;dynamic&quot;은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 #panel 슬롯 내용이 전환됩니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabMenu:R,Tabs:D},setup(){return{dynamicItems:[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}]}},template:`        <Tabs
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs indicator="slide" aria-label="슬라이드 라인 탭">
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
      </Tabs>`}))},Q={name:"균등 분할",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"layout=&quot;equal&quot;로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs layout="equal" aria-label="균등 분할 탭">
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
      </Tabs>`}))},X={name:"네비 스크롤",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"layout=&quot;scroll&quot;은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs layout="scroll" class="tabs_demo-narrow" aria-label="네비 스크롤 탭">
        <TabPanel label="홈" active>홈 패널</TabPanel>
        <TabPanel label="제품 소개">제품 패널</TabPanel>
        <TabPanel label="솔루션">솔루션 패널</TabPanel>
        <TabPanel label="가격 정책">가격 패널</TabPanel>
        <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
        <TabPanel label="리소스 센터">리소스 패널</TabPanel>
        <TabPanel label="기술 지원">지원 패널</TabPanel>
      </Tabs>`}))},Y={name:"카드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs variant="card" aria-label="계정 설정">
        <TabPanel label="프로필" active>
          <p>이름, 아바타, 소개 문구를 수정합니다.</p>
        </TabPanel>
        <TabPanel label="보안">
          <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
        </TabPanel>
        <TabPanel label="알림">
          <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
        </TabPanel>
      </Tabs>`}))},Z={name:"필",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs variant="pill" aria-label="보기 모드">
        <TabPanel label="목록" active>
          <p class="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="그리드">
          <p class="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="보드">
          <p class="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
        </TabPanel>
      </Tabs>`}))},aa={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs size="sm" aria-label="Small 탭">
        <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
        <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
      </Tabs>
      <Tabs size="lg" aria-label="Large 탭">
        <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
        <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
      </Tabs>`}))},ea={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_icon으로 탭 앞에 아이콘을 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{Icon:Aa,TabPanel:v,Tabs:D},template:`        <Tabs aria-label="대시보드 섹션">
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
        </Tabs>`}))},na={name:"배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_badge에 badge 컴포넌트를 넣어 알림 수·상태를 표시합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{Badge:Xe,TabPanel:v,Tabs:D},template:`        <Tabs aria-label="알림 센터">
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
        </Tabs>`}))},la={name:"추가 액션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{Button:oa,TabPanel:v,Tabs:D},template:`        <Tabs aria-label="파일 관리">
        <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
        <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
        <TabPanel label="최근">최근 파일 목록</TabPanel>
        <template #extra>
        <Button variant="filled" color="primary" size="sm" label="업로드" />
        </template>
        </Tabs>`}))},ua={name:"스크롤바",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"scrollable과 layout=&quot;auto&quot;를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout=&quot;scroll&quot;을 사용하세요."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs scrollable class="tabs_demo-narrow" aria-label="긴 탭 목록">
        <TabPanel label="홈" active>홈 패널</TabPanel>
        <TabPanel label="제품">제품 패널</TabPanel>
        <TabPanel label="솔루션">솔루션 패널</TabPanel>
        <TabPanel label="가격">가격 패널</TabPanel>
        <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
        <TabPanel label="리소스">리소스 패널</TabPanel>
        <TabPanel label="지원">지원 패널</TabPanel>
      </Tabs>`}))},ta={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다."},source:{code:`<script setup>
import TabPanel from '@uxkm/ui/components/TabPanel.vue';
import Tabs from '@uxkm/ui/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="권한별 탭">
    <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
    <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
    <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
  </Tabs>
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs aria-label="권한별 탭">
        <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
        <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
        <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
      </Tabs>`}))},sa={name:"수직",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다."},source:{code:`<script setup>
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
</template>`,language:"vue"}}},args:{mode:"panels",modelValue:"",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",items:[],indicator:"static"},render:F(()=>({components:{TabPanel:v,Tabs:D},template:`<Tabs vertical aria-label="수직 라인 탭">
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
      </Tabs>`}))};var Va,$a,Ra;K.parameters={...K.parameters,docs:{...(Va=K.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Ra=($a=K.parameters)==null?void 0:$a.docs)==null?void 0:Ra.source}}};var Na,Oa,ja;G.parameters={...G.parameters,docs:{...(Na=G.parameters)==null?void 0:Na.docs,source:{originalSource:`{
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
}`,...(ja=(Oa=G.parameters)==null?void 0:Oa.docs)==null?void 0:ja.source}}};var Ua,Wa,Ka;H.parameters={...H.parameters,docs:{...(Ua=H.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(Ka=(Wa=H.parameters)==null?void 0:Wa.docs)==null?void 0:Ka.source}}};var Ga,Ha,Ja;J.parameters={...J.parameters,docs:{...(Ga=J.parameters)==null?void 0:Ga.docs,source:{originalSource:`{
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
}`,...(Ja=(Ha=J.parameters)==null?void 0:Ha.docs)==null?void 0:Ja.source}}};var Qa,Xa,Ya;Q.parameters={...Q.parameters,docs:{...(Qa=Q.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
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
}`,...(Ya=(Xa=Q.parameters)==null?void 0:Xa.docs)==null?void 0:Ya.source}}};var Za,ae,ee;X.parameters={...X.parameters,docs:{...(Za=X.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(ee=(ae=X.parameters)==null?void 0:ae.docs)==null?void 0:ee.source}}};var ne,le,ue;Y.parameters={...Y.parameters,docs:{...(ne=Y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ue=(le=Y.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var te,se,ie;Z.parameters={...Z.parameters,docs:{...(te=Z.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ie=(se=Z.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var oe,re,be;aa.parameters={...aa.parameters,docs:{...(oe=aa.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(be=(re=aa.parameters)==null?void 0:re.docs)==null?void 0:be.source}}};var Ce,ce,me;ea.parameters={...ea.parameters,docs:{...(Ce=ea.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(me=(ce=ea.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,de,Te;na.parameters={...na.parameters,docs:{...(pe=na.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(Te=(de=na.parameters)==null?void 0:de.docs)==null?void 0:Te.source}}};var Be,De,ve;la.parameters={...la.parameters,docs:{...(Be=la.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ve=(De=la.parameters)==null?void 0:De.docs)==null?void 0:ve.source}}};var Pe,Ae,fe;ua.parameters={...ua.parameters,docs:{...(Pe=ua.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(fe=(Ae=ua.parameters)==null?void 0:Ae.docs)==null?void 0:fe.source}}};var ye,ge,Ee;ta.parameters={...ta.parameters,docs:{...(ye=ta.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ee=(ge=ta.parameters)==null?void 0:ge.docs)==null?void 0:Ee.source}}};var ke,Fe,_e;sa.parameters={...sa.parameters,docs:{...(ke=sa.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(_e=(Fe=sa.parameters)==null?void 0:Fe.docs)==null?void 0:_e.source}}};const In=["Playground","Basic","Dynamic","IndicatorSlide","LayoutEqual","LayoutScroll","Card","Pill","Size","IconDemo","BadgeDemo","Extra","Scroll","Disabled","Vertical"];export{na as BadgeDemo,G as Basic,Y as Card,ta as Disabled,H as Dynamic,la as Extra,ea as IconDemo,J as IndicatorSlide,Q as LayoutEqual,X as LayoutScroll,Z as Pill,K as Playground,ua as Scroll,aa as Size,sa as Vertical,In as __namedExportsOrder,Ln as default};
