import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./BackTop-BWybpUiE.js";var a=t({Basic:()=>d,Custom:()=>m,Playground:()=>g,Size:()=>p,Visibility:()=>f,WindowScroll:()=>h,__namedExportsOrder:()=>_,default:()=>u});function o({id:e,children:t}){return(0,s.jsxs)(`div`,{className:`back_top_demo-wrap`,children:[(0,s.jsx)(`div`,{id:e,className:`back_top_demo-scroll`,tabIndex:0,"aria-label":`스크롤 예시 영역`,children:(0,s.jsxs)(`div`,{className:`back_top_demo-content`,children:[(0,s.jsx)(`p`,{children:`아래로 스크롤하면 버튼이 표시됩니다.`}),l.map((e,t)=>(0,s.jsx)(`p`,{children:e},t))]})}),t]})}var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),s=n(),c=i,l=[`상품 상세 정보와 주요 사양을 확인하세요.`,`리뷰 4.8점 · 무료 반품 30일`,`배송 안내 · 교환 및 반품`,`함께 보면 좋은 상품`,`고객센터와 자주 묻는 질문`,`이용 약관과 개인정보 처리방침`],u={id:`기타-back-top`,title:`기타/BackTop`,component:c,parameters:{layout:`padded`},decorators:[e=>(0,s.jsx)(`div`,{className:`back-top-story-demo`,children:(0,s.jsx)(e,{})})],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[``,`primary`,`ghost`]},visibilityHeight:{control:`number`},interactive:{control:`boolean`}}},d={name:`기본`,render:()=>(0,s.jsx)(o,{id:`back-top-basic`,children:(0,s.jsx)(c,{target:`#back-top-basic`,visibilityHeight:80})})},f={name:`표시 임계값`,render:()=>(0,s.jsx)(o,{id:`back-top-visibility`,children:(0,s.jsx)(c,{target:`#back-top-visibility`,visibilityHeight:200,color:`primary`})})},p={name:`크기`,render:()=>(0,s.jsxs)(`div`,{className:`back-top-story-stack`,children:[(0,s.jsx)(o,{id:`back-top-small`,children:(0,s.jsx)(c,{target:`#back-top-small`,visibilityHeight:60,size:`sm`})}),(0,s.jsx)(o,{id:`back-top-large`,children:(0,s.jsx)(c,{target:`#back-top-large`,visibilityHeight:60,size:`lg`,color:`ghost`})})]})},m={name:`커스텀 콘텐츠`,render:()=>(0,s.jsx)(o,{id:`back-top-custom`,children:(0,s.jsx)(c,{target:`#back-top-custom`,visibilityHeight:100,color:`primary`,label:`TOP`})})},h={name:`페이지 스크롤`,render:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`p`,{children:`target을 생략하면 페이지 스크롤을 기준으로 동작합니다.`}),(0,s.jsx)(c,{visibilityHeight:200,color:`primary`})]})},g={args:{visibilityHeight:80,size:`md`,color:`primary`,label:``,ariaLabel:`맨 위로`,interactive:!0},render:e=>(0,s.jsx)(o,{id:`back-top-playground`,children:(0,s.jsx)(c,{...e,target:`#back-top-playground`})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Demo id="back-top-basic"><BackTop target="#back-top-basic" visibilityHeight={80} /></Demo>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '표시 임계값',
  render: () => <Demo id="back-top-visibility"><BackTop target="#back-top-visibility" visibilityHeight={200} color="primary" /></Demo>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <div className="back-top-story-stack"><Demo id="back-top-small"><BackTop target="#back-top-small" visibilityHeight={60} size="sm" /></Demo><Demo id="back-top-large"><BackTop target="#back-top-large" visibilityHeight={60} size="lg" color="ghost" /></Demo></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '커스텀 콘텐츠',
  render: () => <Demo id="back-top-custom"><BackTop target="#back-top-custom" visibilityHeight={100} color="primary" label="TOP" /></Demo>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '페이지 스크롤',
  render: () => <><p>target을 생략하면 페이지 스크롤을 기준으로 동작합니다.</p><BackTop visibilityHeight={200} color="primary" /></>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    visibilityHeight: 80,
    size: 'md',
    color: 'primary',
    label: '',
    ariaLabel: '맨 위로',
    interactive: true
  },
  render: args => <Demo id="back-top-playground"><BackTop {...args} target="#back-top-playground" /></Demo>
}`,...g.parameters?.docs?.source}}},_=[`Basic`,`Visibility`,`Size`,`Custom`,`WindowScroll`,`Playground`]})))()}export{f as a,p as i,d as n,h as o,m as r,v as s,a as t};