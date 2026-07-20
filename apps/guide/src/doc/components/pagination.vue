<script>
export const docMeta = {
  title: 'Pagination | HTML Components',
  activeNav: 'pagination',
  pageTitle: 'Pagination',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Pagination from '@uxkm/ui/components/Pagination.vue';
import {
  paginationClassColumns,
  paginationClasses,
  paginationEventColumns,
  paginationEvents,
  paginationPropColumns,
  paginationProps,
  paginationTokenColumns,
  paginationTokens,
} from '@/doc/data/pagination-api';
</script>

<template>
  <div class="page_intro">
    <h1>Pagination</h1>
    <p class="lead">목록·테이블의 페이지를 이동하는 컴포넌트입니다. <code class="typo_code">nav</code> · <code class="typo_code">ul</code> 시맨틱 구조와 <code class="typo_code">aria-current="page"</code>로 접근성을 지원합니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="이전·다음 버튼과 페이지 번호로 구성합니다."
  >
    <Pagination :current="1" :total="50" :page-size="10" />
  </DemoSection>

  <DemoSection
    heading-id="minimal-heading"
    title="미니멀"
    description="minimal로 테두리 없는 가벼운 스타일을 적용합니다."
  >
    <Pagination :current="4" :total="50" :page-size="10" minimal />
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="size로 항목 스케일을 조절합니다."
    stack
  >
    <Pagination :current="1" :total="20" :page-size="10" size="sm" />
    <Pagination :current="1" :total="20" :page-size="10" />
    <Pagination :current="1" :total="20" :page-size="10" size="lg" />
  </DemoSection>

  <DemoSection
    heading-id="round-heading"
    title="둥근"
    description="round로 pill 형태의 페이지 버튼을 적용합니다."
  >
    <Pagination :current="7" :total="80" :page-size="10" round />
  </DemoSection>

  <DemoSection
    heading-id="ellipsis-heading"
    title="페이지 생략"
    description="페이지가 많을 때 중간 구간을 생략합니다."
  >
    <Pagination :current="10" :total="500" :page-size="10" />
  </DemoSection>

  <DemoSection
    heading-id="simple-heading"
    title="심플"
    description="simple로 이전·다음과 현재/전체 페이지만 표시합니다."
    stack
  >
    <Pagination simple :current="3" :total="120" :page-size="10" />
    <Pagination simple minimal :current="1" :total="120" :page-size="10" />
  </DemoSection>

  <DemoSection
    heading-id="toolbar-heading"
    title="툴바 조합"
    description="pagination_total · pagination_jumper와 함께 테이블 하단 툴바를 구성합니다."
  >
    <div class="pagination_wrap">
      <span class="pagination_total">총 128건</span>
      <div class="pagination_wrap-end">
        <Pagination :current="5" :total="128" :page-size="10" minimal />
        <label class="pagination_jumper">
          이동
          <input type="number" class="pagination_jumper-input" value="5" min="1" max="13" aria-label="이동할 페이지" />
          페이지
        </label>
      </div>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="align-heading"
    title="정렬"
    description="pagination_align-center · pagination_align-end로 가운데·우측 정렬합니다."
    stack
  >
    <Pagination :current="1" :total="20" :page-size="10" />
    <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-center" />
    <Pagination :current="1" :total="20" :page-size="10" class="pagination_align-end" />
  </DemoSection>

  <DemoSection
    heading-id="state-heading"
    title="상태"
    description="첫·마지막 페이지에서는 이전·다음 버튼을 비활성화합니다."
    stack
  >
    <Pagination :current="1" :total="30" :page-size="10" />
    <Pagination :current="10" :total="100" :page-size="10" />
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="paginationPropColumns" :rows="paginationProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-events-heading" title="API · Events">
    <ApiTable :columns="paginationEventColumns" :rows="paginationEvents" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="paginationClassColumns" :rows="paginationClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="paginationTokenColumns" :rows="paginationTokens" code-column="name" />
  </ApiSection>
</template>
