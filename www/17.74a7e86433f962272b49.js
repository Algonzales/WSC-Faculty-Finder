(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8cDG":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){return function(){}}(),i=u("pMnS"),e=u("oBZk"),a=u("ZZ/e"),b=u("/nUa"),r=u("gRf5"),p=u("wMzM"),c=u("t8sF"),f=function(){function n(n,l,u,t,o){this.platform=n,this.file=l,this.fileOpener=u,this.filetransfer=t,this.documentViewer=o}return n.prototype.openPdf=function(){var n=this,l=this.file.applicationDirectory+"www/assets",u=Date.now();this.platform.is("android")?this.file.copyFile(l,"test.pdf",this.file.dataDirectory,u+".pdf").then(function(l){n.fileOpener.open(l.nativeURL,"application/pdf")}).catch(function(n){alert(n)}):this.documentViewer.viewDocument(l+"/Gardner.pdf","application/pdf",{title:"PDF"})},n}(),w=t.nb({encapsulation:0,styles:[[""]],data:{}});function s(n){return t.Gb(0,[(n()(),t.pb(0,0,null,null,6,"ion-header",[],null,null,null,e.I,e.l)),t.ob(1,49152,null,0,a.z,[t.h,t.k],null,null),(n()(),t.pb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,e.T,e.w)),t.ob(3,49152,null,0,a.zb,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,e.S,e.v)),t.ob(5,49152,null,0,a.xb,[t.h,t.k],null,null),(n()(),t.Eb(-1,0,[" MAP "])),(n()(),t.pb(7,0,null,null,4,"ion-content",[["padding",""]],null,null,null,e.G,e.j)),t.ob(8,49152,null,0,a.s,[t.h,t.k],null,null),(n()(),t.pb(9,0,null,0,2,"ion-button",[["expand","full"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.openPdf()&&t),t},e.z,e.c)),t.ob(10,49152,null,0,a.i,[t.h,t.k],{expand:[0,"expand"]},null),(n()(),t.Eb(-1,0,[" Open MAP "]))],function(n,l){n(l,3,0,"primary"),n(l,10,0,"full")},null)}function d(n){return t.Gb(0,[(n()(),t.pb(0,0,null,null,1,"app-tab2",[],null,null,null,s,w)),t.ob(1,49152,null,0,f,[a.Fb,c.a,p.a,r.a,b.a],null,null)],null,null)}var h=t.lb("app-tab2",f,d,{},{},[]),k=u("Ip0R"),m=u("gIcY"),v=u("ZYCi");u.d(l,"Tab2PageModuleNgFactory",function(){return g});var g=t.mb(o,[],function(n){return t.vb([t.wb(512,t.j,t.bb,[[8,[i.a,h]],[3,t.j],t.x]),t.wb(4608,k.k,k.j,[t.u,[2,k.q]]),t.wb(4608,a.a,a.a,[t.z,t.g]),t.wb(4608,a.Db,a.Db,[a.a,t.j,t.q,k.c]),t.wb(4608,a.Gb,a.Gb,[a.a,t.j,t.q,k.c]),t.wb(4608,m.g,m.g,[]),t.wb(1073742336,k.b,k.b,[]),t.wb(1073742336,a.Bb,a.Bb,[]),t.wb(1073742336,m.f,m.f,[]),t.wb(1073742336,m.a,m.a,[]),t.wb(1073742336,v.o,v.o,[[2,v.u],[2,v.m]]),t.wb(1073742336,o,o,[]),t.wb(1024,v.k,function(){return[[{path:"",component:f}]]},[])])})}}]);