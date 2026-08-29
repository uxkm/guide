---
id: qwik-best-practices
group: 프레임워크
parent: framework-qwik
path: guides/frameworks/qwik/best-practices/
label: 베스트 프랙티스
title: Qwik 베스트 프랙티스
eyebrow: Qwik · Best Practices
lead: resumability, 성능, 접근성과 보안 기준을 component에 적용합니다.
order: 95
---

## Resumability와 Interactions

Qwik는 lazy hydration model을 사용합니다. `@uxkm/interactions`처럼 DOM을 직접 조작하는 코드는 `useVisibleTask$` 이후에 초기화하고, server render 단계에서는 실행하지 않습니다.

## 성능

불필요한 client JavaScript를 줄이는 것이 Qwik의 핵심입니다. 큰 list, modal, drawer는 실제로 필요한 route와 상호작용 시점에만 로드되도록 component 경계를 나눕니다.

## 접근성

component가 제공하는 semantic element와 keyboard contract를 유지합니다. hydration 이후에도 focus trap, aria attribute가 유지되는지 확인합니다.

## 보안

user-provided HTML과 URL은 별도 validation이 필요합니다. loader에서 가져온 data도 신뢰 경계를 명확히 합니다.

## 검토 순서

1. component API와 semantic markup을 먼저 사용합니다.
2. resumability 이후 interaction과 focus 동작을 확인합니다.
3. route loader data와 client state 경계를 검토합니다.
4. performance trace와 접근성 검사 결과를 확인합니다.

## 공식 문서

- [Qwik Optimizer](https://qwik.dev/docs/advanced/optimizer/)
- [Qwik Prefetching](https://qwik.dev/docs/caching/)
