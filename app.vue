<script setup lang="ts">
useSeoMeta({
  title: 'ポケミクファンサイト',
  ogTitle: 'ポケミクファンサイト',
  description:
    'ポケモン feat. 初音ミク Project VOLTAGE のファンサイトです。Youtubeの動画を掲載しています。',
  ogDescription:
    'ポケモン feat. 初音ミク Project VOLTAGE のファンサイトです。Youtubeの動画を掲載しています。',
  ogImage: '/assets/images/og.png',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: { lang: 'ja' },
})
</script>

<template>
  <NuxtPage />
</template>

<style>
body {
  background-color: color-mix(in srgb, #c0ffee, #fff 80%);
  font-family: 'Zen Kaku Gothic New', sans-serif;
}
</style>
