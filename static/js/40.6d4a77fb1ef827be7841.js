webpackJsonp([40],{rpem:function(t,e){},vdVF:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{tab:parseInt(this.GLOBAL.getStorage("loginType"))||0,invitecode:this.GLOBAL.getStorage("invitecode")||"",mobile:null,password:null,code:null,isShowCaptcha:!1,captcha:"",localCaptcha:"",countDown:!1,authList:[]}},created:function(){var t=this;this.GLOBAL.getStorage("user_token")&&this.$dialog.toast({mes:"你已经登录!",timeout:2e3,callback:function(){t.$router.go(-1)}}),this.GLOBAL.isWeiXinBrowser()&&this.getAuth();var e=this.$route.query.redirect;(""+e).indexOf("zc")>=0&&window.localStorage.setItem("isZc",e)},computed:{rightMobile:function(){var t={};return this.mobile?/^1[345678]{1}\d{9}$/gi.test(this.mobile)?t.status=!0:(t.status=!1,t.msg="手机号格式不正确"):(t.status=!1,t.msg="请输入手机号"),t}},methods:{itemClick:function(t){this.tab=t,this.GLOBAL.setStorage("loginType",t)},sendCode:function(){var t=this;this.rightMobile.status?(this.$dialog.loading.open("发送中..."),setTimeout(function(){t.$dialog.loading.close(),t.$api.sms({mobile:t.mobile,code:"login"},function(e){e.status&&(t.countDown=!0,t.$dialog.toast({mes:e.msg,icon:"success",timeout:1e3}))})},1e3)):this.$dialog.toast({mes:this.rightMobile.msg,timeout:1e3})},login:function(){var t=this;if(this.rightMobile.status)if(this.tab)if(this.code){var e={mobile:this.mobile,code:this.code,invitecode:this.invitecode};this.$api.smsLogin(e,function(e){e.status&&(t.GLOBAL.setStorage("user_token",e.data),t.redirectHandler())})}else this.$dialog.toast({mes:"请输入短信验证码!",timeout:1e3});else if(this.password){var i={mobile:this.mobile,password:this.password};this.isShowCaptcha&&(i.captcha=this.captcha),this.$api.login(i,function(e){e.status?(t.GLOBAL.setStorage("user_token",e.data),t.redirectHandler()):(10013!==e.data&&10012!==e.data||(t.isShowCaptcha=!0),t.isShowCaptcha&&(t.localCaptcha=t.GLOBAL.getCaptcha()))})}else this.$dialog.toast({mes:"请输入密码!",timeout:1e3});else this.$dialog.toast({mes:this.rightMobile.msg,timeout:1e3})},redirectHandler:function(){this.$router.replace(this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/")},toRegister:function(){this.$route.query.redirect?this.$router.replace({path:"/register",query:{redirect:decodeURIComponent(this.$route.query.redirect)}}):this.$router.replace({path:"/register"})},reloadCaptcha:function(){this.localCaptcha=this.GLOBAL.getCaptcha()},getAuth:function(){var t=this;this.$api.getTrustLogin({url:window.location.protocol+"//"+window.location.host,uuid:this.genNonDuplicateID()},function(e){e.status&&(t.authList=e.data)})},toAuth:function(t){window.location.href=t},genNonDuplicateID:function(){var t=Math.random().toString(36).substr(3);return this.GLOBAL.setStorage("uuid",t),t}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login"},[t.authList.length?i("div",t._l(t.authList,function(e,o){return i("div",{key:o},t._l(e,function(e,o){return i("div",{key:o,staticStyle:{"padding-top":"1rem"}},[i("img",{staticStyle:{width:"1.5rem"},attrs:{src:e.ico,alt:""}}),t._v(" "),i("div",[i("yd-button",{attrs:{size:"large",type:"primary",shape:"circle"},nativeOn:{click:function(i){return t.toAuth(e.url)}}},[t._v("授权登录")])],1)])}),0)}),0):t._e()])},staticRenderFns:[]};var a=i("VU/8")(o,s,!1,function(t){i("rpem")},null,null);e.default=a.exports}});
//# sourceMappingURL=40.6d4a77fb1ef827be7841.js.map