(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{25:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(27),r=s.n(a),i=s(8),o=s(2),j=s(14),l=s.n(j),m=s(28),u=s(16),d=s(29),b=s.n(d),h=(s(25),s(1)),x=function(e){var t=e.id,s=e.year,c=e.title,n=e.summary,a=e.poster,r=e.genres;return Object(h.jsx)("div",{className:"movie",children:Object(h.jsxs)(i.b,{to:{pathname:"movie/".concat(t),state:{year:s,title:c,summary:n,poster:a,genres:r}},children:[Object(h.jsx)("img",{src:a,alt:c,title:c}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:c}),Object(h.jsx)("h5",{className:"movie__year",children:s}),Object(h.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})})},O=(s(62),function(){return Object(h.jsxs)("div",{className:"navi",children:[Object(h.jsx)(i.b,{to:"/",children:"Home"}),Object(h.jsx)(i.b,{to:"/about",children:"About"})]})}),v=(s(63),function(e){console.log(e);var t=Object(c.useState)(!0),s=Object(u.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)([]),i=Object(u.a)(r,2),o=i[0],j=i[1],d=function(){var e=Object(m.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,s=t.data.data.movies,j(s),a(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(e){d()}),[]),Object(h.jsx)("section",{className:"container",children:n?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsx)("div",{className:"movies",children:o.map((function(e){return Object(h.jsx)(x,{id:e.id,year:e.year,genres:e.genres,title:e.title,summary:e.summary,poster:e.medium_cover_image},e.id)}))})]})})}),p=function(e){return console.log(e),Object(h.jsx)("div",{children:"About"})},f=function(e){var t=e.location.state,s=e.history;if(Object(c.useEffect)((function(e){void 0===t&&s.push("/")}),[t,s]),t){var n=t.year,a=t.title,r=t.summary,i=t.poster,o=t.genres;return Object(h.jsx)("div",{className:"detail",children:Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:i,alt:a,title:a}),Object(h.jsx)("h5",{className:"movie__year",children:n}),Object(h.jsx)("h3",{className:"movie__title",children:a}),Object(h.jsx)("ul",{className:"genres",children:o.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(h.jsx)("p",{className:"movie__summary",children:r})]})})}return null},_=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(h.jsx)(o.a,{path:"/about",exact:!0,component:p}),Object(h.jsx)(o.a,{path:"/movie/:id",exact:!0,component:f})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.a118c4f2.chunk.js.map