import"./chart.min-ccfd7488.js";import"./_commonjsHelpers-23102255.js";(function(s){var l=function(){this.$body=s("body"),this.charts=[],this.defaultColors=["#3e60d5","#47ad77","#fa5c7c","#ffbc00"]};l.prototype.interpolationExample=function(){var e=document.getElementById("interpolation-example"),a=e.getAttribute("data-colors"),t=a?a.split(","):this.defaultColors,i=e.getContext("2d"),r=[0,20,20,60,60,120,NaN,180,120,125,105,110,170],o=new Chart(i,{type:"line",data:{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],datasets:[{label:"Fully Rounded",data:r,borderColor:t[0],fill:!1,cubicInterpolationMode:"monotone",tension:.4},{label:"Small Radius",data:r,borderColor:t[1],fill:!1,tension:.4},{label:"Small Radius",data:r,borderColor:t[2],fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{intersect:!1},plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1},suggestedMin:-10,suggestedMax:200}}}});this.charts.push(o)},l.prototype.lineExample=function(){var e=document.getElementById("line-example"),a=e.getAttribute("data-colors"),t=a?a.split(","):this.defaultColors,i=e.getContext("2d"),r=new Chart(i,{type:"line",data:{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Fully Rounded",data:[32,42,42,62,52,75,62],borderColor:t[0],fill:!0,backgroundColor:n(t[0],.3)},{label:"Small Radius",data:[42,58,66,93,82,105,92],fill:!0,backgroundColor:"transparent",borderColor:t[1],borderDash:[5,5]}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},tension:.3,scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}});this.charts.push(r)},l.prototype.multiAxesExample=function(){var e=document.getElementById("multi-axes-example"),a=e.getAttribute("data-colors"),t=a?a.split(","):this.defaultColors,i=e.getContext("2d"),r=new Chart(i,{type:"line",data:{labels:["Jan","Feb","March","April","May","June","July"],datasets:[{label:"Fully Rounded",data:[12,-19,14,-15,18,-14,-7],borderColor:t[0],backgroundColor:n(t[0],.3),borderWidth:1.5,yAxisID:"y"},{label:"Small Radius",data:[-10,19,-15,-8,-17,12,8],backgroundColor:n(t[1],.3),borderColor:t[1],borderWidth:1.5,yAxisID:"y1"}]},options:{interaction:{mode:"index",intersect:!1},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},tension:.2,scales:{x:{grid:{display:!1}},y:{type:"linear",display:!0,position:"left",grid:{display:!1}},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1}}}}});this.charts.push(r)},l.prototype.pointStylingExample=function(){var e=document.getElementById("point-styling-example"),a=e.getAttribute("data-colors"),t=a?a.split(","):this.defaultColors,i=e.getContext("2d"),r=new Chart(i,{type:"line",data:{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6"],datasets:[{label:"Dataset 1",data:[12,-19,14,-15,14,-8],borderColor:t[0],pointStyle:"circle",pointRadius:10,pointHoverRadius:15}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{stacked:!0,grid:{display:!1}},y:{stacked:!0,grid:{display:!1}}}}});this.charts.push(r)},l.prototype.lineSegmentExample=function(){var e=document.getElementById("line-segment-example"),a=e.getAttribute("data-colors"),t=a?a.split(","):this.defaultColors,i=e.getContext("2d"),r=new Chart(i,{type:"line",data:{labels:["Jan","Feb","March","April","May","June","July"],datasets:[{label:"Dataset 1",data:[65,59,NaN,48,56,57,40],borderColor:t[0],spanGaps:!0,segment:{borderColor:function(o){return d(o,"rgb(0,0,0,0.2)")||p(o,"rgb(192,75,75)")},borderDash:function(o){return d(o,[6,6])}}}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1,position:"top"}},scales:{x:{stacked:!0,grid:{display:!1}},y:{stacked:!0,grid:{display:!1}}}}});this.charts.push(r)},l.prototype.steppedExample=function(){var e=document.getElementById("stepped-example"),a=e.getAttribute("data-colors"),t=a?a.split(","):this.defaultColors,i=e.getContext("2d"),r=new Chart(i,{type:"line",data:{labels:["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6"],datasets:[{label:"Dataset 1",data:[12,-19,14,-15,14,-8],borderColor:t[0],fill:!1,stepped:!0}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{intersect:!1,axis:"x"},plugins:{legend:{display:!1,position:"top"}},scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}});this.charts.push(r)},l.prototype.init=function(){var e=this;Chart.defaults.font.family='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',Chart.defaults.color="#8391a2",Chart.defaults.scale.grid.color="#8391a2",this.interpolationExample(),this.lineExample(),this.multiAxesExample(),this.pointStylingExample(),this.lineSegmentExample(),this.steppedExample(),s(window).on("resizeEnd",function(a){s.each(e.charts,function(t,i){try{i.destroy()}catch{}}),e.interpolationExample(),e.lineExample(),e.multiAxesExample(),e.pointStylingExample(),e.lineSegmentExample(),e.steppedExample()}),s(window).resize(function(){this.resizeTO&&clearTimeout(this.resizeTO),this.resizeTO=setTimeout(function(){s(this).trigger("resizeEnd")},500)})},s.ChartJs=new l,s.ChartJs.Constructor=l})(window.jQuery),function(s){s.ChartJs.init()}(window.jQuery);function n(s,l){var e=parseInt(s.slice(1,3),16),a=parseInt(s.slice(3,5),16),t=parseInt(s.slice(5,7),16);return l?"rgba("+e+", "+a+", "+t+", "+l+")":"rgb("+e+", "+a+", "+t+")"}function d(s,l){return s.p0.skip||s.p1.skip?l:void 0}function p(s,l){return s.p0.parsed.y>s.p1.parsed.y?l:void 0}
