(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{309:function(t,e,n){var content=n(341);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("0f1fe7a2",content,!0,{sourceMap:!1})},340:function(t,e,n){"use strict";var r=n(309);n.n(r).a},341:function(t,e,n){(e=n(13)(!1)).push([t.i,"a[data-v-fab7b680]{color:#000!important;text-decoration:none}",""]),t.exports=e},407:function(t,e,n){"use strict";n.r(e);n(47);var r=n(16),o=n(53),c={layout:"default",head:function(){return{title:this.seoObject.page_title,meta:[{hid:"description",name:"description",content:this.seoObject.description},{hid:"keywords",name:"keywords",content:this.seoObject.meta_keyword},{hid:"twitter:card",name:"twitter:card",content:this.seoObject.page_title},{hid:"twitter:title",name:"twitter:title",content:this.seoObject.page_title},{hid:"twitter:description",name:"twitter:description",content:this.seoObject.description},{hid:"og:title",property:"og:title",content:this.seoObject.page_title},{hid:"og:type",property:"og:type",content:"article.text"},{hid:"og:url",property:"og:url",content:""},{hid:"og:description",name:"og:description",content:this.seoObject.description},{hid:"og:image",name:"og:image",content:this.seoObject.meta_image}]}},fetch:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:Object(o.b)({HighRatedArticles:function(t){return t.highRated.HighRatedArticles}}),data:function(){return{currentPage:2,seoObject:{}}},methods:{loadData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("highRated/FetchMoreHighRatedArticles");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}},d=(n(340),n(9)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"high-rated"},[e("Carousel"),this._v(" "),e("Breadcrumb",{attrs:{highRatedActive:!0}})],1)}),[],!1,null,"fab7b680",null);e.default=component.exports}}]);