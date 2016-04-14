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
var args16076 = [];
var len__7542__auto___16082 = arguments.length;
var i__7543__auto___16083 = (0);
while(true){
if((i__7543__auto___16083 < len__7542__auto___16082)){
args16076.push((arguments[i__7543__auto___16083]));

var G__16084 = (i__7543__auto___16083 + (1));
i__7543__auto___16083 = G__16084;
continue;
} else {
}
break;
}

var G__16078 = args16076.length;
switch (G__16078) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16076.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16079 = (function (f,blockable,meta16080){
this.f = f;
this.blockable = blockable;
this.meta16080 = meta16080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16081,meta16080__$1){
var self__ = this;
var _16081__$1 = this;
return (new cljs.core.async.t_cljs$core$async16079(self__.f,self__.blockable,meta16080__$1));
});

cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16081){
var self__ = this;
var _16081__$1 = this;
return self__.meta16080;
});

cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16079.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16080], null);
});

cljs.core.async.t_cljs$core$async16079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16079";

cljs.core.async.t_cljs$core$async16079.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16079");
});

cljs.core.async.__GT_t_cljs$core$async16079 = (function cljs$core$async$__GT_t_cljs$core$async16079(f__$1,blockable__$1,meta16080){
return (new cljs.core.async.t_cljs$core$async16079(f__$1,blockable__$1,meta16080));
});

}

return (new cljs.core.async.t_cljs$core$async16079(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args16088 = [];
var len__7542__auto___16091 = arguments.length;
var i__7543__auto___16092 = (0);
while(true){
if((i__7543__auto___16092 < len__7542__auto___16091)){
args16088.push((arguments[i__7543__auto___16092]));

var G__16093 = (i__7543__auto___16092 + (1));
i__7543__auto___16092 = G__16093;
continue;
} else {
}
break;
}

var G__16090 = args16088.length;
switch (G__16090) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16088.length)].join('')));

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
var args16095 = [];
var len__7542__auto___16098 = arguments.length;
var i__7543__auto___16099 = (0);
while(true){
if((i__7543__auto___16099 < len__7542__auto___16098)){
args16095.push((arguments[i__7543__auto___16099]));

var G__16100 = (i__7543__auto___16099 + (1));
i__7543__auto___16099 = G__16100;
continue;
} else {
}
break;
}

var G__16097 = args16095.length;
switch (G__16097) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16095.length)].join('')));

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
var args16102 = [];
var len__7542__auto___16105 = arguments.length;
var i__7543__auto___16106 = (0);
while(true){
if((i__7543__auto___16106 < len__7542__auto___16105)){
args16102.push((arguments[i__7543__auto___16106]));

var G__16107 = (i__7543__auto___16106 + (1));
i__7543__auto___16106 = G__16107;
continue;
} else {
}
break;
}

var G__16104 = args16102.length;
switch (G__16104) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16102.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16109 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16109) : fn1.call(null,val_16109));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16109,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16109) : fn1.call(null,val_16109));
});})(val_16109,ret))
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
var args16110 = [];
var len__7542__auto___16113 = arguments.length;
var i__7543__auto___16114 = (0);
while(true){
if((i__7543__auto___16114 < len__7542__auto___16113)){
args16110.push((arguments[i__7543__auto___16114]));

var G__16115 = (i__7543__auto___16114 + (1));
i__7543__auto___16114 = G__16115;
continue;
} else {
}
break;
}

var G__16112 = args16110.length;
switch (G__16112) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16110.length)].join('')));

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
var n__7387__auto___16117 = n;
var x_16118 = (0);
while(true){
if((x_16118 < n__7387__auto___16117)){
(a[x_16118] = (0));

var G__16119 = (x_16118 + (1));
x_16118 = G__16119;
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

var G__16120 = (i + (1));
i = G__16120;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16124 = (function (alt_flag,flag,meta16125){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16125 = meta16125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16126,meta16125__$1){
var self__ = this;
var _16126__$1 = this;
return (new cljs.core.async.t_cljs$core$async16124(self__.alt_flag,self__.flag,meta16125__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16126){
var self__ = this;
var _16126__$1 = this;
return self__.meta16125;
});})(flag))
;

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16124.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16125], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16124";

cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16124");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16124 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16124(alt_flag__$1,flag__$1,meta16125){
return (new cljs.core.async.t_cljs$core$async16124(alt_flag__$1,flag__$1,meta16125));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16124(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16130 = (function (alt_handler,flag,cb,meta16131){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16131 = meta16131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16132,meta16131__$1){
var self__ = this;
var _16132__$1 = this;
return (new cljs.core.async.t_cljs$core$async16130(self__.alt_handler,self__.flag,self__.cb,meta16131__$1));
});

cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16132){
var self__ = this;
var _16132__$1 = this;
return self__.meta16131;
});

cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16131], null);
});

cljs.core.async.t_cljs$core$async16130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16130";

cljs.core.async.t_cljs$core$async16130.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16130");
});

cljs.core.async.__GT_t_cljs$core$async16130 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16130(alt_handler__$1,flag__$1,cb__$1,meta16131){
return (new cljs.core.async.t_cljs$core$async16130(alt_handler__$1,flag__$1,cb__$1,meta16131));
});

}

