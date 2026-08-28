---
id: vue-reactivity
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/reactivity/
label: 상태와 반응성
title: Vue 반응형 상태
eyebrow: Vue · Essentials
lead: ref와 computed를 중심으로 화면 상태를 선언하고 필요한 경우 watch로 외부 동작을 연결합니다.
order: 33
---

## ref

`ref()`는 template과 함께 갱신되는 값을 만듭니다. JavaScript에서는 `.value`로 읽고 쓰며 template에서는 자동으로 unwrap됩니다.

```vue
<script setup>
import { ref } from 'vue';

const count = ref(0);
function increment() {
  count.value += 1;
}
</script>

<template>
  <button type="button" @click="increment">{{ count }}회</button>
</template>
```

## computed

기존 상태에서 파생되는 값은 별도 state로 중복 저장하지 않고 `computed()`로 계산합니다.

```javascript
const keyword = ref('');
const items = ref([{ id: 1, label: 'Vue' }]);
const filteredItems = computed(() =>
  items.value.filter((item) => item.label.includes(keyword.value)),
);
```

computed getter는 side effect 없이 값을 반환해야 합니다.

## watch와 watchEffect

`watch()`는 특정 source가 바뀔 때 저장, logging, 비동기 요청처럼 Vue 바깥의 side effect를 실행할 때 사용합니다.

```javascript
watch(keyword, async (value, _oldValue, onCleanup) => {
  const controller = new AbortController();
  onCleanup(() => controller.abort());
  results.value = await search(value, { signal: controller.signal });
});
```

template에 표시할 파생 값을 만들기 위해 watch를 사용하지 않습니다. 그 경우에는 computed가 적합합니다.

## 상태 변경 원칙

- prop은 읽기 전용으로 취급하고 변경이 필요하면 event를 emit합니다.
- DOM에서 계산할 수 있는 UI보다 의미 있는 application state를 먼저 정의합니다.
- 브라우저 API와 DOM 접근은 mount 이후에 수행하고 SSR 초기 결과를 바꾸지 않게 합니다.

## 공식 문서

- [반응형 기초](https://ko.vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [계산된 속성](https://ko.vuejs.org/guide/essentials/computed.html)
- [감시자](https://ko.vuejs.org/guide/essentials/watchers.html)
