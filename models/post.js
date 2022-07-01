import Joi from 'joi';

const postSchema = Joi.object({
    userId: Joi.string().alphanum().required(),
    content: Joi.string().max(30),
    image: Joi.string(),
    likes: Joi.array().default([]),
}, { timestamp: Joi.date().timestamp() });

export default postSchema;