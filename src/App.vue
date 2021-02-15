<template>
  <div class="modal" :style="style">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div id="modal"></div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="modal.hideModal"
    ></button>
  </div>
  <div class="section">
    <div class="container">
      <NavBar />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import NavBar from './NavBar.vue'
import FormInput from './FormInput.vue'
import { useModal } from './useModal'
import { required, length, validate, Status } from './validators'
import { provideStore } from './store'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FormInput,
  },
  setup() {
    provideStore()
    const modal = useModal()
    const username = ref('username')
    const usernameStatus = computed<Status>(() => {
      return validate(username.value, [required()])
    })

    const style = computed(() => ({
      display: modal.visible.value ? 'block' : 'none',
    }))

    return {
      modal,
      style,
      username,
    }
  },
})
</script>
