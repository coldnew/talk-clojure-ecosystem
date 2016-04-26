// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__19444__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19443 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19443,(0),null);
var body = cljs.core.nthnext(vec__19443,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19445__i = 0, G__19445__a = new Array(arguments.length -  0);
while (G__19445__i < G__19445__a.length) {G__19445__a[G__19445__i] = arguments[G__19445__i + 0]; ++G__19445__i;}
  args = new cljs.core.IndexedSeq(G__19445__a,0);
} 
return G__19444__delegate.call(this,args);};
G__19444.cljs$lang$maxFixedArity = 0;
G__19444.cljs$lang$applyTo = (function (arglist__19446){
var args = cljs.core.seq(arglist__19446);
return G__19444__delegate(args);
});
G__19444.cljs$core$IFn$_invoke$arity$variadic = G__19444__delegate;
return G__19444;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7256__auto__ = (function sablono$core$update_arglists_$_iter__19453(s__19454){
return (new cljs.core.LazySeq(null,(function (){
var s__19454__$1 = s__19454;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19454__$1);
if(temp__4657__auto__){
var s__19454__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19454__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19454__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19456 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19455 = (0);
while(true){
if((i__19455 < size__7255__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19455);
cljs.core.chunk_append(b__19456,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19459 = (i__19455 + (1));
i__19455 = G__19459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19456),sablono$core$update_arglists_$_iter__19453(cljs.core.chunk_rest(s__19454__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19456),null);
}
} else {
var args = cljs.core.first(s__19454__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19453(cljs.core.rest(s__19454__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7256__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19467 = arguments.length;
var i__7543__auto___19468 = (0);
while(true){
if((i__7543__auto___19468 < len__7542__auto___19467)){
args__7549__auto__.push((arguments[i__7543__auto___19468]));

var G__19469 = (i__7543__auto___19468 + (1));
i__7543__auto___19468 = G__19469;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((0) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7550__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7256__auto__ = (function sablono$core$iter__19461(s__19462){
return (new cljs.core.LazySeq(null,(function (){
var s__19462__$1 = s__19462;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19462__$1);
if(temp__4657__auto__){
var s__19462__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19462__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19462__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19464 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19463 = (0);
while(true){
if((i__19463 < size__7255__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19463);
cljs.core.chunk_append(b__19464,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19470 = (i__19463 + (1));
i__19463 = G__19470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19464),sablono$core$iter__19461(cljs.core.chunk_rest(s__19462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19464),null);
}
} else {
var style = cljs.core.first(s__19462__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19461(cljs.core.rest(s__19462__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7256__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq19460){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19460));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19475 = goog.dom.getDocument().body;
var G__19476 = (function (){var G__19477 = "script";
var G__19478 = {"src": src};
return goog.dom.createDom(G__19477,G__19478);
})();
return goog.dom.appendChild(G__19475,G__19476);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to19479 = (function sablono$core$link_to19479(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19482 = arguments.length;
var i__7543__auto___19483 = (0);
while(true){
if((i__7543__auto___19483 < len__7542__auto___19482)){
args__7549__auto__.push((arguments[i__7543__auto___19483]));

var G__19484 = (i__7543__auto___19483 + (1));
i__7543__auto___19483 = G__19484;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.link_to19479.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.link_to19479.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19479.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19479.cljs$lang$applyTo = (function (seq19480){
var G__19481 = cljs.core.first(seq19480);
var seq19480__$1 = cljs.core.next(seq19480);
return sablono.core.link_to19479.cljs$core$IFn$_invoke$arity$variadic(G__19481,seq19480__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19479);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19485 = (function sablono$core$mail_to19485(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19490 = arguments.length;
var i__7543__auto___19491 = (0);
while(true){
if((i__7543__auto___19491 < len__7542__auto___19490)){
args__7549__auto__.push((arguments[i__7543__auto___19491]));

var G__19492 = (i__7543__auto___19491 + (1));
i__7543__auto___19491 = G__19492;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19485.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.mail_to19485.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19488){
var vec__19489 = p__19488;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19489,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6484__auto__ = content;
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19485.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19485.cljs$lang$applyTo = (function (seq19486){
var G__19487 = cljs.core.first(seq19486);
var seq19486__$1 = cljs.core.next(seq19486);
return sablono.core.mail_to19485.cljs$core$IFn$_invoke$arity$variadic(G__19487,seq19486__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19485);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19493 = (function sablono$core$unordered_list19493(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7256__auto__ = (function sablono$core$unordered_list19493_$_iter__19500(s__19501){
return (new cljs.core.LazySeq(null,(function (){
var s__19501__$1 = s__19501;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19501__$1);
if(temp__4657__auto__){
var s__19501__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19501__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19501__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19503 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19502 = (0);
while(true){
if((i__19502 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19502);
cljs.core.chunk_append(b__19503,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19506 = (i__19502 + (1));
i__19502 = G__19506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19503),sablono$core$unordered_list19493_$_iter__19500(cljs.core.chunk_rest(s__19501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19503),null);
}
} else {
var x = cljs.core.first(s__19501__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list19493_$_iter__19500(cljs.core.rest(s__19501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7256__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list19493);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19507 = (function sablono$core$ordered_list19507(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7256__auto__ = (function sablono$core$ordered_list19507_$_iter__19514(s__19515){
return (new cljs.core.LazySeq(null,(function (){
var s__19515__$1 = s__19515;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19515__$1);
if(temp__4657__auto__){
var s__19515__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19515__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19515__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19517 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19516 = (0);
while(true){
if((i__19516 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19516);
cljs.core.chunk_append(b__19517,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19520 = (i__19516 + (1));
i__19516 = G__19520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19517),sablono$core$ordered_list19507_$_iter__19514(cljs.core.chunk_rest(s__19515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19517),null);
}
} else {
var x = cljs.core.first(s__19515__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list19507_$_iter__19514(cljs.core.rest(s__19515__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7256__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list19507);
/**
 * Create an image element.
 */
sablono.core.image19521 = (function sablono$core$image19521(var_args){
var args19522 = [];
var len__7542__auto___19525 = arguments.length;
var i__7543__auto___19526 = (0);
while(true){
if((i__7543__auto___19526 < len__7542__auto___19525)){
args19522.push((arguments[i__7543__auto___19526]));

var G__19527 = (i__7543__auto___19526 + (1));
i__7543__auto___19526 = G__19527;
continue;
} else {
}
break;
}

var G__19524 = args19522.length;
switch (G__19524) {
case 1:
return sablono.core.image19521.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19521.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19522.length)].join('')));

}
});

sablono.core.image19521.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image19521.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image19521.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image19521);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19529_SHARP_,p2__19530_SHARP_){
return [cljs.core.str(p1__19529_SHARP_),cljs.core.str("["),cljs.core.str(p2__19530_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19531_SHARP_,p2__19532_SHARP_){
return [cljs.core.str(p1__19531_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19532_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field19533 = (function sablono$core$color_field19533(var_args){
var args19534 = [];
var len__7542__auto___19601 = arguments.length;
var i__7543__auto___19602 = (0);
while(true){
if((i__7543__auto___19602 < len__7542__auto___19601)){
args19534.push((arguments[i__7543__auto___19602]));

var G__19603 = (i__7543__auto___19602 + (1));
i__7543__auto___19602 = G__19603;
continue;
} else {
}
break;
}

var G__19536 = args19534.length;
switch (G__19536) {
case 1:
return sablono.core.color_field19533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19534.length)].join('')));

}
});

sablono.core.color_field19533.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.color_field19533.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.color_field19533.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.color_field19533.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field19533);

/**
 * Creates a date input field.
 */
sablono.core.date_field19537 = (function sablono$core$date_field19537(var_args){
var args19538 = [];
var len__7542__auto___19605 = arguments.length;
var i__7543__auto___19606 = (0);
while(true){
if((i__7543__auto___19606 < len__7542__auto___19605)){
args19538.push((arguments[i__7543__auto___19606]));

var G__19607 = (i__7543__auto___19606 + (1));
i__7543__auto___19606 = G__19607;
continue;
} else {
}
break;
}

var G__19540 = args19538.length;
switch (G__19540) {
case 1:
return sablono.core.date_field19537.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19537.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19538.length)].join('')));

}
});

sablono.core.date_field19537.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.date_field19537.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.date_field19537.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.date_field19537.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field19537);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19541 = (function sablono$core$datetime_field19541(var_args){
var args19542 = [];
var len__7542__auto___19609 = arguments.length;
var i__7543__auto___19610 = (0);
while(true){
if((i__7543__auto___19610 < len__7542__auto___19609)){
args19542.push((arguments[i__7543__auto___19610]));

var G__19611 = (i__7543__auto___19610 + (1));
i__7543__auto___19610 = G__19611;
continue;
} else {
}
break;
}

var G__19544 = args19542.length;
switch (G__19544) {
case 1:
return sablono.core.datetime_field19541.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19541.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19542.length)].join('')));

}
});

sablono.core.datetime_field19541.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.datetime_field19541.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.datetime_field19541.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.datetime_field19541.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field19541);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19545 = (function sablono$core$datetime_local_field19545(var_args){
var args19546 = [];
var len__7542__auto___19613 = arguments.length;
var i__7543__auto___19614 = (0);
while(true){
if((i__7543__auto___19614 < len__7542__auto___19613)){
args19546.push((arguments[i__7543__auto___19614]));

var G__19615 = (i__7543__auto___19614 + (1));
i__7543__auto___19614 = G__19615;
continue;
} else {
}
break;
}

var G__19548 = args19546.length;
switch (G__19548) {
case 1:
return sablono.core.datetime_local_field19545.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19545.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19546.length)].join('')));

}
});

sablono.core.datetime_local_field19545.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.datetime_local_field19545.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.datetime_local_field19545.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.datetime_local_field19545.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field19545);

/**
 * Creates a email input field.
 */
sablono.core.email_field19549 = (function sablono$core$email_field19549(var_args){
var args19550 = [];
var len__7542__auto___19617 = arguments.length;
var i__7543__auto___19618 = (0);
while(true){
if((i__7543__auto___19618 < len__7542__auto___19617)){
args19550.push((arguments[i__7543__auto___19618]));

var G__19619 = (i__7543__auto___19618 + (1));
i__7543__auto___19618 = G__19619;
continue;
} else {
}
break;
}

var G__19552 = args19550.length;
switch (G__19552) {
case 1:
return sablono.core.email_field19549.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19549.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19550.length)].join('')));

}
});

sablono.core.email_field19549.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.email_field19549.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.email_field19549.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.email_field19549.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field19549);

/**
 * Creates a file input field.
 */
sablono.core.file_field19553 = (function sablono$core$file_field19553(var_args){
var args19554 = [];
var len__7542__auto___19621 = arguments.length;
var i__7543__auto___19622 = (0);
while(true){
if((i__7543__auto___19622 < len__7542__auto___19621)){
args19554.push((arguments[i__7543__auto___19622]));

var G__19623 = (i__7543__auto___19622 + (1));
i__7543__auto___19622 = G__19623;
continue;
} else {
}
break;
}

var G__19556 = args19554.length;
switch (G__19556) {
case 1:
return sablono.core.file_field19553.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19554.length)].join('')));

}
});

sablono.core.file_field19553.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.file_field19553.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.file_field19553.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.file_field19553.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field19553);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19557 = (function sablono$core$hidden_field19557(var_args){
var args19558 = [];
var len__7542__auto___19625 = arguments.length;
var i__7543__auto___19626 = (0);
while(true){
if((i__7543__auto___19626 < len__7542__auto___19625)){
args19558.push((arguments[i__7543__auto___19626]));

var G__19627 = (i__7543__auto___19626 + (1));
i__7543__auto___19626 = G__19627;
continue;
} else {
}
break;
}

var G__19560 = args19558.length;
switch (G__19560) {
case 1:
return sablono.core.hidden_field19557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19558.length)].join('')));

}
});

sablono.core.hidden_field19557.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.hidden_field19557.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.hidden_field19557.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.hidden_field19557.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field19557);

/**
 * Creates a month input field.
 */
sablono.core.month_field19561 = (function sablono$core$month_field19561(var_args){
var args19562 = [];
var len__7542__auto___19629 = arguments.length;
var i__7543__auto___19630 = (0);
while(true){
if((i__7543__auto___19630 < len__7542__auto___19629)){
args19562.push((arguments[i__7543__auto___19630]));

var G__19631 = (i__7543__auto___19630 + (1));
i__7543__auto___19630 = G__19631;
continue;
} else {
}
break;
}

var G__19564 = args19562.length;
switch (G__19564) {
case 1:
return sablono.core.month_field19561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19562.length)].join('')));

}
});

sablono.core.month_field19561.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.month_field19561.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.month_field19561.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.month_field19561.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field19561);

/**
 * Creates a number input field.
 */
sablono.core.number_field19565 = (function sablono$core$number_field19565(var_args){
var args19566 = [];
var len__7542__auto___19633 = arguments.length;
var i__7543__auto___19634 = (0);
while(true){
if((i__7543__auto___19634 < len__7542__auto___19633)){
args19566.push((arguments[i__7543__auto___19634]));

var G__19635 = (i__7543__auto___19634 + (1));
i__7543__auto___19634 = G__19635;
continue;
} else {
}
break;
}

var G__19568 = args19566.length;
switch (G__19568) {
case 1:
return sablono.core.number_field19565.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19565.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19566.length)].join('')));

}
});

sablono.core.number_field19565.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.number_field19565.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.number_field19565.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.number_field19565.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field19565);

/**
 * Creates a password input field.
 */
sablono.core.password_field19569 = (function sablono$core$password_field19569(var_args){
var args19570 = [];
var len__7542__auto___19637 = arguments.length;
var i__7543__auto___19638 = (0);
while(true){
if((i__7543__auto___19638 < len__7542__auto___19637)){
args19570.push((arguments[i__7543__auto___19638]));

var G__19639 = (i__7543__auto___19638 + (1));
i__7543__auto___19638 = G__19639;
continue;
} else {
}
break;
}

var G__19572 = args19570.length;
switch (G__19572) {
case 1:
return sablono.core.password_field19569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19570.length)].join('')));

}
});

sablono.core.password_field19569.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.password_field19569.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.password_field19569.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.password_field19569.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field19569);

/**
 * Creates a range input field.
 */
sablono.core.range_field19573 = (function sablono$core$range_field19573(var_args){
var args19574 = [];
var len__7542__auto___19641 = arguments.length;
var i__7543__auto___19642 = (0);
while(true){
if((i__7543__auto___19642 < len__7542__auto___19641)){
args19574.push((arguments[i__7543__auto___19642]));

var G__19643 = (i__7543__auto___19642 + (1));
i__7543__auto___19642 = G__19643;
continue;
} else {
}
break;
}

var G__19576 = args19574.length;
switch (G__19576) {
case 1:
return sablono.core.range_field19573.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19573.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19574.length)].join('')));

}
});

