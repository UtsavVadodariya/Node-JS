const subCatSchema = require("../model/subCatSchema");
const schema = require("../model/productSchema");


module.exports.product = async (req, res) => {
    await subCatSchema.find({})
        .then((data) => {
            res.render("addProduct", { data });
        })
}

module.exports.addproduct = async (req, res) => {
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/product/addProduct")
        })
}

module.exports.viewProduct = async (req, res) => {
    await schema.find({})
        .populate("subcatId")
        .then((data) => {
            res.render("viewProduct", { data })

        })
}


module.exports.editProduct = async (req, res) => {
    let data = await schema.findById(req.query.id)
    let subCat = await subCatSchema.find()

    res.render("editProduct", { data, subCat });
}

module.exports.updateProduct = async (req,res)=>{
    await schema.findByIdAndUpdate(req.body.id,req.body)
    .then((data)=>{
        res.redirect("/product/viewProduct");
    })
}

module.exports.deleteProduct = async (req,res)=>{
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/product/viewProduct");
}