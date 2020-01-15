import Vue from 'vue'
import App from './App.vue'
//register global component
// import Ninjas from "./Ninjas.vue"
import Home from "./Home.vue"

// Vue.component('ninjas', Ninjas)
Vue.component('app-server', Home)

export const bus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})
