import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{_ as n,g as r}from"./iframe-BkSPibU3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";function a({as:e=`div`,size:t=``,fluid:n=!1,children:r=`Container`,className:i=``,...a}){let c=s.has(t)?t:``,l=[`container`,c&&`container_${c}`,n&&`container_fluid`,i].filter(Boolean).join(` `);return(0,o.jsx)(e,{className:l,"data-component":`Container`,...a,children:r})}var o,s;function c(){return(c=e((()=>{o=i(),s=new Set([``,`sm`,`md`,`lg`,`xl`]),a.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{as:{defaultValue:{value:`'div'`,computed:!1},required:!1},size:{defaultValue:{value:`''`,computed:!1},required:!1},fluid:{defaultValue:{value:`false`,computed:!1},required:!1},children:{defaultValue:{value:`'Container'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var l=t({Basic:()=>v,Fluid:()=>b,Playground:()=>_,SemanticRoot:()=>x,Sizes:()=>y,__namedExportsOrder:()=>S,default:()=>p}),u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),c(),u=i(),d=a,f={"":`기본 · 72rem`,sm:`Small · 36rem`,md:`Medium · 48rem`,lg:`Large · 64rem`,xl:`Extra Large · 80rem`},p={title:`레이아웃/Container`,component:d,parameters:{layout:`fullscreen`},args:{as:`div`,size:``,fluid:!1,className:``,children:`Container`},argTypes:{...r,as:{control:`select`,options:[`div`,`section`,`main`,`article`,`aside`,`header`,`footer`,`nav`],description:`Container의 루트 요소`},size:{control:`select`,options:[``,`sm`,`md`,`lg`,`xl`],description:`최대 너비 단계`},fluid:{control:`boolean`,description:`최대 너비 제한 해제`},children:{control:`text`,description:`Container 내부 콘텐츠`},className:{control:`text`,description:`사용자 정의 클래스`}}},m=({children:e})=>(0,u.jsx)(`div`,{className:`btn-demo`,children:e}),h=({children:e})=>(0,u.jsx)(`div`,{className:`container_demo-fill`,children:e}),g=e=>(0,u.jsx)(m,{children:(0,u.jsx)(d,{...e,children:(0,u.jsx)(h,{children:e.children})})}),_={name:`Playground`,args:{children:`Controls로 속성을 조절해 보세요.`},render:e=>g(e)},v={name:`기본`,args:{children:`기본 Container · 최대 72rem`},render:e=>g(e)},y={name:`최대 너비`,args:{size:`sm`,children:`Controls에서 size를 변경해 보세요.`},render:e=>(0,u.jsx)(m,{children:(0,u.jsx)(`div`,{className:`container_demo-sizes`,children:[``,`sm`,`md`,`lg`,`xl`].map(t=>(0,u.jsx)(d,{as:e.as,size:t,fluid:e.fluid,className:e.className,children:(0,u.jsxs)(h,{children:[f[t],e.size===t?` · Controls 적용 중`:``]})},t||`default`))})})},b={name:`Fluid`,args:{fluid:!0,children:`Fluid · 최대 너비 제한 없음`},render:e=>g(e)},x={name:`시맨틱 루트`,args:{as:`main`,size:`lg`,children:`main 요소로 렌더링`},render:e=>g(e)},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: 'Controls로 속성을 조절해 보세요.'
  },
  render: args => renderWithFill(args)
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '기본',
  args: {
    children: '기본 Container · 최대 72rem'
  },
  render: args => renderWithFill(args)
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '최대 너비',
  args: {
    size: 'sm',
    children: 'Controls에서 size를 변경해 보세요.'
  },
  render: args => <Demo>
      <div className="container_demo-sizes">
        {(['', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Container key={size || 'default'} as={args.as} size={size} fluid={args.fluid} className={args.className}>
            <Fill>
              {SIZE_LABELS[size]}
              {args.size === size ? ' · Controls 적용 중' : ''}
            </Fill>
          </Container>)}
      </div>
    </Demo>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Fluid',
  args: {
    fluid: true,
    children: 'Fluid · 최대 너비 제한 없음'
  },
  render: args => renderWithFill(args)
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '시맨틱 루트',
  args: {
    as: 'main',
    size: 'lg',
    children: 'main 요소로 렌더링'
  },
  render: args => renderWithFill(args)
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Basic`,`Sizes`,`Fluid`,`SemanticRoot`]})))()}export{y as a,x as i,l as n,C as o,b as r,v as t};