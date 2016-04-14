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
var G__19438__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19437 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19437,(0),null);
var body = cljs.core.nthnext(vec__19437,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19439__i = 0, G__19439__a = new Array(arguments.length -  0);
while (G__19439__i < G__19439__a.length) {G__19439__a[G__19439__i] = arguments[G__19439__i + 0]; ++G__19439__i;}
  args = new cljs.core.IndexedSeq(G__19439__a,0);
} 
return G__19438__delegate.call(this,args);};
G__19438.cljs$lang$maxFixedArity = 0;
G__19438.cljs$lang$applyTo = (function (arglist__19440){
var args = cljs.core.seq(arglist__19440);
return G__19438__delegate(args);
});
G__19438.cljs$core$IFn$_invoke$arity$variadic = G__19438__delegate;
return G__19438;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7256__auto__ = (function sablono$core$update_arglists_$_iter__19447(s__19448){
return (new cljs.core.LazySeq(null,(function (){
var s__19448__$1 = s__19448;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19448__$1);
if(temp__4657__auto__){
var s__19448__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19448__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19448__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19450 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19449 = (0);
while(true){
if((i__19449 < size__7255__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19449);
cljs.core.chunk_append(b__19450,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19453 = (i__19449 + (1));
i__19449 = G__19453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19450),sablono$core$update_arglists_$_iter__19447(cljs.core.chunk_rest(s__19448__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19450),null);
}
} else {
var args = cljs.core.first(s__19448__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19447(cljs.core.rest(s__19448__$2)));
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
var len__7542__auto___19461 = arguments.length;
var i__7543__auto___19462 = (0);
while(true){
if((i__7543__auto___19462 < len__7542__auto___19461)){
args__7549__auto__.push((arguments[i__7543__auto___19462]));

var G__19463 = (i__7543__auto___19462 + (1));
i__7543__auto___19462 = G__19463;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((0) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7550__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7256__auto__ = (function sablono$core$iter__19455(s__19456){
return (new cljs.core.LazySeq(null,(function (){
var s__19456__$1 = s__19456;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19456__$1);
if(temp__4657__auto__){
var s__19456__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19456__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19456__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19458 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19457 = (0);
while(true){
if((i__19457 < size__7255__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19457);
cljs.core.chunk_append(b__19458,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19464 = (i__19457 + (1));
i__19457 = G__19464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19458),sablono$core$iter__19455(cljs.core.chunk_rest(s__19456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19458),null);
}
} else {
var style = cljs.core.first(s__19456__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19455(cljs.core.rest(s__19456__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq19454){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19454));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19469 = goog.dom.getDocument().body;
var G__19470 = (function (){var G__19471 = "script";
var G__19472 = {"src": src};
return goog.dom.createDom(G__19471,G__19472);
})();
return goog.dom.appendChild(G__19469,G__19470);
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
sablono.core.link_to19473 = (function sablono$core$link_to19473(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19476 = arguments.length;
var i__7543__auto___19477 = (0);
while(true){
if((i__7543__auto___19477 < len__7542__auto___19476)){
args__7549__auto__.push((arguments[i__7543__auto___19477]));

var G__19478 = (i__7543__auto___19477 + (1));
i__7543__auto___19477 = G__19478;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.link_to19473.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.link_to19473.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19473.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19473.cljs$lang$applyTo = (function (seq19474){
var G__19475 = cljs.core.first(seq19474);
var seq19474__$1 = cljs.core.next(seq19474);
return sablono.core.link_to19473.cljs$core$IFn$_invoke$arity$variadic(G__19475,seq19474__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19473);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19479 = (function sablono$core$mail_to19479(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19484 = arguments.length;
var i__7543__auto___19485 = (0);
while(true){
if((i__7543__auto___19485 < len__7542__auto___19484)){
args__7549__auto__.push((arguments[i__7543__auto___19485]));

var G__19486 = (i__7543__auto___19485 + (1));
i__7543__auto___19485 = G__19486;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19479.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.mail_to19479.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19482){
var vec__19483 = p__19482;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19483,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6484__auto__ = content;
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19479.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19479.cljs$lang$applyTo = (function (seq19480){
var G__19481 = cljs.core.first(seq19480);
var seq19480__$1 = cljs.core.next(seq19480);
return sablono.core.mail_to19479.cljs$core$IFn$_invoke$arity$variadic(G__19481,seq19480__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19479);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19487 = (function sablono$core$unordered_list19487(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7256__auto__ = (function sablono$core$unordered_list19487_$_iter__19494(s__19495){
return (new cljs.core.LazySeq(null,(function (){
var s__19495__$1 = s__19495;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19495__$1);
if(temp__4657__auto__){
var s__19495__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19495__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19495__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19497 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19496 = (0);
while(true){
if((i__19496 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19496);
cljs.core.chunk_append(b__19497,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19500 = (i__19496 + (1));
i__19496 = G__19500;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19497),sablono$core$unordered_list19487_$_iter__19494(cljs.core.chunk_rest(s__19495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19497),null);
}
} else {
var x = cljs.core.first(s__19495__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list19487_$_iter__19494(cljs.core.rest(s__19495__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list19487);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19501 = (function sablono$core$ordered_list19501(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7256__auto__ = (function sablono$core$ordered_list19501_$_iter__19508(s__19509){
return (new cljs.core.LazySeq(null,(function (){
var s__19509__$1 = s__19509;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19509__$1);
if(temp__4657__auto__){
var s__19509__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19509__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19509__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19511 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19510 = (0);
while(true){
if((i__19510 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19510);
cljs.core.chunk_append(b__19511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19514 = (i__19510 + (1));
i__19510 = G__19514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19511),sablono$core$ordered_list19501_$_iter__19508(cljs.core.chunk_rest(s__19509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19511),null);
}
} else {
var x = cljs.core.first(s__19509__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list19501_$_iter__19508(cljs.core.rest(s__19509__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list19501);
/**
 * Create an image element.
 */
sablono.core.image19515 = (function sablono$core$image19515(var_args){
var args19516 = [];
var len__7542__auto___19519 = arguments.length;
var i__7543__auto___19520 = (0);
while(true){
if((i__7543__auto___19520 < len__7542__auto___19519)){
args19516.push((arguments[i__7543__auto___19520]));

var G__19521 = (i__7543__auto___19520 + (1));
i__7543__auto___19520 = G__19521;
continue;
} else {
}
break;
}

var G__19518 = args19516.length;
switch (G__19518) {
case 1:
return sablono.core.image19515.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19515.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19516.length)].join('')));

}
});

sablono.core.image19515.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image19515.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image19515.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image19515);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19523_SHARP_,p2__19524_SHARP_){
return [cljs.core.str(p1__19523_SHARP_),cljs.core.str("["),cljs.core.str(p2__19524_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19525_SHARP_,p2__19526_SHARP_){
return [cljs.core.str(p1__19525_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19526_SHARP_)].join('');
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
sablono.core.color_field19527 = (function sablono$core$color_field19527(var_args){
var args19528 = [];
var len__7542__auto___19595 = arguments.length;
var i__7543__auto___19596 = (0);
while(true){
if((i__7543__auto___19596 < len__7542__auto___19595)){
args19528.push((arguments[i__7543__auto___19596]));

var G__19597 = (i__7543__auto___19596 + (1));
i__7543__auto___19596 = G__19597;
continue;
} else {
}
break;
}

var G__19530 = args19528.length;
switch (G__19530) {
case 1:
return sablono.core.color_field19527.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19527.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19528.length)].join('')));

}
});

sablono.core.color_field19527.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.color_field19527.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.color_field19527.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.color_field19527.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field19527);

/**
 * Creates a date input field.
 */
sablono.core.date_field19531 = (function sablono$core$date_field19531(var_args){
var args19532 = [];
var len__7542__auto___19599 = arguments.length;
var i__7543__auto___19600 = (0);
while(true){
if((i__7543__auto___19600 < len__7542__auto___19599)){
args19532.push((arguments[i__7543__auto___19600]));

var G__19601 = (i__7543__auto___19600 + (1));
i__7543__auto___19600 = G__19601;
continue;
} else {
}
break;
}

var G__19534 = args19532.length;
switch (G__19534) {
case 1:
return sablono.core.date_field19531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19532.length)].join('')));

}
});

sablono.core.date_field19531.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.date_field19531.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.date_field19531.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.date_field19531.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field19531);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19535 = (function sablono$core$datetime_field19535(var_args){
var args19536 = [];
var len__7542__auto___19603 = arguments.length;
var i__7543__auto___19604 = (0);
while(true){
if((i__7543__auto___19604 < len__7542__auto___19603)){
args19536.push((arguments[i__7543__auto___19604]));

var G__19605 = (i__7543__auto___19604 + (1));
i__7543__auto___19604 = G__19605;
continue;
} else {
}
break;
}

var G__19538 = args19536.length;
switch (G__19538) {
case 1:
return sablono.core.datetime_field19535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19536.length)].join('')));

}
});

sablono.core.datetime_field19535.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.datetime_field19535.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.datetime_field19535.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.datetime_field19535.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field19535);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19539 = (function sablono$core$datetime_local_field19539(var_args){
var args19540 = [];
var len__7542__auto___19607 = arguments.length;
var i__7543__auto___19608 = (0);
while(true){
if((i__7543__auto___19608 < len__7542__auto___19607)){
args19540.push((arguments[i__7543__auto___19608]));

var G__19609 = (i__7543__auto___19608 + (1));
i__7543__auto___19608 = G__19609;
continue;
} else {
}
break;
}

var G__19542 = args19540.length;
switch (G__19542) {
case 1:
return sablono.core.datetime_local_field19539.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19539.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19540.length)].join('')));

}
});

sablono.core.datetime_local_field19539.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.datetime_local_field19539.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.datetime_local_field19539.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.datetime_local_field19539.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field19539);

/**
 * Creates a email input field.
 */
sablono.core.email_field19543 = (function sablono$core$email_field19543(var_args){
var args19544 = [];
var len__7542__auto___19611 = arguments.length;
var i__7543__auto___19612 = (0);
while(true){
if((i__7543__auto___19612 < len__7542__auto___19611)){
args19544.push((arguments[i__7543__auto___19612]));

var G__19613 = (i__7543__auto___19612 + (1));
i__7543__auto___19612 = G__19613;
continue;
} else {
}
break;
}

var G__19546 = args19544.length;
switch (G__19546) {
case 1:
return sablono.core.email_field19543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19544.length)].join('')));

}
});

sablono.core.email_field19543.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.email_field19543.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.email_field19543.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.email_field19543.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field19543);

/**
 * Creates a file input field.
 */
sablono.core.file_field19547 = (function sablono$core$file_field19547(var_args){
var args19548 = [];
var len__7542__auto___19615 = arguments.length;
var i__7543__auto___19616 = (0);
while(true){
if((i__7543__auto___19616 < len__7542__auto___19615)){
args19548.push((arguments[i__7543__auto___19616]));

var G__19617 = (i__7543__auto___19616 + (1));
i__7543__auto___19616 = G__19617;
continue;
} else {
}
break;
}

var G__19550 = args19548.length;
switch (G__19550) {
case 1:
return sablono.core.file_field19547.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19547.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19548.length)].join('')));

}
});

sablono.core.file_field19547.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.file_field19547.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.file_field19547.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.file_field19547.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field19547);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19551 = (function sablono$core$hidden_field19551(var_args){
var args19552 = [];
var len__7542__auto___19619 = arguments.length;
var i__7543__auto___19620 = (0);
while(true){
if((i__7543__auto___19620 < len__7542__auto___19619)){
args19552.push((arguments[i__7543__auto___19620]));

var G__19621 = (i__7543__auto___19620 + (1));
i__7543__auto___19620 = G__19621;
continue;
} else {
}
break;
}

var G__19554 = args19552.length;
switch (G__19554) {
case 1:
return sablono.core.hidden_field19551.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19551.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19552.length)].join('')));

}
});

sablono.core.hidden_field19551.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.hidden_field19551.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.hidden_field19551.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.hidden_field19551.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field19551);

/**
 * Creates a month input field.
 */
sablono.core.month_field19555 = (function sablono$core$month_field19555(var_args){
var args19556 = [];
var len__7542__auto___19623 = arguments.length;
var i__7543__auto___19624 = (0);
while(true){
if((i__7543__auto___19624 < len__7542__auto___19623)){
args19556.push((arguments[i__7543__auto___19624]));

var G__19625 = (i__7543__auto___19624 + (1));
i__7543__auto___19624 = G__19625;
continue;
} else {
}
break;
}

var G__19558 = args19556.length;
switch (G__19558) {
case 1:
return sablono.core.month_field19555.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19555.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19556.length)].join('')));

}
});

sablono.core.month_field19555.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.month_field19555.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.month_field19555.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.month_field19555.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field19555);

/**
 * Creates a number input field.
 */
sablono.core.number_field19559 = (function sablono$core$number_field19559(var_args){
var args19560 = [];
var len__7542__auto___19627 = arguments.length;
var i__7543__auto___19628 = (0);
while(true){
if((i__7543__auto___19628 < len__7542__auto___19627)){
args19560.push((arguments[i__7543__auto___19628]));

var G__19629 = (i__7543__auto___19628 + (1));
i__7543__auto___19628 = G__19629;
continue;
} else {
}
break;
}

var G__19562 = args19560.length;
switch (G__19562) {
case 1:
return sablono.core.number_field19559.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19559.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19560.length)].join('')));

}
});

sablono.core.number_field19559.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.number_field19559.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.number_field19559.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.number_field19559.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field19559);

/**
 * Creates a password input field.
 */
sablono.core.password_field19563 = (function sablono$core$password_field19563(var_args){
var args19564 = [];
var len__7542__auto___19631 = arguments.length;
var i__7543__auto___19632 = (0);
while(true){
if((i__7543__auto___19632 < len__7542__auto___19631)){
args19564.push((arguments[i__7543__auto___19632]));

var G__19633 = (i__7543__auto___19632 + (1));
i__7543__auto___19632 = G__19633;
continue;
} else {
}
break;
}

var G__19566 = args19564.length;
switch (G__19566) {
case 1:
return sablono.core.password_field19563.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19563.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19564.length)].join('')));

}
});

