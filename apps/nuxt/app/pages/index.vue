<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">Vue · Nuxt</p>
        <h1>UXKM Nuxt</h1>
        <p class="lead">Vue 컴포넌트를 Nuxt 애플리케이션에서 사용하는 통합 예제를 확인합니다.</p>
      </header>
      <section class="section" aria-labelledby="nuxt-start-title">
        <h2 id="nuxt-start-title">개발 서버가 정상적으로 실행되었습니다</h2>
        <div class="card_grid">
          <article class="category_card">
            <h3>실행 명령</h3>
            <p><code class="typo_code">pnpm dev:nuxt</code></p>
            <span class="count">Port 6105</span>
          </article>
          <article class="category_card">
            <h3>구현 기준</h3>
            <p>Vue · Nuxt</p>
            <span class="count">@uxkm/nuxt</span>
          </article>
          <NuxtLink class="category_card" to="/components">
            <h3>컴포넌트 데모</h3>
            <p>Vue 컴포넌트를 카테고리별로 확인합니다.</p>
            <span class="count">데모 열기 →</span>
          </NuxtLink>
          <a class="category_card" href="http://localhost:6006">
            <h3>Storybook</h3>
            <p>전체 컴포넌트 문서와 예제를 확인합니다.</p>
            <span class="count">문서 열기 →</span>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>
