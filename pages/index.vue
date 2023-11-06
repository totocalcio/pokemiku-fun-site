<script lang="ts" setup></script>

<template>
  <div class="layout">
    <HeadlineComponent />
    <MonsterBall label="Click me!" />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: grid;
  height: 100svh;
  place-content: center;
  container-type: inline-size;
  container-name: layout;
}
</style>
<style>
@import url('~/assets/css/destyle.css') layer(base);
</style>
