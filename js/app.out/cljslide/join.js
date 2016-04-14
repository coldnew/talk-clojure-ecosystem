// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljslide.join');
goog.require('cljs.core');
goog.require('goog.crypt.base64');
/**
 * Create new tab and open url.
 */
cljslide.join.open_link = (function cljslide$join$open_link(url){
return window.open(url);
});
/**
 * Join to Mailing-List
 */
cljslide.join.mailing_list = (function cljslide$join$mailing_list(){
return cljslide.join.open_link("https://groups.google.com/forum/#!forum/clojure");
});
goog.exportSymbol('cljslide.join.mailing_list', cljslide.join.mailing_list);
cljslide.join.lighttable = (function cljslide$join$lighttable(){
return cljslide.join.open_link("http://lighttable.com/");
});
goog.exportSymbol('cljslide.join.lighttable', cljslide.join.lighttable);
cljslide.join.spacemacs = (function cljslide$join$spacemacs(){
return cljslide.join.open_link("http://spacemacs.org/");
});
goog.exportSymbol('cljslide.join.spacemacs', cljslide.join.spacemacs);
cljslide.join.emacs = (function cljslide$join$emacs(){
return cljslide.join.open_link("https://www.gnu.org/software/emacs/");
});
goog.exportSymbol('cljslide.join.emacs', cljslide.join.emacs);
cljslide.join.atome = (function cljslide$join$atome(){
return cljslide.join.open_link("https://atom.io/");
});
goog.exportSymbol('cljslide.join.atome', cljslide.join.atome);
cljslide.join.nightcode = (function cljslide$join$nightcode(){
return cljslide.join.open_link("https://sekao.net/nightcode/");
});
goog.exportSymbol('cljslide.join.nightcode', cljslide.join.nightcode);
cljslide.join.cursive = (function cljslide$join$cursive(){
return cljslide.join.open_link("https://cursive-ide.com/");
});
goog.exportSymbol('cljslide.join.cursive', cljslide.join.cursive);
cljslide.join.vim = (function cljslide$join$vim(){
return cljslide.join.open_link("http://www.vim.org/");
});
goog.exportSymbol('cljslide.join.vim', cljslide.join.vim);
/**
 * Join to clojure irc
 */
cljslide.join.irc = (function cljslide$join$irc(){
return cljslide.join.open_link("https://webchat.freenode.net/?channels=clojure");
});
goog.exportSymbol('cljslide.join.irc', cljslide.join.irc);
/**
 * Join to slack
 */
cljslide.join.slack = (function cljslide$join$slack(){
return cljslide.join.open_link("http://clojurians.net/");
});
goog.exportSymbol('cljslide.join.slack', cljslide.join.slack);
/**
 * Join to clojure.tw telegram channel
 */
cljslide.join.telegram_tw = (function cljslide$join$telegram_tw(){
return cljslide.join.open_link(goog.crypt.base64.decodeString("aHR0cHM6Ly90ZWxlZ3JhbS5tZS9qb2luY2hhdC9CTjRKX0FLd25ndTVoQlBrUm81Z1l3Cg=="));
});
goog.exportSymbol('cljslide.join.telegram_tw', cljslide.join.telegram_tw);
/**
 * Join to clojure.tw facebook channel
 */
cljslide.join.facebook_tw = (function cljslide$join$facebook_tw(){
return cljslide.join.open_link("https://www.facebook.com/groups/clojure.taiwan");
});
goog.exportSymbol('cljslide.join.facebook_tw', cljslide.join.facebook_tw);
/**
 * Join to clojure.tw twitter channel
 */
cljslide.join.twitter_tw = (function cljslide$join$twitter_tw(){
return cljslide.join.open_link("https://twitter.com/clojuretw");
});
goog.exportSymbol('cljslide.join.twitter_tw', cljslide.join.twitter_tw);
/**
 * Join to clojure.tw meetup channel
 */
cljslide.join.meetup_tw = (function cljslide$join$meetup_tw(){
return cljslide.join.open_link("http://www.meetup.com/Clojure-tw/");
});
goog.exportSymbol('cljslide.join.meetup_tw', cljslide.join.meetup_tw);
cljslide.join.github_tw = (function cljslide$join$github_tw(){
return cljslide.join.open_link("https://github.com/clojure-tw");
});
goog.exportSymbol('cljslide.join.github_tw', cljslide.join.github_tw);
