import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{C as n,F as r,S as i,T as a,_ as o,a as s,h as c,i as l,m as u,o as d,w as f}from"./iframe-BkSPibU3.js";import{t as p}from"./jsx-runtime-DeHZSEgm.js";import{n as m,t as h}from"./Button-Bdofg9ij.js";import{r as g,t as _}from"./Icon-CS3T14bP.js";import{n as v,t as ee}from"./Link-BNuNoDLM.js";import{t as te}from"./react-dom-D4-uzfxT.js";import{n as y,t as ne}from"./Textarea-CMyUi2p6.js";function re(e=typeof document>`u`?null:document,t=typeof window>`u`?null:window){if(!e)return null;let n=e;try{t?.top?.document?.body&&(n=t.top.document)}catch{}if(n!==e){let e=new URL(`styles/uxkm.css`,n.baseURI);e.searchParams.set(`v`,`popover-20260819`);let t=n.getElementById(`uxkm-popover-portal-styles`);t||(t=n.createElement(`link`),t.id=`uxkm-popover-portal-styles`,t.rel=`stylesheet`,n.head.appendChild(t)),t.href!==e.href&&(t.href=e.href)}let r=`uxkm-popover-portal-root-${w}`,i=n.getElementById(r);return i||(i=n.createElement(`div`),i.id=r,i.className=`uxkm-popover-portal-root`,n.body.appendChild(i)),i.dataset.theme=e.documentElement.dataset.theme||`light`,i}function ie(e){return!e?.matches||e.matches(T)?e:e.querySelector(T)||e}function ae(e,t=window){let n=e.getBoundingClientRect();try{if(e.ownerDocument===t.top?.document)return n;let r=t.frameElement?.getBoundingClientRect();if(r)return{top:r.top+n.top,left:r.left+n.left,width:n.width,height:n.height}}catch{}return n}function b({id:e,placement:t=`bottom`,size:n=`md`,offset:r=`md`,open:i,defaultOpen:a=!1,offsetTop:o,offsetRight:s,offsetBottom:c,offsetLeft:l,trigger:u=`click`,triggerContent:d,title:f,panelLabel:p,footer:m,children:g=`Popover`,noArrow:v=!1,closable:ee,disabled:te=!1,className:y=``,onOpenChange:ne,closeLabel:b=`닫기`,panelAlign:w=`start`,arrowAnchor:T=`content`,arrowTargetAlign:E=`center`,...ce}){let D=(0,x.useId)().replace(/:/g,``),O=e||`popover-${D}`,k=`${O}-title`,A=(0,x.useRef)(null),j=(0,x.useRef)(null),M=(0,x.useRef)(null),[N,P]=(0,x.useState)(a),[F,I]=(0,x.useState)(null),[L,R]=(0,x.useState)(null),z=i??N,B=C.includes(t)?t:`bottom`,V=se.includes(n)?n:`md`,H=z?re():null,U=ee??u===`click`,W=(e,t,n)=>{te||(i===void 0&&P(e),ne?.(e,t,n))},G=(e,t)=>{J(),W(!0,e,t)},K=()=>{M.current&&clearTimeout(M.current),M.current=null},q=e=>{K(),M.current=setTimeout(()=>W(!1,`hover`,e),100)},J=()=>{let e=ie(A.current);e&&I(ae(e))};(0,x.useEffect)(()=>{if(!z)return;J();let e=H?.ownerDocument||document,t=e=>{!A.current?.contains(e.target)&&!j.current?.contains(e.target)&&W(!1,`outside`,e)},n=e=>{e.key===`Escape`&&W(!1,`escape`,e)};return e.addEventListener(`pointerdown`,t),document.addEventListener(`pointerdown`,t),e.addEventListener(`keydown`,n),window.addEventListener(`resize`,J),window.addEventListener(`scroll`,J,!0),()=>{e.removeEventListener(`pointerdown`,t),document.removeEventListener(`pointerdown`,t),e.removeEventListener(`keydown`,n),window.removeEventListener(`resize`,J),window.removeEventListener(`scroll`,J,!0)}},[z,H]),(0,x.useEffect)(()=>()=>K(),[]),(0,x.useEffect)(()=>{if(!z||!F||!j.current||![`target`,`mixed`].includes(T))return;let e=j.current.getBoundingClientRect(),t=E===`left`?0:E===`right`?1:.5,n=[`left`,`right`].includes(B)?F.top+F.height*t-e.top:F.left+F.width*t-e.left;R(`${n}px`)},[F,T,E,w,B,z]);let Y=[[`top`,o],[`right`,s],[`bottom`,c],[`left`,l]].filter(([,e])=>e&&e!==`md`).map(([e,t])=>`popover_offset-${e}-${t}`),X=(0,x.useMemo)(()=>[`popover`,`popover_portal`,`is-open`,V!==`md`&&`popover_${V}`,`popover_placement-${B}`,r!==`md`&&`popover_offset-${r}`,...Y,w!==`start`&&`popover_panel-align-${w}`,T!==`content`&&`popover_arrow-anchor-${T}`,v&&`popover_no-arrow`,y].filter(Boolean).join(` `),[T,y,v,r,o,s,c,l,w,B,V]),Z=L||`${(F?.width||0)/2}px`,Q=(0,x.isValidElement)(d)?(0,x.cloneElement)(d,{"aria-expanded":z,"aria-haspopup":`dialog`}):d,$=z&&H&&F?(0,oe.createPortal)((0,S.jsx)(`div`,{className:X,"data-arrow-target-align":E===`center`?void 0:E,"data-theme":document.documentElement.dataset.theme||`light`,style:{position:`fixed`,top:F.top,left:F.left,width:F.width,height:F.height,zIndex:1e4,pointerEvents:`none`,"--popover-arrow-position":Z},children:(0,S.jsxs)(`div`,{...ce,ref:j,id:O,className:[`popover_panel`,U&&!f&&!p&&`popover_panel-closable`].filter(Boolean).join(` `),role:`dialog`,"aria-label":f?void 0:p,"aria-labelledby":f?k:void 0,style:{zIndex:10001,pointerEvents:`auto`},onMouseEnter:u===`hover`?K:void 0,onMouseLeave:u===`hover`?q:void 0,children:[(0,S.jsx)(`span`,{className:`popover_arrow`,"aria-hidden":`true`}),(f||p)&&(0,S.jsxs)(`div`,{className:`popover_header`,children:[(0,S.jsx)(`div`,{id:k,className:`popover_title`,children:f||p}),U&&(0,S.jsx)(h,{variant:`ghost`,iconOnly:!0,className:`popover_close`,ariaLabel:b,iconBefore:(0,S.jsx)(_,{name:`close`,size:`sm`}),onClick:e=>W(!1,`close`,e)})]}),U&&!f&&!p&&(0,S.jsx)(h,{variant:`ghost`,iconOnly:!0,className:`popover_close popover_close-floating`,ariaLabel:b,iconBefore:(0,S.jsx)(_,{name:`close`,size:`sm`}),onClick:e=>W(!1,`close`,e)}),(0,S.jsx)(`div`,{className:`popover_body`,children:g}),m&&(0,S.jsx)(`div`,{className:`popover_footer`,children:m})]})}),H):null;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`span`,{ref:A,className:`popover_trigger`,onClick:u===`click`?e=>z?W(!1,`trigger`,e):G(`trigger`,e):void 0,onMouseEnter:u===`hover`?e=>{K(),G(`hover`,e)}:void 0,onMouseLeave:u===`hover`?q:void 0,onFocus:u===`hover`?e=>G(`focus`,e):void 0,onBlur:u===`hover`?q:void 0,children:Q}),$]})}var x,oe,S,C,se,w,T;function E(){return(E=e((()=>{x=r(),oe=te(),m(),g(),S=p(),C=[`top`,`top-center`,`bottom`,`bottom-center`,`left`,`right`,`end`],se=[`sm`,`md`,`lg`],w=Math.random().toString(36).slice(2,10),T=`button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link`,b.__docgenInfo={description:``,methods:[],displayName:`Popover`,props:{placement:{defaultValue:{value:`'bottom'`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},offset:{defaultValue:{value:`'md'`,computed:!1},required:!1},defaultOpen:{defaultValue:{value:`false`,computed:!1},required:!1},trigger:{defaultValue:{value:`'click'`,computed:!1},required:!1},children:{defaultValue:{value:`'Popover'`,computed:!1},required:!1},noArrow:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1},closeLabel:{defaultValue:{value:`'닫기'`,computed:!1},required:!1},panelAlign:{defaultValue:{value:`'start'`,computed:!1},required:!1},arrowAnchor:{defaultValue:{value:`'content'`,computed:!1},required:!1},arrowTargetAlign:{defaultValue:{value:`'center'`,computed:!1},required:!1}}}})))()}var ce=t({ArrowAnchor:()=>Q,Basic:()=>z,Footer:()=>G,Form:()=>Y,Hover:()=>K,NoArrow:()=>$,NoLabel:()=>B,Offset:()=>U,Open:()=>V,Placement:()=>J,Playground:()=>R,Size:()=>H,Title:()=>W,Trigger:()=>q,__namedExportsOrder:()=>le,default:()=>L});function D({label:e=`Popover 열기`,initialOpen:t=!1,open:n,onOpenChange:r,triggerContent:i,footer:a,children:o,buttonProps:s,...c}){let[l,u]=(0,A.useState)(t),d=n??l,f=e=>{n===void 0&&u(e),r?.(e)},p=a?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(N,{variant:`ghost`,size:`sm`,label:a.cancel||`취소`,onClick:()=>f(!1)}),(0,j.jsx)(N,{variant:`filled`,color:a.color||`primary`,size:`sm`,label:a.confirm||`확인`,onClick:()=>f(!1)})]}):void 0;return(0,j.jsx)(M,{...c,open:d,onOpenChange:f,triggerContent:i??(0,j.jsx)(N,{className:`popover_trigger`,variant:`outline`,label:e,...s}),footer:p,children:o})}function O({args:e,updateArgs:t}){let n=k(e),r=c(n),i=e.open===!0,[a,o]=(0,A.useState)(i);(0,A.useEffect)(()=>{o(i)},[i]),(0,A.useEffect)(()=>{o(!0),t?.({open:!0})},[r]);let s=e=>{o(e),t?.({open:e})};return(0,j.jsx)(D,{...n,open:a,onOpenChange:s,children:(0,j.jsx)(`p`,{children:`Controls에서 위치, 크기, offset, 화살표 옵션을 조절해 보세요.`})},r)}function k(e){return{placement:e.placement,size:e.size,trigger:e.trigger,panelLabel:typeof e.panelLabel==`string`?e.panelLabel:void 0,title:typeof e.title==`string`&&e.title?e.title:void 0,offset:e.offset,offsetTop:e.offsetTop,offsetRight:e.offsetRight,offsetBottom:e.offsetBottom,offsetLeft:e.offsetLeft,arrowAnchor:e.arrowAnchor,panelAlign:e.panelAlign,arrowTargetAlign:e.arrowTargetAlign,noArrow:e.noArrow===!0,closable:typeof e.closable==`boolean`?e.closable:void 0,disabled:e.disabled===!0}}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,le;function ue(){return(ue=e((()=>{A=r(),E(),m(),v(),g(),y(),o(),j=p(),M=b,N=h,P=ee,F=_,I=ne,L={title:`피드백/Popover`,component:M,decorators:[e=>(0,j.jsx)(`div`,{className:`popover-story-demo`,children:(0,j.jsx)(e,{})})],parameters:{layout:`padded`,controls:{include:[`open`,`placement`,`size`,`trigger`,`panelLabel`,`title`,`offset`,`offsetTop`,`offsetRight`,`offsetBottom`,`offsetLeft`,`arrowAnchor`,`panelAlign`,`arrowTargetAlign`,`noArrow`,`closable`,`disabled`]},docs:{extractArgTypes:()=>({})}},args:{open:!0,placement:`bottom`,size:`md`,trigger:`click`,panelLabel:`Popover Playground`,title:``,offset:`md`,arrowAnchor:`content`,panelAlign:`start`,arrowTargetAlign:`center`,noArrow:!1,closable:!0,disabled:!1},argTypes:{...u,placement:{control:`select`,options:[`top`,`top-center`,`bottom`,`bottom-center`,`left`,`right`,`end`],type:`string`},size:{control:`select`,options:[`sm`,`md`,`lg`],type:`string`},trigger:{control:`select`,options:[`click`,`hover`],type:`string`},open:d,panelLabel:a,title:a,offset:i,offsetTop:n,offsetRight:n,offsetBottom:n,offsetLeft:n,arrowAnchor:l,panelAlign:f,arrowTargetAlign:s,noArrow:d,closable:d,disabled:d}},R={name:`Playground`,render:(e,{updateArgs:t})=>(0,j.jsx)(O,{args:e,updateArgs:t})},z={name:`기본`,render:()=>(0,j.jsx)(D,{panelLabel:`안내`,children:(0,j.jsx)(`p`,{children:`트리거를 클릭하면 이 패널이 표시됩니다.`})})},B={name:`라벨 없음`,render:()=>(0,j.jsx)(D,{label:`라벨 없음`,children:(0,j.jsx)(`p`,{children:`짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.`})})},V={name:`열린 상태`,render:()=>(0,j.jsx)(D,{initialOpen:!0,panelLabel:`열린 Popover`,label:`열림`,buttonProps:{variant:`filled`,color:`primary`},children:(0,j.jsx)(`p`,{children:`정적 데모용 열린 상태입니다.`})})},H={name:`크기`,render:()=>(0,j.jsxs)(`div`,{className:`popover_row`,style:{alignItems:`flex-start`},children:[(0,j.jsx)(D,{size:`sm`,panelLabel:`작은 Popover`,label:`Small`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`작은 패널입니다. 짧은 안내에 적합합니다.`})}),(0,j.jsx)(D,{panelLabel:`기본 Popover`,label:`Medium`,children:(0,j.jsx)(`p`,{children:`기본 크기 패널입니다.`})}),(0,j.jsx)(D,{size:`lg`,panelLabel:`큰 Popover`,label:`Large`,buttonProps:{size:`lg`},children:(0,j.jsx)(`p`,{children:`큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.`})})]})},U={name:`간격`,render:()=>(0,j.jsxs)(`div`,{className:`popover_demo-stage`,children:[(0,j.jsx)(`p`,{className:`form_field-hint`,children:`전 방향 동일`}),(0,j.jsxs)(`div`,{className:`popover_row`,children:[(0,j.jsx)(D,{offset:`none`,panelLabel:`none`,label:`none`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`간격 없음`})}),(0,j.jsx)(D,{offset:`sm`,panelLabel:`sm`,label:`sm`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`좁은 간격`})}),(0,j.jsx)(D,{panelLabel:`md`,label:`md`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`기본 간격`})}),(0,j.jsx)(D,{offset:`lg`,panelLabel:`lg`,label:`lg`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`넓은 간격`})})]}),(0,j.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`방향별 (offset-* · placement)`}),(0,j.jsxs)(`div`,{className:`popover_demo-placement`,style:{minHeight:`12rem`,padding:0},children:[(0,j.jsx)(`div`,{className:`popover_demo-placement-cell-top`,children:(0,j.jsx)(D,{placement:`top-center`,offsetTop:`lg`,panelLabel:`offset-top lg`,label:`위`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`위쪽 간격`})})}),(0,j.jsx)(`div`,{className:`popover_demo-placement-cell-left`,children:(0,j.jsx)(D,{placement:`left`,offsetLeft:`lg`,panelLabel:`offset-left lg`,label:`왼쪽`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`왼쪽 간격`})})}),(0,j.jsx)(`div`,{className:`popover_demo-placement-cell-center`,children:(0,j.jsx)(D,{offsetBottom:`lg`,panelLabel:`offset-bottom lg`,label:`아래`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`아래쪽 간격`})})}),(0,j.jsx)(`div`,{className:`popover_demo-placement-cell-right`,children:(0,j.jsx)(D,{placement:`right`,offsetRight:`lg`,panelLabel:`offset-right lg`,label:`오른쪽`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`오른쪽 간격`})})})]})]})},W={name:`제목`,render:()=>(0,j.jsx)(D,{title:`배송 안내`,label:`도움말`,buttonProps:{variant:`ghost`},children:(0,j.jsx)(`p`,{children:`평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.`})})},G={name:`푸터`,render:()=>(0,j.jsx)(D,{title:`항목 삭제`,label:`삭제 확인`,footer:{cancel:`취소`,confirm:`삭제`,color:`danger`},children:(0,j.jsx)(`p`,{children:`이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?`})})},K={name:`호버 트리거`,render:()=>(0,j.jsxs)(`p`,{children:[`결제 시`,` `,(0,j.jsx)(D,{trigger:`hover`,closable:!1,panelLabel:`에스크로 설명`,triggerContent:(0,j.jsx)(P,{className:`popover_trigger`,label:`에스크로`}),children:`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`}),` `,`서비스를 이용할 수 있습니다.`]})},q={name:`트리거 유형`,render:()=>(0,j.jsxs)(`div`,{className:`popover_row`,children:[(0,j.jsx)(D,{panelLabel:`Button 트리거`,label:`Button`,buttonProps:{variant:`filled`,color:`primary`},children:(0,j.jsx)(`p`,{children:`버튼 트리거 예시입니다.`})}),(0,j.jsx)(D,{panelLabel:`Link 트리거`,triggerContent:(0,j.jsx)(P,{className:`popover_trigger`,label:`Link 트리거`}),children:(0,j.jsx)(`p`,{children:`링크 스타일 트리거입니다.`})}),(0,j.jsx)(D,{panelLabel:`추가 정보`,triggerContent:(0,j.jsx)(N,{className:`popover_trigger`,variant:`ghost`,iconOnly:!0,ariaLabel:`정보`,iconBefore:(0,j.jsx)(F,{name:`info`})}),children:(0,j.jsx)(`p`,{children:`아이콘 전용 트리거입니다.`})})]})},J={name:`배치`,render:()=>(0,j.jsxs)(`div`,{className:`popover_demo-stage`,children:[(0,j.jsxs)(`div`,{className:`popover_demo-placement`,children:[(0,j.jsx)(`div`,{className:`popover_demo-placement-cell-top`,children:(0,j.jsx)(D,{placement:`top-center`,panelLabel:`위쪽 가운데 배치`,label:`위`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`트리거 위 · 가운데`})})}),(0,j.jsx)(`div`,{className:`popover_demo-placement-cell-left`,children:(0,j.jsx)(D,{placement:`left`,panelLabel:`왼쪽 배치`,label:`왼쪽`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`트리거 왼쪽`})})}),(0,j.jsx)(`div`,{className:`popover_demo-placement-cell-center`,children:(0,j.jsx)(D,{placement:`bottom-center`,panelLabel:`아래쪽 가운데 배치`,label:`아래`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`트리거 아래 · 가운데`})})}),(0,j.jsx)(`div`,{className:`popover_demo-placement-cell-right`,children:(0,j.jsx)(D,{placement:`right`,panelLabel:`오른쪽 배치`,label:`오른쪽`,buttonProps:{size:`sm`},children:(0,j.jsx)(`p`,{children:`트리거 오른쪽`})})})]}),(0,j.jsxs)(`div`,{className:`popover_row`,style:{width:`100%`,justifyContent:`space-between`,marginTop:`var(--space-xl)`},children:[(0,j.jsx)(D,{placement:`top`,panelLabel:`위쪽 왼쪽 정렬`,label:`위 · 왼쪽 정렬`,buttonProps:{variant:`ghost`},children:(0,j.jsx)(`p`,{children:`패널 왼쪽 정렬`})}),(0,j.jsx)(D,{panelLabel:`아래쪽 왼쪽 정렬`,label:`아래 · 왼쪽 정렬`,buttonProps:{variant:`ghost`},children:(0,j.jsx)(`p`,{children:`기본 배치`})}),(0,j.jsx)(D,{placement:`end`,panelLabel:`오른쪽 정렬`,label:`아래 · 오른쪽 정렬`,buttonProps:{variant:`ghost`},children:(0,j.jsx)(`p`,{children:`패널 오른쪽 정렬`})})]})]})},Y={name:`폼`,render:()=>(0,j.jsx)(D,{title:`빠른 메모`,label:`메모 추가`,footer:{cancel:`취소`,confirm:`저장`},children:(0,j.jsxs)(`div`,{className:`form_field`,children:[(0,j.jsx)(`label`,{className:`form_label`,htmlFor:`popover-memo-input`,children:`내용`}),(0,j.jsx)(I,{id:`popover-memo-input`,rows:3,placeholder:`메모를 입력하세요`})]})})},X=({panelAlign:e=`start`,arrowTargetAlign:t=`center`,label:n,children:r,arrowAnchor:i=`mixed`})=>(0,j.jsx)(D,{arrowAnchor:i,panelAlign:e,arrowTargetAlign:t,panelLabel:n,label:`S`,buttonProps:{size:`sm`},children:r}),Z=()=>(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`mixed — 패널 왼쪽 · 화살표 조합`}),(0,j.jsxs)(`div`,{className:`popover_row`,children:[(0,j.jsx)(X,{panelAlign:`start`,arrowTargetAlign:`left`,label:`왼쪽 · ←`,children:(0,j.jsx)(`p`,{children:`패널 왼쪽 정렬, 화살표 왼쪽.`})}),(0,j.jsx)(X,{panelAlign:`start`,label:`왼쪽 · ●`,children:(0,j.jsx)(`p`,{children:`패널 왼쪽, 화살표 가운데.`})}),(0,j.jsx)(X,{panelAlign:`start`,arrowTargetAlign:`right`,label:`왼쪽 · →`,children:(0,j.jsx)(`p`,{children:`패널 왼쪽, 화살표 오른쪽.`})})]}),(0,j.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`mixed — 패널 오른쪽 · 화살표 조합`}),(0,j.jsxs)(`div`,{className:`popover_row`,children:[(0,j.jsx)(X,{panelAlign:`end`,arrowTargetAlign:`left`,label:`오른쪽 · ←`,children:(0,j.jsx)(`p`,{children:`패널 오른쪽 정렬, 화살표 왼쪽.`})}),(0,j.jsx)(X,{panelAlign:`end`,label:`오른쪽 · ●`,children:(0,j.jsx)(`p`,{children:`패널 오른쪽, 화살표 가운데.`})}),(0,j.jsx)(X,{panelAlign:`end`,arrowTargetAlign:`right`,label:`오른쪽 · →`,children:(0,j.jsx)(`p`,{children:`패널 오른쪽, 화살표 오른쪽.`})})]})]}),Q={name:`화살표 기준`,render:()=>(0,j.jsxs)(`div`,{className:`popover_demo-stage`,children:[(0,j.jsx)(`p`,{className:`form_field-hint`,children:`기준 비교`}),(0,j.jsxs)(`div`,{className:`popover_row`,children:[(0,j.jsx)(X,{arrowAnchor:`content`,label:`content`,children:(0,j.jsx)(`p`,{children:`패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.`})}),(0,j.jsx)(X,{arrowAnchor:`target`,label:`target`,children:(0,j.jsx)(`p`,{children:`패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.`})})]}),(0,j.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`target — 좌 · 가운데 · 우`}),(0,j.jsxs)(`div`,{className:`popover_row`,children:[(0,j.jsx)(X,{arrowAnchor:`target`,arrowTargetAlign:`left`,label:`left`,children:(0,j.jsx)(`p`,{children:`트리거 왼쪽을 가리킵니다.`})}),(0,j.jsx)(X,{arrowAnchor:`target`,label:`center`,children:(0,j.jsx)(`p`,{children:`트리거 가운데를 가리킵니다.`})}),(0,j.jsx)(X,{arrowAnchor:`target`,arrowTargetAlign:`right`,label:`right`,children:(0,j.jsx)(`p`,{children:`트리거 오른쪽을 가리킵니다.`})})]}),(0,j.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`mixed — 패널 가운데 · 화살표 조합`}),(0,j.jsxs)(`div`,{className:`popover_row`,children:[(0,j.jsx)(X,{panelAlign:`center`,arrowTargetAlign:`left`,label:`가운데 · ←`,children:(0,j.jsx)(`p`,{children:`패널 가운데, 화살표 트리거 왼쪽.`})}),(0,j.jsx)(X,{panelAlign:`center`,label:`가운데 · ●`,children:(0,j.jsx)(`p`,{children:`패널·화살표 모두 트리거 가운데.`})}),(0,j.jsx)(X,{panelAlign:`center`,arrowTargetAlign:`right`,label:`가운데 · →`,children:(0,j.jsx)(`p`,{children:`패널 가운데, 화살표 트리거 오른쪽.`})})]}),(0,j.jsx)(Z,{})]})},$={name:`화살표 없음`,render:()=>(0,j.jsx)(D,{noArrow:!0,panelLabel:`화살표 없는 Popover`,label:`화살표 없음`,buttonProps:{variant:`ghost`},children:(0,j.jsx)(`p`,{children:`화살표가 표시되지 않는 패널입니다.`})})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: (args, {
    updateArgs
  }) => <PopoverPlayground args={args} updateArgs={updateArgs} />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo panelLabel="안내">
      <p>트리거를 클릭하면 이 패널이 표시됩니다.</p>
    </Demo>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '라벨 없음',
  render: () => <Demo label="라벨 없음">
      <p>짧은 안내 문구만 필요할 때 사용합니다. 제목 행 없이 콘텐츠가 바로 표시됩니다.</p>
    </Demo>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '열린 상태',
  render: () => <Demo initialOpen panelLabel="열린 Popover" label="열림" buttonProps={{
    variant: 'filled',
    color: 'primary'
  }}>
      <p>정적 데모용 열린 상태입니다.</p>
    </Demo>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="popover_row" style={{
    alignItems: 'flex-start'
  }}>
      <Demo size="sm" panelLabel="작은 Popover" label="Small" buttonProps={{
      size: 'sm'
    }}>
        <p>작은 패널입니다. 짧은 안내에 적합합니다.</p>
      </Demo>
      <Demo panelLabel="기본 Popover" label="Medium">
        <p>기본 크기 패널입니다.</p>
      </Demo>
      <Demo size="lg" panelLabel="큰 Popover" label="Large" buttonProps={{
      size: 'lg'
    }}>
        <p>큰 패널입니다. 본문이 길거나 폼·목록을 담을 때 사용합니다.</p>
      </Demo>
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: '간격',
  render: () => <div className="popover_demo-stage">
      <p className="form_field-hint">전 방향 동일</p>
      <div className="popover_row">
        <Demo offset="none" panelLabel="none" label="none" buttonProps={{
        size: 'sm'
      }}>
          <p>간격 없음</p>
        </Demo>
        <Demo offset="sm" panelLabel="sm" label="sm" buttonProps={{
        size: 'sm'
      }}>
          <p>좁은 간격</p>
        </Demo>
        <Demo panelLabel="md" label="md" buttonProps={{
        size: 'sm'
      }}>
          <p>기본 간격</p>
        </Demo>
        <Demo offset="lg" panelLabel="lg" label="lg" buttonProps={{
        size: 'sm'
      }}>
          <p>넓은 간격</p>
        </Demo>
      </div>
      <p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>
        방향별 (offset-* · placement)
      </p>
      <div className="popover_demo-placement" style={{
      minHeight: '12rem',
      padding: 0
    }}>
        <div className="popover_demo-placement-cell-top">
          <Demo placement="top-center" offsetTop="lg" panelLabel="offset-top lg" label="위" buttonProps={{
          size: 'sm'
        }}>
            <p>위쪽 간격</p>
          </Demo>
        </div>
        <div className="popover_demo-placement-cell-left">
          <Demo placement="left" offsetLeft="lg" panelLabel="offset-left lg" label="왼쪽" buttonProps={{
          size: 'sm'
        }}>
            <p>왼쪽 간격</p>
          </Demo>
        </div>
        <div className="popover_demo-placement-cell-center">
          <Demo offsetBottom="lg" panelLabel="offset-bottom lg" label="아래" buttonProps={{
          size: 'sm'
        }}>
            <p>아래쪽 간격</p>
          </Demo>
        </div>
        <div className="popover_demo-placement-cell-right">
          <Demo placement="right" offsetRight="lg" panelLabel="offset-right lg" label="오른쪽" buttonProps={{
          size: 'sm'
        }}>
            <p>오른쪽 간격</p>
          </Demo>
        </div>
      </div>
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '제목',
  render: () => <Demo title="배송 안내" label="도움말" buttonProps={{
    variant: 'ghost'
  }}>
      <p>평일 오후 2시 이전 주문은 당일 출고됩니다. 제주·도서 산간 지역은 1~2일 추가 소요될 수 있습니다.</p>
    </Demo>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '푸터',
  render: () => <Demo title="항목 삭제" label="삭제 확인" footer={{
    cancel: '취소',
    confirm: '삭제',
    color: 'danger'
  }}>
      <p>이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?</p>
    </Demo>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: '호버 트리거',
  render: () => <p>
      결제 시{' '}
      <Demo trigger="hover" closable={false} panelLabel="에스크로 설명" triggerContent={<Link className="popover_trigger" label="에스크로" />}>
        구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.
      </Demo>{' '}
      서비스를 이용할 수 있습니다.
    </p>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '트리거 유형',
  render: () => <div className="popover_row">
      <Demo panelLabel="Button 트리거" label="Button" buttonProps={{
      variant: 'filled',
      color: 'primary'
    }}>
        <p>버튼 트리거 예시입니다.</p>
      </Demo>
      <Demo panelLabel="Link 트리거" triggerContent={<Link className="popover_trigger" label="Link 트리거" />}>
        <p>링크 스타일 트리거입니다.</p>
      </Demo>
      <Demo panelLabel="추가 정보" triggerContent={<Button className="popover_trigger" variant="ghost" iconOnly ariaLabel="정보" iconBefore={<Icon name="info" />} />}>
        <p>아이콘 전용 트리거입니다.</p>
      </Demo>
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '배치',
  render: () => <div className="popover_demo-stage">
      <div className="popover_demo-placement">
        <div className="popover_demo-placement-cell-top">
          <Demo placement="top-center" panelLabel="위쪽 가운데 배치" label="위" buttonProps={{
          size: 'sm'
        }}>
            <p>트리거 위 · 가운데</p>
          </Demo>
        </div>
        <div className="popover_demo-placement-cell-left">
          <Demo placement="left" panelLabel="왼쪽 배치" label="왼쪽" buttonProps={{
          size: 'sm'
        }}>
            <p>트리거 왼쪽</p>
          </Demo>
        </div>
        <div className="popover_demo-placement-cell-center">
          <Demo placement="bottom-center" panelLabel="아래쪽 가운데 배치" label="아래" buttonProps={{
          size: 'sm'
        }}>
            <p>트리거 아래 · 가운데</p>
          </Demo>
        </div>
        <div className="popover_demo-placement-cell-right">
          <Demo placement="right" panelLabel="오른쪽 배치" label="오른쪽" buttonProps={{
          size: 'sm'
        }}>
            <p>트리거 오른쪽</p>
          </Demo>
        </div>
      </div>
      <div className="popover_row" style={{
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 'var(--space-xl)'
    }}>
        <Demo placement="top" panelLabel="위쪽 왼쪽 정렬" label="위 · 왼쪽 정렬" buttonProps={{
        variant: 'ghost'
      }}>
          <p>패널 왼쪽 정렬</p>
        </Demo>
        <Demo panelLabel="아래쪽 왼쪽 정렬" label="아래 · 왼쪽 정렬" buttonProps={{
        variant: 'ghost'
      }}>
          <p>기본 배치</p>
        </Demo>
        <Demo placement="end" panelLabel="오른쪽 정렬" label="아래 · 오른쪽 정렬" buttonProps={{
        variant: 'ghost'
      }}>
          <p>패널 오른쪽 정렬</p>
        </Demo>
      </div>
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '폼',
  render: () => <Demo title="빠른 메모" label="메모 추가" footer={{
    cancel: '취소',
    confirm: '저장'
  }}>
      <div className="form_field">
        <label className="form_label" htmlFor="popover-memo-input">
          내용
        </label>
        <Textarea id="popover-memo-input" rows={3} placeholder="메모를 입력하세요" />
      </div>
    </Demo>
}`,...Y.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: '화살표 기준',
  render: () => <div className="popover_demo-stage">
      <p className="form_field-hint">기준 비교</p>
      <div className="popover_row">
        <ArrowDemo arrowAnchor="content" label="content">
          <p>패널이 트리거보다 넓을 때 화살표는 패널 패딩 기준으로 배치됩니다.</p>
        </ArrowDemo>
        <ArrowDemo arrowAnchor="target" label="target">
          <p>패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.</p>
        </ArrowDemo>
      </div>
      <p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>
        target — 좌 · 가운데 · 우
      </p>
      <div className="popover_row">
        <ArrowDemo arrowAnchor="target" arrowTargetAlign="left" label="left">
          <p>트리거 왼쪽을 가리킵니다.</p>
        </ArrowDemo>
        <ArrowDemo arrowAnchor="target" label="center">
          <p>트리거 가운데를 가리킵니다.</p>
        </ArrowDemo>
        <ArrowDemo arrowAnchor="target" arrowTargetAlign="right" label="right">
          <p>트리거 오른쪽을 가리킵니다.</p>
        </ArrowDemo>
      </div>
      <p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>
        mixed — 패널 가운데 · 화살표 조합
      </p>
      <div className="popover_row">
        <ArrowDemo panelAlign="center" arrowTargetAlign="left" label="가운데 · ←">
          <p>패널 가운데, 화살표 트리거 왼쪽.</p>
        </ArrowDemo>
        <ArrowDemo panelAlign="center" label="가운데 · ●">
          <p>패널·화살표 모두 트리거 가운데.</p>
        </ArrowDemo>
        <ArrowDemo panelAlign="center" arrowTargetAlign="right" label="가운데 · →">
          <p>패널 가운데, 화살표 트리거 오른쪽.</p>
        </ArrowDemo>
      </div>
      <MixedArrowRows />
    </div>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: '화살표 없음',
  render: () => <Demo noArrow panelLabel="화살표 없는 Popover" label="화살표 없음" buttonProps={{
    variant: 'ghost'
  }}>
      <p>화살표가 표시되지 않는 패널입니다.</p>
    </Demo>
}`,...$.parameters?.docs?.source}}},le=[`Playground`,`Basic`,`NoLabel`,`Open`,`Size`,`Offset`,`Title`,`Footer`,`Hover`,`Trigger`,`Placement`,`Form`,`ArrowAnchor`,`NoArrow`]})))()}export{K as a,U as c,ce as d,H as f,ue as h,Y as i,V as l,q as m,z as n,$ as o,W as p,G as r,B as s,Q as t,J as u};