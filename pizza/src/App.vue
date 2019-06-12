<template>
  <div id="app">

    <div class="router-link">
      <router-link to="/">首页</router-link>
      <router-link to="/menu">菜单</router-link>
      <router-link to="/admin">管理</router-link>
      <router-link to="/aboutMe">关于我们</router-link>
    </div>
    <div class="router-link">
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </div>
    <router-view></router-view>




  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
