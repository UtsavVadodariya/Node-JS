const express = require("express")
const route = express.Router();
const ctl = require("../controllers/AdminCtl");
const upload = require("../middleware/multer");
const passport = require("../middleware/passport")

route.get("/", ctl.login);
route.post("/userLogin", passport.authenticate("local", { failureRedirect: "/" }), ctl.userLogin);
route.get("/logout", ctl.logout);
route.get("/forgotPass", ctl.forgotPass);

route.get("/dashboard", passport.checkAuth, ctl.dashboard);
route.get("/addAdmin", passport.checkAuth, ctl.addAdmin);

route.post("/addAdmin", upload, passport.checkAuth, ctl.addAdmins);
route.get("/viewAdmin", passport.checkAuth, ctl.viewAdmin);
route.get("/deleteAdmin",passport.checkAuth, ctl.deleteAdmin);
route.get("/editAdmin",passport.checkAuth, ctl.editAdmin);
route.post("/updateAdmin", upload, passport.checkAuth,ctl.updateAdmin);

route.post("/sendOtp", ctl.sendOtp);
route.post("/otpVerify", ctl.otpVerify);

route.post("/changePass", ctl.changePass)


module.exports = route;