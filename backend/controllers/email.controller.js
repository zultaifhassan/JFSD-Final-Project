import users from "../models/email.model.js";
import otpModel from "../models/otp.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Register
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(401).json({ message: "User Already Exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new users({ name, email, role, password: hashPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await users.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: "Password not matched" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, role },
      process.env.PRIVATE_KEY,
      { expiresIn: "2hr" }
    );

    res.status(200).json({
      message: "User logged in successfully",
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// For All Users
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await users.find();
    if (!allUsers) {
      res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({ allUsers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// For Single User
export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const singleUser = await users.findById(id);
    if (!singleUser) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ singleUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// To Update User
export const upDateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!findUser) {
      res.status(404).json({ message: "No user found" });
    }

    res.status(200).json({ findUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// To Delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const removeUser = await users.findByIdAndDelete(id);

    if (!removeUser) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(removeUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Forget Password
export const forgetPasword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await users.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zultaifhassan110@gmail.com",
        pass: "zgjsqdryfbyxtwfn",
      },
    });

    const generatedOTP = crypto.randomBytes(3).toString('hex');

    console.log(generatedOTP);

    const mailOptions = {
      from: "zultaifhassan110@gmail.com",
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP is ${generatedOTP}`,
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        res.status(500).json({ message: error.message });
      } else {
        const otpInstance = new otpModel({
          email,
          otp: generatedOTP,
        });
        await otpInstance.save();
        res.status(200).json({ message: "OTP sent successfully" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// Verify OTP
export const verifyOtp = async (req, res) => {
  try {
    const {email, otp, newPassword } = req.body;
    const OTP = await otpModel.findOne({ email, otp });
    console.log(email)
    console.log(OTP)

    if (!OTP) {
      res.status(400).json({ message: "Invalid OTP" });
      return;
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await users.updateOne({ email }, { $set: { password: hashedPassword } });
    await otpModel.deleteOne({ email });

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
