import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/authentification/Login.vue")
  }, {
    path: "/search",
    name: "Search",
    component: () => import("../views/customer/Search.vue")
  },

  {
    path: "/signup",
    name: "Register",
    component: () => import("../views/authentification/Register.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/customer/Cart.vue")
  },
  {
    path: "/details/:id",
    name: "Product",
    component: () => import("../views/Product.vue")
  },

  {
    path: "/men",
    name: "Men",

    component: () =>
      import("../views/Men.vue"),
  },

  {
    path: "/women",
    name: "Women",

    component: () =>
      import("../views/Women.vue"),
  },

  {
    path: "/kids",
    name: "Kids",

    component: () =>
      import("../views/Kids.vue"),
  },

  {
    path: "/electronics",
    name: "Electronics",

    component: () =>
      import("../views/Electronics.vue"),
  },

  {
    path: "/kitchen",
    name: "Kitchen",

    component: () =>
      import("../views/Kitchen.vue"),
  },
  {
    path: "/unique-collections",
    name: "UniqueCollections",

    component: () =>
      import("../views/UniqueCollections.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/customer/Checkout.vue"),

  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
