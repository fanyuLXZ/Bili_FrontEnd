<template>
  <div class="elevator" :class="{'edit': isEdit}" id="elevator" ref="elevator" v-show="sortList.length > 0">
    <div class="mask" @click="onEdit"></div>
    <i class="ear bilifont bili-icon_youdaohang_xiaodianshitianxian"></i>
    <div class="list-box">
      <SlickList lockAxis="y" v-model="sortList" helperClass="slicksort-selected" @input="onInput">
        <SlickItem class="item sortable" :class="{'on': index === currentFloor && !isEdit}" v-for="(item, index) in sortList" :key="`nav-${index}`" :index="index" :disabled="!isEdit" @click.native="moveTo(item.type)" v-van-report:elevatorMoveto.click="item.type">
          {{ item.name }}
        </SlickItem>
      </SlickList>
      <div class="item sort" :class="{'on': isEdit}" @click="onEdit" v-van-report:sort.click><i class="bilifont bili-icon_youdaohang_paixu"></i></div>
      <div class="item back-top" @click="scrollTo(0)"><i class="bilifont bili-general_pullup_s"></i></div>
      <!-- <div class="item back-old" @click="onSwitchLang" v-html="$HomeLang['24']"></div> -->
    </div>
    <div class="bg23"></div>
  </div>
</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort'
import { getElevatorSort, setElevatorSort } from '../../../public/apis/home'
// import { Cantor, scrollTop, cookie, customReport } from '../../public/js/utils'
import { Cantor, } from '../../../public/js/utils'
import { mapState } from 'vuex'

export default {
  components: {
    SlickItem,
    SlickList
  },
  props: {
    config: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      sortList: [],
      isEdit: false,
      initSortList: [],
      currentFloor: -1
    }
  },
  computed: {
    ...mapState(['recommendData']),
    needOffset() {
      return this.recommendData?.abtest?.group === 'b'
    },
    sortNumber(){
      return this.config.length
    }
  },
  methods: {
    async getElevatorSortData() {
      try {
        const { data } = await getElevatorSort()
        if(data.code === 0) {
          const localSetting = window.localStorage.index_user_setting
          const remoteSetting = data.data
          if(localSetting !== JSON.stringify(remoteSetting)) {
            window.localStorage.index_user_setting = JSON.stringify(remoteSetting)
          }
        }
        /* eslint-disable */
      } catch(err) {}

      this.setInitSortList()
    },
    async setElevatorSortData(param) {
      try {
        await setElevatorSort(param)
      } catch(err) {}
    },
    setInitSortList() {
      this.initSortList = this.getSortData()
      this.setSortList(this.initSortList)
      this.$emit('on-change', this.initSortList)
    },
    getSortData(){
      const setting = JSON.parse(window.localStorage.index_user_setting || "{}")

      // 如果增减分区要先判断len 拿len去decode 否则返回本地排序
      if(setting.len === this.sortNumber){
        return Cantor.decode(setting.sort, this.sortNumber)
      }else{
        return this.defaultSort()
      }
    },
    setSortList(sortData) {
      let arr = []
      for(let i = 0; i < sortData.length; i++) {
        const id = sortData[i]
        arr.push({
          sort: id,
          name: (this.config[id].navName || this.config[id].name),
          type: this.config[id].type
        })
      }
      this.sortList = arr
    },
    //默认排序
    defaultSort(){
      let arr = []
      for(let i = 0; i < this.sortNumber; i++){
        arr[i] = i
      }
      return arr
    },
    // 结果存到服务器
    setNavDataToDB(arr) {
      const setting = { sort: Cantor.encode(arr, this.sortNumber), len: this.sortNumber }
      if(setting.sort.toString() === this.initSortList.toString()) return
      this.setElevatorSortData({
        settings: JSON.stringify(setting)
      })
    },
    // 结果存到本地
    setNavDataTolocalStorage(arr) {
      const setting = {
        sort: Cantor.encode(arr, this.sortNumber),
        len: this.sortNumber
      }
      window.localStorage.index_user_setting = JSON.stringify(setting)
    },
    onEdit() {
      this.isEdit = !this.isEdit
    },
    onInput(info) {
      let arr = []
      for(let i = 0; i < info.length; i++) {
        arr.push(info[i].sort)
      }

      this.setNavDataTolocalStorage(arr)
      // if(window.UserStatus && window.UserStatus.userInfo && window.UserStatus.userInfo.isLogin){
        this.setNavDataToDB(arr)
      // }

      this.$emit('on-change', arr)
    },
    scrollHandle() {
      const elevatorDom = document.querySelector('#elevator')
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      const minTop = document.querySelector('.first-screen').offsetTop + (this.needOffset ? 106 : 0)
      const centerTop = (document.documentElement.clientHeight - (elevatorDom.offsetHeight + 70)) / 2
      //定位
      const t = scrollTop < minTop ? minTop - scrollTop : (centerTop < 0 ? 10 : centerTop)
      elevatorDom.style.top = `${t}px`

      if(scrollTop < 700) {
        this.currentFloor = -1
        return
      }

      for(let i = 0; i < this.sortList.length; i++) {
        const el = document.querySelector(`#bili_${this.sortList[i]['type']}`)
        const top = el.offsetTop
        const height = el.offsetHeight
        const dest = scrollTop - (height/2)
        if(top > dest) {
          this.currentFloor = i
          break
        }
      }
    },
    moveTo(type) {
      const el = document.querySelector(`#bili_${type}`)
      window.scroll(0, el.offsetTop)
    },
    scrollTo(val) {
      window.scroll(0, val)
    },
  },
  mounted() {
    this.getElevatorSortData()

    this.scrollHandle()
    window.addEventListener('scroll', e => {
      this.scrollHandle()
    })
    window.addEventListener('resize', () => this.scrollHandle())
  }
}
</script>

