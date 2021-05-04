<!--  作者：欧阳苏蓉 动态--发布动态  -->
<template>
  <div class="section-block">
    <div>
      <div class="publish-panel">
        <div class="editor">
          <div >
            <div placeholder="有什么想和大家分享的？" class="editor">
              <div id="editor" class="core-style"
                   contenteditable="true">‍‍
              </div>
            </div>
            <div class="attach-card"><!----></div>
          </div>
          <div class="publish-tip"></div>
        </div>
        <div class="toolbar">
          <div class=""></div>
          <div class="publish-launcher">
            <span title="全角字符计数为1半角字符计数为0.5，不足1时记为1" class="indicator" >0</span><!---->
            <button class="publish-btn d-i-block bp-v-middle disabled">发布</button>
            <div class="bp-popup-panel p-relative a-move-in-top a-forwards dynamic-specification-popup" style="width: 796px; display: none;">
              <div class="title-ctnr p-relative">
                <h2 class="popup-title"></h2>
              </div>
              <div class="popup-content-ctnr">
                <div class="specification p-rel">
                  <iframe src="//t.bilibili.com/h5/dynamic/specification" class="iframe"></iframe>
                </div>
                <div class="popup-btn-ctnr t-center">
                  <button class="bl-button panel-btn bl-button--primary bl-button--size">
                    <span class="txt">确认并发送</span></button>
                  <button
                      class="bl-button panel-btn bl-button--ghost bl-button--size">
                    <span class="txt">取消</span></button>
                </div>
              </div>
              <div role="button" title="关闭面板"
                   class="close-btn p-absolute bg-center bg-no-repeat pointer t-center">
                <i class="bp-icon-font icon-close"></i></div>
            </div>
            <div class="sch-confirm-wrapper" style="display: none;">
              <div
                  class="bp-popup-panel p-relative a-move-in-top a-forwards sch-confirm"
                  style="width: 360px; display: none;">
                <div class="title-ctnr p-relative"><h2
                    class="popup-title"></h2></div>
                <div class="popup-content-ctnr"><p
                ></p>
                  <div class="popup-btn-ctnr t-center">
                    <button
                        class="bl-button panel-btn bl-button--primary bl-button--size">
                      <span class="txt">是</span></button>
                    <button
                        class="bl-button panel-btn bl-button--ghost bl-button--size">
                      <span class="txt">否</span></button>
                  </div>
                </div>
                <div role="button" title="关闭面板"
                     class="close-btn p-absolute bg-center bg-no-repeat pointer t-center">
                  <i class="bp-icon-font icon-close"></i></div>
              </div>
            </div>
            <div class="sch-confirm-wrapper" style="display: none;">
              <div
                  class="bp-popup-panel p-relative a-move-in-top a-forwards sch-confirm"
                  style="width: 360px; display: none;">
                <div class="title-ctnr p-relative"><h2
                    class="popup-title">动态字数过多</h2></div>
                <div class="popup-content-ctnr"><p
                >是否转为专栏发布？</p>
                  <div class="popup-btn-ctnr t-center">
                    <button
                        class="bl-button panel-btn bl-button--primary bl-button--size">
                      <span class="txt">发布专栏</span>
                    </button>
                    <button
                        class="bl-button panel-btn bl-button--ghost bl-button--size">
                      <span class="txt">取消</span></button>
                  </div>
                </div>
                <div role="button" title="关闭面板"
                     class="close-btn p-absolute bg-center bg-no-repeat pointer t-center">
                  <i class="bp-icon-font icon-close"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div><!----></div>
  </div>
</template>

<script>
export default {
name: "Publish",
}
</script>

<style scoped>

</style>