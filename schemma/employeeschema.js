const mongoose=require("mongoose");
const validator = require("validator");
const employeeSchema= new mongoose.Schema({
    name:
     {
        type:String,
        Uppercase: true,
        required:true,
        minlength:3
    },
    dob:
    {
       type:Date,
       required:true
    },
     doj:
     {
       type:Date,
       required:true
    },
    position:
    {
        type:String,
        Uppercase: true,
        required:true
    },
    labname:
    {
        type:String,
        required:true
    },
    city:
    {
        type:String,
        Uppercase: true,
        required:true
    },
     salary:
    {
        type:Number,
        require:true
    },
    number:
    {
        type:Number,
        require:true,
        minlength:10
    }
   
})
const Employee = new mongoose.model('employee',employeeSchema);
module.exports=Employee;