/*!
 * pbp | v3.6.2
 * 2021-2-1 7:50:25 ├F10: PM┤
 * wushiyang <wushiyang@bilibili.com>, lipengcheng <lipengcheng@bilibili.com>, tangjunxing <tangjunxing@bilibili.com>
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).BiliPBP=t()}(this,function(){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}var r=function(){function e(){t(this,e),this.requestQueue=[]}return i(e,[{key:"getDatabase",value:function(e){var t=new n(e);return this.requestQueue.push(t),t}}]),e}(),n=function(){function e(i){var a=this;t(this,e),this._instance=window.indexedDB.open(i.service+i.version,1),this.onReady=i.onReady||function(){return null},this.onFirstCreate=i.onFirstCreate||function(){return null},this.isReady=!1,this._dbStore=null,this._instance.onerror=function(e){console.error("IDB error"+e)},this._instance.onsuccess=function(e){a._dbStore=a._instance.result,a.isReady=!0,i.onReady()},this._instance.onupgradeneeded=function(e){var t=e.target.result;t.objectStoreNames.contains("pbpZebraCache")||t.createObjectStore("pbpZebraCache",{keyPath:"cid"}),a._dbStore=t,i.onFirstCreate()}}return i(e,[{key:"get",value:function(a,r){var n=this;return new Promise(function(t,e){var i;n.isReady?((i=n._dbStore.transaction(["pbpZebraCache"]).objectStore("pbpZebraCache").get(a)).onerror=function(e){t(r,e)},i.onsuccess=function(e){i.result?t(i.result):t(r)}):e(new Error)})}},{key:"set",value:function(a,r){var n=this;return new Promise(function(t,i){var e;n.isReady?((e=n._dbStore.transaction(["pbpZebraCache"],"readwrite")).oncomplete=function(e){t(!0)},e.onerror=function(e){i(e)},a.expireTime=Date.parse(new Date)+r,e.objectStore("pbpZebraCache").put(a)):i(new Error)})}},{key:"checkExpire",value:function(t){var i=this;t?this.get(t,!1).then(function(e){e&&e.expireTime<Date.parse(new Date)&&(i._dbStore.transaction(["pbpZebraCache"],"readwrite").objectStore("pbpZebraCache").delete(t).onsuccess=function(e){})}):this._dbStore.transaction(["pbpZebraCache"],"readwrite").objectStore("pbpZebraCache").openCursor().onsuccess=function(e){var t=e.target.result;t&&(i.checkExpire(t.key),t.continue())}}}]),e}();r.getInstance=function(e){return window.indexedDbHelperV1||(window.indexedDbHelperV1=new r),window.indexedDbHelperV1.getDatabase(e)},r.isSupport=function(){return!!window.indexedDB};function o(e,t){var i=localStorage.getItem(e);return null==i&&s(e,t),i||t}var s=function(e,t){localStorage.setItem(e,t)},d="bilibili_pbp",l="bilibili-player-video-control",p="bilibili_pbp_pin",u=1e3,e="3.6.2",h={l:16,m:28,h:32},c={l:.5,m:.2,h:.1},b={b:{fillColor:"255,255,255",playedColor:"35,173,229"},p:{fillColor:"255,255,255",playedColor:"251,114,153"},r:{fillColor:"255,255,255",playedColor:"178,45,67"},g:{fillColor:"255,255,255",playedColor:"11,163,150"}};return function(){function a(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(t(this,a),this.options=e,this._clearStore(),this._status="wait",this._pbptag={},this._pbptagstr="",this._player=e.player||window.player,!this._player)throw new Error("Can not get the player instance");if(this._isNewPlayer=e.isNewPlayer,this._containerClassName=e.containerClassName,this._isNewPlayer&&!this._containerClassName)throw new Error("Can not get the containerId argument");this._container=document.getElementsByClassName(this._isNewPlayer?this._containerClassName:l)[0]}return i(a,null,[{key:"isSupport",value:function(){return!!(window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver)&&(!!Promise&&(!(!localStorage&&!sessionStorage)&&!!r.isSupport()))}}]),i(a,[{key:"init",value:function(e,t){var h=this,i=0<arguments.length&&void 0!==e?e:"default",c=1<arguments.length&&void 0!==t?t:function(){};if("destroy"===this._status&&(this._status="wait"),!a.isSupport())return this._debugLog("init unsupported"),this.destroy(),c(new Error("environment not support"));this.eventKey=this.pbpDebugKey||i||"default",this._debugLog("init key =",this.eventKey),this._injectBiliPlayer().then(function(){return"destroy"===h._status?(h.destroy(),c(new Error("_status destroy"))):(h._debugLog("injectBiliPlayer complete"),h.aid&&h.cid?h.options&&h.options.data&&0<Object.keys(h.options.data).length?new Promise(function(e,t){e(h.options.data)}):new Promise(function(e,t){t(new Error("No Data."))}):c(new Error("aid || cid miss")))}).then(function(e){if("destroy"===h._status)return h.destroy(),c(new Error("_status destroy"));if(document.getElementById(d))return h.destroy(),c(new Error("old pbp not destroy"));if(h.video=document.querySelector("video")||document.querySelector("bwp-video"),!h.video)return h.destroy(),c(new Error("video element miss"));var t=e.step_sec,i=e.events,a=void 0===i?{}:i,r=e.tag,n=void 0===r?{}:r,o=e.tagstr,s=void 0===o?"":o,l=e.debug;h._pbptag=n,h._pbptagstr=s,h._debugLog("init api response debug: ",l);var p=a[h.eventKey];if(!p||!p.length||!t)return h.destroy(),h._debugLog("events[".concat(h.eventKey,"] length empty"),l),c(new Error("events[key] length empty"));h._debugLog("init async start: api.cidData complete",h.eventKey,p),h.st={name:h.eventKey,key:h.eventKey,points:h._calculatePercentage(p,t)},h._checkVersion(),h._recoverZebraDataFromCache(c,h.st)}).catch(function(e){c?c(e):console.error(e),h._debugLog(e)})}},{key:"show",value:function(){var e,t,i,a,r;"destroy"!==this._status&&"show"!==this._status&&this.st&&(this._status="show",this._debugLog("call show"),e=o("pbp_height_v3","m"),t=h[e]?h[e]:h.m,i=this._getPlayerState().gamePlayer?"-33":"3",this.pbpStyle=document.createElement("style"),a="#bilibili_pbp{display:flex;cursor:pointer;position:absolute;bottom:".concat(i,"px;left:-12px;width:calc(100% + 24px);height:").concat(t,"px;opacity:0;z-index:0}#bilibili_pbp.show{bottom:calc(100% - 2px);opacity:1;left:0;width:100%}.webfullscreen #bilibili_pbp.show,.bilibili-player.mode-fullscreen #bilibili_pbp.show{bottom:calc(100% + 4px + 1px)}.bui-thumb{z-index:1}.bilibili-player-video-toast-wrp{z-index:1000}.bui-slider .bui-track.bui-track-video-progress{height:4px !important;border-radius:0}.bui-slider .bui-track .bui-bar-wrap{border-radius:0}.bilibili-player-video-state{z-index:998}.video-control-show .subtitle-position.subtitle-position-bc{bottom:74px}.mode-fullscreen .video-control-show .subtitle-position.subtitle-position-bc{bottom:84px}.mode-webfullscreen .video-control-show .subtitle-position.subtitle-position-bc{bottom:84px}#bilibili_pbp.pin{opacity:1}.video-control-show .bilibili-player-video-interactive{margin-bottom:16px}.webfullscreen .bilibili-player-video-interactive,.mode-fullscreen .bilibili-player-video-interactive{margin-bottom:24px}#bilibili_pbp_pin{cursor:pointer;position:absolute;bottom:calc(8%);z-index:1;color:white;opacity:0;line-height:16px;text-align:center}.bilibili-player .bilibili-player-area.video-control-show #bilibili_pbp #bilibili_pbp_pin,.bilibili-player .bilibili-player-area .bilibili-player-video-control-wrap:hover #bilibili_pbp #bilibili_pbp_pin{right:-8px;opacity:1}.pbp-tips{position:absolute;font-size:12px;color:#fff;border-radius:4px;line-height:18px;padding:4px 8px;background-color:#000;background:rgba(0,0,0,.8);white-space:nowrap;right:0;top:0;display:none}#bilibili_pbp_pin:hover .pbp-tips{top:-30px;display:block;transition:all .3 ease-in-out;-webkit-transition:all .3 ease-in-out}.pbp-icon{width:16px;height:16px;background-size:contain;transform:rotate(45deg)}.pbp-icon:hover{transform:rotate(60deg) scale(1.2);transition:all .1s ease-in-out;-webkit-transition:all .1s ease-in-out}"),r="#bilibili_pbp{position:relative;display:flex;cursor:pointer;width:100%;height:".concat(t,"px;opacity:0;z-index:0}#bilibili_pbp.show{opacity:1}#bilibili_pbp.pin{opacity:1}#bilibili_pbp_pin{cursor:pointer;position:absolute;right:-8px;bottom:calc(8%);z-index:1;color:white;opacity:0;line-height:16px;text-align:center}#bilibili_pbp.show #bilibili_pbp_pin{opacity:1}.pbp-tips{position:absolute;font-size:12px;color:#fff;border-radius:4px;line-height:18px;padding:4px 8px;background-color:#000;background:rgba(0,0,0,.8);white-space:nowrap;right:0;top:0;display:none}#bilibili_pbp_pin:hover .pbp-tips{top:-30px;display:block;transition:all .3 ease-in-out;-webkit-transition:all .3 ease-in-out}.pbp-icon{width:16px;height:16px;background-size:contain;transform:rotate(45deg)}.pbp-icon:hover{transform:rotate(60deg) scale(1.2);transition:all .1s ease-in-out;-webkit-transition:all .1s ease-in-out}"),this.pbpStyle.innerHTML=this._isNewPlayer?r:a,document.head.appendChild(this.pbpStyle),this._updatePbpConfig(),this._create(),this._refresh(),this._observerChange(),this._initPin())}},{key:"hide",value:function(){if("destroy"!==this._status&&"hide"!==this._status&&(this._status="hide",this._debugLog("call hide"),this.pbp))try{this._container.removeChild(this.pbp),this.video&&this.video.removeEventListener("seeking",this.videoSeekingCallback),this._isNewPlayer?(this._player.off(window.nano.EventType.Player_Show_Controls,this.videoControlbarShowCallback),this._player.off(window.nano.EventType.Player_Hide_Controls,this.videoControlbarHideCallback),this._player.off(window.nano.EventType.Player_TimeUpdate,this.videoProgressUpdateCallback),window.removeEventListener("beforeunload",this.onbeforeunload)):(this._player.removeEventListener("video_controlbar",this.videoControlbarCallback),this._player.removeEventListener("video_heartbeat",this.videoHeartbeatCallback),this._player.removeEventListener("video_progress_update",this.videoProgressUpdateCallback)),this.pbpStyle&&document.head.removeChild(this.pbpStyle),this.themeStyle&&(document.head.removeChild(this.themeStyle),this.themeStyle=null)}catch(e){console.log(e)}}},{key:"destroy",value:function(){"destroy"!==this._status&&(this._debugLog("call destroy"),this.hide(),this._clearStore(),this._status="destroy",this._container=null)}},{key:"_clearStore",value:function(){this.st=null,this.aid=null,this.cid=null,this.pbpStyle=null,this.themeStyle=null,this.pbp=null,this.video=null,this.pbpComponent=null,this.timeLine=null,this.zebraStart=0,this.zebraEnd=null,this.zebraAreas=[],this.lastUpdateTime=null,this.firstRefreshFlag=!1,this.videoHeartbeatFirstFlag=!1,this.eventKey=null,this.pbpDebugApi=localStorage.getItem("pbp_debug_api")||"",this.pbpDebugKey=localStorage.getItem("pbp_debug_key")||"",this.debug=!!this.options.debug||"1"===localStorage.getItem("pbp_debug")}},{key:"_checkVersion",value:function(){this._debugLog("pbp.js version: ".concat(e)),localStorage.getItem("pbp_version")!==e&&localStorage.setItem("pbp_version",e)}},{key:"_setThemeStyle",value:function(e){this.themeStyle&&"show"===this._status&&document.head.removeChild(this.themeStyle),"1"===localStorage.getItem("pbpstate")&&(this.themeStyle=document.createElement("style"),this.themeStyle.innerHTML=".bui-slider .bui-track.bui-track-video-progress .bui-bar-normal.bui-bar.bui-bar-normal { background: rgba(".concat(e,", 1); }"),document.head.appendChild(this.themeStyle))}},{key:"_updatePbpConfig",value:function(){var e=o("pbp_theme_v4","b"),e=b[e]?b[e]:b.b,t=o("pbp_opacity_v3","m"),t=c[t]?c[t]:c.m;this.st.opacity=t,this.st.fillColor="rgb(".concat(e.fillColor,")"),this.st.playedColor="rgb(".concat(e.playedColor,")"),this._setThemeStyle(e.playedColor)}},{key:"_setTheme",value:function(e){this._debugLog("call setTheme");var t=b[e]?b[e]:b.b;this.pbpComponent.fillRect.setAttribute("fill","rgb(".concat(t.fillColor,")")),this.pbpComponent.playedRect.setAttribute("fill","rgb(".concat(t.playedColor,")")),s("pbp_theme_v4",e),this._setThemeStyle(t.playedColor)}},{key:"_setHeight",value:function(e,t){e._debugLog("call setHeight");var i=h[t];e.pbp&&(e.pbp.style.height="".concat(i,"px")),s("pbp_height_v3",t)}},{key:"_setOpacity",value:function(e,t){e._debugLog("call setOpacity");var i=c[t];i&&(e.pbpComponent.group.setAttribute("fill-opacity",i),s("pbp_opacity_v3",t))}},{key:"_setPin",value:function(e,t){e._debugLog("call setPin"),e.pbp&&("1"===t?e.pbp.classList.add("pin"):e.pbp.classList.remove("pin")),s("pbp_pin_v3","1"===t?1:0)}},{key:"_pinStateChange",value:function(e,t,i){var a=document.getElementById(d).classList;i?(this._setPin(this,"1"),e.innerHTML='<svg t="1571033023877" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3699" width="16" height="16"><path d="M726.646154 466.707692h-9.846154L649.846154 155.569231h17.723077c31.507692 0 57.107692-25.6 57.107692-57.107693s-25.6-57.107692-57.107692-57.107692H356.430769c-31.507692 0-57.107692 25.6-57.107692 57.107692s25.6 57.107692 57.107692 57.107693h17.723077l-64.984615 311.138461h-9.846154c-31.507692 0-57.107692 25.6-57.107692 57.107693s25.6 57.107692 57.107692 57.107692h165.415385v342.646154c0 31.507692 25.6 59.076923 59.076923 59.076923s59.076923-25.6 59.076923-59.076923V582.892308H728.615385c31.507692 0 57.107692-25.6 57.107692-57.107693s-27.569231-59.076923-59.076923-59.076923z" p-id="3700" fill="#ffffff"></path></svg>',t.innerText="关闭《高能进度条》常驻",a.add("pin")):(this._setPin(this,"0"),e.innerHTML='<svg t="1571033005936" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3385" width="16" height="16"><path d="M85.333333 224.853333 139.946667 170.666667 853.333333 884.053333 799.146667 938.666667 546.133333 685.653333 546.133333 938.666667 477.866667 938.666667 477.866667 682.666667 256 682.666667 256 597.333333 341.333333 512 341.333333 480.853333 85.333333 224.853333M682.666667 512 768 597.333333 768 682.666667 760.32 682.666667 341.333333 263.68 341.333333 170.666667 298.666667 170.666667 298.666667 85.333333 725.333333 85.333333 725.333333 170.666667 682.666667 170.666667 682.666667 512Z" p-id="3386" fill="#ffffff"></path></svg>',t.innerText="打开《高能进度条》常驻",a.remove("pin")),s("pbp_pin_v3",i?"1":"0")}},{key:"_initPin",value:function(){var i=this,e=document.getElementById(p);(e=document.createElement("div")).setAttribute("id",p);var a=document.createElement("div");a.setAttribute("class","pbp-icon");var r=document.createElement("span");r.setAttribute("class","pbp-tips"),e.appendChild(a),e.appendChild(r);var n=this;this.pbp.appendChild(e);var t="1"===o("pbp_pin_v3","0");this._pinStateChange(a,r,t),e.addEventListener("click",function(e){var t="1"!==o("pbp_pin_v3","0");n._pinStateChange(a,r,t),window.pinClickCount||(window.pinClickCount=1),10<=window.pinClickCount&&(window.pinClickCount=1,s("pbp_debug",i.debug?"0":"1"),window.location.reload()),window.pinClickCount++})}},{key:"_saveZebraAreas",value:function(){if(null!==this.zebraStart&&null!==this.zebraEnd){for(var e=0;e<this.zebraAreas.length;e++){var t=this.zebraAreas[e][0],i=this.zebraAreas[e][1];if(this.zebraStart>i){if(e+1!==this.zebraAreas.length)continue;this.zebraAreas.push([this.zebraStart,this.zebraEnd]);break}if(this.zebraStart>=t&&this.zebraEnd<=i)break;this.zebraStart<=t&&this.zebraEnd>=t&&this.zebraEnd<i?this.zebraAreas[e]=[this.zebraStart,i]:this.zebraStart>=t&&this.zebraStart<=i&&this.zebraEnd>i?this.zebraAreas[e]=[t,this.zebraEnd]:this.zebraAreas.splice(e,0,[this.zebraStart,this.zebraEnd]);break}if(1<this.zebraAreas.length){for(var a=[],r=this.zebraAreas[0][1],n=0,o=1;o<this.zebraAreas.length;o++){var s=this.zebraAreas[o][0],l=this.zebraAreas[o][1];s<r?(r<l&&(this._debugLog("delete merge end"),this.zebraAreas[n]=[this.zebraAreas[n][0],l],r=l,n=o),this._debugLog("delete: ".concat(o,", ").concat(s,", ").concat(l)),a.push(o)):(r=l,n=o)}var p=this;a.forEach(function(e,t){p._debugLog("delete start: ".concat(e-t)),p.zebraAreas.splice(e-t,1)})}else this.zebraAreas.push([this.zebraStart,this.zebraEnd]);this._refreshZebraClipPath()}}},{key:"_recoverZebraDataFromCache",value:function(t,i){var a=this,e={service:"pbp",version:"3",onReady:function(){window.PbpIDBHelper.get(a.cid,null).then(function(e){if(e)try{a.zebraAreas=e.data}catch(e){a._debugLog("Zebra data parse error"+e)}finally{t(null,i),a._refreshZebraClipPath()}else t(null,i),a._refreshZebraClipPath(),window.PbpIDBHelper.checkExpire(null)}).catch(function(e){a._debugLog("WTF! unkowen"+JSON.stringify(e))})},onFirstCreate:function(){}};window.PbpIDBHelper=r.getInstance(e)}},{key:"_cacheZebraData",value:function(){if(this.zebraAreas){this._debugLog("call _cacheZebraData");try{window.PbpIDBHelper.set({cid:this.cid,data:this.zebraAreas},2592e6)}catch(e){this._debugLog("Zebra data stringify or save error"+e)}}}},{key:"_generateBezierCurvePath",value:function(e,t,i){var a=.2*i,r=e[1].wPercentage*t/2,n=["M 0 100 L 0 ".concat(i-a)],o=0,s=i-a;e.push({wPercentage:1,hPercentage:0});for(var l=1;l<e.length;l++){var p=e[l],h=p.wPercentage*t,c=i-(a+.8*p.hPercentage*i),b=o+r;n.push("C ".concat(b.toFixed(1)," ").concat(s.toFixed(1),", ").concat(b.toFixed(1)," ").concat(c.toFixed(1),", ").concat(h.toFixed(1)," ").concat(c.toFixed(1))),o=h,s=c}n.push("L 1000 100 Z");var d=n.join(" ");return this._debugLog("call _generateBezierCurvePath: ".concat(d)),d}},{key:"_generateZebraPath",value:function(e,t){for(var i=[],a=0;a<e.length;a++){var r=e[a],n=t*r[0],o=t*r[1];i.push("M ".concat(n.toFixed(1)," 100 H ").concat(o.toFixed(1)," V 0 H ").concat(n.toFixed(1)," Z"))}var s=i.join(" ");return this._debugLog("call _generateZebraPath: ".concat(s)),s}},{key:"_create",value:function(){var e,i,t,a,r,n,o,s,l,p,h,c,b=this;this.st&&((e=document.getElementById(d))||((e=document.createElement("div")).setAttribute("id",d),(i=document.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("viewBox","0 0 ".concat(u," ").concat(100)),i.setAttribute("preserveAspectRatio","none"),i.setAttribute("width","100%"),i.setAttribute("height","100%"),t=document.createElementNS("http://www.w3.org/2000/svg","defs"),(a=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).setAttribute("id","pbp-curve-path"),a.setAttribute("clipPathUnits","userSpaceOnUse"),(r=document.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",this._generateBezierCurvePath(this.st.points,u,100)),a.appendChild(r),(n=document.createElementNS("http://www.w3.org/2000/svg","clipPath")).setAttribute("id","pbp-played-path"),n.setAttribute("clipPathUnits","userSpaceOnUse"),(o=document.createElementNS("http://www.w3.org/2000/svg","rect")).setAttribute("x","0"),o.setAttribute("width","0"),o.setAttribute("y","0"),o.setAttribute("height","100%"),n.appendChild(o),(s=document.createElementNS("http://www.w3.org/2000/svg","path")).setAttribute("d",this._generateZebraPath(this.zebraAreas,u)),n.appendChild(s),t.appendChild(a),t.appendChild(n),(l=document.createElementNS("http://www.w3.org/2000/svg","g")).setAttribute("fill-opacity",this.st.opacity),l.setAttribute("clip-path","url(#pbp-curve-path)"),l.setAttribute("class","bilibili-player-videoshot-area"),(p=document.createElementNS("http://www.w3.org/2000/svg","rect")).setAttribute("x","0"),p.setAttribute("y","0"),p.setAttribute("width","100%"),p.setAttribute("height","100%"),p.setAttribute("fill",this.st.fillColor),l.appendChild(p),(h=document.createElementNS("http://www.w3.org/2000/svg","rect")).setAttribute("x","0"),h.setAttribute("y","0"),h.setAttribute("width","100%"),h.setAttribute("height","100%"),h.setAttribute("fill",this.st.playedColor),h.setAttribute("clip-path","url(#pbp-played-path)"),l.appendChild(h),(c=document.createElementNS("http://www.w3.org/2000/svg","line")).setAttribute("y1","0"),c.setAttribute("y2","100%"),c.setAttribute("style","stroke: ".concat("rgba(255,255,255,0.2)","; stroke-width: 1;")),l.appendChild(c),i.appendChild(t),i.appendChild(l),e.appendChild(i),this._container.appendChild(e),this._getPlayerState().show?e.classList.add("show"):e.classList.remove("show"),l.addEventListener("click",function(e){var t=(e.clientX-i.getBoundingClientRect().left)/i.getBoundingClientRect().width;b._player.seek(t*b._getDuration()),b._isNewPlayer?b._player.eTrack("slidepbp"):b._player.track("slidepbp")}),this.pbp=e,this.pbpComponent={pbpSvg:i,group:l,currentRect:o,zebraPath:s,fillRect:p,playedRect:h,currentTimeLine:c}))}},{key:"_refresh",value:function(){var e,t,i;null!==this.zebraStart&&null!==this.zebraEnd&&this.zebraEnd>this.zebraStart&&(e=this.pbpComponent.currentRect,t=100*this.zebraStart,i=100*this.zebraEnd-t,e.setAttribute("x","".concat(t.toFixed(2),"%")),e.setAttribute("width","".concat(i.toFixed(2),"%")));var a=this._player.getCurrentTime();this.firstRefreshFlag||(a=0,this.firstRefreshFlag=!0);var r=0<=(r=a/this._getDuration()*u-.5)?r:0,n=this.pbpComponent.currentTimeLine;n.setAttribute("x1","".concat(r)),n.setAttribute("x2","".concat(r))}},{key:"_refreshZebraClipPath",value:function(){this.pbpComponent.zebraPath.setAttribute("d",this._generateZebraPath(this.zebraAreas,u))}},{key:"_observerChange",value:function(){var o=this;this._debugLog("observer change"),this.videoSeekingCallback=function(e){o._saveZebraAreas(),o.zebraStart=null,o.zebraEnd=null,o.lastUpdateTime=null},this.videoProgressUpdateCallback=function(e,t){var i=o._getDuration(),a=o._isNewPlayer?o._player.getCurrentTime():t.currentTime,r=a/i||0,n=!1;o.lastUpdateTime&&(n=a<o.lastUpdateTime||1.5<a-o.lastUpdateTime),n?(o._debugLog("invalid update, ignore."),o._saveZebraAreas(),o.zebraStart=null,o.zebraEnd=null,o.lastUpdateTime=null):(null===o.zebraStart&&(o.zebraStart=Number(r.toFixed(4))),o.zebraEnd=Number(r.toFixed(4)),o._isNewPlayer&&15<=o.lastUpdateTime-a?o._executeZebraCached():o.lastUpdateTime=a),o._refresh()},this.videoControlbarCallback=function(e,t){o._controlbarControl(t.show)},this.videoHeartbeatCallback=function(e,t){o._executeZebraCached()},this.onbeforeunload=function(){o.videoHeartbeatCallback()},this.video.addEventListener("seeking",this.videoSeekingCallback),this._isNewPlayer?(this.videoControlbarShowCallback=function(e){o._controlbarControl(!0)},this.videoControlbarHideCallback=function(e){o._controlbarControl(!1)},this._player.on(window.nano.EventType.Player_Show_Controls,this.videoControlbarShowCallback),this._player.on(window.nano.EventType.Player_Hide_Controls,this.videoControlbarHideCallback),this._player.on(window.nano.EventType.Player_TimeUpdate,this.videoProgressUpdateCallback),window.addEventListener("beforeunload",this.onbeforeunload)):(this._player.addEventListener("video_controlbar",this.videoControlbarCallback),this._player.addEventListener("video_heartbeat",this.videoHeartbeatCallback),this._player.addEventListener("video_progress_update",this.videoProgressUpdateCallback))}},{key:"_calculatePercentage",value:function(e,t){var i=this._getDuration(),a=Math.floor(i/t);this._debugLog("video_len:".concat(a," data_len:").concat(e.length)),a>e.length&&(e=e.concat(new Array(a-e.length).fill(0)));for(var r=e.length*t,n=e.reduce(function(e,t){return t<e?e:t},0),o=[],s=0;s<e.length;s++){var l=e[s],p=(p=l/n)||0;o.push({value:l,hPercentage:p,wPercentage:s*t/r})}return o}},{key:"_getPlayerState",value:function(){var e,t={show:!1,gamePlayer:!1};return this._isNewPlayer?t.show=!this._player.getManifest().majorCtrlHidden:(e=this._player.getPlayerState())&&(t.show=e.controller&&e.controller.show,t.gamePlayer=e.gamePlayer),t}},{key:"_controlbarControl",value:function(e){var t=this.pbp.classList;e?t.add("show"):t.remove("show")}},{key:"_executeZebraCached",value:function(){var e;this.videoHeartbeatFirstFlag?(e=this._player.getCurrentTime()/this._getDuration()||0,e=Number(e.toFixed(4)),this._debugLog("call video heartbeat: ".concat(e,", zebra time: ").concat(this.zebraStart," - ").concat(this.zebraEnd)),this.zebraEnd=e,this._saveZebraAreas(),this.zebraStart=this.zebraEnd,this.lastUpdateTime=null,this._cacheZebraData()):this.videoHeartbeatFirstFlag=!0}},{key:"_getDuration",value:function(){return this._isNewPlayer?this._player.getDuration(!0):this._player.getDuration()}},{key:"_debugLog",value:function(){for(var e,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];this.debug&&(e=console).log.apply(e,["[PBP DEBUG]: "].concat(i))}},{key:"_injectBiliPlayer",value:function(){var r=this,n=10;return new Promise(function e(t,i){var a=document.querySelector(".".concat("bilibili-player-video-wrap"));if(r._isNewPlayer||window.BilibiliPlayer&&a)r.aid=+window.aid||window.bvid||r.options.aid,r.cid=+window.cid||r.options.cid,t();else{if(0===--n)return void i("miss BilibiliPlayer");setTimeout(function(){e(t,i)},500)}})}},{key:"stateStore",get:function(){var e={status:"disable",data:[],version:"3.6.2"};this.st&&this.st.points&&(e.data=this.st.points),e.data.length?"show"===this._status?e.status="enable":e.status="disable":e.status="enableFail";var t="1"===(t=o("pbp_pin_v3","0"))?t:"0",i=o("pbp_height_v3","m"),i=h[i]?i:"m",a=o("pbp_opacity_v3","m"),a=c[a]?a:"m",r=o("pbp_theme_v4","b"),r=b[r]?r:"b",n="1"===(n=o("pbp_debug","0"))?n:"0";return e.pbpstatus=e.status,e.pbptag=this._pbptag,e.pbptag.pbppin=Number(t),e.pbptag.pbpheight=i,e.pbptag.pbpopacity=a,e.pbptag.theme=r,e.pbptag.debug=n,e.pbptagstr=this._pbptagstr+"&pbppin_"+t+"&pbpheight_"+i+"&pbpopacity_"+a+"&pbptheme_"+r+"&pbpdebug_"+n,e}}]),a}()});