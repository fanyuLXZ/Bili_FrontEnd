<template>
  <div class="activity-main">
    <div id="app" class="tpl-wrap">
      <div>
        <div class="wrapper">
          <Banner/>
          <div class="container">
            <p></p>
            <div class="content left" style="width:100%;min-height: 455px;">
              <div class="subtitle-new">友情链接</div>
              <div class="article"><br>
                <div class="li-box">
                  <ul>
                    <li><a href="http://comic.qq.com/" target="_blank"><img alt=""
                                                                            border="0"
                                                                            height="31"
                                                                            src="//static.hdslb.com/ad-images/minilogo-tengxun.jpg"
                                                                            title="腾迅动漫"
                                                                            width="88"></a></li>
                    <li><a href="http://comic.sina.com.cn/" target="_blank"><img alt=""
                                                                                 border="0"
                                                                                 height="31"
                                                                                 src="//static.hdslb.com/ad-images/sinadongman.jpg"
                                                                                 title="新浪动漫"
                                                                                 width="88"></a></li>
                    <li><a href="http://pinyin.sogou.com/skins/?=bilibili" target="_blank"><img alt=""
                                                                                                border="0"
                                                                                                height="31"
                                                                                                src="//static.hdslb.com/ad-images/sougoushuru.jpg"
                                                                                                title="搜狗输入法"
                                                                                                width="88"></a>
                    </li>
                    <li><a href="http://www.sgamer.com/" target="_blank"><img alt=""
                                                                              border="0"
                                                                              height="31"
                                                                              src="//static.hdslb.com/ad-images/link/cjwj.jpg"
                                                                              title="超级玩家" width="88"></a>
                    </li>
                    <li><a href="http://anime.kankan.com/" target="_blank"><img alt=""
                                                                                border="0"
                                                                                height="31"
                                                                                src="//static.hdslb.com/ad-images/xlkk_anime.jpg"
                                                                                title="迅雷看看动漫"
                                                                                width="88"></a></li>
                    <li><a href="https://www.touying.com/" target="_blank"><img alt=""
                                                                                border="0"
                                                                                height="31"
                                                                                src="//i0.hdslb.com/bfs/activity-plat/static/20180531/33e614fab6762576e23d0564d216ca0d/90ky8x3q8w.png"
                                                                                title="投影网"
                                                                                width="88"></a></li>
                  </ul>
                </div>
                <div class="clear"></div>
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/style/blackboard/contact_style.css"></style>

<script>
import Banner from "../../../../public/src/components/blackBoard_Banner/banner";

export default {
  name: "friends-links",
  components: {
    Banner
  },
  metaInfo: {
    title: "友情链接"
  }
}
</script>


<style scoped>
#app {
  background-color: rgb(245, 245, 245);
}

.article {
  margin: 0;
  padding: 0;
  font-size: inherit;
}

.article ul li {
  display: inline-block;
  margin: 9px;
}


.li-box {
  text-align: left;
}

.li-box ul li:first-child {
  margin-left: 0;
}

.li-box ul li:last-child {
  margin-right: 0;
}

.clear {
  margin: 0;
  padding: 0;
  border: 0;
  clear: both;
}

.article {
  margin: 0;
  padding: 0
}
</style>