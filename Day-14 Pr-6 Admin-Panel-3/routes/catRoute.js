const express = require("express");
const route = express.Router();
const ctl = require("../controllers/catCtl");
const upload = require("../middleware/multer");
const passport = require("../middleware/passport");

route.get("/addCategory", passport.checkAuth, ctl.cat);
route.post("/addCat", upload,passport.checkAuth, ctl.addCat);

route.get("/viewCategory", passport.checkAuth, ctl.viewCat);

route.get("/editCat", passport.checkAuth, ctl.editCat);

route.post("/updateCat",passport.checkAuth, upload, ctl.updateCat);
route.get("/deleteCat", passport.checkAuth,ctl.deleteCat)

module.exports = route;