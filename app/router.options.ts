export default {
  scrollBehavior(to: any, from: any, savedPosition: any) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 30,
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
};
