<script setup lang="ts">
const { color = 'primary' } = defineProps<{
  color?: 'warning' | 'danger' | 'success' | 'primary' | 'contrast'
}>()
</script>

<template>
  <Button :color="color" class="h-16">
    <div
      class="w-13 h-13 -translate-y-8 rounded-md border-2 border-black -rotate-4 -mb-10 -mx-3 bg-white flex justify-center items-center"
    >
      <slot />
    </div>
  </Button>
</template>
