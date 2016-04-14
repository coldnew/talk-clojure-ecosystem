// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = (function (){var G__20210 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20210) : cljs.core.atom.call(null,G__20210));
})();
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
om.next.node__GT_key = (function om$next$node__GT_key(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.ffirst(node);
} else {
if(cljs.core.seq_QMARK_(node)){
var node_SINGLEQUOTE_ = cljs.core.first(node);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
return cljs.core.ffirst(node_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;

}
}
});
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper((function (p1__20211_SHARP_){
return (cljs.core.vector_QMARK_(p1__20211_SHARP_)) || (cljs.core.map_QMARK_(p1__20211_SHARP_)) || (cljs.core.seq_QMARK_(p1__20211_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__20212 = clojure.zip.right(loc__$1);
loc__$1 = G__20212;
continue;
}
break;
}
});
om.next.union_QMARK_ = (function om$next$union_QMARK_(node){
return (cljs.core.map_QMARK_(node)) && (((1) < cljs.core.count(node)));
});
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__20221 = clojure.zip.down(loc);
var G__20222 = path__$1;
loc = G__20221;
path__$1 = G__20222;
continue;
} else {
var vec__20220 = path__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20220,(0),null);
var ks = cljs.core.nthnext(vec__20220,(1));
if(om.next.union_QMARK_(node)){
var node__$1 = clojure.zip.node(om.next.move_to_key(loc,k));
var G__20223 = clojure.zip.replace(loc,node__$1);
var G__20224 = ks;
loc = G__20223;
path__$1 = G__20224;
continue;
} else {
var k_SINGLEQUOTE_ = om.next.node__GT_key(node);
if(cljs.core.keyword_identical_QMARK_(k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_(node)){
var G__20225 = om.next.move_to_key(loc,k);
var G__20226 = ks;
loc = G__20225;
path__$1 = G__20226;
continue;
} else {
var G__20227 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__20228 = ks;
loc = G__20227;
path__$1 = G__20228;
continue;
}
} else {
var G__20229 = clojure.zip.right(loc);
var G__20230 = path__$1;
loc = G__20229;
path__$1 = G__20230;
continue;
}
}
}
}
break;
}
});
return query_template_STAR_(om.next.query_zip(query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
om.next.join_key = (function om$next$join_key(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.ffirst(node);
} else {
if(cljs.core.seq_QMARK_(node)){
return om$next$join_key(cljs.core.first(node));
} else {
return node;

}
}
});
om.next.join_entry = (function om$next$join_entry(node){
if(cljs.core.seq_QMARK_(node)){
return cljs.core.ffirst(node);
} else {
return cljs.core.first(node);
}
});
om.next.join_value = (function om$next$join_value(join){
return cljs.core.second(om.next.join_entry(join));
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.first(x):x);
return cljs.core.map_QMARK_(x__$1);
});
om.next.focused_join = (function om$next$focused_join(node,ks){
if(cljs.core.map_QMARK_(node)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst(node),(function (){var G__20236 = cljs.core.second(cljs.core.first(node));
var G__20237 = ks;
return (om.next.focus_query.cljs$core$IFn$_invoke$arity$2 ? om.next.focus_query.cljs$core$IFn$_invoke$arity$2(G__20236,G__20237) : om.next.focus_query.call(null,G__20236,G__20237));
})()], true, false);
} else {
if(cljs.core.seq_QMARK_(node)){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.second(node)),om$next$focused_join(cljs.core.first(node),ks));
} else {
return node;

}
}
});
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__20241 = path;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20241,(0),null);
var ks = cljs.core.nthnext(vec__20241,(1));
var match = ((function (vec__20241,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,om.next.join_key(x));
});})(vec__20241,k,ks))
;
var value = ((function (vec__20241,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join(x,ks);
});})(vec__20241,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k),ks),cljs.core.cst$kw$om$next_SLASH_union,true], true, false);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args20242 = [];
var len__7542__auto___20246 = arguments.length;
var i__7543__auto___20247 = (0);
while(true){
if((i__7543__auto___20247 < len__7542__auto___20246)){
args20242.push((arguments[i__7543__auto___20247]));

var G__20248 = (i__7543__auto___20247 + (1));
i__7543__auto___20247 = G__20248;
continue;
} else {
}
break;
}

var G__20244 = args20242.length;
switch (G__20244) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20242.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,cljs.core.cst$sym$_STAR_,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__6472__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bound,cljs.core.cst$sym$_STAR_)) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,bound)) && ((cljs.core.count(path) < cljs.core.count(bound))));
if(and__6472__auto__){
var and__6472__auto____$1 = cljs.core.some(om.next.join_QMARK_,focus);
if(cljs.core.truth_(and__6472__auto____$1)){
return ((1) === cljs.core.count(focus));
} else {
return and__6472__auto____$1;
}
} else {
return and__6472__auto__;
}
})())){
var vec__20245 = om.next.join_entry(cljs.core.first(focus));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20245,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20245,(1),null);
var focus_SINGLEQUOTE___$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__20250 = focus_SINGLEQUOTE___$1;
var G__20251 = bound;
var G__20252 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
focus = G__20250;
bound = G__20251;
path = G__20252;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ref for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__7139__auto__ = (((this$ == null))?null:this$);
var m__7140__auto__ = (om.next.ident[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__7140__auto__.call(null,this$,props));
} else {
var m__7140__auto____$1 = (om.next.ident["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__7140__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});

/**
 * Returns true if x satisfies? Ident
 */
om.next.ident_QMARK_ = (function om$next$ident_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$Ident$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
}
});

/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__7139__auto__ = (((this$ == null))?null:this$);
var m__7140__auto__ = (om.next.params[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto__.call(null,this$));
} else {
var m__7140__auto____$1 = (om.next.params["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__7139__auto__ = (((this$ == null))?null:this$);
var m__7140__auto__ = (om.next.query[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto__.call(null,this$));
} else {
var m__7140__auto____$1 = (om.next.query["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__7139__auto__ = (((this$ == null))?null:this$);
var m__7140__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__7140__auto__.call(null,this$,new_state));
} else {
var m__7140__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__7140__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__7139__auto__ = (((this$ == null))?null:this$);
var m__7140__auto__ = (om.next._get_state[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto__.call(null,this$));
} else {
var m__7140__auto____$1 = (om.next._get_state["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__7139__auto__ = (((this$ == null))?null:this$);
var m__7140__auto__ = (om.next._get_rendered_state[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto__.call(null,this$));
} else {
var m__7140__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__7139__auto__ = (((this$ == null))?null:this$);
var m__7140__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto__.call(null,this$));
} else {
var m__7140__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__6472__auto__ = (x instanceof cljs.core.Symbol);
if(and__6472__auto__){
var G__20261 = cljs.core.name(x);
var G__20262 = "?";
return goog.string.startsWith(G__20261,G__20262);
} else {
return and__6472__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x).substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(node){
if(cljs.core.truth_(om.next.var_QMARK_(node))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,om.next.var__GT_keyword(node),node);
} else {
return node;
}
});
return clojure.walk.prewalk(replace_var,query);
});


om.next.get_local_query_data = (function om$next$get_local_query_data(component){
var G__20264 = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(component) : om.next.get_reconciler.call(null,component));
var G__20264__$1 = (((G__20264 == null))?null:cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__20264));
var G__20264__$2 = (((G__20264__$1 == null))?null:cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__20264__$1));
var G__20264__$3 = (((G__20264__$2 == null))?null:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20264__$2) : cljs.core.deref.call(null,G__20264__$2)));
var G__20264__$4 = (((G__20264__$3 == null))?null:cljs.core.cst$kw$om$next_SLASH_queries.cljs$core$IFn$_invoke$arity$1(G__20264__$3));
if((G__20264__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__20264__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data(component),om.next.query(component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data(component),om.next.params(component));
});
om.next.get_component_query = (function om$next$get_component_query(c){
var qps = om.next.get_local_query_data(c);
var q = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(qps,om.next.query(c));
var c_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(c),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c_SINGLEQUOTE_)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(qps,om.next.params(c))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,cljs.core.type(c)], null));
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,x))){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
return om.next.get_component_query(x);
} else {
var q = om.next.query(x);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x], null));
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = (function (){var G__20269 = x.prototype;
return Object.create(G__20269);
})();
if(((!((x__$1 == null)))?(((false) || (x__$1.om$next$IQuery$))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,x__$1):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,x__$1))){
var q = om.next.query(x__$1);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x__$1),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x__$1)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x__$1], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.next.IQuery,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.next.IQuery,x);
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$component,class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$basis_DASH_t], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props(null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4655__auto__ = cljs.core.cst$kw$react_DASH_key.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4655__auto__)){
var rk = temp__4655__auto__;
return rk;
} else {
var temp__4655__auto____$1 = cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args20273 = [];
var len__7542__auto___20283 = arguments.length;
var i__7543__auto___20284 = (0);
while(true){
if((i__7543__auto___20284 < len__7542__auto___20283)){
args20273.push((arguments[i__7543__auto___20284]));

var G__20285 = (i__7543__auto___20284 + (1));
i__7543__auto___20284 = G__20285;
continue;
} else {
}
break;
}

var G__20275 = args20273.length;
switch (G__20275) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20273.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__20276){
var map__20277 = p__20276;
var map__20277__$1 = ((((!((map__20277 == null)))?((((map__20277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20277):map__20277);
var opts = map__20277__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20277__$1,cljs.core.cst$kw$keyfn);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$class)], 0)))].join('')));
}

