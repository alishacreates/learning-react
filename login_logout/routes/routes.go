package routes

import (
	"github.com/gorilla/mux"
	"go-auth-backend/handlers"
)

func SetupRoutes(r *mux.Router) {
	r.HandleFunc("/register", handlers.RegisterHandler).Methods("POST")
	r.HandleFunc("/login", handlers.LoginHandler).Methods("POST")
}
