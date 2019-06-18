<template>
    <div class="container">
        <div class="col-md-8 col-sm-12">
            <h3>添加新的Pizza</h3>
            <form class="form">
                <div class="from-group">
                    <label for="breed" class="col-md-2">品种：</label>
                    <div class="from-control col-md-10">
                        <input type="text" class="btn-block" id="breed">
                    </div>
                </div>
                <div class="from-group">
                    <label for="password" class="col-md-2">描述:</label>
                    <div class="from-control col-md-10">
                        <textarea name="dis" id="dis" class="textarea-inherit" rows="5"></textarea>
                    </div>
                </div>
                <h4>选项一</h4>
                <div class="from-group">
                    <label for="size1" class="col-md-2">尺寸：</label>
                    <div class="from-control col-md-10">
                        <input type="text" class="btn-block" id="size1">
                    </div>
                </div>
                <div class="from-group">
                    <label for="price1" class="col-md-2">价格：</label>
                    <div class="from-control col-md-10">
                        <input type="text" class="btn-block" id="price1">
                    </div>
                </div>
                <h4>选项二</h4>
                <div class="from-group">
                    <label for="size2" class="col-md-2">尺寸：</label>
                    <div class="from-control col-md-10">
                        <input type="text" class="btn-block" id="size2">
                    </div>
                </div>
                <div class="from-group">
                    <label for="price2" class="col-md-2">价格：</label>
                    <div class="from-control col-md-10">
                        <input type="text" class="btn-block" id="price2">
                    </div>
                </div>
                <div class="from-group">
                    <div class="from-control col-md-10 col-md-offset-2">
                        <input type="button" class=" btn btn-block btn-success" value="提交" @click="add()">
                    </div>
                    <span v-show="isAlert">请输入完整内容后在进行提交！！！</span>
                </div>
            </form>
        </div>
        <div class="col-md-4 col-sm-12">
            <h3>菜单</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>尺寸</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-left" v-for='(item, index) in getCurPage' :key="index">
                        <td>{{item.name}}</td>
                        <td><input type="button" value="x" class="btn btn-sm" @click="del(item.id, index)"></td>
                    </tr>
                    
                </tbody>
                
                <!-- <input type="button" value="<" class="btn btn-sm" @click=""> -->
                <tfoot>
                    <tr>
                        <td colspan="2">
                        <nav aria-label="Page navigation">      
                            <ul class="pagination pagination-sm">
                                <li><a href="#" @click="perPage()">&laquo;</a></li>
                                <li v-for="index in getTotalPage" :key="index" @click="toPage(index)" :class="{'active': cur_page == index}"><a href="#">{{index}}</a></li>
                                <li><a href="#" @click="nextPage()">&raquo;</a></li>
                            </ul>
                        </nav> 
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
     
</template>


<script>
import axios from "axios"
export default {
    data(){
        return {
            isAlert: false,
            menu: [],
            cur_page: 1,
            rows: 5,
        }
    },
    methods: {
        del(index){
            this.menu.splice(index,1)
        },
        add(){
            let name = document.getElementById('breed').value;
            let dis = document.getElementById('dis').value;
            let size1 = document.getElementById('size1').value;
            let price1 = document.getElementById('price1').value;
            let size2 = document.getElementById('size2').value;
            let price2 = document.getElementById('price2').value;
            console.log(name, dis, size1, price1, size2, price2)
            if (name == "" || dis == "" || size1 == "" || size2 == "" || price1 == "" || price2 == ""){
                this.isAlert = true;
            }else{
                this.isAlert = false;
                // this.menu.push({
                //     name: name,
                //     detail: [
                //         {
                //             size: size1,
                //             price: price1
                //         },
                //         {
                //             size: size2,
                //             price: price2
                //         }
                //     ]
                // });
                let menu = this.menu
                axios({
                    method: 'post',
                    url: 'http://localhost/API/add.php',
                    headers: {"Content-Type": "text/plain"},
                    data: {
                        id: menu.length,
                        disc: dis,
                        name: name,
                        price1: price1,
                        price2: price2,
                        size1: size1,
                        size2: size2
                    }
                }).then(res => {
                    if(res.data.success){
                        this.$router.go(0);
                    }else{
                        alert(res.data.msg);
                    }
                })
            }
            
        },
        del(g_id, index){
            if(confirm('你确定要删除吗？')){
                axios({
                    method: 'post',
                    url: 'http://localhost/API/removeMenu.php',
                    headers: {"Content-Type": "text/plain"},
                    data:{
                        id: g_id
                    }
                }).then(res => {
                    if(res.data.success){
                        // this.$router.go(0);
                        this.$delete(this.menu, index);
                    }else{
                        alert(res.data.msg);
                    }
                })
            }

        },
        toPage(index){
            this.cur_page = index;
        },
        perPage(){
            if (this.cur_page <= 1) return;
            // console.log(this.cur_page)
            this.cur_page --;
        },
        nextPage(){
            if (this.cur_page >= Math.ceil(this.menu.length/this.rows)) return ;
            // console.log(this.cur_page)
            this.cur_page ++;
        }
    },
    computed: {
        getCurPage(){
            return this.menu.slice(this.rows * (this.cur_page - 1), this.rows * this.cur_page);
        },
        // 分页动态显示
        getTotalPage(){
            // return Math.ceil(this.menu.length / this.rows);
            // 左侧按钮
            var left = 1;
            var all = Math.ceil(this.menu.length / this.rows);
            // 右侧按钮
            var right = all;
            var ar = [];
            var len = 3;
            if(all>= len){
                // console.log(all, this.cur_page, 'hahahah')
                // 在超出显示长度范围时，让当前页码居中显示
            if(this.cur_page > Math.ceil(len/2)  && this.cur_page < all-Math.floor(len/2)){
                left = this.cur_page - Math.floor(len/2)
                right = this.cur_page + Math.floor(len/2)
                // console.log(left, this.cur_page, right)
            }else{
                // 在当前页码小于显示长度时显示显示长度
                if(this.cur_page<=Math.ceil(len/2)){
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
            // console.log(ar, this.cur_page)
            return ar
            }
        

        
    },
    created(){
        axios({
            method: 'get',
            url: 'http://localhost/API/getMenus.php'
        }).then(res => {
            if (res.data.success){
                // console.log(res.data);
                this.menu = res.data.data;
                // console.log(this.menu)
            }else{
                this.menu = [];
            }
        })
    },
    

}
</script>


<style scoped>
h3, h4{
    margin: 20px 0;
    text-align: left;
}
h4{
    font-weight: bolder
}
.from-group{
    padding: 20px 0;
}
.from-group:last-child{
    margin-bottom: 40px;
}
.textarea-inherit {
    width: 100%;
    overflow: auto;
    word-break: break-all; 
}
.pagination {
    text-align: center;
    font-size: 0px;
}
.pagination>li {
    margin: 0;
}
.pagination>li>a{
    /* height: 0!important; */
    display: inline-block !important;
    float: none;
}
</style>
