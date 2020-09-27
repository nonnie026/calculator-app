import Vue from "vue";
import VueRouter from "vue-router";
import Playground from "../views/Playground.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Playground",
    component: Playground
  },
  {
    path: "/how-to",
    name: "HowTo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HowTo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
