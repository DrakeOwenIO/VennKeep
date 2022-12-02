const express = require('express');
const cors = require('cors')
const { toEditorSettings } = require('typescript');
const { v4: uuidv4 } = require('uuid');
const app = express();
require('dotenv').config();

// MIDDLEWARE
app.use(express.json({extended: false}));
app.use(cors());

// Fake Data 
const items = [
    {
        title: "Server 1",
        id: 1
    },
    {
        title: "Server 2",
        id: 2
    },
    {
        title: "Laptop",
        id: 3
    }
]

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

    articles.push(newItem)
    res.status(201).json(items)
});

// Open the server up on port 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});