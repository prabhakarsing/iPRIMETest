const mongoose=require("mongoose");
const userChema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName:{type:String,
    require:true},
    lastName:{type:String},
    email:{
        type:String,
        required:true
    },
    password:{type:String
        ,required:true}
})
module.exports=mongoose.model("User",userChema);
