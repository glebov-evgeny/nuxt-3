import { useUserStore } from '~/store/user';

export default defineNuxtRouteMiddleware(({ currentUser = useUserStore() }) => {
  if (!currentUser.uid) {
    return navigateTo('/authorization');
  }
});
