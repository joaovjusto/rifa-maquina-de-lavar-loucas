import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import ElementUI from "element-ui";
import "./styles.scss";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import VueCarousel from "vue-carousel";
import VuePictureSwipe from "vue-picture-swipe";
import VueTheMask from "vue-the-mask";

Vue.component("vue-picture-swipe", VuePictureSwipe);
Vue.use(VuePictureSwipe);
Vue.use(VueCarousel);
Vue.use(VueTheMask);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
