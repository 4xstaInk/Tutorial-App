module.exports = app => {
    const users = require("../controller/user.controller.js");

    var router = require("express").Router();

    //Users        //////////////////////////////////////////////////////
    
     // Create a new User
     router.post("/", users.createUser);

     // Retrieve all User
     router.get("/", users.findAllUser);

         // Retrieve all authorised users 
    router.get("/authorised", users.findAllAuthorisedUser);
  
     // Retrieve a single User with id
     router.get("/:id", users.findOneUser); 
 
     // Update a User with id
     router.put("/:id", users.updateUser);
 
     // Delete a User with id
     router.delete("/:id", users.deleteUser);
 
     // Delete all User
     router.delete("/", users.deleteAllUser);
 


    app.use('/api/users', router);
}