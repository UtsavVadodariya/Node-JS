const express = require("express");
const port = 2008;

const app = express();

app.set("view engine" , "ejs");
app.use(express.urlencoded());

let students = [
    {id: "1" , name :"utsav" , subject : "expressJS"},
    {id: "2" , name :"Rutul" , subject : "expressJS"},
    {id: "3" , name :"Ayush" , subject : "expressJS"},
    {id: "4" , name :"Saurabh" , subject : "expressJS"},
]

app.get("/", (req,res)=>{
    res.render("index" , {students});
})

app.post("/addData", (req, res) => {
    const lastId = students.length > 0 ? parseInt(students[students.length - 1].id) : 0;
    req.body.id = String(lastId + 1);
    students.push(req.body);
    res.redirect("/");
});
app.get("/deleteData", (req,res)=>{
    let deleteRecord = students.filter((e)=> e.id !== req.query.id);
    students = deleteRecord;
    res.redirect("/")
})

app.listen(port , (err)=>{
    err ? console.log(err) : console.log("Server Started On Port " + port)
})