// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__12448){
var map__12451 = p__12448;
var map__12451__$1 = ((((!((map__12451 == null)))?((((map__12451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12451):map__12451);
var m = map__12451__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12451__$1,cljs.core.cst$kw$interceptors);
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name(cljs.core.name(sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!((cljs.core.map_QMARK_(ov)) && (cljs.core.map_QMARK_(nv)) && ((cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ov) === cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(nv))))){
var b__12322__auto__ = ((function (en,temp__4655__auto__,map__12451,map__12451__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4655__auto___12453__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___12453__$1)){
var l_12454 = temp__4655__auto___12453__$1;
el.removeEventListener(en,l_12454);
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
});})(en,temp__4655__auto__,map__12451,map__12451__$1,m,interceptors))
;
var v__12323__auto__ = interceptors;
if((cljs.core.not(v__12323__auto__)) || (cljs.core.empty_QMARK_(v__12323__auto__))){
return b__12322__auto__();
} else {
return hipo.interceptor.call(b__12322__auto__,v__12323__auto__,(cljs.core.truth_(nv)?cljs.core.cst$kw$update_DASH_handler:cljs.core.cst$kw$remove_DASH_handler),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$name,sok,cljs.core.cst$kw$old_DASH_value,ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$new_DASH_value,nv], null):null)], 0)));
}
} else {
return null;
}
} else {
var b__12322__auto__ = ((function (temp__4655__auto__,map__12451,map__12451__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_(el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__12451,map__12451__$1,m,interceptors))
;
var v__12323__auto__ = interceptors;
if((cljs.core.not(v__12323__auto__)) || (cljs.core.empty_QMARK_(v__12323__auto__))){
return b__12322__auto__();
} else {
return hipo.interceptor.call(b__12322__auto__,v__12323__auto__,(cljs.core.truth_(nv)?cljs.core.cst$kw$update_DASH_attribute:cljs.core.cst$kw$remove_DASH_attribute),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$name,sok,cljs.core.cst$kw$old_DASH_value,ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$new_DASH_value,nv], null):null)], 0)));
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
var temp__4655__auto___12455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___12455)){
var h_12456 = temp__4655__auto___12455;
el.appendChild((hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2 ? hipo.interpreter.create_child.cljs$core$IFn$_invoke$arity$2(h_12456,m) : hipo.interpreter.create_child.call(null,h_12456,m)));
} else {
}

var G__12457 = cljs.core.rest(v__$1);
v__$1 = G__12457;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element(ns,tag);
var seq__12464_12470 = cljs.core.seq(attrs);
var chunk__12465_12471 = null;
var count__12466_12472 = (0);
var i__12467_12473 = (0);
while(true){
if((i__12467_12473 < count__12466_12472)){
var vec__12468_12474 = chunk__12465_12471.cljs$core$IIndexed$_nth$arity$2(null,i__12467_12473);
var sok_12475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468_12474,(0),null);
var v_12476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468_12474,(1),null);
if(cljs.core.truth_(v_12476)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12475,null,v_12476,m);
} else {
}

var G__12477 = seq__12464_12470;
var G__12478 = chunk__12465_12471;
var G__12479 = count__12466_12472;
var G__12480 = (i__12467_12473 + (1));
seq__12464_12470 = G__12477;
chunk__12465_12471 = G__12478;
count__12466_12472 = G__12479;
i__12467_12473 = G__12480;
continue;
} else {
var temp__4657__auto___12481 = cljs.core.seq(seq__12464_12470);
if(temp__4657__auto___12481){
var seq__12464_12482__$1 = temp__4657__auto___12481;
if(cljs.core.chunked_seq_QMARK_(seq__12464_12482__$1)){
var c__7287__auto___12483 = cljs.core.chunk_first(seq__12464_12482__$1);
var G__12484 = cljs.core.chunk_rest(seq__12464_12482__$1);
var G__12485 = c__7287__auto___12483;
var G__12486 = cljs.core.count(c__7287__auto___12483);
var G__12487 = (0);
seq__12464_12470 = G__12484;
chunk__12465_12471 = G__12485;
count__12466_12472 = G__12486;
i__12467_12473 = G__12487;
continue;
} else {
var vec__12469_12488 = cljs.core.first(seq__12464_12482__$1);
var sok_12489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12469_12488,(0),null);
var v_12490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12469_12488,(1),null);
if(cljs.core.truth_(v_12490)){
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12489,null,v_12490,m);
} else {
}

