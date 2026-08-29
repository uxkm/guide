---
id: astro-best-practices
group: 프레임워크
parent: framework-astro
path: guides/frameworks/astro/best-practices/
label: 베스트 프랙티스
title: Astro 베스트 프랙티스
eyebrow: Astro · Best Practices
lead: island 전략, 성능, 접근성과 보안 기준을 component에 적용합니다.
order: 125
---

## Island 전략

모든 component를 `client:load`로 올리지 않습니다. 정적으로 표시 가능한 Typography, Badge, Divider는 `.astro` markup과 공통 class만으로 렌더링하고, 실제 상호작용이 필요한 component만 island로 분리합니다.

## 성능

Astro의 장점은 기본 HTML의 가벼움입니다. page마다 필요한 island 수와 directive를 최소화하고, 무거운 table·tree는 `client:visible` 또는 route 분리를 검토합니다.

## 접근성

정적 markup과 island가 함께 있을 때 heading hierarchy, label 연결, focus 순서가 끊기지 않는지 확인합니다. modal·drawer island는 열림·닫힘 후 focus 복귀를 검증합니다.

## SEO와 Progressive Enhancement

문서 page의 핵심 콘텐츠는 JavaScript 없이도 읽을 수 있어야 합니다. form submit이 island에만 의존하지 않도록 server endpoint나 fallback을 검토합니다.

## 보안

user-provided content를 `.astro`에 `set:html`로 삽입하지 않습니다. island로 전달하는 prop도 신뢰 경계를 명확히 합니다.

## 검토 순서

1. 정적 shell과 island 경계를 먼저 정의합니다.
2. React·Vue component API와 semantic markup을 확인합니다.
3. hydration 이후 interaction과 focus 동작을 검증합니다.
4. lighthouse와 접근성 검사 결과를 확인합니다.

## 공식 문서

- [Astro Performance](https://docs.astro.build/en/concepts/why-astro/#fast-by-default)
- [Astro View transitions](https://docs.astro.build/en/guides/view-transitions/)
