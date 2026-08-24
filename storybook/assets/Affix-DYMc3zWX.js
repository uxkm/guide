import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./Affix.stories-BJc-c_SP.js";import{i as l,r as u}from"./react-DSvVgjCn.js";import{c as d,r as f,u as p}from"./blocks-CkHyEh4O.js";import{i as m,n as h,r as g,t as _}from"./ComponentApiDocs-D9Q6nkXJ.js";function v(e){let t=x[e];return`<div id="affix-scroll" class="affix_demo-scroll">
  <div class="affix_demo-content">
    <p>스크롤하여 고정 동작을 확인하세요.</p>
    <div class="affix" data-affix${t.target?` data-target="${t.target}"`:``}${t.offsetTop?` data-offset-top="${t.offsetTop}"`:``}${t.offsetBottom===void 0?``:` data-offset-bottom="${t.offsetBottom}"`}>
      <div class="affix_placeholder" aria-hidden="true" hidden></div>
      <div class="affix_target affix_${t.skin}">${S(e)}</div>
    </div>
    <p>긴 콘텐츠가 이어집니다.</p>
  </div>
</div>`}function y(e,t=!1){let n=x[e];return`<Affix ${[n.target&&`target="${n.target}"`,n.offsetTop&&(t?`:offset-top="${n.offsetTop}"`:`offsetTop={${n.offsetTop}}`),n.offsetBottom!==void 0&&(t?`:offset-bottom="${n.offsetBottom}"`:`offsetBottom={${n.offsetBottom}}`),`skin="${n.skin}"`].filter(Boolean).join(` `)}>${S(e)}</Affix>`}function b(e){let t=`import { Affix } from '@uxkm/react/affix';\n\nexport function Example() {\n  return ${y(e)};\n}`,n=`<script setup>\nimport { Affix } from '@uxkm/vue/affix';\n<\/script>\n\n<template>\n  ${y(e,!0)}\n</template>`,r=v(e);return[{id:`html`,label:`HTML`,fileName:`Affix.html · ${e}`,code:r},{id:`gulp`,label:`Gulp`,fileName:`affix.njk · ${e}`,code:r},{id:`vue`,label:`Vue`,fileName:`@uxkm/vue/affix · ${e}`,code:n},{id:`nuxt`,label:`Nuxt`,fileName:`@uxkm/vue/affix · ${e}`,code:n},{id:`react`,label:`React`,fileName:`@uxkm/react/affix · ${e}`,code:t},{id:`next`,label:`Next`,fileName:`@uxkm/react/affix · ${e}`,code:t}]}var x,S,C;function w(){return(w=e((()=>{x={basic:{target:`#affix-scroll`,skin:`bar`},offset:{target:`#affix-scroll`,offsetTop:12,skin:`bar`},anchor:{target:`#affix-scroll`,skin:`anchor`},bottom:{target:`#affix-scroll`,offsetBottom:0,skin:`bar`},window:{offsetTop:64,skin:`bar`}},S=e=>e===`anchor`?`<nav aria-label="설정 섹션"><a class="link color_primary" href="#profile">프로필</a><a class="link" href="#security">보안</a></nav>`:`<span class="affix_bar-label">주문 액션</span><div class="affix_bar-actions"><button class="btn btn_filled color_primary btn_sm">확인</button></div>`,C=Object.fromEntries(Object.keys(x).map(e=>[e,b(e)]))})))()}var T,E;function D(){return(D=e((()=>{T=(e,t)=>({title:e,tables:[{columns:[{key:`name`,label:`이름`},{key:`type`,label:`타입`},{key:`default`,label:`기본값`},{key:`description`,label:`설명`}],rows:t}]}),E=[T(`Affix API`,[{name:`target`,type:`string`,default:`window`,description:`스크롤 컨테이너 CSS 선택자입니다.`},{name:`offsetTop`,type:`number | string`,default:`0`,description:`상단 고정 간격(px)입니다.`},{name:`offsetBottom`,type:`number | string`,default:`—`,description:`지정하면 하단 고정 모드로 동작합니다.`},{name:`skin`,type:`'' | 'bar' | 'anchor'`,default:`''`,description:`액션 바 또는 앵커 스킨입니다.`},{name:`interactive`,type:`boolean`,default:`true`,description:`Affix 런타임 활성 여부입니다.`}]),T(`HTML · 상태`,[{name:`data-affix`,type:`attribute`,default:`—`,description:`Affix를 초기화합니다.`},{name:`data-target`,type:`attribute`,default:`window`,description:`스크롤 컨테이너를 연결합니다.`},{name:`data-offset-top · data-offset-bottom`,type:`attribute`,default:`—`,description:`고정 방향과 간격을 설정합니다.`},{name:`is-affixed · is-fixed`,type:`class`,default:`—`,description:`런타임이 적용하는 고정 상태입니다.`}])]})))()}function O(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...l(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(d,{of:c}),`
`,(0,A.jsx)(t.h1,{id:`affix`,children:`Affix`}),`
`,(0,A.jsx)(t.p,{children:`스크롤 시 지정한 위치에 요소를 고정하는 컴포넌트입니다. 툴바, 앵커 내비게이션, 하단 액션 바에 사용할 수 있습니다.`}),`
`,(0,A.jsx)(t.h2,{id:`기본`,children:`기본`}),`
`,(0,A.jsx)(f,{of:o,sourceState:`none`}),`
`,(0,A.jsx)(g,{examples:C.basic}),`
`,(0,A.jsx)(t.h2,{id:`상단-오프셋`,children:`상단 오프셋`}),`
`,(0,A.jsx)(f,{of:n,sourceState:`none`}),`
`,(0,A.jsx)(g,{examples:C.offset}),`
`,(0,A.jsx)(t.h2,{id:`앵커-내비게이션`,children:`앵커 내비게이션`}),`
`,(0,A.jsx)(f,{of:i,sourceState:`none`}),`
`,(0,A.jsx)(g,{examples:C.anchor}),`
`,(0,A.jsx)(t.h2,{id:`하단-고정`,children:`하단 고정`}),`
`,(0,A.jsx)(f,{of:r,sourceState:`none`}),`
`,(0,A.jsx)(g,{examples:C.bottom}),`
`,(0,A.jsx)(t.h2,{id:`페이지-스크롤`,children:`페이지 스크롤`}),`
`,(0,A.jsx)(f,{of:a,sourceState:`none`}),`
`,(0,A.jsx)(g,{examples:C.window}),`
`,(0,A.jsx)(t.h2,{id:`접근성`,children:`접근성`}),`
`,(0,A.jsxs)(t.p,{children:[`앵커 스킨에는 목적을 설명하는 `,(0,A.jsx)(t.code,{children:`aria-label`}),`이 있는 `,(0,A.jsx)(t.code,{children:`nav`}),`를 사용합니다. 고정 상태에서도 키보드 포커스 순서와 버튼의 이름은 변하지 않습니다.`]}),`
`,(0,A.jsx)(_,{sections:E})]})}function k(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(O,{...e})}):O(e)}var A;function j(){return(j=e((()=>{A=t(),u(),p(),m(),h(),w(),D(),s()})))()}j();export{k as default};