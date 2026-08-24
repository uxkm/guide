import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-DSvVgjCn.js";import{c as i,u as a}from"./blocks-CkHyEh4O.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Colors`}),`
`,(0,u.jsx)(t.h1,{id:`colors`,children:`Colors`}),`
`,(0,u.jsx)(t.p,{children:`색상은 실제 색상 이름이 아니라 배경, 텍스트, 강조, 성공, 위험처럼 역할을 나타내는 의미 토큰으로 사용합니다. 같은 컴포넌트가 라이트·다크 테마에서 동일한 의미를 유지하도록 합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`토큰-체계`,children:`토큰 체계`}),`
`,(0,u.jsx)(s,{columns:[`역할`,`주요 토큰`,`사용처`],rows:[[`배경`,`--color-bg, --color-surface, --color-surface-raised`,`페이지, 카드, 떠 있는 영역`],[`텍스트`,`--color-text, --color-text-muted, --color-text-disabled`,`본문, 설명, 비활성 정보`],[`경계`,`--color-border, --color-border-subtle`,`입력, 컨트롤, 구분선`],[`강조`,`--color-accent, --color-accent-hover, --color-on-accent`,`주요 액션과 선택 상태`],[`상태`,`--color-success, --color-warning, --color-danger`,`성공, 주의, 오류`]],codeColumns:[1]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.notice {
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`사용-원칙`,children:`사용 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`hex나 RGB 값을 컴포넌트에 직접 반복하지 않습니다.`}),`
`,(0,u.jsxs)(t.li,{children:[`채워진 면 위의 콘텐츠에는 `,(0,u.jsx)(t.code,{children:`--color-on-*`}),` 토큰을 사용합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`상태는 색상과 함께 아이콘, 제목 또는 설명 텍스트를 제공합니다.`}),`
`,(0,u.jsx)(t.li,{children:`새로운 토큰은 라이트와 다크 테마 값을 함께 정의합니다.`}),`
`,(0,u.jsx)(t.li,{children:`호버, 비활성, 포커스 상태의 대비까지 함께 검증합니다.`}),`
`]}),`
`,(0,u.jsxs)(t.p,{children:[`토큰의 실제 값은 `,(0,u.jsx)(t.code,{children:`packages/styles/foundations/_themes.scss`}),`에서 관리합니다.`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};