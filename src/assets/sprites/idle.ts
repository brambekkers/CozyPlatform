import tilesheet from '@/assets/sprites/idle.png'

const base = {
  w: 32,
  h: 32,
  img: tilesheet,
}

export default {
  idle_down_0: {
    ...base,
    id: 'walk_down_0',
    x: 0,
    y: 0,
  },
  idle_down_1: {
    ...base,
    id: 'walk_down_1',
    x: 1,
    y: 0,
  },
  idle_down_2: {
    ...base,
    id: 'walk_down_2',
    x: 2,
    y: 0,
  },
  idle_down_3: {
    ...base,
    id: 'walk_down_3',
    x: 3,
    y: 0,
  },
  idle_up_0: {
    ...base,
    id: 'walk_up_0',
    x: 0,
    y: 1,
  },
  idle_up_1: {
    ...base,
    id: 'walk_up_1',
    x: 1,
    y: 1,
  },
  idle_up_2: {
    ...base,
    id: 'walk_up_2',
    x: 2,
    y: 1,
  },
  idle_up_3: {
    ...base,
    id: 'walk_up_3',
    x: 3,
    y: 1,
  },
  idle_right_0: {
    ...base,
    id: 'walk_right_0',
    x: 0,
    y: 2,
  },
  idle_right_1: {
    ...base,
    id: 'walk_right_1',
    x: 1,
    y: 2,
  },
  idle_right_2: {
    ...base,
    id: 'walk_right_2',
    x: 2,
    y: 2,
  },
  idle_right_3: {
    ...base,
    id: 'walk_right_3',
    x: 3,
    y: 2,
  },
} as const
