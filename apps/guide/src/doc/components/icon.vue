<script>
export const docMeta = {
  title: 'Icon | HTML Components',
  activeNav: 'icon',
  pageTitle: 'Icon',
};
</script>

<script setup>
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
import { commonIconGallery } from '@uxkm/ui/data/common-icons';
import { avatarSample } from '@images';
import {
  iconClassColumns,
  iconClasses,
  iconPropColumns,
  iconProps,
  iconSlotColumns,
  iconSlots,
  iconTokenColumns,
  iconTokens,
} from '@/doc/data/icon-api';

const basicCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="search" />
  <Icon name="edit" />
  <Icon name="trash" />
</template>`;

const customCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import { avatarSample } from '@images';
<\/script>

<template>
  <Icon name="search" />
  <Icon>
    <template #path>
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </template>
  </Icon>
  <Icon size="lg">
    <template #image>
      <img :src="avatarSample" alt="" />
    </template>
  </Icon>
</template>`;

const sizeCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="plus" size="sm" />
  <Icon name="plus" />
  <Icon name="plus" size="lg" />
  <Icon name="plus" size="xl" />
</template>`;

const colorCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="star" color="default" />
  <Icon name="star" color="primary" />
  <Icon name="check-circle" color="success" />
  <Icon name="alert-triangle" color="warning" />
  <Icon name="x-circle" color="danger" />
</template>`;

const inlineCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <p>
    <Icon name="info" inline color="info" />
    <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
  </p>
  <p>
    <Icon name="check-circle" inline color="success" />
    <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
  </p>
</template>`;

const circleCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="plus" circle color="primary" size="sm" />
  <Icon name="check-circle" circle color="success" size="sm" />
  <Icon name="trash" circle color="danger" size="lg" />
  <Icon name="edit" square color="primary" size="sm" />
</template>`;

const buttonCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="search" button color="primary" aria-label="검색" />
  <Icon name="settings" button color="muted" aria-label="설정" />
  <Icon name="close" button color="danger" aria-label="삭제" />
</template>`;

const pulseCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="bell" circle pulse color="primary" size="sm" />
  <Icon circle pulse color="danger" size="sm">
    <template #path>
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
    </template>
  </Icon>
</template>`;

const groupCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
<\/script>

<template>
  <div class="icon_group">
    <Icon name="upload" color="muted" />
    <Icon name="download" color="muted" />
    <Icon name="trash" color="muted" />
  </div>
  <p>
    <Icon name="user" circle color="primary" size="sm" />
    <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
  </p>
</template>`;

const spinCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
<\/script>

<template>
  <Icon name="loader" spin color="primary" />
  <Icon name="loader" spin size="lg" color="muted" />
</template>`;

const galleryCode = `<script setup>
import Icon from '@uxkm/ui/components/Icon.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
import { commonIconGallery } from '@uxkm/ui/data/common-icons';
<\/script>

<template>
  <div class="icon_grid">
    <div
      v-for="name in commonIconGallery"
      :key="name"
      class="icon_grid-item"
    >
      <Icon :name="name" class="icon_lg" />
      <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
    </div>
  </div>
</template>`;
</script>

