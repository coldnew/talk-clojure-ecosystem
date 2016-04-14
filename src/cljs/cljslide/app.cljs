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

;; (defn slide1 []
;;   "
;; class: center, middle

;; # Title

;; Yen-Chin, Lee

;; ---
;; ")

;; (defn slide2 []
;;   "
;; # hk4g a asd

;; 1. waaa
;; 2. adads

;; ---

;; ```ruby
;; def add(a, b)
;;   a + b
;; end
;; ```
;; ---

;; ```clojure
;; (println \"adad\")
;; ```

;; ---

;; ")

;; (defn slide-reagent []
;;   "<div id=\"re\"></div>

;; ---
;; ")

;; (defn slide-om []
;;   "<div id=\"ooo\"></div>

;; ---
;; ")

;; (defn simple []
;;   [:div
;;    [:p "Iii a component!"]
;;    [:p "asdas sd"]
;;    ])


;; (defn timeout [ms]
;;   (let [c (chan)]
;;     (js/setTimeout (fn [] (close! c)) ms)
;;     c))


;; (defui Oo
;;   Object
;;   (render [this]
;;           (html [:p "dn  asd"
;;                  ]
;;            )
;;           ))

;; (def oo (om/factory Oo))

;; (def bmi-data (r/atom {:height 180 :weight 80}))

;; (defn calc-bmi []
;;   (let [{:keys [height weight bmi] :as data} @bmi-data
;;         h (/ height 100)]
;;     (if (nil? bmi)
;;       (assoc data :bmi (/ weight (* h h)))
;;       (assoc data :weight (* bmi h h)))))

;; (defn slider [param value min max]
;;   [:input {:type "range" :value value :min min :max max
;;            :style {:width "100%"}
;;            :on-change (fn [e]
;;                         (swap! bmi-data assoc param (.-target.value e))
;;                         (when (not= param :bmi)
;;                           (swap! bmi-data assoc :bmi nil)))}])

;; (defn bmi-component []
;;   (let [{:keys [weight height bmi]} (calc-bmi)
;;         [color diagnose] (cond
;;                           (< bmi 18.5) ["orange" "underweight"]
;;                           (< bmi 25) ["inherit" "normal"]
;;                           (< bmi 30) ["orange" "overweight"]
;;                           :else ["red" "obese"])]
;;     [:div
;;      [:h3 "BMI calculator"]
;;      [:div
;;       "Height: " (int height) "cm"
;;       [slider :height height 100 220]]
;;      [:div
;;       "Weight: " (int weight) "kg"
;;       [slider :weight weight 30 150]]
;;      [:div
;;       "BMI: " (int bmi) " "
;;       [:span {:style {:color color}} diagnose]
;;       [slider :bmi bmi 10 50]]]))

;; (defn init []
;;   (js/ReactDOM.render (oo {}) (.getElementById js/document "ooo"))
;;   (r/render-component [bmi-component] (.getElementById js/document "re")))

(defn- add-element-to-id
  "Add hiccup element to id."
  [id body]
  (let [dom (.getElementById js/document id)
        el (hipo/create body)]
    ;; add to dom
    (set! (.-innerHTML dom) (.-innerHTML el))))



 (defn init []
   )
