(ns cljslide.utils
  (:require [hipo.core :as hipo]))

(defn set-element-to-id!
  "Add hiccup element to id."
  [id body]
  (let [dom (.getElementById js/document id)
        el (hipo/create body)]
    ;; add to dom
    (set! (.-innerHTML dom) (.-innerHTML el))))