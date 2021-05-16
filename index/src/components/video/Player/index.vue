<template>
  <div id="playerWrap" class="player-wrap" style="height: auto;">
    <div id="bilibili-player" class="" style="" @mouseleave="video_control_show=false"
         @mouseenter="video_control_show=true">
      <div class="player" style="width:100%;height:100%;" >
        <div id="bilibiliPlayer" class="bilibili-player relative" data-login="true">
          <div aria-label="哔哩哔哩播放器"
               class="bilibili-player-area video-state-blackside" :class="[
               video_control_show?'video-control-show':'progress-shadow-show',
               video_state===0?'video-state-pause':'',
               video_state===2?'video-state-buff':'']">
            <div class="bilibili-player-video-wrap">
              <div class="bilibili-player-video-top">
                <div class="bilibili-player-video-top-mask"></div>
                <div class="bilibili-player-video-top-title">{{video.title}}</div>

<!--                <div class="bilibili-player-video-top-follow bilibili-player-show"><img-->
<!--                    class="bilibili-player-video-top-follow-img" src="//i0.hdslb.com/bfs/face/member/noface.jpg"><span-->
<!--                    class="bilibili-player-video-top-follow-plus bilibili-player-video-top-follow-icon"><span-->
<!--                    class="bp-svgicon"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                    d="M8 6.939l3.182-3.182a.75.75 0 111.061 1.061L9.061 8l3.182 3.182a.75.75 0 11-1.061 1.061L8 9.061l-3.182 3.182a.75.75 0 11-1.061-1.061L6.939 8 3.757 4.818a.75.75 0 111.061-1.061L8 6.939z"></path></svg></span></span><span-->
<!--                    class="bilibili-player-video-top-follow-text">关注</span></div>-->
<!--                <div aria-label="反馈" class="bilibili-player-video-top-issue player-tooltips-trigger"-->
<!--                     data-position="bottom-center"-->
<!--                     data-text="反馈" data-tooltip="3">-->
<!--                  <span class="bilibili-player-video-top-issue-icon"><span class="bp-svgicon"><svg height="22"-->
<!--                                                                                                   viewBox="0 0 22 22"-->
<!--                                                                                                   width="22"-->
<!--                                                                                                   xmlns="http://www.w3.org/2000/svg"-->
<!--                                                                                                   xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter-->
<!--                      id="pid-0-svgo-a" filterUnits="objectBoundingBox" height="162.5%" width="162.5%" x="-31.2%"-->
<!--                      y="-25%"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur-->
<!--                      in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"></feGaussianBlur><feColorMatrix-->
<!--                      in="shadowBlurOuter1"-->
<!--                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"></feColorMatrix></filter><path-->
<!--                      id="pid-0-svgo-b"-->
<!--                      d="M6 16l-3 3V5a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H6zm4-4v2h2v-2h-2zm2-.998c0-.34.149-.523.636-.925.022-.018.296-.24.379-.31a5.81 5.81 0 00.173-.152C13.705 9.145 14 8.656 14 8a3 3 0 00-5.698-1.314c-.082.17-.153.41-.213.72A.5.5 0 008.581 8h1.023a.5.5 0 00.476-.348.851.851 0 01.114-.244A.999.999 0 0112 8c0 1.237-2 1.16-2 3h2z"></path></defs><g-->
<!--                      fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#pid-0-svgo-a)"-->
<!--                                                           xlink:href="#pid-0-svgo-b"></use><use-->
<!--                      xlink:href="#pid-0-svgo-b"></use></g></svg></span></span>-->
<!--                </div>-->
              </div>

              <div class="bilibili-player-video-state">
                <span
                  class="bilibili-player-video-state-play bilibili-player-iconfont"><span class="bp-svgicon"><svg
                  viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path
                  id="pid-1-svgo-a" d="M0 0h80v80H0z"></path><path
                  id="pid-1-svgo-d"
                  d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z"></path><filter
                  id="pid-1-svgo-c" filterUnits="objectBoundingBox" height="132.5%" width="130.9%"
                  x="-15.4%" y="-16.3%"><feOffset dy="2"
                                                  in="SourceAlpha"
                                                  result="shadowOffsetOuter1"></feOffset><feGaussianBlur
                  in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"></feGaussianBlur><feColorMatrix
                  in="shadowBlurOuter1" result="shadowMatrixOuter1"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feOffset in="SourceAlpha"
                                                                                               result="shadowOffsetOuter2"></feOffset><feGaussianBlur
                  in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="3.5"></feGaussianBlur><feColorMatrix
                  in="shadowBlurOuter2" result="shadowMatrixOuter2"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix><feMerge><feMergeNode
                  in="shadowMatrixOuter1"></feMergeNode><feMergeNode
                  in="shadowMatrixOuter2"></feMergeNode></feMerge></filter></defs><g fill="none" fill-rule="evenodd"
                                                                                     opacity=".8"><mask
                  id="pid-1-svgo-b" fill="#fff"><use xlink:href="#pid-1-svgo-a"></use></mask><g
                  mask="url(#pid-1-svgo-b)"><use fill="#000" filter="url(#pid-1-svgo-c)"
                                                 xlink:href="#pid-1-svgo-d"></use><use fill="#FFF"
                                                                                       xlink:href="#pid-1-svgo-d"></use></g></g></svg></span></span>
                <bilibili-player-video-state-buff-icon v-if="video_state===2"/>
                <div class="bilibili-player-video-state-buff-text" v-if="video_state===2">
                  <span class="bilibili-player-video-state-buff-title">正在缓冲...</span>
                  <span class="bilibili-player-video-state-buff-speed"></span>
                </div>
              </div>
              <div class="bilibili-player-video-panel" v-show="video_state===3">
                <div class="bilibili-player-video-panel-blur">
                  <div class="bilibili-player-video-panel-blur-detail" style="display: block;"></div>
                </div>
                <div class="bilibili-player-video-panel-text" style="display: block;">
                  <div class="bilibili-player-video-panel-row" stage="0">播放器初始化...[完成]</div>
                  <div class="bilibili-player-video-panel-row" stage="1">加载用户配置...[完成]</div>
                </div>
              </div>
              <div class="bilibili-player-video-popup" style="padding: 48px 7px;">
                <div class="bilibili-player-popup-inner" style="width: 99.9027%; height: 100%;">
                  <div class="bilibili-player-popup-padding">
                    <div class="bilibili-player-popup-area"></div>
                  </div>
                </div>
              </div>
              <div class="bilibili-player-video-subtitle" style="color: rgb(255, 255, 255); text-shadow: none;">
                <div class="subtitle-position subtitle-position-bc">
                  <div aria-live="polite" class="subtitle-wrap">
                    <div class="subtitle-group" style="font-size: 19.986px;"></div>
                    <div class="subtitle-group second" style="font-size: 14.2757px;"></div>
                  </div>
                </div>
              </div>
              <div class="bilibili-player-video-bas-danmaku"></div>
              <div class="bilibili-player-video-adv-danmaku"></div>
              <div aria-live="polite" class="bilibili-player-video-danmaku"></div>
              <div class="bilibili-player-video" @click="video_state!==3?video_state===1?video_state=0:video_state=1:''">
                <video ref="video" crossorigin="anonymous" preload="auto" :src="video.path"></video>
<!--                <video ref="video" crossorigin="anonymous" preload="auto" src="../assets/p14.mp4"></video>-->
              </div>
              <div class="bilibili-player-video-inner">
                <div class="bilibili-player-video-inner-center"
                     :style="'width: 300px; height: 150px; padding: 0px 75px;'">
                  <div class="bilibili-player-video-inner-wrap"></div>
                </div>
              </div>
              <div class="bilibili-player-video-control-wrap">
                <div class="bilibili-player-video-control-mask"></div>
                <div class="bilibili-player-video-control">
                  <div class="bilibili-player-video-control-top">
                    <div class="bilibili-player-video-progress">
                      <div aria-label="进度条" class="bilibili-player-video-progress-slider bui bui-slider">
                        <div class="bui-track bui-track-autohide-thumb bui-track-video-progress" style="">
                          <div class="bui-bar-wrap">
<!--                            <div class="bui-bar bui-bar-buffer" style="transform: scaleX(0.0408163);"></div>-->
                            <div class="bui-bar bui-bar-normal" role="progressbar"
                                 :style="'transform: scaleX('+currentTime/video_duration+');transition: 1s;'"></div>
                          </div>
                          <div class="bui-thumb" style="transform: translateX(0px);">
                            <div class="bui-thumb-dot-special" style="width: 18px;height: 18px;">
                              <div>
                                <svg height="18" preserveAspectRatio="xMidYMid meet"
                                     style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"
                                     viewBox="0 0 18 18"
                                     width="18"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <defs>
                                    <clipPath id="__lottie_element_25">
                                      <rect height="18" width="18" x="0" y="0"></rect>
                                    </clipPath>
                                  </defs>
                                  <g clip-path="url(#__lottie_element_25)">
                                    <g opacity="0.14" style="display: block;"
                                       transform="matrix(1,0,0,1,8.937000274658203,8.25)">
                                      <g opacity="1" transform="matrix(1,0,0,1,0.07500000298023224,1.2130000591278076)">
                                        <path
                                            d=" M9,-3.5 C9,-3.5 9,3.5 9,3.5 C9,5.707600116729736 7.207600116729736,7.5 5,7.5 C5,7.5 -5,7.5 -5,7.5 C-7.207600116729736,7.5 -9,5.707600116729736 -9,3.5 C-9,3.5 -9,-3.5 -9,-3.5 C-9,-5.707600116729736 -7.207600116729736,-7.5 -5,-7.5 C-5,-7.5 5,-7.5 5,-7.5 C7.207600116729736,-7.5 9,-5.707600116729736 9,-3.5z"
                                            fill="rgb(251,114,153)"
                                            fill-opacity="1"></path>
                                      </g>
                                    </g>
                                    <g opacity="0.28"
                                       style="display: block;"
                                       transform="matrix(1,0,0,1,9.140999794006348,8.67199993133545)">
                                      <g opacity="1" transform="matrix(1,0,0,1,-0.1509999930858612,0.7990000247955322)">
                                        <path
                                            d=" M8,-3 C8,-3 8,3 8,3 C8,4.931650161743164 6.431650161743164,6.5 4.5,6.5 C4.5,6.5 -4.5,6.5 -4.5,6.5 C-6.431650161743164,6.5 -8,4.931650161743164 -8,3 C-8,3 -8,-3 -8,-3 C-8,-4.931650161743164 -6.431650161743164,-6.5 -4.5,-6.5 C-4.5,-6.5 4.5,-6.5 4.5,-6.5 C6.431650161743164,-6.5 8,-4.931650161743164 8,-3z"
                                            fill="rgb(251,114,153)"
                                            fill-opacity="1"></path>
                                      </g>
                                    </g>
                                    <g opacity="1"
                                       style="display: block;"
                                       transform="matrix(0.9883429408073425,-0.7275781631469727,0.6775955557823181,0.920446515083313,7.3224687576293945,-0.7606706619262695)">
                                      <g opacity="1"
                                         transform="matrix(0.9937776327133179,-0.11138220876455307,0.11138220876455307,0.9937776327133179,-2.5239999294281006,1.3849999904632568)">
                                        <path
                                            d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z"
                                            fill="rgb(0,0,0)"
                                            fill-opacity="1"></path>
                                      </g>
                                    </g>
                                    <g opacity="1"
                                       style="display: block;"
                                       transform="matrix(1.1436611413955688,0.7535901665687561,-0.6317168474197388,0.9587040543556213,16.0070743560791,2.902894973754883)">
                                      <g opacity="1"
                                         transform="matrix(0.992861807346344,0.1192704513669014,-0.1192704513669014,0.992861807346344,-2.5239999294281006,1.3849999904632568)">
                                        <path
                                            d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z"
                                            fill="rgb(0,0,0)"
                                            fill-opacity="1"></path>
                                      </g>
                                    </g>
                                    <g opacity="1"
                                       style="display: block;"
                                       transform="matrix(1,0,0,1,8.890999794006348,8.406000137329102)">
                                      <g opacity="1" transform="matrix(1,0,0,1,0.09099999815225601,1.1009999513626099)">
                                        <path
                                            d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z"
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"></path>
                                        <path
                                            d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z"
                                            fill-opacity="0" stroke="rgb(0,0,0)"
                                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4"
                                            stroke-opacity="1"
                                            stroke-width="1.5"></path>
                                      </g>
                                    </g>
                                    <g opacity="1"
                                       style="display: block;"
                                       transform="matrix(1,0,0,1,8.89900016784668,8.083999633789062)">
                                      <g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)">
                                        <path
                                            d=" M0.875,-1.125 C0.875,-1.125 0.875,1.125 0.875,1.125 C0.875,1.607912540435791 0.48291251063346863,2 0,2 C0,2 0,2 0,2 C-0.48291251063346863,2 -0.875,1.607912540435791 -0.875,1.125 C-0.875,1.125 -0.875,-1.125 -0.875,-1.125 C-0.875,-1.607912540435791 -0.48291251063346863,-2 0,-2 C0,-2 0,-2 0,-2 C0.48291251063346863,-2 0.875,-1.607912540435791 0.875,-1.125z"
                                            fill="rgb(0,0,0)"
                                            fill-opacity="1"></path>
                                      </g>
                                    </g>
                                    <g opacity="1"
                                       style="display: block;"
                                       transform="matrix(1,0,0,1,14.008999824523926,8.083999633789062)">
                                      <g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)">
                                        <path
                                            d=" M0.8999999761581421,-1.100000023841858 C0.8999999761581421,-1.100000023841858 0.8999999761581421,1.100000023841858 0.8999999761581421,1.100000023841858 C0.8999999761581421,1.596709966659546 0.4967099726200104,2 0,2 C0,2 0,2 0,2 C-0.4967099726200104,2 -0.8999999761581421,1.596709966659546 -0.8999999761581421,1.100000023841858 C-0.8999999761581421,1.100000023841858 -0.8999999761581421,-1.100000023841858 -0.8999999761581421,-1.100000023841858 C-0.8999999761581421,-1.596709966659546 -0.4967099726200104,-2 0,-2 C0,-2 0,-2 0,-2 C0.4967099726200104,-2 0.8999999761581421,-1.596709966659546 0.8999999761581421,-1.100000023841858z"
                                            fill="rgb(0,0,0)"
                                            fill-opacity="1"></path>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
