---
id: vue-pages-routing
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/pages-routing/
label: 페이지와 라우팅
title: Vue와 Nuxt 페이지 라우팅
eyebrow: Vue · Nuxt · Routing
lead: 기본 요소와 레이아웃 UI 페이지를 만들고 Vue Router에 연결하거나 Nuxt 파일 기반 라우팅으로 자동 생성합니다.
order: 35
---

## 만들 경로

| UI 페이지 | Vue·Nuxt 경로 | 포함할 내용 |
| --- | --- | --- |
| 기본 요소 | `/components/basic` | Button, Icon, Link, Typography의 실제 조합과 상태 |
| 레이아웃 | `/components/layout` | Container, Divider, Flex, Grid, Space의 반응형 조합 |

page component는 Storybook story를 복사하는 파일이 아닙니다. package component를 import하고 heading, navigation, loading·empty 상태를 포함한 실제 화면 문맥을 구성합니다.

## Vue Vite: 페이지 파일 생성

```text
apps/vue/src/
├── pages/
│   ├── BasicPage.vue
│   └── LayoutPage.vue
├── router/index.js
├── App.vue
└── main.js
```

`BasicPage.vue`와 `LayoutPage.vue`는 `@uxkm/vue/*`에서 필요한 component를 import합니다. 페이지 최상위에는 `main`, 페이지 제목에는 `h1`을 사용하고 component별 예제 section은 `h2`로 구분합니다.

## Vue Vite: Router 연결

Vue Router를 사용하는 앱에서는 route 배열에 두 page component를 직접 연결합니다.

```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import BasicPage from '../pages/BasicPage.vue';
import LayoutPage from '../pages/LayoutPage.vue';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/components/basic', name: 'components-basic', component: BasicPage },
    { path: '/components/layout', name: 'components-layout', component: LayoutPage },
  ],
});
```

router plugin은 mount 전에 application에 등록합니다.

```javascript
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

`App.vue`에는 현재 경로의 page가 표시될 `<RouterView />`와 page 이동용 `<RouterLink>`를 둡니다.

```vue
<template>
  <nav aria-label="컴포넌트 분류">
    <RouterLink to="/components/basic">기본 요소</RouterLink>
    <RouterLink to="/components/layout">레이아웃</RouterLink>
  </nav>
  <RouterView />
</template>
```

History mode를 사용하면 `/components/basic` 주소를 직접 새로고침했을 때 hosting server가 SPA entry를 반환하도록 fallback 설정이 필요합니다.

## Nuxt: 파일로 Route 자동 생성

Nuxt 4는 `app/pages` 아래 파일 경로를 기준으로 Vue Router route를 생성합니다. 별도 `router/index.js`와 route 배열을 만들지 않습니다.

```text
apps/nuxt/app/pages/
└── components/
    ├── basic.vue   → /components/basic
    └── layout.vue  → /components/layout
```

`app/app.vue`가 존재하면 `<NuxtPage />`가 있어야 현재 page가 렌더링됩니다. 공통 navigation은 `<NuxtLink>`를 사용합니다.

```vue
<template>
  <nav aria-label="컴포넌트 분류">
    <NuxtLink to="/components/basic">기본 요소</NuxtLink>
    <NuxtLink to="/components/layout">레이아웃</NuxtLink>
  </nav>
  <NuxtPage />
</template>
```

동적 경로는 `[id].vue`, 선택적 경로는 `[[slug]].vue` 같은 file naming 규칙을 사용합니다. 자동 생성 route를 임의의 수동 배열과 중복 선언하지 않습니다.

## 확인 순서

1. 두 URL을 주소창에서 직접 열어 정상 응답을 확인합니다.
2. RouterLink·NuxtLink 이동 시 전체 새로고침 없이 page가 바뀌는지 확인합니다.
3. navigation의 현재 항목에 `aria-current="page"`가 전달되는지 확인합니다.
4. route 이동 뒤 document title과 `h1` focus 정책을 검토합니다.
5. Nuxt는 server render 결과와 hydration 뒤 DOM이 같은지 확인합니다.

## 공식 문서

- [Vue Router 시작하기](https://router.vuejs.org/guide/)
- [Nuxt 4 Routing](https://nuxt.com/docs/4.x/getting-started/routing)
- [Nuxt 4 pages directory](https://nuxt.com/docs/4.x/directory-structure/app/pages)

