module.exports = app => {
    const tutorials = require("../controller/tutorial.controller.js");

    var router = require("express").Router();

     // Tutorial Routes    /////////////////////////////////////////////

    // Create a new Tutorial
    router.post("/", tutorials.createTutorial);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAllTutorial);

    // Retrieve all publishe Tutorials 
    router.get("/", tutorials.findAllPublishedTutorial);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOneTutorial); 

    // Update a Tutorial with id
    router.put("/:id", tutorials.updateTutorial);

    // Delete a tutorial with id
    router.delete("/:id", tutorials.deleteTutorial);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAllTutorial);

    //Users        //////////////////////////////////////////////////////
    /*
     // Create a new User
     router.post("/user", tutorials.createUser);

     // Retrieve all User
     router.get("/user", tutorials.findAllUser);

         // Retrieve all authorised users 
    router.get("/users/authorised", tutorials.findAllAuthorisedUser);
  
     // Retrieve a single User with id
     router.get("/user/:id", tutorials.findOneUser); 
 
     // Update a User with id
     router.put("/user/:id", tutorials.updateUser);
 
     // Delete a User with id
     router.delete("/user/:id", tutorials.deleteUser);
 
     // Delete all User
     router.delete("/user", tutorials.deleteAllUser);
 
    */

    app.use('/api/tutorials', router);
};