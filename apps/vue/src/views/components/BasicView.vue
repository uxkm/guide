<template>
  <main class="guide_content">
    <div class="container container_lg">
      <header class="page_intro">
        <p class="color_accent size_sm">
          <a class="link color_accent" href="/components" @click.prevent="goComponents">컴포넌트</a>
          · Basic
        </p>
        <h1>Basic</h1>
        <p class="lead">기본 요소 컴포넌트를 Vue로 렌더합니다.</p>
      </header>

      <DemoSection id="button" title="Button" path="@uxkm/vue/button">
        <Button label="Button" />
      </DemoSection>

      <DemoSection id="icon" title="Icon" path="@uxkm/vue/icon">
        <Icon name="search" />
      </DemoSection>

      <DemoSection id="link" title="Link" path="@uxkm/vue/link">
        <Link href="#" label="링크 데모" />
      </DemoSection>

      <DemoSection id="typography" title="Typography" path="@uxkm/vue/typography">
        <TypoTitle :level="3" label="제목 데모" />
        <TypoText label="본문 텍스트 데모입니다." />
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
import Button from '@uxkm/vue/button';
import Icon from '@uxkm/vue/icon';
import Link from '@uxkm/vue/link';
import { TypoText, TypoTitle } from '@uxkm/vue/typography';
import DemoSection from '../../demo/DemoSection.vue';
import { navigate } from '../../router/index.js';

function goComponents() {
  navigate('/components');
}
</script>
