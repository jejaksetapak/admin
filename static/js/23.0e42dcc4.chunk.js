(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{507:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return n}))},520:function(e,t,a){"use strict";var n=a(18),r=a(496),o=a(50),s=a(37),c=a(2),l=a.n(c),i=a(61),p=a.n(i),d=a(492),m=a.n(d),u=a(739),f=a(499),h=a(493),b={tag:h.q,children:p.a.node.isRequired,right:p.a.bool,flip:p.a.bool,modifiers:p.a.object,className:p.a.string,cssModule:p.a.object,persist:p.a.bool,positionFixed:p.a.bool},g={flip:{enabled:!1}},v={up:"top",left:"left",right:"right",down:"bottom"},E=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,s=t.cssModule,c=t.right,i=t.tag,p=t.flip,d=t.modifiers,f=t.persist,b=t.positionFixed,E=Object(o.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),N=Object(h.m)(m()(a,"dropdown-menu",{"dropdown-menu-right":c,show:this.context.isOpen}),s),O=i;if(f||this.context.isOpen&&!this.context.inNavbar){var j=(v[this.context.direction]||"bottom")+"-"+(c?"end":"start"),k=p?d:Object(r.a)({},d,{},g),x=!!b;return l.a.createElement(u.a,{placement:j,modifiers:k,positionFixed:x},(function(t){var a=t.ref,r=t.style,o=t.placement;return l.a.createElement(O,Object(n.a)({tabIndex:"-1",role:"menu",ref:a,style:r},E,{"aria-hidden":!e.context.isOpen,className:N,"x-placement":o}))}))}return l.a.createElement(O,Object(n.a)({tabIndex:"-1",role:"menu"},E,{"aria-hidden":!this.context.isOpen,className:N,"x-placement":E.placement}))},t}(l.a.Component);E.propTypes=b,E.defaultProps={tag:"div",flip:!0},E.contextType=f.a,t.a=E},521:function(e,t,a){"use strict";var n=a(18),r=a(50),o=a(494),s=a(37),c=a(2),l=a.n(c),i=a(61),p=a.n(i),d=a(492),m=a.n(d),u=a(499),f=a(493),h={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:f.q,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(f.n)(this.props,["toggle"]),o=a.className,s=a.cssModule,c=a.divider,i=a.tag,p=a.header,d=a.active,u=Object(r.a)(a,["className","cssModule","divider","tag","header","active"]),h=Object(f.m)(m()(o,{disabled:u.disabled,"dropdown-item":!c&&!p,active:d,"dropdown-header":p,"dropdown-divider":c}),s);return"button"===i&&(p?i="h6":c?i="div":u.href&&(i="a")),l.a.createElement(i,Object(n.a)({type:"button"===i&&(u.onClick||this.props.toggle)?"button":void 0},u,{tabIndex:e,role:t,className:h,onClick:this.onClick}))},t}(l.a.Component);b.propTypes=h,b.defaultProps={tag:"button",toggle:!0},b.contextType=u.a,t.a=b},523:function(e,t,a){"use strict";var n=a(18),r=a(50),o=a(494),s=a(37),c=a(2),l=a.n(c),i=a(61),p=a.n(i),d=a(492),m=a.n(d),u=a(513),f=a.n(u),h=a(509),b=a.n(h),g=a(103),v=a.n(g),E=a(510),N=a.n(E),O=a(512),j=a.n(O),k=a(511),x=a(514),y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t=e.call.apply(e,[this].concat(n))||this,N()(b()(t),"refHandler",(function(e){Object(x.b)(t.props.innerRef,e),Object(x.a)(t.props.setReferenceNode,e)})),t}v()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){Object(x.b)(this.props.innerRef,null)},a.render=function(){return j()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(x.c)(this.props.children)({ref:this.refHandler})},t}(c.Component);function C(e){return c.createElement(k.b.Consumer,null,(function(t){return c.createElement(y,f()({setReferenceNode:t},e))}))}var w=a(499),T=a(493),M=a(504),L={caret:p.a.bool,color:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,disabled:p.a.bool,onClick:p.a.func,"aria-haspopup":p.a.bool,split:p.a.bool,tag:T.q,nav:p.a.bool},R=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,o=a.className,s=a.color,c=a.cssModule,i=a.caret,p=a.split,d=a.nav,u=a.tag,f=a.innerRef,h=Object(r.a)(a,["className","color","cssModule","caret","split","nav","tag","innerRef"]),b=h["aria-label"]||"Toggle Dropdown",g=Object(T.m)(m()(o,{"dropdown-toggle":i||p,"dropdown-toggle-split":p,"nav-link":d}),c),v=h.children||l.a.createElement("span",{className:"sr-only"},b);return d&&!u?(e="a",h.href="#"):u?e=u:(e=M.a,h.color=s,h.cssModule=c),this.context.inNavbar?l.a.createElement(e,Object(n.a)({},h,{className:g,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:v})):l.a.createElement(C,{innerRef:f},(function(a){var r,o=a.ref;return l.a.createElement(e,Object(n.a)({},h,((r={})["string"===typeof e?"ref":"innerRef"]=o,r),{className:g,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:v}))}))},t}(l.a.Component);R.propTypes=L,R.defaultProps={"aria-haspopup":!0,color:"secondary"},R.contextType=w.a;t.a=R},563:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(496),r=a(18),o=a(494),s=a(37),c=a(2),l=a.n(c),i=a(61),p=a.n(i),d=a(519),m=a(493),u=["defaultOpen"],f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},a.render=function(){return l.a.createElement(d.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(m.n)(this.props,u)))},t}(c.Component);f.propTypes=Object(n.a)({defaultOpen:p.a.bool,onToggle:p.a.func},d.a.propTypes)},603:function(e,t,a){e.exports=a.p+"static/media/logo.537211e7.svg"},604:function(e,t,a){e.exports=a.p+"static/media/sygnet.c8d5c2d9.svg"},738:function(e,t,a){"use strict";a.r(t);var n=a(507),r=a(152),o=a(153),s=a(155),c=a(154),l=a(2),i=a.n(l),p=a(158),d=a(731),m=a(728),u=a(730),f=a(563),h=a(523),b=a(520),g=a(521),v=a(533),E=a(603),N=a.n(E),O=a(604),j=a.n(O),k=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props;t.children,Object(n.a)(t,["children"]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.m,{className:"d-lg-none",display:"md",mobile:!0}),i.a.createElement(v.f,{full:{src:N.a,width:89,height:25,alt:"CoreUI Logo"},minimized:{src:j.a,width:30,height:30,alt:"CoreUI Logo"}}),i.a.createElement(v.m,{className:"d-md-down-none",display:"lg"}),i.a.createElement(d.a,{className:"d-md-down-none",navbar:!0},i.a.createElement(m.a,{className:"px-3"},i.a.createElement(p.NavLink,{to:"/dashboard",className:"nav-link"},"Dashboard")),i.a.createElement(m.a,{className:"px-3"},i.a.createElement(p.Link,{to:"/users",className:"nav-link"},"Users")),i.a.createElement(m.a,{className:"px-3"},i.a.createElement(p.NavLink,{to:"#",className:"nav-link"},"Settings"))),i.a.createElement(d.a,{className:"ml-auto",navbar:!0},i.a.createElement(m.a,{className:"d-md-down-none"},i.a.createElement(p.NavLink,{to:"#",className:"nav-link"},i.a.createElement("i",{className:"icon-bell"}),i.a.createElement(u.a,{pill:!0,color:"danger"},"5"))),i.a.createElement(m.a,{className:"d-md-down-none"},i.a.createElement(p.NavLink,{to:"#",className:"nav-link"},i.a.createElement("i",{className:"icon-list"}))),i.a.createElement(m.a,{className:"d-md-down-none"},i.a.createElement(p.NavLink,{to:"#",className:"nav-link"},i.a.createElement("i",{className:"icon-location-pin"}))),i.a.createElement(f.a,{nav:!0,direction:"down"},i.a.createElement(h.a,{nav:!0},i.a.createElement("img",{src:"../../assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),i.a.createElement(b.a,{right:!0},i.a.createElement(g.a,{header:!0,tag:"div",className:"text-center"},i.a.createElement("strong",null,"Account")),i.a.createElement(g.a,null,i.a.createElement("i",{className:"fa fa-bell-o"})," Updates",i.a.createElement(u.a,{color:"info"},"42")),i.a.createElement(g.a,null,i.a.createElement("i",{className:"fa fa-envelope-o"})," Messages",i.a.createElement(u.a,{color:"success"},"42")),i.a.createElement(g.a,null,i.a.createElement("i",{className:"fa fa-tasks"})," Tasks",i.a.createElement(u.a,{color:"danger"},"42")),i.a.createElement(g.a,null,i.a.createElement("i",{className:"fa fa-comments"})," Comments",i.a.createElement(u.a,{color:"warning"},"42")),i.a.createElement(g.a,{header:!0,tag:"div",className:"text-center"},i.a.createElement("strong",null,"Settings")),i.a.createElement(g.a,null,i.a.createElement("i",{className:"fa fa-user"})," Profile"),i.a.createElement(g.a,null,i.a.createElement("i",{className:"fa fa-wrench"})," Settings"),i.a.createElement(g.a,null,i.a.createElement("i",{className:"fa fa-usd"})," Payments",i.a.createElement(u.a,{color:"secondary"},"42")),i.a.createElement(g.a,null,i.a.createElement("i",{className:"fa fa-file"})," Projects",i.a.createElement(u.a,{color:"primary"},"42")),i.a.createElement(g.a,{divider:!0}),i.a.createElement(g.a,null,i.a.createElement("i",{className:"fa fa-shield"})," Lock Account"),i.a.createElement(g.a,{onClick:function(t){return e.props.onLogout(t)}},i.a.createElement("i",{className:"fa fa-lock"})," Logout")))),i.a.createElement(v.b,{className:"d-md-down-none"}))}}]),a}(l.Component);k.defaultProps={},t.default=k}}]);
//# sourceMappingURL=23.0e42dcc4.chunk.js.map