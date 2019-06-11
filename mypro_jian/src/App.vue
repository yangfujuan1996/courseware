<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h2>{{msg}}</h2>

    <div> -->
      <!-- <a href="/aboutMe">关于我们</a>
      <a href="/joinMe">招兵买马</a>
      a链接或导致页面跳转 vue推荐的写法 -->
      <!-- <router-link to="/">首页</router-link>
      <router-link to="/aboutMe">关于我们</router-link>
      <router-link to="/joinMe">招兵买马</router-link> -->
      <!-- <router-link :to="{name: 'home'}">首页</router-link>
      <router-link :to="{name: 'about'}">关于我们</router-link>
      <router-link :to="{path: '/joinMe'}">招兵买马</router-link>
    </div>
    <div> -->
      <!-- 路由的视图组件 -->
      <!-- <router-view></router-view>
      <router-view name="home"/>
      <router-view name="about"/>
      <router-view name="join"/>
    </div> -->

    <div class="container">
      <div class="rows">
        <p class="col-md-3 col-md-offset-6">
          <router-link class="btn btn-default" to="/login">登录</router-link>
          <router-link class="btn btn-default" to="/register">注册</router-link>
        </p>
      </div>
      <router-view></router-view>
        

      
    </div>







    
      
    




  </div>
</template>

<script>
import Hello from './components/hello'
import World from './components/world'

import Login from './components/login'
import Register from './components/register'




export default {
  name: 'app',
  data () {
    return {
      msg: '这是我的第一个vue-cli项目'
    }
  },
  components:{
    Hello,
    World
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  font-size: 50px;
}



</style>
