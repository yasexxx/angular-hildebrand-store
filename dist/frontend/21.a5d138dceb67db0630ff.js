(window.webpackJsonp=window.webpackJsonp||[]).push([[21,22,23],{PCNd:function(t,e,n){"use strict";n.d(e,"a",function(){return m});var i=n("HkTB"),o=n("1kSV"),r=n("ofXK"),a=n("bTqV"),s=n("NFeN"),c=n("3Pt+"),b=n("E1D/"),u=n("xJkR"),d=n("fXoL");let m=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(e){return new(e||t)},imports:[[r.c,i.a,o.v,a.b,s.b,c.i,u.b,c.u,o.x,b.b],i.a,c.i,c.u,u.b]}),t})()},bTqV:function(t,e,n){"use strict";n.d(e,"a",function(){return m}),n.d(e,"b",function(){return l});var i=n("FKr1"),o=n("R1ws"),r=n("fXoL"),a=n("u47x");const s=["mat-button",""],c=["*"],b=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"];class u{constructor(t){this._elementRef=t}}const d=Object(i.h)(Object(i.j)(Object(i.i)(u)));let m=(()=>{class t extends d{constructor(t,e,n){super(t),this._focusMonitor=e,this._animationMode=n,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const i of b)this._hasHostAttributes(i)&&this._getHostElement().classList.add(i);t.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t="program",e){this._focusMonitor.focusVia(this._getHostElement(),t,e)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...t){return t.some(t=>this._getHostElement().hasAttribute(t))}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(r.m),r.Qb(a.d),r.Qb(o.a,8))},t.\u0275cmp=r.Kb({type:t,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,e){var n;1&t&&r.Uc(i.f,!0),2&t&&r.Cc(n=r.ic())&&(e.ripple=n.first)},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(t,e){2&t&&(r.Eb("disabled",e.disabled||null),r.Ib("_mat-animation-noopable","NoopAnimations"===e._animationMode)("mat-button-disabled",e.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[r.Ab],attrs:s,ngContentSelectors:c,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,e){1&t&&(r.sc(),r.Wb(0,"span",0),r.rc(1),r.Vb(),r.Rb(2,"div",1),r.Rb(3,"div",2)),2&t&&(r.Db(2),r.Ib("mat-button-ripple-round",e.isRoundButton||e.isIconButton),r.tc("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},directives:[i.f],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),t})(),l=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[i.g,i.a],i.a]}),t})()},zrcO:function(t,e,n){"use strict";n.r(e),n.d(e,"UsersModule",function(){return R});var i=n("3Pt+"),o=n("ofXK"),r=n("fXoL"),a=n("7Vn+"),s=n("tyNb");function c(t,e){if(1&t){const t=r.Xb();r.Wb(0,"div",3),r.Wb(1,"h1"),r.Qc(2,"Edit Profile"),r.Vb(),r.Rb(3,"img",4),r.Wb(4,"div",5),r.Wb(5,"input",6,7),r.hc("ngModelChange",function(e){return r.Ec(t),r.lc().uploadFile=e})("change",function(e){return r.Ec(t),r.lc().attachedFile(e)}),r.Vb(),r.Wb(7,"label",8),r.Qc(8,"Update Avatar"),r.Vb(),r.Vb(),r.Wb(9,"form",9),r.hc("ngSubmit",function(){return r.Ec(t),r.lc().onSubmit()}),r.Wb(10,"div",10),r.Wb(11,"div"),r.Wb(12,"h2"),r.Wb(13,"strong"),r.Qc(14),r.Vb(),r.Vb(),r.Vb(),r.Wb(15,"div"),r.Wb(16,"label",11),r.Qc(17,"First name:"),r.Vb(),r.Wb(18,"input",12),r.hc("ngModelChange",function(e){return r.Ec(t),r.lc().user.firstname=e}),r.Vb(),r.Vb(),r.Wb(19,"div"),r.Wb(20,"label",11),r.Qc(21,"Last name:"),r.Vb(),r.Wb(22,"input",13),r.hc("ngModelChange",function(e){return r.Ec(t),r.lc().user.lastname=e}),r.Vb(),r.Vb(),r.Wb(23,"div"),r.Wb(24,"label",11),r.Qc(25,"Email:"),r.Vb(),r.Wb(26,"input",14),r.hc("ngModelChange",function(e){return r.Ec(t),r.lc().user.email=e}),r.Vb(),r.Vb(),r.Wb(27,"div"),r.Wb(28,"label",11),r.Qc(29,"Address:"),r.Vb(),r.Wb(30,"input",15),r.hc("ngModelChange",function(e){return r.Ec(t),r.lc().user.address=e}),r.Vb(),r.Vb(),r.Wb(31,"div"),r.Wb(32,"label",11),r.Qc(33,"Contact Number:"),r.Vb(),r.Wb(34,"input",16),r.hc("ngModelChange",function(e){return r.Ec(t),r.lc().user.phoneNumber=e}),r.Vb(),r.Vb(),r.Vb(),r.Wb(35,"div",17),r.Qc(36," Change password? "),r.Wb(37,"a",18),r.Qc(38,"Click here"),r.Vb(),r.Vb(),r.Wb(39,"div"),r.Wb(40,"button",19),r.Qc(41,"Update"),r.Vb(),r.Wb(42,"button",20),r.hc("click",function(){return r.Ec(t),r.lc().cancelButton()}),r.Qc(43,"Cancel"),r.Vb(),r.Vb(),r.Vb(),r.Vb()}if(2&t){const t=r.lc();r.Db(3),r.tc("src",t.base64Img(t.avatar),r.Gc),r.Db(2),r.tc("ngModel",t.uploadFile),r.Db(9),r.Rc(t.username),r.Db(4),r.tc("ngModel",t.user.firstname),r.Db(4),r.tc("ngModel",t.user.lastname),r.Db(4),r.tc("ngModel",t.user.email),r.Db(4),r.tc("ngModel",t.user.address),r.Db(4),r.tc("ngModel",t.user.phoneNumber)}}function b(t,e){1&t&&r.Qc(0," Contact site administrator!\n")}let u=(()=>{class t{constructor(t,e,n,i){this.authService=t,this.route=e,this.router=n,this.platfromId=i,this.username="@username",this.isUserSuccess=!0,this.user={firstname:"",lastname:"",email:"",address:"",phoneNumber:""},this.avatar={data:"",mimetype:"",url:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png"}}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");this.subscription$=this.authService.getUserApi(t).subscribe(t=>{const e=t[0];this.isUserSuccess=!0,this.user.firstname=e.firstname,this.user.lastname=e.lastname,this.user.email=e.email,this.user.address=e.address,this.user.phoneNumber=e.phoneNumber,this.username=e.username,this.userId=e._id},e=>{this.isUserSuccess=!1,this.router.navigate(["/404"],{queryParams:{user:t,register_error:"404"}})}),this.subscription4$=this.authService.getAvatarApi(t).subscribe(t=>{const e=t[0];this.avatar.data=e.data,this.avatar.url=e.url,this.avatar.mimetype=e.mimetype},t=>{})}ngOnDestroy(){this.subscription$&&this.subscription$.unsubscribe(),this.subscription2$&&this.subscription2$.unsubscribe(),this.subscription3$&&this.subscription3$.unsubscribe(),this.subscription4$&&this.subscription4$.unsubscribe()}onSubmit(){this.subscription2$=this.authService.updateUser(this.userId,this.user).subscribe(t=>{this.router.navigate(["/user"]),Object(o.F)(this.platfromId)&&window.scrollTo(0,0)},t=>{})}attachedFile(t){const e=new FormData,n=t.target.files[0];void 0!==(null==n?void 0:n.name)&&-1!==n.type.search(/image/gi)&&(this.avatarProfile=n,e.append("file",this.avatarProfile),e&&(this.subscription3$=this.authService.updateProfilePic(this.userId,e).subscribe(t=>{this.ngOnInit()},t=>{})))}base64Img(t){const e=t.data,n=t.url;return e.length>50?"data:"+t.mimetype+";base64,"+e:-1!==n.search(/https/gi)?n:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png"}cancelButton(){this.router.navigate(["/user"]),Object(o.F)(this.platfromId)&&window.scrollTo(0,0)}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(a.a),r.Qb(s.a),r.Qb(s.g),r.Qb(r.F))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-user-edit"]],decls:5,vars:2,consts:[[2,"margin","1rem 2rem"],["class","container",4,"ngIf","ngIfElse"],["errorTemp",""],[1,"container"],[1,"img-fluid","rounded-circle","img-n-fit",3,"src"],[1,"btn1"],["type","file","id","updateAvatar","name","updateAvatar","required","",1,"custom-file-input",3,"ngModel","ngModelChange","change"],["updateAvatar","ngModel"],["for","updateAvatar",1,"btn","btn-custom","text-white"],[3,"ngSubmit"],[1,"form-a-wrapper"],["for","validationServer01"],["type","text","name","firstname","id","firstname","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","lastname","id","lastname","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","email","name","email","id","email","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","address","id","address","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","text","name","phoneNumber2","id","phoneNumber2","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","mb-4","ml-1"],["href","#",1,"link-style-","ml-1"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-dark","ml-3",3,"click"]],template:function(t,e){if(1&t&&(r.Wb(0,"div",0),r.Rb(1,"hr"),r.Vb(),r.Oc(2,c,44,8,"div",1),r.Oc(3,b,1,0,"ng-template",null,2,r.Pc)),2&t){const t=r.Dc(4);r.Db(2),r.tc("ngIf",e.isUserSuccess)("ngIfElse",t)}},directives:[o.o,i.c,i.v,i.n,i.q,i.z,i.o,i.p],styles:[".container[_ngcontent-%COMP%]{margin:1rem auto 4rem;display:grid;grid-template-columns:1fr;width:500px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], div[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{text-align:center}.btn-custom[_ngcontent-%COMP%]{background:#002447}.btn-custom[_ngcontent-%COMP%]:hover{background:#6047cf}.btn1[_ngcontent-%COMP%]{text-align:center;width:8rem;margin:1.5rem auto}.img-n-fit[_ngcontent-%COMP%]{display:flex;max-width:10rem;margin:0 auto}.form-a-wrapper[_ngcontent-%COMP%]{display:grid;grid-auto-rows:5rem}.link-style-[_ngcontent-%COMP%]{text-decoration:underline;color:#00f}@media (max-width:532px){.container[_ngcontent-%COMP%]{width:90%}}"]}),t})();var d=n("YiLq");function m(t,e){if(1&t){const t=r.Xb();r.Wb(0,"div",5),r.Rb(1,"img",6),r.Wb(2,"span"),r.Wb(3,"strong"),r.Qc(4,"Name:"),r.Vb(),r.Qc(5),r.Vb(),r.Wb(6,"span"),r.Wb(7,"strong"),r.Qc(8,"Email:"),r.Vb(),r.Qc(9),r.Vb(),r.Wb(10,"span"),r.Wb(11,"strong"),r.Qc(12,"Address:"),r.Vb(),r.Qc(13),r.Vb(),r.Wb(14,"span"),r.Wb(15,"strong"),r.Qc(16,"Contact Number:"),r.Vb(),r.Qc(17),r.Vb(),r.Wb(18,"button",7),r.hc("click",function(){return r.Ec(t),r.lc(2).updateUser()}),r.Qc(19,"Update"),r.Vb(),r.Vb()}if(2&t){const t=r.lc(2);r.Db(1),r.tc("src",t.base64Img(t.avatar),r.Gc),r.Db(4),r.Sc(" ",t.user.name,""),r.Db(4),r.Sc(" ",t.user.email,""),r.Db(4),r.Sc(" ",t.user.address,""),r.Db(4),r.Sc(" ",t.user.phoneNumber,"")}}function l(t,e){if(1&t&&(r.Wb(0,"div",2),r.Wb(1,"div",3),r.Wb(2,"h1"),r.Qc(3,"User Profile"),r.Vb(),r.Vb(),r.Oc(4,m,20,5,"div",4),r.Vb()),2&t){const t=r.lc();r.Db(4),r.tc("ngIf",t.user)}}function p(t,e){1&t&&r.Qc(0," Please login.\n")}let h=(()=>{class t{constructor(t,e,n){this.tokenStack=t,this.router=e,this.authService=n,this.user={name:"",email:"",address:"",phoneNumber:""},this.avatar={data:"",mimetype:"",url:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png"}}ngOnInit(){this.currentUser=this.tokenStack.getUser(),this.userId=this.currentUser.id,this.subscription$=this.authService.getUserApi(this.userId).subscribe(t=>{this.userAsset=t[0],this.user.name=this.userAsset.firstname+" "+this.userAsset.lastname,this.user.email=this.userAsset.email,this.user.address=this.userAsset.address,this.user.phoneNumber=this.userAsset.phoneNumber?this.userAsset.phoneNumber:"Not available"},t=>{}),this.subscription2$=this.authService.getAvatarApi(this.userId).subscribe(t=>{const e=t[0];this.avatar.data=e.data,this.avatar.mimetype=e.mimetype,this.avatar.url=e.url},t=>{})}ngOnDestroy(){this.subscription$&&this.subscription$.unsubscribe(),this.subscription2$&&this.subscription2$.unsubscribe()}updateUser(){this.router.navigate(["user/profile",this.currentUser.id])}base64Img(t){const e=t.data,n=t.url;return e.length>50?"data:"+t.mimetype+";base64,"+e:-1!==n.search(/https/gi)?n:"https://ssl.gstatic.com/accounts/ui/avatar_2x.png"}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(d.a),r.Qb(s.g),r.Qb(a.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-user-profile"]],decls:3,vars:2,consts:[["class","container-at-profile",4,"ngIf","ngIfElse"],["loggedOut",""],[1,"container-at-profile"],[1,"bg-a-color"],["class","profile-content mx-auto mt-3",4,"ngIf"],[1,"profile-content","mx-auto","mt-3"],[1,"img-fluid","rounded-circle","img-n-fit",3,"src"],["type","button",1,"btn","btn-1","mb-5","ml-auto",3,"click"]],template:function(t,e){if(1&t&&(r.Oc(0,l,5,1,"div",0),r.Oc(1,p,1,0,"ng-template",null,1,r.Pc)),2&t){const t=r.Dc(2);r.tc("ngIf",e.currentUser)("ngIfElse",t)}},directives:[o.o],styles:[".container-at-profile[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}.bg-a-color[_ngcontent-%COMP%]{height:100px;background:#002447;width:100%;display:flex;justify-content:center}.bg-a-color[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:2rem;color:#fff;margin-top:30px}.profile-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:1rem;min-height:100vh;padding-top:4rem}.img-n-fit[_ngcontent-%COMP%]{max-width:10rem;margin:0 auto}.btn-1[_ngcontent-%COMP%]{width:120px;background:#002447;color:#fff}.btn-1[_ngcontent-%COMP%]:hover{width:120px;background:#fff;color:#002447;box-shadow:0 0 1px .5px #b8b3b3}.profile-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Verdana,Geneva,Tahoma,sans-serif;font-size:.9rem}"]}),t})();var f=n("cTO2"),g=n("m0w4"),v=n("FDOz");function y(t,e){if(1&t&&(r.Wb(0,"div",14),r.Wb(1,"strong"),r.Qc(2),r.Vb(),r.Wb(3,"strong"),r.Qc(4),r.Vb(),r.Vb()),2&t){const t=e.$implicit;r.Db(2),r.Sc("Order Id: ",t.orderId,""),r.Db(2),r.Sc("Verification No.: ",t.id,"")}}function V(t,e){if(1&t&&(r.Wb(0,"div"),r.Wb(1,"strong",15),r.Qc(2),r.Vb(),r.Wb(3,"strong"),r.Qc(4),r.Vb(),r.Vb()),2&t){const t=e.$implicit;r.Db(2),r.Rc(t.name),r.Db(2),r.Sc("\xa0\xa0X\xa0\xa0",t.quantity,"")}}function W(t,e){if(1&t&&(r.Wb(0,"div"),r.Wb(1,"strong"),r.Qc(2),r.mc(3,"currency"),r.Vb(),r.Vb()),2&t){const t=e.$implicit,n=r.lc();r.Db(2),r.Rc(r.oc(3,1,t.price*t.quantity,n.currencyUsed))}}function w(t,e){if(1&t&&(r.Wb(0,"td"),r.Wb(1,"strong"),r.Qc(2),r.mc(3,"currency"),r.Vb(),r.Vb()),2&t){const t=e.$implicit,n=r.lc();r.Db(2),r.Rc(r.oc(3,1,t.value.totalAmount,n.currencyUsed))}}function x(t,e){if(1&t&&(r.Wb(0,"td"),r.Wb(1,"strong"),r.Qc(2),r.mc(3,"currency"),r.Vb(),r.Vb()),2&t){const t=e.$implicit,n=r.lc();r.Db(2),r.Rc(r.oc(3,1,t.value.shippingAmount,n.currencyUsed))}}function k(t,e){if(1&t&&(r.Wb(0,"td"),r.Wb(1,"strong"),r.Qc(2),r.Vb(),r.Vb()),2&t){const t=e.$implicit,n=r.lc();r.Db(2),r.Rc(n.paymentName(t.paymentOption))}}function O(t,e){if(1&t&&(r.Wb(0,"td"),r.Wb(1,"strong"),r.Qc(2),r.mc(3,"currency"),r.Vb(),r.Vb()),2&t){const t=e.$implicit,n=r.lc();r.Db(2),r.Rc(r.oc(3,1,t.value.shippingAmount+t.value.totalAmount,n.currencyUsed))}}function M(t,e){if(1&t&&(r.Wb(0,"div",16),r.Wb(1,"div"),r.Qc(2),r.Vb(),r.Wb(3,"div"),r.Qc(4),r.Vb(),r.Wb(5,"div"),r.Qc(6),r.mc(7,"titlecase"),r.Vb(),r.Wb(8,"div"),r.Qc(9),r.mc(10,"titlecase"),r.Vb(),r.Wb(11,"div"),r.Qc(12),r.mc(13,"titlecase"),r.Vb(),r.Wb(14,"div"),r.Qc(15),r.mc(16,"titlecase"),r.Vb(),r.Vb()),2&t){const t=e.$implicit;r.Db(2),r.Tc("",t.firstname," ",t.lastname,""),r.Db(2),r.Rc(t.email),r.Db(2),r.Rc(r.nc(7,7,t.country)),r.Db(3),r.Rc(r.nc(10,9,t.city)),r.Db(3),r.Rc(r.nc(13,11,t.streetAddress)),r.Db(3),r.Rc(r.nc(16,13,t.orderNotes))}}function _(t,e){if(1&t&&(r.Wb(0,"div",16),r.Wb(1,"div"),r.Qc(2),r.mc(3,"titlecase"),r.mc(4,"titlecase"),r.Vb(),r.Wb(5,"div"),r.Qc(6),r.mc(7,"titlecase"),r.Vb(),r.Wb(8,"div"),r.Qc(9),r.mc(10,"titlecase"),r.Vb(),r.Wb(11,"div"),r.Qc(12),r.mc(13,"titlecase"),r.Vb(),r.Wb(14,"div"),r.Qc(15),r.mc(16,"titlecase"),r.Vb(),r.Vb()),2&t){const t=e.$implicit;r.Db(2),r.Tc("",r.nc(3,6,t.firstname)," ",r.nc(4,8,t.lastname),""),r.Db(4),r.Rc(r.nc(7,10,t.country)),r.Db(3),r.Rc(r.nc(10,12,t.city)),r.Db(3),r.Rc(r.nc(13,14,t.streetAddress)),r.Db(3),r.Rc(r.nc(16,16,t.orderNotes))}}const Q=function(){return["/user/order"]};let C=(()=>{class t{constructor(t,e,n){this.route=t,this.tokenService=e,this.checkOutService=n,this.validItem=!0,this.currencyUsed="USD",this.isUser=!1}ngOnInit(){if(this.tokenService.getUser()){const t=this.route.snapshot.paramMap.get("id");this.queryItemOnApi(t)}else this.isUser=!1}ngOnDestroy(){this.subscription1$&&this.subscription1$.unsubscribe()}queryItemOnApi(t){this.subscription1$=this.checkOutService.getOrderItem(t).subscribe(t=>{0===t.length?this.validItem=!1:(this.orderArray=t,this.orderItems=t[0].orderItems,this.validItem=!0)},t=>{this.validItem=!1})}paymentName(t){return"cod"===t?"Cash On Delivery":"paypal"===t?"Paypal":"None"}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(s.a),r.Qb(d.a),r.Qb(g.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-user-order-view"]],decls:66,vars:11,consts:[[1,"view-wrapper"],[2,"margin","1rem"],["class","order-id",4,"ngFor","ngForOf"],[1,"order-listing"],[3,"routerLink"],[1,"order-view","card"],[1,"table"],[1,"thead-light"],["scope","col",2,"font-size","1.1rem"],[4,"ngFor","ngForOf"],[1,"two-column"],[1,"card"],["scope","col"],["class","billing-address",4,"ngFor","ngForOf"],[1,"order-id"],[2,"color","#c73c3c"],[1,"billing-address"]],template:function(t,e){1&t&&(r.Wb(0,"div",0),r.Rb(1,"hr",1),r.Oc(2,y,5,2,"div",2),r.Wb(3,"div",3),r.Wb(4,"div"),r.Wb(5,"a",4),r.Qc(6,"Order List ->"),r.Vb(),r.Vb(),r.Vb(),r.Wb(7,"div",5),r.Wb(8,"table",6),r.Wb(9,"thead",7),r.Wb(10,"tr"),r.Wb(11,"th",8),r.Qc(12,"Product"),r.Vb(),r.Wb(13,"th",8),r.Qc(14,"Total"),r.Vb(),r.Vb(),r.Vb(),r.Wb(15,"tbody"),r.Wb(16,"tr"),r.Wb(17,"td"),r.Oc(18,V,5,2,"div",9),r.Vb(),r.Wb(19,"td"),r.Oc(20,W,4,4,"div",9),r.Vb(),r.Vb(),r.Wb(21,"tr"),r.Wb(22,"td"),r.Wb(23,"strong"),r.Qc(24,"Subtotal:"),r.Vb(),r.Vb(),r.Oc(25,w,4,4,"td",9),r.Vb(),r.Wb(26,"tr"),r.Wb(27,"td"),r.Wb(28,"strong"),r.Qc(29,"Shipping:"),r.Vb(),r.Vb(),r.Oc(30,x,4,4,"td",9),r.Vb(),r.Wb(31,"tr"),r.Wb(32,"td"),r.Wb(33,"strong"),r.Qc(34,"Payment method:"),r.Vb(),r.Vb(),r.Oc(35,k,3,1,"td",9),r.Vb(),r.Wb(36,"tr"),r.Wb(37,"td"),r.Wb(38,"strong"),r.Qc(39,"Total:"),r.Vb(),r.Vb(),r.Oc(40,O,4,4,"td",9),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(41,"div",10),r.Wb(42,"div",11),r.Wb(43,"table",6),r.Wb(44,"thead",7),r.Wb(45,"tr"),r.Wb(46,"th",12),r.Wb(47,"h2"),r.Qc(48,"Billing address"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(49,"tbody"),r.Wb(50,"tr"),r.Wb(51,"td"),r.Oc(52,M,17,15,"div",13),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(53,"div"),r.Qc(54,"\xa0"),r.Vb(),r.Wb(55,"div",11),r.Wb(56,"table",6),r.Wb(57,"thead",7),r.Wb(58,"tr"),r.Wb(59,"th",12),r.Wb(60,"h2"),r.Qc(61,"Shipping address"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Wb(62,"tbody"),r.Wb(63,"tr"),r.Wb(64,"td"),r.Oc(65,_,17,18,"div",13),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&t&&(r.Db(2),r.tc("ngForOf",e.orderArray),r.Db(3),r.tc("routerLink",r.wc(10,Q)),r.Db(13),r.tc("ngForOf",e.orderItems),r.Db(2),r.tc("ngForOf",e.orderItems),r.Db(5),r.tc("ngForOf",e.orderArray),r.Db(5),r.tc("ngForOf",e.orderArray),r.Db(5),r.tc("ngForOf",e.orderArray),r.Db(5),r.tc("ngForOf",e.orderArray),r.Db(12),r.tc("ngForOf",e.orderArray),r.Db(13),r.tc("ngForOf",e.orderArray))},directives:[o.n,s.i,v.c],pipes:[o.d,o.x],styles:[".view-wrapper[_ngcontent-%COMP%]{min-height:100vh}.order-view[_ngcontent-%COMP%]{margin:3rem 12vw}.order-listing[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-right:12vw;margin-top:-5vh}.order-listing[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#00f;text-decoration:underline}.two-column[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr .1fr 1fr;margin:1rem 12vw}th[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{font-weight:bolder;font-size:1.1rem}.order-id[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1rem 0 0 8vw;font-size:1.2rem}.billing-address[_ngcontent-%COMP%]{font-size:.9rem;display:grid;grid-template-rows:1fr;row-gap:.6rem;font-family:Georgia,Times New Roman,Times,serif}@media (max-width:640px){.order-id[_ngcontent-%COMP%]{font-size:.7rem}.two-column[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (max-width:420px){.order-id[_ngcontent-%COMP%]{padding-top:2.5rem}.order-listing[_ngcontent-%COMP%]{margin-top:-10vh}}@media (max-width:315px){.billing-address[_ngcontent-%COMP%]{font-size:.6rem}.order-view[_ngcontent-%COMP%]{font-size:.7rem}}"]}),t})();var D=n("Cp0R");const P=[{path:"",component:h},{path:"profile/:id",component:u},{path:"order",component:f.a},{path:"order/:id",component:C,canActivate:[D.c]}];let A=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(P)],s.j]}),t})();var I=n("PCNd");let R=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[o.c,i.i,A,I.a]]}),t})()}}]);