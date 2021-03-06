const drawBackground = (background, context, sprites) => {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.drawTiles(background.tile, context, x, y);
      }
    }
  });
}

export const createBackgroundLayer = (backgrounds, sprites) => {
  const buffer = document.createElement('canvas')
  buffer.width = 256
  buffer.height = 240

  if (backgrounds.length > 0) {
    backgrounds.forEach(background => {
      drawBackground(background, buffer.getContext('2d'), sprites)
    })
  }

  return function drawBackgroundLayer(context) {
    context.drawImage(buffer, 0, 0)
  }
}

export const createSpriteLayer = (sprite, position) => {
  return function drawSpriteLayer(context) {
    for (let i = 0; i < 20; i++) {
      sprite.draw('idle', context, (position.x + i * 16), position.y)
    }
  }
}
