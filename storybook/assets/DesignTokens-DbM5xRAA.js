import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CJGa1lBW.js";import{c as i,u as a}from"./blocks-SMgDWto2.js";import{n as o,t as s}from"./IntroductionCards-DatdkIgS.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`디자인 토큰`}),`
`,(0,u.jsx)(t.h1,{id:`디자인-토큰`,children:`디자인 토큰`}),`
`,(0,u.jsx)(t.p,{children:`색상, 간격, 모서리, 타이포그래피, 모션과 레이아웃 값을 의미 있는 CSS 변수로 관리합니다. 프레임워크가 달라도 같은 토큰을 참조하므로 디자인 변경과 테마 전환이 모든 앱에 일관되게 반영됩니다.`}),`
`,(0,u.jsx)(t.h2,{id:`원본과-배포`,children:`원본과 배포`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-text`,children:`packages/styles/
├── foundations/       # 토큰·테마·폰트·reset
├── layouts/           # 앱 셸·사이드바·콘텐츠
├── components/        # 컴포넌트 범위 토큰과 스타일
├── behaviors/         # 공통 동작의 시각 효과
├── shared/            # SCSS 변수와 mixin 진입점
└── index.scss         # 모든 프레임워크가 공유하는 빌드 진입점
        │
        └─ pnpm build:styles
             └─ apps/{html,gulp,vue,react,nuxt,next,storybook}/public/styles/uxkm.css
`})}),`
`,(0,u.jsxs)(t.p,{children:[`생성된 CSS는 편집하지 않습니다. 토큰 또는 컴포넌트 SCSS를 수정한 뒤 `,(0,u.jsx)(t.code,{children:`pnpm build:styles`}),`로 다시 생성합니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`전역-토큰`,children:`전역 토큰`}),`
`,(0,u.jsx)(t.p,{children:`런타임에 테마나 특정 영역에서 바꿀 값은 CSS 변수로, 브레이크포인트·폰트 스택처럼 컴파일할 때만 필요한 값은 SCSS 변수로 관리합니다. 컴포넌트 스타일은 실제 수치를 반복하지 않고 이 토큰을 조합합니다.`}),`
`,(0,u.jsx)(s,{columns:[{label:`범주`},{label:`토큰과 기본값`},{label:`용도`}],rows:[[`Spacing`,`--space-xs 0.25rem · --space-sm 0.5rem · --space-md 1rem · --space-lg 1.5rem · --space-xl 2rem · --space-2xl 3rem`,`margin, padding, gap`],[`Radius`,`--radius-sm 6px · --radius-md 10px · --radius-lg 12px · --radius-pill 9999px`,`입력 필드, 코드 블록, 카드, 원형 UI`],[`Type size`,`--text-size-xs 0.75rem · --text-size-sm 0.8125rem · --text-size-base 0.875rem · --text-size-lg 1rem · --text-size-xl 1.125rem`,`캡션부터 강조 본문까지 공통 텍스트 크기`],[`Motion`,`--transition-fast 0.15s ease · --transition-base 0.2s ease`,`호버·포커스와 패널 전환`],[`Ripple`,`--ripple-opacity 0.18 · --ripple-duration 550ms · --ripple-easing cubic-bezier(0, 0, 0.2, 1)`,`클릭 피드백의 강도와 시간`],[`Focus`,`--focus-outline-width 2px · --focus-outline-offset 2px · --focus-shadow-width 3px`,`키보드 포커스 표시`],[`Layout`,`--sidebar-width 280px · --header-height 56px`,`가이드 공통 셸 크기`]],codeColumns:[1]}),`
`,(0,u.jsx)(t.h2,{id:`의미-색상과-테마`,children:`의미 색상과 테마`}),`
`,(0,u.jsxs)(t.p,{children:[`색상은 실제 hex 대신 역할로 이름을 정합니다. `,(0,u.jsx)(t.code,{children:`data-theme`}),`이 바뀌면 동일한 컴포넌트가 다른 값을 사용합니다.`]}),`
`,(0,u.jsx)(s,{columns:[{label:`역할`},{label:`주요 토큰`},{label:`사용 기준`}],rows:[[`Surface`,`--color-bg, --color-surface, --color-surface-raised, --color-surface-disabled`,`페이지·카드·들어 올린 영역·비활성 배경`],[`Text`,`--color-text, --color-text-muted, --color-text-disabled`,`본문·보조 설명·비활성 텍스트`],[`Border`,`--color-border, --color-border-subtle, --color-border-disabled`,`입력과 컨트롤·약한 구분·비활성 경계`],[`Accent`,`--color-accent, --color-accent-hover, --color-accent-text, --color-accent-muted, --color-on-accent`,`채움·호버·텍스트·약한 배경·채움 위 콘텐츠를 구분`],[`Status`,`--color-success, --color-danger, --color-warning와 각 -hover, -text, -disabled 쌍`,`성공·위험·경고의 채움, 텍스트와 비활성 상태`],[`Overlay`,`--color-header-bg, --color-overlay`,`반투명 헤더와 모달·드로어 딤드 영역`],[`Elevation`,`--shadow-sm, --shadow-md`,`카드와 떠 있는 패널의 높이 단계`]],codeColumns:[1]}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`-text`}),`는 바탕 위 텍스트에, `,(0,u.jsx)(t.code,{children:`--color-on-*`}),`은 의미 색상으로 채운 면 위의 텍스트에 사용합니다. 채움 색상을 텍스트 색상으로 대신 사용하거나 `,(0,u.jsx)(t.code,{children:`--color-on-*`}),`을 일반 배경에 사용하지 않습니다. `,(0,u.jsx)(t.code,{children:`_themes.scss`}),`의 색상 조합은 본문 텍스트, UI 경계, 포커스 표시가 WCAG 2.2 AA 대비 기준을 만족하도록 관리합니다.`]}),`
`,(0,u.jsx)(t.h2,{id:`프레임워크별-사용`,children:`프레임워크별 사용`}),`
`,(0,u.jsx)(t.p,{children:`CSS 변수이므로 HTML, SCSS, Vue SFC, CSS Module 어디에서나 같은 방식으로 사용합니다.`}),`
`,(0,u.jsx)(s,{columns:[{label:`프레임워크`},{label:`작성 위치`},{label:`사용 방식`}],rows:[[`HTML`,`.html 또는 별도 .css`,`style 속성이나 CSS 선택자에서 var() 사용`],[`Gulp / Nunjucks`,`.njk와 .scss`,`템플릿 클래스의 SCSS에서 var() 사용`],[`Vue`,`Vue SFC의 <style>`,`scoped 또는 전역 스타일에서 var() 사용`],[`React`,`.css, .scss 또는 CSS Module`,`클래스 스타일에서 var() 사용`],[`Nuxt`,`Vue SFC의 <style>`,`Vue와 동일한 토큰을 재사용`],[`Next.js`,`CSS Module 또는 전역 CSS`,`React와 동일한 토큰을 재사용`]]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.panel {
  padding: var(--space-lg);
  color: var(--color-text);
  background: var(--color-surface);
  border-radius: var(--radius-md);
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`scss와-css에서-사용`,children:`SCSS와 CSS에서 사용`}),`
`,(0,u.jsxs)(t.p,{children:[`SCSS는 스타일 구조와 컴파일 타임 헬퍼를 제공하고, 실제 컴포넌트 값은 가능한 한 `,(0,u.jsx)(t.code,{children:`var()`}),`로 CSS 토큰을 참조합니다. 이 방식은 빌드 후에도 테마 전환과 범위별 재정의를 가능하게 합니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-scss`,children:`.card {
  padding: var(--space-lg);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg);
  color: var(--color-text);
  background: var(--color-surface);
  font-size: var(--text-size-sm);
  transition: box-shadow var(--transition-fast);
}
`})}),`
`,(0,u.jsx)(t.p,{children:`토큰은 상속되므로 컨테이너에 재정의하면 그 안의 컴포넌트에만 적용됩니다. 전역 값을 바꾸지 않고 밀도나 크기가 다른 영역을 만들 때 사용합니다.`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.compact-panel {
  --space-md: 0.75rem;
  --btn-padding-y: var(--space-xs);
  --icon-size: 1rem;
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`테마-동작`,children:`테마 동작`}),`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.code,{children:`:root`}),`와 `,(0,u.jsx)(t.code,{children:`[data-theme="light"]`}),`에는 라이트 테마가, `,(0,u.jsx)(t.code,{children:`[data-theme="dark"]`}),`에는 다크 테마가 적용됩니다. 명시적인 속성이 없으면 `,(0,u.jsx)(t.code,{children:`prefers-color-scheme`}),` 미디어 쿼리가 시스템 설정을 선택합니다. 테마별로는 의미 색상의 값만 달라지고 컴포넌트 선택자와 마크업은 바뀌지 않습니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`[data-theme='light'] {
  --color-accent: #3d66c4;
  --color-on-accent: #ffffff;
}

[data-theme='dark'] {
  --color-accent: #386bc0;
  --color-on-accent: #ffffff;
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`컴포넌트-토큰`,children:`컴포넌트 토큰`}),`
`,(0,u.jsxs)(t.p,{children:[`전역 토큰만으로 설명하기 어려운 값은 컴포넌트 범위 변수로 제공합니다. 예를 들어 `,(0,u.jsx)(t.code,{children:`--icon-size`}),`, `,(0,u.jsx)(t.code,{children:`--btn-padding-y`}),`, `,(0,u.jsx)(t.code,{children:`--input-max-width`}),`처럼 컴포넌트 이름을 접두어로 사용합니다. 각 변수의 실제 기본값은 해당 컴포넌트 SCSS와 Storybook 문서의 디자인 토큰 섹션에서 확인합니다. 페이지나 컨테이너에서 이 변수를 재정의하면 해당 범위만 조정할 수 있습니다.`]}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-css`,children:`.compact-actions {
  --btn-padding-y: var(--space-xs);
  --icon-size: 1rem;
}
`})}),`
`,(0,u.jsx)(t.h2,{id:`변경-원칙`,children:`변경 원칙`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`같은 의미의 새 값을 프레임워크 앱 안에 하드코딩하지 않습니다.`}),`
`,(0,u.jsx)(t.li,{children:`색상은 시각적 이름보다 역할을 나타내는 semantic token을 우선합니다.`}),`
`,(0,u.jsx)(t.li,{children:`전역 토큰 추가 전 컴포넌트 범위 값인지 확인합니다.`}),`
`,(0,u.jsx)(t.li,{children:`라이트와 다크 테마, 비활성 상태, 포커스 대비를 함께 검증합니다.`}),`
`,(0,u.jsx)(t.li,{children:`수정 후 공통 CSS를 다시 빌드하고 Storybook의 양쪽 테마에서 확인합니다.`}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),o()})))()}d();export{l as default};