(this["webpackJsonpreact-cyber"]=this["webpackJsonpreact-cyber"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(8),a=n.n(r),s=(n(15),n(10)),i=n(2),o=n(0),j=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],s=r[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),l=u[0],d=u[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"Add new transaction"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:a,amount:+l,id:1e3*Math.random()}),d(""),s("")},children:[Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"text",children:"Text"}),Object(o.jsx)("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)},placeholder:"Enter text..."})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(o.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(o.jsx)("input",{type:"number",value:l,onChange:function(e){return d(e.target.value)},placeholder:"Enter amount..."})]}),Object(o.jsx)("button",{className:"btn",children:"Add transaction"})]})]})},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=new Intl.NumberFormat("en-US",{style:"currency",currency:t});return n.format(e)},l=function(e){var t=e.data;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{children:"Your Balance"}),Object(o.jsx)("h1",{children:u(t)})]})},d=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Cyber-Trace"}),Object(o.jsx)("p",{children:"A simple react app developed during a session for the club Cyber-Trace \ud83d\udc9f"})]})},b=function(e){var t=e.data,n=e.onDelete;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"History"}),Object(o.jsx)("ul",{className:"list",children:t.length>0?t.map((function(e){return Object(o.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.name,Object(o.jsx)("span",{children:u(e.amount)}),Object(o.jsx)("button",{onClick:function(){return n(e.id)},className:"delete-btn",children:"X"})]},e.id)})):Object(o.jsx)("p",{children:"no transactions"})})]})},O=function(e){return e.amount>0},h=function(e){var t=e.data,n=void 0===t?[]:t,c=n.filter(O).reduce((function(e,t){return e+t.amount}),0),r=n.filter((function(e){return!O(e)})).reduce((function(e,t){return e+t.amount}),0);return Object(o.jsxs)("div",{className:"inc-exp-container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Income"}),Object(o.jsx)("p",{className:"money plus",children:u(c)})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Expense"}),Object(o.jsx)("p",{className:"money minus",children:u(r)})]})]})},m="TRANSACTIONS",x=function(){var e=localStorage.getItem(m);return JSON.parse(e)},f=function(){var e=Object(c.useState)(1e4),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(x),u=Object(i.a)(a,2),O=u[0],f=u[1];return Object(c.useEffect)((function(){console.log("hello world !!!")})),Object(c.useEffect)((function(){r(O.reduce((function(e,t){return e+t.amount}),0)),localStorage.setItem(m,JSON.stringify(O))}),[O]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(l,{data:n}),Object(o.jsx)(h,{data:O}),Object(o.jsx)(j,{onAdd:function(e){f((function(t){return[].concat(Object(s.a)(t),[e])}))}}),Object(o.jsx)(b,{data:O,onDelete:function(e){var t=O.filter((function(t){return t.id!==e}));f(t)}})]})]})};n(6),n(7),n(9);a.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8db38873.chunk.js.map