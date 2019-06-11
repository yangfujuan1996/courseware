<template>
    <div>
        <h2>今日要闻<span>JINRIYAOWEN</span></h2>
        <p>这是一个自定义模板文件</p>
        <!-- <World content="哈哈哈"/> -->
    </div>   
</template>

<script>
import World from './world'


export default {
    name: 'hello',
    components:{
        World
    }
}
</script>

// scoped 限制作用是CSS只对当前组件生效
<style scoped>
    p {
        color: blue;
    }
</style>

// less/sass/postcss/stylus: css 预处理器
// <style lang="less">
//     h2{
//         color: purple;
//         span{
//             color: #888;
//             font-size: 80%;
//         }
//     }
// </style>

// 可以通过src的方式去引外部样式表
<style src="">

</style>



