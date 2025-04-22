<script setup lang="ts">
const { tile } = defineProps<{ tile: Tile }>()
const { tiles } = useTileStore()

const tileStyle = computed(() => ({
  width: `${tile.w}px`,
  height: `${tile.h}px`,
  backgroundImage: `url(${tiles[tile.id]})`,
}))
</script>

<template>
  <div :style="tileStyle" />
</template>
