(this.webpackJsonpnoticias=this.webpackJsonpnoticias||[]).push([[0],{14:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c(7),s=c.n(r),i=c(2),l=c(4),o=c.n(l),u=function(e){var t=e.form,c=e.setForm,r=e.handleSubmit,s=function(e){var t=Object(n.useState)(e),c=Object(i.a)(t,2),r=c[0];return[function(e){var t=e.title,c=e.form,n=e.setForm,s=c.select;return Object(a.jsxs)("select",{defaultValue:s,name:"select",className:"browser-default",onChange:function(e){return n(e)},children:[t?Object(a.jsx)("option",{value:"0",children:t},"0"):null,r.map((function(e,t){var c=e.value,n=e.label;return Object(a.jsx)("option",{value:c,children:n},t+1)}))]})},c[1]]}([{}]),l=Object(i.a)(s,2),u=l[0],b=l[1];return Object(n.useEffect)((function(){b([{value:"business",label:"Negocios"},{value:"entertainment",label:"Entretenimiento"},{value:"general",label:"General"},{value:"health",label:"Salud"},{value:"science",label:"Ciencia"},{value:"sports",label:"Deporte"},{value:"technology",label:"Tecnolog\xeda"}])}),[b]),Object(a.jsx)("div",{className:"".concat(o.a.buscador," row"),children:Object(a.jsx)("div",{className:"col s12 m8 offset-m2",children:Object(a.jsxs)("form",{onSubmit:r,children:[Object(a.jsx)("h2",{className:o.a.heading,children:"Encuentra Noticias Por Categoria"}),Object(a.jsx)(u,{title:"<--Seleccione la categor\xeda--\x3e",form:t,setForm:c}),Object(a.jsx)("input",{type:"submit",className:"btn-large amber darken-2 ".concat(o.a.btn_block),value:"Buscar"})]})})})},b=function(e){var t=e.titulo;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("nav",{className:"nav-wrapper ligth-blue darken-3",children:Object(a.jsx)("a",{href:"!#",className:"brand-logo center",children:t})})})},j=function(e){var t=e.urlToImage,c=e.title,n=e.source;return Object(a.jsxs)("div",{className:"card-image",children:[Object(a.jsx)("img",{src:t,alt:c}),Object(a.jsx)("span",{className:"card-title",children:n.name})]})},d=(c(14),function(e){var t=e.noticia,c=t.urlToImage,n=t.url,r=t.title,s=t.description,i=t.source;return Object(a.jsx)("div",{className:"col s12 m6 l4",children:Object(a.jsxs)("div",{className:"card",children:[c?Object(a.jsx)(j,{urlToImage:c,title:r,source:i}):null,Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("h4",{children:r}),Object(a.jsx)("p",{children:s})]}),Object(a.jsx)("div",{className:"card-action",children:Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("a",{href:n,target:"_blanck",rel:"noopener noreferrer",className:"waves-effect waves-ligth btn",children:"Ver Noticia Completa"})})})]})})}),m=function(e){var t=e.noticias;return Object(a.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(a.jsx)(d,{noticia:e},t)}))})},h=c(3),O=c(6),v=c(8),f=function(e){var t=Object(n.useState)(e),c=Object(i.a)(t,2),a=c[0],r=c[1];return[a,function(e){var t=e.target,c=t.name,n=t.value;r(Object(O.a)(Object(O.a)({},a),{},Object(h.a)({},c,n)))}]};f.propTypes={initialValue:c.n(v).a.object.isRequired};var x=function(){var e=f({}),t=Object(i.a)(e,2),c=t[0],r=t[1],s=c.select,l="224a8dad982a44b6bc0d71d6c997c701",o=function(e){var t=Object(n.useState)(e),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)({}),l=Object(i.a)(s,2),o=l[0],u=l[1];return Object(n.useEffect)((function(){fetch(a).then((function(e){return e.json()})).then((function(e){return u(e)}))}),[a]),[o,r]}("https://newsapi.org/v2/top-headlines?country=mx&category=".concat(s,"&apiKey=").concat(l)),j=Object(i.a)(o,2),d=j[0].articles,h=j[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{titulo:"Buscador de Noticias"}),Object(a.jsxs)("div",{className:"container white",children:[Object(a.jsx)(u,{handleSubmit:function(e){e.preventDefault(),h("https://newsapi.org/v2/top-headlines?country=mx&category=".concat(s,"&apiKey=").concat(l)),console.log(d)},form:c,setForm:r}),Object(a.jsx)(m,{noticias:d||[]})]})]})};s.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))},4:function(e,t,c){e.exports={buscador:"Formulario_buscador__2ZdI3",heading:"Formulario_heading__1F_Aw",btn_block:"Formulario_btn_block__1evcC"}}},[[17,1,2]]]);
//# sourceMappingURL=main.f1c19fdb.chunk.js.map