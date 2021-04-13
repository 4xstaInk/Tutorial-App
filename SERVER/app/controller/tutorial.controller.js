const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op; 

// Tutorial Controller       ///////////////////////////////////////////////////

// Create and save a new Tutorial
exports.createTutorial = (req, res)=>{ 
    // Validate Request 
    if (!req.body.title) {
        res.status(400).send({
            message:"Content can not be empty!"
        });
        return;
    } 

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published: false
    };
 
    //Save tutorial in the database
    Tutorial.create(tutorial)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occured while creating a Tutorial."
        });
    }); 
};

// Retrieve all Tutorials from the database
exports.findAllTutorial = (req, res)=>{
    const title = req.query.title; 
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Tutorial.findAll({ where: condition}).then(data=>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occured while retrieving tutorials."
        });
    }); 

};

// Find a single Tutorial with an Id
exports.findOneTutorial = (req,res)=>{
    const id = req.params.id;

    Tutorial.findByPk(id).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:"Error retrieving Tutorial with id= "+id
        });
    });
};

// Update a Tutorial by Id in the request
exports.updateTutorial = (req, res)=>{
    const id = req.params.id;

    Tutorial.update(req.body, {
        where: {id: id}
    }).then(num =>{
        if (num == 1) {
            res.send({
                message:"Tutorial was updated succesfully."
            });
        }else{
            res.send({
                message:`Cannot update Tutorial with id= ${id}. Maybe Tutorial was not found or req.body is empty!`
            });
        }
    }).catch(err =>{
        res.status(500).send({
            messsage:"Error updating Tutorial with id= " + id
        });
    });

};

// Delete a tutorial with the specified Id in the request
exports.deleteTutorial = (req, res)=>{
    const id = req.params.id;

    Tutorial.destroy({
        where: {id: id}
    }).then(num =>{
        if (num == 1) {
            res.send({
                message:"Tutorial was deleted successfully!"
            });
        }else{
            res.send({
                message:`Cannot delete tutorial with id= ${id}. Maybe tutorial was not found!`
            });
        }
    }).catch(err =>{
        res.status(500).send({
            message:"Could not delete tutorial with id= " + id
        });
    });
};

// Delete all Tutorials from the database
exports.deleteAllTutorial = (req, res)=>{
    Tutorial.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({ message:`${nums} Tutorials were deleted successfully.` });
    }).catch( err =>{
        res.status(500).send({
            message:err.message || "Some error occured while removing all tutorials."
        });
    });
};

// Find all published Tutorials 
exports.findAllPublishedTutorial = (req, res)=>{
    Tutorial.findAll({ where: { published: true }}).then(data => {
        res.send(data);
    }).catch( err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrieveing tutorials."
        });
    });

};

