<template>
  <button
    class="c-button"
    :class="[
      `c-button__${props.type}`,
      props.plain && `c-button-plain__${props.type}`,
      props.disabled && 'c-button__disabled',
      props.round && 'c-button__rounded',
    ]"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { defineOptions, defineProps } from 'vue'
import type { CButtonProps } from './types/button.type'
import '@cooler-ui/styles/css/components/button/button.css'

defineOptions({
  name: 'CButton',
})
const props = withDefaults(defineProps<CButtonProps>(), {
  type: 'default',
})
</script>
