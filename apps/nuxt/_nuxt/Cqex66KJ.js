import{A as e,B as t,Ct as n,D as r,F as i,G as a,H as o,I as s,K as c,L as l,R as u,U as d,W as f,X as p,Y as m,_ as h,at as g,b as _,d as v,et as ee,f as y,i as b,k as x,m as S,nt as C,p as w,q as te,st as T,u as E,wt as ne,xt as re,y as D,z as ie}from"./CCnt5OSV.js";import{i as ae}from"./jFoqhwDN.js";import{I as O,j as oe,l as k,t as A,v as se}from"./DkmWXf_S.js";import{n as ce,t as j}from"./D01l-9yr.js";import{t as M}from"./D5AUKneU.js";import{t as N}from"./gHQDdAlU.js";import{t as P}from"./DD3RWXAt.js";import{r as F,t as I}from"./D6IbhUhQ.js";import{t as L}from"./-gIuMC1U.js";var R={__name:`TabMenu`,props:{label:{type:String,required:!0},value:String,active:Boolean,disabled:Boolean},setup(e){let t=e,n=r(`tabs`,null),o=a(),c=d(),u=C(null);function p(e){let t=e?.();if(!t?.length)return``;let n=t[0],r=n.type?.name||n.type?.__name;return r===`Icon`&&n.props?.name?`<Icon name="${n.props.name}" />`:r===`Badge`?O(`Badge`,n.props??{},{},n.props??{},{defaults:{color:`primary`,variant:`filled`,size:`md`},booleanProps:new Set([`round`,`checkable`,`add`,`closable`,`selected`,`disabled`,`count`]),selfClosing:!1}):`...`}function m(e,t,n){let r={};return t.icon?.()&&(r.icon=p(t.icon)),t.badge?.()&&(r.badge=p(t.badge)),O(`TabMenu`,e,t,n,{booleanProps:new Set([`active`,`disabled`]),labelProp:`label`,selfClosing:!0,slotContent:r})}se(m,t,o,u,c);let h=f().replace(/:/g,``);return i(()=>{n?.registerTab({id:h,value:t.value??h,label:t.label,active:t.active,disabled:t.disabled,menuOnly:!0,iconSlot:o.icon?()=>o.icon():null,badgeSlot:o.badge?()=>o.badge():null})}),s(()=>{n?.unregisterTab(h)}),(e,t)=>(l(),S(`span`,{ref_key:`rootRef`,ref:u,hidden:``,"aria-hidden":`true`},null,512))}},z=[`id`,`aria-labelledby`,`hidden`],B={__name:`TabPanel`,props:{label:{type:String,required:!0},active:Boolean,disabled:Boolean},setup(e){let n=e,o=r(`tabs`,null),c=a(),u=d(),p=C(null);function m(e){let t=e?.();if(!t?.length)return``;let n=t[0],r=n.type?.name||n.type?.__name;return r===`Icon`&&n.props?.name?`<Icon name="${n.props.name}" />`:r===`Badge`?O(`Badge`,n.props??{},{},n.props??{},{defaults:{color:`primary`,variant:`filled`,size:`md`},booleanProps:new Set([`round`,`checkable`,`add`,`closable`,`selected`,`disabled`,`count`]),selfClosing:!1}):`...`}function h(e,t,n){let r={};return t.icon?.()&&(r.icon=m(t.icon)),t.badge?.()&&(r.badge=m(t.badge)),O(`TabPanel`,e,t,n,{booleanProps:new Set([`active`,`disabled`]),labelProp:`label`,selfClosing:!1,slotContent:r})}se(h,n,c,p,u);let g=f().replace(/:/g,``),_=f().replace(/:/g,``),v=C(n.active);return i(()=>{o?.registerTab({id:g,panelId:_,label:n.label,active:n.active,disabled:n.disabled,isActive:v,iconSlot:c.icon?()=>c.icon():null,badgeSlot:c.badge?()=>c.badge():null})}),s(()=>{o?.unregisterTab(g)}),(e,n)=>(l(),S(`div`,{ref_key:`rootRef`,ref:p,id:T(_),class:re([`tabs_panel`,{"is-active":v.value}]),role:`tabpanel`,"aria-labelledby":T(g),hidden:!v.value||void 0},[t(e.$slots,`default`)],10,z))}};function le({listRef:t,enabled:n,vertical:r,variant:a,onTabsChange:o}){let l=C(null),u=null;function d(){if(!n.value||!t.value){l.value=null;return}let e=t.value,i=e.querySelector(`.tabs_tab[aria-selected="true"]`);if(!i){l.value=null;return}let o=e.getBoundingClientRect(),s=i.getBoundingClientRect(),c=s.left-o.left+e.scrollLeft,u=s.top-o.top+e.scrollTop,d=s.width,f=s.height;if(r.value){l.value={width:`2px`,height:`${f}px`,transform:`translate3d(${c+d-2}px, ${u}px, 0)`};return}if(a.value===`pill`){l.value={width:`${d}px`,height:`${f}px`,transform:`translate3d(${c}px, ${u}px, 0)`};return}l.value={width:`${d}px`,height:`2px`,transform:`translate3d(${c}px, ${u+f-2}px, 0)`}}function f(){e(()=>{requestAnimationFrame(d)})}function p(){u?.disconnect(),t.value&&(u=new ResizeObserver(f),u.observe(t.value),t.value.querySelectorAll(`.tabs_tab`).forEach(e=>u.observe(e)))}function m(){f()}return i(()=>{f(),p();let e=t.value;e&&(e.addEventListener(`click`,m),e.addEventListener(`keydown`,m),e.addEventListener(`scroll`,m,{passive:!0}))}),s(()=>{let e=t.value;e&&(e.removeEventListener(`click`,m),e.removeEventListener(`keydown`,m),e.removeEventListener(`scroll`,m)),u?.disconnect()}),c([n,r,a],f),o&&c(o,()=>{f(),p()}),{indicatorStyle:l,updateIndicator:f}}var V=1;function ue({listRef:t,enabled:n,onTabsChange:r}){let a=C(!1),o=C(!1),l=C(!1),u=null;function d(){let e=t.value;if(!n.value||!e){a.value=!1,o.value=!1,l.value=!1;return}let{scrollLeft:r,scrollWidth:i,clientWidth:s}=e,c=i-s;l.value=c>V,a.value=r>V,o.value=r<c-V}function f(){e(()=>{requestAnimationFrame(d)})}function p(e){let n=t.value;if(!n)return;let r=Math.max(n.clientWidth*.75,120);n.scrollBy({left:e*r,behavior:`smooth`})}function m(){p(-1)}function h(){p(1)}function g(e){let r=t.value;if(!n.value||!r||!e)return;let i=r.getBoundingClientRect(),a=e.getBoundingClientRect(),o=a.left-i.left+r.scrollLeft+a.width/2,s=r.clientWidth/2,c=r.scrollWidth-r.clientWidth,l=o-s;r.scrollTo({left:Math.max(0,Math.min(l,c)),behavior:`smooth`})}function _(){let e=t.value;!n.value||!e||g(e.querySelector(`.tabs_tab[aria-selected="true"]`))}function v(n){let r=n.target.closest(`[role="tab"]`);!r||!t.value?.contains(r)||(f(),e(()=>{requestAnimationFrame(()=>g(r))}))}function ee(){f(),e(()=>{requestAnimationFrame(_)})}function y(){u?.disconnect();let e=t.value;e&&(u=new ResizeObserver(f),u.observe(e),e.querySelectorAll(`.tabs_tab`).forEach(e=>u.observe(e)))}return i(()=>{f(),y();let e=t.value;e&&(e.addEventListener(`scroll`,d,{passive:!0}),e.addEventListener(`click`,v),e.addEventListener(`keydown`,ee))}),s(()=>{let e=t.value;e&&(e.removeEventListener(`scroll`,d),e.removeEventListener(`click`,v),e.removeEventListener(`keydown`,ee)),u?.disconnect()}),c(n,f),r&&c(r,()=>{f(),y()}),{canScrollPrev:a,canScrollNext:o,hasOverflow:l,scrollPrev:m,scrollNext:h,scrollTabToCenter:g,scrollActiveTabIntoView:_,updateScrollState:f}}var H={class:`tabs_icon`},U={class:`tabs_label`},de=Object.assign({inheritAttrs:!1},{__name:`TabsTab`,props:{id:{type:String,required:!0},panelId:{type:String,required:!0},label:{type:String,required:!0},active:Boolean,disabled:Boolean,tabindex:{type:Number,default:-1},iconSlot:Function,badgeSlot:Function},emits:[`click`],setup(e,{emit:t}){let n=t;return(t,r)=>(l(),y(N,x({tag:`button`,role:`tab`,type:`button`,variant:`text`,fit:``,class:[`tabs_tab`,{"is-active":e.active,"is-disabled":e.disabled}],id:e.id,"aria-selected":e.active?`true`:`false`,"aria-controls":e.panelId,tabindex:e.tabindex,disabled:e.disabled,"aria-disabled":e.disabled||void 0},t.$attrs,{onClick:r[0]||=e=>n(`click`,e)}),h({default:m(()=>[v(`span`,U,ne(e.label),1)]),_:2},[e.iconSlot?{name:`icon-before`,fn:m(()=>[v(`span`,H,[(l(),y(o({render:e.iconSlot})))])]),key:`0`}:void 0,e.badgeSlot?{name:`icon-after`,fn:m(()=>[(l(),y(o({render:e.badgeSlot})))]),key:`1`}:void 0]),1040,[`class`,`id`,`aria-selected`,`aria-controls`,`tabindex`,`disabled`,`aria-disabled`]))}}),fe={class:`tabs_bar`},pe=[`aria-label`,`aria-orientation`],me={key:2,class:`tabs_extra`,"data-demo-slot":`extra`},he={class:`tabs_panels`,"data-demo-slot":`default`},ge=[`id`,`aria-labelledby`],_e=[`id`,`aria-labelledby`,`hidden`],W=Object.assign({inheritAttrs:!1},{__name:`Tabs`,props:{ripple:j,mode:{type:String,default:`panels`,validator:e=>[`panels`,`dynamic`].includes(e)},modelValue:{type:[String,Number],default:void 0},variant:{type:String,default:`line`,validator:e=>[`line`,`card`,`pill`].includes(e)},size:{type:String,default:`md`,validator:e=>[`sm`,`md`,`lg`].includes(e)},layout:{type:String,default:`auto`,validator:e=>[`auto`,`equal`,`scroll`].includes(e)},vertical:Boolean,scrollable:Boolean,ariaLabel:String,items:Array,indicator:{type:String,default:`static`,validator:e=>[`static`,`slide`].includes(e)}},emits:[`update:modelValue`],setup(e,{emit:r}){let i=new Set([`panels`,`dynamic`]),o=new Set([`line`,`card`,`pill`]),s=new Set([`sm`,`md`,`lg`]),h=new Set([`auto`,`equal`,`scroll`]),D=new Set([`static`,`slide`]),O=e,k=r,{rippleAttrs:A,childRippleAttrs:se}=ce(O,{mode:`container`});a();let j=d(),P=C(null),F=C(null),I=new Map,L=C([]),R=f().replace(/:/g,``),z=C(null),B=C(null),V=E(()=>i.has(O.mode)?O.mode:`panels`),H=E(()=>o.has(O.variant)?O.variant:`line`),U=E(()=>s.has(O.size)?O.size:`md`),W=E(()=>h.has(O.layout)?O.layout:`auto`),G=E(()=>D.has(O.indicator)?O.indicator:`static`);oe(()=>({...O,mode:V.value,variant:H.value,size:U.value,layout:W.value,indicator:G.value}),P,j);let K=E(()=>V.value===`dynamic`),q=E(()=>W.value===`scroll`&&!O.vertical),ve=E(()=>W.value===`equal`),ye=E(()=>O.scrollable&&W.value===`auto`),J=E(()=>!!O.items?.length),Y=E(()=>J.value&&!K.value),be=E(()=>J.value?O.items.length:L.value.length),xe=E(()=>{let e=[`tabs`,`tabs_${H.value}`];return U.value===`sm`&&e.push(`tabs_sm`),U.value===`lg`&&e.push(`tabs_lg`),O.vertical&&e.push(`tabs_vertical`),ve.value&&e.push(`tabs_equal`),q.value&&e.push(`tabs_scroll-nav`),ye.value&&e.push(`tabs_scrollable`),K.value&&e.push(`tabs_dynamic`),G.value===`slide`&&e.push(`tabs_indicator-slide`),j.class&&e.push(j.class),e}),{indicatorStyle:Se,updateIndicator:X}=le({listRef:F,enabled:E(()=>G.value===`slide`),vertical:g(O,`vertical`),variant:H,onTabsChange:()=>be.value}),{canScrollPrev:Ce,canScrollNext:we,hasOverflow:Te,scrollPrev:Ee,scrollNext:De,updateScrollState:Z}=ue({listRef:F,enabled:q,onTabsChange:()=>be.value}),Oe=E(()=>{let{class:e,...t}=j;return t});function Q(e,t){return e.key??e.value??t}function ke(e){(K.value||e.menuOnly)&&(e.panelId=R),I.set(e.id,e),L.value=[...I.values()]}function Ae(e){I.delete(e),L.value=[...I.values()]}function je(e){return K.value?(e.value??e.id)===z.value:T(e.isActive)}function Me(e,t){if(ee(e.isActive)){e.isActive.value=t;return}e.isActive=t}function Ne(e){z.value=e,k(`update:modelValue`,e),X(),Z()}function Pe(e){if(K.value){if(J.value){let t=$.value.find(t=>t.id===e);t&&!t.disabled&&Ne(t.key);return}let t=L.value.find(t=>t.id===e);t&&!t.disabled&&Ne(t.value??t.id);return}if(Y.value){let t=O.items.findIndex((t,n)=>`item-tab-${n}`===e),n=O.items[t];n&&!n.disabled&&(B.value=Q(n,t),X(),Z());return}L.value.forEach(t=>{t.disabled||Me(t,t.id===e)}),X(),Z()}u(`tabs`,{registerTab:ke,unregisterTab:Ae,selectTab:Pe}),c(()=>O.modelValue,e=>{K.value&&e!=null&&e!==``&&(z.value=e)}),te(()=>{if(K.value){if(O.modelValue!=null&&O.modelValue!==``){z.value=O.modelValue;return}if(J.value){let e=O.items.find((e,t)=>e.active);if(e){z.value=Q(e,O.items.indexOf(e));return}let t=O.items.find(e=>!e.disabled);t&&(z.value=Q(t,O.items.indexOf(t)));return}if(!L.value.length)return;let e=L.value.find(e=>e.active),t=L.value.find(e=>!e.disabled),n=e||t;n&&(z.value=n.value??n.id);return}if(Y.value){if(O.items.find((e,t)=>Q(e,t)===B.value&&!e.disabled))return;let e=O.items.find(e=>e.active&&!e.disabled),t=O.items.find(e=>!e.disabled)??O.items[0],n=e||t;n&&(B.value=Q(n,O.items.indexOf(n)));return}if(L.value.length&&!L.value.some(e=>je(e))){let e=L.value.find(e=>!e.disabled);e&&Me(e,!0)}});let $=E(()=>!K.value||!J.value?[]:O.items.map((e,t)=>{let n=Q(e,t);return{id:`item-tab-${t}`,key:n,panelId:R,label:e.label,disabled:e.disabled,isActive:z.value===n,raw:e}})),Fe=E(()=>{if(!K.value)return null;if(J.value)return $.value.find(e=>e.isActive)?.raw??null;let e=L.value.find(e=>(e.value??e.id)===z.value);return e?{key:e.value??e.id,label:e.label}:null}),Ie=E(()=>K.value?J.value?$.value.find(e=>e.isActive)?.id??``:L.value.find(e=>(e.value??e.id)===z.value)?.id??``:``),Le=E(()=>Y.value?O.items.map((e,t)=>{let n=Q(e,t);return{id:`item-tab-${t}`,panelId:`item-panel-${t}`,label:e.label,content:e.content,disabled:e.disabled,isActive:B.value===n}}):[]),Re=E(()=>K.value&&J.value?$.value.map(e=>({id:e.id,panelId:e.panelId,label:e.label,disabled:!!e.disabled,active:e.isActive,iconSlot:null,badgeSlot:null})):Y.value?Le.value.map(e=>({id:e.id,panelId:e.panelId,label:e.label,disabled:!!e.disabled,active:e.isActive,iconSlot:null,badgeSlot:null})):L.value.map(e=>({id:e.id,panelId:e.panelId,label:e.label,disabled:!!e.disabled,active:je(e),iconSlot:e.iconSlot??null,badgeSlot:e.badgeSlot??null})));function ze(e,t){let n=Re.value.filter(e=>!e.disabled);if(!n.length)return;let r=n.findIndex(e=>e.id===t);if(r===-1)return;let i=null;if(!O.vertical&&e.key===`ArrowRight`||O.vertical&&e.key===`ArrowDown`?i=(r+1)%n.length:!O.vertical&&e.key===`ArrowLeft`||O.vertical&&e.key===`ArrowUp`?i=(r-1+n.length)%n.length:e.key===`Home`?i=0:e.key===`End`&&(i=n.length-1),i==null)return;e.preventDefault();let a=n[i];Pe(a.id),[...F.value?.querySelectorAll(`[role="tab"]`)??[]].find(e=>e.id===a.id)?.focus()}return(r,i)=>(l(),S(`div`,x({ref_key:`rootRef`,ref:P,class:xe.value,"data-tabs":``},{...Oe.value,...T(A)}),[v(`div`,fe,[q.value&&T(Te)?(l(),y(N,{key:0,class:`tabs_nav tabs_nav_prev`,variant:`outline`,color:`default`,size:`sm`,"icon-only":``,ripple:!1,"aria-label":`이전 탭`,disabled:!T(Ce),onClick:T(Ee)},{"icon-before":m(()=>[_(M,{name:`chevron-left`,size:`sm`})]),_:1},8,[`disabled`,`onClick`])):w(``,!0),v(`div`,{class:re([`tabs_list-wrap`,{"tabs_scroll-viewport":q.value}])},[v(`div`,{ref_key:`listRef`,ref:F,class:`tabs_list`,role:`tablist`,"aria-label":e.ariaLabel,"aria-orientation":e.vertical?`vertical`:`horizontal`},[G.value===`slide`?p((l(),S(`span`,{key:0,class:`tabs_indicator`,"aria-hidden":`true`,style:n(T(Se))},null,4)),[[ae,T(Se)]]):w(``,!0),(l(!0),S(b,null,ie(Re.value,e=>(l(),y(de,x({key:e.id},{ref_for:!0},T(se),{id:e.id,"panel-id":e.panelId,label:e.label,active:e.active,disabled:e.disabled,tabindex:e.active?0:-1,"icon-slot":e.iconSlot,"badge-slot":e.badgeSlot,onClick:t=>Pe(e.id),onKeydown:t=>ze(t,e.id)}),null,16,[`id`,`panel-id`,`label`,`active`,`disabled`,`tabindex`,`icon-slot`,`badge-slot`,`onClick`,`onKeydown`]))),128)),t(r.$slots,`tabs`)],8,pe)],2),q.value&&T(Te)?(l(),y(N,{key:1,class:`tabs_nav tabs_nav_next`,variant:`outline`,color:`default`,size:`sm`,"icon-only":``,ripple:!1,"aria-label":`다음 탭`,disabled:!T(we),onClick:T(De)},{"icon-before":m(()=>[_(M,{name:`chevron-right`,size:`sm`})]),_:1},8,[`disabled`,`onClick`])):w(``,!0),r.$slots.extra?(l(),S(`div`,me,[t(r.$slots,`extra`)])):w(``,!0)]),v(`div`,he,[K.value?(l(),S(b,{key:0},[v(`div`,{id:T(R),class:`tabs_panel is-active`,role:`tabpanel`,"aria-labelledby":Ie.value},[t(r.$slots,`panel`,{item:Fe.value,value:z.value,active:!0})],8,ge),t(r.$slots,`default`)],64)):Y.value?(l(!0),S(b,{key:1},ie(Le.value,e=>(l(),S(`div`,{key:e.panelId,id:e.panelId,class:re([`tabs_panel`,{"is-active":e.isActive}]),role:`tabpanel`,"aria-labelledby":e.id,hidden:!e.isActive||void 0},[v(`p`,null,ne(e.content),1)],10,_e))),128)):t(r.$slots,`default`,{},void 0,void 0,2)])],16))}}),G=[{key:`name`,label:`Prop`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],K=[{name:`mode`,type:`'panels' | 'dynamic'`,default:`panels`,description:`panels: 탭별 패널 · dynamic: 단일 패널 콘텐츠 전환`},{name:`v-model / model-value`,type:`string | number`,default:`—`,description:`mode=dynamic 선택 탭 key`},{name:`variant`,type:`'line' | 'card' | 'pill'`,default:`line`,description:`tabs_line · tabs_card · tabs_pill`},{name:`indicator`,type:`'static' | 'slide'`,default:`static`,description:`line·pill 인디케이터. slide는 선택 탭으로 이동 애니메이션`},{name:`layout`,type:`'auto' | 'equal' | 'scroll'`,default:`auto`,description:`auto: 콘텐츠 너비 · equal: 100% 균등 분할 · scroll: 좌우 네비 스크롤`},{name:`size`,type:`'sm' | 'md' | 'lg'`,default:`md`,description:`tabs_sm · tabs_lg`},{name:`vertical`,type:`boolean`,default:`false`,description:`tabs_vertical`},{name:`scrollable`,type:`boolean`,default:`false`,description:`layout=auto일 때 가로 스크롤바 표시 (tabs_scrollable)`},{name:`aria-label`,type:`string`,default:`—`,description:`tablist aria-label. vertical에 따라 aria-orientation 자동 설정`},{name:`items`,type:`Array<{ key?, label, content?, active?, disabled? }>`,default:`—`,description:`선언적 탭. panels: content로 패널 생성 · dynamic: label만 사용`},F],q=G,ve=[{name:`label`,type:`string`,default:`—`,description:`탭 버튼 텍스트 (필수)`},{name:`active`,type:`boolean`,default:`false`,description:`초기 선택 탭`},{name:`disabled`,type:`boolean`,default:`false`,description:`is-disabled`}],ye=G,J=[{name:`label`,type:`string`,default:`—`,description:`탭 버튼 텍스트 (필수)`},{name:`value`,type:`string`,default:`—`,description:`mode=dynamic v-model key`},{name:`active`,type:`boolean`,default:`false`,description:`초기 선택 탭`},{name:`disabled`,type:`boolean`,default:`false`,description:`is-disabled`}],Y=[{key:`name`,label:`슬롯`},{key:`description`,label:`설명`}],be=[{name:`tabs`,description:`탭 바 추가 콘텐츠`},{name:`extra`,description:`탭 바 우측 영역 (tabs_extra)`},{name:`panel`,description:`mode=dynamic 단일 패널 본문 ({ item, value, active })`},{name:`default`,description:`TabPanel·TabMenu 나열 (items prop 대체)`}],xe=Y,Se=[{name:`default`,description:`패널 본문 (tabs_panel)`},{name:`icon`,description:`탭 버튼 아이콘`},{name:`badge`,description:`탭 버튼 배지`}],X=Y,Ce=[{name:`icon`,description:`탭 버튼 아이콘`},{name:`badge`,description:`탭 버튼 배지`}],we=[{key:`name`,label:`클래스`},{key:`description`,label:`설명`}],Te=[{name:`tabs · tabs_bar · tabs_list · tabs_tab`,description:`루트·탭 바·목록·탭 버튼`},{name:`tabs_label · tabs_extra · tabs_panels · tabs_panel`,description:`라벨·추가·패널 영역`},{name:`tabs_line · tabs_card · tabs_pill`,description:`스타일 변형`},{name:`tabs_indicator-slide`,description:`슬라이드 인디케이터 (indicator="slide")`},{name:`tabs_indicator`,description:`이동하는 인디케이터 요소`},{name:`tabs_equal · tabs_scroll-nav · tabs_dynamic`,description:`균등 분할·네비 스크롤·동적 패널`},{name:`tabs_list-wrap · tabs_scroll-viewport · tabs_nav`,description:`목록 래퍼·스크롤 뷰포트·좌우 네비 버튼`},{name:`tabs_sm · tabs_lg · tabs_vertical · tabs_scrollable`,description:`크기·레이아웃`},{name:`is-active · is-disabled`,description:`탭·패널 상태`},{name:`data-tabs`,description:`키보드·포커스 동작 식별자`},{name:`role="tablist" · role="tab" · role="tabpanel"`,description:`접근성`},...I],Ee=[{key:`name`,label:`토큰`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],De=[{name:`--tabs-gap · --tabs-padding`,default:`—`,description:`탭 간격·패딩`},{name:`--tabs-nav-size`,default:`—`,description:`네비 스크롤 버튼 크기`},{name:`--tabs-indicator-height · --tabs-indicator-transition`,default:`—`,description:`line 변형 인디케이터·슬라이드 전환`},{name:`--tabs-panel-padding`,default:`—`,description:`패널 패딩`}],Z={key:0},Oe={key:1},Q={key:2},ke={key:0},Ae={key:1},je={key:2},Me={title:`Tabs | UXKM Guide`,activeNav:`tabs`,pageTitle:`Tabs`},Ne={__name:`tabs`,setup(e){let t=[{key:`overview`,label:`개요`,active:!0},{key:`team`,label:`팀`},{key:`activity`,label:`활동`}];return(e,n)=>(l(),S(b,null,[n[61]||=v(`div`,{class:`page_intro`},[v(`h1`,null,`Tabs`),v(`p`,{class:`lead`},`같은 맥락의 콘텐츠를 탭으로 전환하는 컴포넌트입니다. 라인·카드·필 스킨, 균등 분할·네비 스크롤 레이아웃, 아이콘·배지를 지원합니다.`)],-1),_(P,{"heading-id":`basic-heading`,title:`기본 (라인)`,description:`tabs_line이 기본 스킨입니다. role="tablist" · role="tab" · role="tabpanel"과 aria-selected, aria-controls로 접근성을 보장하며 방향키·Home·End 키로 탭을 전환합니다.`,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{"aria-label":`프로젝트 정보`},{default:m(()=>[_(B,{label:`개요`,active:``},{default:m(()=>[...n[0]||=[v(`p`,null,`프로젝트 개요와 목표를 설명하는 영역입니다. 탭을 클릭하거나 화살표 키로 전환할 수 있습니다.`,-1)]]),_:1}),_(B,{label:`팀`},{default:m(()=>[...n[1]||=[v(`p`,null,`팀 구성원과 역할을 표시합니다.`,-1)]]),_:1}),_(B,{label:`활동`},{default:m(()=>[...n[2]||=[v(`p`,null,`최근 활동 로그와 타임라인을 보여줍니다.`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`dynamic-heading`,title:`동적 패널`,description:`mode="dynamic"은 탭 메뉴만 나열하고 패널은 하나입니다. 탭 클릭 시 #panel 슬롯 내용이 전환됩니다.`,stack:``,code:`<script setup>
import TabMenu from '@/components/TabMenu.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{mode:`dynamic`,items:t,"aria-label":`동적 탭 (items)`},{panel:m(({item:e})=>[e?.key===`overview`?(l(),S(`p`,Z,`프로젝트 개요와 목표를 설명하는 영역입니다.`)):e?.key===`team`?(l(),S(`p`,Oe,`팀 구성원과 역할을 표시합니다.`)):e?.key===`activity`?(l(),S(`p`,Q,`최근 활동 로그와 타임라인을 보여줍니다.`)):w(``,!0)]),_:1}),_(W,{mode:`dynamic`,"aria-label":`동적 탭 (TabMenu)`},{panel:m(({value:e})=>[e===`overview`?(l(),S(`p`,ke,`TabMenu로 선언한 동적 패널 — 개요`)):e===`team`?(l(),S(`p`,Ae,`TabMenu로 선언한 동적 패널 — 팀`)):(l(),S(`p`,je,`TabMenu로 선언한 동적 패널 — 활동`))]),default:m(()=>[_(R,{label:`개요`,value:`overview`,active:``}),_(R,{label:`팀`,value:`team`}),_(R,{label:`활동`,value:`activity`})]),_:1})]),_:1}),_(P,{"heading-id":`indicator-slide-heading`,title:`슬라이드 인디케이터`,description:`indicator="slide"로 선택 탭 아래(또는 pill 배경) 인디케이터가 부드럽게 이동합니다. line·pill 스킨과 조합합니다.`,stack:``,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{indicator:`slide`,"aria-label":`슬라이드 라인 탭`},{default:m(()=>[_(B,{label:`개요`,active:``},{default:m(()=>[...n[3]||=[v(`p`,null,`라인 스킨에서 하단 인디케이터가 탭 전환 시 슬라이드됩니다.`,-1)]]),_:1}),_(B,{label:`팀`},{default:m(()=>[...n[4]||=[v(`p`,null,`팀 구성원과 역할을 표시합니다.`,-1)]]),_:1}),_(B,{label:`활동`},{default:m(()=>[...n[5]||=[v(`p`,null,`최근 활동 로그와 타임라인을 보여줍니다.`,-1)]]),_:1})]),_:1}),_(W,{variant:`pill`,indicator:`slide`,"aria-label":`슬라이드 필 탭`},{default:m(()=>[_(B,{label:`목록`,active:``},{default:m(()=>[...n[6]||=[v(`p`,{class:`tabs_panel-placeholder`},`필 스킨에서 배경 인디케이터가 이동합니다.`,-1)]]),_:1}),_(B,{label:`그리드`},{default:m(()=>[...n[7]||=[v(`p`,{class:`tabs_panel-placeholder`},`그리드 뷰 콘텐츠`,-1)]]),_:1}),_(B,{label:`보드`},{default:m(()=>[...n[8]||=[v(`p`,{class:`tabs_panel-placeholder`},`보드 뷰 콘텐츠`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`layout-equal-heading`,title:`균등 분할`,description:`layout="equal"로 탭 바 전체 너비에 탭을 균등 분할합니다. 라벨이 길면 말줄임됩니다.`,stack:``,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{layout:`equal`,"aria-label":`균등 분할 탭`},{default:m(()=>[_(B,{label:`개요`,active:``},{default:m(()=>[...n[9]||=[v(`p`,null,`탭이 컨테이너 너비에 맞춰 균등하게 배치됩니다.`,-1)]]),_:1}),_(B,{label:`팀 구성`},{default:m(()=>[...n[10]||=[v(`p`,null,`팀 구성원과 역할을 표시합니다.`,-1)]]),_:1}),_(B,{label:`활동 로그`},{default:m(()=>[...n[11]||=[v(`p`,null,`최근 활동 로그와 타임라인을 보여줍니다.`,-1)]]),_:1}),_(B,{label:`설정`},{default:m(()=>[...n[12]||=[v(`p`,null,`프로젝트 설정을 관리합니다.`,-1)]]),_:1})]),_:1}),_(W,{layout:`equal`,variant:`pill`,indicator:`slide`,"aria-label":`균등 분할 필 탭`},{default:m(()=>[_(B,{label:`일간`,active:``},{default:m(()=>[...n[13]||=[D(`일간 통계`,-1)]]),_:1}),_(B,{label:`주간`},{default:m(()=>[...n[14]||=[D(`주간 통계`,-1)]]),_:1}),_(B,{label:`월간`},{default:m(()=>[...n[15]||=[D(`월간 통계`,-1)]]),_:1}),_(B,{label:`연간`},{default:m(()=>[...n[16]||=[D(`연간 통계`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`layout-scroll-heading`,title:`네비 스크롤`,description:`layout="scroll"은 탭이 넘칠 때 좌·우 버튼으로 스크롤합니다. 넘치지 않으면 버튼이 숨겨집니다.`,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{layout:`scroll`,class:`tabs_demo-narrow`,"aria-label":`네비 스크롤 탭`},{default:m(()=>[_(B,{label:`홈`,active:``},{default:m(()=>[...n[17]||=[D(`홈 패널`,-1)]]),_:1}),_(B,{label:`제품 소개`},{default:m(()=>[...n[18]||=[D(`제품 패널`,-1)]]),_:1}),_(B,{label:`솔루션`},{default:m(()=>[...n[19]||=[D(`솔루션 패널`,-1)]]),_:1}),_(B,{label:`가격 정책`},{default:m(()=>[...n[20]||=[D(`가격 패널`,-1)]]),_:1}),_(B,{label:`고객 사례`},{default:m(()=>[...n[21]||=[D(`고객 사례 패널`,-1)]]),_:1}),_(B,{label:`리소스 센터`},{default:m(()=>[...n[22]||=[D(`리소스 패널`,-1)]]),_:1}),_(B,{label:`기술 지원`},{default:m(()=>[...n[23]||=[D(`지원 패널`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`card-heading`,title:`카드`,description:`tabs_card로 카드형 탭과 패널을 연결합니다. 폼·설정 화면에 적합합니다.`,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{variant:`card`,"aria-label":`계정 설정`},{default:m(()=>[_(B,{label:`프로필`,active:``},{default:m(()=>[...n[24]||=[v(`p`,null,`이름, 아바타, 소개 문구를 수정합니다.`,-1)]]),_:1}),_(B,{label:`보안`},{default:m(()=>[...n[25]||=[v(`p`,null,`비밀번호 변경과 2단계 인증을 설정합니다.`,-1)]]),_:1}),_(B,{label:`알림`},{default:m(()=>[...n[26]||=[v(`p`,null,`이메일·푸시 알림 수신 여부를 관리합니다.`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`pill-heading`,title:`필`,description:`tabs_pill로 세그먼트 컨트롤 형태의 탭을 만듭니다. 뷰 전환·필터에 사용합니다.`,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{variant:`pill`,"aria-label":`보기 모드`},{default:m(()=>[_(B,{label:`목록`,active:``},{default:m(()=>[...n[27]||=[v(`p`,{class:`tabs_panel-placeholder`},`목록 뷰 콘텐츠`,-1)]]),_:1}),_(B,{label:`그리드`},{default:m(()=>[...n[28]||=[v(`p`,{class:`tabs_panel-placeholder`},`그리드 뷰 콘텐츠`,-1)]]),_:1}),_(B,{label:`보드`},{default:m(()=>[...n[29]||=[v(`p`,{class:`tabs_panel-placeholder`},`보드 뷰 콘텐츠`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`size-heading`,title:`크기`,description:`tabs_sm · tabs_lg로 탭 바 스케일을 조절합니다.`,stack:``,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{size:`sm`,"aria-label":`Small 탭`},{default:m(()=>[_(B,{label:`Small A`,active:``},{default:m(()=>[...n[30]||=[D(`Small 탭 패널`,-1)]]),_:1}),_(B,{label:`Small B`},{default:m(()=>[...n[31]||=[D(`Small 탭 패널 B`,-1)]]),_:1})]),_:1}),_(W,{size:`lg`,"aria-label":`Large 탭`},{default:m(()=>[_(B,{label:`Large A`,active:``},{default:m(()=>[...n[32]||=[D(`Large 탭 패널`,-1)]]),_:1}),_(B,{label:`Large B`},{default:m(()=>[...n[33]||=[D(`Large 탭 패널 B`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`icon-heading`,title:`아이콘`,description:`tabs_icon으로 탭 앞에 아이콘을 배치합니다.`,code:`<script setup>
import Icon from '@/components/Icon.vue';
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{"aria-label":`대시보드 섹션`},{default:m(()=>[_(B,{label:`대시보드`,active:``},{icon:m(()=>[_(M,{name:`grid`})]),default:m(()=>[n[34]||=D(` 대시보드 요약 패널 `,-1)]),_:1}),_(B,{label:`사용자`},{icon:m(()=>[_(M,{name:`user`})]),default:m(()=>[n[35]||=D(` 사용자 목록 패널 `,-1)]),_:1}),_(B,{label:`문서`},{icon:m(()=>[_(M,{name:`book`})]),default:m(()=>[n[36]||=D(` 문서 목록 패널 `,-1)]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`badge-heading`,title:`배지`,description:`tabs_badge에 badge 컴포넌트를 넣어 알림 수·상태를 표시합니다.`,code:`<script setup>
import Badge from '@/components/Badge.vue';
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{"aria-label":`알림 센터`},{default:m(()=>[_(B,{label:`전체`,active:``},{default:m(()=>[...n[37]||=[D(`전체 알림 목록`,-1)]]),_:1}),_(B,{label:`읽지 않음`},{badge:m(()=>[_(L,{class:`tabs_badge`,count:``,size:`sm`,color:`danger`,"aria-label":`읽지 않은 알림 12건`},{default:m(()=>[...n[38]||=[D(`12`,-1)]]),_:1})]),default:m(()=>[n[39]||=D(` 읽지 않은 알림 12건 `,-1)]),_:1}),_(B,{label:`멘션`},{badge:m(()=>[_(L,{class:`tabs_badge`,count:``,size:`sm`,color:`primary`},{default:m(()=>[...n[40]||=[D(`3`,-1)]]),_:1})]),default:m(()=>[n[41]||=D(` 멘션 알림 3건 `,-1)]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`extra-heading`,title:`추가 액션`,description:`tabs_extra로 탭 바 오른쪽에 버튼·링크 등 보조 액션을 배치합니다.`,code:`<script setup>
import Button from '@/components/Button.vue';
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{"aria-label":`파일 관리`},{extra:m(()=>[_(N,{variant:`filled`,color:`primary`,size:`sm`,label:`업로드`})]),default:m(()=>[_(B,{label:`내 파일`,active:``},{default:m(()=>[...n[42]||=[D(`내 파일 목록`,-1)]]),_:1}),_(B,{label:`공유됨`},{default:m(()=>[...n[43]||=[D(`공유된 파일 목록`,-1)]]),_:1}),_(B,{label:`최근`},{default:m(()=>[...n[44]||=[D(`최근 파일 목록`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`scroll-heading`,title:`스크롤바`,description:`scrollable과 layout="auto"를 함께 쓰면 스크롤바가 표시됩니다. 버튼 네비게이션은 layout="scroll"을 사용하세요.`,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{scrollable:``,class:`tabs_demo-narrow`,"aria-label":`긴 탭 목록`},{default:m(()=>[_(B,{label:`홈`,active:``},{default:m(()=>[...n[45]||=[D(`홈 패널`,-1)]]),_:1}),_(B,{label:`제품`},{default:m(()=>[...n[46]||=[D(`제품 패널`,-1)]]),_:1}),_(B,{label:`솔루션`},{default:m(()=>[...n[47]||=[D(`솔루션 패널`,-1)]]),_:1}),_(B,{label:`가격`},{default:m(()=>[...n[48]||=[D(`가격 패널`,-1)]]),_:1}),_(B,{label:`고객 사례`},{default:m(()=>[...n[49]||=[D(`고객 사례 패널`,-1)]]),_:1}),_(B,{label:`리소스`},{default:m(()=>[...n[50]||=[D(`리소스 패널`,-1)]]),_:1}),_(B,{label:`지원`},{default:m(()=>[...n[51]||=[D(`지원 패널`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`disabled-heading`,title:`비활성`,description:`disabled 속성 또는 is-disabled 클래스로 탭을 비활성화합니다.`,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
<\/script>

<template>
  <Tabs aria-label="권한별 탭">
    <TabPanel label="공개" active>공개 콘텐츠</TabPanel>
    <TabPanel label="팀">팀 전용 콘텐츠</TabPanel>
    <TabPanel label="관리자" disabled>관리자 전용 콘텐츠</TabPanel>
  </Tabs>
</template>`},{default:m(()=>[_(W,{"aria-label":`권한별 탭`},{default:m(()=>[_(B,{label:`공개`,active:``},{default:m(()=>[...n[52]||=[D(`공개 콘텐츠`,-1)]]),_:1}),_(B,{label:`팀`},{default:m(()=>[...n[53]||=[D(`팀 전용 콘텐츠`,-1)]]),_:1}),_(B,{label:`관리자`,disabled:``},{default:m(()=>[...n[54]||=[D(`관리자 전용 콘텐츠`,-1)]]),_:1})]),_:1})]),_:1}),_(P,{"heading-id":`vertical-heading`,title:`수직`,description:`tabs_vertical로 사이드바 형태의 탭을 구성합니다. 라인·카드 스킨과 조합할 수 있습니다.`,stack:``,code:`<script setup>
import TabPanel from '@/components/TabPanel.vue';
import Tabs from '@/components/Tabs.vue';
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
</template>`},{default:m(()=>[_(W,{vertical:``,"aria-label":`수직 라인 탭`},{default:m(()=>[_(B,{label:`일반`,active:``},{default:m(()=>[...n[55]||=[v(`p`,null,`일반 설정 패널입니다.`,-1)]]),_:1}),_(B,{label:`보안`},{default:m(()=>[...n[56]||=[v(`p`,null,`보안 설정 패널입니다.`,-1)]]),_:1}),_(B,{label:`결제`},{default:m(()=>[...n[57]||=[v(`p`,null,`결제 설정 패널입니다.`,-1)]]),_:1})]),_:1}),_(W,{vertical:``,variant:`card`,"aria-label":`수직 카드 탭`},{default:m(()=>[_(B,{label:`문서`,active:``},{default:m(()=>[...n[58]||=[D(`문서 관리 패널`,-1)]]),_:1}),_(B,{label:`미디어`},{default:m(()=>[...n[59]||=[D(`미디어 관리 패널`,-1)]]),_:1}),_(B,{label:`아카이브`},{default:m(()=>[...n[60]||=[D(`아카이브 패널`,-1)]]),_:1})]),_:1})]),_:1}),_(k,{"heading-id":`api-props-heading`,title:`API · Tabs Props`},{default:m(()=>[_(A,{columns:T(G),rows:T(K),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),_(k,{"heading-id":`api-panel-props-heading`,title:`API · TabPanel Props`},{default:m(()=>[_(A,{columns:T(q),rows:T(ve),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),_(k,{"heading-id":`api-menu-props-heading`,title:`API · TabMenu Props`},{default:m(()=>[_(A,{columns:T(ye),rows:T(J),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),_(k,{"heading-id":`api-slots-heading`,title:`API · Tabs Slots`},{default:m(()=>[_(A,{columns:T(Y),rows:T(be),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),_(k,{"heading-id":`api-panel-slots-heading`,title:`API · TabPanel Slots`},{default:m(()=>[_(A,{columns:T(xe),rows:T(Se),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),_(k,{"heading-id":`api-menu-slots-heading`,title:`API · TabMenu Slots`},{default:m(()=>[_(A,{columns:T(X),rows:T(Ce),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),_(k,{"heading-id":`api-classes-heading`,title:`클래스 · 속성`,description:`Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다.`},{default:m(()=>[_(A,{columns:T(we),rows:T(Te),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1}),_(k,{"heading-id":`tokens-heading`,title:`디자인 토큰`},{default:m(()=>[_(A,{columns:T(Ee),rows:T(De),"code-column":`name`},null,8,[`columns`,`rows`])]),_:1})],64))}};export{Ne as default,Me as docMeta};