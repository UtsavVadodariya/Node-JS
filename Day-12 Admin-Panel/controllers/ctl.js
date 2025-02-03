const schema = require("../model/firstSchema")
const flash = require("../middleware/flashConnect")
const mailer = require("../middleware/mailer")

module.exports.login = (req, res) => {
    res.render("login")
}
module.exports.userLogin = async (req, res) => {
    req.flash("success", "Login SucessFully !");
    res.redirect("/dashboard")
    // let admin = await schema.findOne({ email: req.body.email });
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


module.exports.logOut = (req, res) => {
    req.session.destroy();
    res.redirect("/");
}
module.exports.dashboard = (req, res) => {
    res.render("index")
}
module.exports.formBasic = async (req, res) => {
    res.render("formBasic")
}
module.exports.table = async (req, res) => {
    await schema.find({})
        .then((data) => {
            res.render("table", { data })
        })
}

module.exports.addData = async (req, res) => {
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/formBasic");
        })

};
module.exports.deleteData = async (req, res) => {
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

module.exports.profile = (req, res) => {
    res.render("profile")
}

module.exports.changePass = (req, res) => {
    res.render("changePass")
}

module.exports.changePassword = async (req, res) => {
    let user = req.user;

    if (user.password == req.body.oldPass) {
        if (req.body.oldPass != req.body.newPass) {
            if (req.body.newPass == req.body.conPass) {
                let admin = await schema.findByIdAndUpdate(user.id, { password: req.body.newPass })
                admin && res.redirect("/logout")
            }
            else {
                console.log("new password and conform pass in not match");

            }
        }
        else {
            console.log("old password and new password is same");

        }
    }
    else {
        console.log("old password is wrong");

    }
}


module.exports.recoverPass = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email });

    if (!admin) {
        return res.redirect("/")
    }

    let otp = Math.floor(Math.random() * 1000 + 9000)
    mailer.sendOtp(req.body.email, otp)

    req.session.otp = otp;
    req.session.adminData = admin;

    res.render("verifyOtp")

}
module.exports.verifyPass = async (req, res) => {
    let otp = req.session.otp;
    let admin = req.session.adminData

    if (req.body.otp == otp) {
        if (req.body.newPass == req.body.conPass) {
            let adminData = await schema.findByIdAndUpdate(admin._id, { password: req.body.newPass })
            adminData && res.redirect("/logout")
        }
        else {
            console.log("new password and conform pass in not match");

        }
    }
    else {
        res.redirect("/logout")
    }
}