var G__12491 = cljs.core.next(seq__12464_12482__$1);
var G__12492 = null;
var G__12493 = (0);
var G__12494 = (0);
seq__12464_12470 = G__12491;
chunk__12465_12471 = G__12492;
count__12466_12472 = G__12493;
i__12467_12473 = G__12494;
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
var seq__12507_12519 = cljs.core.seq(nm);
var chunk__12509_12520 = null;
var count__12510_12521 = (0);
var i__12511_12522 = (0);
while(true){
if((i__12511_12522 < count__12510_12521)){
var vec__12513_12523 = chunk__12509_12520.cljs$core$IIndexed$_nth$arity$2(null,i__12511_12522);
var sok_12524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12513_12523,(0),null);
var nv_12525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12513_12523,(1),null);
var ov_12526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_12524);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12524,ov_12526,nv_12525,m);

var G__12527 = seq__12507_12519;
var G__12528 = chunk__12509_12520;
var G__12529 = count__12510_12521;
var G__12530 = (i__12511_12522 + (1));
seq__12507_12519 = G__12527;
chunk__12509_12520 = G__12528;
count__12510_12521 = G__12529;
i__12511_12522 = G__12530;
continue;
} else {
var temp__4657__auto___12531 = cljs.core.seq(seq__12507_12519);
if(temp__4657__auto___12531){
var seq__12507_12532__$1 = temp__4657__auto___12531;
if(cljs.core.chunked_seq_QMARK_(seq__12507_12532__$1)){
var c__7287__auto___12533 = cljs.core.chunk_first(seq__12507_12532__$1);
var G__12534 = cljs.core.chunk_rest(seq__12507_12532__$1);
var G__12535 = c__7287__auto___12533;
var G__12536 = cljs.core.count(c__7287__auto___12533);
var G__12537 = (0);
seq__12507_12519 = G__12534;
chunk__12509_12520 = G__12535;
count__12510_12521 = G__12536;
i__12511_12522 = G__12537;
continue;
} else {
var vec__12514_12538 = cljs.core.first(seq__12507_12532__$1);
var sok_12539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12514_12538,(0),null);
var nv_12540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12514_12538,(1),null);
var ov_12541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok_12539);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok_12539,ov_12541,nv_12540,m);

var G__12542 = cljs.core.next(seq__12507_12532__$1);
var G__12543 = null;
var G__12544 = (0);
var G__12545 = (0);
seq__12507_12519 = G__12542;
chunk__12509_12520 = G__12543;
count__12510_12521 = G__12544;
i__12511_12522 = G__12545;
continue;
}
} else {
}
}
break;
}

var seq__12515 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
var chunk__12516 = null;
var count__12517 = (0);
var i__12518 = (0);
while(true){
if((i__12518 < count__12517)){
var sok = chunk__12516.cljs$core$IIndexed$_nth$arity$2(null,i__12518);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);

var G__12546 = seq__12515;
var G__12547 = chunk__12516;
var G__12548 = count__12517;
var G__12549 = (i__12518 + (1));
seq__12515 = G__12546;
chunk__12516 = G__12547;
count__12517 = G__12548;
i__12518 = G__12549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12515);
if(temp__4657__auto__){
var seq__12515__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12515__$1)){
var c__7287__auto__ = cljs.core.chunk_first(seq__12515__$1);
var G__12550 = cljs.core.chunk_rest(seq__12515__$1);
var G__12551 = c__7287__auto__;
var G__12552 = cljs.core.count(c__7287__auto__);
var G__12553 = (0);
seq__12515 = G__12550;
chunk__12516 = G__12551;
count__12517 = G__12552;
i__12518 = G__12553;
continue;
} else {
var sok = cljs.core.first(seq__12515__$1);
hipo.interpreter.set_attribute_BANG_(el,ns,tag,sok,cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,sok),null,m);

