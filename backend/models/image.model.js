import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    image: {
        type: String,
    }
})

const images = mongoose.model('Images', imageSchema);
export default images;