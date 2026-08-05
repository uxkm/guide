<script>
export const docMeta = {
  title: 'Link | UXKM Guide',
  activeNav: 'link',
  pageTitle: 'Link',
};
</script>

<script setup>
import Alert from '@/components/Alert.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
import { avatarSample } from '@images';
import {
  linkClassColumns,
  linkClasses,
  linkPropColumns,
  linkProps,
  linkSlotColumns,
  linkSlots,
  linkTokenColumns,
  linkTokens,
} from '@/doc/data/link-api';

const basicCode = `<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link label="더 보기" />
  <Link label="가이드 문서" />
  <Link underline label="항상 밑줄" />
</template>`;

const sourceCode = `<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Link href="/components/icon">
    <Icon name="link" class="link_icon" />
    아이콘 문서
  </Link>
  <Link href="/components/avatar">
    <img class="link_media" :src="avatarSample" alt="" />
    프로필
  </Link>
  <Link as="button" @click="console.log('action')">
    커스텀 액션
  </Link>
</template>`;

const colorCode = `<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <div class="link_row">
    <Link color="primary" label="Primary" />
    <Link color="muted" label="Muted" />
    <Link color="success" label="Success" />
    <Link color="warning" label="Warning" />
    <Link color="danger" label="Danger" />
  </div>
</template>`;

const sizeCode = `<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link size="sm" label="Small" />
  <Link label="Base" />
  <Link size="lg" label="Large" />
  <Link size="xl" label="Extra Large" />
</template>`;

const styleCode = `<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <div class="link_row">
    <Link label="기본 (hover 밑줄)" />
    <Link underline label="항상 밑줄" />
    <Link no-underline label="밑줄 없음" />
    <Link standalone label="터치 영역 확대" />
  </div>
</template>`;

const navCode = `<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <nav class="link_group-inline" aria-label="섹션 내비게이션">
    <Link nav active label="개요" />
    <Link nav label="컴포넌트" />
    <Link nav label="토큰" />
    <Link nav label="접근성" />
  </nav>
  <Link back label="이전 페이지">
    <template #icon>
      <Icon name="arrow-left" class="link_icon" />
    </template>
  </Link>
</template>`;

const blockCode = `<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <div class="link_group" style="max-width: 280px; width: 100%;">
    <Link block label="시작하기">
      <template #icon><Icon name="file" class="link_icon" /></template>
    </Link>
    <Link block label="컴포넌트">
      <template #icon><Icon name="grid" class="link_icon" /></template>
    </Link>
    <Link block color="muted" label="도움말">
      <template #icon><Icon name="info" class="link_icon" /></template>
    </Link>
  </div>
</template>`;

const iconOnlyCode = `<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link icon-only aria-label="검색">
    <template #icon><Icon name="search" class="link_icon" /></template>
  </Link>
  <Link icon-only aria-label="편집">
    <template #icon><Icon name="edit" class="link_icon" /></template>
  </Link>
  <Link icon-only color="muted" aria-label="더 보기">
    <template #icon><Icon name="more-horizontal" class="link_icon" /></template>
  </Link>
</template>`;

const iconCode = `<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <div class="link_row">
    <Link label="외부 링크">
      <template #icon><Icon name="external-link" class="link_icon" /></template>
    </Link>
    <Link>
      다운로드
      <Icon name="download" class="link_icon" />
    </Link>
    <Link label="다음 단계">
      <template #icon><Icon name="arrow-right" class="link_icon" /></template>
    </Link>
  </div>
</template>`;

const externalCode = `<script setup>
import Icon from '@/components/Icon.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  >
  공식 문서
  <span class="color_muted size_sm">(새 창)</span>
  <Icon name="external-link" class="link_icon" />
  </Link>
</template>`;

const disabledCode = `<script setup>
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Link disabled label="비활성 링크" />
  <Link disabled label="비활성 (span)" />
</template>`;

const contextCode = `<script setup>
import Alert from '@/components/Alert.vue';
import Link from '@/components/Link.vue';
<\/script>

<template>
  <Alert title="업데이트 안내">
    새 버전이 출시되었습니다.
    <Link size="sm" label="릴리스 노트 보기" />
  </Alert>
  <p class="color_muted">
    계정이 없으신가요?
    <Link label="회원가입" />
  </p>
</template>`;

</script>

