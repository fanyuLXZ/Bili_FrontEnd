<template>
	<div id="navigator" class="n" @mouseleave="current_index=getCurrentIndex">
		<div class="wrapper">
			<div class="n-inner clearfix">
				<n-tab-links :items="items" ref="tab_links"/>
				<div class="clearfix g-search search-container">
          <input type="text" placeholder="搜索视频"
						class="space_input"><span class="icon search-btn"></span>
        </div>
				<n-statistics/>
			</div>
      <n-cursor :left="left" :width="width"/>
		</div>
	</div>
</template>

<script>
	import NCursor from "@/components/common/nav/n-cursor";
  import NTabLinks from "@/components/common/nav/n-tab-links";
  import NStatistics from "@/components/common/nav/n-statistics";
  export default {
		name: "common-nav",
    components: {NStatistics, NTabLinks,  NCursor},
    data(){
      return {
        current_index:0,
        items:[
          { text:"主页",icon_class:"icon-ic_home",name:"home",is_active:true,to:"home" },
          { text:"动态",icon_class:"icon-ic_following",name:"dynamic",to:"dynamic",num:0},
          { text:"投稿",icon_class:"icon-ic_video",name:"video",to:"video",num:0},
          // { text:"频道",icon_class:"icon-ic_channel",name:"channel",href:"/26119890/channel/index",num:0},
          { text:"收藏",icon_class:"icon-ic_collect",name:"collect",to:"fav",num:0},
          // { text:"订阅",icon_class:"icon-ic_sub",name:"sub",href:"/26119890/bangumi"},
          // { text:"设置",icon_class:"icon-ic_setting",name:"setting",href:"/26119890/setting"},
        ],
        tab_links_tag:[],
        left:0,
        width:50
      }
    },
    computed:{
      getCurrentIndex(){
        let current_index = 0
        this.items.forEach((v,i)=>{
          if (v.to===this.$route.name){
            current_index=i
          }
        })
        return current_index
      }
    },
    mounted() {
      // 获取所有 tab_links 标签
      this.tab_links_tag = this.$refs.tab_links.$children
      // 循环所有 tab_links 标签添加上移事件
      this.tab_links_tag.forEach((e,i)=>{
        e.$el.addEventListener("mouseover",()=>{
          this.current_index=i
        })
      })
    },
    watch:{
      current_index(){
        this.left = this.tab_links_tag[this.current_index].$el.offsetLeft
        this.width = this.tab_links_tag[this.current_index].$el.clientWidth
      },
      // 因为$route在mounted的name是null故绑定个watch
      $route(){
        if (this.$route.name!==null){
          this.current_index = this.getCurrentIndex
        }
      }
    }
  }
</script>

<style>

</style>
