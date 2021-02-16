<template>
  <router-link :to="to" class="panel-block" data-test="post">
    <div>
      <a>{{ post.title }}</a>
      <div>{{ post.created.format('Do MMM') }}</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Post } from './types'
export default defineComponent({
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
  setup(props) {
    return {
      to: `post/${props.post.id}`,
    }
  },
})
</script>

// TODO: write test for this component
