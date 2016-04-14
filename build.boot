(set-env!
 :source-paths    #{"src/clj" "src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies '[[adzerk/boot-cljs          "1.7.228-1"  :scope "test"]
                 [adzerk/boot-cljs-repl     "0.3.0"      :scope "test"]
                 [com.cemerick/piggieback   "0.2.1"      :scope "test"]
                 [weasel                    "0.7.0"      :scope "test"]
                 [org.clojure/tools.nrepl   "0.2.12"     :scope "test"]
                 [pandeiro/boot-http        "0.7.3"      :scope "test"]
                 [adzerk/boot-reload        "0.4.5"]
                 [hipo                      "0.5.2"]
                 [org.clojure/clojure       "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [reagent                   "0.6.0-alpha"]
                 [org.omcljs/om             "1.0.0-alpha22"]
                 [sablono                   "0.6.2"]
                 [cljsjs/react              "0.14.3-0"]
                 [cljsjs/react-dom          "0.14.3-1"]
                 [cljsjs/react-dom-server   "0.14.3-0"]
                 [org.clojure/core.async "0.2.374"]
                 [org.clojure/core.async "0.2.374"]
                 [quil "2.4.0"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

(deftask build []
  (comp (speak)
        (cljs)))

(deftask run []
  (comp (serve)
        (watch)
        (cljs-repl)
        (reload)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none :source-map true}
                 reload {:on-jsload 'cljslide.app/init})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))
