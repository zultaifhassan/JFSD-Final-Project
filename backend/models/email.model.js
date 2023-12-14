import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
    password: {
        type: String,
    }
})

const users = mongoose.model("Users", userSchema);
export default users;