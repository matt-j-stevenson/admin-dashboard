import Vue from 'vue';
import store from './store';
import App from './App.vue';
import router from './router/router';
import 'vue-ionicons/ionicons.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
