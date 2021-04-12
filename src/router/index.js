import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/login"),
      meta: { isShowFooterTag: false },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/register"),
      meta: { isShowFooterTag: false },
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/home"),
      meta: { isShowFooterTag: true },
    },
    {
      path: "/order",
      name: "Order",
      component: () => import("../views/order"),
      meta: { isShowFooterTag: true },
      children: [
        {
          path: "all",
          name: "All",
          component: () => import("../views/order/all"),
        },
        {
          path: "daifukuan",
          name: "Daifukuan",
          component: () => import("../views/order/daifukuan"),
        },
        {
          path: "daifahuo",
          name: "Daifahuo",
          component: () => import("../views/order/daifahuo"),
        },
        {
          path: "daishouhuo",
          name: "Daishouhuo",
          component: () => import("../views/order/daishouhuo"),
        },
        {
          path: "daipingjia",
          name: "Daipingjia",
          component: () => import("../views/order/daipingjia"),
        },
      ],
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/cart"),
      meta: { isShowFooterTag: true },
    },
    {
      path: "/mine",
      name: "Mine",
      component: () => import("../views/mine"),
      meta: { isShowFooterTag: true },
      children: [
        {
          path: "address",
          name: "Address",
          component: () => import("../views/mine/address"),
        },
      ],
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: () => import("../views/detail"),
      meta: { isShowFooterTag: false },
    },
    {
      path: "/more",
      name: "More",
      component: () => import("../views/more"),
      meta: { isShowFooterTag: false },
      redirect: "/more/guide",
      children: [
        {
          path: "guide",
          name: "Guide",
          component: () => import("../views/more/guide"),
        },
        {
          path: "service",
          name: "Service",
          component: () => import("../views/more/service"),
        },
      ],
    },
  ],
  linkActiveClass: "active",
});

export default router;
