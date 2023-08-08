import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
        username: { 
                type: String, 
                required: true, 
                unique: true 
        },
        email: { 
                type: String, 
                required: true, 
                unique: true
        },
        password: { 
                type: String, 
                required: true
        }, 
        roles: {
                User: {
                        type: Number, 
                        default: 1022
                }, 
                Employee: Number, 
                Admin: Number, 
                SuperAdmin: Number
        },
        refreshToken: String,
        profilePicture: { 
                type: String, 
                default: '' 
        },
        coverPicture: {
                type: String, 
                default: ''
        },
        likes: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
        retweets: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
        following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        followers: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { 
        timestamps: true 
});

export default mongoose.model('User', userSchema)