<!--                      <div class="bilibili-player-video-progress-detail" style="left: 656.3px;">-->
<!--                        <div class="bilibili-player-video-progress-detail-container"-->
<!--                             style="margin-left: -80px; width: 160px;">-->
<!--                          <div class="bilibili-player-video-progress-detail-img"-->
<!--                               style="width: 160px; height: 90px; line-height: 90px;">-->
<!--                            <img class="bilibili-player-video-progress-detail-cut-img"-->
<!--                                 src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCABaAKADAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8rKggKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAO1/4V6f+fw/9+/8A69ev/Z5x+3kO/wCFd/8AT4f+/f8A9ej+zw9vIk/4Von/AEFT/wB+v/r1f9l+YvrTF/4Vkn/QVP8A36/+vR/ZfmH1pi/8K1i/6CLf9+v/AK9V/ZXmH1lkf/CuE/6CTf8Afr/69H9lj+tMbL8PIF6asR/2wP8AjWP9ns19shf+Fbp/0E3/AO/X/wBej+z2P2yD/hW3/UTb/v1/9en/AGcyfboZ/wAK6/6f3/79f/Xp/wBnMPboj/4QBv8An8P5VP8AZ7D26F/4V9J/z9t/37/+vR/Z7D26JP8AhXjf8/Tf9+//AK9H9nsftkL/AMKzn/5/m/79/wD16P7PY/bId/wrUf8AQTb/AL9f/Xp/2cyfboP+Faj/AKCbf9+v/r0f2cw9uhP+Fbp/0E3/AO/X/wBel/Z7D26E/wCFcr/0E2/79f8A16P7PYe3RH/wrqX/AJ/m/wC/X/16X9nle2RB/wAIMf8An9/Sn9QD2yOv49B+VelzyOMl2r/dH5U+eQiTd/sr/wB8irtLuY+zY/d/sr/3yKLS7h7Nk28/3U/74H+FXaXcPZsbx/cT/vgUWl3H7NjGAbqBRdl2ZLGFbrGn/fIouwsy95MP/PJP++RVXZNmMkCL0jj/AO+BRdisyl5bf5FTdhZi+XH/AM81/Ki7HZj9if3F/IUXZVmT+VH/AHF/Ki7CzJfKi/55J/3yKq7Jsw8qL/nkn/fIouxWZV8uP/nmn/fIqbsLMb5cf/PNP++RSux2ZD5Uf9xfyrn55FWZTkAXoBRzyCzFiG770RrfQ2qx5VoW/s49KNDGKkxfsknpRZFczQ/7JJ6Ucoe0F8s1pyoOZjvsstHKg5mP+xN/dp6i5mWBYFei0ahzMm+zzVoZ8zGtaSN1FAc7F+wH+7SCEnN2Ldn4U1C9spdQgijMK9CXAP8A6FQdsMNKSvczvsEtSZ7C/Z5qBEuBS5mSSeWnpRzMCP7In93+dK7M3zdCL7Mv93+dFwXN1K32ST0rOSSNdSnPbAdqyk7Bqai2qL91AKnmOucLnR+Dvh94i8cagdN8N6JeanNs3mO1ieSRV9cKDRzGtLD3RF4i8J614W1R9H1/SprG+j277WYYddw3D9KqErsznhGil9lT+7XZCN0cU6LTI/7OH9z9aRBd/syP1FAD/sEPqPzrXlAXyY/7tHKDDbD/AHP1qTJliCyWf/Uxs/0FADUt4evzE/3CMUCho9CdZZURo0mkVG6qHIFB2wqVUtCD7Mv92oJKcsBToKAKUsJToKgkZ+8/vfpQBsaFo1/r1z9msYkl/wBots/nQdOHpc5WvLH7FdS2tw2JF6AcgfjQOvS5CvIiL0WpkRymZNGnpWMg5TW8gelZUtY3keqqUWtj1n9m/wCNd/8AAnxjN4msrZpBPY/ZZMAHK+nPT6jmvUyynhcQ3GurmkVybGT8Y/iJe/Fr4i6t42voBG2obdjYA27V2jpjtWeKhRpfw0ROTZxEgC9KjD1b7nLOKYnnU/eOOdKPQd5o/wAmj3jDka3Isn1NdF2ZNtC+Y/rRdmbrJbhgVm01uWpRZqeH/Gb2l55VvbQhPRgD/OodRI0UFIqDXpdd8QakkkQha2ZGiCoApU9eg5qKVRy3NpUVDWKLn2ST0raTtsb0pT2J/sb+lY8zK9kuxUntR/do5mHso9is2n7uqU7mcoRRX+wH+7RcwcdSxCPs4xC7p9HNZ8zOunKVP4RjKHVlf5t3Uk5P59aOZhOUqnxFKYCs3N9SuQotAG6ipckxOm7HQxWofqtc7elkewo6F1LVIxhFx3opudF3Q3ErSqoUqBx9a2cpVDjmZ8zt61pCDgYSGxIrTRKwyG61t7efYzhHmnY9Z+L37N/jL4M6DpniHxJfaVcW+rTeVALe5LEfLnJyo70e2l2OnHYdUqfMeR729a6jwX7+xNAv2j/Uq7/QUEfU5TLx0bUzB5hspkX/AJ6+WdtZVKyeiO1YCUNzyvWtO1XTbn7ZcX7tbf31wp/SuComy4w5XY9N0HVdCh0mOQRSw3BUKHnQKZwOnVzn8MUUJWZ3VKV0XtP1yC+m2BNorpnIdKkbe5PSgOUqNDG3Vf1phykLDcmyOL95WXMCwzkQ3Gn6hb/vZotkXy9sH5unWjmL+pNq5R8s1Rz8tiT7OPSgOUhayibqn6msJ6G8IXOj8CfCHxr8Sftv/CH6G179g2/aP38abN27H3iPQVxyq2djrVD3WcrbeKdEm27bkJ5km1c+lb8lmCqqxrfbI/8An6H5Cqd3uN1UUJ722/5+BWkWo7HDOTMltZ0lptpueK09qzCUnck+229uyv5gcr0xXdQrQlK0iU2pcy3Ou8Q+OvEXjm1hstV1eaWC2/1Ucj8Jxjj8K6sVOjCPuI1rV6lePLNnNT2X2P8A4+r2Ffx3fyrmfkcMMK6TvJl6y8WQaRD5GnWtq83/AD0lVv5dKwk5HbDGUaWjRF/wld5ONuo3c+3yy22GQ7cn7vHSpjST3Jq4uXQ4jX7CW/WKyFzvVpNpJ4GKyqpx2MoTU9zSs4447OGK4nBb+/0z9cURjCOxs8Q3uXIrloG3xQqp+tU+VjjiGnodJpWrS3P+uRW/T+VZ3kdnJc01vdMm+7cbKLyH7M0tKhszqUDTSLLH537wdMp6cVKkmrdTWMz9Af2w7D4YR/s8xX2iaNpUF7cyWi28kFmqu4I3dQM9KyjQxDld7HRGb1uz85HtY4/vq1dHMeY0rjMwf89E/Ok5ILIz5NU08fcu0/4GQv8AOuRzb3N1KC2O7+DP7YOmfAe+1i0tvB8OtDVPJw32xVxtznoB6msuWLepp9YstD5P0zUpH2/bYLlvsx3LhMZP4UvrJ5V2dGNd8VMftK6dmL/nmDu/wNP6yO8h6a7DNbfvNyy+pY1PtTWWxm3moRzNu01Np9Sf8aHVZjIms9enjk23isIf+e68J+tFGtJK5JrQ6xM65ju4pI/7+GB/IVvHESquzAuwa3bj/j6YJ9K6lilsRKnLuLJrFjGu1XbHuSf51oq6Zi4a6oqN4otT/qZSnAX5wBwOlTDEoKtNmbda9FqtsokZxtO4eUMc1z1sQrhSpsjlvbmaBbdZJvLXoNo/n1qPal+zZYl1e8XpdIPxp+1D2bRe0nxLcW3+tnf/AL4/+vWvtkb+3mi9ceMbH/nvHR7ZB7eZYtPH0ViSY9RRSeOcH+dEpwcuZG0ap0/iT9p74geLtGg8Pa74iuLzT7Yo0UKRRgKVXavKqDwOOtazzFOPLE6FV0PPL/x9f3D+RFJLGf7+a891WczkZT6t4hl/48tRL/UL/hR7UOYo3eoX0T+RcoxP9+Zi1ZcxjdkUM1k1wc2q8+1CkJuRCPE04241OP5en+jr/hXG7GxNF4ykTiWU3Q/2sCloBnTarLeHLrDAfZq254juW21LT363P5DH8qOeJLSY261xZI/JWSFk/ut8w/I01VUVZByojHiZgcrLEPorAflRGqoaoOUlHiCxH/LPP1Ymj2qQ7DrrxG7f6uVR/wABH+FX9YsBGuu2idI4T9ST/OslWktmJpS3Hf28AuwMqj/ZQD+VRKbluCSWwLrsCfdu2FV7WXcY1tYgb714D/wBf8KPay7gIb23PWWD86Pay7ishW1Gzb711Af+Aij2su4WRTa53/elgP5VaqpKyBRSLa69aJ9yML9OKlTjF3RVyRtdsrldk03kD2UUc4rGdJMkX/HtqTL9KOcLD01c26bGljuh/tnNP2kQsC6xaq29Y8H601UiKxib3/vH8647lCdOlFwClqFxKeoXFz9PypagGT60WYhKeo7i5NLUA3H2/KncAyfWi4C7j7flRcQ2i47hRcBdx9vyouAZPt+VLUBKeoCnnrVcwhMD0o5h3FJJ9PyqNQuJRZiCkAUAFaoApgFABQAUAFJgFZAFABQAUAFABQAVqgChgFZgFABWoBQB/9k=">-->
<!--                            <div class="bilibili-player-video-progress-detail-time">{{}}</div>-->
<!--                          </div>-->
<!--                          <div class="bilibili-player-video-progress-detail-content"></div>-->
<!--                          <div class="bilibili-player-video-progress-detail-skip-tips"></div>-->
<!--                        </div>-->
<!--                        <div class="bilibili-player-video-progress-detail-sign">-->
<!--                          <div class="bilibili-player-video-progress-detail-sign-down"></div>-->
<!--                          <div class="bilibili-player-video-progress-detail-sign-up"></div>-->
<!--                        </div>-->
<!--                      </div>-->
                    </div>
                  </div>
                  <div class="bilibili-player-video-control-bottom">
                    <div class="bilibili-player-video-control-bottom-left">
                      <div class="bilibili-player-video-btn bilibili-player-video-btn-start video-state-pause">
                        <button v-if="video_state===1" class="bilibili-player-iconfont" aria-label="暂停"><span class="bp-svgicon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_150"><rect width="28" height="28" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_150)"><g transform="matrix(1,0,0,1,14.031425476074219,14)" opacity="0.993564235015455" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path></g></g><g transform="matrix(0.9077062010765076,0,0,0.9077062010765076,24.812000274658203,14)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"></path></g></g><g transform="matrix(1,0,0,1,9.462150573730469,14)" opacity="0.027983727303865037" style="display: none;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d="M0 0"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d="M0 0"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z"></path><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="0" d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z"></path></g></g></g></svg></span></button>
                        <button v-else aria-label="播放" class="bilibili-player-iconfont">
                          <span class="bp-svgicon">
                            <svg
                            height="28" preserveAspectRatio="xMidYMid meet"
                            style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"
                            viewBox="0 0 28 28"
                            width="28"
                            xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="__lottie_element_48"><rect
                            height="28" width="28" x="0" y="0"></rect></clipPath></defs><g
                            clip-path="url(#__lottie_element_48)"><g opacity="0.14111895468159347"
                                                                     style="display: none;"
                                                                     transform="matrix(0.4319034516811371,0,0,0.4319034516811371,21.75948143005371,14.071012496948242)"><g
                            opacity="1"
                            transform="matrix(1,0,0,1,0,0)"><path
                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"
                            fill="rgb(255,255,255)"
                            fill-opacity="1"></path><path
                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"
                            fill-opacity="0" stroke="rgb(255,255,255)" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="4" stroke-opacity="1"
                            stroke-width="0"></path></g></g><g
                            opacity="0.04521114954221801"
                            style="display: none;"
                            transform="matrix(0.6992658376693726,0,0,0.6992658376693726,22.65801429748535,14)"><g
                            opacity="1" transform="matrix(1,0,0,1,0,0)"><path
                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"
                            fill="rgb(255,255,255)"
                            fill-opacity="1"></path><path
                            d=" M-5.484000205993652,-10 C-7.953000068664551,-10 -8,-7.984000205993652 -8,-7.984000205993652 C-8,-7.984000205993652 -8.008000373840332,7.984000205993652 -8.008000373840332,7.984000205993652 C-8.008000373840332,7.984000205993652 -7.984000205993652,9.991999626159668 -5.5,9.991999626159668 C-3.0160000324249268,9.991999626159668 -3.003999948501587,7.995999813079834 -3.003999948501587,7.995999813079834 C-3.003999948501587,7.995999813079834 -2.9839999675750732,-8 -2.9839999675750732,-8 C-2.9839999675750732,-8 -3.015000104904175,-10 -5.484000205993652,-10z"
                            fill-opacity="0" stroke="rgb(255,255,255)" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="4" stroke-opacity="1"
                            stroke-width="0"></path></g></g><g
                            opacity="1" style="display: block;" transform="matrix(1,0,0,1,14,14)"><g opacity="1"
                                                                                                     transform="matrix(1,0,0,1,0,0)"><path
                            d="M0 0" fill="rgb(255,255,255)" fill-opacity="1"></path><path d="M0 0"
                                                                                           fill-opacity="0"
                                                                                           stroke="rgb(255,255,255)"
                                                                                           stroke-linecap="butt"
                                                                                           stroke-linejoin="miter"
                                                                                           stroke-miterlimit="4"
                                                                                           stroke-opacity="1"
                                                                                           stroke-width="0"></path></g><g
                            opacity="1" transform="matrix(1,0,0,1,0,0)"><path
                            d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z"
                            fill="rgb(255,255,255)"
                            fill-opacity="1"></path><path
                            d=" M-7.031000137329102,-10.875 C-7.031000137329102,-10.875 -8.32800006866455,-11.25 -9.42199993133545,-10.468999862670898 C-10.109999656677246,-9.906999588012695 -10,-7.992000102996826 -10,-7.992000102996826 C-10,-7.992000102996826 -10,8.015999794006348 -10,8.015999794006348 C-10,8.015999794006348 -10.125,10.241999626159668 -9,10.991999626159668 C-7.875,11.741999626159668 -5,10.031000137329102 -5,10.031000137329102 C-5,10.031000137329102 7.968999862670898,1.875 7.968999862670898,1.875 C7.968999862670898,1.875 9,1.062000036239624 9,0 C9,-1.062000036239624 7.968999862670898,-1.937999963760376 7.968999862670898,-1.937999963760376 C7.968999862670898,-1.937999963760376 -7.031000137329102,-10.875 -7.031000137329102,-10.875z"
                            fill-opacity="0" stroke="rgb(255,255,255)" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="4" stroke-opacity="1"
                            stroke-width="0"></path></g></g></g>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div class="bilibili-player-video-time" name="time_textarea">
                        <input class="bilibili-player-video-time-seek" value="">
                        <div class="bilibili-player-video-time-wrap" name="time_textarea">
                          <span class="bilibili-player-video-time-now" name="time_textarea">{{format_time(currentTime)}}</span>
                          <span class="bilibili-player-video-divider" name="time_textarea">/</span>
                          <span class="bilibili-player-video-time-total" name="time_textarea">
                            {{format_time(video_duration)}}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="bilibili-player-video-control-bottom-center"></div>
<!--                    <div class="bilibili-player-video-control-bottom-right">-->
<!--                      <div class="bilibili-player-video-btn bilibili-player-video-btn-quality">-->
<!--                        <div class="bilibili-player-video-quality-menu bui bui-select bui-dark bui-select-quality-menu">-->
<!--                          <div class="bui-select-wrap">-->
<!--                            <div class="bui-select-border">-->
<!--                              <div class="bui-select-header">-->
<!--                                <span class="bui-select-result">自动<span-->
<!--                                    class="bilibili-player-auto-hidden">(1080P)</span></span>-->
<!--                                <span class="bui-select-arrow">-->
<!--                                  <span class="bui-select-arrow-down"></span>-->
<!--                                </span>-->
<!--                              </div>-->
<!--                              <div class="bui-select-list-wrap" style="">-->
<!--                                <ul class="bui-select-list"-->
<!--                                    style="bottom: 41px; border: medium none; left: -70px; height: 0;">-->

<!--                                  <li class="bui-select-item" data-value="112"><span-->
<!--                                      class="bilibili-player-video-quality-text">1080P</span><span-->
<!--                                      class="bilibili-player-video-quality-value">高码率</span><span-->
<!--                                      class="bilibili-player-bigvip">大会员</span></li>-->

<!--                                  <li class="bui-select-item" data-value="80"><span-->
<!--                                      class="bilibili-player-video-quality-text">1080P</span><span-->
<!--                                      class="bilibili-player-video-quality-value">高清</span><span-->
<!--                                      class="bilibili-player-needlogin">登录即享</span></li>-->

<!--                                  <li class="bui-select-item" data-value="64"><span-->
<!--                                      class="bilibili-player-video-quality-text">720P</span><span-->
<!--                                      class="bilibili-player-video-quality-value">高清</span><span-->
<!--                                      class="bilibili-player-needlogin">登录即享</span></li>-->

<!--                                  <li class="bui-select-item" data-value="32"><span-->
<!--                                      class="bilibili-player-video-quality-text">480P</span><span-->
<!--                                      class="bilibili-player-video-quality-value">清晰</span></li>-->

