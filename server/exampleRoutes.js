{
  "POST /api/characters": {
    description: "Create and return a new character",
    response: "201 application/json",
    data: {}
  },  
  "GET /api/characters": {
    description: "Returns all characters",
    response: "200 application/json",
    data: {}
  },
  "DELETE /api/characters": {
    description: "Deletes all characters and returns number deleted",
    response: "200 application/json",
    data: {"message" : "number deleted"}
  }, 
  "GET /api/characters/:id": {
    description: "Returns one character",
    response: "200 application/json",
    data: {}
  },
  "PUT /api/characters/:id": {
    description: "Updates and returns one character",
    response: "200 application/json",
    data: {}
  },
  "DELETE /api/characters/:id": {
    description: "Deletes and returns the matching character",
    response: "200 application/json",
    data: {}
  }
}