const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// Tutorial
const db = require("./app/models");
db.sequelize.sync({ force: false}).then(()=>{
    console.log("Drop and re-sync db.");
});


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res)=>{
    res.json({message: "Welcome to 4xsta App"});
});

// Passing Routes
// Tutorial Routes
require("./app/routes/tutorial.routes")(app);
// User Routes
require("./app/routes/user.routes")(app); 
// Author Routes
require("./app/routes/author.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}.`);
});
