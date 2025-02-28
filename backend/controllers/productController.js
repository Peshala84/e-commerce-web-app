
const productModel = require('../models/productModel');
//Get Products API - /api/vi/products


exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword?{name: {
        $regex: req.query.keyword,
        $options: 'i'
    }}:{}
   const products = await productModel.find({});
    res.json({
        success: true,
        products
    })
}
//Get Single Product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try{
        const product  =  await productModel.findById(req.params.id);
        res.json({
            success: true,
            product
        })
    } catch(error){
        res.json({
            success: false,
            message:error.message
        })
    }

}

