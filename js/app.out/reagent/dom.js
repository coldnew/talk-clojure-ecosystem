// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6484__auto__ = (function (){var and__6472__auto__ = typeof ReactDOM !== 'undefined';
if(and__6472__auto__){
return ReactDOM;
} else {
return and__6472__auto__;
}
})();
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
var and__6472__auto__ = typeof require !== 'undefined';
if(and__6472__auto__){
return require("react-dom");
} else {
return and__6472__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$dom], 0)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__13320 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13320) : cljs.core.atom.call(null,G__13320));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_13323 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_13323){
return (function (){
var _STAR_always_update_STAR_13324 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13324;
}});})(_STAR_always_update_STAR_13323))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13323;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args13325 = [];
var len__7542__auto___13328 = arguments.length;
var i__7543__auto___13329 = (0);
while(true){
if((i__7543__auto___13329 < len__7542__auto___13328)){
args13325.push((arguments[i__7543__auto___13329]));

var G__13330 = (i__7543__auto___13329 + (1));
i__7543__auto___13329 = G__13330;
continue;
} else {
}
break;
}

var G__13327 = args13325.length;
switch (G__13327) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13325.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__13336_13340 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__13337_13341 = null;
var count__13338_13342 = (0);
var i__13339_13343 = (0);
while(true){
if((i__13339_13343 < count__13338_13342)){
var v_13344 = chunk__13337_13341.cljs$core$IIndexed$_nth$arity$2(null,i__13339_13343);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13344);

var G__13345 = seq__13336_13340;
var G__13346 = chunk__13337_13341;
var G__13347 = count__13338_13342;
var G__13348 = (i__13339_13343 + (1));
seq__13336_13340 = G__13345;
chunk__13337_13341 = G__13346;
count__13338_13342 = G__13347;
i__13339_13343 = G__13348;
continue;
} else {
var temp__4657__auto___13349 = cljs.core.seq(seq__13336_13340);
if(temp__4657__auto___13349){
var seq__13336_13350__$1 = temp__4657__auto___13349;
if(cljs.core.chunked_seq_QMARK_(seq__13336_13350__$1)){
var c__7287__auto___13351 = cljs.core.chunk_first(seq__13336_13350__$1);
var G__13352 = cljs.core.chunk_rest(seq__13336_13350__$1);
var G__13353 = c__7287__auto___13351;
var G__13354 = cljs.core.count(c__7287__auto___13351);
var G__13355 = (0);
seq__13336_13340 = G__13352;
chunk__13337_13341 = G__13353;
count__13338_13342 = G__13354;
i__13339_13343 = G__13355;
continue;
} else {
var v_13356 = cljs.core.first(seq__13336_13350__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13356);

var G__13357 = cljs.core.next(seq__13336_13350__$1);
var G__13358 = null;
var G__13359 = (0);
var G__13360 = (0);
seq__13336_13340 = G__13357;
chunk__13337_13341 = G__13358;
count__13338_13342 = G__13359;
i__13339_13343 = G__13360;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
