import{r as pt}from"./jquery-74901ac3.js";import{r as dt}from"./jquery.dataTables-ca871c02.js";import{r as it}from"./dataTables.buttons-63322990.js";import"./_commonjsHelpers-23102255.js";import"./jquery.dataTables-b5770b45.js";import"./jquery-1d19d72e.js";var st={exports:{}};/*!
 * HTML5 export buttons for Buttons and DataTables.
 * © SpryMedia Ltd - datatables.net/license
 *
 * FileSaver.js (1.3.3) - MIT license
 * Copyright © 2016 Eli Grey - http://eligrey.com
 */(function(G,ft){(function(i){var w,O;w=pt(),O=function(z,D){D.fn.dataTable||dt(z,D),D.fn.dataTable.Buttons||it(z,D)},typeof window>"u"?G.exports=function(z,D,T,X){return z=z||window,D=D||w(z),O(z,D),i(D,z,z.document)}:(O(window,w),G.exports=i(w,window,window.document))})(function(i,w,O,z,D,T){var X,Q,$=i.fn.dataTable;function J(){return X||w.JSZip}function K(){return Q||w.pdfMake}$.Buttons.pdfMake=function(t){if(!t)return K();Q=t},$.Buttons.jszip=function(t){if(!t)return J();X=t};function Y(t){var r="Sheet1";return r=t.sheetName?t.sheetName.replace(/[\[\]\*\/\\\?\:]/g,""):r}function tt(t,r){for(var m=ot(r),e=t.buttons.exportData(r.exportOptions),a=r.fieldBoundary,s=r.fieldSeparator,d=new RegExp(a,"g"),I=r.escapeChar!==T?r.escapeChar:"\\",y=function(N){for(var f="",F=0,x=N.length;F<x;F++)0<F&&(f+=s),f+=a?a+(""+N[F]).replace(d,I+a)+a:N[F];return f},t=r.header?y(e.header)+m:"",r=r.footer&&e.footer?m+y(e.footer):"",c=[],u=0,l=e.body.length;u<l;u++)c.push(y(e.body[u]));return{str:t+c.join(m)+r,rows:c.length}}function et(){var t;return navigator.userAgent.indexOf("Safari")!==-1&&navigator.userAgent.indexOf("Chrome")===-1&&navigator.userAgent.indexOf("Opera")===-1&&!!((t=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/))&&1<t.length&&+t[1]<603.1)}var H=function(t){var r,m,e,a,s,d,I,y,c,u,l;if(!(t===void 0||typeof navigator<"u"&&/MSIE [1-9]\./.test(navigator.userAgent)))return l=t.document,r=function(){return t.URL||t.webkitURL||t},m=l.createElementNS("http://www.w3.org/1999/xhtml","a"),e="download"in m,a=/constructor/i.test(t.HTMLElement)||t.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent),d=function(o){(t.setImmediate||t.setTimeout)(function(){throw o},0)},I=4e4,y=function(o){setTimeout(function(){typeof o=="string"?r().revokeObjectURL(o):o.remove()},I)},c=function(o){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob([String.fromCharCode(65279),o],{type:o.type}):o},l=(u=function(o,k,j){j||(o=c(o));var f,F,x=this,j=o.type==="application/octet-stream",q=function(){for(var h=x,R="writestart progress write writeend".split(" "),_=void 0,U=(R=[].concat(R)).length;U--;){var M=h["on"+R[U]];if(typeof M=="function")try{M.call(h,_||h)}catch(n){d(n)}}};x.readyState=x.INIT,e?(f=r().createObjectURL(o),setTimeout(function(){var h,R;m.href=f,m.download=k,h=m,R=new MouseEvent("click"),h.dispatchEvent(R),q(),y(f),x.readyState=x.DONE})):(s||j&&a)&&t.FileReader?((F=new FileReader).onloadend=function(){var h=s?F.result:F.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(h,"_blank")||(t.location.href=h),h=T,x.readyState=x.DONE,q()},F.readAsDataURL(o),x.readyState=x.INIT):(f=f||r().createObjectURL(o),!j&&t.open(f,"_blank")||(t.location.href=f),x.readyState=x.DONE,q(),y(f))}).prototype,typeof navigator<"u"&&navigator.msSaveOrOpenBlob?function(o,k,N){return k=k||o.name||"download",N||(o=c(o)),navigator.msSaveOrOpenBlob(o,k)}:(l.abort=function(){},l.readyState=l.INIT=0,l.WRITING=1,l.DONE=2,l.error=l.onwritestart=l.onprogress=l.onwrite=l.onabort=l.onerror=l.onwriteend=null,function(o,k,N){return new u(o,k||o.name||"download",N)})}(typeof self<"u"&&self||w!==void 0&&w||this.content),ot=($.fileSave=H,function(t){return t.newline||(navigator.userAgent.match(/Windows/)?`\r
`:`
`)});function W(t){for(var r="A".charCodeAt(0),m="Z".charCodeAt(0)-r+1,e="";0<=t;)e=String.fromCharCode(t%m+r)+e,t=Math.floor(t/m)-1;return e}try{var V,Z=new XMLSerializer}catch{}function B(t,r,m){var e=t.createElement(r);return m&&(m.attr&&i(e).attr(m.attr),m.children&&i.each(m.children,function(a,s){e.appendChild(s)}),m.text!==null&&m.text!==T&&e.appendChild(t.createTextNode(m.text))),e}var lt={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},rt=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(t){return t/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(t){return t/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^\-?[\d,]+$/,style:63},{match:/^\-?[\d,]+\.\d{2}$/,style:64},{match:/^[\d]{4}\-[01][\d]\-[0123][\d]$/,style:67,fmt:function(t){return Math.round(25569+Date.parse(t)/864e5)}}];return $.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(t){return t.i18n("buttons.copy","Copy")},action:function(t,r,m,e){this.processing(!0);var a=this,s=tt(r,e),l=r.buttons.exportInfo(e),y=ot(e),d=s.str,I=i("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0}),y=(l.title&&(d=l.title+y+y+d),l.messageTop&&(d=l.messageTop+y+y+d),l.messageBottom&&(d=d+y+y+l.messageBottom),e.customize&&(d=e.customize(d,e,r)),i("<textarea readonly/>").val(d).appendTo(I));if(O.queryCommandSupported("copy")){I.appendTo(r.table().container()),y[0].focus(),y[0].select();try{var c=O.execCommand("copy");if(I.remove(),c)return r.buttons.info(r.i18n("buttons.copyTitle","Copy to clipboard"),r.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},s.rows),2e3),void this.processing(!1)}catch{}}function u(){o.off("click.buttons-copy"),i(O).off(".buttons-copy"),r.buttons.info(!1)}var l=i("<span>"+r.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(I),o=(r.buttons.info(r.i18n("buttons.copyTitle","Copy to clipboard"),l,0),y[0].focus(),y[0].select(),i(l).closest(".dt-button-info"));o.on("click.buttons-copy",u),i(O).on("keydown.buttons-copy",function(k){k.keyCode===27&&(u(),a.processing(!1))}).on("copy.buttons-copy cut.buttons-copy",function(){u(),a.processing(!1)})},exportOptions:{},fieldSeparator:"	",fieldBoundary:"",header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"},$.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return w.FileReader!==T&&w.Blob},text:function(t){return t.i18n("buttons.csv","CSV")},action:function(t,r,m,e){this.processing(!0);var a=tt(r,e).str,s=r.buttons.exportInfo(e),d=e.charset;e.customize&&(a=e.customize(a,e,r)),d=d!==!1?(d=d||O.characterSet||O.charset)&&";charset="+d:"",e.bom&&(a=String.fromCharCode(65279)+a),H(new Blob([a],{type:"text/csv"+d}),s.filename,!0),this.processing(!1)},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1},$.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return w.FileReader!==T&&J()!==T&&!et()&&Z},text:function(t){return t.i18n("buttons.excel","Excel")},action:function(t,r,m,e){this.processing(!0);function a(n){return n=lt[n],i.parseXML(n)}function s(n){c=B(o,"row",{attr:{r:y=l+1}});for(var p=0,v=n.length;p<v;p++){var A=W(p)+""+y,C=null;if(n[p]===null||n[p]===T||n[p]===""){if(e.createEmptyCells!==!0)continue;n[p]=""}var S=n[p];n[p]=typeof n[p].trim=="function"?n[p].trim():n[p];for(var b=0,P=rt.length;b<P;b++){var g=rt[b];if(n[p].match&&!n[p].match(/^0\d+/)&&n[p].match(g.match)){var L=n[p].replace(/[^\d\.\-]/g,"");g.fmt&&(L=g.fmt(L)),C=B(o,"c",{attr:{r:A,s:g.style},children:[B(o,"v",{text:L})]});break}}C=C||(typeof n[p]=="number"||n[p].match&&n[p].match(/^-?\d+(\.\d+)?([eE]\-?\d+)?$/)&&!n[p].match(/^0\d+/)?B(o,"c",{attr:{t:"n",r:A},children:[B(o,"v",{text:n[p]})]}):(S=S.replace?S.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""):S,B(o,"c",{attr:{t:"inlineStr",r:A},children:{row:B(o,"is",{children:{row:B(o,"t",{text:S,attr:{"xml:space":"preserve"}})}})}}))),c.appendChild(C)}k.appendChild(c),l++}function d(n,p){var v=i("mergeCells",o);v[0].appendChild(B(o,"mergeCell",{attr:{ref:"A"+n+":"+W(p)+n}})),v.attr("count",parseFloat(v.attr("count"))+1),i("row:eq("+(n-1)+") c",o).attr("s","51")}var I,y,c,u=this,l=0,o=a("xl/worksheets/sheet1.xml"),k=o.getElementsByTagName("sheetData")[0],N={_rels:{".rels":a("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":a("xl/_rels/workbook.xml.rels")},"workbook.xml":a("xl/workbook.xml"),"styles.xml":a("xl/styles.xml"),worksheets:{"sheet1.xml":o}},"[Content_Types].xml":a("[Content_Types].xml")},f=r.buttons.exportData(e.exportOptions),F=(e.customizeData&&e.customizeData(f),r.buttons.exportInfo(e));F.title&&(s([F.title]),d(l,f.header.length-1)),F.messageTop&&(s([F.messageTop]),d(l,f.header.length-1)),e.header&&(s(f.header),i("row:last c",o).attr("s","2"));for(var U=l,x=0,j=f.body.length;x<j;x++)s(f.body[x]);I=l,e.footer&&f.footer&&(s(f.footer),i("row:last c",o).attr("s","2")),F.messageBottom&&(s([F.messageBottom]),d(l,f.header.length-1));var q=B(o,"cols");i("worksheet",o).prepend(q);for(var h=0,R=f.header.length;h<R;h++)q.appendChild(B(o,"col",{attr:{min:h+1,max:h+1,width:function(n,p){var v=n.header[p].length;n.footer&&n.footer[p].length>v&&(v=n.footer[p].length);for(var A=0,C=n.body.length;A<C;A++){var S,b=n.body[A][p];if(40<(v=v<(S=((b=b!==null&&b!==T?b.toString():"").indexOf(`
`)!==-1?((S=b.split(`
`)).sort(function(P,g){return g.length-P.length}),S[0]):b).length)?S:v))return 54}return 6<(v*=1.35)?v:6}(f,h),customWidth:1}}));var _=N.xl["workbook.xml"];i("sheets sheet",_).attr("name",Y(e)),e.autoFilter&&(i("mergeCells",o).before(B(o,"autoFilter",{attr:{ref:"A"+U+":"+W(f.header.length-1)+I}})),i("definedNames",_).append(B(_,"definedName",{attr:{name:"_xlnm._FilterDatabase",localSheetId:"0",hidden:1},text:Y(e)+"!$A$"+U+":"+W(f.header.length-1)+I}))),e.customize&&e.customize(N,e,r),i("mergeCells",o).children().length===0&&i("mergeCells",o).remove();var _=new(J()),U={compression:"DEFLATE",type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},M=(function n(p,v){V===T&&(V=Z.serializeToString(new w.DOMParser().parseFromString(lt["xl/worksheets/sheet1.xml"],"text/xml")).indexOf("xmlns:r")===-1),i.each(v,function(A,C){if(i.isPlainObject(C))n(p.folder(A),C);else{if(V){for(var S,b=C.childNodes[0],P=[],g=b.attributes.length-1;0<=g;g--){var L=b.attributes[g].nodeName,at=b.attributes[g].nodeValue;L.indexOf(":")!==-1&&(P.push({name:L,value:at}),b.removeAttribute(L))}for(g=0,S=P.length;g<S;g++){var nt=C.createAttribute(P[g].name.replace(":","_dt_b_namespace_token_"));nt.value=P[g].value,b.setAttributeNode(nt)}}var E=Z.serializeToString(C),E=(E=V?(E=(E=E.indexOf("<?xml")===-1?'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+E:E).replace(/_dt_b_namespace_token_/g,":")).replace(/xmlns:NS[\d]+="" NS[\d]+:/g,""):E).replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>");p.file(A,E)}})}(_,N),F.filename);175<M&&(M=M.substr(0,175)),_.generateAsync?_.generateAsync(U).then(function(n){H(n,M),u.processing(!1)}):(H(_.generate(U),M),this.processing(!1))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*",createEmptyCells:!1,autoFilter:!1,sheetName:""},$.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return w.FileReader!==T&&K()},text:function(t){return t.i18n("buttons.pdf","PDF")},action:function(t,u,m,e){this.processing(!0);var a=u.buttons.exportData(e.exportOptions),s=u.buttons.exportInfo(e),d=[];e.header&&d.push(i.map(a.header,function(l){return{text:typeof l=="string"?l:l+"",style:"tableHeader"}}));for(var I=0,y=a.body.length;I<y;I++)d.push(i.map(a.body[I],function(l){return{text:typeof(l=l!==null&&l!==T?l:"")=="string"?l:l+"",style:I%2?"tableBodyEven":"tableBodyOdd"}}));e.footer&&a.footer&&d.push(i.map(a.footer,function(l){return{text:typeof l=="string"?l:l+"",style:"tableFooter"}}));var c={pageSize:e.pageSize,pageOrientation:e.orientation,content:[{table:{headerRows:1,body:d},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}},u=(s.messageTop&&c.content.unshift({text:s.messageTop,style:"message",margin:[0,0,0,12]}),s.messageBottom&&c.content.push({text:s.messageBottom,style:"message",margin:[0,0,0,12]}),s.title&&c.content.unshift({text:s.title,style:"title",margin:[0,0,0,12]}),e.customize&&e.customize(c,e,u),K().createPdf(c));e.download!=="open"||et()?u.download(s.filename):u.open(),this.processing(!1)},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,messageTop:"*",messageBottom:"*",customize:null,download:"download"},$})})(st);
