import mongoose from 'mongoose';


const addTocart = new mongoose.Schema({
    title: {
        type: 'String',
    },
    price: {
        type: 'Number',
    }
})

const addCart = mongoose.model('Cart', addTocart);
export default addCart;