<script setup>
import Button from '@/components/Button.vue';
import { ref } from 'vue';
import { useComponentDemoCode } from '@/composables/useDemoCode';
import { createComponentFormatter } from '@/utils/format-component-code';

const rootRef = ref(null);
const formatCode = createComponentFormatter('CalendarFooter', { selfClosing: false });

useComponentDemoCode(formatCode, {}, {}, rootRef, {});
</script>

<template>
  <div ref="rootRef" class="calendar_footer">
    <Button variant="text" color="primary" size="sm" label="오늘" />
    <div class="calendar_footer-actions">
      <slot>
        <Button variant="ghost" size="sm" label="초기화" />
        <Button variant="filled" color="primary" size="sm" label="확인" />
      </slot>
    </div>
  </div>
</template>
