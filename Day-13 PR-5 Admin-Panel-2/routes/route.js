const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");
const upload = require("../middleware/multer")
const passport = require("../middleware/passport")

route.get("/", ctl.loginuser)
route.post("/login",passport.authenticate("local",{failureRedirect:"/"}),
    ctl.login
)
route.get("/logOut",passport.chechAuth, ctl.logOut)
route.get("/dashboard",passport.chechAuth, ctl.dashboard)
route.get("/addAdmin",passport.chechAuth, ctl.addAdmin)
route.post("/addData",passport.chechAuth,upload, ctl.addData)
route.get("/viewAdmin",passport.chechAuth, upload, ctl.viewAdmin)
route.get("/deleteData",upload,ctl.deleteAdmin)
route.get("/editAdmin",passport.chechAuth,upload,ctl.editAdmin)
route.post("/updateData",upload, ctl.updateData)

module.exports = route;