sablono.core.range_field19573.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.range_field19573.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.range_field19573.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.range_field19573.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field19573);

/**
 * Creates a search input field.
 */
sablono.core.search_field19577 = (function sablono$core$search_field19577(var_args){
var args19578 = [];
var len__7542__auto___19645 = arguments.length;
var i__7543__auto___19646 = (0);
while(true){
if((i__7543__auto___19646 < len__7542__auto___19645)){
args19578.push((arguments[i__7543__auto___19646]));

var G__19647 = (i__7543__auto___19646 + (1));
i__7543__auto___19646 = G__19647;
continue;
} else {
}
break;
}

var G__19580 = args19578.length;
switch (G__19580) {
case 1:
return sablono.core.search_field19577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19578.length)].join('')));

}
});

sablono.core.search_field19577.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.search_field19577.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.search_field19577.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.search_field19577.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field19577);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19581 = (function sablono$core$tel_field19581(var_args){
var args19582 = [];
var len__7542__auto___19649 = arguments.length;
var i__7543__auto___19650 = (0);
while(true){
if((i__7543__auto___19650 < len__7542__auto___19649)){
args19582.push((arguments[i__7543__auto___19650]));

var G__19651 = (i__7543__auto___19650 + (1));
i__7543__auto___19650 = G__19651;
continue;
} else {
}
break;
}

var G__19584 = args19582.length;
switch (G__19584) {
case 1:
return sablono.core.tel_field19581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19582.length)].join('')));

}
});

