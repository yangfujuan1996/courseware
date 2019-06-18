<template>
    <div class="container">
        <div class="col-md-8 col-sm-12">
            <h3 class="text-left">请根据菜品选择Pizza</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th @click="add()">加入</th>
                    </tr>
                </thead>
                <tbody v-for='(item, index) in getCurPageMenu' :key="index">
                    <tr class="text-left">
                        <td>{{item.name}}</td>
                    </tr>
                    <!-- <tr class="text-left" v-for="(info, i) in item.detail" :key="i"> -->
                    <tr class="text-left">
                        <td>{{item.size1}}</td>
                        <td>{{item.price1}}</td>
                        <td><input type="button" value="+" class="btn btn-sm" @click="add(item.name, item.size1, item.price1)"></td>
                    </tr>
                    <tr class="text-left">
                        <td>{{item.size2}}</td>
                        <td>{{item.price2}}</td>
                        <td><input type="button" value="+" class="btn btn-sm" @click="add(item.name, item.size2, item.price2)"></td>
                    </tr>
                </tbody>
                <tfoot>
                        <tr>
                            <td colspan="3">
                            <nav aria-label="Page navigation">      
                                <ul class="pagination pagination-sm">
                                    <li><a href="#" @click="perPageMenu()">&laquo;</a></li>
                                    <li v-for="index in getTotalPageMenu" :key="index" @click="toPageMenu(index)" :class="{'active': menu_cur_page == index}"><a href="#">{{index}}</a></li>
                                    <li><a href="#" @click="nextPageMenu()">&raquo;</a></li>
                                </ul>
                            </nav> 
                            </td>
                        </tr>
                    </tfoot>
            </table>
        </div>
        <div class="col-md-4 col-sm-12">
            <h2 v-show="!isShow">购物车没有任何商品</h2>
            <div v-show="isShow">
                <h3 class="pull-left">购物车列表</h3>
                <a @click="clearOrder()" class="pull-right">清空列表</a>
                <table class="table">
                    <thead>
                        <tr>
                            <th>数量</th>
                            <th>品种</th>
                            <th>价格</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-left" v-for='(item, index) in getCurPageCar' :key="index">
                            <td>
                                <button class="btn btn-sm" @click="sub(item, index)">-</button>
                                {{item.count}}
                                <button class="btn btn-sm" @click="add1(item)">+</button>
                            </td>
                            <td>{{item.name + item.size}}</td>
                            <td>{{smallTotal(item.price, item.count)}}</td>                           
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3">
                            <nav aria-label="Page navigation">      
                                <ul class="pagination pagination-sm">
                                    <li><a href="#" @click="perPageCar()">&laquo;</a></li>
                                    <li v-for="index in getTotalPageCar" :key="index" @click="toPageCar(index)" :class="{'active': car_cur_page == index}"><a href="#">{{index}}</a></li>
                                    <li><a href="#" @click="nextPageCar()">&raquo;</a></li>
                                </ul>
                            </nav> 
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <span>总价： {{total}}</span>
                <input type="button" value="提交" class="btn btn-success btn-block" @click="saveOrder()">

            </div>
            
        </div>
    </div>   
</template>


