<template>
  <div>
<!--    <p>折线统计图</p>-->
<!--    <div id="line" style="width:822px;height:492px;"></div>-->
<!--    <div id="main" style="width: 600px;height:400px;"></div>-->
  </div>
</template>

<script>

export default {
  name:"dc-section1",
  // methods:{
  //   drawLine(id) {
  //     // 基于准备好的dom，初始化echarts实例
  //     //let line = echarts.init(document.getElementById(id));
  //     let line = this.$echarts.init(document.getElementById(id));
  //     // 绘制图表，this.echarts1_option是数据
  //     line.setOption({
  //       color: ["#32d2c9"],
  //       title: {
  //         x: 'left',
  //         text: '成绩统计',
  //         textStyle: {
  //           fontSize: '18',
  //           color: '#4c4c4c',
  //           fontWeight: 'bolder'
  //         }
  //       },
  //       tooltip: {
  //         trigger: 'axis'
  //       },
  //       toolbox: {
  //         show: true,
  //         feature: {
  //           dataZoom: {
  //             yAxisIndex: 'none'
  //           },
  //           dataView: {readOnly: false},
  //           magicType: {type: ['line', 'bar']}
  //         }
  //       },
  //       xAxis: {
  //         type: 'category',
  //         boundaryGap: false,
  //         data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  //         axisLabel: {
  //           interval: 0
  //         }
  //       },
  //       yAxis: {
  //         type: 'value'
  //       },
  //       series: [
  //         {
  //           name: '成绩',
  //           type: 'line',
  //           data: [23, 42, 18, 45, 48, 49, 100],
  //           markLine: {data: [{type: 'average', name: '平均值'}]}
  //         }
  //       ]
  //     });
  //   }
  // },
  // mounted(){
  //   this.drawLine('line');
  // },

  // methods: {
  //   drawChart() {
  //     // 基于准备好的dom，初始化echarts实例
  //     let myChart = this.$echarts.init(document.getElementById("main"));
  //     // 指定图表的配置项和数据
  //     let option = {
  //       xAxis: {
  //         type: 'category',
  //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //       },
  //       yAxis: {
  //         type: 'value'
  //       },
  //       series: [{
  //         data: [820, 932, 901, 934, 1290, 1330, 1320],
  //         type: 'line'
  //       }]
  //     };
  //     // 使用刚指定的配置项和数据显示图表。
  //     myChart.setOption(option);
  //   }
  // },
  // mounted() {
  //   this.drawChart();
  // }
}
</script>
<!--<style>-->
<!--body{-->
<!--  font-size:14px;-->
<!--  color:#000;-->
<!--  user-select:none;-->
<!--  -webkit-user-select:none;-->
<!--  -webkit-text-size-adjust:none;-->
<!--  background-color:#fff;-->
<!--}-->
<!--html,body {-->
<!--  height:100%;-->
<!--}-->
<!--*{-->
<!--  font-family:"微软雅黑","华文细黑",Arial, Helvetica, sans-serif;-->
<!--}-->
<!--a,input,div,textarea{-->
<!--  outline:none;-->
<!--}-->
<!--html,body,h1,h2,h3,h4,h5,h6,p,dl,dd,ol,ul,th,td,form,fieldset,input,button,textarea,a{-->
<!--  margin:0;-->
<!--  padding:0-->
<!--}-->
<!--input,textarea,select{-->
<!--  text-decoration:none;-->
<!--  outline:0 none;-->
<!--  resize:none;-->
<!--  -webkit-tap-highlight-color:rgba(0,0,0,0);-->
<!--  -webkit-appearance: none;-->
<!--  border-radius:0;-->
<!--}-->
<!--ul,dl,ol{-->
<!--  list-style:none;-->
<!--}-->
<!--ul,li{-->
<!--  list-style:none;-->
<!--}-->
<!--fieldset,img{-->
<!--  border:0;-->
<!--}-->
<!--a{-->
<!--  text-decoration:none;-->
<!--  outline:0 none;-->
<!--}-->
<!--body{-->
<!--  background-color: #faf9f4;-->
<!--}-->

<!--p{-->
<!--  color: #3d3d3d;-->
<!--  font-size: 20px;-->
<!--  text-align: center;-->
<!--  padding: 100px 0 10px 0;-->
<!--}-->
<!--#line{-->
<!--  margin: 0 auto;-->
<!--}-->

<!--</style>-->
