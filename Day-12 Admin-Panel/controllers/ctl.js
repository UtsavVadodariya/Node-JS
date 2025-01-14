const schema = require("../model/firstSchema")

module.exports.login = (req, res) => {
    res.render("login")
}
module.exports.userLogin = async (req, res) => {
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
module.exports.logOut = async (req, res) => {
    res.clearCookie("adminData")
    res.redirect("/");
}
module.exports.dashboard = (req, res) => {
    req.cookies.adminData ? res.render("index") : res.redirect("/");
}
module.exports.formBasic = async (req, res) => {
    req.cookies.adminData ? res.render("formBasic") : res.redirect("/");
}
module.exports.table = async (req, res) => {
    if(req.cookies.adminData){
        await schema.find({})
            .then((data) => {
                res.render("table", { data })
            })
    }
    else {
        res.redirect("/")
    }
}

module.exports.addData = async (req, res) => {
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/formBasic");
        })

};
module.exports.deleteData = async (req, res) => {
    console.log(req.query.id);
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/table");

}
module.exports.editData = async (req, res) => {
    await schema.findById(req.query.id)
        .then((data) => {
            res.render("editData", { data });
        })
};

module.exports.updateData = async (req, res) => {
    await schema.findByIdAndUpdate(req.body.id, req.body)
        .then((data) => {
            res.redirect("/table");
        })
}