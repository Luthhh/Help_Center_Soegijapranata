import"./moment.min-240f6893.js";import"./daterangepicker-cf822ffe.js";import{A as n}from"./apexcharts.min-4b05f444.js";import"./jquery-jvectormap-world-mill-en-6f37b3a0.js";import"./_commonjsHelpers-042e6b4d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./jquery-f89b34b5.js";import"./moment-e9e012b5.js";(function(a){var s=function(){this.$body=a("body"),this.charts=[]};s.prototype.initCharts=function(){window.Apex={chart:{parentHeightOffset:0,toolbar:{show:!1}},grid:{padding:{left:0,right:0}},colors:["#3e60d5","#47ad77","#fa5c7c","#ffbc00"]};var e=["#3e60d5","#47ad77"],t=a("#widget-customers").data("colors");t&&(e=t.split(","));var r={chart:{height:72,width:72,type:"donut"},legend:{show:!1},plotOptions:{pie:{donut:{size:"80%"}}},stroke:{colors:["transparent"]},series:[58,42],dataLabels:{enabled:!1},colors:e},o=new n(document.querySelector("#widget-customers"),r);o.render();var e=["#3e60d5","#47ad77"],t=a("#widget-orders").data("colors");t&&(e=t.split(","));var r={chart:{height:72,width:72,type:"donut"},legend:{show:!1},stroke:{colors:["transparent"]},plotOptions:{pie:{donut:{size:"80%"}}},series:[34,66],dataLabels:{enabled:!1},colors:e},o=new n(document.querySelector("#widget-orders"),r);o.render();var e=["#3e60d5","#47ad77"],t=a("#widget-revenue").data("colors");t&&(e=t.split(","));var r={chart:{height:72,width:72,type:"donut"},legend:{show:!1},stroke:{colors:["transparent"]},plotOptions:{pie:{donut:{size:"80%"}}},series:[87,13],dataLabels:{enabled:!1},colors:e},o=new n(document.querySelector("#widget-revenue"),r);o.render();var e=["#3e60d5","#47ad77"],t=a("#widget-growth").data("colors");t&&(e=t.split(","));var r={chart:{height:72,width:72,type:"donut"},legend:{show:!1},stroke:{colors:["transparent"]},plotOptions:{pie:{donut:{size:"80%"}}},series:[45,55],dataLabels:{enabled:!1},colors:e},o=new n(document.querySelector("#widget-growth"),r);o.render();var e=["#3e60d5","#47ad77"],t=a("#widget-conversation").data("colors");t&&(e=t.split(","));var r={chart:{height:72,width:72,type:"donut"},legend:{show:!1},stroke:{colors:["transparent"]},plotOptions:{pie:{donut:{size:"80%"}}},series:[23,68],dataLabels:{enabled:!1},colors:e},o=new n(document.querySelector("#widget-conversation"),r);o.render();var e=["#3e60d5","#47ad77","#fa5c7c","#ffbc00"],t=a("#revenue-chart").data("colors");t&&(e=t.split(","));var r={series:[{name:"Revenue",type:"column",data:[440,505,414,671,227,413,201,352,752,320,257,160]},{name:"Sales",type:"line",data:[23,42,35,27,43,22,17,31,22,22,12,16]}],chart:{height:374,type:"line",offsetY:10},stroke:{width:[2,3]},plotOptions:{bar:{columnWidth:"50%"}},colors:e,dataLabels:{enabled:!0,enabledOnSeries:[1]},labels:["01 Jan 2001","02 Jan 2001","03 Jan 2001","04 Jan 2001","05 Jan 2001","06 Jan 2001","07 Jan 2001","08 Jan 2001","09 Jan 2001","10 Jan 2001","11 Jan 2001","12 Jan 2001"],xaxis:{type:"datetime"},legend:{offsetY:7},grid:{padding:{bottom:20}},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:.75,opacityTo:.75,stops:[0,0,0]}},yaxis:[{title:{text:"Net Revenue"}},{opposite:!0,title:{text:"Number of Sales"}}]},o=new n(document.querySelector("#revenue-chart"),r);o.render();var e=["#3e60d5","#47ad77","#fa5c7c","#ffbc00"],t=a("#average-sales").data("colors");t&&(e=t.split(","));var r={chart:{height:286,type:"radialBar"},plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"14px",color:void 0,offsetY:100},value:{offsetY:55,fontSize:"24px",color:void 0,formatter:function(i){return i+"%"}}},track:{background:"rgba(170,184,197, 0.2)",margin:0}}},fill:{gradient:{enabled:!0,shade:"dark",shadeIntensity:.2,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},colors:e,series:[67],labels:["Returning Customer"],responsive:[{breakpoint:380,options:{chart:{height:180}}}],grid:{padding:{top:0,right:0,bottom:0,left:0}}},o=new n(document.querySelector("#average-sales"),r);o.render();var e=["#3e60d5","#47ad77","#fa5c7c","#ffbc00"],t=a("#country-chart").data("colors");t&&(e=t.split(","));var r={chart:{height:320,type:"bar"},plotOptions:{bar:{horizontal:!0}},colors:e,dataLabels:{enabled:!1},series:[{name:"Orders",data:[90,75,60,50,45,36,28,20,15,12]}],xaxis:{categories:["India","China","United States","Japan","France","Italy","Netherlands","United Kingdom","Canada","South Korea"],axisBorder:{show:!1},labels:{formatter:function(i){return i+"%"}}},grid:{strokeDashArray:[5]}},o=new n(document.querySelector("#country-chart"),r);o.render()},s.prototype.initMaps=function(){a("#world-map-markers").length>0&&a("#world-map-markers").vectorMap({map:"world_mill_en",normalizeFunction:"polynomial",hoverOpacity:.7,hoverColor:!1,regionStyle:{initial:{fill:"rgba(145,166,189,.25)"}},markerStyle:{initial:{r:9,fill:"#3e60d5","fill-opacity":.9,stroke:"#fff","stroke-width":7,"stroke-opacity":.4},hover:{stroke:"#fff","fill-opacity":1,"stroke-width":1.5}},backgroundColor:"transparent",markers:[{latLng:[40.71,-74],name:"New York"},{latLng:[37.77,-122.41],name:"San Francisco"},{latLng:[-33.86,151.2],name:"Sydney"},{latLng:[1.3,103.8],name:"Singapore"}],zoomOnScroll:!1})},s.prototype.init=function(){a("#dash-daterange").daterangepicker({singleDatePicker:!0}),this.initCharts(),this.initMaps()},a.Dashboard=new s,a.Dashboard.Constructor=s})(window.jQuery),function(a){a(document).ready(function(s){a.Dashboard.init()})}(window.jQuery);
