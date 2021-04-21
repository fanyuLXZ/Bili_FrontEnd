<template>
  <div class="h">
    <div class="wrapper">
      <!--			<div class="h-forbid" style="display: none;">-->
      <!--				<div class="f-wrap"><i class="f-icon"></i><span class="f-txt">该账号封禁中</span></div>-->
      <!--			</div>-->
      <!---->
      <h-inner :img="_bili_space_info.top_photo">
        <h-gradient/>
        <h-user :vip_info="_bili_space_vip" :space_info="_bili_space_info"/>
        <div v-if="_bili_space_state==='owner'" class="space-theme-trigger icon" style="background-position: 0 0;" title="更换皮肤"></div>
        <h-version/>
        <h-action/>
      </h-inner>
    </div>
    <!---->
    <div id="space-theme" class="t">
      <div id="theme-header">
        <div class="wrapper">
          <div class="theme-topright">
            <div class="theme-ann"><span class="theme-ann-icon icon"></span><span
                class="theme-ann-text">大会员剩余时间：
								<var>1</var>天</span></div>
            <span class="icon theme-close"></span>
          </div>
          <div class="theme-tabs clearfix"><span class="tab theme-tab active" for="theme-panel">头图</span>
          </div>
        </div>
      </div>
      <div class="theme-panel">
        <div class="wrapper theme-panel-inner clearfix">
          <div class="be-scrollbar theme-list ps" name="toutu">
            <ul id="toutu-list" class="theme-list-inner clearfix">
              <li class="upload-toutu toutu-item">
                <div class="upload-content">
                  <div class="upload-icon"></div>
                  <div class="upload-tips u-tips1">自定义头图</div>
                  <div class="upload-tips u-tips2">推荐尺寸为2560*400，支持jpg、png图片</div>
                </div>
                <input accept="image/png, image/jpeg" class="upload-input" type="file">
              </li>
            </ul>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
              <div class="ps__thumb-x" style="left: 0px; width: 0px;" tabindex="0"></div>
            </div>
            <div class="ps__rail-y" style="top: 0px; right: 0px;">
              <div class="ps__thumb-y" style="top: 0px; height: 0px;" tabindex="0"></div>
            </div>
          </div>
          <div class="edit-container" style="display: none;">
            <div class="crop-container" style="display: none;">
              <div class="preview-container"></div>
              <div class="option-pane"><span class="rechoose">重新选择</span><span
                  class="upload-size">推荐头图大小为：2560x400</span></div>
              <div class="btn-container btn-center" data-v-1ea3cefa=""><a class="btn primary"
                                                                          data-v-1ea3cefa="" data-v-7b0ffc38="">
                <!----><span class="btn-content" data-v-7b0ffc38="">确定</span>
              </a><a class="btn default" data-v-1ea3cefa="" data-v-7b0ffc38="">
                <!----><span class="btn-content" data-v-7b0ffc38="">返回</span>
              </a></div>
            </div>
            <div class="uploading-container" style="display: none;">
              <div class="uploading">
                <div class="upload-content">
                  <div class="loading-icon loading"><img
                      src="//static.hdslb.com/spacev2/2/img/loading.png"></div>
                  <div class="loading-text">上传中...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="theme-panel" style="display: none;">
        <div class="wrapper theme-panel-inner clearfix">
          <!---->
        </div>
      </div>
      <div id="theme-buy-layer" class="theme-buy-layer" style="display: none;">
        <div id="theme-buy-layer-wrapper" class="theme-buy-layer-wrapper">
          <div action="close" class="theme-buy-close"></div>
          <div id="theme-buy-select-length" class="theme-buy-step" style="display: none;">
            <div class="theme-buy-header"><img class="theme-buy-preview" src="">
              <p class="theme-buy-name"></p>
              <!---->
            </div>
            <div class="theme-buy-body">
              <p class="theme-buy-a">购买月份</p>
              <div class="theme-buy-list clearfix">
                <div class="theme-buy-item active">3个月</div>
                <div class="theme-buy-item">2个月</div>
                <div class="theme-buy-item">1个月</div>
                <div class="theme-buy-item custom"><span class="hideit">自定义</span></div>
              </div>
              <div class="theme-buy-price">
                <div><span class="theme-bb-span">你的余额为
										<span class="theme-bb">0</span> B币，</span>需要支付
                  <var>NaN</var> B币
                </div>
              </div>
            </div>
            <div class="theme-buy-footer"><span
                class="theme-buy-layer-btn theme-buy-submit-btn disabled">硬币余额不足</span>
            </div>
          </div>
          <div id="theme-buy-success" class="theme-buy-step" style="display: none;">
            <div class="theme-buy-body">
              <div class="theme-buy-success-icon"></div>
              <div class="theme-buy-result-title">恭喜，支付成功！</div>
              <div class="theme-buy-result-info">
                你已成功
                <span id="theme-buy-xf" class="theme-buy-action-type">续费</span><span
                  class="theme-buy-g-name"></span>
              </div>
              <div class="theme-buy-result-info"><span class="theme-buy-expire-time">NaN年NaN月NaN日</span>
                到期
              </div>
            </div>
            <div class="btn-container theme-buy-footer btn-center" data-v-1ea3cefa=""><a class="btn theme-buy-layer-btn primary"
                                                                                         data-v-1ea3cefa=""
                                                                                         data-v-7b0ffc38="">
              <!----><span class="btn-content" data-v-7b0ffc38="">立即使用</span>
            </a><a class="btn theme-buy-layer-btn default" data-v-1ea3cefa="" data-v-7b0ffc38="">
              <!----><span class="btn-content" data-v-7b0ffc38="">确认</span>
            </a></div>
          </div>
          <div id="theme-buy-fail" class="theme-buy-step" style="display: none;">
            <div class="theme-buy-body">
              <div class="theme-buy-fail-icon"></div>
              <div class="theme-buy-result-title">支付未完成</div>
              <div class="theme-buy-result-info">你还没有完成购买
                <span class="theme-buy-g-name"></span> 哦
              </div>
              <div class="theme-buy-result-info">原因：
                <span class="theme-buy-order-id"></span>
              </div>
              <div class="theme-buy-fail-bg"></div>
            </div>
            <div class="btn-container theme-buy-footer btn-center" data-v-1ea3cefa=""><a class="btn theme-buy-layer-btn primary"
                                                                                         data-v-1ea3cefa=""
                                                                                         data-v-7b0ffc38="">
              <!----><span class="btn-content" data-v-7b0ffc38="">重新支付</span>
            </a></div>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="modal-container" style="display: none;">-->
