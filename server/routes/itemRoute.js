const express = require("express");
const router = express.Router();
const Item = require("../models/itemSchema");

router.route("/create").post((req, res) =>{
    const name = req.body.name;
    const model = req.body.model;
    const newItem = new Item({
        name,
        model
    });
    newItem.save();
})

module.exports = router;