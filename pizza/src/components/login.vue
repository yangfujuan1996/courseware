<template>
    <div class="container">
        <div class="login-img">
            <img src="../assets/img/bg1.png" alt="图片">
        </div>
        <form class="form">
            <div class="from-group">
                <label for="username" class="col-md-2 col-sm-2 col-xs-2">邮箱：</label>
                <div class="from-control col-md-10 col-sm-10 col-xs-10">
                    <input type="text" class="btn-block" id="username">
                </div>
                <span v-show="alert2" style="{color: red}">邮箱格式不正确</span>
            </div>
            <div class="from-group">
                <label for="password" class="col-md-2 col-sm-2 col-xs-2">密码：</label>
                <div class="from-control col-md-10 col-sm-10 col-xs-10">
                    <input type="password" class="btn-block" id="password">
                </div>
            </div>
            <div class="from-group">
                <div class="from-control col-md-10 col-md-offset-2">
                    <input type="button" class=" btn btn-block btn-success" value="登录" @click="login()">
                </div>
                <span v-show="alert1" style="{color: red}">请输入完整内容！</span>
            </div>
        </form>
    </div>   
</template>



<script>
import axios from 'axios'
export default {
    data(){
        return {
            alert1: false,
            alert2: false,
        }
    },
    methods:{
        login(){
            var user = document.getElementById('username').value;
            var pwd = document.getElementById('password').value;
            if ( !user || !pwd ){
                this.alert1 = true;
            } else if(/^\w+@[a-z0-9]+(\.[a-z]{1,3}$)/.test(user)){
                this.alert1 = false;
                this.alert2 = false;
                axios({
                    method: 'post',
                    url: 'http://localhost/API/login.php',
                    headers: {"Content-Type": "text/plain"},
                    data: {
                        username: user,
                        password: pwd
                    }
                }).then(res => {
                    if(res.data.success){
                        localStorage.username = user;
                        this.$router.push({
                            path: '/'
                        })
                    }else{
                        alert(res.data.msg)
                    }
                });
            }
            else{
                this.alert2 = true;                
            }
        }
    }
}
</script>


<style scoped>
.container{
    border: 1px solid #888;
    border-radius: 5px;
    margin-top: 20px; 
}

.login-img img{
    margin: 50px 0;
}
.from-group{
    padding: 30px 0;
}
.from-group:last-child{
    margin-bottom: 40px;
}

</style>
