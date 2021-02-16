<template>
  <PostWriter :post="post" @save="save" />
</template>

<script lang="ts">
import moment from 'moment'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import PostWriter from './PostWriter.vue'
import { useStore } from './store'
import { Post } from './types'

export default defineComponent({
  name: 'NewPost',
  components: {
    PostWriter,
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const post: Post = {
      id: -1,
      title: 'New Post',
      markdown: '## New Post \nEnter your post here',
      html: '',
      created: moment(),
      // exclamation tells typescript what it's not gonna be null 
      authorId: parseInt(store.getState().authors.currentUserId!, 10),
    }

    const save = async (post: Post) => {
      await store.createPost(post)
      router.push('/')
    }
    return {
      post,
      save,
    }
  },
})
</script>
