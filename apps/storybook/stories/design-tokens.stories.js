import DesignTokensPage from '../../../apps/guide/src/doc/pages/design-tokens.vue';

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: '디자인 토큰',
  id: 'design-tokens',
  component: DesignTokensPage,
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
  render: () => ({
    components: { DesignTokensPage },
    template: '<div class="sb-guide-page"><DesignTokensPage /></div>',
  }),
};
