<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">
          <a class="link color_accent" href="/components" @click.prevent="goComponents">컴포넌트</a>
          · Layout
        </p>
        <h1>Layout</h1>
        <p class="lead">레이아웃 컴포넌트를 Vue로 렌더합니다.</p>
      </header>

      <DemoSection id="container" title="Container" path="@uxkm/vue/container">
        <Container size="md">
          <p>Container 데모 콘텐츠</p>
        </Container>
      </DemoSection>

      <DemoSection id="divider" title="Divider" path="@uxkm/vue/divider">
        <Divider />
      </DemoSection>

      <DemoSection id="flex" title="Flex" path="@uxkm/vue/flex">
        <Flex gap="md">
          <span>Item A</span>
          <span>Item B</span>
          <span>Item C</span>
        </Flex>
      </DemoSection>

      <DemoSection id="grid" title="Grid" path="@uxkm/vue/grid">
        <Grid :cols="3" gap="md">
          <GridCol>Col 1</GridCol>
          <GridCol>Col 2</GridCol>
          <GridCol>Col 3</GridCol>
        </Grid>
      </DemoSection>

      <DemoSection id="space" title="Space" path="@uxkm/vue/space">
        <Space gap="md">
          <span>Space A</span>
          <span>Space B</span>
          <span>Space C</span>
        </Space>
      </DemoSection>

      <p>
        <a class="link color_primary" href="/components" @click.prevent="goComponents"
          >← 컴포넌트 목록</a
        >
      </p>
    </div>
  </main>
</template>

<script setup>
import Container from '@uxkm/vue/container';
import Divider from '@uxkm/vue/divider';
import Flex from '@uxkm/vue/flex';
import Grid, { GridCol } from '@uxkm/vue/grid';
import Space from '@uxkm/vue/space';
import DemoSection from '../../demo/DemoSection.vue';
import { navigate } from '../../router/index.js';

function goComponents() {
  navigate('/components');
}
</script>
