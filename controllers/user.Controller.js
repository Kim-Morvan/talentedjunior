import { database } from "../server.js";
import User from '../models/user.js';

const getAllUsers = async (req, res, next) => {
    try {
        await database.collection("users").find({}).toArray(function(err, getAllUsersDetails) {
            if (err) throw err;
            res.status(201).json({getAllUsersDetails})
        });
    } catch (error) {
        next(error)
    }
}
const createNewUsers = (req, res) => {
    res.send('create new user')
}




const updateUser = async (req, res, next) => {
    try {
        const cookies = req.cookies;
        const refresh_token = cookies.jwt;
        if (!cookies?.jwt) return res.sendStatus(204);
        const getUserDetails = await database.collection("users").findOne({ refresh_token: refresh_token });

        if(!getUserDetails) return res.status(400).json({ "message": 'User ID required' });
        await database.collection("users").updateOne({id: req.params._id}, { $set: req.body });
    } catch (error) {
        next(error)
    }
}




// Buuggggggggg
const deleteUser = async (req, res, next) => {
    try {
        const cookies = req.cookies;
        const refresh_token = cookies.jwt;
        if (!cookies?.jwt) return res.sendStatus(204);
        const getUserDetails = await database.collection("users").findOne({ refresh_token: refresh_token });
        
        if(!getUserDetails) return res.status(400).json({ "message": 'User ID required' });
        await database.collection("users").deleteOne(req.params._id);
    } catch (error) {
        next(error)
    }
}





const getCurrentUsers = (req, res) => {
    res.send('get current user')
}



const getUser = async (req, res, next) => {
    try {
        const cookies = req.cookies;
        const refresh_token = cookies.jwt;
        if (!cookies?.jwt) return res.sendStatus(204);
        const getUserDetails = await database.collection("users").findOne({ refresh_token: refresh_token });
        if(!getUserDetails) return res.status(400).json({ "message": 'User ID required' });
        const user = await database.collection("users").findOne({ _id: getUserDetails._id });
        const { password, ...userWithoutPassword } = user;
        res.json({User_Details: userWithoutPassword})
    } catch (error) {
        next(error)
    }
}

export { getUser, createNewUsers, getAllUsers, getCurrentUsers, updateUser, deleteUser }
