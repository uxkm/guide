---
id: angular-best-practices
group: 프레임워크
parent: framework-angular
path: guides/frameworks/angular/best-practices/
label: 베스트 프랙티스
title: Angular 베스트 프랙티스
eyebrow: Angular · Best Practices
lead: production 배포, 성능, 접근성과 보안 기준을 component에 적용합니다.
order: 117
---

## Production 배포

`ng build`로 production bundle을 생성합니다. environment file 주입 범위와 client bundle에 secret이 포함되지 않는지 확인합니다.

## 성능

측정 없이 component를 미리 최적화하지 않습니다. lazy route, `OnPush` change detection, list `track`과 stable input을 적용하기 전에 bundle 크기와 update 횟수를 측정합니다.

## 접근성

component가 제공하는 semantic element와 keyboard contract를 유지합니다. route 이동 뒤 page title과 focus를 갱신하고, form error는 label·description과 연결합니다.

## 보안

`innerHTML` binding은 신뢰할 수 없는 HTML에 사용하지 않습니다. URL, user-provided style과 server-rendered state도 별도 validation이 필요합니다. front-end validation만으로 authorization을 대신할 수 없습니다.

## Change detection

signal 기반 UI는 필요한 component만 갱신합니다. component 내부 DOM 조작이 있는 경우 `@uxkm/interactions` 초기화 시점과 Angular lifecycle을 맞춥니다.

## 검토 순서

1. component API와 semantic markup을 먼저 사용합니다.
2. performance trace와 접근성 검사 결과를 확인합니다.
3. Angular compiler warning과 test를 해소합니다.
4. 실제 server policy와 Content Security Policy를 함께 검증합니다.

## 공식 문서

- [Angular Best practices](https://angular.dev/best-practices)
- [Angular Security](https://angular.dev/best-practices/security)
