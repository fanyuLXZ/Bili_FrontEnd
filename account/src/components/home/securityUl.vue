<!-- 作者：欧阳苏蓉  个人中心侧边栏一 -->
<template>
  <div class="security-left">
    <span class="security-title">个人中心</span>
    <ul id="ser-ul" class="security-ul">
      <router-link  v-for="item in ser_ul" :key="item.ico" class="security-list" :to="'/'+item.english" tag="li" active-class="router-link-exact-active on">
        <i class="security-icon " :class="'icon-'+item.ico"></i>
        <span class="security-nav-name">
          {{item.title}}
        </span>
      </router-link>
    </ul>
    <ul id="securityOutLink" class="security-ul report-wrap-module">
      <li v-for="item in securityOutLink" :key="item" class="security-list-jump">
        <a class="security-list-link-jump">
          {{item}}
          <i class="security-list-jump-icon"></i>
        </a>
      </li>
    </ul>
  </div>
</template>"

<script>
export default {
  name: "security-ul",
  data(){
    return{
      ser_ul:[
        {ico:0,title:"首页",english:"home"},
        {ico:1,title:"大会员",english:"big"},
        {ico:2,title:"会员积分",english:"points"},
        {ico:3,title:"我的信息",english:"setting"},
        {ico:4,title:"我的头像",english:"face"},
        {ico:8,title:"我的硬币",english:"coin"},
      ],
      securityOutLink:["个人空间","我的钱包","创作中心"]
    }
  }
}
</script>

