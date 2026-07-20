import GettingStartedPage from '../../../apps/guide/src/doc/pages/getting-started.vue';

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: '설치 및 사용',
  id: 'getting-started',
  component: GettingStartedPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component: '이 가이드 저장소의 설치·실행 방법을 안내합니다. Vue 3 + Vite로 개발·빌드합니다.',
      },
    },
  },
};

export const Page = {
  tags: ['!dev'],
  render: () => ({
    components: { GettingStartedPage },
    template: '<div class="sb-guide-page"><GettingStartedPage /></div>',
  }),
};
