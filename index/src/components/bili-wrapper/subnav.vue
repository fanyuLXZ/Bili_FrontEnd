<template>
  <div id="subnav" class="sub-nav-m report-wrap-module">
    <ul class="clearfix">
      <li v-for="item in navigations" :key="item.title"><a :href="'/v/music/'+item.path">{{ item.title }}</a></li>
    </ul>
    <div class="tips" style=" top: 30px; left: 362px;"><i class="t-arrow" style="left: 100px;"></i>
      <p>传统或非传统乐器及器材的演奏作品</p></div>
  </div>
</template>

<script>
export default {
  name: "subnav",

  data(){
    return{
      navigations:[
        {
          title:"全部",   //导航
          path:"",    //路径
        },
        {
          title:"原创音乐",   //导航
          path:"original",    //路径
        },
        {
          title:"翻唱",   //导航
          path:"cover",    //路径
        },
        {
          title:"VOCALOID·UTAU",   //导航
          path:"vocaloid",    //路径
        },
        {
          title:"电音",   //导航
          path:"electronic",    //路径
        },
        {
          title:"演奏",   //导航
          path:"perform",    //路径
        },
        {
          title:"MV",   //导航
          path:"mv",    //路径
        },
        {
          title:"音乐现场",   //导航
          path:"live",    //路径
        },
        {
          title:"音乐综合",   //导航
          path:"other",    //路径
        },
      ]
    }
  }
}
</script>

<style type="text/css">

</style>