import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import ScrollAnimation from "./directives/scrollanimation";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.directive("scrollanimation", ScrollAnimation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
