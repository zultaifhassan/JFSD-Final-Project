import mongoose from 'mongoose';


const settingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
    },
    name: {
        type: String,
    }
    
})

const settings = mongoose.model("Settings", settingSchema);
export default settings;