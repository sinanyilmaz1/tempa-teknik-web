<script setup lang="ts">
// Emits locale-aware SEO head tags (hreflang alternates, canonical, og:locale).
// `seo: true` is set in nuxt.config i18n; useLocaleHead() picks it up by default.
const i18nHead = useLocaleHead()
useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: i18nHead.value.htmlAttrs?.dir as 'ltr' | 'rtl' | 'auto' | undefined,
  },
  link: i18nHead.value.link ?? [],
  meta: i18nHead.value.meta ?? [],
}))
</script>

<template>
  <NuxtLayout name="main-layout">
    <NuxtPage />
  </NuxtLayout>
</template>
