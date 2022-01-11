const express=require("express");
const Employee=require("../schemma/employeeschema");
//const Patient = require("../schemma/patient");
require('../db/conn');
const router=express.Router();
router.post('/addemployee',async (req,res)=>{
    console.log(req.body);
    const user=new Employee(req.body);
    const usern=req.body.name;
    const userc=req.body.city;
    const userl=req.body.labname;
    try{
        const userExist =await Employee.findOne({ name : usern,city:userc ,labname:userl});
       if(userExist)
       {
           return res.status(400).json({error : "already exists"});
        }
         const userregister = await user.save();
             res.status(200).send(user);
     }
     catch( err )
     {
        res.status(400).json({message:"invalid information"});
         console.log(err);
     }
});
router.post('/employeedetails',async(req,res)=>{
    try{
    const fond=req.body;
    console.log(fond);
    const userdata=await Book.find({name:fond.name,city:fond.city,labname:fond.labname});
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
