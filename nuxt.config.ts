export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://alnafi.com',
      siteName: 'Al Nafi',
      siteDescription: 'Educational Benefits for all',
      language: 'en',
      titleSeparator: '|'
    }
  },

  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/devtools',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  experimental: {
    typedPages: true
  },

  extends: [
    'nuxt-seo-kit'
  ],

  devtools: {
    enabled: true
  },

  i18n: {
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    defaultLocale: 'en'
  },

  colorMode: {
    classSuffix: ''
  },

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      charset: 'utf-8',
      script: [
        {
          src: '/scripts/chatwoot.js',
          type: 'text/partytown',
          async: true,
          defer: true
        }
      ]
    }
  }
})
