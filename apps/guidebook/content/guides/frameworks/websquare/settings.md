---
id: websquare-settings
group: 프레임워크
parent: framework-websquare
path: guides/frameworks/websquare/settings/
label: SP5 설정
title: WebSquare SP5 설정
eyebrow: WebSquare · Configuration
lead: client.config.xml과 server.config.xml의 역할, escape와 배포 환경별 설정 원칙을 정리합니다.
order: 67
---

## 설정 경계

client 설정은 browser에서 동작하는 engine과 화면 기본값을, server 설정은 resource 처리와 server 연동을 제어합니다. 설정을 바꾸기 전 적용 범위가 전체 project인지 특정 화면인지 확인합니다.

## client.config.xml

page script scope 이름, SPA, component 기본 동작과 client resource 정책을 관리합니다. guide 예제의 `scwin`은 기본 이름이므로 project의 SPA `variable` 설정이 다르면 실제 이름으로 바꿉니다.

## server.config.xml

server resource 경로, response와 운영 환경 연동 설정을 관리합니다. repository에 저장할 수 없는 endpoint와 secret은 환경별 배포 설정으로 분리합니다.

## Escape 정책

화면에 표시되는 외부 data는 기본적으로 escape합니다. HTML 표시가 꼭 필요한 업무 요구는 허용 source, sanitization과 Content Security Policy를 함께 검토합니다. 공통 markup 사용을 이유로 user input의 escape를 해제하지 않습니다.

## 변경 확인

1. 대상 engine version의 공식 option 이름을 확인합니다.
2. 변경 전후 설정 diff와 영향 화면을 기록합니다.
3. local·test·production 환경 차이를 확인합니다.
4. cache를 비운 실제 engine에서 regression을 검증합니다.

## 공식 문서

- [WebSquare5 SP5 설정](https://docs1.inswave.com/sp5_user_guide/)

