// Includes
const express = require('express');
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();

// Load Item model
const Item = require("./models/itemSchema");

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/", require("./routes/itemRoute"));

// Configure Mongo
const db = "mongodb://localhost/VennKeep";

// Connect to Mongo with Mongoose
mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));


// **** ROUTES ****

// Item Post
// app.post("/item", (req, res) => {

//     const newItem = new Item({
//         name: req.body.name,
//         model: req.body.model
//     });

// // Create a new item
// Item.create(newItem)
//     .then(function(dbItem) {
//         // View the added result in the console
//         console.log(dbItem);
//         res.json(dbItem);
//     })
//     .catch(function(err) {
//         // If an error occurred, log it
//         console.log(err);
//         res.json(err);
//     });
// });

// Item Get
app.get("/item/:id", (req, res) => {

    // Use Mongoose to get the Product by the id
    Item.findOne({ _id: req.params.id })
        .then(function(dbProduct) {
            res.json(dbProduct);
        })
        .catch(function(err) {
           console.log(err);
           res.json(err);
        });
});


// Open the server up on port 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});