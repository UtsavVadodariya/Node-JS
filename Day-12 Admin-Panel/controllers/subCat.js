const catSchema = require("../model/catSchema");
const schema = require("../model/subCatSchema")

module.exports.addsubCat = async (req, res) => {
    await catSchema.find({})
        .then((data) => {
            res.render("addsubCat", { data })
        })
}

module.exports.addsubCategory = async (req,res)=>{
    await schema.create(req.body)
    .then(()=>{
        res.redirect("/subcategory/addsubCat")
    })
}


module.exports.viewsubCat = async (req,res)=>{
    await schema.find({}).populate("categoryId")
    .then((data)=>{
        res.render("viewsubCat",{data})
    })
}

module.exports.deleteData = async (req,res)=>{
    await schema.findByIdAndDelete(req.query.id)
        res.redirect("/subcategory/viewsubCat");
}

module.exports.editData = async (req,res)=>{
    const subCategory = await schema.findById(req.query.id);
    const categories = await catSchema.find();

    res.render("editsubCat", { data: subCategory, categories });
}

module.exports.updateData = async (req,res)=>{
    
//     const mongoose = require('mongoose');

// // Convert categoryId to ObjectId using the 'new' keyword
// req.body.categoryId = new mongoose.Types.ObjectId(req.body.categoryId);

await schema.findByIdAndUpdate(
    req.body.id, 
    { 
        subcatName: req.body.subcatName, 
        categoryId: req.body.categoryId
    },
    { new: true }
);

res.redirect("/subcategory/viewsubCat");

}