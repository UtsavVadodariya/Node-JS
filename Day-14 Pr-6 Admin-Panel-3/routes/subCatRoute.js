const express = require("express")
const route = express.Router();
const ctl = require("../controllers/subCatCtl")
const passport = require("../middleware/passport")

route.get("/addSubcat",passport.checkAuth,ctl.subCat);
route.post("/addSubcat",passport.checkAuth,ctl.addSubcat);

route.get("/viewSubcat",passport.checkAuth,ctl.viewSubcat);
route.get("/deletesubCat",passport.checkAuth,ctl.deleteSubcat);

route.get("/editsubCat",passport.checkAuth,ctl.editSubcat);
route.post("/updateSubCat",passport.checkAuth,ctl.updateSubCat);

module.exports = route;