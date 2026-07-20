<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { provideDemoCode } from '@uxkm/ui/composables/useDemoCode';
import { formatDemoHtml } from '@uxkm/ui/utils/format-demo-html';
import { formatDocDescription } from '@uxkm/ui/utils/format-doc-description';
import { formatVueSourceCode } from '@uxkm/ui/utils/format-vue-source-code';

const SPACE_TOKENS = new Set(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']);

function toSpaceCSSValue(value) {
  if (!value) return undefined;
  if (value.startsWith('var(') || value.includes('(')) return value;
  return SPACE_TOKENS.has(value) ? `var(--space-${value})` : value;
}

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
  /** 예시 항목 사이 가로·세로 간격 (space 토큰 또는 CSS 값) */
  gap: String,
  /** stack 모드에서 예시 항목 사이 세로 간격 */
  stackGap: String,
  /** 예시 영역 상하 패딩 */
  paddingBlock: String,
  /** 예시 영역 좌우 패딩 */
  paddingInline: String,
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

const previewStyle = computed(() => {
  const style = {};
  const gap = toSpaceCSSValue(props.gap);
  const stackGap = toSpaceCSSValue(props.stackGap);
  const paddingBlock = toSpaceCSSValue(props.paddingBlock);
  const paddingInline = toSpaceCSSValue(props.paddingInline);

  if (gap) {
    style['--demo-gap-x'] = gap;
    style['--demo-gap-y'] = gap;
  }
  if (stackGap) style['--demo-gap-stack'] = stackGap;
  if (paddingBlock) style['--demo-padding-block'] = paddingBlock;
  if (paddingInline) style['--demo-padding-inline'] = paddingInline;

  return style;
});

const displayCode = computed(() => capturedCode.value);
const formattedDescription = computed(() => formatDocDescription(props.description));

async function captureCode() {
  if (props.code) {
    capturedCode.value = props.codeLang === 'vue'
      ? formatVueSourceCode(props.code)
      : props.code;
    return;
  }

  await nextTick();

  if (!previewRef.value) return;

  if (props.codeLang === 'vue') {
    const vueCode = demoCode.buildCode(previewRef.value);
    if (vueCode) {
      capturedCode.value = formatVueSourceCode(vueCode);
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
      :style="previewStyle"
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
