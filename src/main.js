import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(
  vuetify,
  {
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  },
)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
