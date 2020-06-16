import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'intersection-observer' // Optional
import 'formdata-polyfill';
import BootstrapVue from 'bootstrap-vue';
import {BootstrapVueIcons} from 'bootstrap-vue';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'tui-chart/dist/tui-chart.css'


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
