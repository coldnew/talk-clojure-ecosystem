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
reagent.dom.roots = (function (){var G__13316 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13316) : cljs.core.atom.call(null,G__13316));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_13319 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_13319){
return (function (){
var _STAR_always_update_STAR_13320 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13320;
}});})(_STAR_always_update_STAR_13319))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_13319;
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
var args13321 = [];
var len__7542__auto___13324 = arguments.length;
var i__7543__auto___13325 = (0);
while(true){
if((i__7543__auto___13325 < len__7542__auto___13324)){
args13321.push((arguments[i__7543__auto___13325]));

var G__13326 = (i__7543__auto___13325 + (1));
i__7543__auto___13325 = G__13326;
continue;
} else {
}
break;
}

var G__13323 = args13321.length;
switch (G__13323) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13321.length)].join('')));

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
var seq__13332_13336 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__13333_13337 = null;
var count__13334_13338 = (0);
var i__13335_13339 = (0);
while(true){
if((i__13335_13339 < count__13334_13338)){
var v_13340 = chunk__13333_13337.cljs$core$IIndexed$_nth$arity$2(null,i__13335_13339);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13340);

var G__13341 = seq__13332_13336;
var G__13342 = chunk__13333_13337;
var G__13343 = count__13334_13338;
var G__13344 = (i__13335_13339 + (1));
seq__13332_13336 = G__13341;
chunk__13333_13337 = G__13342;
count__13334_13338 = G__13343;
i__13335_13339 = G__13344;
continue;
} else {
var temp__4657__auto___13345 = cljs.core.seq(seq__13332_13336);
if(temp__4657__auto___13345){
var seq__13332_13346__$1 = temp__4657__auto___13345;
if(cljs.core.chunked_seq_QMARK_(seq__13332_13346__$1)){
var c__7287__auto___13347 = cljs.core.chunk_first(seq__13332_13346__$1);
var G__13348 = cljs.core.chunk_rest(seq__13332_13346__$1);
var G__13349 = c__7287__auto___13347;
var G__13350 = cljs.core.count(c__7287__auto___13347);
var G__13351 = (0);
seq__13332_13336 = G__13348;
chunk__13333_13337 = G__13349;
count__13334_13338 = G__13350;
i__13335_13339 = G__13351;
continue;
} else {
var v_13352 = cljs.core.first(seq__13332_13346__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_13352);

var G__13353 = cljs.core.next(seq__13332_13346__$1);
var G__13354 = null;
var G__13355 = (0);
var G__13356 = (0);
seq__13332_13336 = G__13353;
chunk__13333_13337 = G__13354;
count__13334_13338 = G__13355;
i__13335_13339 = G__13356;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
