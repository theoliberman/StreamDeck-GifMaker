import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    giphyApiKey: process.env.GIPHY_API_KEY
  },
  modules: ["@inkline/nuxt"],
  inkline: { colorMode: "dark" }
})