sablono.core.password_field19563.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.password_field19563.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.password_field19563.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.password_field19563.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field19563);

/**
 * Creates a range input field.
 */
sablono.core.range_field19567 = (function sablono$core$range_field19567(var_args){
var args19568 = [];
var len__7542__auto___19635 = arguments.length;
var i__7543__auto___19636 = (0);
while(true){
if((i__7543__auto___19636 < len__7542__auto___19635)){
args19568.push((arguments[i__7543__auto___19636]));

var G__19637 = (i__7543__auto___19636 + (1));
i__7543__auto___19636 = G__19637;
continue;
} else {
}
break;
}

var G__19570 = args19568.length;
switch (G__19570) {
case 1:
return sablono.core.range_field19567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19568.length)].join('')));

}
});

sablono.core.range_field19567.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.range_field19567.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.range_field19567.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.range_field19567.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field19567);

/**
 * Creates a search input field.
 */
sablono.core.search_field19571 = (function sablono$core$search_field19571(var_args){
var args19572 = [];
var len__7542__auto___19639 = arguments.length;
var i__7543__auto___19640 = (0);
while(true){
if((i__7543__auto___19640 < len__7542__auto___19639)){
args19572.push((arguments[i__7543__auto___19640]));

var G__19641 = (i__7543__auto___19640 + (1));
i__7543__auto___19640 = G__19641;
continue;
} else {
}
break;
}

var G__19574 = args19572.length;
switch (G__19574) {
case 1:
return sablono.core.search_field19571.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19571.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19572.length)].join('')));

}
});

