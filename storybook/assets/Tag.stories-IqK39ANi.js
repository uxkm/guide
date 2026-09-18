import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{E as n,_ as r,g as i,o as a,s as o,v as s}from"./iframe-DA3cKKGZ.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{r as l,t as u}from"./Icon-CS3T14bP.js";import{n as d,r as f,t as p}from"./Tag-BYgDblaz.js";var m=t({Add:()=>P,Basic:()=>E,Checkable:()=>N,Closable:()=>M,Disabled:()=>I,Group:()=>L,Link:()=>F,Outline:()=>O,Playground:()=>T,Round:()=>A,Sizes:()=>k,Solid:()=>D,WithIcon:()=>j,__namedExportsOrder:()=>R,default:()=>x});function h(e){let t=typeof e.href==`string`&&e.href?e.href:void 0,n=typeof e.closeLabel==`string`&&e.closeLabel?e.closeLabel:void 0;return{label:typeof e.label==`string`?e.label:void 0,color:e.color,variant:e.variant,size:e.size,round:e.round===!0,checkable:e.checkable===!0,add:e.add===!0,closable:e.closable===!0,selected:e.selected===!0,disabled:e.disabled===!0,ripple:e.ripple!==!1,...t?{href:t}:{},...n?{closeLabel:n}:{}}}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{l(),f(),s(),g=c(),_=p,v=d,y=u,b=[`default`,`primary`,`success`,`warning`,`danger`,`info`],x={title:`데이터 표시/Tag`,component:_,parameters:{layout:`fullscreen`,controls:{include:[`label`,`color`,`variant`,`size`,`round`,`checkable`,`add`,`closable`,`selected`,`disabled`,`href`,`ripple`,`closeLabel`]},docs:{extractArgTypes:()=>({})}},args:{label:`Tag`,color:`primary`,variant:`filled`,size:`md`,round:!1,checkable:!1,add:!1,closable:!1,selected:!1,disabled:!1,href:``,ripple:!0,closeLabel:``},argTypes:{...r(`icon`,`onClick`,`onClose`),...i,label:{...n,description:`태그 텍스트`},color:{control:`select`,options:[...b],type:`string`,description:`색상`},variant:{control:`select`,options:[`filled`,`solid`,`outline`,`borderless`],type:`string`,description:`스킨 변형`},size:{control:`select`,options:[`sm`,`md`,`lg`],type:`string`,description:`크기`},round:{...a,description:`둥근 pill 형태`},checkable:{...a,description:`선택 가능`},add:{...a,description:`추가(+) 트리거`},closable:{...a,description:`닫기 버튼 표시`},selected:{...a,description:`선택된 상태`},disabled:{...a,description:`비활성 상태`},href:{...n,description:`링크 주소`},ripple:{...a,description:`클릭 리플 효과`},closeLabel:{...o,description:`닫기 버튼 접근성 이름`}}},S=({children:e})=>(0,g.jsx)(`div`,{className:`btn-demo`,children:e}),C=({children:e,tight:t=!1})=>(0,g.jsx)(v,{tight:t,children:e}),w=(e=`filled`)=>(0,g.jsx)(C,{children:b.map(t=>(0,g.jsx)(_,{variant:e,color:t,label:t[0].toUpperCase()+t.slice(1)},t))}),T={name:`Playground`,render:e=>(0,g.jsx)(S,{children:(0,g.jsx)(_,{...h(e)})})},E={name:`기본`,render:()=>(0,g.jsx)(S,{children:w()})},D={name:`솔리드`,render:()=>(0,g.jsx)(S,{children:w(`solid`)})},O={name:`아웃라인`,render:()=>(0,g.jsx)(S,{children:w(`outline`)})},k={name:`크기`,render:()=>(0,g.jsxs)(S,{children:[(0,g.jsxs)(C,{tight:!0,children:[(0,g.jsx)(_,{size:`sm`,label:`Small`}),(0,g.jsx)(_,{label:`Medium`}),(0,g.jsx)(_,{size:`lg`,label:`Large`})]}),(0,g.jsxs)(C,{tight:!0,children:[(0,g.jsx)(_,{size:`sm`,variant:`outline`,color:`success`,label:`Small`}),(0,g.jsx)(_,{variant:`outline`,color:`success`,label:`Medium`}),(0,g.jsx)(_,{size:`lg`,variant:`outline`,color:`success`,label:`Large`})]}),(0,g.jsxs)(C,{tight:!0,children:[(0,g.jsx)(_,{size:`sm`,variant:`solid`,color:`danger`,label:`Small`}),(0,g.jsx)(_,{variant:`solid`,color:`danger`,label:`Medium`}),(0,g.jsx)(_,{size:`lg`,variant:`solid`,color:`danger`,label:`Large`})]})]})},A={name:`둥근`,render:()=>(0,g.jsx)(S,{children:(0,g.jsxs)(C,{children:[(0,g.jsx)(_,{round:!0,label:`Filled`}),(0,g.jsx)(_,{round:!0,variant:`outline`,label:`Outline`}),(0,g.jsx)(_,{round:!0,variant:`solid`,label:`Solid`}),(0,g.jsx)(_,{round:!0,variant:`borderless`,color:`default`,label:`Borderless`})]})})},j={name:`아이콘`,render:()=>(0,g.jsx)(S,{children:(0,g.jsxs)(C,{children:[(0,g.jsx)(_,{label:`Design`,icon:(0,g.jsx)(y,{name:`star`})}),(0,g.jsx)(_,{variant:`outline`,color:`success`,label:`Verified`,icon:(0,g.jsx)(y,{name:`check`})}),(0,g.jsx)(_,{variant:`solid`,color:`danger`,label:`Error`,icon:(0,g.jsx)(y,{name:`close`})}),(0,g.jsx)(_,{size:`sm`,round:!0,color:`default`,label:`User`,icon:(0,g.jsx)(y,{name:`user`})})]})})},M={name:`닫기 가능`,render:()=>(0,g.jsxs)(S,{children:[(0,g.jsxs)(C,{tight:!0,children:[(0,g.jsx)(_,{closable:!0,label:`React`,closeLabel:`React 태그 제거`}),(0,g.jsx)(_,{closable:!0,variant:`outline`,color:`default`,label:`Svelte`}),(0,g.jsx)(_,{closable:!0,variant:`solid`,color:`danger`,label:`Deprecated`})]}),(0,g.jsx)(C,{tight:!0,children:(0,g.jsx)(_,{closable:!0,round:!0,color:`success`,label:`Frontend`,icon:(0,g.jsx)(y,{name:`star`})})})]})},N={name:`선택 가능`,render:()=>(0,g.jsxs)(S,{children:[(0,g.jsxs)(v,{ariaLabel:`카테고리 필터`,children:[(0,g.jsx)(_,{checkable:!0,selected:!0,color:`default`,label:`전체`}),(0,g.jsx)(_,{checkable:!0,color:`default`,label:`UI`}),(0,g.jsx)(_,{checkable:!0,color:`default`,label:`UX`}),(0,g.jsx)(_,{checkable:!0,color:`default`,label:`개발`})]}),(0,g.jsxs)(v,{ariaLabel:`상태 필터`,children:[(0,g.jsx)(_,{checkable:!0,round:!0,selected:!0,label:`진행 중`}),(0,g.jsx)(_,{checkable:!0,round:!0,selected:!0,color:`success`,label:`완료`}),(0,g.jsx)(_,{checkable:!0,round:!0,color:`warning`,label:`보류`}),(0,g.jsx)(_,{checkable:!0,round:!0,color:`danger`,label:`취소`})]})]})},P={name:`추가`,render:()=>(0,g.jsx)(S,{children:(0,g.jsxs)(C,{children:[(0,g.jsx)(_,{add:!0,round:!0,label:`태그 추가`,icon:(0,g.jsx)(y,{name:`plus`})}),(0,g.jsx)(_,{add:!0,size:`sm`,label:`+ New Tag`}),(0,g.jsx)(_,{add:!0,size:`lg`,round:!0,label:`+ 카테고리 추가`})]})})},F={name:`링크`,render:()=>(0,g.jsx)(S,{children:(0,g.jsxs)(C,{children:[(0,g.jsx)(_,{href:`#`,label:`문서 보기`}),(0,g.jsx)(_,{href:`#`,variant:`outline`,label:`가이드`}),(0,g.jsx)(_,{href:`#`,variant:`solid`,label:`바로가기`}),(0,g.jsx)(_,{href:`#`,round:!0,variant:`outline`,color:`success`,label:`외부 링크`,icon:(0,g.jsx)(y,{name:`external`})})]})})},I={name:`비활성`,render:()=>(0,g.jsx)(S,{children:(0,g.jsxs)(C,{children:[(0,g.jsx)(_,{disabled:!0,label:`Filled`}),(0,g.jsx)(_,{disabled:!0,variant:`outline`,color:`success`,label:`Outline`}),(0,g.jsx)(_,{disabled:!0,variant:`solid`,color:`danger`,label:`Solid`}),(0,g.jsx)(_,{disabled:!0,checkable:!0,selected:!0,color:`default`,label:`선택됨 (비활성)`}),(0,g.jsx)(_,{disabled:!0,add:!0,label:`태그 추가 (비활성)`})]})})},L={name:`그룹`,render:()=>(0,g.jsxs)(S,{children:[(0,g.jsxs)(C,{children:[(0,g.jsx)(_,{label:`HTML`}),(0,g.jsx)(_,{label:`CSS`}),(0,g.jsx)(_,{label:`JavaScript`}),(0,g.jsx)(_,{color:`default`,label:`TypeScript`}),(0,g.jsx)(_,{color:`success`,label:`SCSS`})]}),(0,g.jsxs)(C,{tight:!0,children:[(0,g.jsx)(_,{closable:!0,round:!0,label:`React`}),(0,g.jsx)(_,{closable:!0,round:!0,label:`Next.js`}),(0,g.jsx)(_,{add:!0,round:!0,size:`sm`,label:`+ 추가`})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Demo>
      <Tag {...tagPropsFromArgs(args)} />
    </Demo>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo>{colorRow()}</Demo>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '솔리드',
  render: () => <Demo>{colorRow('solid')}</Demo>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '아웃라인',
  render: () => <Demo>{colorRow('outline')}</Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '둥근',
  render: () => <Demo>
      <Row>
        <Tag round label="Filled" />
        <Tag round variant="outline" label="Outline" />
        <Tag round variant="solid" label="Solid" />
        <Tag round variant="borderless" color="default" label="Borderless" />
      </Row>
    </Demo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '아이콘',
  render: () => <Demo>
      <Row>
        <Tag label="Design" icon={<Icon name="star" />} />
        <Tag variant="outline" color="success" label="Verified" icon={<Icon name="check" />} />
        <Tag variant="solid" color="danger" label="Error" icon={<Icon name="close" />} />
        <Tag size="sm" round color="default" label="User" icon={<Icon name="user" />} />
      </Row>
    </Demo>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '추가',
  render: () => <Demo>
      <Row>
        <Tag add round label="태그 추가" icon={<Icon name="plus" />} />
        <Tag add size="sm" label="+ New Tag" />
        <Tag add size="lg" round label="+ 카테고리 추가" />
      </Row>
    </Demo>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '링크',
  render: () => <Demo>
      <Row>
        <Tag href="#" label="문서 보기" />
        <Tag href="#" variant="outline" label="가이드" />
        <Tag href="#" variant="solid" label="바로가기" />
        <Tag href="#" round variant="outline" color="success" label="외부 링크" icon={<Icon name="external" />} />
      </Row>
    </Demo>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Playground`,`Basic`,`Solid`,`Outline`,`Sizes`,`Round`,`WithIcon`,`Closable`,`Checkable`,`Add`,`Link`,`Disabled`,`Group`]})))()}export{I as a,O as c,D as d,m as f,M as i,A as l,z as m,E as n,L as o,j as p,N as r,F as s,P as t,k as u};