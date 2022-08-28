export default defineEventHandler(async (event) => {
    const config = await useRuntimeConfig()
    const query = useQuery(event)
    const GIPHY_URL = `https://api.giphy.com/v1/gifs/random?api_key=${config.giphyApiKey}`
    const response = await fetch(GIPHY_URL + `&tag=${query.tag}`)
    const data = await response.json()
    return { gif: `https://i.giphy.com/media/${data.data.id}/giphy.gif` }
})