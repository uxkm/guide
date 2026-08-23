export default function App() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro"><p className="color_accent size_sm">React · Vite</p><h1>UXKM React</h1><p className="lead">React 컴포넌트 원본과 UXKM의 공통 디자인 시스템을 확인합니다.</p></header>
        <section className="section" aria-labelledby="react-start-title">
          <h2 id="react-start-title">개발 서버가 정상적으로 실행되었습니다</h2>
          <div className="card_grid">
            <article className="category_card"><h3>실행 명령</h3><p><code className="typo_code">pnpm dev:react</code></p><span className="count">Port 6104</span></article>
            <article className="category_card"><h3>구현 기준</h3><p>React · Vite</p><span className="count">@uxkm/react</span></article>
            <a className="category_card" href="http://localhost:6006"><h3>Storybook</h3><p>전체 컴포넌트 문서와 예제를 확인합니다.</p><span className="count">문서 열기 →</span></a>
          </div>
        </section>
      </div>
    </main>
  );
}
