(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{497:function(e,a,t){"use strict";var r=t(18),l=t(50),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d=o.a.oneOfType([o.a.number,o.a.string]),f={tag:u.q,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,s=e.tag,o=e.form,i=e.widths,d=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(a,t){var r=e[a];if(delete d[a],r){var l=!t;f.push(l?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var g=Object(u.m)(m()(a,n?"no-gutters":null,o?"form-row":"row",f),t);return c.a.createElement(s,Object(r.a)({},d,{className:g}))};b.propTypes=f,b.defaultProps=g,a.a=b},498:function(e,a,t){"use strict";var r=t(18),l=t(50),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:d,offset:d})]),g={tag:u.q,xs:f,sm:f,md:f,lg:f,xl:f,className:o.a.string,cssModule:o.a.object,widths:o.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,s=e.tag,o=Object(l.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(a,r){var l=e[a];if(delete o[a],l||""===l){var n=!r;if(Object(u.k)(l)){var c,s=n?"-":"-"+a+"-",d=p(n,a,l.size);i.push(Object(u.m)(m()(((c={})[d]=l.size||""===l.size,c["order"+s+l.order]=l.order||0===l.order,c["offset"+s+l.offset]=l.offset||0===l.offset,c)),t))}else{var f=p(n,a,l);i.push(f)}}})),i.length||i.push("col");var d=Object(u.m)(m()(a,i),t);return c.a.createElement(s,Object(r.a)({},o,{className:d}))};E.propTypes=g,E.defaultProps=b,a.a=E},500:function(e,a,t){"use strict";var r=t(18),l=t(50),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.body,o=e.inverse,i=e.outline,d=e.tag,f=e.innerRef,g=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.m)(m()(a,"card",!!o&&"text-white",!!s&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return c.a.createElement(d,Object(r.a)({},g,{className:b,ref:f}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},501:function(e,a,t){"use strict";var r=t(18),l=t(50),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,s=e.tag,o=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(m()(a,"card-body"),t);return c.a.createElement(s,Object(r.a)({},o,{className:i,ref:n}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},502:function(e,a,t){"use strict";var r=t(18),l=t(50),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.q,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),o=Object(u.m)(m()(a,"card-header"),t);return c.a.createElement(n,Object(r.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},504:function(e,a,t){"use strict";var r=t(18),l=t(50),n=t(494),c=t(37),s=t(2),o=t.n(s),i=t(61),m=t.n(i),u=t(492),d=t.n(u),f=t(493),g={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:f.q,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(n.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,c=e.className,s=e.close,i=e.cssModule,m=e.color,u=e.outline,g=e.size,b=e.tag,p=e.innerRef,E=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof E.children&&(E.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var N="btn"+(u?"-outline":"")+"-"+m,h=Object(f.m)(d()(c,{close:s},s||"btn",s||N,!!g&&"btn-"+g,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),i);E.href&&"button"===b&&(b="a");var y=s?"Close":null;return o.a.createElement(b,Object(r.a)({type:"button"===b&&E.onClick?"button":void 0},E,{className:h,ref:p,onClick:this.onClick,"aria-label":t||y}))},a}(o.a.Component);b.propTypes=g,b.defaultProps={color:"secondary",tag:"button"},a.a=b},524:function(e,a,t){"use strict";var r=t(18),l=t(50),n=t(2),c=t.n(n),s=t(61),o=t.n(s),i=t(492),m=t.n(i),u=t(493),d={tag:u.q,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(l.a)(e,["className","cssModule","tag"]),o=Object(u.m)(m()(a,"card-footer"),t);return c.a.createElement(n,Object(r.a)({},s,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},765:function(e,a,t){"use strict";t.r(a);var r=t(152),l=t(153),n=t(155),c=t(154),s=t(2),o=t.n(s),i=t(497),m=t(498),u=t(500),d=t(502),f=t(501),g=t(730),b=t(524),p=t(504),E=function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(i.a,null,o.a.createElement(m.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Badges"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/badge/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(f.a,null,o.a.createElement("h1",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h2",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h3",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h4",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h5",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New")),o.a.createElement("h6",null,"Heading ",o.a.createElement(g.a,{color:"secondary"},"New"))),o.a.createElement(b.a,null,o.a.createElement(p.a,{color:"primary",outline:!0},"Notifications ",o.a.createElement(g.a,{color:"secondary",pill:!0,style:{position:"static"}},"9"))))),o.a.createElement(m.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Badges")," ",o.a.createElement("small",null,"contextual variations")),o.a.createElement(f.a,null,o.a.createElement(g.a,{className:"mr-1",color:"primary"},"Primary"),o.a.createElement(g.a,{className:"mr-1",color:"secondary"},"Secondary"),o.a.createElement(g.a,{className:"mr-1",color:"success"},"Success"),o.a.createElement(g.a,{className:"mr-1",color:"danger"},"Danger"),o.a.createElement(g.a,{className:"mr-1",color:"warning"},"Warning"),o.a.createElement(g.a,{className:"mr-1",color:"info"},"Info"),o.a.createElement(g.a,{className:"mr-1",color:"light"},"Light"),o.a.createElement(g.a,{className:"mr-1",color:"dark"},"Dark"))),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Badges")," ",o.a.createElement("small",null,"pill badges")),o.a.createElement(f.a,null,o.a.createElement(g.a,{className:"mr-1",color:"primary",pill:!0},"Primary"),o.a.createElement(g.a,{className:"mr-1",color:"secondary",pill:!0},"Secondary"),o.a.createElement(g.a,{className:"mr-1",color:"success",pill:!0},"Success"),o.a.createElement(g.a,{className:"mr-1",color:"danger",pill:!0},"Danger"),o.a.createElement(g.a,{className:"mr-1",color:"warning",pill:!0},"Warning"),o.a.createElement(g.a,{className:"mr-1",color:"info",pill:!0},"Info"),o.a.createElement(g.a,{className:"mr-1",color:"light",pill:!0},"Light"),o.a.createElement(g.a,{className:"mr-1",color:"dark",pill:!0},"Dark"))),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Badges")," ",o.a.createElement("small",null,"links")),o.a.createElement(f.a,null,o.a.createElement(g.a,{className:"mr-1",href:"#",color:"primary"},"Primary"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"secondary"},"Secondary"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"success"},"Success"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"danger"},"Danger"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"warning"},"Warning"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"info"},"Info"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"light"},"Light"),o.a.createElement(g.a,{className:"mr-1",href:"#",color:"dark",pill:!0},"Dark"))))))}}]),t}(s.Component);a.default=E}}]);
//# sourceMappingURL=24.9f143b8b.chunk.js.map