<style lang="less">
.elevator {
  position: fixed;
  left: calc(50% + 3px);
  top: 10px;
  margin-left: 825px;
  z-index: 10;

  .list-box {
    padding-top: 6px;
    position: relative;
    background: #FFFFFF;
    border: 1px solid #e7e7e7;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 2;
    .item {
      width: 54px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      cursor: pointer;
      transition: all .2s;
      user-select:none;
      background: #FFFFFF;
      &.sort{
        height: 32px;
        line-height: 32px;
        position: relative;
        border-top: 1px solid #e7e7e7;
        margin-top: 5px;
      }
      &.back-top {
        position: absolute;
        left: -1px;
        bottom: -32px;
        width: 56px;
        line-height: 30px;
        height: 32px;
        border: 1px solid #e7e7e7;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        .bilifont {
          font-size: 26px;
        }
      }
      &.back-old {
        position: absolute;
        width: 56px;
        height: 42px;
        line-height: 16px;
        left: -1px;
        bottom: -82px;
        border-radius: 10px;
        border: 1px solid #e7e7e7;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .bilifont {
        color: #999;
      }
      &:hover, &.on {
        background-color: #00a1d6;
        color: #fff;
        .bilifont {
          color: #fff;
        }
      }
    }
  }
  .ear {
    position: absolute;
    top: -10px;
    font-size: 12px;
    left: 3px;
    z-index: 2;
  }
  .bg23 {
    display: none;
    position: absolute;
    width: 130px;
    height: 105%;
    top: -20px;
    right: -15px;
    background-color:rgba(255,255,255, .8);
    padding: 40px;
    box-sizing: content-box;
    border-radius: 2px;
    background-image: url('https://s1.hdslb.com/bfs/static/jinkela/home/asserts/tab2233.png');
    background-repeat: no-repeat;
    background-position: 16px 20px;
  }

  &.edit{
    z-index: 1000;
    .mask {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
    }
    .bg23 {
      display: block;
    }
  }
}
.slicksort-selected {
  text-align: center;
  line-height: 28px;
  background-color: #00a1d6;
  color: #fff;
  pointer-events:stroke !important;
  z-index: 1001;
  .bilifont {
    color: #fff;
  }
}
</style>

