const catSchema = require("../model/catSchema");
const subSchema = require("../model/subCatSchema");
const extraSchema = require("../model/extraCatSchema")

module.exports.addextraCat = async (req, res) => {
    const category = await catSchema.find({})
    const subcategory = await subSchema.find({})

    res.render("addExtraCat", { category, subcategory })
}

module.exports.addextraCategory = async (req, res) => {
    await extraSchema.create(req.body)
    res.redirect("/extracategory/addextraCat")
}

module.exports.viewSubcat = async (req, res) => {
    await extraSchema.find({})
        .populate("categoryId")
        .populate("subcat")
        .then((data) => {
            res.render("viewextraCat", { data });
        })
}

module.exports.deleteData = async (req, res) => {
    await extraSchema.findByIdAndDelete(req.query.id)
    res.redirect("/extracategory/viewSubcat");
}

module.exports.editData = async (req, res) => {
    const extracategory = await extraSchema.findById(req.query.id);
    const subCategory = await subSchema.find();
    const categories = await catSchema.find();

    res.render("editextraCat", { data: subCategory, categories, extracategory });
}


module.exports.updateData = async (req,res)=>{
    await extraSchema.findByIdAndUpdate(req.body.id,req.body);
    res.redirect("/extracategory/viewSubcat")
}