// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__12450){
var map__12453 = p__12450;
var map__12453__$1 = ((((!((map__12453 == null)))?((((map__12453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12453):map__12453);
var m = map__12453__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12453__$1,cljs.core.cst$kw$interceptors);
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name(cljs.core.name(sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!((cljs.core.map_QMARK_(ov)) && (cljs.core.map_QMARK_(nv)) && ((cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ov) === cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(nv))))){
var b__12324__auto__ = ((function (en,temp__4655__auto__,map__12453,map__12453__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4655__auto___12455__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___12455__$1)){
var l_12456 = temp__4655__auto___12455__$1;
el.removeEventListener(en,l_12456);
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
});})(en,temp__4655__auto__,map__12453,map__12453__$1,m,interceptors))
;
var v__12325__auto__ = interceptors;
if((cljs.core.not(v__12325__auto__)) || (cljs.core.empty_QMARK_(v__12325__auto__))){
return b__12324__auto__();
} else {
return hipo.interceptor.call(b__12324__auto__,v__12325__auto__,(cljs.core.truth_(nv)?cljs.core.cst$kw$update_DASH_handler:cljs.core.cst$kw$remove_DASH_handler),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$name,sok,cljs.core.cst$kw$old_DASH_value,ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$new_DASH_value,nv], null):null)], 0)));
}
} else {
return null;
}
} else {
var b__12324__auto__ = ((function (temp__4655__auto__,map__12453,map__12453__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_(el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__12453,map__12453__$1,m,interceptors))
;
var v__12325__auto__ = interceptors;
if((cljs.core.not(v__12325__auto__)) || (cljs.core.empty_QMARK_(v__12325__auto__))){
return b__12324__auto__();
} else {
return hipo.interceptor.call(b__12324__auto__,v__12325__auto__,(cljs.core.truth_(nv)?cljs.core.cst$kw$update_DASH_attribute:cljs.core.cst$kw$remove_DASH_attribute),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$name,sok,cljs.core.cst$kw$old_DASH_value,ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$new_DASH_value,nv], null):null)], 0)));
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
var temp__4655__auto___12457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___12457)){
var h_12458 = temp__4655__auto___12457;
el.appendChild((hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2 ? hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2(h_12458,m) : hipo.interpreter.create_child.call(null,h_12458,m)));
} else {
}

var G__12459 = cljs.core.rest(v__$1);
v__$1 = G__12459;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element(ns,tag);
var seq__12466_12472 = cljs.core.seq(attrs);
var chunk__12467_12473 = null;
var count__12468_12474 = (0);
var i__12469_12475 = (0);
while(true){
if((i__12469_12475 < count__12468_12474)){
var vec__12470_12476 = chunk__12467_12473.cljs$core$IIndexed$_nth$arity$2(null,i__12469_12475);
var sok_12477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12470_12476,(0),null);
var v_12478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12470_12476,(1),null);
if(cljs.core.truth_(v_12478)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12477,null,v_12478,m);
} else {
}

var G__12479 = seq__12466_12472;
var G__12480 = chunk__12467_12473;
var G__12481 = count__12468_12474;
var G__12482 = (i__12469_12475 + (1));
seq__12466_12472 = G__12479;
chunk__12467_12473 = G__12480;
count__12468_12474 = G__12481;
i__12469_12475 = G__12482;
continue;
} else {
var temp__4657__auto___12483 = cljs.core.seq(seq__12466_12472);
if(temp__4657__auto___12483){
var seq__12466_12484__$1 = temp__4657__auto___12483;
if(cljs.core.chunked_seq_QMARK_(seq__12466_12484__$1)){
var c__7287__auto___12485 = cljs.core.chunk_first(seq__12466_12484__$1);
var G__12486 = cljs.core.chunk_rest(seq__12466_12484__$1);
var G__12487 = c__7287__auto___12485;
var G__12488 = cljs.core.count(c__7287__auto___12485);
var G__12489 = (0);
seq__12466_12472 = G__12486;
chunk__12467_12473 = G__12487;
count__12468_12474 = G__12488;
i__12469_12475 = G__12489;
continue;
} else {
var vec__12471_12490 = cljs.core.first(seq__12466_12484__$1);
var sok_12491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12471_12490,(0),null);
var v_12492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12471_12490,(1),null);
if(cljs.core.truth_(v_12492)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12491,null,v_12492,m);
} else {
}

