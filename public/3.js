webpackJsonp([3],{1219:function(t,e,a){var r=a(9)(null,a(1220),!1,null,null,null);t.exports=r.exports},1220:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ul",{staticClass:"nav nav-tabs card-header-tabs"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"settings.user-profile"}}},[this._v("Info")])],1),this._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"settings.user-password"}}},[this._v("Password")])],1)])])},staticRenderFns:[]}},1231:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(111),s=a.n(r),n=a(516),i=a(1219),o=a.n(i);e.default={components:{"nav-settings":o.a},data:function(){return{form:new Form({name:"",email:""})}},computed:Object(n.b)({user:"authUser",authenticated:"authCheck"}),created:function(){var t=this;this.form.keys().forEach(function(e){t.form[e]=t.user[e]})},methods:{update:function(){var t,e=(t=s.a.mark(function t(){var e,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.patch("/api/settings/profile");case 2:e=t.sent,a=e.data,this.$store.dispatch("updateUser",{user:a});case 5:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function r(s,n){try{var i=e[s](n),o=i.value}catch(t){return void a(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}("next")})});return function(){return e.apply(this,arguments)}}()}}},1232:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-header"},[a("nav-settings")],1),t._v(" "),a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(e){e.preventDefault(),t.update(e)},keydown:function(e){t.form.onKeydown(e)}}},[a("alert-success",{attrs:{form:t.form,message:"Your profile has been updated!"}}),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputName"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",id:"inputName",autofocus:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputEmail"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email",id:"inputEmail"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"email"}})],1),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t._v("Update")])],1)])])},staticRenderFns:[]}},1280:function(t,e,a){var r=a(9)(a(1231),a(1232),!1,null,null,null);t.exports=r.exports}});