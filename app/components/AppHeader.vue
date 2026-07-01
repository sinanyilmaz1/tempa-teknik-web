<script setup lang="ts">
const { items } = useMenu()
const localePath = useLocalePath()
</script>

<template>
  <header class="w-full border-b border-anthracite-700 bg-anthracite-800">
    <div class="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between gap-4">
      <!-- Logo (dark wordmark on a light chip so it reads on the dark bar).
           The source PNG is a square canvas with large transparent padding, so we
           clip it to a fixed-height band with overflow-hidden rather than object-contain. -->
      <NuxtLink :to="localePath('/')" class="shrink-0">
        <span class="flex h-10 items-center overflow-hidden rounded-md bg-beyaz px-3">
          <img src="/logo.png" alt="Tempa Teknik" class="h-36 w-auto">
        </span>
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
