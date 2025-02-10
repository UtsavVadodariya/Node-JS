const express = require("express")
const port = 1008;
const path = require("path")

const app = express();

const db = require("./config/db");
const schema = require("./model/AdminSchema");
const cookie = require("cookie-parser");
const session = require("express-session");
const passport = require("./middleware/passport");


app.set("view engine","ejs");
app.use(express.urlencoded());
app.use(express.static('public'));
app.use('/public',express.static(path.join(__dirname, 'public')));
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
app.use(passport.AuthenticatedUser);
    

app.use("/",require("./routes/AdminRoute"))
app.use("/category",require("./routes/catRoute"))
app.use("/subcategory",require("./routes/subCatRoute"))
app.use("/product",require("./routes/ProductRoute"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("Server Started on Port :" + port);
})