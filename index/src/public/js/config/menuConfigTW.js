export const MenuConfig = [
  {
    name: '首頁',
    route: '/',
    tid: '',
    locid: 23,
    sub: []
  },
  {
    name: "動畫",
    route: 'douga',
    tid: 1,
    locid: 52,
    count: '',
    subMenuSize: 162,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      titleId:2507,
      leftId:2452,
      rightId:2453
    },
    sub: [
      {
        name: "MAD·AMV",
        route: 'mad',
        tid: 24,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 151
        },
        desc: '具有一定製作程度的動畫或靜畫的二次創作視頻',
        url: "//www.bilibili.com/video/douga-mad-1.html"
      },
      {
        name: "MMD·3D",
        route: 'mmd',
        tid: 25,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 152
        },
        desc: '使用MMD（MikuMikuDance）和其他3D建模類軟件製作的視頻',
        url: "//www.bilibili.com/video/douga-mmd-1.html"
      },
      {
        name: "短片·手書·配音",
        route: 'voice',
        tid: 47,
        ps: 15,
        rps:10,
        desc: '追求創新並具有强烈特色的短片、手書（繪）及ACG相關配音',
        url: "//www.bilibili.com/video/douga-voice-1.html"
      },
      {
        name: "手辦·模玩",
        route: 'garage_kit',
        tid: 210,
        ps: 15,
        rps:10,
        desc: '手辦模玩的測評、改造或其他衍生內容',
        url: ''
      },
      {
        name: "特攝",
        route: 'tokusatsu',
        tid: 86,
        ps: 15,
        rps:10,
        desc: '特攝相關衍生視頻',
        url: "//www.bilibili.com/video/cinephile-tokusatsu.html"
      },
      {
        name: "綜合",
        route: 'other',
        tid: 27,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 153
        },
        desc: '以動畫及動畫相關內容為素材，包括但不僅限於音訊替換、雜談、排行榜等內容',
        url: "//www.bilibili.com/video/douga-else-1.html"
      }
    ]
  },
  {
    name: "番劇",
    route: 'anime',
    tid: 13,
    url: "//www.bilibili.com/anime/",
    takeOvered: true,
    count: '',
    subMenuSize: 172,
    combination: true,
    sub: [
      {
        name: "連載動畫",
        tid: 33,
        route: 'serial',
        desc: '當季連載的動畫番劇',
        url: "//www.bilibili.com/video/bangumi-two-1.html"
      },
      {
        name: "完結動畫",
        tid: 32,
        route: 'finish',
        desc: '已完結的動畫番劇合集',
        url: "//www.bilibili.com/video/part-twoelement-1.html"
      },
      {
        name: "資訊",
        tid: 51,
        route: 'information',
        desc: '動畫番劇相關資訊視頻',
        url: "//www.bilibili.com/video/douga-else-information-1.html"
      },
      {
        name: "官方延伸",
        tid: 152,
        route: 'offical',
        desc: '動畫番劇為主題的文宣節目、採訪視頻，及聲優相關視頻',
        url: "//www.bilibili.com/video/bagumi_offical_1.html"
      },
      {
        name: "新番時間表",
        url: "//www.bilibili.com/anime/timeline/",
        desc: ''
      },
      {
        name: "番劇索引",
        url: "//www.bilibili.com/anime/index/",
        desc: ''
      }
    ]
  },
  {
    name: "國創",
    tid: 167,
    route: 'guochuang',
    url: "//www.bilibili.com/guochuang/",
    takeOvered: true,
    count: '',
    subMenuSize: 214,
    combination: true,
    sub: [
      {
        name: "國產動畫",
        tid: 153,
        route: 'chinese',
        desc: '我國出品的PGC動畫',
        url: "//www.bilibili.com/video/bangumi_chinese_1.html"
      },
      {
        name: "國產原創相關",
        tid: 168,
        route: 'original',
        desc: '',
        url: "//www.bilibili.com/video/guochuang-fanvid-1.html"
      },
      {
        name: "布袋戲",
        tid: 169,
        route: 'puppetry',
        desc: '',
        url: "//www.bilibili.com/video/glove-puppetry-1.html"
      },
      {
        name: "動態漫·廣播劇",
        tid: 195,
        route: 'motioncomic',
        desc: '',
        url: ''
      },
      {
        name: "資訊",
        tid: 170,
        route: 'information',
        desc: '',
        url: "//www.bilibili.com/video/guochuang-offical-1.html"
      },
      {
        name: "新番時間表",
        url: "//www.bilibili.com/guochuang/timeline/",
        desc: ''
      },
      {
        name: "國產動畫索引",
        url: "//www.bilibili.com/guochuang/index/",
        desc: ''
      }
    ]
  },
  {
    name: "音樂",
    route: 'music',
    tid: 3,
    locid: 58,
    count: '',
    subMenuSize: 268,
    slider:{
      width:620,
      height:220
    },
    viewTag: true,
    customComponent:{
      name:'Energy',
      titleId:2511,
      leftId:2462,
      rightId:3131,
      rightType: 'slide'
    },
    sub: [
      {
        name: "原創音樂",
        route: 'original',
        tid: 28,
        ps: 15,
        rps:10,
        viewHotTag:true,
        ad:{
          active: true,
          dataLocId: 243
        },
        dpConfig:[
          {name: '一日', value: 1},
          {name: '三日', value: 3}
        ],
        desc: '個人或團隊製作以音樂為主要原創因素的歌曲或純音樂',
        url: "//www.bilibili.com/video/music-original-1.html"
      },
      {
        name: "翻唱",
        route: 'cover',
        tid: 31,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 245
        },
        viewHotTag:true,
        dpConfig:[
          {name: '一日', value: 1},
          {name: '三日', value: 3}
        ],
        desc: '一切非官方的人聲再演繹歌曲作品',
        url: "//www.bilibili.com/video/music-Cover-1.html"
      },
      {
        name: "VOCALOID·UTAU",
        route: 'vocaloid',
        tid: 30,
        ps: 15,
        rps:10,
        viewHotTag:true,
        dpConfig:[
          {name: '一日', value: 1},
          {name: '三日', value: 3}
        ],
        desc: '以雅馬哈Vocaloid和UTAU引擎為基礎，包含其他調教引擎，運用各類音源進行的歌曲創作內容',
        url: "//www.bilibili.com/video/music-vocaloid-1.html"
      },
      {
        name: "電音",
        route: 'electronic',
        tid: 194,
        ps: 15,
        rps:10,
        viewHotTag:true,
        dpConfig:[
          {name: '一日', value: 1},
          {name: '三日', value: 3}
        ],
        desc: '以電子合成器、音樂軟體等產生的電子聲響製作的音樂',
        url: "#"
      },
      {
        name: "演奏",
        route: 'perform',
        tid: 59,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 247
        },
        viewHotTag:true,
        dpConfig:[
          {name: '一日', value: 1},
          {name: '三日', value: 3}
        ],
        desc: '傳統或非傳統樂器及器材的演奏作品',
        url: "//www.bilibili.com/video/music-perform-1.html"
      },
      {
        name: "MV",
        route: 'mv',
        tid: 193,
        ps: 15,
        rps:10,
        viewHotTag:true,
        dpConfig:[
          {name: '一日', value: 1},
          {name: '三日', value: 3}
        ],
        desc: '音樂錄影帶，為搭配音樂而拍攝的短片',
        url: "//www.bilibili.com/video/music-coordinate-1.html"
      },
      {
        name: "音樂現場",
        route: 'live',
        tid: 29,
        ps: 15,
        rps:10,
        viewHotTag:true,
        dpConfig:[
          {name: '一日', value: 1},
          {name: '三日', value: 3}
        ],
        desc: '音樂實況表演視頻',
        url: "//www.bilibili.com/video/music-oped-1.html"
      },
      {
        name: "音樂綜合",
        route: 'other',
        tid: 130,
        ps: 15,
        rps:10,
        viewHotTag:true,
        dpConfig:[
          {name: '一日', value: 1},
          {name: '三日', value: 3}
        ],
        desc: '收錄無法定義到其他音樂子分區的音樂視頻',
        url: "//www.bilibili.com/video/music-collection-1.html"
      },
      {
        name: "音訊",
        customZone: "Audio",
        route: 'audio',
        url: '//www.bilibili.com/audio/home?musicType=music'
      },
      {
        name: "說唱",
        url: '//www.bilibili.com/v/rap'
      }
    ]
  },
  {
    name: "舞蹈",
    route: 'dance',
    tid: 129,
    locid: 64,
    count: '',
    subMenuSize: 172,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      titleId:2513,
      leftId:2472,
      rightId:2473
    },
    sub: [
      {
        name: "宅舞",
        route: 'otaku',
        tid: 20,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 249
        },
        desc: '與ACG相關的翻跳、原創舞蹈',
        url: "//www.bilibili.com/video/dance-1.html"
      },
      {
        name: "街舞",
        route: 'hiphop',
        tid: 198,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 251
        },
        desc: '收錄街舞相關內容，包括賽事現場、舞室作品、個人翻跳、FREESTYLE等',
        url: ''
      },
      {
        name: "藝員舞蹈",
        route: 'star',
        tid: 199,
        ps: 15,
        rps:10,
        desc: '國內外藝員發佈的官方舞蹈及其翻跳內容',
        url: ''
      },
      {
        name: "中國舞",
        route: 'china',
        tid: 200,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 253
        },
        desc: '傳承中國藝術文化的舞蹈內容，包括古典舞、民族民間舞、漢唐舞、古風舞等',
        url: ''
      },
      {
        name: "舞蹈綜合",
        route: 'three_d',
        tid: 154,
        ps: 15,
        rps:10,
        desc: '收錄無法定義到其他舞蹈子分區的舞蹈視頻',
        url: ''
      },
      {
        name: "舞蹈教程",
        route: 'demo',
        tid: 156,
        ps: 10,
        rps:6,
        desc: '鏡面慢速，動作分解，基礎教程等具有教學意義的舞蹈視頻',
        url: "//www.bilibili.com/video/dance-demo-1.html"
      }
    ]
  },
  {
    name: "遊戲",
    route: 'game',
    tid: 4,
    locid: 70,
    count: '',
    subMenuSize: 240,
    slider:{
      width:470,
      height:216
    },
    viewTag: true,
    // customComponent:{
    //   name:'Promote',
    //   id:4
    // },
    customComponent:{
      name:'Energy',
      titleId:3761,
      leftId:3765,
      rightId:3775,
      rightType: 'slide'
    },
    recommendCardType: 'GameGroomBox',
    sub: [
      {
        name: "單機遊戲",
        route: 'stand_alone',
        tid: 17,
        ps: 10,
        rps: 7,
        rankshow: 1,
        viewHotTag:true,
        ad:{
          active: true,
          dataLocId: 255
        },
        dpConfig:[
          {name: '三日', value: 3},
          {name: '一日', value: 1},
          {name: '一周', value: 7}
        ],
        desc:'以所有平臺（PC、主機、移動端）的單機或聯機遊戲為主的視頻內容，包括遊戲預告、CG、實況解說及相關的評測、雜談與視訊短片等',
        url: "//www.bilibili.com/video/videogame-1.html"
      },
      {
        name: "電子競技",
        route: 'esports',
        tid: 171,
        ps: 10,
        rps:7,
        rankshow:1,
        viewHotTag:true,
        ad:{
          active: true,
          dataLocId: 257
        },
        desc:'具有高對抗性的電子競技遊戲項目，其相關的賽事、實況、攻略、解說、短劇等視頻。',
        url: "//www.bilibili.com/video/esports-1.html"
      },
      {
        name: "手機遊戲",
        route: 'mobile',
        tid: 172,
        ps: 10,
        rps:7,
        rankshow:1,
        viewHotTag:true,
        desc:'以手機及平板設備為主要平臺的遊戲，其相關的實況、攻略、解說、短劇、演示等視頻。',
        url: "//www.bilibili.com/video/mobilegame-1.html"
      },
      {
        name: "網路遊戲",
        route: 'online',
        tid: 65,
        ps: 10,
        rps:7,
        rankshow:1,
        viewHotTag:true,
        ad:{
          active: true,
          dataLocId: 259
        },
        dpConfig:[
          {name: '三日', value: 3},
          {name: '一日', value: 1},
          {name: '一周', value: 7}
        ],
        desc:'由網絡運營商運營的多人線上遊戲，以及電子競技的相關遊戲內容。包括賽事、攻略、實況、解說等相關視頻',
        url: "//www.bilibili.com/video/onlinegame-1.html"
      },
      {
        name: "桌遊棋牌",
        route: 'board',
        tid: 173,
        ps: 5,
        rps:3,
        rankshow:1,
        viewHotTag:true,
        desc:'桌遊、棋牌、卡牌對戰等及其相關電子版遊戲的實況、攻略、解說、演示等視頻。',
        url: "//www.bilibili.com/video/boardgame-1.html"
      },
      {
        name: "GMV",
        route: 'gmv',
        tid: 121,
        ps: 5,
        rps:3,
        rankshow:1,
        viewHotTag:true,
        dpConfig:[
          {name: '三日', value: 3},
          {name: '一日', value: 1},
          {name: '一周', value: 7}
        ],
        desc:'由遊戲素材製作的MV視頻。以遊戲內容或CG為主製作的，具有一定創作程度的MV類型的視頻',
        url: "//www.bilibili.com/video/gmv-1.html"
      },
      {
        name: "音遊",
        route: 'music',
        tid: 136,
        ps: 5,
        rps:3,
        rankshow:1,
        viewHotTag:true,
        dpConfig:[
          {name: '三日', value: 3},
          {name: '一日', value: 1},
          {name: '一周', value: 7}
        ],
        desc:'各個平臺上，通過配合音樂與節奏而進行的音樂類遊戲視頻',
        url: "//www.bilibili.com/video/music-game-1.html"
      },
      {
        name: "Mugen",
        route: 'mugen',
        tid: 19,
        ps: 5,
        rps:3,
        rankshow:1,
        viewHotTag:true,
        dpConfig:[
          {name: '三日', value: 3},
          {name: '一日', value: 1},
          {name: '一周', value: 7}
        ],
        desc:'以Mugen引擎為平臺製作、或與Mugen相關的遊戲視頻',
        url: "//www.bilibili.com/video/game-mugen-1.html"
      },
      {
        name: "遊戲賽事",
        url: "//www.bilibili.com/v/game/match/",
        newIcon: true
      }
    ]
  },
  {
    name: "知識",
    route: 'technology',
    tid: 36,
    locid: 76,
    count: '',
    subMenuSize: 172,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      titleId:2058,
      leftId:2047,
      rightId:2048
    },
    sub: [
      {
        name: "科學科普",
        route: 'science',
        tid: 201,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 261
        },
        desc: '回答妳的十萬個為什麽'
      },
      {
        name: "社科人文",
        route: 'fun',
        tid: 124,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 263
        },
        desc: '聊聊互聯網社會法律，看看歷史趣聞藝術，品品文化心理人物'
      },
      {
        name: "財經",
        route: 'finance',
        tid: 207,
        ps: 15,
        rps:10,
        desc: '宏觀經濟分析，證券市場動態，商業帝國故事，知識與財富齊飛~'
      },
      {
        name: "校園學習",
        route: 'campus',
        tid: 208,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 265
        },
        desc: '老師很有趣，同學多人才，我們都愛搞學習'
      },
      {
        name: "職業職場",
        route: 'career',
        tid: 209,
        ps: 15,
        rps:10,
        desc: '職場加油站，成為最有料的職場人'
      },
      {
        name: "野生技術協會",
        route: 'wild',
        tid: 122,
        ps: 15,
        rps:10,
        desc: '炫酷技能大集合，是時候展現真正的技術了'
      }
    ]
  },
  {
    name: "數位",
    route: 'digital',
    tid: 188,
    locid: 2977,
    count: '',
    subMenuSize: 80,
    slider:{
      width:470,
      height:216
    },
    viewTag: true,
    customComponent:{
      name:'Energy',
      titleId:2980,
      leftId:2978,
      rightId:2979
    },
    recommendCardType: 'GameGroomBox',
    sub: [
      {
        name: "手機平板",
        route: 'mobile',
        tid: 95,
        ps: 15,
        rps:10,
        viewHotTag:true,
        desc: '手機平板、app 和產品教程等相關視頻',
        url: "#"
      },
      {
        name: "電腦裝機",
        route: 'pc',
        tid: 189,
        ps: 15,
        rps:10,
        viewHotTag:true,
        desc: '電腦、筆記本、裝機配件、外設和軟件教程等相關視頻',
        url: "#"
      },
      {
        name: "攝影攝像",
        route: 'photography',
        tid: 190,
        ps: 15,
        rps:10,
        viewHotTag:true,
        desc: '攝影攝像器材、拍攝剪輯技巧、拍攝作品分享等相關視頻',
        url: "#"
      },
      {
        name: "影音智慧",
        route: 'intelligence_av',
        tid: 191,
        ps: 15,
        rps:10,
        viewHotTag:true,
        desc: '影音設備、智能硬件、生活家電等相關視頻',
        url: "#"
      }
    ]
  },
  {
    name: "生活",
    route: 'life',
    tid: 160,
    locid: 88,
    count: '',
    subMenuSize: 164,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      titleId:2062,
      leftId:1674,
      rightId:1670
    },
    sub: [
      {
        name: "搞笑",
        route: 'funny',
        tid: 138,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 273
        },
        desc: '各種沙雕有趣的搞笑剪輯，挑戰，表演，配音等視頻',
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
        name: "日常",
        route: 'daily',
        tid: 21,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 275
        },
        desc: '記錄日常生活，分享生活故事',
        url: "//www.bilibili.com/video/ent-life-1.html"
      },
      {
        name: "手工",
        route: 'handmake',
        tid: 161,
        ps: 15,
        rps:10,
        desc: '手工制品的制作過程或成品展示、教程、測評類視頻',
        url: "//www.bilibili.com/video/ent-handmake-1.html"
      },
      {
        name: "繪畫",
        route: 'painting',
        tid: 162,
        ps: 15,
        rps:10,
        desc: '繪畫過程或繪畫教程，以及繪畫相關的所有視頻',
        url: "//www.bilibili.com/video/ent-painting-1.html"
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
        name: "運動",
        route: 'sports',
        tid: 163,
        ps: 15,
        rps:10,
        desc: '運動相關的記錄、教程、裝備評測和精彩瞬間剪輯視頻',
        url: "//www.bilibili.com/video/ent-sports-1.html"
      },
      {
        name: "汽車",
        route: 'automobile',
        tid: 176,
        ps: 15,
        rps:10,
        desc: '汽車相關資訊、體驗、測評、記錄和車主生活視頻',
        url: "//www.bilibili.com/video/tech-future-automobile-1.html"
      },
      {
        name: "其他",
        route: 'other',
        tid: 174,
        ps: 15,
        rps:10,
        desc: '對分區歸屬不明的視頻進行歸納整合的特定分區',
        url: "//www.bilibili.com/video/others-1.html"
      }
    ]
  },
  {
    name: '美食',
    route: 'food',
    tid: 211,
    locid: 4243,
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
        name: "美食製作",
        route: 'make',
        tid: 76,
        ps: 15,
        rps:10,
        ad: {
          active: true,
          dataLocId: 4268,
        },
        desc: '學做人間美味，展示精湛廚藝',
        url: "#"
      },
      {
        name: "美食偵探",
        route: 'detective',
        tid: 212,
        ps: 15,
        rps:10,
        desc: '尋找美味餐廳，發現街頭美食',
        url: "#"
      },
      {
        name: "美食測評",
        route: 'measurement',
        tid: 213,
        ps: 15,
        rps:10,
        desc: '吃貨世界，品嘗世間美味',
        url: "#"
      },
      {
        name: "田園美食",
        route: 'rural',
        tid: 214,
        ps: 15,
        rps:10,
        desc: '品味鄉野美食，尋找山與海的味道',
        url: "#"
      },
      {
        name: "美食記錄",
        route: 'record',
        tid: 215,
        ps: 15,
        rps:10,
        desc: '記錄一日三餐，給生活添一點幸福感',
        url: "#"
      },
    ]
  },
  {
    name: '動物圈',
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
        name: '大熊貓',
        route: 'panda',
        tid: 220,
        ps: 15,
        rps: 10,
        desc: '芝麻湯圓營業中',
        url: "#"
      },
      {
        name: '野生動物',
        route: 'wild_animal',
        tid: 221,
        ps: 15,
        rps: 10,
        desc: '內有“猛獸”出沒',
        url: "#"
      },
      {
        name: '爬寵',
        route: 'reptiles',
        tid: 222,
        ps: 15,
        rps: 10,
        desc: '鱗甲有靈',
        url: "#"
      },
      {
        name: '動物綜合',
        route: 'animal_composite',
        tid: 75,
        ps: 15,
        rps: 10,
        desc: '收錄除上述子分區外，其余動物相關視頻以及非動物主體或多個動物主體的動物相關延伸內容。',
        url: "#"
      }
    ]
  },
  {
    name: "鬼畜",
    route: 'kichiku',
    tid: 119,
    locid: 100,
    count: '',
    subMenuSize: 182,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      titleId:2509,
      leftId:2482,
      rightId:2483
    },
    sub: [
      {
        name: "鬼畜調教",
        route: 'guide',
        tid: 22,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 285
        },
        desc: '使用素材在音訊、畫面上做一定處理，達到與BGM一定的同步感',
        url: "//www.bilibili.com/video/ent-Kichiku-1.html"
      },
      {
        name: "音MAD",
        route: 'mad',
        tid: 26,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 287
        },
        desc: '使用素材音訊進行一定的二次創作來達到還原原曲的非商業性質稿件',
        url: "//www.bilibili.com/video/douga-kichiku-1.html"
      },
      {
        name: "人力VOCALOID",
        route: 'manual_vocaloid',
        tid: 126,
        ps: 15,
        rps:10,
        desc: '將人物或者角色的無伴奏素材進行人工調音，使其就像VOCALOID一樣歌唱的科技',
        url: "//www.bilibili.com/video/kichiku-manual_vocaloid-1.html"
      },
      {
        name: '鬼畜劇場',
        route: 'theatre',
        tid: 216,
        ps: 15,
        rps: 10,
        desc: '使用素材進行人工剪輯編排的有劇情的作品'
      },
      {
        name: "教程演示",
        route: 'course',
        tid: 127,
        ps: 10,
        rps:6,
        rightComponent: {
          name: 'CmImgList',
          id: 148
        },
        ad:{
          active: true,
          dataLocId: 289
        },
        hideDropdown:false,
        desc: '鬼畜相關的教程演示',
        url: "//www.bilibili.com/video/kichiku-course-1.html"
      }
    ]
  },
  {
    name: "時尚",
    route: 'fashion',
    tid: 155,
    locid: 94,
    count: '',
    subMenuSize: 124,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      titleId:2515,
      leftId:2492,
      rightId:2493
    },
    sub: [
      {
        name: "美妝",
        route: 'makeup',
        tid: 157,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 279
        },
        desc: '涵蓋妝容、髮型、美甲等教程，彩妝、護膚相關產品測評、分享等',
        url: "//www.bilibili.com/video/fashion-makeup-fitness-1.html"
      },
      {
        name: "服飾",
        route: 'clothing',
        tid: 158,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 281
        },
        desc: '服飾風格、搭配技巧相關的展示和教程視頻',
        url: "//www.bilibili.com/video/fashion-clothing-1.html"
      },
      {
        name: "健身",
        route: 'aerobics',
        tid: 164,
        ps: 15,
        rps:10,
        desc: '器械、有氧、拉伸運動等，以達到強身健體、减肥瘦身、形體塑造目的',
        url: "//www.bilibili.com/video/fashion-body-1.html"
      },
      {
        name: "T臺",
        route: 'catwalk',
        tid: 159,
        ps: 15,
        rps:10,
        desc: '發佈會走秀現場及糢特相關時尚片、採訪、後臺花絮',
        url: "#"
      },
      {
        name: "風尚標",
        route: 'trends',
        tid: 192,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 283
        },
        desc: '時尚藝員專訪、街拍、時尚購物相關知識科普',
        url: "#"
      }
    ]
  },
  {
    name: "資訊",
    route: 'information',
    tid: 202,
    locid: 4076,
    count: '',
    subMenuSize: 60,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    sub: [
      {
        name: "熱點",
        route: 'hotspot',
        tid: 203,
        ps: 18,
        rps: 10,
        desc: '全民關註的時政熱門資訊'
      },
      {
        name: "國際",
        route: 'global',
        tid: 204,
        ps: 18,
        rps: 10,
        desc: '全球範圍內發生的具有重大影響力的事件動態'
      },
      {
        name: "社會",
        route: 'social',
        tid: 205,
        ps: 18,
        rps: 10,
        desc: '日常生活的社會事件、社會問題、社會風貌的報道'
      },
      {
        name: "綜合",
        route: 'multiple',
        tid: 206,
        ps: 18,
        rps: 10,
        desc: '除上述領域外其它垂直領域的綜合資訊'
      }
    ]
  },
  {
    name: "娛樂",
    route: 'ent',
    tid: 5,
    locid: 82,
    count: '',
    subMenuSize: 62,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      titleId:2067,
      leftId:2065,
      rightId:2066
    },
    sub: [
      {
        name: "綜藝",
        route: 'variety',
        tid: 71,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 267
        },
        desc: '國內外有趣的綜藝和綜藝相關精彩剪輯',
        url: "//www.bilibili.com/video/ent-variety-1.html"
      },
      {
        name: "藝員",
        route: 'star',
        tid: 137,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 269
        },
        desc: '娛樂圈動態、藝員資訊相關',
        url: "//www.bilibili.com/video/ent-circle-1.html"
      }
    ]
  },
  {
    name: "影視",
    route: 'cinephile',
    tid: 181,
    locid: 2211,
    count: '',
    subMenuSize: 84,
    slider:{
      width:620,
      height:220
    },
    viewTag:false,
    customComponent:{
      name:'Energy',
      titleId:2309,
      leftId:2307,
      rightId:2308
    },
    sub: [
      {
        name: "影視雜談",
        route: 'cinecism',
        tid: 182,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 2212
        },
        desc: '影視評論、解說、吐槽、科普等',
        url: "//www.bilibili.com/video/cinephile-cinecism.html"
      },
      {
        name: "影視剪輯",
        route: 'montage',
        tid: 183,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 2213
        },
        desc: '對影視素材進行剪輯再創作的視頻',
        url: "//www.bilibili.com/video/cinephile-montage.html"
      },
      {
        name: "短片",
        route: 'shortfilm',
        tid: 85,
        ps: 15,
        rps:10,
        desc: '追求自我表達且具有特色的短片',
        url: "//www.bilibili.com/video/cinephile-shortfilm.html"
      },
      {
        name: "預告·資訊",
        route: 'trailer_info',
        tid: 184,
        ps: 15,
        rps:10,
        ad:{
          active: true,
          dataLocId: 2214
        },
        desc: '影視類相關資訊，預告，花絮等視頻',
        url: "//www.bilibili.com/video/cinephile-trailer-info.html"
      },
    ]
  },
  {
    name: "紀錄片",
    route: 'documentary',
    tid: 177,
    url: "//www.bilibili.com/documentary/",
    count: '',
    takeOvered: true,
    hasParent: true,
    combination: true,
    sub: [
      {
        name: "人文·歷史",
        tid: 37,
        route: 'history',
        dise: '',
        url: '//www.bilibili.com/video/doco-history.html'
      },
      {
        name: "科學·探索·自然",
        tid: 178,
        route: 'science',
        dise: '',
        url: '//www.bilibili.com/video/doco-science.html'
      },
      {
        name: "軍事",
        tid: 179,
        route: 'military',
        dise: '',
        url: '//www.bilibili.com/video/doco-military.html'
      },
      {
        name: "社會·美食·旅行",
        tid: 180,
        route: 'travel',
        dise: '',
        url: '//www.bilibili.com/video/doco-travel.html'
      },
      {
        name: "紀錄片索引",
        url: '//www.bilibili.com/documentary/index/'
      }
    ]
  },
  {
    name: "電影",
    route: 'movie',
    tid: 23,
    url: "//www.bilibili.com/movie/",
    count: '',
    takeOvered: true,
    hasParent: true,
    combination: true,
    sub: [
      {
        name: "華語電影",
        tid: 147,
        route: 'chinese',
        desc: '',
        url: '//www.bilibili.com/video/movie_chinese_1.html'
      },
      {
        name: "歐美電影",
        tid: 145,
        route: 'west',
        desc: '',
        url: '//www.bilibili.com/video/movie_west_1.html'
      },
      {
        name: "日本電影",
        tid: 146,
        route: 'japan',
        desc: '',
        url: '//www.bilibili.com/video/movie_japan_1.html'
      },
      {
        name: "其他國家",
        tid: 83,
        route: 'movie',
        desc: '',
        url: '//www.bilibili.com/video/movie-movie-1.html'
      },
      {
        name: "電影索引",
        url: '//www.bilibili.com/movie/index/'
      }
    ]
  },
  {
    name: "電視劇",
    route: 'tv',
    tid: 11,
    url: "//www.bilibili.com/tv/",
    count: '',
    takeOvered: true,
    hasParent: true,
    combination: true,
    sub: [
      {
        name: "國產劇",
        tid: 185,
        route: 'mainland',
        desc: '',
        url: '//www.bilibili.com/video/tv-mainland.html'
      },
      // {
      //   name: "港台剧",
      //   tid: 186,
      //   route: 'hktw',
      //   desc: '',
      //   url: '//www.bilibili.com/video/tv-hktw.html'
      // },
      {
        name: "海外劇",
        tid: 187,
        route: 'overseas',
        desc: '',
        url: '//www.bilibili.com/video/tv-overseas.html'
      },
      {
        name: "電視劇索引",
        url: "//www.bilibili.com/tv/index/"
      }
    ]
  }
]

