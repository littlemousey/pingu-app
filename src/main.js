import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store/store.js";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(ElementUI);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
