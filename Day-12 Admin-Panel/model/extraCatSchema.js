const mongoose = require("mongoose");

const schema = mongoose.Schema({
    extracatName:{
        type : String,
        required : true
    },
    categoryId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Categorie",
        required : true
    },
    subcat:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"SubCategorie",
        required : true
    }
})

const firstSchema = mongoose.model("ExtraCategorie",schema);

module.exports = firstSchema;