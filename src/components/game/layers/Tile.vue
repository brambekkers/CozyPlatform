<script setup lang="ts">
const { tile, mode = 'game' } = defineProps<{ tile: Tile; mode?: 'game' | 'editor' }>()
const { tiles } = useTileStore()

const tileStyle = computed(() => ({
  width: `${tile.w}px`,
  height: `${tile.h}px`,
  backgroundImage: `url(${tiles[tile.id]})`,
}))
</script>

<template>
  <div class="tile" :style="tileStyle" />
</template>

<style scoped>
.tile {
  background-position: center;
  background-size: cover;
}
</style>
