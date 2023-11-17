<script lang="ts" setup>
// #region types
type Props = {
  isOpen: boolean
  isClose: boolean
}
// #endregion

defineProps<Props>()

// #region reactive data
const distMenuList = ref(
  menuList.map((item) => {
    return {
      ...item,
      isClick: false,
    }
  })
)
// #endregion

// #region methods
const onClick = (index: number) => {
  distMenuList.value[index].isClick = true
}
// #endregion
</script>

<template>
  <ul class="monster-ball-menu-list">
    <li
      v-for="(item, index) in distMenuList"
      :key="index"
      class="item"
      :class="{ 'is-open': isOpen && !isClose, 'is-close': isClose }"
      :style="{ '--index': index }"
    >
      <button type="button" class="button" @click="onClick(index)">
        <img :src="item.path" :alt="`サムネイル ${item.title}`" />
      </button>
      <VideoDialog v-model="item.isClick" :url="item.url" :title="item.title" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
$ball_width: 60px;
$ball_height: 60px;

@scope (.monster-ball-menu-list) {
  @container layout (max-width:100vw) {
    .item {
      position: absolute;
      width: clamp(120px, 20vw, 300px);
      top: 50%;
      left: 50%;
      opacity: 0;
      transition: 0.25s;
      img {
        width: 100%;
      }
      @media (hover) {
        &:hover {
          z-index: 1;
          scale: 1.5;
        }
      }
      @supports selector(:has(*)) {
        &:has(.button:focus-visible) {
          z-index: 1;
          scale: 1.5;
        }
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
}

@mixin fadeTranslate() {
  --angle: calc(200deg + calc(140deg / 4 * var(--index)));
  --x: calc(cos(var(--angle)) * clamp(120px, 20vw, 300px));
  --y: calc(sin(var(--angle)) * clamp(120px, 20vw, 300px));
  translate: calc(var(--x) - 50%) calc(var(--y) - 50%);
}

@keyframes fadeIn {
  0% {
    width: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    @include fadeTranslate();
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    @include fadeTranslate();
  }
  40% {
    opacity: 0;
  }
  45% {
    width: 0;
    translate: calc($ball_width / 2 * -1) calc($ball_height / 2 * -1);
  }
}
</style>
