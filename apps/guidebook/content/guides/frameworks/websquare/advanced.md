---
id: websquare-advanced
group: 프레임워크
parent: framework-websquare
path: guides/frameworks/websquare/advanced/
label: 심화 가이드
title: WebSquare 심화 가이드
eyebrow: WebSquare · Advanced Guides
lead: 다국어, 동적 이벤트, mobile, server 연동, 성능과 file 처리의 공통 기준을 제공합니다.
order: 68
---

## 다국어와 동적 이벤트

표시 문자열을 화면 script에 고정하지 않고 project의 message resource로 관리합니다. 동적으로 만든 component event는 생성·해제 lifecycle을 한곳에서 관리해 중복 handler와 memory leak을 막습니다.

## Mobile과 접근성

touch target, viewport, screen reader와 keyboard 대체 경로를 함께 설계합니다. GridView와 TabControl의 접근성 option은 사용하는 engine version의 제약을 확인하고 실제 보조 기술에서 검증합니다.

## Server framework와 성능

Submission contract, 인증 만료, error response와 loading 상태를 공통 규칙으로 맞춥니다. 초기 화면 resource, WFrame load, Grid data와 반복 Submission을 측정한 뒤 병목을 줄입니다. 비공개 engine method를 호출하는 최적화는 피합니다.

## File과 Workflow

upload는 file type·size와 server validation을 적용하고 download 권한은 URL 노출만으로 판단하지 않습니다. Workflow는 장시간 업무의 상태, 재시도와 중복 제출 방지 규칙을 포함해야 합니다.

## 비권장 사례

- engine이 만든 내부 element와 class에 직접 의존
- 전역 scope에 화면별 상태와 handler 누적
- DataMap과 화면 field에 같은 값을 중복 보관
- Submission 오류를 console에만 남김
- 접근성 이름 없이 icon이나 색상만으로 상태 표시

## 공식 문서

- [WebSquare5 SP5 심화 가이드](https://docs1.inswave.com/sp5_user_guide/)

