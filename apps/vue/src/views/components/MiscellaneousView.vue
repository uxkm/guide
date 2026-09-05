<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">
          <a class="link color_accent" href="/components" @click.prevent="goComponents">컴포넌트</a>
          · Miscellaneous
        </p>
        <h1>Miscellaneous</h1>
        <p class="lead">기타 컴포넌트를 Vue로 렌더합니다.</p>
      </header>

      <DemoSection id="accordion" title="Accordion" path="@uxkm/vue/accordion">
        <Accordion>
          <AccordionItem label="첫 번째 항목" content="첫 번째 본문입니다." open />
          <AccordionItem label="두 번째 항목" content="두 번째 본문입니다." />
        </Accordion>
      </DemoSection>

      <DemoSection id="collapse" title="Collapse" path="@uxkm/vue/collapse">
        <Collapse>
          <CollapsePanel label="Collapse 패널" content="접히는 본문 데모입니다." open />
        </Collapse>
      </DemoSection>

      <DemoSection id="carousel" title="Carousel" path="@uxkm/vue/carousel">
        <Carousel>
          <CarouselSlide>
            <div class="demo_slide">슬라이드 1</div>
          </CarouselSlide>
          <CarouselSlide>
            <div class="demo_slide">슬라이드 2</div>
          </CarouselSlide>
          <CarouselSlide>
            <div class="demo_slide">슬라이드 3</div>
          </CarouselSlide>
        </Carousel>
      </DemoSection>

      <DemoSection id="affix" title="Affix" path="@uxkm/vue/affix">
        <Affix skin="bar">
          <p>Affix 데모 (스크롤 시 고정)</p>
        </Affix>
      </DemoSection>

      <DemoSection id="back-top" title="BackTop" path="@uxkm/vue/back-top">
        <BackTop :visibility-height="0" />
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
import Accordion, { AccordionItem } from '@uxkm/vue/accordion';
import Affix from '@uxkm/vue/affix';
import BackTop from '@uxkm/vue/back-top';
import Carousel, { CarouselSlide } from '@uxkm/vue/carousel';
import Collapse, { CollapsePanel } from '@uxkm/vue/collapse';
import DemoSection from '../../demo/DemoSection.vue';
import { navigate } from '../../router/index.js';

function goComponents() {
  navigate('/components');
}
</script>

<style scoped>
.demo_slide {
  display: grid;
  place-items: center;
  min-height: 10rem;
  background: color-mix(in srgb, var(--color-surface, #fff) 88%, var(--color-primary, #2563eb));
  border-radius: 0.5rem;
}
</style>
