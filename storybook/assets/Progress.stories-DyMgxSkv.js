import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{F as n,_ as r,g as i}from"./iframe-BkSPibU3.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";function o({percent:e=0,status:t=``,size:n=`md`,showInfo:r=!1,label:i,color:a=`primary`,striped:o=!1,animated:p=!1,indeterminate:m=!1,inside:h=!1,block:g=!1,ariaLabel:_=`진행률`,className:v=``,...y}){let b=f(e),x=l.has(t)?t:``,S=u.has(n)?n:`md`,C=d.has(a)?a:`primary`,w=x===`success`?`color_success`:x===`exception`?`color_danger`:`color_${C}`,T=(0,s.useMemo)(()=>[`progress`,w,g?`progress_block`:`progress_fit`,S!==`md`&&`progress_${S}`,o&&`progress_striped`,p&&`progress_animated`,m&&`is-indeterminate`,h&&`progress_inside`,v].filter(Boolean).join(` `),[p,g,v,w,m,h,S,o]),E=`${b}%`;return(0,c.jsxs)(`div`,{...y,className:T,"data-component":`Progress`,children:[(r||i)&&(0,c.jsxs)(`div`,{className:`progress_header`,children:[i&&(0,c.jsx)(`span`,{className:`progress_label`,children:i}),r&&(0,c.jsx)(`span`,{className:`progress_value`,children:E})]}),(0,c.jsx)(`div`,{className:`progress_track`,role:`progressbar`,"aria-valuenow":m?void 0:b,"aria-valuemin":0,"aria-valuemax":100,"aria-label":_,"aria-busy":m||void 0,style:h?{background:`var(--color-border-subtle)`}:void 0,children:(0,c.jsx)(`span`,{className:`progress_bar`,style:{width:`${b}%`},children:h?E:null})})]})}var s,c,l,u,d,f;function p(){return(p=e((()=>{s=n(),c=a(),l=new Set([``,`success`,`exception`]),u=new Set([`sm`,`md`,`lg`]),d=new Set([`primary`,`success`,`warning`,`danger`]),f=e=>Math.min(100,Math.max(0,Number(e)||0)),o.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{percent:{defaultValue:{value:`0`,computed:!1},required:!1},status:{defaultValue:{value:`''`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},showInfo:{defaultValue:{value:`false`,computed:!1},required:!1},color:{defaultValue:{value:`'primary'`,computed:!1},required:!1},striped:{defaultValue:{value:`false`,computed:!1},required:!1},animated:{defaultValue:{value:`false`,computed:!1},required:!1},indeterminate:{defaultValue:{value:`false`,computed:!1},required:!1},inside:{defaultValue:{value:`false`,computed:!1},required:!1},block:{defaultValue:{value:`false`,computed:!1},required:!1},ariaLabel:{defaultValue:{value:`'진행률'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}function m({percent:e=0,color:t=`primary`,size:n=`md`,ariaLabel:r=`진행률`,className:i=``,style:a,...o}){let s=v(e),c=g.has(n)?n:`md`,l=[`progress`,`progress_circle`,`color_${_.has(t)?t:`primary`}`,c!==`md`&&`progress_${c}`,i].filter(Boolean).join(` `);return(0,h.jsxs)(`div`,{...o,className:l,"data-component":`ProgressCircle`,role:`progressbar`,"aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":r,style:{"--progress-percent":s,...a},children:[(0,h.jsxs)(`svg`,{className:`progress_circle-svg`,viewBox:`0 0 100 100`,"aria-hidden":`true`,children:[(0,h.jsx)(`circle`,{className:`progress_circle-track`,cx:`50`,cy:`50`,r:`45`}),(0,h.jsx)(`circle`,{className:`progress_circle-bar`,cx:`50`,cy:`50`,r:`45`})]}),(0,h.jsxs)(`span`,{className:`progress_circle-value`,children:[s,`%`]})]})}var h,g,_,v;function y(){return(y=e((()=>{h=a(),g=new Set([`sm`,`md`,`lg`]),_=new Set([`primary`,`success`,`warning`,`danger`]),v=e=>Math.min(100,Math.max(0,Number(e)||0)),m.__docgenInfo={description:``,methods:[],displayName:`ProgressCircle`,props:{percent:{defaultValue:{value:`0`,computed:!1},required:!1},color:{defaultValue:{value:`'primary'`,computed:!1},required:!1},size:{defaultValue:{value:`'md'`,computed:!1},required:!1},ariaLabel:{defaultValue:{value:`'진행률'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var b=t({Basic:()=>D,Circle:()=>P,Color:()=>k,Indeterminate:()=>M,Inside:()=>N,Label:()=>O,Playground:()=>E,Size:()=>A,Striped:()=>j,Width:()=>F,__namedExportsOrder:()=>I,default:()=>T}),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{p(),y(),r(),x=a(),S=o,C=m,w=({children:e})=>(0,x.jsx)(`div`,{className:`demo-stack progress-demo-stack`,children:e}),T={title:`피드백/Progress`,component:S,subcomponents:{ProgressCircle:C},decorators:[e=>(0,x.jsx)(`div`,{className:`progress-story-demo`,children:(0,x.jsx)(e,{})})],parameters:{layout:`padded`,controls:{exclude:[`className`,`style`,`id`,`ref`,`key`,`children`]}},args:{percent:50,status:``,size:`md`,color:`primary`,showInfo:!1,striped:!1,animated:!1,indeterminate:!1,inside:!1,block:!1,label:``,ariaLabel:`진행률`},argTypes:{...i,status:{control:`select`,options:[``,`success`,`exception`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`primary`,`success`,`warning`,`danger`]},percent:{control:{type:`range`,min:0,max:100}},showInfo:{control:`boolean`},striped:{control:`boolean`},animated:{control:`boolean`},indeterminate:{control:`boolean`},inside:{control:`boolean`},block:{control:`boolean`},label:{control:`text`},ariaLabel:{control:`text`}}},E={name:`Playground`,render:e=>(0,x.jsx)(S,{...e})},D={name:`기본`,render:e=>(0,x.jsxs)(w,{children:[(0,x.jsx)(S,{percent:0}),(0,x.jsx)(S,{...e,percent:30}),(0,x.jsx)(S,{percent:60}),(0,x.jsx)(S,{percent:100,status:`success`})]})},O={name:`레이블 · 값`,render:e=>(0,x.jsxs)(w,{children:[(0,x.jsx)(S,{...e,percent:42,showInfo:!0,label:`파일 업로드`,ariaLabel:`파일 업로드 진행률`}),(0,x.jsx)(S,{percent:67,showInfo:!0,label:`데이터 동기화`,ariaLabel:`데이터 동기화 진행률`})]})},k={name:`색상`,render:e=>(0,x.jsxs)(w,{children:[(0,x.jsx)(S,{...e,percent:50,color:`primary`,ariaLabel:`Primary 진행률`}),(0,x.jsx)(S,{percent:100,color:`success`,ariaLabel:`Success 진행률`}),(0,x.jsx)(S,{percent:75,color:`warning`,ariaLabel:`Warning 진행률`}),(0,x.jsx)(S,{percent:35,color:`danger`,ariaLabel:`Danger 진행률`})]})},A={name:`크기`,render:e=>(0,x.jsxs)(w,{children:[(0,x.jsx)(S,{...e,size:`sm`,percent:40}),(0,x.jsx)(S,{percent:55}),(0,x.jsx)(S,{size:`lg`,percent:70})]})},j={name:`줄무늬 · 애니메이션`,render:e=>(0,x.jsxs)(w,{children:[(0,x.jsx)(S,{...e,percent:45,striped:!0,color:`primary`,ariaLabel:`줄무늬 진행률`}),(0,x.jsx)(S,{percent:65,striped:!0,animated:!0,color:`primary`,ariaLabel:`애니메이션 진행률`})]})},M={name:`불확정`,render:e=>(0,x.jsxs)(w,{children:[(0,x.jsx)(S,{...e,indeterminate:!0,color:`primary`,ariaLabel:`처리 중`}),(0,x.jsx)(S,{indeterminate:!0,label:`동기화 중…`,color:`success`,ariaLabel:`동기화 중`})]})},N={name:`바 안 텍스트`,render:e=>(0,x.jsxs)(w,{children:[(0,x.jsx)(S,{...e,percent:25,inside:!0}),(0,x.jsx)(S,{percent:80,inside:!0,size:`lg`,color:`success`})]})},P={name:`원형`,render:e=>(0,x.jsxs)(`div`,{className:`progress-circle-demo`,children:[(0,x.jsx)(C,{...e,percent:25}),(0,x.jsx)(C,{percent:68,color:`success`}),(0,x.jsx)(C,{percent:50,size:`sm`,color:`warning`}),(0,x.jsx)(C,{percent:90,size:`lg`,color:`danger`})]})},F={name:`너비`,render:e=>(0,x.jsxs)(w,{children:[(0,x.jsx)(S,{...e,percent:50,showInfo:!0,label:`progress_fit`}),(0,x.jsx)(S,{percent:72,block:!0,showInfo:!0,label:`progress_block — 전체 너비`})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Progress {...args} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: args => <Stack>
      <Progress percent={0} />
      <Progress {...args} percent={30} />
      <Progress percent={60} />
      <Progress percent={100} status="success" />
    </Stack>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '레이블 · 값',
  render: args => <Stack>
      <Progress {...args} percent={42} showInfo label="파일 업로드" ariaLabel="파일 업로드 진행률" />
      <Progress percent={67} showInfo label="데이터 동기화" ariaLabel="데이터 동기화 진행률" />
    </Stack>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '색상',
  render: args => <Stack>
      <Progress {...args} percent={50} color="primary" ariaLabel="Primary 진행률" />
      <Progress percent={100} color="success" ariaLabel="Success 진행률" />
      <Progress percent={75} color="warning" ariaLabel="Warning 진행률" />
      <Progress percent={35} color="danger" ariaLabel="Danger 진행률" />
    </Stack>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: args => <Stack>
      <Progress {...args} size="sm" percent={40} />
      <Progress percent={55} />
      <Progress size="lg" percent={70} />
    </Stack>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '줄무늬 · 애니메이션',
  render: args => <Stack>
      <Progress {...args} percent={45} striped color="primary" ariaLabel="줄무늬 진행률" />
      <Progress percent={65} striped animated color="primary" ariaLabel="애니메이션 진행률" />
    </Stack>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '불확정',
  render: args => <Stack>
      <Progress {...args} indeterminate color="primary" ariaLabel="처리 중" />
      <Progress indeterminate label="동기화 중…" color="success" ariaLabel="동기화 중" />
    </Stack>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '바 안 텍스트',
  render: args => <Stack>
      <Progress {...args} percent={25} inside />
      <Progress percent={80} inside size="lg" color="success" />
    </Stack>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '원형',
  render: args => <div className="progress-circle-demo">
      <ProgressCircle {...args} percent={25} />
      <ProgressCircle percent={68} color="success" />
      <ProgressCircle percent={50} size="sm" color="warning" />
      <ProgressCircle percent={90} size="lg" color="danger" />
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '너비',
  render: args => <Stack>
      <Progress {...args} percent={50} showInfo label="progress_fit" />
      <Progress percent={72} block showInfo label="progress_block — 전체 너비" />
    </Stack>
}`,...F.parameters?.docs?.source}}},I=[`Playground`,`Basic`,`Label`,`Color`,`Size`,`Striped`,`Indeterminate`,`Inside`,`Circle`,`Width`]})))()}export{N as a,A as c,L as d,M as i,j as l,P as n,O as o,k as r,b as s,D as t,F as u};