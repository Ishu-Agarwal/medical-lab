const express=require("express");
const Book=require("../schemma/bookschema");
//const Patient = require("../schemma/patient");
require('../db/conn');
const router=express.Router();
router.post('/Book',async (req,res)=>{
    console.log(req.body);
    const user=new Book(req.body);
    try{
         const userregister = await user.save();
             res.status(200).send([user]);
            
     }
     catch( err )
     {
        res.status(400).json({message:"invalid information"});
         console.log(err);
     }
});
router.post('/history',async(req,res)=>{
    try{
    const fond=req.body;
    console.log(fond);
    const userdata=await Book.find({fname:fond.fname,lname:fond.lname,dob:{$gte:fond.sdate,$lt:fond.ldate}});
    console.log(userdata);
    res.status(200).send(userdata);
    }
    catch(err){
        res.status(400).json({message:"no such data present"});
        console.log(err);
    }
    //
})
module.exports = router;
