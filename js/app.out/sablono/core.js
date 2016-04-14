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
var G__19440__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19439,(0),null);
var body = cljs.core.nthnext(vec__19439,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19441__i = 0, G__19441__a = new Array(arguments.length -  0);
while (G__19441__i < G__19441__a.length) {G__19441__a[G__19441__i] = arguments[G__19441__i + 0]; ++G__19441__i;}
  args = new cljs.core.IndexedSeq(G__19441__a,0);
} 
return G__19440__delegate.call(this,args);};
G__19440.cljs$lang$maxFixedArity = 0;
G__19440.cljs$lang$applyTo = (function (arglist__19442){
var args = cljs.core.seq(arglist__19442);
return G__19440__delegate(args);
});
G__19440.cljs$core$IFn$_invoke$arity$variadic = G__19440__delegate;
return G__19440;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7256__auto__ = (function sablono$core$update_arglists_$_iter__19449(s__19450){
return (new cljs.core.LazySeq(null,(function (){
var s__19450__$1 = s__19450;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19450__$1);
if(temp__4657__auto__){
var s__19450__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19450__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19450__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19452 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19451 = (0);
while(true){
if((i__19451 < size__7255__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19451);
cljs.core.chunk_append(b__19452,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19455 = (i__19451 + (1));
i__19451 = G__19455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19452),sablono$core$update_arglists_$_iter__19449(cljs.core.chunk_rest(s__19450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19452),null);
}
} else {
var args = cljs.core.first(s__19450__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19449(cljs.core.rest(s__19450__$2)));
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
var len__7542__auto___19463 = arguments.length;
var i__7543__auto___19464 = (0);
while(true){
if((i__7543__auto___19464 < len__7542__auto___19463)){
args__7549__auto__.push((arguments[i__7543__auto___19464]));

var G__19465 = (i__7543__auto___19464 + (1));
i__7543__auto___19464 = G__19465;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((0) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7550__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7256__auto__ = (function sablono$core$iter__19457(s__19458){
return (new cljs.core.LazySeq(null,(function (){
var s__19458__$1 = s__19458;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19458__$1);
if(temp__4657__auto__){
var s__19458__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19458__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19458__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19460 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19459 = (0);
while(true){
if((i__19459 < size__7255__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19459);
cljs.core.chunk_append(b__19460,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19466 = (i__19459 + (1));
i__19459 = G__19466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19460),sablono$core$iter__19457(cljs.core.chunk_rest(s__19458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19460),null);
}
} else {
var style = cljs.core.first(s__19458__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19457(cljs.core.rest(s__19458__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq19456){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19456));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19471 = goog.dom.getDocument().body;
var G__19472 = (function (){var G__19473 = "script";
var G__19474 = {"src": src};
return goog.dom.createDom(G__19473,G__19474);
})();
return goog.dom.appendChild(G__19471,G__19472);
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
sablono.core.link_to19475 = (function sablono$core$link_to19475(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19478 = arguments.length;
var i__7543__auto___19479 = (0);
while(true){
if((i__7543__auto___19479 < len__7542__auto___19478)){
args__7549__auto__.push((arguments[i__7543__auto___19479]));

var G__19480 = (i__7543__auto___19479 + (1));
i__7543__auto___19479 = G__19480;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.link_to19475.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.link_to19475.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19475.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19475.cljs$lang$applyTo = (function (seq19476){
var G__19477 = cljs.core.first(seq19476);
var seq19476__$1 = cljs.core.next(seq19476);
return sablono.core.link_to19475.cljs$core$IFn$_invoke$arity$variadic(G__19477,seq19476__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19475);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19481 = (function sablono$core$mail_to19481(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19486 = arguments.length;
var i__7543__auto___19487 = (0);
while(true){
if((i__7543__auto___19487 < len__7542__auto___19486)){
args__7549__auto__.push((arguments[i__7543__auto___19487]));

var G__19488 = (i__7543__auto___19487 + (1));
i__7543__auto___19487 = G__19488;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19481.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.mail_to19481.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19484){
var vec__19485 = p__19484;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19485,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6484__auto__ = content;
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19481.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19481.cljs$lang$applyTo = (function (seq19482){
var G__19483 = cljs.core.first(seq19482);
var seq19482__$1 = cljs.core.next(seq19482);
return sablono.core.mail_to19481.cljs$core$IFn$_invoke$arity$variadic(G__19483,seq19482__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19481);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19489 = (function sablono$core$unordered_list19489(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7256__auto__ = (function sablono$core$unordered_list19489_$_iter__19496(s__19497){
return (new cljs.core.LazySeq(null,(function (){
var s__19497__$1 = s__19497;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19497__$1);
if(temp__4657__auto__){
var s__19497__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19497__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19497__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19499 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19498 = (0);
while(true){
if((i__19498 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19498);
cljs.core.chunk_append(b__19499,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19502 = (i__19498 + (1));
i__19498 = G__19502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19499),sablono$core$unordered_list19489_$_iter__19496(cljs.core.chunk_rest(s__19497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19499),null);
}
} else {
var x = cljs.core.first(s__19497__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list19489_$_iter__19496(cljs.core.rest(s__19497__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list19489);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19503 = (function sablono$core$ordered_list19503(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7256__auto__ = (function sablono$core$ordered_list19503_$_iter__19510(s__19511){
return (new cljs.core.LazySeq(null,(function (){
var s__19511__$1 = s__19511;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19511__$1);
if(temp__4657__auto__){
var s__19511__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19511__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19511__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19513 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19512 = (0);
while(true){
if((i__19512 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19512);
cljs.core.chunk_append(b__19513,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19516 = (i__19512 + (1));
i__19512 = G__19516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19513),sablono$core$ordered_list19503_$_iter__19510(cljs.core.chunk_rest(s__19511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19513),null);
}
} else {
var x = cljs.core.first(s__19511__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list19503_$_iter__19510(cljs.core.rest(s__19511__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list19503);
/**
 * Create an image element.
 */
sablono.core.image19517 = (function sablono$core$image19517(var_args){
var args19518 = [];
var len__7542__auto___19521 = arguments.length;
var i__7543__auto___19522 = (0);
while(true){
if((i__7543__auto___19522 < len__7542__auto___19521)){
args19518.push((arguments[i__7543__auto___19522]));

var G__19523 = (i__7543__auto___19522 + (1));
i__7543__auto___19522 = G__19523;
continue;
} else {
}
break;
}

var G__19520 = args19518.length;
switch (G__19520) {
case 1:
return sablono.core.image19517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19518.length)].join('')));

}
});

sablono.core.image19517.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image19517.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image19517.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image19517);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19525_SHARP_,p2__19526_SHARP_){
return [cljs.core.str(p1__19525_SHARP_),cljs.core.str("["),cljs.core.str(p2__19526_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19527_SHARP_,p2__19528_SHARP_){
return [cljs.core.str(p1__19527_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19528_SHARP_)].join('');
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
sablono.core.color_field19529 = (function sablono$core$color_field19529(var_args){
var args19530 = [];
var len__7542__auto___19597 = arguments.length;
var i__7543__auto___19598 = (0);
while(true){
if((i__7543__auto___19598 < len__7542__auto___19597)){
args19530.push((arguments[i__7543__auto___19598]));

var G__19599 = (i__7543__auto___19598 + (1));
i__7543__auto___19598 = G__19599;
continue;
} else {
}
break;
}

var G__19532 = args19530.length;
switch (G__19532) {
case 1:
return sablono.core.color_field19529.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19529.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19530.length)].join('')));

}
});

sablono.core.color_field19529.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.color_field19529.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.color_field19529.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.color_field19529.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field19529);

/**
 * Creates a date input field.
 */
sablono.core.date_field19533 = (function sablono$core$date_field19533(var_args){
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
return sablono.core.date_field19533.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19533.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19534.length)].join('')));

}
});

sablono.core.date_field19533.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.date_field19533.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.date_field19533.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.date_field19533.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field19533);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19537 = (function sablono$core$datetime_field19537(var_args){
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
return sablono.core.datetime_field19537.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19537.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19538.length)].join('')));

}
});

sablono.core.datetime_field19537.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.datetime_field19537.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.datetime_field19537.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.datetime_field19537.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field19537);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19541 = (function sablono$core$datetime_local_field19541(var_args){
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
return sablono.core.datetime_local_field19541.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19541.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19542.length)].join('')));

}
});

sablono.core.datetime_local_field19541.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.datetime_local_field19541.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.datetime_local_field19541.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.datetime_local_field19541.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field19541);

/**
 * Creates a email input field.
 */
sablono.core.email_field19545 = (function sablono$core$email_field19545(var_args){
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
return sablono.core.email_field19545.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19545.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19546.length)].join('')));

}
});

sablono.core.email_field19545.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.email_field19545.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.email_field19545.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.email_field19545.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field19545);

/**
 * Creates a file input field.
 */
sablono.core.file_field19549 = (function sablono$core$file_field19549(var_args){
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
return sablono.core.file_field19549.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19549.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19550.length)].join('')));

}
});

sablono.core.file_field19549.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.file_field19549.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.file_field19549.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.file_field19549.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field19549);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19553 = (function sablono$core$hidden_field19553(var_args){
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
return sablono.core.hidden_field19553.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19553.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19554.length)].join('')));

}
});

sablono.core.hidden_field19553.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.hidden_field19553.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.hidden_field19553.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.hidden_field19553.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field19553);

/**
 * Creates a month input field.
 */
sablono.core.month_field19557 = (function sablono$core$month_field19557(var_args){
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
return sablono.core.month_field19557.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19557.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19558.length)].join('')));

}
});

sablono.core.month_field19557.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.month_field19557.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.month_field19557.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.month_field19557.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field19557);

/**
 * Creates a number input field.
 */
sablono.core.number_field19561 = (function sablono$core$number_field19561(var_args){
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
return sablono.core.number_field19561.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19561.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19562.length)].join('')));

}
});

