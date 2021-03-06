export const MenuConfig = [
  {
    name: '首页',
    route: '/',
    tid: '',
    locid: 23,
    sub: [],
  },
  {
    name: '动画',
    route: 'douga',
    tid: 1,
    locid: 52,
    count: '',
    subMenuSize: 162,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag: false,
    customComponent: {
      name: 'Energy',
      titleId: 2507,
      leftId: 2452,
      rightId: 2453,
    },
    sub: [
      {
        name: 'MAD·AMV',
        route: 'mad',
        tid: 24,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 151,
        },
        desc: '具有一定制作程度的动画或静画的二次创作视频',
        url: '//www.bilibili.com/video/douga-mad-1.html',
      },
      {
        name: 'MMD·3D',
        route: 'mmd',
        tid: 25,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 152,
        },
        desc: '使用MMD（MikuMikuDance）和其他3D建模类软件制作的视频',
        url: '//www.bilibili.com/video/douga-mmd-1.html',
      },
      {
        name: '短片·手书·配音',
        route: 'voice',
        tid: 47,
        ps: 15,
        rps: 10,
        desc: '追求创新并具有强烈特色的短片、手书（绘）及ACG相关配音',
        url: '//www.bilibili.com/video/douga-voice-1.html',
      },
      {
        name: '手办·模玩',
        route: 'garage_kit',
        tid: 210,
        ps: 15,
        rps: 10,
        desc: '手办模玩的测评、改造或其他衍生内容',
        url: '',
      },
      {
        name: '特摄',
        route: 'tokusatsu',
        tid: 86,
        ps: 15,
        rps: 10,
        desc: '特摄相关衍生视频',
        url: '//www.bilibili.com/video/cinephile-tokusatsu.html',
      },
      {
        name: '综合',
        route: 'other',
        tid: 27,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 153,
        },
        desc: '以动画及动画相关内容为素材，包括但不仅限于音频替换、杂谈、排行榜等内容',
        url: '//www.bilibili.com/video/douga-else-1.html',
      },
    ],
  },
  {
    name: '番剧',
    route: 'anime',
    tid: 13,
    url: '//www.bilibili.com/anime/',
    takeOvered: true,
    count: '',
    subMenuSize: 172,
    combination: true,
    sub: [
      {
        name: '连载动画',
        tid: 33,
        route: 'serial',
        desc: '当季连载的动画番剧',
        url: '//www.bilibili.com/video/bangumi-two-1.html',
      },
      {
        name: '完结动画',
        tid: 32,
        route: 'finish',
        desc: '已完结的动画番剧合集',
        url: '//www.bilibili.com/video/part-twoelement-1.html',
      },
      {
        name: '资讯',
        tid: 51,
        route: 'information',
        desc: '动画番剧相关资讯视频',
        url: '//www.bilibili.com/video/douga-else-information-1.html',
      },
      {
        name: '官方延伸',
        tid: 152,
        route: 'offical',
        desc: '动画番剧为主题的宣传节目、采访视频，及声优相关视频',
        url: '//www.bilibili.com/video/bagumi_offical_1.html',
      },
      {
        name: '新番时间表',
        url: '//www.bilibili.com/anime/timeline/',
        desc: '',
      },
      {
        name: '番剧索引',
        url: '//www.bilibili.com/anime/index/',
        desc: '',
      },
    ],
  },
  {
    name: '国创',
    tid: 167,
    route: 'guochuang',
    url: '//www.bilibili.com/guochuang/',
    takeOvered: true,
    count: '',
    subMenuSize: 214,
    combination: true,
    sub: [
      {
        name: '国产动画',
        tid: 153,
        route: 'chinese',
        desc: '我国出品的PGC动画',
        url: '//www.bilibili.com/video/bangumi_chinese_1.html',
      },
      {
        name: '国产原创相关',
        tid: 168,
        route: 'original',
        desc: '',
        url: '//www.bilibili.com/video/guochuang-fanvid-1.html',
      },
      {
        name: '布袋戏',
        tid: 169,
        route: 'puppetry',
        desc: '',
        url: '//www.bilibili.com/video/glove-puppetry-1.html',
      },
      {
        name: '动态漫·广播剧',
        tid: 195,
        route: 'motioncomic',
        desc: '',
        url: '',
      },
      {
        name: '资讯',
        tid: 170,
        route: 'information',
        desc: '',
        url: '//www.bilibili.com/video/guochuang-offical-1.html',
      },
      {
        name: '新番时间表',
        url: '//www.bilibili.com/guochuang/timeline/',
        desc: '',
      },
      {
        name: '国产动画索引',
        url: '//www.bilibili.com/guochuang/index/',
        desc: '',
      },
    ],
  },
  {
    name: '音乐',
    route: 'music',
    tid: 3,
    locid: 58,
    count: '',
    subMenuSize: 268,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag: true,
    customComponent: {
      name: 'Energy',
      titleId: 2511,
      leftId: 2462,
      rightId: 3131,
      rightType: 'slide',
    },
    sub: [
      {
        name: '原创音乐',
        route: 'original',
        tid: 28,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        ad: {
          active: true,
          dataLocId: 243,
        },
        dpConfig: [
          { name: '一日', value: 1 },
          { name: '三日', value: 3 },
        ],
        desc: '个人或团队制作以音乐为主要原创因素的歌曲或纯音乐',
        url: '//www.bilibili.com/video/music-original-1.html',
      },
      {
        name: '翻唱',
        route: 'cover',
        tid: 31,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 245,
        },
        viewHotTag: true,
        dpConfig: [
          { name: '一日', value: 1 },
          { name: '三日', value: 3 },
        ],
        desc: '一切非官方的人声再演绎歌曲作品',
        url: '//www.bilibili.com/video/music-Cover-1.html',
      },
      {
        name: 'VOCALOID·UTAU',
        route: 'vocaloid',
        tid: 30,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        dpConfig: [
          { name: '一日', value: 1 },
          { name: '三日', value: 3 },
        ],
        desc: '以雅马哈Vocaloid和UTAU引擎为基础，包含其他调教引擎，运用各类音源进行的歌曲创作内容',
        url: '//www.bilibili.com/video/music-vocaloid-1.html',
      },
      {
        name: '电音',
        route: 'electronic',
        tid: 194,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        dpConfig: [
          { name: '一日', value: 1 },
          { name: '三日', value: 3 },
        ],
        desc: '以电子合成器、音乐软体等产生的电子声响制作的音乐',
        url: '#',
      },
      {
        name: '演奏',
        route: 'perform',
        tid: 59,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 247,
        },
        viewHotTag: true,
        dpConfig: [
          { name: '一日', value: 1 },
          { name: '三日', value: 3 },
        ],
        desc: '传统或非传统乐器及器材的演奏作品',
        url: '//www.bilibili.com/video/music-perform-1.html',
      },
      {
        name: 'MV',
        route: 'mv',
        tid: 193,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        dpConfig: [
          { name: '一日', value: 1 },
          { name: '三日', value: 3 },
        ],
        desc: '音乐录影带，为搭配音乐而拍摄的短片',
        url: '//www.bilibili.com/video/music-coordinate-1.html',
      },
      {
        name: '音乐现场',
        route: 'live',
        tid: 29,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        dpConfig: [
          { name: '一日', value: 1 },
          { name: '三日', value: 3 },
        ],
        desc: '音乐实况表演视频',
        url: '//www.bilibili.com/video/music-oped-1.html',
      },
      {
        name: '音乐综合',
        route: 'other',
        tid: 130,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        dpConfig: [
          { name: '一日', value: 1 },
          { name: '三日', value: 3 },
        ],
        desc: '收录无法定义到其他音乐子分区的音乐视频',
        url: '//www.bilibili.com/video/music-collection-1.html',
      },
      {
        name: '音频',
        customZone: 'Audio',
        route: 'audio',
        url: '//www.bilibili.com/audio/home?musicType=music',
      },
      {
        name: '说唱',
        url: '//www.bilibili.com/v/rap',
      },
    ],
  },
  {
    name: '舞蹈',
    route: 'dance',
    tid: 129,
    locid: 64,
    count: '',
    subMenuSize: 172,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag: false,
    customComponent: {
      name: 'Energy',
      titleId: 2513,
      leftId: 2472,
      rightId: 2473,
    },
    sub: [
      {
        name: '宅舞',
        route: 'otaku',
        tid: 20,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 249,
        },
        desc: '与ACG相关的翻跳、原创舞蹈',
        url: '//www.bilibili.com/video/dance-1.html',
      },
      {
        name: '街舞',
        route: 'hiphop',
        tid: 198,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 251,
        },
        desc: '收录街舞相关内容，包括赛事现场、舞室作品、个人翻跳、FREESTYLE等',
        url: '',
      },
      {
        name: '明星舞蹈',
        route: 'star',
        tid: 199,
        ps: 15,
        rps: 10,
        desc: '国内外明星发布的官方舞蹈及其翻跳内容',
        url: '',
      },
      {
        name: '中国舞',
        route: 'china',
        tid: 200,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 253,
        },
        desc: '传承中国艺术文化的舞蹈内容，包括古典舞、民族民间舞、汉唐舞、古风舞等',
        url: '',
      },
      {
        name: '舞蹈综合',
        route: 'three_d',
        tid: 154,
        ps: 15,
        rps: 10,
        desc: '收录无法定义到其他舞蹈子分区的舞蹈视频',
        url: '',
      },
      {
        name: '舞蹈教程',
        route: 'demo',
        tid: 156,
        ps: 10,
        rps: 6,
        desc: '镜面慢速，动作分解，基础教程等具有教学意义的舞蹈视频',
        url: '//www.bilibili.com/video/dance-demo-1.html',
      },
    ],
  },
  {
    name: '游戏',
    route: 'game',
    tid: 4,
    locid: 70,
    count: '',
    subMenuSize: 240,
    slider: {
      width: 470,
      height: 216,
    },
    viewTag: true,
    // customComponent:{
    //   name:'Promote',
    //   id:4
    // },
    customComponent: {
      name: 'Energy',
      titleId: 3761,
      leftId: 3765,
      rightId: 3775,
      rightType: 'slide',
    },
    recommendCardType: 'GameGroomBox',
    sub: [
      {
        name: '单机游戏',
        route: 'stand_alone',
        tid: 17,
        ps: 10,
        rps: 7,
        rankshow: 1,
        viewHotTag: true,
        ad: {
          active: true,
          dataLocId: 255,
        },
        dpConfig: [
          { name: '三日', value: 3 },
          { name: '一日', value: 1 },
          { name: '一周', value: 7 },
        ],
        desc: '以所有平台（PC、主机、移动端）的单机或联机游戏为主的视频内容，包括游戏预告、CG、实况解说及相关的评测、杂谈与视频剪辑等',
        url: '//www.bilibili.com/video/videogame-1.html',
      },
      {
        name: '电子竞技',
        route: 'esports',
        tid: 171,
        ps: 10,
        rps: 7,
        rankshow: 1,
        viewHotTag: true,
        ad: {
          active: true,
          dataLocId: 257,
        },
        desc: '具有高对抗性的电子竞技游戏项目，其相关的赛事、实况、攻略、解说、短剧等视频。',
        url: '//www.bilibili.com/video/esports-1.html',
      },
      {
        name: '手机游戏',
        route: 'mobile',
        tid: 172,
        ps: 10,
        rps: 7,
        rankshow: 1,
        viewHotTag: true,
        desc: '以手机及平板设备为主要平台的游戏，其相关的实况、攻略、解说、短剧、演示等视频。',
        url: '//www.bilibili.com/video/mobilegame-1.html',
      },
      {
        name: '网络游戏',
        route: 'online',
        tid: 65,
        ps: 10,
        rps: 7,
        rankshow: 1,
        viewHotTag: true,
        ad: {
          active: true,
          dataLocId: 259,
        },
        dpConfig: [
          { name: '三日', value: 3 },
          { name: '一日', value: 1 },
          { name: '一周', value: 7 },
        ],
        desc: '由网络运营商运营的多人在线游戏，以及电子竞技的相关游戏内容。包括赛事、攻略、实况、解说等相关视频',
        url: '//www.bilibili.com/video/onlinegame-1.html',
      },
      {
        name: '桌游棋牌',
        route: 'board',
        tid: 173,
        ps: 5,
        rps: 3,
        rankshow: 1,
        viewHotTag: true,
        desc: '桌游、棋牌、卡牌对战等及其相关电子版游戏的实况、攻略、解说、演示等视频。',
        url: '//www.bilibili.com/video/boardgame-1.html',
      },
      {
        name: 'GMV',
        route: 'gmv',
        tid: 121,
        ps: 5,
        rps: 3,
        rankshow: 1,
        viewHotTag: true,
        dpConfig: [
          { name: '三日', value: 3 },
          { name: '一日', value: 1 },
          { name: '一周', value: 7 },
        ],
        desc: '由游戏素材制作的MV视频。以游戏内容或CG为主制作的，具有一定创作程度的MV类型的视频',
        url: '//www.bilibili.com/video/gmv-1.html',
      },
      {
        name: '音游',
        route: 'music',
        tid: 136,
        ps: 5,
        rps: 3,
        rankshow: 1,
        viewHotTag: true,
        dpConfig: [
          { name: '三日', value: 3 },
          { name: '一日', value: 1 },
          { name: '一周', value: 7 },
        ],
        desc: '各个平台上，通过配合音乐与节奏而进行的音乐类游戏视频',
        url: '//www.bilibili.com/video/music-game-1.html',
      },
      {
        name: 'Mugen',
        route: 'mugen',
        tid: 19,
        ps: 5,
        rps: 3,
        rankshow: 1,
        viewHotTag: true,
        dpConfig: [
          { name: '三日', value: 3 },
          { name: '一日', value: 1 },
          { name: '一周', value: 7 },
        ],
        desc: '以Mugen引擎为平台制作、或与Mugen相关的游戏视频',
        url: '//www.bilibili.com/video/game-mugen-1.html',
      },
      {
        name: '游戏赛事',
        url: '//www.bilibili.com/v/game/match/',
        newIcon: true,
      },
    ],
  },
  {
    name: '知识',
    route: 'technology',
    tid: 36,
    locid: 76,
    count: '',
    subMenuSize: 172,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag: false,
    customComponent: {
      name: 'Energy',
      titleId: 2058,
      leftId: 2047,
      rightId: 2048,
    },
    sub: [
      {
        name: '科学科普',
        route: 'science',
        tid: 201,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 261,
        },
        desc: '回答你的十万个为什么',
      },
      {
        name: '社科人文',
        route: 'fun',
        tid: 124,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 263,
        },
        desc: '聊聊互联网社会法律，看看历史趣闻艺术，品品文化心理人物',
      },
      {
        name: '财经',
        route: 'finance',
        tid: 207,
        ps: 15,
        rps: 10,
        desc: '宏观经济分析，证券市场动态，商业帝国故事，知识与财富齐飞~',
      },
      {
        name: '校园学习',
        route: 'campus',
        tid: 208,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 265,
        },
        desc: '老师很有趣，同学多人才，我们都爱搞学习',
      },
      {
        name: '职业职场',
        route: 'career',
        tid: 209,
        ps: 15,
        rps: 10,
        desc: '职场加油站，成为最有料的职场人',
      },
      {
        name: '野生技术协会',
        route: 'wild',
        tid: 122,
        ps: 15,
        rps: 10,
        desc: '炫酷技能大集合，是时候展现真正的技术了',
      },
    ],
  },
  {
    name: '数码',
    route: 'digital',
    tid: 188,
    locid: 2977,
    count: '',
    subMenuSize: 80,
    slider: {
      width: 470,
      height: 216,
    },
    viewTag: true,
    customComponent: {
      name: 'Energy',
      titleId: 2980,
      leftId: 2978,
      rightId: 2979,
    },
    recommendCardType: 'GameGroomBox',
    sub: [
      {
        name: '手机平板',
        route: 'mobile',
        tid: 95,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        desc: '手机平板、app 和产品教程等相关视频',
        url: '#',
      },
      {
        name: '电脑装机',
        route: 'pc',
        tid: 189,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        desc: '电脑、笔记本、装机配件、外设和软件教程等相关视频',
        url: '#',
      },
      {
        name: '摄影摄像',
        route: 'photography',
        tid: 190,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        desc: '摄影摄像器材、拍摄剪辑技巧、拍摄作品分享等相关视频',
        url: '#',
      },
      {
        name: '影音智能',
        route: 'intelligence_av',
        tid: 191,
        ps: 15,
        rps: 10,
        viewHotTag: true,
        desc: '影音设备、智能硬件、生活家电等相关视频',
        url: '#',
      },
    ],
  },
  {
    name: '生活',
    route: 'life',
    tid: 160,
    locid: 88,
    count: '',
    subMenuSize: 164,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      titleId:2062,
      leftId:1674,
      rightId:1670,
    },
    sub: [
      {
        name: '搞笑',
        route: 'funny',
        tid: 138,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 273,
        },
        desc: '各种沙雕有趣的搞笑剪辑，挑战，表演，配音等视频',
        url: "//www.bilibili.com/video/ent_funny_1.html",
        locid: 4204,
        recommendId: 4210,
        slider:{
          width:620,
          height:220
        },
        customComponent:{
          name:'Energy',
          leftId:4212,
          rightId:4218,
          rightType: 'slide'
        }
      },
      {
        name: '日常',
        route: 'daily',
        tid: 21,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 275,
        },
        desc: '记录日常生活，分享生活故事',
        url: '//www.bilibili.com/video/ent-life-1.html',
      },
      {
        name: '手工',
        route: 'handmake',
        tid: 161,
        ps: 15,
        rps: 10,
        desc: '手工制品的制作过程或成品展示、教程、测评类视频',
        url: '//www.bilibili.com/video/ent-handmake-1.html',
      },
      {
        name: '绘画',
        route: 'painting',
        tid: 162,
        ps: 15,
        rps: 10,
        desc: '绘画过程或绘画教程，以及绘画相关的所有视频',
        url: '//www.bilibili.com/video/ent-painting-1.html',
      },
      // {
      //   name: "ASMR",
      //   route: 'asmr',
      //   tid: 175,
      //   ps: 15,
      //   rps:10,
      //   desc: '一种知觉感观新体验',
      //   url: "//www.bilibili.com/video/ent-asmr-1.html"
      // },
      {
        name: '运动',
        route: 'sports',
        tid: 163,
        ps: 15,
        rps: 10,
        desc: '运动相关的记录、教程、装备评测和精彩瞬间剪辑视频',
        url: '//www.bilibili.com/video/ent-sports-1.html',
      },
      {
        name: '汽车',
        route: 'automobile',
        tid: 176,
        ps: 15,
        rps: 10,
        desc: '汽车相关资讯、体验、测评、记录和车主生活视频',
        url: '//www.bilibili.com/video/tech-future-automobile-1.html',
      },
      {
        name: '其他',
        route: 'other',
        tid: 174,
        ps: 15,
        rps: 10,
        desc: '对分区归属不明的视频进行归纳整合的特定分区',
        url: '//www.bilibili.com/video/others-1.html',
      },
    ],
  },
  {
    name: '美食',
    route: 'food',
    tid: 211,
    locid: 4243,  // 轮播广告
    count: '',
    isHide: true,
    subMenuSize: 164,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      leftId:4258,
      rightId:4264
    },
    sub: [
      {
        name: "美食制作",
        route: 'make',
        tid: 76,
        ps: 15,
        rps:10,
        ad: {
          active: true,
          dataLocId: 4268,
        },
        desc: '学做人间美味，展示精湛厨艺',
        url: "#"
      },
      {
        name: "美食侦探",
        route: 'detective',
        tid: 212,
        ps: 15,
        rps:10,
        desc: '寻找美味餐厅，发现街头美食',
        url: "#"
      },
      {
        name: "美食测评",
        route: 'measurement',
        tid: 213,
        ps: 15,
        rps:10,
        desc: '吃货世界，品尝世间美味',
        url: "#"
      },
      {
        name: "田园美食",
        route: 'rural',
        tid: 214,
        ps: 15,
        rps:10,
        desc: '品味乡野美食，寻找山与海的味道',
        url: "#"
      },
      {
        name: "美食记录",
        route: 'record',
        tid: 215,
        ps: 15,
        rps:10,
        desc: '记录一日三餐，给生活添一点幸福感',
        url: "#"
      },
    ]
  },
  {
    name: '动物圈',
    route: 'animal',
    tid: 217,
    locid: 4365,
    count: '',
    isHide: true,
    subMenuSize: 164,
    slider: {
      width: 620,
      height: 220
    },
    viewTag: false,
    customComponent: {
      name: 'Energy',
      leftId: 4376,
      rightId: 4381,
      rightType: 'slide'
    },
    sub: [
      {
        name: '喵星人',
        route: 'cat',
        tid: 218,
        ps: 15,
        rps: 10,
        desc: '喵喵喵喵喵',
        url: "#",
        ad: {
          active: true,
          dataLocId: 4385,
        },
      },
      {
        name: '汪星人',
        route: 'dog',
        tid: 219,
        ps: 15,
        rps: 10,
        desc: '汪汪汪汪汪',
        url: "#"
      },
      {
        name: '大熊猫',
        route: 'panda',
        tid: 220,
        ps: 15,
        rps: 10,
        desc: '芝麻汤圆营业中',
        url: "#"
      },
      {
        name: '野生动物',
        route: 'wild_animal',
        tid: 221,
        ps: 15,
        rps: 10,
        desc: '内有“猛兽”出没',
        url: "#"
      },
      {
        name: '爬宠',
        route: 'reptiles',
        tid: 222,
        ps: 15,
        rps: 10,
        desc: '鳞甲有灵',
        url: "#"
      },
      {
        name: '动物综合',
        route: 'animal_composite',
        tid: 75,
        ps: 15,
        rps: 10,
        desc: '收录除上述子分区外，其余动物相关视频以及非动物主体或多个动物主体的动物相关延伸内容',
        url: "#"
      }
    ]
  },
  {
    name: '鬼畜',
    route: 'kichiku',
    tid: 119,
    locid: 100,
    count: '',
    subMenuSize: 182,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag: false,
    customComponent: {
      name: 'Energy',
      titleId: 2509,
      leftId: 2482,
      rightId: 2483,
    },
    sub: [
      {
        name: '鬼畜调教',
        route: 'guide',
        tid: 22,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 285,
        },
        desc: '使用素材在音频、画面上做一定处理，达到与BGM一定的同步感',
        url: '//www.bilibili.com/video/ent-Kichiku-1.html',
      },
      {
        name: '音MAD',
        route: 'mad',
        tid: 26,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 287,
        },
        desc: '使用素材音频进行一定的二次创作来达到还原原曲的非商业性质稿件',
        url: '//www.bilibili.com/video/douga-kichiku-1.html',
      },
      {
        name: '人力VOCALOID',
        route: 'manual_vocaloid',
        tid: 126,
        ps: 15,
        rps: 10,
        desc: '将人物或者角色的无伴奏素材进行人工调音，使其就像VOCALOID一样歌唱的技术',
        url: '//www.bilibili.com/video/kichiku-manual_vocaloid-1.html',
      },
      {
        name: '鬼畜剧场',
        route: 'theatre',
        tid: 216,
        ps: 15,
        rps: 10,
        desc: '使用素材进行人工剪辑编排的有剧情的作品'
      },
      {
        name: '教程演示',
        route: 'course',
        tid: 127,
        ps: 10,
        rps: 6,
        rightComponent: {
          name: 'CmImgList',
          id: 148,
        },
        ad: {
          active: true,
          dataLocId: 289,
        },
        hideDropdown: false,
        desc: '鬼畜相关的教程演示',
        url: '//www.bilibili.com/video/kichiku-course-1.html',
      },
    ],
  },
  {
    name: '时尚',
    route: 'fashion',
    tid: 155,
    locid: 94,
    count: '',
    subMenuSize: 124,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag: false,
    customComponent: {
      name: 'Energy',
      titleId: 2515,
      leftId: 2492,
      rightId: 2493,
    },
    sub: [
      {
        name: '美妆',
        route: 'makeup',
        tid: 157,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 279,
        },
        desc: '涵盖妆容、发型、美甲等教程，彩妆、护肤相关产品测评、分享等',
        url: '//www.bilibili.com/video/fashion-makeup-fitness-1.html',
      },
      {
        name: '服饰',
        route: 'clothing',
        tid: 158,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 281,
        },
        desc: '服饰风格、搭配技巧相关的展示和教程视频',
        url: '//www.bilibili.com/video/fashion-clothing-1.html',
      },
      {
        name: '健身',
        route: 'aerobics',
        tid: 164,
        ps: 15,
        rps: 10,
        desc: '器械、有氧、拉伸运动等，以达到强身健体、减肥瘦身、形体塑造目的',
        url: '//www.bilibili.com/video/fashion-body-1.html',
      },
      {
        name: 'T台',
        route: 'catwalk',
        tid: 159,
        ps: 15,
        rps: 10,
        desc: '发布会走秀现场及模特相关时尚片、采访、后台花絮',
        url: '#',
      },
      {
        name: '风尚标',
        route: 'trends',
        tid: 192,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 283,
        },
        desc: '时尚明星专访、街拍、时尚购物相关知识科普',
        url: '#',
      },
    ],
  },
  {
    name: '资讯',
    route: 'information',
    tid: 202,
    locid: 4076,
    count: '',
    subMenuSize: 60,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag: false,
    sub: [
      {
        name: '热点',
        route: 'hotspot',
        tid: 203,
        ps: 18,
        rps: 10,
        desc: '全民关注的时政热门资讯',
      },
      {
        name: '环球',
        route: 'global',
        tid: 204,
        ps: 18,
        rps: 10,
        desc: '全球范围内发生的具有重大影响力的事件动态',
      },
      {
        name: '社会',
        route: 'social',
        tid: 205,
        ps: 18,
        rps: 10,
        desc: '日常生活的社会事件、社会问题、社会风貌的报道',
      },
      {
        name: '综合',
        route: 'multiple',
        tid: 206,
        ps: 18,
        rps: 10,
        desc: '除上述领域外其它垂直领域的综合资讯',
      },
    ],
  },
  {
    name: '娱乐',
    route: 'ent',
    tid: 5,
    locid: 82,
    count: '',
    subMenuSize: 62,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag: false,
    customComponent: {
      name: 'Energy',
      titleId: 2067,
      leftId: 2065,
      rightId: 2066,
    },
    sub: [
      {
        name: '综艺',
        route: 'variety',
        tid: 71,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 267,
        },
        desc: '国内外有趣的综艺和综艺相关精彩剪辑',
        url: '//www.bilibili.com/video/ent-variety-1.html',
      },
      {
        name: '明星',
        route: 'star',
        tid: 137,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 269,
        },
        desc: '娱乐圈动态、明星资讯相关',
        url: '//www.bilibili.com/video/ent-circle-1.html',
      },
    ],
  },
  {
    name: '影视',
    route: 'cinephile',
    tid: 181,
    locid: 2211,
    count: '',
    subMenuSize: 84,
    slider: {
      width: 620,
      height: 220,
    },
    viewTag: false,
    customComponent: {
      name: 'Energy',
      titleId: 2309,
      leftId: 2307,
      rightId: 2308,
    },
    sub: [
      {
        name: '影视杂谈',
        route: 'cinecism',
        tid: 182,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 2212,
        },
        desc: '影视评论、解说、吐槽、科普等',
        url: '//www.bilibili.com/video/cinephile-cinecism.html',
      },
      {
        name: '影视剪辑',
        route: 'montage',
        tid: 183,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 2213,
        },
        desc: '对影视素材进行剪辑再创作的视频',
        url: '//www.bilibili.com/video/cinephile-montage.html',
      },
      {
        name: '短片',
        route: 'shortfilm',
        tid: 85,
        ps: 15,
        rps: 10,
        desc: '追求自我表达且具有特色的短片',
        url: '//www.bilibili.com/video/cinephile-shortfilm.html',
      },
      {
        name: '预告·资讯',
        route: 'trailer_info',
        tid: 184,
        ps: 15,
        rps: 10,
        ad: {
          active: true,
          dataLocId: 2214,
        },
        desc: '影视类相关资讯，预告，花絮等视频',
        url: '//www.bilibili.com/video/cinephile-trailer-info.html',
      },
    ],
  },
  {
    name: '纪录片',
    route: 'documentary',
    tid: 177,
    url: '//www.bilibili.com/documentary/',
    count: '',
    takeOvered: true,
    hasParent: true,
    combination: true,
    sub: [
      {
        name: '人文·历史',
        tid: 37,
        route: 'history',
        dise: '',
        url: '//www.bilibili.com/video/doco-history.html',
      },
      {
        name: '科学·探索·自然',
        tid: 178,
        route: 'science',
        dise: '',
        url: '//www.bilibili.com/video/doco-science.html',
      },
      {
        name: '军事',
        tid: 179,
        route: 'military',
        dise: '',
        url: '//www.bilibili.com/video/doco-military.html',
      },
      {
        name: '社会·美食·旅行',
        tid: 180,
        route: 'travel',
        dise: '',
        url: '//www.bilibili.com/video/doco-travel.html',
      },
      {
        name: '纪录片索引',
        url: '//www.bilibili.com/documentary/index/',
      },
    ],
  },
  {
    name: '电影',
    route: 'movie',
    tid: 23,
    url: '//www.bilibili.com/movie/',
    count: '',
    takeOvered: true,
    hasParent: true,
    combination: true,
    sub: [
      {
        name: '华语电影',
        tid: 147,
        route: 'chinese',
        desc: '',
        url: '//www.bilibili.com/video/movie_chinese_1.html',
      },
      {
        name: '欧美电影',
        tid: 145,
        route: 'west',
        desc: '',
        url: '//www.bilibili.com/video/movie_west_1.html',
      },
      {
        name: '日本电影',
        tid: 146,
        route: 'japan',
        desc: '',
        url: '//www.bilibili.com/video/movie_japan_1.html',
      },
      {
        name: '其他国家',
        tid: 83,
        route: 'movie',
        desc: '',
        url: '//www.bilibili.com/video/movie-movie-1.html',
      },
      {
        name: '电影索引',
        url: '//www.bilibili.com/movie/index/',
      },
    ],
  },
  {
    name: '电视剧',
    route: 'tv',
    tid: 11,
    url: '//www.bilibili.com/tv/',
    count: '',
    takeOvered: true,
    hasParent: true,
    combination: true,
    sub: [
      {
        name: '国产剧',
        tid: 185,
        route: 'mainland',
        desc: '',
        url: '//www.bilibili.com/video/tv-mainland.html',
      },
      // {
      //   name: "港台剧",
      //   tid: 186,
      //   route: 'hktw',
      //   desc: '',
      //   url: '//www.bilibili.com/video/tv-hktw.html'
      // },
      {
        name: '海外剧',
        tid: 187,
        route: 'overseas',
        desc: '',
        url: '//www.bilibili.com/video/tv-overseas.html',
      },
      {
        name: '电视剧索引',
        url: '//www.bilibili.com/tv/index/',
      },
    ],
  },
]

