if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['./app/scripts/views/strongView.js']) {
   __coverage__['./app/scripts/views/strongView.js'] = {"path":"./app/scripts/views/strongView.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":9,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":72}}},"2":{"name":"(anonymous_2)","line":17,"loc":{"start":{"line":17,"column":13},"end":{"line":17,"column":24}}},"3":{"name":"(anonymous_3)","line":30,"loc":{"start":{"line":30,"column":11},"end":{"line":30,"column":22}}}},"statementMap":{"1":{"start":{"line":2,"column":0},"end":{"line":40,"column":3}},"2":{"start":{"line":11,"column":4},"end":{"line":11,"column":17}},"3":{"start":{"line":13,"column":4},"end":{"line":36,"column":4}},"4":{"start":{"line":19,"column":9},"end":{"line":20,"column":62}},"5":{"start":{"line":22,"column":9},"end":{"line":22,"column":41}},"6":{"start":{"line":24,"column":9},"end":{"line":24,"column":31}},"7":{"start":{"line":25,"column":9},"end":{"line":25,"column":31}},"8":{"start":{"line":27,"column":9},"end":{"line":27,"column":21}},"9":{"start":{"line":32,"column":9},"end":{"line":34,"column":9}},"10":{"start":{"line":34,"column":9},"end":{"line":34,"column":21}},"11":{"start":{"line":39,"column":4},"end":{"line":39,"column":22}}},"branchMap":{}};
}
var __cov_vhDF9pRV_nM0yTN0fU5uKg = __coverage__['./app/scripts/views/strongView.js'];
__cov_vhDF9pRV_nM0yTN0fU5uKg.s['1']++;define(['backbone','underscore','marionette','Handlebars','vent','i18n!nls/general'],function(Backbone,_,Marionette,Handlebars,vent,localizedText){__cov_vhDF9pRV_nM0yTN0fU5uKg.f['1']++;__cov_vhDF9pRV_nM0yTN0fU5uKg.s['2']++;'use strict';__cov_vhDF9pRV_nM0yTN0fU5uKg.s['3']++;var strongView=Marionette.ItemView.extend({template:'<div>Exmple</div>',render:function(){__cov_vhDF9pRV_nM0yTN0fU5uKg.f['2']++;__cov_vhDF9pRV_nM0yTN0fU5uKg.s['4']++;var templateParams=_.extend({},this.model,localizedText),renderedTemplate=this.template(templateParams);__cov_vhDF9pRV_nM0yTN0fU5uKg.s['5']++;this.$el.html(renderedTemplate);__cov_vhDF9pRV_nM0yTN0fU5uKg.s['6']++;this.bindUIElements();__cov_vhDF9pRV_nM0yTN0fU5uKg.s['7']++;this.delegateEvents();__cov_vhDF9pRV_nM0yTN0fU5uKg.s['8']++;return this;},test:function(){__cov_vhDF9pRV_nM0yTN0fU5uKg.f['3']++;__cov_vhDF9pRV_nM0yTN0fU5uKg.s['9']++;console.log('onShow');__cov_vhDF9pRV_nM0yTN0fU5uKg.s['10']++;return this;}});__cov_vhDF9pRV_nM0yTN0fU5uKg.s['11']++;return strongView;});