// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args16150 = [];
var len__7542__auto___16156 = arguments.length;
var i__7543__auto___16157 = (0);
while(true){
if((i__7543__auto___16157 < len__7542__auto___16156)){
args16150.push((arguments[i__7543__auto___16157]));

var G__16158 = (i__7543__auto___16157 + (1));
i__7543__auto___16157 = G__16158;
continue;
} else {
}
break;
}

var G__16152 = args16150.length;
switch (G__16152) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16150.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16153 = (function (f,blockable,meta16154){
this.f = f;
this.blockable = blockable;
this.meta16154 = meta16154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16155,meta16154__$1){
var self__ = this;
var _16155__$1 = this;
return (new cljs.core.async.t_cljs$core$async16153(self__.f,self__.blockable,meta16154__$1));
});

cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16155){
var self__ = this;
var _16155__$1 = this;
return self__.meta16154;
});

cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16154], null);
});

cljs.core.async.t_cljs$core$async16153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16153";

cljs.core.async.t_cljs$core$async16153.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16153");
});

cljs.core.async.__GT_t_cljs$core$async16153 = (function cljs$core$async$__GT_t_cljs$core$async16153(f__$1,blockable__$1,meta16154){
return (new cljs.core.async.t_cljs$core$async16153(f__$1,blockable__$1,meta16154));
});

}

return (new cljs.core.async.t_cljs$core$async16153(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args16162 = [];
var len__7542__auto___16165 = arguments.length;
var i__7543__auto___16166 = (0);
while(true){
if((i__7543__auto___16166 < len__7542__auto___16165)){
args16162.push((arguments[i__7543__auto___16166]));

var G__16167 = (i__7543__auto___16166 + (1));
i__7543__auto___16166 = G__16167;
continue;
} else {
}
break;
}

var G__16164 = args16162.length;
switch (G__16164) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16162.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args16169 = [];
var len__7542__auto___16172 = arguments.length;
var i__7543__auto___16173 = (0);
while(true){
if((i__7543__auto___16173 < len__7542__auto___16172)){
args16169.push((arguments[i__7543__auto___16173]));

var G__16174 = (i__7543__auto___16173 + (1));
i__7543__auto___16173 = G__16174;
continue;
} else {
}
break;
}

var G__16171 = args16169.length;
switch (G__16171) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16169.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args16176 = [];
var len__7542__auto___16179 = arguments.length;
var i__7543__auto___16180 = (0);
while(true){
if((i__7543__auto___16180 < len__7542__auto___16179)){
args16176.push((arguments[i__7543__auto___16180]));

var G__16181 = (i__7543__auto___16180 + (1));
i__7543__auto___16180 = G__16181;
continue;
} else {
}
break;
}

var G__16178 = args16176.length;
switch (G__16178) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16176.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16183 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16183) : fn1.call(null,val_16183));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16183,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16183) : fn1.call(null,val_16183));
});})(val_16183,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args16184 = [];
var len__7542__auto___16187 = arguments.length;
var i__7543__auto___16188 = (0);
while(true){
if((i__7543__auto___16188 < len__7542__auto___16187)){
args16184.push((arguments[i__7543__auto___16188]));

var G__16189 = (i__7543__auto___16188 + (1));
i__7543__auto___16188 = G__16189;
continue;
} else {
}
break;
}

var G__16186 = args16184.length;
switch (G__16186) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16184.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7387__auto___16191 = n;
var x_16192 = (0);
while(true){
if((x_16192 < n__7387__auto___16191)){
(a[x_16192] = (0));

var G__16193 = (x_16192 + (1));
x_16192 = G__16193;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16194 = (i + (1));
i = G__16194;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16198 = (function (alt_flag,flag,meta16199){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16199 = meta16199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16200,meta16199__$1){
var self__ = this;
var _16200__$1 = this;
return (new cljs.core.async.t_cljs$core$async16198(self__.alt_flag,self__.flag,meta16199__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16200){
var self__ = this;
var _16200__$1 = this;
return self__.meta16199;
});})(flag))
;

cljs.core.async.t_cljs$core$async16198.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16198.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16198.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16198.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16198.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16199], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16198";

cljs.core.async.t_cljs$core$async16198.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16198");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16198 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16198(alt_flag__$1,flag__$1,meta16199){
return (new cljs.core.async.t_cljs$core$async16198(alt_flag__$1,flag__$1,meta16199));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16198(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16204 = (function (alt_handler,flag,cb,meta16205){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16205 = meta16205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16206,meta16205__$1){
var self__ = this;
var _16206__$1 = this;
return (new cljs.core.async.t_cljs$core$async16204(self__.alt_handler,self__.flag,self__.cb,meta16205__$1));
});

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16206){
var self__ = this;
var _16206__$1 = this;
return self__.meta16205;
});

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16205], null);
});

cljs.core.async.t_cljs$core$async16204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16204";

cljs.core.async.t_cljs$core$async16204.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16204");
});

cljs.core.async.__GT_t_cljs$core$async16204 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16204(alt_handler__$1,flag__$1,cb__$1,meta16205){
return (new cljs.core.async.t_cljs$core$async16204(alt_handler__$1,flag__$1,cb__$1,meta16205));
});

}

