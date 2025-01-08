const schema = require("../model/firstSchema")

module.exports.index = async (req, res) => {
    let data = await schema.find({})
        .then((data) => {
            res.render("index", { data });

        })
}
module.exports.formBasic = async (req, res) => {
    res.render("formBasic");
}
module.exports.table = (req, res) => {
    res.render("table")
}

module.exports.addData = async (req, res) => {
    let data = await schema.create(req.body)
    .then((data)=>{
        res.redirect("/",{data});
    })

    console.log(data);
    
};

module.exports.renderTable= async (req, res) => {
    let data = await schema.find()
    .then((data)=>{
        res.render("table",{ data });
    })
    console.log(data);
    
};
