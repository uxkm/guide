---
id: qwik-quick-start
group: 프레임워크
parent: framework-qwik
path: guides/frameworks/qwik/quick-start/
label: 빠른 시작
title: Qwik 빠른 시작
eyebrow: Qwik · Quick Start
lead: Qwik application을 실행하고 component$에서 component를 사용합니다.
order: 91
---

## 실행 환경

이 저장소의 Qwik 앱은 Qwik City와 Vite를 사용합니다. workspace root에서 다음 명령을 실행하면 공통 style과 asset을 준비하고 개발 서버를 엽니다.

```bash
pnpm install
pnpm dev:qwik
```

새 Qwik project를 시작할 때는 `npm create qwik@latest`로 City 구성을 선택할 수 있습니다. 기존 workspace에서는 이미 정한 build 설정을 유지합니다.

## 첫 component

```tsx
import { component$, useSignal } from '@builder.io/qwik';
import Button from '@uxkm/qwik/button';

export default component$(() => {
  const saved = useSignal(false);

  return (
    <>
      <Button variant="filled" onClick$={() => (saved.value = true)}>
        저장
      </Button>
      {saved.value && <p role="status">저장했습니다.</p>}
    </>
  );
});
```

Qwik component는 `component$()`로 정의하고, 이벤트 handler는 `onClick$`처럼 `$` suffix를 사용합니다.

## 공통 자산 연결

```tsx
import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { initInteractions } from '@uxkm/interactions';

export default component$(() => {
  useVisibleTask$(() => {
    initInteractions();
  });

  return <slot />;
});
```

`pnpm build:shared`로 생성된 `uxkm.css`와 `images`가 `public`에 반영되어 있는지 확인합니다. DOM 기반 interaction은 client에서 visible 이후 초기화하는 것이 안전합니다.

## 다음 단계

- component 경계와 event가 낯설면 **컴포넌트**를 먼저 읽습니다.
- 입력 state를 다룰 때는 **상태와 반응성**을 확인합니다.
- route와 data loading은 **페이지와 라우팅**에서 이어집니다.

## 공식 문서

- [Qwik Component](https://qwik.dev/docs/components/overview/)
