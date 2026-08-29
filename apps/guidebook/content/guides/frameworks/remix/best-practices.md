---
id: remix-best-practices
group: 프레임워크
parent: framework-remix
path: guides/frameworks/remix/best-practices/
label: 베스트 프랙티스
title: Remix 베스트 프랙티스
eyebrow: Remix · Best Practices
lead: production 배포, 성능, 접근성과 보안 기준을 React component에 적용합니다.
order: 105
---

## Production 배포

Remix adapter로 target runtime에 맞게 build합니다. environment variable은 server 전용과 client 노출 범위를 분리하고, secret은 loader·action에서만 사용합니다.

## 성능

route 단위 data loading으로 필요한 data만 가져옵니다. 큰 table이나 tree는 pagination·virtualization과 함께 component 상태를 검토합니다.

## 접근성

component가 제공하는 semantic element와 keyboard contract를 유지합니다. `action` 이후 validation message는 `role="alert"` 또는 `aria-describedby`로 label과 연결합니다.

## 보안

loader·action에서 authorization을 검증합니다. user input은 server에서 다시 validation하고, client 표시용 error message만 반환합니다.

## Progressive Enhancement

form은 JavaScript 없이도 제출 가능해야 합니다. Button·Input의 `name`, `type`, `disabled` 상태가 server action과 일치하는지 확인합니다.

## 검토 순서

1. React component API와 semantic markup을 먼저 사용합니다.
2. loader·action 오류 경로와 empty state를 확인합니다.
3. form no-JS 제출과 hydration 이후 상호작용을 함께 검증합니다.
4. performance trace와 접근성 검사 결과를 확인합니다.

## 공식 문서

- [Remix Performance](https://remix.run/docs/en/main/guides/performance)
- [Remix Security](https://remix.run/docs/en/main/guides/security)
