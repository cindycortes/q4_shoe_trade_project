const express = require('express')
const router = express.Router()

const shoes = require('../controllers/shoes')

// Shoes Routes
router.get('/shoes', shoes.getAllShoes) // list all shoes of size/type/etc
router.get('/shoes/:id', shoes.getUserCollection) // view users' shoe collection
router.post('/shoes', shoes.addShoe) // add shoe to DB
router.patch('/shoes/:id', shoes.shoeForSale) // post shoe for sale
router.patch('/shoes/purchase', shoes.purchase) // buy shoe
router.delete('/shoes/:id', shoes.delete) // remove shoe from collection w/o selling



module.exports = router