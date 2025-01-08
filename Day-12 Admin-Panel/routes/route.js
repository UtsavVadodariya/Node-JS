const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl")


route.get("/",ctl.index);
route.get("/formBasic",ctl.formBasic);
route.get("/table",ctl.table);
route.post("/addData",ctl.addData)
route.get("/table",ctl.renderTable);

module.exports = route;