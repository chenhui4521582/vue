import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { Cookie } from "@util/util";

Vue.use(Router);
const vueRouter = new Router({
  routes
});

vueRouter.beforeEach((to, from, next) => {
  let formWorld = to.path || "";
  let needLogin = to.meta.login ? to.meta.login : false;
  let isLogin = Cookie.get("user");
  if (needLogin) {
    if (isLogin) {
      next();
    } else {
      next({ path: "/examples/loginEnter/login", query: { formWorld } });
    }
  } else {
    next();
  }
});
vueRouter.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default vueRouter;