return ((function (map__20277,map__20277__$1,opts,validator,keyfn){
return (function() { 
var G__20287__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$validator,cljs.core.cst$sym$props)], 0)))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.next._STAR_instrument_STAR_,props,children);
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):om.next.compute_react_key(class$,props));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__20279 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__20279)].join('');
} else {
return G__20279;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(om.next._STAR_reconciler_STAR_):(0));
var G__20280 = class$;
var G__20281 = {"omcljs$value": om.next.om_props(props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_};
var G__20282 = om.util.force_children(children);
return React.createElement(G__20280,G__20281,G__20282);
}
};
var G__20287 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__20288__i = 0, G__20288__a = new Array(arguments.length -  1);
while (G__20288__i < G__20288__a.length) {G__20288__a[G__20288__i] = arguments[G__20288__i + 1]; ++G__20288__i;}
  children = new cljs.core.IndexedSeq(G__20288__a,0);
} 
return G__20287__delegate.call(this,props,children);};
G__20287.cljs$lang$maxFixedArity = 1;
G__20287.cljs$lang$applyTo = (function (arglist__20289){
var props = cljs.core.first(arglist__20289);
var children = cljs.core.rest(arglist__20289);
return G__20287__delegate(props,children);
});
G__20287.cljs$core$IFn$_invoke$arity$variadic = G__20287__delegate;
return G__20287;
})()
;
;})(map__20277,map__20277__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
var G__20292 = c.props;
var G__20293 = k;
return goog.object.get(G__20292,G__20293);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_(x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_(x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_(x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
var G__20297 = c.props;
var G__20298 = k;
var G__20299 = v;
return goog.object.set(G__20297,G__20298,G__20299);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return om.next.get_prop(c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args20300 = [];
var len__7542__auto___20303 = arguments.length;
var i__7543__auto___20304 = (0);
while(true){
if((i__7543__auto___20304 < len__7542__auto___20303)){
args20300.push((arguments[i__7543__auto___20304]));

var G__20305 = (i__7543__auto___20304 + (1));
i__7543__auto___20304 = G__20305;
continue;
} else {
}
break;
}

var G__20302 = args20300.length;
switch (G__20302) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20300.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args20307 = [];
var len__7542__auto___20310 = arguments.length;
var i__7543__auto___20311 = (0);
while(true){
if((i__7543__auto___20311 < len__7542__auto___20310)){
args20307.push((arguments[i__7543__auto___20311]));

var G__20312 = (i__7543__auto___20311 + (1));
i__7543__auto___20311 = G__20312;
continue;
} else {
}
break;
}

var G__20309 = args20307.length;
switch (G__20309) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20307.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap(om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(prev_props),om.next.get_prev_props(cst)),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3(om.next.get_props(next_props),om.next.get_props(component.props),om.next.get_next_props(component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
var G__20316 = c.state;
var G__20317 = "omcljs$prev$value";
return goog.object.remove(G__20316,G__20317);
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(c.props),om.next.get_props(c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop(component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
return om.next.get_prop(component,"omcljs$depth");
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__6484__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop(c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args20318 = [];
var len__7542__auto___20325 = arguments.length;
var i__7543__auto___20326 = (0);
while(true){
if((i__7543__auto___20326 < len__7542__auto___20325)){
args20318.push((arguments[i__7543__auto___20326]));

var G__20327 = (i__7543__auto___20326 + (1));
i__7543__auto___20326 = G__20327;
continue;
} else {
}
break;
}

var G__20320 = args20318.length;
switch (G__20320) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20318.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

var shared = (function (){var G__20321 = component.props;
var G__20322 = "omcljs$shared";
return goog.object.get(G__20321,G__20322);
})();
var ks = (function (){var G__20323 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__20323],null));
} else {
return G__20323;
}
})();
var G__20324 = shared;
if(!(cljs.core.empty_QMARK_(ks))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__20324,ks);
} else {
return G__20324;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.get_prop(component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var G__20333 = c.state;
var G__20334_20337 = G__20333;
var G__20335_20338 = "omcljs$next$value";
var G__20336_20339 = om.next.om_props(next_props,om.next.protocols.basis_t(om.next.get_reconciler(c)));
goog.object.set(G__20334_20337,G__20335_20338,G__20336_20339);

return G__20333;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(component.props),om.next.get_props(component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__20342 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__20342,cljs.core.assoc,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__20342;
}
} else {
var G__20343 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20343,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__20343;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args20344 = [];
var len__7542__auto___20349 = arguments.length;
var i__7543__auto___20350 = (0);
while(true){
if((i__7543__auto___20350 < len__7542__auto___20349)){
args20344.push((arguments[i__7543__auto___20350]));

var G__20351 = (i__7543__auto___20350 + (1));
i__7543__auto___20350 = G__20351;
continue;
} else {
}
break;
}

var G__20346 = args20344.length;
switch (G__20346) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20344.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__20347 = x;
if(om.next.component_QMARK_(x)){
return om.next.props(G__20347);
} else {
return G__20347;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_computed], null),(function (){var G__20348 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__20348],null));
} else {
return G__20348;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component))){
om.next._set_state_BANG_(component,new_state);
} else {
var G__20358_20361 = component.state;
var G__20359_20362 = "omcljs$pendingState";
var G__20360_20363 = new_state;
goog.object.set(G__20358_20361,G__20359_20362,G__20360_20363);
}

var temp__4655__auto__ = om.next.get_reconciler(component);
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return (om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_render_BANG_.call(null,r));
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args20364 = [];
var len__7542__auto___20368 = arguments.length;
var i__7543__auto___20369 = (0);
while(true){
if((i__7543__auto___20369 < len__7542__auto___20368)){
args20364.push((arguments[i__7543__auto___20369]));

var G__20370 = (i__7543__auto___20369 + (1));
i__7543__auto___20369 = G__20370;
continue;
} else {
}
break;
}

var G__20366 = args20364.length;
switch (G__20366) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20364.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component)))?om.next._get_state(component):(function (){var temp__4657__auto__ = component.state;
if(cljs.core.truth_(temp__4657__auto__)){
var state = temp__4657__auto__;
var or__6484__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s update-in.
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args20372 = [];
var len__7542__auto___20397 = arguments.length;
var i__7543__auto___20398 = (0);
while(true){
if((i__7543__auto___20398 < len__7542__auto___20397)){
args20372.push((arguments[i__7543__auto___20398]));

var G__20399 = (i__7543__auto___20398 + (1));
i__7543__auto___20398 = G__20399;
continue;
} else {
}
break;
}

var G__20381 = args20372.length;
switch (G__20381) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__7561__auto__ = (new cljs.core.IndexedSeq(args20372.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__7561__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_(component,(function (){var G__20382 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20382) : f.call(null,G__20382));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_(component,(function (){var G__20383 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20384 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20383,G__20384) : f.call(null,G__20383,G__20384));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_(component,(function (){var G__20385 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20386 = arg0;
var G__20387 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20385,G__20386,G__20387) : f.call(null,G__20385,G__20386,G__20387));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_(component,(function (){var G__20388 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20389 = arg0;
var G__20390 = arg1;
var G__20391 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__20388,G__20389,G__20390,G__20391) : f.call(null,G__20388,G__20389,G__20390,G__20391));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_(component,(function (){var G__20392 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20393 = arg0;
var G__20394 = arg1;
var G__20395 = arg2;
var G__20396 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__20392,G__20393,G__20394,G__20395,G__20396) : f.call(null,G__20392,G__20393,G__20394,G__20395,G__20396));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,om.next.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq20373){
var G__20374 = cljs.core.first(seq20373);
var seq20373__$1 = cljs.core.next(seq20373);
var G__20375 = cljs.core.first(seq20373__$1);
var seq20373__$2 = cljs.core.next(seq20373__$1);
var G__20376 = cljs.core.first(seq20373__$2);
var seq20373__$3 = cljs.core.next(seq20373__$2);
var G__20377 = cljs.core.first(seq20373__$3);
var seq20373__$4 = cljs.core.next(seq20373__$3);
var G__20378 = cljs.core.first(seq20373__$4);
var seq20373__$5 = cljs.core.next(seq20373__$4);
var G__20379 = cljs.core.first(seq20373__$5);
var seq20373__$6 = cljs.core.next(seq20373__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20374,G__20375,G__20376,G__20377,G__20378,G__20379,seq20373__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component))){
return om.next._get_rendered_state(component);
} else {
var G__20404 = component;
var G__20404__$1 = (((G__20404 == null))?null:G__20404.state);
if((G__20404__$1 == null)){
return null;
} else {
return goog.object.get(G__20404__$1,"omcljs$state");
}
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ILocalState,c):false)):cljs.core.native_satisfies_QMARK_(om.next.ILocalState,c))){
return om.next._merge_pending_state_BANG_(c);
} else {
var temp__4657__auto__ = (function (){var G__20408 = c;
var G__20408__$1 = (((G__20408 == null))?null:G__20408.state);
if((G__20408__$1 == null)){
return null;
} else {
return goog.object.get(G__20408__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pending = temp__4657__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args20409 = [];
var len__7542__auto___20412 = arguments.length;
var i__7543__auto___20413 = (0);
while(true){
if((i__7543__auto___20413 < len__7542__auto___20412)){
args20409.push((arguments[i__7543__auto___20413]));

var G__20414 = (i__7543__auto___20413 + (1));
i__7543__auto___20413 = G__20414;
continue;
} else {
}
break;
}

var G__20411 = args20409.length;
switch (G__20411) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20409.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;


om.next.gather_sends = (function om$next$gather_sends(p__20417,q,remotes){
var map__20422 = p__20417;
var map__20422__$1 = ((((!((map__20422 == null)))?((((map__20422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20422):map__20422);
var env = map__20422__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20422__$1,cljs.core.cst$kw$parser);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__20422,map__20422__$1,env,parser){
return (function (p1__20416_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20416_SHARP_,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__20416_SHARP_) : parser.call(null,env,q,p1__20416_SHARP_))],null));
});})(map__20422,map__20422__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__20422,map__20422__$1,env,parser){
return (function (p__20424){
var vec__20425 = p__20424;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20425,(1),null);
return (cljs.core.count(v) > (0));
});})(map__20422,map__20422__$1,env,parser))
)),remotes);
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(component,p__20426){
var map__20431 = p__20426;
var map__20431__$1 = ((((!((map__20431 == null)))?((((map__20431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20431):map__20431);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20431__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20431__$1,cljs.core.cst$kw$query);
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$params)),cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$query)))], 0)))].join('')));
}

