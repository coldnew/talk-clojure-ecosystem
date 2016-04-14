(ns cljslide.app
  (:require-macros [cljslide.macros :refer [with-slide]]
                   [cljs.core.async.macros :as m :refer [go]]
                   )
  (:require [hipo.core :as hipo]
            [reagent.core :as r]
            [cljs.core.async :refer [chan close!]]
            [om.next        :as om   :refer-macros [defui]]
            [sablono.core   :as html :refer-macros [html]]
            [cljslide.join]
            [cljslide.example.core-async]
            [cljslide.example.quil]
            ))

(enable-console-print!)

(defn- add-element-to-id
  "Add hiccup element to id."
  [id body]
  (let [dom (.getElementById js/document id)
        el (hipo/create body)]
    ;; add to dom
    (set! (.-innerHTML dom) (.-innerHTML el))))

(defn init []
  ;; do nothing ?
  )
