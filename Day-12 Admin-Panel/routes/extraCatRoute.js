const express = require("express")
const route = express.Router()
const ctl = require("../controllers/extraCatCtl")

route.get("/addextraCat",ctl.addextraCat)

route.post("/addextraCat",ctl.addextraCategory)
route.get("/viewSubcat",ctl.viewSubcat);

route.get("/deleteData",ctl.deleteData)
route.get("/editData",ctl.editData)


route.post("/updateData",ctl.updateData)

module.exports = route;