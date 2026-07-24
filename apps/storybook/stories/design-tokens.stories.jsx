import React from 'react';
import { StorybookDesignTokensPage } from './pages/DesignTokensPage';

/** @type { import('@storybook/react-vite').Meta<typeof StorybookDesignTokensPage> } */
export default {
  title: '디자인 토큰',
  id: 'design-tokens',
  component: StorybookDesignTokensPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          '색상·간격·타이포그래피 등 디자인 시스템의 기준 값을 CSS 변수로 관리합니다.',
      },
    },
  },
};

export const Page = {
  tags: ['!dev'],
  render: () => (
    <div className="sb-guide-page">
      <StorybookDesignTokensPage />
    </div>
  ),
};
