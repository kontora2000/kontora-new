// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 3003
  },

  tailwindcss: {
    cssPath: '~/assets/css/index.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true
  },

  ssr: false,

  srcDir: './src/',

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  css: ['~/assets/css/index.css'],

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Kontora',
      meta: [
        { charset: 'utf-8' },
        { name: 'language', content: 'en' },
        { 'http-equiv': 'content-language', content: 'en' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', sizes: 'any', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        }
      ]
    }
  }
});
