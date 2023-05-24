import { useUserStore } from '@/stores/UserStore'

export default defineNuxtRouteMiddleware((_) => {
  if (!process.client) {
    return
  }

  if (useUserStore().isAuthenticated) {
    return
  }

  return '/auth/sign-in'
})
