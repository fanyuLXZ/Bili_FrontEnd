<template>
  <div data-v-7762b962="" data-v-9facbe80="" class="send-box">
    <div data-v-7762b962="" class="row">
      <div data-v-7762b962="" class="space-margin"><label data-v-7762b962="" class="image-upload-btn"></label></div>
      <div data-v-7762b962="" class="emoji-container">
        <button data-v-7762b962="" title="表情" class="emotion-btn-box"></button><!----></div>
    </div>
    <div data-v-b2e4822a="" data-v-7762b962="" class="input-box">
      <div ref="editor" data-v-b2e4822a="" id="editor" class="core-style" contenteditable="true" style="height: 60px;" @input="input"></div>
      <div data-v-b2e4822a="" class="indicator" style="bottom: -30px; right: 100px;"><span data-v-b2e4822a=""
                                                                                           class="">{{length}}</span>/<span
          data-v-b2e4822a="">500</span></div>
    </div>
    <div data-v-7762b962="" class="row right">
      <button data-v-6cbfef24="" data-v-7762b962="" class="btn-box send-btn" title="enter 发送
shift + enter 换行">发送
      </button>
    </div>
  </div>
</template>

<script>
export default {
  model:{
    prop:"value",
    event:"change"
  },
  data(){
    return {
      length:0
    }
  },
  props:{
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
    this.text+=this.value
    this.length = this.count(this.$refs.editor.innerText.replaceAll("‍",''))
  },
  methods:{
    input(){
      this.length = this.count(this.$refs.editor.innerText.replaceAll("‍",''))
      this.$emit('change',this.$refs.editor.innerText)
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