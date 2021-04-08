<template>
   <div data-v-5e65c09a="" class="breadcrumb-box">
      <div data-v-5e65c09a="" aria-label="Breadcrumb" role="navigation" class="el-breadcrumb">
        <span data-v-5e65c09a="" class="el-breadcrumb__item">
          <span role="link" class="el-breadcrumb__inner is-link">账号安全</span>
          <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
        </span>
        <span data-v-5e65c09a="" class="el-breadcrumb__item" aria-current="page">
          <span role="link" class="el-breadcrumb__inner">{{names}}</span>
          <i class="el-breadcrumb__separator el-icon-arrow-right"></i>
        </span>
        </div>
      </div>

</template>
<script>
import '@/assets/bili-btn.css'
export default{
  name:'bili-btn-branch',
  props:['names'],
  data(){
    return{

    }
  }
}
</script>
