// main.go
package main

import (
    "log"
    "net/http"
)

func main() {
    // Serve static files from the "static" directory
    fs := http.FileServer(http.Dir("static"))
    http.Handle("/static/", http.StripPrefix("/static/", fs))

    // Handle the root route
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        if r.URL.Path != "/" {
            log.Printf("404 for path: %s", r.URL.Path)
            http.NotFound(w, r)
            return
        }
        log.Printf("Serving root page")
        http.ServeFile(w, r, "static/LearningTimeLine.html")
    })

    // Handle the video info route
    http.HandleFunc("/video-info", func(w http.ResponseWriter, r *http.Request) {
        log.Printf("Serving video info page")
        http.ServeFile(w, r, "static/videoInfo.html")
    })

    log.Printf("Starting server on http://localhost:8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal("Server error:", err)
    }
}