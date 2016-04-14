(ns cljslide.example.quil
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn draw-carousel []
  (q/background 255)
  (q/no-stroke)
  (q/fill 252 90 44)

  (let [radians (/ (q/frame-count) 20)
        x (+ 150 (* 100 (q/cos radians)))
        y (+ 150 (* 100 (q/sin radians)))
        width 30
        height 30]
      (q/ellipse x y, width height)))

(q/defsketch hello-quil
  :host "quil-example"
  :size [300 300]
  :draw #'draw-carousel)