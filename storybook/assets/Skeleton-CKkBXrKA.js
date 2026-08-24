import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./Skeleton.stories-CkiwV1_f.js";import{i as c,r as l}from"./react-DSvVgjCn.js";import{c as u,r as d,u as f}from"./blocks-CkHyEh4O.js";import{i as p,n as m,r as h,t as g}from"./ComponentApiDocs-D9Q6nkXJ.js";function _(e){let t=`import Skeleton from '@uxkm/react/skeleton';\n\nexport function Example() { return <>${y[e]}</>; }`,n=`<script setup>\nimport Skeleton from '@uxkm/vue/skeleton';\n<\/script>\n<template>\n${b[e]}\n</template>`;return[{id:`html`,label:`HTML`,fileName:`Skeleton.html · ${e}`,code:x[e]},{id:`gulp`,label:`Gulp`,fileName:`skeleton.njk · ${e}`,code:x[e]},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/skeleton · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/skeleton · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/skeleton · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/skeleton · ${e}`,code:t}]}var v,y,b,x,S;function C(){return(C=e((()=>{v=[`basic`,`shape`,`card`,`static`],y={basic:`<div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}><Skeleton paragraph={3} /></div>`,shape:`<Skeleton avatar paragraph={0} />
<Skeleton round style={{ marginTop: 'var(--space-md)' }} />`,card:`<div className="card card_shadow" style={{ maxWidth: 360, width: '100%' }} role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  <div className="card_body">
    <Skeleton paragraph={0} ariaLabel="카드 콘텐츠 로딩 중">
      <span className="skeleton skeleton_image" aria-hidden="true" />
      <span className="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
      <span className="skeleton skeleton_text" aria-hidden="true" />
      <span className="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
      <div className="skeleton_row" style={{ marginTop: 'var(--space-xs)' }}>
        <span className="skeleton skeleton_button" aria-hidden="true" />
        <span className="skeleton skeleton_button" aria-hidden="true" style={{ width: '4rem' }} />
      </div>
    </Skeleton>
  </div>
</div>`,static:`<div style={{ maxWidth: 'var(--input-max-width)', width: '100%' }}><Skeleton active={false} paragraph={3} /></div>`},b={basic:`<div style="max-width: var(--input-max-width); width: 100%;"><Skeleton :paragraph="3" /></div>`,shape:`<Skeleton avatar :paragraph="0" />
<Skeleton round style="margin-top: var(--space-md);" />`,card:`<div class="card card_shadow" style="max-width: 360px; width: 100%;" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  <div class="card_body">
    <Skeleton :paragraph="0" aria-label="카드 콘텐츠 로딩 중">
      <span class="skeleton skeleton_image" aria-hidden="true" />
      <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true" />
      <span class="skeleton skeleton_text" aria-hidden="true" />
      <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true" />
      <div class="skeleton_row" style="margin-top: var(--space-xs);">
        <span class="skeleton skeleton_button" aria-hidden="true" />
        <span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;" />
      </div>
    </Skeleton>
  </div>
</div>`,static:`<div style="max-width: var(--input-max-width); width: 100%;"><Skeleton :active="false" :paragraph="3" /></div>`},x={basic:`<div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  <span class="skeleton skeleton_title" aria-hidden="true"></span>
  <span class="skeleton skeleton_text" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-md" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-sm" aria-hidden="true"></span>
</div>`,shape:`<div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="아바타 로딩 중">
  <div class="skeleton_row"><span class="skeleton skeleton_circle" aria-hidden="true"></span></div>
</div>
<div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="원형 콘텐츠 로딩 중">
  <span class="skeleton skeleton_circle" aria-hidden="true"></span>
</div>`,card:`<div class="card card_shadow" style="max-width: 360px; width: 100%;" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
  <div class="card_body"><div class="skeleton_group" role="status" aria-live="polite" aria-busy="true" aria-label="카드 콘텐츠 로딩 중">
    <span class="skeleton skeleton_image" aria-hidden="true"></span>
    <span class="skeleton skeleton_title skeleton_w-md" aria-hidden="true"></span>
    <span class="skeleton skeleton_text" aria-hidden="true"></span>
    <span class="skeleton skeleton_text skeleton_w-lg" aria-hidden="true"></span>
    <div class="skeleton_row" style="margin-top: var(--space-xs);"><span class="skeleton skeleton_button" aria-hidden="true"></span><span class="skeleton skeleton_button" aria-hidden="true" style="width: 4rem;"></span></div>
  </div></div>
