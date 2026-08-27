import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./Badge-DnOgmC2a.js";import{n as a,t as o}from"./Table-B9IGiJIP.js";var s=t({Basic:()=>v,Bordered:()=>b,Combined:()=>C,Compact:()=>x,Hover:()=>S,StickyBoth:()=>A,StickyColumns:()=>k,StickyLeft:()=>O,StickyTop:()=>T,Striped:()=>y,__namedExportsOrder:()=>j,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),r(),c=n(),l=o,u=i,d={title:`데이터 표시/Table`,component:l,parameters:{layout:`fullscreen`}},f=({children:e})=>(0,c.jsx)(`div`,{className:`btn-demo`,children:e}),p=[[`홍길동`,`Frontend`,`활성`],[`김철수`,`Backend`,`활성`],[`이영희`,`Design`,`휴가`]],m=[[`Basic`,`₩12,000`,`120`],[`Pro`,`₩29,000`,`84`],[`Enterprise`,`문의`,`12`]],h=[{width:`9rem`,nowrap:!0},{minWidth:`10rem`},{width:`7rem`,nowrap:!0}],g=({data:e=p,badge:t=!1})=>(0,c.jsx)(c.Fragment,{children:e.map(e=>(0,c.jsx)(`tr`,{children:e.map((e,n)=>(0,c.jsx)(`td`,{children:t&&n===2?(0,c.jsx)(u,{color:e===`활성`?`success`:`warning`,label:e}):e},e))},e[0]))}),_=({data:e=p,badge:t=!1})=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`col`,children:`이름`}),(0,c.jsx)(`th`,{scope:`col`,children:`구분`}),(0,c.jsx)(`th`,{scope:`col`,children:`상태`})]})}),(0,c.jsx)(`tbody`,{children:(0,c.jsx)(g,{data:e,badge:t})})]}),v={name:`기본`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{columns:h,children:(0,c.jsx)(_,{badge:!0})})})},y={name:`줄무늬`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{striped:!0,columns:h,children:(0,c.jsx)(_,{data:m})})})},b={name:`테두리`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{bordered:!0,children:(0,c.jsx)(_,{})})})},x={name:`컴팩트`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{compact:!0,columns:h,children:(0,c.jsx)(_,{data:m})})})},S={name:`호버`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{hover:!0,columns:h,children:(0,c.jsx)(_,{badge:!0})})})},C={name:`조합`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{bordered:!0,compact:!0,hover:!0,children:(0,c.jsx)(_,{})})})},w=Array.from({length:12},(e,t)=>[`사용자 ${t+1}`,t%2?`Design`:`Development`,t%3?`활성`:`대기`]),T={name:`상단 고정`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{scroll:!0,scrollMaxHeight:`14rem`,stickyTop:!0,bordered:!0,compact:!0,children:(0,c.jsx)(_,{data:w})})})},E=[{width:`8rem`,nowrap:!0},{width:`10rem`,nowrap:!0},{width:`10rem`},{width:`10rem`},{width:`10rem`}],D=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`이름`}),(0,c.jsx)(`th`,{children:`부서`}),(0,c.jsx)(`th`,{children:`1월`}),(0,c.jsx)(`th`,{children:`2월`}),(0,c.jsx)(`th`,{children:`3월`})]})}),(0,c.jsx)(`tbody`,{children:w.slice(0,6).map((e,t)=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:e[0]}),(0,c.jsx)(`td`,{children:e[1]}),(0,c.jsx)(`td`,{children:120+t}),(0,c.jsx)(`td`,{children:132+t}),(0,c.jsx)(`td`,{children:145+t})]},e[0]))})]}),O={name:`좌측 고정`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{scroll:!0,stickyLeft:!0,columns:E,style:{minWidth:`48rem`},children:(0,c.jsx)(D,{})})})},k={name:`다중 열 고정`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{scroll:!0,stickyLeft:!0,stickyCols:2,stickyLeftOffsets:{2:`8rem`},columns:E,style:{minWidth:`48rem`},children:(0,c.jsx)(D,{})})})},A={name:`상단·좌측 고정`,render:()=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{scroll:!0,scrollMaxHeight:`14rem`,stickyTop:!0,stickyLeft:!0,stickyCols:2,stickyLeftOffsets:{2:`8rem`},bordered:!0,compact:!0,columns:E,style:{minWidth:`48rem`},children:(0,c.jsx)(D,{})})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo><Table columns={columns}><Body badge /></Table></Demo>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '줄무늬',
  render: () => <Demo><Table striped columns={columns}><Body data={products} /></Table></Demo>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '테두리',
  render: () => <Demo><Table bordered><Body /></Table></Demo>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '컴팩트',
  render: () => <Demo><Table compact columns={columns}><Body data={products} /></Table></Demo>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '호버',
  render: () => <Demo><Table hover columns={columns}><Body badge /></Table></Demo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '조합',
  render: () => <Demo><Table bordered compact hover><Body /></Table></Demo>
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '상단 고정',
  render: () => <Demo><Table scroll scrollMaxHeight="14rem" stickyTop bordered compact><Body data={longRows} /></Table></Demo>
}`,...T.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '좌측 고정',
  render: () => <Demo><Table scroll stickyLeft columns={wideColumns} style={{
      minWidth: '48rem'
    }}><WideBody /></Table></Demo>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '다중 열 고정',
  render: () => <Demo><Table scroll stickyLeft stickyCols={2} stickyLeftOffsets={{
      2: '8rem'
    }} columns={wideColumns} style={{
      minWidth: '48rem'
    }}><WideBody /></Table></Demo>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '상단·좌측 고정',
  render: () => <Demo><Table scroll scrollMaxHeight="14rem" stickyTop stickyLeft stickyCols={2} stickyLeftOffsets={{
      2: '8rem'
    }} bordered compact columns={wideColumns} style={{
      minWidth: '48rem'
    }}><WideBody /></Table></Demo>
}`,...A.parameters?.docs?.source}}},j=[`Basic`,`Striped`,`Bordered`,`Compact`,`Hover`,`Combined`,`StickyTop`,`StickyLeft`,`StickyColumns`,`StickyBoth`]})))()}export{S as a,O as c,s as d,M as f,x as i,T as l,b as n,A as o,C as r,k as s,v as t,y as u};