export const LiveMenuConfig = [
  {
    "url": "//live.bilibili.com/all?visit_id=5icxsa0kmts0",
    "name": "全部直播"
  },
  {
    "url": "//live.bilibili.com/p/eden/area-tags?parentAreaId=2&areaId=0&visit_id=5icxsa0kmts0#/2/0",
    "name": "遊戲直播"
  },
  {
    "url": "//live.bilibili.com/p/eden/area-tags?parentAreaId=3&areaId=0&visit_id=5icxsa0kmts0#/3/0",
    "name": "手遊直播"
  },
  {
    "url": "//live.bilibili.com/p/eden/area-tags?parentAreaId=1&areaId=0&visit_id=5icxsa0kmts0#/1/0",
    "name": "娛樂直播"
  },
  {
    "url": "//live.bilibili.com/p/eden/area-tags?parentAreaId=5&areaId=0&visit_id=5icxsa0kmts0#/5/0",
    "name": "電臺直播"
  },
  {
    "url": "//live.bilibili.com/p/eden/area-tags?parentAreaId=4&areaId=0&visit_id=5icxsa0kmts0#/4/0",
    "name": "繪畫直播"
  }
]

export const SideMenuConfig = [
  {
    name: '專欄',
    report: 'article',
    url: '//www.bilibili.com/read/home',
    icon: 'read'
  },
  {
    name: '直播',
    report: 'live',
    url: '//live.bilibili.com',
    icon: 'live',
    sub: LiveMenuConfig
  },
  {
    name: '活動',
    report: 'activity',
    url: '//www.bilibili.com/blackboard/act_list.html',
    icon: 'activit'
  },
  {
    name: '課堂',
    report: 'cheese',
    url: '//www.bilibili.com/cheese/',
    icon: 'zhishi'
  },
  {
    name: '小黑屋',
    report: 'blackroom',
    url: '//www.bilibili.com/blackroom/',
    icon: 'blackroom'
  },
  {
    name: '音樂PLUS',
    report: 'musicplus',
    url: '//www.bilibili.com/v/musicplus/',
    icon: 'musicplus'
  }
]

export const ChannelMenuConfig = [
  {
    name: '搞笑',
    url: '//www.bilibili.com/v/life/funny',
    tid: 138,
    count: '',
    hidePopover: true,
    combination: true
  },
  {
    name: '美食',
    url: '//www.bilibili.com/v/food',
    tid: 211,
    count: '',
    hidePopover: true,
    combination: true
  },
  {
    name: '動物圈',
    url: '//www.bilibili.com/v/animal',
    tid: 217,
    count: '',
    hidePopover: true,
    combination: true
  },
  {
    name: '單機遊戲',
    url: '//www.bilibili.com/v/game/stand_alone',
    tid: 17,
    count: '',
    hidePopover: true,
    combination: true
  },
  {
    name: 'VLOG',
    url: '//www.bilibili.com/v/life/daily/#/530003',
    hidePopover: true,
    // 隐藏数字显示
    hideCount: true,
    // 标明是组合的入口
    combination: true
  }
]