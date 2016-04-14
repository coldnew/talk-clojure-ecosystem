// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('hipo.interceptor');
goog.require('cljs.core');

/**
 * @interface
 */
hipo.interceptor.Interceptor = function(){};

hipo.interceptor._intercept = (function hipo$interceptor$_intercept(this$,t,m,f){
if((!((this$ == null))) && (!((this$.hipo$interceptor$Interceptor$_intercept$arity$4 == null)))){
return this$.hipo$interceptor$Interceptor$_intercept$arity$4(this$,t,m,f);
} else {
var x__7139__auto__ = (((this$ == null))?null:this$);
var m__7140__auto__ = (hipo.interceptor._intercept[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$4(this$,t,m,f) : m__7140__auto__.call(null,this$,t,m,f));
} else {
var m__7140__auto____$1 = (hipo.interceptor._intercept["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,t,m,f) : m__7140__auto____$1.call(null,this$,t,m,f));
} else {
throw cljs.core.missing_protocol("Interceptor.-intercept",this$);
}
}
}
});

hipo.interceptor.call = (function hipo$interceptor$call(f,v,t,m){
var i = cljs.core.first(v);
return hipo.interceptor._intercept(i,t,m,((function (i){
return (function (){
var s = cljs.core.rest(v);
if(cljs.core.seq(s)){
return hipo$interceptor$call(f,s,t,m);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});})(i))
);
});

/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.LogInterceptor = (function (b){
this.b = b;
})
hipo.interceptor.LogInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.LogInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,m,f){
var self__ = this;
var ___$1 = this;
if((cljs.core.not(self__.b)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reconciliate,t))){
console.log(cljs.core.name(t)," ",cljs.core.clj__GT_js(m));
} else {
}

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});

hipo.interceptor.LogInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$b], null);
});

hipo.interceptor.LogInterceptor.cljs$lang$type = true;

hipo.interceptor.LogInterceptor.cljs$lang$ctorStr = "hipo.interceptor/LogInterceptor";

hipo.interceptor.LogInterceptor.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"hipo.interceptor/LogInterceptor");
});

hipo.interceptor.__GT_LogInterceptor = (function hipo$interceptor$__GT_LogInterceptor(b){
return (new hipo.interceptor.LogInterceptor(b));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.TimeInterceptor = (function (s){
this.s = s;
})
hipo.interceptor.TimeInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.TimeInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,___$1,f){
var self__ = this;
var ___$2 = this;
var label = [cljs.core.str(self__.s),cljs.core.str("-"),cljs.core.str(cljs.core.name(t))].join('');
console.time(label);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return console.timeEnd(label);
});

hipo.interceptor.TimeInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$s], null);
});

hipo.interceptor.TimeInterceptor.cljs$lang$type = true;

hipo.interceptor.TimeInterceptor.cljs$lang$ctorStr = "hipo.interceptor/TimeInterceptor";

hipo.interceptor.TimeInterceptor.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"hipo.interceptor/TimeInterceptor");
});

hipo.interceptor.__GT_TimeInterceptor = (function hipo$interceptor$__GT_TimeInterceptor(s){
return (new hipo.interceptor.TimeInterceptor(s));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.ProfileInterceptor = (function (label){
this.label = label;
})
hipo.interceptor.ProfileInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.ProfileInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,___$1,f){
var self__ = this;
var ___$2 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cljs.core.cst$kw$reconciliate)){
console.profile(self__.label);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

console.profileEnd(self__.label);
} else {
}

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});

hipo.interceptor.ProfileInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$label], null);
});

hipo.interceptor.ProfileInterceptor.cljs$lang$type = true;

hipo.interceptor.ProfileInterceptor.cljs$lang$ctorStr = "hipo.interceptor/ProfileInterceptor";

hipo.interceptor.ProfileInterceptor.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"hipo.interceptor/ProfileInterceptor");
});

