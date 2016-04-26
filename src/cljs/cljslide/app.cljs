(ns cljslide.app
  (:require-macros [cljslide.macros :refer [with-slide]]
                   [cljs.core.async.macros :as m :refer [go]]
                   )
  (:require [reagent.core :as r]
            [cljs.core.async :refer [chan close!]]
            [om.next        :as om   :refer-macros [defui]]
            [sablono.core   :as html :refer-macros [html]]
            [cljslide.join]
            [cljslide.example.core-async]
            [cljslide.example.quil]
            [cljslide.example.klipse]
            ))

(enable-console-print!)



(defn init []
  ;; do nothing ?
  )
