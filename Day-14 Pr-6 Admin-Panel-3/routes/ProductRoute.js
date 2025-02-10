const express = require("express");
const route = express.Router();
const ctl = require("../controllers/productCtl");
const passport = require("../middleware/passport")

route.get("/addProduct",passport.checkAuth,ctl.product);
route.post("/addproduct",passport.checkAuth,ctl.addproduct);
route.get("/viewProduct",passport.checkAuth,ctl.viewProduct);

route.get("/editProduct",passport.checkAuth,ctl.editProduct);

route.post("/updateProduct",passport.checkAuth,ctl.updateProduct);
route.get("/deleteProduct",passport.checkAuth,ctl.deleteProduct)

module.exports = route;