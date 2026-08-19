export default defineNuxtConfig({
  app: {
    head: {
      title: 'UXKM Nuxt',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'author', content: 'UXKM' },
        { name: 'description', content: '프레임워크별 UI 컴포넌트와 디자인 시스템 가이드' },
        { name: 'theme-color', content: '#f4f6f9' }
      ],
      link: [
        { rel: 'stylesheet', href: '/styles/uxkm.css' },
        { rel: 'icon', href: '/images/meta/favicon/favicon.ico', sizes: '16x16 32x32' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/meta/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/meta/favicon/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/meta/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/images/meta/favicon/site.webmanifest' }
      ]
    }
  }
});