<script>
import axios from 'axios'
export default {
    data(){
        return {
            menu: [],
            car: [],
            car_rows: 5,
            car_cur_page: 1,
            menu_rows: 3,
            menu_cur_page: 1,
        }
    },
    methods:{
        // 添加商品函数
        add(g_name, size, price){
            // let price = g_info.price;
            // let size = g_info.size;
            // let key = g_name + "_" + size + "_" + price;
            // if (this.car[key]) this.car[key]++;
            // else this.car[key] = 1;
            // if (this.car[key]) {
            //     this.$set(this.car,key,this.car[key] + 1 )
            // } else {
            //     this.$set(this.car,key,1)
            // }
            // console.log(this.car[key])
            let username;
            let isAdd = false;
            localStorage.username?username=localStorage.username:username="";
            console.log(this.car)
            if (this.car){
                this.car.forEach(function(item, index, array){
                    console.log(item.name, item.size, username)
                    if (item.name == g_name && item.size == size && item.uid == username){
                        item.count ++;
                        isAdd = true;
                    }
                });
            }
            if(!isAdd){
                let len = this.car?this.car.length: 0;
                console.log(len, this.car);
                let goods = {
                    id: len,
                    count: 1,
                    name: g_name,
                    price: price,
                    size: size,
                    uid: username,
                };                
                this.$set(this.car, len,goods);
            }
            console.log(this.car);
        },
        // 小计
        smallTotal(price, count){
            return price * count;
        },

        // 对指定商品添加数量
        add1(item){
            item.count ++;
        },
        // 对自定商品减数量
        sub(item, index){
            if(item.count <= 1) this.$delete(this.car, index);
            else item.count --;
            // console.log(this.car.length)
        },
        // 提交购物车
        saveOrder(){
            console.log(this.car)
            axios({
                method: 'post',
                url: 'http://localhost/API/saveOrders.php',
                data: {
                    orders: this.car
                },
                headers:{
                    "Content-Type": "text/plain"
                }
            }).then(res => {
                console.log(res);
            })
        },
        clearOrder(){
            axios({
                method: 'get',
                url: 'http://localhost/API/cleanOrders.php'
            }).then(res => {
                if (res.data.success){
                    this.$router.go(0);
                }else{
                    alert(res.data.msg);
                }
            });
        },
        toPageCar(index){
            this.car_cur_page = index;
        },
        perPageCar(){
            if (this.car_cur_page <= 1) return;
            this.car_cur_page --;
        },
        nextPageCar(){
            if (this.car_cur_page >= Math.ceil(this.car.length/this.car_rows)) return ;
            this.car_cur_page ++;
        },
        toPageMenu(index){
            this.menu_cur_page = index;
        },
        perPageMenu(){
            if (this.menu_cur_page <= 1) return;
            this.menu_cur_page --;
        },
        nextPageMenu(){
            if (this.menu_cur_page >= Math.ceil(this.menu.length/this.menu_rows)) return ;
            this.menu_cur_page ++;
        }
    },
    computed: {
        // 总计
        total(){
            if (!this.car) return;
            var total = 0;
            this.car.forEach(function(item, index, array){
                total += item.price * item.count;
            })
            return total;
        },
        // 购物车是否有商品
        isShow(){
            let car = this.car;
            if (car.length == 0) return false;
            else return true;
        },
        getCurPageCar(){
            return this.car.slice(this.car_rows * (this.car_cur_page - 1), this.car_rows * this.car_cur_page);
        },
        // 分页动态显示
        getTotalPageCar(){
            // return Math.ceil(this.car.length / this.car_rows);
            // 左侧按钮
            var left = 1;
            var all = Math.ceil(this.car.length / this.car_rows);
            // 右侧按钮
            var right = all;
            var ar = [];
            var len = 3;
            if(all>= len){
                // 在超出显示长度范围时，让当前页码居中显示
            if(this.car_cur_page > Math.ceil(len/2)  && this.car_cur_page < all-Math.floor(len/2)){
                left = this.car_cur_page - Math.floor(len/2)
                right = this.car_cur_page + Math.floor(len/2)
                // console.log(left, this.car_cur_page, right)
            }else{
                // 在当前页码小于显示长度时显示显示长度
                if(this.car_cur_page<=Math.ceil(len/2)){
                left = 1
                right = len
                }else{
                    // 最后一段显示内容
                right = all
                left = all - len + 1
                }
            }
            }
            // 
            while (left <= right){
            ar.push(left)
            left ++
            }
            return ar
            },
        getCurPageMenu(){
            return this.menu.slice(this.menu_rows * (this.menu_cur_page - 1), this.menu_rows * this.menu_cur_page);
        },
        // 分页动态显示
        getTotalPageMenu(){
            // return Math.ceil(this.menu.length / this.rows);
            // 左侧按钮
            var left = 1;
            var all = Math.ceil(this.menu.length / this.menu_rows);
            // 右侧按钮
            var right = all;
            var ar = [];
            var len = 3;
            if(all>= len){
                // 在超出显示长度范围时，让当前页码居中显示
            if(this.menu_cur_page > Math.ceil(len/2)  && this.menu_cur_page < all-Math.floor(len/2)){
                left = this.menu_cur_page - Math.floor(len/2)
                right = this.menu_cur_page + Math.floor(len/2)
                // console.log(left, this.menu_cur_page, right)
            }else{
                // 在当前页码小于显示长度时显示显示长度
                if(this.menu_cur_page<=Math.ceil(len/2)){
                left = 1
                right = len
                }else{
                    // 最后一段显示内容
                right = all
                left = all - len + 1
                }
            }
            }
            // 
            while (left <= right){
            ar.push(left)
            left ++
            }
            // console.log(ar, this.menu_cur_page)
            return ar
            }
    },
    created(){
        axios({
            method: 'get',
            url: 'http://localhost/API/getMenus.php'
        }).then(res => {
            // console.log(res, 'getMenus')
            if (res.data.success){
                // console.log(res.data, 'menu')
                this.menu = res.data.data;
            }else{
                this.menu = [];
            }
            
        });
        axios({
            method: 'get',
            url: 'http://localhost/API/getOrders.php'
        }).then(res => {
            // console.log(res.data, 'car')
            if (res.data.success){
                this.car = res.data.data;
                // console.log(this.car,'ok',res);
            }else{
                this.car = [];
                // console.log(res.data.msg,'err');
            }
        })
    }
}
</script>


<style scoped>
a{
    margin-top: 20px;
    margin-bottom: 10px;
}
</style>