sablono.core.number_field19561.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.number_field19561.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.number_field19561.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.number_field19561.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field19561);

/**
 * Creates a password input field.
 */
sablono.core.password_field19565 = (function sablono$core$password_field19565(var_args){
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
return sablono.core.password_field19565.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19565.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19566.length)].join('')));

}
});

sablono.core.password_field19565.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.password_field19565.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.password_field19565.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.password_field19565.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field19565);

/**
 * Creates a range input field.
 */
sablono.core.range_field19569 = (function sablono$core$range_field19569(var_args){
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
return sablono.core.range_field19569.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19569.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19570.length)].join('')));

}
});

sablono.core.range_field19569.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.range_field19569.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.range_field19569.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.range_field19569.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field19569);

/**
 * Creates a search input field.
 */
sablono.core.search_field19573 = (function sablono$core$search_field19573(var_args){
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
return sablono.core.search_field19573.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19573.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19574.length)].join('')));

}
});

sablono.core.search_field19573.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.search_field19573.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.search_field19573.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.search_field19573.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field19573);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19577 = (function sablono$core$tel_field19577(var_args){
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
return sablono.core.tel_field19577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19578.length)].join('')));

}
});

sablono.core.tel_field19577.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.tel_field19577.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.tel_field19577.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.tel_field19577.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field19577);

