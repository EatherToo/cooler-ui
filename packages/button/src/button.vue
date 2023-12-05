<template>
  <button
    class="c-button"
    @click="handleClick"
    :class="[
      `c-button__${props.type}`,
      props.plain && `c-button-plain__${props.type}`,
      (props.disabled || props.loading) && 'c-button__disabled',
      props.round && 'c-button__rounded',
    ]"
  >
    <CIcon
      :style="{
        marginRight: $slots.default ? '0.2em' : undefined,
      }"
      :class="
        props.loading && props.loadingPosition === 'left' && 'c-spin-animation'
      "
      :component="startIcon"
      v-if="startIcon"
      size="1.3em"
    />
    <slot />
    <CIcon
      :style="{
        marginLeft: $slots.default ? '0.2em' : undefined,
      }"
      :class="
        props.loading && props.loadingPosition === 'right' && 'c-spin-animation'
      "
      :component="endIcon"
      v-if="endIcon"
      size="1.3em"
    />
  </button>
</template>
<script setup lang="ts">
import { computed, defineOptions, defineProps } from 'vue'
import type { CButtonProps } from './types/button.type'
import CIcon from '@cooler-ui/icon'
import SpinnerIos20Filled from '@vicons/fluent/SpinnerIos20Filled'
import '@cooler-ui/styles/css/components/button/button.css'

defineOptions({
  name: 'CButton',
})
const props = withDefaults(defineProps<CButtonProps>(), {
  type: 'default',
  loadingPosition: 'left',
})
const handleClick = (e: MouseEvent) => {
  if (props.disabled) {
    e.stopPropagation()
    e.preventDefault()
    return
  }
}

const startIcon = computed(() => {
  console.log(props.loading, props.loadingPosition)
  if (props.loading && props.loadingPosition === 'left') {
    return SpinnerIos20Filled
  }
  return props.startIcon
})

const endIcon = computed(() => {
  if (props.loading && props.loadingPosition === 'right') {
    return SpinnerIos20Filled
  }
  return props.endIcon
})
</script>