var G__12493 = cljs.core.next(seq__12466_12484__$1);
var G__12494 = null;
var G__12495 = (0);
var G__12496 = (0);
seq__12466_12472 = G__12493;
chunk__12467_12473 = G__12494;
count__12468_12474 = G__12495;
i__12469_12475 = G__12496;
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
var seq__12509_12521 = cljs.core.seq(nm);
var chunk__12511_12522 = null;
var count__12512_12523 = (0);
var i__12513_12524 = (0);
while(true){
if((i__12513_12524 < count__12512_12523)){
var vec__12515_12525 = chunk__12511_12522.cljs$core$IIndexed$_nth$arity$2(null,i__12513_12524);
var sok_12526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12515_12525,(0),null);
var nv_12527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12515_12525,(1),null);
var ov_12528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_12526);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12526,ov_12528,nv_12527,m);

var G__12529 = seq__12509_12521;
var G__12530 = chunk__12511_12522;
var G__12531 = count__12512_12523;
var G__12532 = (i__12513_12524 + (1));
seq__12509_12521 = G__12529;
chunk__12511_12522 = G__12530;
count__12512_12523 = G__12531;
i__12513_12524 = G__12532;
continue;
} else {
var temp__4657__auto___12533 = cljs.core.seq(seq__12509_12521);
if(temp__4657__auto___12533){
var seq__12509_12534__$1 = temp__4657__auto___12533;
if(cljs.core.chunked_seq_QMARK_(seq__12509_12534__$1)){
var c__7287__auto___12535 = cljs.core.chunk_first(seq__12509_12534__$1);
var G__12536 = cljs.core.chunk_rest(seq__12509_12534__$1);
var G__12537 = c__7287__auto___12535;
var G__12538 = cljs.core.count(c__7287__auto___12535);
var G__12539 = (0);
seq__12509_12521 = G__12536;
chunk__12511_12522 = G__12537;
count__12512_12523 = G__12538;
i__12513_12524 = G__12539;
continue;
} else {
var vec__12516_12540 = cljs.core.first(seq__12509_12534__$1);
var sok_12541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12516_12540,(0),null);
var nv_12542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12516_12540,(1),null);
var ov_12543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_12541);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12541,ov_12543,nv_12542,m);

var G__12544 = cljs.core.next(seq__12509_12534__$1);
var G__12545 = null;
var G__12546 = (0);
var G__12547 = (0);
seq__12509_12521 = G__12544;
chunk__12511_12522 = G__12545;
count__12512_12523 = G__12546;
i__12513_12524 = G__12547;
continue;
}
} else {
}
}
break;
}

var seq__12517 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
var chunk__12518 = null;
var count__12519 = (0);
var i__12520 = (0);
while(true){
if((i__12520 < count__12519)){
var sok = chunk__12518.cljs$core$IIndexed$_nth$arity$2(null,i__12520);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);

var G__12548 = seq__12517;
var G__12549 = chunk__12518;
var G__12550 = count__12519;
var G__12551 = (i__12520 + (1));
seq__12517 = G__12548;
chunk__12518 = G__12549;
count__12519 = G__12550;
i__12520 = G__12551;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12517);
if(temp__4657__auto__){
var seq__12517__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12517__$1)){
var c__7287__auto__ = cljs.core.chunk_first(seq__12517__$1);
var G__12552 = cljs.core.chunk_rest(seq__12517__$1);
var G__12553 = c__7287__auto__;
var G__12554 = cljs.core.count(c__7287__auto__);
var G__12555 = (0);
seq__12517 = G__12552;
chunk__12518 = G__12553;
count__12519 = G__12554;
i__12520 = G__12555;
continue;
} else {
var sok = cljs.core.first(seq__12517__$1);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);

