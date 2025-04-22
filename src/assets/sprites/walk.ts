import tilesheet from '@/assets/sprites/walk.png'

const base = {
  w: 32,
  h: 32,
  img: tilesheet,
}

export default {
  down_0: {
    ...base,
    id: 'walk_down_0',
    x: 0,
    y: 0,
  },
  down_1: {
    ...base,
    id: 'walk_down_1',
    x: 1,
    y: 0,
  },
  down_2: {
    ...base,
    id: 'walk_down_2',
    x: 2,
    y: 0,
  },
  down_3: {
    ...base,
    id: 'walk_down_3',
    x: 3,
    y: 0,
  },
  down_4: {
    ...base,
    id: 'walk_down_4',
    x: 4,
    y: 0,
  },
  down_5: {
    ...base,
    id: 'walk_down_5',
    x: 5,
    y: 0,
  },
  up_0: {
    ...base,
    id: 'walk_up_0',
    x: 0,
    y: 1,
  },
  up_1: {
    ...base,
    id: 'walk_up_1',
    x: 1,
    y: 1,
  },
  up_2: {
    ...base,
    id: 'walk_up_2',
    x: 2,
    y: 1,
  },
  up_3: {
    ...base,
    id: 'walk_up_3',
    x: 3,
    y: 1,
  },
  up_4: {
    ...base,
    id: 'walk_up_4',
    x: 4,
    y: 1,
  },
  up_5: {
    ...base,
    id: 'walk_up_5',
    x: 5,
    y: 1,
  },
  right_0: {
    ...base,
    id: 'walk_right_0',
    x: 0,
    y: 2,
  },
  right_1: {
    ...base,
    id: 'walk_right_1',
    x: 1,
    y: 2,
  },
  right_2: {
    ...base,
    id: 'walk_right_2',
    x: 2,
    y: 2,
  },
  right_3: {
    ...base,
    id: 'walk_right_3',
    x: 3,
    y: 2,
  },
  right_4: {
    ...base,
    id: 'walk_right_4',
    x: 4,
    y: 2,
  },
  right_5: {
    ...base,
    id: 'walk_right_5',
    x: 5,
    y: 2,
  },
} as const
