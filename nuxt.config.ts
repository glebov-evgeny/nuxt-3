// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    appConfig: undefined,
    plugins: undefined,
    ssr: true,
    head: {
        title: 'Nuxt3',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'keywords', name: 'keywords', content: '' },
            { name: 'theme-color', content: '#fff' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        ],
        link: [
            { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon.ico' },
            { rel: 'icon', type: 'image/png', href: 'favicon.ico' },
        ],
        script: [
            // { hid: 'emailsender', src: '//cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js', defer: true },
        ],
    },
    router: {
        base: '/',
    },
    css: [
        '~/assets/styles/main.scss',
    ],
    loading: '~/components/SLoader'

})
