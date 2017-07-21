import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './router/router'
import store from './store/store.js'

Vue.use(VueRouter);
Vue.use(MintUI)
Vue.use(vueResource);

const router = new VueRouter({
	routes
})
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})