var G__12554 = cljs.core.next(seq__12515__$1);
var G__12555 = null;
var G__12556 = (0);
var G__12557 = (0);
seq__12515 = G__12554;
chunk__12516 = G__12555;
count__12517 = G__12556;
i__12518 = G__12557;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7256__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12564(s__12565){
return (new cljs.core.LazySeq(null,(function (){
var s__12565__$1 = s__12565;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__12565__$1);
if(temp__4657__auto__){
var s__12565__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12565__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__12565__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__12567 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__12566 = (0);
while(true){
if((i__12566 < size__7255__auto__)){
var ih = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__12566);
cljs.core.chunk_append(b__12567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null));

var G__12570 = (i__12566 + (1));
i__12566 = G__12570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12567),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12564(cljs.core.chunk_rest(s__12565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12567),null);
}
} else {
var ih = cljs.core.first(s__12565__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12564(cljs.core.rest(s__12565__$2)));
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
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__12571){
var map__12584 = p__12571;
var map__12584__$1 = ((((!((map__12584 == null)))?((((map__12584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12584):map__12584);
var m = map__12584__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12584__$1,cljs.core.cst$kw$interceptors);
var om = hipo.interpreter.keyed_children__GT_indexed_map(och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map(nch);
var cs = hipo.dom.children.cljs$core$IFn$_invoke$arity$2(el,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(nm)),cljs.core.set(cljs.core.keys(om)))));
var seq__12586_12596 = cljs.core.seq(nm);
var chunk__12587_12597 = null;
var count__12588_12598 = (0);
var i__12589_12599 = (0);
while(true){
if((i__12589_12599 < count__12588_12598)){
var vec__12590_12600 = chunk__12587_12597.cljs$core$IIndexed$_nth$arity$2(null,i__12589_12599);
var i_12601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12590_12600,(0),null);
var vec__12591_12602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12590_12600,(1),null);
var ii_12603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12591_12602,(0),null);
var h_12604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12591_12602,(1),null);
var temp__4655__auto___12605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_12601);
if(cljs.core.truth_(temp__4655__auto___12605)){
var vec__12592_12606 = temp__4655__auto___12605;
var iii_12607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592_12606,(0),null);
var oh_12608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12592_12606,(1),null);
var cel_12609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_12607);
if((ii_12603 === iii_12607)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_12609,oh_12608,h_12604,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_12609,oh_12608,h_12604,m));
} else {
var b__12322__auto___12610 = ((function (seq__12586_12596,chunk__12587_12597,count__12588_12598,i__12589_12599,cel_12609,vec__12592_12606,iii_12607,oh_12608,temp__4655__auto___12605,vec__12590_12600,i_12601,vec__12591_12602,ii_12603,h_12604,om,nm,cs,map__12584,map__12584__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_12609);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_12608,h_12604,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_12608,h_12604,m));

return hipo.dom.insert_child_BANG_(el,ii_12603,ncel);
});})(seq__12586_12596,chunk__12587_12597,count__12588_12598,i__12589_12599,cel_12609,vec__12592_12606,iii_12607,oh_12608,temp__4655__auto___12605,vec__12590_12600,i_12601,vec__12591_12602,ii_12603,h_12604,om,nm,cs,map__12584,map__12584__$1,m,interceptors))
;
var v__12323__auto___12611 = interceptors;
if((cljs.core.not(v__12323__auto___12611)) || (cljs.core.empty_QMARK_(v__12323__auto___12611))){
b__12322__auto___12610();
} else {
hipo.interceptor.call(b__12322__auto___12610,v__12323__auto___12611,cljs.core.cst$kw$move,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12604,cljs.core.cst$kw$index,ii_12603], null));
}
}
} else {
var b__12322__auto___12612 = ((function (seq__12586_12596,chunk__12587_12597,count__12588_12598,i__12589_12599,temp__4655__auto___12605,vec__12590_12600,i_12601,vec__12591_12602,ii_12603,h_12604,om,nm,cs,map__12584,map__12584__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_12603,hipo.interpreter.create_child(h_12604,m));
});})(seq__12586_12596,chunk__12587_12597,count__12588_12598,i__12589_12599,temp__4655__auto___12605,vec__12590_12600,i_12601,vec__12591_12602,ii_12603,h_12604,om,nm,cs,map__12584,map__12584__$1,m,interceptors))
;
var v__12323__auto___12613 = interceptors;
if((cljs.core.not(v__12323__auto___12613)) || (cljs.core.empty_QMARK_(v__12323__auto___12613))){
b__12322__auto___12612();
} else {
hipo.interceptor.call(b__12322__auto___12612,v__12323__auto___12613,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12604,cljs.core.cst$kw$index,ii_12603], null));
}
}

