"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[170],{8170:function(e,t,o){o.r(t),o.d(t,{default:function(){return he}});var i=o(8683),r=o(2791),n=o(8687),a=o(6871),s=o(7781),l=o(1419),u=o(3970),c=o(885),d=function(e){return e.profileReducer.profile},m=function(e){return e.profileReducer.status},f=function(e){return e.authReducer.id},p=function(e){return e.profileReducer.posts},h=function(e){return e.profileReducer.savePhotoError},v=function(e){return e.profileReducer.saveProfileError},_=function(e){return e.profileReducer.isFetching},j=o(4493),b="MyPosts_postsArea__JgtBC",x="MyPosts_posts__1LOgq",g="Post_item__iGnk3",k=o(184),P=function(e){return(0,k.jsxs)("div",{className:g,children:[(0,k.jsx)("img",{src:"https://w7.pngwing.com/pngs/211/382/png-transparent-silhouette-avatar-avatar-silhouettes-animals-public-relations-monochrome-thumbnail.png",alt:"logo"}),(0,k.jsx)("p",{children:e.message}),(0,k.jsxs)("div",{children:[(0,k.jsx)("span",{children:e.likes}),(0,k.jsx)("span",{children:"\ud83d\udc4d"})]})]})},F=(0,s.qC)((0,n.$j)((function(e){return{postsData:p(e)}}),(function(e){return{addPost:function(t){e((0,u.Wl)(t))}}})))((function(e){return(0,k.jsxs)("div",{className:b,children:[(0,k.jsx)("div",{className:x,children:e.postsData.map((function(e){return(0,k.jsx)(P,{message:e.message,likes:e.likes},e.id)}))}),e.isOwner&&(0,k.jsx)(j.Z,{submit:function(t,o){e.addPost(t),o.restart()},buttonLabel:"Add Post"})]})})),N="ProFileInfo_item__Q2lyx",w="ProFileInfo_main__kMT3k",I="ProFileInfo_logo__UExdo",A="ProFileInfo_errorOccured__qNFPG",y="ProFileInfo_avatar__kpSil",Z="ProFileInfo_addImage__6N2Yw",E="ProFileInfo_profileText__S2v6u",S="ProFileInfo_fullName__TAW6U",V="ProFileInfo_aboutMe__PMN4E",L="ProFileInfo_description__sjB8y",C="ProFileInfo_contacts__QIlhi",M="ProFileInfo_contact__ouFd3",O="ProFileInfo_job__1pOpQ",D="ProFileInfo_jobTitle__2uz00",W="ProFileInfo_jobDescription__cn1ww",J="ProFileInfo_edit__Dkja1",T="ProFileInfo_editBar__0+EEE",q="ProFileInfo_strangerStatusBar__J93wi",B="ProFileInfo_mobileStatus__q7uB4",R="ProFileInfo_desctopStatus__kchN9",z="ProFileInfo_profileStatus__ijXMM",Q="ProFileInfo_inputStatus__02L4t",U="ProFileInfo_paragraphStatus__BxYR0",G="ProFileInfo_statusDescription__96-O4",X=o(8987),$=function(e){var t=(0,r.useState)(!1),o=(0,c.Z)(t,2),i=o[0],n=o[1],a=(0,r.useState)(e.status),s=(0,c.Z)(a,2),l=s[0],u=s[1],d=function(){e.isOwner&&n(!0)},m=function(){n(!1),e.updateStatus(l)},f=function(e){u(e.target.value)};return(0,r.useEffect)((function(){u(e.status)}),[e.status]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:R,children:(0,k.jsx)("div",{className:z,children:i?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("input",{"data-testid":"input-elem-desctop",onChange:f,autoFocus:!0,onBlur:m,value:l,className:Q}),e.isOwner&&(0,k.jsx)("p",{className:G,children:"\u24d8 click aside to save changes"})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("p",{"data-testid":"status-elem-desctop",className:U,onDoubleClick:d,children:l||"No status"}),e.isOwner&&(0,k.jsx)("p",{className:G,children:"\u24d8 Double click to edit your status"})]})})}),(0,k.jsx)("div",{className:B,children:(0,k.jsx)("div",{className:z,children:i?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("input",{"data-testid":"input-elem-mobile",onChange:f,autoFocus:!0,onBlur:m,value:l,className:Q}),e.isOwner&&(0,k.jsx)("p",{className:G,children:"\u24d8 click aside to save changes"})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("p",{className:U,onTouchStart:d,"data-testid":"status-elem-mobile",children:l||"No status"}),e.isOwner&&(0,k.jsx)("p",{className:G,children:"\u24d8 Hold click to edit your status"})]})})})]})},Y=function(e){return(0,k.jsxs)("div",{className:L,children:[(0,k.jsx)("div",{className:C,children:Object.keys(e.profile.contacts).map((function(t){return e.profile.contacts[t]?(0,k.jsx)("p",{className:M,children:e.profile.contacts[t]},t):null}))}),(0,k.jsxs)("div",{className:O,children:[e.profile.lookingForAJob?(0,k.jsx)("p",{className:D,children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"}):(0,k.jsx)("p",{className:D,children:"\u041d\u0435 \u0438\u0449\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443"}),(0,k.jsx)("p",{className:W,children:e.profile.lookingForAJobDescription})]})]})},H=o(5078),K=o(8745),ee=o(624),te="ProFileDataForm_wrapper__8HCIs",oe="ProFileDataForm_editProfileForm__wI6lY",ie="ProFileDataForm_jobWrapper__FhWQn",re="ProFileDataForm_job__7oRan",ne="ProFileDataForm_contacts__v4DfX",ae="ProFileDataForm_leftBar__9Qdj9",se="ProFileDataForm_rightBar__er-wq",le="ProFileDataForm_button__hkWGv",ue=function(e){var t={fullName:e.profile.fullName,AboutMe:e.profile.aboutMe,lookingForAJob:e.profile.lookingForAJob?["job"]:[],lookingForAJobDescription:e.profile.lookingForAJobDescription,github:e.profile.contacts.github,vk:e.profile.contacts.vk,facebook:e.profile.contacts.facebook,instagram:e.profile.contacts.instagram,twitter:e.profile.contacts.twitter,website:e.profile.contacts.website,youtube:e.profile.contacts.youtube,mainLink:e.profile.contacts.mainLink};return(0,k.jsx)("div",{className:te,children:(0,k.jsxs)("div",{className:oe,children:[(0,k.jsx)("h1",{children:"Edit Profile info "}),(0,k.jsx)(H.l0,{initialValues:t,onSubmit:function(t){var o=!!Array.isArray(t.lookingForAJob),i={AboutMe:t.AboutMe,fullName:t.fullName,lookingForAJob:o,lookingForAJobDescription:t.lookingForAJobDescription,userId:e.userId,contacts:{github:t.github,vk:t.vk,facebook:t.facebook,instagram:t.instagram,twitter:t.twitter,website:t.website,youtube:t.youtube,mainLink:t.mainLink}};e.saveProfile(i).then((function(){return e.setEditMode(!1)})).catch((function(){}))},render:function(t){var o=t.handleSubmit,i=t.submitting,r=t.invalid,n=t.values;return(0,k.jsxs)("form",{onSubmit:o,children:[(0,k.jsx)(H.gN,{validate:K.V.composeValidators(K.V.required),autoComplete:"fullName",name:"fullName",placeholder:"Enter your name",component:ee.Z,value:n.fullName}),(0,k.jsx)(H.gN,{validate:K.V.composeValidators(K.V.required),autoComplete:"AboutMe",name:"AboutMe",placeholder:"Tell about yourself",component:ee.Z,value:n.AboutMe}),(0,k.jsxs)("div",{className:ie,children:[(0,k.jsx)("h2",{children:"Looking for a job"}),(0,k.jsxs)("div",{className:re,children:[(0,k.jsx)("label",{htmlFor:"lookingForAJob",children:"Looking for a job "}),(0,k.jsx)(H.gN,{name:"lookingForAJob",component:"input",type:"checkbox",value:"job"})]})]}),(0,k.jsx)(H.gN,{validate:K.V.required,autoComplete:"looking-for-a-job-description",name:"lookingForAJobDescription",placeholder:"Enter description to your job looking",component:ee.Z,value:n.lookingForAJobDescription}),(0,k.jsx)("h2",{children:"Contacts"}),(0,k.jsxs)("div",{className:ne,children:[(0,k.jsxs)("div",{className:ae,children:[(0,k.jsx)(H.gN,{validate:K.V.githubLinkValidation,autoComplete:"github",name:"github",placeholder:" link to your github ",component:ee.Z,value:n.github}),(0,k.jsx)(H.gN,{validate:K.V.vkLinkValidation,autoComplete:"vk",name:"vk",placeholder:" link to your vk ",component:ee.Z,value:n.vk}),(0,k.jsx)(H.gN,{validate:K.V.facebookLinkValidation,autoComplete:"facebook",name:"facebook",placeholder:" link to your facebook ",component:ee.Z,value:n.facebook}),(0,k.jsx)(H.gN,{validate:K.V.instagramLinkValidation,autoComplete:"instagram",name:"instagram",placeholder:" link to your instagram ",component:ee.Z,value:n.instagram})]}),(0,k.jsxs)("div",{className:se,children:[(0,k.jsx)(H.gN,{validate:K.V.twitterLinkValidation,autoComplete:"twitter",name:"twitter",placeholder:" link to your twitter ",component:ee.Z,value:n.twitter}),(0,k.jsx)(H.gN,{autoComplete:"website",name:"website",placeholder:" link to your website ",component:ee.Z,value:n.website}),(0,k.jsx)(H.gN,{validate:K.V.youtubeLinkValidation,autoComplete:"youtube",name:"youtube",placeholder:" link to your youtube ",component:ee.Z,value:n.youtube}),(0,k.jsx)(H.gN,{autoComplete:"mainLink",name:"mainLink",placeholder:"   your mainLink ",component:ee.Z,value:n.mainLink})]})]}),e.saveProfileError&&(0,k.jsxs)("span",{children:[" ",e.saveProfileError," "]}),(0,k.jsx)("button",{className:le,disabled:i||r,type:"submit",children:"Save"})]})}})]})})},ce=function(e){return(0,k.jsxs)("div",{className:N,children:[!e.editMode&&(0,k.jsxs)("div",{className:w,children:[(0,k.jsxs)("div",{className:e.savePhotoError?A:I,children:[(0,k.jsx)("img",{className:y,src:e.profile.photos.large?e.profile.photos.large:X,alt:"ava"}),e.isOwner&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("input",{className:Z,type:"file",onChange:function(t){t.target.files[0]&&e.savePhoto(t.target.files[0])}}),e.savePhotoError&&(0,k.jsx)("p",{children:e.savePhotoError})]})]}),(0,k.jsxs)("div",{className:E,children:[(0,k.jsx)("p",{className:S,children:e.profile.fullName}),(0,k.jsxs)("p",{className:V,children:[" ",e.profile.aboutMe]})]})]}),e.editMode?(0,k.jsx)(ue,{profile:e.profile,setEditMode:e.setEditMode,saveProfile:e.saveProfile,saveProfileError:e.saveProfileError,userId:e.userId}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Y,{profile:e.profile,isOwner:e.isOwner}),(0,k.jsxs)("div",{className:e.isOwner?T:q,children:[e.isOwner&&(0,k.jsx)("span",{onClick:function(){e.setEditMode(!0)},className:J,children:"\u270e Edit Profile"}),!e.editMode&&(0,k.jsx)($,{isOwner:e.isOwner,status:e.status,updateStatus:e.updateStatus})]})]})]})},de="ProFile_profile__wVoS0";function me(e){var t=(0,r.useState)(!1),o=(0,c.Z)(t,2),i=o[0],n=o[1];return(0,k.jsxs)("div",{className:de,children:[(0,k.jsx)(ce,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,savePhotoError:e.savePhotoError,editMode:i,setEditMode:n,saveProfile:e.saveProfile,saveProfileError:e.saveProfileError,userId:e.userId}),!i&&e.isOwner&&(0,k.jsx)(F,{isOwner:e.isOwner})]})}var fe=o(9869),pe=o(4904);var he=(0,s.qC)((0,n.$j)((function(e){return{profile:d(e),status:m(e),userId:f(e),ownerId:fe.u.getId(e),savePhotoError:h(e),saveProfileError:v(e),isFetching:_(e)}}),{getProfile:u.Ai,getStatus:u.lR,updateStatus:u.Nf,savePhoto:u.Ju,saveProfile:u.Ii}),(function(e){return function(t){var o=(0,a.UO)();return(0,k.jsx)(e,(0,i.Z)((0,i.Z)({},t),{},{userId:o.userId?o.userId:t.userId}))}}),l.Z)((function(e){var t=e.getProfile,o=e.getStatus,i=e.userId;return(0,r.useEffect)((function(){t(i),o(i)}),[i,t,o]),e.isFetching||!e.profile?(0,k.jsx)(pe.Z,{}):(0,k.jsx)(me,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.ownerId===e.userId,savePhoto:e.savePhoto,saveProfile:e.saveProfile,userId:e.ownerId,saveProfileError:e.saveProfileError,savePhotoError:e.savePhotoError})}))},4493:function(e,t,o){o.d(t,{Z:function(){return v}});var i=o(5078),r=o(8745),n=o(8683),a=o(5987),s=(o(2791),"TextArea_formControl__Rinx4"),l="TextArea_textArea__ns18L",u="TextArea_error__95PGv",c=o(184),d=["input","meta"];function m(e){var t=e.input,o=e.meta,i=(0,a.Z)(e,d),r=o.error&&o.touched;return(0,c.jsxs)("div",{className:" ".concat(s,"  ").concat(r?u:""),children:[(0,c.jsx)("textarea",(0,n.Z)((0,n.Z)({className:l},t),i)),r&&(0,c.jsx)("span",{children:o.error})]})}var f="AddTextForm_form__akPUv",p="AddTextForm_inputDescr__kXzlf",h="AddTextForm_addButton__PiRqt",v=function(e){return(0,c.jsx)("div",{children:(0,c.jsx)(i.l0,{onSubmit:e.submit,render:function(t){var o=t.handleSubmit,n=t.submitting,a=t.invalid;return(0,c.jsxs)("form",{onSubmit:o,className:f,children:[(0,c.jsx)(i.gN,{className:p,name:"newText",component:m,validate:r.V.required}),(0,c.jsx)("button",{className:h,disabled:n||a,type:"submit",children:e.buttonLabel})]})}})})}},624:function(e,t,o){o.d(t,{Z:function(){return c}});var i=o(8683),r=o(5987),n=(o(2791),"Input_formControl__LCjIl"),a="Input_error__UxBnS",s="Input_inputField__Xv+vd",l=o(184),u=["input","meta"];function c(e){var t=e.input,o=e.meta,c=(0,r.Z)(e,u),d=o.error&&o.touched;return(0,l.jsxs)("div",{className:" ".concat(n,"  ").concat(d?a:""),children:[(0,l.jsx)("input",(0,i.Z)((0,i.Z)((0,i.Z)({},t),c),{},{className:s})),d&&(0,l.jsx)("span",{children:o.error})]})}},8745:function(e,t,o){o.d(t,{V:function(){return i}});var i={composeValidators:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(e){return t.reduce((function(t,o){return t||o(e)}),void 0)}},maxLength:function(e){return function(t){return t.length>e?"Max length is ".concat(e):void 0}},required:function(e){return e?void 0:"Field is required!!"},emailValidation:function(e){return e.match(/^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/)?void 0:"The email is invalid"},githubLinkValidation:function(e){return e?e.startsWith("github.com")||e.startsWith("https://github.com")?null:"Invalid link!!!":null},vkLinkValidation:function(e){return e?e.startsWith("vk.com")||e.startsWith("https://vk.com")?null:"Invalid link":null},facebookLinkValidation:function(e){return e?e.startsWith("facebook.com")||e.startsWith("https://www.facebook.com")?null:"Invalid link":null},instagramLinkValidation:function(e){return e?e.startsWith("instagra.com")||e.startsWith("instagram.com")||e.startsWith("https://www.instagram.com/")||e.startsWith("www.instagram.com")?null:"Invalid link":null},twitterLinkValidation:function(e){return e?e.startsWith("https://twitter.com")||e.startsWith("twitter.com")?null:"Invalid link":null},youtubeLinkValidation:function(e){return e?e.startsWith("https://www.youtube.com")||e.startsWith("www.youtube.com")?null:"Invalid link":null}}},1419:function(e,t,o){var i=o(8683),r=o(8687),n=o(6871),a=o(9869),s=o(184),l=function(e){return{isAuth:a.u.getIsAuth(e)}};t.Z=function(e){return(0,r.$j)(l)((function(t){return t.isAuth?(0,s.jsx)(e,(0,i.Z)({},t)):(0,s.jsx)(n.Fg,{to:"/login"})}))}},8987:function(e,t,o){e.exports=o.p+"static/media/avatar.d54b5cea3dabfb92c990.png"}}]);
//# sourceMappingURL=170.2f946414.chunk.js.map