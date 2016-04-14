// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.navigation_3d');
goog.require('cljs.core');
goog.require('quil.core');
quil.middlewares.navigation_3d.missing_navigation_key_error = [cljs.core.str("state map is missing :navigation-3d key. "),cljs.core.str("Did you accidentally removed it from the state in "),cljs.core.str(":update or any other handler?")].join('');
/**
 * Asserts that state map contains :navigation-2d object.
 */
quil.middlewares.navigation_3d.assert_state_has_navigation = (function quil$middlewares$navigation_3d$assert_state_has_navigation(state){
if(cljs.core.truth_(cljs.core.cst$kw$navigation_DASH_3d.cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
throw (new Error(quil.middlewares.navigation_3d.missing_navigation_key_error));
}
});
/**
 * Default position configuration. Check default configuration in
 *   'camera' function.
 */
quil.middlewares.navigation_3d.default_position = (function quil$middlewares$navigation_3d$default_position(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / 2.0),(quil.core.height() / 2.0),((quil.core.height() / 2.0) / quil.core.tan(((quil.core.PI * 60.0) / 360.0)))], null),cljs.core.cst$kw$straight,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),cljs.core.cst$kw$up,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null);
});
/**
 * Rotates vector v by angle with axis.
 *   Formula is taken from wiki:
 *   http://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle
 */
quil.middlewares.navigation_3d.rotate_by_axis_and_angle = (function quil$middlewares$navigation_3d$rotate_by_axis_and_angle(v,axis,angle){
var vec__14227 = axis;
var a_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227,(0),null);
var a_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227,(1),null);
var a_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14227,(2),null);
var vec__14228 = v;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14228,(2),null);
var cs = quil.core.cos(angle);
var _cs = ((1) - cs);
var sn = quil.core.sin(angle);
var a = (cs + ((a_x * a_x) * _cs));
var b = (((a_x * a_y) * _cs) - (a_z * sn));
var c = (((a_x * a_z) * _cs) + (a_y * sn));
var d = (((a_x * a_y) * _cs) + (a_z * sn));
var e = (cs + ((a_y * a_y) * _cs));
var f = (((a_y * a_z) * _cs) - (a_x * sn));
var g = (((a_x * a_z) * _cs) - (a_y * sn));
var h = (((a_y * a_z) * _cs) + (a_x * sn));
var i = (cs + ((a_z * a_z) * _cs));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((a * x) + (b * y)) + (c * z)),(((d * x) + (e * y)) + (f * z)),(((g * x) + (h * y)) + (i * z))], null);
});
/**
 * Rotates nav-3d configuration left-right. angle positive - rotate right,
 *   negative - left.
 */
quil.middlewares.navigation_3d.rotate_lr = (function quil$middlewares$navigation_3d$rotate_lr(nav_3d,angle){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(nav_3d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$straight], null),quil.middlewares.navigation_3d.rotate_by_axis_and_angle,cljs.core.cst$kw$up.cljs$core$IFn$_invoke$arity$1(nav_3d),angle);
});
/**
 * Vector cross-product: http://en.wikipedia.org/wiki/Cross_product
 */
quil.middlewares.navigation_3d.cross_product = (function quil$middlewares$navigation_3d$cross_product(p__14229,p__14230){
var vec__14233 = p__14229;
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(0),null);
var u2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(1),null);
var u3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(2),null);
var vec__14234 = p__14230;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14234,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14234,(1),null);
var v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14234,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((u2 * v3) - (u3 * v2)),((u3 * v1) - (u1 * v3)),((u1 * v2) - (u2 * v1))], null);
});
/**
 * Multiply vector v by scalar mult.
 */
quil.middlewares.navigation_3d.v_mult = (function quil$middlewares$navigation_3d$v_mult(v,mult){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14235_SHARP_){
return (p1__14235_SHARP_ * mult);
}),v);
});
/**
 * Sum of 2 vectors.
 */
quil.middlewares.navigation_3d.v_plus = (function quil$middlewares$navigation_3d$v_plus(v1,v2){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,v1,v2);
});
/**
 * Returns vector opposite to vector v.
 */
quil.middlewares.navigation_3d.v_opposite = (function quil$middlewares$navigation_3d$v_opposite(v){
return quil.middlewares.navigation_3d.v_mult(v,(-1));
});
/**
 * Normalize vector, returning vector
 *   which has same direction but with norm equals to 1.
 */
quil.middlewares.navigation_3d.v_normalize = (function quil$middlewares$navigation_3d$v_normalize(v){
var norm = quil.core.sqrt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(quil.core.sq,v)));
return quil.middlewares.navigation_3d.v_mult(v,((1) / norm));
});
/**
 * Rotates nav-3d configuration up-down.
 */
