<template>
  <div class="exchange-btn">
    <div class="btn btn-change" @click="load" v-van-report:exchange.click="type"><i class="bilifont bili-icon_caozuo_huanyihuan" :class="{'quan': !state}"></i>{{$HomeLang['25']}}</div>
    <a class="btn more" :href="link" target="_blank">{{$HomeLang['4']}}<i class="bilifont bili-icon_caozuo_qianwang"></i></a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    },
    state: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  methods: {
    load() {
      if(this.state) {
        this.$emit('on-change')
      }
    }
  }
}
</script>


<style lang="less">
.exchange-btn {
  display: flex;
  .btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 22px;
    text-align: center;
    border: 1px solid #C0C0C0;
    border-radius: 2px;
    font-size: 12px;
    color: #505050;
    transition: all .2s;
    line-height: 16px;
    .bilifont {
      vertical-align: middle;
    }
    &:hover {
      background-color: #f4f4f4;
    }
    &:active {
      background-color: #ccc;
    }
  }
  .more {
    padding: 0 0 0 12px;
    width: 58px;
    margin-left: 12px;
  }
  .btn-change {
    padding: 0 0 0 6px;
    width: 72px;
    .bilifont {
      margin-right: 4px;
      transition: all .5s;
      &.quan {
        animation: quan .8s linear infinite;
      }
    }
    &:hover{
      .bilifont {
        transform: rotate(-360deg);
      }
    }
  }
}

@keyframes quan{
  0%{transform:rotate(360deg);}
  25%{transform:rotate(270deg);}
  50%{transform:rotate(180deg);}
  75%{transform:rotate(90deg);}
  100%{transform:rotate(0deg);}
}
</style>
