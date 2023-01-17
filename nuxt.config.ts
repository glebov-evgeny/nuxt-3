import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  debug: true,
  ssr: true,
  app: {
    head: {
      title: 'Nuxt 3',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'keywords', name: 'keywords', content: '' },
        { name: 'theme-color', content: '#fff' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png', type: 'image/png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in', // default
    },
    baseURL: '/nuxt-3/',
  },
  css: ['@/assets/styles/main.scss', 'swiper/swiper.min.css'],
  components: ['~/components', '~/components/ui'],
});