<!--                                  <li class="bui-select-item" data-value="16"><span-->
<!--                                      class="bilibili-player-video-quality-text">360P</span><span-->
<!--                                      class="bilibili-player-video-quality-value">流畅</span></li>-->

<!--                                  <li class="bui-select-item bui-select-item-active" data-value="0">自动<span-->
<!--                                      class="bilibili-player-auto-hidden">(1080P)</span></li>-->
<!--                                </ul>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="bilibili-player-video-btn bilibili-player-video-btn-pagelist">-->
<!--                        <button aria-label="选集" class="bilibili-player-video-btn-name">选集</button>-->
<!--                        <div class="bilibili-player-video-btn-menu-wrap">-->
<!--                          <ul class="bilibili-player-video-btn-menu"></ul>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="bilibili-player-video-btn bilibili-player-video-btn-speed">-->
<!--                        <button aria-label="倍速" class="bilibili-player-video-btn-speed-name">倍速</button>-->
<!--                        <div class="bilibili-player-video-btn-speed-menu-wrap">-->
<!--                          <ul class="bilibili-player-video-btn-speed-menu">-->
<!--                            <li class="bilibili-player-video-btn-speed-menu-list " data-value="2">2.0x</li>-->
<!--                            <li class="bilibili-player-video-btn-speed-menu-list " data-value="1.5">1.5x</li>-->
<!--                            <li class="bilibili-player-video-btn-speed-menu-list " data-value="1.25">1.25x</li>-->
<!--                            <li class="bilibili-player-video-btn-speed-menu-list bilibili-player-active" data-value="1">-->
<!--                              1.0x-->
<!--                            </li>-->
<!--                            <li class="bilibili-player-video-btn-speed-menu-list " data-value="0.75">0.75x</li>-->
<!--                            <li class="bilibili-player-video-btn-speed-menu-list " data-value="0.5">0.5x</li>-->
<!--                          </ul>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="bilibili-player-video-btn bilibili-player-video-btn-subtitle">-->
<!--                        <button aria-label="字幕" class="bilibili-player-iconfont bilibili-player-iconfont-subtitle"><span-->
<!--                            class="bp-svgicon"><svg height="22" viewBox="0 0 28 22" width="28"-->
<!--                                                    xmlns="http://www.w3.org/2000/svg"><path-->
<!--                            d="M24 3.5a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2v-11a2 2 0 012-2h20zM11.018 9.152l-.22.052h-4.81v.903H9.81c-.472.399-1.05.809-1.585 1.071v.609h-3.98v.934h3.98v1.932c0 .147-.063.2-.252.2a8.845 8.845 0 01-.353.007h-.266a36.81 36.81 0 01-.966-.018c.157.252.357.694.42.977.86 0 1.47-.01 1.89-.168.43-.147.567-.42.567-.966v-1.963h3.979v-.935h-3.98v-.284a11.825 11.825 0 002.416-1.848l-.662-.503zm11.781-.966h-7.035v2.94h1.932c-.095.168-.21.325-.347.482h-2.761v.767h1.963c-.556.441-1.27.84-2.152 1.145.178.157.441.514.546.735a9.08 9.08 0 001.281-.62v1.974h.934v-1.732h1.575v1.942h.945v-1.943h1.754v.851c0 .105-.042.136-.158.136h-.12c-.16 0-.426-.002-.709-.01.105.22.21.504.252.735.609 0 1.029.01 1.312-.115.284-.127.357-.326.357-.736v-1.039c.378.22.788.388 1.197.514.116-.22.378-.566.578-.724-.872-.22-1.743-.62-2.384-1.113h2.142v-.767h-5.439c.105-.157.21-.315.305-.482h4.032v-2.94zm-2.09 4.189c.221.262.483.504.777.735H19.68v-.546h-.945v.546h-1.721c.304-.231.577-.473.819-.735h2.877zm1.114-2.447v.599h-5.125v-.598h5.125zM8.834 6.106l-.955.305c.168.242.336.546.472.819H4.34v2.247h.955V8.154h6.857v1.323h.997V7.23H9.506a5.775 5.775 0 00-.672-1.124zm12.989 2.678v.577h-5.125v-.577h5.125zM17.99 6.19h-.955v.62H14.65v.788h2.384v.399h.955v-.4h2.478v.4h.956v-.4h2.436V6.81h-2.436v-.62h-.956v.62H17.99v-.62z"-->
<!--                            fill="#FFF" fill-rule="evenodd"></path></svg></span></button>-->
<!--                      </div>-->
<!--                      <div class="bilibili-player-video-btn bilibili-player-video-btn-volume video-state-volume-max">-->
<!--                        <button aria-label="静音" class="bilibili-player-iconfont bilibili-player-iconfont-volume"><span-->
<!--                            class="bp-svgicon"><svg height="88" preserveAspectRatio="xMidYMid meet"-->
<!--                                                    style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"-->
<!--                                                    viewBox="0 0 88 88"-->
<!--                                                    width="88"-->
<!--                                                    xmlns="http://www.w3.org/2000/svg"><defs><clipPath-->
<!--                            id="__lottie_element_100"><rect height="88" width="88" x="0" y="0"></rect></clipPath><clipPath-->
<!--                            id="__lottie_element_102"><path d="M0,0 L88,0 L88,88 L0,88z"></path></clipPath></defs><g-->
<!--                            clip-path="url(#__lottie_element_100)"><g clip-path="url(#__lottie_element_102)"-->
<!--                                                                      opacity="1"-->
<!--                                                                      style="display: block;"-->
<!--                                                                      transform="matrix(1,0,0,1,0,0)"><g-->
<!--                            opacity="1" style="display: block;" transform="matrix(1,0,0,1,28,44)"><g opacity="1"-->
<!--                                                                                                     transform="matrix(1,0,0,1,0,0)"><path-->
<!--                            d=" M15.5600004196167,-25.089000701904297 C15.850000381469727,-24.729000091552734 16,-24.288999557495117 16,-23.839000701904297 C16,-23.839000701904297 16,23.840999603271484 16,23.840999603271484 C16,24.94099998474121 15.100000381469727,25.840999603271484 14,25.840999603271484 C13.550000190734863,25.840999603271484 13.109999656677246,25.680999755859375 12.75,25.400999069213867 C12.75,25.400999069213867 -4,12.00100040435791 -4,12.00100040435791 C-4,12.00100040435791 -8,12.00100040435791 -8,12.00100040435791 C-12.420000076293945,12.00100040435791 -16,8.420999526977539 -16,4.000999927520752 C-16,4.000999927520752 -16,-3.999000072479248 -16,-3.999000072479248 C-16,-8.418999671936035 -12.420000076293945,-11.99899959564209 -8,-11.99899959564209 C-8,-11.99899959564209 -4,-11.99899959564209 -4,-11.99899959564209 C-4,-11.99899959564209 12.75,-25.39900016784668 12.75,-25.39900016784668 C13.609999656677246,-26.089000701904297 14.869999885559082,-25.948999404907227 15.5600004196167,-25.089000701904297z"-->
<!--                            fill="rgb(255,255,255)"-->
<!--                            fill-opacity="1"></path></g></g><g-->
<!--                            style="display: none;"><g><path></path></g></g><g style="display: none;"><g><path></path></g></g><g-->
<!--                            style="display: none;"><g><path></path></g></g><g style="display: none;"><g><path></path></g></g><g-->
<!--                            opacity="1" style="display: block;" transform="matrix(1,0,0,1,56,44)"><g opacity="1"-->
<!--                                                                                                     transform="matrix(1,0,0,1,0,0)"><path-->
<!--                            d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"-->
<!--                            fill="rgb(255,255,255)"-->
<!--                            fill-opacity="1"></path></g></g><g-->
<!--                            opacity="1" style="display: block;"-->
<!--                            transform="matrix(1,0,0,1,64.01399993896484,44.00699996948242)"><g opacity="1"-->
<!--                                                                                               transform="matrix(1,0,0,1,0,0)"><path-->
<!--                            d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"-->
<!--                            fill="rgb(255,255,255)"-->
<!--                            fill-opacity="1"></path></g></g></g></g></svg></span>-->
<!--                        </button>-->
<!--                        <button aria-label="静音" class="bilibili-player-iconfont bilibili-player-iconfont-volume-max">-->
<!--                          <span class="bp-svgicon"><svg height="88" preserveAspectRatio="xMidYMid meet"-->
<!--                                                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"-->
<!--                                                        viewBox="0 0 88 88"-->
<!--                                                        width="88"-->
<!--                                                        xmlns="http://www.w3.org/2000/svg"><defs><clipPath-->
<!--                              id="__lottie_element_128"><rect height="88" width="88" x="0" y="0"></rect></clipPath><clipPath-->
<!--                              id="__lottie_element_130"><path d="M0,0 L88,0 L88,88 L0,88z"></path></clipPath></defs><g-->
<!--                              clip-path="url(#__lottie_element_128)"><g clip-path="url(#__lottie_element_130)"-->
<!--                                                                        opacity="1"-->
<!--                                                                        style="display: block;"-->
<!--                                                                        transform="matrix(1,0,0,1,0,0)"><g-->
<!--                              opacity="1" style="display: block;" transform="matrix(1,0,0,1,28,44)"><g opacity="1"-->
<!--                                                                                                       transform="matrix(1,0,0,1,0,0)"><path-->
<!--                              d=" M15.5600004196167,-25.089000701904297 C15.850000381469727,-24.729000091552734 16,-24.288999557495117 16,-23.839000701904297 C16,-23.839000701904297 16,23.840999603271484 16,23.840999603271484 C16,24.94099998474121 15.100000381469727,25.840999603271484 14,25.840999603271484 C13.550000190734863,25.840999603271484 13.109999656677246,25.680999755859375 12.75,25.400999069213867 C12.75,25.400999069213867 -4,12.00100040435791 -4,12.00100040435791 C-4,12.00100040435791 -8,12.00100040435791 -8,12.00100040435791 C-12.420000076293945,12.00100040435791 -16,8.420999526977539 -16,4.000999927520752 C-16,4.000999927520752 -16,-3.999000072479248 -16,-3.999000072479248 C-16,-8.418999671936035 -12.420000076293945,-11.99899959564209 -8,-11.99899959564209 C-8,-11.99899959564209 -4,-11.99899959564209 -4,-11.99899959564209 C-4,-11.99899959564209 12.75,-25.39900016784668 12.75,-25.39900016784668 C13.609999656677246,-26.089000701904297 14.869999885559082,-25.948999404907227 15.5600004196167,-25.089000701904297z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g><g-->
<!--                              opacity="4.064882232057698e-7"-->
<!--                              style="display: none;"-->
<!--                              transform="matrix(1.3402099609375,0,0,1.3402099609375,60.00299835205078,44)"><g-->
<!--                              opacity="1" transform="matrix(1,0,0,1,0,0)"><path-->
<!--                              d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g><g-->
<!--                              opacity="0.002914857761308127"-->
<!--                              style="display: none;"-->
<!--                              transform="matrix(1.0126574039459229,0,0,1.0126574039459229,64.37825012207031,44.0057487487793)"><g-->
<!--                              opacity="1" transform="matrix(1,0,0,1,0,0)"><path-->
<!--                              d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g><g-->
<!--                              opacity="0.9999986746452565"-->
<!--                              style="display: none;"-->
<!--                              transform="matrix(1.0002120733261108,0,0,1.0002120733261108,56.00299072265625,44)"><g-->
<!--                              opacity="1" transform="matrix(1,0,0,1,0,0)"><path-->
<!--                              d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g><g-->
<!--                              opacity="1"-->
<!--                              style="display: none;"-->
<!--                              transform="matrix(1.0002062320709229,0,0,1.0002062320709229,64.00399780273438,44.00699996948242)"><g-->
<!--                              opacity="1" transform="matrix(1,0,0,1,0,0)"><path-->
<!--                              d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g><g-->
<!--                              opacity="1" style="display: block;" transform="matrix(1,0,0,1,56,44)"><g opacity="1"-->
<!--                                                                                                       transform="matrix(1,0,0,1,0,0)"><path-->
<!--                              d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g><g-->
<!--                              opacity="1" style="display: block;"-->
<!--                              transform="matrix(1,0,0,1,64.01399993896484,44.00699996948242)"><g opacity="1"-->
<!--                                                                                                 transform="matrix(1,0,0,1,0,0)"><path-->
<!--                              d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g></g></g></svg></span>-->
<!--                        </button>-->
<!--                        <button aria-label="取消静音" class="bilibili-player-iconfont bilibili-player-iconfont-volume-min">-->
<!--                          <span class="bp-svgicon"><svg height="88" preserveAspectRatio="xMidYMid meet"-->
<!--                                                        style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"-->
<!--                                                        viewBox="0 0 88 88"-->
<!--                                                        width="88"-->
<!--                                                        xmlns="http://www.w3.org/2000/svg"><defs><clipPath-->
<!--                              id="__lottie_element_156"><rect height="88" width="88" x="0" y="0"></rect></clipPath><filter-->
<!--                              id="__lottie_element_161" filterUnits="objectBoundingBox" height="100%" width="100%"-->
<!--                              x="0%"-->
<!--                              y="0%"><feComponentTransfer in="SourceGraphic"><feFuncA tableValues="1.0 0.0"-->
<!--                                                                                      type="table"></feFuncA></feComponentTransfer></filter><mask-->
<!--                              id="__lottie_element_160" mask-type="alpha"><g filter="url(#__lottie_element_161)"><rect-->
<!--                              fill="#ffffff" height="88" opacity="0" width="88" x="0" y="0"></rect><g-->
<!--                              opacity="1" style="display: block;"-->
<!--                              transform="matrix(1,0,0,1,47.422000885009766,41.702999114990234)"><g opacity="1"-->
<!--                                                                                                   transform="matrix(1,0,0,1,-0.5,-0.5)"><path-->
<!--                              d=" M-33.94157409667969,-28.281574249267578 C-35.50258255004883,-29.84258270263672 -35.50258255004883,-32.377418518066406 -33.94157409667969,-33.93842697143555 C-33.94157409667969,-33.93842697143555 -33.93842697143555,-33.94157409667969 -33.93842697143555,-33.94157409667969 C-32.377418518066406,-35.50258255004883 -29.84258270263672,-35.50258255004883 -28.281574249267578,-33.94157409667969 C-28.281574249267578,-33.94157409667969 33.94157409667969,28.281574249267578 33.94157409667969,28.281574249267578 C35.50258255004883,29.84258270263672 35.50258255004883,32.377418518066406 33.94157409667969,33.93842697143555 C33.94157409667969,33.93842697143555 33.93842697143555,33.94157409667969 33.93842697143555,33.94157409667969 C32.377418518066406,35.50258255004883 29.84258270263672,35.50258255004883 28.281574249267578,33.94157409667969 C28.281574249267578,33.94157409667969 -33.94157409667969,-28.281574249267578 -33.94157409667969,-28.281574249267578z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g></g></mask></defs><g-->
<!--                              clip-path="url(#__lottie_element_156)"><g mask="url(#__lottie_element_160)"-->
<!--                                                                        style="display: block;"><g-->
<!--                              opacity="1" transform="matrix(1,0,0,1,44,44)"><g opacity="1"-->
<!--                                                                               transform="matrix(1,0,0,1,0,0)"><path-->
<!--                              d=" M-0.4399999976158142,-25.09600067138672 C-0.15000000596046448,-24.736000061035156 0,-24.29599952697754 0,-23.84600067138672 C0,-23.84600067138672 0,23.833999633789062 0,23.833999633789062 C0,24.93400001525879 -0.8999999761581421,25.833999633789062 -2,25.833999633789062 C-2.450000047683716,25.833999633789062 -2.890000104904175,25.673999786376953 -3.25,25.393999099731445 C-3.25,25.393999099731445 -20,11.994000434875488 -20,11.994000434875488 C-20,11.994000434875488 -24,11.994000434875488 -24,11.994000434875488 C-28.420000076293945,11.994000434875488 -32,8.413999557495117 -32,3.99399995803833 C-32,3.99399995803833 -32,-4.00600004196167 -32,-4.00600004196167 C-32,-8.425999641418457 -28.420000076293945,-12.005999565124512 -24,-12.005999565124512 C-24,-12.005999565124512 -20,-12.005999565124512 -20,-12.005999565124512 C-20,-12.005999565124512 -3.25,-25.4060001373291 -3.25,-25.4060001373291 C-2.390000104904175,-26.09600067138672 -1.1299999952316284,-25.95599937438965 -0.4399999976158142,-25.09600067138672z M13.777999877929688,-28.895999908447266 C24.81800079345703,-23.615999221801758 31.99799919128418,-12.456000328063965 31.99799919128418,-0.006000000052154064 C31.99799919128418,12.454000473022461 24.808000564575195,23.624000549316406 13.748000144958496,28.893999099731445 C11.758000373840332,29.8439998626709 9.368000030517578,29.003999710083008 8.418000221252441,27.003999710083008 C7.4679999351501465,25.013999938964844 8.317999839782715,22.624000549316406 10.307999610900879,21.673999786376953 C18.607999801635742,17.724000930786133 23.99799919128418,9.343999862670898 23.99799919128418,-0.006000000052154064 C23.99799919128418,-9.345999717712402 18.618000030517578,-17.715999603271484 10.338000297546387,-21.676000595092773 C8.338000297546387,-22.625999450683594 7.498000144958496,-25.016000747680664 8.447999954223633,-27.006000518798828 C9.39799976348877,-29.006000518798828 11.788000106811523,-29.84600067138672 13.777999877929688,-28.895999908447266z M8,-13.866000175476074 C12.779999732971191,-11.095999717712402 16,-5.926000118255615 16,-0.006000000052154064 C16,5.914000034332275 12.779999732971191,11.083999633789062 8,13.854000091552734 C8,13.854000091552734 8,-13.866000175476074 8,-13.866000175476074z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g></g><g-->
<!--                              opacity="1" style="display: block;"-->
<!--                              transform="matrix(1,0,0,1,41.172000885009766,46.827999114990234)"><g opacity="1"-->
<!--                                                                                                   transform="matrix(1,0,0,1,-0.5,-0.5)"><path-->
<!--                              d=" M-33.94157409667969,-28.281574249267578 C-35.50258255004883,-29.84258270263672 -35.50258255004883,-32.377418518066406 -33.94157409667969,-33.93842697143555 C-33.94157409667969,-33.93842697143555 -33.93842697143555,-33.94157409667969 -33.93842697143555,-33.94157409667969 C-32.377418518066406,-35.50258255004883 -29.84258270263672,-35.50258255004883 -28.281574249267578,-33.94157409667969 C-28.281574249267578,-33.94157409667969 33.94157409667969,28.281574249267578 33.94157409667969,28.281574249267578 C35.50258255004883,29.84258270263672 35.50258255004883,32.377418518066406 33.94157409667969,33.93842697143555 C33.94157409667969,33.93842697143555 33.93842697143555,33.94157409667969 33.93842697143555,33.94157409667969 C32.377418518066406,35.50258255004883 29.84258270263672,35.50258255004883 28.281574249267578,33.94157409667969 C28.281574249267578,33.94157409667969 -33.94157409667969,-28.281574249267578 -33.94157409667969,-28.281574249267578z"-->
<!--                              fill="rgb(255,255,255)"-->
<!--                              fill-opacity="1"></path></g></g></g></svg></span>-->
<!--                        </button>-->
<!--                        <div class="bilibili-player-video-volumebar-wrp" style="">-->
<!--                          <div class="bilibili-player-video-volume-num">66</div>-->
<!--                          <div class="bilibili-player-video-volumebar bui bui-slider">-->
<!--                            <div class="bui-track bui-track-vertical" style="">-->
<!--                              <div class="bui-bar-wrap">-->
<!--                                <div class="bui-bar bui-bar-normal" role="progressbar"-->
<!--                                     style="transform: scaleY(0.66);"></div>-->
<!--                              </div>-->
<!--                              <div class="bui-thumb" style="left: -5px; transform: translateY(-31.68px);">-->
<!--                                <div class="bui-thumb-dot" style=""></div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="bilibili-player-video-btn bilibili-player-video-btn-setting">-->
<!--                        <button aria-label="设置" class="bilibili-player-iconfont bilibili-player-iconfont-setting"><span-->
<!--                            class="bp-svgicon"><svg height="88" preserveAspectRatio="xMidYMid meet"-->
<!--                                                    style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"-->
<!--                                                    viewBox="0 0 88 88"-->
<!--                                                    width="88"-->
<!--                                                    xmlns="http://www.w3.org/2000/svg"><defs><clipPath-->
<!--                            id="__lottie_element_95"><rect height="88" width="88" x="0" y="0"></rect></clipPath></defs><g-->
<!--                            clip-path="url(#__lottie_element_95)"><g opacity="1"-->
<!--                                                                     style="display: block;"-->
<!--                                                                     transform="matrix(1,0,0,1,44,43.875)"><g-->
<!--                            opacity="1" transform="matrix(1,0,0,1,0,0)"><path-->
<!--                            d=" M0,8.125 C-4.420000076293945,8.125 -8,4.545000076293945 -8,0.125 C-8,-4.295000076293945 -4.420000076293945,-7.875 0,-7.875 C4.420000076293945,-7.875 8,-4.295000076293945 8,0.125 C8,4.545000076293945 4.420000076293945,8.125 0,8.125z M0,16.125 C8.84000015258789,16.125 16,8.96500015258789 16,0.125 C16,-8.71500015258789 8.84000015258789,-15.875 0,-15.875 C-8.84000015258789,-15.875 -16,-8.71500015258789 -16,0.125 C-16,8.96500015258789 -8.84000015258789,16.125 0,16.125z M4.539999961853027,27.51099967956543 C3.059999942779541,27.750999450683594 1.5499999523162842,27.871000289916992 0,27.871000289916992 C-1.5499999523162842,27.871000289916992 -3.059999942779541,27.750999450683594 -4.539999961853027,27.51099967956543 C-4.539999961853027,27.51099967956543 -8.699999809265137,32.56100082397461 -8.699999809265137,32.56100082397461 C-9.9399995803833,34.07099914550781 -12.100000381469727,34.46099853515625 -13.789999961853027,33.48099899291992 C-13.789999961853027,33.48099899291992 -21.780000686645508,28.871000289916992 -21.780000686645508,28.871000289916992 C-23.469999313354492,27.891000747680664 -24.209999084472656,25.83099937438965 -23.520000457763672,24.000999450683594 C-23.520000457763672,24.000999450683594 -21.290000915527344,18.06100082397461 -21.290000915527344,18.06100082397461 C-23.3799991607666,15.621000289916992 -25.049999237060547,12.810999870300293 -26.209999084472656,9.76099967956543 C-26.209999084472656,9.76099967956543 -32.65999984741211,8.680999755859375 -32.65999984741211,8.680999755859375 C-34.59000015258789,8.361000061035156 -36,6.690999984741211 -36,4.741000175476074 C-36,4.741000175476074 -36,-4.488999843597412 -36,-4.488999843597412 C-36,-6.439000129699707 -34.59000015258789,-8.109000205993652 -32.65999984741211,-8.428999900817871 C-32.65999984741211,-8.428999900817871 -26.399999618530273,-9.479000091552734 -26.399999618530273,-9.479000091552734 C-25.309999465942383,-12.559000015258789 -23.690000534057617,-15.388999938964844 -21.65999984741211,-17.868999481201172 C-21.65999984741211,-17.868999481201172 -23.959999084472656,-23.999000549316406 -23.959999084472656,-23.999000549316406 C-24.639999389648438,-25.839000701904297 -23.899999618530273,-27.888999938964844 -22.209999084472656,-28.868999481201172 C-22.209999084472656,-28.868999481201172 -14.220000267028809,-33.479000091552734 -14.220000267028809,-33.479000091552734 C-12.529999732971191,-34.45899963378906 -10.380000114440918,-34.069000244140625 -9.130000114440918,-32.558998107910156 C-9.130000114440918,-32.558998107910156 -5.099999904632568,-27.659000396728516 -5.099999904632568,-27.659000396728516 C-3.450000047683716,-27.9689998626709 -1.7400000095367432,-28.128999710083008 0,-28.128999710083008 C1.7400000095367432,-28.128999710083008 3.450000047683716,-27.9689998626709 5.099999904632568,-27.659000396728516 C5.099999904632568,-27.659000396728516 9.130000114440918,-32.558998107910156 9.130000114440918,-32.558998107910156 C10.380000114440918,-34.069000244140625 12.529999732971191,-34.45899963378906 14.220000267028809,-33.479000091552734 C14.220000267028809,-33.479000091552734 22.209999084472656,-28.868999481201172 22.209999084472656,-28.868999481201172 C23.899999618530273,-27.888999938964844 24.639999389648438,-25.839000701904297 23.959999084472656,-23.999000549316406 C23.959999084472656,-23.999000549316406 21.65999984741211,-17.868999481201172 21.65999984741211,-17.868999481201172 C23.690000534057617,-15.388999938964844 25.309999465942383,-12.559000015258789 26.399999618530273,-9.479000091552734 C26.399999618530273,-9.479000091552734 32.65999984741211,-8.428999900817871 32.65999984741211,-8.428999900817871 C34.59000015258789,-8.109000205993652 36,-6.439000129699707 36,-4.488999843597412 C36,-4.488999843597412 36,4.741000175476074 36,4.741000175476074 C36,6.690999984741211 34.59000015258789,8.361000061035156 32.65999984741211,8.680999755859375 C32.65999984741211,8.680999755859375 26.209999084472656,9.76099967956543 26.209999084472656,9.76099967956543 C25.049999237060547,12.810999870300293 23.3799991607666,15.621000289916992 21.290000915527344,18.06100082397461 C21.290000915527344,18.06100082397461 23.520000457763672,24.000999450683594 23.520000457763672,24.000999450683594 C24.209999084472656,25.83099937438965 23.469999313354492,27.891000747680664 21.780000686645508,28.871000289916992 C21.780000686645508,28.871000289916992 13.789999961853027,33.48099899291992 13.789999961853027,33.48099899291992 C12.100000381469727,34.46099853515625 9.9399995803833,34.07099914550781 8.699999809265137,32.56100082397461 C8.699999809265137,32.56100082397461 4.539999961853027,27.51099967956543 4.539999961853027,27.51099967956543z"-->
<!--                            fill="rgb(255,255,255)"-->
<!--                            fill-opacity="1"></path></g></g></g></svg></span>-->
<!--                        </button>-->
<!--                        <div class="bilibili-player-video-btn-setting-wrap" style="display: none;">-->
<!--                          <div class="bilibili-player-video-btn-setting-box bui bui-panel bui-dark">-->
<!--                            <div class="bui-panel-wrap" style="width: 132px; height: 140px;">-->
<!--                              <div class="bui-panel-move" style="width: 418px; transform: translateX(0px);">-->
<!--                                <div class="bui-panel-item bui-panel-item-active" style="width: 132px; height: 140px;">-->
<!--                                  <div class="bilibili-player-video-btn-setting-left">-->
<!--                                    <div class="bilibili-player-video-btn-setting-left-videomirror bui bui-switch">-->
<!--                                      <input aria-label="镜像画面" class="bui-switch-input" type="checkbox">-->
<!--                                      <label class="bui-switch-label">-->
<!--                                        <span class="bui-switch-name">镜像画面</span>-->
<!--                                        <span class="bui-switch-body">-->
<!--                                        <span class="bui-switch-dot">-->
<!--                                            <span></span>-->
<!--                                        </span>-->
<!--                                      </span>-->
<!--                                      </label>-->
<!--                                    </div>-->
<!--                                    <div class="bilibili-player-video-btn-setting-left-repeat bui bui-switch"><input-->
<!--                                        aria-label="洗脑循环" class="bui-switch-input" type="checkbox">-->
<!--                                      <label class="bui-switch-label">-->
<!--                                        <span class="bui-switch-name">洗脑循环</span>-->
<!--                                        <span class="bui-switch-body">-->
<!--                                          <span class="bui-switch-dot">-->
<!--                                              <span></span>-->
<!--                                          </span>-->
<!--                                        </span>-->
<!--                                      </label>-->
<!--                                    </div>-->
<!--                                    <div class="bilibili-player-video-btn-setting-left-autoplay bui bui-switch"><input-->
<!--                                        aria-label="自动开播" class="bui-switch-input" type="checkbox">-->
<!--                                      <label class="bui-switch-label">-->
<!--                                        <span class="bui-switch-name">自动开播<span class="bui-switch-reddot"></span></span>-->
<!--                                        <span class="bui-switch-body">-->
<!--                                          <span class="bui-switch-dot">-->
<!--                                              <span></span>-->
<!--                                          </span>-->
<!--                                        </span>-->
<!--                                      </label>-->
<!--                                    </div>-->
<!--                                    <div class="bilibili-player-video-btn-setting-left-more">-->
<!--                                      <span class="bilibili-player-video-btn-setting-left-more-text">更多播放设置</span><span-->
<!--                                        class="bp-svgicon"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                        d="M9.188 7.999l-3.359 3.359a.75.75 0 101.061 1.061l3.889-3.889a.75.75 0 000-1.061L6.89 3.58a.75.75 0 10-1.061 1.061l3.359 3.358z"></path></svg></span>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </div>-->