var G__12614 = seq__12586_12596;
var G__12615 = chunk__12587_12597;
var G__12616 = count__12588_12598;
var G__12617 = (i__12589_12599 + (1));
seq__12586_12596 = G__12614;
chunk__12587_12597 = G__12615;
count__12588_12598 = G__12616;
i__12589_12599 = G__12617;
continue;
} else {
var temp__4657__auto___12618 = cljs.core.seq(seq__12586_12596);
if(temp__4657__auto___12618){
var seq__12586_12619__$1 = temp__4657__auto___12618;
if(cljs.core.chunked_seq_QMARK_(seq__12586_12619__$1)){
var c__7287__auto___12620 = cljs.core.chunk_first(seq__12586_12619__$1);
var G__12621 = cljs.core.chunk_rest(seq__12586_12619__$1);
var G__12622 = c__7287__auto___12620;
var G__12623 = cljs.core.count(c__7287__auto___12620);
var G__12624 = (0);
seq__12586_12596 = G__12621;
chunk__12587_12597 = G__12622;
count__12588_12598 = G__12623;
i__12589_12599 = G__12624;
continue;
} else {
var vec__12593_12625 = cljs.core.first(seq__12586_12619__$1);
var i_12626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593_12625,(0),null);
var vec__12594_12627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12593_12625,(1),null);
var ii_12628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594_12627,(0),null);
var h_12629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12594_12627,(1),null);
var temp__4655__auto___12630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(om,i_12626);
if(cljs.core.truth_(temp__4655__auto___12630)){
var vec__12595_12631 = temp__4655__auto___12630;
var iii_12632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595_12631,(0),null);
var oh_12633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12595_12631,(1),null);
var cel_12634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,iii_12632);
if((ii_12628 === iii_12632)){
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_12634,oh_12633,h_12629,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_12634,oh_12633,h_12629,m));
} else {
var b__12322__auto___12635 = ((function (seq__12586_12596,chunk__12587_12597,count__12588_12598,i__12589_12599,cel_12634,vec__12595_12631,iii_12632,oh_12633,temp__4655__auto___12630,vec__12593_12625,i_12626,vec__12594_12627,ii_12628,h_12629,seq__12586_12619__$1,temp__4657__auto___12618,om,nm,cs,map__12584,map__12584__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_12634);
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(ncel,oh_12633,h_12629,m) : hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_12633,h_12629,m));

return hipo.dom.insert_child_BANG_(el,ii_12628,ncel);
});})(seq__12586_12596,chunk__12587_12597,count__12588_12598,i__12589_12599,cel_12634,vec__12595_12631,iii_12632,oh_12633,temp__4655__auto___12630,vec__12593_12625,i_12626,vec__12594_12627,ii_12628,h_12629,seq__12586_12619__$1,temp__4657__auto___12618,om,nm,cs,map__12584,map__12584__$1,m,interceptors))
;
var v__12323__auto___12636 = interceptors;
if((cljs.core.not(v__12323__auto___12636)) || (cljs.core.empty_QMARK_(v__12323__auto___12636))){
b__12322__auto___12635();
} else {
hipo.interceptor.call(b__12322__auto___12635,v__12323__auto___12636,cljs.core.cst$kw$move,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12629,cljs.core.cst$kw$index,ii_12628], null));
}
}
} else {
var b__12322__auto___12637 = ((function (seq__12586_12596,chunk__12587_12597,count__12588_12598,i__12589_12599,temp__4655__auto___12630,vec__12593_12625,i_12626,vec__12594_12627,ii_12628,h_12629,seq__12586_12619__$1,temp__4657__auto___12618,om,nm,cs,map__12584,map__12584__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,ii_12628,hipo.interpreter.create_child(h_12629,m));
});})(seq__12586_12596,chunk__12587_12597,count__12588_12598,i__12589_12599,temp__4655__auto___12630,vec__12593_12625,i_12626,vec__12594_12627,ii_12628,h_12629,seq__12586_12619__$1,temp__4657__auto___12618,om,nm,cs,map__12584,map__12584__$1,m,interceptors))
;
var v__12323__auto___12638 = interceptors;
if((cljs.core.not(v__12323__auto___12638)) || (cljs.core.empty_QMARK_(v__12323__auto___12638))){
b__12322__auto___12637();
} else {
hipo.interceptor.call(b__12322__auto___12637,v__12323__auto___12638,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h_12629,cljs.core.cst$kw$index,ii_12628], null));
}
}

