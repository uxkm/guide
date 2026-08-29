---
id: solid-jsx-components
group: 프레임워크
parent: framework-solid
path: guides/frameworks/solid/jsx-components/
label: UI 표현
title: SolidJS UI 표현
eyebrow: SolidJS · JSX
lead: JSX, component, props와 조건·목록 rendering으로 UI tree를 구성합니다.
order: 82
---

## JSX와 props

```jsx
function StatusButton(props) {
  return (
    <button
      type="button"
      classList={{ 'is-active': props.active }}
      disabled={props.loading}
      onClick={props.onClick}
    >
      {props.active ? '선택됨' : '선택'}
    </button>
  );
}
```

Solid props는 getter입니다. 구조 분해하면 반응성이 끊길 수 있으므로 `props.active`처럼 접근하거나 `splitProps`를 사용합니다.

## 조건부 렌더링

```jsx
<Show when={!loading()} fallback={<p role="status">불러오는 중입니다.</p>}>
  <Show when={!error()} fallback={<p role="alert">오류가 발생했습니다.</p>}>
    <ResultList items={items()} />
  </Show>
</Show>
```

`<Show>`는 조건에 따라 child를 마운트합니다. 단순 boolean 토글은 삼항 연산자도 사용할 수 있습니다.

## 목록 렌더링

```jsx
<For each={items()}>
  {(item) => <li>{item.label}</li>}
</For>
```

`<For>`는 key 추적을 내장합니다. 직접 `map`을 사용할 때는 안정적인 key를 지정합니다.

## Component

```jsx
import Button from '@uxkm/solid/button';
import { TypoTitle } from '@uxkm/solid/typography';

export default function BasicSection() {
  return (
    <main class="guide_content">
      <TypoTitle level={1}>기본 요소</TypoTitle>
      <Button variant="filled">저장</Button>
    </main>
  );
}
```

## 공식 문서

- [Solid JSX](https://docs.solidjs.com/concepts/components/jsx)
- [Solid Show](https://docs.solidjs.com/reference/components/show)
- [Solid For](https://docs.solidjs.com/reference/components/for)
