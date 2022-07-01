import Joi from "joi"

const userSchema = Joi.object({
        username: Joi.string().alphanum().min(3),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(4).required().trim().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        profilePicture: Joi.string().default(''),
        coverPicture: Joi.string().default(''),
        followers: Joi.array().default([]),
        following: Joi.array().default([]),
        isAdmin: Joi.boolean().default(false),
        isSuperAdmin: Joi.boolean().default(false),
}, { timestamp: Joi.date().timestamp() });

export default userSchema
