
import user from "../models/user.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const register = async(req,res,next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
  
        const newUser = new user({
            ...req.body,
            password: hash
        });
        await newUser.save();
        res.status(200).send("User has been created.")
    }catch(err){
        next(err)
    }
} 

export const login = async(req,res,next) => {
    try{
        const users = await user.findOne({username:req.body.username})
        if(!users) return next(createError(404,"User not found!"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password,users.password)
        if(!isPasswordCorrect) return next(createError(400,"Wrong passsword or username found !!!"))

        const token = jwt.sign({id:users._id,isAdmin:users.isAdmin},"8ADAA357BE7A537393E62FFEA456A")

        const {password,isAdmin ,...otherDetais} = users._doc
        res
        .cookie("access_token",token,{
            httpOnly:true,
        })
        .status(200)
        .json({...otherDetais});
    }
    catch(err){
        next(err)
    } 
}

export const logout = async(req,res,next) => {
    try{
        const payload = {
            "username": "John Doe",
            "passowrd": 1516234022
          }
          
          const token = jwt.sign(payload, "8ADAA357BE7A537393E62FFEA456A", {expiresIn: '1d'})
          res.status(200).send("Logged out")
    }
    catch(err){
        next(err)
    } 
}