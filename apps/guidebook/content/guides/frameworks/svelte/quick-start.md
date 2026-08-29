---
id: svelte-quick-start
group: 프레임워크
parent: framework-svelte
path: guides/frameworks/svelte/quick-start/
label: 빠른 시작
title: Svelte 빠른 시작
eyebrow: Svelte · Quick Start
lead: Svelte application을 실행하고 Single-File Component에서 component를 사용합니다.
order: 71
---

## 실행 환경

이 저장소의 Svelte 앱은 Vite와 Svelte 5를 사용합니다. workspace root에서 다음 명령을 실행하면 공통 style과 asset을 준비하고 개발 서버를 엽니다.

```bash
pnpm install
pnpm dev:svelte
```

새 Svelte project를 시작할 때는 `npx sv create`로 SvelteKit 또는 Svelte+Vite 구성을 선택할 수 있습니다. 기존 workspace에서는 이미 정한 build 설정을 유지합니다.

## 첫 Single-File Component

```svelte
<script>
  import Button from '@uxkm/svelte/button';

  let saved = $state(false);
</script>

<Button variant="filled" onclick={() => (saved = true)}>저장</Button>
{#if saved}
  <p role="status">저장했습니다.</p>
{/if}
```

`<script>`에서 import와 state를 선언하고 markup에서 사용합니다. component 이름은 PascalCase, component prop은 각 component API를 따릅니다.

## 공통 자산 연결

앱 진입점에서 `@uxkm/interactions`를 초기화하고 `public/styles/uxkm.css`를 로드합니다.

```javascript
// src/main.js
import { initInteractions } from '@uxkm/interactions';
import './app.css';

initInteractions();
```

`pnpm build:shared`로 생성된 `uxkm.css`와 `images`가 `public`에 반영되어 있는지 확인합니다.

## 다음 단계

- markup과 제어 구문이 낯설면 **핵심 기초**를 먼저 읽습니다.
- 입력 state를 다룰 때는 **상태와 반응성**을 확인합니다.
- parent·child 계약은 **컴포넌트 심화**에서 이어집니다.

## 공식 문서

- [Svelte 시작하기](https://svelte.dev/docs/svelte/getting-started)
