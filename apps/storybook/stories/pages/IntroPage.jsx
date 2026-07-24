import React from 'react';
import {
  conventionColumns,
  conventionRows,
  introCategories,
} from '@doc-data/intro-data';
import { guideHrefToStorybookDocsHref } from '../../utils/storybook-links';
import { ApiTable } from '../components/guide/ApiTable';
import {
  ApiSection,
  GuideCodeBlock,
  GuideSection,
  PageIntro,
} from '../components/guide/GuideBlocks';
import { GuideLink, TypoCode } from '../components/guide/GuidePrimitives';
import {
  reactDocPageCode,
  reactQuickstartCode,
  reactStructureCode,
} from './intro-react-data';

function CategoryCard({ title, description, count, href, target }) {
  return (
    <a className="category_card" href={href} target={target}>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {count ? <span className="count">{count}</span> : null}
    </a>
  );
}

export function IntroPage({
  categories = introCategories,
  categoryLinkTarget,
  resolveHref = (href) => href,
  linkTarget,
}) {
  const resolvedCategories = categories.map((category) => ({
    ...category,
    href: resolveHref(category.href),
    target: category.target ?? categoryLinkTarget,
  }));

  return (
    <>
      <PageIntro
        title="UI Components"
        lead={
          <>
            React와 SCSS로 구성된 UI 컴포넌트 가이드입니다. 마크업과 클래스 조합으로
            버튼·폼·피드백·네비게이션 등 50여 개 컴포넌트를 확인할 수 있으며, 컴포넌트
            자체는 HTML·CSS만으로도 다른 프로젝트에 적용할 수 있습니다.
          </>
        }
      />

      <ApiSection
        headingId="overview-heading"
        title="개요"
        description="이 사이트는 디자인 시스템 문서이자 재사용 가능한 UI 패턴 모음입니다. 각 컴포넌트 페이지에서 라이브 데모, 마크업 예시, 클래스·속성 표, 디자인 토큰을 함께 제공합니다."
      >
        <ul className="list list_bullet" style={{ width: '100%' }}>
          <li className="list_item">
            <strong>OOCSS 구조</strong>
            {' — 블록('}
            <TypoCode tag="span">.btn</TypoCode>
            {') + 파트('}
            <TypoCode tag="span">.btn_label</TypoCode>
            {') + 스킨·크기·상태 클래스를 조합해 사용합니다.'}
          </li>
          <li className="list_item">
            <strong>디자인 토큰</strong>
            {' — 색상·간격·타이포 등은 '}
            <TypoCode tag="span">_tokens.scss</TypoCode>
            {' 의 CSS 변수로 관리하며, 라이트/다크 테마를 지원합니다. '}
            <GuideLink
              href={resolveHref('/design-tokens')}
              target={linkTarget}
              label="디자인 토큰"
            />{' '}
            문서에서 기본값과 사용 방법을 확인할 수 있습니다.
          </li>
          <li className="list_item">
            <strong>접근성</strong>
            {' — '}
            <TypoCode tag="span">role</TypoCode>
            {' · '}
            <TypoCode tag="span">aria-*</TypoCode>
            {' 속성과 키보드·포커스 패턴을 컴포넌트별로 안내합니다.'}
          </li>
          <li className="list_item">
            <strong>이 저장소의 빌드</strong>
            {' — '}
            <strong>React + Vite</strong>
            {'로 Storybook을 개발·빌드합니다. 컴포넌트는 '}
            <TypoCode tag="span">packages/ui-react</TypoCode>
            {' , 스타일은 '}
            <TypoCode tag="span">packages/ui</TypoCode>
            {' 에서 공유합니다.'}
          </li>
        </ul>
      </ApiSection>

      <GuideSection
        headingId="quickstart-heading"
        title="빠른 시작"
        description="이 가이드 저장소를 클론한 뒤 의존성을 설치하고 Storybook 개발 서버를 실행합니다. 자세한 내용은 설치 및 사용을 참고하세요."
      >
        <p>
          <GuideLink
            href={resolveHref('/getting-started')}
            target={linkTarget}
            label="설치 및 사용"
          />
        </p>
        <GuideCodeBlock>{reactQuickstartCode}</GuideCodeBlock>
      </GuideSection>

      <GuideSection
        headingId="categories-heading"
        title="컴포넌트 카테고리"
        description="왼쪽 사이드바에서 컴포넌트를 선택하거나, 아래 카테고리 카드로 바로 이동할 수 있습니다."
      >
        <div className="card_grid">
          {resolvedCategories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </GuideSection>

      <GuideSection
        headingId="structure-heading"
        title="이 저장소 구조"
        description="아래는 React Storybook 가이드의 디렉터리 구성입니다. SCSS는 packages/ui에서, React 컴포넌트는 packages/ui-react에서 관리합니다."
      >
        <GuideCodeBlock>{reactStructureCode}</GuideCodeBlock>
        <p>
          컴포넌트 마크업·SCSS는 다른 프로젝트에도 가져다 쓸 수 있습니다. React 데모는{' '}
          <TypoCode tag="span">packages/ui/src/scss/main.scss</TypoCode>
          를 import해 동일한 디자인 시스템을 공유합니다.
        </p>
      </GuideSection>

      <ApiSection
        headingId="conventions-heading"
        title="네이밍 · 클래스 규칙"
        description="컴포넌트 스타일은 OOCSS 패턴을 따릅니다. 아래 규칙을 익혀 두면 문서와 소스를 일관되게 읽을 수 있습니다."
      >
        <ApiTable columns={conventionColumns} rows={conventionRows} codeColumn="pattern" />
      </ApiSection>

      <GuideSection
        headingId="markup-heading"
        title="스토리 페이지 구성"
        description="컴포넌트 문서는 packages/ui-react의 CSF(*.stories.jsx)로 작성하며, title·id로 사이드바 메뉴와 Docs 경로를 지정합니다."
      >
        <GuideCodeBlock>{reactDocPageCode}</GuideCodeBlock>
      </GuideSection>
    </>
  );
}

export function StorybookIntroPage() {
  const storybookCategories = introCategories.map((category) => ({
    ...category,
    href: guideHrefToStorybookDocsHref(category.href),
    target: '_top',
  }));

  return (
    <IntroPage
      categories={storybookCategories}
      resolveHref={guideHrefToStorybookDocsHref}
      linkTarget="_top"
    />
  );
}