<!--                                <div class="bui-panel-item" style="width: 286px; height: 0px;">-->
<!--                                  <div class="bilibili-player-video-btn-setting-right">-->
<!--                                    <div class="bilibili-player-video-btn-setting-right-playtype">-->
<!--                                      <div class="bilibili-player-video-btn-setting-right-playtype-title">-->
<!--                                        <span>播放方式</span>-->
<!--                                      </div>-->
<!--                                      <div-->
<!--                                          class="bilibili-player-video-btn-setting-right-playtype-content bui bui-radio bui-dark">-->
<!--                                        <div class="bui-radio-wrap bui-radio-button">-->
<!--                                          <div class="bui-radio-group" style="margin: 0 -4px;">-->

<!--                                            <label class="bui-radio-item" style="margin: 0 4px;">-->
<!--                                              <input checked="" class="bui-radio-input" name="bui-radio1" type="radio"-->
<!--                                                     value="1">-->
<!--                                              <span class="bui-radio-label">-->
<!--                                              <span class="bui-radio-text">自动切集</span>-->
<!--                                            </span>-->
<!--                                            </label>-->

<!--                                            <label class="bui-radio-item" style="margin: 0 4px;">-->
<!--                                              <input class="bui-radio-input" name="bui-radio1" type="radio" value="2">-->
<!--                                              <span class="bui-radio-label">-->
<!--                                                <span class="bui-radio-text">播完暂停</span>-->
<!--                                              </span>-->
<!--                                            </label>-->
<!--                                          </div>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                    </div>-->
<!--                                    <div class="bilibili-player-video-btn-setting-right-video-scale">-->
<!--                                      <div class="bilibili-player-video-btn-setting-right-video-scale-title">-->
<!--                                        <span>视频比例</span>-->
<!--                                      </div>-->
<!--                                      <div-->
<!--                                          class="bilibili-player-video-btn-setting-right-video-scale-content bui bui-radio bui-dark">-->
<!--                                        <div class="bui-radio-wrap bui-radio-button">-->
<!--                                          <div class="bui-radio-group" style="margin: 0 -4px;">-->

<!--                                            <label class="bui-radio-item" style="margin: 0 4px;">-->
<!--                                              <input checked="" class="bui-radio-input" name="bui-radio2"-->
<!--                                                     type="radio" value="video-size-default">-->
<!--                                              <span class="bui-radio-label">-->
<!--                                                <span class="bui-radio-text">自动</span>-->
<!--                                              </span>-->
<!--                                            </label>-->

<!--                                            <label class="bui-radio-item" style="margin: 0 4px;">-->
<!--                                              <input class="bui-radio-input" name="bui-radio2" type="radio"-->
<!--                                                     value="video-size-4-3">-->
<!--                                              <span class="bui-radio-label">-->
<!--                                                <span class="bui-radio-text">4:3</span>-->
<!--                                              </span>-->
<!--                                            </label>-->

