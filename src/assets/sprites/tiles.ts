import tilesheet from '@/assets/sprites/tiles.png'

const base = {
  w: 16,
  h: 16,
  img: tilesheet,
}

export const tiles = {
  1: {
    ...base,
    id: 'grass_empty_corner_top_left',
    x: 1,
    y: 2,
  },
  2: {
    ...base,
    id: 'grass_empty_edge_top',
    x: 3,
    y: 1,
  },
  3: {
    ...base,
    id: 'grass_empty_corner_top_right',
    x: 5,
    y: 2,
  },
  4: {
    ...base,
    id: 'grass_empty_edge_left',
    x: 1,
    y: 3,
  },
  5: {
    ...base,
    id: 'grass',
    x: 2,
    y: 3,
  },
  6: {
    ...base,
    id: 'grass_empty_edge_right',
    x: 5,
    y: 3,
  },
  7: {
    ...base,
    id: 'grass_empty_corner_bottom_left',
    x: 1,
    y: 4,
  },
  8: {
    ...base,
    id: 'grass_empty_edge_bottom',
    x: 3,
    y: 5,
  },
  9: {
    ...base,
    id: 'grass_empty_corner_bottom_right',
    x: 5,
    y: 4,
  },
  10: {
    ...base,
    id: 'grass_empty_inner_corner_top_left',
    x: 2,
    y: 2,
  },
  11: {
    ...base,
    id: 'grass_empty_inner_corner_top_right',
    x: 4,
    y: 2,
  },
  12: {
    ...base,
    id: 'grass_empty_inner_corner_bottom_right',
    x: 4,
    y: 4,
  },
  13: {
    ...base,
    id: 'grass_empty_inner_corner_bottom_left',
    x: 2,
    y: 4,
  },
} as const

export const grassDirt = [
  // Layer 1
  null,
  tiles[1],
  tiles[2],
  tiles[3],
  null,
  // Layer 2
  tiles[1],
  tiles[10],
  tiles[5],
  tiles[11],
  tiles[3],
  // Layer 3
  tiles[4],
  tiles[5],
  tiles[5],
  tiles[5],
  tiles[6],
  // Layer 4
  tiles[7],
  tiles[13],
  tiles[5],
  tiles[12],
  tiles[9],
  // Layer 4
  null,
  tiles[7],
  tiles[8],
  tiles[9],
  null,
]

export default tiles
