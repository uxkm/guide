import type { StorybookConfig } from '@storybook/react-vite';

import { refs } from './refs.js';

const config: StorybookConfig = {
  // 통합 Storybook은 실제 컴포넌트 Story를 복제하지 않고 공통 문서만 제공합니다.
  stories: ['../src/docs/**/*.mdx'],
  refs,
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};

export default config;
