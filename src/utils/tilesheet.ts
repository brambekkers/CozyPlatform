const loadImage = async (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous' // Handle CORS if needed
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = src
  })
}

const processImage = (
  img: HTMLImageElement,
  tileX: number,
  tileY: number,
  tileWidth: number,
  tileHeight: number,
) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = tileWidth
  canvas.height = tileHeight

  // Calculate pixel positions
  const sourceX = tileX * tileWidth
  const sourceY = tileY * tileHeight

  // Draw the specific portion of the tilesheet to our canvas
  ctx!.drawImage(
    img,
    sourceX,
    sourceY,
    tileWidth,
    tileHeight, // Source rectangle
    0,
    0,
    tileWidth,
    tileHeight, // Destination rectangle
  )

  // Return as data URL
  return canvas.toDataURL('image/png')
}

export const extractTile = async (
  tilesheet: string,
  tileX = 0,
  tileY = 0,
  tileWidth = 16,
  tileHeight = 16,
): Promise<string> => {
  try {
    const img = await loadImage(tilesheet)
    const dataUrl = processImage(img, tileX, tileY, tileWidth, tileHeight)
    return dataUrl
  } catch (error) {
    throw error
  }
}
