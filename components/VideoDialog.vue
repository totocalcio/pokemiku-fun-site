<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  url: string
  title: string
}>()
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

// #region reactive data
const dialogRef = ref<HTMLDialogElement | null>(null)
// #endregion

// #region methods
const openDialog = () => {
  dialogRef.value?.showModal()
}

const onClose = () => {
  dialogRef.value?.close()
  emits('update:modelValue', false)
}
// #endregion

// #region lifecycle
watch(
  () => props.modelValue,
  (isCLick) => {
    if (isCLick) {
      openDialog()
    }
  }
)
// #endregion
</script>

<template>
  <dialog ref="dialogRef" class="youtube-dialog">
    <iframe
      autofocus
      class="iframe"
      :src="url"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <button type="button" class="button" @click="onClose">✕</button>
  </dialog>
</template>

<style lang="scss" scope>
.youtube-dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}
@scope (.youtube-dialog) {
  :scope {
    padding: 0;
    width: 80vw;
    &[open] {
      display: flex;
      flex-direction: column;
      animation: fadeIn 0.5s ease-in-out forwards;
    }
    @media (width < 768px) {
      width: 90vw;
    }
  }
  .iframe {
    aspect-ratio: 16/9;
  }
  .button {
    position: fixed;
    right: 1em;
    top: 1em;
    font-size: 1.5rem;
    background-color: #fff;
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    line-height: 1;
    transition: 0.25s;
    &:hover {
      filter: brightness(0.9);
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
