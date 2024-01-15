import queries from "../models/query.model.js";


export const createQuery = async (req, res) => {
    try {
        const {name, email, phone, message} = req.body;
        const newQuery = new queries({name, email, phone, message});
        await newQuery.save();
        res.status(201).json(newQuery)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getAllQuery = async (req, res) => {
    try {
        const findAll = await queries.find();
        if(!findAll){
            res.status(404).json({message: 'Query not found'});
        }
        res.status(200).json(findAll)
    } catch (error) {
        res.status(500).json(error)
    }
}


export const deleteQuery = async (req, res) => {
    try {
        const { id } = req.params;
        const removeQuery = await queries.findByIdAndDelete(id)
        if(!removeQuery) {
            res.status(404).json({ message: "Product not found"})
        }

        res.status(200).json(removeQuery)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}