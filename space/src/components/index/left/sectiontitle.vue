<template>
<div class="section video">
  <titles></titles>
  <videos></videos>
 </div>
</template>

<script>
import titles from "./section/titles"
import videos from "./section/videos"
export default {
components:{
  titles,
  videos
}
}
</script>

<style>
.section {
    border-bottom: 1px solid #eee;
    margin-bottom: 17px;
    position: relative;
}
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    word-break: break-word;
}
div {
    display: block;
}
body, input, textarea {
    font-family: Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}
body {
    color: #222;
    font-size: 12px;
    line-height: 1.7em;
    margin: 0;
    overflow-y: scroll;
}
</style>