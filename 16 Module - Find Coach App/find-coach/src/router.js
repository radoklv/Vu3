import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./pages/NotFound";
import CoachDeatail from "./pages/coaches/CoachDeatail";
import CoachesList from "./pages/coaches/CoachesList";
import CoachRegistration from "./pages/coaches/CoachRegistration";
import RequestsRecieved from "./pages/requests/RequestsRecieved";
import ContactCoach from "./pages/requests/ContactCoach";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDeatail,
      props: true,
      children: [{ path: "contact", component: ContactCoach, props: true }],
    },
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: RequestsRecieved },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
