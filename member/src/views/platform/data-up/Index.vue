<template>
  <div id="bili-data-center" class="cc-content-body">
    <div class="dc-top-link_wrap">
      <div class="tabs">
        <ul class="tabs__header">
          <li class="tabs__header-item is-active"><span>视频数据</span></li>
        </ul>
        <div class="tabs__content">
          <div >
            <div id="upper-page" class="dc-page">
              <div data-reporter-id="62"></div>
              <div id="dc-section_detail" class="dc-section1 top detail" data-reporter-id="63">
                <span class="section-tip"></span>
                <div class="dc-section1-body">
                  <div class="dc-section-item1">
                    <div class="dc-section-item1_title clearfix"></div>
                    <div class="dc-section-item_body">
                      <div class="section">
                        <div class="section-row bcc-row" style="margin-left: -8px; margin-right: -8px;">
                          <bcc-col :title="'视频播放'" :type="'six'" :number="1113" />
                          <bcc-col :title="'评论数'" :type="'six'" :number="19" />
                          <bcc-col :title="'点赞数'" :type="'six'" :number="35" />
                          <bcc-col :title="'硬币数'" :type="'six'" :number="9" />
                        </div>
                        <div class="section-row bcc-row" style="margin-left: -8px; margin-right: -8px;">
                          <bcc-col :title="'收藏数'" :type="'six'" :number="32" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="dc-section_summary" class="dc-section1 top" data-reporter-id="64">
                <span class="section-tip"></span>
                <div class="dc-section1-body">
                  <div class="dc-section-item1">
                    <div class="dc-section-item1_title clearfix">
                      <div class="dc-section-item1_title_custom">
                        <div class="sectionTitle">增量数据趋势</div>
                        <div class="dc-radio-group summary-title-radio">
                          <label class="dc-radio-button is-active">
                            <span class="dc-radio-button_inner">播放</span>
                          </label>
                          <label class="dc-radio-button">
                            <span class="dc-radio-button_inner">评论</span>
                          </label>
                          <label class="dc-radio-button">
                            <span class="dc-radio-button_inner">弹幕</span>
                          </label>
                          <label class="dc-radio-button">
                            <span class="dc-radio-button_inner">点赞</span>
                          </label>
                          <label class="dc-radio-button">
                            <span class="dc-radio-button_inner">分享</span>
                          </label>
                          <label class="dc-radio-button">
                            <span class="dc-radio-button_inner">硬币</span>
                          </label>
                          <label class="dc-radio-button">
                            <span class="dc-radio-button_inner">收藏</span>
                          </label>
                          <label class="dc-radio-button">
                            <span class="dc-radio-button_inner">充电</span>
                          </label>
                        </div>
                      </div>
                    </div>
<!--                    <div class="dc-section-item_body">-->
<!--                      <div class="follow-event-line">-->
<!--                        <div class="echarts video-summary" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative;">-->
<!--                          <div style="position: relative; overflow: hidden; width: 923px; height: 234px; padding: 0px; margin: 0px; border-width: 0; cursor: default;">-->
<!--                            <canvas data-zr-dom-id="zr_0" width="923" height="234" style="width: 923px; height: 234px;"></canvas>-->
<!--                          </div>-->
<!--                          <div style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: rgb(80, 80, 80); border-width: 0; border-color: rgb(51, 51, 51); color: rgb(255, 255, 255); font: 14px / 21px -apple-system, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, Helvetica, Arial, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, sans-serif; padding: 12px; left: 48px; top: 99px; box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px 0; border-radius: 2px;"><div style="max-width:400px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">-->
<!--                            <div style="line-height:14px">2021/04/07</div>-->
<!--                            <div style="margin-top:8px;">-->
<!--                              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#23ADE5;"></span> 播放 : 0-->
<!--                            </div>-->
<!--                          </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
                    <dc-section1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BccCol from "@/components/right/home/bcc-col";
import DcSection1 from "@/components/right/data/dc-section1";
export default {
  name: "Index",
  components: {DcSection1, BccCol},

}
</script>