sablono.core.search_field19571.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.search_field19571.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.search_field19571.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.search_field19571.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field19571);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19575 = (function sablono$core$tel_field19575(var_args){
var args19576 = [];
var len__7542__auto___19643 = arguments.length;
var i__7543__auto___19644 = (0);
while(true){
if((i__7543__auto___19644 < len__7542__auto___19643)){
args19576.push((arguments[i__7543__auto___19644]));

var G__19645 = (i__7543__auto___19644 + (1));
i__7543__auto___19644 = G__19645;
continue;
} else {
}
break;
}

var G__19578 = args19576.length;
switch (G__19578) {
case 1:
return sablono.core.tel_field19575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19576.length)].join('')));

}
});

sablono.core.tel_field19575.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.tel_field19575.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.tel_field19575.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.tel_field19575.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field19575);

/**
 * Creates a text input field.
 */
sablono.core.text_field19579 = (function sablono$core$text_field19579(var_args){
var args19580 = [];
var len__7542__auto___19647 = arguments.length;
var i__7543__auto___19648 = (0);
while(true){
if((i__7543__auto___19648 < len__7542__auto___19647)){
args19580.push((arguments[i__7543__auto___19648]));

var G__19649 = (i__7543__auto___19648 + (1));
i__7543__auto___19648 = G__19649;
continue;
} else {
}
break;
}

var G__19582 = args19580.length;
switch (G__19582) {
case 1:
return sablono.core.text_field19579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19580.length)].join('')));

}
});

