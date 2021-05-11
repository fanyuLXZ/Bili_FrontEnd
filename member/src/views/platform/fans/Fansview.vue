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
                    <div class="follow-line-select day bcc-select" style="width: 120px; display: none;">
                      <div class="bcc-select-input-wrap">
                        <input type="text" readonly="readonly" placeholder="请选择内容" class="bcc-select-input-inner">
                        <i class="bcc-iconfont bcc-icon-ic_drop-down"></i>
                      </div>
                      <div class="bcc-select-list-wrap" style="display: none;">
                        <ul class="bcc-select-option-list"></ul>
                      </div>
                    </div>
                    <div class="follow-line-select bcc-select" style="width: 120px;">
                      <div class="bcc-select-input-wrap">
                        <input type="text" readonly="readonly" placeholder="请选择内容" class="bcc-select-input-inner">
                        <i class="bcc-iconfont bcc-icon-ic_drop-down"></i>
                      </div>
                      <div class="bcc-select-list-wrap" style="display: none;">
                        <ul class="bcc-select-option-list">
                          <li class="bcc-option">
                            <span>2017</span>
                            <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                          </li>
                          <li class="bcc-option">
                            <span>2018</span>
                            <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                          </li>
                          <li class="bcc-option">
                            <span>2019</span>
                            <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                          </li>
                          <li class="bcc-option">
                            <span>2020</span>
                            <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                          </li>
                          <li class="bcc-option">
                            <span>2021</span>
                            <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                          </li>
                          <li class="bcc-option selected">
                            <span>最近30天</span>
                            <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="echarts" _echarts_instance_="ec_1620373512912"
                       style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">
                    <div
                        style="position: relative; overflow: hidden; width: 923px; height: 208px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                      <canvas data-zr-dom-id="zr_0" width="923" height="208"
                              style="position: absolute; left: 0px; top: 0px; width: 923px; height: 208px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas>
                    </div>
                    <div
                        style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgb(80, 80, 80); border-width: 0px; border-color: rgb(51, 51, 51); color: rgb(255, 255, 255); font: 14px / 21px -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, sans-serif; padding: 12px; left: 212px; top: 46px; box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px; border-radius: 2px;">
                      <div style="max-width:400px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                        21-04-12
                      </div>
                      <div style="margin-top:8px;"><span
                          style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#23ADE5;"></span>
                        新增关注: 0
                      </div>
                    </div>
                  </div>
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
export default {
  name: "Fansview",
  data(){
    return{
      isActive:0,
      fans:["新增关注","取消关注"]
    }
  },
  methods:{
    click(index){
      this.isActive = index
    }
  }
}
</script>