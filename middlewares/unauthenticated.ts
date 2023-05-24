import { useUserStore } from '@/stores/UserStore'

export default defineNuxtRouteMiddleware((_) => {
  if (!process.client) {
    return
  }

  if (!useUserStore().isAuthenticated) {
    return
  }

  const route = useRoute()
  if (route.query.redirect) {
    return route.query.redirect.toString()
  }

  return '/'
})
