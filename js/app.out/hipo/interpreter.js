// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__12263){
var map__12266 = p__12263;
var map__12266__$1 = ((((!((map__12266 == null)))?((((map__12266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12266):map__12266);
var m = map__12266__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12266__$1,cljs.core.cst$kw$interceptors);
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name(cljs.core.name(sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!((cljs.core.map_QMARK_(ov)) && (cljs.core.map_QMARK_(nv)) && ((cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ov) === cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(nv))))){
var b__12076__auto__ = ((function (en,temp__4655__auto__,map__12266,map__12266__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4655__auto___12268__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___12268__$1)){
var l_12269 = temp__4655__auto___12268__$1;
el.removeEventListener(en,l_12269);
} else {
}

var temp__4657__auto__ = (function (){var or__6484__auto__ = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var nv__$1 = temp__4657__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__4655__auto__,map__12266,map__12266__$1,m,interceptors))
;
var v__12077__auto__ = interceptors;
if((cljs.core.not(v__12077__auto__)) || (cljs.core.empty_QMARK_(v__12077__auto__))){
return b__12076__auto__();
} else {
return hipo.interceptor.call(b__12076__auto__,v__12077__auto__,(cljs.core.truth_(nv)?cljs.core.cst$kw$update_DASH_handler:cljs.core.cst$kw$remove_DASH_handler),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$name,sok,cljs.core.cst$kw$old_DASH_value,ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$new_DASH_value,nv], null):null)], 0)));
}
} else {
return null;
}
} else {
var b__12076__auto__ = ((function (temp__4655__auto__,map__12266,map__12266__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_(el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__12266,map__12266__$1,m,interceptors))
;
var v__12077__auto__ = interceptors;
if((cljs.core.not(v__12077__auto__)) || (cljs.core.empty_QMARK_(v__12077__auto__))){
return b__12076__auto__();
} else {
return hipo.interceptor.call(b__12076__auto__,v__12077__auto__,(cljs.core.truth_(nv)?cljs.core.cst$kw$update_DASH_attribute:cljs.core.cst$kw$remove_DASH_attribute),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$name,sok,cljs.core.cst$kw$old_DASH_value,ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$new_DASH_value,nv], null):null)], 0)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$v)], 0)))].join('')));
}

var v__$1 = hipo.hiccup.flatten_children(v);
while(true){
if(cljs.core.empty_QMARK_(v__$1)){
return null;
} else {
var temp__4655__auto___12270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___12270)){
var h_12271 = temp__4655__auto___12270;
el.appendChild((hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2 ? hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2(h_12271,m) : hipo.interpreter.create_child.call(null,h_12271,m)));
} else {
}

var G__12272 = cljs.core.rest(v__$1);
v__$1 = G__12272;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element(ns,tag);
var seq__12279_12285 = cljs.core.seq(attrs);
var chunk__12280_12286 = null;
var count__12281_12287 = (0);
var i__12282_12288 = (0);
while(true){
if((i__12282_12288 < count__12281_12287)){
var vec__12283_12289 = chunk__12280_12286.cljs$core$IIndexed$_nth$arity$2(null,i__12282_12288);
var sok_12290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12283_12289,(0),null);
var v_12291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12283_12289,(1),null);
if(cljs.core.truth_(v_12291)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12290,null,v_12291,m);
} else {
}

var G__12292 = seq__12279_12285;
var G__12293 = chunk__12280_12286;
var G__12294 = count__12281_12287;
var G__12295 = (i__12282_12288 + (1));
seq__12279_12285 = G__12292;
chunk__12280_12286 = G__12293;
count__12281_12287 = G__12294;
i__12282_12288 = G__12295;
continue;
} else {
var temp__4657__auto___12296 = cljs.core.seq(seq__12279_12285);
if(temp__4657__auto___12296){
var seq__12279_12297__$1 = temp__4657__auto___12296;
if(cljs.core.chunked_seq_QMARK_(seq__12279_12297__$1)){
var c__7287__auto___12298 = cljs.core.chunk_first(seq__12279_12297__$1);
var G__12299 = cljs.core.chunk_rest(seq__12279_12297__$1);
var G__12300 = c__7287__auto___12298;
var G__12301 = cljs.core.count(c__7287__auto___12298);
var G__12302 = (0);
seq__12279_12285 = G__12299;
chunk__12280_12286 = G__12300;
count__12281_12287 = G__12301;
i__12282_12288 = G__12302;
continue;
} else {
var vec__12284_12303 = cljs.core.first(seq__12279_12297__$1);
var sok_12304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12284_12303,(0),null);
var v_12305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12284_12303,(1),null);
if(cljs.core.truth_(v_12305)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12304,null,v_12305,m);
} else {
}

