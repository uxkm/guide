<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">Vue · Nuxt</p>
        <h1>컴포넌트 데모</h1>
        <p class="lead">
          <code class="typo_code">@uxkm/vue</code> 컴포넌트를 카테고리별로 불러온 실행 화면입니다.
        </p>
      </header>

      <section class="section" aria-labelledby="component-categories-title">
        <h2 id="component-categories-title">카테고리</h2>
        <div class="card_grid">
          <NuxtLink
            v-for="category in DEMO_CATEGORIES"
            :key="category.id"
            class="category_card"
            :to="category.path"
          >
            <h3>{{ category.title }}</h3>
            <p>{{ category.description }}</p>
            <span class="count">{{ category.count }} →</span>
          </NuxtLink>
        </div>
      </section>

      <p>
        <NuxtLink class="link color_primary" to="/">← 홈으로</NuxtLink>
      </p>
    </div>
  </main>
</template>

<script setup>
import { DEMO_CATEGORIES } from '../../utils/demo-categories.js';
</script>
