import { createRouter, createWebHistory } from "vue-router";
import Storage from "../components/Storage.vue";
import HomePage from "@/views/HomePage.vue";
import Deals from "@/views/Deals.vue";
import Favorite from "@/views/Favorite.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/deals",
      component: Deals,
    },
    {
      path: "/favorite",
      component: Favorite,
    },
  ],
});

export default router;