var r = om.next.get_reconciler(component);
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var st = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st) : cljs.core.deref.call(null,st)));
var temp__4657__auto___20435 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto___20435)){
var l_20436 = temp__4657__auto___20435;
var G__20433_20437 = l_20436;
var G__20434_20438 = [cljs.core.str((function (){var temp__4657__auto____$1 = ((om.next.ident_QMARK_(component))?om.next.ident(component,om.next.props(component)):null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ref = temp__4657__auto____$1;
return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref], 0))),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
goog.log.info(G__20433_20437,G__20434_20438);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,component], null),cljs.core.merge,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null):null)], 0))], 0));

om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_(r);

var sends_20439 = om.next.gather_sends((om.next.to_env.cljs$core$IFn$_invoke$arity$1 ? om.next.to_env.cljs$core$IFn$_invoke$arity$1(cfg) : om.next.to_env.call(null,cfg)),(om.next.full_query.cljs$core$IFn$_invoke$arity$1 ? om.next.full_query.cljs$core$IFn$_invoke$arity$1(component) : om.next.full_query.call(null,component)),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_(sends_20439)){
} else {
om.next.protocols.queue_sends_BANG_(r,sends_20439);

(om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_sends_BANG_.call(null,r));
}

return null;
});
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_(x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__20441 = component.refs;
if((G__20441 == null)){
return null;
} else {
return goog.object.get(G__20441,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

om.next.update_props_BANG_(c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args20442 = [];
var len__7542__auto___20445 = arguments.length;
var i__7543__auto___20446 = (0);
while(true){
if((i__7543__auto___20446 < len__7542__auto___20445)){
args20442.push((arguments[i__7543__auto___20446]));

var G__20447 = (i__7543__auto___20446 + (1));
i__7543__auto___20446 = G__20447;
continue;
} else {
}
break;
}

var G__20444 = args20442.length;
switch (G__20444) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20442.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var c__$1 = c;
var ret = cljs.core._conj(cljs.core.List.EMPTY,cljs.core.type(c__$1));
while(true){
var temp__4655__auto__ = om.next.parent(c__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(cljs.core.truth_(om.next.iquery_QMARK_(p))){
var G__20451 = p;
var G__20452 = cljs.core.cons(cljs.core.type(p),ret);
c__$1 = G__20451;
ret = G__20452;
continue;
} else {
var G__20453 = p;
var G__20454 = ret;
c__$1 = G__20453;
ret = G__20454;
continue;
}
} else {
var seen = (function (){var G__20450 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20450) : cljs.core.atom.call(null,G__20450));
})();
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (c__$1,ret,seen,temp__4655__auto__){
return (function (x){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen) : cljs.core.deref.call(null,seen)),x)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4655__auto__))
,ret);
}
break;
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$subquery_DASH_ref),cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$subquery_DASH_ref))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$subquery_DASH_class)], 0)))].join('')));
}

var ref = (function (){var G__20456 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__20456)].join('');
} else {
return G__20456;
}
})();
if((om.next.component_QMARK_(x)) && (om.next.mounted_QMARK_(x))){
return om.next.get_query(om.next.react_ref(x,ref));
} else {
return om.next.get_query(subquery_class);
}
});
/**
 * Given a component return its ident
 */
om.next.get_ident = (function om$next$get_ident(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.ident(component,om.next.props(component));
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t(reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_(reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_(reconciler);
});
if(cljs.core.fn_QMARK_(om.next._STAR_raf_STAR_)){
return (om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : om.next._STAR_raf_STAR_.call(null,f));
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_(reconciler))){
var G__20459 = (function (){
return om.next.protocols.send_BANG_(reconciler);
});
var G__20460 = (300);
return setTimeout(G__20459,G__20460);
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args20461 = [];
var len__7542__auto___20464 = arguments.length;
var i__7543__auto___20465 = (0);
while(true){
if((i__7543__auto___20465 < len__7542__auto___20464)){
args20461.push((arguments[i__7543__auto___20465]));

var G__20466 = (i__7543__auto___20465 + (1));
i__7543__auto___20465 = G__20466;
continue;
} else {
}
break;
}

var G__20463 = args20461.length;
switch (G__20463) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20461.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$root_DASH_class)], 0)))].join('')));
}

var temp__4657__auto___20468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.next.roots) : cljs.core.deref.call(null,om.next.roots)),target);
if(cljs.core.truth_(temp__4657__auto___20468)){
var old_reconciler_20469 = temp__4657__auto___20468;
(om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_20469,target) : om.next.remove_root_BANG_.call(null,old_reconciler_20469,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_(reconciler,target);
});
/**
 * Create an Om Next root without an actual DOM target. Useful in devcards
 * testing context.
 */
om.next.mock_root = (function om$next$mock_root(reconciler,root_class){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$root_DASH_class)], 0)))].join('')));
}

return om.next.protocols.add_root_BANG_(reconciler,root_class,null,null);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__7139__auto__ = (((c == null))?null:c);
var m__7140__auto__ = (om.next.tx_intercept[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__7140__auto__.call(null,c,tx));
} else {
var m__7140__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2(c,tx) : m__7140__auto____$1.call(null,c,tx));
} else {
throw cljs.core.missing_protocol("ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,cljs.core.cst$kw$shared,cljs.core.cst$kw$parser,cljs.core.cst$kw$logger,cljs.core.cst$kw$pathopt], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__6472__auto__ = c;
if(cljs.core.truth_(and__6472__auto__)){
return (om.next.ident_QMARK_(c)) && (cljs.core.not(ref));
} else {
return and__6472__auto__;
}
})())?om.next.ident(c,om.next.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reconciler,r,cljs.core.cst$kw$component,c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref__$1], null):null)], 0));
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(function (){var G__20473 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20473) : cljs.core.deref.call(null,G__20473));
})());
var ___$1 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto__)){
var l = temp__4657__auto__;
var G__20474 = l;
var G__20475 = [cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref__$1], 0))),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
return goog.log.info(G__20474,G__20475);
} else {
return null;
}
})();
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends(env,tx,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
om.next.protocols.queue_BANG_(r,cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(ref__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1], null):cljs.core.PersistentVector.EMPTY),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(v))));

if(cljs.core.empty_QMARK_(snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_(r,snds);

return om.next.schedule_sends_BANG_(r);
}
});
om.next.transform_reads = (function om$next$transform_reads(r,tx){
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,tx__$1,c){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx__$1,(function (){var G__20492 = c;
var G__20493 = om.next.focus_query(om.next.get_query(c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
return (om.next.full_query.cljs$core$IFn$_invoke$arity$2 ? om.next.full_query.cljs$core$IFn$_invoke$arity$2(G__20492,G__20493) : om.next.full_query.call(null,G__20492,G__20493));
})());
});
var ks = cljs.core.seq(tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((ks == null))){
var k = cljs.core.first(ks);
if((k instanceof cljs.core.Keyword)){
var G__20494 = cljs.core.next(ks);
var G__20495 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,tx_SINGLEQUOTE_,k){
return (function (p1__20476_SHARP_,p2__20477_SHARP_){
return add_focused_query(k,p1__20476_SHARP_,p2__20477_SHARP_);
});})(ks,tx_SINGLEQUOTE_,k))
,tx_SINGLEQUOTE_,(om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2 ? om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2(r,k) : om.next.ref__GT_components.call(null,r,k)));
ks = G__20494;
tx_SINGLEQUOTE_ = G__20495;
continue;
} else {
var G__20496 = cljs.core.next(ks);
var G__20497 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx_SINGLEQUOTE_,k);
ks = G__20496;
tx_SINGLEQUOTE_ = G__20497;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering. If given a reconciler can be
 * optionally passed a ref as the second argument.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args20498 = [];
