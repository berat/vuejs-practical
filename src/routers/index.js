import Vue from "vue";
import Router from "vue-router";
import Home from "../components/pages/Home";
import Profile from "../components/pages/Profile";

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
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: Profile
    }
  ]
});

export default router;
