const mongoose=require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const patientSchema= new mongoose.Schema({
    uname :
     {
        type:String,
        required:true,
        minlength:3
    },
    email:
    {
        type:String ,
        require:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email");
            }
        }
    },
    password:
    {         
        type:String,
        required:true,
        minlength:7
    },
    number:
    {
        type:Number,
        require:true,
        minlength:10

    }
   
})
patientSchema.pre('save' ,async function (next){
    console.log("hi");
    if(this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
});
const Patient = new mongoose.model('patient',patientSchema);
module.exports=Patient;
