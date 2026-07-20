<script>
export const docMeta = {
  title: 'Empty | HTML Components',
  activeNav: 'empty',
  pageTitle: 'Empty',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Card from '@uxkm/ui/components/Card.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.vue';
import Empty from '@uxkm/ui/components/Empty.vue';
import {
  emptyClassColumns,
  emptyClasses,
  emptyPropColumns,
  emptyProps,
  emptySlotColumns,
  emptySlots,
  emptyTokenColumns,
  emptyTokens,
  markupCode,
} from '@/doc/data/empty-api';
</script>

<template>
  <div class="page_intro">
  <h1>Empty</h1>
  <p class="lead">데이터가 없거나 검색 결과가 없을 때 빈 상태를 안내하는 Empty 컴포넌트입니다. 기본 아이콘·설명·액션 버튼 조합을 지원하며 <code class="typo_code">role="status"</code>로 접근성을 보장합니다.</p>
</div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="<code class=&quot;typo_code&quot;>empty_image</code> · <code class=&quot;typo_code&quot;>empty_desc</code>로 아이콘과 설명을 표시합니다."
  >
    <Empty description="데이터가 없습니다" />
  </DemoSection>

  <DemoSection
    heading-id="footer-heading"
    title="액션"
    description="<code class=&quot;typo_code&quot;>empty_footer</code>에 버튼·링크를 배치해 다음 행동을 유도합니다."
  >
    <Empty description="등록된 프로젝트가 없습니다. 새 프로젝트를 만들어 시작해 보세요.">
      <template #footer>
        <Button variant="filled" color="primary" size="sm" label="프로젝트 만들기" />
      </template>
    </Empty>
  </DemoSection>

  <DemoSection
    heading-id="custom-heading"
    title="커스텀 이미지"
    description="<code class=&quot;typo_code&quot;>empty_image</code>에 SVG·img를 자유롭게 넣을 수 있습니다."
  >
    <Empty description="검색 결과가 없습니다. 다른 키워드로 다시 검색해 보세요.">
      <template #image>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
          <path d="M8 11h6" />
        </svg>
      </template>
    </Empty>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="<code class=&quot;typo_code&quot;>empty_sm</code> · <code class=&quot;typo_code&quot;>empty</code>(기본) · <code class=&quot;typo_code&quot;>empty_lg</code> 세 가지 스케일을 지원합니다."
  >
    <Empty size="sm" description="Small" />
    <Empty description="Medium (기본)" style="margin-top: var(--space-md);" />
    <Empty size="lg" description="Large" style="margin-top: var(--space-md);" />
  </DemoSection>

  <DemoSection
    heading-id="simple-heading"
    title="설명만"
    description="<code class=&quot;typo_code&quot;>empty_simple</code>은 아이콘 없이 짧은 안내만 표시합니다. 테이블·목록 셀 등 좁은 영역에 적합합니다."
  >
    <Empty simple size="sm" description="일정 없음" />
  </DemoSection>

  <DemoSection
    heading-id="block-heading"
    title="블록 · 컨테이너"
    description="<code class=&quot;typo_code&quot;>empty_block</code>은 카드·테이블 등 부모 너비 안에서 가운데 정렬합니다."
  >
    <Card variant="shadow" style="max-width: var(--input-max-width); width: 100%;">
      <div class="card_header">
        <h3 class="card_title">알림 목록</h3>
      </div>
      <div class="card_body">
        <Empty block description="새 알림이 없습니다" />
      </div>
    </Card>

    <div class="table_wrap" style="max-width: var(--input-max-width); width: 100%; margin-top: var(--space-md);">
      <table class="table table_bordered">
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">상태</th>
            <th scope="col">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" style="padding: 0; border: none;">
              <Empty block simple size="sm" description="표시할 항목이 없습니다" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DemoSection>

  <section class="section" aria-labelledby="usage-heading">
    <h2 id="usage-heading">마크업</h2>
      <p>빈 상태 영역에 <code class="typo_code">role="status"</code>를 지정하고, 장식용 아이콘에는 <code class="typo_code">aria-hidden="true"</code>를 사용합니다.</p>

      <GuideCodeBlock>{{ markupCode }}</GuideCodeBlock>
  </section>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="emptyPropColumns" :rows="emptyProps" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="emptySlotColumns" :rows="emptySlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="emptyClassColumns" :rows="emptyClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="emptyTokenColumns" :rows="emptyTokens" code-column="name" />
  </ApiSection>
</template>
