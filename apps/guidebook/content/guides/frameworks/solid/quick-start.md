---
id: solid-quick-start
group: 프레임워크
parent: framework-solid
path: guides/frameworks/solid/quick-start/
label: 빠른 시작
title: SolidJS 빠른 시작
eyebrow: SolidJS · Quick Start
lead: Solid application을 실행하고 JSX component에서 component를 사용합니다.
order: 81
---

## 실행 환경

이 저장소의 Solid 앱은 Vite와 SolidJS를 사용합니다. workspace root에서 다음 명령을 실행하면 공통 style과 asset을 준비하고 개발 서버를 엽니다.

```bash
pnpm install
pnpm dev:solid
```

새 Solid project를 시작할 때는 `npm init solid@latest`로 Router, TypeScript 구성을 선택할 수 있습니다. 기존 workspace에서는 이미 정한 build 설정을 유지합니다.

## 첫 component

```jsx
import { createSignal } from 'solid-js';
import Button from '@uxkm/solid/button';

export default function SaveButton() {
  const [saved, setSaved] = createSignal(false);

  return (
    <>
      <Button variant="filled" onClick={() => setSaved(true)}>
        저장
      </Button>
      {saved() && <p role="status">저장했습니다.</p>}
    </>
  );
}
```

Solid component는 JSX를 반환하는 함수입니다. signal 값은 함수 호출 `saved()`로 읽습니다.

## 공통 자산 연결

```jsx
// src/index.jsx
import { render } from 'solid-js/web';
import { initInteractions } from '@uxkm/interactions';
import App from './App';

initInteractions();
render(() => <App />, document.getElementById('root'));
```

`pnpm build:shared`로 생성된 `uxkm.css`와 `images`가 `public`에 반영되어 있는지 확인합니다.

## 핵심 규칙

- component는 JSX tag 하나 또는 Fragment로 감싼 결과를 반환합니다.
- 동적인 값은 JSX `{}` 안에 signal getter나 expression으로 작성합니다.
- 목록은 안정적인 `key`를 사용합니다.
- event handler는 호출 결과가 아니라 함수를 전달합니다.
- 화면에 기억할 값은 local variable이 아니라 signal로 둡니다.

## 공식 문서

- [Solid Quick Start](https://docs.solidjs.com/quick-start)
