import sharp from "sharp"

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const response = await fetch(body.gif)
  const buffer = await response.arrayBuffer()
  const resized_gif = await sharp(Buffer.from(buffer), { animated: true })
    .resize({ width: 360, height: 216, fit: "fill" }).toBuffer()
  const gifs = []
  for (let top = 0; top < 216; top += 72) {
    for (let left = 0; left < 360; left += 72) {
      const gif = await sharp(resized_gif, { animated: true })
        .extract({ left: left, top: top, width: 72, height: 72 }).toBuffer()
      gifs.push(gif.toString('base64'))
    }
  }
  const small_gif = await sharp(Buffer.from(buffer), { animated: true })
    .resize({ width: 72, height: 72, fit: "fill" }).toBuffer()
  return { gifs: gifs, small_gif: small_gif.toString("base64") }
})