var G__12306 = cljs.core.next(seq__12279_12297__$1);
var G__12307 = null;
var G__12308 = (0);
var G__12309 = (0);
seq__12279_12285 = G__12306;
chunk__12280_12286 = G__12307;
count__12281_12287 = G__12308;
i__12282_12288 = G__12309;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4655__auto__ = cljs.core.cst$kw$create_DASH_element_DASH_fn.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(ns,tag,attrs,m) : f.call(null,ns,tag,attrs,m));
} else {
return hipo.interpreter.default_create_element(ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_(h)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$h)], 0)))].join('')));
}

var key = hipo.hiccup.keyns(h);
var tag = hipo.hiccup.tag(h);
var attrs = hipo.hiccup.attributes(h);
var children = hipo.hiccup.children(h);
var el = hipo.interpreter.create_element(hipo.hiccup.key__GT_namespace(key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_(el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__6484__auto__ = hipo.hiccup.literal_QMARK_(o);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return cljs.core.vector_QMARK_(o);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$hic_SLASH_literal_QMARK_,cljs.core.cst$sym$o),cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$o))], 0)))].join('')));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_(o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector(o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_(o)){
return hipo.interpreter.append_children_BANG_(el,cljs.core.vec(o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child(o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_(o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_(f,cljs.core.vec(o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child(o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__12322_12334 = cljs.core.seq(nm);
var chunk__12324_12335 = null;
var count__12325_12336 = (0);
var i__12326_12337 = (0);
while(true){
if((i__12326_12337 < count__12325_12336)){
var vec__12328_12338 = chunk__12324_12335.cljs$core$IIndexed$_nth$arity$2(null,i__12326_12337);
var sok_12339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12328_12338,(0),null);
var nv_12340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12328_12338,(1),null);
var ov_12341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_12339);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12339,ov_12341,nv_12340,m);

var G__12342 = seq__12322_12334;
var G__12343 = chunk__12324_12335;
var G__12344 = count__12325_12336;
var G__12345 = (i__12326_12337 + (1));
seq__12322_12334 = G__12342;
chunk__12324_12335 = G__12343;
count__12325_12336 = G__12344;
i__12326_12337 = G__12345;
continue;
} else {
var temp__4657__auto___12346 = cljs.core.seq(seq__12322_12334);
if(temp__4657__auto___12346){
var seq__12322_12347__$1 = temp__4657__auto___12346;
if(cljs.core.chunked_seq_QMARK_(seq__12322_12347__$1)){
var c__7287__auto___12348 = cljs.core.chunk_first(seq__12322_12347__$1);
var G__12349 = cljs.core.chunk_rest(seq__12322_12347__$1);
var G__12350 = c__7287__auto___12348;
var G__12351 = cljs.core.count(c__7287__auto___12348);
var G__12352 = (0);
seq__12322_12334 = G__12349;
chunk__12324_12335 = G__12350;
count__12325_12336 = G__12351;
i__12326_12337 = G__12352;
continue;
} else {
var vec__12329_12353 = cljs.core.first(seq__12322_12347__$1);
var sok_12354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12329_12353,(0),null);
var nv_12355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12329_12353,(1),null);
var ov_12356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_12354);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12354,ov_12356,nv_12355,m);

var G__12357 = cljs.core.next(seq__12322_12347__$1);
var G__12358 = null;
var G__12359 = (0);
var G__12360 = (0);
seq__12322_12334 = G__12357;
chunk__12324_12335 = G__12358;
count__12325_12336 = G__12359;
i__12326_12337 = G__12360;
continue;
}
} else {
}
}
break;
}

var seq__12330 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
var chunk__12331 = null;
var count__12332 = (0);
var i__12333 = (0);
while(true){
if((i__12333 < count__12332)){
var sok = chunk__12331.cljs$core$IIndexed$_nth$arity$2(null,i__12333);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);

var G__12361 = seq__12330;
var G__12362 = chunk__12331;
var G__12363 = count__12332;
var G__12364 = (i__12333 + (1));
seq__12330 = G__12361;
chunk__12331 = G__12362;
count__12332 = G__12363;
i__12333 = G__12364;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12330);
if(temp__4657__auto__){
var seq__12330__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12330__$1)){
var c__7287__auto__ = cljs.core.chunk_first(seq__12330__$1);
var G__12365 = cljs.core.chunk_rest(seq__12330__$1);
var G__12366 = c__7287__auto__;
var G__12367 = cljs.core.count(c__7287__auto__);
var G__12368 = (0);
seq__12330 = G__12365;
chunk__12331 = G__12366;
count__12332 = G__12367;
i__12333 = G__12368;
continue;
} else {
var sok = cljs.core.first(seq__12330__$1);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);

