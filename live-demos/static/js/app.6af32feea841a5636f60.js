webpackJsonp([0],{"34jS":function(t,a,n){"use strict";function s(t){n("deE5")}var e=n("ByW5"),r=n("s+kB"),i=n("VU/8"),o=s,u=i(e.a,r.a,o,null,null);a.a=u.exports},"3y/i":function(t,a,n){"use strict";function s(t){n("eKG9")}var e=n("kFVu"),r=n("ASfw"),i=n("VU/8"),o=s,u=i(e.a,r.a,o,null,null);a.a=u.exports},ASfw:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"rotary-table"},[n("h3",{staticClass:"title"},[t._v("vue-实现轮盘抽奖")]),n("div",{staticClass:"table-container"},[n("div",{staticClass:"table",style:{transform:"rotate("+(360*t.turns+t.allDeg)+"deg)","transition-duration":t.duration/1e3+"s"}},[n("img",{attrs:{src:"./static/rotary-table/转盘.png"}}),t._l(t.prizes,function(a,s){return n("div",{staticClass:"prize",class:"prize-"+s,style:{transform:"rotate("+360*s/t.prizes.length+"deg)"}},[t._v(t._s(a))])})],2),n("div",{staticClass:"center-round",on:{click:t.run}},[n("img",{staticClass:"round",attrs:{src:"./static/rotary-table/指针圆盘.png"}}),n("img",{staticClass:"pointer",attrs:{src:"./static/rotary-table/指针.png"}})])]),n("div",{staticClass:"result"},[n("span",{staticClass:"color"},[t._v("抽检结果: ")]),n("span",[t._v(t._s(t.result?t.result:"未开奖"))])])])},e=[],r={render:s,staticRenderFns:e};a.a=r},ByW5:function(t,a,n){"use strict";a.a={name:"nav",data:function(){return{msg:"this is from nav.vue",tags:[{tag:"转盘抽奖",to:"/rotary-table"}]}},methods:{}}},M93x:function(t,a,n){"use strict";function s(t){n("Zjz/")}var e=n("xJD8"),r=n("QFSn"),i=n("VU/8"),o=s,u=i(e.a,r.a,o,null,null);a.a=u.exports},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=n("7+uW"),e=n("M93x"),r=n("YaEn");s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:e.a}})},QFSn:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("my-nav"),n("router-view")],1)},e=[],r={render:s,staticRenderFns:e};a.a=r},YaEn:function(t,a,n){"use strict";var s=n("7+uW"),e=n("/ocq"),r=(n("qSdX"),n("3y/i"));s.a.use(e.a),a.a=new e.a({routes:[{path:"/",redirect:"/rotary-table"},{path:"/rotary-table",name:"rotary-table",component:r.a}]})},"Zjz/":function(t,a){},bCGF:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"hello"},[n("h3",[t._v(t._s(t.msg))])])},e=[],r={render:s,staticRenderFns:e};a.a=r},deE5:function(t,a){},eKG9:function(t,a){},kFVu:function(t,a,n){"use strict";a.a={name:"rotary-table",data:function(){return{msg:"this is from rotary-table.vue",duration:6e3,result:"",prizes:["谢谢参与","二等奖","欢迎再来","优秀奖","三等奖","一等奖"],turns:0,isRuning:!1,randomDeg:0,allDeg:0}},methods:{run:function(){var t=this;this.isRuning||(this.result="",this.randomDeg=Math.ceil(360*Math.random()),this.allDeg+=this.randomDeg,this.turns+=10,this.isRuning=!0,setTimeout(function(){t.isRuning=!1;var a=t.allDeg%360,n=360/t.prizes.length;console.log(n,a,(n/2+a)%360);var s=t.prizes.length-Math.floor((n/2+a)%360/n);console.log(s),s=6==s?0:s,t.result=t.prizes[s]},this.duration))}}}},kteR:function(t,a){},pMZz:function(t,a,n){"use strict";a.a={name:"hello",data:function(){return{msg:"this is from hello.vue"}},methods:{}}},qSdX:function(t,a,n){"use strict";function s(t){n("kteR")}var e=n("pMZz"),r=n("bCGF"),i=n("VU/8"),o=s,u=i(e.a,r.a,o,null,null);u.exports},"s+kB":function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"nav"},t._l(t.tags,function(a){return n("li",{staticClass:"nav-tag"},[n("router-link",{staticClass:"tag",attrs:{to:a.to}},[t._v(t._s(a.tag))])],1)}))},e=[],r={render:s,staticRenderFns:e};a.a=r},xJD8:function(t,a,n){"use strict";var s=n("34jS");console.log(s.a),a.a={name:"app",components:{myNav:s.a}}}},["NHnr"]);
//# sourceMappingURL=app.6af32feea841a5636f60.js.map
