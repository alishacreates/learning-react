package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"

	"go-auth-backend/config"
	"go-auth-backend/routes"
)

func main() {
	// Connect to MongoDB
	config.ConnectDB()

	// Router
	r := mux.NewRouter()

	// Setup routes
	routes.SetupRoutes(r)

	log.Println("Server running on :8080")
	http.ListenAndServe(":8080", r)
}
