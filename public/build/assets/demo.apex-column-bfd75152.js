import{A as i}from"./apexcharts.min-8d5914e8.js";import"./_commonjsHelpers-23102255.js";var a=["#3e60d5","#47ad77","#fa5c7c"],t=$("#basic-column").data("colors");t&&(a=t.split(","));var s={chart:{height:396,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},colors:a,series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},legend:{offsetY:7},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa",padding:{bottom:5}},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}}},o=new i(document.querySelector("#basic-column"),s);o.render();var a=["#3e60d5"],t=$("#datalabels-column").data("colors");t&&(a=t.split(","));var s={chart:{height:380,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{borderRadius:10,dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(e){return e+"%"},offsetY:-25,style:{fontSize:"12px",colors:["#304758"]}},colors:a,legend:{show:!0,horizontalAlign:"center",offsetX:0,offsetY:-5},series:[{name:"Inflation",data:[2.3,3.1,4,10.1,4,3.6,3.2,2.3,1.4,.8,.5,.2]}],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:0},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-10}},fill:{gradient:{enabled:!1,shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(e){return e+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:360,align:"center",style:{color:"#444"}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"}},o=new i(document.querySelector("#datalabels-column"),s);o.render();var a=["#39afd1","#ffbc00","#e3eaef"],t=$("#stacked-column").data("colors");t&&(a=t.split(","));var s={chart:{height:380,type:"bar",stacked:!0,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"50%"}},series:[{name:"Product A",data:[44,55,41,67,22,43,21,49]},{name:"Product B",data:[13,23,20,8,13,27,33,12]},{name:"Product C",data:[11,17,15,15,21,14,15,13]}],xaxis:{categories:["2011 Q1","2011 Q2","2011 Q3","2011 Q4","2012 Q1","2012 Q2","2012 Q3","2012 Q4"]},colors:a,fill:{opacity:1},legend:{offsetY:7},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa",padding:{bottom:5}}},o=new i(document.querySelector("#stacked-column"),s);o.render();var a=["#39afd1","#47ad77","#e3eaef"],t=$("#full-stacked-column").data("colors");t&&(a=t.split(","));var s={chart:{height:380,type:"bar",stacked:!0,stackType:"100%",toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"50%"}},series:[{name:"Product A",data:[44,55,41,67,22,43,21,49]},{name:"Product B",data:[13,23,20,8,13,27,33,12]},{name:"Product C",data:[11,17,15,15,21,14,15,13]}],xaxis:{categories:["2011 Q1","2011 Q2","2011 Q3","2011 Q4","2012 Q1","2012 Q2","2012 Q3","2012 Q4"]},fill:{opacity:1},legend:{offsetY:7},colors:a,grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa",padding:{bottom:5}}},o=new i(document.querySelector("#full-stacked-column"),s);o.render();var a=["#47ad77","#fa5c7c"],t=$("#column-with-markers").data("colors");t&&(a=t.split(","));var s={series:[{name:"Actual",data:[{x:"2011",y:1292,goals:[{name:"Expected",value:1400,strokeHeight:5,strokeColor:a[1]}]},{x:"2012",y:4432,goals:[{name:"Expected",value:5400,strokeHeight:5,strokeColor:a[1]}]},{x:"2013",y:5423,goals:[{name:"Expected",value:5200,strokeHeight:5,strokeColor:a[1]}]},{x:"2014",y:6653,goals:[{name:"Expected",value:6500,strokeHeight:5,strokeColor:a[1]}]},{x:"2015",y:8133,goals:[{name:"Expected",value:6600,strokeHeight:13,strokeWidth:0,strokeLineCap:"round",strokeColor:a[1]}]},{x:"2016",y:7132,goals:[{name:"Expected",value:7500,strokeHeight:5,strokeColor:a[1]}]},{x:"2017",y:7332,goals:[{name:"Expected",value:8700,strokeHeight:5,strokeColor:a[1]}]},{x:"2018",y:6553,goals:[{name:"Expected",value:7300,strokeHeight:2,strokeDashArray:2,strokeColor:a[1]}]}]}],chart:{height:380,type:"bar"},plotOptions:{bar:{columnWidth:"60%"}},colors:a,dataLabels:{enabled:!1},legend:{show:!0,showForSingleSeries:!0,customLegendItems:["Actual","Expected"],markers:{fillColors:a}}},o=new i(document.querySelector("#column-with-markers"),s);o.render();var a=["#47ad77","#fa5c7c"],t=$("#column-with-group-label").data("colors");t&&(a=t.split(","));dayjs.extend(window.dayjs_plugin_quarterOfYear);var b={series:[{name:"Sales",data:[{x:"2020/01/01",y:400},{x:"2020/04/01",y:430},{x:"2020/07/01",y:448},{x:"2020/10/01",y:470},{x:"2021/01/01",y:540},{x:"2021/04/01",y:580},{x:"2021/07/01",y:690},{x:"2021/10/01",y:690}]}],chart:{type:"bar",height:380,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"45%"}},colors:a,xaxis:{type:"category",labels:{formatter:function(e){return"Q"+dayjs(e).quarter()}},group:{style:{fontSize:"10px",fontWeight:700},groups:[{title:"2020",cols:4},{title:"2021",cols:4}]}},tooltip:{x:{formatter:function(e){return"Q"+dayjs(e).quarter()+" "+dayjs(e).format("YYYY")}}}},m=new i(document.querySelector("#column-with-group-label"),b);m.render();var a=["#fa5c7c"],t=$("#rotate-labels-column").data("colors");t&&(a=t.split(","));var s={annotations:{points:[{x:"Bananas",seriesIndex:0,label:{borderColor:"#3e60d5",offsetY:0,style:{color:"#fff",background:"#3e60d5"},text:"Bananas are good"}}]},chart:{height:380,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{columnWidth:"50%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{width:2},colors:a,series:[{name:"Servings",data:[44,55,41,67,22,43,21,33,45,31,87,65,35]}],grid:{borderColor:"#f1f3fa",padding:{top:0,right:-2,bottom:-35,left:10}},xaxis:{labels:{rotate:-45},categories:["Apples","Oranges","Strawberries","Pineapples","Mangoes","Bananas","Blackberries","Pears","Watermelons","Cherries","Pomegranates","Tangerines","Papayas"]},yaxis:{title:{text:"Servings"}},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:.85,opacityTo:.85,stops:[50,0,100]}}},o=new i(document.querySelector("#rotate-labels-column"),s);o.render();var a=["#3e60d5"],t=$("#negative-value-column").data("colors");t&&(a=t.split(","));var s={chart:{height:380,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{colors:{ranges:[{from:-100,to:-46,color:"#fa5c7c"},{from:-45,to:0,color:"#ffbc00"}]},columnWidth:"80%"}},dataLabels:{enabled:!1},colors:a,series:[{name:"Cash Flow",data:[1.45,5.42,5.9,-.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,.34,3.88,13.07,5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4]}],yaxis:{title:{text:"Growth"},labels:{formatter:function(e){return e.toFixed(0)+"%"}}},xaxis:{categories:["2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01"],labels:{rotate:-90}},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"}},o=new i(document.querySelector("#negative-value-column"),s);o.render();var a=["#3e60d5","#6c757d","#47ad77","#fa5c7c","#ffbc00","#39afd1","#e3eaef","#313a46"],t=$("#distributed-column").data("colors");t&&(a=t.split(","));var s={chart:{height:380,type:"bar",toolbar:{show:!1},events:{click:function(e,r,l){console.log(e,r,l)}}},colors:a,plotOptions:{bar:{columnWidth:"45%",distributed:!0}},dataLabels:{enabled:!1},series:[{data:[21,22,10,28,16,21,13,30]}],xaxis:{categories:["John","Joe","Jake","Amber","Peter","Mary","David","Lily"],labels:{style:{colors:a,fontSize:"14px"}}},legend:{offsetY:7},grid:{row:{colors:["transparent","transparent"],opacity:.2},borderColor:"#f1f3fa"}},o=new i(document.querySelector("#distributed-column"),s);o.render();var a=["#47ad77","#39afd1"],t=$("#range-column").data("colors");t&&(a=t.split(","));var s={chart:{height:380,type:"rangeBar"},plotOptions:{bar:{horizontal:!1}},dataLabels:{enabled:!0},legend:{offsetY:7},colors:a,series:[{name:"Product A",data:[{x:"Team A",y:[1,5]},{x:"Team B",y:[4,6]},{x:"Team C",y:[5,8]},{x:"Team D",y:[3,11]}]},{name:"Product B",data:[{x:"Team A",y:[2,6]},{x:"Team B",y:[1,3]},{x:"Team C",y:[7,8]},{x:"Team D",y:[5,9]}]}]},o=new i(document.querySelector("#range-column"),s);o.render();var a=["#3e60d5","#6c757d","#47ad77","#fa5c7c","#ffbc00","#39afd1","#e3eaef","#313a46"],t=$("#chart-year").data("colors");t&&(a=t.split(","));Apex={chart:{toolbar:{show:!1}},tooltip:{shared:!1},legend:{show:!1}};function x(e){for(var r=e.length-1;r>0;r--){var l=Math.floor(Math.random()*(r+1)),n=e[r];e[r]=e[l],e[l]=n}return e}var g=[{y:400,quarters:[{x:"Q1",y:120},{x:"Q2",y:90},{x:"Q3",y:100},{x:"Q4",y:90}]},{y:430,quarters:[{x:"Q1",y:120},{x:"Q2",y:110},{x:"Q3",y:90},{x:"Q4",y:110}]},{y:448,quarters:[{x:"Q1",y:70},{x:"Q2",y:100},{x:"Q3",y:140},{x:"Q4",y:138}]},{y:470,quarters:[{x:"Q1",y:150},{x:"Q2",y:60},{x:"Q3",y:190},{x:"Q4",y:70}]},{y:540,quarters:[{x:"Q1",y:120},{x:"Q2",y:120},{x:"Q3",y:130},{x:"Q4",y:170}]},{y:580,quarters:[{x:"Q1",y:170},{x:"Q2",y:130},{x:"Q3",y:120},{x:"Q4",y:160}]}];function y(){var e=x(g),r=[{x:"2011",y:e[0].y,color:a[0],quarters:e[0].quarters},{x:"2012",y:e[1].y,color:a[1],quarters:e[1].quarters},{x:"2013",y:e[2].y,color:a[2],quarters:e[2].quarters},{x:"2014",y:e[3].y,color:a[3],quarters:e[3].quarters},{x:"2015",y:e[4].y,color:a[4],quarters:e[4].quarters},{x:"2016",y:e[5].y,color:a[5],quarters:e[5].quarters}];return r}function d(e,r){var l=[],n=0,c=[];if(e.w.globals.selectedDataPoints[0]){for(var p=e.w.globals.selectedDataPoints,u=0;u<p[n].length;u++){var f=p[n][u],h=e.w.config.series[n];l.push({name:h.data[f].x,data:h.data[f].quarters}),c.push(h.data[f].color)}return l.length===0&&(l=[{data:[]}]),i.exec(r,"updateOptions",{series:l,colors:c,fill:{colors:c}})}}var s={series:[{data:y()}],chart:{id:"barYear",height:400,width:"100%",type:"bar",events:{dataPointSelection:function(e,r,l){var n=document.querySelector("#chart-quarter"),c=document.querySelector("#chart-year");l.selectedDataPoints[0].length===1&&(n.classList.contains("active")||(c.classList.add("chart-quarter-activated"),n.classList.add("active"))),d(r,"barQuarter"),l.selectedDataPoints[0].length===0&&(c.classList.remove("chart-quarter-activated"),n.classList.remove("active"))},updated:function(e){d(e,"barQuarter")}}},plotOptions:{bar:{distributed:!0,horizontal:!0,barHeight:"75%",dataLabels:{position:"bottom"}}},dataLabels:{enabled:!0,textAnchor:"start",style:{colors:["#fff"]},formatter:function(e,r){return r.w.globals.labels[r.dataPointIndex]},offsetX:0,dropShadow:{enabled:!0}},colors:a,states:{normal:{filter:{type:"desaturate"}},active:{allowMultipleDataPointsSelection:!0,filter:{type:"darken",value:1}}},tooltip:{x:{show:!1},y:{title:{formatter:function(e,r){return r.w.globals.labels[r.dataPointIndex]}}}},title:{text:"Yearly Results",offsetX:15},subtitle:{text:"(Click on bar to see details)",offsetX:15},yaxis:{labels:{show:!1}}},o=new i(document.querySelector("#chart-year"),s);o.render();var v={series:[{data:[]}],chart:{id:"barQuarter",height:400,width:"100%",type:"bar",stacked:!0},plotOptions:{bar:{columnWidth:"50%",horizontal:!1}},legend:{show:!1},grid:{yaxis:{lines:{show:!1}},xaxis:{lines:{show:!0}}},yaxis:{labels:{show:!1}},title:{text:"Quarterly Results",offsetX:10},tooltip:{x:{formatter:function(e,r){return r.w.globals.seriesNames[r.seriesIndex]}},y:{title:{formatter:function(e,r){return r.w.globals.labels[r.dataPointIndex]}}}}},w=new i(document.querySelector("#chart-quarter"),v);w.render();o.addEventListener("dataPointSelection",function(e,r,l){var n=document.querySelector("#chart-quarter"),c=document.querySelector("#chart-year");l.selectedDataPoints[0].length===1&&(n.classList.contains("active")||(c.classList.add("chart-quarter-activated"),n.classList.add("active"))),d(r,"barQuarter"),l.selectedDataPoints[0].length===0&&(c.classList.remove("chart-quarter-activated"),n.classList.remove("active"))});o.addEventListener("updated",function(e){d(e,"barQuarter")});document.querySelector("#model").addEventListener("change",function(e){o.updateSeries([{data:y()}])});