sablono.core.text_field19579.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.text_field19579.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.text_field19579.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.text_field19579.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field19579);

/**
 * Creates a time input field.
 */
sablono.core.time_field19583 = (function sablono$core$time_field19583(var_args){
var args19584 = [];
var len__7542__auto___19651 = arguments.length;
var i__7543__auto___19652 = (0);
while(true){
if((i__7543__auto___19652 < len__7542__auto___19651)){
args19584.push((arguments[i__7543__auto___19652]));

var G__19653 = (i__7543__auto___19652 + (1));
i__7543__auto___19652 = G__19653;
continue;
} else {
}
break;
}

var G__19586 = args19584.length;
switch (G__19586) {
case 1:
return sablono.core.time_field19583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19584.length)].join('')));

}
});

sablono.core.time_field19583.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.time_field19583.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.time_field19583.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.time_field19583.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field19583);

/**
 * Creates a url input field.
 */
sablono.core.url_field19587 = (function sablono$core$url_field19587(var_args){
var args19588 = [];
var len__7542__auto___19655 = arguments.length;
var i__7543__auto___19656 = (0);
while(true){
if((i__7543__auto___19656 < len__7542__auto___19655)){
args19588.push((arguments[i__7543__auto___19656]));

var G__19657 = (i__7543__auto___19656 + (1));
i__7543__auto___19656 = G__19657;
continue;
} else {
}
break;
}

var G__19590 = args19588.length;
switch (G__19590) {
case 1:
return sablono.core.url_field19587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19588.length)].join('')));

}
});

