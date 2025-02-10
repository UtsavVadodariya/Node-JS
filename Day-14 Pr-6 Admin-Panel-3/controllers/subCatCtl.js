const catSchema = require("../model/catSchema");
const schema = require("../model/subCatSchema");

module.exports.subCat = async (req, res) => {
    await catSchema.find({})
        .then((data) => {
            res.render("addSubcat", { data })
        })
}

module.exports.addSubcat = async (req, res) => {
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/subcategory/addSubcat");
        })
}

module.exports.viewSubcat = async (req, res) => {
    await schema.find({})
        .populate("categoryId")
        .then((data) => {
            // console.log(data);

            res.render("viewSubcat", { data })
        })
}

module.exports.deleteSubcat = async (req, res) => {
    await schema.findByIdAndDelete(req.query.id)
        .then((data) => {
            res.redirect("/subcategory/viewSubcat")
        })
}

module.exports.editSubcat = async (req, res) => {
    let data = await schema.findById(req.query.id)
    let cat = await catSchema.find();

    res.render("editSubcat", { data, cat })
}

module.exports.updateSubCat = async (req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body)
    .then((data)=>{
        res.redirect("/subcategory/viewSubcat");
    })
}