var len__7542__auto___20504 = arguments.length;
var i__7543__auto___20505 = (0);
while(true){
if((i__7543__auto___20505 < len__7542__auto___20504)){
args20498.push((arguments[i__7543__auto___20505]));

var G__20506 = (i__7543__auto___20505 + (1));
i__7543__auto___20505 = G__20506;
continue;
} else {
}
break;
}

var G__20500 = args20498.length;
switch (G__20500) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20498.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$tx)], 0)))].join('')));
}

if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))){
return om.next.transact_STAR_(x,null,null,tx);
} else {
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IQuery,cljs.core.cst$sym$x)], 0)))].join('')));
}

var p = om.next.parent(x);
var x__$1 = x;
var tx__$1 = tx;
while(true){
if((p == null)){
var r = om.next.get_reconciler(x__$1);
return om.next.transact_STAR_(r,x__$1,null,om.next.transform_reads(r,tx__$1));
} else {
var vec__20502 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ITxIntercept,p):false)):cljs.core.native_satisfies_QMARK_(om.next.ITxIntercept,p)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept(p,tx__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$1], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(0),null);
var tx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20502,(1),null);
var G__20508 = om.next.parent(p);
var G__20509 = x_SINGLEQUOTE_;
var G__20510 = tx__$2;
p = G__20508;
x__$1 = G__20509;
tx__$1 = G__20510;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_(r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__20511){
var map__20514 = p__20511;
var map__20514__$1 = ((((!((map__20514 == null)))?((((map__20514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20514):map__20514);
var opts = map__20514__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$mutate);
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$opts)], 0)))].join('')));
}

return om.next.impl.parser.parser(opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = (function (){var G__20522 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20522) : cljs.core.atom.call(null,G__20522));
})();
var class_path__GT_query = (function (){var G__20523 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20523) : cljs.core.atom.call(null,G__20523));
})();
var rootq = om.next.get_query(x);
var class$ = (function (){var G__20524 = x;
if(om.next.component_QMARK_(x)){
return cljs.core.type(G__20524);
} else {
return G__20524;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,query,path,classpath){
var recursive_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([class$__$1], true),classpath);
var classpath__$1 = (function (){var G__20602 = classpath;
if((!((class$__$1 == null))) && (cljs.core.not(recursive_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20602,class$__$1);
} else {
return G__20602;
}
})();
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([om.next.query_template(om.next.focus_query(rootq,path),path)], 0));
} else {
}

if(cljs.core.truth_(recursive_QMARK_)){
return null;
} else {
if(cljs.core.vector_QMARK_(query)){
var map__20603 = cljs.core.group_by(om.next.join_QMARK_,query);
var map__20603__$1 = ((((!((map__20603 == null)))?((((map__20603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20603):map__20603);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20603__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20603__$1,true);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (map__20603,map__20603__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__20516_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20516_SHARP_,cljs.core.zipmap(props,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([class$__$1], true)))], 0));
});})(map__20603,map__20603__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var seq__20605 = cljs.core.seq(joins);
var chunk__20606 = null;
var count__20607 = (0);
var i__20608 = (0);
while(true){
if((i__20608 < count__20607)){
var join = chunk__20606.cljs$core$IIndexed$_nth$arity$2(null,i__20608);
var vec__20609_20623 = om.next.join_entry(join);
var prop_20624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20609_20623,(0),null);
var query_SINGLEQUOTE__20625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20609_20623,(1),null);
var query_SINGLEQUOTE__20626__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query_SINGLEQUOTE__20625))?query:query_SINGLEQUOTE__20625);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__20605,chunk__20606,count__20607,i__20608,vec__20609_20623,prop_20624,query_SINGLEQUOTE__20625,query_SINGLEQUOTE__20626__$1,join,map__20603,map__20603__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__20517_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20517_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_20624,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__20605,chunk__20606,count__20607,i__20608,vec__20609_20623,prop_20624,query_SINGLEQUOTE__20625,query_SINGLEQUOTE__20626__$1,join,map__20603,map__20603__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__20627 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__20626__$1));
om$next$build_index_STAR_(class_SINGLEQUOTE__20627,query_SINGLEQUOTE__20626__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_20624),classpath__$1);

var G__20628 = seq__20605;
var G__20629 = chunk__20606;
var G__20630 = count__20607;
var G__20631 = (i__20608 + (1));
seq__20605 = G__20628;
chunk__20606 = G__20629;
count__20607 = G__20630;
i__20608 = G__20631;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20605);
if(temp__4657__auto__){
var seq__20605__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20605__$1)){
var c__7287__auto__ = cljs.core.chunk_first(seq__20605__$1);
var G__20632 = cljs.core.chunk_rest(seq__20605__$1);
var G__20633 = c__7287__auto__;
var G__20634 = cljs.core.count(c__7287__auto__);
var G__20635 = (0);
seq__20605 = G__20632;
chunk__20606 = G__20633;
count__20607 = G__20634;
i__20608 = G__20635;
continue;
} else {
var join = cljs.core.first(seq__20605__$1);
var vec__20610_20636 = om.next.join_entry(join);
var prop_20637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20610_20636,(0),null);
var query_SINGLEQUOTE__20638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20610_20636,(1),null);
var query_SINGLEQUOTE__20639__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query_SINGLEQUOTE__20638))?query:query_SINGLEQUOTE__20638);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__20605,chunk__20606,count__20607,i__20608,vec__20610_20636,prop_20637,query_SINGLEQUOTE__20638,query_SINGLEQUOTE__20639__$1,join,seq__20605__$1,temp__4657__auto__,map__20603,map__20603__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__20517_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20517_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_20637,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__20605,chunk__20606,count__20607,i__20608,vec__20610_20636,prop_20637,query_SINGLEQUOTE__20638,query_SINGLEQUOTE__20639__$1,join,seq__20605__$1,temp__4657__auto__,map__20603,map__20603__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__20640 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__20639__$1));
om$next$build_index_STAR_(class_SINGLEQUOTE__20640,query_SINGLEQUOTE__20639__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_20637),classpath__$1);

var G__20641 = cljs.core.next(seq__20605__$1);
var G__20642 = null;
var G__20643 = (0);
var G__20644 = (0);
seq__20605 = G__20641;
chunk__20606 = G__20642;
count__20607 = G__20643;
i__20608 = G__20644;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(query)){
var seq__20611 = cljs.core.seq(query);
var chunk__20612 = null;
var count__20613 = (0);
var i__20614 = (0);
while(true){
if((i__20614 < count__20613)){
var vec__20615 = chunk__20612.cljs$core$IIndexed$_nth$arity$2(null,i__20614);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20615,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20615,(1),null);
var class_SINGLEQUOTE__20645 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
om$next$build_index_STAR_(class_SINGLEQUOTE__20645,query_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop),classpath__$1);

var G__20646 = seq__20611;
var G__20647 = chunk__20612;
var G__20648 = count__20613;
var G__20649 = (i__20614 + (1));
seq__20611 = G__20646;
chunk__20612 = G__20647;
count__20613 = G__20648;
i__20614 = G__20649;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20611);
if(temp__4657__auto__){
var seq__20611__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20611__$1)){
var c__7287__auto__ = cljs.core.chunk_first(seq__20611__$1);
var G__20650 = cljs.core.chunk_rest(seq__20611__$1);
var G__20651 = c__7287__auto__;
var G__20652 = cljs.core.count(c__7287__auto__);
var G__20653 = (0);
seq__20611 = G__20650;
chunk__20612 = G__20651;
count__20613 = G__20652;
i__20614 = G__20653;
continue;
} else {
var vec__20616 = cljs.core.first(seq__20611__$1);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20616,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20616,(1),null);
var class_SINGLEQUOTE__20654 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
om$next$build_index_STAR_(class_SINGLEQUOTE__20654,query_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop),classpath__$1);

