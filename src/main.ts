import { createApp } from 'vue'
import axios from 'axios'
import * as mockData from './mocks'
import { router } from './router'
import 'highlight.js/styles/solarized-dark.css'
import random from 'lodash/random'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))
// @ts-ignore
axios.get = async (url: string) => {
  if (url === '/posts') {
    await delay(1000)
    return Promise.resolve({
      data: [mockData.todayPost, mockData.thisWeek, mockData.thisMonth],
    })
  }
}

// @ts-ignore
axios.post = async (url: string, payload: Post) => {
  if (url === '/posts') {
    await delay(1000)
    const id = random(100, 10000)
    return Promise.resolve({
      data: { id, ...payload },
    })
  }
  if (url === '/users') {
    await delay(1000)
    const id = random(100, 10000)
    const {id: oldId, password, ...rest } = payload
    return Promise.resolve({
      data: { id, ...rest },
    })
  }
}

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
