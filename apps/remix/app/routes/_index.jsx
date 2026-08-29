export default function IndexRoute() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">React · Remix</p>
          <h1>UXKM Remix</h1>
          <p className="lead">React 컴포넌트를 Remix route module에서 사용하는 통합 예제를 확인합니다.</p>
        </header>
        <section className="section" aria-labelledby="remix-start-title">
          <h2 id="remix-start-title">개발 서버가 정상적으로 실행되었습니다</h2>
          <div className="card_grid">
            <article className="category_card">
              <h3>실행 명령</h3>
              <p>
                <code className="typo_code">pnpm dev:remix</code>
              </p>
              <span className="count">Port 6111</span>
            </article>
            <article className="category_card">
              <h3>구현 기준</h3>
              <p>React · Remix</p>
              <span className="count">@uxkm/remix</span>
            </article>
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
