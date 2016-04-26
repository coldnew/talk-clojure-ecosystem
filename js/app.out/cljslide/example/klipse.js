// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljslide.example.klipse');
goog.require('cljs.core');
goog.require('cljslide.utils');
cljslide.example.klipse.build_src = (function cljslide$example$klipse$build_src(code){
return [cljs.core.str("http://app.klipse.tech/?cljs_in="),cljs.core.str(code)].join('');
});
cljslide.example.klipse.src = cljslide.example.klipse.build_src("(+ 1 2)");
cljslide.utils.set_element_to_id_BANG_("klipse",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_klipse,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"try",cljs.core.cst$kw$src,cljslide.example.klipse.src], null)], null)], null));
