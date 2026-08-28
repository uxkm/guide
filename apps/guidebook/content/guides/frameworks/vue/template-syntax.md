---
id: vue-template-syntax
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/template-syntax/
label: 핵심 기초
title: Vue 핵심 기초
eyebrow: Vue · Essentials
lead: 보간과 directive를 사용해 DOM 속성, 이벤트, 조건과 목록을 선언적으로 연결합니다.
order: 32
---

## 보간과 바인딩

```vue
<template>
  <h1>{{ title }}</h1>
  <button
    type="button"
    :class="{ 'is-active': active }"
    :disabled="loading"
    @click="toggle"
  >
    {{ active ? '선택됨' : '선택' }}
  </button>
</template>
```

텍스트는 `{{ 표현식 }}`, 속성은 `v-bind:`의 단축형 `:`, 이벤트는 `v-on:`의 단축형 `@`를 사용합니다. template expression에는 상태를 변경하는 복잡한 로직 대신 계산된 값을 사용합니다.

## 조건부 렌더링

```vue
<template>
  <p v-if="loading" role="status">불러오는 중입니다.</p>
  <p v-else-if="error" role="alert">오류가 발생했습니다.</p>
  <ResultList v-else :items="items" />
</template>
```

`v-if`는 조건에 따라 node를 생성·제거합니다. 자주 토글하면서 초기 렌더링 비용을 감수할 수 있는 단순 UI는 `v-show`도 검토합니다.

## 목록 렌더링

```vue
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.label }}
  </li>
</ul>
```

`key`에는 index보다 항목을 안정적으로 식별하는 primitive 값을 사용합니다. 필터링은 `v-for`와 `v-if`를 같은 요소에 함께 쓰기보다 computed 목록으로 먼저 계산합니다.

## 폼 이벤트

```vue
<form @submit.prevent="submit">
  <input v-model.trim="keyword" aria-label="메뉴 검색" />
  <button type="submit">검색</button>
</form>
```

`.prevent`, `.stop`, 키 수식어 등은 DOM 이벤트의 의도를 template에 드러낼 때 사용합니다.

## 공식 문서

- [Vue 템플릿 문법](https://ko.vuejs.org/guide/essentials/template-syntax.html)
- [조건부 렌더링](https://ko.vuejs.org/guide/essentials/conditional.html)
- [목록 렌더링](https://ko.vuejs.org/guide/essentials/list.html)
- [이벤트 처리](https://ko.vuejs.org/guide/essentials/event-handling.html)
