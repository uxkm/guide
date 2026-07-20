<script>
export const docMeta = {
  title: 'Table | HTML Components',
  activeNav: 'table',
  pageTitle: 'Table',
};
</script>

<script setup>
import Badge from '@uxkm/ui/components/Badge.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Table from '@uxkm/ui/components/Table.vue';
import {
  memberTableColumns,
  productTableColumns,
  tableClassColumns,
  tableClasses,
  tablePropColumns,
  tableProps,
  tableSlotColumns,
  tableSlots,
  tableTokenColumns,
  tableTokens,
} from '@/doc/data/table-api';
</script>

<template>
  <div class="page_intro">
    <h1>Table</h1>
    <p class="lead">데이터를 행·열 구조로 표시하는 테이블 컴포넌트입니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="table_wrap으로 가로 스크롤을 지원합니다. columns로 열별 너비·패딩을 지정할 수 있습니다."
  >
    <Table :columns="memberTableColumns">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">역할</th>
          <th scope="col">상태</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>홍길동</td>
          <td>프론트엔드</td>
          <td><Badge dot color="success" label="Active" /></td>
        </tr>
        <tr>
          <td>김철수</td>
          <td>백엔드</td>
          <td><Badge dot color="success" label="Active" /></td>
        </tr>
        <tr>
          <td>이영희</td>
          <td>디자이너</td>
          <td><Badge dot color="warning" label="Away" /></td>
        </tr>
      </tbody>
    </Table>
  </DemoSection>

  <DemoSection
    heading-id="striped-heading"
    title="줄무늬"
    description="striped로 짝수 행에 배경색을 적용합니다."
  >
    <Table striped :columns="productTableColumns">
      <thead>
        <tr>
          <th scope="col">제품</th>
          <th scope="col">가격</th>
          <th scope="col">재고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>노트북</td>
          <td>1,200,000원</td>
          <td>24</td>
        </tr>
        <tr>
          <td>키보드</td>
          <td>89,000원</td>
          <td>156</td>
        </tr>
        <tr>
          <td>마우스</td>
          <td>45,000원</td>
          <td>89</td>
        </tr>
        <tr>
          <td>모니터</td>
          <td>350,000원</td>
          <td>12</td>
        </tr>
      </tbody>
    </Table>
  </DemoSection>

  <DemoSection
    heading-id="variant-heading"
    title="변형"
    description="bordered · compact · hover를 조합할 수 있습니다."
  >
    <Table bordered compact hover>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">항목</th>
          <th scope="col">수량</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>사과</td>
          <td>10</td>
        </tr>
        <tr>
          <td>002</td>
          <td>바나나</td>
          <td>25</td>
        </tr>
        <tr>
          <td>003</td>
          <td>오렌지</td>
          <td>8</td>
        </tr>
      </tbody>
    </Table>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="tablePropColumns" :rows="tableProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="tableSlotColumns" :rows="tableSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="tableClassColumns" :rows="tableClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="tableTokenColumns" :rows="tableTokens" code-column="name" />
  </ApiSection>
</template>
