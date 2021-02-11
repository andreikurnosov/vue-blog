<template>
  <Timeline />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timeline from './Timeline.vue'

export default defineComponent({
  name: 'App',
  components: {
    Timeline,
  },
})
</script>