/**
 * Creates a text input field.
 */
sablono.core.text_field19581 = (function sablono$core$text_field19581(var_args){
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
return sablono.core.text_field19581.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19582.length)].join('')));

}
});

sablono.core.text_field19581.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.text_field19581.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.text_field19581.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.text_field19581.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field19581);

/**
 * Creates a time input field.
 */
sablono.core.time_field19585 = (function sablono$core$time_field19585(var_args){
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
return sablono.core.time_field19585.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19585.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19586.length)].join('')));

}
});

sablono.core.time_field19585.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.time_field19585.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.time_field19585.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.time_field19585.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field19585);

/**
 * Creates a url input field.
 */
sablono.core.url_field19589 = (function sablono$core$url_field19589(var_args){
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
return sablono.core.url_field19589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19590.length)].join('')));

}
});

sablono.core.url_field19589.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.url_field19589.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.url_field19589.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.url_field19589.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field19589);

/**
 * Creates a week input field.
 */
sablono.core.week_field19593 = (function sablono$core$week_field19593(var_args){
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
return sablono.core.week_field19593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19594.length)].join('')));

}
});

sablono.core.week_field19593.cljs$core$IFn$_invoke$arity$1 = (function (name__19428__auto__){
return sablono.core.week_field19593.cljs$core$IFn$_invoke$arity$2(name__19428__auto__,null);
});

sablono.core.week_field19593.cljs$core$IFn$_invoke$arity$2 = (function (name__19428__auto__,value__19429__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__19428__auto__,value__19429__auto__);
});

sablono.core.week_field19593.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field19593);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19665 = (function sablono$core$check_box19665(var_args){
var args19666 = [];
var len__7542__auto___19669 = arguments.length;
var i__7543__auto___19670 = (0);
while(true){
if((i__7543__auto___19670 < len__7542__auto___19669)){
args19666.push((arguments[i__7543__auto___19670]));

var G__19671 = (i__7543__auto___19670 + (1));
i__7543__auto___19670 = G__19671;
continue;
} else {
}
break;
}

var G__19668 = args19666.length;
switch (G__19668) {
case 1:
return sablono.core.check_box19665.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19665.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19665.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19666.length)].join('')));

}
});

