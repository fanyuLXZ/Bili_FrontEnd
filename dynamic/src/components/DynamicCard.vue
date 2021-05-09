<!--作者：欧阳苏蓉 动态List-->
<template>
  <div class="card" style="margin-top: 8px;">
    <a target="_blank" id="dynamicId_513359857300617358" class="user-head c-pointer avatar-comp" href="//space.bilibili.com/433899970/dynamic">
      <div class="bili-avatar">
        <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius"
             :src="item.desc.user_profile.info.face">
        <span v-if="item.desc.user_profile.status" class="bili-avatar-icon" style="background-image: url('https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png@32w_32h_1c.webp')"></span>
      </div>
    </a>
    <div class="main-content" style="padding-bottom: 0px;">
      <div class="user-name fs-16 ls-0 d-i-block">
        <a href="//space.bilibili.com/433899970/dynamic" target="_blank" class="c-pointer">{{ item.desc.user_profile.info.uname }}</a>
      </div>
      <div class="time fs-12 ls-0 tc-slate">
        <a href="//t.bilibili.com/513359857300617358?tab=2" target="_blank" class="detail-link tc-slate">{{ item.desc.timestamp }}</a>
        <span></span>
      </div>
      <div class="card-content">
        <div data-ori-did="0" class="post-content">
          <div class="original-card-content">
            <div class="text p-rel description">
              <div class="content">
                <a @click="routerTo(item.desc.dynamic_id)"><div class="content-full">{{ item.card }}</div></a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="button-bar tc-slate">
        <single-button :icon_style="['bp-svg-icon','single-icon','comment']" @buttonClick="showComment = !showComment" :num="item.desc.comment" :hover_style="'comment-hover'"/>
        <single-button :icon_style="['custom-like-icon','zan']" :num="item.desc.like" :click_style="'zan-hover'" :hover_style="'zan-a-hover'"/>
      </div>
      <!--  操作  -->
      <operating :dynamic_id="item.desc.dynamic_id" :mid="mid"></operating>
    </div>
    <!--  评论  -->
    <comment v-if="showComment" :dynamic_id="item.desc.dynamic_id"></comment>
  </div>
</template>

<script>
import comment from "@/components/Comment";
import operating from "@/components/Operating";
import SingleButton from "@/components/single-button";

export default {
  name: "DynamicCard",

  data(){
    return{
      like:false,
      showComment:this.isComment
    }
  },

  components:{
    SingleButton,
    comment,
    operating,
  },

  props:{
    item:Object,
    isComment:Boolean,
    index:Number,
    mid:Number
  },

  methods:{
    routerTo(dynamic_id){
      this.$router.push({
        path: '/article',
        name:'Article',
        params: {
          dynamic_id,
          mid:this.mid
        }
      });
    }
  }
}
</script>

<style>

</style>