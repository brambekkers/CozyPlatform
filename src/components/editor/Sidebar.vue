<script setup lang="ts">
import Shape2 from '@/components/shapes/shape2.vue'

import Tabs from '@/components/global/Tabs.vue'
import Tile from '@/components/game/layers/Tile.vue'
import SceneSize from '@/components/editor/sidebar/SceneSize.vue'
import EditMode from '@/components/editor/sidebar/EditMode.vue'
import { tiles, grassDirt } from '@/assets/sprites/tiles'

const tileStore = useTileStore()
const editMode = ref('Tiles')
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
  <aside class="relative md:bg-transparent md:w-1/3 h-2/3 md:h-full md:min-w-xl md:max-w-2xl">
    <Shape2
      class="absolute hidden z-0 md:block -top-1 -right-1 w-full -bottom-1 max-w-[1200px] h-[calc(100%+8px)]"
      color="#3d76e0"
    />
    <Shape2
      class="absolute z-0 md:hidden rotate-[85deg] left-0 scale-x-[1.2] scale-y-[1.1]"
      color="#3d76e0"
    />

    <section v-if="isLoading">Loading...</section>

    <section v-else class="h-full flex flex-col">
      <div class="z-1 flex-grow flex flex-col gap-8 overflow-auto p-8 md:ps-28">
        <MainTitle class="title" :title="editMode" />
        <EditMode v-model="editMode" class="mb-8" />

        <section v-if="editMode === 'Tiles'" class="flex flex-col gap-8">
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
                  :class="{
                    selected: `${selectedTile?.id}_${selectedIndex}` === `${tile.id}_${i}`,
                  }"
                  @click="selectTile(tile, i)"
                />
                <span v-else />
              </template>
            </div>
          </Tabs>
        </section>
      </div>

      <Button color="success" class="w-[calc(100%+16px] mt-8 mb-8 ms-12 me-8">Export</Button>
    </section>
  </aside>
</template>

<style scoped>
aside {
  .title {
    font-size: max(2cqw, 32px);
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
