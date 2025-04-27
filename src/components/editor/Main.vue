<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import Layers from '@/components/game/Layers.vue'
const { scene, selectedTile } = storeToRefs(useEditorStore())

const el = useTemplateRef('main')
const { width, height } = useElementSize(el)

const sceneStyle = computed(() => ({
  width: `${scene.value.w}px`,
  height: `${scene.value.h}px`,
}))

const scaleFactor = computed(() => {
  const widthMin = width.value - width.value * 0.2
  const heightMin = height.value - height.value * 0.2
  const w = widthMin > 1000 ? 1000 : widthMin
  const h = heightMin > 800 ? 800 : heightMin
  return Math.min(w / scene.value.w, h / scene.value.h)
})

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
  <main ref="main">
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
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  #map {
    scale: v-bind(scaleFactor);
    position: relative;
  }
}
</style>
