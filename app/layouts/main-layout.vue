<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col bg-beyaz">
    <!-- Header region — real menu added in the Menu & routes slice -->
    <header class="w-full border-b border-steel-gray/20">
      <div class="mx-auto max-w-7xl px-4 py-4">
        <!-- placeholder; menu slice fills this -->
        <div class="h-8"></div>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1 w-full">
      <div class="mx-auto max-w-7xl px-4 py-6">
        <slot />
      </div>
    </main>

    <!-- Footer region — real footer added later -->
    <footer class="w-full border-t border-steel-gray/20 mt-auto">
      <div class="mx-auto max-w-7xl px-4 py-6">
        <!-- placeholder; footer slice fills this -->
        <div class="h-8"></div>
      </div>
    </footer>
  </div>
</template>
e
