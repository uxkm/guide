import React from 'react';
import Button from '@uxkm/ui-react/components/Button.jsx';
import {
  newComponentColumns,
  requirementColumns,
  requirementRows,
  scriptColumns,
} from '@doc-data/getting-started-data';
import { guideHrefToStorybookDocsHref } from '../../utils/storybook-links';
import { ApiTable } from '../components/guide/ApiTable';
import {
  ApiSection,
  DemoSection,
  GuideCodeBlock,
  GuideSection,
  PageIntro,
} from '../components/guide/GuideBlocks';
import { GuideLink, TypoCode } from '../components/guide/GuidePrimitives';
import {
  reactInstallCode,
  reactMarkupCode,
  reactNewComponentRows,
  reactScriptRows,
  reactStylesCode,
  reactThemeCode,
} from './getting-started-react-data';

export function GettingStartedPage({
  resolveHref = (href) => href,
  linkTarget,
}) {
  return (
    <>
      <PageIntro
        title="설치 및 사용"
        lead={
          <>
            이 가이드 저장소의 설치·실행 방법을 안내합니다. React + Vite로 Storybook을 개발·빌드하며,
            컴포넌트는 <TypoCode tag="span">packages/ui-react</TypoCode>
            에서 관리합니다.
          </>
        }
      />

      <ApiSection
        headingId="requirements-heading"
        title="사전 요구사항"
        description="아래 환경이 설치되어 있어야 합니다."
      >
        <ApiTable columns={requirementColumns} rows={requirementRows} codeColumn="" />
      </ApiSection>

      <GuideSection
        headingId="install-heading"
        title="설치"
        description="루트에서 의존성을 설치한 뒤 Storybook 개발 서버를 실행합니다."
      >
        <GuideCodeBlock>{reactInstallCode}</GuideCodeBlock>
      </GuideSection>

      <ApiSection
        headingId="scripts-heading"
        title="pnpm 스크립트"
        description="루트 package.json의 스크립트입니다."
      >
        <ApiTable columns={scriptColumns} rows={reactScriptRows} codeColumn="command" />
      </ApiSection>

      <GuideSection
        headingId="dev-heading"
        title="개발 서버"
        description="pnpm storybook 실행 후 브라우저에서 접속하면 컴포넌트 가이드 소개 페이지가 표시됩니다."
      >
        <GuideCodeBlock>pnpm storybook</GuideCodeBlock>
      </GuideSection>

      <GuideSection
        headingId="build-heading"
        title="프로덕션 빌드"
        description="pnpm build-storybook 결과물은 apps/storybook/storybook-static/ 폴더에 생성됩니다. 정적 호스팅에 해당 폴더 내용을 배포하면 됩니다."
      >
        <GuideCodeBlock>pnpm build-storybook</GuideCodeBlock>
      </GuideSection>

      <GuideSection headingId="styles-heading" title="스타일 적용">
        <p>
          <strong>Storybook</strong>은 preview에서{' '}
          <TypoCode tag="span">packages/ui/src/scss/main.scss</TypoCode>
          를 import해 전체 스타일을 번들합니다.
        </p>
        <p>
          <strong>다른 React 프로젝트</strong>에서 SCSS 소스를 직접 쓰려면 Vite·Webpack 등 빌드
          도구에 <TypoCode tag="span">packages/ui</TypoCode>
          경로 alias를 설정한 뒤 main.scss를 포함하거나, 필요한 컴포넌트 스타일만 선택 import합니다.
        </p>
        <GuideCodeBlock>{reactStylesCode}</GuideCodeBlock>
      </GuideSection>

      <DemoSection
        headingId="component-heading"
        title="컴포넌트 사용"
        description="각 컴포넌트 문서의 예시는 React 컴포넌트 또는 HTML 마크업으로 제공됩니다. 클래스 이름과 ARIA 속성을 그대로 쓰면 스타일이 적용됩니다. 모달·드로어·아코디언 등 인터랙션이 필요한 컴포넌트는 React 구현을 참고하거나, data-* 속성과 JS를 함께 포함합니다."
        stack
      >
        <Button variant="filled" color="primary" label="저장" />
        <div className="alert color_info" role="alert">
          <div className="alert_body">
            <p className="alert_desc">변경 사항이 저장되었습니다.</p>
          </div>
        </div>
      </DemoSection>

      <GuideSection
        headingId="markup-html-heading"
        title="HTML 마크업 예시"
        description="React 없이 HTML·CSS만으로도 동일한 UI를 구성할 수 있습니다. 아래 마크업을 복사해 사용하세요."
      >
        <GuideCodeBlock>{reactMarkupCode}</GuideCodeBlock>
      </GuideSection>

      <GuideSection headingId="theme-heading" title="테마">
        <p>
          라이트/다크 테마는 <TypoCode tag="span">data-theme</TypoCode> 속성으로 전환됩니다.
          Storybook은 <TypoCode tag="span">localStorage</TypoCode>의{' '}
          <TypoCode tag="span">storybook-theme</TypoCode> 값을 읽어 초기 테마를 적용합니다.
        </p>
        <GuideCodeBlock>{reactThemeCode}</GuideCodeBlock>
        <p>
          색상·간격 등 디자인 값은{' '}
          <TypoCode tag="span">packages/ui/src/scss/_tokens.scss</TypoCode>
          와 <TypoCode tag="span">_themes.scss</TypoCode>
          에서 CSS 변수로 정의됩니다. 전역 토큰의 기본값·사용 방법은{' '}
          <GuideLink
            href={resolveHref('/design-tokens')}
            target={linkTarget}
            label="디자인 토큰"
          />{' '}
          문서를 참고하세요.
        </p>
      </GuideSection>

      <ApiSection
        headingId="new-component-heading"
        title="새 컴포넌트 추가"
        description="컴포넌트를 새로 등록할 때 추가·수정하는 파일입니다."
      >
        <ApiTable
          columns={newComponentColumns}
          rows={reactNewComponentRows}
          codeColumn="path"
        />
      </ApiSection>
    </>
  );
}

export function StorybookGettingStartedPage() {
  return (
    <GettingStartedPage
      resolveHref={guideHrefToStorybookDocsHref}
      linkTarget="_top"
    />
  );
}
