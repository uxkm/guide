import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{T as n,_ as r,g as i,o as a,s as o}from"./iframe-BkSPibU3.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{r as c,t as l}from"./Icon-CS3T14bP.js";import{n as u,r as d,t as f}from"./Tag-BYgDblaz.js";var p=t({Add:()=>N,Basic:()=>T,Checkable:()=>M,Closable:()=>j,Disabled:()=>F,Group:()=>I,Link:()=>P,Outline:()=>D,Playground:()=>w,Round:()=>k,Sizes:()=>O,Solid:()=>E,WithIcon:()=>A,__namedExportsOrder:()=>L,default:()=>b});function m(e){let t=typeof e.href==`string`&&e.href?e.href:void 0,n=typeof e.closeLabel==`string`&&e.closeLabel?e.closeLabel:void 0;return{label:typeof e.label==`string`?e.label:void 0,color:e.color,variant:e.variant,size:e.size,round:e.round===!0,checkable:e.checkable===!0,add:e.add===!0,closable:e.closable===!0,selected:e.selected===!0,disabled:e.disabled===!0,ripple:e.ripple!==!1,...t?{href:t}:{},...n?{closeLabel:n}:{}}}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{c(),d(),r(),h=s(),g=f,_=u,v=l,y=[`default`,`primary`,`success`,`warning`,`danger`,`info`],b={title:`데이터 표시/Tag`,component:g,parameters:{layout:`fullscreen`,controls:{include:[`label`,`color`,`variant`,`size`,`round`,`checkable`,`add`,`closable`,`selected`,`disabled`,`href`,`ripple`,`closeLabel`]},docs:{extractArgTypes:()=>({})}},args:{label:`Tag`,color:`primary`,variant:`filled`,size:`md`,round:!1,checkable:!1,add:!1,closable:!1,selected:!1,disabled:!1,href:``,ripple:!0,closeLabel:``},argTypes:{...i,label:{...n,description:`태그 텍스트`},color:{control:`select`,options:[...y],type:`string`,description:`색상`},variant:{control:`select`,options:[`filled`,`solid`,`outline`,`borderless`],type:`string`,description:`스킨 변형`},size:{control:`select`,options:[`sm`,`md`,`lg`],type:`string`,description:`크기`},round:{...a,description:`둥근 pill 형태`},checkable:{...a,description:`선택 가능`},add:{...a,description:`추가(+) 트리거`},closable:{...a,description:`닫기 버튼 표시`},selected:{...a,description:`선택된 상태`},disabled:{...a,description:`비활성 상태`},href:{...n,description:`링크 주소`},ripple:{...a,description:`클릭 리플 효과`},closeLabel:{...o,description:`닫기 버튼 접근성 이름`},icon:{table:{disable:!0}},onClick:{table:{disable:!0}},onClose:{table:{disable:!0}}}},x=({children:e})=>(0,h.jsx)(`div`,{className:`btn-demo`,children:e}),S=({children:e,tight:t=!1})=>(0,h.jsx)(_,{tight:t,children:e}),C=(e=`filled`)=>(0,h.jsx)(S,{children:y.map(t=>(0,h.jsx)(g,{variant:e,color:t,label:t[0].toUpperCase()+t.slice(1)},t))}),w={name:`Playground`,render:e=>(0,h.jsx)(x,{children:(0,h.jsx)(g,{...m(e)})})},T={name:`기본`,render:()=>(0,h.jsx)(x,{children:C()})},E={name:`솔리드`,render:()=>(0,h.jsx)(x,{children:C(`solid`)})},D={name:`아웃라인`,render:()=>(0,h.jsx)(x,{children:C(`outline`)})},O={name:`크기`,render:()=>(0,h.jsxs)(x,{children:[(0,h.jsxs)(S,{tight:!0,children:[(0,h.jsx)(g,{size:`sm`,label:`Small`}),(0,h.jsx)(g,{label:`Medium`}),(0,h.jsx)(g,{size:`lg`,label:`Large`})]}),(0,h.jsxs)(S,{tight:!0,children:[(0,h.jsx)(g,{size:`sm`,variant:`outline`,color:`success`,label:`Small`}),(0,h.jsx)(g,{variant:`outline`,color:`success`,label:`Medium`}),(0,h.jsx)(g,{size:`lg`,variant:`outline`,color:`success`,label:`Large`})]}),(0,h.jsxs)(S,{tight:!0,children:[(0,h.jsx)(g,{size:`sm`,variant:`solid`,color:`danger`,label:`Small`}),(0,h.jsx)(g,{variant:`solid`,color:`danger`,label:`Medium`}),(0,h.jsx)(g,{size:`lg`,variant:`solid`,color:`danger`,label:`Large`})]})]})},k={name:`둥근`,render:()=>(0,h.jsx)(x,{children:(0,h.jsxs)(S,{children:[(0,h.jsx)(g,{round:!0,label:`Filled`}),(0,h.jsx)(g,{round:!0,variant:`outline`,label:`Outline`}),(0,h.jsx)(g,{round:!0,variant:`solid`,label:`Solid`}),(0,h.jsx)(g,{round:!0,variant:`borderless`,color:`default`,label:`Borderless`})]})})},A={name:`아이콘`,render:()=>(0,h.jsx)(x,{children:(0,h.jsxs)(S,{children:[(0,h.jsx)(g,{label:`Design`,icon:(0,h.jsx)(v,{name:`star`})}),(0,h.jsx)(g,{variant:`outline`,color:`success`,label:`Verified`,icon:(0,h.jsx)(v,{name:`check`})}),(0,h.jsx)(g,{variant:`solid`,color:`danger`,label:`Error`,icon:(0,h.jsx)(v,{name:`close`})}),(0,h.jsx)(g,{size:`sm`,round:!0,color:`default`,label:`User`,icon:(0,h.jsx)(v,{name:`user`})})]})})},j={name:`닫기 가능`,render:()=>(0,h.jsxs)(x,{children:[(0,h.jsxs)(S,{tight:!0,children:[(0,h.jsx)(g,{closable:!0,label:`React`,closeLabel:`React 태그 제거`}),(0,h.jsx)(g,{closable:!0,variant:`outline`,color:`default`,label:`Svelte`}),(0,h.jsx)(g,{closable:!0,variant:`solid`,color:`danger`,label:`Deprecated`})]}),(0,h.jsx)(S,{tight:!0,children:(0,h.jsx)(g,{closable:!0,round:!0,color:`success`,label:`Frontend`,icon:(0,h.jsx)(v,{name:`star`})})})]})},M={name:`선택 가능`,render:()=>(0,h.jsxs)(x,{children:[(0,h.jsxs)(_,{ariaLabel:`카테고리 필터`,children:[(0,h.jsx)(g,{checkable:!0,selected:!0,color:`default`,label:`전체`}),(0,h.jsx)(g,{checkable:!0,color:`default`,label:`UI`}),(0,h.jsx)(g,{checkable:!0,color:`default`,label:`UX`}),(0,h.jsx)(g,{checkable:!0,color:`default`,label:`개발`})]}),(0,h.jsxs)(_,{ariaLabel:`상태 필터`,children:[(0,h.jsx)(g,{checkable:!0,round:!0,selected:!0,label:`진행 중`}),(0,h.jsx)(g,{checkable:!0,round:!0,selected:!0,color:`success`,label:`완료`}),(0,h.jsx)(g,{checkable:!0,round:!0,color:`warning`,label:`보류`}),(0,h.jsx)(g,{checkable:!0,round:!0,color:`danger`,label:`취소`})]})]})},N={name:`추가`,render:()=>(0,h.jsx)(x,{children:(0,h.jsxs)(S,{children:[(0,h.jsx)(g,{add:!0,round:!0,label:`태그 추가`,icon:(0,h.jsx)(v,{name:`plus`})}),(0,h.jsx)(g,{add:!0,size:`sm`,label:`+ New Tag`}),(0,h.jsx)(g,{add:!0,size:`lg`,round:!0,label:`+ 카테고리 추가`})]})})},P={name:`링크`,render:()=>(0,h.jsx)(x,{children:(0,h.jsxs)(S,{children:[(0,h.jsx)(g,{href:`#`,label:`문서 보기`}),(0,h.jsx)(g,{href:`#`,variant:`outline`,label:`가이드`}),(0,h.jsx)(g,{href:`#`,variant:`solid`,label:`바로가기`}),(0,h.jsx)(g,{href:`#`,round:!0,variant:`outline`,color:`success`,label:`외부 링크`,icon:(0,h.jsx)(v,{name:`external`})})]})})},F={name:`비활성`,render:()=>(0,h.jsx)(x,{children:(0,h.jsxs)(S,{children:[(0,h.jsx)(g,{disabled:!0,label:`Filled`}),(0,h.jsx)(g,{disabled:!0,variant:`outline`,color:`success`,label:`Outline`}),(0,h.jsx)(g,{disabled:!0,variant:`solid`,color:`danger`,label:`Solid`}),(0,h.jsx)(g,{disabled:!0,checkable:!0,selected:!0,color:`default`,label:`선택됨 (비활성)`}),(0,h.jsx)(g,{disabled:!0,add:!0,label:`태그 추가 (비활성)`})]})})},I={name:`그룹`,render:()=>(0,h.jsxs)(x,{children:[(0,h.jsxs)(S,{children:[(0,h.jsx)(g,{label:`HTML`}),(0,h.jsx)(g,{label:`CSS`}),(0,h.jsx)(g,{label:`JavaScript`}),(0,h.jsx)(g,{color:`default`,label:`TypeScript`}),(0,h.jsx)(g,{color:`success`,label:`SCSS`})]}),(0,h.jsxs)(S,{tight:!0,children:[(0,h.jsx)(g,{closable:!0,round:!0,label:`React`}),(0,h.jsx)(g,{closable:!0,round:!0,label:`Next.js`}),(0,h.jsx)(g,{add:!0,round:!0,size:`sm`,label:`+ 추가`})]})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Demo>
      <Tag {...tagPropsFromArgs(args)} />
    </Demo>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo>{colorRow()}</Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '솔리드',
  render: () => <Demo>{colorRow('solid')}</Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '아웃라인',
  render: () => <Demo>{colorRow('outline')}</Demo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <Demo>
      <Row tight>
        <Tag size="sm" label="Small" />
        <Tag label="Medium" />
        <Tag size="lg" label="Large" />
      </Row>
      <Row tight>
        <Tag size="sm" variant="outline" color="success" label="Small" />
        <Tag variant="outline" color="success" label="Medium" />
        <Tag size="lg" variant="outline" color="success" label="Large" />
      </Row>
      <Row tight>
        <Tag size="sm" variant="solid" color="danger" label="Small" />
        <Tag variant="solid" color="danger" label="Medium" />
        <Tag size="lg" variant="solid" color="danger" label="Large" />
      </Row>
    </Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '둥근',
  render: () => <Demo>
      <Row>
        <Tag round label="Filled" />
        <Tag round variant="outline" label="Outline" />
        <Tag round variant="solid" label="Solid" />
        <Tag round variant="borderless" color="default" label="Borderless" />
      </Row>
    </Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '아이콘',
  render: () => <Demo>
      <Row>
        <Tag label="Design" icon={<Icon name="star" />} />
        <Tag variant="outline" color="success" label="Verified" icon={<Icon name="check" />} />
        <Tag variant="solid" color="danger" label="Error" icon={<Icon name="close" />} />
        <Tag size="sm" round color="default" label="User" icon={<Icon name="user" />} />
      </Row>
    </Demo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '닫기 가능',
  render: () => <Demo>
      <Row tight>
        <Tag closable label="React" closeLabel="React 태그 제거" />
        <Tag closable variant="outline" color="default" label="Svelte" />
        <Tag closable variant="solid" color="danger" label="Deprecated" />
      </Row>
      <Row tight>
        <Tag closable round color="success" label="Frontend" icon={<Icon name="star" />} />
      </Row>
    </Demo>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '선택 가능',
  render: () => <Demo>
      <TagGroup ariaLabel="카테고리 필터">
        <Tag checkable selected color="default" label="전체" />
        <Tag checkable color="default" label="UI" />
        <Tag checkable color="default" label="UX" />
        <Tag checkable color="default" label="개발" />
      </TagGroup>
      <TagGroup ariaLabel="상태 필터">
        <Tag checkable round selected label="진행 중" />
        <Tag checkable round selected color="success" label="완료" />
        <Tag checkable round color="warning" label="보류" />
        <Tag checkable round color="danger" label="취소" />
      </TagGroup>
    </Demo>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '추가',
  render: () => <Demo>
      <Row>
        <Tag add round label="태그 추가" icon={<Icon name="plus" />} />
        <Tag add size="sm" label="+ New Tag" />
        <Tag add size="lg" round label="+ 카테고리 추가" />
      </Row>
    </Demo>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '링크',
  render: () => <Demo>
      <Row>
        <Tag href="#" label="문서 보기" />
        <Tag href="#" variant="outline" label="가이드" />
        <Tag href="#" variant="solid" label="바로가기" />
        <Tag href="#" round variant="outline" color="success" label="외부 링크" icon={<Icon name="external" />} />
      </Row>
    </Demo>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '비활성',
  render: () => <Demo>
      <Row>
        <Tag disabled label="Filled" />
        <Tag disabled variant="outline" color="success" label="Outline" />
        <Tag disabled variant="solid" color="danger" label="Solid" />
        <Tag disabled checkable selected color="default" label="선택됨 (비활성)" />
        <Tag disabled add label="태그 추가 (비활성)" />
      </Row>
    </Demo>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '그룹',
  render: () => <Demo>
      <Row>
        <Tag label="HTML" />
        <Tag label="CSS" />
        <Tag label="JavaScript" />
        <Tag color="default" label="TypeScript" />
        <Tag color="success" label="SCSS" />
      </Row>
      <Row tight>
        <Tag closable round label="React" />
        <Tag closable round label="Next.js" />
        <Tag add round size="sm" label="+ 추가" />
      </Row>
    </Demo>
}`,...I.parameters?.docs?.source}}},L=[`Playground`,`Basic`,`Solid`,`Outline`,`Sizes`,`Round`,`WithIcon`,`Closable`,`Checkable`,`Add`,`Link`,`Disabled`,`Group`]})))()}export{F as a,D as c,E as d,p as f,j as i,k as l,R as m,T as n,I as o,A as p,M as r,P as s,N as t,O as u};