sablono.core.tel_field19581.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.tel_field19581.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.tel_field19581.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.tel_field19581.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field19581);

/**
 * Creates a text input field.
 */
sablono.core.text_field19585 = (function sablono$core$text_field19585(var_args){
var args19586 = [];
var len__7542__auto___19653 = arguments.length;
var i__7543__auto___19654 = (0);
while(true){
if((i__7543__auto___19654 < len__7542__auto___19653)){
args19586.push((arguments[i__7543__auto___19654]));

var G__19655 = (i__7543__auto___19654 + (1));
i__7543__auto___19654 = G__19655;
continue;
} else {
}
break;
}

var G__19588 = args19586.length;
switch (G__19588) {
case 1:
return sablono.core.text_field19585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19586.length)].join('')));

}
});

sablono.core.text_field19585.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.text_field19585.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.text_field19585.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.text_field19585.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field19585);

/**
 * Creates a time input field.
 */
sablono.core.time_field19589 = (function sablono$core$time_field19589(var_args){
var args19590 = [];
var len__7542__auto___19657 = arguments.length;
var i__7543__auto___19658 = (0);
while(true){
if((i__7543__auto___19658 < len__7542__auto___19657)){
args19590.push((arguments[i__7543__auto___19658]));

var G__19659 = (i__7543__auto___19658 + (1));
i__7543__auto___19658 = G__19659;
continue;
} else {
}
break;
}

var G__19592 = args19590.length;
switch (G__19592) {
case 1:
return sablono.core.time_field19589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19590.length)].join('')));

}
});