var G__12639 = cljs.core.next(seq__12586_12619__$1);
var G__12640 = null;
var G__12641 = (0);
var G__12642 = (0);
seq__12586_12596 = G__12639;
chunk__12587_12597 = G__12640;
count__12588_12598 = G__12641;
i__12589_12599 = G__12642;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(om)),cljs.core.set(cljs.core.keys(nm))));
if((d > (0))){
var b__12322__auto__ = ((function (d,om,nm,cs,map__12584,map__12584__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});})(d,om,nm,cs,map__12584,map__12584__$1,m,interceptors))
;
var v__12323__auto__ = interceptors;
if((cljs.core.not(v__12323__auto__)) || (cljs.core.empty_QMARK_(v__12323__auto__))){
return b__12322__auto__();
} else {
return hipo.interceptor.call(b__12322__auto__,v__12323__auto__,cljs.core.cst$kw$remove_DASH_trailing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$count,d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__12643){
var map__12646 = p__12643;
var map__12646__$1 = ((((!((map__12646 == null)))?((((map__12646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12646):map__12646);
var m = map__12646__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12646__$1,cljs.core.cst$kw$interceptors);
var oc = cljs.core.count(och);
var nc = cljs.core.count(nch);
var d = (oc - nc);
if((d > (0))){
var b__12322__auto___12648 = ((function (oc,nc,d,map__12646,map__12646__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_(el,d);
});})(oc,nc,d,map__12646,map__12646__$1,m,interceptors))
;
var v__12323__auto___12649 = interceptors;
if((cljs.core.not(v__12323__auto___12649)) || (cljs.core.empty_QMARK_(v__12323__auto___12649))){
b__12322__auto___12648();
} else {
hipo.interceptor.call(b__12322__auto___12648,v__12323__auto___12649,cljs.core.cst$kw$remove_DASH_trailing,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$count,d], null));
}
} else {
}

var n__7387__auto___12650 = (function (){var x__6822__auto__ = oc;
var y__6823__auto__ = nc;
return ((x__6822__auto__ < y__6823__auto__) ? x__6822__auto__ : y__6823__auto__);
})();
var i_12651 = (0);
while(true){
if((i_12651 < n__7387__auto___12650)){
var ov_12652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(och,i_12651);
var nv_12653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nch,i_12651);
if(!(((ov_12652 == null)) && ((nv_12653 == null)))){
if((ov_12652 == null)){
var b__12322__auto___12654 = ((function (i_12651,ov_12652,nv_12653,n__7387__auto___12650,oc,nc,d,map__12646,map__12646__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_(el,i_12651,hipo.interpreter.create_child(nv_12653,m));
});})(i_12651,ov_12652,nv_12653,n__7387__auto___12650,oc,nc,d,map__12646,map__12646__$1,m,interceptors))
;
var v__12323__auto___12655 = interceptors;
if((cljs.core.not(v__12323__auto___12655)) || (cljs.core.empty_QMARK_(v__12323__auto___12655))){
b__12322__auto___12654();
} else {
hipo.interceptor.call(b__12322__auto___12654,v__12323__auto___12655,cljs.core.cst$kw$insert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nv_12653,cljs.core.cst$kw$index,i_12651], null));
}
} else {
if((nv_12653 == null)){
var b__12322__auto___12656 = ((function (i_12651,ov_12652,nv_12653,n__7387__auto___12650,oc,nc,d,map__12646,map__12646__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_(el,i_12651);
});})(i_12651,ov_12652,nv_12653,n__7387__auto___12650,oc,nc,d,map__12646,map__12646__$1,m,interceptors))
;
var v__12323__auto___12657 = interceptors;
if((cljs.core.not(v__12323__auto___12657)) || (cljs.core.empty_QMARK_(v__12323__auto___12657))){
b__12322__auto___12656();
} else {
hipo.interceptor.call(b__12322__auto___12656,v__12323__auto___12657,cljs.core.cst$kw$remove,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$index,i_12651], null));
}
} else {
var temp__4655__auto___12658 = hipo.dom.child(el,i_12651);
if(cljs.core.truth_(temp__4655__auto___12658)){
var cel_12659 = temp__4655__auto___12658;
(hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 ? hipo.interpreter.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4(cel_12659,ov_12652,nv_12653,m) : hipo.interpreter.reconciliate_BANG_.call(null,cel_12659,ov_12652,nv_12653,m));
} else {
}

}
}
} else {
}