export const LiveMenuConfig = [
  {
    'url': '//live.bilibili.com/all?visit_id=5icxsa0kmts0',
    'name': '全部直播',
  },
  {
    'url': '//live.bilibili.com/p/eden/area-tags?parentAreaId=2&areaId=0&visit_id=5icxsa0kmts0#/2/0',
    'name': '网游直播',
  },
  {
    'url': '//live.bilibili.com/p/eden/area-tags?parentAreaId=3&areaId=0&visit_id=5icxsa0kmts0#/3/0',
    'name': '手游直播',
  },
  {
    'url': '//live.bilibili.com/p/eden/area-tags?parentAreaId=6&areaId=0',
    'name': '单机直播'
  },
  {
    'url': '//live.bilibili.com/p/eden/area-tags?parentAreaId=1&areaId=0&visit_id=5icxsa0kmts0#/1/0',
    'name': '娱乐直播',
  },
  {
    'url': '//live.bilibili.com/p/eden/area-tags?parentAreaId=5&areaId=0&visit_id=5icxsa0kmts0#/5/0',
    'name': '电台直播',
  },
  {
    'url': '//live.bilibili.com/p/eden/area-tags?parentAreaId=9&areaId=0',
    'name': '虚拟直播',
  },
  {
    'url': '//live.bilibili.com/p/eden/area-tags?parentAreaId=10&areaId=0',
    'name': '生活直播',
  },
  {
    'url': '//live.bilibili.com/p/eden/area-tags?parentAreaId=11&areaId=0',
    'name': '学习直播',
  },
]

