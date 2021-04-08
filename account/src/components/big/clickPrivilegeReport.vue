<!--  作者：欧阳苏蓉 大会员-大会员特权  -->
<template>
  <div id="reportVipPrivilege" class="big-privilege-warp report-scroll-module">
    <div id="reportVipPrivilegeMore" class="big-privilege-title report-wrap-module">
      大会员特权
      <a href="https://big.bilibili.com/pc/privilege" target="_blank" class="right-more-btn">
        更多
        <i class="m-arrow"></i>
      </a>
    </div>
    <div id="clickPrivilegeReport" class="big-privilege-content report-wrap-module" >
			<span target="_blank" class="big-privilege-item" v-for="item in items" :key="item.title">
				<span class="privilege">
					<img :src="item.img">
				</span>
				<p class="privilege-text">{{ item.title }}</p>
			</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "clickPrivilegeReport",
  data(){
    return{
      items:[
        {img:"http://i0.hdslb.com/bfs/vip/f42c20d25e10700a2bc5e7257abb7fec91634822.png",title:"半价点播"},
        {img:"http://i0.hdslb.com/bfs/vip/f42c20d25e10700a2bc5e7257abb7fec91634822.png",title:"免费看"},
        {img:"http://i0.hdslb.com/bfs/vip/f42c20d25e10700a2bc5e7257abb7fec91634822.png",title:"专属挂件"},
        {img:"http://i0.hdslb.com/bfs/vip/f42c20d25e10700a2bc5e7257abb7fec91634822.png",title:"空间自主头图"},
      ]
    }
  }
}
</script>

<style scoped>

</style>