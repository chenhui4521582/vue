/*
 *   Component
 */
import Home from "../views/home/Home.vue";
import childBox from "./childBox";

import mixin from "../views/common/mixin.vue";
import directive from "../views/common/directive.vue";
import modal from "../views/common/modal.vue";
import toast from "../views/common/toast.vue";
import filters from "../views/common/filters.vue";
import vueSwitch from "../views/common/vueSwitch.vue";

import mapState from "../views/vuex/mapState.vue";
import mapMutations from "../views/vuex/mapMutations.vue";
import mapActions from "../views/vuex/mapActions.vue";
import mapGetters from "../views/vuex/mapGetters.vue";
import module from "../views/vuex/module.vue";

import slot from "../views/vue/v-slot/v-slot.vue";
import vModel from "../views/vue/v-model/v-model.vue";
import vComponent from "../views/vue/v-component/v-component.vue";
import vTransition from "../views/vue/v-transition/v-transition.vue";
import vCreateElement from "../views/vue/v-createElement/v-createElement";

import examplesSelectPage from "../views/examples/select-page/selectPage.vue";
import loginEnter from "../views/examples/login-enter/LoginEnter.vue";
import my from "../views/examples/login-enter/components/my.vue";
import login from "../views/examples/login-enter/components/login.vue";
import examplesCountdown from "../views/examples/countdown/countdown.vue";
import examplesIframe from "../views/examples/iframe/iframe.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/vuex",
    component: childBox,
    children: [
      {
        path: "/vuex/mapState",
        name: "mapState",
        component: mapState
      },
      {
        path: "/vuex/mapMutations",
        name: "mapMutations",
        component: mapMutations
      },
      {
        path: "/vuex/mapActions",
        name: "mapActions",
        component: mapActions
      },
      {
        path: "/vuex/mapGetters",
        name: "mapGetters",
        component: mapGetters
      },
      {
        path: "/vuex/module",
        name: "module",
        component: module
      }
    ]
  },
  {
    path: "/common",
    component: childBox,
    children: [
      {
        path: "/common/mixin",
        name: "mixin",
        component: mixin
      },
      {
        path: "/common/modal",
        name: "modal",
        component: modal
      },
      {
        path: "/common/toast",
        name: "toast",
        component: toast
      },
      {
        path: "/common/filters",
        name: "filters",
        component: filters
      },
      {
        path: "/common/switch",
        name: "vueSwitch",
        component: vueSwitch
      },
      {
        path: "/common/directive",
        name: "directive",
        component: directive
      }
    ]
  },
  {
    path: "/vue",
    component: childBox,
    children: [
      {
        path: "/vue/v-slot",
        name: "v-slot",
        component: slot
      },
      {
        path: "/vue/vmodel",
        name: "v-model",
        component: vModel
      },
      {
        path: "/vue/v-component",
        name: "v-component",
        component: vComponent
      },
      {
        path: "/vue/v-transition",
        name: "v-transition",
        component: vTransition
      },
      {
        path: "/vue/v-createElement",
        name: "v-createElement",
        component: vCreateElement
      }
    ]
  },
  {
    path: "/examples",
    component: childBox,
    children: [
      {
        path: "/examples/selectPage",
        name: "examples-selectPage",
        component: examplesSelectPage
      },
      {
        path: "/examples/loginEnter/",
        component: childBox,
        children: [
          { path: "/", name: "loginEnter", component: loginEnter },
          {
            path: "/examples/loginEnter/my",
            name: "my",
            component: my,
            meta: { login: true }
          },
          {
            path: "/examples/loginEnter/login",
            name: "login",
            component: login,
            meta: { login: true }
          }
        ]
      },
      {
        path: "/examples/countdown",
        name: "examples-countdown",
        component: examplesCountdown
      },
      {
        path: "/examples/iframe",
        name: "examples-iframe",
        component: examplesIframe
      }
    ]
  }
];
export default routes;
