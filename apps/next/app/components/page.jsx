import Link from 'next/link';
import { DEMO_CATEGORIES } from '../../src/demo/categories.js';

export default function ComponentsPage() {
  return (
    <main className="guide_content">
      <div className="container container_lg">
        <header className="page_intro">
          <p className="color_accent size_sm">React · Next.js</p>
          <h1>컴포넌트 데모</h1>
          <p className="lead">
            <code className="typo_code">@uxkm/react</code> export로 불러온 실행 화면입니다.
          </p>
        </header>

        <section className="section" aria-labelledby="component-categories-title">
          <h2 id="component-categories-title">카테고리</h2>
          <div className="card_grid">
            {DEMO_CATEGORIES.map((category) => (
              <Link key={category.id} href={category.path} className="category_card">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className="count">{category.count} →</span>
              </Link>
            ))}
          </div>
        </section>

        <p>
          <Link href="/" className="link color_primary">
            ← 홈으로
          </Link>
        </p>
      </div>
    </main>
  );
}
