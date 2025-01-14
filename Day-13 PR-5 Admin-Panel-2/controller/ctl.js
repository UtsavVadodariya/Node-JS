const schema = require("../model/firstSchema")
const path = require("path")
const fs = require("fs")

module.exports.loginuser = (req, res) => {
    res.render("login")
}
module.exports.login = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email });
    if (admin) {
        if (admin.password == req.body.password) {
            res.cookie("adminData", admin);
            res.redirect("/dashboard");
        }
        else {
            res.redirect("/");
        }
    }
    else {
        res.redirect("/")
    }
}
module.exports.logOut= async (req,res)=>{
    res.clearCookie("adminData")
    res.redirect("/");
}
module.exports.dashboard = (req, res) => {
    req.cookies.adminData ? res.render("dashboard") : res.redirect("/");
};
module.exports.addAdmin = (req, res) => {
    req.cookies.adminData ? res.render("addAdmin") : res.redirect("/");
};
module.exports.addData = async (req, res) => {
    if (req.cookies.adminData) {
        req.body.image = req.file.path
        await schema.create(req.body)
            .then((data) => {
                res.redirect("/addAdmin");
            })
    }
    else {
        res.redirect("/")
    }
}
module.exports.viewAdmin = async (req, res) => {
    if (req.cookies.adminData) {
        await schema.find({})
            .then((data) => {
                res.render("viewAdmin", { data });
            })
    }
    else {
        res.redirect("/")
    }

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