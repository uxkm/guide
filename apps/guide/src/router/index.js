import { createRouter, createWebHistory } from 'vue-router';
import GuideLayout from '@/layouts/GuideLayout.vue';
import DocView from '@/views/DocView.vue';
import { getAllDocSlugs } from '@/utils/doc-loader';

const routes = [
  {
    path: '/',
    component: GuideLayout,
    children: [
      {
        path: '',
        name: 'intro',
        component: DocView,
        props: { docKey: 'intro' },
        meta: { activeNav: 'intro', pageTitle: '소개' },
      },
      {
        path: 'getting-started',
        name: 'getting-started',
        component: DocView,
        props: { docKey: 'getting-started' },
        meta: { activeNav: 'getting-started', pageTitle: '설치 및 사용' },
      },
      {
        path: 'design-tokens',
        name: 'design-tokens',
        component: DocView,
        props: { docKey: 'design-tokens' },
        meta: { activeNav: 'design-tokens', pageTitle: '디자인 토큰' },
      },
      ...getAllDocSlugs().map((slug) => ({
        path: `components/${slug}`,
        name: slug,
        component: DocView,
        props: { docKey: slug },
        meta: { activeNav: slug, pageTitle: slug },
      })),
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
