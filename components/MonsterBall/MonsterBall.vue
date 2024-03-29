<script setup lang="ts">
// #region constants
const SHAKE_TIME = 3000
const HIDDEN_TIME = 1000
// #endregion

// #region reactive data
const isShake = ref(false)
const isOpen = ref(false)
const isClose = ref(false)
const isDisabled = ref(false)
const isLoaded = ref(false)
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
  isClose.value = true
  isDisabled.value = true
  setTimeout(() => {
    isOpen.value = false
    isClose.value = false
    isDisabled.value = false
  }, HIDDEN_TIME)
}
const shakeBall = () => {
  isShake.value = true
  isDisabled.value = true
  setTimeout(() => {
    isShake.value = false
    isDisabled.value = false
  }, SHAKE_TIME)
}
// #endregion

// #region lifecycle
onMounted(() => {
  isLoaded.value = true
})
// #endregion
</script>
<template>
  <div class="monster-ball-box" :class="{ 'is-load': isLoaded }">
    <button
      class="monster-ball-button"
      type="button"
      :aria-label="isOpen ? 'メニューを閉じる' : 'メニューを開く'"
      :aria-expanded="isOpen"
      :disabled="isDisabled"
      @click="onClick"
    >
      <div class="monster-ball" :class="{ 'is-shake': isShake }">
        <div class="top"></div>
        <div class="button"></div>
        <div class="bottom"></div>
      </div>
    </button>
    <MonsterBallMenu v-if="isOpen" :is-close="isClose" :is-open="isOpen" />
  </div>
</template>

<style lang="scss" scoped>
$border_color: #000;
$bg_color_top: #b72730;
$bg_color_bottom: #dcdbe0;
$ball_width: 60px;
$ball_height: 60px;
$button_size: 46cqmin;
$button_inner_size: 18cqmin;

.monster-ball-box {
  position: relative;
}

.monster-ball-button {
  position: relative;
  z-index: 1;
  transition: 0.25s;
  @media (hover) {
    &:hover {
      filter: brightness(1.1);
    }
  }
}
@scope (.monster-ball) {
  :scope {
    position: relative;
    width: $ball_width;
    height: $ball_height;
    border: 4px solid $border_color;
    border-radius: 50%;
    container-type: size;
    container-name: monsterBall;
  }
  @container monsterBall (width > 0px) {
    .top {
      background-color: color-mix(in srgb, $bg_color_top, black 10%);
      width: 100%;
      height: 50%;
      clip-path: circle(64% at bottom);
      border-bottom: 2px solid $border_color;
    }

    .bottom {
      background-color: $bg_color_bottom;
      width: 100%;
      height: 50%;
      clip-path: circle(64% at top);
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
}
.is-shake {
  animation: shake 1s ease 3;
}
.is-load {
  animation: roll 0.7s linear 3, move 2.1s linear;
}

@keyframes shake {
  0% {
    translate: 0;
    rotate: 0;
  }
  25% {
    translate: -10px 0;
    rotate: -30deg;
  }
  50% {
    translate: 10px 0;
    rotate: 30deg;
  }
  75% {
    translate: 0;
    rotate: 0;
  }
}
@keyframes move {
  0% {
    margin-left: 100vw;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    margin-left: 0;
  }
}
@keyframes roll {
  from {
    rotate: 360deg;
  }
  to {
    rotate: 0deg;
  }
}
</style>
