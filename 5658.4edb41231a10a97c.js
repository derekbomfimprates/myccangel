"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5658],{5473:(h,C,c)=>{c.d(C,{n:()=>f});var n=c(467),o=c(3953),e=c(9465);let f=(()=>{var t;class _{constructor(d){this.alertController=d}ngOnInit(){}showAlert(){var d=this;return(0,n.A)(function*(){yield(yield d.alertController.create({header:"Notice",message:"This feature will be available soon.",buttons:["OK"]})).present()})()}}return(t=_).\u0275fac=function(d){return new(d||t)(o.rXU(e.hG))},t.\u0275cmp=o.VBU({type:t,selectors:[["app-footer"]],decls:31,vars:0,consts:[["color","light",2,"padding","20px","display","flex","flex-direction","column"],[1,"ion-align-items-center",2,"margin","0"],["size","6",2,"text-align","left"],[2,"font-size","32px","font-weight","bold","color","#B95CF4"],["size","6",1,"footer-nav",2,"text-align","right"],["href","#",1,"footer-link"],[1,"ion-justify-content-center",2,"padding","20px 0","margin","0"],["size","auto",1,"footer-socials"],["expand","full","fill","clear",1,"footer-link",3,"click"],["slot","icon-only","name","logo-facebook"],["slot","icon-only","name","logo-twitter"],["slot","icon-only","name","logo-instagram"],["slot","icon-only","name","logo-linkedin"],[1,"ion-justify-content-center",2,"padding","10px 0","margin","0"],["size","auto"]],template:function(d,l){1&d&&(o.j41(0,"ion-footer")(1,"ion-toolbar",0)(2,"ion-row",1)(3,"ion-col",2)(4,"div",3),o.EFF(5,"My CC Angel"),o.k0s()(),o.j41(6,"ion-col",4)(7,"a",5),o.EFF(8,"ABOUT IBD"),o.k0s(),o.j41(9,"a",5),o.EFF(10,"ABOUT US"),o.k0s(),o.j41(11,"a",5),o.EFF(12,"AI HELP"),o.k0s(),o.j41(13,"a",5),o.EFF(14,"RESOURCES"),o.k0s(),o.j41(15,"a",5),o.EFF(16,"CONTACT US"),o.k0s()()(),o.j41(17,"ion-row",6)(18,"ion-col",7)(19,"ion-button",8),o.bIt("click",function(){return l.showAlert()}),o.nrm(20,"ion-icon",9),o.k0s(),o.j41(21,"ion-button",8),o.bIt("click",function(){return l.showAlert()}),o.nrm(22,"ion-icon",10),o.k0s(),o.j41(23,"ion-button",8),o.bIt("click",function(){return l.showAlert()}),o.nrm(24,"ion-icon",11),o.k0s(),o.j41(25,"ion-button",8),o.bIt("click",function(){return l.showAlert()}),o.nrm(26,"ion-icon",12),o.k0s()()(),o.j41(27,"ion-row",13)(28,"ion-col",14)(29,"div"),o.EFF(30,"\xa9 2024 MyCCAngel"),o.k0s()()()()())},dependencies:[e.Jm,e.hU,e.M0,e.iq,e.ln,e.ai],styles:["ion-footer[_ngcontent-%COMP%]{background-color:#f7f7f7!important}.footer-nav[_ngcontent-%COMP%]{display:flex!important;flex-wrap:wrap!important;justify-content:flex-end!important;position:relative;font-size:small}.footer-link[_ngcontent-%COMP%]{font-size:14px!important;color:#b95cf4!important;margin:0 10px!important;text-decoration:none!important}.footer-link[_ngcontent-%COMP%]:hover{text-decoration:underline!important}.footer-socials[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;gap:20px!important}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{padding:0!important;--border-radius: 50% !important}.footer-socials[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px!important;color:#b95cf4!important}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%]{color:#5a2d91!important}@media (max-width: 600px){.footer-nav[_ngcontent-%COMP%]{display:none!important}.footer-socials[_ngcontent-%COMP%]{flex-direction:row!important;justify-content:center!important;padding:0 10px}.footer-socials[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:40px!important}.footer-socials[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px!important}}"]}),_})()},385:(h,C,c)=>{c.d(C,{l:()=>f});var n=c(3953),o=c(70),e=c(9465);let f=(()=>{var t;class _{constructor(d){this.router=d}ngOnInit(){this.initDynamicTitle()}signup(){this.router.navigate(["register"])}login(){this.router.navigate(["login"])}donation(){this.router.navigate(["donation"])}photo(){this.router.navigate(["photo"])}video(){this.router.navigate(["video"])}contactForm(){this.router.navigate(["contact-form"])}aboutUs(){this.router.navigate(["about-us"])}aboutIbd(){this.router.navigate(["about-ibd"])}home(){this.router.navigate(["home"])}aiHelp(){this.router.navigate(["ai-help"])}resources(){this.router.navigate(["resources"])}initDynamicTitle(){const d=["Early Diagnosis","Appoitment","Early Diagnosis","Appoitment"];let l=0;const p=document.getElementById("dynamic-title");if(p){let P=function(){p&&(p.classList.add("slide-out"),setTimeout(()=>{p.classList.remove("slide-out"),p.textContent=d[l],p.classList.add("slide-in"),l=(l+1)%d.length},5e3))};setInterval(P,5e3),P()}}}return(t=_).\u0275fac=function(d){return new(d||t)(n.rXU(o.Ix))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-header"]],decls:36,vars:0,consts:[[1,"ion-align-items-center","ion-justify-content-between","responsive-toolbar"],["slot","start"],["defaultHref","/","icon","chevron-back-outline"],["src","../../../assets/images/logo.png",1,"header-logo"],["id","dynamic-title",1,"ion-text-center","desktop-title"],["slot","end",1,"responsive-buttons"],[1,"buttons-container"],["routerLink","/login",1,"signIn-button",3,"click"],["routerLink","/login",1,"login-button",3,"click"],["routerLink","/donation",1,"round-button-donation",3,"click"],[1,"menu-container"],[1,"menu-selector"],["routerLink","/home",3,"click"],["routerLink","/about-ibd",3,"click"],["routerLink","/ai-help",3,"click"],["routerLink","/resources",3,"click"],["routerLink","/about-us",3,"click"],["routerLink","/contact-form",3,"click"]],template:function(d,l){1&d&&(n.j41(0,"ion-toolbar",0)(1,"ion-buttons",1),n.nrm(2,"ion-back-button",2)(3,"ion-menu-button"),n.k0s(),n.nrm(4,"ion-img",3),n.j41(5,"ion-title",4),n.EFF(6," Early Diagnosis "),n.k0s(),n.j41(7,"ion-buttons",5)(8,"div",6)(9,"ion-button",7),n.bIt("click",function(){return l.login()}),n.EFF(10,"Sign Up"),n.k0s(),n.j41(11,"ion-button",8),n.bIt("click",function(){return l.login()}),n.EFF(12,"Sign In"),n.k0s()(),n.j41(13,"ion-button",9),n.bIt("click",function(){return l.donation()}),n.EFF(14,"Donate"),n.k0s()()(),n.j41(15,"div",10)(16,"nav",11)(17,"ul")(18,"li")(19,"a",12),n.bIt("click",function(){return l.home()}),n.EFF(20,"Home"),n.k0s()(),n.j41(21,"li")(22,"a",13),n.bIt("click",function(){return l.aboutIbd()}),n.EFF(23,"About IBD"),n.k0s()(),n.j41(24,"li")(25,"a",14),n.bIt("click",function(){return l.aiHelp()}),n.EFF(26,"AI Help"),n.k0s()(),n.j41(27,"li")(28,"a",15),n.bIt("click",function(){return l.resources()}),n.EFF(29,"Resources"),n.k0s()(),n.j41(30,"li")(31,"a",16),n.bIt("click",function(){return l.aboutUs()}),n.EFF(32,"About Us"),n.k0s()(),n.j41(33,"li")(34,"a",17),n.bIt("click",function(){return l.contactForm()}),n.EFF(35,"Contact Us"),n.k0s()()()()())},dependencies:[e.Jm,e.QW,e.KW,e.MC,e.BC,e.ai,e.el,e.N7,e.oY],styles:['@charset "UTF-8";.hidden-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{display:none!important}ion-menu-button[_ngcontent-%COMP%]{display:none}.image-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.responsive-buttons[_ngcontent-%COMP%]{padding-right:50px;margin-top:-10px;display:flex;flex-direction:column;align-items:flex-end}.buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding-top:10px}ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-title[_ngcontent-%COMP%]{color:#513894}ion-fab-button[_ngcontent-%COMP%]{--background: #B95CF4;position:relative;color:#fff}ion-fab-button[_ngcontent-%COMP%]:hover:after{content:attr(title);position:absolute;bottom:100%;left:50%;transform:translate(-50%);background-color:#333;color:#fff;padding:1px 10px;border-radius:4px;white-space:nowrap;font-size:14px;z-index:1000}ion-fab-button[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;bottom:90%;left:50%;transform:translate(-50%);border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent;z-index:1000}.login-button[_ngcontent-%COMP%], .signIn-button[_ngcontent-%COMP%]{--background: #B95CF4;--padding-start: 15px;--padding-end: 15px;--padding-top: 8px;--padding-bottom: 8px;color:#fff;margin:5px;--border-radius: 55px}.round-button-donation[_ngcontent-%COMP%]{--background: #18d230;--border-radius: 55px;--padding-start: 61px ;--padding-end: 61px ;--padding-top: 8px;--padding-bottom: 8px;color:#fff;margin:8px}.donation-button[_ngcontent-%COMP%]{margin:0;padding:8px 0 0}.responsive-toolbar[_ngcontent-%COMP%]{height:150px}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:300px;margin-top:20px;padding-bottom:20px}@media (max-width: 768px){.desktop-title[_ngcontent-%COMP%]{display:none}ion-menu-button[_ngcontent-%COMP%]{display:inline-block}.round-button[_ngcontent-%COMP%]{--padding-start: 4px;--padding-end: 4px;--padding-top: 4px;--padding-bottom: 4px;font-size:8px;--background: #B95CF4;color:#fff}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:70px;padding-bottom:15px}.responsive-toolbar[_ngcontent-%COMP%]{height:50px}.responsive-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.buttons-container[_ngcontent-%COMP%]{flex-direction:row}}ion-back-button[_ngcontent-%COMP%]{color:#b95cf4;--background: transparent}.menu-container[_ngcontent-%COMP%]{width:100%!important;padding-bottom:5px}.menu-selector[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important;background-color:#ead0f9!important;padding:10px 0!important}.menu-selector[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none!important;margin:0!important;padding:0!important;display:flex!important;justify-content:center!important}.menu-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;color:#333!important;font-weight:700!important;font-size:20px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:purple!important}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(100%)}50%{opacity:1;transform:translate(0)}}@keyframes _ngcontent-%COMP%_slideOut{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(-100%)}}.desktop-title[_ngcontent-%COMP%]{position:absolute;top:40%;left:45%;font-size:32px;white-space:nowrap;overflow:hidden;display:inline-block}.word[_ngcontent-%COMP%]{display:inline-block}.slide-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn 3s forwards}.slide-out[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideOut 1s forwards}.vertical-button[_ngcontent-%COMP%]{position:fixed;left:-30px;top:50%;transform:translateY(-50%) rotate(-90deg);background-color:green;color:#fff;padding:10px 20px;font-size:16px;font-weight:700;z-index:1000;opacity:1;transition:opacity .3s}.vertical-button.show[_ngcontent-%COMP%]{opacity:0!important}@media (max-width: 768px){.hidden-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{display:none!important}ion-menu-button[_ngcontent-%COMP%]{display:none!important}.image-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.responsive-buttons[_ngcontent-%COMP%]{display:none!important}ion-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}ion-title[_ngcontent-%COMP%]{color:#513894}ion-fab-button[_ngcontent-%COMP%]{--background: #B95CF4;position:relative;color:#fff}ion-fab-button[_ngcontent-%COMP%]:hover:after{content:attr(title);position:absolute;bottom:100%;left:50%;transform:translate(-50%);background-color:#333;color:#fff;padding:1px 10px;border-radius:4px;white-space:nowrap;font-size:12px;z-index:1000}ion-fab-button[_ngcontent-%COMP%]:hover:before{content:"";position:absolute;bottom:90%;left:50%;transform:translate(-50%);border-width:5px;border-style:solid;border-color:#333 transparent transparent transparent;z-index:1000}.login-button[_ngcontent-%COMP%], .signIn-button[_ngcontent-%COMP%], .round-button-donation[_ngcontent-%COMP%]{display:none!important}.responsive-toolbar[_ngcontent-%COMP%]{height:80px}.responsive-toolbar[_ngcontent-%COMP%]   .header-logo[_ngcontent-%COMP%]{width:100px;margin-top:0;padding-bottom:10px}.desktop-title[_ngcontent-%COMP%]{display:none}.menu-container[_ngcontent-%COMP%]{display:none!important;width:100%!important}.menu-selector[_ngcontent-%COMP%]{display:none!important;justify-content:center!important;background-color:#b95cf4!important;padding:5px 0!important}.menu-selector[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none!important;margin:0!important;padding:0!important;display:flex!important;justify-content:center!important}.menu-selector[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 10px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none!important;color:#333!important;font-weight:700!important;font-size:16px!important}.menu-selector[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:purple!important}ion-back-button[_ngcontent-%COMP%]{color:#b95cf4;--background: transparent}.vertical-button[_ngcontent-%COMP%]{left:-20px;font-size:14px;padding:5px 10px}.vertical-button.show[_ngcontent-%COMP%]{opacity:0!important}}']}),_})()},5658:(h,C,c)=>{c.r(C),c.d(C,{HomePageModule:()=>k});var n=c(177),o=c(4341),e=c(9465),f=c(70),t=c(3953),_=c(5473);function b(i,g){if(1&i&&(t.j41(0,"div",9),t.nrm(1,"img",10),t.k0s()),2&i){const u=g.$implicit;t.R7$(),t.Y8G("src",u,t.B4B)}}function d(i,g){if(1&i){const u=t.RV6();t.j41(0,"span",11),t.bIt("click",function(){const s=t.eBV(u).index,m=t.XpG();return t.Njj(m.goToSlide(s))}),t.k0s()}if(2&i){const u=g.index,a=t.XpG();t.AVh("active",u===a.currentSlideIndex)}}let l=(()=>{var i;class g{constructor(){this.images=["../../../assets/images/home page 1-Grey bkg.png","../../../assets/images/Chat bot grey background.png","../../../assets/images/Navigator.gif"],this.currentSlideIndex=0}ngOnInit(){this.startAutoSlide()}ngOnDestroy(){this.stopAutoSlide()}startAutoSlide(){this.intervalId=setInterval(()=>{this.nextSlide()},5e3)}stopAutoSlide(){this.intervalId&&clearInterval(this.intervalId)}showSlide(a){const s=document.querySelector(".slides"),m=document.querySelectorAll(".dot");this.currentSlideIndex=a>=this.images.length?0:a<0?this.images.length-1:a,s.style.transform=`translateX(${-100*this.currentSlideIndex}%)`,m.forEach((r,v)=>{r.classList.toggle("active",v===this.currentSlideIndex)})}nextSlide(){this.showSlide(this.currentSlideIndex+1)}previousSlide(){this.showSlide(this.currentSlideIndex-1)}goToSlide(a){this.showSlide(a)}}return(i=g).\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.VBU({type:i,selectors:[["app-swiper-card"]],decls:11,vars:2,consts:[[1,"image-container"],[1,"carousel"],[1,"slides"],["class","slide",4,"ngFor","ngForOf"],[1,"dots"],["class","dot",3,"active","click",4,"ngFor","ngForOf"],[1,"swiper-buttons"],[1,"swiper-button-prev",3,"click"],[1,"swiper-button-next",3,"click"],[1,"slide"],["alt","Slide",3,"src"],[1,"dot",3,"click"]],template:function(a,s){1&a&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2),t.DNE(3,b,2,1,"div",3),t.k0s(),t.j41(4,"div",4),t.DNE(5,d,1,2,"span",5),t.k0s(),t.j41(6,"div",6)(7,"button",7),t.bIt("click",function(){return s.previousSlide()}),t.EFF(8,"\u276e"),t.k0s(),t.j41(9,"button",8),t.bIt("click",function(){return s.nextSlide()}),t.EFF(10,"\u276f"),t.k0s()()()()),2&a&&(t.R7$(3),t.Y8G("ngForOf",s.images),t.R7$(2),t.Y8G("ngForOf",s.images))},dependencies:[n.Sq],styles:[".image-container[_ngcontent-%COMP%]{position:relative;max-width:100%;overflow:hidden;height:85vh}@media (max-width: 600px){.image-container[_ngcontent-%COMP%]{height:30vh}}.carousel[_ngcontent-%COMP%]{position:relative;height:100%}.slides[_ngcontent-%COMP%]{display:flex;transition:transform .5s ease-in-out;height:100%}.slide[_ngcontent-%COMP%]{min-width:100%;box-sizing:border-box;height:100%}.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}@media (max-width: 600px){.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto}}.dots[_ngcontent-%COMP%]{text-align:center;position:absolute;bottom:10px;width:100%}@media (max-width: 600px){.dots[_ngcontent-%COMP%]{bottom:15px}}.dot[_ngcontent-%COMP%]{display:inline-block;background-color:#80008099;border-radius:50%;width:12px;height:12px;margin:0 5px;cursor:pointer}@media (max-width: 600px){.dot[_ngcontent-%COMP%]{width:8px;height:8px;margin:0 3px}}.dot.active[_ngcontent-%COMP%]{background-color:#800080cc}.swiper-buttons[_ngcontent-%COMP%]{position:absolute;top:50%;width:100%;display:flex;justify-content:space-between;transform:translateY(-50%)}@media (max-width: 600px){.swiper-buttons[_ngcontent-%COMP%]{top:45%}}.swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%]{background-color:#8000804d;color:#fff;border:none;padding:10px;cursor:pointer;border-radius:50%;transition:background-color .3s ease}@media (max-width: 600px){.swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%]{padding:5px}}.swiper-button-prev[_ngcontent-%COMP%]:hover, .swiper-button-next[_ngcontent-%COMP%]:hover{background-color:#80008080}"]}),g})();var p=c(385);const x=[{path:"",component:(()=>{var i;class g{constructor(a){this.router=a,this.events=[],this.hasFooter=!0,this.option={slidesPerView:1,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},navigation:!0}}ngOnInit(){}ngAfterViewInit(){const a=document.querySelector(".donation-button");a&&(window.addEventListener("scroll",function(){window.scrollY>100?a.classList.add("show"):a.classList.remove("show")}),a.addEventListener("click",function(){alert("Donation button clicked!")}))}allrecords(){this.router.navigate(["records"])}signup(){this.router.navigate(["register"])}login(){this.router.navigate(["login"])}donation(){this.router.navigate(["donation"])}changeCategory(a,s){a.preventDefault(),console.log(`Category changed to: ${s}`)}}return(i=g).\u0275fac=function(a){return new(a||i)(t.rXU(f.Ix))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-home"]],decls:116,vars:0,consts:[["fullscreen","true"],[1,"image-container"],[1,"category-selector"],[1,"selector-label"],["name","search-outline",1,"search-icon"],[1,"selector-buttons"],[1,"category-button",3,"click"],["src","../../../assets/icon/ConcernsPics/abdominalPain.png","alt","Abdominal Pain & Cramping",1,"button-image"],["src","../../../assets/icon/ConcernsPics/bloodStool.png","alt","Blood and/or Mucus in stool",1,"button-image"],["src","../../../assets/icon/ConcernsPics/fatigue.png","alt","Fatigue and Weakness",1,"button-image"],["src","../../../assets/icon/ConcernsPics/diarrhea.png","alt","Diarrhea",1,"button-image"],["src","../../../assets/icon/ConcernsPics/constipation.png","alt","Constipation",1,"button-image"],["src","../../../assets/icon/ConcernsPics/weightLoss.png","alt","Weight loss and malnutrition",1,"button-image"],["src","../../../assets/icon/ConcernsPics/apetiteLoss.png","alt","Loss of appetite",1,"button-image"],["src","../../../assets/icon/ConcernsPics/vomitting.png","alt","Nausea and vomiting",1,"button-image"],["src","../../../assets/icon/ConcernsPics/rectalPain.png","alt","Rectal pain and pressure",1,"button-image"],["src","../../../assets/icon/ConcernsPics/fatigue.png","alt","Anemia",1,"button-image"],["src","../../../assets/icon/ConcernsPics/jointPain.png","alt","Joint pain and arthritis",1,"button-image"],[1,"card"],[1,"card-body"],[1,"long-cards"],[1,"long-card"],["src","../../../assets/images/logo.png","alt","first-picture",1,"card-img"],[1,"long-card-content"],[1,"custom-card-title-center"],[1,"long-card-text"],["fill","outline",1,"learn-more-button"],["src","../../../assets/images/logo.png","alt","second-picture",1,"card-img"],[1,"card-container-partner"],[1,"square-card"],[1,"card-text"],["src","../../../assets/images/logo_1.png"],["vertical","bottom","horizontal","end","slot","fixed"],["title","Press to start a conversation."],["name","add"],["routerLink","/donation",1,"donation-button"]],template:function(a,s){1&a&&(t.j41(0,"ion-content",0)(1,"ion-header"),t.nrm(2,"app-header"),t.j41(3,"div",1),t.nrm(4,"app-swiper-card"),t.k0s(),t.j41(5,"div",2)(6,"div",3),t.nrm(7,"ion-icon",4),t.j41(8,"span"),t.EFF(9,"SELECT CONCERN:"),t.k0s()(),t.j41(10,"div",5)(11,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Abdominal Pain & Cramping")}),t.nrm(12,"img",7),t.EFF(13," Abdominal Pain & Cramping "),t.k0s(),t.j41(14,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Blood and/or Mucus in stool")}),t.nrm(15,"img",8),t.EFF(16," Blood and/or Mucus in stool "),t.k0s(),t.j41(17,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Fatigue and Weakness")}),t.nrm(18,"img",9),t.EFF(19," Fatigue and Weakness "),t.k0s(),t.j41(20,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Diarrhea")}),t.nrm(21,"img",10),t.EFF(22," Diarrhea "),t.k0s(),t.j41(23,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Constipation")}),t.nrm(24,"img",11),t.EFF(25," Constipation "),t.k0s(),t.j41(26,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Weight loss and malnutrition")}),t.nrm(27,"img",12),t.EFF(28," Weight loss and malnutrition "),t.k0s(),t.j41(29,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Loss of appetite")}),t.nrm(30,"img",13),t.EFF(31," Loss of appetite "),t.k0s(),t.j41(32,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Nausea and vomiting")}),t.nrm(33,"img",14),t.EFF(34," Nausea and vomiting "),t.k0s(),t.j41(35,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Rectal pain and pressure")}),t.nrm(36,"img",15),t.EFF(37," Rectal pain and pressure "),t.k0s(),t.j41(38,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Anemia")}),t.nrm(39,"img",16),t.EFF(40," Anemia "),t.k0s(),t.j41(41,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Joint pain and arthritis")}),t.nrm(42,"img",17),t.EFF(43," Joint pain and arthritis "),t.k0s(),t.j41(44,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Joint pain and arthritis")}),t.nrm(45,"img",17),t.EFF(46," Joint pain and arthritis "),t.k0s(),t.j41(47,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Joint pain and arthritis")}),t.nrm(48,"img",17),t.EFF(49," Joint pain and arthritis "),t.k0s(),t.j41(50,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Joint pain and arthritis")}),t.nrm(51,"img",17),t.EFF(52," Joint pain and arthritis "),t.k0s(),t.j41(53,"button",6),t.bIt("click",function(r){return s.changeCategory(r,"Joint pain and arthritis")}),t.nrm(54,"img",17),t.EFF(55," Joint pain and arthritis "),t.k0s()()()(),t.j41(56,"div",18)(57,"div",19)(58,"div",20)(59,"ion-card-content")(60,"div",21),t.nrm(61,"img",22),t.j41(62,"div",23)(63,"ion-card-header")(64,"ion-card-title",24),t.EFF(65,"Clinical Trials Community"),t.k0s()(),t.j41(66,"div",25)(67,"p"),t.EFF(68,"Many people with IBD are unaware that clinical trials are an option. Through clinical trials, researchers find new ways to improve treatments and quality of life. Visit our Clinical Trials Community to learn more."),t.k0s(),t.j41(69,"ion-button",26),t.EFF(70,"Learn More"),t.k0s()()()()()()()(),t.j41(71,"div",18)(72,"div",19)(73,"div",20)(74,"ion-card-content")(75,"div",21),t.nrm(76,"img",27),t.j41(77,"div",23)(78,"ion-card-header")(79,"ion-card-title",24),t.EFF(80,"MyIBD Learning Education Programs"),t.k0s()(),t.j41(81,"div",25)(82,"p"),t.EFF(83,"Throughout 2024, the Crohn's & Colitis Foundation is hosting virtual, in-person, and on demand MyIBD Learning education programs. Each program is created for patients and caregivers of all ages\u2014wherever they are in their patient journey."),t.k0s(),t.j41(84,"ion-button",26),t.EFF(85,"Find Programs"),t.k0s()()()()()()()(),t.j41(86,"div",18)(87,"div",19)(88,"div",28)(89,"ion-card-header")(90,"ion-card-title",24),t.EFF(91,"Our Partners"),t.k0s()(),t.j41(92,"ion-card-content")(93,"div",28)(94,"div",29)(95,"div",30),t.nrm(96,"img",31),t.k0s()(),t.j41(97,"div",29)(98,"div",30),t.nrm(99,"img",31),t.k0s()(),t.j41(100,"div",29)(101,"div",30),t.nrm(102,"img",31),t.k0s()(),t.j41(103,"div",29)(104,"div",30),t.nrm(105,"img",31),t.k0s()(),t.j41(106,"div",29)(107,"div",30),t.nrm(108,"img",31),t.k0s()()()()()()(),t.j41(109,"ion-fab",32)(110,"ion-fab-button",33),t.nrm(111,"ion-icon",34),t.k0s()(),t.j41(112,"div",35),t.EFF(113," DONATION "),t.k0s(),t.j41(114,"footer"),t.nrm(115,"app-footer"),t.k0s()())},dependencies:[e.Jm,e.I9,e.ME,e.tN,e.W9,e.Q8,e.YW,e.eU,e.iq,e.N7,f.Wk,_.n,l,p.l],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0!important;padding:0!important;height:100%!important}ion-content[_ngcontent-%COMP%]{overflow:auto}.main-container[_ngcontent-%COMP%]{display:flex!important;flex-direction:column!important;min-height:100vh!important;padding-bottom:70px!important;box-sizing:border-box!important}footer[_ngcontent-%COMP%]{margin-top:auto!important}.image-container[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-width:100%!important;max-height:50%!important}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{color:#b95cf4!important}.custom-card-title-center[_ngcontent-%COMP%]{text-align:center!important;font-size:32px;font-weight:700;padding-bottom:20px;padding-top:-30px}.category-selector[_ngcontent-%COMP%]{height:400px;margin-top:20px!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;padding:0 30px 30px!important;align-content:center}.selector-label[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;margin-bottom:20px!important}.selector-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:bolder!important;color:purple!important;font-size:25px;padding-bottom:20px}.selector-buttons[_ngcontent-%COMP%]{display:grid!important;grid-template-columns:repeat(4,1fr)!important;gap:30px 30px!important;justify-items:center!important;width:95%!important;align-items:center}.category-button[_ngcontent-%COMP%]{background-color:#fff!important;border:2px solid purple!important;border-radius:10px!important;padding:10px!important;display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important;position:relative!important;font-size:17px!important;box-sizing:border-box!important;font-weight:700;width:100%}.category-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px!important;height:45px!important;position:absolute!important;top:-25px!important;left:-10px;border-radius:50%!important}.category-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:30px!important}.category-button[_ngcontent-%COMP%]:hover{background-color:purple!important;color:#fff!important}.search-icon[_ngcontent-%COMP%]{color:purple!important;font-size:20px!important}.category-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{background-color:#fff!important;color:purple!important}.card[_ngcontent-%COMP%]{width:100%}.card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#fff;padding:20px 50px;justify-content:space-between;align-items:stretch;width:100%}.card-container-partner[_ngcontent-%COMP%]{display:flex!important;justify-content:space-around!important;flex-wrap:wrap!important;padding:10px!important}.square-card[_ngcontent-%COMP%]{width:18%!important;padding:20px!important;margin-bottom:20px!important;border:2px solid purple!important;box-shadow:0 4px 8px #0000001a!important;border-radius:10px!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important;align-items:center!important}.square-card[_ngcontent-%COMP%]:hover{box-shadow:0 8px 16px #0003!important;border-color:#b95cf4!important;background-color:#f9f9f9!important}.card-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px!important;text-align:center!important;color:#666!important}.long-card[_ngcontent-%COMP%]{display:flex!important;margin:20px 10px!important;padding:30px!important;border:1px solid #ddd!important;border-radius:10px!important;background-color:#fff!important;box-shadow:0 4px 8px #0000001a!important}.card-img[_ngcontent-%COMP%]{width:40%!important;object-fit:contain!important}.long-card-content[_ngcontent-%COMP%]{padding:10px!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important;width:70%!important}.long-card-text[_ngcontent-%COMP%]{text-align:left!important}.long-card-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:32px!important;margin:0!important;color:#333!important}.learn-more-button[_ngcontent-%COMP%]{align-self:flex-end!important;margin-top:20px!important}.long-card[_ngcontent-%COMP%]:hover{box-shadow:0 8px 16px #0003!important;border-color:#b95cf4!important;background-color:#f9f9f9!important}ion-fab-button[_ngcontent-%COMP%]{--background: purple !important}ion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px!important}.donation-card[_ngcontent-%COMP%]{position:fixed!important;right:20px!important;bottom:50px!important;width:200px!important;padding:20px!important;background-color:#fff!important;border:2px solid purple!important;border-radius:10px!important;box-shadow:0 4px 8px #0000001a!important;z-index:1000!important;display:none!important}.donation-card.visible[_ngcontent-%COMP%]{display:block!important}.donation-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]{text-align:center!important;font-size:16px!important;color:#333!important;margin-bottom:10px!important}.donation-card[_ngcontent-%COMP%]   .donation-button[_ngcontent-%COMP%]{display:flex!important;justify-content:center!important}.donation-card[_ngcontent-%COMP%]   .donation-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: purple !important;color:#fff!important;border-radius:10px!important;width:100%!important}.donation-button[_ngcontent-%COMP%]{position:fixed!important;left:0!important;top:50%!important;transform:translateY(-50%)!important;writing-mode:vertical-rl!important;text-orientation:mixed!important;background-color:#32b909!important;color:#fff!important;padding:10px 15px!important;border-radius:0 10px 10px 0!important;z-index:1000!important;cursor:pointer!important;font-size:18px!important;font-weight:700!important;opacity:1!important;transition:opacity .3s!important}.donation-button[_ngcontent-%COMP%]:hover{opacity:.7!important}@keyframes _ngcontent-%COMP%_fadeInOut{0%,to{opacity:1!important}50%{opacity:.5!important}}.donation-button.animate[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeInOut 1.5s infinite!important}"]}),g})()}];let M=(()=>{var i;class g{}return(i=g).\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[f.iI.forChild(x),f.iI]}),g})();var O=c(3887);let k=(()=>{var i;class g{}return(i=g).\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[n.MD,o.YN,e.bv,M,O.G]}),g})()},3887:(h,C,c)=>{c.d(C,{G:()=>t});var n=c(177),o=c(4341),e=c(9465),f=c(3953);let t=(()=>{var _;class b{}return(_=b).\u0275fac=function(l){return new(l||_)},_.\u0275mod=f.$C({type:_}),_.\u0275inj=f.G2t({imports:[n.MD,o.YN,e.bv,o.X1]}),b})()}}]);