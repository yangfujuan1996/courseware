import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Login from './components/login'

Vue.use(VueRouter)


let routes = [
  {
    path: '/One',
    name: 'one',
    component: One
  },
  {
    path: '/Two',
    name: 'two',
    component: Two,
    // 单独的路由守卫
    beforeEnter(to, from , next){
      if(localStorage.isLogin) next(true);
      else next({name: 'login'});
      /* 实际项目环境的登录验证
          1、发送一个ajax请求来获取登录状态
            a、没有登录
              后端返回数据告诉前端没有登录
            b、已经登录
              后端会要求在请求的时候提供令牌验证身份
          2、后端返回状态登录信息
            a、没有登录
            b、已经登录
              1.登录有效期没过
                正常请求需要登录才能请求的数据
              2.登录有效期超时
                先重新申请令牌
          
          令牌：
            服务器提供给前端用来验证身份的一个经过加密处理的特殊字符
            字符串中包含了前端的相关登录信息
            用户名  登录状态  登录有效时间
       */
    },
  },
  {
    path: '/Three',
    name: 'three',
    component: Three
  },{
    path: '/login',
    name: 'login',
    component: Login
  }
]

let router = new VueRouter({
  routes,
  mode: 'history'
});

// 全局路由守卫，监控所有的路由   beforEach()是监控路由跳转之前
// router.beforeEach(function(to, from, next){
//   if ( to.name == 'two') {
//     if ( localStorage.isLogin ) next(true);
//     else {
//       next('/login');
//     }
//   }else{
//     next(true);
//   }
// });




new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
