import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ClassOne from './components/classOne'
import ClassTwo from './components/classTwo'
import Boy from './components/boy'
import Girl from './components/girl'
import Bootstrape from './assets/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(Bootstrape)

// let routes = [
//   {
//     path: '/classOne',
//     component: ClassOne,
//     children:[
//       {
//         path: 'boy',
//         component: Boy
//       },
//       {
//         path: 'girl',
//         component: Girl
//       }
//     ]
//   },
//   {
//     path: '/classTwo',
//     component: ClassTwo,
//     children:[
//       {
//         path: 'boy',
//         component: Boy
//       },
//       {
//         path: 'girl',
//         component: Girl
//       }
//     ]
//   }
// ]

// 动态路由
let routes = [
  {
    path: '/:class',
    component: ClassOne,
    children:[
      {
        path: '/:class/:sex',
        component: Boy
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
  components:{
    App
  },
  template: '<App/>'
})
