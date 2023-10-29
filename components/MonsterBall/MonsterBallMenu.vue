import type { callbackify } from 'util'; import type { callbackify } from
'util'; import type { log } from 'console';
<script lang="ts" setup>
type Props = {
  isOpen: boolean
  isClose: boolean
}

defineProps<Props>()
</script>

<template>
  <ul class="monster-ball-menu-list">
    <li
      class="item"
      :class="{ 'is-open': isOpen && !isClose, 'is-close': isClose }"
      style="--index: 0"
    >
      <span>ピカチュウ</span>
    </li>
    <li
      class="item"
      :class="{ 'is-open': isOpen && !isClose, 'is-close': isClose }"
      style="--index: 1"
    >
      <span>ホゲータ</span>
    </li>
    <li
      class="item"
      :class="{ 'is-open': isOpen && !isClose, 'is-close': isClose }"
      style="--index: 2"
    >
      <span>ジラーチ</span>
    </li>
    <li
      class="item"
      :class="{ 'is-open': isOpen && !isClose, 'is-close': isClose }"
      style="--index: 3"
    >
      <span>シビビール</span>
    </li>
    <li
      class="item"
      :class="{ 'is-open': isOpen && !isClose, 'is-close': isClose }"
      style="--index: 4"
    >
      <span>ブラッキー</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
$ball_width: 60px;
$ball_height: 60px;

@scope (.monster-ball-menu-list) {
  .item {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    span {
      writing-mode: vertical-rl;
    }
    &.is-open {
      animation: fadeIn 0.5s ease-in-out forwards;
      &:nth-child(1) {
        animation-delay: 0s;
      }

      &:nth-child(2) {
        animation-delay: 0.25s;
      }

      &:nth-child(3) {
        animation-delay: 0.75s;
      }

      &:nth-child(4) {
        animation-delay: 1s;
      }

      &:nth-child(5) {
        animation-delay: 1.75s;
      }
    }
    &.is-close {
      animation: fadeOut 0.5s ease-in;
      &:nth-child(1) {
        animation-delay: 0s;
      }

      &:nth-child(2) {
        animation-delay: 0.1s;
      }

      &:nth-child(3) {
        animation-delay: 0.2s;
      }

      &:nth-child(4) {
        animation-delay: 0.3s;
      }

      &:nth-child(5) {
        animation-delay: 0.4s;
      }
    }
  }
}
@keyframes fadeIn {
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    --angle: calc(200deg + calc(140deg / 4 * var(--index)));
    --x: calc(cos(var(--angle)) * 108px);
    --y: calc(sin(var(--angle)) * 90px);
    translate: calc(var(--x) - 50%) calc(var(--y) - 50%);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    --angle: calc(200deg + calc(140deg / 4 * var(--index)));
    --x: calc(cos(var(--angle)) * 108px);
    --y: calc(sin(var(--angle)) * 90px);
    translate: calc(var(--x) - 50%) calc(var(--y) - 50%);
  }
  40% {
    translate: calc($ball_width / 2 * -1) calc($ball_height / 2 * -1);
  }
}
</style>
