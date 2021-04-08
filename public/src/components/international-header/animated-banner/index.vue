<template>
  <div class="animated-banner" ref="container">
  </div>
</template>
<script>
import bezier from './cubicBezier.js'
import axios from 'axios'

const CURRENT_VERSION = '1'

export default {
  props: {
    config: {
      required: true
    }
  },
  data() {
    return {
      entered: false,
      visible: false,
    }
  },
  watch: {
    entered(v) {
      this.extensions?.map(ex => ex.handleHoverChange?.(v))
    },
  },
  async mounted () {
    // 只有在启用了动画banner的配置，且浏览器支持css filter时才加载动画banner的图片资源
    this.animatedBannerSupport =
      typeof CSS !== 'undefined' && CSS.supports && CSS.supports('filter: blur(1px)')
      && !/^((?!chrome|android).)*safari/i.test(navigator.userAgent) // safari浏览器在mac屏幕上模糊效果有性能问题，不开启

    if (!this.animatedBannerSupport) {
      return
    }

    if (this.config.version !== CURRENT_VERSION) {
      this.layerConfig = this.compatOldConfig(this.config).layers
    } else {
      this.layerConfig = this.config.layers
    }

    // 等待页面加载完成
    if (document.readyState !== 'complete') {
      await new Promise(r => window.addEventListener('load', r))
    }

    try {
      // 加载所有图片资源
      await Promise.all(this.layerConfig.map(async v => {
        return Promise.all(v.resources.map(async (i, index) => {
          if (/\.(webm|mp4)$/.test(i.src)) {
            const res = await axios.get(i.src,  { responseType: 'blob' })
            const url = URL.createObjectURL(res.data)
            const video = document.createElement('video')
            video.muted = true
            // video.autoplay = true
            video.loop = true
            video.src = url
            video.playsinline = true
            video.style.objectFit = 'cover' // 元素尺寸大于视频实际尺寸时放大
            v.resources[index].el = video

            // 视频需要添加到dom树才能获取宽高
            video.width = 0
            video.height = 0
            document.body.appendChild(video)
            await new Promise(resolve => {
              const onMetaLoad = () => {
                resolve()
                video.removeEventListener('loadedmetadata', onMetaLoad)
              }
              video.addEventListener('loadedmetadata', onMetaLoad)
            })
          } else {
            const img = document.createElement('img')
            img.src = i.src
            await new Promise(resolve => img.onload = resolve)
            v.resources[index].el = img
          }
        }))
      }))
    } catch (e) {
      console.log('load animated banner images error', e)
      return
    }
    const layerConfig = this.layerConfig
    if (!layerConfig.length && !this.config.extensions) {
      return
    }
    const container = this.$refs['container']
    let containerHeight = container.clientHeight
    let containerWidth = container.clientWidth
    let containerScale = containerHeight / 155

    // 初始化资源尺寸
    layerConfig.forEach(v => {
      v._initState = {
        scale: 1,
        rotate: v.rotate?.initial || 0,
        translate: v.translate?.initial || [0, 0],
        blur: v.blur?.initial || 0,
        opacity: v.opacity?.initial === undefined ? 1 : v.opacity.initial,
      }
      v.resources.forEach((i, index) => {
        const el = v.resources[index].el
        if (el.tagName === 'VIDEO') {
          if (el.parentNode) {
            el.parentNode.removeChild(el)
          }
          el.dataset.height = el.videoHeight
          el.dataset.width = el.videoWidth
        } else {
          el.dataset.height = el.naturalHeight
          el.dataset.width = el.naturalWidth
        }
        const initial = v.scale?.initial === undefined ? 1 : v.scale?.initial
        el.height = el.dataset.height * containerScale * initial
        el.width = el.dataset.width * containerScale * initial
      })
    })

    // 初始化图层
    const layers = layerConfig.map(function () {
      const layer = document.createElement('div')
      layer.classList.add('layer')
      container.appendChild(layer)
      return layer
    })

    let displace = 0
    let enterX = 0
    let raf = 0

    const curveParameterToFunc = (param) => {
      const o = bezier(...param)
      return v => v > 0 ? o(v) : -o(-v)
    }
    let lastDisplace = NaN

    // 根据鼠标位置改变状态
    const af = function (){
      try {
        if (lastDisplace === displace) {
          return
        }
        lastDisplace = displace
        layers.map((layer, i) => {
          const v = layerConfig[i]
          const a = layer.firstChild
          if (!a) {
            return
          }

          const transform = {
            scale: v._initState.scale,
            rotate: v._initState.rotate,
            translate: v._initState.translate,
          }
          if (v.scale) {
            const x = v.scale.offset || 0
            const itp = v.scale.offsetCurve ? curveParameterToFunc(v.scale.offsetCurve) : (x => x)
            const offset = x * itp(displace)
            transform.scale = v._initState.scale + offset
          }
          if (v.rotate) {
            const x = v.rotate.offset || 0
            const itp = v.rotate.offsetCurve ? curveParameterToFunc(v.rotate.offsetCurve) : (x => x)
            const offset = x * itp(displace)
            transform.rotate = v._initState.rotate + offset
          }
          if (v.translate) {
            const x = v.translate.offset || [0, 0]
            const itp = v.translate.offsetCurve ? curveParameterToFunc(v.translate.offsetCurve) : (x => x)
            const offset = x.map(v => itp(displace) * v)
            const translate = v._initState.translate.map((x, i) => (x + offset[i]) * containerScale * (v.scale?.initial || 1))
            transform.translate = translate
          }
          a.style.transform = `scale(${transform.scale})` +
            `translate(${transform.translate[0]}px, ${transform.translate[1]}px)` +
            `rotate(${transform.rotate}deg)`
          if (v.blur) {
            const x = v.blur.offset || 0
            const itp = v.blur.offsetCurve ? curveParameterToFunc(v.blur.offsetCurve) : (x => x)
            const blurOffset = x * itp(displace)

            let res = 0
            if (!v.blur.wrap || v.blur.wrap === 'clamp') {
              res = Math.max(0, v._initState.blur + blurOffset)
            } else if (v.blur.wrap === 'alternate') {
              res = Math.abs(v._initState.blur + blurOffset)
            }
            a.style.filter = res < 1e-4 ? '' : `blur(${res}px)`
          }

          if (v.opacity) {
            const x = v.opacity.offset || 0
            const itp = v.opacity.offsetCurve ? curveParameterToFunc(v.opacity.offsetCurve) : (x => x)
            const opacityOffset = x * itp(displace)

            const initial = v._initState.opacity
            if (!v.opacity.wrap || v.opacity.wrap === 'clamp') {
              a.style.opacity = Math.max(0, Math.min(1, initial + opacityOffset))
            } else if (v.opacity.wrap === 'alternate') {
              const x = initial + opacityOffset
              let y = Math.abs(x % 1)
              if (Math.abs(x % 2) >= 1) {
                y = 1 - y
              }
              a.style.opacity = y
            }
          }
        })
      } catch (e) {
        console.error(e)
        this.$emit('change', false)
      }
    }


    // 初始化图层内图片和帧动画
    layerConfig.map((v, i) => {
      const a = v.resources[0].el
      layers[i].appendChild(a)
      if (a.tagName === 'VIDEO') {
        a.play()
      }
      requestAnimationFrame(af)
    })

    const handleLeave = () => {
      const now = performance.now()
      const timeout = 200
      const tempDisplace = displace
      cancelAnimationFrame(raf)
      const leaveAF = t => {
        if (t - now < timeout) {
          displace = tempDisplace * (1 - (t - now)/200)
          af(t)
          requestAnimationFrame(leaveAF)
        } else {
          displace = 0
          af(t)
        }
      }
      raf = requestAnimationFrame(leaveAF)
    }

    // container 元素上有其他元素，需使用全局事件判断鼠标位置
    this.entered = false

    this.extensions = []
    if (this.config.extensions?.snow) {
      const snow = (await import(/* webpackChunkName: 'animated-banner-snow' */ './extensions/snow.js')).default
      this.extensions.push(await snow(this.$refs['container']))
    }
    if (this.config.extensions?.petals) {
      try {
        const petals = (await import(/* webpackChunkName: 'animated-banner-particle' */'./extensions/particle/index.js')).default
        this.extensions.push(await petals(this.$refs['container']))
      } catch (e) {
        console.error(e)
      }
    }

    // hover视频 春季暂时不用
    // if (this.config.extensions?.hoverVideoLayer) {
    //   const hvl = (await import(/* webpackChunkName: 'animated-banner-hvl' */ './extensions/hoverVideoLayer.js')).default
    //   this.extensions.push(await hvl({
    //     url: this.config.extensions?.hoverVideoLayer.src,
    //     container: this.$refs['container']
    //   }))
    // }

    this.$emit('change', true)

    this.handleMouseLeave = () => {
      this.entered = false
      handleLeave()
    }
    this.handleMouseMove = e => {
      const offsetY = document.documentElement.scrollTop + e.clientY
      if (offsetY < containerHeight) {
        if (!this.entered) {
          this.entered = true
          enterX = e.clientX
        }
        displace = (e.clientX - enterX) / containerWidth
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(af)
      } else {
        if (this.entered) {
          this.entered = false
          handleLeave()
        }
      }

      this.extensions.map(v => v.handleMouseMove?.({ e, displace }))
    }
    this.handleResize = e => {
      containerHeight = container.clientHeight
      containerWidth = container.clientWidth
      containerScale = containerHeight / 155
      layerConfig.forEach(lc => {
        lc.resources.forEach(i => {
          const el = i.el
          el.height = el.dataset.height * containerScale * (lc.scale?.initial || 1)
          el.width = el.dataset.width * containerScale * (lc.scale?.initial || 1)
        })
      })
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(t => {
        af(t)
      })
      this.extensions.map(v => v.handleResize?.(e))
    }
    document.addEventListener('mouseleave', this.handleMouseLeave)
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    document.removeEventListener('mouseleave', this.handleMouseLeave)
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('resize', this.handleResize)

    if (this.extensions) {
      this.extensions.map(v => v.destory?.())
      this.extensions = []
    }
  },
  methods: {
    compatOldConfig(old) {
      console.log(old)
      if (old instanceof Array) {
        return {
          version: '1',
          layers: old.map((l, i) => {
            return {
              id: i,
              resources: l.images.map((img, j) => {
                return {
                  id: j,
                  ...img,
                }
              }),
              scale: {
                initial: l.initial?.scale,
                offset: l.offset?.scale,
                offsetCurve: l.offsetCurve?.scale,
              },
              rotate: {
                initial: l.initial?.rotate,
                offset: l.offset?.rotate,
                offsetCurve: l.offsetCurve?.rotate,
              },
              translate: {
                initial: l.initial?.translate,
                offset: l.offset?.translate,
                offsetCurve: l.offsetCurve?.translate,
              },
              blur: {
                initial: l.initial?.blur,
                offset: l.offset?.blur,
                offsetCurve: l.offsetCurve?.blur,
              },
            }
          }),
        }
      } else if (old.version) {
        // other old version?
      }
    },
  }
}
</script>
<style lang="less" scoped>
.animated-banner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
<style lang="less">
.animated-banner > .layer {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>