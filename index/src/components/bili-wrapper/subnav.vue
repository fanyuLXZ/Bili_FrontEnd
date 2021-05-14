<template>
  <div id="subnav" class="sub-nav-m report-wrap-module">
    <ul class="clearfix">

      <li :class="$route.name===item.routeName?'on':''" v-for="item in navigations" :key="item.tid"><a :href="item.route">{{ item.name }}</a></li>
    </ul>
<!--    <div class="tips" style=" top: 30px; left: 362px;"><i class="t-arrow" style="left: 100px;"></i>-->
<!--      <p>传统或非传统乐器及器材的演奏作品</p></div>-->
  </div>
</template>

<script>
import {MenuConfig} from "g-public/js/config/menuConfig";

export default {
  name: "subnav",
  data(){
    return{
      navigations:[

      ]
    }
  },
  mounted() {
    this.navigations=this.getNavigation(this.$route.path.split('/')[2])
  },
  methods:{
    getNavigation(route){
      let navigations = [{
        tid:0,
        route:"/v/"+(this.$route.path.split('/')[3]?this.$route.path.split('/')[2]:""),
        routeName:this.$route.path.split('/')[2],
        name:"首页"
      }]
      MenuConfig.forEach((v)=>{
        if (v.route===route){
          navigations[0].tid=v.tid
          navigations.push(...v.sub.map((val)=>{
            if (val?.route){
              return {
                tid:val.tid,
                route:"/v/"+this.$route.path.split('/')[2]+"/"+val.route,
                routeName:this.$route.path.split('/')[2]+"-"+val.route,
                name:val.name
              }
            }
          }))
        }
      })
      navigations=navigations.filter((v)=>{
        return v!==undefined
      })
      return navigations
    }
  }
}
</script>

<style type="text/css">

</style>