import type { FrameworkExample } from './FrameworkCode';

export const buttonExamples: FrameworkExample[] = [
  {
    id: 'html',
    label: 'HTML',
    fileName: 'button.html',
    code: `<button type="button" class="uxkm-button uxkm-button--primary">
  Button
</button>`
  },
  {
    id: 'gulp',
    label: 'Gulp',
    fileName: 'templates/components/button.njk',
    code: `{% macro button(text, variant = 'primary') %}
  <button type="button" class="uxkm-button uxkm-button--{{ variant }}">
    {{ text }}
  </button>
{% endmacro %}

{{ button('Button') }}`
  },
  {
    id: 'vue',
    label: 'Vue',
    fileName: 'src/components/basic/UxkmButton.vue',
    code: `<script setup lang="ts">
withDefaults(
  defineProps<{ variant?: 'primary' | 'secondary' }>(),
  { variant: 'primary' }
)
</script>

<template>
  <button type="button" :class="['uxkm-button', \`uxkm-button--\${variant}\`]">
    <slot />
  </button>
</template>`
  },
  {
    id: 'react',
    label: 'React',
    fileName: 'src/components/basic/Button.tsx',
    code: `import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={\`uxkm-button uxkm-button--\${variant}\`} {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: 'nuxt',
    label: 'Nuxt',
    fileName: 'components/basic/UxkmButton.vue',
    code: `<script setup lang="ts">
withDefaults(
  defineProps<{ variant?: 'primary' | 'secondary' }>(),
  { variant: 'primary' }
)
</script>

<template>
  <button type="button" :class="['uxkm-button', \`uxkm-button--\${variant}\`]">
    <slot />
  </button>
</template>

<!-- Nuxt auto-import -->
<UxkmButton variant="primary">Button</UxkmButton>`
  },
  {
    id: 'next',
    label: 'Next',
    fileName: 'app/components/basic/Button.tsx',
    code: `import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={\`uxkm-button uxkm-button--\${variant}\`} {...props}>
      {children}
    </button>
  );
}

// app/page.tsx (Server Component에서도 사용 가능)
<Button variant="primary">Button</Button>`
  }
];
