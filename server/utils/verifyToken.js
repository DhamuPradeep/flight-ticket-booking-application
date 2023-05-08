import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"You are not authenticated"))
    }
    jwt.verify(token,"8ADAA357BE7A537393E62FFEA456A",(err,user) => {
        if(err) return next(createError(401,"User is not verified!"));
        req.user = user;
        next()
    });
};

export const verifyUser = (req,res,next) => {
    verifyToken(req,res,()=>{
        if(req.user.id == req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(401,"you are not a user"))
        }
    });
};

export const verifyAdmin = (req,res,next) => {
    verifyToken(req,res,() => {
        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(401,"you are not a admin")) 
        }
    })
}