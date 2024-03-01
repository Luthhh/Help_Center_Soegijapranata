import{a as W,g as G}from"./_commonjsHelpers-23102255.js";import{r as J}from"./jquery-74901ac3.js";import{D as b}from"./jquery.dataTables-b5770b45.js";var Q=J();const Z=W(Q);/*! Buttons for DataTables 2.4.2
 * © SpryMedia Ltd - datatables.net/license
 */let r=Z;var U=0,V=0,H=b.ext.buttons,q=null;function E(t,e,n){r.fn.animate?t.stop().fadeIn(e,n):(t.css("display","block"),n&&n.call(t))}function F(t,e,n){r.fn.animate?t.stop().fadeOut(e,n):(t.css("display","none"),n&&n.call(t))}var x=function(t,e){if(!(this instanceof x))return function(n){return new x(n,t).container()};typeof e>"u"&&(e={}),e===!0&&(e={}),Array.isArray(e)&&(e={buttons:e}),this.c=r.extend(!0,{},x.defaults,e),e.buttons&&(this.c.buttons=e.buttons),this.s={dt:new b.Api(t),buttons:[],listenKeys:"",namespace:"dtb"+U++},this.dom={container:r("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)},this._constructor()};r.extend(x.prototype,{action:function(t,e){var n=this._nodeToButton(t);return e===void 0?n.conf.action:(n.conf.action=e,this)},active:function(t,e){var n=this._nodeToButton(t),i=this.c.dom.button.active,a=r(n.node);return n.inCollection&&this.c.dom.collection.button&&this.c.dom.collection.button.active!==void 0&&(i=this.c.dom.collection.button.active),e===void 0?a.hasClass(i):(a.toggleClass(i,e===void 0?!0:e),this)},add:function(t,e,n){var i=this.s.buttons;if(typeof e=="string"){for(var a=e.split("-"),s=this.s,c=0,u=a.length-1;c<u;c++)s=s.buttons[a[c]*1];i=s.buttons,e=a[a.length-1]*1}return this._expandButton(i,t,t!==void 0?t.split:void 0,(t===void 0||t.split===void 0||t.split.length===0)&&s!==void 0,!1,e),(n===void 0||n===!0)&&this._draw(),this},collectionRebuild:function(t,e){var n=this._nodeToButton(t);if(e!==void 0){var i;for(i=n.buttons.length-1;i>=0;i--)this.remove(n.buttons[i].node);for(n.conf.prefixButtons&&e.unshift.apply(e,n.conf.prefixButtons),n.conf.postfixButtons&&e.push.apply(e,n.conf.postfixButtons),i=0;i<e.length;i++){var a=e[i];this._expandButton(n.buttons,a,a!==void 0&&a.config!==void 0&&a.config.split!==void 0,!0,a.parentConf!==void 0&&a.parentConf.split!==void 0,null,a.parentConf)}}this._draw(n.collection,n.buttons)},container:function(){return this.dom.container},disable:function(t){var e=this._nodeToButton(t);return r(e.node).addClass(this.c.dom.button.disabled).prop("disabled",!0),this},destroy:function(){r("body").off("keyup."+this.s.namespace);var t=this.s.buttons.slice(),e,n;for(e=0,n=t.length;e<n;e++)this.remove(t[e].node);this.dom.container.remove();var i=this.s.dt.settings()[0];for(e=0,n=i.length;e<n;e++)if(i.inst===this){i.splice(e,1);break}return this},enable:function(t,e){if(e===!1)return this.disable(t);var n=this._nodeToButton(t);return r(n.node).removeClass(this.c.dom.button.disabled).prop("disabled",!1),this},index:function(t,e,n){e||(e="",n=this.s.buttons);for(var i=0,a=n.length;i<a;i++){var s=n[i].buttons;if(n[i].node===t)return e+i;if(s&&s.length){var c=this.index(t,i+"-",s);if(c!==null)return c}}return null},name:function(){return this.c.name},node:function(t){if(!t)return this.dom.container;var e=this._nodeToButton(t);return r(e.node)},processing:function(t,e){var n=this.s.dt,i=this._nodeToButton(t);return e===void 0?r(i.node).hasClass("processing"):(r(i.node).toggleClass("processing",e),r(n.table().node()).triggerHandler("buttons-processing.dt",[e,n.button(t),n,r(t),i.conf]),this)},remove:function(t){var e=this._nodeToButton(t),n=this._nodeToHost(t),i=this.s.dt;if(e.buttons.length)for(var a=e.buttons.length-1;a>=0;a--)this.remove(e.buttons[a].node);e.conf.destroying=!0,e.conf.destroy&&e.conf.destroy.call(i.button(t),i,r(t),e.conf),this._removeKey(e.conf),r(e.node).remove();var s=r.inArray(e,n);return n.splice(s,1),this},text:function(t,e){var n=this._nodeToButton(t),i=n.textNode,a=this.s.dt,s=r(n.node),c=function(u){return typeof u=="function"?u(a,s,n.conf):u};return e===void 0?c(n.conf.text):(n.conf.text=e,i.html(c(e)),this)},_constructor:function(){var t=this,e=this.s.dt,n=e.settings()[0],i=this.c.buttons;n._buttons||(n._buttons=[]),n._buttons.push({inst:this,name:this.c.name});for(var a=0,s=i.length;a<s;a++)this.add(i[a]);e.on("destroy",function(c,u){u===n&&t.destroy()}),r("body").on("keyup."+this.s.namespace,function(c){if(!document.activeElement||document.activeElement===document.body){var u=String.fromCharCode(c.keyCode).toLowerCase();t.s.listenKeys.toLowerCase().indexOf(u)!==-1&&t._keypress(u,c)}})},_addKey:function(t){t.key&&(this.s.listenKeys+=r.isPlainObject(t.key)?t.key.key:t.key)},_draw:function(t,e){t||(t=this.dom.container,e=this.s.buttons),t.children().detach();for(var n=0,i=e.length;n<i;n++)t.append(e[n].inserter),t.append(" "),e[n].buttons&&e[n].buttons.length&&this._draw(e[n].collection,e[n].buttons)},_expandButton:function(t,e,n,i,a,s,c){var u=this.s.dt,l=!1,f=this.c.dom.collection,o=Array.isArray(e)?e:[e];e===void 0&&(o=Array.isArray(n)?n:[n]);for(var p=0,g=o.length;p<g;p++){var h=this._resolveExtends(o[p]);if(h){if(l=!!(h.config&&h.config.split),Array.isArray(h)){this._expandButton(t,h,d!==void 0&&d.conf!==void 0?d.conf.split:void 0,i,c!==void 0&&c.split!==void 0,s,c);continue}var d=this._buildButton(h,i,h.split!==void 0||h.config!==void 0&&h.config.split!==void 0,a);if(d){if(s!=null?(t.splice(s,0,d),s++):t.push(d),d.conf.buttons&&(d.collection=r("<"+f.container.content.tag+"/>"),d.conf._collection=d.collection,r(d.node).append(f.action.dropHtml),this._expandButton(d.buttons,d.conf.buttons,d.conf.split,!l,l,s,d.conf)),d.conf.split){d.collection=r("<"+f.container.tag+"/>"),d.conf._collection=d.collection;for(var T=0;T<d.conf.split.length;T++){var y=d.conf.split[T];typeof y=="object"&&(y.parent=c,y.collectionLayout===void 0&&(y.collectionLayout=d.conf.collectionLayout),y.dropup===void 0&&(y.dropup=d.conf.dropup),y.fade===void 0&&(y.fade=d.conf.fade))}this._expandButton(d.buttons,d.conf.buttons,d.conf.split,!l,l,s,d.conf)}d.conf.parent=c,h.init&&h.init.call(u.button(d.node),u,r(d.node),h)}}}},_buildButton:function(t,e,n,i){var a=this.c.dom,s,c=this.s.dt,u=function(m){return typeof m=="function"?m(c,o,t):m},l=r.extend(!0,{},a.button);if(e&&n&&a.collection.split?r.extend(!0,l,a.collection.split.action):i||e?r.extend(!0,l,a.collection.button):n&&r.extend(!0,l,a.split.button),t.spacer){var f=r("<"+l.spacer.tag+"/>").addClass("dt-button-spacer "+t.style+" "+l.spacer.className).html(u(t.text));return{conf:t,node:f,inserter:f,buttons:[],inCollection:e,isSplit:n,collection:null,textNode:f}}if(t.available&&!t.available(c,t)&&!t.hasOwnProperty("html"))return!1;var o;if(t.hasOwnProperty("html"))o=r(t.html);else{var p=function(m,w,v,A){A.action.call(w.button(v),m,w,v,A),r(w.table().node()).triggerHandler("buttons-action.dt",[w.button(v),w,v,A])},g=t.tag||l.tag,h=t.clickBlurs===void 0?!0:t.clickBlurs;if(o=r("<"+g+"/>").addClass(l.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(m){m.preventDefault(),!o.hasClass(l.disabled)&&t.action&&p(m,c,o,t),h&&o.trigger("blur")}).on("keypress.dtb",function(m){m.keyCode===13&&(m.preventDefault(),!o.hasClass(l.disabled)&&t.action&&p(m,c,o,t))}),g.toLowerCase()==="a"&&o.attr("href","#"),g.toLowerCase()==="button"&&o.attr("type","button"),l.liner.tag){var d=r("<"+l.liner.tag+"/>").html(u(t.text)).addClass(l.liner.className);l.liner.tag.toLowerCase()==="a"&&d.attr("href","#"),o.append(d),s=d}else o.html(u(t.text)),s=o;t.enabled===!1&&o.addClass(l.disabled),t.className&&o.addClass(t.className),t.titleAttr&&o.attr("title",u(t.titleAttr)),t.attr&&o.attr(t.attr),t.namespace||(t.namespace=".dt-button-"+V++),t.config!==void 0&&t.config.split&&(t.split=t.config.split)}var T=this.c.dom.buttonContainer,y;T&&T.tag?y=r("<"+T.tag+"/>").addClass(T.className).append(o):y=o,this._addKey(t),this.c.buttonCreated&&(y=this.c.buttonCreated(t,y));var k;if(n){var _=e?r.extend(!0,this.c.dom.split,this.c.dom.collection.split):this.c.dom.split,N=_.wrapper;k=r("<"+N.tag+"/>").addClass(N.className).append(o);var C=r.extend(t,{align:_.dropdown.align,attr:{"aria-haspopup":"dialog","aria-expanded":!1},className:_.dropdown.className,closeButton:!1,splitAlignClass:_.dropdown.splitAlignClass,text:_.dropdown.text});this._addKey(C);var O=function(m,w,v,A){H.split.action.call(w.button(k),m,w,v,A),r(w.table().node()).triggerHandler("buttons-action.dt",[w.button(v),w,v,A]),v.attr("aria-expanded",!0)},B=r('<button class="'+_.dropdown.className+' dt-button"></button>').html(_.dropdown.dropHtml).on("click.dtb",function(m){m.preventDefault(),m.stopPropagation(),B.hasClass(l.disabled)||O(m,c,B,C),h&&B.trigger("blur")}).on("keypress.dtb",function(m){m.keyCode===13&&(m.preventDefault(),B.hasClass(l.disabled)||O(m,c,B,C))});t.split.length===0&&B.addClass("dtb-hide-drop"),k.append(B).attr(C.attr)}return{conf:t,node:n?k.get(0):o.get(0),inserter:n?k:y,buttons:[],inCollection:e,isSplit:n,inSplit:i,collection:null,textNode:s}},_nodeToButton:function(t,e){e||(e=this.s.buttons);for(var n=0,i=e.length;n<i;n++){if(e[n].node===t)return e[n];if(e[n].buttons.length){var a=this._nodeToButton(t,e[n].buttons);if(a)return a}}},_nodeToHost:function(t,e){e||(e=this.s.buttons);for(var n=0,i=e.length;n<i;n++){if(e[n].node===t)return e;if(e[n].buttons.length){var a=this._nodeToHost(t,e[n].buttons);if(a)return a}}},_keypress:function(t,e){if(!e._buttonsHandled){var n=function(a,s){if(a.key){if(a.key===t)e._buttonsHandled=!0,r(s).click();else if(r.isPlainObject(a.key)){if(a.key.key!==t||a.key.shiftKey&&!e.shiftKey||a.key.altKey&&!e.altKey||a.key.ctrlKey&&!e.ctrlKey||a.key.metaKey&&!e.metaKey)return;e._buttonsHandled=!0,r(s).click()}}},i=function(a){for(var s=0,c=a.length;s<c;s++)n(a[s].conf,a[s].node),a[s].buttons.length&&i(a[s].buttons)};i(this.s.buttons)}},_removeKey:function(t){if(t.key){var e=r.isPlainObject(t.key)?t.key.key:t.key,n=this.s.listenKeys.split(""),i=r.inArray(e,n);n.splice(i,1),this.s.listenKeys=n.join("")}},_resolveExtends:function(t){var e=this,n=this.s.dt,i,a,s=function(o){for(var p=0;!r.isPlainObject(o)&&!Array.isArray(o);){if(o===void 0)return;if(typeof o=="function"){if(o=o.call(e,n,t),!o)return!1}else if(typeof o=="string"){if(!H[o])return{html:o};o=H[o]}if(p++,p>30)throw"Buttons: Too many iterations"}return Array.isArray(o)?o:r.extend({},o)};for(t=s(t);t&&t.extend;){if(!H[t.extend])throw"Cannot extend unknown button type: "+t.extend;var c=s(H[t.extend]);if(Array.isArray(c))return c;if(!c)return!1;var u=c.className;t.config!==void 0&&c.config!==void 0&&(t.config=r.extend({},c.config,t.config)),t=r.extend({},c,t),u&&t.className!==u&&(t.className=u+" "+t.className),t.extend=c.extend}var l=t.postfixButtons;if(l)for(t.buttons||(t.buttons=[]),i=0,a=l.length;i<a;i++)t.buttons.push(l[i]);var f=t.prefixButtons;if(f)for(t.buttons||(t.buttons=[]),i=0,a=f.length;i<a;i++)t.buttons.splice(i,0,f[i]);return t},_popover:function(t,e,n,i){var a=e,s=this.c,c=!1,u=r.extend({align:"button-left",autoClose:!1,background:!0,backgroundClassName:"dt-button-background",closeButton:!0,containerClassName:s.dom.collection.container.className,contentClassName:s.dom.collection.container.content.className,collectionLayout:"",collectionTitle:"",dropup:!1,fade:400,popoverTitle:"",rightAlignClassName:"dt-button-right",tag:s.dom.collection.container.tag},n),l=u.tag+"."+u.containerClassName.replace(/ /g,"."),f=e.node(),o=function(){c=!0,F(r(l),u.fade,function(){r(this).detach()}),r(a.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes()).attr("aria-expanded","false"),r("div.dt-button-background").off("click.dtb-collection"),x.background(!1,u.backgroundClassName,u.fade,f),r(window).off("resize.resize.dtb-collection"),r("body").off(".dtb-collection"),a.off("buttons-action.b-internal"),a.off("destroy")};if(t===!1){o();return}var p=r(a.buttons('[aria-haspopup="dialog"][aria-expanded="true"]').nodes());p.length&&(f.closest(l).length&&(f=p.eq(0)),o());var g=r(".dt-button",t).length,h="";g===3?h="dtb-b3":g===2?h="dtb-b2":g===1&&(h="dtb-b1");var d=r("<"+u.tag+"/>").addClass(u.containerClassName).addClass(u.collectionLayout).addClass(u.splitAlignClass).addClass(h).css("display","none").attr({"aria-modal":!0,role:"dialog"});t=r(t).addClass(u.contentClassName).attr("role","menu").appendTo(d),f.attr("aria-expanded","true"),f.parents("body")[0]!==document.body&&(f=document.body.lastChild),u.popoverTitle?d.prepend('<div class="dt-button-collection-title">'+u.popoverTitle+"</div>"):u.collectionTitle&&d.prepend('<div class="dt-button-collection-title">'+u.collectionTitle+"</div>"),u.closeButton&&d.prepend('<div class="dtb-popover-close">&times;</div>').addClass("dtb-collection-closeable"),E(d.insertAfter(f),u.fade);var T=r(e.table().container()),y=d.css("position");if((u.span==="container"||u.align==="dt-container")&&(f=f.parent(),d.css("width",T.width())),y==="absolute"){var k=r(f[0].offsetParent),_=f.position(),N=f.offset(),C=k.offset(),O=k.position(),B=window.getComputedStyle(k[0]);C.height=k.outerHeight(),C.width=k.width()+parseFloat(B.paddingLeft),C.right=C.left+C.width,C.bottom=C.top+C.height;var m=_.top+f.outerHeight(),w=_.left;d.css({top:m,left:w}),B=window.getComputedStyle(d[0]);var v=d.offset();v.height=d.outerHeight(),v.width=d.outerWidth(),v.right=v.left+v.width,v.bottom=v.top+v.height,v.marginTop=parseFloat(B.marginTop),v.marginBottom=parseFloat(B.marginBottom),u.dropup&&(m=_.top-v.height-v.marginTop-v.marginBottom),(u.align==="button-right"||d.hasClass(u.rightAlignClassName))&&(w=_.left-v.width+f.outerWidth()),(u.align==="dt-container"||u.align==="container")&&(w<_.left&&(w=-_.left),w+v.width>C.width&&(w=C.width-v.width)),O.left+w+v.width>r(window).width()&&(w=r(window).width()-v.width-O.left),N.left+w<0&&(w=-N.left),O.top+m+v.height>r(window).height()+r(window).scrollTop()&&(m=_.top-v.height-v.marginTop-v.marginBottom),O.top+m<r(window).scrollTop()&&(m=_.top+f.outerHeight()),d.css({top:m,left:w})}else{var y=function(){var D=r(window).height()/2,K=d.height()/2;K>D&&(K=D),d.css("marginTop",K*-1)};y(),r(window).on("resize.dtb-collection",function(){y()})}u.background&&x.background(!0,u.backgroundClassName,u.fade,u.backgroundHost||f),r("div.dt-button-background").on("click.dtb-collection",function(){}),u.autoClose&&setTimeout(function(){a.on("buttons-action.b-internal",function(A,D,K,R){R[0]!==f[0]&&o()})},0),r(d).trigger("buttons-popover.dt"),a.on("destroy",o),setTimeout(function(){c=!1,r("body").on("click.dtb-collection",function(A){if(!c){var D=r.fn.addBack?"addBack":"andSelf",K=r(A.target).parent()[0];(!r(A.target).parents()[D]().filter(t).length&&!r(K).hasClass("dt-buttons")||r(A.target).hasClass("dt-button-background"))&&o()}}).on("keyup.dtb-collection",function(A){A.keyCode===27&&o()}).on("keydown.dtb-collection",function(A){var D=r("a, button",t),K=document.activeElement;A.keyCode===9&&(D.index(K)===-1?(D.first().focus(),A.preventDefault()):A.shiftKey?K===D[0]&&(D.last().focus(),A.preventDefault()):K===D.last()[0]&&(D.first().focus(),A.preventDefault()))})},0)}});x.background=function(t,e,n,i){n===void 0&&(n=400),i||(i=document.body),t?E(r("<div/>").addClass(e).css("display","none").insertAfter(i),n):F(r("div."+e),n,function(){r(this).removeClass(e).remove()})};x.instanceSelector=function(t,e){if(t==null)return r.map(e,function(s){return s.inst});var n=[],i=r.map(e,function(s){return s.name}),a=function(s){if(Array.isArray(s)){for(var c=0,u=s.length;c<u;c++)a(s[c]);return}if(typeof s=="string")if(s.indexOf(",")!==-1)a(s.split(","));else{var l=r.inArray(s.trim(),i);l!==-1&&n.push(e[l].inst)}else typeof s=="number"?n.push(e[s].inst):typeof s=="object"&&n.push(s)};return a(t),n};x.buttonSelector=function(t,e){for(var n=[],i=function(l,f,o){for(var p,g,h=0,d=f.length;h<d;h++)p=f[h],p&&(g=o!==void 0?o+h:h+"",l.push({node:p.node,name:p.conf.name,idx:g}),p.buttons&&i(l,p.buttons,g+"-"))},a=function(l,f){var o,p,g=[];i(g,f.s.buttons);var h=r.map(g,function(_){return _.node});if(Array.isArray(l)||l instanceof r){for(o=0,p=l.length;o<p;o++)a(l[o],f);return}if(l==null||l==="*")for(o=0,p=g.length;o<p;o++)n.push({inst:f,node:g[o].node});else if(typeof l=="number")f.s.buttons[l]&&n.push({inst:f,node:f.s.buttons[l].node});else if(typeof l=="string")if(l.indexOf(",")!==-1){var d=l.split(",");for(o=0,p=d.length;o<p;o++)a(d[o].trim(),f)}else if(l.match(/^\d+(\-\d+)*$/)){var T=r.map(g,function(_){return _.idx});n.push({inst:f,node:g[r.inArray(l,T)].node})}else if(l.indexOf(":name")!==-1){var y=l.replace(":name","");for(o=0,p=g.length;o<p;o++)g[o].name===y&&n.push({inst:f,node:g[o].node})}else r(h).filter(l).each(function(){n.push({inst:f,node:this})});else if(typeof l=="object"&&l.nodeName){var k=r.inArray(l,h);k!==-1&&n.push({inst:f,node:h[k]})}},s=0,c=t.length;s<c;s++){var u=t[s];a(e,u)}return n};x.stripData=function(t,e){return typeof t!="string"||(t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),t=t.replace(/<!\-\-.*?\-\->/g,""),(!e||e.stripHtml)&&(t=t.replace(/<[^>]*>/g,"")),(!e||e.trim)&&(t=t.replace(/^\s+|\s+$/g,"")),(!e||e.stripNewlines)&&(t=t.replace(/\n/g," ")),(!e||e.decodeEntities)&&(q?t=q(t):(M.innerHTML=t,t=M.value))),t};x.entityDecoder=function(t){q=t};x.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{action:{dropHtml:'<span class="dt-button-down-arrow">&#x25BC;</span>'},container:{className:"dt-button-collection",content:{className:"",tag:"div"},tag:"div"}},button:{tag:"button",className:"dt-button",active:"dt-button-active",disabled:"disabled",spacer:{className:"dt-button-spacer",tag:"span"},liner:{tag:"span",className:""}},split:{action:{className:"dt-button-split-drop-button dt-button",tag:"button"},dropdown:{align:"split-right",className:"dt-button-split-drop",dropHtml:'<span class="dt-button-down-arrow">&#x25BC;</span>',splitAlignClass:"dt-button-split-left",tag:"button"},wrapper:{className:"dt-button-split",tag:"div"}}}};x.version="2.4.2";r.extend(H,{collection:{text:function(t){return t.i18n("buttons.collection","Collection")},className:"buttons-collection",closeButton:!1,init:function(t,e,n){e.attr("aria-expanded",!1)},action:function(t,e,n,i){i._collection.parents("body").length?this.popover(!1,i):this.popover(i._collection,i),t.type==="keypress"&&r("a, button",i._collection).eq(0).focus()},attr:{"aria-haspopup":"dialog"}},split:{text:function(t){return t.i18n("buttons.split","Split")},className:"buttons-split",closeButton:!1,init:function(t,e,n){return e.attr("aria-expanded",!1)},action:function(t,e,n,i){this.popover(i._collection,i)},attr:{"aria-haspopup":"dialog"}},copy:function(t,e){if(H.copyHtml5)return"copyHtml5"},csv:function(t,e){if(H.csvHtml5&&H.csvHtml5.available(t,e))return"csvHtml5"},excel:function(t,e){if(H.excelHtml5&&H.excelHtml5.available(t,e))return"excelHtml5"},pdf:function(t,e){if(H.pdfHtml5&&H.pdfHtml5.available(t,e))return"pdfHtml5"},pageLength:function(t){var e=t.settings()[0].aLengthMenu,n=[],i=[],a=function(u){return u.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},u.page.len())};if(Array.isArray(e[0]))n=e[0],i=e[1];else for(var s=0;s<e.length;s++){var c=e[s];r.isPlainObject(c)?(n.push(c.value),i.push(c.label)):(n.push(c),i.push(c))}return{extend:"collection",text:a,className:"buttons-page-length",autoClose:!0,buttons:r.map(n,function(u,l){return{text:i[l],className:"button-page-length",action:function(f,o){o.page.len(u).draw()},init:function(f,o,p){var g=this,h=function(){g.active(f.page.len()===u)};f.on("length.dt"+p.namespace,h),h()},destroy:function(f,o,p){f.off("length.dt"+p.namespace)}}}),init:function(u,l,f){var o=this;u.on("length.dt"+f.namespace,function(){o.text(f.text)})},destroy:function(u,l,f){u.off("length.dt"+f.namespace)}}},spacer:{style:"empty",spacer:!0,text:function(t){return t.i18n("buttons.spacer","")}}});b.Api.register("buttons()",function(t,e){e===void 0&&(e=t,t=void 0),this.selector.buttonGroup=t;var n=this.iterator(!0,"table",function(i){if(i._buttons)return x.buttonSelector(x.instanceSelector(t,i._buttons),e)},!0);return n._groupSelector=t,n});b.Api.register("button()",function(t,e){var n=this.buttons(t,e);return n.length>1&&n.splice(1,n.length),n});b.Api.registerPlural("buttons().active()","button().active()",function(t){return t===void 0?this.map(function(e){return e.inst.active(e.node)}):this.each(function(e){e.inst.active(e.node,t)})});b.Api.registerPlural("buttons().action()","button().action()",function(t){return t===void 0?this.map(function(e){return e.inst.action(e.node)}):this.each(function(e){e.inst.action(e.node,t)})});b.Api.registerPlural("buttons().collectionRebuild()","button().collectionRebuild()",function(t){return this.each(function(e){for(var n=0;n<t.length;n++)typeof t[n]=="object"&&(t[n].parentConf=e);e.inst.collectionRebuild(e.node,t)})});b.Api.register(["buttons().enable()","button().enable()"],function(t){return this.each(function(e){e.inst.enable(e.node,t)})});b.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(t){t.inst.disable(t.node)})});b.Api.register("button().index()",function(){var t=null;return this.each(function(e){var n=e.inst.index(e.node);n!==null&&(t=n)}),t});b.Api.registerPlural("buttons().nodes()","button().node()",function(){var t=r();return r(this.each(function(e){t=t.add(e.inst.node(e.node))})),t});b.Api.registerPlural("buttons().processing()","button().processing()",function(t){return t===void 0?this.map(function(e){return e.inst.processing(e.node)}):this.each(function(e){e.inst.processing(e.node,t)})});b.Api.registerPlural("buttons().text()","button().text()",function(t){return t===void 0?this.map(function(e){return e.inst.text(e.node)}):this.each(function(e){e.inst.text(e.node,t)})});b.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(t){t.inst.node(t.node).trigger("click")})});b.Api.register("button().popover()",function(t,e){return this.map(function(n){return n.inst._popover(t,this.button(this[0].node),e)})});b.Api.register("buttons().containers()",function(){var t=r(),e=this._groupSelector;return this.iterator(!0,"table",function(n){if(n._buttons)for(var i=x.instanceSelector(e,n._buttons),a=0,s=i.length;a<s;a++)t=t.add(i[a].container())}),t});b.Api.register("buttons().container()",function(){return this.containers().eq(0)});b.Api.register("button().add()",function(t,e,n){var i=this.context;if(i.length){var a=x.instanceSelector(this._groupSelector,i[0]._buttons);a.length&&a[0].add(e,t,n)}return this.button(this._groupSelector,t)});b.Api.register("buttons().destroy()",function(){return this.pluck("inst").unique().each(function(t){t.destroy()}),this});b.Api.registerPlural("buttons().remove()","buttons().remove()",function(){return this.each(function(t){t.inst.remove(t.node)}),this});var L;b.Api.register("buttons.info()",function(t,e,n){var i=this;return t===!1?(this.off("destroy.btn-info"),F(r("#datatables_buttons_info"),400,function(){r(this).remove()}),clearTimeout(L),L=null,this):(L&&clearTimeout(L),r("#datatables_buttons_info").length&&r("#datatables_buttons_info").remove(),t=t?"<h2>"+t+"</h2>":"",E(r('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t).append(r("<div/>")[typeof e=="string"?"html":"append"](e)).css("display","none").appendTo("body")),n!==void 0&&n!==0&&(L=setTimeout(function(){i.buttons.info(!1)},n)),this.on("destroy.btn-info",function(){i.buttons.info(!1)}),this)});b.Api.register("buttons.exportData()",function(t){if(this.context.length)return P(new b.Api(this.context[0]),t)});b.Api.register("buttons.exportInfo()",function(t){return t||(t={}),{filename:X(t),title:Y(t),messageTop:I(this,t.message||t.messageTop,"top"),messageBottom:I(this,t.messageBottom,"bottom")}});var X=function(t){var e=t.filename==="*"&&t.title!=="*"&&t.title!==void 0&&t.title!==null&&t.title!==""?t.title:t.filename;if(typeof e=="function"&&(e=e()),e==null)return null;e.indexOf("*")!==-1&&(e=e.replace("*",r("head > title").text()).trim()),e=e.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,"");var n=j(t.extension);return n||(n=""),e+n},j=function(t){return t==null?null:typeof t=="function"?t():t},Y=function(t){var e=j(t.title);return e===null?null:e.indexOf("*")!==-1?e.replace("*",r("head > title").text()||"Exported data"):e},I=function(t,e,n){var i=j(e);if(i===null)return null;var a=r("caption",t.table().container()).eq(0);if(i==="*"){var s=a.css("caption-side");return s!==n?null:a.length?a.text():""}return i},M=r("<textarea/>")[0],P=function(t,e){var n=r.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(N){return x.stripData(N,n)},footer:function(N){return x.stripData(N,n)},body:function(N){return x.stripData(N,n)}},customizeData:null},e),i=t.columns(n.columns).indexes().map(function(N){var C=t.column(N).header();return n.format.header(C.innerHTML,N,C)}).toArray(),a=t.table().footer()?t.columns(n.columns).indexes().map(function(N){var C=t.column(N).footer();return n.format.footer(C?C.innerHTML:"",N,C)}).toArray():null,s=r.extend({},n.modifier);t.select&&typeof t.select.info=="function"&&s.selected===void 0&&t.rows(n.rows,r.extend({selected:!0},s)).any()&&r.extend(s,{selected:!0});for(var c=t.rows(n.rows,s).indexes().toArray(),u=t.cells(c,n.columns),l=u.render(n.orthogonal).toArray(),f=u.nodes().toArray(),o=i.length,p=o>0?l.length/o:0,g=[],h=0,d=0,T=p;d<T;d++){for(var y=[o],k=0;k<o;k++)y[k]=n.format.body(l[h],d,k,f[h]),h++;g[d]=y}var _={header:i,footer:a,body:g};return n.customizeData&&n.customizeData(_),_};r.fn.dataTable.Buttons=x;r.fn.DataTable.Buttons=x;r(document).on("init.dt plugin-init.dt",function(t,e){if(t.namespace==="dt"){var n=e.oInit.buttons||b.defaults.buttons;n&&!e._buttons&&new x(e,n).container()}});function $(t,e){var n=new b.Api(t),i=e||n.init().buttons||b.defaults.buttons;return new x(n,i).container()}b.ext.feature.push({fnInit:$,cFeature:"B"});b.ext.features&&b.ext.features.register("buttons",$);const S=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),nt=G(S);export{nt as r};
