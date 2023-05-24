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
    '@productdevbook/chatwoot'
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

  chatwoot: {
    init: {
      websiteToken: process.env.CHATWOOT_TOKEN,
      baseUrl: process.env.CHATWOOT_SITE_URL
    },
    settings: {
      locale: 'en',
      position: 'left'
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: false
  }

})
