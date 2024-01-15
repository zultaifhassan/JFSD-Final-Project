import Product from '../models/product.model.js';



export const productCreate = async (req, res) => {
    try {
      const { title, price, imageUrl } = req.body;
        
      const productData = {
        title, price, imageUrl
      }

      const newProduct = await Product.create(productData)
      await newProduct.save();
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



// For All Products

export const getAllProducts =  async (req, res) => {
    try {
        const allProducts = await Product.find();

        if (!allProducts) {
            res.status(404).json({ message: "Product not found"})
        }
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// Fetching Limit of producst

export const getlimitedProducts =  async (req, res) => {
    try {
        const allProducts = await Product.find().limit(10);
        if (!allProducts) {
            res.status(404).json({ message: "Product not found"})
        }
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// Get Single Product

export const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const findProduct = await Product.findById(id);

        if(!findProduct) {
            res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(findProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Update Product Details

export const upProductDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });

        if(!updateProduct) {
            res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// To Delete Products

export const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const removeProduct = await Product.findByIdAndDelete(id)
        if(!removeProduct) {
            res.status(404).json({ message: "Product not found"})
        }

        res.status(200).json(removeProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




export const catogaryWise = async (req, res) => {
    try {
        const products = await Product.find({ category });
    res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



// Images

// export const ImageUpload = async (req, res) => {
//     try {
//         const newImages = new Product({
//             image:req.file ? req.file.fileName : undefined,
//         })

//         await newImages.save();
//         res.status(200).json({newImages});
//     } catch (error) {
//         res.status(500).json(err.message);
//     }
// }