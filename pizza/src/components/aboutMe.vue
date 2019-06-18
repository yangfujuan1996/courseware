<template>
    <div class="container">
        <div class="col-md-4 col-lg-3 col-sm-4 col-xs-4 pull-left">
            <ul class="about-menu">
                <router-link :to="{name: 'history'}" tag="li">历史记录</router-link>
                <router-link :to="{name: 'contact'}" tag="li">联系我们</router-link>
                <router-link :to="{name: 'orderWord'}" tag="li">订餐文档</router-link>
                <router-link :to="{name: 'expressInfo'}" tag="li">快递信息</router-link>
            </ul>           
        </div>
        <router-view class="col-md-8 col-lg-9 col-sm-8 col-xs-8 pull-right"></router-view>
        <router-view name='contact'></router-view>        
    </div> 
      
</template>


<style scoped>

.container{
    height: 200px;
    position: relative;
}



.pull-left{
    position: absolute;
    left: 0px;
}
.about-menu >li{
    height: 40px;
    line-height: 40px;
    display: block;
    border: 1px solid #888;
    border-radius: 5px;
    margin: 10px 10px;
    text-indent: 1.5em;
    text-align: left;
}


</style>
