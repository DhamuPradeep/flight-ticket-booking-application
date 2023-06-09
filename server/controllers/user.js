import user from "../models/user.js";

export const updateUser = async(req,res,next) => {
    try{
        const updateUser = await user.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updateUser);
    }
    catch(err){
        next(err)
    }
}

export const deleteUser = async(req,res,next) => {
    try{
        await user.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted successfully");
    }
    catch(err){
        next(err)
    }
}

export const getUser = async(req,res,next) => {
    try{
        const users = await user.findById(req.params.id)
        res.status(200).json(users);
    }
    catch(err){
        next(err);
    }
}

export const getUsers = async(req,res,next) => {
    try{
        const users = await user.find();
        res.status(200).json(users);
    }
    catch(err){
        next(err);
    }
}