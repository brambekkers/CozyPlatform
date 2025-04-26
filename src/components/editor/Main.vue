<script setup lang="ts">
import Layers from '@/components/game/Layers.vue'
const { scene, selectedTile } = storeToRefs(useEditorStore())

const sceneStyle = computed(() => ({
  width: `${scene.value.w}px`,
  height: `${scene.value.h}px`,
}))

const clickTile = ({ x, y }: Coordinate) => {
  const tile = scene.value.tiles[y][x] as Tile
  if ((!tile || tile?.id !== selectedTile.value?.id) && selectedTile.value) setTile({ x, y })
  else removeTile({ x, y })
}

const setTile = ({ x, y }: Coordinate) => {
  if (!selectedTile.value) return
  scene.value.tiles[y][x] = selectedTile.value
}
const removeTile = ({ x, y }: Coordinate) => {
  scene.value.tiles[y][x] = null
}
</script>

<template>
  <main>
    <div id="map" :style="sceneStyle">
      <Suspense>
        <Layers :scene @clickTile="clickTile" />
        <template #fallback>Loading...</template>
      </Suspense>
    </div>
  </main>
</template>

<style scoped>
main {
  position: relative;
  z-index: 3;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  #map {
    scale: 4;
    position: relative;
  }
}
</style>
