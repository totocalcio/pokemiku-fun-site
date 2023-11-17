<template>
  <header>
    <HeadlineComponent />
  </header>
  <main class="layout">
    <MonsterBall label="Click me!" />
    <div class="warning">
      使用しているブラウザ環境では見えません。最新のChromeなら多分見れます。
    </div>
  </main>
</template>

<style lang="scss" scoped>
.warning {
  color: red;
}
@scope (html) {
  .warning {
    display: none;
  }
}
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
