const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Product = require('../models/Product')
const { protect, adminOnly } = require('../middleware/authMiddleware')

// GET DASHBOARD STATS — solo admin
router.get('/', protect, adminOnly, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments()
    const totalProducts = await Product.countDocuments()

    res.json({
      totalUsers,
      totalProducts
    })
  } catch (err) {
    res.status(500).json({ msg: 'Server error' })
  }
})

module.exports = router