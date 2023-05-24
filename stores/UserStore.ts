import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => {
    return {
      isAuthenticated: false,
      user: {},
      failedRefreshAttempts: 0,
      access_token: undefined,
      refresh_token: undefined,
      country: ''
    }
  },
  actions: {
    logout () {
      this.isAuthenticated = false
      this.user = {}
      this.country = ''
    }
  },
  persist: true
})
