const express = require("express");
const route = express.Router();
const ctl = require("../controllers/catCtl");
const upload = require("../middleware/multer")

route.get("/addCat",ctl.addCat)
route.post("/addCat",upload,ctl.addCategory);
route.get("/viewCat",ctl.viewCat)

route.get("/deleteData",ctl.deleteData);
route.get("/editData",upload,ctl.editData);

route.post("/updateData",upload,ctl.updateData)

module.exports = route