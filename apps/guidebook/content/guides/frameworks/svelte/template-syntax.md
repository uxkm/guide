---
id: svelte-template-syntax
group: 프레임워크
parent: framework-svelte
path: guides/frameworks/svelte/template-syntax/
label: 핵심 기초
title: Svelte 핵심 기초
eyebrow: Svelte · Essentials
lead: markup과 제어 구문으로 DOM 속성, 이벤트, 조건과 목록을 선언적으로 연결합니다.
order: 72
---

## 보간과 속성

```svelte
<script>
  let title = $state('기본 요소');
  let active = $state(false);
  let loading = $state(false);

  function toggle() {
    active = !active;
  }
</script>

<h1>{title}</h1>
<button
  type="button"
  class:is-active={active}
  disabled={loading}
  onclick={toggle}
>
  {active ? '선택됨' : '선택'}
</button>
```

텍스트는 `{표현식}`, boolean attribute는 `disabled={loading}`처럼, class 토글은 `class:이름={조건}`을 사용합니다. template expression에는 상태를 변경하는 복잡한 로직 대신 계산된 값을 사용합니다.

## 조건부 렌더링

```svelte
{#if loading}
  <p role="status">불러오는 중입니다.</p>
{:else if error}
  <p role="alert">오류가 발생했습니다.</p>
{:else}
  <ResultList {items} />
{/if}
```

`{#if}`는 조건에 따라 node를 생성·제거합니다. 자주 토글하는 단순 UI는 CSS로 표시만 바꾸는 방식도 검토합니다.

## 목록 렌더링

```svelte
<ul>
  {#each items as item (item.id)}
    <li>{item.label}</li>
  {/each}
</ul>
```

`{#each}`에는 안정적인 key expression을 지정합니다. key가 없으면 목록 순서 변경 시 DOM이 불필요하게 재생성될 수 있습니다.

## 이벤트와 폼 binding

```svelte
<input bind:value={keyword} type="search" aria-label="검색" />
<form onsubmit={(event) => event.preventDefault()}>
  <button type="submit">검색</button>
</form>
```

DOM event는 `onclick`, `onsubmit`처럼 소문자 handler prop으로 연결합니다. Input은 `bind:value`로 controlled state를 연결합니다.

## 공식 문서

- [Svelte Basic markup](https://svelte.dev/docs/svelte/basic-markup)
- [Svelte if](https://svelte.dev/docs/svelte/if)
- [Svelte each](https://svelte.dev/docs/svelte/each)
