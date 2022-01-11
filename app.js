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
if ( process.env.NODE_ENV == "production"){

  app.use(express.static("client/build"));

  const path = require("path");

  app.get("/", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })


}
app.listen(port,()=>{
    console.log(`connection is set up ${port}`);
})




// const middleware = (req,res,next) =>{
//   console.log('miiddleware');
//   next();
// }
// app.get('/about',middleware,(req,res) =>{console.log(`hello `)});
