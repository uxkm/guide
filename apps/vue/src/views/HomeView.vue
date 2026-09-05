<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">Vue 3 · Vite</p>
        <h1>UXKM Vue</h1>
        <p class="lead">Vue 컴포넌트 원본과 UXKM의 공통 디자인 시스템을 확인합니다.</p>
      </header>
      <section class="section" aria-labelledby="vue-start-title">
        <h2 id="vue-start-title">개발 서버가 정상적으로 실행되었습니다</h2>
        <div class="card_grid">
          <article class="category_card">
            <h3>실행 명령</h3>
            <p><code class="typo_code">pnpm dev:vue</code></p>
            <span class="count">Port 6103</span>
          </article>
          <article class="category_card">
            <h3>구현 기준</h3>
            <p>Vue 3 · Vite</p>
            <span class="count">@uxkm/vue</span>
          </article>
          <DemoLink to="/components">
            <h3>컴포넌트 데모</h3>
            <p>Vue 컴포넌트를 카테고리별로 확인합니다.</p>
            <span class="count">데모 열기 →</span>
          </DemoLink>
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

<script setup>
import DemoLink from '../demo/DemoLink.vue';
</script>
