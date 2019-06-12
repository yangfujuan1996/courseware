<template>
    <div class="container">
        <h2>{{className.name}}学生</h2>
        <div class="roter-link">
            <!-- <router-link to="/classOne/boy">男生</router-link>
            <router-link to="/classOne/girl">女生</router-link> -->
            <router-link :to="{path: '/' + className.path + '/boy'}">男生</router-link>
            <router-link :to="{path: '/' + className.path + '/girl'}">女生</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    computed: {
        className(){
            let className = this.$route.params.class;
            let classObj = {
                'one': '一班',
                'two': '二班'
            }
            return {
                name: classObj[className],
                path: className
            };
        }
    }
}
</script>
