<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { provideDemoCode } from '@/composables/useDemoCode';
import { formatDemoHtml } from '@/utils/format-demo-html';
import { formatDocDescription } from '@/utils/format-doc-description';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: String,
  headingId: {
    type: String,
    required: true,
  },
  stack: Boolean,
  code: String,
  codeLang: {
    type: String,
    default: 'vue',
    validator: (value) => ['vue', 'html'].includes(value),
  },
  showCode: {
    type: Boolean,
    default: true,
  },
});

const previewRef = ref(null);
const expanded = ref(false);
const capturedCode = ref('');
const demoCode = provideDemoCode();

const previewClass = computed(() => [
  'demo_section-preview',
  { 'demo_section-preview-stack': props.stack },
]);

const displayCode = computed(() => capturedCode.value);
const formattedDescription = computed(() => formatDocDescription(props.description));

async function captureCode() {
  if (props.code) {
    capturedCode.value = props.code;
    return;
  }

  await nextTick();

  if (!previewRef.value) return;

  if (props.codeLang === 'vue') {
    const vueCode = demoCode.buildCode(previewRef.value);
    if (vueCode) {
      capturedCode.value = vueCode;
      return;
    }
  }

  capturedCode.value = formatDemoHtml(previewRef.value.innerHTML);
}

function toggleCode() {
  expanded.value = !expanded.value;
}

onMounted(() => {
  captureCode();
});

watch(
  () => props.code,
  () => {
    captureCode();
  },
);

watch(
  () => demoCode.revision.value,
  () => {
    captureCode();
  },
  { flush: 'post' },
);
</script>

<template>
  <section
    class="section demo_section"
    :class="{ 'is-code-open': expanded }"
    :aria-labelledby="headingId"
  >
    <div class="demo_section-header">
      <h2 :id="headingId">{{ title }}</h2>
      <p v-if="description" v-html="formattedDescription" />
    </div>
    <div
      ref="previewRef"
      :class="previewClass"
      :data-demo-section="demoCode.sectionId"
    >
      <slot />
    </div>
    <div v-if="showCode && displayCode" class="demo_section-code">
      <button
        type="button"
        class="demo_code-toggle"
        data-ripple
        :aria-expanded="String(expanded)"
        @click="toggleCode"
      >
        <span class="demo_code-toggle-label">{{ expanded ? '코드 숨기기' : '코드 보기' }}</span>
        <svg
          class="demo_code-toggle-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div class="demo_section-code-panel" :hidden="!expanded">
        <pre><code>{{ displayCode }}</code></pre>
      </div>
    </div>
  </section>
</template>
