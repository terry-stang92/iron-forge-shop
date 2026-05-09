const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')


dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.use('/api/products', require('./routes/productRoutes'))

app.use('/api/payments', require('./routes/paymentRoutes'))

app.use('/api/dashboard', require('./routes/dashboardRoutes'))

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

  app.listen(5000, () => console.log('Server running on port 5000'))

