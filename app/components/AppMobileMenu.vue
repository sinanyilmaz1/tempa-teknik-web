<script setup lang="ts">
const { items } = useMenu()
const open = ref(false)
// close drawer on navigation
const route = useRoute()
watch(() => route.fullPath, () => { open.value = false })
</script>

<template>
  <div>
    <UButton
      icon="i-lucide-menu"
      color="neutral"
      variant="ghost"
      aria-label="Menu"
      @click="open = true"
    />
    <USlideover v-model:open="open" side="right">
      <template #content>
        <nav class="p-4">
          <UNavigationMenu :items="items" orientation="vertical" />
        </nav>
      </template>
    </USlideover>
  </div>
</template>
