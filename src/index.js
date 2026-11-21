import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config();

await connectDB()
.then(()=>{
    app.listen(process.env.PORT  || 5000,()=>{
        console.log(`Server is running on PORT :${process.env.PORT || 5000}`);
        
    });
})
.catch((err)=>{
    console.log("MONGODB connection failed !!! ",err);
});
