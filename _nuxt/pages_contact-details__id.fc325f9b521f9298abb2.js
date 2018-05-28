webpackJsonp([1],{"+UUb":function(t,e,n){"use strict";e.a={name:"Snackbar",prop:["message","showSnackbar"],data:function(){return{message:"teste",showSnackbar:!1,position:"center",duration:500,isInfinity:!1}}}},"/Q08":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-button",{staticClass:"md-raised",attrs:{to:"/contacts/"}},[t._v("Back")]),n("md-button",{staticClass:"md-raised",on:{click:function(e){t.addPhone()}}},[t._v("Add Phone")]),n("md-button",{staticClass:"md-raised",on:{click:function(e){t.addEmail()}}},[t._v("Add E-mail")]),t.contact.mongoId?n("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.confirmDeleteActive=!0}}},[t._v("Delete Contact")]):t._e(),t.contact?n("div",[n("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[n("md-icon",[t._v("account_circle")]),n("label",[t._v("Name")]),n("md-input",{model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}})],1),t._l(t.contact.phones,function(e,a){return n("div",{key:"phone"+a,staticClass:"md-layout"},[n("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[n("md-icon",[t._v("description")]),n("label",[t._v("Label")]),n("md-input",{model:{value:e.label,callback:function(n){t.$set(e,"label",n)},expression:"phone.label"}})],1),n("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[n("md-icon",[t._v("call")]),n("label",[t._v("Phone")]),n("md-input",{model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"phone.value"}})],1),n("md-button",{staticClass:"md-raised md-accent md-layout-item",on:{click:function(e){t.contact.phones.splice(a,1)}}},[t._v("Remove")])],1)}),t._l(t.contact.emails,function(e,a){return n("div",{key:"email"+a,staticClass:"md-layout"},[n("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[n("md-icon",[t._v("description")]),n("label",[t._v("Label")]),n("md-input",{model:{value:e.label,callback:function(n){t.$set(e,"label",n)},expression:"email.label"}})],1),n("md-field",{staticClass:"md-layout-item md-size-40 md-small-size-100"},[n("md-icon",[t._v("alternate_email")]),n("label",[t._v("E-Mail")]),n("md-input",{model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"email.value"}})],1),n("md-button",{staticClass:"md-raised md-accent md-layout-item",on:{click:function(e){t.contact.emails.splice(a,1)}}},[t._v("Remove")])],1)}),n("md-button",{staticClass:"md-raised md-accent md-layout-item",on:{click:function(e){t.save()}}},[t._v("Save")])],2):t._e(),n("md-dialog-confirm",{attrs:{"md-active":t.confirmDeleteActive,"md-title":"Are you sure?","md-content":"Do you really want to delete this contact?","md-confirm-text":"Yes, delete"},on:{"update:mdActive":function(e){t.confirmDeleteActive=e},"md-confirm":t.onConfirm}})],1)};a._withStripped=!0;var c={render:a,staticRenderFns:[]};e.a=c},"/n1+":function(t,e,n){"use strict";var a=n("Xxa5"),c=n.n(a),i=n("exGp"),s=n.n(i),o=n("13Ra");e.a={components:{ContactDetails:o.a},asyncData:function(){var t=s()(c.a.mark(function t(e){var n,a,i=e.app,s=e.params,o=e.error;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,s.id){t.next=3;break}return t.abrupt("return",{contact:{phones:[],emails:[]}});case 3:return n="https://contacts-dot-net-core.azurewebsites.net/api/contacts/"+s.id,t.next=6,i.$axios.$get(n);case 6:return a=t.sent,t.abrupt("return",{contact:a});case 10:t.prev=10,t.t0=t.catch(0),o({message:"Contact not found",statusCode:404});case 13:case"end":return t.stop()}},t,this,[[0,10]])}));return function(e){return t.apply(this,arguments)}}()}},"13Ra":function(t,e,n){"use strict";var a=n("XXi3"),c=n("/Q08"),i=n("VU/8")(a.a,c.a,!1,null,null,null);i.options.__file="components\\ContactDetails.vue",e.a=i.exports},GRff:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("/n1+"),c=n("aWFw"),i=n("VU/8")(a.a,c.a,!1,null,null,null);i.options.__file="pages\\contact-details\\_id.vue",e.default=i.exports},JF46:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-snackbar",{attrs:{"md-position":t.position,"md-duration":t.isInfinity?1/0:t.duration,"md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.showSnackbar=e}}},[n("span",[t._v(t._s(t.message))]),n("md-button",{staticClass:"md-primary",on:{click:function(e){t.showSnackbar=!1}}},[t._v("Close")])],1)],1)};a._withStripped=!0;var c={render:a,staticRenderFns:[]};e.a=c},XXi3:function(t,e,n){"use strict";var a=n("Xxa5"),c=n.n(a),i=n("exGp"),s=n.n(i),o=n("mtWM"),r=n.n(o),l=n("cTBN");e.a={components:{Snackbar:l.a},props:["datacontact"],data:function(){return{contact:this.datacontact,confirmDeleteActive:!1}},methods:{addPhone:function(){this.contact.phones.push({})},addEmail:function(){this.contact.emails.push({})},onConfirm:function(){var t=s()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.deleteContact(this.contact.mongoId);case 2:this.$router.replace({path:"/contacts"});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),openConfirmDeleteDialog:function(){confirmDeleteActive=!0},deleteContact:function(){var t=s()(c.a.mark(function t(e){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return n="https://contacts-dot-net-core.azurewebsites.net/api/contacts/"+e,t.next=5,r.a.delete(n);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),save:function(){r.a.post("https://contacts-dot-net-core.azurewebsites.net/api/contacts/",this.contact)}}}},aWFw:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("contact-details",{attrs:{datacontact:this.contact}})],1)])};a._withStripped=!0;var c={render:a,staticRenderFns:[]};e.a=c},cTBN:function(t,e,n){"use strict";var a=n("+UUb"),c=n("JF46"),i=n("VU/8")(a.a,c.a,!1,null,null,null);i.options.__file="components\\Snackbar.vue",e.a=i.exports}});