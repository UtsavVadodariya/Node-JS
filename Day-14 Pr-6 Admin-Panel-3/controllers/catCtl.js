const schema = require("../model/catSchema");
const path = require("path")
const fs = require("fs")

module.exports.cat = (req, res) => {
    res.render("addCategory")
}

module.exports.addCat = async (req, res) => {
    req.body.catImage = req.files.catImage[0].path
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/category/addCategory")
        })
}


module.exports.viewCat = async (req, res) => {
    await schema.find({})
        .then((data) => {
             res.render("viewCat",{data});
        })
};

module.exports.editCat = async (req,res)=>{
    await schema.findById(req.query.id)
    .then((data)=>{
        res.render("editCat",{data});
    })
}

module.exports.updateCat = async(req,res)=>{
    let img = " ";
    let singleData = await schema.findById(req.body.id);

    if (singleData) {
        img = req.files ? req.files.catImage[0].path : singleData.catImage;
        if (req.files && singleData.catImage) {
            fs.unlinkSync(singleData.catImage); 
        }
        req.body.catImage = img;
        await schema.findByIdAndUpdate(req.body.id, req.body);
    }
    res.redirect("/category/viewCategory");
}

module.exports.deleteCat = async (req,res)=>{
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/category/viewCategory")
}