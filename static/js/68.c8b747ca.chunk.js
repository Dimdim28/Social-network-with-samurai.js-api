"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[68],{7068:function(t,a,n){n.r(a),n.d(a,{default:function(){return k}});var e=n(8687),s=n(7781),i=n(1419),r=n(8023),o=function(t){return t.dialogsReducer.messages[t.dialogsReducer.currentDialog]},c=function(t){return t.dialogsReducer.dialogs},u=function(t){return t.dialogsReducer.currentDialog},l=(n(2791),"Dialogs_dialogs__oe96H"),d="Dialogs_dialogItems__VFpmc",m="Dialogs_dialog__htSTl",g="Dialogs_avatar__J0Uvr",_="Dialogs_active__t8cjl",f="Dialogs_messagesArea__z8K+O",v="Dialogs_messages__Cg2l+",h=n(184),x=function(t){var a=t.isActive?_:"";return(0,h.jsxs)("div",{onClick:function(){return t.chooseDialog(t.id)},className:"".concat(m," ").concat(a),children:[(0,h.jsx)("img",{className:g,src:t.avatar,alt:"avatar"}),t.name]})},p={message:"Message_message__rjHQQ",first:"Message_first__lEpbH",avatar:"Message_avatar__BcHJo",second:"Message_second__QwpuM",text:"Message_text__yBfK4"},j=function(t){return(0,h.jsxs)("div",{className:"".concat(p.message," ").concat(p[t.person]),children:["first"===t.person&&(0,h.jsx)("img",{className:p.avatar,src:t.avatar,alt:"avatar"}),(0,h.jsx)("p",{className:p.text,children:t.message}),"second"===t.person&&(0,h.jsx)("img",{className:p.avatar,src:t.avatar,alt:"avatar"})]})},w=n(4493),k=(0,s.qC)((0,e.$j)((function(t){return{dialogs:c(t),messages:o(t),currentDialog:u(t)}}),(function(t){return{sendMessage:function(a){t((0,r.kJ)(a))},chooseDialog:function(a){t((0,r.w1)(a))}}})),i.Z)((function(t){return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("div",{className:d,children:t.dialogs.map((function(a){return(0,h.jsx)(x,{name:a.name,isActive:a.isActive,avatar:a.avatar,chooseDialog:t.chooseDialog,id:a.id},a.id)}))}),(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("div",{className:v,children:t.messages.map((function(t){return(0,h.jsx)(j,{message:t.message,avatar:t.avatar,person:t.person},t.id)}))}),(0,h.jsx)(w.Z,{submit:function(a,n){t.sendMessage(a),n.restart()},buttonLabel:"Add message"})]})]})}))},4493:function(t,a,n){n.d(a,{Z:function(){return v}});var e=n(5078),s=n(8745),i=n(8683),r=n(5987),o=(n(2791),"TextArea_formControl__Rinx4"),c="TextArea_textArea__ns18L",u="TextArea_error__95PGv",l=n(184),d=["input","meta"];function m(t){var a=t.input,n=t.meta,e=(0,r.Z)(t,d),s=n.error&&n.touched;return(0,l.jsxs)("div",{className:" ".concat(o,"  ").concat(s?u:""),children:[(0,l.jsx)("textarea",(0,i.Z)((0,i.Z)({className:c},a),e)),s&&(0,l.jsx)("span",{children:n.error})]})}var g="AddTextForm_form__akPUv",_="AddTextForm_inputDescr__kXzlf",f="AddTextForm_addButton__PiRqt",v=function(t){return(0,l.jsx)("div",{children:(0,l.jsx)(e.l0,{onSubmit:t.submit,render:function(a){var n=a.handleSubmit,i=a.submitting,r=a.invalid;return(0,l.jsxs)("form",{onSubmit:n,className:g,children:[(0,l.jsx)(e.gN,{className:_,name:"newText",component:m,validate:s.V.required}),(0,l.jsx)("button",{className:f,disabled:i||r,type:"submit",children:t.buttonLabel})]})}})})}},8745:function(t,a,n){n.d(a,{V:function(){return e}});var e={composeValidators:function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return function(t){return a.reduce((function(a,n){return a||n(t)}),void 0)}},maxLength:function(t){return function(a){return a.length>t?"Max length is ".concat(t):void 0}},required:function(t){return t?void 0:"Field is required!!"},emailValidation:function(t){return t.match(/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/)?void 0:"The email is invalid"},githubLinkValidation:function(t){return t?t.startsWith("github.com")||t.startsWith("https://github.com")?null:"Invalid link!!!":null},vkLinkValidation:function(t){return t?t.startsWith("vk.com")||t.startsWith("https://vk.com")?null:"Invalid link":null},facebookLinkValidation:function(t){return t?t.startsWith("facebook.com")||t.startsWith("https://www.facebook.com")?null:"Invalid link":null},instagramLinkValidation:function(t){return t?t.startsWith("instagra.com")||t.startsWith("instagram.com")||t.startsWith("https://www.instagram.com/")||t.startsWith("www.instagram.com")?null:"Invalid link":null},twitterLinkValidation:function(t){return t?t.startsWith("https://twitter.com")||t.startsWith("twitter.com")?null:"Invalid link":null},youtubeLinkValidation:function(t){return t?t.startsWith("https://www.youtube.com")||t.startsWith("www.youtube.com")?null:"Invalid link":null}}},1419:function(t,a,n){var e=n(8683),s=n(8687),i=n(6871),r=n(9869),o=n(184),c=function(t){return{isAuth:r.u.getIsAuth(t)}};a.Z=function(t){return(0,s.$j)(c)((function(a){return a.isAuth?(0,o.jsx)(t,(0,e.Z)({},a)):(0,o.jsx)(i.Fg,{to:"/login"})}))}}}]);
//# sourceMappingURL=68.c8b747ca.chunk.js.map