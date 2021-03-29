<template>
  <!-- 投稿 -->
  <div>
    <van-popover
      popper-class="van-popper-upload"
      placement="bottom" 
      trigger="hover"
      transition="slide-fade"
      :open-delay="100"
      @show="uploadShow"
      >
      <div class="vp-container">
        <a class="upload-item" :href="item.link" target="_blank"
           v-for="(item, index) in uploadConfig"
           :key="index" v-van-report:mininavupload.click="item.title">
           <i class="bilifont" :class="`bili-icon_dingdao_${item.icon}`"></i>
          <span class="item-title">{{ item.title }}</span>
        </a>
      </div>
      <span @click="goUpload" slot="reference"  class="mini-upload" v-van-report:mininav.click="`投稿`">
        {{$HeadLang['40']}}
      </span>
    </van-popover>
  </div>
</template>

<script>
import { customReport } from 'g-public/js/utils'
export default {
  name: 'NavUserCenterUpload',
  data() {
    return {
      uploadConfig: [{
        title: this.$HeadLang['11'],
        icon: 'wenzhangtougao',
        link: '//member.bilibili.com/platform/upload/text/apply',
      }, {
        title: this.$HeadLang['10'],
        icon: 'yinpintougao',
        link: '//member.bilibili.com/platform/upload/audio/frame',
      }, {
        title: this.$HeadLang['82'],
        icon: 'tiezhitougao',
        link: '//member.bilibili.com/platform/upload/sticker',
      }, {
        title: this.$HeadLang['9'],
        icon: 'shipintougao',
        link: '//member.bilibili.com/platform/upload/video/frame',
      }, {
        title: this.$HeadLang['41'],
        icon: 'tougaoguanli1',
        link: '//member.bilibili.com/platform/upload-manager/article',
      }],
    }
  },
  methods: {
    goUpload() {
      window.open('//member.bilibili.com/platform/upload/video/frame', '_blank')
    },
    uploadShow() {
      customReport('mininavupload')
    }
  },
}
</script>

<style lang="less" scoped>
// hover panel
.van-popper-upload {
  background: #FFFFFF;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.20);
  border-radius: 2px;
  width: 380px;

  .vp-container {
    width: 100%;
    height: 78px;
    display: flex;
  }

  .upload-item {
    cursor: pointer;
    width: 76px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: .2s ease;

    &:hover {
      background-color: #F4F4F4;
      // .bilifont {
      //   color: #00a1d6;
      // }
      color: #212121;
    }
  }


  .item-title {
    margin-top: 6px;
  }

}

.bilifont {
  vertical-align: middle;
  color: #757575;
  font-size: 26px
}


.mini-upload {
  cursor: pointer;
  position: relative;
  color: #fff;
  font-size: 14px;
  display: block;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #FB7299;
  border-radius: 2px;
  margin-left: 14px;

  &:hover {
    color: #fff;
  }

}

@media screen and (max-width: 1122px) {
  .mini-upload {
    width: 60px;
  }
}

</style>

<style lang="less">
// reset van style
.van-popover.van-popper.van-popper-upload {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px !important;
}
</style>
