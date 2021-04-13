module.exports = app => {
    const authors = require("../controller/author.controller.js");

    var router = require("express").Router();

    //Users        //////////////////////////////////////////////////////
    
     // Create a new User
     router.post("/", authors.createAuthor);

     // Retrieve all User
     router.get("/", authors.findAllAuthor);

         // Retrieve all authorised users 
    router.get("/quote", authors.findAllQuote);
  
     // Retrieve a single User with id
     router.get("/:id", authors.findOneAuthor); 
 
     // Update a User with id
     router.put("/:id", authors.updateAuthor);
 
     // Delete a User with id
     router.delete("/:id", authors.deleteAuthor);
 
     // Delete all User
     router.delete("/", authors.deleteAllAuthor);
 


    app.use('/api/author', router);
}