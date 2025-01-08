const express = require("express");
const port = 1005;

const app = express();

const path = require("path")
const db = require("./config/db");
const schema = require("./model/firstSchema");

app.set("view engine","ejs");
app.use(express.urlencoded())
app.use(express.static('public'));

app.use("/", require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port" + port);
})