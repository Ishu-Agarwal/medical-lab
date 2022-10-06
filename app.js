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
// const db = 'mongodb+srv://Ishu:ishu123@cluster0.j8vg3.mongodb.net/mernstack?retryWrites=true&w=majority';
// mongoose.connect(db,
//   {
//                useNewUrlParser: true,
//      useUnifiedTopology: true
//   }).then(() =>{
//     console.log("successfull connected");
//   }).catch ((err) =>{
//     console.error(err.message);
// 		// Exit process with failure
// 		process.exit(1);
//   }
//   );
const port = process.env.PORT ||5000;
if ( process.env.NODE_ENV == "production"){

  app.use(express.static("client/build"));

  // const path = require("path");

  // app.get("*", (req, res) => {

  //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  // })
}
app.listen(port,()=>{
    console.log(`connection is set up ${port}`);
})




// const middleware = (req,res,next) =>{
//   console.log('miiddleware');
//   next();
// }
// app.get('/about',middleware,(req,res) =>{console.log(`hello `)});
