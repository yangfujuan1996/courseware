<template>
    <div class="container">
        <h2>请先登录</h2>
        <p><input type="button" value="登录" @click="login()"></p>
    </div>
</template>


<script>
export default {
    methods:{
        login(){
            localStorage.isLogin = 1;
            this.$router.push({path: '/Two'});
        }
    }
}
</script>
