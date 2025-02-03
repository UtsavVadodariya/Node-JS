const express = require("express")
const route = express.Router()
const ctl = require("../controllers/subCat")
const passport = require("../middleware/passport")

route.get("/addsubCat",passport.checkAuth,ctl.addsubCat);
route.post("/addsubCat",passport.checkAuth,ctl.addsubCategory);
route.get("/viewsubCat",passport.checkAuth,ctl.viewsubCat);

route.get("/deleteData",ctl.deleteData);
route.get("/editData",ctl.editData);

route.post("/updateData",ctl.updateData)

module.exports = route;