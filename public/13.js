webpackJsonp([13],{1276:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{val:window.location.href,bgColor:"#FFFFFF",fgColor:"#000000",size:200}}}},1277:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("div",{staticClass:"card border-info mb-3"},[o("div",{staticClass:"card-header bg-transparent border-info"},[t._v("Settings")]),t._v(" "),o("div",{staticClass:"card-body"},[o("div",{staticClass:"form-row"},[o("div",{staticClass:"col-sm form-group"},[o("label",{attrs:{for:"size"}},[t._v("size(px)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],staticClass:"form-control",attrs:{type:"number",id:"size"},domProps:{value:t.size},on:{input:function(e){e.target.composing||(t.size=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-sm form-group"},[o("label",{attrs:{for:"background"}},[t._v("background")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.bgColor,expression:"bgColor"}],staticClass:"form-control p-0",staticStyle:{height:"38px"},attrs:{type:"color",id:"background"},domProps:{value:t.bgColor},on:{input:function(e){e.target.composing||(t.bgColor=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-sm form-group"},[o("label",{attrs:{for:"foreground"}},[t._v("foreground")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.fgColor,expression:"fgColor"}],staticClass:"form-control p-0",staticStyle:{height:"38px"},attrs:{type:"color",id:"foreground"},domProps:{value:t.fgColor},on:{input:function(e){e.target.composing||(t.fgColor=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-12 form-group mb-0"},[o("label",{attrs:{for:"value"}},[t._v("value")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"form-control",attrs:{rows:"3",cols:"80",id:"value"},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}})])])])]),t._v(" "),o("div",{staticClass:"card text-dark bg-light mb-3"},[o("div",{staticClass:"card-header"},[t._v("QRcode")]),t._v(" "),o("div",{staticClass:"card-body"},[o("qrcode",{staticClass:"d-block mx-auto",attrs:{value:t.val,options:{background:t.bgColor,foreground:t.fgColor,size:t.size,level:"H"},tag:"img"}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alert alert-info mb-5",attrs:{role:"alert"}},[e("ul",{staticClass:"list-unstyled mb-0"},[e("li",[this._v("Package name: "),e("code",[this._v("@xkeshi/vue-qrcode")])]),this._v(" "),e("li",[this._v("Link: "),e("a",{staticClass:"alert-link",attrs:{href:"https://github.com/xkeshi/vue-qrcode",target:"_blank"}},[this._v("GitHub")])])])])}]}},1310:function(t,e,o){var a=o(9)(o(1276),o(1277),!1,null,null,null);t.exports=a.exports}});