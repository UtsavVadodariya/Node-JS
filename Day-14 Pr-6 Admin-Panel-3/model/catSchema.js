const mongoose = require("mongoose");

const schema = mongoose.Schema({
    catName: {
        type: String,
        required: true
    },
    catImage: {
        type: String,
        required: true
    }
})

const firstSchema = mongoose.model("Categorie", schema);

module.exports = firstSchema;