var G__20655 = cljs.core.next(seq__20611__$1);
var G__20656 = null;
var G__20657 = (0);
var G__20658 = (0);
seq__20611 = G__20655;
chunk__20612 = G__20656;
count__20613 = G__20657;
i__20614 = G__20658;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_(class$,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop_DASH__GT_classes,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prop__GT_classes) : cljs.core.deref.call(null,prop__GT_classes)),cljs.core.cst$kw$class_DASH_path_DASH__GT_query,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query))], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ref = ((om.next.ident_QMARK_(c))?om.next.ident(c,om.next.props(c)):null);
if(!((ref == null))){
var G__20617 = indexes__$2;
if(cljs.core.truth_(ref)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__20617,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ref], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__20617;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.type(c)], null),cljs.core.disj,c);
var ref = ((om.next.ident_QMARK_(c))?om.next.ident(c,om.next.props(c)):null);
if(!((ref == null))){
var G__20618 = indexes__$2;
if(cljs.core.truth_(ref)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__20618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ref], null),cljs.core.disj,c);
} else {
return G__20618;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
if(om.next.component_QMARK_(k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,k], null),cljs.core.cst$kw$om$next_SLASH_not_DASH_found);
if(!(cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$om$next_SLASH_not_DASH_found,cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prop_DASH__GT_classes,k], null));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (cs__$1,cs,indexes__$1,___$1){
return (function (p1__20518_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,p1__20518_SHARP_], null));
});})(cs__$1,cs,indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
throw (new Error([cljs.core.str("Invalid key "),cljs.core.str(k),cljs.core.str(", key must be ref or keyword")].join('')));
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7098__auto__,k__7099__auto__){
var self__ = this;
var this__7098__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7098__auto____$1,k__7099__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7100__auto__,k20520,else__7101__auto__){
var self__ = this;
var this__7100__auto____$1 = this;
var G__20619 = (((k20520 instanceof cljs.core.Keyword))?k20520.fqn:null);
switch (G__20619) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20520,else__7101__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7112__auto__,writer__7113__auto__,opts__7114__auto__){
var self__ = this;
var this__7112__auto____$1 = this;
var pr_pair__7115__auto__ = ((function (this__7112__auto____$1){
return (function (keyval__7116__auto__){
return cljs.core.pr_sequential_writer(writer__7113__auto__,cljs.core.pr_writer,""," ","",opts__7114__auto__,keyval__7116__auto__);
});})(this__7112__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7113__auto__,pr_pair__7115__auto__,"#om.next.Indexer{",", ","}",opts__7114__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20519){
var self__ = this;
var G__20519__$1 = this;
return (new cljs.core.RecordIter((0),G__20519__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7096__auto__){
var self__ = this;
var this__7096__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7092__auto__){
var self__ = this;
var this__7092__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7102__auto__){
var self__ = this;
var this__7102__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7093__auto__){
var self__ = this;
var this__7093__auto____$1 = this;
var h__6919__auto__ = self__.__hash;
if(!((h__6919__auto__ == null))){
return h__6919__auto__;
} else {
var h__6919__auto____$1 = cljs.core.hash_imap(this__7093__auto____$1);
self__.__hash = h__6919__auto____$1;

return h__6919__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7094__auto__,other__7095__auto__){
var self__ = this;
var this__7094__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6472__auto__ = other__7095__auto__;
if(cljs.core.truth_(and__6472__auto__)){
var and__6472__auto____$1 = (this__7094__auto____$1.constructor === other__7095__auto__.constructor);
if(and__6472__auto____$1){
return cljs.core.equiv_map(this__7094__auto____$1,other__7095__auto__);
} else {
return and__6472__auto____$1;
}
} else {
return and__6472__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7107__auto__,k__7108__auto__){
var self__ = this;
var this__7107__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indexes,null], null), null),k__7108__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7107__auto____$1),self__.__meta),k__7108__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7108__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7105__auto__,k__7106__auto__,G__20519){
var self__ = this;
var this__7105__auto____$1 = this;
var pred__20620 = cljs.core.keyword_identical_QMARK_;
var expr__20621 = k__7106__auto__;
if(cljs.core.truth_((pred__20620.cljs$core$IFn$_invoke$arity$2 ? pred__20620.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes,expr__20621) : pred__20620.call(null,cljs.core.cst$kw$indexes,expr__20621)))){
return (new om.next.Indexer(G__20519,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7106__auto__,G__20519),null));
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7110__auto__){
var self__ = this;
var this__7110__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7097__auto__,G__20519){
var self__ = this;
var this__7097__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,G__20519,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7103__auto__,entry__7104__auto__){
var self__ = this;
var this__7103__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7104__auto__)){
return cljs.core._assoc(this__7103__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7104__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7104__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7103__auto____$1,entry__7104__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$indexes], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__7132__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__7132__auto__,writer__7133__auto__){
return cljs.core._write(writer__7133__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes){
return (new om.next.Indexer(indexes,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__20521){
return (new om.next.Indexer(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(G__20521),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20521,cljs.core.cst$kw$indexes),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(){
return (new om.next.Indexer((function (){var G__20661 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20661) : cljs.core.atom.call(null,G__20661));
})(),null,null,null));
});
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return om.next.protocols.key__GT_components(indexer,ref);
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(om.next.protocols.key__GT_components(indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,class$], null)));
});
om.next.class_path__GT_query = (function om$next$class_path__GT_query(x,y){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
var cp = ((om.next.component_QMARK_(y))?om.next.class_path(y):y);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.zip.root),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args20663 = [];
var len__7542__auto___20670 = arguments.length;
var i__7543__auto___20671 = (0);
while(true){
if((i__7543__auto___20671 < len__7542__auto___20670)){
args20663.push((arguments[i__7543__auto___20671]));

var G__20672 = (i__7543__auto___20671 + (1));
i__7543__auto___20671 = G__20672;
continue;
} else {
}
break;
}

var G__20665 = args20663.length;
switch (G__20665) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20663.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,component))){
if((om.next.path(component) == null)){
return om.next.replace(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20667 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20667) : cljs.core.deref.call(null,G__20667));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,om.next.class_path(component)], null))),om.next.get_query(component));
} else {
return om.next.full_query.cljs$core$IFn$_invoke$arity$2(component,om.next.get_query(component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,component))){
var path_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(component));
var cp = om.next.class_path(component);
var qs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20669 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20669) : cljs.core.deref.call(null,G__20669));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null));
if(!(cljs.core.empty_QMARK_(qs))){
var q = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__20662_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__20662_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace(q,query);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if((class$ == null)){
return null;
} else {
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:(((!class$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.Ident,class$):false)):cljs.core.native_satisfies_QMARK_(om.next.Ident,class$)))){
var G__20677 = class$.prototype;
return Object.create(G__20677);
} else {
return class$;
}
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = om.next.to_class(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query)));
var ref = ((om.next.ident_QMARK_(class$))?om.next.ident(class$,data):null);
if(!((ref == null))){
return om$next$normalize_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ref)),data,refs);
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_(data)){
return data;
} else {
var q = cljs.core.seq(query);
var ret = data;
while(true){
if(!((q == null))){
var node = cljs.core.first(q);
if(cljs.core.truth_(om.next.join_QMARK_(node))){
var vec__20686 = om.next.join_entry(node);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20686,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20686,(1),null);
var sel__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,sel))?query:sel);
var class$ = om.next.to_class(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1)));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if(cljs.core.map_QMARK_(v)){
var x = om$next$normalize_STAR_(sel__$1,v,refs);
if(!(((class$ == null)) || (!(om.next.ident_QMARK_(class$))))){
var i = om.next.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.array_seq([x], 0));

var G__20689 = cljs.core.next(q);
var G__20690 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__20689;
ret = G__20690;
continue;
} else {
var G__20691 = cljs.core.next(q);
var G__20692 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__20691;
ret = G__20692;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__20686,k,sel,sel__$1,class$,v,node){
return (function (p1__20678_SHARP_){
return om$next$normalize_STAR_(sel__$1,p1__20678_SHARP_,refs);
});})(q,ret,vec__20686,k,sel,sel__$1,class$,v,node))
),v);
if(!(((class$ == null)) || (!(om.next.ident_QMARK_(class$))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__20686,k,sel,sel__$1,class$,v,node){
return (function (p1__20679_SHARP_){
return om.next.ident(class$,p1__20679_SHARP_);
});})(q,ret,xs,vec__20686,k,sel,sel__$1,class$,v,node))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst(is)], null),((function (q,ret,is,xs,vec__20686,k,sel,sel__$1,class$,v,node){
return (function (ys){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([ys,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,is),xs)], 0));
});})(q,ret,is,xs,vec__20686,k,sel,sel__$1,class$,v,node))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__20686,k,sel,sel__$1,class$,v,node){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__20686,k,sel,sel__$1,class$,v,node){
return (function (ret__$1,p__20687){
var vec__20688 = p__20687;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20688,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20688,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__20686,k,sel,sel__$1,class$,v,node))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__20686,k,sel,sel__$1,class$,v,node))
);
}

