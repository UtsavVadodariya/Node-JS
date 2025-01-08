const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type : String
    }
})

const firstSchema = mongoose.model("Admin-Detail",schema);

module.exports = firstSchema;