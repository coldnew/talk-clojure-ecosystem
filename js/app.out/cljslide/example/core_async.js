// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljslide.example.core_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljslide.example.core_async.colors = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#FF0000","#00FF00","#0000FF","#00FFFF","#FFFF00","#FF00FF"], null);
cljslide.example.core_async.make_cell = (function cljslide$example$core_async$make_cell(canvas,x,y){
var ctx = document.getElementById(canvas).getContext("2d");
var c__16111__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16111__auto__,ctx){
return (function (){
var f__16112__auto__ = (function (){var switch__15997__auto__ = ((function (c__16111__auto__,ctx){
return (function (state_21054){
var state_val_21055 = (state_21054[(1)]);
if((state_val_21055 === (1))){
var state_21054__$1 = state_21054;
var statearr_21056_21071 = state_21054__$1;
(statearr_21056_21071[(2)] = null);

(statearr_21056_21071[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21055 === (2))){
var state_21054__$1 = state_21054;
var statearr_21057_21072 = state_21054__$1;
(statearr_21057_21072[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_21055 === (3))){
var inst_21052 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21054__$1,inst_21052);
} else {
if((state_val_21055 === (4))){
var inst_21040 = cljs.core.rand_nth(cljslide.example.core_async.colors);
var inst_21041 = ctx.fillStyle = inst_21040;
var inst_21042 = ctx.fillRect(x,y,(10),(10));
var inst_21043 = cljs.core.rand_int((1000));
var inst_21044 = cljs.core.async.timeout(inst_21043);
var state_21054__$1 = (function (){var statearr_21059 = state_21054;
(statearr_21059[(7)] = inst_21041);

(statearr_21059[(8)] = inst_21042);

return statearr_21059;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21054__$1,(7),inst_21044);
} else {
if((state_val_21055 === (5))){
var state_21054__$1 = state_21054;
var statearr_21060_21073 = state_21054__$1;
(statearr_21060_21073[(2)] = null);

(statearr_21060_21073[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21055 === (6))){
var inst_21050 = (state_21054[(2)]);
var state_21054__$1 = state_21054;
var statearr_21061_21074 = state_21054__$1;
(statearr_21061_21074[(2)] = inst_21050);

(statearr_21061_21074[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21055 === (7))){
var inst_21046 = (state_21054[(2)]);
var state_21054__$1 = (function (){var statearr_21062 = state_21054;
(statearr_21062[(9)] = inst_21046);

return statearr_21062;
})();
var statearr_21063_21075 = state_21054__$1;
(statearr_21063_21075[(2)] = null);

(statearr_21063_21075[(1)] = (2));


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
});})(c__16111__auto__,ctx))
;
return ((function (switch__15997__auto__,c__16111__auto__,ctx){
return (function() {
var cljslide$example$core_async$make_cell_$_state_machine__15998__auto__ = null;
var cljslide$example$core_async$make_cell_$_state_machine__15998__auto____0 = (function (){
var statearr_21067 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21067[(0)] = cljslide$example$core_async$make_cell_$_state_machine__15998__auto__);

(statearr_21067[(1)] = (1));

return statearr_21067;
});
var cljslide$example$core_async$make_cell_$_state_machine__15998__auto____1 = (function (state_21054){
while(true){
var ret_value__15999__auto__ = (function (){try{while(true){
var result__16000__auto__ = switch__15997__auto__(state_21054);
if(cljs.core.keyword_identical_QMARK_(result__16000__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16000__auto__;
}
break;
}
}catch (e21068){if((e21068 instanceof Object)){
var ex__16001__auto__ = e21068;
var statearr_21069_21076 = state_21054;
(statearr_21069_21076[(5)] = ex__16001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21054);

return cljs.core.cst$kw$recur;
} else {
throw e21068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15999__auto__,cljs.core.cst$kw$recur)){
var G__21077 = state_21054;
state_21054 = G__21077;
continue;
} else {
return ret_value__15999__auto__;
}
break;
}
});
cljslide$example$core_async$make_cell_$_state_machine__15998__auto__ = function(state_21054){
switch(arguments.length){
case 0:
return cljslide$example$core_async$make_cell_$_state_machine__15998__auto____0.call(this);
case 1:
return cljslide$example$core_async$make_cell_$_state_machine__15998__auto____1.call(this,state_21054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljslide$example$core_async$make_cell_$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$0 = cljslide$example$core_async$make_cell_$_state_machine__15998__auto____0;
cljslide$example$core_async$make_cell_$_state_machine__15998__auto__.cljs$core$IFn$_invoke$arity$1 = cljslide$example$core_async$make_cell_$_state_machine__15998__auto____1;
return cljslide$example$core_async$make_cell_$_state_machine__15998__auto__;
})()
;})(switch__15997__auto__,c__16111__auto__,ctx))
})();
var state__16113__auto__ = (function (){var statearr_21070 = (f__16112__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16112__auto__.cljs$core$IFn$_invoke$arity$0() : f__16112__auto__.call(null));
(statearr_21070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16111__auto__);

return statearr_21070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16113__auto__);
});})(c__16111__auto__,ctx))
);

return c__16111__auto__;
});
cljslide.example.core_async.make_scene = (function cljslide$example$core_async$make_scene(canvas,rows,cols){
var n__7387__auto__ = cols;
var x = (0);
while(true){
if((x < n__7387__auto__)){
var n__7387__auto___21078__$1 = rows;
var y_21079 = (0);
while(true){
if((y_21079 < n__7387__auto___21078__$1)){
cljslide.example.core_async.make_cell(canvas,((10) * x),((10) * y_21079));

var G__21080 = (y_21079 + (1));
y_21079 = G__21080;
continue;
} else {
}
break;
}

var G__21081 = (x + (1));
x = G__21081;
continue;
} else {
return null;
}
break;
}
});
cljslide.example.core_async.make_scene("core-async-example",(100),(100));
