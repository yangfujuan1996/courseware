<template>
    <div class="rows">
        <p>
          欢迎回来，{{getName}}!
          <span class="btn btn-sm btn-link" @click="loginOut()">退出</span>
        </p>
    </div>
</template>

<script>
export default {
    computed: {
        getName(){
            return this.$route.params.name || '默认用户';
        }
    },
    methods: {
        // data(){
        //     return {
        //         username: localStorage.username
        //     }
        // },
        loginOut(){
            // localStorage.loginStatus = false;
            // console.log(this.loginStatus);
            localStorage.removeItem('loginStatus');
            this.$router.push({path: '/Login'})

        }
    }
}
</script>