<!--                                            <label class="bui-radio-item" style="margin: 0 4px;">-->
<!--                                              <input class="bui-radio-input" name="bui-radio2" type="radio"-->
<!--                                                     value="video-size-16-9">-->
<!--                                              <span class="bui-radio-label">-->
<!--                                                <span class="bui-radio-text">16:9 </span>-->
<!--                                              </span>-->
<!--                                            </label>-->

<!--                                          </div>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                    </div>-->

<!--                                    <div class="bilibili-player-video-btn-setting-right-others" style="display: block;">-->
<!--                                      <div class="bilibili-player-video-btn-setting-right-others-title">-->
<!--                                        <span>其它设置</span>-->
<!--                                      </div>-->
<!--                                      <div class="bilibili-player-video-btn-setting-right-others-content">-->
<!--                                        <div-->
<!--                                            class="bilibili-player-fl bilibili-player-video-btn-setting-right-others-content-blackside bui bui-checkbox bui-dark">-->
<!--                                          <input aria-label="隐藏黑边" class="bui-checkbox-input" type="checkbox">-->
<!--                                          <label class="bui-checkbox-label">-->
<!--                                            <span class="bui-checkbox-icon bui-checkbox-icon-default"><svg-->
<!--                                                height="32" viewBox="0 0 32 32" width="32"-->
<!--                                                xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                                d="M8 6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                            <span class="bui-checkbox-icon bui-checkbox-icon-selected"><svg-->
<!--                                                height="32" viewBox="0 0 32 32" width="32"-->
<!--                                                xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                                d="M13 18.25l-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                            <span class="bui-checkbox-name">隐藏黑边</span>-->
<!--                                          </label></div>-->
<!--                                        <div-->
<!--                                            class="bilibili-player-fl bilibili-player-video-btn-setting-right-others-content-lightoff bui bui-checkbox bui-dark">-->
<!--                                          <input aria-label="关灯模式" class="bui-checkbox-input" type="checkbox">-->
<!--                                          <label class="bui-checkbox-label">-->
<!--                                            <span class="bui-checkbox-icon bui-checkbox-icon-default"><svg-->
<!--                                                height="32" viewBox="0 0 32 32" width="32"-->
<!--                                                xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                                d="M8 6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                            <span class="bui-checkbox-icon bui-checkbox-icon-selected"><svg-->
<!--                                                height="32" viewBox="0 0 32 32" width="32"-->
<!--                                                xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                                d="M13 18.25l-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                            <span class="bui-checkbox-name">关灯模式</span>-->
<!--                                          </label></div>-->
<!--                                        <div-->
<!--                                            class="bilibili-player-fl bilibili-player-video-btn-setting-right-others-content-widescreensave"-->
<!--                                            style="display: none;"></div>-->
<!--                                        <div-->
<!--                                            class="bilibili-player-fl bilibili-player-video-btn-setting-right-others-content-panoramamode"-->
<!--                                            style="display:none;"></div>-->
<!--                                        <div-->
<!--                                            class="bilibili-player-fl bilibili-player-video-btn-setting-right-others-content-highenergy bui bui-checkbox bui-dark"-->
<!--                                            style="display: block;"><input aria-label="高能进度条" checked=""-->
<!--                                                                           class="bui-checkbox-input" type="checkbox">-->
<!--                                          <label class="bui-checkbox-label">-->
<!--                                            <span class="bui-checkbox-icon bui-checkbox-icon-default"><svg-->
<!--                                                height="32" viewBox="0 0 32 32" width="32"-->
<!--                                                xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                                d="M8 6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                            <span class="bui-checkbox-icon bui-checkbox-icon-selected"><svg-->
<!--                                                height="32" viewBox="0 0 32 32" width="32"-->
<!--                                                xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                                d="M13 18.25l-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                            <span class="bui-checkbox-name">高能进度条</span>-->
<!--                                          </label></div>-->
<!--                                        <div-->
<!--                                            class="bilibili-player-fl bilibili-player-video-btn-setting-right-others-content-skip"-->
<!--                                            style="display: none;"></div>-->
<!--                                      </div>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </div>-->

<!--                              </div>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="bilibili-player-video-btn bilibili-player-video-btn-widescreen">-->
<!--                        <button-->
<!--                            aria-label="宽屏模式"-->
<!--                            class="bilibili-player-iconfont bilibili-player-iconfont-widescreen-off player-tooltips-trigger"-->
<!--                            data-change-mode="2" data-position="top-center" data-text="宽屏模式"-->
<!--                            data-tooltip="1"><span class="bp-svgicon"><svg height="88" viewBox="0 0 88 88"-->
<!--                                                                           width="88"-->
<!--                                                                           xmlns="http://www.w3.org/2000/svg"><path-->
<!--                            d="M72 16a8 8 0 018 8v40a8 8 0 01-8 8H16a8 8 0 01-8-8V24a8 8 0 018-8h56zM31.556 31.294a2 2 0 00-2.7-.117l-.128.117-11.314 11.314a2 2 0 00-.117 2.701l.117.127L28.728 56.75a2 2 0 002.701.117l.127-.117 2.829-2.828a2 2 0 00.117-2.702l-.117-.127-7.071-7.07 7.07-7.072a2 2 0 00.118-2.701l-.117-.127-2.829-2.829zm24.887 0l-2.829 2.829a2 2 0 000 2.828l7.071 7.071-7.07 7.071a2 2 0 000 2.829l2.828 2.828a2 2 0 002.828 0l11.314-11.314a2 2 0 000-2.828L59.27 31.294a2 2 0 00-2.828 0z"-->
<!--                            fill="#FFF" fill-rule="evenodd"></path></svg></span></button>-->
<!--                        <button-->
<!--                            aria-label="退出宽屏"-->
<!--                            class="bilibili-player-iconfont bilibili-player-iconfont-widescreen-on player-tooltips-trigger"-->
<!--                            data-change-mode="2" data-position="top-center" data-text="退出宽屏"-->
<!--                            data-tooltip="1"><span class="bp-svgicon"><svg height="88" viewBox="0 0 88 88"-->
<!--                                                                           width="88"-->
<!--                                                                           xmlns="http://www.w3.org/2000/svg"><path-->
<!--                            d="M72 16a8 8 0 018 8v40a8 8 0 01-8 8H16a8 8 0 01-8-8V24a8 8 0 018-8h56zM24.243 31.294l-2.829 2.829a2 2 0 000 2.828l7.071 7.071-7.07 7.071a2 2 0 000 2.829l2.828 2.828a2 2 0 002.828 0l11.314-11.314a2 2 0 000-2.828L27.07 31.294a2 2 0 00-2.828 0zm39.513 0a2 2 0 00-2.7-.117l-.128.117-11.314 11.314a2 2 0 00-.117 2.701l.117.127L60.928 56.75a2 2 0 002.701.117l.127-.117 2.829-2.828a2 2 0 00.117-2.702l-.117-.127-7.071-7.07 7.07-7.072a2 2 0 00.118-2.701l-.117-.127-2.829-2.829z"-->
<!--                            fill="#FFF" fill-rule="evenodd"></path></svg></span></button>-->
<!--                      </div>-->
<!--                      <div class="bilibili-player-video-btn bilibili-player-video-web-fullscreen">-->
<!--                        <button-->
<!--                            aria-label="网页全屏"-->
<!--                            class="bilibili-player-iconfont bilibili-player-iconfont-web-fullscreen-off player-tooltips-trigger"-->
<!--                            data-change-mode="2" data-position="top-center" data-text="网页全屏"-->
<!--                            data-tooltip="1"><span class="bp-svgicon"><svg height="88" viewBox="0 0 88 88"-->
<!--                                                                           width="88"-->
<!--                                                                           xmlns="http://www.w3.org/2000/svg"><path-->
<!--                            d="M64 56v-6a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2H58a2 2 0 01-2-2v-4a2 2 0 012-2h6zm-40 0h6a2 2 0 012 2v4a2 2 0 01-2 2H18a2 2 0 01-2-2V50a2 2 0 012-2h4a2 2 0 012 2v6zm48-30v12a2 2 0 01-2 2h-4a2 2 0 01-2-2v-6h-6a2 2 0 01-2-2v-4a2 2 0 012-2h12a2 2 0 012 2zm-54-2h12a2 2 0 012 2v4a2 2 0 01-2 2h-6v6a2 2 0 01-2 2h-4a2 2 0 01-2-2V26a2 2 0 012-2zm-2-8h56a8 8 0 018 8v40a8 8 0 01-8 8H16a8 8 0 01-8-8V24a8 8 0 018-8z"-->
<!--                            fill="#FFF" fill-rule="evenodd"></path></svg></span></button>-->
<!--                        <button-->
<!--                            aria-label="退出网页全屏"-->
<!--                            class="bilibili-player-iconfont bilibili-player-iconfont-web-fullscreen-on player-tooltips-trigger"-->
<!--                            data-change-mode="2" data-position="top-center" data-text="退出网页全屏"-->
<!--                            data-tooltip="1"><span class="bp-svgicon"><svg height="88" viewBox="0 0 88 88"-->
<!--                                                                           width="88"-->
<!--                                                                           xmlns="http://www.w3.org/2000/svg"><path-->
<!--                            d="M72 16a8 8 0 018 8v40a8 8 0 01-8 8H16a8 8 0 01-8-8V24a8 8 0 018-8h56zm-2 32H58a2 2 0 00-2 2v12a2 2 0 002 2h4a2 2 0 002-2v-6h6a2 2 0 002-2v-4a2 2 0 00-2-2zm-40 0H18a2 2 0 00-2 2v4a2 2 0 002 2h6v6a2 2 0 002 2h4a2 2 0 002-2V50a2 2 0 00-2-2zm32-24h-4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2h-6v-6a2 2 0 00-2-2zm-32 0h-4a2 2 0 00-2 2v6h-6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V26a2 2 0 00-2-2z"-->
<!--                            fill="#FFF" fill-rule="evenodd"></path></svg></span></button>-->
<!--                      </div>-->
<!--                      <div-->
<!--                          class="bilibili-player-video-btn bilibili-player-video-btn-fullscreen video-state-fullscreen-off">-->
<!--                        <button-->
<!--                            aria-label="进入全屏"-->
<!--                            class="bilibili-player-iconfont bilibili-player-iconfont-fullscreen-off player-tooltips-trigger"-->
<!--                            data-change-mode="2" data-position="top-right" data-text="进入全屏"-->
<!--                            data-tooltip="1">-->
<!--                          <span class="bp-svgicon"><svg id="图层_1" version="1.1" viewBox="0 0 22 22" x="0" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" y="0"><path class="st0"-->
<!--                                         d="M20 11h-6c0-1.2-.7-2.2-1.7-2.7L15 2.9c3 1.5 5 4.6 5 8.1zM15.8 18.6c-1.4.9-3 1.4-4.8 1.4s-3.4-.5-4.8-1.4l2.7-5.4c.6.5 1.3.8 2.1.8s1.5-.3 2.1-.8l2.7 5.4zM11 8V2v6zM7 2.9l2.7 5.4C8.7 8.8 8 9.8 8 11H2c0-3.5 2-6.6 5-8.1z"></path><circle-->
<!--                              class="st0" cx="11" cy="11" r="1"></circle></svg></span>-->
<!--                        </button>-->
<!--                        <button-->
<!--                            aria-label="退出全屏"-->
<!--                            class="bilibili-player-iconfont bilibili-player-iconfont-fullscreen-on player-tooltips-trigger"-->
<!--                            data-change-mode="2" data-position="top-right" data-text="退出全屏"-->
<!--                            data-tooltip="1">-->
<!--                          <span class="bp-svgicon"><svg id="图层_1" version="1.1" viewBox="0 0 22 22" x="0" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" y="0"><path class="st0"-->
<!--                                         d="M20 11h-6c0-1.2-.7-2.2-1.7-2.7L15 2.9c3 1.5 5 4.6 5 8.1zM15.8 18.6c-1.4.9-3 1.4-4.8 1.4s-3.4-.5-4.8-1.4l2.7-5.4c.6.5 1.3.8 2.1.8s1.5-.3 2.1-.8l2.7 5.4zM11 8V2v6zM7 2.9l2.7 5.4C8.7 8.8 8 9.8 8 11H2c0-3.5 2-6.6 5-8.1z"></path><circle-->
<!--                              class="st0" cx="11" cy="11" r="1"></circle></svg></span>-->
<!--                        </button>-->
<!--                      </div>-->
<!--                    </div>-->
                  </div>
                  <div class="bilibili-player-video-progress-shadow bui bui-slider">
                    <div class="bui-track bui-track-video-progress" style="">
                      <div class="bui-bar-wrap">
                        <div class="bui-bar bui-bar-buffer" style="transform: scaleX(0.0408163);"></div>
                        <div class="bui-bar bui-bar-normal" role="progressbar" style="transform: scaleX(0.001);"></div>
                      </div>
                      <div class="bui-thumb" style="transform: translateX(0px);">
                        <div class="bui-thumb-dot" style="">
                          <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z"
                                fill="#333"></path>
                            <path
                                d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z"
                                fill="#fff"></path>
                            <path
                                d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z"
                                fill="#333"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--                  <div id="bilibili_pbp" class="show">-->
                  <!--                    <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1000 100" width="100%">-->
                  <!--                      <defs>-->
                  <!--                        <clipPath id="pbp-curve-path" clipPathUnits="userSpaceOnUse">-->
                  <!--                          <path-->
                  <!--                              d="M 0 100 L 0 80 C 5.1 80.0, 5.1 65.8, 10.1 65.8 C 15.2 65.8, 15.2 39.4, 20.2 39.4 C 25.3 39.4, 25.3 11.5, 30.3 11.5 C 35.4 11.5, 35.4 0.0, 40.4 0.0 C 45.5 0.0, 45.5 14.9, 50.5 14.9 C 55.6 14.9, 55.6 22.9, 60.6 22.9 C 65.7 22.9, 65.7 30.1, 70.7 30.1 C 75.8 30.1, 75.8 34.0, 80.8 34.0 C 85.9 34.0, 85.9 35.4, 90.9 35.4 C 96.0 35.4, 96.0 35.4, 101.0 35.4 C 106.1 35.4, 106.1 42.2, 111.1 42.2 C 116.2 42.2, 116.2 45.0, 121.2 45.0 C 126.3 45.0, 126.3 46.5, 131.3 46.5 C 136.4 46.5, 136.4 47.7, 141.4 47.7 C 146.5 47.7, 146.5 53.6, 151.5 53.6 C 156.6 53.6, 156.6 52.5, 161.6 52.5 C 166.7 52.5, 166.7 54.3, 171.7 54.3 C 176.8 54.3, 176.8 59.3, 181.8 59.3 C 186.9 59.3, 186.9 59.6, 191.9 59.6 C 197.0 59.6, 197.0 62.1, 202.0 62.1 C 207.1 62.1, 207.1 62.4, 212.1 62.4 C 217.2 62.4, 217.2 62.0, 222.2 62.0 C 227.3 62.0, 227.3 62.7, 232.3 62.7 C 237.4 62.7, 237.4 62.3, 242.4 62.3 C 247.5 62.3, 247.5 62.2, 252.5 62.2 C 257.6 62.2, 257.6 61.6, 262.6 61.6 C 267.7 61.6, 267.7 61.3, 272.7 61.3 C 277.8 61.3, 277.8 61.7, 282.8 61.7 C 287.9 61.7, 287.9 62.5, 292.9 62.5 C 298.0 62.5, 298.0 61.6, 303.0 61.6 C 308.1 61.6, 308.1 62.1, 313.1 62.1 C 318.2 62.1, 318.2 58.4, 323.2 58.4 C 328.3 58.4, 328.3 61.6, 333.3 61.6 C 338.4 61.6, 338.4 61.9, 343.4 61.9 C 348.5 61.9, 348.5 60.8, 353.5 60.8 C 358.6 60.8, 358.6 62.0, 363.6 62.0 C 368.7 62.0, 368.7 61.0, 373.7 61.0 C 378.8 61.0, 378.8 63.5, 383.8 63.5 C 388.9 63.5, 388.9 63.7, 393.9 63.7 C 399.0 63.7, 399.0 65.2, 404.0 65.2 C 409.1 65.2, 409.1 65.3, 414.1 65.3 C 419.2 65.3, 419.2 67.1, 424.2 67.1 C 429.3 67.1, 429.3 67.6, 434.3 67.6 C 439.4 67.6, 439.4 67.1, 444.4 67.1 C 449.5 67.1, 449.5 67.1, 454.5 67.1 C 459.6 67.1, 459.6 68.1, 464.6 68.1 C 469.7 68.1, 469.7 69.5, 474.7 69.5 C 479.8 69.5, 479.8 68.6, 484.8 68.6 C 489.9 68.6, 489.9 66.2, 494.9 66.2 C 500.0 66.2, 500.0 66.6, 505.1 66.6 C 510.1 66.6, 510.1 67.1, 515.2 67.1 C 520.2 67.1, 520.2 65.9, 525.3 65.9 C 530.3 65.9, 530.3 65.1, 535.4 65.1 C 540.4 65.1, 540.4 66.6, 545.5 66.6 C 550.5 66.6, 550.5 66.5, 555.6 66.5 C 560.6 66.5, 560.6 67.7, 565.7 67.7 C 570.7 67.7, 570.7 66.8, 575.8 66.8 C 580.8 66.8, 580.8 68.9, 585.9 68.9 C 590.9 68.9, 590.9 68.2, 596.0 68.2 C 601.0 68.2, 601.0 67.7, 606.1 67.7 C 611.1 67.7, 611.1 67.8, 616.2 67.8 C 621.2 67.8, 621.2 67.9, 626.3 67.9 C 631.3 67.9, 631.3 65.5, 636.4 65.5 C 641.4 65.5, 641.4 69.4, 646.5 69.4 C 651.5 69.4, 651.5 65.6, 656.6 65.6 C 661.6 65.6, 661.6 64.0, 666.7 64.0 C 671.7 64.0, 671.7 63.5, 676.8 63.5 C 681.8 63.5, 681.8 64.3, 686.9 64.3 C 691.9 64.3, 691.9 63.2, 697.0 63.2 C 702.0 63.2, 702.0 62.8, 707.1 62.8 C 712.1 62.8, 712.1 61.2, 717.2 61.2 C 722.2 61.2, 722.2 59.8, 727.3 59.8 C 732.3 59.8, 732.3 60.4, 737.4 60.4 C 742.4 60.4, 742.4 60.6, 747.5 60.6 C 752.5 60.6, 752.5 61.1, 757.6 61.1 C 762.6 61.1, 762.6 60.9, 767.7 60.9 C 772.7 60.9, 772.7 62.7, 777.8 62.7 C 782.8 62.7, 782.8 62.8, 787.9 62.8 C 792.9 62.8, 792.9 61.9, 798.0 61.9 C 803.0 61.9, 803.0 62.8, 808.1 62.8 C 813.1 62.8, 813.1 64.9, 818.2 64.9 C 823.2 64.9, 823.2 66.3, 828.3 66.3 C 833.3 66.3, 833.3 65.8, 838.4 65.8 C 843.4 65.8, 843.4 66.1, 848.5 66.1 C 853.5 66.1, 853.5 65.2, 858.6 65.2 C 863.6 65.2, 863.6 66.6, 868.7 66.6 C 873.7 66.6, 873.7 64.9, 878.8 64.9 C 883.8 64.9, 883.8 65.7, 888.9 65.7 C 893.9 65.7, 893.9 65.1, 899.0 65.1 C 904.0 65.1, 904.0 63.0, 909.1 63.0 C 914.1 63.0, 914.1 62.2, 919.2 62.2 C 924.2 62.2, 924.2 58.9, 929.3 58.9 C 934.3 58.9, 934.3 58.9, 939.4 58.9 C 944.4 58.9, 944.4 55.0, 949.5 55.0 C 954.5 55.0, 954.5 57.6, 959.6 57.6 C 964.6 57.6, 964.6 52.8, 969.7 52.8 C 974.7 52.8, 974.7 52.8, 979.8 52.8 C 984.8 52.8, 984.8 73.3, 989.9 73.3 C 994.9 73.3, 994.9 80.0, 1000.0 80.0 L 1000 100 Z"></path>-->
                  <!--                        </clipPath>-->
                  <!--                        <clipPath id="pbp-played-path" clipPathUnits="userSpaceOnUse">-->
                  <!--                          <rect height="100%" width="0" x="0" y="0"></rect>-->
                  <!--                          <path-->
                  <!--                              d="M 0.0 100 H 7.6 V 0 H 0.0 Z M 147.4 100 H 147.4 V 0 H 147.4 Z M 147.5 100 H 168.7 V 0 H 147.5 Z"></path>-->
                  <!--                        </clipPath>-->
                  <!--                      </defs>-->
                  <!--                      <g class="bilibili-player-videoshot-area" clip-path="url(#pbp-curve-path)" fill-opacity="0.2"-->
                  <!--                         hover-bind="1">-->
                  <!--                        <rect fill="rgb(255,255,255)" height="100%" width="100%" x="0" y="0"></rect>-->
                  <!--                        <rect clip-path="url(#pbp-played-path)" fill="rgb(35,173,229)" height="100%" width="100%" x="0"-->
                  <!--                              y="0"></rect>-->
                  <!--                        <line style="stroke: rgba(255,255,255,0.2); stroke-width: 1;" x1="0" x2="0" y1="0"-->
                  <!--                              y2="100%"></line>-->
                  <!--                      </g>-->
                  <!--                    </svg>-->
                  <!--                    <div id="bilibili_pbp_pin">-->
                  <!--                      <div class="pbp-icon">-->
                  <!--                        <svg class="icon" height="16" p-id="3385" t="1571033005936"-->
                  <!--                             version="1.1" viewBox="0 0 1024 1024" width="16" xmlns="http://www.w3.org/2000/svg">-->
                  <!--                          <path-->
                  <!--                              d="M85.333333 224.853333 139.946667 170.666667 853.333333 884.053333 799.146667 938.666667 546.133333 685.653333 546.133333 938.666667 477.866667 938.666667 477.866667 682.666667 256 682.666667 256 597.333333 341.333333 512 341.333333 480.853333 85.333333 224.853333M682.666667 512 768 597.333333 768 682.666667 760.32 682.666667 341.333333 263.68 341.333333 170.666667 298.666667 170.666667 298.666667 85.333333 725.333333 85.333333 725.333333 170.666667 682.666667 170.666667 682.666667 512Z"-->
                  <!--                              fill="#ffffff" p-id="3386"></path>-->
                  <!--                        </svg>-->
                  <!--                      </div>-->
                  <!--                      <span class="pbp-tips">打开《高能进度条》常驻</span></div>-->
                  <!--                  </div>-->
                </div>
              </div>
              <div class="bilibili-player-video-toast-wrp">
                <div class="bilibili-player-video-toast-top"></div>
                <div class="bilibili-player-video-toast-middle"></div>
                <div class="bilibili-player-video-toast-bottom"></div>
              </div>
              <div class="bilibili-player-drag-mask-close"><span class="bp-svgicon"><svg
                  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path
                  d="M8 6.939l3.182-3.182a.75.75 0 111.061 1.061L9.061 8l3.182 3.182a.75.75 0 11-1.061 1.061L8 9.061l-3.182 3.182a.75.75 0 11-1.061-1.061L6.939 8 3.757 4.818a.75.75 0 111.061-1.061L8 6.939z"></path></svg></span>
              </div>
              <div class="bilibili-player-drag-mask-state video-state-pause">
                <span class="bilibili-player-drag-mask-icon bilibili-player-drag-mask-icon-play"><span
                    class="bp-svgicon"><svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="pid-4-svgo-a"
                                                                                                   d="M0 0h80v80H0z"></path><path
                    id="pid-4-svgo-d"
                    d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z"></path><filter
                    id="pid-4-svgo-c" filterUnits="objectBoundingBox" height="132.5%" width="130.9%"
                    x="-15.4%" y="-16.3%"><feOffset dy="2"
                                                    in="SourceAlpha"
                                                    result="shadowOffsetOuter1"></feOffset><feGaussianBlur
                    in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"></feGaussianBlur><feColorMatrix
                    in="shadowBlurOuter1" result="shadowMatrixOuter1"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feOffset in="SourceAlpha"
                                                                                                 result="shadowOffsetOuter2"></feOffset><feGaussianBlur
                    in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="3.5"></feGaussianBlur><feColorMatrix
                    in="shadowBlurOuter2" result="shadowMatrixOuter2"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix><feMerge><feMergeNode
                    in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="shadowMatrixOuter2"></feMergeNode></feMerge></filter></defs><g
                    fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-4-svgo-b" fill="#fff"><use
                    xlink:href="#pid-4-svgo-a"></use></mask><g mask="url(#pid-4-svgo-b)"><use fill="#000"
                                                                                              filter="url(#pid-4-svgo-c)"
                                                                                              xlink:href="#pid-4-svgo-d"></use><use
                    fill="#FFF" xlink:href="#pid-4-svgo-d"></use></g></g></svg></span></span>
                <span class="bilibili-player-drag-mask-icon bilibili-player-drag-mask-icon-pause"><span
                    class="bp-svgicon"><svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="pid-5-svgo-a"
                                                                                                   d="M0 0h80v80H0z"></path><path
                    id="pid-5-svgo-d"
                    d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zm-20.85 22.284h-.41a3.095 3.095 0 00-3.079 2.783c-.316 3.124-.474 7.097-.474 11.919s.158 8.795.474 11.919a3.095 3.095 0 003.08 2.783h.41a3.095 3.095 0 003.079-2.783c.316-3.124.474-7.097.474-11.919s-.158-8.795-.474-11.919a3.095 3.095 0 00-3.08-2.783zm17.017 0h-.41a3.095 3.095 0 00-3.079 2.783c-.316 3.124-.474 7.097-.474 11.919s.158 8.795.474 11.919a3.095 3.095 0 003.08 2.783h.41a3.095 3.095 0 003.079-2.783c.316-3.124.474-7.097.474-11.919s-.158-8.795-.474-11.919a3.095 3.095 0 00-3.08-2.783z"></path><filter
                    id="pid-5-svgo-c" filterUnits="objectBoundingBox" height="132.5%" width="130.9%"
                    x="-15.4%" y="-16.3%"><feOffset dy="2"
                                                    in="SourceAlpha"
                                                    result="shadowOffsetOuter1"></feOffset><feGaussianBlur
                    in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"></feGaussianBlur><feColorMatrix
                    in="shadowBlurOuter1" result="shadowMatrixOuter1"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix><feOffset in="SourceAlpha"
                                                                                                 result="shadowOffsetOuter2"></feOffset><feGaussianBlur
                    in="shadowOffsetOuter2" result="shadowBlurOuter2" stdDeviation="3.5"></feGaussianBlur><feColorMatrix
                    in="shadowBlurOuter2" result="shadowMatrixOuter2"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix><feMerge><feMergeNode
                    in="shadowMatrixOuter1"></feMergeNode><feMergeNode in="shadowMatrixOuter2"></feMergeNode></feMerge></filter></defs><g
                    fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-5-svgo-b" fill="#fff"><use
                    xlink:href="#pid-5-svgo-a"></use></mask><g mask="url(#pid-5-svgo-b)"><use fill="#000"
                                                                                              filter="url(#pid-5-svgo-c)"
                                                                                              xlink:href="#pid-5-svgo-d"></use><use
                    fill="#FFF" xlink:href="#pid-5-svgo-d"></use></g></g></svg></span></span>
              </div>
              <div class="bilibili-player-drag-mask-progress">
                <div class="bilibili-player-drag-mask-progress-buffer" style="transform: scaleX(0.0408163);"></div>
                <div class="bilibili-player-drag-mask-progress-tempo" style="transform: scaleX(0.001);"></div>
              </div>
