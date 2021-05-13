<!--  作者:欧阳苏蓉 个人中心-会员积分  -->
<template>
  <div class="security-right">
    <div class="security-right-title">
      <span class="security-right-title-icon"></span>
      <span class="security-right-title-text">会员积分</span> <!---->
    </div>
    <ul class="tabs-nav">
      <li class="tabs-nav-item active">
        <span >首页 </span>
      </li>
    </ul>
    <div class="points-index" style="">
      <points_header_warp :vPoint="vPoint"></points_header_warp>
      <pointsExchangeWarp></pointsExchangeWarp>
      <pointHow></pointHow>
    </div>
    <div class="bottom-help" style="">
      <a href="https://www.bilibili.com/blackboard/help.html#大会员FAQ?id=4230439312364a849e1ebc81a06a4337" target="_blank">
        大会员帮助&gt;
      </a>
      <a href="https://www.bilibili.com/blackboard/big-protocol.html" target="_blank" class="array-bottom">
        大会员用户协议&gt;
      </a>
    </div>
  </div>
</template>

<script>
import points_header_warp from "../components/points/pointsHeaderWarp"
import pointsExchangeWarp from "@/components/points/pointsExchangeWarp";
import pointHow from "@/components/points/pointHow";
import { vip_point} from "../api/home";
export default {
  name: "points",

  data(){
    return{
      vPoint:0,   //会员积分
    }
  },

  components:{
    points_header_warp,
    pointsExchangeWarp,
    pointHow
  },

  mounted() {
    vip_point().then(
      (res)=>{
        //获取返回的json对象
        this.vPoint = res.data.data.pointBalance
      })
  }
}
</script>

<style>
@import "../assets/personalcenter/points.css";
</style>
<style type="text/css">
.points-how-warp {
  margin: 0 20px;
  padding-top: 40px;
  padding-bottom: 65px;
  border-bottom: 1px solid #e5e9ef
}

.points-how-title {
  font-size: 20px;
  color: #222;
  margin-bottom: 30px
}

.points-faq-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.points-faq-item {
  display: inline-block;
  width: 130px;
  height: 100px
}

.points-faq-line {
  margin: 20px 0;
  position: relative;
  border-top: 1px solid #e5e9ef
}

.line-circle {
  position: absolute;
  display: inline-block;
  width: 9px;
  height: 9px;
  background-color: #e5e9ef;
  border-radius: 50%;
  border: 8px solid #fff;
  top: -13px
}

.points-faq-line span:first-of-type {
  left: 73px
}

.points-faq-line span:nth-of-type(2) {
  left: 282px
}

.points-faq-line span:nth-of-type(3) {
  left: 490px
}

.points-faq-line span:nth-of-type(4) {
  right: 64px
}

.points-faq-info {
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.points-faq-info-list {
  display: inline-block;
  width: 180px;
  height: 88px;
  color: #222;
  line-height: 24px
}

.go-movie, .points-faq-info-list {
  text-align: center;
  font-size: 14px
}

.go-movie {
  position: absolute;
  bottom: 0;
  left: 59px;
  display: block;
  margin: 0 auto;
  width: 74px;
  height: 28px;
  color: #00a1d6;
  line-height: 28px;
  border: 1px solid #00a1d6;
  border-radius: 4px;
  background-color: #fff
}

.go-movie:hover {
  background-color: #00a1d6;
  color: #fff
}

.xts {
  margin-top: 30px
}
</style>