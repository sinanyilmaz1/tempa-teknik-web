<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
const { locale, locales, setLocale } = useI18n()

const items = computed<DropdownMenuItem[]>(() =>
  (locales.value as { code: string; name: string }[]).map((l) => ({
    label: l.name,
    onSelect: () => setLocale(l.code as typeof locale.value),
  })),
)

const currentName = computed(
  () => (locales.value as { code: string; name: string }[])
    .find((l) => l.code === locale.value)?.name ?? locale.value,
)
</script>

<template>
  <UDropdownMenu :items="items">
    <UButton color="neutral" variant="ghost" :label="currentName" icon="i-lucide-globe" />
  </UDropdownMenu>
</template>
