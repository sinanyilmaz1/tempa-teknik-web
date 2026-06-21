<script setup lang="ts">
defineProps<{ message?: string }>()
</script>

<template>
  <div class="rounded-lg border border-steel-gray/20 bg-anthracite-700/5 px-4 py-12 text-center">
    <p class="text-sm text-steel-gray">{{ message ?? 'Nothing to show yet.' }}</p>
  </div>
</template>
