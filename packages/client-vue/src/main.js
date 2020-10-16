
import Vue from 'vue'
import VueRouter from 'vue-router';

// import axios from 'axios';
// import VueAxios from 'vue-axios';

import App from './App.vue'
import UserList from './components/UserList';


Vue.config.productionTip = false

// Vue.use( VueAxios, axios );
Vue.use( VueRouter );

const routes = [
  { path: '/users', component: UserList },
]

const router = new VueRouter({
  history: false,
  root: '/',
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
