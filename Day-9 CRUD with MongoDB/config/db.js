const mongoos = require("mongoose");

mongoos.connect("mongodb://localhost:27017/books");

const db = mongoos.connection;

db.once("open", (err)=>{
    err ? console.log(err) : console.log("db connected")
})

module.exports = db;