const routes = [
  {
    path: "/",
    name: "travel-home",
    component: () => import("../views/home/home")
  },
  {
    path: "/city",
    name: "travel-city",
    component: () => import("../views/city/city")
  },
  {
    path: "/detail/:id",
    name: "travel-detail",
    component: () => import("../views/detail/detail")
  }
];

export default routes;
