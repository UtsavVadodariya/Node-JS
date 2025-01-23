const express = require("express");
const port = 1005;

const app = express();

const path = require("path")
const db = require("./config/db");
const schema = require("./model/firstSchema");
const cookie = require("cookie-parser");
const session = require("express-session")
const passport = require("./middleware/passport")

app.set("view engine","ejs");
app.use(express.urlencoded())
app.use(express.static('public'));
app.use(cookie())
app.use(
    session({
        name:"local",
        secret:"admin-1",
        resave:true,
        saveUninitialized:false,
        cookie:{maxAge:100*100*60}
    })
)
app.use(passport.initialize())
app.use(passport.session());
app.use(passport.AuthenticatedUser)

app.use("/", require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started on port" + port);
})