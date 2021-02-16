<template>
  <nav class="navbar">
    <div class="navbar-end">
      <div class="buttons" v-if="authenticated">
        <router-link class="button" to="/post/new"> New Post </router-link>
        <button class="button" @click="">Sign out</button>
      </div>
      <div class="buttons" v-else>
        <button class="button" @click="signin">Sing in</button>
        <button class="button" @click="signup">Signup</button>
      </div>
    </div>
    <teleport to="#modal" v-if="modal.visible">
      <component :is="component" />
    </teleport>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, markRaw } from 'vue'
import { useStore } from './store'
import { useModal } from './useModal'
import Signup from './Signup.vue'
export default defineComponent({
  setup() {
    const modal = useModal()
    const store = useStore()

    const authenticated = computed(() => store.getState().authors.currentUserId)
    const signup = () => {
      modal.component.value = markRaw(Signup)
      modal.showModal()
    }
    const signin = () => {
      modal.showModal()
      // make signIn component
      // modal.component.value = markRaw(Signin)
    }
    return {
      component: modal.component,
      modal,
      authenticated,
      signup,
      signin,
    }
  },
})
</script>
