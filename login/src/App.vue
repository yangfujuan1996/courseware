<template>
  <div id="app" class="container">
      
    <div>
      <h2 class="glyphicon glyphicon-pawn">登录注册</h2>
      <hr>
      <div class="rows">
        <div class="col-md-6 col-sm-8 col-xs-10 col-md-offset-3 col-sm-offset-2 col-xs-offset-1" v-if="!checkout()">
          <router-link to="/login" class="btn btn-link">登录</router-link>
          <router-link to="/register" class="btn btn-link">注册</router-link>
        </div>
        <div v-else>
          <router-link to="/Welcome" class="btn btn-link">欢迎</router-link>
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
    }
  },
  methods:{
    checkout(){
      return localStorage.loginStatus;
    }
  },
  created(){
    this.loginStatus = localStorage.loginStatus;
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


</style>

<style scoped>
  h2::before{
    color: red;
    padding-right: 5px;
  }
</style>
