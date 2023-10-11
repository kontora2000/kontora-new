// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  devServer: {
    port: 3003
  },

  spaLoadingTemplate: false,

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

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', 'nuxt-icon'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Kontora',
      meta: [
        { charset: 'utf-8' },
        { name: 'language', content: 'en' },
        { 'http-equiv': 'content-language', content: 'en' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content:
            'Kontora - Development of online services, personal accounts and ERP systems. Support and development of projects'
        },
        {
          property: 'og:type',
          content: 'business.business'
        },
        {
          property: 'og:title',
          content: 'Kontora'
        },
        {
          property: 'og:description',
          content:
            'Development of online services, personal accounts and ERP systems. Support and development of projects. We work on outsourcing and outstaffing models'
        },
        {
          property: 'og:url',
          content: 'https://kontora.dev/'
        },
        {
          property: 'og:site_name',
          content: 'Kontora'
        },
        {
          property: 'og:locale',
          content: 'en'
        }
      ],
      link: [
        { rel: 'icon', sizes: 'any', href: 'https://kontora2000.github.io/kontora-new/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: 'https://kontora2000.github.io/kontora-new/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', href: 'https://kontora2000.github.io/kontora-new/favicon-32x32.png' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        }
      ]
    },

    baseURL: '/kontora-new/',
    buildAssetsDir: 'src' //
  }
});
