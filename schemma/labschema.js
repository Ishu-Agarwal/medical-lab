const mongoose=require("mongoose");
const validator = require("validator");
const labSchema= new mongoose.Schema({
    uname :{
        type:String,
        required:true,
        minlength:3
    },
    city :{
        type:String,
        required:true,
        minlength:3
    },
   
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    }
})
const LabSchema = new mongoose.model('Lab',labSchema);
module.exports=LabSchema;