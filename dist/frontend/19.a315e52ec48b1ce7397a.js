(window.webpackJsonp=window.webpackJsonp||[]).push([[19,22,23],{PCNd:function(t,e,i){"use strict";i.d(e,"a",function(){return l});var o=i("HkTB"),a=i("1kSV"),n=i("ofXK"),r=i("bTqV"),s=i("NFeN"),u=i("3Pt+"),m=i("E1D/"),c=i("xJkR"),d=i("fXoL");let l=(()=>{class t{}return t.\u0275mod=d.Ob({type:t}),t.\u0275inj=d.Nb({factory:function(e){return new(e||t)},imports:[[n.c,o.a,a.v,r.b,s.b,u.i,c.b,u.u,a.x,m.b],o.a,u.i,u.u,c.b]}),t})()},bTqV:function(t,e,i){"use strict";i.d(e,"a",function(){return l}),i.d(e,"b",function(){return b});var o=i("FKr1"),a=i("R1ws"),n=i("fXoL"),r=i("u47x");const s=["mat-button",""],u=["*"],m=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"];class c{constructor(t){this._elementRef=t}}const d=Object(o.h)(Object(o.j)(Object(o.i)(c)));let l=(()=>{class t extends d{constructor(t,e,i){super(t),this._focusMonitor=e,this._animationMode=i,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const o of m)this._hasHostAttributes(o)&&this._getHostElement().classList.add(o);t.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t="program",e){this._focusMonitor.focusVia(this._getHostElement(),t,e)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...t){return t.some(t=>this._getHostElement().hasAttribute(t))}}return t.\u0275fac=function(e){return new(e||t)(n.Qb(n.m),n.Qb(r.d),n.Qb(a.a,8))},t.\u0275cmp=n.Kb({type:t,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,e){var i;1&t&&n.Uc(o.f,!0),2&t&&n.Cc(i=n.ic())&&(e.ripple=i.first)},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(t,e){2&t&&(n.Eb("disabled",e.disabled||null),n.Ib("_mat-animation-noopable","NoopAnimations"===e._animationMode)("mat-button-disabled",e.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[n.Ab],attrs:s,ngContentSelectors:u,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,e){1&t&&(n.sc(),n.Wb(0,"span",0),n.rc(1),n.Vb(),n.Rb(2,"div",1),n.Rb(3,"div",2)),2&t&&(n.Db(2),n.Ib("mat-button-ripple-round",e.isRoundButton||e.isIconButton),n.tc("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},directives:[o.f],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),t})(),b=(()=>{class t{}return t.\u0275mod=n.Ob({type:t}),t.\u0275inj=n.Nb({factory:function(e){return new(e||t)},imports:[[o.g,o.a],o.a]}),t})()},jTYC:function(t,e,i){"use strict";i.r(e),i.d(e,"TermsConditionModule",function(){return h});var o=i("ofXK"),a=i("tyNb"),n=i("fXoL"),r=i("C790"),s=i("FDOz");function u(t,e){if(1&t&&(n.Wb(0,"p"),n.Qc(1),n.Vb()),2&t){const t=e.index;n.Db(1),n.Sc("",t+1,". Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita rerum qui odio dolorem ea. Modi dolorem odit, quam accusantium magni voluptatum nemo itaque omnis rem laborum provident maiores, doloribus quia. Placeat est beatae quisquam incidunt soluta, quis tenetur molestiae quia.")}}function m(t,e){if(1&t&&(n.Wb(0,"p"),n.Qc(1),n.Vb()),2&t){const t=e.index;n.Db(1),n.Sc("",t+1,". Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita rerum qui odio dolorem ea. Modi dolorem odit, quam accusantium magni voluptatum nemo itaque omnis rem laborum provident maiores, doloribus quia. Placeat est beatae quisquam incidunt soluta, quis tenetur molestiae quia.")}}const c=function(){return["/"]},d=function(){return[1,2,3,4,5]},l=function(){return[1,2,3,4,5,6,7,8]},b=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Kb({type:t,selectors:[["app-terms-condition"]],decls:27,vars:7,consts:[[3,"headerTitle"],[1,"terms-content"],[1,"terms-header"],[3,"routerLink"],[1,"mx-3","hr-space"],[1,"body-content"],[1,"basic-terms"],[1,"basic-terms-title"],[4,"ngFor","ngForOf"],[1,"conditions"],[1,"conditions-title"],[1,"my-4"]],template:function(t,e){1&t&&(n.Rb(0,"app-content-header",0),n.Wb(1,"div",1),n.Wb(2,"div",2),n.Wb(3,"strong"),n.Qc(4,"These Terms and Conditions are effective on December 20, 2020"),n.Vb(),n.Qc(5,". To access our previous Terms and Conditions. \xa0 "),n.Wb(6,"a",3),n.Qc(7,"click here!"),n.Vb(),n.Vb(),n.Wb(8,"div",4),n.Rb(9,"hr"),n.Vb(),n.Wb(10,"div",5),n.Wb(11,"p"),n.Qc(12,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusantium voluptate maiores labore laboriosam itaque nostrum architecto qui? Voluptatibus eos non, explicabo quam enim fugiat nihil possimus cupiditate dolor consectetur inventore harum sed amet voluptates, suscipit neque ea rem minima eligendi? Eos aut modi aliquid illum? Ad ea nam est odit aperiam eligendi architecto accusantium? Nam vel recusandae doloremque sed eum similique tenetur architecto delectus sunt officiis, ad, omnis aliquam modi perferendis doloribus consequuntur aut possimus est sequi porro tempora assumenda, molestias dolorum quisquam! Nesciunt consequatur corporis ullam. Quidem, voluptas atque tempora itaque ducimus temporibus ab sapiente expedita, eum corporis ullam officiis alias ipsa esse? In ad eos numquam perspiciatis modi molestiae labore eveniet ea maxime nam laborum nobis beatae qui quibusdam praesentium dolores nisi voluptatum facilis dolore quod, aperiam asperiores nulla illum? Laborum, et. Eos voluptatem consectetur et provident nobis. Voluptates cum accusantium sunt molestiae quod commodi asperiores deserunt mollitia. Mollitia molestiae consectetur autem numquam, quae itaque tempora cupiditate quisquam veniam harum accusantium eveniet vel cumque libero modi, corrupti aut, obcaecati porro qui possimus odit ratione! Non vero magni reprehenderit voluptates quod, libero necessitatibus praesentium in repellendus odit ipsa a ex laudantium. Totam qui quasi explicabo numquam eaque non. Ea quam sapiente optio exercitationem reprehenderit. Recusandae provident amet tenetur. Quo, quae quam omnis tenetur ratione dolore veniam a possimus aliquam veritatis repudiandae quidem exercitationem voluptatum soluta iure debitis suscipit aliquid incidunt commodi. Excepturi officiis id ipsum quisquam assumenda ratione quis? Modi consequuntur ipsum, eveniet repudiandae rem harum reiciendis sed nam quas ipsa! Omnis distinctio eligendi sequi aliquam soluta quidem natus doloribus laboriosam. In eveniet beatae ex asperiores. Optio nesciunt ratione esse quod, et mollitia excepturi suscipit. Magnam dignissimos numquam ratione autem eum voluptatum laudantium provident ipsum, minus libero, excepturi quam aperiam minima quisquam odio repellendus voluptatibus maxime cum beatae."),n.Vb(),n.Wb(13,"p"),n.Qc(14,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur suscipit aliquid labore, mollitia officia modi possimus maxime nisi sapiente tenetur culpa dolores quam eaque, quae eos animi, fuga veniam doloribus. Rem porro quidem tempore numquam vero quas veniam impedit. Blanditiis rerum possimus tempore doloremque qui officiis illum totam quisquam quibusdam nesciunt tenetur odit, ducimus voluptatem tempora, aspernatur commodi necessitatibus repellendus nemo ab atque soluta. Eius, quidem, repellat aliquam cupiditate laudantium qui ducimus molestiae nostrum tenetur nam incidunt tempora sapiente est. Dolores magni ipsam ad dolor rem quo fugiat sunt reprehenderit temporibus nostrum unde cupiditate, adipisci natus voluptates nulla eaque aut quisquam deleniti velit, deserunt suscipit amet. Eum asperiores facilis quia quam saepe assumenda consequuntur, similique cumque error. Dolore illum sapiente tempore minima, distinctio iure asperiores adipisci non vero provident omnis magni laboriosam voluptas, blanditiis, cumque enim possimus obcaecati nisi reprehenderit odit eaque iusto maxime unde excepturi. Minus maiores, officia autem, adipisci, dolor rerum corrupti ullam neque quo iusto sit possimus voluptas. Modi dolore reprehenderit esse voluptatum pariatur eius enim cumque neque laboriosam? Iure ea quo aliquam, dicta beatae pariatur maxime laborum libero, perspiciatis, eaque aut minima obcaecati est quibusdam deserunt quasi reiciendis repellat maiores eligendi aperiam ratione suscipit omnis facere ipsum. Cupiditate, commodi! Mollitia dolore deserunt quo, accusamus nesciunt distinctio iste minus doloremque et laborum ea enim voluptate. Eum cupiditate quia architecto voluptate eos maiores pariatur expedita est. Commodi, ipsa?"),n.Vb(),n.Wb(15,"p"),n.Qc(16,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus dicta dolores, quis modi dolore sint iure deserunt, quidem exercitationem harum eaque? Nihil laboriosam libero natus ipsa nostrum magnam blanditiis non possimus placeat. Dignissimos officia unde distinctio, quasi aperiam ipsam nihil tempora molestias consectetur voluptatum deserunt, blanditiis deleniti esse dolor magni maxime repellendus debitis. Maxime ullam temporibus obcaecati, dolore esse consequuntur!"),n.Vb(),n.Vb(),n.Wb(17,"div",6),n.Wb(18,"strong",7),n.Qc(19,"Basic Terms"),n.Vb(),n.Oc(20,u,2,1,"p",8),n.Vb(),n.Wb(21,"div",9),n.Wb(22,"strong",10),n.Qc(23,"Conditions"),n.Vb(),n.Oc(24,m,2,1,"p",8),n.Vb(),n.Wb(25,"div",11),n.Rb(26,"br"),n.Vb(),n.Vb()),2&t&&(n.tc("headerTitle","Terms & Conditions"),n.Db(6),n.tc("routerLink",n.wc(4,c)),n.Db(14),n.tc("ngForOf",n.wc(5,d)),n.Db(4),n.tc("ngForOf",n.wc(6,l)))},directives:[r.a,a.i,s.c,o.n],styles:[".terms-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.terms-header[_ngcontent-%COMP%]{display:flex;padding:1rem 0 0 1rem}.terms-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#00f}.terms-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.hr-space[_ngcontent-%COMP%] > hr[_ngcontent-%COMP%]{height:.5rem}.body-content[_ngcontent-%COMP%]{padding:0 1rem}.basic-terms[_ngcontent-%COMP%]{padding:1rem 1rem 0}.basic-terms-title[_ngcontent-%COMP%]{font-size:1.4rem;color:#0826ac;padding-bottom:1rem}.conditions[_ngcontent-%COMP%]{padding:1rem 1rem 0}.conditions-title[_ngcontent-%COMP%]{font-size:1.4rem;color:#0826ac;padding-bottom:1rem}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=n.Ob({type:t}),t.\u0275inj=n.Nb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(b)],a.j]}),t})();var f=i("PCNd");let h=(()=>{class t{}return t.\u0275mod=n.Ob({type:t}),t.\u0275inj=n.Nb({factory:function(e){return new(e||t)},imports:[[o.c,p,f.a]]}),t})()}}]);