var G__12556 = cljs.core.next(seq__12517__$1);
var G__12557 = null;
var G__12558 = (0);
var G__12559 = (0);
seq__12517 = G__12556;
chunk__12518 = G__12557;
count__12519 = G__12558;
i__12520 = G__12559;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7256__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12566(s__12567){
return (new cljs.core.LazySeq(null,(function (){
var s__12567__$1 = s__12567;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12567__$1);
if(temp__4657__auto__){
var s__12567__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12567__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__12567__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__12569 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__12568 = (0);
while(true){
if((i__12568 < size__7255__auto__)){
var ih = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__12568);
cljs.core.chunk_append(b__12569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null));

var G__12572 = (i__12568 + (1));
i__12568 = G__12572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12569),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12566(cljs.core.chunk_rest(s__12567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12569),null);
}
} else {
var ih = cljs.core.first(s__12567__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12566(cljs.core.rest(s__12567__$2)));
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
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__12573){
var map__12586 = p__12573;
var map__12586__$1 = ((((!((map__12586 == null)))?((((map__12586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12586):map__12586);
var m = map__12586__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12586__$1,cljs.core.cst$kw$interceptors);
var om = hipo.interpreter.keyed_children__GT_indexed_map(och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map(nch);
var cs = hipo.dom.children.cljs$core$IFn$_invoke$arity$2(el,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(nm)),cljs.core.set(cljs.core.keys(om)))));
var seq__12588_12598 = cljs.core.seq(nm);
var chunk__12589_12599 = null;
var count__12590_12600 = (0);
var i__12591_12601 = (0);
while(true){
if((i__12591_12601 < count__12590_12600)){
var vec__12592_12602 = chunk__12589_12599.cljs$core$IIndexed$_nth$arity$2(null,i__12591_12601);
var i_12603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592_12602,(0),null);
var vec__12593_12604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592_12602,(1),null);
var ii_12605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593_12604,(0),null);
var h_12606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593_12604,(1),null);
var temp__4655__auto___12607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_12603);
if(cljs.core.truth_(temp__4655__auto___12607)){
var vec__12594_12608 = temp__4655__auto___12607;
var iii_12609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594_12608,(0),null);
var oh_12610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594_12608,(1),null);
var cel_12611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_12609);
if((ii_12605 === iii_12609)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_12611,oh_12610,h_12606,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_12611,oh_12610,h_12606,m));
} else {
var b__12324__auto___12612 = ((function (seq__12588_12598,chunk__12589_12599,count__12590_12600,i__12591_12601,cel_12611,vec__12594_12608,iii_12609,oh_12610,temp__4655__auto___12607,vec__12592_12602,i_12603,vec__12593_12604,ii_12605,h_12606,om,nm,cs,map__12586,map__12586__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_12611);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_12610,h_12606,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_12610,h_12606,m));

return hipo.dom.insert_child_BANG_(el,ii_12605,ncel);
});})(seq__12588_12598,chunk__12589_12599,count__12590_12600,i__12591_12601,cel_12611,vec__12594_12608,iii_12609,oh_12610,temp__4655__auto___12607,vec__12592_12602,i_12603,vec__12593_12604,ii_12605,h_12606,om,nm,cs,map__12586,map__12586__$1,m,interceptors))
;
var v__12325__auto___12613 = interceptors;
if((cljs.core.not(v__12325__auto___12613)) || (cljs.core.empty_QMARK_(v__12325__auto___12613))){
b__12324__auto___12612();
} else {
hipo.interceptor.call(b__12324__auto___12612,v__12325__auto___12613,cljs.core.cst$kw$move,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12606,cljs.core.cst$kw$index,ii_12605], null));
}
}
} else {
var b__12324__auto___12614 = ((function (seq__12588_12598,chunk__12589_12599,count__12590_12600,i__12591_12601,temp__4655__auto___12607,vec__12592_12602,i_12603,vec__12593_12604,ii_12605,h_12606,om,nm,cs,map__12586,map__12586__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_12605,hipo.interpreter.create_child(h_12606,m));
});})(seq__12588_12598,chunk__12589_12599,count__12590_12600,i__12591_12601,temp__4655__auto___12607,vec__12592_12602,i_12603,vec__12593_12604,ii_12605,h_12606,om,nm,cs,map__12586,map__12586__$1,m,interceptors))
;
var v__12325__auto___12615 = interceptors;
if((cljs.core.not(v__12325__auto___12615)) || (cljs.core.empty_QMARK_(v__12325__auto___12615))){
b__12324__auto___12614();
} else {
hipo.interceptor.call(b__12324__auto___12614,v__12325__auto___12615,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12606,cljs.core.cst$kw$index,ii_12605], null));
}
}

