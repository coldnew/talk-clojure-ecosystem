// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__19743){
var vec__19746 = p__19743;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19746,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19746,(1),null);
var call = vec__19746;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : om.next.impl.parser.expr__GT_ast.call(null,args)),cljs.core.cst$kw$target,(function (){var or__6484__auto__ = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return cljs.core.cst$kw$remote;
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : om.next.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.merge,(function (){var or__6484__auto__ = args;
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__19747 = ast;
if((cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19747,cljs.core.cst$kw$type,cljs.core.cst$kw$call);
} else {
return G__19747;
}
}
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var vec__19749 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19749,(1),null);
var ast = (om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : om.next.impl.parser.expr__GT_ast.call(null,k));
var ref_QMARK_ = cljs.core.vector_QMARK_(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.array_seq([cljs.core.cst$kw$query,v], 0));
});
om.next.impl.parser.ref__GT_ast = (function om$next$impl$parser$ref__GT_ast(p__19750){
var vec__19752 = p__19750;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19752,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19752,(1),null);
var ref = vec__19752;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return om.next.impl.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return om.next.impl.parser.ref__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return om.next.impl.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__19754 = expr;
if((expr instanceof cljs.core.Keyword)){
return cljs.core._conj(cljs.core.List.EMPTY,G__19754);
} else {
return G__19754;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_SLASH_root,true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(p__19755){
var map__19760 = p__19755;
var map__19760__$1 = ((((!((map__19760 == null)))?((((map__19760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19760):map__19760);
var ast = map__19760__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19760__$1,cljs.core.cst$kw$key);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19760__$1,cljs.core.cst$kw$query);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19760__$1,cljs.core.cst$kw$params);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19760__$1,cljs.core.cst$kw$query_SLASH_root);
return om.next.impl.parser.wrap_expr(root,((!((params == null)))?((!(cljs.core.empty_QMARK_(params)))?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),om$next$impl$parser$ast__GT_expr(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$params))):cljs.core._conj(cljs.core.List.EMPTY,om$next$impl$parser$ast__GT_expr(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$params)))):((!((query == null)))?cljs.core.PersistentArrayMap.fromArray([key,query], true, false):key)));
});
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(x,path){
var x_SINGLEQUOTE_ = (function (){var G__19773 = x;
var G__19773__$1 = ((cljs.core.map_QMARK_(x))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__19773){
return (function (p__19774){
var vec__19775 = p__19774;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19775,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19775,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om$next$impl$parser$path_meta(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k))], null);
});})(G__19773))
),G__19773):G__19773);
if(cljs.core.vector_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (G__19773,G__19773__$1){
return (function (p1__19763_SHARP_,p2__19762_SHARP_){
return om$next$impl$parser$path_meta(p2__19762_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__19763_SHARP_));
});})(G__19773,G__19773__$1))
),G__19773__$1);
} else {
return G__19773__$1;
}
})();
var G__19776 = x_SINGLEQUOTE_;
if(((!((x_SINGLEQUOTE_ == null)))?((((x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$ & (262144))) || (x_SINGLEQUOTE_.cljs$core$IWithMeta$))?true:(((!x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__19776,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
return G__19776;
}
});
om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$om$next_SLASH_abort,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__19778){
var map__19845 = p__19778;
var map__19845__$1 = ((((!((map__19845 == null)))?((((map__19845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19845):map__19845);
var config = map__19845__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19845__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19845__$1,cljs.core.cst$kw$mutate);
return ((function (map__19845,map__19845__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = cljs.core.boolean$(cljs.core.cst$kw$elide_DASH_paths.cljs$core$IFn$_invoke$arity$1(config));
var map__19879 = (function (){var G__19880 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$parser,om$next$impl$parser$parser_$_self,cljs.core.array_seq([cljs.core.cst$kw$target,target,cljs.core.cst$kw$query_SLASH_root,cljs.core.cst$kw$om$next_SLASH_root], 0));
if(!(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$path))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19880,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY);
} else {
return G__19880;
}
})();
var map__19879__$1 = ((((!((map__19879 == null)))?((((map__19879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19879):map__19879);
var env__$1 = map__19879__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19879__$1,cljs.core.cst$kw$path);
var step = ((function (elide_paths_QMARK_,map__19879,map__19879__$1,env__$1,path,map__19845,map__19845__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__19903 = om.next.impl.parser.expr__GT_ast(expr);
var map__19903__$1 = ((((!((map__19903 == null)))?((((map__19903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19903):map__19903);
var ast = map__19903__$1;
var query_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903__$1,cljs.core.cst$kw$query);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903__$1,cljs.core.cst$kw$key);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903__$1,cljs.core.cst$kw$dispatch_DASH_key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19903__$1,cljs.core.cst$kw$params);
var env__$2 = (function (){var env__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$ast,ast);
var env__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$2,cljs.core.cst$kw$query,query):(function (){var G__19905 = env__$2;
if(!((query_SINGLEQUOTE_ == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19905,cljs.core.cst$kw$query,query_SINGLEQUOTE_);
} else {
return G__19905;
}
})());
if(cljs.core.vector_QMARK_(key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$3,cljs.core.cst$kw$query_SLASH_root,key);
} else {
return env__$3;
}
})();
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
var res = (((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null))?(function (){var G__19906 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19906) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$mutate], 0)))].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : mutate.call(null,env__$2,dispatch_key,params));

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$read], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})():null);
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target);
var G__19907 = ret;
var G__19907__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19907,expr):G__19907);
var G__19907__$2 = ((cljs.core.map_QMARK_(ast_SINGLEQUOTE_))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19907__$1,om.next.impl.parser.ast__GT_expr(ast_SINGLEQUOTE_)):G__19907__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19907__$2,om.next.impl.parser.ast__GT_expr(ast));
} else {
return G__19907__$2;
}
} else {
if(!((call_QMARK_) || ((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,cljs.core.cst$kw$value)))){
return ret;
} else {
var error = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if((call_QMARK_) && (!((cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res).call(null);
}catch (e19908){var e_19912 = e19908;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_(e_19912))){
throw e_19912;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(error,e_19912) : cljs.core.reset_BANG_.call(null,error,e_19912));
}
}} else {
}

var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var G__19909 = ret;
var G__19909__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19909,key,value):G__19909);
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19909__$1,key,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error)));
} else {
return G__19909__$1;
}
}
}
});})(elide_paths_QMARK_,map__19879,map__19879__$1,env__$1,path,map__19845,map__19845__$1,config,read,mutate))
;
var G__19910 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
if(!((!((target == null))) || (elide_paths_QMARK_))){
return om.next.impl.parser.path_meta(G__19910,path);
} else {
return G__19910;
}
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__19845,map__19845__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});
