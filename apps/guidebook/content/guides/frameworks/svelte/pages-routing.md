---
id: svelte-pages-routing
group: 프레임워크
parent: framework-svelte
path: guides/frameworks/svelte/pages-routing/
label: 페이지와 라우팅
title: Svelte와 SvelteKit 페이지 라우팅
eyebrow: Svelte · SvelteKit · Routing
lead: 기본 요소와 레이아웃 UI 페이지를 만들고 SvelteKit 파일 기반 라우팅으로 자동 생성합니다.
order: 75
---

## 만들 경로

| UI 페이지 | SvelteKit 경로 | 포함할 내용 |
| --- | --- | --- |
| 기본 요소 | `/components/basic` | Button, Icon, Link, Typography의 실제 조합과 상태 |
| 레이아웃 | `/components/layout` | Container, Divider, Flex, Grid, Space의 반응형 조합 |

page component는 Storybook story를 복사하는 파일이 아닙니다. package component를 import하고 heading, navigation, loading·empty 상태를 포함한 실제 화면 문맥을 구성합니다.

## SvelteKit: 파일로 Route 자동 생성

SvelteKit은 `src/routes` 아래 파일 경로를 기준으로 route를 생성합니다. 별도 route 배열을 만들지 않습니다.

```text
apps/sveltekit/src/routes/
└── components/
    ├── +layout.svelte
    ├── basic/
    │   └── +page.svelte   → /components/basic
    └── layout/
        └── +page.svelte   → /components/layout
```

`+page.svelte`는 `@uxkm/svelte/*`에서 필요한 component를 import합니다. 페이지 최상위에는 `main`, 페이지 제목에는 `h1`을 사용하고 component별 예제 section은 `h2`로 구분합니다.

## Layout과 Navigation

```svelte
<!-- src/routes/components/+layout.svelte -->
<script>
  import { page } from '$app/state';
</script>

<nav aria-label="컴포넌트 분류">
  <a href="/components/basic" aria-current={page.url.pathname === '/components/basic' ? 'page' : undefined}>
    기본 요소
  </a>
  <a href="/components/layout" aria-current={page.url.pathname === '/components/layout' ? 'page' : undefined}>
    레이아웃
  </a>
</nav>

<slot />
```

공통 navigation은 layout에 두고 page별 콘텐츠는 `<slot />`에 렌더링합니다. 내부 이동에는 일반 `<a>`보다 SvelteKit의 client navigation을 활용합니다.

## Svelte Vite와의 차이

Svelte만 사용하는 Vite 앱은 client router를 직접 선택해 route를 연결합니다. workspace에서는 SvelteKit을 메타 프레임워크로 두고 `@uxkm/svelte` component를 재사용하는 구성을 권장합니다.

## 확인 순서

1. 두 URL을 주소창에서 직접 열어 정상 응답을 확인합니다.
2. navigation 이동 시 전체 새로고침 없이 page가 바뀌는지 확인합니다.
3. navigation의 현재 항목에 `aria-current="page"`가 전달되는지 확인합니다.
4. route 이동 뒤 document title과 `h1` focus 정책을 검토합니다.
5. SvelteKit은 server render 결과와 hydration 뒤 DOM이 같은지 확인합니다.

## 공식 문서

- [SvelteKit Routing](https://svelte.dev/docs/kit/routing)
- [SvelteKit Project structure](https://svelte.dev/docs/kit/project-structure)