quil.middlewares.navigation_3d.rotate_ud = (function quil$middlewares$navigation_3d$rotate_ud(nav_3d,angle){
var axis = quil.middlewares.navigation_3d.cross_product(cljs.core.cst$kw$straight.cljs$core$IFn$_invoke$arity$1(nav_3d),cljs.core.cst$kw$up.cljs$core$IFn$_invoke$arity$1(nav_3d));
var rotate = ((function (axis){
return (function (p1__14236_SHARP_){
return quil.middlewares.navigation_3d.rotate_by_axis_and_angle(p1__14236_SHARP_,axis,angle);
});})(axis))
;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(nav_3d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$straight], null),rotate),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up], null),rotate);
});
/**
 * Mouse handler function which rotates nav-3d configuration.
 *   It uses mouse from event object and pixels-in-360 to calculate
 *   angles to rotate.
 */
quil.middlewares.navigation_3d.rotate = (function quil$middlewares$navigation_3d$rotate(state,event,pixels_in_360){
quil.middlewares.navigation_3d.assert_state_has_navigation(state);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),cljs.core.cst$kw$p_DASH_x.cljs$core$IFn$_invoke$arity$1(event),cljs.core.array_seq([cljs.core.cst$kw$p_DASH_y.cljs$core$IFn$_invoke$arity$1(event)], 0))){
return state;
} else {
var dx = (cljs.core.cst$kw$p_DASH_x.cljs$core$IFn$_invoke$arity$1(event) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(event));
var dy = (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(event) - cljs.core.cst$kw$p_DASH_y.cljs$core$IFn$_invoke$arity$1(event));
var angle_lr = quil.core.map_range(dx,(0),pixels_in_360,(0),quil.core.TWO_PI);
var angle_ud = quil.core.map_range(dy,(0),pixels_in_360,(0),quil.core.TWO_PI);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_3d], null),((function (dx,dy,angle_lr,angle_ud){
return (function (p1__14237_SHARP_){
return quil.middlewares.navigation_3d.rotate_ud(quil.middlewares.navigation_3d.rotate_lr(p1__14237_SHARP_,angle_lr),angle_ud);
});})(dx,dy,angle_lr,angle_ud))
);
}
});
quil.middlewares.navigation_3d.space = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(" ");
/**
 * Keyboard handler function which moves nav-3d configuration.
 *   It uses keyboard key from event object to determing in which
 *   direction to move.
 */
quil.middlewares.navigation_3d.move = (function quil$middlewares$navigation_3d$move(state,event,step_size){
quil.middlewares.navigation_3d.assert_state_has_navigation(state);

var map__14244 = cljs.core.cst$kw$navigation_DASH_3d.cljs$core$IFn$_invoke$arity$1(state);
var map__14244__$1 = ((((!((map__14244 == null)))?((((map__14244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14244):map__14244);
var up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14244__$1,cljs.core.cst$kw$up);
var straight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14244__$1,cljs.core.cst$kw$straight);
var temp__4655__auto__ = (function (){var pred__14246 = cljs.core._EQ_;
var expr__14247 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_((pred__14246.cljs$core$IFn$_invoke$arity$2 ? pred__14246.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$w,expr__14247) : pred__14246.call(null,cljs.core.cst$kw$w,expr__14247)))){
return straight;
} else {
if(cljs.core.truth_((pred__14246.cljs$core$IFn$_invoke$arity$2 ? pred__14246.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$s,expr__14247) : pred__14246.call(null,cljs.core.cst$kw$s,expr__14247)))){
return quil.middlewares.navigation_3d.v_opposite(straight);
} else {
if(cljs.core.truth_((pred__14246.cljs$core$IFn$_invoke$arity$2 ? pred__14246.cljs$core$IFn$_invoke$arity$2(quil.middlewares.navigation_3d.space,expr__14247) : pred__14246.call(null,quil.middlewares.navigation_3d.space,expr__14247)))){
return quil.middlewares.navigation_3d.v_opposite(up);
} else {
if(cljs.core.truth_((pred__14246.cljs$core$IFn$_invoke$arity$2 ? pred__14246.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$z,expr__14247) : pred__14246.call(null,cljs.core.cst$kw$z,expr__14247)))){
return up;
} else {
if(cljs.core.truth_((pred__14246.cljs$core$IFn$_invoke$arity$2 ? pred__14246.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$d,expr__14247) : pred__14246.call(null,cljs.core.cst$kw$d,expr__14247)))){
return quil.middlewares.navigation_3d.cross_product(straight,up);
} else {
if(cljs.core.truth_((pred__14246.cljs$core$IFn$_invoke$arity$2 ? pred__14246.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,expr__14247) : pred__14246.call(null,cljs.core.cst$kw$a,expr__14247)))){
return quil.middlewares.navigation_3d.cross_product(up,straight);
} else {
return null;
}
}
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var dir = temp__4655__auto__;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_3d,cljs.core.cst$kw$position], null),((function (dir,temp__4655__auto__,map__14244,map__14244__$1,up,straight){
return (function (p1__14238_SHARP_){
return quil.middlewares.navigation_3d.v_plus(p1__14238_SHARP_,quil.middlewares.navigation_3d.v_mult(dir,step_size));
});})(dir,temp__4655__auto__,map__14244,map__14244__$1,up,straight))
);
} else {
return state;
}
});
/**
 * Custom 'setup' function which creates initial position
 *   configuration and puts it to the state map.
 */