var G__12616 = seq__12588_12598;
var G__12617 = chunk__12589_12599;
var G__12618 = count__12590_12600;
var G__12619 = (i__12591_12601 + (1));
seq__12588_12598 = G__12616;
chunk__12589_12599 = G__12617;
count__12590_12600 = G__12618;
i__12591_12601 = G__12619;
continue;
} else {
var temp__4657__auto___12620 = cljs.core.seq(seq__12588_12598);
if(temp__4657__auto___12620){
var seq__12588_12621__$1 = temp__4657__auto___12620;
if(cljs.core.chunked_seq_QMARK_(seq__12588_12621__$1)){
var c__7287__auto___12622 = cljs.core.chunk_first(seq__12588_12621__$1);
var G__12623 = cljs.core.chunk_rest(seq__12588_12621__$1);
var G__12624 = c__7287__auto___12622;
var G__12625 = cljs.core.count(c__7287__auto___12622);
var G__12626 = (0);
seq__12588_12598 = G__12623;
chunk__12589_12599 = G__12624;
count__12590_12600 = G__12625;
i__12591_12601 = G__12626;
continue;
} else {
var vec__12595_12627 = cljs.core.first(seq__12588_12621__$1);
var i_12628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595_12627,(0),null);
var vec__12596_12629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595_12627,(1),null);
var ii_12630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12596_12629,(0),null);
var h_12631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12596_12629,(1),null);
var temp__4655__auto___12632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_12628);
if(cljs.core.truth_(temp__4655__auto___12632)){
var vec__12597_12633 = temp__4655__auto___12632;
var iii_12634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12597_12633,(0),null);
var oh_12635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12597_12633,(1),null);
var cel_12636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_12634);
if((ii_12630 === iii_12634)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_12636,oh_12635,h_12631,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_12636,oh_12635,h_12631,m));
} else {
var b__12324__auto___12637 = ((function (seq__12588_12598,chunk__12589_12599,count__12590_12600,i__12591_12601,cel_12636,vec__12597_12633,iii_12634,oh_12635,temp__4655__auto___12632,vec__12595_12627,i_12628,vec__12596_12629,ii_12630,h_12631,seq__12588_12621__$1,temp__4657__auto___12620,om,nm,cs,map__12586,map__12586__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_12636);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_12635,h_12631,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_12635,h_12631,m));

return hipo.dom.insert_child_BANG_(el,ii_12630,ncel);
});})(seq__12588_12598,chunk__12589_12599,count__12590_12600,i__12591_12601,cel_12636,vec__12597_12633,iii_12634,oh_12635,temp__4655__auto___12632,vec__12595_12627,i_12628,vec__12596_12629,ii_12630,h_12631,seq__12588_12621__$1,temp__4657__auto___12620,om,nm,cs,map__12586,map__12586__$1,m,interceptors))
;
var v__12325__auto___12638 = interceptors;
if((cljs.core.not(v__12325__auto___12638)) || (cljs.core.empty_QMARK_(v__12325__auto___12638))){
b__12324__auto___12637();
} else {
hipo.interceptor.call(b__12324__auto___12637,v__12325__auto___12638,cljs.core.cst$kw$move,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12631,cljs.core.cst$kw$index,ii_12630], null));
}
}
} else {
var b__12324__auto___12639 = ((function (seq__12588_12598,chunk__12589_12599,count__12590_12600,i__12591_12601,temp__4655__auto___12632,vec__12595_12627,i_12628,vec__12596_12629,ii_12630,h_12631,seq__12588_12621__$1,temp__4657__auto___12620,om,nm,cs,map__12586,map__12586__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_12630,hipo.interpreter.create_child(h_12631,m));
});})(seq__12588_12598,chunk__12589_12599,count__12590_12600,i__12591_12601,temp__4655__auto___12632,vec__12595_12627,i_12628,vec__12596_12629,ii_12630,h_12631,seq__12588_12621__$1,temp__4657__auto___12620,om,nm,cs,map__12586,map__12586__$1,m,interceptors))
;
var v__12325__auto___12640 = interceptors;
if((cljs.core.not(v__12325__auto___12640)) || (cljs.core.empty_QMARK_(v__12325__auto___12640))){
b__12324__auto___12639();
} else {
hipo.interceptor.call(b__12324__auto___12639,v__12325__auto___12640,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12631,cljs.core.cst$kw$index,ii_12630], null));
}
}

