const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Admin-Panel-3")

const db = mongoose.connection;

db.once("open",(err)=>{
    err ? console.log(err) : console.log("DB Connected");
})

module.exports = db;