import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

import store from './store/store'
import vuetify from './plugins/vuetify'
import router from './router'


Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('listArtists')
  }
}).$mount('#app')
