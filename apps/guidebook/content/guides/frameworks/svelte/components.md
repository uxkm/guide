---
id: svelte-components
group: 프레임워크
parent: framework-svelte
path: guides/frameworks/svelte/components/
label: 컴포넌트 심화
title: Svelte 컴포넌트 심화
eyebrow: Svelte · Components
lead: $props, 이벤트, bind:와 snippet으로 component의 입력과 출력 계약을 구성합니다.
order: 74
---

## Props

```svelte
<script>
  let { label, disabled = false, onclick } = $props();
</script>

<button type="button" {disabled} {onclick}>
  {label}
</button>
```

Props는 부모에서 자식으로 내려오는 읽기 전용 값입니다. 객체나 배열 prop도 자식에서 직접 변경하지 않고 callback을 보내 부모가 갱신하게 합니다.

## bind:

Input은 `value` prop과 `bind:value`를 제공하므로 다음처럼 사용합니다.

```svelte
<script>
  import Input from '@uxkm/svelte/input';

  let email = $state('');
</script>

<label for="email">이메일</label>
<Input id="email" bind:value={email} type="email" clearable />
```

양방향 binding이 필요한 component는 API 문서의 bindable prop 목록을 따릅니다.

## Snippet과 children

```svelte
<Button variant="filled">
  {#snippet iconBefore()}
    <SaveIcon />
  {/snippet}
  저장
</Button>
```

named snippet은 component가 정의한 slot contract에 맞춰 전달합니다. 최종 DOM의 시맨틱 구조와 접근 가능한 이름은 렌더링 결과를 기준으로 확인합니다.

## 폼 예제

```svelte
<script>
  import Button from '@uxkm/svelte/button';
  import Input from '@uxkm/svelte/input';

  let email = $state('');

  function submit(event) {
    event.preventDefault();
  }
</script>

<form onsubmit={submit}>
  <Input bind:value={email} type="email" required />
  <Button type="submit">저장</Button>
</form>
```

## 공식 문서

- [Svelte $props](https://svelte.dev/docs/svelte/$props)
- [Svelte bind:](https://svelte.dev/docs/svelte/bind)
- [Svelte Snippets](https://svelte.dev/docs/svelte/snippet)
