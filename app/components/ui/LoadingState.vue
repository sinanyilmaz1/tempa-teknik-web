<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <div class="flex items-center justify-center py-12" role="status" aria-live="polite">
    <span
      class="inline-block h-6 w-6 animate-spin rounded-full border-2 border-tempa-blue border-t-transparent"
    ></span>
    <span class="ml-3 text-sm text-steel-gray">{{ label ?? 'Loading…' }}</span>
  </div>
</template>
