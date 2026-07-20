<script>
export const docMeta = {
  title: '디자인 토큰 | HTML Components',
  activeNav: 'design-tokens',
  pageTitle: '디자인 토큰',
};
</script>

<script setup>
import Link from '@uxkm/ui/components/Link.vue';
import List from '@uxkm/ui/components/List.vue';
import ListItem from '@uxkm/ui/components/ListItem.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.vue';
import GuideSection from '@/components/guide/GuideSection.vue';
import PageIntro from '@/components/guide/PageIntro.vue';
import {
  colorTokenColumns,
  componentTokenNote,
  cssUsageCode,
  fileStructureCode,
  layoutTokens,
  motionTokens,
  radiusTokens,
  scssUsageCode,
  semanticColorTokens,
  spacingTokens,
  surfaceColorTokens,
  textSizeTokens,
  themeUsageCode,
  tokenColumns,
} from '@/doc/data/design-tokens-data';
</script>

<template>
  <PageIntro title="디자인 토큰">
    <template #lead>
      색상·간격·타이포그래피 등 디자인 시스템의 기준 값을 CSS 변수로 관리합니다.
      <a href="https://uxkm.io/publishing/scss/10-scss-examples/01-design-tokens-base-styles" target="_blank" rel="noopener noreferrer">UXKM 디자인 토큰과 기본 스타일</a>
      을 참고해, 이 가이드에서는 <TypoText variant="code" tag="span" label=":root" />
      CSS 변수와 라이트/다크 테마 구조로 제공합니다.
    </template>
  </PageIntro>

  <ApiSection
    heading-id="concept-heading"
    title="디자인 토큰이란?"
    description="디자인 시스템에서 반복되는 값을 의미 있는 이름으로 정의한 것입니다. 컴포넌트·페이지 스타일은 하드코딩 대신 토큰을 참조해 일관성을 유지하고, 변경 시 한 곳만 수정하면 전체에 반영됩니다."
  >
    <List class="list_bullet" style="width: 100%;">
      <ListItem><strong>일관성</strong> — 같은 의미의 값은 항상 같은 토큰을 사용합니다.</ListItem>
      <ListItem><strong>유지보수</strong> — 간격·색상 변경 시 <TypoText variant="code" tag="span" label="_tokens.scss" /> · <TypoText variant="code" tag="span" label="_themes.scss" />만 수정합니다.</ListItem>
      <ListItem><strong>테마</strong> — 색상 토큰을 테마별로 교체해 라이트/다크를 지원합니다.</ListItem>
      <ListItem><strong>협업</strong> — 디자이너·개발자가 <TypoText variant="code" tag="span" label="--space-md" /> 같은 공통 언어로 소통합니다.</ListItem>
    </List>
  </ApiSection>

  <GuideSection
    heading-id="structure-heading"
    title="토큰 파일 구조"
    description="UXKM SCSS 실무 예제와 같이 tokens → themes → base/components 순으로 의존성을 쌓습니다. 이 가이드는 SCSS 변수와 CSS 변수를 함께 씁니다."
  >
    <GuideCodeBlock>{{ fileStructureCode }}</GuideCodeBlock>
    <p>
      전역 수치 토큰은 <TypoText variant="code" tag="span" label="_tokens.scss" />
      의 <TypoText variant="code" tag="span" label=":root" />
      에 정의하고, 색상은 <TypoText variant="code" tag="span" label="_themes.scss" />
      에서 <TypoText variant="code" tag="span" label="data-theme" />
      별로 덮어씁니다. 미디어쿼리용 브레이크포인트 등 컴파일 타임 값만 <TypoText variant="code" tag="span" label="_variables.scss" />
      에 둡니다.
    </p>
  </GuideSection>

  <ApiSection
    heading-id="spacing-heading"
    title="Spacing 토큰"
    description="마진·패딩·gap 등 모든 간격의 기준입니다. rem 단위로 정의해 사용자 글꼴 크기 설정을 존중합니다."
  >
    <ApiTable :columns="tokenColumns" :rows="spacingTokens" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="radius-heading" title="Radius 토큰">
    <ApiTable :columns="tokenColumns" :rows="radiusTokens" code-column="name" />
  </ApiSection>

  <ApiSection heading-id="typography-heading" title="Typography 토큰">
    <ApiTable :columns="tokenColumns" :rows="textSizeTokens" code-column="name" />
    <p class="form_field-hint" style="margin-top: var(--space-md);">
      제목·본문 변형(<TypoText variant="code" tag="span" label="--typo-title-*" />,
      <TypoText variant="code" tag="span" label="--typo-text-*" />)은 Typography 컴포넌트 문서를 참고하세요.
    </p>
  </ApiSection>

  <ApiSection heading-id="motion-heading" title="Motion · Layout 토큰">
    <ApiTable :columns="tokenColumns" :rows="motionTokens" code-column="name" />
    <ApiTable :columns="tokenColumns" :rows="layoutTokens" code-column="name" style="margin-top: var(--space-lg);" />
  </ApiSection>

  <ApiSection
    heading-id="color-heading"
    title="Color 토큰"
    description="UXKM Color Tokens처럼 Surface(배경·테두리·텍스트)와 Semantic(Primary·Success·Danger·Warning)으로 구분합니다. 실제 hex 값은 테마에 따라 달라집니다."
  >
    <h3 class="typo_title-4" style="margin-bottom: var(--space-sm);">Surface</h3>
    <ApiTable :columns="colorTokenColumns" :rows="surfaceColorTokens" code-column="name" />
    <h3 class="typo_title-4" style="margin: var(--space-lg) 0 var(--space-sm);">Semantic</h3>
    <ApiTable :columns="colorTokenColumns" :rows="semanticColorTokens" code-column="name" />
    <p style="margin-top: var(--space-md);">
      테마 적용 방법은 <Link href="/getting-started#theme-heading" label="설치 및 사용 · 테마" />를 참고하세요.
    </p>
  </ApiSection>

  <GuideSection
    heading-id="usage-heading"
    title="토큰 사용 방법"
    description="SCSS·CSS·HTML 어디서든 var()로 참조합니다. 컴포넌트 범위에서 CSS 변수를 재정의하면 해당 블록만 스케일을 바꿀 수 있습니다."
  >
    <h3 class="typo_title-4" style="margin-bottom: var(--space-sm);">SCSS</h3>
    <GuideCodeBlock>{{ scssUsageCode }}</GuideCodeBlock>

    <h3 class="typo_title-4" style="margin: var(--space-lg) 0 var(--space-sm);">CSS · 범위 재정의</h3>
    <GuideCodeBlock>{{ cssUsageCode }}</GuideCodeBlock>

    <h3 class="typo_title-4" style="margin: var(--space-lg) 0 var(--space-sm);">테마</h3>
    <GuideCodeBlock>{{ themeUsageCode }}</GuideCodeBlock>
  </GuideSection>

  <GuideSection
    heading-id="component-tokens-heading"
    title="컴포넌트 토큰"
    :description="componentTokenNote"
  >
    <p>
      예: Icon 문서의 <TypoText variant="code" tag="span" label="--icon-size" />,
      Button의 <TypoText variant="code" tag="span" label="--btn-padding-y" /> —
      각 표에는 <strong>기본값</strong>과 <strong>설명(사용)</strong> 열이 함께 제공됩니다.
    </p>
  </GuideSection>
</template>
