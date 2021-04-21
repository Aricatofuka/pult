import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import './assets/css/style.scss'
import './assets/css/translateelement.scss'
import './assets/css/fonts.scss'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.use(Toast, {});


// Vue.use(VueAxios, axios);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');