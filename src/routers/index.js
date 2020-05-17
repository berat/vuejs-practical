import Vue from "vue";
import Router from "vue-router";
import Home from "../components/pages/Home";
import Register from "../components/pages/Sidebar";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Home,
      children: [
        {
          path: "/sign-up",
          name: "register",
          component: Home
        }
      ]
    }
  ]
});

export default router;
