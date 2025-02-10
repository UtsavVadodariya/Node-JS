const mongoose = require("mongoose");

const schema = mongoose.Schema({
    productName:{
        type : String,
        required : true
    },
    productPrice:{
        type : String,
        required : true
    },
    productDescription:{
        type : String,
        required : true
    },
    subcatId:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "SubCategorie",
        required : true
    },
});


const firstSchema = mongoose.model("Product",schema);

module.exports = firstSchema;