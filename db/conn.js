const mongoose = require('mongoose');
const db = process.env.DATABASE;
    // Connect to the MongoDB cluster
  //    const connect=mongoose.connect(db,{
  //       useNewUrlParser: true,
  //       useCreateIndex:true,
  //        useUnifiedTopology: true,
  //        useFindAndModify:false 
  //       },() => console.log("Mongoose is connnected") );
  // } catch (e) {
  //   console.log("could not connect");
  // }
//   const connect = mongoose.connect(db,{
//            useNewUrlParser: true,
//         useCreateIndex:true,
//          useUnifiedTopology: true,
//          useFindAndModify:false 
//   });
// connect.then(() => {
//     console.log("connected correctly to server");
// }, (err) => {
//         console.log(err);
// })
const connectDB = async () => {
	try {
		await mongoose.connect(db);
		console.log("connected");
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};
connectDB();