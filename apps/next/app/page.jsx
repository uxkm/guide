import Link from 'next/link';

export default function Page() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">React · Next.js</p>
          <h1>UXKM Next.js</h1>
          <p className="lead">React 컴포넌트를 Next.js App Router에서 사용하는 통합 예제를 확인합니다.</p>
        </header>
        <section className="section" aria-labelledby="next-start-title">
          <h2 id="next-start-title">개발 서버가 정상적으로 실행되었습니다</h2>
          <div className="card_grid">
            <article className="category_card">
              <h3>실행 명령</h3>
              <p>
                <code className="typo_code">pnpm dev:next</code>
              </p>
              <span className="count">Port 6106</span>
            </article>
            <article className="category_card">
              <h3>구현 기준</h3>
              <p>React · App Router</p>
              <span className="count">@uxkm/next</span>
            </article>
            <Link href="/components" className="category_card">
              <h3>컴포넌트 데모</h3>
              <p>패키지 export로 불러온 컴포넌트를 카테고리별로 확인합니다.</p>
              <span className="count">데모 열기 →</span>
            </Link>
            <a className="category_card" href="http://localhost:6006">
              <h3>Storybook</h3>
              <p>전체 컴포넌트 문서와 예제를 확인합니다.</p>
              <span className="count">문서 열기 →</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
