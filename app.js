const mongoose = require('mongoose');
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
require("./db/conn");
app.use(express.json());
app.use(require('./router/enter'));
app.use(require('./router/book'));
app.use(require('./router/labs'));
app.use(require('./router/employee'));
const port = process.env.PORT || 5000;
app.get('/',(req,res) =>{
  res.send(`hello from home`);
});

if(process.env.NODE_ENV =="production"){
  app.use(express.static("client/build"));
}

app.listen(port,()=>{
    console.log(`connection is set up ${port}`);
})




// const middleware = (req,res,next) =>{
//   console.log('miiddleware');
//   next();
// }
// app.get('/about',middleware,(req,res) =>{console.log(`hello `)});