var G__20693 = cljs.core.next(q);
var G__20694 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__20693;
ret = G__20694;
continue;
} else {
var G__20695 = cljs.core.next(q);
var G__20696 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__20695;
ret = G__20696;
continue;
}
} else {
if((v == null)){
var G__20697 = cljs.core.next(q);
var G__20698 = ret;
q = G__20697;
ret = G__20698;
continue;
} else {
var G__20699 = cljs.core.next(q);
var G__20700 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__20699;
ret = G__20700;
continue;

}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(node))?cljs.core.first(node):node);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__20701 = cljs.core.next(q);
var G__20702 = ret;
q = G__20701;
ret = G__20702;
continue;
} else {
var G__20703 = cljs.core.next(q);
var G__20704 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__20703;
ret = G__20704;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-ref
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args20705 = [];
var len__7542__auto___20709 = arguments.length;
var i__7543__auto___20710 = (0);
while(true){
if((i__7543__auto___20710 < len__7542__auto___20709)){
args20705.push((arguments[i__7543__auto___20710]));

var G__20711 = (i__7543__auto___20710 + (1));
i__7543__auto___20710 = G__20711;
continue;
} else {
}
break;
}

var G__20707 = args20705.length;
switch (G__20707) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20705.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_refs){
var refs = (function (){var G__20708 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20708) : cljs.core.atom.call(null,G__20708));
})();
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:om.next.get_query(x));
var ret = om.next.normalize_STAR_(x__$1,data,refs);
if(merge_refs){
var refs_SINGLEQUOTE_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ret,refs_SINGLEQUOTE_], 0)),cljs.core.cst$kw$om$next_SLASH_tables,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta(ret,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs)));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;
om.next.sift_refs = (function om$next$sift_refs(res){
var map__20716 = cljs.core.group_by((function (p1__20713_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__20713_SHARP_));
}),res);
var map__20716__$1 = ((((!((map__20716 == null)))?((((map__20716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20716):map__20716);
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20716__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20716__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,refs),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
om.next.ref_QMARK_ = (function om$next$ref_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (((2) === cljs.core.count(x))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)) instanceof cljs.core.Keyword));
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args20719 = [];
var len__7542__auto___20726 = arguments.length;
var i__7543__auto___20727 = (0);
while(true){
if((i__7543__auto___20727 < len__7542__auto___20726)){
args20719.push((arguments[i__7543__auto___20727]));

var G__20728 = (i__7543__auto___20727 + (1));
i__7543__auto___20727 = G__20728;
continue;
} else {
}
break;
}

var G__20721 = args20719.length;
switch (G__20721) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20719.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(query,data,refs,cljs.core.identity);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$refs)], 0)))].join('')));
}

var data__$1 = (function (){var G__20722 = data;
if(om.next.ref_QMARK_(data)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(G__20722) : map_ident.call(null,G__20722)));
} else {
return G__20722;
}
})();
if(cljs.core.vector_QMARK_(data__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (data__$1){
return (function (p1__20718_SHARP_){
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(query,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(p1__20718_SHARP_) : map_ident.call(null,p1__20718_SHARP_))),refs,map_ident);
});})(data__$1))
),data__$1);
} else {
var map__20723 = cljs.core.group_by(om.next.join_QMARK_,query);
var map__20723__$1 = ((((!((map__20723 == null)))?((((map__20723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20723):map__20723);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20723__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20723__$1,true);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var vec__20725 = om.next.join_entry(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20725,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20725,(1),null);
var sel__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,sel))?query:sel);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key);
if(!(om.next.ref_QMARK_(v))){
var G__20730 = cljs.core.next(joins__$1);
var G__20731 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(sel__$1,v,refs,map_ident));
joins__$1 = G__20730;
ret = G__20731;
continue;
} else {
var G__20732 = cljs.core.next(joins__$1);
var G__20733 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(sel__$1,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v) : map_ident.call(null,v))),refs,map_ident));
joins__$1 = G__20732;
ret = G__20733;
continue;
}
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(data__$1,props),ret], 0));
}
break;
}
}
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;
om.next.rewrite = (function om$next$rewrite(paths){
return (function (res){
var step = (function om$next$rewrite_$_step(res__$1,p__20743){
var vec__20745 = p__20743;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20745,(0),null);
var orig_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20745,(1),null);
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res__$1,k),orig_path,cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,k));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,res,paths);
});
});
/**
 * A send helper for rewriting the query to remove client local keys that
 * don't need server side processing. Give a query this function will
 * return a map with two keys, :query and :rewrite. :query is the
 * actual query you should send. Upon receiving the response you should invoke
 * :rewrite on the response before invoking the send callback.
 */
om.next.process_roots = (function om$next$process_roots(query){
var process_roots_STAR_ = (function om$next$process_roots_$_process_roots_STAR_(query__$1,ret,path){
var ks = cljs.core.seq(query__$1);
while(true){
if(!((ks == null))){
var k = cljs.core.first(ks);
if(cljs.core.cst$kw$query_SLASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(k)) === true){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ret,((function (ks,k){
return (function (p1__20746_SHARP_){
var jk = om.next.join_key(k);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__20746_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query], null),cljs.core.conj,k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paths,jk], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,jk));
});})(ks,k))
);
} else {
if(cljs.core.truth_(om.next.join_QMARK_(k))){
var vec__20767_20769 = om.next.join_entry(k);
var jk_20770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767_20769,(0),null);
var jv_20771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20767_20769,(1),null);
om$next$process_roots_$_process_roots_STAR_(jv_20771,ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,jk_20770));
} else {
}

var G__20772 = cljs.core.next(ks);
ks = G__20772;
continue;
}
} else {
return null;
}
break;
}
});
var ret = (function (){var G__20768 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$paths,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20768) : cljs.core.atom.call(null,G__20768));
})();
process_roots_STAR_(query,ret,cljs.core.PersistentVector.EMPTY);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)),cljs.core.cst$kw$rewrite,om.next.rewrite(cljs.core.cst$kw$paths.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)))));
});
om.next.merge_refs = (function om$next$merge_refs(tree,config,refs){
var map__20781 = config;
var map__20781__$1 = ((((!((map__20781 == null)))?((((map__20781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20781):map__20781);
var merge_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,cljs.core.cst$kw$merge_DASH_ref);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20781__$1,cljs.core.cst$kw$indexer);
var step = ((function (map__20781,map__20781__$1,merge_ref,indexer){
return (function om$next$merge_refs_$_step(tree_SINGLEQUOTE_,p__20786){
var vec__20788 = p__20786;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20788,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20788,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))){
var c = om.next.ref__GT_any(indexer,ref);
var props_SINGLEQUOTE_ = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(c,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,(merge_ref.cljs$core$IFn$_invoke$arity$4 ? merge_ref.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_) : merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_)),refs__$1);
} else {
return (merge_ref.cljs$core$IFn$_invoke$arity$4 ? merge_ref.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ref,props) : merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props));
}
});})(map__20781,map__20781__$1,merge_ref,indexer))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__20792 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20792) : cljs.core.deref.call(null,G__20792));
})());
var vec__20791 = om.next.sift_refs(res);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20791,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20791,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(root,res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_refs(state,config,refs),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),cljs.core.cst$kw$next,om.next.merge_novelty_BANG_(reconciler,state,res),cljs.core.cst$kw$tempids,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(reconciler,delta){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(config);
var merge = cljs.core.cst$kw$merge.cljs$core$IFn$_invoke$arity$1(config);
var map__20812 = (function (){var G__20813 = reconciler;
var G__20814 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var G__20815 = delta;
return (merge.cljs$core$IFn$_invoke$arity$3 ? merge.cljs$core$IFn$_invoke$arity$3(G__20813,G__20814,G__20815) : merge.call(null,G__20813,G__20814,G__20815));
})();
var map__20812__$1 = ((((!((map__20812 == null)))?((((map__20812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20812):map__20812);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812__$1,cljs.core.cst$kw$keys);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812__$1,cljs.core.cst$kw$next);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812__$1,cljs.core.cst$kw$tempids);
om.next.protocols.queue_BANG_(reconciler,keys);

var G__20823 = state;
var G__20824 = (function (){var temp__4655__auto__ = cljs.core.cst$kw$migrate.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4655__auto__)){
var migrate = temp__4655__auto__;
var G__20826 = next;
var G__20827 = om.next.get_query(cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__20830 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20830) : cljs.core.deref.call(null,G__20830));
})()));
var G__20828 = tempids;
var G__20829 = cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(config);
return (migrate.cljs$core$IFn$_invoke$arity$4 ? migrate.cljs$core$IFn$_invoke$arity$4(G__20826,G__20827,G__20828,G__20829) : migrate.call(null,G__20826,G__20827,G__20828,G__20829));
} else {
return next;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20823,G__20824) : cljs.core.reset_BANG_.call(null,G__20823,G__20824));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7098__auto__,k__7099__auto__){
var self__ = this;
var this__7098__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7098__auto____$1,k__7099__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7100__auto__,k20838,else__7101__auto__){
var self__ = this;
var this__7100__auto____$1 = this;
var G__20840 = (((k20838 instanceof cljs.core.Keyword))?k20838.fqn:null);
switch (G__20840) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20838,else__7101__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue], null),cljs.core.into,cljs.core.array_seq([ks], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued_DASH_sends], null),cljs.core.cst$kw$merge_DASH_sends.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.array_seq([sends], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = cljs.core.cst$kw$queued_DASH_sends.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$queued_DASH_sends,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$sends_DASH_queued,false);
});})(sends,this$__$1))
);

return cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (p1__20836_SHARP_){
return om.next.merge_BANG_(this$__$1,p1__20836_SHARP_);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state));
var q = cljs.core.cst$kw$queue.cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.empty_QMARK_(q)){
cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_skip], null),q)){
} else {
var cs_20862 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (st,q,___$1){
return (function (p1__20833_SHARP_){
return om.next.protocols.key__GT_components(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),p1__20833_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__20834_SHARP_,p2__20835_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__20834_SHARP_,p2__20835_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__20841_20863 = self__.config;
var map__20841_20864__$1 = ((((!((map__20841_20863 == null)))?((((map__20841_20863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20841_20863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20841_20863):map__20841_20863);
var ui__GT_props_20865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841_20864__$1,cljs.core.cst$kw$ui_DASH__GT_props);
var env_20866 = om.next.to_env(self__.config);
var seq__20843_20867 = cljs.core.seq(cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs_20862));
var chunk__20844_20868 = null;
var count__20845_20869 = (0);
var i__20846_20870 = (0);
while(true){
if((i__20846_20870 < count__20845_20869)){
var c_20871 = chunk__20844_20868.cljs$core$IIndexed$_nth$arity$2(null,i__20846_20870);
if(om.next.mounted_QMARK_(c_20871)){
var computed_20872 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c_20871));
var next_props_20873 = om.next.computed((ui__GT_props_20865.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props_20865.cljs$core$IFn$_invoke$arity$2(env_20866,c_20871) : ui__GT_props_20865.call(null,env_20866,c_20871)),computed_20872);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c_20871,next_props_20873,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c_20871)))){
if(!((next_props_20873 == null))){
om.next.update_component_BANG_(c_20871,next_props_20873);
} else {
c_20871.forceUpdate();
}
} else {
}
} else {
}

var G__20874 = seq__20843_20867;
var G__20875 = chunk__20844_20868;
var G__20876 = count__20845_20869;
var G__20877 = (i__20846_20870 + (1));
seq__20843_20867 = G__20874;
chunk__20844_20868 = G__20875;
count__20845_20869 = G__20876;
i__20846_20870 = G__20877;
continue;
} else {
var temp__4657__auto___20878 = cljs.core.seq(seq__20843_20867);
if(temp__4657__auto___20878){
var seq__20843_20879__$1 = temp__4657__auto___20878;
if(cljs.core.chunked_seq_QMARK_(seq__20843_20879__$1)){
var c__7287__auto___20880 = cljs.core.chunk_first(seq__20843_20879__$1);
var G__20881 = cljs.core.chunk_rest(seq__20843_20879__$1);
var G__20882 = c__7287__auto___20880;
var G__20883 = cljs.core.count(c__7287__auto___20880);
var G__20884 = (0);
seq__20843_20867 = G__20881;
chunk__20844_20868 = G__20882;
count__20845_20869 = G__20883;
i__20846_20870 = G__20884;
continue;
} else {
var c_20885 = cljs.core.first(seq__20843_20879__$1);
if(om.next.mounted_QMARK_(c_20885)){
var computed_20886 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c_20885));
var next_props_20887 = om.next.computed((ui__GT_props_20865.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props_20865.cljs$core$IFn$_invoke$arity$2(env_20866,c_20885) : ui__GT_props_20865.call(null,env_20866,c_20885)),computed_20886);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c_20885,next_props_20887,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c_20885)))){
if(!((next_props_20887 == null))){
om.next.update_component_BANG_(c_20885,next_props_20887);
} else {
c_20885.forceUpdate();
}
} else {
}
} else {
}

var G__20888 = cljs.core.next(seq__20843_20879__$1);
var G__20889 = null;
var G__20890 = (0);
var G__20891 = (0);
seq__20843_20867 = G__20888;
chunk__20844_20868 = G__20889;
count__20845_20869 = G__20890;
i__20846_20870 = G__20891;
continue;
}
} else {
}
}
break;
}

}
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queue,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$sends_DASH_queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sends_DASH_queued], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rctor = om.next.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = cljs.core.random_uuid();
if(((!((root_class == null)))?(((false) || (root_class.om$next$IQuery$))?true:(((!root_class.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,root_class):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,root_class))){
om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__6472__auto__ = cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__6472__auto__)){
return cljs.core.not(cljs.core.cst$kw$normalized.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))));
} else {
return and__6472__auto__;
}
})())){
var new_state_20892 = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,(function (){var G__20848 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20848) : cljs.core.deref.call(null,G__20848));
})());
var refs_20893 = cljs.core.meta(new_state_20892);
var G__20849_20894 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
var G__20850_20895 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_state_20892,refs_20893], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20849_20894,G__20850_20895) : cljs.core.reset_BANG_.call(null,G__20849_20894,G__20850_20895));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$normalized,true);

om.next.protocols.queue_BANG_(this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_skip], null));
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_20851 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_20852 = om.next._STAR_shared_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config))?cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null)], 0));

try{var c = ((!((target == null)))?cljs.core.cst$kw$root_DASH_render.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)),target):((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null))?(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)):(function (){var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(temp__4657__auto__)){
var c_SINGLEQUOTE_ = temp__4657__auto__;
if(om.next.mounted_QMARK_(c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$root,c);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c) : cljs.core.reset_BANG_.call(null,ret,c));
} else {
return null;
}
}finally {om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20852;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20851;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query((function (){var or__6484__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return root_class;
}
})());
if(!((sel == null))){
var env = om.next.to_env(self__.config);
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_(v)){
return null;
} else {
return renderf(v);
}
} else {
return renderf((function (){var G__20853 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20853) : cljs.core.deref.call(null,G__20853));
})());
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$render,parsef,cljs.core.cst$kw$root,root_class,cljs.core.cst$kw$remove,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__6484__auto__ = target;
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__20831_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20831_SHARP_,cljs.core.cst$kw$target),cljs.core.cst$kw$render),cljs.core.cst$kw$root),cljs.core.cst$kw$remove);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return cljs.core.cst$kw$root_DASH_unmount.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__6484__auto__ = target;
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$t], null),cljs.core.inc);

return om.next.schedule_render_BANG_(this$__$1);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef();

