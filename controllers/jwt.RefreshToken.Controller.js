import jwt from 'jsonwebtoken';
import dotenv from "dotenv"; dotenv.config();

import { database } from "../server.js";

const handleRefreshToken = async (req, res, next) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refresh_token = cookies.jwt;

    try {
        const getUserDetails = await database.collection("users").find({ refresh_token: refresh_token });
        if(!getUserDetails) return res.sendStatus(403);
        await database.collection("users").findOne({ _id: getUserDetails._id });

        jwt.verify(
            refresh_token,
            process.env.REFRESH_TOKEN_SECRET,
            (error, decoded) => {
                if(error || getUserDetails._id !== decoded._id) return res.sendStatus(403);
                const access_token = jwt.sign(
                    { UserInfo:
                        {
                            _id: getUserDetails._id,
                            roles: getUserDetails.roles
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '60s' }
                );
                res.json({ access_token })
            }
        )
    } catch (error) {
        next(error)
    }
}

export default handleRefreshToken