return (new cljs.core.async.t_cljs$core$async16204(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16207_SHARP_){
var G__16211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16207_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16211) : fret.call(null,G__16211));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16208_SHARP_){
var G__16212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16208_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16212) : fret.call(null,G__16212));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6484__auto__ = wport;
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16213 = (i + (1));
i = G__16213;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6484__auto__ = ret;
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6472__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6472__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6472__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7549__auto__ = [];
var len__7542__auto___16219 = arguments.length;
var i__7543__auto___16220 = (0);
while(true){
if((i__7543__auto___16220 < len__7542__auto___16219)){
args__7549__auto__.push((arguments[i__7543__auto___16220]));

var G__16221 = (i__7543__auto___16220 + (1));
i__7543__auto___16220 = G__16221;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16216){
var map__16217 = p__16216;
var map__16217__$1 = ((((!((map__16217 == null)))?((((map__16217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16217):map__16217);
var opts = map__16217__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16214){
var G__16215 = cljs.core.first(seq16214);
var seq16214__$1 = cljs.core.next(seq16214);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16215,seq16214__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args16222 = [];
var len__7542__auto___16272 = arguments.length;
var i__7543__auto___16273 = (0);
while(true){
if((i__7543__auto___16273 < len__7542__auto___16272)){
args16222.push((arguments[i__7543__auto___16273]));

var G__16274 = (i__7543__auto___16273 + (1));
i__7543__auto___16273 = G__16274;
continue;
} else {
}
break;
}

var G__16224 = args16222.length;
switch (G__16224) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16222.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16105__auto___16276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___16276){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___16276){
return (function (state_16248){
var state_val_16249 = (state_16248[(1)]);
if((state_val_16249 === (7))){
var inst_16244 = (state_16248[(2)]);
var state_16248__$1 = state_16248;
var statearr_16250_16277 = state_16248__$1;
(statearr_16250_16277[(2)] = inst_16244);

(statearr_16250_16277[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (1))){
var state_16248__$1 = state_16248;
var statearr_16251_16278 = state_16248__$1;
(statearr_16251_16278[(2)] = null);

(statearr_16251_16278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (4))){
var inst_16227 = (state_16248[(7)]);
var inst_16227__$1 = (state_16248[(2)]);
var inst_16228 = (inst_16227__$1 == null);
var state_16248__$1 = (function (){var statearr_16252 = state_16248;
(statearr_16252[(7)] = inst_16227__$1);

return statearr_16252;
})();
if(cljs.core.truth_(inst_16228)){
var statearr_16253_16279 = state_16248__$1;
(statearr_16253_16279[(1)] = (5));

} else {
var statearr_16254_16280 = state_16248__$1;
(statearr_16254_16280[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (13))){
var state_16248__$1 = state_16248;
var statearr_16255_16281 = state_16248__$1;
(statearr_16255_16281[(2)] = null);

(statearr_16255_16281[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (6))){
var inst_16227 = (state_16248[(7)]);
var state_16248__$1 = state_16248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16248__$1,(11),to,inst_16227);
} else {
if((state_val_16249 === (3))){
var inst_16246 = (state_16248[(2)]);
var state_16248__$1 = state_16248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16248__$1,inst_16246);
} else {
if((state_val_16249 === (12))){
var state_16248__$1 = state_16248;
var statearr_16256_16282 = state_16248__$1;
(statearr_16256_16282[(2)] = null);

(statearr_16256_16282[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (2))){
var state_16248__$1 = state_16248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16248__$1,(4),from);
} else {
if((state_val_16249 === (11))){
var inst_16237 = (state_16248[(2)]);
var state_16248__$1 = state_16248;
if(cljs.core.truth_(inst_16237)){
var statearr_16257_16283 = state_16248__$1;
(statearr_16257_16283[(1)] = (12));

} else {
var statearr_16258_16284 = state_16248__$1;
(statearr_16258_16284[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (9))){
var state_16248__$1 = state_16248;
var statearr_16259_16285 = state_16248__$1;
(statearr_16259_16285[(2)] = null);

(statearr_16259_16285[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (5))){
var state_16248__$1 = state_16248;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16260_16286 = state_16248__$1;
(statearr_16260_16286[(1)] = (8));

} else {
var statearr_16261_16287 = state_16248__$1;
(statearr_16261_16287[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (14))){
var inst_16242 = (state_16248[(2)]);
var state_16248__$1 = state_16248;
var statearr_16262_16288 = state_16248__$1;
(statearr_16262_16288[(2)] = inst_16242);

(statearr_16262_16288[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (10))){
var inst_16234 = (state_16248[(2)]);
var state_16248__$1 = state_16248;
var statearr_16263_16289 = state_16248__$1;
(statearr_16263_16289[(2)] = inst_16234);

(statearr_16263_16289[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16249 === (8))){
var inst_16231 = cljs.core.async.close_BANG_(to);
var state_16248__$1 = state_16248;
var statearr_16264_16290 = state_16248__$1;
(statearr_16264_16290[(2)] = inst_16231);

(statearr_16264_16290[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___16276))
;
return ((function (switch__15991__auto__,c__16105__auto___16276){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_16268 = [null,null,null,null,null,null,null,null];
(statearr_16268[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_16268[(1)] = (1));

return statearr_16268;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_16248){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_16248);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e16269){if((e16269 instanceof Object)){
var ex__15995__auto__ = e16269;
var statearr_16270_16291 = state_16248;
(statearr_16270_16291[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16248);

return cljs.core.cst$kw$recur;
} else {
throw e16269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__16292 = state_16248;
state_16248 = G__16292;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_16248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_16248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___16276))
})();
var state__16107__auto__ = (function (){var statearr_16271 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_16271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___16276);

return statearr_16271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___16276))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16476){
var vec__16477 = p__16476;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16477,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16477,(1),null);
var job = vec__16477;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16105__auto___16659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___16659,res,vec__16477,v,p,job,jobs,results){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___16659,res,vec__16477,v,p,job,jobs,results){
return (function (state_16482){
var state_val_16483 = (state_16482[(1)]);
if((state_val_16483 === (1))){
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16482__$1,(2),res,v);
} else {
if((state_val_16483 === (2))){
var inst_16479 = (state_16482[(2)]);
var inst_16480 = cljs.core.async.close_BANG_(res);
var state_16482__$1 = (function (){var statearr_16484 = state_16482;
(statearr_16484[(7)] = inst_16479);

return statearr_16484;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16482__$1,inst_16480);
} else {
return null;
}
}
});})(c__16105__auto___16659,res,vec__16477,v,p,job,jobs,results))
;
return ((function (switch__15991__auto__,c__16105__auto___16659,res,vec__16477,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0 = (function (){
var statearr_16488 = [null,null,null,null,null,null,null,null];
(statearr_16488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__);

(statearr_16488[(1)] = (1));

return statearr_16488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1 = (function (state_16482){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_16482);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e16489){if((e16489 instanceof Object)){
var ex__15995__auto__ = e16489;
var statearr_16490_16660 = state_16482;
(statearr_16490_16660[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16482);

return cljs.core.cst$kw$recur;
} else {
throw e16489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__16661 = state_16482;
state_16482 = G__16661;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = function(state_16482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1.call(this,state_16482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___16659,res,vec__16477,v,p,job,jobs,results))
})();
var state__16107__auto__ = (function (){var statearr_16491 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_16491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___16659);

return statearr_16491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___16659,res,vec__16477,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16492){
var vec__16493 = p__16492;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16493,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16493,(1),null);
var job = vec__16493;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7387__auto___16662 = n;
var __16663 = (0);
while(true){
if((__16663 < n__7387__auto___16662)){
var G__16494_16664 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16494_16664) {
case "compute":
var c__16105__auto___16666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16663,c__16105__auto___16666,G__16494_16664,n__7387__auto___16662,jobs,results,process,async){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (__16663,c__16105__auto___16666,G__16494_16664,n__7387__auto___16662,jobs,results,process,async){
return (function (state_16507){
var state_val_16508 = (state_16507[(1)]);
if((state_val_16508 === (1))){
var state_16507__$1 = state_16507;
var statearr_16509_16667 = state_16507__$1;
(statearr_16509_16667[(2)] = null);

(statearr_16509_16667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (2))){
var state_16507__$1 = state_16507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16507__$1,(4),jobs);
} else {
if((state_val_16508 === (3))){
var inst_16505 = (state_16507[(2)]);
var state_16507__$1 = state_16507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16507__$1,inst_16505);
} else {
if((state_val_16508 === (4))){
var inst_16497 = (state_16507[(2)]);
var inst_16498 = process(inst_16497);
var state_16507__$1 = state_16507;
if(cljs.core.truth_(inst_16498)){
var statearr_16510_16668 = state_16507__$1;
(statearr_16510_16668[(1)] = (5));

} else {
var statearr_16511_16669 = state_16507__$1;
(statearr_16511_16669[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (5))){
var state_16507__$1 = state_16507;
var statearr_16512_16670 = state_16507__$1;
(statearr_16512_16670[(2)] = null);

(statearr_16512_16670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (6))){
var state_16507__$1 = state_16507;
var statearr_16513_16671 = state_16507__$1;
(statearr_16513_16671[(2)] = null);

(statearr_16513_16671[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16508 === (7))){
var inst_16503 = (state_16507[(2)]);
var state_16507__$1 = state_16507;
var statearr_16514_16672 = state_16507__$1;
(statearr_16514_16672[(2)] = inst_16503);

(statearr_16514_16672[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16663,c__16105__auto___16666,G__16494_16664,n__7387__auto___16662,jobs,results,process,async))
;
return ((function (__16663,switch__15991__auto__,c__16105__auto___16666,G__16494_16664,n__7387__auto___16662,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0 = (function (){
var statearr_16518 = [null,null,null,null,null,null,null];
(statearr_16518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__);

(statearr_16518[(1)] = (1));

return statearr_16518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1 = (function (state_16507){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_16507);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e16519){if((e16519 instanceof Object)){
var ex__15995__auto__ = e16519;
var statearr_16520_16673 = state_16507;
(statearr_16520_16673[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16507);

return cljs.core.cst$kw$recur;
} else {
throw e16519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__16674 = state_16507;
state_16507 = G__16674;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = function(state_16507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1.call(this,state_16507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__;
})()
;})(__16663,switch__15991__auto__,c__16105__auto___16666,G__16494_16664,n__7387__auto___16662,jobs,results,process,async))
})();
var state__16107__auto__ = (function (){var statearr_16521 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_16521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___16666);

return statearr_16521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(__16663,c__16105__auto___16666,G__16494_16664,n__7387__auto___16662,jobs,results,process,async))
);


break;
case "async":
var c__16105__auto___16675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16663,c__16105__auto___16675,G__16494_16664,n__7387__auto___16662,jobs,results,process,async){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (__16663,c__16105__auto___16675,G__16494_16664,n__7387__auto___16662,jobs,results,process,async){
return (function (state_16534){
var state_val_16535 = (state_16534[(1)]);
if((state_val_16535 === (1))){
var state_16534__$1 = state_16534;
var statearr_16536_16676 = state_16534__$1;
(statearr_16536_16676[(2)] = null);

(statearr_16536_16676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16535 === (2))){
var state_16534__$1 = state_16534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16534__$1,(4),jobs);
} else {
if((state_val_16535 === (3))){
var inst_16532 = (state_16534[(2)]);
var state_16534__$1 = state_16534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16534__$1,inst_16532);
} else {
if((state_val_16535 === (4))){
var inst_16524 = (state_16534[(2)]);
var inst_16525 = async(inst_16524);
var state_16534__$1 = state_16534;
if(cljs.core.truth_(inst_16525)){
var statearr_16537_16677 = state_16534__$1;
(statearr_16537_16677[(1)] = (5));

} else {
var statearr_16538_16678 = state_16534__$1;
(statearr_16538_16678[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16535 === (5))){
var state_16534__$1 = state_16534;
var statearr_16539_16679 = state_16534__$1;
(statearr_16539_16679[(2)] = null);

(statearr_16539_16679[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16535 === (6))){
var state_16534__$1 = state_16534;
var statearr_16540_16680 = state_16534__$1;
(statearr_16540_16680[(2)] = null);

(statearr_16540_16680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16535 === (7))){
var inst_16530 = (state_16534[(2)]);
var state_16534__$1 = state_16534;
var statearr_16541_16681 = state_16534__$1;
(statearr_16541_16681[(2)] = inst_16530);

(statearr_16541_16681[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16663,c__16105__auto___16675,G__16494_16664,n__7387__auto___16662,jobs,results,process,async))
;
return ((function (__16663,switch__15991__auto__,c__16105__auto___16675,G__16494_16664,n__7387__auto___16662,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0 = (function (){
var statearr_16545 = [null,null,null,null,null,null,null];
(statearr_16545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__);

(statearr_16545[(1)] = (1));

return statearr_16545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1 = (function (state_16534){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_16534);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e16546){if((e16546 instanceof Object)){
var ex__15995__auto__ = e16546;
var statearr_16547_16682 = state_16534;
(statearr_16547_16682[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16534);

return cljs.core.cst$kw$recur;
} else {
throw e16546;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__16683 = state_16534;
state_16534 = G__16683;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = function(state_16534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1.call(this,state_16534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__;
})()
;})(__16663,switch__15991__auto__,c__16105__auto___16675,G__16494_16664,n__7387__auto___16662,jobs,results,process,async))
})();
var state__16107__auto__ = (function (){var statearr_16548 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_16548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___16675);

return statearr_16548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(__16663,c__16105__auto___16675,G__16494_16664,n__7387__auto___16662,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16684 = (__16663 + (1));
__16663 = G__16684;
continue;
} else {
}
break;
}

var c__16105__auto___16685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___16685,jobs,results,process,async){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___16685,jobs,results,process,async){
return (function (state_16570){
var state_val_16571 = (state_16570[(1)]);
if((state_val_16571 === (1))){
var state_16570__$1 = state_16570;
var statearr_16572_16686 = state_16570__$1;
(statearr_16572_16686[(2)] = null);

(statearr_16572_16686[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16571 === (2))){
var state_16570__$1 = state_16570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16570__$1,(4),from);
} else {
if((state_val_16571 === (3))){
var inst_16568 = (state_16570[(2)]);
var state_16570__$1 = state_16570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16570__$1,inst_16568);
} else {
if((state_val_16571 === (4))){
var inst_16551 = (state_16570[(7)]);
var inst_16551__$1 = (state_16570[(2)]);
var inst_16552 = (inst_16551__$1 == null);
var state_16570__$1 = (function (){var statearr_16573 = state_16570;
(statearr_16573[(7)] = inst_16551__$1);

return statearr_16573;
})();
if(cljs.core.truth_(inst_16552)){
var statearr_16574_16687 = state_16570__$1;
(statearr_16574_16687[(1)] = (5));

} else {
var statearr_16575_16688 = state_16570__$1;
(statearr_16575_16688[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16571 === (5))){
var inst_16554 = cljs.core.async.close_BANG_(jobs);
var state_16570__$1 = state_16570;
var statearr_16576_16689 = state_16570__$1;
(statearr_16576_16689[(2)] = inst_16554);

(statearr_16576_16689[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16571 === (6))){
var inst_16556 = (state_16570[(8)]);
var inst_16551 = (state_16570[(7)]);
var inst_16556__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16557 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16558 = [inst_16551,inst_16556__$1];
var inst_16559 = (new cljs.core.PersistentVector(null,2,(5),inst_16557,inst_16558,null));
var state_16570__$1 = (function (){var statearr_16577 = state_16570;
(statearr_16577[(8)] = inst_16556__$1);

return statearr_16577;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16570__$1,(8),jobs,inst_16559);
} else {
if((state_val_16571 === (7))){
var inst_16566 = (state_16570[(2)]);
var state_16570__$1 = state_16570;
var statearr_16578_16690 = state_16570__$1;
(statearr_16578_16690[(2)] = inst_16566);

(statearr_16578_16690[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16571 === (8))){
var inst_16556 = (state_16570[(8)]);
var inst_16561 = (state_16570[(2)]);
var state_16570__$1 = (function (){var statearr_16579 = state_16570;
(statearr_16579[(9)] = inst_16561);

return statearr_16579;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16570__$1,(9),results,inst_16556);
} else {
if((state_val_16571 === (9))){
var inst_16563 = (state_16570[(2)]);
var state_16570__$1 = (function (){var statearr_16580 = state_16570;
(statearr_16580[(10)] = inst_16563);

return statearr_16580;
})();
var statearr_16581_16691 = state_16570__$1;
(statearr_16581_16691[(2)] = null);

(statearr_16581_16691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___16685,jobs,results,process,async))
;
return ((function (switch__15991__auto__,c__16105__auto___16685,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0 = (function (){
var statearr_16585 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__);

(statearr_16585[(1)] = (1));

return statearr_16585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1 = (function (state_16570){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_16570);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e16586){if((e16586 instanceof Object)){
var ex__15995__auto__ = e16586;
var statearr_16587_16692 = state_16570;
(statearr_16587_16692[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16570);

return cljs.core.cst$kw$recur;
} else {
throw e16586;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__16693 = state_16570;
state_16570 = G__16693;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = function(state_16570){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1.call(this,state_16570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___16685,jobs,results,process,async))
})();
var state__16107__auto__ = (function (){var statearr_16588 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_16588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___16685);

return statearr_16588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___16685,jobs,results,process,async))
);


var c__16105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto__,jobs,results,process,async){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto__,jobs,results,process,async){
return (function (state_16626){
var state_val_16627 = (state_16626[(1)]);
if((state_val_16627 === (7))){
var inst_16622 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
var statearr_16628_16694 = state_16626__$1;
(statearr_16628_16694[(2)] = inst_16622);

(statearr_16628_16694[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (20))){
var state_16626__$1 = state_16626;
var statearr_16629_16695 = state_16626__$1;
(statearr_16629_16695[(2)] = null);

(statearr_16629_16695[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (1))){
var state_16626__$1 = state_16626;
var statearr_16630_16696 = state_16626__$1;
(statearr_16630_16696[(2)] = null);

(statearr_16630_16696[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (4))){
var inst_16591 = (state_16626[(7)]);
var inst_16591__$1 = (state_16626[(2)]);
var inst_16592 = (inst_16591__$1 == null);
var state_16626__$1 = (function (){var statearr_16631 = state_16626;
(statearr_16631[(7)] = inst_16591__$1);

return statearr_16631;
})();
if(cljs.core.truth_(inst_16592)){
var statearr_16632_16697 = state_16626__$1;
(statearr_16632_16697[(1)] = (5));

} else {
var statearr_16633_16698 = state_16626__$1;
(statearr_16633_16698[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (15))){
var inst_16604 = (state_16626[(8)]);
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16626__$1,(18),to,inst_16604);
} else {
if((state_val_16627 === (21))){
var inst_16617 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
var statearr_16634_16699 = state_16626__$1;
(statearr_16634_16699[(2)] = inst_16617);

(statearr_16634_16699[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (13))){
var inst_16619 = (state_16626[(2)]);
var state_16626__$1 = (function (){var statearr_16635 = state_16626;
(statearr_16635[(9)] = inst_16619);

return statearr_16635;
})();
var statearr_16636_16700 = state_16626__$1;
(statearr_16636_16700[(2)] = null);

(statearr_16636_16700[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (6))){
var inst_16591 = (state_16626[(7)]);
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16626__$1,(11),inst_16591);
} else {
if((state_val_16627 === (17))){
var inst_16612 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
if(cljs.core.truth_(inst_16612)){
var statearr_16637_16701 = state_16626__$1;
(statearr_16637_16701[(1)] = (19));

} else {
var statearr_16638_16702 = state_16626__$1;
(statearr_16638_16702[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (3))){
var inst_16624 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16626__$1,inst_16624);
} else {
if((state_val_16627 === (12))){
var inst_16601 = (state_16626[(10)]);
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16626__$1,(14),inst_16601);
} else {
if((state_val_16627 === (2))){
var state_16626__$1 = state_16626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16626__$1,(4),results);
} else {
if((state_val_16627 === (19))){
var state_16626__$1 = state_16626;
var statearr_16639_16703 = state_16626__$1;
(statearr_16639_16703[(2)] = null);

(statearr_16639_16703[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (11))){
var inst_16601 = (state_16626[(2)]);
var state_16626__$1 = (function (){var statearr_16640 = state_16626;
(statearr_16640[(10)] = inst_16601);

return statearr_16640;
})();
var statearr_16641_16704 = state_16626__$1;
(statearr_16641_16704[(2)] = null);

(statearr_16641_16704[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (9))){
var state_16626__$1 = state_16626;
var statearr_16642_16705 = state_16626__$1;
(statearr_16642_16705[(2)] = null);

(statearr_16642_16705[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (5))){
var state_16626__$1 = state_16626;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16643_16706 = state_16626__$1;
(statearr_16643_16706[(1)] = (8));

} else {
var statearr_16644_16707 = state_16626__$1;
(statearr_16644_16707[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (14))){
var inst_16604 = (state_16626[(8)]);
var inst_16606 = (state_16626[(11)]);
var inst_16604__$1 = (state_16626[(2)]);
var inst_16605 = (inst_16604__$1 == null);
var inst_16606__$1 = cljs.core.not(inst_16605);
var state_16626__$1 = (function (){var statearr_16645 = state_16626;
(statearr_16645[(8)] = inst_16604__$1);

(statearr_16645[(11)] = inst_16606__$1);

return statearr_16645;
})();
if(inst_16606__$1){
var statearr_16646_16708 = state_16626__$1;
(statearr_16646_16708[(1)] = (15));

} else {
var statearr_16647_16709 = state_16626__$1;
(statearr_16647_16709[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (16))){
var inst_16606 = (state_16626[(11)]);
var state_16626__$1 = state_16626;
var statearr_16648_16710 = state_16626__$1;
(statearr_16648_16710[(2)] = inst_16606);

(statearr_16648_16710[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (10))){
var inst_16598 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
var statearr_16649_16711 = state_16626__$1;
(statearr_16649_16711[(2)] = inst_16598);

(statearr_16649_16711[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (18))){
var inst_16609 = (state_16626[(2)]);
var state_16626__$1 = state_16626;
var statearr_16650_16712 = state_16626__$1;
(statearr_16650_16712[(2)] = inst_16609);

(statearr_16650_16712[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16627 === (8))){
var inst_16595 = cljs.core.async.close_BANG_(to);
var state_16626__$1 = state_16626;
var statearr_16651_16713 = state_16626__$1;
(statearr_16651_16713[(2)] = inst_16595);

(statearr_16651_16713[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto__,jobs,results,process,async))
;
return ((function (switch__15991__auto__,c__16105__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0 = (function (){
var statearr_16655 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__);

(statearr_16655[(1)] = (1));

return statearr_16655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1 = (function (state_16626){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_16626);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e16656){if((e16656 instanceof Object)){
var ex__15995__auto__ = e16656;
var statearr_16657_16714 = state_16626;
(statearr_16657_16714[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16626);

return cljs.core.cst$kw$recur;
} else {
throw e16656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__16715 = state_16626;
state_16626 = G__16715;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__ = function(state_16626){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1.call(this,state_16626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto__,jobs,results,process,async))
})();
var state__16107__auto__ = (function (){var statearr_16658 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_16658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto__);

return statearr_16658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto__,jobs,results,process,async))
);

return c__16105__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args16716 = [];
var len__7542__auto___16719 = arguments.length;
var i__7543__auto___16720 = (0);
while(true){
if((i__7543__auto___16720 < len__7542__auto___16719)){
args16716.push((arguments[i__7543__auto___16720]));

var G__16721 = (i__7543__auto___16720 + (1));
i__7543__auto___16720 = G__16721;
continue;
} else {
}
break;
}

var G__16718 = args16716.length;
switch (G__16718) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16716.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args16723 = [];
var len__7542__auto___16726 = arguments.length;
var i__7543__auto___16727 = (0);
while(true){
if((i__7543__auto___16727 < len__7542__auto___16726)){
args16723.push((arguments[i__7543__auto___16727]));

var G__16728 = (i__7543__auto___16727 + (1));
i__7543__auto___16727 = G__16728;
continue;
} else {
}
break;
}

var G__16725 = args16723.length;
switch (G__16725) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16723.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args16730 = [];
var len__7542__auto___16783 = arguments.length;
var i__7543__auto___16784 = (0);
while(true){
if((i__7543__auto___16784 < len__7542__auto___16783)){
args16730.push((arguments[i__7543__auto___16784]));

var G__16785 = (i__7543__auto___16784 + (1));
i__7543__auto___16784 = G__16785;
continue;
} else {
}
break;
}

var G__16732 = args16730.length;
switch (G__16732) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16730.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16105__auto___16787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___16787,tc,fc){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___16787,tc,fc){
return (function (state_16758){
var state_val_16759 = (state_16758[(1)]);
if((state_val_16759 === (7))){
var inst_16754 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
var statearr_16760_16788 = state_16758__$1;
(statearr_16760_16788[(2)] = inst_16754);

(statearr_16760_16788[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (1))){
var state_16758__$1 = state_16758;
var statearr_16761_16789 = state_16758__$1;
(statearr_16761_16789[(2)] = null);

(statearr_16761_16789[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (4))){
var inst_16735 = (state_16758[(7)]);
var inst_16735__$1 = (state_16758[(2)]);
var inst_16736 = (inst_16735__$1 == null);
var state_16758__$1 = (function (){var statearr_16762 = state_16758;
(statearr_16762[(7)] = inst_16735__$1);

return statearr_16762;
})();
if(cljs.core.truth_(inst_16736)){
var statearr_16763_16790 = state_16758__$1;
(statearr_16763_16790[(1)] = (5));

} else {
var statearr_16764_16791 = state_16758__$1;
(statearr_16764_16791[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (13))){
var state_16758__$1 = state_16758;
var statearr_16765_16792 = state_16758__$1;
(statearr_16765_16792[(2)] = null);

(statearr_16765_16792[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (6))){
var inst_16735 = (state_16758[(7)]);
var inst_16741 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16735) : p.call(null,inst_16735));
var state_16758__$1 = state_16758;
if(cljs.core.truth_(inst_16741)){
var statearr_16766_16793 = state_16758__$1;
(statearr_16766_16793[(1)] = (9));

} else {
var statearr_16767_16794 = state_16758__$1;
(statearr_16767_16794[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (3))){
var inst_16756 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16758__$1,inst_16756);
} else {
if((state_val_16759 === (12))){
var state_16758__$1 = state_16758;
var statearr_16768_16795 = state_16758__$1;
(statearr_16768_16795[(2)] = null);

(statearr_16768_16795[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (2))){
var state_16758__$1 = state_16758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16758__$1,(4),ch);
} else {
if((state_val_16759 === (11))){
var inst_16735 = (state_16758[(7)]);
var inst_16745 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16758__$1,(8),inst_16745,inst_16735);
} else {
if((state_val_16759 === (9))){
var state_16758__$1 = state_16758;
var statearr_16769_16796 = state_16758__$1;
(statearr_16769_16796[(2)] = tc);

(statearr_16769_16796[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (5))){
var inst_16738 = cljs.core.async.close_BANG_(tc);
var inst_16739 = cljs.core.async.close_BANG_(fc);
var state_16758__$1 = (function (){var statearr_16770 = state_16758;
(statearr_16770[(8)] = inst_16738);

return statearr_16770;
})();
var statearr_16771_16797 = state_16758__$1;
(statearr_16771_16797[(2)] = inst_16739);

(statearr_16771_16797[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (14))){
var inst_16752 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
var statearr_16772_16798 = state_16758__$1;
(statearr_16772_16798[(2)] = inst_16752);

(statearr_16772_16798[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (10))){
var state_16758__$1 = state_16758;
var statearr_16773_16799 = state_16758__$1;
(statearr_16773_16799[(2)] = fc);

(statearr_16773_16799[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16759 === (8))){
var inst_16747 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
if(cljs.core.truth_(inst_16747)){
var statearr_16774_16800 = state_16758__$1;
(statearr_16774_16800[(1)] = (12));

} else {
var statearr_16775_16801 = state_16758__$1;
(statearr_16775_16801[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___16787,tc,fc))
;
return ((function (switch__15991__auto__,c__16105__auto___16787,tc,fc){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_16779 = [null,null,null,null,null,null,null,null,null];
(statearr_16779[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_16779[(1)] = (1));

return statearr_16779;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_16758){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_16758);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e16780){if((e16780 instanceof Object)){
var ex__15995__auto__ = e16780;
var statearr_16781_16802 = state_16758;
(statearr_16781_16802[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16758);

return cljs.core.cst$kw$recur;
} else {
throw e16780;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__16803 = state_16758;
state_16758 = G__16803;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_16758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_16758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___16787,tc,fc))
})();
var state__16107__auto__ = (function (){var statearr_16782 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_16782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___16787);

return statearr_16782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___16787,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto__){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto__){
return (function (state_16867){
var state_val_16868 = (state_16867[(1)]);
if((state_val_16868 === (7))){
var inst_16863 = (state_16867[(2)]);
var state_16867__$1 = state_16867;
var statearr_16869_16890 = state_16867__$1;
(statearr_16869_16890[(2)] = inst_16863);

(statearr_16869_16890[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16868 === (1))){
var inst_16847 = init;
var state_16867__$1 = (function (){var statearr_16870 = state_16867;
(statearr_16870[(7)] = inst_16847);

return statearr_16870;
})();
var statearr_16871_16891 = state_16867__$1;
(statearr_16871_16891[(2)] = null);

(statearr_16871_16891[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16868 === (4))){
var inst_16850 = (state_16867[(8)]);
var inst_16850__$1 = (state_16867[(2)]);
var inst_16851 = (inst_16850__$1 == null);
var state_16867__$1 = (function (){var statearr_16872 = state_16867;
(statearr_16872[(8)] = inst_16850__$1);

return statearr_16872;
})();
if(cljs.core.truth_(inst_16851)){
var statearr_16873_16892 = state_16867__$1;
(statearr_16873_16892[(1)] = (5));

} else {
var statearr_16874_16893 = state_16867__$1;
(statearr_16874_16893[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16868 === (6))){
var inst_16847 = (state_16867[(7)]);
var inst_16850 = (state_16867[(8)]);
var inst_16854 = (state_16867[(9)]);
var inst_16854__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16847,inst_16850) : f.call(null,inst_16847,inst_16850));
var inst_16855 = cljs.core.reduced_QMARK_(inst_16854__$1);
var state_16867__$1 = (function (){var statearr_16875 = state_16867;
(statearr_16875[(9)] = inst_16854__$1);

return statearr_16875;
})();
if(inst_16855){
var statearr_16876_16894 = state_16867__$1;
(statearr_16876_16894[(1)] = (8));

} else {
var statearr_16877_16895 = state_16867__$1;
(statearr_16877_16895[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16868 === (3))){
var inst_16865 = (state_16867[(2)]);
var state_16867__$1 = state_16867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16867__$1,inst_16865);
} else {
if((state_val_16868 === (2))){
var state_16867__$1 = state_16867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16867__$1,(4),ch);
} else {
if((state_val_16868 === (9))){
var inst_16854 = (state_16867[(9)]);
var inst_16847 = inst_16854;
var state_16867__$1 = (function (){var statearr_16878 = state_16867;
(statearr_16878[(7)] = inst_16847);

return statearr_16878;
})();
var statearr_16879_16896 = state_16867__$1;
(statearr_16879_16896[(2)] = null);

(statearr_16879_16896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16868 === (5))){
var inst_16847 = (state_16867[(7)]);
var state_16867__$1 = state_16867;
var statearr_16880_16897 = state_16867__$1;
(statearr_16880_16897[(2)] = inst_16847);

(statearr_16880_16897[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16868 === (10))){
var inst_16861 = (state_16867[(2)]);
var state_16867__$1 = state_16867;
var statearr_16881_16898 = state_16867__$1;
(statearr_16881_16898[(2)] = inst_16861);

(statearr_16881_16898[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16868 === (8))){
var inst_16854 = (state_16867[(9)]);
var inst_16857 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16854) : cljs.core.deref.call(null,inst_16854));
var state_16867__$1 = state_16867;
var statearr_16882_16899 = state_16867__$1;
(statearr_16882_16899[(2)] = inst_16857);

(statearr_16882_16899[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto__))
;
return ((function (switch__15991__auto__,c__16105__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15992__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15992__auto____0 = (function (){
var statearr_16886 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16886[(0)] = cljs$core$async$reduce_$_state_machine__15992__auto__);

(statearr_16886[(1)] = (1));

return statearr_16886;
});
var cljs$core$async$reduce_$_state_machine__15992__auto____1 = (function (state_16867){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_16867);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e16887){if((e16887 instanceof Object)){
var ex__15995__auto__ = e16887;
var statearr_16888_16900 = state_16867;
(statearr_16888_16900[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16867);

return cljs.core.cst$kw$recur;
} else {
throw e16887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__16901 = state_16867;
state_16867 = G__16901;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15992__auto__ = function(state_16867){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15992__auto____1.call(this,state_16867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15992__auto____0;
cljs$core$async$reduce_$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15992__auto____1;
return cljs$core$async$reduce_$_state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto__))
})();
var state__16107__auto__ = (function (){var statearr_16889 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_16889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto__);

return statearr_16889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto__))
);

return c__16105__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args16902 = [];
var len__7542__auto___16954 = arguments.length;
var i__7543__auto___16955 = (0);
while(true){
if((i__7543__auto___16955 < len__7542__auto___16954)){
args16902.push((arguments[i__7543__auto___16955]));

var G__16956 = (i__7543__auto___16955 + (1));
i__7543__auto___16955 = G__16956;
continue;
} else {
}
break;
}

var G__16904 = args16902.length;
switch (G__16904) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16902.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto__){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto__){
return (function (state_16929){
var state_val_16930 = (state_16929[(1)]);
if((state_val_16930 === (7))){
var inst_16911 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16931_16958 = state_16929__$1;
(statearr_16931_16958[(2)] = inst_16911);

(statearr_16931_16958[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (1))){
var inst_16905 = cljs.core.seq(coll);
var inst_16906 = inst_16905;
var state_16929__$1 = (function (){var statearr_16932 = state_16929;
(statearr_16932[(7)] = inst_16906);

return statearr_16932;
})();
var statearr_16933_16959 = state_16929__$1;
(statearr_16933_16959[(2)] = null);

(statearr_16933_16959[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (4))){
var inst_16906 = (state_16929[(7)]);
var inst_16909 = cljs.core.first(inst_16906);
var state_16929__$1 = state_16929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16929__$1,(7),ch,inst_16909);
} else {
if((state_val_16930 === (13))){
var inst_16923 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16934_16960 = state_16929__$1;
(statearr_16934_16960[(2)] = inst_16923);

(statearr_16934_16960[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (6))){
var inst_16914 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
if(cljs.core.truth_(inst_16914)){
var statearr_16935_16961 = state_16929__$1;
(statearr_16935_16961[(1)] = (8));

} else {
var statearr_16936_16962 = state_16929__$1;
(statearr_16936_16962[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (3))){
var inst_16927 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16929__$1,inst_16927);
} else {
if((state_val_16930 === (12))){
var state_16929__$1 = state_16929;
var statearr_16937_16963 = state_16929__$1;
(statearr_16937_16963[(2)] = null);

(statearr_16937_16963[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (2))){
var inst_16906 = (state_16929[(7)]);
var state_16929__$1 = state_16929;
if(cljs.core.truth_(inst_16906)){
var statearr_16938_16964 = state_16929__$1;
(statearr_16938_16964[(1)] = (4));

} else {
var statearr_16939_16965 = state_16929__$1;
(statearr_16939_16965[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (11))){
var inst_16920 = cljs.core.async.close_BANG_(ch);
var state_16929__$1 = state_16929;
var statearr_16940_16966 = state_16929__$1;
(statearr_16940_16966[(2)] = inst_16920);

(statearr_16940_16966[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (9))){
var state_16929__$1 = state_16929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16941_16967 = state_16929__$1;
(statearr_16941_16967[(1)] = (11));

} else {
var statearr_16942_16968 = state_16929__$1;
(statearr_16942_16968[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (5))){
var inst_16906 = (state_16929[(7)]);
var state_16929__$1 = state_16929;
var statearr_16943_16969 = state_16929__$1;
(statearr_16943_16969[(2)] = inst_16906);

(statearr_16943_16969[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (10))){
var inst_16925 = (state_16929[(2)]);
var state_16929__$1 = state_16929;
var statearr_16944_16970 = state_16929__$1;
(statearr_16944_16970[(2)] = inst_16925);

(statearr_16944_16970[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16930 === (8))){
var inst_16906 = (state_16929[(7)]);
var inst_16916 = cljs.core.next(inst_16906);
var inst_16906__$1 = inst_16916;
var state_16929__$1 = (function (){var statearr_16945 = state_16929;
(statearr_16945[(7)] = inst_16906__$1);

return statearr_16945;
})();
var statearr_16946_16971 = state_16929__$1;
(statearr_16946_16971[(2)] = null);

(statearr_16946_16971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto__))
;
return ((function (switch__15991__auto__,c__16105__auto__){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_16950 = [null,null,null,null,null,null,null,null];
(statearr_16950[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_16950[(1)] = (1));

return statearr_16950;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_16929){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_16929);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e16951){if((e16951 instanceof Object)){
var ex__15995__auto__ = e16951;
var statearr_16952_16972 = state_16929;
(statearr_16952_16972[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16929);

return cljs.core.cst$kw$recur;
} else {
throw e16951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__16973 = state_16929;
state_16929 = G__16973;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_16929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_16929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto__))
})();
var state__16107__auto__ = (function (){var statearr_16953 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_16953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto__);

return statearr_16953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto__))
);

return c__16105__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7139__auto__ = (((_ == null))?null:_);
var m__7140__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7140__auto__.call(null,_));
} else {
var m__7140__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7140__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7139__auto__ = (((m == null))?null:m);
var m__7140__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7140__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7140__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7140__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7139__auto__ = (((m == null))?null:m);
var m__7140__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7140__auto__.call(null,m,ch));
} else {
var m__7140__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7140__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7139__auto__ = (((m == null))?null:m);
var m__7140__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7140__auto__.call(null,m));
} else {
var m__7140__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7140__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__17198 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17198) : cljs.core.atom.call(null,G__17198));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17199 = (function (mult,ch,cs,meta17200){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17200 = meta17200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17201,meta17200__$1){
var self__ = this;
var _17201__$1 = this;
return (new cljs.core.async.t_cljs$core$async17199(self__.mult,self__.ch,self__.cs,meta17200__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17201){
var self__ = this;
var _17201__$1 = this;
return self__.meta17200;
});})(cs))
;

cljs.core.async.t_cljs$core$async17199.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17199.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async17199.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17199.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17199.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17202_17422 = self__.cs;
var G__17203_17423 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17202_17422,G__17203_17423) : cljs.core.reset_BANG_.call(null,G__17202_17422,G__17203_17423));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17199.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17200], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17199";

cljs.core.async.t_cljs$core$async17199.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17199");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17199 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17199(mult__$1,ch__$1,cs__$1,meta17200){
return (new cljs.core.async.t_cljs$core$async17199(mult__$1,ch__$1,cs__$1,meta17200));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17199(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16105__auto___17424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___17424,cs,m,dchan,dctr,done){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___17424,cs,m,dchan,dctr,done){
return (function (state_17334){
var state_val_17335 = (state_17334[(1)]);
if((state_val_17335 === (7))){
var inst_17330 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
var statearr_17336_17425 = state_17334__$1;
(statearr_17336_17425[(2)] = inst_17330);

(statearr_17336_17425[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (20))){
var inst_17235 = (state_17334[(7)]);
var inst_17245 = cljs.core.first(inst_17235);
var inst_17246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17245,(0),null);
var inst_17247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17245,(1),null);
var state_17334__$1 = (function (){var statearr_17337 = state_17334;
(statearr_17337[(8)] = inst_17246);

return statearr_17337;
})();
if(cljs.core.truth_(inst_17247)){
var statearr_17338_17426 = state_17334__$1;
(statearr_17338_17426[(1)] = (22));

} else {
var statearr_17339_17427 = state_17334__$1;
(statearr_17339_17427[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (27))){
var inst_17277 = (state_17334[(9)]);
var inst_17206 = (state_17334[(10)]);
var inst_17282 = (state_17334[(11)]);
var inst_17275 = (state_17334[(12)]);
var inst_17282__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17275,inst_17277);
var inst_17283 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17282__$1,inst_17206,done);
var state_17334__$1 = (function (){var statearr_17340 = state_17334;
(statearr_17340[(11)] = inst_17282__$1);

return statearr_17340;
})();
if(cljs.core.truth_(inst_17283)){
var statearr_17341_17428 = state_17334__$1;
(statearr_17341_17428[(1)] = (30));

} else {
var statearr_17342_17429 = state_17334__$1;
(statearr_17342_17429[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (1))){
var state_17334__$1 = state_17334;
var statearr_17343_17430 = state_17334__$1;
(statearr_17343_17430[(2)] = null);

(statearr_17343_17430[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (24))){
var inst_17235 = (state_17334[(7)]);
var inst_17252 = (state_17334[(2)]);
var inst_17253 = cljs.core.next(inst_17235);
var inst_17215 = inst_17253;
var inst_17216 = null;
var inst_17217 = (0);
var inst_17218 = (0);
var state_17334__$1 = (function (){var statearr_17344 = state_17334;
(statearr_17344[(13)] = inst_17218);

(statearr_17344[(14)] = inst_17215);

(statearr_17344[(15)] = inst_17217);

(statearr_17344[(16)] = inst_17216);

(statearr_17344[(17)] = inst_17252);

return statearr_17344;
})();
var statearr_17345_17431 = state_17334__$1;
(statearr_17345_17431[(2)] = null);

(statearr_17345_17431[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (39))){
var state_17334__$1 = state_17334;
var statearr_17349_17432 = state_17334__$1;
(statearr_17349_17432[(2)] = null);

(statearr_17349_17432[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (4))){
var inst_17206 = (state_17334[(10)]);
var inst_17206__$1 = (state_17334[(2)]);
var inst_17207 = (inst_17206__$1 == null);
var state_17334__$1 = (function (){var statearr_17350 = state_17334;
(statearr_17350[(10)] = inst_17206__$1);

return statearr_17350;
})();
if(cljs.core.truth_(inst_17207)){
var statearr_17351_17433 = state_17334__$1;
(statearr_17351_17433[(1)] = (5));

} else {
var statearr_17352_17434 = state_17334__$1;
(statearr_17352_17434[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (15))){
var inst_17218 = (state_17334[(13)]);
var inst_17215 = (state_17334[(14)]);
var inst_17217 = (state_17334[(15)]);
var inst_17216 = (state_17334[(16)]);
var inst_17231 = (state_17334[(2)]);
var inst_17232 = (inst_17218 + (1));
var tmp17346 = inst_17215;
var tmp17347 = inst_17217;
var tmp17348 = inst_17216;
var inst_17215__$1 = tmp17346;
var inst_17216__$1 = tmp17348;
var inst_17217__$1 = tmp17347;
var inst_17218__$1 = inst_17232;
var state_17334__$1 = (function (){var statearr_17353 = state_17334;
(statearr_17353[(18)] = inst_17231);

(statearr_17353[(13)] = inst_17218__$1);

(statearr_17353[(14)] = inst_17215__$1);

(statearr_17353[(15)] = inst_17217__$1);

(statearr_17353[(16)] = inst_17216__$1);

return statearr_17353;
})();
var statearr_17354_17435 = state_17334__$1;
(statearr_17354_17435[(2)] = null);

(statearr_17354_17435[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (21))){
var inst_17256 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
var statearr_17358_17436 = state_17334__$1;
(statearr_17358_17436[(2)] = inst_17256);

(statearr_17358_17436[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (31))){
var inst_17282 = (state_17334[(11)]);
var inst_17286 = done(null);
var inst_17287 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17282);
var state_17334__$1 = (function (){var statearr_17359 = state_17334;
(statearr_17359[(19)] = inst_17286);

return statearr_17359;
})();
var statearr_17360_17437 = state_17334__$1;
(statearr_17360_17437[(2)] = inst_17287);

(statearr_17360_17437[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (32))){
var inst_17277 = (state_17334[(9)]);
var inst_17274 = (state_17334[(20)]);
var inst_17276 = (state_17334[(21)]);
var inst_17275 = (state_17334[(12)]);
var inst_17289 = (state_17334[(2)]);
var inst_17290 = (inst_17277 + (1));
var tmp17355 = inst_17274;
var tmp17356 = inst_17276;
var tmp17357 = inst_17275;
var inst_17274__$1 = tmp17355;
var inst_17275__$1 = tmp17357;
var inst_17276__$1 = tmp17356;
var inst_17277__$1 = inst_17290;
var state_17334__$1 = (function (){var statearr_17361 = state_17334;
(statearr_17361[(9)] = inst_17277__$1);

(statearr_17361[(22)] = inst_17289);

(statearr_17361[(20)] = inst_17274__$1);

(statearr_17361[(21)] = inst_17276__$1);

(statearr_17361[(12)] = inst_17275__$1);

return statearr_17361;
})();
var statearr_17362_17438 = state_17334__$1;
(statearr_17362_17438[(2)] = null);

(statearr_17362_17438[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (40))){
var inst_17302 = (state_17334[(23)]);
var inst_17306 = done(null);
var inst_17307 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17302);
var state_17334__$1 = (function (){var statearr_17363 = state_17334;
(statearr_17363[(24)] = inst_17306);

return statearr_17363;
})();
var statearr_17364_17439 = state_17334__$1;
(statearr_17364_17439[(2)] = inst_17307);

(statearr_17364_17439[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (33))){
var inst_17293 = (state_17334[(25)]);
var inst_17295 = cljs.core.chunked_seq_QMARK_(inst_17293);
var state_17334__$1 = state_17334;
if(inst_17295){
var statearr_17365_17440 = state_17334__$1;
(statearr_17365_17440[(1)] = (36));

} else {
var statearr_17366_17441 = state_17334__$1;
(statearr_17366_17441[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (13))){
var inst_17225 = (state_17334[(26)]);
var inst_17228 = cljs.core.async.close_BANG_(inst_17225);
var state_17334__$1 = state_17334;
var statearr_17367_17442 = state_17334__$1;
(statearr_17367_17442[(2)] = inst_17228);

(statearr_17367_17442[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (22))){
var inst_17246 = (state_17334[(8)]);
var inst_17249 = cljs.core.async.close_BANG_(inst_17246);
var state_17334__$1 = state_17334;
var statearr_17368_17443 = state_17334__$1;
(statearr_17368_17443[(2)] = inst_17249);

(statearr_17368_17443[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (36))){
var inst_17293 = (state_17334[(25)]);
var inst_17297 = cljs.core.chunk_first(inst_17293);
var inst_17298 = cljs.core.chunk_rest(inst_17293);
var inst_17299 = cljs.core.count(inst_17297);
var inst_17274 = inst_17298;
var inst_17275 = inst_17297;
var inst_17276 = inst_17299;
var inst_17277 = (0);
var state_17334__$1 = (function (){var statearr_17369 = state_17334;
(statearr_17369[(9)] = inst_17277);

(statearr_17369[(20)] = inst_17274);

(statearr_17369[(21)] = inst_17276);

(statearr_17369[(12)] = inst_17275);

return statearr_17369;
})();
var statearr_17370_17444 = state_17334__$1;
(statearr_17370_17444[(2)] = null);

(statearr_17370_17444[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (41))){
var inst_17293 = (state_17334[(25)]);
var inst_17309 = (state_17334[(2)]);
var inst_17310 = cljs.core.next(inst_17293);
var inst_17274 = inst_17310;
var inst_17275 = null;
var inst_17276 = (0);
var inst_17277 = (0);
var state_17334__$1 = (function (){var statearr_17371 = state_17334;
(statearr_17371[(9)] = inst_17277);

(statearr_17371[(20)] = inst_17274);

(statearr_17371[(21)] = inst_17276);

(statearr_17371[(27)] = inst_17309);

(statearr_17371[(12)] = inst_17275);

return statearr_17371;
})();
var statearr_17372_17445 = state_17334__$1;
(statearr_17372_17445[(2)] = null);

(statearr_17372_17445[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (43))){
var state_17334__$1 = state_17334;
var statearr_17373_17446 = state_17334__$1;
(statearr_17373_17446[(2)] = null);

(statearr_17373_17446[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (29))){
var inst_17318 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
var statearr_17374_17447 = state_17334__$1;
(statearr_17374_17447[(2)] = inst_17318);

(statearr_17374_17447[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (44))){
var inst_17327 = (state_17334[(2)]);
var state_17334__$1 = (function (){var statearr_17375 = state_17334;
(statearr_17375[(28)] = inst_17327);

return statearr_17375;
})();
var statearr_17376_17448 = state_17334__$1;
(statearr_17376_17448[(2)] = null);

(statearr_17376_17448[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (6))){
var inst_17266 = (state_17334[(29)]);
var inst_17265 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17266__$1 = cljs.core.keys(inst_17265);
var inst_17267 = cljs.core.count(inst_17266__$1);
var inst_17268 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17267) : cljs.core.reset_BANG_.call(null,dctr,inst_17267));
var inst_17273 = cljs.core.seq(inst_17266__$1);
var inst_17274 = inst_17273;
var inst_17275 = null;
var inst_17276 = (0);
var inst_17277 = (0);
var state_17334__$1 = (function (){var statearr_17377 = state_17334;
(statearr_17377[(9)] = inst_17277);

(statearr_17377[(29)] = inst_17266__$1);

(statearr_17377[(20)] = inst_17274);

(statearr_17377[(21)] = inst_17276);

(statearr_17377[(12)] = inst_17275);

(statearr_17377[(30)] = inst_17268);

return statearr_17377;
})();
var statearr_17378_17449 = state_17334__$1;
(statearr_17378_17449[(2)] = null);

(statearr_17378_17449[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (28))){
var inst_17293 = (state_17334[(25)]);
var inst_17274 = (state_17334[(20)]);
var inst_17293__$1 = cljs.core.seq(inst_17274);
var state_17334__$1 = (function (){var statearr_17379 = state_17334;
(statearr_17379[(25)] = inst_17293__$1);

return statearr_17379;
})();
if(inst_17293__$1){
var statearr_17380_17450 = state_17334__$1;
(statearr_17380_17450[(1)] = (33));

} else {
var statearr_17381_17451 = state_17334__$1;
(statearr_17381_17451[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (25))){
var inst_17277 = (state_17334[(9)]);
var inst_17276 = (state_17334[(21)]);
var inst_17279 = (inst_17277 < inst_17276);
var inst_17280 = inst_17279;
var state_17334__$1 = state_17334;
if(cljs.core.truth_(inst_17280)){
var statearr_17382_17452 = state_17334__$1;
(statearr_17382_17452[(1)] = (27));

} else {
var statearr_17383_17453 = state_17334__$1;
(statearr_17383_17453[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (34))){
var state_17334__$1 = state_17334;
var statearr_17384_17454 = state_17334__$1;
(statearr_17384_17454[(2)] = null);

(statearr_17384_17454[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (17))){
var state_17334__$1 = state_17334;
var statearr_17385_17455 = state_17334__$1;
(statearr_17385_17455[(2)] = null);

(statearr_17385_17455[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (3))){
var inst_17332 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17334__$1,inst_17332);
} else {
if((state_val_17335 === (12))){
var inst_17261 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
var statearr_17386_17456 = state_17334__$1;
(statearr_17386_17456[(2)] = inst_17261);

(statearr_17386_17456[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (2))){
var state_17334__$1 = state_17334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17334__$1,(4),ch);
} else {
if((state_val_17335 === (23))){
var state_17334__$1 = state_17334;
var statearr_17387_17457 = state_17334__$1;
(statearr_17387_17457[(2)] = null);

(statearr_17387_17457[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (35))){
var inst_17316 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
var statearr_17388_17458 = state_17334__$1;
(statearr_17388_17458[(2)] = inst_17316);

(statearr_17388_17458[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (19))){
var inst_17235 = (state_17334[(7)]);
var inst_17239 = cljs.core.chunk_first(inst_17235);
var inst_17240 = cljs.core.chunk_rest(inst_17235);
var inst_17241 = cljs.core.count(inst_17239);
var inst_17215 = inst_17240;
var inst_17216 = inst_17239;
var inst_17217 = inst_17241;
var inst_17218 = (0);
var state_17334__$1 = (function (){var statearr_17389 = state_17334;
(statearr_17389[(13)] = inst_17218);

(statearr_17389[(14)] = inst_17215);

(statearr_17389[(15)] = inst_17217);

(statearr_17389[(16)] = inst_17216);

return statearr_17389;
})();
var statearr_17390_17459 = state_17334__$1;
(statearr_17390_17459[(2)] = null);

(statearr_17390_17459[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (11))){
var inst_17235 = (state_17334[(7)]);
var inst_17215 = (state_17334[(14)]);
var inst_17235__$1 = cljs.core.seq(inst_17215);
var state_17334__$1 = (function (){var statearr_17391 = state_17334;
(statearr_17391[(7)] = inst_17235__$1);

return statearr_17391;
})();
if(inst_17235__$1){
var statearr_17392_17460 = state_17334__$1;
(statearr_17392_17460[(1)] = (16));

} else {
var statearr_17393_17461 = state_17334__$1;
(statearr_17393_17461[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (9))){
var inst_17263 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
var statearr_17394_17462 = state_17334__$1;
(statearr_17394_17462[(2)] = inst_17263);

(statearr_17394_17462[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (5))){
var inst_17213 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17214 = cljs.core.seq(inst_17213);
var inst_17215 = inst_17214;
var inst_17216 = null;
var inst_17217 = (0);
var inst_17218 = (0);
var state_17334__$1 = (function (){var statearr_17395 = state_17334;
(statearr_17395[(13)] = inst_17218);

(statearr_17395[(14)] = inst_17215);

(statearr_17395[(15)] = inst_17217);

(statearr_17395[(16)] = inst_17216);

return statearr_17395;
})();
var statearr_17396_17463 = state_17334__$1;
(statearr_17396_17463[(2)] = null);

(statearr_17396_17463[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (14))){
var state_17334__$1 = state_17334;
var statearr_17397_17464 = state_17334__$1;
(statearr_17397_17464[(2)] = null);

(statearr_17397_17464[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (45))){
var inst_17324 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
var statearr_17398_17465 = state_17334__$1;
(statearr_17398_17465[(2)] = inst_17324);

(statearr_17398_17465[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (26))){
var inst_17266 = (state_17334[(29)]);
var inst_17320 = (state_17334[(2)]);
var inst_17321 = cljs.core.seq(inst_17266);
var state_17334__$1 = (function (){var statearr_17399 = state_17334;
(statearr_17399[(31)] = inst_17320);

return statearr_17399;
})();
if(inst_17321){
var statearr_17400_17466 = state_17334__$1;
(statearr_17400_17466[(1)] = (42));

} else {
var statearr_17401_17467 = state_17334__$1;
(statearr_17401_17467[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (16))){
var inst_17235 = (state_17334[(7)]);
var inst_17237 = cljs.core.chunked_seq_QMARK_(inst_17235);
var state_17334__$1 = state_17334;
if(inst_17237){
var statearr_17402_17468 = state_17334__$1;
(statearr_17402_17468[(1)] = (19));

} else {
var statearr_17403_17469 = state_17334__$1;
(statearr_17403_17469[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (38))){
var inst_17313 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
var statearr_17404_17470 = state_17334__$1;
(statearr_17404_17470[(2)] = inst_17313);

(statearr_17404_17470[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (30))){
var state_17334__$1 = state_17334;
var statearr_17405_17471 = state_17334__$1;
(statearr_17405_17471[(2)] = null);

(statearr_17405_17471[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (10))){
var inst_17218 = (state_17334[(13)]);
var inst_17216 = (state_17334[(16)]);
var inst_17224 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17216,inst_17218);
var inst_17225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17224,(0),null);
var inst_17226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17224,(1),null);
var state_17334__$1 = (function (){var statearr_17406 = state_17334;
(statearr_17406[(26)] = inst_17225);

return statearr_17406;
})();
if(cljs.core.truth_(inst_17226)){
var statearr_17407_17472 = state_17334__$1;
(statearr_17407_17472[(1)] = (13));

} else {
var statearr_17408_17473 = state_17334__$1;
(statearr_17408_17473[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (18))){
var inst_17259 = (state_17334[(2)]);
var state_17334__$1 = state_17334;
var statearr_17409_17474 = state_17334__$1;
(statearr_17409_17474[(2)] = inst_17259);

(statearr_17409_17474[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (42))){
var state_17334__$1 = state_17334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17334__$1,(45),dchan);
} else {
if((state_val_17335 === (37))){
var inst_17293 = (state_17334[(25)]);
var inst_17302 = (state_17334[(23)]);
var inst_17206 = (state_17334[(10)]);
var inst_17302__$1 = cljs.core.first(inst_17293);
var inst_17303 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17302__$1,inst_17206,done);
var state_17334__$1 = (function (){var statearr_17410 = state_17334;
(statearr_17410[(23)] = inst_17302__$1);

return statearr_17410;
})();
if(cljs.core.truth_(inst_17303)){
var statearr_17411_17475 = state_17334__$1;
(statearr_17411_17475[(1)] = (39));

} else {
var statearr_17412_17476 = state_17334__$1;
(statearr_17412_17476[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17335 === (8))){
var inst_17218 = (state_17334[(13)]);
var inst_17217 = (state_17334[(15)]);
var inst_17220 = (inst_17218 < inst_17217);
var inst_17221 = inst_17220;
var state_17334__$1 = state_17334;
if(cljs.core.truth_(inst_17221)){
var statearr_17413_17477 = state_17334__$1;
(statearr_17413_17477[(1)] = (10));

} else {
var statearr_17414_17478 = state_17334__$1;
(statearr_17414_17478[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___17424,cs,m,dchan,dctr,done))
;
return ((function (switch__15991__auto__,c__16105__auto___17424,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15992__auto__ = null;
var cljs$core$async$mult_$_state_machine__15992__auto____0 = (function (){
var statearr_17418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17418[(0)] = cljs$core$async$mult_$_state_machine__15992__auto__);

(statearr_17418[(1)] = (1));

return statearr_17418;
});
var cljs$core$async$mult_$_state_machine__15992__auto____1 = (function (state_17334){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_17334);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e17419){if((e17419 instanceof Object)){
var ex__15995__auto__ = e17419;
var statearr_17420_17479 = state_17334;
(statearr_17420_17479[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17334);

return cljs.core.cst$kw$recur;
} else {
throw e17419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__17480 = state_17334;
state_17334 = G__17480;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15992__auto__ = function(state_17334){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15992__auto____1.call(this,state_17334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15992__auto____0;
cljs$core$async$mult_$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15992__auto____1;
return cljs$core$async$mult_$_state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___17424,cs,m,dchan,dctr,done))
})();
var state__16107__auto__ = (function (){var statearr_17421 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_17421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___17424);

return statearr_17421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___17424,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args17481 = [];
var len__7542__auto___17484 = arguments.length;
var i__7543__auto___17485 = (0);
while(true){
if((i__7543__auto___17485 < len__7542__auto___17484)){
args17481.push((arguments[i__7543__auto___17485]));

var G__17486 = (i__7543__auto___17485 + (1));
i__7543__auto___17485 = G__17486;
continue;
} else {
}
break;
}

var G__17483 = args17481.length;
switch (G__17483) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17481.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7139__auto__ = (((m == null))?null:m);
var m__7140__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7140__auto__.call(null,m,ch));
} else {
var m__7140__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7140__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7139__auto__ = (((m == null))?null:m);
var m__7140__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7140__auto__.call(null,m,ch));
} else {
var m__7140__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7140__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7139__auto__ = (((m == null))?null:m);
var m__7140__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7140__auto__.call(null,m));
} else {
var m__7140__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7140__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7139__auto__ = (((m == null))?null:m);
var m__7140__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7140__auto__.call(null,m,state_map));
} else {
var m__7140__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7140__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7139__auto__ = (((m == null))?null:m);
var m__7140__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7140__auto__.call(null,m,mode));
} else {
var m__7140__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7140__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7549__auto__ = [];
var len__7542__auto___17498 = arguments.length;
var i__7543__auto___17499 = (0);
while(true){
if((i__7543__auto___17499 < len__7542__auto___17498)){
args__7549__auto__.push((arguments[i__7543__auto___17499]));

var G__17500 = (i__7543__auto___17499 + (1));
i__7543__auto___17499 = G__17500;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((3) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7550__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17492){
var map__17493 = p__17492;
var map__17493__$1 = ((((!((map__17493 == null)))?((((map__17493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17493):map__17493);
var opts = map__17493__$1;
var statearr_17495_17501 = state;
(statearr_17495_17501[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17493,map__17493__$1,opts){
return (function (val){
var statearr_17496_17502 = state;
(statearr_17496_17502[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17493,map__17493__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17497_17503 = state;
(statearr_17497_17503[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17488){
var G__17489 = cljs.core.first(seq17488);
var seq17488__$1 = cljs.core.next(seq17488);
var G__17490 = cljs.core.first(seq17488__$1);
var seq17488__$2 = cljs.core.next(seq17488__$1);
var G__17491 = cljs.core.first(seq17488__$2);
var seq17488__$3 = cljs.core.next(seq17488__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17489,G__17490,G__17491,seq17488__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__17670 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17670) : cljs.core.atom.call(null,G__17670));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17671 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17672){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17672 = meta17672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17673,meta17672__$1){
var self__ = this;
var _17673__$1 = this;
return (new cljs.core.async.t_cljs$core$async17671(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17672__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17673){
var self__ = this;
var _17673__$1 = this;
return self__.meta17672;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17674_17836 = self__.cs;
var G__17675_17837 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17674_17836,G__17675_17837) : cljs.core.reset_BANG_.call(null,G__17674_17836,G__17675_17837));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17671.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17671.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17672], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17671";

cljs.core.async.t_cljs$core$async17671.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17671");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17671 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17671(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17672){
return (new cljs.core.async.t_cljs$core$async17671(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17672));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17671(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16105__auto___17838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___17838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___17838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17773){
var state_val_17774 = (state_17773[(1)]);
if((state_val_17774 === (7))){
var inst_17691 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17775_17839 = state_17773__$1;
(statearr_17775_17839[(2)] = inst_17691);

(statearr_17775_17839[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (20))){
var inst_17703 = (state_17773[(7)]);
var state_17773__$1 = state_17773;
var statearr_17776_17840 = state_17773__$1;
(statearr_17776_17840[(2)] = inst_17703);

(statearr_17776_17840[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (27))){
var state_17773__$1 = state_17773;
var statearr_17777_17841 = state_17773__$1;
(statearr_17777_17841[(2)] = null);

(statearr_17777_17841[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (1))){
var inst_17679 = (state_17773[(8)]);
var inst_17679__$1 = calc_state();
var inst_17681 = (inst_17679__$1 == null);
var inst_17682 = cljs.core.not(inst_17681);
var state_17773__$1 = (function (){var statearr_17778 = state_17773;
(statearr_17778[(8)] = inst_17679__$1);

return statearr_17778;
})();
if(inst_17682){
var statearr_17779_17842 = state_17773__$1;
(statearr_17779_17842[(1)] = (2));

} else {
var statearr_17780_17843 = state_17773__$1;
(statearr_17780_17843[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (24))){
var inst_17747 = (state_17773[(9)]);
var inst_17726 = (state_17773[(10)]);
var inst_17733 = (state_17773[(11)]);
var inst_17747__$1 = (inst_17726.cljs$core$IFn$_invoke$arity$1 ? inst_17726.cljs$core$IFn$_invoke$arity$1(inst_17733) : inst_17726.call(null,inst_17733));
var state_17773__$1 = (function (){var statearr_17781 = state_17773;
(statearr_17781[(9)] = inst_17747__$1);

return statearr_17781;
})();
if(cljs.core.truth_(inst_17747__$1)){
var statearr_17782_17844 = state_17773__$1;
(statearr_17782_17844[(1)] = (29));

} else {
var statearr_17783_17845 = state_17773__$1;
(statearr_17783_17845[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (4))){
var inst_17694 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17694)){
var statearr_17784_17846 = state_17773__$1;
(statearr_17784_17846[(1)] = (8));

} else {
var statearr_17785_17847 = state_17773__$1;
(statearr_17785_17847[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (15))){
var inst_17720 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17720)){
var statearr_17786_17848 = state_17773__$1;
(statearr_17786_17848[(1)] = (19));

} else {
var statearr_17787_17849 = state_17773__$1;
(statearr_17787_17849[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (21))){
var inst_17725 = (state_17773[(12)]);
var inst_17725__$1 = (state_17773[(2)]);
var inst_17726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17725__$1,cljs.core.cst$kw$solos);
var inst_17727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17725__$1,cljs.core.cst$kw$mutes);
var inst_17728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17725__$1,cljs.core.cst$kw$reads);
var state_17773__$1 = (function (){var statearr_17788 = state_17773;
(statearr_17788[(13)] = inst_17727);

(statearr_17788[(10)] = inst_17726);

(statearr_17788[(12)] = inst_17725__$1);

return statearr_17788;
})();
return cljs.core.async.ioc_alts_BANG_(state_17773__$1,(22),inst_17728);
} else {
if((state_val_17774 === (31))){
var inst_17755 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17755)){
var statearr_17789_17850 = state_17773__$1;
(statearr_17789_17850[(1)] = (32));

} else {
var statearr_17790_17851 = state_17773__$1;
(statearr_17790_17851[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (32))){
var inst_17732 = (state_17773[(14)]);
var state_17773__$1 = state_17773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17773__$1,(35),out,inst_17732);
} else {
if((state_val_17774 === (33))){
var inst_17725 = (state_17773[(12)]);
var inst_17703 = inst_17725;
var state_17773__$1 = (function (){var statearr_17791 = state_17773;
(statearr_17791[(7)] = inst_17703);

return statearr_17791;
})();
var statearr_17792_17852 = state_17773__$1;
(statearr_17792_17852[(2)] = null);

(statearr_17792_17852[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (13))){
var inst_17703 = (state_17773[(7)]);
var inst_17710 = inst_17703.cljs$lang$protocol_mask$partition0$;
var inst_17711 = (inst_17710 & (64));
var inst_17712 = inst_17703.cljs$core$ISeq$;
var inst_17713 = (inst_17711) || (inst_17712);
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17713)){
var statearr_17793_17853 = state_17773__$1;
(statearr_17793_17853[(1)] = (16));

} else {
var statearr_17794_17854 = state_17773__$1;
(statearr_17794_17854[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (22))){
var inst_17732 = (state_17773[(14)]);
var inst_17733 = (state_17773[(11)]);
var inst_17731 = (state_17773[(2)]);
var inst_17732__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17731,(0),null);
var inst_17733__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17731,(1),null);
var inst_17734 = (inst_17732__$1 == null);
var inst_17735 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17733__$1,change);
var inst_17736 = (inst_17734) || (inst_17735);
var state_17773__$1 = (function (){var statearr_17795 = state_17773;
(statearr_17795[(14)] = inst_17732__$1);

(statearr_17795[(11)] = inst_17733__$1);

return statearr_17795;
})();
if(cljs.core.truth_(inst_17736)){
var statearr_17796_17855 = state_17773__$1;
(statearr_17796_17855[(1)] = (23));

} else {
var statearr_17797_17856 = state_17773__$1;
(statearr_17797_17856[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (36))){
var inst_17725 = (state_17773[(12)]);
var inst_17703 = inst_17725;
var state_17773__$1 = (function (){var statearr_17798 = state_17773;
(statearr_17798[(7)] = inst_17703);

return statearr_17798;
})();
var statearr_17799_17857 = state_17773__$1;
(statearr_17799_17857[(2)] = null);

(statearr_17799_17857[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (29))){
var inst_17747 = (state_17773[(9)]);
var state_17773__$1 = state_17773;
var statearr_17800_17858 = state_17773__$1;
(statearr_17800_17858[(2)] = inst_17747);

(statearr_17800_17858[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (6))){
var state_17773__$1 = state_17773;
var statearr_17801_17859 = state_17773__$1;
(statearr_17801_17859[(2)] = false);

(statearr_17801_17859[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (28))){
var inst_17743 = (state_17773[(2)]);
var inst_17744 = calc_state();
var inst_17703 = inst_17744;
var state_17773__$1 = (function (){var statearr_17802 = state_17773;
(statearr_17802[(15)] = inst_17743);

(statearr_17802[(7)] = inst_17703);

return statearr_17802;
})();
var statearr_17803_17860 = state_17773__$1;
(statearr_17803_17860[(2)] = null);

(statearr_17803_17860[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (25))){
var inst_17769 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17804_17861 = state_17773__$1;
(statearr_17804_17861[(2)] = inst_17769);

(statearr_17804_17861[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (34))){
var inst_17767 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17805_17862 = state_17773__$1;
(statearr_17805_17862[(2)] = inst_17767);

(statearr_17805_17862[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (17))){
var state_17773__$1 = state_17773;
var statearr_17806_17863 = state_17773__$1;
(statearr_17806_17863[(2)] = false);

(statearr_17806_17863[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (3))){
var state_17773__$1 = state_17773;
var statearr_17807_17864 = state_17773__$1;
(statearr_17807_17864[(2)] = false);

(statearr_17807_17864[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (12))){
var inst_17771 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17773__$1,inst_17771);
} else {
if((state_val_17774 === (2))){
var inst_17679 = (state_17773[(8)]);
var inst_17684 = inst_17679.cljs$lang$protocol_mask$partition0$;
var inst_17685 = (inst_17684 & (64));
var inst_17686 = inst_17679.cljs$core$ISeq$;
var inst_17687 = (inst_17685) || (inst_17686);
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17687)){
var statearr_17808_17865 = state_17773__$1;
(statearr_17808_17865[(1)] = (5));

} else {
var statearr_17809_17866 = state_17773__$1;
(statearr_17809_17866[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (23))){
var inst_17732 = (state_17773[(14)]);
var inst_17738 = (inst_17732 == null);
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17738)){
var statearr_17810_17867 = state_17773__$1;
(statearr_17810_17867[(1)] = (26));

} else {
var statearr_17811_17868 = state_17773__$1;
(statearr_17811_17868[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (35))){
var inst_17758 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
if(cljs.core.truth_(inst_17758)){
var statearr_17812_17869 = state_17773__$1;
(statearr_17812_17869[(1)] = (36));

} else {
var statearr_17813_17870 = state_17773__$1;
(statearr_17813_17870[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (19))){
var inst_17703 = (state_17773[(7)]);
var inst_17722 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17703);
var state_17773__$1 = state_17773;
var statearr_17814_17871 = state_17773__$1;
(statearr_17814_17871[(2)] = inst_17722);

(statearr_17814_17871[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (11))){
var inst_17703 = (state_17773[(7)]);
var inst_17707 = (inst_17703 == null);
var inst_17708 = cljs.core.not(inst_17707);
var state_17773__$1 = state_17773;
if(inst_17708){
var statearr_17815_17872 = state_17773__$1;
(statearr_17815_17872[(1)] = (13));

} else {
var statearr_17816_17873 = state_17773__$1;
(statearr_17816_17873[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (9))){
var inst_17679 = (state_17773[(8)]);
var state_17773__$1 = state_17773;
var statearr_17817_17874 = state_17773__$1;
(statearr_17817_17874[(2)] = inst_17679);

(statearr_17817_17874[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (5))){
var state_17773__$1 = state_17773;
var statearr_17818_17875 = state_17773__$1;
(statearr_17818_17875[(2)] = true);

(statearr_17818_17875[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (14))){
var state_17773__$1 = state_17773;
var statearr_17819_17876 = state_17773__$1;
(statearr_17819_17876[(2)] = false);

(statearr_17819_17876[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (26))){
var inst_17733 = (state_17773[(11)]);
var inst_17740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17733);
var state_17773__$1 = state_17773;
var statearr_17820_17877 = state_17773__$1;
(statearr_17820_17877[(2)] = inst_17740);

(statearr_17820_17877[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (16))){
var state_17773__$1 = state_17773;
var statearr_17821_17878 = state_17773__$1;
(statearr_17821_17878[(2)] = true);

(statearr_17821_17878[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (38))){
var inst_17763 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17822_17879 = state_17773__$1;
(statearr_17822_17879[(2)] = inst_17763);

(statearr_17822_17879[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (30))){
var inst_17727 = (state_17773[(13)]);
var inst_17726 = (state_17773[(10)]);
var inst_17733 = (state_17773[(11)]);
var inst_17750 = cljs.core.empty_QMARK_(inst_17726);
var inst_17751 = (inst_17727.cljs$core$IFn$_invoke$arity$1 ? inst_17727.cljs$core$IFn$_invoke$arity$1(inst_17733) : inst_17727.call(null,inst_17733));
var inst_17752 = cljs.core.not(inst_17751);
var inst_17753 = (inst_17750) && (inst_17752);
var state_17773__$1 = state_17773;
var statearr_17823_17880 = state_17773__$1;
(statearr_17823_17880[(2)] = inst_17753);

(statearr_17823_17880[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (10))){
var inst_17679 = (state_17773[(8)]);
var inst_17699 = (state_17773[(2)]);
var inst_17700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17699,cljs.core.cst$kw$solos);
var inst_17701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17699,cljs.core.cst$kw$mutes);
var inst_17702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17699,cljs.core.cst$kw$reads);
var inst_17703 = inst_17679;
var state_17773__$1 = (function (){var statearr_17824 = state_17773;
(statearr_17824[(16)] = inst_17702);

(statearr_17824[(17)] = inst_17700);

(statearr_17824[(7)] = inst_17703);

(statearr_17824[(18)] = inst_17701);

return statearr_17824;
})();
var statearr_17825_17881 = state_17773__$1;
(statearr_17825_17881[(2)] = null);

(statearr_17825_17881[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (18))){
var inst_17717 = (state_17773[(2)]);
var state_17773__$1 = state_17773;
var statearr_17826_17882 = state_17773__$1;
(statearr_17826_17882[(2)] = inst_17717);

(statearr_17826_17882[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (37))){
var state_17773__$1 = state_17773;
var statearr_17827_17883 = state_17773__$1;
(statearr_17827_17883[(2)] = null);

(statearr_17827_17883[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17774 === (8))){
var inst_17679 = (state_17773[(8)]);
var inst_17696 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17679);
var state_17773__$1 = state_17773;
var statearr_17828_17884 = state_17773__$1;
(statearr_17828_17884[(2)] = inst_17696);

(statearr_17828_17884[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___17838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15991__auto__,c__16105__auto___17838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15992__auto__ = null;
var cljs$core$async$mix_$_state_machine__15992__auto____0 = (function (){
var statearr_17832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17832[(0)] = cljs$core$async$mix_$_state_machine__15992__auto__);

(statearr_17832[(1)] = (1));

return statearr_17832;
});
var cljs$core$async$mix_$_state_machine__15992__auto____1 = (function (state_17773){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_17773);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e17833){if((e17833 instanceof Object)){
var ex__15995__auto__ = e17833;
var statearr_17834_17885 = state_17773;
(statearr_17834_17885[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17773);

return cljs.core.cst$kw$recur;
} else {
throw e17833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__17886 = state_17773;
state_17773 = G__17886;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15992__auto__ = function(state_17773){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15992__auto____1.call(this,state_17773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15992__auto____0;
cljs$core$async$mix_$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15992__auto____1;
return cljs$core$async$mix_$_state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___17838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16107__auto__ = (function (){var statearr_17835 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_17835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___17838);

return statearr_17835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___17838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7139__auto__ = (((p == null))?null:p);
var m__7140__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7140__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7140__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7140__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7139__auto__ = (((p == null))?null:p);
var m__7140__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7140__auto__.call(null,p,v,ch));
} else {
var m__7140__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7140__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17887 = [];
var len__7542__auto___17890 = arguments.length;
var i__7543__auto___17891 = (0);
while(true){
if((i__7543__auto___17891 < len__7542__auto___17890)){
args17887.push((arguments[i__7543__auto___17891]));

var G__17892 = (i__7543__auto___17891 + (1));
i__7543__auto___17891 = G__17892;
continue;
} else {
}
break;
}

var G__17889 = args17887.length;
switch (G__17889) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17887.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7139__auto__ = (((p == null))?null:p);
var m__7140__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7140__auto__.call(null,p));
} else {
var m__7140__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7140__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7139__auto__ = (((p == null))?null:p);
var m__7140__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7139__auto__)]);
if(!((m__7140__auto__ == null))){
return (m__7140__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7140__auto__.call(null,p,v));
} else {
var m__7140__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7140__auto____$1 == null))){
return (m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7140__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7140__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args17895 = [];
var len__7542__auto___18023 = arguments.length;
var i__7543__auto___18024 = (0);
while(true){
if((i__7543__auto___18024 < len__7542__auto___18023)){
args17895.push((arguments[i__7543__auto___18024]));

var G__18025 = (i__7543__auto___18024 + (1));
i__7543__auto___18024 = G__18025;
continue;
} else {
}
break;
}

var G__17897 = args17895.length;
switch (G__17897) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17895.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17898 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17898) : cljs.core.atom.call(null,G__17898));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6484__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6484__auto__,mults){
return (function (p1__17894_SHARP_){
if(cljs.core.truth_((p1__17894_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17894_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17894_SHARP_.call(null,topic)))){
return p1__17894_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17894_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6484__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17899 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17900){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17900 = meta17900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17901,meta17900__$1){
var self__ = this;
var _17901__$1 = this;
return (new cljs.core.async.t_cljs$core$async17899(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17900__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17901){
var self__ = this;
var _17901__$1 = this;
return self__.meta17900;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17902 = self__.mults;
var G__17903 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17902,G__17903) : cljs.core.reset_BANG_.call(null,G__17902,G__17903));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17899.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17900], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17899";

cljs.core.async.t_cljs$core$async17899.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17899");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17899 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17900){
return (new cljs.core.async.t_cljs$core$async17899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17900));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17899(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16105__auto___18027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___18027,mults,ensure_mult,p){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___18027,mults,ensure_mult,p){
return (function (state_17975){
var state_val_17976 = (state_17975[(1)]);
if((state_val_17976 === (7))){
var inst_17971 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17977_18028 = state_17975__$1;
(statearr_17977_18028[(2)] = inst_17971);

(statearr_17977_18028[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (20))){
var state_17975__$1 = state_17975;
var statearr_17978_18029 = state_17975__$1;
(statearr_17978_18029[(2)] = null);

(statearr_17978_18029[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (1))){
var state_17975__$1 = state_17975;
var statearr_17979_18030 = state_17975__$1;
(statearr_17979_18030[(2)] = null);

(statearr_17979_18030[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (24))){
var inst_17954 = (state_17975[(7)]);
var inst_17963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17954);
var state_17975__$1 = state_17975;
var statearr_17980_18031 = state_17975__$1;
(statearr_17980_18031[(2)] = inst_17963);

(statearr_17980_18031[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (4))){
var inst_17906 = (state_17975[(8)]);
var inst_17906__$1 = (state_17975[(2)]);
var inst_17907 = (inst_17906__$1 == null);
var state_17975__$1 = (function (){var statearr_17981 = state_17975;
(statearr_17981[(8)] = inst_17906__$1);

return statearr_17981;
})();
if(cljs.core.truth_(inst_17907)){
var statearr_17982_18032 = state_17975__$1;
(statearr_17982_18032[(1)] = (5));

} else {
var statearr_17983_18033 = state_17975__$1;
(statearr_17983_18033[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (15))){
var inst_17948 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17984_18034 = state_17975__$1;
(statearr_17984_18034[(2)] = inst_17948);

(statearr_17984_18034[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (21))){
var inst_17968 = (state_17975[(2)]);
var state_17975__$1 = (function (){var statearr_17985 = state_17975;
(statearr_17985[(9)] = inst_17968);

return statearr_17985;
})();
var statearr_17986_18035 = state_17975__$1;
(statearr_17986_18035[(2)] = null);

(statearr_17986_18035[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (13))){
var inst_17930 = (state_17975[(10)]);
var inst_17932 = cljs.core.chunked_seq_QMARK_(inst_17930);
var state_17975__$1 = state_17975;
if(inst_17932){
var statearr_17987_18036 = state_17975__$1;
(statearr_17987_18036[(1)] = (16));

} else {
var statearr_17988_18037 = state_17975__$1;
(statearr_17988_18037[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (22))){
var inst_17960 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
if(cljs.core.truth_(inst_17960)){
var statearr_17989_18038 = state_17975__$1;
(statearr_17989_18038[(1)] = (23));

} else {
var statearr_17990_18039 = state_17975__$1;
(statearr_17990_18039[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (6))){
var inst_17906 = (state_17975[(8)]);
var inst_17954 = (state_17975[(7)]);
var inst_17956 = (state_17975[(11)]);
var inst_17954__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17906) : topic_fn.call(null,inst_17906));
var inst_17955 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17955,inst_17954__$1);
var state_17975__$1 = (function (){var statearr_17991 = state_17975;
(statearr_17991[(7)] = inst_17954__$1);

(statearr_17991[(11)] = inst_17956__$1);

return statearr_17991;
})();
if(cljs.core.truth_(inst_17956__$1)){
var statearr_17992_18040 = state_17975__$1;
(statearr_17992_18040[(1)] = (19));

} else {
var statearr_17993_18041 = state_17975__$1;
(statearr_17993_18041[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (25))){
var inst_17965 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17994_18042 = state_17975__$1;
(statearr_17994_18042[(2)] = inst_17965);

(statearr_17994_18042[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (17))){
var inst_17930 = (state_17975[(10)]);
var inst_17939 = cljs.core.first(inst_17930);
var inst_17940 = cljs.core.async.muxch_STAR_(inst_17939);
var inst_17941 = cljs.core.async.close_BANG_(inst_17940);
var inst_17942 = cljs.core.next(inst_17930);
var inst_17916 = inst_17942;
var inst_17917 = null;
var inst_17918 = (0);
var inst_17919 = (0);
var state_17975__$1 = (function (){var statearr_17995 = state_17975;
(statearr_17995[(12)] = inst_17941);

(statearr_17995[(13)] = inst_17916);

(statearr_17995[(14)] = inst_17919);

(statearr_17995[(15)] = inst_17917);

(statearr_17995[(16)] = inst_17918);

return statearr_17995;
})();
var statearr_17996_18043 = state_17975__$1;
(statearr_17996_18043[(2)] = null);

(statearr_17996_18043[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (3))){
var inst_17973 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17975__$1,inst_17973);
} else {
if((state_val_17976 === (12))){
var inst_17950 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_17997_18044 = state_17975__$1;
(statearr_17997_18044[(2)] = inst_17950);

(statearr_17997_18044[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (2))){
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17975__$1,(4),ch);
} else {
if((state_val_17976 === (23))){
var state_17975__$1 = state_17975;
var statearr_17998_18045 = state_17975__$1;
(statearr_17998_18045[(2)] = null);

(statearr_17998_18045[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (19))){
var inst_17906 = (state_17975[(8)]);
var inst_17956 = (state_17975[(11)]);
var inst_17958 = cljs.core.async.muxch_STAR_(inst_17956);
var state_17975__$1 = state_17975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17975__$1,(22),inst_17958,inst_17906);
} else {
if((state_val_17976 === (11))){
var inst_17916 = (state_17975[(13)]);
var inst_17930 = (state_17975[(10)]);
var inst_17930__$1 = cljs.core.seq(inst_17916);
var state_17975__$1 = (function (){var statearr_17999 = state_17975;
(statearr_17999[(10)] = inst_17930__$1);

return statearr_17999;
})();
if(inst_17930__$1){
var statearr_18000_18046 = state_17975__$1;
(statearr_18000_18046[(1)] = (13));

} else {
var statearr_18001_18047 = state_17975__$1;
(statearr_18001_18047[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (9))){
var inst_17952 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_18002_18048 = state_17975__$1;
(statearr_18002_18048[(2)] = inst_17952);

(statearr_18002_18048[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (5))){
var inst_17913 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17914 = cljs.core.vals(inst_17913);
var inst_17915 = cljs.core.seq(inst_17914);
var inst_17916 = inst_17915;
var inst_17917 = null;
var inst_17918 = (0);
var inst_17919 = (0);
var state_17975__$1 = (function (){var statearr_18003 = state_17975;
(statearr_18003[(13)] = inst_17916);

(statearr_18003[(14)] = inst_17919);

(statearr_18003[(15)] = inst_17917);

(statearr_18003[(16)] = inst_17918);

return statearr_18003;
})();
var statearr_18004_18049 = state_17975__$1;
(statearr_18004_18049[(2)] = null);

(statearr_18004_18049[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (14))){
var state_17975__$1 = state_17975;
var statearr_18008_18050 = state_17975__$1;
(statearr_18008_18050[(2)] = null);

(statearr_18008_18050[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (16))){
var inst_17930 = (state_17975[(10)]);
var inst_17934 = cljs.core.chunk_first(inst_17930);
var inst_17935 = cljs.core.chunk_rest(inst_17930);
var inst_17936 = cljs.core.count(inst_17934);
var inst_17916 = inst_17935;
var inst_17917 = inst_17934;
var inst_17918 = inst_17936;
var inst_17919 = (0);
var state_17975__$1 = (function (){var statearr_18009 = state_17975;
(statearr_18009[(13)] = inst_17916);

(statearr_18009[(14)] = inst_17919);

(statearr_18009[(15)] = inst_17917);

(statearr_18009[(16)] = inst_17918);

return statearr_18009;
})();
var statearr_18010_18051 = state_17975__$1;
(statearr_18010_18051[(2)] = null);

(statearr_18010_18051[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (10))){
var inst_17916 = (state_17975[(13)]);
var inst_17919 = (state_17975[(14)]);
var inst_17917 = (state_17975[(15)]);
var inst_17918 = (state_17975[(16)]);
var inst_17924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17917,inst_17919);
var inst_17925 = cljs.core.async.muxch_STAR_(inst_17924);
var inst_17926 = cljs.core.async.close_BANG_(inst_17925);
var inst_17927 = (inst_17919 + (1));
var tmp18005 = inst_17916;
var tmp18006 = inst_17917;
var tmp18007 = inst_17918;
var inst_17916__$1 = tmp18005;
var inst_17917__$1 = tmp18006;
var inst_17918__$1 = tmp18007;
var inst_17919__$1 = inst_17927;
var state_17975__$1 = (function (){var statearr_18011 = state_17975;
(statearr_18011[(13)] = inst_17916__$1);

(statearr_18011[(14)] = inst_17919__$1);

(statearr_18011[(15)] = inst_17917__$1);

(statearr_18011[(17)] = inst_17926);

(statearr_18011[(16)] = inst_17918__$1);

return statearr_18011;
})();
var statearr_18012_18052 = state_17975__$1;
(statearr_18012_18052[(2)] = null);

(statearr_18012_18052[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (18))){
var inst_17945 = (state_17975[(2)]);
var state_17975__$1 = state_17975;
var statearr_18013_18053 = state_17975__$1;
(statearr_18013_18053[(2)] = inst_17945);

(statearr_18013_18053[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17976 === (8))){
var inst_17919 = (state_17975[(14)]);
var inst_17918 = (state_17975[(16)]);
var inst_17921 = (inst_17919 < inst_17918);
var inst_17922 = inst_17921;
var state_17975__$1 = state_17975;
if(cljs.core.truth_(inst_17922)){
var statearr_18014_18054 = state_17975__$1;
(statearr_18014_18054[(1)] = (10));

} else {
var statearr_18015_18055 = state_17975__$1;
(statearr_18015_18055[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___18027,mults,ensure_mult,p))
;
return ((function (switch__15991__auto__,c__16105__auto___18027,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_18019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18019[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_18019[(1)] = (1));

return statearr_18019;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_17975){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_17975);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e18020){if((e18020 instanceof Object)){
var ex__15995__auto__ = e18020;
var statearr_18021_18056 = state_17975;
(statearr_18021_18056[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17975);

return cljs.core.cst$kw$recur;
} else {
throw e18020;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__18057 = state_17975;
state_17975 = G__18057;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_17975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_17975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___18027,mults,ensure_mult,p))
})();
var state__16107__auto__ = (function (){var statearr_18022 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_18022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___18027);

return statearr_18022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___18027,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args18058 = [];
var len__7542__auto___18061 = arguments.length;
var i__7543__auto___18062 = (0);
while(true){
if((i__7543__auto___18062 < len__7542__auto___18061)){
args18058.push((arguments[i__7543__auto___18062]));

var G__18063 = (i__7543__auto___18062 + (1));
i__7543__auto___18062 = G__18063;
continue;
} else {
}
break;
}

var G__18060 = args18058.length;
switch (G__18060) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18058.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args18065 = [];
var len__7542__auto___18068 = arguments.length;
var i__7543__auto___18069 = (0);
while(true){
if((i__7543__auto___18069 < len__7542__auto___18068)){
args18065.push((arguments[i__7543__auto___18069]));

var G__18070 = (i__7543__auto___18069 + (1));
i__7543__auto___18069 = G__18070;
continue;
} else {
}
break;
}

var G__18067 = args18065.length;
switch (G__18067) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18065.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args18072 = [];
var len__7542__auto___18143 = arguments.length;
var i__7543__auto___18144 = (0);
while(true){
if((i__7543__auto___18144 < len__7542__auto___18143)){
args18072.push((arguments[i__7543__auto___18144]));

var G__18145 = (i__7543__auto___18144 + (1));
i__7543__auto___18144 = G__18145;
continue;
} else {
}
break;
}

var G__18074 = args18072.length;
switch (G__18074) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18072.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16105__auto___18147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___18147,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___18147,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18113){
var state_val_18114 = (state_18113[(1)]);
if((state_val_18114 === (7))){
var state_18113__$1 = state_18113;
var statearr_18115_18148 = state_18113__$1;
(statearr_18115_18148[(2)] = null);

(statearr_18115_18148[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (1))){
var state_18113__$1 = state_18113;
var statearr_18116_18149 = state_18113__$1;
(statearr_18116_18149[(2)] = null);

(statearr_18116_18149[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (4))){
var inst_18077 = (state_18113[(7)]);
var inst_18079 = (inst_18077 < cnt);
var state_18113__$1 = state_18113;
if(cljs.core.truth_(inst_18079)){
var statearr_18117_18150 = state_18113__$1;
(statearr_18117_18150[(1)] = (6));

} else {
var statearr_18118_18151 = state_18113__$1;
(statearr_18118_18151[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (15))){
var inst_18109 = (state_18113[(2)]);
var state_18113__$1 = state_18113;
var statearr_18119_18152 = state_18113__$1;
(statearr_18119_18152[(2)] = inst_18109);

(statearr_18119_18152[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (13))){
var inst_18102 = cljs.core.async.close_BANG_(out);
var state_18113__$1 = state_18113;
var statearr_18120_18153 = state_18113__$1;
(statearr_18120_18153[(2)] = inst_18102);

(statearr_18120_18153[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (6))){
var state_18113__$1 = state_18113;
var statearr_18121_18154 = state_18113__$1;
(statearr_18121_18154[(2)] = null);

(statearr_18121_18154[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (3))){
var inst_18111 = (state_18113[(2)]);
var state_18113__$1 = state_18113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18113__$1,inst_18111);
} else {
if((state_val_18114 === (12))){
var inst_18099 = (state_18113[(8)]);
var inst_18099__$1 = (state_18113[(2)]);
var inst_18100 = cljs.core.some(cljs.core.nil_QMARK_,inst_18099__$1);
var state_18113__$1 = (function (){var statearr_18122 = state_18113;
(statearr_18122[(8)] = inst_18099__$1);

return statearr_18122;
})();
if(cljs.core.truth_(inst_18100)){
var statearr_18123_18155 = state_18113__$1;
(statearr_18123_18155[(1)] = (13));

} else {
var statearr_18124_18156 = state_18113__$1;
(statearr_18124_18156[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (2))){
var inst_18076 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_18077 = (0);
var state_18113__$1 = (function (){var statearr_18125 = state_18113;
(statearr_18125[(9)] = inst_18076);

(statearr_18125[(7)] = inst_18077);

return statearr_18125;
})();
var statearr_18126_18157 = state_18113__$1;
(statearr_18126_18157[(2)] = null);

(statearr_18126_18157[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (11))){
var inst_18077 = (state_18113[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18113,(10),Object,null,(9));
var inst_18086 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18077) : chs__$1.call(null,inst_18077));
var inst_18087 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18077) : done.call(null,inst_18077));
var inst_18088 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18086,inst_18087);
var state_18113__$1 = state_18113;
var statearr_18127_18158 = state_18113__$1;
(statearr_18127_18158[(2)] = inst_18088);


cljs.core.async.impl.ioc_helpers.process_exception(state_18113__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (9))){
var inst_18077 = (state_18113[(7)]);
var inst_18090 = (state_18113[(2)]);
var inst_18091 = (inst_18077 + (1));
var inst_18077__$1 = inst_18091;
var state_18113__$1 = (function (){var statearr_18128 = state_18113;
(statearr_18128[(10)] = inst_18090);

(statearr_18128[(7)] = inst_18077__$1);

return statearr_18128;
})();
var statearr_18129_18159 = state_18113__$1;
(statearr_18129_18159[(2)] = null);

(statearr_18129_18159[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (5))){
var inst_18097 = (state_18113[(2)]);
var state_18113__$1 = (function (){var statearr_18130 = state_18113;
(statearr_18130[(11)] = inst_18097);

return statearr_18130;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18113__$1,(12),dchan);
} else {
if((state_val_18114 === (14))){
var inst_18099 = (state_18113[(8)]);
var inst_18104 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18099);
var state_18113__$1 = state_18113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18113__$1,(16),out,inst_18104);
} else {
if((state_val_18114 === (16))){
var inst_18106 = (state_18113[(2)]);
var state_18113__$1 = (function (){var statearr_18131 = state_18113;
(statearr_18131[(12)] = inst_18106);

return statearr_18131;
})();
var statearr_18132_18160 = state_18113__$1;
(statearr_18132_18160[(2)] = null);

(statearr_18132_18160[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (10))){
var inst_18081 = (state_18113[(2)]);
var inst_18082 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18113__$1 = (function (){var statearr_18133 = state_18113;
(statearr_18133[(13)] = inst_18081);

return statearr_18133;
})();
var statearr_18134_18161 = state_18113__$1;
(statearr_18134_18161[(2)] = inst_18082);


cljs.core.async.impl.ioc_helpers.process_exception(state_18113__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18114 === (8))){
var inst_18095 = (state_18113[(2)]);
var state_18113__$1 = state_18113;
var statearr_18135_18162 = state_18113__$1;
(statearr_18135_18162[(2)] = inst_18095);

(statearr_18135_18162[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___18147,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15991__auto__,c__16105__auto___18147,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_18139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18139[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_18139[(1)] = (1));

return statearr_18139;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_18113){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_18113);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e18140){if((e18140 instanceof Object)){
var ex__15995__auto__ = e18140;
var statearr_18141_18163 = state_18113;
(statearr_18141_18163[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18113);

return cljs.core.cst$kw$recur;
} else {
throw e18140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__18164 = state_18113;
state_18113 = G__18164;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_18113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_18113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___18147,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16107__auto__ = (function (){var statearr_18142 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_18142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___18147);

return statearr_18142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___18147,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args18166 = [];
var len__7542__auto___18222 = arguments.length;
var i__7543__auto___18223 = (0);
while(true){
if((i__7543__auto___18223 < len__7542__auto___18222)){
args18166.push((arguments[i__7543__auto___18223]));

var G__18224 = (i__7543__auto___18223 + (1));
i__7543__auto___18223 = G__18224;
continue;
} else {
}
break;
}

var G__18168 = args18166.length;
switch (G__18168) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18166.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16105__auto___18226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___18226,out){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___18226,out){
return (function (state_18198){
var state_val_18199 = (state_18198[(1)]);
if((state_val_18199 === (7))){
var inst_18178 = (state_18198[(7)]);
var inst_18177 = (state_18198[(8)]);
var inst_18177__$1 = (state_18198[(2)]);
var inst_18178__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18177__$1,(0),null);
var inst_18179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18177__$1,(1),null);
var inst_18180 = (inst_18178__$1 == null);
var state_18198__$1 = (function (){var statearr_18200 = state_18198;
(statearr_18200[(7)] = inst_18178__$1);

(statearr_18200[(9)] = inst_18179);

(statearr_18200[(8)] = inst_18177__$1);

return statearr_18200;
})();
if(cljs.core.truth_(inst_18180)){
var statearr_18201_18227 = state_18198__$1;
(statearr_18201_18227[(1)] = (8));

} else {
var statearr_18202_18228 = state_18198__$1;
(statearr_18202_18228[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18199 === (1))){
var inst_18169 = cljs.core.vec(chs);
var inst_18170 = inst_18169;
var state_18198__$1 = (function (){var statearr_18203 = state_18198;
(statearr_18203[(10)] = inst_18170);

return statearr_18203;
})();
var statearr_18204_18229 = state_18198__$1;
(statearr_18204_18229[(2)] = null);

(statearr_18204_18229[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18199 === (4))){
var inst_18170 = (state_18198[(10)]);
var state_18198__$1 = state_18198;
return cljs.core.async.ioc_alts_BANG_(state_18198__$1,(7),inst_18170);
} else {
if((state_val_18199 === (6))){
var inst_18194 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18205_18230 = state_18198__$1;
(statearr_18205_18230[(2)] = inst_18194);

(statearr_18205_18230[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18199 === (3))){
var inst_18196 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18198__$1,inst_18196);
} else {
if((state_val_18199 === (2))){
var inst_18170 = (state_18198[(10)]);
var inst_18172 = cljs.core.count(inst_18170);
var inst_18173 = (inst_18172 > (0));
var state_18198__$1 = state_18198;
if(cljs.core.truth_(inst_18173)){
var statearr_18207_18231 = state_18198__$1;
(statearr_18207_18231[(1)] = (4));

} else {
var statearr_18208_18232 = state_18198__$1;
(statearr_18208_18232[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18199 === (11))){
var inst_18170 = (state_18198[(10)]);
var inst_18187 = (state_18198[(2)]);
var tmp18206 = inst_18170;
var inst_18170__$1 = tmp18206;
var state_18198__$1 = (function (){var statearr_18209 = state_18198;
(statearr_18209[(11)] = inst_18187);

(statearr_18209[(10)] = inst_18170__$1);

return statearr_18209;
})();
var statearr_18210_18233 = state_18198__$1;
(statearr_18210_18233[(2)] = null);

(statearr_18210_18233[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18199 === (9))){
var inst_18178 = (state_18198[(7)]);
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18198__$1,(11),out,inst_18178);
} else {
if((state_val_18199 === (5))){
var inst_18192 = cljs.core.async.close_BANG_(out);
var state_18198__$1 = state_18198;
var statearr_18211_18234 = state_18198__$1;
(statearr_18211_18234[(2)] = inst_18192);

(statearr_18211_18234[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18199 === (10))){
var inst_18190 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18212_18235 = state_18198__$1;
(statearr_18212_18235[(2)] = inst_18190);

(statearr_18212_18235[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18199 === (8))){
var inst_18178 = (state_18198[(7)]);
var inst_18170 = (state_18198[(10)]);
var inst_18179 = (state_18198[(9)]);
var inst_18177 = (state_18198[(8)]);
var inst_18182 = (function (){var cs = inst_18170;
var vec__18175 = inst_18177;
var v = inst_18178;
var c = inst_18179;
return ((function (cs,vec__18175,v,c,inst_18178,inst_18170,inst_18179,inst_18177,state_val_18199,c__16105__auto___18226,out){
return (function (p1__18165_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18165_SHARP_);
});
;})(cs,vec__18175,v,c,inst_18178,inst_18170,inst_18179,inst_18177,state_val_18199,c__16105__auto___18226,out))
})();
var inst_18183 = cljs.core.filterv(inst_18182,inst_18170);
var inst_18170__$1 = inst_18183;
var state_18198__$1 = (function (){var statearr_18213 = state_18198;
(statearr_18213[(10)] = inst_18170__$1);

return statearr_18213;
})();
var statearr_18214_18236 = state_18198__$1;
(statearr_18214_18236[(2)] = null);

(statearr_18214_18236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___18226,out))
;
return ((function (switch__15991__auto__,c__16105__auto___18226,out){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_18218 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18218[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_18218[(1)] = (1));

return statearr_18218;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_18198){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_18198);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e18219){if((e18219 instanceof Object)){
var ex__15995__auto__ = e18219;
var statearr_18220_18237 = state_18198;
(statearr_18220_18237[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18198);

return cljs.core.cst$kw$recur;
} else {
throw e18219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__18238 = state_18198;
state_18198 = G__18238;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_18198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_18198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___18226,out))
})();
var state__16107__auto__ = (function (){var statearr_18221 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_18221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___18226);

return statearr_18221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___18226,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args18239 = [];
var len__7542__auto___18288 = arguments.length;
var i__7543__auto___18289 = (0);
while(true){
if((i__7543__auto___18289 < len__7542__auto___18288)){
args18239.push((arguments[i__7543__auto___18289]));

var G__18290 = (i__7543__auto___18289 + (1));
i__7543__auto___18289 = G__18290;
continue;
} else {
}
break;
}

var G__18241 = args18239.length;
switch (G__18241) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18239.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16105__auto___18292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___18292,out){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___18292,out){
return (function (state_18265){
var state_val_18266 = (state_18265[(1)]);
if((state_val_18266 === (7))){
var inst_18247 = (state_18265[(7)]);
var inst_18247__$1 = (state_18265[(2)]);
var inst_18248 = (inst_18247__$1 == null);
var inst_18249 = cljs.core.not(inst_18248);
var state_18265__$1 = (function (){var statearr_18267 = state_18265;
(statearr_18267[(7)] = inst_18247__$1);

return statearr_18267;
})();
if(inst_18249){
var statearr_18268_18293 = state_18265__$1;
(statearr_18268_18293[(1)] = (8));

} else {
var statearr_18269_18294 = state_18265__$1;
(statearr_18269_18294[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (1))){
var inst_18242 = (0);
var state_18265__$1 = (function (){var statearr_18270 = state_18265;
(statearr_18270[(8)] = inst_18242);

return statearr_18270;
})();
var statearr_18271_18295 = state_18265__$1;
(statearr_18271_18295[(2)] = null);

(statearr_18271_18295[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (4))){
var state_18265__$1 = state_18265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18265__$1,(7),ch);
} else {
if((state_val_18266 === (6))){
var inst_18260 = (state_18265[(2)]);
var state_18265__$1 = state_18265;
var statearr_18272_18296 = state_18265__$1;
(statearr_18272_18296[(2)] = inst_18260);

(statearr_18272_18296[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (3))){
var inst_18262 = (state_18265[(2)]);
var inst_18263 = cljs.core.async.close_BANG_(out);
var state_18265__$1 = (function (){var statearr_18273 = state_18265;
(statearr_18273[(9)] = inst_18262);

return statearr_18273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18265__$1,inst_18263);
} else {
if((state_val_18266 === (2))){
var inst_18242 = (state_18265[(8)]);
var inst_18244 = (inst_18242 < n);
var state_18265__$1 = state_18265;
if(cljs.core.truth_(inst_18244)){
var statearr_18274_18297 = state_18265__$1;
(statearr_18274_18297[(1)] = (4));

} else {
var statearr_18275_18298 = state_18265__$1;
(statearr_18275_18298[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (11))){
var inst_18242 = (state_18265[(8)]);
var inst_18252 = (state_18265[(2)]);
var inst_18253 = (inst_18242 + (1));
var inst_18242__$1 = inst_18253;
var state_18265__$1 = (function (){var statearr_18276 = state_18265;
(statearr_18276[(10)] = inst_18252);

(statearr_18276[(8)] = inst_18242__$1);

return statearr_18276;
})();
var statearr_18277_18299 = state_18265__$1;
(statearr_18277_18299[(2)] = null);

(statearr_18277_18299[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (9))){
var state_18265__$1 = state_18265;
var statearr_18278_18300 = state_18265__$1;
(statearr_18278_18300[(2)] = null);

(statearr_18278_18300[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (5))){
var state_18265__$1 = state_18265;
var statearr_18279_18301 = state_18265__$1;
(statearr_18279_18301[(2)] = null);

(statearr_18279_18301[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (10))){
var inst_18257 = (state_18265[(2)]);
var state_18265__$1 = state_18265;
var statearr_18280_18302 = state_18265__$1;
(statearr_18280_18302[(2)] = inst_18257);

(statearr_18280_18302[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18266 === (8))){
var inst_18247 = (state_18265[(7)]);
var state_18265__$1 = state_18265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18265__$1,(11),out,inst_18247);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___18292,out))
;
return ((function (switch__15991__auto__,c__16105__auto___18292,out){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_18284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18284[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_18284[(1)] = (1));

return statearr_18284;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_18265){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_18265);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e18285){if((e18285 instanceof Object)){
var ex__15995__auto__ = e18285;
var statearr_18286_18303 = state_18265;
(statearr_18286_18303[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18265);

return cljs.core.cst$kw$recur;
} else {
throw e18285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__18304 = state_18265;
state_18265 = G__18304;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_18265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_18265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___18292,out))
})();
var state__16107__auto__ = (function (){var statearr_18287 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_18287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___18292);

return statearr_18287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___18292,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18314 = (function (map_LT_,f,ch,meta18315){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18315 = meta18315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18316,meta18315__$1){
var self__ = this;
var _18316__$1 = this;
return (new cljs.core.async.t_cljs$core$async18314(self__.map_LT_,self__.f,self__.ch,meta18315__$1));
});

cljs.core.async.t_cljs$core$async18314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18316){
var self__ = this;
var _18316__$1 = this;
return self__.meta18315;
});

cljs.core.async.t_cljs$core$async18314.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18314.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18314.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18317 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18317 = (function (map_LT_,f,ch,meta18315,_,fn1,meta18318){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18315 = meta18315;
this._ = _;
this.fn1 = fn1;
this.meta18318 = meta18318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18319,meta18318__$1){
var self__ = this;
var _18319__$1 = this;
return (new cljs.core.async.t_cljs$core$async18317(self__.map_LT_,self__.f,self__.ch,self__.meta18315,self__._,self__.fn1,meta18318__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18319){
var self__ = this;
var _18319__$1 = this;
return self__.meta18318;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18305_SHARP_){
var G__18320 = (((p1__18305_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18305_SHARP_) : self__.f.call(null,p1__18305_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18320) : f1.call(null,G__18320));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18317.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18315,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18314], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18318], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18317.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18317";

cljs.core.async.t_cljs$core$async18317.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18317");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18317 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18317(map_LT___$1,f__$1,ch__$1,meta18315__$1,___$2,fn1__$1,meta18318){
return (new cljs.core.async.t_cljs$core$async18317(map_LT___$1,f__$1,ch__$1,meta18315__$1,___$2,fn1__$1,meta18318));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18317(self__.map_LT_,self__.f,self__.ch,self__.meta18315,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6472__auto__ = ret;
if(cljs.core.truth_(and__6472__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6472__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18321 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18321) : self__.f.call(null,G__18321));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18314.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18315], null);
});

cljs.core.async.t_cljs$core$async18314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18314";

cljs.core.async.t_cljs$core$async18314.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18314");
});

cljs.core.async.__GT_t_cljs$core$async18314 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18314(map_LT___$1,f__$1,ch__$1,meta18315){
return (new cljs.core.async.t_cljs$core$async18314(map_LT___$1,f__$1,ch__$1,meta18315));
});

}

return (new cljs.core.async.t_cljs$core$async18314(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18325 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18325 = (function (map_GT_,f,ch,meta18326){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18326 = meta18326;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18327,meta18326__$1){
var self__ = this;
var _18327__$1 = this;
return (new cljs.core.async.t_cljs$core$async18325(self__.map_GT_,self__.f,self__.ch,meta18326__$1));
});

cljs.core.async.t_cljs$core$async18325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18327){
var self__ = this;
var _18327__$1 = this;
return self__.meta18326;
});

cljs.core.async.t_cljs$core$async18325.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18325.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18325.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18325.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18325.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18325.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18325.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18326], null);
});

cljs.core.async.t_cljs$core$async18325.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18325.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18325";

cljs.core.async.t_cljs$core$async18325.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18325");
});

cljs.core.async.__GT_t_cljs$core$async18325 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18325(map_GT___$1,f__$1,ch__$1,meta18326){
return (new cljs.core.async.t_cljs$core$async18325(map_GT___$1,f__$1,ch__$1,meta18326));
});

}

return (new cljs.core.async.t_cljs$core$async18325(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18331 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18331 = (function (filter_GT_,p,ch,meta18332){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18332 = meta18332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18333,meta18332__$1){
var self__ = this;
var _18333__$1 = this;
return (new cljs.core.async.t_cljs$core$async18331(self__.filter_GT_,self__.p,self__.ch,meta18332__$1));
});

cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18333){
var self__ = this;
var _18333__$1 = this;
return self__.meta18332;
});

cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18332], null);
});

cljs.core.async.t_cljs$core$async18331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18331";

cljs.core.async.t_cljs$core$async18331.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18331");
});

cljs.core.async.__GT_t_cljs$core$async18331 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18331(filter_GT___$1,p__$1,ch__$1,meta18332){
return (new cljs.core.async.t_cljs$core$async18331(filter_GT___$1,p__$1,ch__$1,meta18332));
});

}

return (new cljs.core.async.t_cljs$core$async18331(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args18334 = [];
var len__7542__auto___18378 = arguments.length;
var i__7543__auto___18379 = (0);
while(true){
if((i__7543__auto___18379 < len__7542__auto___18378)){
args18334.push((arguments[i__7543__auto___18379]));

var G__18380 = (i__7543__auto___18379 + (1));
i__7543__auto___18379 = G__18380;
continue;
} else {
}
break;
}

var G__18336 = args18334.length;
switch (G__18336) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18334.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16105__auto___18382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___18382,out){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___18382,out){
return (function (state_18357){
var state_val_18358 = (state_18357[(1)]);
if((state_val_18358 === (7))){
var inst_18353 = (state_18357[(2)]);
var state_18357__$1 = state_18357;
var statearr_18359_18383 = state_18357__$1;
(statearr_18359_18383[(2)] = inst_18353);

(statearr_18359_18383[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18358 === (1))){
var state_18357__$1 = state_18357;
var statearr_18360_18384 = state_18357__$1;
(statearr_18360_18384[(2)] = null);

(statearr_18360_18384[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18358 === (4))){
var inst_18339 = (state_18357[(7)]);
var inst_18339__$1 = (state_18357[(2)]);
var inst_18340 = (inst_18339__$1 == null);
var state_18357__$1 = (function (){var statearr_18361 = state_18357;
(statearr_18361[(7)] = inst_18339__$1);

return statearr_18361;
})();
if(cljs.core.truth_(inst_18340)){
var statearr_18362_18385 = state_18357__$1;
(statearr_18362_18385[(1)] = (5));

} else {
var statearr_18363_18386 = state_18357__$1;
(statearr_18363_18386[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18358 === (6))){
var inst_18339 = (state_18357[(7)]);
var inst_18344 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18339) : p.call(null,inst_18339));
var state_18357__$1 = state_18357;
if(cljs.core.truth_(inst_18344)){
var statearr_18364_18387 = state_18357__$1;
(statearr_18364_18387[(1)] = (8));

} else {
var statearr_18365_18388 = state_18357__$1;
(statearr_18365_18388[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18358 === (3))){
var inst_18355 = (state_18357[(2)]);
var state_18357__$1 = state_18357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18357__$1,inst_18355);
} else {
if((state_val_18358 === (2))){
var state_18357__$1 = state_18357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18357__$1,(4),ch);
} else {
if((state_val_18358 === (11))){
var inst_18347 = (state_18357[(2)]);
var state_18357__$1 = state_18357;
var statearr_18366_18389 = state_18357__$1;
(statearr_18366_18389[(2)] = inst_18347);

(statearr_18366_18389[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18358 === (9))){
var state_18357__$1 = state_18357;
var statearr_18367_18390 = state_18357__$1;
(statearr_18367_18390[(2)] = null);

(statearr_18367_18390[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18358 === (5))){
var inst_18342 = cljs.core.async.close_BANG_(out);
var state_18357__$1 = state_18357;
var statearr_18368_18391 = state_18357__$1;
(statearr_18368_18391[(2)] = inst_18342);

(statearr_18368_18391[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18358 === (10))){
var inst_18350 = (state_18357[(2)]);
var state_18357__$1 = (function (){var statearr_18369 = state_18357;
(statearr_18369[(8)] = inst_18350);

return statearr_18369;
})();
var statearr_18370_18392 = state_18357__$1;
(statearr_18370_18392[(2)] = null);

(statearr_18370_18392[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18358 === (8))){
var inst_18339 = (state_18357[(7)]);
var state_18357__$1 = state_18357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18357__$1,(11),out,inst_18339);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___18382,out))
;
return ((function (switch__15991__auto__,c__16105__auto___18382,out){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_18374 = [null,null,null,null,null,null,null,null,null];
(statearr_18374[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_18374[(1)] = (1));

return statearr_18374;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_18357){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_18357);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e18375){if((e18375 instanceof Object)){
var ex__15995__auto__ = e18375;
var statearr_18376_18393 = state_18357;
(statearr_18376_18393[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18357);

return cljs.core.cst$kw$recur;
} else {
throw e18375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__18394 = state_18357;
state_18357 = G__18394;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_18357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_18357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___18382,out))
})();
var state__16107__auto__ = (function (){var statearr_18377 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_18377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___18382);

return statearr_18377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___18382,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18395 = [];
var len__7542__auto___18398 = arguments.length;
var i__7543__auto___18399 = (0);
while(true){
if((i__7543__auto___18399 < len__7542__auto___18398)){
args18395.push((arguments[i__7543__auto___18399]));

var G__18400 = (i__7543__auto___18399 + (1));
i__7543__auto___18399 = G__18400;
continue;
} else {
}
break;
}

var G__18397 = args18395.length;
switch (G__18397) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18395.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto__){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto__){
return (function (state_18567){
var state_val_18568 = (state_18567[(1)]);
if((state_val_18568 === (7))){
var inst_18563 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
var statearr_18569_18610 = state_18567__$1;
(statearr_18569_18610[(2)] = inst_18563);

(statearr_18569_18610[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (20))){
var inst_18533 = (state_18567[(7)]);
var inst_18544 = (state_18567[(2)]);
var inst_18545 = cljs.core.next(inst_18533);
var inst_18519 = inst_18545;
var inst_18520 = null;
var inst_18521 = (0);
var inst_18522 = (0);
var state_18567__$1 = (function (){var statearr_18570 = state_18567;
(statearr_18570[(8)] = inst_18521);

(statearr_18570[(9)] = inst_18520);

(statearr_18570[(10)] = inst_18519);

(statearr_18570[(11)] = inst_18522);

(statearr_18570[(12)] = inst_18544);

return statearr_18570;
})();
var statearr_18571_18611 = state_18567__$1;
(statearr_18571_18611[(2)] = null);

(statearr_18571_18611[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (1))){
var state_18567__$1 = state_18567;
var statearr_18572_18612 = state_18567__$1;
(statearr_18572_18612[(2)] = null);

(statearr_18572_18612[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (4))){
var inst_18508 = (state_18567[(13)]);
var inst_18508__$1 = (state_18567[(2)]);
var inst_18509 = (inst_18508__$1 == null);
var state_18567__$1 = (function (){var statearr_18573 = state_18567;
(statearr_18573[(13)] = inst_18508__$1);

return statearr_18573;
})();
if(cljs.core.truth_(inst_18509)){
var statearr_18574_18613 = state_18567__$1;
(statearr_18574_18613[(1)] = (5));

} else {
var statearr_18575_18614 = state_18567__$1;
(statearr_18575_18614[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (15))){
var state_18567__$1 = state_18567;
var statearr_18579_18615 = state_18567__$1;
(statearr_18579_18615[(2)] = null);

(statearr_18579_18615[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (21))){
var state_18567__$1 = state_18567;
var statearr_18580_18616 = state_18567__$1;
(statearr_18580_18616[(2)] = null);

(statearr_18580_18616[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (13))){
var inst_18521 = (state_18567[(8)]);
var inst_18520 = (state_18567[(9)]);
var inst_18519 = (state_18567[(10)]);
var inst_18522 = (state_18567[(11)]);
var inst_18529 = (state_18567[(2)]);
var inst_18530 = (inst_18522 + (1));
var tmp18576 = inst_18521;
var tmp18577 = inst_18520;
var tmp18578 = inst_18519;
var inst_18519__$1 = tmp18578;
var inst_18520__$1 = tmp18577;
var inst_18521__$1 = tmp18576;
var inst_18522__$1 = inst_18530;
var state_18567__$1 = (function (){var statearr_18581 = state_18567;
(statearr_18581[(8)] = inst_18521__$1);

(statearr_18581[(9)] = inst_18520__$1);

(statearr_18581[(14)] = inst_18529);

(statearr_18581[(10)] = inst_18519__$1);

(statearr_18581[(11)] = inst_18522__$1);

return statearr_18581;
})();
var statearr_18582_18617 = state_18567__$1;
(statearr_18582_18617[(2)] = null);

(statearr_18582_18617[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (22))){
var state_18567__$1 = state_18567;
var statearr_18583_18618 = state_18567__$1;
(statearr_18583_18618[(2)] = null);

(statearr_18583_18618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (6))){
var inst_18508 = (state_18567[(13)]);
var inst_18517 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18508) : f.call(null,inst_18508));
var inst_18518 = cljs.core.seq(inst_18517);
var inst_18519 = inst_18518;
var inst_18520 = null;
var inst_18521 = (0);
var inst_18522 = (0);
var state_18567__$1 = (function (){var statearr_18584 = state_18567;
(statearr_18584[(8)] = inst_18521);

(statearr_18584[(9)] = inst_18520);

(statearr_18584[(10)] = inst_18519);

(statearr_18584[(11)] = inst_18522);

return statearr_18584;
})();
var statearr_18585_18619 = state_18567__$1;
(statearr_18585_18619[(2)] = null);

(statearr_18585_18619[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (17))){
var inst_18533 = (state_18567[(7)]);
var inst_18537 = cljs.core.chunk_first(inst_18533);
var inst_18538 = cljs.core.chunk_rest(inst_18533);
var inst_18539 = cljs.core.count(inst_18537);
var inst_18519 = inst_18538;
var inst_18520 = inst_18537;
var inst_18521 = inst_18539;
var inst_18522 = (0);
var state_18567__$1 = (function (){var statearr_18586 = state_18567;
(statearr_18586[(8)] = inst_18521);

(statearr_18586[(9)] = inst_18520);

(statearr_18586[(10)] = inst_18519);

(statearr_18586[(11)] = inst_18522);

return statearr_18586;
})();
var statearr_18587_18620 = state_18567__$1;
(statearr_18587_18620[(2)] = null);

(statearr_18587_18620[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (3))){
var inst_18565 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18567__$1,inst_18565);
} else {
if((state_val_18568 === (12))){
var inst_18553 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
var statearr_18588_18621 = state_18567__$1;
(statearr_18588_18621[(2)] = inst_18553);

(statearr_18588_18621[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (2))){
var state_18567__$1 = state_18567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18567__$1,(4),in$);
} else {
if((state_val_18568 === (23))){
var inst_18561 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
var statearr_18589_18622 = state_18567__$1;
(statearr_18589_18622[(2)] = inst_18561);

(statearr_18589_18622[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (19))){
var inst_18548 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
var statearr_18590_18623 = state_18567__$1;
(statearr_18590_18623[(2)] = inst_18548);

(statearr_18590_18623[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (11))){
var inst_18519 = (state_18567[(10)]);
var inst_18533 = (state_18567[(7)]);
var inst_18533__$1 = cljs.core.seq(inst_18519);
var state_18567__$1 = (function (){var statearr_18591 = state_18567;
(statearr_18591[(7)] = inst_18533__$1);

return statearr_18591;
})();
if(inst_18533__$1){
var statearr_18592_18624 = state_18567__$1;
(statearr_18592_18624[(1)] = (14));

} else {
var statearr_18593_18625 = state_18567__$1;
(statearr_18593_18625[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (9))){
var inst_18555 = (state_18567[(2)]);
var inst_18556 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18567__$1 = (function (){var statearr_18594 = state_18567;
(statearr_18594[(15)] = inst_18555);

return statearr_18594;
})();
if(cljs.core.truth_(inst_18556)){
var statearr_18595_18626 = state_18567__$1;
(statearr_18595_18626[(1)] = (21));

} else {
var statearr_18596_18627 = state_18567__$1;
(statearr_18596_18627[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (5))){
var inst_18511 = cljs.core.async.close_BANG_(out);
var state_18567__$1 = state_18567;
var statearr_18597_18628 = state_18567__$1;
(statearr_18597_18628[(2)] = inst_18511);

(statearr_18597_18628[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (14))){
var inst_18533 = (state_18567[(7)]);
var inst_18535 = cljs.core.chunked_seq_QMARK_(inst_18533);
var state_18567__$1 = state_18567;
if(inst_18535){
var statearr_18598_18629 = state_18567__$1;
(statearr_18598_18629[(1)] = (17));

} else {
var statearr_18599_18630 = state_18567__$1;
(statearr_18599_18630[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (16))){
var inst_18551 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
var statearr_18600_18631 = state_18567__$1;
(statearr_18600_18631[(2)] = inst_18551);

(statearr_18600_18631[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18568 === (10))){
var inst_18520 = (state_18567[(9)]);
var inst_18522 = (state_18567[(11)]);
var inst_18527 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18520,inst_18522);
var state_18567__$1 = state_18567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18567__$1,(13),out,inst_18527);
} else {
if((state_val_18568 === (18))){
var inst_18533 = (state_18567[(7)]);
var inst_18542 = cljs.core.first(inst_18533);
var state_18567__$1 = state_18567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18567__$1,(20),out,inst_18542);
} else {
if((state_val_18568 === (8))){
var inst_18521 = (state_18567[(8)]);
var inst_18522 = (state_18567[(11)]);
var inst_18524 = (inst_18522 < inst_18521);
var inst_18525 = inst_18524;
var state_18567__$1 = state_18567;
if(cljs.core.truth_(inst_18525)){
var statearr_18601_18632 = state_18567__$1;
(statearr_18601_18632[(1)] = (10));

} else {
var statearr_18602_18633 = state_18567__$1;
(statearr_18602_18633[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto__))
;
return ((function (switch__15991__auto__,c__16105__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15992__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15992__auto____0 = (function (){
var statearr_18606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18606[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15992__auto__);

(statearr_18606[(1)] = (1));

return statearr_18606;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15992__auto____1 = (function (state_18567){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_18567);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e18607){if((e18607 instanceof Object)){
var ex__15995__auto__ = e18607;
var statearr_18608_18634 = state_18567;
(statearr_18608_18634[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18567);

return cljs.core.cst$kw$recur;
} else {
throw e18607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__18635 = state_18567;
state_18567 = G__18635;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15992__auto__ = function(state_18567){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15992__auto____1.call(this,state_18567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15992__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15992__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto__))
})();
var state__16107__auto__ = (function (){var statearr_18609 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_18609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto__);

return statearr_18609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto__))
);

return c__16105__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18636 = [];
var len__7542__auto___18639 = arguments.length;
var i__7543__auto___18640 = (0);
while(true){
if((i__7543__auto___18640 < len__7542__auto___18639)){
args18636.push((arguments[i__7543__auto___18640]));

var G__18641 = (i__7543__auto___18640 + (1));
i__7543__auto___18640 = G__18641;
continue;
} else {
}
break;
}

var G__18638 = args18636.length;
switch (G__18638) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18636.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18643 = [];
var len__7542__auto___18646 = arguments.length;
var i__7543__auto___18647 = (0);
while(true){
if((i__7543__auto___18647 < len__7542__auto___18646)){
args18643.push((arguments[i__7543__auto___18647]));

var G__18648 = (i__7543__auto___18647 + (1));
i__7543__auto___18647 = G__18648;
continue;
} else {
}
break;
}

var G__18645 = args18643.length;
switch (G__18645) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18643.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args18650 = [];
var len__7542__auto___18701 = arguments.length;
var i__7543__auto___18702 = (0);
while(true){
if((i__7543__auto___18702 < len__7542__auto___18701)){
args18650.push((arguments[i__7543__auto___18702]));

var G__18703 = (i__7543__auto___18702 + (1));
i__7543__auto___18702 = G__18703;
continue;
} else {
}
break;
}

var G__18652 = args18650.length;
switch (G__18652) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18650.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16105__auto___18705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___18705,out){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___18705,out){
return (function (state_18676){
var state_val_18677 = (state_18676[(1)]);
if((state_val_18677 === (7))){
var inst_18671 = (state_18676[(2)]);
var state_18676__$1 = state_18676;
var statearr_18678_18706 = state_18676__$1;
(statearr_18678_18706[(2)] = inst_18671);

(statearr_18678_18706[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18677 === (1))){
var inst_18653 = null;
var state_18676__$1 = (function (){var statearr_18679 = state_18676;
(statearr_18679[(7)] = inst_18653);

return statearr_18679;
})();
var statearr_18680_18707 = state_18676__$1;
(statearr_18680_18707[(2)] = null);

(statearr_18680_18707[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18677 === (4))){
var inst_18656 = (state_18676[(8)]);
var inst_18656__$1 = (state_18676[(2)]);
var inst_18657 = (inst_18656__$1 == null);
var inst_18658 = cljs.core.not(inst_18657);
var state_18676__$1 = (function (){var statearr_18681 = state_18676;
(statearr_18681[(8)] = inst_18656__$1);

return statearr_18681;
})();
if(inst_18658){
var statearr_18682_18708 = state_18676__$1;
(statearr_18682_18708[(1)] = (5));

} else {
var statearr_18683_18709 = state_18676__$1;
(statearr_18683_18709[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18677 === (6))){
var state_18676__$1 = state_18676;
var statearr_18684_18710 = state_18676__$1;
(statearr_18684_18710[(2)] = null);

(statearr_18684_18710[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18677 === (3))){
var inst_18673 = (state_18676[(2)]);
var inst_18674 = cljs.core.async.close_BANG_(out);
var state_18676__$1 = (function (){var statearr_18685 = state_18676;
(statearr_18685[(9)] = inst_18673);

return statearr_18685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18676__$1,inst_18674);
} else {
if((state_val_18677 === (2))){
var state_18676__$1 = state_18676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18676__$1,(4),ch);
} else {
if((state_val_18677 === (11))){
var inst_18656 = (state_18676[(8)]);
var inst_18665 = (state_18676[(2)]);
var inst_18653 = inst_18656;
var state_18676__$1 = (function (){var statearr_18686 = state_18676;
(statearr_18686[(7)] = inst_18653);

(statearr_18686[(10)] = inst_18665);

return statearr_18686;
})();
var statearr_18687_18711 = state_18676__$1;
(statearr_18687_18711[(2)] = null);

(statearr_18687_18711[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18677 === (9))){
var inst_18656 = (state_18676[(8)]);
var state_18676__$1 = state_18676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18676__$1,(11),out,inst_18656);
} else {
if((state_val_18677 === (5))){
var inst_18656 = (state_18676[(8)]);
var inst_18653 = (state_18676[(7)]);
var inst_18660 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18656,inst_18653);
var state_18676__$1 = state_18676;
if(inst_18660){
var statearr_18689_18712 = state_18676__$1;
(statearr_18689_18712[(1)] = (8));

} else {
var statearr_18690_18713 = state_18676__$1;
(statearr_18690_18713[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18677 === (10))){
var inst_18668 = (state_18676[(2)]);
var state_18676__$1 = state_18676;
var statearr_18691_18714 = state_18676__$1;
(statearr_18691_18714[(2)] = inst_18668);

(statearr_18691_18714[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18677 === (8))){
var inst_18653 = (state_18676[(7)]);
var tmp18688 = inst_18653;
var inst_18653__$1 = tmp18688;
var state_18676__$1 = (function (){var statearr_18692 = state_18676;
(statearr_18692[(7)] = inst_18653__$1);

return statearr_18692;
})();
var statearr_18693_18715 = state_18676__$1;
(statearr_18693_18715[(2)] = null);

(statearr_18693_18715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___18705,out))
;
return ((function (switch__15991__auto__,c__16105__auto___18705,out){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_18697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18697[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_18697[(1)] = (1));

return statearr_18697;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_18676){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_18676);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e18698){if((e18698 instanceof Object)){
var ex__15995__auto__ = e18698;
var statearr_18699_18716 = state_18676;
(statearr_18699_18716[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18676);

return cljs.core.cst$kw$recur;
} else {
throw e18698;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__18717 = state_18676;
state_18676 = G__18717;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_18676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_18676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___18705,out))
})();
var state__16107__auto__ = (function (){var statearr_18700 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_18700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___18705);

return statearr_18700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___18705,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18718 = [];
var len__7542__auto___18788 = arguments.length;
var i__7543__auto___18789 = (0);
while(true){
if((i__7543__auto___18789 < len__7542__auto___18788)){
args18718.push((arguments[i__7543__auto___18789]));

var G__18790 = (i__7543__auto___18789 + (1));
i__7543__auto___18789 = G__18790;
continue;
} else {
}
break;
}

var G__18720 = args18718.length;
switch (G__18720) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18718.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16105__auto___18792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___18792,out){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___18792,out){
return (function (state_18758){
var state_val_18759 = (state_18758[(1)]);
if((state_val_18759 === (7))){
var inst_18754 = (state_18758[(2)]);
var state_18758__$1 = state_18758;
var statearr_18760_18793 = state_18758__$1;
(statearr_18760_18793[(2)] = inst_18754);

(statearr_18760_18793[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (1))){
var inst_18721 = (new Array(n));
var inst_18722 = inst_18721;
var inst_18723 = (0);
var state_18758__$1 = (function (){var statearr_18761 = state_18758;
(statearr_18761[(7)] = inst_18722);

(statearr_18761[(8)] = inst_18723);

return statearr_18761;
})();
var statearr_18762_18794 = state_18758__$1;
(statearr_18762_18794[(2)] = null);

(statearr_18762_18794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (4))){
var inst_18726 = (state_18758[(9)]);
var inst_18726__$1 = (state_18758[(2)]);
var inst_18727 = (inst_18726__$1 == null);
var inst_18728 = cljs.core.not(inst_18727);
var state_18758__$1 = (function (){var statearr_18763 = state_18758;
(statearr_18763[(9)] = inst_18726__$1);

return statearr_18763;
})();
if(inst_18728){
var statearr_18764_18795 = state_18758__$1;
(statearr_18764_18795[(1)] = (5));

} else {
var statearr_18765_18796 = state_18758__$1;
(statearr_18765_18796[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (15))){
var inst_18748 = (state_18758[(2)]);
var state_18758__$1 = state_18758;
var statearr_18766_18797 = state_18758__$1;
(statearr_18766_18797[(2)] = inst_18748);

(statearr_18766_18797[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (13))){
var state_18758__$1 = state_18758;
var statearr_18767_18798 = state_18758__$1;
(statearr_18767_18798[(2)] = null);

(statearr_18767_18798[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (6))){
var inst_18723 = (state_18758[(8)]);
var inst_18744 = (inst_18723 > (0));
var state_18758__$1 = state_18758;
if(cljs.core.truth_(inst_18744)){
var statearr_18768_18799 = state_18758__$1;
(statearr_18768_18799[(1)] = (12));

} else {
var statearr_18769_18800 = state_18758__$1;
(statearr_18769_18800[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (3))){
var inst_18756 = (state_18758[(2)]);
var state_18758__$1 = state_18758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18758__$1,inst_18756);
} else {
if((state_val_18759 === (12))){
var inst_18722 = (state_18758[(7)]);
var inst_18746 = cljs.core.vec(inst_18722);
var state_18758__$1 = state_18758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18758__$1,(15),out,inst_18746);
} else {
if((state_val_18759 === (2))){
var state_18758__$1 = state_18758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18758__$1,(4),ch);
} else {
if((state_val_18759 === (11))){
var inst_18738 = (state_18758[(2)]);
var inst_18739 = (new Array(n));
var inst_18722 = inst_18739;
var inst_18723 = (0);
var state_18758__$1 = (function (){var statearr_18770 = state_18758;
(statearr_18770[(7)] = inst_18722);

(statearr_18770[(8)] = inst_18723);

(statearr_18770[(10)] = inst_18738);

return statearr_18770;
})();
var statearr_18771_18801 = state_18758__$1;
(statearr_18771_18801[(2)] = null);

(statearr_18771_18801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (9))){
var inst_18722 = (state_18758[(7)]);
var inst_18736 = cljs.core.vec(inst_18722);
var state_18758__$1 = state_18758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18758__$1,(11),out,inst_18736);
} else {
if((state_val_18759 === (5))){
var inst_18731 = (state_18758[(11)]);
var inst_18722 = (state_18758[(7)]);
var inst_18723 = (state_18758[(8)]);
var inst_18726 = (state_18758[(9)]);
var inst_18730 = (inst_18722[inst_18723] = inst_18726);
var inst_18731__$1 = (inst_18723 + (1));
var inst_18732 = (inst_18731__$1 < n);
var state_18758__$1 = (function (){var statearr_18772 = state_18758;
(statearr_18772[(11)] = inst_18731__$1);

(statearr_18772[(12)] = inst_18730);

return statearr_18772;
})();
if(cljs.core.truth_(inst_18732)){
var statearr_18773_18802 = state_18758__$1;
(statearr_18773_18802[(1)] = (8));

} else {
var statearr_18774_18803 = state_18758__$1;
(statearr_18774_18803[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (14))){
var inst_18751 = (state_18758[(2)]);
var inst_18752 = cljs.core.async.close_BANG_(out);
var state_18758__$1 = (function (){var statearr_18776 = state_18758;
(statearr_18776[(13)] = inst_18751);

return statearr_18776;
})();
var statearr_18777_18804 = state_18758__$1;
(statearr_18777_18804[(2)] = inst_18752);

(statearr_18777_18804[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (10))){
var inst_18742 = (state_18758[(2)]);
var state_18758__$1 = state_18758;
var statearr_18778_18805 = state_18758__$1;
(statearr_18778_18805[(2)] = inst_18742);

(statearr_18778_18805[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18759 === (8))){
var inst_18731 = (state_18758[(11)]);
var inst_18722 = (state_18758[(7)]);
var tmp18775 = inst_18722;
var inst_18722__$1 = tmp18775;
var inst_18723 = inst_18731;
var state_18758__$1 = (function (){var statearr_18779 = state_18758;
(statearr_18779[(7)] = inst_18722__$1);

(statearr_18779[(8)] = inst_18723);

return statearr_18779;
})();
var statearr_18780_18806 = state_18758__$1;
(statearr_18780_18806[(2)] = null);

(statearr_18780_18806[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___18792,out))
;
return ((function (switch__15991__auto__,c__16105__auto___18792,out){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_18784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18784[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_18784[(1)] = (1));

return statearr_18784;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_18758){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_18758);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e18785){if((e18785 instanceof Object)){
var ex__15995__auto__ = e18785;
var statearr_18786_18807 = state_18758;
(statearr_18786_18807[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18758);

return cljs.core.cst$kw$recur;
} else {
throw e18785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__18808 = state_18758;
state_18758 = G__18808;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_18758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_18758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___18792,out))
})();
var state__16107__auto__ = (function (){var statearr_18787 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_18787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___18792);

return statearr_18787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___18792,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18809 = [];
var len__7542__auto___18883 = arguments.length;
var i__7543__auto___18884 = (0);
while(true){
if((i__7543__auto___18884 < len__7542__auto___18883)){
args18809.push((arguments[i__7543__auto___18884]));

var G__18885 = (i__7543__auto___18884 + (1));
i__7543__auto___18884 = G__18885;
continue;
} else {
}
break;
}

var G__18811 = args18809.length;
switch (G__18811) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18809.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16105__auto___18887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto___18887,out){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto___18887,out){
return (function (state_18853){
var state_val_18854 = (state_18853[(1)]);
if((state_val_18854 === (7))){
var inst_18849 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_18855_18888 = state_18853__$1;
(statearr_18855_18888[(2)] = inst_18849);

(statearr_18855_18888[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (1))){
var inst_18812 = [];
var inst_18813 = inst_18812;
var inst_18814 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18853__$1 = (function (){var statearr_18856 = state_18853;
(statearr_18856[(7)] = inst_18813);

(statearr_18856[(8)] = inst_18814);

return statearr_18856;
})();
var statearr_18857_18889 = state_18853__$1;
(statearr_18857_18889[(2)] = null);

(statearr_18857_18889[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (4))){
var inst_18817 = (state_18853[(9)]);
var inst_18817__$1 = (state_18853[(2)]);
var inst_18818 = (inst_18817__$1 == null);
var inst_18819 = cljs.core.not(inst_18818);
var state_18853__$1 = (function (){var statearr_18858 = state_18853;
(statearr_18858[(9)] = inst_18817__$1);

return statearr_18858;
})();
if(inst_18819){
var statearr_18859_18890 = state_18853__$1;
(statearr_18859_18890[(1)] = (5));

} else {
var statearr_18860_18891 = state_18853__$1;
(statearr_18860_18891[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (15))){
var inst_18843 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_18861_18892 = state_18853__$1;
(statearr_18861_18892[(2)] = inst_18843);

(statearr_18861_18892[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (13))){
var state_18853__$1 = state_18853;
var statearr_18862_18893 = state_18853__$1;
(statearr_18862_18893[(2)] = null);

(statearr_18862_18893[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (6))){
var inst_18813 = (state_18853[(7)]);
var inst_18838 = inst_18813.length;
var inst_18839 = (inst_18838 > (0));
var state_18853__$1 = state_18853;
if(cljs.core.truth_(inst_18839)){
var statearr_18863_18894 = state_18853__$1;
(statearr_18863_18894[(1)] = (12));

} else {
var statearr_18864_18895 = state_18853__$1;
(statearr_18864_18895[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (3))){
var inst_18851 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18853__$1,inst_18851);
} else {
if((state_val_18854 === (12))){
var inst_18813 = (state_18853[(7)]);
var inst_18841 = cljs.core.vec(inst_18813);
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18853__$1,(15),out,inst_18841);
} else {
if((state_val_18854 === (2))){
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18853__$1,(4),ch);
} else {
if((state_val_18854 === (11))){
var inst_18817 = (state_18853[(9)]);
var inst_18821 = (state_18853[(10)]);
var inst_18831 = (state_18853[(2)]);
var inst_18832 = [];
var inst_18833 = inst_18832.push(inst_18817);
var inst_18813 = inst_18832;
var inst_18814 = inst_18821;
var state_18853__$1 = (function (){var statearr_18865 = state_18853;
(statearr_18865[(7)] = inst_18813);

(statearr_18865[(8)] = inst_18814);

(statearr_18865[(11)] = inst_18833);

(statearr_18865[(12)] = inst_18831);

return statearr_18865;
})();
var statearr_18866_18896 = state_18853__$1;
(statearr_18866_18896[(2)] = null);

(statearr_18866_18896[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (9))){
var inst_18813 = (state_18853[(7)]);
var inst_18829 = cljs.core.vec(inst_18813);
var state_18853__$1 = state_18853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18853__$1,(11),out,inst_18829);
} else {
if((state_val_18854 === (5))){
var inst_18817 = (state_18853[(9)]);
var inst_18814 = (state_18853[(8)]);
var inst_18821 = (state_18853[(10)]);
var inst_18821__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18817) : f.call(null,inst_18817));
var inst_18822 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18821__$1,inst_18814);
var inst_18823 = cljs.core.keyword_identical_QMARK_(inst_18814,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18824 = (inst_18822) || (inst_18823);
var state_18853__$1 = (function (){var statearr_18867 = state_18853;
(statearr_18867[(10)] = inst_18821__$1);

return statearr_18867;
})();
if(cljs.core.truth_(inst_18824)){
var statearr_18868_18897 = state_18853__$1;
(statearr_18868_18897[(1)] = (8));

} else {
var statearr_18869_18898 = state_18853__$1;
(statearr_18869_18898[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (14))){
var inst_18846 = (state_18853[(2)]);
var inst_18847 = cljs.core.async.close_BANG_(out);
var state_18853__$1 = (function (){var statearr_18871 = state_18853;
(statearr_18871[(13)] = inst_18846);

return statearr_18871;
})();
var statearr_18872_18899 = state_18853__$1;
(statearr_18872_18899[(2)] = inst_18847);

(statearr_18872_18899[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (10))){
var inst_18836 = (state_18853[(2)]);
var state_18853__$1 = state_18853;
var statearr_18873_18900 = state_18853__$1;
(statearr_18873_18900[(2)] = inst_18836);

(statearr_18873_18900[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18854 === (8))){
var inst_18813 = (state_18853[(7)]);
var inst_18817 = (state_18853[(9)]);
var inst_18821 = (state_18853[(10)]);
var inst_18826 = inst_18813.push(inst_18817);
var tmp18870 = inst_18813;
var inst_18813__$1 = tmp18870;
var inst_18814 = inst_18821;
var state_18853__$1 = (function (){var statearr_18874 = state_18853;
(statearr_18874[(7)] = inst_18813__$1);

(statearr_18874[(8)] = inst_18814);

(statearr_18874[(14)] = inst_18826);

return statearr_18874;
})();
var statearr_18875_18901 = state_18853__$1;
(statearr_18875_18901[(2)] = null);

(statearr_18875_18901[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16105__auto___18887,out))
;
return ((function (switch__15991__auto__,c__16105__auto___18887,out){
return (function() {
var cljs$core$async$state_machine__15992__auto__ = null;
var cljs$core$async$state_machine__15992__auto____0 = (function (){
var statearr_18879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18879[(0)] = cljs$core$async$state_machine__15992__auto__);

(statearr_18879[(1)] = (1));

return statearr_18879;
});
var cljs$core$async$state_machine__15992__auto____1 = (function (state_18853){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_18853);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e18880){if((e18880 instanceof Object)){
var ex__15995__auto__ = e18880;
var statearr_18881_18902 = state_18853;
(statearr_18881_18902[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18853);

return cljs.core.cst$kw$recur;
} else {
throw e18880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__18903 = state_18853;
state_18853 = G__18903;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljs$core$async$state_machine__15992__auto__ = function(state_18853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15992__auto____1.call(this,state_18853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15992__auto____0;
cljs$core$async$state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15992__auto____1;
return cljs$core$async$state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto___18887,out))
})();
var state__16107__auto__ = (function (){var statearr_18882 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_18882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto___18887);

return statearr_18882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto___18887,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
