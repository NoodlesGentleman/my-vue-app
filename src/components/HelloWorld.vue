<script setup>
import Icon from '@components/Icon.vue'

defineProps({
  msg: String,
})

</script>

<template>
  {{ msg }}
  <br>
  <Icon icon="svg-icon:money" size="18"/>
  <br>
  <Icon icon="svg-icon:vue" size="20"/>

  <Icon icon="ep:aim" />
  <Icon icon="ep:alarm-clock" />
  <Icon icon="ep:baseball" />
  <Icon icon="ep:chat-line-round" />
</template>

<style scoped>

</style>
