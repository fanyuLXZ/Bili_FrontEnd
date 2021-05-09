<!--  作者：欧阳苏蓉 banner-->
<template>
  <div class="carousel-box" style="width:620px;height:220px;"><!---->
    <div class="carousel-module">
      <div class="panel">

        <div class="about">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide a">

              </div>
              <div class="swiper-slide b">Slide 2</div>
              <div class="swiper-slide c">Slide 3</div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination trig">
            <span class="on"></span>
            <span class=""></span>
            <span class=""></span>
            <span class=""></span>
          </div>

        </div>

<!--        <ul class="pic" style="width: 400%; margin-left: -200%;">-->
<!--          <li data-id="706737" data-loc-id="52" class="scrollx off">-->
<!--            <a href="https://www.bilibili.com/video/BV1r5411A7sH" target="_blank">-->
<!--              <img src="//i0.hdslb.com/bfs/feed-admin/b042cc3412b9cf35bfbf05db59d0ab40b3c0696e.jpg@1240w_440h.webp" alt="" width="620" height="220">-->
<!--            </a>&lt;!&ndash;&ndash;&gt;-->
<!--          </li>-->
<!--          <li data-id="705548" data-loc-id="52" class="scrollx off">-->
<!--            <a href="https://www.bilibili.com/read/cv10978071" target="_blank">-->
<!--              <img src="//i0.hdslb.com/bfs/feed-admin/1775cf34de251e13b90f495284070a30500eb1bb.jpg@1240w_440h.webp" alt="" width="620" height="220">-->
<!--            </a>&lt;!&ndash;&ndash;&gt;-->
<!--          </li>-->
<!--          <li data-id="704629" data-loc-id="52" class="scrollx on">-->
<!--            <a href="https://www.bilibili.com/read/cv10954851" target="_blank">-->
<!--              <img src="//i0.hdslb.com/bfs/feed-admin/982cb7551c167e975c6fcb620b43560ce9dd6388.png@1240w_440h.webp" alt="" width="620" height="220">-->
<!--            </a>&lt;!&ndash;&ndash;&gt;-->
<!--          </li>-->
<!--          <li data-id="706414" data-loc-id="52" class="scrollx off">-->
<!--            <a href="https://www.bilibili.com/video/BV1Fh411S7SQ" target="_blank">-->
<!--              <img src="//i0.hdslb.com/bfs/feed-admin/b28fa6b9c5d457b2b354e217a1cbd0e0f668db84.jpg@1240w_440h.webp" alt="" width="620" height="220">-->
<!--            </a>&lt;!&ndash;&ndash;&gt;-->
<!--          </li>-->
<!--        </ul>-->
<!--        <ul class="title">-->
<!--          <a href="https://www.bilibili.com/video/BV1r5411A7sH" target="_blank" class="">&lt;!&ndash;&ndash;&gt;-->
<!--            近战法师-->
<!--          </a>-->
<!--          <a href="https://www.bilibili.com/read/cv10978071" target="_blank" class="on">&lt;!&ndash;&ndash;&gt;-->
<!--            一切皆有可能-->
<!--          </a>-->
<!--          <a href="https://www.bilibili.com/read/cv10954851" target="_blank" class="">&lt;!&ndash;&ndash;&gt;-->
<!--            这又是什么奇妙的展开-->
<!--          </a>-->
<!--          <a href="https://www.bilibili.com/video/BV1Fh411S7SQ" target="_blank" class="">&lt;!&ndash;&ndash;&gt;-->
<!--            幻想乡拾遗-->
<!--          </a>-->
<!--        </ul>-->
<!--        <ul class="trig">-->
<!--          <span class="on"></span>-->
<!--          <span class=""></span>-->
<!--          <span class=""></span>-->
<!--          <span class=""></span>-->
<!--        </ul>-->


      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "carousel-box",

  data() {
    return {}
  },

  mounted(){
    new Swiper ('.swiper-container', {
      loop: true,
      speed: 1000, //匀速时间
      // 如果需要分页器
      pagination: '.swiper-pagination',
      //如果需要自动切换海报
      autoplay: 5000
    })
  }
}
</script>

<style lang="less">
.swiper-container{
  height: 220px;
  width: 100%;
  .swiper-wrapper{
    .swiper-slide{
      width: 100%;
      height: 100%;

      text-align: center;
      line-height: 500px;
    }
    .a{
      background-color: #0000ff;
    }
    .b{
      background-color: pink;
    }
    .c{
      background-color: black;
    }
  }
}
</style>