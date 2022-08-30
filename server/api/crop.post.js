import sharp from "sharp"

function getDim(model) {
  if (model === 1) return { width: 360, height: 216 }
  if (model === 2) return { width: 576, height: 288 }
  if (model === 3) return { width: 216, height: 144 }
}

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const response = await fetch(body.gif)
  const buffer = await response.arrayBuffer()
  const dim = getDim(body.model)
  const resized_gif = await sharp(Buffer.from(buffer), { animated: true })
    .resize({ width: dim.width, height: dim.height, fit: "fill" }).toBuffer()
  const gifs = []
  for (let top = 0; top < dim.height; top += 72) {
    for (let left = 0; left < dim.width; left += 72) {
      const gif = await sharp(resized_gif, { animated: true })
        .extract({ left: left, top: top, width: 72, height: 72 }).toBuffer()
      gifs.push(gif.toString('base64'))
    }
  }
  const small_gif = await sharp(Buffer.from(buffer), { animated: true })
    .resize({ width: 72, height: 72, fit: "fill" }).toBuffer()
  return { gifs: gifs, small_gif: small_gif.toString("base64") }
})