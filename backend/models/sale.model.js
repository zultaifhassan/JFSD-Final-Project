import mongoose from "mongoose";

const saleproductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: String,
    },
    newprice: {
        type: String,
    },
    percentage: {
        type: String,
    },
    image: {
        type: String
    }
})

const saleproduct = mongoose.model('Saleproducts', saleproductSchema);
export default saleproduct;