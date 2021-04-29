<!--  作者：欧阳苏蓉 动态--发布动态  -->
<template>
  <div class="section-block">
    <div class="editor">
      <div>
        <div :placeholder="placeholder" class="editor" :class="is_placeholder_show?'placeholder-shown':''">
          <div ref="editor" id="editor" class="core-style" contenteditable="true" @input="input">‍‍</div>
        </div>
        <div class="attach-card"><!----></div>
      </div>
      <div class="publish-tip"></div>
      <div class="toolbar">
        <div class=""></div>
        <div class="publish-launcher">
          <span title="全角字符计数为1半角字符计数为0.5，不足1时记为1" class="indicator" >{{length}}</span><!---->
          <button class="publish-btn d-i-block bp-v-middle " :class="is_placeholder_show?'disabled':''">发布</button>
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
    </div>
  </div>
</template>

<script>
export default {
name: "Publish",
  model:{
    prop:"value",
    event:"change"
  },
  data(){
    return {
      is_placeholder_show:true,
      length:0
    }
  },
  props:{
    "placeholder":{
      default(){
        return "有什么想和大家分享的？"
      }
    },
    "value":{
      default() {
        return "";
      }
    }
  },
  computed:{
    text:{
      get(){
        return this.$refs.editor.innerText
      },
      set(v){
        this.$refs.editor.innerText = v
      }
    }
  },
  mounted() {
    this.text+=this.value.trim()
    this.length = this.count(this.$refs.editor.innerText.replaceAll("‍",''))
    this.is_placeholder_show = this.length === 0;
  },
  methods:{
    input(){
      let text = this.$refs.editor.innerText
      if (text.trim().replaceAll("‍",'').length<=0){
        this.$refs.editor.innerText = text.substring(0,text.lastIndexOf("‍"))
        text = this.$refs.editor.innerText
      }
      this.length = this.count(text.replaceAll("‍",''))
      this.is_placeholder_show = this.length === 0;
      this.$emit('change',text)
    },
    count(str){
      let count=0
      for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        if (code >= 65281 && code <= 65373) {
          count+=1
        } else if (code === 12288) {
          count+=1
        } else {
          count+=0.5
        }
      }
      return Math.ceil(count)
    }
  }
}
</script>

<style>

</style>