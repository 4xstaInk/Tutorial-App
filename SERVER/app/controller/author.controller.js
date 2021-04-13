const db = require("../models");
const Author = db.authors;
const Op = db.Sequelize.Op; 

// User Controller      //////////////////////////////////////////////////////////////

// Create and save a new User
exports.createAuthor=(req, res)=>{ 
    // Validate Request
    if (!req.body.fullname) {
        res.status(400).send({
            message:"Name can not be empty!"
        });
        return;
    }

    // Email Validate
    // Pasword Validate 
    if (!req.body.password) {
        res.status(400).send({
            message:"Password can not be empty!"
        });
        return;
    } 
    if (req.body.password < 8) {
        res.status(400).send({
            message:"Password can not be less than 8 characters"
        });
        return;
    } 

    // Create a User
    const author = {
        fullname: req.body.fullname,
        date_of_birth: req.body.date_of_birth,
        email: req.body.email,
        password: req.body.password,
        quote: req.body.quote
    };
    
 
    //Save User in the database
    Author.create(author)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occured while creating a Tutorial."
        });
    });  
};

// Retrieve all User from the database
exports.findAllAuthor = (req, res)=>{
    const fullname = req.query.fullname; 
    var condition = fullname ? { fullname: { [Op.like]: `%${fullname}%` } } : null;

    Author.findAll({ where: condition}).then(data=>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occured while retrieving tutorials."
        });
    }); 

};

// Find a single User with an Id
exports.findOneAuthor = (req,res)=>{
    const id = req.params.id;

    Author.findByPk(id).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message:"Error retrieving Tutorial with id= "+id
        });
    });
};

// Update a User by Id in the request
exports.updateAuthor = (req, res)=>{
    const id = req.params.id;

    Author.update(req.body, {
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

// Delete a User with the specified Id in the request
exports.deleteAuthor = (req, res)=>{
    const id = req.params.id;

    Author.destroy({
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

// Delete all User from the database
exports.deleteAllAuthor = (req, res)=>{
    Author.destroy({
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

// Find all published User 
exports.findAllQuote = (req, res)=>{
    Author.findAll({ where: { published: true }}).then(data => {
        res.send(data);
    }).catch( err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrieveing tutorials."
        });
    });

};