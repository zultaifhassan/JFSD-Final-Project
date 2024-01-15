import images from "../models/image.model.js";


export const ImageUpload = async (req, res) => {
    try {
        const newImages = new images({
            image:req.file ? req.file.fileName : undefined,
        })

        await newImages.save();
        res.status(200).json({newImages});
    } catch (error) {
        res.status(500).json(err.message);
    }
}

export const FindImages = async (req, res) => {
    try {
        const listImages = await images.find();
        if(!listImages) {
            res.status(404).json("Images not found")
        }
        await res.status(200).json({listImages})
    } catch (error) {
        res.status(500).json(error);
    }
}