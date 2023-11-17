export default defineNuxtConfig({
  modules: [
    //  '@nuxtjs/storybook'
    '@nuxt/image-edge',
    '@nuxtjs/robots',
    '@nuxtjs/google-fonts',
  ],

  devtools: {
    timeline: {
      enabled: true,
    },
  },
  googleFonts: {
    families: {
      'Zen+Kaku+Gothic+New': [400],
    },
  },
})