sablono.core.url_field19587.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.url_field19587.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.url_field19587.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.url_field19587.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field19587);

/**
 * Creates a week input field.
 */
sablono.core.week_field19591 = (function sablono$core$week_field19591(var_args){
var args19592 = [];
var len__7542__auto___19659 = arguments.length;
var i__7543__auto___19660 = (0);
while(true){
if((i__7543__auto___19660 < len__7542__auto___19659)){
args19592.push((arguments[i__7543__auto___19660]));

var G__19661 = (i__7543__auto___19660 + (1));
i__7543__auto___19660 = G__19661;
continue;
} else {
}
break;
}

var G__19594 = args19592.length;
switch (G__19594) {
case 1:
return sablono.core.week_field19591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19592.length)].join('')));

}
});

sablono.core.week_field19591.cljs$core$IFn$_invoke$arity$1 = (function (name__19426__auto__){
return sablono.core.week_field19591.cljs$core$IFn$_invoke$arity$2(name__19426__auto__,null);
});

sablono.core.week_field19591.cljs$core$IFn$_invoke$arity$2 = (function (name__19426__auto__,value__19427__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__19426__auto__,value__19427__auto__);
});

sablono.core.week_field19591.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field19591);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19663 = (function sablono$core$check_box19663(var_args){
var args19664 = [];
var len__7542__auto___19667 = arguments.length;
var i__7543__auto___19668 = (0);
while(true){
if((i__7543__auto___19668 < len__7542__auto___19667)){
args19664.push((arguments[i__7543__auto___19668]));

var G__19669 = (i__7543__auto___19668 + (1));
i__7543__auto___19668 = G__19669;
continue;
} else {
}
break;
}

var G__19666 = args19664.length;
switch (G__19666) {
case 1:
return sablono.core.check_box19663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19663.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19664.length)].join('')));

}
});

