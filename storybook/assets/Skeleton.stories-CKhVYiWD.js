import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{F as n,_ as r,g as i}from"./iframe-BkSPibU3.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";function o(e){return e===!0?3:typeof e==`number`?Math.max(0,e):0}function s({active:e=!0,avatar:t=!1,paragraph:n=!1,round:r=!1,ariaLabel:i=`콘텐츠 로딩 중`,children:a,className:s=``,...d}){let f=o(n),p=n===!1?3:f,m=(0,c.useMemo)(()=>[`skeleton_group`,!e&&`skeleton_static`,s].filter(Boolean).join(` `),[e,s]),h=[`skeleton`,!e&&`skeleton_static`].filter(Boolean).join(` `);return(0,l.jsxs)(`div`,{...d,className:m,"data-component":`Skeleton`,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":i,children:[t?(0,l.jsxs)(`div`,{className:`skeleton_row`,children:[(0,l.jsx)(`span`,{className:`${h} skeleton_circle`,"aria-hidden":`true`}),f>0&&(0,l.jsx)(`div`,{className:`skeleton_row-body`,children:Array.from({length:f},(e,t)=>(0,l.jsx)(`span`,{className:[h,`skeleton_text`,u[t]||`skeleton_w-lg`].filter(Boolean).join(` `),"aria-hidden":`true`},t))})]}):r?(0,l.jsx)(`span`,{className:`${h} skeleton_circle`,"aria-hidden":`true`}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`span`,{className:`${h} skeleton_title`,"aria-hidden":`true`}),Array.from({length:p},(e,t)=>(0,l.jsx)(`span`,{className:[h,`skeleton_text`,u[t]].filter(Boolean).join(` `),"aria-hidden":`true`},t))]}),a]})}var c,l,u;function d(){return(d=e((()=>{c=n(),l=a(),u=[``,`skeleton_w-md`,`skeleton_w-sm`],s.__docgenInfo={description:``,methods:[],displayName:`Skeleton`,props:{active:{defaultValue:{value:`true`,computed:!1},required:!1},avatar:{defaultValue:{value:`false`,computed:!1},required:!1},paragraph:{defaultValue:{value:`false`,computed:!1},required:!1},round:{defaultValue:{value:`false`,computed:!1},required:!1},ariaLabel:{defaultValue:{value:`'콘텐츠 로딩 중'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var f=t({Basic:()=>_,CardDemo:()=>y,Playground:()=>g,Shape:()=>v,Static:()=>b,__namedExportsOrder:()=>x,default:()=>h}),p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),d(),p=a(),m=s,h={title:`피드백/Skeleton`,component:m,decorators:[e=>(0,p.jsx)(`div`,{className:`skeleton-story-demo`,children:(0,p.jsx)(e,{})})],parameters:{layout:`padded`},args:{active:!0,avatar:!1,paragraph:3,round:!1,ariaLabel:`콘텐츠 로딩 중`},argTypes:{...i,active:{control:`boolean`},avatar:{control:`boolean`},paragraph:{control:`number`},round:{control:`boolean`},ariaLabel:{control:`text`}}},g={name:`Playground`,render:e=>(0,p.jsx)(`div`,{className:`skeleton-content-demo`,children:(0,p.jsx)(m,{...e})})},_={name:`기본`,render:e=>(0,p.jsx)(`div`,{className:`skeleton-content-demo`,children:(0,p.jsx)(m,{...e,paragraph:3})})},v={name:`형태`,render:e=>(0,p.jsxs)(`div`,{className:`skeleton-shape-demo`,children:[(0,p.jsx)(m,{...e,avatar:!0,paragraph:0}),(0,p.jsx)(m,{round:!0})]})},y={name:`카드`,render:e=>(0,p.jsx)(`div`,{className:`card card_shadow skeleton-card-demo`,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":`카드 콘텐츠 로딩 중`,children:(0,p.jsx)(`div`,{className:`card_body`,children:(0,p.jsxs)(m,{...e,paragraph:0,ariaLabel:`카드 콘텐츠 로딩 중`,children:[(0,p.jsx)(`span`,{className:`skeleton skeleton_image`,"aria-hidden":`true`}),(0,p.jsx)(`span`,{className:`skeleton skeleton_title skeleton_w-md`,"aria-hidden":`true`}),(0,p.jsx)(`span`,{className:`skeleton skeleton_text`,"aria-hidden":`true`}),(0,p.jsx)(`span`,{className:`skeleton skeleton_text skeleton_w-lg`,"aria-hidden":`true`}),(0,p.jsxs)(`div`,{className:`skeleton_row skeleton-card-actions`,children:[(0,p.jsx)(`span`,{className:`skeleton skeleton_button`,"aria-hidden":`true`}),(0,p.jsx)(`span`,{className:`skeleton skeleton_button skeleton-card-button-short`,"aria-hidden":`true`})]})]})})})},b={name:`정적`,render:e=>(0,p.jsx)(`div`,{className:`skeleton-content-demo`,children:(0,p.jsx)(m,{...e,active:!1,paragraph:3})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div className="skeleton-content-demo"><Skeleton {...args} /></div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <div className="skeleton-content-demo"><Skeleton {...args} paragraph={3} /></div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '형태',
  render: args => <div className="skeleton-shape-demo">
      <Skeleton {...args} avatar paragraph={0} />
      <Skeleton round />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '카드',
  render: args => <div className="card card_shadow skeleton-card-demo" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
      <div className="card_body">
        <Skeleton {...args} paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
          <span className="skeleton skeleton_image" aria-hidden="true" />
          <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
          <span className="skeleton skeleton_text" aria-hidden="true" />
          <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
          <div className="skeleton_row skeleton-card-actions">
            <span className="skeleton skeleton_button" aria-hidden="true" />
            <span className="skeleton skeleton_button skeleton-card-button-short" aria-hidden="true" />
          </div>
        </Skeleton>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '정적',
  render: args => <div className="skeleton-content-demo"><Skeleton {...args} active={false} paragraph={3} /></div>
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Basic`,`Shape`,`CardDemo`,`Static`]})))()}export{b as a,f as i,y as n,S as o,v as r,_ as t};