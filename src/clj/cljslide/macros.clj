(ns cljslide.macros
  (:require [clojure.string :as str]))

(defmacro with-slide
  "Create remark.js slide with config and string body.

  For example:

  (with-slide {:id \"source\" :highlightStyle \"monokai\"}
\"
  class: center, middle

  # Title

  ---
\")"
  [conf & body]
  `(let [id# (or (:id ~conf) "source")
         dom# (.getElementById js/document id#)]
     (set! (.-defaultValue dom#) (str ~@body))
     (.create js/remark
              (cljs.core/clj->js (dissoc ~conf :id)))))
