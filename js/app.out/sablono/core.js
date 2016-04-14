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
var G__19364__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19363 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19363,(0),null);
var body = cljs.core.nthnext(vec__19363,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19365__i = 0, G__19365__a = new Array(arguments.length -  0);
while (G__19365__i < G__19365__a.length) {G__19365__a[G__19365__i] = arguments[G__19365__i + 0]; ++G__19365__i;}
  args = new cljs.core.IndexedSeq(G__19365__a,0);
} 
return G__19364__delegate.call(this,args);};
G__19364.cljs$lang$maxFixedArity = 0;
G__19364.cljs$lang$applyTo = (function (arglist__19366){
var args = cljs.core.seq(arglist__19366);
return G__19364__delegate(args);
});
G__19364.cljs$core$IFn$_invoke$arity$variadic = G__19364__delegate;
return G__19364;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7256__auto__ = (function sablono$core$update_arglists_$_iter__19373(s__19374){
return (new cljs.core.LazySeq(null,(function (){
var s__19374__$1 = s__19374;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19374__$1);
if(temp__4657__auto__){
var s__19374__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19374__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19374__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19376 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19375 = (0);
while(true){
if((i__19375 < size__7255__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19375);
cljs.core.chunk_append(b__19376,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19379 = (i__19375 + (1));
i__19375 = G__19379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19376),sablono$core$update_arglists_$_iter__19373(cljs.core.chunk_rest(s__19374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19376),null);
}
} else {
var args = cljs.core.first(s__19374__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19373(cljs.core.rest(s__19374__$2)));
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
var len__7542__auto___19387 = arguments.length;
var i__7543__auto___19388 = (0);
while(true){
if((i__7543__auto___19388 < len__7542__auto___19387)){
args__7549__auto__.push((arguments[i__7543__auto___19388]));

var G__19389 = (i__7543__auto___19388 + (1));
i__7543__auto___19388 = G__19389;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((0) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7550__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7256__auto__ = (function sablono$core$iter__19381(s__19382){
return (new cljs.core.LazySeq(null,(function (){
var s__19382__$1 = s__19382;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19382__$1);
if(temp__4657__auto__){
var s__19382__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19382__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19382__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19384 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19383 = (0);
while(true){
if((i__19383 < size__7255__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19383);
cljs.core.chunk_append(b__19384,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19390 = (i__19383 + (1));
i__19383 = G__19390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19384),sablono$core$iter__19381(cljs.core.chunk_rest(s__19382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19384),null);
}
} else {
var style = cljs.core.first(s__19382__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19381(cljs.core.rest(s__19382__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq19380){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19380));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19395 = goog.dom.getDocument().body;
var G__19396 = (function (){var G__19397 = "script";
var G__19398 = {"src": src};
return goog.dom.createDom(G__19397,G__19398);
})();
return goog.dom.appendChild(G__19395,G__19396);
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
sablono.core.link_to19399 = (function sablono$core$link_to19399(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19402 = arguments.length;
var i__7543__auto___19403 = (0);
while(true){
if((i__7543__auto___19403 < len__7542__auto___19402)){
args__7549__auto__.push((arguments[i__7543__auto___19403]));

var G__19404 = (i__7543__auto___19403 + (1));
i__7543__auto___19403 = G__19404;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.link_to19399.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.link_to19399.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19399.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19399.cljs$lang$applyTo = (function (seq19400){
var G__19401 = cljs.core.first(seq19400);
var seq19400__$1 = cljs.core.next(seq19400);
return sablono.core.link_to19399.cljs$core$IFn$_invoke$arity$variadic(G__19401,seq19400__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19399);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19405 = (function sablono$core$mail_to19405(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19410 = arguments.length;
var i__7543__auto___19411 = (0);
while(true){
if((i__7543__auto___19411 < len__7542__auto___19410)){
args__7549__auto__.push((arguments[i__7543__auto___19411]));

var G__19412 = (i__7543__auto___19411 + (1));
i__7543__auto___19411 = G__19412;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19405.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.mail_to19405.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19408){
var vec__19409 = p__19408;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19409,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6484__auto__ = content;
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19405.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19405.cljs$lang$applyTo = (function (seq19406){
var G__19407 = cljs.core.first(seq19406);
var seq19406__$1 = cljs.core.next(seq19406);
return sablono.core.mail_to19405.cljs$core$IFn$_invoke$arity$variadic(G__19407,seq19406__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19405);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19413 = (function sablono$core$unordered_list19413(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7256__auto__ = (function sablono$core$unordered_list19413_$_iter__19420(s__19421){
return (new cljs.core.LazySeq(null,(function (){
var s__19421__$1 = s__19421;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19421__$1);
if(temp__4657__auto__){
var s__19421__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19421__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19421__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19423 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19422 = (0);
while(true){
if((i__19422 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19422);
cljs.core.chunk_append(b__19423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19426 = (i__19422 + (1));
i__19422 = G__19426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19423),sablono$core$unordered_list19413_$_iter__19420(cljs.core.chunk_rest(s__19421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19423),null);
}
} else {
var x = cljs.core.first(s__19421__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list19413_$_iter__19420(cljs.core.rest(s__19421__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list19413);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19427 = (function sablono$core$ordered_list19427(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7256__auto__ = (function sablono$core$ordered_list19427_$_iter__19434(s__19435){
return (new cljs.core.LazySeq(null,(function (){
var s__19435__$1 = s__19435;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19435__$1);
if(temp__4657__auto__){
var s__19435__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19435__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19435__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19437 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19436 = (0);
while(true){
if((i__19436 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19436);
cljs.core.chunk_append(b__19437,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19440 = (i__19436 + (1));
i__19436 = G__19440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19437),sablono$core$ordered_list19427_$_iter__19434(cljs.core.chunk_rest(s__19435__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19437),null);
}
} else {
var x = cljs.core.first(s__19435__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list19427_$_iter__19434(cljs.core.rest(s__19435__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list19427);
/**
 * Create an image element.
 */
sablono.core.image19441 = (function sablono$core$image19441(var_args){
var args19442 = [];
var len__7542__auto___19445 = arguments.length;
var i__7543__auto___19446 = (0);
while(true){
if((i__7543__auto___19446 < len__7542__auto___19445)){
args19442.push((arguments[i__7543__auto___19446]));

var G__19447 = (i__7543__auto___19446 + (1));
i__7543__auto___19446 = G__19447;
continue;
} else {
}
break;
}

var G__19444 = args19442.length;
switch (G__19444) {
case 1:
return sablono.core.image19441.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19441.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19442.length)].join('')));

}
});

sablono.core.image19441.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image19441.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image19441.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image19441);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19449_SHARP_,p2__19450_SHARP_){
return [cljs.core.str(p1__19449_SHARP_),cljs.core.str("["),cljs.core.str(p2__19450_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19451_SHARP_,p2__19452_SHARP_){
return [cljs.core.str(p1__19451_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19452_SHARP_)].join('');
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
sablono.core.color_field19453 = (function sablono$core$color_field19453(var_args){
var args19454 = [];
var len__7542__auto___19521 = arguments.length;
var i__7543__auto___19522 = (0);
while(true){
if((i__7543__auto___19522 < len__7542__auto___19521)){
args19454.push((arguments[i__7543__auto___19522]));

var G__19523 = (i__7543__auto___19522 + (1));
i__7543__auto___19522 = G__19523;
continue;
} else {
}
break;
}

var G__19456 = args19454.length;
switch (G__19456) {
case 1:
return sablono.core.color_field19453.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19453.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19454.length)].join('')));

}
});

sablono.core.color_field19453.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.color_field19453.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.color_field19453.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.color_field19453.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field19453);

/**
 * Creates a date input field.
 */
sablono.core.date_field19457 = (function sablono$core$date_field19457(var_args){
var args19458 = [];
var len__7542__auto___19525 = arguments.length;
var i__7543__auto___19526 = (0);
while(true){
if((i__7543__auto___19526 < len__7542__auto___19525)){
args19458.push((arguments[i__7543__auto___19526]));

var G__19527 = (i__7543__auto___19526 + (1));
i__7543__auto___19526 = G__19527;
continue;
} else {
}
break;
}

var G__19460 = args19458.length;
switch (G__19460) {
case 1:
return sablono.core.date_field19457.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19457.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19458.length)].join('')));

}
});

sablono.core.date_field19457.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.date_field19457.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.date_field19457.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.date_field19457.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field19457);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19461 = (function sablono$core$datetime_field19461(var_args){
var args19462 = [];
var len__7542__auto___19529 = arguments.length;
var i__7543__auto___19530 = (0);
while(true){
if((i__7543__auto___19530 < len__7542__auto___19529)){
args19462.push((arguments[i__7543__auto___19530]));

var G__19531 = (i__7543__auto___19530 + (1));
i__7543__auto___19530 = G__19531;
continue;
} else {
}
break;
}

var G__19464 = args19462.length;
switch (G__19464) {
case 1:
return sablono.core.datetime_field19461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19462.length)].join('')));

}
});

sablono.core.datetime_field19461.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.datetime_field19461.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.datetime_field19461.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.datetime_field19461.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field19461);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19465 = (function sablono$core$datetime_local_field19465(var_args){
var args19466 = [];
var len__7542__auto___19533 = arguments.length;
var i__7543__auto___19534 = (0);
while(true){
if((i__7543__auto___19534 < len__7542__auto___19533)){
args19466.push((arguments[i__7543__auto___19534]));

var G__19535 = (i__7543__auto___19534 + (1));
i__7543__auto___19534 = G__19535;
continue;
} else {
}
break;
}

var G__19468 = args19466.length;
switch (G__19468) {
case 1:
return sablono.core.datetime_local_field19465.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19465.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19466.length)].join('')));

}
});

sablono.core.datetime_local_field19465.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.datetime_local_field19465.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.datetime_local_field19465.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.datetime_local_field19465.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field19465);

/**
 * Creates a email input field.
 */
sablono.core.email_field19469 = (function sablono$core$email_field19469(var_args){
var args19470 = [];
var len__7542__auto___19537 = arguments.length;
var i__7543__auto___19538 = (0);
while(true){
if((i__7543__auto___19538 < len__7542__auto___19537)){
args19470.push((arguments[i__7543__auto___19538]));

var G__19539 = (i__7543__auto___19538 + (1));
i__7543__auto___19538 = G__19539;
continue;
} else {
}
break;
}

var G__19472 = args19470.length;
switch (G__19472) {
case 1:
return sablono.core.email_field19469.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19469.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19470.length)].join('')));

}
});

sablono.core.email_field19469.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.email_field19469.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.email_field19469.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.email_field19469.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field19469);

/**
 * Creates a file input field.
 */
sablono.core.file_field19473 = (function sablono$core$file_field19473(var_args){
var args19474 = [];
var len__7542__auto___19541 = arguments.length;
var i__7543__auto___19542 = (0);
while(true){
if((i__7543__auto___19542 < len__7542__auto___19541)){
args19474.push((arguments[i__7543__auto___19542]));

var G__19543 = (i__7543__auto___19542 + (1));
i__7543__auto___19542 = G__19543;
continue;
} else {
}
break;
}

var G__19476 = args19474.length;
switch (G__19476) {
case 1:
return sablono.core.file_field19473.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19473.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19474.length)].join('')));

}
});

sablono.core.file_field19473.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.file_field19473.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.file_field19473.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.file_field19473.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field19473);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19477 = (function sablono$core$hidden_field19477(var_args){
var args19478 = [];
var len__7542__auto___19545 = arguments.length;
var i__7543__auto___19546 = (0);
while(true){
if((i__7543__auto___19546 < len__7542__auto___19545)){
args19478.push((arguments[i__7543__auto___19546]));

var G__19547 = (i__7543__auto___19546 + (1));
i__7543__auto___19546 = G__19547;
continue;
} else {
}
break;
}

var G__19480 = args19478.length;
switch (G__19480) {
case 1:
return sablono.core.hidden_field19477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19478.length)].join('')));

}
});

sablono.core.hidden_field19477.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.hidden_field19477.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.hidden_field19477.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.hidden_field19477.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field19477);

/**
 * Creates a month input field.
 */
sablono.core.month_field19481 = (function sablono$core$month_field19481(var_args){
var args19482 = [];
var len__7542__auto___19549 = arguments.length;
var i__7543__auto___19550 = (0);
while(true){
if((i__7543__auto___19550 < len__7542__auto___19549)){
args19482.push((arguments[i__7543__auto___19550]));

var G__19551 = (i__7543__auto___19550 + (1));
i__7543__auto___19550 = G__19551;
continue;
} else {
}
break;
}

var G__19484 = args19482.length;
switch (G__19484) {
case 1:
return sablono.core.month_field19481.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19481.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19482.length)].join('')));

}
});

sablono.core.month_field19481.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.month_field19481.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.month_field19481.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.month_field19481.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field19481);

/**
 * Creates a number input field.
 */
sablono.core.number_field19485 = (function sablono$core$number_field19485(var_args){
var args19486 = [];
var len__7542__auto___19553 = arguments.length;
var i__7543__auto___19554 = (0);
while(true){
if((i__7543__auto___19554 < len__7542__auto___19553)){
args19486.push((arguments[i__7543__auto___19554]));

var G__19555 = (i__7543__auto___19554 + (1));
i__7543__auto___19554 = G__19555;
continue;
} else {
}
break;
}

var G__19488 = args19486.length;
switch (G__19488) {
case 1:
return sablono.core.number_field19485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19486.length)].join('')));

}
});

sablono.core.number_field19485.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.number_field19485.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.number_field19485.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.number_field19485.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field19485);

/**
 * Creates a password input field.
 */
sablono.core.password_field19489 = (function sablono$core$password_field19489(var_args){
var args19490 = [];
var len__7542__auto___19557 = arguments.length;
var i__7543__auto___19558 = (0);
while(true){
if((i__7543__auto___19558 < len__7542__auto___19557)){
args19490.push((arguments[i__7543__auto___19558]));

var G__19559 = (i__7543__auto___19558 + (1));
i__7543__auto___19558 = G__19559;
continue;
} else {
}
break;
}

var G__19492 = args19490.length;
switch (G__19492) {
case 1:
return sablono.core.password_field19489.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19489.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19490.length)].join('')));

}
});

