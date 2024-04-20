import { createRouter, createWebHistory } from "vue-router";
import OTPView from "../views/OTPView.vue";
import SigninView from "../views/SigninView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/otp-verification",
      name: "login",
      component: OTPView,
    },
    {
      path: "/",
      name: "sign-in",
      component: SigninView,
    },
    // for lazy loading
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
  ],
});

export default router;
