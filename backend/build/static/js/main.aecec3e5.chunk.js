(this["webpackJsonpcreate-react-app-with-express"]=this["webpackJsonpcreate-react-app-with-express"]||[]).push([[0],{22:function(e,s,t){},23:function(e,s,t){},33:function(e,s,t){},34:function(e,s,t){},35:function(e,s,t){"use strict";t.r(s);var c=t(0),n=t.n(c),a=t(15),r=t.n(a),i=t(7),l=t(9),j=t(2),b=(t(22),t(11)),o=(t(23),t(1));var O=function(e){e.setAppName,e.setAppFam;var s,t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)(!1),O=Object(i.a)(l,2),u=O[0],d=O[1],h=Object(c.useState)("nes-input"),p=Object(i.a)(h,2),x=p[0],m=p[1],v=Object(j.f)();return Object(o.jsx)("div",{class:"work",children:Object(o.jsx)("div",{class:"center",children:Object(o.jsxs)("div",{class:"nes-container is-rounded",children:[Object(o.jsx)("p",{class:"title",id:"welcome",children:"Welcome to Fam Reveal"}),Object(o.jsxs)("form",{class:"container",onSubmit:function(e){e.preventDefault(),console.log(a);var s=new FormData;s.append("name",a),console.log(s),fetch("/reveal",{method:"POST",body:s}).then((function(e){return e.json()})).then((function(e){"message"in e?(d(!0),m("nes-input is-error")):(console.log(e),d(!1),m("nes-input"),v.push("/reveal",{params:e}))})).catch((function(e){console.log(e),console.log("got in here"),d(!0)}))},children:[Object(o.jsx)("label",{children:"Choose your family:"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{class:"nes-bulbasaur is-small"}),Object(o.jsx)("i",{class:"nes-charmander is-small"}),Object(o.jsx)("i",{class:"nes-squirtle is-small"})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{class:"nes-field",children:[Object(o.jsx)("input",{type:"text",class:x,placeholder:"Your Name",onChange:function(e){return r(e.target.value)},required:!0}),u?Object(o.jsx)("label",{class:"nes-text is-error",id:"error",children:"Wrong name. Please try again."}):null]}),Object(o.jsx)("button",(s={type:"button",class:"nes-btn is-success"},Object(b.a)(s,"type","submit"),Object(b.a)(s,"id","reveal_btn"),Object(b.a)(s,"children","Reveal!"),s)),Object(o.jsx)("i",{class:"nes-pokeball is-small"})]})]})})})};t(33);var u=function(){var e=Object(c.useState)(""),s=Object(i.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(""),r=Object(i.a)(a,2),l=r[0],b=r[1],O=Object(c.useState)(""),u=Object(i.a)(O,2),d=u[0],h=u[1],p=Object(j.f)(),x=Object(j.g)().state.params;return Object(c.useEffect)((function(){n(x.name),b(x.fam),"Tight"===l&&h("nes-charmander"),"Loose"===l&&h("nes-squirtle"),"Close"===l&&h("nes-bulbasaur")})),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{class:"nes-btn is-success margin",onClick:function(){p.push("/")},children:"Back"}),Object(o.jsx)("div",{class:"work",children:Object(o.jsx)("div",{class:"center",children:Object(o.jsxs)("div",{class:"nes-container is-rounded",children:[Object(o.jsx)("p",{class:"title",id:"welcome",children:Object(o.jsxs)("span",{class:l,children:["Welcome to ",l," Fam!"]})}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsx)("i",{class:d+" flip"}),Object(o.jsx)("div",{class:"vertical",children:Object(o.jsx)("h1",{class:l,id:"name",children:t})}),Object(o.jsx)("i",{class:d})]}),Object(o.jsx)("br",{}),Object(o.jsx)("img",{src:"./"+l+".gif",alt:l}),Object(o.jsx)("br",{})]})})})]})};var d=function(){var e=Object(c.useState)("Andy Nguyen"),s=Object(i.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)("Tight"),r=Object(i.a)(a,2),b=r[0],d=r[1];return Object(o.jsx)(l.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/reveal",children:Object(o.jsx)(u,{appName:t,appFam:b})}),Object(o.jsx)(j.a,{path:"/",children:Object(o.jsx)(O,{setAppName:n,setAppFam:d})})]})})};t(34);r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(d,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.aecec3e5.chunk.js.map