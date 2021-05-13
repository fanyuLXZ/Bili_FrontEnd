<template>
  <div class="fans_wrap cc-content-body">
    <div class="new-link-top-wrap">
      <div id="tab-container" class="new-link-top-container">
        <a href="/platform/fans/fansview" class="link-top-item router-link-exact-active active">
          <span>粉丝概览</span>
        </a>
      </div>
    </div>
    <div class="data-center-wrap content">
      <div id="audience-page" class="dc-page">
        <div id="dc-section_behavior" class="dc-section1 top" data-reporter-id="120">
          <span class="section-tip"></span>
          <div class="dc-section1-body">
            <div class="dc-section-item1">
              <div class="dc-section-item1_title clearfix"><!---->
                <div class="dc-section-item1_title_custom">
                  <div class="sectionTitle">关注趋势</div>
                  <div class="dc-radio-group behavior-title-radio">

                    <label class="dc-radio-button" :class="isActive===index?'is-active':''" @click="click(index)"  v-for="(item,index) in fans" :key="index">
                      <span class="dc-radio-button_inner">{{ item }}</span>
                    </label>

                  </div>
                </div>
              </div>
              <div class="dc-section-item_body">
                <div class="follow-event-line">
                  <div class="follow-tool-box clearfix">
                    <div class="follow-line-legend"></div>
                    <follow-line-select-day />
                    <follow-line-select />
                  </div>
                  <dc-section1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="clear: both;"></div>
    </div>
  </div>
</template>

<script>
import DcSection1 from "@/components/right/data/dc-section1";
import FollowLineSelect from "@/components/right/fans/follow-line-select";
import FollowLineSelectDay from "@/components/right/fans/follow-line-select-day";
export default {
  name: "Fansview",
  components: {FollowLineSelect, DcSection1, FollowLineSelectDay},
  data(){
    return{
      isActive:0,   //新增与取消
      fans:["新增关注","取消关注"],
    }
  },
  methods:{
    click(index){
      this.isActive = index
    },
  }
}
</script>