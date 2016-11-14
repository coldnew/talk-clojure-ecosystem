// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('hipo.attribute');
goog.require('cljs.core');
goog.require('hipo.hiccup');
hipo.attribute.style_handler = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attr,"style"], null),cljs.core.cst$kw$fn,(function (p1__12151_SHARP_,p2__12152_SHARP_,p3__12153_SHARP_,p4__12150_SHARP_){
var seq__12154 = cljs.core.seq(p4__12150_SHARP_);
var chunk__12155 = null;
var count__12156 = (0);
var i__12157 = (0);
while(true){
if((i__12157 < count__12156)){
var vec__12158 = chunk__12155.cljs$core$IIndexed$_nth$arity$2(null,i__12157);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12158,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12158,(1),null);
(p1__12151_SHARP_["style"][cljs.core.name(k)] = v);

var G__12160 = seq__12154;
var G__12161 = chunk__12155;
var G__12162 = count__12156;
var G__12163 = (i__12157 + (1));
seq__12154 = G__12160;
chunk__12155 = G__12161;
count__12156 = G__12162;
i__12157 = G__12163;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12154);
if(temp__4657__auto__){
var seq__12154__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12154__$1)){
var c__7287__auto__ = cljs.core.chunk_first(seq__12154__$1);
var G__12164 = cljs.core.chunk_rest(seq__12154__$1);
var G__12165 = c__7287__auto__;
var G__12166 = cljs.core.count(c__7287__auto__);
var G__12167 = (0);
seq__12154 = G__12164;
chunk__12155 = G__12165;
count__12156 = G__12166;
i__12157 = G__12167;
continue;
} else {
var vec__12159 = cljs.core.first(seq__12154__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12159,(1),null);
(p1__12151_SHARP_["style"][cljs.core.name(k)] = v);

var G__12168 = cljs.core.next(seq__12154__$1);
var G__12169 = null;
var G__12170 = (0);
var G__12171 = (0);
seq__12154 = G__12168;
chunk__12155 = G__12169;
count__12156 = G__12170;
i__12157 = G__12171;
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
hipo.attribute.default_handler_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn,(function (p1__12172_SHARP_,p2__12173_SHARP_,p3__12175_SHARP_,p4__12174_SHARP_){
return hipo.attribute.set_property_value(p1__12172_SHARP_,p2__12173_SHARP_,p4__12174_SHARP_);
})], null),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fn,(function (p1__12177_SHARP_,p2__12178_SHARP_,p3__12180_SHARP_,p4__12176_SHARP_,p5__12179_SHARP_){
if(cljs.core.truth_(p4__12176_SHARP_)){
return hipo.attribute.set_attribute_BANG_(p1__12177_SHARP_,p2__12178_SHARP_,p4__12176_SHARP_,p5__12179_SHARP_);
} else {
return hipo.attribute.remove_attribute_BANG_(p1__12177_SHARP_,p2__12178_SHARP_,p5__12179_SHARP_);
}
})], null)], null);
hipo.attribute.default_handlers = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,"svg",cljs.core.cst$kw$attr,"class"], null),cljs.core.cst$kw$type,cljs.core.cst$kw$attr], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"input",cljs.core.cst$kw$attr,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["value",null,"checked",null], null), null)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$prop], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,"input",cljs.core.cst$kw$attr,"autofocus"], null),cljs.core.cst$kw$fn,(function (p1__12182_SHARP_,p2__12183_SHARP_,p3__12184_SHARP_,p4__12181_SHARP_){
if(cljs.core.truth_(p4__12181_SHARP_)){
p1__12182_SHARP_.focus();

return p1__12182_SHARP_.setAttribute(p2__12183_SHARP_,p4__12181_SHARP_);
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
return (function (p1__12185_SHARP_){
var t = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(p1__12185_SHARP_);
if(cljs.core.truth_(hipo.attribute.target_matches_QMARK_(t,ns,tag,cljs.core.name(attr)))){
return p1__12185_SHARP_;
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
