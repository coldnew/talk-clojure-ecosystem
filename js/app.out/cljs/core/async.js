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
var args16152 = [];
var len__7542__auto___16158 = arguments.length;
var i__7543__auto___16159 = (0);
while(true){
if((i__7543__auto___16159 < len__7542__auto___16158)){
args16152.push((arguments[i__7543__auto___16159]));

var G__16160 = (i__7543__auto___16159 + (1));
i__7543__auto___16159 = G__16160;
continue;
} else {
}
break;
}

var G__16154 = args16152.length;
switch (G__16154) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16152.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16155 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16155 = (function (f,blockable,meta16156){
this.f = f;
this.blockable = blockable;
this.meta16156 = meta16156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16157,meta16156__$1){
var self__ = this;
var _16157__$1 = this;
return (new cljs.core.async.t_cljs$core$async16155(self__.f,self__.blockable,meta16156__$1));
});

cljs.core.async.t_cljs$core$async16155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16157){
var self__ = this;
var _16157__$1 = this;
return self__.meta16156;
});

cljs.core.async.t_cljs$core$async16155.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16155.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16156], null);
});

cljs.core.async.t_cljs$core$async16155.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16155";

cljs.core.async.t_cljs$core$async16155.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16155");
});

cljs.core.async.__GT_t_cljs$core$async16155 = (function cljs$core$async$__GT_t_cljs$core$async16155(f__$1,blockable__$1,meta16156){
return (new cljs.core.async.t_cljs$core$async16155(f__$1,blockable__$1,meta16156));
});

}

return (new cljs.core.async.t_cljs$core$async16155(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args16164 = [];
var len__7542__auto___16167 = arguments.length;
var i__7543__auto___16168 = (0);
while(true){
if((i__7543__auto___16168 < len__7542__auto___16167)){
args16164.push((arguments[i__7543__auto___16168]));

var G__16169 = (i__7543__auto___16168 + (1));
i__7543__auto___16168 = G__16169;
continue;
} else {
}
break;
}

var G__16166 = args16164.length;
switch (G__16166) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16164.length)].join('')));

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
var args16171 = [];
var len__7542__auto___16174 = arguments.length;
var i__7543__auto___16175 = (0);
while(true){
if((i__7543__auto___16175 < len__7542__auto___16174)){
args16171.push((arguments[i__7543__auto___16175]));

var G__16176 = (i__7543__auto___16175 + (1));
i__7543__auto___16175 = G__16176;
continue;
} else {
}
break;
}

var G__16173 = args16171.length;
switch (G__16173) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16171.length)].join('')));

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
var args16178 = [];
var len__7542__auto___16181 = arguments.length;
var i__7543__auto___16182 = (0);
while(true){
if((i__7543__auto___16182 < len__7542__auto___16181)){
args16178.push((arguments[i__7543__auto___16182]));

var G__16183 = (i__7543__auto___16182 + (1));
i__7543__auto___16182 = G__16183;
continue;
} else {
}
break;
}

var G__16180 = args16178.length;
switch (G__16180) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16178.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16185 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16185) : fn1.call(null,val_16185));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16185,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16185) : fn1.call(null,val_16185));
});})(val_16185,ret))
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
var args16186 = [];
var len__7542__auto___16189 = arguments.length;
var i__7543__auto___16190 = (0);
while(true){
if((i__7543__auto___16190 < len__7542__auto___16189)){
args16186.push((arguments[i__7543__auto___16190]));

var G__16191 = (i__7543__auto___16190 + (1));
i__7543__auto___16190 = G__16191;
continue;
} else {
}
break;
}

var G__16188 = args16186.length;
switch (G__16188) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16186.length)].join('')));

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
var n__7387__auto___16193 = n;
var x_16194 = (0);
while(true){
if((x_16194 < n__7387__auto___16193)){
(a[x_16194] = (0));

var G__16195 = (x_16194 + (1));
x_16194 = G__16195;
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

var G__16196 = (i + (1));
i = G__16196;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16200 = (function (alt_flag,flag,meta16201){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16201 = meta16201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16202,meta16201__$1){
var self__ = this;
var _16202__$1 = this;
return (new cljs.core.async.t_cljs$core$async16200(self__.alt_flag,self__.flag,meta16201__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16202){
var self__ = this;
var _16202__$1 = this;
return self__.meta16201;
});})(flag))
;

cljs.core.async.t_cljs$core$async16200.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16200.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16200.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16201], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16200";

cljs.core.async.t_cljs$core$async16200.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16200");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16200 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16200(alt_flag__$1,flag__$1,meta16201){
return (new cljs.core.async.t_cljs$core$async16200(alt_flag__$1,flag__$1,meta16201));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16200(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16206 = (function (alt_handler,flag,cb,meta16207){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16207 = meta16207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16208,meta16207__$1){
var self__ = this;
var _16208__$1 = this;
return (new cljs.core.async.t_cljs$core$async16206(self__.alt_handler,self__.flag,self__.cb,meta16207__$1));
});

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16208){
var self__ = this;
var _16208__$1 = this;
return self__.meta16207;
});

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16207], null);
});

cljs.core.async.t_cljs$core$async16206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16206";

cljs.core.async.t_cljs$core$async16206.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async16206");
});

cljs.core.async.__GT_t_cljs$core$async16206 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16206(alt_handler__$1,flag__$1,cb__$1,meta16207){
return (new cljs.core.async.t_cljs$core$async16206(alt_handler__$1,flag__$1,cb__$1,meta16207));
});

}

