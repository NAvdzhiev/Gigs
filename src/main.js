import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import axios from 'axios'

import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Vuelidate)

axios.defaults.baseURL = "https://gigs-6a5c5.firebaseio.com/"
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
