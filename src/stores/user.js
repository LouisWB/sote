import {defineStore} from 'pinia'
import {loginGithubApp} from '@/utils/githubApi'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '未登录',
  }),
  actions: {
    login:loginGithubApp,
  },
})