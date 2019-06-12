import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ClassOne from './components/classOne'
import ClassTwo from './components/classTwo'
import Boy from './components/boy'
import Girl from './components/girl'

Vue.use(VueRouter)
// 二级路由配置，多级路由同等配置
let routes = [
  {
    path: '/classOne',
    component: ClassOne,
    children:[
      {
        path: 'boy',
        component: Boy
      },
      {
        path: 'girl',
        component: Girl
      }
    ]
  },
  {
    path: '/classTwo',
    component: ClassTwo,
    children:[
      {
        path: 'boy',
        component: Boy
      },
      {
        path: 'girl',
        component: Girl
      }
    ]
  }
]

let router = new VueRouter({
  routes,
  mode: 'history'
})



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
