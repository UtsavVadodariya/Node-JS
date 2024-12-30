const mongoose = require("mongoose");
const { type } = require("os");

 const schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    subject :{
        type : String,
        required : true
    },
    city :{
        type : String,
        required : true,
    },
    image:{
        type : String,
        required : true
    }
 });

 const firstSchema = mongoose.model("Crud-2-Data", schema);

 module.exports = firstSchema;