var G__12369 = cljs.core.next(seq__12330__$1);
var G__12370 = null;
var G__12371 = (0);
var G__12372 = (0);
seq__12330 = G__12369;
chunk__12331 = G__12370;
count__12332 = G__12371;
i__12333 = G__12372;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return cljs.core.cst$kw$hipo_SLASH_key.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7256__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12379(s__12380){
return (new cljs.core.LazySeq(null,(function (){
var s__12380__$1 = s__12380;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12380__$1);
if(temp__4657__auto__){
var s__12380__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12380__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__12380__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__12382 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__12381 = (0);
while(true){
if((i__12381 < size__7255__auto__)){
var ih = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__12381);
cljs.core.chunk_append(b__12382,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null));

var G__12385 = (i__12381 + (1));
i__12381 = G__12385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12382),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12379(cljs.core.chunk_rest(s__12380__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12382),null);
}
} else {
var ih = cljs.core.first(s__12380__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12379(cljs.core.rest(s__12380__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7256__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (iter__7256__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__7256__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__12386){
var map__12399 = p__12386;
var map__12399__$1 = ((((!((map__12399 == null)))?((((map__12399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12399):map__12399);
var m = map__12399__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12399__$1,cljs.core.cst$kw$interceptors);
var om = hipo.interpreter.keyed_children__GT_indexed_map(och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map(nch);
var cs = hipo.dom.children.cljs$core$IFn$_invoke$arity$2(el,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(nm)),cljs.core.set(cljs.core.keys(om)))));
var seq__12401_12411 = cljs.core.seq(nm);
var chunk__12402_12412 = null;
var count__12403_12413 = (0);
var i__12404_12414 = (0);
while(true){
if((i__12404_12414 < count__12403_12413)){
var vec__12405_12415 = chunk__12402_12412.cljs$core$IIndexed$_nth$arity$2(null,i__12404_12414);
var i_12416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12405_12415,(0),null);
var vec__12406_12417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12405_12415,(1),null);
var ii_12418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12406_12417,(0),null);
var h_12419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12406_12417,(1),null);
var temp__4655__auto___12420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_12416);
if(cljs.core.truth_(temp__4655__auto___12420)){
var vec__12407_12421 = temp__4655__auto___12420;
var iii_12422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12407_12421,(0),null);
var oh_12423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12407_12421,(1),null);
var cel_12424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_12422);
if((ii_12418 === iii_12422)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_12424,oh_12423,h_12419,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_12424,oh_12423,h_12419,m));
} else {
var b__12076__auto___12425 = ((function (seq__12401_12411,chunk__12402_12412,count__12403_12413,i__12404_12414,cel_12424,vec__12407_12421,iii_12422,oh_12423,temp__4655__auto___12420,vec__12405_12415,i_12416,vec__12406_12417,ii_12418,h_12419,om,nm,cs,map__12399,map__12399__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_12424);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_12423,h_12419,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_12423,h_12419,m));

return hipo.dom.insert_child_BANG_(el,ii_12418,ncel);
});})(seq__12401_12411,chunk__12402_12412,count__12403_12413,i__12404_12414,cel_12424,vec__12407_12421,iii_12422,oh_12423,temp__4655__auto___12420,vec__12405_12415,i_12416,vec__12406_12417,ii_12418,h_12419,om,nm,cs,map__12399,map__12399__$1,m,interceptors))
;
var v__12077__auto___12426 = interceptors;
if((cljs.core.not(v__12077__auto___12426)) || (cljs.core.empty_QMARK_(v__12077__auto___12426))){
b__12076__auto___12425();
} else {
hipo.interceptor.call(b__12076__auto___12425,v__12077__auto___12426,cljs.core.cst$kw$move,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12419,cljs.core.cst$kw$index,ii_12418], null));
}
}
} else {
var b__12076__auto___12427 = ((function (seq__12401_12411,chunk__12402_12412,count__12403_12413,i__12404_12414,temp__4655__auto___12420,vec__12405_12415,i_12416,vec__12406_12417,ii_12418,h_12419,om,nm,cs,map__12399,map__12399__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_12418,hipo.interpreter.create_child(h_12419,m));
});})(seq__12401_12411,chunk__12402_12412,count__12403_12413,i__12404_12414,temp__4655__auto___12420,vec__12405_12415,i_12416,vec__12406_12417,ii_12418,h_12419,om,nm,cs,map__12399,map__12399__$1,m,interceptors))
;
var v__12077__auto___12428 = interceptors;
if((cljs.core.not(v__12077__auto___12428)) || (cljs.core.empty_QMARK_(v__12077__auto___12428))){
b__12076__auto___12427();
} else {
hipo.interceptor.call(b__12076__auto___12427,v__12077__auto___12428,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12419,cljs.core.cst$kw$index,ii_12418], null));
}
}

