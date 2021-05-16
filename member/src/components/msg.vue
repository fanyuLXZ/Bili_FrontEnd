<template>
  <div class="toaster-v2-wrp upload-v3-animated" v-show="stats!==0" :class="stats===2?'upload-v3-fadeOutUp':''">
    <div class="msg-text upload-v3-animated" :class="stats===1?'upload-v3-fadeInDown':''">
      <img v-if="type===0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABJBJREFUaAXVWj1oFEEUfm8T9ExMcSBokiKFKSIWYmLUYAJGUCwUtTgLUYxRibWF9WmnRSoLgxojRguviMEIohADBoKYaCeCURA0QVBTnDlPMTu+N3ubm93bzd7u3l3uBo6bv/fe92bevJl5swgFSCLWsQ6+pfeDEN0gsAUENBPbKICoM9hjkv4XAGEWULwHxBewMfIcE1O/w4rHoAxEZ2cUMHUEhE4/PEBga/zxwhQp8wxQGyXSUZycXPBHb/T2rYA43FYDC/pFGu1LxCIzwkFEW2iSNCvXIKr14+OZlKXFo5C3AiIWq4L5j2dppOMEvt6Db7BmxHkAjEP95tuYSCzlwyQvBcS+jkb4k35E4HfkwzR8H5yGtZGjOD711YuXpwKis20XgD5StFF3QyhnQzuGkzOv3LpwvbZSo+hqPUngJ0oOnkFJM9UnDAzuKF1nQBLq+j130hK2aNopfPlm2EmiowIZs+GRjzgRlbwOMU3GstfJnHJMSC5Yw+bLAzyPlhxIfcTAZh0+iwLSVbK3KZabtMr2V2JMhE1iVCgtCmT8fIlcpYIi7yy5cbkXZQmW10Bmh50ty9HP4qV9jja7qNZs7tjZGTCOB8XZYVUAYfNsSow1k+QMyIOZ+PWZ6gp1tjH5F+ufzk7rm/gAaMwAnyorBzwPSp08CVPGUICPxEFT206Ah2MAY+MAsRPeXLgP92Uapg2aMphRXkbm0t/J2fo8z2ckM5CGxiyMwRsAgwPZsprr7QPovZCtmaOz2vFD2bKvHN0nGiIbNHmTCgqeBdbWWsUyQAZqT3bw3F4TbMwM1jTgdAvUyG1222X5Kg/dzO1uV8IJPFPdvZVL66eGsFfLOyxdYgOnxANaUuS8VNNgZmpZzZuC2NSYNkyi+zeKPds/kP3zJTxcchtlJ64rrROn/q51OMteiKIHBUi8cBmYVyoYeCkoSgqYoQ8vyXm0eylRWPAESNQZ+0Ae2Mq1Cykgg06Fwee1DuzeKbRUTPIMBAoo5cj2Am8SFFYJOgtxuC9scgMvbd5hYRdKCcJeLWOVAg4G1oHPNm5+Xj1S2PtwOUkh0zB7AcVZaQYo0Bom9ZzPpbZ7GzfvdPpcLq2fGsKucZSYFrKveKRFxuKipSj3AnXkzVYnJVLBxUrMhL3q8rsv/+JNm9pJTospy9f/J1pC21oBliiUOXAd4P6QO/nbGcNstmwF+PkD4OoVgHnP6KEzP4Qn+HR62LiRdbX2gK7fce5ZprWadoaCXUPGRkbxeYLJjxCVkpL8psBgpQLycYHj85WSCKv5IGLMAAOnxwUZsih3JYywSr8Jc1kBI86CcbOhfP8xbsaEGOOyAhIwvYyQe5ouY/DT/Hqj4pNeSK2QAdS/6ddlF6Fj01kTabe/2uQowMpUdHidFZBxeESHMwK3rkIiLE5vA4zEugYUbPJFhF5GyDOllerSZln2Cq8zDMbRhFSUFf3IJzXkV0JaPKX1TuQJecF6vFAyPlcTUmdBrvyG5t30WUBfUTc79jQsg2TZvY2KR817mpDamfMV+6lBjiKV+rGHXRE5K6v4uc1/PIq55M8BqecAAAAASUVORK5CYII=">
      <img v-if="type===1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGNSURBVDhPfZK/L0NRFMfPfZr6sbCo6IRFokuJWCoxGMyaRvwFEiIR/gASEpOBxGQyGpqaDRKSSiSsxMakogMWPx7t8TnvVdpq+SbfnHvP+Z737j336+QXMme97WWVqIiDUnKivnPynk0VvkJFiLrGdL6304mbUtEUpUFSLSJ6jehURY5z44WXUFnTmM7Hk4QZOAv7LVeDAtyHe7nx+ztLBI3TZ/Fup7LKctH2/2BXnawfpu6Lbjofj5DI8IUdYiwoN+IZ2h25viwRsx6X76BpmM1fTVeIV4hZGEM7Sk+rp+JFKSQCSSOKKm4DsQ1lzBLsEzDqsSxxVaYX4ITKMvEKFlXdgqi+st6EIxCEejuqD01o6IJ3fHGbpnnx1OMNt8nZ0wTg7zdOyj5HdR8c9YLcE0xSWWMG4jntYtJb5AasoYJHtJf0fPKBps/xAK3WE+yqqD5HJWEG6CPMwWYGuIUHsN4APwgtJ5McZ4LSECkGYZZz59jwqKnlfoDJI6rSZiNna171maCPyd9ChUHkGwceh++/D0uAAAAAAElFTkSuQmCC">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "msg",
  data(){
    return{
      text:"",
      stats:0,
      type:0
    }
  },
  beforeMount() {
    window.msg=(msg,type)=>{
      if (this.stats===0){
        this.stats=1
        this.text=msg;
        this.type=type;
        setTimeout(()=>{
          if (this.stats===1){
            setTimeout(()=>{
              this.stats=0
            },500)
            this.stats=2
          }
        },1000)
      }
    }
  }
}
</script>

<style>

</style>