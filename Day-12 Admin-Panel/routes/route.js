const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl")
const passport = require("../middleware/passport");

route.get("/",ctl.login)
route.post("/userLogin",
    passport.authenticate("local",{failureRedirect:"/"}),
    ctl.userLogin
);
route.get("/dashboard",passport.checkAuth,ctl.dashboard);
route.get("/formBasic",passport.checkAuth,ctl.formBasic);
route.get("/table",passport.checkAuth,ctl.table);
route.post("/addData",passport.checkAuth,ctl.addData)
route.get("/deleteData",ctl.deleteData)
route.get("/editData",passport.checkAuth,ctl.editData)
route.post("/updateData",ctl.updateData);
route.get("/logOut",ctl.logOut);
route.get("/profile",passport.checkAuth,ctl.profile);
route.get("/changePass",passport.checkAuth,ctl.changePass)
route.post("/changePass",passport.checkAuth,ctl.changePassword);

route.post("/recoverPass",ctl.recoverPass);
route.post("/verifyPass",ctl.verifyPass)

module.exports = route;