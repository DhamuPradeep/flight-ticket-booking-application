import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import flightRoute from "./routes/flights.js"
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express()
dotenv.config() 

const connect = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/");
        console.log("Database Connected");
    }
    catch(error){
        throw error
    }
}

mongoose.connection.on("disconnnected",() => {
    console.log("Database is not connected");
})
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/auth",authRoute) 
app.use("/users",userRoute)
app.use("/flights",flightRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  

app.listen(8000,()=>{
    connect();
    console.log("Server is running in port 8000");
})