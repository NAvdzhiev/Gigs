import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import * as firebase from 'firebase'

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLogin', user)
      }
    })
    this.$store.dispatch('listArtists')
  }
}).$mount('#app')
