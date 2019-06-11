<template>
    <div class="row">
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
              <div class="col-md-9 col-md-offset-3">
                <!-- <input type="button" value="登录" class="btn btn-success"> -->
                <router-link class="btn btn-success" to="/login_sucess">登录</router-link>
              </div>
            </div>
          </form>
        </div>
    </div>

</template>
