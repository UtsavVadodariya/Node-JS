const mongoose = require("mongoose");

const schema = mongoose.Schema({
    subCatName:{
        type : String,
        required : true
    },
    categoryId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Categorie",
        required : true
    }
})

const firstSchema = mongoose.model("SubCategorie",schema);

module.exports = firstSchema;