<template>
  <div class="page_intro">
    <h1>Link</h1>
    <p class="lead">페이지 이동·액션 트리거용 하이퍼링크 컴포넌트입니다. 본문 안 인라인 링크는 Typography의 <code class="typo_code">typo_link</code>를 사용합니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="기본 색상은 primary입니다. hover 시 밑줄이 표시됩니다."
    :code="basicCode"
  >
    <Link label="더 보기" />
    <Link label="가이드 문서" />
    <Link underline label="항상 밑줄" />
  </DemoSection>

  <DemoSection
    heading-id="source-heading"
    title="이미지 · 아이콘 · 커스텀 요소"
    description="기본 슬롯에 이미지·아이콘·컴포넌트를 조합하거나 as로 루트 요소를 변경할 수 있습니다."
    :code="sourceCode"
  >
    <Link href="/components/icon">
      <Icon name="link" class="link_icon" />
      아이콘 문서
    </Link>
    <Link href="/components/avatar">
      <img class="link_media" :src="avatarSample" alt="" />
      프로필
    </Link>
    <Link as="button" @click="() => {}">
      커스텀 액션
    </Link>
  </DemoSection>

  <DemoSection
    heading-id="color-heading"
    title="색상"
    description="공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."
    stack
    :code="colorCode"
  >
    <div class="link_row">
      <Link color="primary" label="Primary" />
      <Link color="muted" label="Muted" />
      <Link color="success" label="Success" />
      <Link color="warning" label="Warning" />
      <Link color="danger" label="Danger" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="공통 size_* 클래스로 텍스트 크기를 조절합니다."
    :code="sizeCode"
  >
    <Link size="sm" label="Small" />
    <Link label="Base" />
    <Link size="lg" label="Large" />
    <Link size="xl" label="Extra Large" />
  </DemoSection>

  <DemoSection
    heading-id="style-heading"
    title="스타일"
    description="link_underline · link_no-underline · link_standalone으로 밑줄과 터치 영역을 조절합니다."
    stack
    :code="styleCode"
  >
    <div class="link_row">
      <Link label="기본 (hover 밑줄)" />
      <Link underline label="항상 밑줄" />
      <Link no-underline label="밑줄 없음" />
      <Link standalone label="터치 영역 확대" />
    </div>
  </DemoSection>

  <DemoSection
    heading-id="nav-heading"
    title="내비게이션"
    description="link_nav · is-active로 메뉴·탭 링크를 표현합니다."
    stack
    :code="navCode"
  >
    <nav class="link_group-inline" aria-label="섹션 내비게이션">
      <Link nav active label="개요" />
      <Link nav label="컴포넌트" />
      <Link nav label="토큰" />
      <Link nav label="접근성" />
    </nav>

    <Link back label="이전 페이지">
      <template #icon>
        <Icon name="arrow-left" class="link_icon" />
      </template>
    </Link>
  </DemoSection>

  <DemoSection
    heading-id="block-heading"
    title="블록 · 그룹"
    description="link_block · link_group으로 세로 링크 목록을 구성합니다."
    :code="blockCode"
  >
    <div class="link_group" style="max-width: 280px; width: 100%;">
      <Link block label="시작하기">
        <template #icon>
          <Icon name="file" class="link_icon" />
        </template>
      </Link>
      <Link block label="컴포넌트">
        <template #icon>
          <Icon name="grid" class="link_icon" />
        </template>
      </Link>
      <Link block color="muted" label="도움말">
        <template #icon>
          <Icon name="info" class="link_icon" />
        </template>
      </Link>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="icon-only-heading"
    title="아이콘 전용"
    description="link_icon-only으로 텍스트 없는 링크 버튼을 만듭니다."
    :code="iconOnlyCode"
  >
    <Link icon-only aria-label="검색">
      <template #icon>
        <Icon name="search" class="link_icon" />
      </template>
    </Link>
    <Link icon-only aria-label="편집">
      <template #icon>
        <Icon name="edit" class="link_icon" />
      </template>
    </Link>
    <Link icon-only color="muted" aria-label="더 보기">
      <template #icon>
        <Icon name="more-horizontal" class="link_icon" />
      </template>
    </Link>
  </DemoSection>

  <DemoSection
    heading-id="icon-heading"
    title="아이콘"
    description='link_icon으로 텍스트 앞·뒤에 아이콘을 배치합니다. 장식용 아이콘은 aria-hidden="true"를 지정합니다.'
    stack
    :code="iconCode"
  >
    <div class="link_row">
      <Link label="외부 링크">
        <template #icon>
          <Icon name="external-link" class="link_icon" />
        </template>
      </Link>

      <Link>
        다운로드
        <Icon name="download" class="link_icon" />
      </Link>

      <Link label="다음 단계">
        <template #icon>
          <Icon name="arrow-right" class="link_icon" />
        </template>
      </Link>
    </div>
  </DemoSection>

  <DemoSection
    heading-id="external-heading"
    title="새 창 열기"
    description='target="_blank"과 rel="noopener noreferrer"를 함께 지정합니다. 스크린 리더용 안내 문구를 링크 텍스트에 포함합니다.'
    :code="externalCode"
  >
    <Link
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      공식 문서
      <span class="color_muted size_sm">(새 창)</span>
      <Icon name="external-link" class="link_icon" />
    </Link>
  </DemoSection>

  <DemoSection
    heading-id="disabled-heading"
    title="비활성"
    description='aria-disabled="true"와 tabindex="-1"로 비활성 링크를 표현합니다. 클릭 불가 시 href를 제거하거나 span으로 대체할 수 있습니다.'
    :code="disabledCode"
  >
    <Link disabled label="비활성 링크" />
    <Link disabled label="비활성 (span)" />
  </DemoSection>

  <DemoSection
    heading-id="context-heading"
    title="문맥 속 사용"
    description="알림·카드·폼 등 다른 컴포넌트 안에서 보조 액션 링크로 활용합니다."
    stack
    :code="contextCode"
  >
    <Alert title="업데이트 안내">
      새 버전이 출시되었습니다.
      <Link size="sm" label="릴리스 노트 보기" />
    </Alert>

    <p class="color_muted">
      계정이 없으신가요?
      <Link label="회원가입" />
    </p>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="linkPropColumns" :rows="linkProps" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      본문 안 인라인 링크는 Typography의 <code class="typo_code">typo_link</code>를 사용합니다.
      이 Link 컴포넌트는 독립 액션·내비게이션 링크용입니다.
    </p>
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="linkSlotColumns" :rows="linkSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="linkClassColumns" :rows="linkClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="linkTokenColumns" :rows="linkTokens" code-column="name" />
  </ApiSection>
</template>