sablono.core.time_field19589.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.time_field19589.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.time_field19589.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.time_field19589.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field19589);

/**
 * Creates a url input field.
 */
sablono.core.url_field19593 = (function sablono$core$url_field19593(var_args){
var args19594 = [];
var len__7542__auto___19661 = arguments.length;
var i__7543__auto___19662 = (0);
while(true){
if((i__7543__auto___19662 < len__7542__auto___19661)){
args19594.push((arguments[i__7543__auto___19662]));

var G__19663 = (i__7543__auto___19662 + (1));
i__7543__auto___19662 = G__19663;
continue;
} else {
}
break;
}

var G__19596 = args19594.length;
switch (G__19596) {
case 1:
return sablono.core.url_field19593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19594.length)].join('')));

}
});

sablono.core.url_field19593.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.url_field19593.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.url_field19593.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.url_field19593.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field19593);

/**
 * Creates a week input field.
 */
sablono.core.week_field19597 = (function sablono$core$week_field19597(var_args){
var args19598 = [];
var len__7542__auto___19665 = arguments.length;
var i__7543__auto___19666 = (0);
while(true){
if((i__7543__auto___19666 < len__7542__auto___19665)){
args19598.push((arguments[i__7543__auto___19666]));

var G__19667 = (i__7543__auto___19666 + (1));
i__7543__auto___19666 = G__19667;
continue;
} else {
}
break;
}

var G__19600 = args19598.length;
switch (G__19600) {
case 1:
return sablono.core.week_field19597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19598.length)].join('')));

}
});

