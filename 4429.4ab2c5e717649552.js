"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4429],{5473:(b,g,e)=>{e.d(g,{n:()=>p});var t=e(467),o=e(3953),i=e(9465);let p=(()=>{var n;class s{constructor(c){this.alertController=c}ngOnInit(){}showAlert(){var c=this;return(0,t.A)(function*(){yield(yield c.alertController.create({header:"Notice",message:"This feature will be available soon.",buttons:["OK"]})).present()})()}}return(n=s).\u0275fac=function(c){return new(c||n)(o.rXU(i.hG))},n.\u0275cmp=o.VBU({type:n,selectors:[["app-footer"]],decls:31,vars:0,consts:[["color","light",2,"padding","20px","display","flex","flex-direction","column"],[1,"ion-align-items-center",2,"margin","0"],["size","6",2,"text-align","left"],[2,"font-size","32px","font-weight","bold","color","#B95CF4"],["size","6",1,"footer-nav",2,"text-align","right"],["href","#",1,"footer-link"],[1,"ion-justify-content-center",2,"padding","20px 0","margin","0"],["size","auto",1,"footer-socials"],["expand","full","fill","clear",1,"footer-link",3,"click"],["slot","icon-only","name","logo-facebook"],["slot","icon-only","name","logo-twitter"],["slot","icon-only","name","logo-instagram"],["slot","icon-only","name","logo-linkedin"],[1,"ion-justify-content-center",2,"padding","10px 0","margin","0"],["size","auto"]],template:function(c,r){1&c&&(o.j41(0,"ion-footer")(1,"ion-toolbar",0)(2,"ion-row",1)(3,"ion-col",2)(4,"div",3),o.EFF(5,"My CC Angel"),o.k0s()(),o.j41(6,"ion-col",4)(7,"a",5),o.EFF(8,"ABOUT IBD"),o.k0s(),o.j41(9,"a",5),o.EFF(10,"ABOUT US"),o.k0s(),o.j41(11,"a",5),o.EFF(12,"AI HELP"),o.k0s(),o.j41(13,"a",5),o.EFF(14,"RESOURCES"),o.k0s(),o.j41(15,"a",5),o.EFF(16,"CONTACT US"),o.k0s()()(),o.j41(17,"ion-row",6)(18,"ion-col",7)(19,"ion-button",8),o.bIt("click",function(){return r.showAlert()}),o.nrm(20,"ion-icon",9),o.k0s(),o.j41(21,"ion-button",8),o.bIt("click",function(){return r.showAlert()}),o.nrm(22,"ion-icon",10),o.k0s(),o.j41(23,"ion-button",8),o.bIt("click",function(){return r.showAlert()}),o.nrm(24,"ion-icon",11),o.k0s(),o.j41(25,"ion-button",8),o.bIt("click",function(){return r.showAlert()}),o.nrm(26,"ion-icon",12),o.k0s()()(),o.j41(27,"ion-row",13)(28,"ion-col",14)(29,"div"),o.EFF(30,"\xa9 2024 MyCCAngel"),o.k0s()()()()())},dependencies:[i.Jm,i.hU,i.M0,i.iq,i.ln,i.ai],styles:["ion-footer[_ngcontent-%COMP%]{background-color:#f7f7f7!important}.footer-nav[_ngcontent-%COMP%]{display:flex!important;flex-wrap:wrap!important;justify-content:flex-end!important;position:relative;font-size:small}.footer-link[_ngcontent-%COMP%]{font-size:14px!important;color:#b95cf4!important;margin:0 10px!important;text-decoration:none!important}.footer-link[_ngcontent-%COMP%]:hover{text-decoration:underline!important}.footer-socials[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;gap:20px!important}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{padding:0!important;--border-radius: 50% !important}.footer-socials[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px!important;color:#b95cf4!important}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%]{color:#5a2d91!important}@media (max-width: 600px){.footer-nav[_ngcontent-%COMP%]{display:none!important}.footer-socials[_ngcontent-%COMP%]{flex-direction:row!important;justify-content:center!important;padding:0 10px}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:40px!important}.footer-socials[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px!important}}"]}),s})()},385:(b,g,e)=>{e.d(g,{l:()=>p});var t=e(3953),o=e(70),i=e(9465);let p=(()=>{var n;class s{constructor(c){this.router=c}ngOnInit(){this.initDynamicTitle()}signup(){this.router.navigate(["register"])}login(){this.router.navigate(["login"])}donation(){this.router.navigate(["donation"])}photo(){this.router.navigate(["photo"])}video(){this.router.navigate(["video"])}contactForm(){this.router.navigate(["contact-form"])}aboutUs(){this.router.navigate(["about-us"])}aboutIbd(){this.router.navigate(["about-ibd"])}home(){this.router.navigate(["home"])}aiHelp(){this.router.navigate(["ai-help"])}resources(){this.router.navigate(["resources"])}initDynamicTitle(){const c=["Early Diagnosis","Appoitment","Early Diagnosis","Appoitment"];let r=0;const a=document.getElementById("dynamic-title");if(a){let _=function(){a&&(a.classList.add("slide-out"),setTimeout(()=>{a.classList.remove("slide-out"),a.textContent=c[r],a.classList.add("slide-in"),r=(r+1)%c.length},5e3))};setInterval(_,5e3),_()}}}return(n=s).\u0275fac=function(c){return new(c||n)(t.rXU(o.Ix))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-header"]],decls:36,vars:0,consts:[[1,"ion-align-items-center","ion-justify-content-between","responsive-toolbar"],["slot","start"],["defaultHref","/","icon","chevron-back-outline"],["src","assets/images/logo.png",1,"header-logo"],["id","dynamic-title",1,"ion-text-center","desktop-title"],["slot","end",1,"responsive-buttons"],[1,"buttons-container"],["routerLink","/login",1,"signIn-button",3,"click"],["routerLink","/login",1,"login-button",3,"click"],["routerLink","/donation",1,"round-button-donation",3,"click"],[1,"menu-container"],[1,"menu-selector"],["routerLink","/home",3,"click"],["routerLink","/about-ibd",3,"click"],["routerLink","/ai-help",3,"click"],["routerLink","/resources",3,"click"],["routerLink","/about-us",3,"click"],["routerLink","/contact-form",3,"click"]],template:function(c,r){1&c&&(t.j41(0,"ion-toolbar",0)(1,"ion-buttons",1),t.nrm(2,"ion-back-button",2)(3,"ion-menu-button"),t.k0s(),t.nrm(4,"ion-img",3),t.j41(5,"ion-title",4),t.EFF(6," Early Diagnosis "),t.k0s(),t.j41(7,"ion-buttons",5)(8,"div",6)(9,"ion-button",7),t.bIt("click",function(){return r.login()}),t.EFF(10,"Sign Up"),t.k0s(),t.j41(11,"ion-button",8),t.bIt("click",function(){return r.login()}),t.EFF(12,"Sign In"),t.k0s()(),t.j41(13,"ion-button",9),t.bIt("click",function(){return r.donation()}),t.EFF(14,"Donate"),t.k0s()()(),t.j41(15,"div",10)(16,"nav",11)(17,"ul")(18,"li")(19,"a",12),t.bIt("click",function(){return r.home()}),t.EFF(20,"Home"),t.k0s()(),t.j41(21,"li")(22,"a",13),t.bIt("click",function(){return r.aboutIbd()}),t.EFF(23,"About IBD"),t.k0s()(),t.j41(24,"li")(25,"a",14),t.bIt("click",function(){return r.aiHelp()}),t.EFF(26,"AI Help"),t.k0s()(),t.j41(27,"li")(28,"a",15),t.bIt("click",function(){return r.resources()}),t.EFF(29,"Resources"),t.k0s()(),t.j41(30,"li")(31,"a",16),t.bIt("click",function(){return r.aboutUs()}),t.EFF(32,"About Us"),t.k0s()(),t.j41(33,"li")(34,"a",17),t.bIt("click",function(){return r.contactForm()}),t.EFF(35,"Contact Us"),t.k0s()()()()())},dependencies:[i.Jm,i.QW,i.KW,i.MC,i.BC,i.ai,i.el,i.N7,i.oY],styles:['@charset "UTF-8";.hidden-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{display:none!important}ion-menu-button[_ngcontent-%COMP%]{display:none}.image-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.responsive-buttons[_ngcontent-%COMP%]{padding-right:50px;margin-top:-10px;display:flex;flex-direction:column;align-items:flex-end}.buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-top:10px}ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-title[_ngcontent-%COMP%]{color:#513894}ion-fab-button[_ngcontent-%COMP%]{--background: #B95CF4;position:relative;color:#fff}ion-fab-button[_ngcontent-%COMP%]:hover:after{content:attr(title);position:absolute;bottom:100%;left:50%;transform:translate(-50%);background-color:#333;color:#fff;padding:1px 10px;border-radius:4px;white-space:nowrap;font-size:14px;z-index:1000}ion-fab-button[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;bottom:90%;left:50%;transform:translate(-50%);border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent;z-index:1000}.login-button[_ngcontent-%COMP%], .signIn-button[_ngcontent-%COMP%]{--background: #B95CF4;--padding-start: 15px;--padding-end: 15px;--padding-top: 8px;--padding-bottom: 8px;color:#fff;margin:5px;--border-radius: 55px}.round-button-donation[_ngcontent-%COMP%]{--background: #18d230;--border-radius: 55px;--padding-start: 61px ;--padding-end: 61px ;--padding-top: 8px;--padding-bottom: 8px;color:#fff;margin:8px}.donation-button[_ngcontent-%COMP%]{margin:0;padding:8px 0 0}.responsive-toolbar[_ngcontent-%COMP%]{height:150px}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:300px;margin-top:20px;padding-bottom:20px}@media (max-width: 768px){.desktop-title[_ngcontent-%COMP%]{display:none}ion-menu-button[_ngcontent-%COMP%]{display:inline-block}.round-button[_ngcontent-%COMP%]{--padding-start: 4px;--padding-end: 4px;--padding-top: 4px;--padding-bottom: 4px;font-size:8px;--background: #B95CF4;color:#fff}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:70px;padding-bottom:15px}.responsive-toolbar[_ngcontent-%COMP%]{height:50px}.responsive-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.buttons-container[_ngcontent-%COMP%]{flex-direction:row}}ion-back-button[_ngcontent-%COMP%]{color:#b95cf4;--background: transparent}.menu-container[_ngcontent-%COMP%]{width:100%!important;padding-bottom:5px}.menu-selector[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;background-color:#ead0f9!important;padding:10px 0!important}.menu-selector[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none!important;margin:0!important;padding:0!important;display:flex!important;justify-content:center!important}.menu-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;color:#333!important;font-weight:700!important;font-size:20px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:purple!important}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(100%)}50%{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_slideOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(-100%)}}.desktop-title[_ngcontent-%COMP%]{position:absolute;top:40%;left:45%;font-size:32px;white-space:nowrap;overflow:hidden;display:inline-block}.word[_ngcontent-%COMP%]{display:inline-block}.slide-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn 3s forwards}.slide-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideOut 1s forwards}.vertical-button[_ngcontent-%COMP%]{position:fixed;left:-30px;top:50%;transform:translateY(-50%) rotate(-90deg);background-color:green;color:#fff;padding:10px 20px;font-size:16px;font-weight:700;z-index:1000;opacity:1;transition:opacity .3s}.vertical-button.show[_ngcontent-%COMP%]{opacity:0!important}@media (max-width: 768px){.hidden-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{display:none!important}ion-menu-button[_ngcontent-%COMP%]{display:none!important}.image-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.responsive-buttons[_ngcontent-%COMP%]{display:none!important}ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-title[_ngcontent-%COMP%]{color:#513894}ion-fab-button[_ngcontent-%COMP%]{--background: #B95CF4;position:relative;color:#fff}ion-fab-button[_ngcontent-%COMP%]:hover:after{content:attr(title);position:absolute;bottom:100%;left:50%;transform:translate(-50%);background-color:#333;color:#fff;padding:1px 10px;border-radius:4px;white-space:nowrap;font-size:12px;z-index:1000}ion-fab-button[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;bottom:90%;left:50%;transform:translate(-50%);border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent;z-index:1000}.login-button[_ngcontent-%COMP%], .signIn-button[_ngcontent-%COMP%], .round-button-donation[_ngcontent-%COMP%]{display:none!important}.responsive-toolbar[_ngcontent-%COMP%]{height:80px}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:100px;margin-top:0;padding-bottom:10px}.desktop-title[_ngcontent-%COMP%]{display:none}.menu-container[_ngcontent-%COMP%]{display:none!important;width:100%!important}.menu-selector[_ngcontent-%COMP%]{display:none!important;justify-content:center!important;background-color:#b95cf4!important;padding:5px 0!important}.menu-selector[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none!important;margin:0!important;padding:0!important;display:flex!important;justify-content:center!important}.menu-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 10px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;color:#333!important;font-weight:700!important;font-size:16px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:purple!important}ion-back-button[_ngcontent-%COMP%]{color:#b95cf4;--background: transparent}.vertical-button[_ngcontent-%COMP%]{left:-20px;font-size:14px;padding:5px 10px}.vertical-button.show[_ngcontent-%COMP%]{opacity:0!important}}']}),s})()},4429:(b,g,e)=>{e.r(g),e.d(g,{LibraryPageModule:()=>C});var t=e(177),o=e(4341),i=e(9465),p=e(70),n=e(3953),s=e(5473),d=e(385);const r=[{path:"",component:(()=>{var l;class m{constructor(){}ngOnInit(){}}return(l=m).\u0275fac=function(u){return new(u||l)},l.\u0275cmp=n.VBU({type:l,selectors:[["app-library"]],decls:55,vars:0,consts:[["fullscreen","true","slot","fixed"],[1,"header"],[1,"avatar"],["src","https://media.licdn.com/dms/image/D4E03AQEPuEFpai8f4Q/profile-displayphoto-shrink_400_400/0/1677082915350?e=2147483647&v=beta&t=I4ucGuL4uMhjv4BDwp3jDPmLFxOXJeDLh8wEEdgPWG4","alt",""],[1,"name-info"],[1,"stats"],[1,"card"],[1,"card-body"],[1,"media-card"],[1,"custom-card-title-center"],[1,"media-grid"],[1,"media-item"],["src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwVOS93n1kWPcg2qOQK_HNAUHbFHQVUD2uQ&s"],[1,"media-name"]],template:function(u,P){1&u&&(n.j41(0,"ion-content",0)(1,"div",1),n.nrm(2,"app-header"),n.j41(3,"div",2),n.nrm(4,"img",3),n.k0s(),n.j41(5,"div",4),n.EFF(6,"Derek Prates"),n.k0s(),n.j41(7,"div",5),n.EFF(8,"Posts: 3 Groups: 10 Friends: 45"),n.k0s()(),n.j41(9,"div",6)(10,"div",7)(11,"div",8)(12,"ion-card-header")(13,"ion-card-title",9),n.EFF(14,"Media Pictures"),n.k0s()(),n.j41(15,"ion-card-content")(16,"div",10)(17,"div",11),n.nrm(18,"ion-img",12),n.j41(19,"div",13),n.EFF(20,"Name 1"),n.k0s()(),n.j41(21,"div",11),n.nrm(22,"ion-img",12),n.j41(23,"div",13),n.EFF(24,"Name 2"),n.k0s()(),n.j41(25,"div",11),n.nrm(26,"ion-img",12),n.j41(27,"div",13),n.EFF(28,"Name 3"),n.k0s()(),n.j41(29,"div",11),n.nrm(30,"ion-img",12),n.j41(31,"div",13),n.EFF(32,"Name 1"),n.k0s()(),n.j41(33,"div",11),n.nrm(34,"ion-img",12),n.j41(35,"div",13),n.EFF(36,"Name 2"),n.k0s()(),n.j41(37,"div",11),n.nrm(38,"ion-img",12),n.j41(39,"div",13),n.EFF(40,"Name 3"),n.k0s()(),n.j41(41,"div",11),n.nrm(42,"ion-img",12),n.j41(43,"div",13),n.EFF(44,"Name 1"),n.k0s()(),n.j41(45,"div",11),n.nrm(46,"ion-img",12),n.j41(47,"div",13),n.EFF(48,"Name 2"),n.k0s()(),n.j41(49,"div",11),n.nrm(50,"ion-img",12),n.j41(51,"div",13),n.EFF(52,"Name 3"),n.k0s()()()()()()(),n.j41(53,"footer"),n.nrm(54,"app-footer"),n.k0s()())},dependencies:[i.I9,i.ME,i.tN,i.W9,i.KW,s.n,d.l],styles:[".header[_ngcontent-%COMP%]{align-items:center;padding-bottom:1%;flex-direction:row}.edit-button[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;color:#000}.menu-button[_ngcontent-%COMP%]{color:#fff}.header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:200px;height:100px;margin-top:2em;margin-left:1em;margin-bottom:-.3em}.header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%;border:5px solid #B95CF4;background-color:#fff}.header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{font-size:16px;font-weight:400;color:#fff;width:100%;margin-left:15em;padding-right:0}.header[_ngcontent-%COMP%]   .name-info[_ngcontent-%COMP%]{font-size:32px;font-weight:600;color:#fff;width:100%;margin-left:7.5em;padding-right:0}@media only screen and (max-width: 600px){.header[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:150px;height:150px;margin-top:1em;margin-left:0;margin-bottom:0;display:flex;justify-content:center}.header[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);width:150px;height:150px}.header[_ngcontent-%COMP%]   .name-info[_ngcontent-%COMP%]{margin-left:0;margin-top:.5em;font-size:24px;text-align:center}.header[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]{margin-left:0;margin-top:.5em;text-align:center}}ion-content[_ngcontent-%COMP%]{--background: url(https://t3.ftcdn.net/jpg/00/94/25/52/360_F_94255289_bLOLo8dVkESH4wP4QNVUg4hWBlcBEEOg.jpg) no-repeat top center/cover fixed, #fff;position:fixed;height:100%;width:100%}ion-toolbar[_ngcontent-%COMP%]{--background: transparent}ion-chip[_ngcontent-%COMP%]{font-size:12px;font-weight:200;color:#303940;background-color:transparent}.card[_ngcontent-%COMP%]{margin:0 auto;height:100%;width:100%}.card-body[_ngcontent-%COMP%]{display:flex;flex-direction:row;background-color:#fff;padding:30px;justify-content:space-between;align-items:stretch}.media-card[_ngcontent-%COMP%]{margin-top:20px;padding:15px;background-color:#fff;border-radius:15px;box-shadow:0 2px 10px #0000001a;text-align:center;width:100%}.custom-card-title[_ngcontent-%COMP%]{background-color:#b95cf4;color:#fff;padding:5px 10px;border-radius:8px;box-shadow:0 5px 15px #0000004d;display:inline-block;margin:0;width:-moz-fit-content;width:fit-content}.custom-card-title-center[_ngcontent-%COMP%]{background-color:#b95cf4;color:#fff;padding:5px 10px;border-radius:8px;box-shadow:0 5px 15px #0000004d;width:-moz-fit-content;width:fit-content;margin:0 auto;display:block}.media-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);background-color:#fff;width:100%}.media-item[_ngcontent-%COMP%]{position:relative;text-align:center;width:-moz-fit-content;width:fit-content}.media-name[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;background-color:#b95cf4;color:#fff;padding:5px;border-radius:0 0 8px 8px;box-sizing:border-box;box-shadow:0 5px 15px #0000001a}@media only screen and (max-width: 600px){.card-body[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}"]}),m})()}];let a=(()=>{var l;class m{}return(l=m).\u0275fac=function(u){return new(u||l)},l.\u0275mod=n.$C({type:l}),l.\u0275inj=n.G2t({imports:[p.iI.forChild(r),p.iI]}),m})();var _=e(3887);let C=(()=>{var l;class m{}return(l=m).\u0275fac=function(u){return new(u||l)},l.\u0275mod=n.$C({type:l}),l.\u0275inj=n.G2t({imports:[t.MD,o.YN,i.bv,a,_.G]}),m})()},3887:(b,g,e)=>{e.d(g,{G:()=>n});var t=e(177),o=e(4341),i=e(9465),p=e(3953);let n=(()=>{var s;class d{}return(s=d).\u0275fac=function(r){return new(r||s)},s.\u0275mod=p.$C({type:s}),s.\u0275inj=p.G2t({imports:[t.MD,o.YN,i.bv,o.X1]}),d})()}}]);