<script setup lang="ts">
const { items } = useMenu()
const localePath = useLocalePath()
</script>

<template>
  <!-- Dark region: redefine Nuxt UI's text tokens so the menu's own
       inactive/hover/active classes resolve to light values on the dark bar.
       Cleaner than :ui utility overrides (no twMerge conflict with active state). -->
  <header
    class="w-full border-b border-anthracite-700 bg-anthracite-800 [--ui-text-muted:var(--color-light-gray)] [--ui-text-highlighted:var(--color-beyaz)] [--ui-text:var(--color-light-gray)] [--ui-primary:var(--color-tempa-blue)]"
  >
    <div class="mx-auto max-w-7xl px-4 py-8 flex items-center justify-between gap-4">
      <!-- Logo (dark wordmark on a light chip so it reads on the dark bar).
           The source PNG is a square canvas with large transparent padding, so we
           clip it to a fixed-height band with overflow-hidden rather than object-contain. -->
      <NuxtLink :to="localePath('/')" class="shrink-0">
        <span class="flex h-10 items-center overflow-hidden rounded-md">
          <!-- bg-beyaz px-3-->
          <img src="/logo.png" alt="Tempa Teknik" class="h-36 w-auto" />
        </span>
      </NuxtLink>

      <!-- Desktop nav. variant="link" removes the active pill; highlight adds the
           active-item underline. --ui-primary (scoped on header) tints both to Tempa blue. -->
      <UNavigationMenu
        :items="items"
        class="hidden lg:flex"
        orientation="horizontal"
        variant="link"
        highlight
        :ui="{ link: 'after:h-0.5' }"
      />

      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <!-- Mobile trigger lives in AppMobileMenu (next sub-step) -->
        <AppMobileMenu class="lg:hidden" />
      </div>
    </div>
  </header>
</template>
