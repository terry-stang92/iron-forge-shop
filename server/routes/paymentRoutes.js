const express = require('express')
const router = express.Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { protect } = require('../middleware/authMiddleware')

// CREATE PAYMENT INTENT
router.post('/create-payment-intent', protect, async (req, res) => {
  const { amount } = req.body

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd'
    })

    res.json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    res.status(500).json({ msg: 'Server error' })
  }
})

module.exports = router