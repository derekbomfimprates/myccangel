"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6247],{5641:(_,g,o)=>{o.d(g,{j:()=>l});var t=o(3953),n=o(70),p=o(9465);let l=(()=>{var c;class s{constructor(e){this.router=e,this.imageUrl="",this.altText="Cover Image"}ngOnInit(){}contactForm(){this.router.navigate(["contact-form"])}aboutUs(){this.router.navigate(["about-us"])}aboutIbd(){this.router.navigate(["about-ibd"])}home(){this.router.navigate(["home"])}aiHelp(){this.router.navigate(["ai-help"])}resources(){this.router.navigate(["resources"])}}return(c=s).\u0275fac=function(e){return new(e||c)(t.rXU(n.Ix))},c.\u0275cmp=t.VBU({type:c,selectors:[["app-cover-picture"]],inputs:{imageUrl:"imageUrl",altText:"altText"},decls:23,vars:2,consts:[[1,"menu-container"],[1,"menu-selector"],["routerLink","/home",3,"click"],["routerLink","/about-ibd",3,"click"],["routerLink","/ai-help",3,"click"],["routerLink","/resources",3,"click"],["routerLink","/about-us",3,"click"],["routerLink","/contact-form",3,"click"],[1,"cover-picture-container"],[1,"cover-picture-img",3,"src","alt"]],template:function(e,i){1&e&&(t.j41(0,"div",0)(1,"nav",1)(2,"ul")(3,"li")(4,"a",2),t.bIt("click",function(){return i.home()}),t.EFF(5,"Home"),t.k0s()(),t.j41(6,"li")(7,"a",3),t.bIt("click",function(){return i.aboutIbd()}),t.EFF(8,"About IBD"),t.k0s()(),t.j41(9,"li")(10,"a",4),t.bIt("click",function(){return i.aiHelp()}),t.EFF(11,"AI Help"),t.k0s()(),t.j41(12,"li")(13,"a",5),t.bIt("click",function(){return i.resources()}),t.EFF(14,"Resources"),t.k0s()(),t.j41(15,"li")(16,"a",6),t.bIt("click",function(){return i.aboutUs()}),t.EFF(17,"About Us"),t.k0s()(),t.j41(18,"li")(19,"a",7),t.bIt("click",function(){return i.contactForm()}),t.EFF(20,"Contact Us"),t.k0s()()()()(),t.j41(21,"div",8),t.nrm(22,"img",9),t.k0s()),2&e&&(t.R7$(22),t.Y8G("src",i.imageUrl,t.B4B)("alt",i.altText))},dependencies:[p.oY],styles:['@charset "UTF-8";.cover-picture-container[_ngcontent-%COMP%]{width:100%;height:100vh;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;margin-top:-45px}@media (max-width: 768px){.cover-picture-container[_ngcontent-%COMP%]{height:50vh}}.cover-picture-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center}.menu-container[_ngcontent-%COMP%]{position:relative;z-index:10}.menu-selector[_ngcontent-%COMP%]{display:flex!important;justify-content:right!important;background-color:transparent!important;padding:10px 0!important;cursor:pointer}.header-logo.clickable[_ngcontent-%COMP%]{cursor:pointer}.menu-selector[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none!important;margin:0!important;padding:0!important;display:flex!important;justify-content:center!important}.menu-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;color:#33265e!important;font-weight:700!important;font-size:20px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:purple!important}']}),s})()},5473:(_,g,o)=>{o.d(g,{n:()=>l});var t=o(467),n=o(3953),p=o(9465);let l=(()=>{var c;class s{constructor(e){this.alertController=e}ngOnInit(){}showAlert(){var e=this;return(0,t.A)(function*(){yield(yield e.alertController.create({header:"Notice",message:"This feature will be available soon.",buttons:["OK"]})).present()})()}}return(c=s).\u0275fac=function(e){return new(e||c)(n.rXU(p.hG))},c.\u0275cmp=n.VBU({type:c,selectors:[["app-footer"]],decls:31,vars:0,consts:[["color","light",2,"padding","20px","display","flex","flex-direction","column"],[1,"ion-align-items-center",2,"margin","0"],["size","6",2,"text-align","left"],[2,"font-size","32px","font-weight","bold","color","#B95CF4"],["size","6",1,"footer-nav",2,"text-align","right"],["href","#",1,"footer-link"],[1,"ion-justify-content-center",2,"padding","20px 0","margin","0"],["size","auto",1,"footer-socials"],["expand","full","fill","clear",1,"footer-link",3,"click"],["slot","icon-only","name","logo-facebook"],["slot","icon-only","name","logo-twitter"],["slot","icon-only","name","logo-instagram"],["slot","icon-only","name","logo-linkedin"],[1,"ion-justify-content-center",2,"padding","10px 0","margin","0"],["size","auto"]],template:function(e,i){1&e&&(n.j41(0,"ion-footer")(1,"ion-toolbar",0)(2,"ion-row",1)(3,"ion-col",2)(4,"div",3),n.EFF(5,"My CC Angel"),n.k0s()(),n.j41(6,"ion-col",4)(7,"a",5),n.EFF(8,"ABOUT IBD"),n.k0s(),n.j41(9,"a",5),n.EFF(10,"ABOUT US"),n.k0s(),n.j41(11,"a",5),n.EFF(12,"AI HELP"),n.k0s(),n.j41(13,"a",5),n.EFF(14,"RESOURCES"),n.k0s(),n.j41(15,"a",5),n.EFF(16,"CONTACT US"),n.k0s()()(),n.j41(17,"ion-row",6)(18,"ion-col",7)(19,"ion-button",8),n.bIt("click",function(){return i.showAlert()}),n.nrm(20,"ion-icon",9),n.k0s(),n.j41(21,"ion-button",8),n.bIt("click",function(){return i.showAlert()}),n.nrm(22,"ion-icon",10),n.k0s(),n.j41(23,"ion-button",8),n.bIt("click",function(){return i.showAlert()}),n.nrm(24,"ion-icon",11),n.k0s(),n.j41(25,"ion-button",8),n.bIt("click",function(){return i.showAlert()}),n.nrm(26,"ion-icon",12),n.k0s()()(),n.j41(27,"ion-row",13)(28,"ion-col",14)(29,"div"),n.EFF(30,"\xa9 2024 MyCCAngel"),n.k0s()()()()())},dependencies:[p.Jm,p.hU,p.M0,p.iq,p.ln,p.ai],styles:["ion-footer[_ngcontent-%COMP%]{background-color:#f7f7f7!important}.footer-nav[_ngcontent-%COMP%]{display:flex!important;flex-wrap:wrap!important;justify-content:flex-end!important;position:relative;font-size:small}.footer-link[_ngcontent-%COMP%]{font-size:14px!important;color:#b95cf4!important;margin:0 10px!important;text-decoration:none!important}.footer-link[_ngcontent-%COMP%]:hover{text-decoration:underline!important}.footer-socials[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;gap:20px!important}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{padding:0!important;--border-radius: 50% !important}.footer-socials[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px!important;color:#b95cf4!important}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%]{color:#5a2d91!important}@media (max-width: 600px){.footer-nav[_ngcontent-%COMP%]{display:none!important}.footer-socials[_ngcontent-%COMP%]{flex-direction:row!important;justify-content:center!important;padding:0 10px}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:40px!important}.footer-socials[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px!important}}"]}),s})()},385:(_,g,o)=>{o.d(g,{l:()=>s});var t=o(3953),n=o(70),p=o(177),l=o(9465);function c(a,e){1&a&&t.nrm(0,"ion-back-button",8)}let s=(()=>{var a;class e{constructor(r){this.router=r}ngOnInit(){this.initDynamicTitle()}signup(){this.router.navigate(["register"])}login(){this.router.navigate(["login"])}donation(){this.router.navigate(["donation"])}photo(){this.router.navigate(["photo"])}video(){this.router.navigate(["video"])}contactForm(){this.router.navigate(["contact-form"])}aboutUs(){this.router.navigate(["about-us"])}aboutIbd(){this.router.navigate(["about-ibd"])}home(){this.router.navigate(["home"])}aiHelp(){this.router.navigate(["ai-help"])}resources(){this.router.navigate(["resources"])}initDynamicTitle(){const r=["Early Diagnosis","Appoitment","Early Diagnosis","Appoitment"];let d=0;const u=document.getElementById("dynamic-title");if(u){let m=function(){u&&(u.classList.add("slide-out"),setTimeout(()=>{u.classList.remove("slide-out"),u.textContent=r[d],u.classList.add("slide-in"),d=(d+1)%r.length},5e3))};setInterval(m,5e3),m()}}isHomePage(){return"/home"===this.router.url}}return(a=e).\u0275fac=function(r){return new(r||a)(t.rXU(n.Ix))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-header"]],decls:12,vars:1,consts:[[1,"ion-align-items-center","ion-justify-content-between","responsive-toolbar"],["slot","start"],["defaultHref","/","icon","chevron-back-outline",4,"ngIf"],["id","dynamic-title",1,"ion-text-center","desktop-title"],["slot","end",1,"responsive-buttons"],[1,"buttons-container"],["routerLink","/login",1,"signIn-button",3,"click"],["routerLink","/login",1,"login-button",3,"click"],["defaultHref","/","icon","chevron-back-outline"]],template:function(r,d){1&r&&(t.j41(0,"ion-toolbar",0)(1,"ion-buttons",1),t.DNE(2,c,1,0,"ion-back-button",2),t.nrm(3,"ion-menu-button"),t.k0s(),t.j41(4,"ion-title",3),t.EFF(5," Early Diagnosis "),t.k0s(),t.j41(6,"ion-buttons",4)(7,"div",5)(8,"ion-button",6),t.bIt("click",function(){return d.login()}),t.EFF(9,"Sign Up"),t.k0s(),t.j41(10,"ion-button",7),t.bIt("click",function(){return d.login()}),t.EFF(11,"Sign In"),t.k0s()()()()),2&r&&(t.R7$(2),t.Y8G("ngIf",!d.isHomePage()))},dependencies:[p.bT,l.Jm,l.QW,l.MC,l.BC,l.ai,l.el,l.N7],styles:['@charset "UTF-8";.hidden-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{display:none!important}ion-menu-button[_ngcontent-%COMP%]{display:none}.responsive-buttons[_ngcontent-%COMP%]{padding-right:50px;margin-top:-10px;display:flex;flex-direction:column;align-items:flex-end}.buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-top:10px}ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-title[_ngcontent-%COMP%]{color:#513894}ion-fab-button[_ngcontent-%COMP%]{--background: #B95CF4;position:relative;color:#fff}ion-fab-button[_ngcontent-%COMP%]:hover:after{content:attr(title);position:absolute;bottom:100%;left:50%;transform:translate(-50%);background-color:#333;color:#fff;padding:1px 10px;border-radius:4px;white-space:nowrap;font-size:14px}ion-fab-button[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;bottom:90%;left:50%;transform:translate(-50%);border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent}.login-button[_ngcontent-%COMP%], .signIn-button[_ngcontent-%COMP%]{--background: #33265E ;--padding-start: 15px;--padding-end: 15px;--padding-top: 8px;--padding-bottom: 8px;color:#fff;margin:5px;--border-radius: 55px}.round-button-donation[_ngcontent-%COMP%]{--background: #18d230;--border-radius: 55px;--padding-start: 61px ;--padding-end: 61px ;--padding-top: 8px;--padding-bottom: 8px;color:#fff;margin:8px}.donation-button[_ngcontent-%COMP%]{margin:0;padding:8px 0 0}.responsive-toolbar[_ngcontent-%COMP%]{height:80px}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:30px}@media (max-width: 768px){.desktop-title[_ngcontent-%COMP%]{display:none}ion-menu-button[_ngcontent-%COMP%]{display:inline-block}.round-button[_ngcontent-%COMP%]{--padding-start: 4px;--padding-end: 4px;--padding-top: 4px;--padding-bottom: 4px;font-size:8px;--background: #B95CF4;color:#fff}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:70px;padding-bottom:15px}.responsive-toolbar[_ngcontent-%COMP%]{height:50px}.responsive-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.buttons-container[_ngcontent-%COMP%]{flex-direction:row}}ion-back-button[_ngcontent-%COMP%]{color:#b95cf4;--background: transparent}.menu-container[_ngcontent-%COMP%]{width:100%!important;padding-right:4%}.menu-selector[_ngcontent-%COMP%]{display:flex!important;justify-content:right!important;background-color:transparent!important;padding:10px 0!important;cursor:pointer}.header-logo.clickable[_ngcontent-%COMP%]{cursor:pointer}.menu-selector[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none!important;margin:0!important;padding:0!important;display:flex!important;justify-content:center!important}.menu-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;color:#33265e!important;font-weight:700!important;font-size:20px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:purple!important}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(100%)}50%{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_slideOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(-100%)}}.desktop-title[_ngcontent-%COMP%]{position:absolute;top:20%;left:40%;font-size:28px;font-weight:700;white-space:nowrap;overflow:hidden;display:inline-block}.word[_ngcontent-%COMP%]{display:inline-block}.slide-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn 3s forwards}.slide-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideOut 1s forwards}.vertical-button[_ngcontent-%COMP%]{position:fixed;left:-30px;top:50%;transform:translateY(-50%) rotate(-90deg);background-color:green;color:#fff;padding:10px 20px;font-size:16px;font-weight:700;opacity:1;transition:opacity .3s}.vertical-button.show[_ngcontent-%COMP%]{opacity:0!important}@media (max-width: 768px){.hidden-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{display:none!important}ion-menu-button[_ngcontent-%COMP%]{display:inline-block!important}.responsive-buttons[_ngcontent-%COMP%]{display:none!important}ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-title[_ngcontent-%COMP%]{color:#513894}ion-fab-button[_ngcontent-%COMP%]{--background: #B95CF4;position:relative;color:#fff}ion-fab-button[_ngcontent-%COMP%]:hover:after{content:attr(title);position:absolute;bottom:100%;left:50%;transform:translate(-50%);background-color:#333;color:#fff;padding:1px 10px;border-radius:4px;white-space:nowrap;font-size:12px}ion-fab-button[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;bottom:90%;left:50%;transform:translate(-50%);border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent}.login-button[_ngcontent-%COMP%], .signIn-button[_ngcontent-%COMP%], .round-button-donation[_ngcontent-%COMP%]{display:none!important}.responsive-toolbar[_ngcontent-%COMP%]{height:80px}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:100px;margin-top:0;padding-bottom:10px}.desktop-title[_ngcontent-%COMP%]{display:none}.menu-container[_ngcontent-%COMP%]{width:100%!important;padding-bottom:5px}.menu-selector[_ngcontent-%COMP%]{padding:5px 0!important;background-color:#b95cf4!important}.menu-selector[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0!important;justify-content:center!important}.menu-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 5px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:10px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:purple!important}ion-back-button[_ngcontent-%COMP%]{color:#b95cf4;--background: transparent}.vertical-button[_ngcontent-%COMP%]{left:-20px;font-size:14px;padding:5px 10px}.vertical-button.show[_ngcontent-%COMP%]{opacity:0!important}}']}),e})()},3887:(_,g,o)=>{o.d(g,{G:()=>c});var t=o(177),n=o(4341),p=o(9465),l=o(3953);let c=(()=>{var s;class a{}return(s=a).\u0275fac=function(i){return new(i||s)},s.\u0275mod=l.$C({type:s}),s.\u0275inj=l.G2t({imports:[t.MD,n.YN,p.bv,n.X1]}),a})()}}]);