hipo.interceptor.__GT_ProfileInterceptor = (function hipo$interceptor$__GT_ProfileInterceptor(label){
return (new hipo.interceptor.ProfileInterceptor(label));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.PerformanceInterceptor = (function (label){
this.label = label;
})
hipo.interceptor.PerformanceInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.PerformanceInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,___$1,f){
var self__ = this;
var ___$2 = this;
var mark_begin = [cljs.core.str(self__.label),cljs.core.str(" begin "),cljs.core.str(t)].join('');
var mark_end = [cljs.core.str(self__.label),cljs.core.str(" end "),cljs.core.str(t)].join('');
performance.mark(mark_begin);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

performance.mark(mark_end);

return performance.measure([cljs.core.str(self__.label),cljs.core.str(" "),cljs.core.str(t)].join(''),mark_begin,mark_end);
});

hipo.interceptor.PerformanceInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$label], null);
});

hipo.interceptor.PerformanceInterceptor.cljs$lang$type = true;

hipo.interceptor.PerformanceInterceptor.cljs$lang$ctorStr = "hipo.interceptor/PerformanceInterceptor";

hipo.interceptor.PerformanceInterceptor.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"hipo.interceptor/PerformanceInterceptor");
});

hipo.interceptor.__GT_PerformanceInterceptor = (function hipo$interceptor$__GT_PerformanceInterceptor(label){
return (new hipo.interceptor.PerformanceInterceptor(label));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.StateInterceptor = (function (a){
this.a = a;
})
hipo.interceptor.StateInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.StateInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,o,f){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.a,((function (___$1){
return (function (p1__12332_SHARP_,p2__12331_SHARP_){
return cljs.core.cons(p2__12331_SHARP_,p1__12332_SHARP_);
});})(___$1))
,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,t,cljs.core.cst$kw$value,o], null));

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});

hipo.interceptor.StateInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$a], null);
});

hipo.interceptor.StateInterceptor.cljs$lang$type = true;

hipo.interceptor.StateInterceptor.cljs$lang$ctorStr = "hipo.interceptor/StateInterceptor";

hipo.interceptor.StateInterceptor.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"hipo.interceptor/StateInterceptor");
});

hipo.interceptor.__GT_StateInterceptor = (function hipo$interceptor$__GT_StateInterceptor(a){
return (new hipo.interceptor.StateInterceptor(a));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.StaticReconciliationInterceptor = (function (){
})
hipo.interceptor.StaticReconciliationInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.StaticReconciliationInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,o,f){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reconciliate,t)){
if(!(cljs.core.contains_QMARK_(cljs.core.meta(cljs.core.cst$kw$new_DASH_value.cljs$core$IFn$_invoke$arity$1(o)),cljs.core.cst$kw$hipo_SLASH_static))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});

hipo.interceptor.StaticReconciliationInterceptor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

hipo.interceptor.StaticReconciliationInterceptor.cljs$lang$type = true;

hipo.interceptor.StaticReconciliationInterceptor.cljs$lang$ctorStr = "hipo.interceptor/StaticReconciliationInterceptor";

hipo.interceptor.StaticReconciliationInterceptor.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"hipo.interceptor/StaticReconciliationInterceptor");
});

hipo.interceptor.__GT_StaticReconciliationInterceptor = (function hipo$interceptor$__GT_StaticReconciliationInterceptor(){
return (new hipo.interceptor.StaticReconciliationInterceptor());
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.IdentityReconciliationInterceptor = (function (){
})
hipo.interceptor.IdentityReconciliationInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.IdentityReconciliationInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,o,f){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reconciliate,t)){
if(!((cljs.core.cst$kw$old_DASH_value.cljs$core$IFn$_invoke$arity$1(o) === cljs.core.cst$kw$new_DASH_value.cljs$core$IFn$_invoke$arity$1(o)))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});

hipo.interceptor.IdentityReconciliationInterceptor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

hipo.interceptor.IdentityReconciliationInterceptor.cljs$lang$type = true;

hipo.interceptor.IdentityReconciliationInterceptor.cljs$lang$ctorStr = "hipo.interceptor/IdentityReconciliationInterceptor";

hipo.interceptor.IdentityReconciliationInterceptor.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"hipo.interceptor/IdentityReconciliationInterceptor");
});

hipo.interceptor.__GT_IdentityReconciliationInterceptor = (function hipo$interceptor$__GT_IdentityReconciliationInterceptor(){
return (new hipo.interceptor.IdentityReconciliationInterceptor());
});

