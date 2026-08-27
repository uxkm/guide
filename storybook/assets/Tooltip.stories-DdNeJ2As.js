import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-BnaKUpFX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Button-Bdofg9ij.js";import{r as o,t as s}from"./Icon-CS3T14bP.js";import{n as c,t as l}from"./Link-CdmlgHEu.js";import{r as u,t as d}from"./Tooltip-Bflhicrk.js";var f=t({ArrowAnchor:()=>P,Basic:()=>x,Click:()=>O,Disabled:()=>j,Inline:()=>E,Inverse:()=>A,NoArrow:()=>F,Offset:()=>T,Open:()=>C,Placement:()=>k,Size:()=>w,Slot:()=>S,Trigger:()=>D,__namedExportsOrder:()=>I,default:()=>b});function p({label:e=`마우스 오버`,initialOpen:t=!1,triggerContent:n,content:r=`짧은 도움말 텍스트입니다.`,buttonProps:i,...a}){let[o,s]=(0,m.useState)(t);return(0,h.jsx)(g,{...a,content:r,open:o,onOpenChange:s,triggerContent:n??(0,h.jsx)(_,{variant:`outline`,label:e,...i})})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{m=n(),u(),i(),c(),o(),h=r(),g=d,_=a,v=l,y=s,b={title:`피드백/Tooltip`,component:g,decorators:[e=>(0,h.jsx)(`div`,{className:`tooltip-story-demo`,children:(0,h.jsx)(e,{})})],parameters:{layout:`padded`},argTypes:{placement:{control:`select`,options:[`top`,`top-start`,`top-end`,`left`,`right`,`start`,`end`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},trigger:{control:`select`,options:[`hover`,`click`]}}},x={name:`기본`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsx)(p,{})})},S={name:`슬롯`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsx)(p,{label:`슬롯 예시`,content:void 0,children:`짧은 도움말 텍스트입니다.`})})},C={name:`열린 상태`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsx)(p,{initialOpen:!0,label:`열림`,content:`정적 데모용 열린 상태입니다.`,buttonProps:{variant:`filled`,color:`primary`}})})},w={name:`크기`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsxs)(`div`,{className:`tooltip_row`,children:[(0,h.jsx)(p,{size:`sm`,label:`Small`,content:`작은 말풍선`,buttonProps:{variant:`ghost`,size:`sm`}}),(0,h.jsx)(p,{label:`Medium`,content:`기본 크기 말풍선`,buttonProps:{variant:`ghost`}}),(0,h.jsx)(p,{size:`lg`,label:`Large`,content:`큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다.`,buttonProps:{variant:`ghost`,size:`lg`}})]})})},T={name:`간격`,render:()=>(0,h.jsxs)(`div`,{className:`tooltip_demo-stage`,children:[(0,h.jsx)(`p`,{className:`form_field-hint`,children:`전 방향 동일`}),(0,h.jsxs)(`div`,{className:`tooltip_row`,children:[(0,h.jsx)(p,{offset:`none`,label:`none`,content:`간격 없음`,buttonProps:{variant:`ghost`,size:`sm`}}),(0,h.jsx)(p,{offset:`sm`,label:`sm`,content:`좁은 간격`,buttonProps:{variant:`ghost`,size:`sm`}}),(0,h.jsx)(p,{label:`md`,content:`기본 간격`,buttonProps:{variant:`ghost`,size:`sm`}}),(0,h.jsx)(p,{offset:`lg`,label:`lg`,content:`넓은 간격`,buttonProps:{variant:`ghost`,size:`sm`}})]}),(0,h.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`방향별 (offset-* · placement)`}),(0,h.jsxs)(`div`,{className:`tooltip_demo-placement`,style:{minHeight:`12rem`,padding:0},children:[(0,h.jsx)(`div`,{className:`tooltip_demo-placement-cell-top`,children:(0,h.jsx)(p,{placement:`top`,offsetTop:`lg`,label:`위`,content:`위쪽 간격`,buttonProps:{variant:`ghost`,size:`sm`}})}),(0,h.jsx)(`div`,{className:`tooltip_demo-placement-cell-left`,children:(0,h.jsx)(p,{placement:`left`,offsetLeft:`lg`,label:`왼쪽`,content:`왼쪽 간격`,buttonProps:{variant:`ghost`,size:`sm`}})}),(0,h.jsx)(`div`,{className:`tooltip_demo-placement-cell-center`,children:(0,h.jsx)(p,{offsetBottom:`lg`,label:`아래`,content:`아래쪽 간격`,buttonProps:{variant:`ghost`,size:`sm`}})}),(0,h.jsx)(`div`,{className:`tooltip_demo-placement-cell-right`,children:(0,h.jsx)(p,{placement:`right`,offsetRight:`lg`,label:`오른쪽`,content:`오른쪽 간격`,buttonProps:{variant:`ghost`,size:`sm`}})})]})]})},E={name:`인라인`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsxs)(`p`,{children:[`결제 시`,` `,(0,h.jsx)(p,{content:`구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다.`,triggerContent:(0,h.jsx)(v,{label:`에스크로`})}),` `,`서비스를 이용할 수 있습니다.`]})})},D={name:`트리거 유형`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsxs)(`div`,{className:`tooltip_row`,children:[(0,h.jsx)(p,{content:`버튼 트리거 예시입니다.`,label:`Button`,buttonProps:{variant:`filled`,color:`primary`}}),(0,h.jsx)(p,{content:`링크 스타일 트리거입니다.`,triggerContent:(0,h.jsx)(v,{label:`Link 트리거`})}),(0,h.jsx)(p,{content:`아이콘 전용 트리거입니다.`,triggerContent:(0,h.jsx)(_,{variant:`ghost`,iconOnly:!0,ariaLabel:`정보`,iconBefore:(0,h.jsx)(y,{name:`info`})})})]})})},O={name:`클릭 트리거`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsx)(p,{trigger:`click`,label:`클릭하여 보기`,content:`클릭으로 열고 닫는 Tooltip입니다.`})})},k={name:`배치`,render:()=>(0,h.jsxs)(`div`,{className:`tooltip_demo-stage`,children:[(0,h.jsxs)(`div`,{className:`tooltip_demo-placement`,children:[(0,h.jsx)(`div`,{className:`tooltip_demo-placement-cell-top`,children:(0,h.jsx)(p,{placement:`top`,label:`위`,content:`트리거 위`,buttonProps:{size:`sm`}})}),(0,h.jsx)(`div`,{className:`tooltip_demo-placement-cell-left`,children:(0,h.jsx)(p,{placement:`left`,label:`왼쪽`,content:`트리거 왼쪽`,buttonProps:{size:`sm`}})}),(0,h.jsx)(`div`,{className:`tooltip_demo-placement-cell-center`,children:(0,h.jsx)(p,{label:`아래`,content:`트리거 아래 · 가운데`,buttonProps:{size:`sm`}})}),(0,h.jsx)(`div`,{className:`tooltip_demo-placement-cell-right`,children:(0,h.jsx)(p,{placement:`right`,label:`오른쪽`,content:`트리거 오른쪽`,buttonProps:{size:`sm`}})})]}),(0,h.jsxs)(`div`,{className:`tooltip_row`,style:{width:`100%`,justifyContent:`space-between`,marginTop:`var(--space-xl)`},children:[(0,h.jsx)(p,{placement:`top-start`,label:`위 · 왼쪽`,content:`위쪽 왼쪽 정렬`,buttonProps:{variant:`ghost`}}),(0,h.jsx)(p,{placement:`start`,label:`아래 · 왼쪽`,content:`아래쪽 왼쪽 정렬`,buttonProps:{variant:`ghost`}}),(0,h.jsx)(p,{placement:`end`,label:`아래 · 오른쪽`,content:`아래쪽 오른쪽 정렬`,buttonProps:{variant:`ghost`}})]})]})},A={name:`역색`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsx)(p,{inverse:!0,label:`역색 Tooltip`,content:`어두운 배경의 말풍선입니다.`,buttonProps:{variant:`ghost`}})})},j={name:`비활성 트리거`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsx)(p,{content:`필수 항목을 모두 입력해야 제출할 수 있습니다.`,triggerContent:(0,h.jsx)(`span`,{tabIndex:0,children:(0,h.jsx)(_,{variant:`filled`,color:`primary`,label:`제출 불가`,disabled:!0})})})})},M=({panelAlign:e=`center`,arrowTargetAlign:t=`center`,arrowAnchor:n=`mixed`,content:r})=>(0,h.jsx)(p,{arrowAnchor:n,panelAlign:e,arrowTargetAlign:t,content:r,label:`S`,buttonProps:{variant:`ghost`,size:`sm`}}),N=({align:e,title:t})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:[`mixed — 말풍선 `,t,` · 화살표 조합`]}),(0,h.jsxs)(`div`,{className:`tooltip_row`,children:[(0,h.jsx)(M,{panelAlign:e,arrowTargetAlign:`left`,content:`말풍선 ${t}, 화살표 왼쪽.`}),(0,h.jsx)(M,{panelAlign:e,content:`말풍선 ${t}, 화살표 가운데.`}),(0,h.jsx)(M,{panelAlign:e,arrowTargetAlign:`right`,content:`말풍선 ${t}, 화살표 오른쪽.`})]})]}),P={name:`화살표 기준`,render:()=>(0,h.jsxs)(`div`,{className:`tooltip_demo-stage`,children:[(0,h.jsx)(`p`,{className:`form_field-hint`,children:`기준 비교`}),(0,h.jsxs)(`div`,{className:`tooltip_row`,children:[(0,h.jsx)(M,{arrowAnchor:`content`,content:`패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다.`}),(0,h.jsx)(M,{arrowAnchor:`target`,content:`패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다.`})]}),(0,h.jsx)(`p`,{className:`form_field-hint`,style:{marginTop:`var(--space-lg)`},children:`target — 좌 · 가운데 · 우`}),(0,h.jsxs)(`div`,{className:`tooltip_row`,children:[(0,h.jsx)(M,{arrowAnchor:`target`,arrowTargetAlign:`left`,content:`트리거 왼쪽을 가리킵니다.`}),(0,h.jsx)(M,{arrowAnchor:`target`,content:`트리거 가운데를 가리킵니다.`}),(0,h.jsx)(M,{arrowAnchor:`target`,arrowTargetAlign:`right`,content:`트리거 오른쪽을 가리킵니다.`})]}),(0,h.jsx)(N,{align:`center`,title:`가운데`}),(0,h.jsx)(N,{align:`start`,title:`왼쪽`}),(0,h.jsx)(N,{align:`end`,title:`오른쪽`})]})},F={name:`화살표 없음`,render:()=>(0,h.jsx)(`div`,{className:`tooltip_demo-stage`,children:(0,h.jsx)(p,{noArrow:!0,label:`화살표 없음`,content:`화살표가 표시되지 않는 말풍선입니다.`,buttonProps:{variant:`ghost`}})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <div className="tooltip_demo-stage"><Demo /></div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '슬롯',
  render: () => <div className="tooltip_demo-stage"><Demo label="슬롯 예시" content={undefined}>짧은 도움말 텍스트입니다.</Demo></div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '열린 상태',
  render: () => <div className="tooltip_demo-stage"><Demo initialOpen label="열림" content="정적 데모용 열린 상태입니다." buttonProps={{
      variant: 'filled',
      color: 'primary'
    }} /></div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="tooltip_demo-stage"><div className="tooltip_row"><Demo size="sm" label="Small" content="작은 말풍선" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} /><Demo label="Medium" content="기본 크기 말풍선" buttonProps={{
        variant: 'ghost'
      }} /><Demo size="lg" label="Large" content="큰 말풍선 — 조금 더 긴 설명을 담을 수 있습니다." buttonProps={{
        variant: 'ghost',
        size: 'lg'
      }} /></div></div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '간격',
  render: () => <div className="tooltip_demo-stage"><p className="form_field-hint">전 방향 동일</p><div className="tooltip_row"><Demo offset="none" label="none" content="간격 없음" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} /><Demo offset="sm" label="sm" content="좁은 간격" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} /><Demo label="md" content="기본 간격" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} /><Demo offset="lg" label="lg" content="넓은 간격" buttonProps={{
        variant: 'ghost',
        size: 'sm'
      }} /></div><p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>방향별 (offset-* · placement)</p><div className="tooltip_demo-placement" style={{
      minHeight: '12rem',
      padding: 0
    }}><div className="tooltip_demo-placement-cell-top"><Demo placement="top" offsetTop="lg" label="위" content="위쪽 간격" buttonProps={{
          variant: 'ghost',
          size: 'sm'
        }} /></div><div className="tooltip_demo-placement-cell-left"><Demo placement="left" offsetLeft="lg" label="왼쪽" content="왼쪽 간격" buttonProps={{
          variant: 'ghost',
          size: 'sm'
        }} /></div><div className="tooltip_demo-placement-cell-center"><Demo offsetBottom="lg" label="아래" content="아래쪽 간격" buttonProps={{
          variant: 'ghost',
          size: 'sm'
        }} /></div><div className="tooltip_demo-placement-cell-right"><Demo placement="right" offsetRight="lg" label="오른쪽" content="오른쪽 간격" buttonProps={{
          variant: 'ghost',
          size: 'sm'
        }} /></div></div></div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '인라인',
  render: () => <div className="tooltip_demo-stage"><p>결제 시{' '}<Demo content="구매자가 상품 수령을 확인할 때까지 대금을 안전하게 보관하는 결제 방식입니다." triggerContent={<Link label="에스크로" />} />{' '}서비스를 이용할 수 있습니다.</p></div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '트리거 유형',
  render: () => <div className="tooltip_demo-stage"><div className="tooltip_row"><Demo content="버튼 트리거 예시입니다." label="Button" buttonProps={{
        variant: 'filled',
        color: 'primary'
      }} /><Demo content="링크 스타일 트리거입니다." triggerContent={<Link label="Link 트리거" />} /><Demo content="아이콘 전용 트리거입니다." triggerContent={<Button variant="ghost" iconOnly ariaLabel="정보" iconBefore={<Icon name="info" />} />} /></div></div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '클릭 트리거',
  render: () => <div className="tooltip_demo-stage"><Demo trigger="click" label="클릭하여 보기" content="클릭으로 열고 닫는 Tooltip입니다." /></div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '배치',
  render: () => <div className="tooltip_demo-stage"><div className="tooltip_demo-placement"><div className="tooltip_demo-placement-cell-top"><Demo placement="top" label="위" content="트리거 위" buttonProps={{
          size: 'sm'
        }} /></div><div className="tooltip_demo-placement-cell-left"><Demo placement="left" label="왼쪽" content="트리거 왼쪽" buttonProps={{
          size: 'sm'
        }} /></div><div className="tooltip_demo-placement-cell-center"><Demo label="아래" content="트리거 아래 · 가운데" buttonProps={{
          size: 'sm'
        }} /></div><div className="tooltip_demo-placement-cell-right"><Demo placement="right" label="오른쪽" content="트리거 오른쪽" buttonProps={{
          size: 'sm'
        }} /></div></div><div className="tooltip_row" style={{
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 'var(--space-xl)'
    }}><Demo placement="top-start" label="위 · 왼쪽" content="위쪽 왼쪽 정렬" buttonProps={{
        variant: 'ghost'
      }} /><Demo placement="start" label="아래 · 왼쪽" content="아래쪽 왼쪽 정렬" buttonProps={{
        variant: 'ghost'
      }} /><Demo placement="end" label="아래 · 오른쪽" content="아래쪽 오른쪽 정렬" buttonProps={{
        variant: 'ghost'
      }} /></div></div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '역색',
  render: () => <div className="tooltip_demo-stage"><Demo inverse label="역색 Tooltip" content="어두운 배경의 말풍선입니다." buttonProps={{
      variant: 'ghost'
    }} /></div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '비활성 트리거',
  render: () => <div className="tooltip_demo-stage"><Demo content="필수 항목을 모두 입력해야 제출할 수 있습니다." triggerContent={<span tabIndex={0}><Button variant="filled" color="primary" label="제출 불가" disabled /></span>} /></div>
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '화살표 기준',
  render: () => <div className="tooltip_demo-stage"><p className="form_field-hint">기준 비교</p><div className="tooltip_row"><ArrowDemo arrowAnchor="content" content="패널이 트리거보다 넓을 때 화살표는 말풍선 패딩 기준입니다." /><ArrowDemo arrowAnchor="target" content="패널이 트리거보다 넓을 때 화살표가 트리거 중앙을 가리킵니다." /></div><p className="form_field-hint" style={{
      marginTop: 'var(--space-lg)'
    }}>target — 좌 · 가운데 · 우</p><div className="tooltip_row"><ArrowDemo arrowAnchor="target" arrowTargetAlign="left" content="트리거 왼쪽을 가리킵니다." /><ArrowDemo arrowAnchor="target" content="트리거 가운데를 가리킵니다." /><ArrowDemo arrowAnchor="target" arrowTargetAlign="right" content="트리거 오른쪽을 가리킵니다." /></div><MixedRow align="center" title="가운데" /><MixedRow align="start" title="왼쪽" /><MixedRow align="end" title="오른쪽" /></div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '화살표 없음',
  render: () => <div className="tooltip_demo-stage"><Demo noArrow label="화살표 없음" content="화살표가 표시되지 않는 말풍선입니다." buttonProps={{
      variant: 'ghost'
    }} /></div>
}`,...F.parameters?.docs?.source}}},I=[`Basic`,`Slot`,`Open`,`Size`,`Offset`,`Inline`,`Trigger`,`Click`,`Placement`,`Inverse`,`Disabled`,`ArrowAnchor`,`NoArrow`]})))()}export{E as a,T as c,w as d,S as f,L as h,j as i,C as l,D as m,x as n,A as o,f as p,O as r,F as s,P as t,k as u};