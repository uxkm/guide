---
id: framework-svelte
group: 프레임워크
path: guides/frameworks/svelte/
label: Svelte
title: Svelte
eyebrow: Frameworks
lead: Svelte 5 공식 학습 흐름에 따라 컴포넌트 구현 문법을 확인합니다.
order: 70
---

Svelte는 컴파일 시점에 반응형 DOM 업데이트 코드를 생성하는 UI framework입니다. Vite와 함께 사용하며, workspace root에서 `pnpm dev:svelte`를 실행하면 공통 style과 asset을 준비한 뒤 개발 서버를 엽니다.

## Svelte란?

Svelte는 component를 `.svelte` 파일로 작성하고, 상태가 바뀔 때 필요한 DOM만 갱신하는 선언형 UI model을 제공합니다. runtime library 부담이 적고 template·script·style을 한 파일에서 관리할 수 있습니다. SvelteKit은 routing, SSR, adapter 기반 배포를 제공하는 application framework입니다.

## 주요 특징

- `.svelte` Single-File Component와 Svelte 5 runes(`$state`, `$derived`, `$props`)
- `{#if}`, `{#each}`, `{@render}` 기반의 template 제어
- `bind:`를 이용한 양방향 binding과 이벤트 handler
- snippet과 slot을 이용한 콘텐츠 합성
- SvelteKit의 파일 기반 routing과 server load

## 역할

`@uxkm/svelte`는 시각 token과 접근성 계약을 Svelte component API로 제공합니다. prop은 variant와 상태를 전달하고, callback과 `bind:`는 입력 state를 연결하며, snippet은 icon이나 복합 콘텐츠를 합성합니다. SvelteKit은 동일한 component를 재사용하되 SSR과 hydration 결과도 함께 검증합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [빠른 시작](quick-start/index.html) | 프로젝트 실행과 component 연결 |
| [핵심 기초](template-syntax/index.html) | markup, 조건·목록, 이벤트와 binding |
| [상태와 반응성](reactivity/index.html) | `$state`, `$derived`, `$effect`와 폼 state |
| [컴포넌트 심화](components/index.html) | `$props`, 이벤트, `bind:`와 snippet |
| [페이지와 라우팅](pages-routing/index.html) | SvelteKit 파일 기반 route와 layout |
| [TypeScript](typescript/index.html) | component type과 module augmentation |
| [베스트 프랙티스](best-practices/index.html) | 배포, 성능, 접근성과 보안 |

## 사용 시작

```svelte
<script>
  import Button from '@uxkm/svelte/button';
</script>

<Button variant="filled">저장</Button>
```

SvelteKit에서도 `@uxkm/svelte/*` export를 재사용합니다. SSR 환경에서는 server와 client가 만드는 초기 markup이 일치하는지 함께 확인합니다.

## 공식 문서

- [Svelte 튜토리얼](https://svelte.dev/tutorial/svelte/welcome-to-svelte)
- [SvelteKit 문서](https://svelte.dev/docs/kit/introduction)
