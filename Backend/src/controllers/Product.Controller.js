const express = require('express')

const Product = require('../models/product.model');
const ApiFeatures = require("../utils/apifeatures");

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body)
    return res.status(200).send(product)
  } catch (e) {
    return res.status(500).json({ status: 'Failed', message: e.message })
  }
})

router.get('/', async (req, res) => {

  try {
    const resultPerPage = 24;
    const productsCount = await Product.countDocuments();
  
    const apiFeature = new ApiFeatures(Product.find(), req.query)
      .search()
      .filter().pagination(resultPerPage);
  
    let products = await apiFeature.query;
  
    let filteredProductsCount = products.length;
  
    res.status(200).json({
      products,
      productsCount,
      resultPerPage,
      filteredProductsCount,
    });
    
  } catch (e) {
    return res.status(500).json({ status: 'Failled', message: e.message })
  }
})




router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    return res.status(200).send(product)
  } catch (e) {
    return res.status(500).json({ status: 'Failled', message: e.message })
  }
})

module.exports = router
