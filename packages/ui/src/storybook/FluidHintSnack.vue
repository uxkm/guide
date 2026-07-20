<script setup>
import { Teleport } from 'vue';
import Alert from '@/components/Alert.vue';
import { fluidHintOpen, hideFluidHint } from '@/storybook/fluid-hint-state.js';
</script>

<template>
  <Teleport to="body">
    <Transition name="sb-snackbar">
      <div
        v-if="fluidHintOpen"
        class="sb-snackbar-hint"
        role="status"
        aria-live="polite"
      >
        <Alert
          color="warning"
          title="fluid는 size가 선택된 경우에만 적용됩니다"
          description="sm · md · lg · xl 중 하나를 선택한 뒤 fluid를 활성화하세요."
          closable
          @close="hideFluidHint"
        />
      </div>
    </Transition>
  </Teleport>
</template>
