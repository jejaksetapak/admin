(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[33],{497:function(e,a,t){"use strict";var n=t(18),l=t(50),m=t(2),s=t.n(m),r=t(61),c=t.n(r),b=t(492),i=t.n(b),o=t(493),E=c.a.oneOfType([c.a.number,c.a.string]),f={tag:o.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:E,sm:E,md:E,lg:E,xl:E},u={tag:"div",widths:["xs","sm","md","lg","xl"]},d=function(e){var a=e.className,t=e.cssModule,m=e.noGutters,r=e.tag,c=e.form,b=e.widths,E=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];b.forEach((function(a,t){var n=e[a];if(delete E[a],n){var l=!t;f.push(l?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var u=Object(o.m)(i()(a,m?"no-gutters":null,c?"form-row":"row",f),t);return s.a.createElement(r,Object(n.a)({},E,{className:u}))};d.propTypes=f,d.defaultProps=u,a.a=d},498:function(e,a,t){"use strict";var n=t(18),l=t(50),m=t(2),s=t.n(m),r=t(61),c=t.n(r),b=t(492),i=t.n(b),o=t(493),E=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:E,offset:E})]),u={tag:o.q,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},d={tag:"div",widths:["xs","sm","md","lg","xl"]},N=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},p=function(e){var a=e.className,t=e.cssModule,m=e.widths,r=e.tag,c=Object(l.a)(e,["className","cssModule","widths","tag"]),b=[];m.forEach((function(a,n){var l=e[a];if(delete c[a],l||""===l){var m=!n;if(Object(o.k)(l)){var s,r=m?"-":"-"+a+"-",E=N(m,a,l.size);b.push(Object(o.m)(i()(((s={})[E]=l.size||""===l.size,s["order"+r+l.order]=l.order||0===l.order,s["offset"+r+l.offset]=l.offset||0===l.offset,s)),t))}else{var f=N(m,a,l);b.push(f)}}})),b.length||b.push("col");var E=Object(o.m)(i()(a,b),t);return s.a.createElement(r,Object(n.a)({},c,{className:E}))};p.propTypes=u,p.defaultProps=d,a.a=p},500:function(e,a,t){"use strict";var n=t(18),l=t(50),m=t(2),s=t.n(m),r=t(61),c=t.n(r),b=t(492),i=t.n(b),o=t(493),E={tag:o.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,m=e.color,r=e.body,c=e.inverse,b=e.outline,E=e.tag,f=e.innerRef,u=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),d=Object(o.m)(i()(a,"card",!!c&&"text-white",!!r&&"card-body",!!m&&(b?"border":"bg")+"-"+m),t);return s.a.createElement(E,Object(n.a)({},u,{className:d,ref:f}))};f.propTypes=E,f.defaultProps={tag:"div"},a.a=f},501:function(e,a,t){"use strict";var n=t(18),l=t(50),m=t(2),s=t.n(m),r=t(61),c=t.n(r),b=t(492),i=t.n(b),o=t(493),E={tag:o.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,m=e.innerRef,r=e.tag,c=Object(l.a)(e,["className","cssModule","innerRef","tag"]),b=Object(o.m)(i()(a,"card-body"),t);return s.a.createElement(r,Object(n.a)({},c,{className:b,ref:m}))};f.propTypes=E,f.defaultProps={tag:"div"},a.a=f},502:function(e,a,t){"use strict";var n=t(18),l=t(50),m=t(2),s=t.n(m),r=t(61),c=t.n(r),b=t(492),i=t.n(b),o=t(493),E={tag:o.q,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,m=e.tag,r=Object(l.a)(e,["className","cssModule","tag"]),c=Object(o.m)(i()(a,"card-header"),t);return s.a.createElement(m,Object(n.a)({},r,{className:c}))};f.propTypes=E,f.defaultProps={tag:"div"},a.a=f},504:function(e,a,t){"use strict";var n=t(18),l=t(50),m=t(494),s=t(37),r=t(2),c=t.n(r),b=t(61),i=t.n(b),o=t(492),E=t.n(o),f=t(493),u={active:i.a.bool,"aria-label":i.a.string,block:i.a.bool,color:i.a.string,disabled:i.a.bool,outline:i.a.bool,tag:f.q,innerRef:i.a.oneOfType([i.a.object,i.a.func,i.a.string]),onClick:i.a.func,size:i.a.string,children:i.a.node,className:i.a.string,cssModule:i.a.object,close:i.a.bool},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(m.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],m=e.block,s=e.className,r=e.close,b=e.cssModule,i=e.color,o=e.outline,u=e.size,d=e.tag,N=e.innerRef,p=Object(l.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof p.children&&(p.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(o?"-outline":"")+"-"+i,z=Object(f.m)(E()(s,{close:r},r||"btn",r||g,!!u&&"btn-"+u,!!m&&"btn-block",{active:a,disabled:this.props.disabled}),b);p.href&&"button"===d&&(d="a");var h=r?"Close":null;return c.a.createElement(d,Object(n.a)({type:"button"===d&&p.onClick?"button":void 0},p,{className:z,ref:N,onClick:this.onClick,"aria-label":t||h}))},a}(c.a.Component);d.propTypes=u,d.defaultProps={color:"secondary",tag:"button"},a.a=d},756:function(e,a,t){"use strict";t.r(a);var n=t(152),l=t(153),m=t(155),s=t(154),r=t(2),c=t.n(r),b=t(497),i=t(498),o=t(500),E=t(502),f=t(501),u=t(504),d=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(b.a,null,c.a.createElement(i.a,{xs:"12"},c.a.createElement(o.a,null,c.a.createElement(E.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Brand Button"),c.a.createElement("small",null," Usage ex. "),c.a.createElement("code",null,'<Button className="btn-facebook btn-brand"><i className="fa fa-facebook"></i><span>Facebook</span></Button>')),c.a.createElement(f.a,null,c.a.createElement("h6",null,"Size Small",c.a.createElement("small",null," Add this class ",c.a.createElement("code",null,".btn-sm"))),c.a.createElement("p",null,c.a.createElement(u.a,{size:"sm",className:"btn-facebook btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-facebook"}),c.a.createElement("span",null,"Facebook")),c.a.createElement(u.a,{size:"sm",className:"btn-twitter btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-twitter"}),c.a.createElement("span",null,"Twitter")),c.a.createElement(u.a,{size:"sm",className:"btn-linkedin btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-linkedin"}),c.a.createElement("span",null,"LinkedIn")),c.a.createElement(u.a,{size:"sm",className:"btn-flickr btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-flickr"}),c.a.createElement("span",null,"Flickr")),c.a.createElement(u.a,{size:"sm",className:"btn-tumblr btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-tumblr"}),c.a.createElement("span",null,"Tumblr")),c.a.createElement(u.a,{size:"sm",className:"btn-xing btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-xing"}),c.a.createElement("span",null,"Xing")),c.a.createElement(u.a,{size:"sm",className:"btn-github btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-github"}),c.a.createElement("span",null,"Github")),c.a.createElement(u.a,{size:"sm",className:"btn-html5 btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-html5"}),c.a.createElement("span",null,"HTML5")),c.a.createElement(u.a,{size:"sm",className:"btn-openid btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-openid"}),c.a.createElement("span",null,"OpenID")),c.a.createElement(u.a,{size:"sm",className:"btn-stack-overflow btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-stack-overflow"}),c.a.createElement("span",null,"StackOverflow")),c.a.createElement(u.a,{size:"sm",className:"btn-css3 btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-css3"}),c.a.createElement("span",null,"CSS3")),c.a.createElement(u.a,{size:"sm",className:"btn-youtube btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-youtube"}),c.a.createElement("span",null,"YouTube")),c.a.createElement(u.a,{size:"sm",className:"btn-dribbble btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dribbble"}),c.a.createElement("span",null,"Dribbble")),c.a.createElement(u.a,{size:"sm",className:"btn-google-plus btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-google-plus"}),c.a.createElement("span",null,"Google+")),c.a.createElement(u.a,{size:"sm",className:"btn-instagram btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-instagram"}),c.a.createElement("span",null,"Instagram")),c.a.createElement(u.a,{size:"sm",className:"btn-pinterest btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-pinterest"}),c.a.createElement("span",null,"Pinterest")),c.a.createElement(u.a,{size:"sm",className:"btn-vk btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vk"}),c.a.createElement("span",null,"VK")),c.a.createElement(u.a,{size:"sm",className:"btn-yahoo btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-yahoo"}),c.a.createElement("span",null,"Yahoo")),c.a.createElement(u.a,{size:"sm",className:"btn-behance btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-behance"}),c.a.createElement("span",null,"Behance")),c.a.createElement(u.a,{size:"sm",className:"btn-dropbox btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dropbox"}),c.a.createElement("span",null,"Dropbox")),c.a.createElement(u.a,{size:"sm",className:"btn-reddit btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-reddit"}),c.a.createElement("span",null,"Reddit")),c.a.createElement(u.a,{size:"sm",className:"btn-spotify btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-spotify"}),c.a.createElement("span",null,"Spotify")),c.a.createElement(u.a,{size:"sm",className:"btn-vine btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vine"}),c.a.createElement("span",null,"Vine")),c.a.createElement(u.a,{size:"sm",className:"btn-foursquare btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-foursquare"}),c.a.createElement("span",null,"Forsquare")),c.a.createElement(u.a,{size:"sm",className:"btn-vimeo btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vimeo"}),c.a.createElement("span",null,"Vimeo"))),c.a.createElement("h6",null,"Size Normal"),c.a.createElement("p",null,c.a.createElement(u.a,{className:"btn-facebook btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-facebook"}),c.a.createElement("span",null,"Facebook")),c.a.createElement(u.a,{className:"btn-twitter btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-twitter"}),c.a.createElement("span",null,"Twitter")),c.a.createElement(u.a,{className:"btn-linkedin btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-linkedin"}),c.a.createElement("span",null,"LinkedIn")),c.a.createElement(u.a,{className:"btn-flickr btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-flickr"}),c.a.createElement("span",null,"Flickr")),c.a.createElement(u.a,{className:"btn-tumblr btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-tumblr"}),c.a.createElement("span",null,"Tumblr")),c.a.createElement(u.a,{className:"btn-xing btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-xing"}),c.a.createElement("span",null,"Xing")),c.a.createElement(u.a,{className:"btn-github btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-github"}),c.a.createElement("span",null,"Github")),c.a.createElement(u.a,{className:"btn-html5 btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-html5"}),c.a.createElement("span",null,"HTML5")),c.a.createElement(u.a,{className:"btn-openid btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-openid"}),c.a.createElement("span",null,"OpenID")),c.a.createElement(u.a,{className:"btn-stack-overflow btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-stack-overflow"}),c.a.createElement("span",null,"StackOverflow")),c.a.createElement(u.a,{className:"btn-css3 btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-css3"}),c.a.createElement("span",null,"CSS3")),c.a.createElement(u.a,{className:"btn-youtube btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-youtube"}),c.a.createElement("span",null,"YouTube")),c.a.createElement(u.a,{className:"btn-dribbble btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dribbble"}),c.a.createElement("span",null,"Dribbble")),c.a.createElement(u.a,{className:"btn-google-plus btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-google-plus"}),c.a.createElement("span",null,"Google+")),c.a.createElement(u.a,{className:"btn-instagram btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-instagram"}),c.a.createElement("span",null,"Instagram")),c.a.createElement(u.a,{className:"btn-pinterest btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-pinterest"}),c.a.createElement("span",null,"Pinterest")),c.a.createElement(u.a,{className:"btn-vk btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vk"}),c.a.createElement("span",null,"VK")),c.a.createElement(u.a,{className:"btn-yahoo btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-yahoo"}),c.a.createElement("span",null,"Yahoo")),c.a.createElement(u.a,{className:"btn-behance btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-behance"}),c.a.createElement("span",null,"Behance")),c.a.createElement(u.a,{className:"btn-dropbox btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dropbox"}),c.a.createElement("span",null,"Dropbox")),c.a.createElement(u.a,{className:"btn-reddit btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-reddit"}),c.a.createElement("span",null,"Reddit")),c.a.createElement(u.a,{className:"btn-spotify btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-spotify"}),c.a.createElement("span",null,"Spotify")),c.a.createElement(u.a,{className:"btn-vine btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vine"}),c.a.createElement("span",null,"Vine")),c.a.createElement(u.a,{className:"btn-foursquare btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-foursquare"}),c.a.createElement("span",null,"Forsquare")),c.a.createElement(u.a,{className:"btn-vimeo btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vimeo"}),c.a.createElement("span",null,"Vimeo"))),c.a.createElement("h6",null,"Size Large",c.a.createElement("small",null," Add this class ",c.a.createElement("code",null,".btn-lg"))),c.a.createElement("p",null,c.a.createElement(u.a,{size:"lg",className:"btn-facebook btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-facebook"}),c.a.createElement("span",null,"Facebook")),c.a.createElement(u.a,{size:"lg",className:"btn-twitter btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-twitter"}),c.a.createElement("span",null,"Twitter")),c.a.createElement(u.a,{size:"lg",className:"btn-linkedin btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-linkedin"}),c.a.createElement("span",null,"LinkedIn")),c.a.createElement(u.a,{size:"lg",className:"btn-flickr btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-flickr"}),c.a.createElement("span",null,"Flickr")),c.a.createElement(u.a,{size:"lg",className:"btn-tumblr btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-tumblr"}),c.a.createElement("span",null,"Tumblr")),c.a.createElement(u.a,{size:"lg",className:"btn-xing btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-xing"}),c.a.createElement("span",null,"Xing")),c.a.createElement(u.a,{size:"lg",className:"btn-github btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-github"}),c.a.createElement("span",null,"Github")),c.a.createElement(u.a,{size:"lg",className:"btn-html5 btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-html5"}),c.a.createElement("span",null,"HTML5")),c.a.createElement(u.a,{size:"lg",className:"btn-openid btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-openid"}),c.a.createElement("span",null,"OpenID")),c.a.createElement(u.a,{size:"lg",className:"btn-stack-overflow btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-stack-overflow"}),c.a.createElement("span",null,"StackOverflow")),c.a.createElement(u.a,{size:"lg",className:"btn-css3 btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-css3"}),c.a.createElement("span",null,"CSS3")),c.a.createElement(u.a,{size:"lg",className:"btn-youtube btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-youtube"}),c.a.createElement("span",null,"YouTube")),c.a.createElement(u.a,{size:"lg",className:"btn-dribbble btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dribbble"}),c.a.createElement("span",null,"Dribbble")),c.a.createElement(u.a,{size:"lg",className:"btn-google-plus btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-google-plus"}),c.a.createElement("span",null,"Google+")),c.a.createElement(u.a,{size:"lg",className:"btn-instagram btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-instagram"}),c.a.createElement("span",null,"Instagram")),c.a.createElement(u.a,{size:"lg",className:"btn-pinterest btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-pinterest"}),c.a.createElement("span",null,"Pinterest")),c.a.createElement(u.a,{size:"lg",className:"btn-vk btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vk"}),c.a.createElement("span",null,"VK")),c.a.createElement(u.a,{size:"lg",className:"btn-yahoo btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-yahoo"}),c.a.createElement("span",null,"Yahoo")),c.a.createElement(u.a,{size:"lg",className:"btn-behance btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-behance"}),c.a.createElement("span",null,"Behance")),c.a.createElement(u.a,{size:"lg",className:"btn-dropbox btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dropbox"}),c.a.createElement("span",null,"Dropbox")),c.a.createElement(u.a,{size:"lg",className:"btn-reddit btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-reddit"}),c.a.createElement("span",null,"Reddit")),c.a.createElement(u.a,{size:"lg",className:"btn-spotify btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-spotify"}),c.a.createElement("span",null,"Spotify")),c.a.createElement(u.a,{size:"lg",className:"btn-vine btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vine"}),c.a.createElement("span",null,"Vine")),c.a.createElement(u.a,{size:"lg",className:"btn-foursquare btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-foursquare"}),c.a.createElement("span",null,"Forsquare")),c.a.createElement(u.a,{size:"lg",className:"btn-vimeo btn-brand mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vimeo"}),c.a.createElement("span",null,"Vimeo")))))),c.a.createElement(i.a,{xs:"12"},c.a.createElement(o.a,null,c.a.createElement(E.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Brand Button"),c.a.createElement("small",null," Icons only. Usage ex. "),c.a.createElement("code",null,'<Button className="btn-facebook btn-brand icon"><i className="fa fa-facebook"></i></Button>')),c.a.createElement(f.a,null,c.a.createElement("h6",null,"Size Small",c.a.createElement("small",null," Add this class ",c.a.createElement("code",null,".btn-sm"))),c.a.createElement("p",null,c.a.createElement(u.a,{size:"sm",className:"btn-facebook btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-facebook"})),c.a.createElement(u.a,{size:"sm",className:"btn-twitter btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-twitter"})),c.a.createElement(u.a,{size:"sm",className:"btn-linkedin btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-linkedin"})),c.a.createElement(u.a,{size:"sm",className:"btn-flickr btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-flickr"})),c.a.createElement(u.a,{size:"sm",className:"btn-tumblr btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-tumblr"})),c.a.createElement(u.a,{size:"sm",className:"btn-xing btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-xing"})),c.a.createElement(u.a,{size:"sm",className:"btn-github btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-github"})),c.a.createElement(u.a,{size:"sm",className:"btn-html5 btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-html5"})),c.a.createElement(u.a,{size:"sm",className:"btn-openid btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-openid"})),c.a.createElement(u.a,{size:"sm",className:"btn-stack-overflow btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-stack-overflow"})),c.a.createElement(u.a,{size:"sm",className:"btn-css3 btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-css3"})),c.a.createElement(u.a,{size:"sm",className:"btn-youtube btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-youtube"})),c.a.createElement(u.a,{size:"sm",className:"btn-dribbble btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dribbble"})),c.a.createElement(u.a,{size:"sm",className:"btn-google-plus btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-google-plus"})),c.a.createElement(u.a,{size:"sm",className:"btn-instagram btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-instagram"})),c.a.createElement(u.a,{size:"sm",className:"btn-pinterest btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-pinterest"})),c.a.createElement(u.a,{size:"sm",className:"btn-vk btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vk"})),c.a.createElement(u.a,{size:"sm",className:"btn-yahoo btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-yahoo"})),c.a.createElement(u.a,{size:"sm",className:"btn-behance btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-behance"})),c.a.createElement(u.a,{size:"sm",className:"btn-dropbox btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dropbox"})),c.a.createElement(u.a,{size:"sm",className:"btn-reddit btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-reddit"})),c.a.createElement(u.a,{size:"sm",className:"btn-spotify btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-spotify"})),c.a.createElement(u.a,{size:"sm",className:"btn-vine btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vine"})),c.a.createElement(u.a,{size:"sm",className:"btn-foursquare btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-foursquare"})),c.a.createElement(u.a,{size:"sm",className:"btn-vimeo btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vimeo"}))),c.a.createElement("h6",null,"Size Normal"),c.a.createElement("p",null,c.a.createElement(u.a,{className:"btn-facebook btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-facebook"})),c.a.createElement(u.a,{className:"btn-twitter btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-twitter"})),c.a.createElement(u.a,{className:"btn-linkedin btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-linkedin"})),c.a.createElement(u.a,{className:"btn-flickr btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-flickr"})),c.a.createElement(u.a,{className:"btn-tumblr btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-tumblr"})),c.a.createElement(u.a,{className:"btn-xing btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-xing"})),c.a.createElement(u.a,{className:"btn-github btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-github"})),c.a.createElement(u.a,{className:"btn-html5 btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-html5"})),c.a.createElement(u.a,{className:"btn-openid btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-openid"})),c.a.createElement(u.a,{className:"btn-stack-overflow btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-stack-overflow"})),c.a.createElement(u.a,{className:"btn-css3 btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-css3"})),c.a.createElement(u.a,{className:"btn-youtube btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-youtube"})),c.a.createElement(u.a,{className:"btn-dribbble btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dribbble"})),c.a.createElement(u.a,{className:"btn-google-plus btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-google-plus"})),c.a.createElement(u.a,{className:"btn-instagram btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-instagram"})),c.a.createElement(u.a,{className:"btn-pinterest btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-pinterest"})),c.a.createElement(u.a,{className:"btn-vk btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vk"})),c.a.createElement(u.a,{className:"btn-yahoo btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-yahoo"})),c.a.createElement(u.a,{className:"btn-behance btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-behance"})),c.a.createElement(u.a,{className:"btn-dropbox btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dropbox"})),c.a.createElement(u.a,{className:"btn-reddit btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-reddit"})),c.a.createElement(u.a,{className:"btn-spotify btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-spotify"})),c.a.createElement(u.a,{className:"btn-vine btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vine"})),c.a.createElement(u.a,{className:"btn-foursquare btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-foursquare"})),c.a.createElement(u.a,{className:"btn-vimeo btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vimeo"}))),c.a.createElement("h6",null,"Size Large",c.a.createElement("small",null," Add this class ",c.a.createElement("code",null,".btn-lg"))),c.a.createElement("p",null,c.a.createElement(u.a,{size:"lg",className:"btn-facebook btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-facebook"})),c.a.createElement(u.a,{size:"lg",className:"btn-twitter btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-twitter"})),c.a.createElement(u.a,{size:"lg",className:"btn-linkedin btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-linkedin"})),c.a.createElement(u.a,{size:"lg",className:"btn-flickr btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-flickr"})),c.a.createElement(u.a,{size:"lg",className:"btn-tumblr btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-tumblr"})),c.a.createElement(u.a,{size:"lg",className:"btn-xing btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-xing"})),c.a.createElement(u.a,{size:"lg",className:"btn-github btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-github"})),c.a.createElement(u.a,{size:"lg",className:"btn-html5 btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-html5"})),c.a.createElement(u.a,{size:"lg",className:"btn-openid btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-openid"})),c.a.createElement(u.a,{size:"lg",className:"btn-stack-overflow btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-stack-overflow"})),c.a.createElement(u.a,{size:"lg",className:"btn-css3 btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-css3"})),c.a.createElement(u.a,{size:"lg",className:"btn-youtube btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-youtube"})),c.a.createElement(u.a,{size:"lg",className:"btn-dribbble btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dribbble"})),c.a.createElement(u.a,{size:"lg",className:"btn-google-plus btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-google-plus"})),c.a.createElement(u.a,{size:"lg",className:"btn-instagram btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-instagram"})),c.a.createElement(u.a,{size:"lg",className:"btn-pinterest btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-pinterest"})),c.a.createElement(u.a,{size:"lg",className:"btn-vk btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vk"})),c.a.createElement(u.a,{size:"lg",className:"btn-yahoo btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-yahoo"})),c.a.createElement(u.a,{size:"lg",className:"btn-behance btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-behance"})),c.a.createElement(u.a,{size:"lg",className:"btn-dropbox btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-dropbox"})),c.a.createElement(u.a,{size:"lg",className:"btn-reddit btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-reddit"})),c.a.createElement(u.a,{size:"lg",className:"btn-spotify btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-spotify"})),c.a.createElement(u.a,{size:"lg",className:"btn-vine btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vine"})),c.a.createElement(u.a,{size:"lg",className:"btn-foursquare btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-foursquare"})),c.a.createElement(u.a,{size:"lg",className:"btn-vimeo btn-brand icon mr-1 mb-1"},c.a.createElement("i",{className:"fa fa-vimeo"})))))),c.a.createElement(i.a,{xs:"12"},c.a.createElement(o.a,null,c.a.createElement(E.a,null,c.a.createElement("i",{className:"fa fa-align-justify"}),c.a.createElement("strong",null,"Brand Button"),c.a.createElement("small",null," Text only. Usage ex. "),c.a.createElement("code",null,'<Button className="btn-facebook btn-brand text"><span>Facebook</span></Button>')),c.a.createElement(f.a,null,c.a.createElement("h6",null,"Size Small",c.a.createElement("small",null," Add this class ",c.a.createElement("code",null,".btn-sm"))),c.a.createElement("p",null,c.a.createElement(u.a,{size:"sm",className:"btn-facebook btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Facebook")),c.a.createElement(u.a,{size:"sm",className:"btn-twitter btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Twitter")),c.a.createElement(u.a,{size:"sm",className:"btn-linkedin btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"LinkedIn")),c.a.createElement(u.a,{size:"sm",className:"btn-flickr btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Flickr")),c.a.createElement(u.a,{size:"sm",className:"btn-tumblr btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Tumblr")),c.a.createElement(u.a,{size:"sm",className:"btn-xing btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Xing")),c.a.createElement(u.a,{size:"sm",className:"btn-github btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Github")),c.a.createElement(u.a,{size:"sm",className:"btn-html5 btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"HTML5")),c.a.createElement(u.a,{size:"sm",className:"btn-openid btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"OpenID")),c.a.createElement(u.a,{size:"sm",className:"btn-stack-overflow btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"StackOverflow")),c.a.createElement(u.a,{size:"sm",className:"btn-css3 btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"CSS3")),c.a.createElement(u.a,{size:"sm",className:"btn-youtube btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"YouTube")),c.a.createElement(u.a,{size:"sm",className:"btn-dribbble btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Dribbble")),c.a.createElement(u.a,{size:"sm",className:"btn-google-plus btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Google+")),c.a.createElement(u.a,{size:"sm",className:"btn-instagram btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Instagram")),c.a.createElement(u.a,{size:"sm",className:"btn-pinterest btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Pinterest")),c.a.createElement(u.a,{size:"sm",className:"btn-vk btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"VK")),c.a.createElement(u.a,{size:"sm",className:"btn-yahoo btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Yahoo")),c.a.createElement(u.a,{size:"sm",className:"btn-behance btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Behance")),c.a.createElement(u.a,{size:"sm",className:"btn-dropbox btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Dropbox")),c.a.createElement(u.a,{size:"sm",className:"btn-reddit btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Reddit")),c.a.createElement(u.a,{size:"sm",className:"btn-spotify btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Spotify")),c.a.createElement(u.a,{size:"sm",className:"btn-vine btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Vine")),c.a.createElement(u.a,{size:"sm",className:"btn-foursquare btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Forsquare")),c.a.createElement(u.a,{size:"sm",className:"btn-vimeo btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Vimeo"))),c.a.createElement("h6",null,"Size Normal"),c.a.createElement("p",null,c.a.createElement(u.a,{className:"btn-facebook btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Facebook")),c.a.createElement(u.a,{className:"btn-twitter btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Twitter")),c.a.createElement(u.a,{className:"btn-linkedin btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"LinkedIn")),c.a.createElement(u.a,{className:"btn-flickr btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Flickr")),c.a.createElement(u.a,{className:"btn-tumblr btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Tumblr")),c.a.createElement(u.a,{className:"btn-xing btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Xing")),c.a.createElement(u.a,{className:"btn-github btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Github")),c.a.createElement(u.a,{className:"btn-html5 btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"HTML5")),c.a.createElement(u.a,{className:"btn-openid btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"OpenID")),c.a.createElement(u.a,{className:"btn-stack-overflow btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"StackOverflow")),c.a.createElement(u.a,{className:"btn-css3 btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"CSS3")),c.a.createElement(u.a,{className:"btn-youtube btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"YouTube")),c.a.createElement(u.a,{className:"btn-dribbble btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Dribbble")),c.a.createElement(u.a,{className:"btn-google-plus btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Google+")),c.a.createElement(u.a,{className:"btn-instagram btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Instagram")),c.a.createElement(u.a,{className:"btn-pinterest btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Pinterest")),c.a.createElement(u.a,{className:"btn-vk btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"VK")),c.a.createElement(u.a,{className:"btn-yahoo btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Yahoo")),c.a.createElement(u.a,{className:"btn-behance btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Behance")),c.a.createElement(u.a,{className:"btn-dropbox btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Dropbox")),c.a.createElement(u.a,{className:"btn-reddit btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Reddit")),c.a.createElement(u.a,{className:"btn-spotify btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Spotify")),c.a.createElement(u.a,{className:"btn-vine btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Vine")),c.a.createElement(u.a,{className:"btn-foursquare btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Forsquare")),c.a.createElement(u.a,{className:"btn-vimeo btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Vimeo"))),c.a.createElement("h6",null,"Size Large",c.a.createElement("small",null," Add this class ",c.a.createElement("code",null,".btn-lg"))),c.a.createElement("p",null,c.a.createElement(u.a,{size:"lg",className:"btn-facebook btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Facebook")),c.a.createElement(u.a,{size:"lg",className:"btn-twitter btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Twitter")),c.a.createElement(u.a,{size:"lg",className:"btn-linkedin btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"LinkedIn")),c.a.createElement(u.a,{size:"lg",className:"btn-flickr btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Flickr")),c.a.createElement(u.a,{size:"lg",className:"btn-tumblr btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Tumblr")),c.a.createElement(u.a,{size:"lg",className:"btn-xing btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Xing")),c.a.createElement(u.a,{size:"lg",className:"btn-github btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Github")),c.a.createElement(u.a,{size:"lg",className:"btn-html5 btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"HTML5")),c.a.createElement(u.a,{size:"lg",className:"btn-openid btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"OpenID")),c.a.createElement(u.a,{size:"lg",className:"btn-stack-overflow btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"StackOverflow")),c.a.createElement(u.a,{size:"lg",className:"btn-css3 btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"CSS3")),c.a.createElement(u.a,{size:"lg",className:"btn-youtube btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"YouTube")),c.a.createElement(u.a,{size:"lg",className:"btn-dribbble btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Dribbble")),c.a.createElement(u.a,{size:"lg",className:"btn-google-plus btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Google+")),c.a.createElement(u.a,{size:"lg",className:"btn-instagram btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Instagram")),c.a.createElement(u.a,{size:"lg",className:"btn-pinterest btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Pinterest")),c.a.createElement(u.a,{size:"lg",className:"btn-vk btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"VK")),c.a.createElement(u.a,{size:"lg",className:"btn-yahoo btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Yahoo")),c.a.createElement(u.a,{size:"lg",className:"btn-behance btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Behance")),c.a.createElement(u.a,{size:"lg",className:"btn-dropbox btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Dropbox")),c.a.createElement(u.a,{size:"lg",className:"btn-reddit btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Reddit")),c.a.createElement(u.a,{size:"lg",className:"btn-spotify btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Spotify")),c.a.createElement(u.a,{size:"lg",className:"btn-vine btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Vine")),c.a.createElement(u.a,{size:"lg",className:"btn-foursquare btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Forsquare")),c.a.createElement(u.a,{size:"lg",className:"btn-vimeo btn-brand text mr-1 mb-1"},c.a.createElement("span",null,"Vimeo"))))))))}}]),t}(r.Component);a.default=d}}]);
//# sourceMappingURL=33.652f1929.chunk.js.map