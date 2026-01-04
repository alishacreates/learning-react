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
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"}, // React URL
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: true,
	})

	// Use the handler directly
	log.Println("Connected to MongoDB!")
	log.Println("Server running on :8080")
	http.ListenAndServe(":8080", c.Handler(r))
}
