export const useTileStore = defineStore('tile', () => {
  const tiles = ref<Record<string, string>>({})
  const tileMap = ref<Record<string, Tile>>({})

  const loadTile = async (tile: Tile) => {
    if (!tile?.id) return
    if (tiles.value[tile.id]) return
    tiles.value[tile.id] = await extractTile(tile.img, tile.x, tile.y, tile.w, tile.h)
    tileMap.value[tile.id] = tile
  }

  return { tiles, tileMap, loadTile }
})
