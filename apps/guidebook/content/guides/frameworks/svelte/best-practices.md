---
id: svelte-best-practices
group: 프레임워크
parent: framework-svelte
path: guides/frameworks/svelte/best-practices/
label: 베스트 프랙티스
title: Svelte 베스트 프랙티스
eyebrow: Svelte · Best Practices
lead: production 배포, 성능, 접근성과 보안 기준을 component에 적용합니다.
order: 77
---

## Production 배포

SvelteKit adapter로 target 환경에 맞게 build합니다. environment variable 주입 범위와 client bundle에 secret이 포함되지 않는지 확인합니다.

## 성능

측정 없이 component를 미리 최적화하지 않습니다. route 단위 code splitting, list rendering과 update 횟수를 측정한 뒤 `$derived`, lazy import와 stable prop을 적용합니다.

## 접근성

component가 제공하는 semantic element와 keyboard contract를 유지합니다. route 이동 뒤 page title과 focus를 갱신하고, form error는 label·description과 연결하며, animation은 reduced motion 설정을 존중합니다.

## 보안

`{@html}`은 신뢰할 수 없는 HTML에 사용하지 않습니다. URL, user-provided style과 server-rendered state도 별도 validation이 필요합니다. front-end validation만으로 authorization을 대신할 수 없습니다.

## 검토 순서

1. component API와 semantic markup을 먼저 사용합니다.
2. performance trace와 접근성 검사 결과를 확인합니다.
3. Svelte compiler warning과 test를 해소합니다.
4. 실제 server policy와 Content Security Policy를 함께 검증합니다.

## 공식 문서

- [SvelteKit Adapters](https://svelte.dev/docs/kit/adapters)