var G__12429 = seq__12401_12411;
var G__12430 = chunk__12402_12412;
var G__12431 = count__12403_12413;
var G__12432 = (i__12404_12414 + (1));
seq__12401_12411 = G__12429;
chunk__12402_12412 = G__12430;
count__12403_12413 = G__12431;
i__12404_12414 = G__12432;
continue;
} else {
var temp__4657__auto___12433 = cljs.core.seq(seq__12401_12411);
if(temp__4657__auto___12433){
var seq__12401_12434__$1 = temp__4657__auto___12433;
if(cljs.core.chunked_seq_QMARK_(seq__12401_12434__$1)){
var c__7287__auto___12435 = cljs.core.chunk_first(seq__12401_12434__$1);
var G__12436 = cljs.core.chunk_rest(seq__12401_12434__$1);
var G__12437 = c__7287__auto___12435;
var G__12438 = cljs.core.count(c__7287__auto___12435);
var G__12439 = (0);
seq__12401_12411 = G__12436;
chunk__12402_12412 = G__12437;
count__12403_12413 = G__12438;
i__12404_12414 = G__12439;
continue;
} else {
var vec__12408_12440 = cljs.core.first(seq__12401_12434__$1);
var i_12441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408_12440,(0),null);
var vec__12409_12442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408_12440,(1),null);
var ii_12443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12409_12442,(0),null);
var h_12444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12409_12442,(1),null);
var temp__4655__auto___12445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_12441);
if(cljs.core.truth_(temp__4655__auto___12445)){
var vec__12410_12446 = temp__4655__auto___12445;
var iii_12447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12410_12446,(0),null);
var oh_12448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12410_12446,(1),null);
var cel_12449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_12447);
if((ii_12443 === iii_12447)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_12449,oh_12448,h_12444,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_12449,oh_12448,h_12444,m));
} else {
var b__12076__auto___12450 = ((function (seq__12401_12411,chunk__12402_12412,count__12403_12413,i__12404_12414,cel_12449,vec__12410_12446,iii_12447,oh_12448,temp__4655__auto___12445,vec__12408_12440,i_12441,vec__12409_12442,ii_12443,h_12444,seq__12401_12434__$1,temp__4657__auto___12433,om,nm,cs,map__12399,map__12399__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_12449);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_12448,h_12444,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_12448,h_12444,m));

return hipo.dom.insert_child_BANG_(el,ii_12443,ncel);
});})(seq__12401_12411,chunk__12402_12412,count__12403_12413,i__12404_12414,cel_12449,vec__12410_12446,iii_12447,oh_12448,temp__4655__auto___12445,vec__12408_12440,i_12441,vec__12409_12442,ii_12443,h_12444,seq__12401_12434__$1,temp__4657__auto___12433,om,nm,cs,map__12399,map__12399__$1,m,interceptors))
;
var v__12077__auto___12451 = interceptors;
if((cljs.core.not(v__12077__auto___12451)) || (cljs.core.empty_QMARK_(v__12077__auto___12451))){
b__12076__auto___12450();
} else {
hipo.interceptor.call(b__12076__auto___12450,v__12077__auto___12451,cljs.core.cst$kw$move,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12444,cljs.core.cst$kw$index,ii_12443], null));
}
}
} else {
var b__12076__auto___12452 = ((function (seq__12401_12411,chunk__12402_12412,count__12403_12413,i__12404_12414,temp__4655__auto___12445,vec__12408_12440,i_12441,vec__12409_12442,ii_12443,h_12444,seq__12401_12434__$1,temp__4657__auto___12433,om,nm,cs,map__12399,map__12399__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_12443,hipo.interpreter.create_child(h_12444,m));
});})(seq__12401_12411,chunk__12402_12412,count__12403_12413,i__12404_12414,temp__4655__auto___12445,vec__12408_12440,i_12441,vec__12409_12442,ii_12443,h_12444,seq__12401_12434__$1,temp__4657__auto___12433,om,nm,cs,map__12399,map__12399__$1,m,interceptors))
;
var v__12077__auto___12453 = interceptors;
if((cljs.core.not(v__12077__auto___12453)) || (cljs.core.empty_QMARK_(v__12077__auto___12453))){
b__12076__auto___12452();
} else {
hipo.interceptor.call(b__12076__auto___12452,v__12077__auto___12453,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12444,cljs.core.cst$kw$index,ii_12443], null));
}
}

