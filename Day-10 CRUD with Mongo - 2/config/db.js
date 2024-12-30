const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/CRUD-2");

const db = mongoose.connection;

db.once("open", (err)=>{
    err ? console.log(err) : console.log("db connect");
});

module.exports = db;