<!--      <div class="modal-mask"></div>-->
<!--      <div class="modal-wrapper">-->
<!--        <div class="modal">-->
<!--          <div class="modal-header"><i class="modal-header-close iconfont icon-ic_close"></i>-->
<!--            <div class="modal-title">个人信息举报</div>-->
<!--          </div>-->
<!--          <div class="modal-body">-->
<!--            <div class="report-popup">-->
<!--              <p class="report-popup-tip">举报内容（可多选）</p>-->
<!--              <ul class="report-popup-list clearfix">-->
<!--                <li class="report-popup-item"><em class="report-popup-item-checkbox"></em><span-->
<!--                    class="report-popup-item-text">头像违规</span></li>-->
<!--                <li class="report-popup-item"><em class="report-popup-item-checkbox"></em><span-->
<!--                    class="report-popup-item-text">昵称违规</span></li>-->
<!--                <li class="report-popup-item"><em class="report-popup-item-checkbox"></em><span-->
<!--                    class="report-popup-item-text">签名违规</span></li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="btn-container modal-footer btn-center" data-v-1ea3cefa=""><a class="btn primary"-->
<!--                                                                                   data-v-1ea3cefa=""-->
<!--                                                                                   data-v-7b0ffc38="">-->
<!--            &lt;!&ndash;&ndash;&gt;<span class="btn-content" data-v-7b0ffc38="">确定</span>-->
<!--          </a><a class="btn default" data-v-1ea3cefa="" data-v-7b0ffc38="">-->
<!--            &lt;!&ndash;&ndash;&gt;<span class="btn-content" data-v-7b0ffc38="">取消</span>-->
<!--          </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import HGradient from "@/components/common/header/h-gradient";
import HUser from "@/components/common/header/h-user";
import HInner from "@/components/common/header/h-inner";
import {mapGetters} from "vuex";
import HVersion from "@/components/common/header/h-version";
import HAction from "@/components/common/header/h-action";

export default {
  name: "index",
  components: {HAction, HVersion, HInner, HUser, HGradient},
  computed:{
    ...mapGetters([
      '_bili_space_info',
      '_bili_space_vip',
      '_bili_space_state'
    ])
  }
}
</script>

<style>

</style>
