import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
<<<<<<< HEAD
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ('../views/login'),
            meta: { isShowFooterTag: false }
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ('../views/register'),
            meta: { isShowFooterTag: false }
        },
        {
            path: '/home',
            name: 'Home',
            component: () =>
                import ('../views/home'),
            meta: { isShowFooterTag: true }
        },
        {
            path: '/order',
            name: 'Order',
            component: () =>
                import ('../views/order'),
            meta: { isShowFooterTag: true },
            children: [{
                    path: 'all',
                    name: 'All',
                    component: () =>
                        import ('../views/order/all'),
                },
                {
                    path: 'daifukuan',
                    name: 'Daifukuan',
                    component: () =>
                        import ('../views/order/daifukuan'),
                },
                {
                    path: 'daifahuo',
                    name: 'Daifahuo',
                    component: () =>
                        import ('../views/order/daifahuo'),
                },
                {
                    path: 'daishouhuo',
                    name: 'Daishouhuo',
                    component: () =>
                        import ('../views/order/daishouhuo'),
                },
                {
                    path: 'daipingjia',
                    name: 'Daipingjia',
                    component: () =>
                        import ('../views/order/daipingjia'),
                },
                {
                    path: 'twodetail',
                    name: 'Twodetail',
                    component: () =>
                        import ('../views/order/detail'),
                },
            ]
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () =>
                import ('../views/cart'),
            meta: { isShowFooterTag: true }
        },
        {
            path: '/mine',
            name: 'Mine',
            component: () =>
                import ('../views/mine'),
            meta: { isShowFooterTag: true },
        },
        {
            path: '/address',
            name: 'Address',
            component: () =>
                import ('../views/address'),
            meta: { isShowFooterTag: false },
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: () =>
                import ('../views/detail'),
            meta: { isShowFooterTag: false }
        },
        {
            path: '/more',
            name: 'More',
            component: () =>
                import ('../views/more'),
            meta: { isShowFooterTag: false },
            redirect: '/more/guide',
            children: [{
                    path: 'guide',
                    name: 'Guide',
                    component: () =>
                        import ('../views/more/guide'),
                },
                {
                    path: 'service',
                    name: 'Service',
                    component: () =>
                        import ('../views/more/service'),
                },
            ]
        },
    ],
    linkActiveClass: 'active'
})
=======
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
    },
    {
      path: "/address",
      name: "Address",
      component: () => import("../views/address"),
      meta: { isShowFooterTag: false },
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
>>>>>>> 072c67bde564900563ac9c33c7c466db5f2f910f

export default router;
