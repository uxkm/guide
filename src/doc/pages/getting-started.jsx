export const docMeta = {
  title: '설치 및 사용 | UXKM Guide',
  activeNav: 'getting-started',
  pageTitle: '설치 및 사용',
};

import Alert from '@/components/Alert.jsx';
import Button from '@/components/Button.jsx';
import Link from '@/components/Link.jsx';
import TypoText from '@/components/TypoText.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import DemoSection from '@/components/guide/DemoSection.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import GuideSection from '@/components/guide/GuideSection.jsx';
import PageIntro from '@/components/guide/PageIntro.jsx';
import {
  basePathCode,
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

export default function GettingStartedDoc() {
  return (
    <>
      <PageIntro title="설치 및 사용" lead={(
              <>
              이 가이드 저장소의 설치·실행·배포 방법을 안내합니다. Next.js 16 App Router와 React 19로 개발하며, 문서는
                    <TypoText variant="code" tag="span" label="src/doc/" />
                    의 JSX 파일로 관리하고 정적 사이트로 내보냅니다.
              </>
            )} />

        <GuideSection headingId="requirements-heading" title="사전 요구사항" description="아래 환경이 설치되어 있어야 합니다.">
          <ApiTable
            columns={requirementColumns}
            rows={requirementRows}
            codeColumn=""
          />
        </GuideSection>

        <GuideSection
          headingId="install-heading"
          title="설치"
          description="저장소를 클론하고 프로젝트 루트에서 pnpm으로 의존성을 설치합니다."
        >
          <GuideCodeBlock>{installCode }</GuideCodeBlock>
        </GuideSection>

        <GuideSection
          headingId="scripts-heading"
          title="pnpm 스크립트"
          description="루트 package.json의 스크립트입니다."
        >
          <ApiTable
            columns={scriptColumns}
            rows={scriptRows}
            codeColumn="command"
          />
        </GuideSection>

        <GuideSection
          headingId="dev-heading"
          title="개발 서버"
          description="pnpm dev를 실행한 뒤 http://localhost:3000에 접속합니다. 파일을 수정하면 Next.js 개발 서버가 변경 내용을 자동으로 반영합니다."
        >
          <GuideCodeBlock>pnpm dev</GuideCodeBlock>
        </GuideSection>

        <GuideSection
          headingId="build-heading"
          title="정적 빌드와 미리보기"
          description="next.config.mjs의 output: 'export' 설정에 따라 pnpm build가 서버 런타임이 필요 없는 정적 사이트를 out/에 생성합니다. pnpm preview로 배포 전에 결과물을 확인할 수 있습니다."
        >
          <GuideCodeBlock>{`pnpm build
pnpm preview`}</GuideCodeBlock>
        </GuideSection>

        <GuideSection
          headingId="base-path-heading"
          title="하위 경로 빌드"
          description="사이트를 도메인 루트가 아닌 /react 같은 하위 경로에 배포할 때는 NEXT_PUBLIC_BASE_PATH를 지정합니다. 이 값은 Next.js basePath와 내부 링크에 적용됩니다."
        >
          <GuideCodeBlock>{basePathCode }</GuideCodeBlock>
        </GuideSection>

        <GuideSection
          headingId="deploy-heading"
          title="main 브랜치 배포"
          description="next 브랜치에서 pnpm deploy:main을 실행하면 /react 경로로 빌드한 뒤 main 브랜치의 react/ 폴더를 갱신하고 원격 저장소에 커밋·푸시합니다. 브랜치 전환과 원격 푸시가 포함되므로 배포 권한과 작업 상태를 먼저 확인하세요."
        >
          <GuideCodeBlock>pnpm deploy:main</GuideCodeBlock>
        </GuideSection>

        <GuideSection headingId="styles-heading" title="스타일 적용">
          <p>
            <strong>이 가이드</strong>는
            <TypoText variant="code" tag="span" label="app/layout.jsx" />
            에서 <TypoText variant="code" tag="span" label="src/scss/main.scss" />를 불러오므로 Next.js 빌드에 전역 스타일이 포함됩니다.
          </p>
          <p>
            <strong>다른 프로젝트</strong>에서 SCSS 소스를 직접 쓰려면 자체 빌드 도구의 Sass 설정에
            <TypoText variant="code" tag="span" label="src/scss" />
            를 load path로 추가한 뒤
            <TypoText variant="code" tag="span" label="src/scss/main.scss" />
            를 포함하거나 필요한 컴포넌트만 선택해서 불러옵니다.
          </p>
          <GuideCodeBlock>{stylesCode }</GuideCodeBlock>
        </GuideSection>

        <DemoSection
          headingId="component-heading"
          title="컴포넌트 마크업 사용"
          description="각 컴포넌트 문서의 마크업 섹션 HTML은 어떤 프로젝트에도 복사해 사용할 수 있습니다. 클래스 이름과 ARIA 속성을 그대로 쓰면 스타일이 적용됩니다. 모달·드로어·아코디언 등 인터랙션이 필요한 컴포넌트는 React 컴포넌트 구현을 참고하거나, data-* 속성과 JS를 함께 포함합니다."
          stack
        >
          <Button variant="filled" color="primary" label="저장" />
          <Alert color="info" description="변경 사항이 저장되었습니다." />
        </DemoSection>

        <GuideSection
          headingId="markup-html-heading"
          title="HTML 마크업 예시"
          description="React 없이 HTML·CSS만으로도 동일한 UI를 구성할 수 있습니다. 아래 마크업을 복사해 사용하세요."
        >
          <GuideCodeBlock>{markupCode }</GuideCodeBlock>
        </GuideSection>

        <GuideSection headingId="theme-heading" title="테마">
          <p>
            라이트/다크 테마는 <TypoText variant="code" tag="span" label="data-theme" /> 속성으로 전환됩니다.
            <TypoText variant="code" tag="span" label="useTheme" />
            hook(<TypoText variant="code" tag="span" label="src/hooks/useTheme.js" />)이 헤더의 토글 버튼과
            <TypoText variant="code" tag="span" label="localStorage" />
            를 관리합니다.
          </p>
          <GuideCodeBlock>{themeCode }</GuideCodeBlock>
          <p>
            색상·간격 등 디자인 값은
            <TypoText variant="code" tag="span" label="src/scss/_tokens.scss" />
            와 <TypoText variant="code" tag="span" label="_themes.scss" />
            에서 CSS 변수로 정의됩니다. 전역 토큰의 기본값·사용 방법은
            <Link href="/design-tokens" label="디자인 토큰" />
            문서를 참고하세요.
          </p>
        </GuideSection>

        <GuideSection
          headingId="new-component-heading"
          title="새 컴포넌트 추가"
          description="컴포넌트와 문서를 새로 등록할 때 추가·수정하는 파일입니다. 문서 파일명은 URL slug와 동일하게 작성합니다."
        >
          <ApiTable
            columns={newComponentColumns}
            rows={newComponentRows}
            codeColumn="path"
          />
          <p>
            <TypoText variant="code" tag="span" label="app/[[...slug]]/page.jsx" />
            는 <TypoText variant="code" tag="span" label="src/data/doc-registry.js" />
            의 문서 목록으로 정적 경로를 생성하므로 새 컴포넌트를 추가할 때 라우트 페이지를 직접 수정하지 않습니다.
          </p>
        </GuideSection>
    </>
  );
}