return (new cljs.core.async.t_cljs$core$async16130(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16133_SHARP_){
var G__16137 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16133_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16137) : fret.call(null,G__16137));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16134_SHARP_){
var G__16138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16134_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16138) : fret.call(null,G__16138));
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
var G__16139 = (i + (1));
i = G__16139;
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
var len__7542__auto___16145 = arguments.length;
var i__7543__auto___16146 = (0);
while(true){
if((i__7543__auto___16146 < len__7542__auto___16145)){
args__7549__auto__.push((arguments[i__7543__auto___16146]));

var G__16147 = (i__7543__auto___16146 + (1));
i__7543__auto___16146 = G__16147;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16142){
var map__16143 = p__16142;
var map__16143__$1 = ((((!((map__16143 == null)))?((((map__16143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16143):map__16143);
var opts = map__16143__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16140){
var G__16141 = cljs.core.first(seq16140);
var seq16140__$1 = cljs.core.next(seq16140);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16141,seq16140__$1);
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
var args16148 = [];
var len__7542__auto___16198 = arguments.length;
var i__7543__auto___16199 = (0);
while(true){
if((i__7543__auto___16199 < len__7542__auto___16198)){
args16148.push((arguments[i__7543__auto___16199]));

var G__16200 = (i__7543__auto___16199 + (1));
i__7543__auto___16199 = G__16200;
continue;
} else {
}
break;
}

var G__16150 = args16148.length;
switch (G__16150) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16148.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16031__auto___16202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___16202){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___16202){
return (function (state_16174){
var state_val_16175 = (state_16174[(1)]);
if((state_val_16175 === (7))){
var inst_16170 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
var statearr_16176_16203 = state_16174__$1;
(statearr_16176_16203[(2)] = inst_16170);

(statearr_16176_16203[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (1))){
var state_16174__$1 = state_16174;
var statearr_16177_16204 = state_16174__$1;
(statearr_16177_16204[(2)] = null);

(statearr_16177_16204[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (4))){
var inst_16153 = (state_16174[(7)]);
var inst_16153__$1 = (state_16174[(2)]);
var inst_16154 = (inst_16153__$1 == null);
var state_16174__$1 = (function (){var statearr_16178 = state_16174;
(statearr_16178[(7)] = inst_16153__$1);

return statearr_16178;
})();
if(cljs.core.truth_(inst_16154)){
var statearr_16179_16205 = state_16174__$1;
(statearr_16179_16205[(1)] = (5));

} else {
var statearr_16180_16206 = state_16174__$1;
(statearr_16180_16206[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (13))){
var state_16174__$1 = state_16174;
var statearr_16181_16207 = state_16174__$1;
(statearr_16181_16207[(2)] = null);

(statearr_16181_16207[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (6))){
var inst_16153 = (state_16174[(7)]);
var state_16174__$1 = state_16174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16174__$1,(11),to,inst_16153);
} else {
if((state_val_16175 === (3))){
var inst_16172 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16174__$1,inst_16172);
} else {
if((state_val_16175 === (12))){
var state_16174__$1 = state_16174;
var statearr_16182_16208 = state_16174__$1;
(statearr_16182_16208[(2)] = null);

(statearr_16182_16208[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (2))){
var state_16174__$1 = state_16174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16174__$1,(4),from);
} else {
if((state_val_16175 === (11))){
var inst_16163 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
if(cljs.core.truth_(inst_16163)){
var statearr_16183_16209 = state_16174__$1;
(statearr_16183_16209[(1)] = (12));

} else {
var statearr_16184_16210 = state_16174__$1;
(statearr_16184_16210[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (9))){
var state_16174__$1 = state_16174;
var statearr_16185_16211 = state_16174__$1;
(statearr_16185_16211[(2)] = null);

(statearr_16185_16211[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (5))){
var state_16174__$1 = state_16174;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16186_16212 = state_16174__$1;
(statearr_16186_16212[(1)] = (8));

} else {
var statearr_16187_16213 = state_16174__$1;
(statearr_16187_16213[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (14))){
var inst_16168 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
var statearr_16188_16214 = state_16174__$1;
(statearr_16188_16214[(2)] = inst_16168);

(statearr_16188_16214[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (10))){
var inst_16160 = (state_16174[(2)]);
var state_16174__$1 = state_16174;
var statearr_16189_16215 = state_16174__$1;
(statearr_16189_16215[(2)] = inst_16160);

(statearr_16189_16215[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16175 === (8))){
var inst_16157 = cljs.core.async.close_BANG_(to);
var state_16174__$1 = state_16174;
var statearr_16190_16216 = state_16174__$1;
(statearr_16190_16216[(2)] = inst_16157);

(statearr_16190_16216[(1)] = (10));


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
});})(c__16031__auto___16202))
;
return ((function (switch__15917__auto__,c__16031__auto___16202){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_16194 = [null,null,null,null,null,null,null,null];
(statearr_16194[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_16194[(1)] = (1));

return statearr_16194;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_16174){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_16174);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e16195){if((e16195 instanceof Object)){
var ex__15921__auto__ = e16195;
var statearr_16196_16217 = state_16174;
(statearr_16196_16217[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16174);

return cljs.core.cst$kw$recur;
} else {
throw e16195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__16218 = state_16174;
state_16174 = G__16218;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_16174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_16174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___16202))
})();
var state__16033__auto__ = (function (){var statearr_16197 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_16197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___16202);

return statearr_16197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___16202))
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
return (function (p__16402){
var vec__16403 = p__16402;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16403,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16403,(1),null);
var job = vec__16403;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16031__auto___16585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___16585,res,vec__16403,v,p,job,jobs,results){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___16585,res,vec__16403,v,p,job,jobs,results){
return (function (state_16408){
var state_val_16409 = (state_16408[(1)]);
if((state_val_16409 === (1))){
var state_16408__$1 = state_16408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16408__$1,(2),res,v);
} else {
if((state_val_16409 === (2))){
var inst_16405 = (state_16408[(2)]);
var inst_16406 = cljs.core.async.close_BANG_(res);
var state_16408__$1 = (function (){var statearr_16410 = state_16408;
(statearr_16410[(7)] = inst_16405);

return statearr_16410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16408__$1,inst_16406);
} else {
return null;
}
}
});})(c__16031__auto___16585,res,vec__16403,v,p,job,jobs,results))
;
return ((function (switch__15917__auto__,c__16031__auto___16585,res,vec__16403,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0 = (function (){
var statearr_16414 = [null,null,null,null,null,null,null,null];
(statearr_16414[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__);

(statearr_16414[(1)] = (1));

return statearr_16414;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1 = (function (state_16408){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_16408);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e16415){if((e16415 instanceof Object)){
var ex__15921__auto__ = e16415;
var statearr_16416_16586 = state_16408;
(statearr_16416_16586[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16408);

return cljs.core.cst$kw$recur;
} else {
throw e16415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__16587 = state_16408;
state_16408 = G__16587;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = function(state_16408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1.call(this,state_16408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___16585,res,vec__16403,v,p,job,jobs,results))
})();
var state__16033__auto__ = (function (){var statearr_16417 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_16417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___16585);

return statearr_16417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___16585,res,vec__16403,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16418){
var vec__16419 = p__16418;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16419,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16419,(1),null);
var job = vec__16419;
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
var n__7387__auto___16588 = n;
var __16589 = (0);
while(true){
if((__16589 < n__7387__auto___16588)){
var G__16420_16590 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16420_16590) {
case "compute":
var c__16031__auto___16592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16589,c__16031__auto___16592,G__16420_16590,n__7387__auto___16588,jobs,results,process,async){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (__16589,c__16031__auto___16592,G__16420_16590,n__7387__auto___16588,jobs,results,process,async){
return (function (state_16433){
var state_val_16434 = (state_16433[(1)]);
if((state_val_16434 === (1))){
var state_16433__$1 = state_16433;
var statearr_16435_16593 = state_16433__$1;
(statearr_16435_16593[(2)] = null);

(statearr_16435_16593[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16434 === (2))){
var state_16433__$1 = state_16433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16433__$1,(4),jobs);
} else {
if((state_val_16434 === (3))){
var inst_16431 = (state_16433[(2)]);
var state_16433__$1 = state_16433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16433__$1,inst_16431);
} else {
if((state_val_16434 === (4))){
var inst_16423 = (state_16433[(2)]);
var inst_16424 = process(inst_16423);
var state_16433__$1 = state_16433;
if(cljs.core.truth_(inst_16424)){
var statearr_16436_16594 = state_16433__$1;
(statearr_16436_16594[(1)] = (5));

} else {
var statearr_16437_16595 = state_16433__$1;
(statearr_16437_16595[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16434 === (5))){
var state_16433__$1 = state_16433;
var statearr_16438_16596 = state_16433__$1;
(statearr_16438_16596[(2)] = null);

(statearr_16438_16596[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16434 === (6))){
var state_16433__$1 = state_16433;
var statearr_16439_16597 = state_16433__$1;
(statearr_16439_16597[(2)] = null);

(statearr_16439_16597[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16434 === (7))){
var inst_16429 = (state_16433[(2)]);
var state_16433__$1 = state_16433;
var statearr_16440_16598 = state_16433__$1;
(statearr_16440_16598[(2)] = inst_16429);

(statearr_16440_16598[(1)] = (3));


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
});})(__16589,c__16031__auto___16592,G__16420_16590,n__7387__auto___16588,jobs,results,process,async))
;
return ((function (__16589,switch__15917__auto__,c__16031__auto___16592,G__16420_16590,n__7387__auto___16588,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0 = (function (){
var statearr_16444 = [null,null,null,null,null,null,null];
(statearr_16444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__);

(statearr_16444[(1)] = (1));

return statearr_16444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1 = (function (state_16433){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_16433);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e16445){if((e16445 instanceof Object)){
var ex__15921__auto__ = e16445;
var statearr_16446_16599 = state_16433;
(statearr_16446_16599[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16433);

return cljs.core.cst$kw$recur;
} else {
throw e16445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__16600 = state_16433;
state_16433 = G__16600;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = function(state_16433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1.call(this,state_16433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__;
})()
;})(__16589,switch__15917__auto__,c__16031__auto___16592,G__16420_16590,n__7387__auto___16588,jobs,results,process,async))
})();
var state__16033__auto__ = (function (){var statearr_16447 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_16447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___16592);

return statearr_16447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(__16589,c__16031__auto___16592,G__16420_16590,n__7387__auto___16588,jobs,results,process,async))
);


break;
case "async":
var c__16031__auto___16601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16589,c__16031__auto___16601,G__16420_16590,n__7387__auto___16588,jobs,results,process,async){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (__16589,c__16031__auto___16601,G__16420_16590,n__7387__auto___16588,jobs,results,process,async){
return (function (state_16460){
var state_val_16461 = (state_16460[(1)]);
if((state_val_16461 === (1))){
var state_16460__$1 = state_16460;
var statearr_16462_16602 = state_16460__$1;
(statearr_16462_16602[(2)] = null);

(statearr_16462_16602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16461 === (2))){
var state_16460__$1 = state_16460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16460__$1,(4),jobs);
} else {
if((state_val_16461 === (3))){
var inst_16458 = (state_16460[(2)]);
var state_16460__$1 = state_16460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16460__$1,inst_16458);
} else {
if((state_val_16461 === (4))){
var inst_16450 = (state_16460[(2)]);
var inst_16451 = async(inst_16450);
var state_16460__$1 = state_16460;
if(cljs.core.truth_(inst_16451)){
var statearr_16463_16603 = state_16460__$1;
(statearr_16463_16603[(1)] = (5));

} else {
var statearr_16464_16604 = state_16460__$1;
(statearr_16464_16604[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16461 === (5))){
var state_16460__$1 = state_16460;
var statearr_16465_16605 = state_16460__$1;
(statearr_16465_16605[(2)] = null);

(statearr_16465_16605[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16461 === (6))){
var state_16460__$1 = state_16460;
var statearr_16466_16606 = state_16460__$1;
(statearr_16466_16606[(2)] = null);

(statearr_16466_16606[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16461 === (7))){
var inst_16456 = (state_16460[(2)]);
var state_16460__$1 = state_16460;
var statearr_16467_16607 = state_16460__$1;
(statearr_16467_16607[(2)] = inst_16456);

(statearr_16467_16607[(1)] = (3));


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
});})(__16589,c__16031__auto___16601,G__16420_16590,n__7387__auto___16588,jobs,results,process,async))
;
return ((function (__16589,switch__15917__auto__,c__16031__auto___16601,G__16420_16590,n__7387__auto___16588,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0 = (function (){
var statearr_16471 = [null,null,null,null,null,null,null];
(statearr_16471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__);

(statearr_16471[(1)] = (1));

return statearr_16471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1 = (function (state_16460){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_16460);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e16472){if((e16472 instanceof Object)){
var ex__15921__auto__ = e16472;
var statearr_16473_16608 = state_16460;
(statearr_16473_16608[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16460);

return cljs.core.cst$kw$recur;
} else {
throw e16472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__16609 = state_16460;
state_16460 = G__16609;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = function(state_16460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1.call(this,state_16460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__;
})()
;})(__16589,switch__15917__auto__,c__16031__auto___16601,G__16420_16590,n__7387__auto___16588,jobs,results,process,async))
})();
var state__16033__auto__ = (function (){var statearr_16474 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_16474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___16601);

return statearr_16474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(__16589,c__16031__auto___16601,G__16420_16590,n__7387__auto___16588,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16610 = (__16589 + (1));
__16589 = G__16610;
continue;
} else {
}
break;
}

var c__16031__auto___16611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___16611,jobs,results,process,async){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___16611,jobs,results,process,async){
return (function (state_16496){
var state_val_16497 = (state_16496[(1)]);
if((state_val_16497 === (1))){
var state_16496__$1 = state_16496;
var statearr_16498_16612 = state_16496__$1;
(statearr_16498_16612[(2)] = null);

(statearr_16498_16612[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (2))){
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16496__$1,(4),from);
} else {
if((state_val_16497 === (3))){
var inst_16494 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16496__$1,inst_16494);
} else {
if((state_val_16497 === (4))){
var inst_16477 = (state_16496[(7)]);
var inst_16477__$1 = (state_16496[(2)]);
var inst_16478 = (inst_16477__$1 == null);
var state_16496__$1 = (function (){var statearr_16499 = state_16496;
(statearr_16499[(7)] = inst_16477__$1);

return statearr_16499;
})();
if(cljs.core.truth_(inst_16478)){
var statearr_16500_16613 = state_16496__$1;
(statearr_16500_16613[(1)] = (5));

} else {
var statearr_16501_16614 = state_16496__$1;
(statearr_16501_16614[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (5))){
var inst_16480 = cljs.core.async.close_BANG_(jobs);
var state_16496__$1 = state_16496;
var statearr_16502_16615 = state_16496__$1;
(statearr_16502_16615[(2)] = inst_16480);

(statearr_16502_16615[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (6))){
var inst_16482 = (state_16496[(8)]);
var inst_16477 = (state_16496[(7)]);
var inst_16482__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16483 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16484 = [inst_16477,inst_16482__$1];
var inst_16485 = (new cljs.core.PersistentVector(null,2,(5),inst_16483,inst_16484,null));
var state_16496__$1 = (function (){var statearr_16503 = state_16496;
(statearr_16503[(8)] = inst_16482__$1);

return statearr_16503;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16496__$1,(8),jobs,inst_16485);
} else {
if((state_val_16497 === (7))){
var inst_16492 = (state_16496[(2)]);
var state_16496__$1 = state_16496;
var statearr_16504_16616 = state_16496__$1;
(statearr_16504_16616[(2)] = inst_16492);

(statearr_16504_16616[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16497 === (8))){
var inst_16482 = (state_16496[(8)]);
var inst_16487 = (state_16496[(2)]);
var state_16496__$1 = (function (){var statearr_16505 = state_16496;
(statearr_16505[(9)] = inst_16487);

return statearr_16505;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16496__$1,(9),results,inst_16482);
} else {
if((state_val_16497 === (9))){
var inst_16489 = (state_16496[(2)]);
var state_16496__$1 = (function (){var statearr_16506 = state_16496;
(statearr_16506[(10)] = inst_16489);

return statearr_16506;
})();
var statearr_16507_16617 = state_16496__$1;
(statearr_16507_16617[(2)] = null);

(statearr_16507_16617[(1)] = (2));


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
});})(c__16031__auto___16611,jobs,results,process,async))
;
return ((function (switch__15917__auto__,c__16031__auto___16611,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0 = (function (){
var statearr_16511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__);

(statearr_16511[(1)] = (1));

return statearr_16511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1 = (function (state_16496){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_16496);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e16512){if((e16512 instanceof Object)){
var ex__15921__auto__ = e16512;
var statearr_16513_16618 = state_16496;
(statearr_16513_16618[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16496);

return cljs.core.cst$kw$recur;
} else {
throw e16512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__16619 = state_16496;
state_16496 = G__16619;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = function(state_16496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1.call(this,state_16496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___16611,jobs,results,process,async))
})();
var state__16033__auto__ = (function (){var statearr_16514 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_16514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___16611);

return statearr_16514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___16611,jobs,results,process,async))
);


var c__16031__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto__,jobs,results,process,async){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto__,jobs,results,process,async){
return (function (state_16552){
var state_val_16553 = (state_16552[(1)]);
if((state_val_16553 === (7))){
var inst_16548 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16554_16620 = state_16552__$1;
(statearr_16554_16620[(2)] = inst_16548);

(statearr_16554_16620[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (20))){
var state_16552__$1 = state_16552;
var statearr_16555_16621 = state_16552__$1;
(statearr_16555_16621[(2)] = null);

(statearr_16555_16621[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (1))){
var state_16552__$1 = state_16552;
var statearr_16556_16622 = state_16552__$1;
(statearr_16556_16622[(2)] = null);

(statearr_16556_16622[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (4))){
var inst_16517 = (state_16552[(7)]);
var inst_16517__$1 = (state_16552[(2)]);
var inst_16518 = (inst_16517__$1 == null);
var state_16552__$1 = (function (){var statearr_16557 = state_16552;
(statearr_16557[(7)] = inst_16517__$1);

return statearr_16557;
})();
if(cljs.core.truth_(inst_16518)){
var statearr_16558_16623 = state_16552__$1;
(statearr_16558_16623[(1)] = (5));

} else {
var statearr_16559_16624 = state_16552__$1;
(statearr_16559_16624[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (15))){
var inst_16530 = (state_16552[(8)]);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16552__$1,(18),to,inst_16530);
} else {
if((state_val_16553 === (21))){
var inst_16543 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16560_16625 = state_16552__$1;
(statearr_16560_16625[(2)] = inst_16543);

(statearr_16560_16625[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (13))){
var inst_16545 = (state_16552[(2)]);
var state_16552__$1 = (function (){var statearr_16561 = state_16552;
(statearr_16561[(9)] = inst_16545);

return statearr_16561;
})();
var statearr_16562_16626 = state_16552__$1;
(statearr_16562_16626[(2)] = null);

(statearr_16562_16626[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (6))){
var inst_16517 = (state_16552[(7)]);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16552__$1,(11),inst_16517);
} else {
if((state_val_16553 === (17))){
var inst_16538 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
if(cljs.core.truth_(inst_16538)){
var statearr_16563_16627 = state_16552__$1;
(statearr_16563_16627[(1)] = (19));

} else {
var statearr_16564_16628 = state_16552__$1;
(statearr_16564_16628[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (3))){
var inst_16550 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16552__$1,inst_16550);
} else {
if((state_val_16553 === (12))){
var inst_16527 = (state_16552[(10)]);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16552__$1,(14),inst_16527);
} else {
if((state_val_16553 === (2))){
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16552__$1,(4),results);
} else {
if((state_val_16553 === (19))){
var state_16552__$1 = state_16552;
var statearr_16565_16629 = state_16552__$1;
(statearr_16565_16629[(2)] = null);

(statearr_16565_16629[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (11))){
var inst_16527 = (state_16552[(2)]);
var state_16552__$1 = (function (){var statearr_16566 = state_16552;
(statearr_16566[(10)] = inst_16527);

return statearr_16566;
})();
var statearr_16567_16630 = state_16552__$1;
(statearr_16567_16630[(2)] = null);

(statearr_16567_16630[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (9))){
var state_16552__$1 = state_16552;
var statearr_16568_16631 = state_16552__$1;
(statearr_16568_16631[(2)] = null);

(statearr_16568_16631[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (5))){
var state_16552__$1 = state_16552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16569_16632 = state_16552__$1;
(statearr_16569_16632[(1)] = (8));

} else {
var statearr_16570_16633 = state_16552__$1;
(statearr_16570_16633[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (14))){
var inst_16532 = (state_16552[(11)]);
var inst_16530 = (state_16552[(8)]);
var inst_16530__$1 = (state_16552[(2)]);
var inst_16531 = (inst_16530__$1 == null);
var inst_16532__$1 = cljs.core.not(inst_16531);
var state_16552__$1 = (function (){var statearr_16571 = state_16552;
(statearr_16571[(11)] = inst_16532__$1);

(statearr_16571[(8)] = inst_16530__$1);

return statearr_16571;
})();
if(inst_16532__$1){
var statearr_16572_16634 = state_16552__$1;
(statearr_16572_16634[(1)] = (15));

} else {
var statearr_16573_16635 = state_16552__$1;
(statearr_16573_16635[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (16))){
var inst_16532 = (state_16552[(11)]);
var state_16552__$1 = state_16552;
var statearr_16574_16636 = state_16552__$1;
(statearr_16574_16636[(2)] = inst_16532);

(statearr_16574_16636[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (10))){
var inst_16524 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16575_16637 = state_16552__$1;
(statearr_16575_16637[(2)] = inst_16524);

(statearr_16575_16637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (18))){
var inst_16535 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16576_16638 = state_16552__$1;
(statearr_16576_16638[(2)] = inst_16535);

(statearr_16576_16638[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (8))){
var inst_16521 = cljs.core.async.close_BANG_(to);
var state_16552__$1 = state_16552;
var statearr_16577_16639 = state_16552__$1;
(statearr_16577_16639[(2)] = inst_16521);

(statearr_16577_16639[(1)] = (10));


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
});})(c__16031__auto__,jobs,results,process,async))
;
return ((function (switch__15917__auto__,c__16031__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0 = (function (){
var statearr_16581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16581[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__);

(statearr_16581[(1)] = (1));

return statearr_16581;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1 = (function (state_16552){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_16552);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e16582){if((e16582 instanceof Object)){
var ex__15921__auto__ = e16582;
var statearr_16583_16640 = state_16552;
(statearr_16583_16640[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16552);

return cljs.core.cst$kw$recur;
} else {
throw e16582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__16641 = state_16552;
state_16552 = G__16641;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__ = function(state_16552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1.call(this,state_16552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15918__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto__,jobs,results,process,async))
})();
var state__16033__auto__ = (function (){var statearr_16584 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_16584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto__);

return statearr_16584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto__,jobs,results,process,async))
);

return c__16031__auto__;
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
var args16642 = [];
var len__7542__auto___16645 = arguments.length;
var i__7543__auto___16646 = (0);
while(true){
if((i__7543__auto___16646 < len__7542__auto___16645)){
args16642.push((arguments[i__7543__auto___16646]));

var G__16647 = (i__7543__auto___16646 + (1));
i__7543__auto___16646 = G__16647;
continue;
} else {
}
break;
}

var G__16644 = args16642.length;
switch (G__16644) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16642.length)].join('')));

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
var args16649 = [];
var len__7542__auto___16652 = arguments.length;
var i__7543__auto___16653 = (0);
while(true){
if((i__7543__auto___16653 < len__7542__auto___16652)){
args16649.push((arguments[i__7543__auto___16653]));

var G__16654 = (i__7543__auto___16653 + (1));
i__7543__auto___16653 = G__16654;
continue;
} else {
}
break;
}

var G__16651 = args16649.length;
switch (G__16651) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16649.length)].join('')));

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
var args16656 = [];
var len__7542__auto___16709 = arguments.length;
var i__7543__auto___16710 = (0);
while(true){
if((i__7543__auto___16710 < len__7542__auto___16709)){
args16656.push((arguments[i__7543__auto___16710]));

var G__16711 = (i__7543__auto___16710 + (1));
i__7543__auto___16710 = G__16711;
continue;
} else {
}
break;
}

var G__16658 = args16656.length;
switch (G__16658) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16656.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16031__auto___16713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___16713,tc,fc){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___16713,tc,fc){
return (function (state_16684){
var state_val_16685 = (state_16684[(1)]);
if((state_val_16685 === (7))){
var inst_16680 = (state_16684[(2)]);
var state_16684__$1 = state_16684;
var statearr_16686_16714 = state_16684__$1;
(statearr_16686_16714[(2)] = inst_16680);

(statearr_16686_16714[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (1))){
var state_16684__$1 = state_16684;
var statearr_16687_16715 = state_16684__$1;
(statearr_16687_16715[(2)] = null);

(statearr_16687_16715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (4))){
var inst_16661 = (state_16684[(7)]);
var inst_16661__$1 = (state_16684[(2)]);
var inst_16662 = (inst_16661__$1 == null);
var state_16684__$1 = (function (){var statearr_16688 = state_16684;
(statearr_16688[(7)] = inst_16661__$1);

return statearr_16688;
})();
if(cljs.core.truth_(inst_16662)){
var statearr_16689_16716 = state_16684__$1;
(statearr_16689_16716[(1)] = (5));

} else {
var statearr_16690_16717 = state_16684__$1;
(statearr_16690_16717[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (13))){
var state_16684__$1 = state_16684;
var statearr_16691_16718 = state_16684__$1;
(statearr_16691_16718[(2)] = null);

(statearr_16691_16718[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (6))){
var inst_16661 = (state_16684[(7)]);
var inst_16667 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16661) : p.call(null,inst_16661));
var state_16684__$1 = state_16684;
if(cljs.core.truth_(inst_16667)){
var statearr_16692_16719 = state_16684__$1;
(statearr_16692_16719[(1)] = (9));

} else {
var statearr_16693_16720 = state_16684__$1;
(statearr_16693_16720[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (3))){
var inst_16682 = (state_16684[(2)]);
var state_16684__$1 = state_16684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16684__$1,inst_16682);
} else {
if((state_val_16685 === (12))){
var state_16684__$1 = state_16684;
var statearr_16694_16721 = state_16684__$1;
(statearr_16694_16721[(2)] = null);

(statearr_16694_16721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (2))){
var state_16684__$1 = state_16684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16684__$1,(4),ch);
} else {
if((state_val_16685 === (11))){
var inst_16661 = (state_16684[(7)]);
var inst_16671 = (state_16684[(2)]);
var state_16684__$1 = state_16684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16684__$1,(8),inst_16671,inst_16661);
} else {
if((state_val_16685 === (9))){
var state_16684__$1 = state_16684;
var statearr_16695_16722 = state_16684__$1;
(statearr_16695_16722[(2)] = tc);

(statearr_16695_16722[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (5))){
var inst_16664 = cljs.core.async.close_BANG_(tc);
var inst_16665 = cljs.core.async.close_BANG_(fc);
var state_16684__$1 = (function (){var statearr_16696 = state_16684;
(statearr_16696[(8)] = inst_16664);

return statearr_16696;
})();
var statearr_16697_16723 = state_16684__$1;
(statearr_16697_16723[(2)] = inst_16665);

(statearr_16697_16723[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (14))){
var inst_16678 = (state_16684[(2)]);
var state_16684__$1 = state_16684;
var statearr_16698_16724 = state_16684__$1;
(statearr_16698_16724[(2)] = inst_16678);

(statearr_16698_16724[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (10))){
var state_16684__$1 = state_16684;
var statearr_16699_16725 = state_16684__$1;
(statearr_16699_16725[(2)] = fc);

(statearr_16699_16725[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16685 === (8))){
var inst_16673 = (state_16684[(2)]);
var state_16684__$1 = state_16684;
if(cljs.core.truth_(inst_16673)){
var statearr_16700_16726 = state_16684__$1;
(statearr_16700_16726[(1)] = (12));

} else {
var statearr_16701_16727 = state_16684__$1;
(statearr_16701_16727[(1)] = (13));

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
});})(c__16031__auto___16713,tc,fc))
;
return ((function (switch__15917__auto__,c__16031__auto___16713,tc,fc){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_16705 = [null,null,null,null,null,null,null,null,null];
(statearr_16705[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_16705[(1)] = (1));

return statearr_16705;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_16684){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_16684);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e16706){if((e16706 instanceof Object)){
var ex__15921__auto__ = e16706;
var statearr_16707_16728 = state_16684;
(statearr_16707_16728[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16684);

return cljs.core.cst$kw$recur;
} else {
throw e16706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__16729 = state_16684;
state_16684 = G__16729;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_16684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_16684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___16713,tc,fc))
})();
var state__16033__auto__ = (function (){var statearr_16708 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_16708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___16713);

return statearr_16708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___16713,tc,fc))
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
var c__16031__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto__){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto__){
return (function (state_16793){
var state_val_16794 = (state_16793[(1)]);
if((state_val_16794 === (7))){
var inst_16789 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
var statearr_16795_16816 = state_16793__$1;
(statearr_16795_16816[(2)] = inst_16789);

(statearr_16795_16816[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (1))){
var inst_16773 = init;
var state_16793__$1 = (function (){var statearr_16796 = state_16793;
(statearr_16796[(7)] = inst_16773);

return statearr_16796;
})();
var statearr_16797_16817 = state_16793__$1;
(statearr_16797_16817[(2)] = null);

(statearr_16797_16817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (4))){
var inst_16776 = (state_16793[(8)]);
var inst_16776__$1 = (state_16793[(2)]);
var inst_16777 = (inst_16776__$1 == null);
var state_16793__$1 = (function (){var statearr_16798 = state_16793;
(statearr_16798[(8)] = inst_16776__$1);

return statearr_16798;
})();
if(cljs.core.truth_(inst_16777)){
var statearr_16799_16818 = state_16793__$1;
(statearr_16799_16818[(1)] = (5));

} else {
var statearr_16800_16819 = state_16793__$1;
(statearr_16800_16819[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (6))){
var inst_16773 = (state_16793[(7)]);
var inst_16780 = (state_16793[(9)]);
var inst_16776 = (state_16793[(8)]);
var inst_16780__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16773,inst_16776) : f.call(null,inst_16773,inst_16776));
var inst_16781 = cljs.core.reduced_QMARK_(inst_16780__$1);
var state_16793__$1 = (function (){var statearr_16801 = state_16793;
(statearr_16801[(9)] = inst_16780__$1);

return statearr_16801;
})();
if(inst_16781){
var statearr_16802_16820 = state_16793__$1;
(statearr_16802_16820[(1)] = (8));

} else {
var statearr_16803_16821 = state_16793__$1;
(statearr_16803_16821[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (3))){
var inst_16791 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16793__$1,inst_16791);
} else {
if((state_val_16794 === (2))){
var state_16793__$1 = state_16793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16793__$1,(4),ch);
} else {
if((state_val_16794 === (9))){
var inst_16780 = (state_16793[(9)]);
var inst_16773 = inst_16780;
var state_16793__$1 = (function (){var statearr_16804 = state_16793;
(statearr_16804[(7)] = inst_16773);

return statearr_16804;
})();
var statearr_16805_16822 = state_16793__$1;
(statearr_16805_16822[(2)] = null);

(statearr_16805_16822[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (5))){
var inst_16773 = (state_16793[(7)]);
var state_16793__$1 = state_16793;
var statearr_16806_16823 = state_16793__$1;
(statearr_16806_16823[(2)] = inst_16773);

(statearr_16806_16823[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (10))){
var inst_16787 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
var statearr_16807_16824 = state_16793__$1;
(statearr_16807_16824[(2)] = inst_16787);

(statearr_16807_16824[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (8))){
var inst_16780 = (state_16793[(9)]);
var inst_16783 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16780) : cljs.core.deref.call(null,inst_16780));
var state_16793__$1 = state_16793;
var statearr_16808_16825 = state_16793__$1;
(statearr_16808_16825[(2)] = inst_16783);

(statearr_16808_16825[(1)] = (10));


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
});})(c__16031__auto__))
;
return ((function (switch__15917__auto__,c__16031__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15918__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15918__auto____0 = (function (){
var statearr_16812 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16812[(0)] = cljs$core$async$reduce_$_state_machine__15918__auto__);

(statearr_16812[(1)] = (1));

return statearr_16812;
});
var cljs$core$async$reduce_$_state_machine__15918__auto____1 = (function (state_16793){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_16793);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e16813){if((e16813 instanceof Object)){
var ex__15921__auto__ = e16813;
var statearr_16814_16826 = state_16793;
(statearr_16814_16826[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16793);

return cljs.core.cst$kw$recur;
} else {
throw e16813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__16827 = state_16793;
state_16793 = G__16827;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15918__auto__ = function(state_16793){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15918__auto____1.call(this,state_16793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15918__auto____0;
cljs$core$async$reduce_$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15918__auto____1;
return cljs$core$async$reduce_$_state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto__))
})();
var state__16033__auto__ = (function (){var statearr_16815 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_16815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto__);

return statearr_16815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto__))
);

return c__16031__auto__;
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
var args16828 = [];
var len__7542__auto___16880 = arguments.length;
var i__7543__auto___16881 = (0);
while(true){
if((i__7543__auto___16881 < len__7542__auto___16880)){
args16828.push((arguments[i__7543__auto___16881]));

var G__16882 = (i__7543__auto___16881 + (1));
i__7543__auto___16881 = G__16882;
continue;
} else {
}
break;
}

var G__16830 = args16828.length;
switch (G__16830) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16828.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16031__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto__){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto__){
return (function (state_16855){
var state_val_16856 = (state_16855[(1)]);
if((state_val_16856 === (7))){
var inst_16837 = (state_16855[(2)]);
var state_16855__$1 = state_16855;
var statearr_16857_16884 = state_16855__$1;
(statearr_16857_16884[(2)] = inst_16837);

(statearr_16857_16884[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (1))){
var inst_16831 = cljs.core.seq(coll);
var inst_16832 = inst_16831;
var state_16855__$1 = (function (){var statearr_16858 = state_16855;
(statearr_16858[(7)] = inst_16832);

return statearr_16858;
})();
var statearr_16859_16885 = state_16855__$1;
(statearr_16859_16885[(2)] = null);

(statearr_16859_16885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (4))){
var inst_16832 = (state_16855[(7)]);
var inst_16835 = cljs.core.first(inst_16832);
var state_16855__$1 = state_16855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16855__$1,(7),ch,inst_16835);
} else {
if((state_val_16856 === (13))){
var inst_16849 = (state_16855[(2)]);
var state_16855__$1 = state_16855;
var statearr_16860_16886 = state_16855__$1;
(statearr_16860_16886[(2)] = inst_16849);

(statearr_16860_16886[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (6))){
var inst_16840 = (state_16855[(2)]);
var state_16855__$1 = state_16855;
if(cljs.core.truth_(inst_16840)){
var statearr_16861_16887 = state_16855__$1;
(statearr_16861_16887[(1)] = (8));

} else {
var statearr_16862_16888 = state_16855__$1;
(statearr_16862_16888[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (3))){
var inst_16853 = (state_16855[(2)]);
var state_16855__$1 = state_16855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16855__$1,inst_16853);
} else {
if((state_val_16856 === (12))){
var state_16855__$1 = state_16855;
var statearr_16863_16889 = state_16855__$1;
(statearr_16863_16889[(2)] = null);

(statearr_16863_16889[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (2))){
var inst_16832 = (state_16855[(7)]);
var state_16855__$1 = state_16855;
if(cljs.core.truth_(inst_16832)){
var statearr_16864_16890 = state_16855__$1;
(statearr_16864_16890[(1)] = (4));

} else {
var statearr_16865_16891 = state_16855__$1;
(statearr_16865_16891[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (11))){
var inst_16846 = cljs.core.async.close_BANG_(ch);
var state_16855__$1 = state_16855;
var statearr_16866_16892 = state_16855__$1;
(statearr_16866_16892[(2)] = inst_16846);

(statearr_16866_16892[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (9))){
var state_16855__$1 = state_16855;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16867_16893 = state_16855__$1;
(statearr_16867_16893[(1)] = (11));

} else {
var statearr_16868_16894 = state_16855__$1;
(statearr_16868_16894[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (5))){
var inst_16832 = (state_16855[(7)]);
var state_16855__$1 = state_16855;
var statearr_16869_16895 = state_16855__$1;
(statearr_16869_16895[(2)] = inst_16832);

(statearr_16869_16895[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (10))){
var inst_16851 = (state_16855[(2)]);
var state_16855__$1 = state_16855;
var statearr_16870_16896 = state_16855__$1;
(statearr_16870_16896[(2)] = inst_16851);

(statearr_16870_16896[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16856 === (8))){
var inst_16832 = (state_16855[(7)]);
var inst_16842 = cljs.core.next(inst_16832);
var inst_16832__$1 = inst_16842;
var state_16855__$1 = (function (){var statearr_16871 = state_16855;
(statearr_16871[(7)] = inst_16832__$1);

return statearr_16871;
})();
var statearr_16872_16897 = state_16855__$1;
(statearr_16872_16897[(2)] = null);

(statearr_16872_16897[(1)] = (2));


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
});})(c__16031__auto__))
;
return ((function (switch__15917__auto__,c__16031__auto__){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_16876 = [null,null,null,null,null,null,null,null];
(statearr_16876[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_16876[(1)] = (1));

return statearr_16876;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_16855){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_16855);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e16877){if((e16877 instanceof Object)){
var ex__15921__auto__ = e16877;
var statearr_16878_16898 = state_16855;
(statearr_16878_16898[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16855);

return cljs.core.cst$kw$recur;
} else {
throw e16877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__16899 = state_16855;
state_16855 = G__16899;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_16855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_16855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto__))
})();
var state__16033__auto__ = (function (){var statearr_16879 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_16879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto__);

return statearr_16879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto__))
);

return c__16031__auto__;
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
var cs = (function (){var G__17124 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17124) : cljs.core.atom.call(null,G__17124));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17125 = (function (mult,ch,cs,meta17126){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17126 = meta17126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17127,meta17126__$1){
var self__ = this;
var _17127__$1 = this;
return (new cljs.core.async.t_cljs$core$async17125(self__.mult,self__.ch,self__.cs,meta17126__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17127){
var self__ = this;
var _17127__$1 = this;
return self__.meta17126;
});})(cs))
;

cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17125.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17128_17348 = self__.cs;
var G__17129_17349 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17128_17348,G__17129_17349) : cljs.core.reset_BANG_.call(null,G__17128_17348,G__17129_17349));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17125.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17126], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17125";

cljs.core.async.t_cljs$core$async17125.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17125");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17125 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17125(mult__$1,ch__$1,cs__$1,meta17126){
return (new cljs.core.async.t_cljs$core$async17125(mult__$1,ch__$1,cs__$1,meta17126));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17125(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16031__auto___17350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___17350,cs,m,dchan,dctr,done){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___17350,cs,m,dchan,dctr,done){
return (function (state_17260){
var state_val_17261 = (state_17260[(1)]);
if((state_val_17261 === (7))){
var inst_17256 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
var statearr_17262_17351 = state_17260__$1;
(statearr_17262_17351[(2)] = inst_17256);

(statearr_17262_17351[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (20))){
var inst_17161 = (state_17260[(7)]);
var inst_17171 = cljs.core.first(inst_17161);
var inst_17172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17171,(0),null);
var inst_17173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17171,(1),null);
var state_17260__$1 = (function (){var statearr_17263 = state_17260;
(statearr_17263[(8)] = inst_17172);

return statearr_17263;
})();
if(cljs.core.truth_(inst_17173)){
var statearr_17264_17352 = state_17260__$1;
(statearr_17264_17352[(1)] = (22));

} else {
var statearr_17265_17353 = state_17260__$1;
(statearr_17265_17353[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (27))){
var inst_17201 = (state_17260[(9)]);
var inst_17203 = (state_17260[(10)]);
var inst_17132 = (state_17260[(11)]);
var inst_17208 = (state_17260[(12)]);
var inst_17208__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17201,inst_17203);
var inst_17209 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17208__$1,inst_17132,done);
var state_17260__$1 = (function (){var statearr_17266 = state_17260;
(statearr_17266[(12)] = inst_17208__$1);

return statearr_17266;
})();
if(cljs.core.truth_(inst_17209)){
var statearr_17267_17354 = state_17260__$1;
(statearr_17267_17354[(1)] = (30));

} else {
var statearr_17268_17355 = state_17260__$1;
(statearr_17268_17355[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (1))){
var state_17260__$1 = state_17260;
var statearr_17269_17356 = state_17260__$1;
(statearr_17269_17356[(2)] = null);

(statearr_17269_17356[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (24))){
var inst_17161 = (state_17260[(7)]);
var inst_17178 = (state_17260[(2)]);
var inst_17179 = cljs.core.next(inst_17161);
var inst_17141 = inst_17179;
var inst_17142 = null;
var inst_17143 = (0);
var inst_17144 = (0);
var state_17260__$1 = (function (){var statearr_17270 = state_17260;
(statearr_17270[(13)] = inst_17144);

(statearr_17270[(14)] = inst_17178);

(statearr_17270[(15)] = inst_17142);

(statearr_17270[(16)] = inst_17141);

(statearr_17270[(17)] = inst_17143);

return statearr_17270;
})();
var statearr_17271_17357 = state_17260__$1;
(statearr_17271_17357[(2)] = null);

(statearr_17271_17357[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (39))){
var state_17260__$1 = state_17260;
var statearr_17275_17358 = state_17260__$1;
(statearr_17275_17358[(2)] = null);

(statearr_17275_17358[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (4))){
var inst_17132 = (state_17260[(11)]);
var inst_17132__$1 = (state_17260[(2)]);
var inst_17133 = (inst_17132__$1 == null);
var state_17260__$1 = (function (){var statearr_17276 = state_17260;
(statearr_17276[(11)] = inst_17132__$1);

return statearr_17276;
})();
if(cljs.core.truth_(inst_17133)){
var statearr_17277_17359 = state_17260__$1;
(statearr_17277_17359[(1)] = (5));

} else {
var statearr_17278_17360 = state_17260__$1;
(statearr_17278_17360[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (15))){
var inst_17144 = (state_17260[(13)]);
var inst_17142 = (state_17260[(15)]);
var inst_17141 = (state_17260[(16)]);
var inst_17143 = (state_17260[(17)]);
var inst_17157 = (state_17260[(2)]);
var inst_17158 = (inst_17144 + (1));
var tmp17272 = inst_17142;
var tmp17273 = inst_17141;
var tmp17274 = inst_17143;
var inst_17141__$1 = tmp17273;
var inst_17142__$1 = tmp17272;
var inst_17143__$1 = tmp17274;
var inst_17144__$1 = inst_17158;
var state_17260__$1 = (function (){var statearr_17279 = state_17260;
(statearr_17279[(18)] = inst_17157);

(statearr_17279[(13)] = inst_17144__$1);

(statearr_17279[(15)] = inst_17142__$1);

(statearr_17279[(16)] = inst_17141__$1);

(statearr_17279[(17)] = inst_17143__$1);

return statearr_17279;
})();
var statearr_17280_17361 = state_17260__$1;
(statearr_17280_17361[(2)] = null);

(statearr_17280_17361[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (21))){
var inst_17182 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
var statearr_17284_17362 = state_17260__$1;
(statearr_17284_17362[(2)] = inst_17182);

(statearr_17284_17362[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (31))){
var inst_17208 = (state_17260[(12)]);
var inst_17212 = done(null);
var inst_17213 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17208);
var state_17260__$1 = (function (){var statearr_17285 = state_17260;
(statearr_17285[(19)] = inst_17212);

return statearr_17285;
})();
var statearr_17286_17363 = state_17260__$1;
(statearr_17286_17363[(2)] = inst_17213);

(statearr_17286_17363[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (32))){
var inst_17201 = (state_17260[(9)]);
var inst_17203 = (state_17260[(10)]);
var inst_17200 = (state_17260[(20)]);
var inst_17202 = (state_17260[(21)]);
var inst_17215 = (state_17260[(2)]);
var inst_17216 = (inst_17203 + (1));
var tmp17281 = inst_17201;
var tmp17282 = inst_17200;
var tmp17283 = inst_17202;
var inst_17200__$1 = tmp17282;
var inst_17201__$1 = tmp17281;
var inst_17202__$1 = tmp17283;
var inst_17203__$1 = inst_17216;
var state_17260__$1 = (function (){var statearr_17287 = state_17260;
(statearr_17287[(9)] = inst_17201__$1);

(statearr_17287[(10)] = inst_17203__$1);

(statearr_17287[(22)] = inst_17215);

(statearr_17287[(20)] = inst_17200__$1);

(statearr_17287[(21)] = inst_17202__$1);

return statearr_17287;
})();
var statearr_17288_17364 = state_17260__$1;
(statearr_17288_17364[(2)] = null);

(statearr_17288_17364[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (40))){
var inst_17228 = (state_17260[(23)]);
var inst_17232 = done(null);
var inst_17233 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17228);
var state_17260__$1 = (function (){var statearr_17289 = state_17260;
(statearr_17289[(24)] = inst_17232);

return statearr_17289;
})();
var statearr_17290_17365 = state_17260__$1;
(statearr_17290_17365[(2)] = inst_17233);

(statearr_17290_17365[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (33))){
var inst_17219 = (state_17260[(25)]);
var inst_17221 = cljs.core.chunked_seq_QMARK_(inst_17219);
var state_17260__$1 = state_17260;
if(inst_17221){
var statearr_17291_17366 = state_17260__$1;
(statearr_17291_17366[(1)] = (36));

} else {
var statearr_17292_17367 = state_17260__$1;
(statearr_17292_17367[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (13))){
var inst_17151 = (state_17260[(26)]);
var inst_17154 = cljs.core.async.close_BANG_(inst_17151);
var state_17260__$1 = state_17260;
var statearr_17293_17368 = state_17260__$1;
(statearr_17293_17368[(2)] = inst_17154);

(statearr_17293_17368[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (22))){
var inst_17172 = (state_17260[(8)]);
var inst_17175 = cljs.core.async.close_BANG_(inst_17172);
var state_17260__$1 = state_17260;
var statearr_17294_17369 = state_17260__$1;
(statearr_17294_17369[(2)] = inst_17175);

(statearr_17294_17369[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (36))){
var inst_17219 = (state_17260[(25)]);
var inst_17223 = cljs.core.chunk_first(inst_17219);
var inst_17224 = cljs.core.chunk_rest(inst_17219);
var inst_17225 = cljs.core.count(inst_17223);
var inst_17200 = inst_17224;
var inst_17201 = inst_17223;
var inst_17202 = inst_17225;
var inst_17203 = (0);
var state_17260__$1 = (function (){var statearr_17295 = state_17260;
(statearr_17295[(9)] = inst_17201);

(statearr_17295[(10)] = inst_17203);

(statearr_17295[(20)] = inst_17200);

(statearr_17295[(21)] = inst_17202);

return statearr_17295;
})();
var statearr_17296_17370 = state_17260__$1;
(statearr_17296_17370[(2)] = null);

(statearr_17296_17370[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (41))){
var inst_17219 = (state_17260[(25)]);
var inst_17235 = (state_17260[(2)]);
var inst_17236 = cljs.core.next(inst_17219);
var inst_17200 = inst_17236;
var inst_17201 = null;
var inst_17202 = (0);
var inst_17203 = (0);
var state_17260__$1 = (function (){var statearr_17297 = state_17260;
(statearr_17297[(27)] = inst_17235);

(statearr_17297[(9)] = inst_17201);

(statearr_17297[(10)] = inst_17203);

(statearr_17297[(20)] = inst_17200);

(statearr_17297[(21)] = inst_17202);

return statearr_17297;
})();
var statearr_17298_17371 = state_17260__$1;
(statearr_17298_17371[(2)] = null);

(statearr_17298_17371[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (43))){
var state_17260__$1 = state_17260;
var statearr_17299_17372 = state_17260__$1;
(statearr_17299_17372[(2)] = null);

(statearr_17299_17372[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (29))){
var inst_17244 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
var statearr_17300_17373 = state_17260__$1;
(statearr_17300_17373[(2)] = inst_17244);

(statearr_17300_17373[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (44))){
var inst_17253 = (state_17260[(2)]);
var state_17260__$1 = (function (){var statearr_17301 = state_17260;
(statearr_17301[(28)] = inst_17253);

return statearr_17301;
})();
var statearr_17302_17374 = state_17260__$1;
(statearr_17302_17374[(2)] = null);

(statearr_17302_17374[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (6))){
var inst_17192 = (state_17260[(29)]);
var inst_17191 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17192__$1 = cljs.core.keys(inst_17191);
var inst_17193 = cljs.core.count(inst_17192__$1);
var inst_17194 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17193) : cljs.core.reset_BANG_.call(null,dctr,inst_17193));
var inst_17199 = cljs.core.seq(inst_17192__$1);
var inst_17200 = inst_17199;
var inst_17201 = null;
var inst_17202 = (0);
var inst_17203 = (0);
var state_17260__$1 = (function (){var statearr_17303 = state_17260;
(statearr_17303[(9)] = inst_17201);

(statearr_17303[(10)] = inst_17203);

(statearr_17303[(20)] = inst_17200);

(statearr_17303[(21)] = inst_17202);

(statearr_17303[(29)] = inst_17192__$1);

(statearr_17303[(30)] = inst_17194);

return statearr_17303;
})();
var statearr_17304_17375 = state_17260__$1;
(statearr_17304_17375[(2)] = null);

(statearr_17304_17375[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (28))){
var inst_17200 = (state_17260[(20)]);
var inst_17219 = (state_17260[(25)]);
var inst_17219__$1 = cljs.core.seq(inst_17200);
var state_17260__$1 = (function (){var statearr_17305 = state_17260;
(statearr_17305[(25)] = inst_17219__$1);

return statearr_17305;
})();
if(inst_17219__$1){
var statearr_17306_17376 = state_17260__$1;
(statearr_17306_17376[(1)] = (33));

} else {
var statearr_17307_17377 = state_17260__$1;
(statearr_17307_17377[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (25))){
var inst_17203 = (state_17260[(10)]);
var inst_17202 = (state_17260[(21)]);
var inst_17205 = (inst_17203 < inst_17202);
var inst_17206 = inst_17205;
var state_17260__$1 = state_17260;
if(cljs.core.truth_(inst_17206)){
var statearr_17308_17378 = state_17260__$1;
(statearr_17308_17378[(1)] = (27));

} else {
var statearr_17309_17379 = state_17260__$1;
(statearr_17309_17379[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (34))){
var state_17260__$1 = state_17260;
var statearr_17310_17380 = state_17260__$1;
(statearr_17310_17380[(2)] = null);

(statearr_17310_17380[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (17))){
var state_17260__$1 = state_17260;
var statearr_17311_17381 = state_17260__$1;
(statearr_17311_17381[(2)] = null);

(statearr_17311_17381[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (3))){
var inst_17258 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17260__$1,inst_17258);
} else {
if((state_val_17261 === (12))){
var inst_17187 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
var statearr_17312_17382 = state_17260__$1;
(statearr_17312_17382[(2)] = inst_17187);

(statearr_17312_17382[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (2))){
var state_17260__$1 = state_17260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17260__$1,(4),ch);
} else {
if((state_val_17261 === (23))){
var state_17260__$1 = state_17260;
var statearr_17313_17383 = state_17260__$1;
(statearr_17313_17383[(2)] = null);

(statearr_17313_17383[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (35))){
var inst_17242 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
var statearr_17314_17384 = state_17260__$1;
(statearr_17314_17384[(2)] = inst_17242);

(statearr_17314_17384[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (19))){
var inst_17161 = (state_17260[(7)]);
var inst_17165 = cljs.core.chunk_first(inst_17161);
var inst_17166 = cljs.core.chunk_rest(inst_17161);
var inst_17167 = cljs.core.count(inst_17165);
var inst_17141 = inst_17166;
var inst_17142 = inst_17165;
var inst_17143 = inst_17167;
var inst_17144 = (0);
var state_17260__$1 = (function (){var statearr_17315 = state_17260;
(statearr_17315[(13)] = inst_17144);

(statearr_17315[(15)] = inst_17142);

(statearr_17315[(16)] = inst_17141);

(statearr_17315[(17)] = inst_17143);

return statearr_17315;
})();
var statearr_17316_17385 = state_17260__$1;
(statearr_17316_17385[(2)] = null);

(statearr_17316_17385[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (11))){
var inst_17141 = (state_17260[(16)]);
var inst_17161 = (state_17260[(7)]);
var inst_17161__$1 = cljs.core.seq(inst_17141);
var state_17260__$1 = (function (){var statearr_17317 = state_17260;
(statearr_17317[(7)] = inst_17161__$1);

return statearr_17317;
})();
if(inst_17161__$1){
var statearr_17318_17386 = state_17260__$1;
(statearr_17318_17386[(1)] = (16));

} else {
var statearr_17319_17387 = state_17260__$1;
(statearr_17319_17387[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (9))){
var inst_17189 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
var statearr_17320_17388 = state_17260__$1;
(statearr_17320_17388[(2)] = inst_17189);

(statearr_17320_17388[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (5))){
var inst_17139 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17140 = cljs.core.seq(inst_17139);
var inst_17141 = inst_17140;
var inst_17142 = null;
var inst_17143 = (0);
var inst_17144 = (0);
var state_17260__$1 = (function (){var statearr_17321 = state_17260;
(statearr_17321[(13)] = inst_17144);

(statearr_17321[(15)] = inst_17142);

(statearr_17321[(16)] = inst_17141);

(statearr_17321[(17)] = inst_17143);

return statearr_17321;
})();
var statearr_17322_17389 = state_17260__$1;
(statearr_17322_17389[(2)] = null);

(statearr_17322_17389[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (14))){
var state_17260__$1 = state_17260;
var statearr_17323_17390 = state_17260__$1;
(statearr_17323_17390[(2)] = null);

(statearr_17323_17390[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (45))){
var inst_17250 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
var statearr_17324_17391 = state_17260__$1;
(statearr_17324_17391[(2)] = inst_17250);

(statearr_17324_17391[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (26))){
var inst_17192 = (state_17260[(29)]);
var inst_17246 = (state_17260[(2)]);
var inst_17247 = cljs.core.seq(inst_17192);
var state_17260__$1 = (function (){var statearr_17325 = state_17260;
(statearr_17325[(31)] = inst_17246);

return statearr_17325;
})();
if(inst_17247){
var statearr_17326_17392 = state_17260__$1;
(statearr_17326_17392[(1)] = (42));

} else {
var statearr_17327_17393 = state_17260__$1;
(statearr_17327_17393[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (16))){
var inst_17161 = (state_17260[(7)]);
var inst_17163 = cljs.core.chunked_seq_QMARK_(inst_17161);
var state_17260__$1 = state_17260;
if(inst_17163){
var statearr_17328_17394 = state_17260__$1;
(statearr_17328_17394[(1)] = (19));

} else {
var statearr_17329_17395 = state_17260__$1;
(statearr_17329_17395[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (38))){
var inst_17239 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
var statearr_17330_17396 = state_17260__$1;
(statearr_17330_17396[(2)] = inst_17239);

(statearr_17330_17396[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (30))){
var state_17260__$1 = state_17260;
var statearr_17331_17397 = state_17260__$1;
(statearr_17331_17397[(2)] = null);

(statearr_17331_17397[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (10))){
var inst_17144 = (state_17260[(13)]);
var inst_17142 = (state_17260[(15)]);
var inst_17150 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17142,inst_17144);
var inst_17151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17150,(0),null);
var inst_17152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17150,(1),null);
var state_17260__$1 = (function (){var statearr_17332 = state_17260;
(statearr_17332[(26)] = inst_17151);

return statearr_17332;
})();
if(cljs.core.truth_(inst_17152)){
var statearr_17333_17398 = state_17260__$1;
(statearr_17333_17398[(1)] = (13));

} else {
var statearr_17334_17399 = state_17260__$1;
(statearr_17334_17399[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (18))){
var inst_17185 = (state_17260[(2)]);
var state_17260__$1 = state_17260;
var statearr_17335_17400 = state_17260__$1;
(statearr_17335_17400[(2)] = inst_17185);

(statearr_17335_17400[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (42))){
var state_17260__$1 = state_17260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17260__$1,(45),dchan);
} else {
if((state_val_17261 === (37))){
var inst_17228 = (state_17260[(23)]);
var inst_17132 = (state_17260[(11)]);
var inst_17219 = (state_17260[(25)]);
var inst_17228__$1 = cljs.core.first(inst_17219);
var inst_17229 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17228__$1,inst_17132,done);
var state_17260__$1 = (function (){var statearr_17336 = state_17260;
(statearr_17336[(23)] = inst_17228__$1);

return statearr_17336;
})();
if(cljs.core.truth_(inst_17229)){
var statearr_17337_17401 = state_17260__$1;
(statearr_17337_17401[(1)] = (39));

} else {
var statearr_17338_17402 = state_17260__$1;
(statearr_17338_17402[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17261 === (8))){
var inst_17144 = (state_17260[(13)]);
var inst_17143 = (state_17260[(17)]);
var inst_17146 = (inst_17144 < inst_17143);
var inst_17147 = inst_17146;
var state_17260__$1 = state_17260;
if(cljs.core.truth_(inst_17147)){
var statearr_17339_17403 = state_17260__$1;
(statearr_17339_17403[(1)] = (10));

} else {
var statearr_17340_17404 = state_17260__$1;
(statearr_17340_17404[(1)] = (11));

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
});})(c__16031__auto___17350,cs,m,dchan,dctr,done))
;
return ((function (switch__15917__auto__,c__16031__auto___17350,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15918__auto__ = null;
var cljs$core$async$mult_$_state_machine__15918__auto____0 = (function (){
var statearr_17344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17344[(0)] = cljs$core$async$mult_$_state_machine__15918__auto__);

(statearr_17344[(1)] = (1));

return statearr_17344;
});
var cljs$core$async$mult_$_state_machine__15918__auto____1 = (function (state_17260){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_17260);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e17345){if((e17345 instanceof Object)){
var ex__15921__auto__ = e17345;
var statearr_17346_17405 = state_17260;
(statearr_17346_17405[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17260);

return cljs.core.cst$kw$recur;
} else {
throw e17345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__17406 = state_17260;
state_17260 = G__17406;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15918__auto__ = function(state_17260){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15918__auto____1.call(this,state_17260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15918__auto____0;
cljs$core$async$mult_$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15918__auto____1;
return cljs$core$async$mult_$_state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___17350,cs,m,dchan,dctr,done))
})();
var state__16033__auto__ = (function (){var statearr_17347 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_17347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___17350);

return statearr_17347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___17350,cs,m,dchan,dctr,done))
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
var args17407 = [];
var len__7542__auto___17410 = arguments.length;
var i__7543__auto___17411 = (0);
while(true){
if((i__7543__auto___17411 < len__7542__auto___17410)){
args17407.push((arguments[i__7543__auto___17411]));

var G__17412 = (i__7543__auto___17411 + (1));
i__7543__auto___17411 = G__17412;
continue;
} else {
}
break;
}

var G__17409 = args17407.length;
switch (G__17409) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17407.length)].join('')));

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
var len__7542__auto___17424 = arguments.length;
var i__7543__auto___17425 = (0);
while(true){
if((i__7543__auto___17425 < len__7542__auto___17424)){
args__7549__auto__.push((arguments[i__7543__auto___17425]));

var G__17426 = (i__7543__auto___17425 + (1));
i__7543__auto___17425 = G__17426;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((3) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7550__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17418){
var map__17419 = p__17418;
var map__17419__$1 = ((((!((map__17419 == null)))?((((map__17419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17419):map__17419);
var opts = map__17419__$1;
var statearr_17421_17427 = state;
(statearr_17421_17427[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17419,map__17419__$1,opts){
return (function (val){
var statearr_17422_17428 = state;
(statearr_17422_17428[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17419,map__17419__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17423_17429 = state;
(statearr_17423_17429[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17414){
var G__17415 = cljs.core.first(seq17414);
var seq17414__$1 = cljs.core.next(seq17414);
var G__17416 = cljs.core.first(seq17414__$1);
var seq17414__$2 = cljs.core.next(seq17414__$1);
var G__17417 = cljs.core.first(seq17414__$2);
var seq17414__$3 = cljs.core.next(seq17414__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17415,G__17416,G__17417,seq17414__$3);
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
var cs = (function (){var G__17596 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17596) : cljs.core.atom.call(null,G__17596));
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
if(typeof cljs.core.async.t_cljs$core$async17597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17597 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17598){
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
this.meta17598 = meta17598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17599,meta17598__$1){
var self__ = this;
var _17599__$1 = this;
return (new cljs.core.async.t_cljs$core$async17597(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17598__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17599){
var self__ = this;
var _17599__$1 = this;
return self__.meta17598;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17600_17762 = self__.cs;
var G__17601_17763 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17600_17762,G__17601_17763) : cljs.core.reset_BANG_.call(null,G__17600_17762,G__17601_17763));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17597.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17597.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17598], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17597";

cljs.core.async.t_cljs$core$async17597.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17597");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17597 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17597(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17598){
return (new cljs.core.async.t_cljs$core$async17597(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17598));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17597(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16031__auto___17764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___17764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___17764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17699){
var state_val_17700 = (state_17699[(1)]);
if((state_val_17700 === (7))){
var inst_17617 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
var statearr_17701_17765 = state_17699__$1;
(statearr_17701_17765[(2)] = inst_17617);

(statearr_17701_17765[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (20))){
var inst_17629 = (state_17699[(7)]);
var state_17699__$1 = state_17699;
var statearr_17702_17766 = state_17699__$1;
(statearr_17702_17766[(2)] = inst_17629);

(statearr_17702_17766[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (27))){
var state_17699__$1 = state_17699;
var statearr_17703_17767 = state_17699__$1;
(statearr_17703_17767[(2)] = null);

(statearr_17703_17767[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (1))){
var inst_17605 = (state_17699[(8)]);
var inst_17605__$1 = calc_state();
var inst_17607 = (inst_17605__$1 == null);
var inst_17608 = cljs.core.not(inst_17607);
var state_17699__$1 = (function (){var statearr_17704 = state_17699;
(statearr_17704[(8)] = inst_17605__$1);

return statearr_17704;
})();
if(inst_17608){
var statearr_17705_17768 = state_17699__$1;
(statearr_17705_17768[(1)] = (2));

} else {
var statearr_17706_17769 = state_17699__$1;
(statearr_17706_17769[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (24))){
var inst_17659 = (state_17699[(9)]);
var inst_17673 = (state_17699[(10)]);
var inst_17652 = (state_17699[(11)]);
var inst_17673__$1 = (inst_17652.cljs$core$IFn$_invoke$arity$1 ? inst_17652.cljs$core$IFn$_invoke$arity$1(inst_17659) : inst_17652.call(null,inst_17659));
var state_17699__$1 = (function (){var statearr_17707 = state_17699;
(statearr_17707[(10)] = inst_17673__$1);

return statearr_17707;
})();
if(cljs.core.truth_(inst_17673__$1)){
var statearr_17708_17770 = state_17699__$1;
(statearr_17708_17770[(1)] = (29));

} else {
var statearr_17709_17771 = state_17699__$1;
(statearr_17709_17771[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (4))){
var inst_17620 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
if(cljs.core.truth_(inst_17620)){
var statearr_17710_17772 = state_17699__$1;
(statearr_17710_17772[(1)] = (8));

} else {
var statearr_17711_17773 = state_17699__$1;
(statearr_17711_17773[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (15))){
var inst_17646 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
if(cljs.core.truth_(inst_17646)){
var statearr_17712_17774 = state_17699__$1;
(statearr_17712_17774[(1)] = (19));

} else {
var statearr_17713_17775 = state_17699__$1;
(statearr_17713_17775[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (21))){
var inst_17651 = (state_17699[(12)]);
var inst_17651__$1 = (state_17699[(2)]);
var inst_17652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17651__$1,cljs.core.cst$kw$solos);
var inst_17653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17651__$1,cljs.core.cst$kw$mutes);
var inst_17654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17651__$1,cljs.core.cst$kw$reads);
var state_17699__$1 = (function (){var statearr_17714 = state_17699;
(statearr_17714[(13)] = inst_17653);

(statearr_17714[(12)] = inst_17651__$1);

(statearr_17714[(11)] = inst_17652);

return statearr_17714;
})();
return cljs.core.async.ioc_alts_BANG_(state_17699__$1,(22),inst_17654);
} else {
if((state_val_17700 === (31))){
var inst_17681 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
if(cljs.core.truth_(inst_17681)){
var statearr_17715_17776 = state_17699__$1;
(statearr_17715_17776[(1)] = (32));

} else {
var statearr_17716_17777 = state_17699__$1;
(statearr_17716_17777[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (32))){
var inst_17658 = (state_17699[(14)]);
var state_17699__$1 = state_17699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17699__$1,(35),out,inst_17658);
} else {
if((state_val_17700 === (33))){
var inst_17651 = (state_17699[(12)]);
var inst_17629 = inst_17651;
var state_17699__$1 = (function (){var statearr_17717 = state_17699;
(statearr_17717[(7)] = inst_17629);

return statearr_17717;
})();
var statearr_17718_17778 = state_17699__$1;
(statearr_17718_17778[(2)] = null);

(statearr_17718_17778[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (13))){
var inst_17629 = (state_17699[(7)]);
var inst_17636 = inst_17629.cljs$lang$protocol_mask$partition0$;
var inst_17637 = (inst_17636 & (64));
var inst_17638 = inst_17629.cljs$core$ISeq$;
var inst_17639 = (inst_17637) || (inst_17638);
var state_17699__$1 = state_17699;
if(cljs.core.truth_(inst_17639)){
var statearr_17719_17779 = state_17699__$1;
(statearr_17719_17779[(1)] = (16));

} else {
var statearr_17720_17780 = state_17699__$1;
(statearr_17720_17780[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (22))){
var inst_17659 = (state_17699[(9)]);
var inst_17658 = (state_17699[(14)]);
var inst_17657 = (state_17699[(2)]);
var inst_17658__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17657,(0),null);
var inst_17659__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17657,(1),null);
var inst_17660 = (inst_17658__$1 == null);
var inst_17661 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17659__$1,change);
var inst_17662 = (inst_17660) || (inst_17661);
var state_17699__$1 = (function (){var statearr_17721 = state_17699;
(statearr_17721[(9)] = inst_17659__$1);

(statearr_17721[(14)] = inst_17658__$1);

return statearr_17721;
})();
if(cljs.core.truth_(inst_17662)){
var statearr_17722_17781 = state_17699__$1;
(statearr_17722_17781[(1)] = (23));

} else {
var statearr_17723_17782 = state_17699__$1;
(statearr_17723_17782[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (36))){
var inst_17651 = (state_17699[(12)]);
var inst_17629 = inst_17651;
var state_17699__$1 = (function (){var statearr_17724 = state_17699;
(statearr_17724[(7)] = inst_17629);

return statearr_17724;
})();
var statearr_17725_17783 = state_17699__$1;
(statearr_17725_17783[(2)] = null);

(statearr_17725_17783[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (29))){
var inst_17673 = (state_17699[(10)]);
var state_17699__$1 = state_17699;
var statearr_17726_17784 = state_17699__$1;
(statearr_17726_17784[(2)] = inst_17673);

(statearr_17726_17784[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (6))){
var state_17699__$1 = state_17699;
var statearr_17727_17785 = state_17699__$1;
(statearr_17727_17785[(2)] = false);

(statearr_17727_17785[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (28))){
var inst_17669 = (state_17699[(2)]);
var inst_17670 = calc_state();
var inst_17629 = inst_17670;
var state_17699__$1 = (function (){var statearr_17728 = state_17699;
(statearr_17728[(7)] = inst_17629);

(statearr_17728[(15)] = inst_17669);

return statearr_17728;
})();
var statearr_17729_17786 = state_17699__$1;
(statearr_17729_17786[(2)] = null);

(statearr_17729_17786[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (25))){
var inst_17695 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
var statearr_17730_17787 = state_17699__$1;
(statearr_17730_17787[(2)] = inst_17695);

(statearr_17730_17787[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (34))){
var inst_17693 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
var statearr_17731_17788 = state_17699__$1;
(statearr_17731_17788[(2)] = inst_17693);

(statearr_17731_17788[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (17))){
var state_17699__$1 = state_17699;
var statearr_17732_17789 = state_17699__$1;
(statearr_17732_17789[(2)] = false);

(statearr_17732_17789[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (3))){
var state_17699__$1 = state_17699;
var statearr_17733_17790 = state_17699__$1;
(statearr_17733_17790[(2)] = false);

(statearr_17733_17790[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (12))){
var inst_17697 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17699__$1,inst_17697);
} else {
if((state_val_17700 === (2))){
var inst_17605 = (state_17699[(8)]);
var inst_17610 = inst_17605.cljs$lang$protocol_mask$partition0$;
var inst_17611 = (inst_17610 & (64));
var inst_17612 = inst_17605.cljs$core$ISeq$;
var inst_17613 = (inst_17611) || (inst_17612);
var state_17699__$1 = state_17699;
if(cljs.core.truth_(inst_17613)){
var statearr_17734_17791 = state_17699__$1;
(statearr_17734_17791[(1)] = (5));

} else {
var statearr_17735_17792 = state_17699__$1;
(statearr_17735_17792[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (23))){
var inst_17658 = (state_17699[(14)]);
var inst_17664 = (inst_17658 == null);
var state_17699__$1 = state_17699;
if(cljs.core.truth_(inst_17664)){
var statearr_17736_17793 = state_17699__$1;
(statearr_17736_17793[(1)] = (26));

} else {
var statearr_17737_17794 = state_17699__$1;
(statearr_17737_17794[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (35))){
var inst_17684 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
if(cljs.core.truth_(inst_17684)){
var statearr_17738_17795 = state_17699__$1;
(statearr_17738_17795[(1)] = (36));

} else {
var statearr_17739_17796 = state_17699__$1;
(statearr_17739_17796[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (19))){
var inst_17629 = (state_17699[(7)]);
var inst_17648 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17629);
var state_17699__$1 = state_17699;
var statearr_17740_17797 = state_17699__$1;
(statearr_17740_17797[(2)] = inst_17648);

(statearr_17740_17797[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (11))){
var inst_17629 = (state_17699[(7)]);
var inst_17633 = (inst_17629 == null);
var inst_17634 = cljs.core.not(inst_17633);
var state_17699__$1 = state_17699;
if(inst_17634){
var statearr_17741_17798 = state_17699__$1;
(statearr_17741_17798[(1)] = (13));

} else {
var statearr_17742_17799 = state_17699__$1;
(statearr_17742_17799[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (9))){
var inst_17605 = (state_17699[(8)]);
var state_17699__$1 = state_17699;
var statearr_17743_17800 = state_17699__$1;
(statearr_17743_17800[(2)] = inst_17605);

(statearr_17743_17800[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (5))){
var state_17699__$1 = state_17699;
var statearr_17744_17801 = state_17699__$1;
(statearr_17744_17801[(2)] = true);

(statearr_17744_17801[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (14))){
var state_17699__$1 = state_17699;
var statearr_17745_17802 = state_17699__$1;
(statearr_17745_17802[(2)] = false);

(statearr_17745_17802[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (26))){
var inst_17659 = (state_17699[(9)]);
var inst_17666 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17659);
var state_17699__$1 = state_17699;
var statearr_17746_17803 = state_17699__$1;
(statearr_17746_17803[(2)] = inst_17666);

(statearr_17746_17803[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (16))){
var state_17699__$1 = state_17699;
var statearr_17747_17804 = state_17699__$1;
(statearr_17747_17804[(2)] = true);

(statearr_17747_17804[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (38))){
var inst_17689 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
var statearr_17748_17805 = state_17699__$1;
(statearr_17748_17805[(2)] = inst_17689);

(statearr_17748_17805[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (30))){
var inst_17653 = (state_17699[(13)]);
var inst_17659 = (state_17699[(9)]);
var inst_17652 = (state_17699[(11)]);
var inst_17676 = cljs.core.empty_QMARK_(inst_17652);
var inst_17677 = (inst_17653.cljs$core$IFn$_invoke$arity$1 ? inst_17653.cljs$core$IFn$_invoke$arity$1(inst_17659) : inst_17653.call(null,inst_17659));
var inst_17678 = cljs.core.not(inst_17677);
var inst_17679 = (inst_17676) && (inst_17678);
var state_17699__$1 = state_17699;
var statearr_17749_17806 = state_17699__$1;
(statearr_17749_17806[(2)] = inst_17679);

(statearr_17749_17806[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (10))){
var inst_17605 = (state_17699[(8)]);
var inst_17625 = (state_17699[(2)]);
var inst_17626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17625,cljs.core.cst$kw$solos);
var inst_17627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17625,cljs.core.cst$kw$mutes);
var inst_17628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17625,cljs.core.cst$kw$reads);
var inst_17629 = inst_17605;
var state_17699__$1 = (function (){var statearr_17750 = state_17699;
(statearr_17750[(16)] = inst_17626);

(statearr_17750[(7)] = inst_17629);

(statearr_17750[(17)] = inst_17628);

(statearr_17750[(18)] = inst_17627);

return statearr_17750;
})();
var statearr_17751_17807 = state_17699__$1;
(statearr_17751_17807[(2)] = null);

(statearr_17751_17807[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (18))){
var inst_17643 = (state_17699[(2)]);
var state_17699__$1 = state_17699;
var statearr_17752_17808 = state_17699__$1;
(statearr_17752_17808[(2)] = inst_17643);

(statearr_17752_17808[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (37))){
var state_17699__$1 = state_17699;
var statearr_17753_17809 = state_17699__$1;
(statearr_17753_17809[(2)] = null);

(statearr_17753_17809[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17700 === (8))){
var inst_17605 = (state_17699[(8)]);
var inst_17622 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17605);
var state_17699__$1 = state_17699;
var statearr_17754_17810 = state_17699__$1;
(statearr_17754_17810[(2)] = inst_17622);

(statearr_17754_17810[(1)] = (10));


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
});})(c__16031__auto___17764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15917__auto__,c__16031__auto___17764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15918__auto__ = null;
var cljs$core$async$mix_$_state_machine__15918__auto____0 = (function (){
var statearr_17758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17758[(0)] = cljs$core$async$mix_$_state_machine__15918__auto__);

(statearr_17758[(1)] = (1));

return statearr_17758;
});
var cljs$core$async$mix_$_state_machine__15918__auto____1 = (function (state_17699){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_17699);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e17759){if((e17759 instanceof Object)){
var ex__15921__auto__ = e17759;
var statearr_17760_17811 = state_17699;
(statearr_17760_17811[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17699);

return cljs.core.cst$kw$recur;
} else {
throw e17759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__17812 = state_17699;
state_17699 = G__17812;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15918__auto__ = function(state_17699){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15918__auto____1.call(this,state_17699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15918__auto____0;
cljs$core$async$mix_$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15918__auto____1;
return cljs$core$async$mix_$_state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___17764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16033__auto__ = (function (){var statearr_17761 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_17761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___17764);

return statearr_17761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___17764,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args17813 = [];
var len__7542__auto___17816 = arguments.length;
var i__7543__auto___17817 = (0);
while(true){
if((i__7543__auto___17817 < len__7542__auto___17816)){
args17813.push((arguments[i__7543__auto___17817]));

var G__17818 = (i__7543__auto___17817 + (1));
i__7543__auto___17817 = G__17818;
continue;
} else {
}
break;
}

var G__17815 = args17813.length;
switch (G__17815) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17813.length)].join('')));

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
var args17821 = [];
var len__7542__auto___17949 = arguments.length;
var i__7543__auto___17950 = (0);
while(true){
if((i__7543__auto___17950 < len__7542__auto___17949)){
args17821.push((arguments[i__7543__auto___17950]));

var G__17951 = (i__7543__auto___17950 + (1));
i__7543__auto___17950 = G__17951;
continue;
} else {
}
break;
}

var G__17823 = args17821.length;
switch (G__17823) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17821.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17824 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17824) : cljs.core.atom.call(null,G__17824));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6484__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6484__auto__,mults){
return (function (p1__17820_SHARP_){
if(cljs.core.truth_((p1__17820_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17820_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17820_SHARP_.call(null,topic)))){
return p1__17820_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17820_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6484__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17825 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17826){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17826 = meta17826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17827,meta17826__$1){
var self__ = this;
var _17827__$1 = this;
return (new cljs.core.async.t_cljs$core$async17825(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17826__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17827){
var self__ = this;
var _17827__$1 = this;
return self__.meta17826;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17828 = self__.mults;
var G__17829 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17828,G__17829) : cljs.core.reset_BANG_.call(null,G__17828,G__17829));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17825.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17826], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17825";

cljs.core.async.t_cljs$core$async17825.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17825");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17825 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17825(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17826){
return (new cljs.core.async.t_cljs$core$async17825(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17826));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17825(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16031__auto___17953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___17953,mults,ensure_mult,p){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___17953,mults,ensure_mult,p){
return (function (state_17901){
var state_val_17902 = (state_17901[(1)]);
if((state_val_17902 === (7))){
var inst_17897 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17903_17954 = state_17901__$1;
(statearr_17903_17954[(2)] = inst_17897);

(statearr_17903_17954[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (20))){
var state_17901__$1 = state_17901;
var statearr_17904_17955 = state_17901__$1;
(statearr_17904_17955[(2)] = null);

(statearr_17904_17955[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (1))){
var state_17901__$1 = state_17901;
var statearr_17905_17956 = state_17901__$1;
(statearr_17905_17956[(2)] = null);

(statearr_17905_17956[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (24))){
var inst_17880 = (state_17901[(7)]);
var inst_17889 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17880);
var state_17901__$1 = state_17901;
var statearr_17906_17957 = state_17901__$1;
(statearr_17906_17957[(2)] = inst_17889);

(statearr_17906_17957[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (4))){
var inst_17832 = (state_17901[(8)]);
var inst_17832__$1 = (state_17901[(2)]);
var inst_17833 = (inst_17832__$1 == null);
var state_17901__$1 = (function (){var statearr_17907 = state_17901;
(statearr_17907[(8)] = inst_17832__$1);

return statearr_17907;
})();
if(cljs.core.truth_(inst_17833)){
var statearr_17908_17958 = state_17901__$1;
(statearr_17908_17958[(1)] = (5));

} else {
var statearr_17909_17959 = state_17901__$1;
(statearr_17909_17959[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (15))){
var inst_17874 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17910_17960 = state_17901__$1;
(statearr_17910_17960[(2)] = inst_17874);

(statearr_17910_17960[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (21))){
var inst_17894 = (state_17901[(2)]);
var state_17901__$1 = (function (){var statearr_17911 = state_17901;
(statearr_17911[(9)] = inst_17894);

return statearr_17911;
})();
var statearr_17912_17961 = state_17901__$1;
(statearr_17912_17961[(2)] = null);

(statearr_17912_17961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (13))){
var inst_17856 = (state_17901[(10)]);
var inst_17858 = cljs.core.chunked_seq_QMARK_(inst_17856);
var state_17901__$1 = state_17901;
if(inst_17858){
var statearr_17913_17962 = state_17901__$1;
(statearr_17913_17962[(1)] = (16));

} else {
var statearr_17914_17963 = state_17901__$1;
(statearr_17914_17963[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (22))){
var inst_17886 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
if(cljs.core.truth_(inst_17886)){
var statearr_17915_17964 = state_17901__$1;
(statearr_17915_17964[(1)] = (23));

} else {
var statearr_17916_17965 = state_17901__$1;
(statearr_17916_17965[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (6))){
var inst_17882 = (state_17901[(11)]);
var inst_17880 = (state_17901[(7)]);
var inst_17832 = (state_17901[(8)]);
var inst_17880__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17832) : topic_fn.call(null,inst_17832));
var inst_17881 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17882__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17881,inst_17880__$1);
var state_17901__$1 = (function (){var statearr_17917 = state_17901;
(statearr_17917[(11)] = inst_17882__$1);

(statearr_17917[(7)] = inst_17880__$1);

return statearr_17917;
})();
if(cljs.core.truth_(inst_17882__$1)){
var statearr_17918_17966 = state_17901__$1;
(statearr_17918_17966[(1)] = (19));

} else {
var statearr_17919_17967 = state_17901__$1;
(statearr_17919_17967[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (25))){
var inst_17891 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17920_17968 = state_17901__$1;
(statearr_17920_17968[(2)] = inst_17891);

(statearr_17920_17968[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (17))){
var inst_17856 = (state_17901[(10)]);
var inst_17865 = cljs.core.first(inst_17856);
var inst_17866 = cljs.core.async.muxch_STAR_(inst_17865);
var inst_17867 = cljs.core.async.close_BANG_(inst_17866);
var inst_17868 = cljs.core.next(inst_17856);
var inst_17842 = inst_17868;
var inst_17843 = null;
var inst_17844 = (0);
var inst_17845 = (0);
var state_17901__$1 = (function (){var statearr_17921 = state_17901;
(statearr_17921[(12)] = inst_17844);

(statearr_17921[(13)] = inst_17842);

(statearr_17921[(14)] = inst_17845);

(statearr_17921[(15)] = inst_17843);

(statearr_17921[(16)] = inst_17867);

return statearr_17921;
})();
var statearr_17922_17969 = state_17901__$1;
(statearr_17922_17969[(2)] = null);

(statearr_17922_17969[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (3))){
var inst_17899 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17901__$1,inst_17899);
} else {
if((state_val_17902 === (12))){
var inst_17876 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17923_17970 = state_17901__$1;
(statearr_17923_17970[(2)] = inst_17876);

(statearr_17923_17970[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (2))){
var state_17901__$1 = state_17901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17901__$1,(4),ch);
} else {
if((state_val_17902 === (23))){
var state_17901__$1 = state_17901;
var statearr_17924_17971 = state_17901__$1;
(statearr_17924_17971[(2)] = null);

(statearr_17924_17971[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (19))){
var inst_17882 = (state_17901[(11)]);
var inst_17832 = (state_17901[(8)]);
var inst_17884 = cljs.core.async.muxch_STAR_(inst_17882);
var state_17901__$1 = state_17901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17901__$1,(22),inst_17884,inst_17832);
} else {
if((state_val_17902 === (11))){
var inst_17856 = (state_17901[(10)]);
var inst_17842 = (state_17901[(13)]);
var inst_17856__$1 = cljs.core.seq(inst_17842);
var state_17901__$1 = (function (){var statearr_17925 = state_17901;
(statearr_17925[(10)] = inst_17856__$1);

return statearr_17925;
})();
if(inst_17856__$1){
var statearr_17926_17972 = state_17901__$1;
(statearr_17926_17972[(1)] = (13));

} else {
var statearr_17927_17973 = state_17901__$1;
(statearr_17927_17973[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (9))){
var inst_17878 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17928_17974 = state_17901__$1;
(statearr_17928_17974[(2)] = inst_17878);

(statearr_17928_17974[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (5))){
var inst_17839 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17840 = cljs.core.vals(inst_17839);
var inst_17841 = cljs.core.seq(inst_17840);
var inst_17842 = inst_17841;
var inst_17843 = null;
var inst_17844 = (0);
var inst_17845 = (0);
var state_17901__$1 = (function (){var statearr_17929 = state_17901;
(statearr_17929[(12)] = inst_17844);

(statearr_17929[(13)] = inst_17842);

(statearr_17929[(14)] = inst_17845);

(statearr_17929[(15)] = inst_17843);

return statearr_17929;
})();
var statearr_17930_17975 = state_17901__$1;
(statearr_17930_17975[(2)] = null);

(statearr_17930_17975[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (14))){
var state_17901__$1 = state_17901;
var statearr_17934_17976 = state_17901__$1;
(statearr_17934_17976[(2)] = null);

(statearr_17934_17976[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (16))){
var inst_17856 = (state_17901[(10)]);
var inst_17860 = cljs.core.chunk_first(inst_17856);
var inst_17861 = cljs.core.chunk_rest(inst_17856);
var inst_17862 = cljs.core.count(inst_17860);
var inst_17842 = inst_17861;
var inst_17843 = inst_17860;
var inst_17844 = inst_17862;
var inst_17845 = (0);
var state_17901__$1 = (function (){var statearr_17935 = state_17901;
(statearr_17935[(12)] = inst_17844);

(statearr_17935[(13)] = inst_17842);

(statearr_17935[(14)] = inst_17845);

(statearr_17935[(15)] = inst_17843);

return statearr_17935;
})();
var statearr_17936_17977 = state_17901__$1;
(statearr_17936_17977[(2)] = null);

(statearr_17936_17977[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (10))){
var inst_17844 = (state_17901[(12)]);
var inst_17842 = (state_17901[(13)]);
var inst_17845 = (state_17901[(14)]);
var inst_17843 = (state_17901[(15)]);
var inst_17850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17843,inst_17845);
var inst_17851 = cljs.core.async.muxch_STAR_(inst_17850);
var inst_17852 = cljs.core.async.close_BANG_(inst_17851);
var inst_17853 = (inst_17845 + (1));
var tmp17931 = inst_17844;
var tmp17932 = inst_17842;
var tmp17933 = inst_17843;
var inst_17842__$1 = tmp17932;
var inst_17843__$1 = tmp17933;
var inst_17844__$1 = tmp17931;
var inst_17845__$1 = inst_17853;
var state_17901__$1 = (function (){var statearr_17937 = state_17901;
(statearr_17937[(12)] = inst_17844__$1);

(statearr_17937[(17)] = inst_17852);

(statearr_17937[(13)] = inst_17842__$1);

(statearr_17937[(14)] = inst_17845__$1);

(statearr_17937[(15)] = inst_17843__$1);

return statearr_17937;
})();
var statearr_17938_17978 = state_17901__$1;
(statearr_17938_17978[(2)] = null);

(statearr_17938_17978[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (18))){
var inst_17871 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17939_17979 = state_17901__$1;
(statearr_17939_17979[(2)] = inst_17871);

(statearr_17939_17979[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17902 === (8))){
var inst_17844 = (state_17901[(12)]);
var inst_17845 = (state_17901[(14)]);
var inst_17847 = (inst_17845 < inst_17844);
var inst_17848 = inst_17847;
var state_17901__$1 = state_17901;
if(cljs.core.truth_(inst_17848)){
var statearr_17940_17980 = state_17901__$1;
(statearr_17940_17980[(1)] = (10));

} else {
var statearr_17941_17981 = state_17901__$1;
(statearr_17941_17981[(1)] = (11));

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
});})(c__16031__auto___17953,mults,ensure_mult,p))
;
return ((function (switch__15917__auto__,c__16031__auto___17953,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_17945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17945[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_17945[(1)] = (1));

return statearr_17945;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_17901){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_17901);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e17946){if((e17946 instanceof Object)){
var ex__15921__auto__ = e17946;
var statearr_17947_17982 = state_17901;
(statearr_17947_17982[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17901);

return cljs.core.cst$kw$recur;
} else {
throw e17946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__17983 = state_17901;
state_17901 = G__17983;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_17901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_17901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___17953,mults,ensure_mult,p))
})();
var state__16033__auto__ = (function (){var statearr_17948 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_17948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___17953);

return statearr_17948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___17953,mults,ensure_mult,p))
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
var args17984 = [];
var len__7542__auto___17987 = arguments.length;
var i__7543__auto___17988 = (0);
while(true){
if((i__7543__auto___17988 < len__7542__auto___17987)){
args17984.push((arguments[i__7543__auto___17988]));

var G__17989 = (i__7543__auto___17988 + (1));
i__7543__auto___17988 = G__17989;
continue;
} else {
}
break;
}

var G__17986 = args17984.length;
switch (G__17986) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17984.length)].join('')));

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
var args17991 = [];
var len__7542__auto___17994 = arguments.length;
var i__7543__auto___17995 = (0);
while(true){
if((i__7543__auto___17995 < len__7542__auto___17994)){
args17991.push((arguments[i__7543__auto___17995]));

var G__17996 = (i__7543__auto___17995 + (1));
i__7543__auto___17995 = G__17996;
continue;
} else {
}
break;
}

var G__17993 = args17991.length;
switch (G__17993) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17991.length)].join('')));

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
var args17998 = [];
var len__7542__auto___18069 = arguments.length;
var i__7543__auto___18070 = (0);
while(true){
if((i__7543__auto___18070 < len__7542__auto___18069)){
args17998.push((arguments[i__7543__auto___18070]));

var G__18071 = (i__7543__auto___18070 + (1));
i__7543__auto___18070 = G__18071;
continue;
} else {
}
break;
}

var G__18000 = args17998.length;
switch (G__18000) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17998.length)].join('')));

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
var c__16031__auto___18073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___18073,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___18073,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18039){
var state_val_18040 = (state_18039[(1)]);
if((state_val_18040 === (7))){
var state_18039__$1 = state_18039;
var statearr_18041_18074 = state_18039__$1;
(statearr_18041_18074[(2)] = null);

(statearr_18041_18074[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (1))){
var state_18039__$1 = state_18039;
var statearr_18042_18075 = state_18039__$1;
(statearr_18042_18075[(2)] = null);

(statearr_18042_18075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (4))){
var inst_18003 = (state_18039[(7)]);
var inst_18005 = (inst_18003 < cnt);
var state_18039__$1 = state_18039;
if(cljs.core.truth_(inst_18005)){
var statearr_18043_18076 = state_18039__$1;
(statearr_18043_18076[(1)] = (6));

} else {
var statearr_18044_18077 = state_18039__$1;
(statearr_18044_18077[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (15))){
var inst_18035 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
var statearr_18045_18078 = state_18039__$1;
(statearr_18045_18078[(2)] = inst_18035);

(statearr_18045_18078[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (13))){
var inst_18028 = cljs.core.async.close_BANG_(out);
var state_18039__$1 = state_18039;
var statearr_18046_18079 = state_18039__$1;
(statearr_18046_18079[(2)] = inst_18028);

(statearr_18046_18079[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (6))){
var state_18039__$1 = state_18039;
var statearr_18047_18080 = state_18039__$1;
(statearr_18047_18080[(2)] = null);

(statearr_18047_18080[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (3))){
var inst_18037 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18039__$1,inst_18037);
} else {
if((state_val_18040 === (12))){
var inst_18025 = (state_18039[(8)]);
var inst_18025__$1 = (state_18039[(2)]);
var inst_18026 = cljs.core.some(cljs.core.nil_QMARK_,inst_18025__$1);
var state_18039__$1 = (function (){var statearr_18048 = state_18039;
(statearr_18048[(8)] = inst_18025__$1);

return statearr_18048;
})();
if(cljs.core.truth_(inst_18026)){
var statearr_18049_18081 = state_18039__$1;
(statearr_18049_18081[(1)] = (13));

} else {
var statearr_18050_18082 = state_18039__$1;
(statearr_18050_18082[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (2))){
var inst_18002 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_18003 = (0);
var state_18039__$1 = (function (){var statearr_18051 = state_18039;
(statearr_18051[(9)] = inst_18002);

(statearr_18051[(7)] = inst_18003);

return statearr_18051;
})();
var statearr_18052_18083 = state_18039__$1;
(statearr_18052_18083[(2)] = null);

(statearr_18052_18083[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (11))){
var inst_18003 = (state_18039[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18039,(10),Object,null,(9));
var inst_18012 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18003) : chs__$1.call(null,inst_18003));
var inst_18013 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18003) : done.call(null,inst_18003));
var inst_18014 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18012,inst_18013);
var state_18039__$1 = state_18039;
var statearr_18053_18084 = state_18039__$1;
(statearr_18053_18084[(2)] = inst_18014);


cljs.core.async.impl.ioc_helpers.process_exception(state_18039__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (9))){
var inst_18003 = (state_18039[(7)]);
var inst_18016 = (state_18039[(2)]);
var inst_18017 = (inst_18003 + (1));
var inst_18003__$1 = inst_18017;
var state_18039__$1 = (function (){var statearr_18054 = state_18039;
(statearr_18054[(10)] = inst_18016);

(statearr_18054[(7)] = inst_18003__$1);

return statearr_18054;
})();
var statearr_18055_18085 = state_18039__$1;
(statearr_18055_18085[(2)] = null);

(statearr_18055_18085[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (5))){
var inst_18023 = (state_18039[(2)]);
var state_18039__$1 = (function (){var statearr_18056 = state_18039;
(statearr_18056[(11)] = inst_18023);

return statearr_18056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18039__$1,(12),dchan);
} else {
if((state_val_18040 === (14))){
var inst_18025 = (state_18039[(8)]);
var inst_18030 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18025);
var state_18039__$1 = state_18039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18039__$1,(16),out,inst_18030);
} else {
if((state_val_18040 === (16))){
var inst_18032 = (state_18039[(2)]);
var state_18039__$1 = (function (){var statearr_18057 = state_18039;
(statearr_18057[(12)] = inst_18032);

return statearr_18057;
})();
var statearr_18058_18086 = state_18039__$1;
(statearr_18058_18086[(2)] = null);

(statearr_18058_18086[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (10))){
var inst_18007 = (state_18039[(2)]);
var inst_18008 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18039__$1 = (function (){var statearr_18059 = state_18039;
(statearr_18059[(13)] = inst_18007);

return statearr_18059;
})();
var statearr_18060_18087 = state_18039__$1;
(statearr_18060_18087[(2)] = inst_18008);


cljs.core.async.impl.ioc_helpers.process_exception(state_18039__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18040 === (8))){
var inst_18021 = (state_18039[(2)]);
var state_18039__$1 = state_18039;
var statearr_18061_18088 = state_18039__$1;
(statearr_18061_18088[(2)] = inst_18021);

(statearr_18061_18088[(1)] = (5));


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
});})(c__16031__auto___18073,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15917__auto__,c__16031__auto___18073,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_18065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18065[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_18065[(1)] = (1));

return statearr_18065;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_18039){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_18039);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e18066){if((e18066 instanceof Object)){
var ex__15921__auto__ = e18066;
var statearr_18067_18089 = state_18039;
(statearr_18067_18089[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18039);

return cljs.core.cst$kw$recur;
} else {
throw e18066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__18090 = state_18039;
state_18039 = G__18090;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_18039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_18039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___18073,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16033__auto__ = (function (){var statearr_18068 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_18068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___18073);

return statearr_18068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___18073,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18092 = [];
var len__7542__auto___18148 = arguments.length;
var i__7543__auto___18149 = (0);
while(true){
if((i__7543__auto___18149 < len__7542__auto___18148)){
args18092.push((arguments[i__7543__auto___18149]));

var G__18150 = (i__7543__auto___18149 + (1));
i__7543__auto___18149 = G__18150;
continue;
} else {
}
break;
}

var G__18094 = args18092.length;
switch (G__18094) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18092.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16031__auto___18152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___18152,out){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___18152,out){
return (function (state_18124){
var state_val_18125 = (state_18124[(1)]);
if((state_val_18125 === (7))){
var inst_18104 = (state_18124[(7)]);
var inst_18103 = (state_18124[(8)]);
var inst_18103__$1 = (state_18124[(2)]);
var inst_18104__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18103__$1,(0),null);
var inst_18105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18103__$1,(1),null);
var inst_18106 = (inst_18104__$1 == null);
var state_18124__$1 = (function (){var statearr_18126 = state_18124;
(statearr_18126[(7)] = inst_18104__$1);

(statearr_18126[(9)] = inst_18105);

(statearr_18126[(8)] = inst_18103__$1);

return statearr_18126;
})();
if(cljs.core.truth_(inst_18106)){
var statearr_18127_18153 = state_18124__$1;
(statearr_18127_18153[(1)] = (8));

} else {
var statearr_18128_18154 = state_18124__$1;
(statearr_18128_18154[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18125 === (1))){
var inst_18095 = cljs.core.vec(chs);
var inst_18096 = inst_18095;
var state_18124__$1 = (function (){var statearr_18129 = state_18124;
(statearr_18129[(10)] = inst_18096);

return statearr_18129;
})();
var statearr_18130_18155 = state_18124__$1;
(statearr_18130_18155[(2)] = null);

(statearr_18130_18155[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18125 === (4))){
var inst_18096 = (state_18124[(10)]);
var state_18124__$1 = state_18124;
return cljs.core.async.ioc_alts_BANG_(state_18124__$1,(7),inst_18096);
} else {
if((state_val_18125 === (6))){
var inst_18120 = (state_18124[(2)]);
var state_18124__$1 = state_18124;
var statearr_18131_18156 = state_18124__$1;
(statearr_18131_18156[(2)] = inst_18120);

(statearr_18131_18156[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18125 === (3))){
var inst_18122 = (state_18124[(2)]);
var state_18124__$1 = state_18124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18124__$1,inst_18122);
} else {
if((state_val_18125 === (2))){
var inst_18096 = (state_18124[(10)]);
var inst_18098 = cljs.core.count(inst_18096);
var inst_18099 = (inst_18098 > (0));
var state_18124__$1 = state_18124;
if(cljs.core.truth_(inst_18099)){
var statearr_18133_18157 = state_18124__$1;
(statearr_18133_18157[(1)] = (4));

} else {
var statearr_18134_18158 = state_18124__$1;
(statearr_18134_18158[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18125 === (11))){
var inst_18096 = (state_18124[(10)]);
var inst_18113 = (state_18124[(2)]);
var tmp18132 = inst_18096;
var inst_18096__$1 = tmp18132;
var state_18124__$1 = (function (){var statearr_18135 = state_18124;
(statearr_18135[(11)] = inst_18113);

(statearr_18135[(10)] = inst_18096__$1);

return statearr_18135;
})();
var statearr_18136_18159 = state_18124__$1;
(statearr_18136_18159[(2)] = null);

(statearr_18136_18159[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18125 === (9))){
var inst_18104 = (state_18124[(7)]);
var state_18124__$1 = state_18124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18124__$1,(11),out,inst_18104);
} else {
if((state_val_18125 === (5))){
var inst_18118 = cljs.core.async.close_BANG_(out);
var state_18124__$1 = state_18124;
var statearr_18137_18160 = state_18124__$1;
(statearr_18137_18160[(2)] = inst_18118);

(statearr_18137_18160[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18125 === (10))){
var inst_18116 = (state_18124[(2)]);
var state_18124__$1 = state_18124;
var statearr_18138_18161 = state_18124__$1;
(statearr_18138_18161[(2)] = inst_18116);

(statearr_18138_18161[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18125 === (8))){
var inst_18104 = (state_18124[(7)]);
var inst_18105 = (state_18124[(9)]);
var inst_18096 = (state_18124[(10)]);
var inst_18103 = (state_18124[(8)]);
var inst_18108 = (function (){var cs = inst_18096;
var vec__18101 = inst_18103;
var v = inst_18104;
var c = inst_18105;
return ((function (cs,vec__18101,v,c,inst_18104,inst_18105,inst_18096,inst_18103,state_val_18125,c__16031__auto___18152,out){
return (function (p1__18091_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18091_SHARP_);
});
;})(cs,vec__18101,v,c,inst_18104,inst_18105,inst_18096,inst_18103,state_val_18125,c__16031__auto___18152,out))
})();
var inst_18109 = cljs.core.filterv(inst_18108,inst_18096);
var inst_18096__$1 = inst_18109;
var state_18124__$1 = (function (){var statearr_18139 = state_18124;
(statearr_18139[(10)] = inst_18096__$1);

return statearr_18139;
})();
var statearr_18140_18162 = state_18124__$1;
(statearr_18140_18162[(2)] = null);

(statearr_18140_18162[(1)] = (2));


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
});})(c__16031__auto___18152,out))
;
return ((function (switch__15917__auto__,c__16031__auto___18152,out){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_18144 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18144[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_18144[(1)] = (1));

return statearr_18144;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_18124){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_18124);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e18145){if((e18145 instanceof Object)){
var ex__15921__auto__ = e18145;
var statearr_18146_18163 = state_18124;
(statearr_18146_18163[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18124);

return cljs.core.cst$kw$recur;
} else {
throw e18145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__18164 = state_18124;
state_18124 = G__18164;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_18124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_18124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___18152,out))
})();
var state__16033__auto__ = (function (){var statearr_18147 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_18147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___18152);

return statearr_18147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___18152,out))
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
var args18165 = [];
var len__7542__auto___18214 = arguments.length;
var i__7543__auto___18215 = (0);
while(true){
if((i__7543__auto___18215 < len__7542__auto___18214)){
args18165.push((arguments[i__7543__auto___18215]));

var G__18216 = (i__7543__auto___18215 + (1));
i__7543__auto___18215 = G__18216;
continue;
} else {
}
break;
}

var G__18167 = args18165.length;
switch (G__18167) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18165.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16031__auto___18218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___18218,out){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___18218,out){
return (function (state_18191){
var state_val_18192 = (state_18191[(1)]);
if((state_val_18192 === (7))){
var inst_18173 = (state_18191[(7)]);
var inst_18173__$1 = (state_18191[(2)]);
var inst_18174 = (inst_18173__$1 == null);
var inst_18175 = cljs.core.not(inst_18174);
var state_18191__$1 = (function (){var statearr_18193 = state_18191;
(statearr_18193[(7)] = inst_18173__$1);

return statearr_18193;
})();
if(inst_18175){
var statearr_18194_18219 = state_18191__$1;
(statearr_18194_18219[(1)] = (8));

} else {
var statearr_18195_18220 = state_18191__$1;
(statearr_18195_18220[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (1))){
var inst_18168 = (0);
var state_18191__$1 = (function (){var statearr_18196 = state_18191;
(statearr_18196[(8)] = inst_18168);

return statearr_18196;
})();
var statearr_18197_18221 = state_18191__$1;
(statearr_18197_18221[(2)] = null);

(statearr_18197_18221[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (4))){
var state_18191__$1 = state_18191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18191__$1,(7),ch);
} else {
if((state_val_18192 === (6))){
var inst_18186 = (state_18191[(2)]);
var state_18191__$1 = state_18191;
var statearr_18198_18222 = state_18191__$1;
(statearr_18198_18222[(2)] = inst_18186);

(statearr_18198_18222[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (3))){
var inst_18188 = (state_18191[(2)]);
var inst_18189 = cljs.core.async.close_BANG_(out);
var state_18191__$1 = (function (){var statearr_18199 = state_18191;
(statearr_18199[(9)] = inst_18188);

return statearr_18199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18191__$1,inst_18189);
} else {
if((state_val_18192 === (2))){
var inst_18168 = (state_18191[(8)]);
var inst_18170 = (inst_18168 < n);
var state_18191__$1 = state_18191;
if(cljs.core.truth_(inst_18170)){
var statearr_18200_18223 = state_18191__$1;
(statearr_18200_18223[(1)] = (4));

} else {
var statearr_18201_18224 = state_18191__$1;
(statearr_18201_18224[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (11))){
var inst_18168 = (state_18191[(8)]);
var inst_18178 = (state_18191[(2)]);
var inst_18179 = (inst_18168 + (1));
var inst_18168__$1 = inst_18179;
var state_18191__$1 = (function (){var statearr_18202 = state_18191;
(statearr_18202[(10)] = inst_18178);

(statearr_18202[(8)] = inst_18168__$1);

return statearr_18202;
})();
var statearr_18203_18225 = state_18191__$1;
(statearr_18203_18225[(2)] = null);

(statearr_18203_18225[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (9))){
var state_18191__$1 = state_18191;
var statearr_18204_18226 = state_18191__$1;
(statearr_18204_18226[(2)] = null);

(statearr_18204_18226[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (5))){
var state_18191__$1 = state_18191;
var statearr_18205_18227 = state_18191__$1;
(statearr_18205_18227[(2)] = null);

(statearr_18205_18227[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (10))){
var inst_18183 = (state_18191[(2)]);
var state_18191__$1 = state_18191;
var statearr_18206_18228 = state_18191__$1;
(statearr_18206_18228[(2)] = inst_18183);

(statearr_18206_18228[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18192 === (8))){
var inst_18173 = (state_18191[(7)]);
var state_18191__$1 = state_18191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18191__$1,(11),out,inst_18173);
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
});})(c__16031__auto___18218,out))
;
return ((function (switch__15917__auto__,c__16031__auto___18218,out){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_18210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18210[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_18210[(1)] = (1));

return statearr_18210;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_18191){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_18191);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e18211){if((e18211 instanceof Object)){
var ex__15921__auto__ = e18211;
var statearr_18212_18229 = state_18191;
(statearr_18212_18229[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18191);

return cljs.core.cst$kw$recur;
} else {
throw e18211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__18230 = state_18191;
state_18191 = G__18230;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_18191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_18191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___18218,out))
})();
var state__16033__auto__ = (function (){var statearr_18213 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_18213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___18218);

return statearr_18213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___18218,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18240 = (function (map_LT_,f,ch,meta18241){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18241 = meta18241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18242,meta18241__$1){
var self__ = this;
var _18242__$1 = this;
return (new cljs.core.async.t_cljs$core$async18240(self__.map_LT_,self__.f,self__.ch,meta18241__$1));
});

cljs.core.async.t_cljs$core$async18240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18242){
var self__ = this;
var _18242__$1 = this;
return self__.meta18241;
});

cljs.core.async.t_cljs$core$async18240.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18240.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18243 = (function (map_LT_,f,ch,meta18241,_,fn1,meta18244){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18241 = meta18241;
this._ = _;
this.fn1 = fn1;
this.meta18244 = meta18244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18245,meta18244__$1){
var self__ = this;
var _18245__$1 = this;
return (new cljs.core.async.t_cljs$core$async18243(self__.map_LT_,self__.f,self__.ch,self__.meta18241,self__._,self__.fn1,meta18244__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18245){
var self__ = this;
var _18245__$1 = this;
return self__.meta18244;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18231_SHARP_){
var G__18246 = (((p1__18231_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18231_SHARP_) : self__.f.call(null,p1__18231_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18246) : f1.call(null,G__18246));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18243.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18241,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18240], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18244], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18243";

cljs.core.async.t_cljs$core$async18243.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18243");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18243 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18243(map_LT___$1,f__$1,ch__$1,meta18241__$1,___$2,fn1__$1,meta18244){
return (new cljs.core.async.t_cljs$core$async18243(map_LT___$1,f__$1,ch__$1,meta18241__$1,___$2,fn1__$1,meta18244));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18243(self__.map_LT_,self__.f,self__.ch,self__.meta18241,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6472__auto__ = ret;
if(cljs.core.truth_(and__6472__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6472__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18247 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18247) : self__.f.call(null,G__18247));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18240.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18241], null);
});

cljs.core.async.t_cljs$core$async18240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18240";

cljs.core.async.t_cljs$core$async18240.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18240");
});

cljs.core.async.__GT_t_cljs$core$async18240 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18240(map_LT___$1,f__$1,ch__$1,meta18241){
return (new cljs.core.async.t_cljs$core$async18240(map_LT___$1,f__$1,ch__$1,meta18241));
});

}

return (new cljs.core.async.t_cljs$core$async18240(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18251 = (function (map_GT_,f,ch,meta18252){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18252 = meta18252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18253,meta18252__$1){
var self__ = this;
var _18253__$1 = this;
return (new cljs.core.async.t_cljs$core$async18251(self__.map_GT_,self__.f,self__.ch,meta18252__$1));
});

cljs.core.async.t_cljs$core$async18251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18253){
var self__ = this;
var _18253__$1 = this;
return self__.meta18252;
});

cljs.core.async.t_cljs$core$async18251.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18251.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18251.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18252], null);
});

cljs.core.async.t_cljs$core$async18251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18251";

cljs.core.async.t_cljs$core$async18251.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18251");
});

cljs.core.async.__GT_t_cljs$core$async18251 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18251(map_GT___$1,f__$1,ch__$1,meta18252){
return (new cljs.core.async.t_cljs$core$async18251(map_GT___$1,f__$1,ch__$1,meta18252));
});

}

return (new cljs.core.async.t_cljs$core$async18251(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18257 = (function (filter_GT_,p,ch,meta18258){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18258 = meta18258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18259,meta18258__$1){
var self__ = this;
var _18259__$1 = this;
return (new cljs.core.async.t_cljs$core$async18257(self__.filter_GT_,self__.p,self__.ch,meta18258__$1));
});

cljs.core.async.t_cljs$core$async18257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18259){
var self__ = this;
var _18259__$1 = this;
return self__.meta18258;
});

cljs.core.async.t_cljs$core$async18257.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18257.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18257.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18258], null);
});

cljs.core.async.t_cljs$core$async18257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18257";

cljs.core.async.t_cljs$core$async18257.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18257");
});

cljs.core.async.__GT_t_cljs$core$async18257 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18257(filter_GT___$1,p__$1,ch__$1,meta18258){
return (new cljs.core.async.t_cljs$core$async18257(filter_GT___$1,p__$1,ch__$1,meta18258));
});

}

return (new cljs.core.async.t_cljs$core$async18257(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args18260 = [];
var len__7542__auto___18304 = arguments.length;
var i__7543__auto___18305 = (0);
while(true){
if((i__7543__auto___18305 < len__7542__auto___18304)){
args18260.push((arguments[i__7543__auto___18305]));

var G__18306 = (i__7543__auto___18305 + (1));
i__7543__auto___18305 = G__18306;
continue;
} else {
}
break;
}

var G__18262 = args18260.length;
switch (G__18262) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18260.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16031__auto___18308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___18308,out){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___18308,out){
return (function (state_18283){
var state_val_18284 = (state_18283[(1)]);
if((state_val_18284 === (7))){
var inst_18279 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
var statearr_18285_18309 = state_18283__$1;
(statearr_18285_18309[(2)] = inst_18279);

(statearr_18285_18309[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (1))){
var state_18283__$1 = state_18283;
var statearr_18286_18310 = state_18283__$1;
(statearr_18286_18310[(2)] = null);

(statearr_18286_18310[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (4))){
var inst_18265 = (state_18283[(7)]);
var inst_18265__$1 = (state_18283[(2)]);
var inst_18266 = (inst_18265__$1 == null);
var state_18283__$1 = (function (){var statearr_18287 = state_18283;
(statearr_18287[(7)] = inst_18265__$1);

return statearr_18287;
})();
if(cljs.core.truth_(inst_18266)){
var statearr_18288_18311 = state_18283__$1;
(statearr_18288_18311[(1)] = (5));

} else {
var statearr_18289_18312 = state_18283__$1;
(statearr_18289_18312[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (6))){
var inst_18265 = (state_18283[(7)]);
var inst_18270 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18265) : p.call(null,inst_18265));
var state_18283__$1 = state_18283;
if(cljs.core.truth_(inst_18270)){
var statearr_18290_18313 = state_18283__$1;
(statearr_18290_18313[(1)] = (8));

} else {
var statearr_18291_18314 = state_18283__$1;
(statearr_18291_18314[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (3))){
var inst_18281 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18283__$1,inst_18281);
} else {
if((state_val_18284 === (2))){
var state_18283__$1 = state_18283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18283__$1,(4),ch);
} else {
if((state_val_18284 === (11))){
var inst_18273 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
var statearr_18292_18315 = state_18283__$1;
(statearr_18292_18315[(2)] = inst_18273);

(statearr_18292_18315[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (9))){
var state_18283__$1 = state_18283;
var statearr_18293_18316 = state_18283__$1;
(statearr_18293_18316[(2)] = null);

(statearr_18293_18316[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (5))){
var inst_18268 = cljs.core.async.close_BANG_(out);
var state_18283__$1 = state_18283;
var statearr_18294_18317 = state_18283__$1;
(statearr_18294_18317[(2)] = inst_18268);

(statearr_18294_18317[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (10))){
var inst_18276 = (state_18283[(2)]);
var state_18283__$1 = (function (){var statearr_18295 = state_18283;
(statearr_18295[(8)] = inst_18276);

return statearr_18295;
})();
var statearr_18296_18318 = state_18283__$1;
(statearr_18296_18318[(2)] = null);

(statearr_18296_18318[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18284 === (8))){
var inst_18265 = (state_18283[(7)]);
var state_18283__$1 = state_18283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18283__$1,(11),out,inst_18265);
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
});})(c__16031__auto___18308,out))
;
return ((function (switch__15917__auto__,c__16031__auto___18308,out){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_18300 = [null,null,null,null,null,null,null,null,null];
(statearr_18300[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_18300[(1)] = (1));

return statearr_18300;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_18283){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_18283);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e18301){if((e18301 instanceof Object)){
var ex__15921__auto__ = e18301;
var statearr_18302_18319 = state_18283;
(statearr_18302_18319[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18283);

return cljs.core.cst$kw$recur;
} else {
throw e18301;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__18320 = state_18283;
state_18283 = G__18320;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_18283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_18283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___18308,out))
})();
var state__16033__auto__ = (function (){var statearr_18303 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_18303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___18308);

return statearr_18303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___18308,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18321 = [];
var len__7542__auto___18324 = arguments.length;
var i__7543__auto___18325 = (0);
while(true){
if((i__7543__auto___18325 < len__7542__auto___18324)){
args18321.push((arguments[i__7543__auto___18325]));

var G__18326 = (i__7543__auto___18325 + (1));
i__7543__auto___18325 = G__18326;
continue;
} else {
}
break;
}

var G__18323 = args18321.length;
switch (G__18323) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18321.length)].join('')));

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
var c__16031__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto__){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto__){
return (function (state_18493){
var state_val_18494 = (state_18493[(1)]);
if((state_val_18494 === (7))){
var inst_18489 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
var statearr_18495_18536 = state_18493__$1;
(statearr_18495_18536[(2)] = inst_18489);

(statearr_18495_18536[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (20))){
var inst_18459 = (state_18493[(7)]);
var inst_18470 = (state_18493[(2)]);
var inst_18471 = cljs.core.next(inst_18459);
var inst_18445 = inst_18471;
var inst_18446 = null;
var inst_18447 = (0);
var inst_18448 = (0);
var state_18493__$1 = (function (){var statearr_18496 = state_18493;
(statearr_18496[(8)] = inst_18446);

(statearr_18496[(9)] = inst_18445);

(statearr_18496[(10)] = inst_18447);

(statearr_18496[(11)] = inst_18448);

(statearr_18496[(12)] = inst_18470);

return statearr_18496;
})();
var statearr_18497_18537 = state_18493__$1;
(statearr_18497_18537[(2)] = null);

(statearr_18497_18537[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (1))){
var state_18493__$1 = state_18493;
var statearr_18498_18538 = state_18493__$1;
(statearr_18498_18538[(2)] = null);

(statearr_18498_18538[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (4))){
var inst_18434 = (state_18493[(13)]);
var inst_18434__$1 = (state_18493[(2)]);
var inst_18435 = (inst_18434__$1 == null);
var state_18493__$1 = (function (){var statearr_18499 = state_18493;
(statearr_18499[(13)] = inst_18434__$1);

return statearr_18499;
})();
if(cljs.core.truth_(inst_18435)){
var statearr_18500_18539 = state_18493__$1;
(statearr_18500_18539[(1)] = (5));

} else {
var statearr_18501_18540 = state_18493__$1;
(statearr_18501_18540[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (15))){
var state_18493__$1 = state_18493;
var statearr_18505_18541 = state_18493__$1;
(statearr_18505_18541[(2)] = null);

(statearr_18505_18541[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (21))){
var state_18493__$1 = state_18493;
var statearr_18506_18542 = state_18493__$1;
(statearr_18506_18542[(2)] = null);

(statearr_18506_18542[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (13))){
var inst_18446 = (state_18493[(8)]);
var inst_18445 = (state_18493[(9)]);
var inst_18447 = (state_18493[(10)]);
var inst_18448 = (state_18493[(11)]);
var inst_18455 = (state_18493[(2)]);
var inst_18456 = (inst_18448 + (1));
var tmp18502 = inst_18446;
var tmp18503 = inst_18445;
var tmp18504 = inst_18447;
var inst_18445__$1 = tmp18503;
var inst_18446__$1 = tmp18502;
var inst_18447__$1 = tmp18504;
var inst_18448__$1 = inst_18456;
var state_18493__$1 = (function (){var statearr_18507 = state_18493;
(statearr_18507[(8)] = inst_18446__$1);

(statearr_18507[(9)] = inst_18445__$1);

(statearr_18507[(10)] = inst_18447__$1);

(statearr_18507[(14)] = inst_18455);

(statearr_18507[(11)] = inst_18448__$1);

return statearr_18507;
})();
var statearr_18508_18543 = state_18493__$1;
(statearr_18508_18543[(2)] = null);

(statearr_18508_18543[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (22))){
var state_18493__$1 = state_18493;
var statearr_18509_18544 = state_18493__$1;
(statearr_18509_18544[(2)] = null);

(statearr_18509_18544[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (6))){
var inst_18434 = (state_18493[(13)]);
var inst_18443 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18434) : f.call(null,inst_18434));
var inst_18444 = cljs.core.seq(inst_18443);
var inst_18445 = inst_18444;
var inst_18446 = null;
var inst_18447 = (0);
var inst_18448 = (0);
var state_18493__$1 = (function (){var statearr_18510 = state_18493;
(statearr_18510[(8)] = inst_18446);

(statearr_18510[(9)] = inst_18445);

(statearr_18510[(10)] = inst_18447);

(statearr_18510[(11)] = inst_18448);

return statearr_18510;
})();
var statearr_18511_18545 = state_18493__$1;
(statearr_18511_18545[(2)] = null);

(statearr_18511_18545[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (17))){
var inst_18459 = (state_18493[(7)]);
var inst_18463 = cljs.core.chunk_first(inst_18459);
var inst_18464 = cljs.core.chunk_rest(inst_18459);
var inst_18465 = cljs.core.count(inst_18463);
var inst_18445 = inst_18464;
var inst_18446 = inst_18463;
var inst_18447 = inst_18465;
var inst_18448 = (0);
var state_18493__$1 = (function (){var statearr_18512 = state_18493;
(statearr_18512[(8)] = inst_18446);

(statearr_18512[(9)] = inst_18445);

(statearr_18512[(10)] = inst_18447);

(statearr_18512[(11)] = inst_18448);

return statearr_18512;
})();
var statearr_18513_18546 = state_18493__$1;
(statearr_18513_18546[(2)] = null);

(statearr_18513_18546[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (3))){
var inst_18491 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18493__$1,inst_18491);
} else {
if((state_val_18494 === (12))){
var inst_18479 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
var statearr_18514_18547 = state_18493__$1;
(statearr_18514_18547[(2)] = inst_18479);

(statearr_18514_18547[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (2))){
var state_18493__$1 = state_18493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18493__$1,(4),in$);
} else {
if((state_val_18494 === (23))){
var inst_18487 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
var statearr_18515_18548 = state_18493__$1;
(statearr_18515_18548[(2)] = inst_18487);

(statearr_18515_18548[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (19))){
var inst_18474 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
var statearr_18516_18549 = state_18493__$1;
(statearr_18516_18549[(2)] = inst_18474);

(statearr_18516_18549[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (11))){
var inst_18445 = (state_18493[(9)]);
var inst_18459 = (state_18493[(7)]);
var inst_18459__$1 = cljs.core.seq(inst_18445);
var state_18493__$1 = (function (){var statearr_18517 = state_18493;
(statearr_18517[(7)] = inst_18459__$1);

return statearr_18517;
})();
if(inst_18459__$1){
var statearr_18518_18550 = state_18493__$1;
(statearr_18518_18550[(1)] = (14));

} else {
var statearr_18519_18551 = state_18493__$1;
(statearr_18519_18551[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (9))){
var inst_18481 = (state_18493[(2)]);
var inst_18482 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18493__$1 = (function (){var statearr_18520 = state_18493;
(statearr_18520[(15)] = inst_18481);

return statearr_18520;
})();
if(cljs.core.truth_(inst_18482)){
var statearr_18521_18552 = state_18493__$1;
(statearr_18521_18552[(1)] = (21));

} else {
var statearr_18522_18553 = state_18493__$1;
(statearr_18522_18553[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (5))){
var inst_18437 = cljs.core.async.close_BANG_(out);
var state_18493__$1 = state_18493;
var statearr_18523_18554 = state_18493__$1;
(statearr_18523_18554[(2)] = inst_18437);

(statearr_18523_18554[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (14))){
var inst_18459 = (state_18493[(7)]);
var inst_18461 = cljs.core.chunked_seq_QMARK_(inst_18459);
var state_18493__$1 = state_18493;
if(inst_18461){
var statearr_18524_18555 = state_18493__$1;
(statearr_18524_18555[(1)] = (17));

} else {
var statearr_18525_18556 = state_18493__$1;
(statearr_18525_18556[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (16))){
var inst_18477 = (state_18493[(2)]);
var state_18493__$1 = state_18493;
var statearr_18526_18557 = state_18493__$1;
(statearr_18526_18557[(2)] = inst_18477);

(statearr_18526_18557[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18494 === (10))){
var inst_18446 = (state_18493[(8)]);
var inst_18448 = (state_18493[(11)]);
var inst_18453 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18446,inst_18448);
var state_18493__$1 = state_18493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18493__$1,(13),out,inst_18453);
} else {
if((state_val_18494 === (18))){
var inst_18459 = (state_18493[(7)]);
var inst_18468 = cljs.core.first(inst_18459);
var state_18493__$1 = state_18493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18493__$1,(20),out,inst_18468);
} else {
if((state_val_18494 === (8))){
var inst_18447 = (state_18493[(10)]);
var inst_18448 = (state_18493[(11)]);
var inst_18450 = (inst_18448 < inst_18447);
var inst_18451 = inst_18450;
var state_18493__$1 = state_18493;
if(cljs.core.truth_(inst_18451)){
var statearr_18527_18558 = state_18493__$1;
(statearr_18527_18558[(1)] = (10));

} else {
var statearr_18528_18559 = state_18493__$1;
(statearr_18528_18559[(1)] = (11));

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
});})(c__16031__auto__))
;
return ((function (switch__15917__auto__,c__16031__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15918__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15918__auto____0 = (function (){
var statearr_18532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18532[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15918__auto__);

(statearr_18532[(1)] = (1));

return statearr_18532;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15918__auto____1 = (function (state_18493){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_18493);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e18533){if((e18533 instanceof Object)){
var ex__15921__auto__ = e18533;
var statearr_18534_18560 = state_18493;
(statearr_18534_18560[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18493);

return cljs.core.cst$kw$recur;
} else {
throw e18533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__18561 = state_18493;
state_18493 = G__18561;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15918__auto__ = function(state_18493){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15918__auto____1.call(this,state_18493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15918__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15918__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto__))
})();
var state__16033__auto__ = (function (){var statearr_18535 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_18535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto__);

return statearr_18535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto__))
);

return c__16031__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18562 = [];
var len__7542__auto___18565 = arguments.length;
var i__7543__auto___18566 = (0);
while(true){
if((i__7543__auto___18566 < len__7542__auto___18565)){
args18562.push((arguments[i__7543__auto___18566]));

var G__18567 = (i__7543__auto___18566 + (1));
i__7543__auto___18566 = G__18567;
continue;
} else {
}
break;
}

var G__18564 = args18562.length;
switch (G__18564) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18562.length)].join('')));

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
var args18569 = [];
var len__7542__auto___18572 = arguments.length;
var i__7543__auto___18573 = (0);
while(true){
if((i__7543__auto___18573 < len__7542__auto___18572)){
args18569.push((arguments[i__7543__auto___18573]));

var G__18574 = (i__7543__auto___18573 + (1));
i__7543__auto___18573 = G__18574;
continue;
} else {
}
break;
}

var G__18571 = args18569.length;
switch (G__18571) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18569.length)].join('')));

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
var args18576 = [];
var len__7542__auto___18627 = arguments.length;
var i__7543__auto___18628 = (0);
while(true){
if((i__7543__auto___18628 < len__7542__auto___18627)){
args18576.push((arguments[i__7543__auto___18628]));

var G__18629 = (i__7543__auto___18628 + (1));
i__7543__auto___18628 = G__18629;
continue;
} else {
}
break;
}

var G__18578 = args18576.length;
switch (G__18578) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18576.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16031__auto___18631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___18631,out){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___18631,out){
return (function (state_18602){
var state_val_18603 = (state_18602[(1)]);
if((state_val_18603 === (7))){
var inst_18597 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
var statearr_18604_18632 = state_18602__$1;
(statearr_18604_18632[(2)] = inst_18597);

(statearr_18604_18632[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (1))){
var inst_18579 = null;
var state_18602__$1 = (function (){var statearr_18605 = state_18602;
(statearr_18605[(7)] = inst_18579);

return statearr_18605;
})();
var statearr_18606_18633 = state_18602__$1;
(statearr_18606_18633[(2)] = null);

(statearr_18606_18633[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (4))){
var inst_18582 = (state_18602[(8)]);
var inst_18582__$1 = (state_18602[(2)]);
var inst_18583 = (inst_18582__$1 == null);
var inst_18584 = cljs.core.not(inst_18583);
var state_18602__$1 = (function (){var statearr_18607 = state_18602;
(statearr_18607[(8)] = inst_18582__$1);

return statearr_18607;
})();
if(inst_18584){
var statearr_18608_18634 = state_18602__$1;
(statearr_18608_18634[(1)] = (5));

} else {
var statearr_18609_18635 = state_18602__$1;
(statearr_18609_18635[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (6))){
var state_18602__$1 = state_18602;
var statearr_18610_18636 = state_18602__$1;
(statearr_18610_18636[(2)] = null);

(statearr_18610_18636[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (3))){
var inst_18599 = (state_18602[(2)]);
var inst_18600 = cljs.core.async.close_BANG_(out);
var state_18602__$1 = (function (){var statearr_18611 = state_18602;
(statearr_18611[(9)] = inst_18599);

return statearr_18611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18602__$1,inst_18600);
} else {
if((state_val_18603 === (2))){
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18602__$1,(4),ch);
} else {
if((state_val_18603 === (11))){
var inst_18582 = (state_18602[(8)]);
var inst_18591 = (state_18602[(2)]);
var inst_18579 = inst_18582;
var state_18602__$1 = (function (){var statearr_18612 = state_18602;
(statearr_18612[(10)] = inst_18591);

(statearr_18612[(7)] = inst_18579);

return statearr_18612;
})();
var statearr_18613_18637 = state_18602__$1;
(statearr_18613_18637[(2)] = null);

(statearr_18613_18637[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (9))){
var inst_18582 = (state_18602[(8)]);
var state_18602__$1 = state_18602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18602__$1,(11),out,inst_18582);
} else {
if((state_val_18603 === (5))){
var inst_18582 = (state_18602[(8)]);
var inst_18579 = (state_18602[(7)]);
var inst_18586 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18582,inst_18579);
var state_18602__$1 = state_18602;
if(inst_18586){
var statearr_18615_18638 = state_18602__$1;
(statearr_18615_18638[(1)] = (8));

} else {
var statearr_18616_18639 = state_18602__$1;
(statearr_18616_18639[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (10))){
var inst_18594 = (state_18602[(2)]);
var state_18602__$1 = state_18602;
var statearr_18617_18640 = state_18602__$1;
(statearr_18617_18640[(2)] = inst_18594);

(statearr_18617_18640[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18603 === (8))){
var inst_18579 = (state_18602[(7)]);
var tmp18614 = inst_18579;
var inst_18579__$1 = tmp18614;
var state_18602__$1 = (function (){var statearr_18618 = state_18602;
(statearr_18618[(7)] = inst_18579__$1);

return statearr_18618;
})();
var statearr_18619_18641 = state_18602__$1;
(statearr_18619_18641[(2)] = null);

(statearr_18619_18641[(1)] = (2));


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
});})(c__16031__auto___18631,out))
;
return ((function (switch__15917__auto__,c__16031__auto___18631,out){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_18623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18623[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_18623[(1)] = (1));

return statearr_18623;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_18602){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_18602);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e18624){if((e18624 instanceof Object)){
var ex__15921__auto__ = e18624;
var statearr_18625_18642 = state_18602;
(statearr_18625_18642[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18602);

return cljs.core.cst$kw$recur;
} else {
throw e18624;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__18643 = state_18602;
state_18602 = G__18643;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_18602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_18602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___18631,out))
})();
var state__16033__auto__ = (function (){var statearr_18626 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_18626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___18631);

return statearr_18626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___18631,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18644 = [];
var len__7542__auto___18714 = arguments.length;
var i__7543__auto___18715 = (0);
while(true){
if((i__7543__auto___18715 < len__7542__auto___18714)){
args18644.push((arguments[i__7543__auto___18715]));

var G__18716 = (i__7543__auto___18715 + (1));
i__7543__auto___18715 = G__18716;
continue;
} else {
}
break;
}

var G__18646 = args18644.length;
switch (G__18646) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18644.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16031__auto___18718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___18718,out){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___18718,out){
return (function (state_18684){
var state_val_18685 = (state_18684[(1)]);
if((state_val_18685 === (7))){
var inst_18680 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
var statearr_18686_18719 = state_18684__$1;
(statearr_18686_18719[(2)] = inst_18680);

(statearr_18686_18719[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (1))){
var inst_18647 = (new Array(n));
var inst_18648 = inst_18647;
var inst_18649 = (0);
var state_18684__$1 = (function (){var statearr_18687 = state_18684;
(statearr_18687[(7)] = inst_18649);

(statearr_18687[(8)] = inst_18648);

return statearr_18687;
})();
var statearr_18688_18720 = state_18684__$1;
(statearr_18688_18720[(2)] = null);

(statearr_18688_18720[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (4))){
var inst_18652 = (state_18684[(9)]);
var inst_18652__$1 = (state_18684[(2)]);
var inst_18653 = (inst_18652__$1 == null);
var inst_18654 = cljs.core.not(inst_18653);
var state_18684__$1 = (function (){var statearr_18689 = state_18684;
(statearr_18689[(9)] = inst_18652__$1);

return statearr_18689;
})();
if(inst_18654){
var statearr_18690_18721 = state_18684__$1;
(statearr_18690_18721[(1)] = (5));

} else {
var statearr_18691_18722 = state_18684__$1;
(statearr_18691_18722[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (15))){
var inst_18674 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
var statearr_18692_18723 = state_18684__$1;
(statearr_18692_18723[(2)] = inst_18674);

(statearr_18692_18723[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (13))){
var state_18684__$1 = state_18684;
var statearr_18693_18724 = state_18684__$1;
(statearr_18693_18724[(2)] = null);

(statearr_18693_18724[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (6))){
var inst_18649 = (state_18684[(7)]);
var inst_18670 = (inst_18649 > (0));
var state_18684__$1 = state_18684;
if(cljs.core.truth_(inst_18670)){
var statearr_18694_18725 = state_18684__$1;
(statearr_18694_18725[(1)] = (12));

} else {
var statearr_18695_18726 = state_18684__$1;
(statearr_18695_18726[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (3))){
var inst_18682 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18684__$1,inst_18682);
} else {
if((state_val_18685 === (12))){
var inst_18648 = (state_18684[(8)]);
var inst_18672 = cljs.core.vec(inst_18648);
var state_18684__$1 = state_18684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18684__$1,(15),out,inst_18672);
} else {
if((state_val_18685 === (2))){
var state_18684__$1 = state_18684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18684__$1,(4),ch);
} else {
if((state_val_18685 === (11))){
var inst_18664 = (state_18684[(2)]);
var inst_18665 = (new Array(n));
var inst_18648 = inst_18665;
var inst_18649 = (0);
var state_18684__$1 = (function (){var statearr_18696 = state_18684;
(statearr_18696[(7)] = inst_18649);

(statearr_18696[(10)] = inst_18664);

(statearr_18696[(8)] = inst_18648);

return statearr_18696;
})();
var statearr_18697_18727 = state_18684__$1;
(statearr_18697_18727[(2)] = null);

(statearr_18697_18727[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (9))){
var inst_18648 = (state_18684[(8)]);
var inst_18662 = cljs.core.vec(inst_18648);
var state_18684__$1 = state_18684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18684__$1,(11),out,inst_18662);
} else {
if((state_val_18685 === (5))){
var inst_18649 = (state_18684[(7)]);
var inst_18652 = (state_18684[(9)]);
var inst_18657 = (state_18684[(11)]);
var inst_18648 = (state_18684[(8)]);
var inst_18656 = (inst_18648[inst_18649] = inst_18652);
var inst_18657__$1 = (inst_18649 + (1));
var inst_18658 = (inst_18657__$1 < n);
var state_18684__$1 = (function (){var statearr_18698 = state_18684;
(statearr_18698[(11)] = inst_18657__$1);

(statearr_18698[(12)] = inst_18656);

return statearr_18698;
})();
if(cljs.core.truth_(inst_18658)){
var statearr_18699_18728 = state_18684__$1;
(statearr_18699_18728[(1)] = (8));

} else {
var statearr_18700_18729 = state_18684__$1;
(statearr_18700_18729[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (14))){
var inst_18677 = (state_18684[(2)]);
var inst_18678 = cljs.core.async.close_BANG_(out);
var state_18684__$1 = (function (){var statearr_18702 = state_18684;
(statearr_18702[(13)] = inst_18677);

return statearr_18702;
})();
var statearr_18703_18730 = state_18684__$1;
(statearr_18703_18730[(2)] = inst_18678);

(statearr_18703_18730[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (10))){
var inst_18668 = (state_18684[(2)]);
var state_18684__$1 = state_18684;
var statearr_18704_18731 = state_18684__$1;
(statearr_18704_18731[(2)] = inst_18668);

(statearr_18704_18731[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18685 === (8))){
var inst_18657 = (state_18684[(11)]);
var inst_18648 = (state_18684[(8)]);
var tmp18701 = inst_18648;
var inst_18648__$1 = tmp18701;
var inst_18649 = inst_18657;
var state_18684__$1 = (function (){var statearr_18705 = state_18684;
(statearr_18705[(7)] = inst_18649);

(statearr_18705[(8)] = inst_18648__$1);

return statearr_18705;
})();
var statearr_18706_18732 = state_18684__$1;
(statearr_18706_18732[(2)] = null);

(statearr_18706_18732[(1)] = (2));


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
});})(c__16031__auto___18718,out))
;
return ((function (switch__15917__auto__,c__16031__auto___18718,out){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_18710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18710[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_18710[(1)] = (1));

return statearr_18710;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_18684){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_18684);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e18711){if((e18711 instanceof Object)){
var ex__15921__auto__ = e18711;
var statearr_18712_18733 = state_18684;
(statearr_18712_18733[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18684);

return cljs.core.cst$kw$recur;
} else {
throw e18711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__18734 = state_18684;
state_18684 = G__18734;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_18684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_18684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___18718,out))
})();
var state__16033__auto__ = (function (){var statearr_18713 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_18713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___18718);

return statearr_18713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___18718,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18735 = [];
var len__7542__auto___18809 = arguments.length;
var i__7543__auto___18810 = (0);
while(true){
if((i__7543__auto___18810 < len__7542__auto___18809)){
args18735.push((arguments[i__7543__auto___18810]));

var G__18811 = (i__7543__auto___18810 + (1));
i__7543__auto___18810 = G__18811;
continue;
} else {
}
break;
}

var G__18737 = args18735.length;
switch (G__18737) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18735.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16031__auto___18813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16031__auto___18813,out){
return (function (){
var f__16032__auto__ = (function (){var switch__15917__auto__ = ((function (c__16031__auto___18813,out){
return (function (state_18779){
var state_val_18780 = (state_18779[(1)]);
if((state_val_18780 === (7))){
var inst_18775 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18781_18814 = state_18779__$1;
(statearr_18781_18814[(2)] = inst_18775);

(statearr_18781_18814[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (1))){
var inst_18738 = [];
var inst_18739 = inst_18738;
var inst_18740 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18779__$1 = (function (){var statearr_18782 = state_18779;
(statearr_18782[(7)] = inst_18739);

(statearr_18782[(8)] = inst_18740);

return statearr_18782;
})();
var statearr_18783_18815 = state_18779__$1;
(statearr_18783_18815[(2)] = null);

(statearr_18783_18815[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (4))){
var inst_18743 = (state_18779[(9)]);
var inst_18743__$1 = (state_18779[(2)]);
var inst_18744 = (inst_18743__$1 == null);
var inst_18745 = cljs.core.not(inst_18744);
var state_18779__$1 = (function (){var statearr_18784 = state_18779;
(statearr_18784[(9)] = inst_18743__$1);

return statearr_18784;
})();
if(inst_18745){
var statearr_18785_18816 = state_18779__$1;
(statearr_18785_18816[(1)] = (5));

} else {
var statearr_18786_18817 = state_18779__$1;
(statearr_18786_18817[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (15))){
var inst_18769 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18787_18818 = state_18779__$1;
(statearr_18787_18818[(2)] = inst_18769);

(statearr_18787_18818[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (13))){
var state_18779__$1 = state_18779;
var statearr_18788_18819 = state_18779__$1;
(statearr_18788_18819[(2)] = null);

(statearr_18788_18819[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (6))){
var inst_18739 = (state_18779[(7)]);
var inst_18764 = inst_18739.length;
var inst_18765 = (inst_18764 > (0));
var state_18779__$1 = state_18779;
if(cljs.core.truth_(inst_18765)){
var statearr_18789_18820 = state_18779__$1;
(statearr_18789_18820[(1)] = (12));

} else {
var statearr_18790_18821 = state_18779__$1;
(statearr_18790_18821[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (3))){
var inst_18777 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18779__$1,inst_18777);
} else {
if((state_val_18780 === (12))){
var inst_18739 = (state_18779[(7)]);
var inst_18767 = cljs.core.vec(inst_18739);
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18779__$1,(15),out,inst_18767);
} else {
if((state_val_18780 === (2))){
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18779__$1,(4),ch);
} else {
if((state_val_18780 === (11))){
var inst_18747 = (state_18779[(10)]);
var inst_18743 = (state_18779[(9)]);
var inst_18757 = (state_18779[(2)]);
var inst_18758 = [];
var inst_18759 = inst_18758.push(inst_18743);
var inst_18739 = inst_18758;
var inst_18740 = inst_18747;
var state_18779__$1 = (function (){var statearr_18791 = state_18779;
(statearr_18791[(7)] = inst_18739);

(statearr_18791[(11)] = inst_18759);

(statearr_18791[(8)] = inst_18740);

(statearr_18791[(12)] = inst_18757);

return statearr_18791;
})();
var statearr_18792_18822 = state_18779__$1;
(statearr_18792_18822[(2)] = null);

(statearr_18792_18822[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (9))){
var inst_18739 = (state_18779[(7)]);
var inst_18755 = cljs.core.vec(inst_18739);
var state_18779__$1 = state_18779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18779__$1,(11),out,inst_18755);
} else {
if((state_val_18780 === (5))){
var inst_18747 = (state_18779[(10)]);
var inst_18740 = (state_18779[(8)]);
var inst_18743 = (state_18779[(9)]);
var inst_18747__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18743) : f.call(null,inst_18743));
var inst_18748 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18747__$1,inst_18740);
var inst_18749 = cljs.core.keyword_identical_QMARK_(inst_18740,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18750 = (inst_18748) || (inst_18749);
var state_18779__$1 = (function (){var statearr_18793 = state_18779;
(statearr_18793[(10)] = inst_18747__$1);

return statearr_18793;
})();
if(cljs.core.truth_(inst_18750)){
var statearr_18794_18823 = state_18779__$1;
(statearr_18794_18823[(1)] = (8));

} else {
var statearr_18795_18824 = state_18779__$1;
(statearr_18795_18824[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (14))){
var inst_18772 = (state_18779[(2)]);
var inst_18773 = cljs.core.async.close_BANG_(out);
var state_18779__$1 = (function (){var statearr_18797 = state_18779;
(statearr_18797[(13)] = inst_18772);

return statearr_18797;
})();
var statearr_18798_18825 = state_18779__$1;
(statearr_18798_18825[(2)] = inst_18773);

(statearr_18798_18825[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (10))){
var inst_18762 = (state_18779[(2)]);
var state_18779__$1 = state_18779;
var statearr_18799_18826 = state_18779__$1;
(statearr_18799_18826[(2)] = inst_18762);

(statearr_18799_18826[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18780 === (8))){
var inst_18739 = (state_18779[(7)]);
var inst_18747 = (state_18779[(10)]);
var inst_18743 = (state_18779[(9)]);
var inst_18752 = inst_18739.push(inst_18743);
var tmp18796 = inst_18739;
var inst_18739__$1 = tmp18796;
var inst_18740 = inst_18747;
var state_18779__$1 = (function (){var statearr_18800 = state_18779;
(statearr_18800[(7)] = inst_18739__$1);

(statearr_18800[(14)] = inst_18752);

(statearr_18800[(8)] = inst_18740);

return statearr_18800;
})();
var statearr_18801_18827 = state_18779__$1;
(statearr_18801_18827[(2)] = null);

(statearr_18801_18827[(1)] = (2));


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
});})(c__16031__auto___18813,out))
;
return ((function (switch__15917__auto__,c__16031__auto___18813,out){
return (function() {
var cljs$core$async$state_machine__15918__auto__ = null;
var cljs$core$async$state_machine__15918__auto____0 = (function (){
var statearr_18805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18805[(0)] = cljs$core$async$state_machine__15918__auto__);

(statearr_18805[(1)] = (1));

return statearr_18805;
});
var cljs$core$async$state_machine__15918__auto____1 = (function (state_18779){
while(true){
var ret_value__15919__auto__ = (function (){try{while(true){
var result__15920__auto__ = switch__15917__auto__(state_18779);
if(cljs.core.keyword_identical_QMARK_(result__15920__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15920__auto__;
}
break;
}
}catch (e18806){if((e18806 instanceof Object)){
var ex__15921__auto__ = e18806;
var statearr_18807_18828 = state_18779;
(statearr_18807_18828[(5)] = ex__15921__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18779);

return cljs.core.cst$kw$recur;
} else {
throw e18806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15919__auto__,cljs.core.cst$kw$recur)){
var G__18829 = state_18779;
state_18779 = G__18829;
continue;
} else {
return ret_value__15919__auto__;
}
break;
}
});
cljs$core$async$state_machine__15918__auto__ = function(state_18779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15918__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15918__auto____1.call(this,state_18779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15918__auto____0;
cljs$core$async$state_machine__15918__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15918__auto____1;
return cljs$core$async$state_machine__15918__auto__;
})()
;})(switch__15917__auto__,c__16031__auto___18813,out))
})();
var state__16033__auto__ = (function (){var statearr_18808 = (f__16032__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16032__auto__.cljs$core$IFn$_invoke$arity$0() : f__16032__auto__.call(null));
(statearr_18808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16031__auto___18813);

return statearr_18808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16033__auto__);
});})(c__16031__auto___18813,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
