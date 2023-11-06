export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@nuxt/image-edge',
    //  '@nuxtjs/storybook'
  ],

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})