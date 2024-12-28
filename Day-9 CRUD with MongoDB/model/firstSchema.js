const mongoose = require("mongoose")

const schema = mongoose.Schema({

    name :{
        type : String,
        required : true,
    },
    image:{
        type : String
    },
    author :{
        type : String,
        required : true,
    },
    language :{
        type : String,
        required : true,
    },
    pages :{
        type : String,
        required : true,
    },
    publishDate :{
        type : String,
        required : true,
    },
    price :{
        type : String,
        required : true,
    },
});

const firstSchema = mongoose.model("book",schema);

module.exports = firstSchema;