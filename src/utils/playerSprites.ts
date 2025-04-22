import walk from '@/assets/sprites/walk'
import idle from '@/assets/sprites/idle'

export const loadPlayerSprites = async () => {
  const playerImages: Record<string, string> = {}

  // down
  for (let i = 0; i < 6; i++) {
    const { img, x, y, w, h } = walk[`down_${i}`]
    playerImages[`down_${i}`] = await extractTile(img, x, y, w, h)
  }
  // up
  for (let i = 0; i < 6; i++) {
    const { img, x, y, w, h } = walk[`up_${i}`]
    playerImages[`up_${i}`] = await extractTile(img, x, y, w, h)
  }
  // right
  for (let i = 0; i < 6; i++) {
    const { img, x, y, w, h } = walk[`right_${i}`]
    playerImages[`right_${i}`] = await extractTile(img, x, y, w, h)
    playerImages[`left_${i}`] = await extractTile(img, x, y, w, h)
  }

  // idle_down
  for (let i = 0; i < 4; i++) {
    const { img, x, y, w, h } = idle[`idle_down_${i}`]
    playerImages[`idle_down_${i}`] = await extractTile(img, x, y, w, h)
  }

  // idle_up
  for (let i = 0; i < 4; i++) {
    const { img, x, y, w, h } = idle[`idle_up_${i}`]
    playerImages[`idle_up_${i}`] = await extractTile(img, x, y, w, h)
  }

  // idle_right
  for (let i = 0; i < 4; i++) {
    const { img, x, y, w, h } = idle[`idle_right_${i}`]
    playerImages[`idle_right_${i}`] = await extractTile(img, x, y, w, h)
    playerImages[`idle_left_${i}`] = await extractTile(img, x, y, w, h)
  }

  return playerImages
}
