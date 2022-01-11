const mongoose=require("mongoose");
const validator = require("validator");
const bookSchema= new mongoose.Schema({
    fname :{
        type:String,
        required:true,
        minlength:3
    },
    lname :{
        type:String,
        required:true,
        minlength:3
    },
    doa:{
        type:Date,
        require:true
    },
    test:{
        type:String,
        required:true
    },
    home:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})
const BookSchema = new mongoose.model('books',bookSchema);
module.exports=BookSchema;