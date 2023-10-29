<script setup lang="ts">
// #region constants
const SHAKE_TIME = 3000
// #endregion

// #region reactive data
const isShake = ref(false)
const isOpen = ref(false)
// #endregion

// #region private methods
const onClick = () => {
  if (isOpen.value) {
    onClose()
    return
  }
  onOpen()
}
const onOpen = () => {
  isOpen.value = true
  shakeBall()
}
const onClose = () => {
  isOpen.value = false
}
const shakeBall = () => {
  isShake.value = true
  setTimeout(() => {
    isShake.value = false
  }, SHAKE_TIME)
}
// #endregion
</script>
<template>
  <div class="monster-ball-box">
    <button
      class="monster-ball-button"
      type="button"
      :aria-label="isOpen ? 'メニューを閉じる' : 'メニューを開く'"
      :aria-expanded="isOpen"
      @click="onClick"
    >
      <div class="monster-ball" :class="{ 'is-shake': isShake }">
        <div class="top"></div>
        <div class="button"></div>
        <div class="bottom"></div>
      </div>
    </button>
    <MonsterBallMenu v-if="isOpen" v-model:isOpen="isOpen" />
  </div>
</template>

<style lang="scss" scoped>
$border_color: #000;
$bg_color_top: #b72730;
$bg_color_bottom: #dcdbe0;
$ball_width: 60px;
$ball_height: 60px;
$button_size: 45cqmin;
$button_inner_size: 18cqmin;

.monster-ball-box {
  position: relative;
}

.monster-ball-button {
  position: relative;
  z-index: 1;
}
@scope (.monster-ball) {
  :scope {
    position: relative;
    width: $ball_width;
    height: $ball_height;
    border: 4px solid $border_color;
    border-radius: 50%;
    container-type: size;
    &:hover {
      cursor: pointer;
    }
  }
  .top {
    background-color: color-mix(in srgb, $bg_color_top, black 10%);
    width: 100%;
    height: 50%;
    border-radius: 100% 100% 0 0;
    clip-path: circle(63% at bottom);
    border-bottom: 2px solid $border_color;
  }

  .bottom {
    background-color: $bg_color_bottom;
    width: 100%;
    height: 50%;
    border-radius: 0 0 100% 100%;
    clip-path: circle(63% at top);
    border-top: 2px solid $border_color;
  }

  .button {
    background-color: $bg_color_bottom;
    width: $button_size;
    height: $button_size;
    border-radius: 50%;
    border: 4px solid $border_color;
    position: absolute;
    top: calc(50% - ($button_size / 2));
    left: calc(50% - ($button_size / 2));
    z-index: 1;

    &::before {
      content: '';
      border: 3px solid $border_color;
      background-color: $bg_color_bottom;
      width: $button_inner_size;
      height: $button_inner_size;
      border-radius: 50%;
      position: absolute;
      top: calc(50% - ($button_inner_size / 2));
      left: calc(50% - ($button_inner_size / 2));
    }
  }
}
.is-shake {
  animation: shake 1s ease 3;
}

@keyframes shake {
  0% {
    translate: 0;
    rotate: 0;
  }
  25% {
    translate: 10px 0;
    rotate: 30deg;
  }
  50% {
    translate: -10px 0;
    rotate: -30deg;
  }
  75% {
    translate: 0;
    rotate: 0;
  }
}
</style>
