import Vue from "vue";
import Router from "vue-router";
import Home from "../components/pages/Home";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Home
    }
  ]
});

export default router;
