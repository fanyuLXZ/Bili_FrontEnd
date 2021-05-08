<template>
  <div class="comment_wrap cc-content-body">
    <div class="new-link-top-wrap">
      <div id="tab-container" class="new-link-top-container">
        <a href="/platform/comment/article" class="link-top-item router-link-exact-active active">
          <span>视频评论</span>
        </a>
      </div>
    </div>
    <div class="comment_content">
      <div class="bar-search_wrap">
        <div class="bcc-input  ">
          <input placeholder="搜索视频评论" spellcheck="false" maxlength="999" minlength="0" type="text" class="bcc-input-inner input">
        </div>
        <i class="bcc-iconfont bcc-icon-ic_search_ search" data-reporter-id="130"></i>
      </div>
      <header class="commet_header">
        <div class="title_wrap">
          <span class="title-txt">全部评论</span>
          <span class="num">(20)</span>
        </div>
        <div class="select_wrap">
          <div class="bcc-select" style="width: 112px;">
            <div class="bcc-select-input-wrap">
              <input type="text" readonly="readonly" placeholder="请选择内容" class="bcc-select-input-inner">
              <i class="bcc-iconfont bcc-icon-ic_drop-down"></i>
            </div>
            <div class="bcc-select-list-wrap" style="display: none;">
              <ul class="bcc-select-option-list">
                <li class="bcc-option selected" data-reporter-id="131">
                  <span>全部时间</span>
                  <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                </li>
                <li class="bcc-option" data-reporter-id="132">
                  <span>最近1天</span>
                  <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                </li>
                <li class="bcc-option" data-reporter-id="133">
                  <span>最近7天</span>
                  <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                </li>
                <li class="bcc-option" data-reporter-id="134">
                  <span>最近1年</span>
                  <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
                </li>
              </ul>
            </div>
          </div>
          <div class="bcc-select" style="width: 208px;">
            <div class="bcc-select-input-wrap">
              <input type="text" readonly="readonly" placeholder="请选择内容" class="bcc-select-input-inner">
              <i class="bcc-iconfont bcc-icon-ic_drop-down"></i>
            </div>
            <div class="bcc-select-list-wrap" style="display: none;">
              <ul class="bcc-select-option-list">
                <div class="search-input">
                  <div class="bcc-input">
                    <input placeholder="输入视频搜索关键字" spellcheck="false" maxlength="999" minlength="0" type="text" class="bcc-input-inner input">
                  </div>
                  <i class="bcc-iconfont bcc-icon-ic_search_ search"></i>
                </div>
                <div callback="function () { [native code] }" class="article-list">
                  <div style="overflow: hidden;">
                    <div data-simplebar="init">
                      <div class="simplebar-wrapper" style="margin: 0px;">
                        <div class="simplebar-height-auto-observer-wrapper">
                          <div class="simplebar-height-auto-observer"></div>
                        </div>
                        <div class="simplebar-mask">
                          <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                            <div class="simplebar-content-wrapper" style="height: auto; overflow: hidden;">
                              <div class="simplebar-content" style="padding: 0px;">
                                <li class="bcc-option selected">
                                  <div class="ellipsis select-article_wrap" data-reporter-id="137">
                                    <div class="ac-link ellipsis no-active active-item">全部视频</div>
                                  </div>
                                  <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i></li>
                                <li class="bcc-option">
                                  <div class="ellipsis select-article_wrap" data-reporter-id="138">
                                    <div class="ac-link ellipsis no-active">
                                      【重明鸟攻略】全人物+全拼图+超详细文字说明+剧情加速跳过!（已完结）
                                    </div>
                                  </div>
                                  <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i></li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
                      </div>
                      <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                        <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                      </div>
                      <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                        <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div class="operate_wrap">
        <div class="operate_left">
          <label class="bcc-checkbox">
            <span class="bcc-checkbox-checkbox">
              <i class="bcc-iconfont bcc-icon-ic_MenuButton-tick"></i>
              <input type="checkbox" name="默认" aria-hidden="true" value="false">
            </span>
            <span class="bcc-checkbox-label">全选</span>
          </label>
          <button class="bcc-button bcc-button--default is-disabled large" data-reporter-id="135" disabled="disabled">
            <span>举报</span>
          </button>
          <button class="bcc-button del bcc-button--default is-disabled large" data-reporter-id="136" disabled="disabled"><!----><span>删除</span></button>
        </div>
        <div class="operate_right">
          <div class="operate-txt active">最近发布</div>
          <div class="operate-txt">点赞最多</div>
          <div class="operate-txt">回复最多</div>
        </div>
      </div>
      <section class="section-list_wrap">
        <comment-list-item v-for="(item,index) in comments" :key="index" :item="item" />
      </section>
      <div class="tips">
        仅展示最近的50000条评论
      </div>
      <div class="bcc-pagination-container bcc-pagination">
        <ul class="bcc-pagination"><!---->
          <li class="bcc-pagination-item selected"><a>1</a></li>
          <li class="bcc-pagination-item"><a>2</a></li>
          <li class="bcc-pagination-item bcc-pagination-next">下一页</li>
          <li class="bcc-pagination-extra">
            <div class="bcc-pagination-total"> 共2页 / 20个</div><!----></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CommentListItem from "@/components/right/comment/comment-list-item";
