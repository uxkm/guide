---
id: websquare-components
group: 프레임워크
parent: framework-websquare
path: guides/frameworks/websquare/components/
label: 컴포넌트
title: WebSquare 컴포넌트
eyebrow: WebSquare · Components
lead: Forms, Grid, Container와 Navigation component에 시각·접근성 계약을 적용합니다.
order: 63
---

## Component 분류

SP5 개발 가이드는 component를 Forms, Grid, Container, Navigation, Chart, Frame, HTML5, popup과 utility 영역으로 나눕니다. 먼저 WebSquare component의 data·event API를 유지하고 공통 class로 표현 규칙을 맞춥니다.

## Forms

input, select와 trigger는 label, description, required, disabled와 error 상태를 함께 설계합니다. value는 DataMap field에 binding하고 변경 event는 공개 API로 처리합니다.

## Grid

GridView는 대량 업무 data, selection, edit와 keyboard navigation을 담당합니다. Table과 시각 token은 공유할 수 있지만 일반 HTML table 예제를 GridView 내부 DOM에 그대로 삽입하지 않습니다.

## Container와 Navigation

group, tab, accordion과 tree는 내용 관계와 펼침 상태를 semantic하게 전달해야 합니다. WFrame은 별도 화면 scope와 lifecycle이 필요한 경우에 사용하고 단순 layout wrapper로 남용하지 않습니다.

## 적용 원칙

| 영역 | WebSquare 책임 | 가이드 책임 |
| --- | --- | --- |
| data·event | component API와 binding | 상태 이름과 callback 계약 |
| markup | engine이 생성하는 DOM | 제공 가능한 fragment와 class |
| style | project CSS load | token, variant와 focus 표현 |
| 검증 | 실제 engine과 Studio | Storybook 비교와 접근성 기준 |

## 공식 문서

- [WebSquare5 SP5 컴포넌트](https://docs1.inswave.com/sp5_user_guide/)

