import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './vuex';

Vue.config.productionTip = false;

Vue.use(VeeValidate, {
  classes: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
