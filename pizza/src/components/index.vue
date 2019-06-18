<template>
    <div class="container">
        <div class="bgc">
            <div class="go-menu">
                <h1>欢迎大家品尝Pizza！</h1>
                <h2>这里有你非常喜欢吃的Pizza！</h2>
                <!-- <button class="btn btn-success">Let's Order!</button> -->
                <router-link class="btn btn-success" tag="button" to="/menu">Let's Order!</router-link>
            </div>
        </div>
        <div>
            
        </div>
        
    </div>
</template>


<script>
// import BG from '../assets/img/pizza.b587e39.jpg'
export default {
    data(){
        return {
            back:{
                // "background-image": BG
            }
        }
        
    },
    
}
</script>


<style scoped>
.bgc {
    background-image: url('../assets/img/bg.jpg');
    height: 678px;
    background-repeat: no-repeat;
    background-size: 100% auto;
    margin: 0; 
}
.container,h2{
    padding: 0;
}
.go-menu{
    width: 70%;
    height: 300px;
    position: absolute;
    top: 20%;
    left: 15%;
    background-color: #fff;
    opacity: 0.8;
}
.go-menu h1{
    margin: 50px 0;
}
.go-menu h2{
    margin: 50px 0;
}


</style>
