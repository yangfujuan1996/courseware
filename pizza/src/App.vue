<template>
  <div id="app">
    <div class="container nav">
      <div class="pull-left">
        <span class="glyphicon glyphicon-cutlery"></span>
        <span>Pizza点餐系统</span>
        <router-link to="/">首页</router-link>
        <router-link to="/menu">菜单</router-link>
        <router-link to="/admin">管理</router-link>
        <router-link to="/aboutMe">关于我们</router-link>
      </div>
      <div class="pull-right" >
        <div v-show="!username">
          <router-link to="/login">登录</router-link>
          <router-link to="/register">注册</router-link>
        </div>
        <div v-show="username">
          <router-link to="/login">{{username}}</router-link>
          <a @click="loginOut()">退出</a>
        </div>        
      </div>
    </div> 
    <router-view></router-view>
    <div class="container">
      <router-view name="history" class="col-md-4"></router-view>
      <router-view name="orderWord" class="col-md-4"></router-view>
      <router-view name="expressInfo" class="col-md-4"></router-view>
    </div>
    
    




  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: ""
    }
  },
  methods: {
    loginOut(){
      console.log(this.username)
      this.username = "",
      localStorage.removeItem("username");
    }
  },
  created(){
    this.username = localStorage.username
  },
  updated(){
    this.username = localStorage.username
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
  /* margin-top: 60px; */
}

/* h1, h2 {
  font-weight: normal;
} */

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a{
  font-size: 16px;
  padding-right: 15px;
}
a:hover, a:active, a:link, a:visited{
  text-decoration: none;
}
a:link, a:visited{
  color: #888;
}
a:active, a:hover {
  color: #333;
}
.glyphicon{
  padding-right: 10px;
  color: rgb(0,123,255); 
  font-size: 18px;
  padding-left: 15px; 
}

.pull-left>span:nth-child(2){
  font-size: 20px;
  padding-right: 15px;
}


.container{
  min-width: 700px;
  margin-top: 0;
}




</style>
<style scoped>
.nav{
  background-color: #eee; 
  height: 50px;
  line-height: 50px;
}
</style>

