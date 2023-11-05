<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
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
  <dialog ref="dialogRef">
    Dialog
    <button type="button" @click="onClose">close</button>
  </dialog>
</template>
