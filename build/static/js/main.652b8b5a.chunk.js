(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{30:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(19),r=a.n(o),i=(a(30),a(10)),s=a(4),u=a(0),l=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1],r=function(){o("")};return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(t){t.preventDefault(),e.onSubmit(c),r()},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.target.value)}})]})})},b=function(e){var t=e.images,a=e.openModal;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){var t=e.id,n=e.webformatURL,c=e.largeImageURL,o=e.tags;return Object(u.jsx)("li",{className:"ImageGalleryItem",onClick:a,children:Object(u.jsx)("img",{src:n,alt:o,largeimageurl:c,className:"ImageGalleryItem-image"})},t)}))})},j=function(e){var t=e.images,a=e.openModal;return Object(u.jsx)("ul",{className:"ImageGallery",children:Object(u.jsx)(b,{images:t,openModal:a})})},m=function(e){var t=e.onClick;return Object(u.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},d=function(e){Object(n.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[]);var t=function(t){console.log(t.code),"Escape"===t.code&&e.closeModal()};return Object(u.jsx)("div",{className:"Overlay",onClick:function(t){t.target===t.currentTarget&&e.closeModal()},children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:e.largeimageurl,alt:""})})})},g=a(20),h=a.n(g),O=a(2),f=a.n(O),p="https://pixabay.com/api/",x="24106014-7779791e31f08878180ccfbba",v="image_type=photo&orientation=horizontal",y=12,S=function(e,t){var a=p,n=x,c=v,o=y;return h.a.get("".concat(a,"?q=").concat(e,"&page=").concat(t,"&key=").concat(n,"&").concat(c,"&per_page=").concat(o))};S.propTypes={options:f.a.shape({query:f.a.number.isRequired,page:f.a.number.isRequired,BASE_URL:f.a.string.isRequired,API_KEY:f.a.string.isRequired,IMAGE_TYPE:f.a.string.isRequired,PER_PAGE:f.a.number.isRequired})};var w=S,k=a(21),E=a(22),N=a(25),M=a(24),R=a(23),C=a.n(R),I=(a(70),function(e){Object(N.a)(a,e);var t=Object(M.a)(a);function a(){return Object(k.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){return Object(u.jsx)(C.a,{className:this.props.class,type:"Circles",color:"#3f51b5",height:200,width:200})}}]),a}(c.a.Component)),q=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),r=Object(s.a)(o,2),b=r[0],g=r[1],h=Object(n.useState)(1),O=Object(s.a)(h,2),f=O[0],p=O[1],x=Object(n.useState)(!1),v=Object(s.a)(x,2),y=v[0],S=v[1],k=Object(n.useState)(""),E=Object(s.a)(k,2),N=E[0],M=E[1],R=Object(n.useState)(!1),C=Object(s.a)(R,2),q=C[0],F=C[1];Object(n.useEffect)((function(){""!==b&&(F(!0),setTimeout((function(){w(b,f).then((function(e){c((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.data.hits))}))})).finally(F(!1),setTimeout((function(){L()}),500))}),400))}),[b,f]);var L=function(){f>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{onSubmit:function(e){g(e),p(1),c([])}}),Object(u.jsx)(j,{openModal:function(e){F(!0),setTimeout((function(){S(!0),M(e.target.getAttribute("largeimageurl")),F(!1)}),300)},images:a}),a.length>0&&Object(u.jsx)(m,{onClick:function(){p((function(e){return e+1}))}}),y&&Object(u.jsx)(d,{closeModal:function(){S(!1),M("")},largeimageurl:N}),q&&Object(u.jsx)(I,{class:"Loader"})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.652b8b5a.chunk.js.map