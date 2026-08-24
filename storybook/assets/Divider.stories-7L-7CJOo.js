import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,r as a,t as o}from"./Space-B9LKwA9P.js";var s=t({Basic:()=>m,Dashed:()=>h,Orient:()=>_,Playground:()=>p,Text:()=>g,Vertical:()=>v,__namedExportsOrder:()=>y,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),i(),c=n(),l=a,u=o,d={title:`레이아웃/Divider`,component:l,parameters:{layout:`fullscreen`},args:{dashed:!1,plain:!1,vertical:!1,orient:``,label:`라벨`,tag:`auto`}},f=({children:e})=>(0,c.jsx)(`div`,{className:`btn-demo`,children:e}),p={name:`Playground`,render:e=>(0,c.jsx)(f,{children:(0,c.jsx)(l,{...e})})},m={name:`기본`,render:()=>(0,c.jsxs)(f,{children:[(0,c.jsx)(`p`,{children:`위 콘텐츠`}),(0,c.jsx)(l,{}),(0,c.jsx)(`p`,{children:`아래 콘텐츠`})]})},h={name:`점선`,render:()=>(0,c.jsxs)(f,{children:[(0,c.jsx)(`p`,{children:`위 콘텐츠`}),(0,c.jsx)(l,{dashed:!0}),(0,c.jsx)(`p`,{children:`아래 콘텐츠`})]})},g={name:`텍스트 레이블`,render:()=>(0,c.jsxs)(f,{children:[(0,c.jsx)(l,{label:`섹션 제목`}),(0,c.jsx)(l,{plain:!0,label:`보조 설명`})]})},_={name:`레이블 정렬`,render:()=>(0,c.jsxs)(f,{children:[(0,c.jsx)(l,{orient:`left`,label:`왼쪽`}),(0,c.jsx)(l,{label:`가운데`}),(0,c.jsx)(l,{orient:`right`,label:`오른쪽`})]})},v={name:`세로`,render:()=>(0,c.jsx)(f,{children:(0,c.jsxs)(u,{children:[(0,c.jsx)(`span`,{children:`항목 A`}),(0,c.jsx)(l,{vertical:!0}),(0,c.jsx)(`span`,{children:`항목 B`}),(0,c.jsx)(l,{vertical:!0,dashed:!0}),(0,c.jsx)(`span`,{children:`항목 C`})]})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Demo><Divider {...args} /></Demo>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo><p>위 콘텐츠</p><Divider /><p>아래 콘텐츠</p></Demo>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '점선',
  render: () => <Demo><p>위 콘텐츠</p><Divider dashed /><p>아래 콘텐츠</p></Demo>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '텍스트 레이블',
  render: () => <Demo><Divider label="섹션 제목" /><Divider plain label="보조 설명" /></Demo>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '레이블 정렬',
  render: () => <Demo><Divider orient="left" label="왼쪽" /><Divider label="가운데" /><Divider orient="right" label="오른쪽" /></Demo>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '세로',
  render: () => <Demo><Space><span>항목 A</span><Divider vertical /><span>항목 B</span><Divider vertical dashed /><span>항목 C</span></Space></Demo>
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Basic`,`Dashed`,`Text`,`Orient`,`Vertical`]})))()}export{p as a,b as c,_ as i,h as n,g as o,s as r,v as s,m as t};