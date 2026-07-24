import React from 'react';
import { ComingSoon } from '../../storybook/ComingSoon.jsx';

export default {
  title: 'Components/데이터 표시/Badge',
  id: 'components-badge',
  component: ComingSoon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component: 'Badge 컴포넌트 — React 마이그레이션 예정입니다.',
      },
    },
  },
};

export const Playground = {
  render: () => <ComingSoon name="Badge" />,
};
