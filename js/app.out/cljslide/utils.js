// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljslide.utils');
goog.require('cljs.core');
goog.require('hipo.core');
/**
 * Add hiccup element to id.
 */
cljslide.utils.set_element_to_id_BANG_ = (function cljslide$utils$set_element_to_id_BANG_(id,body){
var dom = document.getElementById(id);
var el = (function (){var v12726 = body;
var el__12706__auto__ = hipo.interpreter.create(v12726,null);
hipo.core.set_hiccup_BANG_(el__12706__auto__,v12726);

return el__12706__auto__;
})();
return dom.innerHTML = el.innerHTML;
});
