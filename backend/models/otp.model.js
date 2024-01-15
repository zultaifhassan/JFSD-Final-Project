import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    otp: {
        type: String,
    }
})

const otp = mongoose.model("otpVerify", otpSchema);
export default otp;