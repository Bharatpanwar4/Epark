
import asyncHandler from "../middleware/asyncHandler.js";
import Product  from "../models/productModel.js";

//fetch  all products
// GET /api/products
// public
const getProducts =asyncHandler (async (req,res)=>{

    const products = await Product.find({});

    res.json(products);

})


//fetch  single products
// GET /api/products/:id
// public
const getProductById =asyncHandler (async (req,res)=>{

    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    }
    else{
    res.status(404)
   throw new Error('Resource not found')
}

})

//fetch  Create product
// Post /api/products
// private/admin
const createProduct =asyncHandler (async (req,res)=>{

const product = new Product({
  name:'Sample name',
  price : 0,
  user : req.user._id,
  image : '/images/sample.jpg',
  brand : 'sample brand',
  category : 'Sample category',
  countInStock:0,
  numReviews:0,
  description:'Sample description',

})
const createdProduct = await product.save()
res.status(201).json(createdProduct)
})

export {getProducts,getProductById,createProduct}