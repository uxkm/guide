import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BBfuIdny.js";import{c as i,u as a}from"./blocks-DbhChoan.js";import{n as o,t as s}from"./DocsTable-CTByTzpS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`Component Status`}),`
`,(0,u.jsx)(t.h1,{id:`component-status`,children:`Component Status`}),`
`,(0,u.jsx)(t.p,{children:`UXKM은 7개 범주, 52개 공통 컴포넌트를 HTML, Gulp/Nunjucks, Vue, React에서 관리합니다. 각 컴포넌트는 공통 스타일, Storybook 문서와 함께 검증합니다.`}),`
`,(0,u.jsx)(t.h2,{id:`범주별-현황`,children:`범주별 현황`}),`
`,(0,u.jsx)(s,{label:`범주별 컴포넌트 현황`,columns:[`범주`,`개수`,`컴포넌트`],rows:[[`레이아웃`,`5`,`Container, Grid, Flex, Divider, Space`],[`기본 요소`,`4`,`Button, Typography, Icon, Link`],[`데이터 표시`,`10`,`Avatar, Badge, Tag, Card, Table, List, Stat, Calendar, Timeline, Tree`],[`폼`,`11`,`Form Layout, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Rate, Date Picker, Upload`],[`피드백`,`10`,`Alert, Snackbar, Modal, Drawer, Popover, Tooltip, Progress, Spin, Skeleton, Empty`],[`네비게이션`,`7`,`Navbar, Menu, Tabs, Breadcrumb, Pagination, Steps, Dropdown`],[`기타`,`5`,`Accordion, Collapse, Carousel, Affix, Back Top`],[`합계`,`52`,`—`]]}),`
`,(0,u.jsx)(t.h2,{id:`완료-기준`,children:`완료 기준`}),`
`,(0,u.jsx)(t.p,{children:`컴포넌트는 아래 항목을 모두 충족할 때 공통 제공 상태로 봅니다.`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`HTML, Gulp, Vue, React 구현 파일 존재`}),`
`,(0,u.jsx)(t.li,{children:`Vue와 React 테스트 존재`}),`
`,(0,u.jsx)(t.li,{children:`공통 SCSS 및 스타일 빌드 연결`}),`
`,(0,u.jsx)(t.li,{children:`Storybook Preview, 프레임워크 예제, API 문서 제공`}),`
`,(0,u.jsx)(t.li,{children:`키보드와 접근성 상태 검수`}),`
`]}),`
`,(0,u.jsxs)(t.p,{children:[`저장소의 `,(0,u.jsx)(t.code,{children:`pnpm validate:components`}),` 검사는 52개 컴포넌트의 필수 파일과 중앙 Storybook 구조를 확인합니다. 개별 변경의 품질은 관련 테스트와 정적 빌드도 함께 통과해야 합니다.`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};