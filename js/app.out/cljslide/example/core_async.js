// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljslide.example.core_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljslide.example.core_async.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF0000","#00FF00","#0000FF","#00FFFF","#FFFF00","#FF00FF"], null);
cljslide.example.core_async.make_cell = (function cljslide$example$core_async$make_cell(canvas,x,y){
var ctx = document.getElementById(canvas).getContext("2d");
var c__16105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16105__auto__,ctx){
return (function (){
var f__16106__auto__ = (function (){var switch__15991__auto__ = ((function (c__16105__auto__,ctx){
return (function (state_21048){
var state_val_21049 = (state_21048[(1)]);
if((state_val_21049 === (1))){
var state_21048__$1 = state_21048;
var statearr_21050_21065 = state_21048__$1;
(statearr_21050_21065[(2)] = null);

(statearr_21050_21065[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21049 === (2))){
var state_21048__$1 = state_21048;
var statearr_21051_21066 = state_21048__$1;
(statearr_21051_21066[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21049 === (3))){
var inst_21046 = (state_21048[(2)]);
var state_21048__$1 = state_21048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21048__$1,inst_21046);
} else {
if((state_val_21049 === (4))){
var inst_21034 = cljs.core.rand_nth(cljslide.example.core_async.colors);
var inst_21035 = ctx.fillStyle = inst_21034;
var inst_21036 = ctx.fillRect(x,y,(10),(10));
var inst_21037 = cljs.core.rand_int((1000));
var inst_21038 = cljs.core.async.timeout(inst_21037);
var state_21048__$1 = (function (){var statearr_21053 = state_21048;
(statearr_21053[(7)] = inst_21035);

(statearr_21053[(8)] = inst_21036);

return statearr_21053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21048__$1,(7),inst_21038);
} else {
if((state_val_21049 === (5))){
var state_21048__$1 = state_21048;
var statearr_21054_21067 = state_21048__$1;
(statearr_21054_21067[(2)] = null);

(statearr_21054_21067[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21049 === (6))){
var inst_21044 = (state_21048[(2)]);
var state_21048__$1 = state_21048;
var statearr_21055_21068 = state_21048__$1;
(statearr_21055_21068[(2)] = inst_21044);

(statearr_21055_21068[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21049 === (7))){
var inst_21040 = (state_21048[(2)]);
var state_21048__$1 = (function (){var statearr_21056 = state_21048;
(statearr_21056[(9)] = inst_21040);

return statearr_21056;
})();
var statearr_21057_21069 = state_21048__$1;
(statearr_21057_21069[(2)] = null);

(statearr_21057_21069[(1)] = (2));


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
});})(c__16105__auto__,ctx))
;
return ((function (switch__15991__auto__,c__16105__auto__,ctx){
return (function() {
var cljslide$example$core_async$make_cell_$_state_machine__15992__auto__ = null;
var cljslide$example$core_async$make_cell_$_state_machine__15992__auto____0 = (function (){
var statearr_21061 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21061[(0)] = cljslide$example$core_async$make_cell_$_state_machine__15992__auto__);

(statearr_21061[(1)] = (1));

return statearr_21061;
});
var cljslide$example$core_async$make_cell_$_state_machine__15992__auto____1 = (function (state_21048){
while(true){
var ret_value__15993__auto__ = (function (){try{while(true){
var result__15994__auto__ = switch__15991__auto__(state_21048);
if(cljs.core.keyword_identical_QMARK_(result__15994__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15994__auto__;
}
break;
}
}catch (e21062){if((e21062 instanceof Object)){
var ex__15995__auto__ = e21062;
var statearr_21063_21070 = state_21048;
(statearr_21063_21070[(5)] = ex__15995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21048);

return cljs.core.cst$kw$recur;
} else {
throw e21062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15993__auto__,cljs.core.cst$kw$recur)){
var G__21071 = state_21048;
state_21048 = G__21071;
continue;
} else {
return ret_value__15993__auto__;
}
break;
}
});
cljslide$example$core_async$make_cell_$_state_machine__15992__auto__ = function(state_21048){
switch(arguments.length){
case 0:
return cljslide$example$core_async$make_cell_$_state_machine__15992__auto____0.call(this);
case 1:
return cljslide$example$core_async$make_cell_$_state_machine__15992__auto____1.call(this,state_21048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljslide$example$core_async$make_cell_$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$0 = cljslide$example$core_async$make_cell_$_state_machine__15992__auto____0;
cljslide$example$core_async$make_cell_$_state_machine__15992__auto__.cljs$core$IFn$_invoke$arity$1 = cljslide$example$core_async$make_cell_$_state_machine__15992__auto____1;
return cljslide$example$core_async$make_cell_$_state_machine__15992__auto__;
})()
;})(switch__15991__auto__,c__16105__auto__,ctx))
})();
var state__16107__auto__ = (function (){var statearr_21064 = (f__16106__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16106__auto__.cljs$core$IFn$_invoke$arity$0() : f__16106__auto__.call(null));
(statearr_21064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16105__auto__);

return statearr_21064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16107__auto__);
});})(c__16105__auto__,ctx))
);

return c__16105__auto__;
});
cljslide.example.core_async.make_scene = (function cljslide$example$core_async$make_scene(canvas,rows,cols){
var n__7387__auto__ = cols;
var x = (0);
while(true){
if((x < n__7387__auto__)){
var n__7387__auto___21072__$1 = rows;
var y_21073 = (0);
while(true){
if((y_21073 < n__7387__auto___21072__$1)){
cljslide.example.core_async.make_cell(canvas,((10) * x),((10) * y_21073));

var G__21074 = (y_21073 + (1));
y_21073 = G__21074;
continue;
} else {
}
break;
}

var G__21075 = (x + (1));
x = G__21075;
continue;
} else {
return null;
}
break;
}
});
cljslide.example.core_async.make_scene("core-async-example",(100),(100));
