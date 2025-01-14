const mongoose = require("mongoose");

const schema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    radio:{
        type: String,
        required : true,
        enum:['Male','Female','Other']
    }
})

const firstSchema = mongoose.model("Admin-Detail",schema);

module.exports = firstSchema;