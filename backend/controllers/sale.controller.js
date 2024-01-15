import saleproduct from '../models/sale.model.js';

export const createSaleProduct = async (req, res) => {
    try {
        const {title, price, newprice, percentage, image} = req.body;
        const newSaleproduct = new saleproduct({title, price, newprice, percentage, image});
        await newSaleproduct.save();
        res.status(200).json(newSaleproduct);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getSaleproducts = async (req, res) => {
    try {
        const allSaleProducts = await saleproduct.find();
        if(!allSaleProducts) {
            res.status(404).json({message: "Products not Found"});
        }
        res.status(200).json(allSaleProducts);

    } catch (error) {
        res.status(500).json({message: error});
    }
};



export const removeProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const removeProduct = await saleproduct.findByIdAndDelete(id)
        if(!removeProduct) {
            res.status(404).json({ message: "Product not found"})
        }

        res.status(200).json(removeProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}