<template>
<!--  <div class="bcc-select-list-wrap" style="display: none;">-->
<!--    <ul class="bcc-select-option-list">-->
<!--      <li class="bcc-option selected">-->
<!--        <div class="dropdown__active"><span >投稿时间排序</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i></li>-->
<!--      <li class="bcc-option">-->
<!--        <div class=""><span >播放数排序</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i></li>-->
<!--      <li class="bcc-option">-->
<!--        <div class=""><span >评论数排序</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i></li>-->
<!--      <li class="bcc-option">-->
<!--        <div class=""><span >收藏数排序</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i></li>-->
<!--      <li class="bcc-option">-->
<!--        <div class=""><span >弹幕数排序</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i></li>-->
<!--    </ul>-->
<!--  </div>-->

  <div class="bcc-select-list-wrap" >
    <ul class="bcc-select-option-list">
      <li class="bcc-option" :class="index===0?'selected':''" v-for="(item,index) in (check?disable:active)" :key="index">
        <div class=""><span >{{ item }}</span></div>
        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
      </li>
    </ul>
  </div>

<!--  <div class="bcc-select-list-wrap" style="display: none;">-->
<!--    <ul class="bcc-select-option-list">-->
<!--      <li class="bcc-option selected">-->
<!--        <div>全部分区</div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option">-->
<!--        <div class=""><span>游戏</span><span>(1)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>生活</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>娱乐</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>影视</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>音乐</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>知识</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>数码</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>动画</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>时尚</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>舞蹈</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>番剧</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>纪录片</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>鬼畜</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>国创</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>电视剧</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>电影</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>资讯</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>美食</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>动物圈</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--      <li class="bcc-option is-disabled">-->
<!--        <div class="dropdown__disable"><span>汽车</span><span>(0)</span></div>-->
<!--        <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "bcc-select-list-wrap",

  props:{
    check:Boolean
  },

  data(){
    return{
      disable: ["游戏", "生活", "娱乐", "影视", "音乐", "知识", "数码","动画","时尚","舞蹈","番剧","纪录片","鬼畜","国创","电视剧","电影","资讯","美食","动物圈","汽车"],
      active:["投稿时间排序","播放数排序","评论数排序","收藏数排序","弹幕数排序"]
    }
  }
}
</script>
