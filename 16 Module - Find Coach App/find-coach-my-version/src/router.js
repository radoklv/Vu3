import { createRouter, createWebHistory } from "vue-router";

import Coaches from "./pages/coaches/CoachesList";
import Requests from "./pages/requests/Requests";
import CoachDetails from "./pages/coaches/CoachDetails";
import CoachRegistration from "./pages/coaches/CoachRegistration";
import ContactCoach from "./pages/requests/ContactCoach";
import UserAuth from "./pages/auth/UserAuth";
import store from "./store/index";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",

  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: Coaches },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [{ path: "contact", component: ContactCoach, props: true }],
      meta: { requireAuth: true },
    },
    { path: "/requests", component: Requests, meta: { requiresAuth: true } },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/registration", component: CoachRegistration },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});
export default router;
