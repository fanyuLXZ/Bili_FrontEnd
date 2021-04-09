<template>
  <div id="app" class="wrapper">
    <Banner/>
    <div class="container">
      <div class="content clearfix">
        <div class="subtitle-new">合作洽谈</div>

        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">广告投放</div>
          <div><br>
            进入<a href="https://e.bilibili.com">B站营销官网</a>
          </div>
        </div>
        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">商务合作</div>
          <div><br>
            联系邮箱:<strong>bd@bilibili.com</strong>
            <br>
            联系邮箱:<strong>Oasis@bilibili.com</strong>
          </div>
        </div>

        <!--
          <div class="inner-box" style="display: inline-block; _display: inline;">
            <div class="inner-box-title">直播合作</div>
            <div><br />
            联系邮箱:<strong>zbbc@bilibili.com</strong></div>
            <span class="color-alert" style="font-size: 12px;">(直播各类合作)</span>
          </div>
          -->

        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">游戏合作</div>
          <div><br>
            联系邮箱:<strong>gamebd@bilibili.com</strong></div>
        </div>
        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">媒体联络</div>
          <div><br>
            联系邮箱:<strong>pr@bilibili.com</strong></div>
        </div>
        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">视频推广</div>
          <div><br>
            联系邮箱:<strong>video@bilibili.com</strong><br>
            <span class="color-alert" style="font-size: 12px;">(谢绝商务/广告类视频)</span></div>
        </div>
        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">漫展票务合作</div>
          <div><br>
            联系邮箱:<strong>kfbd@bilibili.com</strong><br></div>
        </div>

        <!--
        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">UP主运营</div>
          <div><br />
          联系邮箱:<strong>upteam@bilibili.com</strong><br />
          <span class="color-alert" style="font-size: 12px;">(UP主入坑/对接/运营指导)</span></div>
        </div>
        -->

      </div>
      <div class="content clearfix">
        <div class="subtitle-new">用户服务</div>
        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">产品问题反馈</div>
          <br>
          <div>可尝试 <a class="link" href="https://www.bilibili.com/blackboard/help.html" target="_blank">帮助中心</a>
            查询各类产品问题（大会员、B币、移动端等）如有需要，还可以联系人工客服哦<br>
          </div>
        </div>

        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">游戏问题反馈</div>
          <br>
          <div>联系邮箱：<strong>gamehelp@bilibili.com</strong><br>
            联系QQ：<strong>800864530</strong><br>
            客服热线：<strong>400-178-2233</strong><br>
            热线受理时间：每日<strong>9:00-21:00</strong><br>
          </div>
        </div>

        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">直播问题反馈</div>
          <br>
          <div>可尝试 <a class="link" href="https://link.bilibili.com/p/help/index#/" target="_blank">帮助中心</a>
            查询各类直播问题（成为主播、直播玩法、参与互动等）如有需要，还可以联系人工客服哦<br>
            <br>
          </div>
        </div>

      </div>

      <!--
      <div class="clearfix">
          <div class="subtitle-new">版权问题</div>
          <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">版权问题反馈</div><br />
          <div>联系邮箱：<strong>copyright@bilibili.com</strong><br />
           </div>
          </div>
      </div>
      -->

      <div class="content clearfix">
        <div class="subtitle-new">安全响应</div>
        <div class="inner-box" style="display: inline-block; _display: inline;">
          <div class="inner-box-title">安全漏洞报告</div>
          <br>
          <div>通过<a class="link" href="https://security.bilibili.com/" target="_blank">哔哩哔哩安全应急响应中心</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/style/blackboard/contact_style.css"></style>
<style scoped>
#app {
  background-color: rgb(245, 245, 245);
  zoom: 1;
  font: 12px/1.125 Arial, Helvetica, sans-serif;
  color: #7b7f82;
  text-align: left;
}

#banner {
  position: relative;
  height: 183px;
}

.clearfix {
  zoom: 1;
  overflow: hidden;
}

.inner-box {
  height: 150px;
  padding: 33px 35px 0;
}

a:active, a {
  color: #1184B4;
}

.subtitle-new {
  height: 34px;
}

</style>

<script>
import Banner from '../../../../public/src/components/blackBoard_Banner/banner'

export default {
  name: "contactBody",
  components: {
    Banner
  },
  metaInfo: {
    title: "联系我们"
  }
}
</script>