var temp__4657__auto___20896 = om.next.get_query((function (){var or__6484__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__4657__auto___20896)){
var sel_20897 = temp__4657__auto___20896;
var env_20898 = om.next.to_env(self__.config);
var snds_20899 = om.next.gather_sends(env_20898,sel_20897,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_(snds_20899)){
} else {
var temp__4657__auto___20900__$1 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4657__auto___20900__$1)){
var send_20901 = temp__4657__auto___20900__$1;
var G__20854_20902 = snds_20899;
var G__20855_20903 = ((function (G__20854_20902,send_20901,temp__4657__auto___20900__$1,env_20898,snds_20899,sel_20897,temp__4657__auto___20896,renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__20832_SHARP_){
om.next.merge_BANG_(this$__$1,p1__20832_SHARP_);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_20898,sel_20897));
});})(G__20854_20902,send_20901,temp__4657__auto___20900__$1,env_20898,snds_20899,sel_20897,temp__4657__auto___20896,renderf,parsef,ret,rctor,guid,this$__$1))
;
(send_20901.cljs$core$IFn$_invoke$arity$2 ? send_20901.cljs$core$IFn$_invoke$arity$2(G__20854_20902,G__20855_20903) : send_20901.call(null,G__20854_20902,G__20855_20903));
} else {
}
}
} else {
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),cljs.core.cst$kw$root);
if(((!((root == null)))?(((false) || (root.om$next$IQuery$))?true:(((!root.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,root):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,root))){
return om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = cljs.core.cst$kw$remove.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.truth_(temp__4657__auto__)){
var remove = temp__4657__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7112__auto__,writer__7113__auto__,opts__7114__auto__){
var self__ = this;
var this__7112__auto____$1 = this;
var pr_pair__7115__auto__ = ((function (this__7112__auto____$1){
return (function (keyval__7116__auto__){
return cljs.core.pr_sequential_writer(writer__7113__auto__,cljs.core.pr_writer,""," ","",opts__7114__auto__,keyval__7116__auto__);
});})(this__7112__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7113__auto__,pr_pair__7115__auto__,"#om.next.Reconciler{",", ","}",opts__7114__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20837){
var self__ = this;
var G__20837__$1 = this;
return (new cljs.core.RecordIter((0),G__20837__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$state], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7096__auto__){
var self__ = this;
var this__7096__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7092__auto__){
var self__ = this;
var this__7092__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7102__auto__){
var self__ = this;
var this__7102__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7093__auto__){
var self__ = this;
var this__7093__auto____$1 = this;
var h__6919__auto__ = self__.__hash;
if(!((h__6919__auto__ == null))){
return h__6919__auto__;
} else {
var h__6919__auto____$1 = cljs.core.hash_imap(this__7093__auto____$1);
self__.__hash = h__6919__auto____$1;

return h__6919__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7094__auto__,other__7095__auto__){
var self__ = this;
var this__7094__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6472__auto__ = other__7095__auto__;
if(cljs.core.truth_(and__6472__auto__)){
var and__6472__auto____$1 = (this__7094__auto____$1.constructor === other__7095__auto__.constructor);
if(and__6472__auto____$1){
return cljs.core.equiv_map(this__7094__auto____$1,other__7095__auto__);
} else {
return and__6472__auto____$1;
}
} else {
return and__6472__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7107__auto__,k__7108__auto__){
var self__ = this;
var this__7107__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$config,null,cljs.core.cst$kw$state,null], null), null),k__7108__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7107__auto____$1),self__.__meta),k__7108__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7108__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7105__auto__,k__7106__auto__,G__20837){
var self__ = this;
var this__7105__auto____$1 = this;
var pred__20857 = cljs.core.keyword_identical_QMARK_;
var expr__20858 = k__7106__auto__;
if(cljs.core.truth_((pred__20857.cljs$core$IFn$_invoke$arity$2 ? pred__20857.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$config,expr__20858) : pred__20857.call(null,cljs.core.cst$kw$config,expr__20858)))){
return (new om.next.Reconciler(G__20837,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20857.cljs$core$IFn$_invoke$arity$2 ? pred__20857.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state,expr__20858) : pred__20857.call(null,cljs.core.cst$kw$state,expr__20858)))){
return (new om.next.Reconciler(self__.config,G__20837,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7106__auto__,G__20837),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7110__auto__){
var self__ = this;
var this__7110__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7097__auto__,G__20837){
var self__ = this;
var this__7097__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__20837,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7103__auto__,entry__7104__auto__){
var self__ = this;
var this__7103__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7104__auto__)){
return cljs.core._assoc(this__7103__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7104__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7104__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7103__auto____$1,entry__7104__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__20860 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20860) : cljs.core.deref.call(null,G__20860));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$state], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__7132__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__7132__auto__,writer__7133__auto__){
return cljs.core._write(writer__7133__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__20839){
return (new om.next.Reconciler(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__20839),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__20839),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20839,cljs.core.cst$kw$config,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__20904,c){
var map__20911 = p__20904;
var map__20911__$1 = ((((!((map__20911 == null)))?((((map__20911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20911):map__20911);
var env = map__20911__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,cljs.core.cst$kw$parser);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,cljs.core.cst$kw$pathopt);
var ui = (cljs.core.truth_((function (){var and__6472__auto__ = pathopt;
if(and__6472__auto__){
var and__6472__auto____$1 = om.next.ident_QMARK_(c);
if(and__6472__auto____$1){
return om.next.iquery_QMARK_(c);
} else {
return and__6472__auto____$1;
}
} else {
return and__6472__auto__;
}
})())?(function (){var id = om.next.ident(c,om.next.props(c));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20913 = env;
var G__20914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query(c)], true, false)], null);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__20913,G__20914) : parser.call(null,G__20913,G__20914));
})(),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.cljs$core$IFn$_invoke$arity$1(c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time();
var ui__$1 = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,fq) : parser.call(null,env,fq));
var e = cljs.core.system_time();
var temp__4657__auto___20917 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4657__auto___20917)){
var l_20918 = temp__4657__auto___20917;
var dt_20919 = (e - s);
if(((16) < dt_20919)){
var G__20915_20920 = l_20918;
var G__20916_20921 = [cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_20919),cljs.core.str(" msecs")].join('');
goog.log.warning(G__20915_20920,G__20916_20921);
} else {
}
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui__$1,om.next.path(c));
}
}
});
om.next.default_merge_ref = (function om$next$default_merge_ref(_,tree,ref,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0));
} else {
return b;
}
});
om.next.default_migrate = (function om$next$default_migrate(pure,query,tempids,id_key){
var dissoc_in = (function om$next$default_migrate_$_dissoc_in(pure__$1,p__20952){
var vec__20954 = p__20952;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20954,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20954,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pure__$1,table,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pure__$1,table),id));
});
var step = (function om$next$default_migrate_$_step(pure__$1,p__20955){
var vec__20959 = p__20955;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20959,(0),null);
var vec__20960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20959,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20960,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20960,(1),null);
var new$ = vec__20960;
return cljs.core.assoc_in(dissoc_in(pure__$1,old),new$,(function (){var G__20961 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure__$1,old),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure__$1,new$)], 0));
if(!((id_key == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20961,id_key,id);
} else {
return G__20961;
}
})());
});
if(!(cljs.core.empty_QMARK_(tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,pure,tempids);
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return pure;
}
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__20967){
var map__20972 = p__20967;
var map__20972__$1 = ((((!((map__20972 == null)))?((((map__20972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20972):map__20972);
var config = map__20972__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$root_DASH_render,((function (map__20972,map__20972__$1,config){
return (function (p1__20964_SHARP_,p2__20965_SHARP_){
return ReactDOM.render(p1__20964_SHARP_,p2__20965_SHARP_);
});})(map__20972,map__20972__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,cljs.core.cst$kw$normalize);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$pathopt,false);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,cljs.core.cst$kw$id_DASH_key);
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$merge_DASH_sends,((function (map__20972,map__20972__$1,config,root_render,normalize,pathopt,id_key){
return (function (p1__20962_SHARP_,p2__20963_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20962_SHARP_,p2__20963_SHARP_], 0));
});})(map__20972,map__20972__$1,config,root_render,normalize,pathopt,id_key))
);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote], null));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$migrate,om.next.default_migrate);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$history,(100));
var merge_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$merge_DASH_ref,om.next.default_merge_ref);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,cljs.core.cst$kw$state);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$merge,om.next.default_merge);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,cljs.core.cst$kw$shared_DASH_fn);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$ui_DASH__GT_props,om.next.default_ui__GT_props);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,cljs.core.cst$kw$parser);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$indexer,om.next.indexer);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$root_DASH_unmount,((function (map__20972,map__20972__$1,config,root_render,normalize,pathopt,id_key,merge_sends,remotes,migrate,history,merge_ref,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__20966_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__20966_SHARP_);
});})(map__20972,map__20972__$1,config,root_render,normalize,pathopt,id_key,merge_sends,remotes,migrate,history,merge_ref,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,cljs.core.cst$kw$send);
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$merge_DASH_tree,om.next.default_merge_tree);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20972__$1,cljs.core.cst$kw$shared);
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20972__$1,cljs.core.cst$kw$optimize,((function (map__20972,map__20972__$1,config,root_render,normalize,pathopt,id_key,merge_sends,remotes,migrate,history,merge_ref,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(om.next.depth,cs);
});})(map__20972,map__20972__$1,config,root_render,normalize,pathopt,id_key,merge_sends,remotes,migrate,history,merge_ref,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$config)], 0)))].join('')));
}

var idxr = (indexer.cljs$core$IFn$_invoke$arity$0 ? indexer.cljs$core$IFn$_invoke$arity$0() : indexer.call(null));
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.atom.call(null,state)));
var logger = ((cljs.core.contains_QMARK_(config,cljs.core.cst$kw$logger))?cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pathopt,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$merge_DASH_sends,cljs.core.cst$kw$remotes,cljs.core.cst$kw$migrate,cljs.core.cst$kw$history,cljs.core.cst$kw$merge_DASH_ref,cljs.core.cst$kw$state,cljs.core.cst$kw$merge,cljs.core.cst$kw$shared_DASH_fn,cljs.core.cst$kw$parser,cljs.core.cst$kw$ui_DASH__GT_props,cljs.core.cst$kw$logger,cljs.core.cst$kw$indexer,cljs.core.cst$kw$root_DASH_unmount,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$optimize,cljs.core.cst$kw$root_DASH_render,cljs.core.cst$kw$normalize],[pathopt,id_key,merge_sends,remotes,migrate,om.next.cache.cache(history),merge_ref,state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__6484__auto__ = !(norm_QMARK_);
if(or__6484__auto__){
return or__6484__auto__;
} else {
return normalize;
}
})()]),(function (){var G__20975 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$normalized,cljs.core.cst$kw$remove,cljs.core.cst$kw$queue,cljs.core.cst$kw$sends_DASH_queued,cljs.core.cst$kw$queued_DASH_sends,cljs.core.cst$kw$queued,cljs.core.cst$kw$render,cljs.core.cst$kw$root,cljs.core.cst$kw$t,cljs.core.cst$kw$target],[false,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20975) : cljs.core.atom.call(null,G__20975));
})(),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args20976 = [];
var len__7542__auto___20979 = arguments.length;
var i__7543__auto___20980 = (0);
while(true){
if((i__7543__auto___20980 < len__7542__auto___20979)){
args20976.push((arguments[i__7543__auto___20980]));

var G__20981 = (i__7543__auto___20980 + (1));
i__7543__auto___20980 = G__20981;
continue;
} else {
}
break;
}

var G__20978 = args20976.length;
switch (G__20978) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20976.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args20983 = [];
var len__7542__auto___20986 = arguments.length;
var i__7543__auto___20987 = (0);
while(true){
if((i__7543__auto___20987 < len__7542__auto___20986)){
args20983.push((arguments[i__7543__auto___20987]));

var G__20988 = (i__7543__auto___20987 + (1));
i__7543__auto___20987 = G__20988;
continue;
} else {
}
break;
}

var G__20985 = args20983.length;
switch (G__20985) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20983.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args20990 = [];
var len__7542__auto___20993 = arguments.length;
var i__7543__auto___20994 = (0);
while(true){
if((i__7543__auto___20994 < len__7542__auto___20993)){
args20990.push((arguments[i__7543__auto___20994]));

var G__20995 = (i__7543__auto___20994 + (1));
i__7543__auto___20994 = G__20995;
continue;
} else {
}
break;
}

var G__20992 = args20990.length;
switch (G__20992) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20990.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;
