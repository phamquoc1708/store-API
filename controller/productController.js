
const Product = require('../model/product')

const getAllProducts = async (req, res, next) => {
    
    let result = Product.find();

    const products = await result;
    res.json({products: products, nbHits: products.length});
}

const getSingleProduct = async (req, res) => {
    let result = await Product.findById(req.params.id);
    res.json({result});
}

module.exports = {
    getAllProducts,
    getSingleProduct
}
