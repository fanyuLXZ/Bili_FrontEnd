<template>
  <div>
    <div class="container">
      <div>
        <div data-v-5e65c09a="" class="breadcrumb-box">
          <div data-v-5e65c09a="" aria-label="Breadcrumb" role="navigation" class="el-breadcrumb">
            <span data-v-5e65c09a="" class="el-breadcrumb__item">
              <span role="link" class="el-breadcrumb__inner is-link">账号安全</span>
              <i class="el-breadcrumb__separator el-icon-arrow-right"></i></span>
            <span data-v-5e65c09a="" class="el-breadcrumb__item" aria-current="page">
                <span role="link" class="el-breadcrumb__inner">{{ mode="pwd"?"设置密码":mode="email"?"设置邮箱":"" }}</span>
                <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
                </span></div>
        </div>
        <div>
          <div data-v-30dfef43="">
            <div data-v-1a30358a="" data-v-30dfef43="">
              <h3 data-v-1a30358a="" class="select-header">选择验证方式</h3>
              <div data-v-1a30358a="" class="select-main">
                <ul data-v-1a30358a="" class="select-list">
                  <li data-v-1a30358a="">
                    <span data-v-1a30358a="" class="select-icon icon-phone"></span>
                    <div data-v-1a30358a="" class="select-info">
                      <p data-v-1a30358a="">通过手机验证</p>
                      <span data-v-1a30358a="">如果你的绑定手机可用，则可通过绑定的手机发送验证码修改</span>
                    </div>

                    <router-link data-v-1a30358a="" :to="{name:'bili-btn', params:{pan:'phone',verify:this.verif}}"
                                 class="select-btn">立即验证
                    </router-link>

                  </li>
                  <li data-v-1a30358a=""><span data-v-1a30358a="" class="select-icon icon-mail"></span>
                    <div data-v-1a30358a="" class="select-info"><p data-v-1a30358a="">通过邮箱验证</p>
                      <span data-v-1a30358a="">如果你的账号绑定邮箱，则可通过向绑定邮箱发送验证码修改</span>
                    </div>


                    <router-link data-v-1a30358a="" :to="{name:'bili-btn', params:{pan:'email',verify:this.verif}}"
                                 class="select-btn">立即验证
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'bili-homes',
  props:["mode"],
}
</script>

<style scoped>
@import '../assets/bili-btn.css';
</style>