sablono.core.check_box19665.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19665.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box19665.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19665.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box19665.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box19665.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box19665);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19673 = (function sablono$core$radio_button19673(var_args){
var args19674 = [];
var len__7542__auto___19677 = arguments.length;
var i__7543__auto___19678 = (0);
while(true){
if((i__7543__auto___19678 < len__7542__auto___19677)){
args19674.push((arguments[i__7543__auto___19678]));

var G__19679 = (i__7543__auto___19678 + (1));
i__7543__auto___19678 = G__19679;
continue;
} else {
}
break;
}

var G__19676 = args19674.length;
switch (G__19676) {
case 1:
return sablono.core.radio_button19673.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19673.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19673.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19674.length)].join('')));

}
});

sablono.core.radio_button19673.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19673.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button19673.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19673.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button19673.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button19673.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button19673);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__19682 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__19682);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19683 = (function sablono$core$select_options19683(coll){
var iter__7256__auto__ = (function sablono$core$select_options19683_$_iter__19694(s__19695){
return (new cljs.core.LazySeq(null,(function (){
var s__19695__$1 = s__19695;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19695__$1);
if(temp__4657__auto__){
var s__19695__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19695__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19695__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19697 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19696 = (0);
while(true){
if((i__19696 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19696);
cljs.core.chunk_append(b__19697,((cljs.core.sequential_QMARK_(x))?(function (){var vec__19702 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19702,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19702,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19702,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19683(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__19704 = (i__19696 + (1));
i__19696 = G__19704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19697),sablono$core$select_options19683_$_iter__19694(cljs.core.chunk_rest(s__19695__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19697),null);
}
} else {
var x = cljs.core.first(s__19695__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__19703 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19703,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19683(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options19683_$_iter__19694(cljs.core.rest(s__19695__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options19683);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19705 = (function sablono$core$drop_down19705(var_args){
var args19706 = [];
var len__7542__auto___19709 = arguments.length;
var i__7543__auto___19710 = (0);
while(true){
if((i__7543__auto___19710 < len__7542__auto___19709)){
args19706.push((arguments[i__7543__auto___19710]));

var G__19711 = (i__7543__auto___19710 + (1));
i__7543__auto___19710 = G__19711;
continue;
} else {
}
break;
}

var G__19708 = args19706.length;
switch (G__19708) {
case 2:
return sablono.core.drop_down19705.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19705.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19706.length)].join('')));

}
});

sablono.core.drop_down19705.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19705.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down19705.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down19705.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down19705);
/**
 * Creates a text area element.
 */
sablono.core.text_area19713 = (function sablono$core$text_area19713(var_args){
var args19714 = [];
var len__7542__auto___19717 = arguments.length;
var i__7543__auto___19718 = (0);
while(true){
if((i__7543__auto___19718 < len__7542__auto___19717)){
args19714.push((arguments[i__7543__auto___19718]));

var G__19719 = (i__7543__auto___19718 + (1));
i__7543__auto___19718 = G__19719;
continue;
} else {
}
break;
}

var G__19716 = args19714.length;
switch (G__19716) {
case 1:
return sablono.core.text_area19713.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19713.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19714.length)].join('')));

}
});

sablono.core.text_area19713.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19713.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area19713.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area19713.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area19713);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19721 = (function sablono$core$label19721(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label19721);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19722 = (function sablono$core$submit_button19722(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button19722);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19723 = (function sablono$core$reset_button19723(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button19723);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19724 = (function sablono$core$form_to19724(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19732 = arguments.length;
var i__7543__auto___19733 = (0);
while(true){
if((i__7543__auto___19733 < len__7542__auto___19732)){
args__7549__auto__.push((arguments[i__7543__auto___19733]));

var G__19734 = (i__7543__auto___19733 + (1));
i__7543__auto___19733 = G__19734;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.form_to19724.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.form_to19724.cljs$core$IFn$_invoke$arity$variadic = (function (p__19727,body){
var vec__19728 = p__19727;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19728,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__19729 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__19730 = "_method";
var G__19731 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__19729,G__19730,G__19731) : sablono.core.hidden_field.call(null,G__19729,G__19730,G__19731));
})()], null)),body));
});

sablono.core.form_to19724.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19724.cljs$lang$applyTo = (function (seq19725){
var G__19726 = cljs.core.first(seq19725);
var seq19725__$1 = cljs.core.next(seq19725);
return sablono.core.form_to19724.cljs$core$IFn$_invoke$arity$variadic(G__19726,seq19725__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to19724);
