(ns cljslide.join
  (:require [goog.crypt.base64 :as base64]))

(defn open-link
  "Create new tab and open url."
  [url]
  (.open js/window url))

(defn ^:export
  mailing-list
  "Join to Mailing-List"
  []
  (open-link "https://groups.google.com/forum/#!forum/clojure"))

(defn ^:export
  lighttable []
  (open-link "http://lighttable.com/"))

(defn ^:export
  spacemacs []
  (open-link "http://spacemacs.org/"))

(defn ^:export
  emacs []
  (open-link "https://www.gnu.org/software/emacs/"))

(defn ^:export
  atome []
  (open-link "https://atom.io/"))

(defn ^:export
  nightcode []
  (open-link "https://sekao.net/nightcode/"))

(defn ^:export
  cursive []
  (open-link "https://cursive-ide.com/"))

(defn ^:export
  vim []
  (open-link "http://www.vim.org/"))

(defn ^:export
  irc
  "Join to clojure irc"
  []
  (open-link "https://webchat.freenode.net/?channels=clojure"))

(defn ^:export
  slack
  "Join to slack"
  []
  (open-link "http://clojurians.net/"))

(defn ^:export
  telegram-tw
  "Join to clojure.tw telegram channel"
  []
  (open-link
   ;; to prevent web spide, we hash the link here
   (base64/decodeString "aHR0cHM6Ly90ZWxlZ3JhbS5tZS9qb2luY2hhdC9CTjRKX0FLd25ndTVoQlBrUm81Z1l3Cg==")))

(defn ^:export
  facebook-tw
  "Join to clojure.tw facebook channel"
  []
  (open-link "https://www.facebook.com/groups/clojure.taiwan"))

(defn ^:export
  twitter-tw
  "Join to clojure.tw twitter channel"
  []
  (open-link "https://twitter.com/clojuretw"))

(defn ^:export
  meetup-tw
  "Join to clojure.tw meetup channel"
  []
  (open-link "http://www.meetup.com/Clojure-tw/"))

(defn ^:export
  github-tw []
  (open-link "https://github.com/clojure-tw"))