import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-BkSPibU3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{r as a,t as o}from"./Badge-DnOgmC2a.js";function s(e={}){return[`width`,`minWidth`,`maxWidth`].reduce((t,n)=>(e[n]!=null&&(t[n]=f(e[n])),t),{})}function c(e){return e.reduce((e,t,n)=>{let r=n+1;return t.padding!=null&&(e[`--table-col-${r}-padding`]=t.padding),t.nowrap&&(e[`--table-col-${r}-white-space`]=`nowrap`),e},{})}function l({children:e,bordered:t=!1,striped:n=!1,compact:r=!1,hover:i=!1,wrap:a=!0,scroll:o=!1,scrollMaxHeight:l,stickyTop:f=!1,stickyLeft:p=!1,stickyCols:m=1,stickyLeftOffsets:h={},columns:g=[],className:_=``,style:v,...y}){let b=Array.isArray(g)&&g.length>0,x=d.has(m)?m:1,S=[`table`,t&&`table_bordered`,n&&`table_striped`,r&&`table_compact`,i&&`table_hover`,b&&`table_columns`,f&&`table_sticky-top`,p&&`table_sticky-left`,p&&`table_sticky-cols-${x}`].filter(Boolean).join(` `),C={...c(b?g:[])};Object.entries(h??{}).forEach(([e,t])=>{t!=null&&t!==``&&(C[`--table-sticky-left-${e}`]=t)});let w=b?(0,u.jsx)(`colgroup`,{children:g.map((e,t)=>(0,u.jsx)(`col`,{style:s(e)},t))}):null;if(!a)return(0,u.jsxs)(`table`,{...y,className:[S,_].filter(Boolean).join(` `),"data-component":`Table`,style:{...C,...v},children:[w,e]});let T={...v};return l!=null&&l!==``&&(T[`--table-scroll-max-height`]=l),(0,u.jsx)(`div`,{...y,className:[`table_wrap`,o&&`table_wrap-scroll`,_].filter(Boolean).join(` `),"data-component":`Table`,style:T,tabIndex:o?0:y.tabIndex,children:(0,u.jsxs)(`table`,{className:S,style:C,children:[w,e]})})}var u,d,f;function p(){return(p=e((()=>{u=i(),d=new Set([1,2,3,4]),f=e=>typeof e==`number`?`${e}rem`:e,l.__docgenInfo={description:``,methods:[],displayName:`Table`,props:{bordered:{defaultValue:{value:`false`,computed:!1},required:!1},striped:{defaultValue:{value:`false`,computed:!1},required:!1},compact:{defaultValue:{value:`false`,computed:!1},required:!1},hover:{defaultValue:{value:`false`,computed:!1},required:!1},wrap:{defaultValue:{value:`true`,computed:!1},required:!1},scroll:{defaultValue:{value:`false`,computed:!1},required:!1},stickyTop:{defaultValue:{value:`false`,computed:!1},required:!1},stickyLeft:{defaultValue:{value:`false`,computed:!1},required:!1},stickyCols:{defaultValue:{value:`1`,computed:!1},required:!1},stickyLeftOffsets:{defaultValue:{value:`{}`,computed:!1},required:!1},columns:{defaultValue:{value:`[]`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var m=t({Basic:()=>k,Bordered:()=>j,Combined:()=>P,Compact:()=>M,Hover:()=>N,Playground:()=>O,StickyBoth:()=>R,StickyColumns:()=>L,StickyLeft:()=>I,StickyTop:()=>F,Striped:()=>A,__namedExportsOrder:()=>z,default:()=>E}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{n(),p(),a(),h=i(),g=l,_=o,v=[[`홍길동`,`Frontend`,`활성`],[`김철수`,`Backend`,`활성`],[`이영희`,`Design`,`휴가`]],y=[[`Basic`,`₩12,000`,`120`],[`Pro`,`₩29,000`,`84`],[`Enterprise`,`문의`,`12`]],b=[{width:`9rem`,nowrap:!0},{minWidth:`10rem`},{width:`7rem`,nowrap:!0}],x=Array.from({length:12},(e,t)=>[`사용자 ${t+1}`,t%2?`Design`:`Development`,t%3?`활성`:`대기`]),S=[{width:`8rem`,nowrap:!0},{width:`10rem`,nowrap:!0},{width:`10rem`},{width:`10rem`},{width:`10rem`}],C=({data:e=v,badge:t=!1})=>(0,h.jsx)(h.Fragment,{children:e.map(e=>(0,h.jsx)(`tr`,{children:e.map((e,n)=>(0,h.jsx)(`td`,{children:t&&n===2?(0,h.jsx)(_,{color:e===`활성`?`success`:`warning`,label:e}):e},e))},e[0]))}),w=({data:e=v,badge:t=!1})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{scope:`col`,children:`이름`}),(0,h.jsx)(`th`,{scope:`col`,children:`구분`}),(0,h.jsx)(`th`,{scope:`col`,children:`상태`})]})}),(0,h.jsx)(`tbody`,{children:(0,h.jsx)(C,{data:e,badge:t})})]}),T=()=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{children:`이름`}),(0,h.jsx)(`th`,{children:`부서`}),(0,h.jsx)(`th`,{children:`1월`}),(0,h.jsx)(`th`,{children:`2월`}),(0,h.jsx)(`th`,{children:`3월`})]})}),(0,h.jsx)(`tbody`,{children:x.slice(0,6).map((e,t)=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:e[0]}),(0,h.jsx)(`td`,{children:e[1]}),(0,h.jsx)(`td`,{children:120+t}),(0,h.jsx)(`td`,{children:132+t}),(0,h.jsx)(`td`,{children:145+t})]},e[0]))})]}),E={title:`데이터 표시/Table`,component:g,parameters:{layout:`fullscreen`},args:{bordered:!1,striped:!1,compact:!1,hover:!1,wrap:!0,scroll:!1,scrollMaxHeight:``,stickyTop:!1,stickyLeft:!1,stickyCols:1,className:``},argTypes:{...r,bordered:{control:`boolean`,description:`셀 테두리 표시`},striped:{control:`boolean`,description:`줄무늬 행 변형`},compact:{control:`boolean`,description:`조밀한 패딩`},hover:{control:`boolean`,description:`행 호버 강조`},wrap:{control:`boolean`,description:`스크롤용 wrapper 사용`},scroll:{control:`boolean`,description:`wrapper 스크롤 활성화`},scrollMaxHeight:{control:`text`,description:`세로 스크롤 최대 높이`},stickyTop:{control:`boolean`,description:`헤더 행 고정`},stickyLeft:{control:`boolean`,description:`왼쪽 열 고정`},stickyCols:{control:{type:`number`,min:1,max:4,step:1},description:`좌측 고정 열 개수(1~4)`},className:{control:`text`,description:`사용자 정의 클래스`},children:{table:{disable:!0},description:`thead · tbody 콘텐츠`},columns:{table:{disable:!0},description:`열 너비·패딩 설정`},stickyLeftOffsets:{table:{disable:!0},description:`고정 열별 left 오프셋`},style:{table:{disable:!0}}}},D=({children:e})=>(0,h.jsx)(`div`,{className:`btn-demo`,children:e}),O={name:`Playground`,args:{bordered:!0,hover:!0},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,columns:b,children:(0,h.jsx)(w,{badge:!0})})})},k={name:`기본`,render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,columns:b,children:(0,h.jsx)(w,{badge:!0})})})},A={name:`줄무늬`,args:{striped:!0},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,columns:b,children:(0,h.jsx)(w,{data:y})})})},j={name:`테두리`,args:{bordered:!0},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,children:(0,h.jsx)(w,{})})})},M={name:`컴팩트`,args:{compact:!0},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,columns:b,children:(0,h.jsx)(w,{data:y})})})},N={name:`호버`,args:{hover:!0},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,columns:b,children:(0,h.jsx)(w,{badge:!0})})})},P={name:`조합`,args:{bordered:!0,compact:!0,hover:!0},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,children:(0,h.jsx)(w,{})})})},F={name:`상단 고정`,args:{scroll:!0,scrollMaxHeight:`14rem`,stickyTop:!0,bordered:!0,compact:!0},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,children:(0,h.jsx)(w,{data:x})})})},I={name:`좌측 고정`,args:{scroll:!0,stickyLeft:!0},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,columns:S,style:{minWidth:`48rem`},children:(0,h.jsx)(T,{})})})},L={name:`다중 열 고정`,args:{scroll:!0,stickyLeft:!0,stickyCols:2},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,stickyLeftOffsets:{2:`8rem`},columns:S,style:{minWidth:`48rem`},children:(0,h.jsx)(T,{})})})},R={name:`상단·좌측 고정`,args:{scroll:!0,scrollMaxHeight:`14rem`,stickyTop:!0,stickyLeft:!0,stickyCols:2,bordered:!0,compact:!0},render:e=>(0,h.jsx)(D,{children:(0,h.jsx)(g,{...e,stickyLeftOffsets:{2:`8rem`},columns:S,style:{minWidth:`48rem`},children:(0,h.jsx)(T,{})})})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    bordered: true,
    hover: true
  },
  render: args => <Demo>
      <Table {...args} columns={columns}>
        <Body badge />
      </Table>
    </Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Demo>
      <Table {...args} columns={columns}>
        <Body badge />
      </Table>
    </Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '줄무늬',
  args: {
    striped: true
  },
  render: args => <Demo>
      <Table {...args} columns={columns}>
        <Body data={products} />
      </Table>
    </Demo>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '테두리',
  args: {
    bordered: true
  },
  render: args => <Demo>
      <Table {...args}>
        <Body />
      </Table>
    </Demo>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '컴팩트',
  args: {
    compact: true
  },
  render: args => <Demo>
      <Table {...args} columns={columns}>
        <Body data={products} />
      </Table>
    </Demo>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '호버',
  args: {
    hover: true
  },
  render: args => <Demo>
      <Table {...args} columns={columns}>
        <Body badge />
      </Table>
    </Demo>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '조합',
  args: {
    bordered: true,
    compact: true,
    hover: true
  },
  render: args => <Demo>
      <Table {...args}>
        <Body />
      </Table>
    </Demo>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '상단 고정',
  args: {
    scroll: true,
    scrollMaxHeight: '14rem',
    stickyTop: true,
    bordered: true,
    compact: true
  },
  render: args => <Demo>
      <Table {...args}>
        <Body data={longRows} />
      </Table>
    </Demo>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '좌측 고정',
  args: {
    scroll: true,
    stickyLeft: true
  },
  render: args => <Demo>
      <Table {...args} columns={wideColumns} style={{
      minWidth: '48rem'
    }}>
        <WideBody />
      </Table>
    </Demo>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '다중 열 고정',
  args: {
    scroll: true,
    stickyLeft: true,
    stickyCols: 2
  },
  render: args => <Demo>
      <Table {...args} stickyLeftOffsets={{
      2: '8rem'
    }} columns={wideColumns} style={{
      minWidth: '48rem'
    }}>
        <WideBody />
      </Table>
    </Demo>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '상단·좌측 고정',
  args: {
    scroll: true,
    scrollMaxHeight: '14rem',
    stickyTop: true,
    stickyLeft: true,
    stickyCols: 2,
    bordered: true,
    compact: true
  },
  render: args => <Demo>
      <Table {...args} stickyLeftOffsets={{
      2: '8rem'
    }} columns={wideColumns} style={{
      minWidth: '48rem'
    }}>
        <WideBody />
      </Table>
    </Demo>
}`,...R.parameters?.docs?.source}}},z=[`Playground`,`Basic`,`Striped`,`Bordered`,`Compact`,`Hover`,`Combined`,`StickyTop`,`StickyLeft`,`StickyColumns`,`StickyBoth`]})))()}export{N as a,I as c,m as d,B as f,M as i,F as l,j as n,R as o,P as r,L as s,k as t,A as u};