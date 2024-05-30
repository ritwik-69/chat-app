import dotenv from 'dotenv'
import express from 'express'
import authRoute from './routes/auth.routes.js'
import messageRoute from './routes/message.routes.js'
import userRoute from './routes/user.routes.js'
import connectToMongoDB from './db/index.js';
import cookieParser from "cookie-parser";
const app = express();
dotenv.config()
app.use(cookieParser());
const PORT = process.env.PORT || 5000;


app.use(express.json()); // to parse the incoming request



app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
})

app.use("/api/auth",authRoute)
app.use("/api/messages",messageRoute)
app.use("/api/users",userRoute)
