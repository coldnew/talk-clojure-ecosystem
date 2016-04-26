// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__7139__auto__ = (((this$ == null))?null:this$);
var m__7140__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto__.call(null,this$));
} else {
var m__7140__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7140__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(ctor,display_name){
var G__18965 = (function (){var G__18969 = {"getDisplayName": (function (){
return cljs.core.name(display_name);
}), "getInitialState": (function (){
var this$ = this;
return {"value": (this$.props["value"])};
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(e) : handler.call(null,e));

return this$.setState({"value": e.target.value});
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState({"value": (new_props["value"])});
}), "render": (function (){
var this$ = this;
var props = {};
var G__18970_18973 = props;
var G__18971_18974 = this$.props;
var G__18972_18975 = {"value": (this$.state["value"]), "onChange": (this$["onChange"]), "children": (this$.props["children"])};
goog.object.extend(G__18970_18973,G__18971_18974,G__18972_18975);

return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(props) : ctor.call(null,props));
})};
return React.createClass(G__18969);
})();
return React.createFactory(G__18965);
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element(React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element(React.DOM.option,"option");
sablono.interpreter.select = sablono.interpreter.wrap_form_element(React.DOM.select,"select");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element(React.DOM.textarea,"textarea");
/**
 * Return a function that creates a React element for the HTML tag `type`.
 */
sablono.interpreter.element_factory = (function sablono$interpreter$element_factory(type){
if(cljs.core.truth_(sablono.util.wrapped_type_QMARK_(type))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$input,sablono.interpreter.input,cljs.core.cst$kw$option,sablono.interpreter.option,cljs.core.cst$kw$select,sablono.interpreter.select,cljs.core.cst$kw$textarea,sablono.interpreter.textarea], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(React.createElement,cljs.core.name(type));
}
});
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__7549__auto__ = [];
var len__7542__auto___18979 = arguments.length;
var i__7543__auto___18980 = (0);
while(true){
if((i__7543__auto___18980 < len__7542__auto___18979)){
args__7549__auto__.push((arguments[i__7543__auto___18980]));

var G__18981 = (i__7543__auto___18980 + (1));
i__7543__auto___18980 = G__18981;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((2) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((2)),(0))):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7550__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
var factory = sablono.interpreter.element_factory(type);
var children__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,children);
if(cljs.core.empty_QMARK_(children__$1)){
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(factory,props,children__$1);
}
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq18976){
var G__18977 = cljs.core.first(seq18976);
var seq18976__$1 = cljs.core.next(seq18976);
var G__18978 = cljs.core.first(seq18976__$1);
var seq18976__$2 = cljs.core.next(seq18976__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__18977,G__18978,seq18976__$2);
});
sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element__$1){
var vec__18983 = sablono.normalize.element(element__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18983,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18983,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18983,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.interpreter.interpret,content));
});
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.interpreter.interpret,s);
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element(this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(sablono.util.element_QMARK_(this$__$1))){
return sablono.interpreter.element(this$__$1);
} else {
return sablono.interpreter.interpret(cljs.core.seq(this$__$1));
}
});

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));
