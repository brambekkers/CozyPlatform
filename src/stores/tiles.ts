import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTileStore = defineStore('tile', () => {
  const tiles = ref<Record<string, string>>({})

  const loadTile = async (tile: Tile) => {
    if (!tile.id) {
      console.log(tile)
    }
    if (tiles.value[tile.id]) return
    tiles.value[tile.id] = await extractTile(tile.img, tile.x, tile.y, tile.w, tile.h)
  }

  return { tiles, loadTile }
})
