import addCart from '../models/addTocart.model.js';


export const createCart = async (req, res) => {
    try {
        const { title, price } = req.body;
        
      const productCart = {
        title, price
      }

      const newCart = await addCart.create(productCart)
      await newCart.save();
      res.status(200).json(newCart);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}



export const getAllCart =  async (req, res) => {
  try {
      const allProducts = await addCart.find();

      if (!allProducts) {
          res.status(404).json({ message: "Product not found"})
      }
      res.status(200).json(allProducts);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}



export const deleteCartproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const removeCartproduct = await addCart.findByIdAndDelete(id);

    if (!removeCartproduct) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(removeCartproduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};