import type { FrameworkExample } from './FrameworkCode';

export const buttonExamples: FrameworkExample[] = [
  {
    id: 'html',
    label: 'HTML',
    fileName: 'apps/html/src/components/basic/Button/Button.html',
    code: `<button type="button" class="uxkm-button uxkm-button--primary">
  Button
</button>`
  },
  {
    id: 'gulp',
    label: 'Gulp',
    fileName: 'apps/gulp/src/components/basic/Button/button.njk',
    code: `<button type="button" class="uxkm-button uxkm-button--primary">
  Button
</button>`
  },
  {
    id: 'vue',
    label: 'Vue',
    fileName: 'apps/vue/src/components/basic/Button/Button.vue',
    code: `<script setup>
defineProps({
  disabled: { type: Boolean, default: false },
  variant: { type: String, default: 'primary' }
});
</script>

<template>
  <button
    :class="['uxkm-button', \`uxkm-button--\${variant}\`]"
    :disabled="disabled"
    type="button"
  >
    <slot>Button</slot>
  </button>
</template>`
  },
  {
    id: 'react',
    label: 'React',
    fileName: 'apps/react/src/components/basic/Button/Button.jsx',
    code: `export function Button({ children = 'Button', variant = 'primary', ...props }) {
  return (
    <button
      className={\`uxkm-button uxkm-button--\${variant}\`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}`
  }
];
