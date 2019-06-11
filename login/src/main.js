import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootStrap from './assets/dist/css/bootstrap.css'
import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome'
import Axios from 'axios'

Vue.use(BootStrap);
Vue.use(VueRouter);
Vue.use(Axios)


// Axios({
//   method: 'get',
//   url: 'http://localhost/login_php/test.php'
// }).then(requst => console.log(requst,111111))

// Axios.post('http://localhost/login_php/test.php')
//      .then(requst => console.log(requst,111111));



// 路由表
let routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    // 静态路由
    path: '/Welcome',
    component: Welcome
  },
  {
    // 动态路由
    path: '/Welcome/:name',
    component: Welcome
  },
  {
    path: '/*',
    redirect: '/login'
  }
]

let router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  // render: h => h(App)
  template: '<App/>',
  components:{
    App
  }
})
