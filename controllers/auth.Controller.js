import bcrypt from 'bcrypt';

import User from '../models/user.js';
import { createAccessToken, createRefreshToken } from './jwt.Controller.js';
import { database } from "../server.js";

/**
 * Register New Users
 */
const handleRegister = async (req, res, next) => {
    const user = await User.validateAsync(req.body);
    try {
        const getUserDetails = await database.collection("users").findOne({ email: user.email });
        if (getUserDetails) {
            throw new Error(`This user already exist`)
        }
        const hashedPassword = await bcrypt.hash(user.password, 12);
        await database.collection("users").insertOne(
            {
                username: user.username,
                email: user.email,
                password: hashedPassword,
                profilePicture: user.profilePicture,
                coverPicture: user.coverPicture,
                followers: user.followers,
                following: user.following,
                isAdmin: user.isAdmin,
                isSuperAdmin: user.isSuperAdmin,
                timestamp: new Date(),
                roles: {
                    User: 1022,
                    Admin: 5022,
                    SuperAdmin: 7022
                }
            }
        );
        res.status(201).json({ user })
    } catch (error) {
        next(error)
    }
}

/**
 * Login User
 */
const handleLogin = async (req, res, next) => {
    try {
        const user = await User.validateAsync(req.body);
        const getUserDetails = await database.collection("users").findOne({ email: user.email });
        if (getUserDetails) {
            const matchedPassword = await bcrypt.compare(user.password, getUserDetails.password);
            if (matchedPassword) {
                const access_token = createAccessToken(getUserDetails);
                const refresh_token = createRefreshToken(getUserDetails);
                const roles = getUserDetails.roles;
                await database.collection("users").updateOne(
                    { _id: getUserDetails._id },
                    { $push: { refresh_token: refresh_token }}
                );
                    res.cookie(
                        "jwt",
                        refresh_token,
                        { httpOnly: true, maxAge: 24 * 60 * 60 * 100 }
                    );
                        res.status(201).json({ access_token, roles })
            } else {
                throw createError.BadRequest("Wrong password")
            }
        } else {
            throw createError.BadRequest("Wrong user")
        }
    } catch (error) {
        next()
    }
}

/**
 * Logout User
 */
const handleLogout = async (req, res, next) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(204);
        const refresh_token = cookies.jwt;
        const getUserDetails = await database.collection("users").findOne({ refresh_token: refresh_token });
        if(!getUserDetails) {
            res.clearCookie(
                'jwt',
                { httpOnly: true }
            )
            return res.sendStatus(204);
        }
        await database.collection("users").updateOne({ _id: getUserDetails._id }, {
            $unset: { refresh_token: getUserDetails.refresh_token }
        });
        res.clearCookie(
            'jwt',
            { httpOnly: true }
        );
        res.json(getUserDetails)
    } catch (error) {
        next(error)
    }
    //res.redirect('/')
}

export { handleRegister, handleLogin, handleLogout }
