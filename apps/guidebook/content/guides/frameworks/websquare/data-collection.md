---
id: websquare-data-collection
group: 프레임워크
parent: framework-websquare
path: guides/frameworks/websquare/data-collection/
label: DataCollection
title: WebSquare DataCollection
eyebrow: WebSquare · Data
lead: 단건과 목록 데이터를 DataMap과 DataList로 정의하고 공개 API로 값을 관리합니다.
order: 64
---

## DataCollection 종류

| 모델 | 용도 |
| --- | --- |
| DataMap | key/value 형태의 단건 데이터 |
| DataList | row와 column으로 구성된 다건 데이터 |
| LinkedDataList | DataList를 filter·sort한 결과 view |

각 DataCollection에는 화면 scope 안에서 식별할 고유 id가 필요합니다.

## DataMap

```xml
<w2:dataMap id="dmUser">
  <w2:keyInfo>
    <w2:key id="name" name="이름" dataType="text"></w2:key>
    <w2:key id="email" name="이메일" dataType="text"></w2:key>
  </w2:keyInfo>
</w2:dataMap>
```

```javascript
dmUser.set('name', '홍길동');
var name = dmUser.get('name');
dmUser.setJSON({ name: '홍길동', email: 'user@example.com' });
```

## DataList

```xml
<w2:dataList id="dlUsers">
  <w2:columnInfo>
    <w2:column id="id" name="ID" dataType="text"></w2:column>
    <w2:column id="name" name="이름" dataType="text"></w2:column>
  </w2:columnInfo>
</w2:dataList>
```

DataList는 조회 목록과 GridView 같은 반복 UI의 data source로 사용합니다. 추가·수정·삭제 상태가 통신 payload에 필요한지 프로젝트 Submission 계약과 함께 확인합니다.

## 변경 이벤트

```xml
<w2:dataMap id="dmUser"
  ev:onmodelchange="scwin.dmUser_onmodelchange">
  <!-- keyInfo -->
</w2:dataMap>
```

```javascript
scwin.dmUser_onmodelchange = function (info) {
  console.log(info.key, info.oldValue, info.newValue);
};
```

엔진 내부의 비공개 method에 의존하지 않고 설치된 WebSquare 버전의 API 문서에 공개된 method와 event를 사용합니다.

## 공식 문서

- [DataCollection 개발 가이드](https://docs1.inswave.com/sp5_user_guide/e8b94a03286e4f9f)
