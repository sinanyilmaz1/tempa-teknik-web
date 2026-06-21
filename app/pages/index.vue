<script setup lang="ts">
// Temporary i18n pipeline check — real localized UI comes per-feature later.
const { t } = useI18n()
</script>

<template>
  <div class="min-h-[60vh] flex items-center justify-center">
    <p class="text-steel-gray">{{ t('menu.home') }}</p>
  </div>
</template>