sablono.core.password_field19489.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.password_field19489.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.password_field19489.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.password_field19489.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field19489);

/**
 * Creates a range input field.
 */
sablono.core.range_field19493 = (function sablono$core$range_field19493(var_args){
var args19494 = [];
var len__7542__auto___19561 = arguments.length;
var i__7543__auto___19562 = (0);
while(true){
if((i__7543__auto___19562 < len__7542__auto___19561)){
args19494.push((arguments[i__7543__auto___19562]));

var G__19563 = (i__7543__auto___19562 + (1));
i__7543__auto___19562 = G__19563;
continue;
} else {
}
break;
}

var G__19496 = args19494.length;
switch (G__19496) {
case 1:
return sablono.core.range_field19493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19494.length)].join('')));

}
});

sablono.core.range_field19493.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.range_field19493.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.range_field19493.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.range_field19493.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field19493);

/**
 * Creates a search input field.
 */
sablono.core.search_field19497 = (function sablono$core$search_field19497(var_args){
var args19498 = [];
var len__7542__auto___19565 = arguments.length;
var i__7543__auto___19566 = (0);
while(true){
if((i__7543__auto___19566 < len__7542__auto___19565)){
args19498.push((arguments[i__7543__auto___19566]));

var G__19567 = (i__7543__auto___19566 + (1));
i__7543__auto___19566 = G__19567;
continue;
} else {
}
break;
}

var G__19500 = args19498.length;
switch (G__19500) {
case 1:
return sablono.core.search_field19497.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19497.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19498.length)].join('')));

}
});

