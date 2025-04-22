export type SceneName = 'home' | 'second'

export type Tile = {
  id: string
  img: string
  w: number
  h: number
  x: number
  y: number
}

export type Interaction = {
  type: 'scene'
  x: number
  y: number
  w: number
  h: number
  scene: SceneName
}

export type Scene = {
  id: SceneName
  tileWidth: number
  tileHeight: number
  startPosition: { x: number; y: number }
  w: number
  h: number
  tiles: Tile[][]
  block: (1 | 0)[][]
  interactions: Interaction[]
}
