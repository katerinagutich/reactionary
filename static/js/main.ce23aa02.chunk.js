(this["webpackJsonpstarting-project"]=this["webpackJsonpstarting-project"]||[]).push([[0],{13:function(e,t,n){e.exports={wrapper:"WordItem_wrapper__3C21a","word-section":"WordItem_word-section__14K9g",word:"WordItem_word__1D9QA","definition-section":"WordItem_definition-section__278h_",definition:"WordItem_definition__yAv2U",transcription:"WordItem_transcription__2A7-o"}},16:function(e,t,n){e.exports={"welcome-wrapper":"Welcome_welcome-wrapper__skKtX",welcome:"Welcome_welcome__eSoCD",message:"Welcome_message__BAA1Q",button:"Welcome_button__3-hKX"}},17:function(e,t,n){e.exports={"home-wrapper":"Home_home-wrapper__VArFw","home-word":"Home_home-word__18SJR",message:"Home_message__2oKKi","message-wrapper":"Home_message-wrapper__2Ylt-"}},19:function(e,t,n){e.exports={header:"Header_header__3zt0s",logo:"Header_logo__1cF4q",active:"Header_active__2OUxD"}},20:function(e,t,n){e.exports={control:"LoginForm_control__LZyWa",invalid:"LoginForm_invalid__30fiO"}},21:function(e,t,n){e.exports={list:"WordList_list__2CzTP",item:"WordList_item__2oDdw",word:"WordList_word__2yvWP",transcription:"WordList_transcription__1maX6"}},29:function(e,t,n){e.exports={wrapper:"NoWordsFound_wrapper__3dg2z",button:"NoWordsFound_button__H-SpQ"}},30:function(e,t,n){e.exports={button:"Button_button__2wdo4"}},31:function(e,t,n){e.exports={card:"Card_card__eH6Dy","slide-down":"Card_slide-down__3dvWX"}},39:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(22),c=n.n(a),s=n(10),i=n(8),o=n(24),d=Object(o.b)({name:"authentication",initialState:{isAuthenticated:!0},reducers:{login:function(e){e.isAuthenticated=!0},logout:function(e){e.isAuthenticated=!1}}}),l=d.reducer,u=d.actions,j=Object(o.a)({reducer:{authentication:l}}),b=(n(39),n(3)),p=n(30),m=n.n(p),h=n(0),O=function(e){return Object(h.jsx)("button",{onClick:e.onClick,className:"".concat(m.a.button," ").concat(e.className),type:e.type,disabled:e.disabled,children:e.name})},x=n(19),w=n.n(x),_=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.authentication.isAuthenticated}));return Object(h.jsxs)("header",{className:w.a.header,children:[Object(h.jsx)(i.b,{to:"/reactionary",className:w.a.logo,children:"Reactionary"}),t&&Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"/reactionary",activeClassName:w.a.active,children:"Main Page"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.c,{to:"/word-list",activeClassName:w.a.active,children:"My List"})}),Object(h.jsx)("li",{children:Object(h.jsx)(O,{name:"Let Me Out",type:"button",onClick:function(){e(u.logout())}})})]})})]})},f=n(12),g=n.p+"static/media/owl.73525785.png",v=n(31),y=n.n(v),N=function(e){return Object(h.jsx)("div",{className:"".concat(y.a.card," ").concat(e.className),children:e.children})},k=function(e){var t=Object(r.useState)(""),n=Object(f.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!1),i=Object(f.a)(s,2),o=i[0],d=i[1],l=e(a);return{value:a,isValid:l,hasError:!l&&o,valueChangeHandler:function(e){c(e.target.value)},inputBlurHandler:function(){d(!0)},reset:function(){c(""),d(!1)}}},S=n(20),C=n.n(S),W=function(e){var t,n=k((function(e){return e.trim().length>2})),r=n.value,a=n.isValid,c=n.hasError,s=n.valueChangeHandler,i=n.inputBlurHandler,o=n.reset,d=k((function(e){return e.trim().length>5})),l=d.value,u=d.isValid,j=d.hasError,b=d.valueChangeHandler,p=d.inputBlurHandler,m=d.reset;t=!(!a||!u);return Object(h.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t&&(o(),m(),e.onSubmit())},children:[Object(h.jsxs)("div",{className:C.a.control,children:[Object(h.jsx)("label",{htmlFor:"name",children:"Your Name: "}),Object(h.jsx)("input",{value:r,onChange:s,onBlur:i,id:"name",type:"text",className:c?C.a.invalid:""})]}),Object(h.jsxs)("div",{className:C.a.control,children:[Object(h.jsx)("label",{htmlFor:"password",children:"Your Password: "}),Object(h.jsx)("input",{id:"password",value:l,onChange:b,onBlur:p,type:"password",className:j?C.a.invalid:""})]}),Object(h.jsx)(O,{disabled:!t,name:"Let Me In"})]})},L=n(16),A=n.n(L),H=function(){var e=Object(r.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(s.b)();return Object(h.jsxs)("div",{className:A.a["welcome-wrapper"],children:[Object(h.jsxs)("div",{className:A.a.welcome,children:[Object(h.jsxs)("picture",{children:[Object(h.jsx)("source",{srcSet:g,media:"(min-width: 769px)"}),Object(h.jsx)("img",{src:g,alt:"Friendly Owl on a welcome page"})]}),Object(h.jsx)(N,{className:A.a.message,children:"Sorry, I'm not allowed to speak to unknown people. Please introduce yourself."})]}),n?Object(h.jsx)(N,{className:A.a.message,children:"I don't want anyone to steal your English Word List. Your name and password will help me to keep everything safe, I promise."}):Object(h.jsx)(O,{onClick:function(){a(!0)},name:"Okay, I'm ready",className:A.a.button}),n&&Object(h.jsx)(W,{onSubmit:function(){c(u.login())}})]})},F=n.p+"static/media/owl_home.880b1760.png",I=n(17),E=n.n(I),R="library",D="/\u02c8la\u026a\u02ccbr\u025bri/",B="A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to.",M=function(){return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)("div",{className:E.a["home-wrapper"],children:[Object(h.jsx)(N,{className:E.a.message,children:"Welcome back, My Friend!"}),Object(h.jsxs)("picture",{children:[Object(h.jsx)("source",{srcSet:F,media:"(min-width: 769px)"}),Object(h.jsx)("img",{src:F,alt:"Friendly Owl on a home page"})]}),Object(h.jsxs)("div",{className:E.a["message-wrapper"],children:[Object(h.jsx)(N,{className:E.a.message,children:"Look, what a nice word I picked for you today! You can add it to Your List."}),Object(h.jsx)(N,{children:"But if you don't like it, feel free to search your own words :)"})]})]}),Object(h.jsxs)("div",{className:E.a["home-word"],children:[Object(h.jsx)("div",{children:R}),Object(h.jsx)("div",{children:D}),Object(h.jsx)("div",{children:B}),Object(h.jsx)(O,{name:"Add to My List"})]})]})},P=n(15),Y=n(5),K=n.n(Y),q=n(11),U=function(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e},V=function(e){var t=Object(r.useReducer)(U,{status:"pending",data:null,error:null}),n=Object(f.a)(t,2),a=n[0],c=n[1],s=Object(r.useCallback)(function(){var t=Object(q.a)(K.a.mark((function t(n){var r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,c({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),c({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(P.a)({sendRequest:s},a)},X="https://react-http-e108f-default-rtdb.europe-west1.firebasedatabase.app";function z(){return J.apply(this,arguments)}function J(){return(J=Object(q.a)(K.a.mark((function e(){var t,n,r,a,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(X,"/word-list.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch the word list.");case 8:for(a in r=[],n)c=Object(P.a)({id:a},n[a]),r.push(c);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=n(21),T=n.n(Q),Z=n.p+"static/media/owl_nowords.f5a73c66.png",G=n(29),$=n.n(G),ee=function(){return Object(h.jsxs)("div",{className:$.a.wrapper,children:[Object(h.jsx)(N,{children:"Looks like you haven't added any words yet."}),Object(h.jsxs)("picture",{children:[Object(h.jsx)("source",{srcSet:Z,media:"(min-width: 769px)"}),Object(h.jsx)("img",{src:Z,alt:"Friendly Owl on a page of the word you selected to learn"})]}),Object(h.jsx)(i.b,{className:"button ".concat($.a.button),to:"/reactionary",children:"Let's get started"})]})},te=function(){var e=V(z),t=e.sendRequest,n=e.status,a=e.data,c=e.error;return Object(r.useEffect)((function(){t()}),[t]),"pending"===n?Object(h.jsx)("div",{children:"Pending..."}):c?Object(h.jsx)("p",{children:c}):"completed"!==n||a&&0!==a.length?Object(h.jsx)("div",{className:T.a.list,children:a.map((function(e){return Object(h.jsxs)("section",{className:T.a.item,children:[Object(h.jsx)("div",{className:T.a.word,children:e.word}),Object(h.jsx)("div",{className:T.a.transcription,children:e.transcription}),Object(h.jsx)(i.b,{className:"button",to:"/word-list/".concat(e.word),children:"Learn more"})]},e.id)}))}):Object(h.jsx)(ee,{})},ne=n(13),re=n.n(ne),ae=n.p+"static/media/owl_word_item.0b17ee52.png",ce="dictionary",se="/\u02c8d\u026ak\u0283\u0259neri/",ie="A book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.",oe=function(){return Object(h.jsxs)("div",{className:re.a.wrapper,children:[Object(h.jsxs)("section",{className:re.a["word-section"],children:[Object(h.jsx)("div",{className:re.a.word,children:ce}),Object(h.jsx)("div",{className:re.a.transcription,children:se})]}),Object(h.jsxs)("div",{className:re.a["definition-section"],children:[Object(h.jsxs)(N,{className:re.a.definition,children:[Object(h.jsx)("div",{children:ie}),Object(h.jsx)(O,{name:"See examples"})]}),Object(h.jsxs)("picture",{children:[Object(h.jsx)("source",{srcSet:ae,media:"(min-width: 769px)"}),Object(h.jsx)("img",{src:ae,alt:"Friendly Owl on a page of the word you selected to learn"})]})]})]})};var de=function(){var e=Object(s.c)((function(e){return e.authentication.isAuthenticated}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(_,{}),!e&&Object(h.jsx)(b.b,{path:"/reactionary",exact:!0,children:Object(h.jsx)(H,{})}),Object(h.jsx)(b.b,{path:"/",exact:!0,children:Object(h.jsx)(b.a,{to:"/reactionary"})}),e&&Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/reactionary",exact:!0,children:Object(h.jsx)(M,{})}),Object(h.jsx)(b.b,{path:"/word-list",exact:!0,children:Object(h.jsx)(te,{})}),Object(h.jsx)(b.b,{path:"/word-list/:wordId",children:Object(h.jsx)(oe,{})})]})]})};c.a.render(Object(h.jsx)(i.a,{children:Object(h.jsx)(s.a,{store:j,children:Object(h.jsx)(de,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ce23aa02.chunk.js.map