</div>`,static:`<div class="skeleton_group skeleton_static" role="status" aria-live="polite" aria-busy="true" aria-label="콘텐츠 로딩 중">
  <span class="skeleton skeleton_title skeleton_static" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_static" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-md skeleton_static" aria-hidden="true"></span>
  <span class="skeleton skeleton_text skeleton_w-sm skeleton_static" aria-hidden="true"></span>
</div>`},S=Object.fromEntries(v.map(e=>[e,_(e)]))})))()}var w,T,E;function D(){return(D=e((()=>{w=[{key:`name`,label:`이름`},{key:`description`,label:`설명`},{key:`default`,label:`기본값`},{key:`type`,label:`타입`}],T=(e,t,n)=>({title:e,description:n,tables:[{columns:w,rows:t}]}),E=[T(`Skeleton API`,[{name:`active`,type:`boolean`,default:`true`,description:`쉬머 애니메이션 활성 여부입니다.`},{name:`avatar · round`,type:`boolean`,default:`false`,description:`아바타 행 또는 원형 플레이스홀더를 표시합니다.`},{name:`paragraph`,type:`boolean | number`,default:`false`,description:`본문 줄 수입니다. 기본 형태에서는 3줄을 표시합니다.`},{name:`ariaLabel`,type:`string`,default:`'콘텐츠 로딩 중'`,description:`로딩 영역의 접근성 이름입니다.`},{name:`children · default slot`,type:`ReactNode`,default:`—`,description:`카드처럼 직접 구성하는 추가 플레이스홀더입니다.`}]),T(`HTML · Gulp`,[{name:`skeleton_group · skeleton_row`,type:`class`,default:`—`,description:`세로 그룹과 아바타 행 레이아웃입니다.`},{name:`skeleton_text · skeleton_title · skeleton_circle`,type:`class`,default:`—`,description:`텍스트, 제목, 원형 형태입니다.`},{name:`skeleton_image · skeleton_button · skeleton_block`,type:`class`,default:`—`,description:`이미지, 버튼, 블록 형태입니다.`},{name:`skeleton_w-sm · skeleton_w-md · skeleton_w-lg`,type:`class`,default:`—`,description:`플레이스홀더 너비를 조절합니다.`},{name:`skeleton_static`,type:`class`,default:`—`,description:`쉬머 애니메이션을 끕니다.`}]),T(`디자인 토큰`,[{name:`--skeleton-bg · --skeleton-shine`,type:`color`,default:`surface tokens`,description:`기본 면과 쉬머 색상입니다.`},{name:`--skeleton-gap · --skeleton-duration`,type:`length · time`,default:`space-sm · 1.4s`,description:`항목 간격과 애니메이션 시간입니다.`},{name:`--skeleton-title-width · --skeleton-avatar-size`,type:`length`,default:`40% · avatar-size`,description:`제목 너비와 원형 크기입니다.`}])]})))()}function O(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...c(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(u,{of:r}),`
`,(0,A.jsx)(t.h1,{id:`skeleton`,children:`Skeleton`}),`
`,(0,A.jsx)(t.p,{children:`콘텐츠를 불러오는 동안 실제 레이아웃과 유사한 플레이스홀더를 표시합니다.`}),`
`,(0,A.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,A.jsx)(d,{of:s,sourceState:`none`}),`
`,(0,A.jsx)(h,{examples:S.basic}),`
`,(0,A.jsx)(t.h2,{id:`형태`,children:`형태`}),`
`,(0,A.jsx)(d,{of:o,sourceState:`none`}),`
`,(0,A.jsx)(h,{examples:S.shape}),`
`,(0,A.jsx)(t.h2,{id:`카드`,children:`카드`}),`
`,(0,A.jsx)(d,{of:i,sourceState:`none`}),`
`,(0,A.jsx)(h,{examples:S.card}),`
`,(0,A.jsx)(t.h2,{id:`정적`,children:`정적`}),`
`,(0,A.jsx)(d,{of:n,sourceState:`none`}),`
`,(0,A.jsx)(h,{examples:S.static}),`
`,(0,A.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,A.jsxs)(t.p,{children:[`로딩 영역은 `,(0,A.jsx)(t.code,{children:`role="status"`}),`, `,(0,A.jsx)(t.code,{children:`aria-live="polite"`}),`, `,(0,A.jsx)(t.code,{children:`aria-busy="true"`}),`를 제공하고 장식용 플레이스홀더는 보조 기술에서 제외합니다. `,(0,A.jsx)(t.code,{children:`prefers-reduced-motion`}),` 환경에서는 쉬머 애니메이션이 자동으로 비활성화됩니다.`]}),`
`,(0,A.jsx)(g,{sections:E})]})}function k(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),l(),f(),p(),m(),C(),D(),a()})))()}j();export{k as default};