var G__12641 = cljs.core.next(seq__12588_12621__$1);
var G__12642 = null;
var G__12643 = (0);
var G__12644 = (0);
seq__12588_12598 = G__12641;
chunk__12589_12599 = G__12642;
count__12590_12600 = G__12643;
i__12591_12601 = G__12644;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
if((d > (0))){
var b__12324__auto__ = ((function (d,om,nm,cs,map__12586,map__12586__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});})(d,om,nm,cs,map__12586,map__12586__$1,m,interceptors))
;
var v__12325__auto__ = interceptors;
if((cljs.core.not(v__12325__auto__)) || (cljs.core.empty_QMARK_(v__12325__auto__))){
return b__12324__auto__();
} else {
return hipo.interceptor.call(b__12324__auto__,v__12325__auto__,cljs.core.cst$kw$remove_DASH_trailing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$count,d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__12645){
var map__12648 = p__12645;
var map__12648__$1 = ((((!((map__12648 == null)))?((((map__12648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12648):map__12648);
var m = map__12648__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12648__$1,cljs.core.cst$kw$interceptors);
var oc = cljs.core.count(och);
var nc = cljs.core.count(nch);
var d = (oc - nc);
if((d > (0))){
var b__12324__auto___12650 = ((function (oc,nc,d,map__12648,map__12648__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});})(oc,nc,d,map__12648,map__12648__$1,m,interceptors))
;
var v__12325__auto___12651 = interceptors;
if((cljs.core.not(v__12325__auto___12651)) || (cljs.core.empty_QMARK_(v__12325__auto___12651))){
b__12324__auto___12650();
} else {
hipo.interceptor.call(b__12324__auto___12650,v__12325__auto___12651,cljs.core.cst$kw$remove_DASH_trailing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$count,d], null));
}
} else {
}

var n__7387__auto___12652 = (function (){var x__6822__auto__ = oc;
var y__6823__auto__ = nc;
return ((x__6822__auto__ < y__6823__auto__) ? x__6822__auto__ : y__6823__auto__);
})();
var i_12653 = (0);
while(true){
if((i_12653 < n__7387__auto___12652)){
var ov_12654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(och,i_12653);
var nv_12655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,i_12653);
if(!(((ov_12654 == null)) && ((nv_12655 == null)))){
if((ov_12654 == null)){
var b__12324__auto___12656 = ((function (i_12653,ov_12654,nv_12655,n__7387__auto___12652,oc,nc,d,map__12648,map__12648__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,i_12653,hipo.interpreter.create_child(nv_12655,m));
});})(i_12653,ov_12654,nv_12655,n__7387__auto___12652,oc,nc,d,map__12648,map__12648__$1,m,interceptors))
;
var v__12325__auto___12657 = interceptors;
if((cljs.core.not(v__12325__auto___12657)) || (cljs.core.empty_QMARK_(v__12325__auto___12657))){
b__12324__auto___12656();
} else {
hipo.interceptor.call(b__12324__auto___12656,v__12325__auto___12657,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nv_12655,cljs.core.cst$kw$index,i_12653], null));
}
} else {
if((nv_12655 == null)){
var b__12324__auto___12658 = ((function (i_12653,ov_12654,nv_12655,n__7387__auto___12652,oc,nc,d,map__12648,map__12648__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_(el,i_12653);
});})(i_12653,ov_12654,nv_12655,n__7387__auto___12652,oc,nc,d,map__12648,map__12648__$1,m,interceptors))
;
var v__12325__auto___12659 = interceptors;
if((cljs.core.not(v__12325__auto___12659)) || (cljs.core.empty_QMARK_(v__12325__auto___12659))){
b__12324__auto___12658();
} else {
hipo.interceptor.call(b__12324__auto___12658,v__12325__auto___12659,cljs.core.cst$kw$remove,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$index,i_12653], null));
}
} else {
var temp__4655__auto___12660 = hipo.dom.child(el,i_12653);
if(cljs.core.truth_(temp__4655__auto___12660)){
var cel_12661 = temp__4655__auto___12660;
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_12661,ov_12654,nv_12655,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_12661,ov_12654,nv_12655,m));
} else {
}

}
}
} else {
}