export const SquareMenuConfig = [
  {
    name: '会员购',
    url: '//show.bilibili.com/platform/home.html',
    icon: 'icon-vip-buy',
  },
  {
    name: '游戏中心',
    url: '//game.bilibili.com',
    icon: 'icon-game',
  },
  {
    name: '画友',
    url: 'http://h.bilibili.com',
    icon: 'icon-hy',
  },
  {
    name: '芒果TV',
    url: '//www.bilibili.com/mango',
    icon: 'icon-mango',
  },
]

export const SideMenuConfig = [
  {
    name: '专栏',
    report: 'article',
    url: '//www.bilibili.com/read/home',
    icon: 'read',
  },
  {
    name: '直播',
    report: 'live',
    url: '//live.bilibili.com',
    icon: 'live',
    sub: LiveMenuConfig,
  },
  {
    name: '活动',
    report: 'activity',
    url: '//www.bilibili.com/blackboard/act_list.html',
    icon: 'activit',
  },
  {
    name: '课堂',
    report: 'cheese',
    url: '//www.bilibili.com/cheese/',
    icon: 'zhishi',
  },
  {
    name: '小黑屋',
    report: 'blackroom',
    url: '//www.bilibili.com/blackroom/',
    icon: 'blackroom',
  },
  {
    name: '音乐PLUS',
    report: 'musicplus',
    url: '//www.bilibili.com/v/musicplus/',
    icon: 'musicplus',
  },
]

export const ChannelMenuConfig = [
  {
    name: '搞笑',
    url: '//www.bilibili.com/v/life/funny',
    tid: 138,
    count: '',
    hidePopover: true,
    combination: true,
  },
  {
    name: '美食',
    url: '//www.bilibili.com/v/food',
    tid: 211,
    count: '',
    hidePopover: true,
    combination: true,
  },
  {
    name: '动物圈',
    url: '//www.bilibili.com/v/animal',
    tid: 217,
    count: '',
    hidePopover: true,
    combination: true,
  },
  {
    name: '单机游戏',
    url: '//www.bilibili.com/v/game/stand_alone',
    tid: 17,
    count: '',
    hidePopover: true,
    combination: true,
  },
  {
    name: 'VLOG',
    url: '//www.bilibili.com/v/life/daily/#/530003',
    hidePopover: true,
    // 隐藏数字显示
    hideCount: true,
    // 标明是组合的入口
    combination: true,
  },
]