const mongoose=require("mongoose");
const bcrypt = require("bcryptjs");
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
        required:true,
        minlength:7
    },
    number:{
        type:Number,
        required:true,
        required:true
    }
})
labSchema.pre('save' ,async function (next){
    console.log("hi");
    if(this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
});
const LabSchema = new mongoose.model('Lab',labSchema);
module.exports=LabSchema;