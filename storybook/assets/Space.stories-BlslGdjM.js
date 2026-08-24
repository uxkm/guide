import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Button-Bdofg9ij.js";import{i as a,n as o,r as s,t as c}from"./Space-B9LKwA9P.js";var l=t({Align:()=>S,Basic:()=>v,Combo:()=>C,Gap:()=>b,Playground:()=>_,Vertical:()=>y,Wrap:()=>x,__namedExportsOrder:()=>w,default:()=>m}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{r(),a(),o(),u=n(),d=i,f=s,p=c,m={title:`레이아웃/Space`,component:p,parameters:{layout:`fullscreen`},args:{vertical:!1,wrap:!1,block:!1,gap:`md`,align:``,justify:``}},h=({children:e})=>(0,u.jsx)(`div`,{className:`btn-demo`,children:e}),g=(e=`항목`)=>[1,2,3].map(t=>(0,u.jsxs)(`div`,{className:`space_demo-box`,children:[e,` `,t]},t)),_={name:`Playground`,render:e=>(0,u.jsx)(h,{children:(0,u.jsx)(p,{...e,children:g()})})},v={name:`기본`,render:()=>(0,u.jsx)(h,{children:(0,u.jsx)(p,{children:g()})})},y={name:`세로`,render:()=>(0,u.jsx)(h,{children:(0,u.jsx)(p,{vertical:!0,children:g()})})},b={name:`간격`,render:()=>(0,u.jsxs)(h,{children:[(0,u.jsx)(p,{gap:`xs`,children:g(`xs`)}),(0,u.jsx)(p,{gap:`sm`,children:g(`sm`)}),(0,u.jsx)(p,{children:g(`md`)}),(0,u.jsx)(p,{gap:`lg`,children:g(`lg`)}),(0,u.jsx)(p,{gap:`xl`,children:g(`xl`)})]})},x={name:`줄바꿈`,render:()=>(0,u.jsx)(h,{children:(0,u.jsx)(p,{block:!0,wrap:!0,children:[1,2,3,4,5].map(e=>(0,u.jsxs)(`div`,{className:`space_demo-box`,style:{minWidth:`8rem`},children:[`항목 `,e]},e))})})},S={name:`정렬`,render:()=>(0,u.jsxs)(h,{children:[(0,u.jsxs)(p,{block:!0,align:`center`,style:{minHeight:`5rem`,background:`var(--color-surface-raised)`,borderRadius:`var(--radius-sm)`,padding:`var(--space-md)`},children:[(0,u.jsx)(`div`,{className:`space_demo-box`,children:`align center`}),(0,u.jsx)(`div`,{className:`space_demo-box`,style:{paddingBlock:`var(--space-xl)`},children:`높이 다름`}),(0,u.jsx)(`div`,{className:`space_demo-box`,children:`align center`})]}),(0,u.jsxs)(p,{block:!0,justify:`between`,style:{background:`var(--color-surface-raised)`,borderRadius:`var(--radius-sm)`,padding:`var(--space-md)`},children:[(0,u.jsx)(`div`,{className:`space_demo-box`,children:`justify between`}),(0,u.jsx)(`div`,{className:`space_demo-box`,children:`양 끝`})]})]})},C={name:`조합 예시`,render:()=>(0,u.jsx)(h,{children:(0,u.jsxs)(p,{children:[(0,u.jsx)(d,{variant:`outline`,label:`취소`}),(0,u.jsx)(d,{variant:`filled`,color:`primary`,label:`저장`}),(0,u.jsx)(f,{vertical:!0}),(0,u.jsx)(d,{variant:`text`,label:`더보기`})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Demo><Space {...args}>{boxes()}</Space></Demo>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo><Space>{boxes()}</Space></Demo>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '세로',
  render: () => <Demo><Space vertical>{boxes()}</Space></Demo>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '간격',
  render: () => <Demo><Space gap="xs">{boxes('xs')}</Space><Space gap="sm">{boxes('sm')}</Space><Space>{boxes('md')}</Space><Space gap="lg">{boxes('lg')}</Space><Space gap="xl">{boxes('xl')}</Space></Demo>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '줄바꿈',
  render: () => <Demo><Space block wrap>{[1, 2, 3, 4, 5].map(number => <div className="space_demo-box" style={{
        minWidth: '8rem'
      }} key={number}>항목 {number}</div>)}</Space></Demo>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '정렬',
  render: () => <Demo><Space block align="center" style={{
      minHeight: '5rem',
      background: 'var(--color-surface-raised)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-md)'
    }}><div className="space_demo-box">align center</div><div className="space_demo-box" style={{
        paddingBlock: 'var(--space-xl)'
      }}>높이 다름</div><div className="space_demo-box">align center</div></Space><Space block justify="between" style={{
      background: 'var(--color-surface-raised)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-md)'
    }}><div className="space_demo-box">justify between</div><div className="space_demo-box">양 끝</div></Space></Demo>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '조합 예시',
  render: () => <Demo><Space><Button variant="outline" label="취소" /><Button variant="filled" color="primary" label="저장" /><Divider vertical /><Button variant="text" label="더보기" /></Space></Demo>
}`,...C.parameters?.docs?.source}}},w=[`Playground`,`Basic`,`Vertical`,`Gap`,`Wrap`,`Align`,`Combo`]})))()}export{_ as a,x as c,b as i,T as l,v as n,l as o,C as r,y as s,S as t};