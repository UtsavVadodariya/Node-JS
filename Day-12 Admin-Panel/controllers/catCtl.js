const schema = require("../model/catSchema");
const path = require("path")
const fs = require("fs")


module.exports.addCat = (req, res) => {
    res.render("addCat")
}

module.exports.addCategory = async (req, res) => {
    req.body.catImage = req.file.path
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/category/addCat");
        })
    // console.log(req.body);
}

module.exports.viewCat = async (req, res) => {
    await schema.find({})
        .then((data) => {
            res.render("viewCat", { data })
        })
}

module.exports.deleteData = async (req, res) => {
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/category/viewCat");
}

module.exports.editData = async (req, res) => {
    await schema.findById(req.query.id)
        .then((data) => {
            res.render("editCat", { data })
        })
}

module.exports.updateData = async (req, res) => {
    let img = " ";
    let singleData = await schema.findById(req.body.id);

    if (singleData) {
        img = req.file ? req.file.path : singleData.catImage;
        if (req.file && singleData.catImage) {
            fs.unlinkSync(singleData.catImage); 
        }
        req.body.catImage = img;
        await schema.findByIdAndUpdate(req.body.id, req.body);
    }
    res.redirect("/category/viewCat");
};