<!--              <div class="bilibili-player-dm-tip-wrap">-->
<!--                <div class="bilibili-player-dm-tip">-->
<!--                  <div class="bilibili-player-dm-tip-svgm"><span class="bp-svgicon"><svg height="42"-->
<!--                                                                                         viewBox="0 0 106 42"-->
<!--                                                                                         width="106"-->
<!--                                                                                         xmlns="http://www.w3.org/2000/svg"><path-->
<!--                      d="M51.313.17l-4.089 5.454H19.729a18.727 18.727 0 00-12.97 5.198A18.727 18.727 0 00.95 24.33c0 4.741 1.921 9.034 5.029 12.141A17.116 17.116 0 0018.12 41.5h69.106c4.954 0 9.438-2.008 12.684-5.254a17.882 17.882 0 005.254-12.684c0-4.953-2.007-9.438-5.254-12.684a17.882 17.882 0 00-12.684-5.254H55.45L51.313.17z"-->
<!--                      fill="#000" fill-opacity=".703" fill-rule="evenodd" stroke="#FFF" stroke-linejoin="round"-->
<!--                      stroke-opacity=".496"></path></svg></span></div>-->
<!--                  <div class="bilibili-player-dm-tip-svgl"><span class="bp-svgicon"><svg height="42"-->
<!--                                                                                         viewBox="0 0 106 42"-->
<!--                                                                                         width="106"-->
<!--                                                                                         xmlns="http://www.w3.org/2000/svg"><path-->
<!--                      d="M30.708.17L26.62 5.623h-6.89a18.727 18.727 0 00-12.97 5.198A18.727 18.727 0 00.95 24.33c0 4.741 1.921 9.034 5.029 12.141A17.116 17.116 0 0018.12 41.5h69.106c4.954 0 9.438-2.008 12.684-5.254a17.882 17.882 0 005.254-12.684c0-4.953-2.007-9.438-5.254-12.684a17.882 17.882 0 00-12.684-5.254H34.845L30.708.17z"-->
<!--                      fill="#000" fill-opacity=".703" fill-rule="evenodd" stroke="#FFF" stroke-linejoin="round"-->
<!--                      stroke-opacity=".496"></path></svg></span></div>-->
<!--                  <div class="bilibili-player-dm-tip-like"></div>-->
<!--                  <div class="bilibili-player-dm-tip-back"><span class="bp-svgicon"><svg height="17" viewBox="0 0 19 17"-->
<!--                                                                                         width="19"-->
<!--                                                                                         xmlns="http://www.w3.org/2000/svg"-->
<!--                                                                                         xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter-->
<!--                      id="pid-37-svgo-a" filterUnits="objectBoundingBox" height="127.9%" width="123.3%" x="-11.6%"-->
<!--                      y="-7%"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur-->
<!--                      in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation=".5"></feGaussianBlur><feColorMatrix-->
<!--                      in="shadowBlurOuter1"-->
<!--                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.20074847 0"></feColorMatrix></filter><path-->
<!--                      id="pid-37-svgo-b"-->
<!--                      d="M75.6 9l.081.005a2.53 2.53 0 012.076 1.254l6.036 9.519c.254.387.395.832.407 1.323 0 1.282-1.083 2.232-2.542 2.232H69.542c-1.46 0-2.542-.95-2.542-2.267.01-.453.149-.894.4-1.276l6.043-9.531a2.53 2.53 0 012.076-1.254L75.6 9zm.003 10.73a.968.968 0 00-.98.956c-.002.53.434.96.974.961a.97.97 0 00.98-.955.968.968 0 00-.974-.961zm-.003-7.664a.975.975 0 00-.977.973c.11 2.565.17 4.031.183 4.398.02.551.458.76.794.76s.764-.216.786-.76c.014-.362.078-1.828.191-4.399a.975.975 0 00-.977-.972z"></path></defs><g-->
<!--                      fill="none" fill-rule="nonzero" transform="translate(-66 -9)"><use-->
<!--                      fill="#000" filter="url(#pid-37-svgo-a)" xlink:href="#pid-37-svgo-b"></use><use fill="#FFF"-->
<!--                                                                                                      xlink:href="#pid-37-svgo-b"></use></g></svg></span>-->
<!--                  </div>-->
<!--                  <div class="bilibili-player-dm-tip-like-animate"></div>-->
<!--                </div>-->
<!--              </div>-->
            </div>
