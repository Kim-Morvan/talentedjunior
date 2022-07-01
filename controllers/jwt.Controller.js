import jwt from 'jsonwebtoken';
import dotenv from "dotenv"; dotenv.config();

const createAccessToken = (getUserDetails) => {
    const roles = Object.values(getUserDetails.roles).filter(Boolean);
    return jwt.sign(
        { UserInfo:
            {
                _id: getUserDetails._id,
                roles: roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '60s' }
    );
}

const createRefreshToken = (getUserDetails) => {
    const roles = Object.values(getUserDetails.roles).filter(Boolean);
    return jwt.sign(
        { UserInfo:
            {
                _id: getUserDetails._id,
                roles: roles
            }
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '15d' }
    );
}

const verifyAccessToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers.Authorization;
        if(!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET,
            (error, decoded) => {
                if(error) return res.sendStatus(403);
                req._id = decoded.UserInfo._id;
                req.roles = decoded.UserInfo.roles;
                next();
            }
        )
    } catch (error) {
        console.error(error)
    }
}

export { createAccessToken, createRefreshToken, verifyAccessToken }