sablono.core.search_field19497.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.search_field19497.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.search_field19497.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.search_field19497.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field19497);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19501 = (function sablono$core$tel_field19501(var_args){
var args19502 = [];
var len__7542__auto___19569 = arguments.length;
var i__7543__auto___19570 = (0);
while(true){
if((i__7543__auto___19570 < len__7542__auto___19569)){
args19502.push((arguments[i__7543__auto___19570]));

var G__19571 = (i__7543__auto___19570 + (1));
i__7543__auto___19570 = G__19571;
continue;
} else {
}
break;
}

var G__19504 = args19502.length;
switch (G__19504) {
case 1:
return sablono.core.tel_field19501.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19501.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19502.length)].join('')));

}
});

sablono.core.tel_field19501.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.tel_field19501.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.tel_field19501.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.tel_field19501.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field19501);

/**
 * Creates a text input field.
 */
sablono.core.text_field19505 = (function sablono$core$text_field19505(var_args){
var args19506 = [];
var len__7542__auto___19573 = arguments.length;
var i__7543__auto___19574 = (0);
while(true){
if((i__7543__auto___19574 < len__7542__auto___19573)){
args19506.push((arguments[i__7543__auto___19574]));

var G__19575 = (i__7543__auto___19574 + (1));
i__7543__auto___19574 = G__19575;
continue;
} else {
}
break;
}

var G__19508 = args19506.length;
switch (G__19508) {
case 1:
return sablono.core.text_field19505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19506.length)].join('')));

}
});

