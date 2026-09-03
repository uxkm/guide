import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{T as n,_ as r,g as i,o as a,r as o}from"./iframe-BkSPibU3.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Button-Bdofg9ij.js";function u({size:e=`md`,tip:t,color:n=`primary`,inline:r=!1,block:i=!1,overlay:a=!1,ariaLabel:o=`로딩 중`,children:s,className:c=``,...l}){let u=f.includes(e)?e:`md`,m=[`spin`,`color_${p.includes(n)?n:`primary`}`,u!==`md`&&`spin_${u}`,r&&`spin_inline`,i&&`spin_block`,a&&`spin_overlay`,c].filter(Boolean).join(` `);return(0,d.jsxs)(`div`,{...l,className:m,"data-component":`Spin`,role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":o,children:[(0,d.jsx)(`span`,{className:`spin_indicator`,"aria-hidden":`true`}),t&&(0,d.jsx)(`p`,{className:`spin_tip`,children:t}),s]})}var d,f,p;function m(){return(m=e((()=>{d=s(),f=[`sm`,`md`,`lg`],p=[`primary`,`success`,`warning`,`danger`],u.__docgenInfo={description:``,methods:[],displayName:`Spin`,props:{size:{defaultValue:{value:`'md'`,computed:!1},required:!1},color:{defaultValue:{value:`'primary'`,computed:!1},required:!1},inline:{defaultValue:{value:`false`,computed:!1},required:!1},block:{defaultValue:{value:`false`,computed:!1},required:!1},overlay:{defaultValue:{value:`false`,computed:!1},required:!1},ariaLabel:{defaultValue:{value:`'로딩 중'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}function h({loading:e=!1,block:t=!1,blur:n=!1,tip:r,ariaLabel:i=`로딩 중`,children:a,className:o=``,...s}){let c=[`spin_wrap`,t&&`spin_wrap-block`,n&&`spin_wrap-blur`,e&&`is-loading`,o].filter(Boolean).join(` `);return(0,g.jsxs)(`div`,{...s,className:c,"data-component":`SpinWrap`,"aria-busy":e||void 0,children:[(0,g.jsx)(`div`,{className:`spin_wrap-body`,children:a}),e&&(0,g.jsx)(u,{overlay:!0,tip:r,ariaLabel:i})]})}var g;function _(){return(_=e((()=>{m(),g=s(),h.__docgenInfo={description:``,methods:[],displayName:`SpinWrap`,props:{loading:{defaultValue:{value:`false`,computed:!1},required:!1},block:{defaultValue:{value:`false`,computed:!1},required:!1},blur:{defaultValue:{value:`false`,computed:!1},required:!1},ariaLabel:{defaultValue:{value:`'로딩 중'`,computed:!1},required:!1},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})))()}var v=t({Basic:()=>D,Block:()=>M,Color:()=>k,Inline:()=>j,Overlay:()=>P,Playground:()=>E,Size:()=>O,Tip:()=>A,__namedExportsOrder:()=>F,default:()=>T});function y(e){return{size:e.size,color:e.color,tip:typeof e.tip==`string`&&e.tip?e.tip:void 0,inline:e.inline===!0,block:e.block===!0,overlay:e.overlay===!0,ariaLabel:typeof e.ariaLabel==`string`?e.ariaLabel:void 0}}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{c(),m(),_(),r(),b=s(),x=u,S=h,C=l,w=({children:e})=>(0,b.jsx)(`div`,{className:`spin-demo-row`,children:e}),T={title:`피드백/Spin`,component:x,subcomponents:{SpinWrap:S},decorators:[e=>(0,b.jsx)(`div`,{className:`spin-story-demo`,children:(0,b.jsx)(e,{})})],parameters:{layout:`padded`,controls:{include:[`size`,`color`,`tip`,`inline`,`block`,`overlay`,`ariaLabel`]},docs:{extractArgTypes:()=>({})}},args:{size:`md`,color:`primary`,tip:``,inline:!1,block:!1,overlay:!1,ariaLabel:`로딩 중`},argTypes:{...i,size:{control:`select`,options:[`sm`,`md`,`lg`],type:`string`},color:{control:`select`,options:[`primary`,`success`,`warning`,`danger`],type:`string`},tip:n,inline:a,block:a,overlay:a,ariaLabel:o}},E={name:`Playground`,render:e=>(0,b.jsx)(w,{children:(0,b.jsx)(x,{...y(e)})})},D={name:`기본`,render:()=>(0,b.jsx)(w,{children:(0,b.jsx)(x,{})})},O={name:`크기`,render:()=>(0,b.jsxs)(w,{children:[(0,b.jsx)(x,{size:`sm`}),(0,b.jsx)(x,{}),(0,b.jsx)(x,{size:`lg`})]})},k={name:`색상`,render:()=>(0,b.jsxs)(w,{children:[(0,b.jsx)(x,{color:`primary`,ariaLabel:`Primary 로딩`}),(0,b.jsx)(x,{color:`success`,ariaLabel:`Success 로딩`}),(0,b.jsx)(x,{color:`warning`,ariaLabel:`Warning 로딩`}),(0,b.jsx)(x,{color:`danger`,ariaLabel:`Danger 로딩`})]})},A={name:`설명 텍스트`,render:()=>(0,b.jsxs)(w,{children:[(0,b.jsx)(x,{tip:`데이터를 불러오는 중…`,ariaLabel:`데이터를 불러오는 중`}),(0,b.jsx)(x,{size:`lg`,tip:`파일 업로드 중…`,ariaLabel:`파일 업로드 중`})]})},j={name:`인라인`,render:()=>(0,b.jsxs)(`div`,{className:`demo-stack`,children:[(0,b.jsx)(`div`,{children:(0,b.jsx)(x,{size:`sm`,inline:!0,color:`primary`,tip:`저장 중…`,ariaLabel:`저장 중`})}),(0,b.jsx)(C,{variant:`filled`,color:`primary`,loading:!0,disabled:!0,"aria-busy":`true`,label:`제출 중…`})]})},M={name:`블록 정렬`,render:()=>(0,b.jsx)(x,{block:!0,color:`primary`,tip:`잠시만 기다려 주세요…`,ariaLabel:`로딩 중`})},N=({title:e,children:t})=>(0,b.jsxs)(`div`,{className:`card card_shadow`,children:[(0,b.jsx)(`div`,{className:`card_header`,children:(0,b.jsx)(`h3`,{className:`card_title`,children:e})}),(0,b.jsx)(`div`,{className:`card_body`,children:t})]}),P={name:`컨테이너 오버레이`,render:()=>(0,b.jsxs)(`div`,{className:`spin-overlay-demo`,children:[(0,b.jsx)(S,{block:!0,loading:!0,tip:`데이터 로딩 중…`,ariaLabel:`데이터 로딩 중`,children:(0,b.jsx)(N,{title:`대시보드`,children:(0,b.jsx)(`p`,{children:`차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.`})})}),(0,b.jsx)(S,{block:!0,blur:!0,loading:!0,ariaLabel:`처리 중`,children:(0,b.jsx)(N,{title:`블러 효과`,children:(0,b.jsxs)(`p`,{children:[(0,b.jsx)(`code`,{className:`typo_code`,children:`spin_wrap-blur`}),`를 함께 사용하면 콘텐츠에 블러가 적용됩니다.`]})})})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <Row>
      <Spin {...spinPropsFromArgs(args)} />
    </Row>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => <Row>
      <Spin />
    </Row>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '크기',
  render: () => <Row>
      <Spin size="sm" />
      <Spin />
      <Spin size="lg" />
    </Row>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '색상',
  render: () => <Row>
      <Spin color="primary" ariaLabel="Primary 로딩" />
      <Spin color="success" ariaLabel="Success 로딩" />
      <Spin color="warning" ariaLabel="Warning 로딩" />
      <Spin color="danger" ariaLabel="Danger 로딩" />
    </Row>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '설명 텍스트',
  render: () => <Row>
      <Spin tip="데이터를 불러오는 중…" ariaLabel="데이터를 불러오는 중" />
      <Spin size="lg" tip="파일 업로드 중…" ariaLabel="파일 업로드 중" />
    </Row>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '인라인',
  render: () => <div className="demo-stack">
      <div>
        <Spin size="sm" inline color="primary" tip="저장 중…" ariaLabel="저장 중" />
      </div>
      <Button variant="filled" color="primary" loading disabled aria-busy="true" label="제출 중…" />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '블록 정렬',
  render: () => <Spin block color="primary" tip="잠시만 기다려 주세요…" ariaLabel="로딩 중" />
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '컨테이너 오버레이',
  render: () => <div className="spin-overlay-demo">
      <SpinWrap block loading tip="데이터 로딩 중…" ariaLabel="데이터 로딩 중">
        <Card title="대시보드">
          <p>차트와 통계가 이 영역에 표시됩니다. 데이터를 불러오는 동안 오버레이가 콘텐츠를 덮습니다.</p>
        </Card>
      </SpinWrap>
      <SpinWrap block blur loading ariaLabel="처리 중">
        <Card title="블러 효과">
          <p>
            <code className="typo_code">spin_wrap-blur</code>를 함께 사용하면 콘텐츠에 블러가 적용됩니다.
          </p>
        </Card>
      </SpinWrap>
    </div>
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`Basic`,`Size`,`Color`,`Tip`,`Inline`,`Block`,`Overlay`]})))()}export{P as a,A as c,j as i,I as l,M as n,O as o,k as r,v as s,D as t};