export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    console.error(error, instance, info);
  };

  // Also possible
  nuxtApp.hook("vue:error", (error, instance, info) => {
    console.error(error, instance, info);
  });
});
