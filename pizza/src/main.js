import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Bootstrap from './assets/css/bootstrap.css'
// import Axios from 'axios'
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
import Phone from './components/about/phone'
import Person from './components/about/person'






Vue.use(VueRouter);
Vue.use(Bootstrap);
// Vue.use(Axios);

let routes = [
  {
    path: '/',
    name: 'index',
    components: {
      default: Index,
      history: History,
      orderWord: OrderWord,
      expressInfo: ExpressInfo
    }
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    components: {
      default: AboutMe,
      contact: Contact
    },
    children:[
      {
        path: '/history',
        name: 'history',
        component: History
      },
      {
        path: '/orderWord',
        name: 'orderWord',
        component: OrderWord
      },
      {
        path: '/contact',
        name: 'contact',
        components: {
          default: Contact, 
          person: Person         
        },
        children: [
          {
            path: '/phone',
            name: 'phone',
            component: Phone
          },
          {
            path: '/person',
            name: 'person',
            component: Person
          }
        ],
        redirect: '/person'
      },
      {
        path: '/expressInfo',
        name: 'expressInfo',
        component: ExpressInfo
      }
    ],
    redirect: '/contact'
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
  // {
  //   path: '/*',
  //   redirect: '/'
  // }
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
