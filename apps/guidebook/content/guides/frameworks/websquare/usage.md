---
id: websquare-usage
group: 프레임워크
parent: framework-websquare
path: guides/frameworks/websquare/usage/
label: 사용하기
title: WebSquare 사용하기
eyebrow: WebSquare · Usage
lead: 입력 검증, 입출력 제어, keyboard, tooltip, 적응형 화면과 SPA 구현 기준을 다룹니다.
order: 66
---

## 개발 전 확인

project의 engine version, 공통 script, page scope 이름, data convention과 browser 지원 범위를 먼저 확인합니다. 같은 SP5라도 patch와 project 설정에 따라 공개 API가 달라질 수 있습니다.

## 입력과 검증

선택 component와 입력 component는 DataCollection type과 일치시킵니다. 오류는 색만으로 표시하지 않고 message를 field와 연결하며, server validation 결과도 같은 error contract로 표현합니다.

## Keyboard와 Tooltip

tab 순서는 시각적·업무적 순서와 같아야 합니다. tabindex를 큰 양수로 수동 조정하기보다 DOM과 layout 순서를 바로잡습니다. tooltip은 hover뿐 아니라 keyboard focus에서도 열리고 보조 설명이 accessible description으로 전달되어야 합니다.

## 적응형 화면과 SPA

viewport에 따라 정보를 숨길 때 핵심 업무 기능과 접근 가능한 이름이 사라지지 않게 합니다. SPA에서는 화면 이동 후 title, focus, history와 WFrame scope 정리를 확인합니다.

## UXKM 점검표

- Storybook WebSquare fragment의 class와 상태 이름을 사용합니다.
- engine 내부 DOM을 직접 query하거나 수정하지 않습니다.
- focus, validation, popup과 loading 상태를 실제 engine에서 검증합니다.
- Excel, file과 대량 data 기능은 project 보안 정책을 함께 따릅니다.

## 공식 문서

- [WebSquare5 SP5 사용하기](https://docs1.inswave.com/sp5_user_guide/)

