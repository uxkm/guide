---
id: framework-websquare
group: 프레임워크
path: guides/frameworks/websquare/
label: WebSquare
title: WebSquare
eyebrow: Frameworks
lead: WebSquare5 SP5 공식 개발 가이드에 따라 화면 XML과 UXKM 컴포넌트를 연결합니다.
order: 60
---

WebSquare 구현은 별도 JavaScript 컴포넌트를 import하는 방식이 아니라 화면 XML에 UXKM 기준 마크업과 클래스를 배치하고 WebSquare의 이벤트·데이터 모델을 연결합니다.

## WebSquare란?

WebSquare5는 업무용 web application 화면을 개발하기 위한 UI platform입니다. Studio는 component 배치, script 작성, preview와 debugging을 지원하고, WebSquare engine은 작성된 화면 XML을 browser에 표시합니다. 화면 구조, event와 data 처리를 WebSquare component와 API를 통해 구성합니다.

## 주요 특징

- Studio의 Design·Source·Script view를 이용한 화면 XML 개발
- Forms, Grid, Container, Navigation 등 업무 화면 component 제공
- `scwin`을 기본으로 사용하는 page·WFrame 단위 script scope
- DataMap과 DataList를 이용한 client data model 관리
- Submission을 이용한 request·response data 연결

## UXKM에서의 역할

UXKM WebSquare 구현은 Storybook의 XML fragment와 공통 CSS class를 실제 WebSquare 화면에 적용합니다. native WebSquare component의 event와 DataCollection binding은 유지하면서 variant, 상태 이름, focus와 접근성 결과를 다른 framework 구현과 일치시킵니다. 최종 결과는 프로젝트에서 사용하는 WebSquare engine version과 Studio에서 확인합니다.

## 문서 구성

| 메뉴 | 내용 |
| --- | --- |
| [스튜디오](studio/index.html) | 프로젝트 구성, 화면 작성과 디버깅 |
| [화면과 이벤트](screen-events/index.html) | 화면 XML, namespace, `scwin` 이벤트와 WFrame scope |
| [컴포넌트](components/index.html) | Forms·Grid·Container와 UXKM class 적용 |
| [DataCollection](data-collection/index.html) | DataMap, DataList, 상태와 API 사용 |
| [Submission](binding-submission/index.html) | `ref` 바인딩, 요청·응답과 UXKM 폼 연결 |
| [사용하기](usage/index.html) | 입력 검증, 접근성, 적응형 화면과 SPA |
| [SP5 설정](settings/index.html) | client·server 설정과 escape 정책 |
| [심화 가이드](advanced/index.html) | 다국어, 성능, 업로드와 비권장 사례 |

## 적용 범위

UXKM은 WebSquare 런타임, 라이선스와 프로젝트 공통 스크립트를 포함하지 않습니다. Storybook WebSquare 탭의 fragment를 실제 화면 XML에 배치한 뒤, 사용하는 엔진 버전의 공개 API와 Studio에서 검증합니다.

## 공식 문서

- [WebSquare5 SP5 개발 가이드](https://docs1.inswave.com/sp5_user_guide/)
