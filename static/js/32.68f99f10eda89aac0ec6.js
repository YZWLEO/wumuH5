webpackJsonp([32],{Q5nB:function(t,s){},"b+YU":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ordertab"},t._l(t.orderList,function(s,i){return e("div",{key:i,staticClass:"order-content",attrs:{slot:"list"},slot:"list"},[e("div",{staticClass:"order-content-header"},[e("p",{staticClass:"header-left"},[t._v("提货单号："+t._s(s.id))]),t._v(" "),1===s.status?e("p",{staticClass:"header-right"},[t._v(t._s(s.status_name))]):2===s.status?e("p",{staticClass:"header-right",staticStyle:{color:"#ccc"}},[t._v(t._s(s.status_name))]):t._e()]),t._v(" "),e("div",{staticClass:"order-content-header"},[e("p",{staticClass:"header-left"},[t._v("订单号："+t._s(s.order_id))]),t._v(" "),1===s.order_info.status&&2===s.order_info.pay_status&&1===s.order_info.ship_status?e("p",{staticClass:"header-right"},[t._v("待发货")]):t._e(),t._v(" "),1===s.order_info.status&&2===s.order_info.pay_status&&3===s.order_info.ship_status&&1===s.order_info.confirm?e("p",{staticClass:"header-right"},[t._v("待收货")]):t._e(),t._v(" "),1===s.order_info.status&&2===s.order_info.pay_status&&3===s.order_info.ship_status&&2===s.order_info.confirm&&1===s.order_info.is_comment?e("p",{staticClass:"header-right",staticStyle:{color:"#e6a200"}},[t._v("待评价")]):t._e(),t._v(" "),1===s.order_info.status&&2===s.order_info.pay_status&&3===s.order_info.ship_status&&2===s.order_info.confirm&&2===s.order_info.is_comment?e("p",{staticClass:"header-right",staticStyle:{color:"#0575f2"}},[t._v("已评价")]):t._e(),t._v(" "),2===s.order_info.status?e("p",{staticClass:"header-right",staticStyle:{color:"#379B2D"}},[t._v("已完成")]):t._e(),t._v(" "),3===s.order_info.status?e("p",{staticClass:"header-right",staticStyle:{color:"#ccc"}},[t._v("已取消")]):t._e()]),t._v(" "),e("yd-list",{attrs:{theme:"4"},nativeOn:{click:function(e){return t.toVerification(s.id)}}},t._l(s.order_items,function(s,i){return e("yd-list-item",{key:i},[e("img",{attrs:{slot:"img",src:s.image_url},slot:"img"}),t._v(" "),e("h3",{staticClass:"goodsname",attrs:{slot:"title"},slot:"title"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"goods",attrs:{slot:"title"},slot:"title"},[t._v(t._s(s.addon))]),t._v(" "),e("yd-list-other",{attrs:{slot:"other"},slot:"other"},[e("div",[e("span",{staticClass:"demo-list-price"},[e("em",[t._v("¥")]),t._v(t._s(s.price))])]),t._v(" "),e("div",[t._v("x "+t._s(s.nums))])])],1)}),1),t._v(" "),e("div",{staticClass:"order-content-footer"},[e("div",{staticClass:"footer-top"},[e("p",{staticClass:"goods",attrs:{slot:"title"},slot:"title"},[t._v("创建时间："+t._s(s.ctime))]),t._v(" "),e("p",{staticClass:"footer-top-left"},[t._v("共计 "+t._s(s.order_items.length)+" 件商品")])]),t._v(" "),e("div",{staticClass:"footer-bottom"},[1===s.status?e("yd-button",{staticClass:"right-btn",attrs:{type:"hollow",shape:"circle"},nativeOn:{click:function(e){return t.toVerification(s.id)}}},[t._v("提货核销")]):t._e(),t._v(" "),2===s.status?e("yd-button",{staticClass:"left-btn",attrs:{type:"hollow",shape:"circle"},nativeOn:{click:function(s){return t.orderDel(i)}}},[t._v("删除")]):t._e()],1)])],1)}),0)},staticRenderFns:[]};var r=e("VU/8")({name:"StoreOrder",data:function(){return{orderList:[]}},mounted:function(){this.getStoreOrderList()},methods:{getStoreOrderList:function(){var t=this;this.$api.storeLadingList({},function(s){s.status&&(t.orderList=s.data)})},toVerification:function(t){this.$router.push({path:"/orderverification",query:{id:t}})},orderDel:function(t){var s=this;this.$dialog.confirm({title:"提示",mes:"确认删除该提货单吗?",opts:function(){s.$api.ladingDel({lading_id:s.orderList[t].id},function(e){e.status&&s.$dialog.toast({mes:e.msg,timeout:1300,callback:function(){s.orderList.splice(t,1)}})})}})}}},i,!1,function(t){e("Q5nB")},"data-v-55830776",null);s.default=r.exports}});
//# sourceMappingURL=32.68f99f10eda89aac0ec6.js.map