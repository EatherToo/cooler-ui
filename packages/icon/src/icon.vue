<template>
  <Icon :color="props.color" :size="props.size" :tag="props.tag">
    <component v-if="!!props.component" :is="props.component" />
    <slot v-else />
  </Icon>
</template>
<script setup lang="ts">
import { CIconProps } from './types/icon.type'
import { defineOptions, defineProps } from 'vue'
import { Icon } from '@vicons/utils'

defineOptions({
  name: 'CIcon',
})
const props = defineProps<CIconProps>()
</script>
