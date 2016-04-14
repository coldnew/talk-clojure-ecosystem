// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('hipo.attribute');
goog.require('cljs.core');
goog.require('hipo.hiccup');
hipo.attribute.style_handler = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,"style"], null),cljs.core.cst$kw$fn,(function (p1__12336_SHARP_,p2__12337_SHARP_,p3__12338_SHARP_,p4__12335_SHARP_){
var seq__12339 = cljs.core.seq(p4__12335_SHARP_);
var chunk__12340 = null;
var count__12341 = (0);
var i__12342 = (0);
while(true){
if((i__12342 < count__12341)){
var vec__12343 = chunk__12340.cljs$core$IIndexed$_nth$arity$2(null,i__12342);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12343,(1),null);
(p1__12336_SHARP_["style"][cljs.core.name(k)] = v);

var G__12345 = seq__12339;
var G__12346 = chunk__12340;
var G__12347 = count__12341;
var G__12348 = (i__12342 + (1));
seq__12339 = G__12345;
chunk__12340 = G__12346;
count__12341 = G__12347;
i__12342 = G__12348;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12339);
if(temp__4657__auto__){
var seq__12339__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12339__$1)){
var c__7287__auto__ = cljs.core.chunk_first(seq__12339__$1);
var G__12349 = cljs.core.chunk_rest(seq__12339__$1);
var G__12350 = c__7287__auto__;
var G__12351 = cljs.core.count(c__7287__auto__);
var G__12352 = (0);
seq__12339 = G__12349;
chunk__12340 = G__12350;
count__12341 = G__12351;
i__12342 = G__12352;
continue;
} else {
var vec__12344 = cljs.core.first(seq__12339__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12344,(1),null);
(p1__12336_SHARP_["style"][cljs.core.name(k)] = v);

var G__12353 = cljs.core.next(seq__12339__$1);
var G__12354 = null;
var G__12355 = (0);
var G__12356 = (0);
seq__12339 = G__12353;
chunk__12340 = G__12354;
count__12341 = G__12355;
i__12342 = G__12356;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
hipo.attribute.property_name__GT_js_property_name = (function hipo$attribute$property_name__GT_js_property_name(n){
return n.replace("-","_");
});
hipo.attribute.set_property_value = (function hipo$attribute$set_property_value(el,k,v){
return (el[hipo.attribute.property_name__GT_js_property_name(cljs.core.name(k))] = v);
});
hipo.attribute.set_attribute_BANG_ = (function hipo$attribute$set_attribute_BANG_(el,k,v,m){
var temp__4655__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace(cljs.core.namespace(k),m):null);
if(cljs.core.truth_(temp__4655__auto__)){
var nns = temp__4655__auto__;
return el.setAttributeNS(nns,cljs.core.name(k),v);
} else {
return el.setAttribute(cljs.core.name(k),v);
}
});
hipo.attribute.remove_attribute_BANG_ = (function hipo$attribute$remove_attribute_BANG_(el,k,m){
var temp__4655__auto__ = (((k instanceof cljs.core.Keyword))?hipo.hiccup.key__GT_namespace(cljs.core.namespace(k),m):null);
if(cljs.core.truth_(temp__4655__auto__)){
var nns = temp__4655__auto__;
return el.removeAttributeNS(nns,cljs.core.name(k));
} else {
return el.removeAttribute(cljs.core.name(k));
}
});
hipo.attribute.default_handler_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn,(function (p1__12357_SHARP_,p2__12358_SHARP_,p3__12360_SHARP_,p4__12359_SHARP_){
return hipo.attribute.set_property_value(p1__12357_SHARP_,p2__12358_SHARP_,p4__12359_SHARP_);
})], null),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn,(function (p1__12362_SHARP_,p2__12363_SHARP_,p3__12365_SHARP_,p4__12361_SHARP_,p5__12364_SHARP_){
if(cljs.core.truth_(p4__12361_SHARP_)){
return hipo.attribute.set_attribute_BANG_(p1__12362_SHARP_,p2__12363_SHARP_,p4__12361_SHARP_,p5__12364_SHARP_);
} else {
return hipo.attribute.remove_attribute_BANG_(p1__12362_SHARP_,p2__12363_SHARP_,p5__12364_SHARP_);
}
})], null)], null);
hipo.attribute.default_handlers = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,"svg",cljs.core.cst$kw$attr,"class"], null),cljs.core.cst$kw$type,cljs.core.cst$kw$attr], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"input",cljs.core.cst$kw$attr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"checked",null], null), null)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$prop], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"input",cljs.core.cst$kw$attr,"autofocus"], null),cljs.core.cst$kw$fn,(function (p1__12367_SHARP_,p2__12368_SHARP_,p3__12369_SHARP_,p4__12366_SHARP_){
if(cljs.core.truth_(p4__12366_SHARP_)){
p1__12367_SHARP_.focus();

return p1__12367_SHARP_.setAttribute(p2__12368_SHARP_,p4__12366_SHARP_);
} else {
return null;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"option",cljs.core.cst$kw$attr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["selected",null], null), null)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$prop], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"select",cljs.core.cst$kw$attr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"selectIndex",null], null), null)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$prop], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"textarea",cljs.core.cst$kw$attr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["value",null], null), null)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$prop], null)], null);
hipo.attribute.matches_QMARK_ = (function hipo$attribute$matches_QMARK_(expr,s){
if(cljs.core.truth_(expr)){
if(cljs.core.set_QMARK_(expr)){
return cljs.core.contains_QMARK_(expr,s);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,expr);

}
} else {
return true;
}
});
hipo.attribute.target_matches_QMARK_ = (function hipo$attribute$target_matches_QMARK_(m,ns,tag,attr){
var and__6472__auto__ = hipo.attribute.matches_QMARK_(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m),ns);
if(cljs.core.truth_(and__6472__auto__)){
var and__6472__auto____$1 = hipo.attribute.matches_QMARK_(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(m),tag);
if(cljs.core.truth_(and__6472__auto____$1)){
return hipo.attribute.matches_QMARK_(cljs.core.cst$kw$attr.cljs$core$IFn$_invoke$arity$1(m),attr);
} else {
return and__6472__auto____$1;
}
} else {
return and__6472__auto__;
}
});
hipo.attribute.handler = (function hipo$attribute$handler(m,ns,tag,attr){
var v = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attribute_DASH_handlers.cljs$core$IFn$_invoke$arity$1(m),hipo.attribute.default_handlers);
var h = cljs.core.some(((function (v){
return (function (p1__12370_SHARP_){
var t = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(p1__12370_SHARP_);
if(cljs.core.truth_(hipo.attribute.target_matches_QMARK_(t,ns,tag,cljs.core.name(attr)))){
return p1__12370_SHARP_;
} else {
return null;
}
});})(v))
,v);
if(cljs.core.contains_QMARK_(h,cljs.core.cst$kw$type)){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(h).call(null,hipo.attribute.default_handler_fns);
} else {
return h;
}
});
hipo.attribute.default_set_value_BANG_ = (function hipo$attribute$default_set_value_BANG_(el,attr,ov,nv,m){
if(cljs.core.truth_((function (){var or__6484__auto__ = hipo.hiccup.literal_QMARK_(ov);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return hipo.hiccup.literal_QMARK_(nv);
}
})())){
if(cljs.core.truth_(nv)){
return hipo.attribute.set_attribute_BANG_(el,attr,nv,m);
} else {
return hipo.attribute.remove_attribute_BANG_(el,attr,m);
}
} else {
return (el[attr] = hipo.attribute.set_property_value(el,attr,nv));
}
});
hipo.attribute.set_value_BANG_ = (function hipo$attribute$set_value_BANG_(el,m,ns,tag,attr,ov,nv){
var h = hipo.attribute.handler(m,ns,tag,attr);
var f = (function (){var or__6484__auto__ = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(h);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return hipo.attribute.default_set_value_BANG_;
}
})();
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(el,attr,ov,nv,m) : f.call(null,el,attr,ov,nv,m));
});
