---
id: vue-components
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/components/
label: 컴포넌트 심화
title: Vue 컴포넌트 심화
eyebrow: Vue · Components
lead: props, emits, v-model과 slot으로 컴포넌트의 입력과 출력 계약을 구성합니다.
order: 34
---

## Props와 이벤트

```vue
<script setup>
defineProps({
  label: { type: String, required: true },
  disabled: { type: Boolean, default: false },
});
const emit = defineEmits(['activate']);
</script>

<template>
  <button type="button" :disabled="disabled" @click="emit('activate')">
    {{ label }}
  </button>
</template>
```

Props는 부모에서 자식으로 내려오는 읽기 전용 값입니다. 객체나 배열 prop도 자식에서 직접 변경하지 않고 event를 보내 부모가 갱신하게 합니다.

## v-model

Input은 `modelValue` prop과 `update:modelValue` event를 제공하므로 다음처럼 사용합니다.

```vue
<script setup>
import { ref } from 'vue';
import Input from '@uxkm/vue/input';

const email = ref('');
</script>

<template>
  <label for="email">이메일</label>
  <Input id="email" v-model="email" type="email" clearable />
</template>
```

Vue 3.4 이상에서 직접 양방향 component를 만들 때는 `defineModel()`을 사용할 수 있습니다.

## Slot

```vue
<Button variant="filled">
  <template #icon-before><SaveIcon /></template>
  저장
</Button>
```

default slot은 기본 콘텐츠, 이름 있는 slot은 `#이름`으로 전달합니다. slot의 시맨틱 구조와 접근 가능한 이름은 최종 DOM을 기준으로 확인합니다.

## 폼 예제

```vue
<script setup>
import Button from '@uxkm/vue/button';
import Input from '@uxkm/vue/input';
</script>

<template>
  <form @submit.prevent="submit">
    <Input v-model="email" type="email" required />
    <Button type="submit">저장</Button>
  </form>
</template>
```

## 공식 문서

- [Props](https://ko.vuejs.org/guide/components/props.html)
- [컴포넌트 이벤트](https://ko.vuejs.org/guide/components/events.html)
- [컴포넌트 v-model](https://ko.vuejs.org/guide/components/v-model.html)
- [슬롯](https://ko.vuejs.org/guide/components/slots.html)