sablono.core.text_field19505.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.text_field19505.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.text_field19505.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.text_field19505.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field19505);

/**
 * Creates a time input field.
 */
sablono.core.time_field19509 = (function sablono$core$time_field19509(var_args){
var args19510 = [];
var len__7542__auto___19577 = arguments.length;
var i__7543__auto___19578 = (0);
while(true){
if((i__7543__auto___19578 < len__7542__auto___19577)){
args19510.push((arguments[i__7543__auto___19578]));

var G__19579 = (i__7543__auto___19578 + (1));
i__7543__auto___19578 = G__19579;
continue;
} else {
}
break;
}

var G__19512 = args19510.length;
switch (G__19512) {
case 1:
return sablono.core.time_field19509.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19510.length)].join('')));

}
});

sablono.core.time_field19509.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.time_field19509.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.time_field19509.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.time_field19509.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field19509);

/**
 * Creates a url input field.
 */
sablono.core.url_field19513 = (function sablono$core$url_field19513(var_args){
var args19514 = [];
var len__7542__auto___19581 = arguments.length;
var i__7543__auto___19582 = (0);
while(true){
if((i__7543__auto___19582 < len__7542__auto___19581)){
args19514.push((arguments[i__7543__auto___19582]));

var G__19583 = (i__7543__auto___19582 + (1));
i__7543__auto___19582 = G__19583;
continue;
} else {
}
break;
}

var G__19516 = args19514.length;
switch (G__19516) {
case 1:
return sablono.core.url_field19513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19514.length)].join('')));

}
});

