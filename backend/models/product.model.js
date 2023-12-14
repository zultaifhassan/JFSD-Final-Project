import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: String,
    },
    number: {
        type: String,
    }
})

const product = mongoose.model('Product', productSchema);
export default product;