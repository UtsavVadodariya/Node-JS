const schema = require("../model/firstSchema")
const path = require("path")
const fs = require("fs")

module.exports.loginuser = (req, res) => {
    res.render("login")
}
module.exports.login = async (req, res) => {
   res.redirect("/dashboard")
}
module.exports.logOut= async (req,res)=>{
    res.session.destroy();
    res.redirect("/");
}
module.exports.dashboard = (req, res) => {
    res.render("dashboard");
};
module.exports.addAdmin = (req, res) => {
   res.render("addAdmin")
};
module.exports.addData = async (req, res) => {
        req.body.image = req.file.path
        await schema.create(req.body)
            .then((data) => {
                res.redirect("/addAdmin");
            })
  
}
module.exports.viewAdmin = async (req, res) => {
        await schema.find({})
            .then((data) => {
                res.render("viewAdmin", { data });
            })

}
module.exports.editAdmin = async (req, res) => {
    await schema.findById(req.query.id)
        .then((data) => {
            res.render("editAdmin", { data })
        })
}
module.exports.updateData = async (req, res) => {
    let img = " "
    let singleData = await schema.findById(req.body.id);
    req.file ? (img = req.file.path) : (img = singleData.image);
    req.file && fs.unlinkSync(singleData.image)

    req.body.image = img
    await schema.findByIdAndUpdate(req.body.id, req.body)
        .then((data) => {
            res.redirect("/viewAdmin")
        })
}

module.exports.deleteAdmin = async (req,res)=>{
    await schema.findByIdAndDelete(req.query.id)
    .then((data)=>{
        res.redirect("/");
    })
}