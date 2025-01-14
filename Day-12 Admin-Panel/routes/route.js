const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl")

route.get("/",ctl.login)
route.post("/userLogin",ctl.userLogin)
route.get("/dashboard",ctl.dashboard);
route.get("/formBasic",ctl.formBasic);
route.get("/table",ctl.table);
route.post("/addData",ctl.addData)
route.get("/deleteData",ctl.deleteData)
route.get("/editData",ctl.editData)
route.post("/updateData",ctl.updateData);
route.get("/logOut",ctl.logOut);

module.exports = route;