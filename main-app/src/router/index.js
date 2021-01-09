import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/layout/Layout";
Vue.use(VueRouter);

export const constantRouterMap = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  // {
  //   path: "/404",
  //   component: () => import("@/views/404"),
  //   hidden: true
  // },
  {
    path: "",
    component: Layout,
    redirect: "/dashboard",
    icon: "home",
    noDropdown: true,
    children: [
      {
        name: "首页",
        path: "dashboard",
        component: () => import("@/views/dashboard/index")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({
    y: 0
  }), // 后退后页面位置
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

export default router;
