(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{KOpb:function(e,t,n){"use strict";n.r(t),n.d(t,"SalesModule",function(){return f});var c=n("/T4Y"),r=n("tyNb"),o=n("ofXK"),a=n("GYJ4"),i=n("fXoL"),s=n("XbNb"),b=n("3Pt+"),l=n("1kSV"),g=n("cvGN"),p=n("Xa2L");function d(e,t){1&e&&(i.Wb(0,"span",18),i.Rb(1,"mat-spinner",19),i.Vb()),2&e&&(i.Db(1),i.tc("diameter",30))}function h(e,t){if(1&e&&(i.Wb(0,"tr"),i.Wb(1,"td"),i.Rb(2,"ngb-highlight",20),i.Vb(),i.Wb(3,"td"),i.Rb(4,"ngb-highlight",20),i.Vb(),i.Wb(5,"td"),i.Rb(6,"ngb-highlight",20),i.mc(7,"number"),i.Vb(),i.Wb(8,"td",21),i.Wb(9,"div",22),i.Wb(10,"button",23),i.Qc(11,"View Details"),i.Vb(),i.Wb(12,"button",24),i.Qc(13,"Delete"),i.Vb(),i.Vb(),i.Vb(),i.Vb()),2&e){const e=t.$implicit,n=i.lc();i.Db(2),i.tc("result",e.id)("term",n.service.searchTerm),i.Db(2),i.tc("result",e.month)("term",n.service.searchTerm),i.Db(2),i.tc("result",i.nc(7,6,e.revenue))("term",n.service.searchTerm)}}const u=[{path:"",component:(()=>{class e{constructor(e){this.service=e,this.sales$=e.sales$,this.total$=e.total$}onSort({column:e,direction:t}){this.headers.forEach(t=>{t.sortable4==e&&(t.direction4="")}),this.service.sortColumn=e,this.service.sortDirection=t}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Qb(s.a))},e.\u0275cmp=i.Kb({type:e,selectors:[["app-sales"]],viewQuery:function(e,t){var n;1&e&&i.Uc(a.d,!0),2&e&&i.Cc(n=i.ic())&&(t.headers=n)},decls:42,vars:18,consts:[[1,"container-a-sales","mx-3"],[1,"table-resize","table-responsive"],[1,"form-group","form-inline"],["placeholder","Search products here...","type","text","name","searchTerm",1,"form-control","ml-2",3,"ngModel","ngModelChange"],["class","ml-3",4,"ngIf"],[1,"table","table-hover"],[1,"thead-dark"],["scope","col","sortable4","id",3,"sort4"],["scope","col","sortable4","month",3,"sort4"],["scope","col","sortable4","revenue",3,"sort4"],["scope","col"],[1,"table-body-1"],[4,"ngFor","ngForOf"],[1,"page-nation"],[3,"collectionSize","page","pageSize","pageChange"],["name","pageSize",1,"custom-select",3,"ngModel","ngModelChange"],[3,"ngValue"],[1,"sales-1","card"],[1,"ml-3"],[3,"diameter"],[1,"my-auto",3,"result","term"],[2,"width","250px"],[1,"btn-action"],[1,"btn","btn-primary"],[1,"btn","btn-warning"]],template:function(e,t){1&e&&(i.Wb(0,"div",0),i.Wb(1,"h1"),i.Qc(2,"Manage Product Sales Page"),i.Vb(),i.Wb(3,"form",1),i.Wb(4,"div",2),i.Qc(5," Search Sales: "),i.Wb(6,"input",3),i.hc("ngModelChange",function(e){return t.service.searchTerm=e}),i.Vb(),i.Oc(7,d,2,1,"span",4),i.mc(8,"async"),i.Vb(),i.Wb(9,"div"),i.Wb(10,"table",5),i.Wb(11,"thead",6),i.Wb(12,"tr"),i.Wb(13,"th",7),i.hc("sort4",function(e){return t.onSort(e)}),i.Qc(14,"Sales #"),i.Vb(),i.Wb(15,"th",8),i.hc("sort4",function(e){return t.onSort(e)}),i.Qc(16,"Month"),i.Vb(),i.Wb(17,"th",9),i.hc("sort4",function(e){return t.onSort(e)}),i.Qc(18,"Revenue"),i.Vb(),i.Wb(19,"th",10),i.Qc(20,"Action"),i.Vb(),i.Vb(),i.Vb(),i.Wb(21,"tbody",11),i.Oc(22,h,14,8,"tr",12),i.mc(23,"async"),i.Vb(),i.Vb(),i.Vb(),i.Wb(24,"div",13),i.Wb(25,"ngb-pagination",14),i.hc("pageChange",function(e){return t.service.page=e}),i.mc(26,"async"),i.Vb(),i.Wb(27,"select",15),i.hc("ngModelChange",function(e){return t.service.pageSize=e}),i.Wb(28,"option",16),i.Qc(29,"5 items per page"),i.Vb(),i.Wb(30,"option",16),i.Qc(31,"10 items per page"),i.Vb(),i.Wb(32,"option",16),i.Qc(33,"15 items per page"),i.Vb(),i.Wb(34,"option",16),i.Qc(35,"20 items per page"),i.Vb(),i.Wb(36,"option",16),i.Qc(37,"25 items per page"),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Wb(38,"div"),i.Rb(39,"hr"),i.Vb(),i.Wb(40,"div",17),i.Rb(41,"app-product-sales-chart"),i.Vb(),i.Vb()),2&e&&(i.Db(6),i.tc("ngModel",t.service.searchTerm),i.Db(1),i.tc("ngIf",i.nc(8,12,t.service.loading$)),i.Db(15),i.tc("ngForOf",i.nc(23,14,t.sales$)),i.Db(3),i.tc("collectionSize",i.nc(26,16,t.total$))("page",t.service.page)("pageSize",t.service.pageSize),i.Db(2),i.tc("ngModel",t.service.pageSize),i.Db(1),i.tc("ngValue",5),i.Db(2),i.tc("ngValue",10),i.Db(2),i.tc("ngValue",15),i.Db(2),i.tc("ngValue",20),i.Db(2),i.tc("ngValue",25))},directives:[b.z,b.o,b.p,b.c,b.n,b.q,o.o,o.n,l.u,b.w,b.r,b.y,g.a,p.b,l.k],pipes:[o.b,o.g],styles:[".container-a-sales[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr}th[sortable4][_ngcontent-%COMP%]{cursor:pointer;user-select:none;-webkit-user-select:none}.btn-action[_ngcontent-%COMP%]{display:grid;margin:0 1rem;gap:1rem}.sales-1[_ngcontent-%COMP%]{width:60%;height:100%;margin:1rem auto}.page-nation[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr .2fr}.page-nation[_ngcontent-%COMP%] > ngb-pagination[_ngcontent-%COMP%]{display:flex;justify-content:center}select.custom-select[_ngcontent-%COMP%]{width:auto}@media (max-width:730px){.sales-1[_ngcontent-%COMP%]{width:80%}}@media (max-width:530px){.sales-1[_ngcontent-%COMP%]{width:90%}}@media (max-width:420px){.sales-1[_ngcontent-%COMP%]{width:98%}}"]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=i.Ob({type:e}),e.\u0275inj=i.Nb({factory:function(t){return new(t||e)},imports:[[o.c,r.j.forChild(u)],r.j]}),e})();var V=n("PCNd");let f=(()=>{class e{}return e.\u0275mod=i.Ob({type:e}),e.\u0275inj=i.Nb({factory:function(t){return new(t||e)},providers:[],imports:[[o.c,m,c.a,V.a]]}),e})()}}]);