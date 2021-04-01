<template>
  <div class="special-recommend home-slide"
    v-van-lazyload="getCheeseRecommendData">
    <header 
      v-adReport="{
        data: {
          resource_id: resource_id,
          pos_num: 1,
          src_id: src_id,
          id: id,
          url: ''
        }, 
        locId: resource_id 
      }"
      :data-loc-id="resource_id"
    >{{ title }}</header>
    <div class="carousel" v-if="fetchEnd"> 
      <template v-if="!list.length">
        <van-slide ref="special" key='0'>
          <div class="item no_result">
            <a target="_blank"
                href="https://www.bilibili.com/cheese/"
                id="cheese_right_banner_title"
              >
               <van-image 
                src="https://i0.hdslb.com/bfs/activity-plat/static/20200714/953d0bfef678072bd11ec5fb6ff04190/nMOp2aGOf.png"
                :options="{c: 1, q: 100}"
                :width="`${width}`" 
                :height="`${height}`">
              </van-image>
            </a>
          </div>
        </van-slide>
      </template>

      <template v-else>
        <van-slide ref="special" auto :interval="5000" @change="change" key='1'>
          <div class="item" v-for="(item, index) in list" :key="`sr-${index}`">
            <a 
              :target="item.link ? '_blank' : '_self'"
              v-adReport="{
                data: {
                  resource_id: banner_resource_id,
                  pos_num: index + 1,
                  src_id: item.src_id,
                  id: item.id,
                  url: linkHandler(item.link)
                }, 
                locId: banner_resource_id,
                id: banner_resource_id 
              }"
              :data-loc-id="banner_resource_id"
            >
              <van-image 
                :src="item.cover"
                :options="{c: 1, q: 100}"
                :width="`${width}`" 
                :height="`${height}`">
              </van-image>
              <p class="title">{{ item.title }}</p>
            </a>
          </div>
        </van-slide>
        <div class="trigger" v-if="list.length > 1">
          <span 
            v-for="(item, index) in list" 
            :key="`trig-${index}`"
            @click="go(index)"
            :class="{'on': index === currentIndex}">
          </span>
        </div> 
      </template>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { trimHttp } from '../../../../public/js/utils'
import { getSpecialRecommend, getCheeseRecommend } from '../../../../public/apis/home'

export default {
  props: {
    width: 0,
    height: 0,
    position_id: 0,
    type: {
      type: String
    }
  },
  data() {
    return {
      trimHttp: trimHttp,
      list: [],
      currentIndex: 0,
      title: '',
      resource_id: '',
      src_id: '',
      id: '',
      banner_resource_id: '',
      fetchEnd: false
    }
  },
  methods: {
    change(index){
      this.currentIndex = index
    },
    go(index) {
      this.$refs.special.go(index)
    },

    linkHandler(url) {
      if (!url) return 'javascript:void(0);'
      if (!/^https?/.test(url)) {
        if (!/^\/\//.test(url)) {
             return 'https://' + url
        }
      }
      return url
    },

    // addSpmIdFrom(link = '') {
    //   if (!link) return ''
    //   if (link.indexOf('?') > -1) {
    //     link += '&spm_id_from=333.851.selfDef.focusmap'
    //   }  else {
    //     link += '?spm_id_from=333.851.selfDef.focusmap'
    //   }
    //   return link
    // },

    async getCheeseRecommendData() {
      try {
        const { data } = await getCheeseRecommend({
          load_type: 2
        })
        if(data.code === 0) {
          this.list = (data.data && data.data.recommend && data.data.recommend.banner) || []
          const { title, resource_id, banner_resource_id,src_id, id  } = data.data.recommend
          this.title = title || ' '
          this.resource_id =  resource_id
          this.banner_resource_id = banner_resource_id
          this.src_id = src_id
          this.id = id
        }
      } catch(err) {}
      finally {
        this.fetchEnd = true
      }
    }
  },
  mounted() {
    // this.getSpecialRecommendData()
  }
}
</script>


<style lang="less">
.special-recommend {
  width: 320px;
  header {
    height: 36px;
    margin-bottom: 16px;
    font-size: 20px;
    color: #212121;
    line-height: 36px;
  }
  .carousel, .van-slide {
    position: relative;
    width: 100% !important;
    height: 100% !important;
    img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  }
}

.item.no_result {
  &::before {
    display: none;
  }
}
</style>
