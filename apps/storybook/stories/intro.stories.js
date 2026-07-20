import IntroPage from '../../../apps/guide/src/doc/pages/intro.vue';
import { introCategories } from '@doc-data/intro-data';
import { guideHrefToStorybookDocsHref } from '../utils/storybook-links';

const storybookCategories = introCategories.map((category) => ({
  ...category,
  href: guideHrefToStorybookDocsHref(category.href),
  target: '_top',
}));

const resolveStorybookHref = (href) => guideHrefToStorybookDocsHref(href);

/** @type { import('@storybook/vue3-vite').Meta } */
export default {
  title: '소개',
  id: 'intro',
  component: IntroPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Vue와 SCSS로 구성된 UI 컴포넌트 가이드입니다. 마크업과 클래스 조합으로 50여 개 컴포넌트를 확인할 수 있습니다.',
      },
    },
  },
};

export const Page = {
  tags: ['!dev'],
  render: () => ({
    components: { IntroPage },
    setup() {
      return {
        storybookCategories,
        resolveStorybookHref,
      };
    },
    template: `<div class="sb-guide-page">
      <IntroPage
        :categories="storybookCategories"
        :resolve-href="resolveStorybookHref"
        link-target="_top"
      />
    </div>`,
  }),
};
