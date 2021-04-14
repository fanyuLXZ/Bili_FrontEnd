import CommonHeader from 'common/header'
import CommonNav from 'common/nav'
import CommonFixedNav from 'common/fixNav'
import toTop from 'common/toTop'
import favShare from 'common/favShare'
import { mapGetters, mapActions } from 'vuex'
import { UPDATE_WATCHLATER } from '@/vuex/mutation-types'

let FakeDanmu = null
let CoverPreview = null

export default {
  name: 'app',
  mounted() {
    const state = this._bili_space_state

    // 获取当前空间UP主的顶导数字
    this.fetchNavNum({
      mid: this._bili_space_mid,
    }).then(rs => {
      const video = rs.video
      const settings = this._bili_space_settings

      const channel = state === 'owner' ?
        rs.channel.master :
        rs.channel.guest
      const favlist = state === 'owner' ?
        rs.favourite.master :
        settings.privacy.fav_video ?
          rs.favourite.guest :
          -1
      const subs = state === 'owner' || settings.privacy.tags ? 0 : -1
      const qz = state === 'owner' || settings.privacy.groups ? 0 : -1

      rec('space_navigation_show', {
        tabstates: `video/${video}|channel/${channel}|favlist/${favlist}|subs/${subs}|qz/${qz}`,
      })
    })

    if (state !== 'owner') {
      require([ 'public/js/fakeDanmu.js', 'public/js/coverPreview.js' ], (fakeDanmu, coverPreview) => {
        // console.log(fakeDanmu, coverPreview)
        FakeDanmu = fakeDanmu
        CoverPreview = coverPreview
        this.startDanmu()
      })
    }

    // 稍后再看
    this.$bus.$on('watchlater', aids => {
      this.$store.commit(UPDATE_WATCHLATER, aids)
    })
    // 一系列的脚本请求
    // $.ajax({
    //   url: '//s11.cnzz.com/stat.php?id=2724999&web_id=2724999',
    //   cache: true,
    //   dataType: 'script'
    // })
    $.ajax({
      url: '//static.hdslb.com/cashier/dist/js/payPlugin.js',
      cache: true,
      dataType: 'script',
    })
    window.rec = function(name, ops) {
      const obj = ops || name
      window.spaceReport[name] = obj
    }
  },
  methods: {
    ...mapActions([
      'fetchNavNum',
      'fetchRelation',
    ]),
    startDanmu() {
      if (this._bili_space_state !== 'owner') {
        CoverPreview && new CoverPreview({
          video: '.fakeDanmu-item',
          cover: '.fakeDanmu-item .cover',
        })

        FakeDanmu && new FakeDanmu({
          video: '.fakeDanmu-item',
          cover: '.fakeDanmu-item .cover',
          ready: function() {
            rec('space_thumbnail_preview')
          },
        })
      } else {
        $('body').off('.preview')
      }
    },
  },
  watch: {
    _bili_space_state: function() {
      this.startDanmu()
    },
  },
  metaInfo() {
    const { name, sign, official } = this._bili_space_info
    return {
      title: `${name}的个人空间 - 哔哩哔哩 ( ゜- ゜)つロ 乾杯~ Bilibili`,
      meta: [ {
        name: 'keywords',
        content: `${name},B站,弹幕,字幕,AMV,MAD,MTV,ANIME,动漫,动漫音乐,游戏,游戏解说,ACG,galgame,动画,番组,新番,初音,洛天依,vocaloid`,
      }, {
        name: 'description',
        content: `${name}，${sign}，${official.desc}，bilibili是国内知名的视频弹幕网站，这里有及时的动漫新番，活跃的ACG氛围，有创意的Up主。大家可以在这里找到许多欢乐。`,
      } ],
    }
  },
  computed: {
    ...mapGetters([
      '_bili_space_mid',
      '_bili_space_mymid',
      '_bili_login_info',
      '_bili_space_info',
      '_bili_space_settings',
      '_bili_space_state',
      'isNavLoad',
      'isShowFavShare',
    ]),
    bgimg() {
      if (!this.isNavLoad) return ''
      if (this._bili_space_settings.theme.bgimg !== undefined) {
        return {
          backgroundImage: 'url(//i0.hdslb.com/' + this._bili_space_settings.theme.bgimg.toWebP() + ')',
        }
      }
    },
  },
  components: {
    CommonHeader,
    CommonNav,
    CommonFixedNav,
    toTop,
    favShare,
  },
}
