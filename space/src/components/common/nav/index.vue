<template>
	<div id="navigator" class="n">
		<div class="wrapper">
			<div class="n-inner clearfix">
				<n-tab-links :items="items"/>
				<div class="clearfix g-search search-container">
          <input type="text" placeholder="搜索视频"
						class="space_input"><span class="icon search-btn"></span>
        </div>
				<n-statistics/>
			</div>
      <n-cursor :left="left" :width="50"/>
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
        left:20,
        width:50,
        items:[
          { text:"主页",icon_class:"icon-ic_home",name:"home",is_active:true,href:"" },
          { text:"动态",icon_class:"icon-ic_following",name:"dynamic",href:"/26119890/dynamic",num:0},
          { text:"投稿",icon_class:"icon-ic_video",name:"video",href:"/26119890/video",num:0},
          { text:"频道",icon_class:"icon-ic_channel",name:"channel",href:"/26119890/channel/home",num:0},
          { text:"收藏",icon_class:"icon-ic_collect",name:"collect",href:"/26119890/favlist",num:0},
          { text:"订阅",icon_class:"icon-ic_sub",name:"sub",href:"/26119890/bangumi"},
          { text:"设置",icon_class:"icon-ic_setting",name:"setting",href:"/26119890/setting"},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
