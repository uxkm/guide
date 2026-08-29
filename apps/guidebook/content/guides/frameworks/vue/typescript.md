---
id: vue-typescript
group: 프레임워크
parent: framework-vue
path: guides/frameworks/vue/typescript/
label: TypeScript
title: Vue와 TypeScript
eyebrow: Vue · TypeScript
lead: Composition API에서 props, emits, ref와 template ref의 type을 명시합니다.
order: 40
---

## Component 계약

```vue
<script setup lang="ts">
type Props = {
  label: string;
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const emit = defineEmits<{
  select: [value: string];
}>();
</script>
```

type 기반 `defineProps`와 `defineEmits`는 component 사용 지점에서 잘못된 prop과 event payload를 발견하게 합니다. runtime validation이 필요한 외부 입력은 TypeScript type만 믿지 않고 별도로 검사합니다.

## 반응형 type

초기값만으로 추론이 불명확하면 generic을 명시합니다. nullable template ref는 mount 전 `null` 상태를 포함합니다.

```typescript
const selectedId = ref<string | null>(null);
const trigger = ref<HTMLButtonElement | null>(null);
```

## 기준

public component prop, emit과 slot 계약은 package export type에 포함합니다. app에서 같은 type을 다시 선언하지 말고 package type을 가져와 사용합니다. template type check와 build를 CI에서 함께 실행합니다.

## 공식 문서

- [Vue TypeScript 개요](https://ko.vuejs.org/guide/typescript/overview.html)
- [Composition API와 TypeScript](https://ko.vuejs.org/guide/typescript/composition-api.html)
