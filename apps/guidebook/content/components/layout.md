---
id: components-layout
group: 컴포넌트
path: components/layout/
label: 레이아웃
title: 레이아웃
eyebrow: Components · 5
storybookCategory: 레이아웃
lead: 콘텐츠의 너비, 정렬, 간격과 반응형 배치를 구성하는 컴포넌트입니다.
order: 5
---

레이아웃 컴포넌트는 콘텐츠의 읽기 순서를 바꾸지 않으면서 너비, 정렬, 간격을 일관되게 제어합니다. 화면 크기별 배치만 고려하지 말고 콘텐츠가 늘어나거나 번역되어도 구조가 유지되는지 확인해야 합니다.

## 컴포넌트 목록

| 컴포넌트 | 사용 목적 | 사용 시점과 주의사항 |
| --- | --- | --- |
| Container | 페이지 콘텐츠의 최대 너비와 좌우 여백 제한 | 페이지 본문이나 주요 섹션의 읽기 폭을 통일할 때 사용합니다. 내부 요소마다 별도 최대 너비를 중복 선언하지 않습니다. |
| Divider | 서로 다른 콘텐츠 그룹을 시각적으로 구분 | 여백만으로 관계가 불분명할 때 사용합니다. 장식 목적이라면 보조기술에서 의미 없는 요소로 처리합니다. |
| Flex | 한 방향의 정렬, 순서와 유연한 크기 배치 | 버튼 그룹, 툴바, 수직 스택처럼 행 또는 열 한 축이 핵심일 때 사용합니다. 시각적 순서로 DOM 순서를 뒤집지 않습니다. |
| Grid | 행과 열이 연관된 이차원 구조 배치 | 카드 목록, 대시보드, 폼 영역처럼 여러 열을 함께 제어할 때 사용합니다. 좁은 화면의 열 축소 규칙을 정의합니다. |
| Space | 인접 요소 사이에 토큰 기반 간격 적용 | 반복되는 형제 요소 사이의 간격을 통일할 때 사용합니다. 레이아웃 보정을 위한 임의 margin과 혼용하지 않습니다. |

## 선택 기준

행 또는 열 한 방향의 흐름은 Flex, 행과 열의 정렬 관계가 동시에 필요하면 Grid를 사용합니다. Container는 페이지 폭, Space는 요소 관계를 담당하도록 책임을 나눕니다. Divider를 단순한 여백 대용으로 사용하지 않습니다.

## 반응형 확인 항목

- 최소 지원 너비에서 가로 스크롤, 잘림, 겹침이 발생하지 않는지 확인합니다.
- CSS의 시각적 재배치가 키보드 탐색과 스크린 리더의 읽기 순서를 바꾸지 않도록 합니다.
- 고정 높이는 가능한 한 피하고 긴 텍스트와 동적 콘텐츠를 수용합니다.
- 간격과 열 너비는 디자인 토큰과 공통 breakpoint를 사용합니다.

## 실제 UI 페이지 만들기

`/components/layout` 화면은 개별 component 모양보다 중첩 관계와 breakpoint 동작이 보이도록 구성합니다. Container 안에 heading을 두고 Flex와 Grid의 차이, Divider와 Space의 역할을 한 화면에서 비교합니다.

```vue
<script setup>
import Container from '@uxkm/vue/container';
import Divider from '@uxkm/vue/divider';
import Flex from '@uxkm/vue/flex';
import Grid from '@uxkm/vue/grid';
import Space from '@uxkm/vue/space';
</script>

<template>
  <main class="guide_content">
    <Container size="lg">
      <h1>레이아웃</h1>
      <Space vertical size="lg">
        <Flex gap="lg" wrap>
          <article class="category_card">기본 정보</article>
          <article class="category_card">최근 활동</article>
        </Flex>
        <Divider />
        <Grid :columns="3" gap="lg">
          <article v-for="item in 3" :key="item" class="category_card">
            카드 {{ item }}
          </article>
        </Grid>
      </Space>
    </Container>
  </main>
</template>
```

실제 component의 prop 이름은 Storybook API와 package source를 기준으로 확인합니다. 예제 페이지에서는 desktop 모양만 만들지 않고 좁은 화면의 열 축소, 긴 제목, keyboard 읽기 순서까지 함께 검증합니다.

## 페이지와 메뉴 연결

Basic 화면에서 `/components/layout`로 이동하는 링크를 제공하고, application의 공통 navigation에도 두 경로를 등록합니다. Vue·React Vite 앱은 route 설정 파일에 페이지 component를 명시적으로 연결합니다. Nuxt와 Next.js는 아래 위치에 파일을 추가하면 route가 자동 생성되므로 별도 route 배열을 만들지 않습니다.

```text
apps/nuxt/app/pages/components/layout.vue  → /components/layout
apps/next/app/components/layout/page.jsx   → /components/layout
```

상세 설정과 navigation 예제는 [Vue 페이지와 라우팅](../../guides/frameworks/vue/pages-routing/index.html)과 [React 페이지와 라우팅](../../guides/frameworks/react/pages-routing/index.html)을 참고합니다.
