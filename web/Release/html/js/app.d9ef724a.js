(function(e){function t(t){for(var n,r,o=t[0],u=t[1],i=t[2],s=0,d=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==l[u]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},l={app:0},c=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var b=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"210d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),l={class:"my-center"};function c(e,t,a,c,r,o){var u=Object(n["F"])("HelloWorld"),i=Object(n["F"])("q-card-section"),b=Object(n["F"])("q-card"),s=Object(n["F"])("q-page-container"),d=Object(n["F"])("q-layout");return Object(n["y"])(),Object(n["g"])(d,{view:"lHh Lpr lFf"},{default:Object(n["P"])((function(){return[Object(n["l"])(s,null,{default:Object(n["P"])((function(){return[Object(n["j"])("div",l,[Object(n["l"])(b,null,{default:Object(n["P"])((function(){return[Object(n["l"])(i,null,{default:Object(n["P"])((function(){return[Object(n["l"])(u)]})),_:1})]})),_:1})])]})),_:1})]})),_:1})}var r={class:"q-ma-md"},o={class:"row"},u={class:"col-3 q-pa-md"},i={class:"col"};function b(e,t,a,l,c,b){var s=Object(n["F"])("q-btn"),d=Object(n["F"])("person-define"),j=Object(n["F"])("q-separator"),O=Object(n["F"])("q-tab"),f=Object(n["F"])("q-tabs"),p=Object(n["F"])("personal-plan"),m=Object(n["F"])("q-tab-panel"),v=Object(n["F"])("pareto-front"),g=Object(n["F"])("q-tab-panels"),h=Object(n["F"])("fuck-loading");return Object(n["y"])(),Object(n["i"])(n["a"],null,[Object(n["j"])("div",r,[Object(n["l"])(s,{outline:"",style:{color:"#FF0080"},label:"Let's Go",onClick:e.submit},null,8,["onClick"])]),Object(n["j"])("div",o,[Object(n["j"])("div",u,[Object(n["l"])(d,{"person-list":e.personList},null,8,["person-list"])]),Object(n["l"])(j,{vertical:""}),Object(n["j"])("div",i,[Object(n["l"])(f,{modelValue:e.systemTab,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.systemTab=t}),align:"justify","narrow-indicator":"",class:"q-mb-lg"},{default:Object(n["P"])((function(){return[Object(n["l"])(O,{class:"text-light-blue-4",name:"one",label:"One"}),Object(n["l"])(O,{class:"text-pink-3",name:"multi",label:"Multi"})]})),_:1},8,["modelValue"]),Object(n["l"])(g,{modelValue:e.systemTab,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.systemTab=t}),animated:"","transition-prev":"scale","transition-next":"scale"},{default:Object(n["P"])((function(){return[null!=e.singlePlanData?(Object(n["y"])(),Object(n["g"])(m,{key:0,name:"one"},{default:Object(n["P"])((function(){return[Object(n["l"])(p,{data:e.singlePlanData},null,8,["data"])]})),_:1})):Object(n["h"])("",!0),Object(n["l"])(m,{name:"multi"},{default:Object(n["P"])((function(){return[null!=e.pfData?(Object(n["y"])(),Object(n["g"])(v,{key:0,data:e.pfData},null,8,["data"])):Object(n["h"])("",!0)]})),_:1})]})),_:1},8,["modelValue"])])]),Object(n["l"])(h,{ref:"refLoading"},null,512)],64)}a("d3b7"),a("a630"),a("3ca3"),a("b0c0");var s=Object(n["j"])("div",{class:"text-h6"},"客户信息",-1);function d(e,t,a,l,c,r){var o=Object(n["F"])("q-avatar"),u=Object(n["F"])("q-item-section"),i=Object(n["F"])("q-item-label"),b=Object(n["F"])("q-badge"),d=Object(n["F"])("q-item"),j=Object(n["F"])("q-btn"),O=Object(n["F"])("q-page-sticky"),f=Object(n["F"])("q-list"),p=Object(n["F"])("q-scroll-area"),m=Object(n["F"])("q-card-section"),v=Object(n["F"])("q-input"),g=Object(n["F"])("q-card"),h=Object(n["F"])("q-dialog"),y=Object(n["G"])("ripple");return Object(n["y"])(),Object(n["i"])(n["a"],null,[Object(n["l"])(p,{style:{height:"70vh"}},{default:Object(n["P"])((function(){return[Object(n["l"])(f,null,{default:Object(n["P"])((function(){return[(Object(n["y"])(!0),Object(n["i"])(n["a"],null,Object(n["E"])(l.props.personList,(function(t,a){return Object(n["Q"])((Object(n["y"])(),Object(n["g"])(d,{key:t,clickable:"",onClick:function(t){return e.itemClicked(a)}},{default:Object(n["P"])((function(){return[Object(n["l"])(u,{avatar:""},{default:Object(n["P"])((function(){return[Object(n["l"])(o,{color:"light-blue-4","text-color":"white"},{default:Object(n["P"])((function(){return[Object(n["k"])(Object(n["I"])(t.name[0]),1)]})),_:2},1024)]})),_:2},1024),Object(n["l"])(u,null,{default:Object(n["P"])((function(){return[Object(n["l"])(i,null,{default:Object(n["P"])((function(){return[Object(n["k"])(Object(n["I"])(t.name),1)]})),_:2},1024),Object(n["l"])(i,{caption:""},{default:Object(n["P"])((function(){return[Object(n["k"])(Object(n["I"])(t.age),1)]})),_:2},1024)]})),_:2},1024),Object(n["l"])(u,{side:"",bottom:""},{default:Object(n["P"])((function(){return[Object(n["l"])(b,{color:"pink-3",label:e.moneyTrans(t.money)},null,8,["label"])]})),_:2},1024)]})),_:2},1032,["onClick"])),[[y]])})),128)),Object(n["l"])(O,{position:"bottom-left",offset:[18,18]},{default:Object(n["P"])((function(){return[Object(n["l"])(j,{fab:"",icon:"add",style:{background:"#fcb2d5",color:"#f6f6fc"},onClick:e.addPerson},null,8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),Object(n["l"])(h,{modelValue:l.person.prompt,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.person.prompt=e})},{default:Object(n["P"])((function(){return[Object(n["l"])(g,{style:{"min-width":"350px"},class:"q-pa-md"},{default:Object(n["P"])((function(){return[Object(n["l"])(m,null,{default:Object(n["P"])((function(){return[s]})),_:1}),Object(n["l"])(m,{class:"q-pt-none"},{default:Object(n["P"])((function(){return[Object(n["l"])(v,{dense:"",modelValue:l.person.editPerson.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.person.editPerson.name=e}),label:"Name"},null,8,["modelValue"])]})),_:1}),Object(n["l"])(m,{class:"q-pt-none"},{default:Object(n["P"])((function(){return[Object(n["l"])(v,{dense:"",modelValue:l.person.editPerson.age,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.person.editPerson.age=e}),label:"Age",type:"number","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please type your age"},function(e){return e>0&&e<100||"Please type a real age"}]},null,8,["modelValue","rules"])]})),_:1}),Object(n["l"])(m,{class:"q-pt-none"},{default:Object(n["P"])((function(){return[Object(n["l"])(v,{dense:"",modelValue:l.person.editPerson.money,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.person.editPerson.money=e}),autofocus:"",label:"Money",type:"number"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])],64)}var j=a("5530"),O={name:"PersonDefine",props:{personList:Object},setup:function(e){var t=Object(n["C"])({prompt:!1,editPerson:null});return Object(j["a"])(Object(j["a"])({person:t},Object(n["K"])(p(t,e))),{},{props:e})}};function f(){return{name:g(),age:h(),money:75e4}}function p(e,t){return Object(n["C"])({itemClicked:function(a){e.editPerson=t.personList[a],e.prompt=!0},addPerson:function(){var a=f();t.personList.push(a),e.editPerson=a,e.prompt=!0},moneyTrans:function(e){return e>1e8?Math.round(e/1e8)+"b":e>1e6?Math.round(e/1e6)+"m":e>1e4?Math.round(e/1e4)+"w":e>1e3?Math.round(e/1e3)+"k":e}})}var m=["李","邱","耿","马","欧","施"],v=["玲玉","文锦","明灿","鑫鑫","文杰","雯雯"];function g(){var e=m.length,t=v.length;return m[Math.floor(Math.random()*e)]+v[Math.floor(Math.random()*t)]}function h(){return Math.floor(10+12*Math.random())}var y=a("6b0d"),P=a.n(y),_=a("4983"),F=a("1c1c"),Q=a("66e5"),q=a("4074"),k=a("cb32"),x=a("0170"),w=a("58a8"),C=a("de5e"),S=a("9c40"),D=a("24e8"),V=a("f09f"),I=a("a370"),L=a("27f9"),T=a("714f"),M=a("93dc"),A=a.n(M);const E=P()(O,[["render",d]]);var B=E;A()(O,"components",{QScrollArea:_["a"],QList:F["a"],QItem:Q["a"],QItemSection:q["a"],QAvatar:k["a"],QItemLabel:x["a"],QBadge:w["a"],QPageSticky:C["a"],QBtn:S["a"],QDialog:D["a"],QCard:V["a"],QCardSection:I["a"],QInput:L["a"]}),A()(O,"directives",{Ripple:T["a"]});var U=Object(n["j"])("div",{class:"text-h6"},"计算中",-1);function H(e,t,a,l,c,r){var o=Object(n["F"])("q-card-section"),u=Object(n["F"])("q-separator"),i=Object(n["F"])("q-timeline-entry"),b=Object(n["F"])("q-timeline"),s=Object(n["F"])("q-inner-loading"),d=Object(n["F"])("q-card"),j=Object(n["F"])("q-dialog");return Object(n["y"])(),Object(n["g"])(j,{modelValue:l.loading,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.loading=e}),persistent:""},{default:Object(n["P"])((function(){return[Object(n["l"])(d,{style:{width:"60vw"}},{default:Object(n["P"])((function(){return[Object(n["l"])(o,null,{default:Object(n["P"])((function(){return[U]})),_:1}),Object(n["l"])(u),Object(n["l"])(o,{style:{"max-height":"50vh"},class:"scroll"},{default:Object(n["P"])((function(){return[Object(n["l"])(b,{color:"secondary"},{default:Object(n["P"])((function(){return[(Object(n["y"])(!0),Object(n["i"])(n["a"],null,Object(n["E"])(l.stepEvents,(function(e,t){return Object(n["y"])(),Object(n["g"])(i,{heading:"",key:t},{default:Object(n["P"])((function(){return[Object(n["k"])(Object(n["I"])(e),1)]})),_:2},1024)})),128))]})),_:1})]})),_:1}),Object(n["l"])(u),Object(n["l"])(s,{showing:!0,label:"正在初始化种群...","label-class":"text-teal","label-style":"font-size: 1.1em"})]})),_:1})]})),_:1},8,["modelValue"])}var z={name:"FuckLoading",setup:function(){var e=Object(n["D"])(!1),t=Object(n["D"])([]),a=function(){t.value=[],e.value=!0},l=function(){e.value=!1};return{loading:e,stepEvents:t,loadingBegin:a,loadingEnd:l}}},W=a("eb85"),G=a("05eb"),J=a("74af"),K=a("74f7");const N=P()(z,[["render",H]]);var R=N;A()(z,"components",{QDialog:D["a"],QCard:V["a"],QCardSection:I["a"],QSeparator:W["a"],QTimeline:G["a"],QTimelineEntry:J["a"],QInnerLoading:K["a"]});var $={class:"row"},X={class:"col",style:{height:"60vh"}},Y={class:"q-pa-lg"};function Z(e,t,a,l,c,r){var o=Object(n["F"])("v-chart"),u=Object(n["F"])("PersonalPlan"),i=Object(n["F"])("q-carousel-slide"),b=Object(n["F"])("q-carousel"),s=Object(n["F"])("q-card-section"),d=Object(n["F"])("q-card"),j=Object(n["F"])("q-dialog");return Object(n["y"])(),Object(n["i"])(n["a"],null,[Object(n["j"])("div",$,[Object(n["j"])("div",X,[Object(n["l"])(o,{option:l.option,onClick:l.pointClicked},null,8,["option","onClick"])])]),Object(n["l"])(j,{modelValue:l.dialogShow,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.dialogShow=e}),onHide:l.onDialogHide},{default:Object(n["P"])((function(){return[Object(n["l"])(d,{style:{width:"100vw"}},{default:Object(n["P"])((function(){return[Object(n["l"])(s,null,{default:Object(n["P"])((function(){return[Object(n["l"])(b,{modelValue:l.planSlide,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.planSlide=e}),"transition-prev":"scale","transition-next":"scale",animated:"","control-color":"light-blue-4",vertical:"",swipeable:"","keep-alive":"",height:"65vh"},{default:Object(n["P"])((function(){return[(Object(n["y"])(!0),Object(n["i"])(n["a"],null,Object(n["E"])(l.props.data.multi_plans[l.currentFront],(function(e,t){return Object(n["y"])(),Object(n["g"])(i,{key:t,name:t},{default:Object(n["P"])((function(){return[Object(n["j"])("div",Y,[Object(n["l"])(u,{data:e},null,8,["data"])])]})),_:2},1032,["name"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue","onHide"])],64)}var ee=a("ade3"),te=(a("99af"),function(e){return Object(n["B"])("data-v-8689c336"),e=e(),Object(n["z"])(),e}),ae={style:{"text-align":"center"}},ne=te((function(){return Object(n["j"])("img",{src:"https://cdn.quasar.dev/img/avatar5.jpg"},null,-1)})),le={class:"charts-wapper"},ce={class:"charts-wapper"};function re(e,t,a,l,c,r){var o=Object(n["F"])("q-avatar"),u=Object(n["F"])("q-item-section"),i=Object(n["F"])("q-item-label"),b=Object(n["F"])("q-item"),s=Object(n["F"])("q-separator"),d=Object(n["F"])("q-card-section"),j=Object(n["F"])("q-card"),O=Object(n["F"])("q-tooltip"),f=Object(n["F"])("q-chip"),p=Object(n["F"])("v-chart"),m=Object(n["F"])("q-tab-panel"),v=Object(n["F"])("q-tab-panels");return Object(n["y"])(),Object(n["i"])("div",ae,[Object(n["l"])(f,{color:"pink-3","text-color":"white",clickable:""},{default:Object(n["P"])((function(){return[Object(n["l"])(o,{color:"light-blue-4","text-color":"white"},{default:Object(n["P"])((function(){return[Object(n["k"])(Object(n["I"])(l.props.data.username[0]),1)]})),_:1}),Object(n["k"])(" "+Object(n["I"])(l.props.data.username)+" ",1),Object(n["l"])(O,{class:"bg-transparent","transition-show":"scale","transition-hide":"scale"},{default:Object(n["P"])((function(){return[Object(n["l"])(j,{class:"my-card text-white",style:{background:"radial-gradient(circle,#fcb2d5  0%, #abc7ec 100%)"}},{default:Object(n["P"])((function(){return[Object(n["l"])(b,null,{default:Object(n["P"])((function(){return[Object(n["l"])(u,{avatar:""},{default:Object(n["P"])((function(){return[Object(n["l"])(o,null,{default:Object(n["P"])((function(){return[ne]})),_:1})]})),_:1}),Object(n["l"])(u,null,{default:Object(n["P"])((function(){return[Object(n["l"])(i,{class:"text-h6"},{default:Object(n["P"])((function(){return[Object(n["k"])(Object(n["I"])(l.props.data.username),1)]})),_:1})]})),_:1})]})),_:1}),Object(n["l"])(s,{dark:"",inset:""}),Object(n["l"])(d,{class:"text-subtitle1"},{default:Object(n["P"])((function(){return[Object(n["k"])(" Medical: "+Object(n["I"])(l.props.data.medical_plan.name),1)]})),_:1}),Object(n["l"])(d,{class:"text-subtitle1"},{default:Object(n["P"])((function(){return[Object(n["k"])(" Money: "+Object(n["I"])(l.props.data.medical_plan.value),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["l"])(v,{modelValue:l.chartsTab,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.chartsTab=e}),swipeable:"",infinite:"",animated:"","keep-alive":""},{default:Object(n["P"])((function(){return[Object(n["l"])(m,{name:"plan"},{default:Object(n["P"])((function(){return[Object(n["j"])("div",le,[Object(n["Q"])(Object(n["l"])(p,{id:"chart",class:"chart",option:l.sunburstOption},null,8,["option"]),[[n["M"],l.props.data.invest]]),Object(n["Q"])(Object(n["j"])("h2",null,"该用户不投资",512),[[n["M"],!l.props.data.invest]])])]})),_:1}),Object(n["l"])(m,{name:"curve"},{default:Object(n["P"])((function(){return[Object(n["j"])("div",ce,[Object(n["l"])(p,{class:"chart",option:l.curveOption},null,8,["option"])])]})),_:1})]})),_:1},8,["modelValue"])])}a("ddb0");var oe=a("22b4"),ue=a("f95e"),ie=a("3620"),be=a("8acb"),se=a("128d"),de=a("9394"),je=a("2da7"),Oe=a("ff32"),fe=a("5c7f");Object(oe["a"])([ue["a"],ie["a"],be["a"],se["a"],de["a"],je["a"],Oe["a"]]);var pe={name:"PersonalPlan",props:{data:Object},components:{VChart:fe["b"]},provide:Object(ee["a"])({},fe["a"],"light"),setup:function(e){var t=Object(n["D"])("plan"),a=Object(n["e"])((function(){return e.data.plan_data})),l=Object(n["e"])((function(){return Array.from({length:e.data.line_data.data[0].values.length},(function(t,a){return a+e.data.age}))})),c=Object(n["e"])((function(){return Array.from(e.data.line_data.data,(function(t,a){return{name:t.name,type:"line",data:t.values,yAxisIndex:a===e.data.line_data.data.length-1?1:0}}))})),r=Object(n["D"])({tooltip:{trigger:"item",formatter:"$ {c}",textStyle:{fontSize:20}},series:{type:"sunburst",emphasis:{focus:"ancestor"},data:a,levels:[{},{r0:"12%",r:"75%",label:{rotate:"radial",fontSize:22}},{r0:"75%",r:"90%",label:{position:"outside",fontSize:18}}]}}),o=Object(n["D"])({animationDuration:2e3,title:{text:"Life Curve",left:"center"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:l},yAxis:[{type:"value",axisLabel:{show:!1}},{type:"value",axisLabel:{show:!1}}],series:c});return{props:e,chartsTab:t,sunburstOption:r,curveOption:o}}},me=(a("c4a7"),a("b047")),ve=a("05c0"),ge=a("adad"),he=a("823b");const ye=P()(pe,[["render",re],["__scopeId","data-v-8689c336"]]);var Pe=ye;A()(pe,"components",{QChip:me["a"],QAvatar:k["a"],QTooltip:ve["a"],QCard:V["a"],QItem:Q["a"],QItemSection:q["a"],QItemLabel:x["a"],QSeparator:W["a"],QCardSection:I["a"],QTabPanels:ge["a"],QTabPanel:he["a"]});var _e=a("acf6");Object(oe["a"])([ue["a"],_e["a"],de["a"],je["a"],Oe["a"]]);var Fe={name:"ParetoForeword",props:{data:Object},components:{VChart:fe["b"],PersonalPlan:Pe},provide:Object(ee["a"])({},fe["a"],"light"),setup:function(e){var t=function(){},a=Object(n["D"])(!1),l=Object(n["D"])(0),c=Object(n["D"])(0),r=function(e){console.log(e.dataIndex),c.value=e.dataIndex,a.value=!0},o=Object(n["e"])((function(){return e.data.pf_data.value})),u=Object(n["e"])((function(){return e.data.pf_data.label1})),i=Object(n["e"])((function(){return e.data.pf_data.label2})),b=Object(n["D"])({xAxis:{name:u,min:function(e){return e.min-1},max:function(e){return e.max+1}},yAxis:{name:i,min:function(e){return e.min-1},max:function(e){return e.max+1}},title:{text:"Pareto Front",left:"center"},tooltip:{trigger:"item",formatter:function(e){return"".concat(u.value,": ").concat(e.value[0]," <br/>")+"".concat(i.value,": ").concat(e.value[1]," <br/>")},textStyle:{fontSize:20}},series:[{symbolSize:30,itemStyle:{color:"#abc7ec",borderColor:"#000"},data:o,type:"scatter",emphasis:{itemStyle:{shadowBlur:50,shadowColor:"#f40b79",color:"#fcb2d5",borderColor:"#333"}}}]});return{props:e,currentFront:c,pointClicked:r,option:b,dialogShow:a,onDialogHide:t,planSlide:l}}},Qe=a("880c"),qe=a("62cd");const ke=P()(Fe,[["render",Z]]);var xe=ke;A()(Fe,"components",{QDialog:D["a"],QCard:V["a"],QCardSection:I["a"],QCarousel:Qe["a"],QCarouselSlide:qe["a"]});var we=a("bc3a"),Ce=a.n(we),Se=a("b3fe"),De=[{name:"文杰证券",children:[{name:"期货1",value:3},{name:"期货2",value:1}]},{name:"邱少集团",children:[{name:"产品1",value:3},{name:"产品2",value:1},{name:"产品3",value:2},{name:"产品4",value:6},{name:"产品5",value:4}]},{name:"马公子汽车",children:[{name:"保险1",value:3},{name:"保险2",value:2}]},{name:"明灿银行",children:[{name:"产品1",value:3},{name:"产品2",value:2},{name:"产品4",value:3},{name:"产品5",value:2}]},{name:"施-文学院",children:[{name:"课题1",value:5},{name:"课题2",value:7},{name:"课题3",value:3.6}]}],Ve={data:[{name:"Line1",values:[120,132,101,134,90,230,210]},{name:"Line2",values:[220,182,191,234,290,330,310]},{name:"Line3",values:[150,232,201,154,190,330,410]}]},Ie={label1:"风险",label2:"收益",value:[[10,8.04],[8.07,6.95]]},Le={username:"施小雯",age:23,invest:!0,medical_plan:{name:"a",value:100},plan_data:De,line_data:Ve},Te={pf_data:Ie,multi_plans:[[{username:"马公子",age:23,invest:!0,medical_plan:{name:"a",value:100},plan_data:De,line_data:Ve},{username:"邱少",age:23,invest:!0,medical_plan:{name:"a",value:100},plan_data:De,line_data:Ve}],[{username:"马公子",age:23,invest:!0,medical_plan:{name:"a",value:100},plan_data:De,line_data:Ve},{username:"邱少",age:23,invest:!0,medical_plan:{name:"a",value:100},plan_data:De,line_data:Ve}]]},Me=Object(n["m"])({name:"HelloWorld",components:{PersonalPlan:Pe,FuckLoading:R,ParetoFront:xe,PersonDefine:B},setup:function(){var e=Object(Se["a"])(),t=Object(n["D"])(),a=Object(n["D"])("one");Object(n["w"])((function(){}));var l=Object(n["D"])(null),c=Object(n["D"])(null),r=Object(n["D"])([]),o=function(){if(0!==r.value.length)if("one"===a.value)t.value.loadingBegin(),Ce.a.get("http://localhost:8000/one",{params:r.value[0],timeout:1e4}).then((function(e){console.log(e.data),l.value=e.data,t.value.loadingEnd()})).catch((function(a){l.value=Le,t.value.loadingEnd(),e.dialog({title:"恭喜！连接算法模块失败！",message:"为了好看，生成一个样例"+a})}));else{var n=Array.from(r.value,(function(e){return e.money})).reduce((function(e,t){return parseInt(e)+parseInt(t)}));e.dialog({title:"即将启动保险风险管理子系统",message:"[￥ ".concat(n,"] 请输入投资年限"),prompt:{type:"number"},cancel:!0,persistent:!0}).onOk((function(a){t.value.loadingBegin(),Ce.a.post("http://localhost:8000/multi",{person_list:r.value,years:a},{headers:{"Content-Type":"application/json"},timeout:2e4}).then((function(e){console.log(e.data),c.value=e.data,t.value.loadingEnd()})).catch((function(a){c.value=Te,t.value.loadingEnd(),e.dialog({title:"恭喜！连接算法模块失败！",message:"为了好看，生成一个样例"+a})}))}))}else e.dialog({title:"FBI warning",message:"至少添加一个客户"})};return{singlePlanData:l,pfData:c,personList:r,submit:o,refLoading:t,systemTab:a}}}),Ae=a("429b"),Ee=a("7460");const Be=P()(Me,[["render",b]]);var Ue=Be;A()(Me,"components",{QBtn:S["a"],QSeparator:W["a"],QTabs:Ae["a"],QTab:Ee["a"],QTabPanels:ge["a"],QTabPanel:he["a"]});var He={name:"LayoutDefault",components:{HelloWorld:Ue},setup:function(){return{leftDrawerOpen:Object(n["D"])(!1)}}},ze=(a("5c8c"),a("4d5a")),We=a("e359"),Ge=a("65c6"),Je=a("6ac5"),Ke=a("9404"),Ne=a("0016"),Re=a("09e3");const $e=P()(He,[["render",c]]);var Xe=$e;A()(He,"components",{QLayout:ze["a"],QHeader:We["a"],QToolbar:Ge["a"],QBtn:S["a"],QToolbarTitle:Je["a"],QDrawer:Ke["a"],QList:F["a"],QItemLabel:x["a"],QItem:Q["a"],QItemSection:q["a"],QIcon:Ne["a"],QPageContainer:Re["a"],QCard:V["a"],QCardSection:I["a"]});var Ye=a("b05d"),Ze=(a("c867"),a("e54f"),a("436b")),et={config:{},plugins:{Dialog:Ze["a"]}},tt=a("4cb5"),at=a("4b2a");Object(oe["a"])([ue["a"],tt["a"],at["a"],je["a"]]);var nt=Object(n["f"])(Xe).use(Ye["a"],et);nt.component("v-chart",fe["b"]),nt.mount("#app")},"5c8c":function(e,t,a){"use strict";a("210d")},bd44:function(e,t,a){},c4a7:function(e,t,a){"use strict";a("bd44")},c867:function(e,t,a){}});
//# sourceMappingURL=app.d9ef724a.js.map