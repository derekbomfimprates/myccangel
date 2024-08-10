"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6688],{5473:(C,d,i)=>{i.d(d,{n:()=>g});var t=i(467),o=i(3953),e=i(9465);let g=(()=>{var n;class s{constructor(c){this.alertController=c}ngOnInit(){}showAlert(){var c=this;return(0,t.A)(function*(){yield(yield c.alertController.create({header:"Notice",message:"This feature will be available soon.",buttons:["OK"]})).present()})()}}return(n=s).\u0275fac=function(c){return new(c||n)(o.rXU(e.hG))},n.\u0275cmp=o.VBU({type:n,selectors:[["app-footer"]],decls:31,vars:0,consts:[["color","light",2,"padding","20px","display","flex","flex-direction","column"],[1,"ion-align-items-center",2,"margin","0"],["size","6",2,"text-align","left"],[2,"font-size","32px","font-weight","bold","color","#B95CF4"],["size","6",1,"footer-nav",2,"text-align","right"],["href","#",1,"footer-link"],[1,"ion-justify-content-center",2,"padding","20px 0","margin","0"],["size","auto",1,"footer-socials"],["expand","full","fill","clear",1,"footer-link",3,"click"],["slot","icon-only","name","logo-facebook"],["slot","icon-only","name","logo-twitter"],["slot","icon-only","name","logo-instagram"],["slot","icon-only","name","logo-linkedin"],[1,"ion-justify-content-center",2,"padding","10px 0","margin","0"],["size","auto"]],template:function(c,r){1&c&&(o.j41(0,"ion-footer")(1,"ion-toolbar",0)(2,"ion-row",1)(3,"ion-col",2)(4,"div",3),o.EFF(5,"My CC Angel"),o.k0s()(),o.j41(6,"ion-col",4)(7,"a",5),o.EFF(8,"ABOUT IBD"),o.k0s(),o.j41(9,"a",5),o.EFF(10,"ABOUT US"),o.k0s(),o.j41(11,"a",5),o.EFF(12,"AI HELP"),o.k0s(),o.j41(13,"a",5),o.EFF(14,"RESOURCES"),o.k0s(),o.j41(15,"a",5),o.EFF(16,"CONTACT US"),o.k0s()()(),o.j41(17,"ion-row",6)(18,"ion-col",7)(19,"ion-button",8),o.bIt("click",function(){return r.showAlert()}),o.nrm(20,"ion-icon",9),o.k0s(),o.j41(21,"ion-button",8),o.bIt("click",function(){return r.showAlert()}),o.nrm(22,"ion-icon",10),o.k0s(),o.j41(23,"ion-button",8),o.bIt("click",function(){return r.showAlert()}),o.nrm(24,"ion-icon",11),o.k0s(),o.j41(25,"ion-button",8),o.bIt("click",function(){return r.showAlert()}),o.nrm(26,"ion-icon",12),o.k0s()()(),o.j41(27,"ion-row",13)(28,"ion-col",14)(29,"div"),o.EFF(30,"\xa9 2024 MyCCAngel"),o.k0s()()()()())},dependencies:[e.Jm,e.hU,e.M0,e.iq,e.ln,e.ai],styles:["ion-footer[_ngcontent-%COMP%]{background-color:#f7f7f7!important}.footer-nav[_ngcontent-%COMP%]{display:flex!important;flex-wrap:wrap!important;justify-content:flex-end!important;position:relative;font-size:small}.footer-link[_ngcontent-%COMP%]{font-size:14px!important;color:#b95cf4!important;margin:0 10px!important;text-decoration:none!important}.footer-link[_ngcontent-%COMP%]:hover{text-decoration:underline!important}.footer-socials[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;gap:20px!important}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{padding:0!important;--border-radius: 50% !important}.footer-socials[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px!important;color:#b95cf4!important}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%]{color:#5a2d91!important}@media (max-width: 600px){.footer-nav[_ngcontent-%COMP%]{display:none!important}.footer-socials[_ngcontent-%COMP%]{flex-direction:row!important;justify-content:center!important;padding:0 10px}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:40px!important}.footer-socials[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px!important}}"]}),s})()},385:(C,d,i)=>{i.d(d,{l:()=>g});var t=i(3953),o=i(70),e=i(9465);let g=(()=>{var n;class s{constructor(c){this.router=c}ngOnInit(){this.initDynamicTitle()}signup(){this.router.navigate(["register"])}login(){this.router.navigate(["login"])}donation(){this.router.navigate(["donation"])}photo(){this.router.navigate(["photo"])}video(){this.router.navigate(["video"])}contactForm(){this.router.navigate(["contact-form"])}aboutUs(){this.router.navigate(["about-us"])}aboutIbd(){this.router.navigate(["about-ibd"])}home(){this.router.navigate(["home"])}aiHelp(){this.router.navigate(["ai-help"])}resources(){this.router.navigate(["resources"])}initDynamicTitle(){const c=["Early Diagnosis","Appoitment","Early Diagnosis","Appoitment"];let r=0;const a=document.getElementById("dynamic-title");if(a){let f=function(){a&&(a.classList.add("slide-out"),setTimeout(()=>{a.classList.remove("slide-out"),a.textContent=c[r],a.classList.add("slide-in"),r=(r+1)%c.length},5e3))};setInterval(f,5e3),f()}}}return(n=s).\u0275fac=function(c){return new(c||n)(t.rXU(o.Ix))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-header"]],decls:36,vars:0,consts:[[1,"ion-align-items-center","ion-justify-content-between","responsive-toolbar"],["slot","start"],["defaultHref","/","icon","chevron-back-outline"],["src","assets/images/logo.png",1,"header-logo"],["id","dynamic-title",1,"ion-text-center","desktop-title"],["slot","end",1,"responsive-buttons"],[1,"buttons-container"],["routerLink","/login",1,"signIn-button",3,"click"],["routerLink","/login",1,"login-button",3,"click"],["routerLink","/donation",1,"round-button-donation",3,"click"],[1,"menu-container"],[1,"menu-selector"],["routerLink","/home",3,"click"],["routerLink","/about-ibd",3,"click"],["routerLink","/ai-help",3,"click"],["routerLink","/resources",3,"click"],["routerLink","/about-us",3,"click"],["routerLink","/contact-form",3,"click"]],template:function(c,r){1&c&&(t.j41(0,"ion-toolbar",0)(1,"ion-buttons",1),t.nrm(2,"ion-back-button",2)(3,"ion-menu-button"),t.k0s(),t.nrm(4,"ion-img",3),t.j41(5,"ion-title",4),t.EFF(6," Early Diagnosis "),t.k0s(),t.j41(7,"ion-buttons",5)(8,"div",6)(9,"ion-button",7),t.bIt("click",function(){return r.login()}),t.EFF(10,"Sign Up"),t.k0s(),t.j41(11,"ion-button",8),t.bIt("click",function(){return r.login()}),t.EFF(12,"Sign In"),t.k0s()(),t.j41(13,"ion-button",9),t.bIt("click",function(){return r.donation()}),t.EFF(14,"Donate"),t.k0s()()(),t.j41(15,"div",10)(16,"nav",11)(17,"ul")(18,"li")(19,"a",12),t.bIt("click",function(){return r.home()}),t.EFF(20,"Home"),t.k0s()(),t.j41(21,"li")(22,"a",13),t.bIt("click",function(){return r.aboutIbd()}),t.EFF(23,"About IBD"),t.k0s()(),t.j41(24,"li")(25,"a",14),t.bIt("click",function(){return r.aiHelp()}),t.EFF(26,"AI Help"),t.k0s()(),t.j41(27,"li")(28,"a",15),t.bIt("click",function(){return r.resources()}),t.EFF(29,"Resources"),t.k0s()(),t.j41(30,"li")(31,"a",16),t.bIt("click",function(){return r.aboutUs()}),t.EFF(32,"About Us"),t.k0s()(),t.j41(33,"li")(34,"a",17),t.bIt("click",function(){return r.contactForm()}),t.EFF(35,"Contact Us"),t.k0s()()()()())},dependencies:[e.Jm,e.QW,e.KW,e.MC,e.BC,e.ai,e.el,e.N7,e.oY],styles:['@charset "UTF-8";.hidden-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{display:none!important}ion-menu-button[_ngcontent-%COMP%]{display:none}.image-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.responsive-buttons[_ngcontent-%COMP%]{padding-right:50px;margin-top:-10px;display:flex;flex-direction:column;align-items:flex-end}.buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-top:10px}ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-title[_ngcontent-%COMP%]{color:#513894}ion-fab-button[_ngcontent-%COMP%]{--background: #B95CF4;position:relative;color:#fff}ion-fab-button[_ngcontent-%COMP%]:hover:after{content:attr(title);position:absolute;bottom:100%;left:50%;transform:translate(-50%);background-color:#333;color:#fff;padding:1px 10px;border-radius:4px;white-space:nowrap;font-size:14px;z-index:1000}ion-fab-button[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;bottom:90%;left:50%;transform:translate(-50%);border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent;z-index:1000}.login-button[_ngcontent-%COMP%], .signIn-button[_ngcontent-%COMP%]{--background: #B95CF4;--padding-start: 15px;--padding-end: 15px;--padding-top: 8px;--padding-bottom: 8px;color:#fff;margin:5px;--border-radius: 55px}.round-button-donation[_ngcontent-%COMP%]{--background: #18d230;--border-radius: 55px;--padding-start: 61px ;--padding-end: 61px ;--padding-top: 8px;--padding-bottom: 8px;color:#fff;margin:8px}.donation-button[_ngcontent-%COMP%]{margin:0;padding:8px 0 0}.responsive-toolbar[_ngcontent-%COMP%]{height:150px}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:300px;margin-top:20px;padding-bottom:20px}@media (max-width: 768px){.desktop-title[_ngcontent-%COMP%]{display:none}ion-menu-button[_ngcontent-%COMP%]{display:inline-block}.round-button[_ngcontent-%COMP%]{--padding-start: 4px;--padding-end: 4px;--padding-top: 4px;--padding-bottom: 4px;font-size:8px;--background: #B95CF4;color:#fff}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:70px;padding-bottom:15px}.responsive-toolbar[_ngcontent-%COMP%]{height:50px}.responsive-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.buttons-container[_ngcontent-%COMP%]{flex-direction:row}}ion-back-button[_ngcontent-%COMP%]{color:#b95cf4;--background: transparent}.menu-container[_ngcontent-%COMP%]{width:100%!important;padding-bottom:5px}.menu-selector[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;background-color:#ead0f9!important;padding:10px 0!important}.menu-selector[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none!important;margin:0!important;padding:0!important;display:flex!important;justify-content:center!important}.menu-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;color:#333!important;font-weight:700!important;font-size:20px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:purple!important}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(100%)}50%{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_slideOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(-100%)}}.desktop-title[_ngcontent-%COMP%]{position:absolute;top:40%;left:45%;font-size:32px;white-space:nowrap;overflow:hidden;display:inline-block}.word[_ngcontent-%COMP%]{display:inline-block}.slide-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn 3s forwards}.slide-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideOut 1s forwards}.vertical-button[_ngcontent-%COMP%]{position:fixed;left:-30px;top:50%;transform:translateY(-50%) rotate(-90deg);background-color:green;color:#fff;padding:10px 20px;font-size:16px;font-weight:700;z-index:1000;opacity:1;transition:opacity .3s}.vertical-button.show[_ngcontent-%COMP%]{opacity:0!important}@media (max-width: 768px){.hidden-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{display:none!important}ion-menu-button[_ngcontent-%COMP%]{display:none!important}.image-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.responsive-buttons[_ngcontent-%COMP%]{display:none!important}ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-title[_ngcontent-%COMP%]{color:#513894}ion-fab-button[_ngcontent-%COMP%]{--background: #B95CF4;position:relative;color:#fff}ion-fab-button[_ngcontent-%COMP%]:hover:after{content:attr(title);position:absolute;bottom:100%;left:50%;transform:translate(-50%);background-color:#333;color:#fff;padding:1px 10px;border-radius:4px;white-space:nowrap;font-size:12px;z-index:1000}ion-fab-button[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;bottom:90%;left:50%;transform:translate(-50%);border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent;z-index:1000}.login-button[_ngcontent-%COMP%], .signIn-button[_ngcontent-%COMP%], .round-button-donation[_ngcontent-%COMP%]{display:none!important}.responsive-toolbar[_ngcontent-%COMP%]{height:80px}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:100px;margin-top:0;padding-bottom:10px}.desktop-title[_ngcontent-%COMP%]{display:none}.menu-container[_ngcontent-%COMP%]{display:none!important;width:100%!important}.menu-selector[_ngcontent-%COMP%]{display:none!important;justify-content:center!important;background-color:#b95cf4!important;padding:5px 0!important}.menu-selector[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none!important;margin:0!important;padding:0!important;display:flex!important;justify-content:center!important}.menu-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 10px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;color:#333!important;font-weight:700!important;font-size:16px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:purple!important}ion-back-button[_ngcontent-%COMP%]{color:#b95cf4;--background: transparent}.vertical-button[_ngcontent-%COMP%]{left:-20px;font-size:14px;padding:5px 10px}.vertical-button.show[_ngcontent-%COMP%]{opacity:0!important}}']}),s})()},6688:(C,d,i)=>{i.r(d),i.d(d,{LoginPageModule:()=>M});var t=i(177),o=i(4341),e=i(9465),g=i(70),n=i(3953),s=i(5473),p=i(385);const r=[{path:"",component:(()=>{var l;class m{constructor(){}ngOnInit(){}}return(l=m).\u0275fac=function(u){return new(u||l)},l.\u0275cmp=n.VBU({type:l,selectors:[["app-login"]],decls:70,vars:0,consts:[["fullscreen","true"],[1,"title-welcome"],[1,"custom-spinner","welcome-title"],[1,"flex-center"],[1,"full-card"],[1,"login-wrap"],[1,"login-html"],["id","tab-1","type","radio","name","tab","checked","",1,"sign-in"],["for","tab-1",1,"tab"],["id","tab-2","type","radio","name","tab",1,"sign-up"],["for","tab-2",1,"tab"],[1,"login-form"],[1,"sign-in-htm"],[1,"group"],["position","floating"],["formControlName","email","type","email",1,"input"],["formControlName","password","type","password",1,"input"],["fill","clear","expand","full","type","submit",1,"button"],[1,"hr"],[1,"foot-lnk"],["fill","clear",1,"link-button"],[1,"sign-up-htm"],["formControlName","name","type","text",1,"input"],["formControlName","repeatPassword","type","password",1,"input"],["fill","clear","expand","full","type","button",1,"button"],["for","tab-1"]],template:function(u,b){1&u&&(n.j41(0,"ion-content",0)(1,"ion-header"),n.nrm(2,"app-header"),n.k0s(),n.j41(3,"div",1)(4,"ion-card-title",2),n.EFF(5,"Welcome to MyCCAngel"),n.k0s()(),n.j41(6,"ion-grid",3)(7,"ion-row")(8,"ion-col")(9,"ion-card",4)(10,"ion-card-content")(11,"div",5)(12,"div",6),n.nrm(13,"input",7),n.j41(14,"label",8),n.EFF(15,"Login"),n.k0s(),n.nrm(16,"input",9),n.j41(17,"label",10),n.EFF(18,"Sign Up"),n.k0s(),n.j41(19,"div",11)(20,"div",12)(21,"form")(22,"div",13)(23,"ion-item")(24,"ion-label",14),n.EFF(25,"Email Address"),n.k0s(),n.nrm(26,"ion-input",15),n.k0s()(),n.j41(27,"div",13)(28,"ion-item")(29,"ion-label",14),n.EFF(30,"Password"),n.k0s(),n.nrm(31,"ion-input",16),n.k0s()(),n.j41(32,"div",13)(33,"ion-button",17),n.EFF(34,"Login"),n.k0s()(),n.nrm(35,"div",18),n.j41(36,"div",19)(37,"ion-button",20),n.EFF(38,"Forgot Password?"),n.k0s()()()(),n.j41(39,"div",21)(40,"form")(41,"div",13)(42,"ion-item")(43,"ion-label",14),n.EFF(44,"Name"),n.k0s(),n.nrm(45,"ion-input",22),n.k0s()(),n.j41(46,"div",13)(47,"ion-item")(48,"ion-label",14),n.EFF(49,"Email Address"),n.k0s(),n.nrm(50,"ion-input",15),n.k0s()(),n.j41(51,"div",13)(52,"ion-item")(53,"ion-label",14),n.EFF(54,"Password"),n.k0s(),n.nrm(55,"ion-input",16),n.k0s()(),n.j41(56,"div",13)(57,"ion-item")(58,"ion-label",14),n.EFF(59,"Repeat Password"),n.k0s(),n.nrm(60,"ion-input",23),n.k0s()(),n.j41(61,"div",13)(62,"ion-button",24),n.EFF(63,"Sign Up"),n.k0s()(),n.nrm(64,"div",18),n.j41(65,"div",19)(66,"label",25),n.EFF(67,"Already a Member?"),n.k0s()()()()()()()()()()()(),n.j41(68,"footer"),n.nrm(69,"app-footer"),n.k0s()())},dependencies:[o.qT,o.BC,o.cb,o.cV,e.Jm,e.b_,e.I9,e.tN,e.hU,e.W9,e.lO,e.eU,e.$w,e.uz,e.he,e.ln,e.Gw,s.n,p.l],styles:['body[_ngcontent-%COMP%]{margin:0;color:#fff;background:#c8c8c8;font:600 16px/18px Open Sans,sans-serif}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:after, [_ngcontent-%COMP%]:before{box-sizing:border-box}.clearfix[_ngcontent-%COMP%]:after, .clearfix[_ngcontent-%COMP%]:before{content:"";display:table}.clearfix[_ngcontent-%COMP%]:after{clear:both;display:block}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.login-wrap[_ngcontent-%COMP%]{width:100%;margin:200px auto auto;max-width:525px;min-height:670px;position:relative;background:#fff;box-shadow:0 12px 15px #0000003d,0 17px 50px #00000030;display:flex;flex-direction:column;border-radius:20px!important}.login-html[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;padding:90px 70px 50px;background:#fff}.login-html[_ngcontent-%COMP%]   .sign-in-htm[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up-htm[_ngcontent-%COMP%]{top:0;left:0;right:0;bottom:0;position:absolute;transition:opacity .4s ease-in-out,visibility .4s ease-in-out;opacity:0;visibility:hidden}.login-html[_ngcontent-%COMP%]   .sign-in-htm[_ngcontent-%COMP%]{transform:rotateY(0)}.login-html[_ngcontent-%COMP%]   .sign-up-htm[_ngcontent-%COMP%]{transform:rotateY(180deg)}.login-html[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]{display:none}.login-html[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{font-size:22px;cursor:pointer;padding-bottom:5px;margin:0 15px 10px 0;display:inline-block;border-bottom:2px solid transparent}.login-html[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%], .login-html[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked + .tab[_ngcontent-%COMP%]{color:#b95cf4;border-color:#b95cf4}.login-form[_ngcontent-%COMP%]{min-height:300px;position:relative;perspective:1000px;transform-style:preserve-3d}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{margin-bottom:1px}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:100%;display:block}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{border:none;padding:15px 20px;border-radius:25px;background:#ffffff1a}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{color:#000}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{border:2px solid #B95CF4;background:transparent;color:#b95cf4;padding:15px 20px;border-radius:25px;cursor:pointer;transition:background-color .3s,color .3s}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background:#b95cf4;color:#fff}.login-html[_ngcontent-%COMP%]   .sign-in[_ngcontent-%COMP%]:checked ~ .login-form[_ngcontent-%COMP%]   .sign-in-htm[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:rotateY(0)}.login-html[_ngcontent-%COMP%]   .sign-up[_ngcontent-%COMP%]:checked ~ .login-form[_ngcontent-%COMP%]   .sign-up-htm[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:rotateY(0)}.hr[_ngcontent-%COMP%]{height:2px;margin:60px 0 50px;background:#fff3}.foot-lnk[_ngcontent-%COMP%]{text-align:center}.link-button[_ngcontent-%COMP%]{color:#fff}.full-card[_ngcontent-%COMP%]{--background: url(background.5387f01f502acc1d.png) no-repeat center center;position:relative;min-height:400px;background-size:cover;border-radius:10px;overflow:hidden}.image-column[_ngcontent-%COMP%]{display:none!important}.input-column[_ngcontent-%COMP%]{padding:20px}.welcome-title[_ngcontent-%COMP%]{font-size:40px!important;color:#b95cf4!important;font-weight:700}.title-welcome[_ngcontent-%COMP%]{text-align:center;padding:20px}.custom-spinner[_ngcontent-%COMP%]{font-size:24px}footer[_ngcontent-%COMP%]{text-align:center;padding:20px}ion-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:5px}@media (max-width: 600px){.footer-nav[_ngcontent-%COMP%]{display:none!important}.footer-socials[_ngcontent-%COMP%]{flex-direction:row!important;justify-content:center!important;padding:0 10px}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:40px!important}.footer-socials[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px!important}.input-column[_ngcontent-%COMP%]{width:100%!important}.login-html[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{font-size:14px!important}.sign-in-htm[_ngcontent-%COMP%]{font-size:10px!important}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{padding:1px 2px!important}.login-form[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{font-size:10px!important}ion-card-content[_ngcontent-%COMP%]{padding:5px!important}ion-card[_ngcontent-%COMP%]{margin:5px!important}}']}),m})()}];let a=(()=>{var l;class m{}return(l=m).\u0275fac=function(u){return new(u||l)},l.\u0275mod=n.$C({type:l}),l.\u0275inj=n.G2t({imports:[g.iI.forChild(r),g.iI]}),m})();var f=i(3887);let M=(()=>{var l;class m{}return(l=m).\u0275fac=function(u){return new(u||l)},l.\u0275mod=n.$C({type:l}),l.\u0275inj=n.G2t({imports:[t.MD,o.YN,e.bv,a,f.G]}),m})()},3887:(C,d,i)=>{i.d(d,{G:()=>n});var t=i(177),o=i(4341),e=i(9465),g=i(3953);let n=(()=>{var s;class p{}return(s=p).\u0275fac=function(r){return new(r||s)},s.\u0275mod=g.$C({type:s}),s.\u0275inj=g.G2t({imports:[t.MD,o.YN,e.bv,o.X1]}),p})()}}]);