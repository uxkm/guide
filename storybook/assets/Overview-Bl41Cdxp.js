import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-BBfuIdny.js";import{c as i,u as a}from"./blocks-DbhChoan.js";import{n as o,t as s}from"./IntroductionCards-DatdkIgS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`소개`}),`
`,(0,u.jsx)(t.h1,{id:`uxkm-framework-components`,children:`UXKM Framework Components`}),`
`,(0,u.jsxs)(t.p,{children:[`HTML, Gulp/Nunjucks, Vue, React, Nuxt, Next.js, WebSquare에서 같은 디자인 언어와 컴포넌트 API를 제공하는 통합 UI 가이드입니다. 기존 `,(0,u.jsx)(t.code,{children:`gulp-storybook`}),`, `,(0,u.jsx)(t.code,{children:`vue-storybook`}),`, `,(0,u.jsx)(t.code,{children:`react-storybook`}),`의 소개 내용을 현재 모노레포 구조에 맞춰 한곳에 모았습니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`이-storybook에서-제공하는-것`,children:`이 Storybook에서 제공하는 것`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`52개 UI 컴포넌트`}),` — 레이아웃, 기본 요소, 데이터 표시, 폼, 피드백, 네비게이션, 기타의 7개 카테고리로 구성합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`프레임워크별 구현`}),` — 각 컴포넌트 문서에서 여섯 프레임워크의 구현과 WebSquare 화면 XML 사용 방식을 비교할 수 있습니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`단일 스타일 원본`}),` — 모든 앱은 `,(0,u.jsx)(t.code,{children:`packages/styles`}),`에서 생성한 같은 CSS, 디자인 토큰, 테마를 사용합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`일관된 접근성`}),` — 시맨틱 HTML, `,(0,u.jsx)(t.code,{children:`aria-*`}),`, 키보드와 포커스 동작을 구현 방식과 관계없이 유지합니다.`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`지원-프레임워크`,children:`지원 프레임워크`}),`
`,(0,u.jsx)(s,{columns:[{label:`프레임워크`},{label:`앱`},{label:`구현 기준`},{label:`역할`}],rows:[[`HTML`,`@uxkm/html`,`HTML · CSS · JavaScript`,`프레임워크 없는 기본 마크업`],[`Gulp / Nunjucks`,`@uxkm/gulp`,`Nunjucks · Gulp`,`정적 템플릿 기반 가이드`],[`Vue`,`@uxkm/vue`,`Vue 3 · Vite`,`Vue 컴포넌트 원본`],[`React`,`@uxkm/react`,`React · Vite`,`React 컴포넌트 원본`],[`Nuxt`,`@uxkm/nuxt`,`Vue · Nuxt`,`Vue 컴포넌트의 Nuxt 통합`],[`Next.js`,`@uxkm/next`,`React · App Router`,`React 컴포넌트의 Next.js 통합`],[`WebSquare`,`Storybook 코드 탭`,`WebSquare XML · XHTML`,`공통 HTML과 CSS를 WebSquare 화면 XML에서 재사용`]],codeColumns:[1]}),`
`,(0,u.jsx)(t.h2,{id:`websquare-예제-사용`,children:`WebSquare 예제 사용`}),`
`,(0,u.jsxs)(t.p,{children:[`각 컴포넌트의 `,(0,u.jsx)(t.strong,{children:`Code → WebSquare`}),` 탭은 HTML 기준 마크업을 WebSquare 화면에서 사용할 수 있는 XML fragment로 제공합니다. 공통 클래스와 접근성 속성, 닫는 void 태그와 값을 가진 XML 속성을 유지하며, 네임스페이스 선언은 화면 XML 루트에서 상속받습니다.`]}),`
`,(0,u.jsxs)(t.p,{children:[`WebSquare 예제는 React나 Vue처럼 별도 컴포넌트를 import해 호출하는 코드가 아닙니다. Container, Grid, Flex 같은 구조 컴포넌트는 실제 화면의 `,(0,u.jsx)(t.code,{children:`w2:group`}),`에 공통 클래스를 직접 적용합니다. 별도 XML 화면 전체를 포함해야 할 때만 WFrame의 `,(0,u.jsx)(t.code,{children:`src`}),`를 사용하며, 호출 위치의 임의 콘텐츠를 감싸는 Container에는 사용하지 않습니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-xml`,children:`<w2:group
  id="uxkmExample"
  class="uxkm_example">
  <button type="button" class="btn btn_filled color_primary">
    <span class="btn_label">저장</span>
  </button>
</w2:group>
`})}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`xmlns`}),`, `,(0,u.jsx)(t.code,{children:`xmlns:w2`}),`, `,(0,u.jsx)(t.code,{children:`xmlns:ev`}),`, `,(0,u.jsx)(t.code,{children:`xmlns:xf`}),`는 컴포넌트마다 작성하지 않습니다. 하나의 화면 XML 최상위 루트에서 한 번 선언하면 그 안의 모든 컴포넌트가 상속합니다. 별도 화면 XML이나 WFrame 소스처럼 독립적으로 파싱되는 문서만 각 문서의 루트에서 다시 선언합니다.`]}),`
`,(0,u.jsxs)(t.p,{children:[`현재 WebSquare 지원은 별도 실행 앱이나 WebSquare 엔진을 포함하지 않는 `,(0,u.jsx)(t.strong,{children:`코드 예제 지원`}),`입니다. 정적 표현은 공통 CSS와 마크업을 재사용하고, 데이터 바인딩·화면 전환·WebSquare 컴포넌트 이벤트가 필요한 예제는 프로젝트의 `,(0,u.jsx)(t.code,{children:`scwin`}),` 함수와 데이터 객체 규칙에 맞게 연결합니다. 자동 변환으로 표현하기 어려운 컴포넌트는 Story에서 `,(0,u.jsx)(t.code,{children:`id: 'websquare'`}),` 전용 예제를 선언해 교체할 수 있습니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`html과-gulpnunjucks의-차이`,children:`HTML과 Gulp/Nunjucks의 차이`}),`
`,(0,u.jsxs)(t.p,{children:[`두 구현은 최종적으로 같은 HTML과 CSS를 사용하지만 소스를 작성하고 조립하는 방식이 다릅니다. `,(0,u.jsx)(t.code,{children:`.html`}),`은 브라우저가 직접 읽는 결과물이고, `,(0,u.jsx)(t.code,{children:`.njk`}),`는 Gulp 빌드에서 Nunjucks가 HTML로 변환하는 템플릿 소스입니다.`]}),`
`,(0,u.jsx)(s,{columns:[{label:`방식`},{label:`소스 확장자`},{label:`작성 방식`},{label:`브라우저 사용`},{label:`적합한 경우`}],rows:[[`HTML`,`.html`,`완성된 문서나 컴포넌트 마크업을 직접 작성`,`빌드 없이 직접 로드 가능`,`단일 페이지, 마크업 기준 확인, 다른 도구에 복사할 원본`],[`Gulp / Nunjucks`,`.njk → .html`,`extends, include, block, 변수와 반복문으로 템플릿을 조립`,`Nunjucks 소스를 Gulp로 먼저 HTML로 변환`,`공통 레이아웃과 여러 정적 페이지를 반복 생성하는 사이트`]],codeColumns:[1]}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`apps/html/src/components`}),`의 `,(0,u.jsx)(t.code,{children:`.html`}),`은 시맨틱 마크업의 기준이고, `,(0,u.jsx)(t.code,{children:`apps/gulp/src/components`}),`의 `,(0,u.jsx)(t.code,{children:`.njk`}),`는 같은 구조를 정적 사이트 템플릿에서 재사용하기 위한 구현입니다. `,(0,u.jsx)(t.code,{children:`.njk`}),` 파일을 `,(0,u.jsx)(t.code,{children:`<script>`}),`나 `,(0,u.jsx)(t.code,{children:`<link>`}),`로 브라우저에 직접 연결하지 않습니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`vue와-nuxt의-차이`,children:`Vue와 Nuxt의 차이`}),`
`,(0,u.jsxs)(t.p,{children:[`Vue는 사용자 인터페이스를 만드는 라이브러리이고, Nuxt는 Vue를 기반으로 라우팅·렌더링·메타데이터·배포 구조까지 제공하는 애플리케이션 프레임워크입니다. 따라서 둘은 대체 관계가 아니라 `,(0,u.jsx)(t.strong,{children:`Vue 컴포넌트를 Nuxt 애플리케이션에서 재사용하는 관계`}),`입니다.`]}),`
`,(0,u.jsx)(s,{columns:[{label:`방식`},{label:`시작과 경로`},{label:`렌더링`},{label:`장점`},{label:`확인할 점`},{label:`적합한 경우`}],rows:[[`Vue SPA`,`index.html · src/main.js · Vue Router`,`브라우저에서 앱을 실행한 뒤 화면과 경로를 처리`,`구조와 설정이 단순하고 정적 호스팅이 쉬움`,`초기 HTML, 검색·공유 메타데이터, 직접 URL 접근을 별도로 구성`,`검색 노출보다 클라이언트 상호작용이 중요한 도구·관리 화면`],[`Nuxt`,`app.vue · pages/ · layouts/`,`SSR·정적 생성·클라이언트 렌더링을 경로별로 구성`,`파일 기반 라우팅, 메타데이터, 데이터 로딩과 배포 규칙을 통합`,`서버와 브라우저의 실행 경계 및 렌더링 전략을 구분`,`검색 가능한 문서·콘텐츠와 서버 렌더링이 필요한 Vue 앱`]],codeColumns:[1]}),`
`,(0,u.jsxs)(t.p,{children:[`이 저장소에서 `,(0,u.jsx)(t.code,{children:`@uxkm/nuxt`}),`는 `,(0,u.jsx)(t.code,{children:`@uxkm/vue`}),`의 UI 컴포넌트를 다시 만들지 않습니다. 공통 컴포넌트와 상태 관리는 Vue가 담당하고, Nuxt 앱에는 파일 기반 페이지와 `,(0,u.jsx)(t.code,{children:`NuxtLink`}),`, `,(0,u.jsx)(t.code,{children:`NuxtImg`}),`처럼 Nuxt에 종속된 통합만 둡니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`react와-nextjs의-차이`,children:`React와 Next.js의 차이`}),`
`,(0,u.jsx)(t.p,{children:`React는 사용자 인터페이스와 상태를 구성하는 라이브러리이고, Next.js는 React를 기반으로 라우팅·서버/클라이언트 경계·렌더링·메타데이터를 제공하는 애플리케이션 프레임워크입니다. Next.js에서도 UI의 기본 단위는 React 컴포넌트입니다.`}),`
`,(0,u.jsx)(s,{columns:[{label:`방식`},{label:`시작과 경로`},{label:`렌더링`},{label:`장점`},{label:`확인할 점`},{label:`적합한 경우`}],rows:[[`React SPA`,`index.html · src/main.jsx · React Router`,`브라우저에서 앱을 실행한 뒤 화면과 경로를 처리`,`구조와 설정이 단순하고 정적 호스팅이 쉬움`,`초기 HTML, 검색·공유 메타데이터, 직접 URL 접근을 별도로 구성`,`검색 노출보다 클라이언트 상호작용이 중요한 도구·관리 화면`],[`Next.js`,`app/layout.jsx · app/**/page.jsx`,`서버·정적·클라이언트 렌더링을 라우트와 컴포넌트별로 구성`,`App Router, 메타데이터, 데이터 로딩과 배포 규칙을 통합`,`서버·클라이언트 컴포넌트 경계와 배포 방식별 제약을 구분`,`검색 가능한 문서·콘텐츠와 서버 렌더링이 필요한 React 앱`]],codeColumns:[1]}),`
`,(0,u.jsxs)(t.p,{children:[`이 저장소에서 `,(0,u.jsx)(t.code,{children:`@uxkm/next`}),`는 `,(0,u.jsx)(t.code,{children:`@uxkm/react`}),`의 UI 컴포넌트를 재사용합니다. 공통 컴포넌트와 상태 관리는 React가 담당하고, Next.js 앱에는 App Router 페이지와 프레임워크 전용 링크·이미지·렌더링 통합만 둡니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`공통-구현-원칙`,children:`공통 구현 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`구조`}),` — 블록(`,(0,u.jsx)(t.code,{children:`.btn`}),`), 파트(`,(0,u.jsx)(t.code,{children:`.btn_label`}),`), 변형(`,(0,u.jsx)(t.code,{children:`.btn_filled`}),`), 의미 색상(`,(0,u.jsx)(t.code,{children:`.color_primary`}),`), 상태(`,(0,u.jsx)(t.code,{children:`.is-open`}),`)를 조합합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`마크업`}),` — HTML과 Nunjucks는 공통 마크업을 직접 사용하고 Vue·React 계열은 동일한 클래스와 접근성 속성을 컴포넌트가 생성합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`스타일`}),` — 모든 앱은 `,(0,u.jsx)(t.code,{children:`packages/styles`}),`에서 생성한 동일한 CSS와 디자인 토큰을 사용합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`확장`}),` — Nuxt는 Vue 컴포넌트를, Next.js는 React 컴포넌트를 재사용하며 프레임워크 전용 기능만 확장합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`WebSquare`}),` — HTML 기준 마크업을 XML 호환 XHTML로 제공하고 프로젝트별 데이터 바인딩과 이벤트는 화면 규칙에 맞게 연결합니다.`]}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`컴포넌트-카테고리`,children:`컴포넌트 카테고리`}),`
`,(0,u.jsx)(s,{columns:[{label:`카테고리`},{label:`주요 컴포넌트`},{label:`개수`}],rows:[[`레이아웃`,`Container, Grid, Flex, Divider, Space`,`5`],[`기본 요소`,`Button, Typography, Icon, Link`,`4`],[`데이터 표시`,`Avatar, Badge, Tag, Card, Table, List 등`,`10`],[`폼`,`Form Layout, Input, Select, Checkbox, Date Picker 등`,`11`],[`피드백`,`Alert, Snackbar, Modal, Drawer, Tooltip 등`,`10`],[`네비게이션`,`Navbar, Menu, Tabs, Breadcrumb, Pagination 등`,`7`],[`기타`,`Accordion, Collapse, Carousel, Affix, Back Top`,`5`],[`전체`,``,`52`]]}),`
`,(0,u.jsx)(t.h2,{id:`프레임워크별-소개-문서`,children:`프레임워크별 소개 문서`}),`
`,(0,u.jsxs)(t.p,{children:[`각 프레임워크 앱은 `,(0,u.jsx)(t.strong,{children:`Overview → Getting Started → Design Tokens`}),`의 동일한 소개 구조를 갖습니다. Storybook의 현재 소개 섹션은 여섯 앱의 문서와 WebSquare 코드 예제 사용법을 통합해 공통 원칙과 프레임워크별 차이를 함께 보여 줍니다.`]}),`
`,(0,u.jsx)(s,{columns:[{label:`프레임워크`},{label:`소개 문서 경로`},{label:`파일 형식`}],rows:[[`HTML`,`apps/html/src/introduction`,`.html`],[`Gulp / Nunjucks`,`apps/gulp/src/introduction`,`.njk`],[`Vue`,`apps/vue/src/introduction`,`.vue`],[`React`,`apps/react/src/introduction`,`.jsx`],[`Nuxt`,`apps/nuxt/app/introduction`,`.vue`],[`Next.js`,`apps/next/src/introduction`,`.jsx`],[`WebSquare`,`apps/storybook/src/shared/webSquareExample.ts`,`.xml 코드 생성`]],codeColumns:[1,2]}),`
`,(0,u.jsx)(t.h2,{id:`문서-읽는-순서`,children:`문서 읽는 순서`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`설치 및 사용`}),`에서 워크스페이스와 공통 스타일 연결 방식을 확인합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`디자인 토큰`}),`에서 색상, 간격, 타이포그래피, 테마의 기준을 확인합니다.`]}),`
`,(0,u.jsxs)(t.li,{children:[(0,u.jsx)(t.strong,{children:`아키텍처`}),`에서 앱과 공통 패키지의 의존 관계를 확인합니다.`]}),`
`,(0,u.jsx)(t.li,{children:`왼쪽 메뉴에서 컴포넌트를 선택하고 Preview, 프레임워크별 코드, API, 접근성을 확인합니다.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};