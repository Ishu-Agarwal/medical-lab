const express = require("express");
const router = express.Router();

require('../db/conn');
const Lab = require("../schemma/labschema");
const Book = require("../schemma/bookschema");
const bcrypt = require("bcryptjs/dist/bcrypt");
router.post('/LabSignup',async (req,res)=>{
    console.log(req.body);
    const user=new Lab(req.body);
    const usern = req.body.uname;
    const userc = req.body.city;
    try{
          const userExist =await Lab.findOne({ uname : usern,city:userc });
       if(userExist)
       {
           return res.status(400).json({message : "already exists"});
        }
         const userregister = await user.save();
             res.status(200).json({message : "successfull signup"});
     }
     catch(err)
     {
         console.log(err);
     }
     //part1
});


router.post('/lablogin',async (req,res) =>{
    try{
            const usern = req.body.uname;
            const userc = req.body.city;
            const userp =req.body.password;
            if(!usern || !userp|| !userc)
            {
                return res.status(400).json({error : "plz fill all details"})
                
            }
            const userLogin = await Lab.findOne({ uname : usern,city:userc });
            if(userLogin)
            {
                //encryptionpart
                const isMatching = await bcrypt.compare(userp,userLogin.password); 
                if(!isMatching)
                {
                    res.status(400).json({message:"invalid password"});
                }
                else
                {
                    res.json({message:"successful login"});
                }

                // if(userp === userLogin.password)
                // {
                //     res.json({message:"successful login"});
                // }
                // else{
                //     res.status(400).json({message:"invalid credentials"});
                // }
            }               
            else
            {
                res.status(400).json({message:"invalid username or city"});
            }
    }
    catch (err){ console.log(err);}
})

router.post('/labhome',async(req,res) =>{
    try{
        const fond=req.body;
        console.log(fond);
        const userdata=await Book.find({city:fond.city,labname:fond.labname,test:fond.test,home:"Yes",doa:{$gt:fond.sdoa,$lt:fond.ldoa}});
        if(!userdata){
            res.status(400).json({message:"no such data present"});
        }
        console.log(userdata);
        res.status(200).send(userdata);
        }
        catch(err){
            res.status(400).json({message:"no such data present"});
            console.log(err);
        }
});

router.post('/CenterLab',async(req,res) =>{
    try{
    const fond=req.body;
    console.log(fond);
    const userdata=await Lab.find({city:fond.city});
    if(!userdata){
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
});

router.post('/labhistory',async(req,res) =>{
    try{
        const fond=req.body;
        console.log(fond);
        const userdata=await Book.find({city:fond.city,labname:fond.labname,doa:{$gt:fond.sdoa,$lt:fond.ldoa}});
        if(!userdata){
            res.status(400).json({message:"no such data present"});
        }
        console.log(userdata);
        res.status(200).send(userdata);
        }
        catch(err){
            res.status(400).json({message:"no such data present"});
            console.log(err);
        }
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