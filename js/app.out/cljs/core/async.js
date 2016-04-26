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
var args16156 = [];
var len__7542__auto___16162 = arguments.length;
var i__7543__auto___16163 = (0);
while(true){
if((i__7543__auto___16163 < len__7542__auto___16162)){
args16156.push((arguments[i__7543__auto___16163]));

var G__16164 = (i__7543__auto___16163 + (1));
i__7543__auto___16163 = G__16164;
continue;
} else {
}
break;
}

var G__16158 = args16156.length;
switch (G__16158) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16156.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16159 = (function (f,blockable,meta16160){
this.f = f;
this.blockable = blockable;
this.meta16160 = meta16160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16161,meta16160__$1){
var self__ = this;
var _16161__$1 = this;
return (new cljs.core.async.t_cljs$core$async16159(self__.f,self__.blockable,meta16160__$1));
});

cljs.core.async.t_cljs$core$async16159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16161){
var self__ = this;
var _16161__$1 = this;
return self__.meta16160;
});

cljs.core.async.t_cljs$core$async16159.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16160], null);
});

cljs.core.async.t_cljs$core$async16159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16159";

cljs.core.async.t_cljs$core$async16159.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16159");
});

cljs.core.async.__GT_t_cljs$core$async16159 = (function cljs$core$async$__GT_t_cljs$core$async16159(f__$1,blockable__$1,meta16160){
return (new cljs.core.async.t_cljs$core$async16159(f__$1,blockable__$1,meta16160));
});

}

return (new cljs.core.async.t_cljs$core$async16159(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args16168 = [];
var len__7542__auto___16171 = arguments.length;
var i__7543__auto___16172 = (0);
while(true){
if((i__7543__auto___16172 < len__7542__auto___16171)){
args16168.push((arguments[i__7543__auto___16172]));

var G__16173 = (i__7543__auto___16172 + (1));
i__7543__auto___16172 = G__16173;
continue;
} else {
}
break;
}

var G__16170 = args16168.length;
switch (G__16170) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16168.length)].join('')));

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
var args16175 = [];
var len__7542__auto___16178 = arguments.length;
var i__7543__auto___16179 = (0);
while(true){
if((i__7543__auto___16179 < len__7542__auto___16178)){
args16175.push((arguments[i__7543__auto___16179]));

var G__16180 = (i__7543__auto___16179 + (1));
i__7543__auto___16179 = G__16180;
continue;
} else {
}
break;
}

var G__16177 = args16175.length;
switch (G__16177) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16175.length)].join('')));

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
var args16182 = [];
var len__7542__auto___16185 = arguments.length;
var i__7543__auto___16186 = (0);
while(true){
if((i__7543__auto___16186 < len__7542__auto___16185)){
args16182.push((arguments[i__7543__auto___16186]));

var G__16187 = (i__7543__auto___16186 + (1));
i__7543__auto___16186 = G__16187;
continue;
} else {
}
break;
}

var G__16184 = args16182.length;
switch (G__16184) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16182.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16189 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16189) : fn1.call(null,val_16189));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16189,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16189) : fn1.call(null,val_16189));
});})(val_16189,ret))
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
var args16190 = [];
var len__7542__auto___16193 = arguments.length;
var i__7543__auto___16194 = (0);
while(true){
if((i__7543__auto___16194 < len__7542__auto___16193)){
args16190.push((arguments[i__7543__auto___16194]));

var G__16195 = (i__7543__auto___16194 + (1));
i__7543__auto___16194 = G__16195;
continue;
} else {
}
break;
}

var G__16192 = args16190.length;
switch (G__16192) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16190.length)].join('')));

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
var n__7387__auto___16197 = n;
var x_16198 = (0);
while(true){
if((x_16198 < n__7387__auto___16197)){
(a[x_16198] = (0));

var G__16199 = (x_16198 + (1));
x_16198 = G__16199;
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

var G__16200 = (i + (1));
i = G__16200;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16204 = (function (alt_flag,flag,meta16205){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16205 = meta16205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16206,meta16205__$1){
var self__ = this;
var _16206__$1 = this;
return (new cljs.core.async.t_cljs$core$async16204(self__.alt_flag,self__.flag,meta16205__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16206){
var self__ = this;
var _16206__$1 = this;
return self__.meta16205;
});})(flag))
;

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16204.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16204.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16205], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16204";

cljs.core.async.t_cljs$core$async16204.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16204");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16204 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16204(alt_flag__$1,flag__$1,meta16205){
return (new cljs.core.async.t_cljs$core$async16204(alt_flag__$1,flag__$1,meta16205));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16204(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16210 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16210 = (function (alt_handler,flag,cb,meta16211){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16211 = meta16211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16212,meta16211__$1){
var self__ = this;
var _16212__$1 = this;
return (new cljs.core.async.t_cljs$core$async16210(self__.alt_handler,self__.flag,self__.cb,meta16211__$1));
});

cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16212){
var self__ = this;
var _16212__$1 = this;
return self__.meta16211;
});

cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16211], null);
});

cljs.core.async.t_cljs$core$async16210.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16210";

cljs.core.async.t_cljs$core$async16210.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16210");
});

cljs.core.async.__GT_t_cljs$core$async16210 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16210(alt_handler__$1,flag__$1,cb__$1,meta16211){
return (new cljs.core.async.t_cljs$core$async16210(alt_handler__$1,flag__$1,cb__$1,meta16211));
});

}

