<!--
  Navbar 원본 구현.
  현재 항목과 열림 상태를 관리하고 키보드 탐색, 링크, 접근성 속성을 연결합니다.
-->
<script setup>
import { computed, ref, useAttrs } from 'vue';
import Button from '../../basic/Button/Button.vue';
import Icon from '../../basic/Icon/Icon.vue';
defineOptions({ name: 'UxkmNavbar', inheritAttrs: false });
const props = defineProps({
  brand: String,
  size: { type: String, default: 'md', validator: (value) => ['sm', 'md', 'lg'].includes(value) },
  borderless: Boolean,
  dark: Boolean,
  sticky: Boolean,
  responsive: Boolean,
  collapseId: String,
});
const attrs = useAttrs();
const open = ref(false);
const targetId = props.collapseId || `navbar-collapse-${Math.random().toString(36).slice(2, 9)}`;
const classes = computed(() =>
  [
    'navbar',
    props.size !== 'md' && `navbar_${props.size}`,
    props.borderless && 'navbar_borderless',
    props.dark && 'navbar_dark',
    props.sticky && 'navbar_sticky',
    open.value && 'is-open',
  ].filter(Boolean),
);
</script>

<template>
  <header
    v-bind="attrs"
    :class="classes"
    data-component="Navbar"
    :data-navbar="responsive || undefined"
  >
    <div class="navbar_container">
      <a href="#" class="navbar_brand" @click.prevent
        ><slot name="brand"><slot name="brand-icon" />{{ brand }}</slot></a
      >
      <Button
        v-if="responsive"
        variant="ghost"
        icon-only
        class="navbar_toggle"
        :aria-expanded="open"
        :aria-controls="targetId"
        :aria-label="open ? '메뉴 닫기' : '메뉴 열기'"
        @click="open = !open"
        ><template #icon-before
          ><Icon name="menu" size="sm" class="navbar_toggle-icon-open" /><Icon
            name="close"
            size="sm"
            class="navbar_toggle-icon-close" /></template
      ></Button>
      <div :id="targetId" class="navbar_collapse">
        <nav class="navbar_nav" aria-label="주요 메뉴">
          <slot name="items"
            ><ul v-if="$slots.default" class="navbar_list">
              <slot /></ul
          ></slot>
        </nav>
        <div v-if="$slots.search" class="navbar_search"><slot name="search" /></div>
        <div v-if="$slots.actions" class="navbar_actions"><slot name="actions" /></div>
      </div>
    </div>
  </header>
</template>
