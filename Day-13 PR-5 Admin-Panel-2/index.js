const express = require("express");
const port = 1004;

const app = express();

const path = require("path")
const db = require("./config/db");
const schema = require("./model/firstSchema")
const cookie = require("cookie-parser");

app.set("view engine","ejs");
app.use(express.urlencoded());
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(cookie());

app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port : "+ port);
});