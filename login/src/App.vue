<template>
  <div id="app" class="container">
    <div v-if="loginStatus">
      <div class="rows">
        <p>
          欢迎回来，{{username}}!
          <span class="btn btn-sm btn-link" @click="loginOut()">退出</span>
        </p>
      </div>
    </div>
    <div v-else>
      <h2 class="glyphicon glyphicon-pawn">登录注册</h2>
      <hr>
      <div class="rows">
        <div class="col-md-6 col-sm-8 col-xs-10 col-md-offset-3 col-sm-offset-2 col-xs-offset-1">
          <router-link to="/login" class="btn btn-link">登录</router-link>
          <router-link to="/register" class="btn btn-link">注册</router-link>
        </div>
      </div>
      <div class="rows">
        <div class="col-md-6 col-sm-8 col-xs-10 col-md-offset-3 col-sm-offset-2 col-xs-offset-1">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>
// import login from './components/Login'
export default {
  name: 'app',
  data () {
    return {
      loginStatus: localStorage.loginStatus,
      username: ''
    }
  },
  methods:{
    loginOut(){
      this.loginStatus = false;
      localStorage.loginStatus = false;
      this.username = localStorage.username = '';
      console.log(this.loginStatus)
    }
  },
  // updated(){
  //   this.loginStatus = localStorage.loginStatus;
  //   this.username = localStorage.username;
  // }
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


</style>

<style scoped>
  h2::before{
    color: red;
    padding-right: 5px;
  }
</style>
