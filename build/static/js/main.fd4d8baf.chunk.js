(this["webpackJsonpword-tracker"]=this["webpackJsonpword-tracker"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),l=n.n(r),s=(n(9),n(2)),o=(n(10),n(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("href",{className:"navbar-brand",to:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("href",{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function d(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#173f60":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toUpperCase();r(t),e.showAlert("Text has been converted into UpperCase","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=c.toLowerCase();r(t),e.showAlert("Text has been converted into LowerCase","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){r("")},children:"Clear Text"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){(c=document.getElementById("myBox")).select(),navigator.clipboard.writeText(c.value),document.getSelection().removeAllRanges(),e.showAlert("Text has been copied into clipboard","success")},children:"Copy Text"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Remove Extra Spaces"}),Object(o.jsx)("button",{disabled:0===c.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var e=document.getElementById("myBox"),t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","file.txt"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},children:"DownLoad Text"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(o.jsxs)("p",{children:[.008*c.split(" ").filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:c.length>0?c:"Nothing to preview it here"})]})]})}i.defaultProps={title:"Set title here",aboutText:"About"};var b=function(e){return Object(o.jsx)("div",{style:{height:"40px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),"  ",e.alert.msg]})})};var h=function(){var e=Object(a.useState)("light"),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),l=Object(s.a)(r,2),h=l[0],m=l[1],u=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#042743",u("Dark mode has been enable","success")):(c("light"),document.body.style.backgroundColor="white")}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:u,heading:"Enter the text to analyze below",mode:n})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.fd4d8baf.chunk.js.map