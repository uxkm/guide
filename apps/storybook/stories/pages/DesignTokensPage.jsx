import React from 'react';
import {
  colorTokenColumns,
  componentTokenNote,
  cssUsageCode,
  layoutTokens,
  motionTokens,
  radiusTokens,
  scssUsageCode,
  semanticColorTokens,
  spacingTokens,
  surfaceColorTokens,
  textSizeTokens,
  tokenColumns,
} from '@doc-data/design-tokens-data';
import { guideHrefToStorybookDocsHref } from '../../utils/storybook-links';
import { ApiTable } from '../components/guide/ApiTable';
import {
  ApiSection,
  GuideCodeBlock,
  GuideSection,
  PageIntro,
} from '../components/guide/GuideBlocks';
import { GuideLink, TypoCode } from '../components/guide/GuidePrimitives';
import { reactFileStructureCode, reactThemeUsageCode } from './design-tokens-react-data';

export function DesignTokensPage({
  resolveHref = (href) => href,
  linkTarget,
}) {
  return (
    <>
      <PageIntro
        title="디자인 토큰"
        lead={
          <>
            색상·간격·타이포그래피 등 디자인 시스템의 기준 값을 CSS 변수로 관리합니다.{' '}
            <a
              href="https://uxkm.io/publishing/scss/10-scss-examples/01-design-tokens-base-styles"
              target="_blank"
              rel="noopener noreferrer"
            >
              UXKM 디자인 토큰과 기본 스타일
            </a>
            을 참고해, 이 가이드에서는 <TypoCode tag="span">:root</TypoCode>
            CSS 변수와 라이트/다크 테마 구조로 제공합니다.
          </>
        }
      />

      <ApiSection
        headingId="concept-heading"
        title="디자인 토큰이란?"
        description="디자인 시스템에서 반복되는 값을 의미 있는 이름으로 정의한 것입니다. 컴포넌트·페이지 스타일은 하드코딩 대신 토큰을 참조해 일관성을 유지하고, 변경 시 한 곳만 수정하면 전체에 반영됩니다."
      >
        <ul className="list list_bullet" style={{ width: '100%' }}>
          <li className="list_item">
            <strong>일관성</strong> — 같은 의미의 값은 항상 같은 토큰을 사용합니다.
          </li>
          <li className="list_item">
            <strong>유지보수</strong> — 간격·색상 변경 시{' '}
            <TypoCode tag="span">_tokens.scss</TypoCode> ·{' '}
            <TypoCode tag="span">_themes.scss</TypoCode>
            만 수정합니다.
          </li>
          <li className="list_item">
            <strong>테마</strong> — 색상 토큰을 테마별로 교체해 라이트/다크를 지원합니다.
          </li>
          <li className="list_item">
            <strong>협업</strong> — 디자이너·개발자가{' '}
            <TypoCode tag="span">--space-md</TypoCode>
            같은 공통 언어로 소통합니다.
          </li>
        </ul>
      </ApiSection>

      <GuideSection
        headingId="structure-heading"
        title="토큰 파일 구조"
        description="UXKM SCSS 실무 예제와 같이 tokens → themes → base/components 순으로 의존성을 쌓습니다. 이 가이드는 SCSS 변수와 CSS 변수를 함께 씁니다."
      >
        <GuideCodeBlock>{reactFileStructureCode}</GuideCodeBlock>
        <p>
          전역 수치 토큰은 <TypoCode tag="span">packages/ui/src/scss/_tokens.scss</TypoCode>
          의 <TypoCode tag="span">:root</TypoCode>
          에 정의하고, 색상은 <TypoCode tag="span">_themes.scss</TypoCode>
          에서 <TypoCode tag="span">data-theme</TypoCode>
          별로 덮어씁니다. 미디어쿼리용 브레이크포인트 등 컴파일 타임 값만{' '}
          <TypoCode tag="span">_variables.scss</TypoCode>
          에 둡니다.
        </p>
      </GuideSection>

      <ApiSection
        headingId="spacing-heading"
        title="Spacing 토큰"
        description="마진·패딩·gap 등 모든 간격의 기준입니다. rem 단위로 정의해 사용자 글꼴 크기 설정을 존중합니다."
      >
        <ApiTable columns={tokenColumns} rows={spacingTokens} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="radius-heading" title="Radius 토큰">
        <ApiTable columns={tokenColumns} rows={radiusTokens} codeColumn="name" />
      </ApiSection>

      <ApiSection headingId="typography-heading" title="Typography 토큰">
        <ApiTable columns={tokenColumns} rows={textSizeTokens} codeColumn="name" />
        <p className="form_field-hint" style={{ marginTop: 'var(--space-md)' }}>
          제목·본문 변형(
          <TypoCode tag="span">--typo-title-*</TypoCode>,
          <TypoCode tag="span">--typo-text-*</TypoCode>)은 Typography 컴포넌트 문서를 참고하세요.
        </p>
      </ApiSection>

      <ApiSection headingId="motion-heading" title="Motion · Layout 토큰">
        <ApiTable columns={tokenColumns} rows={motionTokens} codeColumn="name" />
        <div style={{ marginTop: 'var(--space-lg)' }}>
          <ApiTable columns={tokenColumns} rows={layoutTokens} codeColumn="name" />
        </div>
      </ApiSection>

      <ApiSection
        headingId="color-heading"
        title="Color 토큰"
        description="UXKM Color Tokens처럼 Surface(배경·테두리·텍스트)와 Semantic(Primary·Success·Danger·Warning)으로 구분합니다. 실제 hex 값은 테마에 따라 달라집니다."
      >
        <h3 className="typo_title-4" style={{ marginBottom: 'var(--space-sm)' }}>
          Surface
        </h3>
        <ApiTable columns={colorTokenColumns} rows={surfaceColorTokens} codeColumn="name" />
        <h3
          className="typo_title-4"
          style={{ margin: 'var(--space-lg) 0 var(--space-sm)' }}
        >
          Semantic
        </h3>
        <ApiTable columns={colorTokenColumns} rows={semanticColorTokens} codeColumn="name" />
        <p style={{ marginTop: 'var(--space-md)' }}>
          테마 적용 방법은{' '}
          <GuideLink
            href={`${resolveHref('/getting-started')}#theme-heading`}
            target={linkTarget}
            label="설치 및 사용 · 테마"
          />{' '}
          를 참고하세요.
        </p>
      </ApiSection>

      <GuideSection
        headingId="usage-heading"
        title="토큰 사용 방법"
        description="SCSS·CSS·HTML 어디서든 var()로 참조합니다. 컴포넌트 범위에서 CSS 변수를 재정의하면 해당 블록만 스케일을 바꿀 수 있습니다."
      >
        <h3 className="typo_title-4" style={{ marginBottom: 'var(--space-sm)' }}>
          SCSS
        </h3>
        <GuideCodeBlock>{scssUsageCode}</GuideCodeBlock>

        <h3
          className="typo_title-4"
          style={{ margin: 'var(--space-lg) 0 var(--space-sm)' }}
        >
          CSS · 범위 재정의
        </h3>
        <GuideCodeBlock>{cssUsageCode}</GuideCodeBlock>

        <h3
          className="typo_title-4"
          style={{ margin: 'var(--space-lg) 0 var(--space-sm)' }}
        >
          테마
        </h3>
        <GuideCodeBlock>{reactThemeUsageCode}</GuideCodeBlock>
      </GuideSection>

      <GuideSection
        headingId="component-tokens-heading"
        title="컴포넌트 토큰"
        description={componentTokenNote}
      >
        <p>
          예: Icon 문서의 <TypoCode tag="span">--icon-size</TypoCode>, Button의{' '}
          <TypoCode tag="span">--btn-padding-y</TypoCode> — 각 표에는{' '}
          <strong>기본값</strong>과 <strong>설명(사용)</strong> 열이 함께 제공됩니다.
        </p>
      </GuideSection>
    </>
  );
}

export function StorybookDesignTokensPage() {
  return (
    <DesignTokensPage
      resolveHref={guideHrefToStorybookDocsHref}
      linkTarget="_top"
    />
  );
}
