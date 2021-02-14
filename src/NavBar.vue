<template>
  <nav class="navbar">
    <div class="navbar-end">
      <div class="buttons">
        <router-link class="button" to="/post/new"> New Post </router-link>
        <button class="button" @click="modal.showModal">Signup</button>
      </div>
    </div>
    <teleport to="#modal" v-if="modal.visible"> modal </teleport>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useModal } from './useModal'
export default defineComponent({
  setup() {
    return {
      modal: useModal(),
    }
  },
})
</script>