return (new cljs.core.async.t_cljs$core$async16210(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16213_SHARP_){
var G__16217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16213_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16217) : fret.call(null,G__16217));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16214_SHARP_){
var G__16218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16214_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16218) : fret.call(null,G__16218));
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
var G__16219 = (i + (1));
i = G__16219;
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
var len__7542__auto___16225 = arguments.length;
var i__7543__auto___16226 = (0);
while(true){
if((i__7543__auto___16226 < len__7542__auto___16225)){
args__7549__auto__.push((arguments[i__7543__auto___16226]));

var G__16227 = (i__7543__auto___16226 + (1));
i__7543__auto___16226 = G__16227;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16222){
var map__16223 = p__16222;
var map__16223__$1 = ((((!((map__16223 == null)))?((((map__16223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16223):map__16223);
var opts = map__16223__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16220){
var G__16221 = cljs.core.first(seq16220);
var seq16220__$1 = cljs.core.next(seq16220);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16221,seq16220__$1);
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
var args16228 = [];
var len__7542__auto___16278 = arguments.length;
var i__7543__auto___16279 = (0);
while(true){
if((i__7543__auto___16279 < len__7542__auto___16278)){
args16228.push((arguments[i__7543__auto___16279]));

var G__16280 = (i__7543__auto___16279 + (1));
i__7543__auto___16279 = G__16280;
continue;
} else {
}
break;
}

var G__16230 = args16228.length;
switch (G__16230) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16228.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16111__auto___16282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___16282){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___16282){
return (function (state_16254){
var state_val_16255 = (state_16254[(1)]);
if((state_val_16255 === (7))){
var inst_16250 = (state_16254[(2)]);
var state_16254__$1 = state_16254;
var statearr_16256_16283 = state_16254__$1;
(statearr_16256_16283[(2)] = inst_16250);

(statearr_16256_16283[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (1))){
var state_16254__$1 = state_16254;
var statearr_16257_16284 = state_16254__$1;
(statearr_16257_16284[(2)] = null);

(statearr_16257_16284[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (4))){
var inst_16233 = (state_16254[(7)]);
var inst_16233__$1 = (state_16254[(2)]);
var inst_16234 = (inst_16233__$1 == null);
var state_16254__$1 = (function (){var statearr_16258 = state_16254;
(statearr_16258[(7)] = inst_16233__$1);

return statearr_16258;
})();
if(cljs.core.truth_(inst_16234)){
var statearr_16259_16285 = state_16254__$1;
(statearr_16259_16285[(1)] = (5));

} else {
var statearr_16260_16286 = state_16254__$1;
(statearr_16260_16286[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (13))){
var state_16254__$1 = state_16254;
var statearr_16261_16287 = state_16254__$1;
(statearr_16261_16287[(2)] = null);

(statearr_16261_16287[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (6))){
var inst_16233 = (state_16254[(7)]);
var state_16254__$1 = state_16254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16254__$1,(11),to,inst_16233);
} else {
if((state_val_16255 === (3))){
var inst_16252 = (state_16254[(2)]);
var state_16254__$1 = state_16254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16254__$1,inst_16252);
} else {
if((state_val_16255 === (12))){
var state_16254__$1 = state_16254;
var statearr_16262_16288 = state_16254__$1;
(statearr_16262_16288[(2)] = null);

(statearr_16262_16288[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (2))){
var state_16254__$1 = state_16254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16254__$1,(4),from);
} else {
if((state_val_16255 === (11))){
var inst_16243 = (state_16254[(2)]);
var state_16254__$1 = state_16254;
if(cljs.core.truth_(inst_16243)){
var statearr_16263_16289 = state_16254__$1;
(statearr_16263_16289[(1)] = (12));

} else {
var statearr_16264_16290 = state_16254__$1;
(statearr_16264_16290[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (9))){
var state_16254__$1 = state_16254;
var statearr_16265_16291 = state_16254__$1;
(statearr_16265_16291[(2)] = null);

(statearr_16265_16291[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (5))){
var state_16254__$1 = state_16254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16266_16292 = state_16254__$1;
(statearr_16266_16292[(1)] = (8));

} else {
var statearr_16267_16293 = state_16254__$1;
(statearr_16267_16293[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (14))){
var inst_16248 = (state_16254[(2)]);
var state_16254__$1 = state_16254;
var statearr_16268_16294 = state_16254__$1;
(statearr_16268_16294[(2)] = inst_16248);

(statearr_16268_16294[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (10))){
var inst_16240 = (state_16254[(2)]);
var state_16254__$1 = state_16254;
var statearr_16269_16295 = state_16254__$1;
(statearr_16269_16295[(2)] = inst_16240);

(statearr_16269_16295[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16255 === (8))){
var inst_16237 = cljs.core.async.close_BANG_(to);
var state_16254__$1 = state_16254;
var statearr_16270_16296 = state_16254__$1;
(statearr_16270_16296[(2)] = inst_16237);

(statearr_16270_16296[(1)] = (10));


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
});})(c__16111__auto___16282))
;
return ((function (switch__15997__auto__,c__16111__auto___16282){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_16274 = [null,null,null,null,null,null,null,null];
(statearr_16274[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_16274[(1)] = (1));

return statearr_16274;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_16254){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_16254);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e16275){if((e16275 instanceof Object)){
var ex__16001__auto__ = e16275;
var statearr_16276_16297 = state_16254;
(statearr_16276_16297[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16254);

return cljs.core.cst$kw$recur;
} else {
throw e16275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__16298 = state_16254;
state_16254 = G__16298;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_16254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_16254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___16282))
})();
var state__16113__auto__ = (function (){var statearr_16277 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_16277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___16282);

return statearr_16277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___16282))
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
return (function (p__16482){
var vec__16483 = p__16482;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16483,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16483,(1),null);
var job = vec__16483;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16111__auto___16665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___16665,res,vec__16483,v,p,job,jobs,results){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___16665,res,vec__16483,v,p,job,jobs,results){
return (function (state_16488){
var state_val_16489 = (state_16488[(1)]);
if((state_val_16489 === (1))){
var state_16488__$1 = state_16488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16488__$1,(2),res,v);
} else {
if((state_val_16489 === (2))){
var inst_16485 = (state_16488[(2)]);
var inst_16486 = cljs.core.async.close_BANG_(res);
var state_16488__$1 = (function (){var statearr_16490 = state_16488;
(statearr_16490[(7)] = inst_16485);

return statearr_16490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16488__$1,inst_16486);
} else {
return null;
}
}
});})(c__16111__auto___16665,res,vec__16483,v,p,job,jobs,results))
;
return ((function (switch__15997__auto__,c__16111__auto___16665,res,vec__16483,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0 = (function (){
var statearr_16494 = [null,null,null,null,null,null,null,null];
(statearr_16494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__);

(statearr_16494[(1)] = (1));

return statearr_16494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1 = (function (state_16488){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_16488);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e16495){if((e16495 instanceof Object)){
var ex__16001__auto__ = e16495;
var statearr_16496_16666 = state_16488;
(statearr_16496_16666[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16488);

return cljs.core.cst$kw$recur;
} else {
throw e16495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__16667 = state_16488;
state_16488 = G__16667;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = function(state_16488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1.call(this,state_16488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___16665,res,vec__16483,v,p,job,jobs,results))
})();
var state__16113__auto__ = (function (){var statearr_16497 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_16497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___16665);

return statearr_16497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___16665,res,vec__16483,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16498){
var vec__16499 = p__16498;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16499,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16499,(1),null);
var job = vec__16499;
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
var n__7387__auto___16668 = n;
var __16669 = (0);
while(true){
if((__16669 < n__7387__auto___16668)){
var G__16500_16670 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16500_16670) {
case "compute":
var c__16111__auto___16672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16669,c__16111__auto___16672,G__16500_16670,n__7387__auto___16668,jobs,results,process,async){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (__16669,c__16111__auto___16672,G__16500_16670,n__7387__auto___16668,jobs,results,process,async){
return (function (state_16513){
var state_val_16514 = (state_16513[(1)]);
if((state_val_16514 === (1))){
var state_16513__$1 = state_16513;
var statearr_16515_16673 = state_16513__$1;
(statearr_16515_16673[(2)] = null);

(statearr_16515_16673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16514 === (2))){
var state_16513__$1 = state_16513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16513__$1,(4),jobs);
} else {
if((state_val_16514 === (3))){
var inst_16511 = (state_16513[(2)]);
var state_16513__$1 = state_16513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16513__$1,inst_16511);
} else {
if((state_val_16514 === (4))){
var inst_16503 = (state_16513[(2)]);
var inst_16504 = process(inst_16503);
var state_16513__$1 = state_16513;
if(cljs.core.truth_(inst_16504)){
var statearr_16516_16674 = state_16513__$1;
(statearr_16516_16674[(1)] = (5));

} else {
var statearr_16517_16675 = state_16513__$1;
(statearr_16517_16675[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16514 === (5))){
var state_16513__$1 = state_16513;
var statearr_16518_16676 = state_16513__$1;
(statearr_16518_16676[(2)] = null);

(statearr_16518_16676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16514 === (6))){
var state_16513__$1 = state_16513;
var statearr_16519_16677 = state_16513__$1;
(statearr_16519_16677[(2)] = null);

(statearr_16519_16677[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16514 === (7))){
var inst_16509 = (state_16513[(2)]);
var state_16513__$1 = state_16513;
var statearr_16520_16678 = state_16513__$1;
(statearr_16520_16678[(2)] = inst_16509);

(statearr_16520_16678[(1)] = (3));


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
});})(__16669,c__16111__auto___16672,G__16500_16670,n__7387__auto___16668,jobs,results,process,async))
;
return ((function (__16669,switch__15997__auto__,c__16111__auto___16672,G__16500_16670,n__7387__auto___16668,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0 = (function (){
var statearr_16524 = [null,null,null,null,null,null,null];
(statearr_16524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__);

(statearr_16524[(1)] = (1));

return statearr_16524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1 = (function (state_16513){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_16513);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e16525){if((e16525 instanceof Object)){
var ex__16001__auto__ = e16525;
var statearr_16526_16679 = state_16513;
(statearr_16526_16679[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16513);

return cljs.core.cst$kw$recur;
} else {
throw e16525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__16680 = state_16513;
state_16513 = G__16680;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = function(state_16513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1.call(this,state_16513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__;
})()
;})(__16669,switch__15997__auto__,c__16111__auto___16672,G__16500_16670,n__7387__auto___16668,jobs,results,process,async))
})();
var state__16113__auto__ = (function (){var statearr_16527 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_16527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___16672);

return statearr_16527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(__16669,c__16111__auto___16672,G__16500_16670,n__7387__auto___16668,jobs,results,process,async))
);


break;
case "async":
var c__16111__auto___16681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16669,c__16111__auto___16681,G__16500_16670,n__7387__auto___16668,jobs,results,process,async){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (__16669,c__16111__auto___16681,G__16500_16670,n__7387__auto___16668,jobs,results,process,async){
return (function (state_16540){
var state_val_16541 = (state_16540[(1)]);
if((state_val_16541 === (1))){
var state_16540__$1 = state_16540;
var statearr_16542_16682 = state_16540__$1;
(statearr_16542_16682[(2)] = null);

(statearr_16542_16682[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16541 === (2))){
var state_16540__$1 = state_16540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16540__$1,(4),jobs);
} else {
if((state_val_16541 === (3))){
var inst_16538 = (state_16540[(2)]);
var state_16540__$1 = state_16540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16540__$1,inst_16538);
} else {
if((state_val_16541 === (4))){
var inst_16530 = (state_16540[(2)]);
var inst_16531 = async(inst_16530);
var state_16540__$1 = state_16540;
if(cljs.core.truth_(inst_16531)){
var statearr_16543_16683 = state_16540__$1;
(statearr_16543_16683[(1)] = (5));

} else {
var statearr_16544_16684 = state_16540__$1;
(statearr_16544_16684[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16541 === (5))){
var state_16540__$1 = state_16540;
var statearr_16545_16685 = state_16540__$1;
(statearr_16545_16685[(2)] = null);

(statearr_16545_16685[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16541 === (6))){
var state_16540__$1 = state_16540;
var statearr_16546_16686 = state_16540__$1;
(statearr_16546_16686[(2)] = null);

(statearr_16546_16686[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16541 === (7))){
var inst_16536 = (state_16540[(2)]);
var state_16540__$1 = state_16540;
var statearr_16547_16687 = state_16540__$1;
(statearr_16547_16687[(2)] = inst_16536);

(statearr_16547_16687[(1)] = (3));


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
});})(__16669,c__16111__auto___16681,G__16500_16670,n__7387__auto___16668,jobs,results,process,async))
;
return ((function (__16669,switch__15997__auto__,c__16111__auto___16681,G__16500_16670,n__7387__auto___16668,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0 = (function (){
var statearr_16551 = [null,null,null,null,null,null,null];
(statearr_16551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__);

(statearr_16551[(1)] = (1));

return statearr_16551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1 = (function (state_16540){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_16540);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e16552){if((e16552 instanceof Object)){
var ex__16001__auto__ = e16552;
var statearr_16553_16688 = state_16540;
(statearr_16553_16688[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16540);

return cljs.core.cst$kw$recur;
} else {
throw e16552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__16689 = state_16540;
state_16540 = G__16689;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = function(state_16540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1.call(this,state_16540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__;
})()
;})(__16669,switch__15997__auto__,c__16111__auto___16681,G__16500_16670,n__7387__auto___16668,jobs,results,process,async))
})();
var state__16113__auto__ = (function (){var statearr_16554 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_16554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___16681);

return statearr_16554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(__16669,c__16111__auto___16681,G__16500_16670,n__7387__auto___16668,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16690 = (__16669 + (1));
__16669 = G__16690;
continue;
} else {
}
break;
}

var c__16111__auto___16691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___16691,jobs,results,process,async){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___16691,jobs,results,process,async){
return (function (state_16576){
var state_val_16577 = (state_16576[(1)]);
if((state_val_16577 === (1))){
var state_16576__$1 = state_16576;
var statearr_16578_16692 = state_16576__$1;
(statearr_16578_16692[(2)] = null);

(statearr_16578_16692[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16577 === (2))){
var state_16576__$1 = state_16576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16576__$1,(4),from);
} else {
if((state_val_16577 === (3))){
var inst_16574 = (state_16576[(2)]);
var state_16576__$1 = state_16576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16576__$1,inst_16574);
} else {
if((state_val_16577 === (4))){
var inst_16557 = (state_16576[(7)]);
var inst_16557__$1 = (state_16576[(2)]);
var inst_16558 = (inst_16557__$1 == null);
var state_16576__$1 = (function (){var statearr_16579 = state_16576;
(statearr_16579[(7)] = inst_16557__$1);

return statearr_16579;
})();
if(cljs.core.truth_(inst_16558)){
var statearr_16580_16693 = state_16576__$1;
(statearr_16580_16693[(1)] = (5));

} else {
var statearr_16581_16694 = state_16576__$1;
(statearr_16581_16694[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16577 === (5))){
var inst_16560 = cljs.core.async.close_BANG_(jobs);
var state_16576__$1 = state_16576;
var statearr_16582_16695 = state_16576__$1;
(statearr_16582_16695[(2)] = inst_16560);

(statearr_16582_16695[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16577 === (6))){
var inst_16562 = (state_16576[(8)]);
var inst_16557 = (state_16576[(7)]);
var inst_16562__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16563 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16564 = [inst_16557,inst_16562__$1];
var inst_16565 = (new cljs.core.PersistentVector(null,2,(5),inst_16563,inst_16564,null));
var state_16576__$1 = (function (){var statearr_16583 = state_16576;
(statearr_16583[(8)] = inst_16562__$1);

return statearr_16583;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16576__$1,(8),jobs,inst_16565);
} else {
if((state_val_16577 === (7))){
var inst_16572 = (state_16576[(2)]);
var state_16576__$1 = state_16576;
var statearr_16584_16696 = state_16576__$1;
(statearr_16584_16696[(2)] = inst_16572);

(statearr_16584_16696[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16577 === (8))){
var inst_16562 = (state_16576[(8)]);
var inst_16567 = (state_16576[(2)]);
var state_16576__$1 = (function (){var statearr_16585 = state_16576;
(statearr_16585[(9)] = inst_16567);

return statearr_16585;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16576__$1,(9),results,inst_16562);
} else {
if((state_val_16577 === (9))){
var inst_16569 = (state_16576[(2)]);
var state_16576__$1 = (function (){var statearr_16586 = state_16576;
(statearr_16586[(10)] = inst_16569);

return statearr_16586;
})();
var statearr_16587_16697 = state_16576__$1;
(statearr_16587_16697[(2)] = null);

(statearr_16587_16697[(1)] = (2));


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
});})(c__16111__auto___16691,jobs,results,process,async))
;
return ((function (switch__15997__auto__,c__16111__auto___16691,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0 = (function (){
var statearr_16591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__);

(statearr_16591[(1)] = (1));

return statearr_16591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1 = (function (state_16576){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_16576);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e16592){if((e16592 instanceof Object)){
var ex__16001__auto__ = e16592;
var statearr_16593_16698 = state_16576;
(statearr_16593_16698[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16576);

return cljs.core.cst$kw$recur;
} else {
throw e16592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__16699 = state_16576;
state_16576 = G__16699;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = function(state_16576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1.call(this,state_16576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___16691,jobs,results,process,async))
})();
var state__16113__auto__ = (function (){var statearr_16594 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_16594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___16691);

return statearr_16594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___16691,jobs,results,process,async))
);


var c__16111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto__,jobs,results,process,async){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto__,jobs,results,process,async){
return (function (state_16632){
var state_val_16633 = (state_16632[(1)]);
if((state_val_16633 === (7))){
var inst_16628 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16634_16700 = state_16632__$1;
(statearr_16634_16700[(2)] = inst_16628);

(statearr_16634_16700[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (20))){
var state_16632__$1 = state_16632;
var statearr_16635_16701 = state_16632__$1;
(statearr_16635_16701[(2)] = null);

(statearr_16635_16701[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (1))){
var state_16632__$1 = state_16632;
var statearr_16636_16702 = state_16632__$1;
(statearr_16636_16702[(2)] = null);

(statearr_16636_16702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (4))){
var inst_16597 = (state_16632[(7)]);
var inst_16597__$1 = (state_16632[(2)]);
var inst_16598 = (inst_16597__$1 == null);
var state_16632__$1 = (function (){var statearr_16637 = state_16632;
(statearr_16637[(7)] = inst_16597__$1);

return statearr_16637;
})();
if(cljs.core.truth_(inst_16598)){
var statearr_16638_16703 = state_16632__$1;
(statearr_16638_16703[(1)] = (5));

} else {
var statearr_16639_16704 = state_16632__$1;
(statearr_16639_16704[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (15))){
var inst_16610 = (state_16632[(8)]);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16632__$1,(18),to,inst_16610);
} else {
if((state_val_16633 === (21))){
var inst_16623 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16640_16705 = state_16632__$1;
(statearr_16640_16705[(2)] = inst_16623);

(statearr_16640_16705[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (13))){
var inst_16625 = (state_16632[(2)]);
var state_16632__$1 = (function (){var statearr_16641 = state_16632;
(statearr_16641[(9)] = inst_16625);

return statearr_16641;
})();
var statearr_16642_16706 = state_16632__$1;
(statearr_16642_16706[(2)] = null);

(statearr_16642_16706[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (6))){
var inst_16597 = (state_16632[(7)]);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16632__$1,(11),inst_16597);
} else {
if((state_val_16633 === (17))){
var inst_16618 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
if(cljs.core.truth_(inst_16618)){
var statearr_16643_16707 = state_16632__$1;
(statearr_16643_16707[(1)] = (19));

} else {
var statearr_16644_16708 = state_16632__$1;
(statearr_16644_16708[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (3))){
var inst_16630 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16632__$1,inst_16630);
} else {
if((state_val_16633 === (12))){
var inst_16607 = (state_16632[(10)]);
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16632__$1,(14),inst_16607);
} else {
if((state_val_16633 === (2))){
var state_16632__$1 = state_16632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16632__$1,(4),results);
} else {
if((state_val_16633 === (19))){
var state_16632__$1 = state_16632;
var statearr_16645_16709 = state_16632__$1;
(statearr_16645_16709[(2)] = null);

(statearr_16645_16709[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (11))){
var inst_16607 = (state_16632[(2)]);
var state_16632__$1 = (function (){var statearr_16646 = state_16632;
(statearr_16646[(10)] = inst_16607);

return statearr_16646;
})();
var statearr_16647_16710 = state_16632__$1;
(statearr_16647_16710[(2)] = null);

(statearr_16647_16710[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (9))){
var state_16632__$1 = state_16632;
var statearr_16648_16711 = state_16632__$1;
(statearr_16648_16711[(2)] = null);

(statearr_16648_16711[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (5))){
var state_16632__$1 = state_16632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16649_16712 = state_16632__$1;
(statearr_16649_16712[(1)] = (8));

} else {
var statearr_16650_16713 = state_16632__$1;
(statearr_16650_16713[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (14))){
var inst_16610 = (state_16632[(8)]);
var inst_16612 = (state_16632[(11)]);
var inst_16610__$1 = (state_16632[(2)]);
var inst_16611 = (inst_16610__$1 == null);
var inst_16612__$1 = cljs.core.not(inst_16611);
var state_16632__$1 = (function (){var statearr_16651 = state_16632;
(statearr_16651[(8)] = inst_16610__$1);

(statearr_16651[(11)] = inst_16612__$1);

return statearr_16651;
})();
if(inst_16612__$1){
var statearr_16652_16714 = state_16632__$1;
(statearr_16652_16714[(1)] = (15));

} else {
var statearr_16653_16715 = state_16632__$1;
(statearr_16653_16715[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (16))){
var inst_16612 = (state_16632[(11)]);
var state_16632__$1 = state_16632;
var statearr_16654_16716 = state_16632__$1;
(statearr_16654_16716[(2)] = inst_16612);

(statearr_16654_16716[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (10))){
var inst_16604 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16655_16717 = state_16632__$1;
(statearr_16655_16717[(2)] = inst_16604);

(statearr_16655_16717[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (18))){
var inst_16615 = (state_16632[(2)]);
var state_16632__$1 = state_16632;
var statearr_16656_16718 = state_16632__$1;
(statearr_16656_16718[(2)] = inst_16615);

(statearr_16656_16718[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16633 === (8))){
var inst_16601 = cljs.core.async.close_BANG_(to);
var state_16632__$1 = state_16632;
var statearr_16657_16719 = state_16632__$1;
(statearr_16657_16719[(2)] = inst_16601);

(statearr_16657_16719[(1)] = (10));


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
});})(c__16111__auto__,jobs,results,process,async))
;
return ((function (switch__15997__auto__,c__16111__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0 = (function (){
var statearr_16661 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__);

(statearr_16661[(1)] = (1));

return statearr_16661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1 = (function (state_16632){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_16632);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e16662){if((e16662 instanceof Object)){
var ex__16001__auto__ = e16662;
var statearr_16663_16720 = state_16632;
(statearr_16663_16720[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16632);

return cljs.core.cst$kw$recur;
} else {
throw e16662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__16721 = state_16632;
state_16632 = G__16721;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__ = function(state_16632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1.call(this,state_16632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15998__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto__,jobs,results,process,async))
})();
var state__16113__auto__ = (function (){var statearr_16664 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_16664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto__);

return statearr_16664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto__,jobs,results,process,async))
);

return c__16111__auto__;
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
var args16722 = [];
var len__7542__auto___16725 = arguments.length;
var i__7543__auto___16726 = (0);
while(true){
if((i__7543__auto___16726 < len__7542__auto___16725)){
args16722.push((arguments[i__7543__auto___16726]));

var G__16727 = (i__7543__auto___16726 + (1));
i__7543__auto___16726 = G__16727;
continue;
} else {
}
break;
}

var G__16724 = args16722.length;
switch (G__16724) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16722.length)].join('')));

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
var args16729 = [];
var len__7542__auto___16732 = arguments.length;
var i__7543__auto___16733 = (0);
while(true){
if((i__7543__auto___16733 < len__7542__auto___16732)){
args16729.push((arguments[i__7543__auto___16733]));

var G__16734 = (i__7543__auto___16733 + (1));
i__7543__auto___16733 = G__16734;
continue;
} else {
}
break;
}

var G__16731 = args16729.length;
switch (G__16731) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16729.length)].join('')));

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
var args16736 = [];
var len__7542__auto___16789 = arguments.length;
var i__7543__auto___16790 = (0);
while(true){
if((i__7543__auto___16790 < len__7542__auto___16789)){
args16736.push((arguments[i__7543__auto___16790]));

var G__16791 = (i__7543__auto___16790 + (1));
i__7543__auto___16790 = G__16791;
continue;
} else {
}
break;
}

var G__16738 = args16736.length;
switch (G__16738) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16736.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16111__auto___16793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___16793,tc,fc){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___16793,tc,fc){
return (function (state_16764){
var state_val_16765 = (state_16764[(1)]);
if((state_val_16765 === (7))){
var inst_16760 = (state_16764[(2)]);
var state_16764__$1 = state_16764;
var statearr_16766_16794 = state_16764__$1;
(statearr_16766_16794[(2)] = inst_16760);

(statearr_16766_16794[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (1))){
var state_16764__$1 = state_16764;
var statearr_16767_16795 = state_16764__$1;
(statearr_16767_16795[(2)] = null);

(statearr_16767_16795[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (4))){
var inst_16741 = (state_16764[(7)]);
var inst_16741__$1 = (state_16764[(2)]);
var inst_16742 = (inst_16741__$1 == null);
var state_16764__$1 = (function (){var statearr_16768 = state_16764;
(statearr_16768[(7)] = inst_16741__$1);

return statearr_16768;
})();
if(cljs.core.truth_(inst_16742)){
var statearr_16769_16796 = state_16764__$1;
(statearr_16769_16796[(1)] = (5));

} else {
var statearr_16770_16797 = state_16764__$1;
(statearr_16770_16797[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (13))){
var state_16764__$1 = state_16764;
var statearr_16771_16798 = state_16764__$1;
(statearr_16771_16798[(2)] = null);

(statearr_16771_16798[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (6))){
var inst_16741 = (state_16764[(7)]);
var inst_16747 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16741) : p.call(null,inst_16741));
var state_16764__$1 = state_16764;
if(cljs.core.truth_(inst_16747)){
var statearr_16772_16799 = state_16764__$1;
(statearr_16772_16799[(1)] = (9));

} else {
var statearr_16773_16800 = state_16764__$1;
(statearr_16773_16800[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (3))){
var inst_16762 = (state_16764[(2)]);
var state_16764__$1 = state_16764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16764__$1,inst_16762);
} else {
if((state_val_16765 === (12))){
var state_16764__$1 = state_16764;
var statearr_16774_16801 = state_16764__$1;
(statearr_16774_16801[(2)] = null);

(statearr_16774_16801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (2))){
var state_16764__$1 = state_16764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16764__$1,(4),ch);
} else {
if((state_val_16765 === (11))){
var inst_16741 = (state_16764[(7)]);
var inst_16751 = (state_16764[(2)]);
var state_16764__$1 = state_16764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16764__$1,(8),inst_16751,inst_16741);
} else {
if((state_val_16765 === (9))){
var state_16764__$1 = state_16764;
var statearr_16775_16802 = state_16764__$1;
(statearr_16775_16802[(2)] = tc);

(statearr_16775_16802[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (5))){
var inst_16744 = cljs.core.async.close_BANG_(tc);
var inst_16745 = cljs.core.async.close_BANG_(fc);
var state_16764__$1 = (function (){var statearr_16776 = state_16764;
(statearr_16776[(8)] = inst_16744);

return statearr_16776;
})();
var statearr_16777_16803 = state_16764__$1;
(statearr_16777_16803[(2)] = inst_16745);

(statearr_16777_16803[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (14))){
var inst_16758 = (state_16764[(2)]);
var state_16764__$1 = state_16764;
var statearr_16778_16804 = state_16764__$1;
(statearr_16778_16804[(2)] = inst_16758);

(statearr_16778_16804[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (10))){
var state_16764__$1 = state_16764;
var statearr_16779_16805 = state_16764__$1;
(statearr_16779_16805[(2)] = fc);

(statearr_16779_16805[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16765 === (8))){
var inst_16753 = (state_16764[(2)]);
var state_16764__$1 = state_16764;
if(cljs.core.truth_(inst_16753)){
var statearr_16780_16806 = state_16764__$1;
(statearr_16780_16806[(1)] = (12));

} else {
var statearr_16781_16807 = state_16764__$1;
(statearr_16781_16807[(1)] = (13));

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
});})(c__16111__auto___16793,tc,fc))
;
return ((function (switch__15997__auto__,c__16111__auto___16793,tc,fc){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_16785 = [null,null,null,null,null,null,null,null,null];
(statearr_16785[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_16785[(1)] = (1));

return statearr_16785;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_16764){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_16764);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e16786){if((e16786 instanceof Object)){
var ex__16001__auto__ = e16786;
var statearr_16787_16808 = state_16764;
(statearr_16787_16808[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16764);

return cljs.core.cst$kw$recur;
} else {
throw e16786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__16809 = state_16764;
state_16764 = G__16809;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_16764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_16764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___16793,tc,fc))
})();
var state__16113__auto__ = (function (){var statearr_16788 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_16788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___16793);

return statearr_16788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___16793,tc,fc))
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
var c__16111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto__){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto__){
return (function (state_16873){
var state_val_16874 = (state_16873[(1)]);
if((state_val_16874 === (7))){
var inst_16869 = (state_16873[(2)]);
var state_16873__$1 = state_16873;
var statearr_16875_16896 = state_16873__$1;
(statearr_16875_16896[(2)] = inst_16869);

(statearr_16875_16896[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16874 === (1))){
var inst_16853 = init;
var state_16873__$1 = (function (){var statearr_16876 = state_16873;
(statearr_16876[(7)] = inst_16853);

return statearr_16876;
})();
var statearr_16877_16897 = state_16873__$1;
(statearr_16877_16897[(2)] = null);

(statearr_16877_16897[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16874 === (4))){
var inst_16856 = (state_16873[(8)]);
var inst_16856__$1 = (state_16873[(2)]);
var inst_16857 = (inst_16856__$1 == null);
var state_16873__$1 = (function (){var statearr_16878 = state_16873;
(statearr_16878[(8)] = inst_16856__$1);

return statearr_16878;
})();
if(cljs.core.truth_(inst_16857)){
var statearr_16879_16898 = state_16873__$1;
(statearr_16879_16898[(1)] = (5));

} else {
var statearr_16880_16899 = state_16873__$1;
(statearr_16880_16899[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16874 === (6))){
var inst_16860 = (state_16873[(9)]);
var inst_16853 = (state_16873[(7)]);
var inst_16856 = (state_16873[(8)]);
var inst_16860__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16853,inst_16856) : f.call(null,inst_16853,inst_16856));
var inst_16861 = cljs.core.reduced_QMARK_(inst_16860__$1);
var state_16873__$1 = (function (){var statearr_16881 = state_16873;
(statearr_16881[(9)] = inst_16860__$1);

return statearr_16881;
})();
if(inst_16861){
var statearr_16882_16900 = state_16873__$1;
(statearr_16882_16900[(1)] = (8));

} else {
var statearr_16883_16901 = state_16873__$1;
(statearr_16883_16901[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16874 === (3))){
var inst_16871 = (state_16873[(2)]);
var state_16873__$1 = state_16873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16873__$1,inst_16871);
} else {
if((state_val_16874 === (2))){
var state_16873__$1 = state_16873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16873__$1,(4),ch);
} else {
if((state_val_16874 === (9))){
var inst_16860 = (state_16873[(9)]);
var inst_16853 = inst_16860;
var state_16873__$1 = (function (){var statearr_16884 = state_16873;
(statearr_16884[(7)] = inst_16853);

return statearr_16884;
})();
var statearr_16885_16902 = state_16873__$1;
(statearr_16885_16902[(2)] = null);

(statearr_16885_16902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16874 === (5))){
var inst_16853 = (state_16873[(7)]);
var state_16873__$1 = state_16873;
var statearr_16886_16903 = state_16873__$1;
(statearr_16886_16903[(2)] = inst_16853);

(statearr_16886_16903[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16874 === (10))){
var inst_16867 = (state_16873[(2)]);
var state_16873__$1 = state_16873;
var statearr_16887_16904 = state_16873__$1;
(statearr_16887_16904[(2)] = inst_16867);

(statearr_16887_16904[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16874 === (8))){
var inst_16860 = (state_16873[(9)]);
var inst_16863 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16860) : cljs.core.deref.call(null,inst_16860));
var state_16873__$1 = state_16873;
var statearr_16888_16905 = state_16873__$1;
(statearr_16888_16905[(2)] = inst_16863);

(statearr_16888_16905[(1)] = (10));


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
});})(c__16111__auto__))
;
return ((function (switch__15997__auto__,c__16111__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15998__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15998__auto____0 = (function (){
var statearr_16892 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16892[(0)] = cljs$core$async$reduce_$_state_machine__15998__auto__);

(statearr_16892[(1)] = (1));

return statearr_16892;
});
var cljs$core$async$reduce_$_state_machine__15998__auto____1 = (function (state_16873){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_16873);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e16893){if((e16893 instanceof Object)){
var ex__16001__auto__ = e16893;
var statearr_16894_16906 = state_16873;
(statearr_16894_16906[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16873);

return cljs.core.cst$kw$recur;
} else {
throw e16893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__16907 = state_16873;
state_16873 = G__16907;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15998__auto__ = function(state_16873){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15998__auto____1.call(this,state_16873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15998__auto____0;
cljs$core$async$reduce_$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15998__auto____1;
return cljs$core$async$reduce_$_state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto__))
})();
var state__16113__auto__ = (function (){var statearr_16895 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_16895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto__);

return statearr_16895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto__))
);

return c__16111__auto__;
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
var args16908 = [];
var len__7542__auto___16960 = arguments.length;
var i__7543__auto___16961 = (0);
while(true){
if((i__7543__auto___16961 < len__7542__auto___16960)){
args16908.push((arguments[i__7543__auto___16961]));

var G__16962 = (i__7543__auto___16961 + (1));
i__7543__auto___16961 = G__16962;
continue;
} else {
}
break;
}

var G__16910 = args16908.length;
switch (G__16910) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16908.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto__){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto__){
return (function (state_16935){
var state_val_16936 = (state_16935[(1)]);
if((state_val_16936 === (7))){
var inst_16917 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16937_16964 = state_16935__$1;
(statearr_16937_16964[(2)] = inst_16917);

(statearr_16937_16964[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (1))){
var inst_16911 = cljs.core.seq(coll);
var inst_16912 = inst_16911;
var state_16935__$1 = (function (){var statearr_16938 = state_16935;
(statearr_16938[(7)] = inst_16912);

return statearr_16938;
})();
var statearr_16939_16965 = state_16935__$1;
(statearr_16939_16965[(2)] = null);

(statearr_16939_16965[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (4))){
var inst_16912 = (state_16935[(7)]);
var inst_16915 = cljs.core.first(inst_16912);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16935__$1,(7),ch,inst_16915);
} else {
if((state_val_16936 === (13))){
var inst_16929 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16940_16966 = state_16935__$1;
(statearr_16940_16966[(2)] = inst_16929);

(statearr_16940_16966[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (6))){
var inst_16920 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
if(cljs.core.truth_(inst_16920)){
var statearr_16941_16967 = state_16935__$1;
(statearr_16941_16967[(1)] = (8));

} else {
var statearr_16942_16968 = state_16935__$1;
(statearr_16942_16968[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (3))){
var inst_16933 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16935__$1,inst_16933);
} else {
if((state_val_16936 === (12))){
var state_16935__$1 = state_16935;
var statearr_16943_16969 = state_16935__$1;
(statearr_16943_16969[(2)] = null);

(statearr_16943_16969[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (2))){
var inst_16912 = (state_16935[(7)]);
var state_16935__$1 = state_16935;
if(cljs.core.truth_(inst_16912)){
var statearr_16944_16970 = state_16935__$1;
(statearr_16944_16970[(1)] = (4));

} else {
var statearr_16945_16971 = state_16935__$1;
(statearr_16945_16971[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (11))){
var inst_16926 = cljs.core.async.close_BANG_(ch);
var state_16935__$1 = state_16935;
var statearr_16946_16972 = state_16935__$1;
(statearr_16946_16972[(2)] = inst_16926);

(statearr_16946_16972[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (9))){
var state_16935__$1 = state_16935;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16947_16973 = state_16935__$1;
(statearr_16947_16973[(1)] = (11));

} else {
var statearr_16948_16974 = state_16935__$1;
(statearr_16948_16974[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (5))){
var inst_16912 = (state_16935[(7)]);
var state_16935__$1 = state_16935;
var statearr_16949_16975 = state_16935__$1;
(statearr_16949_16975[(2)] = inst_16912);

(statearr_16949_16975[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (10))){
var inst_16931 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16950_16976 = state_16935__$1;
(statearr_16950_16976[(2)] = inst_16931);

(statearr_16950_16976[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16936 === (8))){
var inst_16912 = (state_16935[(7)]);
var inst_16922 = cljs.core.next(inst_16912);
var inst_16912__$1 = inst_16922;
var state_16935__$1 = (function (){var statearr_16951 = state_16935;
(statearr_16951[(7)] = inst_16912__$1);

return statearr_16951;
})();
var statearr_16952_16977 = state_16935__$1;
(statearr_16952_16977[(2)] = null);

(statearr_16952_16977[(1)] = (2));


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
});})(c__16111__auto__))
;
return ((function (switch__15997__auto__,c__16111__auto__){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_16956 = [null,null,null,null,null,null,null,null];
(statearr_16956[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_16956[(1)] = (1));

return statearr_16956;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_16935){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_16935);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e16957){if((e16957 instanceof Object)){
var ex__16001__auto__ = e16957;
var statearr_16958_16978 = state_16935;
(statearr_16958_16978[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16935);

return cljs.core.cst$kw$recur;
} else {
throw e16957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__16979 = state_16935;
state_16935 = G__16979;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto__))
})();
var state__16113__auto__ = (function (){var statearr_16959 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_16959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto__);

return statearr_16959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto__))
);

return c__16111__auto__;
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
var cs = (function (){var G__17204 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17204) : cljs.core.atom.call(null,G__17204));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17205 = (function (mult,ch,cs,meta17206){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17206 = meta17206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17207,meta17206__$1){
var self__ = this;
var _17207__$1 = this;
return (new cljs.core.async.t_cljs$core$async17205(self__.mult,self__.ch,self__.cs,meta17206__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17207){
var self__ = this;
var _17207__$1 = this;
return self__.meta17206;
});})(cs))
;

cljs.core.async.t_cljs$core$async17205.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17205.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17205.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async17205.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17205.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17205.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17208_17428 = self__.cs;
var G__17209_17429 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17208_17428,G__17209_17429) : cljs.core.reset_BANG_.call(null,G__17208_17428,G__17209_17429));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17205.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17206], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17205";

cljs.core.async.t_cljs$core$async17205.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17205");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17205 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17205(mult__$1,ch__$1,cs__$1,meta17206){
return (new cljs.core.async.t_cljs$core$async17205(mult__$1,ch__$1,cs__$1,meta17206));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17205(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16111__auto___17430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___17430,cs,m,dchan,dctr,done){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___17430,cs,m,dchan,dctr,done){
return (function (state_17340){
var state_val_17341 = (state_17340[(1)]);
if((state_val_17341 === (7))){
var inst_17336 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17342_17431 = state_17340__$1;
(statearr_17342_17431[(2)] = inst_17336);

(statearr_17342_17431[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (20))){
var inst_17241 = (state_17340[(7)]);
var inst_17251 = cljs.core.first(inst_17241);
var inst_17252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17251,(0),null);
var inst_17253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17251,(1),null);
var state_17340__$1 = (function (){var statearr_17343 = state_17340;
(statearr_17343[(8)] = inst_17252);

return statearr_17343;
})();
if(cljs.core.truth_(inst_17253)){
var statearr_17344_17432 = state_17340__$1;
(statearr_17344_17432[(1)] = (22));

} else {
var statearr_17345_17433 = state_17340__$1;
(statearr_17345_17433[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (27))){
var inst_17288 = (state_17340[(9)]);
var inst_17281 = (state_17340[(10)]);
var inst_17283 = (state_17340[(11)]);
var inst_17212 = (state_17340[(12)]);
var inst_17288__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17281,inst_17283);
var inst_17289 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17288__$1,inst_17212,done);
var state_17340__$1 = (function (){var statearr_17346 = state_17340;
(statearr_17346[(9)] = inst_17288__$1);

return statearr_17346;
})();
if(cljs.core.truth_(inst_17289)){
var statearr_17347_17434 = state_17340__$1;
(statearr_17347_17434[(1)] = (30));

} else {
var statearr_17348_17435 = state_17340__$1;
(statearr_17348_17435[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (1))){
var state_17340__$1 = state_17340;
var statearr_17349_17436 = state_17340__$1;
(statearr_17349_17436[(2)] = null);

(statearr_17349_17436[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (24))){
var inst_17241 = (state_17340[(7)]);
var inst_17258 = (state_17340[(2)]);
var inst_17259 = cljs.core.next(inst_17241);
var inst_17221 = inst_17259;
var inst_17222 = null;
var inst_17223 = (0);
var inst_17224 = (0);
var state_17340__$1 = (function (){var statearr_17350 = state_17340;
(statearr_17350[(13)] = inst_17224);

(statearr_17350[(14)] = inst_17223);

(statearr_17350[(15)] = inst_17222);

(statearr_17350[(16)] = inst_17258);

(statearr_17350[(17)] = inst_17221);

return statearr_17350;
})();
var statearr_17351_17437 = state_17340__$1;
(statearr_17351_17437[(2)] = null);

(statearr_17351_17437[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (39))){
var state_17340__$1 = state_17340;
var statearr_17355_17438 = state_17340__$1;
(statearr_17355_17438[(2)] = null);

(statearr_17355_17438[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (4))){
var inst_17212 = (state_17340[(12)]);
var inst_17212__$1 = (state_17340[(2)]);
var inst_17213 = (inst_17212__$1 == null);
var state_17340__$1 = (function (){var statearr_17356 = state_17340;
(statearr_17356[(12)] = inst_17212__$1);

return statearr_17356;
})();
if(cljs.core.truth_(inst_17213)){
var statearr_17357_17439 = state_17340__$1;
(statearr_17357_17439[(1)] = (5));

} else {
var statearr_17358_17440 = state_17340__$1;
(statearr_17358_17440[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (15))){
var inst_17224 = (state_17340[(13)]);
var inst_17223 = (state_17340[(14)]);
var inst_17222 = (state_17340[(15)]);
var inst_17221 = (state_17340[(17)]);
var inst_17237 = (state_17340[(2)]);
var inst_17238 = (inst_17224 + (1));
var tmp17352 = inst_17223;
var tmp17353 = inst_17222;
var tmp17354 = inst_17221;
var inst_17221__$1 = tmp17354;
var inst_17222__$1 = tmp17353;
var inst_17223__$1 = tmp17352;
var inst_17224__$1 = inst_17238;
var state_17340__$1 = (function (){var statearr_17359 = state_17340;
(statearr_17359[(13)] = inst_17224__$1);

(statearr_17359[(14)] = inst_17223__$1);

(statearr_17359[(15)] = inst_17222__$1);

(statearr_17359[(17)] = inst_17221__$1);

(statearr_17359[(18)] = inst_17237);

return statearr_17359;
})();
var statearr_17360_17441 = state_17340__$1;
(statearr_17360_17441[(2)] = null);

(statearr_17360_17441[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (21))){
var inst_17262 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17364_17442 = state_17340__$1;
(statearr_17364_17442[(2)] = inst_17262);

(statearr_17364_17442[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (31))){
var inst_17288 = (state_17340[(9)]);
var inst_17292 = done(null);
var inst_17293 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17288);
var state_17340__$1 = (function (){var statearr_17365 = state_17340;
(statearr_17365[(19)] = inst_17292);

return statearr_17365;
})();
var statearr_17366_17443 = state_17340__$1;
(statearr_17366_17443[(2)] = inst_17293);

(statearr_17366_17443[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (32))){
var inst_17282 = (state_17340[(20)]);
var inst_17280 = (state_17340[(21)]);
var inst_17281 = (state_17340[(10)]);
var inst_17283 = (state_17340[(11)]);
var inst_17295 = (state_17340[(2)]);
var inst_17296 = (inst_17283 + (1));
var tmp17361 = inst_17282;
var tmp17362 = inst_17280;
var tmp17363 = inst_17281;
var inst_17280__$1 = tmp17362;
var inst_17281__$1 = tmp17363;
var inst_17282__$1 = tmp17361;
var inst_17283__$1 = inst_17296;
var state_17340__$1 = (function (){var statearr_17367 = state_17340;
(statearr_17367[(22)] = inst_17295);

(statearr_17367[(20)] = inst_17282__$1);

(statearr_17367[(21)] = inst_17280__$1);

(statearr_17367[(10)] = inst_17281__$1);

(statearr_17367[(11)] = inst_17283__$1);

return statearr_17367;
})();
var statearr_17368_17444 = state_17340__$1;
(statearr_17368_17444[(2)] = null);

(statearr_17368_17444[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (40))){
var inst_17308 = (state_17340[(23)]);
var inst_17312 = done(null);
var inst_17313 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17308);
var state_17340__$1 = (function (){var statearr_17369 = state_17340;
(statearr_17369[(24)] = inst_17312);

return statearr_17369;
})();
var statearr_17370_17445 = state_17340__$1;
(statearr_17370_17445[(2)] = inst_17313);

(statearr_17370_17445[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (33))){
var inst_17299 = (state_17340[(25)]);
var inst_17301 = cljs.core.chunked_seq_QMARK_(inst_17299);
var state_17340__$1 = state_17340;
if(inst_17301){
var statearr_17371_17446 = state_17340__$1;
(statearr_17371_17446[(1)] = (36));

} else {
var statearr_17372_17447 = state_17340__$1;
(statearr_17372_17447[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (13))){
var inst_17231 = (state_17340[(26)]);
var inst_17234 = cljs.core.async.close_BANG_(inst_17231);
var state_17340__$1 = state_17340;
var statearr_17373_17448 = state_17340__$1;
(statearr_17373_17448[(2)] = inst_17234);

(statearr_17373_17448[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (22))){
var inst_17252 = (state_17340[(8)]);
var inst_17255 = cljs.core.async.close_BANG_(inst_17252);
var state_17340__$1 = state_17340;
var statearr_17374_17449 = state_17340__$1;
(statearr_17374_17449[(2)] = inst_17255);

(statearr_17374_17449[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (36))){
var inst_17299 = (state_17340[(25)]);
var inst_17303 = cljs.core.chunk_first(inst_17299);
var inst_17304 = cljs.core.chunk_rest(inst_17299);
var inst_17305 = cljs.core.count(inst_17303);
var inst_17280 = inst_17304;
var inst_17281 = inst_17303;
var inst_17282 = inst_17305;
var inst_17283 = (0);
var state_17340__$1 = (function (){var statearr_17375 = state_17340;
(statearr_17375[(20)] = inst_17282);

(statearr_17375[(21)] = inst_17280);

(statearr_17375[(10)] = inst_17281);

(statearr_17375[(11)] = inst_17283);

return statearr_17375;
})();
var statearr_17376_17450 = state_17340__$1;
(statearr_17376_17450[(2)] = null);

(statearr_17376_17450[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (41))){
var inst_17299 = (state_17340[(25)]);
var inst_17315 = (state_17340[(2)]);
var inst_17316 = cljs.core.next(inst_17299);
var inst_17280 = inst_17316;
var inst_17281 = null;
var inst_17282 = (0);
var inst_17283 = (0);
var state_17340__$1 = (function (){var statearr_17377 = state_17340;
(statearr_17377[(20)] = inst_17282);

(statearr_17377[(21)] = inst_17280);

(statearr_17377[(27)] = inst_17315);

(statearr_17377[(10)] = inst_17281);

(statearr_17377[(11)] = inst_17283);

return statearr_17377;
})();
var statearr_17378_17451 = state_17340__$1;
(statearr_17378_17451[(2)] = null);

(statearr_17378_17451[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (43))){
var state_17340__$1 = state_17340;
var statearr_17379_17452 = state_17340__$1;
(statearr_17379_17452[(2)] = null);

(statearr_17379_17452[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (29))){
var inst_17324 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17380_17453 = state_17340__$1;
(statearr_17380_17453[(2)] = inst_17324);

(statearr_17380_17453[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (44))){
var inst_17333 = (state_17340[(2)]);
var state_17340__$1 = (function (){var statearr_17381 = state_17340;
(statearr_17381[(28)] = inst_17333);

return statearr_17381;
})();
var statearr_17382_17454 = state_17340__$1;
(statearr_17382_17454[(2)] = null);

(statearr_17382_17454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (6))){
var inst_17272 = (state_17340[(29)]);
var inst_17271 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17272__$1 = cljs.core.keys(inst_17271);
var inst_17273 = cljs.core.count(inst_17272__$1);
var inst_17274 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17273) : cljs.core.reset_BANG_.call(null,dctr,inst_17273));
var inst_17279 = cljs.core.seq(inst_17272__$1);
var inst_17280 = inst_17279;
var inst_17281 = null;
var inst_17282 = (0);
var inst_17283 = (0);
var state_17340__$1 = (function (){var statearr_17383 = state_17340;
(statearr_17383[(30)] = inst_17274);

(statearr_17383[(20)] = inst_17282);

(statearr_17383[(21)] = inst_17280);

(statearr_17383[(29)] = inst_17272__$1);

(statearr_17383[(10)] = inst_17281);

(statearr_17383[(11)] = inst_17283);

return statearr_17383;
})();
var statearr_17384_17455 = state_17340__$1;
(statearr_17384_17455[(2)] = null);

(statearr_17384_17455[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (28))){
var inst_17280 = (state_17340[(21)]);
var inst_17299 = (state_17340[(25)]);
var inst_17299__$1 = cljs.core.seq(inst_17280);
var state_17340__$1 = (function (){var statearr_17385 = state_17340;
(statearr_17385[(25)] = inst_17299__$1);

return statearr_17385;
})();
if(inst_17299__$1){
var statearr_17386_17456 = state_17340__$1;
(statearr_17386_17456[(1)] = (33));

} else {
var statearr_17387_17457 = state_17340__$1;
(statearr_17387_17457[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (25))){
var inst_17282 = (state_17340[(20)]);
var inst_17283 = (state_17340[(11)]);
var inst_17285 = (inst_17283 < inst_17282);
var inst_17286 = inst_17285;
var state_17340__$1 = state_17340;
if(cljs.core.truth_(inst_17286)){
var statearr_17388_17458 = state_17340__$1;
(statearr_17388_17458[(1)] = (27));

} else {
var statearr_17389_17459 = state_17340__$1;
(statearr_17389_17459[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (34))){
var state_17340__$1 = state_17340;
var statearr_17390_17460 = state_17340__$1;
(statearr_17390_17460[(2)] = null);

(statearr_17390_17460[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (17))){
var state_17340__$1 = state_17340;
var statearr_17391_17461 = state_17340__$1;
(statearr_17391_17461[(2)] = null);

(statearr_17391_17461[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (3))){
var inst_17338 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17340__$1,inst_17338);
} else {
if((state_val_17341 === (12))){
var inst_17267 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17392_17462 = state_17340__$1;
(statearr_17392_17462[(2)] = inst_17267);

(statearr_17392_17462[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (2))){
var state_17340__$1 = state_17340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17340__$1,(4),ch);
} else {
if((state_val_17341 === (23))){
var state_17340__$1 = state_17340;
var statearr_17393_17463 = state_17340__$1;
(statearr_17393_17463[(2)] = null);

(statearr_17393_17463[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (35))){
var inst_17322 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17394_17464 = state_17340__$1;
(statearr_17394_17464[(2)] = inst_17322);

(statearr_17394_17464[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (19))){
var inst_17241 = (state_17340[(7)]);
var inst_17245 = cljs.core.chunk_first(inst_17241);
var inst_17246 = cljs.core.chunk_rest(inst_17241);
var inst_17247 = cljs.core.count(inst_17245);
var inst_17221 = inst_17246;
var inst_17222 = inst_17245;
var inst_17223 = inst_17247;
var inst_17224 = (0);
var state_17340__$1 = (function (){var statearr_17395 = state_17340;
(statearr_17395[(13)] = inst_17224);

(statearr_17395[(14)] = inst_17223);

(statearr_17395[(15)] = inst_17222);

(statearr_17395[(17)] = inst_17221);

return statearr_17395;
})();
var statearr_17396_17465 = state_17340__$1;
(statearr_17396_17465[(2)] = null);

(statearr_17396_17465[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (11))){
var inst_17221 = (state_17340[(17)]);
var inst_17241 = (state_17340[(7)]);
var inst_17241__$1 = cljs.core.seq(inst_17221);
var state_17340__$1 = (function (){var statearr_17397 = state_17340;
(statearr_17397[(7)] = inst_17241__$1);

return statearr_17397;
})();
if(inst_17241__$1){
var statearr_17398_17466 = state_17340__$1;
(statearr_17398_17466[(1)] = (16));

} else {
var statearr_17399_17467 = state_17340__$1;
(statearr_17399_17467[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (9))){
var inst_17269 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17400_17468 = state_17340__$1;
(statearr_17400_17468[(2)] = inst_17269);

(statearr_17400_17468[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (5))){
var inst_17219 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17220 = cljs.core.seq(inst_17219);
var inst_17221 = inst_17220;
var inst_17222 = null;
var inst_17223 = (0);
var inst_17224 = (0);
var state_17340__$1 = (function (){var statearr_17401 = state_17340;
(statearr_17401[(13)] = inst_17224);

(statearr_17401[(14)] = inst_17223);

(statearr_17401[(15)] = inst_17222);

(statearr_17401[(17)] = inst_17221);

return statearr_17401;
})();
var statearr_17402_17469 = state_17340__$1;
(statearr_17402_17469[(2)] = null);

(statearr_17402_17469[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (14))){
var state_17340__$1 = state_17340;
var statearr_17403_17470 = state_17340__$1;
(statearr_17403_17470[(2)] = null);

(statearr_17403_17470[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (45))){
var inst_17330 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17404_17471 = state_17340__$1;
(statearr_17404_17471[(2)] = inst_17330);

(statearr_17404_17471[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (26))){
var inst_17272 = (state_17340[(29)]);
var inst_17326 = (state_17340[(2)]);
var inst_17327 = cljs.core.seq(inst_17272);
var state_17340__$1 = (function (){var statearr_17405 = state_17340;
(statearr_17405[(31)] = inst_17326);

return statearr_17405;
})();
if(inst_17327){
var statearr_17406_17472 = state_17340__$1;
(statearr_17406_17472[(1)] = (42));

} else {
var statearr_17407_17473 = state_17340__$1;
(statearr_17407_17473[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (16))){
var inst_17241 = (state_17340[(7)]);
var inst_17243 = cljs.core.chunked_seq_QMARK_(inst_17241);
var state_17340__$1 = state_17340;
if(inst_17243){
var statearr_17408_17474 = state_17340__$1;
(statearr_17408_17474[(1)] = (19));

} else {
var statearr_17409_17475 = state_17340__$1;
(statearr_17409_17475[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (38))){
var inst_17319 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17410_17476 = state_17340__$1;
(statearr_17410_17476[(2)] = inst_17319);

(statearr_17410_17476[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (30))){
var state_17340__$1 = state_17340;
var statearr_17411_17477 = state_17340__$1;
(statearr_17411_17477[(2)] = null);

(statearr_17411_17477[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (10))){
var inst_17224 = (state_17340[(13)]);
var inst_17222 = (state_17340[(15)]);
var inst_17230 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17222,inst_17224);
var inst_17231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17230,(0),null);
var inst_17232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17230,(1),null);
var state_17340__$1 = (function (){var statearr_17412 = state_17340;
(statearr_17412[(26)] = inst_17231);

return statearr_17412;
})();
if(cljs.core.truth_(inst_17232)){
var statearr_17413_17478 = state_17340__$1;
(statearr_17413_17478[(1)] = (13));

} else {
var statearr_17414_17479 = state_17340__$1;
(statearr_17414_17479[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (18))){
var inst_17265 = (state_17340[(2)]);
var state_17340__$1 = state_17340;
var statearr_17415_17480 = state_17340__$1;
(statearr_17415_17480[(2)] = inst_17265);

(statearr_17415_17480[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (42))){
var state_17340__$1 = state_17340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17340__$1,(45),dchan);
} else {
if((state_val_17341 === (37))){
var inst_17308 = (state_17340[(23)]);
var inst_17299 = (state_17340[(25)]);
var inst_17212 = (state_17340[(12)]);
var inst_17308__$1 = cljs.core.first(inst_17299);
var inst_17309 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17308__$1,inst_17212,done);
var state_17340__$1 = (function (){var statearr_17416 = state_17340;
(statearr_17416[(23)] = inst_17308__$1);

return statearr_17416;
})();
if(cljs.core.truth_(inst_17309)){
var statearr_17417_17481 = state_17340__$1;
(statearr_17417_17481[(1)] = (39));

} else {
var statearr_17418_17482 = state_17340__$1;
(statearr_17418_17482[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17341 === (8))){
var inst_17224 = (state_17340[(13)]);
var inst_17223 = (state_17340[(14)]);
var inst_17226 = (inst_17224 < inst_17223);
var inst_17227 = inst_17226;
var state_17340__$1 = state_17340;
if(cljs.core.truth_(inst_17227)){
var statearr_17419_17483 = state_17340__$1;
(statearr_17419_17483[(1)] = (10));

} else {
var statearr_17420_17484 = state_17340__$1;
(statearr_17420_17484[(1)] = (11));

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
});})(c__16111__auto___17430,cs,m,dchan,dctr,done))
;
return ((function (switch__15997__auto__,c__16111__auto___17430,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15998__auto__ = null;
var cljs$core$async$mult_$_state_machine__15998__auto____0 = (function (){
var statearr_17424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17424[(0)] = cljs$core$async$mult_$_state_machine__15998__auto__);

(statearr_17424[(1)] = (1));

return statearr_17424;
});
var cljs$core$async$mult_$_state_machine__15998__auto____1 = (function (state_17340){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_17340);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e17425){if((e17425 instanceof Object)){
var ex__16001__auto__ = e17425;
var statearr_17426_17485 = state_17340;
(statearr_17426_17485[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17340);

return cljs.core.cst$kw$recur;
} else {
throw e17425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__17486 = state_17340;
state_17340 = G__17486;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15998__auto__ = function(state_17340){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15998__auto____1.call(this,state_17340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15998__auto____0;
cljs$core$async$mult_$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15998__auto____1;
return cljs$core$async$mult_$_state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___17430,cs,m,dchan,dctr,done))
})();
var state__16113__auto__ = (function (){var statearr_17427 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_17427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___17430);

return statearr_17427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___17430,cs,m,dchan,dctr,done))
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
var args17487 = [];
var len__7542__auto___17490 = arguments.length;
var i__7543__auto___17491 = (0);
while(true){
if((i__7543__auto___17491 < len__7542__auto___17490)){
args17487.push((arguments[i__7543__auto___17491]));

var G__17492 = (i__7543__auto___17491 + (1));
i__7543__auto___17491 = G__17492;
continue;
} else {
}
break;
}

var G__17489 = args17487.length;
switch (G__17489) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17487.length)].join('')));

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
var len__7542__auto___17504 = arguments.length;
var i__7543__auto___17505 = (0);
while(true){
if((i__7543__auto___17505 < len__7542__auto___17504)){
args__7549__auto__.push((arguments[i__7543__auto___17505]));

var G__17506 = (i__7543__auto___17505 + (1));
i__7543__auto___17505 = G__17506;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((3) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7550__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17498){
var map__17499 = p__17498;
var map__17499__$1 = ((((!((map__17499 == null)))?((((map__17499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17499):map__17499);
var opts = map__17499__$1;
var statearr_17501_17507 = state;
(statearr_17501_17507[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17499,map__17499__$1,opts){
return (function (val){
var statearr_17502_17508 = state;
(statearr_17502_17508[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17499,map__17499__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17503_17509 = state;
(statearr_17503_17509[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17494){
var G__17495 = cljs.core.first(seq17494);
var seq17494__$1 = cljs.core.next(seq17494);
var G__17496 = cljs.core.first(seq17494__$1);
var seq17494__$2 = cljs.core.next(seq17494__$1);
var G__17497 = cljs.core.first(seq17494__$2);
var seq17494__$3 = cljs.core.next(seq17494__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17495,G__17496,G__17497,seq17494__$3);
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
var cs = (function (){var G__17676 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17676) : cljs.core.atom.call(null,G__17676));
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
if(typeof cljs.core.async.t_cljs$core$async17677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17677 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17678){
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
this.meta17678 = meta17678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17679,meta17678__$1){
var self__ = this;
var _17679__$1 = this;
return (new cljs.core.async.t_cljs$core$async17677(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17678__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17679){
var self__ = this;
var _17679__$1 = this;
return self__.meta17678;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17680_17842 = self__.cs;
var G__17681_17843 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17680_17842,G__17681_17843) : cljs.core.reset_BANG_.call(null,G__17680_17842,G__17681_17843));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17677.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17677.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17678], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17677";

cljs.core.async.t_cljs$core$async17677.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17677");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17677 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17678){
return (new cljs.core.async.t_cljs$core$async17677(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17678));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17677(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16111__auto___17844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___17844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___17844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17779){
var state_val_17780 = (state_17779[(1)]);
if((state_val_17780 === (7))){
var inst_17697 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17781_17845 = state_17779__$1;
(statearr_17781_17845[(2)] = inst_17697);

(statearr_17781_17845[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (20))){
var inst_17709 = (state_17779[(7)]);
var state_17779__$1 = state_17779;
var statearr_17782_17846 = state_17779__$1;
(statearr_17782_17846[(2)] = inst_17709);

(statearr_17782_17846[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (27))){
var state_17779__$1 = state_17779;
var statearr_17783_17847 = state_17779__$1;
(statearr_17783_17847[(2)] = null);

(statearr_17783_17847[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (1))){
var inst_17685 = (state_17779[(8)]);
var inst_17685__$1 = calc_state();
var inst_17687 = (inst_17685__$1 == null);
var inst_17688 = cljs.core.not(inst_17687);
var state_17779__$1 = (function (){var statearr_17784 = state_17779;
(statearr_17784[(8)] = inst_17685__$1);

return statearr_17784;
})();
if(inst_17688){
var statearr_17785_17848 = state_17779__$1;
(statearr_17785_17848[(1)] = (2));

} else {
var statearr_17786_17849 = state_17779__$1;
(statearr_17786_17849[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (24))){
var inst_17739 = (state_17779[(9)]);
var inst_17732 = (state_17779[(10)]);
var inst_17753 = (state_17779[(11)]);
var inst_17753__$1 = (inst_17732.cljs$core$IFn$_invoke$arity$1 ? inst_17732.cljs$core$IFn$_invoke$arity$1(inst_17739) : inst_17732.call(null,inst_17739));
var state_17779__$1 = (function (){var statearr_17787 = state_17779;
(statearr_17787[(11)] = inst_17753__$1);

return statearr_17787;
})();
if(cljs.core.truth_(inst_17753__$1)){
var statearr_17788_17850 = state_17779__$1;
(statearr_17788_17850[(1)] = (29));

} else {
var statearr_17789_17851 = state_17779__$1;
(statearr_17789_17851[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (4))){
var inst_17700 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17700)){
var statearr_17790_17852 = state_17779__$1;
(statearr_17790_17852[(1)] = (8));

} else {
var statearr_17791_17853 = state_17779__$1;
(statearr_17791_17853[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (15))){
var inst_17726 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17726)){
var statearr_17792_17854 = state_17779__$1;
(statearr_17792_17854[(1)] = (19));

} else {
var statearr_17793_17855 = state_17779__$1;
(statearr_17793_17855[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (21))){
var inst_17731 = (state_17779[(12)]);
var inst_17731__$1 = (state_17779[(2)]);
var inst_17732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17731__$1,cljs.core.cst$kw$solos);
var inst_17733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17731__$1,cljs.core.cst$kw$mutes);
var inst_17734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17731__$1,cljs.core.cst$kw$reads);
var state_17779__$1 = (function (){var statearr_17794 = state_17779;
(statearr_17794[(10)] = inst_17732);

(statearr_17794[(13)] = inst_17733);

(statearr_17794[(12)] = inst_17731__$1);

return statearr_17794;
})();
return cljs.core.async.ioc_alts_BANG_(state_17779__$1,(22),inst_17734);
} else {
if((state_val_17780 === (31))){
var inst_17761 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17761)){
var statearr_17795_17856 = state_17779__$1;
(statearr_17795_17856[(1)] = (32));

} else {
var statearr_17796_17857 = state_17779__$1;
(statearr_17796_17857[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (32))){
var inst_17738 = (state_17779[(14)]);
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17779__$1,(35),out,inst_17738);
} else {
if((state_val_17780 === (33))){
var inst_17731 = (state_17779[(12)]);
var inst_17709 = inst_17731;
var state_17779__$1 = (function (){var statearr_17797 = state_17779;
(statearr_17797[(7)] = inst_17709);

return statearr_17797;
})();
var statearr_17798_17858 = state_17779__$1;
(statearr_17798_17858[(2)] = null);

(statearr_17798_17858[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (13))){
var inst_17709 = (state_17779[(7)]);
var inst_17716 = inst_17709.cljs$lang$protocol_mask$partition0$;
var inst_17717 = (inst_17716 & (64));
var inst_17718 = inst_17709.cljs$core$ISeq$;
var inst_17719 = (inst_17717) || (inst_17718);
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17719)){
var statearr_17799_17859 = state_17779__$1;
(statearr_17799_17859[(1)] = (16));

} else {
var statearr_17800_17860 = state_17779__$1;
(statearr_17800_17860[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (22))){
var inst_17739 = (state_17779[(9)]);
var inst_17738 = (state_17779[(14)]);
var inst_17737 = (state_17779[(2)]);
var inst_17738__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17737,(0),null);
var inst_17739__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17737,(1),null);
var inst_17740 = (inst_17738__$1 == null);
var inst_17741 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17739__$1,change);
var inst_17742 = (inst_17740) || (inst_17741);
var state_17779__$1 = (function (){var statearr_17801 = state_17779;
(statearr_17801[(9)] = inst_17739__$1);

(statearr_17801[(14)] = inst_17738__$1);

return statearr_17801;
})();
if(cljs.core.truth_(inst_17742)){
var statearr_17802_17861 = state_17779__$1;
(statearr_17802_17861[(1)] = (23));

} else {
var statearr_17803_17862 = state_17779__$1;
(statearr_17803_17862[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (36))){
var inst_17731 = (state_17779[(12)]);
var inst_17709 = inst_17731;
var state_17779__$1 = (function (){var statearr_17804 = state_17779;
(statearr_17804[(7)] = inst_17709);

return statearr_17804;
})();
var statearr_17805_17863 = state_17779__$1;
(statearr_17805_17863[(2)] = null);

(statearr_17805_17863[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (29))){
var inst_17753 = (state_17779[(11)]);
var state_17779__$1 = state_17779;
var statearr_17806_17864 = state_17779__$1;
(statearr_17806_17864[(2)] = inst_17753);

(statearr_17806_17864[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (6))){
var state_17779__$1 = state_17779;
var statearr_17807_17865 = state_17779__$1;
(statearr_17807_17865[(2)] = false);

(statearr_17807_17865[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (28))){
var inst_17749 = (state_17779[(2)]);
var inst_17750 = calc_state();
var inst_17709 = inst_17750;
var state_17779__$1 = (function (){var statearr_17808 = state_17779;
(statearr_17808[(7)] = inst_17709);

(statearr_17808[(15)] = inst_17749);

return statearr_17808;
})();
var statearr_17809_17866 = state_17779__$1;
(statearr_17809_17866[(2)] = null);

(statearr_17809_17866[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (25))){
var inst_17775 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17810_17867 = state_17779__$1;
(statearr_17810_17867[(2)] = inst_17775);

(statearr_17810_17867[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (34))){
var inst_17773 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17811_17868 = state_17779__$1;
(statearr_17811_17868[(2)] = inst_17773);

(statearr_17811_17868[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (17))){
var state_17779__$1 = state_17779;
var statearr_17812_17869 = state_17779__$1;
(statearr_17812_17869[(2)] = false);

(statearr_17812_17869[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (3))){
var state_17779__$1 = state_17779;
var statearr_17813_17870 = state_17779__$1;
(statearr_17813_17870[(2)] = false);

(statearr_17813_17870[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (12))){
var inst_17777 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17779__$1,inst_17777);
} else {
if((state_val_17780 === (2))){
var inst_17685 = (state_17779[(8)]);
var inst_17690 = inst_17685.cljs$lang$protocol_mask$partition0$;
var inst_17691 = (inst_17690 & (64));
var inst_17692 = inst_17685.cljs$core$ISeq$;
var inst_17693 = (inst_17691) || (inst_17692);
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17693)){
var statearr_17814_17871 = state_17779__$1;
(statearr_17814_17871[(1)] = (5));

} else {
var statearr_17815_17872 = state_17779__$1;
(statearr_17815_17872[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (23))){
var inst_17738 = (state_17779[(14)]);
var inst_17744 = (inst_17738 == null);
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17744)){
var statearr_17816_17873 = state_17779__$1;
(statearr_17816_17873[(1)] = (26));

} else {
var statearr_17817_17874 = state_17779__$1;
(statearr_17817_17874[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (35))){
var inst_17764 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17764)){
var statearr_17818_17875 = state_17779__$1;
(statearr_17818_17875[(1)] = (36));

} else {
var statearr_17819_17876 = state_17779__$1;
(statearr_17819_17876[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (19))){
var inst_17709 = (state_17779[(7)]);
var inst_17728 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17709);
var state_17779__$1 = state_17779;
var statearr_17820_17877 = state_17779__$1;
(statearr_17820_17877[(2)] = inst_17728);

(statearr_17820_17877[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (11))){
var inst_17709 = (state_17779[(7)]);
var inst_17713 = (inst_17709 == null);
var inst_17714 = cljs.core.not(inst_17713);
var state_17779__$1 = state_17779;
if(inst_17714){
var statearr_17821_17878 = state_17779__$1;
(statearr_17821_17878[(1)] = (13));

} else {
var statearr_17822_17879 = state_17779__$1;
(statearr_17822_17879[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (9))){
var inst_17685 = (state_17779[(8)]);
var state_17779__$1 = state_17779;
var statearr_17823_17880 = state_17779__$1;
(statearr_17823_17880[(2)] = inst_17685);

(statearr_17823_17880[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (5))){
var state_17779__$1 = state_17779;
var statearr_17824_17881 = state_17779__$1;
(statearr_17824_17881[(2)] = true);

(statearr_17824_17881[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (14))){
var state_17779__$1 = state_17779;
var statearr_17825_17882 = state_17779__$1;
(statearr_17825_17882[(2)] = false);

(statearr_17825_17882[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (26))){
var inst_17739 = (state_17779[(9)]);
var inst_17746 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17739);
var state_17779__$1 = state_17779;
var statearr_17826_17883 = state_17779__$1;
(statearr_17826_17883[(2)] = inst_17746);

(statearr_17826_17883[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (16))){
var state_17779__$1 = state_17779;
var statearr_17827_17884 = state_17779__$1;
(statearr_17827_17884[(2)] = true);

(statearr_17827_17884[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (38))){
var inst_17769 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17828_17885 = state_17779__$1;
(statearr_17828_17885[(2)] = inst_17769);

(statearr_17828_17885[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (30))){
var inst_17739 = (state_17779[(9)]);
var inst_17732 = (state_17779[(10)]);
var inst_17733 = (state_17779[(13)]);
var inst_17756 = cljs.core.empty_QMARK_(inst_17732);
var inst_17757 = (inst_17733.cljs$core$IFn$_invoke$arity$1 ? inst_17733.cljs$core$IFn$_invoke$arity$1(inst_17739) : inst_17733.call(null,inst_17739));
var inst_17758 = cljs.core.not(inst_17757);
var inst_17759 = (inst_17756) && (inst_17758);
var state_17779__$1 = state_17779;
var statearr_17829_17886 = state_17779__$1;
(statearr_17829_17886[(2)] = inst_17759);

(statearr_17829_17886[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (10))){
var inst_17685 = (state_17779[(8)]);
var inst_17705 = (state_17779[(2)]);
var inst_17706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17705,cljs.core.cst$kw$solos);
var inst_17707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17705,cljs.core.cst$kw$mutes);
var inst_17708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17705,cljs.core.cst$kw$reads);
var inst_17709 = inst_17685;
var state_17779__$1 = (function (){var statearr_17830 = state_17779;
(statearr_17830[(16)] = inst_17708);

(statearr_17830[(17)] = inst_17706);

(statearr_17830[(18)] = inst_17707);

(statearr_17830[(7)] = inst_17709);

return statearr_17830;
})();
var statearr_17831_17887 = state_17779__$1;
(statearr_17831_17887[(2)] = null);

(statearr_17831_17887[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (18))){
var inst_17723 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17832_17888 = state_17779__$1;
(statearr_17832_17888[(2)] = inst_17723);

(statearr_17832_17888[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (37))){
var state_17779__$1 = state_17779;
var statearr_17833_17889 = state_17779__$1;
(statearr_17833_17889[(2)] = null);

(statearr_17833_17889[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (8))){
var inst_17685 = (state_17779[(8)]);
var inst_17702 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17685);
var state_17779__$1 = state_17779;
var statearr_17834_17890 = state_17779__$1;
(statearr_17834_17890[(2)] = inst_17702);

(statearr_17834_17890[(1)] = (10));


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
});})(c__16111__auto___17844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15997__auto__,c__16111__auto___17844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15998__auto__ = null;
var cljs$core$async$mix_$_state_machine__15998__auto____0 = (function (){
var statearr_17838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17838[(0)] = cljs$core$async$mix_$_state_machine__15998__auto__);

(statearr_17838[(1)] = (1));

return statearr_17838;
});
var cljs$core$async$mix_$_state_machine__15998__auto____1 = (function (state_17779){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_17779);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e17839){if((e17839 instanceof Object)){
var ex__16001__auto__ = e17839;
var statearr_17840_17891 = state_17779;
(statearr_17840_17891[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17779);

return cljs.core.cst$kw$recur;
} else {
throw e17839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__17892 = state_17779;
state_17779 = G__17892;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15998__auto__ = function(state_17779){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15998__auto____1.call(this,state_17779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15998__auto____0;
cljs$core$async$mix_$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15998__auto____1;
return cljs$core$async$mix_$_state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___17844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16113__auto__ = (function (){var statearr_17841 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_17841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___17844);

return statearr_17841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___17844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args17893 = [];
var len__7542__auto___17896 = arguments.length;
var i__7543__auto___17897 = (0);
while(true){
if((i__7543__auto___17897 < len__7542__auto___17896)){
args17893.push((arguments[i__7543__auto___17897]));

var G__17898 = (i__7543__auto___17897 + (1));
i__7543__auto___17897 = G__17898;
continue;
} else {
}
break;
}

var G__17895 = args17893.length;
switch (G__17895) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17893.length)].join('')));

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
var args17901 = [];
var len__7542__auto___18029 = arguments.length;
var i__7543__auto___18030 = (0);
while(true){
if((i__7543__auto___18030 < len__7542__auto___18029)){
args17901.push((arguments[i__7543__auto___18030]));

var G__18031 = (i__7543__auto___18030 + (1));
i__7543__auto___18030 = G__18031;
continue;
} else {
}
break;
}

var G__17903 = args17901.length;
switch (G__17903) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17901.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17904 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17904) : cljs.core.atom.call(null,G__17904));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6484__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6484__auto__,mults){
return (function (p1__17900_SHARP_){
if(cljs.core.truth_((p1__17900_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17900_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17900_SHARP_.call(null,topic)))){
return p1__17900_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17900_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6484__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17905 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17906){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17906 = meta17906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17907,meta17906__$1){
var self__ = this;
var _17907__$1 = this;
return (new cljs.core.async.t_cljs$core$async17905(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17906__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17907){
var self__ = this;
var _17907__$1 = this;
return self__.meta17906;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17908 = self__.mults;
var G__17909 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17908,G__17909) : cljs.core.reset_BANG_.call(null,G__17908,G__17909));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17905.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17905.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17906], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17905";

cljs.core.async.t_cljs$core$async17905.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17905");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17905 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17905(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17906){
return (new cljs.core.async.t_cljs$core$async17905(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17906));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17905(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16111__auto___18033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___18033,mults,ensure_mult,p){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___18033,mults,ensure_mult,p){
return (function (state_17981){
var state_val_17982 = (state_17981[(1)]);
if((state_val_17982 === (7))){
var inst_17977 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_17983_18034 = state_17981__$1;
(statearr_17983_18034[(2)] = inst_17977);

(statearr_17983_18034[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (20))){
var state_17981__$1 = state_17981;
var statearr_17984_18035 = state_17981__$1;
(statearr_17984_18035[(2)] = null);

(statearr_17984_18035[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (1))){
var state_17981__$1 = state_17981;
var statearr_17985_18036 = state_17981__$1;
(statearr_17985_18036[(2)] = null);

(statearr_17985_18036[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (24))){
var inst_17960 = (state_17981[(7)]);
var inst_17969 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17960);
var state_17981__$1 = state_17981;
var statearr_17986_18037 = state_17981__$1;
(statearr_17986_18037[(2)] = inst_17969);

(statearr_17986_18037[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (4))){
var inst_17912 = (state_17981[(8)]);
var inst_17912__$1 = (state_17981[(2)]);
var inst_17913 = (inst_17912__$1 == null);
var state_17981__$1 = (function (){var statearr_17987 = state_17981;
(statearr_17987[(8)] = inst_17912__$1);

return statearr_17987;
})();
if(cljs.core.truth_(inst_17913)){
var statearr_17988_18038 = state_17981__$1;
(statearr_17988_18038[(1)] = (5));

} else {
var statearr_17989_18039 = state_17981__$1;
(statearr_17989_18039[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (15))){
var inst_17954 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_17990_18040 = state_17981__$1;
(statearr_17990_18040[(2)] = inst_17954);

(statearr_17990_18040[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (21))){
var inst_17974 = (state_17981[(2)]);
var state_17981__$1 = (function (){var statearr_17991 = state_17981;
(statearr_17991[(9)] = inst_17974);

return statearr_17991;
})();
var statearr_17992_18041 = state_17981__$1;
(statearr_17992_18041[(2)] = null);

(statearr_17992_18041[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (13))){
var inst_17936 = (state_17981[(10)]);
var inst_17938 = cljs.core.chunked_seq_QMARK_(inst_17936);
var state_17981__$1 = state_17981;
if(inst_17938){
var statearr_17993_18042 = state_17981__$1;
(statearr_17993_18042[(1)] = (16));

} else {
var statearr_17994_18043 = state_17981__$1;
(statearr_17994_18043[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (22))){
var inst_17966 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
if(cljs.core.truth_(inst_17966)){
var statearr_17995_18044 = state_17981__$1;
(statearr_17995_18044[(1)] = (23));

} else {
var statearr_17996_18045 = state_17981__$1;
(statearr_17996_18045[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (6))){
var inst_17912 = (state_17981[(8)]);
var inst_17962 = (state_17981[(11)]);
var inst_17960 = (state_17981[(7)]);
var inst_17960__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17912) : topic_fn.call(null,inst_17912));
var inst_17961 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17961,inst_17960__$1);
var state_17981__$1 = (function (){var statearr_17997 = state_17981;
(statearr_17997[(11)] = inst_17962__$1);

(statearr_17997[(7)] = inst_17960__$1);

return statearr_17997;
})();
if(cljs.core.truth_(inst_17962__$1)){
var statearr_17998_18046 = state_17981__$1;
(statearr_17998_18046[(1)] = (19));

} else {
var statearr_17999_18047 = state_17981__$1;
(statearr_17999_18047[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (25))){
var inst_17971 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18000_18048 = state_17981__$1;
(statearr_18000_18048[(2)] = inst_17971);

(statearr_18000_18048[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (17))){
var inst_17936 = (state_17981[(10)]);
var inst_17945 = cljs.core.first(inst_17936);
var inst_17946 = cljs.core.async.muxch_STAR_(inst_17945);
var inst_17947 = cljs.core.async.close_BANG_(inst_17946);
var inst_17948 = cljs.core.next(inst_17936);
var inst_17922 = inst_17948;
var inst_17923 = null;
var inst_17924 = (0);
var inst_17925 = (0);
var state_17981__$1 = (function (){var statearr_18001 = state_17981;
(statearr_18001[(12)] = inst_17923);

(statearr_18001[(13)] = inst_17925);

(statearr_18001[(14)] = inst_17924);

(statearr_18001[(15)] = inst_17947);

(statearr_18001[(16)] = inst_17922);

return statearr_18001;
})();
var statearr_18002_18049 = state_17981__$1;
(statearr_18002_18049[(2)] = null);

(statearr_18002_18049[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (3))){
var inst_17979 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17981__$1,inst_17979);
} else {
if((state_val_17982 === (12))){
var inst_17956 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18003_18050 = state_17981__$1;
(statearr_18003_18050[(2)] = inst_17956);

(statearr_18003_18050[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (2))){
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17981__$1,(4),ch);
} else {
if((state_val_17982 === (23))){
var state_17981__$1 = state_17981;
var statearr_18004_18051 = state_17981__$1;
(statearr_18004_18051[(2)] = null);

(statearr_18004_18051[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (19))){
var inst_17912 = (state_17981[(8)]);
var inst_17962 = (state_17981[(11)]);
var inst_17964 = cljs.core.async.muxch_STAR_(inst_17962);
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17981__$1,(22),inst_17964,inst_17912);
} else {
if((state_val_17982 === (11))){
var inst_17936 = (state_17981[(10)]);
var inst_17922 = (state_17981[(16)]);
var inst_17936__$1 = cljs.core.seq(inst_17922);
var state_17981__$1 = (function (){var statearr_18005 = state_17981;
(statearr_18005[(10)] = inst_17936__$1);

return statearr_18005;
})();
if(inst_17936__$1){
var statearr_18006_18052 = state_17981__$1;
(statearr_18006_18052[(1)] = (13));

} else {
var statearr_18007_18053 = state_17981__$1;
(statearr_18007_18053[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (9))){
var inst_17958 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18008_18054 = state_17981__$1;
(statearr_18008_18054[(2)] = inst_17958);

(statearr_18008_18054[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (5))){
var inst_17919 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17920 = cljs.core.vals(inst_17919);
var inst_17921 = cljs.core.seq(inst_17920);
var inst_17922 = inst_17921;
var inst_17923 = null;
var inst_17924 = (0);
var inst_17925 = (0);
var state_17981__$1 = (function (){var statearr_18009 = state_17981;
(statearr_18009[(12)] = inst_17923);

(statearr_18009[(13)] = inst_17925);

(statearr_18009[(14)] = inst_17924);

(statearr_18009[(16)] = inst_17922);

return statearr_18009;
})();
var statearr_18010_18055 = state_17981__$1;
(statearr_18010_18055[(2)] = null);

(statearr_18010_18055[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (14))){
var state_17981__$1 = state_17981;
var statearr_18014_18056 = state_17981__$1;
(statearr_18014_18056[(2)] = null);

(statearr_18014_18056[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (16))){
var inst_17936 = (state_17981[(10)]);
var inst_17940 = cljs.core.chunk_first(inst_17936);
var inst_17941 = cljs.core.chunk_rest(inst_17936);
var inst_17942 = cljs.core.count(inst_17940);
var inst_17922 = inst_17941;
var inst_17923 = inst_17940;
var inst_17924 = inst_17942;
var inst_17925 = (0);
var state_17981__$1 = (function (){var statearr_18015 = state_17981;
(statearr_18015[(12)] = inst_17923);

(statearr_18015[(13)] = inst_17925);

(statearr_18015[(14)] = inst_17924);

(statearr_18015[(16)] = inst_17922);

return statearr_18015;
})();
var statearr_18016_18057 = state_17981__$1;
(statearr_18016_18057[(2)] = null);

(statearr_18016_18057[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (10))){
var inst_17923 = (state_17981[(12)]);
var inst_17925 = (state_17981[(13)]);
var inst_17924 = (state_17981[(14)]);
var inst_17922 = (state_17981[(16)]);
var inst_17930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17923,inst_17925);
var inst_17931 = cljs.core.async.muxch_STAR_(inst_17930);
var inst_17932 = cljs.core.async.close_BANG_(inst_17931);
var inst_17933 = (inst_17925 + (1));
var tmp18011 = inst_17923;
var tmp18012 = inst_17924;
var tmp18013 = inst_17922;
var inst_17922__$1 = tmp18013;
var inst_17923__$1 = tmp18011;
var inst_17924__$1 = tmp18012;
var inst_17925__$1 = inst_17933;
var state_17981__$1 = (function (){var statearr_18017 = state_17981;
(statearr_18017[(12)] = inst_17923__$1);

(statearr_18017[(17)] = inst_17932);

(statearr_18017[(13)] = inst_17925__$1);

(statearr_18017[(14)] = inst_17924__$1);

(statearr_18017[(16)] = inst_17922__$1);

return statearr_18017;
})();
var statearr_18018_18058 = state_17981__$1;
(statearr_18018_18058[(2)] = null);

(statearr_18018_18058[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (18))){
var inst_17951 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18019_18059 = state_17981__$1;
(statearr_18019_18059[(2)] = inst_17951);

(statearr_18019_18059[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17982 === (8))){
var inst_17925 = (state_17981[(13)]);
var inst_17924 = (state_17981[(14)]);
var inst_17927 = (inst_17925 < inst_17924);
var inst_17928 = inst_17927;
var state_17981__$1 = state_17981;
if(cljs.core.truth_(inst_17928)){
var statearr_18020_18060 = state_17981__$1;
(statearr_18020_18060[(1)] = (10));

} else {
var statearr_18021_18061 = state_17981__$1;
(statearr_18021_18061[(1)] = (11));

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
});})(c__16111__auto___18033,mults,ensure_mult,p))
;
return ((function (switch__15997__auto__,c__16111__auto___18033,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_18025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18025[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_18025[(1)] = (1));

return statearr_18025;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_17981){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_17981);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e18026){if((e18026 instanceof Object)){
var ex__16001__auto__ = e18026;
var statearr_18027_18062 = state_17981;
(statearr_18027_18062[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17981);

return cljs.core.cst$kw$recur;
} else {
throw e18026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__18063 = state_17981;
state_17981 = G__18063;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_17981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_17981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___18033,mults,ensure_mult,p))
})();
var state__16113__auto__ = (function (){var statearr_18028 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_18028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___18033);

return statearr_18028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___18033,mults,ensure_mult,p))
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
var args18064 = [];
var len__7542__auto___18067 = arguments.length;
var i__7543__auto___18068 = (0);
while(true){
if((i__7543__auto___18068 < len__7542__auto___18067)){
args18064.push((arguments[i__7543__auto___18068]));

var G__18069 = (i__7543__auto___18068 + (1));
i__7543__auto___18068 = G__18069;
continue;
} else {
}
break;
}

var G__18066 = args18064.length;
switch (G__18066) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18064.length)].join('')));

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
var args18071 = [];
var len__7542__auto___18074 = arguments.length;
var i__7543__auto___18075 = (0);
while(true){
if((i__7543__auto___18075 < len__7542__auto___18074)){
args18071.push((arguments[i__7543__auto___18075]));

var G__18076 = (i__7543__auto___18075 + (1));
i__7543__auto___18075 = G__18076;
continue;
} else {
}
break;
}

var G__18073 = args18071.length;
switch (G__18073) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18071.length)].join('')));

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
var args18078 = [];
var len__7542__auto___18149 = arguments.length;
var i__7543__auto___18150 = (0);
while(true){
if((i__7543__auto___18150 < len__7542__auto___18149)){
args18078.push((arguments[i__7543__auto___18150]));

var G__18151 = (i__7543__auto___18150 + (1));
i__7543__auto___18150 = G__18151;
continue;
} else {
}
break;
}

var G__18080 = args18078.length;
switch (G__18080) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18078.length)].join('')));

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
var c__16111__auto___18153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___18153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___18153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18119){
var state_val_18120 = (state_18119[(1)]);
if((state_val_18120 === (7))){
var state_18119__$1 = state_18119;
var statearr_18121_18154 = state_18119__$1;
(statearr_18121_18154[(2)] = null);

(statearr_18121_18154[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (1))){
var state_18119__$1 = state_18119;
var statearr_18122_18155 = state_18119__$1;
(statearr_18122_18155[(2)] = null);

(statearr_18122_18155[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (4))){
var inst_18083 = (state_18119[(7)]);
var inst_18085 = (inst_18083 < cnt);
var state_18119__$1 = state_18119;
if(cljs.core.truth_(inst_18085)){
var statearr_18123_18156 = state_18119__$1;
(statearr_18123_18156[(1)] = (6));

} else {
var statearr_18124_18157 = state_18119__$1;
(statearr_18124_18157[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (15))){
var inst_18115 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18125_18158 = state_18119__$1;
(statearr_18125_18158[(2)] = inst_18115);

(statearr_18125_18158[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (13))){
var inst_18108 = cljs.core.async.close_BANG_(out);
var state_18119__$1 = state_18119;
var statearr_18126_18159 = state_18119__$1;
(statearr_18126_18159[(2)] = inst_18108);

(statearr_18126_18159[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (6))){
var state_18119__$1 = state_18119;
var statearr_18127_18160 = state_18119__$1;
(statearr_18127_18160[(2)] = null);

(statearr_18127_18160[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (3))){
var inst_18117 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18119__$1,inst_18117);
} else {
if((state_val_18120 === (12))){
var inst_18105 = (state_18119[(8)]);
var inst_18105__$1 = (state_18119[(2)]);
var inst_18106 = cljs.core.some(cljs.core.nil_QMARK_,inst_18105__$1);
var state_18119__$1 = (function (){var statearr_18128 = state_18119;
(statearr_18128[(8)] = inst_18105__$1);

return statearr_18128;
})();
if(cljs.core.truth_(inst_18106)){
var statearr_18129_18161 = state_18119__$1;
(statearr_18129_18161[(1)] = (13));

} else {
var statearr_18130_18162 = state_18119__$1;
(statearr_18130_18162[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (2))){
var inst_18082 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_18083 = (0);
var state_18119__$1 = (function (){var statearr_18131 = state_18119;
(statearr_18131[(7)] = inst_18083);

(statearr_18131[(9)] = inst_18082);

return statearr_18131;
})();
var statearr_18132_18163 = state_18119__$1;
(statearr_18132_18163[(2)] = null);

(statearr_18132_18163[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (11))){
var inst_18083 = (state_18119[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18119,(10),Object,null,(9));
var inst_18092 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18083) : chs__$1.call(null,inst_18083));
var inst_18093 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18083) : done.call(null,inst_18083));
var inst_18094 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18092,inst_18093);
var state_18119__$1 = state_18119;
var statearr_18133_18164 = state_18119__$1;
(statearr_18133_18164[(2)] = inst_18094);


cljs.core.async.impl.ioc_helpers.process_exception(state_18119__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (9))){
var inst_18083 = (state_18119[(7)]);
var inst_18096 = (state_18119[(2)]);
var inst_18097 = (inst_18083 + (1));
var inst_18083__$1 = inst_18097;
var state_18119__$1 = (function (){var statearr_18134 = state_18119;
(statearr_18134[(7)] = inst_18083__$1);

(statearr_18134[(10)] = inst_18096);

return statearr_18134;
})();
var statearr_18135_18165 = state_18119__$1;
(statearr_18135_18165[(2)] = null);

(statearr_18135_18165[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (5))){
var inst_18103 = (state_18119[(2)]);
var state_18119__$1 = (function (){var statearr_18136 = state_18119;
(statearr_18136[(11)] = inst_18103);

return statearr_18136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18119__$1,(12),dchan);
} else {
if((state_val_18120 === (14))){
var inst_18105 = (state_18119[(8)]);
var inst_18110 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18105);
var state_18119__$1 = state_18119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18119__$1,(16),out,inst_18110);
} else {
if((state_val_18120 === (16))){
var inst_18112 = (state_18119[(2)]);
var state_18119__$1 = (function (){var statearr_18137 = state_18119;
(statearr_18137[(12)] = inst_18112);

return statearr_18137;
})();
var statearr_18138_18166 = state_18119__$1;
(statearr_18138_18166[(2)] = null);

(statearr_18138_18166[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (10))){
var inst_18087 = (state_18119[(2)]);
var inst_18088 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18119__$1 = (function (){var statearr_18139 = state_18119;
(statearr_18139[(13)] = inst_18087);

return statearr_18139;
})();
var statearr_18140_18167 = state_18119__$1;
(statearr_18140_18167[(2)] = inst_18088);


cljs.core.async.impl.ioc_helpers.process_exception(state_18119__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18120 === (8))){
var inst_18101 = (state_18119[(2)]);
var state_18119__$1 = state_18119;
var statearr_18141_18168 = state_18119__$1;
(statearr_18141_18168[(2)] = inst_18101);

(statearr_18141_18168[(1)] = (5));


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
});})(c__16111__auto___18153,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15997__auto__,c__16111__auto___18153,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_18145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18145[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_18145[(1)] = (1));

return statearr_18145;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_18119){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_18119);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e18146){if((e18146 instanceof Object)){
var ex__16001__auto__ = e18146;
var statearr_18147_18169 = state_18119;
(statearr_18147_18169[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18119);

return cljs.core.cst$kw$recur;
} else {
throw e18146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__18170 = state_18119;
state_18119 = G__18170;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_18119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_18119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___18153,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16113__auto__ = (function (){var statearr_18148 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_18148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___18153);

return statearr_18148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___18153,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18172 = [];
var len__7542__auto___18228 = arguments.length;
var i__7543__auto___18229 = (0);
while(true){
if((i__7543__auto___18229 < len__7542__auto___18228)){
args18172.push((arguments[i__7543__auto___18229]));

var G__18230 = (i__7543__auto___18229 + (1));
i__7543__auto___18229 = G__18230;
continue;
} else {
}
break;
}

var G__18174 = args18172.length;
switch (G__18174) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18172.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16111__auto___18232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___18232,out){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___18232,out){
return (function (state_18204){
var state_val_18205 = (state_18204[(1)]);
if((state_val_18205 === (7))){
var inst_18183 = (state_18204[(7)]);
var inst_18184 = (state_18204[(8)]);
var inst_18183__$1 = (state_18204[(2)]);
var inst_18184__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18183__$1,(0),null);
var inst_18185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18183__$1,(1),null);
var inst_18186 = (inst_18184__$1 == null);
var state_18204__$1 = (function (){var statearr_18206 = state_18204;
(statearr_18206[(7)] = inst_18183__$1);

(statearr_18206[(8)] = inst_18184__$1);

(statearr_18206[(9)] = inst_18185);

return statearr_18206;
})();
if(cljs.core.truth_(inst_18186)){
var statearr_18207_18233 = state_18204__$1;
(statearr_18207_18233[(1)] = (8));

} else {
var statearr_18208_18234 = state_18204__$1;
(statearr_18208_18234[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18205 === (1))){
var inst_18175 = cljs.core.vec(chs);
var inst_18176 = inst_18175;
var state_18204__$1 = (function (){var statearr_18209 = state_18204;
(statearr_18209[(10)] = inst_18176);

return statearr_18209;
})();
var statearr_18210_18235 = state_18204__$1;
(statearr_18210_18235[(2)] = null);

(statearr_18210_18235[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18205 === (4))){
var inst_18176 = (state_18204[(10)]);
var state_18204__$1 = state_18204;
return cljs.core.async.ioc_alts_BANG_(state_18204__$1,(7),inst_18176);
} else {
if((state_val_18205 === (6))){
var inst_18200 = (state_18204[(2)]);
var state_18204__$1 = state_18204;
var statearr_18211_18236 = state_18204__$1;
(statearr_18211_18236[(2)] = inst_18200);

(statearr_18211_18236[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18205 === (3))){
var inst_18202 = (state_18204[(2)]);
var state_18204__$1 = state_18204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18204__$1,inst_18202);
} else {
if((state_val_18205 === (2))){
var inst_18176 = (state_18204[(10)]);
var inst_18178 = cljs.core.count(inst_18176);
var inst_18179 = (inst_18178 > (0));
var state_18204__$1 = state_18204;
if(cljs.core.truth_(inst_18179)){
var statearr_18213_18237 = state_18204__$1;
(statearr_18213_18237[(1)] = (4));

} else {
var statearr_18214_18238 = state_18204__$1;
(statearr_18214_18238[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18205 === (11))){
var inst_18176 = (state_18204[(10)]);
var inst_18193 = (state_18204[(2)]);
var tmp18212 = inst_18176;
var inst_18176__$1 = tmp18212;
var state_18204__$1 = (function (){var statearr_18215 = state_18204;
(statearr_18215[(10)] = inst_18176__$1);

(statearr_18215[(11)] = inst_18193);

return statearr_18215;
})();
var statearr_18216_18239 = state_18204__$1;
(statearr_18216_18239[(2)] = null);

(statearr_18216_18239[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18205 === (9))){
var inst_18184 = (state_18204[(8)]);
var state_18204__$1 = state_18204;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18204__$1,(11),out,inst_18184);
} else {
if((state_val_18205 === (5))){
var inst_18198 = cljs.core.async.close_BANG_(out);
var state_18204__$1 = state_18204;
var statearr_18217_18240 = state_18204__$1;
(statearr_18217_18240[(2)] = inst_18198);

(statearr_18217_18240[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18205 === (10))){
var inst_18196 = (state_18204[(2)]);
var state_18204__$1 = state_18204;
var statearr_18218_18241 = state_18204__$1;
(statearr_18218_18241[(2)] = inst_18196);

(statearr_18218_18241[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18205 === (8))){
var inst_18183 = (state_18204[(7)]);
var inst_18176 = (state_18204[(10)]);
var inst_18184 = (state_18204[(8)]);
var inst_18185 = (state_18204[(9)]);
var inst_18188 = (function (){var cs = inst_18176;
var vec__18181 = inst_18183;
var v = inst_18184;
var c = inst_18185;
return ((function (cs,vec__18181,v,c,inst_18183,inst_18176,inst_18184,inst_18185,state_val_18205,c__16111__auto___18232,out){
return (function (p1__18171_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18171_SHARP_);
});
;})(cs,vec__18181,v,c,inst_18183,inst_18176,inst_18184,inst_18185,state_val_18205,c__16111__auto___18232,out))
})();
var inst_18189 = cljs.core.filterv(inst_18188,inst_18176);
var inst_18176__$1 = inst_18189;
var state_18204__$1 = (function (){var statearr_18219 = state_18204;
(statearr_18219[(10)] = inst_18176__$1);

return statearr_18219;
})();
var statearr_18220_18242 = state_18204__$1;
(statearr_18220_18242[(2)] = null);

(statearr_18220_18242[(1)] = (2));


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
});})(c__16111__auto___18232,out))
;
return ((function (switch__15997__auto__,c__16111__auto___18232,out){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_18224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18224[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_18224[(1)] = (1));

return statearr_18224;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_18204){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_18204);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e18225){if((e18225 instanceof Object)){
var ex__16001__auto__ = e18225;
var statearr_18226_18243 = state_18204;
(statearr_18226_18243[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18204);

return cljs.core.cst$kw$recur;
} else {
throw e18225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__18244 = state_18204;
state_18204 = G__18244;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_18204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_18204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___18232,out))
})();
var state__16113__auto__ = (function (){var statearr_18227 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_18227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___18232);

return statearr_18227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___18232,out))
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
var args18245 = [];
var len__7542__auto___18294 = arguments.length;
var i__7543__auto___18295 = (0);
while(true){
if((i__7543__auto___18295 < len__7542__auto___18294)){
args18245.push((arguments[i__7543__auto___18295]));

var G__18296 = (i__7543__auto___18295 + (1));
i__7543__auto___18295 = G__18296;
continue;
} else {
}
break;
}

var G__18247 = args18245.length;
switch (G__18247) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18245.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16111__auto___18298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___18298,out){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___18298,out){
return (function (state_18271){
var state_val_18272 = (state_18271[(1)]);
if((state_val_18272 === (7))){
var inst_18253 = (state_18271[(7)]);
var inst_18253__$1 = (state_18271[(2)]);
var inst_18254 = (inst_18253__$1 == null);
var inst_18255 = cljs.core.not(inst_18254);
var state_18271__$1 = (function (){var statearr_18273 = state_18271;
(statearr_18273[(7)] = inst_18253__$1);

return statearr_18273;
})();
if(inst_18255){
var statearr_18274_18299 = state_18271__$1;
(statearr_18274_18299[(1)] = (8));

} else {
var statearr_18275_18300 = state_18271__$1;
(statearr_18275_18300[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18272 === (1))){
var inst_18248 = (0);
var state_18271__$1 = (function (){var statearr_18276 = state_18271;
(statearr_18276[(8)] = inst_18248);

return statearr_18276;
})();
var statearr_18277_18301 = state_18271__$1;
(statearr_18277_18301[(2)] = null);

(statearr_18277_18301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18272 === (4))){
var state_18271__$1 = state_18271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18271__$1,(7),ch);
} else {
if((state_val_18272 === (6))){
var inst_18266 = (state_18271[(2)]);
var state_18271__$1 = state_18271;
var statearr_18278_18302 = state_18271__$1;
(statearr_18278_18302[(2)] = inst_18266);

(statearr_18278_18302[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18272 === (3))){
var inst_18268 = (state_18271[(2)]);
var inst_18269 = cljs.core.async.close_BANG_(out);
var state_18271__$1 = (function (){var statearr_18279 = state_18271;
(statearr_18279[(9)] = inst_18268);

return statearr_18279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18271__$1,inst_18269);
} else {
if((state_val_18272 === (2))){
var inst_18248 = (state_18271[(8)]);
var inst_18250 = (inst_18248 < n);
var state_18271__$1 = state_18271;
if(cljs.core.truth_(inst_18250)){
var statearr_18280_18303 = state_18271__$1;
(statearr_18280_18303[(1)] = (4));

} else {
var statearr_18281_18304 = state_18271__$1;
(statearr_18281_18304[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18272 === (11))){
var inst_18248 = (state_18271[(8)]);
var inst_18258 = (state_18271[(2)]);
var inst_18259 = (inst_18248 + (1));
var inst_18248__$1 = inst_18259;
var state_18271__$1 = (function (){var statearr_18282 = state_18271;
(statearr_18282[(8)] = inst_18248__$1);

(statearr_18282[(10)] = inst_18258);

return statearr_18282;
})();
var statearr_18283_18305 = state_18271__$1;
(statearr_18283_18305[(2)] = null);

(statearr_18283_18305[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18272 === (9))){
var state_18271__$1 = state_18271;
var statearr_18284_18306 = state_18271__$1;
(statearr_18284_18306[(2)] = null);

(statearr_18284_18306[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18272 === (5))){
var state_18271__$1 = state_18271;
var statearr_18285_18307 = state_18271__$1;
(statearr_18285_18307[(2)] = null);

(statearr_18285_18307[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18272 === (10))){
var inst_18263 = (state_18271[(2)]);
var state_18271__$1 = state_18271;
var statearr_18286_18308 = state_18271__$1;
(statearr_18286_18308[(2)] = inst_18263);

(statearr_18286_18308[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18272 === (8))){
var inst_18253 = (state_18271[(7)]);
var state_18271__$1 = state_18271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18271__$1,(11),out,inst_18253);
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
});})(c__16111__auto___18298,out))
;
return ((function (switch__15997__auto__,c__16111__auto___18298,out){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_18290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18290[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_18290[(1)] = (1));

return statearr_18290;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_18271){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_18271);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e18291){if((e18291 instanceof Object)){
var ex__16001__auto__ = e18291;
var statearr_18292_18309 = state_18271;
(statearr_18292_18309[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18271);

return cljs.core.cst$kw$recur;
} else {
throw e18291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__18310 = state_18271;
state_18271 = G__18310;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_18271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_18271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___18298,out))
})();
var state__16113__auto__ = (function (){var statearr_18293 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_18293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___18298);

return statearr_18293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___18298,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18320 = (function (map_LT_,f,ch,meta18321){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18321 = meta18321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18322,meta18321__$1){
var self__ = this;
var _18322__$1 = this;
return (new cljs.core.async.t_cljs$core$async18320(self__.map_LT_,self__.f,self__.ch,meta18321__$1));
});

cljs.core.async.t_cljs$core$async18320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18322){
var self__ = this;
var _18322__$1 = this;
return self__.meta18321;
});

cljs.core.async.t_cljs$core$async18320.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18320.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18320.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18323 = (function (map_LT_,f,ch,meta18321,_,fn1,meta18324){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18321 = meta18321;
this._ = _;
this.fn1 = fn1;
this.meta18324 = meta18324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18325,meta18324__$1){
var self__ = this;
var _18325__$1 = this;
return (new cljs.core.async.t_cljs$core$async18323(self__.map_LT_,self__.f,self__.ch,self__.meta18321,self__._,self__.fn1,meta18324__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18325){
var self__ = this;
var _18325__$1 = this;
return self__.meta18324;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18323.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18311_SHARP_){
var G__18326 = (((p1__18311_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18311_SHARP_) : self__.f.call(null,p1__18311_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18326) : f1.call(null,G__18326));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18323.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18321,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18320], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18324], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18323";

cljs.core.async.t_cljs$core$async18323.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18323");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18323 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18323(map_LT___$1,f__$1,ch__$1,meta18321__$1,___$2,fn1__$1,meta18324){
return (new cljs.core.async.t_cljs$core$async18323(map_LT___$1,f__$1,ch__$1,meta18321__$1,___$2,fn1__$1,meta18324));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18323(self__.map_LT_,self__.f,self__.ch,self__.meta18321,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6472__auto__ = ret;
if(cljs.core.truth_(and__6472__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6472__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18327 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18327) : self__.f.call(null,G__18327));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18320.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18321], null);
});

cljs.core.async.t_cljs$core$async18320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18320";

cljs.core.async.t_cljs$core$async18320.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18320");
});

cljs.core.async.__GT_t_cljs$core$async18320 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18320(map_LT___$1,f__$1,ch__$1,meta18321){
return (new cljs.core.async.t_cljs$core$async18320(map_LT___$1,f__$1,ch__$1,meta18321));
});

}

return (new cljs.core.async.t_cljs$core$async18320(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
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
cljs.core.async.t_cljs$core$async18331 = (function (map_GT_,f,ch,meta18332){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18332 = meta18332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18333,meta18332__$1){
var self__ = this;
var _18333__$1 = this;
return (new cljs.core.async.t_cljs$core$async18331(self__.map_GT_,self__.f,self__.ch,meta18332__$1));
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
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18332], null);
});

cljs.core.async.t_cljs$core$async18331.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18331";

cljs.core.async.t_cljs$core$async18331.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18331");
});

cljs.core.async.__GT_t_cljs$core$async18331 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18331(map_GT___$1,f__$1,ch__$1,meta18332){
return (new cljs.core.async.t_cljs$core$async18331(map_GT___$1,f__$1,ch__$1,meta18332));
});

}

return (new cljs.core.async.t_cljs$core$async18331(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18337 = (function (filter_GT_,p,ch,meta18338){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18338 = meta18338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18339,meta18338__$1){
var self__ = this;
var _18339__$1 = this;
return (new cljs.core.async.t_cljs$core$async18337(self__.filter_GT_,self__.p,self__.ch,meta18338__$1));
});

cljs.core.async.t_cljs$core$async18337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18339){
var self__ = this;
var _18339__$1 = this;
return self__.meta18338;
});

cljs.core.async.t_cljs$core$async18337.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18337.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18338], null);
});

cljs.core.async.t_cljs$core$async18337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18337";

cljs.core.async.t_cljs$core$async18337.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18337");
});

cljs.core.async.__GT_t_cljs$core$async18337 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18337(filter_GT___$1,p__$1,ch__$1,meta18338){
return (new cljs.core.async.t_cljs$core$async18337(filter_GT___$1,p__$1,ch__$1,meta18338));
});

}

return (new cljs.core.async.t_cljs$core$async18337(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args18340 = [];
var len__7542__auto___18384 = arguments.length;
var i__7543__auto___18385 = (0);
while(true){
if((i__7543__auto___18385 < len__7542__auto___18384)){
args18340.push((arguments[i__7543__auto___18385]));

var G__18386 = (i__7543__auto___18385 + (1));
i__7543__auto___18385 = G__18386;
continue;
} else {
}
break;
}

var G__18342 = args18340.length;
switch (G__18342) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18340.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16111__auto___18388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___18388,out){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___18388,out){
return (function (state_18363){
var state_val_18364 = (state_18363[(1)]);
if((state_val_18364 === (7))){
var inst_18359 = (state_18363[(2)]);
var state_18363__$1 = state_18363;
var statearr_18365_18389 = state_18363__$1;
(statearr_18365_18389[(2)] = inst_18359);

(statearr_18365_18389[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18364 === (1))){
var state_18363__$1 = state_18363;
var statearr_18366_18390 = state_18363__$1;
(statearr_18366_18390[(2)] = null);

(statearr_18366_18390[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18364 === (4))){
var inst_18345 = (state_18363[(7)]);
var inst_18345__$1 = (state_18363[(2)]);
var inst_18346 = (inst_18345__$1 == null);
var state_18363__$1 = (function (){var statearr_18367 = state_18363;
(statearr_18367[(7)] = inst_18345__$1);

return statearr_18367;
})();
if(cljs.core.truth_(inst_18346)){
var statearr_18368_18391 = state_18363__$1;
(statearr_18368_18391[(1)] = (5));

} else {
var statearr_18369_18392 = state_18363__$1;
(statearr_18369_18392[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18364 === (6))){
var inst_18345 = (state_18363[(7)]);
var inst_18350 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18345) : p.call(null,inst_18345));
var state_18363__$1 = state_18363;
if(cljs.core.truth_(inst_18350)){
var statearr_18370_18393 = state_18363__$1;
(statearr_18370_18393[(1)] = (8));

} else {
var statearr_18371_18394 = state_18363__$1;
(statearr_18371_18394[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18364 === (3))){
var inst_18361 = (state_18363[(2)]);
var state_18363__$1 = state_18363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18363__$1,inst_18361);
} else {
if((state_val_18364 === (2))){
var state_18363__$1 = state_18363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18363__$1,(4),ch);
} else {
if((state_val_18364 === (11))){
var inst_18353 = (state_18363[(2)]);
var state_18363__$1 = state_18363;
var statearr_18372_18395 = state_18363__$1;
(statearr_18372_18395[(2)] = inst_18353);

(statearr_18372_18395[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18364 === (9))){
var state_18363__$1 = state_18363;
var statearr_18373_18396 = state_18363__$1;
(statearr_18373_18396[(2)] = null);

(statearr_18373_18396[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18364 === (5))){
var inst_18348 = cljs.core.async.close_BANG_(out);
var state_18363__$1 = state_18363;
var statearr_18374_18397 = state_18363__$1;
(statearr_18374_18397[(2)] = inst_18348);

(statearr_18374_18397[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18364 === (10))){
var inst_18356 = (state_18363[(2)]);
var state_18363__$1 = (function (){var statearr_18375 = state_18363;
(statearr_18375[(8)] = inst_18356);

return statearr_18375;
})();
var statearr_18376_18398 = state_18363__$1;
(statearr_18376_18398[(2)] = null);

(statearr_18376_18398[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18364 === (8))){
var inst_18345 = (state_18363[(7)]);
var state_18363__$1 = state_18363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18363__$1,(11),out,inst_18345);
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
});})(c__16111__auto___18388,out))
;
return ((function (switch__15997__auto__,c__16111__auto___18388,out){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_18380 = [null,null,null,null,null,null,null,null,null];
(statearr_18380[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_18380[(1)] = (1));

return statearr_18380;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_18363){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_18363);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e18381){if((e18381 instanceof Object)){
var ex__16001__auto__ = e18381;
var statearr_18382_18399 = state_18363;
(statearr_18382_18399[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18363);

return cljs.core.cst$kw$recur;
} else {
throw e18381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__18400 = state_18363;
state_18363 = G__18400;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_18363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_18363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___18388,out))
})();
var state__16113__auto__ = (function (){var statearr_18383 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_18383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___18388);

return statearr_18383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___18388,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18401 = [];
var len__7542__auto___18404 = arguments.length;
var i__7543__auto___18405 = (0);
while(true){
if((i__7543__auto___18405 < len__7542__auto___18404)){
args18401.push((arguments[i__7543__auto___18405]));

var G__18406 = (i__7543__auto___18405 + (1));
i__7543__auto___18405 = G__18406;
continue;
} else {
}
break;
}

var G__18403 = args18401.length;
switch (G__18403) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18401.length)].join('')));

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
var c__16111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto__){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto__){
return (function (state_18573){
var state_val_18574 = (state_18573[(1)]);
if((state_val_18574 === (7))){
var inst_18569 = (state_18573[(2)]);
var state_18573__$1 = state_18573;
var statearr_18575_18616 = state_18573__$1;
(statearr_18575_18616[(2)] = inst_18569);

(statearr_18575_18616[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (20))){
var inst_18539 = (state_18573[(7)]);
var inst_18550 = (state_18573[(2)]);
var inst_18551 = cljs.core.next(inst_18539);
var inst_18525 = inst_18551;
var inst_18526 = null;
var inst_18527 = (0);
var inst_18528 = (0);
var state_18573__$1 = (function (){var statearr_18576 = state_18573;
(statearr_18576[(8)] = inst_18525);

(statearr_18576[(9)] = inst_18550);

(statearr_18576[(10)] = inst_18526);

(statearr_18576[(11)] = inst_18527);

(statearr_18576[(12)] = inst_18528);

return statearr_18576;
})();
var statearr_18577_18617 = state_18573__$1;
(statearr_18577_18617[(2)] = null);

(statearr_18577_18617[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (1))){
var state_18573__$1 = state_18573;
var statearr_18578_18618 = state_18573__$1;
(statearr_18578_18618[(2)] = null);

(statearr_18578_18618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (4))){
var inst_18514 = (state_18573[(13)]);
var inst_18514__$1 = (state_18573[(2)]);
var inst_18515 = (inst_18514__$1 == null);
var state_18573__$1 = (function (){var statearr_18579 = state_18573;
(statearr_18579[(13)] = inst_18514__$1);

return statearr_18579;
})();
if(cljs.core.truth_(inst_18515)){
var statearr_18580_18619 = state_18573__$1;
(statearr_18580_18619[(1)] = (5));

} else {
var statearr_18581_18620 = state_18573__$1;
(statearr_18581_18620[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (15))){
var state_18573__$1 = state_18573;
var statearr_18585_18621 = state_18573__$1;
(statearr_18585_18621[(2)] = null);

(statearr_18585_18621[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (21))){
var state_18573__$1 = state_18573;
var statearr_18586_18622 = state_18573__$1;
(statearr_18586_18622[(2)] = null);

(statearr_18586_18622[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (13))){
var inst_18525 = (state_18573[(8)]);
var inst_18526 = (state_18573[(10)]);
var inst_18527 = (state_18573[(11)]);
var inst_18528 = (state_18573[(12)]);
var inst_18535 = (state_18573[(2)]);
var inst_18536 = (inst_18528 + (1));
var tmp18582 = inst_18525;
var tmp18583 = inst_18526;
var tmp18584 = inst_18527;
var inst_18525__$1 = tmp18582;
var inst_18526__$1 = tmp18583;
var inst_18527__$1 = tmp18584;
var inst_18528__$1 = inst_18536;
var state_18573__$1 = (function (){var statearr_18587 = state_18573;
(statearr_18587[(8)] = inst_18525__$1);

(statearr_18587[(10)] = inst_18526__$1);

(statearr_18587[(11)] = inst_18527__$1);

(statearr_18587[(14)] = inst_18535);

(statearr_18587[(12)] = inst_18528__$1);

return statearr_18587;
})();
var statearr_18588_18623 = state_18573__$1;
(statearr_18588_18623[(2)] = null);

(statearr_18588_18623[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (22))){
var state_18573__$1 = state_18573;
var statearr_18589_18624 = state_18573__$1;
(statearr_18589_18624[(2)] = null);

(statearr_18589_18624[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (6))){
var inst_18514 = (state_18573[(13)]);
var inst_18523 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18514) : f.call(null,inst_18514));
var inst_18524 = cljs.core.seq(inst_18523);
var inst_18525 = inst_18524;
var inst_18526 = null;
var inst_18527 = (0);
var inst_18528 = (0);
var state_18573__$1 = (function (){var statearr_18590 = state_18573;
(statearr_18590[(8)] = inst_18525);

(statearr_18590[(10)] = inst_18526);

(statearr_18590[(11)] = inst_18527);

(statearr_18590[(12)] = inst_18528);

return statearr_18590;
})();
var statearr_18591_18625 = state_18573__$1;
(statearr_18591_18625[(2)] = null);

(statearr_18591_18625[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (17))){
var inst_18539 = (state_18573[(7)]);
var inst_18543 = cljs.core.chunk_first(inst_18539);
var inst_18544 = cljs.core.chunk_rest(inst_18539);
var inst_18545 = cljs.core.count(inst_18543);
var inst_18525 = inst_18544;
var inst_18526 = inst_18543;
var inst_18527 = inst_18545;
var inst_18528 = (0);
var state_18573__$1 = (function (){var statearr_18592 = state_18573;
(statearr_18592[(8)] = inst_18525);

(statearr_18592[(10)] = inst_18526);

(statearr_18592[(11)] = inst_18527);

(statearr_18592[(12)] = inst_18528);

return statearr_18592;
})();
var statearr_18593_18626 = state_18573__$1;
(statearr_18593_18626[(2)] = null);

(statearr_18593_18626[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (3))){
var inst_18571 = (state_18573[(2)]);
var state_18573__$1 = state_18573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18573__$1,inst_18571);
} else {
if((state_val_18574 === (12))){
var inst_18559 = (state_18573[(2)]);
var state_18573__$1 = state_18573;
var statearr_18594_18627 = state_18573__$1;
(statearr_18594_18627[(2)] = inst_18559);

(statearr_18594_18627[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (2))){
var state_18573__$1 = state_18573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18573__$1,(4),in$);
} else {
if((state_val_18574 === (23))){
var inst_18567 = (state_18573[(2)]);
var state_18573__$1 = state_18573;
var statearr_18595_18628 = state_18573__$1;
(statearr_18595_18628[(2)] = inst_18567);

(statearr_18595_18628[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (19))){
var inst_18554 = (state_18573[(2)]);
var state_18573__$1 = state_18573;
var statearr_18596_18629 = state_18573__$1;
(statearr_18596_18629[(2)] = inst_18554);

(statearr_18596_18629[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (11))){
var inst_18525 = (state_18573[(8)]);
var inst_18539 = (state_18573[(7)]);
var inst_18539__$1 = cljs.core.seq(inst_18525);
var state_18573__$1 = (function (){var statearr_18597 = state_18573;
(statearr_18597[(7)] = inst_18539__$1);

return statearr_18597;
})();
if(inst_18539__$1){
var statearr_18598_18630 = state_18573__$1;
(statearr_18598_18630[(1)] = (14));

} else {
var statearr_18599_18631 = state_18573__$1;
(statearr_18599_18631[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (9))){
var inst_18561 = (state_18573[(2)]);
var inst_18562 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18573__$1 = (function (){var statearr_18600 = state_18573;
(statearr_18600[(15)] = inst_18561);

return statearr_18600;
})();
if(cljs.core.truth_(inst_18562)){
var statearr_18601_18632 = state_18573__$1;
(statearr_18601_18632[(1)] = (21));

} else {
var statearr_18602_18633 = state_18573__$1;
(statearr_18602_18633[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (5))){
var inst_18517 = cljs.core.async.close_BANG_(out);
var state_18573__$1 = state_18573;
var statearr_18603_18634 = state_18573__$1;
(statearr_18603_18634[(2)] = inst_18517);

(statearr_18603_18634[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (14))){
var inst_18539 = (state_18573[(7)]);
var inst_18541 = cljs.core.chunked_seq_QMARK_(inst_18539);
var state_18573__$1 = state_18573;
if(inst_18541){
var statearr_18604_18635 = state_18573__$1;
(statearr_18604_18635[(1)] = (17));

} else {
var statearr_18605_18636 = state_18573__$1;
(statearr_18605_18636[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (16))){
var inst_18557 = (state_18573[(2)]);
var state_18573__$1 = state_18573;
var statearr_18606_18637 = state_18573__$1;
(statearr_18606_18637[(2)] = inst_18557);

(statearr_18606_18637[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18574 === (10))){
var inst_18526 = (state_18573[(10)]);
var inst_18528 = (state_18573[(12)]);
var inst_18533 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18526,inst_18528);
var state_18573__$1 = state_18573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18573__$1,(13),out,inst_18533);
} else {
if((state_val_18574 === (18))){
var inst_18539 = (state_18573[(7)]);
var inst_18548 = cljs.core.first(inst_18539);
var state_18573__$1 = state_18573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18573__$1,(20),out,inst_18548);
} else {
if((state_val_18574 === (8))){
var inst_18527 = (state_18573[(11)]);
var inst_18528 = (state_18573[(12)]);
var inst_18530 = (inst_18528 < inst_18527);
var inst_18531 = inst_18530;
var state_18573__$1 = state_18573;
if(cljs.core.truth_(inst_18531)){
var statearr_18607_18638 = state_18573__$1;
(statearr_18607_18638[(1)] = (10));

} else {
var statearr_18608_18639 = state_18573__$1;
(statearr_18608_18639[(1)] = (11));

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
});})(c__16111__auto__))
;
return ((function (switch__15997__auto__,c__16111__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15998__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15998__auto____0 = (function (){
var statearr_18612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18612[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15998__auto__);

(statearr_18612[(1)] = (1));

return statearr_18612;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15998__auto____1 = (function (state_18573){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_18573);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e18613){if((e18613 instanceof Object)){
var ex__16001__auto__ = e18613;
var statearr_18614_18640 = state_18573;
(statearr_18614_18640[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18573);

return cljs.core.cst$kw$recur;
} else {
throw e18613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__18641 = state_18573;
state_18573 = G__18641;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15998__auto__ = function(state_18573){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15998__auto____1.call(this,state_18573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15998__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15998__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto__))
})();
var state__16113__auto__ = (function (){var statearr_18615 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_18615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto__);

return statearr_18615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto__))
);

return c__16111__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18642 = [];
var len__7542__auto___18645 = arguments.length;
var i__7543__auto___18646 = (0);
while(true){
if((i__7543__auto___18646 < len__7542__auto___18645)){
args18642.push((arguments[i__7543__auto___18646]));

var G__18647 = (i__7543__auto___18646 + (1));
i__7543__auto___18646 = G__18647;
continue;
} else {
}
break;
}

var G__18644 = args18642.length;
switch (G__18644) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18642.length)].join('')));

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
var args18649 = [];
var len__7542__auto___18652 = arguments.length;
var i__7543__auto___18653 = (0);
while(true){
if((i__7543__auto___18653 < len__7542__auto___18652)){
args18649.push((arguments[i__7543__auto___18653]));

var G__18654 = (i__7543__auto___18653 + (1));
i__7543__auto___18653 = G__18654;
continue;
} else {
}
break;
}

var G__18651 = args18649.length;
switch (G__18651) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18649.length)].join('')));

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
var args18656 = [];
var len__7542__auto___18707 = arguments.length;
var i__7543__auto___18708 = (0);
while(true){
if((i__7543__auto___18708 < len__7542__auto___18707)){
args18656.push((arguments[i__7543__auto___18708]));

var G__18709 = (i__7543__auto___18708 + (1));
i__7543__auto___18708 = G__18709;
continue;
} else {
}
break;
}

var G__18658 = args18656.length;
switch (G__18658) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18656.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16111__auto___18711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___18711,out){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___18711,out){
return (function (state_18682){
var state_val_18683 = (state_18682[(1)]);
if((state_val_18683 === (7))){
var inst_18677 = (state_18682[(2)]);
var state_18682__$1 = state_18682;
var statearr_18684_18712 = state_18682__$1;
(statearr_18684_18712[(2)] = inst_18677);

(statearr_18684_18712[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18683 === (1))){
var inst_18659 = null;
var state_18682__$1 = (function (){var statearr_18685 = state_18682;
(statearr_18685[(7)] = inst_18659);

return statearr_18685;
})();
var statearr_18686_18713 = state_18682__$1;
(statearr_18686_18713[(2)] = null);

(statearr_18686_18713[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18683 === (4))){
var inst_18662 = (state_18682[(8)]);
var inst_18662__$1 = (state_18682[(2)]);
var inst_18663 = (inst_18662__$1 == null);
var inst_18664 = cljs.core.not(inst_18663);
var state_18682__$1 = (function (){var statearr_18687 = state_18682;
(statearr_18687[(8)] = inst_18662__$1);

return statearr_18687;
})();
if(inst_18664){
var statearr_18688_18714 = state_18682__$1;
(statearr_18688_18714[(1)] = (5));

} else {
var statearr_18689_18715 = state_18682__$1;
(statearr_18689_18715[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18683 === (6))){
var state_18682__$1 = state_18682;
var statearr_18690_18716 = state_18682__$1;
(statearr_18690_18716[(2)] = null);

(statearr_18690_18716[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18683 === (3))){
var inst_18679 = (state_18682[(2)]);
var inst_18680 = cljs.core.async.close_BANG_(out);
var state_18682__$1 = (function (){var statearr_18691 = state_18682;
(statearr_18691[(9)] = inst_18679);

return statearr_18691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18682__$1,inst_18680);
} else {
if((state_val_18683 === (2))){
var state_18682__$1 = state_18682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18682__$1,(4),ch);
} else {
if((state_val_18683 === (11))){
var inst_18662 = (state_18682[(8)]);
var inst_18671 = (state_18682[(2)]);
var inst_18659 = inst_18662;
var state_18682__$1 = (function (){var statearr_18692 = state_18682;
(statearr_18692[(10)] = inst_18671);

(statearr_18692[(7)] = inst_18659);

return statearr_18692;
})();
var statearr_18693_18717 = state_18682__$1;
(statearr_18693_18717[(2)] = null);

(statearr_18693_18717[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18683 === (9))){
var inst_18662 = (state_18682[(8)]);
var state_18682__$1 = state_18682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18682__$1,(11),out,inst_18662);
} else {
if((state_val_18683 === (5))){
var inst_18662 = (state_18682[(8)]);
var inst_18659 = (state_18682[(7)]);
var inst_18666 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18662,inst_18659);
var state_18682__$1 = state_18682;
if(inst_18666){
var statearr_18695_18718 = state_18682__$1;
(statearr_18695_18718[(1)] = (8));

} else {
var statearr_18696_18719 = state_18682__$1;
(statearr_18696_18719[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18683 === (10))){
var inst_18674 = (state_18682[(2)]);
var state_18682__$1 = state_18682;
var statearr_18697_18720 = state_18682__$1;
(statearr_18697_18720[(2)] = inst_18674);

(statearr_18697_18720[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18683 === (8))){
var inst_18659 = (state_18682[(7)]);
var tmp18694 = inst_18659;
var inst_18659__$1 = tmp18694;
var state_18682__$1 = (function (){var statearr_18698 = state_18682;
(statearr_18698[(7)] = inst_18659__$1);

return statearr_18698;
})();
var statearr_18699_18721 = state_18682__$1;
(statearr_18699_18721[(2)] = null);

(statearr_18699_18721[(1)] = (2));


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
});})(c__16111__auto___18711,out))
;
return ((function (switch__15997__auto__,c__16111__auto___18711,out){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_18703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18703[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_18703[(1)] = (1));

return statearr_18703;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_18682){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_18682);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e18704){if((e18704 instanceof Object)){
var ex__16001__auto__ = e18704;
var statearr_18705_18722 = state_18682;
(statearr_18705_18722[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18682);

return cljs.core.cst$kw$recur;
} else {
throw e18704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__18723 = state_18682;
state_18682 = G__18723;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_18682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_18682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___18711,out))
})();
var state__16113__auto__ = (function (){var statearr_18706 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_18706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___18711);

return statearr_18706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___18711,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18724 = [];
var len__7542__auto___18794 = arguments.length;
var i__7543__auto___18795 = (0);
while(true){
if((i__7543__auto___18795 < len__7542__auto___18794)){
args18724.push((arguments[i__7543__auto___18795]));

var G__18796 = (i__7543__auto___18795 + (1));
i__7543__auto___18795 = G__18796;
continue;
} else {
}
break;
}

var G__18726 = args18724.length;
switch (G__18726) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18724.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16111__auto___18798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___18798,out){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___18798,out){
return (function (state_18764){
var state_val_18765 = (state_18764[(1)]);
if((state_val_18765 === (7))){
var inst_18760 = (state_18764[(2)]);
var state_18764__$1 = state_18764;
var statearr_18766_18799 = state_18764__$1;
(statearr_18766_18799[(2)] = inst_18760);

(statearr_18766_18799[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (1))){
var inst_18727 = (new Array(n));
var inst_18728 = inst_18727;
var inst_18729 = (0);
var state_18764__$1 = (function (){var statearr_18767 = state_18764;
(statearr_18767[(7)] = inst_18728);

(statearr_18767[(8)] = inst_18729);

return statearr_18767;
})();
var statearr_18768_18800 = state_18764__$1;
(statearr_18768_18800[(2)] = null);

(statearr_18768_18800[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (4))){
var inst_18732 = (state_18764[(9)]);
var inst_18732__$1 = (state_18764[(2)]);
var inst_18733 = (inst_18732__$1 == null);
var inst_18734 = cljs.core.not(inst_18733);
var state_18764__$1 = (function (){var statearr_18769 = state_18764;
(statearr_18769[(9)] = inst_18732__$1);

return statearr_18769;
})();
if(inst_18734){
var statearr_18770_18801 = state_18764__$1;
(statearr_18770_18801[(1)] = (5));

} else {
var statearr_18771_18802 = state_18764__$1;
(statearr_18771_18802[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (15))){
var inst_18754 = (state_18764[(2)]);
var state_18764__$1 = state_18764;
var statearr_18772_18803 = state_18764__$1;
(statearr_18772_18803[(2)] = inst_18754);

(statearr_18772_18803[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (13))){
var state_18764__$1 = state_18764;
var statearr_18773_18804 = state_18764__$1;
(statearr_18773_18804[(2)] = null);

(statearr_18773_18804[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (6))){
var inst_18729 = (state_18764[(8)]);
var inst_18750 = (inst_18729 > (0));
var state_18764__$1 = state_18764;
if(cljs.core.truth_(inst_18750)){
var statearr_18774_18805 = state_18764__$1;
(statearr_18774_18805[(1)] = (12));

} else {
var statearr_18775_18806 = state_18764__$1;
(statearr_18775_18806[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (3))){
var inst_18762 = (state_18764[(2)]);
var state_18764__$1 = state_18764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18764__$1,inst_18762);
} else {
if((state_val_18765 === (12))){
var inst_18728 = (state_18764[(7)]);
var inst_18752 = cljs.core.vec(inst_18728);
var state_18764__$1 = state_18764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18764__$1,(15),out,inst_18752);
} else {
if((state_val_18765 === (2))){
var state_18764__$1 = state_18764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18764__$1,(4),ch);
} else {
if((state_val_18765 === (11))){
var inst_18744 = (state_18764[(2)]);
var inst_18745 = (new Array(n));
var inst_18728 = inst_18745;
var inst_18729 = (0);
var state_18764__$1 = (function (){var statearr_18776 = state_18764;
(statearr_18776[(10)] = inst_18744);

(statearr_18776[(7)] = inst_18728);

(statearr_18776[(8)] = inst_18729);

return statearr_18776;
})();
var statearr_18777_18807 = state_18764__$1;
(statearr_18777_18807[(2)] = null);

(statearr_18777_18807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (9))){
var inst_18728 = (state_18764[(7)]);
var inst_18742 = cljs.core.vec(inst_18728);
var state_18764__$1 = state_18764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18764__$1,(11),out,inst_18742);
} else {
if((state_val_18765 === (5))){
var inst_18728 = (state_18764[(7)]);
var inst_18729 = (state_18764[(8)]);
var inst_18732 = (state_18764[(9)]);
var inst_18737 = (state_18764[(11)]);
var inst_18736 = (inst_18728[inst_18729] = inst_18732);
var inst_18737__$1 = (inst_18729 + (1));
var inst_18738 = (inst_18737__$1 < n);
var state_18764__$1 = (function (){var statearr_18778 = state_18764;
(statearr_18778[(12)] = inst_18736);

(statearr_18778[(11)] = inst_18737__$1);

return statearr_18778;
})();
if(cljs.core.truth_(inst_18738)){
var statearr_18779_18808 = state_18764__$1;
(statearr_18779_18808[(1)] = (8));

} else {
var statearr_18780_18809 = state_18764__$1;
(statearr_18780_18809[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (14))){
var inst_18757 = (state_18764[(2)]);
var inst_18758 = cljs.core.async.close_BANG_(out);
var state_18764__$1 = (function (){var statearr_18782 = state_18764;
(statearr_18782[(13)] = inst_18757);

return statearr_18782;
})();
var statearr_18783_18810 = state_18764__$1;
(statearr_18783_18810[(2)] = inst_18758);

(statearr_18783_18810[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (10))){
var inst_18748 = (state_18764[(2)]);
var state_18764__$1 = state_18764;
var statearr_18784_18811 = state_18764__$1;
(statearr_18784_18811[(2)] = inst_18748);

(statearr_18784_18811[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18765 === (8))){
var inst_18728 = (state_18764[(7)]);
var inst_18737 = (state_18764[(11)]);
var tmp18781 = inst_18728;
var inst_18728__$1 = tmp18781;
var inst_18729 = inst_18737;
var state_18764__$1 = (function (){var statearr_18785 = state_18764;
(statearr_18785[(7)] = inst_18728__$1);

(statearr_18785[(8)] = inst_18729);

return statearr_18785;
})();
var statearr_18786_18812 = state_18764__$1;
(statearr_18786_18812[(2)] = null);

(statearr_18786_18812[(1)] = (2));


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
});})(c__16111__auto___18798,out))
;
return ((function (switch__15997__auto__,c__16111__auto___18798,out){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_18790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18790[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_18790[(1)] = (1));

return statearr_18790;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_18764){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_18764);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e18791){if((e18791 instanceof Object)){
var ex__16001__auto__ = e18791;
var statearr_18792_18813 = state_18764;
(statearr_18792_18813[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18764);

return cljs.core.cst$kw$recur;
} else {
throw e18791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__18814 = state_18764;
state_18764 = G__18814;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_18764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_18764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___18798,out))
})();
var state__16113__auto__ = (function (){var statearr_18793 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_18793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___18798);

return statearr_18793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___18798,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18815 = [];
var len__7542__auto___18889 = arguments.length;
var i__7543__auto___18890 = (0);
while(true){
if((i__7543__auto___18890 < len__7542__auto___18889)){
args18815.push((arguments[i__7543__auto___18890]));

var G__18891 = (i__7543__auto___18890 + (1));
i__7543__auto___18890 = G__18891;
continue;
} else {
}
break;
}

var G__18817 = args18815.length;
switch (G__18817) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18815.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16111__auto___18893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto___18893,out){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto___18893,out){
return (function (state_18859){
var state_val_18860 = (state_18859[(1)]);
if((state_val_18860 === (7))){
var inst_18855 = (state_18859[(2)]);
var state_18859__$1 = state_18859;
var statearr_18861_18894 = state_18859__$1;
(statearr_18861_18894[(2)] = inst_18855);

(statearr_18861_18894[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (1))){
var inst_18818 = [];
var inst_18819 = inst_18818;
var inst_18820 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18859__$1 = (function (){var statearr_18862 = state_18859;
(statearr_18862[(7)] = inst_18820);

(statearr_18862[(8)] = inst_18819);

return statearr_18862;
})();
var statearr_18863_18895 = state_18859__$1;
(statearr_18863_18895[(2)] = null);

(statearr_18863_18895[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (4))){
var inst_18823 = (state_18859[(9)]);
var inst_18823__$1 = (state_18859[(2)]);
var inst_18824 = (inst_18823__$1 == null);
var inst_18825 = cljs.core.not(inst_18824);
var state_18859__$1 = (function (){var statearr_18864 = state_18859;
(statearr_18864[(9)] = inst_18823__$1);

return statearr_18864;
})();
if(inst_18825){
var statearr_18865_18896 = state_18859__$1;
(statearr_18865_18896[(1)] = (5));

} else {
var statearr_18866_18897 = state_18859__$1;
(statearr_18866_18897[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (15))){
var inst_18849 = (state_18859[(2)]);
var state_18859__$1 = state_18859;
var statearr_18867_18898 = state_18859__$1;
(statearr_18867_18898[(2)] = inst_18849);

(statearr_18867_18898[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (13))){
var state_18859__$1 = state_18859;
var statearr_18868_18899 = state_18859__$1;
(statearr_18868_18899[(2)] = null);

(statearr_18868_18899[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (6))){
var inst_18819 = (state_18859[(8)]);
var inst_18844 = inst_18819.length;
var inst_18845 = (inst_18844 > (0));
var state_18859__$1 = state_18859;
if(cljs.core.truth_(inst_18845)){
var statearr_18869_18900 = state_18859__$1;
(statearr_18869_18900[(1)] = (12));

} else {
var statearr_18870_18901 = state_18859__$1;
(statearr_18870_18901[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (3))){
var inst_18857 = (state_18859[(2)]);
var state_18859__$1 = state_18859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18859__$1,inst_18857);
} else {
if((state_val_18860 === (12))){
var inst_18819 = (state_18859[(8)]);
var inst_18847 = cljs.core.vec(inst_18819);
var state_18859__$1 = state_18859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18859__$1,(15),out,inst_18847);
} else {
if((state_val_18860 === (2))){
var state_18859__$1 = state_18859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18859__$1,(4),ch);
} else {
if((state_val_18860 === (11))){
var inst_18823 = (state_18859[(9)]);
var inst_18827 = (state_18859[(10)]);
var inst_18837 = (state_18859[(2)]);
var inst_18838 = [];
var inst_18839 = inst_18838.push(inst_18823);
var inst_18819 = inst_18838;
var inst_18820 = inst_18827;
var state_18859__$1 = (function (){var statearr_18871 = state_18859;
(statearr_18871[(11)] = inst_18839);

(statearr_18871[(12)] = inst_18837);

(statearr_18871[(7)] = inst_18820);

(statearr_18871[(8)] = inst_18819);

return statearr_18871;
})();
var statearr_18872_18902 = state_18859__$1;
(statearr_18872_18902[(2)] = null);

(statearr_18872_18902[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (9))){
var inst_18819 = (state_18859[(8)]);
var inst_18835 = cljs.core.vec(inst_18819);
var state_18859__$1 = state_18859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18859__$1,(11),out,inst_18835);
} else {
if((state_val_18860 === (5))){
var inst_18823 = (state_18859[(9)]);
var inst_18820 = (state_18859[(7)]);
var inst_18827 = (state_18859[(10)]);
var inst_18827__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18823) : f.call(null,inst_18823));
var inst_18828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18827__$1,inst_18820);
var inst_18829 = cljs.core.keyword_identical_QMARK_(inst_18820,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18830 = (inst_18828) || (inst_18829);
var state_18859__$1 = (function (){var statearr_18873 = state_18859;
(statearr_18873[(10)] = inst_18827__$1);

return statearr_18873;
})();
if(cljs.core.truth_(inst_18830)){
var statearr_18874_18903 = state_18859__$1;
(statearr_18874_18903[(1)] = (8));

} else {
var statearr_18875_18904 = state_18859__$1;
(statearr_18875_18904[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (14))){
var inst_18852 = (state_18859[(2)]);
var inst_18853 = cljs.core.async.close_BANG_(out);
var state_18859__$1 = (function (){var statearr_18877 = state_18859;
(statearr_18877[(13)] = inst_18852);

return statearr_18877;
})();
var statearr_18878_18905 = state_18859__$1;
(statearr_18878_18905[(2)] = inst_18853);

(statearr_18878_18905[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (10))){
var inst_18842 = (state_18859[(2)]);
var state_18859__$1 = state_18859;
var statearr_18879_18906 = state_18859__$1;
(statearr_18879_18906[(2)] = inst_18842);

(statearr_18879_18906[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18860 === (8))){
var inst_18823 = (state_18859[(9)]);
var inst_18819 = (state_18859[(8)]);
var inst_18827 = (state_18859[(10)]);
var inst_18832 = inst_18819.push(inst_18823);
var tmp18876 = inst_18819;
var inst_18819__$1 = tmp18876;
var inst_18820 = inst_18827;
var state_18859__$1 = (function (){var statearr_18880 = state_18859;
(statearr_18880[(7)] = inst_18820);

(statearr_18880[(8)] = inst_18819__$1);

(statearr_18880[(14)] = inst_18832);

return statearr_18880;
})();
var statearr_18881_18907 = state_18859__$1;
(statearr_18881_18907[(2)] = null);

(statearr_18881_18907[(1)] = (2));


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
});})(c__16111__auto___18893,out))
;
return ((function (switch__15997__auto__,c__16111__auto___18893,out){
return (function() {
var cljs$core$async$state_machine__15998__auto__ = null;
var cljs$core$async$state_machine__15998__auto____0 = (function (){
var statearr_18885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18885[(0)] = cljs$core$async$state_machine__15998__auto__);

(statearr_18885[(1)] = (1));

return statearr_18885;
});
var cljs$core$async$state_machine__15998__auto____1 = (function (state_18859){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_18859);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e18886){if((e18886 instanceof Object)){
var ex__16001__auto__ = e18886;
var statearr_18887_18908 = state_18859;
(statearr_18887_18908[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18859);

return cljs.core.cst$kw$recur;
} else {
throw e18886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__18909 = state_18859;
state_18859 = G__18909;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljs$core$async$state_machine__15998__auto__ = function(state_18859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15998__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15998__auto____1.call(this,state_18859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15998__auto____0;
cljs$core$async$state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15998__auto____1;
return cljs$core$async$state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto___18893,out))
})();
var state__16113__auto__ = (function (){var statearr_18888 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_18888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto___18893);

return statearr_18888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto___18893,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
