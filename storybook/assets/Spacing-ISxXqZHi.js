import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DSvVgjCn.js";import{c as i,u as a}from"./blocks-CkHyEh4O.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Spacing`}),`
`,(0,u.jsx)(t.h1,{id:`spacing`,children:`Spacing`}),`
`,(0,u.jsx)(t.p,{children:`간격은 4px을 최소 단위로 하는 공통 토큰을 사용합니다. 임의 값을 반복하기보다 콘텐츠의 관계와 밀도에 맞는 단계 하나를 선택합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`간격-토큰`,children:`간격 토큰`}),`
`,(0,u.jsx)(s,{columns:[`토큰`,`값`,`대표 용도`],rows:[[`--space-xs`,`0.25rem / 4px`,`아이콘과 짧은 레이블`],[`--space-sm`,`0.5rem / 8px`,`밀접한 컨트롤과 보조 정보`],[`--space-md`,`1rem / 16px`,`기본 컴포넌트 간격`],[`--space-lg`,`1.5rem / 24px`,`카드 내부와 작은 섹션`],[`--space-xl`,`2rem / 32px`,`주요 섹션 구분`],[`--space-2xl`,`3rem / 48px`,`페이지 수준 구분`]],codeColumns:[0]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.card-section {
  display: grid;
  gap: var(--space-md);
  padding: var(--space-lg);
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`적용-원칙`,children:`적용 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`같은 그룹 안의 간격은 그룹 사이의 간격보다 작게 설정합니다.`}),`
`,(0,u.jsx)(t.li,{children:`목록은 각 항목의 시작선과 텍스트 기준선을 맞춥니다.`}),`
`,(0,u.jsx)(t.li,{children:`컴포넌트 내부 간격은 해당 컴포넌트 스타일이 소유하도록 합니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`빈 요소나 `,(0,u.jsx)(t.code,{children:`<br>`}),`로 간격을 만들지 않습니다.`]}),`
`,(0,u.jsx)(t.li,{children:`좁은 화면에서 간격만 줄일지 레이아웃을 바꿀지 콘텐츠 관계를 기준으로 판단합니다.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};