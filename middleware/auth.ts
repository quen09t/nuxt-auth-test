import { useCounterStore } from "~~/store/toto";

export default defineNuxtRouteMiddleware((to) => {
  // skip middleware on server
  console.log("laoooo");
  const counter = useCounterStore();
  console.log(counter.count);

  if (process.server) return;
  // skip middleware on client side entirely
  if (process.client) return;
  // or only skip middleware on initial client load
  const nuxtApp = useNuxtApp();
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
    return;
});
