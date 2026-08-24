import{j as e,B as Te,a as G,r as n,d as Ha,a3 as Ua,n as Sa,I as J,u as Ca,c as Ia,b as Ea}from"./iframe-Ec8Bs185.js";import{w as B}from"./story-renders-Bo_F9MSp.js";import{g as Ga,a as Ja}from"./ripple-api-CjGOCEZT.js";import"./preload-helper-DUxc-Dqw.js";function ye({id:s,panelId:u,label:m,active:h,disabled:k,tabIndex:I=-1,icon:y,badge:_,onClick:f,...P}){return e.jsx(Te,{tag:"button",role:"tab",type:"button",variant:"text",fit:!0,className:G("tabs_tab",h&&"is-active",k&&"is-disabled"),id:s,"aria-selected":h?"true":"false","aria-controls":u,tabIndex:I,disabled:k,"aria-disabled":k||void 0,onClick:f,iconBefore:y?e.jsx("span",{className:"tabs_icon",children:y}):void 0,iconAfter:_,...P,children:e.jsx("span",{className:"tabs_label",children:m})})}ye.__docgenInfo={description:"",methods:[],displayName:"TabsTab",props:{tabIndex:{defaultValue:{value:"-1",computed:!1},required:!1}}};function Ya({listRef:s,enabled:u,vertical:m,variant:h,tabCount:k}){const[I,y]=n.useState(null),_=n.useRef(null),f=n.useCallback(()=>{const o=g=>{y(S=>!g&&!S||S&&g&&S.width===g.width&&S.height===g.height&&S.transform===g.transform?S:g)};if(!u||!s.current){o(null);return}const c=s.current,w=c.querySelector('.tabs_tab[aria-selected="true"]');if(!w){o(null);return}const E=c.getBoundingClientRect(),C=w.getBoundingClientRect(),R=C.left-E.left+c.scrollLeft,N=C.top-E.top+c.scrollTop,b=C.width,i=C.height,p=2;if(m){o({width:`${p}px`,height:`${i}px`,transform:`translate3d(${R+b-p}px, ${N}px, 0)`});return}if(h==="pill"){o({width:`${b}px`,height:`${i}px`,transform:`translate3d(${R}px, ${N}px, 0)`});return}o({width:`${b}px`,height:`${p}px`,transform:`translate3d(${R}px, ${N+i-p}px, 0)`})},[u,s,m,h]),P=n.useCallback(()=>{requestAnimationFrame(f)},[f]),t=n.useCallback(()=>{var w;if((w=_.current)==null||w.disconnect(),!s.current)return;const o=s.current,c=new ResizeObserver(P);_.current=c,c.observe(o),o.querySelectorAll(".tabs_tab").forEach(E=>c.observe(E))},[s,P]);return n.useEffect(()=>{P(),t();const o=s.current;if(!o)return;const c=()=>P();return o.addEventListener("click",c),o.addEventListener("keydown",c),o.addEventListener("scroll",c,{passive:!0}),()=>{var w;o.removeEventListener("click",c),o.removeEventListener("keydown",c),o.removeEventListener("scroll",c),(w=_.current)==null||w.disconnect()}},[s,P,t,k,u,m,h]),{indicatorStyle:I,updateIndicator:P}}const he=1;function Za({listRef:s,enabled:u,tabCount:m}){const[h,k]=n.useState(!1),[I,y]=n.useState(!1),[_,f]=n.useState(!1),P=n.useRef(null),t=n.useCallback(()=>{const b=s.current;if(!u||!b){k(x=>x&&!1),y(x=>x&&!1),f(x=>x&&!1);return}const{scrollLeft:i,scrollWidth:p,clientWidth:g}=b,S=p-g,K=S>he,A=i>he,$=i<S-he;f(x=>x===K?x:K),k(x=>x===A?x:A),y(x=>x===$?x:$)},[u,s]),o=n.useCallback(()=>{requestAnimationFrame(t)},[t]),c=n.useCallback(b=>{const i=s.current;if(!i)return;const p=Math.max(i.clientWidth*.75,120);i.scrollBy({left:b*p,behavior:"smooth"})},[s]),w=n.useCallback(()=>c(-1),[c]),E=n.useCallback(()=>c(1),[c]),C=n.useCallback(b=>{const i=s.current;if(!u||!i||!b)return;const p=i.getBoundingClientRect(),g=b.getBoundingClientRect(),K=g.left-p.left+i.scrollLeft+g.width/2,A=i.clientWidth/2,$=i.scrollWidth-i.clientWidth,x=K-A;i.scrollTo({left:Math.max(0,Math.min(x,$)),behavior:"smooth"})},[u,s]),R=n.useCallback(()=>{const b=s.current;if(!u||!b)return;const i=b.querySelector('.tabs_tab[aria-selected="true"]');C(i)},[u,s,C]),N=n.useCallback(()=>{var p;(p=P.current)==null||p.disconnect();const b=s.current;if(!b)return;const i=new ResizeObserver(o);P.current=i,i.observe(b),b.querySelectorAll(".tabs_tab").forEach(g=>i.observe(g))},[s,o]);return n.useEffect(()=>{o(),N();const b=s.current;if(!b)return;const i=g=>{const S=g.target.closest('[role="tab"]');!S||!b.contains(S)||(o(),requestAnimationFrame(()=>C(S)))},p=()=>{o(),requestAnimationFrame(R)};return b.addEventListener("scroll",t,{passive:!0}),b.addEventListener("click",i),b.addEventListener("keydown",p),()=>{var g;b.removeEventListener("scroll",t),b.removeEventListener("click",i),b.removeEventListener("keydown",p),(g=P.current)==null||g.disconnect()}},[s,u,m,o,N,t,C,R]),{canScrollPrev:h,canScrollNext:I,hasOverflow:_,scrollPrev:w,scrollNext:E,scrollTabToCenter:C,scrollActiveTabIntoView:R,updateScrollState:o}}const ge=n.createContext(null),Qa=new Set(["panels","dynamic"]),Xa=new Set(["line","card","pill"]),el=new Set(["sm","md","lg"]),al=new Set(["auto","equal","scroll"]),ll=new Set(["static","slide"]);function F(s,u){return s.key??s.value??u}function v({ripple:s,mode:u="panels",value:m,defaultValue:h,variant:k="line",size:I="md",layout:y="auto",vertical:_,scrollable:f,ariaLabel:P,items:t,indicator:o="static",tabs:c,extra:w,panel:E,children:C,className:R,onChange:N,...b}){const i=n.useRef(null),p=n.useRef(null),{rippleAttrs:g,childRippleAttrs:S}=Ha({ripple:s},{mode:"container"}),A=`tabs-panel-${n.useId().replace(/:/g,"")}`,$=Qa.has(u)?u:"panels",x=Xa.has(k)?k:"line",Z=el.has(I)?I:"md",Q=al.has(y)?y:"auto",W=ll.has(o)?o:"static",T=$==="dynamic",O=Q==="scroll"&&!_,_e=Q==="equal",Le=f&&Q==="auto",M=!!(t!=null&&t.length),q=M&&!T,[L,we]=n.useState([]),[X,Se]=n.useState(null),[z,Pe]=n.useState(()=>m!=null&&m!==""?m:h!=null&&h!==""?h:null),[Ce,Na]=n.useState(()=>{if(!(t!=null&&t.length))return null;const a=t.find(r=>r.active);if(a)return F(a,t.indexOf(a));const d=t.find(r=>!r.disabled)??t[0];return d?F(d,t.indexOf(d)):null});Ua({ripple:s,mode:$,value:m,variant:x,size:Z,layout:Q,vertical:_,scrollable:f,ariaLabel:P,items:t,indicator:W},i,{className:R,onChange:N,...b}),n.useEffect(()=>{T&&m!=null&&m!==""&&Pe(m)},[T,m]);const Ie=n.useCallback(a=>{we(d=>{const r=d.find(j=>j.id===a.id);return r&&r.panelId===a.panelId&&r.label===a.label&&r.active===a.active&&r.disabled===a.disabled&&r.value===a.value&&r.menuOnly===a.menuOnly&&r.icon===a.icon&&r.badge===a.badge?d:[...d.filter(j=>j.id!==a.id),a]})},[]),Ee=n.useCallback(a=>{we(d=>d.some(r=>r.id===a)?d.filter(r=>r.id!==a):d)},[]),Ne=M?t.length:L.length,{indicatorStyle:Me,updateIndicator:H}=Ya({listRef:p,enabled:W==="slide",vertical:!!_,variant:x,tabCount:Ne}),{canScrollPrev:Ma,canScrollNext:Ba,hasOverflow:Be,scrollPrev:Aa,scrollNext:Da,updateScrollState:U}=Za({listRef:p,enabled:O,tabCount:Ne}),xe=n.useCallback(a=>{Pe(a),N==null||N(a),H(),U()},[N,H,U]),fe=n.useCallback(a=>{if(T){if(M){const j=t.findIndex((De,Wa)=>`item-tab-${Wa}`===a),D=t[j];D&&!D.disabled&&xe(F(D,j));return}const r=L.find(j=>j.id===a);r&&!r.disabled&&xe(r.value??r.id);return}if(q){const r=t.findIndex((D,De)=>`item-tab-${De}`===a),j=t[r];j&&!j.disabled&&(Na(F(j,r)),H(),U());return}const d=L.find(r=>r.id===a);!d||d.disabled||(Se(a),H(),U())},[T,M,q,t,L,xe,H,U]),Ae=n.useCallback(a=>T||q?!1:X===a,[T,q,X]);n.useEffect(()=>{T||q||L.length&&Se(a=>{var j;if(a&&L.some(D=>D.id===a&&!D.disabled))return a;const d=L.find(D=>D.active&&!D.disabled),r=L.find(D=>!D.disabled);return((j=d||r)==null?void 0:j.id)??null})},[T,q,L]),n.useEffect(()=>{if(!T||M||m!=null&&m!==""||z!=null||!L.length)return;const a=L.find(j=>j.active&&!j.disabled),d=L.find(j=>!j.disabled),r=a||d;r&&Pe(r.value??r.id)},[T,M,m,z,L]);const Ra=n.useMemo(()=>({registerTab:Ie,unregisterTab:Ee,selectTab:fe,isTabActive:Ae,isDynamicMode:T,dynamicPanelId:A}),[Ie,Ee,fe,Ae,T,A]),V=n.useMemo(()=>!T||!M?[]:t.map((a,d)=>{const r=F(a,d);return{id:`item-tab-${d}`,key:r,panelId:A,label:a.label,disabled:a.disabled,isActive:z===r,raw:a}}),[T,M,t,A,z]),qa=n.useMemo(()=>{var d;if(!T)return null;if(M)return((d=V.find(r=>r.isActive))==null?void 0:d.raw)??null;const a=L.find(r=>(r.value??r.id)===z);return a?{key:a.value??a.id,label:a.label}:null},[T,M,V,L,z]),za=n.useMemo(()=>{var a,d;return T?M?((a=V.find(r=>r.isActive))==null?void 0:a.id)??"":((d=L.find(r=>(r.value??r.id)===z))==null?void 0:d.id)??"":""},[T,M,V,L,z]),ve=n.useMemo(()=>q?t.map((a,d)=>{const r=F(a,d);return{id:`item-tab-${d}`,panelId:`item-panel-${d}`,label:a.label,content:a.content,disabled:a.disabled,isActive:Ce===r}}):[],[q,t,Ce]),$a=n.useMemo(()=>T&&M?V.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:a.isActive,icon:null,badge:null})):q?ve.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:a.isActive,icon:null,badge:null})):L.map(a=>({id:a.id,panelId:T?A:a.panelId,label:a.label,disabled:!!a.disabled,active:T?(a.value??a.id)===z:X===a.id,icon:a.icon??null,badge:a.badge??null})),[T,M,q,V,ve,L,A,z,X]),Oa=n.useMemo(()=>{const a=["tabs",`tabs_${x}`];return Z==="sm"&&a.push("tabs_sm"),Z==="lg"&&a.push("tabs_lg"),_&&a.push("tabs_vertical"),_e&&a.push("tabs_equal"),O&&a.push("tabs_scroll-nav"),Le&&a.push("tabs_scrollable"),T&&a.push("tabs_dynamic"),W==="slide"&&a.push("tabs_indicator-slide"),a},[x,Z,_,_e,O,Le,T,W]),{class:gl,...Va}=b,Fa=Sa(Va),Ka=typeof E=="function"?E({item:qa,value:z,active:!0}):E;return e.jsx(ge.Provider,{value:Ra,children:e.jsxs("div",{ref:i,className:G(Oa,R),"data-tabs":"",...g,...Fa,children:[e.jsxs("div",{className:"tabs_bar",children:[O&&Be?e.jsx(Te,{className:"tabs_nav tabs_nav_prev",variant:"outline",color:"default",size:"sm",iconOnly:!0,ripple:!1,ariaLabel:"이전 탭",disabled:!Ma,onClick:Aa,iconBefore:e.jsx(J,{name:"chevron-left",size:"sm"})}):null,e.jsx("div",{className:G("tabs_list-wrap",O&&"tabs_scroll-viewport"),children:e.jsxs("div",{ref:p,className:"tabs_list",role:"tablist","aria-label":P,children:[W==="slide"&&Me?e.jsx("span",{className:"tabs_indicator","aria-hidden":"true",style:Me}):null,$a.map(a=>e.jsx(ye,{...S,id:a.id,panelId:a.panelId,label:a.label,active:a.active,disabled:a.disabled,tabIndex:a.active?0:-1,icon:a.icon,badge:a.badge,onClick:()=>fe(a.id)},a.id)),c]})}),O&&Be?e.jsx(Te,{className:"tabs_nav tabs_nav_next",variant:"outline",color:"default",size:"sm",iconOnly:!0,ripple:!1,ariaLabel:"다음 탭",disabled:!Ba,onClick:Da,iconBefore:e.jsx(J,{name:"chevron-right",size:"sm"})}):null,w!=null?e.jsx("div",{className:"tabs_extra","data-demo-slot":"extra",children:w}):null]}),e.jsx("div",{className:"tabs_panels","data-demo-slot":"default",children:T?e.jsxs(e.Fragment,{children:[e.jsx("div",{id:A,className:"tabs_panel is-active",role:"tabpanel","aria-labelledby":za,children:Ka}),C]}):q?ve.map(a=>e.jsx("div",{id:a.panelId,className:G("tabs_panel",a.isActive&&"is-active"),role:"tabpanel","aria-labelledby":a.id,hidden:!a.isActive||void 0,children:e.jsx("p",{children:a.content})},a.panelId)):C})]})})}v.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{mode:{defaultValue:{value:"'panels'",computed:!1},required:!1},variant:{defaultValue:{value:"'line'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},layout:{defaultValue:{value:"'auto'",computed:!1},required:!1},indicator:{defaultValue:{value:"'static'",computed:!1},required:!1}}};const nl=Ea("TabMenu",{booleanProps:new Set(["active","disabled"]),labelProp:"label",selfClosing:!0,skipProps:["icon","badge"]});function Y({label:s,value:u,active:m,disabled:h,icon:k,badge:I}){const y=n.useContext(ge),_=n.useRef(null),P=`tab-${n.useId().replace(/:/g,"")}`;Ca(nl,{label:s,value:u,active:m,disabled:h},Ia({icon:k,badge:I}),_,{});const t=n.useRef(null),o=n.useRef(null);return t.current=y==null?void 0:y.registerTab,o.current=y==null?void 0:y.unregisterTab,n.useEffect(()=>{var c;(c=t.current)==null||c.call(t,{id:P,value:u??P,label:s,active:!!m,disabled:!!h,menuOnly:!0,icon:k??null,badge:I??null})},[P,u,s,m,h,k,I]),n.useEffect(()=>()=>{var c;return(c=o.current)==null?void 0:c.call(o,P)},[P]),e.jsx("span",{ref:_,hidden:!0,"aria-hidden":"true"})}Y.__docgenInfo={description:"",methods:[],displayName:"TabMenu"};const sl=Ea("TabPanel",{booleanProps:new Set(["active","disabled"]),labelProp:"label",selfClosing:!1,skipProps:["icon","badge"]});function l({label:s,active:u,disabled:m,icon:h,badge:k,children:I,className:y,..._}){var i;const f=n.useContext(ge),P=n.useRef(null),t=n.useId().replace(/:/g,""),o=`tab-${t}`,c=`panel-${t}`;Ca(sl,{label:s,active:u,disabled:m},Ia({default:I,icon:h,badge:k}),P,{className:y,..._});const w=n.useRef(null),E=n.useRef(null);w.current=f==null?void 0:f.registerTab,E.current=f==null?void 0:f.unregisterTab,n.useEffect(()=>{var p;(p=w.current)==null||p.call(w,{id:o,panelId:c,label:s,active:!!u,disabled:!!m,icon:h??null,badge:k??null})},[o,c,s,u,m,h,k]),n.useEffect(()=>()=>{var p;return(p=E.current)==null?void 0:p.call(E,o)},[o]);const C=((i=f==null?void 0:f.isTabActive)==null?void 0:i.call(f,o))??!!u,{class:R,...N}=_,b=Sa(N);return e.jsx("div",{ref:P,id:c,className:G("tabs_panel",C&&"is-active",y),role:"tabpanel","aria-labelledby":o,hidden:!C||void 0,...b,children:I})}l.__docgenInfo={description:"",methods:[],displayName:"TabPanel"};const je=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],rl=[{name:"mode",type:"'panels' | 'dynamic'",default:"panels",description:"panels: 탭별 패널 · dynamic: 단일 패널 콘텐츠 전환"},{name:"value",type:"string | number",default:"—",description:"mode=dynamic 선택 탭 key (제어)"},{name:"defaultValue",type:"string | number",default:"—",description:"mode=dynamic 초기 선택 탭 key (비제어)"},{name:"onChange",type:"(key: string) => void",default:"—",description:"탭 전환 콜백"},{name:"variant",type:"'line' | 'card' | 'pill'",default:"line",description:"tabs_line · tabs_card · tabs_pill"},{name:"indicator",type:"'static' | 'slide'",default:"static",description:"line·pill 인디케이터. slide는 선택 탭으로 이동 애니메이션"},{name:"layout",type:"'auto' | 'equal' | 'scroll'",default:"auto",description:"auto: 콘텐츠 너비 · equal: 100% 균등 분할 · scroll: 좌우 네비 스크롤"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tabs_sm · tabs_lg"},{name:"vertical",type:"boolean",default:"false",description:"tabs_vertical"},{name:"scrollable",type:"boolean",default:"false",description:"layout=auto일 때 가로 스크롤바 표시 (tabs_scrollable)"},{name:"ariaLabel",type:"string",default:"—",description:"tablist aria-label"},{name:"items",type:"Array<{ key?, label, content?, active?, disabled? }>",default:"—",description:"선언적 탭. panels: content로 패널 생성 · dynamic: label만 사용"},{name:"extra",type:"ReactNode",default:"—",description:"탭 바 우측 영역 (tabs_extra)"},{name:"panel",type:"ReactNode | Function",default:"—",description:"mode=dynamic 단일 패널 본문"},{name:"children",type:"ReactNode",default:"—",description:"TabPanel · TabMenu 나열 (items prop 대체)"},{name:"className",type:"string",default:"—",description:"루트 요소 추가 클래스"},Ga],tl=je,ol=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"},{name:"icon",type:"ReactNode",default:"—",description:"탭 버튼 아이콘"},{name:"badge",type:"ReactNode",default:"—",description:"탭 버튼 배지"},{name:"children",type:"ReactNode",default:"—",description:"패널 본문 (tabs_panel)"}],il=je,cl=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"value",type:"string",default:"—",description:"mode=dynamic value / onChange key"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"}],ke=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],bl=[{name:"children",description:"TabPanel · TabMenu 나열"},{name:"extra",description:"탭 바 우측 (tabs_extra)"},{name:"panel",description:"mode=dynamic 패널 렌더 함수/노드"}],dl=ke,ul=[{name:"children",description:"패널 본문"},{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],ml=ke,pl=[{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],Tl=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],Pl=[{name:"tabs · tabs_bar · tabs_list · tabs_tab",description:"루트·탭 바·목록·탭 버튼"},{name:"tabs_label · tabs_extra · tabs_panels · tabs_panel",description:"라벨·추가·패널 영역"},{name:"tabs_line · tabs_card · tabs_pill",description:"스타일 변형"},{name:"tabs_indicator-slide",description:'슬라이드 인디케이터 (indicator="slide")'},{name:"tabs_indicator",description:"이동하는 인디케이터 요소"},{name:"tabs_equal · tabs_scroll-nav · tabs_dynamic",description:"균등 분할·네비 스크롤·동적 패널"},{name:"tabs_list-wrap · tabs_scroll-viewport · tabs_nav",description:"목록 래퍼·스크롤 뷰포트·좌우 네비 버튼"},{name:"tabs_sm · tabs_lg · tabs_vertical · tabs_scrollable",description:"크기·레이아웃"},{name:"is-active · is-disabled",description:"탭·패널 상태"},{name:"data-tabs",description:"키보드·포커스 JS"},{name:'role="tablist" · role="tab" · role="tabpanel"',description:"접근성"},...Ja],xl=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],fl=[{name:"--tabs-gap · --tabs-padding",default:"—",description:"탭 간격·패딩"},{name:"--tabs-nav-size",default:"—",description:"네비 스크롤 버튼 크기"},{name:"--tabs-indicator-height · --tabs-indicator-transition",default:"—",description:"line 변형 인디케이터·슬라이드 전환"},{name:"--tabs-panel-padding",default:"—",description:"패널 패딩"}],vl=[{title:"API · Tabs Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 v-model / model-value는 value · defaultValue · onChange로, aria-label은 ariaLabel로 다룹니다.",tables:[{columns:je,rows:rl,codeColumn:"name"}]},{title:"API · TabPanel Props",tables:[{columns:tl,rows:ol,codeColumn:"name"}]},{title:"API · TabMenu Props",tables:[{columns:il,rows:cl,codeColumn:"name"}]},{title:"API · Tabs Children",description:"Vue 슬롯은 React children · extra · panel prop으로 다룹니다.",tables:[{columns:ke,rows:bl,codeColumn:"name"}]},{title:"API · TabPanel Children",tables:[{columns:dl,rows:ul,codeColumn:"name"}]},{title:"API · TabMenu Children",tables:[{columns:ml,rows:pl,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Tl,rows:Pl,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:xl,rows:fl,codeColumn:"name"}]}],hl={mode:"panels",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",indicator:"static"},yl=[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}],wl={title:"Components/네비게이션/Tabs",id:"components-tabs",component:v,subcomponents:{TabsTab:ye,TabPanel:l,TabMenu:Y},tags:["autodocs"],argTypes:{mode:{control:"select",options:["panels","dynamic"],type:{name:"enum",summary:"'panels' | 'dynamic'"}},variant:{control:"select",options:["line","card","pill"],type:{name:"enum",summary:"'line' | 'card' | 'pill'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},layout:{control:"select",options:["auto","equal","scroll"],type:{name:"enum",summary:"'auto' | 'equal' | 'scroll'"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},scrollable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},indicator:{control:"select",options:["static","slide"],type:{name:"enum",summary:"'static' | 'slide'"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:vl,docs:{description:{component:"콘텐츠를 탭으로 전환하는 Tabs 컴포넌트입니다."}}}},ee={parameters:{controls:{disable:!1}},args:{...hl},render:s=>e.jsxs(v,{...s,children:[e.jsx(l,{label:"탭 1",active:!0,children:"첫 번째 탭"}),e.jsx(l,{label:"탭 2",children:"두 번째 탭"})]})},ae={name:"기본 (라인)",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'tabs_line이 기본 스킨입니다. role="tablist" · role="tab" · role="tabpanel"과 aria-selected, aria-controls로 접근성을 보장합니다.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function BasicExample() {
  return (
    <Tabs ariaLabel="프로젝트 정보">
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
  );
}`,language:"tsx"}}},render:B(e.jsxs(v,{ariaLabel:"프로젝트 정보",children:[e.jsx(l,{label:"개요",active:!0,children:e.jsx("p",{children:"프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다."})}),e.jsx(l,{label:"팀",children:e.jsx("p",{children:"팀 구성원과 역할을 표시합니다."})}),e.jsx(l,{label:"활동",children:e.jsx("p",{children:"최근 활동 로그와 타임라인을 보여줍니다."})})]}))},le={name:"동적 패널",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'mode="dynamic"은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 panel 렌더 내용이 전환됩니다.'},source:{code:`import TabMenu from '@uxkm/ui-react/components/TabMenu.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