<template>
  <div class="page_intro">
    <h1>Icon</h1>
    <p class="lead">name 갤러리, #path 커스텀 SVG, #image 이미지 삽입을 슬롯으로 구분하는 아이콘 기본 요소입니다.</p>
  </div>

  <DemoSection
    heading-id="basic-heading"
    title="기본"
    description="name prop으로 common-icons 갤러리 키를 지정합니다. stroke 아이콘은 currentColor로 부모 색상을 상속합니다."
    :code="basicCode"
  >
    <Icon name="search" />
    <Icon name="edit" />
    <Icon name="trash" />
  </DemoSection>

  <DemoSection
    heading-id="custom-heading"
    title="커스텀 · 슬롯"
    description="우선순위는 #image &gt; #path(또는 기본 슬롯) &gt; name입니다. 갤러리에 없는 도형은 #path로, 이미지는 #image로 넣습니다."
    :code="customCode"
  >
    <Icon name="search" />
    <Icon>
      <template #path>
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      </template>
    </Icon>
    <Icon size="lg">
      <template #image>
        <img :src="avatarSample" alt="" />
      </template>
    </Icon>
  </DemoSection>

  <DemoSection
    heading-id="size-heading"
    title="크기"
    description="기본 크기는 icon 클래스만 사용합니다. icon_sm · icon_lg · icon_xl로 스케일을 조절합니다."
    :code="sizeCode"
  >
    <Icon name="plus" size="sm" />
    <Icon name="plus" />
    <Icon name="plus" size="lg" />
    <Icon name="plus" size="xl" />
  </DemoSection>

  <DemoSection
    heading-id="color-heading"
    title="색상"
    description="공통 color_* 클래스를 조합합니다. 버튼·배지·알림 등 다른 컴포넌트와 동일한 클래스명을 사용합니다."
    :code="colorCode"
  >
    <Icon name="star" color="default" />
    <Icon name="star" color="primary" />
    <Icon name="check-circle" color="success" />
    <Icon name="alert-triangle" color="warning" />
    <Icon name="x-circle" color="danger" />
  </DemoSection>

  <DemoSection
    heading-id="inline-heading"
    title="텍스트와 함께"
    description="icon_inline으로 텍스트와 수직 정렬을 맞춥니다. 텍스트에는 ml_sm으로 간격을 둡니다. 의미 있는 아이콘은 aria-label을 지정합니다."
    stack
    :code="inlineCode"
  >
    <p>
      <Icon name="info" inline color="info" />
      <TypoText tag="span" class="ml_sm">변경 사항이 자동 저장됩니다.</TypoText>
    </p>
    <p>
      <Icon name="check-circle" inline color="success" />
      <TypoText tag="span" class="ml_sm">업로드가 완료되었습니다.</TypoText>
    </p>
  </DemoSection>

  <DemoSection
    heading-id="circle-heading"
    title="원형 · 사각 배경"
    description="icon_circle · icon_square로 아이콘에 배경을 적용합니다. color_*로 색상을 지정합니다."
    :code="circleCode"
  >
    <Icon name="plus" circle color="primary" size="sm" />
    <Icon name="check-circle" circle color="success" size="sm" />
    <Icon name="trash" circle color="danger" size="lg" />
    <Icon name="edit" square color="primary" size="sm" />
  </DemoSection>

  <DemoSection
    heading-id="button-heading"
    title="아이콘 버튼"
    description="icon_button으로 클릭 가능한 아이콘 버튼을 만듭니다. aria-label을 반드시 지정합니다."
    :code="buttonCode"
  >
    <Icon name="search" button color="primary" aria-label="검색" />
    <Icon name="settings" button color="muted" aria-label="설정" />
    <Icon name="close" button color="danger" aria-label="삭제" />
  </DemoSection>

  <DemoSection
    heading-id="pulse-heading"
    title="펄스"
    description="icon_pulse로 알림·상태 강조 애니메이션을 적용합니다. icon_circle과 함께 사용합니다."
    :code="pulseCode"
  >
    <Icon name="bell" circle pulse color="primary" size="sm" />
    <Icon circle pulse color="danger" size="sm">
      <template #path>
        <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
      </template>
    </Icon>
  </DemoSection>

  <DemoSection
    heading-id="group-heading"
    title="그룹"
    description="icon_group으로 여러 아이콘을 나란히 배치합니다."
    stack
    :code="groupCode"
  >
    <div class="icon_group">
      <Icon name="upload" color="muted" />
      <Icon name="download" color="muted" />
      <Icon name="trash" color="muted" />
    </div>
    <p>
      <Icon name="user" circle color="primary" size="sm" />
      <TypoText tag="span" color="muted" size="sm" class="ml_sm">홍길동님이 댓글을 남겼습니다.</TypoText>
    </p>
  </DemoSection>

  <DemoSection
    heading-id="spin-heading"
    title="로딩"
    description="icon_spin으로 회전 애니메이션을 적용합니다. 로딩 상태 표시에 사용합니다."
    :code="spinCode"
  >
    <Icon name="loader" spin color="primary" />
    <Icon name="loader" spin size="lg" color="muted" />
  </DemoSection>

  <DemoSection
    heading-id="gallery-heading"
    title="아이콘 유형"
    description="프로젝트에서 제공하는 stroke SVG 아이콘 전체입니다. viewBox 0 0 24 24 · stroke-width 2 기준입니다."
    stack
    :code="galleryCode"
  >
    <div class="icon_grid">
      <div
        v-for="name in commonIconGallery"
        :key="name"
        class="icon_grid-item"
      >
        <Icon :name="name" class="icon_lg" />
        <TypoText tag="span" size="sm" color="muted">{{ name }}</TypoText>
      </div>
    </div>
  </DemoSection>

  <ApiSection heading-id="api-props-heading" title="API · Props">
    <ApiTable :columns="iconPropColumns" :rows="iconProps" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      장식용 아이콘은 <code class="typo_code">aria-hidden="true"</code>가 자동 적용됩니다.
      의미 있는 아이콘·버튼은 <code class="typo_code">aria-label</code>을 지정하세요.
    </p>
  </ApiSection>

  <ApiSection heading-id="api-slots-heading" title="API · Slots">
    <ApiTable :columns="iconSlotColumns" :rows="iconSlots" code-column="name" />
  </ApiSection>

  <ApiSection
    heading-id="api-classes-heading"
    title="클래스 · 속성"
    description="Vue 컴포넌트가 렌더하는 OOCSS 클래스입니다. HTML 마크업으로 직접 작성할 때 동일하게 조합합니다."
  >
    <ApiTable :columns="iconClassColumns" :rows="iconClasses" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="tokens-heading" title="디자인 토큰">
    <ApiTable :columns="iconTokenColumns" :rows="iconTokens" code-column="name" />
  </ApiSection>
</template>
