---
id: svelte-typescript
group: 프레임워크
parent: framework-svelte
path: guides/frameworks/svelte/typescript/
label: TypeScript
title: Svelte TypeScript
eyebrow: Svelte · TypeScript
lead: component prop type과 package import를 TypeScript로 안전하게 사용합니다.
order: 76
---

## script lang="ts"

```svelte
<script lang="ts">
  import Button from '@uxkm/svelte/button';

  let saved = $state(false);
</script>

<Button variant="filled" onclick={() => (saved = true)}>저장</Button>
```

Svelte 5 component는 `<script lang="ts">`와 `$props()` generic으로 prop type을 선언합니다.

## Props type

```svelte
<script lang="ts">
  interface Props {
    label: string;
    disabled?: boolean;
    onclick?: (event: MouseEvent) => void;
  }

  let { label, disabled = false, onclick }: Props = $props();
</script>
```

component는 package에서 export하는 prop interface를 그대로 사용합니다. variant literal union은 Storybook API와 동일한 값만 허용합니다.

## bind: type

```svelte
<script lang="ts">
  import Input from '@uxkm/svelte/input';

  let email = $state('');
</script>

<Input bind:value={email} type="email" />
```

`bind:value` 대상은 Input API가 기대하는 string type과 일치해야 합니다.

## 공식 문서

- [Svelte TypeScript](https://svelte.dev/docs/svelte/typescript)
