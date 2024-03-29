import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import NewPost from './NewPost.vue'
import ShowPost from './ShowPost.vue'
import EditPost from './EditPost.vue'
import { store } from './store'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'ShowPost',
    path: '/post/:id',
    component: ShowPost,
  },
  {
    name: 'NewPost',
    path: '/post/new',
    component: NewPost,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'EditPost',
    path: '/post/:id/edit',
    component: EditPost,
    meta: {
      requiresAuth: true,
    },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export const makeRouter = () =>
  createRouter({
    history: createWebHistory(),
    routes,
  })

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getState().authors.currentUserId) {
    next({
      name: 'Home',
    })
  } else {
    next()
  }
})
