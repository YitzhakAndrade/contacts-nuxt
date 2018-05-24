webpackJsonp([2],{"/Q08":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("md-button",{staticClass:"md-raised",attrs:{to:"/contacts/"}},[t._v("Back")]),a("md-button",{staticClass:"md-raised",on:{click:function(e){t.addPhone()}}},[t._v("Add Phone")]),a("md-button",{staticClass:"md-raised",on:{click:function(e){t.addEmail()}}},[t._v("Add E-mail")]),t.contact.mongoId?a("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.deleteContact(t.contact.mongoId)}}},[t._v("Delete Contact")]):t._e(),t.contact?a("div",[a("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[a("md-icon",[t._v("account_circle")]),a("label",[t._v("Name")]),a("md-input",{model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}})],1),t._l(t.contact.phones,function(e,n){return a("div",{key:"phone"+n,staticClass:"md-layout"},[a("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[a("md-icon",[t._v("description")]),a("label",[t._v("Label")]),a("md-input",{model:{value:e.label,callback:function(a){t.$set(e,"label",a)},expression:"phone.label"}})],1),a("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[a("md-icon",[t._v("call")]),a("label",[t._v("Phone")]),a("md-input",{model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"phone.value"}})],1),a("md-button",{staticClass:"md-raised md-accent md-layout-item",on:{click:function(e){t.contact.phones.splice(n,1)}}},[t._v("Remove")])],1)}),t._l(t.contact.emails,function(e,n){return a("div",{key:"email"+n,staticClass:"md-layout"},[a("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[a("md-icon",[t._v("description")]),a("label",[t._v("Label")]),a("md-input",{model:{value:e.label,callback:function(a){t.$set(e,"label",a)},expression:"email.label"}})],1),a("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[a("md-icon",[t._v("alternate_email")]),a("label",[t._v("E-Mail")]),a("md-input",{model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"email.value"}})],1),a("md-button",{staticClass:"md-raised md-accent md-layout-item",on:{click:function(e){t.contact.emails.splice(n,1)}}},[t._v("Remove")])],1)})],2):t._e()],1)};n._withStripped=!0;var c={render:n,staticRenderFns:[]};e.a=c},"/n1+":function(t,e,a){"use strict";var n=a("Xxa5"),c=a.n(n),s=a("exGp"),i=a.n(s),o=a("13Ra");e.a={components:{ContactDetails:o.a},asyncData:function(){var t=i()(c.a.mark(function t(e){var a,n,s=e.app,i=e.params,o=e.error;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,i.id){t.next=3;break}return t.abrupt("return",{contact:{phones:[],emails:[]}});case 3:return a="https://contacts-dot-net-core.azurewebsites.net/api/contacts/"+i.id,t.next=6,s.$axios.$get(a);case 6:return n=t.sent,t.abrupt("return",{contact:n});case 10:t.prev=10,t.t0=t.catch(0),o({message:"Contact not found",statusCode:404});case 13:case"end":return t.stop()}},t,this,[[0,10]])}));return function(e){return t.apply(this,arguments)}}()}},"13Ra":function(t,e,a){"use strict";var n=a("XXi3"),c=a("/Q08"),s=a("VU/8")(n.a,c.a,!1,null,null,null);s.options.__file="components\\ContactDetails.vue",e.a=s.exports},GRff:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/n1+"),c=a("aWFw"),s=a("VU/8")(n.a,c.a,!1,null,null,null);s.options.__file="pages\\contact-details\\_id.vue",e.default=s.exports},XXi3:function(t,e,a){"use strict";var n=a("mtWM"),c=a.n(n);e.a={props:["datacontact"],data:function(){return{contact:this.datacontact}},methods:{addPhone:function(){this.contact.phones.push({})},addEmail:function(){this.contact.emails.push({})},deleteContact:function(t){if(t){var e="https://contacts-dot-net-core.azurewebsites.net/api/contacts/"+t;c.a.delete(e)}}}}},aWFw:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("contact-details",{attrs:{datacontact:this.contact}})],1)])};n._withStripped=!0;var c={render:n,staticRenderFns:[]};e.a=c}});