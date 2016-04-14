// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('quil.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Function that does nothing.
 */
quil.util.no_fn = (function quil$util$no_fn(){
return null;
});
/**
 * Returns the val associated with key in mappings or key directly if it
 *   is one of the vals in mappings. Otherwise throws an exception.
 */
quil.util.resolve_constant_key = (function quil$util$resolve_constant_key(key,mappings){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mappings,key))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(mappings,key);
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),cljs.core.vals(mappings)))){
return key;
} else {
throw (new Error([cljs.core.str("Expecting a keyword, got: "),cljs.core.str(key),cljs.core.str(". Expected one of: "),cljs.core.str(cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(mappings))))].join('')));

}
}
});
/**
 * Returns the length of the longest key of map m. Assumes m's keys are strings
 * and returns 0 if map is empty:
 * (length-of-longest-key {"foo" 1 "barr" 2 "bazzz" 3}) ;=> 5
 * (length-of-longest-key {}) ;=> 0
 */
quil.util.length_of_longest_key = (function quil$util$length_of_longest_key(m){
var or__6484__auto__ = cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13351_SHARP_){
return p1__13351_SHARP_.length();
}),cljs.core.keys(m))));
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return (0);
}
});
/**
 * Generates a padding string starting concatting s with len times pad:
 * (gen-padding "" 5 "b") ;=> "bbbbb"
 * May be called without starting string s in which case it defaults to the
 * empty string and also without pad in which case it defaults to a single space
 */
quil.util.gen_padding = (function quil$util$gen_padding(var_args){
var args13352 = [];
var len__7542__auto___13355 = arguments.length;
var i__7543__auto___13356 = (0);
while(true){
if((i__7543__auto___13356 < len__7542__auto___13355)){
args13352.push((arguments[i__7543__auto___13356]));

var G__13357 = (i__7543__auto___13356 + (1));
i__7543__auto___13356 = G__13357;
continue;
} else {
}
break;
}

var G__13354 = args13352.length;
switch (G__13354) {
case 1:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13352.length)].join('')));

}
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1 = (function (len){
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3("",len," ");
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2 = (function (len,pad){
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3("",len,pad);
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3 = (function (s,len,pad){
if((len > (0))){
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3([cljs.core.str(s),cljs.core.str(pad)].join(''),(len - (1)),pad);
} else {
return s;
}
});

quil.util.gen_padding.cljs$lang$maxFixedArity = 3;
quil.util.print_definition_list = (function quil$util$print_definition_list(definitions){
var longest_key = quil.util.length_of_longest_key(definitions);
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (longest_key){
return (function (p__13361){
var vec__13362 = p__13361;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13362,(1),null);
var len = k.length();
var diff = (longest_key - len);
var pad = quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1(diff);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k,pad,"- ",v], 0));
});})(longest_key))
,definitions));
});
quil.util.clj_compilation_QMARK_ = (function quil$util$clj_compilation_QMARK_(){
return false;
});
quil.util.prepare_quil_name = (function quil$util$prepare_quil_name(const_keyword){
return clojure.string.replace(clojure.string.upper_case(cljs.core.name(const_keyword)),/-/,"_");
});
quil.util.prepare_quil_clj_constants = (function quil$util$prepare_quil_clj_constants(constants){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13363_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13363_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("PConstants/"),cljs.core.str(quil.util.prepare_quil_name(p1__13363_SHARP_))].join(''))],null));
}),constants));
});
quil.util.prepare_quil_cljs_constants = (function quil$util$prepare_quil_cljs_constants(constants){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13364_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13364_SHARP_,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aget),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Processing$prototype$PConstants),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,quil.util.prepare_quil_name(p1__13364_SHARP_))], 0))))],null));
}),constants));
});
quil.util.make_quil_constant_map = (function quil$util$make_quil_constant_map(target,const_map_name,const_map){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),cljs.core._conj(cljs.core.List.EMPTY,const_map_name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,cljs.core.cst$kw$clj))?quil.util.prepare_quil_clj_constants(const_map):quil.util.prepare_quil_cljs_constants(const_map)))], 0))));
});
quil.util.generate_quil_constants = (function quil$util$generate_quil_constants(var_args){
var args__7549__auto__ = [];
var len__7542__auto___13370 = arguments.length;
var i__7543__auto___13371 = (0);
while(true){
if((i__7543__auto___13371 < len__7542__auto___13370)){
args__7549__auto__.push((arguments[i__7543__auto___13371]));

var G__13372 = (i__7543__auto___13371 + (1));
i__7543__auto___13371 = G__13372;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((3) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((3)),(0))):null);
return quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7550__auto__);
});

quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,target,opts){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13365_SHARP_){
return quil.util.make_quil_constant_map(target,cljs.core.first(p1__13365_SHARP_),cljs.core.second(p1__13365_SHARP_));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),opts)))));
});

quil.util.generate_quil_constants.cljs$lang$maxFixedArity = (3);

quil.util.generate_quil_constants.cljs$lang$applyTo = (function (seq13366){
var G__13367 = cljs.core.first(seq13366);
var seq13366__$1 = cljs.core.next(seq13366);
var G__13368 = cljs.core.first(seq13366__$1);
var seq13366__$2 = cljs.core.next(seq13366__$1);
var G__13369 = cljs.core.first(seq13366__$2);
var seq13366__$3 = cljs.core.next(seq13366__$2);
return quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic(G__13367,G__13368,G__13369,seq13366__$3);
});

quil.util.generate_quil_constants.cljs$lang$macro = true;
