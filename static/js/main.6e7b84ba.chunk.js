(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),s=(c(18),c(19),c(20),c(2)),r=c(6),j=c.n(r),i=c(0),l=function(e){var t=e.to,c=e.text;return Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:c})},o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home"}),Object(i.jsx)(l,{to:"/people",text:"People"})]})})})},b=c(4),d=c(1);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var x=function(e,t){return t.find((function(t){return t.name===e}))},O=function(e){var t=e.person,c=e.people,n=t.name,s=t.sex,r=t.born,l=t.died,o=t.fatherName,b=t.motherName,d=t.slug,h=x(b,c),O=x(o,c);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.c,{to:"/people/".concat(d),className:j()({"has-text-danger":"f"===s}),children:n})}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:h?Object(i.jsx)(a.b,{to:"/people/".concat(h.slug),className:j()({"has-text-danger":"f"===(null===h||void 0===h?void 0:h.sex)}),children:b}):b||"-"}),Object(i.jsx)("td",{children:O?Object(i.jsx)(a.b,{to:"/people/".concat(O.slug),children:o}):o||"-"})]})},u=(c(22),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),p=function(){var e=Object(d.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(!1),r=Object(b.a)(a,2),l=r[0],o=r[1],x=Object(d.useState)(!1),p=Object(b.a)(x,2),m=p[0],f=p[1],g=Object(s.h)().personSlug,v=void 0===g?"":g;return Object(d.useEffect)((function(){o(!0),h().then(n).catch((function(){return f(!0)})).finally((function(){return o(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[l&&Object(i.jsx)(u,{}),!l&&m&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!l&&!m&&Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:c.length||l?c.map((function(e){return Object(i.jsx)("tr",{"data-cy":"person",className:j()({"has-background-warning":v===e.slug}),children:Object(i.jsx)(O,{person:e,people:c})},e.slug)})):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})})]})]})})]})},m=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},f=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},g=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(f,{})}),Object(i.jsx)(s.b,{path:"/home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsxs)(s.b,{path:"/people",children:[Object(i.jsx)(s.b,{path:":personSlug",element:Object(i.jsx)(p,{})}),Object(i.jsx)(s.b,{index:!0,element:Object(i.jsx)(p,{})})]}),Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)(m,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(g,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.6e7b84ba.chunk.js.map