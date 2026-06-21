<script setup lang="ts">
// Emits locale-aware SEO head tags (hreflang alternates, canonical, og:locale).
// `seo` is an option of useLocaleHead (defaults to true); set explicitly here.
const i18nHead = useLocaleHead({ seo: true })
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
