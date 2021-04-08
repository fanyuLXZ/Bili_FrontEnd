<!--  作者:欧阳苏蓉 会员积分-如何获得会员积分  -->
<template>
  <div id="pointHow" class="points-how-warp">
    <div class="points-how-title">如何获得会员积分</div>
    <div class="points-faq-list">
          <span class="points-faq-item" v-for="img in images" :key="img">
            <img :src="img">
          </span>
    </div>
    <div class="points-faq-line">
      <span class="line-circle"></span>
      <span class="line-circle"></span>
      <span class="line-circle"></span>
      <span class="line-circle"></span>
    </div>
    <div class="points-faq-info">
          <span class="points-faq-info-list" v-for="text in texts" :key="text.title">
            <p>{{ text.title }}</p>
            <p>{{ text.subtitle }}</p>
          </span>
      <a href="//bangumi.bilibili.com/anime/big" target="_blank" rec-linkid="point_animeindex_click" class="go-movie">去找番剧</a>
    </div>
    <p class="xts">小贴士：
      <i>1.承包中消费B币劵的部分不获得积分 2.后续将推出更多获取积分的途径哦</i>
    </p>
  </div>
</template>

<script>
export default {
  name: "pointHow",
  data(){
    return{
      images:[
        "https://s1.hdslb.com/bfs/static/account-fe/static/img/step1.46b307d.png",
        "https://s1.hdslb.com/bfs/static/account-fe/static/img/step2.071d92a.png",
        "https://s1.hdslb.com/bfs/static/account-fe/static/img/step3.2001fe0.png",
        "https://s1.hdslb.com/bfs/static/account-fe/static/img/step4.11544b1.png"
      ],
      texts:[
        {title:"在bilibili番剧区",subtitle:"找到可承包的番剧"},
        {title:"成功承包感兴趣的番剧",subtitle:"并获得会员积分"},
        {title:"每成功承包1B币(不含B币劵)",subtitle:"即可获得50点会员积分"},
        {title:"会员积分达到1250分",subtitle:"即可兑换一个月大会员"}
      ]
    }
  }
}
</script>

<style>

</style>