const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");
const upload = require("../middleware/multer")

route.get("/",ctl.loginuser)
route.post("/login",ctl.login)
route.get("/logOut",ctl.logOut)
route.get("/dashboard",ctl.dashboard)
route.get("/addAdmin",ctl.addAdmin)
route.post("/addData",upload,ctl.addData)
route.get("/viewAdmin",upload,ctl.viewAdmin)
route.get("/editAdmin",ctl.editAdmin)
route.post("/updateData",upload,ctl.updateData)

module.exports = route;