import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  // {
  //   path: "/",
  //   component: () => import(""),
  // },
  {
    path: "/",
    component: () => import("@/modules/estudiante/pages/ConsultaEstudiante"),
  },
  {
    path: "/insertar",
    component: () => import("@/modules/estudiante/pages/GuardaEstudiante"),
  },
  {
    path: "/actualizar",
    component: () => import("@/modules/estudiante/pages/ActualizarEstudiante"),
  },
  {
    path: "/eliminar",
    component: () => import("@/modules/estudiante/pages/EliminarEstudiante"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;