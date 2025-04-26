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
  <section class="tile-amount">
    <div class="size">
      Cells per row:
      <div class="counter">
        <button class="minus" @click="tilesX--" :disabled="tilesX <= 1">-</button>
        <input v-model="tilesX" type="number" readonly />
        <button class="plus" @click="tilesX++">+</button>
      </div>
    </div>
    <div class="size">
      Cells per column
      <div class="counter">
        <button class="minus" @click="tilesY--" :disabled="tilesY <= 1">-</button>
        <input v-model="tilesY" type="number" readonly />
        <button class="plus" @click="tilesY++">+</button>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.tile-amount {
  display: flex;
  flex-direction: column;
  gap: 0.5cqw;

  .size {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: max(1cqw, 20px);

    .counter {
      display: flex;
      align-items: center;

      .plus,
      .minus {
        border: solid 1px #000;
        background-color: #b9e0f8;
        font-size: max(0.75cqw, 16px);
        padding: 0.4cqw 0.8cqw;
        cursor: pointer;

        &:hover {
          background-color: #abd3ec;
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
        width: max(2.5cqw, 50px);
        text-align: center;
        border: solid 1px #000;
        border-left: none;
        border-right: none;
        background-color: #b9e0f8;
        font-size: max(0.75cqw, 16px);
        padding: 0.4cqw 0.8cqw;
        outline: none;
        cursor: default;
      }
    }
  }
}
</style>
