const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/demo");

const db = mongoose.connection;

db.once("open",(err)=>{
    err? console.log(err) : console.log("db connect");    
});

module. exports = db;