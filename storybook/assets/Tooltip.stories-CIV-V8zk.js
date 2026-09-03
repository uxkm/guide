import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{C as n,F as r,S as i,T as a,_ as o,a as s,h as c,i as l,m as u,o as d,w as f}from"./iframe-BkSPibU3.js";import{t as p}from"./jsx-runtime-DeHZSEgm.js";import{n as m,t as h}from"./Button-Bdofg9ij.js";import{r as g,t as ee}from"./Icon-CS3T14bP.js";import{n as _,t as v}from"./Link-BNuNoDLM.js";import{t as y}from"./react-dom-D4-uzfxT.js";function te(e=typeof document>`u`?null:document,t=typeof window>`u`?null:window){if(!e)return null;let n=e;try{t?.top?.document?.body&&(n=t.top.document)}catch{}if(n!==e){let e=new URL(`styles/uxkm.css`,n.baseURI);e.searchParams.set(`v`,`tooltip-20260819`);let t=n.getElementById(`uxkm-tooltip-portal-styles`);t||(t=n.createElement(`link`),t.id=`uxkm-tooltip-portal-styles`,t.rel=`stylesheet`,n.head.appendChild(t)),t.href!==e.href&&(t.href=e.href)}let r=`uxkm-tooltip-portal-root-${T}`,i=n.getElementById(r);return i||(i=n.createElement(`div`),i.id=r,i.className=`uxkm-tooltip-portal-root`,n.body.appendChild(i)),i.dataset.theme=e.documentElement.dataset.theme||`light`,i}function ne(e){return!e?.matches||e.matches(E)?e:e.querySelector(E)||e}function re(e,t=window){let n=e.getBoundingClientRect();try{if(e.ownerDocument===t.top?.document)return n;let r=t.frameElement?.getBoundingClientRect();if(r)return{top:r.top+n.top,left:r.left+n.left,width:n.width,height:n.height}}catch{}return n}function b({id:e,content:t,children:n,placement:r,size:i=`md`,offset:a=`md`,offsetTop:o,offsetRight:s,offsetBottom:c,offsetLeft:l,open:u,defaultOpen:d=!1,inverse:f=!1,noArrow:p=!1,arrowAnchor:m=`content`,panelAlign:g=`center`,arrowTargetAlign:_=`center`,disabled:v=!1,trigger:y=`hover`,triggerContent:b,closable:T,closeLabel:E=`닫기`,className:D=``,onOpenChange:ae,...O}){let k=(0,x.useId)().replace(/:/g,``),A=e||`tooltip-${k}`,j=(0,x.useRef)(null),M=(0,x.useRef)(null),N=(0,x.useRef)(null),[P,F]=(0,x.useState)(d),[I,L]=(0,x.useState)(null),[R,z]=(0,x.useState)(null),B=u??P,V=C.includes(r)?r:``,H=w.includes(i)?i:`md`,U=B?te():null,W=T??y===`click`,G=(e,t,n)=>{v||(u===void 0&&F(e),ae?.(e,t,n))},K=()=>{let e=ne(j.current);e&&L(re(e))},q=()=>{N.current&&clearTimeout(N.current),N.current=null},J=e=>{q(),N.current=setTimeout(()=>G(!1,`hover`,e),100)},Y=(e,t)=>{K(),G(!0,e,t)};(0,x.useEffect)(()=>{if(!B)return;K();let e=U?.ownerDocument||document,t=e=>{!j.current?.contains(e.target)&&!M.current?.contains(e.target)&&G(!1,`outside`,e)},n=e=>{e.key===`Escape`&&G(!1,`escape`,e)};return e.addEventListener(`pointerdown`,t),document.addEventListener(`pointerdown`,t),e.addEventListener(`keydown`,n),window.addEventListener(`resize`,K),window.addEventListener(`scroll`,K,!0),()=>{e.removeEventListener(`pointerdown`,t),document.removeEventListener(`pointerdown`,t),e.removeEventListener(`keydown`,n),window.removeEventListener(`resize`,K),window.removeEventListener(`scroll`,K,!0)}},[B,U]),(0,x.useEffect)(()=>()=>q(),[]),(0,x.useEffect)(()=>{if(!B||!I||!M.current||![`target`,`mixed`].includes(m))return;let e=M.current;if([`top`,`right`,`bottom`,`left`,`transform`].forEach(t=>{e.style[t]=``}),m===`mixed`){let t=e.getBoundingClientRect(),n=V.startsWith(`top`)?`top`:[`left`,`right`].includes(V)?V:`bottom`;if(n===`top`||n===`bottom`){let r=g===`start`?0:g===`end`?I.width-t.width:(I.width-t.width)/2;e.style.left=`${r}px`,e.style.right=`auto`,e.style.transform=`none`,n===`top`?(e.style.top=`auto`,e.style.bottom=`calc(100% + var(--tooltip-offset-top))`):(e.style.top=`calc(100% + var(--tooltip-offset-bottom))`,e.style.bottom=`auto`)}else{let r=g===`start`?0:g===`end`?I.height-t.height:(I.height-t.height)/2;e.style.top=`${r}px`,e.style.bottom=`auto`,e.style.transform=`none`,n===`left`?(e.style.left=`auto`,e.style.right=`calc(100% + var(--tooltip-offset-left))`):(e.style.left=`calc(100% + var(--tooltip-offset-right))`,e.style.right=`auto`)}}let t=e.getBoundingClientRect(),n=_===`left`||_===`top`?0:_===`right`||_===`bottom`?1:.5,r=[`left`,`right`].includes(V)?I.top+I.height*n-t.top:I.left+I.width*n-t.left;z(`${r}px`)},[I,m,_,g,V,B]);let X=[[`top`,o],[`right`,s],[`bottom`,c],[`left`,l]].filter(([,e])=>e&&e!==`md`).map(([e,t])=>`tooltip_offset-${e}-${t}`),Z=(0,x.useMemo)(()=>[`tooltip`,`tooltip_portal`,`is-open`,H!==`md`&&`tooltip_${H}`,V&&`tooltip_placement-${V}`,a!==`md`&&`tooltip_offset-${a}`,...X,g!==`center`&&`tooltip_panel-align-${g}`,f&&`tooltip_inverse`,p&&`tooltip_no-arrow`,m!==`content`&&`tooltip_arrow-anchor-${m}`,v&&`is-disabled`,D].filter(Boolean).join(` `),[m,D,v,f,p,a,o,s,c,l,g,V,H]),Q=B&&U&&I?(0,ie.createPortal)((0,S.jsx)(`span`,{className:Z,"data-theme":document.documentElement.dataset.theme||`light`,style:{position:`fixed`,top:I.top,left:I.left,width:I.width,height:I.height,zIndex:10020,pointerEvents:`none`,"--tooltip-arrow-position":R||`${I.width/2}px`},children:(0,S.jsxs)(`span`,{...O,ref:M,id:A,className:[`tooltip_bubble`,W&&`tooltip_bubble-closable`].filter(Boolean).join(` `),role:`tooltip`,style:{zIndex:10021,pointerEvents:y===`click`?`auto`:void 0},onMouseEnter:y===`hover`?q:void 0,onMouseLeave:y===`hover`?J:void 0,children:[!p&&(0,S.jsx)(`span`,{className:`tooltip_arrow`,"aria-hidden":`true`}),W&&(0,S.jsx)(h,{variant:`ghost`,iconOnly:!0,className:`tooltip_close tooltip_close-floating`,ariaLabel:E,iconBefore:(0,S.jsx)(ee,{name:`close`,size:`sm`,className:`tooltip_close-icon`}),onClick:e=>G(!1,`close`,e)}),n??t]})}),U):null,$=(0,x.isValidElement)(b)?(0,x.cloneElement)(b,{"aria-describedby":B?A:void 0,"aria-expanded":y===`click`?B:void 0}):b;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`span`,{ref:j,className:`tooltip_trigger`,"data-component":`Tooltip`,onClick:y===`click`?e=>B?G(!1,`trigger`,e):Y(`trigger`,e):void 0,onMouseEnter:y===`hover`?e=>{q(),Y(`hover`,e)}:void 0,onMouseLeave:y===`hover`?J:void 0,onFocus:y===`hover`?e=>Y(`focus`,e):void 0,onBlur:y===`hover`?J:void 0,children:$}),Q]})}var x,ie,S,C,w,T,E;function D(){return(D=e((()=>{x=r(),ie=y(),m(),g(),S=p(),C=[`top`,`top-start`,`top-end`,`left`,`right`,`start`,`end`],w=[`sm`,`md`,`lg`],T=Math.random().toString(36).slice(2,10),E=`button, a, [role="button"], [role="link"], input, textarea, select, .btn, .link`,b.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},offset:{defaultValue:{value:`'md'`,computed:!1},required:!1},defaultOpen:{defaultValue:{value:`false`,computed:!1},required:!1},inverse:{defaultValue:{value:`false`,computed:!1},required:!1},noArrow:{defaultValue:{value:`false`,computed:!1},required:!1},arrowAnchor:{defaultValue:{value:`'content'`,computed:!1},required:!1},panelAlign:{defaultValue:{value:`'center'`,computed:!1},required:!1},arrowTargetAlign:{defaultValue:{value:`'center'`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},trigger:{defaultValue:{value:`'hover'`,computed:!1},required:!1},closeLabel:{defaultValue:{value:`'닫기'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var ae=t({ArrowAnchor:()=>Q,Basic:()=>z,Click:()=>K,Disabled:()=>Y,Inline:()=>W,Inverse:()=>J,NoArrow:()=>$,Offset:()=>U,Open:()=>V,Placement:()=>q,Playground:()=>R,Size:()=>H,Slot:()=>B,Trigger:()=>G,__namedExportsOrder:()=>oe,default:()=>L});function O({label:e=`마우스 오버`,initialOpen:t=!1,open:n,onOpenChange:r,triggerContent:i,content:a=`짧은 도움말 텍스트입니다.`,buttonProps:o,children:s,...c}){let[l,u]=(0,j.useState)(t),d=n??l,f=e=>{n===void 0&&u(e),r?.(e)};return(0,M.jsx)(N,{...c,content:a,open:d,onOpenChange:f,triggerContent:i??(0,M.jsx)(P,{variant:`outline`,label:e,...o}),children:s})}function k({args:e,updateArgs:t}){let n=A(e),r=c(n),i=e.open===!0,[a,o]=(0,j.useState)(i);(0,j.useEffect)(()=>{o(i)},[i]),(0,j.useEffect)(()=>{o(!0),t?.({open:!0})},[r]);let s=e=>{o(e),t?.({open:e})};return(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsx)(O,{...n,open:a,onOpenChange:s,label:`Playground`},r)})}function A(e){return{placement:e.placement,size:e.size,trigger:e.trigger,content:typeof e.content==`string`?e.content:void 0,offset:e.offset,offsetTop:e.offsetTop,offsetRight:e.offsetRight,offsetBottom:e.offsetBottom,offsetLeft:e.offsetLeft,arrowAnchor:e.arrowAnchor,panelAlign:e.panelAlign,arrowTargetAlign:e.arrowTargetAlign,inverse:e.inverse===!0,noArrow:e.noArrow===!0,closable:typeof e.closable==`boolean`?e.closable:void 0,disabled:e.disabled===!0}}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,oe;function se(){return(se=e((()=>{j=r(),D(),m(),_(),g(),o(),M=p(),N=b,P=h,F=v,I=ee,L={title:`피드백/Tooltip`,component:N,decorators:[e=>(0,M.jsx)(`div`,{className:`tooltip-story-demo`,children:(0,M.jsx)(e,{})})],parameters:{layout:`padded`,controls:{include:[`open`,`placement`,`size`,`trigger`,`content`,`offset`,`offsetTop`,`offsetRight`,`offsetBottom`,`offsetLeft`,`arrowAnchor`,`panelAlign`,`arrowTargetAlign`,`inverse`,`noArrow`,`closable`,`disabled`]},docs:{extractArgTypes:()=>({})}},args:{placement:`top`,size:`md`,trigger:`click`,content:`Controls로 속성을 조절해 보세요.`,open:!0,offset:`md`,arrowAnchor:`content`,panelAlign:`center`,arrowTargetAlign:`center`,inverse:!1,noArrow:!1,closable:!1,disabled:!1},argTypes:{...u,placement:{control:`select`,options:[`top`,`top-start`,`top-end`,`left`,`right`,`start`,`end`],type:`string`},size:{control:`select`,options:[`sm`,`md`,`lg`],type:`string`},trigger:{control:`select`,options:[`hover`,`click`],type:`string`},content:a,open:d,inverse:d,offset:i,offsetTop:n,offsetRight:n,offsetBottom:n,offsetLeft:n,arrowAnchor:l,panelAlign:f,arrowTargetAlign:s,noArrow:d,closable:d,disabled:d}},R={name:`Playground`,render:(e,{updateArgs:t})=>(0,M.jsx)(k,{args:e,updateArgs:t})},z={name:`기본`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsx)(O,{})})},B={name:`슬롯`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsx)(O,{label:`슬롯 예시`,content:void 0,children:`짧은 도움말 텍스트입니다.`})})},V={name:`열린 상태`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsx)(O,{initialOpen:!0,label:`열림`,content:`정적 데모용 열린 상태입니다.`,buttonProps:{variant:`filled`,color:`primary`}})})},H={name:`크기`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsxs)(`div`,{className:`tooltip_row`,children:[(0,M.jsx)(O,{size:`sm`,label:`Small`,content:`작은 말풍선`,buttonProps:{variant:`ghost`,size:`sm`}}),(0,M.jsx)(O,{label:`Medium`,content:`기본 크기 말풍선`,buttonProps:{variant:`ghost`}}),(0,M.jsx)(O,{size:`lg`,label:`Large`,content:`큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.`,buttonProps:{variant:`ghost`,size:`lg`}})]})})},U={name:`간격`,render:()=>(0,M.jsxs)(`div`,{className:`tooltip_demo-stage`,children:[(0,M.jsx)(`p`,{className:`form_field-hint`,children:`전 방향 동일`}),(0,M.jsxs)(`div`,{className:`tooltip_row`,children:[(0,M.jsx)(O,{offset:`none`,label:`none`,content:`간격 없음`,buttonProps:{variant:`ghost`,size:`sm`}}),(0,M.jsx)(O,{offset:`sm`,label:`sm`,content:`좁은 간격`,buttonProps:{variant:`ghost`,size:`sm`}}),(0,M.jsx)(O,{label:`md`,content:`기본 간격`,buttonProps:{variant:`ghost`,size:`sm`}}),(0,M.jsx)(O,{offset:`lg`,label:`lg`,content:`넓은 간격`,buttonProps:{variant:`ghost`,size:`sm`}})]}),(0,M.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`방향별 (offset-* · placement)`}),(0,M.jsxs)(`div`,{className:`tooltip_demo-placement`,style:{minHeight:`12rem`,padding:0},children:[(0,M.jsx)(`div`,{className:`tooltip_demo-placement-cell-top`,children:(0,M.jsx)(O,{placement:`top`,offsetTop:`lg`,label:`위`,content:`위쪽 간격`,buttonProps:{variant:`ghost`,size:`sm`}})}),(0,M.jsx)(`div`,{className:`tooltip_demo-placement-cell-left`,children:(0,M.jsx)(O,{placement:`left`,offsetLeft:`lg`,label:`왼쪽`,content:`왼쪽 간격`,buttonProps:{variant:`ghost`,size:`sm`}})}),(0,M.jsx)(`div`,{className:`tooltip_demo-placement-cell-center`,children:(0,M.jsx)(O,{offsetBottom:`lg`,label:`아래`,content:`아래쪽 간격`,buttonProps:{variant:`ghost`,size:`sm`}})}),(0,M.jsx)(`div`,{className:`tooltip_demo-placement-cell-right`,children:(0,M.jsx)(O,{placement:`right`,offsetRight:`lg`,label:`오른쪽`,content:`오른쪽 간격`,buttonProps:{variant:`ghost`,size:`sm`}})})]})]})},W={name:`인라인`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsxs)(`p`,{children:[`결제 시`,` `,(0,M.jsx)(O,{content:`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`,triggerContent:(0,M.jsx)(F,{label:`에스크로`})}),` `,`서비스를 이용할 수 있습니다.`]})})},G={name:`트리거 유형`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsxs)(`div`,{className:`tooltip_row`,children:[(0,M.jsx)(O,{content:`버튼 트리거 예시입니다.`,label:`Button`,buttonProps:{variant:`filled`,color:`primary`}}),(0,M.jsx)(O,{content:`링크 스타일 트리거입니다.`,triggerContent:(0,M.jsx)(F,{label:`Link 트리거`})}),(0,M.jsx)(O,{content:`아이콘 전용 트리거입니다.`,triggerContent:(0,M.jsx)(P,{variant:`ghost`,iconOnly:!0,ariaLabel:`정보`,iconBefore:(0,M.jsx)(I,{name:`info`})})})]})})},K={name:`클릭 트리거`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsx)(O,{trigger:`click`,label:`클릭하여 보기`,content:`클릭으로 열고 닫는 Tooltip입니다.`})})},q={name:`배치`,render:()=>(0,M.jsxs)(`div`,{className:`tooltip_demo-stage`,children:[(0,M.jsxs)(`div`,{className:`tooltip_demo-placement`,children:[(0,M.jsx)(`div`,{className:`tooltip_demo-placement-cell-top`,children:(0,M.jsx)(O,{placement:`top`,label:`위`,content:`트리거 위`,buttonProps:{size:`sm`}})}),(0,M.jsx)(`div`,{className:`tooltip_demo-placement-cell-left`,children:(0,M.jsx)(O,{placement:`left`,label:`왼쪽`,content:`트리거 왼쪽`,buttonProps:{size:`sm`}})}),(0,M.jsx)(`div`,{className:`tooltip_demo-placement-cell-center`,children:(0,M.jsx)(O,{label:`아래`,content:`트리거 아래 · 가운데`,buttonProps:{size:`sm`}})}),(0,M.jsx)(`div`,{className:`tooltip_demo-placement-cell-right`,children:(0,M.jsx)(O,{placement:`right`,label:`오른쪽`,content:`트리거 오른쪽`,buttonProps:{size:`sm`}})})]}),(0,M.jsxs)(`div`,{className:`tooltip_row`,style:{width:`100%`,justifyContent:`space-between`,marginTop:`var(--space-xl)`},children:[(0,M.jsx)(O,{placement:`top-start`,label:`위 · 왼쪽`,content:`위쪽 왼쪽 정렬`,buttonProps:{variant:`ghost`}}),(0,M.jsx)(O,{placement:`start`,label:`아래 · 왼쪽`,content:`아래쪽 왼쪽 정렬`,buttonProps:{variant:`ghost`}}),(0,M.jsx)(O,{placement:`end`,label:`아래 · 오른쪽`,content:`아래쪽 오른쪽 정렬`,buttonProps:{variant:`ghost`}})]})]})},J={name:`역색`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsx)(O,{inverse:!0,label:`역색 Tooltip`,content:`어두운 배경의 말풍선입니다.`,buttonProps:{variant:`ghost`}})})},Y={name:`비활성 트리거`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsx)(O,{content:`필수 항목을 모두 입력해야 제출할 수 있습니다.`,triggerContent:(0,M.jsx)(`span`,{tabIndex:0,children:(0,M.jsx)(P,{variant:`filled`,color:`primary`,label:`제출 불가`,disabled:!0})})})})},X=({panelAlign:e=`center`,arrowTargetAlign:t=`center`,arrowAnchor:n=`mixed`,content:r})=>(0,M.jsx)(O,{arrowAnchor:n,panelAlign:e,arrowTargetAlign:t,content:r,label:`S`,buttonProps:{variant:`ghost`,size:`sm`}}),Z=({align:e,title:t})=>(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:[`mixed — 말풍선 `,t,` · 화살표 조합`]}),(0,M.jsxs)(`div`,{className:`tooltip_row`,children:[(0,M.jsx)(X,{panelAlign:e,arrowTargetAlign:`left`,content:`말풍선 ${t}, 화살표 왼쪽.`}),(0,M.jsx)(X,{panelAlign:e,content:`말풍선 ${t}, 화살표 가운데.`}),(0,M.jsx)(X,{panelAlign:e,arrowTargetAlign:`right`,content:`말풍선 ${t}, 화살표 오른쪽.`})]})]}),Q={name:`화살표 기준`,render:()=>(0,M.jsxs)(`div`,{className:`tooltip_demo-stage`,children:[(0,M.jsx)(`p`,{className:`form_field-hint`,children:`기준 비교`}),(0,M.jsxs)(`div`,{className:`tooltip_row`,children:[(0,M.jsx)(X,{arrowAnchor:`content`,content:`패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.`}),(0,M.jsx)(X,{arrowAnchor:`target`,content:`패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.`})]}),(0,M.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`target — 좌 · 가운데 · 우`}),(0,M.jsxs)(`div`,{className:`tooltip_row`,children:[(0,M.jsx)(X,{arrowAnchor:`target`,arrowTargetAlign:`left`,content:`트리거 왼쪽을 가리킵니다.`}),(0,M.jsx)(X,{arrowAnchor:`target`,content:`트리거 가운데를 가리킵니다.`}),(0,M.jsx)(X,{arrowAnchor:`target`,arrowTargetAlign:`right`,content:`트리거 오른쪽을 가리킵니다.`})]}),(0,M.jsx)(Z,{align:`center`,title:`가운데`}),(0,M.jsx)(Z,{align:`start`,title:`왼쪽`}),(0,M.jsx)(Z,{align:`end`,title:`오른쪽`})]})},$={name:`화살표 없음`,render:()=>(0,M.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,M.jsx)(O,{noArrow:!0,label:`화살표 없음`,content:`화살표가 표시되지 않는 말풍선입니다.`,buttonProps:{variant:`ghost`}})})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: (args, {
    updateArgs
  }) => <TooltipPlayground args={args} updateArgs={updateArgs} />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <div className="tooltip_demo-stage">
      <Demo />
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '슬롯',
  render: () => <div className="tooltip_demo-stage">
      <Demo label="슬롯 예시" content={undefined}>
        짧은 도움말 텍스트입니다.
      </Demo>
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '열린 상태',
  render: () => <div className="tooltip_demo-stage">
      <Demo initialOpen label="열림" content="정적 데모용 열린 상태입니다." buttonProps={{
      variant: 'filled',
      color: 'primary'
    }} />
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="tooltip_demo-stage">
      <div className="tooltip_row">
        <Demo size="sm" label="Small" content="작은 말풍선" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} />
        <Demo label="Medium" content="기본 크기 말풍선" buttonProps={{
        variant: 'ghost'
      }} />
        <Demo size="lg" label="Large" content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다." buttonProps={{
        variant: 'ghost',
        size: 'lg'
      }} />
      </div>
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: '간격',
  render: () => <div className="tooltip_demo-stage">
      <p className="form_field-hint">전 방향 동일</p>
      <div className="tooltip_row">
        <Demo offset="none" label="none" content="간격 없음" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} />
        <Demo offset="sm" label="sm" content="좁은 간격" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} />
        <Demo label="md" content="기본 간격" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} />
        <Demo offset="lg" label="lg" content="넓은 간격" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} />
      </div>
      <p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>
        방향별 (offset-* · placement)
      </p>
      <div className="tooltip_demo-placement" style={{
      minHeight: '12rem',
      padding: 0
    }}>
        <div className="tooltip_demo-placement-cell-top">
          <Demo placement="top" offsetTop="lg" label="위" content="위쪽 간격" buttonProps={{
          variant: 'ghost',
          size: 'sm'
        }} />
        </div>
        <div className="tooltip_demo-placement-cell-left">
          <Demo placement="left" offsetLeft="lg" label="왼쪽" content="왼쪽 간격" buttonProps={{
          variant: 'ghost',
          size: 'sm'
        }} />
        </div>
        <div className="tooltip_demo-placement-cell-center">
          <Demo offsetBottom="lg" label="아래" content="아래쪽 간격" buttonProps={{
          variant: 'ghost',
          size: 'sm'
        }} />
        </div>
        <div className="tooltip_demo-placement-cell-right">
          <Demo placement="right" offsetRight="lg" label="오른쪽" content="오른쪽 간격" buttonProps={{
          variant: 'ghost',
          size: 'sm'
        }} />
        </div>
      </div>
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '인라인',
  render: () => <div className="tooltip_demo-stage">
      <p>
        결제 시{' '}
        <Demo content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다." triggerContent={<Link label="에스크로" />} />{' '}
        서비스를 이용할 수 있습니다.
      </p>
    </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '트리거 유형',
  render: () => <div className="tooltip_demo-stage">
      <div className="tooltip_row">
        <Demo content="버튼 트리거 예시입니다." label="Button" buttonProps={{
        variant: 'filled',
        color: 'primary'
      }} />
        <Demo content="링크 스타일 트리거입니다." triggerContent={<Link label="Link 트리거" />} />
        <Demo content="아이콘 전용 트리거입니다." triggerContent={<Button variant="ghost" iconOnly ariaLabel="정보" iconBefore={<Icon name="info" />} />} />
      </div>
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: '클릭 트리거',
  render: () => <div className="tooltip_demo-stage">
      <Demo trigger="click" label="클릭하여 보기" content="클릭으로 열고 닫는 Tooltip입니다." />
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '배치',
  render: () => <div className="tooltip_demo-stage">
      <div className="tooltip_demo-placement">
        <div className="tooltip_demo-placement-cell-top">
          <Demo placement="top" label="위" content="트리거 위" buttonProps={{
          size: 'sm'
        }} />
        </div>
        <div className="tooltip_demo-placement-cell-left">
          <Demo placement="left" label="왼쪽" content="트리거 왼쪽" buttonProps={{
          size: 'sm'
        }} />
        </div>
        <div className="tooltip_demo-placement-cell-center">
          <Demo label="아래" content="트리거 아래 · 가운데" buttonProps={{
          size: 'sm'
        }} />
        </div>
        <div className="tooltip_demo-placement-cell-right">
          <Demo placement="right" label="오른쪽" content="트리거 오른쪽" buttonProps={{
          size: 'sm'
        }} />
        </div>
      </div>
      <div className="tooltip_row" style={{
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 'var(--space-xl)'
    }}>
        <Demo placement="top-start" label="위 · 왼쪽" content="위쪽 왼쪽 정렬" buttonProps={{
        variant: 'ghost'
      }} />
        <Demo placement="start" label="아래 · 왼쪽" content="아래쪽 왼쪽 정렬" buttonProps={{
        variant: 'ghost'
      }} />
        <Demo placement="end" label="아래 · 오른쪽" content="아래쪽 오른쪽 정렬" buttonProps={{
        variant: 'ghost'
      }} />
      </div>
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: '역색',
  render: () => <div className="tooltip_demo-stage">
      <Demo inverse label="역색 Tooltip" content="어두운 배경의 말풍선입니다." buttonProps={{
      variant: 'ghost'
    }} />
    </div>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: '비활성 트리거',
  render: () => <div className="tooltip_demo-stage">
      <Demo content="필수 항목을 모두 입력해야 제출할 수 있습니다." triggerContent={<span tabIndex={0}>
            <Button variant="filled" color="primary" label="제출 불가" disabled />
          </span>} />
    </div>
}`,...Y.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: '화살표 기준',
  render: () => <div className="tooltip_demo-stage">
      <p className="form_field-hint">기준 비교</p>
      <div className="tooltip_row">
        <ArrowDemo arrowAnchor="content" content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다." />
        <ArrowDemo arrowAnchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다." />
      </div>
      <p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>
        target — 좌 · 가운데 · 우
      </p>
      <div className="tooltip_row">
        <ArrowDemo arrowAnchor="target" arrowTargetAlign="left" content="트리거 왼쪽을 가리킵니다." />
        <ArrowDemo arrowAnchor="target" content="트리거 가운데를 가리킵니다." />
        <ArrowDemo arrowAnchor="target" arrowTargetAlign="right" content="트리거 오른쪽을 가리킵니다." />
      </div>
      <MixedRow align="center" title="가운데" />
      <MixedRow align="start" title="왼쪽" />
      <MixedRow align="end" title="오른쪽" />
    </div>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: '화살표 없음',
  render: () => <div className="tooltip_demo-stage">
      <Demo noArrow label="화살표 없음" content="화살표가 표시되지 않는 말풍선입니다." buttonProps={{
      variant: 'ghost'
    }} />
    </div>
}`,...$.parameters?.docs?.source}}},oe=[`Playground`,`Basic`,`Slot`,`Open`,`Size`,`Offset`,`Inline`,`Trigger`,`Click`,`Placement`,`Inverse`,`Disabled`,`ArrowAnchor`,`NoArrow`]})))()}export{W as a,U as c,H as d,B as f,se as h,Y as i,V as l,G as m,z as n,J as o,ae as p,K as r,$ as s,Q as t,q as u};