<template>
    <div>
        <div class="index-footer">
            <div class="footer-up">
                快递信息
            </div>
            <div class="footer-lower">
                <div>
                    <h4>联系我们</h4>
                    <p>1136815001@qq.com</p> 
                    <div class="router-link">
                        <router-link to="/person">联系人</router-link>
                        <router-link to="/phone">电话</router-link>
                    </div>
                    <router-view name="person"></router-view>
                    <router-view></router-view>
                </div> 
            </div>
        </div>
    </div>
    
</template>


<style scoped>

.index-footer{
    border: 1px solid #666;
    border-radius: 3px;
    text-indent: 3em;
    text-align: left;
    padding: 0;
    margin: 10px  10px 20px 0;
    
    
}
.footer-up{
    font-size: 20px;
    background-color: #eee;
    height: 40px;
    line-height: 40px;
}
.footer-lower{
    border-top: 1px solid #666;
    font-size: 15px;
}
.footer-lower h4{
    margin: 20px 0;
}
.footer-lower .router-link{
    margin-top: 20px
}



</style>