<!--            <div class="bilibili-player-video-bottom-area">-->

<!--              <div class="bilibili-player-video-sendbar" style="">-->
<!--                <div class="bilibili-player-video-info">-->
<!--                  <div class="bilibili-player-video-info-people">-->
<!--                    <span class="bilibili-player-video-info-people-number">4151</span>-->
<!--                    <span class="bilibili-player-video-info-people-text">人正在看</span>-->
<!--                  </div>-->
<!--                  <div class="bilibili-player-video-info-danmaku player-tooltips-trigger" data-change-mode="0"-->
<!--                       data-position="top-center" data-text="当前弹幕池弹幕数2378条" data-tooltip="1">-->
<!--                    <span>，</span>-->
<!--                    <span class="bilibili-player-video-info-danmaku-number">2378</span>-->
<!--                    <span class="bilibili-player-video-info-danmaku-text">条弹幕</span>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="bilibili-player-video-danmaku-root">-->
<!--                  <div aria-label="弹幕显示隐藏" class="bilibili-player-video-danmaku-switch bui bui-switch"><input-->
<!--                      aria-label="弹幕" checked="" class="bui-switch-input" style="pointer-events: initial;"-->
<!--                      type="checkbox">-->
<!--                    <label class="bui-switch-label">-->
<!--                      <span class="bui-switch-name"></span>-->
<!--                      <span class="bui-switch-body">-->
<!--                  <span class="bui-switch-dot">-->
<!--                      <span><svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                          d="M1.311 3.759l-.153 1.438h2.186c0 1.832-.066 3.056-.175 3.674-.131.618-.688.959-1.683 1.023-.284 0-.568-.021-.874-.043L.317 8.818c.284.032.59.053.896.053.546 0 .852-.17.929-.511.077-.341.12-1.076.12-2.204H0l.306-3.344h1.847V1.427H.098V.479h3.18v3.28H1.311zM4 1.747h1.311A8.095 8.095 0 004.492.426L5.53.085c.306.426.579.873.809 1.363l-.689.299h1.508c.306-.544.569-1.129.809-1.747l1.082.373c-.219.511-.47.969-.743 1.374h1.268V6.23H7.322v.82H10v1.044H7.322V10H6.208V8.094H3.607V7.05h2.601v-.82H4V1.747zm4.568 3.557v-.831H7.322v.831h1.246zm-2.36 0v-.831H5.016v.831h1.192zM5.016 3.557h1.191v-.873H5.016v.873zm2.306-.873v.873h1.246v-.873H7.322z"></path></svg></span>-->
<!--                      </span>-->
<!--                  </span>-->
<!--                    </label>-->
<!--                  </div>-->
<!--                  <div class="bilibili-player-video-danmaku-setting">-->
<!--                    <span class="bp-svgicon"><svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path-->
<!--                        d="M16.5 8c1.289 0 2.49.375 3.5 1.022V6a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h7.022A6.5 6.5 0 0116.5 8zM7 13H5a1 1 0 010-2h2a1 1 0 010 2zm2-4H5a1 1 0 010-2h4a1 1 0 010 2z"></path><path-->
<!--                        d="M20.587 13.696l-.787-.131a3.503 3.503 0 00-.593-1.051l.301-.804a.46.46 0 00-.21-.56l-1.005-.581a.52.52 0 00-.656.113l-.499.607a3.53 3.53 0 00-1.276 0l-.499-.607a.52.52 0 00-.656-.113l-1.005.581a.46.46 0 00-.21.56l.301.804c-.254.31-.456.665-.593 1.051l-.787.131a.48.48 0 00-.413.465v1.209a.48.48 0 00.413.465l.811.135c.144.382.353.733.614 1.038l-.292.78a.46.46 0 00.21.56l1.005.581a.52.52 0 00.656-.113l.515-.626a3.549 3.549 0 001.136 0l.515.626a.52.52 0 00.656.113l1.005-.581a.46.46 0 00.21-.56l-.292-.78c.261-.305.47-.656.614-1.038l.811-.135A.48.48 0 0021 15.37v-1.209a.48.48 0 00-.413-.465zM16.5 16.057a1.29 1.29 0 11.002-2.582 1.29 1.29 0 01-.002 2.582z"></path></svg></span>-->
<!--                    <div class="bilibili-player-video-danmaku-setting-wrap" style="display: none;">-->
<!--                      <div class="bilibili-player-video-danmaku-setting-box bui bui-panel bui-dark">-->
<!--                        <div class="bui-panel-wrap" style="width: 298px; height: 366px;">-->
<!--                          <div class="bui-panel-move" style="width: 564px; transform: translateX(0px);">-->

<!--                            <div class="bui-panel-item bui-panel-item-active" style="width: 298px; height: 366px;">-->
<!--                              <div class="bilibili-player-video-danmaku-setting-left">-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-block">-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-block-title">按类型屏蔽</div>-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-block-content">-->
<!--                                    <div class="bilibili-player-block-filter-type " data-name="ctlbar_danmuku_scroll_on"-->
<!--                                         ftype="scroll"><span class="bilibili-player-block-filter-image"><span-->
<!--                                        class="bp-svgicon"><svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                        d="M23 3H5a4 4 0 00-4 4v14a4 4 0 004 4h18a4 4 0 004-4V7a4 4 0 00-4-4zM11 9h6a1 1 0 010 2h-6a1 1 0 010-2zm-3 2H6V9h2v2zm4 4h-2v-2h2v2zm9 0h-6a1 1 0 010-2h6a1 1 0 010 2z"></path></svg></span></span>-->
<!--                                      <div class="bilibili-player-block-filter-label">滚动</div>-->
<!--                                    </div>-->
<!--                                    <div class="bilibili-player-block-filter-type " data-name="ctlbar_danmuku_top_on"-->
<!--                                         ftype="top"><span class="bilibili-player-block-filter-image"><span-->
<!--                                        class="bp-svgicon"><svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                        d="M23 3H5a4 4 0 00-4 4v14a4 4 0 004 4h18a4 4 0 004-4V7a4 4 0 00-4-4zM9 9H7V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2z"></path></svg></span></span>-->
<!--                                      <div class="bilibili-player-block-filter-label">顶部</div>-->
<!--                                    </div>-->
<!--                                    <div class="bilibili-player-block-filter-type " data-name="ctlbar_danmuku_bottom_on"-->
<!--                                         ftype="bottom"><span class="bilibili-player-block-filter-image"><span-->
<!--                                        class="bp-svgicon"><svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                        d="M23 3H5a4 4 0 00-4 4v14a4 4 0 004 4h18a4 4 0 004-4V7a4 4 0 00-4-4zM9 21H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path></svg></span></span>-->
<!--                                      <div class="bilibili-player-block-filter-label">底部</div>-->
<!--                                    </div>-->
<!--                                    <div class="bilibili-player-block-filter-type " data-name="ctlbar_danmuku_color_on"-->
<!--                                         ftype="color"><span class="bilibili-player-block-filter-image"><span-->
<!--                                        class="bp-svgicon"><svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                        d="M17.365 11.118c0-.612-.535-1.147-1.147-1.147s-1.147.535-1.147 1.147c0 .611.535 1.147 1.147 1.147s1.147-.536 1.147-1.147zM12.93 9.665c-.764 0-1.376.611-1.376 1.3 0 .689.612 1.301 1.376 1.301s1.376-.612 1.376-1.301-.612-1.3-1.376-1.3zM9.794 11.883c-.764 0-1.376.612-1.376 1.3 0 .689.612 1.3 1.376 1.3s1.376-.611 1.376-1.3c.001-.688-.611-1.3-1.376-1.3zM10.023 15.171c-.612 0-1.147.536-1.147 1.148 0 .611.535 1.146 1.147 1.146s1.147-.535 1.147-1.146c.001-.612-.535-1.148-1.147-1.148zM17.823 12.953c-.611 0-1.147.535-1.147 1.147s.536 1.147 1.147 1.147c.612 0 1.148-.535 1.148-1.147s-.536-1.147-1.148-1.147z"></path><path-->
<!--                                        d="M23.177 3H4.824C2.683 3 1 4.833 1 7.167v13.665C1 23.167 2.683 25 4.824 25h18.353C25.318 25 27 23.167 27 20.833V7.167C27 4.833 25.318 3 23.177 3zm-3.442 13.624c-1.987.612-4.129-.154-5.046.764-.918.918 1.529 1.606 0 2.219-1.988.84-7.341-.535-8.182-4.053-.841-3.441 2.905-6.5 5.888-7.035 2.906-.535 6.041.841 8.181 2.982 2.065 2.141.765 4.74-.841 5.123z"></path></svg></span></span>-->
<!--                                      <div class="bilibili-player-block-filter-label">彩色</div>-->
<!--                                    </div>-->
<!--                                    <div class="bilibili-player-block-filter-type "-->
<!--                                         data-name="ctlbar_danmuku_special_on" ftype="special"><span-->
<!--                                        class="bilibili-player-block-filter-image"><span class="bp-svgicon"><svg-->
<!--                                        viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                        d="M23 3H5a4 4 0 00-4 4v14a4 4 0 004 4h18a4 4 0 004-4V7a4 4 0 00-4-4zM7.849 11.669l.447-.828.492.782.894.184-.536.736.134.966-.85-.321-.804.414.045-.967L7 11.946l.849-.277zm3.352 7.101l-1.43-.506L8.43 19v-1.565L7.357 16.33l1.43-.506.67-1.381.894 1.289 1.475.23-.894 1.289.269 1.519zm7.95-3.9l-2.816-.69-2.458 1.565-.223-2.946-2.145-1.933 2.637-1.151L15.263 7l1.877 2.255 2.86.23-1.52 2.531.671 2.854z"></path></svg></span></span>-->
<!--                                      <div class="bilibili-player-block-filter-label">高级</div>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </div>-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-flag">-->
<!--                                  <div-->
<!--                                      class="bilibili-player-video-danmaku-setting-left-flag-title bui bui-checkbox bui-dark">-->
<!--                                    <input aria-label="智能云屏蔽" checked="" class="bui-checkbox-input" type="checkbox">-->
<!--                                    <label class="bui-checkbox-label">-->
<!--                                      <span class="bui-checkbox-icon bui-checkbox-icon-default"><svg-->
<!--                                          height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                          d="M8 6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                      <span class="bui-checkbox-icon bui-checkbox-icon-selected"><svg-->
<!--                                          height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                          d="M13 18.25l-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                      <span class="bui-checkbox-name">智能云屏蔽</span>-->
<!--                                    </label></div>-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-flag-content">-->
<!--                                    <div class="bilibili-player-setting-flag bui bui-slider bui-dark">-->
<!--                                      <div class="bui-track" style="">-->
<!--                                        <div class="bui-bar-wrap">-->
<!--                                          <div class="bui-bar bui-bar-normal" role="progressbar"-->
<!--                                               style="transform: scaleX(0.001);"></div>-->
<!--                                        </div>-->
<!--                                        <div class="bui-step">-->
<!--                                          <div class="bui-step-item bui-step-item-0" style="left:0">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text"></div>-->
<!--                                          </div>-->
<!--                                          <div class="bui-step-item bui-step-item-100" style="left:100%">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text"></div>-->
<!--                                          </div>-->
<!--                                        </div>-->

<!--                                        <div class="bui-thumb" style="transform: translateX(0px);">-->
<!--                                          <div class="bui-thumb-tooltip">1级</div>-->
<!--                                          <div class="bui-thumb-dot" style=""></div>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </div>-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-preventshade">-->
<!--                                  <span-->
<!--                                      class="bilibili-player-video-danmaku-setting-left-preventshade-box bui bui-checkbox bui-dark player-tooltips-trigger"-->
<!--                                      data-change-mode="1" data-position="top-left" data-text="视频底部15%部分为空白保留区"-->
<!--                                      data-tooltip="2"><input aria-label="防挡字幕" class="bui-checkbox-input"-->
<!--                                                              type="checkbox">-->
<!--                                      <label class="bui-checkbox-label">-->
<!--                                          <span class="bui-checkbox-icon bui-checkbox-icon-default"><svg height="32"-->
<!--                                                                                                         viewBox="0 0 32 32"-->
<!--                                                                                                         width="32"-->
<!--                                                                                                         xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                              d="M8 6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                          <span class="bui-checkbox-icon bui-checkbox-icon-selected"><svg height="32"-->
<!--                                                                                                          viewBox="0 0 32 32"-->
<!--                                                                                                          width="32"-->
<!--                                                                                                          xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                              d="M13 18.25l-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                          <span class="bui-checkbox-name">防挡字幕</span>-->
<!--                                      </label>-->
<!--                                  </span>-->
<!--                                </div>-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-danmaku-mask"-->
<!--                                     style="display: none">-->
<!--                                  <span class="bilibili-player-video-danmaku-setting-left-danmaku-mask-box"></span>-->
<!--                                </div>-->
<!--                                <div-->
<!--                                    class="bilibili-player-video-danmaku-setting-left-danmaku-density bui bui-checkbox bui-dark">-->
<!--                                  <input aria-label="自动密度" class="bui-checkbox-input" type="checkbox">-->
<!--                                  <label class="bui-checkbox-label">-->
<!--                                    <span class="bui-checkbox-icon bui-checkbox-icon-default"><svg-->
<!--                                        height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                        d="M8 6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                    <span class="bui-checkbox-icon bui-checkbox-icon-selected"><svg-->
<!--                                        height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                        d="M13 18.25l-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                    <span class="bui-checkbox-name">自动密度</span>-->
<!--                                  </label></div>-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-block-word">-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-block-add">添加屏蔽词</div>-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-block-sync">同步屏蔽列表</div>-->
<!--                                </div>-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-opacity">-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-opacity-title">不透明度</div>-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-opacity-content">-->
<!--                                    <div class="bilibili-player-setting-opacity bui bui-slider bui-dark">-->
<!--                                      <div class="bui-track" style="">-->
<!--                                        <div class="bui-bar-wrap">-->
<!--                                          <div class="bui-bar bui-bar-normal" role="progressbar"-->
<!--                                               style="transform: scaleX(0.8);"></div>-->
<!--                                        </div>-->
<!--                                        <div class="bui-thumb" style="transform: translateX(150.4px);">-->
<!--                                          <div class="bui-thumb-tooltip">80%</div>-->
<!--                                          <div class="bui-thumb-dot" style=""></div>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </div>-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-area">-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-area-title">显示区域</div>-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-area-content">-->
<!--                                    <div class="bilibili-player-setting-area bui bui-slider bui-dark">-->
<!--                                      <div class="bui-track" style="">-->
<!--                                        <div class="bui-bar-wrap">-->
<!--                                        </div>-->
<!--                                        <div class="bui-step">-->
<!--                                          <div class="bui-step-item bui-step-item-0" style="left:0">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text">1/4屏</div>-->
<!--                                          </div>-->

<!--                                          <div class="bui-step-item" style="left:25%">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text">半屏</div>-->
<!--                                          </div>-->

<!--                                          <div class="bui-step-item" style="left:50%">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text">3/4屏</div>-->
<!--                                          </div>-->

<!--                                          <div class="bui-step-item" style="left:75%">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text">不重叠</div>-->
<!--                                          </div>-->

<!--                                          <div class="bui-step-item bui-step-item-100" style="left:100%">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text">不限</div>-->
<!--                                          </div>-->
<!--                                        </div>-->
<!--                                        <div class="bui-thumb" style="transform: translateX(141px);">-->
<!--                                          <div class="bui-thumb-dot" style=""></div>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </div>-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-speedplus">-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-speedplus-title">弹幕速度</div>-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-speedplus-content">-->
<!--                                    <div class="bilibili-player-setting-speedplus bui bui-slider bui-dark">-->
<!--                                      <div class="bui-track" style="">-->
<!--                                        <div class="bui-bar-wrap">-->
<!--                                          <div class="bui-bar bui-bar-normal" role="progressbar"-->
<!--                                               style="transform: scaleX(0.5);"></div>-->
<!--                                        </div>-->
<!--                                        <div class="bui-step">-->
<!--                                          <div class="bui-step-item bui-step-item-0" style="left:0">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text">慢</div>-->
<!--                                          </div>-->

