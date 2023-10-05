import { RefSymbol } from '@vue/reactivity';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useSupabaseUser()
  watch(user, () => {    
    if (!user.value) {
      return navigateTo('/auth/login')
    }
  }, { immediate: true})
});
