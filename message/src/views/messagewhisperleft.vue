<template>
  <div data-v-12ea5675="" class="left">
    <div data-v-12ea5675="" title="" class="title"><span data-v-12ea5675="">近期消息</span><!----></div>

    <div data-v-12ea5675="" class="list-container ps">
      <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle">
        <div data-v-12ea5675="" class="list">
          <div data-v-18829612="" data-v-12ea5675="" :class="['list-item',index==atindex?'active':'']"
               v-for="(item,index) in datauser " :key="index" @click="indexclick(index,item.mid)">
            <div data-v-18829612="" class="avatar" :style="'background-image: url(\''+(item.face)+'\');'" title="">
            </div>
            <div data-v-33c4e9c4="" class="name-box">
              <div data-v-18829612="" class="name" title="">{{ item.uname }}</div>
              <div data-v-18829612="" title="" class="last-word" v-for="(itemt,index) in session_list " :key="index"
                   v-show="itemt.talker_id===item.mid">
                {{ itemt.talker_id == item.mid ? itemt.last_msg.content : '11' }}
                123
              </div>
            </div>
          </div>
        </div>
      </vue-custom-scrollbar>
    </div>

  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"

export default {
  props: {
    session_list: {
      type: Array,
      defaul: () => []
    },
    datauser: {
      type: Array,
      defaul: () => []
    }
  },
  data() {
    return {
      atindex: 0,
      inputvalue: '',
      lengtht: 0,
      settings: {
        suppressScrollY: false,
        suppressScrollX: true,
        wheelPropagation: false
      },
    }
  },
  methods: {
    indexclick(obj, b) {
      this.atindex = obj;
      this.$emit('sindex', obj)
      this.$emit('userid', b)
    },
    scrollHanle(evt) {
      console.log(evt)
    }
  },
  components: {
    vueCustomScrollbar
  }
}
</script>

<style>
.title[data-v-9facbe80] {
  height: 36px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid #e9eaec;
  position: relative;
  text-align: center;
  color: #333;
}

#link-message-container * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.message-list {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #f4f5f7;
}

.scroll-area {

  position: relative;
  margin: auto;
  width: 100%;
  height: 600px;

}
</style>