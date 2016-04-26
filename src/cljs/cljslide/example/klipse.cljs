(ns cljslide.example.klipse
  (:require [cljslide.utils :refer [set-element-to-id!]]))

(defn- build-src [code]
  (str "http://app.klipse.tech/?cljs_in=" code))

(def src
  (build-src
   "(+ 1 2)"))

;; set <div id="klipse"></div>
(set-element-to-id!
 "klipse"
 [:div#klipse
  ;; [:iframe {:id "try" :src "http://app.klipse.tech" :framborder "0" :allowfullscreen "true"}]
  [:iframe {:id "try" :src src}]])