"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4497],{4497:(P,u,r)=>{r.r(u),r.d(u,{UserDetailsPageModule:()=>A});var h=r(6814),U=r(6223),i=r(878),l=r(6800),d=r(9421),e=r(9212),f=r(6530),Z=r(3864),g=r(9864);const p=[{path:"",component:(()=>{var o;class s{constructor(t,n,c,T){this.userService=t,this.activatedRoute=n,this.router=c,this.loaderService=T,this.user=this.userService.selectedUser?this.userService.selectedUser:new d.n(JSON.parse("{}"))}ngAfterViewInit(){this.activatedRoute.queryParams.subscribe(t=>{const n=Number.parseInt(t.Id,10);this.loadUserDetails(n)})}loadUserDetails(t){this.loaderService.customLoader("Loading User Details...",1e4),this.userService.readById(t,n=>{this.user=new d.n(n.result[0]),this.user.icon="person-sharp",this.loaderService.dismissLoader()},()=>{this.loaderService.dismissLoader()})}goToUserList(){this.userService.selectedUser=this.user;const t={queryParams:{ts:(new Date).getMilliseconds()}};this.router.navigate(["home/user-list"],t)}editButtonClicked(){this.userService.selectedUser=this.user;const t={queryParams:{id:this.userService.selectedUser.id,ts:(new Date).getMilliseconds()}};this.router.navigate(["home/update-user"],t)}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(f.K),e.Y36(l.gz),e.Y36(l.F0),e.Y36(Z.D))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user-details"]],decls:109,vars:51,consts:[[1,"text-center"],[1,"user-icon",3,"name"],["name","people-circle-outline","slot","start"],["size","6"],["size","6",1,"value"],["name","settings-outline","slot","start"],[1,"value"],["name","options-outline","slot","start"],["name","calendar-outline","slot","start"],["expand","block",3,"click"],["slot","start","name","close"],["slot","start","name","create"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-content")(1,"ion-card")(2,"ion-card-header",0),e._UZ(3,"ion-icon",1),e.qZA()(),e.TgZ(4,"ion-card")(5,"ion-card-header",0)(6,"ion-item"),e._UZ(7,"ion-icon",2),e._uU(8),e.ALo(9,"translate"),e.qZA()(),e.TgZ(10,"ion-card-content")(11,"ion-list")(12,"ion-item")(13,"ion-grid")(14,"ion-row")(15,"ion-col",3),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"ion-col",4),e._uU(19),e.qZA()()()()()()(),e.TgZ(20,"ion-card")(21,"ion-card-header",0)(22,"ion-item"),e._UZ(23,"ion-icon",5),e._uU(24),e.ALo(25,"translate"),e.qZA()(),e.TgZ(26,"ion-card-content")(27,"ion-list")(28,"ion-item")(29,"ion-grid")(30,"ion-row")(31,"ion-col",3),e._uU(32),e.ALo(33,"translate"),e.qZA(),e.TgZ(34,"ion-col",6),e._uU(35),e.qZA()()()(),e.TgZ(36,"ion-item")(37,"ion-grid")(38,"ion-row")(39,"ion-col",3),e._uU(40),e.ALo(41,"translate"),e.qZA(),e.TgZ(42,"ion-col",4),e._uU(43),e.qZA()()()()()()(),e.TgZ(44,"ion-card")(45,"ion-card-header")(46,"ion-item"),e._UZ(47,"ion-icon",7),e._uU(48),e.ALo(49,"translate"),e.qZA()(),e.TgZ(50,"ion-card-content")(51,"ion-list")(52,"ion-item")(53,"ion-grid")(54,"ion-row")(55,"ion-col",3),e._uU(56),e.ALo(57,"translate"),e.qZA(),e.TgZ(58,"ion-col",4),e._uU(59),e.qZA()()()(),e.TgZ(60,"ion-item")(61,"ion-grid")(62,"ion-row")(63,"ion-col",3),e._uU(64),e.ALo(65,"translate"),e.qZA(),e.TgZ(66,"ion-col",4),e._uU(67),e.qZA()()()(),e.TgZ(68,"ion-item")(69,"ion-grid")(70,"ion-row")(71,"ion-col",3),e._uU(72),e.ALo(73,"translate"),e.qZA(),e.TgZ(74,"ion-col",4),e._uU(75),e.qZA()()()()()()(),e.TgZ(76,"ion-card")(77,"ion-card-header")(78,"ion-item"),e._UZ(79,"ion-icon",8),e._uU(80),e.ALo(81,"translate"),e.qZA()(),e.TgZ(82,"ion-card-content")(83,"ion-list")(84,"ion-item")(85,"ion-grid")(86,"ion-row")(87,"ion-col",3),e._uU(88),e.ALo(89,"translate"),e.qZA(),e.TgZ(90,"ion-col",4),e._uU(91),e.qZA()()()(),e.TgZ(92,"ion-item")(93,"ion-grid")(94,"ion-row")(95,"ion-col",3),e._uU(96),e.ALo(97,"translate"),e.qZA(),e.TgZ(98,"ion-col",4),e._uU(99),e.qZA()()()()()()()(),e.TgZ(100,"ion-footer")(101,"ion-button",9),e.NdJ("click",function(){return n.goToUserList()}),e._UZ(102,"ion-icon",10),e._uU(103),e.ALo(104,"translate"),e.qZA(),e.TgZ(105,"ion-button",9),e.NdJ("click",function(){return n.editButtonClicked()}),e._UZ(106,"ion-icon",11),e._uU(107),e.ALo(108,"translate"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("name",n.user.icon),e.xp6(5),e.hij(" ",e.lcZ(9,23,"USER.BASIC_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(17,25,"BASE_MODEL.name")," "),e.xp6(3),e.hij(" ",n.user.name,""),e.xp6(5),e.hij(" ",e.lcZ(25,27,"USER.CONTACT_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(33,29,"USER.EMAIL")," "),e.xp6(3),e.hij(" ",n.user.email,""),e.xp6(5),e.hij("",e.lcZ(41,31,"USER.PHONE_NUMBER")," "),e.xp6(3),e.hij(" ",n.user.phoneNumber,""),e.xp6(5),e.hij(" ",e.lcZ(49,33,"USER.ACCOUNT_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(57,35,"USER.USER_NAME")," "),e.xp6(3),e.hij(" ",n.user.userName," "),e.xp6(5),e.hij("",e.lcZ(65,37,"USER.ROLE")," "),e.xp6(3),e.hij(" ",n.user.userRole," "),e.xp6(5),e.hij("",e.lcZ(73,39,"BASE_MODEL.STATUS")," "),e.xp6(3),e.hij(" ",n.user.userStatus," "),e.xp6(5),e.hij(" ",e.lcZ(81,41,"BASE_MODEL.AUDIT_DETAILS")," "),e.xp6(8),e.hij("",e.lcZ(89,43,"BASE_MODEL.CREATED_ON")," "),e.xp6(3),e.hij(" ",n.user.createdOn," "),e.xp6(5),e.hij("",e.lcZ(97,45,"BASE_MODEL.UPDATED_ON")," "),e.xp6(3),e.hij(" ",n.user.updatedOn," "),e.xp6(4),e.hij(" ",e.lcZ(104,47,"BUTTONS.CANCEL")," "),e.xp6(4),e.hij(" ",e.lcZ(108,49,"BUTTONS.EDIT")," "))},dependencies:[i.YG,i.PM,i.FN,i.Zi,i.wI,i.W2,i.fr,i.jY,i.gu,i.Ie,i.q_,i.Nd,g.X$],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background: url(/assets/bg20.JPG) 0 0/100% 100% no-repeat;background-size:cover;background-color:#f0f8ff}.toolbar-backgorund[_ngcontent-%COMP%]{background-color:#f0f8ff;color:#000}.user-profile-pic[_ngcontent-%COMP%]{width:60px;height:60px;display:block;margin-top:20px;margin-left:auto;margin-right:auto;background-color:#f0f8ff}ion-note[_ngcontent-%COMP%]{display:inline-block;font-size:16px;background-color:#f0f8ff;color:#000}ion-item.selected[_ngcontent-%COMP%]{background-color:#f0f8ff;color:#000}ion-card[_ngcontent-%COMP%]{color:#2c1d1d;background-color:#f0f8ff;padding:0;margin:0;border-radius:10px}ion-card-content[_ngcontent-%COMP%]{background-color:#f0f8ff;color:#130d0d}.user-results[_ngcontent-%COMP%], .user-results-list-header[_ngcontent-%COMP%]{background-color:#f0f8ff}.user-result-cell[_ngcontent-%COMP%]{background-color:#7fffd4;margin-top:10px}.list-image[_ngcontent-%COMP%], .user-icon[_ngcontent-%COMP%]{font-size:50px;color:#1f0707}.value[_ngcontent-%COMP%]{font-size:larger;font-weight:600}.text-center[_ngcontent-%COMP%]{text-align:center;align-items:center}.bottom-area[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;right:0;background-color:gray;height:45px;margin-bottom:0}.bottom-button[_ngcontent-%COMP%]{border-width:1px;border-color:#3e2c2c;color:#fff;font-size:larger;font-weight:800;border-style:solid;width:50%;margin:5px auto auto}"]}),s})()}];let m=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.Bz.forChild(p),l.Bz]}),s})(),A=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.ez,U.u5,i.Pc,m,g.aw.forChild()]}),s})()}}]);