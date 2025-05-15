// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/productController');

// Route GET /api/products
router.get('/', getProducts);

// Route GET /api/products/:id
router.get('/:id', getProductById);

module.exports = router;