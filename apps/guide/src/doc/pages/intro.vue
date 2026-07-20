<script>
export const docMeta = {
  title: 'HTML Components | UXKM Guide',
  activeNav: 'intro',
  pageTitle: '소개',
};
</script>

<script setup>
import CategoryCard from '@uxkm/ui/components/CategoryCard.vue';
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
  conventionColumns,
  conventionRows,
  docPageCode,
  introCategories,
  quickstartCode,
  structureCode,
} from '@/doc/data/intro-data';

const props = defineProps({
  categories: {
    type: Array,
    default: () => introCategories,
  },
  categoryLinkTarget: {
    type: String,
    default: undefined,
  },
  /** 가이드 내부 링크를 환경별 경로로 변환 (스토리북 등) */
  resolveHref: {
    type: Function,
    default: (href) => href,
  },
  /** resolveHref로 변환된 Link 컴포넌트의 target */
  linkTarget: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <PageIntro title="UI Components">
    <template #lead>
      Vue와 SCSS로 구성된 UI 컴포넌트 가이드입니다. 마크업과 클래스 조합으로 버튼·폼·피드백·네비게이션 등 50여 개 컴포넌트를 확인할 수 있으며, 컴포넌트 자체는 HTML·CSS만으로도 다른 프로젝트에 적용할 수 있습니다.
    </template>
  </PageIntro>

  <ApiSection
    heading-id="overview-heading"
    title="개요"
    description="이 사이트는 디자인 시스템 문서이자 재사용 가능한 UI 패턴 모음입니다. 각 컴포넌트 페이지에서 라이브 데모, 마크업 예시, 클래스·속성 표, 디자인 토큰을 함께 제공합니다."
  >
    <List class="list_bullet" style="width: 100%;">
      <ListItem>
        <strong>OOCSS 구조</strong>
        — 블록(<TypoText variant="code" tag="span" label=".btn" />)
        + 파트(<TypoText variant="code" tag="span" label=".btn_label" />)
        + 스킨·크기·상태 클래스를 조합해 사용합니다.
      </ListItem>
      <ListItem>
        <strong>디자인 토큰</strong>
        — 색상·간격·타이포 등은
        <TypoText variant="code" tag="span" label="_tokens.scss" />
        의 CSS 변수로 관리하며, 라이트/다크 테마를 지원합니다.
        <Link
          :href="props.resolveHref('/design-tokens')"
          :target="props.linkTarget"
          label="디자인 토큰"
        />
        문서에서 기본값과 사용 방법을 확인할 수 있습니다.
      </ListItem>
      <ListItem>
        <strong>접근성</strong>
        — <TypoText variant="code" tag="span" label="role" />
        · <TypoText variant="code" tag="span" label="aria-*" />
        속성과 키보드·포커스 패턴을 컴포넌트별로 안내합니다.
      </ListItem>
      <ListItem>
        <strong>이 저장소의 빌드</strong>
        — <strong>Vue 3 + Vite</strong>로 개발·빌드합니다. 문서는
        <TypoText variant="code" tag="span" label="src/doc/" />
        의 Vue SFC로 관리합니다.
      </ListItem>
    </List>
  </ApiSection>

  <GuideSection
    heading-id="quickstart-heading"
    title="빠른 시작"
    description="이 가이드 저장소를 클론한 뒤 의존성을 설치하고 Vite 개발 서버를 실행합니다. 자세한 내용은 설치 및 사용을 참고하세요."
  >
    <p>
      <Link
        :href="props.resolveHref('/getting-started')"
        :target="props.linkTarget"
        label="설치 및 사용"
      />
    </p>
    <GuideCodeBlock>{{ quickstartCode }}</GuideCodeBlock>
  </GuideSection>

  <GuideSection
    heading-id="categories-heading"
    title="컴포넌트 카테고리"
    description="왼쪽 사이드바에서 컴포넌트를 선택하거나, 아래 카테고리 카드로 바로 이동할 수 있습니다."
  >
    <div class="card_grid">
      <CategoryCard
        v-for="category in props.categories"
        :key="category.title"
        :title="category.title"
        :description="category.description"
        :count="category.count"
        :href="category.href"
        :target="category.target ?? props.categoryLinkTarget"
      />
    </div>
  </GuideSection>

  <GuideSection
    heading-id="structure-heading"
    title="이 저장소 구조"
    description="아래는 이 가이드 저장소의 디렉터리 구성입니다. SCSS·Vue 문서 소스는 src/에서 관리하고, Vite 빌드 결과는 dist/에 생성됩니다."
  >
    <GuideCodeBlock>{{ structureCode }}</GuideCodeBlock>
    <p>
      컴포넌트 마크업·SCSS는 다른 프로젝트에도 가져다 쓸 수 있습니다. Vue 데모는
      <TypoText variant="code" tag="span" label="src/scss/main.scss" />
      를 import해 동일한 디자인 시스템을 공유합니다.
    </p>
  </GuideSection>

  <ApiSection
    heading-id="conventions-heading"
    title="네이밍 · 클래스 규칙"
    description="컴포넌트 스타일은 OOCSS 패턴을 따릅니다. 아래 규칙을 익혀 두면 문서와 소스를 일관되게 읽을 수 있습니다."
  >
    <ApiTable
      :columns="conventionColumns"
      :rows="conventionRows"
      code-column="pattern"
    />
  </ApiSection>

  <GuideSection
    heading-id="markup-heading"
    title="문서 페이지 구성"
    description="이 가이드 사이트의 문서 페이지는 src/doc/components/의 Vue SFC로 작성하며, docMeta로 제목·네비게이션 활성 상태를 지정합니다."
  >
    <GuideCodeBlock>{{ docPageCode }}</GuideCodeBlock>
  </GuideSection>
</template>
