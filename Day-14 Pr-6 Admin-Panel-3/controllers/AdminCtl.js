const schema = require("../model/AdminSchema");
const path = require("path")
const fs = require("fs");
const mailer = require("../middleware/mailer")


module.exports.login = (req, res) => {
    res.render("login")
}
module.exports.userLogin = async (req, res) => {
    res.redirect("/dashboard")

    //   let admin = await schema.findOne({ email: req.body.email });
    // if (admin) {
    //     if (admin.password == req.body.password) {
    //         res.cookie("adminData", admin);
    //         res.redirect("/dashboard");
    //     }
    //     else {
    //         res.redirect("/");
    //     }
    // }
    // else {
    //     res.redirect("/")
    // }
}

module.exports.dashboard = (req, res) => {
    res.render("dashboard")
}

module.exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/");
}

module.exports.addAdmin = (req, res) => {
    res.render("addAdmin");
}

module.exports.addAdmins = async (req, res) => {
    req.body.image = req.files.image[0].path
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/addAdmin")
        })
};

module.exports.viewAdmin = async (req, res) => {
    await schema.find({})
        .then((data) => {
            res.render("viewAdmin", { data });
        });
};

module.exports.deleteAdmin = async (req, res) => {
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/viewAdmin");
};

module.exports.editAdmin = async (req, res) => {
    await schema.findById(req.query.id)
        .then((data) => {
            res.render("editAdmin", { data });
        });
};

module.exports.updateAdmin = async (req, res) => {
    let img = " ";
    let singleData = await schema.findById(req.body.id)

    if (singleData) {
        img = req.files ? req.files.image[0].path : singleData.image;
        if (req.files && singleData.image) {
            fs.unlinkSync(singleData.image);
        }
        req.body.image = img;
        await schema.findByIdAndUpdate(req.body.id, req.body);
    }
    res.redirect("/viewAdmin");
}


module.exports.forgotPass = (req, res) => {
    res.render("forgotPass");
}

module.exports.sendOtp = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email });

    if (!admin) {
        return res.redirect("/");
    }

    let otp = Math.floor(Math.random() * 1000 + 9000);
    await mailer.sendOtp(req.body.email, otp); 

    req.session.otp = otp;
    req.session.adminData = admin;

    req.session.save(() => {
        res.redirect("back");
    });
};


module.exports.otpVerify =  (req, res) => {
    let otp = req.session.otp;

    if (req.body.otp == otp) {
        res.render("changePass")
    }
    else {
        console.log("Wrong Otp");
    }
}

module.exports.changePass = async (req,res)=>{
    let admin = req.session.adminData

    if (req.body.newPass == req.body.conPass) {
        let adminData = await schema.findByIdAndUpdate(admin._id, { password: req.body.newPass })
        adminData && res.redirect("/logout")
    }
    else {
        console.log("new password and conform pass in not match");

    }
}