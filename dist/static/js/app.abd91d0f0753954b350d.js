webpackJsonp([1],{"/vYY":function(t,i){},"26OU":function(t,i){},"9n10":function(t,i){},DTDQ:function(t,i){},EXCj:function(t,i){},F90O:function(t,i){},FHuG:function(t,i){},GptR:function(t,i){},Hcod:function(t,i){},IsB5:function(t,i){},LHYm:function(t,i){},M6Sr:function(t,i){},"N+zL":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=e("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);i.default=n.exports},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),n={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("keep-alive",[i("router-view")],1)],1)},staticRenderFns:[]};var a=e("VU/8")({name:"Home"},n,!1,function(t){e("F90O")},null,null).exports,r=e("DVXL"),c=e.n(r),o=e("/ocq"),l=e("Dd8w"),u=e.n(l),h=e("NYxO"),p={name:"HomeHeader",computed:u()({},Object(h.b)(["city"]))},d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[t._v(t._s(t.city)+"\n        "),e("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header-left"},[i("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header-input"},[i("span",{staticClass:"iconfont"},[this._v("")]),this._v(" 输入城市/景点/游玩主题")])}]};var v=e("VU/8")(p,d,!1,function(t){e("26OU")},"data-v-1b4051fc",null).exports,m={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:3e3,autoplayDisableOnInteraction:!1}}},computed:{showSwiper:function(){return this.swiperList.length}}},f={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"wrapper"},[this.showSwiper?i("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var _=e("VU/8")(m,f,!1,function(t){e("FHuG")},"data-v-3788676d",null).exports,g={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",autoplay:0}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(i,e){var s=Math.floor(e/8);t[s]||(t[s]=[]),t[s].push(i)}),t}}},C={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"icon-wrapper"},[e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(i,s){return e("swiper-slide",{key:s},t._l(i,function(i){return e("div",{key:i.id,staticClass:"icon"},[e("div",{staticClass:"icon-img-wrapper"},[e("img",{staticClass:"icon-img",attrs:{src:i.imgUrl}})]),t._v(" "),e("h4",{staticClass:"icon-title"},[t._v(t._s(i.desc))])])}),0)}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var w=e("VU/8")(g,C,!1,function(t){e("S0px")},"data-v-51ba362e",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("ul",{staticClass:"near-wrapper"},[i("li",{staticClass:"near-list near-list-border"},[i("span",{staticClass:"iconfont near-list-icon"},[this._v("")]),this._v(" "),i("span",{staticClass:"near-list-title"},[this._v("附近")])]),this._v(" "),i("li",{staticClass:"near-list"},[i("span",{staticClass:"iconfont near-list-icon"},[this._v("")]),this._v(" "),i("span",{staticClass:"near-list-title"},[this._v("必游榜单")])])])}]};var k=e("VU/8")({name:"HomeNearby"},y,!1,function(t){e("cMB2")},"data-v-5e61f240",null).exports,b={name:"HomeWeekhot",props:{topList:Array},data:function(){return{topSight:[],topIconList:["http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png","http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png","http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png"]}}},I={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weekhot-wrapper"},[t._m(0),t._v(" "),e("ul",{staticClass:"weekhot-item-wrapper"},t._l(t.topList,function(i,s){return e("router-link",{key:i.id,staticClass:"weekhot-item",attrs:{tag:"li",to:"/detail/"+i.id}},[e("img",{staticClass:"weekhot-item-img",attrs:{src:i.imgUrl}}),t._v(" "),e("h5",{staticClass:"weekhot-tiem-title"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"price-wrapper"},[e("span",{staticClass:"price"},[t._v("¥"+t._s(i.price))]),e("span",{staticClass:"price-state"},[t._v("起")])]),t._v(" "),s<3?e("div",{staticClass:"weekhot-top"},[e("img",{attrs:{src:t.topIconList[s]}})]):t._e()])}),1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"weekhot-head"},[i("div",{staticClass:"weekhot-title-wrapper"},[i("span",{staticClass:"weekhot-title-icon iconfont"},[this._v("")]),this._v(" "),i("h3",{staticClass:"weekhot-title"},[this._v("本周热门榜单")])]),this._v(" "),i("div",{staticClass:"all-list"},[this._v("\n      全部榜单"),i("span",{staticClass:"all-list-icon iconfont"},[this._v("")])])])}]};var $=e("VU/8")(b,I,!1,function(t){e("yCCG")},"data-v-3fafc5b3",null).exports,S={name:"HomeLike",props:{sight:Array},data:function(){return{ticketMessage:["http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png","http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png","http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png"]}}},x={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"like"},[t._m(0),t._v(" "),e("ul",{staticClass:"item-list-wrapper"},t._l(t.sight,function(i){return e("router-link",{key:i.id,staticClass:"item-wrapper border-bottom",attrs:{tag:"li",to:"/Detail/"+i.id}},[e("div",{staticClass:"item-img"},[e("img",{attrs:{src:i.imgUrl}}),t._v(" "),e("div",{staticClass:"item-img-mes"})]),t._v(" "),e("div",{staticClass:"item-message"},[e("div",{staticClass:"item-title"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"item-estimate"},[e("div",{staticClass:"star"},[t._v("*****")]),t._v(" "),e("span",[t._v(t._s(i.hits)+"条评论")])]),t._v(" "),e("div",{staticClass:"item-price"},[e("div",{staticClass:"price-wrapper"},[e("span",[t._v("¥")]),e("span",{staticClass:"price"},[t._v(t._s(i.price))]),e("span",{staticClass:"price-desc"},[t._v("起")])]),t._v(" "),e("div",{staticClass:"seat"},[t._v(t._s(i.seat))])])])])}),1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"like-head"},[i("span",{staticClass:"iconfont like-icon"},[this._v("")]),i("span",[this._v("猜你喜欢")])])}]};var L=e("VU/8")(S,x,!1,function(t){e("/vYY")},"data-v-5c100aa4",null).exports,V={name:"HomeWeekend",props:{weekendSight:Array}},E={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"weekend"},[e("div",{staticClass:"weekend-head"},[t._v("周末去哪儿")]),t._v(" "),e("ul",{staticClass:"item-list-wrapper"},t._l(t.weekendSight,function(i){return e("li",{key:i.id,staticClass:"weekend-item-wrapper"},[e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:i.imgUrl}})]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(i.title))])])}),0)])},staticRenderFns:[]};var H=e("VU/8")(V,E,!1,function(t){e("bOwd")},"data-v-274dc048",null).exports,F=e("mtWM"),O=e.n(F),U={name:"Home",components:{HomeHeader:v,HomeSwiper:_,HomeIcons:w,HomeNearby:k,HomeWeekhot:$,HomeLike:L,HomeWeekend:H},data:function(){return{lastCity:"",swiperList:[],iconList:[],topList:[],sight:[],weekendSight:[]}},computed:u()({},Object(h.b)(["city"])),methods:{getHomeInfo:function(){O.a.get("/api/index?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var i=t.data;this.swiperList=i.swiperList,this.iconList=i.iconList,this.topList=i.topList,this.sight=i.sight,this.weekendSight=i.weekendSight}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},R={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"home"}},[e("home-header"),t._v(" "),e("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),e("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),e("home-nearby"),t._v(" "),e("home-weekhot",{attrs:{topList:t.topList}}),t._v(" "),e("home-like",{attrs:{sight:t.sight}}),t._v(" "),e("home-weekend",{attrs:{weekendSight:t.weekendSight}})],1)},staticRenderFns:[]};var D=e("VU/8")(U,R,!1,function(t){e("VS0G")},null,null).exports,T={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"head-wrapper"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont back-left"},[this._v("")])]),this._v(" "),i("h3",{staticClass:"head-title"},[this._v("城市选择")])],1)},staticRenderFns:[]};var N=e("VU/8")({name:"CityHeader"},T,!1,function(t){e("xvM6")},"data-v-2aa94dd2",null).exports,z=e("GQaK"),M={name:"CitySearch",data:function(){return{inputValue:"",valueList:[],timer:null,noValue:!1}},props:{cities:Object},methods:{cityClick:function(t){this.$store.commit("changeCity",t),this.$router.push("/"),this.inputValue=""}},watch:{inputValue:function(){var t=this;this.inputValue?(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=[];for(var e in t.cities)t.cities[e].forEach(function(e){(e.spell.indexOf(t.inputValue)>-1||e.name.indexOf(t.inputValue)>-1)&&i.push(e)});t.valueList=i,t.valueList.length?t.noValue=!1:t.noValue=!0},100)):this.valueList=[]}},mounted:function(){this.scroll=new z.a(this.$refs.listWrapwer,{click:!0})}},A={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"search"},[e("div",{staticClass:"search-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市"},domProps:{value:t.inputValue},on:{input:function(i){i.target.composing||(t.inputValue=i.target.value)}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.inputValue,expression:"this.inputValue"}],ref:"listWrapwer",staticClass:"list-wrapper"},[e("ul",[t._l(this.valueList,function(i,s){return e("li",{key:s,staticClass:"item border-bottom",on:{click:function(e){return t.cityClick(i.name)}}},[t._v(t._s(i.name))])}),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.noValue,expression:"noValue"}],staticClass:"item"},[t._v("未找到匹配项")])],2)])])},staticRenderFns:[]};var j=e("VU/8")(M,A,!1,function(t){e("GptR")},"data-v-fab160ea",null).exports,G={name:"List",props:{cities:Object,hotCities:Array,letter:String},methods:{cityClick:function(t){this.$store.commit("changeCity",t),this.$router.push("/")}},watch:{letter:function(){if(this.letter){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},mounted:function(){this.scroll=new z.a(this.$refs.wrapper,{click:!0})}},B={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"wrapper",staticClass:"city-list-wrapper"},[e("div",[e("div",{staticClass:"city hot-city"},[e("div",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),e("div",{staticClass:"item-wrapper"},t._l(t.hotCities,function(i){return e("div",{key:i.id,staticClass:"item",on:{click:function(e){return t.cityClick(i.name)}}},[t._v(t._s(i.name))])}),0)]),t._v(" "),t._l(t.cities,function(i,s){return e("div",{key:s,ref:s,refInFor:!0,staticClass:"city"},[e("div",{staticClass:"title"},[t._v(t._s(s))]),t._v(" "),e("div",{staticClass:"item-wrapper"},t._l(i,function(i){return e("div",{key:i.id,staticClass:"item",on:{click:function(e){return t.cityClick(i.name)}}},[t._v(t._s(i.name))])}),0)])})],2)])},staticRenderFns:[]};var Y=e("VU/8")(G,B,!1,function(t){e("uE5V")},"data-v-ce85f02c",null).exports,q={name:"CityLetter",data:function(){return{touchStatus:!1,topOffset:0,timer:null}},props:{cities:Object},computed:{letter:function(){var t=[];for(var i in this.cities)t.push(i);return t}},updated:function(){this.topOffset=this.$refs.A[0].offsetTop},methods:{letterClick:function(t){this.$emit("letterClick",t.target.innerText)},touchEnter:function(t){this.touchStatus=!0},touchMove:function(t){var i=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=t.touches[0].clientY-86,s=Math.floor((e-i.topOffset)/16);s>=0&&s<i.letter.length&&i.$emit("letterClick",i.letter[s])},16))},touchLeave:function(){this.touchStatus=!1}}},W={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"letter-wrapper"},t._l(t.letter,function(i,s){return e("div",{key:s,ref:i,refInFor:!0,staticClass:"letter",on:{click:t.letterClick,touchstart:function(i){return i.preventDefault(),t.touchEnter(i)},touchmove:t.touchMove,touchend:t.touchLeave}},[t._v(t._s(i))])}),0)},staticRenderFns:[]};var P={name:"City",data:function(){return{cities:{},hotCities:[],letter:""}},components:{CityHeader:N,CitySearch:j,CityList:Y,CityLetter:e("VU/8")(q,W,!1,function(t){e("d6dB")},"data-v-47515b8a",null).exports},methods:{getCityInfo:function(){O.a.get("/api/city").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var i=t.data;this.cities=i.cities,this.hotCities=i.hotCities}},letterClick:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},X={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"city"}},[e("city-header"),t._v(" "),e("city-search",{attrs:{cities:t.cities}}),t._v(" "),e("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),e("city-letter",{attrs:{cities:t.cities},on:{letterClick:t.letterClick}})],1)},staticRenderFns:[]};var Q=e("VU/8")(P,X,!1,function(t){e("DTDQ")},null,null).exports,K={name:"DetailHeader",data:function(){return{showHead:!0,style:{opacity:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;if(t>30){this.showHead=!0;var i=t/200;this.style=i>1?1:{opacity:i}}else this.showHead=!1}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},J={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:this.showHead,expression:"showHead"}],staticClass:"head-wrapper",style:this.style},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont back-left"},[this._v("")])]),this._v(" "),i("h3",{staticClass:"head-title"},[this._v("重庆长江索道")])],1)},staticRenderFns:[]};var Z=e("VU/8")(K,J,!1,function(t){e("eaj9")},"data-v-3ee7d112",null).exports,tt={name:"CommonGallery",data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0,initialSlide:this.imgIndex,speed:150}}},props:{sightImgs:{type:Array},imgIndex:Number},methods:{galleryClick:function(){this.$emit("close")}},watch:{imgIndex:function(){this.swiperOptions.initialSlide=this.imgIndex,console.log(this.swiperOptions.initialSlide)}}},it={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"gallery",on:{click:this.galleryClick}},[i("div",{staticClass:"gallery-img"},[i("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.sightImgs,function(t,e){return i("swiper-slide",{key:e},[i("img",{staticClass:"img",attrs:{src:t}})])}),this._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var et=e("VU/8")(tt,it,!1,function(t){e("IsB5")},"data-v-0f09e9b4",null).exports,st={name:"DetailBanner",data:function(){return{imgsLength:1}},props:{sightName:String,bannerImg:String,sightImgs:Array},components:{CommonGallery:et},watch:{sightImgs:function(t){this.imgsLength=t.length}},methods:{imgClick:function(){this.$router.push("/sightimgs")}},deactivated:function(){this.$bus.emit("imgShow",this.sightImgs)}},nt={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"banner"},[e("div",{staticClass:"detail-banner-wrapper"},[e("div",{staticClass:"banner-img-wrapper",on:{click:t.imgClick}},[e("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}})]),t._v(" "),e("div",{staticClass:"img-icon iconfont"},[e("span",{staticClass:"icon"},[t._v("")]),e("span",{staticClass:"num"},[t._v(t._s(t.imgsLength))])]),t._v(" "),e("div",{staticClass:"img-title"},[t._v(t._s(t.sightName))]),t._v(" "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"detail-back iconfont"},[t._v("")])])],1)])},staticRenderFns:[]};var at=e("VU/8")(st,nt,!1,function(t){e("Hcod")},"data-v-0418bc1d",null).exports,rt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"information"},[e("div",{staticClass:"introduce"},[e("div",{staticClass:"title"},[e("h1",[t._v("景点简介")]),t._v(" "),e("span",[t._v("开放时间、贴士")])]),t._v(" "),e("span",{staticClass:"goIcon iconfont"},[t._v("")])]),t._v(" "),e("div",{staticClass:"address iconfont border-top"},[e("div",{staticClass:"address-name title"},[t._v("重庆市渝中区新华路151号")]),t._v(" "),e("span",{staticClass:"goIcon"},[t._v("")])])])}]};var ct=e("VU/8")({name:"DetailInformation"},rt,!1,function(t){e("eVTy")},"data-v-a25f3b2a",null).exports,ot={name:"DetailTickets",props:{tickets:Array}},lt={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tickets"},[t._m(0),t._v(" "),t._l(this.tickets,function(i,s){return e("div",{key:s,staticClass:"ticket-wrapper border-top"},[e("div",{staticClass:"ticket-title-wrapper"},[e("h1",{staticClass:"ticket-title"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"time iconfont"},[e("span",[t._v("")]),t._v(t._s(i.time)+"前可订明日")])]),t._v(" "),e("div",{staticClass:"ticket-price-wrapper"},[e("div",{staticClass:"ticket-price"},[e("em",[t._v("¥")]),t._v(t._s(i.price))]),t._v(" "),e("button",[t._v("预定")])])])})],2)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tickets-head iconfont"},[i("span",{staticClass:"goodIcon"},[this._v("")]),i("span",{staticClass:"title"},[this._v("超值推荐")])])}]};var ut={name:"Detail",data:function(){return{sightName:"",bannerImg:"",sightImgs:[],tickets:[]}},components:{DetailBanner:at,DetailInforamtion:ct,DetailTickets:e("VU/8")(ot,lt,!1,function(t){e("h0Lm")},"data-v-db592fa2",null).exports,DetailHeader:Z},methods:{getDetailInfo:function(){O.a.get("/api/detail").then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){if((t=t.data).ret&&t.data){var i=t.data;this.sightName=i.sightName,this.bannerImg=i.bannerImg,this.sightImgs=i.sightImgs,this.tickets=i.ticketsList.tickets}}},created:function(){this.getDetailInfo()}},ht={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"detail"},[i("detail-header"),this._v(" "),i("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,sightImgs:this.sightImgs}}),this._v(" "),i("detail-inforamtion"),this._v(" "),i("detail-tickets",{attrs:{tickets:this.tickets}})],1)},staticRenderFns:[]};var pt=e("VU/8")(ut,ht,!1,function(t){e("LHYm")},"data-v-7d3d2e23",null).exports,dt={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var vt={name:"DetailSightImgs",data:function(){return{galleryShow:!1,imgIndex:0,sightImgs:[]}},components:{CommonGallery:et,FadeAnimation:e("VU/8")({name:"FadeAnimation"},dt,!1,function(t){e("n1FD")},"data-v-3a240386",null).exports},methods:{backRouter:function(){this.$router.go(-1)},imgClick:function(){this.galleryShow=!this.galleryShow},imgTouch:function(t){var i=this;this.$refs.img.forEach(function(t,e){var s=i;t.onclick=function(){s.imgIndex=e}})}},created:function(){var t=this;this.$bus.on("imgShow",function(i){t.sightImgs=i})},mounted:function(){this.scroll=new z.a(this.$refs.wrapper,{click:!0})},deactivated:function(){this.$bus.off("imgShow")}},mt={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"sight-imgs"},[e("div",{staticClass:"sight-img-header boder-bottom"},[e("h1",{staticClass:"title"},[t._v("景区图片")]),t._v(" "),e("div",{staticClass:"back-icon iconfont",on:{click:t.backRouter}},[t._v("")])]),t._v(" "),e("div",{ref:"wrapper",staticClass:"sight-imgs-wrapper"},[e("div",{staticClass:"sight-content"},t._l(t.sightImgs,function(i,s){return e("div",{key:s,ref:"img",refInFor:!0,staticClass:"img-wrapper"},[e("img",{staticClass:"img",attrs:{src:i},on:{click:t.imgClick,touchstart:t.imgTouch}})])}),0)]),t._v(" "),e("fade-animation",[t.galleryShow?e("common-gallery",{attrs:{sightImgs:t.sightImgs,imgIndex:t.imgIndex},on:{close:t.imgClick}}):t._e()],1)],1)},staticRenderFns:[]};var ft=e("VU/8")(vt,mt,!1,function(t){e("EXCj")},"data-v-00452c49",null).exports;s.a.use(o.a);var _t=new o.a({routes:[{path:"/",name:"Home",component:D},{path:"/city",name:"City",component:Q},{path:"/detail/:id",name:"Detail",component:pt},{path:"/sightimgs",name:"SightImgs",component:ft}]}),gt="重庆";try{localStorage.city&&(gt=localStorage.city)}catch(t){}var Ct={city:gt},wt={changeCity:function(t,i){t.city=i;try{localStorage.city=i}catch(t){}}};s.a.use(h.a);var yt=new h.a.Store({state:Ct,mutations:wt}),kt=e("fC7K"),bt=e("F3EI"),It=e.n(bt);e("9n10"),e("M6Sr"),e("TzC8"),e("v2ns");s.a.config.productionTip=!1,c.a.attach(document.body),s.a.use(It.a),s.a.use(kt.a),new s.a({el:"#app",router:_t,store:yt,VueBus:kt.a,components:{App:a},template:"<App/>"})},S0px:function(t,i){},TzC8:function(t,i){},VS0G:function(t,i){},bOwd:function(t,i){},cMB2:function(t,i){},d6dB:function(t,i){},eVTy:function(t,i){},eaj9:function(t,i){},h0Lm:function(t,i){},n1FD:function(t,i){},pYmz:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=e("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,i=function(){if(!t.swiper&&s){delete t.options.notNextTick;var i=!1;for(var e in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(e)&&t.options[e]&&(i=!0,t.defaultSwiperClasses[e]=t.options[e]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};i?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?i():this.$nextTick(i)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),e("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=e("VU/8")(n,a,!1,null,null,null);i.default=r.exports},uE5V:function(t,i){},v2ns:function(t,i){},xvM6:function(t,i){},yCCG:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.abd91d0f0753954b350d.js.map