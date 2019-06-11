<template>
    <div class="rows">
        <div class="col-md-6 col-md-offset-3">
          <form class="form-horizontal" autocomplete="off">
            <div class="form-group">
              <label for="username" class="control-label col-md-3">用户名：</label>
              <div class="col-md-9">
                <input type="text" id="username" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="passwd" class="control-label col-md-3">密 码：</label>
              <div class="col-md-9">
                <input type="password" id="passwd" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label for="verifyPasswd" class="control-label col-md-3">确认密码：</label>
              <div class="col-md-9">
                <input type="password" id="verifyPasswd" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-9 col-md-offset-3">
                <input type="button" value="注册" class="btn btn-success" @click="register()">
              </div>
            </div>
          </form>
        </div>
    </div> 
</template>


<script>
export default {
    methods:{
        register(){
            alert('注册中')
        }
    }
}
</script>

