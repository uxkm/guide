---
id: astro-components
group: 프레임워크
parent: framework-astro
path: guides/frameworks/astro/components/
label: 컴포넌트 통합
title: Astro 컴포넌트 통합
eyebrow: Astro · Components
lead: React·Vue package를 island wrapper로 통합합니다.
order: 124
---

Astro는 component library의 별도 구현체가 아닙니다. 기존 `@uxkm/react` 또는 `@uxkm/vue`를 island로 가져와 사용합니다.

## React integration

```astro
---
import BasicDemo from '../../components/BasicDemo.jsx';
---

<BasicDemo client:load />
```

```jsx
import Button from '@uxkm/react/button';
import { TypoTitle } from '@uxkm/react/typography';

export default function BasicDemo() {
  return (
    <>
      <TypoTitle level={1}>기본 요소</TypoTitle>
      <Button variant="filled">저장</Button>
    </>
  );
}
```

component API, variant, 접근성 계약은 React 가이드와 Storybook React 탭을 기준으로 합니다.

## Vue integration

```astro
---
import BasicDemo from '../../components/BasicDemo.vue';
---

<BasicDemo client:load />
```

```vue
<script setup>
import Button from '@uxkm/vue/button';
import { TypoTitle } from '@uxkm/vue/typography';
</script>

<template>
  <TypoTitle :level="1">기본 요소</TypoTitle>
  <Button variant="filled">저장</Button>
</template>
```

Vue integration을 선택한 프로젝트는 `@uxkm/vue/*`를 그대로 사용합니다.

## .astro component와의 역할 분담

| 역할 | 담당 |
| --- | --- |
| page shell, SEO metadata, 정적 navigation | `.astro` |
| interactive UI | React·Vue island wrapper |
| 공통 style | `public/styles/uxkm.css` |

`.astro` 파일 안에 복잡한 client state logic을 직접 작성하지 않고 wrapper component로 분리합니다.

## 관련 문서

- [React UI 표현](../../react/jsx-components/index.html)
- [Vue 컴포넌트 심화](../../vue/components/index.html)

## 공식 문서

- [Astro Add integrations](https://docs.astro.build/en/guides/integrations-guide/)
