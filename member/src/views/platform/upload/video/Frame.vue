<!--投稿>视频投稿-->
<template>
  <div class="upload-wrap cc-content-body">
    <div class="videoUpload_wrap">
      <div class="iframe-comp-container">
        <div id="app" class="canary-container">
          <div class="notify-v2-container"></div>
          <div class="upload-v2-container">
            <div class="upload-v2-step1-container">
              <div id="homeDrop">
                <svg width="830" height="284" viewBox="-1 -1 832 286" preserveAspectRatio="none">
                  <path d="M0 6
                A 6 6, 0, 0, 1, 6, 0
                H 824
                A 6 6, 0, 0, 1, 830, 6
                V 278
                A 6 6, 0, 0, 1, 824, 284
                H 6
                A 6 6, 0, 0, 1, 0, 278
                Z">
                  </path>
                </svg>
                <i class="iconfont icon-android_uploadx"></i>
                <div class="upload-hint">拖拽视频到此处也可上传</div>
                <div class="upload-btn">
                  <div id="bili-upload-btn"></div>
                  <div class="upload-btn-title">上传视频</div>
                </div>
                <div class="video-jam">
                  <p class="video-jam-pretext">当前审核队列</p>
                  <p class="video-jam-state" style="background-color: rgb(69, 129, 142);">快速</p>
                  <p class="video-jam-comment">预计稿件过审时间小于10分钟（活动投稿除外）</p>
                </div>
              </div>
              <div class="upload-agreement">
                <div class="reg-1">
                  <div>
                    <a href="https://www.bilibili.com/blackboard/blackroom.html" target="_blank" class="reg-2-forbidden">禁止发布的视频内容</a>
                  </div>
                  <div style="position: relative;">
                    <a href="javascript:void(0);">视频大小</a>
                    <span class="tip_new" style="display: none;">new</span>
                  </div>
                  <div style="position: relative;">
                    <a href="javascript:void(0);">视频格式</a>
                    <span class="tip_new" style="display: none;">new</span>
                  </div>
                  <div style="position: relative;">
                    <a href="javascript:void(0);">视频码率</a>
                    <span class="tip_new">new</span>
                  </div>
                </div>
                <div class="reg-2">
                  上传视频，即表示您已同意
                  <a href="https://passport.bilibili.com/register/licence" target="_blank">
                    哔哩哔哩使用协议
                  </a>
                  与
                  <a href="https://member.bilibili.com/studio/creative-treaty" target="_blank">
                    哔哩哔哩创作公约
                  </a>
                  ，请勿上传色情，反动等违法视频。
                </div>
              </div>
            </div>
            <div class="upload-v2-step2-container" style="display: none;"><!---->
              <div class="file-list-v2-container">
                <div class="file-title"><h1 >文件上传</h1>
                  <p class="info">（推荐采用mp4、flv格式，可有效缩短审核转码耗时）</p>
                  <p class="remain-upload">(0/1)</p>
                </div>
                <div class="file-list-v2-wrp">
                  <div></div>
                </div>
                <div class="file-add-btn-group">
                  <div class="file-add-btn">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAPhJREFUSA3tVm0KwjAMXf1A2BFkehvv4gU8xfyxn97F66h4ABFEZn0ZKdTClqZD2I8GQrMmL699Y2FFMXWz1i7hR3hN8d/PC5It/M2+0RIutADUG/iLcTMtXg3QEoT1mTBUZPRzlnS0hGGDFElbr4kfe9v9YffhY2rMUbKG00ctWYUCV0dTJ+bQFpibMabtgADV2Nh7jRD2GmFKzj6xUjPJqOYEwkPM6aRmqry7oVbSM7PssF4iGOmGV9zwE1H7WwL5K/iDnd6nylIkJTWc+bHbG1xTCAcbSslMKCmkzmdJ1ZJJgJS/NpoWK26snhwphHeQNUxI8bTtC6n0ShyL6cu0AAAAAElFTkSuQmCC" alt="icon_add" class="file-add-btn-img">
                    <span class="file-add-btn-title">添加视频</span>
                    <div id="bili-upload-btn-more"></div>
                  </div>
                </div>
                <div class="dividing-line"></div>
              </div>
              <div class="file-content-v2-container">
                <div class="normal-v2-container">
                  <div class="normal-title-wrp">
                    <h1 >基本信息</h1>
                    <div class="template-op">
                      <p >使用投稿模版</p>
                      <div class="template-op-divide"></div>
                      <img src="data:image/png;base64,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" alt="ic_setting">
                    </div>
                  </div>
                  <div class="cover-v2-container">
                    <div class="section-title-v2-container">
                      <h3 class="section-title-v2-content-main">视频封面设置</h3>
                      <p class="section-title-v2-content-sub">
                        （格式jpeg、png，文件大小≤5MB，建议尺寸≥1146*717，最低尺寸≥960*600）
                      </p>
                    </div>
                    <div class="cover-v2-detail-wrp">
                      <div class="cover-v2-preview">
                        <div class="cover-v2-preview-default">
                          <img src="data:image/png;base64,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" alt="bili_tv" class="bili_tv">
                          <div class="cover-v2-upload-tip">
                            <span >上传封面</span>
                          </div>
                        </div>
                        <input type="file" accept="image/jpeg, image/jpg, image/png"></div>
                      <div class="cover-v2-selector">
                        <div class="cover-v2-selector-deg"></div>
                        <p class="cover-v2-selector-title">正在生成可选封面，系统会默认选中第一张作为视频封面。</p>
                        <div class="cover-v2-cover-context">
                          <img src="">
                        </div>
                        <div class="cover-v2-selector-items">
                          <div class="selector-item" style="background: url(&quot;&quot;) center center / contain no-repeat rgb(219, 219, 219);">
                            <img src="data:image/png;base64,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" alt="loading..." class="cover-v2-loading">
                          </div>
                          <div class="selector-item" style="background: url(&quot;&quot;) center center / contain no-repeat rgb(219, 219, 219);">
                            <img src="data:image/png;base64,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" alt="loading..." class="cover-v2-loading">
                          </div>
                          <div class="selector-item" style="background: url(&quot;&quot;) center center / contain no-repeat rgb(219, 219, 219);">
                            <img src="data:image/png;base64,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" alt="loading..." class="cover-v2-loading">
                          </div>
                          <div class="selector-item" style="background: url(&quot;&quot;) center center / contain no-repeat rgb(219, 219, 219);">
                            <img src="data:image/png;base64,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" alt="loading..." class="cover-v2-loading">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ui-v2-normal-line-white-divide"></div>
                  <div class="copyright-v2-container">
                    <div class="section-title-v2-container">
                      <p class="section-title-v2-deg">*</p>
                      <h3 class="section-title-v2-content-main">类型</h3>
                    </div>
                    <div class="copyright-v2-check-radio-wrp">
                      <div class="check-radio-v2-container">
                        <span class="check-radio-v2-box check-radio-v2-box-checked"></span>
                        <span class="check-radio-v2-name">自制</span>
                      </div>
                      <div class="check-radio-v2-container">
                        <span class="check-radio-v2-box"></span>
                        <span class="check-radio-v2-name">转载</span>
                      </div>
                    </div>
                  </div>
                  <div class="ui-v2-normal-line-white-divide"></div>
                  <div class="content-title-v2-container">
                    <div class="section-title-v2-container">
                      <p class="section-title-v2-deg">*</p>
                      <h3 class="section-title-v2-content-main">标题</h3>
                    </div>
                    <div class="content-title-v2-input-wrp">
                      <div class="input-box-v2-1-container">
                        <div class="input-box-v2-1-instance">
                          <input type="text" maxlength="80" placeholder="请输入稿件标题" class="input-box-v2-1-val">
                        </div>
                        <p class="input-box-v2-1-max-tip">0/80</p>
                      </div>
                    </div>
                  </div>
                  <div class="ui-v2-normal-line-white-divide"></div>
                  <div id="type-list-v2-container" class="type-list-v2-container">
                    <div class="section-title-v2-container">
                      <p class="section-title-v2-deg">*</p>
                      <h3 class="section-title-v2-content-main">分区</h3>
                    </div>
                    <div class="type-list-v2-selector-wrp">
                      <div class="select-box-v2-container">
                        <div class="select-box-v2-controller">
                          <p class="select-item-cont">点击选择</p>
                          <i class="selebox-box-v2-drop-icon iconfont icon-ic_collapse" style="transform: rotate(180deg) translateZ(0px);"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ui-v2-normal-line-white-divide"></div>
                  <div id="content-tag-v2-container" class="content-tag-v2-container">
                    <div class="section-title-v2-container">
                      <p class="section-title-v2-deg">*</p>
                      <h3 class="section-title-v2-content-main">标签</h3>
                      <p class="section-title-v2-content-sub">（使用活动标签即可参与活动）</p>
                    </div>
                    <div class="content-tag-v2-input-wrp">
                      <div class="input-box-v2-1-container">
                        <div class="content-tag-v2-pre-wrp"></div>
                        <div class="input-box-v2-1-instance">
                          <input type="text" maxlength="20" placeholder="按回车键Enter创建标签" class="input-box-v2-1-val">
                        </div>
                        <p class="content-tag-v2-last-wrp">还可以添加10个标签</p>
                      </div>
                    </div>
                    <div class="content-tag-v2-other-wrp">
                      <p class="content-tag-v2-other-label">推荐标签：</p>
                      <div class="empty-retry-wrp">
                        <span>推荐标签获取失败</span>
                        <a>点击刷新</a>
                      </div>
                    </div>
                    <div class="content-tag-v2-other-wrp">
                      <p class="content-tag-v2-other-label">参与活动：</p>
                      <p class="content-tag-v2-other-tag-error-wrp">
                        活动标签可在
                        <span style="font-weight: 700;">选择分区</span>
                        后查看
                      </p>
                    </div>
                  </div>
                  <div class="ui-v2-normal-line-white-divide"></div>
                  <div class="content-desc-v2-container">
                    <div class="section-title-v2-container">
                      <h3 class="section-title-v2-content-main">简介</h3>
                    </div>
                    <div class="content-desc-v2-text-wrp">
                      <div class="text-area-box-v2-container">
                        <textarea class="text-area-box-v2-val placeholder-style"></textarea>
                        <p class="text-area-box-v2-max-tip">0/250</p>
                      </div>
                    </div>
                  </div>
                  <div class="dividing-line"></div>
                </div>
                <div class="more-selector-v2-container">
                  <div id="more-selector-v2" class="more-selector-v2-title-wrp">
                    <h1>更多选项</h1>
                    <i class="more-selector-v2-drop iconfont icon-ic_collapse" style="transform: rotate(180deg) translateZ(0px);"></i>
                    <p class="more-selector-v2-drop-tip">（自制声明、商业声明、字幕设置、水印和充电开关）</p>
                  </div>
                  <div class="dividing-line"></div>
                </div>
                <div class="fans-dynamic-v2-container">
                  <div class="fans-dynamic-v2-title-wrp">
                    <h1 >粉丝动态</h1>
                  </div>
                  <div class="fans-dynamic-v2-input-wrp">
                    <div class="text-area-box-v2-container">
                      <textarea maxlength="233" class="text-area-box-v2-val placeholder-style"></textarea>
                      <p class="text-area-box-v2-max-tip">0/233</p>
                    </div>
                  </div>
                </div>
                <div class="d-time-v2-container">
                  <div class="d-time-v2-switch-wrp">
                    <p class="d-time-v2-pre">定时发布</p>
                    <div class="check-radio-v2-2-container">
                      <span class="check-radio-v2-2-roll"></span>
                    </div>
                    <p class="d-time-v2-last">
                      <span>（当前+4小时 ≤ 可选时间 ≤ 当前+15天，转载稿件撞车判定以过审发布时间为准</span>
                      <span style="display: none;">，</span>
                      <span style="color: rgb(242, 98, 145); display: none;">合作稿件默认定时为当前+4小时，可以进行调整</span>
                      <span>）</span>
                    </p>
                  </div>
                </div>
                <div class="submit-button-group-v2-container">
                  <span class="submit-btn-group-add">立即投稿</span>
                  <span class="submit-btn-group-tpl">保存模版</span>
                </div>
              </div>
              <div class="auto-complete-container-v2" style="display: none;">
                <div class="auto-complete-body">
                  <img src="//s3.hdslb.com/bfs/static/studio-upload-v3/static/img/wait-upload.928ac8e.png" alt="wait-upload">
                  <p>等待视频上传完后会自动提交&nbsp;<a >取消自动提交&nbsp;</a></p>
                </div>
              </div>
            </div>
            <div class="upload-step-3-container-v2" style="display: none;">
              <div class="step-controller-v2-container">
                <div class="step-ctrl-item">
                  <span class="step-ctrl-complete-icon iconfont icon-duihao"></span>
                  <span class="step-ctrl-complete-content">填写投稿信息</span>
                </div>
                <div class="step-ctrl-line step-ctrl-line-active"></div>
                <div class="step-ctrl-item">
                  <span class="step-ctrl-active-icon">2</span>
                  <span class="step-ctrl-active-content">投稿审核中</span>
                </div>
                <div class="step-ctrl-line step-ctrl-line-wait"></div>
                <div class="step-ctrl-item">
                  <span class="step-ctrl-wait-icon">3</span>
                  <span class="step-ctrl-wait-content">完成</span>
                </div>
              </div>
              <div class="upload-3-v2-success-image">
                <img src="//s3.hdslb.com/bfs/static/studio-upload-v3/static/img/success-2233.0a1bf03.png" alt="upload_success_2">
              </div>
              <h3 class="upload-3-v2-success-hint-1">稿件投递成功</h3>
              <div class="upload-3-v2-success-split"></div>
              <div class="upload-3-v2-success-go-url">
                <a href="https://member.bilibili.com/video/upload.html" target="_self" class="">再投一个</a>
              </div>
              <p class="upload-3-v2-success-hint-2">若稿件没有立刻显示在列表中，请稍候片刻</p>
              <p class="upload-3-v2-success-hint-3">稿件名称:</p>
              <div class="upload-3-v2-follow">
                <p class="upload-3-v2-follow-title">想要了解更多创作资讯，关注我们的官方账号吧～</p>
                <div class="upload-3-v2-follow-account">
                  <a href="https://space.bilibili.com/37090048/#/" target="_blank">
                    <div class="upload-3-v2-follow-avatar">
                      <img alt="官方账号头像" src="//i1.hdslb.com/bfs/face/01365904ffb64d1858da7e20e1040b9f2d94165d.jpg" class="upload-3-v2-follow-avatar-pic">
                      <img alt="闪电标志" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAABXdJREFUWAmdV1tonUUQ/lJikhpNay9yUhJssRdUTNVijW8KxUhbKlgffCjUPmgxiCJUGy/xIRWsIEiFJt7AKz7pQ2sLKoH4UnKMV9S2NLa0wZDE1qY2ib0pHr9v/509m//8J8c6MP/uzs7Mzs7Mzu4PeCgUCpPqVumztr9QWFoPHPsTmGUzu24GCsaxjhwabF3Mj4DD3cQ29avZKazLq4t2doH7vxKpCFXqeg7sb3WcTkeLJj4dLRQkceqCRm4dp3P3vjG095wAFtUBn6wGTIOYZlHJ3tZrElUjF7zKqHE709hURnOoIoQxGWqIR4h9gchOtQYm/fAPQGMdlvvxMBU0y1dT+fHEMNkw8VcwsolzORlZv2NQeuD2/Qs9LPA7GRWDA3OK2lytURkO60riwGngsR+BsYvFCbm2i0yd5hwTkKawTTIpgmnIGXNoyVFLnEpzpsZaMYDzpARJoRMAucR2Hbh8ZzZ39DFj6SFPE+/UHmpI4LaCa/w8cN1soHtlKf2ehcAT1zu2CUXqJ3UVJYNrac87t9oIWDUn6f/GZYZp5xengoIGuXlE0wxxgJNklFe3H0xIXTcAJhyYfMd8oEOCBwaA8/8UWRSKJ2nfoI++zbx/GzBfGwd6QjrSF7+S0CTqrmOJmeobyNR3i4IiN9KJYzYfWirKEc8Ss6A7MM7UoWQbsY84SdQZ0blPjK4g2EXGmUBJFqW6L0ZSyongg98ZhdeOAwcngHlc9z4m7XpiBC3cvwu/RaGfk/R5aSQiIXQuJ9O8QKmjkos60dLthNcz9nEYxfoePW+gFFeqe+DhTI7lEXUUOpcMGnj4aFXx3BotOif1XLxG4W3QpNIzhg+48pwrWPRKIw0WSoNXpaAEdA7kPIEKlc6CnQfR9hQVrHFlT0SDnTcCOkwGz9JxAkVm8/dJf/xS0vLbWKKg41CYDNX/DAVMWLM3uU07vm/DFkKnKO96k38Dm76bTnx8SRjvlFyPhjooMcynA89R+MFvYiqgqrTAb5F58LklkovgnlHgzaHpAvFIzPtcxjjqDip4wRQomSgOnOZ+H6LJUVlw3FEZ09jdK27CPspI4n+BfpPJbKmhu4wW1QhZenkgIa+0XJHJWk+8MuTyF5R5EiRm3WYk/y+QrkxjXBDNJ57pa45dbTa6Avshq1Uvz2s6uMZjrfJyDe+tTc2h8NuU2mHi7cyecBiDAVy8i5Od4jJQWr41VFplbL5SK+WPLAY2lO7dpbDknQFcXJfFoyIItOOtvGjTtTGZLX6XXAm8xNpxNQvCFqb+ScplgQ7fG7eUeKSHnmjX06CNQp+ZoIrOFhadmVzdzCeDitZcnnZB/zjw4mDSL/dVaFQlrQp4vntF74iFdBeVW1wvN90Qr68sLi7ZqLzGqqb1pVO6U9AhD0ySeJVNbBzgMytlwQLW9pe541ydcVVuD1HrU/5pY9x13K5e2hFMqZyPEH3VTy4SXSIxKMZvMxkFdu3VUtnTyxJa/NVdsZ1XQlqHeOySivhHZEAvMRigJ0DPiYiF3ePnEoypGxvjEXCWz/NnuPDQ+en0eCTdKei196lu5AabzHqb2Zy1ygWFZopXznOHgaOpB6DxWZu6DESeIC6s5lG4xDxYwcFRYj3RPX7v4A+QMttcLrqBHs7K3m0/A4enjJrd6pw/T/9G7yExytwVWtvVAVFoBHMcXxJbiQH0DnqFplWqCUHAd3T2ty0tWVizeeJdXJwHPnoaaiCgIS1s9hObNI5BNSJ/Bhj4g5cvE9UeJ0ouPfBXz+WC9FzqrJuKYXbWcmH3pDRi2VYeIeqxW+mviSxlQbLSIe9mQghB5mxEpBLuE3cTNxBZFbDIIxt3lEfY8hxgL7FP8WVbEf4FEnCVulNNf2wAAAAASUVORK5CYII=" class="upload-3-v2-follow-avatar-cert">
                    </div>
                    <span class="upload-3-v2-follow-name">哔哩哔哩创作中心</span>
                  </a>
                </div>
                <div class="upload-3-v2-follow-btn follow">
                  <i class="iconfont icon-ic_add"></i>
                  <span>关注</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "frame",
  components: {

  }
}
</script>

<style>
@import "../../../../assets/css/fram/one.css";
</style>