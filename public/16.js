webpackJsonp([16],{1259:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{model:{firstName:"",lastName:"",email:"",alamat:"",kelKec:"",kota:""},formOptions:{validationErrorClass:"has-error",validationSuccessClass:"has-success",validateAfterChanged:!0},firstTabSchema:{fields:[{type:"input",inputType:"text",label:"Nama Depan",model:"firstName",required:!0,validator:VueFormGenerator.validators.string},{type:"input",inputType:"text",label:"Nama Belakang",model:"lastName",required:!0,validator:VueFormGenerator.validators.string},{type:"input",inputType:"text",label:"Email",model:"email",required:!0,validator:VueFormGenerator.validators.email}]},secondTabSchema:{fields:[{type:"input",inputType:"text",label:"Alamat",model:"alamat",required:!0,validator:VueFormGenerator.validators.string},{type:"input",inputType:"text",label:"Kelurahan/Kecamatan",model:"kelKec",required:!0,validator:VueFormGenerator.validators.string},{type:"select",label:"Kota",model:"kota",required:!0,validator:VueFormGenerator.validators.string,values:["Serang","Cilegon","Tangerang"]}]}}},methods:{onComplete:function(){miniToastr.success("Yay. Done!","Success")},onComplete2:function(){miniToastr.success("Data Anda sudah Disimpan!","Success"),this.$router.go(this.$router.currentRoute)},validateFirstTab:function(){return this.$refs.firstTabForm.validate()},validateSecondTab:function(){return this.$refs.secondTabForm.validate()},prettyJSON:function(t){if(t)return(t=(t=JSON.stringify(t,void 0,4)).replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(t){var a="number";return/^"/.test(t)?a=/:$/.test(t)?"key":"string":/true|false/.test(t)?a="boolean":/null/.test(t)&&(a="null"),'<span class="'+a+'">'+t+"</span>"})}}}},1260:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("form-wizard",{attrs:{shape:"square",color:"#3498db"},on:{"on-complete":t.onComplete}},[e("div",{staticClass:"text-center mb-3",attrs:{slot:"title"},slot:"title"},[e("h2",{staticClass:"text-dark"},[t._v("Basic example")]),t._v(" "),e("h5",{staticClass:"text-muted"},[t._v("Subtitle")])]),t._v(" "),e("tab-content",{attrs:{title:"Personal details",icon:"fa fa-user"}},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-header"},[t._v("My first tab content")]),t._v(" "),e("div",{staticClass:"card-body"},[t._v("\n          Content\n        ")])])]),t._v(" "),e("tab-content",{attrs:{title:"Additional Info",icon:"fa fa-gear"}},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-header"},[t._v("My second tab content")]),t._v(" "),e("div",{staticClass:"card-body"},[t._v("\n          Content\n        ")])])]),t._v(" "),e("tab-content",{attrs:{title:"Last step",icon:"fa fa-check"}},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-header"},[t._v("My third tab content")]),t._v(" "),e("div",{staticClass:"card-body"},[t._v("\n          Content\n        ")])])])],1),t._v(" "),e("hr",{staticClass:"my-5"}),t._v(" "),e("form-wizard",{attrs:{shape:"square",color:"#3097D1","error-color":"#a94442","back-button-text":"Kembali","next-button-text":"Selanjutnya","finish-button-text":"Simpan"},on:{"on-complete":t.onComplete2}},[e("div",{staticClass:"text-center mb-3",attrs:{slot:"title"},slot:"title"},[e("h2",{staticClass:"text-dark"},[t._v("Advanced example")]),t._v(" "),e("h5",{staticClass:"text-muted"},[t._v("Subtitle")])]),t._v(" "),e("tab-content",{attrs:{title:"Identitas",icon:"fa fa-user","before-change":t.validateFirstTab}},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-header"},[t._v("Identitas Lengkap")]),t._v(" "),e("div",{staticClass:"card-body"},[e("vue-form-generator",{ref:"firstTabForm",attrs:{model:t.model,schema:t.firstTabSchema,options:t.formOptions}})],1)])]),t._v(" "),e("tab-content",{attrs:{title:"Alamat",icon:"fa fa-gear","before-change":t.validateSecondTab}},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-header"},[t._v("Alamat Tinggal")]),t._v(" "),e("div",{staticClass:"card-body"},[e("vue-form-generator",{ref:"secondTabForm",attrs:{model:t.model,schema:t.secondTabSchema,options:t.formOptions}})],1)])]),t._v(" "),e("tab-content",{attrs:{title:"Review Data",icon:"fa fa-check"}},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-header"},[t._v("Identitas Anda sebagai berikut:")]),t._v(" "),e("div",{staticClass:"card-body"},[t.model?e("pre",{domProps:{innerHTML:t._s(t.prettyJSON(t.model))}}):t._e()])])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"alert alert-info mb-5",attrs:{role:"alert"}},[a("ul",{staticClass:"list-unstyled mb-0"},[a("li",[this._v("Package name: "),a("code",[this._v("vue-form-wizard")])]),this._v(" "),a("li",[this._v("Link: "),a("a",{staticClass:"alert-link",attrs:{href:"https://github.com/cristijora/vue-form-wizard",target:"_blank"}},[this._v("GitHub")])])])])}]}},1300:function(t,a,e){var s=e(9)(e(1259),e(1260),!1,null,null,null);t.exports=s.exports}});