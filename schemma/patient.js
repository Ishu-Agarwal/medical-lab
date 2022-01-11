const mongoose=require("mongoose");
const validator = require("validator");
const patientSchema= new mongoose.Schema({
    uname :
     {
        type:String,
        required:true,
        minlength:3
    },
    // email:
    // {
    //     type:String ,
    //     require:true,
    //     unique:true,
    //     validate(value){
    //         if(!validator.isEmail(value)){
    //             throw new Error("invalid email");
    //         }
    //     }
    // },
    password:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:Number,
        require:true
    }
   
})

const Patient = new mongoose.model('patient',patientSchema);
module.exports=Patient;