<script setup lang="ts">
defineProps<{ titleKey: string }>()
const { t } = useI18n()
// this component is for page placeholder, temporary body content, until the real page is implemented
</script>
<template>
  <section class="py-16 text-center">
    <h1 class="text-2xl font-semibold text-anthracite-900">{{ t(titleKey) }}</h1>
    <p class="mt-2 text-steel-gray">{{ t('common.empty') }}</p>
  </section>
</template>
