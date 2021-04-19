<!--  作者:欧阳苏蓉 大会员-基本信息  -->
<template>
  <div id="reportVipName" class="big-name-warp report-scroll-module" scrollshow="true">
    <div class="big-head">
      <img src={{$store.state.face}} lazy="loaded">
    </div>
    <div class="big-name-left">
      <div class="big-name-top">
        <span class="big-user-name">{{ $store.state.uname }}</span>
        <span class="big-label" style="background: rgb(62, 181, 89); color: rgb(255, 255, 255);" v-if="vip.status&vip.type===0">小会员</span>
        <span class="big-label"  v-if="vip.status&vip.type===1">大会员</span>
      </div>
      <div class="big-nane-bottom">
        <p>
          大会员有效期至{{ vip.valid_period }}
          <span class="big-name-record" v-if="vip.automatic_Renew" @click="showCont">
              自动续费管理 &gt;
        <div class="big-name-record-hover">
          <div class="big-name-record-hover-icon"></div>
          <p>当前是自动续费大会员</p>
          <p>下次扣费时间为{{ vip.automatic_buckle }}</p>
        </div>
        </span>
        </p>
      </div>
      <div class="big-member-btn"><i style="display: none;"></i>
        续费大会员
        <span class="voucher-tips-show" style="display: none;"></span>
      </div>
      <span class="big-gift-btn-home">赠送</span>
      <div id="bigMore" class="big-more-tool-btn" @click="showMoreClick">
        <i class="big-more-tool-item"></i>
        <i class="big-more-tool-item"></i>
        <i class="big-more-tool-item"></i>
        <div class="big-more-item-list" v-show="showMore">
          <a target="_blank" href="//big.bilibili.com/pc/bigHistory" class="big-more-item-item">
            <span class="big-more-item-txt">查看开通记录</span>
          </a>
          <a href="/account/big/voucher" class="big-more-item-item">
            <span class="big-more-item-txt">我的代金券</span>
          </a>
          <a href="/account/big/myPackage" class="big-more-item-item">
            <span class="big-more-item-txt">卡券包</span>
          </a>
        </div>
      </div>
    </div>
    <div class="continuity-dialog-wrapper" v-show="show">
      <div class="continuity-box">
        <div class="continuity-content">
          <div class="continuity-header">自动续费管理</div>
          <span class="continuity-close" @click="showCont"></span>
          <div class="continuity-bottom">
            <ul data-v-ebb4a8fc="" class="tabs-wrapper">
              <li data-v-ebb4a8fc="" class="tab-normal-item active">
                <span data-v-ebb4a8fc="" class="tabs-normal-txt">大会员自动续期</span>
              </li>
              <li data-v-ebb4a8fc="" class="tab-normal-item tab-disable">
                <span data-v-ebb4a8fc="" class="tabs-normal-txt">电视大会员自动续期</span>
              </li>
            </ul>
            <div>
              <div class="big-continuity-card-wrapper">
                <div class="big-continuity-card-item">
                  <div class="big-continuity-card-name">连续包月首月</div>
                  <div class="big-continuity-card-info">
                    <div class="big-continuity-card-txt">预计扣费时间</div>
                    <div class="big-continuity-card-txt">2021-04-13</div>
                  </div>
                  <div class="big-continuity-card-info">
                    <div class="big-continuity-card-txt">每次扣费金额</div>
                    <div class="big-continuity-card-txt">15.00元</div>
                  </div>
                  <div class="big-continuity-card-info">
                    <div class="big-continuity-card-txt">扣费渠道</div>
                    <div class="big-continuity-card-txt">微信</div>
                  </div>
                  <div class="big-continuity-card-txt">*扣费成功后大会员有效期增加31天*</div>
                  <div class="big-continuity-card-btn-wrapper">
                    <div class="big-continuity-card-btn">解约</div>
                  </div>
                </div>
              </div>
            </div>
            <div style="display: none;" >
              <div class="big-continuity-card-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="common-dialog-wrap" style="display: none;">
      <div class="common-dialog-box">
        <div class="common-dialog-content">
          <div class="dialog-close-icon"></div>
          <p class="common-title"></p>
          <p class="common-subtitle"></p>
          <div class="success-img"></div>
          <div class="close-btn btn-top">知道了</div>
        </div>
      </div>
    </div> <!---->
    <div class="pay-dialog-wrapper" style="display: none;">
      <div class="pay-dialog-box">
        <div class="pay-dialog-content">
          <div class="pay-dialog-close-icon"></div>
          <p class="pay-dialog-title"></p>
          <div class="pay-dialog-protocol" style="display: none;">
            <span class="pay-dialog-protocol-icon pay-dialog-protocol-icon-disable"></span>
            <span class="pay-dialog-protocol-txt">关注“哔哩哔哩大会员”官方账号</span>
          </div>
          <div class="fail-img"></div>
          <div class="pay-bottom-btn">
            <span class="pay-left-btn pay-left-btn-alone">知道了</span> <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reportVipName",
  data(){
    return{
      status:true,  //是否是会员
      type:1,  //会员类型
      valid_period:"2021-04-15",  //会员有效时间
      show:false,
      showMore:false,
    }
  },
  methods:{
    //自动续费管理
    showCont:function (){
      this.show=!this.show
    },
    //下拉框
    showMoreClick:function (){
      this.showMore=!this.showMore
    },
  }
}
</script>

<style>

</style>