export default {
  name: "Article",
  components: {CommentListItem},

  data(){
    return{
      comments:[
        {
          bvid:"BV1s7411f7j8",    //视频id
          cover:"1.jpg",    //视频预览图
          ctime:"2020-03-21 10:24:08",    //评论时间
          like:0,   //点赞数
          message:"回复 @冰丿繁羽 :我也是疯狂死了n次之后被看不过去的小伙伴告知的（因为别的刺都没捆绳）0",   //回复内容
          mid:6550134,    //uid
          parent_info:{
            bvid:"BV1s7411f7j8",    //视频id
            content:{
              message:"噢！原来如此，我滴妈我都不晓得我跳了多久（哭死）",   //回复评论信息
            },
            ctime:"2020-03-21 08:43",   //评论时间
            like:0,   //点赞数
            member:{
              avatar:"2.jpg",   //头像
              level_info:{
                current_level:5   //等级
              },
              mid:"26119890",   //uid
              sex:"男",    //性别
              uname:"xxx",    //姓名
              vip:{
                vipType:1,   //vip类型
                vipStatus:true,   //是否是会员
              }
            }
          },
          relation:1,   //关系 1为不是我的粉丝 2为是我的粉丝
          replier:"请叫我夜瞳",    //姓名
          title:"【重明鸟攻略】全人物+全拼图+超详细文字说明+剧情加速跳过!（已完结）",    //视频标题
          uface:"1.ipg",    //头像
        },
        {
          bvid:"BV1s7411f7j8",    //视频id
          cover:"1.jpg",    //视频预览图
          ctime:"2020-03-17 21:28:59",    //评论时间
          like:0,   //点赞数
          message:"起飞!",   //评论内容
          mid:20182239,    //uid
          parent_info:{
            bvid:null,    //视频id
            content:{
              message:null,   //回复评论信息
            },
            ctime:null,   //评论时间
            like:0,   //点赞数
            member:{
              avatar:null,   //头像
              level_info:{
                current_level:0   //等级
              },
              mid:null,   //uid
              sex:null,    //性别
              uname:null,    //姓名
              vip:{
                vipType:0,   //vip类型
                vipStatus:false,   //是否是会员
              }
            }
          },
          relation:2,   //关系 1为不是我的粉丝 2为是我的粉丝
          replier:"时崎凜喵",    //姓名
          title:"【重明鸟攻略】全人物+全拼图+超详细文字说明+剧情加速跳过!（已完结）",    //视频标题
          uface:"1.ipg",    //头像
        },
        {
          bvid:"BV1s7411f7j8",    //视频id
          cover:"1.jpg",    //视频预览图
          ctime:"2020-03-21 08:43:57",    //评论时间
          like:0,   //点赞数
          message:"噢！原来如此，我滴妈我都不晓得我跳了多久（哭死）",   //回复内容
          mid:26119890,    //uid
          parent_info:{
            bvid:"BV1s7411f7j8",    //视频id
            content:{
              message:"然后第四节地下跳特别长的尖刺的那里（21分钟左右），那个刺可以推倒",   //回复评论信息
            },
            ctime:"2020-03-21 08:43",   //评论时间
            like:0,   //点赞数
            member:{
              avatar:"2.jpg",   //头像
              level_info:{
                current_level:5   //等级
              },
              mid:"26119890",   //uid
              sex:"男",    //性别
              uname:"请叫我夜瞳",    //姓名
              vip:{
                vipType:1,   //vip类型
                vipStatus:true,   //是否是会员
              }
            }
          },
          relation:1,   //关系 1为不是我的粉丝 2为是我的粉丝
          replier:"冰丿繁羽",    //姓名
          title:"【重明鸟攻略】全人物+全拼图+超详细文字说明+剧情加速跳过!（已完结）",    //视频标题
          uface:"1.ipg",    //头像
        },
        {
          bvid:"BV1s7411f7j8",    //视频id
          cover:"1.jpg",    //视频预览图
          ctime:"2020-03-21 08:43:57",    //评论时间
          like:0,   //点赞数
          message:"噢！原来如此，我滴妈我都不晓得我跳了多久（哭死）",   //回复内容
          mid:26119890,    //uid
          parent_info:{
            bvid:"BV1s7411f7j8",    //视频id
            content:{
              message:"然后第四节地下跳特别长的尖刺的那里（21分钟左右），那个刺可以推倒",   //回复评论信息
            },
            ctime:"2020-03-21 08:43",   //评论时间
            like:0,   //点赞数
            member:{
              avatar:"2.jpg",   //头像
              level_info:{
                current_level:5   //等级
              },
              mid:"26119890",   //uid
              sex:"男",    //性别
              uname:"请叫我夜瞳",    //姓名
              vip:{
                vipType:1,   //vip类型
                vipStatus:true,   //是否是会员
              }
            }
          },
          relation:1,   //关系 1为不是我的粉丝 2为是我的粉丝
          replier:"冰丿繁羽",    //姓名
          title:"【重明鸟攻略】全人物+全拼图+超详细文字说明+剧情加速跳过!（已完结）",    //视频标题
          uface:"1.ipg",    //头像
        },
      ]
    }
  },
}
</script>