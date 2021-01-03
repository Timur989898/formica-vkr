import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import { firestorePlugin } from 'vuefire'
import store from '@/store';
// eslint-disable-next-line no-unused-vars
import {db} from '@/db';

Vue.config.productionTip = false

Vue.use(ArgonDashboard);
Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
