---
id: solid-best-practices
group: 프레임워크
parent: framework-solid
path: guides/frameworks/solid/best-practices/
label: 베스트 프랙티스
title: SolidJS 베스트 프랙티스
eyebrow: SolidJS · Best Practices
lead: production 배포, 성능, 접근성과 보안 기준을 component에 적용합니다.
order: 86
---

## Production 배포

SolidStart adapter 또는 정적 hosting 설정으로 production build를 배포합니다. client bundle에 secret이 포함되지 않는지 확인합니다.

## 성능

Solid는 fine-grained update model을 사용하지만, 불필요한 effect와 큰 list rendering은 여전히 비용이 있습니다. bundle 크기, route 단위 code splitting, memo 사용 여부를 측정한 뒤 최적화합니다.

## 접근성

component가 제공하는 semantic element와 keyboard contract를 유지합니다. route 이동 뒤 page title과 focus를 갱신하고, form error는 label·description과 연결합니다.

## 반응성 주의

props를 구조 분해하거나 signal 밖에서 한 번만 읽으면 반응성이 끊깁니다. JSX 안에서는 getter 호출과 `props.xxx` 접근을 일관되게 유지합니다.

## 검토 순서

1. component API와 semantic markup을 먼저 사용합니다.
2. performance trace와 접근성 검사 결과를 확인합니다.
3. Solid warning과 test를 해소합니다.
4. SSR hydration mismatch가 없는지 확인합니다.

## 공식 문서

- [Solid Guides](https://docs.solidjs.com/guides)
