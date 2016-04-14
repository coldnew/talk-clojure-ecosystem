// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('quil.util');
goog.require('goog.events.EventType');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.events');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args13541 = [];
var len__7542__auto___13544 = arguments.length;
var i__7543__auto___13545 = (0);
while(true){
if((i__7543__auto___13545 < len__7542__auto___13544)){
args13541.push((arguments[i__7543__auto___13545]));

var G__13546 = (i__7543__auto___13545 + (1));
i__7543__auto___13545 = G__13546;
continue;
} else {
}
break;
}

var G__13543 = args13541.length;
switch (G__13543) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13541.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;
quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__13556 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__13557 = null;
var count__13558 = (0);
var i__13559 = (0);
while(true){
if((i__13559 < count__13558)){
var vec__13560 = chunk__13557.cljs$core$IIndexed$_nth$arity$2(null,i__13559);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13560,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13560,(1),null);
var temp__4657__auto___13564 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___13564)){
var handler_13565 = temp__4657__auto___13564;
(prc[cljs.core.name(processing_name)] = ((function (seq__13556,chunk__13557,count__13558,i__13559,handler_13565,temp__4657__auto___13564,vec__13560,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_13561 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_13565.cljs$core$IFn$_invoke$arity$0 ? handler_13565.cljs$core$IFn$_invoke$arity$0() : handler_13565.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_13561;
}});})(seq__13556,chunk__13557,count__13558,i__13559,handler_13565,temp__4657__auto___13564,vec__13560,processing_name,quil_name))
);
} else {
}

var G__13566 = seq__13556;
var G__13567 = chunk__13557;
var G__13568 = count__13558;
var G__13569 = (i__13559 + (1));
seq__13556 = G__13566;
chunk__13557 = G__13567;
count__13558 = G__13568;
i__13559 = G__13569;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13556);
if(temp__4657__auto__){
var seq__13556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13556__$1)){
var c__7287__auto__ = cljs.core.chunk_first(seq__13556__$1);
var G__13570 = cljs.core.chunk_rest(seq__13556__$1);
var G__13571 = c__7287__auto__;
var G__13572 = cljs.core.count(c__7287__auto__);
var G__13573 = (0);
seq__13556 = G__13570;
chunk__13557 = G__13571;
count__13558 = G__13572;
i__13559 = G__13573;
continue;
} else {
var vec__13562 = cljs.core.first(seq__13556__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13562,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13562,(1),null);
var temp__4657__auto___13574__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___13574__$1)){
var handler_13575 = temp__4657__auto___13574__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__13556,chunk__13557,count__13558,i__13559,handler_13575,temp__4657__auto___13574__$1,vec__13562,processing_name,quil_name,seq__13556__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_13563 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_13575.cljs$core$IFn$_invoke$arity$0 ? handler_13575.cljs$core$IFn$_invoke$arity$0() : handler_13575.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_13563;
}});})(seq__13556,chunk__13557,count__13558,i__13559,handler_13575,temp__4657__auto___13574__$1,vec__13562,processing_name,quil_name,seq__13556__$1,temp__4657__auto__))
);
} else {
}

var G__13576 = cljs.core.next(seq__13556__$1);
var G__13577 = null;
var G__13578 = (0);
var G__13579 = (0);
seq__13556 = G__13576;
chunk__13557 = G__13577;
count__13558 = G__13578;
i__13559 = G__13579;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__13580_SHARP_){
return (p1__13580_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13580_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__13580_SHARP_.call(null,options));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__6484__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.array_seq([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));

return prc.target_frame_rate = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60)) : cljs.core.atom.call(null,(60)));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__4657__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__4657__auto__)){
var proc_obj = temp__4657__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__7549__auto__ = [];
var len__7542__auto___13583 = arguments.length;
var i__7543__auto___13584 = (0);
while(true){
if((i__7543__auto___13584 < len__7542__auto___13583)){
args__7549__auto__.push((arguments[i__7543__auto___13584]));

var G__13585 = (i__7543__auto___13584 + (1));
i__7543__auto___13584 = G__13585;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((0) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((0)),(0))):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__7550__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__13582 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__13582);
})();
var renderer = (function (){var or__6484__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq13581){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13581));
});
quil.sketch.sketch_init_list = (function (){var G__13586 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13586) : cljs.core.atom.call(null,G__13586));
})();
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__13599 = quil.sketch.empty_body_QMARK_();
var seq__13593_13600 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(quil.sketch.sketch_init_list) : cljs.core.deref.call(null,quil.sketch.sketch_init_list)));
var chunk__13594_13601 = null;
var count__13595_13602 = (0);
var i__13596_13603 = (0);
while(true){
if((i__13596_13603 < count__13595_13602)){
var sk_13604 = chunk__13594_13601.cljs$core$IIndexed$_nth$arity$2(null,i__13596_13603);
if(cljs.core.truth_(add_elem_QMARK__13599)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13604));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13604).call(null);

var G__13605 = seq__13593_13600;
var G__13606 = chunk__13594_13601;
var G__13607 = count__13595_13602;
var G__13608 = (i__13596_13603 + (1));
seq__13593_13600 = G__13605;
chunk__13594_13601 = G__13606;
count__13595_13602 = G__13607;
i__13596_13603 = G__13608;
continue;
} else {
var temp__4657__auto___13609 = cljs.core.seq(seq__13593_13600);
if(temp__4657__auto___13609){
var seq__13593_13610__$1 = temp__4657__auto___13609;
if(cljs.core.chunked_seq_QMARK_(seq__13593_13610__$1)){
var c__7287__auto___13611 = cljs.core.chunk_first(seq__13593_13610__$1);
var G__13612 = cljs.core.chunk_rest(seq__13593_13610__$1);
var G__13613 = c__7287__auto___13611;
var G__13614 = cljs.core.count(c__7287__auto___13611);
var G__13615 = (0);
seq__13593_13600 = G__13612;
chunk__13594_13601 = G__13613;
count__13595_13602 = G__13614;
i__13596_13603 = G__13615;
continue;
} else {
var sk_13616 = cljs.core.first(seq__13593_13610__$1);
if(cljs.core.truth_(add_elem_QMARK__13599)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_13616));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_13616).call(null);

var G__13617 = cljs.core.next(seq__13593_13610__$1);
var G__13618 = null;
var G__13619 = (0);
var G__13620 = (0);
seq__13593_13600 = G__13617;
chunk__13594_13601 = G__13618;
count__13595_13602 = G__13619;
i__13596_13603 = G__13620;
continue;
}
} else {
}
}
break;
}

var G__13597 = quil.sketch.sketch_init_list;
var G__13598 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13597,G__13598) : cljs.core.reset_BANG_.call(null,G__13597,G__13598));
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
