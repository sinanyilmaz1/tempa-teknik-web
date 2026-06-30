// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  // Tempa brand is a fixed identity, not a user light/dark toggle.
  // Lock to a single mode; dark surfaces come from brand tokens, not color-mode dark.
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:1337',
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'tr',
    restructureDir: 'app/locales',
    langDir: '.',
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    locales: [
      { code: 'tr', name: 'Türkçe', language: 'tr-TR', file: 'tr.json' },
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'es', name: 'Español', language: 'es-ES', file: 'es.json' },
      { code: 'it', name: 'Italiano', language: 'it-IT', file: 'it.json' },
      { code: 'fr', name: 'Français', language: 'fr-FR', file: 'fr.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'tr',
      alwaysRedirect: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})