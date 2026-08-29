---
id: qwik-components
group: 프레임워크
parent: framework-qwik
path: guides/frameworks/qwik/components/
label: 컴포넌트
title: Qwik 컴포넌트
eyebrow: Qwik · Components
lead: component$, props, 이벤트 handler와 slot으로 component 계약을 구성합니다.
order: 92
---

## component$

```tsx
import { component$ } from '@builder.io/qwik';

export const StatusButton = component$<{
  label: string;
  disabled?: boolean;
  active?: boolean;
  onActivate$?: () => void;
}>((props) => {
  return (
    <button
      type="button"
      class={{ 'is-active': props.active }}
      disabled={props.disabled}
      onClick$={props.onActivate$}
    >
      {props.label}
    </button>
  );
});
```

Qwik component는 반드시 `component$()` 또는 `inlineComponent$()`로 정의합니다. props는 읽기 전용으로 취급하고 부모 signal·store에서 갱신합니다.

## Component

```tsx
import { component$ } from '@builder.io/qwik';
import Button from '@uxkm/qwik/button';
import { TypoTitle } from '@uxkm/qwik/typography';

export default component$(() => {
  return (
    <main class="guide_content">
      <TypoTitle level={1}>기본 요소</TypoTitle>
      <Button variant="filled">저장</Button>
    </main>
  );
});
```

## 이벤트 handler

```tsx
<Button variant="filled" onClick$={() => console.log('clicked')}>
  저장
</Button>
```

Qwik event handler는 `$` suffix가 붙은 직렬화 가능한 함수입니다. 클로저로 큰 객체를 캡처하지 않도록 주의합니다.

## Slot

```tsx
import Button from '@uxkm/qwik/button';

export default component$(() => (
  <Button variant="filled">
    <span q:slot="icon-before">
      <SaveIcon />
    </span>
    저장
  </Button>
));
```

named slot은 `q:slot` attribute로 전달합니다. 최종 DOM의 시맨틱 구조는 렌더링 결과를 기준으로 확인합니다.

## 공식 문서

- [Qwik Props](https://qwik.dev/docs/components/props/)
- [Qwik Events](https://qwik.dev/docs/components/events/)
- [Qwik Slots](https://qwik.dev/docs/components/slots/)
