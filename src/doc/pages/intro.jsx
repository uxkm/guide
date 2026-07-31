export const docMeta = {
  title: 'HTML Components | UXKM Guide',
  activeNav: 'intro',
  pageTitle: '소개',
};

import CategoryCard from '@/components/CategoryCard.jsx';
import Link from '@/components/Link.jsx';
import List from '@/components/List.jsx';
import ListItem from '@/components/ListItem.jsx';
import TypoText from '@/components/TypoText.jsx';
import ApiTable from '@/components/guide/ApiTable.jsx';
import GuideCodeBlock from '@/components/guide/GuideCodeBlock.jsx';
import GuideSection from '@/components/guide/GuideSection.jsx';
import PageIntro from '@/components/guide/PageIntro.jsx';
import RepositoryStructure from '@/doc/content/repository-structure.mdx';
import {
  conventionColumns,
  conventionRows,
  docPageCode,
  introCategories,
  quickstartCode,
  reactNextCards,
} from '@/doc/data/intro-data';

export default function IntroDoc() {
  return (
    <>
      <PageIntro title="UI Components" lead={(
              <>
              Next.js 16과 React 19로 구현한 UI 컴포넌트 가이드입니다. 마크업과 클래스 조합으로 버튼·폼·피드백·네비게이션 등 50여 개 컴포넌트를 확인할 수 있으며, 컴포넌트 자체는 HTML·CSS만으로도 다른 프로젝트에 적용할 수 있습니다.
              </>
            )} />

        <GuideSection
          headingId="overview-heading"
          title="개요"
          description="Next.js App Router에서 정적 사이트로 사전 렌더링하는 디자인 시스템 문서이자 재사용 가능한 UI 패턴 모음입니다. 각 컴포넌트 페이지에서 라이브 데모, 마크업 예시, 클래스·속성 표, 디자인 토큰을 함께 제공합니다."
        >
          <List className="list_bullet" style={{ width: '100%' }}>
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
              <Link href="/design-tokens" label="디자인 토큰" />
              문서에서 기본값과 사용 방법을 확인할 수 있습니다.
            </ListItem>
            <ListItem>
              <strong>접근성</strong>
              — <TypoText variant="code" tag="span" label="role" />
              · <TypoText variant="code" tag="span" label="aria-*" />
              속성과 키보드·포커스 패턴을 컴포넌트별로 안내합니다.
            </ListItem>
            <ListItem>
              <strong>Next.js 정적 사이트</strong>
              — <strong>Next.js 16 App Router + React 19</strong>로 개발하며,
              <TypoText variant="code" tag="span" label="output: 'export'" />
              설정으로 정적 사이트를 생성합니다. 문서는
              <TypoText variant="code" tag="span" label="src/doc/" />
              의 JSX 파일로 관리합니다.
            </ListItem>
          </List>
        </GuideSection>

        <GuideSection
          headingId="react-next-heading"
          title="기본 React 방식과 Next.js 방식의 차이"
          description="기본 React SPA는 브라우저에서 하나의 앱을 실행하고 모든 화면 전환을 처리합니다. 현재 가이드는 Next.js App Router가 문서별 정적 HTML과 메타데이터를 만들고, React가 필요한 데모 상호작용만 담당하도록 구성했습니다."
        >
          <div className="approach_compare-grid">
            {reactNextCards.map((approach) => (
              <article
                key={approach.key}
                className={`approach_compare-card approach_compare-card-${approach.key}`}
              >
                <header className="approach_compare-header">
                  <span className="approach_compare-badge">{approach.badge}</span>
                  <h3>{approach.title}</h3>
                  <p>{approach.summary}</p>
                </header>

                <dl className="approach_compare-facts">
                  {approach.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="approach_compare-section approach_compare-section-pros">
                  <h4>장점</h4>
                  <ul>
                    {approach.pros.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>

                <div className="approach_compare-section approach_compare-section-cons">
                  <h4>단점</h4>
                  <ul>
                    {approach.cons.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>

                <footer className="approach_compare-fit">
                  <strong>적합한 경우</strong>
                  <span>{approach.bestFor}</span>
                </footer>
              </article>
            ))}
          </div>
          <p>
            즉, 컴포넌트와 상태 관리는 동일한 React 방식으로 작성하고,
            페이지 생성·정적 export·배포 경로 같은 애플리케이션 구조는 Next.js가 담당합니다.
          </p>
        </GuideSection>

        <GuideSection
          headingId="quickstart-heading"
          title="빠른 시작"
          description="이 가이드 저장소를 클론한 뒤 의존성을 설치하고 Next.js 개발 서버를 실행합니다. 서버가 시작되면 http://localhost:3000에서 확인할 수 있습니다. 자세한 내용은 설치 및 사용을 참고하세요."
        >
          <p>
            <Link href="/getting-started" label="설치 및 사용" />
          </p>
          <GuideCodeBlock>{quickstartCode }</GuideCodeBlock>
        </GuideSection>

        <GuideSection
          headingId="categories-heading"
          title="컴포넌트 카테고리"
          description="왼쪽 사이드바에서 컴포넌트를 선택하거나, 아래 카테고리 카드로 바로 이동할 수 있습니다."
        >
          <div className="card_grid">
            {introCategories.map((category) => (
              <CategoryCard

              title={category.title}
              description={category.description}
              count={category.count}
              href={category.href}
             key={category.title} />
            ))}
          </div>
        </GuideSection>

        <GuideSection
          headingId="structure-heading"
          title="이 저장소 구조"
          description="App Router가 문서별 정적 경로·HTML·메타데이터를 생성합니다. SCSS·React 문서 소스는 src/에서 관리하며, 정적 export 결과는 out/에 생성됩니다."
        >
          <RepositoryStructure />
          <p className="mt_md">
            컴포넌트 마크업·SCSS는 다른 프로젝트에도 가져다 쓸 수 있습니다. React 데모는
            <TypoText variant="code" tag="span" label="src/scss/main.scss" />
            를 import해 동일한 디자인 시스템을 공유합니다.
          </p>
        </GuideSection>

        <GuideSection
          headingId="conventions-heading"
          title="네이밍 · 클래스 규칙"
          description="컴포넌트 스타일은 OOCSS 패턴을 따릅니다. 아래 규칙을 익혀 두면 문서와 소스를 일관되게 읽을 수 있습니다."
        >
          <ApiTable
            columns={conventionColumns}
            rows={conventionRows}
            codeColumn="pattern"
          />
        </GuideSection>

        <GuideSection
          headingId="markup-heading"
          title="문서 페이지 구성"
          description="컴포넌트 문서는 src/doc/components/의 JSX로 작성합니다. App Router의 선택적 catch-all 페이지가 generateStaticParams로 경로를 만들고 URL에 맞는 문서를 렌더링합니다. 각 문서는 docMeta로 제목과 네비게이션 정보를 관리합니다."
        >
          <GuideCodeBlock>{docPageCode }</GuideCodeBlock>
        </GuideSection>
    </>
  );
}
