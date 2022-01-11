const express = require("express");
const router = express.Router();
require('../db/conn');
const Patient = require("../schemma/patient");
//const Book = require("../schemma/bookschema");
router.post('/Signup',async (req,res)=>{
    console.log(req.body);
    const user=new Patient(req.body);
    try{
         const userregister = await user.save();
             res.status(500).send(user);
     }
     catch(err)
     {
         console.log(err);
     }
     //part1
});

router.post('/Login',async (req,res) =>{
    try{
            const userr = req.body.uname;
            const use1 =req.body.password;
            if(!userr || !use1)
            {
                return res.status(400).json({error : "plz fill all details"})
                
            }
            const userLogin = await Patient.findOne({ uname : userr });
            if(userLogin)
            {
                //encryptionpart
                if(use1 === userLogin.password)
                {
                    res.json({message:"successful login"});
                }
                else{
                    res.status(400).json({message:"invalid credentials"});
                }
            }               
            else
            {
                res.status(400).json({message:"invalid username"});
            }
    }
    catch (err){ console.log(err);}
})
router.get('/',(req,res) =>{
    // res.send(`hello from home 1`);
    Patient.findOne()
        .then((data)=>{
            console.log(data);
            res.send(data);
        })
        .catch(error=>res.send(error))
        
});
module.exports = router;



//const bcrypt = require("bcryptjs/dist/bcrypt");
// const jwt = require('jsonwebtoken');
//part1

//     const {name,password} = req.body;
// if(!name || !password )
// {
//     return res.status(422).json({error : "plz fil the field the properly"});
// }
//     try{
//        const userExist =await User.findOne({name : name});
//        if(userExist)
//        {
//            return res.status(422).json({error : "already exists"});
//         }
//        const user = new User({name,password});
//         const userregister = await user.save();
//             res.status(500).json({error: "successs"})
//     }
//     catch( err )
//     {
//         console.log(err);
//     }
//});

//part2
// const isMatching = await bcrypt.compare(pword,userLogin.pword); 
                // const token = await userLogin.generateAuthToken();
                // console.log(token);
                // res.cookie("jwtoken" ,token , {
                //     expires:new Date(Date.now() + 25892000000),
                //     httponly : true
                // }); 

                // if(!isMatching)
                // {
                //     res.status(400).json({error:"invalid credentials"});
                // }
                // else
                // {
                //     res.json({message:"successful login"});
                // }