const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstname: {
        type: String,
        required: String,
    },
    lastname: {
        type: String,
        required: String,
    },
    email: {
        type: String,
        required: String,
    },
    password: {
        type: String,
        required: String,
    },
    number: {
        type: Number,
        required: String,
    }
})

const firstSchema = mongoose.model("Admin-Detail", schema);

module.exports = firstSchema;