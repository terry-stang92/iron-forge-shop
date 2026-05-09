const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const { protect, adminOnly } = require('../middleware/authMiddleware')

// create 

router.post('/', protect, adminOnly, async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.json(product)
    }catch (err) {
        res.status(500).json({ msg: 'Server error' })

    }
    })

// read
router.get('/', async (req,res) => {
    try{
        const products = await Product.find()
        res.json(products)

    }catch (err) {
        res.status(500).json({ msg: 'Server error'})

    }
})

//update
router.put('/:id', protect, adminOnly, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(product)
    } catch (err) {
        res.status(500).json({ msg: 'Server error'})

    }
    
})

//delete
router.delete('/:id', protect, adminOnly, async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.json({ msg: 'Product deleted' })

    } catch (err) {
        res.status(500).json({ msg: 'Server error'})

    }
})

module.exports = router 