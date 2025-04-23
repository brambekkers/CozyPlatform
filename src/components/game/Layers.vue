<script setup lang="ts">
import Tile from '@/components/game/layers/Tile.vue'
import Block from '@/components/game/layers/Block.vue'
import Interaction from '@/components/game/layers/Interaction.vue'

const { scene } = defineProps<{
  scene: Scene
}>()
const tileStore = useTileStore()
const { showBlockingLayer, showInteractionLayer } = storeToRefs(useDebugStore())

const loadTiles = async () => {
  for (let y = 0; y < scene.tiles.length; y++) {
    for (let x = 0; x < scene.tiles[y].length; x++) {
      const tile = scene.tiles[y][x]
      await tileStore.loadTile(tile)
    }
  }
}

await loadTiles()
</script>

<template>
  <!-- Base layer -->
  <section class="layer">
    <div class="row" v-for="(row, y) of scene.tiles" :key="y">
      <Tile v-for="(tile, x) in row" :key="`base-${x}-${y}`" :tile />
    </div>
  </section>

  <!-- Blocking layer -->
  <section v-if="showBlockingLayer" class="layer">
    <div class="row" v-for="(row, y) of scene.block" :key="y">
      <Block
        v-for="(block, x) in row"
        :key="`block-${x}-${y}`"
        :block
        :h="scene.tileHeight"
        :w="scene.tileWidth"
      />
    </div>
  </section>

  <!-- Interaction layer -->
  <section v-if="showInteractionLayer" class="layer">
    <Interaction v-for="(interaction, i) of scene.interactions" :key="i" :interaction />
  </section>
</template>

<style scoped>
.layer {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  .row {
    display: flex;
  }
}
</style>
