<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">Vue 3 · Vite</p>
        <h1>컴포넌트 데모</h1>
        <p class="lead">
          <code class="typo_code">@uxkm/vue</code> 컴포넌트를 카테고리별로 불러온 실행 화면입니다.
        </p>
      </header>

      <section class="section" aria-labelledby="component-categories-title">
        <h2 id="component-categories-title">카테고리</h2>
        <div class="card_grid">
          <DemoLink v-for="category in DEMO_CATEGORIES" :key="category.id" :to="category.path">
            <h3>{{ category.title }}</h3>
            <p>{{ category.description }}</p>
            <span class="count">{{ category.count }} →</span>
          </DemoLink>
        </div>
      </section>

      <p>
        <a class="link color_primary" href="/" @click.prevent="goHome">← 홈으로</a>
      </p>
    </div>
  </main>
</template>

<script setup>
import { DEMO_CATEGORIES } from '../demo/categories.js';
import DemoLink from '../demo/DemoLink.vue';
import { navigate } from '../router/index.js';

function goHome() {
  navigate('/');
}
</script>
