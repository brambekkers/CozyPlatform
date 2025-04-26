<script setup lang="ts">
import Tile from '@/components/game/layers/Tile.vue'
import Block from '@/components/game/layers/Block.vue'
import Interaction from '@/components/game/layers/Interaction.vue'

defineEmits(['clickTile'])
const { scene, mode = 'game' } = defineProps<{
  mode?: 'game' | 'editor'
  scene: Scene
}>()

const { selectedTile } = storeToRefs(useEditorStore())
const { tiles } = storeToRefs(useTileStore())
const tileStore = useTileStore()
const { showBlockingLayer, showInteractionLayer } = storeToRefs(useDebugStore())

const selectedTileImg = computed(() => {
  return selectedTile.value ? `url(${tiles.value[selectedTile.value.id]})` : ''
})

const loadTiles = async () => {
  for (let y = 0; y < scene.tiles.length; y++) {
    for (let x = 0; x < scene.tiles[y].length; x++) {
      const tile = scene.tiles[y][x]
      await tileStore.loadTile(tile)
    }
  }
}

const tileStyle = computed(() => ({
  width: `${scene.tileWidth}px`,
  height: `${scene.tileHeight}px`,
}))

await loadTiles()
</script>

<template>
  <div>
    <section class="layer tiles">
      <div class="row" v-for="(row, y) of scene.tiles" :key="y">
        <template v-for="(tile, x) in row" :key="`base-${x}-${y}`">
          <Tile v-if="tile" :tile :mode @click="$emit('clickTile', { x, y })" />
          <div v-else class="empty-tile" :style="tileStyle" @click="$emit('clickTile', { x, y })" />
        </template>
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
  </div>
</template>

<style scoped>
.tiles {
  border: solid 1px black;
  border-radius: 0.25cqw;
  background-color: burlywood;

  overflow: hidden;

  .empty-tile {
    cursor: pointer;
    transition: all 100ms ease-in-out;

    &:hover {
      background-image: v-bind(selectedTileImg);
    }

    &:first-child {
      border-left: none;
    }
  }
}

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
