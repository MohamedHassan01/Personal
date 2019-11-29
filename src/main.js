import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue";
import PortalVue from "portal-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faUser, faPollH, faBriefcase, faBlog, faPhoneSquareAlt, faMobileAlt, faHockeyPuck, faCode, faPenNib, faTasks, faShoppingCart, faTimes, faCogs, faAddressBook, faMailBulk, faMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebookF, faTwitter, faYoutube, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

import VuePageTransition from "vue-page-transition";

import AOS from "aos";
import "aos/dist/aos.css";

import "./scss/main.scss";

Vue.use(BootstrapVue);
Vue.use(PortalVue);

library.add(faHome, faUser, faPollH, faBriefcase, faBlog, faPhoneSquareAlt, faFacebookF, faTwitter, faYoutube, faLinkedinIn, faInstagram, faMobileAlt, faHockeyPuck, faCode, faPenNib, faTasks, faShoppingCart, faTimes, faCogs, faAddressBook, faMailBulk, faMarker);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VuePageTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
