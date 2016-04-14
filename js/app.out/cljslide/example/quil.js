// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljslide.example.quil');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
cljslide.example.quil.draw_carousel = (function cljslide$example$quil$draw_carousel(){
quil.core.background.cljs$core$IFn$_invoke$arity$1((255));

quil.core.no_stroke();

quil.core.fill.cljs$core$IFn$_invoke$arity$3((252),(90),(44));

var radians = (quil.core.frame_count() / (20));
var x = ((150) + ((100) * quil.core.cos(radians)));
var y = ((150) + ((100) * quil.core.sin(radians)));
var width = (30);
var height = (30);
return quil.core.ellipse(x,y,width,height);
});
cljslide.example.quil.hello_quil = (function cljslide$example$quil$hello_quil(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$host,"quil-example",cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(300)], null),cljs.core.cst$kw$draw,new cljs.core.Var(function(){return cljslide.example.quil.draw_carousel;},cljs.core.cst$sym$cljslide$example$quil_SLASH_draw_DASH_carousel,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljslide$example$quil,cljs.core.cst$sym$draw_DASH_carousel,"/home/ubuntu/.boot/cache/tmp/home/ubuntu/talk-clojure-ecosystem/agr/-p9hf6h/cljslide/example/quil.cljs",20,1,5,5,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljslide.example.quil.draw_carousel)?cljslide.example.quil.draw_carousel.cljs$lang$test:null)]))], 0));
});
goog.exportSymbol('cljslide.example.quil.hello_quil', cljslide.example.quil.hello_quil);

if(cljs.core.truth_(cljs.core.some((function (p1__13530__13531__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__13530__13531__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,cljslide.example.quil.hello_quil,cljs.core.cst$kw$host_DASH_id,"quil-example"], null));
}
