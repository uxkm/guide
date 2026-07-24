import React from 'react';
import { ComingSoon } from '../../storybook/ComingSoon.jsx';

export default {
  title: 'Components/데이터 표시/List',
  id: 'components-list',
  component: ComingSoon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component: 'List 컴포넌트 — React 마이그레이션 예정입니다.',
      },
    },
  },
};

export const Playground = {
  render: () => <ComingSoon name="List" />,
};
