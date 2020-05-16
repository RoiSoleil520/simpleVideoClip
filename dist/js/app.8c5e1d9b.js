(function(t){function e(e){for(var n,d,s=e[0],a=e[1],u=e[2],l=0,v=[];l<s.length;l++)d=s[l],Object.prototype.hasOwnProperty.call(o,d)&&o[d]&&v.push(o[d][0]),o[d]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);c&&c(e);while(v.length)v.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,s=1;s<i.length;s++){var a=i[s];0!==o[a]&&(n=!1)}n&&(r.splice(e--,1),t=d(d.s=i[0]))}return t}var n={},o={app:0},r=[];function d(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,d),i.l=!0,i.exports}d.m=t,d.c=n,d.d=function(t,e,i){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(d.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)d.d(i,n,function(e){return t[e]}.bind(null,n));return i},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=a;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"2c49":function(t,e,i){"use strict";var n=i("ad06"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],d=(i("5c0b"),i("2877")),s={},a=Object(d["a"])(s,o,r,!1,null,null,null),u=a.exports,c=i("8c4f"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("p",{staticStyle:{fontSize:"20px"}},[t._v("简单视频剪辑功能实现")]),i("CusVideo")],1)},v=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"custom-video"},[i("div",{ref:"custom-video_container",staticClass:"custom-video_container"},[i("div",{staticClass:"custom-video_video"},[i("video",{ref:"custom-video"},[i("source",{attrs:{src:t.videoOption.src,type:"video/mp4"}}),i("p",[t._v("设备不支持")])])])]),i("div",{staticClass:"video-controls",on:{mousedown:t.handleClick}},[i("div",{ref:"thumbs",staticClass:"thumbs"},[t.thumbCount?i("div",{ref:"thumbs-inner",staticClass:"inner"},t._l(Array(t.thumbCount).fill(1),(function(e,n){return i("video",{key:n,attrs:{width:t.videoUnitWidth,height:"50",preload:"metadata",src:t.objectURL+"#t="+t.videoUnit*n}})})),0):t._e()]),i("div",{ref:"control-bars",staticClass:"control-bars"},[i("div",{staticClass:"control-bars-mask left",style:"width:"+t.leftMovePercentage+"%;",attrs:{"data-direction":"left"}}),i("div",{staticClass:"control-bars-mask right",style:"width:"+t.rightMovePercentage+"%;",attrs:{"data-direction":"right"}}),i("div",{staticClass:"control-bars-progress",class:{animate:t.videoEdit.play},style:"left:"+t.videoEdit.currentPosition+"%;"},[i("svg",{attrs:{width:"54px",height:"24px",viewBox:"0 0 54 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[i("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[i("path",{attrs:{d:"M27,23 L27,24 L26,24 L26,23 C26,20.2385763 23.7614237,18 21,18 L9,18 C4.02943725,18 0,13.9705627 0,9 C0,4.02943725 4.02943725,0 9,0 L45,0 C49.9705627,0 54,4.02943725 54,9 C54,13.9705627 49.9705627,18 45,18 L32,18 L32,18 C29.2385763,18 27,20.2385763 27,23 Z",id:"time_bg",fill:"#FFFFFF"}})])]),i("span",{staticClass:"text"},[t._v(t._s(t.timeTranslate(t.currentTime)))])]),i("div",{staticClass:"control-bars-wrapper",style:"left:"+t.leftMovePercentage+"%;right:"+t.rightMovePercentage+"%;"},[i("div",{ref:"move-left-icon",staticClass:"control-bars-move left",on:{mousedown:function(e){return t.handleMoveDown(e,"left")}}}),i("div",{ref:"move-right-icon",staticClass:"control-bars-move right",on:{mousedown:function(e){return t.handleMoveDown(e,"right")}}})])])]),i("div",{staticClass:"video-btn"},[i("div",{staticClass:"toggle",on:{click:t.togglePlayStatus}},[i("div",{staticClass:"toggle-icon",class:{playing:t.videoEdit.play}})]),i("div",{staticClass:"crop-range"},[i("div",{staticClass:"crop-input crop-start"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputStartLeftTime,expression:"inputStartLeftTime",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"00",maxlength:"2",id:"range-0"},domProps:{value:t.inputStartLeftTime},on:{input:function(e){e.target.composing||(t.inputStartLeftTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),i("span",[t._v("：")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputStartRightTime,expression:"inputStartRightTime",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"00",maxlength:"2",id:"range-1"},domProps:{value:t.inputStartRightTime},on:{input:function(e){e.target.composing||(t.inputStartRightTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("span",{staticStyle:{color:"#fff",margin:"0 10px"}},[t._v("一")]),i("div",{staticClass:"crop-input crop-end"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputEndLeftTime,expression:"inputEndLeftTime",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"00",maxlength:"2",id:"range-2"},domProps:{value:t.inputEndLeftTime},on:{input:function(e){e.target.composing||(t.inputEndLeftTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),i("span",[t._v("：")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputEndRightTime,expression:"inputEndRightTime",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"00",maxlength:"2",id:"range-3"},domProps:{value:t.inputEndRightTime},on:{input:function(e){e.target.composing||(t.inputEndRightTime=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])]),i("div",[i("div",{staticStyle:{color:"#fff"}},[t._v("当前播放至："+t._s(t.currentTime))]),i("div",{staticStyle:{color:"#fff"}},[t._v("start："+t._s(t.videoEdit.start))]),i("div",{staticStyle:{color:"#fff"}},[t._v("end："+t._s(t.videoEdit.end))])])])},f=[],m=(i("fb6a"),i("b680"),i("d3b7"),i("ac1f"),i("3ca3"),i("1276"),i("ddb0"),i("2b3d"),i("96cf")),p=i.n(m),g={data:function(){return{videoOption:{src:p.a},videoState:{play:!1,currentPosition:0},videoEdit:{start:0,end:0,duration:0,play:!1,currentPosition:0},videoDom:null,duration:0,currentTime:0,objectURL:"",videoUnit:0,videoUnitWidth:0,videoRatio:0,isPortraitVideo:!1,thumbCount:0,leftMovePercentage:0,leftMoveInit:0,rightMovePercentage:0,rightMoveInit:0}},mounted:function(){var t=this;this.videoDom=this.$refs["custom-video"],this.leftIconDom=this.$refs["move-left-icon"],this.rightIconDom=this.$refs["move-right-icon"],this.thumbsWidth=this.$refs.thumbs.clientWidth,this.leftMoveInit=this.getOffset(this.leftIconDom).left+5,this.rightMoveInit=this.getOffset(this.rightIconDom).left+5,this.minWidthPercentage=(20/this.thumbsWidth*100).toFixed(4),this.initMedaData(),this.transformBlob(),document.addEventListener("mouseup",(function(e){t.handleMoveStatus=!1})),document.addEventListener("mousemove",(function(e){if(t.handleMoveStatus){if("left"===t.handleMoveDirection){var i=e.clientX-t.leftMoveInit;t.leftMovePercentage=i>0?(i/(t.thumbsWidth-20)*100).toFixed(4):0,t.leftMovePercentage>100-t.rightMovePercentage-t.minWidthPercentage&&(t.leftMovePercentage=100-t.rightMovePercentage-t.minWidthPercentage),t.videoEdit.start=(t.videoEdit.duration*t.leftMovePercentage/100).toFixed(4)}if("right"===t.handleMoveDirection){var n=t.rightMoveInit-e.clientX;t.rightMovePercentage=n>0?(n/(t.thumbsWidth-20)*100).toFixed(4):0,t.rightMovePercentage>100-t.leftMovePercentage-t.minWidthPercentage&&(t.rightMovePercentage=100-t.leftMovePercentage-t.minWidthPercentage),t.videoEdit.end=(t.videoEdit.duration*(1-t.rightMovePercentage/100)).toFixed(4)}t.handleClick(e,t.handleMoveDirection)}}))},computed:{inputStartLeftTime:{set:function(t){t=60*t+this.toInt(document.getElementById("range-1").value),(t>this.videoEdit.duration||this.videoEdit.duration-t<10)&&(t=0),this.videoEdit.start=t},get:function(){return this.timeTranslate(this.videoEdit.start).split(":")[0]}},inputStartRightTime:{set:function(t){t=60*this.toInt(document.getElementById("range-0").value)+t,(t>this.videoEdit.duration||this.videoEdit.duration-t<10)&&(t=0),this.videoEdit.start=t},get:function(){return this.timeTranslate(this.videoEdit.start).split(":")[1]}},inputEndLeftTime:{set:function(t){t=60*t+this.toInt(document.getElementById("range-3").value),(t>this.videoEdit.duration||t-this.videoEdit.start<10)&&(t=this.videoEdit.duration),this.videoEdit.end=t},get:function(){return this.timeTranslate(this.videoEdit.end).split(":")[0]}},inputEndRightTime:{set:function(t){t=60*this.toInt(document.getElementById("range-2").value)+t,(t>this.videoEdit.duration||t-this.videoEdit.start<10)&&(t=this.videoEdit.duration),this.videoEdit.end=t},get:function(){return this.timeTranslate(this.videoEdit.end).split(":")[1]}}},watch:{"videoEdit.start":{handler:function(t){this.currentTime=t,this.videoEdit.currentPosition=this.currentTime/this.videoEdit.duration*100,this.leftMovePercentage=this.videoEdit.currentPosition},deep:!0},"videoEdit.end":{handler:function(t){this.currentTime=t,this.videoEdit.currentPosition=this.currentTime/this.videoEdit.duration*100,this.rightMovePercentage=100-this.videoEdit.currentPosition},deep:!0}},methods:{toInt:function(t){return parseInt(t)||0},togglePlayStatus:function(){this.videoEdit.play?this.toggleVideoPause():this.toggleVideoPlay()},toggleVideoPlay:function(){var t=this;this.videoEdit.end-this.currentTime<.01&&(this.videoDom.currentTime=this.videoEdit.start),setTimeout((function(){t.videoDom.play(),t.videoEdit.play=!0}),50)},toggleVideoPause:function(){this.videoDom.pause(),this.videoEdit.play=!1},playEnd:function(){this.videoDom.currentTime=this.videoEdit.start,this.videoDom.pause(),this.videoEdit.play=!1},transformBlob:function(){var t=this;fetch(p.a).then((function(t){return t.blob()})).then((function(e){t.objectURL=URL.createObjectURL(e)}))},initMedaData:function(){var t=this;this.videoDom.addEventListener("loadedmetadata",(function(){t.videoEdit.duration=t.videoDom.duration,t.videoEdit.end=t.videoEdit.duration}));var e=this;this.videoDom.addEventListener("canplay",(function(){e.videoRatio=this.videoHeight/this.videoWidth,e.isPortraitVideo=e.videoRatio>1.5,e.videoUnitWidth=e.isPortraitVideo?28:88,e.thumbCount=Math.ceil(e.thumbsWidth/e.videoUnitWidth),e.videoUnit=e.videoEdit.duration/e.thumbCount;var t=Math.round((e.thumbCount*e.videoUnitWidth-e.thumbsWidth)/2);e.$nextTick((function(){e.$refs["thumbs-inner"].style.marginLeft="".concat(-t,"px")}))})),this.videoDom.addEventListener("timeupdate",(function(){console.log(t.videoDom.currentTime),t.videoEdit.currentPosition=t.videoDom.currentTime/t.videoEdit.duration*100,t.currentTime=t.videoDom.currentTime,t.videoEdit.end-t.currentTime<.01&&t.videoEdit.play&&t.playEnd()}))},handleMoveDown:function(t,e){this.handleMoveStatus=!0,this.handleMoveDirection=e,this.toggleVideoPause(),this.handleClick(t,e)},handleClick:function(t,e){this.videoEdit.currentPosition="left"===e?this.leftMovePercentage:"right"===e?100-this.rightMovePercentage:(t.clientX-this.leftMoveInit)/this.thumbsWidth*100,this.currentTime=(this.videoEdit.currentPosition*this.videoEdit.duration/100).toFixed(4),this.videoDom.currentTime=this.currentTime,"left"!==t.target.dataset.direction||this.handleMoveStatus||(this.leftMovePercentage=this.videoEdit.currentPosition,this.videoEdit.start=this.currentTime),"right"!==t.target.dataset.direction||this.handleMoveStatus||(this.rightMovePercentage=100-this.videoEdit.currentPosition,this.videoEdit.end=this.currentTime),this.videoEdit.currentPosition=this.videoEdit.currentPosition>100?100:this.videoEdit.currentPosition,this.videoEdit.currentPosition=this.videoEdit.currentPosition<0?0:this.videoEdit.currentPosition},getOffset:function(t,e){return e||(e={},e.left=0,e.top=0),t===document.body||null===t?e:(e.top+=t.offsetTop,e.left+=t.offsetLeft,this.getOffset(t.offsetParent,e))},timeTranslate:function(t){var e=Math.floor(t/60);return e<10&&(e="0"+e),e+":"+(t%60/100).toFixed(2).slice(-2)}}},E=g,b=(i("2c49"),Object(d["a"])(E,h,f,!1,null,"57fda144",null)),P=b.exports,y={name:"Home",components:{CusVideo:P}},M=y,T=Object(d["a"])(M,l,v,!1,null,null,null),x=T.exports;n["a"].use(c["a"]);var w=[{path:"/",name:"Home",component:x}],C=new c["a"]({routes:w}),_=C;n["a"].config.productionTip=!1,new n["a"]({router:_,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),o=i.n(n);o.a},"96cf":function(t,e,i){t.exports=i.p+"media/test.0a3cfc3a.mp4"},"9c0c":function(t,e,i){},ad06:function(t,e,i){}});
//# sourceMappingURL=app.8c5e1d9b.js.map