var G__12454 = cljs.core.next(seq__12401_12434__$1);
var G__12455 = null;
var G__12456 = (0);
var G__12457 = (0);
seq__12401_12411 = G__12454;
chunk__12402_12412 = G__12455;
count__12403_12413 = G__12456;
i__12404_12414 = G__12457;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
if((d > (0))){
var b__12076__auto__ = ((function (d,om,nm,cs,map__12399,map__12399__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});})(d,om,nm,cs,map__12399,map__12399__$1,m,interceptors))
;
var v__12077__auto__ = interceptors;
if((cljs.core.not(v__12077__auto__)) || (cljs.core.empty_QMARK_(v__12077__auto__))){
return b__12076__auto__();
} else {
return hipo.interceptor.call(b__12076__auto__,v__12077__auto__,cljs.core.cst$kw$remove_DASH_trailing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$count,d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__12458){
var map__12461 = p__12458;
var map__12461__$1 = ((((!((map__12461 == null)))?((((map__12461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12461):map__12461);
var m = map__12461__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12461__$1,cljs.core.cst$kw$interceptors);
var oc = cljs.core.count(och);
var nc = cljs.core.count(nch);
var d = (oc - nc);
if((d > (0))){
var b__12076__auto___12463 = ((function (oc,nc,d,map__12461,map__12461__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});})(oc,nc,d,map__12461,map__12461__$1,m,interceptors))
;
var v__12077__auto___12464 = interceptors;
if((cljs.core.not(v__12077__auto___12464)) || (cljs.core.empty_QMARK_(v__12077__auto___12464))){
b__12076__auto___12463();
} else {
hipo.interceptor.call(b__12076__auto___12463,v__12077__auto___12464,cljs.core.cst$kw$remove_DASH_trailing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$count,d], null));
}
} else {
}

var n__7387__auto___12465 = (function (){var x__6822__auto__ = oc;
var y__6823__auto__ = nc;
return ((x__6822__auto__ < y__6823__auto__) ? x__6822__auto__ : y__6823__auto__);
})();
var i_12466 = (0);
while(true){
if((i_12466 < n__7387__auto___12465)){
var ov_12467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(och,i_12466);
var nv_12468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,i_12466);
if(!(((ov_12467 == null)) && ((nv_12468 == null)))){
if((ov_12467 == null)){
var b__12076__auto___12469 = ((function (i_12466,ov_12467,nv_12468,n__7387__auto___12465,oc,nc,d,map__12461,map__12461__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,i_12466,hipo.interpreter.create_child(nv_12468,m));
});})(i_12466,ov_12467,nv_12468,n__7387__auto___12465,oc,nc,d,map__12461,map__12461__$1,m,interceptors))
;
var v__12077__auto___12470 = interceptors;
if((cljs.core.not(v__12077__auto___12470)) || (cljs.core.empty_QMARK_(v__12077__auto___12470))){
b__12076__auto___12469();
} else {
hipo.interceptor.call(b__12076__auto___12469,v__12077__auto___12470,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nv_12468,cljs.core.cst$kw$index,i_12466], null));
}
} else {
if((nv_12468 == null)){
var b__12076__auto___12471 = ((function (i_12466,ov_12467,nv_12468,n__7387__auto___12465,oc,nc,d,map__12461,map__12461__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_(el,i_12466);
});})(i_12466,ov_12467,nv_12468,n__7387__auto___12465,oc,nc,d,map__12461,map__12461__$1,m,interceptors))
;
var v__12077__auto___12472 = interceptors;
if((cljs.core.not(v__12077__auto___12472)) || (cljs.core.empty_QMARK_(v__12077__auto___12472))){
b__12076__auto___12471();
} else {
hipo.interceptor.call(b__12076__auto___12471,v__12077__auto___12472,cljs.core.cst$kw$remove,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$index,i_12466], null));
}
} else {
var temp__4655__auto___12473 = hipo.dom.child(el,i_12466);
if(cljs.core.truth_(temp__4655__auto___12473)){
var cel_12474 = temp__4655__auto___12473;
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_12474,ov_12467,nv_12468,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_12474,ov_12467,nv_12468,m));
} else {
}

}
}
} else {
}