sablono.core.check_box19663.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19663.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box19663.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19663.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box19663.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box19663.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box19663);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19671 = (function sablono$core$radio_button19671(var_args){
var args19672 = [];
var len__7542__auto___19675 = arguments.length;
var i__7543__auto___19676 = (0);
while(true){
if((i__7543__auto___19676 < len__7542__auto___19675)){
args19672.push((arguments[i__7543__auto___19676]));

var G__19677 = (i__7543__auto___19676 + (1));
i__7543__auto___19676 = G__19677;
continue;
} else {
}
break;
}

var G__19674 = args19672.length;
switch (G__19674) {
case 1:
return sablono.core.radio_button19671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19671.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19672.length)].join('')));

}
});

sablono.core.radio_button19671.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19671.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button19671.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19671.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button19671.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button19671.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button19671);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__19680 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__19680);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19681 = (function sablono$core$select_options19681(coll){
var iter__7256__auto__ = (function sablono$core$select_options19681_$_iter__19692(s__19693){
return (new cljs.core.LazySeq(null,(function (){
var s__19693__$1 = s__19693;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19693__$1);
if(temp__4657__auto__){
var s__19693__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19693__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19693__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19695 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19694 = (0);
while(true){
if((i__19694 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19694);
cljs.core.chunk_append(b__19695,((cljs.core.sequential_QMARK_(x))?(function (){var vec__19700 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19700,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19681(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__19702 = (i__19694 + (1));
i__19694 = G__19702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19695),sablono$core$select_options19681_$_iter__19692(cljs.core.chunk_rest(s__19693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19695),null);
}
} else {
var x = cljs.core.first(s__19693__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__19701 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19701,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19681(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options19681_$_iter__19692(cljs.core.rest(s__19693__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options19681);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19703 = (function sablono$core$drop_down19703(var_args){
var args19704 = [];
var len__7542__auto___19707 = arguments.length;
var i__7543__auto___19708 = (0);
while(true){
if((i__7543__auto___19708 < len__7542__auto___19707)){
args19704.push((arguments[i__7543__auto___19708]));

var G__19709 = (i__7543__auto___19708 + (1));
i__7543__auto___19708 = G__19709;
continue;
} else {
}
break;
}

var G__19706 = args19704.length;
switch (G__19706) {
case 2:
return sablono.core.drop_down19703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19703.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19704.length)].join('')));

}
});

sablono.core.drop_down19703.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19703.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down19703.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down19703.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down19703);
/**
 * Creates a text area element.
 */
sablono.core.text_area19711 = (function sablono$core$text_area19711(var_args){
var args19712 = [];
var len__7542__auto___19715 = arguments.length;
var i__7543__auto___19716 = (0);
while(true){
if((i__7543__auto___19716 < len__7542__auto___19715)){
args19712.push((arguments[i__7543__auto___19716]));

var G__19717 = (i__7543__auto___19716 + (1));
i__7543__auto___19716 = G__19717;
continue;
} else {
}
break;
}

var G__19714 = args19712.length;
switch (G__19714) {
case 1:
return sablono.core.text_area19711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19712.length)].join('')));

}
});

sablono.core.text_area19711.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19711.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area19711.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area19711.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area19711);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19719 = (function sablono$core$label19719(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label19719);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19720 = (function sablono$core$submit_button19720(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button19720);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19721 = (function sablono$core$reset_button19721(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button19721);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19722 = (function sablono$core$form_to19722(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19730 = arguments.length;
var i__7543__auto___19731 = (0);
while(true){
if((i__7543__auto___19731 < len__7542__auto___19730)){
args__7549__auto__.push((arguments[i__7543__auto___19731]));

var G__19732 = (i__7543__auto___19731 + (1));
i__7543__auto___19731 = G__19732;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.form_to19722.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.form_to19722.cljs$core$IFn$_invoke$arity$variadic = (function (p__19725,body){
var vec__19726 = p__19725;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__19727 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__19728 = "_method";
var G__19729 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__19727,G__19728,G__19729) : sablono.core.hidden_field.call(null,G__19727,G__19728,G__19729));
})()], null)),body));
});

sablono.core.form_to19722.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19722.cljs$lang$applyTo = (function (seq19723){
var G__19724 = cljs.core.first(seq19723);
var seq19723__$1 = cljs.core.next(seq19723);
return sablono.core.form_to19722.cljs$core$IFn$_invoke$arity$variadic(G__19724,seq19723__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to19722);
