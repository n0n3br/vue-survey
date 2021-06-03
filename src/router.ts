import { createRouter, createWebHashHistory } from "vue-router";
import useAuth from "./hooks/useAuth";
const auth = useAuth();

const authGuard = () => {
  if (!auth.isLoggedIn.value) return { name: "login" };
  return true;
};

const routes = [
  {
    name: "answer",
    path: "/answer/:id",
    component: () => import("./pages/Answer.vue"),
    beforeEnter: authGuard
  },
  {
    name: "create",
    path: "/create",
    component: () => import("./pages/Create.vue"),
    beforeEnter: authGuard
  },

  {
    name: "list",
    path: "/list",
    component: () => import("./pages/List.vue"),
    beforeEnter: authGuard
  },
  {
    name: "login",
    path: "/login",
    component: () => import("./pages/Login.vue")
  },
  {
    name: "loginError",
    path: "/login-error",
    component: () => import("./pages/LoginError.vue")
  },
  {
    name: "logout",
    path: "/logout",
    component: () => import("./pages/Logout.vue")
  },
  {
    name: "mine",
    path: "/mine",
    component: () => import("./pages/Mine.vue"),
    beforeEnter: authGuard
  },
  {
    path: "/",
    redirect: "/login"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
