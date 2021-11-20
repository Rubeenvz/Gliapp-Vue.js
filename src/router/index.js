import Vue from "vue";
import VueRouter from "vue-router";
import Administradores from "../views/Administradores.vue";
import Administrador from "../views/Administrador.vue";
import AdministradorVer from "../views/AdministradorVer.vue";
import AdministradorCrear from "../views/AdministradorCrear.vue";
import AdministradorEditar from "../views/AdministradorEditar.vue";
import Mas from "../views/Mas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Administradores",
    component: Administradores
  },
  {
    path: "/administrador",
    name: "Administrador",
    component: Administrador,
    children: [
      {
        path: ':id',
        name: "Ver",
        component: AdministradorVer
      },
      {
        path: ':id/editar',
        name: "Editar",
        component: AdministradorEditar
      },
    ]
  },
  {
    path: "/crear",
    name: "Crear",
    component: AdministradorCrear
  },
  {
    path: "/mas",
    name: "Mas",
    component: Mas
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
