---
id: vue-quick-start
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/quick-start/
label: 빠른 시작
title: Vue 빠른 시작
eyebrow: Vue · Quick Start
lead: Vue application을 실행하고 Single-File Component에서 component를 사용합니다.
order: 31
---

## 실행 환경

이 저장소의 Vue 앱은 Vite와 Vue 3.5를 사용합니다. workspace root에서 다음 명령을 실행하면 공통 style과 asset을 준비하고 6103 port에 개발 서버를 엽니다.

```bash
pnpm install
pnpm dev:vue
```

새 Vue project를 시작할 때는 Vue 공식 scaffolding 도구로 Router, TypeScript와 test 구성을 선택할 수 있습니다. 기존 workspace에서는 이미 정한 build 설정을 유지합니다.

## 첫 Single-File Component

```vue
<script setup>
import { ref } from 'vue';
import Button from '@uxkm/vue/button';

const saved = ref(false);
</script>

<template>
  <Button variant="filled" @click="saved = true">저장</Button>
  <p v-if="saved" role="status">저장했습니다.</p>
</template>
```

`<script setup>`에서 상태와 import를 선언하고 `<template>`에서 사용합니다. component 이름은 PascalCase, DOM attribute와 component prop은 각 component API를 따릅니다.

## 다음 단계

- template과 directive가 낯설면 **핵심 기초**를 먼저 읽습니다.
- 입력 상태를 다룰 때는 **상태와 반응성**을 확인합니다.
- parent·child 계약은 **컴포넌트 심화**에서 이어집니다.

## 공식 문서

- [Vue 빠른 시작](https://ko.vuejs.org/guide/quick-start.html)

