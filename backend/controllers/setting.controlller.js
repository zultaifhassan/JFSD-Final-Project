import settings from "../models/setting.model.js"


export const createSetting = async (req, res) => {
    try{
        const {userId, name } = req.body;

        const newSetting = new settings({userId, name})
        await newSetting.save();
        res.status(201).json(newSetting)

    } catch(error){
        res.status(500).json({ message: error.message })
    }
}


export const getAllSettings = async (req, res) => {
    try {
        const allSettings = await settings.find().populate("userId");
        if(!allSettings) {
            res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json({allSettings});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};