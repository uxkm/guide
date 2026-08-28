---
id: websquare-binding-submission
group: 프레임워크
parent: framework-websquare
path: guides/frameworks/websquare/binding-submission/
label: Submission
title: WebSquare 바인딩과 Submission
eyebrow: WebSquare · Binding
lead: UXKM 폼 fragment를 DataCollection에 바인딩하고 Submission으로 서버 요청과 응답을 연결합니다.
order: 65
---

## 값 바인딩

입력 component의 `ref`를 DataMap 경로에 연결하면 화면 값과 data model을 함께 관리할 수 있습니다.

```xml
<w2:dataMap id="dmUser">
  <w2:keyInfo>
    <w2:key id="email" name="이메일" dataType="text"></w2:key>
  </w2:keyInfo>
</w2:dataMap>

<xf:input id="inpEmail"
          class="input"
          ref="data:dmUser.email"></xf:input>
```

label과 오류 메시지는 component가 생성하는 최종 DOM에서 입력과 연결되는지 확인합니다. 오류 상태를 class로만 표시하지 말고 프로젝트 WebSquare component가 제공하는 접근성 속성도 함께 설정합니다.

## UXKM 버튼과 Submission

```xml
<xf:trigger id="btnSave"
            type="button"
            class="btn btn_filled color_primary"
            ev:onclick="scwin.btnSave_onclick">
  <xf:label><![CDATA[저장]]></xf:label>
</xf:trigger>
```

```javascript
scwin.btnSave_onclick = function () {
  if (!scwin.validate()) return;
  submissionSave.execute();
};
```

Submission은 request에 보낼 DataCollection과 response를 받을 target을 프로젝트 API 계약에 맞춰 정의합니다. 중복 전송 방지, loading, 오류와 완료 event도 함께 연결합니다.

## 목록 바인딩

DataList는 GridView나 반복 component에 연결합니다. 화면 row의 임시 상태보다 DataList의 row 상태와 server payload 규칙을 우선해 추가·수정·삭제를 관리합니다.

## 구현 확인

1. DataCollection id와 `ref` 경로가 실제 화면 scope에서 해석되는지 확인합니다.
2. 입력 변경 후 DataMap·DataList 값과 상태가 예상대로 갱신되는지 확인합니다.
3. Submission의 request·response mapping과 오류 event를 확인합니다.
4. 긴 값, 빈 값, disabled·readonly와 validation 오류를 실제 엔진에서 검증합니다.

## 공식 문서

- [DataCollection](https://docs1.inswave.com/sp5_user_guide/e8b94a03286e4f9f)
- [Submission](https://docs1.inswave.com/sp5_user_guide/15c9ec50633b935d)
- [WebSquare 디버깅](https://docs1.inswave.com/sp5_user_guide/269d3ef6beb92a2d)
