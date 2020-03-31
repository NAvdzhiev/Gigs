import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import * as firebase from 'firebase'

import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBOY3iOKPgY9EMjt_VEOqi-G0rQn-R-Gqs",
      authDomain: "gigs-bf1c6.firebaseapp.com",
      databaseURL: "https://gigs-bf1c6.firebaseio.com",
      projectId: "gigs-bf1c6",
      storageBucket: "gigs-bf1c6.appspot.com",
      messagingSenderId: "606506903763",
      appId: "1:606506903763:web:77405e0d7662646fd18c26",
      measurementId: "G-2RB4XBVT94"
    })
  }
}).$mount('#app')
