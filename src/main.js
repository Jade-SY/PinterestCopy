import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import './plugins/axios';
import "./fontAwesomeIcon.js";

import {
  VueMasonryPlugin
} from 'vue-masonry';

Vue.use(VueMasonryPlugin)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");