package main

import (
	"log"
	"net/http"

	"go-auth-backend/config"
	"go-auth-backend/routes"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	config.ConnectDB()
	r := mux.NewRouter()
	routes.SetupRoutes(r)

	// Allow requests from React frontend
	// Enable CORS for local development (allow Vite frontend)
	// Use wildcard origin for local dev and disable credentials to avoid
	// preflight conflicts (frontend stores token in localStorage).
	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: false,
	})

	// Use the handler directly
	log.Println("Connected to MongoDB!")
	log.Println("Server running on :8080")
	http.ListenAndServe(":8080", corsHandler.Handler(r))
}
