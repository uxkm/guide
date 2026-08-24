import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";function r({as:e=`div`,size:t=``,fluid:n=!1,children:r=`Container`,className:o=``,...s}){let c=a.has(t)?t:``,l=[`container`,c&&`container_${c}`,n&&`container_fluid`,o].filter(Boolean).join(` `);return(0,i.jsx)(e,{className:l,"data-component":`Container`,...s,children:r})}var i,a;function o(){return(o=e((()=>{i=n(),a=new Set([``,`sm`,`md`,`lg`,`xl`]),r.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{as:{defaultValue:{value:`'div'`,computed:!1},required:!1},size:{defaultValue:{value:`''`,computed:!1},required:!1},fluid:{defaultValue:{value:`false`,computed:!1},required:!1},children:{defaultValue:{value:`'Container'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var s=t({Basic:()=>p,Fluid:()=>h,SemanticRoot:()=>g,Sizes:()=>m,__namedExportsOrder:()=>_,default:()=>u}),c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o(),c=n(),l=r,u={title:`레이아웃/Container`,component:l,parameters:{layout:`fullscreen`},args:{size:``,fluid:!1}},d=({children:e})=>(0,c.jsx)(`div`,{className:`btn-demo`,children:e}),f=({children:e})=>(0,c.jsx)(`div`,{className:`container_demo-fill`,children:e}),p={name:`기본`,render:()=>(0,c.jsx)(d,{children:(0,c.jsx)(l,{children:(0,c.jsx)(f,{children:`기본 Container · 최대 72rem`})})})},m={name:`최대 너비`,render:()=>(0,c.jsx)(d,{children:(0,c.jsxs)(`div`,{className:`container_demo-sizes`,children:[(0,c.jsx)(l,{size:`sm`,children:(0,c.jsx)(f,{children:`Small · 36rem`})}),(0,c.jsx)(l,{size:`md`,children:(0,c.jsx)(f,{children:`Medium · 48rem`})}),(0,c.jsx)(l,{size:`lg`,children:(0,c.jsx)(f,{children:`Large · 64rem`})}),(0,c.jsx)(l,{size:`xl`,children:(0,c.jsx)(f,{children:`Extra Large · 80rem`})})]})})},h={name:`Fluid`,render:()=>(0,c.jsx)(d,{children:(0,c.jsx)(l,{fluid:!0,children:(0,c.jsx)(f,{children:`Fluid · 최대 너비 제한 없음`})})})},g={name:`시맨틱 루트`,render:()=>(0,c.jsx)(d,{children:(0,c.jsx)(l,{as:`main`,size:`lg`,children:(0,c.jsx)(f,{children:`main 요소로 렌더링`})})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo><Container><Fill>기본 Container · 최대 72rem</Fill></Container></Demo>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '최대 너비',
  render: () => <Demo><div className="container_demo-sizes">
    <Container size="sm"><Fill>Small · 36rem</Fill></Container>
    <Container size="md"><Fill>Medium · 48rem</Fill></Container>
    <Container size="lg"><Fill>Large · 64rem</Fill></Container>
    <Container size="xl"><Fill>Extra Large · 80rem</Fill></Container>
  </div></Demo>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Fluid',
  render: () => <Demo><Container fluid><Fill>Fluid · 최대 너비 제한 없음</Fill></Container></Demo>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '시맨틱 루트',
  render: () => <Demo><Container as="main" size="lg"><Fill>main 요소로 렌더링</Fill></Container></Demo>
}`,...g.parameters?.docs?.source}}},_=[`Basic`,`Sizes`,`Fluid`,`SemanticRoot`]})))()}export{m as a,g as i,s as n,v as o,h as r,p as t};