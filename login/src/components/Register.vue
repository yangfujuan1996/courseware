<template>

          <form class="form-horizontal" autocomplete="off">
            <div class="form-group">
              <label for="username" class="control-label col-md-3">用户名：</label>
              <div class="col-md-9">
                <input type="text" id="username" class="form-control" v-model="user">
              </div>
            </div>
            <div class="form-group">
              <label for="passwd" class="control-label col-md-3">密 码：</label>
              <div class="col-md-9">
                <input type="password" id="passwd" class="form-control" v-model="passwd">
              </div>
            </div>
            <div class="form-group">
              <label for="verifyPasswd" class="control-label col-md-3">确认密码：</label>
              <div class="col-md-9">
                <input type="password" id="verifyPasswd" class="form-control" v-model="verifyPasswd">
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-9 col-md-offset-3">
                <input type="button" value="注册" class="btn btn-success" @click="register()">
              </div>
            </div>
          </form>
</template>





<script>
import Axiso from 'axios'
export default {
    
    data(){
        return {
            user: '',
            passwd: '',
            verifyPasswd: '',
            
        }
    },
    methods:{
       register(){
           console.log(this.user, this.verifyPasswd, this.passwd)
            if (this.passwd !== this.verifyPasswd) {
                alert('两次输入密码不一致');
                return ;
            }
            if (!this.user || !this.passwd || !this.verifyPasswd){
                alert('请输入完整内容！');
                return ;
            }
            Axiso({
                method: 'post',
                url: 'http://localhost/login_php/register.php',
                data:{
                    username: this.user,
                    password: this.passwd
                },
                headers: {
                    'Content-Type': 'text/plain'
                }
            }).then(res => {
                if (res.data.success) {
                    // alert('注册成功，请登录！');

                    // 跳转到指定路由，并且在历史记录中有记录
                    this.$router.push({path: '/Login'})
                    // replace方法也可以跳转到指定路由，但是在历史记录中不会有记录
                    // this.$router.replace({path: '/Login'})
                }else{
                    alert(res.data.msg)
                }
            })
        } 
    }
}
</script>