var G__12662 = (i_12653 + (1));
i_12653 = G__12662;
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
var b__12324__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__12648,map__12648__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child(h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__12648,map__12648__$1,m,interceptors))
;
var v__12325__auto__ = interceptors;
if((cljs.core.not(v__12325__auto__)) || (cljs.core.empty_QMARK_(v__12325__auto__))){
return b__12324__auto__();
} else {
return hipo.interceptor.call(b__12324__auto__,v__12325__auto__,cljs.core.cst$kw$append,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(nch,oc));
var b__12324__auto___12663 = ((function (f,cs,oc,nc,d,map__12648,map__12648__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_(f,cs,m);
});})(f,cs,oc,nc,d,map__12648,map__12648__$1,m,interceptors))
;
var v__12325__auto___12664 = interceptors;
if((cljs.core.not(v__12325__auto___12664)) || (cljs.core.empty_QMARK_(v__12325__auto___12664))){
b__12324__auto___12663();
} else {
hipo.interceptor.call(b__12324__auto___12663,v__12325__auto___12664,cljs.core.cst$kw$append,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,cs], null));
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
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__12665){
var map__12668 = p__12665;
var map__12668__$1 = ((((!((map__12668 == null)))?((((map__12668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12668):map__12668);
var m = map__12668__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12668__$1,cljs.core.cst$kw$interceptors);
if(cljs.core.empty_QMARK_(nch)){
if(!(cljs.core.empty_QMARK_(och))){
var b__12324__auto__ = ((function (map__12668,map__12668__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_(el);
});})(map__12668,map__12668__$1,m,interceptors))
;
var v__12325__auto__ = interceptors;
if((cljs.core.not(v__12325__auto__)) || (cljs.core.empty_QMARK_(v__12325__auto__))){
return b__12324__auto__();
} else {
return hipo.interceptor.call(b__12324__auto__,v__12325__auto__,cljs.core.cst$kw$clear,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,el], null));
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
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__12670){
var map__12673 = p__12670;
var map__12673__$1 = ((((!((map__12673 == null)))?((((map__12673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12673):map__12673);
var m = map__12673__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12673__$1,cljs.core.cst$kw$interceptors);
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
var b__12324__auto__ = ((function (nel,map__12673,map__12673__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$$_DASH_parentElement,cljs.core.cst$sym$el)], 0)))].join('')));
}

return hipo.dom.replace_BANG_(el,nel);
});})(nel,map__12673,map__12673__$1,m,interceptors))
;
var v__12325__auto__ = interceptors;
if((cljs.core.not(v__12325__auto__)) || (cljs.core.empty_QMARK_(v__12325__auto__))){
return b__12324__auto__();
} else {
return hipo.interceptor.call(b__12324__auto__,v__12325__auto__,cljs.core.cst$kw$replace,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nh], null));
}
} else {
var om = hipo.hiccup.attributes(oh);
var nm = hipo.hiccup.attributes(nh);
var och = hipo.hiccup.children(oh);
var nch = hipo.hiccup.children(nh);
var b__12324__auto___12675 = ((function (om,nm,och,nch,map__12673,map__12673__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_(el,hipo.hiccup.flatten_children(och),hipo.hiccup.flatten_children(nch),m);
});})(om,nm,och,nch,map__12673,map__12673__$1,m,interceptors))
;
var v__12325__auto___12676 = interceptors;
if((cljs.core.not(v__12325__auto___12676)) || (cljs.core.empty_QMARK_(v__12325__auto___12676))){
b__12324__auto___12675();
} else {
hipo.interceptor.call(b__12324__auto___12675,v__12325__auto___12676,cljs.core.cst$kw$reconciliate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$old_DASH_value,och,cljs.core.cst$kw$new_DASH_value,nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_(el,hipo.hiccup.keyns(nh),hipo.hiccup.tag(nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__12677){
var map__12680 = p__12677;
var map__12680__$1 = ((((!((map__12680 == null)))?((((map__12680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12680):map__12680);
var m = map__12680__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12680__$1,cljs.core.cst$kw$interceptors);
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

var b__12324__auto__ = ((function (map__12680,map__12680__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_(nh))){
if(!((oh === nh))){
var b__12324__auto__ = ((function (map__12680,map__12680__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$$_DASH_parentElement,cljs.core.cst$sym$el)], 0)))].join('')));
}

return hipo.dom.replace_text_BANG_(el,[cljs.core.str(nh)].join(''));
});})(map__12680,map__12680__$1,m,interceptors))
;
var v__12325__auto__ = interceptors;
if((cljs.core.not(v__12325__auto__)) || (cljs.core.empty_QMARK_(v__12325__auto__))){
return b__12324__auto__();
} else {
return hipo.interceptor.call(b__12324__auto__,v__12325__auto__,cljs.core.cst$kw$replace,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_(el,oh,nh,m);
}
});})(map__12680,map__12680__$1,m,interceptors))
;
var v__12325__auto__ = interceptors;
if((cljs.core.not(v__12325__auto__)) || (cljs.core.empty_QMARK_(v__12325__auto__))){
return b__12324__auto__();
} else {
return hipo.interceptor.call(b__12324__auto__,v__12325__auto__,cljs.core.cst$kw$reconciliate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$old_DASH_value,oh,cljs.core.cst$kw$new_DASH_value,nh], null));
}
});