sablono.core.url_field19513.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.url_field19513.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.url_field19513.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.url_field19513.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field19513);

/**
 * Creates a week input field.
 */
sablono.core.week_field19517 = (function sablono$core$week_field19517(var_args){
var args19518 = [];
var len__7542__auto___19585 = arguments.length;
var i__7543__auto___19586 = (0);
while(true){
if((i__7543__auto___19586 < len__7542__auto___19585)){
args19518.push((arguments[i__7543__auto___19586]));

var G__19587 = (i__7543__auto___19586 + (1));
i__7543__auto___19586 = G__19587;
continue;
} else {
}
break;
}

var G__19520 = args19518.length;
switch (G__19520) {
case 1:
return sablono.core.week_field19517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19518.length)].join('')));

}
});

sablono.core.week_field19517.cljs$core$IFn$_invoke$arity$1 = (function (name__19352__auto__){
return sablono.core.week_field19517.cljs$core$IFn$_invoke$arity$2(name__19352__auto__,null);
});

sablono.core.week_field19517.cljs$core$IFn$_invoke$arity$2 = (function (name__19352__auto__,value__19353__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__19352__auto__,value__19353__auto__);
});

sablono.core.week_field19517.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field19517);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19589 = (function sablono$core$check_box19589(var_args){
var args19590 = [];
var len__7542__auto___19593 = arguments.length;
var i__7543__auto___19594 = (0);
while(true){
if((i__7543__auto___19594 < len__7542__auto___19593)){
args19590.push((arguments[i__7543__auto___19594]));

var G__19595 = (i__7543__auto___19594 + (1));
i__7543__auto___19594 = G__19595;
continue;
} else {
}
break;
}

var G__19592 = args19590.length;
switch (G__19592) {
case 1:
return sablono.core.check_box19589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19589.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19590.length)].join('')));

}
});

sablono.core.check_box19589.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19589.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box19589.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19589.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box19589.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box19589.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box19589);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19597 = (function sablono$core$radio_button19597(var_args){
var args19598 = [];
var len__7542__auto___19601 = arguments.length;
var i__7543__auto___19602 = (0);
while(true){
if((i__7543__auto___19602 < len__7542__auto___19601)){
args19598.push((arguments[i__7543__auto___19602]));

var G__19603 = (i__7543__auto___19602 + (1));
i__7543__auto___19602 = G__19603;
continue;
} else {
}
break;
}

var G__19600 = args19598.length;
switch (G__19600) {
case 1:
return sablono.core.radio_button19597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19597.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19598.length)].join('')));

}
});

