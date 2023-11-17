export default defineNuxtConfig({
  ssr: false,

  modules: [//  '@nuxtjs/storybook'
  '@nuxt/image-edge', '@nuxtjs/robots'],

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})