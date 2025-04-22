<script setup lang="ts">
const { block, w, h } = defineProps<{
  block: 0 | 1
  w: number
  h: number
}>()

const tileStyle = computed(() => ({
  width: `${w}px`,
  height: `${h}px`,
  backgroundColor: block ? 'darksalmon' : '',
}))
</script>

<template>
  <div class="block" :style="tileStyle" />
</template>

<style scoped>
.block {
  opacity: 0.3;
}
</style>
