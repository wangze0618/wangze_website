import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
const routes = [
  {
    path: "/",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
