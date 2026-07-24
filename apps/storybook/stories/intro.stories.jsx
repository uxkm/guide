import React from 'react';
import { StorybookIntroPage } from './pages/IntroPage';

/** @type { import('@storybook/react-vite').Meta<typeof StorybookIntroPage> } */
export default {
  title: '소개',
  id: 'intro',
  component: StorybookIntroPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'React와 SCSS로 구성된 UI 컴포넌트 가이드입니다. 마크업과 클래스 조합으로 50여 개 컴포넌트를 확인할 수 있습니다.',
      },
    },
  },
};

export const Page = {
  tags: ['!dev'],
  render: () => (
    <div className="sb-guide-page">
      <StorybookIntroPage />
    </div>
  ),
};
