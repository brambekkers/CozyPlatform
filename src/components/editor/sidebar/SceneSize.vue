<script setup lang="ts">
const { scene } = storeToRefs(useEditorStore())

const tilesX = ref(scene.value.w / scene.value.tileWidth)
const tilesY = ref(scene.value.h / scene.value.tileHeight)

watch([tilesX, tilesY], ([x, y], [oldX, oldY]) => {
  scene.value.w = x * scene.value.tileWidth
  scene.value.h = y * scene.value.tileHeight

  if (x < oldX) scene.value.tiles = scene.value.tiles.map((row) => row.slice(0, x))
  if (x > oldX) scene.value.tiles = scene.value.tiles.map((row) => [...row, null].slice(0, x))

  if (y < oldY) scene.value.tiles = scene.value.tiles.slice(0, y)
  if (y > oldY) scene.value.tiles = [...scene.value.tiles, new Array(x).fill(null)].slice(0, y)
})
</script>

<template>
  <section class="flex flex-col bg-[#183e82] p-8 gap-4 rounded -skew-x-5">
    <!-- Row size -->
    <div class="size text-nowrap">
      <span class="flex gap-2 bg-[#395991] pe-4 py-1 -skew-x-10 items-center text-white">
        <MainTitle title="X" class="text-white text-3xl -translate-x-2 -rotate-12" />
        <MainTitle title="Cells per row" class="text-white text-lg skew-x-15 -ms-1" />
        <span class="-ms-1"></span>
      </span>
      <div class="flex justify-between">
        <button class="minus" @click="tilesX--" :disabled="tilesX <= 1">-</button>
        <input v-model="tilesX" type="number" readonly />
        <button class="plus" @click="tilesX++">+</button>
      </div>
    </div>

    <!-- Column size -->
    <div class="size text-nowrap">
      <span class="flex gap-2 bg-[#395991] pe-4 py-1 -skew-x-10 items-center">
        <MainTitle title="Y" class="text-white text-3xl -translate-x-2 -rotate-12" />
        <MainTitle title="Cells per column" class="text-white text-lg skew-x-15 -ms-1" />
      </span>
      <div class="flex justify-between">
        <button class="minus" @click="tilesY--" :disabled="tilesY <= 1">-</button>
        <input v-model="tilesY" type="number" readonly />
        <button class="plus" @click="tilesY++">+</button>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.size {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .plus,
  .minus {
    color: white;
    background-color: #021438;
    font-size: max(0.75cqw, 16px);
    padding: 0.4cqw 0.5cqw;
    cursor: pointer;

    &:hover {
      background-color: #000000;
    }
  }

  .minus {
    border-top-left-radius: 0.2cqw;
    border-bottom-left-radius: 0.2cqw;
  }

  .plus {
    border-top-right-radius: 0.2cqw;
    border-bottom-right-radius: 0.2cqw;
  }

  input {
    color: white;
    width: 50px;
    text-align: center;
    border: none;
    background-color: #021438;
    padding: 0.2cqw 0.4cqw;
    outline: none;
    cursor: default;
  }
}
</style>