var G__12660 = (i_12651 + (1));
i_12651 = G__12660;
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
var b__12322__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__12646,map__12646__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child(h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__12646,map__12646__$1,m,interceptors))
;
var v__12323__auto__ = interceptors;
if((cljs.core.not(v__12323__auto__)) || (cljs.core.empty_QMARK_(v__12323__auto__))){
return b__12322__auto__();
} else {
return hipo.interceptor.call(b__12322__auto__,v__12323__auto__,cljs.core.cst$kw$append,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(nch,oc));
var b__12322__auto___12661 = ((function (f,cs,oc,nc,d,map__12646,map__12646__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_(f,cs,m);
});})(f,cs,oc,nc,d,map__12646,map__12646__$1,m,interceptors))
;
var v__12323__auto___12662 = interceptors;
if((cljs.core.not(v__12323__auto___12662)) || (cljs.core.empty_QMARK_(v__12323__auto___12662))){
b__12322__auto___12661();
} else {
hipo.interceptor.call(b__12322__auto___12661,v__12323__auto___12662,cljs.core.cst$kw$append,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,cs], null));
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
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__12663){
var map__12666 = p__12663;
var map__12666__$1 = ((((!((map__12666 == null)))?((((map__12666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12666):map__12666);
var m = map__12666__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12666__$1,cljs.core.cst$kw$interceptors);
if(cljs.core.empty_QMARK_(nch)){
if(!(cljs.core.empty_QMARK_(och))){
var b__12322__auto__ = ((function (map__12666,map__12666__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_(el);
});})(map__12666,map__12666__$1,m,interceptors))
;
var v__12323__auto__ = interceptors;
if((cljs.core.not(v__12323__auto__)) || (cljs.core.empty_QMARK_(v__12323__auto__))){
return b__12322__auto__();
} else {
return hipo.interceptor.call(b__12322__auto__,v__12323__auto__,cljs.core.cst$kw$clear,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,el], null));
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
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__12668){
var map__12671 = p__12668;
var map__12671__$1 = ((((!((map__12671 == null)))?((((map__12671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12671):map__12671);
var m = map__12671__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12671__$1,cljs.core.cst$kw$interceptors);
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
var b__12322__auto__ = ((function (nel,map__12671,map__12671__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$$_DASH_parentElement,cljs.core.cst$sym$el)], 0)))].join('')));
}

return hipo.dom.replace_BANG_(el,nel);
});})(nel,map__12671,map__12671__$1,m,interceptors))
;
var v__12323__auto__ = interceptors;
if((cljs.core.not(v__12323__auto__)) || (cljs.core.empty_QMARK_(v__12323__auto__))){
return b__12322__auto__();
} else {
return hipo.interceptor.call(b__12322__auto__,v__12323__auto__,cljs.core.cst$kw$replace,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nh], null));
}
} else {
var om = hipo.hiccup.attributes(oh);
var nm = hipo.hiccup.attributes(nh);
var och = hipo.hiccup.children(oh);
var nch = hipo.hiccup.children(nh);
var b__12322__auto___12673 = ((function (om,nm,och,nch,map__12671,map__12671__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_(el,hipo.hiccup.flatten_children(och),hipo.hiccup.flatten_children(nch),m);
});})(om,nm,och,nch,map__12671,map__12671__$1,m,interceptors))
;
var v__12323__auto___12674 = interceptors;
if((cljs.core.not(v__12323__auto___12674)) || (cljs.core.empty_QMARK_(v__12323__auto___12674))){
b__12322__auto___12673();
} else {
hipo.interceptor.call(b__12322__auto___12673,v__12323__auto___12674,cljs.core.cst$kw$reconciliate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$old_DASH_value,och,cljs.core.cst$kw$new_DASH_value,nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_(el,hipo.hiccup.keyns(nh),hipo.hiccup.tag(nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__12675){
var map__12678 = p__12675;
var map__12678__$1 = ((((!((map__12678 == null)))?((((map__12678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12678):map__12678);
var m = map__12678__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,cljs.core.cst$kw$interceptors);
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

var b__12322__auto__ = ((function (map__12678,map__12678__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_(nh))){
if(!((oh === nh))){
var b__12322__auto__ = ((function (map__12678,map__12678__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$$_DASH_parentElement,cljs.core.cst$sym$el)], 0)))].join('')));
}

return hipo.dom.replace_text_BANG_(el,[cljs.core.str(nh)].join(''));
});})(map__12678,map__12678__$1,m,interceptors))
;
var v__12323__auto__ = interceptors;
if((cljs.core.not(v__12323__auto__)) || (cljs.core.empty_QMARK_(v__12323__auto__))){
return b__12322__auto__();
} else {
return hipo.interceptor.call(b__12322__auto__,v__12323__auto__,cljs.core.cst$kw$replace,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$value,nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_(el,oh,nh,m);
}
});})(map__12678,map__12678__$1,m,interceptors))
;
var v__12323__auto__ = interceptors;
if((cljs.core.not(v__12323__auto__)) || (cljs.core.empty_QMARK_(v__12323__auto__))){
return b__12322__auto__();
} else {
return hipo.interceptor.call(b__12322__auto__,v__12323__auto__,cljs.core.cst$kw$reconciliate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$target,el,cljs.core.cst$kw$old_DASH_value,oh,cljs.core.cst$kw$new_DASH_value,nh], null));
}
});
