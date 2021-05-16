<template>
  <div class="type-list-v2-selector-wrp">
    <div class="select-box-v2-container">
      <z-toggle :offset-y="50" transition_name="slide-fade-upload-v3" @display_update="display_update" :is_show="selected">
        <template v-slot:btn>
          <div class="select-box-v2-controller">
            <p class="select-item-cont">
              {{value?selectedBigName+' → '+selectedSmallName:'点击选择'}}
            </p>
            <i class="selebox-box-v2-drop-icon iconfont icon-ic_collapse"
               :style="'transform: rotate('+(selected?180:0)+'deg) translateZ(0px);'"></i>
          </div>
        </template>
        <div class="drop-cascader-container">
          <div class="drop-cascader-pre-wrp">
            <div class="drop-cascader-pre-item" @click="selectedBigTid=bigRegion.tid;selectedBigName=bigRegion.name" :class="selectedBigTid===bigRegion.tid?'drop-cascader-pre-item-selected':''" v-for="bigRegion in bigRegionConfig" :key="bigRegion.tid">
              <p class="pre-item-content">{{ bigRegion.name }}</p>
              <i class="pre-item-icon iconfont icon-ic_into"></i>
            </div>
          </div>
          <div class="drop-cascader-list-wrp">
            <div class="drop-cascader-list-item" @click="$emit('change',smallRegion.tid);selectedSmallName=smallRegion.name" :class="value===smallRegion.tid?'drop-cascader-list-item-selected':''" v-for="smallRegion in smallRegionConfigs[selectedBigTid]" :key="smallRegion.tid">
              <p class="item-main">{{smallRegion.name}}</p>
              <p class="item-sub">{{smallRegion.desc}}</p>
            </div>
          </div>
        </div>
      </z-toggle>
    </div>
  </div>
</template>

<script>
import ZToggle from "g-public/components/z-toggle";
import {MenuConfig} from 'g-public/js/config/menuConfig'

export default {
  name: "select-box-v2",
  components: {ZToggle},
  data() {
    return {
      selected: false,
      bigRegionConfig:[],
      smallRegionConfigs:{},
      selectedBigTid:0,
      selectedBigName:"",
      selectedSmallName:"",
    }
  },
  model:{
    prop:"value",
    event:"change"
  },
  props:["value"],
  methods:{
    display_update(display){
      this.selected=display
    }
  },
  mounted() {
    this.bigRegionConfig=MenuConfig.filter(v=>{
      return v.tid
    })
    this.selectedBigTid = this.bigRegionConfig[0].tid
    this.selectedBigName=this.bigRegionConfig[0].name
    this.smallRegionConfigs=[]
    MenuConfig.forEach(v=>{
      if (v?.sub){
        this.smallRegionConfigs[v.tid]=v.sub
      }else {
        this.smallRegionConfigs[v.tid]=[]
      }
    })
  }
}
</script>

<style>

</style>