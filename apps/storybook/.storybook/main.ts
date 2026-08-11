import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    { directory: '../src/docs/introduction', files: '*.mdx' },
    {
      directory: '../src/docs/components/layout',
      files: '*.mdx',
      titlePrefix: '레이아웃'
    },
    {
      directory: '../src/docs/components/basic',
      files: '*.mdx',
      titlePrefix: '기본 요소'
    },
    {
      directory: '../src/docs/components/data-display',
      files: '*.mdx',
      titlePrefix: '데이터 표시'
    },
    {
      directory: '../src/docs/components/form',
      files: '*.mdx',
      titlePrefix: '폼'
    },
    {
      directory: '../src/docs/components/feedback',
      files: '*.mdx',
      titlePrefix: '피드백'
    },
    {
      directory: '../src/docs/components/navigation',
      files: '*.mdx',
      titlePrefix: '네비게이션'
    },
    {
      directory: '../src/docs/components/miscellaneous',
      files: '*.mdx',
      titlePrefix: '기타'
    },
    {
      directory: '../src/docs/foundations',
      files: '*.mdx',
      titlePrefix: '파운데이션'
    },
    {
      directory: '../src/docs/patterns',
      files: '*.mdx',
      titlePrefix: '패턴'
    },
    {
      directory: '../src/docs/guidelines',
      files: '*.mdx',
      titlePrefix: '가이드'
    },
    {
      directory: '../src/docs/status',
      files: '*.mdx',
      titlePrefix: '현황'
    }
  ],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
};

export default config;