return (new cljs.core.async.t_cljs$core$async16206(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16209_SHARP_){
var G__16213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16209_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16213) : fret.call(null,G__16213));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16210_SHARP_){
var G__16214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16210_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16214) : fret.call(null,G__16214));
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
var G__16215 = (i + (1));
i = G__16215;
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
var len__7542__auto___16221 = arguments.length;
var i__7543__auto___16222 = (0);
while(true){
if((i__7543__auto___16222 < len__7542__auto___16221)){
args__7549__auto__.push((arguments[i__7543__auto___16222]));

var G__16223 = (i__7543__auto___16222 + (1));
i__7543__auto___16222 = G__16223;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((1) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7550__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16218){
var map__16219 = p__16218;
var map__16219__$1 = ((((!((map__16219 == null)))?((((map__16219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16219):map__16219);
var opts = map__16219__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16216){
var G__16217 = cljs.core.first(seq16216);
var seq16216__$1 = cljs.core.next(seq16216);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16217,seq16216__$1);
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
var args16224 = [];
var len__7542__auto___16274 = arguments.length;
var i__7543__auto___16275 = (0);
while(true){
if((i__7543__auto___16275 < len__7542__auto___16274)){
args16224.push((arguments[i__7543__auto___16275]));

var G__16276 = (i__7543__auto___16275 + (1));
i__7543__auto___16275 = G__16276;
continue;
} else {
}
break;
}

var G__16226 = args16224.length;
switch (G__16226) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16224.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16107__auto___16278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___16278){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___16278){
return (function (state_16250){
var state_val_16251 = (state_16250[(1)]);
if((state_val_16251 === (7))){
var inst_16246 = (state_16250[(2)]);
var state_16250__$1 = state_16250;
var statearr_16252_16279 = state_16250__$1;
(statearr_16252_16279[(2)] = inst_16246);

(statearr_16252_16279[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (1))){
var state_16250__$1 = state_16250;
var statearr_16253_16280 = state_16250__$1;
(statearr_16253_16280[(2)] = null);

(statearr_16253_16280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (4))){
var inst_16229 = (state_16250[(7)]);
var inst_16229__$1 = (state_16250[(2)]);
var inst_16230 = (inst_16229__$1 == null);
var state_16250__$1 = (function (){var statearr_16254 = state_16250;
(statearr_16254[(7)] = inst_16229__$1);

return statearr_16254;
})();
if(cljs.core.truth_(inst_16230)){
var statearr_16255_16281 = state_16250__$1;
(statearr_16255_16281[(1)] = (5));

} else {
var statearr_16256_16282 = state_16250__$1;
(statearr_16256_16282[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (13))){
var state_16250__$1 = state_16250;
var statearr_16257_16283 = state_16250__$1;
(statearr_16257_16283[(2)] = null);

(statearr_16257_16283[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (6))){
var inst_16229 = (state_16250[(7)]);
var state_16250__$1 = state_16250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16250__$1,(11),to,inst_16229);
} else {
if((state_val_16251 === (3))){
var inst_16248 = (state_16250[(2)]);
var state_16250__$1 = state_16250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16250__$1,inst_16248);
} else {
if((state_val_16251 === (12))){
var state_16250__$1 = state_16250;
var statearr_16258_16284 = state_16250__$1;
(statearr_16258_16284[(2)] = null);

(statearr_16258_16284[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (2))){
var state_16250__$1 = state_16250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16250__$1,(4),from);
} else {
if((state_val_16251 === (11))){
var inst_16239 = (state_16250[(2)]);
var state_16250__$1 = state_16250;
if(cljs.core.truth_(inst_16239)){
var statearr_16259_16285 = state_16250__$1;
(statearr_16259_16285[(1)] = (12));

} else {
var statearr_16260_16286 = state_16250__$1;
(statearr_16260_16286[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (9))){
var state_16250__$1 = state_16250;
var statearr_16261_16287 = state_16250__$1;
(statearr_16261_16287[(2)] = null);

(statearr_16261_16287[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (5))){
var state_16250__$1 = state_16250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16262_16288 = state_16250__$1;
(statearr_16262_16288[(1)] = (8));

} else {
var statearr_16263_16289 = state_16250__$1;
(statearr_16263_16289[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (14))){
var inst_16244 = (state_16250[(2)]);
var state_16250__$1 = state_16250;
var statearr_16264_16290 = state_16250__$1;
(statearr_16264_16290[(2)] = inst_16244);

(statearr_16264_16290[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (10))){
var inst_16236 = (state_16250[(2)]);
var state_16250__$1 = state_16250;
var statearr_16265_16291 = state_16250__$1;
(statearr_16265_16291[(2)] = inst_16236);

(statearr_16265_16291[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16251 === (8))){
var inst_16233 = cljs.core.async.close_BANG_(to);
var state_16250__$1 = state_16250;
var statearr_16266_16292 = state_16250__$1;
(statearr_16266_16292[(2)] = inst_16233);

(statearr_16266_16292[(1)] = (10));


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
});})(c__16107__auto___16278))
;
return ((function (switch__15993__auto__,c__16107__auto___16278){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_16270 = [null,null,null,null,null,null,null,null];
(statearr_16270[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_16270[(1)] = (1));

return statearr_16270;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_16250){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_16250);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e16271){if((e16271 instanceof Object)){
var ex__15997__auto__ = e16271;
var statearr_16272_16293 = state_16250;
(statearr_16272_16293[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16250);

return cljs.core.cst$kw$recur;
} else {
throw e16271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__16294 = state_16250;
state_16250 = G__16294;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_16250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_16250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___16278))
})();
var state__16109__auto__ = (function (){var statearr_16273 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_16273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___16278);

return statearr_16273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___16278))
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
return (function (p__16478){
var vec__16479 = p__16478;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16479,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16479,(1),null);
var job = vec__16479;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16107__auto___16661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___16661,res,vec__16479,v,p,job,jobs,results){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___16661,res,vec__16479,v,p,job,jobs,results){
return (function (state_16484){
var state_val_16485 = (state_16484[(1)]);
if((state_val_16485 === (1))){
var state_16484__$1 = state_16484;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16484__$1,(2),res,v);
} else {
if((state_val_16485 === (2))){
var inst_16481 = (state_16484[(2)]);
var inst_16482 = cljs.core.async.close_BANG_(res);
var state_16484__$1 = (function (){var statearr_16486 = state_16484;
(statearr_16486[(7)] = inst_16481);

return statearr_16486;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16484__$1,inst_16482);
} else {
return null;
}
}
});})(c__16107__auto___16661,res,vec__16479,v,p,job,jobs,results))
;
return ((function (switch__15993__auto__,c__16107__auto___16661,res,vec__16479,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0 = (function (){
var statearr_16490 = [null,null,null,null,null,null,null,null];
(statearr_16490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__);

(statearr_16490[(1)] = (1));

return statearr_16490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1 = (function (state_16484){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_16484);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e16491){if((e16491 instanceof Object)){
var ex__15997__auto__ = e16491;
var statearr_16492_16662 = state_16484;
(statearr_16492_16662[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16484);

return cljs.core.cst$kw$recur;
} else {
throw e16491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__16663 = state_16484;
state_16484 = G__16663;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = function(state_16484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1.call(this,state_16484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___16661,res,vec__16479,v,p,job,jobs,results))
})();
var state__16109__auto__ = (function (){var statearr_16493 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_16493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___16661);

return statearr_16493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___16661,res,vec__16479,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16494){
var vec__16495 = p__16494;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16495,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16495,(1),null);
var job = vec__16495;
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
var n__7387__auto___16664 = n;
var __16665 = (0);
while(true){
if((__16665 < n__7387__auto___16664)){
var G__16496_16666 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16496_16666) {
case "compute":
var c__16107__auto___16668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16665,c__16107__auto___16668,G__16496_16666,n__7387__auto___16664,jobs,results,process,async){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (__16665,c__16107__auto___16668,G__16496_16666,n__7387__auto___16664,jobs,results,process,async){
return (function (state_16509){
var state_val_16510 = (state_16509[(1)]);
if((state_val_16510 === (1))){
var state_16509__$1 = state_16509;
var statearr_16511_16669 = state_16509__$1;
(statearr_16511_16669[(2)] = null);

(statearr_16511_16669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16510 === (2))){
var state_16509__$1 = state_16509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16509__$1,(4),jobs);
} else {
if((state_val_16510 === (3))){
var inst_16507 = (state_16509[(2)]);
var state_16509__$1 = state_16509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16509__$1,inst_16507);
} else {
if((state_val_16510 === (4))){
var inst_16499 = (state_16509[(2)]);
var inst_16500 = process(inst_16499);
var state_16509__$1 = state_16509;
if(cljs.core.truth_(inst_16500)){
var statearr_16512_16670 = state_16509__$1;
(statearr_16512_16670[(1)] = (5));

} else {
var statearr_16513_16671 = state_16509__$1;
(statearr_16513_16671[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16510 === (5))){
var state_16509__$1 = state_16509;
var statearr_16514_16672 = state_16509__$1;
(statearr_16514_16672[(2)] = null);

(statearr_16514_16672[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16510 === (6))){
var state_16509__$1 = state_16509;
var statearr_16515_16673 = state_16509__$1;
(statearr_16515_16673[(2)] = null);

(statearr_16515_16673[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16510 === (7))){
var inst_16505 = (state_16509[(2)]);
var state_16509__$1 = state_16509;
var statearr_16516_16674 = state_16509__$1;
(statearr_16516_16674[(2)] = inst_16505);

(statearr_16516_16674[(1)] = (3));


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
});})(__16665,c__16107__auto___16668,G__16496_16666,n__7387__auto___16664,jobs,results,process,async))
;
return ((function (__16665,switch__15993__auto__,c__16107__auto___16668,G__16496_16666,n__7387__auto___16664,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0 = (function (){
var statearr_16520 = [null,null,null,null,null,null,null];
(statearr_16520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__);

(statearr_16520[(1)] = (1));

return statearr_16520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1 = (function (state_16509){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_16509);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e16521){if((e16521 instanceof Object)){
var ex__15997__auto__ = e16521;
var statearr_16522_16675 = state_16509;
(statearr_16522_16675[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16509);

return cljs.core.cst$kw$recur;
} else {
throw e16521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__16676 = state_16509;
state_16509 = G__16676;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = function(state_16509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1.call(this,state_16509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__;
})()
;})(__16665,switch__15993__auto__,c__16107__auto___16668,G__16496_16666,n__7387__auto___16664,jobs,results,process,async))
})();
var state__16109__auto__ = (function (){var statearr_16523 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_16523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___16668);

return statearr_16523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(__16665,c__16107__auto___16668,G__16496_16666,n__7387__auto___16664,jobs,results,process,async))
);


break;
case "async":
var c__16107__auto___16677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16665,c__16107__auto___16677,G__16496_16666,n__7387__auto___16664,jobs,results,process,async){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (__16665,c__16107__auto___16677,G__16496_16666,n__7387__auto___16664,jobs,results,process,async){
return (function (state_16536){
var state_val_16537 = (state_16536[(1)]);
if((state_val_16537 === (1))){
var state_16536__$1 = state_16536;
var statearr_16538_16678 = state_16536__$1;
(statearr_16538_16678[(2)] = null);

(statearr_16538_16678[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16537 === (2))){
var state_16536__$1 = state_16536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16536__$1,(4),jobs);
} else {
if((state_val_16537 === (3))){
var inst_16534 = (state_16536[(2)]);
var state_16536__$1 = state_16536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16536__$1,inst_16534);
} else {
if((state_val_16537 === (4))){
var inst_16526 = (state_16536[(2)]);
var inst_16527 = async(inst_16526);
var state_16536__$1 = state_16536;
if(cljs.core.truth_(inst_16527)){
var statearr_16539_16679 = state_16536__$1;
(statearr_16539_16679[(1)] = (5));

} else {
var statearr_16540_16680 = state_16536__$1;
(statearr_16540_16680[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16537 === (5))){
var state_16536__$1 = state_16536;
var statearr_16541_16681 = state_16536__$1;
(statearr_16541_16681[(2)] = null);

(statearr_16541_16681[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16537 === (6))){
var state_16536__$1 = state_16536;
var statearr_16542_16682 = state_16536__$1;
(statearr_16542_16682[(2)] = null);

(statearr_16542_16682[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16537 === (7))){
var inst_16532 = (state_16536[(2)]);
var state_16536__$1 = state_16536;
var statearr_16543_16683 = state_16536__$1;
(statearr_16543_16683[(2)] = inst_16532);

(statearr_16543_16683[(1)] = (3));


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
});})(__16665,c__16107__auto___16677,G__16496_16666,n__7387__auto___16664,jobs,results,process,async))
;
return ((function (__16665,switch__15993__auto__,c__16107__auto___16677,G__16496_16666,n__7387__auto___16664,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0 = (function (){
var statearr_16547 = [null,null,null,null,null,null,null];
(statearr_16547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__);

(statearr_16547[(1)] = (1));

return statearr_16547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1 = (function (state_16536){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_16536);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e16548){if((e16548 instanceof Object)){
var ex__15997__auto__ = e16548;
var statearr_16549_16684 = state_16536;
(statearr_16549_16684[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16536);

return cljs.core.cst$kw$recur;
} else {
throw e16548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__16685 = state_16536;
state_16536 = G__16685;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = function(state_16536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1.call(this,state_16536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__;
})()
;})(__16665,switch__15993__auto__,c__16107__auto___16677,G__16496_16666,n__7387__auto___16664,jobs,results,process,async))
})();
var state__16109__auto__ = (function (){var statearr_16550 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_16550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___16677);

return statearr_16550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(__16665,c__16107__auto___16677,G__16496_16666,n__7387__auto___16664,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16686 = (__16665 + (1));
__16665 = G__16686;
continue;
} else {
}
break;
}

var c__16107__auto___16687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___16687,jobs,results,process,async){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___16687,jobs,results,process,async){
return (function (state_16572){
var state_val_16573 = (state_16572[(1)]);
if((state_val_16573 === (1))){
var state_16572__$1 = state_16572;
var statearr_16574_16688 = state_16572__$1;
(statearr_16574_16688[(2)] = null);

(statearr_16574_16688[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16573 === (2))){
var state_16572__$1 = state_16572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16572__$1,(4),from);
} else {
if((state_val_16573 === (3))){
var inst_16570 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16572__$1,inst_16570);
} else {
if((state_val_16573 === (4))){
var inst_16553 = (state_16572[(7)]);
var inst_16553__$1 = (state_16572[(2)]);
var inst_16554 = (inst_16553__$1 == null);
var state_16572__$1 = (function (){var statearr_16575 = state_16572;
(statearr_16575[(7)] = inst_16553__$1);

return statearr_16575;
})();
if(cljs.core.truth_(inst_16554)){
var statearr_16576_16689 = state_16572__$1;
(statearr_16576_16689[(1)] = (5));

} else {
var statearr_16577_16690 = state_16572__$1;
(statearr_16577_16690[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16573 === (5))){
var inst_16556 = cljs.core.async.close_BANG_(jobs);
var state_16572__$1 = state_16572;
var statearr_16578_16691 = state_16572__$1;
(statearr_16578_16691[(2)] = inst_16556);

(statearr_16578_16691[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16573 === (6))){
var inst_16558 = (state_16572[(8)]);
var inst_16553 = (state_16572[(7)]);
var inst_16558__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16559 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16560 = [inst_16553,inst_16558__$1];
var inst_16561 = (new cljs.core.PersistentVector(null,2,(5),inst_16559,inst_16560,null));
var state_16572__$1 = (function (){var statearr_16579 = state_16572;
(statearr_16579[(8)] = inst_16558__$1);

return statearr_16579;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16572__$1,(8),jobs,inst_16561);
} else {
if((state_val_16573 === (7))){
var inst_16568 = (state_16572[(2)]);
var state_16572__$1 = state_16572;
var statearr_16580_16692 = state_16572__$1;
(statearr_16580_16692[(2)] = inst_16568);

(statearr_16580_16692[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16573 === (8))){
var inst_16558 = (state_16572[(8)]);
var inst_16563 = (state_16572[(2)]);
var state_16572__$1 = (function (){var statearr_16581 = state_16572;
(statearr_16581[(9)] = inst_16563);

return statearr_16581;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16572__$1,(9),results,inst_16558);
} else {
if((state_val_16573 === (9))){
var inst_16565 = (state_16572[(2)]);
var state_16572__$1 = (function (){var statearr_16582 = state_16572;
(statearr_16582[(10)] = inst_16565);

return statearr_16582;
})();
var statearr_16583_16693 = state_16572__$1;
(statearr_16583_16693[(2)] = null);

(statearr_16583_16693[(1)] = (2));


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
});})(c__16107__auto___16687,jobs,results,process,async))
;
return ((function (switch__15993__auto__,c__16107__auto___16687,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0 = (function (){
var statearr_16587 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__);

(statearr_16587[(1)] = (1));

return statearr_16587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1 = (function (state_16572){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_16572);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e16588){if((e16588 instanceof Object)){
var ex__15997__auto__ = e16588;
var statearr_16589_16694 = state_16572;
(statearr_16589_16694[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16572);

return cljs.core.cst$kw$recur;
} else {
throw e16588;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__16695 = state_16572;
state_16572 = G__16695;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = function(state_16572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1.call(this,state_16572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___16687,jobs,results,process,async))
})();
var state__16109__auto__ = (function (){var statearr_16590 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_16590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___16687);

return statearr_16590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___16687,jobs,results,process,async))
);


var c__16107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto__,jobs,results,process,async){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto__,jobs,results,process,async){
return (function (state_16628){
var state_val_16629 = (state_16628[(1)]);
if((state_val_16629 === (7))){
var inst_16624 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
var statearr_16630_16696 = state_16628__$1;
(statearr_16630_16696[(2)] = inst_16624);

(statearr_16630_16696[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (20))){
var state_16628__$1 = state_16628;
var statearr_16631_16697 = state_16628__$1;
(statearr_16631_16697[(2)] = null);

(statearr_16631_16697[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (1))){
var state_16628__$1 = state_16628;
var statearr_16632_16698 = state_16628__$1;
(statearr_16632_16698[(2)] = null);

(statearr_16632_16698[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (4))){
var inst_16593 = (state_16628[(7)]);
var inst_16593__$1 = (state_16628[(2)]);
var inst_16594 = (inst_16593__$1 == null);
var state_16628__$1 = (function (){var statearr_16633 = state_16628;
(statearr_16633[(7)] = inst_16593__$1);

return statearr_16633;
})();
if(cljs.core.truth_(inst_16594)){
var statearr_16634_16699 = state_16628__$1;
(statearr_16634_16699[(1)] = (5));

} else {
var statearr_16635_16700 = state_16628__$1;
(statearr_16635_16700[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (15))){
var inst_16606 = (state_16628[(8)]);
var state_16628__$1 = state_16628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16628__$1,(18),to,inst_16606);
} else {
if((state_val_16629 === (21))){
var inst_16619 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
var statearr_16636_16701 = state_16628__$1;
(statearr_16636_16701[(2)] = inst_16619);

(statearr_16636_16701[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (13))){
var inst_16621 = (state_16628[(2)]);
var state_16628__$1 = (function (){var statearr_16637 = state_16628;
(statearr_16637[(9)] = inst_16621);

return statearr_16637;
})();
var statearr_16638_16702 = state_16628__$1;
(statearr_16638_16702[(2)] = null);

(statearr_16638_16702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (6))){
var inst_16593 = (state_16628[(7)]);
var state_16628__$1 = state_16628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16628__$1,(11),inst_16593);
} else {
if((state_val_16629 === (17))){
var inst_16614 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
if(cljs.core.truth_(inst_16614)){
var statearr_16639_16703 = state_16628__$1;
(statearr_16639_16703[(1)] = (19));

} else {
var statearr_16640_16704 = state_16628__$1;
(statearr_16640_16704[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (3))){
var inst_16626 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16628__$1,inst_16626);
} else {
if((state_val_16629 === (12))){
var inst_16603 = (state_16628[(10)]);
var state_16628__$1 = state_16628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16628__$1,(14),inst_16603);
} else {
if((state_val_16629 === (2))){
var state_16628__$1 = state_16628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16628__$1,(4),results);
} else {
if((state_val_16629 === (19))){
var state_16628__$1 = state_16628;
var statearr_16641_16705 = state_16628__$1;
(statearr_16641_16705[(2)] = null);

(statearr_16641_16705[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (11))){
var inst_16603 = (state_16628[(2)]);
var state_16628__$1 = (function (){var statearr_16642 = state_16628;
(statearr_16642[(10)] = inst_16603);

return statearr_16642;
})();
var statearr_16643_16706 = state_16628__$1;
(statearr_16643_16706[(2)] = null);

(statearr_16643_16706[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (9))){
var state_16628__$1 = state_16628;
var statearr_16644_16707 = state_16628__$1;
(statearr_16644_16707[(2)] = null);

(statearr_16644_16707[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (5))){
var state_16628__$1 = state_16628;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16645_16708 = state_16628__$1;
(statearr_16645_16708[(1)] = (8));

} else {
var statearr_16646_16709 = state_16628__$1;
(statearr_16646_16709[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (14))){
var inst_16606 = (state_16628[(8)]);
var inst_16608 = (state_16628[(11)]);
var inst_16606__$1 = (state_16628[(2)]);
var inst_16607 = (inst_16606__$1 == null);
var inst_16608__$1 = cljs.core.not(inst_16607);
var state_16628__$1 = (function (){var statearr_16647 = state_16628;
(statearr_16647[(8)] = inst_16606__$1);

(statearr_16647[(11)] = inst_16608__$1);

return statearr_16647;
})();
if(inst_16608__$1){
var statearr_16648_16710 = state_16628__$1;
(statearr_16648_16710[(1)] = (15));

} else {
var statearr_16649_16711 = state_16628__$1;
(statearr_16649_16711[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (16))){
var inst_16608 = (state_16628[(11)]);
var state_16628__$1 = state_16628;
var statearr_16650_16712 = state_16628__$1;
(statearr_16650_16712[(2)] = inst_16608);

(statearr_16650_16712[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (10))){
var inst_16600 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
var statearr_16651_16713 = state_16628__$1;
(statearr_16651_16713[(2)] = inst_16600);

(statearr_16651_16713[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (18))){
var inst_16611 = (state_16628[(2)]);
var state_16628__$1 = state_16628;
var statearr_16652_16714 = state_16628__$1;
(statearr_16652_16714[(2)] = inst_16611);

(statearr_16652_16714[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16629 === (8))){
var inst_16597 = cljs.core.async.close_BANG_(to);
var state_16628__$1 = state_16628;
var statearr_16653_16715 = state_16628__$1;
(statearr_16653_16715[(2)] = inst_16597);

(statearr_16653_16715[(1)] = (10));


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
});})(c__16107__auto__,jobs,results,process,async))
;
return ((function (switch__15993__auto__,c__16107__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0 = (function (){
var statearr_16657 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16657[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__);

(statearr_16657[(1)] = (1));

return statearr_16657;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1 = (function (state_16628){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_16628);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e16658){if((e16658 instanceof Object)){
var ex__15997__auto__ = e16658;
var statearr_16659_16716 = state_16628;
(statearr_16659_16716[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16628);

return cljs.core.cst$kw$recur;
} else {
throw e16658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__16717 = state_16628;
state_16628 = G__16717;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__ = function(state_16628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1.call(this,state_16628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto__,jobs,results,process,async))
})();
var state__16109__auto__ = (function (){var statearr_16660 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_16660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto__);

return statearr_16660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto__,jobs,results,process,async))
);

return c__16107__auto__;
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
var args16718 = [];
var len__7542__auto___16721 = arguments.length;
var i__7543__auto___16722 = (0);
while(true){
if((i__7543__auto___16722 < len__7542__auto___16721)){
args16718.push((arguments[i__7543__auto___16722]));

var G__16723 = (i__7543__auto___16722 + (1));
i__7543__auto___16722 = G__16723;
continue;
} else {
}
break;
}

var G__16720 = args16718.length;
switch (G__16720) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16718.length)].join('')));

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
var args16725 = [];
var len__7542__auto___16728 = arguments.length;
var i__7543__auto___16729 = (0);
while(true){
if((i__7543__auto___16729 < len__7542__auto___16728)){
args16725.push((arguments[i__7543__auto___16729]));

var G__16730 = (i__7543__auto___16729 + (1));
i__7543__auto___16729 = G__16730;
continue;
} else {
}
break;
}

var G__16727 = args16725.length;
switch (G__16727) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16725.length)].join('')));

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
var args16732 = [];
var len__7542__auto___16785 = arguments.length;
var i__7543__auto___16786 = (0);
while(true){
if((i__7543__auto___16786 < len__7542__auto___16785)){
args16732.push((arguments[i__7543__auto___16786]));

var G__16787 = (i__7543__auto___16786 + (1));
i__7543__auto___16786 = G__16787;
continue;
} else {
}
break;
}

var G__16734 = args16732.length;
switch (G__16734) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16732.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16107__auto___16789 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___16789,tc,fc){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___16789,tc,fc){
return (function (state_16760){
var state_val_16761 = (state_16760[(1)]);
if((state_val_16761 === (7))){
var inst_16756 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16762_16790 = state_16760__$1;
(statearr_16762_16790[(2)] = inst_16756);

(statearr_16762_16790[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (1))){
var state_16760__$1 = state_16760;
var statearr_16763_16791 = state_16760__$1;
(statearr_16763_16791[(2)] = null);

(statearr_16763_16791[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (4))){
var inst_16737 = (state_16760[(7)]);
var inst_16737__$1 = (state_16760[(2)]);
var inst_16738 = (inst_16737__$1 == null);
var state_16760__$1 = (function (){var statearr_16764 = state_16760;
(statearr_16764[(7)] = inst_16737__$1);

return statearr_16764;
})();
if(cljs.core.truth_(inst_16738)){
var statearr_16765_16792 = state_16760__$1;
(statearr_16765_16792[(1)] = (5));

} else {
var statearr_16766_16793 = state_16760__$1;
(statearr_16766_16793[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (13))){
var state_16760__$1 = state_16760;
var statearr_16767_16794 = state_16760__$1;
(statearr_16767_16794[(2)] = null);

(statearr_16767_16794[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (6))){
var inst_16737 = (state_16760[(7)]);
var inst_16743 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16737) : p.call(null,inst_16737));
var state_16760__$1 = state_16760;
if(cljs.core.truth_(inst_16743)){
var statearr_16768_16795 = state_16760__$1;
(statearr_16768_16795[(1)] = (9));

} else {
var statearr_16769_16796 = state_16760__$1;
(statearr_16769_16796[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (3))){
var inst_16758 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16760__$1,inst_16758);
} else {
if((state_val_16761 === (12))){
var state_16760__$1 = state_16760;
var statearr_16770_16797 = state_16760__$1;
(statearr_16770_16797[(2)] = null);

(statearr_16770_16797[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (2))){
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16760__$1,(4),ch);
} else {
if((state_val_16761 === (11))){
var inst_16737 = (state_16760[(7)]);
var inst_16747 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16760__$1,(8),inst_16747,inst_16737);
} else {
if((state_val_16761 === (9))){
var state_16760__$1 = state_16760;
var statearr_16771_16798 = state_16760__$1;
(statearr_16771_16798[(2)] = tc);

(statearr_16771_16798[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (5))){
var inst_16740 = cljs.core.async.close_BANG_(tc);
var inst_16741 = cljs.core.async.close_BANG_(fc);
var state_16760__$1 = (function (){var statearr_16772 = state_16760;
(statearr_16772[(8)] = inst_16740);

return statearr_16772;
})();
var statearr_16773_16799 = state_16760__$1;
(statearr_16773_16799[(2)] = inst_16741);

(statearr_16773_16799[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (14))){
var inst_16754 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
var statearr_16774_16800 = state_16760__$1;
(statearr_16774_16800[(2)] = inst_16754);

(statearr_16774_16800[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (10))){
var state_16760__$1 = state_16760;
var statearr_16775_16801 = state_16760__$1;
(statearr_16775_16801[(2)] = fc);

(statearr_16775_16801[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16761 === (8))){
var inst_16749 = (state_16760[(2)]);
var state_16760__$1 = state_16760;
if(cljs.core.truth_(inst_16749)){
var statearr_16776_16802 = state_16760__$1;
(statearr_16776_16802[(1)] = (12));

} else {
var statearr_16777_16803 = state_16760__$1;
(statearr_16777_16803[(1)] = (13));

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
});})(c__16107__auto___16789,tc,fc))
;
return ((function (switch__15993__auto__,c__16107__auto___16789,tc,fc){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_16781 = [null,null,null,null,null,null,null,null,null];
(statearr_16781[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_16781[(1)] = (1));

return statearr_16781;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_16760){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_16760);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e16782){if((e16782 instanceof Object)){
var ex__15997__auto__ = e16782;
var statearr_16783_16804 = state_16760;
(statearr_16783_16804[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16760);

return cljs.core.cst$kw$recur;
} else {
throw e16782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__16805 = state_16760;
state_16760 = G__16805;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_16760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_16760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___16789,tc,fc))
})();
var state__16109__auto__ = (function (){var statearr_16784 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_16784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___16789);

return statearr_16784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___16789,tc,fc))
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
var c__16107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto__){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto__){
return (function (state_16869){
var state_val_16870 = (state_16869[(1)]);
if((state_val_16870 === (7))){
var inst_16865 = (state_16869[(2)]);
var state_16869__$1 = state_16869;
var statearr_16871_16892 = state_16869__$1;
(statearr_16871_16892[(2)] = inst_16865);

(statearr_16871_16892[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16870 === (1))){
var inst_16849 = init;
var state_16869__$1 = (function (){var statearr_16872 = state_16869;
(statearr_16872[(7)] = inst_16849);

return statearr_16872;
})();
var statearr_16873_16893 = state_16869__$1;
(statearr_16873_16893[(2)] = null);

(statearr_16873_16893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16870 === (4))){
var inst_16852 = (state_16869[(8)]);
var inst_16852__$1 = (state_16869[(2)]);
var inst_16853 = (inst_16852__$1 == null);
var state_16869__$1 = (function (){var statearr_16874 = state_16869;
(statearr_16874[(8)] = inst_16852__$1);

return statearr_16874;
})();
if(cljs.core.truth_(inst_16853)){
var statearr_16875_16894 = state_16869__$1;
(statearr_16875_16894[(1)] = (5));

} else {
var statearr_16876_16895 = state_16869__$1;
(statearr_16876_16895[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16870 === (6))){
var inst_16852 = (state_16869[(8)]);
var inst_16849 = (state_16869[(7)]);
var inst_16856 = (state_16869[(9)]);
var inst_16856__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16849,inst_16852) : f.call(null,inst_16849,inst_16852));
var inst_16857 = cljs.core.reduced_QMARK_(inst_16856__$1);
var state_16869__$1 = (function (){var statearr_16877 = state_16869;
(statearr_16877[(9)] = inst_16856__$1);

return statearr_16877;
})();
if(inst_16857){
var statearr_16878_16896 = state_16869__$1;
(statearr_16878_16896[(1)] = (8));

} else {
var statearr_16879_16897 = state_16869__$1;
(statearr_16879_16897[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16870 === (3))){
var inst_16867 = (state_16869[(2)]);
var state_16869__$1 = state_16869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16869__$1,inst_16867);
} else {
if((state_val_16870 === (2))){
var state_16869__$1 = state_16869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16869__$1,(4),ch);
} else {
if((state_val_16870 === (9))){
var inst_16856 = (state_16869[(9)]);
var inst_16849 = inst_16856;
var state_16869__$1 = (function (){var statearr_16880 = state_16869;
(statearr_16880[(7)] = inst_16849);

return statearr_16880;
})();
var statearr_16881_16898 = state_16869__$1;
(statearr_16881_16898[(2)] = null);

(statearr_16881_16898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16870 === (5))){
var inst_16849 = (state_16869[(7)]);
var state_16869__$1 = state_16869;
var statearr_16882_16899 = state_16869__$1;
(statearr_16882_16899[(2)] = inst_16849);

(statearr_16882_16899[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16870 === (10))){
var inst_16863 = (state_16869[(2)]);
var state_16869__$1 = state_16869;
var statearr_16883_16900 = state_16869__$1;
(statearr_16883_16900[(2)] = inst_16863);

(statearr_16883_16900[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16870 === (8))){
var inst_16856 = (state_16869[(9)]);
var inst_16859 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16856) : cljs.core.deref.call(null,inst_16856));
var state_16869__$1 = state_16869;
var statearr_16884_16901 = state_16869__$1;
(statearr_16884_16901[(2)] = inst_16859);

(statearr_16884_16901[(1)] = (10));


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
});})(c__16107__auto__))
;
return ((function (switch__15993__auto__,c__16107__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15994__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15994__auto____0 = (function (){
var statearr_16888 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16888[(0)] = cljs$core$async$reduce_$_state_machine__15994__auto__);

(statearr_16888[(1)] = (1));

return statearr_16888;
});
var cljs$core$async$reduce_$_state_machine__15994__auto____1 = (function (state_16869){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_16869);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e16889){if((e16889 instanceof Object)){
var ex__15997__auto__ = e16889;
var statearr_16890_16902 = state_16869;
(statearr_16890_16902[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16869);

return cljs.core.cst$kw$recur;
} else {
throw e16889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__16903 = state_16869;
state_16869 = G__16903;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15994__auto__ = function(state_16869){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15994__auto____1.call(this,state_16869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15994__auto____0;
cljs$core$async$reduce_$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15994__auto____1;
return cljs$core$async$reduce_$_state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto__))
})();
var state__16109__auto__ = (function (){var statearr_16891 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_16891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto__);

return statearr_16891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto__))
);

return c__16107__auto__;
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
var args16904 = [];
var len__7542__auto___16956 = arguments.length;
var i__7543__auto___16957 = (0);
while(true){
if((i__7543__auto___16957 < len__7542__auto___16956)){
args16904.push((arguments[i__7543__auto___16957]));

var G__16958 = (i__7543__auto___16957 + (1));
i__7543__auto___16957 = G__16958;
continue;
} else {
}
break;
}

var G__16906 = args16904.length;
switch (G__16906) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16904.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto__){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto__){
return (function (state_16931){
var state_val_16932 = (state_16931[(1)]);
if((state_val_16932 === (7))){
var inst_16913 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
var statearr_16933_16960 = state_16931__$1;
(statearr_16933_16960[(2)] = inst_16913);

(statearr_16933_16960[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (1))){
var inst_16907 = cljs.core.seq(coll);
var inst_16908 = inst_16907;
var state_16931__$1 = (function (){var statearr_16934 = state_16931;
(statearr_16934[(7)] = inst_16908);

return statearr_16934;
})();
var statearr_16935_16961 = state_16931__$1;
(statearr_16935_16961[(2)] = null);

(statearr_16935_16961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (4))){
var inst_16908 = (state_16931[(7)]);
var inst_16911 = cljs.core.first(inst_16908);
var state_16931__$1 = state_16931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16931__$1,(7),ch,inst_16911);
} else {
if((state_val_16932 === (13))){
var inst_16925 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
var statearr_16936_16962 = state_16931__$1;
(statearr_16936_16962[(2)] = inst_16925);

(statearr_16936_16962[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (6))){
var inst_16916 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
if(cljs.core.truth_(inst_16916)){
var statearr_16937_16963 = state_16931__$1;
(statearr_16937_16963[(1)] = (8));

} else {
var statearr_16938_16964 = state_16931__$1;
(statearr_16938_16964[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (3))){
var inst_16929 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16931__$1,inst_16929);
} else {
if((state_val_16932 === (12))){
var state_16931__$1 = state_16931;
var statearr_16939_16965 = state_16931__$1;
(statearr_16939_16965[(2)] = null);

(statearr_16939_16965[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (2))){
var inst_16908 = (state_16931[(7)]);
var state_16931__$1 = state_16931;
if(cljs.core.truth_(inst_16908)){
var statearr_16940_16966 = state_16931__$1;
(statearr_16940_16966[(1)] = (4));

} else {
var statearr_16941_16967 = state_16931__$1;
(statearr_16941_16967[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (11))){
var inst_16922 = cljs.core.async.close_BANG_(ch);
var state_16931__$1 = state_16931;
var statearr_16942_16968 = state_16931__$1;
(statearr_16942_16968[(2)] = inst_16922);

(statearr_16942_16968[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (9))){
var state_16931__$1 = state_16931;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16943_16969 = state_16931__$1;
(statearr_16943_16969[(1)] = (11));

} else {
var statearr_16944_16970 = state_16931__$1;
(statearr_16944_16970[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (5))){
var inst_16908 = (state_16931[(7)]);
var state_16931__$1 = state_16931;
var statearr_16945_16971 = state_16931__$1;
(statearr_16945_16971[(2)] = inst_16908);

(statearr_16945_16971[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (10))){
var inst_16927 = (state_16931[(2)]);
var state_16931__$1 = state_16931;
var statearr_16946_16972 = state_16931__$1;
(statearr_16946_16972[(2)] = inst_16927);

(statearr_16946_16972[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16932 === (8))){
var inst_16908 = (state_16931[(7)]);
var inst_16918 = cljs.core.next(inst_16908);
var inst_16908__$1 = inst_16918;
var state_16931__$1 = (function (){var statearr_16947 = state_16931;
(statearr_16947[(7)] = inst_16908__$1);

return statearr_16947;
})();
var statearr_16948_16973 = state_16931__$1;
(statearr_16948_16973[(2)] = null);

(statearr_16948_16973[(1)] = (2));


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
});})(c__16107__auto__))
;
return ((function (switch__15993__auto__,c__16107__auto__){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_16952 = [null,null,null,null,null,null,null,null];
(statearr_16952[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_16952[(1)] = (1));

return statearr_16952;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_16931){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_16931);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e16953){if((e16953 instanceof Object)){
var ex__15997__auto__ = e16953;
var statearr_16954_16974 = state_16931;
(statearr_16954_16974[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16931);

return cljs.core.cst$kw$recur;
} else {
throw e16953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__16975 = state_16931;
state_16931 = G__16975;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_16931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_16931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto__))
})();
var state__16109__auto__ = (function (){var statearr_16955 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_16955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto__);

return statearr_16955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto__))
);

return c__16107__auto__;
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
var cs = (function (){var G__17200 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17200) : cljs.core.atom.call(null,G__17200));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17201 = (function (mult,ch,cs,meta17202){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17202 = meta17202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17203,meta17202__$1){
var self__ = this;
var _17203__$1 = this;
return (new cljs.core.async.t_cljs$core$async17201(self__.mult,self__.ch,self__.cs,meta17202__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17203){
var self__ = this;
var _17203__$1 = this;
return self__.meta17202;
});})(cs))
;

cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17201.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17204_17424 = self__.cs;
var G__17205_17425 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17204_17424,G__17205_17425) : cljs.core.reset_BANG_.call(null,G__17204_17424,G__17205_17425));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17201.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17202], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17201";

cljs.core.async.t_cljs$core$async17201.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17201");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17201 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17201(mult__$1,ch__$1,cs__$1,meta17202){
return (new cljs.core.async.t_cljs$core$async17201(mult__$1,ch__$1,cs__$1,meta17202));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17201(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16107__auto___17426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___17426,cs,m,dchan,dctr,done){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___17426,cs,m,dchan,dctr,done){
return (function (state_17336){
var state_val_17337 = (state_17336[(1)]);
if((state_val_17337 === (7))){
var inst_17332 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17338_17427 = state_17336__$1;
(statearr_17338_17427[(2)] = inst_17332);

(statearr_17338_17427[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (20))){
var inst_17237 = (state_17336[(7)]);
var inst_17247 = cljs.core.first(inst_17237);
var inst_17248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17247,(0),null);
var inst_17249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17247,(1),null);
var state_17336__$1 = (function (){var statearr_17339 = state_17336;
(statearr_17339[(8)] = inst_17248);

return statearr_17339;
})();
if(cljs.core.truth_(inst_17249)){
var statearr_17340_17428 = state_17336__$1;
(statearr_17340_17428[(1)] = (22));

} else {
var statearr_17341_17429 = state_17336__$1;
(statearr_17341_17429[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (27))){
var inst_17277 = (state_17336[(9)]);
var inst_17279 = (state_17336[(10)]);
var inst_17284 = (state_17336[(11)]);
var inst_17208 = (state_17336[(12)]);
var inst_17284__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17277,inst_17279);
var inst_17285 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17284__$1,inst_17208,done);
var state_17336__$1 = (function (){var statearr_17342 = state_17336;
(statearr_17342[(11)] = inst_17284__$1);

return statearr_17342;
})();
if(cljs.core.truth_(inst_17285)){
var statearr_17343_17430 = state_17336__$1;
(statearr_17343_17430[(1)] = (30));

} else {
var statearr_17344_17431 = state_17336__$1;
(statearr_17344_17431[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (1))){
var state_17336__$1 = state_17336;
var statearr_17345_17432 = state_17336__$1;
(statearr_17345_17432[(2)] = null);

(statearr_17345_17432[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (24))){
var inst_17237 = (state_17336[(7)]);
var inst_17254 = (state_17336[(2)]);
var inst_17255 = cljs.core.next(inst_17237);
var inst_17217 = inst_17255;
var inst_17218 = null;
var inst_17219 = (0);
var inst_17220 = (0);
var state_17336__$1 = (function (){var statearr_17346 = state_17336;
(statearr_17346[(13)] = inst_17254);

(statearr_17346[(14)] = inst_17218);

(statearr_17346[(15)] = inst_17217);

(statearr_17346[(16)] = inst_17219);

(statearr_17346[(17)] = inst_17220);

return statearr_17346;
})();
var statearr_17347_17433 = state_17336__$1;
(statearr_17347_17433[(2)] = null);

(statearr_17347_17433[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (39))){
var state_17336__$1 = state_17336;
var statearr_17351_17434 = state_17336__$1;
(statearr_17351_17434[(2)] = null);

(statearr_17351_17434[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (4))){
var inst_17208 = (state_17336[(12)]);
var inst_17208__$1 = (state_17336[(2)]);
var inst_17209 = (inst_17208__$1 == null);
var state_17336__$1 = (function (){var statearr_17352 = state_17336;
(statearr_17352[(12)] = inst_17208__$1);

return statearr_17352;
})();
if(cljs.core.truth_(inst_17209)){
var statearr_17353_17435 = state_17336__$1;
(statearr_17353_17435[(1)] = (5));

} else {
var statearr_17354_17436 = state_17336__$1;
(statearr_17354_17436[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (15))){
var inst_17218 = (state_17336[(14)]);
var inst_17217 = (state_17336[(15)]);
var inst_17219 = (state_17336[(16)]);
var inst_17220 = (state_17336[(17)]);
var inst_17233 = (state_17336[(2)]);
var inst_17234 = (inst_17220 + (1));
var tmp17348 = inst_17218;
var tmp17349 = inst_17217;
var tmp17350 = inst_17219;
var inst_17217__$1 = tmp17349;
var inst_17218__$1 = tmp17348;
var inst_17219__$1 = tmp17350;
var inst_17220__$1 = inst_17234;
var state_17336__$1 = (function (){var statearr_17355 = state_17336;
(statearr_17355[(14)] = inst_17218__$1);

(statearr_17355[(15)] = inst_17217__$1);

(statearr_17355[(18)] = inst_17233);

(statearr_17355[(16)] = inst_17219__$1);

(statearr_17355[(17)] = inst_17220__$1);

return statearr_17355;
})();
var statearr_17356_17437 = state_17336__$1;
(statearr_17356_17437[(2)] = null);

(statearr_17356_17437[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (21))){
var inst_17258 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17360_17438 = state_17336__$1;
(statearr_17360_17438[(2)] = inst_17258);

(statearr_17360_17438[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (31))){
var inst_17284 = (state_17336[(11)]);
var inst_17288 = done(null);
var inst_17289 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17284);
var state_17336__$1 = (function (){var statearr_17361 = state_17336;
(statearr_17361[(19)] = inst_17288);

return statearr_17361;
})();
var statearr_17362_17439 = state_17336__$1;
(statearr_17362_17439[(2)] = inst_17289);

(statearr_17362_17439[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (32))){
var inst_17277 = (state_17336[(9)]);
var inst_17276 = (state_17336[(20)]);
var inst_17279 = (state_17336[(10)]);
var inst_17278 = (state_17336[(21)]);
var inst_17291 = (state_17336[(2)]);
var inst_17292 = (inst_17279 + (1));
var tmp17357 = inst_17277;
var tmp17358 = inst_17276;
var tmp17359 = inst_17278;
var inst_17276__$1 = tmp17358;
var inst_17277__$1 = tmp17357;
var inst_17278__$1 = tmp17359;
var inst_17279__$1 = inst_17292;
var state_17336__$1 = (function (){var statearr_17363 = state_17336;
(statearr_17363[(9)] = inst_17277__$1);

(statearr_17363[(20)] = inst_17276__$1);

(statearr_17363[(10)] = inst_17279__$1);

(statearr_17363[(21)] = inst_17278__$1);

(statearr_17363[(22)] = inst_17291);

return statearr_17363;
})();
var statearr_17364_17440 = state_17336__$1;
(statearr_17364_17440[(2)] = null);

(statearr_17364_17440[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (40))){
var inst_17304 = (state_17336[(23)]);
var inst_17308 = done(null);
var inst_17309 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17304);
var state_17336__$1 = (function (){var statearr_17365 = state_17336;
(statearr_17365[(24)] = inst_17308);

return statearr_17365;
})();
var statearr_17366_17441 = state_17336__$1;
(statearr_17366_17441[(2)] = inst_17309);

(statearr_17366_17441[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (33))){
var inst_17295 = (state_17336[(25)]);
var inst_17297 = cljs.core.chunked_seq_QMARK_(inst_17295);
var state_17336__$1 = state_17336;
if(inst_17297){
var statearr_17367_17442 = state_17336__$1;
(statearr_17367_17442[(1)] = (36));

} else {
var statearr_17368_17443 = state_17336__$1;
(statearr_17368_17443[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (13))){
var inst_17227 = (state_17336[(26)]);
var inst_17230 = cljs.core.async.close_BANG_(inst_17227);
var state_17336__$1 = state_17336;
var statearr_17369_17444 = state_17336__$1;
(statearr_17369_17444[(2)] = inst_17230);

(statearr_17369_17444[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (22))){
var inst_17248 = (state_17336[(8)]);
var inst_17251 = cljs.core.async.close_BANG_(inst_17248);
var state_17336__$1 = state_17336;
var statearr_17370_17445 = state_17336__$1;
(statearr_17370_17445[(2)] = inst_17251);

(statearr_17370_17445[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (36))){
var inst_17295 = (state_17336[(25)]);
var inst_17299 = cljs.core.chunk_first(inst_17295);
var inst_17300 = cljs.core.chunk_rest(inst_17295);
var inst_17301 = cljs.core.count(inst_17299);
var inst_17276 = inst_17300;
var inst_17277 = inst_17299;
var inst_17278 = inst_17301;
var inst_17279 = (0);
var state_17336__$1 = (function (){var statearr_17371 = state_17336;
(statearr_17371[(9)] = inst_17277);

(statearr_17371[(20)] = inst_17276);

(statearr_17371[(10)] = inst_17279);

(statearr_17371[(21)] = inst_17278);

return statearr_17371;
})();
var statearr_17372_17446 = state_17336__$1;
(statearr_17372_17446[(2)] = null);

(statearr_17372_17446[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (41))){
var inst_17295 = (state_17336[(25)]);
var inst_17311 = (state_17336[(2)]);
var inst_17312 = cljs.core.next(inst_17295);
var inst_17276 = inst_17312;
var inst_17277 = null;
var inst_17278 = (0);
var inst_17279 = (0);
var state_17336__$1 = (function (){var statearr_17373 = state_17336;
(statearr_17373[(9)] = inst_17277);

(statearr_17373[(20)] = inst_17276);

(statearr_17373[(27)] = inst_17311);

(statearr_17373[(10)] = inst_17279);

(statearr_17373[(21)] = inst_17278);

return statearr_17373;
})();
var statearr_17374_17447 = state_17336__$1;
(statearr_17374_17447[(2)] = null);

(statearr_17374_17447[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (43))){
var state_17336__$1 = state_17336;
var statearr_17375_17448 = state_17336__$1;
(statearr_17375_17448[(2)] = null);

(statearr_17375_17448[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (29))){
var inst_17320 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17376_17449 = state_17336__$1;
(statearr_17376_17449[(2)] = inst_17320);

(statearr_17376_17449[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (44))){
var inst_17329 = (state_17336[(2)]);
var state_17336__$1 = (function (){var statearr_17377 = state_17336;
(statearr_17377[(28)] = inst_17329);

return statearr_17377;
})();
var statearr_17378_17450 = state_17336__$1;
(statearr_17378_17450[(2)] = null);

(statearr_17378_17450[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (6))){
var inst_17268 = (state_17336[(29)]);
var inst_17267 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17268__$1 = cljs.core.keys(inst_17267);
var inst_17269 = cljs.core.count(inst_17268__$1);
var inst_17270 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17269) : cljs.core.reset_BANG_.call(null,dctr,inst_17269));
var inst_17275 = cljs.core.seq(inst_17268__$1);
var inst_17276 = inst_17275;
var inst_17277 = null;
var inst_17278 = (0);
var inst_17279 = (0);
var state_17336__$1 = (function (){var statearr_17379 = state_17336;
(statearr_17379[(9)] = inst_17277);

(statearr_17379[(30)] = inst_17270);

(statearr_17379[(20)] = inst_17276);

(statearr_17379[(10)] = inst_17279);

(statearr_17379[(21)] = inst_17278);

(statearr_17379[(29)] = inst_17268__$1);

return statearr_17379;
})();
var statearr_17380_17451 = state_17336__$1;
(statearr_17380_17451[(2)] = null);

(statearr_17380_17451[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (28))){
var inst_17295 = (state_17336[(25)]);
var inst_17276 = (state_17336[(20)]);
var inst_17295__$1 = cljs.core.seq(inst_17276);
var state_17336__$1 = (function (){var statearr_17381 = state_17336;
(statearr_17381[(25)] = inst_17295__$1);

return statearr_17381;
})();
if(inst_17295__$1){
var statearr_17382_17452 = state_17336__$1;
(statearr_17382_17452[(1)] = (33));

} else {
var statearr_17383_17453 = state_17336__$1;
(statearr_17383_17453[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (25))){
var inst_17279 = (state_17336[(10)]);
var inst_17278 = (state_17336[(21)]);
var inst_17281 = (inst_17279 < inst_17278);
var inst_17282 = inst_17281;
var state_17336__$1 = state_17336;
if(cljs.core.truth_(inst_17282)){
var statearr_17384_17454 = state_17336__$1;
(statearr_17384_17454[(1)] = (27));

} else {
var statearr_17385_17455 = state_17336__$1;
(statearr_17385_17455[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (34))){
var state_17336__$1 = state_17336;
var statearr_17386_17456 = state_17336__$1;
(statearr_17386_17456[(2)] = null);

(statearr_17386_17456[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (17))){
var state_17336__$1 = state_17336;
var statearr_17387_17457 = state_17336__$1;
(statearr_17387_17457[(2)] = null);

(statearr_17387_17457[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (3))){
var inst_17334 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17336__$1,inst_17334);
} else {
if((state_val_17337 === (12))){
var inst_17263 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17388_17458 = state_17336__$1;
(statearr_17388_17458[(2)] = inst_17263);

(statearr_17388_17458[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (2))){
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17336__$1,(4),ch);
} else {
if((state_val_17337 === (23))){
var state_17336__$1 = state_17336;
var statearr_17389_17459 = state_17336__$1;
(statearr_17389_17459[(2)] = null);

(statearr_17389_17459[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (35))){
var inst_17318 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17390_17460 = state_17336__$1;
(statearr_17390_17460[(2)] = inst_17318);

(statearr_17390_17460[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (19))){
var inst_17237 = (state_17336[(7)]);
var inst_17241 = cljs.core.chunk_first(inst_17237);
var inst_17242 = cljs.core.chunk_rest(inst_17237);
var inst_17243 = cljs.core.count(inst_17241);
var inst_17217 = inst_17242;
var inst_17218 = inst_17241;
var inst_17219 = inst_17243;
var inst_17220 = (0);
var state_17336__$1 = (function (){var statearr_17391 = state_17336;
(statearr_17391[(14)] = inst_17218);

(statearr_17391[(15)] = inst_17217);

(statearr_17391[(16)] = inst_17219);

(statearr_17391[(17)] = inst_17220);

return statearr_17391;
})();
var statearr_17392_17461 = state_17336__$1;
(statearr_17392_17461[(2)] = null);

(statearr_17392_17461[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (11))){
var inst_17217 = (state_17336[(15)]);
var inst_17237 = (state_17336[(7)]);
var inst_17237__$1 = cljs.core.seq(inst_17217);
var state_17336__$1 = (function (){var statearr_17393 = state_17336;
(statearr_17393[(7)] = inst_17237__$1);

return statearr_17393;
})();
if(inst_17237__$1){
var statearr_17394_17462 = state_17336__$1;
(statearr_17394_17462[(1)] = (16));

} else {
var statearr_17395_17463 = state_17336__$1;
(statearr_17395_17463[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (9))){
var inst_17265 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17396_17464 = state_17336__$1;
(statearr_17396_17464[(2)] = inst_17265);

(statearr_17396_17464[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (5))){
var inst_17215 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17216 = cljs.core.seq(inst_17215);
var inst_17217 = inst_17216;
var inst_17218 = null;
var inst_17219 = (0);
var inst_17220 = (0);
var state_17336__$1 = (function (){var statearr_17397 = state_17336;
(statearr_17397[(14)] = inst_17218);

(statearr_17397[(15)] = inst_17217);

(statearr_17397[(16)] = inst_17219);

(statearr_17397[(17)] = inst_17220);

return statearr_17397;
})();
var statearr_17398_17465 = state_17336__$1;
(statearr_17398_17465[(2)] = null);

(statearr_17398_17465[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (14))){
var state_17336__$1 = state_17336;
var statearr_17399_17466 = state_17336__$1;
(statearr_17399_17466[(2)] = null);

(statearr_17399_17466[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (45))){
var inst_17326 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17400_17467 = state_17336__$1;
(statearr_17400_17467[(2)] = inst_17326);

(statearr_17400_17467[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (26))){
var inst_17268 = (state_17336[(29)]);
var inst_17322 = (state_17336[(2)]);
var inst_17323 = cljs.core.seq(inst_17268);
var state_17336__$1 = (function (){var statearr_17401 = state_17336;
(statearr_17401[(31)] = inst_17322);

return statearr_17401;
})();
if(inst_17323){
var statearr_17402_17468 = state_17336__$1;
(statearr_17402_17468[(1)] = (42));

} else {
var statearr_17403_17469 = state_17336__$1;
(statearr_17403_17469[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (16))){
var inst_17237 = (state_17336[(7)]);
var inst_17239 = cljs.core.chunked_seq_QMARK_(inst_17237);
var state_17336__$1 = state_17336;
if(inst_17239){
var statearr_17404_17470 = state_17336__$1;
(statearr_17404_17470[(1)] = (19));

} else {
var statearr_17405_17471 = state_17336__$1;
(statearr_17405_17471[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (38))){
var inst_17315 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17406_17472 = state_17336__$1;
(statearr_17406_17472[(2)] = inst_17315);

(statearr_17406_17472[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (30))){
var state_17336__$1 = state_17336;
var statearr_17407_17473 = state_17336__$1;
(statearr_17407_17473[(2)] = null);

(statearr_17407_17473[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (10))){
var inst_17218 = (state_17336[(14)]);
var inst_17220 = (state_17336[(17)]);
var inst_17226 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17218,inst_17220);
var inst_17227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17226,(0),null);
var inst_17228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17226,(1),null);
var state_17336__$1 = (function (){var statearr_17408 = state_17336;
(statearr_17408[(26)] = inst_17227);

return statearr_17408;
})();
if(cljs.core.truth_(inst_17228)){
var statearr_17409_17474 = state_17336__$1;
(statearr_17409_17474[(1)] = (13));

} else {
var statearr_17410_17475 = state_17336__$1;
(statearr_17410_17475[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (18))){
var inst_17261 = (state_17336[(2)]);
var state_17336__$1 = state_17336;
var statearr_17411_17476 = state_17336__$1;
(statearr_17411_17476[(2)] = inst_17261);

(statearr_17411_17476[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (42))){
var state_17336__$1 = state_17336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17336__$1,(45),dchan);
} else {
if((state_val_17337 === (37))){
var inst_17295 = (state_17336[(25)]);
var inst_17304 = (state_17336[(23)]);
var inst_17208 = (state_17336[(12)]);
var inst_17304__$1 = cljs.core.first(inst_17295);
var inst_17305 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17304__$1,inst_17208,done);
var state_17336__$1 = (function (){var statearr_17412 = state_17336;
(statearr_17412[(23)] = inst_17304__$1);

return statearr_17412;
})();
if(cljs.core.truth_(inst_17305)){
var statearr_17413_17477 = state_17336__$1;
(statearr_17413_17477[(1)] = (39));

} else {
var statearr_17414_17478 = state_17336__$1;
(statearr_17414_17478[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17337 === (8))){
var inst_17219 = (state_17336[(16)]);
var inst_17220 = (state_17336[(17)]);
var inst_17222 = (inst_17220 < inst_17219);
var inst_17223 = inst_17222;
var state_17336__$1 = state_17336;
if(cljs.core.truth_(inst_17223)){
var statearr_17415_17479 = state_17336__$1;
(statearr_17415_17479[(1)] = (10));

} else {
var statearr_17416_17480 = state_17336__$1;
(statearr_17416_17480[(1)] = (11));

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
});})(c__16107__auto___17426,cs,m,dchan,dctr,done))
;
return ((function (switch__15993__auto__,c__16107__auto___17426,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15994__auto__ = null;
var cljs$core$async$mult_$_state_machine__15994__auto____0 = (function (){
var statearr_17420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17420[(0)] = cljs$core$async$mult_$_state_machine__15994__auto__);

(statearr_17420[(1)] = (1));

return statearr_17420;
});
var cljs$core$async$mult_$_state_machine__15994__auto____1 = (function (state_17336){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_17336);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e17421){if((e17421 instanceof Object)){
var ex__15997__auto__ = e17421;
var statearr_17422_17481 = state_17336;
(statearr_17422_17481[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17336);

return cljs.core.cst$kw$recur;
} else {
throw e17421;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__17482 = state_17336;
state_17336 = G__17482;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15994__auto__ = function(state_17336){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15994__auto____1.call(this,state_17336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15994__auto____0;
cljs$core$async$mult_$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15994__auto____1;
return cljs$core$async$mult_$_state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___17426,cs,m,dchan,dctr,done))
})();
var state__16109__auto__ = (function (){var statearr_17423 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_17423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___17426);

return statearr_17423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___17426,cs,m,dchan,dctr,done))
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
var args17483 = [];
var len__7542__auto___17486 = arguments.length;
var i__7543__auto___17487 = (0);
while(true){
if((i__7543__auto___17487 < len__7542__auto___17486)){
args17483.push((arguments[i__7543__auto___17487]));

var G__17488 = (i__7543__auto___17487 + (1));
i__7543__auto___17487 = G__17488;
continue;
} else {
}
break;
}

var G__17485 = args17483.length;
switch (G__17485) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17483.length)].join('')));

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
var len__7542__auto___17500 = arguments.length;
var i__7543__auto___17501 = (0);
while(true){
if((i__7543__auto___17501 < len__7542__auto___17500)){
args__7549__auto__.push((arguments[i__7543__auto___17501]));

var G__17502 = (i__7543__auto___17501 + (1));
i__7543__auto___17501 = G__17502;
continue;
} else {
}
break;
}

var argseq__7550__auto__ = ((((3) < args__7549__auto__.length))?(new cljs.core.IndexedSeq(args__7549__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7550__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17494){
var map__17495 = p__17494;
var map__17495__$1 = ((((!((map__17495 == null)))?((((map__17495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17495):map__17495);
var opts = map__17495__$1;
var statearr_17497_17503 = state;
(statearr_17497_17503[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17495,map__17495__$1,opts){
return (function (val){
var statearr_17498_17504 = state;
(statearr_17498_17504[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17495,map__17495__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17499_17505 = state;
(statearr_17499_17505[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17490){
var G__17491 = cljs.core.first(seq17490);
var seq17490__$1 = cljs.core.next(seq17490);
var G__17492 = cljs.core.first(seq17490__$1);
var seq17490__$2 = cljs.core.next(seq17490__$1);
var G__17493 = cljs.core.first(seq17490__$2);
var seq17490__$3 = cljs.core.next(seq17490__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17491,G__17492,G__17493,seq17490__$3);
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
var cs = (function (){var G__17672 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17672) : cljs.core.atom.call(null,G__17672));
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
if(typeof cljs.core.async.t_cljs$core$async17673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17673 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17674){
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
this.meta17674 = meta17674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17675,meta17674__$1){
var self__ = this;
var _17675__$1 = this;
return (new cljs.core.async.t_cljs$core$async17673(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17674__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17675){
var self__ = this;
var _17675__$1 = this;
return self__.meta17674;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17676_17838 = self__.cs;
var G__17677_17839 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17676_17838,G__17677_17839) : cljs.core.reset_BANG_.call(null,G__17676_17838,G__17677_17839));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17673.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async17673.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta17674], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17673";

cljs.core.async.t_cljs$core$async17673.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17673");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17673 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17673(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17674){
return (new cljs.core.async.t_cljs$core$async17673(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17674));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17673(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16107__auto___17840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___17840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___17840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17775){
var state_val_17776 = (state_17775[(1)]);
if((state_val_17776 === (7))){
var inst_17693 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
var statearr_17777_17841 = state_17775__$1;
(statearr_17777_17841[(2)] = inst_17693);

(statearr_17777_17841[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (20))){
var inst_17705 = (state_17775[(7)]);
var state_17775__$1 = state_17775;
var statearr_17778_17842 = state_17775__$1;
(statearr_17778_17842[(2)] = inst_17705);

(statearr_17778_17842[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (27))){
var state_17775__$1 = state_17775;
var statearr_17779_17843 = state_17775__$1;
(statearr_17779_17843[(2)] = null);

(statearr_17779_17843[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (1))){
var inst_17681 = (state_17775[(8)]);
var inst_17681__$1 = calc_state();
var inst_17683 = (inst_17681__$1 == null);
var inst_17684 = cljs.core.not(inst_17683);
var state_17775__$1 = (function (){var statearr_17780 = state_17775;
(statearr_17780[(8)] = inst_17681__$1);

return statearr_17780;
})();
if(inst_17684){
var statearr_17781_17844 = state_17775__$1;
(statearr_17781_17844[(1)] = (2));

} else {
var statearr_17782_17845 = state_17775__$1;
(statearr_17782_17845[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (24))){
var inst_17728 = (state_17775[(9)]);
var inst_17735 = (state_17775[(10)]);
var inst_17749 = (state_17775[(11)]);
var inst_17749__$1 = (inst_17728.cljs$core$IFn$_invoke$arity$1 ? inst_17728.cljs$core$IFn$_invoke$arity$1(inst_17735) : inst_17728.call(null,inst_17735));
var state_17775__$1 = (function (){var statearr_17783 = state_17775;
(statearr_17783[(11)] = inst_17749__$1);

return statearr_17783;
})();
if(cljs.core.truth_(inst_17749__$1)){
var statearr_17784_17846 = state_17775__$1;
(statearr_17784_17846[(1)] = (29));

} else {
var statearr_17785_17847 = state_17775__$1;
(statearr_17785_17847[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (4))){
var inst_17696 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
if(cljs.core.truth_(inst_17696)){
var statearr_17786_17848 = state_17775__$1;
(statearr_17786_17848[(1)] = (8));

} else {
var statearr_17787_17849 = state_17775__$1;
(statearr_17787_17849[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (15))){
var inst_17722 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
if(cljs.core.truth_(inst_17722)){
var statearr_17788_17850 = state_17775__$1;
(statearr_17788_17850[(1)] = (19));

} else {
var statearr_17789_17851 = state_17775__$1;
(statearr_17789_17851[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (21))){
var inst_17727 = (state_17775[(12)]);
var inst_17727__$1 = (state_17775[(2)]);
var inst_17728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17727__$1,cljs.core.cst$kw$solos);
var inst_17729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17727__$1,cljs.core.cst$kw$mutes);
var inst_17730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17727__$1,cljs.core.cst$kw$reads);
var state_17775__$1 = (function (){var statearr_17790 = state_17775;
(statearr_17790[(9)] = inst_17728);

(statearr_17790[(12)] = inst_17727__$1);

(statearr_17790[(13)] = inst_17729);

return statearr_17790;
})();
return cljs.core.async.ioc_alts_BANG_(state_17775__$1,(22),inst_17730);
} else {
if((state_val_17776 === (31))){
var inst_17757 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
if(cljs.core.truth_(inst_17757)){
var statearr_17791_17852 = state_17775__$1;
(statearr_17791_17852[(1)] = (32));

} else {
var statearr_17792_17853 = state_17775__$1;
(statearr_17792_17853[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (32))){
var inst_17734 = (state_17775[(14)]);
var state_17775__$1 = state_17775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17775__$1,(35),out,inst_17734);
} else {
if((state_val_17776 === (33))){
var inst_17727 = (state_17775[(12)]);
var inst_17705 = inst_17727;
var state_17775__$1 = (function (){var statearr_17793 = state_17775;
(statearr_17793[(7)] = inst_17705);

return statearr_17793;
})();
var statearr_17794_17854 = state_17775__$1;
(statearr_17794_17854[(2)] = null);

(statearr_17794_17854[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (13))){
var inst_17705 = (state_17775[(7)]);
var inst_17712 = inst_17705.cljs$lang$protocol_mask$partition0$;
var inst_17713 = (inst_17712 & (64));
var inst_17714 = inst_17705.cljs$core$ISeq$;
var inst_17715 = (inst_17713) || (inst_17714);
var state_17775__$1 = state_17775;
if(cljs.core.truth_(inst_17715)){
var statearr_17795_17855 = state_17775__$1;
(statearr_17795_17855[(1)] = (16));

} else {
var statearr_17796_17856 = state_17775__$1;
(statearr_17796_17856[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (22))){
var inst_17734 = (state_17775[(14)]);
var inst_17735 = (state_17775[(10)]);
var inst_17733 = (state_17775[(2)]);
var inst_17734__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17733,(0),null);
var inst_17735__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17733,(1),null);
var inst_17736 = (inst_17734__$1 == null);
var inst_17737 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17735__$1,change);
var inst_17738 = (inst_17736) || (inst_17737);
var state_17775__$1 = (function (){var statearr_17797 = state_17775;
(statearr_17797[(14)] = inst_17734__$1);

(statearr_17797[(10)] = inst_17735__$1);

return statearr_17797;
})();
if(cljs.core.truth_(inst_17738)){
var statearr_17798_17857 = state_17775__$1;
(statearr_17798_17857[(1)] = (23));

} else {
var statearr_17799_17858 = state_17775__$1;
(statearr_17799_17858[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (36))){
var inst_17727 = (state_17775[(12)]);
var inst_17705 = inst_17727;
var state_17775__$1 = (function (){var statearr_17800 = state_17775;
(statearr_17800[(7)] = inst_17705);

return statearr_17800;
})();
var statearr_17801_17859 = state_17775__$1;
(statearr_17801_17859[(2)] = null);

(statearr_17801_17859[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (29))){
var inst_17749 = (state_17775[(11)]);
var state_17775__$1 = state_17775;
var statearr_17802_17860 = state_17775__$1;
(statearr_17802_17860[(2)] = inst_17749);

(statearr_17802_17860[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (6))){
var state_17775__$1 = state_17775;
var statearr_17803_17861 = state_17775__$1;
(statearr_17803_17861[(2)] = false);

(statearr_17803_17861[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (28))){
var inst_17745 = (state_17775[(2)]);
var inst_17746 = calc_state();
var inst_17705 = inst_17746;
var state_17775__$1 = (function (){var statearr_17804 = state_17775;
(statearr_17804[(15)] = inst_17745);

(statearr_17804[(7)] = inst_17705);

return statearr_17804;
})();
var statearr_17805_17862 = state_17775__$1;
(statearr_17805_17862[(2)] = null);

(statearr_17805_17862[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (25))){
var inst_17771 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
var statearr_17806_17863 = state_17775__$1;
(statearr_17806_17863[(2)] = inst_17771);

(statearr_17806_17863[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (34))){
var inst_17769 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
var statearr_17807_17864 = state_17775__$1;
(statearr_17807_17864[(2)] = inst_17769);

(statearr_17807_17864[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (17))){
var state_17775__$1 = state_17775;
var statearr_17808_17865 = state_17775__$1;
(statearr_17808_17865[(2)] = false);

(statearr_17808_17865[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (3))){
var state_17775__$1 = state_17775;
var statearr_17809_17866 = state_17775__$1;
(statearr_17809_17866[(2)] = false);

(statearr_17809_17866[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (12))){
var inst_17773 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17775__$1,inst_17773);
} else {
if((state_val_17776 === (2))){
var inst_17681 = (state_17775[(8)]);
var inst_17686 = inst_17681.cljs$lang$protocol_mask$partition0$;
var inst_17687 = (inst_17686 & (64));
var inst_17688 = inst_17681.cljs$core$ISeq$;
var inst_17689 = (inst_17687) || (inst_17688);
var state_17775__$1 = state_17775;
if(cljs.core.truth_(inst_17689)){
var statearr_17810_17867 = state_17775__$1;
(statearr_17810_17867[(1)] = (5));

} else {
var statearr_17811_17868 = state_17775__$1;
(statearr_17811_17868[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (23))){
var inst_17734 = (state_17775[(14)]);
var inst_17740 = (inst_17734 == null);
var state_17775__$1 = state_17775;
if(cljs.core.truth_(inst_17740)){
var statearr_17812_17869 = state_17775__$1;
(statearr_17812_17869[(1)] = (26));

} else {
var statearr_17813_17870 = state_17775__$1;
(statearr_17813_17870[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (35))){
var inst_17760 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
if(cljs.core.truth_(inst_17760)){
var statearr_17814_17871 = state_17775__$1;
(statearr_17814_17871[(1)] = (36));

} else {
var statearr_17815_17872 = state_17775__$1;
(statearr_17815_17872[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (19))){
var inst_17705 = (state_17775[(7)]);
var inst_17724 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17705);
var state_17775__$1 = state_17775;
var statearr_17816_17873 = state_17775__$1;
(statearr_17816_17873[(2)] = inst_17724);

(statearr_17816_17873[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (11))){
var inst_17705 = (state_17775[(7)]);
var inst_17709 = (inst_17705 == null);
var inst_17710 = cljs.core.not(inst_17709);
var state_17775__$1 = state_17775;
if(inst_17710){
var statearr_17817_17874 = state_17775__$1;
(statearr_17817_17874[(1)] = (13));

} else {
var statearr_17818_17875 = state_17775__$1;
(statearr_17818_17875[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (9))){
var inst_17681 = (state_17775[(8)]);
var state_17775__$1 = state_17775;
var statearr_17819_17876 = state_17775__$1;
(statearr_17819_17876[(2)] = inst_17681);

(statearr_17819_17876[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (5))){
var state_17775__$1 = state_17775;
var statearr_17820_17877 = state_17775__$1;
(statearr_17820_17877[(2)] = true);

(statearr_17820_17877[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (14))){
var state_17775__$1 = state_17775;
var statearr_17821_17878 = state_17775__$1;
(statearr_17821_17878[(2)] = false);

(statearr_17821_17878[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (26))){
var inst_17735 = (state_17775[(10)]);
var inst_17742 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17735);
var state_17775__$1 = state_17775;
var statearr_17822_17879 = state_17775__$1;
(statearr_17822_17879[(2)] = inst_17742);

(statearr_17822_17879[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (16))){
var state_17775__$1 = state_17775;
var statearr_17823_17880 = state_17775__$1;
(statearr_17823_17880[(2)] = true);

(statearr_17823_17880[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (38))){
var inst_17765 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
var statearr_17824_17881 = state_17775__$1;
(statearr_17824_17881[(2)] = inst_17765);

(statearr_17824_17881[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (30))){
var inst_17728 = (state_17775[(9)]);
var inst_17729 = (state_17775[(13)]);
var inst_17735 = (state_17775[(10)]);
var inst_17752 = cljs.core.empty_QMARK_(inst_17728);
var inst_17753 = (inst_17729.cljs$core$IFn$_invoke$arity$1 ? inst_17729.cljs$core$IFn$_invoke$arity$1(inst_17735) : inst_17729.call(null,inst_17735));
var inst_17754 = cljs.core.not(inst_17753);
var inst_17755 = (inst_17752) && (inst_17754);
var state_17775__$1 = state_17775;
var statearr_17825_17882 = state_17775__$1;
(statearr_17825_17882[(2)] = inst_17755);

(statearr_17825_17882[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (10))){
var inst_17681 = (state_17775[(8)]);
var inst_17701 = (state_17775[(2)]);
var inst_17702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17701,cljs.core.cst$kw$solos);
var inst_17703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17701,cljs.core.cst$kw$mutes);
var inst_17704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17701,cljs.core.cst$kw$reads);
var inst_17705 = inst_17681;
var state_17775__$1 = (function (){var statearr_17826 = state_17775;
(statearr_17826[(16)] = inst_17702);

(statearr_17826[(17)] = inst_17704);

(statearr_17826[(18)] = inst_17703);

(statearr_17826[(7)] = inst_17705);

return statearr_17826;
})();
var statearr_17827_17883 = state_17775__$1;
(statearr_17827_17883[(2)] = null);

(statearr_17827_17883[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (18))){
var inst_17719 = (state_17775[(2)]);
var state_17775__$1 = state_17775;
var statearr_17828_17884 = state_17775__$1;
(statearr_17828_17884[(2)] = inst_17719);

(statearr_17828_17884[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (37))){
var state_17775__$1 = state_17775;
var statearr_17829_17885 = state_17775__$1;
(statearr_17829_17885[(2)] = null);

(statearr_17829_17885[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17776 === (8))){
var inst_17681 = (state_17775[(8)]);
var inst_17698 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17681);
var state_17775__$1 = state_17775;
var statearr_17830_17886 = state_17775__$1;
(statearr_17830_17886[(2)] = inst_17698);

(statearr_17830_17886[(1)] = (10));


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
});})(c__16107__auto___17840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15993__auto__,c__16107__auto___17840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15994__auto__ = null;
var cljs$core$async$mix_$_state_machine__15994__auto____0 = (function (){
var statearr_17834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17834[(0)] = cljs$core$async$mix_$_state_machine__15994__auto__);

(statearr_17834[(1)] = (1));

return statearr_17834;
});
var cljs$core$async$mix_$_state_machine__15994__auto____1 = (function (state_17775){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_17775);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e17835){if((e17835 instanceof Object)){
var ex__15997__auto__ = e17835;
var statearr_17836_17887 = state_17775;
(statearr_17836_17887[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17775);

return cljs.core.cst$kw$recur;
} else {
throw e17835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__17888 = state_17775;
state_17775 = G__17888;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15994__auto__ = function(state_17775){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15994__auto____1.call(this,state_17775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15994__auto____0;
cljs$core$async$mix_$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15994__auto____1;
return cljs$core$async$mix_$_state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___17840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16109__auto__ = (function (){var statearr_17837 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_17837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___17840);

return statearr_17837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___17840,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args17889 = [];
var len__7542__auto___17892 = arguments.length;
var i__7543__auto___17893 = (0);
while(true){
if((i__7543__auto___17893 < len__7542__auto___17892)){
args17889.push((arguments[i__7543__auto___17893]));

var G__17894 = (i__7543__auto___17893 + (1));
i__7543__auto___17893 = G__17894;
continue;
} else {
}
break;
}

var G__17891 = args17889.length;
switch (G__17891) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17889.length)].join('')));

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
var args17897 = [];
var len__7542__auto___18025 = arguments.length;
var i__7543__auto___18026 = (0);
while(true){
if((i__7543__auto___18026 < len__7542__auto___18025)){
args17897.push((arguments[i__7543__auto___18026]));

var G__18027 = (i__7543__auto___18026 + (1));
i__7543__auto___18026 = G__18027;
continue;
} else {
}
break;
}

var G__17899 = args17897.length;
switch (G__17899) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17897.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17900 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17900) : cljs.core.atom.call(null,G__17900));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6484__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6484__auto__)){
return or__6484__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6484__auto__,mults){
return (function (p1__17896_SHARP_){
if(cljs.core.truth_((p1__17896_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17896_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17896_SHARP_.call(null,topic)))){
return p1__17896_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17896_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6484__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17901 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17902){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17902 = meta17902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17903,meta17902__$1){
var self__ = this;
var _17903__$1 = this;
return (new cljs.core.async.t_cljs$core$async17901(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17902__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17903){
var self__ = this;
var _17903__$1 = this;
return self__.meta17902;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17901.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17901.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17901.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17901.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async17901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17904 = self__.mults;
var G__17905 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17904,G__17905) : cljs.core.reset_BANG_.call(null,G__17904,G__17905));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17901.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17901.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17902], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17901";

cljs.core.async.t_cljs$core$async17901.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async17901");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17901 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17901(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17902){
return (new cljs.core.async.t_cljs$core$async17901(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17902));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17901(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16107__auto___18029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___18029,mults,ensure_mult,p){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___18029,mults,ensure_mult,p){
return (function (state_17977){
var state_val_17978 = (state_17977[(1)]);
if((state_val_17978 === (7))){
var inst_17973 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17979_18030 = state_17977__$1;
(statearr_17979_18030[(2)] = inst_17973);

(statearr_17979_18030[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (20))){
var state_17977__$1 = state_17977;
var statearr_17980_18031 = state_17977__$1;
(statearr_17980_18031[(2)] = null);

(statearr_17980_18031[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (1))){
var state_17977__$1 = state_17977;
var statearr_17981_18032 = state_17977__$1;
(statearr_17981_18032[(2)] = null);

(statearr_17981_18032[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (24))){
var inst_17956 = (state_17977[(7)]);
var inst_17965 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17956);
var state_17977__$1 = state_17977;
var statearr_17982_18033 = state_17977__$1;
(statearr_17982_18033[(2)] = inst_17965);

(statearr_17982_18033[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (4))){
var inst_17908 = (state_17977[(8)]);
var inst_17908__$1 = (state_17977[(2)]);
var inst_17909 = (inst_17908__$1 == null);
var state_17977__$1 = (function (){var statearr_17983 = state_17977;
(statearr_17983[(8)] = inst_17908__$1);

return statearr_17983;
})();
if(cljs.core.truth_(inst_17909)){
var statearr_17984_18034 = state_17977__$1;
(statearr_17984_18034[(1)] = (5));

} else {
var statearr_17985_18035 = state_17977__$1;
(statearr_17985_18035[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (15))){
var inst_17950 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17986_18036 = state_17977__$1;
(statearr_17986_18036[(2)] = inst_17950);

(statearr_17986_18036[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (21))){
var inst_17970 = (state_17977[(2)]);
var state_17977__$1 = (function (){var statearr_17987 = state_17977;
(statearr_17987[(9)] = inst_17970);

return statearr_17987;
})();
var statearr_17988_18037 = state_17977__$1;
(statearr_17988_18037[(2)] = null);

(statearr_17988_18037[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (13))){
var inst_17932 = (state_17977[(10)]);
var inst_17934 = cljs.core.chunked_seq_QMARK_(inst_17932);
var state_17977__$1 = state_17977;
if(inst_17934){
var statearr_17989_18038 = state_17977__$1;
(statearr_17989_18038[(1)] = (16));

} else {
var statearr_17990_18039 = state_17977__$1;
(statearr_17990_18039[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (22))){
var inst_17962 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
if(cljs.core.truth_(inst_17962)){
var statearr_17991_18040 = state_17977__$1;
(statearr_17991_18040[(1)] = (23));

} else {
var statearr_17992_18041 = state_17977__$1;
(statearr_17992_18041[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (6))){
var inst_17908 = (state_17977[(8)]);
var inst_17958 = (state_17977[(11)]);
var inst_17956 = (state_17977[(7)]);
var inst_17956__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17908) : topic_fn.call(null,inst_17908));
var inst_17957 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17958__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17957,inst_17956__$1);
var state_17977__$1 = (function (){var statearr_17993 = state_17977;
(statearr_17993[(11)] = inst_17958__$1);

(statearr_17993[(7)] = inst_17956__$1);

return statearr_17993;
})();
if(cljs.core.truth_(inst_17958__$1)){
var statearr_17994_18042 = state_17977__$1;
(statearr_17994_18042[(1)] = (19));

} else {
var statearr_17995_18043 = state_17977__$1;
(statearr_17995_18043[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (25))){
var inst_17967 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17996_18044 = state_17977__$1;
(statearr_17996_18044[(2)] = inst_17967);

(statearr_17996_18044[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (17))){
var inst_17932 = (state_17977[(10)]);
var inst_17941 = cljs.core.first(inst_17932);
var inst_17942 = cljs.core.async.muxch_STAR_(inst_17941);
var inst_17943 = cljs.core.async.close_BANG_(inst_17942);
var inst_17944 = cljs.core.next(inst_17932);
var inst_17918 = inst_17944;
var inst_17919 = null;
var inst_17920 = (0);
var inst_17921 = (0);
var state_17977__$1 = (function (){var statearr_17997 = state_17977;
(statearr_17997[(12)] = inst_17921);

(statearr_17997[(13)] = inst_17920);

(statearr_17997[(14)] = inst_17943);

(statearr_17997[(15)] = inst_17919);

(statearr_17997[(16)] = inst_17918);

return statearr_17997;
})();
var statearr_17998_18045 = state_17977__$1;
(statearr_17998_18045[(2)] = null);

(statearr_17998_18045[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (3))){
var inst_17975 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17977__$1,inst_17975);
} else {
if((state_val_17978 === (12))){
var inst_17952 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_17999_18046 = state_17977__$1;
(statearr_17999_18046[(2)] = inst_17952);

(statearr_17999_18046[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (2))){
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17977__$1,(4),ch);
} else {
if((state_val_17978 === (23))){
var state_17977__$1 = state_17977;
var statearr_18000_18047 = state_17977__$1;
(statearr_18000_18047[(2)] = null);

(statearr_18000_18047[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (19))){
var inst_17908 = (state_17977[(8)]);
var inst_17958 = (state_17977[(11)]);
var inst_17960 = cljs.core.async.muxch_STAR_(inst_17958);
var state_17977__$1 = state_17977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17977__$1,(22),inst_17960,inst_17908);
} else {
if((state_val_17978 === (11))){
var inst_17932 = (state_17977[(10)]);
var inst_17918 = (state_17977[(16)]);
var inst_17932__$1 = cljs.core.seq(inst_17918);
var state_17977__$1 = (function (){var statearr_18001 = state_17977;
(statearr_18001[(10)] = inst_17932__$1);

return statearr_18001;
})();
if(inst_17932__$1){
var statearr_18002_18048 = state_17977__$1;
(statearr_18002_18048[(1)] = (13));

} else {
var statearr_18003_18049 = state_17977__$1;
(statearr_18003_18049[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (9))){
var inst_17954 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_18004_18050 = state_17977__$1;
(statearr_18004_18050[(2)] = inst_17954);

(statearr_18004_18050[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (5))){
var inst_17915 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17916 = cljs.core.vals(inst_17915);
var inst_17917 = cljs.core.seq(inst_17916);
var inst_17918 = inst_17917;
var inst_17919 = null;
var inst_17920 = (0);
var inst_17921 = (0);
var state_17977__$1 = (function (){var statearr_18005 = state_17977;
(statearr_18005[(12)] = inst_17921);

(statearr_18005[(13)] = inst_17920);

(statearr_18005[(15)] = inst_17919);

(statearr_18005[(16)] = inst_17918);

return statearr_18005;
})();
var statearr_18006_18051 = state_17977__$1;
(statearr_18006_18051[(2)] = null);

(statearr_18006_18051[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (14))){
var state_17977__$1 = state_17977;
var statearr_18010_18052 = state_17977__$1;
(statearr_18010_18052[(2)] = null);

(statearr_18010_18052[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (16))){
var inst_17932 = (state_17977[(10)]);
var inst_17936 = cljs.core.chunk_first(inst_17932);
var inst_17937 = cljs.core.chunk_rest(inst_17932);
var inst_17938 = cljs.core.count(inst_17936);
var inst_17918 = inst_17937;
var inst_17919 = inst_17936;
var inst_17920 = inst_17938;
var inst_17921 = (0);
var state_17977__$1 = (function (){var statearr_18011 = state_17977;
(statearr_18011[(12)] = inst_17921);

(statearr_18011[(13)] = inst_17920);

(statearr_18011[(15)] = inst_17919);

(statearr_18011[(16)] = inst_17918);

return statearr_18011;
})();
var statearr_18012_18053 = state_17977__$1;
(statearr_18012_18053[(2)] = null);

(statearr_18012_18053[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (10))){
var inst_17921 = (state_17977[(12)]);
var inst_17920 = (state_17977[(13)]);
var inst_17919 = (state_17977[(15)]);
var inst_17918 = (state_17977[(16)]);
var inst_17926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17919,inst_17921);
var inst_17927 = cljs.core.async.muxch_STAR_(inst_17926);
var inst_17928 = cljs.core.async.close_BANG_(inst_17927);
var inst_17929 = (inst_17921 + (1));
var tmp18007 = inst_17920;
var tmp18008 = inst_17919;
var tmp18009 = inst_17918;
var inst_17918__$1 = tmp18009;
var inst_17919__$1 = tmp18008;
var inst_17920__$1 = tmp18007;
var inst_17921__$1 = inst_17929;
var state_17977__$1 = (function (){var statearr_18013 = state_17977;
(statearr_18013[(12)] = inst_17921__$1);

(statearr_18013[(13)] = inst_17920__$1);

(statearr_18013[(17)] = inst_17928);

(statearr_18013[(15)] = inst_17919__$1);

(statearr_18013[(16)] = inst_17918__$1);

return statearr_18013;
})();
var statearr_18014_18054 = state_17977__$1;
(statearr_18014_18054[(2)] = null);

(statearr_18014_18054[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (18))){
var inst_17947 = (state_17977[(2)]);
var state_17977__$1 = state_17977;
var statearr_18015_18055 = state_17977__$1;
(statearr_18015_18055[(2)] = inst_17947);

(statearr_18015_18055[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17978 === (8))){
var inst_17921 = (state_17977[(12)]);
var inst_17920 = (state_17977[(13)]);
var inst_17923 = (inst_17921 < inst_17920);
var inst_17924 = inst_17923;
var state_17977__$1 = state_17977;
if(cljs.core.truth_(inst_17924)){
var statearr_18016_18056 = state_17977__$1;
(statearr_18016_18056[(1)] = (10));

} else {
var statearr_18017_18057 = state_17977__$1;
(statearr_18017_18057[(1)] = (11));

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
});})(c__16107__auto___18029,mults,ensure_mult,p))
;
return ((function (switch__15993__auto__,c__16107__auto___18029,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_18021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18021[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_18021[(1)] = (1));

return statearr_18021;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_17977){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_17977);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e18022){if((e18022 instanceof Object)){
var ex__15997__auto__ = e18022;
var statearr_18023_18058 = state_17977;
(statearr_18023_18058[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17977);

return cljs.core.cst$kw$recur;
} else {
throw e18022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__18059 = state_17977;
state_17977 = G__18059;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_17977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_17977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___18029,mults,ensure_mult,p))
})();
var state__16109__auto__ = (function (){var statearr_18024 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_18024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___18029);

return statearr_18024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___18029,mults,ensure_mult,p))
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
var args18060 = [];
var len__7542__auto___18063 = arguments.length;
var i__7543__auto___18064 = (0);
while(true){
if((i__7543__auto___18064 < len__7542__auto___18063)){
args18060.push((arguments[i__7543__auto___18064]));

var G__18065 = (i__7543__auto___18064 + (1));
i__7543__auto___18064 = G__18065;
continue;
} else {
}
break;
}

var G__18062 = args18060.length;
switch (G__18062) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18060.length)].join('')));

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
var args18067 = [];
var len__7542__auto___18070 = arguments.length;
var i__7543__auto___18071 = (0);
while(true){
if((i__7543__auto___18071 < len__7542__auto___18070)){
args18067.push((arguments[i__7543__auto___18071]));

var G__18072 = (i__7543__auto___18071 + (1));
i__7543__auto___18071 = G__18072;
continue;
} else {
}
break;
}

var G__18069 = args18067.length;
switch (G__18069) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18067.length)].join('')));

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
var args18074 = [];
var len__7542__auto___18145 = arguments.length;
var i__7543__auto___18146 = (0);
while(true){
if((i__7543__auto___18146 < len__7542__auto___18145)){
args18074.push((arguments[i__7543__auto___18146]));

var G__18147 = (i__7543__auto___18146 + (1));
i__7543__auto___18146 = G__18147;
continue;
} else {
}
break;
}

var G__18076 = args18074.length;
switch (G__18076) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18074.length)].join('')));

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
var c__16107__auto___18149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___18149,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___18149,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18115){
var state_val_18116 = (state_18115[(1)]);
if((state_val_18116 === (7))){
var state_18115__$1 = state_18115;
var statearr_18117_18150 = state_18115__$1;
(statearr_18117_18150[(2)] = null);

(statearr_18117_18150[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (1))){
var state_18115__$1 = state_18115;
var statearr_18118_18151 = state_18115__$1;
(statearr_18118_18151[(2)] = null);

(statearr_18118_18151[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (4))){
var inst_18079 = (state_18115[(7)]);
var inst_18081 = (inst_18079 < cnt);
var state_18115__$1 = state_18115;
if(cljs.core.truth_(inst_18081)){
var statearr_18119_18152 = state_18115__$1;
(statearr_18119_18152[(1)] = (6));

} else {
var statearr_18120_18153 = state_18115__$1;
(statearr_18120_18153[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (15))){
var inst_18111 = (state_18115[(2)]);
var state_18115__$1 = state_18115;
var statearr_18121_18154 = state_18115__$1;
(statearr_18121_18154[(2)] = inst_18111);

(statearr_18121_18154[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (13))){
var inst_18104 = cljs.core.async.close_BANG_(out);
var state_18115__$1 = state_18115;
var statearr_18122_18155 = state_18115__$1;
(statearr_18122_18155[(2)] = inst_18104);

(statearr_18122_18155[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (6))){
var state_18115__$1 = state_18115;
var statearr_18123_18156 = state_18115__$1;
(statearr_18123_18156[(2)] = null);

(statearr_18123_18156[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (3))){
var inst_18113 = (state_18115[(2)]);
var state_18115__$1 = state_18115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18115__$1,inst_18113);
} else {
if((state_val_18116 === (12))){
var inst_18101 = (state_18115[(8)]);
var inst_18101__$1 = (state_18115[(2)]);
var inst_18102 = cljs.core.some(cljs.core.nil_QMARK_,inst_18101__$1);
var state_18115__$1 = (function (){var statearr_18124 = state_18115;
(statearr_18124[(8)] = inst_18101__$1);

return statearr_18124;
})();
if(cljs.core.truth_(inst_18102)){
var statearr_18125_18157 = state_18115__$1;
(statearr_18125_18157[(1)] = (13));

} else {
var statearr_18126_18158 = state_18115__$1;
(statearr_18126_18158[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (2))){
var inst_18078 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_18079 = (0);
var state_18115__$1 = (function (){var statearr_18127 = state_18115;
(statearr_18127[(9)] = inst_18078);

(statearr_18127[(7)] = inst_18079);

return statearr_18127;
})();
var statearr_18128_18159 = state_18115__$1;
(statearr_18128_18159[(2)] = null);

(statearr_18128_18159[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (11))){
var inst_18079 = (state_18115[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18115,(10),Object,null,(9));
var inst_18088 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18079) : chs__$1.call(null,inst_18079));
var inst_18089 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18079) : done.call(null,inst_18079));
var inst_18090 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18088,inst_18089);
var state_18115__$1 = state_18115;
var statearr_18129_18160 = state_18115__$1;
(statearr_18129_18160[(2)] = inst_18090);


cljs.core.async.impl.ioc_helpers.process_exception(state_18115__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (9))){
var inst_18079 = (state_18115[(7)]);
var inst_18092 = (state_18115[(2)]);
var inst_18093 = (inst_18079 + (1));
var inst_18079__$1 = inst_18093;
var state_18115__$1 = (function (){var statearr_18130 = state_18115;
(statearr_18130[(10)] = inst_18092);

(statearr_18130[(7)] = inst_18079__$1);

return statearr_18130;
})();
var statearr_18131_18161 = state_18115__$1;
(statearr_18131_18161[(2)] = null);

(statearr_18131_18161[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (5))){
var inst_18099 = (state_18115[(2)]);
var state_18115__$1 = (function (){var statearr_18132 = state_18115;
(statearr_18132[(11)] = inst_18099);

return statearr_18132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18115__$1,(12),dchan);
} else {
if((state_val_18116 === (14))){
var inst_18101 = (state_18115[(8)]);
var inst_18106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18101);
var state_18115__$1 = state_18115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18115__$1,(16),out,inst_18106);
} else {
if((state_val_18116 === (16))){
var inst_18108 = (state_18115[(2)]);
var state_18115__$1 = (function (){var statearr_18133 = state_18115;
(statearr_18133[(12)] = inst_18108);

return statearr_18133;
})();
var statearr_18134_18162 = state_18115__$1;
(statearr_18134_18162[(2)] = null);

(statearr_18134_18162[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (10))){
var inst_18083 = (state_18115[(2)]);
var inst_18084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18115__$1 = (function (){var statearr_18135 = state_18115;
(statearr_18135[(13)] = inst_18083);

return statearr_18135;
})();
var statearr_18136_18163 = state_18115__$1;
(statearr_18136_18163[(2)] = inst_18084);


cljs.core.async.impl.ioc_helpers.process_exception(state_18115__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18116 === (8))){
var inst_18097 = (state_18115[(2)]);
var state_18115__$1 = state_18115;
var statearr_18137_18164 = state_18115__$1;
(statearr_18137_18164[(2)] = inst_18097);

(statearr_18137_18164[(1)] = (5));


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
});})(c__16107__auto___18149,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15993__auto__,c__16107__auto___18149,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_18141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18141[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_18141[(1)] = (1));

return statearr_18141;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_18115){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_18115);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e18142){if((e18142 instanceof Object)){
var ex__15997__auto__ = e18142;
var statearr_18143_18165 = state_18115;
(statearr_18143_18165[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18115);

return cljs.core.cst$kw$recur;
} else {
throw e18142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__18166 = state_18115;
state_18115 = G__18166;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_18115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_18115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___18149,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16109__auto__ = (function (){var statearr_18144 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_18144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___18149);

return statearr_18144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___18149,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18168 = [];
var len__7542__auto___18224 = arguments.length;
var i__7543__auto___18225 = (0);
while(true){
if((i__7543__auto___18225 < len__7542__auto___18224)){
args18168.push((arguments[i__7543__auto___18225]));

var G__18226 = (i__7543__auto___18225 + (1));
i__7543__auto___18225 = G__18226;
continue;
} else {
}
break;
}

var G__18170 = args18168.length;
switch (G__18170) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18168.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___18228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___18228,out){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___18228,out){
return (function (state_18200){
var state_val_18201 = (state_18200[(1)]);
if((state_val_18201 === (7))){
var inst_18180 = (state_18200[(7)]);
var inst_18179 = (state_18200[(8)]);
var inst_18179__$1 = (state_18200[(2)]);
var inst_18180__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18179__$1,(0),null);
var inst_18181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18179__$1,(1),null);
var inst_18182 = (inst_18180__$1 == null);
var state_18200__$1 = (function (){var statearr_18202 = state_18200;
(statearr_18202[(7)] = inst_18180__$1);

(statearr_18202[(8)] = inst_18179__$1);

(statearr_18202[(9)] = inst_18181);

return statearr_18202;
})();
if(cljs.core.truth_(inst_18182)){
var statearr_18203_18229 = state_18200__$1;
(statearr_18203_18229[(1)] = (8));

} else {
var statearr_18204_18230 = state_18200__$1;
(statearr_18204_18230[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18201 === (1))){
var inst_18171 = cljs.core.vec(chs);
var inst_18172 = inst_18171;
var state_18200__$1 = (function (){var statearr_18205 = state_18200;
(statearr_18205[(10)] = inst_18172);

return statearr_18205;
})();
var statearr_18206_18231 = state_18200__$1;
(statearr_18206_18231[(2)] = null);

(statearr_18206_18231[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18201 === (4))){
var inst_18172 = (state_18200[(10)]);
var state_18200__$1 = state_18200;
return cljs.core.async.ioc_alts_BANG_(state_18200__$1,(7),inst_18172);
} else {
if((state_val_18201 === (6))){
var inst_18196 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18207_18232 = state_18200__$1;
(statearr_18207_18232[(2)] = inst_18196);

(statearr_18207_18232[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18201 === (3))){
var inst_18198 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18200__$1,inst_18198);
} else {
if((state_val_18201 === (2))){
var inst_18172 = (state_18200[(10)]);
var inst_18174 = cljs.core.count(inst_18172);
var inst_18175 = (inst_18174 > (0));
var state_18200__$1 = state_18200;
if(cljs.core.truth_(inst_18175)){
var statearr_18209_18233 = state_18200__$1;
(statearr_18209_18233[(1)] = (4));

} else {
var statearr_18210_18234 = state_18200__$1;
(statearr_18210_18234[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18201 === (11))){
var inst_18172 = (state_18200[(10)]);
var inst_18189 = (state_18200[(2)]);
var tmp18208 = inst_18172;
var inst_18172__$1 = tmp18208;
var state_18200__$1 = (function (){var statearr_18211 = state_18200;
(statearr_18211[(11)] = inst_18189);

(statearr_18211[(10)] = inst_18172__$1);

return statearr_18211;
})();
var statearr_18212_18235 = state_18200__$1;
(statearr_18212_18235[(2)] = null);

(statearr_18212_18235[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18201 === (9))){
var inst_18180 = (state_18200[(7)]);
var state_18200__$1 = state_18200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18200__$1,(11),out,inst_18180);
} else {
if((state_val_18201 === (5))){
var inst_18194 = cljs.core.async.close_BANG_(out);
var state_18200__$1 = state_18200;
var statearr_18213_18236 = state_18200__$1;
(statearr_18213_18236[(2)] = inst_18194);

(statearr_18213_18236[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18201 === (10))){
var inst_18192 = (state_18200[(2)]);
var state_18200__$1 = state_18200;
var statearr_18214_18237 = state_18200__$1;
(statearr_18214_18237[(2)] = inst_18192);

(statearr_18214_18237[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18201 === (8))){
var inst_18180 = (state_18200[(7)]);
var inst_18179 = (state_18200[(8)]);
var inst_18181 = (state_18200[(9)]);
var inst_18172 = (state_18200[(10)]);
var inst_18184 = (function (){var cs = inst_18172;
var vec__18177 = inst_18179;
var v = inst_18180;
var c = inst_18181;
return ((function (cs,vec__18177,v,c,inst_18180,inst_18179,inst_18181,inst_18172,state_val_18201,c__16107__auto___18228,out){
return (function (p1__18167_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18167_SHARP_);
});
;})(cs,vec__18177,v,c,inst_18180,inst_18179,inst_18181,inst_18172,state_val_18201,c__16107__auto___18228,out))
})();
var inst_18185 = cljs.core.filterv(inst_18184,inst_18172);
var inst_18172__$1 = inst_18185;
var state_18200__$1 = (function (){var statearr_18215 = state_18200;
(statearr_18215[(10)] = inst_18172__$1);

return statearr_18215;
})();
var statearr_18216_18238 = state_18200__$1;
(statearr_18216_18238[(2)] = null);

(statearr_18216_18238[(1)] = (2));


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
});})(c__16107__auto___18228,out))
;
return ((function (switch__15993__auto__,c__16107__auto___18228,out){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_18220 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18220[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_18220[(1)] = (1));

return statearr_18220;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_18200){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_18200);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e18221){if((e18221 instanceof Object)){
var ex__15997__auto__ = e18221;
var statearr_18222_18239 = state_18200;
(statearr_18222_18239[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18200);

return cljs.core.cst$kw$recur;
} else {
throw e18221;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__18240 = state_18200;
state_18200 = G__18240;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_18200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_18200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___18228,out))
})();
var state__16109__auto__ = (function (){var statearr_18223 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_18223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___18228);

return statearr_18223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___18228,out))
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
var args18241 = [];
var len__7542__auto___18290 = arguments.length;
var i__7543__auto___18291 = (0);
while(true){
if((i__7543__auto___18291 < len__7542__auto___18290)){
args18241.push((arguments[i__7543__auto___18291]));

var G__18292 = (i__7543__auto___18291 + (1));
i__7543__auto___18291 = G__18292;
continue;
} else {
}
break;
}

var G__18243 = args18241.length;
switch (G__18243) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18241.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___18294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___18294,out){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___18294,out){
return (function (state_18267){
var state_val_18268 = (state_18267[(1)]);
if((state_val_18268 === (7))){
var inst_18249 = (state_18267[(7)]);
var inst_18249__$1 = (state_18267[(2)]);
var inst_18250 = (inst_18249__$1 == null);
var inst_18251 = cljs.core.not(inst_18250);
var state_18267__$1 = (function (){var statearr_18269 = state_18267;
(statearr_18269[(7)] = inst_18249__$1);

return statearr_18269;
})();
if(inst_18251){
var statearr_18270_18295 = state_18267__$1;
(statearr_18270_18295[(1)] = (8));

} else {
var statearr_18271_18296 = state_18267__$1;
(statearr_18271_18296[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18268 === (1))){
var inst_18244 = (0);
var state_18267__$1 = (function (){var statearr_18272 = state_18267;
(statearr_18272[(8)] = inst_18244);

return statearr_18272;
})();
var statearr_18273_18297 = state_18267__$1;
(statearr_18273_18297[(2)] = null);

(statearr_18273_18297[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18268 === (4))){
var state_18267__$1 = state_18267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18267__$1,(7),ch);
} else {
if((state_val_18268 === (6))){
var inst_18262 = (state_18267[(2)]);
var state_18267__$1 = state_18267;
var statearr_18274_18298 = state_18267__$1;
(statearr_18274_18298[(2)] = inst_18262);

(statearr_18274_18298[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18268 === (3))){
var inst_18264 = (state_18267[(2)]);
var inst_18265 = cljs.core.async.close_BANG_(out);
var state_18267__$1 = (function (){var statearr_18275 = state_18267;
(statearr_18275[(9)] = inst_18264);

return statearr_18275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18267__$1,inst_18265);
} else {
if((state_val_18268 === (2))){
var inst_18244 = (state_18267[(8)]);
var inst_18246 = (inst_18244 < n);
var state_18267__$1 = state_18267;
if(cljs.core.truth_(inst_18246)){
var statearr_18276_18299 = state_18267__$1;
(statearr_18276_18299[(1)] = (4));

} else {
var statearr_18277_18300 = state_18267__$1;
(statearr_18277_18300[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18268 === (11))){
var inst_18244 = (state_18267[(8)]);
var inst_18254 = (state_18267[(2)]);
var inst_18255 = (inst_18244 + (1));
var inst_18244__$1 = inst_18255;
var state_18267__$1 = (function (){var statearr_18278 = state_18267;
(statearr_18278[(10)] = inst_18254);

(statearr_18278[(8)] = inst_18244__$1);

return statearr_18278;
})();
var statearr_18279_18301 = state_18267__$1;
(statearr_18279_18301[(2)] = null);

(statearr_18279_18301[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18268 === (9))){
var state_18267__$1 = state_18267;
var statearr_18280_18302 = state_18267__$1;
(statearr_18280_18302[(2)] = null);

(statearr_18280_18302[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18268 === (5))){
var state_18267__$1 = state_18267;
var statearr_18281_18303 = state_18267__$1;
(statearr_18281_18303[(2)] = null);

(statearr_18281_18303[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18268 === (10))){
var inst_18259 = (state_18267[(2)]);
var state_18267__$1 = state_18267;
var statearr_18282_18304 = state_18267__$1;
(statearr_18282_18304[(2)] = inst_18259);

(statearr_18282_18304[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18268 === (8))){
var inst_18249 = (state_18267[(7)]);
var state_18267__$1 = state_18267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18267__$1,(11),out,inst_18249);
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
});})(c__16107__auto___18294,out))
;
return ((function (switch__15993__auto__,c__16107__auto___18294,out){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_18286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18286[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_18286[(1)] = (1));

return statearr_18286;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_18267){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_18267);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e18287){if((e18287 instanceof Object)){
var ex__15997__auto__ = e18287;
var statearr_18288_18305 = state_18267;
(statearr_18288_18305[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18267);

return cljs.core.cst$kw$recur;
} else {
throw e18287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__18306 = state_18267;
state_18267 = G__18306;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_18267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_18267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___18294,out))
})();
var state__16109__auto__ = (function (){var statearr_18289 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_18289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___18294);

return statearr_18289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___18294,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18316 = (function (map_LT_,f,ch,meta18317){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18317 = meta18317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18318,meta18317__$1){
var self__ = this;
var _18318__$1 = this;
return (new cljs.core.async.t_cljs$core$async18316(self__.map_LT_,self__.f,self__.ch,meta18317__$1));
});

cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18318){
var self__ = this;
var _18318__$1 = this;
return self__.meta18317;
});

cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18319 = (function (map_LT_,f,ch,meta18317,_,fn1,meta18320){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18317 = meta18317;
this._ = _;
this.fn1 = fn1;
this.meta18320 = meta18320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18321,meta18320__$1){
var self__ = this;
var _18321__$1 = this;
return (new cljs.core.async.t_cljs$core$async18319(self__.map_LT_,self__.f,self__.ch,self__.meta18317,self__._,self__.fn1,meta18320__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18321){
var self__ = this;
var _18321__$1 = this;
return self__.meta18320;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18319.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async18319.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18319.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18319.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18307_SHARP_){
var G__18322 = (((p1__18307_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18307_SHARP_) : self__.f.call(null,p1__18307_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18322) : f1.call(null,G__18322));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18319.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18317,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18316], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18320], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18319.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18319";

cljs.core.async.t_cljs$core$async18319.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18319");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18319 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18319(map_LT___$1,f__$1,ch__$1,meta18317__$1,___$2,fn1__$1,meta18320){
return (new cljs.core.async.t_cljs$core$async18319(map_LT___$1,f__$1,ch__$1,meta18317__$1,___$2,fn1__$1,meta18320));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18319(self__.map_LT_,self__.f,self__.ch,self__.meta18317,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6472__auto__ = ret;
if(cljs.core.truth_(and__6472__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6472__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18323 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18323) : self__.f.call(null,G__18323));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18317], null);
});

cljs.core.async.t_cljs$core$async18316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18316";

cljs.core.async.t_cljs$core$async18316.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18316");
});

cljs.core.async.__GT_t_cljs$core$async18316 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18316(map_LT___$1,f__$1,ch__$1,meta18317){
return (new cljs.core.async.t_cljs$core$async18316(map_LT___$1,f__$1,ch__$1,meta18317));
});

}

return (new cljs.core.async.t_cljs$core$async18316(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18327 = (function (map_GT_,f,ch,meta18328){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta18328 = meta18328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18329,meta18328__$1){
var self__ = this;
var _18329__$1 = this;
return (new cljs.core.async.t_cljs$core$async18327(self__.map_GT_,self__.f,self__.ch,meta18328__$1));
});

cljs.core.async.t_cljs$core$async18327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18329){
var self__ = this;
var _18329__$1 = this;
return self__.meta18328;
});

cljs.core.async.t_cljs$core$async18327.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18327.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18327.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18328], null);
});

cljs.core.async.t_cljs$core$async18327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18327";

cljs.core.async.t_cljs$core$async18327.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18327");
});

cljs.core.async.__GT_t_cljs$core$async18327 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18327(map_GT___$1,f__$1,ch__$1,meta18328){
return (new cljs.core.async.t_cljs$core$async18327(map_GT___$1,f__$1,ch__$1,meta18328));
});

}

return (new cljs.core.async.t_cljs$core$async18327(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18333 = (function (filter_GT_,p,ch,meta18334){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta18334 = meta18334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18335,meta18334__$1){
var self__ = this;
var _18335__$1 = this;
return (new cljs.core.async.t_cljs$core$async18333(self__.filter_GT_,self__.p,self__.ch,meta18334__$1));
});

cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18335){
var self__ = this;
var _18335__$1 = this;
return self__.meta18334;
});

cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async18333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18334], null);
});

cljs.core.async.t_cljs$core$async18333.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18333";

cljs.core.async.t_cljs$core$async18333.cljs$lang$ctorPrWriter = (function (this__7082__auto__,writer__7083__auto__,opt__7084__auto__){
return cljs.core._write(writer__7083__auto__,"cljs.core.async/t_cljs$core$async18333");
});

cljs.core.async.__GT_t_cljs$core$async18333 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18333(filter_GT___$1,p__$1,ch__$1,meta18334){
return (new cljs.core.async.t_cljs$core$async18333(filter_GT___$1,p__$1,ch__$1,meta18334));
});

}

return (new cljs.core.async.t_cljs$core$async18333(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args18336 = [];
var len__7542__auto___18380 = arguments.length;
var i__7543__auto___18381 = (0);
while(true){
if((i__7543__auto___18381 < len__7542__auto___18380)){
args18336.push((arguments[i__7543__auto___18381]));

var G__18382 = (i__7543__auto___18381 + (1));
i__7543__auto___18381 = G__18382;
continue;
} else {
}
break;
}

var G__18338 = args18336.length;
switch (G__18338) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18336.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___18384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___18384,out){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___18384,out){
return (function (state_18359){
var state_val_18360 = (state_18359[(1)]);
if((state_val_18360 === (7))){
var inst_18355 = (state_18359[(2)]);
var state_18359__$1 = state_18359;
var statearr_18361_18385 = state_18359__$1;
(statearr_18361_18385[(2)] = inst_18355);

(statearr_18361_18385[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (1))){
var state_18359__$1 = state_18359;
var statearr_18362_18386 = state_18359__$1;
(statearr_18362_18386[(2)] = null);

(statearr_18362_18386[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (4))){
var inst_18341 = (state_18359[(7)]);
var inst_18341__$1 = (state_18359[(2)]);
var inst_18342 = (inst_18341__$1 == null);
var state_18359__$1 = (function (){var statearr_18363 = state_18359;
(statearr_18363[(7)] = inst_18341__$1);

return statearr_18363;
})();
if(cljs.core.truth_(inst_18342)){
var statearr_18364_18387 = state_18359__$1;
(statearr_18364_18387[(1)] = (5));

} else {
var statearr_18365_18388 = state_18359__$1;
(statearr_18365_18388[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (6))){
var inst_18341 = (state_18359[(7)]);
var inst_18346 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18341) : p.call(null,inst_18341));
var state_18359__$1 = state_18359;
if(cljs.core.truth_(inst_18346)){
var statearr_18366_18389 = state_18359__$1;
(statearr_18366_18389[(1)] = (8));

} else {
var statearr_18367_18390 = state_18359__$1;
(statearr_18367_18390[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (3))){
var inst_18357 = (state_18359[(2)]);
var state_18359__$1 = state_18359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18359__$1,inst_18357);
} else {
if((state_val_18360 === (2))){
var state_18359__$1 = state_18359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18359__$1,(4),ch);
} else {
if((state_val_18360 === (11))){
var inst_18349 = (state_18359[(2)]);
var state_18359__$1 = state_18359;
var statearr_18368_18391 = state_18359__$1;
(statearr_18368_18391[(2)] = inst_18349);

(statearr_18368_18391[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (9))){
var state_18359__$1 = state_18359;
var statearr_18369_18392 = state_18359__$1;
(statearr_18369_18392[(2)] = null);

(statearr_18369_18392[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (5))){
var inst_18344 = cljs.core.async.close_BANG_(out);
var state_18359__$1 = state_18359;
var statearr_18370_18393 = state_18359__$1;
(statearr_18370_18393[(2)] = inst_18344);

(statearr_18370_18393[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (10))){
var inst_18352 = (state_18359[(2)]);
var state_18359__$1 = (function (){var statearr_18371 = state_18359;
(statearr_18371[(8)] = inst_18352);

return statearr_18371;
})();
var statearr_18372_18394 = state_18359__$1;
(statearr_18372_18394[(2)] = null);

(statearr_18372_18394[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18360 === (8))){
var inst_18341 = (state_18359[(7)]);
var state_18359__$1 = state_18359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18359__$1,(11),out,inst_18341);
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
});})(c__16107__auto___18384,out))
;
return ((function (switch__15993__auto__,c__16107__auto___18384,out){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_18376 = [null,null,null,null,null,null,null,null,null];
(statearr_18376[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_18376[(1)] = (1));

return statearr_18376;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_18359){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_18359);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e18377){if((e18377 instanceof Object)){
var ex__15997__auto__ = e18377;
var statearr_18378_18395 = state_18359;
(statearr_18378_18395[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18359);

return cljs.core.cst$kw$recur;
} else {
throw e18377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__18396 = state_18359;
state_18359 = G__18396;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_18359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_18359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___18384,out))
})();
var state__16109__auto__ = (function (){var statearr_18379 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_18379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___18384);

return statearr_18379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___18384,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18397 = [];
var len__7542__auto___18400 = arguments.length;
var i__7543__auto___18401 = (0);
while(true){
if((i__7543__auto___18401 < len__7542__auto___18400)){
args18397.push((arguments[i__7543__auto___18401]));

var G__18402 = (i__7543__auto___18401 + (1));
i__7543__auto___18401 = G__18402;
continue;
} else {
}
break;
}

var G__18399 = args18397.length;
switch (G__18399) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18397.length)].join('')));

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
var c__16107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto__){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto__){
return (function (state_18569){
var state_val_18570 = (state_18569[(1)]);
if((state_val_18570 === (7))){
var inst_18565 = (state_18569[(2)]);
var state_18569__$1 = state_18569;
var statearr_18571_18612 = state_18569__$1;
(statearr_18571_18612[(2)] = inst_18565);

(statearr_18571_18612[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (20))){
var inst_18535 = (state_18569[(7)]);
var inst_18546 = (state_18569[(2)]);
var inst_18547 = cljs.core.next(inst_18535);
var inst_18521 = inst_18547;
var inst_18522 = null;
var inst_18523 = (0);
var inst_18524 = (0);
var state_18569__$1 = (function (){var statearr_18572 = state_18569;
(statearr_18572[(8)] = inst_18521);

(statearr_18572[(9)] = inst_18523);

(statearr_18572[(10)] = inst_18546);

(statearr_18572[(11)] = inst_18522);

(statearr_18572[(12)] = inst_18524);

return statearr_18572;
})();
var statearr_18573_18613 = state_18569__$1;
(statearr_18573_18613[(2)] = null);

(statearr_18573_18613[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (1))){
var state_18569__$1 = state_18569;
var statearr_18574_18614 = state_18569__$1;
(statearr_18574_18614[(2)] = null);

(statearr_18574_18614[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (4))){
var inst_18510 = (state_18569[(13)]);
var inst_18510__$1 = (state_18569[(2)]);
var inst_18511 = (inst_18510__$1 == null);
var state_18569__$1 = (function (){var statearr_18575 = state_18569;
(statearr_18575[(13)] = inst_18510__$1);

return statearr_18575;
})();
if(cljs.core.truth_(inst_18511)){
var statearr_18576_18615 = state_18569__$1;
(statearr_18576_18615[(1)] = (5));

} else {
var statearr_18577_18616 = state_18569__$1;
(statearr_18577_18616[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (15))){
var state_18569__$1 = state_18569;
var statearr_18581_18617 = state_18569__$1;
(statearr_18581_18617[(2)] = null);

(statearr_18581_18617[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (21))){
var state_18569__$1 = state_18569;
var statearr_18582_18618 = state_18569__$1;
(statearr_18582_18618[(2)] = null);

(statearr_18582_18618[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (13))){
var inst_18521 = (state_18569[(8)]);
var inst_18523 = (state_18569[(9)]);
var inst_18522 = (state_18569[(11)]);
var inst_18524 = (state_18569[(12)]);
var inst_18531 = (state_18569[(2)]);
var inst_18532 = (inst_18524 + (1));
var tmp18578 = inst_18521;
var tmp18579 = inst_18523;
var tmp18580 = inst_18522;
var inst_18521__$1 = tmp18578;
var inst_18522__$1 = tmp18580;
var inst_18523__$1 = tmp18579;
var inst_18524__$1 = inst_18532;
var state_18569__$1 = (function (){var statearr_18583 = state_18569;
(statearr_18583[(8)] = inst_18521__$1);

(statearr_18583[(14)] = inst_18531);

(statearr_18583[(9)] = inst_18523__$1);

(statearr_18583[(11)] = inst_18522__$1);

(statearr_18583[(12)] = inst_18524__$1);

return statearr_18583;
})();
var statearr_18584_18619 = state_18569__$1;
(statearr_18584_18619[(2)] = null);

(statearr_18584_18619[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (22))){
var state_18569__$1 = state_18569;
var statearr_18585_18620 = state_18569__$1;
(statearr_18585_18620[(2)] = null);

(statearr_18585_18620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (6))){
var inst_18510 = (state_18569[(13)]);
var inst_18519 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18510) : f.call(null,inst_18510));
var inst_18520 = cljs.core.seq(inst_18519);
var inst_18521 = inst_18520;
var inst_18522 = null;
var inst_18523 = (0);
var inst_18524 = (0);
var state_18569__$1 = (function (){var statearr_18586 = state_18569;
(statearr_18586[(8)] = inst_18521);

(statearr_18586[(9)] = inst_18523);

(statearr_18586[(11)] = inst_18522);

(statearr_18586[(12)] = inst_18524);

return statearr_18586;
})();
var statearr_18587_18621 = state_18569__$1;
(statearr_18587_18621[(2)] = null);

(statearr_18587_18621[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (17))){
var inst_18535 = (state_18569[(7)]);
var inst_18539 = cljs.core.chunk_first(inst_18535);
var inst_18540 = cljs.core.chunk_rest(inst_18535);
var inst_18541 = cljs.core.count(inst_18539);
var inst_18521 = inst_18540;
var inst_18522 = inst_18539;
var inst_18523 = inst_18541;
var inst_18524 = (0);
var state_18569__$1 = (function (){var statearr_18588 = state_18569;
(statearr_18588[(8)] = inst_18521);

(statearr_18588[(9)] = inst_18523);

(statearr_18588[(11)] = inst_18522);

(statearr_18588[(12)] = inst_18524);

return statearr_18588;
})();
var statearr_18589_18622 = state_18569__$1;
(statearr_18589_18622[(2)] = null);

(statearr_18589_18622[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (3))){
var inst_18567 = (state_18569[(2)]);
var state_18569__$1 = state_18569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18569__$1,inst_18567);
} else {
if((state_val_18570 === (12))){
var inst_18555 = (state_18569[(2)]);
var state_18569__$1 = state_18569;
var statearr_18590_18623 = state_18569__$1;
(statearr_18590_18623[(2)] = inst_18555);

(statearr_18590_18623[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (2))){
var state_18569__$1 = state_18569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18569__$1,(4),in$);
} else {
if((state_val_18570 === (23))){
var inst_18563 = (state_18569[(2)]);
var state_18569__$1 = state_18569;
var statearr_18591_18624 = state_18569__$1;
(statearr_18591_18624[(2)] = inst_18563);

(statearr_18591_18624[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (19))){
var inst_18550 = (state_18569[(2)]);
var state_18569__$1 = state_18569;
var statearr_18592_18625 = state_18569__$1;
(statearr_18592_18625[(2)] = inst_18550);

(statearr_18592_18625[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (11))){
var inst_18521 = (state_18569[(8)]);
var inst_18535 = (state_18569[(7)]);
var inst_18535__$1 = cljs.core.seq(inst_18521);
var state_18569__$1 = (function (){var statearr_18593 = state_18569;
(statearr_18593[(7)] = inst_18535__$1);

return statearr_18593;
})();
if(inst_18535__$1){
var statearr_18594_18626 = state_18569__$1;
(statearr_18594_18626[(1)] = (14));

} else {
var statearr_18595_18627 = state_18569__$1;
(statearr_18595_18627[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (9))){
var inst_18557 = (state_18569[(2)]);
var inst_18558 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18569__$1 = (function (){var statearr_18596 = state_18569;
(statearr_18596[(15)] = inst_18557);

return statearr_18596;
})();
if(cljs.core.truth_(inst_18558)){
var statearr_18597_18628 = state_18569__$1;
(statearr_18597_18628[(1)] = (21));

} else {
var statearr_18598_18629 = state_18569__$1;
(statearr_18598_18629[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (5))){
var inst_18513 = cljs.core.async.close_BANG_(out);
var state_18569__$1 = state_18569;
var statearr_18599_18630 = state_18569__$1;
(statearr_18599_18630[(2)] = inst_18513);

(statearr_18599_18630[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (14))){
var inst_18535 = (state_18569[(7)]);
var inst_18537 = cljs.core.chunked_seq_QMARK_(inst_18535);
var state_18569__$1 = state_18569;
if(inst_18537){
var statearr_18600_18631 = state_18569__$1;
(statearr_18600_18631[(1)] = (17));

} else {
var statearr_18601_18632 = state_18569__$1;
(statearr_18601_18632[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (16))){
var inst_18553 = (state_18569[(2)]);
var state_18569__$1 = state_18569;
var statearr_18602_18633 = state_18569__$1;
(statearr_18602_18633[(2)] = inst_18553);

(statearr_18602_18633[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18570 === (10))){
var inst_18522 = (state_18569[(11)]);
var inst_18524 = (state_18569[(12)]);
var inst_18529 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18522,inst_18524);
var state_18569__$1 = state_18569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18569__$1,(13),out,inst_18529);
} else {
if((state_val_18570 === (18))){
var inst_18535 = (state_18569[(7)]);
var inst_18544 = cljs.core.first(inst_18535);
var state_18569__$1 = state_18569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18569__$1,(20),out,inst_18544);
} else {
if((state_val_18570 === (8))){
var inst_18523 = (state_18569[(9)]);
var inst_18524 = (state_18569[(12)]);
var inst_18526 = (inst_18524 < inst_18523);
var inst_18527 = inst_18526;
var state_18569__$1 = state_18569;
if(cljs.core.truth_(inst_18527)){
var statearr_18603_18634 = state_18569__$1;
(statearr_18603_18634[(1)] = (10));

} else {
var statearr_18604_18635 = state_18569__$1;
(statearr_18604_18635[(1)] = (11));

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
});})(c__16107__auto__))
;
return ((function (switch__15993__auto__,c__16107__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15994__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15994__auto____0 = (function (){
var statearr_18608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18608[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15994__auto__);

(statearr_18608[(1)] = (1));

return statearr_18608;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15994__auto____1 = (function (state_18569){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_18569);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e18609){if((e18609 instanceof Object)){
var ex__15997__auto__ = e18609;
var statearr_18610_18636 = state_18569;
(statearr_18610_18636[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18569);

return cljs.core.cst$kw$recur;
} else {
throw e18609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__18637 = state_18569;
state_18569 = G__18637;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15994__auto__ = function(state_18569){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15994__auto____1.call(this,state_18569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15994__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15994__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto__))
})();
var state__16109__auto__ = (function (){var statearr_18611 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_18611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto__);

return statearr_18611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto__))
);

return c__16107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18638 = [];
var len__7542__auto___18641 = arguments.length;
var i__7543__auto___18642 = (0);
while(true){
if((i__7543__auto___18642 < len__7542__auto___18641)){
args18638.push((arguments[i__7543__auto___18642]));

var G__18643 = (i__7543__auto___18642 + (1));
i__7543__auto___18642 = G__18643;
continue;
} else {
}
break;
}

var G__18640 = args18638.length;
switch (G__18640) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18638.length)].join('')));

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
var args18645 = [];
var len__7542__auto___18648 = arguments.length;
var i__7543__auto___18649 = (0);
while(true){
if((i__7543__auto___18649 < len__7542__auto___18648)){
args18645.push((arguments[i__7543__auto___18649]));

var G__18650 = (i__7543__auto___18649 + (1));
i__7543__auto___18649 = G__18650;
continue;
} else {
}
break;
}

var G__18647 = args18645.length;
switch (G__18647) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18645.length)].join('')));

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
var args18652 = [];
var len__7542__auto___18703 = arguments.length;
var i__7543__auto___18704 = (0);
while(true){
if((i__7543__auto___18704 < len__7542__auto___18703)){
args18652.push((arguments[i__7543__auto___18704]));

var G__18705 = (i__7543__auto___18704 + (1));
i__7543__auto___18704 = G__18705;
continue;
} else {
}
break;
}

var G__18654 = args18652.length;
switch (G__18654) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18652.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___18707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___18707,out){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___18707,out){
return (function (state_18678){
var state_val_18679 = (state_18678[(1)]);
if((state_val_18679 === (7))){
var inst_18673 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
var statearr_18680_18708 = state_18678__$1;
(statearr_18680_18708[(2)] = inst_18673);

(statearr_18680_18708[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18679 === (1))){
var inst_18655 = null;
var state_18678__$1 = (function (){var statearr_18681 = state_18678;
(statearr_18681[(7)] = inst_18655);

return statearr_18681;
})();
var statearr_18682_18709 = state_18678__$1;
(statearr_18682_18709[(2)] = null);

(statearr_18682_18709[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18679 === (4))){
var inst_18658 = (state_18678[(8)]);
var inst_18658__$1 = (state_18678[(2)]);
var inst_18659 = (inst_18658__$1 == null);
var inst_18660 = cljs.core.not(inst_18659);
var state_18678__$1 = (function (){var statearr_18683 = state_18678;
(statearr_18683[(8)] = inst_18658__$1);

return statearr_18683;
})();
if(inst_18660){
var statearr_18684_18710 = state_18678__$1;
(statearr_18684_18710[(1)] = (5));

} else {
var statearr_18685_18711 = state_18678__$1;
(statearr_18685_18711[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18679 === (6))){
var state_18678__$1 = state_18678;
var statearr_18686_18712 = state_18678__$1;
(statearr_18686_18712[(2)] = null);

(statearr_18686_18712[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18679 === (3))){
var inst_18675 = (state_18678[(2)]);
var inst_18676 = cljs.core.async.close_BANG_(out);
var state_18678__$1 = (function (){var statearr_18687 = state_18678;
(statearr_18687[(9)] = inst_18675);

return statearr_18687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18678__$1,inst_18676);
} else {
if((state_val_18679 === (2))){
var state_18678__$1 = state_18678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18678__$1,(4),ch);
} else {
if((state_val_18679 === (11))){
var inst_18658 = (state_18678[(8)]);
var inst_18667 = (state_18678[(2)]);
var inst_18655 = inst_18658;
var state_18678__$1 = (function (){var statearr_18688 = state_18678;
(statearr_18688[(7)] = inst_18655);

(statearr_18688[(10)] = inst_18667);

return statearr_18688;
})();
var statearr_18689_18713 = state_18678__$1;
(statearr_18689_18713[(2)] = null);

(statearr_18689_18713[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18679 === (9))){
var inst_18658 = (state_18678[(8)]);
var state_18678__$1 = state_18678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18678__$1,(11),out,inst_18658);
} else {
if((state_val_18679 === (5))){
var inst_18658 = (state_18678[(8)]);
var inst_18655 = (state_18678[(7)]);
var inst_18662 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18658,inst_18655);
var state_18678__$1 = state_18678;
if(inst_18662){
var statearr_18691_18714 = state_18678__$1;
(statearr_18691_18714[(1)] = (8));

} else {
var statearr_18692_18715 = state_18678__$1;
(statearr_18692_18715[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18679 === (10))){
var inst_18670 = (state_18678[(2)]);
var state_18678__$1 = state_18678;
var statearr_18693_18716 = state_18678__$1;
(statearr_18693_18716[(2)] = inst_18670);

(statearr_18693_18716[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18679 === (8))){
var inst_18655 = (state_18678[(7)]);
var tmp18690 = inst_18655;
var inst_18655__$1 = tmp18690;
var state_18678__$1 = (function (){var statearr_18694 = state_18678;
(statearr_18694[(7)] = inst_18655__$1);

return statearr_18694;
})();
var statearr_18695_18717 = state_18678__$1;
(statearr_18695_18717[(2)] = null);

(statearr_18695_18717[(1)] = (2));


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
});})(c__16107__auto___18707,out))
;
return ((function (switch__15993__auto__,c__16107__auto___18707,out){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_18699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18699[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_18699[(1)] = (1));

return statearr_18699;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_18678){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_18678);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e18700){if((e18700 instanceof Object)){
var ex__15997__auto__ = e18700;
var statearr_18701_18718 = state_18678;
(statearr_18701_18718[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18678);

return cljs.core.cst$kw$recur;
} else {
throw e18700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__18719 = state_18678;
state_18678 = G__18719;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_18678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_18678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___18707,out))
})();
var state__16109__auto__ = (function (){var statearr_18702 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_18702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___18707);

return statearr_18702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___18707,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18720 = [];
var len__7542__auto___18790 = arguments.length;
var i__7543__auto___18791 = (0);
while(true){
if((i__7543__auto___18791 < len__7542__auto___18790)){
args18720.push((arguments[i__7543__auto___18791]));

var G__18792 = (i__7543__auto___18791 + (1));
i__7543__auto___18791 = G__18792;
continue;
} else {
}
break;
}

var G__18722 = args18720.length;
switch (G__18722) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18720.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___18794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___18794,out){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___18794,out){
return (function (state_18760){
var state_val_18761 = (state_18760[(1)]);
if((state_val_18761 === (7))){
var inst_18756 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18762_18795 = state_18760__$1;
(statearr_18762_18795[(2)] = inst_18756);

(statearr_18762_18795[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (1))){
var inst_18723 = (new Array(n));
var inst_18724 = inst_18723;
var inst_18725 = (0);
var state_18760__$1 = (function (){var statearr_18763 = state_18760;
(statearr_18763[(7)] = inst_18724);

(statearr_18763[(8)] = inst_18725);

return statearr_18763;
})();
var statearr_18764_18796 = state_18760__$1;
(statearr_18764_18796[(2)] = null);

(statearr_18764_18796[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (4))){
var inst_18728 = (state_18760[(9)]);
var inst_18728__$1 = (state_18760[(2)]);
var inst_18729 = (inst_18728__$1 == null);
var inst_18730 = cljs.core.not(inst_18729);
var state_18760__$1 = (function (){var statearr_18765 = state_18760;
(statearr_18765[(9)] = inst_18728__$1);

return statearr_18765;
})();
if(inst_18730){
var statearr_18766_18797 = state_18760__$1;
(statearr_18766_18797[(1)] = (5));

} else {
var statearr_18767_18798 = state_18760__$1;
(statearr_18767_18798[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (15))){
var inst_18750 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18768_18799 = state_18760__$1;
(statearr_18768_18799[(2)] = inst_18750);

(statearr_18768_18799[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (13))){
var state_18760__$1 = state_18760;
var statearr_18769_18800 = state_18760__$1;
(statearr_18769_18800[(2)] = null);

(statearr_18769_18800[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (6))){
var inst_18725 = (state_18760[(8)]);
var inst_18746 = (inst_18725 > (0));
var state_18760__$1 = state_18760;
if(cljs.core.truth_(inst_18746)){
var statearr_18770_18801 = state_18760__$1;
(statearr_18770_18801[(1)] = (12));

} else {
var statearr_18771_18802 = state_18760__$1;
(statearr_18771_18802[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (3))){
var inst_18758 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18760__$1,inst_18758);
} else {
if((state_val_18761 === (12))){
var inst_18724 = (state_18760[(7)]);
var inst_18748 = cljs.core.vec(inst_18724);
var state_18760__$1 = state_18760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18760__$1,(15),out,inst_18748);
} else {
if((state_val_18761 === (2))){
var state_18760__$1 = state_18760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18760__$1,(4),ch);
} else {
if((state_val_18761 === (11))){
var inst_18740 = (state_18760[(2)]);
var inst_18741 = (new Array(n));
var inst_18724 = inst_18741;
var inst_18725 = (0);
var state_18760__$1 = (function (){var statearr_18772 = state_18760;
(statearr_18772[(10)] = inst_18740);

(statearr_18772[(7)] = inst_18724);

(statearr_18772[(8)] = inst_18725);

return statearr_18772;
})();
var statearr_18773_18803 = state_18760__$1;
(statearr_18773_18803[(2)] = null);

(statearr_18773_18803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (9))){
var inst_18724 = (state_18760[(7)]);
var inst_18738 = cljs.core.vec(inst_18724);
var state_18760__$1 = state_18760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18760__$1,(11),out,inst_18738);
} else {
if((state_val_18761 === (5))){
var inst_18733 = (state_18760[(11)]);
var inst_18728 = (state_18760[(9)]);
var inst_18724 = (state_18760[(7)]);
var inst_18725 = (state_18760[(8)]);
var inst_18732 = (inst_18724[inst_18725] = inst_18728);
var inst_18733__$1 = (inst_18725 + (1));
var inst_18734 = (inst_18733__$1 < n);
var state_18760__$1 = (function (){var statearr_18774 = state_18760;
(statearr_18774[(11)] = inst_18733__$1);

(statearr_18774[(12)] = inst_18732);

return statearr_18774;
})();
if(cljs.core.truth_(inst_18734)){
var statearr_18775_18804 = state_18760__$1;
(statearr_18775_18804[(1)] = (8));

} else {
var statearr_18776_18805 = state_18760__$1;
(statearr_18776_18805[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (14))){
var inst_18753 = (state_18760[(2)]);
var inst_18754 = cljs.core.async.close_BANG_(out);
var state_18760__$1 = (function (){var statearr_18778 = state_18760;
(statearr_18778[(13)] = inst_18753);

return statearr_18778;
})();
var statearr_18779_18806 = state_18760__$1;
(statearr_18779_18806[(2)] = inst_18754);

(statearr_18779_18806[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (10))){
var inst_18744 = (state_18760[(2)]);
var state_18760__$1 = state_18760;
var statearr_18780_18807 = state_18760__$1;
(statearr_18780_18807[(2)] = inst_18744);

(statearr_18780_18807[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18761 === (8))){
var inst_18733 = (state_18760[(11)]);
var inst_18724 = (state_18760[(7)]);
var tmp18777 = inst_18724;
var inst_18724__$1 = tmp18777;
var inst_18725 = inst_18733;
var state_18760__$1 = (function (){var statearr_18781 = state_18760;
(statearr_18781[(7)] = inst_18724__$1);

(statearr_18781[(8)] = inst_18725);

return statearr_18781;
})();
var statearr_18782_18808 = state_18760__$1;
(statearr_18782_18808[(2)] = null);

(statearr_18782_18808[(1)] = (2));


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
});})(c__16107__auto___18794,out))
;
return ((function (switch__15993__auto__,c__16107__auto___18794,out){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_18786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18786[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_18786[(1)] = (1));

return statearr_18786;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_18760){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_18760);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e18787){if((e18787 instanceof Object)){
var ex__15997__auto__ = e18787;
var statearr_18788_18809 = state_18760;
(statearr_18788_18809[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18760);

return cljs.core.cst$kw$recur;
} else {
throw e18787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__18810 = state_18760;
state_18760 = G__18810;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_18760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_18760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___18794,out))
})();
var state__16109__auto__ = (function (){var statearr_18789 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_18789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___18794);

return statearr_18789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___18794,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18811 = [];
var len__7542__auto___18885 = arguments.length;
var i__7543__auto___18886 = (0);
while(true){
if((i__7543__auto___18886 < len__7542__auto___18885)){
args18811.push((arguments[i__7543__auto___18886]));

var G__18887 = (i__7543__auto___18886 + (1));
i__7543__auto___18886 = G__18887;
continue;
} else {
}
break;
}

var G__18813 = args18811.length;
switch (G__18813) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18811.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16107__auto___18889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16107__auto___18889,out){
return (function (){
var f__16108__auto__ = (function (){var switch__15993__auto__ = ((function (c__16107__auto___18889,out){
return (function (state_18855){
var state_val_18856 = (state_18855[(1)]);
if((state_val_18856 === (7))){
var inst_18851 = (state_18855[(2)]);
var state_18855__$1 = state_18855;
var statearr_18857_18890 = state_18855__$1;
(statearr_18857_18890[(2)] = inst_18851);

(statearr_18857_18890[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (1))){
var inst_18814 = [];
var inst_18815 = inst_18814;
var inst_18816 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18855__$1 = (function (){var statearr_18858 = state_18855;
(statearr_18858[(7)] = inst_18815);

(statearr_18858[(8)] = inst_18816);

return statearr_18858;
})();
var statearr_18859_18891 = state_18855__$1;
(statearr_18859_18891[(2)] = null);

(statearr_18859_18891[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (4))){
var inst_18819 = (state_18855[(9)]);
var inst_18819__$1 = (state_18855[(2)]);
var inst_18820 = (inst_18819__$1 == null);
var inst_18821 = cljs.core.not(inst_18820);
var state_18855__$1 = (function (){var statearr_18860 = state_18855;
(statearr_18860[(9)] = inst_18819__$1);

return statearr_18860;
})();
if(inst_18821){
var statearr_18861_18892 = state_18855__$1;
(statearr_18861_18892[(1)] = (5));

} else {
var statearr_18862_18893 = state_18855__$1;
(statearr_18862_18893[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (15))){
var inst_18845 = (state_18855[(2)]);
var state_18855__$1 = state_18855;
var statearr_18863_18894 = state_18855__$1;
(statearr_18863_18894[(2)] = inst_18845);

(statearr_18863_18894[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (13))){
var state_18855__$1 = state_18855;
var statearr_18864_18895 = state_18855__$1;
(statearr_18864_18895[(2)] = null);

(statearr_18864_18895[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (6))){
var inst_18815 = (state_18855[(7)]);
var inst_18840 = inst_18815.length;
var inst_18841 = (inst_18840 > (0));
var state_18855__$1 = state_18855;
if(cljs.core.truth_(inst_18841)){
var statearr_18865_18896 = state_18855__$1;
(statearr_18865_18896[(1)] = (12));

} else {
var statearr_18866_18897 = state_18855__$1;
(statearr_18866_18897[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (3))){
var inst_18853 = (state_18855[(2)]);
var state_18855__$1 = state_18855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18855__$1,inst_18853);
} else {
if((state_val_18856 === (12))){
var inst_18815 = (state_18855[(7)]);
var inst_18843 = cljs.core.vec(inst_18815);
var state_18855__$1 = state_18855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18855__$1,(15),out,inst_18843);
} else {
if((state_val_18856 === (2))){
var state_18855__$1 = state_18855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18855__$1,(4),ch);
} else {
if((state_val_18856 === (11))){
var inst_18823 = (state_18855[(10)]);
var inst_18819 = (state_18855[(9)]);
var inst_18833 = (state_18855[(2)]);
var inst_18834 = [];
var inst_18835 = inst_18834.push(inst_18819);
var inst_18815 = inst_18834;
var inst_18816 = inst_18823;
var state_18855__$1 = (function (){var statearr_18867 = state_18855;
(statearr_18867[(11)] = inst_18835);

(statearr_18867[(7)] = inst_18815);

(statearr_18867[(8)] = inst_18816);

(statearr_18867[(12)] = inst_18833);

return statearr_18867;
})();
var statearr_18868_18898 = state_18855__$1;
(statearr_18868_18898[(2)] = null);

(statearr_18868_18898[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (9))){
var inst_18815 = (state_18855[(7)]);
var inst_18831 = cljs.core.vec(inst_18815);
var state_18855__$1 = state_18855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18855__$1,(11),out,inst_18831);
} else {
if((state_val_18856 === (5))){
var inst_18823 = (state_18855[(10)]);
var inst_18816 = (state_18855[(8)]);
var inst_18819 = (state_18855[(9)]);
var inst_18823__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18819) : f.call(null,inst_18819));
var inst_18824 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18823__$1,inst_18816);
var inst_18825 = cljs.core.keyword_identical_QMARK_(inst_18816,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18826 = (inst_18824) || (inst_18825);
var state_18855__$1 = (function (){var statearr_18869 = state_18855;
(statearr_18869[(10)] = inst_18823__$1);

return statearr_18869;
})();
if(cljs.core.truth_(inst_18826)){
var statearr_18870_18899 = state_18855__$1;
(statearr_18870_18899[(1)] = (8));

} else {
var statearr_18871_18900 = state_18855__$1;
(statearr_18871_18900[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (14))){
var inst_18848 = (state_18855[(2)]);
var inst_18849 = cljs.core.async.close_BANG_(out);
var state_18855__$1 = (function (){var statearr_18873 = state_18855;
(statearr_18873[(13)] = inst_18848);

return statearr_18873;
})();
var statearr_18874_18901 = state_18855__$1;
(statearr_18874_18901[(2)] = inst_18849);

(statearr_18874_18901[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (10))){
var inst_18838 = (state_18855[(2)]);
var state_18855__$1 = state_18855;
var statearr_18875_18902 = state_18855__$1;
(statearr_18875_18902[(2)] = inst_18838);

(statearr_18875_18902[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18856 === (8))){
var inst_18823 = (state_18855[(10)]);
var inst_18815 = (state_18855[(7)]);
var inst_18819 = (state_18855[(9)]);
var inst_18828 = inst_18815.push(inst_18819);
var tmp18872 = inst_18815;
var inst_18815__$1 = tmp18872;
var inst_18816 = inst_18823;
var state_18855__$1 = (function (){var statearr_18876 = state_18855;
(statearr_18876[(7)] = inst_18815__$1);

(statearr_18876[(8)] = inst_18816);

(statearr_18876[(14)] = inst_18828);

return statearr_18876;
})();
var statearr_18877_18903 = state_18855__$1;
(statearr_18877_18903[(2)] = null);

(statearr_18877_18903[(1)] = (2));


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
});})(c__16107__auto___18889,out))
;
return ((function (switch__15993__auto__,c__16107__auto___18889,out){
return (function() {
var cljs$core$async$state_machine__15994__auto__ = null;
var cljs$core$async$state_machine__15994__auto____0 = (function (){
var statearr_18881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18881[(0)] = cljs$core$async$state_machine__15994__auto__);

(statearr_18881[(1)] = (1));

return statearr_18881;
});
var cljs$core$async$state_machine__15994__auto____1 = (function (state_18855){
while(true){
var ret_value__15995__auto__ = (function (){try{while(true){
var result__15996__auto__ = switch__15993__auto__(state_18855);
if(cljs.core.keyword_identical_QMARK_(result__15996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15996__auto__;
}
break;
}
}catch (e18882){if((e18882 instanceof Object)){
var ex__15997__auto__ = e18882;
var statearr_18883_18904 = state_18855;
(statearr_18883_18904[(5)] = ex__15997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18855);

return cljs.core.cst$kw$recur;
} else {
throw e18882;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15995__auto__,cljs.core.cst$kw$recur)){
var G__18905 = state_18855;
state_18855 = G__18905;
continue;
} else {
return ret_value__15995__auto__;
}
break;
}
});
cljs$core$async$state_machine__15994__auto__ = function(state_18855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15994__auto____1.call(this,state_18855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15994__auto____0;
cljs$core$async$state_machine__15994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15994__auto____1;
return cljs$core$async$state_machine__15994__auto__;
})()
;})(switch__15993__auto__,c__16107__auto___18889,out))
})();
var state__16109__auto__ = (function (){var statearr_18884 = (f__16108__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16108__auto__.cljs$core$IFn$_invoke$arity$0() : f__16108__auto__.call(null));
(statearr_18884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16107__auto___18889);

return statearr_18884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16109__auto__);
});})(c__16107__auto___18889,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