<!--                                          <div class="bui-step-item bui-step-item-100" style="left:100%">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text">快</div>-->
<!--                                          </div>-->

<!--                                        </div>-->

<!--                                        <div class="bui-thumb" style="transform: translateX(94px);">-->
<!--                                          <div class="bui-thumb-tooltip">100%</div>-->
<!--                                          <div class="bui-thumb-dot" style=""></div>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </div>-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-fontsize">-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-fontsize-title">字体大小</div>-->
<!--                                  <div class="bilibili-player-video-danmaku-setting-left-fontsize-content">-->
<!--                                    <div class="bilibili-player-setting-fontsize bui bui-slider bui-dark">-->
<!--                                      <div class="bui-track" style="">-->
<!--                                        <div class="bui-bar-wrap">-->
<!--                                          <div class="bui-bar bui-bar-normal" role="progressbar"-->
<!--                                               style="transform: scaleX(0.08);"></div>-->
<!--                                        </div>-->

<!--                                        <div class="bui-step">-->
<!--                                          <div class="bui-step-item bui-step-item-0" style="left:0">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text">小</div>-->
<!--                                          </div>-->

<!--                                          <div class="bui-step-item bui-step-item-100" style="left:100%">-->
<!--                                            <div class="bui-step-dot"></div>-->
<!--                                            <div class="bui-step-text">大</div>-->
<!--                                          </div>-->
<!--                                        </div>-->

<!--                                        <div class="bui-thumb" style="transform: translateX(15.04px);">-->
<!--                                          <div class="bui-thumb-tooltip">50%</div>-->
<!--                                          <div class="bui-thumb-dot" style=""></div>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </div>-->
<!--                                <div class="bilibili-player-video-danmaku-setting-left-more">-->
<!--                                  <span class="bilibili-player-video-danmaku-setting-left-more-text">更多弹幕设置</span>-->
<!--                                  <span class="bp-svgicon">-->
<!--                                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
<!--                                    <path-->
<!--                                        d="M9.188 7.999l-3.359 3.359a.75.75 0 101.061 1.061l3.889-3.889a.75.75 0 000-1.061L6.89 3.58a.75.75 0 10-1.061 1.061l3.359 3.358z"></path>-->
<!--                                  </svg>-->
<!--                                  </span>-->
<!--                                  <div class="bui-panel-item" style="width: 266px; height: 300px;">-->
<!--                                    <div class="bilibili-player-video-danmaku-setting-right">-->
<!--                                      <div class="bilibili-player-video-danmaku-setting-right-more"><span-->
<!--                                          class="bp-svgicon"><svg-->
<!--                                          viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                          d="M6.811 8.001l3.359-3.359a.75.75 0 10-1.061-1.061L5.22 7.471a.75.75 0 000 1.061l3.889 3.888a.75.75 0 101.061-1.061L6.811 8.001z"></path></svg></span><span-->
<!--                                          class="bilibili-player-video-danmaku-setting-right-more-text">更多弹幕设置</span>-->
<!--                                      </div>-->
<!--                                      <div class="bilibili-player-video-danmaku-setting-right-separator"></div>-->
<!--                                      <div class="bilibili-player-video-danmaku-setting-right-fullscreensync">-->
<!--                                <span-->
<!--                                    class="bilibili-player-video-danmaku-setting-right-fullscreensync-box bui bui-checkbox bui-dark"><input-->
<!--                                    aria-label="弹幕大小跟随屏幕等比缩放" class="bui-checkbox-input" type="checkbox">-->
<!--                                    <label class="bui-checkbox-label">-->
<!--                                        <span class="bui-checkbox-icon bui-checkbox-icon-default"><svg height="32"-->
<!--                                                                                                       viewBox="0 0 32 32"-->
<!--                                                                                                       width="32"-->
<!--                                                                                                       xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                            d="M8 6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                        <span class="bui-checkbox-icon bui-checkbox-icon-selected"><svg height="32"-->
<!--                                                                                                        viewBox="0 0 32 32"-->
<!--                                                                                                        width="32"-->
<!--                                                                                                        xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                            d="M13 18.25l-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                        <span class="bui-checkbox-name">弹幕大小跟随屏幕等比缩放</span>-->
<!--                                    </label>-->
<!--                                </span>-->
<!--                                      </div>-->
<!--                                      <div class="bilibili-player-video-danmaku-setting-right-speedsync">-->
<!--                                <span-->
<!--                                    class="bilibili-player-video-danmaku-setting-right-speedsync-box bui bui-checkbox bui-dark"><input-->
<!--                                    aria-label="弹幕速度同步播放倍数" class="bui-checkbox-input" type="checkbox">-->
<!--                                  <label class="bui-checkbox-label">-->
<!--                                      <span class="bui-checkbox-icon bui-checkbox-icon-default">-->
<!--                                        <svg height="32" viewBox="0 0 32 32" width="32"-->
<!--                                             xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                            d="M8 6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                      <span class="bui-checkbox-icon bui-checkbox-icon-selected"><svg height="32"-->
<!--                                                                                                      viewBox="0 0 32 32"-->
<!--                                                                                                      width="32"-->
<!--                                                                                                      xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                          d="M13 18.25l-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                      <span class="bui-checkbox-name">弹幕速度同步播放倍数</span>-->
<!--                                  </label>-->
<!--                                </span>-->
<!--                                      </div>-->
<!--                                      <div class="bilibili-player-video-danmaku-setting-right-font">-->
<!--                                        <div class="bilibili-player-video-danmaku-setting-right-font-title">弹幕字体</div>-->
<!--                                        <div class="bilibili-player-video-danmaku-setting-right-font-content">-->
<!--                                          <div-->
<!--                                              class="bilibili-player-video-danmaku-setting-right-font-content-fontfamily bui bui-select bui-dark">-->
<!--                                            <div class="bui-select-wrap">-->
<!--                                              <div class="bui-select-border">-->
<!--                                                <div class="bui-select-header">-->
<!--                                                  <span class="bui-select-result">黑体</span>-->
<!--                                                  <span class="bui-select-arrow">-->
<!--                                            <span class="bui-select-arrow-down"></span>-->
<!--                                          </span>-->
<!--                                                </div>-->
<!--                                                <div class="bui-select-list-wrap" style="">-->
<!--                                                  <ul class="bui-select-list" style="border: medium none;">-->
<!--                                                    <li class="bui-select-item bui-select-item-active"-->
<!--                                                        data-value="SimHei, 'Microsoft JhengHei'">黑体-->
<!--                                                    </li>-->
<!--                                                    <li class="bui-select-item" data-value="SimSun">宋体-->
<!--                                                    </li>-->
<!--                                                    <li class="bui-select-item" data-value="NSimSun">新宋体-->
<!--                                                    </li>-->
<!--                                                    <li class="bui-select-item" data-value="FangSong">仿宋-->
<!--                                                    </li>-->
<!--                                                    <li class="bui-select-item" data-value="'Microsoft YaHei'">微软雅黑-->
<!--                                                    </li>-->
<!--                                                    <li class="bui-select-item" data-value="'Microsoft Yahei UI Light'">-->
<!--                                                      微软雅黑 Light-->
<!--                                                    </li>-->
<!--                                                    <li class="bui-select-item"-->
<!--                                                        data-value="'Noto Sans CJK SC DemiLight'">Noto Sans DemiLight-->
<!--                                                    </li>-->
<!--                                                    <li class="bui-select-item" data-value="'Noto Sans CJK SC Regular'">-->
<!--                                                      Noto Sans Regular-->
<!--                                                    </li>-->
<!--                                                  </ul>-->
<!--                                                </div>-->
<!--                                              </div>-->
<!--                                            </div>-->
<!--                                          </div>-->
<!--                                        </div>-->
<!--                                        <div class="bilibili-player-video-danmaku-setting-right-font-bold">-->
<!--                                          <span-->
<!--                                              class="bilibili-player-video-danmaku-setting-right-font-bold-box bui bui-checkbox bui-dark">-->
<!--                                            <input aria-label="粗体" class="bui-checkbox-input" type="checkbox">-->
<!--                                            <label class="bui-checkbox-label">-->
<!--                                                <span class="bui-checkbox-icon bui-checkbox-icon-default"><svg-->
<!--                                                    height="32" viewBox="0 0 32 32"-->
<!--                                                    width="32" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                                    d="M8 6a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                                <span class="bui-checkbox-icon bui-checkbox-icon-selected"><svg-->
<!--                                                    height="32" viewBox="0 0 32 32"-->
<!--                                                    width="32" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                                                    d="M13 18.25l-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z"></path></svg></span>-->
<!--                                                <span class="bui-checkbox-name">粗体</span>-->
<!--                                            </label>-->
<!--                                          </span>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                      <div class="bilibili-player-video-danmaku-setting-right-fontborder">-->
<!--                                        <div class="bilibili-player-video-danmaku-setting-right-fontborder-title">描边类型-->
<!--                                        </div>-->
<!--                                        <div-->
<!--                                            class="bilibili-player-video-danmaku-setting-right-fontborder-content bui bui-radio bui-dark">-->
<!--                                          <div class="bui-radio-wrap bui-radio-button">-->
<!--                                            <div class="bui-radio-group" style="margin: 0 -4px;">-->

<!--                                              <label class="bui-radio-item" style="margin: 0 4px;">-->
<!--                                                <input class="bui-radio-input" name="bui-radio3" type="radio" value="0">-->
<!--                                                <span class="bui-radio-label">-->
<!--                                                    <span class="bui-radio-text">重墨</span>-->
<!--                                                </span>-->
<!--                                              </label>-->

<!--                                              <label class="bui-radio-item" style="margin: 0 4px;">-->
<!--                                                <input class="bui-radio-input" name="bui-radio3" type="radio" value="1">-->
<!--                                                <span class="bui-radio-label">-->
<!--                                                    <span class="bui-radio-text">描边</span>-->
<!--                                                </span>-->
<!--                                              </label>-->

<!--                                              <label class="bui-radio-item" style="margin: 0 4px;">-->
<!--                                                <input class="bui-radio-input" name="bui-radio3" type="radio" value="2">-->
<!--                                                <span class="bui-radio-label">-->
<!--                                                    <span class="bui-radio-text">45°投影</span>-->
<!--                                                </span>-->
<!--                                              </label>-->

<!--                                            </div>-->
<!--                                          </div>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                      <div class="bilibili-player-video-danmaku-setting-right-type">-->
<!--                                        <div class="bilibili-player-video-danmaku-setting-right-type-title">渲染类型</div>-->
<!--                                        <div-->
<!--                                            class="bilibili-player-video-danmaku-setting-right-type-content bui bui-select bui-dark">-->
<!--                                          <div class="bui-select-wrap">-->
<!--                                            <div class="bui-select-border">-->
<!--                                              <div class="bui-select-header">-->
<!--                                                <span class="bui-select-result">CSS3</span>-->
<!--                                                <span class="bui-select-arrow">-->
<!--                                                  <span class="bui-select-arrow-down"></span>-->
<!--                                                </span>-->
<!--                                              </div>-->
<!--                                              <div class="bui-select-list-wrap" style="">-->
<!--                                                <ul class="bui-select-list" style="border: medium none;">-->
<!--                                                  <li class="bui-select-item bui-select-item-active" data-value="div">-->
<!--                                                    CSS3-->
<!--                                                  </li>-->

<!--                                                  <li class="bui-select-item" data-value="canvas">Canvas-->
<!--                                                  </li>-->
<!--                                                </ul>-->
<!--                                              </div>-->
<!--                                            </div>-->
<!--                                          </div>-->
<!--                                        </div>-->
<!--                                      </div>-->
<!--                                      <div class="bilibili-player-video-danmaku-setting-right-separator"></div>-->
<!--                                      <div-->
<!--                                          class="bilibili-player-video-danmaku-setting-right-reset bui bui-button bui-button-transparent"-->
<!--                                          role="button" tabindex="0">恢复默认设置-->
<!--                                      </div>-->
<!--                                    </div>-->
<!--                                  </div>-->
<!--                                </div>-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="bilibili-player-video-inputbar focus">-->
<!--                    <div class="bilibili-player-video-inputbar-wrap">-->
<!--                      <div class="bilibili-player-video-btn bilibili-player-video-btn-danmaku" style="display: block;">-->
<!--                        <span class="bilibili-player-iconfont bilibili-player-iconfont-danmakutype"><span-->
<!--                            class="bp-svgicon"><svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                            d="M17 16H5c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM6.96 15c.39 0 .74-.24.89-.6l.65-1.6h5l.66 1.6c.15.36.5.6.89.6.69 0 1.15-.71.88-1.34l-3.88-8.97C11.87 4.27 11.46 4 11 4s-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34zM11 5.98L12.87 11H9.13L11 5.98z"></path></svg></span></span>-->
<!--                      </div>-->
<!--                      <div class="bilibili-player-video-danmaku-wrap" style="display: none;">发个友善的弹幕见证当下</div>-->
<!--                      <input class="bilibili-player-video-danmaku-input" placeholder="发个友善的弹幕见证当下" style="">-->
<!--                      <div class="bilibili-player-video-hint" style="display: block;"><a-->
<!--                          href="//www.bilibili.com/blackboard/help.html#弹幕相关" target="_blank"><span>弹幕礼仪 </span><span-->
<!--                          class="bp-svgicon"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path-->
<!--                          d="M9.188 7.999l-3.359 3.359a.75.75 0 101.061 1.061l3.889-3.889a.75.75 0 000-1.061L6.89 3.58a.75.75 0 10-1.061 1.061l3.359 3.358z"></path></svg></span></a>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <button class="bilibili-player-video-btn-send bui bui-button bui-button-blue" role="button"-->
<!--                            tabindex="0">发送-->
<!--                    </button>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </div>
          <div class="bilibili-player-filter-wrap bilibili-player-bas-danmaku"></div>
        </div>
      </div>
      <div id="player_placeholder"></div>
    </div>
  </div>
</template>

<script>

import BilibiliPlayerVideoStateBuffIcon from "./bilibili-player-video-state-buff-icon";
export default {
  name: "Player",
  components: {BilibiliPlayerVideoStateBuffIcon},
  props:["video"],
  data: function () {
    return {
      video_control_show: false,
      // 视频状态 0暂停 1播放 2缓冲 3初始化
      video_state: 0,
      video_duration:0,
      currentTime:0,
    };
  },
  methods: {
    format_time(second_num){

      let minute = Math.floor(second_num/60)
      let second = Math.round(second_num%60)
      return (String(minute).length>1?minute:"0"+String(minute))+":"+(String(second).length>1?second:"0"+String(second))
    }
  },
  watch:{
    video_state(){
      if (this.video_state===1){
        this.$refs.video.play()
      }else if(this.video_state===0){
        this.$refs.video.pause()
      }
    }
  },
  mounted() {
    if (this.$refs.video.readyState===0){
      this.video_state=3
    }
    let readyStateInterval = setInterval(()=>{
      if (this.$refs.video.readyState===4){
        this.video_state=0
        clearInterval(readyStateInterval)
        this.video_duration = this.$refs.video.duration
        setInterval(()=>{
          if (this.video_state===1){
            this.currentTime = this.$refs.video.currentTime
          }
        },500)
      }
    },500)
  }
}
</script>

<style src="@/assets/style/video/stardust-video.css"></style>
<style src="@/assets/style/video/video_main.css"></style>
<style src="@/assets/style/video/video_pbp.css"></style>
<style src="@/assets/style/video/video_1.css"></style>
<style src="@/assets/style/video/video_2.css"></style>
<style src="@/assets/style/video/video_3.css"></style>
<style src="@/assets/style/video/video_4.css"></style>
<style src="@/assets/style/video/video_5.css"></style>
<style src="@/assets/style/video/video_6.css"></style>
<style src="@/assets/style/video/video_7.css"></style>
<style src="@/assets/style/video/video_8.css"></style>
<style src="@/assets/style/video/video_9.css"></style>
<style src="@/assets/style/video/video_10.css"></style>
<style>
.st0 {
  fill: #fff
}
</style>