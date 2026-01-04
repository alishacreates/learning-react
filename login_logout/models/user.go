package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// User represents a MongoDB user document
type User struct {
	ID        primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Email     string             `bson:"email" json:"email"`
	Password  string             `bson:"password" json:"password"`
	CreatedAt primitive.DateTime `bson:"createdAt,omitempty" json:"createdAt,omitempty"`
}
