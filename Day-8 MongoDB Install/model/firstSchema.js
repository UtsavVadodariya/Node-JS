
const schema = mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    subject:{
        type: String,
        require:true,
    },
    
})

const firstSchema = mongoose.model("Student",schema);

module.exports= firstSchema