(this["webpackJsonpbase64-encoder"]=this["webpackJsonpbase64-encoder"]||[]).push([[0],{49:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return v}));var a=n(34),o=n(0),c=n.n(o),i=n(89),r=n(85),s=n(86),l=n(52),d=n.n(l),u=n(55),m=n(84),g=n(14),j=n(88),h=n(54),f=n(51),b=n.n(f),x=n(83),p=n(8),O=Object(x.a)((function(e){return{root:{maxHeight:"100vw"},image:{backgroundImage:"url(https://pingidentity.com/content/dam/ping-6-2-assets/open-graph-images/2019/P14C-Build-OG.png)",backgroundRepeat:"no-repeat",backgroundColor:"#576877",backgroundSize:"cover",backgroundPosition:"center",maxHeight:"20vw"},paper:{display:"flex",height:"100%",maxWidth:"100%",paddingLeft:".5rem",paddingRight:".5rem",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",color:"#2E4355"},avatar:{margin:e.spacing(1),backgroundColor:"#2E4355"},form:{width:"100%",marginTop:e.spacing(0)},submit:{backgroundColor:"#2E4355",margin:e.spacing(3,0,2)},typography:{color:"#2E4355",fontSize:"1rem"},errorMessage:{color:"red"},infoPaperContainer:{maxHeight:"100%",overflow:"auto"},info:{height:"100%",maxHeight:"100%",color:"#2E4355",margin:"0",padding:"0"}}}));function v(){var t=O(),n=c.a.useRef(),l=Object(o.useState)(null),f=Object(a.a)(l,2),x=f[0],v=f[1],y=Object(o.useState)(""),C=Object(a.a)(y,2),w=C[0],S=C[1],E=Object(o.useState)(""),k=Object(a.a)(E,2),N=k[0],T=k[1],B=Object(o.useState)(""),D=Object(a.a)(B,2),F=D[0],R=D[1],I=Boolean(x),P=I?"popover":void 0,W=function(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Copying to clipboard was successful!")}),(function(e){throw"Failed to copy (using navigator)."})):function(e){try{n.current.parentNode.focus(),document.execCommand("copy")&&console.log("Copying to clipboard was successful (execCommand)!")}catch(t){throw"Failed to copy (using execCommand). "+t}}()},z=function(){var t=e.from(F,"utf8").toString("base64");S(t)};return Object(p.jsx)(g.a,{container:!0,component:"main",className:t.root,children:Object(p.jsx)(g.a,{item:!0,container:!0,xs:12,component:m.a,elevation:6,square:!0,justifyContent:"flex-start",style:{maxWidth:"100%"},children:Object(p.jsxs)(g.a,{item:!0,container:!0,justifyContent:"flex-start",className:t.paper,direction:"column",children:[Object(p.jsx)(g.a,{item:!0,container:!0,xs:12,justifyContent:"center",style:{flex:"0 1 0"},children:Object(p.jsx)(i.a,{className:t.avatar,children:Object(p.jsx)(b.a,{})})}),Object(p.jsx)(g.a,{item:!0,xs:12,style:{flex:"0 10 0"},children:Object(p.jsx)(h.a,{component:"h4",variant:"h4",align:"center",children:"Base64 Encoder"})}),Object(p.jsx)("form",{className:t.form,noValidate:!0,onSubmit:function(e){e.preventDefault();try{z()}catch(n){var t=n.message.split(". ")[1];console.error(t),T(t),v(e.currentTarget)}},children:Object(p.jsxs)(g.a,{item:!0,container:!0,direction:"column",alignItems:"stretch",xs:12,style:{flex:"10 0 auto"},children:[Object(p.jsxs)(g.a,{item:!0,xs:12,style:{flex:"10 0 auto"},children:[Object(p.jsx)(u.a,{variant:"outlined",margin:"none",required:!0,fullWidth:!0,id:"decoded",label:"Decoded String",name:"Decoded",value:F,autoFocus:!0,maxRows:4,multiline:!0,onChange:function(e){e.preventDefault(),R(e.target.value)}}),Object(p.jsx)(j.a,{id:P,open:I,anchorEl:x,onClose:function(){v(null)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(p.jsx)(h.a,{className:t.errorMessage,children:N})})]}),Object(p.jsx)(g.a,{item:!0,xs:12,style:{flex:"1 0 auto"},children:Object(p.jsx)(r.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Encode"})}),Object(p.jsxs)(g.a,{container:!0,item:!0,xs:12,style:{paddingBottom:"1rem"},children:[Object(p.jsx)(g.a,{item:!0,xs:11,children:Object(p.jsx)(u.a,{variant:"outlined",margin:"none",required:!0,fullWidth:!0,id:"encoded",label:"Encoded String",name:"Encoded",value:w,maxRows:4,multiline:!0,inputRef:n,readOnly:!0})}),Object(p.jsx)(g.a,{item:!0,xs:1,children:Object(p.jsx)(s.a,{onClick:function(e){if(e.preventDefault(),w)try{W(w)}catch(t){T(t),v(e.currentTarget)}else T("No text to copy. Try encoding something first."),v(e.currentTarget)},"aria-label":"copy",color:"inherit",children:Object(p.jsx)(d.a,{})})})]})]})})]})})})}}).call(this,n(69).Buffer)},68:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(10),i=n.n(c),r=(n(68),n(49)),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))},l=n(8);i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(r.a,{})}),document.getElementById("root")),s()}},[[82,1,2]]]);
//# sourceMappingURL=main.2b75b87e.chunk.js.map