sablono.core.radio_button19597.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19597.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button19597.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19597.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button19597.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button19597.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button19597);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__19606 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__19606);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19607 = (function sablono$core$select_options19607(coll){
var iter__7256__auto__ = (function sablono$core$select_options19607_$_iter__19618(s__19619){
return (new cljs.core.LazySeq(null,(function (){
var s__19619__$1 = s__19619;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__19619__$1);
if(temp__4657__auto__){
var s__19619__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19619__$2)){
var c__7254__auto__ = cljs.core.chunk_first(s__19619__$2);
var size__7255__auto__ = cljs.core.count(c__7254__auto__);
var b__19621 = cljs.core.chunk_buffer(size__7255__auto__);
if((function (){var i__19620 = (0);
while(true){
if((i__19620 < size__7255__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7254__auto__,i__19620);
cljs.core.chunk_append(b__19621,((cljs.core.sequential_QMARK_(x))?(function (){var vec__19626 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19626,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19626,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19626,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19607(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__19628 = (i__19620 + (1));
i__19620 = G__19628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19621),sablono$core$select_options19607_$_iter__19618(cljs.core.chunk_rest(s__19619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19621),null);
}
} else {
var x = cljs.core.first(s__19619__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__19627 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19627,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19627,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19627,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19607(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options19607_$_iter__19618(cljs.core.rest(s__19619__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options19607);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19629 = (function sablono$core$drop_down19629(var_args){
var args19630 = [];
var len__7542__auto___19633 = arguments.length;
var i__7543__auto___19634 = (0);
while(true){
if((i__7543__auto___19634 < len__7542__auto___19633)){
args19630.push((arguments[i__7543__auto___19634]));

var G__19635 = (i__7543__auto___19634 + (1));
i__7543__auto___19634 = G__19635;
continue;
} else {
}
break;
}

var G__19632 = args19630.length;
switch (G__19632) {
case 2:
return sablono.core.drop_down19629.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19629.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19630.length)].join('')));

}
});

sablono.core.drop_down19629.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19629.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down19629.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down19629.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down19629);
/**
 * Creates a text area element.
 */
sablono.core.text_area19637 = (function sablono$core$text_area19637(var_args){
var args19638 = [];
var len__7542__auto___19641 = arguments.length;
var i__7543__auto___19642 = (0);
while(true){
if((i__7543__auto___19642 < len__7542__auto___19641)){
args19638.push((arguments[i__7543__auto___19642]));

var G__19643 = (i__7543__auto___19642 + (1));
i__7543__auto___19642 = G__19643;
continue;
} else {
}
break;
}

var G__19640 = args19638.length;
switch (G__19640) {
case 1:
return sablono.core.text_area19637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19638.length)].join('')));

}
});

sablono.core.text_area19637.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19637.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area19637.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area19637.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area19637);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19645 = (function sablono$core$label19645(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label19645);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19646 = (function sablono$core$submit_button19646(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button19646);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19647 = (function sablono$core$reset_button19647(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button19647);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19648 = (function sablono$core$form_to19648(var_args){
var args__7549__auto__ = [];
var len__7542__auto___19656 = arguments.length;
var i__7543__auto___19657 = (0);
while(true){
if((i__7543__auto___19657 < len__7542__auto___19656)){
args__7549__auto__.push((arguments[i__7543__auto___19657]));

var G__19658 = (i__7543__auto___19657 + (1));
i__7543__auto___19657 = G__19658;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return sablono.core.form_to19648.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

sablono.core.form_to19648.cljs$core$IFn$_invoke$arity$variadic = (function (p__19651,body){
var vec__19652 = p__19651;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19652,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19652,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__19653 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__19654 = "_method";
var G__19655 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__19653,G__19654,G__19655) : sablono.core.hidden_field.call(null,G__19653,G__19654,G__19655));
})()], null)),body));
});

sablono.core.form_to19648.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19648.cljs$lang$applyTo = (function (seq19649){
var G__19650 = cljs.core.first(seq19649);
var seq19649__$1 = cljs.core.next(seq19649);
return sablono.core.form_to19648.cljs$core$IFn$_invoke$arity$variadic(G__19650,seq19649__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to19648);
