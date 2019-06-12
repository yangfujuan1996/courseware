import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Bootstrap from './assets/dist/css/bootstrap.css'
import Index from './components/index'
import Menu from './components/menu'
import Admin from './components/admin'
import AboutMe from './components/aboutMe'
import Login from './components/login'
import Register from './components/register'
import History from './components/about/history'
import OrderWord from './components/about/orderWord'
import Contact from './components/about/contact'
import ExpressInfo from './components/about/expressInfo'





Vue.use(VueRouter);
Vue.use(Bootstrap);

let routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component: AboutMe
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/*',
    redirect: '/'
  }
]




let router = new VueRouter({
  routes,
  mode: 'history'
})



new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
