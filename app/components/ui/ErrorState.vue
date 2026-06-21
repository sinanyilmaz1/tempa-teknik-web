<script setup lang="ts">
defineProps<{ message?: string }>()
</script>

<template>
  <div class="rounded-lg border border-red-200 bg-red-50 px-4 py-6 text-center" role="alert">
    <p class="text-sm text-red-700">{{ message ?? 'Something went wrong. Please try again.' }}</p>
  </div>
</template>
