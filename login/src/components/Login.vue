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
        <div class="col-md-9 col-md-offset-3">
        <input type="button" value="登录" class="btn btn-success" @click="login()">
        </div>
    </div>
    </form>

</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            user: '',
            passwd: '',
            loginStatus: false,
        }
    },
    methods: {
        login(){
            // console.log(this.user, this.passwd)
            if (!this.user || !this.passwd){
                alert('用户名或密码为空！');
                return ;
            }
            Axios({
                method: 'post',
                url: 'http://localhost/login_php/login.php',
                data: {
                    username: this.user,
                    password: this.passwd
                },
                headers: {
                    'Content-Type': 'text/plain'
                }
            }).then(res => {
                if(res.data.success){
                    this.loginStatus = true;
                    localStorage.loginStatus = true;
                    localStorage.username = this.user;
                    alert(this.loginStatus)
                }else{
                    alert('用户名或密码不正确！！！')
                }
            })
        }
    }

}
</script>

