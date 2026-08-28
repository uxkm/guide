---
id: framework-vue
group: 프레임워크
path: guides/frameworks/vue/
label: Vue
title: Vue
eyebrow: Frameworks
lead: Vue 3.5의 공식 가이드 흐름에 따라 UXKM 컴포넌트 구현 문법을 확인합니다.
order: 30
---

이 저장소는 Vue 3.5의 Single-File Component와 Composition API를 사용합니다. 루트에서 `pnpm dev:vue`를 실행하면 6103 포트에 개발 서버를 엽니다.

## Vue란?

Vue는 웹 사용자 interface를 만들기 위한 progressive JavaScript framework입니다. HTML 기반 template에 state를 선언적으로 연결하고, reactive state가 변경되면 필요한 DOM만 갱신합니다. 기존 HTML 화면의 일부에 점진적으로 적용할 수도 있고 Router와 상태 관리 도구를 결합해 전체 application을 구성할 수도 있습니다.

## 주요 특징

- HTML, CSS, JavaScript를 한 파일에서 관리하는 Single-File Component
- `ref`, `reactive`, `computed` 기반의 반응형 상태 모델
- props와 emits를 이용한 명시적인 부모·자식 component 계약
- directive와 template 문법을 이용한 조건·목록·event·form binding
- Composition API를 이용한 상태 logic의 분리와 재사용

## UXKM에서의 역할

`@uxkm/vue`는 UXKM의 시각 token과 접근성 계약을 Vue component API로 제공합니다. prop은 variant와 상태를 전달하고, emit과 `v-model`은 사용자 입력을 부모 state에 연결하며, slot은 icon이나 복합 콘텐츠를 합성합니다. Nuxt는 동일한 component를 재사용하되 SSR과 hydration 결과도 함께 검증합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [빠른 시작](quick-start/index.html) | 프로젝트 생성, 앱 실행과 UXKM 연결 |
| [핵심 기초](template-syntax/index.html) | 템플릿, 조건·목록, 이벤트와 폼 바인딩 |
| [상태와 반응성](reactivity/index.html) | `ref`, `computed`, `watch`와 폼 상태 |
| [컴포넌트 심화](components/index.html) | props, emits, `v-model`, slot과 UXKM 사용법 |
| [페이지와 라우팅](pages-routing/index.html) | Vue Router 수동 연결과 Nuxt 파일 기반 route 생성 |
| [재사용성](reusability/index.html) | composable, custom directive와 plugin |
| [내장 컴포넌트](built-ins/index.html) | Transition, KeepAlive, Teleport와 Suspense |
| [확장하기](scaling-up/index.html) | Router, 상태 관리, 테스트와 SSR |
| [베스트 프랙티스](best-practices/index.html) | 배포, 성능, 접근성과 보안 |
| [TypeScript](typescript/index.html) | Composition API와 component type |
| [추가 주제](extra-topics/index.html) | 반응성·렌더링 심화와 Web Components |

## UXKM 사용 시작

```vue
<script setup>
import Button from '@uxkm/vue/button';
</script>

<template>
  <Button variant="filled">저장</Button>
</template>
```

Nuxt에서도 `@uxkm/vue/*` export를 재사용합니다. SSR 환경에서는 server와 client가 만드는 초기 마크업이 일치하는지 함께 확인합니다.

## 공식 문서

- [Vue 한국어 가이드](https://ko.vuejs.org/guide/introduction.html)
- [Vue 한국어 API](https://ko.vuejs.org/api/)
