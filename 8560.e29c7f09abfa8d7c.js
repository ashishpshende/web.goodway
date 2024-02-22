"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8560],{8560:(N,U,a)=>{a.r(U),a.d(U,{UpdateUserPageModule:()=>P});var p=a(6814),u=a(6223),s=a(878),g=a(6800),f=a(5861),h=a(9421),e=a(9212),S=a(6530),_=a(643),A=a(3864),m=a(9864);function E(n,l){if(1&n&&(e.TgZ(0,"ion-select-option",15),e._uU(1),e.qZA()),2&n){const c=l.$implicit;e.s9C("value",c),e.xp6(),e.hij(" ",c," ")}}function M(n,l){if(1&n&&(e.TgZ(0,"ion-select-option",15),e._uU(1),e.qZA()),2&n){const c=l.$implicit;e.s9C("value",c),e.xp6(),e.hij(" ",c," ")}}const T=[{path:"",component:(()=>{var n;class l{constructor(o,t,r,i,d,C,L){this.loadingCtrl=o,this.userService=t,this.activatedRoute=r,this.alertController=i,this.languageService=d,this.router=C,this.loaderService=L,this.genders=[],this.roles=[],this.statuses=[],this.genders=["Male","Female","Others"],this.roles=["SuperAdmin","Admin","User"],this.statuses=["Active","InActive","Suspended"],this.user=null!=this.userService.selectedUser&&null!=this.userService.selectedUser?this.userService.selectedUser:new h.n(JSON.parse("{}"))}ngAfterViewInit(){this.activatedRoute.queryParams.subscribe(o=>{const t=Number.parseInt(o.Id,10);this.loadUserDetails(t)})}loadUserDetails(o){this.loaderService.customLoader("Loading User Details...",1e4),this.userService.readById(o,t=>{this.user=new h.n(t.result[0]),this.user.icon="person-sharp",this.loaderService.dismissLoader()},()=>{this.loaderService.dismissLoader()})}goToUserList(){this.userService.selectedUser=this.user;const o={queryParams:{ts:(new Date).getMilliseconds()}};this.router.navigate(["home/user-list"],o)}updateButtonClicked(){this.validate()?this.checkEmailExistance(()=>{this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"),this.languageService.translate("SIGN_UP.USER_WITH_EMAIL_ALREADY_EXISTS"))},()=>{this.checkUserNameExistance(()=>{this.presentAlert(this.languageService.translate("SIGN_UP.ALREADY_REGISTERED"),this.languageService.translate("SIGN_UP.USER_WITH_USERNAME_ALREADY_EXISTS"))},()=>{this.updateUser(()=>{this.goToUserList()},()=>{this.presentAlert(this.languageService.translate("SIGN_UP.REGISTRATION_FAILED"),this.languageService.translate("SIGN_UP.REGISTRATION_FAILED_MESSAGE"))})})}):this.presentAlert(this.languageService.translate("SIGN_UP.EMPTY_DETAILS"),this.languageService.translate("SIGN_UP.EMPTY_DETAILS_MESSAGE"))}checkEmailExistance(o,t){this.loaderService.customLoader("Checking for Email...",1e4),this.userService.readByEmail(this.user.email,r=>{this.loaderService.dismissLoader();let i=0;r.length>0?(r.forEach(d=>{this.user.email.toLowerCase()===d.email.toLowerCase()&&this.user.id!==d.id&&i++}),i>0?o(new h.n(r[0])):t()):t()},()=>{this.loaderService.dismissLoader(),t()})}checkUserNameExistance(o,t){this.loaderService.customLoader("Checking for User Name...",1e4),this.userService.readByUserName(this.user.userName,r=>{this.loaderService.dismissLoader();let i=0;r.length>0?(r.forEach(d=>{this.user.userName===d.userName&&this.user.id!==d.id&&i++}),i>0?o(new h.n(r[0])):t()):t()},()=>{this.loaderService.dismissLoader(),t()})}updateUser(o,t){this.loaderService.customLoader("Saving User...",1e4),this.user.updatedOn=(0,p.p6)(new Date,"dd-MM-yyyy hh:mm:ss","en-US","+0530"),this.userService.UpdateUser(this.user,r=>{this.loaderService.dismissLoader(),this.goToUserList()},()=>{this.loaderService.dismissLoader()})}validate(){return!(this.user.name||this.user.email||this.user.phoneNumber||this.user.userName)}presentAlert(o=this.languageService.translate("SIGN_UP.TITLE"),t=this.languageService.translate("SIGN_UP.REGISTRATION_FAILED")){var r=this;return(0,f.Z)(function*(){const i=yield r.alertController.create({cssClass:"app-alert-class",header:o,subHeader:"",message:t,buttons:[r.languageService.translate("BUTTONS.OK")]});yield i.present(),yield i.onDidDismiss()})()}}return(n=l).\u0275fac=function(o){return new(o||n)(e.Y36(s.HT),e.Y36(S.K),e.Y36(g.gz),e.Y36(s.Br),e.Y36(_.T),e.Y36(g.F0),e.Y36(A.D))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-update-user"]],decls:99,vars:60,consts:[[1,"text-center"],[1,"user-icon",3,"name"],["name","people-circle-outline","slot","start"],["size","12"],["size","6"],[1,"value",3,"ngModel","placeholder","ngModelChange"],["name","settings-outline","slot","start"],["size","6",1,"value"],[3,"ngModel","placeholder","ngModelChange"],["name","options-outline","slot","start"],["multiple","false","cancelText","Cancel","okText","Select",1,"value",3,"ngModel","placeholder","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["expand","block",3,"click"],["slot","start","name","close"],["slot","start","name","save"],[3,"value"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-content")(1,"ion-card")(2,"ion-card-header",0),e._UZ(3,"ion-icon",1),e.qZA()(),e.TgZ(4,"ion-card")(5,"ion-card-header",0)(6,"ion-item"),e._UZ(7,"ion-icon",2),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"ion-card-content")(11,"ion-list")(12,"ion-item")(13,"ion-grid")(14,"ion-row")(15,"ion-col",3),e._uU(16),e.ALo(17,"translate"),e.qZA()(),e.TgZ(18,"ion-row")(19,"ion-col",4)(20,"ion-input",5),e.NdJ("ngModelChange",function(i){return t.user.name=i}),e.ALo(21,"translate"),e.qZA()()()()()()()(),e.TgZ(22,"ion-card")(23,"ion-card-header",0)(24,"ion-item"),e._UZ(25,"ion-icon",6),e._uU(26),e.ALo(27,"translate"),e.qZA()(),e.TgZ(28,"ion-card-content")(29,"ion-list")(30,"ion-item")(31,"ion-grid")(32,"ion-row")(33,"ion-col"),e._uU(34),e.ALo(35,"translate"),e.qZA(),e.TgZ(36,"ion-col",7)(37,"ion-input",8),e.NdJ("ngModelChange",function(i){return t.user.email=i}),e.ALo(38,"translate"),e.qZA()()()()(),e.TgZ(39,"ion-item")(40,"ion-grid")(41,"ion-row")(42,"ion-col"),e._uU(43),e.ALo(44,"translate"),e.qZA(),e.TgZ(45,"ion-col",7)(46,"ion-input",8),e.NdJ("ngModelChange",function(i){return t.user.phoneNumber=i}),e.ALo(47,"translate"),e.qZA()()()()()()()(),e.TgZ(48,"ion-card")(49,"ion-card-header")(50,"ion-item"),e._UZ(51,"ion-icon",9),e._uU(52),e.ALo(53,"translate"),e.qZA()(),e.TgZ(54,"ion-card-content")(55,"ion-list")(56,"ion-item")(57,"ion-grid")(58,"ion-row")(59,"ion-col"),e._uU(60),e.ALo(61,"translate"),e.qZA(),e.TgZ(62,"ion-col",4)(63,"ion-input",5),e.NdJ("ngModelChange",function(i){return t.user.userName=i}),e.ALo(64,"translate"),e.qZA()()()()(),e.TgZ(65,"ion-item")(66,"ion-grid")(67,"ion-row")(68,"ion-col"),e._uU(69),e.ALo(70,"translate"),e.qZA(),e.TgZ(71,"ion-col",4)(72,"ion-select",10),e.NdJ("ngModelChange",function(i){return t.user.userRole=i}),e.ALo(73,"translate"),e.YNc(74,E,2,2,"ion-select-option",11),e.qZA()()()()(),e.TgZ(75,"ion-item")(76,"ion-grid")(77,"ion-row")(78,"ion-col"),e._uU(79),e.ALo(80,"translate"),e.qZA(),e.TgZ(81,"ion-col",4)(82,"ion-select",10),e.NdJ("ngModelChange",function(i){return t.user.userStatus=i}),e.ALo(83,"translate"),e.YNc(84,M,2,2,"ion-select-option",11),e.qZA()()()()()()()(),e.TgZ(85,"ion-card")(86,"ion-card-header",0)(87,"ion-item"),e._UZ(88,"ion-icon"),e.qZA()(),e._UZ(89,"ion-card-content"),e.qZA()(),e.TgZ(90,"ion-footer")(91,"ion-button",12),e.NdJ("click",function(){return t.goToUserList()}),e._UZ(92,"ion-icon",13),e._uU(93),e.ALo(94,"translate"),e.qZA(),e.TgZ(95,"ion-button",12),e.NdJ("click",function(){return t.updateButtonClicked()}),e._UZ(96,"ion-icon",14),e._uU(97),e.ALo(98,"translate"),e.qZA()()),2&o&&(e.xp6(3),e.Q6J("name",t.user.icon),e.xp6(5),e.hij(" ",e.lcZ(9,26,"USER.BASIC_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(17,28,"BASE_MODEL.name")," "),e.xp6(4),e.MGl("placeholder"," ",e.lcZ(21,30,"USER.FIRST_NAME"),""),e.Q6J("ngModel",t.user.name),e.xp6(6),e.hij(" ",e.lcZ(27,32,"USER.CONTACT_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(35,34,"USER.EMAIL")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(38,36,"USER.EMAIL"),""),e.Q6J("ngModel",t.user.email),e.xp6(6),e.hij("",e.lcZ(44,38,"USER.PHONE_NUMBER")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(47,40,"USER.PHONE_NUMBER"),""),e.Q6J("ngModel",t.user.phoneNumber),e.xp6(6),e.hij(" ",e.lcZ(53,42,"USER.ACCOUNT_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(61,44,"USER.USER_NAME")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(64,46,"USER.USER_NAME"),""),e.Q6J("ngModel",t.user.userName),e.xp6(6),e.hij("",e.lcZ(70,48,"USER.ROLE")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(73,50,"USER.ROLE"),""),e.Q6J("ngModel",t.user.userRole),e.xp6(2),e.Q6J("ngForOf",t.roles),e.xp6(5),e.hij("",e.lcZ(80,52,"BASE_MODEL.STATUS")," "),e.xp6(3),e.MGl("placeholder"," ",e.lcZ(83,54,"BASE_MODEL.STATUS"),""),e.Q6J("ngModel",t.user.userStatus),e.xp6(2),e.Q6J("ngForOf",t.statuses),e.xp6(9),e.hij(" ",e.lcZ(94,56,"BUTTONS.CANCEL")," "),e.xp6(4),e.hij(" ",e.lcZ(98,58,"BUTTONS.SAVE")," "))},dependencies:[p.sg,u.JJ,u.On,s.YG,s.PM,s.FN,s.Zi,s.wI,s.W2,s.fr,s.jY,s.gu,s.pK,s.Ie,s.q_,s.Nd,s.t9,s.n0,s.QI,s.j9,m.X$],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: url(/assets/bg20.JPG) 0 0/100% 100% no-repeat;background-size:cover;background-color:#f0f8ff}.toolbar-backgorund[_ngcontent-%COMP%]{background-color:#f0f8ff;color:#000}.user-profile-pic[_ngcontent-%COMP%]{width:60px;height:60px;display:block;margin-top:20px;margin-left:auto;margin-right:auto;background-color:#f0f8ff}ion-note[_ngcontent-%COMP%]{display:inline-block;font-size:16px;background-color:#f0f8ff;color:#000}ion-item.selected[_ngcontent-%COMP%]{background-color:#f0f8ff;color:#000}ion-card[_ngcontent-%COMP%]{color:#2c1d1d;background-color:#f0f8ff;padding:0;margin:0;border-radius:10px}ion-card-content[_ngcontent-%COMP%]{background-color:#f0f8ff;color:#130d0d}ion-select[_ngcontent-%COMP%]{max-width:100%!important;width:100%!important;padding-left:0!important}ion-text[_ngcontent-%COMP%]{--padding-top: 0;--padding-start: 0}.user-results[_ngcontent-%COMP%], .user-results-list-header[_ngcontent-%COMP%]{background-color:#f0f8ff}.user-result-cell[_ngcontent-%COMP%]{background-color:#7fffd4;margin-top:10px}.list-image[_ngcontent-%COMP%], .user-icon[_ngcontent-%COMP%]{font-size:50px;color:#1f0707}.value[_ngcontent-%COMP%]{font-size:larger;font-weight:600}.text-center[_ngcontent-%COMP%]{text-align:center;align-items:center}.bottom-area[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;right:0;background-color:gray;height:45px;margin-bottom:0}.bottom-button[_ngcontent-%COMP%]{border-width:1px;border-color:#3e2c2c;color:#fff;font-size:larger;font-weight:800;border-style:solid;width:50%;margin:5px auto auto}"]}),l})()}];let v=(()=>{var n;class l{}return(n=l).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(T),g.Bz]}),l})();var Z=a(1383);let P=(()=>{var n;class l{}return(n=l).\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,u.u5,s.Pc,u.UX,v,Z.m,m.aw.forChild()]}),l})()}}]);