---
id: framework-astro
group: 프레임워크
path: guides/frameworks/astro/
label: Astro
title: Astro
eyebrow: Frameworks
lead: Astro 공식 학습 흐름에 따라 React·Vue component를 island로 통합합니다.
order: 120
---

Astro는 content 중심 site와 documentation을 위한 web framework입니다. 기본적으로 정적 HTML을 생성하고, 상호작용이 필요한 영역만 island로 hydration합니다. workspace root에서 `pnpm dev:astro`를 실행하면 공통 style과 asset을 준비한 뒤 개발 서버를 엽니다.

## Astro란?

Astro는 `.astro` 파일로 page layout과 정적 markup을 작성합니다. UI framework component는 React, Vue, Svelte 등을 선택해 island로 삽입할 수 있습니다. 기본 렌더링은 server에서 수행되며, JavaScript는 필요한 component만 client로 전송합니다.

## 주요 특징

- `.astro` component와 파일 기반 routing
- content collection과 Markdown 통합
- `client:load`, `client:visible` 등 island hydration directive
- framework component를 선택적으로 통합하는 architecture
- 정적 site와 SSR adapter 기반 배포

## 역할

Astro는 `@uxkm/react` 또는 `@uxkm/vue`를 island로 재사용합니다. 52개 component를 `.astro`로 다시 구현하지 않고, 문서 page·데모 page에서 기존 package component를 `client:*` directive와 함께 배치합니다. 정적 shell은 Astro markup으로, modal·form·dropdown 같은 상호작용은 client island에서 검증합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [빠른 시작](quick-start/index.html) | 프로젝트 실행과 island 연결 |
| [페이지와 라우팅](pages-routing/index.html) | 파일 기반 route와 layout |
| [Islands](islands/index.html) | `client:*` directive와 hydration 시점 |
| [컴포넌트 통합](components/index.html) | React·Vue component 사용법 |
| [베스트 프랙티스](best-practices/index.html) | 배포, 성능, 접근성과 보안 |

## 사용 시작

```astro
---
import Button from '@uxkm/react/button';
---

<Button client:load variant="filled">저장</Button>
```

React integration을 사용하는 경우 `@uxkm/react/*`를, Vue integration을 사용하는 경우 `@uxkm/vue/*`를 import합니다.

## 공식 문서

- [Astro Docs](https://docs.astro.build/en/getting-started/)
- [Astro Islands architecture](https://docs.astro.build/en/concepts/islands/)
