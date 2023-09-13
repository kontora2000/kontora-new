import{f,o as s,c as i,a as t,d as _,t as a,r as c,g as x,n as d,_ as C,F as k,h as v,i as y,w as n,b as r}from"./entry.fc810df7.js";import{_ as N}from"./AppContainer.vue.2d82ce3f.js";const S={key:1,class:"lg:text-md"},A={key:1,class:"lg:text-md"},F=f({__name:"AppChip",props:{chip:{},iconTop:{type:Boolean},iconBottom:{type:Boolean}},setup(p){return(e,l)=>{var o,u;return s(),i("div",null,[t("div",{class:d(e.chip.classes.top)},[_(a(e.chip.title.top)+" ",1),e.iconTop?c(e.$slots,"iconTop",{key:0,class:"mr-1 h-8 max-h-[32px] w-8 max-w-[32px]"},void 0,!0):x("",!0),c(e.$slots,"title",{},void 0,!0),e.chip.accent.top?(s(),i("strong",S,a((o=e.chip.accent)==null?void 0:o.top),1)):x("",!0)],2),e.chip.double?(s(),i("div",{key:0,class:d(e.chip.classes.bottom)},[e.iconBottom?c(e.$slots,"iconBottom",{key:0,class:"mr-1 max-h-[32px] max-w-[32px]"},void 0,!0):x("",!0),_(" "+a(e.chip.title.bottom)+" ",1),e.chip.accent.bottom?(s(),i("strong",A,a((u=e.chip.accent)==null?void 0:u.bottom),1)):x("",!0)],2)):x("",!0)])}}});const $=C(F,[["__scopeId","data-v-26b48073"]]),T={class:"mr-1 flex max-h-[24px] min-w-[118px] max-w-[118px] shrink-0 items-center xs:mt-1 lg:mr-1 lg:min-w-[110px] lg:max-w-[118px]"},H=t("div",{class:"ml-1 flex rotate-[-8deg] flex-col items-center justify-center rounded-[6px] bg-ui-green p-1 text-xs font-bold uppercase tracking-[-0.36px] text-ui-black lg:ml-3 lg:max-h-[40px] lg:min-w-[62px] lg:rounded-[12px] lg:p-2 lg:text-sm"}," new ",-1),j=f({__name:"AppList",props:{list:{},withHeader:{type:Boolean,default:!1},withFooter:{type:Boolean,default:!1},classes:{}},setup(p){return(e,l)=>(s(),i("div",{class:d(e.classes.variant)},[t("div",T,[e.withHeader?c(e.$slots,"header",{key:0}):x("",!0),_(),c(e.$slots,"divider")]),t("ul",null,[(s(!0),i(k,null,v(e.list,o=>(s(),i("li",{key:o.id,class:d([e.classes.itemClass,"flex items-center"])},[c(e.$slots,"default",{},()=>[t("strong",null,a(o.title),1)]),o.isNew?c(e.$slots,"new",{key:0},()=>[H]):x("",!0)],2))),128)),e.withFooter?c(e.$slots,"footer",{key:0}):x("",!0)])],2))}}),L=t("div",{class:"ml-1 flex-1 border-t border-t-ui-white"},null,-1),V="We make",W="+ We can provide expert review and help you acceptance of projects",M=f({__name:"HeroScopeList",setup(p){const e=String.fromCharCode(160),l=[{id:1,title:"Apps",isNew:!1},{id:2,title:`Websites &${e}WebApps`,isNew:!1},{id:3,title:"Landing Pages",isNew:!1}],o={variant:"flex lg:mt-20 ",itemClass:"text-ui-white text-md xs:text-xl tracking-[-0.96px] lg:tracking-[-1.8px] lg:text-3xl xl:whitespace-nowrap selection:text-ui-black  selection:bg-ui-purple "};return(u,m)=>{const h=j;return s(),y(h,{"with-footer":"","with-header":"",list:l,classes:o},{header:n(()=>[t("h1",{class:"whitespace-nowrap text-sm text-ui-white"},a(V))]),divider:n(()=>[L]),footer:n(()=>[t("li",{class:"text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:max-w-[686px] lg:text-3xl"},a(W))]),_:1})}}}),D=f({__name:"AppFeature",props:{feature:{}},setup(p){return(e,l)=>(s(),i("div",{class:d(e.feature.classes.feature)},[e.feature.header?(s(),i("h1",{key:0,class:d(e.feature.classes.header)},a(e.feature.header),3)):x("",!0),t("div",{class:d(e.feature.classes.caption)},a(e.feature.caption),3)],2))}}),P={class:"mt-[50px] flex flex-wrap justify-between mb:justify-normal mb:gap-8 lg:mt-0 xl:justify-between"},R={class:"mt-10 flex max-w-full flex-wrap gap-1 sm:max-w-[400px] lg:mt-0 lg:max-h-[132px] lg:max-w-[291px]"},I=f({__name:"HeroFeatures",setup(p){const l=[{header:"8+",caption:`Years of${String.fromCharCode(160)}experience`,classes:{header:"text-ui-white text-4xl italic lg:text-4xl xl:text-5xl",caption:"feature-caption text-ui-white text-base xs:text-md max-w-[153px] lg:text-2xl  lg:max-w-[305px] font-bold tracking-[-1.44px] mt-3"}},{header:"6",caption:"Players in team",classes:{header:"text-ui-white text-4xl  italic lg:text-4xl xl:text-5xl",caption:"feature-caption text-ui-white text-base xs:text-md   max-w-[165px] font-bold tracking-[-1.44px] mt-3 lg:text-2xl"}}],o={header:null,caption:"Our stack",classes:{header:"",caption:"feature-caption text-ui-white text-2xl max-w-[305px] font-bold tracking-[-1.44px]"}},u=[{id:1,double:!1,title:{top:"Vue"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:2,double:!1,title:{top:"Nuxt"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:3,double:!1,title:{top:"Astro.js"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:4,double:!1,title:{top:"React"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:5,double:!1,title:{top:"Svelte"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:6,double:!1,title:{top:"nodeJS"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:7,double:!1,title:{top:"TypeScript"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:8,double:!1,title:{top:"PHP"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:9,double:!1,title:{top:"WebGL"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:10,double:!1,title:{top:"three.js"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}},{id:11,double:!1,title:{top:"3D"},classes:{top:"feature-chip"},accent:{top:null,bottom:null}}];return(m,h)=>{const b=D,w=$;return s(),i("div",P,[(s(),i(k,null,v(l,g=>r(b,{key:g.caption,class:"first:relative first:before:absolute first:before:content-[url('featureborder2.svg')] lg:first:before:left-[60px] lg:first:before:top-[48px] lg:first:before:scale-[2]",feature:g},null,8,["feature"])),64)),t("div",R,[(s(),i(k,null,v(u,g=>r(w,{key:g.id,class:"flex items-center justify-center rounded-[12px] border-2 border-ui-white border-opacity-[32%] px-[10px] py-2 tracking-[-0.34px] text-ui-white lg:max-h-[40px] lg:px-[10px] lg:py-2 lg:text-sm",chip:g},null,8,["chip"])),64)),r(b,{class:"lg:mt-3",feature:o})])])}}}),O={};function Z(p,e){const l=N;return s(),i("section",null,[r(l,{variant:"section",class:"selection:bg-ui-purple selection:text-ui-black"},{default:n(()=>[c(p.$slots,"default")]),_:3})])}const B=C(O,[["render",Z]]),E={class:"lg:flex lg:pb-[180px]"},G={class:"mr-10 flex lg:order-2 lg:ml-[-120px] lg:mt-0 lg:self-start xl:ml-8"},K={class:"baselg:order-2 lf:left-[-10px] mb-9 ml-[100px] mt-8 flex max-w-[277px] flex-1 flex-col self-end xs:relative xs:left-[50px] xs:top-0 xs:ml-0 mb:left-0 mb:ml-auto lg:left-0 lg:mt-[50px] lg:max-w-none lg:shrink-0 xl:left-[-100px]"},z=t("span",{class:"feature-caption font-bold tracking-[-0.34px] xs:text-[15px] lg:text-md"},"developers",-1),J=t("svg",{width:"37",height:"37",viewBox:"0 0 37 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.1197 19.4336V19.4336C15.9318 19.1261 14.4078 17.1036 14.7153 14.9158V14.9158C15.0228 12.728 17.0452 11.204 19.233 11.5114V11.5114C21.4209 11.8189 22.9449 13.8414 22.6374 16.0292V16.0292C22.3299 18.217 20.3075 19.7411 18.1197 19.4336Z",stroke:"white","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.6353 29.9964C16.6353 29.9964 8.45975 21.1054 9.43396 14.1735C10.1514 9.06902 14.8709 5.51257 19.9754 6.22996C25.0799 6.94735 28.6364 11.6669 27.919 16.7714C26.9448 23.7033 16.6353 29.9964 16.6353 29.9964Z",stroke:"white","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Y=t("svg",{class:"inline",width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M16.6777 4.60693C23.3164 4.37511 28.8574 9.54221 29.0892 16.1808C29.321 22.8194 24.1539 28.3605 17.5153 28.5923",stroke:"#151515","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M17.5153 28.5923C10.8767 28.8241 5.33568 23.657 5.10385 17.0184C4.87203 10.3798 10.0391 4.83876 16.6777 4.60693",stroke:"#151515","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.2857 6.10466C10.6592 12.6686 10.9492 20.9715 15.0247 27.2664C16.2177 29.1099 18.8468 29.0181 19.9084 27.0959C23.5348 20.532 23.2449 12.2291 19.1694 5.93412C17.975 4.09068 15.3473 4.18244 14.2857 6.10466Z",stroke:"#151515","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M6.25684 11.4521C12.8458 13.2379 21.1021 12.9496 27.5492 10.7086",stroke:"#151515","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M27.9364 21.7471C21.3474 19.9613 13.0911 20.2496 6.64404 22.4907",stroke:"#151515","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1),q=f({__name:"HeroSection",setup(p){const e={id:1,double:!0,title:{top:"",bottom:"Based in Tbilisi, Georgia"},classes:{top:"px-1  bg-ui-purple flex xs:text-sm sm:text-base  items-center justify-center rounded-[11px] lg:text-base text-xxs text-ui-white min-w-[190px] xs:min-w-[205px] min-h-[38px] xs:min-w-[255px] xl:text-lg lg:px-[18px] lg:max-h-[60px] lg:min-h-[60px] lg:min-w-[430px] lg:text-lg lg:py-3 lg:px-[18px] lg:rounded-[18px]",bottom:"px-2 pb-2 before:content-[url(/radius.svg)] before:left-[-12px] before:top-[-6px]  after:content-[url(/radius.svg)] xs:text-sm lg:text-lg  after:right-[-16px] xs:after:right-[-10px]  after:rotate-[270deg] after:top-[-6px] before:absolute after:absolute  -mt-[1px]  bg-ui-purple flex lg:min-w-[370px] items-center justify-center rounded-b-[11px] text-xxs text-ui-white min-w-[150px] xs:min-w-[173px] min-h-[30px] xs:min-w-[213px] relative lg:text-base xl:text-lg lg:pl-[14px] lg:pr-[18px] lg:before:w-[19px] lg:before:h-[19px] lg:before:top-[-9px] lg:before:left-[-12px] lg:rounded-b-[18px] lg:min-h-[48px] lg:after:top-[-7px] lg:after:right-[-11px] lg:min-w-none"},accent:{top:null}},l={id:2,double:!1,title:{top:"Working"},classes:{top:"lg:px-6 lg:py-4 px-3 py-4 lg:text-lg sm:text-base whitespace-nowrap bg-ui-green text-ui-black rounded-[150px] text-xxs xs:text-sm  max-w-fit lg:text-lg lg:mt-[3px]"},accent:{top:"WORLDWIDE"}};return(o,u)=>{const m=$,h=M,b=I,w=B;return s(),y(w,{class:"pb-20"},{default:n(()=>[t("div",E,[t("div",G,[t("div",K,[r(m,{class:"flex rotate-[8deg] flex-col items-center justify-center self-end",chip:e,"icon-bottom":""},{title:n(()=>[_(" Team of "),z,_(" and designers. ")]),iconBottom:n(()=>[J]),_:1}),r(m,{"icon-top":"",class:"relative rotate-[-2deg] self-center lg:self-end",chip:l},{iconTop:n(()=>[Y]),_:1})])]),r(h)]),r(b)]),_:1})}}}),Q=t("div",{class:"ml-1 flex-1 border-t border-t-ui-white"},null,-1),U="Worked with",X="and other lesser-known companies & startups",ee=f({__name:"CaseSection",setup(p){const e=[{id:1,title:"Renaissance Insurance",isNew:!1},{id:2,title:"RBC.ru",isNew:!1},{id:3,title:"FinFort",isNew:!0},{id:4,title:"IP-Note.pro",isNew:!0},{id:5,title:"Zvonok.com",isNew:!1},{id:6,title:"OTEKO (the largest investor in the port infrastructure of Southern Russia)",isNew:!1},{id:7,title:"Delofon.ru",isNew:!1},{id:8,title:"AKBshka.ru (car battery delivery)",isNew:!1}],l={variant:"flex lg:mt-10 ",itemClass:"text-ui-white text-md xs:text-xl tracking-[-0.96px] lg:tracking-[-1.8px] selection:text-ui-black selection:bg-ui-purple lg:text-3xl  lg:last:whitespace-nowrap "};return(o,u)=>{const m=j,h=B;return s(),y(h,{class:"lg:pt-32"},{default:n(()=>[r(m,{"with-footer":"","with-header":"",list:e,classes:l},{header:n(()=>[t("h1",{class:"whitespace-nowrap text-sm text-ui-white"},a(U))]),divider:n(()=>[Q]),footer:n(()=>[t("li",{class:"text-md font-bold tracking-[-1.8px] text-ui-pale selection:bg-ui-purple selection:text-ui-black xs:text-xl lg:max-w-[686px] lg:text-3xl"},a(X))]),_:1})]),_:1})}}}),te={};function se(p,e){const l=q,o=ee;return s(),i("div",null,[r(l),r(o)])}const ie=C(te,[["render",se]]);export{ie as default};
