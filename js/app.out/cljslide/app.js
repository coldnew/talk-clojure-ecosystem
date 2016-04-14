// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljslide.app');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('sablono.core');
goog.require('reagent.core');
goog.require('cljslide.example.quil');
goog.require('cljs.core.async');
goog.require('cljslide.join');
goog.require('om.next');
goog.require('cljslide.example.core_async');
cljs.core.enable_console_print_BANG_();
/**
 * Add hiccup element to id.
 */
cljslide.app.add_element_to_id = (function cljslide$app$add_element_to_id(id,body){
var dom = document.getElementById(id);
var el = (function (){var v21096 = body;
var el__12891__auto__ = hipo.interpreter.create(v21096,null);
hipo.core.set_hiccup_BANG_(el__12891__auto__,v21096);

return el__12891__auto__;
})();
return dom.innerHTML = el.innerHTML;
});
cljslide.app.init = (function cljslide$app$init(){
return null;
});