var G__12475 = (i_12466 + (1));
i_12466 = G__12475;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4655__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,oc);
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
var b__12076__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__12461,map__12461__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child(h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__12461,map__12461__$1,m,interceptors))
;
var v__12077__auto__ = interceptors;
if((cljs.core.not(v__12077__auto__)) || (cljs.core.empty_QMARK_(v__12077__auto__))){
return b__12076__auto__();
} else {
return hipo.interceptor.call(b__12076__auto__,v__12077__auto__,cljs.core.cst$kw$append,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(nch,oc));
var b__12076__auto___12476 = ((function (f,cs,oc,nc,d,map__12461,map__12461__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_(f,cs,m);
});})(f,cs,oc,nc,d,map__12461,map__12461__$1,m,interceptors))
;
var v__12077__auto___12477 = interceptors;
if((cljs.core.not(v__12077__auto___12477)) || (cljs.core.empty_QMARK_(v__12077__auto___12477))){
b__12076__auto___12476();
} else {
hipo.interceptor.call(b__12076__auto___12476,v__12077__auto___12477,cljs.core.cst$kw$append,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__12478){
var map__12481 = p__12478;
var map__12481__$1 = ((((!((map__12481 == null)))?((((map__12481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12481):map__12481);
var m = map__12481__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12481__$1,cljs.core.cst$kw$interceptors);
if(cljs.core.empty_QMARK_(nch)){
if(!(cljs.core.empty_QMARK_(och))){
var b__12076__auto__ = ((function (map__12481,map__12481__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_(el);
});})(map__12481,map__12481__$1,m,interceptors))
;
var v__12077__auto__ = interceptors;
if((cljs.core.not(v__12077__auto__)) || (cljs.core.empty_QMARK_(v__12077__auto__))){
return b__12076__auto__();
} else {
return hipo.interceptor.call(b__12076__auto__,v__12077__auto__,cljs.core.cst$kw$clear,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_(nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_(el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_(el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__12483){
var map__12486 = p__12483;
var map__12486__$1 = ((((!((map__12486 == null)))?((((map__12486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12486):map__12486);
var m = map__12486__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12486__$1,cljs.core.cst$kw$interceptors);
if(cljs.core.vector_QMARK_(nh)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$nh)], 0)))].join('')));
}

if(cljs.core.truth_((function (){var or__6484__auto__ = hipo.hiccup.literal_QMARK_(oh);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return !((hipo.hiccup.tag(nh) === hipo.hiccup.tag(oh)));
}
})())){
var nel = hipo.interpreter.create_child(nh,m);
var b__12076__auto__ = ((function (nel,map__12486,map__12486__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$$_DASH_parentElement,cljs.core.cst$sym$el)], 0)))].join('')));
}

return hipo.dom.replace_BANG_(el,nel);
});})(nel,map__12486,map__12486__$1,m,interceptors))
;
var v__12077__auto__ = interceptors;
if((cljs.core.not(v__12077__auto__)) || (cljs.core.empty_QMARK_(v__12077__auto__))){
return b__12076__auto__();
} else {
return hipo.interceptor.call(b__12076__auto__,v__12077__auto__,cljs.core.cst$kw$replace,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nh], null));
}
} else {
var om = hipo.hiccup.attributes(oh);
var nm = hipo.hiccup.attributes(nh);
var och = hipo.hiccup.children(oh);
var nch = hipo.hiccup.children(nh);
var b__12076__auto___12488 = ((function (om,nm,och,nch,map__12486,map__12486__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_(el,hipo.hiccup.flatten_children(och),hipo.hiccup.flatten_children(nch),m);
});})(om,nm,och,nch,map__12486,map__12486__$1,m,interceptors))
;
var v__12077__auto___12489 = interceptors;
if((cljs.core.not(v__12077__auto___12489)) || (cljs.core.empty_QMARK_(v__12077__auto___12489))){
b__12076__auto___12488();
} else {
hipo.interceptor.call(b__12076__auto___12488,v__12077__auto___12489,cljs.core.cst$kw$reconciliate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$old_DASH_value,och,cljs.core.cst$kw$new_DASH_value,nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_(el,hipo.hiccup.keyns(nh),hipo.hiccup.tag(nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__12490){
var map__12493 = p__12490;
var map__12493__$1 = ((((!((map__12493 == null)))?((((map__12493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12493):map__12493);
var m = map__12493__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12493__$1,cljs.core.cst$kw$interceptors);
if(cljs.core.truth_((function (){var or__6484__auto__ = cljs.core.vector_QMARK_(nh);
if(or__6484__auto__){
return or__6484__auto__;
} else {
return hipo.hiccup.literal_QMARK_(nh);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$nh),cljs.core.list(cljs.core.cst$sym$hic_SLASH_literal_QMARK_,cljs.core.cst$sym$nh))], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

var b__12076__auto__ = ((function (map__12493,map__12493__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_(nh))){
if(!((oh === nh))){
var b__12076__auto__ = ((function (map__12493,map__12493__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$$_DASH_parentElement,cljs.core.cst$sym$el)], 0)))].join('')));
}

return hipo.dom.replace_text_BANG_(el,[cljs.core.str(nh)].join(''));
});})(map__12493,map__12493__$1,m,interceptors))
;
var v__12077__auto__ = interceptors;
if((cljs.core.not(v__12077__auto__)) || (cljs.core.empty_QMARK_(v__12077__auto__))){
return b__12076__auto__();
} else {
return hipo.interceptor.call(b__12076__auto__,v__12077__auto__,cljs.core.cst$kw$replace,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_(el,oh,nh,m);
}
});})(map__12493,map__12493__$1,m,interceptors))
;
var v__12077__auto__ = interceptors;
if((cljs.core.not(v__12077__auto__)) || (cljs.core.empty_QMARK_(v__12077__auto__))){
return b__12076__auto__();
} else {
return hipo.interceptor.call(b__12076__auto__,v__12077__auto__,cljs.core.cst$kw$reconciliate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$old_DASH_value,oh,cljs.core.cst$kw$new_DASH_value,nh], null));
}
});
