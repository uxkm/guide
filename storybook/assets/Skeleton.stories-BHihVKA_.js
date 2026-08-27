import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Skeleton-B9dPsEhE.js";var a=t({Basic:()=>l,CardDemo:()=>d,Shape:()=>u,Static:()=>f,__namedExportsOrder:()=>p,default:()=>c}),o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o=n(),s=i,c={title:`피드백/Skeleton`,component:s,decorators:[e=>(0,o.jsx)(`div`,{className:`skeleton-story-demo`,children:(0,o.jsx)(e,{})})],parameters:{layout:`padded`},argTypes:{active:{control:`boolean`},avatar:{control:`boolean`},paragraph:{control:`number`},round:{control:`boolean`},ariaLabel:{control:`text`}}},l={name:`기본`,render:()=>(0,o.jsx)(`div`,{className:`skeleton-content-demo`,children:(0,o.jsx)(s,{paragraph:3})})},u={name:`형태`,render:()=>(0,o.jsxs)(`div`,{className:`skeleton-shape-demo`,children:[(0,o.jsx)(s,{avatar:!0,paragraph:0}),(0,o.jsx)(s,{round:!0})]})},d={name:`카드`,render:()=>(0,o.jsx)(`div`,{className:`card card_shadow skeleton-card-demo`,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":`카드 콘텐츠 로딩 중`,children:(0,o.jsx)(`div`,{className:`card_body`,children:(0,o.jsxs)(s,{paragraph:0,ariaLabel:`카드 콘텐츠 로딩 중`,children:[(0,o.jsx)(`span`,{className:`skeleton skeleton_image`,"aria-hidden":`true`}),(0,o.jsx)(`span`,{className:`skeleton skeleton_title skeleton_w-md`,"aria-hidden":`true`}),(0,o.jsx)(`span`,{className:`skeleton skeleton_text`,"aria-hidden":`true`}),(0,o.jsx)(`span`,{className:`skeleton skeleton_text skeleton_w-lg`,"aria-hidden":`true`}),(0,o.jsxs)(`div`,{className:`skeleton_row skeleton-card-actions`,children:[(0,o.jsx)(`span`,{className:`skeleton skeleton_button`,"aria-hidden":`true`}),(0,o.jsx)(`span`,{className:`skeleton skeleton_button skeleton-card-button-short`,"aria-hidden":`true`})]})]})})})},f={name:`정적`,render:()=>(0,o.jsx)(`div`,{className:`skeleton-content-demo`,children:(0,o.jsx)(s,{active:!1,paragraph:3})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <div className="skeleton-content-demo"><Skeleton paragraph={3} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '형태',
  render: () => <div className="skeleton-shape-demo"><Skeleton avatar paragraph={0} /><Skeleton round /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '카드',
  render: () => <div className="card card_shadow skeleton-card-demo" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
      <div className="card_body">
        <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '정적',
  render: () => <div className="skeleton-content-demo"><Skeleton active={false} paragraph={3} /></div>
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`Shape`,`CardDemo`,`Static`]})))()}export{f as a,a as i,d as n,m as o,u as r,l as t};