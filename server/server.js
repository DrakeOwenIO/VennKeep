// Includes
const express = require('express');
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();

// Load Item model
const Item = require("./models/Item");

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

// Basic get route
app.get("/", (req, res) => {
    res.status(200).json(articles)
});

// Basic Post
app.post("/", (req, res) => {
    const newItem = {
        title: req.body.title,
        id: uuidv4()
    }

    items.push(newItem)
    res.status(201).json(items)
});

// Open the server up on port 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});