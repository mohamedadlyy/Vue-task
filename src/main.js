import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes';

import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