const dynamicItems = [
  { key: 'overview', label: '개요', active: true },
  { key: 'team', label: '팀' },
  { key: 'activity', label: '활동' },
];

export function DynamicExample() {
  return (
    <>
      <Tabs mode="dynamic" items={dynamicItems} ariaLabel="동적 탭 (items)" panel={({ item }) => {
        if (item?.key === 'overview') return <p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>;
        if (item?.key === 'team') return <p>팀 구성원과 역할을 표시합니다.</p>;
        return <p>최근 활동 로그와 타임라인을 보여줍니다.</p>;
      }} />
      <Tabs
        mode="dynamic"
        ariaLabel="동적 탭 (TabMenu)"
        panel={({ value }) => {
          if (value === 'overview') return <p>TabMenu로 선언한 동적 패널 — 개요</p>;
          if (value === 'team') return <p>TabMenu로 선언한 동적 패널 — 팀</p>;
          return <p>TabMenu로 선언한 동적 패널 — 활동</p>;
        }}
      >
        <TabMenu label="개요" value="overview" active />
        <TabMenu label="팀" value="team" />
        <TabMenu label="활동" value="activity" />
      </Tabs>
    </>
  );
}`,language:"tsx"}}},render:B(e.jsxs(e.Fragment,{children:[e.jsx(v,{mode:"dynamic",items:yl,ariaLabel:"동적 탭 (items)",panel:({item:s})=>(s==null?void 0:s.key)==="overview"?e.jsx("p",{children:"프로젝트 개요와 목표를 설명하는 영역입니다."}):(s==null?void 0:s.key)==="team"?e.jsx("p",{children:"팀 구성원과 역할을 표시합니다."}):e.jsx("p",{children:"최근 활동 로그와 타임라인을 보여줍니다."})}),e.jsxs(v,{mode:"dynamic",ariaLabel:"동적 탭 (TabMenu)",panel:({value:s})=>s==="overview"?e.jsx("p",{children:"TabMenu로 선언한 동적 패널 — 개요"}):s==="team"?e.jsx("p",{children:"TabMenu로 선언한 동적 패널 — 팀"}):e.jsx("p",{children:"TabMenu로 선언한 동적 패널 — 활동"}),children:[e.jsx(Y,{label:"개요",value:"overview",active:!0}),e.jsx(Y,{label:"팀",value:"team"}),e.jsx(Y,{label:"활동",value:"activity"})]})]}))},ne={name:"슬라이드 인디케이터",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'indicator="slide"로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function IndicatorSlideExample() {
  return (
    <Tabs indicator="slide" ariaLabel="슬라이드 라인 탭">
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
  );
}`,language:"tsx"}}},render:B(e.jsxs(e.Fragment,{children:[e.jsxs(v,{indicator:"slide",ariaLabel:"슬라이드 라인 탭",children:[e.jsx(l,{label:"개요",active:!0,children:e.jsx("p",{children:"라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다."})}),e.jsx(l,{label:"팀",children:e.jsx("p",{children:"팀 구성원과 역할을 표시합니다."})}),e.jsx(l,{label:"활동",children:e.jsx("p",{children:"최근 활동 로그와 타임라인을 보여줍니다."})})]}),e.jsxs(v,{variant:"pill",indicator:"slide",ariaLabel:"슬라이드 필 탭",children:[e.jsx(l,{label:"목록",active:!0,children:e.jsx("p",{className:"tabs_panel-placeholder",children:"필 스킨에서 배경 인디케이터가 이동합니다."})}),e.jsx(l,{label:"그리드",children:e.jsx("p",{className:"tabs_panel-placeholder",children:"그리드 뷰 콘텐츠"})}),e.jsx(l,{label:"보드",children:e.jsx("p",{className:"tabs_panel-placeholder",children:"보드 뷰 콘텐츠"})})]})]}))},se={name:"균등 분할",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'layout="equal"로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function LayoutEqualExample() {
  return (
    <Tabs layout="equal" ariaLabel="균등 분할 탭">
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
  );
}`,language:"tsx"}}},render:B(e.jsxs(e.Fragment,{children:[e.jsxs(v,{layout:"equal",ariaLabel:"균등 분할 탭",children:[e.jsx(l,{label:"개요",active:!0,children:e.jsx("p",{children:"탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다."})}),e.jsx(l,{label:"팀 구성",children:e.jsx("p",{children:"팀 구성원과 역할을 표시합니다."})}),e.jsx(l,{label:"활동 로그",children:e.jsx("p",{children:"최근 활동 로그와 타임라인을 보여줍니다."})}),e.jsx(l,{label:"설정",children:e.jsx("p",{children:"프로젝트 설정을 관리합니다."})})]}),e.jsxs(v,{layout:"equal",variant:"pill",indicator:"slide",ariaLabel:"균등 분할 필 탭",children:[e.jsx(l,{label:"일간",active:!0,children:"일간 통계"}),e.jsx(l,{label:"주간",children:"주간 통계"}),e.jsx(l,{label:"월간",children:"월간 통계"}),e.jsx(l,{label:"연간",children:"연간 통계"})]})]}))},re={name:"네비 스크롤",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'layout="scroll"은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function LayoutScrollExample() {
  return (
    <Tabs layout="scroll" className="tabs_demo-narrow" ariaLabel="네비 스크롤 탭">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품 소개">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격 정책">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스 센터">리소스 패널</TabPanel>
      <TabPanel label="기술 지원">지원 패널</TabPanel>
    </Tabs>
  );
}`,language:"tsx"}}},render:B(e.jsxs(v,{layout:"scroll",className:"tabs_demo-narrow",ariaLabel:"네비 스크롤 탭",children:[e.jsx(l,{label:"홈",active:!0,children:"홈 패널"}),e.jsx(l,{label:"제품 소개",children:"제품 패널"}),e.jsx(l,{label:"솔루션",children:"솔루션 패널"}),e.jsx(l,{label:"가격 정책",children:"가격 패널"}),e.jsx(l,{label:"고객 사례",children:"고객 사례 패널"}),e.jsx(l,{label:"리소스 센터",children:"리소스 패널"}),e.jsx(l,{label:"기술 지원",children:"지원 패널"})]}))},te={name:"카드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function CardExample() {
  return (
    <Tabs variant="card" ariaLabel="계정 설정">
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
  );
}`,language:"tsx"}}},render:B(e.jsxs(v,{variant:"card",ariaLabel:"계정 설정",children:[e.jsx(l,{label:"프로필",active:!0,children:e.jsx("p",{children:"이름, 아바타, 소개 문구를 수정합니다."})}),e.jsx(l,{label:"보안",children:e.jsx("p",{children:"비밀번호 변경과 2단계 인증을 설정합니다."})}),e.jsx(l,{label:"알림",children:e.jsx("p",{children:"이메일·푸시 알림 수신 여부를 관리합니다."})})]}))},oe={name:"필",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function PillExample() {
  return (
    <Tabs variant="pill" ariaLabel="보기 모드">
      <TabPanel label="목록" active>
        <p className="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="그리드">
        <p className="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="보드">
        <p className="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
      </TabPanel>
    </Tabs>
  );
}`,language:"tsx"}}},render:B(e.jsxs(v,{variant:"pill",ariaLabel:"보기 모드",children:[e.jsx(l,{label:"목록",active:!0,children:e.jsx("p",{className:"tabs_panel-placeholder",children:"목록 뷰 콘텐츠"})}),e.jsx(l,{label:"그리드",children:e.jsx("p",{className:"tabs_panel-placeholder",children:"그리드 뷰 콘텐츠"})}),e.jsx(l,{label:"보드",children:e.jsx("p",{className:"tabs_panel-placeholder",children:"보드 뷰 콘텐츠"})})]}))},ie={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function SizeExample() {
  return (
    <>
      <Tabs size="sm" ariaLabel="Small 탭">
        <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
        <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
      </Tabs>
      <Tabs size="lg" ariaLabel="Large 탭">
        <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
        <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
      </Tabs>
    </>
  );
}`,language:"tsx"}}},render:B(e.jsxs(e.Fragment,{children:[e.jsxs(v,{size:"sm",ariaLabel:"Small 탭",children:[e.jsx(l,{label:"Small A",active:!0,children:"Small 탭 패널"}),e.jsx(l,{label:"Small B",children:"Small 탭 패널 B"})]}),e.jsxs(v,{size:"lg",ariaLabel:"Large 탭",children:[e.jsx(l,{label:"Large A",active:!0,children:"Large 탭 패널"}),e.jsx(l,{label:"Large B",children:"Large 탭 패널 B"})]})]}))},ce={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_icon으로 탭 앞에 아이콘을 배치합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function IconExample() {
  return (
    <Tabs ariaLabel="대시보드 섹션">
      <TabPanel label="대시보드" active icon={<Icon name="grid" />}>
        대시보드 요약 패널
      </TabPanel>
      <TabPanel label="사용자" icon={<Icon name="user" />}>
        사용자 목록 패널
      </TabPanel>
      <TabPanel label="문서" icon={<Icon name="book" />}>
        문서 목록 패널
      </TabPanel>
    </Tabs>
  );
}`,language:"tsx"}}},render:B(e.jsxs(v,{ariaLabel:"대시보드 섹션",children:[e.jsx(l,{label:"대시보드",active:!0,icon:e.jsx(J,{name:"grid"}),children:"대시보드 요약 패널"}),e.jsx(l,{label:"사용자",icon:e.jsx(J,{name:"user"}),children:"사용자 목록 패널"}),e.jsx(l,{label:"문서",icon:e.jsx(J,{name:"book"}),children:"문서 목록 패널"})]}))},be={name:"배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"탭 버튼에 배지를 넣어 알림 수·상태를 표시합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function BadgeExample() {
  return (
    <Tabs ariaLabel="알림 센터">
      <TabPanel label="전체" active>전체 알림 목록</TabPanel>
      <TabPanel
        label="읽지 않음"
        badge={
          <span className="badge badge_count color_danger tabs_badge" aria-label="읽지 않은 알림 12건">
            12
          </span>
        }
      >
        읽지 않은 알림 12건
      </TabPanel>
      <TabPanel
        label="멘션"
        badge={<span className="badge badge_count color_primary tabs_badge">3</span>}
      >
        멘션 알림 3건
      </TabPanel>
    </Tabs>
  );
}`,language:"tsx"}}},render:B(e.jsxs(v,{ariaLabel:"알림 센터",children:[e.jsx(l,{label:"전체",active:!0,children:"전체 알림 목록"}),e.jsx(l,{label:"읽지 않음",badge:e.jsx("span",{className:"badge badge_count color_danger tabs_badge","aria-label":"읽지 않은 알림 12건",children:"12"}),children:"읽지 않은 알림 12건"}),e.jsx(l,{label:"멘션",badge:e.jsx("span",{className:"badge badge_count color_primary tabs_badge",children:"3"}),children:"멘션 알림 3건"})]}))},de={name:"추가 액션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function ExtraExample() {
  return (
    <Tabs
      ariaLabel="파일 관리"
      extra={<Button variant="filled" color="primary" size="sm" label="업로드" />}
    >
      <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
      <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
      <TabPanel label="최근">최근 파일 목록</TabPanel>
    </Tabs>
  );
}`,language:"tsx"}}},render:B(e.jsxs(v,{ariaLabel:"파일 관리",extra:e.jsx(Te,{variant:"filled",color:"primary",size:"sm",label:"업로드"}),children:[e.jsx(l,{label:"내 파일",active:!0,children:"내 파일 목록"}),e.jsx(l,{label:"공유됨",children:"공유된 파일 목록"}),e.jsx(l,{label:"최근",children:"최근 파일 목록"})]}))},ue={name:"스크롤바",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'scrollable과 layout="auto"를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout="scroll"을 사용하세요.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function ScrollExample() {
  return (
    <Tabs scrollable className="tabs_demo-narrow" ariaLabel="긴 탭 목록">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스">리소스 패널</TabPanel>
      <TabPanel label="지원">지원 패널</TabPanel>
    </Tabs>
  );
}`,language:"tsx"}}},render:B(e.jsxs(v,{scrollable:!0,className:"tabs_demo-narrow",ariaLabel:"긴 탭 목록",children:[e.jsx(l,{label:"홈",active:!0,children:"홈 패널"}),e.jsx(l,{label:"제품",children:"제품 패널"}),e.jsx(l,{label:"솔루션",children:"솔루션 패널"}),e.jsx(l,{label:"가격",children:"가격 패널"}),e.jsx(l,{label:"고객 사례",children:"고객 사례 패널"}),e.jsx(l,{label:"리소스",children:"리소스 패널"}),e.jsx(l,{label:"지원",children:"지원 패널"})]}))},me={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function DisabledExample() {
  return (
    <Tabs ariaLabel="권한별 탭">
      <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
      <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
      <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
    </Tabs>
  );
}`,language:"tsx"}}},render:B(e.jsxs(v,{ariaLabel:"권한별 탭",children:[e.jsx(l,{label:"공개",active:!0,children:"공개 콘텐츠"}),e.jsx(l,{label:"팀",children:"팀 전용 콘텐츠"}),e.jsx(l,{label:"관리자",disabled:!0,children:"관리자 전용 콘텐츠"})]}))},pe={name:"수직",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function VerticalExample() {
  return (
    <Tabs vertical ariaLabel="수직 라인 탭">
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
  );
}`,language:"tsx"}}},render:B(e.jsxs(e.Fragment,{children:[e.jsxs(v,{vertical:!0,ariaLabel:"수직 라인 탭",children:[e.jsx(l,{label:"일반",active:!0,children:e.jsx("p",{children:"일반 설정 패널입니다."})}),e.jsx(l,{label:"보안",children:e.jsx("p",{children:"보안 설정 패널입니다."})}),e.jsx(l,{label:"결제",children:e.jsx("p",{children:"결제 설정 패널입니다."})})]}),e.jsxs(v,{vertical:!0,variant:"card",ariaLabel:"수직 카드 탭",children:[e.jsx(l,{label:"문서",active:!0,children:"문서 관리 패널"}),e.jsx(l,{label:"미디어",children:"미디어 관리 패널"}),e.jsx(l,{label:"아카이브",children:"아카이브 패널"})]})]}))};var Re,qe,ze;ee.parameters={...ee.parameters,docs:{...(Re=ee.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  args: {
    ...playgroundArgs
  },
  render: args => <Tabs {...args}>
      <TabPanel label="탭 1" active>
        첫 번째 탭
      </TabPanel>
      <TabPanel label="탭 2">두 번째 탭</TabPanel>
    </Tabs>
}`,...(ze=(qe=ee.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var $e,Oe,Ve;ae.parameters={...ae.parameters,docs:{...($e=ae.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: '기본 (라인)',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tabs_line이 기본 스킨입니다. role="tablist" · role="tab" · role="tabpanel"과 aria-selected, aria-controls로 접근성을 보장합니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function BasicExample() {
  return (
    <Tabs ariaLabel="프로젝트 정보">
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
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Tabs ariaLabel="프로젝트 정보">
      <TabPanel label="개요" active>
        <p>프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.</p>
      </TabPanel>
      <TabPanel label="팀">
        <p>팀 구성원과 역할을 표시합니다.</p>
      </TabPanel>
      <TabPanel label="활동">
        <p>최근 활동 로그와 타임라인을 보여줍니다.</p>
      </TabPanel>
    </Tabs>)
}`,...(Ve=(Oe=ae.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var Fe,Ke,We;le.parameters={...le.parameters,docs:{...(Fe=le.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: '동적 패널',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'mode="dynamic"은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 panel 렌더 내용이 전환됩니다.'
      },
      source: {
        code: \`import TabMenu from '@uxkm/ui-react/components/TabMenu.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

const dynamicItems = [
  { key: 'overview', label: '개요', active: true },
  { key: 'team', label: '팀' },
  { key: 'activity', label: '활동' },
];

export function DynamicExample() {
  return (
    <>
      <Tabs mode="dynamic" items={dynamicItems} ariaLabel="동적 탭 (items)" panel={({ item }) => {
        if (item?.key === 'overview') return <p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>;
        if (item?.key === 'team') return <p>팀 구성원과 역할을 표시합니다.</p>;
        return <p>최근 활동 로그와 타임라인을 보여줍니다.</p>;
      }} />
      <Tabs
        mode="dynamic"
        ariaLabel="동적 탭 (TabMenu)"
        panel={({ value }) => {
          if (value === 'overview') return <p>TabMenu로 선언한 동적 패널 — 개요</p>;
          if (value === 'team') return <p>TabMenu로 선언한 동적 패널 — 팀</p>;
          return <p>TabMenu로 선언한 동적 패널 — 활동</p>;
        }}
      >
        <TabMenu label="개요" value="overview" active />
        <TabMenu label="팀" value="team" />
        <TabMenu label="활동" value="activity" />
      </Tabs>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Tabs mode="dynamic" items={dynamicItems} ariaLabel="동적 탭 (items)" panel={({
      item
    }) => {
      if (item?.key === 'overview') {
        return <p>프로젝트 개요와 목표를 설명하는 영역입니다.</p>;
      }
      if (item?.key === 'team') return <p>팀 구성원과 역할을 표시합니다.</p>;
      return <p>최근 활동 로그와 타임라인을 보여줍니다.</p>;
    }} />
      <Tabs mode="dynamic" ariaLabel="동적 탭 (TabMenu)" panel={({
      value
    }) => {
      if (value === 'overview') return <p>TabMenu로 선언한 동적 패널 — 개요</p>;
      if (value === 'team') return <p>TabMenu로 선언한 동적 패널 — 팀</p>;
      return <p>TabMenu로 선언한 동적 패널 — 활동</p>;
    }}>
        <TabMenu label="개요" value="overview" active />
        <TabMenu label="팀" value="team" />
        <TabMenu label="활동" value="activity" />
      </Tabs>
    </>)
}`,...(We=(Ke=le.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var He,Ue,Ge;ne.parameters={...ne.parameters,docs:{...(He=ne.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: '슬라이드 인디케이터',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'indicator="slide"로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function IndicatorSlideExample() {
  return (
    <Tabs indicator="slide" ariaLabel="슬라이드 라인 탭">
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
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Tabs indicator="slide" ariaLabel="슬라이드 라인 탭">
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
      <Tabs variant="pill" indicator="slide" ariaLabel="슬라이드 필 탭">
        <TabPanel label="목록" active>
          <p className="tabs_panel-placeholder">필 스킨에서 배경 인디케이터가 이동합니다.</p>
        </TabPanel>
        <TabPanel label="그리드">
          <p className="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
        </TabPanel>
        <TabPanel label="보드">
          <p className="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
        </TabPanel>
      </Tabs>
    </>)
}`,...(Ge=(Ue=ne.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Je,Ye,Ze;se.parameters={...se.parameters,docs:{...(Je=se.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: '균등 분할',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'layout="equal"로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function LayoutEqualExample() {
  return (
    <Tabs layout="equal" ariaLabel="균등 분할 탭">
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
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Tabs layout="equal" ariaLabel="균등 분할 탭">
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
      <Tabs layout="equal" variant="pill" indicator="slide" ariaLabel="균등 분할 필 탭">
        <TabPanel label="일간" active>
          일간 통계
        </TabPanel>
        <TabPanel label="주간">주간 통계</TabPanel>
        <TabPanel label="월간">월간 통계</TabPanel>
        <TabPanel label="연간">연간 통계</TabPanel>
      </Tabs>
    </>)
}`,...(Ze=(Ye=se.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Qe,Xe,ea;re.parameters={...re.parameters,docs:{...(Qe=re.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: '네비 스크롤',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'layout="scroll"은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function LayoutScrollExample() {
  return (
    <Tabs layout="scroll" className="tabs_demo-narrow" ariaLabel="네비 스크롤 탭">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품 소개">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격 정책">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스 센터">리소스 패널</TabPanel>
      <TabPanel label="기술 지원">지원 패널</TabPanel>
    </Tabs>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Tabs layout="scroll" className="tabs_demo-narrow" ariaLabel="네비 스크롤 탭">
      <TabPanel label="홈" active>
        홈 패널
      </TabPanel>
      <TabPanel label="제품 소개">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격 정책">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스 센터">리소스 패널</TabPanel>
      <TabPanel label="기술 지원">지원 패널</TabPanel>
    </Tabs>)
}`,...(ea=(Xe=re.parameters)==null?void 0:Xe.docs)==null?void 0:ea.source}}};var aa,la,na;te.parameters={...te.parameters,docs:{...(aa=te.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: '카드',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function CardExample() {
  return (
    <Tabs variant="card" ariaLabel="계정 설정">
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
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Tabs variant="card" ariaLabel="계정 설정">
      <TabPanel label="프로필" active>
        <p>이름, 아바타, 소개 문구를 수정합니다.</p>
      </TabPanel>
      <TabPanel label="보안">
        <p>비밀번호 변경과 2단계 인증을 설정합니다.</p>
      </TabPanel>
      <TabPanel label="알림">
        <p>이메일·푸시 알림 수신 여부를 관리합니다.</p>
      </TabPanel>
    </Tabs>)
}`,...(na=(la=te.parameters)==null?void 0:la.docs)==null?void 0:na.source}}};var sa,ra,ta;oe.parameters={...oe.parameters,docs:{...(sa=oe.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: '필',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function PillExample() {
  return (
    <Tabs variant="pill" ariaLabel="보기 모드">
      <TabPanel label="목록" active>
        <p className="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="그리드">
        <p className="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="보드">
        <p className="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
      </TabPanel>
    </Tabs>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Tabs variant="pill" ariaLabel="보기 모드">
      <TabPanel label="목록" active>
        <p className="tabs_panel-placeholder">목록 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="그리드">
        <p className="tabs_panel-placeholder">그리드 뷰 콘텐츠</p>
      </TabPanel>
      <TabPanel label="보드">
        <p className="tabs_panel-placeholder">보드 뷰 콘텐츠</p>
      </TabPanel>
    </Tabs>)
}`,...(ta=(ra=oe.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}};var oa,ia,ca;ie.parameters={...ie.parameters,docs:{...(oa=ie.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: '크기',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function SizeExample() {
  return (
    <>
      <Tabs size="sm" ariaLabel="Small 탭">
        <TabPanel label="Small A" active>Small 탭 패널</TabPanel>
        <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
      </Tabs>
      <Tabs size="lg" ariaLabel="Large 탭">
        <TabPanel label="Large A" active>Large 탭 패널</TabPanel>
        <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
      </Tabs>
    </>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Tabs size="sm" ariaLabel="Small 탭">
        <TabPanel label="Small A" active>
          Small 탭 패널
        </TabPanel>
        <TabPanel label="Small B">Small 탭 패널 B</TabPanel>
      </Tabs>
      <Tabs size="lg" ariaLabel="Large 탭">
        <TabPanel label="Large A" active>
          Large 탭 패널
        </TabPanel>
        <TabPanel label="Large B">Large 탭 패널 B</TabPanel>
      </Tabs>
    </>)
}`,...(ca=(ia=ie.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var ba,da,ua;ce.parameters={...ce.parameters,docs:{...(ba=ce.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: '아이콘',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tabs_icon으로 탭 앞에 아이콘을 배치합니다.'
      },
      source: {
        code: \`import Icon from '@uxkm/ui-react/components/Icon.jsx';
import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function IconExample() {
  return (
    <Tabs ariaLabel="대시보드 섹션">
      <TabPanel label="대시보드" active icon={<Icon name="grid" />}>
        대시보드 요약 패널
      </TabPanel>
      <TabPanel label="사용자" icon={<Icon name="user" />}>
        사용자 목록 패널
      </TabPanel>
      <TabPanel label="문서" icon={<Icon name="book" />}>
        문서 목록 패널
      </TabPanel>
    </Tabs>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Tabs ariaLabel="대시보드 섹션">
      <TabPanel label="대시보드" active icon={<Icon name="grid" />}>
        대시보드 요약 패널
      </TabPanel>
      <TabPanel label="사용자" icon={<Icon name="user" />}>
        사용자 목록 패널
      </TabPanel>
      <TabPanel label="문서" icon={<Icon name="book" />}>
        문서 목록 패널
      </TabPanel>
    </Tabs>)
}`,...(ua=(da=ce.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var ma,pa,Ta;be.parameters={...be.parameters,docs:{...(ma=be.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  name: '배지',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: '탭 버튼에 배지를 넣어 알림 수·상태를 표시합니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function BadgeExample() {
  return (
    <Tabs ariaLabel="알림 센터">
      <TabPanel label="전체" active>전체 알림 목록</TabPanel>
      <TabPanel
        label="읽지 않음"
        badge={
          <span className="badge badge_count color_danger tabs_badge" aria-label="읽지 않은 알림 12건">
            12
          </span>
        }
      >
        읽지 않은 알림 12건
      </TabPanel>
      <TabPanel
        label="멘션"
        badge={<span className="badge badge_count color_primary tabs_badge">3</span>}
      >
        멘션 알림 3건
      </TabPanel>
    </Tabs>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Tabs ariaLabel="알림 센터">
      <TabPanel label="전체" active>
        전체 알림 목록
      </TabPanel>
      <TabPanel label="읽지 않음" badge={<span className="badge badge_count color_danger tabs_badge" aria-label="읽지 않은 알림 12건">
            12
          </span>}>
        읽지 않은 알림 12건
      </TabPanel>
      <TabPanel label="멘션" badge={<span className="badge badge_count color_primary tabs_badge">3</span>}>
        멘션 알림 3건
      </TabPanel>
    </Tabs>)
}`,...(Ta=(pa=be.parameters)==null?void 0:pa.docs)==null?void 0:Ta.source}}};var Pa,xa,fa;de.parameters={...de.parameters,docs:{...(Pa=de.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  name: '추가 액션',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다.'
      },
      source: {
        code: \`import Button from '@uxkm/ui-react/components/Button.jsx';
import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function ExtraExample() {
  return (
    <Tabs
      ariaLabel="파일 관리"
      extra={<Button variant="filled" color="primary" size="sm" label="업로드" />}
    >
      <TabPanel label="내 파일" active>내 파일 목록</TabPanel>
      <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
      <TabPanel label="최근">최근 파일 목록</TabPanel>
    </Tabs>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Tabs ariaLabel="파일 관리" extra={<Button variant="filled" color="primary" size="sm" label="업로드" />}>
      <TabPanel label="내 파일" active>
        내 파일 목록
      </TabPanel>
      <TabPanel label="공유됨">공유된 파일 목록</TabPanel>
      <TabPanel label="최근">최근 파일 목록</TabPanel>
    </Tabs>)
}`,...(fa=(xa=de.parameters)==null?void 0:xa.docs)==null?void 0:fa.source}}};var va,ha,ya;ue.parameters={...ue.parameters,docs:{...(va=ue.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: '스크롤바',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'scrollable과 layout="auto"를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout="scroll"을 사용하세요.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function ScrollExample() {
  return (
    <Tabs scrollable className="tabs_demo-narrow" ariaLabel="긴 탭 목록">
      <TabPanel label="홈" active>홈 패널</TabPanel>
      <TabPanel label="제품">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스">리소스 패널</TabPanel>
      <TabPanel label="지원">지원 패널</TabPanel>
    </Tabs>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Tabs scrollable className="tabs_demo-narrow" ariaLabel="긴 탭 목록">
      <TabPanel label="홈" active>
        홈 패널
      </TabPanel>
      <TabPanel label="제품">제품 패널</TabPanel>
      <TabPanel label="솔루션">솔루션 패널</TabPanel>
      <TabPanel label="가격">가격 패널</TabPanel>
      <TabPanel label="고객 사례">고객 사례 패널</TabPanel>
      <TabPanel label="리소스">리소스 패널</TabPanel>
      <TabPanel label="지원">지원 패널</TabPanel>
    </Tabs>)
}`,...(ya=(ha=ue.parameters)==null?void 0:ha.docs)==null?void 0:ya.source}}};var ga,ja,ka;me.parameters={...me.parameters,docs:{...(ga=me.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  name: '비활성',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: false
    },
    docs: {
      description: {
        story: 'disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function DisabledExample() {
  return (
    <Tabs ariaLabel="권한별 탭">
      <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
      <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
      <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
    </Tabs>
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<Tabs ariaLabel="권한별 탭">
      <TabPanel label="공개" active>
        공개 콘텐츠
      </TabPanel>
      <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
      <TabPanel label="관리자" disabled>
        관리자 전용 콘텐츠
      </TabPanel>
    </Tabs>)
}`,...(ka=(ja=me.parameters)==null?void 0:ja.docs)==null?void 0:ka.source}}};var _a,La,wa;pe.parameters={...pe.parameters,docs:{...(_a=pe.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  name: '수직',
  parameters: {
    controls: {
      disable: false
    },
    demoPreview: {
      stack: true
    },
    docs: {
      description: {
        story: 'tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다.'
      },
      source: {
        code: \`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function VerticalExample() {
  return (
    <Tabs vertical ariaLabel="수직 라인 탭">
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
  );
}\`,
        language: 'tsx'
      }
    }
  },
  render: withDocsCanvasRender(<>
      <Tabs vertical ariaLabel="수직 라인 탭">
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
      <Tabs vertical variant="card" ariaLabel="수직 카드 탭">
        <TabPanel label="문서" active>
          문서 관리 패널
        </TabPanel>
        <TabPanel label="미디어">미디어 관리 패널</TabPanel>
        <TabPanel label="아카이브">아카이브 패널</TabPanel>
      </Tabs>
    </>)
}`,...(wa=(La=pe.parameters)==null?void 0:La.docs)==null?void 0:wa.source}}};const Sl=["Playground","Basic","Dynamic","IndicatorSlide","LayoutEqual","LayoutScroll","Card","Pill","Size","IconDemo","BadgeDemo","Extra","Scroll","Disabled","Vertical"];export{be as BadgeDemo,ae as Basic,te as Card,me as Disabled,le as Dynamic,de as Extra,ce as IconDemo,ne as IndicatorSlide,se as LayoutEqual,re as LayoutScroll,oe as Pill,ee as Playground,ue as Scroll,ie as Size,pe as Vertical,Sl as __namedExportsOrder,wl as default};