sablono.core.week_field19597.cljs$core$IFn$_invoke$arity$1 = (function (name__19432__auto__){
return sablono.core.week_field19597.cljs$core$IFn$_invoke$arity$2(name__19432__auto__,null);
});

sablono.core.week_field19597.cljs$core$IFn$_invoke$arity$2 = (function (name__19432__auto__,value__19433__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__19432__auto__,value__19433__auto__);
});

sablono.core.week_field19597.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field19597);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19669 = (function sablono$core$check_box19669(var_args){
var args19670 = [];
var len__7542__auto___19673 = arguments.length;
var i__7543__auto___19674 = (0);
while(true){
if((i__7543__auto___19674 < len__7542__auto___19673)){
args19670.push((arguments[i__7543__auto___19674]));

var G__19675 = (i__7543__auto___19674 + (1));
i__7543__auto___19674 = G__19675;
continue;
} else {
}
break;
}

var G__19672 = args19670.length;
switch (G__19672) {
case 1:
return sablono.core.check_box19669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19669.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19670.length)].join('')));

}
});

sablono.core.check_box19669.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19669.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box19669.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19669.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box19669.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box19669.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box19669);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19677 = (function sablono$core$radio_button19677(var_args){
var args19678 = [];
var len__7542__auto___19681 = arguments.length;
var i__7543__auto___19682 = (0);
while(true){
if((i__7543__auto___19682 < len__7542__auto___19681)){
args19678.push((arguments[i__7543__auto___19682]));

var G__19683 = (i__7543__auto___19682 + (1));
i__7543__auto___19682 = G__19683;
continue;
} else {
}
break;
}

var G__19680 = args19678.length;
switch (G__19680) {
case 1:
return sablono.core.radio_button19677.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19677.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19677.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19678.length)].join('')));

}
});

