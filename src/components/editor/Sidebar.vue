<script setup lang="ts">
import Title from '@/components/global/Title.vue'
import Tabs from '@/components/global/Tabs.vue'
import Button from '@/components/global/Button.vue'
import Tile from '@/components/game/layers/Tile.vue'
import SceneSize from '@/components/editor/sidebar/SceneSize.vue'
import { tiles, grassDirt } from '@/assets/sprites/tiles'

const tileStore = useTileStore()
const isLoading = ref(true)
const activeTab = ref(0)
const { selectedTile } = storeToRefs(useEditorStore())
const selectedIndex = ref<null | number>(null)

const loadTiles = async () => {
  const promises: Promise<void>[] = []
  Object.values(tiles).forEach(async (tile) => promises.push(tileStore.loadTile(tile)))
  await Promise.all(promises)
}

const selectTile = (tile: Tile, i: number) => {
  if (selectedTile.value?.id === tile.id && selectedIndex.value === i) selectedTile.value = null
  else {
    selectedTile.value = tile
    selectedIndex.value = i
  }
}

onMounted(async () => {
  await loadTiles()
  isLoading.value = false
})
</script>

<template>
  <aside v-if="isLoading">Loading...</aside>

  <aside v-else>
    <div class="inputs">
      <Title class="title" title="Tiles" />

      <SceneSize />

      <Tabs
        v-model="activeTab"
        :tabs="[
          { value: 0, label: 'Grass' },
          { value: 1, label: 'Dirt' },
          { value: 2, label: 'Water' },
        ]"
      >
        <div class="tiles">
          <template v-for="(tile, i) of grassDirt" :key="i">
            <Tile
              v-if="tile"
              :tile="{ ...tile, w: 48, h: 48 }"
              :class="{ selected: `${selectedTile?.id}_${selectedIndex}` === `${tile.id}_${i}` }"
              @click="selectTile(tile, i)"
            />
            <span v-else />
          </template>
        </div>
      </Tabs>
    </div>

    <div class="actions">
      <Button color="success">Export</Button>
    </div>
  </aside>
</template>

<style scoped>
aside {
  max-width: 1200px;
  min-width: 400px;
  width: 30vw;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 2cqw;

  .inputs {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2cqw;
    overflow: auto;
    overflow-x: hidden;
    flex-grow: 1;
    padding: 2cqw max(2cqw, 25px) 2cqw max(6cqw, 100px);
  }

  .actions {
    padding: 2cqw max(2cqw, 25px) 2cqw max(6cqw, 100px);
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: max(2cqw, 24px);
    color: #fffec4;
  }

  .tiles {
    display: grid;
    grid-template-columns: repeat(5, 48px);
    justify-content: center;
    gap: max(0.25cqw, 5px);

    div {
      border: solid 1px #000;
      background-color: #b9e0f8;
      cursor: pointer;
      border-radius: max(0.25cqw, 5px);
      transition: all 0.2s
        linear(
          0,
          0.564 8.3%,
          0.99 17%,
          1.152 21.5%,
          1.281 26.1%,
          1.378 30.9%,
          1.445 35.9%,
          1.475 40%,
          1.487 44.2%,
          1.48 48.7%,
          1.455 53.4%,
          1.369 62.5%,
          1.073 86.5%,
          1.018 93.6%,
          1
        );

      &:hover {
        scale: 1.1;
      }

      &.selected {
        scale: 1.1;
        border: solid 0.05cqw black;
        box-shadow: 0.1cqw 0.1cqw 0px black;
      }
    }
  }
}
</style>
