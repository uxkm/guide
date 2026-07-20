<script>
export const docMeta = {
  title: '설치 및 사용 | HTML Components',
  activeNav: 'getting-started',
  pageTitle: '설치 및 사용',
};
</script>

<script setup>
import Alert from '@uxkm/ui/components/Alert.vue';
import Button from '@uxkm/ui/components/Button.vue';
import Link from '@uxkm/ui/components/Link.vue';
import TypoText from '@uxkm/ui/components/TypoText.vue';
import ApiSection from '@/components/guide/ApiSection.vue';
import ApiTable from '@/components/guide/ApiTable.vue';
import DemoSection from '@/components/guide/DemoSection.vue';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.vue';
import GuideSection from '@/components/guide/GuideSection.vue';
import PageIntro from '@/components/guide/PageIntro.vue';
import {
  installCode,
  markupCode,
  newComponentColumns,
  newComponentRows,
  requirementColumns,
  requirementRows,
  scriptColumns,
  scriptRows,
  stylesCode,
  themeCode,
} from '@/doc/data/getting-started-data';
</script>

<template>
  <PageIntro title="설치 및 사용">
    <template #lead>
      이 가이드 저장소의 설치·실행 방법을 안내합니다. Vue 3 + Vite로 개발·빌드하며, 문서는
      <TypoText variant="code" tag="span" label="src/doc/" />
      의 Vue SFC로 관리합니다.
    </template>
  </PageIntro>

  <ApiSection heading-id="requirements-heading" title="사전 요구사항" description="아래 환경이 설치되어 있어야 합니다.">
    <ApiTable
      :columns="requirementColumns"
      :rows="requirementRows"
      code-column=""
    />
  </ApiSection>

  <GuideSection
    heading-id="install-heading"
    title="설치"
    description="루트에서 의존성을 설치한 뒤 Vite 개발 서버를 실행합니다."
  >
    <GuideCodeBlock>{{ installCode }}</GuideCodeBlock>
  </GuideSection>

  <ApiSection
    heading-id="scripts-heading"
    title="pnpm 스크립트"
    description="루트 package.json의 스크립트입니다."
  >
    <ApiTable
      :columns="scriptColumns"
      :rows="scriptRows"
      code-column="command"
    />
  </ApiSection>

  <GuideSection
    heading-id="dev-heading"
    title="개발 서버"
    description="pnpm dev 실행 후 브라우저에서 접속하면 컴포넌트 가이드 소개 페이지가 표시됩니다."
  >
    <GuideCodeBlock>pnpm dev</GuideCodeBlock>
  </GuideSection>

  <GuideSection
    heading-id="build-heading"
    title="프로덕션 빌드"
    description="pnpm build 결과물은 dist/ 폴더에 생성됩니다. 정적 호스팅에 dist/ 내용을 배포하면 됩니다."
  >
    <GuideCodeBlock>pnpm build</GuideCodeBlock>
  </GuideSection>

  <GuideSection heading-id="styles-heading" title="스타일 적용">
    <p><strong>이 가이드</strong>는 Vite 빌드 시 <TypoText variant="code" tag="span" label="src/scss/main.scss" />가 자동으로 번들됩니다.</p>
    <p>
      <strong>다른 프로젝트</strong>에서 SCSS 소스를 직접 쓰려면 자체 빌드 도구(Vite, Webpack 등)에
      <TypoText variant="code" tag="span" label="src/scss/main.scss" />
      를 포함하거나, 필요한 컴포넌트만 선택 import합니다.
    </p>
    <GuideCodeBlock>{{ stylesCode }}</GuideCodeBlock>
  </GuideSection>

  <DemoSection
    heading-id="component-heading"
    title="컴포넌트 마크업 사용"
    description="각 컴포넌트 문서의 마크업 섹션 HTML은 어떤 프로젝트에도 복사해 사용할 수 있습니다. 클래스 이름과 ARIA 속성을 그대로 쓰면 스타일이 적용됩니다. 모달·드로어·아코디언 등 인터랙션이 필요한 컴포넌트는 Vue 컴포넌트 구현을 참고하거나, data-* 속성과 JS를 함께 포함합니다."
    stack
  >
    <Button variant="filled" color="primary" label="저장" />
    <Alert color="info" description="변경 사항이 저장되었습니다." />
  </DemoSection>

  <GuideSection
    heading-id="markup-html-heading"
    title="HTML 마크업 예시"
    description="Vue 없이 HTML·CSS만으로도 동일한 UI를 구성할 수 있습니다. 아래 마크업을 복사해 사용하세요."
  >
    <GuideCodeBlock>{{ markupCode }}</GuideCodeBlock>
  </GuideSection>

  <GuideSection heading-id="theme-heading" title="테마">
    <p>
      라이트/다크 테마는 <TypoText variant="code" tag="span" label="data-theme" /> 속성으로 전환됩니다.
      <TypoText variant="code" tag="span" label="useTheme" />
      composable이 헤더의 토글 버튼과
      <TypoText variant="code" tag="span" label="localStorage" />
      를 관리합니다.
    </p>
    <GuideCodeBlock>{{ themeCode }}</GuideCodeBlock>
    <p>
      색상·간격 등 디자인 값은
      <TypoText variant="code" tag="span" label="src/scss/_tokens.scss" />
      와 <TypoText variant="code" tag="span" label="_themes.scss" />
      에서 CSS 변수로 정의됩니다. 전역 토큰의 기본값·사용 방법은
      <Link href="/design-tokens" label="디자인 토큰" />
      문서를 참고하세요.
    </p>
  </GuideSection>

  <ApiSection
    heading-id="new-component-heading"
    title="새 컴포넌트 추가"
    description="컴포넌트를 새로 등록할 때 추가·수정하는 파일입니다."
  >
    <ApiTable
      :columns="newComponentColumns"
      :rows="newComponentRows"
      code-column="path"
    />
  </ApiSection>
</template>
