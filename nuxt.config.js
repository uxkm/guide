import { fileURLToPath } from 'node:url';

const isProduction = process.env.NODE_ENV === 'production';
const baseURL = process.env.NUXT_APP_BASE_URL || (isProduction ? '/nuxt/' : '/');

export default defineNuxtConfig({
  compatibilityDate: '2026-08-03',
  srcDir: 'src/',
  dir: {
    public: fileURLToPath(new URL('./public', import.meta.url)),
  },
  telemetry: false,
  devtools: { enabled: true },

  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'ko' },
      title: 'UXKM Guide',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index,follow' },
        { name: 'format-detection', content: 'telephone=no, email=no, address=no' },
        { name: 'author', content: 'UXKM' },
        {
          name: 'description',
          content: 'Nuxt와 SCSS로 구성된 UI 컴포넌트 가이드. 버튼·폼·피드백·네비게이션 등 컴포넌트를 확인하고 HTML·CSS로 적용할 수 있습니다.',
        },
        { name: 'keywords', content: 'uxkm, uxkm guide, nuxt, vue, scss, ui, component, html, css, javascript, accessibility' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'UXKM Guide' },
        { property: 'og:site_name', content: 'UXKM Guide' },
        { property: 'og:url', content: 'https://guide.uxkm.io/nuxt/' },
        {
          property: 'og:description',
          content: 'Nuxt와 SCSS로 구성된 UI 컴포넌트 가이드. 버튼·폼·피드백·네비게이션 등 컴포넌트를 확인하고 HTML·CSS로 적용할 수 있습니다.',
        },
        { property: 'og:image', content: 'https://uxkm.io/_assets/images/_common/og_image.png' },
        { property: 'og:image:width', content: '1000' },
        { property: 'og:image:height', content: '750' },
        { property: 'og:locale', content: 'ko_KR' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'UXKM Guide' },
        {
          name: 'twitter:description',
          content: 'Nuxt와 SCSS로 구성된 UI 컴포넌트 가이드. 버튼·폼·피드백·네비게이션 등 컴포넌트를 확인하고 HTML·CSS로 적용할 수 있습니다.',
        },
        { name: 'twitter:image', content: 'https://uxkm.io/_assets/images/_common/og_image.png' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseURL}_assets/images/favicon/apple-icon-180x180.png` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseURL}_assets/images/favicon/favicon-32x32.png` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseURL}_assets/images/favicon/favicon-16x16.png` },
      ],
      script: [
        {
          innerHTML: '!function(){try{var t=localStorage.getItem("guide-theme");if("light"!==t&&"dark"!==t)t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}}();',
        },
      ],
    },
  },

  css: ['@/scss/main.scss', 'swiper/css/bundle'],

  alias: {
    '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          loadPaths: ['src/scss', 'node_modules'],
        },
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
});