sablono.core.radio_button19677.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19677.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button19677.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19677.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button19677.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button19677.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button19677);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__19686 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__19686);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19687 = (function sablono$core$select_options19687(coll){
var iter__7256__auto__ = (function sablono$core$select_options19687_$_iter__19698(s__19699){
return (new cljs.core.LazySeq(null,(function (){
var s__19699__$1 = s__19699;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19699__$1);
if(temp__4657__auto__){
var s__19699__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19699__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19699__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19701 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19700 = (0);
while(true){
if((i__19700 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19700);
cljs.core.chunk_append(b__19701,((cljs.core.sequential_QMARK_(x))?(function (){var vec__19706 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19706,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19687(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__19708 = (i__19700 + (1));
i__19700 = G__19708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19701),sablono$core$select_options19687_$_iter__19698(cljs.core.chunk_rest(s__19699__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19701),null);
}
} else {
var x = cljs.core.first(s__19699__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__19707 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19707,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19707,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19707,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19687(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options19687_$_iter__19698(cljs.core.rest(s__19699__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7256__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options19687);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19709 = (function sablono$core$drop_down19709(var_args){
var args19710 = [];
var len__7542__auto___19713 = arguments.length;
var i__7543__auto___19714 = (0);
while(true){
if((i__7543__auto___19714 < len__7542__auto___19713)){
args19710.push((arguments[i__7543__auto___19714]));

var G__19715 = (i__7543__auto___19714 + (1));
i__7543__auto___19714 = G__19715;
continue;
} else {
}
break;
}

var G__19712 = args19710.length;
switch (G__19712) {
case 2:
return sablono.core.drop_down19709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19709.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19710.length)].join('')));

}
});

sablono.core.drop_down19709.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19709.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down19709.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down19709.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down19709);
/**
 * Creates a text area element.
 */
sablono.core.text_area19717 = (function sablono$core$text_area19717(var_args){
var args19718 = [];
var len__7542__auto___19721 = arguments.length;
var i__7543__auto___19722 = (0);
while(true){
if((i__7543__auto___19722 < len__7542__auto___19721)){
args19718.push((arguments[i__7543__auto___19722]));

var G__19723 = (i__7543__auto___19722 + (1));
i__7543__auto___19722 = G__19723;
continue;
} else {
}
break;
}

var G__19720 = args19718.length;
switch (G__19720) {
case 1:
return sablono.core.text_area19717.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19718.length)].join('')));

}
});

sablono.core.text_area19717.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19717.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area19717.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area19717.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area19717);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19725 = (function sablono$core$label19725(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label19725);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19726 = (function sablono$core$submit_button19726(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button19726);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19727 = (function sablono$core$reset_button19727(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button19727);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19728 = (function sablono$core$form_to19728(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19736 = arguments.length;
var i__7543__auto___19737 = (0);
while(true){
if((i__7543__auto___19737 < len__7542__auto___19736)){
args__7549__auto__.push((arguments[i__7543__auto___19737]));

var G__19738 = (i__7543__auto___19737 + (1));
i__7543__auto___19737 = G__19738;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.form_to19728.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.form_to19728.cljs$core$IFn$_invoke$arity$variadic = (function (p__19731,body){
var vec__19732 = p__19731;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19732,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19732,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__19733 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__19734 = "_method";
var G__19735 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__19733,G__19734,G__19735) : sablono.core.hidden_field.call(null,G__19733,G__19734,G__19735));
})()], null)),body));
});

sablono.core.form_to19728.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19728.cljs$lang$applyTo = (function (seq19729){
var G__19730 = cljs.core.first(seq19729);
var seq19729__$1 = cljs.core.next(seq19729);
return sablono.core.form_to19728.cljs$core$IFn$_invoke$arity$variadic(G__19730,seq19729__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to19728);
