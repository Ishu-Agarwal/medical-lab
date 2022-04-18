const express=require("express");
const Book=require("../schemma/bookschema");
const Lab = require("../schemma/labschema");
//const Patient = require("../schemma/patient");
require('../db/conn');
const router=express.Router();
router.post('/Book',async (req,res)=>{
    try{
        req.body.fname=req.body.fname.toUpperCase();
        req.body.lname=req.body.lname.toUpperCase();
        console.log(req.body);
        const user=new Book(req.body);
        const userExist =await Lab.findOne({uname : user.labname,city:user.city});
        if(userExist)
        {
            const userregister = await user.save();
            res.status(200).json({message : "Booking Done"}); 
        }
        else return res.status(400).json({message : "Lab Not exists"});
     }
     catch( err )
     {
        res.status(400).json({message:"invalid information"});
         console.log(err);
     }
});
router.post('/history',async(req,res)=>{
    try{

        req.body.fname=req.body.fname.toUpperCase();
        req.body.lname=req.body.lname.toUpperCase();
        const fond=req.body;
        console.log(fond);
        const userdata=await Book.find({fname:fond.fname,lname:fond.lname,phone:fond.number,doa:{$gte:fond.sdoa,$lte:fond.ldoa}});
        if(!userdata)
        {
            res.status(400).json({message:"no such data present"});
        }
        else{
            console.log(userdata);
            res.status(200).send(userdata);
        }
    
    }
    catch(err){
        res.status(400).json({message:"no such data present"});
        console.log(err);
    }
    //
})
module.exports = router;
//git status
//git add .
//git commit -am "delketed two file"
//git push heroku master:main