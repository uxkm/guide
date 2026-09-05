const assetBase = (process.env.NUXT_PUBLIC_ASSET_BASE || process.env.NUXT_APP_BASE_URL || '').replace(/\/+$/, '');
const asset = (path: string) => `${assetBase}/${String(path).replace(/^\/+/, '')}`;

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'light',
        lang: 'ko',
      },
      title: 'UXKM Nuxt',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'author', content: 'UXKM' },
        { name: 'description', content: '프레임워크별 UI 컴포넌트와 디자인 시스템 가이드' },
        { name: 'theme-color', content: '#f4f6f9' },
      ],
      link: [
        { rel: 'stylesheet', href: asset('styles/uxkm.css') },
        { rel: 'stylesheet', href: asset('styles/demo.css') },
        { rel: 'icon', href: asset('images/meta/favicon/favicon.ico'), sizes: '16x16 32x32' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: asset('images/meta/favicon/favicon-32x32.png') },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: asset('images/meta/favicon/favicon-16x16.png') },
        { rel: 'apple-touch-icon', sizes: '180x180', href: asset('images/meta/favicon/apple-touch-icon.png') },
        { rel: 'manifest', href: asset('images/meta/favicon/site.webmanifest') },
      ],
    },
  },
  build: {
    transpile: ['@uxkm/vue'],
  },
  vite: {
    optimizeDeps: {
      include: ['@uxkm/vue'],
    },
  },
});
