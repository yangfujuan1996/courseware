import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AboutMe from './components/aboutMe'
import JoinMe from './components/joinMe'
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import LoginSucess from './components/login_sucess'

// 使用use方法去调用路由 vue-router
Vue.use(VueRouter)

// 配置路由信息，名字只能是routes
// var routes = [
//   {
//     path: '/aboutMe',
//     name: 'about',   // 命名路由
//     component: AboutMe
//   },
//   {
//     path: '/joinMe',
//     name: 'join',
//     component: JoinMe
//   },
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     // 处理上边配置过的路由之外的所有路由地址，必须在所有路由之后
//     path: '*',
//     // 重定向，跳转回首页
//     redirect: '/'
//   }
// ];

// var routes = [
//   {
//     path: '/',
//     name: 'home',
//     components: {
//       'home': Home,
//       'about': AboutMe,
//       'join': JoinMe
//     }
//   },
//   {
//     path: '/aboutMe',
//     name: 'about',
//     component: AboutMe,
//   },
//   {
//     path: '/joinMe',
//     name: 'join',
//     component: JoinMe
//   },
//   {
//     path: '*',
//     redirect: '/'
//   }
// ]

var routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login_sucess',
    name: 'login_sucess',
    component: LoginSucess
  }
]




// 初始化路由
var router = new VueRouter({
  routes,
  // 设置路由的管理方式，默认为hash的方式管理
  mode: 'history'
})




new Vue({
  el: '#app',
  router,   //  使用路由


  // render: h => h(App)   // 以渲染函数的方式运行
  template: '<App/>',
  components: {
    App,
  },
})
