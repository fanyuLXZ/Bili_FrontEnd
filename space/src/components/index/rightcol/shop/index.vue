<template>
  <!-- 空间所有者账户信息 -->
  <div v-show="_bili_space_state === 'owner' && isShop"
       class="section shop">
    <h3 class="section-title">商家中心</h3>
    <a :href="shopUrl"
       class="shop-link"
       target="_blank">进入 ></a>
    <div class="info">
      <div class="content">
        <div class="detail clearfix">
          <div class="item">
            <span class="title">在售商品</span>
            <span class="number">{{ goodsNumber | toWan }}</span>
          </div>
          <div class="item">
            <span class="title">本月销量</span>
            <span class="number">{{ sales | toWan }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'shop',
  data() {
    return {
      goodsNumber: 0,
      sales: 0,
      isShop: false,
      shopUrl: '',
    }
  },
  mounted() {
    if (this._bili_space_state === 'owner') {
      this.getShop().then(rs => {
        this.isShop = true
        this.goodsNumber = rs.goods_num
        this.sales = rs.month_sales
        this.shopUrl = rs.url
      }).catch(() => {
      })
    }
  },
  methods: {...mapActions(['getShop'])},
  computed: {...mapGetters(['_bili_space_state'])},
}
</script>
<style lang="less">
.section.shop {
  .shop-link {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 46px;
    padding: 0 20px;
    color: #99a2aa;
    font-size: 12px;
    font-weight: normal;

    &:hover {
      color: #00a1d6;
    }
  }

  .detail {
    .item {
      float: left;
      width: 50%;

      span {
        display: block;
        margin: 0 auto;
        text-align: center;
      }

      .title {
        color: #6d757a;
        font-size: 12px;
      }

      .number {
        color: #222;
        font-size: 14px;
      }
    }
  }
}

</style>
