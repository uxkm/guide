import{j as e,B as pe,a as U,r as n,d as Ha,a8 as Ga,n as Ca,I as H,u as Ia,c as Ea,b as Na}from"./iframe-ifEc15ad.js";import{w as I}from"./story-renders-Hdz_JUlO.js";import{f as Ja,a as Ya}from"./ripple-api-B98GMvYM.js";import"./preload-helper-DUxc-Dqw.js";function he({id:s,panelId:b,label:d,active:v,disabled:h,tabIndex:_=-1,icon:p,badge:y,onClick:x,...T}){return e.jsx(pe,{tag:"button",role:"tab",type:"button",variant:"text",fit:!0,className:U("tabs_tab",v&&"is-active",h&&"is-disabled"),id:s,"aria-selected":v?"true":"false","aria-controls":b,tabIndex:_,disabled:h,"aria-disabled":h||void 0,onClick:x,iconBefore:p?e.jsx("span",{className:"tabs_icon",children:p}):void 0,iconAfter:y,...T,children:e.jsx("span",{className:"tabs_label",children:d})})}he.__docgenInfo={description:"",methods:[],displayName:"TabsTab",props:{tabIndex:{defaultValue:{value:"-1",computed:!1},required:!1}}};function Za({listRef:s,enabled:b,vertical:d,variant:v,tabCount:h}){const[_,p]=n.useState(null),y=n.useRef(null),x=n.useCallback(()=>{if(!b||!s.current){p(null);return}const o=s.current,P=o.querySelector('.tabs_tab[aria-selected="true"]');if(!P){p(null);return}const k=o.getBoundingClientRect(),E=P.getBoundingClientRect(),w=E.left-k.left+o.scrollLeft,M=E.top-k.top+o.scrollTop,L=E.width,c=E.height,i=2;if(d){p({width:`${i}px`,height:`${c}px`,transform:`translate3d(${w+L-i}px, ${M}px, 0)`});return}if(v==="pill"){p({width:`${L}px`,height:`${c}px`,transform:`translate3d(${w}px, ${M}px, 0)`});return}p({width:`${L}px`,height:`${i}px`,transform:`translate3d(${w}px, ${M+c-i}px, 0)`})},[b,s,d,v]),T=n.useCallback(()=>{requestAnimationFrame(x)},[x]),t=n.useCallback(()=>{var k;if((k=y.current)==null||k.disconnect(),!s.current)return;const o=s.current,P=new ResizeObserver(T);y.current=P,P.observe(o),o.querySelectorAll(".tabs_tab").forEach(E=>P.observe(E))},[s,T]);return n.useEffect(()=>{T(),t();const o=s.current;if(!o)return;const P=()=>T();return o.addEventListener("click",P),o.addEventListener("keydown",P),o.addEventListener("scroll",P,{passive:!0}),()=>{var k;o.removeEventListener("click",P),o.removeEventListener("keydown",P),o.removeEventListener("scroll",P),(k=y.current)==null||k.disconnect()}},[s,T,t,h,b,d,v]),{indicatorStyle:_,updateIndicator:T}}const ve=1;function Qa({listRef:s,enabled:b,tabCount:d}){const[v,h]=n.useState(!1),[_,p]=n.useState(!1),[y,x]=n.useState(!1),T=n.useRef(null),t=n.useCallback(()=>{const c=s.current;if(!b||!c){h(!1),p(!1),x(!1);return}const{scrollLeft:i,scrollWidth:S,clientWidth:N}=c,q=S-N;x(q>ve),h(i>ve),p(i<q-ve)},[b,s]),o=n.useCallback(()=>{requestAnimationFrame(t)},[t]),P=n.useCallback(c=>{const i=s.current;if(!i)return;const S=Math.max(i.clientWidth*.75,120);i.scrollBy({left:c*S,behavior:"smooth"})},[s]),k=n.useCallback(()=>P(-1),[P]),E=n.useCallback(()=>P(1),[P]),w=n.useCallback(c=>{const i=s.current;if(!b||!i||!c)return;const S=i.getBoundingClientRect(),N=c.getBoundingClientRect(),ke=N.left-S.left+i.scrollLeft+N.width/2,z=i.clientWidth/2,J=i.scrollWidth-i.clientWidth,R=ke-z;i.scrollTo({left:Math.max(0,Math.min(R,J)),behavior:"smooth"})},[b,s]),M=n.useCallback(()=>{const c=s.current;if(!b||!c)return;const i=c.querySelector('.tabs_tab[aria-selected="true"]');w(i)},[b,s,w]),L=n.useCallback(()=>{var S;(S=T.current)==null||S.disconnect();const c=s.current;if(!c)return;const i=new ResizeObserver(o);T.current=i,i.observe(c),c.querySelectorAll(".tabs_tab").forEach(N=>i.observe(N))},[s,o]);return n.useEffect(()=>{o(),L();const c=s.current;if(!c)return;const i=N=>{const q=N.target.closest('[role="tab"]');!q||!c.contains(q)||(o(),requestAnimationFrame(()=>w(q)))},S=()=>{o(),requestAnimationFrame(M)};return c.addEventListener("scroll",t,{passive:!0}),c.addEventListener("click",i),c.addEventListener("keydown",S),()=>{var N;c.removeEventListener("scroll",t),c.removeEventListener("click",i),c.removeEventListener("keydown",S),(N=T.current)==null||N.disconnect()}},[s,b,d,o,L,t,w,M]),{canScrollPrev:v,canScrollNext:_,hasOverflow:y,scrollPrev:k,scrollNext:E,scrollTabToCenter:w,scrollActiveTabIntoView:M,updateScrollState:o}}const ye=n.createContext(null),Xa=new Set(["panels","dynamic"]),el=new Set(["line","card","pill"]),al=new Set(["sm","md","lg"]),ll=new Set(["auto","equal","scroll"]),nl=new Set(["static","slide"]);function O(s,b){return s.key??s.value??b}function f({ripple:s,mode:b="panels",value:d,defaultValue:v,variant:h="line",size:_="md",layout:p="auto",vertical:y,scrollable:x,ariaLabel:T,items:t,indicator:o="static",tabs:P,extra:k,panel:E,children:w,className:M,onChange:L,...c}){const i=n.useRef(null),S=n.useRef(null),{rippleAttrs:N,childRippleAttrs:q}=Ha({ripple:s},{mode:"container"}),z=`tabs-panel-${n.useId().replace(/:/g,"")}`,J=Xa.has(b)?b:"panels",R=el.has(h)?h:"line",Y=al.has(_)?_:"md",Z=ll.has(p)?p:"auto",F=nl.has(o)?o:"static",m=J==="dynamic",$=Z==="scroll"&&!y,_e=Z==="equal",Le=x&&Z==="auto",C=!!(t!=null&&t.length),A=C&&!m,[g,Se]=n.useState([]),[Q,we]=n.useState(null),[D,Te]=n.useState(()=>d!=null&&d!==""?d:v!=null&&v!==""?v:null),[Ce,Ma]=n.useState(()=>{if(!(t!=null&&t.length))return null;const a=t.find(r=>r.active);if(a)return O(a,t.indexOf(a));const u=t.find(r=>!r.disabled)??t[0];return u?O(u,t.indexOf(u)):null});Ga({ripple:s,mode:J,value:d,variant:R,size:Y,layout:Z,vertical:y,scrollable:x,ariaLabel:T,items:t,indicator:F},i,{className:M,onChange:L,...c}),n.useEffect(()=>{m&&d!=null&&d!==""&&Te(d)},[m,d]);const Ie=n.useCallback(a=>{Se(u=>{const r=u.filter(j=>j.id!==a.id);return r.push(a),r})},[]),Ee=n.useCallback(a=>{Se(u=>u.filter(r=>r.id!==a))},[]),Ne=C?t.length:g.length,{indicatorStyle:Me,updateIndicator:K}=Za({listRef:S,enabled:F==="slide",vertical:!!y,variant:R,tabCount:Ne}),{canScrollPrev:Ba,canScrollNext:Aa,hasOverflow:Be,scrollPrev:Da,scrollNext:qa,updateScrollState:W}=Qa({listRef:S,enabled:$,tabCount:Ne}),Pe=n.useCallback(a=>{Te(a),L==null||L(a),K(),W()},[L,K,W]),xe=n.useCallback(a=>{if(m){if(C){const j=t.findIndex((De,Ua)=>`item-tab-${Ua}`===a),B=t[j];B&&!B.disabled&&Pe(O(B,j));return}const r=g.find(j=>j.id===a);r&&!r.disabled&&Pe(r.value??r.id);return}if(A){const r=t.findIndex((B,De)=>`item-tab-${De}`===a),j=t[r];j&&!j.disabled&&(Ma(O(j,r)),K(),W());return}const u=g.find(r=>r.id===a);!u||u.disabled||(we(a),K(),W())},[m,C,A,t,g,Pe,K,W]),Ae=n.useCallback(a=>m||A?!1:Q===a,[m,A,Q]);n.useEffect(()=>{m||A||g.length&&we(a=>{var j;if(a&&g.some(B=>B.id===a&&!B.disabled))return a;const u=g.find(B=>B.active&&!B.disabled),r=g.find(B=>!B.disabled);return((j=u||r)==null?void 0:j.id)??null})},[m,A,g]),n.useEffect(()=>{if(!m||C||d!=null&&d!==""||D!=null||!g.length)return;const a=g.find(j=>j.active&&!j.disabled),u=g.find(j=>!j.disabled),r=a||u;r&&Te(r.value??r.id)},[m,C,d,D,g]);const za=n.useMemo(()=>({registerTab:Ie,unregisterTab:Ee,selectTab:xe,isTabActive:Ae,isDynamicMode:m,dynamicPanelId:z}),[Ie,Ee,xe,Ae,m,z]),V=n.useMemo(()=>!m||!C?[]:t.map((a,u)=>{const r=O(a,u);return{id:`item-tab-${u}`,key:r,panelId:z,label:a.label,disabled:a.disabled,isActive:D===r,raw:a}}),[m,C,t,z,D]),Ra=n.useMemo(()=>{var u;if(!m)return null;if(C)return((u=V.find(r=>r.isActive))==null?void 0:u.raw)??null;const a=g.find(r=>(r.value??r.id)===D);return a?{key:a.value??a.id,label:a.label}:null},[m,C,V,g,D]),$a=n.useMemo(()=>{var a,u;return m?C?((a=V.find(r=>r.isActive))==null?void 0:a.id)??"":((u=g.find(r=>(r.value??r.id)===D))==null?void 0:u.id)??"":""},[m,C,V,g,D]),fe=n.useMemo(()=>A?t.map((a,u)=>{const r=O(a,u);return{id:`item-tab-${u}`,panelId:`item-panel-${u}`,label:a.label,content:a.content,disabled:a.disabled,isActive:Ce===r}}):[],[A,t,Ce]),Va=n.useMemo(()=>m&&C?V.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:a.isActive,icon:null,badge:null})):A?fe.map(a=>({id:a.id,panelId:a.panelId,label:a.label,disabled:!!a.disabled,active:a.isActive,icon:null,badge:null})):g.map(a=>({id:a.id,panelId:m?z:a.panelId,label:a.label,disabled:!!a.disabled,active:m?(a.value??a.id)===D:Q===a.id,icon:a.icon??null,badge:a.badge??null})),[m,C,A,V,fe,g,z,D,Q]),Oa=n.useMemo(()=>{const a=["tabs",`tabs_${R}`];return Y==="sm"&&a.push("tabs_sm"),Y==="lg"&&a.push("tabs_lg"),y&&a.push("tabs_vertical"),_e&&a.push("tabs_equal"),$&&a.push("tabs_scroll-nav"),Le&&a.push("tabs_scrollable"),m&&a.push("tabs_dynamic"),F==="slide"&&a.push("tabs_indicator-slide"),a},[R,Y,y,_e,$,Le,m,F]),{class:_l,...Fa}=c,Ka=Ca(Fa),Wa=typeof E=="function"?E({item:Ra,value:D,active:!0}):E;return e.jsx(ye.Provider,{value:za,children:e.jsxs("div",{ref:i,className:U(Oa,M),"data-tabs":"",...N,...Ka,children:[e.jsxs("div",{className:"tabs_bar",children:[$&&Be?e.jsx(pe,{className:"tabs_nav tabs_nav_prev",variant:"outline",color:"default",size:"sm",iconOnly:!0,ripple:!1,ariaLabel:"이전 탭",disabled:!Ba,onClick:Da,iconBefore:e.jsx(H,{name:"chevron-left",size:"sm"})}):null,e.jsx("div",{className:U("tabs_list-wrap",$&&"tabs_scroll-viewport"),children:e.jsxs("div",{ref:S,className:"tabs_list",role:"tablist","aria-label":T,children:[F==="slide"&&Me?e.jsx("span",{className:"tabs_indicator","aria-hidden":"true",style:Me}):null,Va.map(a=>e.jsx(he,{...q,id:a.id,panelId:a.panelId,label:a.label,active:a.active,disabled:a.disabled,tabIndex:a.active?0:-1,icon:a.icon,badge:a.badge,onClick:()=>xe(a.id)},a.id)),P]})}),$&&Be?e.jsx(pe,{className:"tabs_nav tabs_nav_next",variant:"outline",color:"default",size:"sm",iconOnly:!0,ripple:!1,ariaLabel:"다음 탭",disabled:!Aa,onClick:qa,iconBefore:e.jsx(H,{name:"chevron-right",size:"sm"})}):null,k!=null?e.jsx("div",{className:"tabs_extra","data-demo-slot":"extra",children:k}):null]}),e.jsx("div",{className:"tabs_panels","data-demo-slot":"default",children:m?e.jsxs(e.Fragment,{children:[e.jsx("div",{id:z,className:"tabs_panel is-active",role:"tabpanel","aria-labelledby":$a,children:Wa}),w]}):A?fe.map(a=>e.jsx("div",{id:a.panelId,className:U("tabs_panel",a.isActive&&"is-active"),role:"tabpanel","aria-labelledby":a.id,hidden:!a.isActive||void 0,children:e.jsx("p",{children:a.content})},a.panelId)):w})]})})}f.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{mode:{defaultValue:{value:"'panels'",computed:!1},required:!1},variant:{defaultValue:{value:"'line'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},layout:{defaultValue:{value:"'auto'",computed:!1},required:!1},indicator:{defaultValue:{value:"'static'",computed:!1},required:!1}}};const sl=Na("TabMenu",{booleanProps:new Set(["active","disabled"]),labelProp:"label",selfClosing:!0,skipProps:["icon","badge"]});function G({label:s,value:b,active:d,disabled:v,icon:h,badge:_}){const p=n.useContext(ye),y=n.useRef(null),T=`tab-${n.useId().replace(/:/g,"")}`;return Ia(sl,{label:s,value:b,active:d,disabled:v},Ea({icon:h,badge:_}),y,{}),n.useEffect(()=>{p&&p.registerTab({id:T,value:b??T,label:s,active:!!d,disabled:!!v,menuOnly:!0,icon:h??null,badge:_??null})},[p,T,b,s,d,v,h,_]),n.useEffect(()=>{if(p)return()=>p.unregisterTab(T)},[p,T]),e.jsx("span",{ref:y,hidden:!0,"aria-hidden":"true"})}G.__docgenInfo={description:"",methods:[],displayName:"TabMenu"};const rl=Na("TabPanel",{booleanProps:new Set(["active","disabled"]),labelProp:"label",selfClosing:!1,skipProps:["icon","badge"]});function l({label:s,active:b,disabled:d,icon:v,badge:h,children:_,className:p,...y}){var L;const x=n.useContext(ye),T=n.useRef(null),t=n.useId().replace(/:/g,""),o=`tab-${t}`,P=`panel-${t}`;Ia(rl,{label:s,active:b,disabled:d},Ea({default:_,icon:v,badge:h}),T,{className:p,...y}),n.useEffect(()=>{x&&x.registerTab({id:o,panelId:P,label:s,active:!!b,disabled:!!d,icon:v??null,badge:h??null})},[x,o,P,s,b,d,v,h]),n.useEffect(()=>{if(x)return()=>x.unregisterTab(o)},[x,o]);const k=((L=x==null?void 0:x.isTabActive)==null?void 0:L.call(x,o))??!!b,{class:E,...w}=y,M=Ca(w);return e.jsx("div",{ref:T,id:P,className:U("tabs_panel",k&&"is-active",p),role:"tabpanel","aria-labelledby":o,hidden:!k||void 0,...M,children:_})}l.__docgenInfo={description:"",methods:[],displayName:"TabPanel"};const ge=[{key:"name",label:"Prop"},{key:"type",label:"타입"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],tl=[{name:"mode",type:"'panels' | 'dynamic'",default:"panels",description:"panels: 탭별 패널 · dynamic: 단일 패널 콘텐츠 전환"},{name:"v-model / model-value",type:"string | number",default:"—",description:"mode=dynamic 선택 탭 key"},{name:"variant",type:"'line' | 'card' | 'pill'",default:"line",description:"tabs_line · tabs_card · tabs_pill"},{name:"indicator",type:"'static' | 'slide'",default:"static",description:"line·pill 인디케이터. slide는 선택 탭으로 이동 애니메이션"},{name:"layout",type:"'auto' | 'equal' | 'scroll'",default:"auto",description:"auto: 콘텐츠 너비 · equal: 100% 균등 분할 · scroll: 좌우 네비 스크롤"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md",description:"tabs_sm · tabs_lg"},{name:"vertical",type:"boolean",default:"false",description:"tabs_vertical"},{name:"scrollable",type:"boolean",default:"false",description:"layout=auto일 때 가로 스크롤바 표시 (tabs_scrollable)"},{name:"aria-label",type:"string",default:"—",description:"tablist aria-label"},{name:"items",type:"Array<{ key?, label, content?, active?, disabled? }>",default:"—",description:"선언적 탭. panels: content로 패널 생성 · dynamic: label만 사용"},Ja],ol=ge,il=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"}],cl=ge,bl=[{name:"label",type:"string",default:"—",description:"탭 버튼 텍스트 (필수)"},{name:"value",type:"string",default:"—",description:"mode=dynamic v-model key"},{name:"active",type:"boolean",default:"false",description:"초기 선택 탭"},{name:"disabled",type:"boolean",default:"false",description:"is-disabled"}],je=[{key:"name",label:"슬롯"},{key:"description",label:"설명"}],dl=[{name:"tabs",description:"탭 바 추가 콘텐츠"},{name:"extra",description:"탭 바 우측 영역 (tabs_extra)"},{name:"panel",description:"mode=dynamic 단일 패널 본문 ({ item, value, active })"},{name:"default",description:"TabPanel·TabMenu 나열 (items prop 대체)"}],ul=je,ml=[{name:"default",description:"패널 본문 (tabs_panel)"},{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],pl=je,Tl=[{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],Pl=[{key:"name",label:"클래스"},{key:"description",label:"설명"}],xl=[{name:"tabs · tabs_bar · tabs_list · tabs_tab",description:"루트·탭 바·목록·탭 버튼"},{name:"tabs_label · tabs_extra · tabs_panels · tabs_panel",description:"라벨·추가·패널 영역"},{name:"tabs_line · tabs_card · tabs_pill",description:"스타일 변형"},{name:"tabs_indicator-slide",description:'슬라이드 인디케이터 (indicator="slide")'},{name:"tabs_indicator",description:"이동하는 인디케이터 요소"},{name:"tabs_equal · tabs_scroll-nav · tabs_dynamic",description:"균등 분할·네비 스크롤·동적 패널"},{name:"tabs_list-wrap · tabs_scroll-viewport · tabs_nav",description:"목록 래퍼·스크롤 뷰포트·좌우 네비 버튼"},{name:"tabs_sm · tabs_lg · tabs_vertical · tabs_scrollable",description:"크기·레이아웃"},{name:"is-active · is-disabled",description:"탭·패널 상태"},{name:"data-tabs",description:"키보드·포커스 JS"},{name:'role="tablist" · role="tab" · role="tabpanel"',description:"접근성"},...Ya],fl=[{key:"name",label:"토큰"},{key:"default",label:"기본값"},{key:"description",label:"설명"}],vl=[{name:"--tabs-gap · --tabs-padding",default:"—",description:"탭 간격·패딩"},{name:"--tabs-nav-size",default:"—",description:"네비 스크롤 버튼 크기"},{name:"--tabs-indicator-height · --tabs-indicator-transition",default:"—",description:"line 변형 인디케이터·슬라이드 전환"},{name:"--tabs-panel-padding",default:"—",description:"패널 패딩"}],qe=[{key:"name",label:"Prop / Children"},{key:"description",label:"설명"}],hl=[{name:"children",description:"TabPanel · TabMenu 나열"},{name:"extra",description:"탭 바 우측 (tabs_extra)"},{name:"tabs",description:"탭 바 추가 콘텐츠"},{name:"panel",description:"mode=dynamic 패널 렌더 함수/노드"}],yl=[{name:"children",description:"패널 본문"},{name:"icon",description:"탭 버튼 아이콘"},{name:"badge",description:"탭 버튼 배지"}],gl=[{title:"API · Tabs Props",description:"React에서는 camelCase prop을 사용합니다. Vue의 v-model / model-value는 value · defaultValue · onChange로, aria-label은 ariaLabel로 다룹니다.",tables:[{columns:ge,rows:tl,codeColumn:"name"}]},{title:"API · TabPanel Props",tables:[{columns:ol,rows:il,codeColumn:"name"}]},{title:"API · TabMenu Props",tables:[{columns:cl,rows:bl,codeColumn:"name"}]},{title:"API · Tabs Children / Slots",description:"Vue 슬롯은 React children · extra · tabs · panel prop으로 다룹니다.",tables:[{columns:je,rows:dl,codeColumn:"name"},{columns:qe,rows:hl,codeColumn:"name"}]},{title:"API · TabPanel Children",tables:[{columns:ul,rows:ml,codeColumn:"name"},{columns:qe,rows:yl,codeColumn:"name"}]},{title:"API · TabMenu Children",tables:[{columns:pl,rows:Tl,codeColumn:"name"}]},{title:"클래스 · 속성",description:"React 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.",tables:[{columns:Pl,rows:xl,codeColumn:"name"}]},{title:"디자인 토큰",tables:[{columns:fl,rows:vl,codeColumn:"name"}]}],jl={mode:"panels",variant:"line",size:"md",layout:"auto",vertical:!1,scrollable:!1,ariaLabel:"접근성 라벨",indicator:"static"},kl=[{key:"overview",label:"개요",active:!0},{key:"team",label:"팀"},{key:"activity",label:"활동"}],Il={title:"Components/네비게이션/Tabs",id:"components-tabs",component:f,subcomponents:{TabsTab:he,TabPanel:l,TabMenu:G},tags:["autodocs"],argTypes:{mode:{control:"select",options:["panels","dynamic"],type:{name:"enum",summary:"'panels' | 'dynamic'"}},variant:{control:"select",options:["line","card","pill"],type:{name:"enum",summary:"'line' | 'card' | 'pill'"}},size:{control:"select",options:["sm","md","lg"],type:{name:"enum",summary:"'sm' | 'md' | 'lg'"}},layout:{control:"select",options:["auto","equal","scroll"],type:{name:"enum",summary:"'auto' | 'equal' | 'scroll'"}},vertical:{control:"boolean",type:{name:"boolean",summary:"boolean"}},scrollable:{control:"boolean",type:{name:"boolean",summary:"boolean"}},ariaLabel:{control:"text",type:{name:"string",summary:"string"}},indicator:{control:"select",options:["static","slide"],type:{name:"enum",summary:"'static' | 'slide'"}}},parameters:{controls:{disable:!1},layout:"fullscreen",apiSections:gl,docs:{description:{component:"콘텐츠를 탭으로 전환하는 Tabs 컴포넌트입니다."}}}},X={parameters:{controls:{disable:!1}},args:{...jl},render:s=>e.jsxs(f,{...s,children:[e.jsx(l,{label:"탭 1",active:!0,children:"첫 번째 탭"}),e.jsx(l,{label:"탭 2",children:"두 번째 탭"})]})},ee={name:"기본 (라인)",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'tabs_line이 기본 스킨입니다. role="tablist" · role="tab" · role="tabpanel"과 aria-selected, aria-controls로 접근성을 보장합니다.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(f,{ariaLabel:"프로젝트 정보",children:[e.jsx(l,{label:"개요",active:!0,children:e.jsx("p",{children:"프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다."})}),e.jsx(l,{label:"팀",children:e.jsx("p",{children:"팀 구성원과 역할을 표시합니다."})}),e.jsx(l,{label:"활동",children:e.jsx("p",{children:"최근 활동 로그와 타임라인을 보여줍니다."})})]}))},ae={name:"동적 패널",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'mode="dynamic"은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 panel 렌더 내용이 전환됩니다.'},source:{code:`import TabMenu from '@uxkm/ui-react/components/TabMenu.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(e.Fragment,{children:[e.jsx(f,{mode:"dynamic",items:kl,ariaLabel:"동적 탭 (items)",panel:({item:s})=>(s==null?void 0:s.key)==="overview"?e.jsx("p",{children:"프로젝트 개요와 목표를 설명하는 영역입니다."}):(s==null?void 0:s.key)==="team"?e.jsx("p",{children:"팀 구성원과 역할을 표시합니다."}):e.jsx("p",{children:"최근 활동 로그와 타임라인을 보여줍니다."})}),e.jsxs(f,{mode:"dynamic",ariaLabel:"동적 탭 (TabMenu)",panel:({value:s})=>s==="overview"?e.jsx("p",{children:"TabMenu로 선언한 동적 패널 — 개요"}):s==="team"?e.jsx("p",{children:"TabMenu로 선언한 동적 패널 — 팀"}):e.jsx("p",{children:"TabMenu로 선언한 동적 패널 — 활동"}),children:[e.jsx(G,{label:"개요",value:"overview",active:!0}),e.jsx(G,{label:"팀",value:"team"}),e.jsx(G,{label:"활동",value:"activity"})]})]}))},le={name:"슬라이드 인디케이터",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'indicator="slide"로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(e.Fragment,{children:[e.jsxs(f,{indicator:"slide",ariaLabel:"슬라이드 라인 탭",children:[e.jsx(l,{label:"개요",active:!0,children:e.jsx("p",{children:"라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다."})}),e.jsx(l,{label:"팀",children:e.jsx("p",{children:"팀 구성원과 역할을 표시합니다."})}),e.jsx(l,{label:"활동",children:e.jsx("p",{children:"최근 활동 로그와 타임라인을 보여줍니다."})})]}),e.jsxs(f,{variant:"pill",indicator:"slide",ariaLabel:"슬라이드 필 탭",children:[e.jsx(l,{label:"목록",active:!0,children:e.jsx("p",{className:"tabs_panel-placeholder",children:"필 스킨에서 배경 인디케이터가 이동합니다."})}),e.jsx(l,{label:"그리드",children:e.jsx("p",{className:"tabs_panel-placeholder",children:"그리드 뷰 콘텐츠"})}),e.jsx(l,{label:"보드",children:e.jsx("p",{className:"tabs_panel-placeholder",children:"보드 뷰 콘텐츠"})})]})]}))},ne={name:"균등 분할",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:'layout="equal"로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(e.Fragment,{children:[e.jsxs(f,{layout:"equal",ariaLabel:"균등 분할 탭",children:[e.jsx(l,{label:"개요",active:!0,children:e.jsx("p",{children:"탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다."})}),e.jsx(l,{label:"팀 구성",children:e.jsx("p",{children:"팀 구성원과 역할을 표시합니다."})}),e.jsx(l,{label:"활동 로그",children:e.jsx("p",{children:"최근 활동 로그와 타임라인을 보여줍니다."})}),e.jsx(l,{label:"설정",children:e.jsx("p",{children:"프로젝트 설정을 관리합니다."})})]}),e.jsxs(f,{layout:"equal",variant:"pill",indicator:"slide",ariaLabel:"균등 분할 필 탭",children:[e.jsx(l,{label:"일간",active:!0,children:"일간 통계"}),e.jsx(l,{label:"주간",children:"주간 통계"}),e.jsx(l,{label:"월간",children:"월간 통계"}),e.jsx(l,{label:"연간",children:"연간 통계"})]})]}))},se={name:"네비 스크롤",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'layout="scroll"은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(f,{layout:"scroll",className:"tabs_demo-narrow",ariaLabel:"네비 스크롤 탭",children:[e.jsx(l,{label:"홈",active:!0,children:"홈 패널"}),e.jsx(l,{label:"제품 소개",children:"제품 패널"}),e.jsx(l,{label:"솔루션",children:"솔루션 패널"}),e.jsx(l,{label:"가격 정책",children:"가격 패널"}),e.jsx(l,{label:"고객 사례",children:"고객 사례 패널"}),e.jsx(l,{label:"리소스 센터",children:"리소스 패널"}),e.jsx(l,{label:"기술 지원",children:"지원 패널"})]}))},re={name:"카드",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(f,{variant:"card",ariaLabel:"계정 설정",children:[e.jsx(l,{label:"프로필",active:!0,children:e.jsx("p",{children:"이름, 아바타, 소개 문구를 수정합니다."})}),e.jsx(l,{label:"보안",children:e.jsx("p",{children:"비밀번호 변경과 2단계 인증을 설정합니다."})}),e.jsx(l,{label:"알림",children:e.jsx("p",{children:"이메일·푸시 알림 수신 여부를 관리합니다."})})]}))},te={name:"필",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(f,{variant:"pill",ariaLabel:"보기 모드",children:[e.jsx(l,{label:"목록",active:!0,children:e.jsx("p",{className:"tabs_panel-placeholder",children:"목록 뷰 콘텐츠"})}),e.jsx(l,{label:"그리드",children:e.jsx("p",{className:"tabs_panel-placeholder",children:"그리드 뷰 콘텐츠"})}),e.jsx(l,{label:"보드",children:e.jsx("p",{className:"tabs_panel-placeholder",children:"보드 뷰 콘텐츠"})})]}))},oe={name:"크기",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(e.Fragment,{children:[e.jsxs(f,{size:"sm",ariaLabel:"Small 탭",children:[e.jsx(l,{label:"Small A",active:!0,children:"Small 탭 패널"}),e.jsx(l,{label:"Small B",children:"Small 탭 패널 B"})]}),e.jsxs(f,{size:"lg",ariaLabel:"Large 탭",children:[e.jsx(l,{label:"Large A",active:!0,children:"Large 탭 패널"}),e.jsx(l,{label:"Large B",children:"Large 탭 패널 B"})]})]}))},ie={name:"아이콘",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_icon으로 탭 앞에 아이콘을 배치합니다."},source:{code:`import Icon from '@uxkm/ui-react/components/Icon.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(f,{ariaLabel:"대시보드 섹션",children:[e.jsx(l,{label:"대시보드",active:!0,icon:e.jsx(H,{name:"grid"}),children:"대시보드 요약 패널"}),e.jsx(l,{label:"사용자",icon:e.jsx(H,{name:"user"}),children:"사용자 목록 패널"}),e.jsx(l,{label:"문서",icon:e.jsx(H,{name:"book"}),children:"문서 목록 패널"})]}))},ce={name:"배지",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"탭 버튼에 배지를 넣어 알림 수·상태를 표시합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(f,{ariaLabel:"알림 센터",children:[e.jsx(l,{label:"전체",active:!0,children:"전체 알림 목록"}),e.jsx(l,{label:"읽지 않음",badge:e.jsx("span",{className:"badge badge_count color_danger tabs_badge","aria-label":"읽지 않은 알림 12건",children:"12"}),children:"읽지 않은 알림 12건"}),e.jsx(l,{label:"멘션",badge:e.jsx("span",{className:"badge badge_count color_primary tabs_badge",children:"3"}),children:"멘션 알림 3건"})]}))},be={name:"추가 액션",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다."},source:{code:`import Button from '@uxkm/ui-react/components/Button.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(f,{ariaLabel:"파일 관리",extra:e.jsx(pe,{variant:"filled",color:"primary",size:"sm",label:"업로드"}),children:[e.jsx(l,{label:"내 파일",active:!0,children:"내 파일 목록"}),e.jsx(l,{label:"공유됨",children:"공유된 파일 목록"}),e.jsx(l,{label:"최근",children:"최근 파일 목록"})]}))},de={name:"스크롤바",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:'scrollable과 layout="auto"를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout="scroll"을 사용하세요.'},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(f,{scrollable:!0,className:"tabs_demo-narrow",ariaLabel:"긴 탭 목록",children:[e.jsx(l,{label:"홈",active:!0,children:"홈 패널"}),e.jsx(l,{label:"제품",children:"제품 패널"}),e.jsx(l,{label:"솔루션",children:"솔루션 패널"}),e.jsx(l,{label:"가격",children:"가격 패널"}),e.jsx(l,{label:"고객 사례",children:"고객 사례 패널"}),e.jsx(l,{label:"리소스",children:"리소스 패널"}),e.jsx(l,{label:"지원",children:"지원 패널"})]}))},ue={name:"비활성",parameters:{controls:{disable:!1},demoPreview:{stack:!1},docs:{description:{story:"disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
import Tabs from '@uxkm/ui-react/components/Tabs.jsx';

export function DisabledExample() {
  return (
    <Tabs ariaLabel="권한별 탭">
      <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
      <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
      <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
    </Tabs>
  );
}`,language:"tsx"}}},render:I(e.jsxs(f,{ariaLabel:"권한별 탭",children:[e.jsx(l,{label:"공개",active:!0,children:"공개 콘텐츠"}),e.jsx(l,{label:"팀",children:"팀 전용 콘텐츠"}),e.jsx(l,{label:"관리자",disabled:!0,children:"관리자 전용 콘텐츠"})]}))},me={name:"수직",parameters:{controls:{disable:!1},demoPreview:{stack:!0},docs:{description:{story:"tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다."},source:{code:`import TabPanel from '@uxkm/ui-react/components/TabPanel.jsx';
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
}`,language:"tsx"}}},render:I(e.jsxs(e.Fragment,{children:[e.jsxs(f,{vertical:!0,ariaLabel:"수직 라인 탭",children:[e.jsx(l,{label:"일반",active:!0,children:e.jsx("p",{children:"일반 설정 패널입니다."})}),e.jsx(l,{label:"보안",children:e.jsx("p",{children:"보안 설정 패널입니다."})}),e.jsx(l,{label:"결제",children:e.jsx("p",{children:"결제 설정 패널입니다."})})]}),e.jsxs(f,{vertical:!0,variant:"card",ariaLabel:"수직 카드 탭",children:[e.jsx(l,{label:"문서",active:!0,children:"문서 관리 패널"}),e.jsx(l,{label:"미디어",children:"미디어 관리 패널"}),e.jsx(l,{label:"아카이브",children:"아카이브 패널"})]})]}))};var ze,Re,$e;X.parameters={...X.parameters,docs:{...(ze=X.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...($e=(Re=X.parameters)==null?void 0:Re.docs)==null?void 0:$e.source}}};var Ve,Oe,Fe;ee.parameters={...ee.parameters,docs:{...(Ve=ee.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Fe=(Oe=ee.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.source}}};var Ke,We,Ue;ae.parameters={...ae.parameters,docs:{...(Ke=ae.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ue=(We=ae.parameters)==null?void 0:We.docs)==null?void 0:Ue.source}}};var He,Ge,Je;le.parameters={...le.parameters,docs:{...(He=le.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Je=(Ge=le.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Ye,Ze,Qe;ne.parameters={...ne.parameters,docs:{...(Ye=ne.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Qe=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:Qe.source}}};var Xe,ea,aa;se.parameters={...se.parameters,docs:{...(Xe=se.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(aa=(ea=se.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var la,na,sa;re.parameters={...re.parameters,docs:{...(la=re.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(sa=(na=re.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var ra,ta,oa;te.parameters={...te.parameters,docs:{...(ra=te.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(oa=(ta=te.parameters)==null?void 0:ta.docs)==null?void 0:oa.source}}};var ia,ca,ba;oe.parameters={...oe.parameters,docs:{...(ia=oe.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(ba=(ca=oe.parameters)==null?void 0:ca.docs)==null?void 0:ba.source}}};var da,ua,ma;ie.parameters={...ie.parameters,docs:{...(da=ie.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ma=(ua=ie.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var pa,Ta,Pa;ce.parameters={...ce.parameters,docs:{...(pa=ce.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(Pa=(Ta=ce.parameters)==null?void 0:Ta.docs)==null?void 0:Pa.source}}};var xa,fa,va;be.parameters={...be.parameters,docs:{...(xa=be.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(va=(fa=be.parameters)==null?void 0:fa.docs)==null?void 0:va.source}}};var ha,ya,ga;de.parameters={...de.parameters,docs:{...(ha=de.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(ga=(ya=de.parameters)==null?void 0:ya.docs)==null?void 0:ga.source}}};var ja,ka,_a;ue.parameters={...ue.parameters,docs:{...(ja=ue.parameters)==null?void 0:ja.docs,source:{originalSource:`{
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
}`,...(_a=(ka=ue.parameters)==null?void 0:ka.docs)==null?void 0:_a.source}}};var La,Sa,wa;me.parameters={...me.parameters,docs:{...(La=me.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(wa=(Sa=me.parameters)==null?void 0:Sa.docs)==null?void 0:wa.source}}};const El=["Playground","Basic","Dynamic","IndicatorSlide","LayoutEqual","LayoutScroll","Card","Pill","Size","IconDemo","BadgeDemo","Extra","Scroll","Disabled","Vertical"];export{ce as BadgeDemo,ee as Basic,re as Card,ue as Disabled,ae as Dynamic,be as Extra,ie as IconDemo,le as IndicatorSlide,ne as LayoutEqual,se as LayoutScroll,te as Pill,X as Playground,de as Scroll,oe as Size,me as Vertical,El as __namedExportsOrder,Il as default};
