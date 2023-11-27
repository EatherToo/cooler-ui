<template>
  <button class="c-button" :class="[`c-button__${props.type}`]">
    <slot />
  </button>
</template>
<script setup lang="ts">
import { defineOptions, defineProps } from 'vue'
import type { CButtonProps } from './types/button.type'
defineOptions({
  name: 'CButton',
})
const props = withDefaults(defineProps<CButtonProps>(), {
  type: 'primary',
})
import '@cooler-ui/styles/css/components/button/button.css'
</script>