quil.middlewares.navigation_3d.setup_3d_nav = (function quil$middlewares$navigation_3d$setup_3d_nav(user_setup,user_settings){
var initial_state = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([quil.middlewares.navigation_3d.default_position(),cljs.core.select_keys(user_settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$straight,cljs.core.cst$kw$up,cljs.core.cst$kw$position], null))], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$straight], null),quil.middlewares.navigation_3d.v_normalize),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up], null),quil.middlewares.navigation_3d.v_normalize);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((user_setup.cljs$core$IFn$_invoke$arity$0 ? user_setup.cljs$core$IFn$_invoke$arity$0() : user_setup.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$navigation_DASH_3d], null),((function (initial_state){
return (function (p1__14249_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([initial_state,p1__14249_SHARP_], 0));
});})(initial_state))
);
});
/**
 * Enables navigation in 3D space. Similar to how it is done in
 *   shooters: WASD navigation, space is go up, z is go down,
 *   drag mouse to look around.
 */
quil.middlewares.navigation_3d.navigation_3d = (function quil$middlewares$navigation_3d$navigation_3d(options){
var user_settings = cljs.core.cst$kw$navigation_DASH_3d.cljs$core$IFn$_invoke$arity$1(options);
var pixels_in_360 = cljs.core.cst$kw$pixels_DASH_in_DASH_360.cljs$core$IFn$_invoke$arity$2(user_settings,(1000));
var step_size = cljs.core.cst$kw$step_DASH_size.cljs$core$IFn$_invoke$arity$2(user_settings,(20));
var rotate_on = cljs.core.cst$kw$rotate_DASH_on.cljs$core$IFn$_invoke$arity$2(user_settings,cljs.core.cst$kw$mouse_DASH_dragged);
var draw = cljs.core.cst$kw$draw.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on){
return (function (state){
return null;
});})(user_settings,pixels_in_360,step_size,rotate_on))
);
var key_pressed = cljs.core.cst$kw$key_DASH_pressed.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw){
return (function (state,_){
return state;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw))
);
var rotate_on_fn = (function (){var G__14261 = options;
var G__14262 = ((function (G__14261,user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed){
return (function (state,_){
return state;
});})(G__14261,user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed))
;
return (rotate_on.cljs$core$IFn$_invoke$arity$2 ? rotate_on.cljs$core$IFn$_invoke$arity$2(G__14261,G__14262) : rotate_on.call(null,G__14261,G__14262));
})();
var setup = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$2(options,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn){
return (function (){
return cljs.core.PersistentArrayMap.EMPTY;
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn))
);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$setup,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(quil.middlewares.navigation_3d.setup_3d_nav,setup,user_settings),cljs.core.array_seq([cljs.core.cst$kw$draw,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state){
quil.middlewares.navigation_3d.assert_state_has_navigation(state);

var map__14263_14272 = cljs.core.cst$kw$navigation_DASH_3d.cljs$core$IFn$_invoke$arity$1(state);
var map__14263_14273__$1 = ((((!((map__14263_14272 == null)))?((((map__14263_14272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14263_14272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14263_14272):map__14263_14272);
var vec__14264_14274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263_14273__$1,cljs.core.cst$kw$straight);
var c_x_14275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14264_14274,(0),null);
var c_y_14276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14264_14274,(1),null);
var c_z_14277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14264_14274,(2),null);
var vec__14265_14278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263_14273__$1,cljs.core.cst$kw$up);
var u_x_14279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14265_14278,(0),null);
var u_y_14280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14265_14278,(1),null);
var u_z_14281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14265_14278,(2),null);
var vec__14266_14282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14263_14273__$1,cljs.core.cst$kw$position);
var p_x_14283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14266_14282,(0),null);
var p_y_14284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14266_14282,(1),null);
var p_z_14285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14266_14282,(2),null);
quil.core.camera.cljs$core$IFn$_invoke$arity$9(p_x_14283,p_y_14284,p_z_14285,(p_x_14283 + c_x_14275),(p_y_14284 + c_y_14276),(p_z_14285 + c_z_14277),u_x_14279,u_y_14280,u_z_14281);

return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(state) : draw.call(null,state));
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
,cljs.core.cst$kw$key_DASH_pressed,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state,event){
var G__14268 = quil.middlewares.navigation_3d.move(state,event,step_size);
var G__14269 = event;
return (key_pressed.cljs$core$IFn$_invoke$arity$2 ? key_pressed.cljs$core$IFn$_invoke$arity$2(G__14268,G__14269) : key_pressed.call(null,G__14268,G__14269));
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
,rotate_on,((function (user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup){
return (function (state,event){
var G__14270 = quil.middlewares.navigation_3d.rotate(state,event,pixels_in_360);
var G__14271 = event;
return (rotate_on_fn.cljs$core$IFn$_invoke$arity$2 ? rotate_on_fn.cljs$core$IFn$_invoke$arity$2(G__14270,G__14271) : rotate_on_fn.call(null,G__14270,G__14271));
});})(user_settings,pixels_in_360,step_size,rotate_on,draw,key_pressed,rotate_on_fn,setup))
], 0));
});
