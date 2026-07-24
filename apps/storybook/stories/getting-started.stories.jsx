import React from 'react';
import { StorybookGettingStartedPage } from './pages/GettingStartedPage';

/** @type { import('@storybook/react-vite').Meta<typeof StorybookGettingStartedPage> } */
export default {
  title: '설치 및 사용',
  id: 'getting-started',
  component: StorybookGettingStartedPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          '이 가이드 저장소의 설치·실행 방법을 안내합니다. React + Vite로 Storybook을 개발·빌드합니다.',
      },
    },
  },
};

export const Page = {
  tags: ['!dev'],
  render: () => (
    <div className="sb-guide-page">
      <StorybookGettingStartedPage />
    </div>
  ),
};
