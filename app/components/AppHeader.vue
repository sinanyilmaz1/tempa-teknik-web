<script setup lang="ts">
const { items } = useMenu()
const localePath = useLocalePath()
</script>

<template>
  <header class="w-full border-b border-steel-gray/20 bg-beyaz">
    <div class="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="font-bold text-anthracite-900 shrink-0">
        TEMPA TEKNIK
      </NuxtLink>

      <!-- Desktop nav -->
      <UNavigationMenu
        :items="items"
        class="hidden lg:flex"
        orientation="horizontal"
      />

      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <!-- Mobile trigger lives in AppMobileMenu (next sub-step) -->
        <AppMobileMenu class="lg:hidden" />
      </div>
    </div>
  </header>
</template>
