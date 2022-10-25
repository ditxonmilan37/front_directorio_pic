import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/proveedores/:idCategoria/:categoria",
    name: "proveedores",
    component: () =>
      import("../views/Proveedores.vue"),
  },
  {
    path: "/detalle/proveedor/:idCategoria/:categoria/:idProveedor/:proveedor/:logo/:status",
    name: "detalleproveedor",
    component: () =>
      import("../views/DetalleProveedor.vue"),
  },
  {
    path: "/detalle/producto/:idProducto/:status",
    name: "detalleproducto",
    component: () =>
      import("../views/DetalleProducto.vue"),
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: () =>
      import("../views/Carrito.vue"),
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 100)
    })
  },
  mode: 'history',
  routes,
});

export default router;
