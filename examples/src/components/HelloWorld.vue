<script setup lang="ts">
import CButton from '@cooler-ui/button/src/button.vue'
import { Alarm } from '@vicons/ionicons5'
</script>

<template>
  <div>
    <CButton>Default</CButton>
    <CButton type="primary">Primary</CButton>
    <CButton type="warning">Warning</CButton>
    <CButton type="success">Success</CButton>
    <CButton type="info">Info</CButton>
    <CButton type="danger">Danger</CButton>
  </div>
  <div>
    <CButton plain>Default</CButton>
    <CButton type="primary" plain>Primary</CButton>
    <CButton type="warning" plain>Warning</CButton>
    <CButton type="success" plain>Success</CButton>
    <CButton type="info" plain>Info</CButton>
    <CButton type="danger" plain>Danger</CButton>
  </div>
  <div>
    <CButton round>Default</CButton>
    <CButton type="primary" round>Primary</CButton>
    <CButton type="warning" round>Warning</CButton>
    <CButton type="success" round>Success</CButton>
    <CButton type="info" round>Info</CButton>
    <CButton type="danger" round>Danger</CButton>
  </div>
  <div>
    <CButton round disabled>Default</CButton>
    <CButton type="primary" plain disabled>Primary</CButton>
    <CButton type="warning" round disabled>Warning</CButton>
    <CButton type="success" round disabled>Success</CButton>
    <CButton type="info" plain disabled>Info</CButton>
    <CButton type="danger" round disabled>Danger</CButton>
  </div>
  <div>
    <CButton type="primary" :startIcon="Alarm" />
    <CButton type="primary" :startIcon="Alarm" round />
    <CButton type="primary" :startIcon="Alarm"> Alarm </CButton>
    <CButton type="primary" :startIcon="Alarm" loading> Alarm </CButton>
    <CButton type="primary" :startIcon="Alarm" loading loadingPosition="right">
      Alarm
    </CButton>
  </div>
</template>

<style scoped></style>
