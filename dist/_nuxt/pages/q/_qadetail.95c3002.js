(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{330:function(t,e,n){var content=n(392);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("1134fbca",content,!0,{sourceMap:!1})},389:function(t,e,n){t.exports=n.p+"img/qa.5f49154.svg"},390:function(t,e,n){t.exports=n.p+"img/ans.33473ae.svg"},391:function(t,e,n){"use strict";var r=n(330);n.n(r).a},392:function(t,e,n){(e=n(13)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]),e.push([t.i,'.qa-list-item[data-v-696c7142]{border:none;font-size:.875rem;line-height:1.25;font-weight:500}a[data-v-696c7142]{color:#000;text-decoration:none}.qa-details[data-v-696c7142]{font-family:"Inter",sans-serif}.image-holder[data-v-696c7142]{padding-left:8px;padding-top:4px;border-radius:5px;margin-right:8px;margin-bottom:4px;background-color:#e4e6eb}',""]),t.exports=e},426:function(t,e,n){"use strict";n.r(e);n(47);var r=n(16),o={layout:"detail",data:function(){return{data:{},relatedData:[],active2:!1,articleView:0}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,n.$axios.$get("http://cdn.resultonlinebd.com"+"/q&a/api/v1/dtls/".concat(n.$route.params.qadetail)).then((function(t){n.articleView=t.view}));case 3:return e.next=5,n.$axios.$put("http://cdn.resultonlinebd.com"+"/q&a/api/v1/dtls/".concat(n.$route.params.qadetail),{view:n.articleView+1},{headers:{Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY"}}).then((function(t){}));case 5:return e.next=7,n.$axios.$get("http://cdn.resultonlinebd.com"+"/q&a/api/v1/dtls/".concat(n.$route.params.qadetail)).then((function(t){n.data=t})).catch((function(t){console.log(t)}));case 7:return e.next=9,n.$axios.$get("http://cdn.resultonlinebd.com"+"/q&a/api/v1/q_related_data/".concat(n.data.catagry.publisher)).then((function(t){n.relatedData=t.results})).catch((function(t){console.log(t)}));case 9:case"end":return e.stop()}}),e)})))()},methods:{}},c=(n(391),n(9)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"qa-details"},[t.$fetchState.pending?r("div",{staticClass:"text-center pt-4"},[r("h4",[t._v("Loading...")])]):r("b-row",{staticClass:"pt-4"},[r("b-col",{staticClass:"mb-3",attrs:{cols:"12",sm:"12",md:"9",lg:"9",xl:"9"}},[t.data.is_active?r("div",[r("div",{staticClass:"question mb-4"},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"image-holder"},[r("b-img",{staticClass:"mr-2",attrs:{height:"30",width:"30",alt:"question logo",src:n(389)}})],1),t._v(" "),r("h4",[r("strong",[t._v("Question")])])]),t._v(" "),r("b-card",{attrs:{"no-body":""}},[r("div",{staticClass:"m-4"},[r("div",{staticClass:"d-flex w-100"},[r("div",[r("h4",[r("strong",[t._v(t._s(t.data.title))])])]),t._v(" "),r("div",{staticClass:"ml-auto"},[r("div",{staticClass:"d-flex pt-1"},[r("b-icon",{staticClass:" ml-2 mr-1 my-auto",attrs:{icon:"eye-fill"}}),t._v("\n                    "+t._s(t.data.view)+"\n                    "),r("b-icon",{staticClass:"mt-1 ml-4 h5 my-auto",staticStyle:{cursor:"pointer"},attrs:{icon:"reply"},on:{click:function(e){t.active2=!t.active2}}})],1)])]),t._v(" "),r("p",{staticClass:"text-muted"},[t._v("\n                "+t._s(t.data.catagry.publisher)+"\n              ")]),t._v(" "),r("p",[t._v(t._s(t.data.details))])])])],1),t._v(" "),r("div",{staticClass:"answer pt-4"},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"image-holder"},[r("b-img",{staticClass:"mr-2",attrs:{height:"30",width:"30",alt:"answare logo",src:n(390)}})],1),t._v(" "),r("h4",[r("strong",[t._v("Answere")])])]),t._v(" "),r("b-card",{attrs:{"no-body":""}},[r("div",{staticClass:"m-4"},[r("div",{domProps:{innerHTML:t._s(t.data.awnsr_qna)}})])])],1)]):t._e()]),t._v(" "),r("b-col",{attrs:{cols:"12",sm:"12",md:"3",lg:"3",xl:"3"}},[r("b-card",{attrs:{"no-body":""}},[r("b-list-group",[r("h5",{staticClass:"mb-3 pt-3 ml-3",staticStyle:{color:"#71839f"}},[t._v("\n            Suggested Topics\n          ")]),t._v(" "),t._l(t.relatedData,(function(i,e){return r("b-list-group-item",{key:e,staticClass:"qa-list-item"},[i.is_active?r("div",[r("nuxt-link",{attrs:{prefetch:"",to:"/q/"+i.slug}},[r("div",[t._v("\n                  "+t._s(i.title)+"\n                ")])])],1):t._e()])}))],2)],1)],1)],1),t._v(" "),r("vs-dialog",{attrs:{width:"470px","not-center":""},scopedSlots:t._u([{key:"header",fn:function(){return[r("h6",{staticClass:"pt-3"},[t._v("Share this Question and Answere")])]},proxy:!0}]),model:{value:t.active2,callback:function(e){t.active2=e},expression:"active2"}},[t._v(" "),r("ShareModal",{attrs:{pathUrl:"/q&a/api/v1/dtls/"+this.$route.params.qadetail}})],1)],1)}),[],!1,null,"696c7142",null);e.default=component.exports}}]);