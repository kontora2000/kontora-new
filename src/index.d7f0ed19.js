import{f as u,o as s,c as l,g as c,a as t,h as A,d as w,t as p,r as m,n as h,_ as y,F as k,i as v,j as b,w as a,b as n,k as B,l as F,m as I}from"./entry.1a284961.js";import{_ as V,i as T}from"./isInView.570d956c.js";const H={key:0,width:"37",height:"37",viewBox:"0 0 37 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},L=t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.1197 19.4336V19.4336C15.9318 19.1261 14.4078 17.1036 14.7153 14.9158V14.9158C15.0228 12.728 17.0452 11.204 19.233 11.5114V11.5114C21.4209 11.8189 22.9449 13.8414 22.6374 16.0292V16.0292C22.3299 18.217 20.3075 19.7411 18.1197 19.4336Z",stroke:"white","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),W=t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.6353 29.9964C16.6353 29.9964 8.45975 21.1054 9.43396 14.1735C10.1514 9.06902 14.8709 5.51257 19.9754 6.22996C25.0799 6.94735 28.6364 11.6669 27.919 16.7714C26.9448 23.7033 16.6353 29.9964 16.6353 29.9964Z",stroke:"white","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),D=[L,W],M={key:1,width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},P=A('<path d="M16.6777 4.60693C23.3164 4.37511 28.8574 9.54221 29.0892 16.1808C29.321 22.8194 24.1539 28.3605 17.5153 28.5923" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5153 28.5923C10.8767 28.8241 5.33568 23.657 5.10385 17.0184C4.87203 10.3798 10.0391 4.83876 16.6777 4.60693" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2857 6.10466C10.6592 12.6686 10.9492 20.9715 15.0247 27.2664C16.2177 29.1099 18.8468 29.0181 19.9084 27.0959C23.5348 20.532 23.2449 12.2291 19.1694 5.93412C17.975 4.09068 15.3473 4.18244 14.2857 6.10466Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.25684 11.4521C12.8458 13.2379 21.1021 12.9496 27.5492 10.7086" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.9364 21.7471C21.3474 19.9613 13.0911 20.2496 6.64404 22.4907" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>',5),O=[P],R=u({__name:"AppIcon",props:{name:{}},setup(r){return(e,o)=>e.name==="location"?(s(),l("svg",H,D)):e.name==="worldwide"?(s(),l("svg",M,O)):c("",!0)}}),Z={key:1,class:"lg:text-md"},z={key:1,class:"lg:text-md"},E=u({__name:"AppChip",props:{chip:{},iconTop:{type:Boolean},iconBottom:{type:Boolean}},setup(r){return(e,o)=>{var i,f;return s(),l("div",null,[t("div",{class:h(e.chip.classes.top)},[w(p(e.chip.title.top)+" ",1),e.iconTop?m(e.$slots,"iconTop",{key:0,class:"mr-1 h-8 max-h-[32px] w-8 max-w-[32px]"},void 0,!0):c("",!0),m(e.$slots,"title",{},void 0,!0),e.chip.accent.top?(s(),l("strong",Z,p((i=e.chip.accent)==null?void 0:i.top),1)):c("",!0)],2),e.chip.double?(s(),l("div",{key:0,class:h(e.chip.classes.bottom)},[e.iconBottom?m(e.$slots,"iconBottom",{key:0,class:"mr-1 max-h-[32px] max-w-[32px]"},void 0,!0):c("",!0),w(" "+p(e.chip.title.bottom)+" ",1),e.chip.accent.bottom?(s(),l("strong",z,p((f=e.chip.accent)==null?void 0:f.bottom),1)):c("",!0)],2)):c("",!0)])}}});const $=y(E,[["__scopeId","data-v-26b48073"]]),G={class:"mr-1 flex max-h-[24px] min-w-[118px] max-w-[118px] shrink-0 items-center xs:mt-1 lg:mr-1 lg:min-w-[110px] lg:max-w-[118px]"},K=t("div",{class:"chip-animated-new ml-2 flex rotate-[-8deg] flex-col items-center justify-center rounded-[6px] bg-ui-green p-1 text-xs font-bold uppercase tracking-[-0.36px] text-ui-black lg:ml-3 lg:max-h-[40px] lg:min-w-[62px] lg:rounded-[12px] lg:p-2 lg:text-sm"}," new ",-1),C=u({__name:"AppList",props:{list:{},withHeader:{type:Boolean,default:!1},withFooter:{type:Boolean,default:!1},classes:{}},setup(r){return(e,o)=>(s(),l("div",{class:h(e.classes.variant)},[t("div",G,[e.withHeader?m(e.$slots,"header",{key:0}):c("",!0),w(),m(e.$slots,"divider")]),t("ul",null,[(s(!0),l(k,null,v(e.list,i=>(s(),l("li",{key:i.id,class:h([e.classes.itemClass,"flex items-center"])},[m(e.$slots,"default",{},()=>[t("strong",null,p(i.title),1)]),i.isNew?m(e.$slots,"new",{key:0},()=>[K]):c("",!0)],2))),128)),e.withFooter?m(e.$slots,"footer",{key:0}):c("",!0)])],2))}}),J=t("div",{class:"animate__animated animate__fadeIn list-header ml-1 flex-1 border-t border-t-ui-white"},null,-1),Y=t("li",{class:"list-item-animated text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:text-2xl xl:text-3xl"}," + We can provide expert ",-1),q=t("li",{class:"list-footer-item list-item-animated text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:pb-1 lg:text-2xl xl:text-3xl"}," review and help you ",-1),Q=t("li",{class:"list-footer-item list-item-animated text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:pb-1 lg:text-2xl xl:text-3xl"}," acceptance of projects ",-1),U="We make",X=u({__name:"HeroScopeList",setup(r){const e=String.fromCharCode(160),o=[{id:1,title:"Apps",isNew:!1},{id:2,title:`Websites &${e}WebApps`,isNew:!1},{id:3,title:"Landing Pages",isNew:!1}],i={variant:"flex lg:mt-20 ",itemClass:"hero-list [&:nth-child(3)]:pb-1 lg:[&:nth-child(3)]:pb-[6px] list-item-animated  text-ui-white overflow-hidden text-md xs:text-xl tracking-[-0.96px] lg:tracking-[-1.8px] lg:text-2xl xl:text-3xl xl:whitespace-nowrap selection:text-ui-black  selection:bg-ui-purple "};return(f,g)=>{const x=C;return s(),b(x,{"with-footer":"","with-header":"",list:o,classes:i,class:"max-w-[90%] overflow-hidden"},{header:a(()=>[t("h1",{class:"animate__animated animate__fadeIn list-header whitespace-nowrap text-sm text-ui-white"},p(U))]),divider:a(()=>[J]),footer:a(()=>[Y,q,Q]),_:1})}}}),ee=u({__name:"AppFeature",props:{feature:{}},setup(r){return(e,o)=>(s(),l("div",{class:h(e.feature.classes.feature)},[e.feature.header?(s(),l("h1",{key:0,class:h(e.feature.classes.header)},p(e.feature.header),3)):c("",!0),t("div",{class:h(e.feature.classes.caption)},p(e.feature.caption),3)],2))}}),N=String.fromCharCode(160),te=String.fromCharCode(8209),se={class:"section-animated mt-[50px] flex flex-wrap opacity-0 mb:justify-normal mb:gap-8 lg:mt-0 xl:justify-between"},le={class:"mt-10 flex max-w-[90%] flex-wrap gap-1 sm:max-w-[400px] lg:mt-0 lg:max-h-[132px] lg:max-w-[291px]"},oe=u({__name:"HeroFeatures",setup(r){const e=[{header:"8+",caption:`Years of${N}experience`,classes:{header:"text-ui-white text-4xl italic lg:text-4xl xl:text-5xl ",caption:"feature-caption text-ui-white  text-base xs:text-md max-w-[153px] mr-[31px] lg:text-2xl  lg:max-w-[305px] font-bold tracking-[-1.44px] mt-3"}},{header:"6",caption:`Players 
in  team`,classes:{header:"text-ui-white text-4xl  italic lg:text-4xl xl:text-5xl",caption:"feature-caption whitespace-pre text-ui-white text-base xs:text-md   max-w-[165px] font-bold tracking-[-1.44px] mt-3 lg:text-2xl"}}],o={header:null,caption:"Our stack",classes:{header:"",caption:"feature-caption  text-ui-white text-base xs:text-md lg:text-2xl max-w-[305px] font-bold tracking-[-1.44px]"}},i=[{id:1,double:!1,title:{top:"Vue"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:2,double:!1,title:{top:"Nuxt"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:3,double:!1,title:{top:"Astro.js"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:4,double:!1,title:{top:"React"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:5,double:!1,title:{top:"Svelte"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:6,double:!1,title:{top:"nodeJS"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:7,double:!1,title:{top:"TypeScript"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:8,double:!1,title:{top:"PHP"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:9,double:!1,title:{top:"WebGL"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:10,double:!1,title:{top:"three.js"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:11,double:!1,title:{top:"3D"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}}];return(f,g)=>{const x=ee,_=$;return s(),l("div",se,[(s(),l(k,null,v(e,d=>n(x,{key:d.caption,feature:d},null,8,["feature"])),64)),t("div",le,[(s(),l(k,null,v(i,d=>n(_,{key:d.id,class:"flex items-center justify-center rounded-[12px] border-2 border-ui-white border-opacity-[32%] px-[10px] py-2 tracking-[-0.34px] text-ui-white lg:max-h-[40px] lg:px-[10px] lg:py-2 lg:text-sm",chip:d},null,8,["chip"])),64)),n(x,{class:"mt-3 min-w-[250px] sm:min-w-[300px] lg:mt-4",feature:o})])])}}}),ie={};function ne(r,e){const o=V;return s(),l("section",null,[n(o,{variant:"section",class:"selection:bg-ui-purple selection:text-ui-black"},{default:a(()=>[m(r.$slots,"default")]),_:3})])}const S=y(ie,[["render",ne]]),ae={class:"lg:flex lg:pb-[180px]"},pe={class:"mr-10 flex lg:order-2 lg:ml-[-120px] lg:mr-0 lg:mt-0 lg:max-w-[50px] lg:self-start xl:ml-8"},re={class:"baselg:order-2 lf:left-[-10px] mb-9 ml-[100px] mt-8 flex max-w-[277px] flex-1 flex-col self-end xs:relative xs:left-[50px] xs:top-0 xs:ml-5 mb:left-0 mb:ml-auto lg:left-[-122px] lg:top-[-1px] lg:mt-[50px] lg:max-w-none lg:shrink-0 xl:left-[-207px] base:left-[-180px]"},ce=t("span",{class:"feature-caption font-bold tracking-[-0.34px] xs:text-[14px] sm:text-mdx lg:text-md"},"developers",-1),xe=u({__name:"HeroSection",setup(r){const e={id:1,double:!0,title:{top:"",bottom:`Based in${N}Tbilisi, Georgia`},classes:{top:"px-1  bg-ui-purple flex xs:text-xxs py-3 xs:px-[18px] inline-block sm:text-base  items-center justify-center rounded-[11px] lg:text-sm text-xxs text-ui-white min-w-[190px] xs:min-w-[205px] min-h-[38px] xs:min-w-[262px] sm:min-w-[344px] sm:text-sm xl:text-lg lg:px-[18px] lg:max-h-[60px] lg:min-h-[60px] lg:min-w-356px]  xl:min-w-[430px] lg:text-sm lg:py-3 lg:px-[18px] lg:rounded-[18px] xl:text-lg",bottom:"px-2 pb-2 before:content-[url(/radius.svg)] xs:text-xxs before:left-[-12px] before:top-[-3px]  after:content-[url(/radius.svg)] xs:text-xxs sm:text-sm sm:min-w-[269px] sm:before:top-[-5px] sm:after:top-[-6px] sm:after:right-[-12.2px]  lg:text-sm  after:right-[-15.2px] xs:after:right-[-15.2px]  after:rotate-[270deg] after:top-[-5.5px] before:absolute after:absolute  -mt-[1px]  bg-ui-purple flex lg:min-w-[270px] xl:min-w-[370px] items-center justify-center rounded-b-[11px] text-xxs text-ui-white min-w-[150px] xs:min-w-[173px] min-h-[30px] xs:min-w-[213px] relative lg:text-sm xl:text-lg lg:pl-[14px] lg:pr-[18px] lg:before:content-[url(/radius-big.svg)] lg:before:w-[19px] lg:before:h-[21px] lg:before:top-[-1.55px] lg:before:left-[-17.5px] lg:before:rotate-[-7deg] lg:after:rotate-[-7deg] lg:rounded-b-[18px] lg:min-h-[48px]  lg:after:content-[url(/radius-big-right.svg)]  lg:after:top-[-3.56px] lg:after:right-[-19.34px] lg:text-base  lg:min-w-none xl:tex-lg"},accent:{top:null}},o={id:2,double:!1,title:{top:"Working"},classes:{top:"lg:px-6 lg:py-4 px-3 py-2 xs:py-3 xs:px-4 lg:text-sm xl:text-lg sm:text-sm xs:text-xxs whitespace-nowrap bg-ui-green text-ui-black rounded-[150px] text-xxs xs:text-sm xs:px-4 xs:py-3  max-w-fit lg:text-sm xl:text-lg lg:mt-[3px]"},accent:{top:"WORLDWIDE"}};return(i,f)=>{const g=R,x=$,_=X,d=oe,j=S;return s(),b(j,{class:"pb-20"},{default:a(()=>[t("div",ae,[t("div",pe,[t("div",re,[n(x,{class:"chip-animated-top animate__animated animate__fadeIn flex rotate-[8deg] flex-col items-center justify-center self-end",chip:e,"icon-bottom":""},{title:a(()=>[w(" Team of "),ce,w(" and designers. ")]),iconBottom:a(()=>[n(g,{name:"location",class:"mb-1 inline max-h-[20px] max-w-[20px] lg:max-h-[32px] lg:max-w-[32px]"})]),_:1}),n(x,{"icon-top":"",class:"chip-animated-bottom animate__animated animate__fadeIn relative rotate-[-2deg] self-center lg:self-end",chip:o},{iconTop:a(()=>[n(g,{name:"worldwide",class:"mb-1 inline max-h-[20px] max-w-[20px] lg:max-h-[32px] lg:max-w-[32px]"})]),_:1})])]),n(_)]),n(d)]),_:1})}}}),de=t("div",{class:"cases-list-header ml-1 flex-1 border-t border-t-ui-white"},null,-1),me={class:"cases-list-item list-footer-item relative z-10 text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:max-w-[686px] lg:text-3xl"},ue={class:"cases-list-item list-footer-item relative z-10 text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:max-w-[686px] lg:text-3xl"},he="Worked with",fe=u({__name:"CaseSection",setup(r){const e={firstline:"and other lesser-known",secondline:"companies & startups"},o=[{id:1,title:"Renaissance Insurance",isNew:!1},{id:2,title:"RBC.ru",isNew:!1},{id:3,title:"FinFort",isNew:!0},{id:4,title:`IP${te}Note.pro`,isNew:!0},{id:5,title:"Zvonok.com",isNew:!1},{id:6,title:"OTEKO",isNew:!1},{id:7,title:"Delofon.ru",isNew:!1},{id:8,title:"AKBshka.ru (car battery delivery)",isNew:!1}],i={variant:"flex lg:mt-10 ",itemClass:"cases-list-item overflow-hidden relative text-ui-white text-md  xs:text-xl tracking-[-0.96px] lg:tracking-[-1.8px] selection:text-ui-black selection:bg-ui-purple lg:text-2xl xl:text-3xl  lg:last:whitespace-nowrap "};return(f,g)=>{const x=C,_=S,d=B("observe-visibility");return s(),b(_,{class:"lg:pt-32"},{default:a(()=>[F((s(),b(x,{"with-footer":"","with-header":"",list:o,classes:i,class:"max-w-[90%] overflow-hidden"},{header:a(()=>[t("h1",{class:"cases-list-header _whitespace-nowrap text-sm text-ui-white"},p(he))]),divider:a(()=>[de]),footer:a(()=>[t("li",me,p(e.firstline),1),t("li",ue,p(e.secondline),1)]),_:1})),[[d,I(T)]])]),_:1})}}}),ge={};function _e(r,e){const o=xe,i=fe;return s(),l("div",null,[n(o),n(i)])}const ke=y(ge,[["render",_e]]);export{ke as default};
